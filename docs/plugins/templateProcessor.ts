import type { TemplateContext, TemplateType } from "./previewUtils";

/**
 * Convert hyphenated string to camelCase
 * e.g., "zoomable-frame" -> "zoomableFrame"
 * e.g., "button-group-item" -> "buttonGroupItem"
 * Preserves strings without hyphens unchanged
 */
export const toCamelCase = (str: string): string => {
  if (!str.includes("-")) {
    return str;
  }
  const parts = str.split("-");
  return parts[0] + parts.slice(1).map(part => 
    part.charAt(0).toUpperCase() + part.slice(1)
  ).join("");
};

/**
 * Indent code by adding spaces to each line
 */
const indentCode = (code: string | null | undefined, spaces: number = 4): string => {
  if (!code) return "";
  const indent = " ".repeat(spaces);
  return code.split("\n").map(line => `${indent}${line}`).join("\n");
};

/**
 * Parse Scala code to identify complete top-level expressions
 * by tracking parentheses depth. Only splits at top-level boundaries,
 * preserving nested structures.
 */
export const parseTopLevelExpressions = (code: string): string[] => {
  if (!code.trim()) {
    return [];
  }

  const expressions: string[] = [];
  let currentExpression = "";
  let depth = 0;
  let i = 0;
  let inString = false;
  let stringChar: string | null = null;
  let inSingleLineComment = false;
  let inMultiLineComment = false;

  while (i < code.length) {
    const char = code[i];
    const prevChar = i > 0 ? code[i - 1] : null;
    const nextChar = i < code.length - 1 ? code[i + 1] : null;

    // Handle string literals
    if (!inSingleLineComment && !inMultiLineComment) {
      if (char === '"' || char === "'" || char === '`') {
        // Check if this quote is escaped by counting backslashes
        let backslashCount = 0;
        let j = i - 1;
        while (j >= 0 && code[j] === '\\') {
          backslashCount++;
          j--;
        }
        // If even number of backslashes (or zero), the quote is not escaped
        const isEscaped = backslashCount % 2 === 1;
        
        if (!isEscaped) {
          if (!inString) {
            inString = true;
            stringChar = char;
          } else if (char === stringChar) {
            inString = false;
            stringChar = null;
          }
        }
        currentExpression += char;
        i++;
        continue;
      }
    }

    // Handle comments
    if (!inString) {
      if (char === '/' && nextChar === '/') {
        inSingleLineComment = true;
        currentExpression += char;
        i++;
        continue;
      }
      if (inSingleLineComment && char === '\n') {
        inSingleLineComment = false;
        currentExpression += char;
        i++;
        continue;
      }
      if (char === '/' && nextChar === '*') {
        inMultiLineComment = true;
        currentExpression += char;
        i++;
        continue;
      }
      if (inMultiLineComment && char === '*' && nextChar === '/') {
        inMultiLineComment = false;
        currentExpression += char;
        if (nextChar) {
          currentExpression += nextChar;
        }
        i += 2;
        continue;
      }
    }

    // Skip processing inside comments or strings
    if (inString || inSingleLineComment || inMultiLineComment) {
      currentExpression += char;
      i++;
      continue;
    }

    // Track parentheses depth
    if (char === '(') {
      depth++;
      currentExpression += char;
    } else if (char === ')') {
      depth--;
      currentExpression += char;
      
      // When depth returns to 0, we have a complete top-level expression
      if (depth === 0) {
        // Check if this is followed by another opening paren (curried call)
        // by looking ahead past whitespace
        let lookAhead = i + 1;
        while (lookAhead < code.length && /\s/.test(code[lookAhead])) {
          lookAhead++;
        }
        const isCurriedCall = lookAhead < code.length && code[lookAhead] === '(';
        
        // Only split if it's not a curried call
        if (!isCurriedCall) {
          // Preserve the expression as-is (including internal whitespace/newlines)
          // Only trim if it's completely empty
          if (currentExpression.trim().length > 0) {
            expressions.push(currentExpression);
          }
          currentExpression = "";
          // Skip whitespace after the expression
          i++;
          while (i < code.length && /\s/.test(code[i])) {
            i++;
          }
          continue;
        }
        // If it's a curried call, continue building the expression
      }
    } else {
      currentExpression += char;
    }

    i++;
  }

  // Handle any remaining expression (in case of unclosed parentheses or incomplete code)
  if (currentExpression.trim().length > 0) {
    expressions.push(currentExpression);
  }

  return expressions;
};

/**
 * Group expressions by blank lines (2+ consecutive newlines).
 * Returns an array of groups, where each group is an array of expressions.
 */
const groupExpressionsByBlankLines = (code: string, expressions: string[]): string[][] => {
  if (expressions.length === 0) {
    return [];
  }

  const groups: string[][] = [];
  let currentGroup: string[] = [];
  let prevExprEnd = 0;

  for (let i = 0; i < expressions.length; i++) {
    const expr = expressions[i];
    
    // Find the expression in the code starting from where the previous expression ended
    const exprStart = code.indexOf(expr, prevExprEnd);
    if (exprStart === -1) {
      // If we can't find it, just add to current group
      currentGroup.push(expr);
      continue;
    }

    // Check if there's a blank line (2+ consecutive newlines) between previous and current expression
    if (i > 0) {
      const betweenExpressions = code.substring(prevExprEnd, exprStart);
      // Check if there are 2+ consecutive newlines (blank line)
      const hasBlankLine = /\n\s*\n/.test(betweenExpressions);
      
      if (hasBlankLine) {
        // Start a new group
        if (currentGroup.length > 0) {
          groups.push(currentGroup);
        }
        currentGroup = [expr];
      } else {
        // Continue current group
        currentGroup.push(expr);
      }
    } else {
      // First expression, start first group
      currentGroup.push(expr);
    }

    prevExprEnd = exprStart + expr.length;
  }

  // Add the last group
  if (currentGroup.length > 0) {
    groups.push(currentGroup);
  }

  return groups.length > 0 ? groups : [expressions];
};

/**
 * Apply preview template: wraps user code in a Scala method
 */
export const applyTemplate = (ctx: TemplateContext): string => {
  const userCode = ctx.userCode || "";
  const exampleId = `example${ctx.counter}`;
  
  return `def ${exampleId}() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import doc.facades.*
  import org.scalajs.dom.window
  import io.github.nguyenyou.webawesome.laminar.*
  import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
  import io.github.nguyenyou.webawesome.laminar.CommonKeys.TreeSelection
  import scala.scalajs.js

  val container = dom.document.querySelector("#${exampleId}")
  if (container != null) {
    render(container, {
${indentCode(userCode, 6)}
    })
  }
}
  `;
};

/**
 * Apply example template: wraps user code in a Scala method with div() wrapper
 */
export const applyExampleTemplate = (ctx: TemplateContext): string => {
  const userCode = ctx.userCode || "";
  const exampleId = `example${ctx.counter}`;
  
  return `def ${exampleId}() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import doc.facades.*
  import org.scalajs.dom.window
  import io.github.nguyenyou.webawesome.laminar.*
  import io.github.nguyenyou.webawesome.laminar.SharedTypes.*
  import io.github.nguyenyou.webawesome.laminar.CommonKeys.TreeSelection
  import scala.scalajs.js

  val container = dom.document.querySelector("#${exampleId}")
  if (container != null) {
    render(container, {
      div(
${indentCode(userCode, 8)}
      )
    })
  }
}
  `;
};

/**
 * Apply examples template: converts newline-separated code into comma-separated arguments
 * wrapped in Examples(...) or VerticalExamples(...) calls, grouped by blank lines, and wrapped in ExampleGroups(...).
 * Only adds commas between complete top-level expressions, preserving nested structures.
 */
export const applyExamplesTemplate = (ctx: TemplateContext): string => {
  const userCode = ctx.userCode || "";
  const exampleId = `example${ctx.counter}`;
  const useVertical = ctx.vertical === true;
  
  // Choose wrapper function based on vertical flag
  const wrapperFunction = useVertical ? "VerticalExamples" : "Examples";
  
  // Parse into top-level expressions (preserving nested structure)
  const expressions = parseTopLevelExpressions(userCode);
  
  // Group expressions by blank lines
  const groups = groupExpressionsByBlankLines(userCode, expressions);
  
  // Create Examples() or VerticalExamples() call for each group
  const examplesCalls = groups.map(group => {
    // Join expressions in group with commas, preserving their internal structure
    const examplesArgs = group
      .map(expr => expr.endsWith(",") ? expr : `${expr},`)
      .join("\n");
    
    return `${wrapperFunction}(
${indentCode(examplesArgs, 2)}
)`;
  });
  
  // Wrap all Examples() calls in ExampleGroups()
  const exampleGroupsArgs = examplesCalls
    .map((call, index) => {
      // Add comma after each call except the last one
      return index < examplesCalls.length - 1 ? `${call},` : call;
    })
    .join("\n");
  
  const exampleGroupsCall = `ExampleGroups(
${indentCode(exampleGroupsArgs, 2)}
)`;
  
  return `def ${exampleId}() = {
  import org.scalajs.dom
  import com.raquo.laminar.api.L.*
  import doc.*
  import io.github.nguyenyou.webawesome.laminar.*
  import scala.scalajs.js

  val container = dom.document.querySelector("#${exampleId}")
  if (container != null) {
    render(container, {
${indentCode(exampleGroupsCall, 6)}
    })
  }
}
  `;
};

/**
 * Apply template based on template type
 * Switches between different template implementations
 */
export const applyTemplateByType = (
  templateType: TemplateType,
  ctx: TemplateContext
): string => {
  switch (templateType) {
    case "examples":
      return applyExamplesTemplate(ctx);
    case "example":
      return applyExampleTemplate(ctx);
    case "preview":
    default:
      return applyTemplate(ctx);
  }
};

