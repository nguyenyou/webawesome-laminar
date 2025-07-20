package doc.macros

import com.raquo.laminar.api.L

import scala.quoted.*

object Source {

  type AnnotationType = (source: String, fullSource: String, element: L.HtmlElement)

  @annotation.tailrec
  private def trimLeftAll(listStr: Array[String]): Array[String] =
    if (
      listStr.nonEmpty && listStr.forall(
        _.headOption forall Character.isWhitespace
      )
    ) {
      trimLeftAll(listStr.map(str => if (str.isEmpty) str else str.tail))
    } else {
      listStr
    }

  private def indexWhereNotWhitespace(string: Option[String]) =
    string.fold(-1)(_.indexWhere(c => !c.isWhitespace))

  /** Filters lines to only include content between <show> and </show> comments. If no show markers are found, returns
    * all lines. Supports multiple show/hide sections.
    */
  private def filterShowLines(lines: Array[String]): Array[String] = {
    val showStartPattern = """.*//\s*<show>.*""".r
    val showEndPattern   = """.*//\s*</show>.*""".r

    var isInShowSection = false
    var hasShowMarkers  = false
    val filteredLines   = scala.collection.mutable.ArrayBuffer[String]()

    for (line <- lines) {
      line match {
        case showStartPattern() =>
          hasShowMarkers = true
          isInShowSection = true
        // Don't include the <show> comment line itself
        case showEndPattern() =>
          isInShowSection = false
        // Don't include the </show> comment line itself
        case _ =>
          if (isInShowSection) {
            filteredLines += line
          }
      }
    }

    // If no show markers were found, return all lines
    if (!hasShowMarkers) lines else filteredLines.toArray
  }

  /** Processes inline show/hide comments on individual lines. Inline comments have higher priority than block-level
    * markers.
    *   - Lines with `// show` are always included
    *   - Lines with `// hide` are always excluded
    *   - Other lines follow the default behavior from block filtering
    */
  private def processInlineShowHide(lines: Array[String]): Array[String] = {
    val showPattern = """.*//\s*show\s*$""".r
    val hidePattern = """.*//\s*hide\s*$""".r

    val filteredLines = scala.collection.mutable.ArrayBuffer[String]()

    for (line <- lines) {
      line match {
        case showPattern() =>
          // Remove the `// show` comment and include the line
          val cleanedLine = line.replaceAll("""//\s*show\s*$""", "").trim
          filteredLines += cleanedLine
        case hidePattern() =>
        // Exclude lines with `// hide` completely
        case _ =>
          // Include all other lines as-is
          filteredLines += line
      }
    }

    filteredLines.toArray
  }

  /** Filters lines to exclude content between <hide> and </hide> comments. This has higher priority than <show>/<show>
    * but lower than inline comments. Supports multiple hide sections.
    */
  private def filterHideLines(lines: Array[String]): Array[String] = {
    val hideStartPattern = """.*//\s*<hide>.*""".r
    val hideEndPattern   = """.*//\s*</hide>.*""".r

    var isInHideSection = false
    val filteredLines   = scala.collection.mutable.ArrayBuffer[String]()

    for (line <- lines) {
      line match {
        case hideStartPattern() =>
          isInHideSection = true
        // Don't include the <hide> comment line itself
        case hideEndPattern() =>
          isInHideSection = false
        // Don't include the </hide> comment line itself
        case _ =>
          if (!isInHideSection) {
            filteredLines += line
          }
      }
    }

    filteredLines.toArray
  }

  def annotateImpl(
      element: Expr[L.HtmlElement]
  )(using
      Quotes
  ): Expr[AnnotationType] = {

    import quotes.reflect.*
    // get original source
    val sourceFile = Position.ofMacroExpansion.sourceFile.content.get
    val startLine  = Position.ofMacroExpansion.startLine + 1
    val endLine    = Position.ofMacroExpansion.endLine
    var lines      = sourceFile.split("\n").slice(startLine, endLine)

    // capture full source before any processing
    var fullSourceLines = lines.clone()

    // remove wrapping `{}` if exist for both full source and processed lines
    if (
      lines.headOption.contains("{") &&
      lines.lastOption.exists(_.matches(" +}"))
    ) {
      lines = lines.drop(1).dropRight(1)
      fullSourceLines = fullSourceLines.drop(1).dropRight(1)
    }

    // format full source (apply same whitespace trimming as processed source)
    val headFirstNonWS = indexWhereNotWhitespace(fullSourceLines.headOption)
    val lastFirstNonWS = indexWhereNotWhitespace(fullSourceLines.lastOption)
    if (headFirstNonWS == 0 && lastFirstNonWS > 0) {
      fullSourceLines.headOption.foreach { orgHead =>
        val newHead = (" " * (lastFirstNonWS - headFirstNonWS)) + orgHead
        fullSourceLines.update(0, newHead)
      }
    }
    val fullSource = trimLeftAll(fullSourceLines).mkString("\n")

    // filter lines based on <show> and </show> comments
    lines = filterShowLines(lines)

    // filter lines based on <hide> and </hide> comments (higher priority than show blocks)
    lines = filterHideLines(lines)

    // process inline show/hide comments (higher priority)
    lines = processInlineShowHide(lines)

    // add whitespace to first line to align it with last line
    val headFirstNonWSProcessed = indexWhereNotWhitespace(lines.headOption)
    val lastFirstNonWSProcessed = indexWhereNotWhitespace(lines.lastOption)
    if (headFirstNonWSProcessed == 0 && lastFirstNonWSProcessed > 0) {
      lines.headOption.foreach { orgHead =>
        val newHead = (" " * (lastFirstNonWSProcessed - headFirstNonWSProcessed)) + orgHead
        lines.update(0, newHead)
      }
    }

    // format and export
    val output = trimLeftAll(lines).mkString("\n")
    Expr.ofTuple(Expr[String](output), Expr[String](fullSource), element)
  }

  inline def annotate(inline element: L.HtmlElement): AnnotationType = ${
    annotateImpl('element)
  }

}
