var e=Object.defineProperty,t=t=>{let n={};for(var r in t)e(n,r,{get:t[r],enumerable:!0});return n},n=class extends Event{constructor(){super(`wa-error`,{bubbles:!0,cancelable:!1,composed:!0})}},r=class extends Event{constructor(){super(`wa-load`,{bubbles:!0,cancelable:!1,composed:!0})}};
/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const i=globalThis,a=i.ShadowRoot&&(i.ShadyCSS===void 0||i.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,o=Symbol(),s=new WeakMap;var c=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(a&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=s.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&s.set(t,e))}return e}toString(){return this.cssText}};const l=e=>new c(typeof e==`string`?e:e+``,void 0,o),u=(e,...t)=>new c(e.length===1?e[0]:t.reduce(((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1]),e[0]),e,o),d=(e,t)=>{if(a)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(let n of t){let t=document.createElement(`style`),r=i.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},f=a?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return l(t)})(e):e,{is:p,defineProperty:m,getOwnPropertyDescriptor:h,getOwnPropertyNames:g,getOwnPropertySymbols:_,getPrototypeOf:v}=Object,y=globalThis,ee=y.trustedTypes,te=ee?ee.emptyScript:``,ne=y.reactiveElementPolyfillSupport,b=(e,t)=>e,x={toAttribute(e,t){switch(t){case Boolean:e=e?te:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},S=(e,t)=>!p(e,t),re={attribute:!0,type:String,converter:x,reflect:!1,useDefault:!1,hasChanged:S};Symbol.metadata??=Symbol(`metadata`),y.litPropertyMetadata??=new WeakMap;var ie=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=re){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&m(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=h(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??re}static _$Ei(){if(this.hasOwnProperty(b(`elementProperties`)))return;let e=v(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(b(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b(`properties`))){let e=this.properties,t=[...g(e),..._(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(f(e))}else e!==void 0&&t.push(f(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return d(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?x:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?x:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n){if(e!==void 0){let r=this.constructor,i=this[e];if(n??=r.getPropertyOptions(e),!((n.hasChanged??S)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(e){}firstUpdated(e){}};ie.elementStyles=[],ie.shadowRootOptions={mode:`open`},ie[b(`elementProperties`)]=new Map,ie[b(`finalized`)]=new Map,ne?.({ReactiveElement:ie}),(y.reactiveElementVersions??=[]).push(`2.1.1`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const ae=globalThis,oe=ae.trustedTypes,C=oe?oe.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,se=`$lit$`,w=`lit$${Math.random().toFixed(9).slice(2)}$`,ce=`?`+w,le=`<${ce}>`,ue=document,de=()=>ue.createComment(``),fe=e=>e===null||typeof e!=`object`&&typeof e!=`function`,pe=Array.isArray,me=e=>pe(e)||typeof e?.[Symbol.iterator]==`function`,he=`[ 	
\f\r]`,ge=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_e=/-->/g,ve=/>/g,ye=RegExp(`>|${he}(?:([^\\s"'>=/]+)(${he}*=${he}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),be=/'/g,xe=/"/g,Se=/^(?:script|style|textarea|title)$/i,Ce=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),we=Symbol.for(`lit-noChange`),T=Symbol.for(`lit-nothing`),Te=new WeakMap,E=ue.createTreeWalker(ue,129);function Ee(e,t){if(!pe(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return C===void 0?t:C.createHTML(t)}const De=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=ge;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===ge?c[1]===`!--`?o=_e:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=ye):(Se.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=ye):o=ve:o===ye?c[0]===`>`?(o=i??ge,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?ye:c[3]===`"`?xe:be):o===xe||o===be?o=ye:o===_e||o===ve?o=ge:(o=ye,i=void 0);let d=o===ye&&e[t+1].startsWith(`/>`)?` `:``;a+=o===ge?n+le:l>=0?(r.push(s),n.slice(0,l)+se+n.slice(l)+w+d):n+w+(l===-2?t:d)}return[Ee(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]};var Oe=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=De(t,n);if(this.el=e.createElement(l,r),E.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=E.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(se)){let t=u[o++],n=i.getAttribute(e).split(w),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Ne:r[1]===`?`?Pe:r[1]===`@`?Fe:Me}),i.removeAttribute(e)}else e.startsWith(w)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Se.test(i.tagName)){let e=i.textContent.split(w),t=e.length-1;if(t>0){i.textContent=oe?oe.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],de()),E.nextNode(),c.push({type:2,index:++a});i.append(e[t],de())}}}else if(i.nodeType===8)if(i.data===ce)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(w,e+1))!==-1;)c.push({type:7,index:a}),e+=w.length-1}a++}}static createElement(e,t){let n=ue.createElement(`template`);return n.innerHTML=e,n}};function ke(e,t,n=e,r){if(t===we)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=fe(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=ke(e,i._$AS(e,t.values),i,r)),t}var Ae=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??ue).importNode(t,!0);E.currentNode=r;let i=E.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new je(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Ie(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=E.nextNode(),a++)}return E.currentNode=ue,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},je=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ke(this,e,t),fe(e)?e===T||e==null||e===``?(this._$AH!==T&&this._$AR(),this._$AH=T):e!==this._$AH&&e!==we&&this._(e):e._$litType$===void 0?e.nodeType===void 0?me(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==T&&fe(this._$AH)?this._$AA.nextSibling.data=e:this.T(ue.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Oe.createElement(Ee(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Ae(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Te.get(e.strings);return t===void 0&&Te.set(e.strings,t=new Oe(e)),t}k(t){pe(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(de()),this.O(de()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Me=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=T,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=T}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=ke(this,e,t,0),a=!fe(e)||e!==this._$AH&&e!==we,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=ke(this,r[n+o],t,o),s===we&&(s=this._$AH[o]),a||=!fe(s)||s!==this._$AH[o],s===T?e=T:e!==T&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Ne=class extends Me{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===T?void 0:e}},Pe=class extends Me{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==T)}},Fe=class extends Me{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=ke(this,e,t,0)??T)===we)return;let n=this._$AH,r=e===T&&n!==T||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==T&&(n===T||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ie=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){ke(this,e)}};const Le={M:se,P:w,A:ce,C:1,L:De,R:Ae,D:me,V:ke,I:je,H:Me,N:Pe,U:Fe,B:Ne,F:Ie},Re=ae.litHtmlPolyfillSupport;Re?.(Oe,je),(ae.litHtmlVersions??=[]).push(`3.3.1`);const ze=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new je(t.insertBefore(de(),e),e,void 0,n??{})}return i._$AI(e),i},Be=globalThis;var Ve=class extends ie{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ze(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return we}};Ve._$litElement$=!0,Ve.finalized=!0,Be.litElementHydrateSupport?.({LitElement:Ve});const He=Be.litElementPolyfillSupport;He?.({LitElement:Ve}),(Be.litElementVersions??=[]).push(`4.2.1`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ue=u`
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
`;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function D(e,t){let n={waitUntilFirstUpdate:!1,...t};return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var O=Object.defineProperty,We=Object.getOwnPropertyDescriptor,Ge=e=>{throw TypeError(e)},k=(e,t,n,r)=>{for(var i=r>1?void 0:r?We(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&O(t,n,i),i},Ke=(e,t,n)=>t.has(e)||Ge(`Cannot `+n),qe=(e,t,n)=>(Ke(e,t,`read from private field`),n?n.call(e):t.get(e)),Je=(e,t,n)=>t.has(e)?Ge(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),Ye=(e,t,n,r)=>(Ke(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const Xe=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer((()=>{customElements.define(e,t)}))},Ze={attribute:!0,type:String,converter:x,reflect:!1,hasChanged:S},Qe=(e=Ze,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e)}}throw Error(`Unsupported decorator location: `+r)};function A(e){return(t,n)=>typeof n==`object`?Qe(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function $e(e){return A({...e,state:!0,attribute:!1})}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const et=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function tt(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return et(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return et(n,r,{get(){return a(this)}})}}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var nt=u`
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
`,rt=/;\s+$/;function it(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function at(e){let{property:t,value:n,element:r}=e;if(n){let e=r.getAttribute(`style`)||``;e&&(e.match(rt)||(e+=`;`),e+=` `);let i=`${t}: ${n}`;return e.includes(i)?void 0:`${e}${i};`}return null}var ot,st=class extends Ve{constructor(){super(),Je(this,ot,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,t)=>{if(this.internals?.states)try{t?this.internals.states.add(e):this.internals.states.delete(e)}catch(e){if(String(e).includes(`must start with '--'`))console.error(`Your browser implements an outdated version of CustomStateSet. Consider using a polyfill`);else throw e}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error(`Element internals are not supported in your browser. Consider using a polyfill`)}this.customStates.set(`wa-defined`,!0);let e=this.constructor;for(let[t,n]of e.elementProperties)n.default===`inherit`&&n.initial!==void 0&&typeof t==`string`&&this.customStates.set(`initial-${t}-${n.initial}`,!0)}static get styles(){return[nt,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `)),this.didSSR&&this.updateComplete.then(()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `))})}attributeChangedCallback(e,t,n){qe(this,ot)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),Ye(this,ot,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll(`slot`).forEach(e=>{e.dispatchEvent(new Event(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(e){if(this.didSSR&&!this.hasUpdated){let t=new Event(`lit-hydration-error`,{bubbles:!0,composed:!0,cancelable:!1});t.error=e,this.dispatchEvent(t)}throw e}}setStyle(e,t){if(!this.style){let n=at({property:it(e),value:t,element:this});n&&this.setAttribute(`style`,n);return}this.style[e]=t}setStyleProperty(e,t){if(!this.style){let n=at({property:e,value:t,element:this});n&&this.setAttribute(`style`,n);return}this.style.setProperty(e,t)}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};ot=new WeakMap,k([A()],st.prototype,`dir`,2),k([A()],st.prototype,`lang`,2),k([A({type:Boolean,reflect:!0,attribute:`did-ssr`})],st.prototype,`didSSR`,2);var ct=``,lt=``;function ut(){return ct.replace(/\/$/,``)}function dt(e){lt=e}function ft(){if(!lt){let e=document.querySelector(`[data-fa-kit-code]`);e&&dt(e.getAttribute(`data-fa-kit-code`)||``)}return lt}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var pt=`7.3.0`;function mt(e,t,n){let r=`solid`;return t===`chisel`&&(r=`chisel-regular`),t===`etch`&&(r=`etch-solid`),t===`graphite`&&(r=`graphite-thin`),t===`jelly`&&(r=`jelly-regular`,n===`duo-regular`&&(r=`jelly-duo-regular`),n===`fill-regular`&&(r=`jelly-fill-regular`)),t===`jelly-duo`&&(r=`jelly-duo-regular`),t===`jelly-fill`&&(r=`jelly-fill-regular`),t===`notdog`&&(n===`solid`&&(r=`notdog-solid`),n===`duo-solid`&&(r=`notdog-duo-solid`)),t===`notdog-duo`&&(r=`notdog-duo-solid`),t===`slab`&&((n===`solid`||n===`regular`)&&(r=`slab-regular`),n===`press-regular`&&(r=`slab-press-regular`)),t===`slab-press`&&(r=`slab-press-regular`),t===`slab-duo`&&(r=`slab-duo-regular`),t===`slab-press-duo`&&(r=`slab-press-duo-regular`),t===`thumbprint`&&(r=`thumbprint-light`),t===`utility`&&(r=`utility-semibold`),t===`utility-duo`&&(r=`utility-duo-semibold`),t===`utility-fill`&&(r=`utility-fill-semibold`),t===`whiteboard`&&(r=`whiteboard-semibold`),t===`mosaic`&&(r=`mosaic-solid`),t===`pixel`&&(r=`pixel-regular`),t===`vellum`&&(r=`vellum-solid`),t===`classic`&&(n===`thin`&&(r=`thin`),n===`light`&&(r=`light`),n===`regular`&&(r=`regular`),n===`solid`&&(r=`solid`)),t===`duotone`&&(n===`thin`&&(r=`duotone-thin`),n===`light`&&(r=`duotone-light`),n===`regular`&&(r=`duotone-regular`),n===`solid`&&(r=`duotone`)),t===`sharp`&&(n===`thin`&&(r=`sharp-thin`),n===`light`&&(r=`sharp-light`),n===`regular`&&(r=`sharp-regular`),n===`solid`&&(r=`sharp-solid`)),t===`sharp-duotone`&&(n===`thin`&&(r=`sharp-duotone-thin`),n===`light`&&(r=`sharp-duotone-light`),n===`regular`&&(r=`sharp-duotone-regular`),n===`solid`&&(r=`sharp-duotone-solid`)),t===`brands`&&(r=`brands`),r}function ht(e,t,n){let r=mt(e,t,n),i=ut();if(i)return`${i}/${r}/${e}.svg`;let a=ft();return a.length>0?`https://ka-p.fontawesome.com/releases/v${pt}/svgs/${r}/${e}.svg?token=${encodeURIComponent(a)}`:`https://ka-f.fontawesome.com/releases/v${pt}/svgs/${r}/${e}.svg`}var gt={name:`default`,resolver:(e,t=`classic`,n=`solid`)=>ht(e,t,n),mutator:(e,t)=>{if(e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`),t?.family&&!e.hasAttribute(`data-duotone-initialized`)){let{family:n,variant:r}=t;if(n===`duotone`||n===`sharp-duotone`||n===`notdog-duo`||n===`notdog`&&r===`duo-solid`||n===`jelly-duo`||n===`jelly`&&r===`duo-regular`||n===`utility-duo`||n===`slab-duo`||n===`slab-press-duo`||n===`thumbprint`){let n=[...e.querySelectorAll(`path`)],r=n.find(e=>!e.hasAttribute(`opacity`)),i=n.find(e=>e.hasAttribute(`opacity`));if(!r||!i)return;if(r.setAttribute(`data-duotone-primary`,``),i.setAttribute(`data-duotone-secondary`,``),t.swapOpacity&&r&&i){let e=i.getAttribute(`opacity`)||`0.4`;r.style.setProperty(`--path-opacity`,e),i.style.setProperty(`--path-opacity`,`1`)}e.setAttribute(`data-duotone-initialized`,``)}}}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function _t(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var vt={solid:{"arrow-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`,"arrow-up":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>`,backward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M236.3 107.1C247.9 96 265 92.9 279.7 99.2C294.4 105.5 304 120 304 136L304 272.3L476.3 107.2C487.9 96 505 92.9 519.7 99.2C534.4 105.5 544 120 544 136L544 504C544 520 534.4 534.5 519.7 540.8C505 547.1 487.9 544 476.3 532.9L304 367.7L304 504C304 520 294.4 534.5 279.7 540.8C265 547.1 247.9 544 236.3 532.9L44.3 348.9C36.5 341.3 32 330.9 32 320C32 309.1 36.5 298.7 44.3 291.1L236.3 107.1z"/></svg>`,"backward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M491 100.8C478.1 93.8 462.3 94.5 450 102.6L192 272.1L192 128C192 110.3 177.7 96 160 96C142.3 96 128 110.3 128 128L128 512C128 529.7 142.3 544 160 544C177.7 544 192 529.7 192 512L192 367.9L450 537.5C462.3 545.6 478 546.3 491 539.3C504 532.3 512 518.8 512 504.1L512 136.1C512 121.4 503.9 107.9 491 100.9z"/></svg>`,bars:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>`,"angles-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M77.3 256 214.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256zm192 0L406.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L269.3 256z"/></svg>`,"angles-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.7 256 297.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 256zm-192 0L105.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256z"/></svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>`,"chevron-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`,"chevron-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>`,"chevron-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>`,circle:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>`,"closed-captioning":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M64 192C64 156.7 92.7 128 128 128L512 128C547.3 128 576 156.7 576 192L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 192zM216 272L248 272C252.4 272 256 275.6 256 280C256 293.3 266.7 304 280 304C293.3 304 304 293.3 304 280C304 249.1 278.9 224 248 224L216 224C185.1 224 160 249.1 160 280L160 360C160 390.9 185.1 416 216 416L248 416C278.9 416 304 390.9 304 360C304 346.7 293.3 336 280 336C266.7 336 256 346.7 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 280C208 275.6 211.6 272 216 272zM384 280C384 275.6 387.6 272 392 272L424 272C428.4 272 432 275.6 432 280C432 293.3 442.7 304 456 304C469.3 304 480 293.3 480 280C480 249.1 454.9 224 424 224L392 224C361.1 224 336 249.1 336 280L336 360C336 390.9 361.1 416 392 416L424 416C454.9 416 480 390.9 480 360C480 346.7 469.3 336 456 336C442.7 336 432 346.7 432 360C432 364.4 428.4 368 424 368L392 368C387.6 368 384 364.4 384 360L384 280z"/></svg>`,"closed-captioning-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M39 39.1C48.4 29.7 63.6 29.7 72.9 39.1L161.8 128L512 128C547.3 128 576 156.7 576 192L576 448C576 473.5 561.1 495.4 539.6 505.8L601 567.1C610.4 576.5 610.4 591.7 601 601C591.6 610.3 576.4 610.4 567.1 601L39 73.1C29.7 63.7 29.7 48.5 39 39.1zM384 350.1L384 279.9C384 275.5 387.6 271.9 392 271.9L424 271.9C428.4 271.9 432 275.5 432 279.9C432 293.2 442.7 303.9 456 303.9C469.3 303.9 480 293.2 480 279.9C480 249 454.9 223.9 424 223.9L392 223.9C361.1 223.9 336 249 336 279.9L336 302.1L384 350.1zM445.5 411.6C465.7 403.2 480 383.2 480 359.9C480 346.6 469.3 335.9 456 335.9C442.7 335.9 432 346.6 432 359.9C432 364.3 428.4 367.9 424 367.9L401.8 367.9L445.5 411.6zM162.3 264.1C160.8 269.1 160 274.5 160 280L160 360C160 390.9 185.1 416 216 416L248 416C266.1 416 282.1 407.5 292.4 394.2L410.2 512L128 512C92.7 512 64 483.3 64 448L64 192C64 184.2 65.4 176.7 68 169.8L162.3 264.1zM256.1 357.9C256 358.6 256 359.3 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 309.8L256.1 357.9z"/></svg>`,compress:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>`,ellipsis:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M96 320C96 289.1 121.1 264 152 264C182.9 264 208 289.1 208 320C208 350.9 182.9 376 152 376C121.1 376 96 350.9 96 320zM264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320zM488 264C518.9 264 544 289.1 544 320C544 350.9 518.9 376 488 376C457.1 376 432 350.9 432 320C432 289.1 457.1 264 488 264z"/></svg>`,"ellipsis-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/></svg>`,expand:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 96C110.3 96 96 110.3 96 128L96 224C96 241.7 110.3 256 128 256C145.7 256 160 241.7 160 224L160 160L224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L128 96zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 512C96 529.7 110.3 544 128 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480L160 416zM416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160L480 224C480 241.7 494.3 256 512 256C529.7 256 544 241.7 544 224L544 128C544 110.3 529.7 96 512 96L416 96zM544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L512 544C529.7 544 544 529.7 544 512L544 416z"/></svg>`,eyedropper:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>`,filter:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 64C19.1 64 7.4 71.8 2.4 83.8S.2 109.5 9.4 118.6L192 301.3 192 416c0 8.5 3.4 16.6 9.4 22.6l64 64c9.2 9.2 22.9 11.9 34.9 6.9S320 492.9 320 480l0-178.7 182.6-182.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 64 480 64L32 64z"/></svg>`,forward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M403.7 107.1C392.1 96 375 92.9 360.3 99.2C345.6 105.5 336 120 336 136L336 272.3L163.7 107.2C152.1 96 135 92.9 120.3 99.2C105.6 105.5 96 120 96 136L96 504C96 520 105.6 534.5 120.3 540.8C135 547.1 152.1 544 163.7 532.9L336 367.7L336 504C336 520 345.6 534.5 360.3 540.8C375 547.1 392.1 544 403.7 532.9L595.7 348.9C603.6 341.4 608 330.9 608 320C608 309.1 603.5 298.7 595.7 291.1L403.7 107.1z"/></svg>`,file:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>`,"file-audio":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>`,"file-code":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>`,"file-excel":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>`,"file-image":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>`,"file-pdf":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>`,"file-powerpoint":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>`,"file-video":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>`,"file-word":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>`,"file-zipper":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>`,"forward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M21 36.8c12.9-7 28.7-6.3 41 1.8L320 208.1 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-144.1-258 169.6c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440L0 72C0 57.3 8.1 43.8 21 36.8z"/></svg>`,gauge:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,gear:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>`,"grip-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>`,indeterminate:`<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>`,"magnifying-glass":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>`,minus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>`,pause:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>`,"picture-in-picture":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M448 32c35.3 0 64 28.7 64 64l0 112-64 0 0-112-384 0 0 320 144 0 0 64-144 0-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416 0 96C0 62.9 25.2 35.6 57.5 32.3L64 32 448 32zm16 224c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48l160 0z"/></svg>`,play:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>`,"play-circle":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>`,plus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>`,"table-columns":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 64l0 256 128 0 0-256-128 0zm320 0l-128 0 0 256 128 0 0-256z"/></svg>`,thumbtack:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 10.3 134.1c37.1 21.2 65.8 56.4 78.2 99.7l3.8 13.4c2.8 9.7 .8 20-5.2 28.1S362 352 352 352L32 352c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1L5 297.8c12.4-43.3 41-78.5 78.2-99.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 400l64 0 0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-112z"/></svg>`,"up-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M406.6 502.6l96-96c9.2-9.2 11.9-22.9 6.9-34.9S492.9 352 480 352l-64 0 0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 320-64 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l96 96c12.5 12.5 32.8 12.5 45.3 0zM150.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-9.2 9.2-11.9 22.9-6.9 34.9S19.1 160 32 160l64 0 0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320 64 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-96-96z"/></svg>`,upload:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>`,user:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>`,volume:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM441.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C443.3 170.7 464 210.9 464 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-low":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,xmark:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>`},regular:{calendar:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z"/></svg>`,"circle-question":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`,"circle-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,clock:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>`,copy:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>`,eye:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>`,"eye-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>`}},yt={name:`system`,resolver:(e,t=`classic`,n=`solid`)=>{let r=vt[n][e]??vt.regular[e]??vt.regular[`circle-question`];return r?_t(r):``},mutator:e=>{e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`)}},bt=`classic`,xt=[gt,yt],St=new Set;function Ct(e){St.add(e)}function wt(e){St.delete(e)}function Tt(e){return xt.find(t=>t.name===e)}function Et(){return bt}
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const{I:Dt}=Le,Ot=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,kt=e=>e.strings===void 0,At={},jt=(e,t=At)=>e._$AH=t;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Mt=Symbol(),Nt=Symbol(),Pt,Ft=new Map,It=class extends st{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label=``,this.library=`default`,this.rotate=0,this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=Ce`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let n=this.shadowRoot.querySelector(`[part='svg']`);return typeof t.mutator==`function`&&t.mutator(n,this),this.svg}try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?Mt:Nt}catch{return Nt}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return Mt;Pt||=new DOMParser;let r=Pt.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):Mt}catch{return Mt}}}connectedCallback(){super.connectedCallback(),Ct(this)}firstUpdated(e){super.firstUpdated(e),this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),wt(this)}async getIconSource(){let e=Tt(this.library),t=this.family||Et();if(this.name&&e){let n=this.canvas===`auto`||this.autoWidth,r;try{r=await e.resolver(this.name,t,this.variant,n)}catch{r=void 0}return{url:r,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=await this.getIconSource(),i=t?Tt(this.library):void 0;if(!e){this.svg=null;return}let a=Ft.get(e);a||(a=this.resolveIcon(e,i),Ft.set(e,a));let o=await a;if(o===Nt&&Ft.delete(e),e===(await this.getIconSource()).url){if(Ot(o)){this.svg=o;return}switch(o){case Nt:case Mt:this.svg=null,this.dispatchEvent(new n);break;default:this.svg=o.cloneNode(!0),i?.mutator?.(this.svg,this),this.dispatchEvent(new r)}}}willUpdate(e){return this.style||this.setStyleProperty(`--rotate-angle`,`${this.rotate}deg`),super.willUpdate(e)}updated(e){super.updated(e);let t=Tt(this.library);this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`);let n=this.shadowRoot?.querySelector(`svg`);n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:Ce`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};It.css=Ue,k([$e()],It.prototype,`svg`,2),k([A({reflect:!0})],It.prototype,`name`,2),k([A({reflect:!0})],It.prototype,`family`,2),k([A({reflect:!0})],It.prototype,`variant`,2),k([A({reflect:!0})],It.prototype,`canvas`,2),k([A({attribute:`auto-width`,type:Boolean,reflect:!0})],It.prototype,`autoWidth`,2),k([A({attribute:`swap-opacity`,type:Boolean,reflect:!0})],It.prototype,`swapOpacity`,2),k([A()],It.prototype,`src`,2),k([A()],It.prototype,`label`,2),k([A({reflect:!0})],It.prototype,`library`,2),k([A({type:Number,reflect:!0})],It.prototype,`rotate`,2),k([A({type:String,reflect:!0})],It.prototype,`flip`,2),k([A({type:String,reflect:!0})],It.prototype,`animation`,2),k([D(`label`)],It.prototype,`handleLabelChange`,1),k([D([`family`,`name`,`library`,`variant`,`src`,`autoWidth`,`canvas`,`swapOpacity`],{waitUntilFirstUpdate:!0})],It.prototype,`setIcon`,1),It=k([Xe(`wa-icon`)],It);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Lt=t({default:()=>It}),Rt=u`
  :host {
    --current-text-color: var(--wa-color-brand-on-loud);

    display: block;
    color: var(--wa-color-text-normal);
    -webkit-user-select: none;
    user-select: none;

    position: relative;
    display: flex;
    align-items: center;
    font: inherit;
    padding: 0.5em 1em 0.5em 0.25em;
    border-radius: var(--wa-border-radius-s);
    line-height: var(--wa-line-height-condensed);
    transition: var(--wa-transition-fast) background-color var(--wa-transition-easing);
    cursor: pointer;
  }

  :host(:focus) {
    outline: none;
  }

  @media (hover: hover) {
    :host(:not(:state(disabled), :state(current)):is(:state(hover), :hover)) {
      background-color: var(--wa-color-neutral-fill-normal);
      color: var(--wa-color-neutral-on-normal);
    }
  }

  :host(:state(current)),
  :host(:state(disabled):state(current)) {
    background-color: var(--wa-form-control-activated-color);
    color: var(--current-text-color);
    opacity: 1;
  }

  :host(:state(disabled)) {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .label {
    flex: 1 1 auto;
    display: inline-block;
  }

  .check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--wa-font-size-smaller);
    visibility: hidden;
    width: 2em;
  }

  :host(:state(selected)) .check {
    visibility: visible;
  }

  .start,
  .end {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .start::slotted(*) {
    margin-inline-end: 0.5em;
  }

  .end::slotted(*) {
    margin-inline-start: 0.5em;
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;const zt=new Set,Bt=new Map;let Vt,Ht=`ltr`,Ut=`en`;const Wt=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(Wt){let e=new MutationObserver(Kt);Ht=document.documentElement.dir||`ltr`,Ut=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function Gt(...e){e.map(e=>{let t=e.$code.toLowerCase();Bt.has(t)?Bt.set(t,Object.assign(Object.assign({},Bt.get(t)),e)):Bt.set(t,e),Vt||=e}),Kt()}function Kt(){Wt&&(Ht=document.documentElement.dir||`ltr`,Ut=document.documentElement.lang||navigator.language),[...zt.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var qt=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){zt.add(this.host)}hostDisconnected(){zt.delete(this.host)}dir(){return`${this.host.dir||Ht}`.toLowerCase()}lang(){let e=`${this.host.lang||Ut}`.toLowerCase().replace(/_/g,`-`);try{return new Intl.Locale(e),e}catch{return Vt?Vt.$code.toLowerCase():`en`}}getTranslationData(e){let t;try{t=new Intl.Locale(e.replace(/_/g,`-`))}catch{return{locale:void 0,language:``,region:``,primary:void 0,secondary:void 0}}let n=t.language.toLowerCase(),r=t.region?.toLowerCase()??``,i=Bt.get(`${n}-${r}`),a=Bt.get(n);return{locale:t,language:n,region:r,primary:i,secondary:a}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&Vt&&Vt[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(Vt&&Vt[e])i=Vt[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},Jt={$code:`en`,$name:`English`,$dir:`ltr`,allTagsRemoved:`All tags removed`,am:`AM`,autosizeColumn:`Autosize column`,captions:`Captions`,carousel:`Carousel`,chooseDate:`Choose date`,chooseDecade:`Choose decade`,chooseMonth:`Choose month`,chooseTime:`Choose time`,chooseYear:`Choose year`,clearEntry:`Clear entry`,clearFilter:`Clear filter`,clearSort:`Clear sort`,close:`Close`,closeCalendar:`Close calendar`,closeTimeInput:`Close time picker`,collapseRow:`Collapse row`,columnMenu:`Column options`,columnMovedToPosition:(e,t,n)=>`${e} moved to position ${t} of ${n}`,columns:`Columns`,compactPageXOfY:(e,t)=>`${e} of ${t}`,completed:`Completed`,copied:`Copied`,copy:`Copy`,createOption:e=>`Create "${e}"`,currentlyPlaying:`currently playing`,currentValue:`Current value`,date:`Date`,datePickerKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the calendar.`,day:`Day`,dayPeriod:`AM/PM`,decrement:`Decrement`,deselectAllRows:`Deselect all rows`,disabled:`Disabled`,dropFileHere:`Drop file here or click to browse`,dropFilesHere:`Drop files here or click to browse`,empty:`Empty`,endDate:`End date`,enterFullscreen:`Enter fullscreen`,error:`Error`,exitFullscreen:`Exit fullscreen`,expandRow:`Expand row`,filterByColumn:e=>`Filter by ${e}`,filterFrom:`From`,filterMax:`Max`,filterMin:`Min`,filterTo:`To`,firstPage:`First page`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hideColumn:`Hide column`,hidePassword:`Hide password`,hour:`Hour`,incompleteDate:`Enter a valid date.`,increment:`Increment`,jumpBackwardX:e=>`Jump back ${e} pages`,jumpForwardX:e=>`Jump forward ${e} pages`,lastPage:`Last page`,loading:`Loading`,locked:`Locked`,minute:`Minute`,month:`Month`,moreOptions:`More Options`,mute:`Mute`,nextDecade:`Next decade`,nextMonth:`Next month`,nextPage:`Next page`,nextSlide:`Next slide`,nextVideo:`Next Video`,nextYear:`Next year`,noData:`No data`,noOptions:`No options`,noResults:`No matching results`,notCompleted:`Not completed`,now:`Now`,numCharacters:e=>e===1?`1 character`:`${e} characters`,numCharactersRemaining:e=>e===1?`1 character remaining`:`${e} characters remaining`,numOptionsAvailable:e=>e===0?`No options available`:e===1?`1 option available`:`${e} options available`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,numRowsCopied:e=>e===1?`1 row copied`:`${e} rows copied`,numRowsSelected:e=>e===1?`1 row selected`:`${e} rows selected`,optionPosition:(e,t,n)=>`${e}, ${t} of ${n}`,optionsLoadError:`Options could not be loaded`,pageXOfY:(e,t)=>`Page ${e} of ${t}`,pagination:`Pagination`,pause:`Pause`,pauseAnimation:`Pause animation`,pictureInPicture:`Picture in picture`,pinLeft:`Pin left`,pinRight:`Pin right`,play:`Play`,playAnimation:`Play animation`,playbackSpeed:`Playback speed`,playlist:`Playlist`,pm:`PM`,previousDecade:`Previous decade`,previousMonth:`Previous month`,previousPage:`Previous page`,previousSlide:`Previous slide`,previousVideo:`Previous video`,previousYear:`Previous year`,progress:`Progress`,rangeTooLong:e=>e===1?`Select a range no longer than 1 day`:`Select a range no longer than ${e} days`,rangeTooShort:e=>e===1?`Select a range at least 1 day long`:`Select a range at least ${e} days long`,readonly:`Read-only`,remove:`Remove`,resetColumns:`Reset columns`,resize:`Resize`,resizeColumn:`Resize column`,rowsPerPage:`Rows per page`,scrollableRegion:`Scrollable region`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,search:`Search`,second:`Second`,seek:`Seek`,seekProgress:(e,t)=>`${e} of ${t}`,selectAColorFromTheScreen:`Select a color from the screen`,selectAllRows:`Select all rows`,selected:`Selected`,selectedDateLabel:e=>`Selected: ${e}`,selectedRangeLabel:e=>`Selected range: ${e}`,selectGroup:`Select group`,selectionCleared:`Selection cleared`,selectRow:`Select row`,showingNofMRows:(e,t)=>`Showing ${e} of ${t} rows`,showingXtoYofZ:(e,t,n)=>`${e}\u2013${t} of ${n}`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,sortAscending:`Sort ascending`,sortColumn:`Sort column`,sortDescending:`Sort descending`,startDate:`Start date`,steps:`Steps`,stepXOfY:(e,t)=>`Step ${e} of ${t}`,tagAdded:e=>`${e} added`,tagAlreadyAdded:e=>`${e} is already added`,tagInputKeyboardHelp:`Press Backspace or Delete to remove this tag.`,tagRemoved:e=>`${e} removed`,time:`Time`,timeInputKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the time picker.`,today:`Today`,toggleColorFormat:`Toggle color format`,tooFewTags:e=>e===1?`Add at least 1 tag`:`Add at least ${e} tags`,tooManyTags:e=>e===1?`Add no more than 1 tag`:`Add no more than ${e} tags`,unmute:`Unmute`,unpin:`Unpin`,unpinColumn:`Unpin column`,videoPlayer:`Video player`,volume:`Volume`,year:`Year`,zoomIn:`Zoom in`,zoomOut:`Zoom out`};Gt(Jt);var Yt=Jt,Xt=class extends qt{lang(){return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||`en`:super.lang()}};Gt(Yt);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Zt(e,t=0){if(!e||!globalThis.Node)return``;if(typeof e[Symbol.iterator]==`function`)return(Array.isArray(e)?e:[...e]).map(e=>Zt(e,--t)).join(``);let n=e;if(n.nodeType===Node.TEXT_NODE)return n.textContent??``;if(n.nodeType===Node.ELEMENT_NODE){let e=n;if(e.hasAttribute(`slot`)||e.matches(`style, script`))return``;if(e instanceof HTMLSlotElement){let n=e.assignedNodes({flatten:!0});if(n.length>0)return Zt(n,--t)}return t>-1?Zt(e,--t):e.textContent??``}return n.hasChildNodes()?Zt(n.childNodes,--t):``}var Qt=class extends st{constructor(){super(...arguments),this.localize=new Xt(this),this.cachedDefaultLabel=``,this.isInitialized=!1,this.isDefaultLabelDirty=!0,this.current=!1,this.value=``,this.disabled=!1,this.selected=!1,this.defaultSelected=!1,this._label=``,this.handleHover=e=>{e.type===`mouseenter`?this.customStates.set(`hover`,!0):e.type===`mouseleave`&&this.customStates.set(`hover`,!1)}}set label(e){let t=this._label;this._label=e||``,this._label!==t&&this.requestUpdate(`label`,t)}get label(){return this._label?this._label:this.defaultLabel}get defaultLabel(){return(this.isDefaultLabelDirty||!this.cachedDefaultLabel)&&this.updateDefaultLabel(),this.cachedDefaultLabel}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`option`),this.setAttribute(`aria-selected`,`false`),this.addEventListener(`mouseenter`,this.handleHover),this.addEventListener(`mouseleave`,this.handleHover)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`mouseenter`,this.handleHover),this.removeEventListener(`mouseleave`,this.handleHover)}handleDefaultSlotChange(){if(this.isDefaultLabelDirty=!0,!this.isInitialized){this.isInitialized=!0;return}let e=this.closest(`wa-select, wa-combobox`);e&&customElements.whenDefined(e.localName).then(()=>e.handleDefaultSlotChange?.())}willUpdate(e){e.has(`defaultSelected`)&&(this.didSSR&&this.hasUpdated||!this.didSSR)&&this.syncDefaultSelected(),super.willUpdate(e)}syncDefaultSelected(){if(`closest`in this&&!this.closest(`wa-combobox, wa-select`)?.hasInteracted&&this.defaultSelected){let e=this.selected;this.selected=this.defaultSelected,this.requestUpdate(`selected`,e)}}updated(e){e.has(`disabled`)&&(this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`),this.customStates.set(`disabled`,this.disabled)),e.has(`selected`)&&(this.setAttribute(`aria-selected`,this.selected?`true`:`false`),this.customStates.set(`selected`,this.selected)),e.has(`value`)&&(typeof this.value!=`string`&&(this.value=String(this.value)),this.handleDefaultSlotChange()),e.has(`current`)&&this.customStates.set(`current`,this.current),super.updated(e)}async firstUpdated(e){if(super.firstUpdated(e),this.didSSR&&!this.hasUpdated&&await this.updateComplete,this.syncDefaultSelected(),this.selected&&!this.defaultSelected){let e=this.closest(`wa-select, wa-combobox`);e&&!e.hasInteracted&&(await customElements.whenDefined(e?.localName),await e.updateComplete,e.selectionChanged?.())}}updateDefaultLabel(){let e=this.cachedDefaultLabel;this.cachedDefaultLabel=Zt(this).trim(),this.isDefaultLabelDirty=!1;let t=this.cachedDefaultLabel!==e;return!this._label&&t&&this.requestUpdate(`label`,e),t}render(){let e=this.selected;return this.didSSR&&!this.hasUpdated?(this.updateComplete.then(()=>{this.requestUpdate()}),T):Ce`
      ${e?Ce`<wa-icon
            part="checked-icon"
            class="check"
            name="check"
            library="system"
            variant="solid"
            aria-hidden="true"
          ></wa-icon>`:Ce`<span part="checked-icon" class="check" aria-hidden="true"></span>`}
      <slot part="start" name="start" class="start"></slot>
      <slot part="label" class="label" @slotchange=${this.handleDefaultSlotChange}></slot>
      <slot part="end" name="end" class="end"></slot>
    `}};Qt.css=Rt,k([tt(`.label`)],Qt.prototype,`defaultSlot`,2),k([$e()],Qt.prototype,`current`,2),k([A({reflect:!0})],Qt.prototype,`value`,2),k([A({type:Boolean})],Qt.prototype,`disabled`,2),k([A({type:Boolean,attribute:!1})],Qt.prototype,`selected`,2),k([A({type:Boolean,attribute:`selected`})],Qt.prototype,`defaultSelected`,2),k([A()],Qt.prototype,`label`,1),Qt=k([Xe(`wa-option`)],Qt);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var $t=t({default:()=>Qt}),en=u`
  :host {
    --tag-max-size: 10ch;
    --show-duration: var(--wa-transition-fast);
    --hide-duration: var(--wa-transition-fast);
  }

  /* Add ellipses to multi select options */
  :host wa-tag::part(content) {
    display: initial;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: var(--tag-max-size);
  }

  :host .disabled [part~='combobox'] {
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  :host .enabled:is(.open, :focus-within) [part~='combobox'] {
    outline-color: var(--wa-color-focus);
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;

    /* Pass through from select to the popup */
    --show-duration: inherit;
    --hide-duration: inherit;

    &::part(popup) {
      z-index: 900;
    }

    &[data-current-placement^='top']::part(popup) {
      transform-origin: bottom;
    }

    &[data-current-placement^='bottom']::part(popup) {
      transform-origin: top;
    }
  }

  /* Combobox */
  .combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    align-items: center;
    justify-content: start;

    min-height: var(--wa-form-control-height);

    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
    border-radius: var(--wa-form-control-border-radius);
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
    color: var(--wa-form-control-value-color);
    cursor: pointer;
    font-family: inherit;
    font-weight: var(--wa-form-control-value-font-weight);
    line-height: var(--wa-form-control-value-line-height);
    overflow: hidden;
    padding: 0 var(--wa-form-control-padding-inline);
    position: relative;
    vertical-align: middle;
    transition:
      background-color var(--wa-transition-normal),
      border-color var(--wa-transition-normal),
      outline-color var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
    outline: var(--wa-focus-ring-style) var(--wa-focus-ring-width) transparent;
    outline-offset: var(--wa-focus-ring-offset);

    /* Pills */
    :host([pill]) & {
      border-radius: var(--wa-border-radius-pill);
    }
  }

  /* Appearance modifiers */
  :host([appearance='outlined']) .combobox {
    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
  }

  :host([appearance='filled']) .combobox {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-color-neutral-fill-quiet);
  }

  :host([appearance='filled-outlined']) .combobox {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-form-control-border-color);
  }

  .display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    line-height: var(--wa-form-control-value-line-height);
    color: var(--wa-form-control-value-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: var(--wa-form-control-placeholder-color);
    }
  }

  /* Manage spacing when tags are present */
  :host([multiple]) {
    --_padding-with-tags: calc(var(--wa-form-control-height) * 0.1 - var(--wa-form-control-border-width));

    & .combobox:has(.tags wa-tag) {
      padding-block: var(--_padding-with-tags);
      padding-inline-start: var(--_padding-with-tags);
    }
  }

  /* Visually hide the display input when multiple is enabled */
  :host([multiple]) .combobox:has(.tags wa-tag) .display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .value-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    padding: 0;
    margin: 0;
  }

  .tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.25em;

    /* Nested inside the box, so a step down from the box's radius */
    & wa-tag:not([pill]) {
      border-radius: var(--wa-border-radius-s);
    }

    .disabled & {
      cursor: not-allowed !important;
    }
  }

  /* Start and End */

  .start,
  .end {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--wa-color-neutral-on-quiet);
  }

  .end::slotted(*) {
    margin-inline-start: var(--wa-form-control-padding-inline);
  }

  .start::slotted(*) {
    margin-inline-end: var(--wa-form-control-padding-inline);
  }

  :host([multiple]) .combobox:has(.tags wa-tag) .start::slotted(*) {
    margin-inline-start: calc(var(--wa-form-control-padding-inline) - var(--_padding-with-tags));
  }

  /* Clear button */
  [part~='clear-button'] {
    flex: 0 0 auto;
    display: inline-flex;
    align-self: stretch;
    align-items: center;
    justify-content: center;
    inline-size: 1.5em;
    font-size: inherit;
    color: var(--wa-color-neutral-on-quiet);
    border: none;
    background: none;
    padding: 0;
    transition: color var(--wa-transition-normal);
    cursor: pointer;
    /* The box is wider than the glyph, so overhang half that growth on each side. Keeps the glyph
       on the same trailing axis as the segmented-field pickers' clear buttons. */
    margin-inline-start: calc(var(--wa-form-control-padding-inline) - 0.125em);
    margin-inline-end: -0.125em;

    &:focus {
      outline: none;
    }

    @media (hover: hover) {
      &:hover {
        color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
      }
    }

    &:active {
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
    }
  }

  /* Expand icon */
  .expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    color: var(--wa-color-neutral-on-quiet);
    transition: rotate var(--wa-transition-slow) var(--wa-transition-easing);
    rotate: 0deg;
    margin-inline-start: var(--wa-form-control-padding-inline);

    .open & {
      rotate: -180deg;
    }
  }

  /* Listbox */
  .listbox {
    display: block;
    position: relative;
    font: inherit;
    box-shadow: var(--wa-shadow-m);
    background: var(--wa-color-surface-raised);
    border-color: var(--wa-color-surface-border);
    border-radius: var(--wa-border-radius-m);
    border-style: var(--wa-border-style);
    border-width: var(--wa-border-width-s);
    padding: 0.25em;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);

    &::slotted(wa-divider) {
      --spacing: 0.5em;
    }
  }

  /* Space options with half the listbox's padding */
  .listbox slot:not([name]) {
    display: flex;
    flex-direction: column;
    gap: 0.125em;
  }

  slot:not([name])::slotted(small) {
    display: block;
    font-size: var(--wa-font-size-smaller);
    font-weight: var(--wa-font-weight-semibold);
    color: var(--wa-color-text-quiet);
    padding-block: 0.5em;
    padding-inline: 2.25em;
  }
`;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function tn(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}function nn(e,t,n=`vertical`,r=`smooth`){let i=tn(e,t),a=i.top+t.scrollTop,o=i.left+t.scrollLeft,s=t.scrollLeft,c=t.scrollLeft+t.offsetWidth,l=t.scrollTop,u=t.scrollTop+t.offsetHeight;(n===`horizontal`||n===`both`)&&(o<s?t.scrollTo({left:o,behavior:r}):o+e.clientWidth>c&&t.scrollTo({left:o-t.offsetWidth+e.clientWidth,behavior:r})),(n===`vertical`||n===`both`)&&(a<l?t.scrollTo({top:a,behavior:r}):a+e.clientHeight>u&&t.scrollTo({top:a-t.offsetHeight+e.clientHeight,behavior:r}))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var rn=class extends Event{constructor(){super(`wa-show`,{bubbles:!0,cancelable:!0,composed:!0})}},an=class extends Event{constructor(e){super(`wa-hide`,{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}},on=class extends Event{constructor(){super(`wa-after-hide`,{bubbles:!0,cancelable:!1,composed:!0})}},sn=class extends Event{constructor(){super(`wa-after-show`,{bubbles:!0,cancelable:!1,composed:!0})}},cn=class extends Event{constructor(){super(`wa-clear`,{bubbles:!0,cancelable:!1,composed:!0})}},ln=[];function un(e){dn(e),ln.push(e)}function dn(e){for(let t=ln.length-1;t>=0;t--)if(ln[t]===e){ln.splice(t,1);break}}function fn(e){return ln.length>0&&ln[ln.length-1]===e}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var pn=(e={})=>{let{validationElement:t,validationProperty:n}=e;t||typeof document<`u`&&`createElement`in document&&(t=Object.assign(document.createElement(`input`),{required:!0})),n||=`value`;let r={observedAttributes:[`required`],message:t?.validationMessage,checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return(e.required??e.hasAttribute(`required`))&&(e[n]||(t.message=typeof r.message==`function`?r.message(e):r.message||``,t.isValid=!1,t.invalidKeys.push(`valueMissing`))),t}};return r},mn=u`
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
`,hn=class extends Event{constructor(){super(`wa-invalid`,{bubbles:!0,cancelable:!1,composed:!0})}},gn=()=>({observedAttributes:[`custom-error`],checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=[`customError`]),t}}),_n=class extends st{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=[`input`],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new hn))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},`addEventListener`in this&&this.addEventListener(`invalid`,this.emitInvalid)}static get validators(){return[gn()]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let n of t.observedAttributes)e.add(n);return[...e]}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.updateValidity()}):this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener?.(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has(`customError`)&&(this.customError||=null,this.setCustomValidity(this.customError||``)),e.has(`value`)||e.has(`disabled`)||e.has(`defaultValue`)){let e=this.value;this.updateFormValue(e)}e.has(`disabled`)&&(this.customStates.set(`disabled`,this.disabled),(this.hasAttribute(`disabled`)||!this.matches(`:disabled`))&&this.toggleAttribute(`disabled`,this.disabled)),super.willUpdate(e),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>this.updateValidity()):this.updateValidity()}updateFormValue(e){if(Array.isArray(e)){if(this.name){let t=new FormData;for(let n of e)t.append(this.name,n);this.setValue(t,t)}}else this.setValue(e,e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(e){e?this.setAttribute(`form`,e):this.removeAttribute(`form`)}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],n=e[1],r=e[2];r||=this.validationTarget,this.internals.setValidity(t,n,r||void 0),this.requestUpdate(`validity`),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set(`required`,e),this.customStates.set(`optional`,!e),this.customStates.set(`invalid`,!t),this.customStates.set(`valid`,t),this.customStates.set(`user-invalid`,!t&&n),this.customStates.set(`user-valid`,t&&n)}setCustomValidity(e){if(!e){this.customError=null,this.setValidity({});return}this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity()}):(this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity())}setValue(...e){let[t,n]=e;this.internals.setFormValue(t,n)}get allValidators(){let e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(``),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute(`disabled`)||!this.willValidate){this.resetValidity();return}let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},n=this.validationTarget||this.input||void 0,r=``;for(let n of e){let{isValid:e,message:i,invalidKeys:a}=n.checkValidity(this);e||(r||=i,a?.length>=0&&a.forEach(e=>t[e]=!0))}r||=this.validationMessage,this.setValidity(t,r,n)}};_n.formAssociated=!0,k([A({reflect:!0})],_n.prototype,`name`,2),k([A({type:Boolean})],_n.prototype,`disabled`,2),k([A({state:!0,attribute:!1})],_n.prototype,`valueHasChanged`,2),k([A({state:!0,attribute:!1})],_n.prototype,`hasInteracted`,2),k([A({attribute:`custom-error`,reflect:!0})],_n.prototype,`customError`,2),k([A({attribute:!1,state:!0,type:Object})],_n.prototype,`validity`,1);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var vn={small:`s`,medium:`m`,large:`l`},yn=new Set;function bn(e,t){t in vn&&!yn.has(`${e}:${t}`)&&(yn.add(`${e}:${t}`),console.warn(`[${e}] size="${t}" is deprecated. Use size="${vn[t]}" instead. The long-form value will be removed in the next major version.`))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var xn=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return this.host.childNodes?[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===Node.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`wa-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1}):!1}hasNamedSlot(e){return this.host.querySelector?.(`:scope > [slot="${e}"]`)!==null}test(e,t){return t&&this.host.didSSR&&!this.host.hasUpdated?!!this.host[t]:e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){let e=this.host.shadowRoot;e&&`addEventListener`in e&&e.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){let e=this.host.shadowRoot;e&&`removeEventListener`in e&&e.removeEventListener(`slotchange`,this.handleSlotChange)}},Sn=u`
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
function Cn(e,t){return new Promise(n=>{function r(i){i.target===e&&(e.removeEventListener(t,r),n())}e.addEventListener(t,r)})}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
async function wn(e,t,n){return e.animate(t,n).finished.catch(()=>{})}function Tn(e,t){return new Promise(n=>{let r=new AbortController,{signal:i}=r;if(e.classList.contains(t))return;e.classList.add(t);let a=!1,o=()=>{a||(a=!0,e.classList.remove(t),n(),r.abort())};e.addEventListener(`animationend`,o,{once:!0,signal:i}),e.addEventListener(`animationcancel`,o,{once:!0,signal:i}),requestAnimationFrame(()=>{!a&&e.getAnimations().length===0&&o()})})}function En(e){return e=e.toString().toLowerCase(),e.indexOf(`ms`)>-1?parseFloat(e)||0:e.indexOf(`s`)>-1?(parseFloat(e)||0)*1e3:parseFloat(e)||0}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const Dn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},On=e=>(...t)=>({_$litDirective$:e,values:t});var kn=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const An=On(class extends kn{constructor(e){if(super(e),e.type!==Dn.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter((t=>e[t])).join(` `)+` `}update(e,[t]){if(this.st===void 0){for(let n in this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter((e=>e!==``)))),t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return we}});
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/var jn=class extends kn{constructor(e){if(super(e),this.it=T,e.type!==Dn.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===T||e==null)return this._t=void 0,this.it=e;if(e===we)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};jn.directiveName=`unsafeHTML`,jn.resultType=1;const Mn=On(jn);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var j=class extends _n{constructor(){super(...arguments),this.assumeInteractionOn=[`blur`,`input`],this.cachedOptions=null,this.hasSlotController=new xn(this,`hint`,`label`),this.localize=new Xt(this),this.selectionOrder=new Map,this.typeToSelectString=``,this.slotChangePending=!1,this.displayLabel=``,this.selectedOptions=[],this.name=``,this._defaultValue=null,this.size=`m`,this.placeholder=``,this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.withClear=!1,this.open=!1,this.appearance=`outlined`,this.pill=!1,this.label=``,this.placement=`bottom`,this.hint=``,this.withLabel=!1,this.withHint=!1,this.required=!1,this.getTag=e=>Ce`
        <wa-tag
          part="tag"
          exportparts="
            base:tag__base,
            content:tag__content,
            remove-button:tag__remove-button,
            remove-button__base:tag__remove-button__base
          "
          ?pill=${this.pill}
          size=${this.size}
          with-remove
          data-value=${e.value}
          @wa-remove=${t=>this.handleTagRemove(t,e)}
        >
          ${e.label}
        </wa-tag>
      `,this.handleDocumentFocusIn=e=>{let t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{let t=e.target,n=t.closest(`[part~="clear-button"]`)!==null,r=t.closest(`wa-button`)!==null;if(!(n||r)){if(e.key===`Escape`&&this.open&&fn(this)&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key===`Enter`||e.key===` `&&this.typeToSelectString===``){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.hasInteracted=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if([`ArrowUp`,`ArrowDown`,`Home`,`End`].includes(e.key)){let t=this.getAllOptions(),n=t.indexOf(this.currentOption),r=Math.max(0,n);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key===`ArrowDown`?(r=n+1,r>t.length-1&&(r=0)):e.key===`ArrowUp`?(r=n-1,r<0&&(r=t.length-1)):e.key===`Home`?r=0:e.key===`End`&&(r=t.length-1),this.setCurrentOption(t[r])}if(e.key?.length===1||e.key===`Backspace`){let t=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key===`Backspace`)return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString=``,1e3),e.key===`Backspace`?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(let e of t)if(e.label.toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(e);break}}}},this.handleDocumentMouseDown=e=>{let t=e.composedPath();this&&!t.includes(this)&&this.hide()}}static get validators(){let e=[pn({validationElement:Object.assign(document.createElement(`select`),{required:!0})})];return[...super.validators,...e]}get validationTarget(){return this.valueInput}set defaultValue(e){this._defaultValue=this.convertDefaultValue(e)}get defaultValue(){return this.convertDefaultValue(this._defaultValue)}rawValuesEqual(e,t){return e==null&&t==null?!0:e==null||t==null||e.length!==t.length?!1:e.every((e,n)=>e===t[n])}convertDefaultValue(e){return!(this.multiple||this.hasAttribute(`multiple`))&&Array.isArray(e)&&(e=e[0]),e}set value(e){let t=this.value;e instanceof FormData&&(e=e.getAll(this.name)),e!=null&&!Array.isArray(e)&&(e=[e]);let n=this._value;this._value=e??null,this.rawValuesEqual(n,this._value)||(this.valueHasChanged=!0,this.requestUpdate(`value`,t))}get value(){let e=this._value??this.defaultValue??null;e!=null&&(e=Array.isArray(e)?e:[e]),this.optionValues=new Set(this.getAllOptions().filter(e=>!e.disabled).map(e=>e.value));let t=e;return e!=null&&(t=e.filter(e=>this.optionValues.has(e)),t=this.multiple?t:t[0],t??=null),t}handleSizeChange(){bn(this.localName,this.size)}connectedCallback(){super.connectedCallback(),this.processSlotChange(),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.cachedOptions=null}updateDefaultValue(){let e=this.getAllOptions().filter(e=>e.hasAttribute(`selected`)||e.defaultSelected);if(e.length>0){let t=e.map(e=>e.value);this._defaultValue=this.multiple?t:t[0]}this.hasAttribute(`value`)&&(this._defaultValue=this.getAttribute(`value`)||null)}addOpenListeners(){document.addEventListener(`focusin`,this.handleDocumentFocusIn),document.addEventListener(`keydown`,this.handleDocumentKeyDown),document.addEventListener(`mousedown`,this.handleDocumentMouseDown),un(this),this.getRootNode()!==document&&this.getRootNode().addEventListener(`focusin`,this.handleDocumentFocusIn)}removeOpenListeners(){document.removeEventListener(`focusin`,this.handleDocumentFocusIn),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`mousedown`,this.handleDocumentMouseDown),dn(this),this.getRootNode()!==document&&this.getRootNode().removeEventListener(`focusin`,this.handleDocumentFocusIn)}handleFocus(){this.displayInput.setSelectionRange(0,0)}handleLabelClick(){this.displayInput.focus()}handleComboboxClick(e){e.preventDefault()}handleComboboxMouseDown(e){let t=e.composedPath().some(e=>e instanceof Element&&e.tagName.toLowerCase()===`wa-button`);this.disabled||t||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.stopPropagation(),this.handleDocumentKeyDown(e)}handleClearClick(e){e.stopPropagation(),this.hasInteracted=!0,this.valueHasChanged=!0,this.value!==null&&(this.displayLabel=``,this.selectionOrder.clear(),this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.dispatchEvent(new cn),this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){let t=e.target.closest(`wa-option`);t&&!t.disabled&&(this.hasInteracted=!0,this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(t):this.setSelectedOptions(t),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.requestUpdate(`value`),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){this.slotChangePending||(this.slotChangePending=!0,queueMicrotask(()=>{this.slotChangePending=!1,this.processSlotChange()}))}processSlotChange(){if(customElements.get(`wa-option`)||customElements.whenDefined(`wa-option`).then(()=>this.handleDefaultSlotChange()),this.didSSR&&!this.hasUpdated){this.updateComplete.then(()=>{this.handleDefaultSlotChange()});return}this.cachedOptions=null;let e=this.getAllOptions();this.updateDefaultValue();let t=this.value;if(t==null||!this.valueHasChanged&&!this.hasInteracted){this.selectionChanged();return}Array.isArray(t)||(t=[t]);let n=e.filter(e=>t.includes(e.value));this.setSelectedOptions(n)}handleTagRemove(e,t){if(e.stopPropagation(),this.disabled)return;this.hasInteracted=!0,this.valueHasChanged=!0;let n=t;if(!n){let t=e.target.closest(`wa-tag[data-value]`);if(t){let e=t.dataset.value;n=this.selectedOptions.find(t=>t.value===e)}}n&&(this.toggleOptionSelection(n,!1),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}))}getAllOptions(){return this.cachedOptions?this.cachedOptions:this?.querySelectorAll?(this.cachedOptions=[...this.querySelectorAll(`wa-option`)],this.cachedOptions):[]}getFirstOption(){return this.querySelector(`wa-option`)}setCurrentOption(e){this.getAllOptions().forEach(e=>{e.current=!1,e.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus({preventScroll:!0}),this.open&&!this.listbox.hidden&&nn(e,this.listbox,`vertical`,`auto`))}setSelectedOptions(e){let t=this.getAllOptions(),n=Array.isArray(e)?e:[e];t.forEach(e=>{n.includes(e)||(e.selected=!1)}),n.length&&n.forEach(e=>e.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){t===!0||t===!1?e.selected=t:e.selected=!e.selected,this.selectionChanged()}selectionChanged(){let e=this.getAllOptions().filter(e=>{if(!this.hasInteracted&&!this.valueHasChanged){let t=this.defaultValue,n=Array.isArray(t)?t:[t];return e.hasAttribute(`selected`)||e.defaultSelected||e.selected||n?.includes(e.value)}return e.selected}),t=new Set(e.map(e=>e.value));for(let e of this.selectionOrder.keys())t.has(e)||this.selectionOrder.delete(e);let n=(this.selectionOrder.size>0?Math.max(...this.selectionOrder.values()):-1)+1;for(let t of e)this.selectionOrder.has(t.value)||this.selectionOrder.set(t.value,n++);this.selectedOptions=e.sort((e,t)=>(this.selectionOrder.get(e.value)??0)-(this.selectionOrder.get(t.value)??0));let r=new Set(this.selectedOptions.map(e=>e.value));if(r.size>0||this._value){let e=this._value;if(this._value==null){let e=this.defaultValue??[];this._value=Array.isArray(e)?e:[e]}this._value=this._value?.filter(e=>!this.optionValues?.has(e))??null,this._value?.unshift(...r),this.requestUpdate(`value`,e)}this.multiple?this.placeholder&&!this.value?.length?this.displayLabel=``:this.displayLabel=this.localize.term(`numOptionsSelected`,this.selectedOptions.length):this.displayLabel=this.selectedOptions[0]?.label??``,this.updateComplete.then(()=>{this.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){let n=this.getTag(e,t);return n?typeof n==`string`?Mn(n):n:null}else if(t===this.maxOptionsVisible)return Ce`
          <wa-tag
            part="tag"
            exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
            ?pill=${this.pill}
            size=${this.size}
            >+${this.selectedOptions.length-t}</wa-tag
          >
        `;return null})}updated(e){super.updated(e),(e.has(`value`)||e.has(`displayLabel`))&&this.customStates.set(`blank`,!this.value&&!this.displayLabel)}handleDisabledChange(){this.disabled&&this.open&&(this.open=!1)}handleValueChange(){let e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value],n=e.filter(e=>t.includes(e.value));this.setSelectedOptions(n),this.updateValidity()}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption());let e=new rn;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)}),await Tn(this.popup.popup,`show`),this.currentOption&&nn(this.currentOption,this.listbox,`vertical`,`auto`),this.dispatchEvent(new sn)}else{let e=new an;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.removeOpenListeners(),await Tn(this.popup.popup,`hide`),this.listbox.hidden=!0,this.popup.active=!1,this.dispatchEvent(new on)}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,Cn(this,`wa-after-show`)}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,Cn(this,`wa-after-hide`)}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}formResetCallback(){this.selectionOrder.clear(),this.value=this.defaultValue,super.formResetCallback(),this.handleValueChange(),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})}render(){let e=this.hasSlotController.test(`label`,`withLabel`),t=this.hasSlotController.test(`hint`,`withHint`),n=this.label?!0:!!e,r=this.hint?!0:!!t,i=(this.hasUpdated||!1)&&this.withClear&&!this.disabled&&(this.displayLabel||this.value&&this.value.length>0);return Ce`
      <div
        part="form-control"
        class=${An({"form-control":!0,"form-control-has-label":n})}
      >
        <label
          id="label"
          part="form-control-label label"
          class=${An({label:!0,"has-label":n})}
          aria-hidden=${n?`false`:`true`}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <wa-popup
            class=${An({select:!0,open:this.open,disabled:this.disabled,enabled:!this.disabled,multiple:this.multiple})}
            placement=${this.placement}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
              @click=${this.handleComboboxClick}
            >
              <slot part="start" name="start" class="start"></slot>

              <input
                part="display-input"
                class="display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                ?required=${this.required}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-invalid=${!this.validity.valid}
                aria-controls="listbox"
                aria-expanded=${this.open?`true`:`false`}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?`true`:`false`}
                aria-describedby="hint"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
              />

              <!-- Tags need to wait for first hydration before populating otherwise it will create a hydration mismatch. -->
              ${this.multiple&&this.hasUpdated?Ce`<div part="tags" class="tags" @wa-remove=${this.handleTagRemove}>${this.tags}</div>`:``}

              <input
                class="value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(`, `):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
              />

              ${i?Ce`
                    <button
                      part="clear-button"
                      type="button"
                      aria-label=${this.localize.term(`clearEntry`)}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <wa-icon name="circle-xmark" library="system" variant="regular"></wa-icon>
                      </slot>
                    </button>
                  `:``}

              <slot name="end" part="end" class="end"></slot>

              <slot name="expand-icon" part="expand-icon" class="expand-icon">
                <wa-icon library="system" name="chevron-down" variant="solid"></wa-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?`true`:`false`}
              aria-multiselectable=${this.multiple?`true`:`false`}
              aria-labelledby="label"
              part="listbox"
              class="listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
            >
              <slot @slotchange=${this.handleDefaultSlotChange}></slot>
            </div>
          </wa-popup>
        </div>

        <slot
          id="hint"
          name="hint"
          part="hint"
          class=${An({"has-slotted":r})}
          aria-hidden=${r?`false`:`true`}
          >${this.hint}</slot
        >
      </div>
    `}};j.css=[en,mn,Sn],k([tt(`.select`)],j.prototype,`popup`,2),k([tt(`.combobox`)],j.prototype,`combobox`,2),k([tt(`.display-input`)],j.prototype,`displayInput`,2),k([tt(`.value-input`)],j.prototype,`valueInput`,2),k([tt(`.listbox`)],j.prototype,`listbox`,2),k([$e()],j.prototype,`displayLabel`,2),k([$e()],j.prototype,`currentOption`,2),k([$e()],j.prototype,`selectedOptions`,2),k([A({reflect:!0})],j.prototype,`name`,2),k([A({attribute:!1})],j.prototype,`defaultValue`,1),k([A({attribute:`value`,reflect:!1})],j.prototype,`value`,1),k([A({reflect:!0})],j.prototype,`size`,2),k([D(`size`)],j.prototype,`handleSizeChange`,1),k([A()],j.prototype,`placeholder`,2),k([A({type:Boolean,reflect:!0})],j.prototype,`multiple`,2),k([A({attribute:`max-options-visible`,type:Number})],j.prototype,`maxOptionsVisible`,2),k([A({type:Boolean})],j.prototype,`disabled`,2),k([A({attribute:`with-clear`,type:Boolean})],j.prototype,`withClear`,2),k([A({type:Boolean,reflect:!0})],j.prototype,`open`,2),k([A({reflect:!0})],j.prototype,`appearance`,2),k([A({type:Boolean,reflect:!0})],j.prototype,`pill`,2),k([A()],j.prototype,`label`,2),k([A({reflect:!0})],j.prototype,`placement`,2),k([A({attribute:`hint`})],j.prototype,`hint`,2),k([A({attribute:`with-label`,type:Boolean})],j.prototype,`withLabel`,2),k([A({attribute:`with-hint`,type:Boolean})],j.prototype,`withHint`,2),k([A({type:Boolean,reflect:!0})],j.prototype,`required`,2),k([A({attribute:!1})],j.prototype,`getTag`,2),k([D(`disabled`,{waitUntilFirstUpdate:!0})],j.prototype,`handleDisabledChange`,1),k([D(`value`,{waitUntilFirstUpdate:!0})],j.prototype,`handleValueChange`,1),k([D(`open`,{waitUntilFirstUpdate:!0})],j.prototype,`handleOpenChange`,1),j=k([Xe(`wa-select`)],j),j.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Nn=class extends Event{constructor(){super(`wa-remove`,{bubbles:!0,cancelable:!1,composed:!0})}},Pn=u`
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
`,Fn=u`
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
`,In=class extends st{constructor(){super(...arguments),this.localize=new Xt(this),this.variant=`neutral`,this.appearance=`filled-outlined`,this.size=`m`,this.pill=!1,this.withRemove=!1}handleSizeChange(){bn(this.localName,this.size)}handleRemoveClick(){this.dispatchEvent(new Nn)}render(){return Ce`
      <slot part="content" class="content"></slot>

      ${this.withRemove?Ce`
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
    `}};In.css=[Pn,Fn,Sn],k([A({reflect:!0})],In.prototype,`variant`,2),k([A({reflect:!0})],In.prototype,`appearance`,2),k([A({reflect:!0})],In.prototype,`size`,2),k([D(`size`)],In.prototype,`handleSizeChange`,1),k([A({type:Boolean,reflect:!0})],In.prototype,`pill`,2),k([A({attribute:`with-remove`,type:Boolean})],In.prototype,`withRemove`,2),In=k([Xe(`wa-tag`)],In);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ln=class extends Event{constructor(){super(`wa-reposition`,{bubbles:!0,cancelable:!1,composed:!0})}},Rn=u`
  :host {
    --arrow-color: black;
    --arrow-size: var(--wa-tooltip-arrow-size);
    --popup-border-width: 0px;
    --show-duration: var(--wa-transition-fast);
    --hide-duration: var(--wa-transition-fast);

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45) to calculate the length of the arrow after rotation.
     *
     * The diamond will be translated inward by --arrow-base-offset, the border thickness, to centralise it on
     * the inner edge of the popup border. This also means we need to increase the size of the arrow by the
     * same amount to compensate.
     *
     * A diamond shaped clipping mask is used to avoid overlap of popup content. This extends slightly inward so
     * the popup border is covered with no sub-pixel rounding artifacts. The diamond corners are mitred at 22.5º
     * to properly merge any arrow border with the popup border. The constant 1.4142 is derived from 1 + tan(22.5).
     *
     */
    --arrow-base-offset: var(--popup-border-width);
    --arrow-size-diagonal: calc((var(--arrow-size) + var(--arrow-base-offset)) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));
    --arrow-size-div: calc(var(--arrow-size-diagonal) * 2);
    --arrow-clipping-corner: calc(var(--arrow-base-offset) * 1.4142);

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);

    /* Clear UA styles for [popover] */
    :where(&) {
      inset: unset;
      padding: unset;
      margin: unset;
      width: unset;
      height: unset;
      color: unset;
      background: unset;
      border: unset;
      overflow: unset;
    }
  }

  .popup-fixed {
    position: fixed;
  }

  .popup:not(.popup-active) {
    display: none;
  }

  .arrow {
    position: absolute;
    width: var(--arrow-size-div);
    height: var(--arrow-size-div);
    background: var(--arrow-color);
    z-index: 3;
    clip-path: polygon(
      var(--arrow-clipping-corner) 100%,
      var(--arrow-base-offset) calc(100% - var(--arrow-base-offset)),
      calc(var(--arrow-base-offset) - 2px) calc(100% - var(--arrow-base-offset)),
      calc(100% - var(--arrow-base-offset)) calc(var(--arrow-base-offset) - 2px),
      calc(100% - var(--arrow-base-offset)) var(--arrow-base-offset),
      100% var(--arrow-clipping-corner),
      100% 100%
    );
    rotate: 45deg;
  }

  :host([data-current-placement|='left']) .arrow {
    rotate: -45deg;
  }

  :host([data-current-placement|='right']) .arrow {
    rotate: 135deg;
  }

  :host([data-current-placement|='bottom']) .arrow {
    rotate: 225deg;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge-visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: 899;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }

  /* Built-in animations */
  .show {
    animation: show var(--show-duration) ease;
  }

  .hide {
    animation: show var(--hide-duration) ease reverse;
  }

  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .show-with-scale {
    animation: show-with-scale var(--show-duration) ease;
  }

  .hide-with-scale {
    animation: show-with-scale var(--hide-duration) ease reverse;
  }

  @keyframes show-with-scale {
    from {
      opacity: 0;
      scale: 0.8;
    }
    to {
      opacity: 1;
      scale: 1;
    }
  }
`;const zn=Math.min,Bn=Math.max,Vn=Math.round,Hn=Math.floor,Un=e=>({x:e,y:e}),Wn={left:`right`,right:`left`,bottom:`top`,top:`bottom`},Gn={start:`end`,end:`start`};function Kn(e,t,n){return Bn(e,zn(t,n))}function qn(e,t){return typeof e==`function`?e(t):e}function Jn(e){return e.split(`-`)[0]}function Yn(e){return e.split(`-`)[1]}function Xn(e){return e===`x`?`y`:`x`}function Zn(e){return e===`y`?`height`:`width`}const Qn=new Set([`top`,`bottom`]);function $n(e){return Qn.has(Jn(e))?`y`:`x`}function er(e){return Xn($n(e))}function tr(e,t,n){n===void 0&&(n=!1);let r=Yn(e),i=er(e),a=Zn(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=ur(o)),[o,ur(o)]}function nr(e){let t=ur(e);return[rr(e),t,rr(t)]}function rr(e){return e.replace(/start|end/g,e=>Gn[e])}const ir=[`left`,`right`],ar=[`right`,`left`],or=[`top`,`bottom`],sr=[`bottom`,`top`];function cr(e,t,n){switch(e){case`top`:case`bottom`:return n?t?ar:ir:t?ir:ar;case`left`:case`right`:return t?or:sr;default:return[]}}function lr(e,t,n,r){let i=Yn(e),a=cr(Jn(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(rr)))),a}function ur(e){return e.replace(/left|right|bottom|top/g,e=>Wn[e])}function dr(e){return{top:0,right:0,bottom:0,left:0,...e}}function fr(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:dr(e)}function pr(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function mr(e,t,n){let{reference:r,floating:i}=e,a=$n(t),o=er(t),s=Zn(o),c=Jn(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}switch(Yn(t)){case`start`:p[o]-=f*(n&&l?-1:1);break;case`end`:p[o]+=f*(n&&l?-1:1);break}return p}const hr=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=a.filter(Boolean),c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=mr(l,r,c),f=r,p={},m=0;for(let n=0;n<s.length;n++){let{name:a,fn:h}=s[n],{x:g,y:_,data:v,reset:y}=await h({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:p,rects:l,platform:o,elements:{reference:e,floating:t}});u=g??u,d=_??d,p={...p,[a]:{...p[a],...v}},y&&m<=50&&(m++,typeof y==`object`&&(y.placement&&(f=y.placement),y.rects&&(l=y.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):y.rects),{x:u,y:d}=mr(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:p}};async function gr(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=qn(t,e),p=fr(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=pr(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=pr(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}const _r=e=>({name:`arrow`,options:e,async fn(t){let{x:n,y:r,placement:i,rects:a,platform:o,elements:s,middlewareData:c}=t,{element:l,padding:u=0}=qn(e,t)||{};if(l==null)return{};let d=fr(u),f={x:n,y:r},p=er(i),m=Zn(p),h=await o.getDimensions(l),g=p===`y`,_=g?`top`:`left`,v=g?`bottom`:`right`,y=g?`clientHeight`:`clientWidth`,ee=a.reference[m]+a.reference[p]-f[p]-a.floating[m],te=f[p]-a.reference[p],ne=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l)),b=ne?ne[y]:0;(!b||!await(o.isElement==null?void 0:o.isElement(ne)))&&(b=s.floating[y]||a.floating[m]);let x=ee/2-te/2,S=b/2-h[m]/2-1,re=zn(d[_],S),ie=zn(d[v],S),ae=re,oe=b-h[m]-ie,C=b/2-h[m]/2+x,se=Kn(ae,C,oe),w=!c.arrow&&Yn(i)!=null&&C!==se&&a.reference[m]/2-(C<ae?re:ie)-h[m]/2<0,ce=w?C<ae?C-ae:C-oe:0;return{[p]:f[p]+ce,data:{[p]:se,centerOffset:C-se-ce,...w&&{alignmentOffset:ce}},reset:w}}}),vr=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=qn(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=Jn(r),_=$n(o),v=Jn(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),ee=d||(v||!m?[ur(o)]:nr(o)),te=p!==`none`;!d&&te&&ee.push(...lr(o,m,p,y));let ne=[o,...ee],b=await gr(t,h),x=[],S=i.flip?.overflows||[];if(l&&x.push(b[g]),u){let e=tr(r,a,y);x.push(b[e[0]],b[e[1]])}if(S=[...S,{placement:r,overflows:x}],!x.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=ne[e];if(t&&(!(u===`alignment`&&_!==$n(t))||S.every(e=>$n(e.placement)===_?e.overflows[0]>0:!0)))return{data:{index:e,overflows:S},reset:{placement:t}};let n=S.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=S.filter(e=>{if(te){let t=$n(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o;break}if(r!==n)return{reset:{placement:n}}}return{}}}},yr=new Set([`left`,`top`]);async function br(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=Jn(n),s=Yn(n),c=$n(n)===`y`,l=yr.has(o)?-1:1,u=a&&c?-1:1,d=qn(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}const xr=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await br(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},Sr=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i}=t,{mainAxis:a=!0,crossAxis:o=!1,limiter:s={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...c}=qn(e,t),l={x:n,y:r},u=await gr(t,c),d=$n(Jn(i)),f=Xn(d),p=l[f],m=l[d];if(a){let e=f===`y`?`top`:`left`,t=f===`y`?`bottom`:`right`,n=p+u[e],r=p-u[t];p=Kn(n,p,r)}if(o){let e=d===`y`?`top`:`left`,t=d===`y`?`bottom`:`right`,n=m+u[e],r=m-u[t];m=Kn(n,m,r)}let h=s.fn({...t,[f]:p,[d]:m});return{...h,data:{x:h.x-n,y:h.y-r,enabled:{[f]:a,[d]:o}}}}}},Cr=function(e){return e===void 0&&(e={}),{name:`size`,options:e,async fn(t){var n,r;let{placement:i,rects:a,platform:o,elements:s}=t,{apply:c=()=>{},...l}=qn(e,t),u=await gr(t,l),d=Jn(i),f=Yn(i),p=$n(i)===`y`,{width:m,height:h}=a.floating,g,_;d===`top`||d===`bottom`?(g=d,_=f===(await(o.isRTL==null?void 0:o.isRTL(s.floating))?`start`:`end`)?`left`:`right`):(_=d,g=f===`end`?`top`:`bottom`);let v=h-u.top-u.bottom,y=m-u.left-u.right,ee=zn(h-u[g],v),te=zn(m-u[_],y),ne=!t.middlewareData.shift,b=ee,x=te;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(x=y),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(b=v),ne&&!f){let e=Bn(u.left,0),t=Bn(u.right,0),n=Bn(u.top,0),r=Bn(u.bottom,0);p?x=m-2*(e!==0||t!==0?e+t:Bn(u.left,u.right)):b=h-2*(n!==0||r!==0?n+r:Bn(u.top,u.bottom))}await c({...t,availableWidth:x,availableHeight:b});let S=await o.getDimensions(s.floating);return m!==S.width||h!==S.height?{reset:{rects:!0}}:{}}}};function wr(){return typeof window<`u`}function Tr(e){return Or(e)?(e.nodeName||``).toLowerCase():`#document`}function Er(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Dr(e){return((Or(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function Or(e){return wr()?e instanceof Node||e instanceof Er(e).Node:!1}function kr(e){return wr()?e instanceof Element||e instanceof Er(e).Element:!1}function Ar(e){return wr()?e instanceof HTMLElement||e instanceof Er(e).HTMLElement:!1}function jr(e){return!wr()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof Er(e).ShadowRoot}const Mr=new Set([`inline`,`contents`]);function Nr(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=Kr(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!Mr.has(i)}const Pr=new Set([`table`,`td`,`th`]);function Fr(e){return Pr.has(Tr(e))}const Ir=[`:popover-open`,`:modal`];function Lr(e){return Ir.some(t=>{try{return e.matches(t)}catch{return!1}})}const Rr=[`transform`,`translate`,`scale`,`rotate`,`perspective`],zr=[`transform`,`translate`,`scale`,`rotate`,`perspective`,`filter`],Br=[`paint`,`layout`,`strict`,`content`];function Vr(e){let t=Ur(),n=kr(e)?Kr(e):e;return Rr.some(e=>n[e]?n[e]!==`none`:!1)||(n.containerType?n.containerType!==`normal`:!1)||!t&&(n.backdropFilter?n.backdropFilter!==`none`:!1)||!t&&(n.filter?n.filter!==`none`:!1)||zr.some(e=>(n.willChange||``).includes(e))||Br.some(e=>(n.contain||``).includes(e))}function Hr(e){let t=Jr(e);for(;Ar(t)&&!Gr(t);){if(Vr(t))return t;if(Lr(t))return null;t=Jr(t)}return null}function Ur(){return typeof CSS>`u`||!CSS.supports?!1:CSS.supports(`-webkit-backdrop-filter`,`none`)}const Wr=new Set([`html`,`body`,`#document`]);function Gr(e){return Wr.has(Tr(e))}function Kr(e){return Er(e).getComputedStyle(e)}function qr(e){return kr(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Jr(e){if(Tr(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||jr(e)&&e.host||Dr(e);return jr(t)?t.host:t}function Yr(e){let t=Jr(e);return Gr(t)?e.ownerDocument?e.ownerDocument.body:e.body:Ar(t)&&Nr(t)?t:Yr(t)}function Xr(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=Yr(e),i=r===e.ownerDocument?.body,a=Er(r);if(i){let e=Zr(a);return t.concat(a,a.visualViewport||[],Nr(r)?r:[],e&&n?Xr(e):[])}return t.concat(r,Xr(r,[],n))}function Zr(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Qr(e){let t=Kr(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=Ar(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=Vn(n)!==a||Vn(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function $r(e){return kr(e)?e:e.contextElement}function ei(e){let t=$r(e);if(!Ar(t))return Un(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=Qr(t),o=(a?Vn(n.width):n.width)/r,s=(a?Vn(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}const ti=Un(0);function ni(e){let t=Er(e);return!Ur()||!t.visualViewport?ti:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function ri(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==Er(e)?!1:t}function ii(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=$r(e),o=Un(1);t&&(r?kr(r)&&(o=ei(r)):o=ei(e));let s=ri(a,n,r)?ni(a):Un(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a){let e=Er(a),t=r&&kr(r)?Er(r):r,n=e,i=Zr(n);for(;i&&r&&t!==n;){let e=ei(i),t=i.getBoundingClientRect(),r=Kr(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=Er(i),i=Zr(n)}}return pr({width:u,height:d,x:c,y:l})}function ai(e,t){let n=qr(e).scrollLeft;return t?t.left+n:ii(Dr(e)).left+n}function oi(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-ai(e,n),y:n.top+t.scrollTop}}function si(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=Dr(r),s=t?Lr(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=Un(1),u=Un(0),d=Ar(r);if((d||!d&&!a)&&((Tr(r)!==`body`||Nr(o))&&(c=qr(r)),Ar(r))){let e=ii(r);l=ei(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?oi(o,c):Un(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function ci(e){return Array.from(e.getClientRects())}function li(e){let t=Dr(e),n=qr(e),r=e.ownerDocument.body,i=Bn(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),a=Bn(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),o=-n.scrollLeft+ai(e),s=-n.scrollTop;return Kr(r).direction===`rtl`&&(o+=Bn(t.clientWidth,r.clientWidth)-i),{width:i,height:a,x:o,y:s}}function ui(e,t){let n=Er(e),r=Dr(e),i=n.visualViewport,a=r.clientWidth,o=r.clientHeight,s=0,c=0;if(i){a=i.width,o=i.height;let e=Ur();(!e||e&&t===`fixed`)&&(s=i.offsetLeft,c=i.offsetTop)}let l=ai(r);if(l<=0){let e=r.ownerDocument,t=e.body,n=getComputedStyle(t),i=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,o=Math.abs(r.clientWidth-t.clientWidth-i);o<=25&&(a-=o)}else l<=25&&(a+=l);return{width:a,height:o,x:s,y:c}}const di=new Set([`absolute`,`fixed`]);function fi(e,t){let n=ii(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=Ar(e)?ei(e):Un(1);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function pi(e,t,n){let r;if(t===`viewport`)r=ui(e,n);else if(t===`document`)r=li(Dr(e));else if(kr(t))r=fi(t,n);else{let n=ni(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return pr(r)}function mi(e,t){let n=Jr(e);return n===t||!kr(n)||Gr(n)?!1:Kr(n).position===`fixed`||mi(n,t)}function hi(e,t){let n=t.get(e);if(n)return n;let r=Xr(e,[],!1).filter(e=>kr(e)&&Tr(e)!==`body`),i=null,a=Kr(e).position===`fixed`,o=a?Jr(e):e;for(;kr(o)&&!Gr(o);){let t=Kr(o),n=Vr(o);!n&&t.position===`fixed`&&(i=null),(a?!n&&!i:!n&&t.position===`static`&&i&&di.has(i.position)||Nr(o)&&!n&&mi(e,o))?r=r.filter(e=>e!==o):i=t,o=Jr(o)}return t.set(e,r),r}function gi(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?Lr(t)?[]:hi(t,this._c):[].concat(n),r],o=a[0],s=a.reduce((e,n)=>{let r=pi(t,n,i);return e.top=Bn(r.top,e.top),e.right=zn(r.right,e.right),e.bottom=zn(r.bottom,e.bottom),e.left=Bn(r.left,e.left),e},pi(t,o,i));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}}function _i(e){let{width:t,height:n}=Qr(e);return{width:t,height:n}}function vi(e,t,n){let r=Ar(t),i=Dr(t),a=n===`fixed`,o=ii(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=Un(0);function l(){c.x=ai(i)}if(r||!r&&!a)if((Tr(t)!==`body`||Nr(i))&&(s=qr(t)),r){let e=ii(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else i&&l();a&&!r&&i&&l();let u=i&&!r&&!a?oi(i,s):Un(0);return{x:o.left+s.scrollLeft-c.x-u.x,y:o.top+s.scrollTop-c.y-u.y,width:o.width,height:o.height}}function yi(e){return Kr(e).position===`static`}function bi(e,t){if(!Ar(e)||Kr(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return Dr(e)===n&&(n=n.ownerDocument.body),n}function xi(e,t){let n=Er(e);if(Lr(e))return n;if(!Ar(e)){let t=Jr(e);for(;t&&!Gr(t);){if(kr(t)&&!yi(t))return t;t=Jr(t)}return n}let r=bi(e,t);for(;r&&Fr(r)&&yi(r);)r=bi(r,t);return r&&Gr(r)&&yi(r)&&!Vr(r)?n:r||Hr(e)||n}const Si=async function(e){let t=this.getOffsetParent||xi,n=this.getDimensions,r=await n(e.floating);return{reference:vi(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function Ci(e){return Kr(e).direction===`rtl`}const wi={convertOffsetParentRelativeRectToViewportRelativeRect:si,getDocumentElement:Dr,getClippingRect:gi,getOffsetParent:xi,getElementRects:Si,getClientRects:ci,getDimensions:_i,getScale:ei,isElement:kr,isRTL:Ci};function Ti(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Ei(e,t){let n=null,r,i=Dr(e);function a(){var e;clearTimeout(r),(e=n)==null||e.disconnect(),n=null}function o(s,c){s===void 0&&(s=!1),c===void 0&&(c=1),a();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(s||t(),!f||!p)return;let m=Hn(d),h=Hn(i.clientWidth-(u+f)),g=Hn(i.clientHeight-(d+p)),_=Hn(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:Bn(0,zn(1,c))||1},y=!0;function ee(t){let n=t[0].intersectionRatio;if(n!==c){if(!y)return o();n?o(!1,n):r=setTimeout(()=>{o(!1,1e-7)},1e3)}n===1&&!Ti(l,e.getBoundingClientRect())&&o(),y=!1}try{n=new IntersectionObserver(ee,{...v,root:i.ownerDocument})}catch{n=new IntersectionObserver(ee,v)}n.observe(e)}return o(!0),a}function Di(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=$r(e),u=i||a?[...l?Xr(l):[],...Xr(t)]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n,{passive:!0}),a&&e.addEventListener(`resize`,n)});let d=l&&s?Ei(l,n):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),p.observe(t));let m,h=c?ii(e):null;c&&g();function g(){let t=ii(e);h&&!Ti(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}const Oi=xr,ki=Sr,Ai=vr,ji=Cr,Mi=_r,Ni=(e,t,n)=>{let r=new Map,i={platform:wi,...n},a={...i.platform,_c:r};return hr(e,t,{...i,platform:a})};function Pi(e){return Ii(e)}function Fi(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Ii(e){for(let t=e;t;t=Fi(t))if(t instanceof Element&&getComputedStyle(t).display===`none`)return null;for(let t=Fi(e);t;t=Fi(t)){if(!(t instanceof Element))continue;let e=getComputedStyle(t);if(e.display!==`contents`&&(e.position!==`static`||Vr(e)||t.tagName===`BODY`))return t}return null}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Li(e){return typeof e==`object`&&!!e&&`getBoundingClientRect`in e&&(`contextElement`in e?e instanceof Element:!0)}var Ri=!!globalThis?.HTMLElement?.prototype.hasOwnProperty(`popover`),zi=class extends st{constructor(){super(...arguments),this.localize=new Xt(this),this.SUPPORTS_POPOVER=!1,this.active=!1,this.placement=`top`,this.boundary=`viewport`,this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement=`anchor`,this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements=``,this.flipFallbackStrategy=`best-fit`,this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl&&this.popup){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),n=this.placement.includes(`top`)||this.placement.includes(`bottom`),r=0,i=0,a=0,o=0,s=0,c=0,l=0,u=0;n?e.top<t.top?(r=e.left,i=e.bottom,a=e.right,o=e.bottom,s=t.left,c=t.top,l=t.right,u=t.top):(r=t.left,i=t.bottom,a=t.right,o=t.bottom,s=e.left,c=e.top,l=e.right,u=e.top):e.left<t.left?(r=e.right,i=e.top,a=t.left,o=t.top,s=e.right,c=e.bottom,l=t.left,u=t.bottom):(r=t.right,i=t.top,a=e.left,o=e.top,s=t.right,c=t.bottom,l=e.left,u=e.bottom),this.style.setProperty(`--hover-bridge-top-left-x`,`${r}px`),this.style.setProperty(`--hover-bridge-top-left-y`,`${i}px`),this.style.setProperty(`--hover-bridge-top-right-x`,`${a}px`),this.style.setProperty(`--hover-bridge-top-right-y`,`${o}px`),this.style.setProperty(`--hover-bridge-bottom-left-x`,`${s}px`),this.style.setProperty(`--hover-bridge-bottom-left-y`,`${c}px`),this.style.setProperty(`--hover-bridge-bottom-right-x`,`${l}px`),this.style.setProperty(`--hover-bridge-bottom-right-y`,`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.SUPPORTS_POPOVER=Ri,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has(`active`)&&(this.active?this.start():this.stop()),e.has(`anchor`)&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){await this.stop(),this.anchor&&typeof this.anchor==`string`?this.anchorEl=this.getRootNode().getElementById(this.anchor):this.anchor instanceof Element||Li(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector(`[slot="anchor"]`),this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){!this.anchorEl||!this.active||!this.isConnected||(this.popup?.showPopover?.(),this.cleanup=Di(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.popup?.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute(`data-current-placement`),this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl||!this.popup)return;let e=[Oi({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(ji({apply:({rects:e})=>{let t=this.sync===`width`||this.sync===`both`,n=this.sync===`height`||this.sync===`both`;this.popup.style.width=t?`${e.reference.width}px`:``,this.popup.style.height=n?`${e.reference.height}px`:``}})):(this.popup.style.width=``,this.popup.style.height=``);let t;this.SUPPORTS_POPOVER&&!Li(this.anchor)&&this.boundary===`scroll`&&(t=Xr(this.anchorEl).filter(e=>e instanceof Element)),this.flip&&e.push(Ai({boundary:this.flipBoundary||t,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy===`best-fit`?`bestFit`:`initialPlacement`,padding:this.flipPadding})),this.shift&&e.push(ki({boundary:this.shiftBoundary||t,padding:this.shiftPadding})),this.autoSize?e.push(ji({boundary:this.autoSizeBoundary||t,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{this.autoSize===`vertical`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-height`,`${t}px`):this.style.removeProperty(`--auto-size-available-height`),this.autoSize===`horizontal`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-width`,`${e}px`):this.style.removeProperty(`--auto-size-available-width`)}})):(this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`)),this.arrow&&e.push(Mi({element:this.arrowEl,padding:this.arrowPadding}));let n=this.SUPPORTS_POPOVER?e=>wi.getOffsetParent(e,Pi):wi.getOffsetParent;Ni(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.SUPPORTS_POPOVER?`absolute`:`fixed`,platform:{...wi,getOffsetParent:n}}).then(({x:e,y:t,middlewareData:n,placement:r})=>{let i=this.localize.dir()===`rtl`,a={top:`bottom`,right:`left`,bottom:`top`,left:`right`}[r.split(`-`)[0]];if(this.setAttribute(`data-current-placement`,r),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=n.arrow.x,t=n.arrow.y,r=``,o=``,s=``,c=``;if(this.arrowPlacement===`start`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;r=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``,o=i?n:``,c=i?``:n}else if(this.arrowPlacement===`end`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;o=i?``:n,c=i?n:``,s=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``}else this.arrowPlacement===`center`?(c=typeof e==`number`?`calc(50% - var(--arrow-size-diagonal))`:``,r=typeof t==`number`?`calc(50% - var(--arrow-size-diagonal))`:``):(c=typeof e==`number`?`${e}px`:``,r=typeof t==`number`?`${t}px`:``);Object.assign(this.arrowEl.style,{top:r,right:o,bottom:s,left:c,[a]:`calc(var(--arrow-base-offset) - var(--arrow-size-diagonal))`})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new Ln)}render(){return Ce`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${An({"popup-hover-bridge":!0,"popup-hover-bridge-visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${An({popup:!0,"popup-active":this.active,"popup-fixed":!this.SUPPORTS_POPOVER,"popup-has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?Ce`<div part="arrow" class="arrow" role="presentation"></div>`:``}
      </div>
    `}};zi.css=Rn,k([tt(`.popup`)],zi.prototype,`popup`,2),k([tt(`.arrow`)],zi.prototype,`arrowEl`,2),k([A({attribute:!1,type:Boolean})],zi.prototype,`SUPPORTS_POPOVER`,2),k([A()],zi.prototype,`anchor`,2),k([A({type:Boolean,reflect:!0})],zi.prototype,`active`,2),k([A({reflect:!0})],zi.prototype,`placement`,2),k([A()],zi.prototype,`boundary`,2),k([A({type:Number})],zi.prototype,`distance`,2),k([A({type:Number})],zi.prototype,`skidding`,2),k([A({type:Boolean})],zi.prototype,`arrow`,2),k([A({attribute:`arrow-placement`})],zi.prototype,`arrowPlacement`,2),k([A({attribute:`arrow-padding`,type:Number})],zi.prototype,`arrowPadding`,2),k([A({type:Boolean})],zi.prototype,`flip`,2),k([A({attribute:`flip-fallback-placements`,converter:{fromAttribute:e=>e.split(` `).map(e=>e.trim()).filter(e=>e!==``),toAttribute:e=>e.join(` `)}})],zi.prototype,`flipFallbackPlacements`,2),k([A({attribute:`flip-fallback-strategy`})],zi.prototype,`flipFallbackStrategy`,2),k([A({type:Object})],zi.prototype,`flipBoundary`,2),k([A({attribute:`flip-padding`,type:Number})],zi.prototype,`flipPadding`,2),k([A({type:Boolean})],zi.prototype,`shift`,2),k([A({type:Object})],zi.prototype,`shiftBoundary`,2),k([A({attribute:`shift-padding`,type:Number})],zi.prototype,`shiftPadding`,2),k([A({attribute:`auto-size`})],zi.prototype,`autoSize`,2),k([A()],zi.prototype,`sync`,2),k([A({type:Object})],zi.prototype,`autoSizeBoundary`,2),k([A({attribute:`auto-size-padding`,type:Number})],zi.prototype,`autoSizePadding`,2),k([A({attribute:`hover-bridge`,type:Boolean})],zi.prototype,`hoverBridge`,2),zi=k([Xe(`wa-popup`)],zi);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Bi=()=>({checkValidity(e){let t=e.input,n={message:``,isValid:!0,invalidKeys:[]};if(!t)return n;let r=!0;if(`checkValidity`in t&&(r=t.checkValidity()),r)return n;if(n.isValid=!1,`validationMessage`in t&&(n.message=t.validationMessage),!(`validity`in t))return n.invalidKeys.push(`customError`),n;for(let e in t.validity){if(e===`valid`)continue;let r=e;t.validity[r]&&n.invalidKeys.push(r)}return n}}),Vi=u`
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
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Hi=e=>e??T,Ui=Symbol.for(``),Wi=e=>{if(e?.r===Ui)return e?._$litStatic$},Gi=(e,...t)=>({_$litStatic$:t.reduce(((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1]),e[0]),r:Ui}),Ki=new Map,qi=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],i=Wi(a))!==void 0;)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=Ki.get(e))===void 0&&(o.raw=o,Ki.set(e,t=o)),n=s}return e(t,...n)})(Ce);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ji=class extends _n{constructor(){super(...arguments),this.assumeInteractionOn=[`click`],this.hasSlotController=new xn(this,`[default]`,`start`,`end`),this.localize=new Xt(this),this.invalid=!1,this.isIconButton=!1,this.title=``,this.variant=`neutral`,this.appearance=`accent`,this.size=`m`,this.withCaret=!1,this.withStart=!1,this.withEnd=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type=`button`}static get validators(){return[...super.validators,Bi()]}handleSizeChange(){bn(this.localName,this.size)}constructLightDOMButton(){let e=document.createElement(`button`);for(let t of this.attributes)t.name!==`style`&&e.setAttribute(t.name,t.value);return e.type=this.type,e.style.position=`absolute !important`,e.style.width=`0 !important`,e.style.height=`0 !important`,e.style.clipPath=`inset(50%) !important`,e.style.overflow=`hidden !important`,e.style.whiteSpace=`nowrap !important`,this.name&&(e.name=this.name),e.value=this.value||``,e}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopImmediatePropagation();return}if(this.type!==`submit`&&this.type!==`reset`||!this.getForm())return;let t=this.constructLightDOMButton();this.parentElement?.append(t),t.click(),t.remove()}handleInvalid(){this.dispatchEvent(new hn)}handleLabelSlotChange(){let e=this.labelSlot.assignedNodes({flatten:!0}),t=!1,n=!1,r=!1,i=!1;[...e].forEach(e=>{if(e.nodeType===Node.ELEMENT_NODE){let r=e;r.localName===`wa-icon`?(n=!0,t||=r.label!==void 0):i=!0}else e.nodeType===Node.TEXT_NODE&&(e.textContent?.trim()||``).length>0&&(r=!0)}),this.isIconButton=n&&!r&&!i,this.customStates.set(`icon-button`,this.isIconButton),this.isIconButton&&!t&&console.warn(`Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.`,this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.customStates.set(`disabled`,this.disabled),this.updateValidity()}handleHrefChange(){this.customStates.set(`link`,this.isLink())}handleLoadingChange(){this.customStates.set(`loading`,this.loading)}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=this.isLink(),t=e?Gi`a`:Gi`button`;return qi`
      <${t}
        part="base button"
        class=${An({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()===`rtl`,"has-label":this.hasSlotController.test(`[default]`),"has-start":this.hasSlotController.test(`start`,`withStart`),"has-end":this.hasSlotController.test(`end`,`withEnd`),"is-icon-button":this.isIconButton})}
        ?disabled=${Hi(e?void 0:this.disabled)}
        type=${Hi(e?void 0:this.type)}
        title=${this.title}
        name=${Hi(e?void 0:this.name)}
        value=${Hi(e?void 0:this.value)}
        href=${Hi(e?this.href:void 0)}
        target=${Hi(e?this.target:void 0)}
        download=${Hi(e?this.download:void 0)}
        rel=${Hi(e&&this.rel?this.rel:void 0)}
        role=${Hi(e?void 0:`button`)}
        aria-disabled=${Hi(e&&this.disabled?`true`:void 0)}
        aria-busy=${this.loading?`true`:`false`}
        tabindex=${this.disabled?`-1`:`0`}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?qi`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:``}
        ${this.loading?qi`<wa-spinner part="spinner"></wa-spinner>`:``}
      </${t}>
    `}};Ji.shadowRootOptions={..._n.shadowRootOptions,delegatesFocus:!0},Ji.css=[Vi,Fn,Sn],k([tt(`.button`)],Ji.prototype,`button`,2),k([tt(`slot:not([name])`)],Ji.prototype,`labelSlot`,2),k([$e()],Ji.prototype,`invalid`,2),k([$e()],Ji.prototype,`isIconButton`,2),k([A()],Ji.prototype,`title`,2),k([A({reflect:!0})],Ji.prototype,`variant`,2),k([A({reflect:!0})],Ji.prototype,`appearance`,2),k([A({reflect:!0})],Ji.prototype,`size`,2),k([D(`size`)],Ji.prototype,`handleSizeChange`,1),k([A({attribute:`with-caret`,type:Boolean,reflect:!0})],Ji.prototype,`withCaret`,2),k([A({attribute:`with-start`,type:Boolean})],Ji.prototype,`withStart`,2),k([A({attribute:`with-end`,type:Boolean})],Ji.prototype,`withEnd`,2),k([A({type:Boolean})],Ji.prototype,`disabled`,2),k([A({type:Boolean,reflect:!0})],Ji.prototype,`loading`,2),k([A({type:Boolean,reflect:!0})],Ji.prototype,`pill`,2),k([A()],Ji.prototype,`type`,2),k([A({reflect:!0})],Ji.prototype,`name`,2),k([A({reflect:!0})],Ji.prototype,`value`,2),k([A({reflect:!0})],Ji.prototype,`href`,2),k([A()],Ji.prototype,`target`,2),k([A()],Ji.prototype,`rel`,2),k([A()],Ji.prototype,`download`,2),k([A({attribute:`formaction`})],Ji.prototype,`formAction`,2),k([A({attribute:`formenctype`})],Ji.prototype,`formEnctype`,2),k([A({attribute:`formmethod`})],Ji.prototype,`formMethod`,2),k([A({attribute:`formnovalidate`,type:Boolean})],Ji.prototype,`formNoValidate`,2),k([A({attribute:`formtarget`})],Ji.prototype,`formTarget`,2),k([D(`disabled`,{waitUntilFirstUpdate:!0})],Ji.prototype,`handleDisabledChange`,1),k([D(`href`)],Ji.prototype,`handleHrefChange`,1),k([D(`loading`,{waitUntilFirstUpdate:!0})],Ji.prototype,`handleLoadingChange`,1),Ji=k([Xe(`wa-button`)],Ji),Ji.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Yi=u`
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
`,Xi=class extends st{constructor(){super(...arguments),this.localize=new Xt(this)}render(){return Ce`
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
    `}};Xi.css=Yi,Xi=k([Xe(`wa-spinner`)],Xi);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Zi=t({default:()=>j}),Qi=class extends Event{constructor(){super(`wa-lazy-change`,{bubbles:!0,cancelable:!1,composed:!0})}},$i=class extends Event{constructor(){super(`wa-lazy-load`,{bubbles:!0,cancelable:!1,composed:!0})}},ea=class extends Event{constructor(){super(`wa-expand`,{bubbles:!0,cancelable:!1,composed:!0})}},ta=class extends Event{constructor(){super(`wa-collapse`,{bubbles:!0,cancelable:!1,composed:!0})}},na=class extends Event{constructor(){super(`wa-after-collapse`,{bubbles:!0,cancelable:!1,composed:!0})}},ra=class extends Event{constructor(){super(`wa-after-expand`,{bubbles:!0,cancelable:!1,composed:!0})}},ia=u`
  :host {
    /* Private - set by the component to control indentation depth */
    --indent: 0px;
    --show-duration: var(--wa-transition-normal);
    --hide-duration: var(--wa-transition-normal);

    display: block;
    color: var(--wa-color-text-normal);
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(wa-icon) {
    margin-inline-end: 0.5em;
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    cursor: default;
    user-select: none;
    -webkit-user-select: none;
  }

  .checkbox {
    line-height: var(--wa-form-control-value-line-height);
    pointer-events: none;
  }

  .expand-button,
  .checkbox,
  .label {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
  }

  .checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .indentation {
    display: block;
    width: var(--indent);
    flex-shrink: 0;
  }

  .expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--wa-color-text-quiet);
    width: 2em;
    height: 2em;
    flex-shrink: 0;
    cursor: pointer;
  }

  .expand-button {
    transition: rotate var(--wa-transition-normal) var(--wa-transition-easing);
  }

  .tree-item-expanded .expand-button {
    rotate: 90deg;
  }

  .tree-item-expanded:dir(rtl) .expand-button {
    rotate: -90deg;
  }

  .tree-item-expanded:not(.tree-item-loading) slot[name='expand-icon'],
  .tree-item:not(.tree-item-expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item-has-expand-button):not(.tree-item-loading) .expand-icon-slot {
    display: none;
  }

  .tree-item:not(.tree-item-has-expand-button):not(.tree-item-loading) .expand-button {
    cursor: default;
  }

  .tree-item-loading .expand-icon-slot wa-icon {
    display: none;
  }

  .expand-button-visible {
    cursor: pointer;
  }

  .item {
    display: flex;
    align-items: center;
    border-inline-start: solid 0.1875em transparent;
  }

  :host([disabled]) .item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .item {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item-selected .item {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-inline-start-color: var(--wa-color-brand-fill-loud);
  }

  :host(:not([aria-disabled='true'])) .expand-button {
    color: var(--wa-color-text-quiet);
  }

  .label {
    display: flex;
    align-items: center;
    transition: color var(--wa-transition-normal) var(--wa-transition-easing);
  }

  .children {
    display: block;
  }

  /* Indentation lines */
  .children {
    position: relative;
  }

  .children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    inset-inline-start: calc(0.1875em + var(--indent) + 1em - (var(--indent-guide-width) / 2));
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item-selected .item {
      outline: dashed 1px SelectedItem;
    }
  }
`,aa=class extends Event{constructor(e,t,n,r){super(`context-request`,{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t,this.callback=n,this.subscribe=r??!1}};
/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
function oa(e){return e}
/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/var sa=class{constructor(e,t,n,r){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(e,t)=>{this.unsubscribe&&(this.unsubscribe!==t&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=e,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(e,t)),this.unsubscribe=t},this.host=e,t.context!==void 0){let e=t;this.context=e.context,this.callback=e.callback,this.subscribe=e.subscribe??!1}else this.context=t,this.callback=n,this.subscribe=r??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&=(this.unsubscribe(),void 0)}dispatchRequest(){this.host.dispatchEvent(new aa(this.context,this.host,this.t,this.subscribe))}},ca=class{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){let n=t||!Object.is(e,this.o);this.o=e,n&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(let[e,{disposer:t}]of this.subscriptions)e(this.o,t)},e!==void 0&&(this.value=e)}addCallback(e,t,n){if(!n)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});let{disposer:r}=this.subscriptions.get(e);e(this.value,r)}clearCallbacks(){this.subscriptions.clear()}},la=class extends Event{constructor(e,t){super(`context-provider`,{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t}},ua=class extends ca{constructor(e,t,n){super(t.context===void 0?n:t.initialValue),this.onContextRequest=e=>{if(e.context!==this.context)return;let t=e.contextTarget??e.composedPath()[0];t!==this.host&&(e.stopPropagation(),this.addCallback(e.callback,t,e.subscribe))},this.onProviderRequest=e=>{if(e.context!==this.context||(e.contextTarget??e.composedPath()[0])===this.host)return;let t=new Set;for(let[e,{consumerHost:n}]of this.subscriptions)t.has(e)||(t.add(e),n.dispatchEvent(new aa(this.context,n,e,!0)));e.stopPropagation()},this.host=e,t.context===void 0?this.context=t:this.context=t.context,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener(`context-request`,this.onContextRequest),this.host.addEventListener(`context-provider`,this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new la(this.context,this.host))}};
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function da({context:e}){return(t,n)=>{let r=new WeakMap;if(typeof n==`object`)return{get(){return t.get.call(this)},set(e){return r.get(this).setValue(e),t.set.call(this,e)},init(t){return r.set(this,new ua(this,{context:e,initialValue:t})),t}};{t.constructor.addInitializer((t=>{r.set(t,new ua(t,{context:e}))}));let i=Object.getOwnPropertyDescriptor(t,n),a;if(i===void 0){let e=new WeakMap;a={get(){return e.get(this)},set(t){r.get(this).setValue(t),e.set(this,t)},configurable:!0,enumerable:!0}}else{let e=i.set;a={...i,set(t){r.get(this).setValue(t),e?.call(this,t)}}}Object.defineProperty(t,n,a);return}}}
/**
* @license
* Copyright 2022 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function fa({context:e,subscribe:t}){return(n,r)=>{typeof r==`object`?r.addInitializer((function(){new sa(this,{context:e,callback:e=>{n.set.call(this,e)},subscribe:t})})):n.constructor.addInitializer((n=>{new sa(n,{context:e,callback:e=>{n[r]=e},subscribe:t})}))}}
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const pa=On(class extends kn{constructor(e){if(super(e),e.type!==Dn.PROPERTY&&e.type!==Dn.ATTRIBUTE&&e.type!==Dn.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!kt(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===we||t===T)return t;let n=e.element,r=e.name;if(e.type===Dn.PROPERTY){if(t===n[r])return we}else if(e.type===Dn.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return we}else if(e.type===Dn.ATTRIBUTE&&n.getAttribute(r)===t+``)return we;return jt(e),t}});
/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
function ma(e,t,n){return e?t(e):n?.(e)}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var ha=oa(`wa-tree-item`),M=class extends st{constructor(){super(...arguments),this.localize=new Xt(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1,this._treeItemContext={depth:0,expanded:this.expanded},this._parentTreeContext=null,this.animationGeneration=0,this.tabIndex=-1,this.role=`treeitem`}static isTreeItem(e){let t=e;return t&&(t.role===`treeitem`||t.getAttribute?.(`role`)===`treeitem`)}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`treeitem`),this.setAttribute(`tabIndex`,this.tabIndex.toString()),this.isNestedItem()&&(this.setAttribute(`slot`,`children`),this._parentTreeContext?.expanded||(this.expanded=!1)),this._parentTreeContext&&(this._treeItemContext={depth:this._parentTreeContext.depth+1,expanded:this.expanded}),this.updateIndentation()}firstUpdated(e){super.firstUpdated(e),this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?`auto`:`0`,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(e){this.dispatchEvent(new ta);let t=En(getComputedStyle(this.childrenContainer).getPropertyValue(`--hide-duration`));await wn(this.childrenContainer,[{height:`${this.childrenContainer.scrollHeight}px`,opacity:`1`,overflow:`hidden`},{height:`0`,opacity:`0`,overflow:`hidden`}],{duration:t,easing:`cubic-bezier(0.4, 0.0, 0.2, 1)`}),this.animationGeneration===e&&(this.childrenContainer.hidden=!0,this.dispatchEvent(new na))}isNestedItem(){if(this._parentTreeContext!==null)return!0;let e=this.parentElement;return!!e&&M.isTreeItem(e)}updateIndentation(){let e=Math.max(this._treeItemContext?.depth||0,this.getDepth());this.setStyleProperty(`--indent`,`calc(${e} * var(--indent-size, 2em))`)}getDepth(){let e=0,t=this.parentElement;for(;t;)M.isTreeItem(t)&&e++,t=t.parentElement;return e}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(e){e.has(`selected`)&&!e.has(`indeterminate`)&&(this.indeterminate=!1),super.willUpdate(e)}async animateExpand(e){this.dispatchEvent(new ea),this.childrenContainer.hidden=!1;let t=En(getComputedStyle(this.childrenContainer).getPropertyValue(`--show-duration`));await wn(this.childrenContainer,[{height:`0`,opacity:`0`,overflow:`hidden`},{height:`${this.childrenContainer.scrollHeight}px`,opacity:`1`,overflow:`hidden`}],{duration:t,easing:`cubic-bezier(0.4, 0.0, 0.2, 1)`}),this.animationGeneration===e&&(this.childrenContainer.style.height=`auto`,this.dispatchEvent(new ra))}handleLoadingChange(){this.setAttribute(`aria-busy`,this.loading?`true`:`false`),this.loading||this.animateExpand(this.animationGeneration)}handleDisabledChange(){this.customStates.set(`disabled`,this.disabled),this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`)}handleExpandedState(){this.customStates.set(`expanded`,this.expanded)}handleIndeterminateStateChange(){this.customStates.set(`indeterminate`,this.indeterminate)}handleSelectedChange(){this.customStates.set(`selected`,this.selected),this.setAttribute(`aria-selected`,this.selected?`true`:`false`)}handleExpandedChange(){this.isLeaf?this.removeAttribute(`aria-expanded`):this.setAttribute(`aria-expanded`,this.expanded?`true`:`false`)}handleExpandAnimation(){this.animationGeneration++;let e=this.animationGeneration;this.expanded?this.lazy?(this.loading=!0,this.dispatchEvent(new $i)):this.animateExpand(e):this.animateCollapse(e)}handleLazyChange(){this.dispatchEvent(new Qi)}getChildrenItems({includeDisabled:e=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(t=>M.isTreeItem(t)&&(e||!t.disabled)):[]}render(){let e=this.localize.dir()===`rtl`,t=!this.loading&&(!this.isLeaf||this.lazy);return Ce`
      <div
        part="base tree-item"
        class="${An({"tree-item":!0,"tree-item-expanded":this.expanded,"tree-item-selected":this.selected,"tree-item-leaf":this.isLeaf,"tree-item-loading":this.loading,"tree-item-has-expand-button":t})}"
      >
        <div class="item" part="item">
          <div class="indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${An({"expand-button":!0,"expand-button-visible":t})}
            aria-hidden="true"
          >
            <slot class="expand-icon-slot" name="expand-icon">
              ${ma(this.loading,()=>Ce` <wa-spinner part="spinner" exportparts="base:spinner__base"></wa-spinner> `,()=>Ce`
                  <wa-icon name=${e?`chevron-left`:`chevron-right`} library="system" variant="solid"></wa-icon>
                `)}
            </slot>
            <slot class="expand-icon-slot" name="collapse-icon">
              <wa-icon name=${e?`chevron-left`:`chevron-right`} library="system" variant="solid"></wa-icon>
            </slot>
          </div>

          ${ma(this.selectable,()=>Ce`
              <wa-checkbox
                part="checkbox"
                exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                class="checkbox"
                ?disabled="${this.disabled}"
                ?checked="${pa(this.selected)}"
                ?indeterminate="${this.indeterminate}"
                tabindex="-1"
              ></wa-checkbox>
            `)}

          <slot class="label" part="label"></slot>
        </div>

        <div class="children" part="children" role="group" ?hidden=${!this.expanded&&!this.isConnected}>
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `}};M.css=ia,k([$e()],M.prototype,`indeterminate`,2),k([$e()],M.prototype,`isLeaf`,2),k([$e()],M.prototype,`loading`,2),k([$e()],M.prototype,`selectable`,2),k([A({type:Boolean,reflect:!0})],M.prototype,`expanded`,2),k([A({type:Boolean,reflect:!0})],M.prototype,`selected`,2),k([A({type:Boolean,reflect:!0})],M.prototype,`disabled`,2),k([A({type:Boolean,reflect:!0})],M.prototype,`lazy`,2),k([da({context:ha})],M.prototype,`_treeItemContext`,2),k([fa({context:ha,subscribe:!1})],M.prototype,`_parentTreeContext`,2),k([tt(`slot:not([name])`)],M.prototype,`defaultSlot`,2),k([tt(`slot[name=children]`)],M.prototype,`childrenSlot`,2),k([tt(`.item`)],M.prototype,`itemElement`,2),k([tt(`.children`)],M.prototype,`childrenContainer`,2),k([tt(`.expand-button slot`)],M.prototype,`expandButtonSlot`,2),k([A({reflect:!0,type:Number,attribute:`tabindex`})],M.prototype,`tabIndex`,2),k([A({reflect:!0})],M.prototype,`role`,2),k([D(`loading`,{waitUntilFirstUpdate:!0})],M.prototype,`handleLoadingChange`,1),k([D(`disabled`)],M.prototype,`handleDisabledChange`,1),k([D(`expanded`)],M.prototype,`handleExpandedState`,1),k([D(`indeterminate`)],M.prototype,`handleIndeterminateStateChange`,1),k([D(`selected`)],M.prototype,`handleSelectedChange`,1),k([D(`expanded`,{waitUntilFirstUpdate:!0})],M.prototype,`handleExpandedChange`,1),k([D(`expanded`,{waitUntilFirstUpdate:!0})],M.prototype,`handleExpandAnimation`,1),k([D(`lazy`,{waitUntilFirstUpdate:!0})],M.prototype,`handleLazyChange`,1),M=k([Xe(`wa-tree-item`)],M),M.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var ga=u`
  :host {
    --checked-icon-color: var(--wa-color-brand-on-loud);
    --checked-icon-scale: 0.8;

    display: inline-flex;
    color: var(--wa-form-control-value-color);
    font-family: inherit;
    font-weight: var(--wa-form-control-value-font-weight);
    line-height: var(--wa-form-control-value-line-height);
    user-select: none;
    -webkit-user-select: none;
  }

  [part~='control'] {
    display: inline-flex;
    flex: 0 0 auto;
    position: relative;
    align-items: center;
    justify-content: center;
    width: var(--wa-form-control-toggle-size);
    height: var(--wa-form-control-toggle-size);
    border-color: var(--wa-form-control-border-color);
    border-radius: min(
      calc(var(--wa-form-control-toggle-size) * 0.375),
      var(--wa-border-radius-s)
    ); /* min prevents entirely circular checkbox */
    border-style: var(--wa-border-style);
    border-width: var(--wa-form-control-border-width);
    background-color: var(--wa-form-control-background-color);
    transition:
      background var(--wa-transition-normal),
      border-color var(--wa-transition-fast),
      box-shadow var(--wa-transition-fast),
      color var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);

    margin-inline-end: 0.5em;
  }

  [part~='base'] {
    display: flex;
    align-items: flex-start;
    position: relative;
    color: currentColor;
    vertical-align: middle;
    cursor: pointer;
  }

  [part~='label'] {
    display: inline;
  }

  /* Checked */
  [part~='control']:has(:checked, :indeterminate) {
    color: var(--checked-icon-color);
    border-color: var(--wa-form-control-activated-color);
    background-color: var(--wa-form-control-activated-color);
  }

  /* Focus */
  [part~='control']:has(> input:focus-visible:not(:disabled)) {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Disabled */
  :host [part~='base']:has(input:disabled) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  input {
    position: absolute;
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    pointer-events: none;
  }

  [part~='icon'] {
    display: flex;
    scale: var(--checked-icon-scale);

    /* Without this, Safari renders the icon slightly to the left */
    &::part(svg) {
      translate: 0.0009765625em;
    }

    input:not(:checked, :indeterminate) + & {
      visibility: hidden;
    }
  }

  :host([required]) [part~='label']::after {
    content: var(--wa-form-control-required-content);
    color: var(--wa-form-control-required-content-color);
    margin-inline-start: var(--wa-form-control-required-content-offset);
  }
`,_a=class extends _n{constructor(){super(...arguments),this.hasSlotController=new xn(this,`hint`),this.title=``,this._value=this.getAttribute(`value`)??null,this.size=`m`,this.disabled=!1,this.indeterminate=!1,this._checked=null,this.defaultChecked=this.hasAttribute(`checked`),this.required=!1,this.hint=``}static get validators(){let e=[pn({validationProperty:`checked`,validationElement:Object.assign(document.createElement(`input`),{type:`checkbox`,required:!0})})];return[...super.validators,...e]}get value(){return this._value??`on`}set value(e){this._value=e}handleSizeChange(){bn(this.localName,this.size)}get checked(){return this.valueHasChanged?!!this._checked:this._checked??this.defaultChecked}set checked(e){this._checked=!!e,this.valueHasChanged=!0}handleClick(){this.hasInteracted=!0,this.checked=!this.checked,this.indeterminate=!1,this.updateComplete.then(()=>{this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})}connectedCallback(){if(super.connectedCallback(),this.didSSR&&!this.hasUpdated){this.updateComplete.then(()=>{this.handleDefaultCheckedChange()});return}this.handleDefaultCheckedChange()}handleDefaultCheckedChange(){this.handleValueOrCheckedChange()}handleValueOrCheckedChange(){if(this.didSSR&&!this.hasUpdated){this.updateComplete.then(()=>{this.handleValueOrCheckedChange()});return}this.setValue(this.checked?this.value:null,this._value),this.updateValidity()}handleStateChange(){this.hasUpdated&&(this.input.checked=this.checked,this.input.indeterminate=this.indeterminate),this.customStates.set(`checked`,this.checked),this.customStates.set(`indeterminate`,this.indeterminate),this.updateValidity()}handleDisabledChange(){this.customStates.set(`disabled`,this.disabled)}willUpdate(e){super.willUpdate(e),(e.has(`value`)||e.has(`checked`)||e.has(`defaultChecked`)||e.has(`disabled`))&&this.handleValueOrCheckedChange()}formResetCallback(){this._checked=null,super.formResetCallback(),this.handleValueOrCheckedChange()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){let e=this.hasSlotController.test(`hint`),t=this.hint?!0:!!e,n=!this.checked&&this.indeterminate,r=n?`indeterminate`:`check`,i=n?`indeterminate`:`checked`,a=this.didSSR&&!this.hasUpdated?this.checked:this.defaultChecked,o=this.didSSR&&!this.hasUpdated?null:pa(this.checked);return Ce`
      <label part="base checkbox">
        <span part="control">
          <input
            class="input"
            type="checkbox"
            title=${this.title}
            name=${Hi(this.name)}
            value=${Hi(this.value)}
            .indeterminate=${pa(this.indeterminate)}
            .checked=${Hi(o)}
            ?checked=${a}
            ?disabled=${this.disabled}
            ?required=${this.required}
            aria-checked=${this.indeterminate?`mixed`:this.checked?`true`:`false`}
            aria-describedby="hint"
            @click=${this.handleClick}
          />

          <wa-icon part="${i}-icon icon" library="system" name=${r}></wa-icon>
        </span>

        <slot part="label"></slot>
      </label>

      <slot
        id="hint"
        part="hint"
        name="hint"
        aria-hidden=${t?`false`:`true`}
        class="${An({"has-slotted":t})}"
      >
        ${this.hint}
      </slot>
    `}};_a.css=[mn,Sn,ga],_a.shadowRootOptions={..._n.shadowRootOptions,delegatesFocus:!0},k([tt(`input[type="checkbox"]`)],_a.prototype,`input`,2),k([A()],_a.prototype,`title`,2),k([A({reflect:!0})],_a.prototype,`value`,1),k([A({reflect:!0})],_a.prototype,`size`,2),k([D(`size`)],_a.prototype,`handleSizeChange`,1),k([A({type:Boolean})],_a.prototype,`disabled`,2),k([A({type:Boolean,reflect:!0})],_a.prototype,`indeterminate`,2),k([A({type:Boolean,attribute:!1})],_a.prototype,`checked`,1),k([A({type:Boolean,reflect:!0,attribute:`checked`})],_a.prototype,`defaultChecked`,2),k([A({type:Boolean,reflect:!0})],_a.prototype,`required`,2),k([A()],_a.prototype,`hint`,2),k([D([`checked`,`defaultChecked`])],_a.prototype,`handleDefaultCheckedChange`,1),k([D([`checked`,`indeterminate`])],_a.prototype,`handleStateChange`,1),k([D(`disabled`)],_a.prototype,`handleDisabledChange`,1),_a=k([Xe(`wa-checkbox`)],_a),_a.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var va=t({default:()=>M,treeItemContext:()=>ha}),ya=class extends Event{constructor(e){super(`wa-selection-change`,{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}},ba=u`
  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--wa-color-surface-border);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: 2em;

    display: block;
  }
`;function xa(e,t,n){return(e=>Object.is(e,-0)?0:e)(e<t?t:e>n?n:e)}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Sa(e,t=!1){function n(e){let t=e.getChildrenItems({includeDisabled:!1});if(t.length){let n=t.every(e=>e.selected),r=t.every(e=>!e.selected&&!e.indeterminate);e.selected=n,e.indeterminate=!n&&!r}}function r(e){let t=e.parentElement;M.isTreeItem(t)&&(n(t),r(t))}function i(e){for(let n of e.getChildrenItems())n.selected=t?e.selected||n.selected:!n.disabled&&e.selected,i(n);t&&n(e)}i(e),r(e)}var Ca=class extends st{constructor(){super(),this.selection=`single`,this.clickTarget=null,this.localize=new Xt(this),this.tabIndex=0,this.role=`tree`,this.initTreeItem=e=>{e.updateComplete.then(()=>{e.selectable=this.selection===`multiple`||this.selection===`leaf-multiple`&&e.isLeaf,[`expand`,`collapse`].filter(e=>!!this.querySelector(`[slot="${e}-icon"]`)).forEach(t=>{let n=e.querySelector(`[slot="${t}-icon"]`),r=this.getExpandButtonIcon(t);r&&(n===null?e.append(r):n.hasAttribute(`data-default`)&&n.replaceWith(r))})})},this.handleTreeChanged=e=>{for(let t of e){let e=[...t.addedNodes].filter(M.isTreeItem),n=[...t.removedNodes].filter(M.isTreeItem);e.forEach(this.initTreeItem),this.lastFocusedItem&&n.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=e=>{let t=e.relatedTarget;(!t||!this.contains(t))&&(this.tabIndex=0)},this.handleFocusIn=e=>{let t=e.target;e.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),M.isTreeItem(t)&&!t.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=t,this.tabIndex=-1,t.tabIndex=0)},`addEventListener`in this&&(this.addEventListener(`focusin`,this.handleFocusIn),this.addEventListener(`focusout`,this.handleFocusOut),this.addEventListener(`wa-lazy-change`,this.handleSlotChange))}async connectedCallback(){super.connectedCallback(),typeof MutationObserver<`u`&&(await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})),this.setAttribute(`tabindex`,`0`),this.setAttribute(`role`,`tree`)}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect()}getExpandButtonIcon(e){let t=(e===`expand`?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(t){let n=t.cloneNode(!0);return[n,...n.querySelectorAll(`[id]`)].forEach(e=>e.removeAttribute(`id`)),n.setAttribute(`data-default`,``),n.slot=`${e}-icon`,n}return null}selectItem(e){let t=[...this.selectedItems];if(this.selection===`multiple`)e.selected=!e.selected,e.lazy&&(e.expanded=!0),Sa(e);else if(this.selection===`leaf-multiple`)e.isLeaf?e.selected=!e.selected:e.expanded=!e.expanded;else if(this.selection===`single`||e.isLeaf){let t=this.getAllTreeItems();for(let n of t)n.selected=n===e}else this.selection===`leaf`&&(e.expanded=!e.expanded);let n=this.selectedItems;(t.length!==n.length||n.some(e=>!t.includes(e)))&&Promise.all(n.map(e=>e.updateComplete)).then(()=>{this.dispatchEvent(new ya({selection:n}))})}getAllTreeItems(){return[...this.querySelectorAll(`wa-tree-item`)]}focusItem(e){e?.focus()}handleKeyDown(e){if(![`ArrowDown`,`ArrowUp`,`ArrowRight`,`ArrowLeft`,`Home`,`End`,`Enter`,` `].includes(e.key)||e.composedPath().some(e=>[`input`,`textarea`].includes(e?.tagName?.toLowerCase())))return;let t=this.getFocusableItems(),n=this.matches(`:dir(ltr)`),r=this.localize.dir()===`rtl`;if(t.length>0){let i=t.findIndex(e=>e.matches(`:focus`)),a=t[i];if(!a&&(e.key===`Enter`||e.key===` `))return;e.preventDefault();let o=e=>{let n=t[xa(e,0,t.length-1)];this.focusItem(n)},s=e=>{a.expanded=e};e.key===`ArrowDown`?o(i+1):e.key===`ArrowUp`?o(i-1):n&&e.key===`ArrowRight`||r&&e.key===`ArrowLeft`?!a||a.disabled||a.expanded||a.isLeaf&&!a.lazy?o(i+1):s(!0):n&&e.key===`ArrowLeft`||r&&e.key===`ArrowRight`?!a||a.disabled||a.isLeaf||!a.expanded?o(i-1):s(!1):e.key===`Home`?o(0):e.key===`End`?o(t.length-1):(e.key===`Enter`||e.key===` `)&&a&&!a.disabled&&this.selectItem(a)}}handleClick(e){let t=e.target,n=t.closest(`wa-tree-item`),r=e.composedPath().some(e=>e?.classList?.contains(`expand-button`));!n||n.disabled||t!==this.clickTarget||(r?n.expanded=!n.expanded:this.selectItem(n))}handleMouseDown(e){this.clickTarget=e.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){let e=this.selection===`multiple`,t=this.selection===`leaf-multiple`,n=this.getAllTreeItems();this.setAttribute(`aria-multiselectable`,e||t?`true`:`false`);for(let r of n)r.updateComplete.then(()=>{r.selectable=e||t&&r.isLeaf});e&&(await this.updateComplete,[...this.querySelectorAll(`:scope > wa-tree-item`)].forEach(e=>{e.updateComplete.then(()=>{Sa(e,!0)})}))}get selectedItems(){return this.getAllTreeItems().filter(e=>e.selected)}getFocusableItems(){let e=this.getAllTreeItems(),t=new Set;return e.filter(e=>{if(e.disabled)return!1;let n=e.parentElement?.closest(`[role=treeitem]`);return n&&(!n.expanded||n.loading||t.has(n))&&t.add(e),!t.has(e)})}render(){return Ce`
      <div
        part="base tree"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <span hidden aria-hidden="true"><slot name="expand-icon"></slot></span>
        <span hidden aria-hidden="true"><slot name="collapse-icon"></slot></span>
      </div>
    `}};Ca.css=ba,k([tt(`slot:not([name])`)],Ca.prototype,`defaultSlot`,2),k([tt(`slot[name=expand-icon]`)],Ca.prototype,`expandedIconSlot`,2),k([tt(`slot[name=collapse-icon]`)],Ca.prototype,`collapsedIconSlot`,2),k([A()],Ca.prototype,`selection`,2),k([A({attribute:`tabindex`,reflect:!0,type:Number})],Ca.prototype,`tabIndex`,2),k([A({reflect:!0})],Ca.prototype,`role`,2),k([D(`selection`)],Ca.prototype,`handleSelectionChange`,1),Ca=k([Xe(`wa-tree`)],Ca);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var wa=t({default:()=>Ca}),N;Object.getOwnPropertyDescriptors||(()=>{var e;if(typeof Reflect<`u`&&Reflect.ownKeys)e=Reflect.ownKeys;else{var t=Object.getOwnPropertySymbols||(e=>[]);e=(e=>Object.getOwnPropertyNames(e).concat(t(e)))}return(t=>{for(var n=e(t),r={},i=n.length|0,a=0;a!==i;){var o=n[a];Object.defineProperty(r,o,{configurable:!0,enumerable:!0,writable:!0,value:Object.getOwnPropertyDescriptor(t,o)}),a=a+1|0}return r})})();var Ta;function Ea(e){this.c=e}N=Ea.prototype,N.toString=(function(){return String.fromCharCode(this.c)});function Da(e){switch(typeof e){case`string`:return OS.l();case`number`:return Ha(e)?e<<24>>24===e?Xv.l():e<<16>>16===e?cy.l():bS.l():Ua(e)?yS.l():vS.l();case`boolean`:return b_.l();case`undefined`:return Su.l();default:return e instanceof V?CS.l():e instanceof Ea?C_.l():e&&e.$classData?e.$classData.l():null}}function Oa(e){switch(typeof e){case`string`:return`java.lang.String`;case`number`:return Ha(e)?e<<24>>24===e?`java.lang.Byte`:e<<16>>16===e?`java.lang.Short`:`java.lang.Integer`:Ua(e)?`java.lang.Float`:`java.lang.Double`;case`boolean`:return`java.lang.Boolean`;case`undefined`:return`java.lang.Void`;default:return e instanceof V?`java.lang.Long`:e instanceof Ea?`java.lang.Character`:e&&e.$classData?e.$classData.N:null.ri()}}function ka(e,t){switch(typeof e){case`string`:return ES(e,t);case`number`:return gS(e,t);case`boolean`:return v_(e,t);case`undefined`:return yu(e,t);default:return e&&e.$classData||e===null?e.r(t):e instanceof V?xS(e,t):e instanceof Ea?S_(Ga(e),t):Ja.prototype.r.call(e,t)}}function Aa(e){switch(typeof e){case`string`:return TS(e);case`number`:return _S(e);case`boolean`:return y_(e);case`undefined`:return bu(e);default:return e&&e.$classData||e===null?e.y():e instanceof V?SS(e):e instanceof Ea?x_(Ga(e)):Ja.prototype.y.call(e)}}function ja(e){return e===void 0?`undefined`:e.toString()}function Ma(e,t){if(t===0)throw new Yv(`/ by zero`);return e/t|0}function Na(e,t){if(t===0)throw new Yv(`/ by zero`);return e%t|0}function Pa(e){return e>2147483647?2147483647:e<-2147483648?-2147483648:e|0}function Fa(e){return String.fromCharCode(e)}function Ia(e,t,n,r,i){if(e!==n||r<t||(t+i|0)<r)for(var a=0;a<i;a=a+1|0)n[r+a|0]=e[t+a|0];else for(var a=i-1|0;a>=0;a=a-1|0)n[r+a|0]=e[t+a|0]}var La=0,Ra=new WeakMap;function za(e){switch(typeof e){case`string`:return TS(e);case`number`:return _S(e);case`bigint`:var t=0;for(e<BigInt(0)&&(e=~e);e!==BigInt(0);)t^=Number(BigInt.asIntN(32,e)),e>>=BigInt(32);return t;case`boolean`:return e?1231:1237;case`undefined`:return 0;case`symbol`:var n=e.description;return n===void 0?0:TS(n);default:if(e===null)return 0;var r=Ra.get(e);return r===void 0&&(r=La+1|0,La=r,Ra.set(e,r)),r}}function Ba(e){return typeof e==`number`&&e<<24>>24===e&&1/e!=-1/0}function Va(e){return typeof e==`number`&&e<<16>>16===e&&1/e!=-1/0}function Ha(e){return typeof e==`number`&&(e|0)===e&&1/e!=-1/0}function Ua(e){return typeof e==`number`&&(e!==e||Math.fround(e)===e)}function Wa(e){return new Ea(e)}Wa(0);function Ga(e){return e===null?0:e.c}function Ka(e){return e===null?Ta:e}function qa(e){return e}function Ja(){}N=Ja.prototype,N.constructor=Ja;function P(){}P.prototype=N,N.y=(function(){return za(this)}),N.r=(function(e){return this===e}),N.C=(function(){var e=this.y();return Oa(this)+`@`+(+(e>>>0)).toString(16)}),N.toString=(function(){return this.C()});function F(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}N=F.prototype=new P,N.constructor=F,N.x=(function(e,t,n,r){Ia(this.a,e,t.a,n,r)}),N.g=(function(){return new F(this.a.slice())});function Ya(){}Ya.prototype=N;function Xa(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=!1}else this.a=e}N=Xa.prototype=new P,N.constructor=Xa,N.x=(function(e,t,n,r){Ia(this.a,e,t.a,n,r)}),N.g=(function(){return new Xa(this.a.slice())});function Za(e){typeof e==`number`?this.a=new Uint16Array(e):this.a=e}N=Za.prototype=new P,N.constructor=Za,N.x=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),N.g=(function(){return new Za(this.a.slice())});function Qa(e){typeof e==`number`?this.a=new Int8Array(e):this.a=e}N=Qa.prototype=new P,N.constructor=Qa,N.x=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),N.g=(function(){return new Qa(this.a.slice())});function $a(e){typeof e==`number`?this.a=new Int16Array(e):this.a=e}N=$a.prototype=new P,N.constructor=$a,N.x=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),N.g=(function(){return new $a(this.a.slice())});function eo(e){typeof e==`number`?this.a=new Int32Array(e):this.a=e}N=eo.prototype=new P,N.constructor=eo,N.x=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),N.g=(function(){return new eo(this.a.slice())});function to(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=Ta}else this.a=e}N=to.prototype=new P,N.constructor=to,N.x=(function(e,t,n,r){Ia(this.a,e,t.a,n,r)}),N.g=(function(){return new to(this.a.slice())});function no(e){typeof e==`number`?this.a=new Float32Array(e):this.a=e}N=no.prototype=new P,N.constructor=no,N.x=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),N.g=(function(){return new no(this.a.slice())});function ro(e){typeof e==`number`?this.a=new Float64Array(e):this.a=e}N=ro.prototype=new P,N.constructor=ro,N.x=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),N.g=(function(){return new ro(this.a.slice())});function I(){this.C=void 0,this.n=null,this.O=null,this.B=null,this.D=0,this.z=null,this.E=``,this.L=void 0,this.A=void 0,this.F=void 0,this.w=void 0,this.J=!1,this.N=``,this.X=!1,this.Y=!1,this.Z=!1,this.I=void 0}N=I.prototype,N.p=(function(e,t,n,r,i){this.n={},this.z=e,this.E=t;var a=this;return this.F=(e=>e===a),this.N=n,this.X=!0,this.I=(e=>!1),r!==void 0&&(this.A=new I().y(this,r,i)),this}),N.i=(function(e,t,n,r){var i=Object.getOwnPropertyNames(n)[0];return this.n=n,this.E=`L`+t+`;`,this.F=(e=>!!e.n[i]),this.J=e===2,this.N=t,this.Y=e===1,this.I=r||(e=>!!(e&&e.$classData&&e.$classData.n[i])),typeof e!=`number`&&(e.prototype.$classData=this),this}),N.y=(function(e,t,n,r){t.prototype.$classData=this;var i=`[`+e.E;this.C=t,this.n={A:1,a:1},this.O=e,this.B=e,this.D=1,this.E=i,this.N=i,this.Z=!0;var a=this;return this.F=r||(e=>a===e),this.w=n?(e=>new t(new n(e))):(e=>new t(e)),this.I=(e=>e instanceof t),this}),N.a=(function(e){function t(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}var n=t.prototype=new Ya;n.constructor=t,n.x=(function(e,t,n,r){Ia(this.a,e,t.a,n,r)}),n.g=(function(){return new t(this.a.slice())}),n.$classData=this;var r=e.B||e,i=e.D+1,a=`[`+e.E;this.C=t,this.n={A:1,a:1},this.O=e,this.B=r,this.D=i,this.E=a,this.N=a,this.Z=!0;var o=(e=>{var t=e.D;return t===i?r.F(e.B):t>i&&r===L});this.F=o,this.w=(e=>new t(e));var s=this;return this.I=(e=>{var t=e&&e.$classData;return!!t&&(t===s||o(t))}),this}),N.r=(function(){return this.A||=new I().a(this),this.A}),N.l=(function(){return this.L||=new Ah(this),this.L}),N.R=(function(e){return this===e||this.F(e)}),N.S=(function(){return this.P?this.P.l():null}),N.Q=(function(){return this.O?this.O.l():null}),N.U=(function(e){if(this===io)throw $v(new ey);return new(this.r()).C(e)});var L=new I;L.n={},L.E=`Ljava.lang.Object;`,L.F=(e=>!e.X),L.N=`java.lang.Object`,L.I=(e=>e!==null),L.A=new I().y(L,F,void 0,(e=>{var t=e.D;return t===1?!e.B.X:t>1})),Ja.prototype.$classData=L;var io=new I().p(void 0,`V`,`void`,void 0,void 0),ao=new I().p(!1,`Z`,`boolean`,Xa,void 0),oo=new I().p(0,`C`,`char`,Za,Uint16Array),so=new I().p(0,`B`,`byte`,Qa,Int8Array),co=new I().p(0,`S`,`short`,$a,Int16Array),lo=new I().p(0,`I`,`int`,eo,Int32Array),uo=new I().p(null,`J`,`long`,to,void 0),fo=new I().p(0,`F`,`float`,no,Float32Array),po=new I().p(0,`D`,`double`,ro,Float64Array),mo=new I().i(1,`com.raquo.airstream.core.InternalObserver`,{aZ:1});function ho(e){return Da(e).iz()+`@`+e.y()}function go(e){var t=e.fw();return t===void 0?e.fn():t}function _o(){yo=this,bo().j1(new Q((e=>void 0)),Xu().eN,!0)}N=_o.prototype=new P,N.constructor=_o;function vo(){}vo.prototype=N,N.j1=(function(e,t,n){return new Zg(e,n,t,this)}),N.p8=(function(e,t){return new $g(e,t,this)}),new I().i(_o,`com.raquo.airstream.core.Observer$`,{cr:1});var yo;function bo(){return yo||=new _o,yo}function xo(){}N=xo.prototype=new P,N.constructor=xo;function So(){}So.prototype=N,N.nc=(function(e,t){var n=e.indexOf(t)|0,r=n!==-1;return r&&e.splice(n,1),r}),new I().i(xo,`com.raquo.airstream.core.ObserverList$`,{cu:1});var Co;function wo(){return Co||=new xo,Co}function To(){this.e4=0,this.e4=0}N=To.prototype=new P,N.constructor=To;function Eo(){}Eo.prototype=N,N.mY=(function(){return this.e4===2147483647?this.e4=1:this.e4=1+this.e4|0,this.e4}),new I().i(To,`com.raquo.airstream.core.Signal$`,{cv:1});var Do;function Oo(){return Do||=new To,Do}function ko(e){this.gC=null,this.j9=null,this.gD=0,this.gC=e,this.j9=void 0;var t=Yo().fB();this.gD=t===void 0?1:1+t.gD|0,Fo().fD===-1||this.gD>Fo().fD?Bm().bX(new aS(this,Fo().fD)):Bo().b0?Bo().dA.push(this)|0:Yo().ia(this)}N=ko.prototype=new P,N.constructor=ko;function Ao(){}Ao.prototype=N;var jo=new I().i(ko,`com.raquo.airstream.core.Transaction`,{cw:1});function Mo(){this.fD=0,this.ja=null,Po=this,this.fD=1e3,this.ja=new Q((e=>{throw Mh(new Nh,`Attempted to run Transaction `+e+` after it was already executed.`)}))}N=Mo.prototype=new P,N.constructor=Mo;function No(){}No.prototype=N,N.mk=(function(e){try{e.gC.d(e);var t=e.j9;if(t!==void 0)for(;t.ro();)t.rb().rs(e)}catch(e){var n=e instanceof Up?e:new mw(e);Bm().bX(n)}}),new I().i(Mo,`com.raquo.airstream.core.Transaction$`,{cx:1});var Po;function Fo(){return Po||=new Mo,Po}function Io(e){e.fE.length|0?new ko(new Q((t=>{for(;(e.fE.length|0)>0;){var n=e.fE.shift();try{n.d(t)}catch(e){var r=e instanceof Up?e:new mw(e);Bm().bX(r)}}for(;(e.dA.length|0)>0;){var i=e.dA.shift();Yo().ia(i)}}))):(e.dA.length|0)>0&&new ko(new Q((t=>{for(;(e.dA.length|0)>0;)Yo().ia(e.dA.shift())})))}function Lo(){this.b0=!1,this.fE=null,this.dA=null,zo=this,this.b0=!1,this.fE=ws().b4(G().b(new(H.r()).C([]))),this.dA=ws().b4(G().b(new(jo.r()).C([])))}N=Lo.prototype=new P,N.constructor=Lo;function Ro(){}Ro.prototype=N,new I().i(Lo,`com.raquo.airstream.core.Transaction$onStart$`,{cy:1});var zo;function Bo(){return zo||=new Lo,zo}function Vo(e,t){return e.dB.get(t)}function Ho(e,t){e.fF.unshift(t)}function Uo(e){return e.fF.shift()}function Wo(e,t,n){var r=Vo(e,t),i=r===void 0,a=r===void 0?ws().b4(G().b(new(jo.r()).C([]))):r;a.push(n),i&&e.dB.set(t,a)}function Go(e,t){var n=Vo(e,t),r=n===void 0||(n.length|0)>0?n:void 0;if(r!==void 0){var i=r.shift();return r.length|0||e.dB.delete(t),i}}function Ko(){this.fF=null,this.dB=null,Jo=this,this.fF=ws().b4(G().b(new(jo.r()).C([]))),this.dB=new Map}N=Ko.prototype=new P,N.constructor=Ko;function qo(){}qo.prototype=N,N.ia=(function(e){var t=this.fB();t===void 0?(Ho(this,e),Fo().mk(e),this.oI(e)):Wo(this,t,e)}),N.oI=(function(e){for(var t=e;;){var n=this.fB(),r=t;if(!(n!==void 0&&W().s(r,n)))throw Mh(new Nh,`Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.`);this.q2(t),t.gC=Fo().ja;var i=this.fB();if(W().s(i,void 0))if((this.dB.size|0)>0){var a=new Dm(0);throw this.dB.forEach((e=>((t,n)=>{e.dT=e.dT+(t.length|0)|0}))(a)),Mh(new Nh,`Transaction queue error: Stack cleared, but a total of `+a.dT+` children for `+(this.dB.size|0)+` transactions remain. This is a bug in Airstream.`)}else return;else Fo().mk(i),t=i}}),N.q2=(function(e){for(var t=e;;){var n=Go(this,t);if(W().s(n,void 0)){Uo(this);var r=this.fB();if(!W().s(r,void 0))t=r;else return}else{Ho(this,n);return}}}),N.fB=(function(){return this.fF[0]}),new I().i(Ko,`com.raquo.airstream.core.Transaction$pendingTransactions$`,{cz:1});var Jo;function Yo(){return Jo||=new Ko,Jo}function Xo(e,t){var n=e.cQ.indexOf(t)|0;if(n!==-1)e.cQ.splice(n,1),e.bz.c()||t.n2();else throw Mh(new Nh,`Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?`)}function Zo(e){for(;(e.fH.length|0)>0;)Xo(e,e.fH.shift())}function Qo(e){this.ji=null,this.cQ=null,this.e5=!1,this.fH=null,this.bz=null,this.e6=0,this.ji=e,this.cQ=ws().b4(G().b(new(ns.r()).C([]))),this.e5=!0,this.fH=ws().b4(G().b(new(ns.r()).C([]))),this.bz=NS(),this.e6=0}N=Qo.prototype=new P,N.constructor=Qo;function $o(){}$o.prototype=N,N.lS=(function(){if(this.bz.c()){var e=Bo(),t=(()=>{var e=new Af(this.ji);this.bz=new PS(e),this.e5=!1,this.e6=0;for(var t=0,n=this.cQ.length|0;t<n;){var r=t+this.e6|0;this.cQ[r].n1(e),t=1+t|0}Zo(this),this.e5=!0,this.e6=0});if(Bo(),e.b0)t();else{e.b0=!0;try{t()}finally{e.b0=!1,Io(e)}}}else throw Mh(new Nh,`Can not activate `+this+`: it is already active`)}),N.oD=(function(){if(this.bz.c())throw Mh(new Nh,`Can not deactivate DynamicOwner: it is not active`);this.e5=!1;for(var e=this.cQ,t=0,n=e.length|0;t<n;)e[t].n2(),t=1+t|0;Zo(this);var r=this.bz;r.c()||r.S().pt(),Zo(this),this.e5=!0,this.bz=NS()}),N.ob=(function(e,t){t?(this.e6=1+this.e6|0,this.cQ.unshift(e)):this.cQ.push(e);var n=this.bz;if(!n.c()){var r=n.S();e.n1(r)}}),N.qb=(function(e){this.e5?Xo(this,e):this.fH.push(e)}),new I().i(Qo,`com.raquo.airstream.ownership.DynamicOwner`,{cB:1});function es(e,t,n){this.fI=null,this.jj=null,this.fJ=null,this.fI=e,this.jj=t,this.fJ=NS(),e.ob(this,n)}N=es.prototype=new P,N.constructor=es;function ts(){}ts.prototype=N,N.gq=(function(){this.fI.qb(this)}),N.n1=(function(e){var t=Bo(),n=(()=>{this.fJ=this.jj.d(e)});if(Bo(),t.b0)n();else{t.b0=!0;try{n()}finally{t.b0=!1,Io(t)}}}),N.n2=(function(){var e=this.fJ;e.c()||(e.S().gq(),this.fJ=NS())});var ns=new I().i(es,`com.raquo.airstream.ownership.DynamicSubscription`,{cC:1});function rs(){}N=rs.prototype=new P,N.constructor=rs;function is(){}is.prototype=N,N.ex=(function(e,t,n){return new es(e,new Q((e=>new PS(t.d(e)))),n)}),N.nj=(function(e,t,n){return new es(e,new Q((e=>(t.d(e),NS()))),n)}),N.qw=(function(e,t,n){return os().ex(e,new Q((e=>bv(t,n.iY(),e))),!1)}),N.qv=(function(e,t,n){return os().ex(e,new Q((e=>Hm(t,n,e))),!1)}),new I().i(rs,`com.raquo.airstream.ownership.DynamicSubscription$`,{cD:1});var as;function os(){return as||=new rs,as}function ss(e){e.e7=ws().b4(G().b(new(ms.r()).C([])))}function cs(e){for(var t=e.e7,n=0,r=t.length|0;n<r;)ds(t[n]),n=1+n|0;e.e7.length=0}function ls(e,t){var n=e.e7.indexOf(t)|0;if(n!==-1)e.e7.splice(n,1);else throw Mh(new Nh,`Can not remove Subscription from Owner: subscription not found.`)}function us(e,t){e.e7.push(t)}function ds(e){if(!e.gK)e.jl.a4(),e.gK=!0;else throw Mh(new Nh,`Can not kill Subscription: it was already killed.`)}function fs(e,t){this.jm=null,this.jl=null,this.gK=!1,this.jm=e,this.jl=t,this.gK=!1,e.q0(this)}N=fs.prototype=new P,N.constructor=fs;function ps(){}ps.prototype=N,N.gq=(function(){ds(this),ls(this.jm,this)});var ms=new I().i(fs,`com.raquo.airstream.ownership.Subscription`,{cG:1});function hs(e,t){this.jn=null,this.jo=null,this.cR=null,this.dC=!1,this.jn=e,this.jo=t,this.cR=NS(),this.dC=!1}N=hs.prototype=new P,N.constructor=hs;function gs(){}gs.prototype=N,N.pp=(function(){var e=this.cR;return!e.c()&&!e.S().fI.bz.c()}),N.qo=(function(e){if(this.dC)throw Mh(new Nh,`Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var t=this.cR;if(t.c())var n=!1;else var n=e===t.S().fI;if(!n){this.pp()&&!e.bz.c()&&(this.dC=!0);var r=this.cR;r.c()||(r.S().gq(),this.cR=NS()),this.cR=new PS(os().ex(e,new Q((e=>(this.dC||this.jn.a4(),new fs(e,new uv((()=>{this.dC||this.jo.a4()})))))),!1)),this.dC=!1}}),N.oq=(function(){if(this.dC)throw Mh(new Nh,`Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var e=this.cR;e.c()||e.S().gq(),this.cR=NS()}),new I().i(hs,`com.raquo.airstream.ownership.TransferableSubscription`,{cH:1});function _s(){}N=_s.prototype=new P,N.constructor=_s;function vs(){}vs.prototype=N,N.m5=(function(e){return new sS(new eS(e))}),new I().i(_s,`com.raquo.airstream.state.Var$`,{cL:1});var ys;function bs(){return ys||=new _s,ys}function xs(){}N=xs.prototype=new P,N.constructor=xs;function Ss(){}Ss.prototype=N,N.b4=(function(e){return[...yf().qE(e)]}),new I().i(xs,`com.raquo.ew.JsArray$`,{cO:1});var Cs;function ws(){return Cs||=new xs,Cs}function Ts(){}N=Ts.prototype=new P,N.constructor=Ts;function Es(){}Es.prototype=N,N.pj=(function(e,t,n){return(e.indexOf(t,n)|0)!=-1}),N.p0=(function(e,t){for(var n=0,r=e.length|0;n<r;)t(e[n]),n=1+n|0}),new I().i(Ts,`com.raquo.ew.JsArray$RichJsArray$`,{cP:1});var Ds;function Os(){return Ds||=new Ts,Ds}function ks(){this.jz=null,js=this,document.createElement(`template`),this.oB(Z().i.qy().qz()),this.jz=RegExp(` `,`g`)}N=ks.prototype=new P,N.constructor=ks;function As(){}As.prototype=N,N.oe=(function(e,t){try{return e.appendChild(t),!0}catch(e){var n=e instanceof Up?e:new mw(e);if(n instanceof mw&&n.aS instanceof DOMException)return!1;throw n instanceof mw?n.aS:n}}),N.q7=(function(e,t){try{return e.removeChild(t),!0}catch(e){var n=e instanceof Up?e:new mw(e);if(n instanceof mw&&n.aS instanceof DOMException)return!1;throw n instanceof mw?n.aS:n}}),N.qe=(function(e,t,n){try{return e.replaceChild(t,n),!0}catch(e){var r=e instanceof Up?e:new mw(e);if(r instanceof mw&&r.aS instanceof DOMException)return!1;throw r instanceof mw?r.aS:r}}),N.pr=(function(e,t){for(var n=e;;){if(n.parentNode!==null)var r=n.parentNode;else var i=n.host,r=i===void 0?null:i;if(r===null)return!1;if(W().s(t,r))return!0;n=r}}),N.o1=(function(e,t){e.addEventListener(t.ea.e8.fR,t.ha,t.hb)}),N.q8=(function(e,t){e.removeEventListener(t.ea.e8.fR,t.ha,t.hb)}),N.oA=(function(e){return document.createElement(e.iL())}),N.pb=(function(e,t){var n=this.pc(e,t);return n===void 0?void 0:t.fS.fm(n)}),N.pc=(function(e,t){var n=e.bA.getAttributeNS(null,t.e9);return n===null?void 0:n}),N.iX=(function(e,t,n){this.qn(e,t,t.fS.fo(n))}),N.qn=(function(e,t,n){n===null?this.q9(e,t):e.bA.setAttribute(t.e9,n)}),N.q9=(function(e,t){e.bA.removeAttribute(t.e9)}),N.oB=(function(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e.km)}),N.pf=(function(e,t){var n=this.pg(e,t);return n===void 0?void 0:t.h6.fm(n)}),N.pg=(function(e,t){var n=e.iT(),r=t.fU,i=n.getAttributeNS(r.c()?null:r.S(),t.h7);return i===null?void 0:i}),N.qp=(function(e,t,n){this.qq(e,t,t.h6.fo(n))}),N.qq=(function(e,t,n){if(n===null)this.qc(e,t);else{var r=t.fU;if(r.c())e.iT().setAttribute(t.fT,n);else{var i=r.S();e.iT().setAttributeNS(i,t.fT,n)}}}),N.qc=(function(e,t){var n=e.iT(),r=t.fU;n.removeAttributeNS(r.c()?null:r.S(),t.h7)}),N.oz=(function(e){return document.createComment(e)}),N.oC=(function(e){return document.createTextNode(e)}),N.mP=(function(e){return _d().ot(e.tagName,45)}),N.ph=(function(e){if(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement||e instanceof HTMLButtonElement||e instanceof HTMLOptionElement)return e.value;if(this.mP(e)){var t=e.value;return new Mv(this),t===void 0?void 0:typeof t==`string`?t:void 0}else return}),N.oE=(function(e,t){for(var n=t,r=e;;){if(r===null)return n;var i=r.parentNode,a=new AO(this.mq(r),n);r=i,n=a}}),N.mq=(function(e){if(e instanceof HTMLElement){var t=e.id;if(t!==``)var n=`#`+t;else var r=e.className,n=r===``?``:`.`+r.replace(this.jz,`.`);return e.tagName.toLowerCase()+n}else return e.nodeName}),new I().i(ks,`com.raquo.laminar.DomApi$`,{cQ:1});var js;function Ms(){return js||=new ks,js}function Ns(e,t,n){this.gR=null,this.jA=null,this.gQ=null,this.gR=e,this.jA=t,this.gQ=n}N=Ns.prototype=new P,N.constructor=Ns;function Ps(){}Ps.prototype=N,N.bJ=(function(e){this.gR===null?this.gQ===null?ed().p1(this.jA,e):Os().p0(this.gQ,Hg().p7(e)):this.gR.bJ(e)}),new I().i(Ns,`com.raquo.laminar.Seq`,{cS:1});function Fs(){}N=Fs.prototype=new P,N.constructor=Fs;function Is(){}Is.prototype=N,new I().i(Fs,`com.raquo.laminar.Seq$`,{cT:1});var Ls;function Rs(){return Ls||=new Fs,Ls}function zs(e){e.jE=bo(),Bm(),e.gS=bs()}function Bs(){}N=Bs.prototype=new P,N.constructor=Bs;function Vs(){}Vs.prototype=N,N.nU=(function(e,t){return new Ym(new Q((n=>{var r=e.gw();return os().qw(n.bK,r,t)})),Hc())}),new I().i(Bs,`com.raquo.laminar.api.Implicits$RichSource$`,{cV:1});var Hs;function Us(){return Hs||=new Bs,Hs}function Ws(e){e.jD=Kc()}function Gs(e){Ks(e,new Q((e=>{e.k5.bA.focus()})))}function Ks(e,t){return new ep(new Q((e=>{var n=new Tm(!e.bK.bz.c()),r=new Q((e=>{n.gb?n.gb=!1:t.d(e)}));os().nj(e.bK,new Q((e=>(t=>{r.d(new Lc(e,t))}))(e)),!1)})),Kc())}function qs(){this.cf=null,this.k0=null,this.gU=null,Ys=this,this.cf=new Pf(Xs()),new Pf(Xs()),this.k0=new Pf(Xs()),this.gU=new Mf}N=qs.prototype=new P,N.constructor=qs;function Js(){}Js.prototype=N,new I().i(qs,`com.raquo.laminar.codecs.package$`,{d2:1});var Ys;function Xs(){return Ys||=new qs,Ys}function Zs(e){e.jJ=Qs(e,`class`,` `),e.gT=e.jJ}function Qs(e,t,n){var r=Gf(new Kf,t,Xs().cf);return new If(r.e9,new Q((e=>{var t=Ms().pb(e,r);return t===void 0?``:t})),new pv(((e,t)=>{Ms().iX(e,r,t)})),n)}function $s(e){e.ns=ec(e,`class`,` `)}function ec(e,t,n){var r=new Xf(t,Xs().cf,NS());return new If(r.fT,new Q((e=>{var t=Ms().pf(e,r);return t===void 0?``:t})),new pv(((e,t)=>{Ms().qp(e,r,t)})),n)}function tc(){this.k1=null,rc=this,Z().i.np(),ws().b4(G().b(new(Wf.r()).C([Z().i.fy()]))),Z().i.np(),ws().b4(G().b(new(Wf.r()).C([Z().i.fy(),Z().i.pU()]))),Z().i.oo(),ws().b4(G().b(new(Wf.r()).C([Z().i.fy(),Z().i.pV()]))),this.k1=ws().b4(G().b(new(OS.r()).C([`value`,`checked`])))}N=tc.prototype=new P,N.constructor=tc;function nc(){}nc.prototype=N,new I().i(tc,`com.raquo.laminar.inputs.InputController$`,{de:1});var rc;function ic(){return rc||=new tc,rc}function ac(){}N=ac.prototype=new P,N.constructor=ac;function oc(){}oc.prototype=N,N.of=(function(e,t){return new o_(NS(),!1,new hv(((n,r,i)=>Hm(e,new Q(((e,n)=>(r=>{var i=n.en;if(i===void 0){var a=new u_(t.ih(r));this.qA(a,e);var o=a;n.en=o,o=null}else i.fV.textContent=t.ih(r)}))(n,new km(void 0))),r))),void 0)}),N.qA=(function(e,t){rl().qd(t.h0,t.h1,e,void 0),t.h1=e,t.h2&&(t.h2=!1,t.qa(e),t.gZ.clear(),t.gY=0)}),new I().i(ac,`com.raquo.laminar.inserters.ChildTextInserter$`,{df:1});var sc;function cc(){return sc||=new ac,sc}function lc(e,t,n,r,i){this.h0=null,this.h1=null,this.h2=!1,this.gY=0,this.gZ=null,this.h0=e,this.h1=t,this.h2=n,this.gY=r,this.gZ=i}N=lc.prototype=new P,N.constructor=lc;function uc(){}uc.prototype=N,N.qa=(function(e){var t=this.gY,n=0;for(n=t;n>0;){var r=e.b9().nextSibling;if(r===null)n=0;else{var i=this.gZ.get(r);i===void 0?n=0:i!==void 0&&(rl().q6(this.h0,i),n=-1+n|0)}}}),new I().i(lc,`com.raquo.laminar.inserters.InsertContext`,{dh:1});function dc(){}N=dc.prototype=new P,N.constructor=dc;function fc(){}fc.prototype=N,N.qg=(function(e,t,n){var r=new c_(``);return rl().ep(e,r,n),this.qI(e,r,t)}),N.qI=(function(e,t,n){return new lc(e,t,n,0,n?new Map:null)}),new I().i(dc,`com.raquo.laminar.inserters.InsertContext$`,{di:1});var pc;function mc(){return pc||=new dc,pc}function hc(e){this.fM=null,this.fM=e}N=hc.prototype=new P,N.constructor=hc;function gc(){}gc.prototype=N,N.iQ=(function(e,t){try{this.fM.cG(e,t)}catch(e){var n=e instanceof Up?e:new mw(e);Bm().bX(n)}}),N.os=(function(e){return new hc(new pv(((t,n)=>{this.fM.cG(t,n),e.fM.cG(t,n)})))}),N.m1=(function(e){return e===void 0?this:e.os(this)}),new I().i(hc,`com.raquo.laminar.inserters.InserterHooks`,{dj:1});function _c(){}N=_c.prototype=new P,N.constructor=_c;function vc(){}vc.prototype=N,N.mZ=(function(e,t){return new Pv(e,void 0)}),new I().i(_c,`com.raquo.laminar.inserters.StaticChildInserter$`,{dl:1});var yc;function bc(){return yc||=new _c,yc}function xc(){}N=xc.prototype=new P,N.constructor=xc;function Sc(){}Sc.prototype=N,N.n0=(function(e,t){return e===``?$():$().iS(sk(new lk,e.split(t).filter((e=>e!==``))))}),new I().i(xc,`com.raquo.laminar.keys.CompositeKey$`,{dp:1});var Cc;function wc(){return Cc||=new xc,Cc}function Tc(e,t,n,r){this.e8=null,this.fQ=!1,this.fP=!1,this.fO=null,this.e8=e,this.fQ=t,this.fP=n,this.fO=r}N=Tc.prototype=new P,N.constructor=Tc;function Ec(){}Ec.prototype=N,N.mU=(function(e){var t=new Q((t=>{var n=this.fO.d(t);return n.c()?NS():new PS(e.d(n.S()))}));return new Tc(this.e8,this.fQ,this.fP,t)}),N.pD=(function(){var e=new Q((e=>{var t=this.fO.d(e);if(t.c())return NS();t.S();var n=Ms().ph(e.target);return new PS(n===void 0?``:n)}));return new Tc(this.e8,this.fQ,this.fP,e)}),new I().i(Tc,`com.raquo.laminar.keys.EventProcessor`,{dt:1});function Dc(){}N=Dc.prototype=new P,N.constructor=Dc;function Oc(){}Oc.prototype=N,N.mu=(function(e,t,n){return new Tc(e,t,n,new Q((e=>new PS(e))))}),new I().i(Dc,`com.raquo.laminar.keys.EventProcessor$`,{du:1});var kc;function Ac(){return kc||=new Dc,kc}function jc(){}N=jc.prototype=new P,N.constructor=jc;function Mc(){}Mc.prototype=N;function Nc(){this.nu=null,this.nv=null,this.nw=null,this.nx=null,this.nu=`http://www.w3.org/2000/svg`,this.nv=`http://www.w3.org/1999/xlink`,this.nw=`http://www.w3.org/XML/1998/namespace`,this.nx=`http://www.w3.org/2000/xmlns/`}N=Nc.prototype=new P,N.constructor=Nc;function Pc(){}Pc.prototype=N,N.pG=(function(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`xlink`:return`http://www.w3.org/1999/xlink`;case`xml`:return`http://www.w3.org/XML/1998/namespace`;case`xmlns`:return`http://www.w3.org/2000/xmlns/`;default:throw new vy(e)}}),new I().i(Nc,`com.raquo.laminar.keys.SvgAttr$`,{dx:1});var Fc;function Ic(){return Fc||=new Nc,Fc}function Lc(e,t){this.k5=null,this.h8=null,this.k5=e,this.h8=t}N=Lc.prototype=new P,N.constructor=Lc;function Rc(){}Rc.prototype=N,new I().i(Lc,`com.raquo.laminar.lifecycle.MountContext`,{dy:1});function zc(){}N=zc.prototype=new P,N.constructor=zc;function Bc(){}Bc.prototype=N,new I().i(zc,`com.raquo.laminar.modifiers.Binder$`,{dz:1});var Vc;function Hc(){return Vc||=new zc,Vc}var R=new I().i(1,`com.raquo.laminar.modifiers.Modifier`,{Q:1});function Uc(){this.ny=null,Gc=this,this.ny=new Qf}N=Uc.prototype=new P,N.constructor=Uc;function Wc(){}Wc.prototype=N,new I().i(Uc,`com.raquo.laminar.modifiers.Modifier$`,{dF:1});var Gc;function Kc(){return Gc||=new Uc,Gc}function qc(){this.hc=null,Yc=this,this.hc=new np}N=qc.prototype=new P,N.constructor=qc;function Jc(){}Jc.prototype=N,new I().i(qc,`com.raquo.laminar.modifiers.RenderableNode$`,{dJ:1});var Yc;function Xc(){return Yc||=new qc,Yc}function Zc(){this.n=null,$c=this,this.n=new cp(new Q((e=>e)),z()),new cp(new Q((e=>``+(e|0))),z()),new cp(new Q((e=>``+ +e)),z()),new cp(new Q((e=>``+!!e)),z()),new cp(new Q((e=>e.qD())),z())}N=Zc.prototype=new P,N.constructor=Zc;function Qc(){}Qc.prototype=N,new I().i(Zc,`com.raquo.laminar.modifiers.RenderableText$`,{dO:1});var $c;function z(){return $c||=new Zc,$c}function el(){}N=el.prototype=new P,N.constructor=el;function tl(){}tl.prototype=N,N.ep=(function(e,t,n){var r=new PS(e);t.eB(r),n!==void 0&&n.iQ(e,t);var i=Ms().oe(e.b9(),t.b9());return i&&t.ew(r),i}),N.q6=(function(e,t){var n=!1;return W().s(t.b9().parentNode,e.b9())&&(t.eB(NS()),n=Ms().q7(e.b9(),t.b9()),t.ew(NS())),n}),N.qd=(function(e,t,n,r){var i=!1;if(t!==n&&t.ii().bt(e)){var a=new PS(e);t.eB(NS()),n.eB(a),r!==void 0&&r.iQ(e,n),i=Ms().qe(e.b9(),n.b9(),t.b9()),i&&(t.ew(NS()),n.ew(a))}return i}),new I().i(el,`com.raquo.laminar.nodes.ParentNode$`,{dR:1});var nl;function rl(){return nl||=new el,nl}function il(){}N=il.prototype=new P,N.constructor=il;function al(){}al.prototype=N,N.qH=(function(e,t){return os().ex(e.bK,new Q((n=>t.d(new Lc(e,n)))),!0)}),new I().i(il,`com.raquo.laminar.nodes.ReactiveElement$`,{dT:1});var ol;function sl(){return ol||=new il,ol}function cl(e){this.kj=null,this.kj=new hc(new pv(((t,n)=>{matchResult1:{var r=n.b9();if(r instanceof Element){r.setAttribute(`slot`,e);break matchResult1}if(r instanceof Text){var i=Bm(),a=r.textContent,o=t.b9().tagName;i.bX(Mh(new Nh,"Error: You tried to insert a raw text node `"+a+"` into the `"+e+"` slot of <"+o.toLowerCase()+`>.
 - Cause: This is not possible: named slots only accept elements. Your node was inserted into the default slot instead.
 - Suggestion: Wrap your text node into \`span()\``));break matchResult1}}})))}N=cl.prototype=new P,N.constructor=cl;function ll(){}ll.prototype=N,N.m7=(function(e){return e.c9(new Q((e=>e.nr(this.kj))))}),new I().i(cl,`com.raquo.laminar.nodes.Slot`,{dW:1});function ul(){}N=ul.prototype=new P,N.constructor=ul;function dl(){}dl.prototype=N,new I().i(ul,`com.raquo.laminar.receivers.ChildTextReceiver$`,{dY:1});var fl;function pl(){return fl||=new ul,fl}function ml(){gl=this,ws().b4(G().qO(new eo(new Int32Array([0]))))}N=ml.prototype=new P,N.constructor=ml;function hl(){}hl.prototype=N,N.nT=(function(){return new Q((e=>void 0))}),new I().i(ml,`com.raquo.laminar.tags.CustomHtmlTag$`,{dZ:1});var gl;function _l(){return gl||=new ml,gl}function vl(){}N=vl.prototype=new P,N.constructor=vl;function yl(){}yl.prototype=N,N.od=(function(){xl().oP(),xl().oQ(),xl().oR(),xl().oS(),xl().oT(),xl().oU(),xl().oV()}),N.oP=(function(){var e=document.querySelector(`#example1`);cm().dV(e).c()||(Z(),new oh(e,xh().k(G().b(new(H.r()).C([new X((e=>e.iV().mX()))])),G().b(new(R.r()).C([Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Parent Node`,z().n),Y().k(G().b(new(H.r()).C([new X((e=>e.ql().J(!0)))])),G().b(new(R.r()).C([J(Z().i,`Child Node 1`,z().n)]))),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Child Node 2`,z().n),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Child Node 2 - 1`,z().n)]))),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Child Node 2 - 2`,z().n)])))])))])))])))))}),N.oQ=(function(){var e=document.querySelector(`#example2`);cm().dV(e).c()||(Z(),new oh(e,xh().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Deciduous`,z().n),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Birch`,z().n)]))),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Maple`,z().n),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Field maple`,z().n)]))),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Red maple`,z().n)]))),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Sugar maple`,z().n)])))]))),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Oak`,z().n)])))]))),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Coniferous`,z().n),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Cedar`,z().n)]))),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Pine`,z().n)]))),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Spruce`,z().n)])))]))),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Non-trees`,z().n),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Bamboo`,z().n)]))),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Cactus`,z().n)]))),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Fern`,z().n)])))])))])))))}),N.oR=(function(){var e=document.querySelector(`#example3`);if(!cm().dV(e).c()){Z();var t=Z().i.gS.m5(ph().ni().dE);new oh(e,Z().i.ms().gj(G().b(new(R.r()).C([Z().i.gT.lQ(`space-y-4`),h_().k(G().b(new(H.r()).C([new X((e=>e.pu().J(`Selection`))),new X((e=>e.eA().lR(t))),new X((e=>new $m((Z(),Ac().mu(e.fy(),!1,!1)).pD().mU(new X((e=>e))),new Q((e=>{t.fK.gt(e)})))))])),G().b(new(R.r()).C([Oh().k(G().b(new(H.r()).C([new X((e=>e.eA().J(ph().ni().dE)))])),G().b(new(R.r()).C([J(Z().i,`Single`,z().n)]))),Oh().k(G().b(new(H.r()).C([new X((e=>e.eA().J(ph().mX().dE)))])),G().b(new(R.r()).C([J(Z().i,`Multiple`,z().n)]))),Oh().k(G().b(new(H.r()).C([new X((e=>e.eA().J(ph().pv().dE)))])),G().b(new(R.r()).C([J(Z().i,`Leaf`,z().n)]))),Oh().k(G().b(new(H.r()).C([new X((e=>e.eA().J(ph().mT().dE)))])),G().b(new(R.r()).C([J(Z().i,`Multiple leaves`,z().n)])))]))),xh().k(G().b(new(H.r()).C([new X((e=>e.iV().lR(t)))])),G().b(new(R.r()).C([SE(Z().i,new X((e=>(Z(),Us().nU(t,Z().i.jE.j1(new X((e=>(t=>{for(var n=new sE(e.bA.querySelectorAll(`wa-tree-item`)).m();n.o();){var r=n.h();r.selected=!1}}))(e)),Xu().eN,!0)))))),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Item 1`,z().n),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Item A`,z().n),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Item Z`,z().n)]))),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Item Y`,z().n)]))),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Item X`,z().n)])))]))),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Item B`,z().n)]))),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Item C`,z().n)])))]))),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Item 2`,z().n)]))),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Item 3`,z().n)])))])))]))))}}),N.oS=(function(){var e=document.querySelector(`#example4`);if(!cm().dV(e).c()){Z();var t=Z().i.gS.m5(0);new oh(e,Z().i.ms().gj(G().b(new(R.r()).C([xh().k(G().b(new(H.r()).C([new X((e=>e.iV().mT())),new X((e=>new $m((Z(),Ac().mu(e.pW(),!1,!1)).mU(new X((e=>e.detail.selection.length|0))),new Q((e=>{t.fK.gt(e)})))))])),G().b(new(R.r()).C([Y().k(G().b(new(H.r()).C([new X((e=>e.gn().J(!0)))])),G().b(new(R.r()).C([J(Z().i,`Documents`,z().n),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Notes`,z().n)]))),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Report`,z().n)])))]))),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Readme`,z().n)])))]))),Z().i.q1().gj(G().b(new(R.r()).C([J(Z().i,`Selected leaves: `,z().n),(Z(),cc().of(new pE(t.gN,new X((e=>``+(e|0))),NS()),z().n))])))]))))}}),N.oT=(function(){var e=document.querySelector(`#example5`);cm().dV(e).c()||(Z(),new oh(e,xh().k(G().b(new(H.r()).C([new X((e=>e.qt().J(`--indent-guide-width: 1px`)))])),G().b(new(R.r()).C([Y().k(G().b(new(H.r()).C([new X((e=>e.gn().J(!0)))])),G().b(new(R.r()).C([J(Z().i,`Deciduous`,z().n),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Birch`,z().n)]))),Y().k(G().b(new(H.r()).C([new X((e=>e.gn().J(!0)))])),G().b(new(R.r()).C([J(Z().i,`Maple`,z().n),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Field maple`,z().n)]))),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Red maple`,z().n)]))),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Sugar maple`,z().n)])))]))),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Oak`,z().n)])))]))),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Coniferous`,z().n),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Cedar`,z().n)]))),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Pine`,z().n)]))),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Spruce`,z().n)])))]))),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Non-trees`,z().n),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Bamboo`,z().n)]))),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Cactus`,z().n)]))),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Fern`,z().n)])))])))])))))}),N.oU=(function(){var e=document.querySelector(`#example6`);cm().dV(e).c()||(Z(),new oh(e,xh().k(G().b(new(H.r()).C([new X((e=>Jm(Z().i,El().oW().m7(G().b(new(Iv.r()).C([(Z(),bc().mZ(_h().k(G().b(new(H.r()).C([new X((e=>e.cb().J(`square-plus`))),new X((e=>e.ce().J(`solid`)))])),G().b(new(R.r()).C([]))),Xc().hc))]))),qp().ht,sp()))),new X((e=>Jm(Z().i,El().or().m7(G().b(new(Iv.r()).C([(Z(),bc().mZ(_h().k(G().b(new(H.r()).C([new X((e=>e.cb().J(`square-minus`))),new X((e=>e.ce().J(`solid`)))])),G().b(new(R.r()).C([]))),Xc().hc))]))),qp().ht,sp())))])),G().b(new(R.r()).C([Z().i.gT.lQ(`custom-icons`),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Deciduous`,z().n),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Birch`,z().n)]))),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Maple`,z().n),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Field maple`,z().n)]))),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Red maple`,z().n)]))),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Sugar maple`,z().n)])))]))),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Oak`,z().n)])))]))),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Coniferous`,z().n),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Cedar`,z().n)]))),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Pine`,z().n)]))),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Spruce`,z().n)])))]))),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Non-trees`,z().n),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Bamboo`,z().n)]))),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Cactus`,z().n)]))),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([J(Z().i,`Fern`,z().n)])))])))])))))}),N.oV=(function(){var e=document.querySelector(`#example7`);cm().dV(e).c()||(Z(),new oh(e,xh().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([Y().k(G().b(new(H.r()).C([new X((e=>e.gn().J(!0)))])),G().b(new(R.r()).C([_h().k(G().b(new(H.r()).C([new X((e=>e.cb().J(`folder`))),new X((e=>e.ce().J(`regular`)))])),G().b(new(R.r()).C([]))),J(Z().i,`Documents`,z().n),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([_h().k(G().b(new(H.r()).C([new X((e=>e.cb().J(`folder`))),new X((e=>e.ce().J(`regular`)))])),G().b(new(R.r()).C([]))),J(Z().i,`Photos`,z().n),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([_h().k(G().b(new(H.r()).C([new X((e=>e.cb().J(`image`))),new X((e=>e.ce().J(`regular`)))])),G().b(new(R.r()).C([]))),J(Z().i,`birds.jpg`,z().n)]))),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([_h().k(G().b(new(H.r()).C([new X((e=>e.cb().J(`image`))),new X((e=>e.ce().J(`regular`)))])),G().b(new(R.r()).C([]))),J(Z().i,`kitten.jpg`,z().n)]))),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([_h().k(G().b(new(H.r()).C([new X((e=>e.cb().J(`image`))),new X((e=>e.ce().J(`regular`)))])),G().b(new(R.r()).C([]))),J(Z().i,`puppy.jpg`,z().n)])))]))),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([_h().k(G().b(new(H.r()).C([new X((e=>e.cb().J(`folder`))),new X((e=>e.ce().J(`regular`)))])),G().b(new(R.r()).C([]))),J(Z().i,`Writing`,z().n),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([_h().k(G().b(new(H.r()).C([new X((e=>e.cb().J(`file`))),new X((e=>e.ce().J(`regular`)))])),G().b(new(R.r()).C([]))),J(Z().i,`draft.txt`,z().n)]))),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([_h().k(G().b(new(H.r()).C([new X((e=>e.cb().J(`file-pdf`))),new X((e=>e.ce().J(`regular`)))])),G().b(new(R.r()).C([]))),J(Z().i,`final.pdf`,z().n)]))),Y().k(G().b(new(H.r()).C([])),G().b(new(R.r()).C([_h().k(G().b(new(H.r()).C([new X((e=>e.cb().J(`file-lines`))),new X((e=>e.ce().J(`regular`)))])),G().b(new(R.r()).C([]))),J(Z().i,`sales.xls`,z().n)])))])))])))])))))}),new I().i(vl,`examples.tree.Main$package$`,{e1:1});var bl;function xl(){return bl||=new vl,bl}function Sl(e){try{xl().od()}catch(e){throw e}}function Cl(){this.kL=null,this.kM=!1,this.kJ=null,this.kK=!1}N=Cl.prototype=new P,N.constructor=Cl;function wl(){}wl.prototype=N,N.oW=(function(){return this.kM||=(this.kL=new cl(`expand-icon`),!0),this.kL}),N.or=(function(){return this.kK||=(this.kJ=new cl(`collapse-icon`),!0),this.kJ}),new I().i(Cl,`io.github.nguyenyou.webawesome.laminar.Tree$slots$`,{e6:1});var Tl;function El(){return Tl||=new Cl,Tl}function Dl(){this.nA=!1,this.eJ=null,this.fX=null,this.kT=null,this.hm=!1,this.nz=0,this.nC=0,this.nB=null,kl=this,this.nA=!0,this.eJ=new ArrayBuffer(8),this.fX=new Int32Array(this.eJ,0,2),new Float32Array(this.eJ,0,2),this.kT=new Float64Array(this.eJ,0,1),this.fX[0]=16909060,this.hm=(new Int8Array(this.eJ,0,8)[0]|0)==1,this.nz=this.hm?0:1,this.nC=this.hm?1:0,this.nB=null}N=Dl.prototype=new P,N.constructor=Dl;function Ol(){}Ol.prototype=N,N.iP=(function(e){var t=e|0;return t===e&&1/e!=-1/0?t:(this.kT[0]=e,(this.fX[0]|0)^(this.fX[1]|0))}),new I().i(Dl,`java.lang.FloatingPointBits$`,{ek:1});var kl;function Al(){return kl||=new Dl,kl}function jl(e,t){for(var n=au().cc(`^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$`),r=[],i=0;i<(t.length|0);){var a=t[i];if(a!==``){var o=n.exec(a);if(o!==null){var s=Ml(e,o[1]),c=s[0],l=s[1],u=o[2],d=o[3],f=parseInt(d),p=o[4];r.push(new Fp(c,l,u,f|0,p===void 0?-1:parseInt(p)|0))}else r.push(new Fp(`<jscode>`,a,null,-1,-1))|0}i=1+i|0}var m=r.length|0,h=new(Lp.r()).C(m);for(i=0;i<m;)h.a[i]=r[i],i=1+i|0;return h}function Ml(e,t){var n=au().cc(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$`),r=au().cc(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$`),i=au().cc(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$`),a=au().cc(`^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$`),o=au().cc(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$`),s=n.exec(t),c=s===null?r.exec(t):s;if(c!==null)return[Nl(e,c[1]),Bl(e,c[2])];var l=i.exec(t),u=l===null?a.exec(t):l;if(u!==null)return[Nl(e,u[1]),`<init>`];var d=o.exec(t);return d===null?[`<jscode>`,t]:[Nl(e,d[1]),`<clinit>`]}function Nl(e,t){var n=Fl(e);if(vu().hr.call(n,t))var r=Fl(e)[t];else var r=Zl(e,0,t);return r.split(`_`).join(`.`).split(`＿`).join(`_`)}function Pl(e){if(!((1&e.bL)<<24>>24)){var t={};t.O=`java_lang_Object`,t.T=`java_lang_String`;for(var n=0;n<=22;){if(n>=2){var r=`T`+n;t[r]=`scala_Tuple`+n}var i=`F`+n;t[i]=`scala_Function`+n,n=1+n|0}e.ho=t,e.bL=(1|e.bL)<<24>>24}return e.ho}function Fl(e){return(1&e.bL)<<24>>24?e.ho:Pl(e)}function Il(e){if(!((2&e.bL)<<24>>24)){var t={};t.sjsr_=`scala_scalajs_runtime_`,t.sjs_=`scala_scalajs_`,t.sci_=`scala_collection_immutable_`,t.scm_=`scala_collection_mutable_`,t.scg_=`scala_collection_generic_`,t.sc_=`scala_collection_`,t.sr_=`scala_runtime_`,t.s_=`scala_`,t.jl_=`java_lang_`,t.ju_=`java_util_`,e.hp=t,e.bL=(2|e.bL)<<24>>24}return e.hp}function Ll(e){return(2&e.bL)<<24>>24?e.hp:Il(e)}function Rl(e){return(4&e.bL)<<24>>24||(e.hn=Object.keys(Ll(e)),e.bL=(4|e.bL)<<24>>24),e.hn}function zl(e){return(4&e.bL)<<24>>24?e.hn:Rl(e)}function Bl(e,t){if(t.startsWith(`init___`))return`<init>`;var n=t.indexOf(`__`)|0;return n<0?t:t.substring(0,n)}function Vl(e,t){return t?t.arguments&&t.stack?Hl(e,t):t.stack&&t.sourceURL?Gl(e,t):t.stack&&t.number?Wl(e,t):t.stack&&t.fileName?Ul(e,t):t.message&&t[`opera#sourceloc`]?t.stacktrace?t.message.indexOf(`
`)>-1&&t.message.split(`
`).length>t.stacktrace.split(`
`).length?Kl(e,t):ql(e,t):Kl(e,t):t.message&&t.stack&&t.stacktrace?t.stacktrace.indexOf(`called from line`)<0?Jl(e,t):Yl(e,t):t.stack&&!t.fileName?Hl(e,t):Xl(e,t):[]}function Hl(e,t){return(t.stack+`
`).replace(au().cc(`^[\\s\\S]+?\\s+at\\s+`),` at `).replace(au().bx(`^\\s+(at eval )?at\\s+`,`gm`),``).replace(au().bx(`^([^\\(]+?)([\\n])`,`gm`),`{anonymous}() ($1)$2`).replace(au().bx(`^Object.<anonymous>\\s*\\(([^\\)]+)\\)`,`gm`),`{anonymous}() ($1)`).replace(au().bx(`^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(0,-1)}function Ul(e,t){return t.stack.replace(au().bx(`(?:\\n@:0)?\\s+$`,`m`),``).replace(au().bx(`^(?:\\((\\S*)\\))?@`,`gm`),`{anonymous}($1)@`).split(`
`)}function Wl(e,t){return t.stack.replace(au().bx(`^\\s*at\\s+(.*)$`,`gm`),`$1`).replace(au().bx(`^Anonymous function\\s+`,`gm`),`{anonymous}() `).replace(au().bx(`^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(1)}function Gl(e,t){return t.stack.replace(au().bx(`\\[native code\\]\\n`,`m`),``).replace(au().bx(`^(?=\\w+Error\\:).*$\\n`,`m`),``).replace(au().bx(`^@`,`gm`),`{anonymous}()@`).split(`
`)}function Kl(e,t){for(var n=au().bx(`Line (\\d+).*script (?:in )?(\\S+)`,`i`),r=t.message.split(`
`),i=[],a=2,o=r.length|0;a<o;){var s=n.exec(r[a]);s!==null&&i.push(`{anonymous}()@`+s[2]+`:`+s[1])|0,a=2+a|0}return i}function ql(e,t){for(var n=au().bx(`Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$`,`i`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[3],l=c===void 0?`{anonymous}`:c;i.push(l+`()@`+s[2]+`:`+s[1])|0}a=2+a|0}return i}function Jl(e,t){for(var n=au().cc(`^(.*)@(.+):(\\d+)$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[1],l=c===void 0?`global code`:c+`()`;i.push(l+`@`+s[2]+`:`+s[3])|0}a=1+a|0}return i}function Yl(e,t){for(var n=au().cc(`^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[4]+`:`+s[1]+`:`+s[2],l=s[2],u=(l===void 0?`global code`:l).replace(au().cc(`<anonymous function: (\\S+)>`),`$1`).replace(au().cc(`<anonymous function>`),`{anonymous}`);i.push(u+`@`+c)|0}a=2+a|0}return i}function Xl(e,t){return[]}function Zl(e,t,n){for(;;)if(t<(zl(e).length|0)){var r=zl(e)[t];if(n.startsWith(r))return``+Ll(e)[r]+n.substring(r.length);t=1+t|0}else return n.startsWith(`L`)?n.substring(1):n}function Ql(){this.ho=null,this.hp=null,this.hn=null,this.bL=0}N=Ql.prototype=new P,N.constructor=Ql;function $l(){}$l.prototype=N,N.oX=(function(e){return jl(this,Vl(this,e))}),new I().i(Ql,`java.lang.StackTrace$`,{ex:1});var eu;function tu(){return eu||=new Ql,eu}function nu(){}N=nu.prototype=new P,N.constructor=nu;function ru(){}ru.prototype=N,N.cc=(function(e){return new RegExp(e)}),N.bx=(function(e,t){return new RegExp(e,t)}),new I().i(nu,`java.lang.StackTrace$StringRE$`,{ey:1});var iu;function au(){return iu||=new nu,iu}function ou(){this.kV=null,this.nD=null,cu=this,this.kV=new xw(!1),this.nD=new xw(!0)}N=ou.prototype=new P,N.constructor=ou;function su(){}su.prototype=N,new I().i(ou,`java.lang.System$Streams$`,{eC:1});var cu;function lu(){return cu||=new ou,cu}function uu(e){var t={};return t[`java.version`]=`1.8`,t[`java.vm.specification.version`]=`1.8`,t[`java.vm.specification.vendor`]=`Oracle Corporation`,t[`java.vm.specification.name`]=`Java Virtual Machine Specification`,t[`java.vm.name`]=`Scala.js`,t[`java.vm.version`]=`1.19.0`,t[`java.specification.version`]=`1.8`,t[`java.specification.vendor`]=`Oracle Corporation`,t[`java.specification.name`]=`Java Platform API Specification`,t[`file.separator`]=`/`,t[`path.separator`]=`:`,t[`line.separator`]=`
`,t}function du(){this.hq=null,this.kW=null,pu=this,this.hq=uu(this),this.kW=null}N=du.prototype=new P,N.constructor=du;function fu(){}fu.prototype=N,N.iy=(function(e,t){if(this.hq!==null){var n=this.hq;return vu().hr.call(n,e)?n[e]:t}else return this.kW.iy(e,t)}),new I().i(du,`java.lang.System$SystemProperties$`,{eD:1});var pu;function mu(){return pu||=new du,pu}function hu(){this.hr=null,_u=this,this.hr=Object.prototype.hasOwnProperty}N=hu.prototype=new P,N.constructor=hu;function gu(){}gu.prototype=N,new I().i(hu,`java.lang.Utils$Cache$`,{eG:1});var _u;function vu(){return _u||=new hu,_u}function yu(e,t){return e===t}function bu(e){return 0}function xu(e,t){return!!(e&&e.$classData&&e.$classData.D===t&&e.$classData.B.n.br)}var Su=new I().i(0,`java.lang.Void`,{br:1},(e=>e===void 0));function Cu(e,t){throw Qv(new ey,`argument type mismatch`)}function wu(){}N=wu.prototype=new P,N.constructor=wu;function Tu(){}Tu.prototype=N,N.bU=(function(e){return e instanceof F||e instanceof Xa||e instanceof Za||e instanceof Qa||e instanceof $a||e instanceof eo||e instanceof to||e instanceof no||e instanceof ro?e.a.length:Cu(this,e)}),new I().i(wu,`java.lang.reflect.Array$`,{eI:1});var Eu;function Du(){return Eu||=new wu,Eu}function Ou(){}N=Ou.prototype=new P,N.constructor=Ou;function ku(){}ku.prototype=N,N.ok=(function(e,t){for(var n=0,r=e.a.length;;)if(n===r)return-1-n|0;else{var i=(n+r|0)>>>1|0,a=e.a[i],o=t===a?0:t<a?-1:1;if(o<0)r=i;else if(o===0)return i;else n=1+i|0}}),N.mA=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=a.p,s=a.t,c=r,l=t.a[c],u=l.p,d=l.t;if(!(o===u&&s===d))return!1;r=1+r|0}return!0}),N.im=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),N.mB=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),N.mx=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),N.mw=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),N.mC=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),N.my=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),N.mz=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),N.W=(function(e,t){if(t<0)throw new oy;var n=e.a.length,r=t<n?t:n,i=Da(e).Q.Q().Q.U(t);return e.x(0,i,0,r),i}),N.a5=(function(e,t,n){if(t>n)throw Qv(new ey,t+` > `+n);var r=e.a.length,i=n-t|0,a=r-t|0,o=i<a?i:a,s=Da(e).Q.Q().Q.U(i);return e.x(t,s,0,o),s}),new I().i(Ou,`java.util.Arrays$`,{eJ:1});var Au;function B(){return Au||=new Ou,Au}function V(e,t){this.p=0,this.t=0,this.p=e,this.t=t}N=V.prototype=new P,N.constructor=V;function ju(){}ju.prototype=N,N.r=(function(e){return e instanceof V&&this.p===e.p&&this.t===e.t}),N.y=(function(){return this.p^this.t}),N.C=(function(){return zu().n9(this.p,this.t)}),N.rv=(function(){return this.p}),N.ru=(function(){return zu().n8(this.p,this.t)}),N.rt=(function(){return zu().fA(this.p,this.t)}),N.r8=(function(){return this.p<<24>>24}),N.rr=(function(){return this.p<<16>>16}),N.rk=(function(){return this.p}),N.rl=(function(){return this}),N.re=(function(){return zu().n8(this.p,this.t)}),N.rc=(function(){return zu().fA(this.p,this.t)}),N.ra=(function(e){return zu().n6(this.p,this.t,e.p,e.t)}),N.r9=(function(e){return zu().n6(this.p,this.t,e.p,e.t)}),N.rd=(function(e){return this.p===e.p&&this.t===e.t}),N.rp=(function(e){return!(this.p===e.p&&this.t===e.t)}),N.r0=(function(e){var t=this.t,n=e.t;return t===n?(-2147483648^this.p)<(-2147483648^e.p):t<n}),N.r1=(function(e){var t=this.t,n=e.t;return t===n?(-2147483648^this.p)<=(-2147483648^e.p):t<n}),N.qW=(function(e){var t=this.t,n=e.t;return t===n?(-2147483648^this.p)>(-2147483648^e.p):t>n}),N.qX=(function(e){var t=this.t,n=e.t;return t===n?(-2147483648^this.p)>=(-2147483648^e.p):t>n}),N.rx=(function(){return new V(~this.p,~this.t)}),N.qU=(function(e){return new V(this.p|e.p,this.t|e.t)}),N.qT=(function(e){return new V(this.p&e.p,this.t&e.t)}),N.r7=(function(e){return new V(this.p^e.p,this.t^e.t)}),N.r2=(function(e){var t=this.p;return new V(32&e?0:t<<e,32&e?t<<e:(t>>>1|0)>>>(31-e|0)|0|this.t<<e)}),N.qZ=(function(e){var t=this.t;return new V(32&e?t>>>e|0:this.p>>>e|0|t<<1<<(31-e|0),32&e?0:t>>>e|0)}),N.qY=(function(e){var t=this.t;return new V(32&e?t>>e:this.p>>>e|0|t<<1<<(31-e|0),32&e?t>>31:t>>e)}),N.rw=(function(){var e=this.p,t=this.t;return new V(-e|0,e===0?-t|0:~t)}),N.r5=(function(e){var t=this.p,n=this.t,r=e.t,i=t+e.p|0;return new V(i,(-2147483648^i)<(-2147483648^t)?1+(n+r|0)|0:n+r|0)}),N.r3=(function(e){var t=this.p,n=this.t,r=e.t,i=t-e.p|0;return new V(i,(-2147483648^i)>(-2147483648^t)?-1+(n-r|0)|0:n-r|0)}),N.r6=(function(e){var t=this.p,n=e.p,r=65535&t,i=t>>>16|0,a=65535&n,o=n>>>16|0,s=Math.imul(r,a),c=Math.imul(i,a),l=Math.imul(r,o),u=s+((c+l|0)<<16)|0,d=(s>>>16|0)+l|0;return new V(u,(((Math.imul(t,e.t)+Math.imul(this.t,n)|0)+Math.imul(i,o)|0)+(d>>>16|0)|0)+(((65535&d)+c|0)>>>16|0)|0)}),N.qV=(function(e){var t=zu();return new V(t.oH(this.p,this.t,e.p,e.t),t.T)}),N.r4=(function(e){var t=zu();return new V(t.q5(this.p,this.t,e.p,e.t),t.T)}),new I().i(V,`org.scalajs.linker.runtime.RuntimeLong`,{bs:1});function Mu(e,t,n){return-2097152&n?Fu(e,t,n,1e9,0,2):``+(4294967296*n+ +(t>>>0))}function Nu(e,t,n,r,i){if(-2097152&n)if(i===0&&!(r&(-1+r|0))){var a=31-(Math.clz32(r)|0)|0;return e.T=n>>>a|0,t>>>a|0|n<<1<<(31-a|0)}else if(r===0&&!(i&(-1+i|0))){var o=31-(Math.clz32(i)|0)|0;return e.T=0,n>>>o|0}else return Fu(e,t,n,r,i,0)|0;else{if(-2097152&i)return e.T=0,0;var s=(4294967296*n+ +(t>>>0))/(4294967296*i+ +(r>>>0));return e.T=s/4294967296|0,s|0}}function Pu(e,t,n,r,i){if(-2097152&n)return i===0&&!(r&(-1+r|0))?(e.T=0,t&(-1+r|0)):r===0&&!(i&(-1+i|0))?(e.T=n&(-1+i|0),t):Fu(e,t,n,r,i,1)|0;if(-2097152&i)return e.T=n,t;var a=(4294967296*n+ +(t>>>0))%(4294967296*i+ +(r>>>0));return e.T=a/4294967296|0,a|0}function Fu(e,t,n,r,i,a){for(var o=(i===0?32+(Math.clz32(r)|0)|0:Math.clz32(i)|0)-(n===0?32+(Math.clz32(t)|0)|0:Math.clz32(n)|0)|0,s=o,c=32&s?0:r<<s,l=32&s?r<<s:(r>>>1|0)>>>(31-s|0)|0|i<<s,u=c,d=l,f=t,p=n,m=0,h=0;o>=0&&-2097152&p;){var g=f,_=p,v=u,y=d;if(_===y?(-2147483648^g)>=(-2147483648^v):(-2147483648^_)>=(-2147483648^y)){var ee=f,te=p,ne=u,b=d,x=ee-ne|0,S=(-2147483648^x)>(-2147483648^ee)?-1+(te-b|0)|0:te-b|0;f=x,p=S,o<32?m|=1<<o:h|=1<<o}o=-1+o|0;var re=u,ie=d,ae=re>>>1|0|ie<<31,oe=ie>>>1|0;u=ae,d=oe}var C=f,se=p;if(se===i?(-2147483648^C)>=(-2147483648^r):(-2147483648^se)>=(-2147483648^i)){var w=f,ce=4294967296*p+ +(w>>>0),le=4294967296*i+ +(r>>>0);if(a!==1){var ue=ce/le,de=ue|0,fe=ue/4294967296|0,pe=m,me=h,he=pe+de|0,ge=(-2147483648^he)<(-2147483648^pe)?1+(me+fe|0)|0:me+fe|0;m=he,h=ge}if(a!==0){var _e=ce%le;f=_e|0,p=_e/4294967296|0}}if(a===0)return e.T=h,m;if(a===1)return e.T=p,f;var ve=m,ye=4294967296*h+ +(ve>>>0),be=``+f,xe=be.length;return``+ye+`000000000`.substring(xe)+be}function Iu(){this.T=0}N=Iu.prototype=new P,N.constructor=Iu;function Lu(){}Lu.prototype=N,N.n9=(function(e,t){return t===e>>31?``+e:t<0?`-`+Mu(this,-e|0,e===0?-t|0:~t):Mu(this,e,t)}),N.fA=(function(e,t){return t<0?-(4294967296*((e===0?-t|0:~t)>>>0)+ +((-e|0)>>>0)):4294967296*t+ +(e>>>0)}),N.n8=(function(e,t){if(t<0)var n=-e|0,r=e===0?-t|0:~t;else var n=e,r=t;var i=!(-2097152&r)||!(65535&n)?n:32768|-65536&n,a=4294967296*(r>>>0)+ +(i>>>0);return Math.fround(t<0?-a:a)}),N.rh=(function(e){return new V(e,e>>31)}),N.rg=(function(e){return new V(this.n7(e),this.T)}),N.n7=(function(e){if(e<-0x8000000000000000)return this.T=-2147483648,0;if(e>=0x8000000000000000)return this.T=2147483647,-1;var t=e|0,n=e/4294967296|0;return this.T=e<0&&t!==0?-1+n|0:n,t}),N.n6=(function(e,t,n,r){return t===r?e===n?0:(-2147483648^e)<(-2147483648^n)?-1:1:t<r?-1:1}),N.oH=(function(e,t,n,r){if((n|r)===0)throw new Yv(`/ by zero`);if(t===e>>31)if(r===n>>31){if(e===-2147483648&&n===-1)return this.T=0,-2147483648;var i=Ma(e,n);return this.T=i>>31,i}else if(e===-2147483648&&n===-2147483648&&r===0)return this.T=-1,-1;else return this.T=0,0;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=Nu(this,a,o,s,c);if((t^r)>=0)return l;var u=this.T;return this.T=l===0?-u|0:~u,-l|0}}),N.q5=(function(e,t,n,r){if((n|r)===0)throw new Yv(`/ by zero`);if(t===e>>31)if(r===n>>31)if(n!==-1){var i=Na(e,n);return this.T=i>>31,i}else return this.T=0,0;else if(e===-2147483648&&n===-2147483648&&r===0)return this.T=0,0;else return this.T=t,e;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=Pu(this,a,o,s,c);if(t<0){var u=this.T;return this.T=l===0?-u|0:~u,-l|0}else return l}}),new I().i(Iu,`org.scalajs.linker.runtime.RuntimeLong$`,{eO:1});var Ru;function zu(){return Ru||=new Iu,Ru}function Bu(){this.hu=null,this.l0=null,Hu=this,this.hu=new eo(0),this.l0=new F(0)}N=Bu.prototype=new P,N.constructor=Bu;function Vu(){}Vu.prototype=N,new I().i(Bu,`scala.Array$EmptyArrays$`,{eU:1});var Hu;function Uu(){return Hu||=new Bu,Hu}var Wu=new I().i(1,`scala.Function0`,{aF:1}),H=new I().i(1,`scala.Function1`,{e:1});function Gu(){}N=Gu.prototype=new P,N.constructor=Gu;function Ku(){}Ku.prototype=N;function qu(){this.l2=null,this.eN=null,Yu=this,this.l2=new X((e=>Xu().l2)),this.eN=new P_}N=qu.prototype=new P,N.constructor=qu;function Ju(){}Ju.prototype=N,new I().i(qu,`scala.PartialFunction$`,{f2:1});var Yu;function Xu(){return Yu||=new qu,Yu}function Zu(){this.l7=null,$u=this,this.l7=new X((e=>ed().l7))}N=Zu.prototype=new P,N.constructor=Zu;function Qu(){}Qu.prototype=N,N.p1=(function(e,t){var n=Du().bU(e),r=0;if(e instanceof F)for(;r<n;)t.d(e.a[r]),r=1+r|0;else if(e instanceof eo)for(;r<n;)t.d(e.a[r]),r=1+r|0;else if(e instanceof ro)for(;r<n;)t.d(e.a[r]),r=1+r|0;else if(e instanceof to)for(;r<n;)t.d(e.a[r]),r=1+r|0;else if(e instanceof no)for(;r<n;)t.d(e.a[r]),r=1+r|0;else if(e instanceof Za)for(;r<n;)t.d(Wa(e.a[r])),r=1+r|0;else if(e instanceof Qa)for(;r<n;)t.d(e.a[r]),r=1+r|0;else if(e instanceof $a)for(;r<n;)t.d(e.a[r]),r=1+r|0;else if(e instanceof Xa)for(;r<n;)t.d(e.a[r]),r=1+r|0;else throw new vy(e)}),new I().i(Zu,`scala.collection.ArrayOps$`,{f9:1});var $u;function ed(){return $u||=new Zu,$u}function td(){}N=td.prototype=new P,N.constructor=td;function nd(){}nd.prototype=N,N.c7=(function(e){var t=e+~(e<<9)|0;return t^=t>>>14|0,t=t+(t<<4)|0,t^(t>>>10|0)}),new I().i(td,`scala.collection.Hashing$`,{fl:1});var rd;function id(){return rd||=new td,rd}function ad(e,t){for(var n=e.m();n.o();)t.d(n.h())}function od(e,t){for(var n=!0,r=e.m();n&&r.o();)n=!!t.d(r.h());return n}function sd(e){switch(e.B()){case-1:return!e.m().o();case 0:return!0;default:return!1}}function cd(e,t,n,r){for(var i=e.m(),a=n,o=Du().bU(t)-n|0,s=n+(r<o?r:o)|0;a<s&&i.o();)G().ig(t,a,i.h()),a=1+a|0;return a-n|0}function ld(e,t,n,r){return e.B()===0?``+t+r:e.cl(XO(new ZO),t,n,r).aR.q}function ud(e,t,n,r,i){var a=t.aR;n.length!==0&&(a.q=``+a.q+n);var o=e.m();if(o.o()){var s=o.h();for(a.q=``+a.q+s;o.o();){a.q=``+a.q+r;var c=o.h();a.q=``+a.q+c}}return i.length!==0&&(a.q=``+a.q+i),t}function dd(e,t){if(e.B()>=0){var n=t.bh(e.B());return e.bf(n,0,2147483647),n}else{var r=null,i=t.aI(),a=i===oo.l();r=[];for(var o=e.m();o.o();){var s=o.h(),c=a?Ga(s):s===null?i.Q.z:s;r.push(c)}return(i===io.l()?Su.l():i===ef.l()||i===Rg.l()?L.l():i).Q.r().w(r)}}function fd(e,t){this.le=null,this.eS=null,this.le=e,this.eS=t}N=fd.prototype=new P,N.constructor=fd;function pd(){}pd.prototype=N,N.pi=(function(){return this.le.a4().m()}),new I().i(fd,`scala.collection.Iterator$ConcatIteratorCell`,{fu:1});function md(){this.lh=null,gd=this,this.lh=new X((e=>_d().lh))}N=md.prototype=new P,N.constructor=md;function hd(){}hd.prototype=N,N.ot=(function(e,t){return DS(e,t)>=0}),new I().i(md,`scala.collection.StringOps$`,{fC:1});var gd;function _d(){return gd||=new md,gd}function vd(){}N=vd.prototype=new P,N.constructor=vd;function yd(){}yd.prototype=N,N.fu=(function(e,t){return ny(new ry,e+` is out of bounds (min 0, max `+t+`)`)}),new I().i(vd,`scala.collection.generic.CommonErrors$`,{fG:1});var bd;function xd(){return bd||=new vd,bd}function Sd(){try{return jp().na(mu().iy(`scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength`,`64`),10)}catch(e){throw e}}function Cd(){this.lk=0,Td=this,this.lk=Sd()}N=Cd.prototype=new P,N.constructor=Cd;function wd(){}wd.prototype=N,new I().i(Cd,`scala.collection.immutable.IndexedSeqDefaults$`,{fO:1});var Td;function Ed(){return Td||=new Cd,Td}function Dd(){this.hR=null}N=Dd.prototype=new P,N.constructor=Dd;function Od(){}Od.prototype=N,N.io=(function(){var e=this.hR;if(e===null)throw new ty(`uninitialized`);return e.a4()}),N.iC=(function(e){if(this.hR!==null)throw new ty(`already initialized`);this.hR=e}),new I().i(Dd,`scala.collection.immutable.LazyList$LazyBuilder$DeferredState`,{fS:1});function kd(){this.lp=null,jd=this,this.lp=new cg(0,0,new F(0),new eo(0),0,0)}N=kd.prototype=new P,N.constructor=kd;function Ad(){}Ad.prototype=N,new I().i(kd,`scala.collection.immutable.MapNode$`,{g9:1});var jd;function Md(){return jd||=new kd,jd}function Nd(e,t,n){return pS(new hS,n+` is out of bounds (min 0, max `+(-1+Du().bU(t)|0))}function Pd(){}N=Pd.prototype=new P,N.constructor=Pd;function Fd(){}Fd.prototype=N,N.nb=(function(e,t){if(t<0||t>(-1+e.a.length|0))throw Nd(this,e,t);var n=new eo(-1+e.a.length|0);e.x(0,n,0,t);var r=1+t|0,i=-1+(e.a.length-t|0)|0;return e.x(r,n,t,i),n}),N.pn=(function(e,t,n){if(t<0||t>e.a.length)throw Nd(this,e,t);var r=new eo(1+e.a.length|0);e.x(0,r,0,t),r.a[t]=n;var i=1+t|0,a=e.a.length-t|0;return e.x(t,r,i,a),r});var Id=new I().i(0,`scala.collection.immutable.Node`,{aP:1});function Ld(){this.f0=0,zd=this,this.f0=Pa(7)}N=Ld.prototype=new P,N.constructor=Ld;function Rd(){}Rd.prototype=N,N.dZ=(function(e,t){return 31&(e>>>t|0)}),N.dt=(function(e){return 1<<e}),N.pk=(function(e,t){return jp().ds(e&(-1+t|0))}),N.cn=(function(e,t,n){return e===-1?t:this.pk(e,n)}),new I().i(Ld,`scala.collection.immutable.Node$`,{gc:1});var zd;function Bd(){return zd||=new Ld,zd}function Vd(){this.hV=null,this.be=null,this.ck=null,this.ek=null,this.hW=null,this.lt=null,Ud=this,this.hV=new F(0),this.be=new(L.r().r()).C(0),this.ck=new(L.r().r().r()).C(0),this.ek=new(L.r().r().r().r()).C(0),this.hW=new(L.r().r().r().r().r()).C(0),this.lt=new(L.r().r().r().r().r().r()).C(0)}N=Vd.prototype=new P,N.constructor=Vd;function Hd(){}Hd.prototype=N,N.eq=(function(e,t){var n=e.a.length,r=new F(1+n|0);return e.x(0,r,0,n),r.a[n]=t,r}),N.G=(function(e,t){var n=B().W(e,1+e.a.length|0);return n.a[-1+n.a.length|0]=t,n}),N.cm=(function(e,t){var n=Da(t).Q.Q().Q.U(1+t.a.length|0),r=t.a.length;return t.x(0,n,1,r),n.a[0]=e,n}),N.iq=(function(e,t,n){var r=0,i=t.a.length;if(e===0)for(;r<i;)n.d(t.a[r]),r=1+r|0;else for(var a=-1+e|0;r<i;)this.iq(a,t.a[r],n),r=1+r|0}),N.bV=(function(e,t){for(var n=0;n<e.a.length;){var r=e.a[n],i=t.d(r);if(!Object.is(r,i))return this.pA(e,t,n,i);n=1+n|0}return e}),N.pA=(function(e,t,n,r){var i=new F(e.a.length);n>0&&e.x(0,i,0,n),i.a[n]=r;for(var a=1+n|0;a<e.a.length;)i.a[a]=t.d(e.a[a]),a=1+a|0;return i}),N.a3=(function(e,t,n){if(e===1)return this.bV(t,n);for(var r=0;r<t.a.length;){var i=t.a[r],a=this.a3(-1+e|0,i,n);if(i!==a)return this.pB(e,t,n,r,a);r=1+r|0}return t}),N.pB=(function(e,t,n,r,i){var a=Da(t).Q.Q().Q.U(t.a.length);r>0&&t.x(0,a,0,r),a.a[r]=i;for(var o=1+r|0;o<t.a.length;)a.a[o]=this.a3(-1+e|0,t.a[o],n),o=1+o|0;return a}),new I().i(Vd,`scala.collection.immutable.VectorStatics$`,{gu:1});var Ud;function U(){return Ud||=new Vd,Ud}function Wd(e,t,n){this.em=null,this.cD=0,this.aQ=null,this.em=e,this.cD=t,this.aQ=n}N=Wd.prototype=new P,N.constructor=Wd;function Gd(){}Gd.prototype=N,N.oZ=(function(e,t){for(var n=this;;)if(t===n.cD&&W().s(e,n.em))return n;else if(n.aQ===null||n.cD>t)return null;else n=n.aQ}),N.C=(function(){return`Node(`+this.em+`, `+this.cD+`) -> `+this.aQ});var Kd=new I().i(Wd,`scala.collection.mutable.HashSet$Node`,{gM:1});function qd(){}N=qd.prototype=new P,N.constructor=qd;function Jd(){}Jd.prototype=N,N.mj=(function(e,t,n){if(t!==e)throw new uy(n)}),new I().i(qd,`scala.collection.mutable.MutationTracker$`,{gS:1});var Yd;function Xd(){return Yd||=new qd,Yd}function Zd(){}N=Zd.prototype=new P,N.constructor=Zd;function Qd(){}Qd.prototype=N,N.s=(function(e,t){return e===t||(Pp(e)?this.oO(e,t):e instanceof Ea?this.oM(e,t):e===null?t===null:ka(e,t))}),N.oO=(function(e,t){if(Pp(t))return this.oN(e,t);if(t instanceof Ea){if(typeof e==`number`)return+e===t.c;if(e instanceof V){var n=Ka(e),r=n.p,i=n.t,a=t.c,o=a>>31;return r===a&&i===o}else return e===null?t===null:ka(e,t)}else return e===null?t===null:ka(e,t)}),N.oN=(function(e,t){if(typeof e==`number`){var n=+e;if(typeof t==`number`)return n===+t;if(t instanceof V){var r=Ka(t);return n===zu().fA(r.p,r.t)}else return!1}else if(e instanceof V){var i=Ka(e),a=i.p,o=i.t;if(t instanceof V){var s=Ka(t),c=s.p,l=s.t;return a===c&&o===l}else if(typeof t==`number`){var u=+t;return zu().fA(a,o)===u}else return!1}else return e===null?t===null:ka(e,t)}),N.oM=(function(e,t){if(t instanceof Ea)return e.c===t.c;if(Pp(t)){if(typeof t==`number`)return+t===e.c;if(t instanceof V){var n=Ka(t),r=n.p,i=n.t,a=e.c,o=a>>31;return r===a&&i===o}else return t===null?e===null:ka(t,e)}else return e===null&&t===null}),new I().i(Zd,`scala.runtime.BoxesRunTime$`,{ht:1});var $d;function W(){return $d||=new Zd,$d}var ef=new I().i(0,`scala.runtime.Null$`,{hw:1});function tf(){}N=tf.prototype=new P,N.constructor=tf;function nf(){}nf.prototype=N,N.dW=(function(e,t){if(e instanceof F||e instanceof eo||e instanceof ro||e instanceof to||e instanceof no)return e.a[t];if(e instanceof Za)return Wa(e.a[t]);if(e instanceof Qa||e instanceof $a||e instanceof Xa)return e.a[t];throw e===null?new sy:new vy(e)}),N.ig=(function(e,t,n){if(e instanceof F)e.a[t]=n;else if(e instanceof eo)e.a[t]=n|0;else if(e instanceof ro)e.a[t]=+n;else if(e instanceof to)e.a[t]=Ka(n);else if(e instanceof no)e.a[t]=Math.fround(n);else if(e instanceof Za)e.a[t]=Ga(n);else if(e instanceof Qa)e.a[t]=n|0;else if(e instanceof $a)e.a[t]=n|0;else if(e instanceof Xa)e.a[t]=!!n;else if(e===null)throw new sy;else throw new vy(e)}),N.i9=(function(e){return ld(e.bW(),e.bw()+`(`,`,`,`)`)}),N.b=(function(e){return e===null?null:e.a.length===0?$S(rC()):new qD(e)}),N.qO=(function(e){return e===null?null:new UD(e)}),new I().i(tf,`scala.runtime.ScalaRunTime$`,{hy:1});var rf;function G(){return rf||=new tf,rf}function af(){}N=af.prototype=new P,N.constructor=af;function of(){}of.prototype=N,N.f=(function(e,t){var n=this.cO(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),N.cO=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),N.E=(function(e,t){return this.oj(e^t)}),N.oj=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),N.ev=(function(e){var t=e.p,n=e.t;return n===t>>31?t:t^n}),N.c6=(function(e){var t=Pa(e);if(t===e)return t;var n=zu(),r=n.n7(e),i=n.T;return zu().fA(r,i)===e?r^i:Al().iP(e)}),N.P=(function(e){if(e===null)return 0;if(typeof e==`number`)return this.c6(+e);if(e instanceof V){var t=Ka(e);return this.ev(new V(t.p,t.t))}else return Aa(e)}),N.dY=(function(e){throw ny(new ry,``+e)}),new I().i(af,`scala.runtime.Statics$`,{hA:1});var sf;function K(){return sf||=new af,sf}function cf(){}N=cf.prototype=new P,N.constructor=cf;function lf(){}lf.prototype=N,N.oh=(function(e){return e}),new I().i(cf,`scala.scalajs.js.defined$`,{hG:1});var uf;function df(){return uf||=new cf,uf}function ff(){}N=ff.prototype=new P,N.constructor=ff;function pf(){}pf.prototype=N,N.qr=(function(e,t){return setTimeout((()=>{t.a4()}),e)}),new I().i(ff,`scala.scalajs.js.timers.package$`,{hH:1});var mf;function hf(){return mf||=new ff,mf}function gf(){}N=gf.prototype=new P,N.constructor=gf;function _f(){}_f.prototype=N,N.qE=(function(e){if(e instanceof fD)return e.gc;var t=[];return e.bJ(new X((e=>t.push(e)|0))),t}),new I().i(gf,`scala.scalajs.runtime.Compat$`,{hQ:1});var vf;function yf(){return vf||=new gf,vf}function bf(){}N=bf.prototype=new P,N.constructor=bf;function xf(){}xf.prototype=N,N.qs=(function(e){var t=`Illegal command line`+(e.mN()===0?``:e.mN()===1?` after first argument`:` after `+e.mN()+` arguments`)+`: `+e.rm();nm().pZ().ps(t+`
`)}),new I().i(bf,`scala.util.CommandLineParser$`,{hS:1});function Sf(e){this.i5=null,this.i5=e}N=Sf.prototype=new P,N.constructor=Sf;function Cf(){}Cf.prototype=N,N.C=(function(){return`DynamicVariable(`+this.i5+`)`}),new I().i(Sf,`scala.util.DynamicVariable`,{hU:1});function wf(){}N=wf.prototype=new P,N.constructor=wf;function Tf(){}Tf.prototype=N,N.gi=(function(e){return!0}),new I().i(wf,`scala.util.control.NonFatal$`,{hW:1});var Ef;function Df(){return Ef||=new wf,Ef}function Of(){}N=Of.prototype=new P,N.constructor=Of;function kf(){}kf.prototype=N,N.f=(function(e,t){var n=this.cO(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),N.cO=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),N.E=(function(e,t){return this.by(e^t)}),N.by=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),N.nm=(function(e,t,n){var r=n;return r=this.f(r,TS(`Tuple2`)),r=this.f(r,e),r=this.f(r,t),this.E(r,2)}),N.dx=(function(e,t,n){var r=e.bu();if(r===0)return TS(e.bw());var i=t;n||(i=this.f(i,TS(e.bw())));for(var a=0;a<r;)i=this.f(i,K().P(e.bv(a))),a=1+a|0;return this.E(i,r)}),N.iZ=(function(e,t){for(var n=0,r=0,i=0,a=1,o=e.m();o.o();){var s=o.h(),c=K().P(s);n=n+c|0,r^=c,a=Math.imul(a,1|c),i=1+i|0}var l=t;return l=this.f(l,n),l=this.f(l,r),l=this.cO(l,a),this.E(l,i)}),N.pY=(function(e,t){var n=e.m(),r=t;if(!n.o())return this.E(r,0);var i=n.h();if(!n.o())return this.E(this.f(r,K().P(i)),1);var a=n.h(),o=K().P(i);r=this.f(r,o);for(var s=r,c=K().P(a),l=c-o|0,u=2;n.o();){r=this.f(r,c);var d=K().P(n.h());if(l!==(d-c|0)||l===0){for(r=this.f(r,d),u=1+u|0;n.o();)r=this.f(r,K().P(n.h())),u=1+u|0;return this.E(r,u)}c=d,u=1+u|0}return this.by(this.f(this.f(s,l),c))}),N.m8=(function(e,t){var n=t,r=Du().bU(e);switch(r){case 0:return this.E(n,0);case 1:return this.E(this.f(n,K().P(G().dW(e,0))),1);default:var i=K().P(G().dW(e,0));n=this.f(n,i);for(var a=n,o=K().P(G().dW(e,1)),s=o-i|0,c=2;c<r;){n=this.f(n,o);var l=K().P(G().dW(e,c));if(s!==(l-o|0)||s===0){for(n=this.f(n,l),c=1+c|0;c<r;)n=this.f(n,K().P(G().dW(e,c))),c=1+c|0;return this.E(n,r)}o=l,c=1+c|0}return this.by(this.f(this.f(a,s),o))}}),N.q3=(function(e,t,n,r){return this.by(this.f(this.f(this.f(r,e),t),n))}),N.pl=(function(e,t){var n=t,r=e.u();switch(r){case 0:return this.E(n,0);case 1:return this.E(this.f(n,K().P(e.v(0))),1);default:var i=K().P(e.v(0));n=this.f(n,i);for(var a=n,o=K().P(e.v(1)),s=o-i|0,c=2;c<r;){n=this.f(n,o);var l=K().P(e.v(c));if(s!==(l-o|0)||s===0){for(n=this.f(n,l),c=1+c|0;c<r;)n=this.f(n,K().P(e.v(c))),c=1+c|0;return this.E(n,r)}o=l,c=1+c|0}return this.by(this.f(this.f(a,s),o))}}),N.pw=(function(e,t){for(var n=0,r=t,i=0,a=0,o=0,s=0,c=e;!c.c();){var l=c.z(),u=c.w(),d=K().P(l);switch(r=this.f(r,d),i){case 0:s=d,i=1;break;case 1:a=d-o|0,i=2;break;case 2:(a!==(d-o|0)||a===0)&&(i=3);break}o=d,n=1+n|0,c=u}return i===2?this.q3(s,a,o,t):this.E(r,n)}),N.mh=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.E(n,0);case 1:return this.E(this.f(n,e.a[0]?1231:1237),1);default:var i=e.a[0]?1231:1237;n=this.f(n,i);for(var a=n,o=e.a[1]?1231:1237,s=o-i|0,c=2;c<r;){n=this.f(n,o);var l=e.a[c]?1231:1237;if(s!==(l-o|0)||s===0){for(n=this.f(n,l),c=1+c|0;c<r;)n=this.f(n,e.a[c]?1231:1237),c=1+c|0;return this.E(n,r)}o=l,c=1+c|0}return this.by(this.f(this.f(a,s),o))}}),N.m9=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.E(n,0);case 1:return this.E(this.f(n,e.a[0]),1);default:var i=e.a[0];n=this.f(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.f(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.f(n,l),c=1+c|0;c<r;)n=this.f(n,e.a[c]),c=1+c|0;return this.E(n,r)}o=l,c=1+c|0}return this.by(this.f(this.f(a,s),o))}}),N.ma=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.E(n,0);case 1:return this.E(this.f(n,e.a[0]),1);default:var i=e.a[0];n=this.f(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.f(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.f(n,l),c=1+c|0;c<r;)n=this.f(n,e.a[c]),c=1+c|0;return this.E(n,r)}o=l,c=1+c|0}return this.by(this.f(this.f(a,s),o))}}),N.mb=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.E(n,0);case 1:return this.E(this.f(n,K().c6(e.a[0])),1);default:var i=K().c6(e.a[0]);n=this.f(n,i);for(var a=n,o=K().c6(e.a[1]),s=o-i|0,c=2;c<r;){n=this.f(n,o);var l=K().c6(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.f(n,l),c=1+c|0;c<r;)n=this.f(n,K().c6(e.a[c])),c=1+c|0;return this.E(n,r)}o=l,c=1+c|0}return this.by(this.f(this.f(a,s),o))}}),N.mc=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.E(n,0);case 1:return this.E(this.f(n,K().c6(e.a[0])),1);default:var i=K().c6(e.a[0]);n=this.f(n,i);for(var a=n,o=K().c6(e.a[1]),s=o-i|0,c=2;c<r;){n=this.f(n,o);var l=K().c6(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.f(n,l),c=1+c|0;c<r;)n=this.f(n,K().c6(e.a[c])),c=1+c|0;return this.E(n,r)}o=l,c=1+c|0}return this.by(this.f(this.f(a,s),o))}}),N.md=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.E(n,0);case 1:return this.E(this.f(n,e.a[0]),1);default:var i=e.a[0];n=this.f(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.f(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.f(n,l),c=1+c|0;c<r;)n=this.f(n,e.a[c]),c=1+c|0;return this.E(n,r)}o=l,c=1+c|0}return this.by(this.f(this.f(a,s),o))}}),N.me=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.E(n,0);case 1:var i=n,a=e.a[0];return this.E(this.f(i,K().ev(new V(a.p,a.t))),1);default:var o=e.a[0],s=K().ev(new V(o.p,o.t));n=this.f(n,s);for(var c=n,l=e.a[1],u=K().ev(new V(l.p,l.t)),d=u-s|0,f=2;f<r;){n=this.f(n,u);var p=e.a[f],m=K().ev(new V(p.p,p.t));if(d!==(m-u|0)||d===0){for(n=this.f(n,m),f=1+f|0;f<r;){var h=n,g=e.a[f];n=this.f(h,K().ev(new V(g.p,g.t))),f=1+f|0}return this.E(n,r)}u=m,f=1+f|0}return this.by(this.f(this.f(c,d),u))}}),N.mf=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.E(n,0);case 1:return this.E(this.f(n,e.a[0]),1);default:var i=e.a[0];n=this.f(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.f(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.f(n,l),c=1+c|0;c<r;)n=this.f(n,e.a[c]),c=1+c|0;return this.E(n,r)}o=l,c=1+c|0}return this.by(this.f(this.f(a,s),o))}}),N.mg=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.E(n,0);case 1:return this.E(this.f(n,0),1);default:n=this.f(n,0);for(var i=n,a=0,o=a,s=2;s<r;){if(n=this.f(n,a),o!==(-a|0)||o===0){for(n=this.f(n,0),s=1+s|0;s<r;)n=this.f(n,0),s=1+s|0;return this.E(n,r)}a=0,s=1+s|0}return this.by(this.f(this.f(i,o),a))}});function Af(e){this.e7=null,this.jk=null,this.gJ=!1,this.jk=e,ss(this),this.gJ=!1}N=Af.prototype=new P,N.constructor=Af;function jf(){}jf.prototype=N,N.q0=(function(e){this.gJ?(ds(e),this.jk.a4()):us(this,e)}),N.pt=(function(){cs(this),this.gJ=!0}),new I().i(Af,`com.raquo.airstream.ownership.OneTimeOwner`,{cE:1,cF:1});function Mf(){}N=Mf.prototype=new P,N.constructor=Mf;function Nf(){}Nf.prototype=N,N.oF=(function(e){return e!==null}),N.oK=(function(e){return e?``:null}),N.fm=(function(e){return this.oF(e)}),N.fo=(function(e){return this.oK(!!e)}),new I().i(Mf,`com.raquo.laminar.codecs.package$$anon$1`,{d3:1,ar:1});function Pf(e){if(e===null)throw new sy}N=Pf.prototype=new P,N.constructor=Pf;function Ff(){}Ff.prototype=N,N.fo=(function(e){return e}),N.fm=(function(e){return e}),new I().i(Pf,`com.raquo.laminar.codecs.package$$anon$2`,{d4:1,ar:1});function If(e,t,n,r){this.k2=null,this.k4=null,this.k3=null,this.h4=null,this.k2=t,this.k4=n,this.k3=r,this.h4=new Rf(r)}N=If.prototype=new Mc,N.constructor=If;function Lf(){}Lf.prototype=N,N.lQ=(function(e){return new Zm(this,(Z().i.nV(),wc().n0(e,this.k3)))}),new I().i(If,`com.raquo.laminar.keys.CompositeKey`,{dn:1,ad:1});function Rf(e){this.h5=null,this.h5=e}N=Rf.prototype=new P,N.constructor=Rf;function zf(){}zf.prototype=N,N.mr=(function(e){return wc().n0(e,this.h5)}),N.mv=(function(e){return ld(e,``,this.h5,``)}),N.fm=(function(e){return this.mr(e)}),N.fo=(function(e){return this.mv(e)}),new I().i(Rf,`com.raquo.laminar.keys.CompositeKey$CompositeCodec`,{dq:1,ar:1});function Bf(e){if(e===null)throw new sy}N=Bf.prototype=new P,N.constructor=Bf;function Vf(){}Vf.prototype=N,new I().i(Bf,`com.raquo.laminar.keys.CompositeKey$CompositeValueMappers$StringValueMapper$`,{ds:1,dr:1});function Hf(e){this.fR=null,this.fR=e}N=Hf.prototype=new Mc,N.constructor=Hf;function Uf(){}Uf.prototype=N;var Wf=new I().i(Hf,`com.raquo.laminar.keys.EventProp`,{dv:1,ad:1});function Gf(e,t,n){return e.e9=t,e.fS=n,e}function Kf(){this.e9=null,this.fS=null}N=Kf.prototype=new Mc,N.constructor=Kf;function qf(){}qf.prototype=N,N.J=(function(e){return new nh(this,e,new hv(((e,t,n)=>{Ms().iX(e,t,n)})))}),N.lR=(function(e){return new ih(this,e.gw(),new hv(((e,t,n)=>{Ms().iX(e,this,t)})))}),new I().i(Kf,`com.raquo.laminar.keys.HtmlAttr`,{b9:1,ad:1});function Jf(e,t){this.dD=null,this.dD=e}N=Jf.prototype=new Mc,N.constructor=Jf;function Yf(){}Yf.prototype=N,new I().i(Jf,`com.raquo.laminar.keys.HtmlProp`,{ba:1,ad:1});function Xf(e,t,n){this.h7=null,this.h6=null,this.fT=null,this.fU=null,this.h7=e,this.h6=t;var r=n.c()?NS():new PS(n.S()+`:`+e);this.fT=r.c()?e:r.S(),this.fU=n.c()?NS():new PS(Ic().pG(n.S()))}N=Xf.prototype=new Mc,N.constructor=Xf;function Zf(){}Zf.prototype=N,new I().i(Xf,`com.raquo.laminar.keys.SvgAttr`,{dw:1,ad:1});function Qf(){}N=Qf.prototype=new P,N.constructor=Qf;function $f(){}$f.prototype=N,N.b8=(function(e){}),new I().i(Qf,`com.raquo.laminar.modifiers.Modifier$$anon$1`,{dG:1,Q:1});function ep(e,t){if(this.kd=null,this.kd=e,t===null)throw new sy}N=ep.prototype=new P,N.constructor=ep;function tp(){}tp.prototype=N,N.b8=(function(e){var t=Bo(),n=(()=>{this.kd.d(e)});if(Bo(),t.b0)n();else{t.b0=!0;try{n()}finally{t.b0=!1,Io(t)}}}),new I().i(ep,`com.raquo.laminar.modifiers.Modifier$$anon$2`,{dH:1,Q:1});function np(){}N=np.prototype=new P,N.constructor=np;function rp(){}rp.prototype=N,new I().i(np,`com.raquo.laminar.modifiers.RenderableNode$$anon$1`,{dK:1,dI:1});function ip(){}N=ip.prototype=new P,N.constructor=ip;function ap(){}ap.prototype=N,new I().i(ip,`com.raquo.laminar.modifiers.RenderableSeq$collectionSeqRenderable$`,{dM:1,dL:1});var op;function sp(){return op||=new ip,op}function cp(e,t){if(this.ke=null,this.ke=e,t===null)throw new sy}N=cp.prototype=new P,N.constructor=cp;function lp(){}lp.prototype=N,N.ih=(function(e){return this.ke.d(e)}),new I().i(cp,`com.raquo.laminar.modifiers.RenderableText$$anon$1`,{dP:1,dN:1});function up(e){e.mn(new Qo(new uv((()=>{throw Mh(new Nh,`Attempting to use owner of unmounted element: `+ld(Ms().oE(e.b9(),(Ms(),$())),``,` > `,``))}))))}function dp(e,t,n){return e.hj=t,e}function fp(){this.hj=null}N=fp.prototype=new P,N.constructor=fp;function pp(){}pp.prototype=N,N.iL=(function(){return this.hj}),N.gj=(function(e){var t=this.om();return e.bJ(new Q((e=>{e.b8(t)}))),t}),N.om=(function(){return new dS(this,Ms().oA(this))}),new I().i(fp,`com.raquo.laminar.tags.HtmlTag`,{be:1,aC:1});function mp(e,t){this.km=null,this.km=e}N=mp.prototype=new P,N.constructor=mp;function hp(){}hp.prototype=N,new I().i(mp,`com.raquo.laminar.tags.SvgTag`,{e0:1,aC:1});function gp(){}N=gp.prototype=new P,N.constructor=gp;function _p(){}_p.prototype=N,N.fo=(function(e){return e}),N.fm=(function(e){return e}),new I().i(gp,`io.github.nguyenyou.webawesome.laminar.UnionAsStringCodec$$anon$1`,{e9:1,ar:1});function vp(e,t){return e.dJ=t,e.f8(),e}function yp(){this.dJ=null,this.dG=null,this.dH=!1,this.dI=null,this.dK=!1}N=yp.prototype=new P,N.constructor=yp;function bp(){}bp.prototype=N,N.qt=(function(){return this.dH||=(this.dG=Z().i.qu(),!0),this.dG}),N.qB=(function(){return this.dK||=(this.dI=new ch(this.dJ,_l().nT(),(_l(),void 0)),!0),this.dI}),N.k=(function(e,t){var n=this.qB().gj(G().b(new(R.r()).C([])));return e.bJ(new Q((e=>{e.d(this).b8(n)}))),t.bJ(new Q((e=>{e.b8(n)}))),n});function xp(e){return(32&e.fW)<<24>>24||(e.hk=new eo(new Int32Array([1632,1776,1984,2406,2534,2662,2790,2918,3046,3174,3302,3430,3558,3664,3792,3872,4160,4240,6112,6160,6470,6608,6784,6800,6992,7088,7232,7248,42528,43216,43264,43472,43504,43600,44016,65296,66720,68912,69734,69872,69942,70096,70384,70736,70864,71248,71360,71472,71904,72016,72784,73040,73120,73552,92768,92864,93008,120782,120792,120802,120812,120822,123200,123632,124144,125264,130032])),e.fW=(32|e.fW)<<24>>24),e.hk}function Sp(e){return(32&e.fW)<<24>>24?e.hk:xp(e)}function Cp(){this.hk=null,this.fW=0}N=Cp.prototype=new P,N.constructor=Cp;function wp(){}wp.prototype=N,N.qF=(function(e){if(!(e>=0&&e<=1114111))throw $v(new ey);return String.fromCodePoint(e)}),N.oG=(function(e,t){if(e<256)var n=e>=48&&e<=57?-48+e|0:e>=65&&e<=90?-55+e|0:e>=97&&e<=122?-87+e|0:-1;else if(e>=65313&&e<=65338)var n=-65303+e|0;else if(e>=65345&&e<=65370)var n=-65335+e|0;else{var r=B().ok(Sp(this),e),i=r<0?-2-r|0:r;if(i<0)var n=-1;else var a=e-Sp(this).a[i]|0,n=a>9?-1:a}return n<t?n:-1}),new I().i(Cp,`java.lang.Character$`,{eh:1,a:1});var Tp;function Ep(){return Tp||=new Cp,Tp}function Dp(e){throw new wS(`For input string: "`+e+`"`)}function Op(){}N=Op.prototype=new P,N.constructor=Op;function kp(){}kp.prototype=N,N.na=(function(e,t){var n=e===null?0:e.length;(n===0||t<2||t>36)&&Dp(e);var r=e.charCodeAt(0),i=r===45,a=i?2147483648:2147483647,o=i||r===43?1:0;o>=e.length&&Dp(e);for(var s=0;o!==n;){var c=Ep().oG(e.charCodeAt(o),t);s=s*t+c,(c===-1||s>a)&&Dp(e),o=1+o|0}return i?-s|0:s|0}),N.ds=(function(e){var t=e-(1431655765&e>>1)|0,n=(858993459&t)+(858993459&t>>2)|0;return Math.imul(16843009,252645135&(n+(n>>4)|0))>>24}),new I().i(Op,`java.lang.Integer$`,{en:1,a:1});var Ap;function jp(){return Ap||=new Op,Ap}function Mp(){}N=Mp.prototype=new P,N.constructor=Mp;function Np(){}Np.prototype=N;function Pp(e){return e instanceof Mp||typeof e==`number`||e instanceof V}function Fp(e,t,n,r,i){this.ec=null,this.eL=null,this.ed=null,this.ee=0,this.eb=0,this.ec=e,this.eL=t,this.ed=n,this.ee=r,this.eb=i}N=Fp.prototype=new P,N.constructor=Fp;function Ip(){}Ip.prototype=N,N.r=(function(e){return e instanceof Fp&&this.ed===e.ed&&this.ee===e.ee&&this.eb===e.eb&&this.ec===e.ec&&this.eL===e.eL}),N.C=(function(){var e=``;return this.ec!==`<jscode>`&&(e=``+e+this.ec+`.`),e=``+e+this.eL,this.ed===null?e+=`(Unknown Source)`:(e=e+`(`+this.ed,this.ee>=0&&(e=e+`:`+this.ee,this.eb>=0&&(e=e+`:`+this.eb)),e+=`)`),e}),N.y=(function(){return TS(this.ec)^TS(this.eL)^TS(this.ed)^this.ee^this.eb});var Lp=new I().i(Fp,`java.lang.StackTraceElement`,{bp:1,a:1});function Rp(){}N=Rp.prototype=new P,N.constructor=Rp;function zp(){}zp.prototype=N,N.pH=(function(e,t,n){var r=t+n|0;if(t<0||r<t||r>e.a.length)throw new kS;for(var i=``,a=t;a!==r;)i+=``+Fa(e.a[a]),a=1+a|0;return i}),new I().i(Rp,`java.lang.String$`,{ez:1,a:1});var Bp;function Vp(){return Bp||=new Rp,Bp}function Hp(e,t,n,r,i){return e.kY=t,e.kZ=i,i&&e.oY(),e}var Up=class extends Error{constructor(){super(),this.kY=null,this.kZ=!1,this.kX=null,this.fY=null}mO(e){return this}ft(){return this.kY}oY(){var e=this instanceof mw?this.aS:this;return this.kX=Object.prototype.toString.call(e)===`[object Error]`?e:Error.captureStackTrace===void 0||Object.isSealed(this)?Error():(Error.captureStackTrace(this),this),this}pe(){return this.fY===null&&(this.kZ?this.fY=tu().oX(this.kX):this.fY=new(Lp.r()).C(0)),this.fY}C(){var e=Oa(this),t=this.ft();return t===null?e:e+`: `+t}y(){return Ja.prototype.y.call(this)}r(e){return Ja.prototype.r.call(this,e)}get message(){var e=this.ft();return e===null?``:e}get name(){return Oa(this)}toString(){return this.C()}};function Wp(){this.ht=null,Kp=this,this.ht=new fy}N=Wp.prototype=new P,N.constructor=Wp;function Gp(){}Gp.prototype=N,new I().i(Wp,`scala.$less$colon$less$`,{eR:1,a:1});var Kp;function qp(){return Kp||=new Wp,Kp}function Jp(e,t,n,r,i,a){for(var o=n,s=i,c=n+a|0;o<c;)G().ig(r,s,G().dW(t,o)),o=1+o|0,s=1+s|0}function Yp(){}N=Yp.prototype=new P,N.constructor=Yp;function Xp(){}Xp.prototype=N,N.mF=(function(e,t){var n=e.B();if(n>-1){for(var r=t.bh(n),i=e.m(),a=0;a<n;)G().ig(r,a,i.h()),a=1+a|0;return r}else{var o=null,s=t.aI(),c=s===oo.l();o=[];for(var l=e.m();l.o();){var u=l.h(),d=c?Ga(u):u===null?s.Q.z:u;o.push(d)}return(s===io.l()?Su.l():s===ef.l()||s===Rg.l()?L.l():s).Q.r().w(o)}}),N.fk=(function(e,t,n,r,i){var a=Da(e);a.Q.Z&&Da(n).Q.R(a.Q)?e.x(t,n,r,i):Jp(this,e,t,n,r,i)}),N.mD=(function(e,t){if(e===t)return!0;if(e.a.length!==t.a.length)return!1;for(var n=e.a.length,r=0;r<n;){if(!W().s(e.a[r],t.a[r]))return!1;r=1+r|0}return!0}),new I().i(Yp,`scala.Array$`,{eT:1,a:1});var Zp;function Qp(){return Zp||=new Yp,Zp}function $p(){this.l1=null,tm=this,this.l1=new Sf(lu().kV)}N=$p.prototype=new P,N.constructor=$p;function em(){}em.prototype=N,N.pZ=(function(){return this.l1.i5}),new I().i($p,`scala.Console$`,{eV:1,gY:1});var tm;function nm(){return tm||=new $p,tm}function rm(){}N=rm.prototype=new Ku,N.constructor=rm;function im(){}im.prototype=N,N.qP=(function(e){return e===null?null:e.a.length===0?kC().ly:new yO(e)});function am(){}N=am.prototype=new P,N.constructor=am;function om(){}om.prototype=N,N.dV=(function(e){return e===null?NS():new PS(e)}),new I().i(am,`scala.Option$`,{f1:1,a:1});var sm;function cm(){return sm||=new am,sm}function lm(e,t,n){return e.c8(t)?e.d(t):n.d(t)}function um(){}N=um.prototype=new Fd,N.constructor=um;function dm(){}dm.prototype=N;function fm(e,t){if(t===e)e.aX(bx().fq(t));else for(var n=t.m();n.o();)e.aT(n.h());return e}function pm(){this.nI=null,this.nR=null,this.nJ=null,this.nM=null,this.nN=null,this.nL=null,this.nK=null,this.nH=null,this.nS=null,this.nF=null,this.nQ=null,this.nG=null,this.nO=null,this.nP=null,hm=this,this.nI=oT(),this.nR=HT(),this.nJ=uT(),this.nM=ST(),this.nN=ET(),this.nL=vT(),this.nK=mT(),this.nH=nT(),this.nS=KT(),this.nF=Qw(),this.nQ=RT(),this.nG=RT(),this.nO=AT(),this.nP=PT()}N=pm.prototype=new P,N.constructor=pm;function mm(){}mm.prototype=N,N.m4=(function(e){return e===so.l()?oT():e===co.l()?HT():e===oo.l()?uT():e===lo.l()?ST():e===uo.l()?ET():e===fo.l()?vT():e===po.l()?mT():e===ao.l()?nT():e===io.l()?KT():e===L.l()?RT():e===Rg.l()?AT():e===ef.l()?PT():new IC(e)}),new I().i(pm,`scala.reflect.ClassTag$`,{h0:1,a:1});var hm;function gm(){return hm||=new pm,hm}function _m(){}N=_m.prototype=new P,N.constructor=_m;function vm(){}vm.prototype=N,N.C=(function(){return`<function0>`});function ym(){}N=ym.prototype=new P,N.constructor=ym;function bm(){}bm.prototype=N,N.C=(function(){return`<function1>`});function xm(){}N=xm.prototype=new P,N.constructor=xm;function Sm(){}Sm.prototype=N,N.C=(function(){return`<function2>`});function Cm(){}N=Cm.prototype=new P,N.constructor=Cm;function wm(){}wm.prototype=N,N.C=(function(){return`<function3>`});function Tm(e){this.gb=!1,this.gb=e}N=Tm.prototype=new P,N.constructor=Tm;function Em(){}Em.prototype=N,N.C=(function(){return``+this.gb}),new I().i(Tm,`scala.runtime.BooleanRef`,{hs:1,a:1});function Dm(e){this.dT=0,this.dT=e}N=Dm.prototype=new P,N.constructor=Dm;function Om(){}Om.prototype=N,N.C=(function(){return``+this.dT}),new I().i(Dm,`scala.runtime.IntRef`,{hu:1,a:1});function km(e){this.en=null,this.en=e}N=km.prototype=new P,N.constructor=km;function Am(){}Am.prototype=N,N.C=(function(){return``+this.en}),new I().i(km,`scala.runtime.ObjectRef`,{hx:1,a:1});function jm(){this.ai=0,this.dq=0,this.lO=0,this.i6=0,Nm=this,this.ai=TS(`Seq`),this.dq=TS(`Map`),this.lO=TS(`Set`),this.i6=this.iZ($(),this.dq)}N=jm.prototype=new kf,N.constructor=jm;function Mm(){}Mm.prototype=N,N.cd=(function(e,t){return this.nm(K().P(e),K().P(t),-889275714)}),N.iW=(function(e){return yE(e)?this.pl(e,this.ai):e instanceof tO?this.pw(e,this.ai):this.pY(e,this.ai)}),N.pC=(function(e){if(e.c())return this.i6;var t=new Pm,n=this.dq;return e.dX(t),n=this.f(n,t.gd),n=this.f(n,t.ge),n=this.cO(n,t.gf),this.E(n,t.gg)}),new I().i(jm,`scala.util.hashing.MurmurHash3$`,{hY:1,hX:1});var Nm;function q(){return Nm||=new jm,Nm}function Pm(){this.gd=0,this.ge=0,this.gg=0,this.gf=0,this.gd=0,this.ge=0,this.gg=0,this.gf=1}N=Pm.prototype=new P,N.constructor=Pm;function Fm(){}Fm.prototype=N,N.C=(function(){return`<function2>`}),N.og=(function(e,t){var n=q().cd(e,t);this.gd=this.gd+n|0,this.ge^=n,this.gf=Math.imul(this.gf,1|n),this.gg=1+this.gg|0}),N.cG=(function(e,t){this.og(e,t)}),new I().i(Pm,`scala.util.hashing.MurmurHash3$accum$1`,{hZ:1,aG:1});var Im=class extends Up{};function Lm(){this.gz=null,this.j2=null,this.j3=null,zm=this,this.gz=bx().m6(G().b(new(H.r()).C([]))),this.j2=new Q((e=>{try{console.error(this.et(e)+`
`+this.pd(e,`
`))}catch(e){var t=e instanceof Up?e:new mw(e);console.error(`Error in AirstreamError.consoleErrorCallback:`),console.error(t)}})),this.j3=new Q((e=>{console.warn(`Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.`);var t=e;throw t instanceof mw?t.aS:t})),this.q4(this.j2)}N=Lm.prototype=new P,N.constructor=Lm;function Rm(){}Rm.prototype=N,N.et=(function(e){try{var t=e.ft()}catch{var t=`(Unable to get the message for this error - exception occurred in its getMessage)`}return Da(e).iz()+`: `+t}),N.pd=(function(e,t){try{return ld(zh().qP(e.pe()),``,t,``)}catch{return`(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)`}}),N.q4=(function(e){this.gz.aT(e)}),N.bX=(function(e){for(var t=this.gz.m();t.o();){var n=t.h();try{n.d(e)}catch(e){var r=e instanceof Up?e:new mw(e),i=this.j3;if(n===null?i===null:n.r(i))throw r instanceof mw?r.aS:r;console.warn(`Error processing an unhandled error callback:`),hf().qr(0,new uv((e=>(()=>{throw e instanceof mw?e.aS:e}))(r)))}}}),new I().i(Lm,`com.raquo.airstream.core.AirstreamError$`,{cq:1,gW:1,gX:1});var zm;function Bm(){return zm||=new Lm,zm}function Vm(e){e.gp(!0),e.iJ(void 0)}function Hm(e,t,n){return bv(e,bo().j1(t,Xu().eN,!0),n)}function Um(e,t){e.iE()?wv(e,t):Km(e).push(new uv((()=>{wv(e,t)})))}function Wm(e,t){e.iE()?Cv(e,t):Km(e).push(new uv((()=>{Cv(e,t)})))}function Gm(e){return Ov(e)>0}function Km(e){var t=e.iI();if(t===void 0){var n=ws().b4(G().b(new(Wu.r()).C([])));return e.iJ(n),n}else return t}var qm=new I().i(1,`com.raquo.airstream.core.Observer`,{ax:1,aq:1,ac:1});function J(e,t,n){return new u_(n.ih(t))}function Jm(e,t,n,r){return new ep(new Q((e=>{(Rs(),new Ns(t,null,null)).bJ(new Q((e=>(t=>{n.d(t).b8(e)}))(e)))})),Kc())}function Ym(e,t){if(this.k6=null,this.k6=e,t===null)throw new sy}N=Ym.prototype=new P,N.constructor=Ym;function Xm(){}Xm.prototype=N,N.b8=(function(e){this.fi(e)}),N.fi=(function(e){return this.k6.d(e)}),new I().i(Ym,`com.raquo.laminar.modifiers.Binder$$anon$1`,{dA:1,Q:1,aA:1});function Zm(e,t){this.k7=null,this.h9=null,this.k7=e,this.h9=t}N=Zm.prototype=new P,N.constructor=Zm;function Qm(){}Qm.prototype=N,N.b8=(function(e){this.h9.c()||Vv(e,this.k7,null,this.h9,$())}),new I().i(Zm,`com.raquo.laminar.modifiers.CompositeKeySetter`,{dB:1,Q:1,bb:1});function $m(e,t){this.ea=null,this.ha=null,this.hb=null,this.ea=e,this.ha=(n=>{var r=e.fO.d(n);r.c()||t.d(r.S())}),this.hb=(()=>{var e=null;e=this;var t={};if(e===null)throw new sy;return t.capture=e.ea.fQ,t.passive=e.ea.fP,t})()}N=$m.prototype=new P,N.constructor=$m;function eh(){}eh.prototype=N,N.b8=(function(e){this.ol(e,!1)}),N.ol=(function(e,t){if(Bv(e,this)===-1){var n=new Q((t=>(Ms().o1(e.bA,this),new fs(t.h8,new uv((()=>{var t=Bv(e,this);t!==-1&&(zv(e,t),Ms().q8(e.bA,this))})))))),r=t?sl().qH(e,n):os().ex(e.bK,new Q((t=>n.d(new Lc(e,t)))),!1);return Rv(e,this,t),r}else{var i=new Q((e=>void 0));return os().nj(e.bK,new Q((t=>{i.d(new Lc(e,t))})),!1)}}),N.C=(function(){return`EventListener(`+this.ea.e8.fR+`)`});var th=new I().i($m,`com.raquo.laminar.modifiers.EventListener`,{dC:1,Q:1,aA:1});function nh(e,t,n){this.k9=null,this.dE=null,this.k8=null,this.k9=e,this.dE=t,this.k8=n}N=nh.prototype=new P,N.constructor=nh;function rh(){}rh.prototype=N,N.b8=(function(e){this.k8.id(e,this.k9,this.dE)}),new I().i(nh,`com.raquo.laminar.modifiers.KeySetter`,{dD:1,Q:1,bb:1});function ih(e,t,n){this.ka=null,this.kc=null,this.kb=null,this.ka=e,this.kc=t,this.kb=n}N=ih.prototype=new P,N.constructor=ih;function ah(){}ah.prototype=N,N.b8=(function(e){this.fi(e)}),N.fi=(function(e){e.pT(this.ka);var t=this.kc,n=new Q((t=>{this.kb.id(e,t,this)}));return os().qv(e.bK,t,n)}),new I().i(ih,`com.raquo.laminar.modifiers.KeyUpdater`,{dE:1,Q:1,aA:1});function oh(e,t){if(this.hh=null,this.kh=null,this.ki=null,this.kh=t,up(this),e===null)throw Mh(new Nh,`Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load`);if(!Ms().pr(e,document))throw Mh(new Nh,`Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering`);this.ki=e,this.pF()}N=oh.prototype=new P,N.constructor=oh;function sh(){}sh.prototype=N,N.gm=(function(){return this.hh}),N.mn=(function(e){this.hh=e}),N.pF=(function(){return this.hh.lS(),rl().ep(this,this.kh,void 0)}),N.b9=(function(){return this.ki}),new I().i(oh,`com.raquo.laminar.nodes.RootNode`,{dV:1,as:1,bc:1});function ch(e,t,n){this.hj=null,this.kl=null,this.kk=null,this.kl=e,this.kk=n,dp(this,e,!1)}N=ch.prototype=new pp,N.constructor=ch;function lh(){}lh.prototype=N,N.iL=(function(){return this.kl}),N.oc=(function(){var e=this.kk;return e===void 0?void 0:e.map((e=>e.qQ.dD))}),new I().i(ch,`com.raquo.laminar.tags.CustomHtmlTag`,{bd:1,be:1,aC:1});function uh(){this.e9=null,this.fS=null,this.kn=null,this.kq=!1,this.ko=null,this.kp=!1,this.kr=null,this.ks=!1,this.kt=null,this.ku=!1,Gf(this,`selection`,new gp)}N=uh.prototype=new qf,N.constructor=uh;function dh(){}dh.prototype=N,N.pv=(function(){return this.kq||=(this.kn=ph().J(`leaf`),!0),this.kn}),N.mT=(function(){return this.kp||=(this.ko=ph().J(`leaf-multiple`),!0),this.ko}),N.mX=(function(){return this.ks||=(this.kr=ph().J(`multiple`),!0),this.kr}),N.ni=(function(){return this.ku||=(this.kt=ph().J(`single`),!0),this.kt}),new I().i(uh,`io.github.nguyenyou.webawesome.laminar.CommonKeys$TreeSelection$`,{e2:1,b9:1,ad:1});var fh;function ph(){return fh||=new uh,fh}function mh(){this.dJ=null,this.dG=null,this.dH=!1,this.dI=null,this.dK=!1,this.kv=null,this.kw=!1,this.kx=null,this.ky=!1,vp(this,`wa-icon`)}N=mh.prototype=new bp,N.constructor=mh;function hh(){}hh.prototype=N,N.cb=(function(){return this.kw||=(this.kv=(Z(),Gf(new Kf,`name`,Xs().cf)),!0),this.kv}),N.ce=(function(){return this.ky||=(this.kx=(Z(),Gf(new Kf,`variant`,Xs().cf)),!0),this.kx}),N.f8=(function(){return Lt}),new I().i(mh,`io.github.nguyenyou.webawesome.laminar.Icon$`,{e3:1,al:1,ak:1});var gh;function _h(){return gh||=new mh,gh}function vh(){this.dJ=null,this.dG=null,this.dH=!1,this.dI=null,this.dK=!1,this.kF=null,this.kG=!1,this.kH=null,this.kI=!1,vp(this,`wa-tree`)}N=vh.prototype=new bp,N.constructor=vh;function yh(){}yh.prototype=N,N.pW=(function(){return this.kG||=(this.kF=(Z(),new Hf(`wa-selection-change`)),!0),this.kF}),N.iV=(function(){return this.kI||=(this.kH=ph(),!0),this.kH}),N.f8=(function(){return wa}),new I().i(vh,`io.github.nguyenyou.webawesome.laminar.Tree$`,{e5:1,al:1,ak:1});var bh;function xh(){return bh||=new vh,bh}function Sh(){this.dJ=null,this.dG=null,this.dH=!1,this.dI=null,this.dK=!1,this.kN=null,this.kO=!1,this.kP=null,this.kQ=!1,vp(this,`wa-tree-item`)}N=Sh.prototype=new bp,N.constructor=Sh;function Ch(){}Ch.prototype=N,N.gn=(function(){return this.kO||=(this.kN=(Z(),Gf(new Kf,`expanded`,Xs().gU)),!0),this.kN}),N.ql=(function(){return this.kQ||=(this.kP=(Z(),Gf(new Kf,`selected`,Xs().gU)),!0),this.kP}),N.f8=(function(){return va}),new I().i(Sh,`io.github.nguyenyou.webawesome.laminar.TreeItem$`,{e7:1,al:1,ak:1});var wh;function Y(){return wh||=new Sh,wh}function Th(){this.dJ=null,this.dG=null,this.dH=!1,this.dI=null,this.dK=!1,this.kR=null,this.kS=!1,vp(this,`wa-option`)}N=Th.prototype=new bp,N.constructor=Th;function Eh(){}Eh.prototype=N,N.eA=(function(){return this.kS||=(this.kR=(Z(),Gf(new Kf,`value`,Xs().cf)),!0),this.kR}),N.f8=(function(){return $t}),new I().i(Th,`io.github.nguyenyou.webawesome.laminar.UOption$`,{e8:1,al:1,ak:1});var Dh;function Oh(){return Dh||=new Th,Dh}function kh(e){if(e.Q.Z)return e.Q.Q().iz()+`[]`;for(var t=e.Q.N,n=-1+t.length|0;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0;if(n>=0)var r=n,i=t.charCodeAt(r),a=i>=48&&i<=57;else var a=!1;if(a){for(n=-1+n|0;;){if(n>=0)var o=n,s=t.charCodeAt(o),c=s>=48&&s<=57;else var c=!1;if(c)n=-1+n|0;else break}for(;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0}for(;;){if(n>=0)var l=n,u=t.charCodeAt(l),d=u!==46&&u!==36;else var d=!1;if(d)n=-1+n|0;else break}var f=1+n|0;return t.substring(f)}function Ah(e){this.hl=null,this.Q=e}N=Ah.prototype=new P,N.constructor=Ah;function jh(){}jh.prototype=N,N.C=(function(){return(this.Q.Y?`interface `:this.Q.X?``:`class `)+this.Q.N}),N.iz=(function(){return this.hl===null&&(this.hl=kh(this)),this.hl}),new I().i(Ah,`java.lang.Class`,{ei:1,a:1,Z:1});function Mh(e,t){return Hp(e,t,null,!0,!0),e}var Nh=class extends Up{};new I().i(Nh,`java.lang.Exception`,{C:1,u:1,a:1});function Ph(){}N=Ph.prototype=new P,N.constructor=Ph;function Fh(){}Fh.prototype=N;function Ih(){this.nE=null,Rh=this,this.nE=Tg()}N=Ih.prototype=new im,N.constructor=Ih;function Lh(){}Lh.prototype=N,N.qf=(function(e){if(!e)throw Qv(new ey,`requirement failed`)}),new I().i(Ih,`scala.Predef$`,{f4:1,eX:1,eY:1});var Rh;function zh(){return Rh||=new Ih,Rh}function Bh(e,t){switch(t){case 0:return e.b7();case 1:return e.b3();default:throw ny(new ry,t+` is out of bounds (min 0, max 1)`)}}function Vh(e,t){return e.eQ=t,e}function Hh(){this.eQ=null}N=Hh.prototype=new P,N.constructor=Hh;function Uh(){}Uh.prototype=N,N.as=(function(e){return this.eQ.ir(e,Qw())}),N.aU=(function(){return this.eQ.gr(Qw())}),N.cH=(function(e){return this.eQ.ir(e,Qw())});function Wh(e,t){return e.g1=t,e}function Gh(){this.g1=null}N=Gh.prototype=new P,N.constructor=Gh;function Kh(){}Kh.prototype=N,N.as=(function(e){return this.g1.as(e)}),N.aU=(function(){return this.g1.aU()});function qh(e,t){if(t<0)return 1;var n=e.B();if(n>=0)return n===t?0:n<t?-1:1;for(var r=0,i=e.m();i.o();){if(r===t)return 1;i.h(),r=1+r|0}return r-t|0}function Jh(e,t){return new zy(e).gl(t)}function Yh(e,t,n){var r=t>0?t:0,i=n<0?-1:n<=r?0:n-r|0;return i===0?eg().K:new Uy(e,r,i)}function Xh(e,t){for(var n=t.m();e.o()&&n.o();)if(!W().s(e.h(),n.h()))return!1;return e.o()===n.o()}function Zh(){this.K=null,$h=this,this.K=new ky}N=Zh.prototype=new P,N.constructor=Zh;function Qh(){}Qh.prototype=N,N.aU=(function(){return new GS}),N.as=(function(e){return e.m()}),new I().i(Zh,`scala.collection.Iterator$`,{fo:1,E:1,a:1});var $h;function eg(){return $h||=new Zh,$h}function tg(e,t){return e.hH=t,e}function ng(){this.hH=null}N=ng.prototype=new P,N.constructor=ng;function rg(){}rg.prototype=N,N.as=(function(e){return this.hH.as(e)});function ig(){}N=ig.prototype=new P,N.constructor=ig;function ag(){}ag.prototype=N,N.mG=(function(e){return aw(e)?e:Oy(e)?new ZT(new jg((e=>(()=>e.m()))(e))):TE(new EE,iv().it(e))}),N.aU=(function(){return new av((mx(),new hx),new X((e=>sg().mG(e))))}),N.as=(function(e){return this.mG(e)}),new I().i(ig,`scala.collection.View$`,{fD:1,E:1,a:1});var og;function sg(){return og||=new ig,og}function cg(e,t,n,r,i,a){this.X=0,this.af=0,this.aj=null,this.bl=null,this.aK=0,this.ba=0,this.X=e,this.af=t,this.aj=n,this.bl=r,this.aK=i,this.ba=a}N=cg.prototype=new dm,N.constructor=cg;function lg(){}lg.prototype=N,N.aJ=(function(){return this.aK}),N.du=(function(){return this.ba}),N.dv=(function(e){return this.aj.a[e<<1]}),N.cN=(function(e){return this.aj.a[1+(e<<1)|0]}),N.mL=(function(e){return new Cy(this.aj.a[e<<1],this.aj.a[1+(e<<1)|0])}),N.fs=(function(e){return this.bl.a[e]}),N.cL=(function(e){return this.aj.a[(-1+this.aj.a.length|0)-e|0]}),N.ic=(function(e,t,n,r){var i=Bd().dZ(n,r),a=Bd().dt(i);if((this.X&a)!==0){var o=Bd().cn(this.X,i,a);if(W().s(e,this.dv(o)))return this.cN(o);throw new dy(`key not found: `+e)}else if((this.af&a)!==0)return this.cL(Bd().cn(this.af,i,a)).ic(e,t,n,5+r|0);else throw new dy(`key not found: `+e)}),N.ix=(function(e,t,n,r,i){var a=Bd().dZ(n,r),o=Bd().dt(a);if((this.X&o)!==0){var s=Bd().cn(this.X,a,o);return W().s(e,this.dv(s))?this.cN(s):i.a4()}else return(this.af&o)===0?i.a4():this.cL(Bd().cn(this.af,a,o)).ix(e,t,n,5+r|0,i)}),N.ij=(function(e,t,n,r){var i=Bd().dZ(n,r),a=Bd().dt(i);if((this.X&a)!==0){var o=Bd().cn(this.X,i,a);return this.bl.a[o]===t&&W().s(e,this.dv(o))}else return(this.af&a)!==0&&this.cL(Bd().cn(this.af,i,a)).ij(e,t,n,5+r|0)}),N.nn=(function(e,t,n,r,i,a){var o=Bd().dZ(r,i),s=Bd().dt(o);if((this.X&s)!==0){var c=Bd().cn(this.X,o,s),l=this.dv(c),u=this.fs(c);if(u===n&&W().s(l,e))if(a){var d=this.cN(c);return Object.is(l,e)&&Object.is(d,t)?this:this.oy(s,e,t)}else return this;else{var f=this.cN(c),p=id().c7(u);return this.ow(s,p,this.iK(l,f,u,p,e,t,n,r,5+i|0))}}else if((this.af&s)!==0){var m=Bd().cn(this.af,o,s),h=this.cL(m),g=h.no(e,t,n,r,5+i|0,a);return g===h?this:this.ox(s,h,g)}else return this.ov(s,e,n,r,t)}),N.iK=(function(e,t,n,r,i,a,o,s,c){if(c>=32)return new ug(n,r,tx().iu(new fD([new Cy(e,t),new Cy(i,a)])));var l=Bd().dZ(r,c),u=Bd().dZ(s,c),d=r+s|0;if(l!==u){var f=Bd().dt(l)|Bd().dt(u);return l<u?new cg(f,0,new F([e,t,i,a]),new eo(new Int32Array([n,o])),2,d):new cg(f,0,new F([i,a,e,t]),new eo(new Int32Array([o,n])),2,d)}else{var p=Bd().dt(l),m=this.iK(e,t,n,r,i,a,o,s,5+c|0);return new cg(0,p,new F([m]),Uu().hu,m.aJ(),m.du())}}),N.iA=(function(){return this.af!==0}),N.iN=(function(){return jp().ds(this.af)}),N.go=(function(){return this.X!==0}),N.iR=(function(){return jp().ds(this.X)}),N.fl=(function(e){return jp().ds(this.X&(-1+e|0))}),N.iO=(function(e){return jp().ds(this.af&(-1+e|0))}),N.oy=(function(e,t,n){var r=this.fl(e)<<1,i=this.aj,a=new F(i.a.length),o=i.a.length;return i.x(0,a,0,o),a.a[1+r|0]=n,new cg(this.X,this.af,a,this.bl,this.aK,this.ba)}),N.ox=(function(e,t,n){var r=(-1+this.aj.a.length|0)-this.iO(e)|0,i=this.aj,a=new F(i.a.length),o=i.a.length;return i.x(0,a,0,o),a.a[r]=n,new cg(this.X,this.af,a,this.bl,(this.aK-t.aJ()|0)+n.aJ()|0,(this.ba-t.du()|0)+n.du()|0)}),N.ov=(function(e,t,n,r,i){var a=this.fl(e),o=a<<1,s=this.aj,c=new F(2+s.a.length|0);s.x(0,c,0,o),c.a[o]=t,c.a[1+o|0]=i;var l=2+o|0,u=s.a.length-o|0;s.x(o,c,l,u);var d=this.pn(this.bl,a,n);return new cg(this.X|e,this.af,c,d,1+this.aK|0,this.ba+r|0)}),N.pE=(function(e,t,n){var r=this.fl(e),i=r<<1,a=(-2+this.aj.a.length|0)-this.iO(e)|0,o=this.aj,s=new F(-1+o.a.length|0);o.x(0,s,0,i);var c=2+i|0,l=a-i|0;o.x(c,s,i,l),s.a[a]=n;var u=2+a|0,d=1+a|0,f=-2+(o.a.length-a|0)|0;o.x(u,s,d,f);var p=this.nb(this.bl,r);return this.X^=e,this.af|=e,this.aj=s,this.bl=p,this.aK=(-1+this.aK|0)+n.aJ()|0,this.ba=(this.ba-t|0)+n.du()|0,this}),N.ow=(function(e,t,n){var r=this.fl(e),i=r<<1,a=(-2+this.aj.a.length|0)-this.iO(e)|0,o=this.aj,s=new F(-1+o.a.length|0);o.x(0,s,0,i);var c=2+i|0,l=a-i|0;o.x(c,s,i,l),s.a[a]=n;var u=2+a|0,d=1+a|0,f=-2+(o.a.length-a|0)|0;o.x(u,s,d,f);var p=this.nb(this.bl,r);return new cg(this.X^e,this.af|e,s,p,(-1+this.aK|0)+n.aJ()|0,(this.ba-t|0)+n.du()|0)}),N.dX=(function(e){for(var t=jp().ds(this.X),n=0;n<t;)e.cG(this.dv(n),this.cN(n)),n=1+n|0;for(var r=jp().ds(this.af),i=0;i<r;)this.cL(i).dX(e),i=1+i|0}),N.r=(function(e){if(e instanceof cg){if(this===e)return!0;if(this.ba===e.ba&&this.af===e.af&&this.X===e.X&&this.aK===e.aK&&B().im(this.bl,e.bl)){var t=this.aj,n=e.aj,r=this.aj.a.length;if(t===n)return!0;for(var i=!0,a=0;i&&a<r;)i=W().s(t.a[a],n.a[a]),a=1+a|0;return i}else return!1}else return!1}),N.y=(function(){throw new ly(`Trie nodes do not support hashing.`)}),N.mo=(function(){for(var e=this.aj.g(),t=e.a.length,n=jp().ds(this.X)<<1;n<t;)e.a[n]=e.a[n].mp(),n=1+n|0;return new cg(this.X,this.af,e,this.bl.g(),this.aK,this.ba)}),N.mp=(function(){return this.mo()}),N.no=(function(e,t,n,r,i,a){return this.nn(e,t,n,r,i,a)}),N.iw=(function(e){return this.cL(e)}),new I().i(cg,`scala.collection.immutable.BitmapIndexedMapNode`,{bP:1,bZ:1,aP:1});function ug(e,t,n){this.hM=0,this.d3=0,this.ag=null,this.hM=e,this.d3=t,this.ag=n,zh().qf(this.ag.u()>=2)}N=ug.prototype=new dm,N.constructor=ug;function dg(){}dg.prototype=N,N.eu=(function(e){for(var t=this.ag.m(),n=0;t.o();){if(W().s(t.h().b7(),e))return n;n=1+n|0}return-1}),N.aJ=(function(){return this.ag.u()}),N.ic=(function(e,t,n,r){var i=this.p9(e,t,n,r);if(i.c())throw eg().K.h(),new Zv;return i.S()}),N.p9=(function(e,t,n,r){if(this.d3===n){var i=this.eu(e);return i>=0?new PS(this.ag.v(i).b3()):NS()}else return NS()}),N.ix=(function(e,t,n,r,i){if(this.d3===n){var a=this.eu(e);return a===-1?i.a4():this.ag.v(a).b3()}else return i.a4()}),N.ij=(function(e,t,n,r){return this.d3===n&&this.eu(e)>=0}),N.no=(function(e,t,n,r,i,a){var o=this.eu(e);return o>=0?a?Object.is(this.ag.v(o).b3(),t)?this:new ug(n,r,this.ag.dy(o,new Cy(e,t))):this:new ug(n,r,this.ag.dr(new Cy(e,t)))}),N.iA=(function(){return!1}),N.iN=(function(){return 0}),N.cL=(function(e){throw ny(new ry,`No sub-nodes present in hash-collision leaf node.`)}),N.go=(function(){return!0}),N.iR=(function(){return this.ag.u()}),N.dv=(function(e){return this.ag.v(e).b7()}),N.cN=(function(e){return this.ag.v(e).b3()}),N.mL=(function(e){return this.ag.v(e)}),N.fs=(function(e){return this.hM}),N.dX=(function(e){this.ag.bJ(new X((t=>{if(t!==null){var n=t.b7(),r=t.b3();return e.cG(n,r)}else throw new vy(t)})))}),N.r=(function(e){if(e instanceof ug){if(this===e)return!0;if(this.d3===e.d3&&this.ag.u()===e.ag.u()){for(var t=this.ag.m();t.o();){var n=t.h();if(n===null)throw new vy(n);var r=n.b7(),i=n.b3(),a=e.eu(r);if(a<0||!W().s(i,e.ag.v(a).b3()))return!1}return!0}else return!1}else return!1}),N.y=(function(){throw new ly(`Trie nodes do not support hashing.`)}),N.du=(function(){return Math.imul(this.ag.u(),this.d3)}),N.mp=(function(){return new ug(this.hM,this.d3,this.ag)}),N.iw=(function(e){return this.cL(e)}),new I().i(ug,`scala.collection.immutable.HashCollisionMapNode`,{bR:1,bZ:1,aP:1});function fg(){this.hN=null,mg=this,this.hN=new mD(Md().lp)}N=fg.prototype=new P,N.constructor=fg;function pg(){}pg.prototype=N,N.p3=(function(e){return e instanceof mD?e:new Eb().ib(e).iU()}),N.as=(function(e){return this.p3(e)}),new I().i(fg,`scala.collection.immutable.HashMap$`,{fK:1,aJ:1,a:1});var mg;function hg(){return mg||=new fg,mg}function gg(e,t){this.lm=null,this.ln=null,this.lm=e,this.ln=t}N=gg.prototype=new P,N.constructor=gg;function _g(){}_g.prototype=N,N.z=(function(){return this.lm}),N.aE=(function(){return this.ln}),new I().i(gg,`scala.collection.immutable.LazyList$State$Cons`,{fU:1,bU:1,a:1});function vg(){}N=vg.prototype=new P,N.constructor=vg;function yg(){}yg.prototype=N,N.iB=(function(){throw new dy(`head of empty lazy list`)}),N.aE=(function(){throw new ly(`tail of empty lazy list`)}),N.z=(function(){this.iB()}),new I().i(vg,`scala.collection.immutable.LazyList$State$Empty$`,{fV:1,bU:1,a:1});var bg;function xg(){return bg||=new vg,bg}function Sg(){}N=Sg.prototype=new P,N.constructor=Sg;function Cg(){}Cg.prototype=N,N.p5=(function(e){return oC(e)&&e.c()?XE():e instanceof mD||e instanceof ZE||e instanceof $E||e instanceof tD||e instanceof rD?e:new Gb().lT(e).nd()}),N.as=(function(e){return this.p5(e)}),new I().i(Sg,`scala.collection.immutable.Map$`,{fY:1,aJ:1,a:1});var wg;function Tg(){return wg||=new Sg,wg}function Eg(e,t,n){var r=t.B();if(r!==-1){var i=r+n|0;e.aZ(i<0?0:i)}}function Dg(){}N=Dg.prototype=new P,N.constructor=Dg;function Og(){}Og.prototype=N,N.p6=(function(e){var t=e.B();return SD(new wD,t>0?Pa((1+t|0)/.75):16,.75).lW(e)}),N.aU=(function(){return new xx(16,.75)}),N.as=(function(e){return this.p6(e)}),new I().i(Dg,`scala.collection.mutable.HashSet$`,{gH:1,E:1,a:1});var kg;function Ag(){return kg||=new Dg,kg}function jg(e){this.lF=null,this.lF=e}N=jg.prototype=new vm,N.constructor=jg;function Mg(){}Mg.prototype=N,N.a4=(function(){return(0,this.lF)()}),new I().i(jg,`scala.runtime.AbstractFunction0.$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855`,{ho:1,cf:1,aF:1});function X(e){this.lG=null,this.lG=e}N=X.prototype=new bm,N.constructor=X;function Ng(){}Ng.prototype=N,N.d=(function(e){return(0,this.lG)(e)}),new I().i(X,`scala.runtime.AbstractFunction1.$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28`,{hp:1,cg:1,e:1});function Pg(e){this.lH=null,this.lH=e}N=Pg.prototype=new Sm,N.constructor=Pg;function Fg(){}Fg.prototype=N,N.cG=(function(e,t){return(0,this.lH)(e,t)}),new I().i(Pg,`scala.runtime.AbstractFunction2.$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc`,{hq:1,ch:1,aG:1});function Ig(){}N=Ig.prototype=new P,N.constructor=Ig;function Lg(){}Lg.prototype=N,N.C=(function(){return`<function1>`}),N.d=(function(e){return this.cI(e,Xu().eN)});var Rg=new I().i(0,`scala.runtime.Nothing$`,{hv:1,u:1,a:1});function zg(){}N=zg.prototype=new P,N.constructor=zg;function Bg(){}Bg.prototype=N,N.p7=(function(e){return(t=>e.d(t))}),new I().i(zg,`scala.scalajs.js.Any$`,{hB:1,hC:1,hD:1});var Vg;function Hg(){return Vg||=new zg,Vg}function Ug(){}N=Ug.prototype=new vm,N.constructor=Ug;function Wg(){}Wg.prototype=N;function Gg(){}N=Gg.prototype=new bm,N.constructor=Gg;function Kg(){}Kg.prototype=N;function qg(){}N=qg.prototype=new Sm,N.constructor=qg;function Jg(){}Jg.prototype=N;function Yg(){}N=Yg.prototype=new wm,N.constructor=Yg;function Xg(){}Xg.prototype=N;function Zg(e,t,n,r){if(this.j6=null,this.j4=!1,this.gA=null,this.j5=null,this.j6=e,this.j4=t,this.gA=n,r===null)throw new sy;this.j5=void 0}N=Zg.prototype=new P,N.constructor=Zg;function Qg(){}Qg.prototype=N,N.fw=(function(){return this.j5}),N.fn=(function(){return ho(this)}),N.C=(function(){return go(this)}),N.iY=(function(){return this}),N.gt=(function(e){try{this.j6.d(e)}catch(e){var t=e instanceof Up?e:new mw(e);this.j4?this.gs(new rS(t)):Bm().bX(new rS(t))}}),N.gs=(function(e){try{this.gA.c8(e)?this.gA.d(e):Bm().bX(e)}catch(n){var t=n instanceof Up?n:new mw(n);Bm().bX(new iS(t,e))}}),N.fz=(function(e){e.cK(new Q((e=>{this.gs(e)})),new Q((e=>{this.gt(e)})))}),new I().i(Zg,`com.raquo.airstream.core.Observer$$anon$8`,{cs:1,aq:1,ac:1,ax:1});function $g(e,t,n){if(this.gB=null,this.j7=!1,this.j8=null,this.gB=e,this.j7=t,n===null)throw new sy;this.j8=void 0}N=$g.prototype=new P,N.constructor=$g;function e_(){}e_.prototype=N,N.fw=(function(){return this.j8}),N.fn=(function(){return ho(this)}),N.C=(function(){return go(this)}),N.iY=(function(){return this}),N.gt=(function(e){this.fz(new eS(e))}),N.gs=(function(e){this.fz(new Qx(e))}),N.fz=(function(e){try{this.gB.c8(e)?this.gB.d(e):e.cK(new Q((e=>{Bm().bX(e)})),new Q((e=>void 0)))}catch(n){var t=n instanceof Up?n:new mw(n);this.j7&&e.mR()?this.gs(new rS(t)):e.cK(new Q((e=>{Bm().bX(new iS(t,e))})),new Q((e=>{Bm().bX(new rS(t))})))}}),new I().i($g,`com.raquo.airstream.core.Observer$$anon$9`,{ct:1,aq:1,ac:1,ax:1});function t_(e){if(this.jB=null,this.jC=!1,this.ns=null,e===null)throw new sy;$s(this)}N=t_.prototype=new P,N.constructor=t_;function n_(){}n_.prototype=N,N.qz=(function(){return this.jC||=(this.jB=new mp(`svg`,!1),!0),this.jB}),new I().i(t_,`com.raquo.laminar.api.Laminar$svg$`,{cX:1,dd:1,d6:1,d8:1});function r_(){this.i=null,a_=this,this.i=new kE}N=r_.prototype=new P,N.constructor=r_;function i_(){}i_.prototype=N,new I().i(r_,`com.raquo.laminar.api.package$`,{d0:1,b5:1,b8:1,b4:1});var a_;function Z(){return a_||=new r_,a_}function o_(e,t,n,r){this.gV=null,this.gX=!1,this.gW=null,this.fL=null,this.gV=e,this.gX=t,this.gW=n,this.fL=r}N=o_.prototype=new P,N.constructor=o_;function s_(){}s_.prototype=N,N.fi=(function(e){var t=this.gV,n=t.c()?mc().qg(e,this.gX,this.fL):t.S(),r=new Q((e=>this.gW.id(n,e.h8,this.fL)));return os().ex(e.bK,new Q((t=>r.d(new Lc(e,t)))),!1)}),N.b8=(function(e){this.fi(e)}),N.qM=(function(e){var t=e.m1(this.fL);return new o_(this.gV,this.gX,this.gW,t)}),N.nr=(function(e){return this.qM(e)}),new I().i(o_,`com.raquo.laminar.inserters.DynamicInserter`,{dg:1,Q:1,b7:1,b6:1});function c_(e){this.hd=null,this.kf=null,this.hd=NS(),this.kf=Ms().oz(e)}N=c_.prototype=new P,N.constructor=c_;function l_(){}l_.prototype=N,N.ii=(function(){return this.hd}),N.ew=(function(e){this.hd=e}),N.eB=(function(e){}),N.b8=(function(e){rl().ep(e,this,void 0)}),N.b9=(function(){return this.kf}),new I().i(c_,`com.raquo.laminar.nodes.CommentNode`,{dQ:1,as:1,Q:1,aB:1});function u_(e){this.hi=null,this.fV=null,this.hi=NS(),this.fV=Ms().oC(e)}N=u_.prototype=new P,N.constructor=u_;function d_(){}d_.prototype=N,N.ii=(function(){return this.hi}),N.ew=(function(e){this.hi=e}),N.eB=(function(e){}),N.b8=(function(e){rl().ep(e,this,void 0)}),N.qD=(function(){return this.fV.data}),N.b9=(function(){return this.fV}),new I().i(u_,`com.raquo.laminar.nodes.TextNode`,{dX:1,as:1,Q:1,aB:1});function f_(){this.dJ=null,this.dG=null,this.dH=!1,this.dI=null,this.dK=!1,this.kB=null,this.kC=!1,this.kD=null,this.kE=!1,this.kz=null,this.kA=!1,vp(this,`wa-select`)}N=f_.prototype=new bp,N.constructor=f_;function p_(){}p_.prototype=N,N.fy=(function(){return this.kC||=(this.kB=(Z(),new Hf(`input`)),!0),this.kB}),N.eA=(function(){return this.kE||=(this.kD=(Z(),Gf(new Kf,`value`,Xs().cf)),!0),this.kD}),N.pu=(function(){return this.kA||=(this.kz=(Z(),Gf(new Kf,`label`,Xs().cf)),!0),this.kz}),N.f8=(function(){return Zi}),new I().i(f_,`io.github.nguyenyou.webawesome.laminar.Select$`,{e4:1,al:1,ak:1,ea:1});var m_;function h_(){return m_||=new f_,m_}function g_(){}N=g_.prototype=new P,N.constructor=g_;function __(){}__.prototype=N;function v_(e,t){return e===t}function y_(e){return e?1231:1237}var b_=new I().i(0,`java.lang.Boolean`,{ef:1,a:1,a2:1,Z:1},(e=>typeof e==`boolean`));function x_(e){return e}function S_(e,t){return t instanceof Ea&&e===t.c}var C_=new I().i(0,`java.lang.Character`,{bk:1,a:1,a2:1,Z:1},(e=>e instanceof Ea));function w_(e,t){return Hp(e,t,null,!0,!0),e}var T_=class extends Nh{};new I().i(T_,`java.lang.RuntimeException`,{D:1,C:1,u:1,a:1});function E_(e){return e.q=``,e}function D_(e,t){if(E_(e),t===null)throw new sy;return e.q=t,e}function O_(){this.q=null}N=O_.prototype=new P,N.constructor=O_;function k_(){}k_.prototype=N,N.lZ=(function(e){var t=Vp().pH(e,0,e.a.length);return this.q=``+this.q+t,this}),N.C=(function(){return this.q}),N.u=(function(){return this.q.length}),N.mi=(function(e){return this.q.charCodeAt(e)}),new I().i(O_,`java.lang.StringBuilder`,{eA:1,aD:1,bi:1,a:1});function A_(e){this.hs=null,this.eM=0,this.hs=e,this.eM=0}N=A_.prototype=new P,N.constructor=A_;function j_(){}j_.prototype=N,N.B=(function(){return-1}),N.bf=(function(e,t,n){return cd(this,e,t,n)}),N.cl=(function(e,t,n,r){return ud(this,e,t,n,r)}),N.m=(function(){return this}),N.gl=(function(e){return Jh(this,e)}),N.cJ=(function(e){return Yh(this,e,-1)}),N.C=(function(){return`<iterator>`}),N.o=(function(){return this.eM<(this.hs.length|0)}),N.h=(function(){var e=this.hs[this.eM];return this.eM=1+this.eM|0,e}),new I().i(A_,`org.scalajs.dom.DOMList$DOMListIterator`,{eM:1,b:1,c:1,o:1});function M_(){}N=M_.prototype=new Fh,N.constructor=M_;function N_(){}N_.prototype=N;function P_(){}N=P_.prototype=new P,N.constructor=P_;function F_(){}F_.prototype=N,N.cI=(function(e,t){return lm(this,e,t)}),N.C=(function(){return`<function1>`}),N.c8=(function(e){return!1}),N.ie=(function(e){throw new vy(e)}),N.d=(function(e){this.ie(e)}),new I().i(P_,`scala.PartialFunction$$anon$1`,{f3:1,j:1,e:1,a:1});function I_(){}N=I_.prototype=new P,N.constructor=I_;function L_(){}L_.prototype=N,N.m=(function(){return this}),N.gl=(function(e){return Jh(this,e)}),N.cJ=(function(e){return this.fC(e,-1)}),N.fC=(function(e,t){return Yh(this,e,t)}),N.C=(function(){return`<iterator>`}),N.bf=(function(e,t,n){return cd(this,e,t,n)}),N.cl=(function(e,t,n,r){return ud(this,e,t,n,r)}),N.B=(function(){return-1});function R_(){this.hH=null,this.lf=null,this.lg=null,tg(this,Tg()),B_=this,this.lf=qa(new Ja),this.lg=new jg((()=>V_().lf))}N=R_.prototype=new rg,N.constructor=R_;function z_(){}z_.prototype=N,new I().i(R_,`scala.collection.Map$`,{fw:1,fx:1,aJ:1,a:1});var B_;function V_(){return B_||=new R_,B_}function H_(e,t){return e.cU=t,e}function U_(){this.cU=null}N=U_.prototype=new P,N.constructor=U_;function W_(){}W_.prototype=N,N.m6=(function(e){return this.cU.cH(e)}),N.fq=(function(e){return this.cU.as(e)}),N.aU=(function(){return this.cU.aU()}),N.as=(function(e){return this.fq(e)}),N.cH=(function(e){return this.m6(e)});function G_(e){return e.c5(new X((e=>e)))}function K_(e,t){return e.es(new $T(e,t))}function q_(e,t){return t>=0&&e.b5(t)>0}function J_(e){return e.b5(0)===0}function Y_(e,t){var n=e.B();if(n!==-1)var r=t.B(),i=r!==-1&&n!==r;else var i=!1;return i?!1:Xh(e.m(),t)}function X_(e,t){for(var n=e.bg().aU(),r=e.m();r.o();)n.aT(t.d(r.h()));return n.aY()}function Z_(){this.g1=null,Wh(this,Fb())}N=Z_.prototype=new Kh,N.constructor=Z_;function Q_(){}Q_.prototype=N,N.p4=(function(e){return oC(e)?e:Gh.prototype.as.call(this,e)}),N.as=(function(e){return this.p4(e)}),new I().i(Z_,`scala.collection.immutable.Iterable$`,{fP:1,fn:1,E:1,a:1});var $_;function ev(){return $_||=new Z_,$_}function tv(){this.g7=null,rv=this,this.g7=new uD(new jg((()=>xg()))).mE()}N=tv.prototype=new P,N.constructor=tv;function nv(){}nv.prototype=N,N.cH=(function(e){return this.it(e)}),N.qk=(function(e,t){return new uD(new jg(((e,t)=>(()=>{for(var n=e.en,r=t.dT;r>0&&!n.c();)n=n.F().aE(),e.en=n,r=-1+r|0,t.dT=r;return n.F()}))(new km(e),new Dm(t))))}),N.it=(function(e){return e instanceof uD?e:e.B()===0?this.g7:new uD(new jg((()=>iv().nf(e.m()))))}),N.ng=(function(e,t){return e.o()?new gg(e.h(),new uD(new jg((()=>iv().ng(e,t))))):t.a4()}),N.nf=(function(e){return e.o()?new gg(e.h(),new uD(new jg((()=>iv().nf(e))))):xg()}),N.aU=(function(){return new Ob}),N.as=(function(e){return this.it(e)}),new I().i(tv,`scala.collection.immutable.LazyList$`,{fQ:1,V:1,E:1,a:1});var rv;function iv(){return rv||=new tv,rv}function av(e,t){this.f1=null,this.lz=null,this.f1=e,this.lz=t}N=av.prototype=new P,N.constructor=av;function ov(){}ov.prototype=N,N.o8=(function(e){return this.f1.aT(e),this}),N.nY=(function(e){return this.f1.aX(e),this}),N.aZ=(function(e){this.f1.aZ(e)}),N.aY=(function(){return this.lz.d(this.f1.aY())}),N.aX=(function(e){return this.nY(e)}),N.aT=(function(e){return this.o8(e)}),new I().i(av,`scala.collection.mutable.Builder$$anon$1`,{gE:1,L:1,I:1,G:1});function sv(e,t){return e.dl=t,e}function cv(){this.dl=null}N=cv.prototype=new P,N.constructor=cv;function lv(){}lv.prototype=N,N.aZ=(function(e){}),N.o9=(function(e){return this.dl.aT(e),this}),N.nZ=(function(e){return this.dl.aX(e),this}),N.aX=(function(e){return this.nZ(e)}),N.aT=(function(e){return this.o9(e)}),N.aY=(function(){return this.dl}),new I().i(cv,`scala.collection.mutable.GrowableBuilder`,{aS:1,L:1,I:1,G:1});function uv(e){this.lK=null,this.lK=e}N=uv.prototype=new Wg,N.constructor=uv;function dv(){}dv.prototype=N,N.a4=(function(){return(0,this.lK)()}),new I().i(uv,`scala.scalajs.runtime.AnonFunction0.$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1`,{hJ:1,hI:1,cf:1,aF:1});function Q(e){this.lL=null,this.lL=e}N=Q.prototype=new Kg,N.constructor=Q;function fv(){}fv.prototype=N,N.d=(function(e){return(0,this.lL)(e)}),new I().i(Q,`scala.scalajs.runtime.AnonFunction1.$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab`,{hL:1,hK:1,cg:1,e:1});function pv(e){this.lM=null,this.lM=e}N=pv.prototype=new Jg,N.constructor=pv;function mv(){}mv.prototype=N,N.cG=(function(e,t){return(0,this.lM)(e,t)}),new I().i(pv,`scala.scalajs.runtime.AnonFunction2.$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2`,{hN:1,hM:1,ch:1,aG:1});function hv(e){this.lN=null,this.lN=e}N=hv.prototype=new Xg,N.constructor=hv;function gv(){}gv.prototype=N,N.id=(function(e,t,n){return(0,this.lN)(e,t,n)}),new I().i(hv,`scala.scalajs.runtime.AnonFunction3.$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491`,{hP:1,hO:1,hr:1,eW:1});function _v(){}N=_v.prototype=new P,N.constructor=_v;function vv(){}vv.prototype=N;function yv(e){e.ml(ws().b4(G().b(new(qm.r()).C([])))),e.mm(ws().b4(G().b(new(mo.r()).C([])))),e.gy(!1)}function bv(e,t,n){var r=Bo(),i=(()=>{Tv(e);var r=xv(e,t,n);return t.fz(e.gx()),Ev(e),r}),a=!Gm(e);if(r.b0||!a)var o=i();else{r.b0=!0;try{var o=i()}finally{r.b0=!1,Io(r)}}return o}function xv(e,t,n){var r=new fs(n,new uv((()=>{Um(e,t)})));return e.fp().push(t),r}function Sv(e,t,n){var r=Bo(),i=(()=>{!Gm(e)&&n&&Tv(e),e.fv().push(t),Ev(e)}),a=!Gm(e);if(r.b0||!a)i();else{r.b0=!0;try{i()}finally{r.b0=!1,Io(r)}}}function Cv(e,t){wo().nc(e.fv(),t)&&Dv(e)}function wv(e,t){wo().nc(e.fp(),t)&&Dv(e)}function Tv(e){e.nq()||(e.n5(),e.gy(!0))}function Ev(e){Ov(e)===1&&e.n3()}function Dv(e){Gm(e)||(e.n4(),e.gy(!1))}function Ov(e){var t=e.fp().length,n=e.fv();return(t|0)+(n.length|0)|0}function kv(e){e.fK=bo().p8(new Av(e),(bo(),!0))}function Av(e){if(this.jq=null,e===null)throw new sy;this.jq=e}N=Av.prototype=new Lg,N.constructor=Av;function jv(){}jv.prototype=N,N.pq=(function(e){return!0}),N.oi=(function(e,t){new ko(new Q((t=>{this.jq.qm(e,t)})))}),N.c8=(function(e){return this.pq(e)}),N.cI=(function(e,t){return this.oi(e,t)}),new I().i(Av,`com.raquo.airstream.state.Var$$anon$1`,{cM:1,ci:1,e:1,j:1,a:1});function Mv(e){if(e===null)throw new sy}N=Mv.prototype=new Lg,N.constructor=Mv;function Nv(){}Nv.prototype=N,N.c8=(function(e){return typeof e==`string`}),N.cI=(function(e,t){return typeof e==`string`?e:t.d(e)}),new I().i(Mv,`com.raquo.laminar.DomApi$$anon$2`,{cR:1,ci:1,e:1,j:1,a:1});function Pv(e,t){this.fN=null,this.h3=null,this.fN=e,this.h3=t}N=Pv.prototype=new P,N.constructor=Pv;function Fv(){}Fv.prototype=N,N.b8=(function(e){var t=this.h3;t!==void 0&&t.iQ(e,this.fN),rl().ep(e,this.fN,void 0)}),N.qN=(function(e){return new Pv(this.fN,e.m1(this.h3))}),N.nr=(function(e){return this.qN(e)});var Iv=new I().i(Pv,`com.raquo.laminar.inserters.StaticChildInserter`,{dk:1,Q:1,b7:1,dm:1,b6:1});function Lv(e){e.he=new hs(new uv((()=>{e.bK.lS()})),new uv((()=>{e.bK.oD()}))),e.dF=void 0,e.eI=XE()}function Rv(e,t,n){if(e.dF===void 0)e.dF=ws().b4(G().b(new(th.r()).C([t])));else if(n){var r=e.dF;if(r===void 0){var i;throw new dy(`undefined.get`)}else var i=r;i.unshift(t)}else{var a=e.dF;if(a===void 0){var o;throw new dy(`undefined.get`)}else var o=a;o.push(t)}}function zv(e,t){var n=e.dF;n!==void 0&&n.splice(t,1)}function Bv(e,t){var n=e.dF;if(n===void 0)return-1;for(var r=!1,i=0;!r&&i<(n.length|0);){var a=n[i];(a===null?t===null:ka(a,t))?r=!0:i=1+i|0}return r?i:-1}function Vv(e,t,n,r,i){var a=e.eI.cM(t,new uv((()=>$()))),o=(e=>{for(var t=a;!t.c();){var r=t.z(),i=r.b7();if(i===null?e===null:ka(i,e)){var o=r.b3();if(o===null?n===null:ka(o,n))var s=n===null;else var s=!0}else var s=!1;if(s)return!0;t=t.w()}return!1}),s=G_(r),c=i;block:for(var l;;)if(c.c()){var l=$();break}else{var u=c.z(),d=c.w();if(o(u)){c=d;continue}for(var f=c,p=d;;)if(p.c()){var l=f;break block}else{if(!o(p.z())){p=p.w();continue}for(var m=p,h=new AO(f.z(),$()),g=f.w(),_=h;g!==m;){var v=new AO(g.z(),$());_.at=v,_=v,g=g.w()}for(var y=m.w(),ee=y;!y.c();)if(!o(y.z()))y=y.w();else{for(;ee!==y;){var te=new AO(ee.z(),$());_.at=te,_=te,ee=ee.w()}ee=y.w(),y=y.w()}ee.c()||(_.at=ee);var l=h;break block}}var ne=e.eI.cM(t,new uv((()=>$()))),b=(e=>l.bt(e.b7())),x=ne;block$2:for(var S;;)if(x.c()){var S=$();break}else{var re=x.z(),ie=x.w();if(b(re)){x=ie;continue}for(var ae=x,oe=ie;;)if(oe.c()){var S=ae;break block$2}else{if(!b(oe.z())){oe=oe.w();continue}for(var C=oe,se=new AO(ae.z(),$()),w=ae.w(),ce=se;w!==C;){var le=new AO(w.z(),$());ce.at=le,ce=le,w=w.w()}for(var ue=C.w(),de=ue;!ue.c();)if(!b(ue.z()))ue=ue.w();else{for(;de!==ue;){var fe=new AO(de.z(),$());ce.at=fe,ce=fe,de=de.w()}de=ue.w(),ue=ue.w()}de.c()||(ce.at=de);var S=se;break block$2}}var pe=(e=>new Cy(e,n));if(s===$())var me=$();else{for(var he=new AO(pe(s.z()),$()),ge=he,_e=s.w();_e!==$();){var ve=new AO(pe(_e.z()),$());ge.at=ve,ge=ve,_e=_e.w()}var me=he}var ye=S.m2(me),be=t.h4.mr(t.k2.d(e)),xe=(e=>l.bt(e)),Se=be;block$4:for(var Ce;;)if(Se.c()){var Ce=$();break}else{var we=Se.z(),T=Se.w();if(xe(we)){Se=T;continue}for(var Te=Se,E=T;;)if(E.c()){var Ce=Te;break block$4}else{if(!xe(E.z())){E=E.w();continue}for(var Ee=E,De=new AO(Te.z(),$()),Oe=Te.w(),ke=De;Oe!==Ee;){var Ae=new AO(Oe.z(),$());ke.at=Ae,ke=Ae,Oe=Oe.w()}for(var je=Ee.w(),Me=je;!je.c();)if(!xe(je.z()))je=je.w();else{for(;Me!==je;){var Ne=new AO(Me.z(),$());ke.at=Ne,ke=Ne,Me=Me.w()}Me=je.w(),je=je.w()}Me.c()||(ke.at=Me);var Ce=De;break block$4}}var Pe=s;block$6:for(var Fe;;)if(Pe.c()){var Fe=$();break}else{var Ie=Pe.z(),Le=Pe.w();if(o(Ie)){Pe=Le;continue}for(var Re=Pe,ze=Le;;)if(ze.c()){var Fe=Re;break block$6}else{if(!o(ze.z())){ze=ze.w();continue}for(var Be=ze,Ve=new AO(Re.z(),$()),He=Re.w(),Ue=Ve;He!==Be;){var D=new AO(He.z(),$());Ue.at=D,Ue=D,He=He.w()}for(var O=Be.w(),We=O;!O.c();)if(!o(O.z()))O=O.w();else{for(;We!==O;){var Ge=new AO(We.z(),$());Ue.at=Ge,Ue=Ge,We=We.w()}We=O.w(),O=O.w()}We.c()||(Ue.at=We);var Fe=Ve;break block$6}}var k=Ce.m2(Fe);e.eI=e.eI.dz(t,ye),t.k4.cG(e,t.h4.mv(k))}function Hv(e,t){Wv(e,e.eH,t)&&Gv(e,t)}function Uv(e,t){var n=e.eH;e.eH=t,Wv(e,n,t)||Gv(e,t)}function Wv(e,t,n){var r=!t.c()&&!t.S().gm().bz.c(),i=!n.c()&&!n.S().gm().bz.c();return r&&!i}function Gv(e,t){Kv(e,t.c()?NS():new PS(t.S().gm()))}function Kv(e,t){if(t.c())e.he.oq();else{var n=t.S();e.he.qo(n)}}function qv(){}N=qv.prototype=new __,N.constructor=qv;function Jv(){}Jv.prototype=N;var Yv=class extends T_{constructor(e){super(),Hp(this,e,null,!0,!0)}};new I().i(Yv,`java.lang.ArithmeticException`,{ed:1,D:1,C:1,u:1,a:1});var Xv=new I().i(0,`java.lang.Byte`,{eg:1,a8:1,a:1,a2:1,Z:1},(e=>Ba(e))),Zv=class extends T_{constructor(){super(),Hp(this,null,null,!0,!0)}};new I().i(Zv,`java.lang.ClassCastException`,{bl:1,D:1,C:1,u:1,a:1});function Qv(e,t){return Hp(e,t,null,!0,!0),e}function $v(e){return Hp(e,null,null,!0,!0),e}var ey=class extends T_{};new I().i(ey,`java.lang.IllegalArgumentException`,{bn:1,D:1,C:1,u:1,a:1});var ty=class extends T_{constructor(e){super(),Hp(this,e,null,!0,!0)}};new I().i(ty,`java.lang.IllegalStateException`,{el:1,D:1,C:1,u:1,a:1});function ny(e,t){return Hp(e,t,null,!0,!0),e}var ry=class extends T_{};new I().i(ry,`java.lang.IndexOutOfBoundsException`,{aE:1,D:1,C:1,u:1,a:1});function iy(){}N=iy.prototype=new __,N.constructor=iy;function ay(){}ay.prototype=N,new I().i(iy,`java.lang.JSConsoleBasedPrintStream$DummyOutputStream`,{eq:1,bh:1,bf:1,bj:1,bg:1});var oy=class extends T_{constructor(){super(),Hp(this,null,null,!0,!0)}};new I().i(oy,`java.lang.NegativeArraySizeException`,{es:1,D:1,C:1,u:1,a:1});var sy=class extends T_{constructor(){super(),Hp(this,null,null,!0,!0)}};new I().i(sy,`java.lang.NullPointerException`,{et:1,D:1,C:1,u:1,a:1});var cy=new I().i(0,`java.lang.Short`,{ew:1,a8:1,a:1,a2:1,Z:1},(e=>Va(e))),ly=class extends T_{constructor(e){super(),Hp(this,e,null,!0,!0)}};new I().i(ly,`java.lang.UnsupportedOperationException`,{eF:1,D:1,C:1,u:1,a:1});var uy=class extends T_{constructor(e){super(),Hp(this,e,null,!0,!0)}};new I().i(uy,`java.util.ConcurrentModificationException`,{eK:1,D:1,C:1,u:1,a:1});var dy=class extends T_{constructor(e){super(),Hp(this,e,null,!0,!0)}};new I().i(dy,`java.util.NoSuchElementException`,{eL:1,D:1,C:1,u:1,a:1});function fy(){}N=fy.prototype=new N_,N.constructor=fy;function py(){}py.prototype=N,N.d=(function(e){return e}),N.C=(function(){return`generalized constraint`}),new I().i(fy,`scala.$less$colon$less$$anon$1`,{eS:1,eP:1,eQ:1,e:1,a:1});function my(e){return e.hv||=(e.hw=e.g0===null?`null`:_y(e),!0),e.hw}function hy(e){return e.hv?e.hw:my(e)}function gy(e){var t=e.g0;return`of class `+Oa(t)}function _y(e){try{return e.g0+` (`+gy(e)+`)`}catch{return`an instance `+gy(e)}}var vy=class extends T_{constructor(e){super(),this.hw=null,this.g0=null,this.hv=!1,this.g0=e,Hp(this,null,null,!0,!0)}ft(){return hy(this)}};new I().i(vy,`scala.MatchError`,{eZ:1,D:1,C:1,u:1,a:1});function yy(){}N=yy.prototype=new P,N.constructor=yy;function by(){}by.prototype=N,N.c=(function(){return this===NS()}),N.B=(function(){return this.c()?0:1}),N.bt=(function(e){return!this.c()&&W().s(this.S(),e)}),N.m=(function(){return this.c()?eg().K:new jy(this.S())});function xy(e){this.eO=0,this.l4=0,this.l3=null,this.l3=e,this.eO=0,this.l4=e.bu()}N=xy.prototype=new L_,N.constructor=xy;function Sy(){}Sy.prototype=N,N.o=(function(){return this.eO<this.l4}),N.h=(function(){var e=this.l3.bv(this.eO);return this.eO=1+this.eO|0,e}),new I().i(xy,`scala.Product$$anon$1`,{f5:1,p:1,o:1,b:1,c:1});function Cy(e,t){this.l5=null,this.l6=null,this.l5=e,this.l6=t}N=Cy.prototype=new P,N.constructor=Cy;function wy(){}wy.prototype=N,N.bu=(function(){return 2}),N.bv=(function(e){return Bh(this,e)}),N.b7=(function(){return this.l5}),N.b3=(function(){return this.l6}),N.C=(function(){return`(`+this.b7()+`,`+this.b3()+`)`}),N.bw=(function(){return`Tuple2`}),N.bW=(function(){return new Hx(this)}),N.y=(function(){return q().dx(this,-889275714,!1)}),N.r=(function(e){return this===e||e instanceof Cy&&W().s(this.b7(),e.b7())&&W().s(this.b3(),e.b3())}),new I().i(Cy,`scala.Tuple2`,{bv:1,f6:1,U:1,d:1,a:1});function Ty(e){this.eQ=null,Vh(this,e)}N=Ty.prototype=new Uh,N.constructor=Ty;function Ey(){}Ey.prototype=N,new I().i(Ty,`scala.collection.ClassTagSeqFactory$AnySeqDelegate`,{fk:1,fj:1,E:1,a:1,V:1});function Dy(e){return ld(e,e.bI()+`(`,`, `,`)`)}function Oy(e){return!!(e&&e.$classData&&e.$classData.n.f)}function ky(){}N=ky.prototype=new L_,N.constructor=ky;function Ay(){}Ay.prototype=N,N.o=(function(){return!1}),N.iM=(function(){throw new dy(`next on empty iterator`)}),N.B=(function(){return 0}),N.fC=(function(e,t){return this}),N.h=(function(){this.iM()}),new I().i(ky,`scala.collection.Iterator$$anon$19`,{fp:1,p:1,o:1,b:1,c:1});function jy(e){this.eR=!1,this.l9=null,this.l9=e,this.eR=!1}N=jy.prototype=new L_,N.constructor=jy;function My(){}My.prototype=N,N.o=(function(){return!this.eR}),N.h=(function(){return this.eR?eg().K.h():(this.eR=!0,this.l9)}),N.fC=(function(e,t){return this.eR||e>0||t===0?eg().K:this}),new I().i(jy,`scala.collection.Iterator$$anon$20`,{fq:1,p:1,o:1,b:1,c:1});function Ny(e,t){this.lc=null,this.g2=!1,this.lb=null,this.hG=null,this.la=null,this.hG=e,this.la=t,this.lc=CD(new wD),this.g2=!1}N=Ny.prototype=new L_,N.constructor=Ny;function Py(){}Py.prototype=N,N.o=(function(){for(;;)if(this.g2)return!0;else if(this.hG.o()){var e=this.hG.h();if(this.lc.gh(this.la.d(e)))return this.lb=e,this.g2=!0,!0}else return!1}),N.h=(function(){return this.o()?(this.g2=!1,this.lb):eg().K.h()}),new I().i(Ny,`scala.collection.Iterator$$anon$8`,{fs:1,p:1,o:1,b:1,c:1});function Fy(e,t){this.g3=null,this.ld=null,this.g3=e,this.ld=t}N=Fy.prototype=new L_,N.constructor=Fy;function Iy(){}Iy.prototype=N,N.B=(function(){return this.g3.B()}),N.o=(function(){return this.g3.o()}),N.h=(function(){return this.ld.d(this.g3.h())}),new I().i(Fy,`scala.collection.Iterator$$anon$9`,{ft:1,p:1,o:1,b:1,c:1});function Ly(e){for(;;){if(e.bk instanceof zy){var t=e.bk;e.bk=t.bk,e.cS=t.cS,t.bN!==null&&(e.bM===null&&(e.bM=t.bM),t.bM.eS=e.bN,e.bN=t.bN);continue}return}}function Ry(e){for(;;)if(e.bN===null)return e.bk=null,e.bM=null,!1;else{if(e.bk=e.bN.pi(),e.bM===e.bN&&(e.bM=e.bM.eS),e.bN=e.bN.eS,Ly(e),e.cS)return!0;if(e.bk!==null&&e.bk.o())return e.cS=!0,!0}}function zy(e){this.bk=null,this.bN=null,this.bM=null,this.cS=!1,this.bk=e,this.bN=null,this.bM=null,this.cS=!1}N=zy.prototype=new L_,N.constructor=zy;function By(){}By.prototype=N,N.o=(function(){return this.cS?!0:this.bk===null?!1:this.bk.o()?(this.cS=!0,!0):Ry(this)}),N.h=(function(){return this.o()?(this.cS=!1,this.bk.h()):eg().K.h()}),N.gl=(function(e){var t=new fd(e,null);return this.bN===null?(this.bN=t,this.bM=t):(this.bM.eS=t,this.bM=t),this.bk===null&&(this.bk=eg().K),this}),new I().i(zy,`scala.collection.Iterator$ConcatIterator`,{bB:1,p:1,o:1,b:1,c:1});function Vy(e){for(;e.cs>0;)e.cT.o()?(e.cT.h(),e.cs=-1+e.cs|0):e.cs=0}function Hy(e,t){if(e.bD<0)return-1;var n=e.bD-t|0;return n<0?0:n}function Uy(e,t,n){this.cT=null,this.bD=0,this.cs=0,this.cT=e,this.bD=n,this.cs=t}N=Uy.prototype=new L_,N.constructor=Uy;function Wy(){}Wy.prototype=N,N.B=(function(){var e=this.cT.B();if(e<0)return-1;var t=e-this.cs|0,n=t<0?0:t;if(this.bD<0)return n;var r=this.bD;return r<n?r:n}),N.o=(function(){return Vy(this),this.bD!==0&&this.cT.o()}),N.h=(function(){return Vy(this),this.bD>0?(this.bD=-1+this.bD|0,this.cT.h()):this.bD<0?this.cT.h():eg().K.h()}),N.fC=(function(e,t){var n=e>0?e:0;if(t<0)var r=Hy(this,n);else if(t<=n)var r=0;else if(this.bD<0)var r=t-n|0;else var i=Hy(this,n),a=t-n|0,r=i<a?i:a;var o=this.cs+n|0;return r===0?eg().K:o<0?(this.cs=2147483647,this.bD=0,Jh(this,new jg((()=>new Uy(this.cT,-2147483647+o|0,r))))):(this.cs=o,this.bD=r,this)}),new I().i(Uy,`scala.collection.Iterator$SliceIterator`,{fv:1,p:1,o:1,b:1,c:1});function Gy(e){for(var t=e,n=0;!t.c();)n=1+n|0,t=t.w();return n}function Ky(e,t){return t<0?1:Xy(e,0,e,t)}function qy(e,t){return t>=0&&e.b5(t)>0}function Jy(e,t){if(t<0)throw ny(new ry,``+t);var n=e.mt(t);if(n.c())throw ny(new ry,``+t);return n.z()}function Yy(e,t){return bE(t)?Zy(e,e,t):Y_(e,t)}function Xy(e,t,n,r){for(;;)if(t===r)return n.c()?0:1;else if(n.c())return-1;else{var i=1+t|0,a=n.w();t=i,n=a}}function Zy(e,t,n){for(;;)if(t===n)return!0;else if(!t.c()&&!n.c()&&W().s(t.z(),n.z())){var r=t.w(),i=n.w();t=r,n=i}else return t.c()&&n.c()}function Qy(){this.cU=null,H_(this,Xb())}N=Qy.prototype=new W_,N.constructor=Qy;function $y(){}$y.prototype=N,new I().i(Qy,`scala.collection.Seq$`,{fy:1,at:1,V:1,E:1,a:1});var eb;function tb(){return eb||=new Qy,eb}function nb(e){this.eT=null,this.eT=e}N=nb.prototype=new L_,N.constructor=nb;function rb(){}rb.prototype=N,N.o=(function(){return!this.eT.c()}),N.h=(function(){var e=this.eT.z();return this.eT=this.eT.w(),e}),new I().i(nb,`scala.collection.StrictOptimizedLinearSeqOps$$anon$1`,{fA:1,p:1,o:1,b:1,c:1});function ib(e){e.cu===null&&(e.cu=new eo(Bd().f0<<1),e.eV=new(Id.r()).C(Bd().f0))}function ab(e,t){e.dN=t,e.bE=0,e.eU=t.iR()}function ob(e,t){ib(e),e.bm=1+e.bm|0;var n=e.bm<<1,r=1+(e.bm<<1)|0;e.eV.a[e.bm]=t,e.cu.a[n]=0,e.cu.a[r]=t.iN()}function sb(e){e.bm=-1+e.bm|0}function cb(e){for(;e.bm>=0;){var t=e.bm<<1,n=1+(e.bm<<1)|0,r=e.cu.a[t];if(r<e.cu.a[n]){var i=e.cu;i.a[t]=1+i.a[t]|0;var a=e.eV.a[e.bm].iw(r);if(a.iA()&&ob(e,a),a.go())return ab(e,a),!0}else sb(e)}return!1}function lb(e){return e.bE=0,e.eU=0,e.bm=-1,e}function ub(e,t){return lb(e),t.iA()&&ob(e,t),t.go()&&ab(e,t),e}function db(){this.bE=0,this.eU=0,this.dN=null,this.bm=0,this.cu=null,this.eV=null}N=db.prototype=new L_,N.constructor=db;function fb(){}fb.prototype=N,N.o=(function(){return this.bE<this.eU||cb(this)});function pb(e,t){e.g5=t,e.d2=-1+t.iR()|0}function mb(e,t){e.bF=1+e.bF|0,e.eX.a[e.bF]=t,e.eW.a[e.bF]=-1+t.iN()|0}function hb(e){e.bF=-1+e.bF|0}function gb(e){for(;e.bF>=0;){var t=e.eW.a[e.bF];if(e.eW.a[e.bF]=-1+t|0,t>=0)mb(e,e.eX.a[e.bF].iw(t));else{var n=e.eX.a[e.bF];if(hb(e),n.go())return pb(e,n),!0}}return!1}function _b(e){return e.d2=-1,e.bF=-1,e.eW=new eo(1+Bd().f0|0),e.eX=new(Id.r()).C(1+Bd().f0|0),e}function vb(e,t){return _b(e),mb(e,t),gb(e),e}function yb(){this.d2=0,this.g5=null,this.bF=0,this.eW=null,this.eX=null}N=yb.prototype=new L_,N.constructor=yb;function bb(){}bb.prototype=N,N.o=(function(){return this.d2>=0||gb(this)});function xb(e){return e.ef!==null}function Sb(e,t,n,r){if(n<0||n>t.a.length)throw mS(new hS);var i=new eo(1+t.a.length|0);t.x(0,i,0,n),i.a[n]=r;var a=1+n|0,o=t.a.length-n|0;return t.x(n,i,a,o),i}function Cb(e,t,n,r,i,a,o){var s=t.fl(n),c=s<<1,l=t.aj,u=new F(2+l.a.length|0);l.x(0,u,0,c),u.a[c]=r,u.a[1+c|0]=o;var d=2+c|0,f=l.a.length-c|0;l.x(c,u,d,f);var p=Sb(e,t.bl,s,i);t.X|=n,t.aj=u,t.bl=p,t.aK=1+t.aK|0,t.ba=t.ba+a|0}function wb(e){xb(e)&&Tb(e),e.ef=null}function Tb(e){e.ch=e.ch.mo()}function Eb(){this.ef=null,this.ch=null,this.ch=new cg(0,0,Uu().l0,Uu().hu,0,0)}N=Eb.prototype=new P,N.constructor=Eb;function Db(){}Db.prototype=N,N.aZ=(function(e){}),N.ey=(function(e,t,n,r,i,a){if(e instanceof cg){var o=Bd().dZ(i,a),s=Bd().dt(o);if((e.X&s)!==0){var c=Bd().cn(e.X,o,s),l=e.dv(c),u=e.fs(c);if(u===r&&W().s(l,t))e.aj.a[1+(c<<1)|0]=n;else{var d=e.cN(c),f=id().c7(u),p=e.iK(l,d,u,f,t,n,r,i,5+a|0);e.pE(s,f,p)}}else if((e.af&s)!==0){var m=Bd().cn(e.af,o,s),h=e.cL(m),g=h.aJ(),_=h.du();this.ey(h,t,n,r,i,5+a|0),e.aK=e.aK+(h.aJ()-g|0)|0,e.ba=e.ba+(h.du()-_|0)|0}else Cb(this,e,s,t,r,i,n)}else if(e instanceof ug){var v=e.eu(t);v<0?e.ag=e.ag.dr(new Cy(t,n)):e.ag=e.ag.dy(v,new Cy(t,n))}else throw new vy(e)}),N.iU=(function(){return this.ch.aK===0?hg().hN:(this.ef===null&&(this.ef=new mD(this.ch)),this.ef)}),N.lY=(function(e){wb(this);var t=K().P(e.b7()),n=id().c7(t);return this.ey(this.ch,e.b7(),e.b3(),t,n,0),this}),N.dU=(function(e,t){wb(this);var n=K().P(e);return this.ey(this.ch,e,t,n,id().c7(n),0),this}),N.ib=(function(e){if(wb(this),e instanceof mD)new iC(this,e);else if(jE(e))e.dX(new Pg(((e,t)=>this.dU(e,t))));else for(var t=e.m();t.o();)this.lY(t.h());return this}),N.aX=(function(e){return this.ib(e)}),N.aT=(function(e){return this.lY(e)}),N.aY=(function(){return this.iU()}),new I().i(Eb,`scala.collection.immutable.HashMapBuilder`,{fL:1,a7:1,L:1,I:1,G:1});function Ob(){this.eg=null,this.ll=null,this.op()}N=Ob.prototype=new P,N.constructor=Ob;function kb(){}kb.prototype=N,N.aZ=(function(e){}),N.op=(function(){var e=new Dd;this.ll=(iv(),new uD(new jg((()=>e.io())))),this.eg=e}),N.qj=(function(){return this.eg.iC(new jg((()=>xg()))),this.ll}),N.o5=(function(e){var t=new Dd;return this.eg.iC(new jg((()=>(iv(),new gg(e,(iv(),new uD(new jg((()=>t.io()))))))))),this.eg=t,this}),N.nW=(function(e){if(e.B()!==0){var t=new Dd;this.eg.iC(new jg((()=>iv().ng(e.m(),new jg((()=>t.io())))))),this.eg=t}return this}),N.aX=(function(e){return this.nW(e)}),N.aT=(function(e){return this.o5(e)}),N.aY=(function(){return this.qj()}),new I().i(Ob,`scala.collection.immutable.LazyList$LazyBuilder`,{fR:1,a7:1,L:1,I:1,G:1});function Ab(e){this.eh=null,this.eh=e}N=Ab.prototype=new L_,N.constructor=Ab;function jb(){}jb.prototype=N,N.o=(function(){return!this.eh.c()}),N.h=(function(){if(this.eh.c())return eg().K.h();var e=this.eh.F().z();return this.eh=this.eh.F().aE(),e}),new I().i(Ab,`scala.collection.immutable.LazyList$LazyIterator`,{fT:1,p:1,o:1,b:1,c:1});function Mb(){}N=Mb.prototype=new P,N.constructor=Mb;function Nb(){}Nb.prototype=N,N.cH=(function(e){return $().iS(e)}),N.aU=(function(){return new tk}),N.as=(function(e){return $().iS(e)}),new I().i(Mb,`scala.collection.immutable.List$`,{fW:1,ah:1,V:1,E:1,a:1});var Pb;function Fb(){return Pb||=new Mb,Pb}function Ib(e,t){return e.ei=t,e.d6=0,e}function Lb(){this.d6=0,this.ei=null}N=Lb.prototype=new L_,N.constructor=Lb;function Rb(){}Rb.prototype=N,N.o=(function(){return this.d6<2}),N.h=(function(){switch(this.d6){case 0:var e=new Cy(this.ei.bY,this.ei.d4);break;case 1:var e=new Cy(this.ei.bZ,this.ei.d5);break;default:var e=eg().K.h()}return this.d6=1+this.d6|0,e}),N.cJ=(function(e){return this.d6=this.d6+e|0,this});function zb(e,t){return e.d7=t,e.d8=0,e}function Bb(){this.d8=0,this.d7=null}N=Bb.prototype=new L_,N.constructor=Bb;function Vb(){}Vb.prototype=N,N.o=(function(){return this.d8<3}),N.h=(function(){switch(this.d8){case 0:var e=new Cy(this.d7.bO,this.d7.cv);break;case 1:var e=new Cy(this.d7.bP,this.d7.cw);break;case 2:var e=new Cy(this.d7.bQ,this.d7.cx);break;default:var e=eg().K.h()}return this.d8=1+this.d8|0,e}),N.cJ=(function(e){return this.d8=this.d8+e|0,this});function Hb(e,t){return e.cj=t,e.d9=0,e}function Ub(){this.d9=0,this.cj=null}N=Ub.prototype=new L_,N.constructor=Ub;function Wb(){}Wb.prototype=N,N.o=(function(){return this.d9<4}),N.h=(function(){switch(this.d9){case 0:var e=new Cy(this.cj.bn,this.cj.c0);break;case 1:var e=new Cy(this.cj.bo,this.cj.c1);break;case 2:var e=new Cy(this.cj.bp,this.cj.c2);break;case 3:var e=new Cy(this.cj.bq,this.cj.c3);break;default:var e=eg().K.h()}return this.d9=1+this.d9|0,e}),N.cJ=(function(e){return this.d9=this.d9+e|0,this});function Gb(){this.cy=null,this.eY=!1,this.dP=null,this.cy=XE(),this.eY=!1}N=Gb.prototype=new P,N.constructor=Gb;function Kb(){}Kb.prototype=N,N.aZ=(function(e){}),N.nd=(function(){return this.eY?this.dP.iU():this.cy}),N.o3=(function(e,t){return this.eY?this.dP.dU(e,t):this.cy.aJ()<4||this.cy.bt(e)?this.cy=this.cy.dz(e,t):(this.eY=!0,this.dP===null&&(this.dP=new Eb),this.cy.on(this.dP),this.dP.dU(e,t)),this}),N.lT=(function(e){return this.eY?(this.dP.ib(e),this):fm(this,e)}),N.aX=(function(e){return this.lT(e)}),N.aT=(function(e){return this.o3(e.b7(),e.b3())}),N.aY=(function(){return this.nd()}),new I().i(Gb,`scala.collection.immutable.MapBuilderImpl`,{g6:1,a7:1,L:1,I:1,G:1});function qb(){this.cU=null,H_(this,Fb())}N=qb.prototype=new W_,N.constructor=qb;function Jb(){}Jb.prototype=N,N.mH=(function(e){return OE(e)?e:U_.prototype.fq.call(this,e)}),N.as=(function(e){return this.mH(e)}),N.fq=(function(e){return this.mH(e)}),new I().i(qb,`scala.collection.immutable.Seq$`,{gd:1,at:1,V:1,E:1,a:1});var Yb;function Xb(){return Yb||=new qb,Yb}function Zb(){try{return jp().na(mu().iy(`scala.collection.immutable.Vector.defaultApplyPreferredMaxLength`,`250`),10)}catch(e){throw e}}function Qb(){this.lr=0,this.ls=null,ex=this,this.lr=Zb(),this.ls=new xC(RO(),0,0)}N=Qb.prototype=new P,N.constructor=Qb;function $b(){}$b.prototype=N,N.cH=(function(e){return this.iu(e)}),N.iu=(function(e){if(e instanceof kD)return e;var t=e.B();if(t===0)return RO();if(t>0&&t<=32){matchEnd5:{var n;if(e instanceof qD){var r=e.ae().aI();if(r!==null&&r===L.l()){var n=e.cg;break matchEnd5}}if(oC(e)){var i=new F(t);e.bf(i,0,2147483647);var n=i;break matchEnd5}var a=new F(t);e.m().bf(a,0,2147483647);var n=a}return new OO(n)}else return new lx().lU(e).ne()}),N.aU=(function(){return new lx}),N.as=(function(e){return this.iu(e)}),new I().i(Qb,`scala.collection.immutable.Vector$`,{gk:1,ah:1,V:1,E:1,a:1});var ex;function tx(){return ex||=new Qb,ex}function nx(e){var t=null,n=null;if(e.N>=6){t=e.aC;var r=e.I>>>25|0;if(r>0){var i=t,a=t,o=64-r|0;i.x(r,a,0,o)}var s=e.I%33554432|0;e.D=e.D-(e.I-s|0)|0,e.I=s,e.D>>>25|0||(e.N=5),n=t,t=t.a[0]}if(e.N>=5){t===null&&(t=e.U);var c=31&(e.I>>>20|0);if(e.N===5){if(c>0){var l=t,u=t,d=32-c|0;l.x(c,u,0,d)}e.U=t;var f=e.I%1048576|0;e.D=e.D-(e.I-f|0)|0,e.I=f,e.D>>>20|0||(e.N=4)}else c>0&&(t=B().a5(t,c,32)),n.a[0]=t;n=t,t=t.a[0]}if(e.N>=4){t===null&&(t=e.O);var p=31&(e.I>>>15|0);if(e.N===4){if(p>0){var m=t,h=t,g=32-p|0;m.x(p,h,0,g)}e.O=t;var _=e.I%32768|0;e.D=e.D-(e.I-_|0)|0,e.I=_,e.D>>>15|0||(e.N=3)}else p>0&&(t=B().a5(t,p,32)),n.a[0]=t;n=t,t=t.a[0]}if(e.N>=3){t===null&&(t=e.L);var v=31&(e.I>>>10|0);if(e.N===3){if(v>0){var y=t,ee=t,te=32-v|0;y.x(v,ee,0,te)}e.L=t;var ne=e.I%1024|0;e.D=e.D-(e.I-ne|0)|0,e.I=ne,e.D>>>10|0||(e.N=2)}else v>0&&(t=B().a5(t,v,32)),n.a[0]=t;n=t,t=t.a[0]}if(e.N>=2){t===null&&(t=e.H);var b=31&(e.I>>>5|0);if(e.N===2){if(b>0){var x=t,S=t,re=32-b|0;x.x(b,S,0,re)}e.H=t;var ie=e.I%32|0;e.D=e.D-(e.I-ie|0)|0,e.I=ie,e.D>>>5|0||(e.N=1)}else b>0&&(t=B().a5(t,b,32)),n.a[0]=t;n=t,t=t.a[0]}if(e.N>=1){t===null&&(t=e.R);var ae=31&e.I;if(e.N===1){if(ae>0){var oe=t,C=t,se=32-ae|0;oe.x(ae,C,0,se)}e.R=t,e.M=e.M-e.I|0,e.I=0}else ae>0&&(t=B().a5(t,ae,32)),n.a[0]=t}e.g8=!1}function rx(e,t){var n=t.a.length;if(n>0){e.M===32&&ox(e);var r=32-e.M|0,i=r<n?r:n,a=n-i|0,o=e.R,s=e.M;if(t.x(0,o,s,i),e.M=e.M+i|0,a>0){ox(e);var c=e.R;t.x(i,c,0,a),e.M=e.M+a|0}}}function ix(e,t,n){if(t.a.length!==0){e.M===32&&ox(e);var r=t.a.length;switch(n){case 2:var i=31&((1024-e.D|0)>>>5|0),a=i<r?i:r,o=r-a|0,s=31&(e.D>>>5|0),c=e.H;if(t.x(0,c,s,a),sx(e,a<<5),o>0){var l=e.H;t.x(a,l,0,o),sx(e,o<<5)}break;case 3:if(e.D%1024|0){var u=(t=>{ix(e,t,2)}),d=t.a.length,f=0;if(t!==null)for(;f<d;){var p=t.a[f];u(p),f=1+f|0}else if(t instanceof eo)for(;f<d;){var m=t.a[f];u(m),f=1+f|0}else if(t instanceof ro)for(;f<d;){var h=t.a[f];u(h),f=1+f|0}else if(t instanceof to)for(;f<d;){var g=t.a[f],_=g.p,v=g.t;u(new V(_,v)),f=1+f|0}else if(t instanceof no)for(;f<d;){var y=t.a[f];u(y),f=1+f|0}else if(t instanceof Za)for(;f<d;){var ee=t.a[f];u(Wa(ee)),f=1+f|0}else if(t instanceof Qa)for(;f<d;){var te=t.a[f];u(te),f=1+f|0}else if(t instanceof $a)for(;f<d;){var ne=t.a[f];u(ne),f=1+f|0}else if(t instanceof Xa)for(;f<d;){var b=t.a[f];u(b),f=1+f|0}else throw new vy(t);return}var x=31&((32768-e.D|0)>>>10|0),S=x<r?x:r,re=r-S|0,ie=31&(e.D>>>10|0),ae=e.L;if(t.x(0,ae,ie,S),sx(e,S<<10),re>0){var oe=e.L;t.x(S,oe,0,re),sx(e,re<<10)}break;case 4:if(e.D%32768|0){var C=(t=>{ix(e,t,3)}),se=t.a.length,w=0;if(t!==null)for(;w<se;){var ce=t.a[w];C(ce),w=1+w|0}else if(t instanceof eo)for(;w<se;){var le=t.a[w];C(le),w=1+w|0}else if(t instanceof ro)for(;w<se;){var ue=t.a[w];C(ue),w=1+w|0}else if(t instanceof to)for(;w<se;){var de=t.a[w],fe=de.p,pe=de.t;C(new V(fe,pe)),w=1+w|0}else if(t instanceof no)for(;w<se;){var me=t.a[w];C(me),w=1+w|0}else if(t instanceof Za)for(;w<se;){var he=t.a[w];C(Wa(he)),w=1+w|0}else if(t instanceof Qa)for(;w<se;){var ge=t.a[w];C(ge),w=1+w|0}else if(t instanceof $a)for(;w<se;){var _e=t.a[w];C(_e),w=1+w|0}else if(t instanceof Xa)for(;w<se;){var ve=t.a[w];C(ve),w=1+w|0}else throw new vy(t);return}var ye=31&((1048576-e.D|0)>>>15|0),be=ye<r?ye:r,xe=r-be|0,Se=31&(e.D>>>15|0),Ce=e.O;if(t.x(0,Ce,Se,be),sx(e,be<<15),xe>0){var we=e.O;t.x(be,we,0,xe),sx(e,xe<<15)}break;case 5:if(e.D%1048576|0){var T=(t=>{ix(e,t,4)}),Te=t.a.length,E=0;if(t!==null)for(;E<Te;){var Ee=t.a[E];T(Ee),E=1+E|0}else if(t instanceof eo)for(;E<Te;){var De=t.a[E];T(De),E=1+E|0}else if(t instanceof ro)for(;E<Te;){var Oe=t.a[E];T(Oe),E=1+E|0}else if(t instanceof to)for(;E<Te;){var ke=t.a[E],Ae=ke.p,je=ke.t;T(new V(Ae,je)),E=1+E|0}else if(t instanceof no)for(;E<Te;){var Me=t.a[E];T(Me),E=1+E|0}else if(t instanceof Za)for(;E<Te;){var Ne=t.a[E];T(Wa(Ne)),E=1+E|0}else if(t instanceof Qa)for(;E<Te;){var Pe=t.a[E];T(Pe),E=1+E|0}else if(t instanceof $a)for(;E<Te;){var Fe=t.a[E];T(Fe),E=1+E|0}else if(t instanceof Xa)for(;E<Te;){var Ie=t.a[E];T(Ie),E=1+E|0}else throw new vy(t);return}var Le=31&((33554432-e.D|0)>>>20|0),Re=Le<r?Le:r,ze=r-Re|0,Be=31&(e.D>>>20|0),Ve=e.U;if(t.x(0,Ve,Be,Re),sx(e,Re<<20),ze>0){var He=e.U;t.x(Re,He,0,ze),sx(e,ze<<20)}break;case 6:if(e.D%33554432|0){var Ue=(t=>{ix(e,t,5)}),D=t.a.length,O=0;if(t!==null)for(;O<D;){var We=t.a[O];Ue(We),O=1+O|0}else if(t instanceof eo)for(;O<D;){var Ge=t.a[O];Ue(Ge),O=1+O|0}else if(t instanceof ro)for(;O<D;){var k=t.a[O];Ue(k),O=1+O|0}else if(t instanceof to)for(;O<D;){var Ke=t.a[O],qe=Ke.p,Je=Ke.t;Ue(new V(qe,Je)),O=1+O|0}else if(t instanceof no)for(;O<D;){var Ye=t.a[O];Ue(Ye),O=1+O|0}else if(t instanceof Za)for(;O<D;){var Xe=t.a[O];Ue(Wa(Xe)),O=1+O|0}else if(t instanceof Qa)for(;O<D;){var Ze=t.a[O];Ue(Ze),O=1+O|0}else if(t instanceof $a)for(;O<D;){var Qe=t.a[O];Ue(Qe),O=1+O|0}else if(t instanceof Xa)for(;O<D;){var A=t.a[O];Ue(A),O=1+O|0}else throw new vy(t);return}var $e=e.D>>>25|0;if(($e+r|0)>64)throw Qv(new ey,`exceeding 2^31 elements`);var et=e.aC;t.x(0,et,$e,r),sx(e,r<<25);break;default:throw new vy(n)}}}function ax(e,t){for(var n=t.cq(),r=0;r<n;){var i=t.cp(r),a=r,o=n/2|0,s=a-o|0,c=(1+o|0)-(s<0?-s|0:s)|0;c===1?rx(e,i):e.M===32||e.M===0?ix(e,i,c):U().iq(-2+c|0,i,new X((t=>{rx(e,t)}))),r=1+r|0}return e}function ox(e){var t=32+e.D|0,n=t^e.D;e.D=t,e.M=0,cx(e,t,n)}function sx(e,t){if(t>0){var n=e.D+t|0,r=n^e.D;e.D=n,e.M=0,cx(e,n,r)}}function cx(e,t,n){if(n<=0)throw Qv(new ey,`advance1(`+t+`, `+n+`): a1=`+e.R+`, a2=`+e.H+`, a3=`+e.L+`, a4=`+e.O+`, a5=`+e.U+`, a6=`+e.aC+`, depth=`+e.N);n<1024?(e.N<=1&&(e.H=new(L.r().r()).C(32),e.H.a[0]=e.R,e.N=2),e.R=new F(32),e.H.a[31&(t>>>5|0)]=e.R):n<32768?(e.N<=2&&(e.L=new(L.r().r().r()).C(32),e.L.a[0]=e.H,e.N=3),e.R=new F(32),e.H=new(L.r().r()).C(32),e.H.a[31&(t>>>5|0)]=e.R,e.L.a[31&(t>>>10|0)]=e.H):n<1048576?(e.N<=3&&(e.O=new(L.r().r().r().r()).C(32),e.O.a[0]=e.L,e.N=4),e.R=new F(32),e.H=new(L.r().r()).C(32),e.L=new(L.r().r().r()).C(32),e.H.a[31&(t>>>5|0)]=e.R,e.L.a[31&(t>>>10|0)]=e.H,e.O.a[31&(t>>>15|0)]=e.L):n<33554432?(e.N<=4&&(e.U=new(L.r().r().r().r().r()).C(32),e.U.a[0]=e.O,e.N=5),e.R=new F(32),e.H=new(L.r().r()).C(32),e.L=new(L.r().r().r()).C(32),e.O=new(L.r().r().r().r()).C(32),e.H.a[31&(t>>>5|0)]=e.R,e.L.a[31&(t>>>10|0)]=e.H,e.O.a[31&(t>>>15|0)]=e.L,e.U.a[31&(t>>>20|0)]=e.O):(e.N<=5&&(e.aC=new(L.r().r().r().r().r().r()).C(64),e.aC.a[0]=e.U,e.N=6),e.R=new F(32),e.H=new(L.r().r()).C(32),e.L=new(L.r().r().r()).C(32),e.O=new(L.r().r().r().r()).C(32),e.U=new(L.r().r().r().r().r()).C(32),e.H.a[31&(t>>>5|0)]=e.R,e.L.a[31&(t>>>10|0)]=e.H,e.O.a[31&(t>>>15|0)]=e.L,e.U.a[31&(t>>>20|0)]=e.O,e.aC.a[t>>>25|0]=e.U)}function lx(){this.aC=null,this.U=null,this.O=null,this.L=null,this.H=null,this.R=null,this.M=0,this.D=0,this.I=0,this.g8=!1,this.N=0,this.R=new F(32),this.M=0,this.D=0,this.I=0,this.g8=!1,this.N=1}N=lx.prototype=new P,N.constructor=lx;function ux(){}ux.prototype=N,N.aZ=(function(e){}),N.pm=(function(e){var t=e.cq();switch(t){case 0:break;case 1:this.N=1;var n=e.e.a.length;this.M=31&n,this.D=n-this.M|0;var r=e.e;this.R=r.a.length===32?r:B().a5(r,0,32);break;case 3:var i=e.b6,a=e.j;this.R=a.a.length===32?a:B().a5(a,0,32),this.N=2,this.I=32-e.bs|0;var o=e.l+this.I|0;this.M=31&o,this.D=o-this.M|0,this.H=new(L.r().r()).C(32),this.H.a[0]=e.e;var s=this.H,c=i.a.length;i.x(0,s,1,c),this.H.a[1+i.a.length|0]=this.R;break;case 5:var l=e.aN,u=e.aO,d=e.j;this.R=d.a.length===32?d:B().a5(d,0,32),this.N=3,this.I=1024-e.b2|0;var f=e.l+this.I|0;this.M=31&f,this.D=f-this.M|0,this.L=new(L.r().r().r()).C(32),this.L.a[0]=U().cm(e.e,e.bd);var p=this.L,m=l.a.length;l.x(0,p,1,m),this.H=B().W(u,32),this.L.a[1+l.a.length|0]=this.H,this.H.a[u.a.length]=this.R;break;case 7:var h=e.av,g=e.ax,_=e.aw,v=e.j;this.R=v.a.length===32?v:B().a5(v,0,32),this.N=4,this.I=32768-e.aH|0;var y=e.l+this.I|0;this.M=31&y,this.D=y-this.M|0,this.O=new(L.r().r().r().r()).C(32),this.O.a[0]=U().cm(U().cm(e.e,e.aV),e.aW);var ee=this.O,te=h.a.length;h.x(0,ee,1,te),this.L=B().W(g,32),this.H=B().W(_,32),this.O.a[1+h.a.length|0]=this.L,this.L.a[g.a.length]=this.H,this.H.a[_.a.length]=this.R;break;case 9:var ne=e.a6,b=e.a9,x=e.a8,S=e.a7,re=e.j;this.R=re.a.length===32?re:B().a5(re,0,32),this.N=5,this.I=1048576-e.an|0;var ie=e.l+this.I|0;this.M=31&ie,this.D=ie-this.M|0,this.U=new(L.r().r().r().r().r()).C(32),this.U.a[0]=U().cm(U().cm(U().cm(e.e,e.az),e.aA),e.aB);var ae=this.U,oe=ne.a.length;ne.x(0,ae,1,oe),this.O=B().W(b,32),this.L=B().W(x,32),this.H=B().W(S,32),this.U.a[1+ne.a.length|0]=this.O,this.O.a[b.a.length]=this.L,this.L.a[x.a.length]=this.H,this.H.a[S.a.length]=this.R;break;case 11:var C=e.Y,se=e.a2,w=e.a1,ce=e.a0,le=e.Z,ue=e.j;this.R=ue.a.length===32?ue:B().a5(ue,0,32),this.N=6,this.I=33554432-e.ah|0;var de=e.l+this.I|0;this.M=31&de,this.D=de-this.M|0,this.aC=new(L.r().r().r().r().r().r()).C(64),this.aC.a[0]=U().cm(U().cm(U().cm(U().cm(e.e,e.ao),e.ap),e.aq),e.ar);var fe=this.aC,pe=C.a.length;C.x(0,fe,1,pe),this.U=B().W(se,32),this.O=B().W(w,32),this.L=B().W(ce,32),this.H=B().W(le,32),this.aC.a[1+C.a.length|0]=this.U,this.U.a[se.a.length]=this.O,this.O.a[w.a.length]=this.L,this.L.a[ce.a.length]=this.H,this.H.a[le.a.length]=this.R;break;default:throw new vy(t)}return this.M===0&&this.D>0&&(this.M=32,this.D=-32+this.D|0),this}),N.o6=(function(e){return this.M===32&&ox(this),this.R.a[this.M]=e,this.M=1+this.M|0,this}),N.lU=(function(e){return e instanceof kD?this.M===0&&this.D===0&&!this.g8?this.pm(e):ax(this,e):fm(this,e)}),N.ne=(function(){this.g8&&nx(this);var e=this.M+this.D|0,t=e-this.I|0;if(t===0)return tx(),RO();if(e<0)throw ny(new ry,`Vector cannot have negative size `+e);if(e<=32){var n=this.R;return new OO(n.a.length===t?n:B().W(n,t))}else if(e<=1024){var r=31&(-1+e|0),i=(-1+e|0)>>>5|0,a=B().a5(this.H,1,i),o=this.H.a[0],s=this.H.a[i],c=1+r|0,l=s.a.length===c?s:B().W(s,c);return new zO(o,32-this.I|0,a,l,t)}else if(e<=32768){var u=31&(-1+e|0),d=31&((-1+e|0)>>>5|0),f=(-1+e|0)>>>10|0,p=B().a5(this.L,1,f),m=this.L.a[0],h=B().a5(m,1,m.a.length),g=this.L.a[0].a[0],_=B().W(this.L.a[f],d),v=this.L.a[f].a[d],y=1+u|0,ee=v.a.length===y?v:B().W(v,y),te=g.a.length;return new VO(g,te,h,te+(h.a.length<<5)|0,p,_,ee,t)}else if(e<=1048576){var ne=31&(-1+e|0),b=31&((-1+e|0)>>>5|0),x=31&((-1+e|0)>>>10|0),S=(-1+e|0)>>>15|0,re=B().a5(this.O,1,S),ie=this.O.a[0],ae=B().a5(ie,1,ie.a.length),oe=this.O.a[0].a[0],C=B().a5(oe,1,oe.a.length),se=this.O.a[0].a[0].a[0],w=B().W(this.O.a[S],x),ce=B().W(this.O.a[S].a[x],b),le=this.O.a[S].a[x].a[b],ue=1+ne|0,de=le.a.length===ue?le:B().W(le,ue),fe=se.a.length,pe=fe+(C.a.length<<5)|0;return new UO(se,fe,C,pe,ae,pe+(ae.a.length<<10)|0,re,w,ce,de,t)}else if(e<=33554432){var me=31&(-1+e|0),he=31&((-1+e|0)>>>5|0),ge=31&((-1+e|0)>>>10|0),_e=31&((-1+e|0)>>>15|0),ve=(-1+e|0)>>>20|0,ye=B().a5(this.U,1,ve),be=this.U.a[0],xe=B().a5(be,1,be.a.length),Se=this.U.a[0].a[0],Ce=B().a5(Se,1,Se.a.length),we=this.U.a[0].a[0].a[0],T=B().a5(we,1,we.a.length),Te=this.U.a[0].a[0].a[0].a[0],E=B().W(this.U.a[ve],_e),Ee=B().W(this.U.a[ve].a[_e],ge),De=B().W(this.U.a[ve].a[_e].a[ge],he),Oe=this.U.a[ve].a[_e].a[ge].a[he],ke=1+me|0,Ae=Oe.a.length===ke?Oe:B().W(Oe,ke),je=Te.a.length,Me=je+(T.a.length<<5)|0,Ne=Me+(Ce.a.length<<10)|0;return new GO(Te,je,T,Me,Ce,Ne,xe,Ne+(xe.a.length<<15)|0,ye,E,Ee,De,Ae,t)}else{var Pe=31&(-1+e|0),Fe=31&((-1+e|0)>>>5|0),Ie=31&((-1+e|0)>>>10|0),Le=31&((-1+e|0)>>>15|0),Re=31&((-1+e|0)>>>20|0),ze=(-1+e|0)>>>25|0,Be=B().a5(this.aC,1,ze),Ve=this.aC.a[0],He=B().a5(Ve,1,Ve.a.length),Ue=this.aC.a[0].a[0],D=B().a5(Ue,1,Ue.a.length),O=this.aC.a[0].a[0].a[0],We=B().a5(O,1,O.a.length),Ge=this.aC.a[0].a[0].a[0].a[0],k=B().a5(Ge,1,Ge.a.length),Ke=this.aC.a[0].a[0].a[0].a[0].a[0],qe=B().W(this.aC.a[ze],Re),Je=B().W(this.aC.a[ze].a[Re],Le),Ye=B().W(this.aC.a[ze].a[Re].a[Le],Ie),Xe=B().W(this.aC.a[ze].a[Re].a[Le].a[Ie],Fe),Ze=this.aC.a[ze].a[Re].a[Le].a[Ie].a[Fe],Qe=1+Pe|0,A=Ze.a.length===Qe?Ze:B().W(Ze,Qe),$e=Ke.a.length,et=$e+(k.a.length<<5)|0,tt=et+(We.a.length<<10)|0,nt=tt+(D.a.length<<15)|0;return new qO(Ke,$e,k,et,We,tt,D,nt,He,nt+(He.a.length<<20)|0,Be,qe,Je,Ye,Xe,A,t)}}),N.C=(function(){return`VectorBuilder(len1=`+this.M+`, lenRest=`+this.D+`, offset=`+this.I+`, depth=`+this.N+`)`}),N.aY=(function(){return this.ne()}),N.aX=(function(e){return this.lU(e)}),N.aT=(function(e){return this.o6(e)}),new I().i(lx,`scala.collection.immutable.VectorBuilder`,{gs:1,a7:1,L:1,I:1,G:1});function dx(){this.lu=null,px=this,this.lu=new F(0)}N=dx.prototype=new P,N.constructor=dx;function fx(){}fx.prototype=N,N.cH=(function(e){return this.mI(e)}),N.mI=(function(e){var t=e.B();if(t>=0){var n=this.nh(this.lu,0,t),r=Oy(e)?e.bf(n,0,2147483647):e.m().bf(n,0,2147483647);if(r!==t)throw new ty(`Copied `+r+` of `+t);return rk(new ak,n,t)}else return ik(new ak).lV(e)}),N.aU=(function(){return new hx}),N.qi=(function(e,t){if(t<0)throw w_(new T_,`Overflow while resizing array of array-backed collection. Requested length: `+t+`; current length: `+e+`; increase: `+(t-e|0));if(t<=e)return-1;if(t>2147483639)throw w_(new T_,`Array of array-backed collection exceeds VM length limit of 2147483639. Requested length: `+t+`; current length: `+e);if(e>1073741819)return 2147483639;var n=e<<1,r=n>16?n:16;return t>r?t:r}),N.nh=(function(e,t,n){var r=this.qi(e.a.length,n);if(r<0)return e;var i=new F(r);return e.x(0,i,0,t),i}),N.as=(function(e){return this.mI(e)}),new I().i(dx,`scala.collection.mutable.ArrayBuffer$`,{gx:1,ah:1,V:1,E:1,a:1});var px;function mx(){return px||=new dx,px}function hx(){this.dl=null,sv(this,(mx(),ik(new ak)))}N=hx.prototype=new lv,N.constructor=hx;function gx(){}gx.prototype=N,N.aZ=(function(e){this.dl.aZ(e)}),new I().i(hx,`scala.collection.mutable.ArrayBuffer$$anon$1`,{gy:1,aS:1,L:1,I:1,G:1});function _x(){this.cU=null,H_(this,qx())}N=_x.prototype=new W_,N.constructor=_x;function vx(){}vx.prototype=N,new I().i(_x,`scala.collection.mutable.Buffer$`,{gD:1,at:1,V:1,E:1,a:1});var yx;function bx(){return yx||=new _x,yx}function xx(e,t){this.dl=null,sv(this,SD(new wD,e,t))}N=xx.prototype=new lv,N.constructor=xx;function Sx(){}Sx.prototype=N,N.aZ=(function(e){this.dl.aZ(e)}),new I().i(xx,`scala.collection.mutable.HashSet$$anon$4`,{gL:1,aS:1,L:1,I:1,G:1});function Cx(e,t){return e.f2=t,e.dn=0,e.cC=null,e.f3=t.aP.a.length,e}function wx(){this.dn=0,this.cC=null,this.f3=0,this.f2=null}N=wx.prototype=new L_,N.constructor=wx;function Tx(){}Tx.prototype=N,N.o=(function(){if(this.cC!==null)return!0;for(;this.dn<this.f3;){var e=this.f2.aP.a[this.dn];if(this.dn=1+this.dn|0,e!==null)return this.cC=e,!0}return!1}),N.h=(function(){if(this.o()){var e=this.ip(this.cC);return this.cC=this.cC.aQ,e}else return eg().K.h()});function Ex(e,t){return e.f4=t,e}function Dx(){this.f4=null}N=Dx.prototype=new P,N.constructor=Dx;function Ox(){}Ox.prototype=N,N.aZ=(function(e){}),N.aX=(function(e){return fm(this,e)}),N.aY=(function(){return this.f4});function kx(){this.cU=null,H_(this,mx())}N=kx.prototype=new W_,N.constructor=kx;function Ax(){}Ax.prototype=N,new I().i(kx,`scala.collection.mutable.IndexedSeq$`,{gO:1,at:1,V:1,E:1,a:1});var jx;function Mx(){return jx||=new kx,jx}function Nx(){}N=Nx.prototype=new P,N.constructor=Nx;function Px(){}Px.prototype=N,N.cH=(function(e){return new tk().gv(e)}),N.aU=(function(){return sv(new cv,new tk)}),N.as=(function(e){return new tk().gv(e)}),new I().i(Nx,`scala.collection.mutable.ListBuffer$`,{gR:1,ah:1,V:1,E:1,a:1});var Fx;function Ix(){return Fx||=new Nx,Fx}function Lx(e,t){this.i4=null,this.lE=null,this.lD=0,this.i4=e,this.lE=t,this.lD=t.a4()|0}N=Lx.prototype=new L_,N.constructor=Lx;function Rx(){}Rx.prototype=N,N.o=(function(){return Xd().mj(this.lD,this.lE.a4()|0,`mutation occurred during iteration`),this.i4.o()}),N.h=(function(){return this.i4.h()}),new I().i(Lx,`scala.collection.mutable.MutationTracker$CheckedIterator`,{gT:1,p:1,o:1,b:1,c:1});function zx(e,t){return Vx(t)?e.aI()===t.aI():!1}function Bx(e){return e.Q.Z?`Array[`+Bx(e.Q.Q())+`]`:e.Q.N}function Vx(e){return!!(e&&e.$classData&&e.$classData.n.F)}function Hx(e){this.f6=0,this.lI=0,this.lJ=null,this.lJ=e,this.f6=0,this.lI=e.bu()}N=Hx.prototype=new L_,N.constructor=Hx;function Ux(){}Ux.prototype=N,N.o=(function(){return this.f6<this.lI}),N.h=(function(){var e=this.lJ.bv(this.f6);return this.f6=1+this.f6|0,e}),new I().i(Hx,`scala.runtime.ScalaRunTime$$anon$1`,{hz:1,p:1,o:1,b:1,c:1});function Wx(){}N=Wx.prototype=new P,N.constructor=Wx;function Gx(){}Gx.prototype=N,N.cH=(function(e){return this.mJ(e)}),N.aU=(function(){return ck(new lk)}),N.mJ=(function(e){return fm(ck(new lk),e).aY()}),N.as=(function(e){return this.mJ(e)}),new I().i(Wx,`scala.scalajs.js.WrappedArray$`,{hF:1,ah:1,V:1,E:1,a:1});var Kx;function qx(){return Kx||=new Wx,Kx}function Jx(){}N=Jx.prototype=new P,N.constructor=Jx;function Yx(){}Yx.prototype=N,N.cH=(function(e){return this.iv(e)}),N.iv=(function(e){return this.aU().aX(e).aY()}),N.aU=(function(){return new av(sk(new lk,[]),new X((e=>new fD(e.dp))))}),N.as=(function(e){return this.iv(e)}),new I().i(Jx,`scala.scalajs.runtime.WrappedVarArgs$`,{hR:1,ah:1,V:1,E:1,a:1});var Xx;function Zx(){return Xx||=new Jx,Xx}function Qx(e){this.f7=null,this.f7=e}N=Qx.prototype=new vv,N.constructor=Qx;function $x(){}$x.prototype=N,N.mQ=(function(){return!0}),N.mR=(function(){return!1}),N.iG=(function(e){return this}),N.cK=(function(e,t){return e.d(this.f7)}),N.bw=(function(){return`Failure`}),N.bu=(function(){return 1}),N.bv=(function(e){return e===0?this.f7:K().dY(e)}),N.bW=(function(){return new Hx(this)}),N.y=(function(){return q().dx(this,-889275714,!1)}),N.C=(function(){return G().i9(this)}),N.r=(function(e){if(this===e)return!0;if(e instanceof Qx){var t=this.f7,n=e.f7;return t===null?n===null:t.r(n)}else return!1}),new I().i(Qx,`scala.util.Failure`,{cl:1,cn:1,U:1,d:1,a:1});function eS(e){this.eo=null,this.eo=e}N=eS.prototype=new vv,N.constructor=eS;function tS(){}tS.prototype=N,N.mQ=(function(){return!1}),N.mR=(function(){return!0}),N.iG=(function(e){try{return new eS(e.d(this.eo))}catch(e){var t=e instanceof Up?e:new mw(e);if(Df().gi(t))return new Qx(t);throw t instanceof mw?t.aS:t}}),N.cK=(function(e,t){try{return t.d(this.eo)}catch(t){var n=t instanceof Up?t:new mw(t);if(Df().gi(n))return e.d(n);throw n instanceof mw?n.aS:n}}),N.bw=(function(){return`Success`}),N.bu=(function(){return 1}),N.bv=(function(e){return e===0?this.eo:K().dY(e)}),N.bW=(function(){return new Hx(this)}),N.y=(function(){return q().dx(this,-889275714,!1)}),N.C=(function(){return G().i9(this)}),N.r=(function(e){return this===e||e instanceof eS&&W().s(this.eo,e.eo)}),new I().i(eS,`scala.util.Success`,{cm:1,cn:1,U:1,d:1,a:1});var nS=class e extends Im{constructor(e,t){super(),this.eD=null,this.eC=null,this.eD=e,this.eC=t,Hp(this,`ErrorHandlingError: `+Bm().et(e)+`; cause: `+Bm().et(t),null,!0,!0),this.mO(t)}bW(){return new xy(this)}y(){return q().dx(this,-889275714,!1)}r(t){if(this===t)return!0;if(t instanceof e){var n=this.eD,r=t.eD;if(n===null?r===null:n.r(r)){var i=this.eC,a=t.eC;return i===null?a===null:i.r(a)}else return!1}else return!1}bu(){return 2}bw(){return`ErrorHandlingError`}bv(e){if(e===0)return this.eD;if(e===1)return this.eC;throw ny(new ry,``+e)}C(){return`ErrorHandlingError: `+this.eD+`; cause: `+this.eC}};new I().i(nS,`com.raquo.airstream.core.AirstreamError$ErrorHandlingError`,{aU:1,ap:1,u:1,a:1,d:1,U:1});var rS=class e extends Im{constructor(e){super(),this.eE=null,this.eE=e,Hp(this,`ObserverError: `+Bm().et(e),null,!0,!0)}bW(){return new xy(this)}y(){return q().dx(this,-889275714,!1)}r(t){if(this===t)return!0;if(t instanceof e){var n=this.eE,r=t.eE;return n===null?r===null:n.r(r)}else return!1}bu(){return 1}bw(){return`ObserverError`}bv(e){if(e===0)return this.eE;throw ny(new ry,``+e)}C(){return`ObserverError: `+this.eE}};new I().i(rS,`com.raquo.airstream.core.AirstreamError$ObserverError`,{aV:1,ap:1,u:1,a:1,d:1,U:1});var iS=class e extends Im{constructor(e,t){super(),this.eG=null,this.eF=null,this.eG=e,this.eF=t,Hp(this,`ObserverErrorHandlingError: `+Bm().et(e)+`; cause: `+Bm().et(t),null,!0,!0),this.mO(t)}bW(){return new xy(this)}y(){return q().dx(this,-889275714,!1)}r(t){if(this===t)return!0;if(t instanceof e){var n=this.eG,r=t.eG;if(n===null?r===null:n.r(r)){var i=this.eF,a=t.eF;return i===null?a===null:i.r(a)}else return!1}else return!1}bu(){return 2}bw(){return`ObserverErrorHandlingError`}bv(e){if(e===0)return this.eG;if(e===1)return this.eF;throw ny(new ry,``+e)}C(){return`ObserverErrorHandlingError: `+this.eG+`; cause: `+this.eF}};new I().i(iS,`com.raquo.airstream.core.AirstreamError$ObserverErrorHandlingError`,{aW:1,ap:1,u:1,a:1,d:1,U:1});var aS=class e extends Im{constructor(e,t){super(),this.e3=null,this.e2=0,this.e3=e,this.e2=t,Hp(this,`Transaction depth exceeded maxDepth = `+t+`: Execution of `+e+" aborted. See `Transaction.maxDepth`.",null,!0,!0)}bW(){return new xy(this)}y(){var e=-889275714;return e=K().f(e,TS(`TransactionDepthExceeded`)),e=K().f(e,K().P(this.e3)),e=K().f(e,this.e2),K().E(e,2)}r(t){return this===t?!0:t instanceof e&&this.e2===t.e2?this.e3===t.e3:!1}bu(){return 2}bw(){return`TransactionDepthExceeded`}bv(e){if(e===0)return this.e3;if(e===1)return this.e2;throw ny(new ry,``+e)}C(){return`TransactionDepthExceeded: `+this.e3+`; maxDepth: `+this.e2}};new I().i(aS,`com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded`,{aX:1,ap:1,u:1,a:1,d:1,U:1});function oS(e){e.gx()}function sS(e){this.jp=null,this.fK=null,this.gM=null,this.gL=null,this.gN=null,this.jp=void 0,kv(this),this.gM=e,this.gL=new qT(this.gM,new uv((()=>go(this)))),this.gN=this.gL}N=sS.prototype=new P,N.constructor=sS;function cS(){}cS.prototype=N,N.fw=(function(){return this.jp}),N.fn=(function(){return ho(this)}),N.C=(function(){return go(this)}),N.gw=(function(){return this.gN}),N.iY=(function(){return this.fK}),N.qm=(function(e,t){this.gM=e,yw(this.gL,e,t)}),new I().i(sS,`com.raquo.airstream.state.SourceVar`,{cI:1,ay:1,az:1,aq:1,ac:1,cK:1});function lS(e,t){var n=e.hf;n===void 0?e.hf=df().oh(ws().b4(G().b(new(OS.r()).C([t])))):n.push(t)|0}function uS(e,t){var n=e.kg;if(n!==void 0){_return:{for(var r=n.length|0,i=0;i<r;){if(n[i].rq()===t){var a=i;break _return}i=1+i|0}var a=-1}return a>=0}else return!1}function dS(e,t){this.eH=null,this.bK=null,this.he=null,this.dF=null,this.eI=null,this.hg=null,this.bA=null,this.kg=null,this.hf=null,this.hg=e,this.bA=t,this.eH=NS(),up(this),Lv(this),this.kg=void 0,this.hf=void 0}N=dS.prototype=new P,N.constructor=dS;function fS(){}fS.prototype=N,N.ii=(function(){return this.eH}),N.b8=(function(e){rl().ep(e,this,void 0)}),N.gm=(function(){return this.bK}),N.mn=(function(e){this.bK=e}),N.eB=(function(e){Hv(this,e)}),N.ew=(function(e){Uv(this,e)}),N.ou=(function(){if(Ms().mP(this.bA)){var e=this.hg;return e instanceof ch?e.oc():void 0}else return ic().k1}),N.po=(function(e){var t=this.ou();return t!==void 0&&Os().pj(t,e,0)}),N.pT=(function(e){if(e instanceof Jf&&this.po(e.dD)){if(uS(this,e.dD))throw Mh(new Nh,"Can not add uncontrolled `"+e.dD+" <-- ???` to element `"+Ms().mq(this.bA)+"` that already has an input controller for `"+e.dD+"` property.");lS(this,e.dD)}}),N.C=(function(){return`ReactiveHtmlElement(`+(this.bA===null?`tag=`+this.hg.iL():this.bA.outerHTML)+`)`}),N.b9=(function(){return this.bA}),new I().i(dS,`com.raquo.laminar.nodes.ReactiveHtmlElement`,{dU:1,as:1,Q:1,aB:1,bc:1,dS:1});function pS(e,t){return Hp(e,t,null,!0,!0),e}function mS(e){return Hp(e,null,null,!0,!0),e}var hS=class extends ry{};new I().i(hS,`java.lang.ArrayIndexOutOfBoundsException`,{ee:1,aE:1,D:1,C:1,u:1,a:1});function gS(e,t){return Object.is(e,t)}function _S(e){return Al().iP(e)}var vS=new I().i(0,`java.lang.Double`,{bm:1,a8:1,a:1,a2:1,Z:1,am:1},(e=>typeof e==`number`)),yS=new I().i(0,`java.lang.Float`,{ej:1,a8:1,a:1,a2:1,Z:1,am:1},(e=>Ua(e))),bS=new I().i(0,`java.lang.Integer`,{em:1,a8:1,a:1,a2:1,Z:1,am:1},(e=>Ha(e)));function xS(e,t){return t instanceof V&&e.p===t.p&&e.t===t.t}function SS(e){return e.p^e.t}var CS=new I().i(0,`java.lang.Long`,{bo:1,a8:1,a:1,a2:1,Z:1,am:1},(e=>e instanceof V)),wS=class extends ey{constructor(e){super(),Hp(this,e,null,!0,!0)}};new I().i(wS,`java.lang.NumberFormatException`,{eu:1,bn:1,D:1,C:1,u:1,a:1});function TS(e){for(var t=0,n=1,r=-1+e.length|0;r>=0;)t=t+Math.imul(e.charCodeAt(r),n)|0,n=Math.imul(31,n),r=-1+r|0;return t}function ES(e,t){return e===t}function DS(e,t){var n=Ep().qF(t);return e.indexOf(n)|0}var OS=new I().i(0,`java.lang.String`,{bq:1,a:1,a2:1,aD:1,Z:1,am:1},(e=>typeof e==`string`)),kS=class extends ry{constructor(){super(),Hp(this,null,null,!0,!0)}};new I().i(kS,`java.lang.StringIndexOutOfBoundsException`,{eB:1,aE:1,D:1,C:1,u:1,a:1});function AS(){}N=AS.prototype=new by,N.constructor=AS;function jS(){}jS.prototype=N,N.pa=(function(){throw new dy(`None.get`)}),N.bw=(function(){return`None`}),N.bu=(function(){return 0}),N.bv=(function(e){return K().dY(e)}),N.bW=(function(){return new Hx(this)}),N.y=(function(){return 2433880}),N.C=(function(){return`None`}),N.S=(function(){this.pa()}),new I().i(AS,`scala.None$`,{f0:1,bt:1,b:1,U:1,d:1,a:1});var MS;function NS(){return MS||=new AS,MS}function PS(e){this.eP=null,this.eP=e}N=PS.prototype=new by,N.constructor=PS;function FS(){}FS.prototype=N,N.S=(function(){return this.eP}),N.bw=(function(){return`Some`}),N.bu=(function(){return 1}),N.bv=(function(e){return e===0?this.eP:K().dY(e)}),N.bW=(function(){return new Hx(this)}),N.y=(function(){return q().dx(this,-889275714,!1)}),N.C=(function(){return G().i9(this)}),N.r=(function(e){return this===e||e instanceof PS&&W().s(this.eP,e.eP)}),new I().i(PS,`scala.Some`,{bu:1,bt:1,b:1,U:1,d:1,a:1});function IS(){}N=IS.prototype=new P,N.constructor=IS;function LS(){}LS.prototype=N,N.bI=(function(){return this.bi()}),N.fr=(function(e){return this.bg().as(e)}),N.fx=(function(){return this.bg().aU()}),N.bJ=(function(e){ad(this,e)}),N.er=(function(e){return od(this,e)}),N.c=(function(){return sd(this)}),N.bf=(function(e,t,n){return cd(this,e,t,n)}),N.cl=(function(e,t,n,r){return ud(this,e,t,n,r)}),N.B=(function(){return-1}),N.es=(function(e){return this.fr(e)});function RS(e,t){return e.bB=t,e.A=0,e.bj=Du().bU(e.bB),e}function zS(){this.bB=null,this.A=0,this.bj=0}N=zS.prototype=new L_,N.constructor=zS;function BS(){}BS.prototype=N,N.B=(function(){return this.bj-this.A|0}),N.o=(function(){return this.A<this.bj}),N.h=(function(){this.A>=Du().bU(this.bB)&&eg().K.h();var e=G().dW(this.bB,this.A);return this.A=1+this.A|0,e}),N.cJ=(function(e){if(e>0){var t=this.A+e|0;if(t<0)var n=this.bj;else var r=this.bj,n=r<t?r:t;this.A=n}return this}),new I().i(zS,`scala.collection.ArrayOps$ArrayIterator`,{a0:1,p:1,o:1,b:1,c:1,a:1});function VS(e,t){return t<0?0:t>e.bC?e.bC:t}function HS(e,t){return e.hF=t,e.cr=0,e.bC=t.u(),e}function US(){this.hF=null,this.cr=0,this.bC=0}N=US.prototype=new L_,N.constructor=US;function WS(){}WS.prototype=N,N.B=(function(){return this.bC}),N.o=(function(){return this.bC>0}),N.h=(function(){if(this.bC>0){var e=this.hF.v(this.cr);return this.cr=1+this.cr|0,this.bC=-1+this.bC|0,e}else return eg().K.h()}),N.cJ=(function(e){if(e>0){this.cr=this.cr+e|0;var t=this.bC-e|0;this.bC=t<0?0:t}return this}),N.fC=(function(e,t){var n=VS(this,e),r=VS(this,t)-n|0;return this.bC=r<0?0:r,this.cr=this.cr+n|0,this}),new I().i(US,`scala.collection.IndexedSeqView$IndexedSeqViewIterator`,{bA:1,p:1,o:1,b:1,c:1,a:1});function GS(){this.f4=null,Ex(this,eg().K)}N=GS.prototype=new Ox,N.constructor=GS;function KS(){}KS.prototype=N,N.o4=(function(e){return this.f4=this.f4.gl(new jg((()=>new jy(e)))),this}),N.aT=(function(e){return this.o4(e)}),new I().i(GS,`scala.collection.Iterator$$anon$21`,{fr:1,gN:1,a7:1,L:1,I:1,G:1});function qS(e,t,n){return e.cM(t,new jg((()=>n.d(t))))}function JS(e,t){for(var n=e.m();n.o();){var r=n.h();t.cG(r.b7(),r.b3())}}function YS(e,t,n,r,i){return ud(new Fy(e.m(),new X((e=>{if(e!==null){var t=e.b7(),n=e.b3();return t+` -> `+n}else throw new vy(e)}))),t,n,r,i)}function XS(e,t){for(var n=e.fx(),r=CD(new wD),i=e.m();i.o();){var a=i.h();r.gh(t.d(a))&&n.aT(a)}return n.aY()}function ZS(e,t){var n=e.dw().aU();return n.aX(e),n.aX(t),n.aY()}function QS(e){return e.hJ||=(e.hK=new qD(new F(0)),!0),e.hK}function $S(e){return e.hJ?e.hK:QS(e)}function eC(){this.hK=null,this.hL=null,this.hJ=!1,nC=this,this.hL=new Ty(this)}N=eC.prototype=new P,N.constructor=eC;function tC(){}tC.prototype=N,N.is=(function(e,t){return e instanceof ED?e:this.j0(Qp().mF(e,t))}),N.gr=(function(e){return new av((mx(),new hx),new X((t=>rC().j0(dd(t,e)))))}),N.j0=(function(e){if(e===null)return null;if(e instanceof F)return new qD(e);if(e instanceof eo)return new UD(e);if(e instanceof ro)return new zD(e);if(e instanceof to)return new GD(e);if(e instanceof no)return new VD(e);if(e instanceof Za)return new LD(e);if(e instanceof Qa)return new FD(e);if(e instanceof $a)return new YD(e);if(e instanceof Xa)return new ND(e);if(xu(e,1))return new ZD(e);throw new vy(e)}),N.ir=(function(e,t){return this.is(e,t)}),new I().i(eC,`scala.collection.immutable.ArraySeq$`,{fI:1,bD:1,bx:1,bw:1,by:1,a:1});var nC;function rC(){return nC||=new eC,nC}function iC(e,t){for(this.bE=0,this.eU=0,this.dN=null,this.bm=0,this.cu=null,this.eV=null,ub(this,t.bb);this.o();){var n=this.dN.fs(this.bE);e.ey(e.ch,this.dN.dv(this.bE),this.dN.cN(this.bE),n,id().c7(n),0),this.bE=1+this.bE|0}}N=iC.prototype=new fb,N.constructor=iC;function aC(){}aC.prototype=N,N.iM=(function(){throw eg().K.h(),new Zv}),N.h=(function(){this.iM()}),new I().i(iC,`scala.collection.immutable.HashMapBuilder$$anon$1`,{fM:1,bQ:1,p:1,o:1,b:1,c:1});function oC(e){return!!(e&&e.$classData&&e.$classData.n.t)}function sC(e){this.d6=0,this.ei=null,Ib(this,e)}N=sC.prototype=new Rb,N.constructor=sC;function cC(){}cC.prototype=N,new I().i(sC,`scala.collection.immutable.Map$Map2$$anon$1`,{g0:1,g1:1,p:1,o:1,b:1,c:1});function lC(e){this.d8=0,this.d7=null,zb(this,e)}N=lC.prototype=new Vb,N.constructor=lC;function uC(){}uC.prototype=N,new I().i(lC,`scala.collection.immutable.Map$Map3$$anon$4`,{g2:1,g3:1,p:1,o:1,b:1,c:1});function dC(e){this.d9=0,this.cj=null,Hb(this,e)}N=dC.prototype=new Wb,N.constructor=dC;function fC(){}fC.prototype=N,new I().i(dC,`scala.collection.immutable.Map$Map4$$anon$7`,{g4:1,g5:1,p:1,o:1,b:1,c:1});function pC(e){this.d2=0,this.g5=null,this.bF=0,this.eW=null,this.eX=null,this.hS=0,this.lo=null,vb(this,e),this.hS=0}N=pC.prototype=new bb,N.constructor=pC;function mC(){}mC.prototype=N,N.y=(function(){return q().nm(this.hS,K().P(this.lo),-889275714)}),N.pJ=(function(){return this.o()||eg().K.h(),this.hS=this.g5.fs(this.d2),this.lo=this.g5.cN(this.d2),this.d2=-1+this.d2|0,this}),N.h=(function(){return this.pJ()}),new I().i(pC,`scala.collection.immutable.MapKeyValueTupleHashIterator`,{g7:1,fJ:1,p:1,o:1,b:1,c:1});function hC(e){this.bE=0,this.eU=0,this.dN=null,this.bm=0,this.cu=null,this.eV=null,ub(this,e)}N=hC.prototype=new fb,N.constructor=hC;function gC(){}gC.prototype=N,N.pI=(function(){this.o()||eg().K.h();var e=this.dN.mL(this.bE);return this.bE=1+this.bE|0,e}),N.h=(function(){return this.pI()}),new I().i(hC,`scala.collection.immutable.MapKeyValueTupleIterator`,{g8:1,bQ:1,p:1,o:1,b:1,c:1});function _C(e){e.br<=e.au&&eg().K.h(),e.db=1+e.db|0;for(var t=e.hU.cp(e.db);t.a.length===0;)e.db=1+e.db|0,t=e.hU.cp(e.db);e.eZ=e.dR;var n=e.lq,r=e.db,i=n/2|0,a=r-i|0;e.da=(1+i|0)-(a<0?-a|0:a)|0;var o=e.da;switch(o){case 1:e.aL=t;break;case 2:e.aM=t;break;case 3:e.bc=t;break;case 4:e.c4=t;break;case 5:e.dQ=t;break;case 6:e.hT=t;break;default:throw new vy(o)}e.dR=e.eZ+Math.imul(t.a.length,1<<Math.imul(5,-1+e.da|0))|0,e.dR>e.cA&&(e.dR=e.cA),e.da>1&&(e.ej=-1+(1<<Math.imul(5,e.da))|0)}function vC(e){var t=(e.au-e.br|0)+e.cA|0;if(t===e.dR&&_C(e),e.da>1){var n=t-e.eZ|0;yC(e,n,e.ej^n),e.ej=n}e.br=e.br-e.au|0;var r=e.aL.a.length,i=e.br;e.cz=r<i?r:i,e.au=0}function yC(e,t,n){n<1024?e.aL=e.aM.a[31&(t>>>5|0)]:n<32768?(e.aM=e.bc.a[31&(t>>>10|0)],e.aL=e.aM.a[0]):n<1048576?(e.bc=e.c4.a[31&(t>>>15|0)],e.aM=e.bc.a[0],e.aL=e.aM.a[0]):n<33554432?(e.c4=e.dQ.a[31&(t>>>20|0)],e.bc=e.c4.a[0],e.aM=e.bc.a[0],e.aL=e.aM.a[0]):(e.dQ=e.hT.a[t>>>25|0],e.c4=e.dQ.a[0],e.bc=e.c4.a[0],e.aM=e.bc.a[0],e.aL=e.aM.a[0])}function bC(e,t,n){n<1024?e.aL=e.aM.a[31&(t>>>5|0)]:n<32768?(e.aM=e.bc.a[31&(t>>>10|0)],e.aL=e.aM.a[31&(t>>>5|0)]):n<1048576?(e.bc=e.c4.a[31&(t>>>15|0)],e.aM=e.bc.a[31&(t>>>10|0)],e.aL=e.aM.a[31&(t>>>5|0)]):n<33554432?(e.c4=e.dQ.a[31&(t>>>20|0)],e.bc=e.c4.a[31&(t>>>15|0)],e.aM=e.bc.a[31&(t>>>10|0)],e.aL=e.aM.a[31&(t>>>5|0)]):(e.dQ=e.hT.a[t>>>25|0],e.c4=e.dQ.a[31&(t>>>20|0)],e.bc=e.c4.a[31&(t>>>15|0)],e.aM=e.bc.a[31&(t>>>10|0)],e.aL=e.aM.a[31&(t>>>5|0)])}function xC(e,t,n){this.hU=null,this.cA=0,this.lq=0,this.aL=null,this.aM=null,this.bc=null,this.c4=null,this.dQ=null,this.hT=null,this.cz=0,this.au=0,this.ej=0,this.br=0,this.db=0,this.da=0,this.eZ=0,this.dR=0,this.hU=e,this.cA=t,this.lq=n,this.aL=e.e,this.cz=this.aL.a.length,this.au=0,this.ej=0,this.br=this.cA,this.db=0,this.da=1,this.eZ=0,this.dR=this.cz}N=xC.prototype=new L_,N.constructor=xC;function SC(){}SC.prototype=N,N.B=(function(){return this.br-this.au|0}),N.o=(function(){return this.br>this.au}),N.h=(function(){this.au===this.cz&&vC(this);var e=this.aL.a[this.au];return this.au=1+this.au|0,e}),N.cJ=(function(e){if(e>0){var t=((this.au-this.br|0)+this.cA|0)+e|0,n=this.cA,r=t<n?t:n;if(r===this.cA)this.au=0,this.br=0,this.cz=0;else{for(;r>=this.dR;)_C(this);var i=r-this.eZ|0;this.da>1&&(bC(this,i,this.ej^i),this.ej=i),this.cz=this.aL.a.length,this.au=31&i,this.br=this.au+(this.cA-r|0)|0,this.cz>this.br&&(this.cz=this.br)}}return this}),N.bf=(function(e,t,n){for(var r=Du().bU(e),i=this.br-this.au|0,a=n<i?n:i,o=r-t|0,s=a<o?a:o,c=s>0?s:0,l=0,u=e instanceof F;l<c;){this.au===this.cz&&vC(this);var d=c-l|0,f=this.aL.a.length-this.au|0,p=d<f?d:f;if(u){var m=this.aL,h=this.au,g=t+l|0;m.x(h,e,g,p)}else Qp().fk(this.aL,this.au,e,t+l|0,p);this.au=this.au+p|0,l=l+p|0}return c}),new I().i(xC,`scala.collection.immutable.NewVectorIterator`,{ga:1,p:1,o:1,b:1,c:1,A:1});function CC(e){return e.hY=0,e.lw=0,e}function wC(){this.hY=0,this.lw=0}N=wC.prototype=new P,N.constructor=wC;function TC(){}TC.prototype=N,N.aZ=(function(e){this.hY<e&&this.qh(e)});function EC(){this.i0=null,this.ly=null,OC=this,this.i0=new Ty(this),this.ly=new yO(new F(0))}N=EC.prototype=new P,N.constructor=EC;function DC(){}DC.prototype=N,N.p2=(function(e,t){return this.iF(Qp().mF(e,t))}),N.gr=(function(e){return new av(new ow(e.aI()),new X((e=>kC().iF(e))))}),N.iF=(function(e){if(e===null)return null;if(e instanceof F)return new yO(e);if(e instanceof eo)return new hO(e);if(e instanceof ro)return new dO(e);if(e instanceof to)return new _O(e);if(e instanceof no)return new pO(e);if(e instanceof Za)return new lO(e);if(e instanceof Qa)return new sO(e);if(e instanceof $a)return new xO(e);if(e instanceof Xa)return new aO(e);if(xu(e,1))return new CO(e);throw new vy(e)}),N.ir=(function(e,t){return this.p2(e,t)}),new I().i(EC,`scala.collection.mutable.ArraySeq$`,{gC:1,bD:1,bx:1,bw:1,by:1,a:1});var OC;function kC(){return OC||=new EC,OC}function AC(e){this.dn=0,this.cC=null,this.f3=0,this.f2=null,Cx(this,e)}N=AC.prototype=new Tx,N.constructor=AC;function jC(){}jC.prototype=N,N.ip=(function(e){return e.em}),new I().i(AC,`scala.collection.mutable.HashSet$$anon$1`,{gI:1,aT:1,p:1,o:1,b:1,c:1});function MC(e){this.dn=0,this.cC=null,this.f3=0,this.f2=null,Cx(this,e)}N=MC.prototype=new Tx,N.constructor=MC;function NC(){}NC.prototype=N,N.ip=(function(e){return e}),new I().i(MC,`scala.collection.mutable.HashSet$$anon$2`,{gJ:1,aT:1,p:1,o:1,b:1,c:1});function PC(e){this.dn=0,this.cC=null,this.f3=0,this.f2=null,this.i3=0,this.lC=null,this.lC=e,Cx(this,e),this.i3=0}N=PC.prototype=new Tx,N.constructor=PC;function FC(){}FC.prototype=N,N.y=(function(){return this.i3}),N.ip=(function(e){return this.i3=this.lC.gu(e.cD),this}),new I().i(PC,`scala.collection.mutable.HashSet$$anon$3`,{gK:1,aT:1,p:1,o:1,b:1,c:1});function IC(e){this.f5=null,this.f5=e}N=IC.prototype=new P,N.constructor=IC;function LC(){}LC.prototype=N,N.r=(function(e){return zx(this,e)}),N.y=(function(){return K().P(this.f5)}),N.C=(function(){return Bx(this.f5)}),N.aI=(function(){return this.f5}),N.bh=(function(e){return this.f5.Q.U(e)}),new I().i(IC,`scala.reflect.ClassTag$GenericClassTag`,{h1:1,F:1,O:1,P:1,a:1,d:1});function RC(){}N=RC.prototype=new Jv,N.constructor=RC;function zC(){}zC.prototype=N;function BC(e){this.bB=null,this.A=0,this.bj=0,this.hx=null,this.hx=e,RS(this,e)}N=BC.prototype=new BS,N.constructor=BC;function VC(){}VC.prototype=N,N.pK=(function(){this.A>=this.hx.a.length&&eg().K.h();var e=this.hx.a[this.A];return this.A=1+this.A|0,e}),N.h=(function(){return this.pK()}),new I().i(BC,`scala.collection.ArrayOps$ArrayIterator$mcB$sp`,{fa:1,a0:1,p:1,o:1,b:1,c:1,a:1});function HC(e){this.bB=null,this.A=0,this.bj=0,this.hy=null,this.hy=e,RS(this,e)}N=HC.prototype=new BS,N.constructor=HC;function UC(){}UC.prototype=N,N.pL=(function(){this.A>=this.hy.a.length&&eg().K.h();var e=this.hy.a[this.A];return this.A=1+this.A|0,e}),N.h=(function(){return Wa(this.pL())}),new I().i(HC,`scala.collection.ArrayOps$ArrayIterator$mcC$sp`,{fb:1,a0:1,p:1,o:1,b:1,c:1,a:1});function WC(e){this.bB=null,this.A=0,this.bj=0,this.hz=null,this.hz=e,RS(this,e)}N=WC.prototype=new BS,N.constructor=WC;function GC(){}GC.prototype=N,N.pM=(function(){this.A>=this.hz.a.length&&eg().K.h();var e=this.hz.a[this.A];return this.A=1+this.A|0,e}),N.h=(function(){return this.pM()}),new I().i(WC,`scala.collection.ArrayOps$ArrayIterator$mcD$sp`,{fc:1,a0:1,p:1,o:1,b:1,c:1,a:1});function KC(e){this.bB=null,this.A=0,this.bj=0,this.hA=null,this.hA=e,RS(this,e)}N=KC.prototype=new BS,N.constructor=KC;function qC(){}qC.prototype=N,N.pN=(function(){this.A>=this.hA.a.length&&eg().K.h();var e=this.hA.a[this.A];return this.A=1+this.A|0,e}),N.h=(function(){return this.pN()}),new I().i(KC,`scala.collection.ArrayOps$ArrayIterator$mcF$sp`,{fd:1,a0:1,p:1,o:1,b:1,c:1,a:1});function JC(e){this.bB=null,this.A=0,this.bj=0,this.hB=null,this.hB=e,RS(this,e)}N=JC.prototype=new BS,N.constructor=JC;function YC(){}YC.prototype=N,N.pO=(function(){this.A>=this.hB.a.length&&eg().K.h();var e=this.hB.a[this.A];return this.A=1+this.A|0,e}),N.h=(function(){return this.pO()}),new I().i(JC,`scala.collection.ArrayOps$ArrayIterator$mcI$sp`,{fe:1,a0:1,p:1,o:1,b:1,c:1,a:1});function XC(e){this.bB=null,this.A=0,this.bj=0,this.hC=null,this.hC=e,RS(this,e)}N=XC.prototype=new BS,N.constructor=XC;function ZC(){}ZC.prototype=N,N.pP=(function(){this.A>=this.hC.a.length&&eg().K.h();var e=this.hC.a[this.A],t=e.p,n=e.t;return this.A=1+this.A|0,new V(t,n)}),N.h=(function(){return this.pP()}),new I().i(XC,`scala.collection.ArrayOps$ArrayIterator$mcJ$sp`,{ff:1,a0:1,p:1,o:1,b:1,c:1,a:1});function QC(e){this.bB=null,this.A=0,this.bj=0,this.hD=null,this.hD=e,RS(this,e)}N=QC.prototype=new BS,N.constructor=QC;function $C(){}$C.prototype=N,N.pQ=(function(){this.A>=this.hD.a.length&&eg().K.h();var e=this.hD.a[this.A];return this.A=1+this.A|0,e}),N.h=(function(){return this.pQ()}),new I().i(QC,`scala.collection.ArrayOps$ArrayIterator$mcS$sp`,{fg:1,a0:1,p:1,o:1,b:1,c:1,a:1});function ew(e){this.bB=null,this.A=0,this.bj=0,this.l8=null,this.l8=e,RS(this,e)}N=ew.prototype=new BS,N.constructor=ew;function tw(){}tw.prototype=N,N.pR=(function(){this.A>=this.l8.a.length&&eg().K.h(),this.A=1+this.A|0}),N.h=(function(){this.pR()}),new I().i(ew,`scala.collection.ArrayOps$ArrayIterator$mcV$sp`,{fh:1,a0:1,p:1,o:1,b:1,c:1,a:1});function nw(e){this.bB=null,this.A=0,this.bj=0,this.hE=null,this.hE=e,RS(this,e)}N=nw.prototype=new BS,N.constructor=nw;function rw(){}rw.prototype=N,N.pS=(function(){this.A>=this.hE.a.length&&eg().K.h();var e=this.hE.a[this.A];return this.A=1+this.A|0,e}),N.h=(function(){return this.pS()}),new I().i(nw,`scala.collection.ArrayOps$ArrayIterator$mcZ$sp`,{fi:1,a0:1,p:1,o:1,b:1,c:1,a:1});function iw(e){return e.bI()+`(<not computed>)`}function aw(e){return!!(e&&e.$classData&&e.$classData.n.a9)}function ow(e){this.hY=0,this.lw=0,this.el=null,this.lx=!1,this.hZ=null,this.el=e,CC(this),this.lx=e===oo.l(),this.hZ=[]}N=ow.prototype=new TC,N.constructor=ow;function sw(){}sw.prototype=N,N.lX=(function(e){var t=this.lx?Ga(e):e===null?this.el.Q.z:e;return this.hZ.push(t),this}),N.nX=(function(e){for(var t=e.m();t.o();)this.lX(t.h());return this}),N.qh=(function(e){}),N.aY=(function(){return(this.el===io.l()?Su.l():this.el===ef.l()||this.el===Rg.l()?L.l():this.el).Q.r().w(this.hZ)}),N.C=(function(){return`ArrayBuilder.generic`}),N.aX=(function(e){return this.nX(e)}),N.aT=(function(e){return this.lX(e)}),new I().i(ow,`scala.collection.mutable.ArrayBuilder$generic`,{gB:1,gA:1,a7:1,L:1,I:1,G:1,a:1});function cw(e,t){this.hF=null,this.cr=0,this.bC=0,this.lB=null,this.lA=0,this.lB=t,HS(this,e),this.lA=t.a4()|0}N=cw.prototype=new WS,N.constructor=cw;function lw(){}lw.prototype=N,N.o=(function(){return Xd().mj(this.lA,this.lB.a4()|0,`mutation occurred during iteration`),this.bC>0}),new I().i(cw,`scala.collection.mutable.CheckedIndexedSeqView$CheckedIterator`,{gF:1,bA:1,p:1,o:1,b:1,c:1,a:1});function uw(){this.V=null}N=uw.prototype=new P,N.constructor=uw;function dw(){}dw.prototype=N,N.C=(function(){return this.V}),N.r=(function(e){return this===e}),N.y=(function(){return za(this)});function fw(){}N=fw.prototype=new P,N.constructor=fw;function pw(){}pw.prototype=N;var mw=class e extends T_{constructor(e){super(),this.aS=null,this.aS=e,Hp(this,null,null,!0,!0)}ft(){return ja(this.aS)}bw(){return`JavaScriptException`}bu(){return 1}bv(e){return e===0?this.aS:K().dY(e)}bW(){return new Hx(this)}y(){return q().dx(this,-889275714,!1)}r(t){return this===t||t instanceof e&&W().s(this.aS,t.aS)}};new I().i(mw,`scala.scalajs.js.JavaScriptException`,{cj:1,D:1,C:1,u:1,a:1,U:1,d:1});function hw(e,t){e.iH()!==void 0&&e.i8(Oo().mY()),e.mW(t)}function gw(e){var t=e.iH();if(t===void 0){e.i8(Oo().mY());var n=e.ik();hw(e,n);var r=n}else var r=t;return r}function _w(e,t,n){yw(e,new eS(t),n)}function vw(e,t,n){yw(e,new Qx(t),n)}function yw(e,t,n){hw(e,t);var r=t.mQ(),i=!1;i=!1,e.gp(!1);for(var a=e.fp(),o=0;o<(a.length|0);){var s=a[o];o=1+o|0,s.fz(t),r&&!i&&(i=!0)}for(var c=e.fv(),l=0;l<(c.length|0);){var u=c[l];l=1+l|0,u.pX(t,n),r&&!i&&(i=!0)}e.gp(!0);var d=e.iI();if(d!==void 0){for(var f=0,p=d.length|0;f<p;)d[f].a4(),f=1+f|0;d.length=0}r&&!i&&t.cK(new Q((e=>{Bm().bX(e)})),new Q((e=>void 0)))}function bw(e,t){typeof console<`u`&&(e.kU&&console.error?console.error(t):console.log(t))}function xw(e){this.kU=!1,this.eK=null,this.kU=e,new iy,this.eK=``}N=xw.prototype=new zC,N.constructor=xw;function Sw(){}Sw.prototype=N,N.ps=(function(e){for(var t=e;t!==``;){var n=t.indexOf(`
`)|0;if(n<0)this.eK=``+this.eK+t,t=``;else{var r=this.eK,i=t;bw(this,``+r+i.substring(0,n)),this.eK=``;var a=t,o=1+n|0;t=a.substring(o)}}}),new I().i(xw,`java.lang.JSConsoleBasedPrintStream`,{ep:1,ec:1,eb:1,bh:1,bf:1,bj:1,bg:1,bi:1});function Cw(e,t,n){for(;;)if(t<=0||n.c())return n;else{var r=-1+t|0,i=n.w();t=r,n=i}}function ww(e,t){if(e.b5(1)<=0)return e;for(var n=e.fx(),r=CD(new wD),i=e.m(),a=!1;i.o();){var o=i.h();r.gh(t.d(o))?n.aT(o):a=!0}return a?n.aY():e}function Tw(){this.V=null}N=Tw.prototype=new dw,N.constructor=Tw;function Ew(){}Ew.prototype=N,N.aI=(function(){return ao.l()}),N.bh=(function(e){return new Xa(e)});function Dw(){this.V=null}N=Dw.prototype=new dw,N.constructor=Dw;function Ow(){}Ow.prototype=N,N.aI=(function(){return so.l()}),N.bh=(function(e){return new Qa(e)});function kw(){this.V=null}N=kw.prototype=new dw,N.constructor=kw;function Aw(){}Aw.prototype=N,N.aI=(function(){return oo.l()}),N.bh=(function(e){return new Za(e)});function jw(){this.V=null}N=jw.prototype=new dw,N.constructor=jw;function Mw(){}Mw.prototype=N,N.aI=(function(){return po.l()}),N.bh=(function(e){return new ro(e)});function Nw(){this.V=null}N=Nw.prototype=new dw,N.constructor=Nw;function Pw(){}Pw.prototype=N,N.aI=(function(){return fo.l()}),N.bh=(function(e){return new no(e)});function Fw(){this.V=null}N=Fw.prototype=new dw,N.constructor=Fw;function Iw(){}Iw.prototype=N,N.aI=(function(){return lo.l()}),N.bh=(function(e){return new eo(e)});function Lw(){this.V=null}N=Lw.prototype=new dw,N.constructor=Lw;function Rw(){}Rw.prototype=N,N.aI=(function(){return uo.l()}),N.bh=(function(e){return new to(e)});function zw(){this.cF=null}N=zw.prototype=new pw,N.constructor=zw;function Bw(){}Bw.prototype=N,N.C=(function(){return this.cF}),N.r=(function(e){return this===e}),N.y=(function(){return za(this)});function Vw(){this.V=null}N=Vw.prototype=new dw,N.constructor=Vw;function Hw(){}Hw.prototype=N,N.aI=(function(){return co.l()}),N.bh=(function(e){return new $a(e)});function Uw(){this.V=null}N=Uw.prototype=new dw,N.constructor=Uw;function Ww(){}Ww.prototype=N,N.aI=(function(){return io.l()}),N.bh=(function(e){return new(Su.r()).C(e)});function Gw(){}N=Gw.prototype=new LS,N.constructor=Gw;function Kw(){}Kw.prototype=N,N.bg=(function(){return sg()}),N.C=(function(){return iw(this)}),N.bi=(function(){return`View`});function qw(e,t){if(e===t)return!0;if(Jw(t))if(e.aJ()===t.aJ())try{return e.qx(t)}catch(e){if(e instanceof Zv)return!1;throw e}else return!1;else return!1}function Jw(e){return!!(e&&e.$classData&&e.$classData.n.aL)}function Yw(){this.cF=null,this.cF=`Any`}N=Yw.prototype=new Bw,N.constructor=Yw;function Xw(){}Xw.prototype=N,N.aI=(function(){return L.l()}),N.bh=(function(e){return new F(e)}),new I().i(Yw,`scala.reflect.ManifestFactory$AnyManifest$`,{h2:1,aw:1,av:1,T:1,F:1,O:1,P:1,a:1,d:1});var Zw;function Qw(){return Zw||=new Yw,Zw}function $w(){this.V=null,this.V=`Boolean`}N=$w.prototype=new Ew,N.constructor=$w;function eT(){}eT.prototype=N,new I().i($w,`scala.reflect.ManifestFactory$BooleanManifest$`,{h4:1,h3:1,a3:1,T:1,F:1,O:1,P:1,a:1,d:1});var tT;function nT(){return tT||=new $w,tT}function rT(){this.V=null,this.V=`Byte`}N=rT.prototype=new Ow,N.constructor=rT;function iT(){}iT.prototype=N,new I().i(rT,`scala.reflect.ManifestFactory$ByteManifest$`,{h6:1,h5:1,a3:1,T:1,F:1,O:1,P:1,a:1,d:1});var aT;function oT(){return aT||=new rT,aT}function sT(){this.V=null,this.V=`Char`}N=sT.prototype=new Aw,N.constructor=sT;function cT(){}cT.prototype=N,new I().i(sT,`scala.reflect.ManifestFactory$CharManifest$`,{h8:1,h7:1,a3:1,T:1,F:1,O:1,P:1,a:1,d:1});var lT;function uT(){return lT||=new sT,lT}function dT(){this.V=null,this.V=`Double`}N=dT.prototype=new Mw,N.constructor=dT;function fT(){}fT.prototype=N,new I().i(dT,`scala.reflect.ManifestFactory$DoubleManifest$`,{ha:1,h9:1,a3:1,T:1,F:1,O:1,P:1,a:1,d:1});var pT;function mT(){return pT||=new dT,pT}function hT(){this.V=null,this.V=`Float`}N=hT.prototype=new Pw,N.constructor=hT;function gT(){}gT.prototype=N,new I().i(hT,`scala.reflect.ManifestFactory$FloatManifest$`,{hc:1,hb:1,a3:1,T:1,F:1,O:1,P:1,a:1,d:1});var _T;function vT(){return _T||=new hT,_T}function yT(){this.V=null,this.V=`Int`}N=yT.prototype=new Iw,N.constructor=yT;function bT(){}bT.prototype=N,new I().i(yT,`scala.reflect.ManifestFactory$IntManifest$`,{he:1,hd:1,a3:1,T:1,F:1,O:1,P:1,a:1,d:1});var xT;function ST(){return xT||=new yT,xT}function CT(){this.V=null,this.V=`Long`}N=CT.prototype=new Rw,N.constructor=CT;function wT(){}wT.prototype=N,new I().i(CT,`scala.reflect.ManifestFactory$LongManifest$`,{hg:1,hf:1,a3:1,T:1,F:1,O:1,P:1,a:1,d:1});var TT;function ET(){return TT||=new CT,TT}function DT(){this.cF=null,this.cF=`Nothing`}N=DT.prototype=new Bw,N.constructor=DT;function OT(){}OT.prototype=N,N.aI=(function(){return Rg.l()}),N.bh=(function(e){return new F(e)}),new I().i(DT,`scala.reflect.ManifestFactory$NothingManifest$`,{hh:1,aw:1,av:1,T:1,F:1,O:1,P:1,a:1,d:1});var kT;function AT(){return kT||=new DT,kT}function jT(){this.cF=null,this.cF=`Null`}N=jT.prototype=new Bw,N.constructor=jT;function MT(){}MT.prototype=N,N.aI=(function(){return ef.l()}),N.bh=(function(e){return new F(e)}),new I().i(jT,`scala.reflect.ManifestFactory$NullManifest$`,{hi:1,aw:1,av:1,T:1,F:1,O:1,P:1,a:1,d:1});var NT;function PT(){return NT||=new jT,NT}function FT(){this.cF=null,this.cF=`Object`}N=FT.prototype=new Bw,N.constructor=FT;function IT(){}IT.prototype=N,N.aI=(function(){return L.l()}),N.bh=(function(e){return new F(e)}),new I().i(FT,`scala.reflect.ManifestFactory$ObjectManifest$`,{hj:1,aw:1,av:1,T:1,F:1,O:1,P:1,a:1,d:1});var LT;function RT(){return LT||=new FT,LT}function zT(){this.V=null,this.V=`Short`}N=zT.prototype=new Hw,N.constructor=zT;function BT(){}BT.prototype=N,new I().i(zT,`scala.reflect.ManifestFactory$ShortManifest$`,{hl:1,hk:1,a3:1,T:1,F:1,O:1,P:1,a:1,d:1});var VT;function HT(){return VT||=new zT,VT}function UT(){this.V=null,this.V=`Unit`}N=UT.prototype=new Ww,N.constructor=UT;function WT(){}WT.prototype=N,new I().i(UT,`scala.reflect.ManifestFactory$UnitManifest$`,{hn:1,hm:1,a3:1,T:1,F:1,O:1,P:1,a:1,d:1});var GT;function KT(){return GT||=new UT,GT}function qT(e,t){this.ju=null,this.jt=!1,this.jv=null,this.gO=0,this.jr=null,this.js=null,this.jy=!1,this.gP=null,this.jw=null,this.jx=0,this.jw=t,this.ju=void 0,Vm(this),this.gO=0,yv(this),this.gP=void 0,this.jx=1,hw(this,e)}N=qT.prototype=new P,N.constructor=qT;function JT(){}JT.prototype=N,N.fw=(function(){return this.ju}),N.C=(function(){return go(this)}),N.iE=(function(){return this.jt}),N.iI=(function(){return this.jv}),N.gp=(function(e){this.jt=e}),N.iJ=(function(e){this.jv=e}),N.n4=(function(){}),N.r=(function(e){return this===e}),N.y=(function(){return za(this)}),N.i7=(function(){return this.gO}),N.i8=(function(e){this.gO=e}),N.gw=(function(){return this}),N.n3=(function(){oS(this)}),N.fp=(function(){return this.jr}),N.fv=(function(){return this.js}),N.nq=(function(){return this.jy}),N.gy=(function(e){this.jy=e}),N.ml=(function(e){this.jr=e}),N.mm=(function(e){this.js=e}),N.iH=(function(){return this.gP}),N.mW=(function(e){this.gP=e}),N.gx=(function(){return gw(this)}),N.nl=(function(){return this.jx}),N.ik=(function(){return gw(this)}),N.n5=(function(){}),N.fn=(function(){return this.jw.a4()+`.signal`}),new I().i(qT,`com.raquo.airstream.state.VarSignal`,{cN:1,ay:1,ac:1,aY:1,b0:1,az:1,b1:1,b2:1,b3:1,cJ:1});function YT(e,t){return e===t?!0:XT(t)&&t.fj(e)?e.e0(t):!1}function XT(e){return!!(e&&e.$classData&&e.$classData.n.m)}function ZT(e){this.li=null,this.li=e}N=ZT.prototype=new Kw,N.constructor=ZT;function QT(){}QT.prototype=N,N.m=(function(){return this.li.a4()}),new I().i(ZT,`scala.collection.View$$anon$1`,{fE:1,an:1,i:1,f:1,b:1,h:1,c:1,g:1,a9:1,a:1});function $T(e,t){this.g4=null,this.lj=null,this.g4=e,this.lj=t}N=$T.prototype=new Kw,N.constructor=$T;function eE(){}eE.prototype=N,N.m=(function(){return new Ny(this.g4.m(),this.lj)}),N.B=(function(){return this.g4.B()===0?0:-1}),N.c=(function(){return this.g4.c()}),new I().i($T,`scala.collection.View$DistinctBy`,{fF:1,an:1,i:1,f:1,b:1,h:1,c:1,g:1,a9:1,a:1});function tE(e){e.gG=e.cP!==null,e.fG=-1}function nE(e){if(Tv(e.cP),e.gG){var t=e.cP.i7();t!==e.fG&&rE(e,e.ik(),t)}}function rE(e,t,n){hw(e,t),e.fG=n}function iE(e,t,n){e.gG&&(e.fG=e.cP.i7())}function aE(e){Sv(e.cP,e,!1),oS(e)}function oE(e){Wm(e.cP,e)}function sE(e){this.fZ=null,this.fZ=e}N=sE.prototype=new P,N.constructor=sE;function cE(){}cE.prototype=N,N.B=(function(){return-1}),N.bJ=(function(e){ad(this,e)}),N.bf=(function(e,t,n){return cd(this,e,t,n)}),N.cl=(function(e,t,n,r){return ud(this,e,t,n,r)}),N.bI=(function(){return`Seq`}),N.cI=(function(e,t){return lm(this,e,t)}),N.c5=(function(e){return K_(this,e)}),N.b5=(function(e){return qh(this,e)}),N.c=(function(){return J_(this)}),N.e0=(function(e){return Y_(this,e)}),N.fj=(function(e){return!0}),N.r=(function(e){return YT(this,e)}),N.y=(function(){return q().iW(this)}),N.C=(function(){return Dy(this)}),N.u=(function(){return this.fZ.length|0}),N.v=(function(e){return this.fZ[e]}),N.m=(function(){return new A_(this.fZ)}),N.d=(function(e){return this.v(e|0)}),N.c8=(function(e){return q_(this,e|0)}),N.es=(function(e){return tb().fq(e)}),new I().i(sE,`org.scalajs.dom.DOMList$DOMListSeq`,{eN:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,k:1,d:1,m:1});function lE(){}N=lE.prototype=new LS,N.constructor=lE;function uE(){}uE.prototype=N,N.r=(function(e){return qw(this,e)}),N.bi=(function(){return`Set`}),N.C=(function(){return Dy(this)}),N.qx=(function(e){return this.er(e)}),N.d=(function(e){return this.bt(e)});function dE(e,t){if(e===t)return!0;if(fE(t))if(e.aJ()===t.aJ())try{return e.er(new X((e=>(t=>W().s(e.cM(t.b7(),V_().lg),t.b3())))(t)))}catch(e){if(e instanceof Zv)return!1;throw e}else return!1;else return!1}function fE(e){return!!(e&&e.$classData&&e.$classData.n.a4)}function pE(e,t,n){this.je=null,this.jd=!1,this.jf=null,this.gE=0,this.jb=null,this.jc=null,this.jh=!1,this.gF=null,this.gG=!1,this.fG=0,this.cP=null,this.gH=null,this.gI=null,this.jg=0,this.cP=e,this.gH=t,this.gI=n,this.je=void 0,Vm(this),this.gE=0,yv(this),this.gF=void 0,tE(this),this.jg=1+e.nl()|0}N=pE.prototype=new P,N.constructor=pE;function mE(){}mE.prototype=N,N.fw=(function(){return this.je}),N.fn=(function(){return ho(this)}),N.C=(function(){return go(this)}),N.iE=(function(){return this.jd}),N.iI=(function(){return this.jf}),N.gp=(function(e){this.jd=e}),N.iJ=(function(e){this.jf=e}),N.r=(function(e){return this===e}),N.y=(function(){return za(this)}),N.i7=(function(){return this.gE}),N.i8=(function(e){this.gE=e}),N.gw=(function(){return this}),N.fp=(function(){return this.jb}),N.fv=(function(){return this.jc}),N.nq=(function(){return this.jh}),N.gy=(function(e){this.jh=e}),N.ml=(function(e){this.jb=e}),N.mm=(function(e){this.jc=e}),N.iH=(function(){return this.gF}),N.mW=(function(e){this.gF=e}),N.gx=(function(){return gw(this)}),N.n5=(function(){nE(this)}),N.n3=(function(){aE(this)}),N.n4=(function(){oE(this)}),N.nl=(function(){return this.jg}),N.pX=(function(e,t){iE(this,e,t),e.cK(new Q((e=>{var n=this.gI;if(n.c())vw(this,e,t);else{var r=n.S();try{var i=new eS(r.cI(e,new Q((e=>null))))}catch(e){var a=e instanceof Up?e:new mw(e);matchEnd8:{var i;if(Df().gi(a)){var i=new Qx(a);break matchEnd8}throw a instanceof mw?a.aS:a}}i.cK(new Q((e=>(n=>{vw(this,new nS(n,e),t)}))(e)),new Q((e=>(n=>{n===null?vw(this,e,t):n.c()||_w(this,n.S(),t)}))(e)))}})),new Q((n=>{yw(this,e.iG(this.gH),t)})))}),N.ik=(function(){var e=this.cP.gx().iG(this.gH);return e.cK(new Q((t=>{var n=this.gI;if(n.c())return e;var r=n.S();try{var i=new eS(r.cI(t,new Q((e=>null))))}catch(e){var a=e instanceof Up?e:new mw(e);matchEnd8:{var i;if(Df().gi(a)){var i=new Qx(a);break matchEnd8}throw a instanceof mw?a.aS:a}}return i.cK(new Q((e=>(t=>new Qx(new nS(t,e))))(t)),new Q((t=>{if(t===null)return e;var n=t.c()?NS():new PS(new eS(t.S()));return n.c()?e:n.S()})))})),new Q((t=>e)))}),new I().i(pE,`com.raquo.airstream.misc.MapSignal`,{cA:1,ay:1,ac:1,aY:1,b0:1,az:1,b1:1,b2:1,b3:1,aZ:1,co:1,cp:1});function hE(){}N=hE.prototype=new LS,N.constructor=hE;function gE(){}gE.prototype=N,N.fj=(function(e){return!0}),N.r=(function(e){return YT(this,e)}),N.y=(function(){return q().iW(this)}),N.C=(function(){return Dy(this)}),N.c5=(function(e){return K_(this,e)}),N.iD=(function(e){return q_(this,e)}),N.b5=(function(e){return qh(this,e)}),N.c=(function(){return J_(this)}),N.e0=(function(e){return Y_(this,e)}),N.cI=(function(e,t){return lm(this,e,t)}),N.c8=(function(e){return this.iD(e|0)});function _E(){}N=_E.prototype=new Kw,N.constructor=_E;function vE(){}vE.prototype=N,N.bi=(function(){return`SeqView`}),N.c5=(function(e){return K_(this,e)}),N.b5=(function(e){return qh(this,e)}),N.c=(function(){return J_(this)});function yE(e){return!!(e&&e.$classData&&e.$classData.n.q)}function bE(e){return!!(e&&e.$classData&&e.$classData.n.ao)}function xE(e){e.nt=pl()}function SE(e,t){return new ep(new Q((e=>{t.d(e).b8(e)})),e.jD)}function CE(){}N=CE.prototype=new LS,N.constructor=CE;function wE(){}wE.prototype=N,N.r=(function(e){return dE(this,e)}),N.y=(function(){return q().pC(this)}),N.bi=(function(){return`Map`}),N.C=(function(){return Dy(this)}),N.fr=(function(e){return this.mV().as(e)}),N.cI=(function(e,t){return qS(this,e,t)}),N.dX=(function(e){JS(this,e)}),N.c8=(function(e){return this.bt(e)}),N.cl=(function(e,t,n,r){return YS(this,e,t,n,r)});function TE(e,t){return e.dL=t,e}function EE(){this.dL=null}N=EE.prototype=new vE,N.constructor=EE;function DE(){}DE.prototype=N,N.v=(function(e){return this.dL.v(e)}),N.u=(function(){return this.dL.u()}),N.m=(function(){return this.dL.m()}),N.B=(function(){return this.dL.B()}),N.c=(function(){return this.dL.c()}),new I().i(EE,`scala.collection.SeqView$Id`,{bC:1,aH:1,an:1,i:1,f:1,b:1,h:1,c:1,g:1,a9:1,a:1,aK:1,k:1});function OE(e){return!!(e&&e.$classData&&e.$classData.n.v)}function kE(){this.jS=null,this.jT=!1,this.jK=null,this.jL=!1,this.jH=null,this.jI=!1,this.jY=null,this.jZ=!1,this.jO=null,this.jP=!1,this.jM=null,this.jN=!1,this.jQ=null,this.jR=!1,this.jJ=null,this.gT=null,this.jU=null,this.jV=!1,this.jE=null,this.gS=null,this.jD=null,this.jF=null,this.jG=!1,this.jW=null,this.jX=!1,this.nt=null,Zs(this),Gs(this),zs(this),Ws(this),xE(this)}N=kE.prototype=new P,N.constructor=kE;function AE(){}AE.prototype=N,N.q1=(function(){return this.jT||=(this.jS=dp(new fp,`p`,!1),!0),this.jS}),N.ms=(function(){return this.jL||=(this.jK=dp(new fp,`div`,!1),!0),this.jK}),N.oo=(function(){return this.jI||=(this.jH=new Jf(`checked`,Xs().k0),!0),this.jH}),N.np=(function(){return this.jZ||=(this.jY=new Jf(`value`,Xs().cf),!0),this.jY}),N.pV=(function(){return this.jP||=(this.jO=new Hf(`click`),!0),this.jO}),N.pU=(function(){return this.jN||=(this.jM=new Hf(`change`),!0),this.jM}),N.fy=(function(){return this.jR||=(this.jQ=new Hf(`input`),!0),this.jQ}),N.qu=(function(){return this.jV||=(this.jU=Gf(new Kf,`style`,Xs().cf),!0),this.jU}),N.nV=(function(){return this.jG||=(this.jF=new Bf(this),!0),this.jF}),N.qy=(function(){return this.jX||=(this.jW=new t_(this),!0),this.jW}),new I().i(kE,`com.raquo.laminar.api.package$$anon$1`,{d1:1,dc:1,d5:1,da:1,d9:1,db:1,d7:1,cZ:1,cU:1,cY:1,b5:1,b8:1,b4:1,cW:1});function jE(e){return!!(e&&e.$classData&&e.$classData.n.a5)}function ME(){}N=ME.prototype=new vE,N.constructor=ME;function NE(){}NE.prototype=N,N.bi=(function(){return`IndexedSeqView`}),N.b5=(function(e){var t=this.u();return t===e?0:t<e?-1:1}),N.B=(function(){return this.u()});function PE(e){this.dL=null,TE(this,e)}N=PE.prototype=new DE,N.constructor=PE;function FE(){}FE.prototype=N,N.m=(function(){return HS(new US,this)}),N.bi=(function(){return`IndexedSeqView`}),N.b5=(function(e){var t=this.u();return t===e?0:t<e?-1:1}),N.B=(function(){return this.u()}),new I().i(PE,`scala.collection.IndexedSeqView$Id`,{fm:1,bC:1,aH:1,an:1,i:1,f:1,b:1,h:1,c:1,g:1,a9:1,a:1,aK:1,k:1,bz:1,r:1});function IE(){}N=IE.prototype=new gE,N.constructor=IE;function LE(){}LE.prototype=N;function RE(e,t){this.hX=null,this.lv=null,this.hX=e,this.lv=t}N=RE.prototype=new NE,N.constructor=RE;function zE(){}zE.prototype=N,N.v=(function(e){return this.hX.v(e)}),N.u=(function(){return this.hX.ay}),N.bI=(function(){return`ArrayBufferView`}),N.m=(function(){return new cw(this,this.lv)}),new I().i(RE,`scala.collection.mutable.ArrayBufferView`,{gz:1,f7:1,aH:1,an:1,i:1,f:1,b:1,h:1,c:1,g:1,a9:1,a:1,aK:1,k:1,bz:1,r:1});function BE(){}N=BE.prototype=new wE,N.constructor=BE;function VE(){}VE.prototype=N,N.mV=(function(){return Tg()}),N.bg=(function(){return ev()});function HE(e,t){return!WE(t)||e.u()===t.u()}function UE(e,t){if(WE(t)){if(e===t)return!0;var n=e.u(),r=n===t.u();if(r){var i=0,a=e.gk(),o=t.gk(),s=a<o?a:o,c=n>>31,l=s>>31,u=s<<1,d=s>>>31|0|l<<1;if(c===d?(-2147483648^n)>(-2147483648^u):c>d)var f=s;else var f=n;for(;i<f&&r;)r=W().s(e.v(i),t.v(i)),i=1+i|0;if(i<n&&r)for(var p=e.m().cJ(i),m=t.m().cJ(i);r&&p.o();)r=W().s(p.h(),m.h())}return r}else return Y_(e,t)}function WE(e){return!!(e&&e.$classData&&e.$classData.n.y)}function GE(){}N=GE.prototype=new gE,N.constructor=GE;function KE(){}KE.prototype=N;function qE(){}N=qE.prototype=new VE,N.constructor=qE;function JE(){}JE.prototype=N,N.aJ=(function(){return 0}),N.B=(function(){return 0}),N.c=(function(){return!0}),N.ie=(function(e){throw new dy(`key not found: `+e)}),N.bt=(function(e){return!1}),N.cM=(function(e,t){return t.a4()}),N.m=(function(){return eg().K}),N.dz=(function(e,t){return new ZE(e,t)}),N.d=(function(e){this.ie(e)}),new I().i(qE,`scala.collection.immutable.Map$EmptyMap$`,{fZ:1,ai:1,ae:1,i:1,f:1,b:1,h:1,c:1,g:1,a4:1,ag:1,j:1,e:1,af:1,d:1,a5:1,t:1,aj:1,a:1});var YE;function XE(){return YE||=new qE,YE}function ZE(e,t){this.ci=null,this.dO=null,this.ci=e,this.dO=t}N=ZE.prototype=new VE,N.constructor=ZE;function QE(){}QE.prototype=N,N.aJ=(function(){return 1}),N.B=(function(){return 1}),N.c=(function(){return!1}),N.d=(function(e){if(W().s(e,this.ci))return this.dO;throw new dy(`key not found: `+e)}),N.bt=(function(e){return W().s(e,this.ci)}),N.cM=(function(e,t){return W().s(e,this.ci)?this.dO:t.a4()}),N.m=(function(){return new jy(new Cy(this.ci,this.dO))}),N.e1=(function(e,t){return W().s(e,this.ci)?new ZE(this.ci,t):new $E(this.ci,this.dO,e,t)}),N.er=(function(e){return!!e.d(new Cy(this.ci,this.dO))}),N.y=(function(){var e=0,t=0,n=1,r=q().cd(this.ci,this.dO);return e=e+r|0,t^=r,n=Math.imul(n,1|r),r=q().dq,r=q().f(r,e),r=q().f(r,t),r=q().cO(r,n),q().E(r,1)}),N.dz=(function(e,t){return this.e1(e,t)}),new I().i(ZE,`scala.collection.immutable.Map$Map1`,{bV:1,ai:1,ae:1,i:1,f:1,b:1,h:1,c:1,g:1,a4:1,ag:1,j:1,e:1,af:1,d:1,a5:1,t:1,aj:1,l:1,a:1});function $E(e,t,n,r){this.bY=null,this.d4=null,this.bZ=null,this.d5=null,this.bY=e,this.d4=t,this.bZ=n,this.d5=r}N=$E.prototype=new VE,N.constructor=$E;function eD(){}eD.prototype=N,N.aJ=(function(){return 2}),N.B=(function(){return 2}),N.c=(function(){return!1}),N.d=(function(e){if(W().s(e,this.bY))return this.d4;if(W().s(e,this.bZ))return this.d5;throw new dy(`key not found: `+e)}),N.bt=(function(e){return W().s(e,this.bY)||W().s(e,this.bZ)}),N.cM=(function(e,t){return W().s(e,this.bY)?this.d4:W().s(e,this.bZ)?this.d5:t.a4()}),N.m=(function(){return new sC(this)}),N.e1=(function(e,t){return W().s(e,this.bY)?new $E(this.bY,t,this.bZ,this.d5):W().s(e,this.bZ)?new $E(this.bY,this.d4,this.bZ,t):new tD(this.bY,this.d4,this.bZ,this.d5,e,t)}),N.er=(function(e){return!!e.d(new Cy(this.bY,this.d4))&&!!e.d(new Cy(this.bZ,this.d5))}),N.y=(function(){var e=0,t=0,n=1,r=q().cd(this.bY,this.d4);return e=e+r|0,t^=r,n=Math.imul(n,1|r),r=q().cd(this.bZ,this.d5),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=q().dq,r=q().f(r,e),r=q().f(r,t),r=q().cO(r,n),q().E(r,2)}),N.dz=(function(e,t){return this.e1(e,t)}),new I().i($E,`scala.collection.immutable.Map$Map2`,{bW:1,ai:1,ae:1,i:1,f:1,b:1,h:1,c:1,g:1,a4:1,ag:1,j:1,e:1,af:1,d:1,a5:1,t:1,aj:1,l:1,a:1});function tD(e,t,n,r,i,a){this.bO=null,this.cv=null,this.bP=null,this.cw=null,this.bQ=null,this.cx=null,this.bO=e,this.cv=t,this.bP=n,this.cw=r,this.bQ=i,this.cx=a}N=tD.prototype=new VE,N.constructor=tD;function nD(){}nD.prototype=N,N.aJ=(function(){return 3}),N.B=(function(){return 3}),N.c=(function(){return!1}),N.d=(function(e){if(W().s(e,this.bO))return this.cv;if(W().s(e,this.bP))return this.cw;if(W().s(e,this.bQ))return this.cx;throw new dy(`key not found: `+e)}),N.bt=(function(e){return W().s(e,this.bO)||W().s(e,this.bP)||W().s(e,this.bQ)}),N.cM=(function(e,t){return W().s(e,this.bO)?this.cv:W().s(e,this.bP)?this.cw:W().s(e,this.bQ)?this.cx:t.a4()}),N.m=(function(){return new lC(this)}),N.e1=(function(e,t){return W().s(e,this.bO)?new tD(this.bO,t,this.bP,this.cw,this.bQ,this.cx):W().s(e,this.bP)?new tD(this.bO,this.cv,this.bP,t,this.bQ,this.cx):W().s(e,this.bQ)?new tD(this.bO,this.cv,this.bP,this.cw,this.bQ,t):new rD(this.bO,this.cv,this.bP,this.cw,this.bQ,this.cx,e,t)}),N.er=(function(e){return!!e.d(new Cy(this.bO,this.cv))&&!!e.d(new Cy(this.bP,this.cw))&&!!e.d(new Cy(this.bQ,this.cx))}),N.y=(function(){var e=0,t=0,n=1,r=q().cd(this.bO,this.cv);return e=e+r|0,t^=r,n=Math.imul(n,1|r),r=q().cd(this.bP,this.cw),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=q().cd(this.bQ,this.cx),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=q().dq,r=q().f(r,e),r=q().f(r,t),r=q().cO(r,n),q().E(r,3)}),N.dz=(function(e,t){return this.e1(e,t)}),new I().i(tD,`scala.collection.immutable.Map$Map3`,{bX:1,ai:1,ae:1,i:1,f:1,b:1,h:1,c:1,g:1,a4:1,ag:1,j:1,e:1,af:1,d:1,a5:1,t:1,aj:1,l:1,a:1});function rD(e,t,n,r,i,a,o,s){this.bn=null,this.c0=null,this.bo=null,this.c1=null,this.bp=null,this.c2=null,this.bq=null,this.c3=null,this.bn=e,this.c0=t,this.bo=n,this.c1=r,this.bp=i,this.c2=a,this.bq=o,this.c3=s}N=rD.prototype=new VE,N.constructor=rD;function iD(){}iD.prototype=N,N.aJ=(function(){return 4}),N.B=(function(){return 4}),N.c=(function(){return!1}),N.d=(function(e){if(W().s(e,this.bn))return this.c0;if(W().s(e,this.bo))return this.c1;if(W().s(e,this.bp))return this.c2;if(W().s(e,this.bq))return this.c3;throw new dy(`key not found: `+e)}),N.bt=(function(e){return W().s(e,this.bn)||W().s(e,this.bo)||W().s(e,this.bp)||W().s(e,this.bq)}),N.cM=(function(e,t){return W().s(e,this.bn)?this.c0:W().s(e,this.bo)?this.c1:W().s(e,this.bp)?this.c2:W().s(e,this.bq)?this.c3:t.a4()}),N.m=(function(){return new dC(this)}),N.e1=(function(e,t){return W().s(e,this.bn)?new rD(this.bn,t,this.bo,this.c1,this.bp,this.c2,this.bq,this.c3):W().s(e,this.bo)?new rD(this.bn,this.c0,this.bo,t,this.bp,this.c2,this.bq,this.c3):W().s(e,this.bp)?new rD(this.bn,this.c0,this.bo,this.c1,this.bp,t,this.bq,this.c3):W().s(e,this.bq)?new rD(this.bn,this.c0,this.bo,this.c1,this.bp,this.c2,this.bq,t):hg().hN.ez(this.bn,this.c0).ez(this.bo,this.c1).ez(this.bp,this.c2).ez(this.bq,this.c3).ez(e,t)}),N.er=(function(e){return!!e.d(new Cy(this.bn,this.c0))&&!!e.d(new Cy(this.bo,this.c1))&&!!e.d(new Cy(this.bp,this.c2))&&!!e.d(new Cy(this.bq,this.c3))}),N.on=(function(e){return e.dU(this.bn,this.c0).dU(this.bo,this.c1).dU(this.bp,this.c2).dU(this.bq,this.c3)}),N.y=(function(){var e=0,t=0,n=1,r=q().cd(this.bn,this.c0);return e=e+r|0,t^=r,n=Math.imul(n,1|r),r=q().cd(this.bo,this.c1),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=q().cd(this.bp,this.c2),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=q().cd(this.bq,this.c3),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=q().dq,r=q().f(r,e),r=q().f(r,t),r=q().cO(r,n),q().E(r,4)}),N.dz=(function(e,t){return this.e1(e,t)}),new I().i(rD,`scala.collection.immutable.Map$Map4`,{bY:1,ai:1,ae:1,i:1,f:1,b:1,h:1,c:1,g:1,a4:1,ag:1,j:1,e:1,af:1,d:1,a5:1,t:1,aj:1,l:1,a:1});function aD(){}N=aD.prototype=new uE,N.constructor=aD;function oD(){}oD.prototype=N,N.aY=(function(){return this});function sD(e){if(!e.hO){if(e.g6)throw w_(new T_,`LazyList evaluation depends on its own result (self-reference); see docs for more info`);e.g6=!0;try{var t=e.hP.a4()}finally{e.g6=!1}e.bG=!0,e.hP=null,e.hQ=t,e.hO=!0}return e.hQ}function cD(e,t){return iv(),new uD(new jg((()=>e.c()?xg():(iv(),new gg(t.d(e.F().z()),cD(e.F().aE(),t))))))}function lD(e,t,n,r,i){if(t.q=``+t.q+n,!e.bG)t.q+=`<not computed>`;else if(!e.c()){var a=e.F().z();t.q=``+t.q+a;var o=null;o=e;var s=e.F().aE(),c=null;if(c=s,o!==c&&(!c.bG||o.F()!==c.F())&&(o=c,c.bG&&!c.c()))for(c=c.F().aE();o!==c&&c.bG&&!c.c()&&o.F()!==c.F();){t.q=``+t.q+r;var l=o.F().z();t.q=``+t.q+l,o=o.F().aE(),c=c.F().aE(),c.bG&&!c.c()&&(c=c.F().aE())}if(c.bG&&!c.c()){for(var u=e,d=0;;){var f=u,p=c;if(!(f===p||f.F()===p.F()))u=u.F().aE(),c=c.F().aE(),d=1+d|0;else break}var m=o,h=c;if((m===h||m.F()===h.F())&&d>0){t.q=``+t.q+r;var g=o.F().z();t.q=``+t.q+g,o=o.F().aE()}for(;;){var _=o,v=c;if(_===v||_.F()===v.F())break;t.q=``+t.q+r;var y=o.F().z();t.q=``+t.q+y,o=o.F().aE()}t.q=``+t.q+r,t.q+=`<cycle>`}else{for(;o!==c;){t.q=``+t.q+r;var ee=o.F().z();t.q=``+t.q+ee,o=o.F().aE()}o.bG||(t.q=``+t.q+r,t.q+=`<not computed>`)}}return t.q=``+t.q+i,t}function uD(e){this.hQ=null,this.hP=null,this.bG=!1,this.g6=!1,this.hO=!1,this.hP=e,this.bG=!1,this.g6=!1}N=uD.prototype=new LE,N.constructor=uD;function dD(){}dD.prototype=N,N.bi=(function(){return`LinearSeq`}),N.u=(function(){return Gy(this)}),N.b5=(function(e){return Ky(this,e)}),N.iD=(function(e){return qy(this,e)}),N.v=(function(e){return Jy(this,e)}),N.e0=(function(e){return Yy(this,e)}),N.F=(function(){return this.hO?this.hQ:sD(this)}),N.c=(function(){return this.F()===xg()}),N.B=(function(){return this.bG&&this.F()===xg()?0:-1}),N.z=(function(){return this.F().z()}),N.mE=(function(){var e=this,t=this;for(e.c()||(e=e.F().aE());t!==e;){if(e.c()||(e=e.F().aE(),e.c())||(e=e.F().aE(),e===t))return this;t=t.F().aE()}return this}),N.m=(function(){return this.bG&&this.F()===xg()?eg().K:new Ab(this)}),N.bJ=(function(e){for(var t=this;;){if(!t.c()){e.d(t.F().z()),t=t.F().aE();continue}break}}),N.bI=(function(){return`LazyList`}),N.py=(function(e){return this.bG&&this.F()===xg()?iv().g7:(iv(),new uD(new jg((()=>this.c()?xg():(iv(),new gg(e.d(this.F().z()),cD(this.F().aE(),e)))))))}),N.oJ=(function(e){return e<=0?this:this.bG&&this.F()===xg()?iv().g7:iv().qk(this,e)}),N.cl=(function(e,t,n,r){return this.mE(),lD(this,e.aR,t,n,r),e}),N.C=(function(){return lD(this,D_(new O_,`LazyList`),`(`,`, `,`)`).q}),N.d=(function(e){return Jy(this,e|0)}),N.c8=(function(e){return qy(this,e|0)}),N.mt=(function(e){return this.oJ(e)}),N.c9=(function(e){return this.py(e)}),N.w=(function(){return this.F().aE()}),N.bg=(function(){return iv()}),new I().i(uD,`scala.collection.immutable.LazyList`,{bT:1,x:1,n:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,k:1,d:1,v:1,t:1,w:1,aM:1,ao:1,aI:1,aN:1,a:1});function fD(e){this.gc=null,this.gc=e}N=fD.prototype=new P,N.constructor=fD;function pD(){}pD.prototype=N,N.c5=(function(e){return ww(this,e)}),N.c9=(function(e){return X_(this,e)}),N.fj=(function(e){return HE(this,e)}),N.e0=(function(e){return UE(this,e)}),N.gk=(function(){return Ed().lk}),N.m=(function(){return HS(new US,new PE(this))}),N.b5=(function(e){var t=this.u();return t===e?0:t<e?-1:1}),N.B=(function(){return this.u()}),N.r=(function(e){return YT(this,e)}),N.y=(function(){return q().iW(this)}),N.C=(function(){return Dy(this)}),N.c=(function(){return J_(this)}),N.cI=(function(e,t){return lm(this,e,t)}),N.fx=(function(){return Zx().aU()}),N.bJ=(function(e){ad(this,e)}),N.bf=(function(e,t,n){return cd(this,e,t,n)}),N.cl=(function(e,t,n,r){return ud(this,e,t,n,r)}),N.dw=(function(){return Zx()}),N.u=(function(){return this.gc.length|0}),N.v=(function(e){return this.gc[e]}),N.bI=(function(){return`WrappedVarArgs`}),N.es=(function(e){return Zx().iv(e)}),N.c8=(function(e){return q_(this,e|0)}),N.d=(function(e){return this.v(e|0)}),N.bg=(function(){return Zx()}),new I().i(fD,`scala.scalajs.runtime.WrappedVarArgs`,{ck:1,y:1,v:1,t:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,k:1,d:1,w:1,q:1,r:1,B:1,z:1,s:1,l:1,a:1});function mD(e){this.bb=null,this.bb=e}N=mD.prototype=new VE,N.constructor=mD;function hD(){}hD.prototype=N,N.mV=(function(){return hg()}),N.B=(function(){return this.bb.aK}),N.aJ=(function(){return this.bb.aK}),N.c=(function(){return this.bb.aK===0}),N.m=(function(){return this.c()?eg().K:new hC(this.bb)}),N.bt=(function(e){var t=K().P(e),n=id().c7(t);return this.bb.ij(e,t,n,0)}),N.d=(function(e){var t=K().P(e),n=id().c7(t);return this.bb.ic(e,t,n,0)}),N.cM=(function(e,t){var n=K().P(e),r=id().c7(n);return this.bb.ix(e,n,r,0,t)}),N.ez=(function(e,t){var n=K().P(e),r=this.bb.nn(e,t,n,id().c7(n),0,!0);return r===this.bb?this:new mD(r)}),N.dX=(function(e){this.bb.dX(e)}),N.r=(function(e){if(e instanceof mD){if(this===e)return!0;var t=this.bb,n=e.bb;return t===null?n===null:t.r(n)}else return dE(this,e)}),N.y=(function(){if(this.c())return q().i6;var e=new pC(this.bb);return q().iZ(e,q().dq)}),N.bI=(function(){return`HashMap`}),N.dz=(function(e,t){return this.ez(e,t)}),new I().i(mD,`scala.collection.immutable.HashMap`,{bS:1,ai:1,ae:1,i:1,f:1,b:1,h:1,c:1,g:1,a4:1,ag:1,j:1,e:1,af:1,d:1,a5:1,t:1,aj:1,gi:1,fB:1,l:1,W:1,a:1});function gD(){}N=gD.prototype=new KE,N.constructor=gD;function _D(){}_D.prototype=N,N.aX=(function(e){return fm(this,e)});function vD(e,t,n){var r=n&(-1+e.aP.a.length|0),i=e.aP.a[r];if(i===null)e.aP.a[r]=new Wd(t,n,null);else{for(var a=null,o=i;o!==null&&o.cD<=n;){if(o.cD===n&&W().s(t,o.em))return!1;a=o,o=o.aQ}a===null?e.aP.a[r]=new Wd(t,n,i):a.aQ=new Wd(t,n,a.aQ)}return e.dm=1+e.dm|0,!0}function yD(e,t){var n=e.aP.a.length;if(e.i2=xD(e,t),e.dm===0)e.aP=new(Kd.r()).C(t);else{e.aP=B().W(e.aP,t);for(var r=new Wd(null,0,null),i=new Wd(null,0,null);n<t;){for(var a=0;a<n;){var o=e.aP.a[a];if(o!==null){r.aQ=null,i.aQ=null;for(var s=r,c=i,l=o;l!==null;){var u=l.aQ;(l.cD&n)===0?(s.aQ=l,s=l):(c.aQ=l,c=l),l=u}s.aQ=null,o!==r.aQ&&(e.aP.a[a]=r.aQ),i.aQ!==null&&(e.aP.a[a+n|0]=i.aQ,c.aQ=null)}a=1+a|0}n<<=1}}}function bD(e,t){var n=-1+t|0,r=n>4?n:4,i=(-2147483648>>(Math.clz32(r)|0)&r)<<1;return i<1073741824?i:1073741824}function xD(e,t){return Pa(t*e.i1)}function SD(e,t,n){return e.i1=n,e.aP=new(Kd.r()).C(bD(e,t)),e.i2=xD(e,e.aP.a.length),e.dm=0,e}function CD(e){return SD(e,16,.75),e}function wD(){this.i1=0,this.aP=null,this.i2=0,this.dm=0}N=wD.prototype=new oD,N.constructor=wD;function TD(){}TD.prototype=N,N.aJ=(function(){return this.dm}),N.gu=(function(e){return e^(e>>>16|0)}),N.bt=(function(e){var t=this.gu(K().P(e)),n=this.aP.a[t&(-1+this.aP.a.length|0)];return(n===null?null:n.oZ(e,t))!==null}),N.aZ=(function(e){var t=bD(this,Pa((1+e|0)/this.i1));t>this.aP.a.length&&yD(this,t)}),N.gh=(function(e){return(1+this.dm|0)>=this.i2&&yD(this,this.aP.a.length<<1),vD(this,e,this.gu(K().P(e)))}),N.lW=(function(e){if(Eg(this,e,0),e instanceof wD){for(var t=new MC(e);t.o();){var n=t.h();vD(this,n.em,n.cD)}return this}else return fm(this,e)}),N.m=(function(){return new AC(this)}),N.bg=(function(){return Ag()}),N.B=(function(){return this.dm}),N.c=(function(){return this.dm===0}),N.bI=(function(){return`HashSet`}),N.y=(function(){var e=new AC(this),t=e.o()?new PC(this):e;return q().iZ(t,q().lO)}),N.aT=(function(e){return this.gh(e),this}),N.aX=(function(e){return this.lW(e)}),new I().i(wD,`scala.collection.mutable.HashSet`,{cb:1,gw:1,f8:1,i:1,f:1,b:1,h:1,c:1,g:1,aL:1,fz:1,e:1,d:1,gU:1,J:1,gV:1,H:1,A:1,L:1,I:1,G:1,au:1,l:1,a:1});function ED(){}N=ED.prototype=new LE,N.constructor=ED;function DD(){}DD.prototype=N,N.fr=(function(e){return rC().is(e,this.ae())}),N.fx=(function(){return rC().gr(this.ae())}),N.c5=(function(e){return ww(this,e)}),N.fj=(function(e){return HE(this,e)}),N.e0=(function(e){return UE(this,e)}),N.bi=(function(){return`IndexedSeq`}),N.b5=(function(e){var t=this.u();return t===e?0:t<e?-1:1}),N.B=(function(){return this.u()}),N.dw=(function(){return rC().hL}),N.px=(function(e){for(var t=new F(this.u()),n=0;n<t.a.length;)t.a[n]=e.d(this.v(n)),n=1+n|0;return rC().j0(t)}),N.bI=(function(){return`ArraySeq`}),N.bf=(function(e,t,n){var r=this.u(),i=Du().bU(e),a=n<r?n:r,o=i-t|0,s=a<o?a:o,c=s>0?s:0;return c>0&&Qp().fk(this.co(),0,e,t,c),c}),N.gk=(function(){return 2147483647}),N.es=(function(e){return rC().is(e,this.ae())}),N.c9=(function(e){return this.px(e)}),N.bg=(function(){return rC().hL});function OD(e,t){return e.e=t,e}function kD(){this.e=null}N=kD.prototype=new LE,N.constructor=kD;function AD(){}AD.prototype=N,N.c5=(function(e){return ww(this,e)}),N.fj=(function(e){return HE(this,e)}),N.e0=(function(e){return UE(this,e)}),N.bi=(function(){return`IndexedSeq`}),N.b5=(function(e){var t=this.u();return t===e?0:t<e?-1:1}),N.B=(function(){return this.u()}),N.dw=(function(){return tx()}),N.u=(function(){return this instanceof EO?this.l:this.e.a.length}),N.m=(function(){return RO()===this?tx().ls:new xC(this,this.u(),this.cq())}),N.bI=(function(){return`Vector`}),N.bf=(function(e,t,n){return this.m().bf(e,t,n)}),N.gk=(function(){return tx().lr}),N.aD=(function(e){return xd().fu(e,-1+this.u()|0)}),N.bJ=(function(e){for(var t=this.cq(),n=0;n<t;){var r=U(),i=n,a=t/2|0,o=i-a|0;r.iq(-1+((1+a|0)-(o<0?-o|0:o)|0)|0,this.cp(n),e),n=1+n|0}}),N.bg=(function(){return tx()});function jD(){}N=jD.prototype=new KE,N.constructor=jD;function MD(){}MD.prototype=N,N.c5=(function(e){return XS(this,e)}),N.bi=(function(){return`IndexedSeq`}),N.b5=(function(e){var t=this.u();return t===e?0:t<e?-1:1}),N.B=(function(){return this.u()}),N.dw=(function(){return kC().i0}),N.mK=(function(e){var t=this.ae(),n=null,r=t.aI(),i=r===oo.l();n=[],e.B();for(var a=e.m();a.o();){var o=a.h(),s=i?Ga(o):o===null?r.Q.z:o;n.push(s)}var c=kC(),l=r===io.l()?Su.l():r===ef.l()||r===Rg.l()?L.l():r;return c.iF(l.Q.r().w(n))}),N.fx=(function(){return kC().gr(this.ae())}),N.bI=(function(){return`ArraySeq`}),N.bf=(function(e,t,n){var r=this.u(),i=Du().bU(e),a=n<r?n:r,o=i-t|0,s=a<o?a:o,c=s>0?s:0;return c>0&&Qp().fk(this.bT(),0,e,t,c),c}),N.r=(function(e){return e instanceof jD&&Du().bU(this.bT())!==Du().bU(e.bT())?!1:YT(this,e)}),N.es=(function(e){return this.mK(e)}),N.fr=(function(e){return this.mK(e)}),N.bg=(function(){return kC().i0});function ND(e){this.cV=null,this.cV=e}N=ND.prototype=new DD,N.constructor=ND;function PD(){}PD.prototype=N,N.u=(function(){return this.cV.a.length}),N.y=(function(){var e=q();return e.mh(this.cV,e.ai)}),N.r=(function(e){return e instanceof ND?B().mC(this.cV,e.cV):YT(this,e)}),N.m=(function(){return new nw(this.cV)}),N.fh=(function(e){return this.cV.a[e]}),N.d=(function(e){return this.fh(e|0)}),N.v=(function(e){return this.fh(e)}),N.ae=(function(){return nT()}),N.co=(function(){return this.cV}),new I().i(ND,`scala.collection.immutable.ArraySeq$ofBoolean`,{bF:1,X:1,x:1,n:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,k:1,d:1,v:1,t:1,w:1,y:1,q:1,r:1,B:1,z:1,s:1,l:1,a1:1,a:1});function FD(e){this.cW=null,this.cW=e}N=FD.prototype=new DD,N.constructor=FD;function ID(){}ID.prototype=N,N.u=(function(){return this.cW.a.length}),N.f9=(function(e){return this.cW.a[e]}),N.y=(function(){var e=q();return e.m9(this.cW,e.ai)}),N.r=(function(e){return e instanceof FD?B().mw(this.cW,e.cW):YT(this,e)}),N.m=(function(){return new BC(this.cW)}),N.d=(function(e){return this.f9(e|0)}),N.v=(function(e){return this.f9(e)}),N.ae=(function(){return oT()}),N.co=(function(){return this.cW}),new I().i(FD,`scala.collection.immutable.ArraySeq$ofByte`,{bG:1,X:1,x:1,n:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,k:1,d:1,v:1,t:1,w:1,y:1,q:1,r:1,B:1,z:1,s:1,l:1,a1:1,a:1});function LD(e){this.ct=null,this.ct=e}N=LD.prototype=new DD,N.constructor=LD;function RD(){}RD.prototype=N,N.u=(function(){return this.ct.a.length}),N.fa=(function(e){return this.ct.a[e]}),N.y=(function(){var e=q();return e.ma(this.ct,e.ai)}),N.r=(function(e){return e instanceof LD?B().mx(this.ct,e.ct):YT(this,e)}),N.m=(function(){return new HC(this.ct)}),N.cl=(function(e,t,n,r){return new lO(this.ct).cl(e,t,n,r)}),N.d=(function(e){return Wa(this.fa(e|0))}),N.v=(function(e){return Wa(this.fa(e))}),N.ae=(function(){return uT()}),N.co=(function(){return this.ct}),new I().i(LD,`scala.collection.immutable.ArraySeq$ofChar`,{bH:1,X:1,x:1,n:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,k:1,d:1,v:1,t:1,w:1,y:1,q:1,r:1,B:1,z:1,s:1,l:1,a1:1,a:1});function zD(e){this.cX=null,this.cX=e}N=zD.prototype=new DD,N.constructor=zD;function BD(){}BD.prototype=N,N.u=(function(){return this.cX.a.length}),N.y=(function(){var e=q();return e.mb(this.cX,e.ai)}),N.r=(function(e){return e instanceof zD?B().my(this.cX,e.cX):YT(this,e)}),N.m=(function(){return new WC(this.cX)}),N.fc=(function(e){return this.cX.a[e]}),N.d=(function(e){return this.fc(e|0)}),N.v=(function(e){return this.fc(e)}),N.ae=(function(){return mT()}),N.co=(function(){return this.cX}),new I().i(zD,`scala.collection.immutable.ArraySeq$ofDouble`,{bI:1,X:1,x:1,n:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,k:1,d:1,v:1,t:1,w:1,y:1,q:1,r:1,B:1,z:1,s:1,l:1,a1:1,a:1});function VD(e){this.cY=null,this.cY=e}N=VD.prototype=new DD,N.constructor=VD;function HD(){}HD.prototype=N,N.u=(function(){return this.cY.a.length}),N.y=(function(){var e=q();return e.mc(this.cY,e.ai)}),N.r=(function(e){return e instanceof VD?B().mz(this.cY,e.cY):YT(this,e)}),N.m=(function(){return new KC(this.cY)}),N.fd=(function(e){return this.cY.a[e]}),N.d=(function(e){return this.fd(e|0)}),N.v=(function(e){return this.fd(e)}),N.ae=(function(){return vT()}),N.co=(function(){return this.cY}),new I().i(VD,`scala.collection.immutable.ArraySeq$ofFloat`,{bJ:1,X:1,x:1,n:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,k:1,d:1,v:1,t:1,w:1,y:1,q:1,r:1,B:1,z:1,s:1,l:1,a1:1,a:1});function UD(e){this.cZ=null,this.cZ=e}N=UD.prototype=new DD,N.constructor=UD;function WD(){}WD.prototype=N,N.u=(function(){return this.cZ.a.length}),N.y=(function(){var e=q();return e.md(this.cZ,e.ai)}),N.r=(function(e){return e instanceof UD?B().im(this.cZ,e.cZ):YT(this,e)}),N.m=(function(){return new JC(this.cZ)}),N.fe=(function(e){return this.cZ.a[e]}),N.d=(function(e){return this.fe(e|0)}),N.v=(function(e){return this.fe(e)}),N.ae=(function(){return ST()}),N.co=(function(){return this.cZ}),new I().i(UD,`scala.collection.immutable.ArraySeq$ofInt`,{bK:1,X:1,x:1,n:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,k:1,d:1,v:1,t:1,w:1,y:1,q:1,r:1,B:1,z:1,s:1,l:1,a1:1,a:1});function GD(e){this.d0=null,this.d0=e}N=GD.prototype=new DD,N.constructor=GD;function KD(){}KD.prototype=N,N.u=(function(){return this.d0.a.length}),N.y=(function(){var e=q();return e.me(this.d0,e.ai)}),N.r=(function(e){return e instanceof GD?B().mA(this.d0,e.d0):YT(this,e)}),N.m=(function(){return new XC(this.d0)}),N.ff=(function(e){return this.d0.a[e]}),N.d=(function(e){return this.ff(e|0)}),N.v=(function(e){return this.ff(e)}),N.ae=(function(){return ET()}),N.co=(function(){return this.d0}),new I().i(GD,`scala.collection.immutable.ArraySeq$ofLong`,{bL:1,X:1,x:1,n:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,k:1,d:1,v:1,t:1,w:1,y:1,q:1,r:1,B:1,z:1,s:1,l:1,a1:1,a:1});function qD(e){this.cg=null,this.cg=e}N=qD.prototype=new DD,N.constructor=qD;function JD(){}JD.prototype=N,N.ae=(function(){return gm().m4(Da(this.cg).Q.Q())}),N.u=(function(){return this.cg.a.length}),N.v=(function(e){return this.cg.a[e]}),N.y=(function(){var e=q();return e.m8(this.cg,e.ai)}),N.r=(function(e){return e instanceof qD?Qp().mD(this.cg,e.cg):YT(this,e)}),N.m=(function(){return RS(new zS,this.cg)}),N.d=(function(e){return this.v(e|0)}),N.co=(function(){return this.cg}),new I().i(qD,`scala.collection.immutable.ArraySeq$ofRef`,{bM:1,X:1,x:1,n:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,k:1,d:1,v:1,t:1,w:1,y:1,q:1,r:1,B:1,z:1,s:1,l:1,a1:1,a:1});function YD(e){this.d1=null,this.d1=e}N=YD.prototype=new DD,N.constructor=YD;function XD(){}XD.prototype=N,N.u=(function(){return this.d1.a.length}),N.fb=(function(e){return this.d1.a[e]}),N.y=(function(){var e=q();return e.mf(this.d1,e.ai)}),N.r=(function(e){return e instanceof YD?B().mB(this.d1,e.d1):YT(this,e)}),N.m=(function(){return new QC(this.d1)}),N.d=(function(e){return this.fb(e|0)}),N.v=(function(e){return this.fb(e)}),N.ae=(function(){return HT()}),N.co=(function(){return this.d1}),new I().i(YD,`scala.collection.immutable.ArraySeq$ofShort`,{bN:1,X:1,x:1,n:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,k:1,d:1,v:1,t:1,w:1,y:1,q:1,r:1,B:1,z:1,s:1,l:1,a1:1,a:1});function ZD(e){this.dM=null,this.dM=e}N=ZD.prototype=new DD,N.constructor=ZD;function QD(){}QD.prototype=N,N.u=(function(){return this.dM.a.length}),N.y=(function(){var e=q();return e.mg(this.dM,e.ai)}),N.r=(function(e){return e instanceof ZD?this.dM.a.length===e.dM.a.length:YT(this,e)}),N.m=(function(){return new ew(this.dM)}),N.fg=(function(e){}),N.d=(function(e){this.fg(e|0)}),N.v=(function(e){this.fg(e)}),N.ae=(function(){return KT()}),N.co=(function(){return this.dM}),new I().i(ZD,`scala.collection.immutable.ArraySeq$ofUnit`,{bO:1,X:1,x:1,n:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,k:1,d:1,v:1,t:1,w:1,y:1,q:1,r:1,B:1,z:1,s:1,l:1,a1:1,a:1});function $D(e,t,n,r){for(;;)if(t===r)return n.c()?0:1;else if(n.c())return-1;else{var i=1+t|0,a=n.w();t=i,n=a}}function eO(e,t,n){for(;;)if(t===n)return!0;else{var r=t.c(),i=n.c();if(!(r||i)&&W().s(t.z(),n.z())){var a=t.w(),o=n.w();t=a,n=o}else return r&&i}}function tO(){}N=tO.prototype=new LE,N.constructor=tO;function nO(){}nO.prototype=N,N.c5=(function(e){return ww(this,e)}),N.m=(function(){return new nb(this)}),N.bi=(function(){return`LinearSeq`}),N.iD=(function(e){return qy(this,e)}),N.v=(function(e){return Jy(this,e)}),N.e0=(function(e){return Yy(this,e)}),N.dw=(function(){return Fb()}),N.lP=(function(e){if(this.c())return e;if(e.c())return this;for(var t=new AO(e.z(),this),n=t,r=e.w();!r.c();){var i=new AO(r.z(),this);n.at=i,n=i,r=r.w()}return t}),N.c=(function(){return this===$()}),N.iS=(function(e){if(e instanceof tO)return this.lP(e);if(e.B()===0)return this;if(e instanceof tk&&this.c())return e.nk();var t=e.m();if(t.o()){for(var n=new AO(t.h(),this),r=n;t.o();){var i=new AO(t.h(),this);r.at=i,r=i}return n}else return this}),N.m2=(function(e){return e instanceof tO?e.lP(this):ZS(this,e)}),N.pz=(function(e){if(this===$())return $();for(var t=new AO(e.d(this.z()),$()),n=t,r=this.w();r!==$();){var i=new AO(e.d(r.z()),$());n.at=i,n=i,r=r.w()}return t}),N.bJ=(function(e){for(var t=this;!t.c();)e.d(t.z()),t=t.w()}),N.u=(function(){for(var e=this,t=0;!e.c();)t=1+t|0,e=e.w();return t}),N.b5=(function(e){return e<0?1:$D(this,0,this,e)}),N.bt=(function(e){for(var t=this;!t.c();){if(W().s(t.z(),e))return!0;t=t.w()}return!1}),N.bI=(function(){return`List`}),N.r=(function(e){return e instanceof tO?eO(this,this,e):YT(this,e)}),N.d=(function(e){return Jy(this,e|0)}),N.c8=(function(e){return qy(this,e|0)}),N.mt=(function(e){return Cw(this,e,this)}),N.c9=(function(e){return this.pz(e)}),N.bg=(function(){return Fb()});function rO(){this.e=null}N=rO.prototype=new AD,N.constructor=rO;function iO(){}iO.prototype=N;function aO(e){this.de=null,this.de=e}N=aO.prototype=new MD,N.constructor=aO;function oO(){}oO.prototype=N,N.u=(function(){return this.de.a.length}),N.y=(function(){var e=q();return e.mh(this.de,e.ai)}),N.r=(function(e){return e instanceof aO?B().mC(this.de,e.de):jD.prototype.r.call(this,e)}),N.m=(function(){return new nw(this.de)}),N.fh=(function(e){return this.de.a[e]}),N.d=(function(e){return this.fh(e|0)}),N.v=(function(e){return this.fh(e)}),N.ae=(function(){return nT()}),N.bT=(function(){return this.de}),new I().i(aO,`scala.collection.mutable.ArraySeq$ofBoolean`,{c1:1,Y:1,K:1,n:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,k:1,d:1,M:1,J:1,N:1,H:1,A:1,R:1,q:1,r:1,S:1,s:1,l:1,a:1});function sO(e){this.df=null,this.df=e}N=sO.prototype=new MD,N.constructor=sO;function cO(){}cO.prototype=N,N.u=(function(){return this.df.a.length}),N.f9=(function(e){return this.df.a[e]}),N.y=(function(){var e=q();return e.m9(this.df,e.ai)}),N.r=(function(e){return e instanceof sO?B().mw(this.df,e.df):jD.prototype.r.call(this,e)}),N.m=(function(){return new BC(this.df)}),N.d=(function(e){return this.f9(e|0)}),N.v=(function(e){return this.f9(e)}),N.ae=(function(){return oT()}),N.bT=(function(){return this.df}),new I().i(sO,`scala.collection.mutable.ArraySeq$ofByte`,{c2:1,Y:1,K:1,n:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,k:1,d:1,M:1,J:1,N:1,H:1,A:1,R:1,q:1,r:1,S:1,s:1,l:1,a:1});function lO(e){this.bH=null,this.bH=e}N=lO.prototype=new MD,N.constructor=lO;function uO(){}uO.prototype=N,N.u=(function(){return this.bH.a.length}),N.fa=(function(e){return this.bH.a[e]}),N.y=(function(){var e=q();return e.ma(this.bH,e.ai)}),N.r=(function(e){return e instanceof lO?B().mx(this.bH,e.bH):jD.prototype.r.call(this,e)}),N.m=(function(){return new HC(this.bH)}),N.cl=(function(e,t,n,r){var i=e.aR;t.length!==0&&(i.q=``+i.q+t);var a=this.bH.a.length;if(a!==0)if(n===``)i.lZ(this.bH);else{i.u();var o=this.bH.a[0],s=``+Fa(o);i.q+=s;for(var c=1;c<a;){i.q=``+i.q+n;var l=this.bH.a[c],u=``+Fa(l);i.q+=u,c=1+c|0}}return r.length!==0&&(i.q=``+i.q+r),e}),N.d=(function(e){return Wa(this.fa(e|0))}),N.v=(function(e){return Wa(this.fa(e))}),N.ae=(function(){return uT()}),N.bT=(function(){return this.bH}),new I().i(lO,`scala.collection.mutable.ArraySeq$ofChar`,{c3:1,Y:1,K:1,n:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,k:1,d:1,M:1,J:1,N:1,H:1,A:1,R:1,q:1,r:1,S:1,s:1,l:1,a:1});function dO(e){this.dg=null,this.dg=e}N=dO.prototype=new MD,N.constructor=dO;function fO(){}fO.prototype=N,N.u=(function(){return this.dg.a.length}),N.y=(function(){var e=q();return e.mb(this.dg,e.ai)}),N.r=(function(e){return e instanceof dO?B().my(this.dg,e.dg):jD.prototype.r.call(this,e)}),N.m=(function(){return new WC(this.dg)}),N.fc=(function(e){return this.dg.a[e]}),N.d=(function(e){return this.fc(e|0)}),N.v=(function(e){return this.fc(e)}),N.ae=(function(){return mT()}),N.bT=(function(){return this.dg}),new I().i(dO,`scala.collection.mutable.ArraySeq$ofDouble`,{c4:1,Y:1,K:1,n:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,k:1,d:1,M:1,J:1,N:1,H:1,A:1,R:1,q:1,r:1,S:1,s:1,l:1,a:1});function pO(e){this.dh=null,this.dh=e}N=pO.prototype=new MD,N.constructor=pO;function mO(){}mO.prototype=N,N.u=(function(){return this.dh.a.length}),N.y=(function(){var e=q();return e.mc(this.dh,e.ai)}),N.r=(function(e){return e instanceof pO?B().mz(this.dh,e.dh):jD.prototype.r.call(this,e)}),N.m=(function(){return new KC(this.dh)}),N.fd=(function(e){return this.dh.a[e]}),N.d=(function(e){return this.fd(e|0)}),N.v=(function(e){return this.fd(e)}),N.ae=(function(){return vT()}),N.bT=(function(){return this.dh}),new I().i(pO,`scala.collection.mutable.ArraySeq$ofFloat`,{c5:1,Y:1,K:1,n:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,k:1,d:1,M:1,J:1,N:1,H:1,A:1,R:1,q:1,r:1,S:1,s:1,l:1,a:1});function hO(e){this.di=null,this.di=e}N=hO.prototype=new MD,N.constructor=hO;function gO(){}gO.prototype=N,N.u=(function(){return this.di.a.length}),N.y=(function(){var e=q();return e.md(this.di,e.ai)}),N.r=(function(e){return e instanceof hO?B().im(this.di,e.di):jD.prototype.r.call(this,e)}),N.m=(function(){return new JC(this.di)}),N.fe=(function(e){return this.di.a[e]}),N.d=(function(e){return this.fe(e|0)}),N.v=(function(e){return this.fe(e)}),N.ae=(function(){return ST()}),N.bT=(function(){return this.di}),new I().i(hO,`scala.collection.mutable.ArraySeq$ofInt`,{c6:1,Y:1,K:1,n:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,k:1,d:1,M:1,J:1,N:1,H:1,A:1,R:1,q:1,r:1,S:1,s:1,l:1,a:1});function _O(e){this.dj=null,this.dj=e}N=_O.prototype=new MD,N.constructor=_O;function vO(){}vO.prototype=N,N.u=(function(){return this.dj.a.length}),N.y=(function(){var e=q();return e.me(this.dj,e.ai)}),N.r=(function(e){return e instanceof _O?B().mA(this.dj,e.dj):jD.prototype.r.call(this,e)}),N.m=(function(){return new XC(this.dj)}),N.ff=(function(e){return this.dj.a[e]}),N.d=(function(e){return this.ff(e|0)}),N.v=(function(e){return this.ff(e)}),N.ae=(function(){return ET()}),N.bT=(function(){return this.dj}),new I().i(_O,`scala.collection.mutable.ArraySeq$ofLong`,{c7:1,Y:1,K:1,n:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,k:1,d:1,M:1,J:1,N:1,H:1,A:1,R:1,q:1,r:1,S:1,s:1,l:1,a:1});function yO(e){this.cB=null,this.cB=e}N=yO.prototype=new MD,N.constructor=yO;function bO(){}bO.prototype=N,N.ae=(function(){return gm().m4(Da(this.cB).Q.Q())}),N.u=(function(){return this.cB.a.length}),N.v=(function(e){return this.cB.a[e]}),N.y=(function(){var e=q();return e.m8(this.cB,e.ai)}),N.r=(function(e){return e instanceof yO?Qp().mD(this.cB,e.cB):jD.prototype.r.call(this,e)}),N.m=(function(){return RS(new zS,this.cB)}),N.d=(function(e){return this.v(e|0)}),N.bT=(function(){return this.cB}),new I().i(yO,`scala.collection.mutable.ArraySeq$ofRef`,{c8:1,Y:1,K:1,n:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,k:1,d:1,M:1,J:1,N:1,H:1,A:1,R:1,q:1,r:1,S:1,s:1,l:1,a:1});function xO(e){this.dk=null,this.dk=e}N=xO.prototype=new MD,N.constructor=xO;function SO(){}SO.prototype=N,N.u=(function(){return this.dk.a.length}),N.fb=(function(e){return this.dk.a[e]}),N.y=(function(){var e=q();return e.mf(this.dk,e.ai)}),N.r=(function(e){return e instanceof xO?B().mB(this.dk,e.dk):jD.prototype.r.call(this,e)}),N.m=(function(){return new QC(this.dk)}),N.d=(function(e){return this.fb(e|0)}),N.v=(function(e){return this.fb(e)}),N.ae=(function(){return HT()}),N.bT=(function(){return this.dk}),new I().i(xO,`scala.collection.mutable.ArraySeq$ofShort`,{c9:1,Y:1,K:1,n:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,k:1,d:1,M:1,J:1,N:1,H:1,A:1,R:1,q:1,r:1,S:1,s:1,l:1,a:1});function CO(e){this.dS=null,this.dS=e}N=CO.prototype=new MD,N.constructor=CO;function wO(){}wO.prototype=N,N.u=(function(){return this.dS.a.length}),N.y=(function(){var e=q();return e.mg(this.dS,e.ai)}),N.r=(function(e){return e instanceof CO?this.dS.a.length===e.dS.a.length:jD.prototype.r.call(this,e)}),N.m=(function(){return new ew(this.dS)}),N.fg=(function(e){}),N.d=(function(e){this.fg(e|0)}),N.v=(function(e){this.fg(e)}),N.ae=(function(){return KT()}),N.bT=(function(){return this.dS}),new I().i(CO,`scala.collection.mutable.ArraySeq$ofUnit`,{ca:1,Y:1,K:1,n:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,k:1,d:1,M:1,J:1,N:1,H:1,A:1,R:1,q:1,r:1,S:1,s:1,l:1,a:1});function TO(e,t,n,r){return e.j=n,e.l=r,OD(e,t),e}function EO(){this.e=null,this.j=null,this.l=0}N=EO.prototype=new iO,N.constructor=EO;function DO(){}DO.prototype=N;function OO(e){this.e=null,OD(this,e)}N=OO.prototype=new iO,N.constructor=OO;function kO(){}kO.prototype=N,N.v=(function(e){if(e>=0&&e<this.e.a.length)return this.e.a[e];throw this.aD(e)}),N.dy=(function(e,t){if(e>=0&&e<this.e.a.length){var n=this.e.g();return n.a[e]=t,new OO(n)}else throw this.aD(e)}),N.dr=(function(e){if(this.e.a.length<32)return new OO(U().eq(this.e,e));var t=this.e,n=U().be,r=new F(1);return r.a[0]=e,new zO(t,32,n,r,33)}),N.ca=(function(e){return new OO(U().bV(this.e,e))}),N.cq=(function(){return 1}),N.cp=(function(e){return this.e}),N.c9=(function(e){return this.ca(e)}),N.d=(function(e){var t=e|0;if(t>=0&&t<this.e.a.length)return this.e.a[t];throw this.aD(t)}),new I().i(OO,`scala.collection.immutable.Vector1`,{gm:1,ab:1,a6:1,x:1,n:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,k:1,d:1,v:1,t:1,w:1,y:1,q:1,r:1,B:1,z:1,s:1,l:1,W:1,a:1});function AO(e,t){this.hI=null,this.at=null,this.hI=e,this.at=t}N=AO.prototype=new nO,N.constructor=AO;function jO(){}jO.prototype=N,N.z=(function(){return this.hI}),N.bw=(function(){return`::`}),N.bu=(function(){return 2}),N.bv=(function(e){switch(e){case 0:return this.hI;case 1:return this.at;default:return K().dY(e)}}),N.bW=(function(){return new Hx(this)}),N.w=(function(){return this.at}),new I().i(AO,`scala.collection.immutable.$colon$colon`,{fH:1,aO:1,x:1,n:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,k:1,d:1,v:1,t:1,w:1,aM:1,ao:1,aI:1,aN:1,bE:1,s:1,l:1,z:1,W:1,a:1,U:1});function MO(){}N=MO.prototype=new nO,N.constructor=MO;function NO(){}NO.prototype=N,N.iB=(function(){throw new dy(`head of empty list`)}),N.qC=(function(){throw new ly(`tail of empty list`)}),N.B=(function(){return 0}),N.m=(function(){return eg().K}),N.bw=(function(){return`Nil`}),N.bu=(function(){return 0}),N.bv=(function(e){return K().dY(e)}),N.bW=(function(){return new Hx(this)}),N.w=(function(){this.qC()}),N.z=(function(){this.iB()}),new I().i(MO,`scala.collection.immutable.Nil$`,{gb:1,aO:1,x:1,n:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,k:1,d:1,v:1,t:1,w:1,aM:1,ao:1,aI:1,aN:1,bE:1,s:1,l:1,z:1,W:1,a:1,U:1});var PO;function $(){return PO||=new MO,PO}function FO(){this.e=null,this.j=null,this.l=0,TO(this,U().hV,U().hV,0)}N=FO.prototype=new DO,N.constructor=FO;function IO(){}IO.prototype=N,N.m3=(function(e){throw this.aD(e)}),N.dy=(function(e,t){throw this.aD(e)}),N.dr=(function(e){var t=new F(1);return t.a[0]=e,new OO(t)}),N.cq=(function(){return 0}),N.cp=(function(e){return null}),N.r=(function(e){return this===e||!(e instanceof kD)&&YT(this,e)}),N.aD=(function(e){return ny(new ry,e+` is out of bounds (empty vector)`)}),N.c9=(function(e){return this}),N.d=(function(e){this.m3(e|0)}),N.v=(function(e){this.m3(e)}),new I().i(FO,`scala.collection.immutable.Vector0$`,{gl:1,aa:1,ab:1,a6:1,x:1,n:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,k:1,d:1,v:1,t:1,w:1,y:1,q:1,r:1,B:1,z:1,s:1,l:1,W:1,a:1});var LO;function RO(){return LO||=new FO,LO}function zO(e,t,n,r,i){this.e=null,this.j=null,this.l=0,this.bs=0,this.b6=null,this.bs=t,this.b6=n,TO(this,e,r,i)}N=zO.prototype=new DO,N.constructor=zO;function BO(){}BO.prototype=N,N.v=(function(e){if(e>=0&&e<this.l){var t=e-this.bs|0;if(t>=0){var n=t>>>5|0,r=31&t;return n<this.b6.a.length?this.b6.a[n].a[r]:this.j.a[31&t]}else return this.e.a[e]}else throw this.aD(e)}),N.dy=(function(e,t){if(e>=0&&e<this.l)if(e>=this.bs){var n=e-this.bs|0,r=n>>>5|0,i=31&n;if(r<this.b6.a.length){var a=this.b6.g(),o=a.a[r].g();return o.a[i]=t,a.a[r]=o,new zO(this.e,this.bs,a,this.j,this.l)}else{var s=this.j.g();return s.a[i]=t,new zO(this.e,this.bs,this.b6,s,this.l)}}else{var c=this.e.g();return c.a[e]=t,new zO(c,this.bs,this.b6,this.j,this.l)}else throw this.aD(e)}),N.dr=(function(e){if(this.j.a.length<32){var t=U().eq(this.j,e),n=1+this.l|0;return new zO(this.e,this.bs,this.b6,t,n)}else if(this.b6.a.length<30){var r=U().G(this.b6,this.j),i=new F(1);i.a[0]=e;var a=1+this.l|0;return new zO(this.e,this.bs,r,i,a)}else{var o=this.e,s=this.bs,c=this.b6,l=this.bs,u=U().ck,d=this.j,f=new(L.r().r()).C(1);f.a[0]=d;var p=new F(1);return p.a[0]=e,new VO(o,s,c,960+l|0,u,f,p,1+this.l|0)}}),N.ca=(function(e){var t=U().bV(this.e,e),n=U().a3(2,this.b6,e),r=U().bV(this.j,e);return new zO(t,this.bs,n,r,this.l)}),N.cq=(function(){return 3}),N.cp=(function(e){switch(e){case 0:return this.e;case 1:return this.b6;case 2:return this.j;default:throw new vy(e)}}),N.c9=(function(e){return this.ca(e)}),N.d=(function(e){var t=e|0;if(t>=0&&t<this.l){var n=t-this.bs|0;if(n>=0){var r=n>>>5|0,i=31&n;return r<this.b6.a.length?this.b6.a[r].a[i]:this.j.a[31&n]}else return this.e.a[t]}else throw this.aD(t)}),new I().i(zO,`scala.collection.immutable.Vector2`,{gn:1,aa:1,ab:1,a6:1,x:1,n:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,k:1,d:1,v:1,t:1,w:1,y:1,q:1,r:1,B:1,z:1,s:1,l:1,W:1,a:1});function VO(e,t,n,r,i,a,o,s){this.e=null,this.j=null,this.l=0,this.b1=0,this.bd=null,this.b2=0,this.aN=null,this.aO=null,this.b1=t,this.bd=n,this.b2=r,this.aN=i,this.aO=a,TO(this,e,o,s)}N=VO.prototype=new DO,N.constructor=VO;function HO(){}HO.prototype=N,N.v=(function(e){if(e>=0&&e<this.l){var t=e-this.b2|0;if(t>=0){var n=t>>>10|0,r=31&(t>>>5|0),i=31&t;return n<this.aN.a.length?this.aN.a[n].a[r].a[i]:r<this.aO.a.length?this.aO.a[r].a[i]:this.j.a[i]}else if(e>=this.b1){var a=e-this.b1|0;return this.bd.a[a>>>5|0].a[31&a]}else return this.e.a[e]}else throw this.aD(e)}),N.dy=(function(e,t){if(e>=0&&e<this.l)if(e>=this.b2){var n=e-this.b2|0,r=n>>>10|0,i=31&(n>>>5|0),a=31&n;if(r<this.aN.a.length){var o=this.aN.g(),s=o.a[r].g(),c=s.a[i].g();return c.a[a]=t,s.a[i]=c,o.a[r]=s,new VO(this.e,this.b1,this.bd,this.b2,o,this.aO,this.j,this.l)}else if(i<this.aO.a.length){var l=this.aO.g(),u=l.a[i].g();return u.a[a]=t,l.a[i]=u,new VO(this.e,this.b1,this.bd,this.b2,this.aN,l,this.j,this.l)}else{var d=this.j.g();return d.a[a]=t,new VO(this.e,this.b1,this.bd,this.b2,this.aN,this.aO,d,this.l)}}else if(e>=this.b1){var f=e-this.b1|0,p=this.bd,m=f>>>5|0,h=31&f,g=p.g(),_=g.a[m].g();return _.a[h]=t,g.a[m]=_,new VO(this.e,this.b1,g,this.b2,this.aN,this.aO,this.j,this.l)}else{var v=this.e.g();return v.a[e]=t,new VO(v,this.b1,this.bd,this.b2,this.aN,this.aO,this.j,this.l)}else throw this.aD(e)}),N.dr=(function(e){if(this.j.a.length<32){var t=U().eq(this.j,e),n=1+this.l|0;return new VO(this.e,this.b1,this.bd,this.b2,this.aN,this.aO,t,n)}else if(this.aO.a.length<31){var r=U().G(this.aO,this.j),i=new F(1);i.a[0]=e;var a=1+this.l|0;return new VO(this.e,this.b1,this.bd,this.b2,this.aN,r,i,a)}else if(this.aN.a.length<30){var o=U().G(this.aN,U().G(this.aO,this.j)),s=U().be,c=new F(1);c.a[0]=e;var l=1+this.l|0;return new VO(this.e,this.b1,this.bd,this.b2,o,s,c,l)}else{var u=this.e,d=this.b1,f=this.bd,p=this.b2,m=this.aN,h=this.b2,g=U().ek,_=U().G(this.aO,this.j),v=new(L.r().r().r()).C(1);v.a[0]=_;var y=U().be,ee=new F(1);return ee.a[0]=e,new UO(u,d,f,p,m,30720+h|0,g,v,y,ee,1+this.l|0)}}),N.ca=(function(e){var t=U().bV(this.e,e),n=U().a3(2,this.bd,e),r=U().a3(3,this.aN,e),i=U().a3(2,this.aO,e),a=U().bV(this.j,e);return new VO(t,this.b1,n,this.b2,r,i,a,this.l)}),N.cq=(function(){return 5}),N.cp=(function(e){switch(e){case 0:return this.e;case 1:return this.bd;case 2:return this.aN;case 3:return this.aO;case 4:return this.j;default:throw new vy(e)}}),N.c9=(function(e){return this.ca(e)}),N.d=(function(e){var t=e|0;if(t>=0&&t<this.l){var n=t-this.b2|0;if(n>=0){var r=n>>>10|0,i=31&(n>>>5|0),a=31&n;return r<this.aN.a.length?this.aN.a[r].a[i].a[a]:i<this.aO.a.length?this.aO.a[i].a[a]:this.j.a[a]}else if(t>=this.b1){var o=t-this.b1|0;return this.bd.a[o>>>5|0].a[31&o]}else return this.e.a[t]}else throw this.aD(t)}),new I().i(VO,`scala.collection.immutable.Vector3`,{go:1,aa:1,ab:1,a6:1,x:1,n:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,k:1,d:1,v:1,t:1,w:1,y:1,q:1,r:1,B:1,z:1,s:1,l:1,W:1,a:1});function UO(e,t,n,r,i,a,o,s,c,l,u){this.e=null,this.j=null,this.l=0,this.aF=0,this.aV=null,this.aG=0,this.aW=null,this.aH=0,this.av=null,this.ax=null,this.aw=null,this.aF=t,this.aV=n,this.aG=r,this.aW=i,this.aH=a,this.av=o,this.ax=s,this.aw=c,TO(this,e,l,u)}N=UO.prototype=new DO,N.constructor=UO;function WO(){}WO.prototype=N,N.v=(function(e){if(e>=0&&e<this.l){var t=e-this.aH|0;if(t>=0){var n=t>>>15|0,r=31&(t>>>10|0),i=31&(t>>>5|0),a=31&t;return n<this.av.a.length?this.av.a[n].a[r].a[i].a[a]:r<this.ax.a.length?this.ax.a[r].a[i].a[a]:i<this.aw.a.length?this.aw.a[i].a[a]:this.j.a[a]}else if(e>=this.aG){var o=e-this.aG|0;return this.aW.a[o>>>10|0].a[31&(o>>>5|0)].a[31&o]}else if(e>=this.aF){var s=e-this.aF|0;return this.aV.a[s>>>5|0].a[31&s]}else return this.e.a[e]}else throw this.aD(e)}),N.dy=(function(e,t){if(e>=0&&e<this.l)if(e>=this.aH){var n=e-this.aH|0,r=n>>>15|0,i=31&(n>>>10|0),a=31&(n>>>5|0),o=31&n;if(r<this.av.a.length){var s=this.av.g(),c=s.a[r].g(),l=c.a[i].g(),u=l.a[a].g();return u.a[o]=t,l.a[a]=u,c.a[i]=l,s.a[r]=c,new UO(this.e,this.aF,this.aV,this.aG,this.aW,this.aH,s,this.ax,this.aw,this.j,this.l)}else if(i<this.ax.a.length){var d=this.ax.g(),f=d.a[i].g(),p=f.a[a].g();return p.a[o]=t,f.a[a]=p,d.a[i]=f,new UO(this.e,this.aF,this.aV,this.aG,this.aW,this.aH,this.av,d,this.aw,this.j,this.l)}else if(a<this.aw.a.length){var m=this.aw.g(),h=m.a[a].g();return h.a[o]=t,m.a[a]=h,new UO(this.e,this.aF,this.aV,this.aG,this.aW,this.aH,this.av,this.ax,m,this.j,this.l)}else{var g=this.j.g();return g.a[o]=t,new UO(this.e,this.aF,this.aV,this.aG,this.aW,this.aH,this.av,this.ax,this.aw,g,this.l)}}else if(e>=this.aG){var _=e-this.aG|0,v=this.aW,y=_>>>10|0,ee=31&(_>>>5|0),te=31&_,ne=v.g(),b=ne.a[y].g(),x=b.a[ee].g();return x.a[te]=t,b.a[ee]=x,ne.a[y]=b,new UO(this.e,this.aF,this.aV,this.aG,ne,this.aH,this.av,this.ax,this.aw,this.j,this.l)}else if(e>=this.aF){var S=e-this.aF|0,re=this.aV,ie=S>>>5|0,ae=31&S,oe=re.g(),C=oe.a[ie].g();return C.a[ae]=t,oe.a[ie]=C,new UO(this.e,this.aF,oe,this.aG,this.aW,this.aH,this.av,this.ax,this.aw,this.j,this.l)}else{var se=this.e.g();return se.a[e]=t,new UO(se,this.aF,this.aV,this.aG,this.aW,this.aH,this.av,this.ax,this.aw,this.j,this.l)}else throw this.aD(e)}),N.dr=(function(e){if(this.j.a.length<32){var t=U().eq(this.j,e),n=1+this.l|0;return new UO(this.e,this.aF,this.aV,this.aG,this.aW,this.aH,this.av,this.ax,this.aw,t,n)}else if(this.aw.a.length<31){var r=U().G(this.aw,this.j),i=new F(1);i.a[0]=e;var a=1+this.l|0;return new UO(this.e,this.aF,this.aV,this.aG,this.aW,this.aH,this.av,this.ax,r,i,a)}else if(this.ax.a.length<31){var o=U().G(this.ax,U().G(this.aw,this.j)),s=U().be,c=new F(1);c.a[0]=e;var l=1+this.l|0;return new UO(this.e,this.aF,this.aV,this.aG,this.aW,this.aH,this.av,o,s,c,l)}else if(this.av.a.length<30){var u=U().G(this.av,U().G(this.ax,U().G(this.aw,this.j))),d=U().ck,f=U().be,p=new F(1);p.a[0]=e;var m=1+this.l|0;return new UO(this.e,this.aF,this.aV,this.aG,this.aW,this.aH,u,d,f,p,m)}else{var h=this.e,g=this.aF,_=this.aV,v=this.aG,y=this.aW,ee=this.aH,te=this.av,ne=this.aH,b=U().hW,x=U().G(this.ax,U().G(this.aw,this.j)),S=new(L.r().r().r().r()).C(1);S.a[0]=x;var re=U().ck,ie=U().be,ae=new F(1);return ae.a[0]=e,new GO(h,g,_,v,y,ee,te,983040+ne|0,b,S,re,ie,ae,1+this.l|0)}}),N.ca=(function(e){var t=U().bV(this.e,e),n=U().a3(2,this.aV,e),r=U().a3(3,this.aW,e),i=U().a3(4,this.av,e),a=U().a3(3,this.ax,e),o=U().a3(2,this.aw,e),s=U().bV(this.j,e);return new UO(t,this.aF,n,this.aG,r,this.aH,i,a,o,s,this.l)}),N.cq=(function(){return 7}),N.cp=(function(e){switch(e){case 0:return this.e;case 1:return this.aV;case 2:return this.aW;case 3:return this.av;case 4:return this.ax;case 5:return this.aw;case 6:return this.j;default:throw new vy(e)}}),N.c9=(function(e){return this.ca(e)}),N.d=(function(e){var t=e|0;if(t>=0&&t<this.l){var n=t-this.aH|0;if(n>=0){var r=n>>>15|0,i=31&(n>>>10|0),a=31&(n>>>5|0),o=31&n;return r<this.av.a.length?this.av.a[r].a[i].a[a].a[o]:i<this.ax.a.length?this.ax.a[i].a[a].a[o]:a<this.aw.a.length?this.aw.a[a].a[o]:this.j.a[o]}else if(t>=this.aG){var s=t-this.aG|0;return this.aW.a[s>>>10|0].a[31&(s>>>5|0)].a[31&s]}else if(t>=this.aF){var c=t-this.aF|0;return this.aV.a[c>>>5|0].a[31&c]}else return this.e.a[t]}else throw this.aD(t)}),new I().i(UO,`scala.collection.immutable.Vector4`,{gp:1,aa:1,ab:1,a6:1,x:1,n:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,k:1,d:1,v:1,t:1,w:1,y:1,q:1,r:1,B:1,z:1,s:1,l:1,W:1,a:1});function GO(e,t,n,r,i,a,o,s,c,l,u,d,f,p){this.e=null,this.j=null,this.l=0,this.ak=0,this.az=null,this.al=0,this.aA=null,this.am=0,this.aB=null,this.an=0,this.a6=null,this.a9=null,this.a8=null,this.a7=null,this.ak=t,this.az=n,this.al=r,this.aA=i,this.am=a,this.aB=o,this.an=s,this.a6=c,this.a9=l,this.a8=u,this.a7=d,TO(this,e,f,p)}N=GO.prototype=new DO,N.constructor=GO;function KO(){}KO.prototype=N,N.v=(function(e){if(e>=0&&e<this.l){var t=e-this.an|0;if(t>=0){var n=t>>>20|0,r=31&(t>>>15|0),i=31&(t>>>10|0),a=31&(t>>>5|0),o=31&t;return n<this.a6.a.length?this.a6.a[n].a[r].a[i].a[a].a[o]:r<this.a9.a.length?this.a9.a[r].a[i].a[a].a[o]:i<this.a8.a.length?this.a8.a[i].a[a].a[o]:a<this.a7.a.length?this.a7.a[a].a[o]:this.j.a[o]}else if(e>=this.am){var s=e-this.am|0;return this.aB.a[s>>>15|0].a[31&(s>>>10|0)].a[31&(s>>>5|0)].a[31&s]}else if(e>=this.al){var c=e-this.al|0;return this.aA.a[c>>>10|0].a[31&(c>>>5|0)].a[31&c]}else if(e>=this.ak){var l=e-this.ak|0;return this.az.a[l>>>5|0].a[31&l]}else return this.e.a[e]}else throw this.aD(e)}),N.dy=(function(e,t){if(e>=0&&e<this.l)if(e>=this.an){var n=e-this.an|0,r=n>>>20|0,i=31&(n>>>15|0),a=31&(n>>>10|0),o=31&(n>>>5|0),s=31&n;if(r<this.a6.a.length){var c=this.a6.g(),l=c.a[r].g(),u=l.a[i].g(),d=u.a[a].g(),f=d.a[o].g();return f.a[s]=t,d.a[o]=f,u.a[a]=d,l.a[i]=u,c.a[r]=l,new GO(this.e,this.ak,this.az,this.al,this.aA,this.am,this.aB,this.an,c,this.a9,this.a8,this.a7,this.j,this.l)}else if(i<this.a9.a.length){var p=this.a9.g(),m=p.a[i].g(),h=m.a[a].g(),g=h.a[o].g();return g.a[s]=t,h.a[o]=g,m.a[a]=h,p.a[i]=m,new GO(this.e,this.ak,this.az,this.al,this.aA,this.am,this.aB,this.an,this.a6,p,this.a8,this.a7,this.j,this.l)}else if(a<this.a8.a.length){var _=this.a8.g(),v=_.a[a].g(),y=v.a[o].g();return y.a[s]=t,v.a[o]=y,_.a[a]=v,new GO(this.e,this.ak,this.az,this.al,this.aA,this.am,this.aB,this.an,this.a6,this.a9,_,this.a7,this.j,this.l)}else if(o<this.a7.a.length){var ee=this.a7.g(),te=ee.a[o].g();return te.a[s]=t,ee.a[o]=te,new GO(this.e,this.ak,this.az,this.al,this.aA,this.am,this.aB,this.an,this.a6,this.a9,this.a8,ee,this.j,this.l)}else{var ne=this.j.g();return ne.a[s]=t,new GO(this.e,this.ak,this.az,this.al,this.aA,this.am,this.aB,this.an,this.a6,this.a9,this.a8,this.a7,ne,this.l)}}else if(e>=this.am){var b=e-this.am|0,x=this.aB,S=b>>>15|0,re=31&(b>>>10|0),ie=31&(b>>>5|0),ae=31&b,oe=x.g(),C=oe.a[S].g(),se=C.a[re].g(),w=se.a[ie].g();return w.a[ae]=t,se.a[ie]=w,C.a[re]=se,oe.a[S]=C,new GO(this.e,this.ak,this.az,this.al,this.aA,this.am,oe,this.an,this.a6,this.a9,this.a8,this.a7,this.j,this.l)}else if(e>=this.al){var ce=e-this.al|0,le=this.aA,ue=ce>>>10|0,de=31&(ce>>>5|0),fe=31&ce,pe=le.g(),me=pe.a[ue].g(),he=me.a[de].g();return he.a[fe]=t,me.a[de]=he,pe.a[ue]=me,new GO(this.e,this.ak,this.az,this.al,pe,this.am,this.aB,this.an,this.a6,this.a9,this.a8,this.a7,this.j,this.l)}else if(e>=this.ak){var ge=e-this.ak|0,_e=this.az,ve=ge>>>5|0,ye=31&ge,be=_e.g(),xe=be.a[ve].g();return xe.a[ye]=t,be.a[ve]=xe,new GO(this.e,this.ak,be,this.al,this.aA,this.am,this.aB,this.an,this.a6,this.a9,this.a8,this.a7,this.j,this.l)}else{var Se=this.e.g();return Se.a[e]=t,new GO(Se,this.ak,this.az,this.al,this.aA,this.am,this.aB,this.an,this.a6,this.a9,this.a8,this.a7,this.j,this.l)}else throw this.aD(e)}),N.dr=(function(e){if(this.j.a.length<32){var t=U().eq(this.j,e),n=1+this.l|0;return new GO(this.e,this.ak,this.az,this.al,this.aA,this.am,this.aB,this.an,this.a6,this.a9,this.a8,this.a7,t,n)}else if(this.a7.a.length<31){var r=U().G(this.a7,this.j),i=new F(1);i.a[0]=e;var a=1+this.l|0;return new GO(this.e,this.ak,this.az,this.al,this.aA,this.am,this.aB,this.an,this.a6,this.a9,this.a8,r,i,a)}else if(this.a8.a.length<31){var o=U().G(this.a8,U().G(this.a7,this.j)),s=U().be,c=new F(1);c.a[0]=e;var l=1+this.l|0;return new GO(this.e,this.ak,this.az,this.al,this.aA,this.am,this.aB,this.an,this.a6,this.a9,o,s,c,l)}else if(this.a9.a.length<31){var u=U().G(this.a9,U().G(this.a8,U().G(this.a7,this.j))),d=U().ck,f=U().be,p=new F(1);p.a[0]=e;var m=1+this.l|0;return new GO(this.e,this.ak,this.az,this.al,this.aA,this.am,this.aB,this.an,this.a6,u,d,f,p,m)}else if(this.a6.a.length<30){var h=U().G(this.a6,U().G(this.a9,U().G(this.a8,U().G(this.a7,this.j)))),g=U().ek,_=U().ck,v=U().be,y=new F(1);y.a[0]=e;var ee=1+this.l|0;return new GO(this.e,this.ak,this.az,this.al,this.aA,this.am,this.aB,this.an,h,g,_,v,y,ee)}else{var te=this.e,ne=this.ak,b=this.az,x=this.al,S=this.aA,re=this.am,ie=this.aB,ae=this.an,oe=this.a6,C=this.an,se=U().lt,w=U().G(this.a9,U().G(this.a8,U().G(this.a7,this.j))),ce=new(L.r().r().r().r().r()).C(1);ce.a[0]=w;var le=U().ek,ue=U().ck,de=U().be,fe=new F(1);return fe.a[0]=e,new qO(te,ne,b,x,S,re,ie,ae,oe,31457280+C|0,se,ce,le,ue,de,fe,1+this.l|0)}}),N.ca=(function(e){var t=U().bV(this.e,e),n=U().a3(2,this.az,e),r=U().a3(3,this.aA,e),i=U().a3(4,this.aB,e),a=U().a3(5,this.a6,e),o=U().a3(4,this.a9,e),s=U().a3(3,this.a8,e),c=U().a3(2,this.a7,e),l=U().bV(this.j,e);return new GO(t,this.ak,n,this.al,r,this.am,i,this.an,a,o,s,c,l,this.l)}),N.cq=(function(){return 9}),N.cp=(function(e){switch(e){case 0:return this.e;case 1:return this.az;case 2:return this.aA;case 3:return this.aB;case 4:return this.a6;case 5:return this.a9;case 6:return this.a8;case 7:return this.a7;case 8:return this.j;default:throw new vy(e)}}),N.c9=(function(e){return this.ca(e)}),N.d=(function(e){var t=e|0;if(t>=0&&t<this.l){var n=t-this.an|0;if(n>=0){var r=n>>>20|0,i=31&(n>>>15|0),a=31&(n>>>10|0),o=31&(n>>>5|0),s=31&n;return r<this.a6.a.length?this.a6.a[r].a[i].a[a].a[o].a[s]:i<this.a9.a.length?this.a9.a[i].a[a].a[o].a[s]:a<this.a8.a.length?this.a8.a[a].a[o].a[s]:o<this.a7.a.length?this.a7.a[o].a[s]:this.j.a[s]}else if(t>=this.am){var c=t-this.am|0;return this.aB.a[c>>>15|0].a[31&(c>>>10|0)].a[31&(c>>>5|0)].a[31&c]}else if(t>=this.al){var l=t-this.al|0;return this.aA.a[l>>>10|0].a[31&(l>>>5|0)].a[31&l]}else if(t>=this.ak){var u=t-this.ak|0;return this.az.a[u>>>5|0].a[31&u]}else return this.e.a[t]}else throw this.aD(t)}),new I().i(GO,`scala.collection.immutable.Vector5`,{gq:1,aa:1,ab:1,a6:1,x:1,n:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,k:1,d:1,v:1,t:1,w:1,y:1,q:1,r:1,B:1,z:1,s:1,l:1,W:1,a:1});function qO(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){this.e=null,this.j=null,this.l=0,this.aa=0,this.ao=null,this.ab=0,this.ap=null,this.ac=0,this.aq=null,this.ad=0,this.ar=null,this.ah=0,this.Y=null,this.a2=null,this.a1=null,this.a0=null,this.Z=null,this.aa=t,this.ao=n,this.ab=r,this.ap=i,this.ac=a,this.aq=o,this.ad=s,this.ar=c,this.ah=l,this.Y=u,this.a2=d,this.a1=f,this.a0=p,this.Z=m,TO(this,e,h,g)}N=qO.prototype=new DO,N.constructor=qO;function JO(){}JO.prototype=N,N.v=(function(e){if(e>=0&&e<this.l){var t=e-this.ah|0;if(t>=0){var n=t>>>25|0,r=31&(t>>>20|0),i=31&(t>>>15|0),a=31&(t>>>10|0),o=31&(t>>>5|0),s=31&t;return n<this.Y.a.length?this.Y.a[n].a[r].a[i].a[a].a[o].a[s]:r<this.a2.a.length?this.a2.a[r].a[i].a[a].a[o].a[s]:i<this.a1.a.length?this.a1.a[i].a[a].a[o].a[s]:a<this.a0.a.length?this.a0.a[a].a[o].a[s]:o<this.Z.a.length?this.Z.a[o].a[s]:this.j.a[s]}else if(e>=this.ad){var c=e-this.ad|0;return this.ar.a[c>>>20|0].a[31&(c>>>15|0)].a[31&(c>>>10|0)].a[31&(c>>>5|0)].a[31&c]}else if(e>=this.ac){var l=e-this.ac|0;return this.aq.a[l>>>15|0].a[31&(l>>>10|0)].a[31&(l>>>5|0)].a[31&l]}else if(e>=this.ab){var u=e-this.ab|0;return this.ap.a[u>>>10|0].a[31&(u>>>5|0)].a[31&u]}else if(e>=this.aa){var d=e-this.aa|0;return this.ao.a[d>>>5|0].a[31&d]}else return this.e.a[e]}else throw this.aD(e)}),N.dy=(function(e,t){if(e>=0&&e<this.l)if(e>=this.ah){var n=e-this.ah|0,r=n>>>25|0,i=31&(n>>>20|0),a=31&(n>>>15|0),o=31&(n>>>10|0),s=31&(n>>>5|0),c=31&n;if(r<this.Y.a.length){var l=this.Y.g(),u=l.a[r].g(),d=u.a[i].g(),f=d.a[a].g(),p=f.a[o].g(),m=p.a[s].g();return m.a[c]=t,p.a[s]=m,f.a[o]=p,d.a[a]=f,u.a[i]=d,l.a[r]=u,new qO(this.e,this.aa,this.ao,this.ab,this.ap,this.ac,this.aq,this.ad,this.ar,this.ah,l,this.a2,this.a1,this.a0,this.Z,this.j,this.l)}else if(i<this.a2.a.length){var h=this.a2.g(),g=h.a[i].g(),_=g.a[a].g(),v=_.a[o].g(),y=v.a[s].g();return y.a[c]=t,v.a[s]=y,_.a[o]=v,g.a[a]=_,h.a[i]=g,new qO(this.e,this.aa,this.ao,this.ab,this.ap,this.ac,this.aq,this.ad,this.ar,this.ah,this.Y,h,this.a1,this.a0,this.Z,this.j,this.l)}else if(a<this.a1.a.length){var ee=this.a1.g(),te=ee.a[a].g(),ne=te.a[o].g(),b=ne.a[s].g();return b.a[c]=t,ne.a[s]=b,te.a[o]=ne,ee.a[a]=te,new qO(this.e,this.aa,this.ao,this.ab,this.ap,this.ac,this.aq,this.ad,this.ar,this.ah,this.Y,this.a2,ee,this.a0,this.Z,this.j,this.l)}else if(o<this.a0.a.length){var x=this.a0.g(),S=x.a[o].g(),re=S.a[s].g();return re.a[c]=t,S.a[s]=re,x.a[o]=S,new qO(this.e,this.aa,this.ao,this.ab,this.ap,this.ac,this.aq,this.ad,this.ar,this.ah,this.Y,this.a2,this.a1,x,this.Z,this.j,this.l)}else if(s<this.Z.a.length){var ie=this.Z.g(),ae=ie.a[s].g();return ae.a[c]=t,ie.a[s]=ae,new qO(this.e,this.aa,this.ao,this.ab,this.ap,this.ac,this.aq,this.ad,this.ar,this.ah,this.Y,this.a2,this.a1,this.a0,ie,this.j,this.l)}else{var oe=this.j.g();return oe.a[c]=t,new qO(this.e,this.aa,this.ao,this.ab,this.ap,this.ac,this.aq,this.ad,this.ar,this.ah,this.Y,this.a2,this.a1,this.a0,this.Z,oe,this.l)}}else if(e>=this.ad){var C=e-this.ad|0,se=this.ar,w=C>>>20|0,ce=31&(C>>>15|0),le=31&(C>>>10|0),ue=31&(C>>>5|0),de=31&C,fe=se.g(),pe=fe.a[w].g(),me=pe.a[ce].g(),he=me.a[le].g(),ge=he.a[ue].g();return ge.a[de]=t,he.a[ue]=ge,me.a[le]=he,pe.a[ce]=me,fe.a[w]=pe,new qO(this.e,this.aa,this.ao,this.ab,this.ap,this.ac,this.aq,this.ad,fe,this.ah,this.Y,this.a2,this.a1,this.a0,this.Z,this.j,this.l)}else if(e>=this.ac){var _e=e-this.ac|0,ve=this.aq,ye=_e>>>15|0,be=31&(_e>>>10|0),xe=31&(_e>>>5|0),Se=31&_e,Ce=ve.g(),we=Ce.a[ye].g(),T=we.a[be].g(),Te=T.a[xe].g();return Te.a[Se]=t,T.a[xe]=Te,we.a[be]=T,Ce.a[ye]=we,new qO(this.e,this.aa,this.ao,this.ab,this.ap,this.ac,Ce,this.ad,this.ar,this.ah,this.Y,this.a2,this.a1,this.a0,this.Z,this.j,this.l)}else if(e>=this.ab){var E=e-this.ab|0,Ee=this.ap,De=E>>>10|0,Oe=31&(E>>>5|0),ke=31&E,Ae=Ee.g(),je=Ae.a[De].g(),Me=je.a[Oe].g();return Me.a[ke]=t,je.a[Oe]=Me,Ae.a[De]=je,new qO(this.e,this.aa,this.ao,this.ab,Ae,this.ac,this.aq,this.ad,this.ar,this.ah,this.Y,this.a2,this.a1,this.a0,this.Z,this.j,this.l)}else if(e>=this.aa){var Ne=e-this.aa|0,Pe=this.ao,Fe=Ne>>>5|0,Ie=31&Ne,Le=Pe.g(),Re=Le.a[Fe].g();return Re.a[Ie]=t,Le.a[Fe]=Re,new qO(this.e,this.aa,Le,this.ab,this.ap,this.ac,this.aq,this.ad,this.ar,this.ah,this.Y,this.a2,this.a1,this.a0,this.Z,this.j,this.l)}else{var ze=this.e.g();return ze.a[e]=t,new qO(ze,this.aa,this.ao,this.ab,this.ap,this.ac,this.aq,this.ad,this.ar,this.ah,this.Y,this.a2,this.a1,this.a0,this.Z,this.j,this.l)}else throw this.aD(e)}),N.dr=(function(e){if(this.j.a.length<32){var t=U().eq(this.j,e),n=1+this.l|0;return new qO(this.e,this.aa,this.ao,this.ab,this.ap,this.ac,this.aq,this.ad,this.ar,this.ah,this.Y,this.a2,this.a1,this.a0,this.Z,t,n)}else if(this.Z.a.length<31){var r=U().G(this.Z,this.j),i=new F(1);i.a[0]=e;var a=1+this.l|0;return new qO(this.e,this.aa,this.ao,this.ab,this.ap,this.ac,this.aq,this.ad,this.ar,this.ah,this.Y,this.a2,this.a1,this.a0,r,i,a)}else if(this.a0.a.length<31){var o=U().G(this.a0,U().G(this.Z,this.j)),s=U().be,c=new F(1);c.a[0]=e;var l=1+this.l|0;return new qO(this.e,this.aa,this.ao,this.ab,this.ap,this.ac,this.aq,this.ad,this.ar,this.ah,this.Y,this.a2,this.a1,o,s,c,l)}else if(this.a1.a.length<31){var u=U().G(this.a1,U().G(this.a0,U().G(this.Z,this.j))),d=U().ck,f=U().be,p=new F(1);p.a[0]=e;var m=1+this.l|0;return new qO(this.e,this.aa,this.ao,this.ab,this.ap,this.ac,this.aq,this.ad,this.ar,this.ah,this.Y,this.a2,u,d,f,p,m)}else if(this.a2.a.length<31){var h=U().G(this.a2,U().G(this.a1,U().G(this.a0,U().G(this.Z,this.j)))),g=U().ek,_=U().ck,v=U().be,y=new F(1);y.a[0]=e;var ee=1+this.l|0;return new qO(this.e,this.aa,this.ao,this.ab,this.ap,this.ac,this.aq,this.ad,this.ar,this.ah,this.Y,h,g,_,v,y,ee)}else if(this.Y.a.length<62){var te=U().G(this.Y,U().G(this.a2,U().G(this.a1,U().G(this.a0,U().G(this.Z,this.j))))),ne=U().hW,b=U().ek,x=U().ck,S=U().be,re=new F(1);re.a[0]=e;var ie=1+this.l|0;return new qO(this.e,this.aa,this.ao,this.ab,this.ap,this.ac,this.aq,this.ad,this.ar,this.ah,te,ne,b,x,S,re,ie)}else throw $v(new ey)}),N.ca=(function(e){var t=U().bV(this.e,e),n=U().a3(2,this.ao,e),r=U().a3(3,this.ap,e),i=U().a3(4,this.aq,e),a=U().a3(5,this.ar,e),o=U().a3(6,this.Y,e),s=U().a3(5,this.a2,e),c=U().a3(4,this.a1,e),l=U().a3(3,this.a0,e),u=U().a3(2,this.Z,e),d=U().bV(this.j,e);return new qO(t,this.aa,n,this.ab,r,this.ac,i,this.ad,a,this.ah,o,s,c,l,u,d,this.l)}),N.cq=(function(){return 11}),N.cp=(function(e){switch(e){case 0:return this.e;case 1:return this.ao;case 2:return this.ap;case 3:return this.aq;case 4:return this.ar;case 5:return this.Y;case 6:return this.a2;case 7:return this.a1;case 8:return this.a0;case 9:return this.Z;case 10:return this.j;default:throw new vy(e)}}),N.c9=(function(e){return this.ca(e)}),N.d=(function(e){var t=e|0;if(t>=0&&t<this.l){var n=t-this.ah|0;if(n>=0){var r=n>>>25|0,i=31&(n>>>20|0),a=31&(n>>>15|0),o=31&(n>>>10|0),s=31&(n>>>5|0),c=31&n;return r<this.Y.a.length?this.Y.a[r].a[i].a[a].a[o].a[s].a[c]:i<this.a2.a.length?this.a2.a[i].a[a].a[o].a[s].a[c]:a<this.a1.a.length?this.a1.a[a].a[o].a[s].a[c]:o<this.a0.a.length?this.a0.a[o].a[s].a[c]:s<this.Z.a.length?this.Z.a[s].a[c]:this.j.a[c]}else if(t>=this.ad){var l=t-this.ad|0;return this.ar.a[l>>>20|0].a[31&(l>>>15|0)].a[31&(l>>>10|0)].a[31&(l>>>5|0)].a[31&l]}else if(t>=this.ac){var u=t-this.ac|0;return this.aq.a[u>>>15|0].a[31&(u>>>10|0)].a[31&(u>>>5|0)].a[31&u]}else if(t>=this.ab){var d=t-this.ab|0;return this.ap.a[d>>>10|0].a[31&(d>>>5|0)].a[31&d]}else if(t>=this.aa){var f=t-this.aa|0;return this.ao.a[f>>>5|0].a[31&f]}else return this.e.a[t]}else throw this.aD(t)}),new I().i(qO,`scala.collection.immutable.Vector6`,{gr:1,aa:1,ab:1,a6:1,x:1,n:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,k:1,d:1,v:1,t:1,w:1,y:1,q:1,r:1,B:1,z:1,s:1,l:1,W:1,a:1});function YO(e,t){return e.aR=t,e}function XO(e){return YO(e,E_(new O_)),e}function ZO(){this.aR=null}N=ZO.prototype=new KE,N.constructor=ZO;function QO(){}QO.prototype=N,N.bi=(function(){return`IndexedSeq`}),N.m=(function(){return HS(new US,new PE(this))}),N.b5=(function(e){var t=this.aR.u();return t===e?0:t<e?-1:1}),N.aZ=(function(e){}),N.aX=(function(e){return fm(this,e)}),N.u=(function(){return this.aR.u()}),N.B=(function(){return this.aR.u()}),N.o2=(function(e){var t=this.aR,n=``+Fa(e);return t.q+=n,this}),N.C=(function(){return this.aR.q}),N.m0=(function(e){if(e instanceof lO)this.aR.lZ(e.bH);else if(e instanceof ZO){var t=this.aR,n=e.aR;t.q=``+t.q+n}else{var r=e.B();if(r!==0){var i=this.aR;r>0&&i.u();for(var a=e.m();a.o();){var o=``+Fa(Ga(a.h()));i.q+=o}}}return this}),N.c=(function(){return this.aR.u()===0}),N.bg=(function(){return Mx()}),N.aY=(function(){return this.aR.q}),N.aT=(function(e){return this.o2(Ga(e))}),N.es=(function(e){return XO(new ZO).m0(e)}),N.fr=(function(e){return XO(new ZO).m0(e)}),N.d=(function(e){var t=e|0;return Wa(this.aR.mi(t))}),N.v=(function(e){return Wa(this.aR.mi(e))}),new I().i(ZO,`scala.collection.mutable.StringBuilder`,{ce:1,K:1,n:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,k:1,d:1,M:1,J:1,N:1,H:1,A:1,a7:1,L:1,I:1,G:1,R:1,q:1,r:1,S:1,aD:1,a:1});function $O(e){var t=new tk().gv(e);e.bR=t.bR,e.cE=t.cE,e.g9=!1}function ek(e){e.ga=1+e.ga|0,e.g9&&$O(e)}function tk(){this.ga=0,this.bR=null,this.cE=null,this.g9=!1,this.bS=0,this.ga=0,this.bR=$(),this.cE=null,this.g9=!1,this.bS=0}N=tk.prototype=new _D,N.constructor=tk;function nk(){}nk.prototype=N,N.aZ=(function(e){}),N.c5=(function(e){return XS(this,e)}),N.m=(function(){return new Lx(this.bR.m(),new jg((()=>this.ga)))}),N.dw=(function(){return Ix()}),N.v=(function(e){return Jy(this.bR,e)}),N.u=(function(){return this.bS}),N.B=(function(){return this.bS}),N.c=(function(){return this.bS===0}),N.nk=(function(){return this.g9=!this.c(),this.bR}),N.oa=(function(e){ek(this);var t=new AO(e,$());return this.bS===0?this.bR=t:this.cE.at=t,this.cE=t,this.bS=1+this.bS|0,this}),N.gv=(function(e){var t=e.m();if(t.o()){var n=1,r=new AO(t.h(),$());for(this.bR=r;t.o();){var i=new AO(t.h(),$());r.at=i,r=i,n=1+n|0}this.bS=n,this.cE=r}return this}),N.o0=(function(e){var t=e.m();if(t.o()){var n=new tk().gv(t);ek(this),this.bS===0?this.bR=n.bR:this.cE.at=n.bR,this.cE=n.cE,this.bS=this.bS+n.bS|0}return this}),N.bi=(function(){return`ListBuffer`}),N.aX=(function(e){return this.o0(e)}),N.aT=(function(e){return this.oa(e)}),N.aY=(function(){return this.nk()}),N.d=(function(e){var t=e|0;return Jy(this.bR,t)}),N.bg=(function(){return Ix()}),new I().i(tk,`scala.collection.mutable.ListBuffer`,{cd:1,aQ:1,K:1,n:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,k:1,d:1,M:1,J:1,N:1,H:1,A:1,aR:1,I:1,G:1,au:1,s:1,l:1,a7:1,L:1,W:1,a:1});function rk(e,t,n){return e.dd=0,e.dc=t,e.ay=n,e}function ik(e){return rk(e,new F(16),0),e}function ak(){this.dd=0,this.dc=null,this.ay=0}N=ak.prototype=new _D,N.constructor=ak;function ok(){}ok.prototype=N,N.c5=(function(e){return XS(this,e)}),N.m=(function(){return this.qL().m()}),N.b5=(function(e){var t=this.ay;return t===e?0:t<e?-1:1}),N.B=(function(){return this.ay}),N.il=(function(e){this.dc=mx().nh(this.dc,this.ay,e)}),N.aZ=(function(e){e>this.ay&&e>=1&&this.il(e)}),N.v=(function(e){var t=1+e|0;if(e<0)throw xd().fu(e,-1+this.ay|0);if(t>this.ay)throw xd().fu(-1+t|0,-1+this.ay|0);return this.dc.a[e]}),N.qJ=(function(e,t){var n=1+e|0;if(e<0)throw xd().fu(e,-1+this.ay|0);if(n>this.ay)throw xd().fu(-1+n|0,-1+this.ay|0);this.dd=1+this.dd|0,this.dc.a[e]=t}),N.u=(function(){return this.ay}),N.qL=(function(){return new RE(this,new jg((()=>this.dd)))}),N.dw=(function(){return mx()}),N.o7=(function(e){this.dd=1+this.dd|0;var t=1+this.ay|0;return this.il(t),this.ay=t,this.qJ(-1+this.ay|0,e),this}),N.lV=(function(e){if(e instanceof ak){var t=e.ay;t>0&&(this.dd=1+this.dd|0,this.il(this.ay+t|0),Qp().fk(e.dc,0,this.dc,this.ay,t),this.ay=this.ay+t|0)}else fm(this,e);return this}),N.bi=(function(){return`ArrayBuffer`}),N.bf=(function(e,t,n){var r=this.ay,i=Du().bU(e),a=n<r?n:r,o=i-t|0,s=a<o?a:o,c=s>0?s:0;return c>0&&Qp().fk(this.dc,0,e,t,c),c}),N.aX=(function(e){return this.lV(e)}),N.aT=(function(e){return this.o7(e)}),N.bg=(function(){return mx()}),N.d=(function(e){return this.v(e|0)}),new I().i(ak,`scala.collection.mutable.ArrayBuffer`,{c0:1,aQ:1,K:1,n:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,k:1,d:1,M:1,J:1,N:1,H:1,A:1,aR:1,I:1,G:1,au:1,cc:1,R:1,q:1,r:1,S:1,s:1,l:1,W:1,a:1});function sk(e,t){return e.dp=t,e}function ck(e){return sk(e,[]),e}function lk(){this.dp=null}N=lk.prototype=new _D,N.constructor=lk;function uk(){}uk.prototype=N,N.aZ=(function(e){}),N.bi=(function(){return`IndexedSeq`}),N.m=(function(){return HS(new US,new PE(this))}),N.b5=(function(e){var t=this.dp.length|0;return t===e?0:t<e?-1:1}),N.c5=(function(e){return XS(this,e)}),N.dw=(function(){return qx()}),N.v=(function(e){return this.dp[e]}),N.u=(function(){return this.dp.length|0}),N.B=(function(){return this.dp.length|0}),N.bI=(function(){return`WrappedArray`}),N.aY=(function(){return this}),N.aT=(function(e){return this.dp.push(e),this}),N.d=(function(e){var t=e|0;return this.dp[t]}),N.bg=(function(){return qx()}),new I().i(lk,`scala.scalajs.js.WrappedArray`,{hE:1,aQ:1,K:1,n:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,k:1,d:1,M:1,J:1,N:1,H:1,A:1,aR:1,I:1,G:1,au:1,s:1,l:1,R:1,q:1,r:1,S:1,cc:1,L:1,a:1}),Ta=new V(0,0),uo.z=Ta,Sl(new(OS.r()).C([]));