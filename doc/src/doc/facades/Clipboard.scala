package doc.facades

import org.scalajs.dom

import scala.concurrent.Future
import scala.concurrent.Promise
import scala.scalajs.js
import scala.util.Failure
import scala.util.Success
import scala.util.Try

@js.native
trait Clipboard extends js.Object {
  def writeText(text: String): js.Promise[Unit] = js.native
}

object Clipboard {

  def writeText(text: String): Future[Unit] = {
    val promise = Promise[Unit]()
    Try(
      dom.window
        .asInstanceOf[js.Dynamic]
        .navigator
        .clipboard
        .asInstanceOf[Clipboard]
        .writeText(text)
    ) match {
      case Success(jsPromise) =>
        jsPromise
          .`then`(_ => {
            promise.success(())
            ()
          })
          .`catch`(err => {
            promise.failure(new RuntimeException(s"Failed to copy: $err"))
            ()
          })
      case Failure(err) =>
        promise.failure(err)
    }
    promise.future
  }

}
