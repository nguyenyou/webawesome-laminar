package io.github.nguyenyou.webawesome.litReactiveElement

import io.github.nguyenyou.webawesome.litReactiveElement.reactiveControllerMod.ReactiveController
import io.github.nguyenyou.webawesome.litReactiveElement.reactiveControllerMod.ReactiveControllerHost
import io.github.nguyenyou.webawesome.std.AddEventListenerOptions
import io.github.nguyenyou.webawesome.std.EventListenerOrEventListenerObject
import io.github.nguyenyou.webawesome.std.HTMLElement
import io.github.nguyenyou.webawesome.std.HTMLSlotElement
import io.github.nguyenyou.webawesome.std.Map
import io.github.nguyenyou.webawesome.std.PropertyKey
import org.scalablytyped.runtime.StringDictionary
import org.scalajs.dom.DocumentFragment
import org.scalajs.dom.Element
import org.scalajs.dom.EventListenerOptions
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object mod {
  
  @JSImport("@lit/reactive-element", "CSSResult")
  @js.native
  /* private */ open class CSSResult ()
    extends io.github.nguyenyou.webawesome.litReactiveElement.cssTagMod.CSSResult
  
  /* note: abstract class */ @JSImport("@lit/reactive-element", "ReactiveElement")
  @js.native
  open class ReactiveElement ()
    extends StObject
       with HTMLElement
       with ReactiveControllerHost {
    
    /**
      * Set of controllers.
      */
    /* private */ var __controllers: Any = js.native
    
    /**
      * Records property default values when the
      * `useDefault` option is used.
      */
    /* private */ var __defaultValues: Any = js.native
    
    /**
      * Sets up the element to asynchronously update.
      */
    /* private */ var __enqueueUpdate: Any = js.native
    
    /**
      * Internal only override point for customizing work done when elements
      * are constructed.
      */
    /* private */ var __initialize: Any = js.native
    
    /* private */ var __instanceProperties: Any = js.native
    
    /* private */ var __markUpdated: Any = js.native
    
    /* private */ var __propertyToAttribute: Any = js.native
    
    /**
      * Properties that should be reflected when updated.
      */
    /* private */ var __reflectingProperties: Any = js.native
    
    /**
      * Name of currently reflecting property
      */
    /* private */ var __reflectingProperty: Any = js.native
    
    /**
      * Fixes any properties set on the instance before upgrade time.
      * Otherwise these would shadow the accessor and break these properties.
      * The properties are stored in a Map which is played back after the
      * constructor runs.
      */
    /* private */ var __saveInstanceProperties: Any = js.native
    
    /* private */ var __updatePromise: Any = js.native
    
    /**
      * Adds a controller to the host, which sets up the controller's lifecycle
      * methods to be called with the host's lifecycle.
      */
    /* CompleteClass */
    override def addController(controller: ReactiveController): Unit = js.native
    
    /* InferMemberOverrides */
    /* InferMemberOverrides */
    override def addEventListener(`type`: String, callback: EventListenerOrEventListenerObject): Unit = js.native
    /* InferMemberOverrides */
    /* InferMemberOverrides */
    override def addEventListener(`type`: String, callback: EventListenerOrEventListenerObject, options: AddEventListenerOptions): Unit = js.native
    /* InferMemberOverrides */
    /* InferMemberOverrides */
    override def addEventListener(`type`: String, callback: EventListenerOrEventListenerObject, options: Boolean): Unit = js.native
    
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaAtomic) */
    /* standard dom */
    /* CompleteClass */
    var ariaAtomic: String | Null = js.native
    
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaAutoComplete) */
    /* standard dom */
    /* CompleteClass */
    var ariaAutoComplete: String | Null = js.native
    
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBrailleLabel) */
    /* standard dom */
    /* CompleteClass */
    var ariaBrailleLabel: String | Null = js.native
    
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBrailleRoleDescription) */
    /* standard dom */
    /* CompleteClass */
    var ariaBrailleRoleDescription: String | Null = js.native
    
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBusy) */
    /* standard dom */
    /* CompleteClass */
    var ariaBusy: String | Null = js.native
    
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaChecked) */
    /* standard dom */
    /* CompleteClass */
    var ariaChecked: String | Null = js.native
    
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColCount) */
    /* standard dom */
    /* CompleteClass */
    var ariaColCount: String | Null = js.native
    
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColIndex) */
    /* standard dom */
    /* CompleteClass */
    var ariaColIndex: String | Null = js.native
    
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColIndexText) */
    /* standard dom */
    /* CompleteClass */
    var ariaColIndexText: String | Null = js.native
    
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColSpan) */
    /* standard dom */
    /* CompleteClass */
    var ariaColSpan: String | Null = js.native
    
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaCurrent) */
    /* standard dom */
    /* CompleteClass */
    var ariaCurrent: String | Null = js.native
    
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDescription) */
    /* standard dom */
    /* CompleteClass */
    var ariaDescription: String | Null = js.native
    
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDisabled) */
    /* standard dom */
    /* CompleteClass */
    var ariaDisabled: String | Null = js.native
    
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaExpanded) */
    /* standard dom */
    /* CompleteClass */
    var ariaExpanded: String | Null = js.native
    
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaHasPopup) */
    /* standard dom */
    /* CompleteClass */
    var ariaHasPopup: String | Null = js.native
    
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaHidden) */
    /* standard dom */
    /* CompleteClass */
    var ariaHidden: String | Null = js.native
    
    /* standard dom */
    /* CompleteClass */
    var ariaInvalid: String | Null = js.native
    
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaKeyShortcuts) */
    /* standard dom */
    /* CompleteClass */
    var ariaKeyShortcuts: String | Null = js.native
    
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLabel) */
    /* standard dom */
    /* CompleteClass */
    var ariaLabel: String | Null = js.native
    
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLevel) */
    /* standard dom */
    /* CompleteClass */
    var ariaLevel: String | Null = js.native
    
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLive) */
    /* standard dom */
    /* CompleteClass */
    var ariaLive: String | Null = js.native
    
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaModal) */
    /* standard dom */
    /* CompleteClass */
    var ariaModal: String | Null = js.native
    
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaMultiLine) */
    /* standard dom */
    /* CompleteClass */
    var ariaMultiLine: String | Null = js.native
    
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaMultiSelectable) */
    /* standard dom */
    /* CompleteClass */
    var ariaMultiSelectable: String | Null = js.native
    
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaOrientation) */
    /* standard dom */
    /* CompleteClass */
    var ariaOrientation: String | Null = js.native
    
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPlaceholder) */
    /* standard dom */
    /* CompleteClass */
    var ariaPlaceholder: String | Null = js.native
    
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPosInSet) */
    /* standard dom */
    /* CompleteClass */
    var ariaPosInSet: String | Null = js.native
    
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPressed) */
    /* standard dom */
    /* CompleteClass */
    var ariaPressed: String | Null = js.native
    
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaReadOnly) */
    /* standard dom */
    /* CompleteClass */
    var ariaReadOnly: String | Null = js.native
    
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRelevant) */
    /* standard dom */
    /* CompleteClass */
    var ariaRelevant: String | Null = js.native
    
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRequired) */
    /* standard dom */
    /* CompleteClass */
    var ariaRequired: String | Null = js.native
    
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRoleDescription) */
    /* standard dom */
    /* CompleteClass */
    var ariaRoleDescription: String | Null = js.native
    
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowCount) */
    /* standard dom */
    /* CompleteClass */
    var ariaRowCount: String | Null = js.native
    
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowIndex) */
    /* standard dom */
    /* CompleteClass */
    var ariaRowIndex: String | Null = js.native
    
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowIndexText) */
    /* standard dom */
    /* CompleteClass */
    var ariaRowIndexText: String | Null = js.native
    
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowSpan) */
    /* standard dom */
    /* CompleteClass */
    var ariaRowSpan: String | Null = js.native
    
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSelected) */
    /* standard dom */
    /* CompleteClass */
    var ariaSelected: String | Null = js.native
    
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSetSize) */
    /* standard dom */
    /* CompleteClass */
    var ariaSetSize: String | Null = js.native
    
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSort) */
    /* standard dom */
    /* CompleteClass */
    var ariaSort: String | Null = js.native
    
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueMax) */
    /* standard dom */
    /* CompleteClass */
    var ariaValueMax: String | Null = js.native
    
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueMin) */
    /* standard dom */
    /* CompleteClass */
    var ariaValueMin: String | Null = js.native
    
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueNow) */
    /* standard dom */
    /* CompleteClass */
    var ariaValueNow: String | Null = js.native
    
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueText) */
    /* standard dom */
    /* CompleteClass */
    var ariaValueText: String | Null = js.native
    
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/assignedSlot) */
    /* standard dom */
    /* CompleteClass */
    override val assignedSlot: HTMLSlotElement | Null = js.native
    
    /**
      * Synchronizes property values when attributes change.
      *
      * Specifically, when an attribute is set, the corresponding property is set.
      * You should rarely need to implement this callback. If this method is
      * overridden, `super.attributeChangedCallback(name, _old, value)` must be
      * called.
      *
      * See [responding to attribute changes](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements#responding_to_attribute_changes)
      * on MDN for more information about the `attributeChangedCallback`.
      * @category attributes
      */
    def attributeChangedCallback(name: String): Unit = js.native
    def attributeChangedCallback(name: String, _old: String): Unit = js.native
    def attributeChangedCallback(name: String, _old: String, value: String): Unit = js.native
    def attributeChangedCallback(name: String, _old: Null, value: String): Unit = js.native
    
    /**
      * On first connection, creates the element's renderRoot, sets up
      * element styling, and enables updating.
      * @category lifecycle
      */
    def connectedCallback(): Unit = js.native
    
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/contentEditable) */
    /* standard dom */
    /* CompleteClass */
    var contentEditable: String = js.native
    
    /**
      * Returns the node into which the element should render and by default
      * creates and returns an open shadowRoot. Implement to customize where the
      * element's DOM is rendered. For example, to render into the element's
      * childNodes, return `this`.
      *
      * @return Returns a node into which to render.
      * @category rendering
      */
    /* protected */ def createRenderRoot(): org.scalajs.dom.HTMLElement | DocumentFragment = js.native
    
    /**
      * Allows for `super.disconnectedCallback()` in extensions while
      * reserving the possibility of making non-breaking feature additions
      * when disconnecting at some point in the future.
      * @category lifecycle
      */
    def disconnectedCallback(): Unit = js.native
    
    /**
      * Note, this method should be considered final and not overridden. It is
      * overridden on the element instance with a function that triggers the first
      * update.
      * @category updates
      */
    /* protected */ def enableUpdating(_requestedUpdate: Boolean): Unit = js.native
    
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/enterKeyHint) */
    /* standard dom */
    /* CompleteClass */
    var enterKeyHint: String = js.native
    
    /**
      * Invoked when the element is first updated. Implement to perform one time
      * work on the element after update.
      *
      * ```ts
      * firstUpdated() {
      *   this.renderRoot.getElementById('my-text-area').focus();
      * }
      * ```
      *
      * Setting properties inside this method will trigger the element to update
      * again after this update cycle completes.
      *
      * @param _changedProperties Map of changed properties with old values
      * @category updates
      */
    /* protected */ def firstUpdated(_changedProperties: PropertyValues[Any]): Unit = js.native
    
    /**
      * Override point for the `updateComplete` promise.
      *
      * It is not safe to override the `updateComplete` getter directly due to a
      * limitation in TypeScript which means it is not possible to call a
      * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
      * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
      * This method should be overridden instead. For example:
      *
      * ```ts
      * class MyElement extends LitElement {
      *   override async getUpdateComplete() {
      *     const result = await super.getUpdateComplete();
      *     await this._myChild.updateComplete;
      *     return result;
      *   }
      * }
      * ```
      *
      * @return A promise of a boolean that resolves to true if the update completed
      *     without triggering another update.
      * @category updates
      */
    /* protected */ def getUpdateComplete(): js.Promise[Boolean] = js.native
    
    /**
      * Is set to `true` after the first update. The element code cannot assume
      * that `renderRoot` exists before the element `hasUpdated`.
      * @category updates
      */
    var hasUpdated: Boolean = js.native
    
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/inputMode) */
    /* standard dom */
    /* CompleteClass */
    var inputMode: String = js.native
    
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/isContentEditable) */
    /* standard dom */
    /* CompleteClass */
    override val isContentEditable: Boolean = js.native
    
    /**
      * True if there is a pending update as a result of calling `requestUpdate()`.
      * Should only be read.
      * @category updates
      */
    var isUpdatePending: Boolean = js.native
    
    /**
      * Returns the first following sibling that is an element, and null otherwise.
      *
      * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CharacterData/nextElementSibling)
      */
    /* standard dom */
    /* CompleteClass */
    override val nextElementSibling: Element | Null = js.native
    
    /**
      * Performs an element update. Note, if an exception is thrown during the
      * update, `firstUpdated` and `updated` will not be called.
      *
      * Call `performUpdate()` to immediately process a pending update. This should
      * generally not be needed, but it can be done in rare cases when you need to
      * update synchronously.
      *
      * @category updates
      */
    /* protected */ def performUpdate(): Unit = js.native
    
    /**
      * Returns the first preceding sibling that is an element, and null otherwise.
      *
      * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CharacterData/previousElementSibling)
      */
    /* standard dom */
    /* CompleteClass */
    override val previousElementSibling: Element | Null = js.native
    
    /**
      * Removes a controller from the host.
      */
    /* CompleteClass */
    override def removeController(controller: ReactiveController): Unit = js.native
    
    /* InferMemberOverrides */
    /* InferMemberOverrides */
    override def removeEventListener(`type`: String, callback: EventListenerOrEventListenerObject): Unit = js.native
    /* InferMemberOverrides */
    /* InferMemberOverrides */
    override def removeEventListener(`type`: String, callback: EventListenerOrEventListenerObject, options: EventListenerOptions): Unit = js.native
    /* InferMemberOverrides */
    /* InferMemberOverrides */
    override def removeEventListener(`type`: String, callback: EventListenerOrEventListenerObject, options: Boolean): Unit = js.native
    
    /**
      * Node or ShadowRoot into which element DOM should be rendered. Defaults
      * to an open shadowRoot.
      * @category rendering
      */
    val renderRoot: org.scalajs.dom.HTMLElement | DocumentFragment = js.native
    
    /**
      * Requests a host update which is processed asynchronously. The update can
      * be waited on via the `updateComplete` property.
      */
    /* CompleteClass */
    override def requestUpdate(): Unit = js.native
    def requestUpdate(name: PropertyKey): Unit = js.native
    def requestUpdate(name: PropertyKey, oldValue: Any): Unit = js.native
    def requestUpdate(name: PropertyKey, oldValue: Any, options: PropertyDeclaration[Any, Any]): Unit = js.native
    def requestUpdate(name: PropertyKey, oldValue: Unit, options: PropertyDeclaration[Any, Any]): Unit = js.native
    def requestUpdate(name: Unit, oldValue: Any): Unit = js.native
    def requestUpdate(name: Unit, oldValue: Any, options: PropertyDeclaration[Any, Any]): Unit = js.native
    def requestUpdate(name: Unit, oldValue: Unit, options: PropertyDeclaration[Any, Any]): Unit = js.native
    
    /* standard dom */
    /* CompleteClass */
    var role: String | Null = js.native
    
    /**
      * Schedules an element update. You can override this method to change the
      * timing of updates by returning a Promise. The update will await the
      * returned Promise, and you should resolve the Promise to allow the update
      * to proceed. If this method is overridden, `super.scheduleUpdate()`
      * must be called.
      *
      * For instance, to schedule updates to occur just before the next frame:
      *
      * ```ts
      * override protected async scheduleUpdate(): Promise<unknown> {
      *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
      *   super.scheduleUpdate();
      * }
      * ```
      * @category updates
      */
    /* protected */ def scheduleUpdate(): Unit | js.Promise[Any] = js.native
    
    /**
      * Controls whether or not `update()` should be called when the element requests
      * an update. By default, this method always returns `true`, but this can be
      * customized to control when to update.
      *
      * @param _changedProperties Map of changed properties with old values
      * @category updates
      */
    /* protected */ def shouldUpdate(_changedProperties: PropertyValues[Any]): Boolean = js.native
    
    var static: Any = js.native
    
    /**
      * Updates the element. This method reflects property values to attributes.
      * It can be overridden to render and keep updated element DOM.
      * Setting properties inside this method will *not* trigger
      * another update.
      *
      * @param _changedProperties Map of changed properties with old values
      * @category updates
      */
    /* protected */ def update(_changedProperties: PropertyValues[Any]): Unit = js.native
    
    /**
      * Returns a Promise that resolves when the host has completed updating.
      * The Promise value is a boolean that is `true` if the element completed the
      * update without triggering another update. The Promise result is `false` if
      * a property was set inside `updated()`. If the Promise is rejected, an
      * exception was thrown during the update.
      *
      * @return A promise of a boolean that indicates if the update resolved
      *     without triggering another update.
      */
    /* CompleteClass */
    override val updateComplete: js.Promise[Boolean] = js.native
    /**
      * Returns a Promise that resolves when the element has completed updating.
      * The Promise value is a boolean that is `true` if the element completed the
      * update without triggering another update. The Promise result is `false` if
      * a property was set inside `updated()`. If the Promise is rejected, an
      * exception was thrown during the update.
      *
      * To await additional asynchronous work, override the `getUpdateComplete`
      * method. For example, it is sometimes useful to await a rendered element
      * before fulfilling this Promise. To do this, first await
      * `super.getUpdateComplete()`, then any subsequent state.
      *
      * @return A promise of a boolean that resolves to true if the update completed
      *     without triggering another update.
      * @category updates
      */
    @JSName("updateComplete")
    def updateComplete_MReactiveElement: js.Promise[Boolean] = js.native
    
    /**
      * Invoked whenever the element is updated. Implement to perform
      * post-updating tasks via DOM APIs, for example, focusing an element.
      *
      * Setting properties inside this method will trigger the element to update
      * again after this update cycle completes.
      *
      * @param _changedProperties Map of changed properties with old values
      * @category updates
      */
    /* protected */ def updated(_changedProperties: PropertyValues[Any]): Unit = js.native
    
    /**
      * Invoked before `update()` to compute values needed during the update.
      *
      * Implement `willUpdate` to compute property values that depend on other
      * properties and are used in the rest of the update process.
      *
      * ```ts
      * willUpdate(changedProperties) {
      *   // only need to check changed properties for an expensive computation.
      *   if (changedProperties.has('firstName') || changedProperties.has('lastName')) {
      *     this.sha = computeSHA(`${this.firstName} ${this.lastName}`);
      *   }
      * }
      *
      * render() {
      *   return html`SHA: ${this.sha}`;
      * }
      * ```
      *
      * @category updates
      */
    /* protected */ def willUpdate(_changedProperties: PropertyValues[Any]): Unit = js.native
  }
  /* static members */
  object ReactiveElement
  
  type AttributeConverter[Type, TypeHint] = (ComplexAttributeConverter[Type, Any]) | (js.Function2[/* value */ String | Null, /* type */ js.UndefOr[TypeHint], Type])
  
  trait ComplexAttributeConverter[Type, TypeHint] extends StObject {
    
    /**
      * Called to convert an attribute value to a property
      * value.
      */
    var fromAttribute: js.UndefOr[js.Function2[/* value */ String | Null, /* type */ js.UndefOr[TypeHint], Type]] = js.undefined
    
    /**
      * Called to convert a property value to an attribute
      * value.
      *
      * It returns unknown instead of string, to be compatible with
      * https://github.com/WICG/trusted-types (and similar efforts).
      */
    var toAttribute: js.UndefOr[js.Function2[/* value */ Type, /* type */ js.UndefOr[TypeHint], Any]] = js.undefined
  }
  object ComplexAttributeConverter {
    
    inline def apply[Type, TypeHint](): ComplexAttributeConverter[Type, TypeHint] = {
      val __obj = js.Dynamic.literal()
      __obj.asInstanceOf[ComplexAttributeConverter[Type, TypeHint]]
    }
    
    @scala.inline
    implicit open class MutableBuilder[Self <: ComplexAttributeConverter[?, ?], Type, TypeHint] (val x: Self & (ComplexAttributeConverter[Type, TypeHint])) extends AnyVal {
      
      inline def setFromAttribute(value: (/* value */ String | Null, /* type */ js.UndefOr[TypeHint]) => Type): Self = StObject.set(x, "fromAttribute", js.Any.fromFunction2(value))
      
      inline def setFromAttributeUndefined: Self = StObject.set(x, "fromAttribute", js.undefined)
      
      inline def setToAttribute(value: (/* value */ Type, /* type */ js.UndefOr[TypeHint]) => Any): Self = StObject.set(x, "toAttribute", js.Any.fromFunction2(value))
      
      inline def setToAttributeUndefined: Self = StObject.set(x, "toAttribute", js.undefined)
    }
  }
  
  type Initializer = js.Function1[/* element */ ReactiveElement, Unit]
  
  trait PropertyDeclaration[Type, TypeHint] extends StObject {
    
    /**
      * Indicates how and whether the property becomes an observed attribute.
      * If the value is `false`, the property is not added to `observedAttributes`.
      * If true or absent, the lowercased property name is observed (e.g. `fooBar`
      * becomes `foobar`). If a string, the string value is observed (e.g
      * `attribute: 'foo-bar'`).
      */
    val attribute: js.UndefOr[Boolean | String] = js.undefined
    
    /**
      * Indicates how to convert the attribute to/from a property. If this value
      * is a function, it is used to convert the attribute value a the property
      * value. If it's an object, it can have keys for `fromAttribute` and
      * `toAttribute`. If no `toAttribute` function is provided and
      * `reflect` is set to `true`, the property value is set directly to the
      * attribute. A default `converter` is used if none is provided; it supports
      * `Boolean`, `String`, `Number`, `Object`, and `Array`. Note,
      * when a property changes and the converter is used to update the attribute,
      * the property is never updated again as a result of the attribute changing,
      * and vice versa.
      */
    val converter: js.UndefOr[AttributeConverter[Type, TypeHint]] = js.undefined
    
    /**
      * A function that indicates if a property should be considered changed when
      * it is set. The function should take the `newValue` and `oldValue` and
      * return `true` if an update should be requested.
      */
    var hasChanged: js.UndefOr[js.Function2[/* value */ Type, /* oldValue */ Type, Boolean]] = js.undefined
    
    /**
      * Indicates whether an accessor will be created for this property. By
      * default, an accessor will be generated for this property that requests an
      * update when set. If this flag is `true`, no accessor will be created, and
      * it will be the user's responsibility to call
      * `this.requestUpdate(propertyName, oldValue)` to request an update when
      * the property changes.
      */
    val noAccessor: js.UndefOr[Boolean] = js.undefined
    
    /**
      * Indicates if the property should reflect to an attribute.
      * If `true`, when the property is set, the attribute is set using the
      * attribute name determined according to the rules for the `attribute`
      * property option and the value of the property converted using the rules
      * from the `converter` property option.
      */
    val reflect: js.UndefOr[Boolean] = js.undefined
    
    /**
      * When set to `true`, indicates the property is internal private state. The
      * property should not be set by users. When using TypeScript, this property
      * should be marked as `private` or `protected`, and it is also a common
      * practice to use a leading `_` in the name. The property is not added to
      * `observedAttributes`.
      */
    val state: js.UndefOr[Boolean] = js.undefined
    
    /**
      * Indicates the type of the property. This is used only as a hint for the
      * `converter` to determine how to convert the attribute
      * to/from a property.
      */
    val `type`: js.UndefOr[TypeHint] = js.undefined
    
    /**
      * When `true`, uses the initial value of the property as the default value,
      * which changes how attributes are handled:
      *  - The initial value does *not* reflect, even if the `reflect` option is `true`.
      *    Subsequent changes to the property will reflect, even if they are equal to the
      *     default value.
      *  - When the attribute is removed, the property is set to the default value
      *  - The initial value will not trigger an old value in the `changedProperties` map
      *    argument to update lifecycle methods.
      *
      * When set, properties must be initialized, either with a field initializer, or an
      * assignment in the constructor. Not initializing the property may lead to
      * improper handling of subsequent property assignments.
      *
      * While this behavior is opt-in, most properties that reflect to attributes should
      * use `useDefault: true` so that their initial values do not reflect.
      */
    var useDefault: js.UndefOr[Boolean] = js.undefined
  }
  object PropertyDeclaration {
    
    inline def apply[Type, TypeHint](): PropertyDeclaration[Type, TypeHint] = {
      val __obj = js.Dynamic.literal()
      __obj.asInstanceOf[PropertyDeclaration[Type, TypeHint]]
    }
    
    @scala.inline
    implicit open class MutableBuilder[Self <: PropertyDeclaration[?, ?], Type, TypeHint] (val x: Self & (PropertyDeclaration[Type, TypeHint])) extends AnyVal {
      
      inline def setAttribute(value: Boolean | String): Self = StObject.set(x, "attribute", value.asInstanceOf[js.Any])
      
      inline def setAttributeUndefined: Self = StObject.set(x, "attribute", js.undefined)
      
      inline def setConverter(value: AttributeConverter[Type, TypeHint]): Self = StObject.set(x, "converter", value.asInstanceOf[js.Any])
      
      inline def setConverterFunction2(value: (/* value */ String | Null, /* type */ js.UndefOr[TypeHint]) => Type): Self = StObject.set(x, "converter", js.Any.fromFunction2(value))
      
      inline def setConverterUndefined: Self = StObject.set(x, "converter", js.undefined)
      
      inline def setHasChanged(value: (/* value */ Type, /* oldValue */ Type) => Boolean): Self = StObject.set(x, "hasChanged", js.Any.fromFunction2(value))
      
      inline def setHasChangedUndefined: Self = StObject.set(x, "hasChanged", js.undefined)
      
      inline def setNoAccessor(value: Boolean): Self = StObject.set(x, "noAccessor", value.asInstanceOf[js.Any])
      
      inline def setNoAccessorUndefined: Self = StObject.set(x, "noAccessor", js.undefined)
      
      inline def setReflect(value: Boolean): Self = StObject.set(x, "reflect", value.asInstanceOf[js.Any])
      
      inline def setReflectUndefined: Self = StObject.set(x, "reflect", js.undefined)
      
      inline def setState(value: Boolean): Self = StObject.set(x, "state", value.asInstanceOf[js.Any])
      
      inline def setStateUndefined: Self = StObject.set(x, "state", js.undefined)
      
      inline def setType(value: TypeHint): Self = StObject.set(x, "type", value.asInstanceOf[js.Any])
      
      inline def setTypeUndefined: Self = StObject.set(x, "type", js.undefined)
      
      inline def setUseDefault(value: Boolean): Self = StObject.set(x, "useDefault", value.asInstanceOf[js.Any])
      
      inline def setUseDefaultUndefined: Self = StObject.set(x, "useDefault", js.undefined)
    }
  }
  
  type PropertyDeclarationMap = Map[PropertyKey, PropertyDeclaration[Any, Any]]
  
  type PropertyDeclarations = StringDictionary[PropertyDeclaration[Any, Any]]
  
  @js.native
  trait PropertyValueMap[T]
    extends StObject
       with Map[PropertyKey, Any] {
    
    def set[K /* <: /* keyof T */ String */](key: K, value: /* import warning: importer.ImportType#apply Failed type conversion: T[K] */ js.Any): this.type = js.native
  }
  
  /** NOTE: Conditional type definitions are impossible to translate to Scala.
    * See https://www.typescriptlang.org/docs/handbook/2/conditional-types.html for an intro.
    * This RHS of the type alias is guess work. You should cast if it's not correct in your case.
    * TS definition: {{{
    T extends object ? @lit/reactive-element.@lit/reactive-element.PropertyValueMap<T> : std.Map<std.PropertyKey, unknown>
    }}}
    */
  type PropertyValues[T] = PropertyValueMap[T]
  
  /* Rewritten from type alias, can be one of: 
    - `io.github.nguyenyou.webawesome`.litReactiveElement.litReactiveElementStrings.`change-in-update`
    - `io.github.nguyenyou.webawesome`.litReactiveElement.litReactiveElementStrings.migration
    - `io.github.nguyenyou.webawesome`.litReactiveElement.litReactiveElementStrings.`async-perform-update`
  */
  trait WarningKind extends StObject
  object WarningKind {
    
    inline def `async-perform-update`: io.github.nguyenyou.webawesome.litReactiveElement.litReactiveElementStrings.`async-perform-update` = "async-perform-update".asInstanceOf[io.github.nguyenyou.webawesome.litReactiveElement.litReactiveElementStrings.`async-perform-update`]
    
    inline def `change-in-update`: io.github.nguyenyou.webawesome.litReactiveElement.litReactiveElementStrings.`change-in-update` = "change-in-update".asInstanceOf[io.github.nguyenyou.webawesome.litReactiveElement.litReactiveElementStrings.`change-in-update`]
    
    inline def migration: io.github.nguyenyou.webawesome.litReactiveElement.litReactiveElementStrings.migration = "migration".asInstanceOf[io.github.nguyenyou.webawesome.litReactiveElement.litReactiveElementStrings.migration]
  }
}
