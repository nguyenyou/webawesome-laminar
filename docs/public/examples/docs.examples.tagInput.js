var e=Object.defineProperty,t=t=>{let n={};for(var r in t)e(n,r,{get:t[r],enumerable:!0});return n},n=class extends Event{constructor(e){super(`wa-create`,{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}};
/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const r=globalThis,i=r.ShadowRoot&&(r.ShadyCSS===void 0||r.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,a=Symbol(),o=new WeakMap;var s=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(i&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=o.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&o.set(t,e))}return e}toString(){return this.cssText}};const c=e=>new s(typeof e==`string`?e:e+``,void 0,a),l=(e,...t)=>new s(e.length===1?e[0]:t.reduce(((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1]),e[0]),e,a),u=(e,t)=>{if(i)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(let n of t){let t=document.createElement(`style`),i=r.litNonce;i!==void 0&&t.setAttribute(`nonce`,i),t.textContent=n.cssText,e.appendChild(t)}},d=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return c(t)})(e):e,{is:f,defineProperty:p,getOwnPropertyDescriptor:m,getOwnPropertyNames:ee,getOwnPropertySymbols:te,getPrototypeOf:ne}=Object,re=globalThis,ie=re.trustedTypes,ae=ie?ie.emptyScript:``,oe=re.reactiveElementPolyfillSupport,se=(e,t)=>e,ce={toAttribute(e,t){switch(t){case Boolean:e=e?ae:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},le=(e,t)=>!f(e,t),ue={attribute:!0,type:String,converter:ce,reflect:!1,useDefault:!1,hasChanged:le};Symbol.metadata??=Symbol(`metadata`),re.litPropertyMetadata??=new WeakMap;var de=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ue){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&p(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=m(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ue}static _$Ei(){if(this.hasOwnProperty(se(`elementProperties`)))return;let e=ne(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(se(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(se(`properties`))){let e=this.properties,t=[...ee(e),...te(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(d(e))}else e!==void 0&&t.push(d(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return u(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?ce:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?ce:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n){if(e!==void 0){let r=this.constructor,i=this[e];if(n??=r.getPropertyOptions(e),!((n.hasChanged??le)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(e){}firstUpdated(e){}};de.elementStyles=[],de.shadowRootOptions={mode:`open`},de[se(`elementProperties`)]=new Map,de[se(`finalized`)]=new Map,oe?.({ReactiveElement:de}),(re.reactiveElementVersions??=[]).push(`2.1.1`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const fe=globalThis,pe=fe.trustedTypes,me=pe?pe.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,he=`$lit$`,ge=`lit$${Math.random().toFixed(9).slice(2)}$`,_e=`?`+ge,ve=`<${_e}>`,ye=document,be=()=>ye.createComment(``),xe=e=>e===null||typeof e!=`object`&&typeof e!=`function`,Se=Array.isArray,Ce=e=>Se(e)||typeof e?.[Symbol.iterator]==`function`,we=`[ 	
\f\r]`,Te=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ee=/-->/g,De=/>/g,Oe=RegExp(`>|${we}(?:([^\\s"'>=/]+)(${we}*=${we}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),ke=/'/g,Ae=/"/g,je=/^(?:script|style|textarea|title)$/i,Me=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),Ne=Symbol.for(`lit-noChange`),h=Symbol.for(`lit-nothing`),Pe=new WeakMap,Fe=ye.createTreeWalker(ye,129);function Ie(e,t){if(!Se(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return me===void 0?t:me.createHTML(t)}const Le=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=Te;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===Te?c[1]===`!--`?o=Ee:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=Oe):(je.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=Oe):o=De:o===Oe?c[0]===`>`?(o=i??Te,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?Oe:c[3]===`"`?Ae:ke):o===Ae||o===ke?o=Oe:o===Ee||o===De?o=Te:(o=Oe,i=void 0);let d=o===Oe&&e[t+1].startsWith(`/>`)?` `:``;a+=o===Te?n+ve:l>=0?(r.push(s),n.slice(0,l)+he+n.slice(l)+ge+d):n+ge+(l===-2?t:d)}return[Ie(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]};var Re=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Le(t,n);if(this.el=e.createElement(l,r),Fe.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=Fe.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(he)){let t=u[o++],n=i.getAttribute(e).split(ge),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Ue:r[1]===`?`?We:r[1]===`@`?Ge:He}),i.removeAttribute(e)}else e.startsWith(ge)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(je.test(i.tagName)){let e=i.textContent.split(ge),t=e.length-1;if(t>0){i.textContent=pe?pe.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],be()),Fe.nextNode(),c.push({type:2,index:++a});i.append(e[t],be())}}}else if(i.nodeType===8)if(i.data===_e)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(ge,e+1))!==-1;)c.push({type:7,index:a}),e+=ge.length-1}a++}}static createElement(e,t){let n=ye.createElement(`template`);return n.innerHTML=e,n}};function ze(e,t,n=e,r){if(t===Ne)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=xe(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=ze(e,i._$AS(e,t.values),i,r)),t}var Be=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??ye).importNode(t,!0);Fe.currentNode=r;let i=Fe.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Ve(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Ke(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=Fe.nextNode(),a++)}return Fe.currentNode=ye,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Ve=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ze(this,e,t),xe(e)?e===h||e==null||e===``?(this._$AH!==h&&this._$AR(),this._$AH=h):e!==this._$AH&&e!==Ne&&this._(e):e._$litType$===void 0?e.nodeType===void 0?Ce(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==h&&xe(this._$AH)?this._$AA.nextSibling.data=e:this.T(ye.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Re.createElement(Ie(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Be(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Pe.get(e.strings);return t===void 0&&Pe.set(e.strings,t=new Re(e)),t}k(t){Se(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(be()),this.O(be()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},He=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=h,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=h}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=ze(this,e,t,0),a=!xe(e)||e!==this._$AH&&e!==Ne,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=ze(this,r[n+o],t,o),s===Ne&&(s=this._$AH[o]),a||=!xe(s)||s!==this._$AH[o],s===h?e=h:e!==h&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Ue=class extends He{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===h?void 0:e}},We=class extends He{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==h)}},Ge=class extends He{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=ze(this,e,t,0)??h)===Ne)return;let n=this._$AH,r=e===h&&n!==h||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==h&&(n===h||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ke=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){ze(this,e)}};const qe={M:he,P:ge,A:_e,C:1,L:Le,R:Be,D:Ce,V:ze,I:Ve,H:He,N:We,U:Ge,B:Ue,F:Ke},Je=fe.litHtmlPolyfillSupport;Je?.(Re,Ve),(fe.litHtmlVersions??=[]).push(`3.3.1`);const Ye=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Ve(t.insertBefore(be(),e),e,void 0,n??{})}return i._$AI(e),i},Xe=globalThis;var Ze=class extends de{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ye(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ne}};Ze._$litElement$=!0,Ze.finalized=!0,Xe.litElementHydrateSupport?.({LitElement:Ze});const Qe=Xe.litElementPolyfillSupport;Qe?.({LitElement:Ze}),(Xe.litElementVersions??=[]).push(`4.2.1`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var $e=l`
  @layer wa-component {
    :host {
      border-width: 0;
    }

    :host(:focus) {
      outline: none;
    }

    /* The bordered box. Tags and the text box wrap together inside it. */
    .tag-input {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.25em;
      position: relative;
      width: 100%;
      min-height: var(--wa-form-control-height);
      padding: 0 var(--wa-form-control-padding-inline);
      background-color: var(--wa-form-control-background-color);
      border-color: var(--wa-form-control-border-color);
      border-radius: var(--wa-form-control-border-radius);
      border-style: var(--wa-form-control-border-style);
      border-width: var(--wa-form-control-border-width);
      color: var(--wa-form-control-value-color);
      font-size: var(--wa-form-control-value-font-size);
      font-family: inherit;
      font-weight: var(--wa-form-control-value-font-weight);
      line-height: var(--wa-form-control-value-line-height);
      cursor: text;
      transition:
        background-color var(--wa-transition-normal),
        border-color var(--wa-transition-normal),
        outline-color var(--wa-transition-fast);
      transition-timing-function: var(--wa-transition-easing);
      outline: var(--wa-focus-ring-style) var(--wa-focus-ring-width) transparent;
      outline-offset: var(--wa-focus-ring-offset);

      /* Only ring the box when the text box has focus. A focused tag draws its own ring. */
      &:has(input:focus) {
        outline-color: var(--wa-color-focus);
      }

      /* Tighten the padding around tags, using the same math as multiple selects */
      &.has-tags {
        --_padding-with-tags: calc(var(--wa-form-control-height) * 0.1 - var(--wa-form-control-border-width));

        padding-block: var(--_padding-with-tags);
        padding-inline-start: var(--_padding-with-tags);
      }

      /* Show autofill styles over the entire box, not just the native input */
      &:has(:autofill),
      &:has(:-webkit-autofill) {
        background-color: var(--wa-color-brand-fill-quiet) !important;
      }
    }

    /* Appearance modifiers */
    :host([appearance='outlined']) .tag-input {
      background-color: var(--wa-form-control-background-color);
      border-color: var(--wa-form-control-border-color);
    }

    :host([appearance='filled']) .tag-input {
      background-color: var(--wa-color-neutral-fill-quiet);
      border-color: var(--wa-color-neutral-fill-quiet);
    }

    :host([appearance='filled-outlined']) .tag-input {
      background-color: var(--wa-color-neutral-fill-quiet);
      border-color: var(--wa-form-control-border-color);
    }

    :host([pill]) .tag-input {
      border-radius: var(--wa-border-radius-pill);
    }

    /* States */
    :host(:state(disabled)) .tag-input {
      opacity: 0.5;
      cursor: not-allowed;
    }

    :host(:state(disabled)) .tags {
      pointer-events: none;
    }

    :host(:state(readonly)) .tag-input {
      cursor: default;
    }

    /*
     * Tags. The list has no box of its own so each tag is laid out as a sibling of the text box and the text box
     * flows right after the last tag instead of dropping to its own line.
     */
    .tags {
      display: contents;
    }

    wa-tag {
      min-width: 0;
      max-width: 100%;
      cursor: default;

      /* Nested inside the box, so a step down from the box's radius */
      &:not([pill]) {
        border-radius: var(--wa-border-radius-s);
      }

      &::part(content) {
        display: block;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      &:focus {
        outline: none;
      }

      /* Drawn inward: a ring outside the tag would sit on the box's border */
      &:focus-visible,
      &.tag--focused {
        outline: var(--wa-focus-ring);
        outline-offset: calc(-1 * var(--wa-focus-ring-width));
      }
    }

    /* Text box */
    input {
      flex: 1 1 8ch;
      min-width: 8ch;
      width: auto;
      height: calc(var(--wa-form-control-height) - var(--wa-form-control-border-width) * 2);
      margin: 0;
      padding: 0;
      border: none;
      outline: none;
      box-shadow: none;
      background: transparent;
      color: inherit;
      font: inherit;
      cursor: inherit;
      -webkit-appearance: none;

      /*
       * With tags present, match their height so lines stay even when the box wraps, and inset the text so it sits
       * 0.75em from the last tag (0.25em gap + 0.5em), the same inset a tag gives its own text. Without tags, the box's
       * inline padding positions the text and the input has none of its own.
       */
      .has-tags & {
        height: calc(var(--wa-form-control-height) * 0.8);
        padding-inline-start: 0.5em;
      }

      &:autofill {
        &,
        &:hover,
        &:focus,
        &:active {
          box-shadow: none;
          caret-color: var(--wa-form-control-value-color);
        }
      }

      /* Turn off Safari's autofill styles */
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        -webkit-background-clip: text;
        background-color: transparent;
        -webkit-text-fill-color: inherit;
      }

      &::placeholder {
        color: var(--wa-form-control-placeholder-color);
        user-select: none;
        -webkit-user-select: none;
      }
    }

    /*
     * Start and end decorations. The slots keep their default display of contents, so the slotted element is the flex
     * item and an empty slot adds no gap. This also sidesteps slot detection, which can't run on the server.
     */
    .start::slotted(*),
    .end::slotted(*) {
      flex: 0 0 auto;
      cursor: default;
    }

    .start::slotted(wa-icon),
    .end::slotted(wa-icon) {
      color: var(--wa-color-neutral-on-quiet);
    }

    /* The box's gap already contributes 0.25em, so subtract it to match other form controls */
    .start::slotted(*) {
      margin-inline-end: calc(var(--wa-form-control-padding-inline) - 0.25em);
    }

    .end::slotted(*) {
      margin-inline-start: calc(var(--wa-form-control-padding-inline) - 0.25em);
    }

    /* Keep the start decoration aligned with the tighter padding that tags bring */
    .has-tags .start::slotted(*) {
      margin-inline-start: calc(var(--wa-form-control-padding-inline) - var(--_padding-with-tags));
    }

    /* Clear button */
    .clear {
      position: relative;
      display: inline-flex;
      align-self: center;
      align-items: center;
      justify-content: center;
      aspect-ratio: 1;
      height: 1.5em;
      font-size: inherit;
      color: var(--wa-color-neutral-on-quiet);
      border: none;
      border-radius: var(--wa-border-radius-s);
      background: none;
      padding: 0;
      transition: var(--wa-transition-normal) color;
      cursor: pointer;
      /* The button box is wider than the glyph, so overhang half of that growth on each side. Keeps the glyph
         flush with the box's trailing padding edge, like every other form control. */
      margin-inline-start: calc(var(--wa-form-control-padding-inline) - 0.375em);
      margin-inline-end: -0.125em;

      /* Enlarge the hit area to the full height of the box */
      &::after {
        content: '';
        position: absolute;
        inset-inline: 0;
        height: var(--wa-form-control-height);
      }

      @media (hover: hover) {
        &:hover {
          color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
        }
      }

      &:active {
        color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
      }

      &:focus {
        outline: none;
      }

      &:focus-visible {
        outline: var(--wa-focus-ring);
        outline-offset: var(--wa-focus-ring-offset);
      }
    }
  }
`,et=null,tt=null,nt=7e3;function rt(e){let t=document.createElement(`div`);return t.setAttribute(`role`,`log`),t.setAttribute(`aria-live`,e),t.setAttribute(`aria-relevant`,`additions`),Object.assign(t.style,{position:`absolute`,width:`1px`,height:`1px`,margin:`-1px`,padding:`0`,border:`0`,overflow:`hidden`,clip:`rect(0 0 0 0)`,clipPath:`inset(50%)`,whiteSpace:`nowrap`}),t}function it(e){return e===`assertive`?(tt??=document.body.appendChild(rt(`assertive`)),tt):(et??=document.body.appendChild(rt(`polite`)),et)}function at(e,t=`polite`){if(!e)return;let n=it(t),r=document.createElement(`div`);r.textContent=e,n.appendChild(r),setTimeout(()=>r.remove(),nt)}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var ot=class extends Event{constructor(){super(`wa-clear`,{bubbles:!0,cancelable:!1,composed:!0})}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function st(e,t){let n=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key===`Enter`&&!n&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&dt(t)})}var ct=new Map([[`input`,!0],[`wa-input`,!0],[`wa-tag-input`,!0],[`wa-number-input`,!0],[`wa-otp-input`,!0],[`wa-slider`,!0]]),lt=new Map([[`button`,!1],[`checkbox`,!1],[`color`,!1],[`date`,!1],[`datetime-local`,!1],[`email`,!0],[`file`,!1],[`hidden`,!1],[`image`,!1],[`month`,!1],[`number`,!0],[`password`,!0],[`radio`,!1],[`range`,!1],[`reset`,!0],[`search`,!0],[`submit`,!1],[`tel`,!0],[`text`,!0],[`time`,!1],[`url`,!0],[`week`,!1]]),ut=e=>{let t=e?.localName;if(!t||!ct.get(t))return!1;if(t!==`input`&&t!==`wa-input`)return!0;let n=e.type;return!!lt.get(n)};function dt(e){let t=null;if(`form`in e&&(t=e.form),!t&&`getForm`in e&&(t=e.getForm()),!t)return;let n=Array.from(t.elements),r=0;for(let e of n)ut(e)&&(r+=1);if(r===1){t.requestSubmit(null);return}let i=n.find(e=>e.type===`submit`&&!e.matches(`:disabled`));i&&([`input`,`button`].includes(i.localName)?t.requestSubmit(i):i.click())}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var ft=l`
  .wa-visually-hidden:not(:focus-within),
  .wa-visually-hidden-force,
  .wa-visually-hidden-hint::part(hint),
  .wa-visually-hidden-label::part(label),
  .wa-visually-hidden-label::part(form-control-label) {
    top: 0px !important;
    left: 0px !important;
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`,pt=l`
  :host {
    display: flex;
    flex-direction: column;
  }

  /* Treat wrapped labels, inputs, and hints as direct children of the host element */
  [part~='form-control'] {
    display: contents;
  }

  /* Label */
  :is([part~='form-control-label'], [part~='label']):has(*:not(:empty)),
  :is([part~='form-control-label'], [part~='label']).has-label {
    display: inline-flex;
    color: var(--wa-form-control-label-color);
    font-weight: var(--wa-form-control-label-font-weight);
    line-height: var(--wa-form-control-label-line-height);
    margin-block-end: 0.5em;
  }

  :host([required]) :is([part~='form-control-label'], [part~='label'])::after {
    content: var(--wa-form-control-required-content);
    margin-inline-start: var(--wa-form-control-required-content-offset);
    color: var(--wa-form-control-required-content-color);
  }

  /* Help text */
  [part~='hint'] {
    display: block;
    color: var(--wa-form-control-hint-color);
    font-weight: var(--wa-form-control-hint-font-weight);
    line-height: var(--wa-form-control-hint-line-height);
    margin-block-start: 0.5em;
    font-size: var(--wa-font-size-smaller);

    &:not(.has-slotted, .has-hint, .has-count) {
      display: none;
    }
  }
`,mt=class extends Event{constructor(){super(`wa-invalid`,{bubbles:!0,cancelable:!1,composed:!0})}},ht=Object.defineProperty,gt=Object.getOwnPropertyDescriptor,_t=e=>{throw TypeError(e)},g=(e,t,n,r)=>{for(var i=r>1?void 0:r?gt(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&ht(t,n,i),i},vt=(e,t,n)=>t.has(e)||_t(`Cannot `+n),yt=(e,t,n)=>(vt(e,t,`read from private field`),n?n.call(e):t.get(e)),bt=(e,t,n)=>t.has(e)?_t(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),xt=(e,t,n,r)=>(vt(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const St=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer((()=>{customElements.define(e,t)}))},Ct={attribute:!0,type:String,converter:ce,reflect:!1,hasChanged:le},wt=(e=Ct,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e)}}throw Error(`Unsupported decorator location: `+r)};function _(e){return(t,n)=>typeof n==`object`?wt(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function Tt(e){return _({...e,state:!0,attribute:!1})}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const Et=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function Dt(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return Et(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return Et(n,r,{get(){return a(this)}})}}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ot=l`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden],
  :host([hidden]) {
    display: none !important;
  }
`,kt=/;\s+$/;function At(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function jt(e){let{property:t,value:n,element:r}=e;if(n){let e=r.getAttribute(`style`)||``;e&&(e.match(kt)||(e+=`;`),e+=` `);let i=`${t}: ${n}`;return e.includes(i)?void 0:`${e}${i};`}return null}var Mt,Nt=class extends Ze{constructor(){super(),bt(this,Mt,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,t)=>{if(this.internals?.states)try{t?this.internals.states.add(e):this.internals.states.delete(e)}catch(e){if(String(e).includes(`must start with '--'`))console.error(`Your browser implements an outdated version of CustomStateSet. Consider using a polyfill`);else throw e}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error(`Element internals are not supported in your browser. Consider using a polyfill`)}this.customStates.set(`wa-defined`,!0);let e=this.constructor;for(let[t,n]of e.elementProperties)n.default===`inherit`&&n.initial!==void 0&&typeof t==`string`&&this.customStates.set(`initial-${t}-${n.initial}`,!0)}static get styles(){return[Ot,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `)),this.didSSR&&this.updateComplete.then(()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `))})}attributeChangedCallback(e,t,n){yt(this,Mt)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),xt(this,Mt,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll(`slot`).forEach(e=>{e.dispatchEvent(new Event(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(e){if(this.didSSR&&!this.hasUpdated){let t=new Event(`lit-hydration-error`,{bubbles:!0,composed:!0,cancelable:!1});t.error=e,this.dispatchEvent(t)}throw e}}setStyle(e,t){if(!this.style){let n=jt({property:At(e),value:t,element:this});n&&this.setAttribute(`style`,n);return}this.style[e]=t}setStyleProperty(e,t){if(!this.style){let n=jt({property:e,value:t,element:this});n&&this.setAttribute(`style`,n);return}this.style.setProperty(e,t)}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};Mt=new WeakMap,g([_()],Nt.prototype,`dir`,2),g([_()],Nt.prototype,`lang`,2),g([_({type:Boolean,reflect:!0,attribute:`did-ssr`})],Nt.prototype,`didSSR`,2);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Pt=()=>({observedAttributes:[`custom-error`],checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=[`customError`]),t}}),Ft=class extends Nt{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=[`input`],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new mt))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},`addEventListener`in this&&this.addEventListener(`invalid`,this.emitInvalid)}static get validators(){return[Pt()]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let n of t.observedAttributes)e.add(n);return[...e]}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.updateValidity()}):this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener?.(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has(`customError`)&&(this.customError||=null,this.setCustomValidity(this.customError||``)),e.has(`value`)||e.has(`disabled`)||e.has(`defaultValue`)){let e=this.value;this.updateFormValue(e)}e.has(`disabled`)&&(this.customStates.set(`disabled`,this.disabled),(this.hasAttribute(`disabled`)||!this.matches(`:disabled`))&&this.toggleAttribute(`disabled`,this.disabled)),super.willUpdate(e),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>this.updateValidity()):this.updateValidity()}updateFormValue(e){if(Array.isArray(e)){if(this.name){let t=new FormData;for(let n of e)t.append(this.name,n);this.setValue(t,t)}}else this.setValue(e,e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(e){e?this.setAttribute(`form`,e):this.removeAttribute(`form`)}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],n=e[1],r=e[2];r||=this.validationTarget,this.internals.setValidity(t,n,r||void 0),this.requestUpdate(`validity`),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set(`required`,e),this.customStates.set(`optional`,!e),this.customStates.set(`invalid`,!t),this.customStates.set(`valid`,t),this.customStates.set(`user-invalid`,!t&&n),this.customStates.set(`user-valid`,t&&n)}setCustomValidity(e){if(!e){this.customError=null,this.setValidity({});return}this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity()}):(this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity())}setValue(...e){let[t,n]=e;this.internals.setFormValue(t,n)}get allValidators(){let e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(``),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute(`disabled`)||!this.willValidate){this.resetValidity();return}let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},n=this.validationTarget||this.input||void 0,r=``;for(let n of e){let{isValid:e,message:i,invalidKeys:a}=n.checkValidity(this);e||(r||=i,a?.length>=0&&a.forEach(e=>t[e]=!0))}r||=this.validationMessage,this.setValidity(t,r,n)}};Ft.formAssociated=!0,g([_({reflect:!0})],Ft.prototype,`name`,2),g([_({type:Boolean})],Ft.prototype,`disabled`,2),g([_({state:!0,attribute:!1})],Ft.prototype,`valueHasChanged`,2),g([_({state:!0,attribute:!1})],Ft.prototype,`hasInteracted`,2),g([_({attribute:`custom-error`,reflect:!0})],Ft.prototype,`customError`,2),g([_({attribute:!1,state:!0,type:Object})],Ft.prototype,`validity`,1);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var It={small:`s`,medium:`m`,large:`l`},Lt=new Set;function Rt(e,t){t in It&&!Lt.has(`${e}:${t}`)&&(Lt.add(`${e}:${t}`),console.warn(`[${e}] size="${t}" is deprecated. Use size="${It[t]}" instead. The long-form value will be removed in the next major version.`))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var zt=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return this.host.childNodes?[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===Node.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`wa-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1}):!1}hasNamedSlot(e){return this.host.querySelector?.(`:scope > [slot="${e}"]`)!==null}test(e,t){return t&&this.host.didSSR&&!this.host.hasUpdated?!!this.host[t]:e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){let e=this.host.shadowRoot;e&&`addEventListener`in e&&e.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){let e=this.host.shadowRoot;e&&`removeEventListener`in e&&e.removeEventListener(`slotchange`,this.handleSlotChange)}},Bt=l`
  :host([size='xs']) {
    font-size: var(--wa-font-size-xs);
  }

  :host([size='s']),
  :host([size='small']) {
    font-size: var(--wa-font-size-s);
  }

  :host([size='m']),
  :host([size='medium']) {
    font-size: var(--wa-font-size-m);
  }

  :host([size='l']),
  :host([size='large']) {
    font-size: var(--wa-font-size-l);
  }

  :host([size='xl']) {
    font-size: var(--wa-font-size-xl);
  }
`;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Vt(e,t){let n={waitUntilFirstUpdate:!1,...t};return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}const Ht=new Set,Ut=new Map;let Wt,Gt=`ltr`,Kt=`en`;const qt=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(qt){let e=new MutationObserver(Yt);Gt=document.documentElement.dir||`ltr`,Kt=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function Jt(...e){e.map(e=>{let t=e.$code.toLowerCase();Ut.has(t)?Ut.set(t,Object.assign(Object.assign({},Ut.get(t)),e)):Ut.set(t,e),Wt||=e}),Yt()}function Yt(){qt&&(Gt=document.documentElement.dir||`ltr`,Kt=document.documentElement.lang||navigator.language),[...Ht.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var Xt=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Ht.add(this.host)}hostDisconnected(){Ht.delete(this.host)}dir(){return`${this.host.dir||Gt}`.toLowerCase()}lang(){let e=`${this.host.lang||Kt}`.toLowerCase().replace(/_/g,`-`);try{return new Intl.Locale(e),e}catch{return Wt?Wt.$code.toLowerCase():`en`}}getTranslationData(e){let t;try{t=new Intl.Locale(e.replace(/_/g,`-`))}catch{return{locale:void 0,language:``,region:``,primary:void 0,secondary:void 0}}let n=t.language.toLowerCase(),r=t.region?.toLowerCase()??``,i=Ut.get(`${n}-${r}`),a=Ut.get(n);return{locale:t,language:n,region:r,primary:i,secondary:a}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&Wt&&Wt[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(Wt&&Wt[e])i=Wt[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},Zt={$code:`en`,$name:`English`,$dir:`ltr`,allTagsRemoved:`All tags removed`,am:`AM`,autosizeColumn:`Autosize column`,captions:`Captions`,carousel:`Carousel`,chooseDate:`Choose date`,chooseDecade:`Choose decade`,chooseMonth:`Choose month`,chooseTime:`Choose time`,chooseYear:`Choose year`,clearEntry:`Clear entry`,clearFilter:`Clear filter`,clearSort:`Clear sort`,close:`Close`,closeCalendar:`Close calendar`,closeTimeInput:`Close time picker`,collapseRow:`Collapse row`,columnMenu:`Column options`,columnMovedToPosition:(e,t,n)=>`${e} moved to position ${t} of ${n}`,columns:`Columns`,compactPageXOfY:(e,t)=>`${e} of ${t}`,completed:`Completed`,copied:`Copied`,copy:`Copy`,createOption:e=>`Create "${e}"`,currentlyPlaying:`currently playing`,currentValue:`Current value`,date:`Date`,datePickerKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the calendar.`,day:`Day`,dayPeriod:`AM/PM`,decrement:`Decrement`,deselectAllRows:`Deselect all rows`,disabled:`Disabled`,dropFileHere:`Drop file here or click to browse`,dropFilesHere:`Drop files here or click to browse`,empty:`Empty`,endDate:`End date`,enterFullscreen:`Enter fullscreen`,error:`Error`,exitFullscreen:`Exit fullscreen`,expandRow:`Expand row`,filterByColumn:e=>`Filter by ${e}`,filterFrom:`From`,filterMax:`Max`,filterMin:`Min`,filterTo:`To`,firstPage:`First page`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hideColumn:`Hide column`,hidePassword:`Hide password`,hour:`Hour`,incompleteDate:`Enter a valid date.`,increment:`Increment`,jumpBackwardX:e=>`Jump back ${e} pages`,jumpForwardX:e=>`Jump forward ${e} pages`,lastPage:`Last page`,loading:`Loading`,locked:`Locked`,minute:`Minute`,month:`Month`,moreOptions:`More Options`,mute:`Mute`,nextDecade:`Next decade`,nextMonth:`Next month`,nextPage:`Next page`,nextSlide:`Next slide`,nextVideo:`Next Video`,nextYear:`Next year`,noData:`No data`,noOptions:`No options`,noResults:`No matching results`,notCompleted:`Not completed`,now:`Now`,numCharacters:e=>e===1?`1 character`:`${e} characters`,numCharactersRemaining:e=>e===1?`1 character remaining`:`${e} characters remaining`,numOptionsAvailable:e=>e===0?`No options available`:e===1?`1 option available`:`${e} options available`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,numRowsCopied:e=>e===1?`1 row copied`:`${e} rows copied`,numRowsSelected:e=>e===1?`1 row selected`:`${e} rows selected`,optionPosition:(e,t,n)=>`${e}, ${t} of ${n}`,optionsLoadError:`Options could not be loaded`,pageXOfY:(e,t)=>`Page ${e} of ${t}`,pagination:`Pagination`,pause:`Pause`,pauseAnimation:`Pause animation`,pictureInPicture:`Picture in picture`,pinLeft:`Pin left`,pinRight:`Pin right`,play:`Play`,playAnimation:`Play animation`,playbackSpeed:`Playback speed`,playlist:`Playlist`,pm:`PM`,previousDecade:`Previous decade`,previousMonth:`Previous month`,previousPage:`Previous page`,previousSlide:`Previous slide`,previousVideo:`Previous video`,previousYear:`Previous year`,progress:`Progress`,rangeTooLong:e=>e===1?`Select a range no longer than 1 day`:`Select a range no longer than ${e} days`,rangeTooShort:e=>e===1?`Select a range at least 1 day long`:`Select a range at least ${e} days long`,readonly:`Read-only`,remove:`Remove`,resetColumns:`Reset columns`,resize:`Resize`,resizeColumn:`Resize column`,rowsPerPage:`Rows per page`,scrollableRegion:`Scrollable region`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,search:`Search`,second:`Second`,seek:`Seek`,seekProgress:(e,t)=>`${e} of ${t}`,selectAColorFromTheScreen:`Select a color from the screen`,selectAllRows:`Select all rows`,selected:`Selected`,selectedDateLabel:e=>`Selected: ${e}`,selectedRangeLabel:e=>`Selected range: ${e}`,selectGroup:`Select group`,selectionCleared:`Selection cleared`,selectRow:`Select row`,showingNofMRows:(e,t)=>`Showing ${e} of ${t} rows`,showingXtoYofZ:(e,t,n)=>`${e}\u2013${t} of ${n}`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,sortAscending:`Sort ascending`,sortColumn:`Sort column`,sortDescending:`Sort descending`,startDate:`Start date`,steps:`Steps`,stepXOfY:(e,t)=>`Step ${e} of ${t}`,tagAdded:e=>`${e} added`,tagAlreadyAdded:e=>`${e} is already added`,tagInputKeyboardHelp:`Press Backspace or Delete to remove this tag.`,tagRemoved:e=>`${e} removed`,time:`Time`,timeInputKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the time picker.`,today:`Today`,toggleColorFormat:`Toggle color format`,tooFewTags:e=>e===1?`Add at least 1 tag`:`Add at least ${e} tags`,tooManyTags:e=>e===1?`Add no more than 1 tag`:`Add no more than ${e} tags`,unmute:`Unmute`,unpin:`Unpin`,unpinColumn:`Unpin column`,videoPlayer:`Video player`,volume:`Volume`,year:`Year`,zoomIn:`Zoom in`,zoomOut:`Zoom out`};Jt(Zt);var Qt=Zt,$t=class extends Xt{lang(){return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||`en`:super.lang()}};Jt(Qt);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const en={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},tn=e=>(...t)=>({_$litDirective$:e,values:t});var nn=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const rn=tn(class extends nn{constructor(e){if(super(e),e.type!==en.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter((t=>e[t])).join(` `)+` `}update(e,[t]){if(this.st===void 0){for(let n in this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter((e=>e!==``)))),t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return Ne}}),v=e=>e??h,{I:an}=qe,on=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,sn=e=>e.strings===void 0,cn={},ln=(e,t=cn)=>e._$AH=t,un=tn(class extends nn{constructor(e){if(super(e),e.type!==en.PROPERTY&&e.type!==en.ATTRIBUTE&&e.type!==en.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!sn(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===Ne||t===h)return t;let n=e.element,r=e.name;if(e.type===en.PROPERTY){if(t===n[r])return Ne}else if(e.type===en.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return Ne}else if(e.type===en.ATTRIBUTE&&n.getAttribute(r)===t+``)return Ne;return ln(e),t}});
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var dn=()=>{let e=typeof document<`u`&&`createElement`in document?Object.assign(document.createElement(`input`),{required:!0}):void 0;return{observedAttributes:[`required`,`min-tags`,`max-tags`],checkValidity(t){let n={message:``,isValid:!0,invalidKeys:[]},r=t.value.length;return t.required&&r===0?(n.isValid=!1,n.invalidKeys.push(`valueMissing`),n.message=e?.validationMessage||`Please fill out this field.`,n):t.minTags!=null&&r>0&&r<t.minTags?(n.isValid=!1,n.invalidKeys.push(`rangeUnderflow`),n.message=t.localize.term(`tooFewTags`,t.minTags),n):(t.maxTags!=null&&r>t.maxTags&&(n.isValid=!1,n.invalidKeys.push(`rangeOverflow`),n.message=t.localize.term(`tooManyTags`,t.maxTags)),n)}}},y=class extends Ft{constructor(){super(...arguments),this.assumeInteractionOn=[`blur`,`input`],this.hasSlotController=new zt(this,`hint`,`label`),this.localize=new $t(this),this.focusedTagIndex=-1,this._value=null,this.defaultValue=this.getAttribute(`value`)??null,this.inputValue=``,this.delimiter=`,`,this.allowDuplicates=!1,this.withClear=!1,this.placeholder=``,this.label=``,this.hint=``,this.withLabel=!1,this.withHint=!1,this.size=`m`,this.appearance=`outlined`,this.pill=!1,this.readonly=!1,this.required=!1,this.spellcheck=!0}static get validators(){return[...super.validators,dn()]}get value(){return[...this._value??this.parseDelimited(this.defaultValue)]}set value(e){e instanceof FormData&&(e=this.name?e.getAll(this.name):[]),typeof e==`string`&&(e=this.parseDelimited(e));let t=e?[...e]:[],n=this._value;n&&n.length===t.length&&n.every((e,n)=>e===t[n])||(this._value=t,this.valueHasChanged=!0)}handleSizeChange(){Rt(this.localName,this.size)}get delimiterRegex(){return this.delimiter?RegExp(`[${this.delimiter.replace(/[.*+?^${}()|[\]\\-]/g,`\\$&`)}]`):null}get isAtMax(){return this.maxTags!=null&&this.value.length>=this.maxTags}parseDelimited(e){if(!e)return[];let t=this.delimiter||`,`,n=RegExp(`[${t.replace(/[.*+?^${}()|[\]\\-]/g,`\\$&`)}]`);return e.split(n).map(e=>e.trim()).filter(Boolean)}get tagElements(){return[...this.shadowRoot?.querySelectorAll(`[part~="tag"]`)??[]]}getTagIndex(e){let t=e?.closest?.(`[part~="tag"]`);return t?Number(t.dataset.index):-1}setInputText(e){this.inputValue=e,this.input&&(this.input.value=e)}emitInputAndChange(){this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})}tryAddTag(e){if(this.disabled||this.readonly)return!1;let t=e.trim();if(!t||this.isAtMax)return!1;let r=this.value;if(!this.allowDuplicates&&r.includes(t))return this.shakeTag(r.indexOf(t)),at(this.localize.term(`tagAlreadyAdded`,t)),!1;let i=new n({inputValue:t});return this.dispatchEvent(i),i.defaultPrevented?!1:(this.value=[...r,t],at(this.localize.term(`tagAdded`,t)),!0)}addTags(e){let t=[],n=!1;for(let r of e)this.tryAddTag(r)?n=!0:r.trim()&&t.push(r.trim());return n&&(this.hasInteracted=!0,this.emitInputAndChange()),t}removeTagAt(e){let t=this.value;if(this.disabled||this.readonly||e<0||e>=t.length)return!1;let[n]=t.splice(e,1);return this.hasInteracted=!0,this.value=t,at(this.localize.term(`tagRemoved`,n)),this.emitInputAndChange(),!0}shakeTag(e){let t=this.tagElements[e];!t||typeof t.animate!=`function`||typeof matchMedia==`function`&&matchMedia(`(prefers-reduced-motion: reduce)`).matches||t.animate([{translate:`0`},{translate:`-0.2em`},{translate:`0.2em`},{translate:`-0.2em`},{translate:`0.2em`},{translate:`0`}],{duration:300,easing:`ease-in-out`})}async focusTag(e){this.focusedTagIndex=e,await this.updateComplete,this.tagElements[e]?.focus()}handleInput(e){let t=this.input.value,n=this.delimiterRegex;if(n&&!e.isComposing&&n.test(t)){let e=t.split(n),r=e.pop()??``,i=this.addTags(e);this.setInputText([...i,r].filter(Boolean).join(this.delimiter[0]));return}this.inputValue=t}handlePaste(e){let t=this.delimiterRegex;if(this.disabled||this.readonly||!t)return;let n=e.clipboardData?.getData(`text/plain`)??``;if(!t.test(n))return;e.preventDefault();let r=this.input.selectionStart??this.input.value.length,i=this.input.selectionEnd??r,a=this.input.value.slice(0,r)+n+this.input.value.slice(i),o=this.addTags(a.split(t));this.setInputText(o.join(this.delimiter[0]))}handleKeyDown(e){if(e.isComposing)return;let t=this.input.value,n=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey,r=this.localize.dir()===`rtl`?`ArrowRight`:`ArrowLeft`;if(e.key===`Enter`&&!n){t?(e.preventDefault(),this.addTags([t]).length===0&&this.setInputText(``)):st(e,this);return}if(this.disabled||this.readonly){e.key===`Backspace`&&e.preventDefault();return}if(e.key===`Backspace`&&t===``&&this.value.length>0){e.preventDefault(),this.removeTagAt(this.value.length-1);return}if(e.key===r&&!n&&t===``&&this.input.selectionStart===0&&this.value.length>0){e.preventDefault(),this.focusTag(this.value.length-1);return}e.key===`Escape`&&t&&(e.preventDefault(),this.setInputText(``),this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})))}handleInputFocus(){this.focusedTagIndex=-1}handleInputBlur(){this.input.value&&!this.readonly&&!this.disabled&&(this.addTags([this.input.value]),this.setInputText(``))}handleTagKeyDown(e){let t=this.getTagIndex(e.target);if((e.key===`Backspace`||e.key===`Delete`)&&e.preventDefault(),this.disabled||this.readonly||t<0)return;let n=this.value.length,r=e.metaKey||e.ctrlKey||e.altKey,i=this.localize.dir()===`rtl`,a=i?`ArrowRight`:`ArrowLeft`,o=i?`ArrowLeft`:`ArrowRight`;switch(e.key){case a:e.preventDefault(),this.focusTag(Math.max(0,t-1));break;case o:e.preventDefault(),t<n-1?this.focusTag(t+1):this.input.focus();break;case`Home`:e.preventDefault(),this.focusTag(0);break;case`End`:e.preventDefault(),this.input.focus();break;case`Backspace`:e.preventDefault(),this.removeTagAt(t),t>0?this.focusTag(t-1):this.input.focus();break;case`Delete`:e.preventDefault(),this.removeTagAt(t),t<n-1?this.focusTag(t):t>0?this.focusTag(t-1):this.input.focus();break;case`Escape`:this.input.focus();break;default:e.key.length===1&&!r&&this.input.focus()}}handleTagClick(e){let t=this.getTagIndex(e.target);this.disabled||t<0||e.composedPath().some(e=>e instanceof Element&&e.localName===`wa-button`)||this.focusTag(t)}handleTagFocusIn(e){this.focusedTagIndex=this.getTagIndex(e.target)}handleTagFocusOut(){this.focusedTagIndex=-1}handleTagRemove(e){e.stopPropagation(),this.removeTagAt(this.getTagIndex(e.target))&&this.input.focus()}handleWrapperMouseDown(e){let t=e.target;t===this.input||t.closest?.(`[slot="start"], [slot="end"]`)||e.preventDefault()}handleWrapperClick(e){let t=e.target;this.disabled||t===this.input||t.closest?.(`[slot="start"], [slot="end"], [part~="tag"], [part~="clear-button"]`)||this.input.focus()}handleClearMouseDown(e){e.preventDefault(),e.stopPropagation()}handleClearClick(e){e.stopPropagation(),this.value.length>0&&(this.hasInteracted=!0,this.value=[],this.setInputText(``),at(this.localize.term(`allTagsRemoved`)),this.updateComplete.then(()=>{this.dispatchEvent(new ot),this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})),this.input.focus()}updated(e){super.updated(e),this.customStates.set(`blank`,this.value.length===0),this.customStates.set(`readonly`,this.readonly),(e.has(`value`)||e.has(`defaultValue`)||e.has(`required`)||e.has(`minTags`)||e.has(`maxTags`))&&this.updateValidity()}formResetCallback(){this._value=null,this.setInputText(``),super.formResetCallback(),this.requestUpdate(`value`)}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){let e=this.hasSlotController.test(`label`,`withLabel`),t=this.hasSlotController.test(`hint`,`withHint`),n=this.label?!0:!!e,r=this.hint?!0:!!t,i=this.value,a=this.isAtMax,o=(!this.didSSR||this.hasUpdated)&&this.withClear&&!this.disabled&&!this.readonly&&i.length>0;return Me`
      <label
        id="label"
        part="form-control-label"
        class=${rn({label:!0,"has-label":n})}
        for="input"
        aria-hidden=${n?`false`:`true`}
      >
        <slot name="label">${this.label}</slot>
      </label>

      <div
        part="tag-input"
        class=${rn({"tag-input":!0,"has-tags":i.length>0})}
        @mousedown=${this.handleWrapperMouseDown}
        @click=${this.handleWrapperClick}
      >
        <slot name="start" part="start" class="start"></slot>

        ${i.length>0?Me`
              ${this.readonly?``:Me`
                    <span id="tag-help" class="wa-visually-hidden-force">
                      ${this.localize.term(`tagInputKeyboardHelp`)}
                    </span>
                  `}
              <div
                part="tags"
                class="tags"
                role="list"
                aria-labelledby="label"
                @keydown=${this.handleTagKeyDown}
                @click=${this.handleTagClick}
                @focusin=${this.handleTagFocusIn}
                @focusout=${this.handleTagFocusOut}
                @wa-remove=${this.handleTagRemove}
              >
                ${i.map((e,t)=>Me`
                    <wa-tag
                      part="tag"
                      class=${rn({tag:!0,"tag--focused":this.focusedTagIndex===t})}
                      exportparts="
                        content:tag__content,
                        remove-button:tag__remove-button,
                        remove-button__base:tag__remove-button__base
                      "
                      role="listitem"
                      tabindex="-1"
                      aria-describedby=${v(this.readonly?void 0:`tag-help`)}
                      size=${this.size}
                      ?pill=${this.pill}
                      ?with-remove=${!this.readonly}
                      data-index=${t}
                      >${e}</wa-tag
                    >
                  `)}
              </div>
            `:``}

        <input
          part="input"
          id="input"
          class="control"
          type="text"
          .value=${un(this.inputValue)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly||a}
          placeholder=${v(a?void 0:this.placeholder||void 0)}
          autocapitalize=${v(this.autocapitalize)}
          autocomplete=${this.autocomplete??`off`}
          autocorrect=${this.autocorrect?`on`:`off`}
          spellcheck=${this.spellcheck}
          enterkeyhint=${v(this.enterkeyhint)}
          inputmode=${v(this.inputmode)}
          aria-describedby="hint"
          aria-invalid=${this.validity.valid?`false`:`true`}
          @input=${this.handleInput}
          @paste=${this.handlePaste}
          @keydown=${this.handleKeyDown}
          @focus=${this.handleInputFocus}
          @blur=${this.handleInputBlur}
        />

        ${o?Me`
              <button
                part="clear-button"
                class="clear"
                type="button"
                tabindex="-1"
                aria-label=${this.localize.term(`clearEntry`)}
                @mousedown=${this.handleClearMouseDown}
                @click=${this.handleClearClick}
              >
                <slot name="clear-icon">
                  <wa-icon name="circle-xmark" library="system" variant="regular"></wa-icon>
                </slot>
              </button>
            `:``}

        <slot name="end" part="end" class="end"></slot>
      </div>

      <slot
        id="hint"
        part="hint"
        name="hint"
        class=${rn({"has-slotted":r})}
        aria-hidden=${r?`false`:`true`}
        >${this.hint}</slot
      >
    `}};y.css=[Bt,pt,ft,$e],g([Dt(`.control`)],y.prototype,`input`,2),g([Tt()],y.prototype,`focusedTagIndex`,2),g([_({attribute:!1})],y.prototype,`value`,1),g([_({attribute:`value`,reflect:!0})],y.prototype,`defaultValue`,2),g([_({attribute:!1})],y.prototype,`inputValue`,2),g([_()],y.prototype,`delimiter`,2),g([_({attribute:`max-tags`,type:Number})],y.prototype,`maxTags`,2),g([_({attribute:`min-tags`,type:Number})],y.prototype,`minTags`,2),g([_({attribute:`allow-duplicates`,type:Boolean,reflect:!0})],y.prototype,`allowDuplicates`,2),g([_({attribute:`with-clear`,type:Boolean})],y.prototype,`withClear`,2),g([_()],y.prototype,`placeholder`,2),g([_()],y.prototype,`label`,2),g([_({attribute:`hint`})],y.prototype,`hint`,2),g([_({attribute:`with-label`,type:Boolean})],y.prototype,`withLabel`,2),g([_({attribute:`with-hint`,type:Boolean})],y.prototype,`withHint`,2),g([_({reflect:!0})],y.prototype,`size`,2),g([Vt(`size`)],y.prototype,`handleSizeChange`,1),g([_({reflect:!0})],y.prototype,`appearance`,2),g([_({type:Boolean,reflect:!0})],y.prototype,`pill`,2),g([_({type:Boolean,reflect:!0})],y.prototype,`readonly`,2),g([_({type:Boolean,reflect:!0})],y.prototype,`required`,2),g([_()],y.prototype,`autocapitalize`,2),g([_({type:Boolean,converter:{fromAttribute:e=>!(!e||e===`off`),toAttribute:e=>e?`on`:`off`}})],y.prototype,`autocorrect`,2),g([_()],y.prototype,`autocomplete`,2),g([_()],y.prototype,`enterkeyhint`,2),g([_({type:Boolean,converter:{fromAttribute:e=>!(!e||e===`false`),toAttribute:e=>e?`true`:`false`}})],y.prototype,`spellcheck`,2),g([_()],y.prototype,`inputmode`,2),y=g([St(`wa-tag-input`)],y),y.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var fn=class extends Event{constructor(){super(`wa-remove`,{bubbles:!0,cancelable:!1,composed:!0})}},pn=l`
  @layer wa-component {
    :host {
      display: inline-flex;
      gap: 0.5em;
      border-radius: var(--wa-border-radius-m);
      align-items: center;
      background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));
      border-style: var(--wa-border-style);
      border-width: var(--wa-border-width-s);
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      font-size: inherit;
      line-height: 1;
      white-space: nowrap;
      user-select: none;
      -webkit-user-select: none;
      height: calc(var(--wa-form-control-height) * 0.8);
      line-height: calc(var(--wa-form-control-height) - var(--wa-form-control-border-width) * 2);
      padding: 0 0.75em;
    }

    /* Appearance modifiers */
    :host([appearance='outlined']) {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: transparent;
      border-color: var(--wa-color-border-loud, var(--wa-color-neutral-border-loud));
    }

    :host([appearance='filled']) {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      border-color: transparent;
    }

    :host([appearance='filled-outlined']) {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));
    }

    :host([appearance='accent']) {
      color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
      background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));
      border-color: transparent;
    }
  }

  .content {
    font-size: var(--wa-font-size-smaller);
  }

  [part='remove-button'] {
    line-height: 1;
  }

  [part='remove-button']::part(base) {
    padding: 0;
    height: 1em;
    width: 1em;
    color: currentColor;
  }

  @media (hover: hover) {
    :host(:hover) > [part='remove-button']::part(base) {
      background-color: transparent;
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
    }
  }

  :host(:active) > [part='remove-button']::part(base) {
    background-color: transparent;
    color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
  }

  /*
   * Pill modifier
   */
  :host([pill]) {
    border-radius: var(--wa-border-radius-pill);
  }
`,mn=l`
  :where(:root),
  .wa-neutral,
  :host([variant='neutral']) {
    --wa-color-fill-loud: var(--wa-color-neutral-fill-loud);
    --wa-color-fill-normal: var(--wa-color-neutral-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-neutral-fill-quiet);
    --wa-color-border-loud: var(--wa-color-neutral-border-loud);
    --wa-color-border-normal: var(--wa-color-neutral-border-normal);
    --wa-color-border-quiet: var(--wa-color-neutral-border-quiet);
    --wa-color-on-loud: var(--wa-color-neutral-on-loud);
    --wa-color-on-normal: var(--wa-color-neutral-on-normal);
    --wa-color-on-quiet: var(--wa-color-neutral-on-quiet);
  }

  .wa-brand,
  :host([variant='brand']) {
    --wa-color-fill-loud: var(--wa-color-brand-fill-loud);
    --wa-color-fill-normal: var(--wa-color-brand-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-brand-fill-quiet);
    --wa-color-border-loud: var(--wa-color-brand-border-loud);
    --wa-color-border-normal: var(--wa-color-brand-border-normal);
    --wa-color-border-quiet: var(--wa-color-brand-border-quiet);
    --wa-color-on-loud: var(--wa-color-brand-on-loud);
    --wa-color-on-normal: var(--wa-color-brand-on-normal);
    --wa-color-on-quiet: var(--wa-color-brand-on-quiet);
  }

  .wa-success,
  :host([variant='success']) {
    --wa-color-fill-loud: var(--wa-color-success-fill-loud);
    --wa-color-fill-normal: var(--wa-color-success-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-success-fill-quiet);
    --wa-color-border-loud: var(--wa-color-success-border-loud);
    --wa-color-border-normal: var(--wa-color-success-border-normal);
    --wa-color-border-quiet: var(--wa-color-success-border-quiet);
    --wa-color-on-loud: var(--wa-color-success-on-loud);
    --wa-color-on-normal: var(--wa-color-success-on-normal);
    --wa-color-on-quiet: var(--wa-color-success-on-quiet);
  }

  .wa-warning,
  :host([variant='warning']) {
    --wa-color-fill-loud: var(--wa-color-warning-fill-loud);
    --wa-color-fill-normal: var(--wa-color-warning-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-warning-fill-quiet);
    --wa-color-border-loud: var(--wa-color-warning-border-loud);
    --wa-color-border-normal: var(--wa-color-warning-border-normal);
    --wa-color-border-quiet: var(--wa-color-warning-border-quiet);
    --wa-color-on-loud: var(--wa-color-warning-on-loud);
    --wa-color-on-normal: var(--wa-color-warning-on-normal);
    --wa-color-on-quiet: var(--wa-color-warning-on-quiet);
  }

  .wa-danger,
  :host([variant='danger']) {
    --wa-color-fill-loud: var(--wa-color-danger-fill-loud);
    --wa-color-fill-normal: var(--wa-color-danger-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-danger-fill-quiet);
    --wa-color-border-loud: var(--wa-color-danger-border-loud);
    --wa-color-border-normal: var(--wa-color-danger-border-normal);
    --wa-color-border-quiet: var(--wa-color-danger-border-quiet);
    --wa-color-on-loud: var(--wa-color-danger-on-loud);
    --wa-color-on-normal: var(--wa-color-danger-on-normal);
    --wa-color-on-quiet: var(--wa-color-danger-on-quiet);
  }
`,hn=class extends Nt{constructor(){super(...arguments),this.localize=new $t(this),this.variant=`neutral`,this.appearance=`filled-outlined`,this.size=`m`,this.pill=!1,this.withRemove=!1}handleSizeChange(){Rt(this.localName,this.size)}handleRemoveClick(){this.dispatchEvent(new fn)}render(){return Me`
      <slot part="content" class="content"></slot>

      ${this.withRemove?Me`
            <wa-button
              part="remove-button"
              exportparts="base:remove-button__base"
              class="remove"
              appearance="plain"
              size=${this.size}
              @click=${this.handleRemoveClick}
              tabindex="-1"
            >
              <wa-icon name="xmark" library="system" variant="solid" label=${this.localize.term(`remove`)}></wa-icon>
            </wa-button>
          `:``}
    `}};hn.css=[pn,mn,Bt],g([_({reflect:!0})],hn.prototype,`variant`,2),g([_({reflect:!0})],hn.prototype,`appearance`,2),g([_({reflect:!0})],hn.prototype,`size`,2),g([Vt(`size`)],hn.prototype,`handleSizeChange`,1),g([_({type:Boolean,reflect:!0})],hn.prototype,`pill`,2),g([_({attribute:`with-remove`,type:Boolean})],hn.prototype,`withRemove`,2),hn=g([St(`wa-tag`)],hn);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var gn=()=>({checkValidity(e){let t=e.input,n={message:``,isValid:!0,invalidKeys:[]};if(!t)return n;let r=!0;if(`checkValidity`in t&&(r=t.checkValidity()),r)return n;if(n.isValid=!1,`validationMessage`in t&&(n.message=t.validationMessage),!(`validity`in t))return n.invalidKeys.push(`customError`),n;for(let e in t.validity){if(e===`valid`)continue;let r=e;t.validity[r]&&n.invalidKeys.push(r)}return n}}),_n=l`
  @layer wa-component {
    :host {
      display: inline-block;

      /* Workaround because Chrome doesn't like :host(:has()) below
       * https://issues.chromium.org/issues/40062355
       * Firefox doesn't like this nested rule, so both are needed */
      &:has(wa-badge) {
        position: relative;
      }
    }

    /* Apply relative positioning only when needed to position wa-badge
     * This avoids creating a new stacking context for every button */
    :host(:has(wa-badge)) {
      position: relative;
    }
  }

  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    transition-property: background, border, box-shadow, color, opacity, transform;
    transition-duration: var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
    transform-origin: center;
    cursor: pointer;
    padding: 0 var(--wa-form-control-padding-inline);
    font-family: inherit;
    font-size: inherit;
    font-weight: var(--wa-font-weight-action);
    height: var(--wa-form-control-height);
    width: 100%;

    background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));

    border-color: transparent;
    color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
    border-start-start-radius: var(--_button-start-start-radius, var(--wa-form-control-border-radius));
    border-start-end-radius: var(--_button-start-end-radius, var(--wa-form-control-border-radius));
    border-end-start-radius: var(--_button-end-start-radius, var(--wa-form-control-border-radius));
    border-end-end-radius: var(--_button-end-end-radius, var(--wa-form-control-border-radius));
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
  }

  /* Hover and active transforms */
  .button:not(.disabled):not(.loading) {
    @media (hover: hover) {
      &:hover {
        transform: var(--wa-button-transform-hover);
      }
    }
    &:active {
      transform: var(--wa-button-transform-active);
    }

    @media (prefers-reduced-motion: reduce) {
      &:hover,
      &:active {
        transform: none;
      }
    }
  }

  /* Appearance modifiers */
  :host([appearance='plain']) {
    /* Indentation overrides for grouping */
    margin-inline-start: var(--_button-horizontal-indent);
    margin-block-start: var(--_button-vertical-indent);

    .button {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: transparent;
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
        background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='outlined']) {
    /* Indentation overrides for grouping outlined */
    margin-inline-start: var(--_button-horizontal-indent-outlined);
    margin-block-start: var(--_button-vertical-indent-outlined);

    .button {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: transparent;
      border-color: var(--wa-color-border-loud, var(--wa-color-neutral-border-loud));
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
        background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='filled']) {
    /* Indentation overrides for grouping */
    margin-inline-start: var(--_button-horizontal-indent);
    margin-block-start: var(--_button-vertical-indent);

    .button {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal));
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='filled-outlined']) {
    /* Indentation overrides for grouping outlined */
    margin-inline-start: var(--_button-horizontal-indent-outlined);
    margin-block-start: var(--_button-vertical-indent-outlined);

    .button {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal));
      border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='accent']) {
    /* Indentation overrides for grouping */
    margin-inline-start: var(--_button-horizontal-indent);
    margin-block-start: var(--_button-vertical-indent);

    .button {
      color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
      background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),
        var(--wa-color-mix-active)
      );
    }
  }

  /* Focus states */
  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Disabled state */
  :host([disabled]) {
    opacity: 0.5;
    cursor: not-allowed;

    /* When disabled, prevent mouse events from bubbling up from children */
    .button {
      pointer-events: none;
    }
  }

  /* Keep it last so Safari doesn't stop parsing this block */
  .button::-moz-focus-inner {
    border: 0;
  }

  /* Icon buttons */
  .button.is-icon-button {
    outline-offset: 2px;
    width: var(--wa-form-control-height);
    aspect-ratio: 1;
  }

  /* Icon buttons with a caret need to grow to fit both the icon and the caret */
  .button.is-icon-button.caret {
    width: auto;
    aspect-ratio: auto;
    min-width: var(--wa-form-control-height);
  }

  /* Pill modifier */
  :host([pill]) .button {
    border-start-start-radius: var(--_button-start-start-radius, var(--wa-border-radius-pill));
    border-start-end-radius: var(--_button-start-end-radius, var(--wa-border-radius-pill));
    border-end-start-radius: var(--_button-end-start-radius, var(--wa-border-radius-pill));
    border-end-end-radius: var(--_button-end-end-radius, var(--wa-border-radius-pill));
  }

  /*
   * Label
   */

  .start,
  .end {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .label {
    display: inline-block;
  }

  .is-icon-button .label {
    display: flex;
    justify-content: center;
  }

  .label::slotted(wa-icon) {
    align-self: center;
  }

  /*
   * Caret modifier
   */

  wa-icon[part='caret'] {
    display: flex;
    align-self: center;
    align-items: center;

    &::part(svg) {
      width: 0.875em;
      height: 0.875em;
    }

    .button:has(&) .end {
      display: none;
    }
  }

  /*
   * Loading modifier
   */

  .loading {
    position: relative;
    cursor: wait;

    .start,
    .label,
    .end,
    .caret {
      /* Hidden with opacity, not visibility, so the label stays in the accessibility tree */
      opacity: 0;

      /* Unlike visibility: hidden, opacity leaves the content clickable */
      pointer-events: none;
    }

    wa-spinner {
      --indicator-color: currentColor;
      --track-color: color-mix(in oklab, currentColor, transparent 90%);

      position: absolute;
      font-size: 1em;
      height: 1em;
      width: 1em;
      top: calc(50% - 0.5em);
      left: calc(50% - 0.5em);
    }
  }

  /*
   * Badges
   */

  .button ::slotted(wa-badge) {
    border-color: var(--wa-color-surface-default);
    position: absolute;
    inset-block-start: 0;
    inset-inline-end: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  :host(:dir(rtl)) ::slotted(wa-badge) {
    translate: -50% -50%;
  }

  /*
  * Button spacing
  */

  slot[name='start']::slotted(*) {
    margin-inline-end: 0.75em;
  }

  slot[name='end']::slotted(*),
  .button:not(.visually-hidden-label) [part='caret'] {
    margin-inline-start: 0.75em;
  }
`;
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const vn=Symbol.for(``),yn=e=>{if(e?.r===vn)return e?._$litStatic$},bn=(e,...t)=>({_$litStatic$:t.reduce(((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1]),e[0]),r:vn}),xn=new Map,Sn=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],i=yn(a))!==void 0;)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=xn.get(e))===void 0&&(o.raw=o,xn.set(e,t=o)),n=s}return e(t,...n)})(Me);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var b=class extends Ft{constructor(){super(...arguments),this.assumeInteractionOn=[`click`],this.hasSlotController=new zt(this,`[default]`,`start`,`end`),this.localize=new $t(this),this.invalid=!1,this.isIconButton=!1,this.title=``,this.variant=`neutral`,this.appearance=`accent`,this.size=`m`,this.withCaret=!1,this.withStart=!1,this.withEnd=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type=`button`}static get validators(){return[...super.validators,gn()]}handleSizeChange(){Rt(this.localName,this.size)}constructLightDOMButton(){let e=document.createElement(`button`);for(let t of this.attributes)t.name!==`style`&&e.setAttribute(t.name,t.value);return e.type=this.type,e.style.position=`absolute !important`,e.style.width=`0 !important`,e.style.height=`0 !important`,e.style.clipPath=`inset(50%) !important`,e.style.overflow=`hidden !important`,e.style.whiteSpace=`nowrap !important`,this.name&&(e.name=this.name),e.value=this.value||``,e}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopImmediatePropagation();return}if(this.type!==`submit`&&this.type!==`reset`||!this.getForm())return;let t=this.constructLightDOMButton();this.parentElement?.append(t),t.click(),t.remove()}handleInvalid(){this.dispatchEvent(new mt)}handleLabelSlotChange(){let e=this.labelSlot.assignedNodes({flatten:!0}),t=!1,n=!1,r=!1,i=!1;[...e].forEach(e=>{if(e.nodeType===Node.ELEMENT_NODE){let r=e;r.localName===`wa-icon`?(n=!0,t||=r.label!==void 0):i=!0}else e.nodeType===Node.TEXT_NODE&&(e.textContent?.trim()||``).length>0&&(r=!0)}),this.isIconButton=n&&!r&&!i,this.customStates.set(`icon-button`,this.isIconButton),this.isIconButton&&!t&&console.warn(`Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.`,this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.customStates.set(`disabled`,this.disabled),this.updateValidity()}handleHrefChange(){this.customStates.set(`link`,this.isLink())}handleLoadingChange(){this.customStates.set(`loading`,this.loading)}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=this.isLink(),t=e?bn`a`:bn`button`;return Sn`
      <${t}
        part="base button"
        class=${rn({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()===`rtl`,"has-label":this.hasSlotController.test(`[default]`),"has-start":this.hasSlotController.test(`start`,`withStart`),"has-end":this.hasSlotController.test(`end`,`withEnd`),"is-icon-button":this.isIconButton})}
        ?disabled=${v(e?void 0:this.disabled)}
        type=${v(e?void 0:this.type)}
        title=${this.title}
        name=${v(e?void 0:this.name)}
        value=${v(e?void 0:this.value)}
        href=${v(e?this.href:void 0)}
        target=${v(e?this.target:void 0)}
        download=${v(e?this.download:void 0)}
        rel=${v(e&&this.rel?this.rel:void 0)}
        role=${v(e?void 0:`button`)}
        aria-disabled=${v(e&&this.disabled?`true`:void 0)}
        aria-busy=${this.loading?`true`:`false`}
        tabindex=${this.disabled?`-1`:`0`}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?Sn`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:``}
        ${this.loading?Sn`<wa-spinner part="spinner"></wa-spinner>`:``}
      </${t}>
    `}};b.shadowRootOptions={...Ft.shadowRootOptions,delegatesFocus:!0},b.css=[_n,mn,Bt],g([Dt(`.button`)],b.prototype,`button`,2),g([Dt(`slot:not([name])`)],b.prototype,`labelSlot`,2),g([Tt()],b.prototype,`invalid`,2),g([Tt()],b.prototype,`isIconButton`,2),g([_()],b.prototype,`title`,2),g([_({reflect:!0})],b.prototype,`variant`,2),g([_({reflect:!0})],b.prototype,`appearance`,2),g([_({reflect:!0})],b.prototype,`size`,2),g([Vt(`size`)],b.prototype,`handleSizeChange`,1),g([_({attribute:`with-caret`,type:Boolean,reflect:!0})],b.prototype,`withCaret`,2),g([_({attribute:`with-start`,type:Boolean})],b.prototype,`withStart`,2),g([_({attribute:`with-end`,type:Boolean})],b.prototype,`withEnd`,2),g([_({type:Boolean})],b.prototype,`disabled`,2),g([_({type:Boolean,reflect:!0})],b.prototype,`loading`,2),g([_({type:Boolean,reflect:!0})],b.prototype,`pill`,2),g([_()],b.prototype,`type`,2),g([_({reflect:!0})],b.prototype,`name`,2),g([_({reflect:!0})],b.prototype,`value`,2),g([_({reflect:!0})],b.prototype,`href`,2),g([_()],b.prototype,`target`,2),g([_()],b.prototype,`rel`,2),g([_()],b.prototype,`download`,2),g([_({attribute:`formaction`})],b.prototype,`formAction`,2),g([_({attribute:`formenctype`})],b.prototype,`formEnctype`,2),g([_({attribute:`formmethod`})],b.prototype,`formMethod`,2),g([_({attribute:`formnovalidate`,type:Boolean})],b.prototype,`formNoValidate`,2),g([_({attribute:`formtarget`})],b.prototype,`formTarget`,2),g([Vt(`disabled`,{waitUntilFirstUpdate:!0})],b.prototype,`handleDisabledChange`,1),g([Vt(`href`)],b.prototype,`handleHrefChange`,1),g([Vt(`loading`,{waitUntilFirstUpdate:!0})],b.prototype,`handleLoadingChange`,1),b=g([St(`wa-button`)],b),b.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Cn=l`
  :host {
    --track-width: 2px;
    --track-color: var(--wa-color-neutral-fill-normal);
    --indicator-color: var(--wa-color-brand-fill-loud);
    --speed: 2s;
    --size: 1em;

    /*
      Resizing a spinner element using anything but font-size will break the animation because the animation uses em
      units. Therefore, if a spinner is used in a flex container without \`flex: none\` applied, the spinner can
      grow/shrink and break the animation. The use of \`flex: none\` on the host element prevents this by always having
      the spinner sized according to its actual dimensions.
    */
    flex: none;
    display: inline-flex;
    width: var(--size);
    height: var(--size);
  }

  svg {
    width: 100%;
    height: 100%;
    aspect-ratio: 1;
    animation: spin var(--speed) linear infinite;
  }

  .track,
  .indicator {
    --radius: calc(var(--size) / 2 - var(--track-width) / 2);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
    r: var(--radius);
    fill: none;
    stroke-width: var(--track-width);
  }

  .track {
    stroke: var(--track-color);
  }

  .indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: calc(0.597 * var(--circumference)), calc(0.796 * var(--circumference));
    stroke-dashoffset: calc(-0.04 * var(--circumference));
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: calc(0.008 * var(--circumference)), calc(1.194 * var(--circumference));
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: calc(0.716 * var(--circumference)), calc(1.194 * var(--circumference));
      stroke-dashoffset: calc(-0.278 * var(--circumference));
    }
    100% {
      stroke-dasharray: calc(0.716 * var(--circumference)), calc(1.194 * var(--circumference));
      stroke-dashoffset: calc(-0.987 * var(--circumference));
    }
  }
`,wn=class extends Nt{constructor(){super(...arguments),this.localize=new $t(this)}render(){return Me`
      <svg
        part="base spinner"
        role="progressbar"
        aria-label=${this.localize.term(`loading`)}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle class="track" />
        <circle class="indicator" />
      </svg>
    `}};wn.css=Cn,wn=g([St(`wa-spinner`)],wn);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Tn=class extends Event{constructor(){super(`wa-error`,{bubbles:!0,cancelable:!1,composed:!0})}},En=class extends Event{constructor(){super(`wa-load`,{bubbles:!0,cancelable:!1,composed:!0})}},Dn=l`
  :host {
    --primary-color: currentColor;
    --primary-opacity: 1;
    --secondary-color: currentColor;
    --secondary-opacity: 0.4;
    --rotate-angle: 0deg;

    box-sizing: content-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: -0.125em;
  }

  /* #region Canvas — the box the icon is centered within (mirrors Font Awesome's icon canvas). Orthogonal to font-size. */

  /* Fixed width (default): 1.25em × 1em (20 × 16px) */
  :host(:not([canvas])),
  :host([canvas='fixed']) {
    width: 1.25em;
    height: 1em;
    min-width: 1.25em; /* <-- this is what Safari respects for intrinsic */
    min-height: 1em;
  }

  /* Auto: hug the icon's width. \`auto-width\` is the deprecated alias for canvas="auto". */
  :host([canvas='auto']),
  :host([auto-width]:not([canvas])) {
    width: auto;
    height: 1em;
  }

  /* Square: 1.25em × 1.25em (20 × 20px) */
  :host([canvas='square']) {
    width: 1.25em;
    height: 1.25em;
    min-width: 1.25em;
    min-height: 1.25em;
  }

  /* Roomy: 1.5em × 1.5em (24 × 24px) */
  :host([canvas='roomy']) {
    width: 1.5em;
    height: 1.5em;
    min-width: 1.5em;
    min-height: 1.5em;
  }

  /* #endregion */

  svg {
    /* NOTE: Avoid setting fill here. A stylesheet rule beats SVG presentation attributes, breaking stroke-based
       libraries like Lucide (fill="none" stroke="currentColor") and attribute-based mutators (issue #1733). The default
       library applies fill="currentColor" in its mutator instead. */
    height: 1em;
    overflow: visible;
    width: auto;

    /* Duotone colors with path-specific opacity fallback */
    path[data-duotone-primary] {
      color: var(--primary-color);
      opacity: var(--path-opacity, var(--primary-opacity));
    }

    path[data-duotone-secondary] {
      color: var(--secondary-color);
      opacity: var(--path-opacity, var(--secondary-opacity));
    }
  }

  /* Rotation */
  :host([rotate]) {
    transform: rotate(var(--rotate-angle, 0deg));
  }

  /* Flipping */
  :host([flip='x']) {
    transform: scaleX(-1);
  }
  :host([flip='y']) {
    transform: scaleY(-1);
  }
  :host([flip='both']) {
    transform: scale(-1, -1);
  }

  /* Rotation and Flipping combined */
  :host([rotate][flip='x']) {
    transform: rotate(var(--rotate-angle, 0deg)) scaleX(-1);
  }
  :host([rotate][flip='y']) {
    transform: rotate(var(--rotate-angle, 0deg)) scaleY(-1);
  }
  :host([rotate][flip='both']) {
    transform: rotate(var(--rotate-angle, 0deg)) scale(-1, -1);
  }

  /* #region Animations — ported from Font Awesome 7.3 (--fa-* props mapped to wa-icon's --* names) */

  :host([animation='beat']) {
    animation-name: beat;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='bounce']) {
    animation-name: bounce;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
  }

  :host([animation='fade']) {
    animation-name: fade;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='beat-fade']) {
    animation-name: beat-fade;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='flip']) {
    animation-name: flip;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1.5s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='flip-360']) {
    animation-name: flip-360;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='shake']) {
    animation-name: shake;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 0.75s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='spin']) {
    animation-name: spin;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 2s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='spin-pulse']) {
    animation-name: spin;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, steps(8));
  }

  /* spin-reverse is FA's reverse modifier expressed as a standalone value; reverse any spin via --animation-direction: reverse */
  :host([animation='spin-reverse']) {
    animation-name: spin;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, reverse);
    animation-duration: var(--animation-duration, 2s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='spin-snap']) {
    animation-name: spin-snap;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 3s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='spin-snap-4']) {
    animation-name: spin-snap-4;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 2.4s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='spin-snap-8']) {
    animation-name: spin-snap-8;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 4s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='buzz']) {
    animation-name: buzz;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 0.6s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='wag']) {
    animation-name: wag;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 0.9s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-out);
    transform-origin: bottom center;
  }

  :host([animation='float']) {
    animation-name: float;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 3s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
    will-change: transform;
  }

  :host([animation='swing']) {
    animation-name: swing;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1.2s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-out);
    transform-origin: top center;
  }

  :host([animation='jello']) {
    animation-name: jello;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 0.9s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-out);
  }

  @media (prefers-reduced-motion: reduce) {
    :host([animation='beat']),
    :host([animation='bounce']),
    :host([animation='fade']),
    :host([animation='beat-fade']),
    :host([animation='flip']),
    :host([animation='flip-360']),
    :host([animation='shake']),
    :host([animation='spin']),
    :host([animation='spin-pulse']),
    :host([animation='spin-reverse']),
    :host([animation='spin-snap']),
    :host([animation='spin-snap-4']),
    :host([animation='spin-snap-8']),
    :host([animation='buzz']),
    :host([animation='wag']),
    :host([animation='float']),
    :host([animation='swing']),
    :host([animation='jello']) {
      animation: none !important;
      transition: none !important;
    }
  }

  /* #endregion */

  /* #region Keyframes — ported verbatim from Font Awesome 7.3 */

  @keyframes beat {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(calc(1.25 * var(--beat-scale, 1.25)));
    }
    45% {
      transform: scale(calc(1.22 * var(--beat-scale, 1.22)));
    }
    65% {
      transform: scale(calc(1.25 * var(--beat-scale, 1.25)));
    }
    90% {
      transform: scale(1);
    }
  }

  @keyframes bounce {
    0% {
      transform: scale(1, 1) translateY(0);
      /* No fallback by design (ported from FA 7.3): the first segment uses the user's --animation-timing or the CSS
         initial ease, while the explicit cubic-beziers on later stops drive the bounce physics. */
      animation-timing-function: var(--animation-timing);
    }
    14% {
      transform: scale(var(--bounce-start-scale-x, 1.06), var(--bounce-start-scale-y, 0.94))
        translateY(var(--bounce-anticipation, 3px));
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
    }
    32% {
      transform: scale(var(--bounce-jump-scale-x, 0.94), var(--bounce-jump-scale-y, 1.12))
        translateY(calc(-1 * var(--bounce-height, 0.5em)));
      animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
    }
    52% {
      transform: scale(1, 1) translateY(calc(-1 * var(--bounce-height, 0.5em) * 1.1));
      animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
    }
    70% {
      transform: scale(var(--bounce-land-scale-x, 1.06), var(--bounce-land-scale-y, 0.92)) translateY(0);
      animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
    }
    85% {
      transform: scale(0.98, 1.04) translateY(calc(-2px * var(--bounce-rebound, 1)));
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
    }
    100% {
      transform: scale(1, 1) translateY(0);
    }
  }

  @keyframes fade {
    0% {
      opacity: 1;
      transform: scale(1);
      animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
    }
    40% {
      opacity: var(--fade-opacity, 0.4);
      transform: scale(0.98);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes beat-fade {
    0% {
      opacity: var(--beat-fade-opacity, 0.4);
      transform: scale(1);
      animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
    }
    25% {
      opacity: calc(var(--beat-fade-opacity, 0.4) + 0.4);
      transform: scale(var(--beat-fade-scale, 1.28));
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    45% {
      opacity: 1;
      transform: scale(var(--beat-fade-scale, 1.25));
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    65% {
      opacity: calc(var(--beat-fade-opacity, 0.4) + 0.4);
      transform: scale(var(--beat-fade-scale, 1.28));
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    100% {
      opacity: var(--beat-fade-opacity, 0.4);
      transform: scale(1);
    }
  }

  @keyframes flip {
    0% {
      transform: perspective(2em) scale(1) rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), 0deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
    }
    8% {
      transform: perspective(2em) scale(var(--flip-anticipation-scale, 0.95))
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), 0deg);
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
    }
    35% {
      transform: perspective(2em) scale(1)
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), calc(var(--flip-angle, -360deg) * 0.6));
      animation-timing-function: linear;
    }
    65% {
      transform: perspective(2em) scale(1)
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), calc(var(--flip-angle, -360deg) * 0.5));
      animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
    }
    92% {
      transform: perspective(2em) scale(1)
        rotate3d(
          var(--flip-x, 0),
          var(--flip-y, 1),
          var(--flip-z, 0),
          calc(var(--flip-angle, -360deg) * var(--flip-overshoot, 1.04))
        );
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
    }
    100% {
      transform: perspective(2em) scale(1)
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), var(--flip-angle, -360deg));
    }
  }

  @keyframes flip-360 {
    0% {
      transform: perspective(2em) scale(1) rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), 0deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
    }
    8% {
      transform: perspective(2em) scale(var(--flip-anticipation-scale, 0.95))
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), 0deg);
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
    }
    50% {
      transform: perspective(2em) scale(1)
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), calc(var(--flip-angle, -360deg) * 0.6));
      animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
    }
    80% {
      transform: perspective(2em) scale(1)
        rotate3d(
          var(--flip-x, 0),
          var(--flip-y, 1),
          var(--flip-z, 0),
          calc(var(--flip-angle, -360deg) * var(--flip-overshoot, 1.04))
        );
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
    }
    100% {
      transform: perspective(2em) scale(1)
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), var(--flip-angle, -360deg));
    }
  }

  @keyframes shake {
    0% {
      transform: rotate(0deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
    }
    8% {
      transform: rotate(35deg) translateX(1px);
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    20% {
      transform: rotate(-22deg) translateX(-1px);
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    35% {
      transform: rotate(15deg) translateX(1px);
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    50% {
      transform: rotate(-9deg);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    65% {
      transform: rotate(5deg);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    78% {
      transform: rotate(-3deg);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    90% {
      transform: rotate(1deg);
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes spin-snap {
    0% {
      transform: rotate(0deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    12% {
      transform: rotate(60deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    16.67% {
      transform: rotate(60deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    28.67% {
      transform: rotate(120deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    33.33% {
      transform: rotate(120deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    45.33% {
      transform: rotate(180deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: rotate(180deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    62% {
      transform: rotate(240deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    66.67% {
      transform: rotate(240deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    78.67% {
      transform: rotate(300deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    83.33% {
      transform: rotate(300deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    95.33% {
      transform: rotate(360deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes spin-snap-4 {
    0% {
      transform: rotate(0deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    15% {
      transform: rotate(90deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    25% {
      transform: rotate(90deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    40% {
      transform: rotate(180deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: rotate(180deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    65% {
      transform: rotate(270deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    75% {
      transform: rotate(270deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    90% {
      transform: rotate(360deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes spin-snap-8 {
    0% {
      transform: rotate(0deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    9% {
      transform: rotate(45deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    12.5% {
      transform: rotate(45deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    21.5% {
      transform: rotate(90deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    25% {
      transform: rotate(90deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    34% {
      transform: rotate(135deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    37.5% {
      transform: rotate(135deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    46.5% {
      transform: rotate(180deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: rotate(180deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    59% {
      transform: rotate(225deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    62.5% {
      transform: rotate(225deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    71.5% {
      transform: rotate(270deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    75% {
      transform: rotate(270deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    84% {
      transform: rotate(315deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    87.5% {
      transform: rotate(315deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    96.5% {
      transform: rotate(360deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes buzz {
    0% {
      transform: translateX(0) rotate(0deg);
      animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
    }
    5% {
      transform: translateX(var(--buzz-distance, 4px)) rotate(0.5deg);
    }
    10% {
      transform: translateX(calc(-1 * var(--buzz-distance, 4px))) rotate(-0.5deg);
    }
    15% {
      transform: translateX(var(--buzz-distance, 4px)) rotate(0.3deg);
    }
    20% {
      transform: translateX(calc(-1 * var(--buzz-distance, 4px))) rotate(-0.3deg);
    }
    25% {
      transform: translateX(calc(var(--buzz-distance, 4px) * 0.7)) rotate(0.2deg);
    }
    30% {
      transform: translateX(calc(-1 * var(--buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
    }
    35% {
      transform: translateX(calc(var(--buzz-distance, 4px) * 0.4)) rotate(0.1deg);
    }
    40% {
      transform: translateX(0) rotate(0deg);
    }
    100% {
      transform: translateX(0) rotate(0deg);
    }
  }

  @keyframes wag {
    0% {
      transform: rotate(0deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
    }
    12% {
      transform: rotate(var(--wag-angle, 12deg));
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    24% {
      transform: rotate(2deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
    }
    36% {
      transform: rotate(calc(var(--wag-angle, 12deg) * 0.85));
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    48% {
      transform: rotate(1deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
    }
    58% {
      transform: rotate(calc(var(--wag-angle, 12deg) * 0.6));
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    68% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes float {
    0% {
      transform: translateY(0) translateX(0) rotate(0deg)
        scale(var(--float-squash-x, 1.02), var(--float-squash-y, 0.98));
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
    }
    15% {
      transform: translateY(calc(-0.4 * var(--float-height, 6px))) translateX(var(--float-drift, 1px))
        rotate(var(--float-tilt, 1deg)) scale(1, 1);
      animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
    }
    35% {
      transform: translateY(calc(-1 * var(--float-height, 6px))) translateX(0) rotate(0deg)
        scale(var(--float-stretch-x, 0.98), var(--float-stretch-y, 1.03));
      animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
    }
    50% {
      transform: translateY(calc(-0.92 * var(--float-height, 6px))) translateX(calc(-0.5 * var(--float-drift, 1px)))
        rotate(calc(-0.5 * var(--float-tilt, 1deg))) scale(0.995, 1.01);
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
    }
    70% {
      transform: translateY(calc(-0.3 * var(--float-height, 6px))) translateX(calc(-1 * var(--float-drift, 1px)))
        rotate(calc(-1 * var(--float-tilt, 1deg))) scale(1, 1);
      animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
    }
    90% {
      transform: translateY(calc(0.05 * var(--float-height, 6px))) translateX(0) rotate(0deg)
        scale(var(--float-squash-x, 1.02), var(--float-squash-y, 0.98));
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
    }
    100% {
      transform: translateY(0) translateX(0) rotate(0deg)
        scale(var(--float-squash-x, 1.02), var(--float-squash-y, 0.98));
    }
  }

  @keyframes swing {
    0% {
      transform: rotate(0deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
    }
    8% {
      transform: rotate(var(--swing-angle, 22deg));
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    18% {
      transform: rotate(calc(-1 * var(--swing-angle, 22deg) * 0.85));
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    28% {
      transform: rotate(calc(var(--swing-angle, 22deg) * 0.65));
      animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
    }
    38% {
      transform: rotate(calc(-1 * var(--swing-angle, 22deg) * 0.45));
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    48% {
      transform: rotate(calc(var(--swing-angle, 22deg) * 0.25));
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    56% {
      transform: rotate(calc(-1 * var(--swing-angle, 22deg) * 0.1));
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    64% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes jello {
    0% {
      transform: scale(1, 1);
      animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
    }
    12% {
      transform: scale(var(--jello-scale-x, 1.15), calc(2 - var(--jello-scale-x, 1.15)));
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    24% {
      transform: scale(calc(2 - var(--jello-scale-y, 1.12)), var(--jello-scale-y, 1.12));
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    36% {
      transform: scale(
        calc(1 + (var(--jello-scale-x, 1.15) - 1) * 0.5),
        calc(2 - (1 + (var(--jello-scale-x, 1.15) - 1) * 0.5))
      );
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    48% {
      transform: scale(
        calc(2 - (1 + (var(--jello-scale-y, 1.12) - 1) * 0.3)),
        calc(1 + (var(--jello-scale-y, 1.12) - 1) * 0.3)
      );
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    58% {
      transform: scale(1.02, 0.98);
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    68% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(1, 1);
    }
  }

  /* #endregion */
`,On=``,kn=``;function An(){return On.replace(/\/$/,``)}function jn(e){kn=e}function Mn(){if(!kn){let e=document.querySelector(`[data-fa-kit-code]`);e&&jn(e.getAttribute(`data-fa-kit-code`)||``)}return kn}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Nn=`7.3.0`;function Pn(e,t,n){let r=`solid`;return t===`chisel`&&(r=`chisel-regular`),t===`etch`&&(r=`etch-solid`),t===`graphite`&&(r=`graphite-thin`),t===`jelly`&&(r=`jelly-regular`,n===`duo-regular`&&(r=`jelly-duo-regular`),n===`fill-regular`&&(r=`jelly-fill-regular`)),t===`jelly-duo`&&(r=`jelly-duo-regular`),t===`jelly-fill`&&(r=`jelly-fill-regular`),t===`notdog`&&(n===`solid`&&(r=`notdog-solid`),n===`duo-solid`&&(r=`notdog-duo-solid`)),t===`notdog-duo`&&(r=`notdog-duo-solid`),t===`slab`&&((n===`solid`||n===`regular`)&&(r=`slab-regular`),n===`press-regular`&&(r=`slab-press-regular`)),t===`slab-press`&&(r=`slab-press-regular`),t===`slab-duo`&&(r=`slab-duo-regular`),t===`slab-press-duo`&&(r=`slab-press-duo-regular`),t===`thumbprint`&&(r=`thumbprint-light`),t===`utility`&&(r=`utility-semibold`),t===`utility-duo`&&(r=`utility-duo-semibold`),t===`utility-fill`&&(r=`utility-fill-semibold`),t===`whiteboard`&&(r=`whiteboard-semibold`),t===`mosaic`&&(r=`mosaic-solid`),t===`pixel`&&(r=`pixel-regular`),t===`vellum`&&(r=`vellum-solid`),t===`classic`&&(n===`thin`&&(r=`thin`),n===`light`&&(r=`light`),n===`regular`&&(r=`regular`),n===`solid`&&(r=`solid`)),t===`duotone`&&(n===`thin`&&(r=`duotone-thin`),n===`light`&&(r=`duotone-light`),n===`regular`&&(r=`duotone-regular`),n===`solid`&&(r=`duotone`)),t===`sharp`&&(n===`thin`&&(r=`sharp-thin`),n===`light`&&(r=`sharp-light`),n===`regular`&&(r=`sharp-regular`),n===`solid`&&(r=`sharp-solid`)),t===`sharp-duotone`&&(n===`thin`&&(r=`sharp-duotone-thin`),n===`light`&&(r=`sharp-duotone-light`),n===`regular`&&(r=`sharp-duotone-regular`),n===`solid`&&(r=`sharp-duotone-solid`)),t===`brands`&&(r=`brands`),r}function Fn(e,t,n){let r=Pn(e,t,n),i=An();if(i)return`${i}/${r}/${e}.svg`;let a=Mn();return a.length>0?`https://ka-p.fontawesome.com/releases/v${Nn}/svgs/${r}/${e}.svg?token=${encodeURIComponent(a)}`:`https://ka-f.fontawesome.com/releases/v${Nn}/svgs/${r}/${e}.svg`}var In={name:`default`,resolver:(e,t=`classic`,n=`solid`)=>Fn(e,t,n),mutator:(e,t)=>{if(e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`),t?.family&&!e.hasAttribute(`data-duotone-initialized`)){let{family:n,variant:r}=t;if(n===`duotone`||n===`sharp-duotone`||n===`notdog-duo`||n===`notdog`&&r===`duo-solid`||n===`jelly-duo`||n===`jelly`&&r===`duo-regular`||n===`utility-duo`||n===`slab-duo`||n===`slab-press-duo`||n===`thumbprint`){let n=[...e.querySelectorAll(`path`)],r=n.find(e=>!e.hasAttribute(`opacity`)),i=n.find(e=>e.hasAttribute(`opacity`));if(!r||!i)return;if(r.setAttribute(`data-duotone-primary`,``),i.setAttribute(`data-duotone-secondary`,``),t.swapOpacity&&r&&i){let e=i.getAttribute(`opacity`)||`0.4`;r.style.setProperty(`--path-opacity`,e),i.style.setProperty(`--path-opacity`,`1`)}e.setAttribute(`data-duotone-initialized`,``)}}}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Ln(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var Rn={solid:{"arrow-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`,"arrow-up":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>`,backward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M236.3 107.1C247.9 96 265 92.9 279.7 99.2C294.4 105.5 304 120 304 136L304 272.3L476.3 107.2C487.9 96 505 92.9 519.7 99.2C534.4 105.5 544 120 544 136L544 504C544 520 534.4 534.5 519.7 540.8C505 547.1 487.9 544 476.3 532.9L304 367.7L304 504C304 520 294.4 534.5 279.7 540.8C265 547.1 247.9 544 236.3 532.9L44.3 348.9C36.5 341.3 32 330.9 32 320C32 309.1 36.5 298.7 44.3 291.1L236.3 107.1z"/></svg>`,"backward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M491 100.8C478.1 93.8 462.3 94.5 450 102.6L192 272.1L192 128C192 110.3 177.7 96 160 96C142.3 96 128 110.3 128 128L128 512C128 529.7 142.3 544 160 544C177.7 544 192 529.7 192 512L192 367.9L450 537.5C462.3 545.6 478 546.3 491 539.3C504 532.3 512 518.8 512 504.1L512 136.1C512 121.4 503.9 107.9 491 100.9z"/></svg>`,bars:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>`,"angles-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M77.3 256 214.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256zm192 0L406.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L269.3 256z"/></svg>`,"angles-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.7 256 297.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 256zm-192 0L105.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256z"/></svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>`,"chevron-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`,"chevron-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>`,"chevron-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>`,circle:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>`,"closed-captioning":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M64 192C64 156.7 92.7 128 128 128L512 128C547.3 128 576 156.7 576 192L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 192zM216 272L248 272C252.4 272 256 275.6 256 280C256 293.3 266.7 304 280 304C293.3 304 304 293.3 304 280C304 249.1 278.9 224 248 224L216 224C185.1 224 160 249.1 160 280L160 360C160 390.9 185.1 416 216 416L248 416C278.9 416 304 390.9 304 360C304 346.7 293.3 336 280 336C266.7 336 256 346.7 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 280C208 275.6 211.6 272 216 272zM384 280C384 275.6 387.6 272 392 272L424 272C428.4 272 432 275.6 432 280C432 293.3 442.7 304 456 304C469.3 304 480 293.3 480 280C480 249.1 454.9 224 424 224L392 224C361.1 224 336 249.1 336 280L336 360C336 390.9 361.1 416 392 416L424 416C454.9 416 480 390.9 480 360C480 346.7 469.3 336 456 336C442.7 336 432 346.7 432 360C432 364.4 428.4 368 424 368L392 368C387.6 368 384 364.4 384 360L384 280z"/></svg>`,"closed-captioning-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M39 39.1C48.4 29.7 63.6 29.7 72.9 39.1L161.8 128L512 128C547.3 128 576 156.7 576 192L576 448C576 473.5 561.1 495.4 539.6 505.8L601 567.1C610.4 576.5 610.4 591.7 601 601C591.6 610.3 576.4 610.4 567.1 601L39 73.1C29.7 63.7 29.7 48.5 39 39.1zM384 350.1L384 279.9C384 275.5 387.6 271.9 392 271.9L424 271.9C428.4 271.9 432 275.5 432 279.9C432 293.2 442.7 303.9 456 303.9C469.3 303.9 480 293.2 480 279.9C480 249 454.9 223.9 424 223.9L392 223.9C361.1 223.9 336 249 336 279.9L336 302.1L384 350.1zM445.5 411.6C465.7 403.2 480 383.2 480 359.9C480 346.6 469.3 335.9 456 335.9C442.7 335.9 432 346.6 432 359.9C432 364.3 428.4 367.9 424 367.9L401.8 367.9L445.5 411.6zM162.3 264.1C160.8 269.1 160 274.5 160 280L160 360C160 390.9 185.1 416 216 416L248 416C266.1 416 282.1 407.5 292.4 394.2L410.2 512L128 512C92.7 512 64 483.3 64 448L64 192C64 184.2 65.4 176.7 68 169.8L162.3 264.1zM256.1 357.9C256 358.6 256 359.3 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 309.8L256.1 357.9z"/></svg>`,compress:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>`,ellipsis:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M96 320C96 289.1 121.1 264 152 264C182.9 264 208 289.1 208 320C208 350.9 182.9 376 152 376C121.1 376 96 350.9 96 320zM264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320zM488 264C518.9 264 544 289.1 544 320C544 350.9 518.9 376 488 376C457.1 376 432 350.9 432 320C432 289.1 457.1 264 488 264z"/></svg>`,"ellipsis-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/></svg>`,expand:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 96C110.3 96 96 110.3 96 128L96 224C96 241.7 110.3 256 128 256C145.7 256 160 241.7 160 224L160 160L224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L128 96zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 512C96 529.7 110.3 544 128 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480L160 416zM416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160L480 224C480 241.7 494.3 256 512 256C529.7 256 544 241.7 544 224L544 128C544 110.3 529.7 96 512 96L416 96zM544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L512 544C529.7 544 544 529.7 544 512L544 416z"/></svg>`,eyedropper:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>`,filter:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 64C19.1 64 7.4 71.8 2.4 83.8S.2 109.5 9.4 118.6L192 301.3 192 416c0 8.5 3.4 16.6 9.4 22.6l64 64c9.2 9.2 22.9 11.9 34.9 6.9S320 492.9 320 480l0-178.7 182.6-182.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 64 480 64L32 64z"/></svg>`,forward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M403.7 107.1C392.1 96 375 92.9 360.3 99.2C345.6 105.5 336 120 336 136L336 272.3L163.7 107.2C152.1 96 135 92.9 120.3 99.2C105.6 105.5 96 120 96 136L96 504C96 520 105.6 534.5 120.3 540.8C135 547.1 152.1 544 163.7 532.9L336 367.7L336 504C336 520 345.6 534.5 360.3 540.8C375 547.1 392.1 544 403.7 532.9L595.7 348.9C603.6 341.4 608 330.9 608 320C608 309.1 603.5 298.7 595.7 291.1L403.7 107.1z"/></svg>`,file:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>`,"file-audio":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>`,"file-code":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>`,"file-excel":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>`,"file-image":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>`,"file-pdf":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>`,"file-powerpoint":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>`,"file-video":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>`,"file-word":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>`,"file-zipper":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>`,"forward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M21 36.8c12.9-7 28.7-6.3 41 1.8L320 208.1 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-144.1-258 169.6c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440L0 72C0 57.3 8.1 43.8 21 36.8z"/></svg>`,gauge:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,gear:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>`,"grip-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>`,indeterminate:`<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>`,"magnifying-glass":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>`,minus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>`,pause:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>`,"picture-in-picture":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M448 32c35.3 0 64 28.7 64 64l0 112-64 0 0-112-384 0 0 320 144 0 0 64-144 0-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416 0 96C0 62.9 25.2 35.6 57.5 32.3L64 32 448 32zm16 224c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48l160 0z"/></svg>`,play:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>`,"play-circle":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>`,plus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>`,"table-columns":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 64l0 256 128 0 0-256-128 0zm320 0l-128 0 0 256 128 0 0-256z"/></svg>`,thumbtack:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 10.3 134.1c37.1 21.2 65.8 56.4 78.2 99.7l3.8 13.4c2.8 9.7 .8 20-5.2 28.1S362 352 352 352L32 352c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1L5 297.8c12.4-43.3 41-78.5 78.2-99.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 400l64 0 0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-112z"/></svg>`,"up-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M406.6 502.6l96-96c9.2-9.2 11.9-22.9 6.9-34.9S492.9 352 480 352l-64 0 0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 320-64 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l96 96c12.5 12.5 32.8 12.5 45.3 0zM150.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-9.2 9.2-11.9 22.9-6.9 34.9S19.1 160 32 160l64 0 0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320 64 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-96-96z"/></svg>`,upload:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>`,user:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>`,volume:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM441.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C443.3 170.7 464 210.9 464 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-low":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,xmark:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>`},regular:{calendar:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z"/></svg>`,"circle-question":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`,"circle-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,clock:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>`,copy:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>`,eye:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>`,"eye-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>`}},zn={name:`system`,resolver:(e,t=`classic`,n=`solid`)=>{let r=Rn[n][e]??Rn.regular[e]??Rn.regular[`circle-question`];return r?Ln(r):``},mutator:e=>{e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`)}},Bn=`classic`,Vn=[In,zn],Hn=new Set;function Un(e){Hn.add(e)}function Wn(e){Hn.delete(e)}function Gn(e){return Vn.find(t=>t.name===e)}function Kn(){return Bn}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var qn=Symbol(),Jn=Symbol(),Yn,Xn=new Map,x=class extends Nt{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label=``,this.library=`default`,this.rotate=0,this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=Me`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let n=this.shadowRoot.querySelector(`[part='svg']`);return typeof t.mutator==`function`&&t.mutator(n,this),this.svg}try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?qn:Jn}catch{return Jn}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return qn;Yn||=new DOMParser;let r=Yn.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):qn}catch{return qn}}}connectedCallback(){super.connectedCallback(),Un(this)}firstUpdated(e){super.firstUpdated(e),this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Wn(this)}async getIconSource(){let e=Gn(this.library),t=this.family||Kn();if(this.name&&e){let n=this.canvas===`auto`||this.autoWidth,r;try{r=await e.resolver(this.name,t,this.variant,n)}catch{r=void 0}return{url:r,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=await this.getIconSource(),n=t?Gn(this.library):void 0;if(!e){this.svg=null;return}let r=Xn.get(e);r||(r=this.resolveIcon(e,n),Xn.set(e,r));let i=await r;if(i===Jn&&Xn.delete(e),e===(await this.getIconSource()).url){if(on(i)){this.svg=i;return}switch(i){case Jn:case qn:this.svg=null,this.dispatchEvent(new Tn);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new En)}}}willUpdate(e){return this.style||this.setStyleProperty(`--rotate-angle`,`${this.rotate}deg`),super.willUpdate(e)}updated(e){super.updated(e);let t=Gn(this.library);this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`);let n=this.shadowRoot?.querySelector(`svg`);n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:Me`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};x.css=Dn,g([Tt()],x.prototype,`svg`,2),g([_({reflect:!0})],x.prototype,`name`,2),g([_({reflect:!0})],x.prototype,`family`,2),g([_({reflect:!0})],x.prototype,`variant`,2),g([_({reflect:!0})],x.prototype,`canvas`,2),g([_({attribute:`auto-width`,type:Boolean,reflect:!0})],x.prototype,`autoWidth`,2),g([_({attribute:`swap-opacity`,type:Boolean,reflect:!0})],x.prototype,`swapOpacity`,2),g([_()],x.prototype,`src`,2),g([_()],x.prototype,`label`,2),g([_({reflect:!0})],x.prototype,`library`,2),g([_({type:Number,reflect:!0})],x.prototype,`rotate`,2),g([_({type:String,reflect:!0})],x.prototype,`flip`,2),g([_({type:String,reflect:!0})],x.prototype,`animation`,2),g([Vt(`label`)],x.prototype,`handleLabelChange`,1),g([Vt([`family`,`name`,`library`,`variant`,`src`,`autoWidth`,`canvas`,`swapOpacity`],{waitUntilFirstUpdate:!0})],x.prototype,`setIcon`,1),x=g([St(`wa-icon`)],x);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Zn=t({default:()=>y}),S;Object.getOwnPropertyDescriptors||(()=>{var e;if(typeof Reflect<`u`&&Reflect.ownKeys)e=Reflect.ownKeys;else{var t=Object.getOwnPropertySymbols||(e=>[]);e=(e=>Object.getOwnPropertyNames(e).concat(t(e)))}return(t=>{for(var n=e(t),r={},i=n.length|0,a=0;a!==i;){var o=n[a];Object.defineProperty(r,o,{configurable:!0,enumerable:!0,writable:!0,value:Object.getOwnPropertyDescriptor(t,o)}),a=a+1|0}return r})})();var Qn;function $n(e){this.c=e}S=$n.prototype,S.toString=(function(){return String.fromCharCode(this.c)});function er(e){switch(typeof e){case`string`:return lp.l();case`number`:return hr(e)?e<<24>>24===e?Ud.l():e<<16>>16===e?Xd.l():np.l():gr(e)?tp.l():ep.l();case`boolean`:return Ju.l();case`undefined`:return Jo.l();default:return e instanceof j?ap.l():e instanceof $n?Zu.l():e&&e.$classData?e.$classData.l():null}}function tr(e){switch(typeof e){case`string`:return`java.lang.String`;case`number`:return hr(e)?e<<24>>24===e?`java.lang.Byte`:e<<16>>16===e?`java.lang.Short`:`java.lang.Integer`:gr(e)?`java.lang.Float`:`java.lang.Double`;case`boolean`:return`java.lang.Boolean`;case`undefined`:return`java.lang.Void`;default:return e instanceof j?`java.lang.Long`:e instanceof $n?`java.lang.Character`:e&&e.$classData?e.$classData.N:null.iD()}}function nr(e,t){switch(typeof e){case`string`:return cp(e,t);case`number`:return Qf(e,t);case`boolean`:return Ku(e,t);case`undefined`:return Go(e,t);default:return e&&e.$classData||e===null?e.e(t):e instanceof j?rp(e,t):e instanceof $n?Xu(vr(e),t):br.prototype.e.call(e,t)}}function rr(e){switch(typeof e){case`string`:return sp(e);case`number`:return $f(e);case`boolean`:return qu(e);case`undefined`:return Ko(e);default:return e&&e.$classData||e===null?e.l():e instanceof j?ip(e):e instanceof $n?Yu(vr(e)):br.prototype.l.call(e)}}function ir(e){return e===void 0?`undefined`:e.toString()}function ar(e,t){if(t===0)throw new Hd(`/ by zero`);return e/t|0}function or(e,t){if(t===0)throw new Hd(`/ by zero`);return e%t|0}function sr(e){return e>2147483647?2147483647:e<-2147483648?-2147483648:e|0}function cr(e){return String.fromCharCode(e)}function lr(e,t,n,r,i){if(e!==n||r<t||(t+i|0)<r)for(var a=0;a<i;a=a+1|0)n[r+a|0]=e[t+a|0];else for(var a=i-1|0;a>=0;a=a-1|0)n[r+a|0]=e[t+a|0]}var ur=0,dr=new WeakMap;function fr(e){switch(typeof e){case`string`:return sp(e);case`number`:return $f(e);case`bigint`:var t=0;for(e<BigInt(0)&&(e=~e);e!==BigInt(0);)t^=Number(BigInt.asIntN(32,e)),e>>=BigInt(32);return t;case`boolean`:return e?1231:1237;case`undefined`:return 0;case`symbol`:var n=e.description;return n===void 0?0:sp(n);default:if(e===null)return 0;var r=dr.get(e);return r===void 0&&(r=ur+1|0,ur=r,dr.set(e,r)),r}}function pr(e){return typeof e==`number`&&e<<24>>24===e&&1/e!=-1/0}function mr(e){return typeof e==`number`&&e<<16>>16===e&&1/e!=-1/0}function hr(e){return typeof e==`number`&&(e|0)===e&&1/e!=-1/0}function gr(e){return typeof e==`number`&&(e!==e||Math.fround(e)===e)}function _r(e){return new $n(e)}_r(0);function vr(e){return e===null?0:e.c}function yr(e){return e===null?Qn:e}function br(){}S=br.prototype,S.constructor=br;function C(){}C.prototype=S,S.l=(function(){return fr(this)}),S.e=(function(e){return this===e}),S.n=(function(){var e=this.l();return tr(this)+`@`+(+(e>>>0)).toString(16)}),S.toString=(function(){return this.n()});function w(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}S=w.prototype=new C,S.constructor=w,S.a8=(function(e,t,n,r){lr(this.a,e,t.a,n,r)}),S.a1=(function(){return new w(this.a.slice())});function xr(){}xr.prototype=S;function Sr(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=!1}else this.a=e}S=Sr.prototype=new C,S.constructor=Sr,S.a8=(function(e,t,n,r){lr(this.a,e,t.a,n,r)}),S.a1=(function(){return new Sr(this.a.slice())});function Cr(e){typeof e==`number`?this.a=new Uint16Array(e):this.a=e}S=Cr.prototype=new C,S.constructor=Cr,S.a8=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),S.a1=(function(){return new Cr(this.a.slice())});function wr(e){typeof e==`number`?this.a=new Int8Array(e):this.a=e}S=wr.prototype=new C,S.constructor=wr,S.a8=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),S.a1=(function(){return new wr(this.a.slice())});function Tr(e){typeof e==`number`?this.a=new Int16Array(e):this.a=e}S=Tr.prototype=new C,S.constructor=Tr,S.a8=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),S.a1=(function(){return new Tr(this.a.slice())});function Er(e){typeof e==`number`?this.a=new Int32Array(e):this.a=e}S=Er.prototype=new C,S.constructor=Er,S.a8=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),S.a1=(function(){return new Er(this.a.slice())});function Dr(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=Qn}else this.a=e}S=Dr.prototype=new C,S.constructor=Dr,S.a8=(function(e,t,n,r){lr(this.a,e,t.a,n,r)}),S.a1=(function(){return new Dr(this.a.slice())});function Or(e){typeof e==`number`?this.a=new Float32Array(e):this.a=e}S=Or.prototype=new C,S.constructor=Or,S.a8=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),S.a1=(function(){return new Or(this.a.slice())});function kr(e){typeof e==`number`?this.a=new Float64Array(e):this.a=e}S=kr.prototype=new C,S.constructor=kr,S.a8=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),S.a1=(function(){return new kr(this.a.slice())});function T(){this.C=void 0,this.n=null,this.O=null,this.B=null,this.D=0,this.z=null,this.E=``,this.L=void 0,this.A=void 0,this.F=void 0,this.w=void 0,this.J=!1,this.N=``,this.X=!1,this.Y=!1,this.Z=!1,this.I=void 0}S=T.prototype,S.p=(function(e,t,n,r,i){this.n={},this.z=e,this.E=t;var a=this;return this.F=(e=>e===a),this.N=n,this.X=!0,this.I=(e=>!1),r!==void 0&&(this.A=new T().y(this,r,i)),this}),S.i=(function(e,t,n,r){var i=Object.getOwnPropertyNames(n)[0];return this.n=n,this.E=`L`+t+`;`,this.F=(e=>!!e.n[i]),this.J=e===2,this.N=t,this.Y=e===1,this.I=r||(e=>!!(e&&e.$classData&&e.$classData.n[i])),typeof e!=`number`&&(e.prototype.$classData=this),this}),S.y=(function(e,t,n,r){t.prototype.$classData=this;var i=`[`+e.E;this.C=t,this.n={u:1,a:1},this.O=e,this.B=e,this.D=1,this.E=i,this.N=i,this.Z=!0;var a=this;return this.F=r||(e=>a===e),this.w=n?(e=>new t(new n(e))):(e=>new t(e)),this.I=(e=>e instanceof t),this}),S.a=(function(e){function t(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}var n=t.prototype=new xr;n.constructor=t,n.a8=(function(e,t,n,r){lr(this.a,e,t.a,n,r)}),n.a1=(function(){return new t(this.a.slice())}),n.$classData=this;var r=e.B||e,i=e.D+1,a=`[`+e.E;this.C=t,this.n={u:1,a:1},this.O=e,this.B=r,this.D=i,this.E=a,this.N=a,this.Z=!0;var o=(e=>{var t=e.D;return t===i?r.F(e.B):t>i&&r===Ar});this.F=o,this.w=(e=>new t(e));var s=this;return this.I=(e=>{var t=e&&e.$classData;return!!t&&(t===s||o(t))}),this}),S.r=(function(){return this.A||=new T().a(this),this.A}),S.l=(function(){return this.L||=new Xl(this),this.L}),S.R=(function(e){return this===e||this.F(e)}),S.S=(function(){return this.P?this.P.l():null}),S.Q=(function(){return this.O?this.O.l():null});var Ar=new T;Ar.n={},Ar.E=`Ljava.lang.Object;`,Ar.F=(e=>!e.X),Ar.N=`java.lang.Object`,Ar.I=(e=>e!==null),Ar.A=new T().y(Ar,w,void 0,(e=>{var t=e.D;return t===1?!e.B.X:t>1})),br.prototype.$classData=Ar;var jr=new T().p(void 0,`V`,`void`,void 0,void 0);new T().p(!1,`Z`,`boolean`,Sr,void 0);var Mr=new T().p(0,`C`,`char`,Cr,Uint16Array);new T().p(0,`B`,`byte`,wr,Int8Array),new T().p(0,`S`,`short`,Tr,Int16Array),new T().p(0,`I`,`int`,Er,Int32Array);var Nr=new T().p(null,`J`,`long`,Dr,void 0);new T().p(0,`F`,`float`,Or,Float32Array),new T().p(0,`D`,`double`,kr,Float64Array);var Pr=new T().i(1,`com.raquo.airstream.core.InternalObserver`,{be:1});function Fr(e){return er(e).dd()+`@`+e.l()}function Ir(e){var t=e.c9();return t===void 0?e.c3():t}function Lr(){zr=this,Br().fI(new q((e=>void 0)),vs().bX,!0)}S=Lr.prototype=new C,S.constructor=Lr;function Rr(){}Rr.prototype=S,S.fI=(function(e,t,n){return new ku(e,n,t,this)}),S.gQ=(function(e,t){return new ju(e,t,this)}),new T().i(Lr,`com.raquo.airstream.core.Observer$`,{bg:1});var zr;function Br(){return zr||=new Lr,zr}function Vr(){}S=Vr.prototype=new C,S.constructor=Vr;function Hr(){}Hr.prototype=S,S.hH=(function(e,t){var n=e.indexOf(t)|0,r=n!==-1;return r&&e.splice(n,1),r}),new T().i(Vr,`com.raquo.airstream.core.ObserverList$`,{bj:1});var Ur;function Wr(){return Ur||=new Vr,Ur}function Gr(){this.aH=0,this.aH=0}S=Gr.prototype=new C,S.constructor=Gr;function Kr(){}Kr.prototype=S,S.fx=(function(){return this.aH===2147483647?this.aH=1:this.aH=1+this.aH|0,this.aH}),new T().i(Gr,`com.raquo.airstream.core.Signal$`,{bl:1});var qr;function Jr(){return qr||=new Gr,qr}function Yr(e){this.cg=null,this.dq=null,this.ch=0,this.cg=e,this.dq=void 0;var t=hi().bD();this.ch=t===void 0?1:1+t.ch|0,ti().bF===-1||this.ch>ti().bF?B().a3(new Kf(this,ti().bF)):oi().B?oi().aq.push(this)|0:hi().d6(this)}S=Yr.prototype=new C,S.constructor=Yr;function Xr(){}Xr.prototype=S;var Zr=new T().i(Yr,`com.raquo.airstream.core.Transaction`,{bm:1});function Qr(){this.bF=0,this.dr=null,ei=this,this.bF=1e3,this.dr=new q((e=>{throw V(new H,`Attempted to run Transaction `+e+` after it was already executed.`)}))}S=Qr.prototype=new C,S.constructor=Qr;function $r(){}$r.prototype=S,S.fd=(function(e){try{e.cg.h(e);var t=e.dq;if(t!==void 0)for(;t.iH();)t.ix().iK(e)}catch(e){var n=e instanceof R?e:new Z(e);B().a3(n)}}),new T().i(Qr,`com.raquo.airstream.core.Transaction$`,{bn:1});var ei;function ti(){return ei||=new Qr,ei}function ni(e){e.bG.length|0?new Yr(new q((t=>{for(;(e.bG.length|0)>0;){var n=e.bG.shift();try{n.h(t)}catch(e){var r=e instanceof R?e:new Z(e);B().a3(r)}}for(;(e.aq.length|0)>0;){var i=e.aq.shift();hi().d6(i)}}))):(e.aq.length|0)>0&&new Yr(new q((t=>{for(;(e.aq.length|0)>0;)hi().d6(e.aq.shift())})))}function ri(){this.B=!1,this.bG=null,this.aq=null,ai=this,this.B=!1,this.bG=E().P(P().s(new(fs.r()).C([]))),this.aq=E().P(P().s(new(Zr.r()).C([])))}S=ri.prototype=new C,S.constructor=ri;function ii(){}ii.prototype=S,new T().i(ri,`com.raquo.airstream.core.Transaction$onStart$`,{bo:1});var ai;function oi(){return ai||=new ri,ai}function si(e,t){return e.ar.get(t)}function ci(e,t){e.bH.unshift(t)}function li(e){return e.bH.shift()}function ui(e,t,n){var r=si(e,t),i=r===void 0,a=r===void 0?E().P(P().s(new(Zr.r()).C([]))):r;a.push(n),i&&e.ar.set(t,a)}function di(e,t){var n=si(e,t),r=n===void 0||(n.length|0)>0?n:void 0;if(r!==void 0){var i=r.shift();return r.length|0||e.ar.delete(t),i}}function fi(){this.bH=null,this.ar=null,mi=this,this.bH=E().P(P().s(new(Zr.r()).C([]))),this.ar=new Map}S=fi.prototype=new C,S.constructor=fi;function pi(){}pi.prototype=S,S.d6=(function(e){var t=this.bD();t===void 0?(ci(this,e),ti().fd(e),this.gA(e)):ui(this,t,e)}),S.gA=(function(e){for(var t=e;;){var n=this.bD(),r=t;if(!(n!==void 0&&N().A(r,n)))throw V(new H,`Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.`);this.hz(t),t.cg=ti().dr;var i=this.bD();if(N().A(i,void 0))if((this.ar.size|0)>0){var a=new yl(0);throw this.ar.forEach((e=>((t,n)=>{e.be=e.be+(t.length|0)|0}))(a)),V(new H,`Transaction queue error: Stack cleared, but a total of `+a.be+` children for `+(this.ar.size|0)+` transactions remain. This is a bug in Airstream.`)}else return;else ti().fd(i),t=i}}),S.hz=(function(e){for(var t=e;;){var n=di(this,t);if(N().A(n,void 0)){li(this);var r=this.bD();if(!N().A(r,void 0))t=r;else return}else{ci(this,n);return}}}),S.bD=(function(){return this.bH[0]}),new T().i(fi,`com.raquo.airstream.core.Transaction$pendingTransactions$`,{bp:1});var mi;function hi(){return mi||=new fi,mi}function gi(e,t){var n=e.a9.indexOf(t)|0;if(n!==-1)e.a9.splice(n,1),e.H.f()||t.fz();else throw V(new H,`Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?`)}function _i(e){for(;(e.bI.length|0)>0;)gi(e,e.bI.shift())}function vi(e){this.ds=null,this.a9=null,this.aI=!1,this.bI=null,this.H=null,this.aJ=0,this.ds=e,this.a9=E().P(P().s(new(Si.r()).C([]))),this.aI=!0,this.bI=E().P(P().s(new(Si.r()).C([]))),this.H=Y(),this.aJ=0}S=vi.prototype=new C,S.constructor=vi;function yi(){}yi.prototype=S,S.eV=(function(){if(this.H.f()){var e=oi(),t=(()=>{var e=new Qs(this.ds);this.H=new X(e),this.aI=!1,this.aJ=0;for(var t=0,n=this.a9.length|0;t<n;){var r=t+this.aJ|0;this.a9[r].fy(e),t=1+t|0}_i(this),this.aI=!0,this.aJ=0});if(oi(),e.B)t();else{e.B=!0;try{t()}finally{e.B=!1,ni(e)}}}else throw V(new H,`Can not activate `+this+`: it is already active`)}),S.gs=(function(){if(this.H.f())throw V(new H,`Can not deactivate DynamicOwner: it is not active`);this.aI=!1;for(var e=this.a9,t=0,n=e.length|0;t<n;)e[t].fz(),t=1+t|0;_i(this);var r=this.H;r.f()||r.u().h6(),_i(this),this.aI=!0,this.H=Y()}),S.g7=(function(e,t){t?(this.aJ=1+this.aJ|0,this.a9.unshift(e)):this.a9.push(e);var n=this.H;if(!n.f()){var r=n.u();e.fy(r)}}),S.hJ=(function(e){this.aI?gi(this,e):this.bI.push(e)}),new T().i(vi,`com.raquo.airstream.ownership.DynamicOwner`,{bs:1});function bi(e,t,n){this.bJ=null,this.dt=null,this.bK=null,this.bJ=e,this.dt=t,this.bK=Y(),e.g7(this,n)}S=bi.prototype=new C,S.constructor=bi;function xi(){}xi.prototype=S,S.c8=(function(){this.bJ.hJ(this)}),S.fy=(function(e){var t=oi(),n=(()=>{this.bK=this.dt.h(e)});if(oi(),t.B)n();else{t.B=!0;try{n()}finally{t.B=!1,ni(t)}}}),S.fz=(function(){var e=this.bK;e.f()||(e.u().c8(),this.bK=Y())});var Si=new T().i(bi,`com.raquo.airstream.ownership.DynamicSubscription`,{bt:1});function Ci(){}S=Ci.prototype=new C,S.constructor=Ci;function wi(){}wi.prototype=S,S.cc=(function(e,t,n){return new bi(e,new q((e=>new X(t.h(e)))),n)}),S.fH=(function(e,t,n){return new bi(e,new q((e=>(t.h(e),Y()))),n)}),new T().i(Ci,`com.raquo.airstream.ownership.DynamicSubscription$`,{bu:1});var Ti;function Ei(){return Ti||=new Ci,Ti}function Di(e){e.aK=E().P(P().s(new(Pi.r()).C([])))}function Oi(e){for(var t=e.aK,n=0,r=t.length|0;n<r;)ji(t[n]),n=1+n|0;e.aK.length=0}function ki(e,t){var n=e.aK.indexOf(t)|0;if(n!==-1)e.aK.splice(n,1);else throw V(new H,`Can not remove Subscription from Owner: subscription not found.`)}function Ai(e,t){e.aK.push(t)}function ji(e){if(!e.cj)e.dv.a6(),e.cj=!0;else throw V(new H,`Can not kill Subscription: it was already killed.`)}function Mi(e,t){this.dw=null,this.dv=null,this.cj=!1,this.dw=e,this.dv=t,this.cj=!1,e.hv(this)}S=Mi.prototype=new C,S.constructor=Mi;function Ni(){}Ni.prototype=S,S.c8=(function(){ji(this),ki(this.dw,this)});var Pi=new T().i(Mi,`com.raquo.airstream.ownership.Subscription`,{bx:1});function Fi(e,t){this.dx=null,this.dy=null,this.aa=null,this.as=!1,this.dx=e,this.dy=t,this.aa=Y(),this.as=!1}S=Fi.prototype=new C,S.constructor=Fi;function Ii(){}Ii.prototype=S,S.h2=(function(){var e=this.aa;return!e.f()&&!e.u().bJ.H.f()}),S.hT=(function(e){if(this.as)throw V(new H,`Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var t=this.aa;if(t.f())var n=!1;else var n=e===t.u().bJ;if(!n){this.h2()&&!e.H.f()&&(this.as=!0);var r=this.aa;r.f()||(r.u().c8(),this.aa=Y()),this.aa=new X(Ei().cc(e,new q((e=>(this.as||this.dx.a6(),new Mi(e,new K((()=>{this.as||this.dy.a6()})))))),!1)),this.as=!1}}),S.gl=(function(){if(this.as)throw V(new H,`Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var e=this.aa;e.f()||e.u().c8(),this.aa=Y()}),new T().i(Fi,`com.raquo.airstream.ownership.TransferableSubscription`,{by:1});function Li(){}S=Li.prototype=new C,S.constructor=Li;function Ri(){}Ri.prototype=S,S.gd=(function(e){return new Jf(new Hf(e))}),new T().i(Li,`com.raquo.airstream.state.Var$`,{bC:1});var zi;function Bi(){return zi||=new Li,zi}function Vi(){}S=Vi.prototype=new C,S.constructor=Vi;function Hi(){}Hi.prototype=S,S.P=(function(e){return[...Vs().i4(e)]}),new T().i(Vi,`com.raquo.ew.JsArray$`,{bF:1});var Ui;function E(){return Ui||=new Vi,Ui}function Wi(){this.dF=null,Ki=this,document.createElement(`template`),this.gq(G().b2.hY().hZ()),this.dF=RegExp(` `,`g`)}S=Wi.prototype=new C,S.constructor=Wi;function Gi(){}Gi.prototype=S,S.ga=(function(e,t){try{return e.appendChild(t),!0}catch(e){var n=e instanceof R?e:new Z(e);if(n instanceof Z&&n.z instanceof DOMException)return!1;throw n instanceof Z?n.z:n}}),S.hE=(function(e,t){try{return e.removeChild(t),!0}catch(e){var n=e instanceof R?e:new Z(e);if(n instanceof Z&&n.z instanceof DOMException)return!1;throw n instanceof Z?n.z:n}}),S.hM=(function(e,t,n){try{return e.replaceChild(t,n),!0}catch(e){var r=e instanceof R?e:new Z(e);if(r instanceof Z&&r.z instanceof DOMException)return!1;throw r instanceof Z?r.z:r}}),S.h4=(function(e,t){for(var n=e;;){if(n.parentNode!==null)var r=n.parentNode;else var i=n.host,r=i===void 0?null:i;if(r===null)return!1;if(N().A(t,r))return!0;n=r}}),S.g5=(function(e,t){e.addEventListener(t.aL.bP.bQ,t.cy,t.cz)}),S.hF=(function(e,t){e.removeEventListener(t.aL.bP.bQ,t.cy,t.cz)}),S.gp=(function(e){return document.createElement(e.de())}),S.gS=(function(e,t){var n=this.gT(e,t);return n===void 0?void 0:t.cu.c2(n)}),S.gT=(function(e,t){var n=e.Z.getAttributeNS(null,t.b3);return n===null?void 0:n}),S.fG=(function(e,t,n){this.hS(e,t,t.cu.c6(n))}),S.hS=(function(e,t,n){n===null?this.hG(e,t):e.Z.setAttribute(t.b3,n)}),S.hG=(function(e,t){e.Z.removeAttribute(t.b3)}),S.gq=(function(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e.e9)}),S.gW=(function(e,t){var n=this.gX(e,t);return n===void 0?void 0:t.cv.c2(n)}),S.gX=(function(e,t){var n=e.dg(),r=t.bS,i=n.getAttributeNS(r.f()?null:r.u(),t.cw);return i===null?void 0:i}),S.hU=(function(e,t,n){this.hV(e,t,t.cv.c6(n))}),S.hV=(function(e,t,n){if(n===null)this.hK(e,t);else{var r=t.bS;if(r.f())e.dg().setAttribute(t.bR,n);else{var i=r.u();e.dg().setAttributeNS(i,t.bR,n)}}}),S.hK=(function(e,t){var n=e.dg(),r=t.bS;n.removeAttributeNS(r.f()?null:r.u(),t.cw)}),S.go=(function(e){return document.createComment(e)}),S.gr=(function(e){return document.createTextNode(e)}),S.gu=(function(e,t){for(var n=t,r=e;;){if(r===null)return n;var i=r.parentNode,a=new Ih(this.gt(r),n);r=i,n=a}}),S.gt=(function(e){if(e instanceof HTMLElement){var t=e.id;if(t!==``)var n=`#`+t;else var r=e.className,n=r===``?``:`.`+r.replace(this.dF,`.`);return e.tagName.toLowerCase()+n}else return e.nodeName}),new T().i(Wi,`com.raquo.laminar.DomApi$`,{bG:1});var Ki;function D(){return Ki||=new Wi,Ki}function qi(e){Br(),B(),e.dI=Bi()}function Ji(e){e.fK=Ma()}function Yi(e){Xi(e,new q((e=>{e.dX.Z.focus()})))}function Xi(e,t){return new hc(new q((e=>{var n=new _l(!e.Y.H.f()),r=new q((e=>{n.c0?n.c0=!1:t.h(e)}));Ei().fH(e.Y,new q((e=>(t=>{r.h(new Ea(e,t))}))(e)),!1)})),Ma())}function Zi(){this.a4=null,this.dP=null,this.dQ=!1,this.cn=null,$i=this,this.a4=new nc(O()),new nc(O()),new nc(O()),this.cn=new ec}S=Zi.prototype=new C,S.constructor=Zi;function Qi(){}Qi.prototype=S,S.eU=(function(){return this.dQ||=(this.dP=new ic(this),!0),this.dP}),new T().i(Zi,`com.raquo.laminar.codecs.package$`,{bO:1});var $i;function O(){return $i||=new Zi,$i}function ea(e){e.fL=ta(e,`class`,` `)}function ta(e,t,n){var r=new I(t,O().a4);return new oc(r.b3,new q((e=>{var t=D().gS(e,r);return t===void 0?``:t})),new pd(((e,t)=>{D().fG(e,r,t)})),n)}function na(e){e.fJ=ra(e,`class`,` `)}function ra(e,t,n){var r=new dc(t,O().a4,Y());return new oc(r.bR,new q((e=>{var t=D().gW(e,r);return t===void 0?``:t})),new pd(((e,t)=>{D().hU(e,r,t)})),n)}function ia(){}S=ia.prototype=new C,S.constructor=ia;function aa(){}aa.prototype=S,S.gb=(function(e,t){return new Ru(Y(),!1,new hd(((n,r,i)=>jl(e,new q(((e,n)=>(r=>{var i=n.c1;if(i===void 0){var a=new Hu(t.fa(r));this.i0(a,e);var o=a;n.c1=o,o=null}else i.bT.textContent=t.fa(r)}))(n,new xl(void 0))),r))),void 0)}),S.i0=(function(e,t){Ba().hL(t.cr,t.cs,e,void 0),t.cs=e,t.ct&&(t.ct=!1,t.hI(e),t.cq.clear(),t.cp=0)}),new T().i(ia,`com.raquo.laminar.inserters.ChildTextInserter$`,{c1:1});var oa;function sa(){return oa||=new ia,oa}function ca(e,t,n,r,i){this.cr=null,this.cs=null,this.ct=!1,this.cp=0,this.cq=null,this.cr=e,this.cs=t,this.ct=n,this.cp=r,this.cq=i}S=ca.prototype=new C,S.constructor=ca;function la(){}la.prototype=S,S.hI=(function(e){var t=this.cp,n=0;for(n=t;n>0;){var r=e.F().nextSibling;if(r===null)n=0;else{var i=this.cq.get(r);i===void 0?n=0:i!==void 0&&(Ba().hD(this.cr,i),n=-1+n|0)}}}),new T().i(ca,`com.raquo.laminar.inserters.InsertContext`,{c4:1});function ua(){}S=ua.prototype=new C,S.constructor=ua;function da(){}da.prototype=S,S.hO=(function(e,t,n){var r=new Bu(``);return Ba().bj(e,r,n),this.i7(e,r,t)}),S.i7=(function(e,t,n){return new ca(e,t,n,0,n?new Map:null)}),new T().i(ua,`com.raquo.laminar.inserters.InsertContext$`,{c5:1});var fa;function pa(){return fa||=new ua,fa}function ma(e,t,n,r){this.bP=null,this.dW=!1,this.dV=!1,this.dU=null,this.bP=e,this.dW=t,this.dV=n,this.dU=r}S=ma.prototype=new C,S.constructor=ma;function ha(){}ha.prototype=S,new T().i(ma,`com.raquo.laminar.keys.EventProcessor`,{c8:1});function ga(){}S=ga.prototype=new C,S.constructor=ga;function _a(){}_a.prototype=S,S.gC=(function(e,t,n){return new ma(e,t,n,new q((e=>new X(e))))}),new T().i(ga,`com.raquo.laminar.keys.EventProcessor$`,{c9:1});var va;function ya(){return va||=new ga,va}function ba(){}S=ba.prototype=new C,S.constructor=ba;function xa(){}xa.prototype=S;function Sa(){this.fN=null,this.fO=null,this.fP=null,this.fQ=null,this.fN=`http://www.w3.org/2000/svg`,this.fO=`http://www.w3.org/1999/xlink`,this.fP=`http://www.w3.org/XML/1998/namespace`,this.fQ=`http://www.w3.org/2000/xmlns/`}S=Sa.prototype=new C,S.constructor=Sa;function Ca(){}Ca.prototype=S,S.hd=(function(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`xlink`:return`http://www.w3.org/1999/xlink`;case`xml`:return`http://www.w3.org/XML/1998/namespace`;case`xmlns`:return`http://www.w3.org/2000/xmlns/`;default:throw new rf(e)}}),new T().i(Sa,`com.raquo.laminar.keys.SvgAttr$`,{cd:1});var wa;function Ta(){return wa||=new Sa,wa}function Ea(e,t){this.dX=null,this.cx=null,this.dX=e,this.cx=t}S=Ea.prototype=new C,S.constructor=Ea;function Da(){}Da.prototype=S,new T().i(Ea,`com.raquo.laminar.lifecycle.MountContext`,{ce:1});var Oa=new T().i(1,`com.raquo.laminar.modifiers.Modifier`,{R:1});function ka(){this.fR=null,ja=this,this.fR=new pc}S=ka.prototype=new C,S.constructor=ka;function Aa(){}Aa.prototype=S,new T().i(ka,`com.raquo.laminar.modifiers.Modifier$`,{ci:1});var ja;function Ma(){return ja||=new ka,ja}function Na(){this.e2=null,Fa=this,this.e2=new _c(new q((e=>e)),Ia()),new _c(new q((e=>``+(e|0))),Ia()),new _c(new q((e=>``+ +e)),Ia()),new _c(new q((e=>``+!!e)),Ia()),new _c(new q((e=>e.i3())),Ia())}S=Na.prototype=new C,S.constructor=Na;function Pa(){}Pa.prototype=S,new T().i(Na,`com.raquo.laminar.modifiers.RenderableText$`,{cm:1});var Fa;function Ia(){return Fa||=new Na,Fa}function La(){}S=La.prototype=new C,S.constructor=La;function Ra(){}Ra.prototype=S,S.bj=(function(e,t,n){var r=new X(e);t.aX(r),n!==void 0&&n.hs(e,t);var i=D().ga(e.F(),t.F());return i&&t.aV(r),i}),S.hD=(function(e,t){var n=!1;return N().A(t.F().parentNode,e.F())&&(t.aX(Y()),n=D().hE(e.F(),t.F()),t.aV(Y())),n}),S.hL=(function(e,t,n,r){var i=!1;if(t!==n&&t.da().gn(e)){var a=new X(e);t.aX(Y()),n.aX(a),r!==void 0&&r.hs(e,n),i=D().hM(e.F(),n.F(),t.F()),i&&(t.aV(Y()),n.aV(a))}return i}),new T().i(La,`com.raquo.laminar.nodes.ParentNode$`,{cq:1});var za;function Ba(){return za||=new La,za}function Va(){}S=Va.prototype=new C,S.constructor=Va;function Ha(){}Ha.prototype=S,S.i6=(function(e,t){return Ei().cc(e.Y,new q((n=>t.h(new Ea(e,n)))),!0)}),new T().i(Va,`com.raquo.laminar.nodes.ReactiveElement$`,{cs:1});var Ua;function Wa(){return Ua||=new Va,Ua}function Ga(){}S=Ga.prototype=new C,S.constructor=Ga;function Ka(){}Ka.prototype=S,new T().i(Ga,`com.raquo.laminar.receivers.ChildTextReceiver$`,{cw:1});var qa;function Ja(){return qa||=new Ga,qa}function Ya(){Za=this,E().P(P().ia(new Er(new Int32Array([0]))))}S=Ya.prototype=new C,S.constructor=Ya;function Xa(){}Xa.prototype=S,S.g3=(function(){return new q((e=>void 0))}),new T().i(Ya,`com.raquo.laminar.tags.CustomHtmlTag$`,{cy:1});var Za;function Qa(){return Za||=new Ya,Za}function $a(){}S=$a.prototype=new C,S.constructor=$a;function eo(){}eo.prototype=S,S.g8=(function(){no().gH(),no().gI(),no().gJ(),no().gK(),no().gL()}),S.gH=(function(){var e=document.querySelector(`#example1`);sl().bn(e).f()||(G(),new Vl(e,Jl().bo(P().s(new(fs.r()).C([new W((e=>e.bA().x(`Topics`))),new W((e=>e.fs().x(`Press Enter or type a comma after each topic.`))),new W((e=>e.fE().x(`Add a topic`))),new W((e=>e.hc().x(`topics`)))])),P().s(new(Oa.r()).C([])))))}),S.gI=(function(){var e=document.querySelector(`#example2`);sl().bn(e).f()||(G(),new Vl(e,Jl().bo(P().s(new(fs.r()).C([new W((e=>e.bA().x(`Skills`))),new W((e=>e.ff().x(`Scala, TypeScript, CSS`))),new W((e=>e.i9().x(!0)))])),P().s(new(Oa.r()).C([])))))}),S.gJ=(function(){var e=document.querySelector(`#example3`);sl().bn(e).f()||(G(),new Vl(e,Jl().bo(P().s(new(fs.r()).C([new W((e=>e.bA().x(`Recipients`))),new W((e=>e.gx().x(`,;`))),new W((e=>e.fE().x(`Enter a name`)))])),P().s(new(Oa.r()).C([])))))}),S.gK=(function(){var e=document.querySelector(`#example4`);sl().bn(e).f()||(G(),new Vl(e,Jl().bo(P().s(new(fs.r()).C([new W((e=>e.bA().x(`Favorite colors`))),new W((e=>e.fs().x(`Choose one to three colors.`))),new W((e=>e.ff().x(`Blue, Green`))),new W((e=>e.ha().x(1))),new W((e=>e.h9().x(3))),new W((e=>e.hN().x(!0)))])),P().s(new(Oa.r()).C([])))))}),S.gL=(function(){var e=document.querySelector(`#example5`);if(!sl().bn(e).f()){G();var t=G().b2.dI.gd(`Try adding a tag longer than 12 characters.`);new Vl(e,G().b2.gy().d8(P().s(new(Oa.r()).C([Jl().bo(P().s(new(fs.r()).C([new W((e=>e.bA().x(`Short tags`))),new W((e=>new Il((G(),ya().gC(e.hq(),!1,!1)),new W((e=>{e.detail.inputValue.length>12?(e.preventDefault(),Od(t,`Keep each tag to 12 characters or fewer.`)):Od(t,`Tag accepted.`)})))))])),P().s(new(Oa.r()).C([]))),G().b2.hw().d8(P().s(new(Oa.r()).C([(G(),sa().gb(t.dA,Ia().e2))])))]))))}}),new T().i($a,`examples.tagInput.Main$package$`,{cA:1});var to;function no(){return to||=new $a,to}function ro(e){try{no().g8()}catch(e){throw e}}function io(){this.fT=!1,this.b5=null,this.bU=null,this.ew=null,this.cL=!1,this.fS=0,this.fV=0,this.fU=null,oo=this,this.fT=!0,this.b5=new ArrayBuffer(8),this.bU=new Int32Array(this.b5,0,2),new Float32Array(this.b5,0,2),this.ew=new Float64Array(this.b5,0,1),this.bU[0]=16909060,this.cL=(new Int8Array(this.b5,0,8)[0]|0)==1,this.fS=this.cL?0:1,this.fV=this.cL?1:0,this.fU=null}S=io.prototype=new C,S.constructor=io;function ao(){}ao.prototype=S,S.df=(function(e){var t=e|0;return t===e&&1/e!=-1/0?t:(this.ew[0]=e,(this.bU[0]|0)^(this.bU[1]|0))}),new T().i(io,`java.lang.FloatingPointBits$`,{cM:1});var oo;function so(){return oo||=new io,oo}function co(e,t){for(var n=k().W(`^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$`),r=[],i=0;i<(t.length|0);){var a=t[i];if(a!==``){var o=n.exec(a);if(o!==null){var s=lo(e,o[1]),c=s[0],l=s[1],u=o[2],d=o[3],f=parseInt(d),p=o[4];r.push(new Vc(c,l,u,f|0,p===void 0?-1:parseInt(p)|0))}else r.push(new Vc(`<jscode>`,a,null,-1,-1))|0}i=1+i|0}var m=r.length|0,ee=new(Uc.r()).C(m);for(i=0;i<m;)ee.a[i]=r[i],i=1+i|0;return ee}function lo(e,t){var n=k().W(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$`),r=k().W(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$`),i=k().W(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$`),a=k().W(`^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$`),o=k().W(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$`),s=n.exec(t),c=s===null?r.exec(t):s;if(c!==null)return[uo(e,c[1]),vo(e,c[2])];var l=i.exec(t),u=l===null?a.exec(t):l;if(u!==null)return[uo(e,u[1]),`<init>`];var d=o.exec(t);return d===null?[`<jscode>`,t]:[uo(e,d[1]),`<clinit>`]}function uo(e,t){var n=po(e);if(Wo().eC.call(n,t))var r=po(e)[t];else var r=ko(e,0,t);return r.split(`_`).join(`.`).split(`＿`).join(`_`)}function fo(e){if(!((1&e.L)<<24>>24)){var t={};t.O=`java_lang_Object`,t.T=`java_lang_String`;for(var n=0;n<=22;){if(n>=2){var r=`T`+n;t[r]=`scala_Tuple`+n}var i=`F`+n;t[i]=`scala_Function`+n,n=1+n|0}e.cN=t,e.L=(1|e.L)<<24>>24}return e.cN}function po(e){return(1&e.L)<<24>>24?e.cN:fo(e)}function mo(e){if(!((2&e.L)<<24>>24)){var t={};t.sjsr_=`scala_scalajs_runtime_`,t.sjs_=`scala_scalajs_`,t.sci_=`scala_collection_immutable_`,t.scm_=`scala_collection_mutable_`,t.scg_=`scala_collection_generic_`,t.sc_=`scala_collection_`,t.sr_=`scala_runtime_`,t.s_=`scala_`,t.jl_=`java_lang_`,t.ju_=`java_util_`,e.cO=t,e.L=(2|e.L)<<24>>24}return e.cO}function ho(e){return(2&e.L)<<24>>24?e.cO:mo(e)}function go(e){return(4&e.L)<<24>>24||(e.cM=Object.keys(ho(e)),e.L=(4|e.L)<<24>>24),e.cM}function _o(e){return(4&e.L)<<24>>24?e.cM:go(e)}function vo(e,t){if(t.startsWith(`init___`))return`<init>`;var n=t.indexOf(`__`)|0;return n<0?t:t.substring(0,n)}function yo(e,t){return t?t.arguments&&t.stack?bo(e,t):t.stack&&t.sourceURL?Co(e,t):t.stack&&t.number?So(e,t):t.stack&&t.fileName?xo(e,t):t.message&&t[`opera#sourceloc`]?t.stacktrace?t.message.indexOf(`
`)>-1&&t.message.split(`
`).length>t.stacktrace.split(`
`).length?wo(e,t):To(e,t):wo(e,t):t.message&&t.stack&&t.stacktrace?t.stacktrace.indexOf(`called from line`)<0?Eo(e,t):Do(e,t):t.stack&&!t.fileName?bo(e,t):Oo(e,t):[]}function bo(e,t){return(t.stack+`
`).replace(k().W(`^[\\s\\S]+?\\s+at\\s+`),` at `).replace(k().E(`^\\s+(at eval )?at\\s+`,`gm`),``).replace(k().E(`^([^\\(]+?)([\\n])`,`gm`),`{anonymous}() ($1)$2`).replace(k().E(`^Object.<anonymous>\\s*\\(([^\\)]+)\\)`,`gm`),`{anonymous}() ($1)`).replace(k().E(`^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(0,-1)}function xo(e,t){return t.stack.replace(k().E(`(?:\\n@:0)?\\s+$`,`m`),``).replace(k().E(`^(?:\\((\\S*)\\))?@`,`gm`),`{anonymous}($1)@`).split(`
`)}function So(e,t){return t.stack.replace(k().E(`^\\s*at\\s+(.*)$`,`gm`),`$1`).replace(k().E(`^Anonymous function\\s+`,`gm`),`{anonymous}() `).replace(k().E(`^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(1)}function Co(e,t){return t.stack.replace(k().E(`\\[native code\\]\\n`,`m`),``).replace(k().E(`^(?=\\w+Error\\:).*$\\n`,`m`),``).replace(k().E(`^@`,`gm`),`{anonymous}()@`).split(`
`)}function wo(e,t){for(var n=k().E(`Line (\\d+).*script (?:in )?(\\S+)`,`i`),r=t.message.split(`
`),i=[],a=2,o=r.length|0;a<o;){var s=n.exec(r[a]);s!==null&&i.push(`{anonymous}()@`+s[2]+`:`+s[1])|0,a=2+a|0}return i}function To(e,t){for(var n=k().E(`Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$`,`i`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[3],l=c===void 0?`{anonymous}`:c;i.push(l+`()@`+s[2]+`:`+s[1])|0}a=2+a|0}return i}function Eo(e,t){for(var n=k().W(`^(.*)@(.+):(\\d+)$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[1],l=c===void 0?`global code`:c+`()`;i.push(l+`@`+s[2]+`:`+s[3])|0}a=1+a|0}return i}function Do(e,t){for(var n=k().W(`^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[4]+`:`+s[1]+`:`+s[2],l=s[2],u=(l===void 0?`global code`:l).replace(k().W(`<anonymous function: (\\S+)>`),`$1`).replace(k().W(`<anonymous function>`),`{anonymous}`);i.push(u+`@`+c)|0}a=2+a|0}return i}function Oo(e,t){return[]}function ko(e,t,n){for(;;)if(t<(_o(e).length|0)){var r=_o(e)[t];if(n.startsWith(r))return``+ho(e)[r]+n.substring(r.length);t=1+t|0}else return n.startsWith(`L`)?n.substring(1):n}function Ao(){this.cN=null,this.cO=null,this.cM=null,this.L=0}S=Ao.prototype=new C,S.constructor=Ao;function jo(){}jo.prototype=S,S.gM=(function(e){return co(this,yo(this,e))}),new T().i(Ao,`java.lang.StackTrace$`,{cV:1});var Mo;function No(){return Mo||=new Ao,Mo}function Po(){}S=Po.prototype=new C,S.constructor=Po;function Fo(){}Fo.prototype=S,S.W=(function(e){return new RegExp(e)}),S.E=(function(e,t){return new RegExp(e,t)}),new T().i(Po,`java.lang.StackTrace$StringRE$`,{cW:1});var Io;function k(){return Io||=new Po,Io}function Lo(){this.ey=null,this.fW=null,zo=this,this.ey=new om(!1),this.fW=new om(!0)}S=Lo.prototype=new C,S.constructor=Lo;function Ro(){}Ro.prototype=S,new T().i(Lo,`java.lang.System$Streams$`,{d1:1});var zo;function Bo(){return zo||=new Lo,zo}function Vo(){this.eC=null,Uo=this,this.eC=Object.prototype.hasOwnProperty}S=Vo.prototype=new C,S.constructor=Vo;function Ho(){}Ho.prototype=S,new T().i(Vo,`java.lang.Utils$Cache$`,{d4:1});var Uo;function Wo(){return Uo||=new Vo,Uo}function Go(e,t){return e===t}function Ko(e){return 0}function qo(e,t){return!!(e&&e.$classData&&e.$classData.D===t&&e.$classData.B.n.av)}var Jo=new T().i(0,`java.lang.Void`,{av:1},(e=>e===void 0));function Yo(e,t){throw Wd(new Gd,`argument type mismatch`)}function Xo(){}S=Xo.prototype=new C,S.constructor=Xo;function Zo(){}Zo.prototype=S,S.bx=(function(e){return e instanceof w||e instanceof Sr||e instanceof Cr||e instanceof wr||e instanceof Tr||e instanceof Er||e instanceof Dr||e instanceof Or||e instanceof kr?e.a.length:Yo(this,e)}),new T().i(Xo,`java.lang.reflect.Array$`,{d6:1});var Qo;function $o(){return Qo||=new Xo,Qo}function es(){}S=es.prototype=new C,S.constructor=es;function ts(){}ts.prototype=S,S.fl=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=a.c,s=a.d,c=r,l=t.a[c],u=l.c,d=l.d;if(!(o===u&&s===d))return!1;r=1+r|0}return!0}),S.fk=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),S.fm=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),S.fh=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),S.fg=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),S.fn=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),S.fi=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),S.fj=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),new T().i(es,`java.util.Arrays$`,{d7:1});var ns;function A(){return ns||=new es,ns}function j(e,t){this.c=0,this.d=0,this.c=e,this.d=t}S=j.prototype=new C,S.constructor=j;function rs(){}rs.prototype=S,S.e=(function(e){return e instanceof j&&this.c===e.c&&this.d===e.d}),S.l=(function(){return this.c^this.d}),S.n=(function(){return M().fD(this.c,this.d)}),S.iN=(function(){return this.c}),S.iM=(function(){return M().fC(this.c,this.d)}),S.iL=(function(){return M().bC(this.c,this.d)}),S.iu=(function(){return this.c<<24>>24}),S.iJ=(function(){return this.c<<16>>16}),S.iE=(function(){return this.c}),S.iF=(function(){return this}),S.iA=(function(){return M().fC(this.c,this.d)}),S.iy=(function(){return M().bC(this.c,this.d)}),S.iw=(function(e){return M().fA(this.c,this.d,e.c,e.d)}),S.iv=(function(e){return M().fA(this.c,this.d,e.c,e.d)}),S.iz=(function(e){return this.c===e.c&&this.d===e.d}),S.iI=(function(e){return!(this.c===e.c&&this.d===e.d)}),S.il=(function(e){var t=this.d,n=e.d;return t===n?(-2147483648^this.c)<(-2147483648^e.c):t<n}),S.im=(function(e){var t=this.d,n=e.d;return t===n?(-2147483648^this.c)<=(-2147483648^e.c):t<n}),S.ih=(function(e){var t=this.d,n=e.d;return t===n?(-2147483648^this.c)>(-2147483648^e.c):t>n}),S.ii=(function(e){var t=this.d,n=e.d;return t===n?(-2147483648^this.c)>=(-2147483648^e.c):t>n}),S.iP=(function(){return new j(~this.c,~this.d)}),S.ie=(function(e){return new j(this.c|e.c,this.d|e.d)}),S.id=(function(e){return new j(this.c&e.c,this.d&e.d)}),S.it=(function(e){return new j(this.c^e.c,this.d^e.d)}),S.io=(function(e){var t=this.c;return new j(32&e?0:t<<e,32&e?t<<e:(t>>>1|0)>>>(31-e|0)|0|this.d<<e)}),S.ik=(function(e){var t=this.d;return new j(32&e?t>>>e|0:this.c>>>e|0|t<<1<<(31-e|0),32&e?0:t>>>e|0)}),S.ij=(function(e){var t=this.d;return new j(32&e?t>>e:this.c>>>e|0|t<<1<<(31-e|0),32&e?t>>31:t>>e)}),S.iO=(function(){var e=this.c,t=this.d;return new j(-e|0,e===0?-t|0:~t)}),S.ir=(function(e){var t=this.c,n=this.d,r=e.d,i=t+e.c|0;return new j(i,(-2147483648^i)<(-2147483648^t)?1+(n+r|0)|0:n+r|0)}),S.ip=(function(e){var t=this.c,n=this.d,r=e.d,i=t-e.c|0;return new j(i,(-2147483648^i)>(-2147483648^t)?-1+(n-r|0)|0:n-r|0)}),S.is=(function(e){var t=this.c,n=e.c,r=65535&t,i=t>>>16|0,a=65535&n,o=n>>>16|0,s=Math.imul(r,a),c=Math.imul(i,a),l=Math.imul(r,o),u=s+((c+l|0)<<16)|0,d=(s>>>16|0)+l|0;return new j(u,(((Math.imul(t,e.d)+Math.imul(this.d,n)|0)+Math.imul(i,o)|0)+(d>>>16|0)|0)+(((65535&d)+c|0)>>>16|0)|0)}),S.ig=(function(e){var t=M();return new j(t.gz(this.c,this.d,e.c,e.d),t.q)}),S.iq=(function(e){var t=M();return new j(t.hC(this.c,this.d,e.c,e.d),t.q)}),new T().i(j,`org.scalajs.linker.runtime.RuntimeLong`,{aw:1});function is(e,t,n){return-2097152&n?ss(e,t,n,1e9,0,2):``+(4294967296*n+ +(t>>>0))}function as(e,t,n,r,i){if(-2097152&n)if(i===0&&!(r&(-1+r|0))){var a=31-(Math.clz32(r)|0)|0;return e.q=n>>>a|0,t>>>a|0|n<<1<<(31-a|0)}else if(r===0&&!(i&(-1+i|0))){var o=31-(Math.clz32(i)|0)|0;return e.q=0,n>>>o|0}else return ss(e,t,n,r,i,0)|0;else{if(-2097152&i)return e.q=0,0;var s=(4294967296*n+ +(t>>>0))/(4294967296*i+ +(r>>>0));return e.q=s/4294967296|0,s|0}}function os(e,t,n,r,i){if(-2097152&n)return i===0&&!(r&(-1+r|0))?(e.q=0,t&(-1+r|0)):r===0&&!(i&(-1+i|0))?(e.q=n&(-1+i|0),t):ss(e,t,n,r,i,1)|0;if(-2097152&i)return e.q=n,t;var a=(4294967296*n+ +(t>>>0))%(4294967296*i+ +(r>>>0));return e.q=a/4294967296|0,a|0}function ss(e,t,n,r,i,a){for(var o=(i===0?32+(Math.clz32(r)|0)|0:Math.clz32(i)|0)-(n===0?32+(Math.clz32(t)|0)|0:Math.clz32(n)|0)|0,s=o,c=32&s?0:r<<s,l=32&s?r<<s:(r>>>1|0)>>>(31-s|0)|0|i<<s,u=c,d=l,f=t,p=n,m=0,ee=0;o>=0&&-2097152&p;){var te=f,ne=p,re=u,ie=d;if(ne===ie?(-2147483648^te)>=(-2147483648^re):(-2147483648^ne)>=(-2147483648^ie)){var ae=f,oe=p,se=u,ce=d,le=ae-se|0,ue=(-2147483648^le)>(-2147483648^ae)?-1+(oe-ce|0)|0:oe-ce|0;f=le,p=ue,o<32?m|=1<<o:ee|=1<<o}o=-1+o|0;var de=u,fe=d,pe=de>>>1|0|fe<<31,me=fe>>>1|0;u=pe,d=me}var he=f,ge=p;if(ge===i?(-2147483648^he)>=(-2147483648^r):(-2147483648^ge)>=(-2147483648^i)){var _e=f,ve=4294967296*p+ +(_e>>>0),ye=4294967296*i+ +(r>>>0);if(a!==1){var be=ve/ye,xe=be|0,Se=be/4294967296|0,Ce=m,we=ee,Te=Ce+xe|0,Ee=(-2147483648^Te)<(-2147483648^Ce)?1+(we+Se|0)|0:we+Se|0;m=Te,ee=Ee}if(a!==0){var De=ve%ye;f=De|0,p=De/4294967296|0}}if(a===0)return e.q=ee,m;if(a===1)return e.q=p,f;var Oe=m,ke=4294967296*ee+ +(Oe>>>0),Ae=``+f,je=Ae.length;return``+ke+`000000000`.substring(je)+Ae}function cs(){this.q=0}S=cs.prototype=new C,S.constructor=cs;function ls(){}ls.prototype=S,S.fD=(function(e,t){return t===e>>31?``+e:t<0?`-`+is(this,-e|0,e===0?-t|0:~t):is(this,e,t)}),S.bC=(function(e,t){return t<0?-(4294967296*((e===0?-t|0:~t)>>>0)+ +((-e|0)>>>0)):4294967296*t+ +(e>>>0)}),S.fC=(function(e,t){if(t<0)var n=-e|0,r=e===0?-t|0:~t;else var n=e,r=t;var i=!(-2097152&r)||!(65535&n)?n:32768|-65536&n,a=4294967296*(r>>>0)+ +(i>>>0);return Math.fround(t<0?-a:a)}),S.iC=(function(e){return new j(e,e>>31)}),S.iB=(function(e){return new j(this.fB(e),this.q)}),S.fB=(function(e){if(e<-0x8000000000000000)return this.q=-2147483648,0;if(e>=0x8000000000000000)return this.q=2147483647,-1;var t=e|0,n=e/4294967296|0;return this.q=e<0&&t!==0?-1+n|0:n,t}),S.fA=(function(e,t,n,r){return t===r?e===n?0:(-2147483648^e)<(-2147483648^n)?-1:1:t<r?-1:1}),S.gz=(function(e,t,n,r){if((n|r)===0)throw new Hd(`/ by zero`);if(t===e>>31)if(r===n>>31){if(e===-2147483648&&n===-1)return this.q=0,-2147483648;var i=ar(e,n);return this.q=i>>31,i}else if(e===-2147483648&&n===-2147483648&&r===0)return this.q=-1,-1;else return this.q=0,0;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=as(this,a,o,s,c);if((t^r)>=0)return l;var u=this.q;return this.q=l===0?-u|0:~u,-l|0}}),S.hC=(function(e,t,n,r){if((n|r)===0)throw new Hd(`/ by zero`);if(t===e>>31)if(r===n>>31)if(n!==-1){var i=or(e,n);return this.q=i>>31,i}else return this.q=0,0;else if(e===-2147483648&&n===-2147483648&&r===0)return this.q=0,0;else return this.q=t,e;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=os(this,a,o,s,c);if(t<0){var u=this.q;return this.q=l===0?-u|0:~u,-l|0}else return l}}),new T().i(cs,`org.scalajs.linker.runtime.RuntimeLong$`,{d9:1});var us;function M(){return us||=new cs,us}var ds=new T().i(1,`scala.Function0`,{a7:1}),fs=new T().i(1,`scala.Function1`,{e:1});function ps(){}S=ps.prototype=new C,S.constructor=ps;function ms(){}ms.prototype=S;function hs(){this.eE=null,this.bX=null,_s=this,this.eE=new W((e=>vs().eE)),this.bX=new td}S=hs.prototype=new C,S.constructor=hs;function gs(){}gs.prototype=S,new T().i(hs,`scala.PartialFunction$`,{dj:1});var _s;function vs(){return _s||=new hs,_s}function ys(e,t){for(var n=e.m();n.r();)t.h(n.i())}function bs(e,t,n,r){return e.y()===0?``+t+r:e.bi(Uh(new Wh),t,n,r).K.p}function xs(e,t,n,r,i){var a=t.K;n.length!==0&&(a.p=``+a.p+n);var o=e.m();if(o.r()){var s=o.i();for(a.p=``+a.p+s;o.r();){a.p=``+a.p+r;var c=o.i();a.p=``+a.p+c}}return i.length!==0&&(a.p=``+a.p+i),t}function Ss(e,t){this.eK=null,this.bb=null,this.eK=e,this.bb=t}S=Ss.prototype=new C,S.constructor=Ss;function Cs(){}Cs.prototype=S,S.gZ=(function(){return this.eK.a6().m()}),new T().i(Ss,`scala.collection.Iterator$ConcatIteratorCell`,{dH:1});function ws(){}S=ws.prototype=new C,S.constructor=ws;function Ts(){}Ts.prototype=S,S.A=(function(e,t){return e===t||(Bc(e)?this.gG(e,t):e instanceof $n?this.gE(e,t):e===null?t===null:nr(e,t))}),S.gG=(function(e,t){if(Bc(t))return this.gF(e,t);if(t instanceof $n){if(typeof e==`number`)return+e===t.c;if(e instanceof j){var n=yr(e),r=n.c,i=n.d,a=t.c,o=a>>31;return r===a&&i===o}else return e===null?t===null:nr(e,t)}else return e===null?t===null:nr(e,t)}),S.gF=(function(e,t){if(typeof e==`number`){var n=+e;if(typeof t==`number`)return n===+t;if(t instanceof j){var r=yr(t);return n===M().bC(r.c,r.d)}else return!1}else if(e instanceof j){var i=yr(e),a=i.c,o=i.d;if(t instanceof j){var s=yr(t),c=s.c,l=s.d;return a===c&&o===l}else if(typeof t==`number`){var u=+t;return M().bC(a,o)===u}else return!1}else return e===null?t===null:nr(e,t)}),S.gE=(function(e,t){if(t instanceof $n)return e.c===t.c;if(Bc(t)){if(typeof t==`number`)return+t===e.c;if(t instanceof j){var n=yr(t),r=n.c,i=n.d,a=e.c,o=a>>31;return r===a&&i===o}else return t===null?e===null:nr(t,e)}else return e===null&&t===null}),new T().i(ws,`scala.runtime.BoxesRunTime$`,{ej:1});var Es;function N(){return Es||=new ws,Es}var Ds=new T().i(0,`scala.runtime.Null$`,{em:1});function Os(){}S=Os.prototype=new C,S.constructor=Os;function ks(){}ks.prototype=S,S.aR=(function(e,t){if(e instanceof w||e instanceof Er||e instanceof kr||e instanceof Dr||e instanceof Or)return e.a[t];if(e instanceof Cr)return _r(e.a[t]);if(e instanceof wr||e instanceof Tr||e instanceof Sr)return e.a[t];throw e===null?new J:new rf(e)}),S.gg=(function(e,t,n){if(e instanceof w)e.a[t]=n;else if(e instanceof Er)e.a[t]=n|0;else if(e instanceof kr)e.a[t]=+n;else if(e instanceof Dr)e.a[t]=yr(n);else if(e instanceof Or)e.a[t]=Math.fround(n);else if(e instanceof Cr)e.a[t]=vr(n);else if(e instanceof wr)e.a[t]=n|0;else if(e instanceof Tr)e.a[t]=n|0;else if(e instanceof Sr)e.a[t]=!!n;else if(e===null)throw new J;else throw new rf(e)}),S.d5=(function(e){return bs(e.a2(),e.S()+`(`,`,`,`)`)}),S.s=(function(e){return e===null?null:e.a.length===0?wp(Op()):new oh(e)}),S.ia=(function(e){return e===null?null:new nh(e)}),new T().i(Os,`scala.runtime.ScalaRunTime$`,{eo:1});var As;function P(){return As||=new Os,As}function js(){}S=js.prototype=new C,S.constructor=js;function Ms(){}Ms.prototype=S,S.b=(function(e,t){var n=this.ca(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),S.ca=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),S.k=(function(e,t){return this.gh(e^t)}),S.gh=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),S.aT=(function(e){var t=e.c,n=e.d;return n===t>>31?t:t^n}),S.V=(function(e){var t=sr(e);if(t===e)return t;var n=M(),r=n.fB(e),i=n.q;return M().bC(r,i)===e?r^i:so().df(e)}),S.w=(function(e){if(e===null)return 0;if(typeof e==`number`)return this.V(+e);if(e instanceof j){var t=yr(e);return this.aT(new j(t.c,t.d))}else return rr(e)}),S.aE=(function(e){throw Kd(new qd,``+e)}),new T().i(js,`scala.runtime.Statics$`,{eq:1});var Ns;function F(){return Ns||=new js,Ns}function Ps(){}S=Ps.prototype=new C,S.constructor=Ps;function Fs(){}Fs.prototype=S,S.hW=(function(e,t){return setTimeout((()=>{t.a6()}),e)}),new T().i(Ps,`scala.scalajs.js.timers.package$`,{et:1});var Is;function Ls(){return Is||=new Ps,Is}function Rs(){}S=Rs.prototype=new C,S.constructor=Rs;function zs(){}zs.prototype=S,S.i4=(function(e){var t=[];return e.bw(new W((e=>t.push(e)|0))),t}),new T().i(Rs,`scala.scalajs.runtime.Compat$`,{eC:1});var Bs;function Vs(){return Bs||=new Rs,Bs}function Hs(){}S=Hs.prototype=new C,S.constructor=Hs;function Us(){}Us.prototype=S,S.hX=(function(e){var t=`Illegal command line`+(e.ft()===0?``:e.ft()===1?` after first argument`:` after `+e.ft()+` arguments`)+`: `+e.iG();tl().hu().h5(t+`
`)}),new T().i(Hs,`scala.util.CommandLineParser$`,{eE:1});function Ws(e){this.d4=null,this.d4=e}S=Ws.prototype=new C,S.constructor=Ws;function Gs(){}Gs.prototype=S,S.n=(function(){return`DynamicVariable(`+this.d4+`)`}),new T().i(Ws,`scala.util.DynamicVariable`,{eG:1});function Ks(){}S=Ks.prototype=new C,S.constructor=Ks;function qs(){}qs.prototype=S,S.ge=(function(e){return!0}),new T().i(Ks,`scala.util.control.NonFatal$`,{eI:1});var Js;function Ys(){return Js||=new Ks,Js}function Xs(){}S=Xs.prototype=new C,S.constructor=Xs;function Zs(){}Zs.prototype=S,S.b=(function(e,t){var n=this.ca(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),S.ca=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),S.k=(function(e,t){return this.G(e^t)}),S.G=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),S.aU=(function(e,t,n){var r=e.Q();if(r===0)return sp(e.S());var i=t;n||(i=this.b(i,sp(e.S())));for(var a=0;a<r;)i=this.b(i,F().w(e.R(a))),a=1+a|0;return this.k(i,r)}),S.i5=(function(e,t){for(var n=0,r=0,i=0,a=1,o=e.m();o.r();){var s=o.i(),c=F().w(s);n=n+c|0,r^=c,a=Math.imul(a,1|c),i=1+i|0}var l=t;return l=this.b(l,n),l=this.b(l,r),l=this.ca(l,a),this.k(l,i)}),S.ht=(function(e,t){var n=e.m(),r=t;if(!n.r())return this.k(r,0);var i=n.i();if(!n.r())return this.k(this.b(r,F().w(i)),1);var a=n.i(),o=F().w(i);r=this.b(r,o);for(var s=r,c=F().w(a),l=c-o|0,u=2;n.r();){r=this.b(r,c);var d=F().w(n.i());if(l!==(d-c|0)||l===0){for(r=this.b(r,d),u=1+u|0;n.r();)r=this.b(r,F().w(n.i())),u=1+u|0;return this.k(r,u)}c=d,u=1+u|0}return this.G(this.b(this.b(s,l),c))}),S.f0=(function(e,t){var n=t,r=$o().bx(e);switch(r){case 0:return this.k(n,0);case 1:return this.k(this.b(n,F().w(P().aR(e,0))),1);default:var i=F().w(P().aR(e,0));n=this.b(n,i);for(var a=n,o=F().w(P().aR(e,1)),s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=F().w(P().aR(e,c));if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,F().w(P().aR(e,c))),c=1+c|0;return this.k(n,r)}o=l,c=1+c|0}return this.G(this.b(this.b(a,s),o))}}),S.hA=(function(e,t,n,r){return this.G(this.b(this.b(this.b(r,e),t),n))}),S.h0=(function(e,t){var n=t,r=e.j();switch(r){case 0:return this.k(n,0);case 1:return this.k(this.b(n,F().w(e.o(0))),1);default:var i=F().w(e.o(0));n=this.b(n,i);for(var a=n,o=F().w(e.o(1)),s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=F().w(e.o(c));if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,F().w(e.o(c))),c=1+c|0;return this.k(n,r)}o=l,c=1+c|0}return this.G(this.b(this.b(a,s),o))}}),S.h7=(function(e,t){for(var n=0,r=t,i=0,a=0,o=0,s=0,c=e;!c.f();){var l=c.a7(),u=c.X(),d=F().w(l);switch(r=this.b(r,d),i){case 0:s=d,i=1;break;case 1:a=d-o|0,i=2;break;case 2:(a!==(d-o|0)||a===0)&&(i=3);break}o=d,n=1+n|0,c=u}return i===2?this.hA(s,a,o,t):this.k(r,n)}),S.f9=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.k(n,0);case 1:return this.k(this.b(n,e.a[0]?1231:1237),1);default:var i=e.a[0]?1231:1237;n=this.b(n,i);for(var a=n,o=e.a[1]?1231:1237,s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c]?1231:1237;if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]?1231:1237),c=1+c|0;return this.k(n,r)}o=l,c=1+c|0}return this.G(this.b(this.b(a,s),o))}}),S.f1=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.k(n,0);case 1:return this.k(this.b(n,e.a[0]),1);default:var i=e.a[0];n=this.b(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]),c=1+c|0;return this.k(n,r)}o=l,c=1+c|0}return this.G(this.b(this.b(a,s),o))}}),S.f2=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.k(n,0);case 1:return this.k(this.b(n,e.a[0]),1);default:var i=e.a[0];n=this.b(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]),c=1+c|0;return this.k(n,r)}o=l,c=1+c|0}return this.G(this.b(this.b(a,s),o))}}),S.f3=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.k(n,0);case 1:return this.k(this.b(n,F().V(e.a[0])),1);default:var i=F().V(e.a[0]);n=this.b(n,i);for(var a=n,o=F().V(e.a[1]),s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=F().V(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,F().V(e.a[c])),c=1+c|0;return this.k(n,r)}o=l,c=1+c|0}return this.G(this.b(this.b(a,s),o))}}),S.f4=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.k(n,0);case 1:return this.k(this.b(n,F().V(e.a[0])),1);default:var i=F().V(e.a[0]);n=this.b(n,i);for(var a=n,o=F().V(e.a[1]),s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=F().V(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,F().V(e.a[c])),c=1+c|0;return this.k(n,r)}o=l,c=1+c|0}return this.G(this.b(this.b(a,s),o))}}),S.f5=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.k(n,0);case 1:return this.k(this.b(n,e.a[0]),1);default:var i=e.a[0];n=this.b(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]),c=1+c|0;return this.k(n,r)}o=l,c=1+c|0}return this.G(this.b(this.b(a,s),o))}}),S.f6=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.k(n,0);case 1:var i=n,a=e.a[0];return this.k(this.b(i,F().aT(new j(a.c,a.d))),1);default:var o=e.a[0],s=F().aT(new j(o.c,o.d));n=this.b(n,s);for(var c=n,l=e.a[1],u=F().aT(new j(l.c,l.d)),d=u-s|0,f=2;f<r;){n=this.b(n,u);var p=e.a[f],m=F().aT(new j(p.c,p.d));if(d!==(m-u|0)||d===0){for(n=this.b(n,m),f=1+f|0;f<r;){var ee=n,te=e.a[f];n=this.b(ee,F().aT(new j(te.c,te.d))),f=1+f|0}return this.k(n,r)}u=m,f=1+f|0}return this.G(this.b(this.b(c,d),u))}}),S.f7=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.k(n,0);case 1:return this.k(this.b(n,e.a[0]),1);default:var i=e.a[0];n=this.b(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]),c=1+c|0;return this.k(n,r)}o=l,c=1+c|0}return this.G(this.b(this.b(a,s),o))}}),S.f8=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.k(n,0);case 1:return this.k(this.b(n,0),1);default:n=this.b(n,0);for(var i=n,a=0,o=a,s=2;s<r;){if(n=this.b(n,a),o!==(-a|0)||o===0){for(n=this.b(n,0),s=1+s|0;s<r;)n=this.b(n,0),s=1+s|0;return this.k(n,r)}a=0,s=1+s|0}return this.G(this.b(this.b(i,o),a))}});function Qs(e){this.aK=null,this.du=null,this.ci=!1,this.du=e,Di(this),this.ci=!1}S=Qs.prototype=new C,S.constructor=Qs;function $s(){}$s.prototype=S,S.hv=(function(e){this.ci?(ji(e),this.du.a6()):Ai(this,e)}),S.h6=(function(){Oi(this),this.ci=!0}),new T().i(Qs,`com.raquo.airstream.ownership.OneTimeOwner`,{bv:1,bw:1});function ec(){}S=ec.prototype=new C,S.constructor=ec;function tc(){}tc.prototype=S,S.gw=(function(e){return e!==null}),S.gD=(function(e){return e?``:null}),S.c2=(function(e){return this.gw(e)}),S.c6=(function(e){return this.gD(!!e)}),new T().i(ec,`com.raquo.laminar.codecs.package$$anon$1`,{bP:1,a3:1});function nc(e){if(e===null)throw new J}S=nc.prototype=new C,S.constructor=nc;function rc(){}rc.prototype=S,S.c6=(function(e){return e}),S.c2=(function(e){return e}),new T().i(nc,`com.raquo.laminar.codecs.package$$anon$2`,{bQ:1,a3:1});function ic(e){if(e===null)throw new J}S=ic.prototype=new C,S.constructor=ic;function ac(){}ac.prototype=S,S.gv=(function(e){return Lc().hx(e)}),S.c2=(function(e){return this.gv(e)}),S.c6=(function(e){return``+ +e}),new T().i(ic,`com.raquo.laminar.codecs.package$$anon$4`,{bR:1,a3:1});function oc(e,t,n,r){}S=oc.prototype=new xa,S.constructor=oc;function sc(){}sc.prototype=S,new T().i(oc,`com.raquo.laminar.keys.CompositeKey`,{c7:1,X:1});function cc(e){this.bQ=null,this.bQ=e}S=cc.prototype=new xa,S.constructor=cc;function lc(){}lc.prototype=S,new T().i(cc,`com.raquo.laminar.keys.EventProp`,{ca:1,X:1});function I(e,t){this.b3=null,this.cu=null,this.b3=e,this.cu=t}S=I.prototype=new xa,S.constructor=I;function uc(){}uc.prototype=S,S.x=(function(e){return new zl(this,e,new hd(((e,t,n)=>{D().fG(e,t,n)})))}),new T().i(I,`com.raquo.laminar.keys.HtmlAttr`,{cb:1,X:1});function dc(e,t,n){this.cw=null,this.cv=null,this.bR=null,this.bS=null,this.cw=e,this.cv=t;var r=n.f()?Y():new X(n.u()+`:`+e);this.bR=r.f()?e:r.u(),this.bS=n.f()?Y():new X(Ta().hd(n.u()))}S=dc.prototype=new xa,S.constructor=dc;function fc(){}fc.prototype=S,new T().i(dc,`com.raquo.laminar.keys.SvgAttr`,{cc:1,X:1});function pc(){}S=pc.prototype=new C,S.constructor=pc;function mc(){}mc.prototype=S,S.a0=(function(e){}),new T().i(pc,`com.raquo.laminar.modifiers.Modifier$$anon$1`,{cj:1,R:1});function hc(e,t){if(this.e1=null,this.e1=e,t===null)throw new J}S=hc.prototype=new C,S.constructor=hc;function gc(){}gc.prototype=S,S.a0=(function(e){var t=oi(),n=(()=>{this.e1.h(e)});if(oi(),t.B)n();else{t.B=!0;try{n()}finally{t.B=!1,ni(t)}}}),new T().i(hc,`com.raquo.laminar.modifiers.Modifier$$anon$2`,{ck:1,R:1});function _c(e,t){if(this.e3=null,this.e3=e,t===null)throw new J}S=_c.prototype=new C,S.constructor=_c;function vc(){}vc.prototype=S,S.fa=(function(e){return this.e3.h(e)}),new T().i(_c,`com.raquo.laminar.modifiers.RenderableText$$anon$1`,{cn:1,cl:1});function yc(e){e.fe(new vi(new K((()=>{throw V(new H,`Attempting to use owner of unmounted element: `+bs(D().gu(e.F(),(D(),Vh())),``,` > `,``))}))))}function bc(e,t,n){return e.cE=t,e}function xc(){this.cE=null}S=xc.prototype=new C,S.constructor=xc;function Sc(){}Sc.prototype=S,S.de=(function(){return this.cE}),S.d8=(function(e){var t=this.gk();return e.bw(new q((e=>{e.a0(t)}))),t}),S.gk=(function(){return new Xf(this,D().gp(this))}),new T().i(xc,`com.raquo.laminar.tags.HtmlTag`,{aj:1,a5:1});function Cc(e,t){this.e9=null,this.e9=e}S=Cc.prototype=new C,S.constructor=Cc;function wc(){}wc.prototype=S,new T().i(Cc,`com.raquo.laminar.tags.SvgTag`,{cz:1,a5:1});function Tc(e,t){return e.cG=t,e.g4(),e}function Ec(){this.cG=null,this.cF=null,this.cH=!1}S=Ec.prototype=new C,S.constructor=Ec;function Dc(){}Dc.prototype=S,S.i1=(function(){return this.cH||=(this.cF=new Ul(this.cG,Qa().g3(),(Qa(),void 0)),!0),this.cF}),S.bo=(function(e,t){var n=this.i1().d8(P().s(new(Oa.r()).C([])));return e.bw(new q((e=>{e.h(this).a0(n)}))),t.bw(new q((e=>{e.a0(n)}))),n});function Oc(e){return(1&e.ab)<<24>>24||(e.cK=RegExp(`^[\\x00-\\x20]*([+-]?(?:NaN|Infinity|(?:\\d+\\.?\\d*|\\.\\d+)(?:[eE][+-]?\\d+)?)[fFdD]?)[\\x00-\\x20]*$`),e.ab=(1|e.ab)<<24>>24),e.cK}function kc(e){return(1&e.ab)<<24>>24?e.cK:Oc(e)}function Ac(e){return(2&e.ab)<<24>>24||(e.cJ=RegExp(`^[\\x00-\\x20]*([+-]?)0[xX]([0-9A-Fa-f]*)\\.?([0-9A-Fa-f]*)[pP]([+-]?\\d+)[fFdD]?[\\x00-\\x20]*$`),e.ab=(2|e.ab)<<24>>24),e.cJ}function jc(e){return(2&e.ab)<<24>>24?e.cJ:Ac(e)}function Mc(e,t){var n=jc(e).exec(t);n===null&&Nc(t);var r=n[1],i=n[2],a=n[3],o=n[4];i===``&&a===``&&Nc(t);var s=e.hy(i,a,o,15);return r===`-`?-s:s}function Nc(e){throw new op(`For input string: "`+e+`"`)}function Pc(){this.cK=null,this.cJ=null,this.ab=0}S=Pc.prototype=new C,S.constructor=Pc;function Fc(){}Fc.prototype=S,S.hx=(function(e){var t=kc(this).exec(e);return t===null?Mc(this,e):+parseFloat(t[1])}),S.hy=(function(e,t,n,r){for(var i=``+e+t,a=-(t.length<<2)|0,o=0;o!==i.length&&i.charCodeAt(o)===48;)o=1+o|0;var s=o,c=i.substring(s);if(c===``)return 0;var l=c.length,u=l>r;if(u){for(var d=!1,f=r;!d&&f!==l;)c.charCodeAt(f)!==48&&(d=!0),f=1+f|0;var p=d?`1`:`0`,m=c.substring(0,r)+p}else var m=c;var ee=a+(u?(c.length-(1+r|0)|0)<<2:0)|0,te=+parseInt(m,16),ne=sr(+parseInt(n,10))+ee|0,re=ne/3|0,ie=+(2**re),ae=ne-(re<<1)|0;return te*ie*ie*+(2**ae)}),new T().i(Pc,`java.lang.Double$`,{cK:1,a:1});var Ic;function Lc(){return Ic||=new Pc,Ic}function Rc(){}S=Rc.prototype=new C,S.constructor=Rc;function zc(){}zc.prototype=S;function Bc(e){return e instanceof Rc||typeof e==`number`||e instanceof j}function Vc(e,t,n,r,i){this.aN=null,this.b7=null,this.aO=null,this.aP=0,this.aM=0,this.aN=e,this.b7=t,this.aO=n,this.aP=r,this.aM=i}S=Vc.prototype=new C,S.constructor=Vc;function Hc(){}Hc.prototype=S,S.e=(function(e){return e instanceof Vc&&this.aO===e.aO&&this.aP===e.aP&&this.aM===e.aM&&this.aN===e.aN&&this.b7===e.b7}),S.n=(function(){var e=``;return this.aN!==`<jscode>`&&(e=``+e+this.aN+`.`),e=``+e+this.b7,this.aO===null?e+=`(Unknown Source)`:(e=e+`(`+this.aO,this.aP>=0&&(e=e+`:`+this.aP,this.aM>=0&&(e=e+`:`+this.aM)),e+=`)`),e}),S.l=(function(){return sp(this.aN)^sp(this.b7)^sp(this.aO)^this.aP^this.aM});var Uc=new T().i(Vc,`java.lang.StackTraceElement`,{au:1,a:1});function Wc(){}S=Wc.prototype=new C,S.constructor=Wc;function Gc(){}Gc.prototype=S,S.he=(function(e,t,n){var r=t+n|0;if(t<0||r<t||r>e.a.length)throw new up;for(var i=``,a=t;a!==r;)i+=``+cr(e.a[a]),a=1+a|0;return i}),new T().i(Wc,`java.lang.String$`,{cY:1,a:1});var Kc;function qc(){return Kc||=new Wc,Kc}function L(e,t,n,r,i){return e.eA=t,e.eB=i,i&&e.gN(),e}var R=class extends Error{constructor(){super(),this.eA=null,this.eB=!1,this.ez=null,this.bV=null}h1(e){return this}by(){return this.eA}gN(){var e=this instanceof Z?this.z:this;return this.ez=Object.prototype.toString.call(e)===`[object Error]`?e:Error.captureStackTrace===void 0||Object.isSealed(this)?Error():(Error.captureStackTrace(this),this),this}gV(){return this.bV===null&&(this.eB?this.bV=No().gM(this.ez):this.bV=new(Uc.r()).C(0)),this.bV}n(){var e=tr(this),t=this.by();return t===null?e:e+`: `+t}l(){return br.prototype.l.call(this)}e(e){return br.prototype.e.call(this,e)}get message(){var e=this.by();return e===null?``:e}get name(){return tr(this)}toString(){return this.n()}};function Jc(){}S=Jc.prototype=new C,S.constructor=Jc;function Yc(){}Yc.prototype=S,S.fp=(function(e,t){var n=e.y();if(n>-1){for(var r=t.hf(n),i=e.m(),a=0;a<n;)P().gg(r,a,i.i()),a=1+a|0;return r}else{var o=null,s=t.hP(),c=s===Mr.l();o=[];for(var l=e.m();l.r();){var u=l.i(),d=c?vr(u):u===null?s.ap.z:u;o.push(d)}return(s===jr.l()?Jo.l():s===Ds.l()||s===bu.l()?Ar.l():s).ap.r().w(o)}}),S.fo=(function(e,t){if(e===t)return!0;if(e.a.length!==t.a.length)return!1;for(var n=e.a.length,r=0;r<n;){if(!N().A(e.a[r],t.a[r]))return!1;r=1+r|0}return!0}),new T().i(Jc,`scala.Array$`,{da:1,a:1});var Xc;function Zc(){return Xc||=new Jc,Xc}function Qc(){this.eD=null,el=this,this.eD=new Ws(Bo().ey)}S=Qc.prototype=new C,S.constructor=Qc;function $c(){}$c.prototype=S,S.hu=(function(){return this.eD.d4}),new T().i(Qc,`scala.Console$`,{db:1,e4:1});var el;function tl(){return el||=new Qc,el}function nl(){}S=nl.prototype=new ms,S.constructor=nl;function rl(){}rl.prototype=S,S.ib=(function(e){return e===null?null:e.a.length===0?Mp().eL:new Ah(e)});function il(){}S=il.prototype=new C,S.constructor=il;function al(){}al.prototype=S,S.bn=(function(e){return e===null?Y():new X(e)}),new T().i(il,`scala.Option$`,{di:1,a:1});var ol;function sl(){return ol||=new il,ol}function cl(e,t){if(t===e)e.eW(Nf().fq(t));else for(var n=t.m();n.r();)e.d7(n.i());return e}function ll(){}S=ll.prototype=new C,S.constructor=ll;function ul(){}ul.prototype=S,S.n=(function(){return`<function0>`});function dl(){}S=dl.prototype=new C,S.constructor=dl;function fl(){}fl.prototype=S,S.n=(function(){return`<function1>`});function pl(){}S=pl.prototype=new C,S.constructor=pl;function ml(){}ml.prototype=S,S.n=(function(){return`<function2>`});function hl(){}S=hl.prototype=new C,S.constructor=hl;function gl(){}gl.prototype=S,S.n=(function(){return`<function3>`});function _l(e){this.c0=!1,this.c0=e}S=_l.prototype=new C,S.constructor=_l;function vl(){}vl.prototype=S,S.n=(function(){return``+this.c0}),new T().i(_l,`scala.runtime.BooleanRef`,{ei:1,a:1});function yl(e){this.be=0,this.be=e}S=yl.prototype=new C,S.constructor=yl;function bl(){}bl.prototype=S,S.n=(function(){return``+this.be}),new T().i(yl,`scala.runtime.IntRef`,{ek:1,a:1});function xl(e){this.c1=null,this.c1=e}S=xl.prototype=new C,S.constructor=xl;function Sl(){}Sl.prototype=S,S.n=(function(){return``+this.c1}),new T().i(xl,`scala.runtime.ObjectRef`,{en:1,a:1});function Cl(){this.t=0,this.eT=0,this.g2=0,this.g1=0,Tl=this,this.t=sp(`Seq`),this.eT=sp(`Map`),this.g2=sp(`Set`),this.g1=this.i5(Vh(),this.eT)}S=Cl.prototype=new Zs,S.constructor=Cl;function wl(){}wl.prototype=S,S.hQ=(function(e){return wm(e)?this.h0(e,this.t):e instanceof mh?this.h7(e,this.t):this.ht(e,this.t)}),new T().i(Cl,`scala.util.hashing.MurmurHash3$`,{eK:1,eJ:1});var Tl;function z(){return Tl||=new Cl,Tl}var El=class extends R{};function Dl(){this.cd=null,this.di=null,this.dj=null,kl=this,this.cd=Nf().eY(P().s(new(fs.r()).C([]))),this.di=new q((e=>{try{console.error(this.c7(e)+`
`+this.gU(e,`
`))}catch(e){var t=e instanceof R?e:new Z(e);console.error(`Error in AirstreamError.consoleErrorCallback:`),console.error(t)}})),this.dj=new q((e=>{console.warn(`Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.`);var t=e;throw t instanceof Z?t.z:t})),this.hB(this.di)}S=Dl.prototype=new C,S.constructor=Dl;function Ol(){}Ol.prototype=S,S.c7=(function(e){try{var t=e.by()}catch{var t=`(Unable to get the message for this error - exception occurred in its getMessage)`}return er(e).dd()+`: `+t}),S.gU=(function(e,t){try{return bs(tu().ib(e.gV()),``,t,``)}catch{return`(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)`}}),S.hB=(function(e){this.cd.d7(e)}),S.a3=(function(e){for(var t=this.cd.m();t.r();){var n=t.i();try{n.h(e)}catch(e){var r=e instanceof R?e:new Z(e),i=this.dj;if(n===null?i===null:n.e(i))throw r instanceof Z?r.z:r;console.warn(`Error processing an unhandled error callback:`),Ls().hW(0,new K((e=>(()=>{throw e instanceof Z?e.z:e}))(r)))}}}),new T().i(Dl,`com.raquo.airstream.core.AirstreamError$`,{bc:1,e2:1,e3:1});var kl;function B(){return kl||=new Dl,kl}function Al(e){e.bL=!0,e.bN=void 0}function jl(e,t,n){return bd(e,Br().fI(t,vs().bX,!0),n)}function Ml(e,t){e.bL?Sd(e,t):Pl(e).push(new K((()=>{Sd(e,t)})))}function Nl(e){return Ed(e)>0}function Pl(e){var t=e.bN;if(t===void 0){var n=E().P(P().s(new(ds.r()).C([])));return e.bN=n,n}else return t}var Fl=new T().i(1,`com.raquo.airstream.core.Observer`,{a2:1,W:1,U:1});function Il(e,t){this.aL=null,this.cy=null,this.cz=null,this.aL=e,this.cy=(n=>{var r=e.dU.h(n);r.f()||t.h(r.u())}),this.cz=(()=>{var e=null;e=this;var t={};if(e===null)throw new J;return t.capture=e.aL.dW,t.passive=e.aL.dV,t})()}S=Il.prototype=new C,S.constructor=Il;function Ll(){}Ll.prototype=S,S.a0=(function(e){this.gi(e,!1)}),S.gi=(function(e,t){if(Pd(e,this)===-1){var n=new q((t=>(D().g5(e.Z,this),new Mi(t.cx,new K((()=>{var t=Pd(e,this);t!==-1&&(Nd(e,t),D().hF(e.Z,this))})))))),r=t?Wa().i6(e,n):Ei().cc(e.Y,new q((t=>n.h(new Ea(e,t)))),!1);return Md(e,this,t),r}else{var i=new q((e=>void 0));return Ei().fH(e.Y,new q((t=>{i.h(new Ea(e,t))})),!1)}}),S.n=(function(){return`EventListener(`+this.aL.bP.bQ+`)`});var Rl=new T().i(Il,`com.raquo.laminar.modifiers.EventListener`,{cg:1,R:1,cf:1});function zl(e,t,n){this.dZ=null,this.e0=null,this.dY=null,this.dZ=e,this.e0=t,this.dY=n}S=zl.prototype=new C,S.constructor=zl;function Bl(){}Bl.prototype=S,S.a0=(function(e){this.dY.eX(e,this.dZ,this.e0)}),new T().i(zl,`com.raquo.laminar.modifiers.KeySetter`,{ch:1,R:1,co:1});function Vl(e,t){if(this.cC=null,this.e6=null,this.e7=null,this.e6=t,yc(this),e===null)throw V(new H,`Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load`);if(!D().h4(e,document))throw V(new H,`Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering`);this.e7=e,this.hb()}S=Vl.prototype=new C,S.constructor=Vl;function Hl(){}Hl.prototype=S,S.c5=(function(){return this.cC}),S.fe=(function(e){this.cC=e}),S.hb=(function(){return this.cC.eV(),Ba().bj(this,this.e6,void 0)}),S.F=(function(){return this.e7}),new T().i(Vl,`com.raquo.laminar.nodes.RootNode`,{cu:1,Y:1,ai:1});function Ul(e,t,n){this.cE=null,this.e8=null,this.e8=e,bc(this,e,!1)}S=Ul.prototype=new Sc,S.constructor=Ul;function Wl(){}Wl.prototype=S,S.de=(function(){return this.e8}),new T().i(Ul,`com.raquo.laminar.tags.CustomHtmlTag`,{cx:1,aj:1,a5:1});function Gl(){this.cG=null,this.cF=null,this.cH=!1,this.eo=null,this.ep=!1,this.ea=null,this.eb=!1,this.ec=null,this.ed=!1,this.ei=null,this.ej=!1,this.ek=null,this.el=!1,this.eu=null,this.ev=!1,this.eq=null,this.er=!1,this.eg=null,this.eh=!1,this.ee=null,this.ef=!1,this.es=null,this.et=!1,this.em=null,this.en=!1,Tc(this,`wa-tag-input`)}S=Gl.prototype=new Dc,S.constructor=Gl;function Kl(){}Kl.prototype=S,S.hq=(function(){return this.ep||=(this.eo=(G(),new cc(`wa-create`)),!0),this.eo}),S.ff=(function(){return this.eb||=(this.ea=(G(),new I(`value`,O().a4)),!0),this.ea}),S.gx=(function(){return this.ed||=(this.ec=(G(),new I(`delimiter`,O().a4)),!0),this.ec}),S.h9=(function(){return this.ej||=(this.ei=(G(),new I(`max-tags`,O().eU())),!0),this.ei}),S.ha=(function(){return this.el||=(this.ek=(G(),new I(`min-tags`,O().eU())),!0),this.ek}),S.i9=(function(){return this.ev||=(this.eu=(G(),new I(`with-clear`,O().cn)),!0),this.eu}),S.fE=(function(){return this.er||=(this.eq=(G(),new I(`placeholder`,O().a4)),!0),this.eq}),S.bA=(function(){return this.eh||=(this.eg=(G(),new I(`label`,O().a4)),!0),this.eg}),S.fs=(function(){return this.ef||=(this.ee=(G(),new I(`hint`,O().a4)),!0),this.ee}),S.hN=(function(){return this.et||=(this.es=(G(),new I(`required`,O().cn)),!0),this.es}),S.hc=(function(){return this.en||=(this.em=(G(),new I(`name`,O().a4)),!0),this.em}),S.g4=(function(){return Zn}),new T().i(Gl,`io.github.nguyenyou.webawesome.laminar.TagInput$`,{cC:1,cD:1,cB:1});var ql;function Jl(){return ql||=new Gl,ql}function Yl(e){if(e.ap.Z)return e.ap.Q().dd()+`[]`;for(var t=e.ap.N,n=-1+t.length|0;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0;if(n>=0)var r=n,i=t.charCodeAt(r),a=i>=48&&i<=57;else var a=!1;if(a){for(n=-1+n|0;;){if(n>=0)var o=n,s=t.charCodeAt(o),c=s>=48&&s<=57;else var c=!1;if(c)n=-1+n|0;else break}for(;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0}for(;;){if(n>=0)var l=n,u=t.charCodeAt(l),d=u!==46&&u!==36;else var d=!1;if(d)n=-1+n|0;else break}var f=1+n|0;return t.substring(f)}function Xl(e){this.cI=null,this.ap=e}S=Xl.prototype=new C,S.constructor=Xl;function Zl(){}Zl.prototype=S,S.n=(function(){return(this.ap.Y?`interface `:this.ap.X?``:`class `)+this.ap.N}),S.dd=(function(){return this.cI===null&&(this.cI=Yl(this)),this.cI}),new T().i(Xl,`java.lang.Class`,{cJ:1,a:1,M:1});function V(e,t){return L(e,t,null,!0,!0),e}var H=class extends R{};new T().i(H,`java.lang.Exception`,{I:1,t:1,a:1});function Ql(){this.fX=null,eu=this,this.fX=mu()}S=Ql.prototype=new rl,S.constructor=Ql;function $l(){}$l.prototype=S,new T().i(Ql,`scala.Predef$`,{dl:1,de:1,df:1});var eu;function tu(){return eu||=new Ql,eu}function nu(e,t){return e.bY=t,e}function ru(){this.bY=null}S=ru.prototype=new C,S.constructor=ru;function iu(){}iu.prototype=S,S.dc=(function(e){return this.bY.db(e,gm())}),S.d9=(function(e){return this.bY.db(e,gm())});function au(e,t){return new vf(e).gm(t)}function ou(e,t,n){var r=t>0?t:0,i=n<0?-1:n<=r?0:n-r|0;return i===0?U().v:new Sf(e,r,i)}function su(e,t){for(var n=t.m();e.r()&&n.r();)if(!N().A(e.i(),n.i()))return!1;return e.r()===n.r()}function cu(){this.v=null,uu=this,this.v=new ff}S=cu.prototype=new C,S.constructor=cu;function lu(){}lu.prototype=S,new T().i(cu,`scala.collection.Iterator$`,{dE:1,Z:1,a:1});var uu;function U(){return uu||=new cu,uu}function du(){}S=du.prototype=new C,S.constructor=du;function fu(){}fu.prototype=S,new T().i(du,`scala.collection.immutable.Map$`,{dS:1,dJ:1,a:1});var pu;function mu(){return pu||=new du,pu}function hu(e){this.eM=null,this.eM=e}S=hu.prototype=new ul,S.constructor=hu;function gu(){}gu.prototype=S,S.a6=(function(){return(0,this.eM)()}),new T().i(hu,`scala.runtime.AbstractFunction0.$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855`,{ed:1,b6:1,a7:1});function W(e){this.eN=null,this.eN=e}S=W.prototype=new fl,S.constructor=W;function _u(){}_u.prototype=S,S.h=(function(e){return(0,this.eN)(e)}),new T().i(W,`scala.runtime.AbstractFunction1.$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28`,{ee:1,b7:1,e:1});function vu(){}S=vu.prototype=new C,S.constructor=vu;function yu(){}yu.prototype=S,S.n=(function(){return`<function1>`}),S.h=(function(e){return this.gf(e,vs().bX)});var bu=new T().i(0,`scala.runtime.Nothing$`,{el:1,t:1,a:1});function xu(){}S=xu.prototype=new ul,S.constructor=xu;function Su(){}Su.prototype=S;function Cu(){}S=Cu.prototype=new fl,S.constructor=Cu;function wu(){}wu.prototype=S;function Tu(){}S=Tu.prototype=new ml,S.constructor=Tu;function Eu(){}Eu.prototype=S;function Du(){}S=Du.prototype=new gl,S.constructor=Du;function Ou(){}Ou.prototype=S;function ku(e,t,n,r){if(this.dm=null,this.dk=!1,this.ce=null,this.dl=null,this.dm=e,this.dk=t,this.ce=n,r===null)throw new J;this.dl=void 0}S=ku.prototype=new C,S.constructor=ku;function Au(){}Au.prototype=S,S.c9=(function(){return this.dl}),S.c3=(function(){return Fr(this)}),S.n=(function(){return Ir(this)}),S.hr=(function(e){try{this.dm.h(e)}catch(e){var t=e instanceof R?e:new Z(e);this.dk?this.cb(new Wf(t)):B().a3(new Wf(t))}}),S.cb=(function(e){try{this.ce.bz(e)?this.ce.h(e):B().a3(e)}catch(n){var t=n instanceof R?n:new Z(n);B().a3(new Gf(t,e))}}),S.bB=(function(e){e.bv(new q((e=>{this.cb(e)})),new q((e=>{this.hr(e)})))}),new T().i(ku,`com.raquo.airstream.core.Observer$$anon$8`,{bh:1,W:1,U:1,a2:1});function ju(e,t,n){if(this.cf=null,this.dn=!1,this.dp=null,this.cf=e,this.dn=t,n===null)throw new J;this.dp=void 0}S=ju.prototype=new C,S.constructor=ju;function Mu(){}Mu.prototype=S,S.c9=(function(){return this.dp}),S.c3=(function(){return Fr(this)}),S.n=(function(){return Ir(this)}),S.cb=(function(e){this.bB(new Bf(e))}),S.bB=(function(e){try{this.cf.bz(e)?this.cf.h(e):e.bv(new q((e=>{B().a3(e)})),new q((e=>void 0)))}catch(n){var t=n instanceof R?n:new Z(n);this.dn&&e.fw()?this.cb(new Wf(t)):e.bv(new q((e=>{B().a3(new Gf(t,e))})),new q((e=>{B().a3(new Wf(t))})))}}),new T().i(ju,`com.raquo.airstream.core.Observer$$anon$9`,{bi:1,W:1,U:1,a2:1});function Nu(e){if(this.dG=null,this.dH=!1,this.fJ=null,e===null)throw new J;na(this)}S=Nu.prototype=new C,S.constructor=Nu;function Pu(){}Pu.prototype=S,S.hZ=(function(){return this.dH||=(this.dG=new Cc(`svg`,!1),!0),this.dG}),new T().i(Nu,`com.raquo.laminar.api.Laminar$svg$`,{bJ:1,c0:1,bT:1,bV:1});function Fu(){this.b2=null,Lu=this,this.b2=new Am}S=Fu.prototype=new C,S.constructor=Fu;function Iu(){}Iu.prototype=S,new T().i(Fu,`com.raquo.laminar.api.package$`,{bM:1,ag:1,ah:1,af:1});var Lu;function G(){return Lu||=new Fu,Lu}function Ru(e,t,n,r){this.dR=null,this.dT=!1,this.dS=null,this.co=null,this.dR=e,this.dT=t,this.dS=n,this.co=r}S=Ru.prototype=new C,S.constructor=Ru;function zu(){}zu.prototype=S,S.gj=(function(e){var t=this.dR,n=t.f()?pa().hO(e,this.dT,this.co):t.u(),r=new q((e=>this.dS.eX(n,e.cx,this.co)));return Ei().cc(e.Y,new q((t=>r.h(new Ea(e,t)))),!1)}),S.a0=(function(e){this.gj(e)}),new T().i(Ru,`com.raquo.laminar.inserters.DynamicInserter`,{c2:1,R:1,c6:1,c3:1});function Bu(e){this.cA=null,this.e4=null,this.cA=Y(),this.e4=D().go(e)}S=Bu.prototype=new C,S.constructor=Bu;function Vu(){}Vu.prototype=S,S.da=(function(){return this.cA}),S.aV=(function(e){this.cA=e}),S.aX=(function(e){}),S.a0=(function(e){Ba().bj(e,this,void 0)}),S.F=(function(){return this.e4}),new T().i(Bu,`com.raquo.laminar.nodes.CommentNode`,{cp:1,Y:1,R:1,a4:1});function Hu(e){this.cD=null,this.bT=null,this.cD=Y(),this.bT=D().gr(e)}S=Hu.prototype=new C,S.constructor=Hu;function Uu(){}Uu.prototype=S,S.da=(function(){return this.cD}),S.aV=(function(e){this.cD=e}),S.aX=(function(e){}),S.a0=(function(e){Ba().bj(e,this,void 0)}),S.i3=(function(){return this.bT.data}),S.F=(function(){return this.bT}),new T().i(Hu,`com.raquo.laminar.nodes.TextNode`,{cv:1,Y:1,R:1,a4:1});function Wu(){}S=Wu.prototype=new C,S.constructor=Wu;function Gu(){}Gu.prototype=S;function Ku(e,t){return e===t}function qu(e){return e?1231:1237}var Ju=new T().i(0,`java.lang.Boolean`,{cH:1,a:1,S:1,M:1},(e=>typeof e==`boolean`));function Yu(e){return e}function Xu(e,t){return t instanceof $n&&e===t.c}var Zu=new T().i(0,`java.lang.Character`,{ap:1,a:1,S:1,M:1},(e=>e instanceof $n)),Qu=class extends H{};function $u(){this.p=null,this.p=``}S=$u.prototype=new C,S.constructor=$u;function ed(){}ed.prototype=S,S.g9=(function(e){var t=qc().he(e,0,e.a.length);return this.p=``+this.p+t,this}),S.n=(function(){return this.p}),S.j=(function(){return this.p.length}),S.fc=(function(e){return this.p.charCodeAt(e)}),new T().i($u,`java.lang.StringBuilder`,{cZ:1,a6:1,an:1,a:1});function td(){}S=td.prototype=new C,S.constructor=td;function nd(){}nd.prototype=S,S.n=(function(){return`<function1>`}),S.bz=(function(e){return!1}),S.gc=(function(e){throw new rf(e)}),S.h=(function(e){this.gc(e)}),new T().i(td,`scala.PartialFunction$$anon$1`,{dk:1,f:1,e:1,a:1});function rd(){}S=rd.prototype=new C,S.constructor=rd;function id(){}id.prototype=S,S.m=(function(){return this}),S.c4=(function(e){return this.bE(e,-1)}),S.bE=(function(e,t){return ou(this,e,t)}),S.n=(function(){return`<iterator>`}),S.bi=(function(e,t,n,r){return xs(this,e,t,n,r)}),S.y=(function(){return-1});function ad(e,t){return e.bZ=t,e}function od(){this.bZ=null}S=od.prototype=new C,S.constructor=od;function sd(){}sd.prototype=S,S.eY=(function(e){return this.bZ.d9(e)}),S.fq=(function(e){return this.bZ.dc(e)}),S.dc=(function(e){return this.fq(e)}),S.d9=(function(e){return this.eY(e)});function cd(e,t){return t>=0&&e.ao(t)>0}function ld(e){return e.ao(0)===0}function ud(e,t){var n=e.y();if(n!==-1)var r=t.y(),i=r!==-1&&n!==r;else var i=!1;return i?!1:su(e.m(),t)}function K(e){this.eQ=null,this.eQ=e}S=K.prototype=new Su,S.constructor=K;function dd(){}dd.prototype=S,S.a6=(function(){return(0,this.eQ)()}),new T().i(K,`scala.scalajs.runtime.AnonFunction0.$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1`,{ev:1,eu:1,b6:1,a7:1});function q(e){this.eR=null,this.eR=e}S=q.prototype=new wu,S.constructor=q;function fd(){}fd.prototype=S,S.h=(function(e){return(0,this.eR)(e)}),new T().i(q,`scala.scalajs.runtime.AnonFunction1.$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab`,{ex:1,ew:1,b7:1,e:1});function pd(e){this.g0=null,this.g0=e}S=pd.prototype=new Eu,S.constructor=pd;function md(){}md.prototype=S,new T().i(pd,`scala.scalajs.runtime.AnonFunction2.$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2`,{ez:1,ey:1,ef:1,dc:1});function hd(e){this.eS=null,this.eS=e}S=hd.prototype=new Ou,S.constructor=hd;function gd(){}gd.prototype=S,S.eX=(function(e,t,n){return(0,this.eS)(e,t,n)}),new T().i(hd,`scala.scalajs.runtime.AnonFunction3.$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491`,{eB:1,eA:1,eg:1,dd:1});function _d(){}S=_d.prototype=new C,S.constructor=_d;function vd(){}vd.prototype=S;function yd(e){e.b1=E().P(P().s(new(Fl.r()).C([]))),e.cm=E().P(P().s(new(Pr.r()).C([]))),e.bO=!1}function bd(e,t,n){var r=oi(),i=(()=>{Cd(e);var r=xd(e,t,n);return t.bB(rm(e)),wd(e),r}),a=!Nl(e);if(r.B||!a)var o=i();else{r.B=!0;try{var o=i()}finally{r.B=!1,ni(r)}}return o}function xd(e,t,n){var r=new Mi(n,new K((()=>{Ml(e,t)})));return e.b1.push(t),r}function Sd(e,t){Wr().hH(e.b1,t)&&Td(e)}function Cd(e){e.bO||=!0}function wd(e){Ed(e)===1&&qf(e)}function Td(e){Nl(e)||(e.bO=!1)}function Ed(e){var t=e.b1.length,n=e.cm;return(t|0)+(n.length|0)|0}function Dd(e){e.dB=Br().gQ(new kd(e),(Br(),!0))}function Od(e,t){var n=new Hf(t);e.dB.bB(n)}function kd(e){if(this.dC=null,e===null)throw new J;this.dC=e}S=kd.prototype=new yu,S.constructor=kd;function Ad(){}Ad.prototype=S,S.h3=(function(e){return!0}),S.gf=(function(e,t){new Yr(new q((t=>{this.dC.hR(e,t)})))}),S.bz=(function(e){return this.h3(e)}),new T().i(kd,`com.raquo.airstream.state.Var$$anon$1`,{bD:1,eh:1,e:1,f:1,a:1});function jd(e){e.cB=new Fi(new K((()=>{e.Y.eV()})),new K((()=>{e.Y.gs()}))),e.at=void 0}function Md(e,t,n){if(e.at===void 0)e.at=E().P(P().s(new(Rl.r()).C([t])));else if(n){var r=e.at;if(r===void 0){var i;throw new Qd(`undefined.get`)}else var i=r;i.unshift(t)}else{var a=e.at;if(a===void 0){var o;throw new Qd(`undefined.get`)}else var o=a;o.push(t)}}function Nd(e,t){var n=e.at;n!==void 0&&n.splice(t,1)}function Pd(e,t){var n=e.at;if(n===void 0)return-1;for(var r=!1,i=0;!r&&i<(n.length|0);){var a=n[i];(a===null?t===null:nr(a,t))?r=!0:i=1+i|0}return r?i:-1}function Fd(e,t){Ld(e,e.b4,t)&&Rd(e,t)}function Id(e,t){var n=e.b4;e.b4=t,Ld(e,n,t)||Rd(e,t)}function Ld(e,t,n){var r=!t.f()&&!t.u().c5().H.f(),i=!n.f()&&!n.u().c5().H.f();return r&&!i}function Rd(e,t){zd(e,t.f()?Y():new X(t.u().c5()))}function zd(e,t){if(t.f())e.cB.gl();else{var n=t.u();e.cB.hT(n)}}function Bd(){}S=Bd.prototype=new Gu,S.constructor=Bd;function Vd(){}Vd.prototype=S;var Hd=class extends Qu{constructor(e){super(),L(this,e,null,!0,!0)}};new T().i(Hd,`java.lang.ArithmeticException`,{cG:1,L:1,I:1,t:1,a:1});var Ud=new T().i(0,`java.lang.Byte`,{cI:1,T:1,a:1,S:1,M:1},(e=>pr(e)));function Wd(e,t){return L(e,t,null,!0,!0),e}var Gd=class extends Qu{};new T().i(Gd,`java.lang.IllegalArgumentException`,{ar:1,L:1,I:1,t:1,a:1});function Kd(e,t){return L(e,t,null,!0,!0),e}var qd=class extends Qu{};new T().i(qd,`java.lang.IndexOutOfBoundsException`,{as:1,L:1,I:1,t:1,a:1});function Jd(){}S=Jd.prototype=new Gu,S.constructor=Jd;function Yd(){}Yd.prototype=S,new T().i(Jd,`java.lang.JSConsoleBasedPrintStream$DummyOutputStream`,{cQ:1,am:1,ak:1,ao:1,al:1});var J=class extends Qu{constructor(){super(),L(this,null,null,!0,!0)}};new T().i(J,`java.lang.NullPointerException`,{cS:1,L:1,I:1,t:1,a:1});var Xd=new T().i(0,`java.lang.Short`,{cU:1,T:1,a:1,S:1,M:1},(e=>mr(e))),Zd=class extends Qu{constructor(e){super(),L(this,e,null,!0,!0)}};new T().i(Zd,`java.lang.UnsupportedOperationException`,{d3:1,L:1,I:1,t:1,a:1});var Qd=class extends Qu{constructor(e){super(),L(this,e,null,!0,!0)}};new T().i(Qd,`java.util.NoSuchElementException`,{d8:1,L:1,I:1,t:1,a:1});function $d(e){return e.cP||=(e.cQ=e.bW===null?`null`:nf(e),!0),e.cQ}function ef(e){return e.cP?e.cQ:$d(e)}function tf(e){var t=e.bW;return`of class `+tr(t)}function nf(e){try{return e.bW+` (`+tf(e)+`)`}catch{return`an instance `+tf(e)}}var rf=class extends Qu{constructor(e){super(),this.cQ=null,this.bW=null,this.cP=!1,this.bW=e,L(this,null,null,!0,!0)}by(){return ef(this)}};new T().i(rf,`scala.MatchError`,{dg:1,L:1,I:1,t:1,a:1});function af(){}S=af.prototype=new C,S.constructor=af;function of(){}of.prototype=S,S.f=(function(){return this===Y()}),S.y=(function(){return this.f()?0:1}),S.gn=(function(e){return!this.f()&&N().A(this.u(),e)}),S.m=(function(){return this.f()?U().v:new mf(this.u())});function sf(e){this.b8=0,this.eG=0,this.eF=null,this.eF=e,this.b8=0,this.eG=e.Q()}S=sf.prototype=new id,S.constructor=sf;function cf(){}cf.prototype=S,S.r=(function(){return this.b8<this.eG}),S.i=(function(){var e=this.eF.R(this.b8);return this.b8=1+this.b8|0,e}),new T().i(sf,`scala.Product$$anon$1`,{dm:1,r:1,s:1,b:1,c:1});function lf(e){this.bY=null,nu(this,e)}S=lf.prototype=new iu,S.constructor=lf;function uf(){}uf.prototype=S,new T().i(lf,`scala.collection.ClassTagSeqFactory$AnySeqDelegate`,{dA:1,dz:1,Z:1,a:1,a8:1});function df(e){return bs(e,e.aS()+`(`,`, `,`)`)}function ff(){}S=ff.prototype=new id,S.constructor=ff;function pf(){}pf.prototype=S,S.r=(function(){return!1}),S.hg=(function(){throw new Qd(`next on empty iterator`)}),S.y=(function(){return 0}),S.bE=(function(e,t){return this}),S.i=(function(){this.hg()}),new T().i(ff,`scala.collection.Iterator$$anon$19`,{dF:1,r:1,s:1,b:1,c:1});function mf(e){this.ba=!1,this.eJ=null,this.eJ=e,this.ba=!1}S=mf.prototype=new id,S.constructor=mf;function hf(){}hf.prototype=S,S.r=(function(){return!this.ba}),S.i=(function(){return this.ba?U().v.i():(this.ba=!0,this.eJ)}),S.bE=(function(e,t){return this.ba||e>0||t===0?U().v:this}),new T().i(mf,`scala.collection.Iterator$$anon$20`,{dG:1,r:1,s:1,b:1,c:1});function gf(e){for(;;){if(e.D instanceof vf){var t=e.D;e.D=t.D,e.ad=t.ad,t.N!==null&&(e.M===null&&(e.M=t.M),t.M.bb=e.N,e.N=t.N);continue}return}}function _f(e){for(;;)if(e.N===null)return e.D=null,e.M=null,!1;else{if(e.D=e.N.gZ(),e.M===e.N&&(e.M=e.M.bb),e.N=e.N.bb,gf(e),e.ad)return!0;if(e.D!==null&&e.D.r())return e.ad=!0,!0}}function vf(e){this.D=null,this.N=null,this.M=null,this.ad=!1,this.D=e,this.N=null,this.M=null,this.ad=!1}S=vf.prototype=new id,S.constructor=vf;function yf(){}yf.prototype=S,S.r=(function(){return this.ad?!0:this.D===null?!1:this.D.r()?(this.ad=!0,!0):_f(this)}),S.i=(function(){return this.r()?(this.ad=!1,this.D.i()):U().v.i()}),S.gm=(function(e){var t=new Ss(e,null);return this.N===null?(this.N=t,this.M=t):(this.M.bb=t,this.M=t),this.D===null&&(this.D=U().v),this}),new T().i(vf,`scala.collection.Iterator$ConcatIterator`,{aC:1,r:1,s:1,b:1,c:1});function bf(e){for(;e.a5>0;)e.ae.r()?(e.ae.i(),e.a5=-1+e.a5|0):e.a5=0}function xf(e,t){if(e.J<0)return-1;var n=e.J-t|0;return n<0?0:n}function Sf(e,t,n){this.ae=null,this.J=0,this.a5=0,this.ae=e,this.J=n,this.a5=t}S=Sf.prototype=new id,S.constructor=Sf;function Cf(){}Cf.prototype=S,S.y=(function(){var e=this.ae.y();if(e<0)return-1;var t=e-this.a5|0,n=t<0?0:t;if(this.J<0)return n;var r=this.J;return r<n?r:n}),S.r=(function(){return bf(this),this.J!==0&&this.ae.r()}),S.i=(function(){return bf(this),this.J>0?(this.J=-1+this.J|0,this.ae.i()):this.J<0?this.ae.i():U().v.i()}),S.bE=(function(e,t){var n=e>0?e:0;if(t<0)var r=xf(this,n);else if(t<=n)var r=0;else if(this.J<0)var r=t-n|0;else var i=xf(this,n),a=t-n|0,r=i<a?i:a;var o=this.a5+n|0;return r===0?U().v:o<0?(this.a5=2147483647,this.J=0,au(this,new hu((()=>new Sf(this.ae,-2147483647+o|0,r))))):(this.a5=o,this.J=r,this)}),new T().i(Sf,`scala.collection.Iterator$SliceIterator`,{dI:1,r:1,s:1,b:1,c:1});function wf(e,t){return t>=0&&e.ao(t)>0}function Tf(e,t){if(t<0)throw Kd(new qd,``+t);var n=e.gB(t);if(n.f())throw Kd(new qd,``+t);return n.a7()}function Ef(e,t){return Tm(t)?Df(e,e,t):ud(e,t)}function Df(e,t,n){for(;;)if(t===n)return!0;else if(!t.f()&&!n.f()&&N().A(t.a7(),n.a7())){var r=t.X(),i=n.X();t=r,n=i}else return t.f()&&n.f()}function Of(e){this.bd=null,this.bd=e}S=Of.prototype=new id,S.constructor=Of;function kf(){}kf.prototype=S,S.r=(function(){return!this.bd.f()}),S.i=(function(){var e=this.bd.a7();return this.bd=this.bd.X(),e}),new T().i(Of,`scala.collection.StrictOptimizedLinearSeqOps$$anon$1`,{dN:1,r:1,s:1,b:1,c:1});function Af(){this.bZ=null,ad(this,zf())}S=Af.prototype=new sd,S.constructor=Af;function jf(){}jf.prototype=S,new T().i(Af,`scala.collection.mutable.Buffer$`,{dX:1,dK:1,a8:1,Z:1,a:1});var Mf;function Nf(){return Mf||=new Af,Mf}function Pf(e){this.bf=0,this.eO=0,this.eP=null,this.eP=e,this.bf=0,this.eO=e.Q()}S=Pf.prototype=new id,S.constructor=Pf;function Ff(){}Ff.prototype=S,S.r=(function(){return this.bf<this.eO}),S.i=(function(){var e=this.eP.R(this.bf);return this.bf=1+this.bf|0,e}),new T().i(Pf,`scala.runtime.ScalaRunTime$$anon$1`,{ep:1,r:1,s:1,b:1,c:1});function If(){}S=If.prototype=new C,S.constructor=If;function Lf(){}Lf.prototype=S,S.d9=(function(e){return this.fr(e)}),S.fr=(function(e){return cl(qh(new Jh),e).fF()}),S.dc=(function(e){return this.fr(e)}),new T().i(If,`scala.scalajs.js.WrappedArray$`,{es:1,dO:1,a8:1,Z:1,a:1});var Rf;function zf(){return Rf||=new If,Rf}function Bf(e){this.bg=null,this.bg=e}S=Bf.prototype=new vd,S.constructor=Bf;function Vf(){}Vf.prototype=S,S.fv=(function(){return!0}),S.fw=(function(){return!1}),S.bv=(function(e,t){return e.h(this.bg)}),S.S=(function(){return`Failure`}),S.Q=(function(){return 1}),S.R=(function(e){return e===0?this.bg:F().aE(e)}),S.a2=(function(){return new Pf(this)}),S.l=(function(){return z().aU(this,-889275714,!1)}),S.n=(function(){return P().d5(this)}),S.e=(function(e){if(this===e)return!0;if(e instanceof Bf){var t=this.bg,n=e.bg;return t===null?n===null:t.e(n)}else return!1}),new T().i(Bf,`scala.util.Failure`,{b9:1,bb:1,N:1,d:1,a:1});function Hf(e){this.bh=null,this.bh=e}S=Hf.prototype=new vd,S.constructor=Hf;function Uf(){}Uf.prototype=S,S.fv=(function(){return!1}),S.fw=(function(){return!0}),S.bv=(function(e,t){try{return t.h(this.bh)}catch(t){var n=t instanceof R?t:new Z(t);if(Ys().ge(n))return e.h(n);throw n instanceof Z?n.z:n}}),S.S=(function(){return`Success`}),S.Q=(function(){return 1}),S.R=(function(e){return e===0?this.bh:F().aE(e)}),S.a2=(function(){return new Pf(this)}),S.l=(function(){return z().aU(this,-889275714,!1)}),S.n=(function(){return P().d5(this)}),S.e=(function(e){return this===e||e instanceof Hf&&N().A(this.bh,e.bh)}),new T().i(Hf,`scala.util.Success`,{ba:1,bb:1,N:1,d:1,a:1});var Wf=class e extends El{constructor(e){super(),this.aY=null,this.aY=e,L(this,`ObserverError: `+B().c7(e),null,!0,!0)}a2(){return new sf(this)}l(){return z().aU(this,-889275714,!1)}e(t){if(this===t)return!0;if(t instanceof e){var n=this.aY,r=t.aY;return n===null?r===null:n.e(r)}else return!1}Q(){return 1}S(){return`ObserverError`}R(e){if(e===0)return this.aY;throw Kd(new qd,``+e)}n(){return`ObserverError: `+this.aY}};new T().i(Wf,`com.raquo.airstream.core.AirstreamError$ObserverError`,{aa:1,a1:1,t:1,a:1,d:1,N:1});var Gf=class e extends El{constructor(e,t){super(),this.b0=null,this.aZ=null,this.b0=e,this.aZ=t,L(this,`ObserverErrorHandlingError: `+B().c7(e)+`; cause: `+B().c7(t),null,!0,!0),this.h1(t)}a2(){return new sf(this)}l(){return z().aU(this,-889275714,!1)}e(t){if(this===t)return!0;if(t instanceof e){var n=this.b0,r=t.b0;if(n===null?r===null:n.e(r)){var i=this.aZ,a=t.aZ;return i===null?a===null:i.e(a)}else return!1}else return!1}Q(){return 2}S(){return`ObserverErrorHandlingError`}R(e){if(e===0)return this.b0;if(e===1)return this.aZ;throw Kd(new qd,``+e)}n(){return`ObserverErrorHandlingError: `+this.b0+`; cause: `+this.aZ}};new T().i(Gf,`com.raquo.airstream.core.AirstreamError$ObserverErrorHandlingError`,{ab:1,a1:1,t:1,a:1,d:1,N:1});var Kf=class e extends El{constructor(e,t){super(),this.aG=null,this.aF=0,this.aG=e,this.aF=t,L(this,`Transaction depth exceeded maxDepth = `+t+`: Execution of `+e+" aborted. See `Transaction.maxDepth`.",null,!0,!0)}a2(){return new sf(this)}l(){var e=-889275714;return e=F().b(e,sp(`TransactionDepthExceeded`)),e=F().b(e,F().w(this.aG)),e=F().b(e,this.aF),F().k(e,2)}e(t){return this===t?!0:t instanceof e&&this.aF===t.aF?this.aG===t.aG:!1}Q(){return 2}S(){return`TransactionDepthExceeded`}R(e){if(e===0)return this.aG;if(e===1)return this.aF;throw Kd(new qd,``+e)}n(){return`TransactionDepthExceeded: `+this.aG+`; maxDepth: `+this.aF}};new T().i(Kf,`com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded`,{ac:1,a1:1,t:1,a:1,d:1,N:1});function qf(e){rm(e)}function Jf(e){this.dz=null,this.dB=null,this.cl=null,this.ck=null,this.dA=null,this.dz=void 0,Dd(this),this.cl=e,this.ck=new _m(this.cl,new K((()=>Ir(this)))),this.dA=this.ck}S=Jf.prototype=new C,S.constructor=Jf;function Yf(){}Yf.prototype=S,S.c9=(function(){return this.dz}),S.c3=(function(){return Fr(this)}),S.n=(function(){return Ir(this)}),S.hR=(function(e,t){this.cl=e,im(this.ck,e,t)}),new T().i(Jf,`com.raquo.airstream.state.SourceVar`,{bz:1,ad:1,ae:1,W:1,U:1,bB:1});function Xf(e,t){this.b4=null,this.Y=null,this.cB=null,this.at=null,this.e5=null,this.Z=null,this.e5=e,this.Z=t,this.b4=Y(),yc(this),jd(this)}S=Xf.prototype=new C,S.constructor=Xf;function Zf(){}Zf.prototype=S,S.da=(function(){return this.b4}),S.a0=(function(e){Ba().bj(e,this,void 0)}),S.c5=(function(){return this.Y}),S.fe=(function(e){this.Y=e}),S.aX=(function(e){Fd(this,e)}),S.aV=(function(e){Id(this,e)}),S.n=(function(){return`ReactiveHtmlElement(`+(this.Z===null?`tag=`+this.e5.de():this.Z.outerHTML)+`)`}),S.F=(function(){return this.Z}),new T().i(Xf,`com.raquo.laminar.nodes.ReactiveHtmlElement`,{ct:1,Y:1,R:1,a4:1,ai:1,cr:1});function Qf(e,t){return Object.is(e,t)}function $f(e){return so().df(e)}var ep=new T().i(0,`java.lang.Double`,{aq:1,T:1,a:1,S:1,M:1,V:1},(e=>typeof e==`number`)),tp=new T().i(0,`java.lang.Float`,{cL:1,T:1,a:1,S:1,M:1,V:1},(e=>gr(e))),np=new T().i(0,`java.lang.Integer`,{cN:1,T:1,a:1,S:1,M:1,V:1},(e=>hr(e)));function rp(e,t){return t instanceof j&&e.c===t.c&&e.d===t.d}function ip(e){return e.c^e.d}var ap=new T().i(0,`java.lang.Long`,{at:1,T:1,a:1,S:1,M:1,V:1},(e=>e instanceof j)),op=class extends Gd{constructor(e){super(),L(this,e,null,!0,!0)}};new T().i(op,`java.lang.NumberFormatException`,{cT:1,ar:1,L:1,I:1,t:1,a:1});function sp(e){for(var t=0,n=1,r=-1+e.length|0;r>=0;)t=t+Math.imul(e.charCodeAt(r),n)|0,n=Math.imul(31,n),r=-1+r|0;return t}function cp(e,t){return e===t}var lp=new T().i(0,`java.lang.String`,{cX:1,a:1,S:1,a6:1,M:1,V:1},(e=>typeof e==`string`)),up=class extends qd{constructor(){super(),L(this,null,null,!0,!0)}};new T().i(up,`java.lang.StringIndexOutOfBoundsException`,{d0:1,as:1,L:1,I:1,t:1,a:1});function dp(){}S=dp.prototype=new of,S.constructor=dp;function fp(){}fp.prototype=S,S.gR=(function(){throw new Qd(`None.get`)}),S.S=(function(){return`None`}),S.Q=(function(){return 0}),S.R=(function(e){return F().aE(e)}),S.a2=(function(){return new Pf(this)}),S.l=(function(){return 2433880}),S.n=(function(){return`None`}),S.u=(function(){this.gR()}),new T().i(dp,`scala.None$`,{dh:1,ax:1,b:1,N:1,d:1,a:1});var pp;function Y(){return pp||=new dp,pp}function X(e){this.b9=null,this.b9=e}S=X.prototype=new of,S.constructor=X;function mp(){}mp.prototype=S,S.u=(function(){return this.b9}),S.S=(function(){return`Some`}),S.Q=(function(){return 1}),S.R=(function(e){return e===0?this.b9:F().aE(e)}),S.a2=(function(){return new Pf(this)}),S.l=(function(){return z().aU(this,-889275714,!1)}),S.n=(function(){return P().d5(this)}),S.e=(function(e){return this===e||e instanceof X&&N().A(this.b9,e.b9)}),new T().i(X,`scala.Some`,{ay:1,ax:1,b:1,N:1,d:1,a:1});function hp(){}S=hp.prototype=new C,S.constructor=hp;function gp(){}gp.prototype=S,S.aS=(function(){return this.aW()}),S.bw=(function(e){ys(this,e)}),S.bi=(function(e,t,n,r){return xs(this,e,t,n,r)}),S.y=(function(){return-1});function _p(e,t){return e.I=t,e.g=0,e.C=$o().bx(e.I),e}function vp(){this.I=null,this.g=0,this.C=0}S=vp.prototype=new id,S.constructor=vp;function yp(){}yp.prototype=S,S.y=(function(){return this.C-this.g|0}),S.r=(function(){return this.g<this.C}),S.i=(function(){this.g>=$o().bx(this.I)&&U().v.i();var e=P().aR(this.I,this.g);return this.g=1+this.g|0,e}),S.c4=(function(e){if(e>0){var t=this.g+e|0;if(t<0)var n=this.C;else var r=this.C,n=r<t?r:t;this.g=n}return this}),new T().i(vp,`scala.collection.ArrayOps$ArrayIterator`,{O:1,r:1,s:1,b:1,c:1,a:1});function bp(e,t){return t<0?0:t>e.T?e.T:t}function xp(e){this.eI=null,this.ac=0,this.T=0,this.eI=e,this.ac=0,this.T=e.j()}S=xp.prototype=new id,S.constructor=xp;function Sp(){}Sp.prototype=S,S.y=(function(){return this.T}),S.r=(function(){return this.T>0}),S.i=(function(){if(this.T>0){var e=this.eI.o(this.ac);return this.ac=1+this.ac|0,this.T=-1+this.T|0,e}else return U().v.i()}),S.c4=(function(e){if(e>0){this.ac=this.ac+e|0;var t=this.T-e|0;this.T=t<0?0:t}return this}),S.bE=(function(e,t){var n=bp(this,e),r=bp(this,t)-n|0;return this.T=r<0?0:r,this.ac=this.ac+n|0,this}),new T().i(xp,`scala.collection.IndexedSeqView$IndexedSeqViewIterator`,{dD:1,r:1,s:1,b:1,c:1,a:1});function Cp(e){return e.d1||=(e.d2=new oh(new w(0)),!0),e.d2}function wp(e){return e.d1?e.d2:Cp(e)}function Tp(){this.d2=null,this.fY=null,this.d1=!1,Dp=this,this.fY=new lf(this)}S=Tp.prototype=new C,S.constructor=Tp;function Ep(){}Ep.prototype=S,S.gO=(function(e,t){return e instanceof Um?e:this.i8(Zc().fp(e,t))}),S.i8=(function(e){if(e===null)return null;if(e instanceof w)return new oh(e);if(e instanceof Er)return new nh(e);if(e instanceof kr)return new Qm(e);if(e instanceof Dr)return new ih(e);if(e instanceof Or)return new eh(e);if(e instanceof Cr)return new Xm(e);if(e instanceof wr)return new Jm(e);if(e instanceof Tr)return new ch(e);if(e instanceof Sr)return new Km(e);if(qo(e,1))return new uh(e);throw new rf(e)}),S.db=(function(e,t){return this.gO(e,t)}),new T().i(Tp,`scala.collection.immutable.ArraySeq$`,{dR:1,aE:1,aA:1,az:1,aB:1,a:1});var Dp;function Op(){return Dp||=new Tp,Dp}function kp(){this.fZ=null,this.eL=null,jp=this,this.fZ=new lf(this),this.eL=new Ah(new w(0))}S=kp.prototype=new C,S.constructor=kp;function Ap(){}Ap.prototype=S,S.gP=(function(e,t){return this.h8(Zc().fp(e,t))}),S.h8=(function(e){if(e===null)return null;if(e instanceof w)return new Ah(e);if(e instanceof Er)return new Eh(e);if(e instanceof kr)return new Sh(e);if(e instanceof Dr)return new Oh(e);if(e instanceof Or)return new wh(e);if(e instanceof Cr)return new bh(e);if(e instanceof wr)return new vh(e);if(e instanceof Tr)return new Mh(e);if(e instanceof Sr)return new gh(e);if(qo(e,1))return new Ph(e);throw new rf(e)}),S.db=(function(e,t){return this.gP(e,t)}),new T().i(kp,`scala.collection.mutable.ArraySeq$`,{dV:1,aE:1,aA:1,az:1,aB:1,a:1});var jp;function Mp(){return jp||=new kp,jp}function Np(){}S=Np.prototype=new Vd,S.constructor=Np;function Pp(){}Pp.prototype=S;function Fp(e){this.I=null,this.g=0,this.C=0,this.cR=null,this.cR=e,_p(this,e)}S=Fp.prototype=new yp,S.constructor=Fp;function Ip(){}Ip.prototype=S,S.hh=(function(){this.g>=this.cR.a.length&&U().v.i();var e=this.cR.a[this.g];return this.g=1+this.g|0,e}),S.i=(function(){return this.hh()}),new T().i(Fp,`scala.collection.ArrayOps$ArrayIterator$mcB$sp`,{dq:1,O:1,r:1,s:1,b:1,c:1,a:1});function Lp(e){this.I=null,this.g=0,this.C=0,this.cS=null,this.cS=e,_p(this,e)}S=Lp.prototype=new yp,S.constructor=Lp;function Rp(){}Rp.prototype=S,S.hi=(function(){this.g>=this.cS.a.length&&U().v.i();var e=this.cS.a[this.g];return this.g=1+this.g|0,e}),S.i=(function(){return _r(this.hi())}),new T().i(Lp,`scala.collection.ArrayOps$ArrayIterator$mcC$sp`,{dr:1,O:1,r:1,s:1,b:1,c:1,a:1});function zp(e){this.I=null,this.g=0,this.C=0,this.cT=null,this.cT=e,_p(this,e)}S=zp.prototype=new yp,S.constructor=zp;function Bp(){}Bp.prototype=S,S.hj=(function(){this.g>=this.cT.a.length&&U().v.i();var e=this.cT.a[this.g];return this.g=1+this.g|0,e}),S.i=(function(){return this.hj()}),new T().i(zp,`scala.collection.ArrayOps$ArrayIterator$mcD$sp`,{ds:1,O:1,r:1,s:1,b:1,c:1,a:1});function Vp(e){this.I=null,this.g=0,this.C=0,this.cU=null,this.cU=e,_p(this,e)}S=Vp.prototype=new yp,S.constructor=Vp;function Hp(){}Hp.prototype=S,S.hk=(function(){this.g>=this.cU.a.length&&U().v.i();var e=this.cU.a[this.g];return this.g=1+this.g|0,e}),S.i=(function(){return this.hk()}),new T().i(Vp,`scala.collection.ArrayOps$ArrayIterator$mcF$sp`,{dt:1,O:1,r:1,s:1,b:1,c:1,a:1});function Up(e){this.I=null,this.g=0,this.C=0,this.cV=null,this.cV=e,_p(this,e)}S=Up.prototype=new yp,S.constructor=Up;function Wp(){}Wp.prototype=S,S.hl=(function(){this.g>=this.cV.a.length&&U().v.i();var e=this.cV.a[this.g];return this.g=1+this.g|0,e}),S.i=(function(){return this.hl()}),new T().i(Up,`scala.collection.ArrayOps$ArrayIterator$mcI$sp`,{du:1,O:1,r:1,s:1,b:1,c:1,a:1});function Gp(e){this.I=null,this.g=0,this.C=0,this.cW=null,this.cW=e,_p(this,e)}S=Gp.prototype=new yp,S.constructor=Gp;function Kp(){}Kp.prototype=S,S.hm=(function(){this.g>=this.cW.a.length&&U().v.i();var e=this.cW.a[this.g],t=e.c,n=e.d;return this.g=1+this.g|0,new j(t,n)}),S.i=(function(){return this.hm()}),new T().i(Gp,`scala.collection.ArrayOps$ArrayIterator$mcJ$sp`,{dv:1,O:1,r:1,s:1,b:1,c:1,a:1});function qp(e){this.I=null,this.g=0,this.C=0,this.cX=null,this.cX=e,_p(this,e)}S=qp.prototype=new yp,S.constructor=qp;function Jp(){}Jp.prototype=S,S.hn=(function(){this.g>=this.cX.a.length&&U().v.i();var e=this.cX.a[this.g];return this.g=1+this.g|0,e}),S.i=(function(){return this.hn()}),new T().i(qp,`scala.collection.ArrayOps$ArrayIterator$mcS$sp`,{dw:1,O:1,r:1,s:1,b:1,c:1,a:1});function Yp(e){this.I=null,this.g=0,this.C=0,this.eH=null,this.eH=e,_p(this,e)}S=Yp.prototype=new yp,S.constructor=Yp;function Xp(){}Xp.prototype=S,S.ho=(function(){this.g>=this.eH.a.length&&U().v.i(),this.g=1+this.g|0}),S.i=(function(){this.ho()}),new T().i(Yp,`scala.collection.ArrayOps$ArrayIterator$mcV$sp`,{dx:1,O:1,r:1,s:1,b:1,c:1,a:1});function Zp(e){this.I=null,this.g=0,this.C=0,this.cY=null,this.cY=e,_p(this,e)}S=Zp.prototype=new yp,S.constructor=Zp;function Qp(){}Qp.prototype=S,S.hp=(function(){this.g>=this.cY.a.length&&U().v.i();var e=this.cY.a[this.g];return this.g=1+this.g|0,e}),S.i=(function(){return this.hp()}),new T().i(Zp,`scala.collection.ArrayOps$ArrayIterator$mcZ$sp`,{dy:1,O:1,r:1,s:1,b:1,c:1,a:1});function $p(e){return e.aS()+`(<not computed>)`}function em(){}S=em.prototype=new C,S.constructor=em;function tm(){}tm.prototype=S;var Z=class e extends Qu{constructor(e){super(),this.z=null,this.z=e,L(this,null,null,!0,!0)}by(){return ir(this.z)}S(){return`JavaScriptException`}Q(){return 1}R(e){return e===0?this.z:F().aE(e)}a2(){return new Pf(this)}l(){return z().aU(this,-889275714,!1)}e(t){return this===t||t instanceof e&&N().A(this.z,t.z)}};new T().i(Z,`scala.scalajs.js.JavaScriptException`,{b8:1,L:1,I:1,t:1,a:1,N:1,d:1});function nm(e,t){e.bM!==void 0&&Jr().fx(),e.bM=t}function rm(e){var t=e.bM;if(t===void 0){Jr().fx();var n=rm(e);nm(e,n);var r=n}else var r=t;return r}function im(e,t,n){nm(e,t);var r=t.fv(),i=!1;i=!1,e.bL=!1;for(var a=e.b1,o=0;o<(a.length|0);){var s=a[o];o=1+o|0,s.bB(t),r&&!i&&(i=!0)}for(var c=e.cm,l=0;l<(c.length|0);)c[l],l=1+l|0,r&&!i&&(i=!0);e.bL=!0;var u=e.bN;if(u!==void 0){for(var d=0,f=u.length|0;d<f;)u[d].a6(),d=1+d|0;u.length=0}r&&!i&&t.bv(new q((e=>{B().a3(e)})),new q((e=>void 0)))}function am(e,t){typeof console<`u`&&(e.ex&&console.error?console.error(t):console.log(t))}function om(e){this.ex=!1,this.b6=null,this.ex=e,new Jd,this.b6=``}S=om.prototype=new Pp,S.constructor=om;function sm(){}sm.prototype=S,S.h5=(function(e){for(var t=e;t!==``;){var n=t.indexOf(`
`)|0;if(n<0)this.b6=``+this.b6+t,t=``;else{var r=this.b6,i=t;am(this,``+r+i.substring(0,n)),this.b6=``;var a=t,o=1+n|0;t=a.substring(o)}}}),new T().i(om,`java.lang.JSConsoleBasedPrintStream`,{cP:1,cF:1,cE:1,am:1,ak:1,ao:1,al:1,an:1});function cm(e,t,n){for(;;)if(t<=0||n.f())return n;else{var r=-1+t|0,i=n.X();t=r,n=i}}function lm(){this.d3=null}S=lm.prototype=new tm,S.constructor=lm;function um(){}um.prototype=S,S.n=(function(){return this.d3}),S.e=(function(e){return this===e}),S.l=(function(){return fr(this)});function dm(){}S=dm.prototype=new gp,S.constructor=dm;function fm(){}fm.prototype=S,S.n=(function(){return $p(this)});function pm(){this.d3=null,this.d3=`Any`}S=pm.prototype=new um,S.constructor=pm;function mm(){}mm.prototype=S,S.hP=(function(){return Ar.l()}),S.hf=(function(e){return new w(e)}),new T().i(pm,`scala.reflect.ManifestFactory$AnyManifest$`,{e9:1,eb:1,ea:1,e8:1,e7:1,e6:1,ec:1,a:1,d:1});var hm;function gm(){return hm||=new pm,hm}function _m(e,t){this.dD=null,this.bL=!1,this.bN=null,this.b1=null,this.cm=null,this.bO=!1,this.bM=null,this.dE=null,this.dE=t,this.dD=void 0,Al(this),yd(this),this.bM=void 0,nm(this,e)}S=_m.prototype=new C,S.constructor=_m;function vm(){}vm.prototype=S,S.c9=(function(){return this.dD}),S.n=(function(){return Ir(this)}),S.e=(function(e){return this===e}),S.l=(function(){return fr(this)}),S.c3=(function(){return this.dE.a6()+`.signal`}),new T().i(_m,`com.raquo.airstream.state.VarSignal`,{bE:1,ad:1,U:1,bd:1,bf:1,ae:1,bk:1,bq:1,br:1,bA:1});function Q(e,t){return e===t?!0:ym(t)&&t.fb(e)?e.dh(t):!1}function ym(e){return!!(e&&e.$classData&&e.$classData.n.g)}function bm(){}S=bm.prototype=new gp,S.constructor=bm;function xm(){}xm.prototype=S,S.fb=(function(e){return!0}),S.e=(function(e){return Q(this,e)}),S.l=(function(){return z().hQ(this)}),S.n=(function(){return df(this)}),S.fu=(function(e){return cd(this,e)}),S.f=(function(){return ld(this)}),S.dh=(function(e){return ud(this,e)}),S.bz=(function(e){return this.fu(e|0)});function Sm(){}S=Sm.prototype=new fm,S.constructor=Sm;function Cm(){}Cm.prototype=S;function wm(e){return!!(e&&e.$classData&&e.$classData.n.n)}function Tm(e){return!!(e&&e.$classData&&e.$classData.n.a0)}function Em(e){e.fM=Ja()}function Dm(e,t){return e.bc=t,e}function Om(){this.bc=null}S=Om.prototype=new Cm,S.constructor=Om;function km(){}km.prototype=S,S.o=(function(e){return this.bc.o(e)}),S.j=(function(){return this.bc.j()}),S.f=(function(){return this.bc.f()});function Am(){this.dL=null,this.dM=!1,this.dJ=null,this.dK=!1,this.fL=null,this.dI=null,this.fK=null,this.dN=null,this.dO=!1,this.fM=null,ea(this),Yi(this),qi(this),Ji(this),Em(this)}S=Am.prototype=new C,S.constructor=Am;function jm(){}jm.prototype=S,S.hw=(function(){return this.dM||=(this.dL=bc(new xc,`p`,!1),!0),this.dL}),S.gy=(function(){return this.dK||=(this.dJ=bc(new xc,`div`,!1),!0),this.dJ}),S.hY=(function(){return this.dO||=(this.dN=new Nu(this),!0),this.dN}),new T().i(Am,`com.raquo.laminar.api.package$$anon$1`,{bN:1,bZ:1,bS:1,bX:1,bW:1,bY:1,bU:1,bL:1,bH:1,bK:1,ag:1,ah:1,af:1,bI:1});function Mm(e){this.bc=null,Dm(this,e)}S=Mm.prototype=new km,S.constructor=Mm;function Nm(){}Nm.prototype=S,S.m=(function(){return new xp(this)}),S.aW=(function(){return`IndexedSeqView`}),S.ao=(function(e){var t=this.j();return t===e?0:t<e?-1:1}),S.y=(function(){return this.j()}),new T().i(Mm,`scala.collection.IndexedSeqView$Id`,{dC:1,dM:1,dn:1,dp:1,h:1,i:1,b:1,k:1,c:1,j:1,dP:1,a:1,dL:1,l:1,dB:1,o:1});function Pm(){}S=Pm.prototype=new xm,S.constructor=Pm;function Fm(){}Fm.prototype=S;function Im(e,t){return!Rm(t)||e.j()===t.j()}function Lm(e,t){if(Rm(t)){if(e===t)return!0;var n=e.j(),r=n===t.j();if(r){var i=0,a=e.eZ(),o=t.eZ(),s=a<o?a:o,c=n>>31,l=s>>31,u=s<<1,d=s>>>31|0|l<<1;if(c===d?(-2147483648^n)>(-2147483648^u):c>d)var f=s;else var f=n;for(;i<f&&r;)r=N().A(e.o(i),t.o(i)),i=1+i|0;if(i<n&&r)for(var p=e.m().c4(i),m=t.m().c4(i);r&&p.r();)r=N().A(p.i(),m.i())}return r}else return ud(e,t)}function Rm(e){return!!(e&&e.$classData&&e.$classData.n.w)}function zm(){}S=zm.prototype=new xm,S.constructor=zm;function Bm(){}Bm.prototype=S;function Vm(){}S=Vm.prototype=new Bm,S.constructor=Vm;function Hm(){}Hm.prototype=S,S.eW=(function(e){return cl(this,e)});function Um(){}S=Um.prototype=new Fm,S.constructor=Um;function Wm(){}Wm.prototype=S,S.fb=(function(e){return Im(this,e)}),S.dh=(function(e){return Lm(this,e)}),S.aW=(function(){return`IndexedSeq`}),S.ao=(function(e){var t=this.j();return t===e?0:t<e?-1:1}),S.y=(function(){return this.j()}),S.aS=(function(){return`ArraySeq`}),S.eZ=(function(){return 2147483647});function $(){}S=$.prototype=new Bm,S.constructor=$;function Gm(){}Gm.prototype=S,S.aW=(function(){return`IndexedSeq`}),S.ao=(function(e){var t=this.j();return t===e?0:t<e?-1:1}),S.y=(function(){return this.j()}),S.aS=(function(){return`ArraySeq`}),S.e=(function(e){return e instanceof $&&$o().bx(this.U())!==$o().bx(e.U())?!1:Q(this,e)});function Km(e){this.au=null,this.au=e}S=Km.prototype=new Wm,S.constructor=Km;function qm(){}qm.prototype=S,S.j=(function(){return this.au.a.length}),S.l=(function(){var e=z();return e.f9(this.au,e.t)}),S.e=(function(e){return e instanceof Km?A().fn(this.au,e.au):Q(this,e)}),S.m=(function(){return new Zp(this.au)}),S.bu=(function(e){return this.au.a[e]}),S.h=(function(e){return this.bu(e|0)}),S.o=(function(e){return this.bu(e)}),new T().i(Km,`scala.collection.immutable.ArraySeq$ofBoolean`,{aH:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,Q:1,A:1,q:1,p:1,P:1,a:1});function Jm(e){this.av=null,this.av=e}S=Jm.prototype=new Wm,S.constructor=Jm;function Ym(){}Ym.prototype=S,S.j=(function(){return this.av.a.length}),S.bk=(function(e){return this.av.a[e]}),S.l=(function(){var e=z();return e.f1(this.av,e.t)}),S.e=(function(e){return e instanceof Jm?A().fg(this.av,e.av):Q(this,e)}),S.m=(function(){return new Fp(this.av)}),S.h=(function(e){return this.bk(e|0)}),S.o=(function(e){return this.bk(e)}),new T().i(Jm,`scala.collection.immutable.ArraySeq$ofByte`,{aI:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,Q:1,A:1,q:1,p:1,P:1,a:1});function Xm(e){this.af=null,this.af=e}S=Xm.prototype=new Wm,S.constructor=Xm;function Zm(){}Zm.prototype=S,S.j=(function(){return this.af.a.length}),S.bl=(function(e){return this.af.a[e]}),S.l=(function(){var e=z();return e.f2(this.af,e.t)}),S.e=(function(e){return e instanceof Xm?A().fh(this.af,e.af):Q(this,e)}),S.m=(function(){return new Lp(this.af)}),S.bi=(function(e,t,n,r){return new bh(this.af).bi(e,t,n,r)}),S.h=(function(e){return _r(this.bl(e|0))}),S.o=(function(e){return _r(this.bl(e))}),new T().i(Xm,`scala.collection.immutable.ArraySeq$ofChar`,{aJ:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,Q:1,A:1,q:1,p:1,P:1,a:1});function Qm(e){this.aw=null,this.aw=e}S=Qm.prototype=new Wm,S.constructor=Qm;function $m(){}$m.prototype=S,S.j=(function(){return this.aw.a.length}),S.l=(function(){var e=z();return e.f3(this.aw,e.t)}),S.e=(function(e){return e instanceof Qm?A().fi(this.aw,e.aw):Q(this,e)}),S.m=(function(){return new zp(this.aw)}),S.bp=(function(e){return this.aw.a[e]}),S.h=(function(e){return this.bp(e|0)}),S.o=(function(e){return this.bp(e)}),new T().i(Qm,`scala.collection.immutable.ArraySeq$ofDouble`,{aK:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,Q:1,A:1,q:1,p:1,P:1,a:1});function eh(e){this.ax=null,this.ax=e}S=eh.prototype=new Wm,S.constructor=eh;function th(){}th.prototype=S,S.j=(function(){return this.ax.a.length}),S.l=(function(){var e=z();return e.f4(this.ax,e.t)}),S.e=(function(e){return e instanceof eh?A().fj(this.ax,e.ax):Q(this,e)}),S.m=(function(){return new Vp(this.ax)}),S.bq=(function(e){return this.ax.a[e]}),S.h=(function(e){return this.bq(e|0)}),S.o=(function(e){return this.bq(e)}),new T().i(eh,`scala.collection.immutable.ArraySeq$ofFloat`,{aL:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,Q:1,A:1,q:1,p:1,P:1,a:1});function nh(e){this.ay=null,this.ay=e}S=nh.prototype=new Wm,S.constructor=nh;function rh(){}rh.prototype=S,S.j=(function(){return this.ay.a.length}),S.l=(function(){var e=z();return e.f5(this.ay,e.t)}),S.e=(function(e){return e instanceof nh?A().fk(this.ay,e.ay):Q(this,e)}),S.m=(function(){return new Up(this.ay)}),S.br=(function(e){return this.ay.a[e]}),S.h=(function(e){return this.br(e|0)}),S.o=(function(e){return this.br(e)}),new T().i(nh,`scala.collection.immutable.ArraySeq$ofInt`,{aM:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,Q:1,A:1,q:1,p:1,P:1,a:1});function ih(e){this.az=null,this.az=e}S=ih.prototype=new Wm,S.constructor=ih;function ah(){}ah.prototype=S,S.j=(function(){return this.az.a.length}),S.l=(function(){var e=z();return e.f6(this.az,e.t)}),S.e=(function(e){return e instanceof ih?A().fl(this.az,e.az):Q(this,e)}),S.m=(function(){return new Gp(this.az)}),S.bs=(function(e){return this.az.a[e]}),S.h=(function(e){return this.bs(e|0)}),S.o=(function(e){return this.bs(e)}),new T().i(ih,`scala.collection.immutable.ArraySeq$ofLong`,{aN:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,Q:1,A:1,q:1,p:1,P:1,a:1});function oh(e){this.aA=null,this.aA=e}S=oh.prototype=new Wm,S.constructor=oh;function sh(){}sh.prototype=S,S.j=(function(){return this.aA.a.length}),S.o=(function(e){return this.aA.a[e]}),S.l=(function(){var e=z();return e.f0(this.aA,e.t)}),S.e=(function(e){return e instanceof oh?Zc().fo(this.aA,e.aA):Q(this,e)}),S.m=(function(){return _p(new vp,this.aA)}),S.h=(function(e){return this.o(e|0)}),new T().i(oh,`scala.collection.immutable.ArraySeq$ofRef`,{aO:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,Q:1,A:1,q:1,p:1,P:1,a:1});function ch(e){this.aB=null,this.aB=e}S=ch.prototype=new Wm,S.constructor=ch;function lh(){}lh.prototype=S,S.j=(function(){return this.aB.a.length}),S.bm=(function(e){return this.aB.a[e]}),S.l=(function(){var e=z();return e.f7(this.aB,e.t)}),S.e=(function(e){return e instanceof ch?A().fm(this.aB,e.aB):Q(this,e)}),S.m=(function(){return new qp(this.aB)}),S.h=(function(e){return this.bm(e|0)}),S.o=(function(e){return this.bm(e)}),new T().i(ch,`scala.collection.immutable.ArraySeq$ofShort`,{aP:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,Q:1,A:1,q:1,p:1,P:1,a:1});function uh(e){this.aQ=null,this.aQ=e}S=uh.prototype=new Wm,S.constructor=uh;function dh(){}dh.prototype=S,S.j=(function(){return this.aQ.a.length}),S.l=(function(){var e=z();return e.f8(this.aQ,e.t)}),S.e=(function(e){return e instanceof uh?this.aQ.a.length===e.aQ.a.length:Q(this,e)}),S.m=(function(){return new Yp(this.aQ)}),S.bt=(function(e){}),S.h=(function(e){this.bt(e|0)}),S.o=(function(e){this.bt(e)}),new T().i(uh,`scala.collection.immutable.ArraySeq$ofUnit`,{aQ:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,Q:1,A:1,q:1,p:1,P:1,a:1});function fh(e,t,n,r){for(;;)if(t===r)return n.f()?0:1;else if(n.f())return-1;else{var i=1+t|0,a=n.X();t=i,n=a}}function ph(e,t,n){for(;;)if(t===n)return!0;else{var r=t.f(),i=n.f();if(!(r||i)&&N().A(t.a7(),n.a7())){var a=t.X(),o=n.X();t=a,n=o}else return r&&i}}function mh(){}S=mh.prototype=new Fm,S.constructor=mh;function hh(){}hh.prototype=S,S.m=(function(){return new Of(this)}),S.aW=(function(){return`LinearSeq`}),S.fu=(function(e){return wf(this,e)}),S.o=(function(e){return Tf(this,e)}),S.dh=(function(e){return Ef(this,e)}),S.f=(function(){return this===Vh()}),S.bw=(function(e){for(var t=this;!t.f();)e.h(t.a7()),t=t.X()}),S.j=(function(){for(var e=this,t=0;!e.f();)t=1+t|0,e=e.X();return t}),S.ao=(function(e){return e<0?1:fh(this,0,this,e)}),S.aS=(function(){return`List`}),S.e=(function(e){return e instanceof mh?ph(this,this,e):Q(this,e)}),S.h=(function(e){return Tf(this,e|0)}),S.bz=(function(e){return wf(this,e|0)}),S.gB=(function(e){return cm(this,e,this)});function gh(e){this.ag=null,this.ag=e}S=gh.prototype=new Gm,S.constructor=gh;function _h(){}_h.prototype=S,S.j=(function(){return this.ag.a.length}),S.l=(function(){var e=z();return e.f9(this.ag,e.t)}),S.e=(function(e){return e instanceof gh?A().fn(this.ag,e.ag):$.prototype.e.call(this,e)}),S.m=(function(){return new Zp(this.ag)}),S.bu=(function(e){return this.ag.a[e]}),S.h=(function(e){return this.bu(e|0)}),S.o=(function(e){return this.bu(e)}),S.U=(function(){return this.ag}),new T().i(gh,`scala.collection.mutable.ArraySeq$ofBoolean`,{aT:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function vh(e){this.ah=null,this.ah=e}S=vh.prototype=new Gm,S.constructor=vh;function yh(){}yh.prototype=S,S.j=(function(){return this.ah.a.length}),S.bk=(function(e){return this.ah.a[e]}),S.l=(function(){var e=z();return e.f1(this.ah,e.t)}),S.e=(function(e){return e instanceof vh?A().fg(this.ah,e.ah):$.prototype.e.call(this,e)}),S.m=(function(){return new Fp(this.ah)}),S.h=(function(e){return this.bk(e|0)}),S.o=(function(e){return this.bk(e)}),S.U=(function(){return this.ah}),new T().i(vh,`scala.collection.mutable.ArraySeq$ofByte`,{aU:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function bh(e){this.O=null,this.O=e}S=bh.prototype=new Gm,S.constructor=bh;function xh(){}xh.prototype=S,S.j=(function(){return this.O.a.length}),S.bl=(function(e){return this.O.a[e]}),S.l=(function(){var e=z();return e.f2(this.O,e.t)}),S.e=(function(e){return e instanceof bh?A().fh(this.O,e.O):$.prototype.e.call(this,e)}),S.m=(function(){return new Lp(this.O)}),S.bi=(function(e,t,n,r){var i=e.K;t.length!==0&&(i.p=``+i.p+t);var a=this.O.a.length;if(a!==0)if(n===``)i.g9(this.O);else{i.j();var o=this.O.a[0],s=``+cr(o);i.p+=s;for(var c=1;c<a;){i.p=``+i.p+n;var l=this.O.a[c],u=``+cr(l);i.p+=u,c=1+c|0}}return r.length!==0&&(i.p=``+i.p+r),e}),S.h=(function(e){return _r(this.bl(e|0))}),S.o=(function(e){return _r(this.bl(e))}),S.U=(function(){return this.O}),new T().i(bh,`scala.collection.mutable.ArraySeq$ofChar`,{aV:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Sh(e){this.ai=null,this.ai=e}S=Sh.prototype=new Gm,S.constructor=Sh;function Ch(){}Ch.prototype=S,S.j=(function(){return this.ai.a.length}),S.l=(function(){var e=z();return e.f3(this.ai,e.t)}),S.e=(function(e){return e instanceof Sh?A().fi(this.ai,e.ai):$.prototype.e.call(this,e)}),S.m=(function(){return new zp(this.ai)}),S.bp=(function(e){return this.ai.a[e]}),S.h=(function(e){return this.bp(e|0)}),S.o=(function(e){return this.bp(e)}),S.U=(function(){return this.ai}),new T().i(Sh,`scala.collection.mutable.ArraySeq$ofDouble`,{aW:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function wh(e){this.aj=null,this.aj=e}S=wh.prototype=new Gm,S.constructor=wh;function Th(){}Th.prototype=S,S.j=(function(){return this.aj.a.length}),S.l=(function(){var e=z();return e.f4(this.aj,e.t)}),S.e=(function(e){return e instanceof wh?A().fj(this.aj,e.aj):$.prototype.e.call(this,e)}),S.m=(function(){return new Vp(this.aj)}),S.bq=(function(e){return this.aj.a[e]}),S.h=(function(e){return this.bq(e|0)}),S.o=(function(e){return this.bq(e)}),S.U=(function(){return this.aj}),new T().i(wh,`scala.collection.mutable.ArraySeq$ofFloat`,{aX:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Eh(e){this.ak=null,this.ak=e}S=Eh.prototype=new Gm,S.constructor=Eh;function Dh(){}Dh.prototype=S,S.j=(function(){return this.ak.a.length}),S.l=(function(){var e=z();return e.f5(this.ak,e.t)}),S.e=(function(e){return e instanceof Eh?A().fk(this.ak,e.ak):$.prototype.e.call(this,e)}),S.m=(function(){return new Up(this.ak)}),S.br=(function(e){return this.ak.a[e]}),S.h=(function(e){return this.br(e|0)}),S.o=(function(e){return this.br(e)}),S.U=(function(){return this.ak}),new T().i(Eh,`scala.collection.mutable.ArraySeq$ofInt`,{aY:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Oh(e){this.al=null,this.al=e}S=Oh.prototype=new Gm,S.constructor=Oh;function kh(){}kh.prototype=S,S.j=(function(){return this.al.a.length}),S.l=(function(){var e=z();return e.f6(this.al,e.t)}),S.e=(function(e){return e instanceof Oh?A().fl(this.al,e.al):$.prototype.e.call(this,e)}),S.m=(function(){return new Gp(this.al)}),S.bs=(function(e){return this.al.a[e]}),S.h=(function(e){return this.bs(e|0)}),S.o=(function(e){return this.bs(e)}),S.U=(function(){return this.al}),new T().i(Oh,`scala.collection.mutable.ArraySeq$ofLong`,{aZ:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Ah(e){this.am=null,this.am=e}S=Ah.prototype=new Gm,S.constructor=Ah;function jh(){}jh.prototype=S,S.j=(function(){return this.am.a.length}),S.o=(function(e){return this.am.a[e]}),S.l=(function(){var e=z();return e.f0(this.am,e.t)}),S.e=(function(e){return e instanceof Ah?Zc().fo(this.am,e.am):$.prototype.e.call(this,e)}),S.m=(function(){return _p(new vp,this.am)}),S.h=(function(e){return this.o(e|0)}),S.U=(function(){return this.am}),new T().i(Ah,`scala.collection.mutable.ArraySeq$ofRef`,{b0:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Mh(e){this.an=null,this.an=e}S=Mh.prototype=new Gm,S.constructor=Mh;function Nh(){}Nh.prototype=S,S.j=(function(){return this.an.a.length}),S.bm=(function(e){return this.an.a[e]}),S.l=(function(){var e=z();return e.f7(this.an,e.t)}),S.e=(function(e){return e instanceof Mh?A().fm(this.an,e.an):$.prototype.e.call(this,e)}),S.m=(function(){return new qp(this.an)}),S.h=(function(e){return this.bm(e|0)}),S.o=(function(e){return this.bm(e)}),S.U=(function(){return this.an}),new T().i(Mh,`scala.collection.mutable.ArraySeq$ofShort`,{b1:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Ph(e){this.aC=null,this.aC=e}S=Ph.prototype=new Gm,S.constructor=Ph;function Fh(){}Fh.prototype=S,S.j=(function(){return this.aC.a.length}),S.l=(function(){var e=z();return e.f8(this.aC,e.t)}),S.e=(function(e){return e instanceof Ph?this.aC.a.length===e.aC.a.length:$.prototype.e.call(this,e)}),S.m=(function(){return new Yp(this.aC)}),S.bt=(function(e){}),S.h=(function(e){this.bt(e|0)}),S.o=(function(e){this.bt(e)}),S.U=(function(){return this.aC}),new T().i(Ph,`scala.collection.mutable.ArraySeq$ofUnit`,{b2:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Ih(e,t){this.cZ=null,this.d0=null,this.cZ=e,this.d0=t}S=Ih.prototype=new hh,S.constructor=Ih;function Lh(){}Lh.prototype=S,S.a7=(function(){return this.cZ}),S.S=(function(){return`::`}),S.Q=(function(){return 2}),S.R=(function(e){switch(e){case 0:return this.cZ;case 1:return this.d0;default:return F().aE(e)}}),S.a2=(function(){return new Pf(this)}),S.X=(function(){return this.d0}),new T().i(Ih,`scala.collection.immutable.$colon$colon`,{dQ:1,a9:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,y:1,x:1,z:1,aR:1,a0:1,aD:1,aS:1,aF:1,q:1,p:1,A:1,aG:1,a:1,N:1});function Rh(){}S=Rh.prototype=new hh,S.constructor=Rh;function zh(){}zh.prototype=S,S.gY=(function(){throw new Qd(`head of empty list`)}),S.i2=(function(){throw new Zd(`tail of empty list`)}),S.y=(function(){return 0}),S.m=(function(){return U().v}),S.S=(function(){return`Nil`}),S.Q=(function(){return 0}),S.R=(function(e){return F().aE(e)}),S.a2=(function(){return new Pf(this)}),S.X=(function(){this.i2()}),S.a7=(function(){this.gY()}),new T().i(Rh,`scala.collection.immutable.Nil$`,{dT:1,a9:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,y:1,x:1,z:1,aR:1,a0:1,aD:1,aS:1,aF:1,q:1,p:1,A:1,aG:1,a:1,N:1});var Bh;function Vh(){return Bh||=new Rh,Bh}function Hh(e,t){return e.K=t,e}function Uh(e){return Hh(e,new $u),e}function Wh(){this.K=null}S=Wh.prototype=new Bm,S.constructor=Wh;function Gh(){}Gh.prototype=S,S.aW=(function(){return`IndexedSeq`}),S.m=(function(){return new xp(new Mm(this))}),S.ao=(function(e){var t=this.K.j();return t===e?0:t<e?-1:1}),S.eW=(function(e){return cl(this,e)}),S.j=(function(){return this.K.j()}),S.y=(function(){return this.K.j()}),S.g6=(function(e){var t=this.K,n=``+cr(e);return t.p+=n,this}),S.n=(function(){return this.K.p}),S.f=(function(){return this.K.j()===0}),S.fF=(function(){return this.K.p}),S.d7=(function(e){return this.g6(vr(e))}),S.h=(function(e){var t=e|0;return _r(this.K.fc(t))}),S.o=(function(e){return _r(this.K.fc(e))}),new T().i(Wh,`scala.collection.mutable.StringBuilder`,{e1:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,dZ:1,b3:1,b5:1,b4:1,D:1,n:1,o:1,E:1,a6:1,a:1});function Kh(e,t){return e.aD=t,e}function qh(e){return Kh(e,[]),e}function Jh(){this.aD=null}S=Jh.prototype=new Hm,S.constructor=Jh;function Yh(){}Yh.prototype=S,S.aW=(function(){return`IndexedSeq`}),S.m=(function(){return new xp(new Mm(this))}),S.ao=(function(e){var t=this.aD.length|0;return t===e?0:t<e?-1:1}),S.o=(function(e){return this.aD[e]}),S.j=(function(){return this.aD.length|0}),S.y=(function(){return this.aD.length|0}),S.aS=(function(){return`WrappedArray`}),S.fF=(function(){return this}),S.d7=(function(e){return this.aD.push(e),this}),S.h=(function(e){var t=e|0;return this.aD[t]}),new T().i(Jh,`scala.scalajs.js.WrappedArray`,{er:1,dU:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,dW:1,b5:1,b4:1,e0:1,q:1,p:1,D:1,n:1,o:1,E:1,dY:1,b3:1,a:1}),Qn=new j(0,0),Nr.z=Qn,ro(new(lp.r()).C([]));