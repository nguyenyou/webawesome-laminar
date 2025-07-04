package www

import www.Main

import utest.*

object FooTests extends TestSuite {
  def tests = Tests {
    test("hello") {
      val result = Main.hello()
      assert(result.startsWith("Hello"))
      result
    }
    test("world") {
      val result = Main.hello()
      assert(result.endsWith("World"))
      result
    }
  }
}
