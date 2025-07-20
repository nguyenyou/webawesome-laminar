package io.github.nguyenyou.webawesome.awesomeMeWebawesome

import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings._blank
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings._parent
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings._self
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings._top
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.`applicationSlashx-www-form-urlencoded`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.`multipartSlashform-data`
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.accent
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.brand
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.button
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.danger
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.filled
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.get
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.large
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.medium
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.neutral
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.outlined
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.plain
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.post
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.reset
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.small
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.submit
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.success
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.textSlashplain
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.awesomeMeWebawesomeStrings.warning
import io.github.nguyenyou.webawesome.awesomeMeWebawesome.distInternalWebawesomeFormAssociatedElementMod.WebAwesomeFormAssociatedElement
import io.github.nguyenyou.webawesome.litHtml.mod.ResultType
import io.github.nguyenyou.webawesome.litHtml.mod.TemplateResult
import io.github.nguyenyou.webawesome.std.FocusOptions
import io.github.nguyenyou.webawesome.std.HTMLSlotElement
import org.scalajs.dom.HTMLButtonElement
import org.scalajs.dom.HTMLLinkElement
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

object distComponentsButtonButtonMod {
  
  @JSImport("@awesome.me/webawesome/dist/components/button/button", JSImport.Default)
  @js.native
  open class default () extends WaButton
  /* static members */
  object default {
    
    @JSImport("@awesome.me/webawesome/dist/components/button/button", JSImport.Default)
    @js.native
    val ^ : js.Any = js.native
    
    @JSImport("@awesome.me/webawesome/dist/components/button/button", "default.css")
    @js.native
    def css: js.Array[String] = js.native
    inline def css_=(x: js.Array[String]): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("css")(x.asInstanceOf[js.Any])
  }
  
  @js.native
  trait WaButton extends WebAwesomeFormAssociatedElement {
    
    /** The button's visual appearance. */
    var appearance: accent | filled | outlined | plain = js.native
    
    /** Removes focus from the button. */
    def blur(): Unit = js.native
    
    var button: HTMLButtonElement | HTMLLinkElement = js.native
    
    /** Simulates a click on the button. */
    def click(): Unit = js.native
    
    /* private */ var constructLightDOMButton: Any = js.native
    
    /** Tells the browser to download the linked file as this filename. Only used when `href` is present. */
    var download: js.UndefOr[String] = js.native
    
    /** Sets focus on the button. */
    override def focus(): Unit = js.native
    override def focus(options: FocusOptions): Unit = js.native
    
    /** Used to override the form owner's `action` attribute. */
    var formAction: String = js.native
    
    /** Used to override the form owner's `enctype` attribute.  */
    var formEnctype: `applicationSlashx-www-form-urlencoded` | `multipartSlashform-data` | textSlashplain = js.native
    
    /** Used to override the form owner's `method` attribute.  */
    var formMethod: post | get = js.native
    
    /** Used to override the form owner's `novalidate` attribute. */
    var formNoValidate: Boolean = js.native
    
    /** Used to override the form owner's `target` attribute. */
    var formTarget: _self | _blank | _parent | _top | String = js.native
    
    /**
      * The "form owner" to associate the button with. If omitted, the closest containing form will be used instead. The
      * value of this attribute must be an id of a form in the same document or shadow root as the button.
      */
    @JSName("form")
    var form_WaButton: String | Null = js.native
    
    /* private */ var handleClick: Any = js.native
    
    def handleDisabledChange(): Unit = js.native
    
    /* private */ var handleInvalid: Any = js.native
    
    /* private */ var handleLabelSlotChange: Any = js.native
    
    /* private */ val hasSlotController: Any = js.native
    
    /** When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`. */
    var href: String = js.native
    
    var invalid: Boolean = js.native
    
    /* private */ var isButton: Any = js.native
    
    var isIconButton: Boolean = js.native
    
    /* private */ var isLink: Any = js.native
    
    var labelSlot: HTMLSlotElement = js.native
    
    /** Draws the button in a loading state. */
    var loading: Boolean = js.native
    
    /* private */ val localize: Any = js.native
    
    /**
      * The name of the button, submitted as a name/value pair with form data, but only when this button is the submitter.
      * This attribute is ignored when `href` is present.
      */
    @JSName("name")
    var name_WaButton: String = js.native
    
    /** Draws a pill-style button with rounded edges. */
    var pill: Boolean = js.native
    
    /** When using `href`, this attribute will map to the underlying link's `rel` attribute. */
    var rel: js.UndefOr[String] = js.native
    
    override def render(): TemplateResult[ResultType] = js.native
    
    /** The button's size. */
    var size: small | medium | large = js.native
    
    /** Tells the browser where to open the link. Only used when `href` is present. */
    var target: _blank | _parent | _self | _top = js.native
    
    var title: String = js.native
    
    /**
      * The type of button. Note that the default value is `button` instead of `submit`, which is opposite of how native
      * `<button>` elements behave. When the type is `submit`, the button will submit the surrounding form.
      */
    var `type`: button | submit | reset = js.native
    
    /**
      * The value of the button, submitted as a pair with the button's name as part of the form data, but only when this
      * button is the submitter. This attribute is ignored when `href` is present.
      */
    @JSName("value")
    var value_WaButton: String = js.native
    
    /** The button's theme variant. Defaults to `neutral` if not within another element with a variant. */
    var variant: neutral | brand | success | warning | danger = js.native
    
    /** Draws the button with a caret. Used to indicate that the button triggers a dropdown menu or similar behavior. */
    var withCaret: Boolean = js.native
  }
  
  object global {
    
    trait HTMLElementTagNameMap extends StObject {
      
      var `wa-button`: WaButton
    }
    object HTMLElementTagNameMap {
      
      inline def apply(`wa-button`: WaButton): HTMLElementTagNameMap = {
        val __obj = js.Dynamic.literal()
        __obj.updateDynamic("wa-button")(`wa-button`.asInstanceOf[js.Any])
        __obj.asInstanceOf[HTMLElementTagNameMap]
      }
      
      @scala.inline
      implicit open class MutableBuilder[Self <: HTMLElementTagNameMap] (val x: Self) extends AnyVal {
        
        inline def `setWa-button`(value: WaButton): Self = StObject.set(x, "wa-button", value.asInstanceOf[js.Any])
      }
    }
  }
}
