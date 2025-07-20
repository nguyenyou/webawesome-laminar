package io.github.nguyenyou.webawesome.std

import org.scalablytyped.runtime.StringDictionary
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}


/**
  * Defines the `TReturn` type used for built-in iterators produced by `Array`, `Map`, `Set`, and others.
  * This is `undefined` when `strictBuiltInIteratorReturn` is `true`; otherwise, this is `any`.
  */
type BuiltinIteratorReturn = /* import warning: transforms.QualifyReferences#resolveTypeRef many Couldn't qualify intrinsic */ Any

type CSSNumberish = Double | CSSNumericValue

type DOMHighResTimeStamp = Double

/**
  * Used by the dataset HTML attribute to represent data for custom attributes added to elements.
  *
  * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMStringMap)
  */
type DOMStringMap = /* standard dom */
StringDictionary[js.UndefOr[String]]

type EventListener = js.Function1[/* evt */ org.scalajs.dom.Event, Unit]

type EventListenerOrEventListenerObject = EventListener | EventListenerObject

/**
  * Exclude from T those types that are assignable to U
  */
/** NOTE: Conditional type definitions are impossible to translate to Scala.
  * See https://www.typescriptlang.org/docs/handbook/2/conditional-types.html for an intro.
  * This RHS of the type alias is guess work. You should cast if it's not correct in your case.
  * TS definition: {{{
  T extends U ? never : T
  }}}
  */
type Exclude[T, U] = T

type OnErrorEventHandler = OnErrorEventHandlerNonNull | Null

type OnErrorEventHandlerNonNull = js.Function5[
/* event */ org.scalajs.dom.Event | String, 
/* source */ js.UndefOr[String], 
/* lineno */ js.UndefOr[Double], 
/* colno */ js.UndefOr[Double], 
/* error */ js.UndefOr[js.Error], 
Any]

type PropertyKey = String | Double | js.Symbol

/**
  * Construct a type with a set of properties K of type T
  */
/** NOTE: Mapped type definitions are impossible to translate to Scala.
  * See https://www.typescriptlang.org/docs/handbook/2/mapped-types.html for an intro.
  * This translation throws away the known field names. 
  * TS definition: {{{
  {[ P in K ]: T}
  }}}
  */
type Record[K /* <: /* keyof any */ String */, T] = StringDictionary[T]

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/StaticRange) */
type StaticRange = AbstractRange

type WeakKey = /* import warning: importer.ImportType#apply Failed type conversion: std.WeakKeyTypes['object'] */ js.Any
