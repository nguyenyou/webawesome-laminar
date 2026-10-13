var e=Object.defineProperty,t=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r},n=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-error`,{bubbles:!0,cancelable:!1,composed:!0})}},r=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-load`,{bubbles:!0,cancelable:!1,composed:!0})}};
/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const i=globalThis,a=i.ShadowRoot&&(i.ShadyCSS===void 0||i.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,o=Symbol(),s=/* @__PURE__ */ new WeakMap;var c=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(a&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=s.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&s.set(t,e))}return e}toString(){return this.cssText}};const l=e=>new c(typeof e==`string`?e:e+``,void 0,o),u=(e,...t)=>new c(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,o),d=(e,t)=>{if(a)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=i.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},f=a?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return l(t)})(e):e,{is:p,defineProperty:m,getOwnPropertyDescriptor:h,getOwnPropertyNames:g,getOwnPropertySymbols:_,getPrototypeOf:v}=Object,y=globalThis,b=y.trustedTypes,ee=b?b.emptyScript:``,te=y.reactiveElementPolyfillSupport,x=(e,t)=>e,S={toAttribute(e,t){
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
switch(t){case Boolean:e=e?ee:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},C=(e,t)=>!p(e,t),ne={attribute:!0,type:String,converter:S,reflect:!1,useDefault:!1,hasChanged:C};Symbol.metadata??=Symbol(`metadata`),y.litPropertyMetadata??=/* @__PURE__ */ new WeakMap;var re=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ne){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&m(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=h(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ne}static _$Ei(){if(this.hasOwnProperty(x(`elementProperties`)))return;let e=v(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(x(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x(`properties`))){let e=this.properties,t=[...g(e),..._(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=/* @__PURE__ */ new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(f(e))}else e!==void 0&&t.push(f(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=/* @__PURE__ */ new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=/* @__PURE__ */ new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=/* @__PURE__ */ new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return d(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?S:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?S:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??C)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=/* @__PURE__ */ new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=/* @__PURE__ */ new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=/* @__PURE__ */ new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};re.elementStyles=[],re.shadowRootOptions={mode:`open`},re[x(`elementProperties`)]=/* @__PURE__ */ new Map,re[x(`finalized`)]=/* @__PURE__ */ new Map,te?.({ReactiveElement:re}),(y.reactiveElementVersions??=[]).push(`2.1.2`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const ie=globalThis,ae=e=>e,oe=ie.trustedTypes,se=oe?oe.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,ce=`$lit$`,le=`lit$${Math.random().toFixed(9).slice(2)}$`,ue=`?`+le,de=`<${ue}>`,fe=document,w=()=>fe.createComment(``),pe=e=>e===null||typeof e!=`object`&&typeof e!=`function`,me=Array.isArray,he=e=>me(e)||typeof e?.[Symbol.iterator]==`function`,ge=`[ 	
\f\r]`,_e=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ve=/-->/g,ye=/>/g,be=RegExp(`>|${ge}(?:([^\\s"'>=/]+)(${ge}*=${ge}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),xe=/'/g,Se=/"/g,Ce=/^(?:script|style|textarea|title)$/i,we=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),Te=Symbol.for(`lit-noChange`),Ee=Symbol.for(`lit-nothing`),De=/* @__PURE__ */ new WeakMap,Oe=fe.createTreeWalker(fe,129);function ke(e,t){if(!me(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return se===void 0?t:se.createHTML(t)}const Ae=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=_e;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===_e?c[1]===`!--`?o=ve:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=be):(Ce.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=be):o=ye:o===be?c[0]===`>`?(o=i??_e,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?be:c[3]===`"`?Se:xe):o===Se||o===xe?o=be:o===ve||o===ye?o=_e:(o=be,i=void 0);let d=o===be&&e[t+1].startsWith(`/>`)?` `:``;a+=o===_e?n+de:l>=0?(r.push(s),n.slice(0,l)+ce+n.slice(l)+le+d):n+le+(l===-2?t:d)}return[ke(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]};var je=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Ae(t,n);if(this.el=e.createElement(l,r),Oe.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=Oe.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(ce)){let t=u[o++],n=i.getAttribute(e).split(le),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Fe:r[1]===`?`?Ie:r[1]===`@`?Le:T}),i.removeAttribute(e)}else e.startsWith(le)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Ce.test(i.tagName)){let e=i.textContent.split(le),t=e.length-1;if(t>0){i.textContent=oe?oe.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],w()),Oe.nextNode(),c.push({type:2,index:++a});i.append(e[t],w())}}}else if(i.nodeType===8){if(i.data===ue)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(le,e+1))!==-1;)c.push({type:7,index:a}),e+=le.length-1}}a++}}static createElement(e,t){let n=fe.createElement(`template`);return n.innerHTML=e,n}};function Me(e,t,n=e,r){if(t===Te)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=pe(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=Me(e,i._$AS(e,t.values),i,r)),t}var Ne=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??fe).importNode(t,!0);Oe.currentNode=r;let i=Oe.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Pe(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Re(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=Oe.nextNode(),a++)}return Oe.currentNode=fe,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Pe=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=Ee,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Me(this,e,t),pe(e)?e===Ee||e==null||e===``?(this._$AH!==Ee&&this._$AR(),this._$AH=Ee):e!==this._$AH&&e!==Te&&this._(e):e._$litType$===void 0?e.nodeType===void 0?he(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Ee&&pe(this._$AH)?this._$AA.nextSibling.data=e:this.T(fe.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=je.createElement(ke(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Ne(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=De.get(e.strings);return t===void 0&&De.set(e.strings,t=new je(e)),t}k(t){me(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(w()),this.O(w()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=ae(e).nextSibling;ae(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},T=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=Ee,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(/* @__PURE__ */ new String),this.strings=n):this._$AH=Ee}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=Me(this,e,t,0),a=!pe(e)||e!==this._$AH&&e!==Te,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=Me(this,r[n+o],t,o),s===Te&&(s=this._$AH[o]),a||=!pe(s)||s!==this._$AH[o],s===Ee?e=Ee:e!==Ee&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===Ee?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Fe=class extends T{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Ee?void 0:e}},Ie=class extends T{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Ee)}},Le=class extends T{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=Me(this,e,t,0)??Ee)===Te)return;let n=this._$AH,r=e===Ee&&n!==Ee||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==Ee&&(n===Ee||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Re=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Me(this,e)}};const ze={M:ce,P:le,A:ue,C:1,L:Ae,R:Ne,D:he,V:Me,I:Pe,H:T,N:Ie,U:Le,B:Fe,F:Re},Be=ie.litHtmlPolyfillSupport;Be?.(je,Pe),(ie.litHtmlVersions??=[]).push(`3.3.3`);const Ve=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Pe(t.insertBefore(w(),e),e,void 0,n??{})}return i._$AI(e),i},He=globalThis
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
;var Ue=class extends re{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ve(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Te}};Ue._$litElement$=!0,Ue.finalized=!0,He.litElementHydrateSupport?.({LitElement:Ue});const We=He.litElementPolyfillSupport;We?.({LitElement:Ue}),(He.litElementVersions??=[]).push(`4.2.2`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ge=u`
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
function E(e,t){let n={waitUntilFirstUpdate:!1,...t};return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ke=Object.defineProperty,qe=Object.getOwnPropertyDescriptor,Je=e=>{throw TypeError(e)},D=(e,t,n,r)=>{for(var i=r>1?void 0:r?qe(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Ke(t,n,i),i},Ye=(e,t,n)=>t.has(e)||Je(`Cannot `+n),Xe=(e,t,n)=>(Ye(e,t,`read from private field`),n?n.call(e):t.get(e)),Ze=(e,t,n)=>t.has(e)?Je(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),Qe=(e,t,n,r)=>(Ye(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const $e=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},et={attribute:!0,type:String,converter:S,reflect:!1,hasChanged:C},O=(e=et,t,n)=>{
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=/* @__PURE__ */ new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function k(e){return(t,n)=>typeof n==`object`?O(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function tt(e){return k({...e,state:!0,attribute:!1})}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const nt=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function rt(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return nt(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return nt(n,r,{get(){return a(this)}})}}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var it=u`
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
`,at=/;\s+$/;function ot(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function st(e){let{property:t,value:n,element:r}=e;if(n){let e=r.getAttribute(`style`)||``;e&&(e.match(at)||(e+=`;`),e+=` `);let i=`${t}: ${n}`;return e.includes(i)?void 0:`${e}${i};`}return null}var ct,lt=class extends Ue{constructor(){super(),Ze(this,ct,!1),this.initialReflectedProperties=/* @__PURE__ */ new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,t)=>{if(this.internals?.states)try{t?this.internals.states.add(e):this.internals.states.delete(e)}catch(e){if(String(e).includes(`must start with '--'`))console.error(`Your browser implements an outdated version of CustomStateSet. Consider using a polyfill`);else throw e}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error(`Element internals are not supported in your browser. Consider using a polyfill`)}this.customStates.set(`wa-defined`,!0);let e=this.constructor;for(let[t,n]of e.elementProperties)n.default===`inherit`&&n.initial!==void 0&&typeof t==`string`&&this.customStates.set(`initial-${t}-${n.initial}`,!0)}static get styles(){return[it,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `)),this.didSSR&&this.updateComplete.then(()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `))})}attributeChangedCallback(e,t,n){Xe(this,ct)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),Qe(this,ct,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll(`slot`).forEach(e=>{e.dispatchEvent(new Event(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(e){if(this.didSSR&&!this.hasUpdated){let t=new Event(`lit-hydration-error`,{bubbles:!0,composed:!0,cancelable:!1});t.error=e,this.dispatchEvent(t)}throw e}}setStyle(e,t){if(this.style)this.style[e]=t;else{let n=st({property:ot(e),value:t,element:this});n&&this.setAttribute(`style`,n)}}setStyleProperty(e,t){if(this.style)this.style.setProperty(e,t);else{let n=st({property:e,value:t,element:this});n&&this.setAttribute(`style`,n)}}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};ct=/* @__PURE__ */ new WeakMap,D([k()],lt.prototype,`dir`,2),D([k()],lt.prototype,`lang`,2),D([k({type:Boolean,reflect:!0,attribute:`did-ssr`})],lt.prototype,`didSSR`,2);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var ut=``,dt=``;function ft(){return ut.replace(/\/$/,``)}function pt(e){dt=e}function mt(){if(!dt){let e=document.querySelector(`[data-fa-kit-code]`);e&&pt(e.getAttribute(`data-fa-kit-code`)||``)}return dt}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var ht=`7.3.0`;function gt(e,t,n){let r=`solid`;return t===`chisel`&&(r=`chisel-regular`),t===`etch`&&(r=`etch-solid`),t===`graphite`&&(r=`graphite-thin`),t===`jelly`&&(r=`jelly-regular`,n===`duo-regular`&&(r=`jelly-duo-regular`),n===`fill-regular`&&(r=`jelly-fill-regular`)),t===`jelly-duo`&&(r=`jelly-duo-regular`),t===`jelly-fill`&&(r=`jelly-fill-regular`),t===`notdog`&&(n===`solid`&&(r=`notdog-solid`),n===`duo-solid`&&(r=`notdog-duo-solid`)),t===`notdog-duo`&&(r=`notdog-duo-solid`),t===`slab`&&((n===`solid`||n===`regular`)&&(r=`slab-regular`),n===`press-regular`&&(r=`slab-press-regular`)),t===`slab-press`&&(r=`slab-press-regular`),t===`slab-duo`&&(r=`slab-duo-regular`),t===`slab-press-duo`&&(r=`slab-press-duo-regular`),t===`thumbprint`&&(r=`thumbprint-light`),t===`utility`&&(r=`utility-semibold`),t===`utility-duo`&&(r=`utility-duo-semibold`),t===`utility-fill`&&(r=`utility-fill-semibold`),t===`whiteboard`&&(r=`whiteboard-semibold`),t===`mosaic`&&(r=`mosaic-solid`),t===`pixel`&&(r=`pixel-regular`),t===`vellum`&&(r=`vellum-solid`),t===`classic`&&(n===`thin`&&(r=`thin`),n===`light`&&(r=`light`),n===`regular`&&(r=`regular`),n===`solid`&&(r=`solid`)),t===`duotone`&&(n===`thin`&&(r=`duotone-thin`),n===`light`&&(r=`duotone-light`),n===`regular`&&(r=`duotone-regular`),n===`solid`&&(r=`duotone`)),t===`sharp`&&(n===`thin`&&(r=`sharp-thin`),n===`light`&&(r=`sharp-light`),n===`regular`&&(r=`sharp-regular`),n===`solid`&&(r=`sharp-solid`)),t===`sharp-duotone`&&(n===`thin`&&(r=`sharp-duotone-thin`),n===`light`&&(r=`sharp-duotone-light`),n===`regular`&&(r=`sharp-duotone-regular`),n===`solid`&&(r=`sharp-duotone-solid`)),t===`brands`&&(r=`brands`),r}function _t(e,t,n){let r=gt(e,t,n),i=ft();if(i)return`${i}/${r}/${e}.svg`;let a=mt();return a.length>0?`https://ka-p.fontawesome.com/releases/v${ht}/svgs/${r}/${e}.svg?token=${encodeURIComponent(a)}`:`https://ka-f.fontawesome.com/releases/v${ht}/svgs/${r}/${e}.svg`}var vt={name:`default`,resolver:(e,t=`classic`,n=`solid`)=>_t(e,t,n),mutator:(e,t)=>{if(e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`),t?.family&&!e.hasAttribute(`data-duotone-initialized`)){let{family:n,variant:r}=t;if(n===`duotone`||n===`sharp-duotone`||n===`notdog-duo`||n===`notdog`&&r===`duo-solid`||n===`jelly-duo`||n===`jelly`&&r===`duo-regular`||n===`utility-duo`||n===`slab-duo`||n===`slab-press-duo`||n===`thumbprint`){let n=[...e.querySelectorAll(`path`)],r=n.find(e=>!e.hasAttribute(`opacity`)),i=n.find(e=>e.hasAttribute(`opacity`));if(!r||!i)return;if(r.setAttribute(`data-duotone-primary`,``),i.setAttribute(`data-duotone-secondary`,``),t.swapOpacity&&r&&i){let e=i.getAttribute(`opacity`)||`0.4`;r.style.setProperty(`--path-opacity`,e),i.style.setProperty(`--path-opacity`,`1`)}e.setAttribute(`data-duotone-initialized`,``)}}}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function yt(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var bt={solid:{"arrow-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`,"arrow-up":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>`,backward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M236.3 107.1C247.9 96 265 92.9 279.7 99.2C294.4 105.5 304 120 304 136L304 272.3L476.3 107.2C487.9 96 505 92.9 519.7 99.2C534.4 105.5 544 120 544 136L544 504C544 520 534.4 534.5 519.7 540.8C505 547.1 487.9 544 476.3 532.9L304 367.7L304 504C304 520 294.4 534.5 279.7 540.8C265 547.1 247.9 544 236.3 532.9L44.3 348.9C36.5 341.3 32 330.9 32 320C32 309.1 36.5 298.7 44.3 291.1L236.3 107.1z"/></svg>`,"backward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M491 100.8C478.1 93.8 462.3 94.5 450 102.6L192 272.1L192 128C192 110.3 177.7 96 160 96C142.3 96 128 110.3 128 128L128 512C128 529.7 142.3 544 160 544C177.7 544 192 529.7 192 512L192 367.9L450 537.5C462.3 545.6 478 546.3 491 539.3C504 532.3 512 518.8 512 504.1L512 136.1C512 121.4 503.9 107.9 491 100.9z"/></svg>`,bars:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>`,"angles-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M77.3 256 214.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256zm192 0L406.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L269.3 256z"/></svg>`,"angles-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.7 256 297.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 256zm-192 0L105.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256z"/></svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>`,"chevron-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`,"chevron-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>`,"chevron-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>`,circle:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>`,"closed-captioning":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M64 192C64 156.7 92.7 128 128 128L512 128C547.3 128 576 156.7 576 192L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 192zM216 272L248 272C252.4 272 256 275.6 256 280C256 293.3 266.7 304 280 304C293.3 304 304 293.3 304 280C304 249.1 278.9 224 248 224L216 224C185.1 224 160 249.1 160 280L160 360C160 390.9 185.1 416 216 416L248 416C278.9 416 304 390.9 304 360C304 346.7 293.3 336 280 336C266.7 336 256 346.7 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 280C208 275.6 211.6 272 216 272zM384 280C384 275.6 387.6 272 392 272L424 272C428.4 272 432 275.6 432 280C432 293.3 442.7 304 456 304C469.3 304 480 293.3 480 280C480 249.1 454.9 224 424 224L392 224C361.1 224 336 249.1 336 280L336 360C336 390.9 361.1 416 392 416L424 416C454.9 416 480 390.9 480 360C480 346.7 469.3 336 456 336C442.7 336 432 346.7 432 360C432 364.4 428.4 368 424 368L392 368C387.6 368 384 364.4 384 360L384 280z"/></svg>`,"closed-captioning-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M39 39.1C48.4 29.7 63.6 29.7 72.9 39.1L161.8 128L512 128C547.3 128 576 156.7 576 192L576 448C576 473.5 561.1 495.4 539.6 505.8L601 567.1C610.4 576.5 610.4 591.7 601 601C591.6 610.3 576.4 610.4 567.1 601L39 73.1C29.7 63.7 29.7 48.5 39 39.1zM384 350.1L384 279.9C384 275.5 387.6 271.9 392 271.9L424 271.9C428.4 271.9 432 275.5 432 279.9C432 293.2 442.7 303.9 456 303.9C469.3 303.9 480 293.2 480 279.9C480 249 454.9 223.9 424 223.9L392 223.9C361.1 223.9 336 249 336 279.9L336 302.1L384 350.1zM445.5 411.6C465.7 403.2 480 383.2 480 359.9C480 346.6 469.3 335.9 456 335.9C442.7 335.9 432 346.6 432 359.9C432 364.3 428.4 367.9 424 367.9L401.8 367.9L445.5 411.6zM162.3 264.1C160.8 269.1 160 274.5 160 280L160 360C160 390.9 185.1 416 216 416L248 416C266.1 416 282.1 407.5 292.4 394.2L410.2 512L128 512C92.7 512 64 483.3 64 448L64 192C64 184.2 65.4 176.7 68 169.8L162.3 264.1zM256.1 357.9C256 358.6 256 359.3 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 309.8L256.1 357.9z"/></svg>`,compress:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>`,ellipsis:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M96 320C96 289.1 121.1 264 152 264C182.9 264 208 289.1 208 320C208 350.9 182.9 376 152 376C121.1 376 96 350.9 96 320zM264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320zM488 264C518.9 264 544 289.1 544 320C544 350.9 518.9 376 488 376C457.1 376 432 350.9 432 320C432 289.1 457.1 264 488 264z"/></svg>`,"ellipsis-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/></svg>`,expand:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 96C110.3 96 96 110.3 96 128L96 224C96 241.7 110.3 256 128 256C145.7 256 160 241.7 160 224L160 160L224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L128 96zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 512C96 529.7 110.3 544 128 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480L160 416zM416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160L480 224C480 241.7 494.3 256 512 256C529.7 256 544 241.7 544 224L544 128C544 110.3 529.7 96 512 96L416 96zM544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L512 544C529.7 544 544 529.7 544 512L544 416z"/></svg>`,eyedropper:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>`,filter:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 64C19.1 64 7.4 71.8 2.4 83.8S.2 109.5 9.4 118.6L192 301.3 192 416c0 8.5 3.4 16.6 9.4 22.6l64 64c9.2 9.2 22.9 11.9 34.9 6.9S320 492.9 320 480l0-178.7 182.6-182.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 64 480 64L32 64z"/></svg>`,forward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M403.7 107.1C392.1 96 375 92.9 360.3 99.2C345.6 105.5 336 120 336 136L336 272.3L163.7 107.2C152.1 96 135 92.9 120.3 99.2C105.6 105.5 96 120 96 136L96 504C96 520 105.6 534.5 120.3 540.8C135 547.1 152.1 544 163.7 532.9L336 367.7L336 504C336 520 345.6 534.5 360.3 540.8C375 547.1 392.1 544 403.7 532.9L595.7 348.9C603.6 341.4 608 330.9 608 320C608 309.1 603.5 298.7 595.7 291.1L403.7 107.1z"/></svg>`,file:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>`,"file-audio":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>`,"file-code":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>`,"file-excel":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>`,"file-image":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>`,"file-pdf":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>`,"file-powerpoint":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>`,"file-video":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>`,"file-word":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>`,"file-zipper":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>`,"forward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M21 36.8c12.9-7 28.7-6.3 41 1.8L320 208.1 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-144.1-258 169.6c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440L0 72C0 57.3 8.1 43.8 21 36.8z"/></svg>`,gauge:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,gear:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>`,"grip-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>`,indeterminate:`<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>`,"magnifying-glass":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>`,minus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>`,pause:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>`,"picture-in-picture":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M448 32c35.3 0 64 28.7 64 64l0 112-64 0 0-112-384 0 0 320 144 0 0 64-144 0-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416 0 96C0 62.9 25.2 35.6 57.5 32.3L64 32 448 32zm16 224c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48l160 0z"/></svg>`,play:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>`,"play-circle":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>`,plus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>`,"table-columns":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 64l0 256 128 0 0-256-128 0zm320 0l-128 0 0 256 128 0 0-256z"/></svg>`,thumbtack:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 10.3 134.1c37.1 21.2 65.8 56.4 78.2 99.7l3.8 13.4c2.8 9.7 .8 20-5.2 28.1S362 352 352 352L32 352c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1L5 297.8c12.4-43.3 41-78.5 78.2-99.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 400l64 0 0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-112z"/></svg>`,"up-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M406.6 502.6l96-96c9.2-9.2 11.9-22.9 6.9-34.9S492.9 352 480 352l-64 0 0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 320-64 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l96 96c12.5 12.5 32.8 12.5 45.3 0zM150.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-9.2 9.2-11.9 22.9-6.9 34.9S19.1 160 32 160l64 0 0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320 64 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-96-96z"/></svg>`,upload:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>`,user:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>`,volume:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM441.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C443.3 170.7 464 210.9 464 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-low":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,xmark:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>`},regular:{calendar:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z"/></svg>`,"circle-question":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`,"circle-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,clock:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>`,copy:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>`,eye:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>`,"eye-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>`}},xt={name:`system`,resolver:(e,t=`classic`,n=`solid`)=>{let r=bt[n][e]??bt.regular[e]??bt.regular[`circle-question`];return r?yt(r):``},mutator:e=>{e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`)}},St=`classic`,Ct=[vt,xt],wt=/* @__PURE__ */ new Set
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;function Tt(e){wt.add(e)}function Et(e){wt.delete(e)}function Dt(e){return Ct.find(t=>t.name===e)}function Ot(){return St}
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const{I:kt}=ze,At=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,jt=e=>e.strings===void 0,Mt={},Nt=(e,t=Mt)=>e._$AH=t;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Pt=Symbol(),Ft=Symbol(),It,Lt=/* @__PURE__ */ new Map,Rt=class extends lt{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label=``,this.library=`default`,this.rotate=0,this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=we`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let n=this.shadowRoot.querySelector(`[part='svg']`);return typeof t.mutator==`function`&&t.mutator(n,this),this.svg}try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?Pt:Ft}catch{return Ft}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return Pt;It||=new DOMParser;let r=It.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):Pt}catch{return Pt}}}connectedCallback(){super.connectedCallback(),Tt(this)}firstUpdated(e){super.firstUpdated(e),this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Et(this)}async getIconSource(){let e=Dt(this.library),t=this.family||Ot();if(this.name&&e){let n=this.canvas===`auto`||this.autoWidth,r;try{r=await e.resolver(this.name,t,this.variant,n)}catch{r=void 0}return{url:r,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=await this.getIconSource(),i=t?Dt(this.library):void 0;if(!e){this.svg=null;return}let a=Lt.get(e);a||(a=this.resolveIcon(e,i),Lt.set(e,a));let o=await a;if(o===Ft&&Lt.delete(e),e===(await this.getIconSource()).url){if(At(o))this.svg=o;else switch(o){case Ft:case Pt:this.svg=null,this.dispatchEvent(new n);break;default:this.svg=o.cloneNode(!0),i?.mutator?.(this.svg,this),this.dispatchEvent(new r)}}}willUpdate(e){return this.style||this.setStyleProperty(`--rotate-angle`,`${this.rotate}deg`),super.willUpdate(e)}updated(e){super.updated(e);let t=Dt(this.library);this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`);let n=this.shadowRoot?.querySelector(`svg`);n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:we`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};Rt.css=Ge,D([tt()],Rt.prototype,`svg`,2),D([k({reflect:!0})],Rt.prototype,`name`,2),D([k({reflect:!0})],Rt.prototype,`family`,2),D([k({reflect:!0})],Rt.prototype,`variant`,2),D([k({reflect:!0})],Rt.prototype,`canvas`,2),D([k({attribute:`auto-width`,type:Boolean,reflect:!0})],Rt.prototype,`autoWidth`,2),D([k({attribute:`swap-opacity`,type:Boolean,reflect:!0})],Rt.prototype,`swapOpacity`,2),D([k()],Rt.prototype,`src`,2),D([k()],Rt.prototype,`label`,2),D([k({reflect:!0})],Rt.prototype,`library`,2),D([k({type:Number,reflect:!0})],Rt.prototype,`rotate`,2),D([k({type:String,reflect:!0})],Rt.prototype,`flip`,2),D([k({type:String,reflect:!0})],Rt.prototype,`animation`,2),D([E(`label`)],Rt.prototype,`handleLabelChange`,1),D([E([`family`,`name`,`library`,`variant`,`src`,`autoWidth`,`canvas`,`swapOpacity`],{waitUntilFirstUpdate:!0})],Rt.prototype,`setIcon`,1),Rt=D([$e(`wa-icon`)],Rt);var zt=/* @__PURE__ */ t({default:()=>Rt}),Bt=u`
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
`
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;const Vt=/* @__PURE__ */ new Set,Ht=/* @__PURE__ */ new Map;let Ut,Wt=`ltr`,Gt=`en`;const Kt=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(Kt){let e=new MutationObserver(Jt);Wt=document.documentElement.dir||`ltr`,Gt=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function qt(...e){e.map(e=>{let t=e.$code.toLowerCase();Ht.has(t)?Ht.set(t,Object.assign(Object.assign({},Ht.get(t)),e)):Ht.set(t,e),Ut||=e}),Jt()}function Jt(){Kt&&(Wt=document.documentElement.dir||`ltr`,Gt=document.documentElement.lang||navigator.language),[...Vt.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var Yt=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Vt.add(this.host)}hostDisconnected(){Vt.delete(this.host)}dir(){return`${this.host.dir||Wt}`.toLowerCase()}lang(){let e=`${this.host.lang||Gt}`.toLowerCase().replace(/_/g,`-`);try{return new Intl.Locale(e),e}catch{return Ut?Ut.$code.toLowerCase():`en`}}getTranslationData(e){let t;try{t=new Intl.Locale(e.replace(/_/g,`-`))}catch{return{locale:void 0,language:``,region:``,primary:void 0,secondary:void 0}}let n=t.language.toLowerCase(),r=t.region?.toLowerCase()??``,i=Ht.get(`${n}-${r}`),a=Ht.get(n);return{locale:t,language:n,region:r,primary:i,secondary:a}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&Ut&&Ut[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(Ut&&Ut[e])i=Ut[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},Xt={$code:`en`,$name:`English`,$dir:`ltr`,allTagsRemoved:`All tags removed`,am:`AM`,autosizeColumn:`Autosize column`,captions:`Captions`,carousel:`Carousel`,chooseDate:`Choose date`,chooseDecade:`Choose decade`,chooseMonth:`Choose month`,chooseTime:`Choose time`,chooseYear:`Choose year`,clearEntry:`Clear entry`,clearFilter:`Clear filter`,clearSort:`Clear sort`,close:`Close`,closeCalendar:`Close calendar`,closeTimeInput:`Close time picker`,collapseRow:`Collapse row`,columnMenu:`Column options`,columnMovedToPosition:(e,t,n)=>`${e} moved to position ${t} of ${n}`,columns:`Columns`,compactPageXOfY:(e,t)=>`${e} of ${t}`,completed:`Completed`,copied:`Copied`,copy:`Copy`,createOption:e=>`Create "${e}"`,currentlyPlaying:`currently playing`,currentValue:`Current value`,date:`Date`,datePickerKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the calendar.`,day:`Day`,dayPeriod:`AM/PM`,decrement:`Decrement`,deselectAllRows:`Deselect all rows`,disabled:`Disabled`,dropFileHere:`Drop file here or click to browse`,dropFilesHere:`Drop files here or click to browse`,empty:`Empty`,endDate:`End date`,enterFullscreen:`Enter fullscreen`,error:`Error`,exitFullscreen:`Exit fullscreen`,expandRow:`Expand row`,filterByColumn:e=>`Filter by ${e}`,filterFrom:`From`,filterMax:`Max`,filterMin:`Min`,filterTo:`To`,firstPage:`First page`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hideColumn:`Hide column`,hidePassword:`Hide password`,hour:`Hour`,incompleteDate:`Enter a valid date.`,increment:`Increment`,jumpBackwardX:e=>`Jump back ${e} pages`,jumpForwardX:e=>`Jump forward ${e} pages`,lastPage:`Last page`,loading:`Loading`,locked:`Locked`,minute:`Minute`,month:`Month`,moreOptions:`More Options`,mute:`Mute`,nextDecade:`Next decade`,nextMonth:`Next month`,nextPage:`Next page`,nextSlide:`Next slide`,nextVideo:`Next Video`,nextYear:`Next year`,noData:`No data`,noOptions:`No options`,noResults:`No matching results`,notCompleted:`Not completed`,now:`Now`,numCharacters:e=>e===1?`1 character`:`${e} characters`,numCharactersRemaining:e=>e===1?`1 character remaining`:`${e} characters remaining`,numOptionsAvailable:e=>e===0?`No options available`:e===1?`1 option available`:`${e} options available`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,numRowsCopied:e=>e===1?`1 row copied`:`${e} rows copied`,numRowsSelected:e=>e===1?`1 row selected`:`${e} rows selected`,optionPosition:(e,t,n)=>`${e}, ${t} of ${n}`,optionsLoadError:`Options could not be loaded`,pageXOfY:(e,t)=>`Page ${e} of ${t}`,pagination:`Pagination`,pause:`Pause`,pauseAnimation:`Pause animation`,pictureInPicture:`Picture in picture`,pinLeft:`Pin left`,pinRight:`Pin right`,play:`Play`,playAnimation:`Play animation`,playbackSpeed:`Playback speed`,playlist:`Playlist`,pm:`PM`,previousDecade:`Previous decade`,previousMonth:`Previous month`,previousPage:`Previous page`,previousSlide:`Previous slide`,previousVideo:`Previous video`,previousYear:`Previous year`,progress:`Progress`,rangeTooLong:e=>e===1?`Select a range no longer than 1 day`:`Select a range no longer than ${e} days`,rangeTooShort:e=>e===1?`Select a range at least 1 day long`:`Select a range at least ${e} days long`,readonly:`Read-only`,remove:`Remove`,resetColumns:`Reset columns`,resize:`Resize`,resizeColumn:`Resize column`,rowsPerPage:`Rows per page`,scrollableRegion:`Scrollable region`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,search:`Search`,second:`Second`,seek:`Seek`,seekProgress:(e,t)=>`${e} of ${t}`,selectAColorFromTheScreen:`Select a color from the screen`,selectAllRows:`Select all rows`,selected:`Selected`,selectedDateLabel:e=>`Selected: ${e}`,selectedRangeLabel:e=>`Selected range: ${e}`,selectGroup:`Select group`,selectionCleared:`Selection cleared`,selectRow:`Select row`,showingNofMRows:(e,t)=>`Showing ${e} of ${t} rows`,showingXtoYofZ:(e,t,n)=>`${e}\u2013${t} of ${n}`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,sortAscending:`Sort ascending`,sortColumn:`Sort column`,sortDescending:`Sort descending`,startDate:`Start date`,steps:`Steps`,stepXOfY:(e,t)=>`Step ${e} of ${t}`,tagAdded:e=>`${e} added`,tagAlreadyAdded:e=>`${e} is already added`,tagInputKeyboardHelp:`Press Backspace or Delete to remove this tag.`,tagRemoved:e=>`${e} removed`,time:`Time`,timeInputKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the time picker.`,today:`Today`,toggleColorFormat:`Toggle color format`,tooFewTags:e=>e===1?`Add at least 1 tag`:`Add at least ${e} tags`,tooManyTags:e=>e===1?`Add no more than 1 tag`:`Add no more than ${e} tags`,unmute:`Unmute`,unpin:`Unpin`,unpinColumn:`Unpin column`,videoPlayer:`Video player`,volume:`Volume`,year:`Year`,zoomIn:`Zoom in`,zoomOut:`Zoom out`}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;qt(Xt);var Zt=Xt,Qt=class extends Yt{lang(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||`en`:super.lang()}};qt(Zt);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function $t(e,t=0){if(!e||!globalThis.Node)return``;if(typeof e[Symbol.iterator]==`function`)return(Array.isArray(e)?e:[...e]).map(e=>$t(e,--t)).join(``);let n=e;if(n.nodeType===Node.TEXT_NODE)return n.textContent??``;if(n.nodeType===Node.ELEMENT_NODE){let e=n;if(e.hasAttribute(`slot`)||e.matches(`style, script`))return``;if(e instanceof HTMLSlotElement){let n=e.assignedNodes({flatten:!0});if(n.length>0)return $t(n,--t)}return t>-1?$t(e,--t):e.textContent??``}return n.hasChildNodes()?$t(n.childNodes,--t):``}var en=class extends lt{constructor(){super(...arguments),this.localize=new Qt(this),this.cachedDefaultLabel=``,this.isInitialized=!1,this.isDefaultLabelDirty=!0,this.current=!1,this.value=``,this.disabled=!1,this.selected=!1,this.defaultSelected=!1,this._label=``,this.handleHover=e=>{e.type===`mouseenter`?this.customStates.set(`hover`,!0):e.type===`mouseleave`&&this.customStates.set(`hover`,!1)}}set label(e){let t=this._label;this._label=e||``,this._label!==t&&this.requestUpdate(`label`,t)}get label(){return this._label?this._label:this.defaultLabel}get defaultLabel(){return(this.isDefaultLabelDirty||!this.cachedDefaultLabel)&&this.updateDefaultLabel(),this.cachedDefaultLabel}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`option`),this.setAttribute(`aria-selected`,`false`),this.addEventListener(`mouseenter`,this.handleHover),this.addEventListener(`mouseleave`,this.handleHover)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`mouseenter`,this.handleHover),this.removeEventListener(`mouseleave`,this.handleHover)}handleDefaultSlotChange(){if(this.isDefaultLabelDirty=!0,!this.isInitialized){this.isInitialized=!0;return}let e=this.closest(`wa-select, wa-combobox`);e&&customElements.whenDefined(e.localName).then(()=>e.handleDefaultSlotChange?.())}willUpdate(e){e.has(`defaultSelected`)&&(this.didSSR&&this.hasUpdated||!this.didSSR)&&this.syncDefaultSelected(),super.willUpdate(e)}syncDefaultSelected(){if(`closest`in this&&!this.closest(`wa-combobox, wa-select`)?.hasInteracted&&this.defaultSelected){let e=this.selected;this.selected=this.defaultSelected,this.requestUpdate(`selected`,e)}}updated(e){e.has(`disabled`)&&(this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`),this.customStates.set(`disabled`,this.disabled)),e.has(`selected`)&&(this.setAttribute(`aria-selected`,this.selected?`true`:`false`),this.customStates.set(`selected`,this.selected)),e.has(`value`)&&(typeof this.value!=`string`&&(this.value=String(this.value)),this.handleDefaultSlotChange()),e.has(`current`)&&this.customStates.set(`current`,this.current),super.updated(e)}async firstUpdated(e){if(super.firstUpdated(e),this.didSSR&&!this.hasUpdated&&await this.updateComplete,this.syncDefaultSelected(),this.selected&&!this.defaultSelected){let e=this.closest(`wa-select, wa-combobox`);e&&!e.hasInteracted&&(await customElements.whenDefined(e?.localName),await e.updateComplete,e.selectionChanged?.())}}updateDefaultLabel(){let e=this.cachedDefaultLabel;this.cachedDefaultLabel=$t(this).trim(),this.isDefaultLabelDirty=!1;let t=this.cachedDefaultLabel!==e;return!this._label&&t&&this.requestUpdate(`label`,e),t}render(){let e=this.selected;return this.didSSR&&!this.hasUpdated?(this.updateComplete.then(()=>{this.requestUpdate()}),Ee):we`
      ${e?we`<wa-icon
            part="checked-icon"
            class="check"
            name="check"
            library="system"
            variant="solid"
            aria-hidden="true"
          ></wa-icon>`:we`<span part="checked-icon" class="check" aria-hidden="true"></span>`}
      <slot part="start" name="start" class="start"></slot>
      <slot part="label" class="label" @slotchange=${this.handleDefaultSlotChange}></slot>
      <slot part="end" name="end" class="end"></slot>
    `}};en.css=Bt,D([rt(`.label`)],en.prototype,`defaultSlot`,2),D([tt()],en.prototype,`current`,2),D([k({reflect:!0})],en.prototype,`value`,2),D([k({type:Boolean})],en.prototype,`disabled`,2),D([k({type:Boolean,attribute:!1})],en.prototype,`selected`,2),D([k({type:Boolean,attribute:`selected`})],en.prototype,`defaultSelected`,2),D([k()],en.prototype,`label`,1),en=D([$e(`wa-option`)],en);var tn=/* @__PURE__ */ t({default:()=>en}),nn=u`
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
`
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function rn(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}function an(e,t,n=`vertical`,r=`smooth`){let i=rn(e,t),a=i.top+t.scrollTop,o=i.left+t.scrollLeft,s=t.scrollLeft,c=t.scrollLeft+t.offsetWidth,l=t.scrollTop,u=t.scrollTop+t.offsetHeight;(n===`horizontal`||n===`both`)&&(o<s?t.scrollTo({left:o,behavior:r}):o+e.clientWidth>c&&t.scrollTo({left:o-t.offsetWidth+e.clientWidth,behavior:r})),(n===`vertical`||n===`both`)&&(a<l?t.scrollTo({top:a,behavior:r}):a+e.clientHeight>u&&t.scrollTo({top:a-t.offsetHeight+e.clientHeight,behavior:r}))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var on=class extends Event{constructor(){super(`wa-show`,{bubbles:!0,cancelable:!0,composed:!0})}},sn=class extends Event{constructor(e){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-hide`,{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}},cn=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-after-hide`,{bubbles:!0,cancelable:!1,composed:!0})}},ln=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-after-show`,{bubbles:!0,cancelable:!1,composed:!0})}},un=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-clear`,{bubbles:!0,cancelable:!1,composed:!0})}},dn=[]
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;function fn(e){pn(e),dn.push(e)}function pn(e){for(let t=dn.length-1;t>=0;t--)if(dn[t]===e){dn.splice(t,1);break}}function mn(e){return dn.length>0&&dn[dn.length-1]===e}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var hn=(e={})=>{let{validationElement:t,validationProperty:n}=e;t||typeof document<`u`&&`createElement`in document&&(t=Object.assign(document.createElement(`input`),{required:!0})),n||=`value`;let r={observedAttributes:[`required`],message:t?.validationMessage,checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return(e.required??e.hasAttribute(`required`))&&(e[n]||(t.message=typeof r.message==`function`?r.message(e):r.message||``,t.isValid=!1,t.invalidKeys.push(`valueMissing`))),t}};return r},gn=u`
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
`,_n=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-invalid`,{bubbles:!0,cancelable:!1,composed:!0})}},vn=()=>({observedAttributes:[`custom-error`],checkValidity(e){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
let t={message:``,isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=[`customError`]),t}}),yn=class extends lt{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=[`input`],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new _n))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},`addEventListener`in this&&this.addEventListener(`invalid`,this.emitInvalid)}static get validators(){return[vn()]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let n of t.observedAttributes)e.add(n);return[...e]}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.updateValidity()}):this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener?.(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has(`customError`)&&(this.customError||=null,this.setCustomValidity(this.customError||``)),e.has(`value`)||e.has(`disabled`)||e.has(`defaultValue`)){let e=this.value;this.updateFormValue(e)}e.has(`disabled`)&&(this.customStates.set(`disabled`,this.disabled),(this.hasAttribute(`disabled`)||!this.matches(`:disabled`))&&this.toggleAttribute(`disabled`,this.disabled)),super.willUpdate(e),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>this.updateValidity()):this.updateValidity()}updateFormValue(e){if(Array.isArray(e)){if(this.name){let t=new FormData;for(let n of e)t.append(this.name,n);this.setValue(t,t)}}else this.setValue(e,e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(e){e?this.setAttribute(`form`,e):this.removeAttribute(`form`)}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],n=e[1],r=e[2];r||=this.validationTarget,this.internals.setValidity(t,n,r||void 0),this.requestUpdate(`validity`),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set(`required`,e),this.customStates.set(`optional`,!e),this.customStates.set(`invalid`,!t),this.customStates.set(`valid`,t),this.customStates.set(`user-invalid`,!t&&n),this.customStates.set(`user-valid`,t&&n)}setCustomValidity(e){e?(this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)):(this.customError=null,this.setValidity({}))}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity()}):(this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity())}setValue(...e){let[t,n]=e;this.internals.setFormValue(t,n)}get allValidators(){let e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(``),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute(`disabled`)||!this.willValidate){this.resetValidity();return}let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},n=this.validationTarget||this.input||void 0,r=``;for(let n of e){let{isValid:e,message:i,invalidKeys:a}=n.checkValidity(this);e||(r||=i,a?.length>=0&&a.forEach(e=>t[e]=!0))}r||=this.validationMessage,this.setValidity(t,r,n)}};yn.formAssociated=!0,D([k({reflect:!0})],yn.prototype,`name`,2),D([k({type:Boolean})],yn.prototype,`disabled`,2),D([k({state:!0,attribute:!1})],yn.prototype,`valueHasChanged`,2),D([k({state:!0,attribute:!1})],yn.prototype,`hasInteracted`,2),D([k({attribute:`custom-error`,reflect:!0})],yn.prototype,`customError`,2),D([k({attribute:!1,state:!0,type:Object})],yn.prototype,`validity`,1);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var bn={small:`s`,medium:`m`,large:`l`},xn=/* @__PURE__ */ new Set;function Sn(e,t){t in bn&&!xn.has(`${e}:${t}`)&&(xn.add(`${e}:${t}`),console.warn(`[${e}] size="${t}" is deprecated. Use size="${bn[t]}" instead. The long-form value will be removed in the next major version.`))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Cn=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return this.host.childNodes?[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===Node.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`wa-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1}):!1}hasNamedSlot(e){return this.host.querySelector?.(`:scope > [slot="${e}"]`)!==null}test(e,t){return t&&this.host.didSSR&&!this.host.hasUpdated?!!this.host[t]:e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){let e=this.host.shadowRoot;e&&`addEventListener`in e&&e.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){let e=this.host.shadowRoot;e&&`removeEventListener`in e&&e.removeEventListener(`slotchange`,this.handleSlotChange)}},wn=u`
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
`
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Tn(e,t){return new Promise(n=>{function r(i){i.target===e&&(e.removeEventListener(t,r),n())}e.addEventListener(t,r)})}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
async function En(e,t,n){return e.animate(t,n).finished.catch(()=>{})}function Dn(e,t){return new Promise(n=>{let r=new AbortController,{signal:i}=r;if(e.classList.contains(t))return;e.classList.add(t);let a=!1,o=()=>{a||(a=!0,e.classList.remove(t),n(),r.abort())};e.addEventListener(`animationend`,o,{once:!0,signal:i}),e.addEventListener(`animationcancel`,o,{once:!0,signal:i}),requestAnimationFrame(()=>{!a&&e.getAnimations().length===0&&o()})})}function On(e){return e=e.toString().toLowerCase(),e.indexOf(`ms`)>-1?parseFloat(e)||0:e.indexOf(`s`)>-1?(parseFloat(e)||0)*1e3:parseFloat(e)||0}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const kn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},An=e=>(...t)=>({_$litDirective$:e,values:t});var jn=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Mn=An(class extends jn{constructor(e){if(super(e),e.type!==kn.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=/* @__PURE__ */ new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return Te}});
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/var Nn=class extends jn{constructor(e){if(super(e),this.it=Ee,e.type!==kn.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===Ee||e==null)return this._t=void 0,this.it=e;if(e===Te)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Nn.directiveName=`unsafeHTML`,Nn.resultType=1;const Pn=An(Nn);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var A=class extends yn{constructor(){super(...arguments),this.assumeInteractionOn=[`blur`,`input`],this.cachedOptions=null,this.hasSlotController=new Cn(this,`hint`,`label`),this.localize=new Qt(this),this.selectionOrder=/* @__PURE__ */ new Map,this.typeToSelectString=``,this.slotChangePending=!1,this.displayLabel=``,this.selectedOptions=[],this.name=``,this._defaultValue=null,this.size=`m`,this.placeholder=``,this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.withClear=!1,this.open=!1,this.appearance=`outlined`,this.pill=!1,this.label=``,this.placement=`bottom`,this.hint=``,this.withLabel=!1,this.withHint=!1,this.required=!1,this.getTag=e=>we`
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
      `,this.handleDocumentFocusIn=e=>{let t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{let t=e.target,n=t.closest(`[part~="clear-button"]`)!==null,r=t.closest(`wa-button`)!==null;if(!(n||r)){if(e.key===`Escape`&&this.open&&mn(this)&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key===`Enter`||e.key===` `&&this.typeToSelectString===``){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.hasInteracted=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}else{if([`ArrowUp`,`ArrowDown`,`Home`,`End`].includes(e.key)){let t=this.getAllOptions(),n=t.indexOf(this.currentOption),r=Math.max(0,n);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key===`ArrowDown`?(r=n+1,r>t.length-1&&(r=0)):e.key===`ArrowUp`?(r=n-1,r<0&&(r=t.length-1)):e.key===`Home`?r=0:e.key===`End`&&(r=t.length-1),this.setCurrentOption(t[r])}if(e.key?.length===1||e.key===`Backspace`){let t=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key===`Backspace`)return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString=``,1e3),e.key===`Backspace`?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(let e of t)if(e.label.toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(e);break}}}}},this.handleDocumentMouseDown=e=>{let t=e.composedPath();this&&!t.includes(this)&&this.hide()}}static get validators(){let e=[hn({validationElement:Object.assign(document.createElement(`select`),{required:!0})})];return[...super.validators,...e]}get validationTarget(){return this.valueInput}set defaultValue(e){this._defaultValue=this.convertDefaultValue(e)}get defaultValue(){return this.convertDefaultValue(this._defaultValue)}rawValuesEqual(e,t){return e==null&&t==null?!0:e==null||t==null||e.length!==t.length?!1:e.every((e,n)=>e===t[n])}convertDefaultValue(e){return!(this.multiple||this.hasAttribute(`multiple`))&&Array.isArray(e)&&(e=e[0]),e}set value(e){let t=this.value;e instanceof FormData&&(e=e.getAll(this.name)),e!=null&&!Array.isArray(e)&&(e=[e]);let n=this._value;this._value=e??null,this.rawValuesEqual(n,this._value)||(this.valueHasChanged=!0,this.requestUpdate(`value`,t))}get value(){let e=this._value??this.defaultValue??null;e!=null&&(e=Array.isArray(e)?e:[e]),this.optionValues=new Set(this.getAllOptions().filter(e=>!e.disabled).map(e=>e.value));let t=e;return e!=null&&(t=e.filter(e=>this.optionValues.has(e)),t=this.multiple?t:t[0],t??=null),t}handleSizeChange(){Sn(this.localName,this.size)}connectedCallback(){super.connectedCallback(),this.processSlotChange(),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.cachedOptions=null}updateDefaultValue(){let e=this.getAllOptions().filter(e=>e.hasAttribute(`selected`)||e.defaultSelected);if(e.length>0){let t=e.map(e=>e.value);this._defaultValue=this.multiple?t:t[0]}this.hasAttribute(`value`)&&(this._defaultValue=this.getAttribute(`value`)||null)}addOpenListeners(){document.addEventListener(`focusin`,this.handleDocumentFocusIn),document.addEventListener(`keydown`,this.handleDocumentKeyDown),document.addEventListener(`mousedown`,this.handleDocumentMouseDown),fn(this),this.getRootNode()!==document&&this.getRootNode().addEventListener(`focusin`,this.handleDocumentFocusIn)}removeOpenListeners(){document.removeEventListener(`focusin`,this.handleDocumentFocusIn),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`mousedown`,this.handleDocumentMouseDown),pn(this),this.getRootNode()!==document&&this.getRootNode().removeEventListener(`focusin`,this.handleDocumentFocusIn)}handleFocus(){this.displayInput.setSelectionRange(0,0)}handleLabelClick(){this.displayInput.focus()}handleComboboxClick(e){e.preventDefault()}handleComboboxMouseDown(e){let t=e.composedPath().some(e=>e instanceof Element&&e.tagName.toLowerCase()===`wa-button`);this.disabled||t||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.stopPropagation(),this.handleDocumentKeyDown(e)}handleClearClick(e){e.stopPropagation(),this.hasInteracted=!0,this.valueHasChanged=!0,this.value!==null&&(this.displayLabel=``,this.selectionOrder.clear(),this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.dispatchEvent(new un),this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){let t=e.target.closest(`wa-option`);t&&!t.disabled&&(this.hasInteracted=!0,this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(t):this.setSelectedOptions(t),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.requestUpdate(`value`),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){this.slotChangePending||(this.slotChangePending=!0,queueMicrotask(()=>{this.slotChangePending=!1,this.processSlotChange()}))}processSlotChange(){if(customElements.get(`wa-option`)||customElements.whenDefined(`wa-option`).then(()=>this.handleDefaultSlotChange()),this.didSSR&&!this.hasUpdated){this.updateComplete.then(()=>{this.handleDefaultSlotChange()});return}this.cachedOptions=null;let e=this.getAllOptions();this.updateDefaultValue();let t=this.value;if(t==null||!this.valueHasChanged&&!this.hasInteracted){this.selectionChanged();return}Array.isArray(t)||(t=[t]);let n=e.filter(e=>t.includes(e.value));this.setSelectedOptions(n)}handleTagRemove(e,t){if(e.stopPropagation(),this.disabled)return;this.hasInteracted=!0,this.valueHasChanged=!0;let n=t;if(!n){let t=e.target.closest(`wa-tag[data-value]`);if(t){let e=t.dataset.value;n=this.selectedOptions.find(t=>t.value===e)}}n&&(this.toggleOptionSelection(n,!1),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}))}getAllOptions(){return this.cachedOptions?this.cachedOptions:this?.querySelectorAll?(this.cachedOptions=[...this.querySelectorAll(`wa-option`)],this.cachedOptions):[]}getFirstOption(){return this.querySelector(`wa-option`)}setCurrentOption(e){this.getAllOptions().forEach(e=>{e.current=!1,e.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus({preventScroll:!0}),this.open&&!this.listbox.hidden&&an(e,this.listbox,`vertical`,`auto`))}setSelectedOptions(e){let t=this.getAllOptions(),n=Array.isArray(e)?e:[e];t.forEach(e=>{n.includes(e)||(e.selected=!1)}),n.length&&n.forEach(e=>e.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){e.selected=t===!0||t===!1?t:!e.selected,this.selectionChanged()}selectionChanged(){let e=this.getAllOptions().filter(e=>{if(!this.hasInteracted&&!this.valueHasChanged){let t=this.defaultValue,n=Array.isArray(t)?t:[t];return e.hasAttribute(`selected`)||e.defaultSelected||e.selected||n?.includes(e.value)}return e.selected}),t=new Set(e.map(e=>e.value));for(let e of this.selectionOrder.keys())t.has(e)||this.selectionOrder.delete(e);let n=(this.selectionOrder.size>0?Math.max(...this.selectionOrder.values()):-1)+1;for(let t of e)this.selectionOrder.has(t.value)||this.selectionOrder.set(t.value,n++);this.selectedOptions=e.sort((e,t)=>(this.selectionOrder.get(e.value)??0)-(this.selectionOrder.get(t.value)??0));let r=new Set(this.selectedOptions.map(e=>e.value));if(r.size>0||this._value){let e=this._value;if(this._value==null){let e=this.defaultValue??[];this._value=Array.isArray(e)?e:[e]}this._value=this._value?.filter(e=>!this.optionValues?.has(e))??null,this._value?.unshift(...r),this.requestUpdate(`value`,e)}if(this.multiple)this.displayLabel=this.placeholder&&!this.value?.length?``:this.localize.term(`numOptionsSelected`,this.selectedOptions.length);else{let e=this.selectedOptions[0];this.displayLabel=e?.label??``}this.updateComplete.then(()=>{this.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){let n=this.getTag(e,t);return n?typeof n==`string`?Pn(n):n:null}return t===this.maxOptionsVisible?we`
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
        `:null})}updated(e){super.updated(e),(e.has(`value`)||e.has(`displayLabel`))&&this.customStates.set(`blank`,!this.value&&!this.displayLabel)}handleDisabledChange(){this.disabled&&this.open&&(this.open=!1)}handleValueChange(){let e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value],n=e.filter(e=>t.includes(e.value));this.setSelectedOptions(n),this.updateValidity()}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption());let e=new on;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)}),await Dn(this.popup.popup,`show`),this.currentOption&&an(this.currentOption,this.listbox,`vertical`,`auto`),this.dispatchEvent(new ln)}else{let e=new sn;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.removeOpenListeners(),await Dn(this.popup.popup,`hide`),this.listbox.hidden=!0,this.popup.active=!1,this.dispatchEvent(new cn)}}async show(){if(this.open||this.disabled)this.open=!1;else return this.open=!0,Tn(this,`wa-after-show`)}async hide(){if(!this.open||this.disabled)this.open=!1;else return this.open=!1,Tn(this,`wa-after-hide`)}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}formResetCallback(){this.selectionOrder.clear(),this.value=this.defaultValue,super.formResetCallback(),this.handleValueChange(),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})}render(){let e=this.hasSlotController.test(`label`,`withLabel`),t=this.hasSlotController.test(`hint`,`withHint`),n=this.label?!0:!!e,r=this.hint?!0:!!t,i=(this.hasUpdated||!1)&&this.withClear&&!this.disabled&&(this.displayLabel||this.value&&this.value.length>0);return we`
      <div
        part="form-control"
        class=${Mn({"form-control":!0,"form-control-has-label":n})}
      >
        <label
          id="label"
          part="form-control-label label"
          class=${Mn({label:!0,"has-label":n})}
          aria-hidden=${n?`false`:`true`}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <wa-popup
            class=${Mn({select:!0,open:this.open,disabled:this.disabled,enabled:!this.disabled,multiple:this.multiple})}
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
              ${this.multiple&&this.hasUpdated?we`<div part="tags" class="tags" @wa-remove=${this.handleTagRemove}>${this.tags}</div>`:``}

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

              ${i?we`
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
          class=${Mn({"has-slotted":r})}
          aria-hidden=${r?`false`:`true`}
          >${this.hint}</slot
        >
      </div>
    `}};A.css=[nn,gn,wn],D([rt(`.select`)],A.prototype,`popup`,2),D([rt(`.combobox`)],A.prototype,`combobox`,2),D([rt(`.display-input`)],A.prototype,`displayInput`,2),D([rt(`.value-input`)],A.prototype,`valueInput`,2),D([rt(`.listbox`)],A.prototype,`listbox`,2),D([tt()],A.prototype,`displayLabel`,2),D([tt()],A.prototype,`currentOption`,2),D([tt()],A.prototype,`selectedOptions`,2),D([k({reflect:!0})],A.prototype,`name`,2),D([k({attribute:!1})],A.prototype,`defaultValue`,1),D([k({attribute:`value`,reflect:!1})],A.prototype,`value`,1),D([k({reflect:!0})],A.prototype,`size`,2),D([E(`size`)],A.prototype,`handleSizeChange`,1),D([k()],A.prototype,`placeholder`,2),D([k({type:Boolean,reflect:!0})],A.prototype,`multiple`,2),D([k({attribute:`max-options-visible`,type:Number})],A.prototype,`maxOptionsVisible`,2),D([k({type:Boolean})],A.prototype,`disabled`,2),D([k({attribute:`with-clear`,type:Boolean})],A.prototype,`withClear`,2),D([k({type:Boolean,reflect:!0})],A.prototype,`open`,2),D([k({reflect:!0})],A.prototype,`appearance`,2),D([k({type:Boolean,reflect:!0})],A.prototype,`pill`,2),D([k()],A.prototype,`label`,2),D([k({reflect:!0})],A.prototype,`placement`,2),D([k({attribute:`hint`})],A.prototype,`hint`,2),D([k({attribute:`with-label`,type:Boolean})],A.prototype,`withLabel`,2),D([k({attribute:`with-hint`,type:Boolean})],A.prototype,`withHint`,2),D([k({type:Boolean,reflect:!0})],A.prototype,`required`,2),D([k({attribute:!1})],A.prototype,`getTag`,2),D([E(`disabled`,{waitUntilFirstUpdate:!0})],A.prototype,`handleDisabledChange`,1),D([E(`value`,{waitUntilFirstUpdate:!0})],A.prototype,`handleValueChange`,1),D([E(`open`,{waitUntilFirstUpdate:!0})],A.prototype,`handleOpenChange`,1),A=D([$e(`wa-select`)],A),A.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Fn=class extends Event{constructor(){super(`wa-remove`,{bubbles:!0,cancelable:!1,composed:!0})}},In=u`
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
`,Ln=u`
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
`,Rn=class extends lt{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(...arguments),this.localize=new Qt(this),this.variant=`neutral`,this.appearance=`filled-outlined`,this.size=`m`,this.pill=!1,this.withRemove=!1}handleSizeChange(){Sn(this.localName,this.size)}handleRemoveClick(){this.dispatchEvent(new Fn)}render(){return we`
      <slot part="content" class="content"></slot>

      ${this.withRemove?we`
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
    `}};Rn.css=[In,Ln,wn],D([k({reflect:!0})],Rn.prototype,`variant`,2),D([k({reflect:!0})],Rn.prototype,`appearance`,2),D([k({reflect:!0})],Rn.prototype,`size`,2),D([E(`size`)],Rn.prototype,`handleSizeChange`,1),D([k({type:Boolean,reflect:!0})],Rn.prototype,`pill`,2),D([k({attribute:`with-remove`,type:Boolean})],Rn.prototype,`withRemove`,2),Rn=D([$e(`wa-tag`)],Rn);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var zn=class extends Event{constructor(){super(`wa-reposition`,{bubbles:!0,cancelable:!1,composed:!0})}},Bn=u`
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
`
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;const Vn=Math.min,Hn=Math.max,Un=Math.round,Wn=Math.floor,Gn=e=>({x:e,y:e}),Kn={left:`right`,right:`left`,bottom:`top`,top:`bottom`};function qn(e,t,n){return Hn(e,Vn(t,n))}function Jn(e,t){return typeof e==`function`?e(t):e}function Yn(e){return e.split(`-`)[0]}function Xn(e){return e.split(`-`)[1]}function Zn(e){return e===`x`?`y`:`x`}function Qn(e){return e===`y`?`height`:`width`}function $n(e){let t=e[0];return t===`t`||t===`b`?`y`:`x`}function er(e){return Zn($n(e))}function tr(e,t,n){n===void 0&&(n=!1);let r=Xn(e),i=er(e),a=Qn(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=ur(o)),[o,ur(o)]}function nr(e){let t=ur(e);return[rr(e),t,rr(t)]}function rr(e){return e.includes(`start`)?e.replace(`start`,`end`):e.replace(`end`,`start`)}const ir=[`left`,`right`],ar=[`right`,`left`],or=[`top`,`bottom`],sr=[`bottom`,`top`];function cr(e,t,n){switch(e){case`top`:case`bottom`:return n?t?ar:ir:t?ir:ar;case`left`:case`right`:return t?or:sr;default:return[]}}function lr(e,t,n,r){let i=Xn(e),a=cr(Yn(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(rr)))),a}function ur(e){let t=Yn(e);return Kn[t]+e.slice(t.length)}function dr(e){return{top:e.top??0,right:e.right??0,bottom:e.bottom??0,left:e.left??0}}function fr(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:dr(e)}function pr(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function mr(e,t,n){let{reference:r,floating:i}=e,a=$n(t),o=er(t),s=Qn(o),c=Yn(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}let m=Xn(t);return m&&(p[o]+=f*(m===`end`?1:-1)*(n&&l?-1:1)),p}async function hr(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=Jn(t,e),p=fr(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=pr(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=pr(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}const gr=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=o.detectOverflow?o:{...o,detectOverflow:hr},c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=mr(l,r,c),f=r,p=0,m={};for(let n=0;n<a.length;n++){let h=a[n];if(!h)continue;let{name:g,fn:_}=h,{x:v,y,data:b,reset:ee}=await _({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:m,rects:l,platform:s,elements:{reference:e,floating:t}});u=v??u,d=y??d,m[g]={...m[g],...b},ee&&p<50&&(p++,typeof ee==`object`&&(ee.placement&&(f=ee.placement),ee.rects&&(l=ee.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):ee.rects),{x:u,y:d}=mr(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:m}},_r=e=>({name:`arrow`,options:e,async fn(t){let{x:n,y:r,placement:i,rects:a,platform:o,elements:s,middlewareData:c}=t,{element:l,padding:u=0}=Jn(e,t)||{};if(l==null)return{};let d=fr(u),f={x:n,y:r},p=er(i),m=Qn(p),h=await o.getDimensions(l),g=p===`y`,_=g?`top`:`left`,v=g?`bottom`:`right`,y=g?`clientHeight`:`clientWidth`,b=a.reference[m]+a.reference[p]-f[p]-a.floating[m],ee=f[p]-a.reference[p],te=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l)),x=te?te[y]:0;(!x||!await(o.isElement==null?void 0:o.isElement(te)))&&(x=s.floating[y]||a.floating[m]);let S=b/2-ee/2,C=x/2-h[m]/2-1,ne=Vn(d[_],C),re=Vn(d[v],C),ie=x-h[m]-re,ae=x/2-h[m]/2+S,oe=qn(ne,ae,ie),se=!c.arrow&&Xn(i)!=null&&ae!==oe&&a.reference[m]/2-(ae<ne?ne:re)-h[m]/2<0,ce=se?ae<ne?ae-ne:ae-ie:0;return{[p]:f[p]+ce,data:{[p]:oe,centerOffset:ae-oe-ce,...se&&{alignmentOffset:ce}},reset:se}}}),vr=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=Jn(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=Yn(r),_=$n(o),v=Yn(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),b=d||(v||!m?[ur(o)]:nr(o)),ee=p!==`none`;!d&&ee&&b.push(...lr(o,m,p,y));let te=[o,...b],x=await s.detectOverflow(t,h),S=[],C=i.flip?.overflows||[];if(l&&S.push(x[g]),u){let e=tr(r,a,y);S.push(x[e[0]],x[e[1]])}if(C=[...C,{placement:r,overflows:S}],!S.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=te[e];if(t&&(u!==`alignment`||_===$n(t)||C.every(e=>$n(e.placement)!==_||e.overflows[0]>0)))return{data:{index:e,overflows:C},reset:{placement:t}};let n=C.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=C.filter(e=>{if(ee){let t=$n(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o}if(r!==n)return{reset:{placement:n}}}return{}}}},yr=/*#__PURE__*/ new Set([`left`,`top`]);async function br(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=Yn(n),s=Xn(n),c=$n(n)===`y`,l=yr.has(o)?-1:1,u=a&&c?-1:1,d=Jn(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}const xr=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await br(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},Sr=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i,platform:a}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=Jn(e,t),u={x:n,y:r},d=await a.detectOverflow(t,l),f=$n(i),p=Zn(f),m=u[p],h=u[f],g=(e,t)=>qn(t+d[e===`y`?`top`:`left`],t,t-d[e===`y`?`bottom`:`right`]);o&&(m=g(p,m)),s&&(h=g(f,h));let _=c.fn({...t,[p]:m,[f]:h});return{..._,data:{x:_.x-n,y:_.y-r,enabled:{[p]:o,[f]:s}}}}}},Cr=function(e){return e===void 0&&(e={}),{name:`size`,options:e,async fn(t){let{placement:n,rects:r,platform:i,elements:a}=t,{apply:o=()=>{},...s}=Jn(e,t),c=await i.detectOverflow(t,s),l=Yn(n),u=Xn(n),d=$n(n)===`y`,{width:f,height:p}=r.floating,m,h;l===`top`||l===`bottom`?(m=l,h=u===(await(i.isRTL==null?void 0:i.isRTL(a.floating))?`start`:`end`)?`left`:`right`):(h=l,m=u===`end`?`top`:`bottom`);let g=p-c.top-c.bottom,_=f-c.left-c.right,v=Vn(p-c[m],g),y=Vn(f-c[h],_),b=t.middlewareData.shift,ee=!b,te=v,x=y;b!=null&&b.enabled.x&&(x=_),b!=null&&b.enabled.y&&(te=g),ee&&!u&&(d?x=f-2*Hn(c.left,c.right):te=p-2*Hn(c.top,c.bottom)),await o({...t,availableWidth:x,availableHeight:te});let S=await i.getDimensions(a.floating);return f!==S.width||p!==S.height?{reset:{rects:!0}}:{}}}};function wr(){return typeof window<`u`}function Tr(e){return Or(e)?(e.nodeName||``).toLowerCase():`#document`}function Er(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Dr(e){return((Or(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function Or(e){return wr()?e instanceof Node||e instanceof Er(e).Node:!1}function kr(e){return wr()?e instanceof Element||e instanceof Er(e).Element:!1}function Ar(e){return wr()?e instanceof HTMLElement||e instanceof Er(e).HTMLElement:!1}function jr(e){return!wr()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof Er(e).ShadowRoot}function Mr(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=Ur(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!==`inline`&&i!==`contents`}function Nr(e){return/^(table|td|th)$/.test(Tr(e))}function Pr(e){try{if(e.matches(`:popover-open`))return!0}catch{}try{return e.matches(`:modal`)}catch{return!1}}const Fr=/transform|translate|scale|rotate|perspective|filter/,Ir=/paint|layout|strict|content/,Lr=e=>!!e&&e!==`none`;let Rr;function zr(e){let t=kr(e)?Ur(e):e;return Lr(t.transform)||Lr(t.translate)||Lr(t.scale)||Lr(t.rotate)||Lr(t.perspective)||!Vr()&&(Lr(t.backdropFilter)||Lr(t.filter))||Fr.test(t.willChange||``)||Ir.test(t.contain||``)}function Br(e){let t=Gr(e);for(;Ar(t)&&!Hr(t);){if(zr(t))return t;if(Pr(t))return null;t=Gr(t)}return null}function Vr(){return Rr??=typeof CSS<`u`&&CSS.supports&&CSS.supports(`-webkit-backdrop-filter`,`none`),Rr}function Hr(e){return/^(html|body|#document)$/.test(Tr(e))}function Ur(e){return Er(e).getComputedStyle(e)}function Wr(e){return kr(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Gr(e){if(Tr(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||jr(e)&&e.host||Dr(e);return jr(t)?t.host:t}function Kr(e){let t=Gr(e);return Hr(t)?(e.ownerDocument||e).body:Ar(t)&&Mr(t)?t:Kr(t)}function qr(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=Kr(e),i=r===e.ownerDocument?.body,a=Er(r);if(i){let e=Jr(a);return t.concat(a,a.visualViewport||[],Mr(r)?r:[],e&&n?qr(e):[])}return t.concat(r,qr(r,[],n))}function Jr(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Yr(e){let t=Ur(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=Ar(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=Un(n)!==a||Un(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function Xr(e){return kr(e)?e:e.contextElement}function Zr(e){let t=Xr(e);if(!Ar(t))return Gn(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=Yr(t),o=(a?Un(n.width):n.width)/r,s=(a?Un(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}const Qr=/*#__PURE__*/ Gn(0);function $r(e){let t=Er(e);return!Vr()||!t.visualViewport?Qr:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function ei(e,t,n){return t===void 0&&(t=!1),!!n&&t&&n===Er(e)}function ti(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=Xr(e),o=Gn(1);t&&(r?kr(r)&&(o=Zr(r)):o=Zr(e));let s=ei(a,n,r)?$r(a):Gn(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a&&r){let e=Er(a),t=kr(r)?Er(r):r,n=e,i=Jr(n);for(;i&&t!==n;){let e=Zr(i),t=i.getBoundingClientRect(),r=Ur(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=Er(i),i=Jr(n)}}return pr({width:u,height:d,x:c,y:l})}function ni(e,t){let n=Wr(e).scrollLeft;return t?t.left+n:ti(Dr(e)).left+n}function ri(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-ni(e,n),y:n.top+t.scrollTop}}function ii(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=Dr(r),s=t?Pr(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=Gn(1),u=Gn(0),d=Ar(r);if((d||!a)&&((Tr(r)!==`body`||Mr(o))&&(c=Wr(r)),d)){let e=ti(r);l=Zr(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?ri(o,c):Gn(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function ai(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function oi(e){let t=Wr(e),n=e.ownerDocument.body,r=Hn(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),i=Hn(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight),a=-t.scrollLeft+ni(e),o=-t.scrollTop;return Ur(n).direction===`rtl`&&(a+=Hn(e.clientWidth,n.clientWidth)-r),{width:r,height:i,x:a,y:o}}function si(e,t,n){n===void 0&&(n=`viewport`);let r=n===`layoutViewport`,i=Er(e),a=Dr(e),o=i.visualViewport,s=a.clientWidth,c=a.clientHeight,l=0,u=0;if(o){let e=!Vr()||t===`fixed`;r?e||(l=-o.offsetLeft,u=-o.offsetTop):(s=o.width,c=o.height,e&&(l=o.offsetLeft,u=o.offsetTop))}if(ni(a)<=0){let e=a.ownerDocument,t=e.body,n=getComputedStyle(t),r=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,i=Math.abs(a.clientWidth-t.clientWidth-r),o=getComputedStyle(a).scrollbarGutter===`stable both-edges`?i/2:i;o<=25&&(s-=o)}return{width:s,height:c,x:l,y:u}}function ci(e,t){let n=ti(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=Zr(e);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function li(e,t,n){let r;if(t===`viewport`||t===`layoutViewport`)r=si(e,n,t);else if(t===`document`)r=oi(Dr(e));else if(kr(t))r=ci(t,n);else{let n=$r(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return pr(r)}function ui(e,t){let n=t.get(e);if(n)return n;let r=qr(e,[],!1).filter(e=>kr(e)&&Tr(e)!==`body`),i=null,a=Ur(e).position===`fixed`,o=a?Gr(e):e;for(;kr(o)&&!Hr(o);){let e=Ur(o),t=zr(o),n=i?i.position:a?`fixed`:``;!t&&(n===`fixed`||n===`absolute`&&e.position===`static`)?r=r.filter(e=>e!==o):i=e,o=Gr(o)}return t.set(e,r),r}function di(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?Pr(t)?[]:ui(t,this._c):[].concat(n),r],o=li(t,a[0],i),s=o.top,c=o.right,l=o.bottom,u=o.left;for(let e=1;e<a.length;e++){let n=li(t,a[e],i);s=Hn(n.top,s),c=Vn(n.right,c),l=Vn(n.bottom,l),u=Hn(n.left,u)}return{width:c-u,height:l-s,x:u,y:s}}function fi(e){let{width:t,height:n}=Yr(e);return{width:t,height:n}}function pi(e,t,n){let r=Ar(t),i=Dr(t),a=n===`fixed`,o=ti(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=Gn(0);if((r||!a)&&((Tr(t)!==`body`||Mr(i))&&(s=Wr(t)),r)){let e=ti(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}!r&&i&&(c.x=ni(i));let l=i&&!r&&!a?ri(i,s):Gn(0);return{x:o.left+s.scrollLeft-c.x-l.x,y:o.top+s.scrollTop-c.y-l.y,width:o.width,height:o.height}}function mi(e){return Ur(e).position===`static`}function hi(e,t){if(!Ar(e)||Ur(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return Dr(e)===n&&(n=n.ownerDocument.body),n}function gi(e,t){let n=Er(e);if(Pr(e))return n;if(!Ar(e)){let t=Gr(e);for(;t&&!Hr(t);){if(kr(t)&&!mi(t))return t;t=Gr(t)}return n}let r=hi(e,t);for(;r&&Nr(r)&&mi(r);)r=hi(r,t);return r&&Hr(r)&&mi(r)&&!zr(r)?n:r||Br(e)||n}const _i=async function(e){let t=this.getOffsetParent||gi,n=this.getDimensions,r=await n(e.floating);return{reference:pi(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function vi(e){return Ur(e).direction===`rtl`}const yi={convertOffsetParentRelativeRectToViewportRelativeRect:ii,getDocumentElement:Dr,getClippingRect:di,getOffsetParent:gi,getElementRects:_i,getClientRects:ai,getDimensions:fi,getScale:Zr,isElement:kr,isRTL:vi};function bi(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function xi(e,t,n){let r=null,i,a=Dr(e);function o(){var e;clearTimeout(i),(e=r)==null||e.disconnect(),r=null}function s(n,c){n===void 0&&(n=!1),c===void 0&&(c=1),o();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(n||t(),!f||!p)return;let m=Wn(d),h=Wn(a.clientWidth-(u+f)),g=Wn(a.clientHeight-(d+p)),_=Wn(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:Hn(0,Vn(1,c))||1},y=!0;function b(t){let n=t[0].intersectionRatio;if(!bi(l,e.getBoundingClientRect()))return s();if(n!==c){if(!y)return s();n?s(!1,n):i=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{r=new IntersectionObserver(b,{...v,root:a.ownerDocument})}catch{r=new IntersectionObserver(b,v)}r.observe(e)}let c=Er(e),l=()=>s(n);return c.addEventListener(`resize`,l),s(!0),()=>{c.removeEventListener(`resize`,l),o()}}function Si(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=Xr(e),u=i||a?[...l?qr(l):[],...t?qr(t):[]]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n),a&&e.addEventListener(`resize`,n)});let d=l&&s?xi(l,n,a):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&t&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),t&&p.observe(t));let m,h=c?ti(e):null;c&&g();function g(){let t=ti(e);h&&!bi(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}const Ci=xr,wi=Sr,Ti=vr,Ei=Cr,Di=_r,Oi=(e,t,n)=>{let r=/* @__PURE__ */ new Map,i=n??{},a={...yi,...i.platform,_c:r};return gr(e,t,{...i,platform:a})};function ki(e){return ji(e)}function Ai(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function ji(e){for(let t=e;t;t=Ai(t))if(t instanceof Element&&getComputedStyle(t).display===`none`)return null;for(let t=Ai(e);t;t=Ai(t)){if(!(t instanceof Element))continue;let e=getComputedStyle(t);if(e.display!==`contents`&&(e.position!==`static`||zr(e)||t.tagName===`BODY`))return t}return null}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Mi(e){return typeof e==`object`&&!!e&&`getBoundingClientRect`in e&&(`contextElement`in e?e instanceof Element:!0)}var Ni=!!globalThis?.HTMLElement?.prototype.hasOwnProperty(`popover`),Pi=class extends lt{constructor(){super(...arguments),this.localize=new Qt(this),this.SUPPORTS_POPOVER=!1,this.active=!1,this.placement=`top`,this.boundary=`viewport`,this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement=`anchor`,this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements=``,this.flipFallbackStrategy=`best-fit`,this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl&&this.popup){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),n=this.placement.includes(`top`)||this.placement.includes(`bottom`),r=0,i=0,a=0,o=0,s=0,c=0,l=0,u=0;n?e.top<t.top?(r=e.left,i=e.bottom,a=e.right,o=e.bottom,s=t.left,c=t.top,l=t.right,u=t.top):(r=t.left,i=t.bottom,a=t.right,o=t.bottom,s=e.left,c=e.top,l=e.right,u=e.top):e.left<t.left?(r=e.right,i=e.top,a=t.left,o=t.top,s=e.right,c=e.bottom,l=t.left,u=t.bottom):(r=t.right,i=t.top,a=e.left,o=e.top,s=t.right,c=t.bottom,l=e.left,u=e.bottom),this.style.setProperty(`--hover-bridge-top-left-x`,`${r}px`),this.style.setProperty(`--hover-bridge-top-left-y`,`${i}px`),this.style.setProperty(`--hover-bridge-top-right-x`,`${a}px`),this.style.setProperty(`--hover-bridge-top-right-y`,`${o}px`),this.style.setProperty(`--hover-bridge-bottom-left-x`,`${s}px`),this.style.setProperty(`--hover-bridge-bottom-left-y`,`${c}px`),this.style.setProperty(`--hover-bridge-bottom-right-x`,`${l}px`),this.style.setProperty(`--hover-bridge-bottom-right-y`,`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.SUPPORTS_POPOVER=Ni,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has(`active`)&&(this.active?this.start():this.stop()),e.has(`anchor`)&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor==`string`){let e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchorEl=this.anchor instanceof Element||Mi(this.anchor)?this.anchor:this.querySelector(`[slot="anchor"]`);this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&this.active&&this.isConnected&&(this.popup?.showPopover?.(),this.cleanup=Si(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.popup?.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute(`data-current-placement`),this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl||!this.popup)return;let e=[Ci({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Ei({apply:({rects:e})=>{let t=this.sync===`width`||this.sync===`both`,n=this.sync===`height`||this.sync===`both`;this.popup.style.width=t?`${e.reference.width}px`:``,this.popup.style.height=n?`${e.reference.height}px`:``}})):(this.popup.style.width=``,this.popup.style.height=``);let t;this.SUPPORTS_POPOVER&&!Mi(this.anchor)&&this.boundary===`scroll`&&(t=qr(this.anchorEl).filter(e=>e instanceof Element)),this.flip&&e.push(Ti({boundary:this.flipBoundary||t,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy===`best-fit`?`bestFit`:`initialPlacement`,padding:this.flipPadding})),this.shift&&e.push(wi({boundary:this.shiftBoundary||t,padding:this.shiftPadding})),this.autoSize?e.push(Ei({boundary:this.autoSizeBoundary||t,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{this.autoSize===`vertical`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-height`,`${t}px`):this.style.removeProperty(`--auto-size-available-height`),this.autoSize===`horizontal`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-width`,`${e}px`):this.style.removeProperty(`--auto-size-available-width`)}})):(this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`)),this.arrow&&e.push(Di({element:this.arrowEl,padding:this.arrowPadding}));let n=this.SUPPORTS_POPOVER?e=>yi.getOffsetParent(e,ki):yi.getOffsetParent;Oi(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.SUPPORTS_POPOVER?`absolute`:`fixed`,platform:{...yi,getOffsetParent:n}}).then(({x:e,y:t,middlewareData:n,placement:r})=>{let i=this.localize.dir()===`rtl`,a={top:`bottom`,right:`left`,bottom:`top`,left:`right`}[r.split(`-`)[0]];if(this.setAttribute(`data-current-placement`,r),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=n.arrow.x,t=n.arrow.y,r=``,o=``,s=``,c=``;if(this.arrowPlacement===`start`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;r=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``,o=i?n:``,c=i?``:n}else if(this.arrowPlacement===`end`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;o=i?``:n,c=i?n:``,s=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``}else this.arrowPlacement===`center`?(c=typeof e==`number`?`calc(50% - var(--arrow-size-diagonal))`:``,r=typeof t==`number`?`calc(50% - var(--arrow-size-diagonal))`:``):(c=typeof e==`number`?`${e}px`:``,r=typeof t==`number`?`${t}px`:``);Object.assign(this.arrowEl.style,{top:r,right:o,bottom:s,left:c,[a]:`calc(var(--arrow-base-offset) - var(--arrow-size-diagonal))`})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new zn)}render(){return we`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${Mn({"popup-hover-bridge":!0,"popup-hover-bridge-visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${Mn({popup:!0,"popup-active":this.active,"popup-fixed":!this.SUPPORTS_POPOVER,"popup-has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?we`<div part="arrow" class="arrow" role="presentation"></div>`:``}
      </div>
    `}};Pi.css=Bn,D([rt(`.popup`)],Pi.prototype,`popup`,2),D([rt(`.arrow`)],Pi.prototype,`arrowEl`,2),D([k({attribute:!1,type:Boolean})],Pi.prototype,`SUPPORTS_POPOVER`,2),D([k()],Pi.prototype,`anchor`,2),D([k({type:Boolean,reflect:!0})],Pi.prototype,`active`,2),D([k({reflect:!0})],Pi.prototype,`placement`,2),D([k()],Pi.prototype,`boundary`,2),D([k({type:Number})],Pi.prototype,`distance`,2),D([k({type:Number})],Pi.prototype,`skidding`,2),D([k({type:Boolean})],Pi.prototype,`arrow`,2),D([k({attribute:`arrow-placement`})],Pi.prototype,`arrowPlacement`,2),D([k({attribute:`arrow-padding`,type:Number})],Pi.prototype,`arrowPadding`,2),D([k({type:Boolean})],Pi.prototype,`flip`,2),D([k({attribute:`flip-fallback-placements`,converter:{fromAttribute:e=>e.split(` `).map(e=>e.trim()).filter(e=>e!==``),toAttribute:e=>e.join(` `)}})],Pi.prototype,`flipFallbackPlacements`,2),D([k({attribute:`flip-fallback-strategy`})],Pi.prototype,`flipFallbackStrategy`,2),D([k({type:Object})],Pi.prototype,`flipBoundary`,2),D([k({attribute:`flip-padding`,type:Number})],Pi.prototype,`flipPadding`,2),D([k({type:Boolean})],Pi.prototype,`shift`,2),D([k({type:Object})],Pi.prototype,`shiftBoundary`,2),D([k({attribute:`shift-padding`,type:Number})],Pi.prototype,`shiftPadding`,2),D([k({attribute:`auto-size`})],Pi.prototype,`autoSize`,2),D([k()],Pi.prototype,`sync`,2),D([k({type:Object})],Pi.prototype,`autoSizeBoundary`,2),D([k({attribute:`auto-size-padding`,type:Number})],Pi.prototype,`autoSizePadding`,2),D([k({attribute:`hover-bridge`,type:Boolean})],Pi.prototype,`hoverBridge`,2),Pi=D([$e(`wa-popup`)],Pi);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Fi=()=>({checkValidity(e){let t=e.input,n={message:``,isValid:!0,invalidKeys:[]};if(!t)return n;let r=!0;if(`checkValidity`in t&&(r=t.checkValidity()),r)return n;if(n.isValid=!1,`validationMessage`in t&&(n.message=t.validationMessage),!(`validity`in t))return n.invalidKeys.push(`customError`),n;for(let e in t.validity){if(e===`valid`)continue;let r=e;t.validity[r]&&n.invalidKeys.push(r)}return n}}),Ii=u`
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
`
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Li=e=>e??Ee,Ri=Symbol.for(``),zi=e=>{
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
if(e?.r===Ri)return e?._$litStatic$},Bi=(e,...t)=>({_$litStatic$:t.reduce((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1],e[0]),r:Ri}),Vi=/* @__PURE__ */ new Map,Hi=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],(i=zi(a))!==void 0);)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=Vi.get(e))===void 0&&(o.raw=o,Vi.set(e,t=o)),n=s}return e(t,...n)})(we);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ui=class extends yn{constructor(){super(...arguments),this.assumeInteractionOn=[`click`],this.hasSlotController=new Cn(this,`[default]`,`start`,`end`),this.localize=new Qt(this),this.invalid=!1,this.isIconButton=!1,this.title=``,this.variant=`neutral`,this.appearance=`accent`,this.size=`m`,this.withCaret=!1,this.withStart=!1,this.withEnd=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type=`button`}static get validators(){return[...super.validators,Fi()]}handleSizeChange(){Sn(this.localName,this.size)}constructLightDOMButton(){let e=document.createElement(`button`);for(let t of this.attributes)t.name!==`style`&&e.setAttribute(t.name,t.value);return e.type=this.type,e.style.position=`absolute !important`,e.style.width=`0 !important`,e.style.height=`0 !important`,e.style.clipPath=`inset(50%) !important`,e.style.overflow=`hidden !important`,e.style.whiteSpace=`nowrap !important`,this.name&&(e.name=this.name),e.value=this.value||``,e}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopImmediatePropagation();return}if(this.type!==`submit`&&this.type!==`reset`||!this.getForm())return;let t=this.constructLightDOMButton();this.parentElement?.append(t),t.click(),t.remove()}handleInvalid(){this.dispatchEvent(new _n)}handleLabelSlotChange(){let e=this.labelSlot.assignedNodes({flatten:!0}),t=!1,n=!1,r=!1,i=!1;[...e].forEach(e=>{if(e.nodeType===Node.ELEMENT_NODE){let r=e;r.localName===`wa-icon`?(n=!0,t||=r.label!==void 0):i=!0}else e.nodeType===Node.TEXT_NODE&&(e.textContent?.trim()||``).length>0&&(r=!0)}),this.isIconButton=n&&!r&&!i,this.customStates.set(`icon-button`,this.isIconButton),this.isIconButton&&!t&&console.warn(`Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.`,this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.customStates.set(`disabled`,this.disabled),this.updateValidity()}handleHrefChange(){this.customStates.set(`link`,this.isLink())}handleLoadingChange(){this.customStates.set(`loading`,this.loading)}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=this.isLink(),t=e?Bi`a`:Bi`button`;return Hi`
      <${t}
        part="base button"
        class=${Mn({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()===`rtl`,"has-label":this.hasSlotController.test(`[default]`),"has-start":this.hasSlotController.test(`start`,`withStart`),"has-end":this.hasSlotController.test(`end`,`withEnd`),"is-icon-button":this.isIconButton})}
        ?disabled=${Li(e?void 0:this.disabled)}
        type=${Li(e?void 0:this.type)}
        title=${this.title}
        name=${Li(e?void 0:this.name)}
        value=${Li(e?void 0:this.value)}
        href=${Li(e?this.href:void 0)}
        target=${Li(e?this.target:void 0)}
        download=${Li(e?this.download:void 0)}
        rel=${Li(e&&this.rel?this.rel:void 0)}
        role=${Li(e?void 0:`button`)}
        aria-disabled=${Li(e&&this.disabled?`true`:void 0)}
        aria-busy=${this.loading?`true`:`false`}
        tabindex=${this.disabled?`-1`:`0`}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?Hi`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:``}
        ${this.loading?Hi`<wa-spinner part="spinner"></wa-spinner>`:``}
      </${t}>
    `}};Ui.shadowRootOptions={...yn.shadowRootOptions,delegatesFocus:!0},Ui.css=[Ii,Ln,wn],D([rt(`.button`)],Ui.prototype,`button`,2),D([rt(`slot:not([name])`)],Ui.prototype,`labelSlot`,2),D([tt()],Ui.prototype,`invalid`,2),D([tt()],Ui.prototype,`isIconButton`,2),D([k()],Ui.prototype,`title`,2),D([k({reflect:!0})],Ui.prototype,`variant`,2),D([k({reflect:!0})],Ui.prototype,`appearance`,2),D([k({reflect:!0})],Ui.prototype,`size`,2),D([E(`size`)],Ui.prototype,`handleSizeChange`,1),D([k({attribute:`with-caret`,type:Boolean,reflect:!0})],Ui.prototype,`withCaret`,2),D([k({attribute:`with-start`,type:Boolean})],Ui.prototype,`withStart`,2),D([k({attribute:`with-end`,type:Boolean})],Ui.prototype,`withEnd`,2),D([k({type:Boolean})],Ui.prototype,`disabled`,2),D([k({type:Boolean,reflect:!0})],Ui.prototype,`loading`,2),D([k({type:Boolean,reflect:!0})],Ui.prototype,`pill`,2),D([k()],Ui.prototype,`type`,2),D([k({reflect:!0})],Ui.prototype,`name`,2),D([k({reflect:!0})],Ui.prototype,`value`,2),D([k({reflect:!0})],Ui.prototype,`href`,2),D([k()],Ui.prototype,`target`,2),D([k()],Ui.prototype,`rel`,2),D([k()],Ui.prototype,`download`,2),D([k({attribute:`formaction`})],Ui.prototype,`formAction`,2),D([k({attribute:`formenctype`})],Ui.prototype,`formEnctype`,2),D([k({attribute:`formmethod`})],Ui.prototype,`formMethod`,2),D([k({attribute:`formnovalidate`,type:Boolean})],Ui.prototype,`formNoValidate`,2),D([k({attribute:`formtarget`})],Ui.prototype,`formTarget`,2),D([E(`disabled`,{waitUntilFirstUpdate:!0})],Ui.prototype,`handleDisabledChange`,1),D([E(`href`)],Ui.prototype,`handleHrefChange`,1),D([E(`loading`,{waitUntilFirstUpdate:!0})],Ui.prototype,`handleLoadingChange`,1),Ui=D([$e(`wa-button`)],Ui),Ui.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Wi=u`
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
`,Gi=class extends lt{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(...arguments),this.localize=new Qt(this)}render(){return we`
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
    `}};Gi.css=Wi,Gi=D([$e(`wa-spinner`)],Gi);var Ki=/* @__PURE__ */ t({default:()=>A}),qi=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-lazy-change`,{bubbles:!0,cancelable:!1,composed:!0})}},Ji=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-lazy-load`,{bubbles:!0,cancelable:!1,composed:!0})}},Yi=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-expand`,{bubbles:!0,cancelable:!1,composed:!0})}},Xi=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-collapse`,{bubbles:!0,cancelable:!1,composed:!0})}},Zi=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-after-collapse`,{bubbles:!0,cancelable:!1,composed:!0})}},Qi=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-after-expand`,{bubbles:!0,cancelable:!1,composed:!0})}},$i=u`
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
`,ea=class extends Event{constructor(e,t,n,r){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
super(`context-request`,{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t,this.callback=n,this.subscribe=r??!1}};
/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
function ta(e){return e}
/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/var na=class{constructor(e,t,n,r){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(e,t)=>{this.unsubscribe&&(this.unsubscribe!==t&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=e,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(e,t)),this.unsubscribe=t},this.host=e,t.context!==void 0){let e=t;this.context=e.context,this.callback=e.callback,this.subscribe=e.subscribe??!1}else this.context=t,this.callback=n,this.subscribe=r??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&=(this.unsubscribe(),void 0)}dispatchRequest(){this.host.dispatchEvent(new ea(this.context,this.host,this.t,this.subscribe))}},ra=class{get value(){
/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){let n=t||!Object.is(e,this.o);this.o=e,n&&this.updateObservers()}constructor(e){this.subscriptions=/* @__PURE__ */ new Map,this.updateObservers=()=>{for(let[e,{disposer:t}]of this.subscriptions)e(this.o,t)},e!==void 0&&(this.value=e)}addCallback(e,t,n){if(!n)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});let{disposer:r}=this.subscriptions.get(e);e(this.value,r)}clearCallbacks(){this.subscriptions.clear()}},ia=class extends Event{constructor(e,t){
/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
super(`context-provider`,{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t}},aa=class extends ra{constructor(e,t,n){super(t.context===void 0?n:t.initialValue),this.onContextRequest=e=>{if(e.context!==this.context)return;let t=e.contextTarget??e.composedPath()[0];t!==this.host&&(e.stopPropagation(),this.addCallback(e.callback,t,e.subscribe))},this.onProviderRequest=e=>{if(e.context!==this.context||(e.contextTarget??e.composedPath()[0])===this.host)return;let t=/* @__PURE__ */ new Set;for(let[e,{consumerHost:n}]of this.subscriptions)t.has(e)||(t.add(e),n.dispatchEvent(new ea(this.context,n,e,!0)));e.stopPropagation()},this.host=e,this.context=t.context===void 0?t:t.context,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener(`context-request`,this.onContextRequest),this.host.addEventListener(`context-provider`,this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new ia(this.context,this.host))}};
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function oa({context:e}){return(t,n)=>{let r=/* @__PURE__ */ new WeakMap;if(typeof n==`object`)return{get(){return t.get.call(this)},set(e){return r.get(this).setValue(e),t.set.call(this,e)},init(t){return r.set(this,new aa(this,{context:e,initialValue:t})),t}};{t.constructor.addInitializer((t=>{r.set(t,new aa(t,{context:e}))}));let i=Object.getOwnPropertyDescriptor(t,n),a;if(i===void 0){let e=/* @__PURE__ */ new WeakMap;a={get(){return e.get(this)},set(t){r.get(this).setValue(t),e.set(this,t)},configurable:!0,enumerable:!0}}else{let e=i.set;a={...i,set(t){r.get(this).setValue(t),e?.call(this,t)}}}Object.defineProperty(t,n,a);return}}}
/**
* @license
* Copyright 2022 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function sa({context:e,subscribe:t}){return(n,r)=>{typeof r==`object`?r.addInitializer((function(){new na(this,{context:e,callback:e=>{n.set.call(this,e)},subscribe:t})})):n.constructor.addInitializer((n=>{new na(n,{context:e,callback:e=>{n[r]=e},subscribe:t})}))}}
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const ca=An(class extends jn{constructor(e){if(super(e),e.type!==kn.PROPERTY&&e.type!==kn.ATTRIBUTE&&e.type!==kn.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!jt(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===Te||t===Ee)return t;let n=e.element,r=e.name;if(e.type===kn.PROPERTY){if(t===n[r])return Te}else if(e.type===kn.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return Te}else if(e.type===kn.ATTRIBUTE&&n.getAttribute(r)===t+``)return Te;return Nt(e),t}});
/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
function la(e,t,n){return e?t(e):n?.(e)}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var ua=ta(`wa-tree-item`),j=class extends lt{constructor(){super(...arguments),this.localize=new Qt(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1,this._treeItemContext={depth:0,expanded:this.expanded},this._parentTreeContext=null,this.animationGeneration=0,this.tabIndex=-1,this.role=`treeitem`}static isTreeItem(e){let t=e;return t&&(t.role===`treeitem`||t.getAttribute?.(`role`)===`treeitem`)}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`treeitem`),this.setAttribute(`tabIndex`,this.tabIndex.toString()),this.isNestedItem()&&(this.setAttribute(`slot`,`children`),this._parentTreeContext?.expanded||(this.expanded=!1)),this._parentTreeContext&&(this._treeItemContext={depth:this._parentTreeContext.depth+1,expanded:this.expanded}),this.updateIndentation()}firstUpdated(e){super.firstUpdated(e),this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?`auto`:`0`,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(e){this.dispatchEvent(new Xi);let t=On(getComputedStyle(this.childrenContainer).getPropertyValue(`--hide-duration`));await En(this.childrenContainer,[{height:`${this.childrenContainer.scrollHeight}px`,opacity:`1`,overflow:`hidden`},{height:`0`,opacity:`0`,overflow:`hidden`}],{duration:t,easing:`cubic-bezier(0.4, 0.0, 0.2, 1)`}),this.animationGeneration===e&&(this.childrenContainer.hidden=!0,this.dispatchEvent(new Zi))}isNestedItem(){if(this._parentTreeContext!==null)return!0;let e=this.parentElement;return!!e&&j.isTreeItem(e)}updateIndentation(){let e=Math.max(this._treeItemContext?.depth||0,this.getDepth());this.setStyleProperty(`--indent`,`calc(${e} * var(--indent-size, 2em))`)}getDepth(){let e=0,t=this.parentElement;for(;t;)j.isTreeItem(t)&&e++,t=t.parentElement;return e}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(e){e.has(`selected`)&&!e.has(`indeterminate`)&&(this.indeterminate=!1),super.willUpdate(e)}async animateExpand(e){this.dispatchEvent(new Yi),this.childrenContainer.hidden=!1;let t=On(getComputedStyle(this.childrenContainer).getPropertyValue(`--show-duration`));await En(this.childrenContainer,[{height:`0`,opacity:`0`,overflow:`hidden`},{height:`${this.childrenContainer.scrollHeight}px`,opacity:`1`,overflow:`hidden`}],{duration:t,easing:`cubic-bezier(0.4, 0.0, 0.2, 1)`}),this.animationGeneration===e&&(this.childrenContainer.style.height=`auto`,this.dispatchEvent(new Qi))}handleLoadingChange(){this.setAttribute(`aria-busy`,this.loading?`true`:`false`),this.loading||this.animateExpand(this.animationGeneration)}handleDisabledChange(){this.customStates.set(`disabled`,this.disabled),this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`)}handleExpandedState(){this.customStates.set(`expanded`,this.expanded)}handleIndeterminateStateChange(){this.customStates.set(`indeterminate`,this.indeterminate)}handleSelectedChange(){this.customStates.set(`selected`,this.selected),this.setAttribute(`aria-selected`,this.selected?`true`:`false`)}handleExpandedChange(){this.isLeaf?this.removeAttribute(`aria-expanded`):this.setAttribute(`aria-expanded`,this.expanded?`true`:`false`)}handleExpandAnimation(){this.animationGeneration++;let e=this.animationGeneration;this.expanded?this.lazy?(this.loading=!0,this.dispatchEvent(new Ji)):this.animateExpand(e):this.animateCollapse(e)}handleLazyChange(){this.dispatchEvent(new qi)}getChildrenItems({includeDisabled:e=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(t=>j.isTreeItem(t)&&(e||!t.disabled)):[]}render(){let e=this.localize.dir()===`rtl`,t=!this.loading&&(!this.isLeaf||this.lazy);return we`
      <div
        part="base tree-item"
        class="${Mn({"tree-item":!0,"tree-item-expanded":this.expanded,"tree-item-selected":this.selected,"tree-item-leaf":this.isLeaf,"tree-item-loading":this.loading,"tree-item-has-expand-button":t})}"
      >
        <div class="item" part="item">
          <div class="indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${Mn({"expand-button":!0,"expand-button-visible":t})}
            aria-hidden="true"
          >
            <slot class="expand-icon-slot" name="expand-icon">
              ${la(this.loading,()=>we` <wa-spinner part="spinner" exportparts="base:spinner__base"></wa-spinner> `,()=>we`
                  <wa-icon name=${e?`chevron-left`:`chevron-right`} library="system" variant="solid"></wa-icon>
                `)}
            </slot>
            <slot class="expand-icon-slot" name="collapse-icon">
              <wa-icon name=${e?`chevron-left`:`chevron-right`} library="system" variant="solid"></wa-icon>
            </slot>
          </div>

          ${la(this.selectable,()=>we`
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
                ?checked="${ca(this.selected)}"
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
    `}};j.css=$i,D([tt()],j.prototype,`indeterminate`,2),D([tt()],j.prototype,`isLeaf`,2),D([tt()],j.prototype,`loading`,2),D([tt()],j.prototype,`selectable`,2),D([k({type:Boolean,reflect:!0})],j.prototype,`expanded`,2),D([k({type:Boolean,reflect:!0})],j.prototype,`selected`,2),D([k({type:Boolean,reflect:!0})],j.prototype,`disabled`,2),D([k({type:Boolean,reflect:!0})],j.prototype,`lazy`,2),D([oa({context:ua})],j.prototype,`_treeItemContext`,2),D([sa({context:ua,subscribe:!1})],j.prototype,`_parentTreeContext`,2),D([rt(`slot:not([name])`)],j.prototype,`defaultSlot`,2),D([rt(`slot[name=children]`)],j.prototype,`childrenSlot`,2),D([rt(`.item`)],j.prototype,`itemElement`,2),D([rt(`.children`)],j.prototype,`childrenContainer`,2),D([rt(`.expand-button slot`)],j.prototype,`expandButtonSlot`,2),D([k({reflect:!0,type:Number,attribute:`tabindex`})],j.prototype,`tabIndex`,2),D([k({reflect:!0})],j.prototype,`role`,2),D([E(`loading`,{waitUntilFirstUpdate:!0})],j.prototype,`handleLoadingChange`,1),D([E(`disabled`)],j.prototype,`handleDisabledChange`,1),D([E(`expanded`)],j.prototype,`handleExpandedState`,1),D([E(`indeterminate`)],j.prototype,`handleIndeterminateStateChange`,1),D([E(`selected`)],j.prototype,`handleSelectedChange`,1),D([E(`expanded`,{waitUntilFirstUpdate:!0})],j.prototype,`handleExpandedChange`,1),D([E(`expanded`,{waitUntilFirstUpdate:!0})],j.prototype,`handleExpandAnimation`,1),D([E(`lazy`,{waitUntilFirstUpdate:!0})],j.prototype,`handleLazyChange`,1),j=D([$e(`wa-tree-item`)],j),j.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var da=u`
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
`,fa=class extends yn{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(...arguments),this.hasSlotController=new Cn(this,`hint`),this.title=``,this._value=this.getAttribute(`value`)??null,this.size=`m`,this.disabled=!1,this.indeterminate=!1,this._checked=null,this.defaultChecked=this.hasAttribute(`checked`),this.required=!1,this.hint=``}static get validators(){let e=[hn({validationProperty:`checked`,validationElement:Object.assign(document.createElement(`input`),{type:`checkbox`,required:!0})})];return[...super.validators,...e]}get value(){return this._value??`on`}set value(e){this._value=e}handleSizeChange(){Sn(this.localName,this.size)}get checked(){return this.valueHasChanged?!!this._checked:this._checked??this.defaultChecked}set checked(e){this._checked=!!e,this.valueHasChanged=!0}handleClick(){this.hasInteracted=!0,this.checked=!this.checked,this.indeterminate=!1,this.updateComplete.then(()=>{this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.handleDefaultCheckedChange()}):this.handleDefaultCheckedChange()}handleDefaultCheckedChange(){this.handleValueOrCheckedChange()}handleValueOrCheckedChange(){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.handleValueOrCheckedChange()}):(this.setValue(this.checked?this.value:null,this._value),this.updateValidity())}handleStateChange(){this.hasUpdated&&(this.input.checked=this.checked,this.input.indeterminate=this.indeterminate),this.customStates.set(`checked`,this.checked),this.customStates.set(`indeterminate`,this.indeterminate),this.updateValidity()}handleDisabledChange(){this.customStates.set(`disabled`,this.disabled)}willUpdate(e){super.willUpdate(e),(e.has(`value`)||e.has(`checked`)||e.has(`defaultChecked`)||e.has(`disabled`))&&this.handleValueOrCheckedChange()}formResetCallback(){this._checked=null,super.formResetCallback(),this.handleValueOrCheckedChange()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){let e=this.hasSlotController.test(`hint`),t=this.hint?!0:!!e,n=!this.checked&&this.indeterminate,r=n?`indeterminate`:`check`,i=n?`indeterminate`:`checked`,a=this.didSSR&&!this.hasUpdated?this.checked:this.defaultChecked,o=this.didSSR&&!this.hasUpdated?null:ca(this.checked);return we`
      <label part="base checkbox">
        <span part="control">
          <input
            class="input"
            type="checkbox"
            title=${this.title}
            name=${Li(this.name)}
            value=${Li(this.value)}
            .indeterminate=${ca(this.indeterminate)}
            .checked=${Li(o)}
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
        class="${Mn({"has-slotted":t})}"
      >
        ${this.hint}
      </slot>
    `}};fa.css=[gn,wn,da],fa.shadowRootOptions={...yn.shadowRootOptions,delegatesFocus:!0},D([rt(`input[type="checkbox"]`)],fa.prototype,`input`,2),D([k()],fa.prototype,`title`,2),D([k({reflect:!0})],fa.prototype,`value`,1),D([k({reflect:!0})],fa.prototype,`size`,2),D([E(`size`)],fa.prototype,`handleSizeChange`,1),D([k({type:Boolean})],fa.prototype,`disabled`,2),D([k({type:Boolean,reflect:!0})],fa.prototype,`indeterminate`,2),D([k({type:Boolean,attribute:!1})],fa.prototype,`checked`,1),D([k({type:Boolean,reflect:!0,attribute:`checked`})],fa.prototype,`defaultChecked`,2),D([k({type:Boolean,reflect:!0})],fa.prototype,`required`,2),D([k()],fa.prototype,`hint`,2),D([E([`checked`,`defaultChecked`])],fa.prototype,`handleDefaultCheckedChange`,1),D([E([`checked`,`indeterminate`])],fa.prototype,`handleStateChange`,1),D([E(`disabled`)],fa.prototype,`handleDisabledChange`,1),fa=D([$e(`wa-checkbox`)],fa),fa.disableWarning?.(`change-in-update`);var pa=/* @__PURE__ */ t({default:()=>j,treeItemContext:()=>ua}),ma=class extends Event{constructor(e){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-selection-change`,{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}},ha=u`
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
`
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function ga(e,t,n){return(e=>Object.is(e,-0)?0:e)(e<t?t:e>n?n:e)}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function _a(e,t=!1){function n(e){let t=e.getChildrenItems({includeDisabled:!1});if(t.length){let n=t.every(e=>e.selected),r=t.every(e=>!e.selected&&!e.indeterminate);e.selected=n,e.indeterminate=!n&&!r}}function r(e){let t=e.parentElement;j.isTreeItem(t)&&(n(t),r(t))}function i(e){for(let n of e.getChildrenItems())n.selected=t?e.selected||n.selected:!n.disabled&&e.selected,i(n);t&&n(e)}i(e),r(e)}var va=class extends lt{constructor(){super(),this.selection=`single`,this.clickTarget=null,this.localize=new Qt(this),this.tabIndex=0,this.role=`tree`,this.initTreeItem=e=>{e.updateComplete.then(()=>{e.selectable=this.selection===`multiple`||this.selection===`leaf-multiple`&&e.isLeaf,[`expand`,`collapse`].filter(e=>!!this.querySelector(`[slot="${e}-icon"]`)).forEach(t=>{let n=e.querySelector(`[slot="${t}-icon"]`),r=this.getExpandButtonIcon(t);r&&(n===null?e.append(r):n.hasAttribute(`data-default`)&&n.replaceWith(r))})})},this.handleTreeChanged=e=>{for(let t of e){let e=[...t.addedNodes].filter(j.isTreeItem),n=[...t.removedNodes].filter(j.isTreeItem);e.forEach(this.initTreeItem),this.lastFocusedItem&&n.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=e=>{let t=e.relatedTarget;(!t||!this.contains(t))&&(this.tabIndex=0)},this.handleFocusIn=e=>{let t=e.target;e.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),j.isTreeItem(t)&&!t.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=t,this.tabIndex=-1,t.tabIndex=0)},`addEventListener`in this&&(this.addEventListener(`focusin`,this.handleFocusIn),this.addEventListener(`focusout`,this.handleFocusOut),this.addEventListener(`wa-lazy-change`,this.handleSlotChange))}async connectedCallback(){super.connectedCallback(),typeof MutationObserver<`u`&&(await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})),this.setAttribute(`tabindex`,`0`),this.setAttribute(`role`,`tree`)}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect()}getExpandButtonIcon(e){let t=(e===`expand`?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(t){let n=t.cloneNode(!0);return[n,...n.querySelectorAll(`[id]`)].forEach(e=>e.removeAttribute(`id`)),n.setAttribute(`data-default`,``),n.slot=`${e}-icon`,n}return null}selectItem(e){let t=[...this.selectedItems];if(this.selection===`multiple`)e.selected=!e.selected,e.lazy&&(e.expanded=!0),_a(e);else if(this.selection===`leaf-multiple`)e.isLeaf?e.selected=!e.selected:e.expanded=!e.expanded;else if(this.selection===`single`||e.isLeaf){let t=this.getAllTreeItems();for(let n of t)n.selected=n===e}else this.selection===`leaf`&&(e.expanded=!e.expanded);let n=this.selectedItems;(t.length!==n.length||n.some(e=>!t.includes(e)))&&Promise.all(n.map(e=>e.updateComplete)).then(()=>{this.dispatchEvent(new ma({selection:n}))})}getAllTreeItems(){return[...this.querySelectorAll(`wa-tree-item`)]}focusItem(e){e?.focus()}handleKeyDown(e){if(![`ArrowDown`,`ArrowUp`,`ArrowRight`,`ArrowLeft`,`Home`,`End`,`Enter`,` `].includes(e.key)||e.composedPath().some(e=>[`input`,`textarea`].includes(e?.tagName?.toLowerCase())))return;let t=this.getFocusableItems(),n=this.matches(`:dir(ltr)`),r=this.localize.dir()===`rtl`;if(t.length>0){let i=t.findIndex(e=>e.matches(`:focus`)),a=t[i];if(!a&&(e.key===`Enter`||e.key===` `))return;e.preventDefault();let o=e=>{let n=t[ga(e,0,t.length-1)];this.focusItem(n)},s=e=>{a.expanded=e};e.key===`ArrowDown`?o(i+1):e.key===`ArrowUp`?o(i-1):n&&e.key===`ArrowRight`||r&&e.key===`ArrowLeft`?!a||a.disabled||a.expanded||a.isLeaf&&!a.lazy?o(i+1):s(!0):n&&e.key===`ArrowLeft`||r&&e.key===`ArrowRight`?!a||a.disabled||a.isLeaf||!a.expanded?o(i-1):s(!1):e.key===`Home`?o(0):e.key===`End`?o(t.length-1):(e.key===`Enter`||e.key===` `)&&a&&!a.disabled&&this.selectItem(a)}}handleClick(e){let t=e.target,n=t.closest(`wa-tree-item`),r=e.composedPath().some(e=>e?.classList?.contains(`expand-button`));n&&!n.disabled&&t===this.clickTarget&&(r?n.expanded=!n.expanded:this.selectItem(n))}handleMouseDown(e){this.clickTarget=e.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){let e=this.selection===`multiple`,t=this.selection===`leaf-multiple`,n=this.getAllTreeItems();this.setAttribute(`aria-multiselectable`,e||t?`true`:`false`);for(let r of n)r.updateComplete.then(()=>{r.selectable=e||t&&r.isLeaf});e&&(await this.updateComplete,[...this.querySelectorAll(`:scope > wa-tree-item`)].forEach(e=>{e.updateComplete.then(()=>{_a(e,!0)})}))}get selectedItems(){return this.getAllTreeItems().filter(e=>e.selected)}getFocusableItems(){let e=this.getAllTreeItems(),t=/* @__PURE__ */ new Set;return e.filter(e=>{if(e.disabled)return!1;let n=e.parentElement?.closest(`[role=treeitem]`);return n&&(!n.expanded||n.loading||t.has(n))&&t.add(e),!t.has(e)})}render(){return we`
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
    `}};va.css=ha,D([rt(`slot:not([name])`)],va.prototype,`defaultSlot`,2),D([rt(`slot[name=expand-icon]`)],va.prototype,`expandedIconSlot`,2),D([rt(`slot[name=collapse-icon]`)],va.prototype,`collapsedIconSlot`,2),D([k()],va.prototype,`selection`,2),D([k({attribute:`tabindex`,reflect:!0,type:Number})],va.prototype,`tabIndex`,2),D([k({reflect:!0})],va.prototype,`role`,2),D([E(`selection`)],va.prototype,`handleSelectionChange`,1),va=D([$e(`wa-tree`)],va);var ya=/* @__PURE__ */ t({default:()=>va}),M
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;Object.getOwnPropertyDescriptors||(()=>{var e;if(typeof Reflect<`u`&&Reflect.ownKeys)e=Reflect.ownKeys;else{var t=Object.getOwnPropertySymbols||(e=>[]);e=(e=>Object.getOwnPropertyNames(e).concat(t(e)))}return(t=>{for(var n=e(t),r={},i=n.length|0,a=0;a!==i;){var o=n[a];Object.defineProperty(r,o,{configurable:!0,enumerable:!0,writable:!0,value:Object.getOwnPropertyDescriptor(t,o)}),a=a+1|0}return r})})();function ba(e){this.c=e}M=ba.prototype,M.toString=(function(){return String.fromCharCode(this.c)});function xa(e,t){this.l=e,this.h=t}M=xa.prototype,M.toString=(function(){return jl(this.l,this.h)});function Sa(e){switch(typeof e){case`string`:return Qv.l();case`number`:return La(e)?e<<24>>24===e?ig.l():e<<16>>16===e?gg.l():Wv.l():Ra(e)?Uv.l():Hv.l();case`boolean`:return Um.l();case`undefined`:return wl.l();default:return e instanceof xa?qv.l():e instanceof ba?Km.l():e&&e.$classData?e.$classData.l():null}}function Ca(e){switch(typeof e){case`string`:return`java.lang.String`;case`number`:return La(e)?e<<24>>24===e?`java.lang.Byte`:e<<16>>16===e?`java.lang.Short`:`java.lang.Integer`:Ra(e)?`java.lang.Float`:`java.lang.Double`;case`boolean`:return`java.lang.Boolean`;case`undefined`:return`java.lang.Void`;default:return e instanceof xa?`java.lang.Long`:e instanceof ba?`java.lang.Character`:e&&e.$classData?e.$classData.N:null.qf()}}function wa(e,t){switch(typeof e){case`string`:return Xv(e,t);case`number`:return Bv(e,t);case`boolean`:return Vm(e,t);case`undefined`:return xl(e,t);default:return e&&e.$classData||e===null?e.p(t):e instanceof xa?Gv(e.l,e.h,t):e instanceof ba?Gm(e.c,t):Ga.prototype.p.call(e,t)}}function Ta(e){switch(typeof e){case`string`:return Yv(e);case`number`:return Vv(e);case`boolean`:return Hm(e);case`undefined`:return Sl(e);default:return e&&e.$classData||e===null?e.v():e instanceof xa?Kv(e.l,e.h):e instanceof ba?Wm(e.c):Ga.prototype.v.call(e)}}function Ea(e){return e===void 0?`undefined`:e.toString()}function Da(e){if(e===0)throw new rg(`/ by zero`);return e}function Oa(e){return e>2147483647?2147483647:e<-2147483648?-2147483648:e|0}function ka(e){return String.fromCharCode(e)}var Aa=/* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(8));function ja(e,t,n,r,i){if(e!==n||r-t>>>0>i>>>0)for(var a=0;a<i;a=a+1|0)n[r+a|0]=e[t+a|0];else for(var a=i-1|0;a>=0;a=a-1|0)n[r+a|0]=e[t+a|0]}var Ma=0,Na=/* @__PURE__ */ new WeakMap;function Pa(e){switch(typeof e){case`string`:return Yv(e);case`number`:return Vv(e);case`bigint`:var t=0;for(e<BigInt(0)&&(e=~e);e!==BigInt(0);)t^=Number(BigInt.asIntN(32,e)),e>>=BigInt(32);return t;case`boolean`:return e?1231:1237;case`undefined`:return 0;case`symbol`:var n=e.description;return n===void 0?0:Yv(n);default:if(e===null)return 0;var r=Na.get(e);return r===void 0&&(r=Ma+1|0,Ma=r,Na.set(e,r)),r}}function Fa(e){return typeof e==`number`&&e<<24>>24===e&&1/e!=-1/0}function Ia(e){return typeof e==`number`&&e<<16>>16===e&&1/e!=-1/0}function La(e){return typeof e==`number`&&(e|0)===e&&1/e!=-1/0}function Ra(e){return typeof e==`number`&&(e!==e||Math.fround(e)===e)}function za(e){return new ba(e)}za(0);function Ba(e,t){return new xa(e,t)}var Va=Ba(0,0);function Ha(e){return e===null?0:e.c}function Ua(e){return e===null?Va:e}function Wa(e){return e}function Ga(){}M=Ga.prototype,M.constructor=Ga;function N(){}N.prototype=M,M.v=(function(){return Pa(this)}),M.p=(function(e){return this===e}),M.x=(function(){var e=this.v();return Ca(this)+`@`+(e>>>0).toString(16)}),M.toString=(function(){return this.x()});function P(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}M=P.prototype=new N,M.constructor=P,M.u=(function(e,t,n,r){ja(this.a,e,t.a,n,r)}),M.f=(function(){return new P(this.a.slice())});function Ka(){}Ka.prototype=M;function qa(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=!1}else this.a=e}M=qa.prototype=new N,M.constructor=qa,M.u=(function(e,t,n,r){ja(this.a,e,t.a,n,r)}),M.f=(function(){return new qa(this.a.slice())});function Ja(e){this.a=typeof e==`number`?new Uint16Array(e):e}M=Ja.prototype=new N,M.constructor=Ja,M.u=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),M.f=(function(){return new Ja(this.a.slice())});function Ya(e){this.a=typeof e==`number`?new Int8Array(e):e}M=Ya.prototype=new N,M.constructor=Ya,M.u=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),M.f=(function(){return new Ya(this.a.slice())});function Xa(e){this.a=typeof e==`number`?new Int16Array(e):e}M=Xa.prototype=new N,M.constructor=Xa,M.u=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),M.f=(function(){return new Xa(this.a.slice())});function Za(e){this.a=typeof e==`number`?new Int32Array(e):e}M=Za.prototype=new N,M.constructor=Za,M.u=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),M.f=(function(){return new Za(this.a.slice())});function Qa(e){typeof e==`number`?(e<<=1,this.a=new Int32Array(e)):this.a=e}M=Qa.prototype=new N,M.constructor=Qa,M.u=(function(e,t,n,r){t.a.set(this.a.subarray(e<<1,(e+r|0)<<1),n<<1)}),M.f=(function(){return new Qa(this.a.slice())});function $a(e){this.a=typeof e==`number`?new Float32Array(e):e}M=$a.prototype=new N,M.constructor=$a,M.u=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),M.f=(function(){return new $a(this.a.slice())});function eo(e){this.a=typeof e==`number`?new Float64Array(e):e}M=eo.prototype=new N,M.constructor=eo,M.u=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),M.f=(function(){return new eo(this.a.slice())});function F(){this.C=void 0,this.n=null,this.O=null,this.B=null,this.D=0,this.z=null,this.E=``,this.L=void 0,this.A=void 0,this.F=void 0,this.w=void 0,this.J=!1,this.N=``,this.X=!1,this.Y=!1,this.Z=!1,this.I=void 0}M=F.prototype,M.p=(function(e,t,n,r,i){this.n={},this.z=e,this.E=t;var a=this;return this.F=(e=>e===a),this.N=n,this.X=!0,this.I=(e=>!1),r!==void 0&&(this.A=new F().y(this,r,i,t===`J`)),this}),M.i=(function(e,t,n,r){var i=Object.getOwnPropertyNames(n)[0];return this.n=n,this.E=`L`+t+`;`,this.F=(e=>!!e.n[i]),this.J=e===2,this.N=t,this.Y=e===1,this.I=r||(e=>!!(e&&e.$classData&&e.$classData.n[i])),typeof e!=`number`&&(e.prototype.$classData=this),this}),M.y=(function(e,t,n,r,i){t.prototype.$classData=this;var a=`[`+e.E;this.C=t,this.n={A:1,a:1},this.O=e,this.B=e,this.D=1,this.E=a,this.N=a,this.Z=!0;var o=this;return this.F=i||(e=>o===e),this.w=r?(e=>{for(var n=e.length|0,r=new t(n),i=r.a,a=0;a<n;a=a+1|0){var o=e[a];i[a<<1]=o.l,i[(a<<1)+1|0]=o.h}return r}):n?(e=>new t(new n(e))):(e=>new t(e)),this.I=(e=>e instanceof t),this}),M.a=(function(e){function t(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}var n=t.prototype=new Ka;n.constructor=t,n.u=(function(e,t,n,r){ja(this.a,e,t.a,n,r)}),n.f=(function(){return new t(this.a.slice())}),n.$classData=this;var r=e.B||e,i=e.D+1,a=`[`+e.E;this.C=t,this.n={A:1,a:1},this.O=e,this.B=r,this.D=i,this.E=a,this.N=a,this.Z=!0;var o=(e=>{var t=e.D;return t===i?r.F(e.B):t>i&&r===I});this.F=o,this.w=(e=>new t(e));var s=this;return this.I=(e=>{var t=e&&e.$classData;return!!t&&(t===s||o(t))}),this}),M.r=(function(){return this.A||=new F().a(this),this.A}),M.l=(function(){return this.L||=new Ep(this),this.L}),M.R=(function(e){return this===e||this.F(e)}),M.S=(function(){return this.P?this.P.l():null}),M.Q=(function(){return this.O?this.O.l():null}),M.U=(function(e){if(this===to)throw og(new sg);return new(this.r()).C(e)});var I=new F;I.n={},I.E=`Ljava.lang.Object;`,I.F=(e=>!e.X),I.N=`java.lang.Object`,I.I=(e=>e!==null),I.A=new F().y(I,P,void 0,!1,(e=>{var t=e.D;return t===1?!e.B.X:t>1})),Ga.prototype.$classData=I;var to=new F().p(void 0,`V`,`void`,void 0,void 0),no=new F().p(!1,`Z`,`boolean`,qa,void 0),ro=new F().p(0,`C`,`char`,Ja,Uint16Array),io=new F().p(0,`B`,`byte`,Ya,Int8Array),ao=new F().p(0,`S`,`short`,Xa,Int16Array),oo=new F().p(0,`I`,`int`,Za,Int32Array),so=new F().p(Va,`J`,`long`,Qa,Int32Array),co=new F().p(0,`F`,`float`,$a,Float32Array),lo=new F().p(0,`D`,`double`,eo,Float64Array);new Int8Array(new Int32Array([1]).buffer)[0];function uo(e,t,n){for(var r=new Int32Array(e),i=t.length|0,a=0,o=0,s=0,c=0;o!==i;){var l=t.charCodeAt(o);l<80?c=(c|l-48)<<5:(c|=l-93,a=(a&n)+c|0,r[s]=a,s=s+1|0,c=0),o=o+1|0}return r}function fo(e,t){return new Za(uo(e,t,-1))}var po=new F().i(1,`com.raquo.airstream.core.InternalObserver`,{aX:1});function mo(e){return Sa(e).ib()+`@`+e.v()}function ho(e){var t=e.fp();return t===void 0?e.fh():t}function go(){_o=this,vo().iD(new Z((e=>void 0)),eu().eG,!0)}M=go.prototype=new N,M.constructor=go,M.iD=(function(e,t,n){return new Om(e,n,t,this)}),M.ow=(function(e,t){return new km(e,t,this)}),new F().i(go,`com.raquo.airstream.core.Observer$`,{co:1});var _o;function vo(){return _o||=new go,_o}function yo(){}M=yo.prototype=new N,M.constructor=yo,M.mz=(function(e,t){var n=e.indexOf(t)|0,r=n!==-1;return r&&e.splice(n,1),r}),new F().i(yo,`com.raquo.airstream.core.ObserverList$`,{cr:1});var bo;function xo(){return bo||=new yo,bo}function So(){this.dY=0,this.dY=0}M=So.prototype=new N,M.constructor=So,M.mq=(function(){return this.dY=this.dY===2147483647?1:1+this.dY|0,this.dY}),new F().i(So,`com.raquo.airstream.core.Signal$`,{cs:1});var Co;function wo(){return Co||=new So,Co}function To(e){this.gx=null,this.iL=null,this.gy=0,this.gx=e,this.iL=void 0;var t=Vo().fu();this.gy=t===void 0?1:1+t.gy|0,ko().fy===-1||this.gy>ko().fy?Jf().bT(new jv(this,ko().fy)):No().aY?No().dv.push(this)|0:Vo().hO(this)}M=To.prototype=new N,M.constructor=To;var Eo=new F().i(To,`com.raquo.airstream.core.Transaction`,{ct:1});function Do(){this.fy=0,this.iM=null,Oo=this,this.fy=1e3,this.iM=new Z((e=>{throw Dp(new Op,`Attempted to run Transaction `+e+` after it was already executed.`)}))}M=Do.prototype=new N,M.constructor=Do,M.lN=(function(e){try{e.gx.c(e);var t=e.iL;if(t!==void 0)for(;t.qj();)t.qd().qm(e)}catch(e){var n=e instanceof vf?e:new Qy(e);Jf().bT(n)}}),new F().i(Do,`com.raquo.airstream.core.Transaction$`,{cu:1});var Oo;function ko(){return Oo||=new Do,Oo}function Ao(e){e.fz.length|0?new To(new Z((t=>{for(;(e.fz.length|0)>0;){var n=e.fz.shift();try{n.c(t)}catch(e){var r=e instanceof vf?e:new Qy(e);Jf().bT(r)}}for(;(e.dv.length|0)>0;){var i=e.dv.shift();Vo().hO(i)}}))):(e.dv.length|0)>0&&new To(new Z((t=>{for(;(e.dv.length|0)>0;)Vo().hO(e.dv.shift())})))}function jo(){this.aY=!1,this.fz=null,this.dv=null,Mo=this,this.aY=!1,this.fz=ls().b8(od().b4(new(B.r()).C([]))),this.dv=ls().b8(od().b4(new(Eo.r()).C([])))}M=jo.prototype=new N,M.constructor=jo,new F().i(jo,`com.raquo.airstream.core.Transaction$onStart$`,{cv:1});var Mo;function No(){return Mo||=new jo,Mo}function Po(e,t){return e.dw.get(t)}function Fo(e,t){e.fA.unshift(t)}function Io(e){return e.fA.shift()}function Lo(e,t,n){var r=Po(e,t),i=r===void 0,a=r===void 0?ls().b8(od().b4(new(Eo.r()).C([]))):r;a.push(n),i&&e.dw.set(t,a)}function Ro(e,t){var n=Po(e,t),r=n===void 0||(n.length|0)>0?n:void 0;if(r!==void 0){var i=r.shift();return r.length|0||e.dw.delete(t),i}}function zo(){this.fA=null,this.dw=null,Bo=this,this.fA=ls().b8(od().b4(new(Eo.r()).C([]))),this.dw=/* @__PURE__ */ new Map}M=zo.prototype=new N,M.constructor=zo,M.hO=(function(e){var t=this.fu();t===void 0?(Fo(this,e),ko().lN(e),this.o4(e)):Lo(this,t,e)}),M.o4=(function(e){for(var t=e;;){var n=this.fu(),r=t;if(!(n!==void 0&&H().o(r,n)))throw Dp(new Op,`Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.`);this.pl(t),t.gx=ko().iM;var i=this.fu();if(H().o(i,void 0)){if((this.dw.size|0)>0){var a=new Bf(0);throw this.dw.forEach((e=>((t,n)=>{e.dO=e.dO+(t.length|0)|0}))(a)),Dp(new Op,`Transaction queue error: Stack cleared, but a total of `+a.dO+` children for `+(this.dw.size|0)+` transactions remain. This is a bug in Airstream.`)}return}ko().lN(i),t=i}}),M.pl=(function(e){for(var t=e;;){var n=Ro(this,t);if(H().o(n,void 0)){Io(this);var r=this.fu();if(!H().o(r,void 0))t=r;else return}else{Fo(this,n);return}}}),M.fu=(function(){return this.fA[0]}),new F().i(zo,`com.raquo.airstream.core.Transaction$pendingTransactions$`,{cw:1});var Bo;function Vo(){return Bo||=new zo,Bo}function Ho(e,t){var n=e.cQ.indexOf(t)|0;if(n!==-1)e.cQ.splice(n,1),e.bx.d()||t.mu();else throw Dp(new Op,`Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?`)}function Uo(e){for(;(e.fC.length|0)>0;)Ho(e,e.fC.shift())}function Wo(e){this.iU=null,this.cQ=null,this.dZ=!1,this.fC=null,this.bx=null,this.e0=0,this.iU=e,this.cQ=ls().b8(od().b4(new(Ko.r()).C([]))),this.dZ=!0,this.fC=ls().b8(od().b4(new(Ko.r()).C([]))),this.bx=ty(),this.e0=0}M=Wo.prototype=new N,M.constructor=Wo,M.lv=(function(){if(this.bx.d()){var e=No(),t=(()=>{var e=new Dd(this.iU);this.bx=new ny(e),this.dZ=!1,this.e0=0;for(var t=0,n=this.cQ.length|0;t<n;){var r=t+this.e0|0;this.cQ[r].mt(e),t=1+t|0}Uo(this),this.dZ=!0,this.e0=0});if(No(),e.aY)t();else{e.aY=!0;try{t()}finally{e.aY=!1,Ao(e)}}}else throw Dp(new Op,`Can not activate `+this+`: it is already active`)}),M.nY=(function(){if(this.bx.d())throw Dp(new Op,`Can not deactivate DynamicOwner: it is not active`);this.dZ=!1;for(var e=this.cQ,t=0,n=e.length|0;t<n;)e[t].mu(),t=1+t|0;Uo(this);var r=this.bx;r.d()||r.I().oT(),Uo(this),this.dZ=!0,this.bx=ty()}),M.nu=(function(e,t){t?(this.e0=1+this.e0|0,this.cQ.unshift(e)):this.cQ.push(e);var n=this.bx;if(!n.d()){var r=n.I();e.mt(r)}}),M.pv=(function(e){this.dZ?Ho(this,e):this.fC.push(e)}),new F().i(Wo,`com.raquo.airstream.ownership.DynamicOwner`,{cy:1});function Go(e,t,n){this.fD=null,this.iV=null,this.fE=null,this.fD=e,this.iV=t,this.fE=ty(),e.nu(this,n)}M=Go.prototype=new N,M.constructor=Go,M.gj=(function(){this.fD.pv(this)}),M.mt=(function(e){var t=No(),n=(()=>{this.fE=this.iV.c(e)});if(No(),t.aY)n();else{t.aY=!0;try{n()}finally{t.aY=!1,Ao(t)}}}),M.mu=(function(){var e=this.fE;e.d()||(e.I().gj(),this.fE=ty())});var Ko=new F().i(Go,`com.raquo.airstream.ownership.DynamicSubscription`,{cz:1});function qo(){}M=qo.prototype=new N,M.constructor=qo,M.er=(function(e,t,n){return new Go(e,new Z((e=>new ny(t.c(e)))),n)}),M.mH=(function(e,t,n){return new Go(e,new Z((e=>(t.c(e),ty()))),n)}),M.pQ=(function(e,t,n){return Yo().er(e,new Z((e=>jh(t,n.iA(),e))),!1)}),M.pP=(function(e,t,n){return Yo().er(e,new Z((e=>Xf(t,n,e))),!1)}),new F().i(qo,`com.raquo.airstream.ownership.DynamicSubscription$`,{cA:1});var Jo;function Yo(){return Jo||=new qo,Jo}function Xo(e){e.e1=ls().b8(od().b4(new(ns.r()).C([])))}function Zo(e){for(var t=e.e1,n=0,r=t.length|0;n<r;)es(t[n]),n=1+n|0;e.e1.length=0}function Qo(e,t){var n=e.e1.indexOf(t)|0;if(n!==-1)e.e1.splice(n,1);else throw Dp(new Op,`Can not remove Subscription from Owner: subscription not found.`)}function $o(e,t){e.e1.push(t)}function es(e){if(!e.gF)e.iX.X(),e.gF=!0;else throw Dp(new Op,`Can not kill Subscription: it was already killed.`)}function ts(e,t){this.iY=null,this.iX=null,this.gF=!1,this.iY=e,this.iX=t,this.gF=!1,e.pj(this)}M=ts.prototype=new N,M.constructor=ts,M.gj=(function(){es(this),Qo(this.iY,this)});var ns=new F().i(ts,`com.raquo.airstream.ownership.Subscription`,{cD:1});function rs(e,t){this.iZ=null,this.j0=null,this.cR=null,this.dx=!1,this.iZ=e,this.j0=t,this.cR=ty(),this.dx=!1}M=rs.prototype=new N,M.constructor=rs,M.oP=(function(){var e=this.cR;return!e.d()&&!e.I().fD.bx.d()}),M.pI=(function(e){if(this.dx)throw Dp(new Op,`Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var t=this.cR;if(t.d())var n=!1;else var r=t.I().fD,n=e===null?r===null:e===r;if(!n){this.oP()&&!e.bx.d()&&(this.dx=!0);var i=this.cR;i.d()||(i.I().gj(),this.cR=ty());var a=Yo().er(e,new Z((e=>(this.dx||this.iZ.X(),new ts(e,new Th((()=>{this.dx||this.j0.X()})))))),!1);this.cR=new ny(a),this.dx=!1}}),M.nL=(function(){if(this.dx)throw Dp(new Op,`Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var e=this.cR;e.d()||e.I().gj(),this.cR=ty()}),new F().i(rs,`com.raquo.airstream.ownership.TransferableSubscription`,{cE:1});function is(){}M=is.prototype=new N,M.constructor=is,M.lI=(function(e){return new Nv(new Dv(e))}),new F().i(is,`com.raquo.airstream.state.Var$`,{cI:1});var as;function os(){return as||=new is,as}function ss(){}M=ss.prototype=new N,M.constructor=ss,M.b8=(function(e){return[..._d().pY(e)]}),new F().i(ss,`com.raquo.ew.JsArray$`,{cL:1});var cs;function ls(){return cs||=new ss,cs}function us(){}M=us.prototype=new N,M.constructor=us,M.oI=(function(e,t,n){return(e.indexOf(t,n)|0)!=-1}),M.on=(function(e,t){for(var n=0,r=e.length|0;n<r;)t(e[n]),n=1+n|0}),new F().i(us,`com.raquo.ew.JsArray$RichJsArray$`,{cM:1});var ds;function fs(){return ds||=new us,ds}function ps(){this.jb=null,ms=this,document.createElement(`template`),this.nW(Y().g.pS().pT()),this.jb=/* @__PURE__ */ RegExp(` `,`g`)}M=ps.prototype=new N,M.constructor=ps,M.ny=(function(e,t){try{return e.appendChild(t),!0}catch(e){var n=e instanceof vf?e:new Qy(e);if(n instanceof Qy&&n.aC instanceof DOMException)return!1;throw n instanceof Qy?n.aC:n}}),M.pr=(function(e,t){try{return e.removeChild(t),!0}catch(e){var n=e instanceof vf?e:new Qy(e);if(n instanceof Qy&&n.aC instanceof DOMException)return!1;throw n instanceof Qy?n.aC:n}}),M.py=(function(e,t,n){try{return e.replaceChild(t,n),!0}catch(e){var r=e instanceof vf?e:new Qy(e);if(r instanceof Qy&&r.aC instanceof DOMException)return!1;throw r instanceof Qy?r.aC:r}}),M.oR=(function(e,t){for(var n=e;;){if(n.parentNode!==null)var r=n.parentNode;else var i=n.host,r=i===void 0?null:i;if(r===null)return!1;if(H().o(t,r))return!0;n=r}}),M.nk=(function(e,t){e.addEventListener(t.e4.e2.fM,t.h5,t.h6)}),M.ps=(function(e,t){e.removeEventListener(t.e4.e2.fM,t.h5,t.h6)}),M.nV=(function(e){return document.createElement(e.ip())}),M.oz=(function(e,t){var n=this.oA(e,t);return n===void 0?void 0:t.fN.fg(n)}),M.oA=(function(e,t){var n=e.by.getAttributeNS(null,t.e3);return n===null?void 0:n}),M.iz=(function(e,t,n){this.pH(e,t,t.fN.fi(n))}),M.pH=(function(e,t,n){n===null?this.pt(e,t):e.by.setAttribute(t.e3,n)}),M.pt=(function(e,t){e.by.removeAttribute(t.e3)}),M.nW=(function(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e.jY)}),M.oD=(function(e,t){var n=this.oE(e,t);return n===void 0?void 0:t.h1.fg(n)}),M.oE=(function(e,t){var n=e.iv(),r=t.fP,i=n.getAttributeNS(r.d()?null:r.I(),t.h2);return i===null?void 0:i}),M.pJ=(function(e,t,n){this.pK(e,t,t.h1.fi(n))}),M.pK=(function(e,t,n){if(n===null)this.pw(e,t);else{var r=t.fP;if(r.d())e.iv().setAttribute(t.fO,n);else{var i=r.I();e.iv().setAttributeNS(i,t.fO,n)}}}),M.pw=(function(e,t){var n=e.iv(),r=t.fP;n.removeAttributeNS(r.d()?null:r.I(),t.h2)}),M.nU=(function(e){return document.createComment(e)}),M.nX=(function(e){return document.createTextNode(e)}),M.mg=(function(e){return _u().nO(e.tagName,45)}),M.oF=(function(e){if(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement||e instanceof HTMLButtonElement||e instanceof HTMLOptionElement)return e.value;if(this.mg(e)){var t=e.value;return new Hh(this),t===void 0?void 0:typeof t==`string`?t:void 0}}),M.nZ=(function(e,t){for(var n=t,r=e;;){if(r===null)return n;var i=r.parentNode,a=new CC(this.lT(r),n);r=i,n=a}}),M.lT=(function(e){if(e instanceof HTMLElement){var t=e.id;if(_u(),t!==``)var n=`#`+t;else var r=e.className,n=(_u(),r===``?``:`.`+r.replace(this.jb,`.`));return e.tagName.toLowerCase()+n}return e.nodeName}),new F().i(ps,`com.raquo.laminar.DomApi$`,{cN:1});var ms;function hs(){return ms||=new ps,ms}function gs(e,t,n){this.gM=null,this.jc=null,this.gL=null,this.gM=e,this.jc=t,this.gL=n}M=gs.prototype=new N,M.constructor=gs,M.bE=(function(e){this.gM===null?this.gL===null?ru().op(this.jc,e):fs().on(this.gL,ym().ov(e)):this.gM.bE(e)}),new F().i(gs,`com.raquo.laminar.Seq`,{cP:1});function _s(){vs=this,$()}M=_s.prototype=new N,M.constructor=_s,new F().i(_s,`com.raquo.laminar.Seq$`,{cQ:1});var vs;function ys(){return vs||=new _s,vs}function bs(e){e.jg=vo(),Jf(),e.gN=os()}function xs(){}M=xs.prototype=new N,M.constructor=xs,M.nd=(function(e,t){return new rp(new Z((n=>{var r=e.gq();return Yo().pQ(n.bG,r,t)})),lc())}),new F().i(xs,`com.raquo.laminar.api.Implicits$RichSource$`,{cS:1});var Ss;function Cs(){return Ss||=new xs,Ss}function ws(e){e.jf=fc()}function Ts(e){Es(e,new Z((e=>{e.jH.by.focus()})))}function Es(e,t){return new Vd(new Z((e=>{var n=new zf(!e.bG.bx.d()),r=new Z((e=>{n.g4?n.g4=!1:t.c(e)}));Yo().mH(e.bG,new Z((e=>(t=>{r.c(new oc(e,t))}))(e)),!1)})),fc())}function Ds(){this.cc=null,this.jC=null,this.gP=null,Os=this,this.cc=new kd(ks()),new kd(ks()),this.jC=new kd(ks()),this.gP=new Od}M=Ds.prototype=new N,M.constructor=Ds,new F().i(Ds,`com.raquo.laminar.codecs.package$`,{cZ:1});var Os;function ks(){return Os||=new Ds,Os}function As(e){e.jl=js(e,`class`,` `),e.gO=e.jl}function js(e,t,n){var r=Fd(new Id,t,ks().cc);return new Ad(r.e3,new Z((e=>{var t=hs().oz(e,r);return t===void 0?``:t})),new Eh(((e,t)=>{hs().iz(e,r,t)})),n)}function Ms(e){e.mR=Ns(e,`class`,` `)}function Ns(e,t,n){var r=new zd(t,ks().cc,ty());return new Ad(r.fO,new Z((e=>{var t=hs().oD(e,r);return t===void 0?``:t})),new Eh(((e,t)=>{hs().pJ(e,r,t)})),n)}function Ps(){this.jD=null,Fs=this,Y().g.mO(),ls().b8(od().b4(new(Pd.r()).C([Y().g.fr()]))),Y().g.mO(),ls().b8(od().b4(new(Pd.r()).C([Y().g.fr(),Y().g.pd()]))),Y().g.nJ(),ls().b8(od().b4(new(Pd.r()).C([Y().g.fr(),Y().g.pe()]))),this.jD=ls().b8(od().b4(new(Qv.r()).C([`value`,`checked`])))}M=Ps.prototype=new N,M.constructor=Ps,new F().i(Ps,`com.raquo.laminar.inputs.InputController$`,{db:1});var Fs;function Is(){return Fs||=new Ps,Fs}function Ls(){}M=Ls.prototype=new N,M.constructor=Ls,M.nz=(function(e,t){return new Nm(ty(),!1,new Dh(((n,r,i)=>Xf(e,new Z(((e,n)=>(r=>{var i=n.ei;if(i===void 0){var a=new Fm(t.hT(r));this.pU(a,e);var o=a;n.ei=o,o=null}else i.fQ.textContent=t.hT(r)}))(n,new Vf(void 0))),r))),void 0)}),M.pU=(function(e,t){bc().px(t.gV,t.gW,e,void 0),t.gW=e,t.gX&&(t.gX=!1,t.pu(e),t.gU.clear(),t.gT=0)}),new F().i(Ls,`com.raquo.laminar.inserters.ChildTextInserter$`,{dc:1});var Rs;function zs(){return Rs||=new Ls,Rs}function Bs(e,t,n,r,i){this.gV=null,this.gW=null,this.gX=!1,this.gT=0,this.gU=null,this.gV=e,this.gW=t,this.gX=n,this.gT=r,this.gU=i}M=Bs.prototype=new N,M.constructor=Bs,M.pu=(function(e){var t=this.gT,n=0;for(n=t;n>0;){var r=e.b9().nextSibling;if(r===null)n=0;else{var i=this.gU.get(r);i===void 0?n=0:i!==void 0&&(bc().pq(this.gV,i),n=n-1|0)}}}),new F().i(Bs,`com.raquo.laminar.inserters.InsertContext`,{de:1});function Vs(){}M=Vs.prototype=new N,M.constructor=Vs,M.pA=(function(e,t,n){var r=new Pm(``);return bc().ek(e,r,n),this.q2(e,r,t)}),M.q2=(function(e,t,n){return new Bs(e,t,n,0,n?/* @__PURE__ */ new Map:null)}),new F().i(Vs,`com.raquo.laminar.inserters.InsertContext$`,{df:1});var Hs;function Us(){return Hs||=new Vs,Hs}function Ws(e){this.fH=null,this.fH=e}M=Ws.prototype=new N,M.constructor=Ws,M.is=(function(e,t){try{this.fH.cG(e,t)}catch(e){var n=e instanceof vf?e:new Qy(e);Jf().bT(n)}}),M.nN=(function(e){return new Ws(new Eh(((t,n)=>{this.fH.cG(t,n),e.fH.cG(t,n)})))}),M.lE=(function(e){return e===void 0?this:e.nN(this)}),new F().i(Ws,`com.raquo.laminar.inserters.InserterHooks`,{dg:1});function Gs(){}M=Gs.prototype=new N,M.constructor=Gs,M.mr=(function(e,t){return new Uh(e,void 0)}),new F().i(Gs,`com.raquo.laminar.inserters.StaticChildInserter$`,{di:1});var Ks;function qs(){return Ks||=new Gs,Ks}function Js(){}M=Js.prototype=new N,M.constructor=Js,M.ms=(function(e,t){if(e===``)return $();var n=UC(new GC,e.split(t).filter((e=>(_u(),e!==``))));return w_(),$().iu(n)}),new F().i(Js,`com.raquo.laminar.keys.CompositeKey$`,{dl:1});var Ys;function Xs(){return Ys||=new Js,Ys}function Zs(e,t,n,r){this.e2=null,this.fL=!1,this.fK=!1,this.fJ=null,this.e2=e,this.fL=t,this.fK=n,this.fJ=r}M=Zs.prototype=new N,M.constructor=Zs,M.mm=(function(e){var t=new Z((t=>{var n=this.fJ.c(t);return n.d()?ty():new ny(e.c(n.I()))}));return new Zs(this.e2,this.fL,this.fK,t)}),M.p4=(function(){var e=new Z((e=>{var t=this.fJ.c(e);if(t.d())return ty();t.I();var n=hs().oF(e.target);return new ny(n===void 0?``:n)}));return new Zs(this.e2,this.fL,this.fK,e)}),new F().i(Zs,`com.raquo.laminar.keys.EventProcessor`,{dq:1});function Qs(){}M=Qs.prototype=new N,M.constructor=Qs,M.lX=(function(e,t,n){return new Zs(e,t,n,new Z((e=>new ny(e))))}),new F().i(Qs,`com.raquo.laminar.keys.EventProcessor$`,{dr:1});var $s;function ec(){return $s||=new Qs,$s}function tc(){}M=tc.prototype=new N,M.constructor=tc;function nc(){}nc.prototype=M;function rc(){this.mT=null,this.mU=null,this.mV=null,this.mW=null,this.mT=`http://www.w3.org/2000/svg`,this.mU=`http://www.w3.org/1999/xlink`,this.mV=`http://www.w3.org/XML/1998/namespace`,this.mW=`http://www.w3.org/2000/xmlns/`}M=rc.prototype=new N,M.constructor=rc,M.p7=(function(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`xlink`:return`http://www.w3.org/1999/xlink`;case`xml`:return`http://www.w3.org/XML/1998/namespace`;case`xmlns`:return`http://www.w3.org/2000/xmlns/`;default:throw new Sg(e)}}),new F().i(rc,`com.raquo.laminar.keys.SvgAttr$`,{du:1});var ic;function ac(){return ic||=new rc,ic}function oc(e,t){this.jH=null,this.h3=null,this.jH=e,this.h3=t}M=oc.prototype=new N,M.constructor=oc,new F().i(oc,`com.raquo.laminar.lifecycle.MountContext`,{dv:1});function sc(){}M=sc.prototype=new N,M.constructor=sc,new F().i(sc,`com.raquo.laminar.modifiers.Binder$`,{dw:1});var cc;function lc(){return cc||=new sc,cc}var L=new F().i(1,`com.raquo.laminar.modifiers.Modifier`,{P:1});function uc(){this.mX=null,dc=this,this.mX=new Bd}M=uc.prototype=new N,M.constructor=uc,new F().i(uc,`com.raquo.laminar.modifiers.Modifier$`,{dC:1});var dc;function fc(){return dc||=new uc,dc}function pc(){this.h7=null,mc=this,this.h7=new Hd}M=pc.prototype=new N,M.constructor=pc,new F().i(pc,`com.raquo.laminar.modifiers.RenderableNode$`,{dG:1});var mc;function hc(){return mc||=new pc,mc}function gc(){this.m=null,_c=this,this.m=new Kd(new Z((e=>e)),R()),new Kd(new Z((e=>``+(e|0))),R()),new Kd(new Z((e=>``+ +e)),R()),new Kd(new Z((e=>``+!!e)),R()),new Kd(new Z((e=>e.pX())),R())}M=gc.prototype=new N,M.constructor=gc,new F().i(gc,`com.raquo.laminar.modifiers.RenderableText$`,{dL:1});var _c;function R(){return _c||=new gc,_c}function vc(){}M=vc.prototype=new N,M.constructor=vc,M.ek=(function(e,t,n){var r=new ny(e);t.ev(r),n!==void 0&&n.is(e,t);var i=hs().ny(e.b9(),t.b9());return i&&t.eq(r),i}),M.pq=(function(e,t){var n=!1;return H().o(t.b9().parentNode,e.b9())&&(t.ev(ty()),n=hs().pr(e.b9(),t.b9()),t.eq(ty())),n}),M.px=(function(e,t,n,r){var i=!1;if(t!==n&&t.hV().bv(e)){var a=new ny(e);t.ev(ty()),n.ev(a),r!==void 0&&r.is(e,n),i=hs().py(e.b9(),n.b9(),t.b9()),i&&(t.eq(ty()),n.eq(a))}return i}),new F().i(vc,`com.raquo.laminar.nodes.ParentNode$`,{dO:1});var yc;function bc(){return yc||=new vc,yc}function xc(){}M=xc.prototype=new N,M.constructor=xc,M.q1=(function(e,t){return Yo().er(e.bG,new Z((n=>t.c(new oc(e,n)))),!0)}),new F().i(xc,`com.raquo.laminar.nodes.ReactiveElement$`,{dQ:1});var Sc;function Cc(){return Sc||=new xc,Sc}function wc(e){this.jV=null,this.jV=new Ws(new Eh(((t,n)=>{matchResult1:{var r=n.b9();if(r instanceof Element){r.setAttribute(`slot`,e);break matchResult1}if(r instanceof Text){var i=Jf(),a=r.textContent,o=t.b9().tagName;i.bT(Dp(new Op,"Error: You tried to insert a raw text node `"+a+"` into the `"+e+"` slot of <"+o.toLowerCase()+`>.
 - Cause: This is not possible: named slots only accept elements. Your node was inserted into the default slot instead.
 - Suggestion: Wrap your text node into \`span()\``));break matchResult1}}})))}M=wc.prototype=new N,M.constructor=wc,M.lK=(function(e){return e.c5(new Z((e=>e.mQ(this.jV))))}),new F().i(wc,`com.raquo.laminar.nodes.Slot`,{dT:1});function Tc(){}M=Tc.prototype=new N,M.constructor=Tc,new F().i(Tc,`com.raquo.laminar.receivers.ChildTextReceiver$`,{dV:1});var Ec;function Dc(){return Ec||=new Tc,Ec}function Oc(){}M=Oc.prototype=new N,M.constructor=Oc,M.nx=(function(){Ac().oc(),Ac().od(),Ac().oe(),Ac().of(),Ac().og(),Ac().oh(),Ac().oi()}),M.oc=(function(){var e=document.querySelector(`#example1`);Zl().dQ(e).d()||(Y(),new lp(e,yp().i(new Q(W().b(new(B.r()).C([new J((e=>e.ix().mp()))]))),new Q(W().b(new(L.r()).C([q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Parent Node`,R().m),q().i(new Q(W().b(new(B.r()).C([new J((e=>e.pF().E(!0)))]))),new Q(W().b(new(L.r()).C([K(Y().g,`Child Node 1`,R().m)])))),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Child Node 2`,R().m),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Child Node 2 - 1`,R().m)])))),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Child Node 2 - 2`,R().m)]))))]))))]))))]))))))}),M.od=(function(){var e=document.querySelector(`#example2`);Zl().dQ(e).d()||(Y(),new lp(e,yp().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Deciduous`,R().m),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Birch`,R().m)])))),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Maple`,R().m),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Field maple`,R().m)])))),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Red maple`,R().m)])))),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Sugar maple`,R().m)]))))])))),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Oak`,R().m)]))))])))),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Coniferous`,R().m),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Cedar`,R().m)])))),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Pine`,R().m)])))),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Spruce`,R().m)]))))])))),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Non-trees`,R().m),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Bamboo`,R().m)])))),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Cactus`,R().m)])))),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Fern`,R().m)]))))]))))]))))))}),M.oe=(function(){var e=document.querySelector(`#example3`);if(!Zl().dQ(e).d()){Y();var t=Y().g.gN.lI(pp().mG().dz);new lp(e,Y().g.lV().gb(new Q(W().b(new(L.r()).C([Y().g.gO.lt(`space-y-4`),Rm().i(new Q(W().b(new(B.r()).C([new J((e=>e.oU().E(`Selection`))),new J((e=>e.eu().lu(t))),new J((e=>new ap((Y(),ec().lX(e.fr(),!1,!1)).p4().mm(new J((e=>e))),new Z((e=>{t.fF.gm(e)})))))]))),new Q(W().b(new(L.r()).C([wp().i(new Q(W().b(new(B.r()).C([new J((e=>e.eu().E(pp().mG().dz)))]))),new Q(W().b(new(L.r()).C([K(Y().g,`Single`,R().m)])))),wp().i(new Q(W().b(new(B.r()).C([new J((e=>e.eu().E(pp().mp().dz)))]))),new Q(W().b(new(L.r()).C([K(Y().g,`Multiple`,R().m)])))),wp().i(new Q(W().b(new(B.r()).C([new J((e=>e.eu().E(pp().oV().dz)))]))),new Q(W().b(new(L.r()).C([K(Y().g,`Leaf`,R().m)])))),wp().i(new Q(W().b(new(B.r()).C([new J((e=>e.eu().E(pp().ml().dz)))]))),new Q(W().b(new(L.r()).C([K(Y().g,`Multiple leaves`,R().m)]))))])))),yp().i(new Q(W().b(new(B.r()).C([new J((e=>e.ix().lu(t)))]))),new Q(W().b(new(L.r()).C([Vx(Y().g,new J((e=>(Y(),Cs().nd(t,Y().g.jg.iD(new J((e=>(t=>{su(new Ox(e.by.querySelectorAll(`wa-tree-item`)),new J((e=>{e.selected=!1})))}))(e)),eu().eG,!0)))))),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Item 1`,R().m),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Item A`,R().m),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Item Z`,R().m)])))),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Item Y`,R().m)])))),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Item X`,R().m)]))))])))),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Item B`,R().m)])))),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Item C`,R().m)]))))])))),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Item 2`,R().m)])))),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Item 3`,R().m)]))))]))))])))))}}),M.of=(function(){var e=document.querySelector(`#example4`);if(!Zl().dQ(e).d()){Y();var t=Y().g.gN.lI(0);new lp(e,Y().g.lV().gb(new Q(W().b(new(L.r()).C([yp().i(new Q(W().b(new(B.r()).C([new J((e=>e.ix().ml())),new J((e=>new ap((Y(),ec().lX(e.pf(),!1,!1)).mm(new J((e=>e.detail.selection.length|0))),new Z((e=>{t.fF.gm(e)})))))]))),new Q(W().b(new(L.r()).C([q().i(new Q(W().b(new(B.r()).C([new J((e=>e.gg().E(!0)))]))),new Q(W().b(new(L.r()).C([K(Y().g,`Documents`,R().m),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Notes`,R().m)])))),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Report`,R().m)]))))])))),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Readme`,R().m)]))))])))),Y().g.pk().gb(new Q(W().b(new(L.r()).C([K(Y().g,`Selected leaves: `,R().m),(Y(),zs().nz(new Nx(t.gI,new J((e=>``+(e|0))),ty()),R().m))]))))])))))}}),M.og=(function(){var e=document.querySelector(`#example5`);Zl().dQ(e).d()||(Y(),new lp(e,yp().i(new Q(W().b(new(B.r()).C([new J((e=>e.pN().E(`--indent-guide-width: 1px`)))]))),new Q(W().b(new(L.r()).C([q().i(new Q(W().b(new(B.r()).C([new J((e=>e.gg().E(!0)))]))),new Q(W().b(new(L.r()).C([K(Y().g,`Deciduous`,R().m),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Birch`,R().m)])))),q().i(new Q(W().b(new(B.r()).C([new J((e=>e.gg().E(!0)))]))),new Q(W().b(new(L.r()).C([K(Y().g,`Maple`,R().m),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Field maple`,R().m)])))),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Red maple`,R().m)])))),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Sugar maple`,R().m)]))))])))),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Oak`,R().m)]))))])))),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Coniferous`,R().m),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Cedar`,R().m)])))),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Pine`,R().m)])))),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Spruce`,R().m)]))))])))),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Non-trees`,R().m),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Bamboo`,R().m)])))),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Cactus`,R().m)])))),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Fern`,R().m)]))))]))))]))))))}),M.oh=(function(){var e=document.querySelector(`#example6`);Zl().dQ(e).d()||(Y(),new lp(e,yp().i(new Q(W().b(new(B.r()).C([new J((e=>np(Y().g,Pc().oj().lK(new Q(W().b(new(Wh.r()).C([(Y(),qs().mr(gp().i(new Q(W().b(new(B.r()).C([new J((e=>e.c7().E(`square-plus`))),new J((e=>e.cb().E(`solid`)))]))),new Q(W().b(new(L.r()).C([])))),hc().h7))])))),Ll().hn,Gd()))),new J((e=>np(Y().g,Pc().nM().lK(new Q(W().b(new(Wh.r()).C([(Y(),qs().mr(gp().i(new Q(W().b(new(B.r()).C([new J((e=>e.c7().E(`square-minus`))),new J((e=>e.cb().E(`solid`)))]))),new Q(W().b(new(L.r()).C([])))),hc().h7))])))),Ll().hn,Gd())))]))),new Q(W().b(new(L.r()).C([Y().g.gO.lt(`custom-icons`),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Deciduous`,R().m),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Birch`,R().m)])))),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Maple`,R().m),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Field maple`,R().m)])))),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Red maple`,R().m)])))),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Sugar maple`,R().m)]))))])))),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Oak`,R().m)]))))])))),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Coniferous`,R().m),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Cedar`,R().m)])))),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Pine`,R().m)])))),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Spruce`,R().m)]))))])))),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Non-trees`,R().m),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Bamboo`,R().m)])))),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Cactus`,R().m)])))),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([K(Y().g,`Fern`,R().m)]))))]))))]))))))}),M.oi=(function(){var e=document.querySelector(`#example7`);Zl().dQ(e).d()||(Y(),new lp(e,yp().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([q().i(new Q(W().b(new(B.r()).C([new J((e=>e.gg().E(!0)))]))),new Q(W().b(new(L.r()).C([gp().i(new Q(W().b(new(B.r()).C([new J((e=>e.c7().E(`folder`))),new J((e=>e.cb().E(`regular`)))]))),new Q(W().b(new(L.r()).C([])))),K(Y().g,`Documents`,R().m),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([gp().i(new Q(W().b(new(B.r()).C([new J((e=>e.c7().E(`folder`))),new J((e=>e.cb().E(`regular`)))]))),new Q(W().b(new(L.r()).C([])))),K(Y().g,`Photos`,R().m),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([gp().i(new Q(W().b(new(B.r()).C([new J((e=>e.c7().E(`image`))),new J((e=>e.cb().E(`regular`)))]))),new Q(W().b(new(L.r()).C([])))),K(Y().g,`birds.jpg`,R().m)])))),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([gp().i(new Q(W().b(new(B.r()).C([new J((e=>e.c7().E(`image`))),new J((e=>e.cb().E(`regular`)))]))),new Q(W().b(new(L.r()).C([])))),K(Y().g,`kitten.jpg`,R().m)])))),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([gp().i(new Q(W().b(new(B.r()).C([new J((e=>e.c7().E(`image`))),new J((e=>e.cb().E(`regular`)))]))),new Q(W().b(new(L.r()).C([])))),K(Y().g,`puppy.jpg`,R().m)]))))])))),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([gp().i(new Q(W().b(new(B.r()).C([new J((e=>e.c7().E(`folder`))),new J((e=>e.cb().E(`regular`)))]))),new Q(W().b(new(L.r()).C([])))),K(Y().g,`Writing`,R().m),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([gp().i(new Q(W().b(new(B.r()).C([new J((e=>e.c7().E(`file`))),new J((e=>e.cb().E(`regular`)))]))),new Q(W().b(new(L.r()).C([])))),K(Y().g,`draft.txt`,R().m)])))),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([gp().i(new Q(W().b(new(B.r()).C([new J((e=>e.c7().E(`file-pdf`))),new J((e=>e.cb().E(`regular`)))]))),new Q(W().b(new(L.r()).C([])))),K(Y().g,`final.pdf`,R().m)])))),q().i(new Q(W().b(new(B.r()).C([]))),new Q(W().b(new(L.r()).C([gp().i(new Q(W().b(new(B.r()).C([new J((e=>e.c7().E(`file-lines`))),new J((e=>e.cb().E(`regular`)))]))),new Q(W().b(new(L.r()).C([])))),K(Y().g,`sales.xls`,R().m)]))))]))))]))))]))))))}),new F().i(Oc,`examples.tree.Main$package$`,{dX:1});var kc;function Ac(){return kc||=new Oc,kc}function jc(e){try{Ac().nx()}catch(e){throw e}}function Mc(){this.kn=null,this.ko=!1,this.kl=null,this.km=!1}M=Mc.prototype=new N,M.constructor=Mc,M.oj=(function(){return this.ko||=(this.kn=new wc(`expand-icon`),!0),this.kn}),M.nM=(function(){return this.km||=(this.kl=new wc(`collapse-icon`),!0),this.kl}),new F().i(Mc,`io.github.nguyenyou.webawesome.laminar.Tree$slots$`,{e2:1});var Nc;function Pc(){return Nc||=new Mc,Nc}function Fc(e,t){for(var n=sl().c9(`^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$`),r=[],i=0;i<(t.length|0);){var a=t[i];if(a!==``){var o=n.exec(a);if(o!==null){var s=Ic(e,o[1]),c=s[0],l=s[1],u=o[2],d=o[3],f=parseInt(d),p=o[4];r.push(new df(c,l,u,f|0,p===void 0?-1:parseInt(p)|0))}else r.push(new df(`<jscode>`,a,null,-1,-1))|0}i=1+i|0}var m=r.length|0,h=new(ff.r()).C(m);for(i=0;i<m;)h.a[i]=r[i],i=1+i|0;return h}function Ic(e,t){var n=sl().c9(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$`),r=sl().c9(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$`),i=sl().c9(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$`),a=sl().c9(`^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$`),o=sl().c9(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$`),s=n.exec(t),c=s===null?r.exec(t):s;if(c!==null)return[Lc(e,c[1]),Wc(e,c[2])];var l=i.exec(t),u=l===null?a.exec(t):l;if(u!==null)return[Lc(e,u[1]),`<init>`];var d=o.exec(t);return d===null?[`<jscode>`,t]:[Lc(e,d[1]),`<clinit>`]}function Lc(e,t){var n=zc(e);if(bl().hl.call(n,t))var r=zc(e)[t];else var r=tl(e,0,t);return r.split(`_`).join(`.`).split(`＿`).join(`_`)}function Rc(e){if(!((1&e.bH)<<24>>24)){var t={};t.O=`java_lang_Object`,t.T=`java_lang_String`;for(var n=0;n<=22;){if(n>=2){var r=`T`+n;t[r]=`scala_Tuple`+n}var i=`F`+n;t[i]=`scala_Function`+n,n=1+n|0}e.hi=t,e.bH=(1|e.bH)<<24>>24}return e.hi}function zc(e){return(1&e.bH)<<24>>24?e.hi:Rc(e)}function Bc(e){if(!((2&e.bH)<<24>>24)){var t={};t.sjsr_=`scala_scalajs_runtime_`,t.sjs_=`scala_scalajs_`,t.sci_=`scala_collection_immutable_`,t.scm_=`scala_collection_mutable_`,t.scg_=`scala_collection_generic_`,t.sc_=`scala_collection_`,t.sr_=`scala_runtime_`,t.s_=`scala_`,t.jl_=`java_lang_`,t.ju_=`java_util_`,e.hj=t,e.bH=(2|e.bH)<<24>>24}return e.hj}function Vc(e){return(2&e.bH)<<24>>24?e.hj:Bc(e)}function Hc(e){return(4&e.bH)<<24>>24||(e.hh=Object.keys(Vc(e)),e.bH=(4|e.bH)<<24>>24),e.hh}function Uc(e){return(4&e.bH)<<24>>24?e.hh:Hc(e)}function Wc(e,t){if(t.startsWith(`init___`))return`<init>`;var n=t.indexOf(`__`)|0;return n<0?t:t.substring(0,n)}function Gc(e,t){return t?t.arguments&&t.stack?Kc(e,t):t.stack&&t.sourceURL?Yc(e,t):t.stack&&t.number?Jc(e,t):t.stack&&t.fileName?qc(e,t):t.message&&t[`opera#sourceloc`]?t.stacktrace?t.message.indexOf(`
`)>-1&&t.message.split(`
`).length>t.stacktrace.split(`
`).length?Xc(e,t):Zc(e,t):Xc(e,t):t.message&&t.stack&&t.stacktrace?t.stacktrace.indexOf(`called from line`)<0?Qc(e,t):$c(e,t):t.stack&&!t.fileName?Kc(e,t):el(e,t):[]}function Kc(e,t){return(t.stack+`
`).replace(sl().c9(`^[\\s\\S]+?\\s+at\\s+`),` at `).replace(sl().bw(`^\\s+(at eval )?at\\s+`,`gm`),``).replace(sl().bw(`^([^\\(]+?)([\\n])`,`gm`),`{anonymous}() ($1)$2`).replace(sl().bw(`^Object.<anonymous>\\s*\\(([^\\)]+)\\)`,`gm`),`{anonymous}() ($1)`).replace(sl().bw(`^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(0,-1)}function qc(e,t){return t.stack.replace(sl().bw(`(?:\\n@:0)?\\s+$`,`m`),``).replace(sl().bw(`^(?:\\((\\S*)\\))?@`,`gm`),`{anonymous}($1)@`).split(`
`)}function Jc(e,t){return t.stack.replace(sl().bw(`^\\s*at\\s+(.*)$`,`gm`),`$1`).replace(sl().bw(`^Anonymous function\\s+`,`gm`),`{anonymous}() `).replace(sl().bw(`^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(1)}function Yc(e,t){return t.stack.replace(sl().bw(`\\[native code\\]\\n`,`m`),``).replace(sl().bw(`^(?=\\w+Error\\:).*$\\n`,`m`),``).replace(sl().bw(`^@`,`gm`),`{anonymous}()@`).split(`
`)}function Xc(e,t){for(var n=sl().bw(`Line (\\d+).*script (?:in )?(\\S+)`,`i`),r=t.message.split(`
`),i=[],a=2,o=r.length|0;a<o;){var s=n.exec(r[a]);s!==null&&i.push(`{anonymous}()@`+s[2]+`:`+s[1])|0,a=2+a|0}return i}function Zc(e,t){for(var n=sl().bw(`Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$`,`i`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[3],l=c===void 0?`{anonymous}`:c;i.push(l+`()@`+s[2]+`:`+s[1])|0}a=2+a|0}return i}function Qc(e,t){for(var n=sl().c9(`^(.*)@(.+):(\\d+)$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[1],l=c===void 0?`global code`:c+`()`;i.push(l+`@`+s[2]+`:`+s[3])|0}a=1+a|0}return i}function $c(e,t){for(var n=sl().c9(`^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[4]+`:`+s[1]+`:`+s[2],l=s[2],u=(l===void 0?`global code`:l).replace(sl().c9(`<anonymous function: (\\S+)>`),`$1`).replace(sl().c9(`<anonymous function>`),`{anonymous}`);i.push(u+`@`+c)|0}a=2+a|0}return i}function el(e,t){return[]}function tl(e,t,n){for(;;)if(t<(Uc(e).length|0)){var r=Uc(e)[t];if(n.startsWith(r))return``+Vc(e)[r]+n.substring(r.length);t=1+t|0}else return n.startsWith(`L`)?n.substring(1):n}function nl(){this.hi=null,this.hj=null,this.hh=null,this.bH=0}M=nl.prototype=new N,M.constructor=nl,M.ok=(function(e){return Fc(this,Gc(this,e))}),new F().i(nl,`java.lang.StackTrace$`,{et:1});var rl;function il(){return rl||=new nl,rl}function al(){}M=al.prototype=new N,M.constructor=al,M.c9=(function(e){return new RegExp(e)}),M.bw=(function(e,t){return new RegExp(e,t)}),new F().i(al,`java.lang.StackTrace$StringRE$`,{eu:1});var ol;function sl(){return ol||=new al,ol}function cl(){this.kw=null,this.mY=null,ll=this,this.kw=new ab(!1),this.mY=new ab(!0)}M=cl.prototype=new N,M.constructor=cl,new F().i(cl,`java.lang.System$Streams$`,{ex:1});var ll;function ul(){return ll||=new cl,ll}function dl(e){var t={};return t[`java.version`]=`1.8`,t[`java.vm.specification.version`]=`1.8`,t[`java.vm.specification.vendor`]=`Oracle Corporation`,t[`java.vm.specification.name`]=`Java Virtual Machine Specification`,t[`java.vm.name`]=`Scala.js`,t[`java.vm.version`]=`1.22.0`,t[`java.specification.version`]=`1.8`,t[`java.specification.vendor`]=`Oracle Corporation`,t[`java.specification.name`]=`Java Platform API Specification`,t[`file.separator`]=`/`,t[`path.separator`]=`:`,t[`line.separator`]=`
`,t}function fl(){this.hk=null,this.kx=null,pl=this,this.hk=dl(this),this.kx=null}M=fl.prototype=new N,M.constructor=fl,M.ia=(function(e,t){if(this.hk!==null){var n=this.hk;return bl().hl.call(n,e)?n[e]:t}return this.kx.ia(e,t)}),new F().i(fl,`java.lang.System$SystemProperties$`,{ey:1});var pl;function ml(){return pl||=new fl,pl}function hl(){this.ky=null,gl=this,this.ky=new gf(void 0)}M=hl.prototype=new N,M.constructor=hl,new F().i(hl,`java.lang.Thread$`,{ez:1});var gl;function _l(){return gl||=new hl,gl}function vl(){this.hl=null,yl=this,this.hl=Object.prototype.hasOwnProperty}M=vl.prototype=new N,M.constructor=vl,new F().i(vl,`java.lang.Utils$Cache$`,{eC:1});var yl;function bl(){return yl||=new vl,yl}function xl(e,t){return e===t}function Sl(e){return 0}function Cl(e,t){return!!(e&&e.$classData&&e.$classData.D===t&&e.$classData.B.n.bq)}var wl=new F().i(0,`java.lang.Void`,{bq:1},(e=>e===void 0));function Tl(e,t){throw ag(new sg,`argument type mismatch`)}function El(){}M=El.prototype=new N,M.constructor=El,M.bF=(function(e){return e instanceof P||e instanceof qa||e instanceof Ja||e instanceof Ya||e instanceof Xa||e instanceof Za?e.a.length:e instanceof Qa?e.a.length>>>1|0:(e instanceof $a||e instanceof eo||Tl(this,e),e.a.length)}),new F().i(El,`java.lang.reflect.Array$`,{eE:1});var Dl;function Ol(){return Dl||=new El,Dl}function kl(){}M=kl.prototype=new N,M.constructor=kl,M.nF=(function(e,t){for(var n=0,r=e.a.length;;)if(n===r)return~n;else{var i=(n+r|0)>>>1|0,a=e.a[i],o=t===a?0:t<a?-1:1;if(o<0){r=i;continue}if(o!==0){n=1+i|0;continue}return i}}),M.m1=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length>>>1|0;if((t.a.length>>>1|0)!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a,o=i<<1,s=a[o],c=a[o+1|0],l=r,u=t.a,d=l<<1,f=u[d],p=u[d+1|0];if((s^f|c^p)!==0)return!1;r=1+r|0}return!0}),M.hZ=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),M.m2=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),M.m0=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),M.lZ=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),M.m3=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),M.P=(function(e,t){var n=e.a.length,r=t<n?t:n,i=Sa(e).a9.Q().a9.U(t);return e.u(0,i,0,r),i}),M.Z=(function(e,t,n){if(t>n)throw ag(new sg,t+` > `+n);var r=e.a.length,i=n-t|0,a=r-t|0,o=i<a?i:a,s=Sa(e).a9.Q().a9.U(i);return e.u(t,s,0,o),s}),new F().i(kl,`java.util.Arrays$`,{eF:1});var Al;function z(){return Al||=new kl,Al}function jl(e,t){return Pl().mJ(e,t)}function Ml(){}M=Ml.prototype=new N,M.constructor=Ml,M.mJ=(function(e,t){if(t===e>>31)return``+e;if(-2097152&(t^t>>10)){var n=t>>31,r=e^n,i=r-n|0,a=4294967296*(((t^n)+(i>>>0<r>>>0|0)|0)>>>0)+(i>>>0),o=+Math.floor(1.0000000000000265e-9*a),s=i-Math.imul(1e9,o|0)|0;s<0&&(--o,s=1e9+s|0);var c=``+s,l=o,u=c.length,d=``+l+`000000000`.substring(u)+c;return t<0?`-`+d:d}return``+(4294967296*t+(e>>>0))}),M.ma=(function(e){if(e<-0x8000000000000000)return Ba(0,-2147483648);if(e>=0x8000000000000000)return Ba(-1,2147483647);var t=e|0,n=23283064365386963e-26*e|0;return Ba(t,e<0&&t!==0?n-1|0:n)}),M.o2=(function(e,t,n,r){var i=t>>31,a=e^i,o=a-i|0,s=(t^i)+(o>>>0<a>>>0|0)|0,c=r>>31,l=n^c,u=l-c|0,d=(r^c)+(u>>>0<l>>>0|0)|0;if(d|-2097152&u){var f=(4294967296*(s>>>0)+(o>>>0))/(4294967296*(d>>>0)+(u>>>0))+.00390625,p=f|0,m=23283064365386963e-26*f|0,h=65535&u,g=u>>>16|0,_=65535&p,v=p>>>16|0,y=Math.imul(h,_),b=Math.imul(g,_),ee=Math.imul(h,v),te=y+((b+ee|0)<<16)|0,x=(y>>>16|0)+ee|0;if(((s-((((Math.imul(u,m)+Math.imul(d,p)|0)+Math.imul(g,v)|0)+(x>>>16|0)|0)+(((65535&x)+b|0)>>>16|0)|0)|0)-((o-te|0)>>>0>o>>>0|0)|0)<0)var S=p-1|0,C=(m-1|0)+(S!==-1|0)|0,ne=S,re=C;else var ne=p,re=m}else var ie=(s>>>0)/(Da(u)>>>0)|0,ne=(4294967296*(s-Math.imul(u,ie)|0)+(o>>>0))/u|0,re=ie;if((t^r)>=0)return Ba(ne,re);var ae=-ne|0;return Ba(ae,(-re|0)-(ae!==0|0)|0)}),M.o3=(function(e,t,n,r){if(!(r|-2097152&n)){var i=(t>>>0)/(Da(n)>>>0)|0;return Ba((4294967296*(t-Math.imul(n,i)|0)+(e>>>0))/n|0,i)}if(r>=0){var a=(4294967296*(t>>>0)+(e>>>0))/(4294967296*(r>>>0)+(n>>>0))+.00390625,o=a|0,s=23283064365386963e-26*a|0,c=65535&n,l=n>>>16|0,u=65535&o,d=o>>>16|0,f=Math.imul(c,u),p=Math.imul(l,u),m=Math.imul(c,d),h=f+((p+m|0)<<16)|0,g=(f>>>16|0)+m|0;if(((t-((((Math.imul(n,s)+Math.imul(r,o)|0)+Math.imul(l,d)|0)+(g>>>16|0)|0)+(((65535&g)+p|0)>>>16|0)|0)|0)-((e-h|0)>>>0>e>>>0|0)|0)<0){var _=o-1|0;return Ba(_,(s-1|0)+(_!==-1|0)|0)}return Ba(o,s)}return(t===r?e>>>0<n>>>0:t>>>0<r>>>0)?Ba(0,0):Ba(1,0)}),M.po=(function(e,t,n,r){var i=t>>31,a=e^i,o=a-i|0,s=(t^i)+(o>>>0<a>>>0|0)|0,c=r>>31,l=n^c,u=l-c|0,d=(r^c)+(u>>>0<l>>>0|0)|0;if(d|-2097152&u){var f=(4294967296*(s>>>0)+(o>>>0))/(4294967296*(d>>>0)+(u>>>0))+.00390625,p=f|0,m=23283064365386963e-26*f|0,h=65535&u,g=u>>>16|0,_=65535&p,v=p>>>16|0,y=Math.imul(h,_),b=Math.imul(g,_),ee=Math.imul(h,v),te=y+((b+ee|0)<<16)|0,x=(y>>>16|0)+ee|0,S=(((Math.imul(u,m)+Math.imul(d,p)|0)+Math.imul(g,v)|0)+(x>>>16|0)|0)+(((65535&x)+b|0)>>>16|0)|0,C=o-te|0,ne=(s-S|0)-(C>>>0>o>>>0|0)|0;if(ne<0)var re=C+u|0,ie=(ne+d|0)+(re>>>0<C>>>0|0)|0,ae=re,oe=ie;else var ae=C,oe=ne}else var se=(4294967296*((s>>>0)%(Da(u)>>>0)|0)+(o>>>0))/u|0,ae=o-Math.imul(u,se)|0,oe=0;if(t<0){var ce=-ae|0;return Ba(ce,(-oe|0)-(ce!==0|0)|0)}return Ba(ae,oe)}),M.pp=(function(e,t,n,r){if(!(r|-2097152&n)){var i=(4294967296*((t>>>0)%(Da(n)>>>0)|0)+(e>>>0))/n|0;return Ba(e-Math.imul(n,i)|0,0)}if(r>=0){var a=(4294967296*(t>>>0)+(e>>>0))/(4294967296*(r>>>0)+(n>>>0))+.00390625,o=a|0,s=23283064365386963e-26*a|0,c=65535&n,l=n>>>16|0,u=65535&o,d=o>>>16|0,f=Math.imul(c,u),p=Math.imul(l,u),m=Math.imul(c,d),h=f+((p+m|0)<<16)|0,g=(f>>>16|0)+m|0,_=(((Math.imul(n,s)+Math.imul(r,o)|0)+Math.imul(l,d)|0)+(g>>>16|0)|0)+(((65535&g)+p|0)>>>16|0)|0,v=e-h|0,y=(t-_|0)-(v>>>0>e>>>0|0)|0;if(y<0){var b=v+n|0;return Ba(b,(y+r|0)+(b>>>0<v>>>0|0)|0)}return Ba(v,y)}if(t===r?e>>>0<n>>>0:t>>>0<r>>>0)return Ba(e,t);var ee=e-n|0;return Ba(ee,(t-r|0)-(ee>>>0>e>>>0|0)|0)}),new F().i(Ml,`org.scalajs.linker.runtime.RuntimeLong$`,{eK:1});var Nl;function Pl(){return Nl||=new Ml,Nl}function Fl(){this.hn=null,Il=this,this.hn=new bg}M=Fl.prototype=new N,M.constructor=Fl,new F().i(Fl,`scala.$less$colon$less$`,{eN:1});var Il;function Ll(){return Il||=new Fl,Il}function Rl(e,t,n,r,i,a){for(var o=n,s=i,c=n+a|0;o<c;)od().gd(r,s,od().dR(t,o)),o=1+o|0,s=1+s|0}function zl(){}M=zl.prototype=new N,M.constructor=zl,M.m5=(function(e,t){var n=e.w();if(n>-1){for(var r=t.bh(n),i=e.k(),a=0;a<n;)od().gd(r,a,i.l()),a=1+a|0;return r}var o=null,s=t.aE(),c=s===ro.l();o=[];for(var l=e.k();l.n();){var u=l.l(),d=c?Ha(u):u===null?Uu().go(s):u;o.push(d)}return Uu().gn(s===to.l()?wl.l():s===ed.l()||s===gm.l()?I.l():s,o)}),M.fe=(function(e,t,n,r,i){var a=Sa(e);a.a9.Z&&Sa(n).a9.R(a.a9)?e.u(t,n,r,i):Rl(this,e,t,n,r,i)}),M.m4=(function(e,t){if(e===t)return!0;if(e.a.length!==t.a.length)return!1;for(var n=e.a.length,r=0;r<n;){if(!H().o(e.a[r],t.a[r]))return!1;r=1+r|0}return!0}),new F().i(zl,`scala.Array$`,{eP:1});var Bl;function Vl(){return Bl||=new zl,Bl}function Hl(){this.ho=null,this.kC=null,Ul=this,this.ho=new Za(0),this.kC=new P(0)}M=Hl.prototype=new N,M.constructor=Hl,new F().i(Hl,`scala.Array$EmptyArrays$`,{eQ:1});var Ul;function Wl(){return Ul||=new Hl,Ul}function Gl(e){return!!(e&&e.$classData&&e.$classData.n.am)}var Kl=new F().i(1,`scala.Function0`,{am:1}),B=new F().i(1,`scala.Function1`,{e:1});function ql(){}M=ql.prototype=new N,M.constructor=ql;function Jl(){}Jl.prototype=M;function Yl(){}M=Yl.prototype=new N,M.constructor=Yl,M.dQ=(function(e){return e===null?ty():new ny(e)}),new F().i(Yl,`scala.Option$`,{eX:1});var Xl;function Zl(){return Xl||=new Yl,Xl}function Ql(){this.kG=null,this.eG=null,$l=this,this.kG=new J((e=>this.kG)),this.eG=new th}M=Ql.prototype=new N,M.constructor=Ql,new F().i(Ql,`scala.PartialFunction$`,{eY:1});var $l;function eu(){return $l||=new Ql,$l}function tu(){this.kJ=null,nu=this,this.kJ=new J((e=>ru().kJ))}M=tu.prototype=new N,M.constructor=tu,M.op=(function(e,t){var n=Ol().bF(e),r=0;if(e instanceof P)for(;r<n;)t.c(e.a[r]),r=1+r|0;else if(e instanceof Za)for(;r<n;)t.c(e.a[r]),r=1+r|0;else if(e instanceof eo)for(;r<n;)t.c(e.a[r]),r=1+r|0;else if(e instanceof Qa)for(;r<n;){var i=e.a,a=r<<1,o=i[a],s=i[a+1|0];t.c(Ba(o,s)),r=1+r|0}else if(e instanceof $a)for(;r<n;)t.c(e.a[r]),r=1+r|0;else if(e instanceof Ja)for(;r<n;)t.c(za(e.a[r])),r=1+r|0;else if(e instanceof Ya)for(;r<n;)t.c(e.a[r]),r=1+r|0;else if(e instanceof Xa)for(;r<n;)t.c(e.a[r]),r=1+r|0;else if(e instanceof qa)for(;r<n;)t.c(e.a[r]),r=1+r|0;else throw new Sg(e)}),new F().i(tu,`scala.collection.ArrayOps$`,{f5:1});var nu;function ru(){return nu||=new tu,nu}function iu(){}M=iu.prototype=new N,M.constructor=iu,M.c3=(function(e){var t=e+~(e<<9)|0;return t^=t>>>14|0,t=t+(t<<4)|0,t^(t>>>10|0)}),new F().i(iu,`scala.collection.Hashing$`,{f9:1});var au;function ou(){return au||=new iu,au}function su(e,t){for(var n=e.k();n.n();)t.c(n.l())}function cu(e,t){for(var n=!0,r=e.k();n&&r.n();)n=!!t.c(r.l());return n}function lu(e){var t=e.w();return t===-1?!e.k().n():t===0}function uu(e,t,n,r){var i=e.k(),a=n;matchResult18:{var o,s=e.w();if(s===-1){var o=Ol().bF(t);break matchResult18}var o=s}for(var c=Ol().bF(t),l=r<o?r:o,u=n<0?c:c-n|0,d=u<l?u:l,f=n+(d<0?0:d)|0;a<f&&i.n();)od().gd(t,a,i.l()),a=1+a|0;return a-n|0}function du(e,t,n,r){return e.w()===0?``+t+r:e.ci(FC(new IC),t,n,r).aN.r}function fu(e,t,n,r,i){var a=t.aN;n.length!==0&&(a.r=``+a.r+n);var o=e.k();if(o.n()){var s=o.l();for(a.r=``+a.r+s;o.n();){r.length!==0&&(a.r=``+a.r+r);var c=o.l();a.r=``+a.r+c}}return i.length!==0&&(a.r=``+a.r+i),t}function pu(e,t){if(e.w()>=0){var n=e.w(),r=t.bh(n);return e.bf(r,0,2147483647),r}var i=null,a=t.aE(),o=a===ro.l();i=[];for(var s=e.k();s.n();){var c=s.l(),l=o?Ha(c):c===null?Uu().go(a):c;i.push(l)}return Uu().gn(a===to.l()?wl.l():a===ed.l()||a===gm.l()?I.l():a,i)}function mu(e,t){this.kP=null,this.eM=null,this.kP=e,this.eM=t}M=mu.prototype=new N,M.constructor=mu,M.oH=(function(){return this.kP.X().k()}),new F().i(mu,`scala.collection.Iterator$ConcatIteratorCell`,{fi:1});function hu(){this.kS=null,gu=this,this.kS=new J((e=>this.kS))}M=hu.prototype=new N,M.constructor=hu,M.nO=(function(e,t){return Zv(e,t)>=0}),new F().i(hu,`scala.collection.StringOps$`,{fq:1});var gu;function _u(){return gu||=new hu,gu}function vu(){}M=vu.prototype=new N,M.constructor=vu,M.id=(function(e,t){return lg(new dg,e+` is out of bounds (min 0, max `+t+`)`)}),new F().i(vu,`scala.collection.generic.CommonErrors$`,{fu:1});var yu;function bu(){return yu||=new vu,yu}function xu(){this.kX=0,Su=this;try{_u();var e=cf().mj(ml().ia(`scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength`,`64`),10,214748364)}catch(t){if(0)var e;else{var e;throw t}}this.kX=e}M=xu.prototype=new N,M.constructor=xu,new F().i(xu,`scala.collection.immutable.IndexedSeqDefaults$`,{fC:1});var Su;function Cu(){return Su||=new xu,Su}function wu(){}M=wu.prototype=new N,M.constructor=wu,new F().i(wu,`scala.collection.immutable.LazyList$EmptyMarker$`,{fF:1});var Tu;function Eu(){return Tu||=new wu,Tu}function Du(){this.hv=null}M=Du.prototype=new N,M.constructor=Du,M.i0=(function(){var e=this.hv;if(e===null)throw new cg(`uninitialized`);return e.X()}),M.ie=(function(e){if(this.hv!==null)throw new cg(`already initialized`);this.hv=e}),new F().i(Du,`scala.collection.immutable.LazyList$LazyBuilder$DeferredState`,{fH:1});function Ou(){}M=Ou.prototype=new N,M.constructor=Ou,new F().i(Ou,`scala.collection.immutable.LazyListBase$TailUpdater`,{fM:1});function ku(){this.l2=null,Au=this,Qb(),this.l2=new em(0,0,new P(0),new Za(0),0,0)}M=ku.prototype=new N,M.constructor=ku,new F().i(ku,`scala.collection.immutable.MapNode$`,{g0:1});var Au;function ju(){return Au||=new ku,Au}function Mu(e,t,n){return Lv(new zv,n+` is out of bounds (min 0, max `+(Ol().bF(t)-1|0))}function Nu(){}M=Nu.prototype=new N,M.constructor=Nu;function Pu(){}Pu.prototype=M,M.my=(function(e,t){if(t<0||t>(e.a.length-1|0))throw Mu(this,e,t);var n=new Za(e.a.length-1|0);e.u(0,n,0,t);var r=1+t|0,i=(e.a.length-t|0)-1|0;return e.u(r,n,t,i),n}),M.oM=(function(e,t,n){if(t<0||t>e.a.length)throw Mu(this,e,t);var r=new Za(1+e.a.length|0);e.u(0,r,0,t),r.a[t]=n;var i=1+t|0,a=e.a.length-t|0;return e.u(t,r,i,a),r});var Fu=new F().i(0,`scala.collection.immutable.Node`,{aN:1});function Iu(){this.eU=0,Lu=this,this.eU=Oa(7)}M=Iu.prototype=new N,M.constructor=Iu,M.dT=(function(e,t){return 31&(e>>>t|0)}),M.dp=(function(e){return 1<<e}),M.oJ=(function(e,t){return cf().dn(e&(t-1|0))}),M.ck=(function(e,t,n){return e===-1?t:this.oJ(e,n)}),new F().i(Iu,`scala.collection.immutable.Node$`,{g3:1});var Lu;function Ru(){return Lu||=new Iu,Lu}function zu(){this.hz=null,this.be=null,this.ch=null,this.ee=null,this.hA=null,this.l6=null,Bu=this,this.hz=new P(0),this.be=new(I.r().r()).C(0),this.ch=new(I.r().r().r()).C(0),this.ee=new(I.r().r().r().r()).C(0),this.hA=new(I.r().r().r().r().r()).C(0),this.l6=new(I.r().r().r().r().r().r()).C(0)}M=zu.prototype=new N,M.constructor=zu,M.el=(function(e,t){var n=e.a.length,r=new P(1+n|0);return e.u(0,r,0,n),r.a[n]=t,r}),M.B=(function(e,t){var n=z().P(e,1+e.a.length|0);return n.a[n.a.length-1|0]=t,n}),M.cj=(function(e,t){var n=Sa(t).a9.Q().a9.U(1+t.a.length|0),r=t.a.length;return t.u(0,n,1,r),n.a[0]=e,n}),M.i2=(function(e,t,n){var r=0,i=t.a.length;if(e===0)for(;r<i;)n.c(t.a[r]),r=1+r|0;else for(var a=e-1|0;r<i;)this.i2(a,t.a[r],n),r=1+r|0}),M.bS=(function(e,t){for(var n=0;n<e.a.length;){var r=e.a[n],i=t.c(r);if(!Object.is(r,i))return this.p1(e,t,n,i);n=1+n|0}return e}),M.p1=(function(e,t,n,r){var i=new P(e.a.length);n>0&&e.u(0,i,0,n),i.a[n]=r;for(var a=1+n|0;a<e.a.length;)i.a[a]=t.c(e.a[a]),a=1+a|0;return i}),M.Y=(function(e,t,n){if(e===1)return this.bS(t,n);for(var r=0;r<t.a.length;){var i=t.a[r],a=this.Y(e-1|0,i,n);if(i!==a)return this.p2(e,t,n,r,a);r=1+r|0}return t}),M.p2=(function(e,t,n,r,i){var a=Sa(t).a9.Q().a9.U(t.a.length);r>0&&t.u(0,a,0,r),a.a[r]=i;for(var o=1+r|0;o<t.a.length;)a.a[o]=this.Y(e-1|0,t.a[o],n),o=1+o|0;return a}),new F().i(zu,`scala.collection.immutable.VectorStatics$`,{gl:1});var Bu;function V(){return Bu||=new zu,Bu}function Vu(){}M=Vu.prototype=new N,M.constructor=Vu,M.go=(function(e){return e===io.l()||e===ao.l()||e===ro.l()||e===oo.l()?0:e===so.l()?Ba(0,0):e===co.l()||e===lo.l()?0:e===no.l()?!1:e===to.l()?void 0:null}),M.gn=(function(e,t){var n=t.length|0;if(e===ro.l()){for(var r=new Ja(n),i=0;i!==n;)r.a[i]=65535&(t[i]|0),i=1+i|0;return r}for(var a=e.a9.U(n),o=0;o!==n;)od().gd(a,o,t[o]),o=1+o|0;return a}),new F().i(Vu,`scala.collection.mutable.ArrayBuilder$`,{gs:1});var Hu;function Uu(){return Hu||=new Vu,Hu}function Wu(e,t,n){this.eh=null,this.cD=0,this.aM=null,this.eh=e,this.cD=t,this.aM=n}M=Wu.prototype=new N,M.constructor=Wu,M.om=(function(e,t){for(var n=this;;)if(t===n.cD&&H().o(e,n.eh))return n;else if(n.aM===null||n.cD>t)return null;else n=n.aM}),M.x=(function(){return`Node(`+this.eh+`, `+this.cD+`) -> `+this.aM});var Gu=new F().i(Wu,`scala.collection.mutable.HashSet$Node`,{gE:1});function Ku(){}M=Ku.prototype=new N,M.constructor=Ku,M.lM=(function(e,t,n){if(t!==e)throw new vg(n)}),new F().i(Ku,`scala.collection.mutable.MutationTracker$`,{gK:1});var qu;function Ju(){return qu||=new Ku,qu}function Yu(){this.n2=null,this.nb=null,this.n3=null,this.n6=null,this.n7=null,this.n5=null,this.n4=null,this.n1=null,this.nc=null,this.n0=null,this.na=null,this.n8=null,this.n9=null,Xu=this,this.n2=Bb(),this.nb=px(),this.n3=Ub(),this.n6=Qb(),this.n7=tx(),this.n5=Yb(),this.n4=Kb(),this.n1=Lb(),this.nc=gx(),this.n0=Pb(),this.na=ux(),this.n8=ix(),this.n9=sx()}M=Yu.prototype=new N,M.constructor=Yu,M.lH=(function(e){return e===io.l()?Bb():e===ao.l()?px():e===ro.l()?Ub():e===oo.l()?Qb():e===so.l()?tx():e===co.l()?Yb():e===lo.l()?Kb():e===no.l()?Lb():e===to.l()?gx():e===I.l()?ux():e===gm.l()?ix():e===ed.l()?sx():new Vy(e)}),new F().i(Yu,`scala.reflect.ClassTag$`,{gS:1});var Xu;function Zu(){return Xu||=new Yu,Xu}function Qu(){}M=Qu.prototype=new N,M.constructor=Qu,M.o=(function(e,t){return e===t||(uf(e)?this.ob(e,t):e instanceof ba?this.o9(e,t):e===null?t===null:wa(e,t))}),M.ob=(function(e,t){if(uf(t))return this.oa(e,t);if(t instanceof ba){if(typeof e==`number`)return+e===t.c;if(e instanceof xa){var n=Ua(e),r=n.l,i=n.h,a=t.c,o=a>>31;return(r^a|i^o)===0}return e===null?t===null:wa(e,t)}return e===null?t===null:wa(e,t)}),M.oa=(function(e,t){if(typeof e==`number`){var n=+e;if(typeof t==`number`)return n===+t;if(t instanceof xa){var r=Ua(t),i=r.l;return n===4294967296*r.h+(i>>>0)}return!1}if(e instanceof xa){var a=Ua(e),o=a.l,s=a.h;if(t instanceof xa){var c=Ua(t),l=c.l,u=c.h;return(o^l|s^u)===0}if(typeof t==`number`){var d=+t;return 4294967296*s+(o>>>0)===d}return!1}return e===null?t===null:wa(e,t)}),M.o9=(function(e,t){if(t instanceof ba)return e.c===t.c;if(uf(t)){if(typeof t==`number`)return+t===e.c;if(t instanceof xa){var n=Ua(t),r=n.l,i=n.h,a=e.c,o=a>>31;return(r^a|i^o)===0}return t===null?e===null:wa(t,e)}return e===null&&t===null}),new F().i(Qu,`scala.runtime.BoxesRunTime$`,{hl:1});var $u;function H(){return $u||=new Qu,$u}var ed=new F().i(0,`scala.runtime.Null$`,{ho:1});function td(){}M=td.prototype=new N,M.constructor=td,M.c8=(function(){throw pg(new hg,`tried to cast away nullability, but value is null`)}),new F().i(td,`scala.runtime.Scala3RunTime$`,{hq:1});var nd;function rd(){return nd||=new td,nd}function id(){}M=id.prototype=new N,M.constructor=id,M.nw=(function(e){return e===null?ed.l():Sa(e)}),M.dR=(function(e,t){if(e instanceof P||e instanceof Za||e instanceof eo)return e.a[t];if(e instanceof Qa){var n=e.a,r=t<<1;return Ba(n[r],n[r+1|0])}if(e instanceof $a)return e.a[t];if(e instanceof Ja)return za(e.a[t]);if(e instanceof Ya||e instanceof Xa||e instanceof qa)return e.a[t];throw e===null?mg(new hg):new Sg(e)}),M.gd=(function(e,t,n){if(e instanceof P)e.a[t]=n;else if(e instanceof Za)e.a[t]=n|0;else if(e instanceof eo)e.a[t]=+n;else if(e instanceof Qa){var r=Ua(n),i=e.a,a=t<<1;i[a]=r.l,i[a+1|0]=r.h}else if(e instanceof $a)e.a[t]=Math.fround(n);else if(e instanceof Ja)e.a[t]=Ha(n);else if(e instanceof Ya)e.a[t]=n|0;else if(e instanceof Xa)e.a[t]=n|0;else if(e instanceof qa)e.a[t]=!!n;else throw e===null?mg(new hg):new Sg(e)}),M.hN=(function(e){return du(e.cl(),e.bk()+`(`,`,`,`)`)}),M.b4=(function(e){if(e===null)return null;if(e.a.length===0){var t=yy();return ux(),gy(t)}return new eC(e)}),new F().i(id,`scala.runtime.ScalaRunTime$`,{hr:1});var ad;function od(){return ad||=new id,ad}function sd(){}M=sd.prototype=new N,M.constructor=sd,M.z=(function(e,t){var n=this.cO(e,t),r=n;return n=r<<13|r>>>19,Math.imul(5,n)-430675100|0}),M.cO=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|r>>>17,n=Math.imul(461845907,n),e^n}),M.ax=(function(e,t){return this.nE(e^t)}),M.nE=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),M.oX=(function(e,t){return t===e>>31?e:e^t}),M.o5=(function(e){var t=Oa(e);if(t===e)return t;var n=Pl().ma(e),r=n.l,i=n.h;if(4294967296*i+(r>>>0)===e)return r^i;var a=e|0;if(a===e&&1/e!=-1/0)return a;if(e!==e)return 2146959360;var o=Aa;return o.setFloat64(0,e,!0),(o.getInt32(0,!0)|0)^(o.getInt32(4,!0)|0)}),M.K=(function(e){if(e===null)return 0;if(typeof e==`number`)return this.o5(+e);if(e instanceof xa){var t=Ua(e);return this.oX(t.l,t.h)}return Ta(e)}),M.oN=(function(e){throw lg(new dg,``+e)}),new F().i(sd,`scala.runtime.Statics$`,{ht:1});var cd;function U(){return cd||=new sd,cd}function ld(){}M=ld.prototype=new N,M.constructor=ld,M.nB=(function(e){return e}),new F().i(ld,`scala.scalajs.js.defined$`,{hz:1});var ud;function dd(){return ud||=new ld,ud}function fd(){}M=fd.prototype=new N,M.constructor=fd,M.pL=(function(e,t){return setTimeout((()=>{t.X()}),e)}),new F().i(fd,`scala.scalajs.js.timers.package$`,{hA:1});var pd;function md(){return pd||=new fd,pd}function hd(){}M=hd.prototype=new N,M.constructor=hd,M.pY=(function(e){if(e instanceof Q)return e.g5;var t=[];return e.bE(new J((e=>t.push(e)|0))),t}),new F().i(hd,`scala.scalajs.runtime.Compat$`,{hJ:1});var gd;function _d(){return gd||=new hd,gd}function vd(){}M=vd.prototype=new N,M.constructor=vd,M.b=(function(e){for(var t=e.a.length,n=[],r=0;r!==t;){var i=r;n.push(e.a[i]),r=1+r|0}return n}),new F().i(vd,`scala.scalajs.runtime.package$`,{hL:1});var yd;function W(){return yd||=new vd,yd}function bd(){}M=bd.prototype=new N,M.constructor=bd,M.pM=(function(e){var t=`Illegal command line`+(e.me()===0?``:e.me()===1?` after first argument`:` after `+e.me()+` arguments`)+`: `+e.qh();xf().pi().oS(t+`
`)}),new F().i(bd,`scala.util.CommandLineParser$`,{hM:1});function xd(e){this.hJ=null,this.hJ=e}M=xd.prototype=new N,M.constructor=xd,M.x=(function(){return`DynamicVariable(`+this.hJ+`)`}),new F().i(xd,`scala.util.DynamicVariable`,{hO:1});function Sd(){}M=Sd.prototype=new N,M.constructor=Sd,M.nC=(function(e){matchAlts1:{matchAlts2:break matchAlts1;return!1}return!0}),M.gs=(function(e){return this.nC(e)?new ny(e):ty()}),new F().i(Sd,`scala.util.control.NonFatal$`,{hQ:1});var Cd;function wd(){return Cd||=new Sd,Cd}function Td(){}M=Td.prototype=new N,M.constructor=Td;function Ed(){}Ed.prototype=M,M.z=(function(e,t){var n=this.cO(e,t),r=n;return n=r<<13|r>>>19,Math.imul(5,n)-430675100|0}),M.cO=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|r>>>17,n=Math.imul(461845907,n),e^n}),M.ax=(function(e,t){return this.fw(e^t)}),M.fw=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),M.mL=(function(e,t,n){var r=n;return r=this.z(r,Yv(`Tuple2`)),r=this.z(r,e),r=this.z(r,t),this.ax(r,2)}),M.fv=(function(e,t,n){var r=e.bi();if(r===0)return n?t:Yv(e.bk());var i=t;n||(i=this.z(i,Yv(e.bk())));for(var a=0;a<r;)i=this.z(i,U().K(e.bj(a))),a=1+a|0;return this.ax(i,r)}),M.hU=(function(e,t,n){var r=e.bi(),i=Yv(n===null?e.bk():n);if(r===0)return i;var a=t;a=this.z(a,i);for(var o=0;o<r;)a=this.z(a,U().K(e.bj(o))),o=1+o|0;return this.ax(a,r)}),M.iB=(function(e,t){for(var n=0,r=0,i=0,a=1,o=e.k();o.n();){var s=o.l(),c=U().K(s);n=n+c|0,r^=c,a=Math.imul(a,1|c),i=1+i|0}var l=t;return l=this.z(l,n),l=this.z(l,r),l=this.cO(l,a),this.ax(l,i)}),M.ph=(function(e,t){var n=e.k(),r=t;if(!n.n())return this.ax(r,0);var i=n.l();if(!n.n())return this.ax(this.z(r,U().K(i)),1);var a=n.l(),o=U().K(i);r=this.z(r,o);for(var s=r,c=U().K(a),l=c-o|0,u=2;n.n();){r=this.z(r,c);var d=U().K(n.l());if(l!==(d-c|0)||l===0){for(r=this.z(r,d),u=1+u|0;n.n();)r=this.z(r,U().K(n.l())),u=1+u|0;return this.ax(r,u)}c=d,u=1+u|0}return this.fw(this.z(this.z(s,l),c))}),M.aD=(function(e,t){var n=t,r=Ol().bF(e);switch(r){case 0:return this.ax(n,0);case 1:return this.ax(this.z(n,U().K(od().dR(e,0))),1);default:var i=U().K(od().dR(e,0));n=this.z(n,i);for(var a=n,o=U().K(od().dR(e,1)),s=o-i|0,c=2;c<r;){n=this.z(n,o);var l=U().K(od().dR(e,c));if(s!==(l-o|0)||s===0){for(n=this.z(n,l),c=1+c|0;c<r;)n=this.z(n,U().K(od().dR(e,c))),c=1+c|0;return this.ax(n,r)}o=l,c=1+c|0}return this.fw(this.z(this.z(a,s),o))}}),M.pm=(function(e,t,n,r){return this.fw(this.z(this.z(this.z(r,e),t),n))}),M.oK=(function(e,t){var n=t,r=e.q();switch(r){case 0:return this.ax(n,0);case 1:return this.ax(this.z(n,U().K(e.s(0))),1);default:var i=U().K(e.s(0));n=this.z(n,i);for(var a=n,o=U().K(e.s(1)),s=o-i|0,c=2;c<r;){n=this.z(n,o);var l=U().K(e.s(c));if(s!==(l-o|0)||s===0){for(n=this.z(n,l),c=1+c|0;c<r;)n=this.z(n,U().K(e.s(c))),c=1+c|0;return this.ax(n,r)}o=l,c=1+c|0}return this.fw(this.z(this.z(a,s),o))}}),M.oW=(function(e,t){for(var n=0,r=t,i=0,a=0,o=0,s=0,c=e;!c.d();){var l=c.y(),u=c.t(),d=U().K(l);switch(r=this.z(r,d),i){case 0:s=d,i=1;break;case 1:a=d-o|0,i=2;break;case 2:(a!==(d-o|0)||a===0)&&(i=3)}o=d,n=1+n|0,c=u}return i===2?this.pm(s,a,o,t):this.ax(r,n)});function Dd(e){this.e1=null,this.iW=null,this.gE=!1,this.iW=e,Xo(this),this.gE=!1}M=Dd.prototype=new N,M.constructor=Dd,M.pj=(function(e){this.gE?(es(e),this.iW.X()):$o(this,e)}),M.oT=(function(){Zo(this),this.gE=!0}),new F().i(Dd,`com.raquo.airstream.ownership.OneTimeOwner`,{cB:1,cC:1});function Od(){}M=Od.prototype=new N,M.constructor=Od,M.o0=(function(e){return e!==null}),M.o7=(function(e){return e?``:null}),M.fg=(function(e){return this.o0(e)}),M.fi=(function(e){return this.o7(!!e)}),new F().i(Od,`com.raquo.laminar.codecs.package$$anon$1`,{d0:1,ar:1});function kd(e){if(e===null)throw mg(new hg)}M=kd.prototype=new N,M.constructor=kd,M.fi=(function(e){return e}),M.fg=(function(e){return e}),new F().i(kd,`com.raquo.laminar.codecs.package$$anon$2`,{d1:1,ar:1});function Ad(e,t,n,r){this.jE=null,this.jG=null,this.jF=null,this.gZ=null,this.jE=t,this.jG=n,this.jF=r,this.gZ=new jd(r)}M=Ad.prototype=new nc,M.constructor=Ad,M.lt=(function(e){return new ip(this,(Y().g.ne(),Xs().ms(e,this.jF)))}),new F().i(Ad,`com.raquo.laminar.keys.CompositeKey`,{dk:1,ac:1});function jd(e){this.h0=null,this.h0=e}M=jd.prototype=new N,M.constructor=jd,M.lU=(function(e){return Xs().ms(e,this.h0)}),M.lY=(function(e){return du(e,``,this.h0,``)}),M.fg=(function(e){return this.lU(e)}),M.fi=(function(e){return this.lY(e)}),new F().i(jd,`com.raquo.laminar.keys.CompositeKey$CompositeCodec`,{dm:1,ar:1});function Md(e){if(e===null)throw mg(new hg)}M=Md.prototype=new N,M.constructor=Md,new F().i(Md,`com.raquo.laminar.keys.CompositeKey$CompositeValueMappers$StringValueMapper$`,{dp:1,dn:1});function Nd(e){this.fM=null,this.fM=e}M=Nd.prototype=new nc,M.constructor=Nd;var Pd=new F().i(Nd,`com.raquo.laminar.keys.EventProp`,{ds:1,ac:1});function Fd(e,t,n){return e.e3=t,e.fN=n,e}function Id(){this.e3=null,this.fN=null}M=Id.prototype=new nc,M.constructor=Id;function Ld(){}Ld.prototype=M,M.E=(function(e){return new sp(this,e,new Dh(((e,t,n)=>{hs().iz(e,t,n)})))}),M.lu=(function(e){return new cp(this,e.gq(),new Dh(((e,t,n)=>{hs().iz(e,this,t)})))}),new F().i(Id,`com.raquo.laminar.keys.HtmlAttr`,{b7:1,ac:1});function Rd(e,t){this.dy=null,this.dy=e}M=Rd.prototype=new nc,M.constructor=Rd,new F().i(Rd,`com.raquo.laminar.keys.HtmlProp`,{b8:1,ac:1});function zd(e,t,n){this.h2=null,this.h1=null,this.fO=null,this.fP=null,this.h2=e,this.h1=t;var r=n.d()?ty():new ny(n.I()+`:`+e);this.fO=r.d()?e:r.I(),this.fP=n.d()?ty():new ny(ac().p7(n.I()))}M=zd.prototype=new nc,M.constructor=zd,new F().i(zd,`com.raquo.laminar.keys.SvgAttr`,{dt:1,ac:1});function Bd(){}M=Bd.prototype=new N,M.constructor=Bd,M.b7=(function(e){}),new F().i(Bd,`com.raquo.laminar.modifiers.Modifier$$anon$1`,{dD:1,P:1});function Vd(e,t){if(this.jP=null,this.jP=e,t===null)throw mg(new hg)}M=Vd.prototype=new N,M.constructor=Vd,M.b7=(function(e){var t=No(),n=(()=>{this.jP.c(e)});if(No(),t.aY)n();else{t.aY=!0;try{n()}finally{t.aY=!1,Ao(t)}}}),new F().i(Vd,`com.raquo.laminar.modifiers.Modifier$$anon$2`,{dE:1,P:1});function Hd(){}M=Hd.prototype=new N,M.constructor=Hd,new F().i(Hd,`com.raquo.laminar.modifiers.RenderableNode$$anon$1`,{dH:1,dF:1});function Ud(){}M=Ud.prototype=new N,M.constructor=Ud,new F().i(Ud,`com.raquo.laminar.modifiers.RenderableSeq$collectionSeqRenderable$`,{dJ:1,dI:1});var Wd;function Gd(){return Wd||=new Ud,Wd}function Kd(e,t){if(this.jQ=null,this.jQ=e,t===null)throw mg(new hg)}M=Kd.prototype=new N,M.constructor=Kd,M.hT=(function(e){return this.jQ.c(e)}),new F().i(Kd,`com.raquo.laminar.modifiers.RenderableText$$anon$1`,{dM:1,dK:1});function qd(e){e.lQ(new Wo(new Th((()=>{throw Dp(new Op,`Attempting to use owner of unmounted element: `+du(hs().nZ(e.b9(),(hs(),$())),``,` > `,``))}))))}function Jd(e,t,n){return e.he=t,e}function Yd(){this.he=null}M=Yd.prototype=new N,M.constructor=Yd;function Xd(){}Xd.prototype=M,M.ip=(function(){return this.he}),M.gb=(function(e){var t=this.nH();return e.bE(new Z((e=>{e.b7(t)}))),t}),M.nH=(function(){return new Iv(this,hs().nV(this))}),new F().i(Yd,`com.raquo.laminar.tags.HtmlTag`,{bc:1,aC:1});function Zd(e,t){this.jY=null,this.jY=e}M=Zd.prototype=new N,M.constructor=Zd,new F().i(Zd,`com.raquo.laminar.tags.SvgTag`,{dW:1,aC:1});function Qd(){}M=Qd.prototype=new N,M.constructor=Qd,M.fi=(function(e){return e}),M.fg=(function(e){return e}),new F().i(Qd,`io.github.nguyenyou.webawesome.laminar.UnionAsStringCodec$$anon$1`,{e5:1,ar:1});function $d(e,t){return e.dE=t,e.f2(),e}function ef(){this.dE=null,this.dB=null,this.dC=!1,this.dD=null,this.dF=!1}M=ef.prototype=new N,M.constructor=ef;function tf(){}tf.prototype=M,M.pN=(function(){return this.dC||=(this.dB=Y().g.pO(),!0),this.dB}),M.pV=(function(){return this.dF||=(this.dD=new up(this.dE,new J((e=>void 0)),void 0),!0),this.dD}),M.i=(function(e,t){var n=this.pV().gb(new Q([]));return e.bE(new J((e=>{e.c(this).b7(n)}))),t.bE(new J((e=>{e.b7(n)}))),n});function nf(){this.hf=null,rf=this,this.hf=fo(67,`1C]4m6m=c4]4]4]4]4]4]4]4]4]3g4]2m9]2m1Jm1m9s4g5mm6]3]4mm12>mEm1m6m1]3]=]DI]1<m24mIs4g2c4w9];]4]<]3m3m=m3mH]8]2m=mBHm3]4mK3{gggg2:g=m@]13]4E]`)}M=nf.prototype=new N,M.constructor=nf,M.pZ=(function(e){if(e>>>0>1114111)throw og(new sg);return String.fromCodePoint(e)}),M.o1=(function(e,t){if(e<256)var n=(e-48|0)>>>0<=9?e-48|0:(e-65|0)>>>0<=25?e-55|0:(e-97|0)>>>0<=25?e-87|0:-1;else if((e-65313|0)>>>0<=25)var n=e-65303|0;else if((e-65345|0)>>>0<=25)var n=e-65335|0;else{var r=z().nF(this.hf,e),i=r<0?-2-r|0:r;if(i<0)var n=-1;else var a=e-this.hf.a[i]|0,n=a>9?-1:a}return n<t?n:-1}),new F().i(nf,`java.lang.Character$`,{ed:1,a:1});var rf;function af(){return rf||=new nf,rf}function of(){}M=of.prototype=new N,M.constructor=of,M.ft=(function(e){throw new Jv(`For input string: "`+e+`"`)}),M.mj=(function(e,t,n){e===null&&cf().ft(e);var r=e.length;r===0&&cf().ft(e);var i=af(),a=e.charCodeAt(0),o=a===45,s=o?-1:0,c=(o||a===43)|0;c>=r&&cf().ft(e);var l=0;for(l=0;c!==r;){var u=i.o1(e.charCodeAt(c),t);(u<0||l>>>0>n>>>0)&&cf().ft(e),l=Math.imul(l,t)+u|0,c=1+c|0}return l>>>0>(2147483647-s|0)>>>0&&cf().ft(e),(l^s)-s|0}),M.dn=(function(e){var t=e-(1431655765&e>>1)|0,n=(858993459&t)+(858993459&t>>2)|0;return Math.imul(16843009,252645135&(n+(n>>4)|0))>>24}),new F().i(of,`java.lang.Integer$`,{ej:1,a:1});var sf;function cf(){return sf||=new of,sf}function lf(){}M=lf.prototype=new N,M.constructor=lf;function uf(e){return e instanceof lf||typeof e==`number`||e instanceof xa}function df(e,t,n,r,i){this.e6=null,this.eE=null,this.e7=null,this.e8=0,this.e5=0,this.e6=e,this.eE=t,this.e7=n,this.e8=r,this.e5=i}M=df.prototype=new N,M.constructor=df,M.p=(function(e){return e instanceof df&&this.e7===e.e7&&this.e8===e.e8&&this.e5===e.e5&&this.e6===e.e6&&this.eE===e.eE}),M.x=(function(){var e=``;return this.e6!==`<jscode>`&&(e=``+e+this.e6+`.`),e=``+e+this.eE,this.e7===null?e+=`(Unknown Source)`:(e=e+`(`+this.e7,this.e8>=0&&(e=e+`:`+this.e8,this.e5>=0&&(e=e+`:`+this.e5)),e+=`)`),e}),M.v=(function(){return Yv(this.e6)^Yv(this.eE)^Yv(this.e7)^this.e8^this.e5});var ff=new F().i(df,`java.lang.StackTraceElement`,{bn:1,a:1});function pf(){}M=pf.prototype=new N,M.constructor=pf,M.p8=(function(e,t,n){for(var r=t+n|0,i=``,a=t;a!==r;)i+=``+ka(e.a[a]),a=1+a|0;return i}),new F().i(pf,`java.lang.String$`,{ev:1,a:1});var mf;function hf(){return mf||=new pf,mf}function gf(e){}M=gf.prototype=new N,M.constructor=gf,new F().i(gf,`java.lang.Thread`,{bp:1,eq:1});function _f(e,t,n,r,i){return e.kA=t,e.kB=i,i&&e.ol(),e}var vf=class extends Error{constructor(){super(),this.kA=null,this.kB=!1,this.kz=null,this.fR=null}mf(e){return this}fn(){return this.kA}ol(){var e=this instanceof Qy?this.aC:this;return this.kz=Object.prototype.toString.call(e)===`[object Error]`?e:Error.captureStackTrace===void 0||Object.isSealed(this)?/* @__PURE__ */ Error():(Error.captureStackTrace(this),this),this}oC(){return this.fR===null&&(this.fR=this.kB?il().ok(this.kz):new(ff.r()).C(0)),this.fR}x(){var e=Ca(this),t=this.fn();return t===null?e:e+`: `+t}v(){return Ga.prototype.v.call(this)}p(e){return Ga.prototype.p.call(this,e)}get message(){var e=this.fn();return e===null?``:e}get name(){return Ca(this)}toString(){return this.x()}};function yf(){this.kD=null,bf=this,this.kD=new xd(ul().kw)}M=yf.prototype=new N,M.constructor=yf,M.pi=(function(){return this.kD.hJ}),new F().i(yf,`scala.Console$`,{eR:1,gQ:1});var bf;function xf(){return bf||=new yf,bf}function Sf(){}M=Sf.prototype=new Jl,M.constructor=Sf;function Cf(){}Cf.prototype=M,M.q7=(function(e){if(e===null)return null;if(e.a.length===0){var t=Ly();return ux(),t.lb}return new gC(e)});function wf(e,t,n){return e.c4(t)?e.c(t):n.c(t)}function Tf(){}M=Tf.prototype=new N,M.constructor=Tf,new F().i(Tf,`scala.collection.immutable.LazyList$Uninitialized$`,{fJ:1,a:1});var Ef;function Df(){return Ef||=new Tf,Ef}function Of(){}M=Of.prototype=new Pu,M.constructor=Of;function kf(){}kf.prototype=M;function Af(e,t){if(t===e)e.aU(tv().fk(t));else for(var n=t.k();n.n();)e.aO(n.l());return e}function jf(){}M=jf.prototype=new N,M.constructor=jf;function Mf(){}Mf.prototype=M,M.x=(function(){return`<function0>`});function Nf(){}M=Nf.prototype=new N,M.constructor=Nf;function Pf(){}Pf.prototype=M,M.x=(function(){return`<function1>`});function Ff(){}M=Ff.prototype=new N,M.constructor=Ff;function If(){}If.prototype=M,M.x=(function(){return`<function2>`});function Lf(){}M=Lf.prototype=new N,M.constructor=Lf;function Rf(){}Rf.prototype=M,M.x=(function(){return`<function3>`});function zf(e){this.g4=!1,this.g4=e}M=zf.prototype=new N,M.constructor=zf,M.x=(function(){return``+this.g4}),new F().i(zf,`scala.runtime.BooleanRef`,{hk:1,a:1});function Bf(e){this.dO=0,this.dO=e}M=Bf.prototype=new N,M.constructor=Bf,M.x=(function(){return``+this.dO}),new F().i(Bf,`scala.runtime.IntRef`,{hm:1,a:1});function Vf(e){this.ei=null,this.ei=e}M=Vf.prototype=new N,M.constructor=Vf,M.x=(function(){return``+this.ei}),new F().i(Vf,`scala.runtime.ObjectRef`,{hp:1,a:1});function Hf(){this.ad=0,this.dl=0,this.lr=0,this.hK=0,Uf=this,this.ad=Yv(`Seq`),this.dl=Yv(`Map`),this.lr=Yv(`Set`),this.hK=this.iB($(),this.dl)}M=Hf.prototype=new Ed,M.constructor=Hf,M.ca=(function(e,t){return this.mL(U().K(e),U().K(t),-889275714)}),M.iy=(function(e){return Rx(e)?this.oK(e,this.ad):e instanceof aC?this.oW(e,this.ad):this.ph(e,this.ad)}),M.p3=(function(e){if(e.d())return this.hK;var t=new Wf,n=this.dl;return e.dS(t),n=this.z(n,t.g6),n=this.z(n,t.g7),n=this.cO(n,t.g8),this.ax(n,t.g9)}),new F().i(Hf,`scala.util.hashing.MurmurHash3$`,{hS:1,hR:1});var Uf;function G(){return Uf||=new Hf,Uf}function Wf(){this.g6=0,this.g7=0,this.g9=0,this.g8=0,this.g6=0,this.g7=0,this.g9=0,this.g8=1}M=Wf.prototype=new N,M.constructor=Wf,M.x=(function(){return`<function2>`}),M.nA=(function(e,t){var n=G().ca(e,t);this.g6=this.g6+n|0,this.g7^=n,this.g8=Math.imul(this.g8,1|n),this.g9=1+this.g9|0}),M.cG=(function(e,t){this.nA(e,t)}),new F().i(Wf,`scala.util.hashing.MurmurHash3$accum$1`,{hT:1,aE:1});var Gf=class extends vf{};function Kf(){this.gu=null,this.iE=null,this.iF=null,qf=this,this.gu=tv().lJ(od().b4(new(B.r()).C([]))),this.iE=new Z((e=>{try{console.error(this.eo(e)+`
`+this.oB(e,`
`))}catch(e){var t=e instanceof vf?e:new Qy(e);console.error(`Error in AirstreamError.consoleErrorCallback:`),console.error(t)}})),this.iF=new Z((e=>{console.warn(`Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.`);var t=e;throw t instanceof Qy?t.aC:t})),this.pn(this.iE)}M=Kf.prototype=new N,M.constructor=Kf,M.eo=(function(e){try{var t=e.fn()}catch{var t=`(Unable to get the message for this error - exception occurred in its getMessage)`}return Sa(e).ib()+`: `+t}),M.oB=(function(e,t){try{return du(Np().q7(e.oC()),``,t,``)}catch{return`(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)`}}),M.pn=(function(e){this.gu.aO(e)}),M.bT=(function(e){for(var t=this.gu.k();t.n();){var n=t.l();try{n.c(e)}catch(e){var r=e instanceof vf?e:new Qy(e),i=this.iF;if(n===null?i===null:n.p(i))throw r instanceof Qy?r.aC:r;console.warn(`Error processing an unhandled error callback:`),md().pL(0,new Th((e=>(()=>{throw e instanceof Qy?e.aC:e}))(r)))}}}),new F().i(Kf,`com.raquo.airstream.core.AirstreamError$`,{cn:1,gO:1,gP:1});var qf;function Jf(){return qf||=new Kf,qf}function Yf(e){e.gi(!0),e.im(void 0)}function Xf(e,t,n){return jh(e,vo().iD(t,eu().eG,!0),n)}function Zf(e,t){e.ih()?Fh(e,t):ep(e).push(new Th((()=>{Fh(e,t)})))}function Qf(e,t){e.ih()?Ph(e,t):ep(e).push(new Th((()=>{Ph(e,t)})))}function $f(e){return zh(e)>0}function ep(e){var t=e.il();if(t===void 0){var n=ls().b8(od().b4(new(Kl.r()).C([])));return e.im(n),n}return t}var tp=new F().i(1,`com.raquo.airstream.core.Observer`,{ax:1,aq:1,ab:1});function K(e,t,n){return new Fm(n.hT(t))}function np(e,t,n,r){return new Vd(new Z((e=>{(ys(),new gs(t,null,null)).bE(new Z((e=>(t=>{n.c(t).b7(e)}))(e)))})),fc())}function rp(e,t){if(this.jI=null,this.jI=e,t===null)throw mg(new hg)}M=rp.prototype=new N,M.constructor=rp,M.b7=(function(e){this.fc(e)}),M.fc=(function(e){return this.jI.c(e)}),new F().i(rp,`com.raquo.laminar.modifiers.Binder$$anon$1`,{dx:1,P:1,aA:1});function ip(e,t){this.jJ=null,this.h4=null,this.jJ=e,this.h4=t}M=ip.prototype=new N,M.constructor=ip,M.b7=(function(e){this.h4.d()||Yh(e,this.jJ,null,this.h4,$())}),new F().i(ip,`com.raquo.laminar.modifiers.CompositeKeySetter`,{dy:1,P:1,b9:1});function ap(e,t){this.e4=null,this.h5=null,this.h6=null,this.e4=e,this.h5=(n=>{var r=e.fJ.c(n);r.d()||t.c(r.I())}),this.h6=(()=>{var e=null;e=this;var t={};if(e===null)throw mg(new hg);return t.capture=e.e4.fL,t.passive=e.e4.fK,t})()}M=ap.prototype=new N,M.constructor=ap,M.b7=(function(e){this.nG(e,!1)}),M.nG=(function(e,t){if(Jh(e,this)===-1){var n=new Z((t=>(hs().nk(e.by,this),new ts(t.h3,new Th((()=>{var t=Jh(e,this);t!==-1&&(qh(e,t),hs().ps(e.by,this))})))))),r=t?Cc().q1(e,n):Yo().er(e.bG,new Z((t=>n.c(new oc(e,t)))),!1);return Kh(e,this,t),r}var i=new Z((e=>void 0));return Yo().mH(e.bG,new Z((t=>{i.c(new oc(e,t))})),!1)}),M.x=(function(){return`EventListener(`+this.e4.e2.fM+`)`});var op=new F().i(ap,`com.raquo.laminar.modifiers.EventListener`,{dz:1,P:1,aA:1});function sp(e,t,n){this.jL=null,this.dz=null,this.jK=null,this.jL=e,this.dz=t,this.jK=n}M=sp.prototype=new N,M.constructor=sp,M.b7=(function(e){this.jK.hR(e,this.jL,this.dz)}),new F().i(sp,`com.raquo.laminar.modifiers.KeySetter`,{dA:1,P:1,b9:1});function cp(e,t,n){this.jM=null,this.jO=null,this.jN=null,this.jM=e,this.jO=t,this.jN=n}M=cp.prototype=new N,M.constructor=cp,M.b7=(function(e){this.fc(e)}),M.fc=(function(e){e.pc(this.jM);var t=this.jO,n=new Z((t=>{this.jN.hR(e,t,this)}));return Yo().pP(e.bG,t,n)}),new F().i(cp,`com.raquo.laminar.modifiers.KeyUpdater`,{dB:1,P:1,aA:1});function lp(e,t){if(this.hc=null,this.jT=null,this.jU=null,this.jT=t,qd(this),e===null)throw Dp(new Op,`Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load`);if(!hs().oR(e,document))throw Dp(new Op,`Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering`);this.jU=e,this.p6()}M=lp.prototype=new N,M.constructor=lp,M.gf=(function(){return this.hc}),M.lQ=(function(e){this.hc=e}),M.p6=(function(){return this.hc.lv(),bc().ek(this,this.jT,void 0)}),M.b9=(function(){return this.jU}),new F().i(lp,`com.raquo.laminar.nodes.RootNode`,{dS:1,as:1,ba:1});function up(e,t,n){this.he=null,this.jX=null,this.jW=null,this.jX=e,this.jW=n,Jd(this,e,!1)}M=up.prototype=new Xd,M.constructor=up,M.ip=(function(){return this.jX}),M.nv=(function(){var e=this.jW;return e===void 0?void 0:e.map((e=>e.q8.dy))}),new F().i(up,`com.raquo.laminar.tags.CustomHtmlTag`,{bb:1,bc:1,aC:1});function dp(){this.e3=null,this.fN=null,this.jZ=null,this.k2=!1,this.k0=null,this.k1=!1,this.k3=null,this.k4=!1,this.k5=null,this.k6=!1,Fd(this,`selection`,new Qd)}M=dp.prototype=new Ld,M.constructor=dp,M.oV=(function(){return this.k2||=(this.jZ=pp().E(`leaf`),!0),this.jZ}),M.ml=(function(){return this.k1||=(this.k0=pp().E(`leaf-multiple`),!0),this.k0}),M.mp=(function(){return this.k4||=(this.k3=pp().E(`multiple`),!0),this.k3}),M.mG=(function(){return this.k6||=(this.k5=pp().E(`single`),!0),this.k5}),new F().i(dp,`io.github.nguyenyou.webawesome.laminar.CommonKeys$TreeSelection$`,{dY:1,b7:1,ac:1});var fp;function pp(){return fp||=new dp,fp}function mp(){this.dE=null,this.dB=null,this.dC=!1,this.dD=null,this.dF=!1,this.k7=null,this.k8=!1,this.k9=null,this.ka=!1,$d(this,`wa-icon`)}M=mp.prototype=new tf,M.constructor=mp,M.c7=(function(){return this.k8||=(this.k7=(Y(),Fd(new Id,`name`,ks().cc)),!0),this.k7}),M.cb=(function(){return this.ka||=(this.k9=(Y(),Fd(new Id,`variant`,ks().cc)),!0),this.k9}),M.f2=(function(){return zt}),new F().i(mp,`io.github.nguyenyou.webawesome.laminar.Icon$`,{dZ:1,ak:1,aj:1});var hp;function gp(){return hp||=new mp,hp}function _p(){this.dE=null,this.dB=null,this.dC=!1,this.dD=null,this.dF=!1,this.kh=null,this.ki=!1,this.kj=null,this.kk=!1,$d(this,`wa-tree`)}M=_p.prototype=new tf,M.constructor=_p,M.pf=(function(){return this.ki||=(this.kh=(Y(),new Nd(`wa-selection-change`)),!0),this.kh}),M.ix=(function(){return this.kk||=(this.kj=pp(),!0),this.kj}),M.f2=(function(){return ya}),new F().i(_p,`io.github.nguyenyou.webawesome.laminar.Tree$`,{e1:1,ak:1,aj:1});var vp;function yp(){return vp||=new _p,vp}function bp(){this.dE=null,this.dB=null,this.dC=!1,this.dD=null,this.dF=!1,this.kp=null,this.kq=!1,this.kr=null,this.ks=!1,$d(this,`wa-tree-item`)}M=bp.prototype=new tf,M.constructor=bp,M.gg=(function(){return this.kq||=(this.kp=(Y(),Fd(new Id,`expanded`,ks().gP)),!0),this.kp}),M.pF=(function(){return this.ks||=(this.kr=(Y(),Fd(new Id,`selected`,ks().gP)),!0),this.kr}),M.f2=(function(){return pa}),new F().i(bp,`io.github.nguyenyou.webawesome.laminar.TreeItem$`,{e3:1,ak:1,aj:1});var xp;function q(){return xp||=new bp,xp}function Sp(){this.dE=null,this.dB=null,this.dC=!1,this.dD=null,this.dF=!1,this.kt=null,this.ku=!1,$d(this,`wa-option`)}M=Sp.prototype=new tf,M.constructor=Sp,M.eu=(function(){return this.ku||=(this.kt=(Y(),Fd(new Id,`value`,ks().cc)),!0),this.kt}),M.f2=(function(){return tn}),new F().i(Sp,`io.github.nguyenyou.webawesome.laminar.UOption$`,{e4:1,ak:1,aj:1});var Cp;function wp(){return Cp||=new Sp,Cp}function Tp(e){if(e.a9.Z)return e.a9.Q().ib()+`[]`;for(var t=e.a9.N,n=t.length-1|0;n>=0&&t.charCodeAt(n)===36;)n=n-1|0;if(n>=0&&(t.charCodeAt(n)-48|0)>>>0<=9){for(n=n-1|0;n>=0&&(t.charCodeAt(n)-48|0)>>>0<=9;)n=n-1|0;for(;n>=0&&t.charCodeAt(n)===36;)n=n-1|0}for(;;){if(n>=0)var r=n,i=t.charCodeAt(r),a=i!==36&&i!==46;else var a=!1;if(a)n=n-1|0;else break}var o=1+n|0;return t.substring(o)}function Ep(e){this.hg=null,this.a9=e}M=Ep.prototype=new N,M.constructor=Ep,M.x=(function(){return(this.a9.Y?`interface `:this.a9.X?``:`class `)+this.a9.N}),M.ib=(function(){return this.hg===null&&(this.hg=Tp(this)),this.hg}),new F().i(Ep,`java.lang.Class`,{ee:1,a:1,Z:1});function Dp(e,t){return _f(e,t,null,!0,!0),e}var Op=class extends vf{};new F().i(Op,`java.lang.Exception`,{I:1,w:1,a:1});function kp(){}M=kp.prototype=new N,M.constructor=kp;function Ap(){}Ap.prototype=M;function jp(){this.mZ=null,Mp=this,w_(),this.mZ=sm()}M=jp.prototype=new Cf,M.constructor=jp,M.pz=(function(e){if(!e)throw ag(new sg,`requirement failed`)}),new F().i(jp,`scala.Predef$`,{f0:1,eT:1,eU:1});var Mp;function Np(){return Mp||=new jp,Mp}function Pp(e,t){switch(t){case 0:return e.aZ;case 1:return e.aQ;default:throw lg(new dg,t+` is out of bounds (min 0, max 1)`)}}function Fp(e,t){return e.eK=t,e}function Ip(){this.eK=null}M=Ip.prototype=new N,M.constructor=Ip;function Lp(){}Lp.prototype=M,M.an=(function(e){return this.eK.i3(e,Pb())}),M.aP=(function(){return this.eK.gk(Pb())}),M.cH=(function(e){return this.eK.i3(e,Pb())});function Rp(e,t){return e.fV=t,e}function zp(){this.fV=null}M=zp.prototype=new N,M.constructor=zp;function Bp(){}Bp.prototype=M,M.an=(function(e){return this.fV.an(e)}),M.aP=(function(){return this.fV.aP()});function Vp(e,t){if(t<0)return 1;var n=e.w();if(n>=0)return n===t?0:n<t?-1:1;for(var r=0,i=e.k();i.n();){if(r===t)return 1;i.l(),r=1+r|0}return r-t|0}function Hp(e,t){return new Ig(e).ge(t)}function Up(e,t,n){var r=t>0?t:0,i=n<0?-1:n<=r?0:n-r|0;return i===0?qp().Q:new zg(e,r,i)}function Wp(e,t){for(var n=t.k();e.n();)if(!n.n()||!H().o(e.l(),n.l()))return!1;return!n.n()}function Gp(){this.Q=null,Kp=this,this.Q=new Ag}M=Gp.prototype=new N,M.constructor=Gp,M.aP=(function(){return new uy}),M.an=(function(e){return e.k()}),new F().i(Gp,`scala.collection.Iterator$`,{fc:1,a:1,C:1});var Kp;function qp(){return Kp||=new Gp,Kp}function Jp(e,t){return e.hr=t,e}function Yp(){this.hr=null}M=Yp.prototype=new N,M.constructor=Yp;function Xp(){}Xp.prototype=M,M.an=(function(e){return this.hr.an(e)});function Zp(){}M=Zp.prototype=new N,M.constructor=Zp,M.m6=(function(e){return Gy(e)?e:kg(e)?new bx(new fm((e=>(()=>e.k()))(e))):Wx(new Gx,X().i5(e))}),M.aP=(function(){return new xh(new J((e=>this.m6(e))),(Z_(),new Q_))}),M.an=(function(e){return this.m6(e)}),new F().i(Zp,`scala.collection.View$`,{fr:1,a:1,C:1});var Qp;function $p(){return Qp||=new Zp,Qp}function em(e,t,n,r,i,a){this.R=0,this.aa=0,this.ae=null,this.bn=null,this.aG=0,this.ba=0,this.R=e,this.aa=t,this.ae=n,this.bn=r,this.aG=i,this.ba=a}M=em.prototype=new kf,M.constructor=em,M.aF=(function(){return this.aG}),M.dq=(function(){return this.ba}),M.dr=(function(e){return this.ae.a[e<<1]}),M.cN=(function(e){return this.ae.a[1+(e<<1)|0]}),M.mc=(function(e){return new Eg(this.ae.a[e<<1],this.ae.a[1+(e<<1)|0])}),M.fm=(function(e){return this.bn.a[e]}),M.cL=(function(e){return this.ae.a[(this.ae.a.length-1|0)-e|0]}),M.hQ=(function(e,t,n,r){var i=Ru().dT(n,r),a=Ru().dp(i);if((this.R&a)!==0){var o=Ru().ck(this.R,i,a);if(H().o(e,this.dr(o)))return this.cN(o);throw new yg(`key not found: `+e)}if((this.aa&a)!==0)return this.cL(Ru().ck(this.aa,i,a)).hQ(e,t,n,5+r|0);throw new yg(`key not found: `+e)}),M.i9=(function(e,t,n,r,i){var a=Ru().dT(n,r),o=Ru().dp(a);if((this.R&o)!==0){var s=Ru().ck(this.R,a,o);return H().o(e,this.dr(s))?this.cN(s):i.X()}return(this.aa&o)===0?i.X():this.cL(Ru().ck(this.aa,a,o)).i9(e,t,n,5+r|0,i)}),M.hW=(function(e,t,n,r){var i=Ru().dT(n,r),a=Ru().dp(i);if((this.R&a)!==0){var o=Ru().ck(this.R,i,a);return this.bn.a[o]===t&&H().o(e,this.dr(o))}return(this.aa&a)!==0&&this.cL(Ru().ck(this.aa,i,a)).hW(e,t,n,5+r|0)}),M.mM=(function(e,t,n,r,i,a){var o=Ru().dT(r,i),s=Ru().dp(o);if((this.R&s)!==0){var c=Ru().ck(this.R,o,s),l=this.dr(c),u=this.fm(c);if(u===n&&H().o(l,e)){if(a){var d=this.cN(c);return Object.is(l,e)&&Object.is(d,t)?this:this.nT(s,e,t)}return this}var f=this.cN(c),p=ou().c3(u);return this.nR(s,p,this.io(l,f,u,p,e,t,n,r,5+i|0))}if((this.aa&s)!==0){var m=Ru().ck(this.aa,o,s),h=this.cL(m),g=h.mN(e,t,n,r,5+i|0,a);return g===h?this:this.nS(s,h,g)}return this.nQ(s,e,n,r,t)}),M.io=(function(e,t,n,r,i,a,o,s,c){if(c>=32)return new tm(n,r,B_().i6(new Q([new Eg(e,t),new Eg(i,a)])));var l=Ru().dT(r,c),u=Ru().dT(s,c),d=r+s|0;if(l!==u){var f=Ru().dp(l)|Ru().dp(u);if(l<u){for(var p=new Q([e,t,i,a]),m=new P(p.q()),h=oy(new cy,new Qx(p)),g=0;h.b5>0;)m.a[g]=h.l(),g=1+g|0;return new em(f,0,m,new Za(new Int32Array([n,o])),2,d)}for(var _=new Q([i,a,e,t]),v=new P(_.q()),y=oy(new cy,new Qx(_)),b=0;y.b5>0;)v.a[b]=y.l(),b=1+b|0;return new em(f,0,v,new Za(new Int32Array([o,n])),2,d)}for(var ee=Ru().dp(l),te=this.io(e,t,n,r,i,a,o,s,5+c|0),x=new Q([te]),S=new P(x.q()),C=oy(new cy,new Qx(x)),ne=0;C.b5>0;)S.a[ne]=C.l(),ne=1+ne|0;return new em(0,ee,S,Wl().ho,te.aF(),te.dq())}),M.ic=(function(){return this.aa!==0}),M.iq=(function(){return cf().dn(this.aa)}),M.gh=(function(){return this.R!==0}),M.it=(function(){return cf().dn(this.R)}),M.ff=(function(e){return cf().dn(this.R&(e-1|0))}),M.ir=(function(e){return cf().dn(this.aa&(e-1|0))}),M.nT=(function(e,t,n){var r=this.ff(e)<<1,i=this.ae,a=new P(i.a.length),o=i.a.length;return i.u(0,a,0,o),a.a[1+r|0]=n,new em(this.R,this.aa,a,this.bn,this.aG,this.ba)}),M.nS=(function(e,t,n){var r=(this.ae.a.length-1|0)-this.ir(e)|0,i=this.ae,a=new P(i.a.length),o=i.a.length;return i.u(0,a,0,o),a.a[r]=n,new em(this.R,this.aa,a,this.bn,(this.aG-t.aF()|0)+n.aF()|0,(this.ba-t.dq()|0)+n.dq()|0)}),M.nQ=(function(e,t,n,r,i){var a=this.ff(e),o=a<<1,s=this.ae,c=new P(2+s.a.length|0);s.u(0,c,0,o),c.a[o]=t,c.a[1+o|0]=i;var l=2+o|0,u=s.a.length-o|0;s.u(o,c,l,u);var d=this.oM(this.bn,a,n);return new em(this.R|e,this.aa,c,d,1+this.aG|0,this.ba+r|0)}),M.p5=(function(e,t,n){var r=this.ff(e),i=r<<1,a=(this.ae.a.length-2|0)-this.ir(e)|0,o=this.ae,s=new P(o.a.length-1|0);o.u(0,s,0,i);var c=2+i|0,l=a-i|0;o.u(c,s,i,l),s.a[a]=n;var u=2+a|0,d=1+a|0,f=(o.a.length-a|0)-2|0;o.u(u,s,d,f);var p=this.my(this.bn,r);return this.R^=e,this.aa|=e,this.ae=s,this.bn=p,this.aG=(this.aG-1|0)+n.aF()|0,this.ba=(this.ba-t|0)+n.dq()|0,this}),M.nR=(function(e,t,n){var r=this.ff(e),i=r<<1,a=(this.ae.a.length-2|0)-this.ir(e)|0,o=this.ae,s=new P(o.a.length-1|0);o.u(0,s,0,i);var c=2+i|0,l=a-i|0;o.u(c,s,i,l),s.a[a]=n;var u=2+a|0,d=1+a|0,f=(o.a.length-a|0)-2|0;o.u(u,s,d,f);var p=this.my(this.bn,r);return new em(this.R^e,this.aa|e,s,p,(this.aG-1|0)+n.aF()|0,(this.ba-t|0)+n.dq()|0)}),M.dS=(function(e){for(var t=cf().dn(this.R),n=0;n<t;)e.cG(this.dr(n),this.cN(n)),n=1+n|0;for(var r=cf().dn(this.aa),i=0;i<r;)this.cL(i).dS(e),i=1+i|0}),M.p=(function(e){if(e instanceof em){if(this===e)return!0;if(this.ba===e.ba&&this.aa===e.aa&&this.R===e.R&&this.aG===e.aG&&z().hZ(this.bn,e.bn)){var t=this.ae,n=e.ae,r=this.ae.a.length;if(t===n)return!0;for(var i=!0,a=0;i&&a<r;)i=H().o(t.a[a],n.a[a]),a=1+a|0;return i}return!1}return!1}),M.v=(function(){throw new _g(`Trie nodes do not support hashing.`)}),M.x=(function(){var e=Pa(this);return Ca(this)+`@`+(e>>>0).toString(16)}),M.lR=(function(){for(var e=this.ae.f(),t=e.a.length,n=cf().dn(this.R)<<1;n<t;)e.a[n]=e.a[n].lS(),n=1+n|0;return new em(this.R,this.aa,e,this.bn.f(),this.aG,this.ba)}),M.i8=(function(e){return this.cL(e)}),M.mN=(function(e,t,n,r,i,a){return this.mM(e,t,n,r,i,a)}),M.lS=(function(){return this.lR()}),new F().i(em,`scala.collection.immutable.BitmapIndexedMapNode`,{bN:1,bW:1,aN:1});function tm(e,t,n){this.hu=0,this.d3=0,this.ab=null,this.hu=e,this.d3=t,this.ab=n,Np().pz(this.ab.q()>=2)}M=tm.prototype=new kf,M.constructor=tm,M.ep=(function(e){for(var t=this.ab.k(),n=0;t.n();){if(H().o(t.l().aZ,e))return n;n=1+n|0}return-1}),M.aF=(function(){return this.ab.q()}),M.hQ=(function(e,t,n,r){var i=this.ox(e,t,n,r);return i.d()?qp().Q.l():i.I()}),M.ox=(function(e,t,n,r){if(this.d3===n){var i=this.ep(e);return i>=0?new ny(this.ab.s(i).aQ):ty()}return ty()}),M.i9=(function(e,t,n,r,i){if(this.d3===n){var a=this.ep(e);return a===-1?i.X():this.ab.s(a).aQ}return i.X()}),M.hW=(function(e,t,n,r){return this.d3===n&&this.ep(e)>=0}),M.mN=(function(e,t,n,r,i,a){var o=this.ep(e);return o>=0?a?Object.is(this.ab.s(o).aQ,t)?this:new tm(n,r,this.ab.dt(o,new Eg(e,t))):this:new tm(n,r,this.ab.dm(new Eg(e,t)))}),M.ic=(function(){return!1}),M.iq=(function(){return 0}),M.cL=(function(e){throw lg(new dg,`No sub-nodes present in hash-collision leaf node.`)}),M.gh=(function(){return!0}),M.it=(function(){return this.ab.q()}),M.dr=(function(e){return this.ab.s(e).aZ}),M.cN=(function(e){return this.ab.s(e).aQ}),M.mc=(function(e){return this.ab.s(e)}),M.fm=(function(e){return this.hu}),M.dS=(function(e){this.ab.bE(new J((t=>{var n=t.aZ,r=t.aQ;return e.cG(n,r)})))}),M.p=(function(e){if(e instanceof tm){if(this===e)return!0;if(this.d3===e.d3&&this.ab.q()===e.ab.q()){for(var t=this.ab.k();t.n();){var n=t.l(),r=n.aZ,i=n.aQ,a=e.ep(r);if(a<0||!H().o(i,e.ab.s(a).aQ))return!1}return!0}return!1}return!1}),M.v=(function(){throw new _g(`Trie nodes do not support hashing.`)}),M.x=(function(){var e=Pa(this);return Ca(this)+`@`+(e>>>0).toString(16)}),M.dq=(function(){return Math.imul(this.ab.q(),this.d3)}),M.i8=(function(e){return this.cL(e)}),M.lS=(function(){return new tm(this.hu,this.d3,this.ab)}),new F().i(tm,`scala.collection.immutable.HashCollisionMapNode`,{bP:1,bW:1,aN:1});function nm(){this.g0=null,rm=this,this.g0=new xS(ju().l2)}M=nm.prototype=new N,M.constructor=nm,M.or=(function(e){return e instanceof xS?e:e.w()===0?this.g0:new y_().hP(e).iw()}),M.an=(function(e){return this.or(e)}),new F().i(nm,`scala.collection.immutable.HashMap$`,{fy:1,a:1,aH:1});var rm;function im(){return rm||=new nm,rm}function am(){}M=am.prototype=new N,M.constructor=am,M.ot=(function(e){return xy(e)&&e.d()?mS():e instanceof xS||e instanceof hS||e instanceof gS||e instanceof _S||e instanceof vS?e:new P_().lw(e).mA()}),M.an=(function(e){return this.ot(e)}),new F().i(am,`scala.collection.immutable.Map$`,{fP:1,a:1,aH:1});var om;function sm(){return om||=new am,om}function cm(e,t,n){var r=t.w();if(r!==-1){var i=r+n|0;e.aW(i<0?0:i)}}function lm(){}M=lm.prototype=new N,M.constructor=lm,M.ou=(function(e){var t=e.w();return MS(new zS,t>0?Oa((1+t|0)/.75):16,.75).lz(e)}),M.aP=(function(){return new nv(16,.75)}),M.an=(function(e){return this.ou(e)}),new F().i(lm,`scala.collection.mutable.HashSet$`,{gz:1,a:1,C:1});var um;function dm(){return um||=new lm,um}function fm(e){this.li=null,this.li=e}M=fm.prototype=new Mf,M.constructor=fm,M.X=(function(){return(0,this.li)()}),new F().i(fm,`scala.runtime.AbstractFunction0.$$Lambda$07eded5776954a9c145e92c329afd52873ad179c`,{hg:1,cc:1,am:1});function J(e){this.lj=null,this.lj=e}M=J.prototype=new Pf,M.constructor=J,M.c=(function(e){return(0,this.lj)(e)}),new F().i(J,`scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919`,{hh:1,cd:1,e:1});function pm(e){this.lk=null,this.lk=e}M=pm.prototype=new If,M.constructor=pm,M.cG=(function(e,t){return(0,this.lk)(e,t)}),new F().i(pm,`scala.runtime.AbstractFunction2.$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8`,{hi:1,ce:1,aE:1});function mm(){}M=mm.prototype=new N,M.constructor=mm;function hm(){}hm.prototype=M,M.x=(function(){return`<function1>`}),M.c=(function(e){return this.cI(e,eu().eG)});var gm=new F().i(0,`scala.runtime.Nothing$`,{hn:1,w:1,a:1});function _m(){}M=_m.prototype=new N,M.constructor=_m,M.ov=(function(e){return(t=>e.c(t))}),new F().i(_m,`scala.scalajs.js.Any$`,{hu:1,hv:1,hw:1});var vm;function ym(){return vm||=new _m,vm}function bm(){}M=bm.prototype=new Mf,M.constructor=bm;function xm(){}xm.prototype=M;function Sm(){}M=Sm.prototype=new Pf,M.constructor=Sm;function Cm(){}Cm.prototype=M;function wm(){}M=wm.prototype=new If,M.constructor=wm;function Tm(){}Tm.prototype=M;function Em(){}M=Em.prototype=new Rf,M.constructor=Em;function Dm(){}Dm.prototype=M;function Om(e,t,n,r){if(this.iI=null,this.iG=!1,this.gv=null,this.iH=null,this.iI=e,this.iG=t,this.gv=n,r===null)throw mg(new hg);this.iH=void 0}M=Om.prototype=new N,M.constructor=Om,M.fp=(function(){return this.iH}),M.fh=(function(){return mo(this)}),M.x=(function(){return ho(this)}),M.iA=(function(){return this}),M.gm=(function(e){try{this.iI.c(e)}catch(e){var t=e instanceof vf?e:new Qy(e);this.iG?this.gl(new kv(t)):Jf().bT(new kv(t))}}),M.gl=(function(e){try{this.gv.c4(e)?this.gv.c(e):Jf().bT(e)}catch(n){var t=n instanceof vf?n:new Qy(n);Jf().bT(new Av(t,e))}}),M.fs=(function(e){e.cK(new Z((e=>{this.gl(e)})),new Z((e=>{this.gm(e)})))}),new F().i(Om,`com.raquo.airstream.core.Observer$$anon$8`,{cp:1,aq:1,ab:1,ax:1});function km(e,t,n){if(this.gw=null,this.iJ=!1,this.iK=null,this.gw=e,this.iJ=t,n===null)throw mg(new hg);this.iK=void 0}M=km.prototype=new N,M.constructor=km,M.fp=(function(){return this.iK}),M.fh=(function(){return mo(this)}),M.x=(function(){return ho(this)}),M.iA=(function(){return this}),M.gm=(function(e){this.fs(new Dv(e))}),M.gl=(function(e){this.fs(new Ev(e))}),M.fs=(function(e){try{this.gw.c4(e)?this.gw.c(e):e.cK(new Z((e=>{Jf().bT(e)})),new Z((e=>void 0)))}catch(n){var t=n instanceof vf?n:new Qy(n);this.iJ&&e.mi()?this.gl(new kv(t)):e.cK(new Z((e=>{Jf().bT(new Av(t,e))})),new Z((e=>{Jf().bT(new kv(t))})))}}),new F().i(km,`com.raquo.airstream.core.Observer$$anon$9`,{cq:1,aq:1,ab:1,ax:1});function Am(e){if(this.jd=null,this.je=!1,this.mR=null,e===null)throw mg(new hg);Ms(this)}M=Am.prototype=new N,M.constructor=Am,M.pT=(function(){return this.je||=(this.jd=new Zd(`svg`,!1),!0),this.jd}),new F().i(Am,`com.raquo.laminar.api.Laminar$svg$`,{cU:1,da:1,d3:1,d5:1});function jm(){this.g=null,Mm=this,this.g=new Jx}M=jm.prototype=new N,M.constructor=jm,new F().i(jm,`com.raquo.laminar.api.package$`,{cX:1,b3:1,b6:1,b2:1});var Mm;function Y(){return Mm||=new jm,Mm}function Nm(e,t,n,r){this.gQ=null,this.gS=!1,this.gR=null,this.fG=null,this.gQ=e,this.gS=t,this.gR=n,this.fG=r}M=Nm.prototype=new N,M.constructor=Nm,M.fc=(function(e){var t=this.gQ,n=t.d()?Us().pA(e,this.gS,this.fG):t.I(),r=new Z((e=>this.gR.hR(n,e.h3,this.fG)));return Yo().er(e.bG,new Z((t=>r.c(new oc(e,t)))),!1)}),M.b7=(function(e){this.fc(e)}),M.q5=(function(e){var t=e.lE(this.fG);return new Nm(this.gQ,this.gS,this.gR,t)}),M.mQ=(function(e){return this.q5(e)}),new F().i(Nm,`com.raquo.laminar.inserters.DynamicInserter`,{dd:1,P:1,b5:1,b4:1});function Pm(e){this.h8=null,this.jR=null,this.h8=ty(),this.jR=hs().nU(e)}M=Pm.prototype=new N,M.constructor=Pm,M.hV=(function(){return this.h8}),M.eq=(function(e){this.h8=e}),M.ev=(function(e){}),M.b7=(function(e){bc().ek(e,this,void 0)}),M.b9=(function(){return this.jR}),new F().i(Pm,`com.raquo.laminar.nodes.CommentNode`,{dN:1,as:1,P:1,aB:1});function Fm(e){this.hd=null,this.fQ=null,this.hd=ty(),this.fQ=hs().nX(e)}M=Fm.prototype=new N,M.constructor=Fm,M.hV=(function(){return this.hd}),M.eq=(function(e){this.hd=e}),M.ev=(function(e){}),M.b7=(function(e){bc().ek(e,this,void 0)}),M.pX=(function(){return this.fQ.data}),M.b9=(function(){return this.fQ}),new F().i(Fm,`com.raquo.laminar.nodes.TextNode`,{dU:1,as:1,P:1,aB:1});function Im(){this.dE=null,this.dB=null,this.dC=!1,this.dD=null,this.dF=!1,this.kd=null,this.ke=!1,this.kf=null,this.kg=!1,this.kb=null,this.kc=!1,$d(this,`wa-select`)}M=Im.prototype=new tf,M.constructor=Im,M.fr=(function(){return this.ke||=(this.kd=(Y(),new Nd(`input`)),!0),this.kd}),M.eu=(function(){return this.kg||=(this.kf=(Y(),Fd(new Id,`value`,ks().cc)),!0),this.kf}),M.oU=(function(){return this.kc||=(this.kb=(Y(),Fd(new Id,`label`,ks().cc)),!0),this.kb}),M.f2=(function(){return Ki}),new F().i(Im,`io.github.nguyenyou.webawesome.laminar.Select$`,{e0:1,ak:1,aj:1,e6:1});var Lm;function Rm(){return Lm||=new Im,Lm}function zm(){}M=zm.prototype=new N,M.constructor=zm;function Bm(){}Bm.prototype=M;function Vm(e,t){return e===t}function Hm(e){return e?1231:1237}var Um=new F().i(0,`java.lang.Boolean`,{eb:1,a:1,a1:1,Z:1},(e=>typeof e==`boolean`));function Wm(e){return e}function Gm(e,t){return t instanceof ba&&e===t.c}var Km=new F().i(0,`java.lang.Character`,{bi:1,a:1,a1:1,Z:1},(e=>e instanceof ba));function qm(e,t){return _f(e,t,null,!0,!0),e}var Jm=class extends Op{};new F().i(Jm,`java.lang.RuntimeException`,{Q:1,I:1,w:1,a:1});function Ym(e){return e.r=``,e}function Xm(e,t){return Ym(e),e.r=t,e}function Zm(){this.r=null}M=Zm.prototype=new N,M.constructor=Zm,M.lC=(function(e){var t=hf().p8(e,0,e.a.length);return this.r=``+this.r+t,this}),M.x=(function(){return this.r}),M.q=(function(){return this.r.length}),M.lL=(function(e){return this.r.charCodeAt(e)}),new F().i(Zm,`java.lang.StringBuilder`,{ew:1,aD:1,bg:1,a:1});function Qm(e){this.hm=null,this.eF=0,this.hm=e,this.eF=0}M=Qm.prototype=new N,M.constructor=Qm,M.w=(function(){return-1}),M.bf=(function(e,t,n){return uu(this,e,t,n)}),M.ci=(function(e,t,n,r){return fu(this,e,t,n,r)}),M.k=(function(){return this}),M.ge=(function(e){return Hp(this,e)}),M.cJ=(function(e){return Up(this,e,-1)}),M.x=(function(){return`<iterator>`}),M.n=(function(){return this.eF<(this.hm.length|0)}),M.l=(function(){var e=this.hm[this.eF];return this.eF=1+this.eF|0,e}),new F().i(Qm,`org.scalajs.dom.DOMList$DOMListIterator`,{eI:1,b:1,c:1,s:1});function $m(){}M=$m.prototype=new Ap,M.constructor=$m;function eh(){}eh.prototype=M;function th(){}M=th.prototype=new N,M.constructor=th,M.x=(function(){return`<function1>`}),M.cI=(function(e,t){return wf(this,e,t)}),M.c4=(function(e){return!1}),M.hS=(function(e){throw new Sg(e)}),M.c=(function(e){this.hS(e)}),new F().i(th,`scala.PartialFunction$$anon$1`,{eZ:1,e:1,j:1,a:1});function nh(){}M=nh.prototype=new N,M.constructor=nh;function rh(){}rh.prototype=M,M.w=(function(){return-1}),M.bf=(function(e,t,n){return uu(this,e,t,n)}),M.ci=(function(e,t,n,r){return fu(this,e,t,n,r)}),M.k=(function(){return this}),M.ge=(function(e){return Hp(this,e)}),M.cJ=(function(e){return this.fx(e,-1)}),M.fx=(function(e,t){return Up(this,e,t)}),M.x=(function(){return`<iterator>`});function ih(){this.hr=null,this.kQ=null,this.kR=null,Jp(this,sm()),ah=this,this.kQ=Wa(new Ga),this.kR=new fm((()=>this.kQ))}M=ih.prototype=new Xp,M.constructor=ih,new F().i(ih,`scala.collection.Map$`,{fk:1,fl:1,a:1,aH:1});var ah;function oh(){return ah||=new ih,ah}function sh(e,t){return e.cU=t,e}function ch(){this.cU=null}M=ch.prototype=new N,M.constructor=ch;function lh(){}lh.prototype=M,M.lJ=(function(e){return this.cU.cH(e)}),M.fk=(function(e){return this.cU.an(e)}),M.aP=(function(){return this.cU.aP()}),M.cH=(function(e){return this.lJ(e)}),M.an=(function(e){return this.fk(e)});function uh(e){return e.c2(new J((e=>e)))}function dh(e,t){return e.en(new xx(e,t))}function fh(e,t){return t>=0&&e.b3(t)>0}function ph(e){return e.b3(0)===0}function mh(e,t){var n=e.w();if(n!==-1){var r=t.w();if(r!==-1){if(n!==r)return!1;if(n===0)return!0}}return Wp(e.k(),t)}function hh(e,t){for(var n=e.bg().aP(),r=e.k();r.n();)n.aO(t.c(r.l()));return n.aV()}function gh(){this.fV=null,Rp(this,w_())}M=gh.prototype=new Bp,M.constructor=gh,M.os=(function(e){return xy(e)?e:zp.prototype.an.call(this,e)}),M.an=(function(e){return this.os(e)}),new F().i(gh,`scala.collection.immutable.Iterable$`,{fD:1,fb:1,a:1,C:1});var _h;function vh(){return _h||=new gh,_h}function yh(){this.M=null,this.kY=null,this.kZ=!1,bh=this,this.M=SS(new kS,Eu())}M=yh.prototype=new N,M.constructor=yh,M.cH=(function(e){return this.i5(e)}),M.mC=(function(){return this.kZ||=(this.kY=new Ou,!0),this.kY}),M.pE=(function(e,t){return SS(new kS,new fm(((e,t)=>(()=>{for(var n=e.ei,r=t.dO;r>0&&TS(n)!==X().M;)n=n.aX(),e.ei=n,r=r-1|0,t.dO=r;return n}))(new Vf(e),new Bf(t))))}),M.i5=(function(e){return e instanceof kS?e:e.w()===0?this.M:SS(new kS,new fm((()=>this.mD(e.k()))))}),M.mE=(function(e,t){return e.n()?CS(new kS,e.l(),SS(new kS,new fm((()=>this.mE(e,t))))):t.X()}),M.mD=(function(e){return e.n()?CS(new kS,e.l(),SS(new kS,new fm((()=>this.mD(e))))):this.M}),M.aP=(function(){return new b_}),M.an=(function(e){return this.i5(e)}),new F().i(yh,`scala.collection.immutable.LazyList$`,{fE:1,a:1,C:1,V:1});var bh;function X(){return bh||=new yh,bh}function xh(e,t){if(this.lc=null,this.eV=null,this.lc=e,t===null)throw mg(new hg);this.eV=t}M=xh.prototype=new N,M.constructor=xh,M.nr=(function(e){return this.eV.aO(e),this}),M.nh=(function(e){return this.eV.aU(e),this}),M.aW=(function(e){this.eV.aW(e)}),M.aV=(function(){return this.lc.c(this.eV.aV())}),M.aO=(function(e){return this.nr(e)}),M.aU=(function(e){return this.nh(e)}),new F().i(xh,`scala.collection.mutable.Builder$$anon$1`,{gw:1,E:1,G:1,K:1});function Sh(e,t){return e.dh=t,e}function Ch(){this.dh=null}M=Ch.prototype=new N,M.constructor=Ch;function wh(){}wh.prototype=M,M.aW=(function(e){}),M.ns=(function(e){return this.dh.aO(e),this}),M.ni=(function(e){return this.dh.aU(e),this}),M.aV=(function(){return this.dh}),M.aO=(function(e){return this.ns(e)}),M.aU=(function(e){return this.ni(e)}),new F().i(Ch,`scala.collection.mutable.GrowableBuilder`,{aQ:1,E:1,G:1,K:1});function Th(e){this.ln=null,this.ln=e}M=Th.prototype=new xm,M.constructor=Th,M.X=(function(){return(0,this.ln)()}),new F().i(Th,`scala.scalajs.runtime.AnonFunction0.$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d`,{hC:1,hB:1,cc:1,am:1});function Z(e){this.lo=null,this.lo=e}M=Z.prototype=new Cm,M.constructor=Z,M.c=(function(e){return(0,this.lo)(e)}),new F().i(Z,`scala.scalajs.runtime.AnonFunction1.$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1`,{hE:1,hD:1,cd:1,e:1});function Eh(e){this.lp=null,this.lp=e}M=Eh.prototype=new Tm,M.constructor=Eh,M.cG=(function(e,t){return(0,this.lp)(e,t)}),new F().i(Eh,`scala.scalajs.runtime.AnonFunction2.$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7`,{hG:1,hF:1,ce:1,aE:1});function Dh(e){this.lq=null,this.lq=e}M=Dh.prototype=new Dm,M.constructor=Dh,M.hR=(function(e,t,n){return(0,this.lq)(e,t,n)}),new F().i(Dh,`scala.scalajs.runtime.AnonFunction3.$$Lambda$73f37e31ba038fe839c174212837da323f140c96`,{hI:1,hH:1,hj:1,eS:1});function Oh(){}M=Oh.prototype=new N,M.constructor=Oh;function kh(){}kh.prototype=M,M.cl=(function(){return new Tg(this)});function Ah(e){e.lO(ls().b8(od().b4(new(tp.r()).C([])))),e.lP(ls().b8(od().b4(new(po.r()).C([])))),e.gt(!1)}function jh(e,t,n){var r=No(),i=(()=>{Ih(e);var r=Mh(e,t,n);return t.fs(e.gr()),Lh(e),r}),a=!$f(e);if(r.aY||!a)var o=i();else{r.aY=!0;try{var o=i()}finally{r.aY=!1,Ao(r)}}return o}function Mh(e,t,n){var r=new ts(n,new Th((()=>{Zf(e,t)})));return e.fj().push(t),r}function Nh(e,t,n){var r=No(),i=(()=>{!$f(e)&&n&&Ih(e),e.fo().push(t),Lh(e)}),a=!$f(e);if(r.aY||!a)i();else{r.aY=!0;try{i()}finally{r.aY=!1,Ao(r)}}}function Ph(e,t){xo().mz(e.fo(),t)&&Rh(e)}function Fh(e,t){xo().mz(e.fj(),t)&&Rh(e)}function Ih(e){e.mP()||(e.mx(),e.gt(!0))}function Lh(e){zh(e)===1&&e.mv()}function Rh(e){$f(e)||(e.mw(),e.gt(!1))}function zh(e){var t=e.fj().length,n=e.fo();return(t|0)+(n.length|0)|0}function Bh(e){e.fF=vo().ow(new Vh(e),(vo(),!0))}function Vh(e){if(this.j2=null,e===null)throw mg(new hg);this.j2=e}M=Vh.prototype=new hm,M.constructor=Vh,M.oQ=(function(e){return!0}),M.nD=(function(e,t){new To(new Z((t=>{this.j2.pG(e,t)})))}),M.c4=(function(e){return this.oQ(e)}),M.cI=(function(e,t){return this.nD(e,t)}),new F().i(Vh,`com.raquo.airstream.state.Var$$anon$1`,{cJ:1,cf:1,e:1,j:1,a:1});function Hh(e){if(e===null)throw mg(new hg)}M=Hh.prototype=new hm,M.constructor=Hh,M.c4=(function(e){return typeof e==`string`||!1}),M.cI=(function(e,t){return typeof e==`string`?e:t.c(e)}),new F().i(Hh,`com.raquo.laminar.DomApi$$anon$2`,{cO:1,cf:1,e:1,j:1,a:1});function Uh(e,t){this.fI=null,this.gY=null,this.fI=e,this.gY=t}M=Uh.prototype=new N,M.constructor=Uh,M.b7=(function(e){var t=this.gY;t!==void 0&&t.is(e,this.fI),bc().ek(e,this.fI,void 0)}),M.q6=(function(e){return new Uh(this.fI,e.lE(this.gY))}),M.mQ=(function(e){return this.q6(e)});var Wh=new F().i(Uh,`com.raquo.laminar.inserters.StaticChildInserter`,{dh:1,P:1,b5:1,dj:1,b4:1});function Gh(e){e.h9=new rs(new Th((()=>{e.bG.lv()})),new Th((()=>{e.bG.nY()}))),e.dA=void 0,e.eC=mS()}function Kh(e,t,n){if(e.dA===void 0)e.dA=ls().b8(od().b4(new(op.r()).C([t])));else if(n){var r=e.dA;if(r===void 0)throw new yg(`undefined.get`);r.unshift(t)}else{var i=e.dA;if(i===void 0)throw new yg(`undefined.get`);i.push(t)}}function qh(e,t){var n=e.dA;n!==void 0&&n.splice(t,1)}function Jh(e,t){var n=e.dA;if(n===void 0)return-1;for(var r=!1,i=0;!r&&i<(n.length|0);){var a=n[i];(a===null?t===null:wa(a,t))?r=!0:i=1+i|0}return r?i:-1}function Yh(e,t,n,r,i){var a=e.eC.cM(t,new Th((()=>$()))),o=(e=>{for(var t=a;!t.d();){var r=t.y(),i=r.aZ;if(i===null?e===null:wa(i,e)){var o=r.aQ;if(o===null?n===null:wa(o,n))var s=n===null;else var s=!0}else var s=!1;if(s)return!0;t=t.t()}return!1}),s=uh(r);_return$1:{for(var c,l=i;;)if(l.d()){var c=$();break}else{var u=l.y(),d=l.t();if(o(u)){l=d;continue}for(var f=l,p=d;;)if(p.d()){var c=f;break _return$1}else{if(!o(p.y())){p=p.t();continue}for(var m=p,h=new CC(f.y(),$()),g=f.t(),_=h;g!==m;){var v=new CC(g.y(),$());_.ao=v,_=v,g=g.t()}for(var y=m.t(),b=y;!y.d();)if(!o(y.y()))y=y.t();else{for(;b!==y;){var ee=new CC(b.y(),$());_.ao=ee,_=ee,b=b.t()}b=y.t(),y=y.t()}b.d()||(_.ao=b);var c=h;break _return$1}}}var te=e.eC.cM(t,new Th((()=>$()))),x=(e=>c.bv(e.aZ));_return$3:{for(var S,C=te;;)if(C.d()){var S=$();break}else{var ne=C.y(),re=C.t();if(x(ne)){C=re;continue}for(var ie=C,ae=re;;)if(ae.d()){var S=ie;break _return$3}else{if(!x(ae.y())){ae=ae.t();continue}for(var oe=ae,se=new CC(ie.y(),$()),ce=ie.t(),le=se;ce!==oe;){var ue=new CC(ce.y(),$());le.ao=ue,le=ue,ce=ce.t()}for(var de=oe.t(),fe=de;!de.d();)if(!x(de.y()))de=de.t();else{for(;fe!==de;){var w=new CC(fe.y(),$());le.ao=w,le=w,fe=fe.t()}fe=de.t(),de=de.t()}fe.d()||(le.ao=fe);var S=se;break _return$3}}}var pe=(e=>new Eg(e,n));if(s===$())var me=$();else{for(var he=new CC(pe(s.y()),$()),ge=he,_e=s.t();_e!==$();){var ve=new CC(pe(_e.y()),$());ge.ao=ve,ge=ve,_e=_e.t()}var me=he}var ye=S.lF(me),be=t.gZ.lU(t.jE.c(e)),xe=(e=>c.bv(e));_return$5:{for(var Se,Ce=be;;)if(Ce.d()){var Se=$();break}else{var we=Ce.y(),Te=Ce.t();if(xe(we)){Ce=Te;continue}for(var Ee=Ce,De=Te;;)if(De.d()){var Se=Ee;break _return$5}else{if(!xe(De.y())){De=De.t();continue}for(var Oe=De,ke=new CC(Ee.y(),$()),Ae=Ee.t(),je=ke;Ae!==Oe;){var Me=new CC(Ae.y(),$());je.ao=Me,je=Me,Ae=Ae.t()}for(var Ne=Oe.t(),Pe=Ne;!Ne.d();)if(!xe(Ne.y()))Ne=Ne.t();else{for(;Pe!==Ne;){var T=new CC(Pe.y(),$());je.ao=T,je=T,Pe=Pe.t()}Pe=Ne.t(),Ne=Ne.t()}Pe.d()||(je.ao=Pe);var Se=ke;break _return$5}}}_return$7:{for(var Fe,Ie=s;;)if(Ie.d()){var Fe=$();break}else{var Le=Ie.y(),Re=Ie.t();if(o(Le)){Ie=Re;continue}for(var ze=Ie,Be=Re;;)if(Be.d()){var Fe=ze;break _return$7}else{if(!o(Be.y())){Be=Be.t();continue}for(var Ve=Be,He=new CC(ze.y(),$()),Ue=ze.t(),We=He;Ue!==Ve;){var Ge=new CC(Ue.y(),$());We.ao=Ge,We=Ge,Ue=Ue.t()}for(var E=Ve.t(),Ke=E;!E.d();)if(!o(E.y()))E=E.t();else{for(;Ke!==E;){var qe=new CC(Ke.y(),$());We.ao=qe,We=qe,Ke=Ke.t()}Ke=E.t(),E=E.t()}Ke.d()||(We.ao=Ke);var Fe=He;break _return$7}}}var Je=Se.lF(Fe);e.eC=e.eC.du(t,ye),t.jG.cG(e,t.gZ.lY(Je))}function Xh(e,t){Qh(e,e.eB,t)&&$h(e,t)}function Zh(e,t){var n=e.eB;e.eB=t,Qh(e,n,t)||$h(e,t)}function Qh(e,t,n){var r=!t.d()&&!t.I().gf().bx.d(),i=!n.d()&&!n.I().gf().bx.d();return r&&!i}function $h(e,t){eg(e,t.d()?ty():new ny(t.I().gf()))}function eg(e,t){if(t.d())e.h9.nL();else{var n=t.I();e.h9.pI(n)}}function tg(){}M=tg.prototype=new Bm,M.constructor=tg;function ng(){}ng.prototype=M;var rg=class extends Jm{constructor(e){super(),_f(this,e,null,!0,!0)}};new F().i(rg,`java.lang.ArithmeticException`,{e9:1,Q:1,I:1,w:1,a:1});var ig=new F().i(0,`java.lang.Byte`,{ec:1,a7:1,a:1,a1:1,Z:1},(e=>Fa(e)));function ag(e,t){return _f(e,t,null,!0,!0),e}function og(e){return _f(e,null,null,!0,!0),e}var sg=class extends Jm{};new F().i(sg,`java.lang.IllegalArgumentException`,{bk:1,Q:1,I:1,w:1,a:1});var cg=class extends Jm{constructor(e){super(),_f(this,e,null,!0,!0)}};new F().i(cg,`java.lang.IllegalStateException`,{eh:1,Q:1,I:1,w:1,a:1});function lg(e,t){return _f(e,t,null,!0,!0),e}function ug(e,t){return _f(e,`Index out of range: `+t,null,!0,!0),e}var dg=class extends Jm{};new F().i(dg,`java.lang.IndexOutOfBoundsException`,{bl:1,Q:1,I:1,w:1,a:1});function fg(){}M=fg.prototype=new Bm,M.constructor=fg,new F().i(fg,`java.lang.JSConsoleBasedPrintStream$DummyOutputStream`,{em:1,bf:1,bd:1,bh:1,be:1});function pg(e,t){return _f(e,t,null,!0,!0),e}function mg(e){return _f(e,null,null,!0,!0),e}var hg=class extends Jm{};new F().i(hg,`java.lang.NullPointerException`,{eo:1,Q:1,I:1,w:1,a:1});var gg=new F().i(0,`java.lang.Short`,{es:1,a7:1,a:1,a1:1,Z:1},(e=>Ia(e))),_g=class extends Jm{constructor(e){super(),_f(this,e,null,!0,!0)}};new F().i(_g,`java.lang.UnsupportedOperationException`,{eB:1,Q:1,I:1,w:1,a:1});var vg=class extends Jm{constructor(e){super(),_f(this,e,null,!0,!0)}};new F().i(vg,`java.util.ConcurrentModificationException`,{eG:1,Q:1,I:1,w:1,a:1});var yg=class extends Jm{constructor(e){super(),_f(this,e,null,!0,!0)}};new F().i(yg,`java.util.NoSuchElementException`,{eH:1,Q:1,I:1,w:1,a:1});function bg(){}M=bg.prototype=new eh,M.constructor=bg,M.c=(function(e){return e}),M.x=(function(){return`generalized constraint`}),new F().i(bg,`scala.$less$colon$less$$anon$1`,{eO:1,eL:1,eM:1,e:1,a:1});function xg(e){if(!e.kF){if(e.fT===null)var t=`null`;else{var n=od().nw(e.fT),r=n===null?`of a JS class`:`of class `+n.a9.N;try{var t=e.fT+` (`+r+`)`}catch{var t=`an instance `+r}}e.kE=t,e.kF=!0}return e.kE}var Sg=class extends Jm{constructor(e){super(),this.fT=null,this.kE=null,this.kF=!1,this.fT=e,_f(this,null,null,!0,!0)}fn(){return xg(this)}};new F().i(Sg,`scala.MatchError`,{eV:1,Q:1,I:1,w:1,a:1});function Cg(){}M=Cg.prototype=new N,M.constructor=Cg;function wg(){}wg.prototype=M,M.cl=(function(){return new Tg(this)}),M.d=(function(){return this===ty()}),M.w=(function(){return!this.d()|0}),M.bv=(function(e){return!this.d()&&H().o(this.I(),e)}),M.k=(function(){return this.d()?qp().Q:new jg(this.I())});function Tg(e){if(this.eH=0,this.kI=0,this.kH=null,e===null)throw mg(new hg);this.kH=e,this.eH=0,this.kI=e.bi()}M=Tg.prototype=new rh,M.constructor=Tg,M.n=(function(){return this.eH<this.kI}),M.l=(function(){var e=this.kH.bj(this.eH);return this.eH=1+this.eH|0,e}),new F().i(Tg,`scala.Product$$anon$1`,{f1:1,t:1,b:1,c:1,s:1});function Eg(e,t){this.aZ=null,this.aQ=null,this.aZ=e,this.aQ=t}M=Eg.prototype=new N,M.constructor=Eg,M.bi=(function(){return 2}),M.bj=(function(e){return Pp(this,e)}),M.x=(function(){return`(`+this.aZ+`,`+this.aQ+`)`}),M.bk=(function(){return`Tuple2`}),M.cl=(function(){return new yv(this)}),M.v=(function(){return G().fv(this,-116390334,!0)}),M.p=(function(e){return this===e||e instanceof Eg&&H().o(this.aZ,e.aZ)&&H().o(this.aQ,e.aQ)}),new F().i(Eg,`scala.Tuple2`,{bt:1,f2:1,U:1,d:1,a:1});function Dg(e){this.eK=null,Fp(this,e)}M=Dg.prototype=new Lp,M.constructor=Dg,new F().i(Dg,`scala.collection.ClassTagSeqFactory$AnySeqDelegate`,{f8:1,f7:1,a:1,C:1,V:1});function Og(e){return du(e,e.bD()+`(`,`, `,`)`)}function kg(e){return!!(e&&e.$classData&&e.$classData.n.f)}function Ag(){}M=Ag.prototype=new rh,M.constructor=Ag,M.n=(function(){return!1}),M.p9=(function(){throw new yg(`next on empty iterator`)}),M.w=(function(){return 0}),M.l=(function(){this.p9()}),M.fx=(function(e,t){return this}),new F().i(Ag,`scala.collection.Iterator$$anon$19`,{fd:1,t:1,b:1,c:1,s:1});function jg(e){this.kK=null,this.eL=!1,this.kK=e,this.eL=!1}M=jg.prototype=new rh,M.constructor=jg,M.n=(function(){return!this.eL}),M.l=(function(){return this.eL?qp().Q.l():(this.eL=!0,this.kK)}),M.fx=(function(e,t){return this.eL||e>0||t===0?qp().Q:this}),new F().i(jg,`scala.collection.Iterator$$anon$20`,{fe:1,t:1,b:1,c:1,s:1});function Mg(e,t){if(this.kL=null,this.kN=null,this.fW=!1,this.kM=null,this.hq=null,this.kL=e,t===null)throw mg(new hg);this.hq=t,this.kN=NS(new zS),this.fW=!1}M=Mg.prototype=new rh,M.constructor=Mg,M.n=(function(){for(;;)if(this.fW)return!0;else if(this.hq.n()){var e=this.hq.l();if(!this.kN.ga(this.kL.c(e)))continue;return this.kM=e,this.fW=!0,!0}else return!1}),M.l=(function(){return this.n()?(this.fW=!1,this.kM):qp().Q.l()}),new F().i(Mg,`scala.collection.Iterator$$anon$8`,{fg:1,t:1,b:1,c:1,s:1});function Ng(e,t){if(this.kO=null,this.fX=null,this.kO=e,t===null)throw mg(new hg);this.fX=t}M=Ng.prototype=new rh,M.constructor=Ng,M.w=(function(){return this.fX.w()}),M.n=(function(){return this.fX.n()}),M.l=(function(){return this.kO.c(this.fX.l())}),new F().i(Ng,`scala.collection.Iterator$$anon$9`,{fh:1,t:1,b:1,c:1,s:1});function Pg(e){for(;;)if(e.bm instanceof Ig){var t=e.bm;if(e.bm=t.bm,e.cS=t.cS,t.bJ!==null){e.bI===null&&(e.bI=t.bI);var n=t.bI;n===null&&rd().c8(),n.eM=e.bJ,e.bJ=t.bJ}}else return}function Fg(e){for(;;)if(e.bJ===null)return e.bm=null,e.bI=null,!1;else{if(e.bm=e.bJ.oH(),e.bI===e.bJ){var t=e.bI;t===null&&rd().c8(),e.bI=t.eM}if(e.bJ=e.bJ.eM,Pg(e),e.cS)return!0;if(!(e.bm!==null&&e.bm.n()))continue;return e.cS=!0,!0}}function Ig(e){this.bm=null,this.bJ=null,this.bI=null,this.cS=!1,this.bm=e,this.bJ=null,this.bI=null,this.cS=!1}M=Ig.prototype=new rh,M.constructor=Ig,M.n=(function(){return this.cS?!0:this.bm===null?!1:this.bm.n()?(this.cS=!0,!0):Fg(this)}),M.l=(function(){if(this.n()){this.cS=!1;var e=this.bm;return e===null&&rd().c8(),e.l()}return qp().Q.l()}),M.ge=(function(e){var t=new mu(e,null);if(this.bJ===null)this.bJ=t,this.bI=t;else{var n=this.bI;n===null&&rd().c8(),n.eM=t,this.bI=t}return this.bm===null&&(this.bm=qp().Q),this}),new F().i(Ig,`scala.collection.Iterator$ConcatIterator`,{bz:1,t:1,b:1,c:1,s:1});function Lg(e){for(;e.cr>0;)e.cT.n()?(e.cT.l(),e.cr=e.cr-1|0):e.cr=0}function Rg(e,t){if(e.bz<0)return-1;var n=e.bz-t|0;return n<0?0:n}function zg(e,t,n){this.cT=null,this.bz=0,this.cr=0,this.cT=e,this.bz=n,this.cr=t}M=zg.prototype=new rh,M.constructor=zg,M.w=(function(){var e=this.cT.w();if(e<0)return-1;var t=e-this.cr|0,n=t<0?0:t;if(this.bz<0)return n;var r=this.bz;return r<n?r:n}),M.n=(function(){return Lg(this),this.bz!==0&&this.cT.n()}),M.l=(function(){return Lg(this),this.bz>0?(this.bz=this.bz-1|0,this.cT.l()):this.bz<0?this.cT.l():qp().Q.l()}),M.fx=(function(e,t){var n=e>0?e:0;if(t<0)var r=Rg(this,n);else if(t<=n)var r=0;else if(this.bz<0)var r=t-n|0;else var i=Rg(this,n),a=t-n|0,r=i<a?i:a;var o=this.cr+n|0;return r===0?qp().Q:o<0?(this.cr=2147483647,this.bz=0,Hp(this,new fm((()=>new zg(this.cT,o-2147483647|0,r))))):(this.cr=o,this.bz=r,this)}),new F().i(zg,`scala.collection.Iterator$SliceIterator`,{fj:1,t:1,b:1,c:1,s:1});function Bg(e){for(var t=e,n=0;!t.d();)n=1+n|0,t=t.t();return n}function Vg(e,t){return t<0?1:Gg(e,t,0,e)}function Hg(e,t){return t>=0&&e.b3(t)>0}function Ug(e,t){if(t<0)throw lg(new dg,``+t);var n=e.lW(t);if(n.d())throw lg(new dg,``+t);return n.y()}function Wg(e,t){return zx(t)?Kg(e,e,t):mh(e,t)}function Gg(e,t,n,r){for(var i=r,a=n;;)if(a===t)return!i.d()|0;else{if(!i.d()){var o=1+a|0,s=i.t();a=o,i=s;continue}return-1}}function Kg(e,t,n){for(var r=n,i=t;;)if(i===r)return!0;else{if(!i.d()&&!r.d()&&H().o(i.y(),r.y())){var a=i.t(),o=r.t();i=a,r=o;continue}return i.d()&&r.d()}}function qg(){this.cU=null,sh(this,L_())}M=qg.prototype=new lh,M.constructor=qg,new F().i(qg,`scala.collection.Seq$`,{fm:1,at:1,a:1,C:1,V:1});var Jg;function Yg(){return Jg||=new qg,Jg}function Xg(e){if(this.eN=null,e===null)throw mg(new hg);this.eN=e}M=Xg.prototype=new rh,M.constructor=Xg,M.n=(function(){return!this.eN.d()}),M.l=(function(){var e=this.eN.y();return this.eN=this.eN.t(),e}),new F().i(Xg,`scala.collection.StrictOptimizedLinearSeqOps$$anon$1`,{fo:1,t:1,b:1,c:1,s:1});function Zg(e){return e.bA=0,e.eO=0,e.bo=-1,e}function Qg(e){e.ct===null&&(e.ct=new Za(Ru().eU<<1),e.eP=new(Fu.r()).C(Ru().eU))}function $g(e,t){return Zg(e),t.ic()&&t_(e,t),t.gh()&&e_(e,t),e}function e_(e,t){e.dI=t,e.bA=0,e.eO=t.it()}function t_(e,t){Qg(e),e.bo=1+e.bo|0;var n=e.bo<<1,r=1+(e.bo<<1)|0;e.eP.a[e.bo]=t,e.ct.a[n]=0,e.ct.a[r]=t.iq()}function n_(e){e.bo=e.bo-1|0}function r_(e){for(;e.bo>=0;){var t=e.bo<<1,n=1+(e.bo<<1)|0,r=e.ct.a[t];if(r<e.ct.a[n]){var i=e.ct;i.a[t]=1+i.a[t]|0;var a=e.eP.a[e.bo].i8(r);if(a.ic()&&t_(e,a),a.gh())return e_(e,a),!0}else n_(e)}return!1}function i_(){this.bA=0,this.eO=0,this.dI=null,this.bo=0,this.ct=null,this.eP=null}M=i_.prototype=new rh,M.constructor=i_;function a_(){}a_.prototype=M,M.n=(function(){return this.bA<this.eO||r_(this)});function o_(e){return e.d2=-1,e.bB=-1,e.eQ=new Za(1+Ru().eU|0),e.eR=new(Fu.r()).C(1+Ru().eU|0),e}function s_(e,t){return o_(e),l_(e,t),d_(e),e}function c_(e,t){e.fZ=t,e.d2=t.it()-1|0}function l_(e,t){e.bB=1+e.bB|0,e.eR.a[e.bB]=t,e.eQ.a[e.bB]=t.iq()-1|0}function u_(e){e.bB=e.bB-1|0}function d_(e){for(;e.bB>=0;){var t=e.eQ.a[e.bB];if(e.eQ.a[e.bB]=t-1|0,t>=0)l_(e,e.eR.a[e.bB].i8(t));else{var n=e.eR.a[e.bB];if(u_(e),n.gh())return c_(e,n),!0}}return!1}function f_(){this.d2=0,this.fZ=null,this.bB=0,this.eQ=null,this.eR=null}M=f_.prototype=new rh,M.constructor=f_;function p_(){}p_.prototype=M,M.n=(function(){return this.d2>=0||d_(this)});function m_(e){return e.e9!==null}function h_(e,t,n,r){if(n<0||n>t.a.length)throw Rv(new zv);var i=new Za(1+t.a.length|0);t.u(0,i,0,n),i.a[n]=r;var a=1+n|0,o=t.a.length-n|0;return t.u(n,i,a,o),i}function g_(e,t,n,r,i,a,o){var s=t.ff(n),c=s<<1,l=t.ae,u=new P(2+l.a.length|0);l.u(0,u,0,c),u.a[c]=r,u.a[1+c|0]=o;var d=2+c|0,f=l.a.length-c|0;l.u(c,u,d,f);var p=h_(e,t.bn,s,i);t.R|=n,t.ae=u,t.bn=p,t.aG=1+t.aG|0,t.ba=t.ba+a|0}function __(e){m_(e)&&v_(e),e.e9=null}function v_(e){e.ce=e.ce.lR()}function y_(){this.e9=null,this.ce=null,this.ce=new em(0,0,Wl().kC,Wl().ho,0,0)}M=y_.prototype=new N,M.constructor=y_,M.aW=(function(e){}),M.es=(function(e,t,n,r,i,a){if(e instanceof em){var o=Ru().dT(i,a),s=Ru().dp(o);if((e.R&s)!==0){var c=Ru().ck(e.R,o,s),l=e.dr(c),u=e.fm(c);if(u===r&&H().o(l,t)){e.ae.a[1+(c<<1)|0]=n;return}var d=e.cN(c),f=ou().c3(u),p=e.io(l,d,u,f,t,n,r,i,5+a|0);e.p5(s,f,p);return}if((e.aa&s)!==0){var m=Ru().ck(e.aa,o,s),h=e.cL(m),g=h.aF(),_=h.dq();this.es(h,t,n,r,i,5+a|0),e.aG=e.aG+(h.aF()-g|0)|0,e.ba=e.ba+(h.dq()-_|0)|0;return}g_(this,e,s,t,r,i,n)}else if(e instanceof tm){var v=e.ep(t);if(v<0){e.ab=e.ab.dm(new Eg(t,n));return}e.ab=e.ab.dt(v,new Eg(t,n))}else throw new Sg(e)}),M.iw=(function(){return this.ce.aG===0?im().g0:(this.e9===null&&(this.e9=new xS(this.ce)),this.e9)}),M.lB=(function(e){__(this);var t=U().K(e.aZ),n=ou().c3(t);return this.es(this.ce,e.aZ,e.aQ,t,n,0),this}),M.dP=(function(e,t){__(this);var n=U().K(e);return this.es(this.ce,e,t,n,ou().c3(n),0),this}),M.hP=(function(e){if(__(this),e instanceof xS)new by(e,this);else if(Yx(e))e.dS(new pm(((e,t)=>this.dP(e,t))));else for(var t=e.k();t.n();)this.lB(t.l());return this}),M.aV=(function(){return this.iw()}),M.aO=(function(e){return this.lB(e)}),M.aU=(function(e){return this.hP(e)}),new F().i(y_,`scala.collection.immutable.HashMapBuilder`,{fz:1,E:1,G:1,K:1,a6:1});function b_(){this.ea=null,this.l0=null,this.nK()}M=b_.prototype=new N,M.constructor=b_,M.aW=(function(e){}),M.nK=(function(){var e=new Du;this.l0=(X(),SS(new kS,new fm((()=>e.i0())))),this.ea=e}),M.pD=(function(){return this.ea.ie(new fm((()=>X().M))),this.l0}),M.no=(function(e){var t=new Du;return this.ea.ie(new fm((()=>(X(),CS(new kS,e,(X(),SS(new kS,new fm((()=>t.i0()))))))))),this.ea=t,this}),M.nf=(function(e){if(e.w()!==0){var t=new Du;this.ea.ie(new fm((()=>X().mE(e.k(),new fm((()=>t.i0())))))),this.ea=t}return this}),M.aV=(function(){return this.pD()}),M.aO=(function(e){return this.no(e)}),M.aU=(function(e){return this.nf(e)}),new F().i(b_,`scala.collection.immutable.LazyList$LazyBuilder`,{fG:1,E:1,G:1,K:1,a6:1});function x_(e){this.eb=null,this.eb=e}M=x_.prototype=new rh,M.constructor=x_,M.n=(function(){return TS(this.eb)!==X().M}),M.l=(function(){if(TS(this.eb)===X().M)return qp().Q.l();var e=this.eb.y();return this.eb=this.eb.aX(),e}),new F().i(x_,`scala.collection.immutable.LazyList$LazyIterator`,{fI:1,t:1,b:1,c:1,s:1});function S_(){C_=this,$(),$()}M=S_.prototype=new N,M.constructor=S_,M.cH=(function(e){return $().iu(e)}),M.aP=(function(){return new zC}),M.an=(function(e){return $().iu(e)}),new F().i(S_,`scala.collection.immutable.List$`,{fN:1,a:1,C:1,V:1,ag:1});var C_;function w_(){return C_||=new S_,C_}function T_(e,t){if(t===null)throw mg(new hg);return e.ec=t,e.d6=0,e}function E_(){this.d6=0,this.ec=null}M=E_.prototype=new rh,M.constructor=E_;function D_(){}D_.prototype=M,M.n=(function(){return this.d6<2}),M.l=(function(){matchResult5$1:{var e,t=this.d6;if(t===0){var e=new Eg(this.ec.bV,this.ec.d4);break matchResult5$1}if(t===1){var e=new Eg(this.ec.bW,this.ec.d5);break matchResult5$1}var e=qp().Q.l()}return this.d6=1+this.d6|0,e}),M.cJ=(function(e){return this.d6=this.d6+e|0,this});function O_(e,t){if(t===null)throw mg(new hg);return e.d7=t,e.d8=0,e}function k_(){this.d8=0,this.d7=null}M=k_.prototype=new rh,M.constructor=k_;function A_(){}A_.prototype=M,M.n=(function(){return this.d8<3}),M.l=(function(){var e;switch(this.d8){case 0:var e=new Eg(this.d7.bK,this.d7.cu);break;case 1:var e=new Eg(this.d7.bL,this.d7.cv);break;case 2:var e=new Eg(this.d7.bM,this.d7.cw);break;default:var e=qp().Q.l()}return this.d8=1+this.d8|0,e}),M.cJ=(function(e){return this.d8=this.d8+e|0,this});function j_(e,t){if(t===null)throw mg(new hg);return e.cg=t,e.d9=0,e}function M_(){this.d9=0,this.cg=null}M=M_.prototype=new rh,M.constructor=M_;function N_(){}N_.prototype=M,M.n=(function(){return this.d9<4}),M.l=(function(){var e;switch(this.d9){case 0:var e=new Eg(this.cg.bp,this.cg.bX);break;case 1:var e=new Eg(this.cg.bq,this.cg.bY);break;case 2:var e=new Eg(this.cg.br,this.cg.bZ);break;case 3:var e=new Eg(this.cg.bs,this.cg.c0);break;default:var e=qp().Q.l()}return this.d9=1+this.d9|0,e}),M.cJ=(function(e){return this.d9=this.d9+e|0,this});function P_(){this.cx=null,this.eS=!1,this.dK=null,this.cx=mS(),this.eS=!1}M=P_.prototype=new N,M.constructor=P_,M.aW=(function(e){}),M.mA=(function(){return this.eS?this.dK.iw():this.cx}),M.nm=(function(e,t){return this.eS?this.dK.dP(e,t):this.cx.aF()<4||this.cx.bv(e)?this.cx=this.cx.du(e,t):(this.eS=!0,this.dK===null&&(this.dK=new y_),this.cx.nI(this.dK),this.dK.dP(e,t)),this}),M.lw=(function(e){return this.eS?(this.dK.hP(e),this):Af(this,e)}),M.aV=(function(){return this.mA()}),M.aO=(function(e){return this.nm(e.aZ,e.aQ)}),M.aU=(function(e){return this.lw(e)}),new F().i(P_,`scala.collection.immutable.MapBuilderImpl`,{fX:1,E:1,G:1,K:1,a6:1});function F_(){this.cU=null,sh(this,w_())}M=F_.prototype=new lh,M.constructor=F_,M.m7=(function(e){return qx(e)?e:ch.prototype.fk.call(this,e)}),M.fk=(function(e){return this.m7(e)}),M.an=(function(e){return this.m7(e)}),new F().i(F_,`scala.collection.immutable.Seq$`,{g4:1,at:1,a:1,C:1,V:1});var I_;function L_(){return I_||=new F_,I_}function R_(){this.l4=0,this.l5=null,z_=this;try{_u();var e=cf().mj(ml().ia(`scala.collection.immutable.Vector.defaultApplyPreferredMaxLength`,`250`),10,214748364)}catch(t){if(0)var e;else{var e;throw t}}this.l4=e,this.l5=new jy(OC(),0,0)}M=R_.prototype=new N,M.constructor=R_,M.cH=(function(e){return this.i6(e)}),M.i6=(function(e){if(e instanceof US)return e;var t=e.w();if(t===0)return OC();if((t-1|0)>>>0<=31){matchResult3:{var n;if(e instanceof eC){var r=e.a8().aE();if(r!==null&&r===I.l()){var n=e.cd;break matchResult3}}if(xy(e)){var i=new P(t);e.bf(i,0,2147483647);var n=i;break matchResult3}var a=new P(t);e.k().bf(a,0,2147483647);var n=a}return new SC(n)}return new J_().lx(e).mB()}),M.an=(function(e){return this.i6(e)}),M.aP=(function(){return new J_}),new F().i(R_,`scala.collection.immutable.Vector$`,{gb:1,a:1,C:1,V:1,ag:1});var z_;function B_(){return z_||=new R_,z_}function V_(e){var t=null,n=null;if(e.H>=6){t=e.aw;var r=e.D>>>25|0;if(r>0){var i=t,a=t,o=64-r|0;i.u(r,a,0,o)}var s=e.D,c=s>>24>>>7|0,l=(33554431&(s+c|0))-c|0;e.A=e.A-(e.D-l|0)|0,e.D=l,e.A>>>25|0||(e.H=5),n=t,t=t.a[0]}if(e.H>=5){t===null&&(t=e.N);var u=31&(e.D>>>20|0);if(e.H===5){if(u>0){var d=t,f=t,p=32-u|0;d.u(u,f,0,p)}e.N=t;var m=e.D,h=m>>19>>>12|0,g=(1048575&(m+h|0))-h|0;e.A=e.A-(e.D-g|0)|0,e.D=g,e.A>>>20|0||(e.H=4)}else u>0&&(t=z().Z(t,u,32)),n.a[0]=t;n=t,t=t.a[0]}if(e.H>=4){t===null&&(t=e.J);var _=31&(e.D>>>15|0);if(e.H===4){if(_>0){var v=t,y=t,b=32-_|0;v.u(_,y,0,b)}e.J=t;var ee=e.D,te=ee>>14>>>17|0,x=(32767&(ee+te|0))-te|0;e.A=e.A-(e.D-x|0)|0,e.D=x,e.A>>>15|0||(e.H=3)}else _>0&&(t=z().Z(t,_,32)),n.a[0]=t;n=t,t=t.a[0]}if(e.H>=3){t===null&&(t=e.F);var S=31&(e.D>>>10|0);if(e.H===3){if(S>0){var C=t,ne=t,re=32-S|0;C.u(S,ne,0,re)}e.F=t;var ie=e.D,ae=ie>>9>>>22|0,oe=(1023&(ie+ae|0))-ae|0;e.A=e.A-(e.D-oe|0)|0,e.D=oe,e.A>>>10|0||(e.H=2)}else S>0&&(t=z().Z(t,S,32)),n.a[0]=t;n=t,t=t.a[0]}if(e.H>=2){t===null&&(t=e.C);var se=31&(e.D>>>5|0);if(e.H===2){if(se>0){var ce=t,le=t,ue=32-se|0;ce.u(se,le,0,ue)}e.C=t;var de=e.D,fe=de>>4>>>27|0,w=(31&(de+fe|0))-fe|0;e.A=e.A-(e.D-w|0)|0,e.D=w,e.A>>>5|0||(e.H=1)}else se>0&&(t=z().Z(t,se,32)),n.a[0]=t;n=t,t=t.a[0]}if(e.H>=1){t===null&&(t=e.L);var pe=31&e.D;if(e.H===1){if(pe>0){var me=t,he=t,ge=32-pe|0;me.u(pe,he,0,ge)}e.L=t,e.G=e.G-e.D|0,e.D=0}else pe>0&&(t=z().Z(t,pe,32)),n.a[0]=t}e.g1=!1}function H_(e,t){var n=t.a.length;if(n>0){e.G===32&&G_(e);var r=32-e.G|0,i=r<n?r:n,a=n-i|0,o=e.L,s=e.G;if(t.u(0,o,s,i),e.G=e.G+i|0,a>0){G_(e);var c=e.L;t.u(i,c,0,a),e.G=e.G+a|0}}}function U_(e,t,n){if(t.a.length!==0){e.G===32&&G_(e);var r=t.a.length;switch(n){case 2:var i=31&((1024-e.A|0)>>>5|0),a=i<r?i:r,o=r-a|0,s=31&(e.A>>>5|0),c=e.C;if(t.u(0,c,s,a),K_(e,a<<5),o>0){var l=e.C;t.u(a,l,0,o),K_(e,o<<5)}break;case 3:var u=e.A,d=u>>9>>>22|0;if((1023&(u+d|0))-d|0){var f=(t=>{U_(e,t,2)}),p=t.a.length,m=0;if(t!==null)for(;m<p;){var h=t.a[m];f(h),m=1+m|0}else if(t instanceof Za)for(;m<p;){var g=t.a[m];f(g),m=1+m|0}else if(t instanceof eo)for(;m<p;){var _=t.a[m];f(_),m=1+m|0}else if(t instanceof Qa)for(;m<p;){var v=t.a,y=m<<1,b=v[y],ee=v[y+1|0];f(Ba(b,ee)),m=1+m|0}else if(t instanceof $a)for(;m<p;){var te=t.a[m];f(te),m=1+m|0}else if(t instanceof Ja)for(;m<p;){var x=t.a[m];f(za(x)),m=1+m|0}else if(t instanceof Ya)for(;m<p;){var S=t.a[m];f(S),m=1+m|0}else if(t instanceof Xa)for(;m<p;){var C=t.a[m];f(C),m=1+m|0}else if(t instanceof qa)for(;m<p;){var ne=t.a[m];f(ne),m=1+m|0}else throw new Sg(t);return}var re=31&((32768-e.A|0)>>>10|0),ie=re<r?re:r,ae=r-ie|0,oe=31&(e.A>>>10|0),se=e.F;if(t.u(0,se,oe,ie),K_(e,ie<<10),ae>0){var ce=e.F;t.u(ie,ce,0,ae),K_(e,ae<<10)}break;case 4:var le=e.A,ue=le>>14>>>17|0;if((32767&(le+ue|0))-ue|0){var de=(t=>{U_(e,t,3)}),fe=t.a.length,w=0;if(t!==null)for(;w<fe;){var pe=t.a[w];de(pe),w=1+w|0}else if(t instanceof Za)for(;w<fe;){var me=t.a[w];de(me),w=1+w|0}else if(t instanceof eo)for(;w<fe;){var he=t.a[w];de(he),w=1+w|0}else if(t instanceof Qa)for(;w<fe;){var ge=t.a,_e=w<<1,ve=ge[_e],ye=ge[_e+1|0];de(Ba(ve,ye)),w=1+w|0}else if(t instanceof $a)for(;w<fe;){var be=t.a[w];de(be),w=1+w|0}else if(t instanceof Ja)for(;w<fe;){var xe=t.a[w];de(za(xe)),w=1+w|0}else if(t instanceof Ya)for(;w<fe;){var Se=t.a[w];de(Se),w=1+w|0}else if(t instanceof Xa)for(;w<fe;){var Ce=t.a[w];de(Ce),w=1+w|0}else if(t instanceof qa)for(;w<fe;){var we=t.a[w];de(we),w=1+w|0}else throw new Sg(t);return}var Te=31&((1048576-e.A|0)>>>15|0),Ee=Te<r?Te:r,De=r-Ee|0,Oe=31&(e.A>>>15|0),ke=e.J;if(t.u(0,ke,Oe,Ee),K_(e,Ee<<15),De>0){var Ae=e.J;t.u(Ee,Ae,0,De),K_(e,De<<15)}break;case 5:var je=e.A,Me=je>>19>>>12|0;if((1048575&(je+Me|0))-Me|0){var Ne=(t=>{U_(e,t,4)}),Pe=t.a.length,T=0;if(t!==null)for(;T<Pe;){var Fe=t.a[T];Ne(Fe),T=1+T|0}else if(t instanceof Za)for(;T<Pe;){var Ie=t.a[T];Ne(Ie),T=1+T|0}else if(t instanceof eo)for(;T<Pe;){var Le=t.a[T];Ne(Le),T=1+T|0}else if(t instanceof Qa)for(;T<Pe;){var Re=t.a,ze=T<<1,Be=Re[ze],Ve=Re[ze+1|0];Ne(Ba(Be,Ve)),T=1+T|0}else if(t instanceof $a)for(;T<Pe;){var He=t.a[T];Ne(He),T=1+T|0}else if(t instanceof Ja)for(;T<Pe;){var Ue=t.a[T];Ne(za(Ue)),T=1+T|0}else if(t instanceof Ya)for(;T<Pe;){var We=t.a[T];Ne(We),T=1+T|0}else if(t instanceof Xa)for(;T<Pe;){var Ge=t.a[T];Ne(Ge),T=1+T|0}else if(t instanceof qa)for(;T<Pe;){var E=t.a[T];Ne(E),T=1+T|0}else throw new Sg(t);return}var Ke=31&((33554432-e.A|0)>>>20|0),qe=Ke<r?Ke:r,Je=r-qe|0,D=31&(e.A>>>20|0),Ye=e.N;if(t.u(0,Ye,D,qe),K_(e,qe<<20),Je>0){var Xe=e.N;t.u(qe,Xe,0,Je),K_(e,Je<<20)}break;case 6:var Ze=e.A,Qe=Ze>>24>>>7|0;if((33554431&(Ze+Qe|0))-Qe|0){var $e=(t=>{U_(e,t,5)}),et=t.a.length,O=0;if(t!==null)for(;O<et;){var k=t.a[O];$e(k),O=1+O|0}else if(t instanceof Za)for(;O<et;){var tt=t.a[O];$e(tt),O=1+O|0}else if(t instanceof eo)for(;O<et;){var nt=t.a[O];$e(nt),O=1+O|0}else if(t instanceof Qa)for(;O<et;){var rt=t.a,it=O<<1,at=rt[it],ot=rt[it+1|0];$e(Ba(at,ot)),O=1+O|0}else if(t instanceof $a)for(;O<et;){var st=t.a[O];$e(st),O=1+O|0}else if(t instanceof Ja)for(;O<et;){var ct=t.a[O];$e(za(ct)),O=1+O|0}else if(t instanceof Ya)for(;O<et;){var lt=t.a[O];$e(lt),O=1+O|0}else if(t instanceof Xa)for(;O<et;){var ut=t.a[O];$e(ut),O=1+O|0}else if(t instanceof qa)for(;O<et;){var dt=t.a[O];$e(dt),O=1+O|0}else throw new Sg(t);return}var ft=e.A>>>25|0;if((ft+r|0)>64)throw ag(new sg,`exceeding 2^31 elements`);var pt=e.aw;t.u(0,pt,ft,r),K_(e,r<<25);break;default:throw new Sg(n)}}}function W_(e,t){for(var n=t.co(),r=0;r<n;){var i=t.cn(r);matchResult26:{var a=r,o=(n+(n>>>31|0)|0)>>1,s=a-o|0,c=s>>31,l=(1+o|0)-((s^c)-c|0)|0;if(l===1){H_(e,i);break matchResult26}if(e.G===32||e.G===0){U_(e,i,l);break matchResult26}V().i2(l-2|0,i,new J((t=>{H_(e,t)})))}r=1+r|0}return e}function G_(e){var t=32+e.A|0,n=t^e.A;e.A=t,e.G=0,q_(e,t,n)}function K_(e,t){if(t>0){var n=e.A+t|0,r=n^e.A;e.A=n,e.G=0,q_(e,n,r)}}function q_(e,t,n){if(n<=0)throw ag(new sg,`advance1(`+t+`, `+n+`): a1=`+e.L+`, a2=`+e.C+`, a3=`+e.F+`, a4=`+e.J+`, a5=`+e.N+`, a6=`+e.aw+`, depth=`+e.H);n<1024?(e.H<=1&&(e.C=new(I.r().r()).C(32),e.C.a[0]=e.L,e.H=2),e.L=new P(32),e.C.a[31&(t>>>5|0)]=e.L):n<32768?(e.H<=2&&(e.F=new(I.r().r().r()).C(32),e.F.a[0]=e.C,e.H=3),e.L=new P(32),e.C=new(I.r().r()).C(32),e.C.a[31&(t>>>5|0)]=e.L,e.F.a[31&(t>>>10|0)]=e.C):n<1048576?(e.H<=3&&(e.J=new(I.r().r().r().r()).C(32),e.J.a[0]=e.F,e.H=4),e.L=new P(32),e.C=new(I.r().r()).C(32),e.F=new(I.r().r().r()).C(32),e.C.a[31&(t>>>5|0)]=e.L,e.F.a[31&(t>>>10|0)]=e.C,e.J.a[31&(t>>>15|0)]=e.F):n<33554432?(e.H<=4&&(e.N=new(I.r().r().r().r().r()).C(32),e.N.a[0]=e.J,e.H=5),e.L=new P(32),e.C=new(I.r().r()).C(32),e.F=new(I.r().r().r()).C(32),e.J=new(I.r().r().r().r()).C(32),e.C.a[31&(t>>>5|0)]=e.L,e.F.a[31&(t>>>10|0)]=e.C,e.J.a[31&(t>>>15|0)]=e.F,e.N.a[31&(t>>>20|0)]=e.J):(e.H<=5&&(e.aw=new(I.r().r().r().r().r().r()).C(64),e.aw.a[0]=e.N,e.H=6),e.L=new P(32),e.C=new(I.r().r()).C(32),e.F=new(I.r().r().r()).C(32),e.J=new(I.r().r().r().r()).C(32),e.N=new(I.r().r().r().r().r()).C(32),e.C.a[31&(t>>>5|0)]=e.L,e.F.a[31&(t>>>10|0)]=e.C,e.J.a[31&(t>>>15|0)]=e.F,e.N.a[31&(t>>>20|0)]=e.J,e.aw.a[t>>>25|0]=e.N)}function J_(){this.aw=null,this.N=null,this.J=null,this.F=null,this.C=null,this.L=null,this.G=0,this.A=0,this.D=0,this.g1=!1,this.H=0,this.L=new P(32),this.G=0,this.A=0,this.D=0,this.g1=!1,this.H=1}M=J_.prototype=new N,M.constructor=J_,M.aW=(function(e){}),M.oL=(function(e){var t=e.co();switch(t){case 0:break;case 1:this.H=1;var n=e.e.a.length;this.G=31&n,this.A=n-this.G|0;var r=e.e;this.L=r.a.length===32?r:z().Z(r,0,32);break;case 3:var i=e.b6,a=e.h;this.L=a.a.length===32?a:z().Z(a,0,32),this.H=2,this.D=32-e.bu|0;var o=e.j+this.D|0;this.G=31&o,this.A=o-this.G|0,this.C=new(I.r().r()).C(32),this.C.a[0]=e.e;var s=this.C,c=i.a.length;i.u(0,s,1,c),this.C.a[1+i.a.length|0]=this.L;break;case 5:var l=e.aJ,u=e.aK,d=e.h;this.L=d.a.length===32?d:z().Z(d,0,32),this.H=3,this.D=1024-e.b2|0;var f=e.j+this.D|0;this.G=31&f,this.A=f-this.G|0,this.F=new(I.r().r().r()).C(32),this.F.a[0]=V().cj(e.e,e.bd);var p=this.F,m=l.a.length;l.u(0,p,1,m),this.C=z().P(u,32),this.F.a[1+l.a.length|0]=this.C,this.C.a[u.a.length]=this.L;break;case 7:var h=e.aq,g=e.as,_=e.ar,v=e.h;this.L=v.a.length===32?v:z().Z(v,0,32),this.H=4,this.D=32768-e.aB|0;var y=e.j+this.D|0;this.G=31&y,this.A=y-this.G|0,this.J=new(I.r().r().r().r()).C(32),this.J.a[0]=V().cj(V().cj(e.e,e.aR),e.aS);var b=this.J,ee=h.a.length;h.u(0,b,1,ee),this.F=z().P(g,32),this.C=z().P(_,32),this.J.a[1+h.a.length|0]=this.F,this.F.a[g.a.length]=this.C,this.C.a[_.a.length]=this.L;break;case 9:var te=e.a0,x=e.a3,S=e.a2,C=e.a1,ne=e.h;this.L=ne.a.length===32?ne:z().Z(ne,0,32),this.H=5,this.D=1048576-e.ai|0;var re=e.j+this.D|0;this.G=31&re,this.A=re-this.G|0,this.N=new(I.r().r().r().r().r()).C(32),this.N.a[0]=V().cj(V().cj(V().cj(e.e,e.at),e.au),e.av);var ie=this.N,ae=te.a.length;te.u(0,ie,1,ae),this.J=z().P(x,32),this.F=z().P(S,32),this.C=z().P(C,32),this.N.a[1+te.a.length|0]=this.J,this.J.a[x.a.length]=this.F,this.F.a[S.a.length]=this.C,this.C.a[C.a.length]=this.L;break;case 11:var oe=e.S,se=e.W,ce=e.V,le=e.U,ue=e.T,de=e.h;this.L=de.a.length===32?de:z().Z(de,0,32),this.H=6,this.D=33554432-e.ac|0;var fe=e.j+this.D|0;this.G=31&fe,this.A=fe-this.G|0,this.aw=new(I.r().r().r().r().r().r()).C(64),this.aw.a[0]=V().cj(V().cj(V().cj(V().cj(e.e,e.aj),e.ak),e.al),e.am);var w=this.aw,pe=oe.a.length;oe.u(0,w,1,pe),this.N=z().P(se,32),this.J=z().P(ce,32),this.F=z().P(le,32),this.C=z().P(ue,32),this.aw.a[1+oe.a.length|0]=this.N,this.N.a[se.a.length]=this.J,this.J.a[ce.a.length]=this.F,this.F.a[le.a.length]=this.C,this.C.a[ue.a.length]=this.L;break;default:throw new Sg(t)}return this.G===0&&this.A>0&&(this.G=32,this.A=this.A-32|0),this}),M.np=(function(e){return this.G===32&&G_(this),this.L.a[this.G]=e,this.G=1+this.G|0,this}),M.lx=(function(e){return e instanceof US?this.G===0&&this.A===0&&!this.g1?this.oL(e):W_(this,e):Af(this,e)}),M.mB=(function(){this.g1&&V_(this);var e=this.G+this.A|0,t=e-this.D|0;if(t===0)return B_(),OC();if(e<0)throw lg(new dg,`Vector cannot have negative size `+e);if(e<=32){var n=this.L;return new SC(n.a.length===t?n:z().P(n,t))}if(e<=1024){var r=31&(e-1|0),i=(e-1|0)>>>5|0,a=z().Z(this.C,1,i),o=this.C.a[0],s=this.C.a[i],c=1+r|0,l=s.a.length===c?s:z().P(s,c);return new kC(o,32-this.D|0,a,l,t)}if(e<=32768){var u=31&(e-1|0),d=31&((e-1|0)>>>5|0),f=(e-1|0)>>>10|0,p=z().Z(this.F,1,f),m=this.F.a[0],h=z().Z(m,1,m.a.length),g=this.F.a[0].a[0],_=z().P(this.F.a[f],d),v=this.F.a[f].a[d],y=1+u|0,b=v.a.length===y?v:z().P(v,y),ee=g.a.length;return new AC(g,ee,h,ee+(h.a.length<<5)|0,p,_,b,t)}if(e<=1048576){var te=31&(e-1|0),x=31&((e-1|0)>>>5|0),S=31&((e-1|0)>>>10|0),C=(e-1|0)>>>15|0,ne=z().Z(this.J,1,C),re=this.J.a[0],ie=z().Z(re,1,re.a.length),ae=this.J.a[0].a[0],oe=z().Z(ae,1,ae.a.length),se=this.J.a[0].a[0].a[0],ce=z().P(this.J.a[C],S),le=z().P(this.J.a[C].a[S],x),ue=this.J.a[C].a[S].a[x],de=1+te|0,fe=ue.a.length===de?ue:z().P(ue,de),w=se.a.length,pe=w+(oe.a.length<<5)|0;return new jC(se,w,oe,pe,ie,pe+(ie.a.length<<10)|0,ne,ce,le,fe,t)}if(e<=33554432){var me=31&(e-1|0),he=31&((e-1|0)>>>5|0),ge=31&((e-1|0)>>>10|0),_e=31&((e-1|0)>>>15|0),ve=(e-1|0)>>>20|0,ye=z().Z(this.N,1,ve),be=this.N.a[0],xe=z().Z(be,1,be.a.length),Se=this.N.a[0].a[0],Ce=z().Z(Se,1,Se.a.length),we=this.N.a[0].a[0].a[0],Te=z().Z(we,1,we.a.length),Ee=this.N.a[0].a[0].a[0].a[0],De=z().P(this.N.a[ve],_e),Oe=z().P(this.N.a[ve].a[_e],ge),ke=z().P(this.N.a[ve].a[_e].a[ge],he),Ae=this.N.a[ve].a[_e].a[ge].a[he],je=1+me|0,Me=Ae.a.length===je?Ae:z().P(Ae,je),Ne=Ee.a.length,Pe=Ne+(Te.a.length<<5)|0,T=Pe+(Ce.a.length<<10)|0;return new MC(Ee,Ne,Te,Pe,Ce,T,xe,T+(xe.a.length<<15)|0,ye,De,Oe,ke,Me,t)}var Fe=31&(e-1|0),Ie=31&((e-1|0)>>>5|0),Le=31&((e-1|0)>>>10|0),Re=31&((e-1|0)>>>15|0),ze=31&((e-1|0)>>>20|0),Be=(e-1|0)>>>25|0,Ve=z().Z(this.aw,1,Be),He=this.aw.a[0],Ue=z().Z(He,1,He.a.length),We=this.aw.a[0].a[0],Ge=z().Z(We,1,We.a.length),E=this.aw.a[0].a[0].a[0],Ke=z().Z(E,1,E.a.length),qe=this.aw.a[0].a[0].a[0].a[0],Je=z().Z(qe,1,qe.a.length),D=this.aw.a[0].a[0].a[0].a[0].a[0],Ye=z().P(this.aw.a[Be],ze),Xe=z().P(this.aw.a[Be].a[ze],Re),Ze=z().P(this.aw.a[Be].a[ze].a[Re],Le),Qe=z().P(this.aw.a[Be].a[ze].a[Re].a[Le],Ie),$e=this.aw.a[Be].a[ze].a[Re].a[Le].a[Ie],et=1+Fe|0,O=$e.a.length===et?$e:z().P($e,et),k=D.a.length,tt=k+(Je.a.length<<5)|0,nt=tt+(Ke.a.length<<10)|0,rt=nt+(Ge.a.length<<15)|0;return new NC(D,k,Je,tt,Ke,nt,Ge,rt,Ue,rt+(Ue.a.length<<20)|0,Ve,Ye,Xe,Ze,Qe,O,t)}),M.x=(function(){return`VectorBuilder(len1=`+this.G+`, lenRest=`+this.A+`, offset=`+this.D+`, depth=`+this.H+`)`}),M.aO=(function(e){return this.np(e)}),M.aU=(function(e){return this.lx(e)}),M.aV=(function(){return this.mB()}),new F().i(J_,`scala.collection.immutable.VectorBuilder`,{gj:1,E:1,G:1,K:1,a6:1});function Y_(){this.l7=null,X_=this,this.l7=new P(0)}M=Y_.prototype=new N,M.constructor=Y_,M.cH=(function(e){return this.m8(e)}),M.m8=(function(e){var t=e.w();if(t>=0){var n=this.mF(this.l7,0,t),r=kg(e)?e.bf(n,0,2147483647):e.k().bf(n,0,2147483647);if(r!==t)throw new cg(`Copied `+r+` of `+t);return BC(new HC,n,t)}return VC(new HC).ly(e)}),M.aP=(function(){return new Q_}),M.pC=(function(e,t){if(t<0)throw qm(new Jm,`Overflow while resizing array of array-backed collection. Requested length: `+t+`; current length: `+e+`; increase: `+(t-e|0));if(t<=e)return-1;if(t>2147483639)throw qm(new Jm,`Array of array-backed collection exceeds VM length limit of 2147483639. Requested length: `+t+`; current length: `+e);if(e>1073741819)return 2147483639;var n=e<<1,r=n>16?n:16;return t>r?t:r}),M.mF=(function(e,t,n){var r=this.pC(e.a.length,n);if(r<0)return e;var i=new P(r);return e.u(0,i,0,t),i}),M.an=(function(e){return this.m8(e)}),new F().i(Y_,`scala.collection.mutable.ArrayBuffer$`,{go:1,a:1,C:1,V:1,ag:1});var X_;function Z_(){return X_||=new Y_,X_}function Q_(){this.dh=null,Sh(this,(Z_(),VC(new HC)))}M=Q_.prototype=new wh,M.constructor=Q_,M.aW=(function(e){this.dh.aW(e)}),new F().i(Q_,`scala.collection.mutable.ArrayBuffer$$anon$1`,{gp:1,aQ:1,E:1,G:1,K:1});function $_(){this.cU=null,sh(this,Sv())}M=$_.prototype=new lh,M.constructor=$_,new F().i($_,`scala.collection.mutable.Buffer$`,{gv:1,at:1,a:1,C:1,V:1});var ev;function tv(){return ev||=new $_,ev}function nv(e,t){this.dh=null,Sh(this,MS(new zS,e,t))}M=nv.prototype=new wh,M.constructor=nv,M.aW=(function(e){this.dh.aW(e)}),new F().i(nv,`scala.collection.mutable.HashSet$$anon$4`,{gD:1,aQ:1,E:1,G:1,K:1});function rv(e,t){if(t===null)throw mg(new hg);return e.eW=t,e.dj=0,e.cC=null,e.eX=t.aL.a.length,e}function iv(){this.dj=0,this.cC=null,this.eX=0,this.eW=null}M=iv.prototype=new rh,M.constructor=iv;function av(){}av.prototype=M,M.n=(function(){if(this.cC!==null)return!0;for(;this.dj<this.eX;){var e=this.eW.aL.a[this.dj];if(this.dj=1+this.dj|0,e!==null)return this.cC=e,!0}return!1}),M.l=(function(){if(this.n()){var e=this.cC;e===null&&rd().c8();var t=this.i1(e),n=this.cC;return n===null&&rd().c8(),this.cC=n.aM,t}return qp().Q.l()});function ov(e,t){return e.eY=t,e}function sv(){this.eY=null}M=sv.prototype=new N,M.constructor=sv;function cv(){}cv.prototype=M,M.aU=(function(e){return Af(this,e)}),M.aW=(function(e){}),M.aV=(function(){return this.eY});function lv(){this.cU=null,sh(this,Z_())}M=lv.prototype=new lh,M.constructor=lv,new F().i(lv,`scala.collection.mutable.IndexedSeq$`,{gG:1,at:1,a:1,C:1,V:1});var uv;function dv(){return uv||=new lv,uv}function fv(){}M=fv.prototype=new N,M.constructor=fv,M.cH=(function(e){return new zC().gp(e)}),M.aP=(function(){return Sh(new Ch,new zC)}),M.an=(function(e){return new zC().gp(e)}),new F().i(fv,`scala.collection.mutable.ListBuffer$`,{gJ:1,a:1,C:1,V:1,ag:1});var pv;function mv(){return pv||=new fv,pv}function hv(e,t){this.hI=null,this.lh=null,this.lg=0,this.hI=e,this.lh=t,this.lg=t.X()|0}M=hv.prototype=new rh,M.constructor=hv,M.n=(function(){return Ju().lM(this.lg,this.lh.X()|0,`mutation occurred during iteration`),this.hI.n()}),M.l=(function(){return this.hI.l()}),new F().i(hv,`scala.collection.mutable.MutationTracker$CheckedIterator`,{gL:1,t:1,b:1,c:1,s:1});function gv(e,t){if(vv(t)){var n=e.aE(),r=t.aE();return n===null?r===null:n===r}return!1}function _v(e,t){return t.a9.Z?`Array[`+_v(e,t.a9.Q())+`]`:t.a9.N}function vv(e){return!!(e&&e.$classData&&e.$classData.n.D)}function yv(e){this.lm=null,this.f0=0,this.ll=0,this.lm=e,this.f0=0,this.ll=e.bi()}M=yv.prototype=new rh,M.constructor=yv,M.n=(function(){return this.f0<this.ll}),M.l=(function(){var e=this.lm.bj(this.f0);return this.f0=1+this.f0|0,e}),new F().i(yv,`scala.runtime.ScalaRunTime$$anon$1`,{hs:1,t:1,b:1,c:1,s:1});function bv(){}M=bv.prototype=new N,M.constructor=bv,M.cH=(function(e){return this.m9(e)}),M.aP=(function(){return WC(new GC)}),M.m9=(function(e){return Af(WC(new GC),e).aV()}),M.an=(function(e){return this.m9(e)}),new F().i(bv,`scala.scalajs.js.WrappedArray$`,{hy:1,ag:1,a:1,C:1,V:1});var xv;function Sv(){return xv||=new bv,xv}function Cv(){}M=Cv.prototype=new N,M.constructor=Cv,M.cH=(function(e){return this.i7(e)}),M.i7=(function(e){return this.aP().aU(e).aV()}),M.aP=(function(){return new xh(new J((e=>new Q(e.dk))),UC(new GC,[]))}),M.an=(function(e){return this.i7(e)}),new F().i(Cv,`scala.scalajs.runtime.WrappedVarArgs$`,{hK:1,ag:1,a:1,C:1,V:1});var wv;function Tv(){return wv||=new Cv,wv}function Ev(e){this.f1=null,this.f1=e}M=Ev.prototype=new kh,M.constructor=Ev,M.v=(function(){return G().fv(this,-1408943127,!0)}),M.p=(function(e){if(this===e)return!0;if(e instanceof Ev){var t=this.f1,n=e.f1;return t===null?n===null:t.p(n)}return!1}),M.x=(function(){return od().hN(this)}),M.bi=(function(){return 1}),M.bk=(function(){return`Failure`}),M.bj=(function(e){if(e===0)return this.f1;throw ug(new dg,e)}),M.mh=(function(){return!0}),M.mi=(function(){return!1}),M.ij=(function(e){return this}),M.cK=(function(e,t){return e.c(this.f1)}),new F().i(Ev,`scala.util.Failure`,{ci:1,ck:1,d:1,U:1,a:1});function Dv(e){this.ej=null,this.ej=e}M=Dv.prototype=new kh,M.constructor=Dv,M.v=(function(){return G().fv(this,-1750213842,!0)}),M.p=(function(e){return this===e||e instanceof Dv&&H().o(this.ej,e.ej)}),M.x=(function(){return od().hN(this)}),M.bi=(function(){return 1}),M.bk=(function(){return`Success`}),M.bj=(function(e){if(e===0)return this.ej;throw ug(new dg,e)}),M.mh=(function(){return!1}),M.mi=(function(){return!0}),M.ij=(function(e){try{return new Dv(e.c(this.ej))}catch(e){var t=e instanceof vf?e:new Qy(e),n=wd().gs(t);if(!n.d())return new Ev(n.I());throw t instanceof Qy?t.aC:t}}),M.cK=(function(e,t){try{return t.c(this.ej)}catch(t){var n=t instanceof vf?t:new Qy(t),r=wd().gs(n);if(!r.d()){var i=r.I();return e.c(i)}throw n instanceof Qy?n.aC:n}}),new F().i(Dv,`scala.util.Success`,{cj:1,ck:1,d:1,U:1,a:1});var Ov=class e extends Gf{constructor(e,t){super(),this.ex=null,this.ew=null,this.ex=e,this.ew=t,_f(this,`ErrorHandlingError: `+Jf().eo(e)+`; cause: `+Jf().eo(t),null,!0,!0),this.mf(t)}cl(){return new Tg(this)}v(){return G().hU(this,-889275714,null)}p(t){if(this===t)return!0;if(t instanceof e){var n=this.ex,r=t.ex;if(n===null?r===null:n.p(r)){var i=this.ew,a=t.ew;return i===null?a===null:i.p(a)}return!1}return!1}bi(){return 2}bk(){return`ErrorHandlingError`}bj(e){if(e===0)return this.ex;if(e===1)return this.ew;throw lg(new dg,``+e)}x(){return`ErrorHandlingError: `+this.ex+`; cause: `+this.ew}};new F().i(Ov,`com.raquo.airstream.core.AirstreamError$ErrorHandlingError`,{aS:1,ap:1,w:1,a:1,d:1,U:1});var kv=class e extends Gf{constructor(e){super(),this.ey=null,this.ey=e,_f(this,`ObserverError: `+Jf().eo(e),null,!0,!0)}cl(){return new Tg(this)}v(){return G().hU(this,-889275714,null)}p(t){if(this===t)return!0;if(t instanceof e){var n=this.ey,r=t.ey;return n===null?r===null:n.p(r)}return!1}bi(){return 1}bk(){return`ObserverError`}bj(e){if(e===0)return this.ey;throw lg(new dg,``+e)}x(){return`ObserverError: `+this.ey}};new F().i(kv,`com.raquo.airstream.core.AirstreamError$ObserverError`,{aT:1,ap:1,w:1,a:1,d:1,U:1});var Av=class e extends Gf{constructor(e,t){super(),this.eA=null,this.ez=null,this.eA=e,this.ez=t,_f(this,`ObserverErrorHandlingError: `+Jf().eo(e)+`; cause: `+Jf().eo(t),null,!0,!0),this.mf(t)}cl(){return new Tg(this)}v(){return G().hU(this,-889275714,null)}p(t){if(this===t)return!0;if(t instanceof e){var n=this.eA,r=t.eA;if(n===null?r===null:n.p(r)){var i=this.ez,a=t.ez;return i===null?a===null:i.p(a)}return!1}return!1}bi(){return 2}bk(){return`ObserverErrorHandlingError`}bj(e){if(e===0)return this.eA;if(e===1)return this.ez;throw lg(new dg,``+e)}x(){return`ObserverErrorHandlingError: `+this.eA+`; cause: `+this.ez}};new F().i(Av,`com.raquo.airstream.core.AirstreamError$ObserverErrorHandlingError`,{aU:1,ap:1,w:1,a:1,d:1,U:1});var jv=class e extends Gf{constructor(e,t){super(),this.dX=null,this.dW=0,this.dX=e,this.dW=t,_f(this,`Transaction depth exceeded maxDepth = `+t+`: Execution of `+e+" aborted. See `Transaction.maxDepth`.",null,!0,!0)}cl(){return new Tg(this)}v(){var e=-889275714;return e=U().z(e,Yv(`TransactionDepthExceeded`)),e=U().z(e,U().K(this.dX)),e=U().z(e,this.dW),U().ax(e,2)}p(t){if(this===t)return!0;if(t instanceof e){if(this.dW===t.dW){var n=this.dX,r=t.dX;return n===null?r===null:n===r}return!1}return!1}bi(){return 2}bk(){return`TransactionDepthExceeded`}bj(e){if(e===0)return this.dX;if(e===1)return this.dW;throw lg(new dg,``+e)}x(){return`TransactionDepthExceeded: `+this.dX+`; maxDepth: `+this.dW}};new F().i(jv,`com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded`,{aV:1,ap:1,w:1,a:1,d:1,U:1});function Mv(e){e.gr()}function Nv(e){this.j1=null,this.fF=null,this.gH=null,this.gG=null,this.gI=null,this.j1=void 0,Bh(this),this.gH=e,this.gG=new _x(this.gH,new Th((()=>ho(this)))),this.gI=this.gG}M=Nv.prototype=new N,M.constructor=Nv,M.fp=(function(){return this.j1}),M.fh=(function(){return mo(this)}),M.x=(function(){return ho(this)}),M.gq=(function(){return this.gI}),M.iA=(function(){return this.fF}),M.pG=(function(e,t){this.gH=e,rb(this.gG,e,t)}),new F().i(Nv,`com.raquo.airstream.state.SourceVar`,{cF:1,ay:1,az:1,aq:1,ab:1,cH:1});function Pv(e,t){var n=e.ha;n===void 0?e.ha=dd().nB(ls().b8(od().b4(new(Qv.r()).C([t])))):n.push(t)|0}function Fv(e,t){var n=e.jS;if(n!==void 0){_return:{for(var r=n.length|0,i=0;i<r;){if(n[i].ql()===t){var a=i;break _return}i=1+i|0}var a=-1}return a>=0}return!1}function Iv(e,t){this.eB=null,this.bG=null,this.h9=null,this.dA=null,this.eC=null,this.hb=null,this.by=null,this.jS=null,this.ha=null,this.hb=e,this.by=t,this.eB=ty(),qd(this),Gh(this),this.jS=void 0,this.ha=void 0}M=Iv.prototype=new N,M.constructor=Iv,M.hV=(function(){return this.eB}),M.b7=(function(e){bc().ek(e,this,void 0)}),M.gf=(function(){return this.bG}),M.lQ=(function(e){this.bG=e}),M.ev=(function(e){Xh(this,e)}),M.eq=(function(e){Zh(this,e)}),M.nP=(function(){if(hs().mg(this.by)){var e=this.hb;return e instanceof up?e.nv():void 0}return Is().jD}),M.oO=(function(e){var t=this.nP();return t!==void 0&&fs().oI(t,e,0)}),M.pc=(function(e){if(e instanceof Rd&&this.oO(e.dy)){if(Fv(this,e.dy))throw Dp(new Op,"Can not add uncontrolled `"+e.dy+" <-- ???` to element `"+hs().lT(this.by)+"` that already has an input controller for `"+e.dy+"` property.");Pv(this,e.dy)}}),M.x=(function(){return`ReactiveHtmlElement(`+(this.by===null?`tag=`+this.hb.ip():this.by.outerHTML)+`)`}),M.b9=(function(){return this.by}),new F().i(Iv,`com.raquo.laminar.nodes.ReactiveHtmlElement`,{dR:1,as:1,P:1,aB:1,ba:1,dP:1});function Lv(e,t){return _f(e,t,null,!0,!0),e}function Rv(e){return _f(e,null,null,!0,!0),e}var zv=class extends dg{};new F().i(zv,`java.lang.ArrayIndexOutOfBoundsException`,{ea:1,bl:1,Q:1,I:1,w:1,a:1});function Bv(e,t){return Object.is(e,t)}function Vv(e){var t=e|0;if(t===e&&1/e!=-1/0)return t;if(e!==e)return 2146959360;var n=Aa;return n.setFloat64(0,e,!0),(n.getInt32(0,!0)|0)^(n.getInt32(4,!0)|0)}var Hv=new F().i(0,`java.lang.Double`,{bj:1,a7:1,a:1,a1:1,Z:1,al:1},(e=>typeof e==`number`)),Uv=new F().i(0,`java.lang.Float`,{eg:1,a7:1,a:1,a1:1,Z:1,al:1},(e=>Ra(e))),Wv=new F().i(0,`java.lang.Integer`,{ei:1,a7:1,a:1,a1:1,Z:1,al:1},(e=>La(e)));function Gv(e,t,n){if(n instanceof xa){var r=n,i=r.l,a=r.h;return(e^i|t^a)===0}return!1}function Kv(e,t){return e^t}var qv=new F().i(0,`java.lang.Long`,{bm:1,a7:1,a:1,a1:1,Z:1,al:1},(e=>e instanceof xa)),Jv=class extends sg{constructor(e){super(),_f(this,e,null,!0,!0)}};new F().i(Jv,`java.lang.NumberFormatException`,{ep:1,bk:1,Q:1,I:1,w:1,a:1});function Yv(e){for(var t=e.length,n=0,r=0;r!==t;)n=((n<<5)-n|0)+e.charCodeAt(r)|0,r=1+r|0;return n}function Xv(e,t){return e===t}function Zv(e,t){var n=af().pZ(t);return e.indexOf(n)|0}var Qv=new F().i(0,`java.lang.String`,{bo:1,a:1,a1:1,aD:1,Z:1,al:1},(e=>typeof e==`string`));function $v(){}M=$v.prototype=new wg,M.constructor=$v,M.v=(function(){return 2433880}),M.x=(function(){return`None`}),M.bi=(function(){return 0}),M.bk=(function(){return`None`}),M.bj=(function(e){throw ug(new dg,e)}),M.oy=(function(){throw new yg(`None.get`)}),M.I=(function(){this.oy()}),new F().i($v,`scala.None$`,{eW:1,br:1,b:1,d:1,U:1,a:1});var ey;function ty(){return ey||=new $v,ey}function ny(e){this.eI=null,this.eI=e}M=ny.prototype=new wg,M.constructor=ny,M.v=(function(){return G().fv(this,1323286827,!0)}),M.p=(function(e){return this===e||e instanceof ny&&H().o(this.eI,e.eI)}),M.x=(function(){return od().hN(this)}),M.bi=(function(){return 1}),M.bk=(function(){return`Some`}),M.bj=(function(e){if(e===0)return this.eI;throw ug(new dg,e)}),M.I=(function(){return this.eI}),new F().i(ny,`scala.Some`,{bs:1,br:1,b:1,d:1,U:1,a:1});function ry(){}M=ry.prototype=new N,M.constructor=ry;function iy(){}iy.prototype=M,M.w=(function(){return-1}),M.bE=(function(e){su(this,e)}),M.em=(function(e){return cu(this,e)}),M.d=(function(){return lu(this)}),M.bf=(function(e,t,n){return uu(this,e,t,n)}),M.ci=(function(e,t,n,r){return fu(this,e,t,n,r)}),M.fl=(function(e){return this.bg().an(e)}),M.fq=(function(){return this.bg().aP()}),M.bD=(function(){return this.bl()}),M.en=(function(e){return this.fl(e)});function ay(e){this.fU=null,this.cp=0,this.eJ=0,this.fU=e,this.cp=0,this.eJ=Ol().bF(this.fU)}M=ay.prototype=new rh,M.constructor=ay,M.w=(function(){return this.eJ-this.cp|0}),M.n=(function(){return this.cp<this.eJ}),M.l=(function(){this.cp>=Ol().bF(this.fU)&&qp().Q.l();var e=od().dR(this.fU,this.cp);return this.cp=1+this.cp|0,e}),M.cJ=(function(e){if(e>0){var t=this.cp+e|0;if(t<0)var n=this.eJ;else var r=this.eJ,n=r<t?r:t;this.cp=n}return this}),new F().i(ay,`scala.collection.ArrayOps$ArrayIterator`,{f6:1,t:1,b:1,c:1,s:1,a:1});function oy(e,t){return e.hp=t,e.cq=0,e.b5=t.q(),e}function sy(e,t){return t<0?0:t>e.b5?e.b5:t}function cy(){this.hp=null,this.cq=0,this.b5=0}M=cy.prototype=new rh,M.constructor=cy;function ly(){}ly.prototype=M,M.w=(function(){return this.b5}),M.n=(function(){return this.b5>0}),M.l=(function(){if(this.b5>0){var e=this.hp.s(this.cq);return this.cq=1+this.cq|0,this.b5=this.b5-1|0,e}return qp().Q.l()}),M.cJ=(function(e){if(e>0){this.cq=this.cq+e|0;var t=this.b5-e|0;this.b5=t<0?0:t}return this}),M.fx=(function(e,t){var n=sy(this,e),r=sy(this,t)-n|0;return this.b5=r<0?0:r,this.cq=this.cq+n|0,this}),new F().i(cy,`scala.collection.IndexedSeqView$IndexedSeqViewIterator`,{by:1,t:1,b:1,c:1,s:1,a:1});function uy(){this.eY=null,ov(this,qp().Q)}M=uy.prototype=new cv,M.constructor=uy,M.nn=(function(e){return this.eY=this.eY.ge(new fm((()=>new jg(e)))),this}),M.aO=(function(e){return this.nn(e)}),new F().i(uy,`scala.collection.Iterator$$anon$21`,{ff:1,gF:1,E:1,G:1,K:1,a6:1});function dy(e,t,n){return e.cM(t,new fm((()=>n.c(t))))}function fy(e,t){for(var n=e.k();n.n();){var r=n.l();t.cG(r.aZ,r.aQ)}}function py(e,t,n,r,i){return fu(new Ng(new J((e=>{var t=e.aZ,n=e.aQ;return t+` -> `+n})),e.k()),t,n,r,i)}function my(e,t){for(var n=e.fq(),r=NS(new zS),i=e.k();i.n();){var a=i.l();r.ga(t.c(a))&&n.aO(a)}return n.aV()}function hy(e,t){var n=e.ds().aP();return n.aU(e),n.aU(t),n.aV()}function gy(e){return e.kW||=(e.kV=new eC(new(gm.r()).C(0)),!0),e.kV}function _y(){this.ht=null,this.kV=null,this.kW=!1,vy=this,this.ht=new Dg(this)}M=_y.prototype=new N,M.constructor=_y,M.i4=(function(e,t){return e instanceof BS?e:this.iC(Vl().m5(e,t))}),M.gk=(function(e){return new xh(new J((t=>this.iC(pu(t,e)))),(Z_(),new Q_))}),M.iC=(function(e){if(e===null)return null;if(e instanceof P)return new eC(e);if(e instanceof Za)return new QS(e);if(e instanceof eo)return new XS(e);if(e instanceof Qa)return new $S(e);if(e instanceof $a)return new ZS(e);if(e instanceof Ja)return new YS(e);if(e instanceof Ya)return new JS(e);if(e instanceof Xa)return new tC(e);if(e instanceof qa)return new qS(e);if(Cl(e,1))return new nC(e);throw new Sg(e)}),M.i3=(function(e,t){return this.i4(e,t)}),new F().i(_y,`scala.collection.immutable.ArraySeq$`,{fw:1,a:1,bw:1,bu:1,bv:1,bB:1});var vy;function yy(){return vy||=new _y,vy}function by(e,t){if(this.bA=0,this.eO=0,this.dI=null,this.bo=0,this.ct=null,this.eP=null,t===null)throw mg(new hg);for($g(this,e.bb);this.n();){var n=this.dI.fm(this.bA);t.es(t.ce,this.dI.dr(this.bA),this.dI.cN(this.bA),n,ou().c3(n),0),this.bA=1+this.bA|0}}M=by.prototype=new a_,M.constructor=by,M.l=(function(){return qp().Q.l()}),new F().i(by,`scala.collection.immutable.HashMapBuilder$$anon$1`,{fA:1,bO:1,t:1,b:1,c:1,s:1});function xy(e){return!!(e&&e.$classData&&e.$classData.n.r)}function Sy(e){if(this.d6=0,this.ec=null,e===null)throw mg(new hg);T_(this,e)}M=Sy.prototype=new D_,M.constructor=Sy,new F().i(Sy,`scala.collection.immutable.Map$Map2$$anon$1`,{fR:1,fS:1,t:1,b:1,c:1,s:1});function Cy(e){if(this.d8=0,this.d7=null,e===null)throw mg(new hg);O_(this,e)}M=Cy.prototype=new A_,M.constructor=Cy,new F().i(Cy,`scala.collection.immutable.Map$Map3$$anon$4`,{fT:1,fU:1,t:1,b:1,c:1,s:1});function wy(e){if(this.d9=0,this.cg=null,e===null)throw mg(new hg);j_(this,e)}M=wy.prototype=new N_,M.constructor=wy,new F().i(wy,`scala.collection.immutable.Map$Map4$$anon$7`,{fV:1,fW:1,t:1,b:1,c:1,s:1});function Ty(e){this.d2=0,this.fZ=null,this.bB=0,this.eQ=null,this.eR=null,this.hw=0,this.l1=null,s_(this,e),this.hw=0}M=Ty.prototype=new p_,M.constructor=Ty,M.v=(function(){return G().mL(this.hw,U().K(this.l1),-889275714)}),M.pb=(function(){return this.n()||qp().Q.l(),this.hw=this.fZ.fm(this.d2),this.l1=this.fZ.cN(this.d2),this.d2=this.d2-1|0,this}),M.l=(function(){return this.pb()}),new F().i(Ty,`scala.collection.immutable.MapKeyValueTupleHashIterator`,{fY:1,fx:1,t:1,b:1,c:1,s:1});function Ey(e){this.bA=0,this.eO=0,this.dI=null,this.bo=0,this.ct=null,this.eP=null,$g(this,e)}M=Ey.prototype=new a_,M.constructor=Ey,M.pa=(function(){this.n()||qp().Q.l();var e=this.dI.mc(this.bA);return this.bA=1+this.bA|0,e}),M.l=(function(){return this.pa()}),new F().i(Ey,`scala.collection.immutable.MapKeyValueTupleIterator`,{fZ:1,bO:1,t:1,b:1,c:1,s:1});function Dy(e){e.bt<=e.ap&&qp().Q.l(),e.db=1+e.db|0;for(var t=e.hy.cn(e.db);t.a.length===0;)e.db=1+e.db|0,t=e.hy.cn(e.db);e.eT=e.dM;var n=e.l3,r=e.db,i=(n+(n>>>31|0)|0)>>1,a=r-i|0,o=a>>31;e.da=(1+i|0)-((a^o)-o|0)|0;var s=e.da;switch(s){case 1:e.aH=t;break;case 2:e.aI=t;break;case 3:e.bc=t;break;case 4:e.c1=t;break;case 5:e.dL=t;break;case 6:e.hx=t;break;default:throw new Sg(s)}e.dM=e.eT+Math.imul(t.a.length,1<<Math.imul(5,e.da-1|0))|0,e.dM>e.cz&&(e.dM=e.cz),e.da>1&&(e.ed=(1<<Math.imul(5,e.da))-1|0)}function Oy(e){var t=(e.ap-e.bt|0)+e.cz|0;if(t===e.dM&&Dy(e),e.da>1){var n=t-e.eT|0;ky(e,n,e.ed^n),e.ed=n}e.bt=e.bt-e.ap|0;var r=e.aH.a.length,i=e.bt;e.cy=r<i?r:i,e.ap=0}function ky(e,t,n){n<1024?e.aH=e.aI.a[31&(t>>>5|0)]:n<32768?(e.aI=e.bc.a[31&(t>>>10|0)],e.aH=e.aI.a[0]):n<1048576?(e.bc=e.c1.a[31&(t>>>15|0)],e.aI=e.bc.a[0],e.aH=e.aI.a[0]):n<33554432?(e.c1=e.dL.a[31&(t>>>20|0)],e.bc=e.c1.a[0],e.aI=e.bc.a[0],e.aH=e.aI.a[0]):(e.dL=e.hx.a[t>>>25|0],e.c1=e.dL.a[0],e.bc=e.c1.a[0],e.aI=e.bc.a[0],e.aH=e.aI.a[0])}function Ay(e,t,n){n<1024?e.aH=e.aI.a[31&(t>>>5|0)]:n<32768?(e.aI=e.bc.a[31&(t>>>10|0)],e.aH=e.aI.a[31&(t>>>5|0)]):n<1048576?(e.bc=e.c1.a[31&(t>>>15|0)],e.aI=e.bc.a[31&(t>>>10|0)],e.aH=e.aI.a[31&(t>>>5|0)]):n<33554432?(e.c1=e.dL.a[31&(t>>>20|0)],e.bc=e.c1.a[31&(t>>>15|0)],e.aI=e.bc.a[31&(t>>>10|0)],e.aH=e.aI.a[31&(t>>>5|0)]):(e.dL=e.hx.a[t>>>25|0],e.c1=e.dL.a[31&(t>>>20|0)],e.bc=e.c1.a[31&(t>>>15|0)],e.aI=e.bc.a[31&(t>>>10|0)],e.aH=e.aI.a[31&(t>>>5|0)])}function jy(e,t,n){this.hy=null,this.cz=0,this.l3=0,this.aH=null,this.aI=null,this.bc=null,this.c1=null,this.dL=null,this.hx=null,this.cy=0,this.ap=0,this.ed=0,this.bt=0,this.db=0,this.da=0,this.eT=0,this.dM=0,this.hy=e,this.cz=t,this.l3=n,this.aH=e.e,this.cy=this.aH.a.length,this.ap=0,this.ed=0,this.bt=this.cz,this.db=0,this.da=1,this.eT=0,this.dM=this.cy}M=jy.prototype=new rh,M.constructor=jy,M.w=(function(){return this.bt-this.ap|0}),M.n=(function(){return this.bt>this.ap}),M.l=(function(){this.ap===this.cy&&Oy(this);var e=this.aH.a[this.ap];return this.ap=1+this.ap|0,e}),M.cJ=(function(e){if(e>0){var t=((this.ap-this.bt|0)+this.cz|0)+e|0,n=this.cz,r=t<n?t:n;if(r===this.cz)this.ap=0,this.bt=0,this.cy=0;else{for(;r>=this.dM;)Dy(this);var i=r-this.eT|0;this.da>1&&(Ay(this,i,this.ed^i),this.ed=i),this.cy=this.aH.a.length,this.ap=31&i,this.bt=this.ap+(this.cz-r|0)|0,this.cy>this.bt&&(this.cy=this.bt)}}return this}),M.bf=(function(e,t,n){for(var r=Ol().bF(e),i=this.bt-this.ap|0,a=n<i?n:i,o=t<0?r:r-t|0,s=o<a?o:a,c=s<0?0:s,l=0,u=e instanceof P;l<c;){this.ap===this.cy&&Oy(this);var d=c-l|0,f=this.aH.a.length-this.ap|0,p=d<f?d:f;if(u){var m=this.aH,h=this.ap,g=t+l|0;m.u(h,e,g,p)}else Vl().fe(this.aH,this.ap,e,t+l|0,p);this.ap=this.ap+p|0,l=l+p|0}return c}),new F().i(jy,`scala.collection.immutable.NewVectorIterator`,{g1:1,t:1,b:1,c:1,s:1,A:1});function My(e){return e.hC=0,e.l9=0,e}function Ny(){this.hC=0,this.l9=0}M=Ny.prototype=new N,M.constructor=Ny;function Py(){}Py.prototype=M,M.aW=(function(e){this.hC<e&&this.pB(e)});function Fy(){this.hE=null,this.lb=null,Iy=this,this.hE=new Dg(this),this.lb=new gC(new P(0))}M=Fy.prototype=new N,M.constructor=Fy,M.oq=(function(e,t){return this.ii(Vl().m5(e,t))}),M.gk=(function(e){return new xh(new J((e=>this.ii(e))),new Ky(e.aE()))}),M.ii=(function(e){if(e===null)return null;if(e instanceof P)return new gC(e);if(e instanceof Za)return new mC(e);if(e instanceof eo)return new fC(e);if(e instanceof Qa)return new hC(e);if(e instanceof $a)return new pC(e);if(e instanceof Ja)return new dC(e);if(e instanceof Ya)return new uC(e);if(e instanceof Xa)return new _C(e);if(e instanceof qa)return new lC(e);if(Cl(e,1))return new vC(e);throw new Sg(e)}),M.i3=(function(e,t){return this.oq(e,t)}),new F().i(Fy,`scala.collection.mutable.ArraySeq$`,{gu:1,a:1,bw:1,bu:1,bv:1,bB:1});var Iy;function Ly(){return Iy||=new Fy,Iy}function Ry(e){if(this.dj=0,this.cC=null,this.eX=0,this.eW=null,e===null)throw mg(new hg);rv(this,e)}M=Ry.prototype=new av,M.constructor=Ry,M.i1=(function(e){return e.eh}),new F().i(Ry,`scala.collection.mutable.HashSet$$anon$1`,{gA:1,aR:1,t:1,b:1,c:1,s:1});function zy(e){if(this.dj=0,this.cC=null,this.eX=0,this.eW=null,e===null)throw mg(new hg);rv(this,e)}M=zy.prototype=new av,M.constructor=zy,M.i1=(function(e){return e}),new F().i(zy,`scala.collection.mutable.HashSet$$anon$2`,{gB:1,aR:1,t:1,b:1,c:1,s:1});function By(e){if(this.dj=0,this.cC=null,this.eX=0,this.eW=null,this.hH=0,this.lf=null,e===null)throw mg(new hg);this.lf=e,rv(this,e),this.hH=0}M=By.prototype=new av,M.constructor=By,M.v=(function(){return this.hH}),M.i1=(function(e){return this.hH=PS(this.lf,e.cD),this}),new F().i(By,`scala.collection.mutable.HashSet$$anon$3`,{gC:1,aR:1,t:1,b:1,c:1,s:1});function Vy(e){this.eZ=null,this.eZ=e}M=Vy.prototype=new N,M.constructor=Vy,M.p=(function(e){return gv(this,e)}),M.v=(function(){return U().K(this.eZ)}),M.x=(function(){return _v(this,this.eZ)}),M.aE=(function(){return this.eZ}),M.bh=(function(e){return this.eZ.a9.U(e)}),new F().i(Vy,`scala.reflect.ClassTag$GenericClassTag`,{gT:1,a:1,O:1,N:1,d:1,D:1});function Hy(){}M=Hy.prototype=new ng,M.constructor=Hy;function Uy(){}Uy.prototype=M;function Wy(e){return e.bD()+`(<not computed>)`}function Gy(e){return!!(e&&e.$classData&&e.$classData.n.a8)}function Ky(e){this.hC=0,this.l9=0,this.eg=null,this.la=!1,this.hD=null,this.eg=e,My(this),this.la=e===ro.l(),this.hD=[]}M=Ky.prototype=new Py,M.constructor=Ky,M.lA=(function(e){var t=this.la?Ha(e):e===null?Uu().go(this.eg):e;return this.hD.push(t),this}),M.ng=(function(e){for(var t=e.k();t.n();)this.lA(t.l());return this}),M.pB=(function(e){}),M.aV=(function(){return Uu().gn(this.eg===to.l()?wl.l():this.eg===ed.l()||this.eg===gm.l()?I.l():this.eg,this.hD)}),M.x=(function(){return`ArrayBuilder.generic`}),M.aO=(function(e){return this.lA(e)}),M.aU=(function(e){return this.ng(e)}),new F().i(Ky,`scala.collection.mutable.ArrayBuilder$generic`,{gt:1,gr:1,E:1,G:1,K:1,a6:1,a:1});function qy(e,t){this.hp=null,this.cq=0,this.b5=0,this.le=null,this.ld=0,this.le=t,oy(this,e),this.ld=t.X()|0}M=qy.prototype=new ly,M.constructor=qy,M.n=(function(){return Ju().lM(this.ld,this.le.X()|0,`mutation occurred during iteration`),this.b5>0}),new F().i(qy,`scala.collection.mutable.CheckedIndexedSeqView$CheckedIterator`,{gx:1,by:1,t:1,b:1,c:1,s:1,a:1});function Jy(){this.O=null}M=Jy.prototype=new N,M.constructor=Jy;function Yy(){}Yy.prototype=M,M.x=(function(){return this.O}),M.p=(function(e){return this===e}),M.v=(function(){return Pa(this)});function Xy(){}M=Xy.prototype=new N,M.constructor=Xy;function Zy(){}Zy.prototype=M;var Qy=class e extends Jm{constructor(e){super(),this.aC=null,this.aC=e,_f(this,null,null,!0,!0)}fn(){return Ea(this.aC)}bk(){return`JavaScriptException`}bi(){return 1}bj(e){return e===0?this.aC:U().oN(e)}cl(){return new yv(this)}v(){return G().fv(this,1744042595,!0)}p(t){return this===t||t instanceof e&&H().o(this.aC,t.aC)}};new F().i(Qy,`scala.scalajs.js.JavaScriptException`,{cg:1,Q:1,I:1,w:1,a:1,U:1,d:1});function $y(e,t){e.ik()!==void 0&&e.hM(wo().mq()),e.mo(t)}function eb(e){var t=e.ik();if(t===void 0){e.hM(wo().mq());var n=e.hX();$y(e,n);var r=n}else var r=t;return r}function tb(e,t,n){rb(e,new Dv(t),n)}function nb(e,t,n){rb(e,new Ev(t),n)}function rb(e,t,n){$y(e,t);var r=t.mh(),i=!1;i=!1,e.gi(!1);for(var a=e.fj(),o=0;o<(a.length|0);){var s=a[o];o=1+o|0,s.fs(t),r&&!i&&(i=!0)}for(var c=e.fo(),l=0;l<(c.length|0);){var u=c[l];l=1+l|0,u.pg(t,n),r&&!i&&(i=!0)}e.gi(!0);var d=e.il();if(d!==void 0){for(var f=0,p=d.length|0;f<p;)d[f].X(),f=1+f|0;d.length=0}r&&!i&&t.cK(new Z((e=>{Jf().bT(e)})),new Z((e=>void 0)))}function ib(e,t){typeof console<`u`&&(e.kv&&console.error?console.error(t):console.log(t))}function ab(e){this.kv=!1,this.eD=null,this.kv=e,new fg,this.eD=``}M=ab.prototype=new Uy,M.constructor=ab,M.oS=(function(e){for(var t=e;t!==``;){var n=t.indexOf(`
`)|0;if(n<0)this.eD=``+this.eD+t,t=``;else{var r=this.eD,i=t;ib(this,``+r+i.substring(0,n)),this.eD=``;var a=t,o=1+n|0;t=a.substring(o)}}}),new F().i(ab,`java.lang.JSConsoleBasedPrintStream`,{el:1,e8:1,e7:1,bf:1,bd:1,bh:1,be:1,bg:1});function ob(e,t,n){for(var r=n,i=t;;)if(i<=0||r.d())return r;else{var a=i-1|0,o=r.t();i=a,r=o}}function sb(e,t){if(e.b3(1)<=0)return e;for(var n=e.fq(),r=NS(new zS),i=e.k(),a=!1;i.n();){var o=i.l();r.ga(t.c(o))?n.aO(o):a=!0}return a?n.aV():e}function cb(){this.O=null}M=cb.prototype=new Yy,M.constructor=cb;function lb(){}lb.prototype=M,M.aE=(function(){return no.l()}),M.bh=(function(e){return new qa(e)});function ub(){this.O=null}M=ub.prototype=new Yy,M.constructor=ub;function db(){}db.prototype=M,M.aE=(function(){return io.l()}),M.bh=(function(e){return new Ya(e)});function fb(){this.O=null}M=fb.prototype=new Yy,M.constructor=fb;function pb(){}pb.prototype=M,M.aE=(function(){return ro.l()}),M.bh=(function(e){return new Ja(e)});function mb(){this.O=null}M=mb.prototype=new Yy,M.constructor=mb;function hb(){}hb.prototype=M,M.aE=(function(){return lo.l()}),M.bh=(function(e){return new eo(e)});function gb(){this.O=null}M=gb.prototype=new Yy,M.constructor=gb;function _b(){}_b.prototype=M,M.aE=(function(){return co.l()}),M.bh=(function(e){return new $a(e)});function vb(){this.O=null}M=vb.prototype=new Yy,M.constructor=vb;function yb(){}yb.prototype=M,M.aE=(function(){return oo.l()}),M.bh=(function(e){return new Za(e)});function bb(){this.O=null}M=bb.prototype=new Yy,M.constructor=bb;function xb(){}xb.prototype=M,M.aE=(function(){return so.l()}),M.bh=(function(e){return new Qa(e)});function Sb(){this.cF=null}M=Sb.prototype=new Zy,M.constructor=Sb;function Cb(){}Cb.prototype=M,M.x=(function(){return this.cF}),M.p=(function(e){return this===e}),M.v=(function(){return Pa(this)});function wb(){this.O=null}M=wb.prototype=new Yy,M.constructor=wb;function Tb(){}Tb.prototype=M,M.aE=(function(){return ao.l()}),M.bh=(function(e){return new Xa(e)});function Eb(){this.O=null}M=Eb.prototype=new Yy,M.constructor=Eb;function Db(){}Db.prototype=M,M.aE=(function(){return to.l()}),M.bh=(function(e){return new(wl.r()).C(e)});function Ob(){}M=Ob.prototype=new iy,M.constructor=Ob;function kb(){}kb.prototype=M,M.bg=(function(){return $p()}),M.x=(function(){return Wy(this)}),M.bl=(function(){return`View`});function Ab(e,t){if(e===t)return!0;if(jb(t)){if(e.aF()===t.aF())try{return e.pR(t)}catch(e){throw e}return!1}return!1}function jb(e){return!!(e&&e.$classData&&e.$classData.n.aJ)}function Mb(){this.cF=null,this.cF=`Any`,$()}M=Mb.prototype=new Cb,M.constructor=Mb,M.aE=(function(){return I.l()}),M.bh=(function(e){return new P(e)}),new F().i(Mb,`scala.reflect.ManifestFactory$AnyManifest$`,{gU:1,aw:1,av:1,a:1,O:1,N:1,d:1,D:1,T:1});var Nb;function Pb(){return Nb||=new Mb,Nb}function Fb(){this.O=null,this.O=`Boolean`}M=Fb.prototype=new lb,M.constructor=Fb,new F().i(Fb,`scala.reflect.ManifestFactory$BooleanManifest$`,{gW:1,gV:1,a2:1,a:1,O:1,N:1,d:1,D:1,T:1});var Ib;function Lb(){return Ib||=new Fb,Ib}function Rb(){this.O=null,this.O=`Byte`}M=Rb.prototype=new db,M.constructor=Rb,new F().i(Rb,`scala.reflect.ManifestFactory$ByteManifest$`,{gY:1,gX:1,a2:1,a:1,O:1,N:1,d:1,D:1,T:1});var zb;function Bb(){return zb||=new Rb,zb}function Vb(){this.O=null,this.O=`Char`}M=Vb.prototype=new pb,M.constructor=Vb,new F().i(Vb,`scala.reflect.ManifestFactory$CharManifest$`,{h0:1,gZ:1,a2:1,a:1,O:1,N:1,d:1,D:1,T:1});var Hb;function Ub(){return Hb||=new Vb,Hb}function Wb(){this.O=null,this.O=`Double`}M=Wb.prototype=new hb,M.constructor=Wb,new F().i(Wb,`scala.reflect.ManifestFactory$DoubleManifest$`,{h2:1,h1:1,a2:1,a:1,O:1,N:1,d:1,D:1,T:1});var Gb;function Kb(){return Gb||=new Wb,Gb}function qb(){this.O=null,this.O=`Float`}M=qb.prototype=new _b,M.constructor=qb,new F().i(qb,`scala.reflect.ManifestFactory$FloatManifest$`,{h4:1,h3:1,a2:1,a:1,O:1,N:1,d:1,D:1,T:1});var Jb;function Yb(){return Jb||=new qb,Jb}function Xb(){this.O=null,this.O=`Int`}M=Xb.prototype=new yb,M.constructor=Xb,new F().i(Xb,`scala.reflect.ManifestFactory$IntManifest$`,{h6:1,h5:1,a2:1,a:1,O:1,N:1,d:1,D:1,T:1});var Zb;function Qb(){return Zb||=new Xb,Zb}function $b(){this.O=null,this.O=`Long`}M=$b.prototype=new xb,M.constructor=$b,new F().i($b,`scala.reflect.ManifestFactory$LongManifest$`,{h8:1,h7:1,a2:1,a:1,O:1,N:1,d:1,D:1,T:1});var ex;function tx(){return ex||=new $b,ex}function nx(){this.cF=null,this.cF=`Nothing`,$()}M=nx.prototype=new Cb,M.constructor=nx,M.aE=(function(){return gm.l()}),M.bh=(function(e){return new(gm.r()).C(e)}),new F().i(nx,`scala.reflect.ManifestFactory$NothingManifest$`,{h9:1,aw:1,av:1,a:1,O:1,N:1,d:1,D:1,T:1});var rx;function ix(){return rx||=new nx,rx}function ax(){this.cF=null,this.cF=`Null`,$()}M=ax.prototype=new Cb,M.constructor=ax,M.aE=(function(){return ed.l()}),M.bh=(function(e){return new(ed.r()).C(e)}),new F().i(ax,`scala.reflect.ManifestFactory$NullManifest$`,{ha:1,aw:1,av:1,a:1,O:1,N:1,d:1,D:1,T:1});var ox;function sx(){return ox||=new ax,ox}function cx(){this.cF=null,this.cF=`Object`,$()}M=cx.prototype=new Cb,M.constructor=cx,M.aE=(function(){return I.l()}),M.bh=(function(e){return new P(e)}),new F().i(cx,`scala.reflect.ManifestFactory$ObjectManifest$`,{hb:1,aw:1,av:1,a:1,O:1,N:1,d:1,D:1,T:1});var lx;function ux(){return lx||=new cx,lx}function dx(){this.O=null,this.O=`Short`}M=dx.prototype=new Tb,M.constructor=dx,new F().i(dx,`scala.reflect.ManifestFactory$ShortManifest$`,{hd:1,hc:1,a2:1,a:1,O:1,N:1,d:1,D:1,T:1});var fx;function px(){return fx||=new dx,fx}function mx(){this.O=null,this.O=`Unit`}M=mx.prototype=new Db,M.constructor=mx,new F().i(mx,`scala.reflect.ManifestFactory$UnitManifest$`,{hf:1,he:1,a2:1,a:1,O:1,N:1,d:1,D:1,T:1});var hx;function gx(){return hx||=new mx,hx}function _x(e,t){this.j6=null,this.j5=!1,this.j7=null,this.gJ=0,this.j3=null,this.j4=null,this.ja=!1,this.gK=null,this.j8=null,this.j9=0,this.j8=t,this.j6=void 0,Yf(this),this.gJ=0,Ah(this),this.gK=void 0,this.j9=1,$y(this,e)}M=_x.prototype=new N,M.constructor=_x,M.fp=(function(){return this.j6}),M.x=(function(){return ho(this)}),M.ih=(function(){return this.j5}),M.il=(function(){return this.j7}),M.gi=(function(e){this.j5=e}),M.im=(function(e){this.j7=e}),M.mw=(function(){}),M.p=(function(e){return this===e}),M.v=(function(){return Pa(this)}),M.hL=(function(){return this.gJ}),M.hM=(function(e){this.gJ=e}),M.gq=(function(){return this}),M.mv=(function(){Mv(this)}),M.fj=(function(){return this.j3}),M.fo=(function(){return this.j4}),M.mP=(function(){return this.ja}),M.gt=(function(e){this.ja=e}),M.lO=(function(e){this.j3=e}),M.lP=(function(e){this.j4=e}),M.ik=(function(){return this.gK}),M.mo=(function(e){this.gK=e}),M.gr=(function(){return eb(this)}),M.mK=(function(){return this.j9}),M.hX=(function(){return eb(this)}),M.mx=(function(){}),M.fh=(function(){return this.j8.X()+`.signal`}),new F().i(_x,`com.raquo.airstream.state.VarSignal`,{cK:1,ay:1,ab:1,aW:1,aY:1,az:1,aZ:1,b0:1,b1:1,cG:1});function vx(e,t){return e===t?!0:yx(t)&&t.fd(e)?e.dU(t):!1}function yx(e){return!!(e&&e.$classData&&e.$classData.n.m)}function bx(e){this.kT=null,this.kT=e}M=bx.prototype=new kb,M.constructor=bx,M.k=(function(){return this.kT.X()}),new F().i(bx,`scala.collection.View$$anon$1`,{fs:1,an:1,i:1,b:1,c:1,h:1,g:1,f:1,a:1,a8:1});function xx(e,t){this.fY=null,this.kU=null,this.fY=e,this.kU=t}M=xx.prototype=new kb,M.constructor=xx,M.k=(function(){var e=this.fY.k();return new Mg(this.kU,e)}),M.w=(function(){return this.fY.w()===0?0:-1}),M.d=(function(){return this.fY.d()}),new F().i(xx,`scala.collection.View$DistinctBy`,{ft:1,an:1,i:1,b:1,c:1,h:1,g:1,f:1,a:1,a8:1});function Sx(e){e.gB=e.cP!==null,e.fB=-1}function Cx(e){if(Ih(e.cP),e.gB){var t=e.cP.hL();t!==e.fB&&wx(e,e.hX(),t)}}function wx(e,t,n){$y(e,t),e.fB=n}function Tx(e,t,n){e.gB&&(e.fB=e.cP.hL())}function Ex(e){Nh(e.cP,e,!1),Mv(e)}function Dx(e){Qf(e.cP,e)}function Ox(e){this.fS=null,this.fS=e}M=Ox.prototype=new N,M.constructor=Ox,M.w=(function(){return-1}),M.bE=(function(e){su(this,e)}),M.bf=(function(e,t,n){return uu(this,e,t,n)}),M.ci=(function(e,t,n,r){return fu(this,e,t,n,r)}),M.bD=(function(){return`Seq`}),M.cI=(function(e,t){return wf(this,e,t)}),M.c2=(function(e){return dh(this,e)}),M.b3=(function(e){return Vp(this,e)}),M.d=(function(){return ph(this)}),M.dU=(function(e){return mh(this,e)}),M.fd=(function(e){return!0}),M.p=(function(e){return vx(this,e)}),M.v=(function(){return G().iy(this)}),M.x=(function(){return Og(this)}),M.q=(function(){return this.fS.length|0}),M.s=(function(e){return this.fS[e]}),M.k=(function(){return new Qm(this.fS)}),M.c=(function(e){return this.s(e|0)}),M.c4=(function(e){return fh(this,e|0)}),M.en=(function(e){return Yg().fk(e)}),new F().i(Ox,`org.scalajs.dom.DOMList$DOMListSeq`,{eJ:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,k:1,d:1,m:1});function kx(){}M=kx.prototype=new iy,M.constructor=kx;function Ax(){}Ax.prototype=M,M.pR=(function(e){return this.em(e)}),M.p=(function(e){return Ab(this,e)}),M.bl=(function(){return`Set`}),M.x=(function(){return Og(this)}),M.c=(function(e){return this.bv(e)});function jx(e,t){if(e===t)return!0;if(Mx(t)){if(e.aF()===t.aF())try{return e.em(new J((e=>(t=>H().o(e.cM(t.aZ,new fm((()=>oh().kR.X()))),t.aQ)))(t)))}catch(e){throw e}return!1}return!1}function Mx(e){return!!(e&&e.$classData&&e.$classData.n.a3)}function Nx(e,t,n){this.iQ=null,this.iP=!1,this.iR=null,this.gz=0,this.iN=null,this.iO=null,this.iT=!1,this.gA=null,this.gB=!1,this.fB=0,this.cP=null,this.gC=null,this.gD=null,this.iS=0,this.cP=e,this.gC=t,this.gD=n,this.iQ=void 0,Yf(this),this.gz=0,Ah(this),this.gA=void 0,Sx(this),this.iS=1+e.mK()|0}M=Nx.prototype=new N,M.constructor=Nx,M.fp=(function(){return this.iQ}),M.fh=(function(){return mo(this)}),M.x=(function(){return ho(this)}),M.ih=(function(){return this.iP}),M.il=(function(){return this.iR}),M.gi=(function(e){this.iP=e}),M.im=(function(e){this.iR=e}),M.p=(function(e){return this===e}),M.v=(function(){return Pa(this)}),M.hL=(function(){return this.gz}),M.hM=(function(e){this.gz=e}),M.gq=(function(){return this}),M.fj=(function(){return this.iN}),M.fo=(function(){return this.iO}),M.mP=(function(){return this.iT}),M.gt=(function(e){this.iT=e}),M.lO=(function(e){this.iN=e}),M.lP=(function(e){this.iO=e}),M.ik=(function(){return this.gA}),M.mo=(function(e){this.gA=e}),M.gr=(function(){return eb(this)}),M.mx=(function(){Cx(this)}),M.mv=(function(){Ex(this)}),M.mw=(function(){Dx(this)}),M.mK=(function(){return this.iS}),M.pg=(function(e,t){Tx(this,e,t),e.cK(new Z((e=>{var n=this.gD;if(n.d())nb(this,e,t);else{var r=n.I();try{var i=new Dv(r.cI(e,new Z((e=>null))))}catch(e){var a=e instanceof vf?e:new Qy(e);matchResult1:{var i,o=wd().gs(a);if(!o.d()){var i=new Ev(o.I());break matchResult1}throw a instanceof Qy?a.aC:a}}i.cK(new Z((e=>(n=>{nb(this,new Ov(n,e),t)}))(e)),new Z((e=>(n=>{n===null?nb(this,e,t):n.d()||tb(this,n.I(),t)}))(e)))}})),new Z((n=>{rb(this,e.ij(this.gC),t)})))}),M.hX=(function(){var e=this.cP.gr().ij(this.gC);return e.cK(new Z((t=>{var n=this.gD;if(n.d())return e;var r=n.I();try{var i=new Dv(r.cI(t,new Z((e=>null))))}catch(e){var a=e instanceof vf?e:new Qy(e);matchResult1:{var i,o=wd().gs(a);if(!o.d()){var i=new Ev(o.I());break matchResult1}throw a instanceof Qy?a.aC:a}}return i.cK(new Z((e=>(t=>new Ev(new Ov(t,e))))(t)),new Z((t=>{if(t===null)return e;var n=t.d()?ty():new ny(new Dv(t.I()));return n.d()?e:n.I()})))})),new Z((t=>e)))}),new F().i(Nx,`com.raquo.airstream.misc.MapSignal`,{cx:1,ay:1,ab:1,aW:1,aY:1,az:1,aZ:1,b0:1,b1:1,aX:1,cl:1,cm:1});function Px(){}M=Px.prototype=new iy,M.constructor=Px;function Fx(){}Fx.prototype=M,M.cI=(function(e,t){return wf(this,e,t)}),M.c2=(function(e){return dh(this,e)}),M.ig=(function(e){return fh(this,e)}),M.b3=(function(e){return Vp(this,e)}),M.d=(function(){return ph(this)}),M.dU=(function(e){return mh(this,e)}),M.fd=(function(e){return!0}),M.p=(function(e){return vx(this,e)}),M.v=(function(){return G().iy(this)}),M.x=(function(){return Og(this)}),M.c4=(function(e){return this.ig(e|0)});function Ix(){}M=Ix.prototype=new kb,M.constructor=Ix;function Lx(){}Lx.prototype=M,M.c2=(function(e){return dh(this,e)}),M.b3=(function(e){return Vp(this,e)}),M.d=(function(){return ph(this)}),M.bl=(function(){return`SeqView`});function Rx(e){return!!(e&&e.$classData&&e.$classData.n.o)}function zx(e){return!!(e&&e.$classData&&e.$classData.n.ao)}function Bx(e){e.mS=Dc()}function Vx(e,t){return new Vd(new Z((e=>{t.c(e).b7(e)})),e.jf)}function Hx(){}M=Hx.prototype=new iy,M.constructor=Hx;function Ux(){}Ux.prototype=M,M.cI=(function(e,t){return dy(this,e,t)}),M.dS=(function(e){fy(this,e)}),M.c4=(function(e){return this.bv(e)}),M.ci=(function(e,t,n,r){return py(this,e,t,n,r)}),M.fl=(function(e){return this.mn().an(e)}),M.p=(function(e){return jx(this,e)}),M.v=(function(){return G().p3(this)}),M.bl=(function(){return`Map`}),M.x=(function(){return Og(this)});function Wx(e,t){return e.dG=t,e}function Gx(){this.dG=null}M=Gx.prototype=new Lx,M.constructor=Gx;function Kx(){}Kx.prototype=M,M.s=(function(e){return this.dG.s(e)}),M.q=(function(){return this.dG.q()}),M.k=(function(){return this.dG.k()}),M.w=(function(){return this.dG.w()}),M.d=(function(){return this.dG.d()}),new F().i(Gx,`scala.collection.SeqView$Id`,{bA:1,aF:1,an:1,i:1,b:1,c:1,h:1,g:1,f:1,a:1,a8:1,k:1,aI:1});function qx(e){return!!(e&&e.$classData&&e.$classData.n.u)}function Jx(){this.ju=null,this.jv=!1,this.jm=null,this.jn=!1,this.jj=null,this.jk=!1,this.jA=null,this.jB=!1,this.jq=null,this.jr=!1,this.jo=null,this.jp=!1,this.js=null,this.jt=!1,this.jl=null,this.gO=null,this.jw=null,this.jx=!1,this.jg=null,this.gN=null,this.jf=null,this.jh=null,this.ji=!1,this.jy=null,this.jz=!1,this.mS=null,As(this),Ts(this),bs(this),ws(this),Bx(this)}M=Jx.prototype=new N,M.constructor=Jx,M.pk=(function(){return this.jv||=(this.ju=Jd(new Yd,`p`,!1),!0),this.ju}),M.lV=(function(){return this.jn||=(this.jm=Jd(new Yd,`div`,!1),!0),this.jm}),M.nJ=(function(){return this.jk||=(this.jj=new Rd(`checked`,ks().jC),!0),this.jj}),M.mO=(function(){return this.jB||=(this.jA=new Rd(`value`,ks().cc),!0),this.jA}),M.pe=(function(){return this.jr||=(this.jq=new Nd(`click`),!0),this.jq}),M.pd=(function(){return this.jp||=(this.jo=new Nd(`change`),!0),this.jo}),M.fr=(function(){return this.jt||=(this.js=new Nd(`input`),!0),this.js}),M.pO=(function(){return this.jx||=(this.jw=Fd(new Id,`style`,ks().cc),!0),this.jw}),M.ne=(function(){return this.ji||=(this.jh=new Md(this),!0),this.jh}),M.pS=(function(){return this.jz||=(this.jy=new Am(this),!0),this.jy}),new F().i(Jx,`com.raquo.laminar.api.package$$anon$1`,{cY:1,d9:1,d2:1,d7:1,d6:1,d8:1,d4:1,cW:1,cR:1,cV:1,b3:1,b6:1,b2:1,cT:1});function Yx(e){return!!(e&&e.$classData&&e.$classData.n.a4)}function Xx(){}M=Xx.prototype=new Lx,M.constructor=Xx;function Zx(){}Zx.prototype=M,M.b3=(function(e){var t=this.q();return t===e?0:t<e?-1:1}),M.w=(function(){return this.q()}),M.bl=(function(){return`IndexedSeqView`});function Qx(e){this.dG=null,Wx(this,e)}M=Qx.prototype=new Kx,M.constructor=Qx,M.b3=(function(e){var t=this.q();return t===e?0:t<e?-1:1}),M.w=(function(){return this.q()}),M.k=(function(){return oy(new cy,this)}),M.bl=(function(){return`IndexedSeqView`}),new F().i(Qx,`scala.collection.IndexedSeqView$Id`,{fa:1,bA:1,aF:1,an:1,i:1,b:1,c:1,h:1,g:1,f:1,a:1,a8:1,k:1,aI:1,p:1,bx:1});function $x(){}M=$x.prototype=new Fx,M.constructor=$x;function eS(){}eS.prototype=M;function tS(e,t){this.hB=null,this.l8=null,this.hB=e,this.l8=t}M=tS.prototype=new Zx,M.constructor=tS,M.s=(function(e){return this.hB.s(e)}),M.q=(function(){return this.hB.aT}),M.bD=(function(){return`ArrayBufferView`}),M.k=(function(){return new qy(this,this.l8)}),new F().i(tS,`scala.collection.mutable.ArrayBufferView`,{gq:1,f3:1,aF:1,an:1,i:1,b:1,c:1,h:1,g:1,f:1,a:1,a8:1,k:1,aI:1,p:1,bx:1});function nS(){}M=nS.prototype=new Ux,M.constructor=nS;function rS(){}rS.prototype=M,M.bg=(function(){return vh()}),M.mn=(function(){return sm()});function iS(e,t){return!oS(t)||e.q()===t.q()}function aS(e,t){if(oS(t)){if(e===t)return!0;var n=e.q(),r=n===t.q();if(r){var i=0,a=e.gc(),o=t.gc(),s=a<o?a:o,c=n>>31,l=s>>31,u=s<<1,d=s>>>31|0|l<<1;if(c===d?n>>>0>u>>>0:c>d)var f=s;else var f=n;for(;i<f&&r;)r=H().o(e.s(i),t.s(i)),i=1+i|0;if(i<n&&r)for(var p=e.k().cJ(i),m=t.k().cJ(i);r&&p.n();)r=H().o(p.l(),m.l())}return r}return mh(e,t)}function oS(e){return!!(e&&e.$classData&&e.$classData.n.y)}function sS(e,t){return e.bU=t,e}function cS(){this.bU=null}M=cS.prototype=new eS,M.constructor=cS;function lS(){}lS.prototype=M;function uS(){}M=uS.prototype=new Fx,M.constructor=uS;function dS(){}dS.prototype=M;function fS(){}M=fS.prototype=new rS,M.constructor=fS,M.aF=(function(){return 0}),M.w=(function(){return 0}),M.d=(function(){return!0}),M.hS=(function(e){throw new yg(`key not found: `+e)}),M.bv=(function(e){return!1}),M.cM=(function(e,t){return t.X()}),M.k=(function(){return qp().Q}),M.c=(function(e){this.hS(e)}),M.du=(function(e,t){return new hS(e,t)}),new F().i(fS,`scala.collection.immutable.Map$EmptyMap$`,{fQ:1,ah:1,ad:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,af:1,ae:1,d:1,a3:1,r:1,ai:1,a4:1,a:1});var pS;function mS(){return pS||=new fS,pS}function hS(e,t){this.cf=null,this.dJ=null,this.cf=e,this.dJ=t}M=hS.prototype=new rS,M.constructor=hS,M.aF=(function(){return 1}),M.w=(function(){return 1}),M.d=(function(){return!1}),M.c=(function(e){if(H().o(e,this.cf))return this.dJ;throw new yg(`key not found: `+e)}),M.bv=(function(e){return H().o(e,this.cf)}),M.cM=(function(e,t){return H().o(e,this.cf)?this.dJ:t.X()}),M.k=(function(){return new jg(new Eg(this.cf,this.dJ))}),M.dV=(function(e,t){return H().o(e,this.cf)?new hS(this.cf,t):new gS(this.cf,this.dJ,e,t)}),M.em=(function(e){return!!e.c(new Eg(this.cf,this.dJ))}),M.v=(function(){var e=0,t=0,n=1,r=G().ca(this.cf,this.dJ);return e=e+r|0,t^=r,n=Math.imul(n,1|r),r=G().dl,r=G().z(r,e),r=G().z(r,t),r=G().cO(r,n),G().ax(r,1)}),M.du=(function(e,t){return this.dV(e,t)}),new F().i(hS,`scala.collection.immutable.Map$Map1`,{bS:1,ah:1,ad:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,af:1,ae:1,d:1,a3:1,r:1,ai:1,a4:1,l:1,a:1});function gS(e,t,n,r){this.bV=null,this.d4=null,this.bW=null,this.d5=null,this.bV=e,this.d4=t,this.bW=n,this.d5=r}M=gS.prototype=new rS,M.constructor=gS,M.aF=(function(){return 2}),M.w=(function(){return 2}),M.d=(function(){return!1}),M.c=(function(e){if(H().o(e,this.bV))return this.d4;if(H().o(e,this.bW))return this.d5;throw new yg(`key not found: `+e)}),M.bv=(function(e){return H().o(e,this.bV)||H().o(e,this.bW)}),M.cM=(function(e,t){return H().o(e,this.bV)?this.d4:H().o(e,this.bW)?this.d5:t.X()}),M.k=(function(){return new Sy(this)}),M.dV=(function(e,t){return H().o(e,this.bV)?new gS(this.bV,t,this.bW,this.d5):H().o(e,this.bW)?new gS(this.bV,this.d4,this.bW,t):new _S(this.bV,this.d4,this.bW,this.d5,e,t)}),M.em=(function(e){return!!e.c(new Eg(this.bV,this.d4))&&!!e.c(new Eg(this.bW,this.d5))}),M.v=(function(){var e=0,t=0,n=1,r=G().ca(this.bV,this.d4);return e=e+r|0,t^=r,n=Math.imul(n,1|r),r=G().ca(this.bW,this.d5),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=G().dl,r=G().z(r,e),r=G().z(r,t),r=G().cO(r,n),G().ax(r,2)}),M.du=(function(e,t){return this.dV(e,t)}),new F().i(gS,`scala.collection.immutable.Map$Map2`,{bT:1,ah:1,ad:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,af:1,ae:1,d:1,a3:1,r:1,ai:1,a4:1,l:1,a:1});function _S(e,t,n,r,i,a){this.bK=null,this.cu=null,this.bL=null,this.cv=null,this.bM=null,this.cw=null,this.bK=e,this.cu=t,this.bL=n,this.cv=r,this.bM=i,this.cw=a}M=_S.prototype=new rS,M.constructor=_S,M.aF=(function(){return 3}),M.w=(function(){return 3}),M.d=(function(){return!1}),M.c=(function(e){if(H().o(e,this.bK))return this.cu;if(H().o(e,this.bL))return this.cv;if(H().o(e,this.bM))return this.cw;throw new yg(`key not found: `+e)}),M.bv=(function(e){return H().o(e,this.bK)||H().o(e,this.bL)||H().o(e,this.bM)}),M.cM=(function(e,t){return H().o(e,this.bK)?this.cu:H().o(e,this.bL)?this.cv:H().o(e,this.bM)?this.cw:t.X()}),M.k=(function(){return new Cy(this)}),M.dV=(function(e,t){return H().o(e,this.bK)?new _S(this.bK,t,this.bL,this.cv,this.bM,this.cw):H().o(e,this.bL)?new _S(this.bK,this.cu,this.bL,t,this.bM,this.cw):H().o(e,this.bM)?new _S(this.bK,this.cu,this.bL,this.cv,this.bM,t):new vS(this.bK,this.cu,this.bL,this.cv,this.bM,this.cw,e,t)}),M.em=(function(e){return!!e.c(new Eg(this.bK,this.cu))&&!!e.c(new Eg(this.bL,this.cv))&&!!e.c(new Eg(this.bM,this.cw))}),M.v=(function(){var e=0,t=0,n=1,r=G().ca(this.bK,this.cu);return e=e+r|0,t^=r,n=Math.imul(n,1|r),r=G().ca(this.bL,this.cv),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=G().ca(this.bM,this.cw),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=G().dl,r=G().z(r,e),r=G().z(r,t),r=G().cO(r,n),G().ax(r,3)}),M.du=(function(e,t){return this.dV(e,t)}),new F().i(_S,`scala.collection.immutable.Map$Map3`,{bU:1,ah:1,ad:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,af:1,ae:1,d:1,a3:1,r:1,ai:1,a4:1,l:1,a:1});function vS(e,t,n,r,i,a,o,s){this.bp=null,this.bX=null,this.bq=null,this.bY=null,this.br=null,this.bZ=null,this.bs=null,this.c0=null,this.bp=e,this.bX=t,this.bq=n,this.bY=r,this.br=i,this.bZ=a,this.bs=o,this.c0=s}M=vS.prototype=new rS,M.constructor=vS,M.aF=(function(){return 4}),M.w=(function(){return 4}),M.d=(function(){return!1}),M.c=(function(e){if(H().o(e,this.bp))return this.bX;if(H().o(e,this.bq))return this.bY;if(H().o(e,this.br))return this.bZ;if(H().o(e,this.bs))return this.c0;throw new yg(`key not found: `+e)}),M.bv=(function(e){return H().o(e,this.bp)||H().o(e,this.bq)||H().o(e,this.br)||H().o(e,this.bs)}),M.cM=(function(e,t){return H().o(e,this.bp)?this.bX:H().o(e,this.bq)?this.bY:H().o(e,this.br)?this.bZ:H().o(e,this.bs)?this.c0:t.X()}),M.k=(function(){return new wy(this)}),M.dV=(function(e,t){return H().o(e,this.bp)?new vS(this.bp,t,this.bq,this.bY,this.br,this.bZ,this.bs,this.c0):H().o(e,this.bq)?new vS(this.bp,this.bX,this.bq,t,this.br,this.bZ,this.bs,this.c0):H().o(e,this.br)?new vS(this.bp,this.bX,this.bq,this.bY,this.br,t,this.bs,this.c0):H().o(e,this.bs)?new vS(this.bp,this.bX,this.bq,this.bY,this.br,this.bZ,this.bs,t):im().g0.et(this.bp,this.bX).et(this.bq,this.bY).et(this.br,this.bZ).et(this.bs,this.c0).et(e,t)}),M.em=(function(e){return!!e.c(new Eg(this.bp,this.bX))&&!!e.c(new Eg(this.bq,this.bY))&&!!e.c(new Eg(this.br,this.bZ))&&!!e.c(new Eg(this.bs,this.c0))}),M.nI=(function(e){return e.dP(this.bp,this.bX).dP(this.bq,this.bY).dP(this.br,this.bZ).dP(this.bs,this.c0)}),M.v=(function(){var e=0,t=0,n=1,r=G().ca(this.bp,this.bX);return e=e+r|0,t^=r,n=Math.imul(n,1|r),r=G().ca(this.bq,this.bY),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=G().ca(this.br,this.bZ),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=G().ca(this.bs,this.c0),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=G().dl,r=G().z(r,e),r=G().z(r,t),r=G().cO(r,n),G().ax(r,4)}),M.du=(function(e,t){return this.dV(e,t)}),new F().i(vS,`scala.collection.immutable.Map$Map4`,{bV:1,ah:1,ad:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,af:1,ae:1,d:1,a3:1,r:1,ai:1,a4:1,l:1,a:1});function yS(){}M=yS.prototype=new Ax,M.constructor=yS;function bS(){}bS.prototype=M,M.aV=(function(){return this});function Q(e){this.g5=null,this.g5=e}M=Q.prototype=new N,M.constructor=Q,M.c2=(function(e){return sb(this,e)}),M.c5=(function(e){return hh(this,e)}),M.fd=(function(e){return iS(this,e)}),M.dU=(function(e){return aS(this,e)}),M.gc=(function(){return Cu().kX}),M.k=(function(){return oy(new cy,new Qx(this))}),M.b3=(function(e){var t=this.q();return t===e?0:t<e?-1:1}),M.w=(function(){return this.q()}),M.p=(function(e){return vx(this,e)}),M.v=(function(){return G().iy(this)}),M.x=(function(){return Og(this)}),M.d=(function(){return ph(this)}),M.cI=(function(e,t){return wf(this,e,t)}),M.fq=(function(){return Tv().aP()}),M.bE=(function(e){su(this,e)}),M.bf=(function(e,t,n){return uu(this,e,t,n)}),M.ci=(function(e,t,n,r){return fu(this,e,t,n,r)}),M.ds=(function(){return Tv()}),M.q=(function(){return this.g5.length|0}),M.s=(function(e){return this.g5[e]}),M.bD=(function(){return`WrappedVarArgs`}),M.en=(function(e){return Tv().i7(e)}),M.c4=(function(e){return fh(this,e|0)}),M.c=(function(e){return this.s(e|0)}),M.bg=(function(){return Tv()}),new F().i(Q,`scala.scalajs.runtime.WrappedVarArgs`,{ch:1,y:1,b:1,c:1,h:1,g:1,f:1,r:1,e:1,j:1,k:1,d:1,m:1,v:1,u:1,p:1,o:1,B:1,z:1,l:1,q:1,a:1});function xS(e){this.bb=null,this.bb=e}M=xS.prototype=new rS,M.constructor=xS,M.mn=(function(){return im()}),M.w=(function(){return this.bb.aG}),M.aF=(function(){return this.bb.aG}),M.d=(function(){return this.bb.aG===0}),M.k=(function(){return this.d()?qp().Q:new Ey(this.bb)}),M.bv=(function(e){var t=U().K(e),n=ou().c3(t);return this.bb.hW(e,t,n,0)}),M.c=(function(e){var t=U().K(e),n=ou().c3(t);return this.bb.hQ(e,t,n,0)}),M.cM=(function(e,t){var n=U().K(e),r=ou().c3(n);return this.bb.i9(e,n,r,0,t)}),M.et=(function(e,t){var n=U().K(e),r=this.bb.mM(e,t,n,ou().c3(n),0,!0);return r===this.bb?this:new xS(r)}),M.dS=(function(e){this.bb.dS(e)}),M.p=(function(e){if(e instanceof xS){if(this===e)return!0;var t=this.bb,n=e.bb;return t===null?n===null:t.p(n)}return jx(this,e)}),M.v=(function(){if(this.d())return G().hK;var e=new Ty(this.bb);return G().iB(e,G().dl)}),M.bD=(function(){return`HashMap`}),M.du=(function(e,t){return this.et(e,t)}),new F().i(xS,`scala.collection.immutable.HashMap`,{bQ:1,ah:1,ad:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,af:1,ae:1,d:1,a3:1,r:1,ai:1,a4:1,l:1,fp:1,g9:1,a:1,W:1});function SS(e,t){return sS(e,t===Eu()?null:t),e.b0=t===Eu()?null:Df(),e}function CS(e,t,n){return SS(e,Eu()),e.b0=t,e.bU=n,e}function wS(e){for(;e.b0===Df();){var t=e.bU;if(t instanceof gf&&OS(e),Gl(t)){X().mC();var n=_l().ky;if(e.bU===t){e.bU=n;var r=!0}else var r=!1;if(r){var i=null;try{var a=TS(t.X())}catch(e){i=e instanceof vf?e:new Qy(e);var a=null}if(i===null){a===null&&rd().c8();var o=a.bU}else var o=t;if(X().mC(),e.bU,e.bU=o,i===null&&(a===null&&rd().c8(),e.b0=a.b0),i!==null){var s=i;s===null&&rd().c8();var c=s;throw c instanceof Qy?c.aC:c}continue}}}}function TS(e){for(;;)if(e.b0!==Df())return e.bU===null?X().M:e;else wS(e)}function ES(e,t){return X(),SS(new kS,new fm((()=>TS(e)===X().M?X().M:(X(),CS(new kS,t.c(e.y()),ES(e.aX(),t))))))}function DS(e,t,n,r,i){if(t.r=``+t.r+n,e.b0===Df())t.r+=`<not computed>`;else if(TS(e)!==X().M){var a=e.y();t.r=``+t.r+a;var o=e,s=e.aX();if(o!==s){o=s;var c=s;if(c.b0!==Df()&&TS(c)!==X().M)for(s=s.aX();;){if(o!==s)var l=s,u=l.b0!==Df()&&TS(l)!==X().M;else var u=!1;if(u){var d=o;t.r=``+t.r+r;var f=d.y();t.r=``+t.r+f,o=o.aX(),s=s.aX();var p=s;p.b0!==Df()&&TS(p)!==X().M&&(s=s.aX())}else break}}var m=s;if(m.b0===Df()||TS(m)===X().M){for(;o!==s;){var h=o;t.r=``+t.r+r;var g=h.y();t.r=``+t.r+g,o=o.aX()}o.b0===Df()&&(t.r=``+t.r+r,t.r+=`<not computed>`)}else{if(o!==e){for(var _=e;_!==s;)_=_.aX(),s=s.aX();for(;;){var v=o.aX();if(v!==s){var y=o;t.r=``+t.r+r;var b=y.y();t.r=``+t.r+b}if(o=v,o===s)break}}t.r=``+t.r+r,t.r+=`<cycle>`}}return t.r=``+t.r+i,t}function OS(e){throw qm(new Jm,`LazyList evaluation depends on its own result (self-reference); see docs for more info`)}function kS(){this.bU=null,this.b0=null}M=kS.prototype=new lS,M.constructor=kS,M.q=(function(){return Bg(this)}),M.b3=(function(e){return Vg(this,e)}),M.ig=(function(e){return Hg(this,e)}),M.s=(function(e){return Ug(this,e)}),M.dU=(function(e){return Wg(this,e)}),M.bl=(function(){return`LinearSeq`}),M.d=(function(){return TS(this)===X().M}),M.w=(function(){return this.b0!==Df()&&TS(this)===X().M?0:-1}),M.y=(function(){if(TS(this)===X().M)throw new yg(`head of empty lazy list`);return this.b0}),M.aX=(function(){if(TS(this)===X().M)throw new _g(`tail of empty lazy list`);return this.bU}),M.oo=(function(){var e=this,t=this;for(TS(e)!==X().M&&(e=e.aX());t!==e;){if(TS(e)===X().M||(e=e.aX(),TS(e)===X().M)||(e=e.aX(),e===t))return this;t=t.aX()}return this}),M.k=(function(){return this.b0!==Df()&&TS(this)===X().M?qp().Q:new x_(this)}),M.bE=(function(e){for(var t=this;;)if(TS(t)!==X().M)e.c(t.y()),t=t.aX();else return}),M.bD=(function(){return`LazyList`}),M.oZ=(function(e){return this.b0!==Df()&&TS(this)===X().M?X().M:ES(this,e)}),M.o6=(function(e){return e<=0?this:this.b0!==Df()&&TS(this)===X().M?X().M:X().pE(this,e)}),M.ci=(function(e,t,n,r){return this.oo(),DS(this,e.aN,t,n,r),e}),M.x=(function(){return DS(this,Xm(new Zm,`LazyList`),`(`,`, `,`)`).r}),M.bg=(function(){return X()}),M.t=(function(){return this.aX()}),M.c5=(function(e){return this.oZ(e)}),M.lW=(function(e){return this.o6(e)}),M.c4=(function(e){return Hg(this,e|0)}),M.c=(function(e){return Ug(this,e|0)}),new F().i(kS,`scala.collection.immutable.LazyList`,{bR:1,fK:1,x:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,k:1,d:1,m:1,r:1,v:1,u:1,a:1,aG:1,ao:1,aL:1,aK:1});function AS(){}M=AS.prototype=new dS,M.constructor=AS;function jS(){}jS.prototype=M,M.aU=(function(e){return Af(this,e)});function MS(e,t,n){return e.hF=n,e.aL=new(Gu.r()).C(LS(e,t)),e.hG=RS(e,e.aL.a.length),e.di=0,e}function NS(e){return MS(e,16,.75),e}function PS(e,t){return t^(t>>>16|0)}function FS(e,t,n){var r=n&(e.aL.a.length-1|0);matchResult4:{var i=e.aL.a[r];if(i===null){e.aL.a[r]=new Wu(t,n,null);break matchResult4}for(var a=null,o=i;o!==null&&o.cD<=n;){if(o.cD===n&&H().o(t,o.eh))return!1;a=o,o=o.aM}if(a===null)e.aL.a[r]=new Wu(t,n,i);else{var s=a;s.aM=new Wu(t,n,a.aM)}}return e.di=1+e.di|0,!0}function IS(e,t){var n=e.aL.a.length;if(e.hG=RS(e,t),e.di===0)e.aL=new(Gu.r()).C(t);else{e.aL=z().P(e.aL,t);for(var r=new Wu(null,0,null),i=new Wu(null,0,null);n<t;){for(var a=0;a<n;){var o=e.aL.a[a];if(o!==null){r.aM=null,i.aM=null;for(var s=r,c=i,l=o;l!==null;){var u=l.aM;if((l.cD&n)===0){var d=s;d.aM=l,s=l}else{var f=c;f.aM=l,c=l}l=u}var p=s;if(p.aM=null,o!==r.aM&&(e.aL.a[a]=r.aM),i.aM!==null){e.aL.a[a+n|0]=i.aM;var m=c;m.aM=null}}a=1+a|0}n<<=1}}}function LS(e,t){var n=t-1|0,r=n>4?n:4,i=(-2147483648>>Math.clz32(r)&r)<<1;return i<1073741824?i:1073741824}function RS(e,t){return Oa(t*e.hF)}function zS(){this.hF=0,this.aL=null,this.hG=0,this.di=0}M=zS.prototype=new bS,M.constructor=zS,M.aF=(function(){return this.di}),M.bv=(function(e){var t=PS(this,U().K(e));matchResult1:{var n,r=this.aL.a[t&(this.aL.a.length-1|0)];if(r===null){var n=null;break matchResult1}var n=r.om(e,t)}return n!==null}),M.aW=(function(e){var t=LS(this,Oa((1+e|0)/this.hF));t>this.aL.a.length&&IS(this,t)}),M.ga=(function(e){return(1+this.di|0)>=this.hG&&IS(this,this.aL.a.length<<1),FS(this,e,PS(this,U().K(e)))}),M.lz=(function(e){if(cm(this,e,0),e instanceof zS){for(var t=new zy(e);t.n();){var n=t.l();FS(this,n.eh,n.cD)}return this}return Af(this,e)}),M.k=(function(){return new Ry(this)}),M.bg=(function(){return dm()}),M.w=(function(){return this.di}),M.d=(function(){return this.di===0}),M.bD=(function(){return`HashSet`}),M.v=(function(){var e=new Ry(this),t=e.n()?new By(this):e;return G().iB(t,G().lr)}),M.aU=(function(e){return this.lz(e)}),M.aO=(function(e){return this.ga(e),this}),new F().i(zS,`scala.collection.mutable.HashSet`,{c8:1,gn:1,f4:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,fn:1,d:1,aJ:1,H:1,A:1,F:1,E:1,G:1,K:1,au:1,gN:1,gM:1,l:1,a:1});function BS(){}M=BS.prototype=new eS,M.constructor=BS;function VS(){}VS.prototype=M,M.b3=(function(e){var t=this.q();return t===e?0:t<e?-1:1}),M.w=(function(){return this.q()}),M.bl=(function(){return`IndexedSeq`}),M.fd=(function(e){return iS(this,e)}),M.dU=(function(e){return aS(this,e)}),M.c2=(function(e){return sb(this,e)}),M.fl=(function(e){return yy().i4(e,this.a8())}),M.fq=(function(){return yy().gk(this.a8())}),M.ds=(function(){return yy().ht}),M.oY=(function(e){for(var t=new P(this.q()),n=0;n<t.a.length;)t.a[n]=e.c(this.s(n)),n=1+n|0;return yy().iC(t)}),M.bD=(function(){return`ArraySeq`}),M.bf=(function(e,t,n){var r=this.q(),i=Ol().bF(e),a=n<r?n:r,o=t<0?i:i-t|0,s=o<a?o:a,c=s<0?0:s;return c>0&&Vl().fe(this.cm(),0,e,t,c),c}),M.gc=(function(){return 2147483647}),M.bg=(function(){return yy().ht}),M.c5=(function(e){return this.oY(e)}),M.en=(function(e){return yy().i4(e,this.a8())});function HS(e,t){return e.e=t,e}function US(){this.e=null}M=US.prototype=new eS,M.constructor=US;function WS(){}WS.prototype=M,M.b3=(function(e){var t=this.q();return t===e?0:t<e?-1:1}),M.w=(function(){return this.q()}),M.bl=(function(){return`IndexedSeq`}),M.fd=(function(e){return iS(this,e)}),M.dU=(function(e){return aS(this,e)}),M.c2=(function(e){return sb(this,e)}),M.ds=(function(){return B_()}),M.q=(function(){return this instanceof bC?this.j:this.e.a.length}),M.k=(function(){return this===OC()?B_().l5:new jy(this,this.q(),this.co())}),M.bD=(function(){return`Vector`}),M.bf=(function(e,t,n){return this.k().bf(e,t,n)}),M.gc=(function(){return B_().l4}),M.ay=(function(e){return bu().id(e,this.q()-1|0)}),M.bE=(function(e){for(var t=this.co(),n=0;n<t;){var r=V(),i=n,a=(t+(t>>>31|0)|0)>>1,o=i-a|0,s=o>>31;r.i2(((1+a|0)-((o^s)-s|0)|0)-1|0,this.cn(n),e),n=1+n|0}}),M.bg=(function(){return B_()});function GS(){}M=GS.prototype=new dS,M.constructor=GS;function KS(){}KS.prototype=M,M.b3=(function(e){var t=this.q();return t===e?0:t<e?-1:1}),M.w=(function(){return this.q()}),M.bl=(function(){return`IndexedSeq`}),M.c2=(function(e){return my(this,e)}),M.ds=(function(){return Ly().hE}),M.mb=(function(e){var t=this.a8(),n=null,r=t.aE(),i=r===ro.l();n=[],e.w();for(var a=e.k();a.n();){var o=a.l(),s=i?Ha(o):o===null?Uu().go(r):o;n.push(s)}return Ly().ii(Uu().gn(r===to.l()?wl.l():r===ed.l()||r===gm.l()?I.l():r,n))}),M.fq=(function(){return Ly().gk(this.a8())}),M.bD=(function(){return`ArraySeq`}),M.bf=(function(e,t,n){var r=this.q(),i=Ol().bF(e),a=n<r?n:r,o=t<0?i:i-t|0,s=o<a?o:a,c=s<0?0:s;return c>0&&Vl().fe(this.bR(),0,e,t,c),c}),M.p=(function(e){return e instanceof GS&&Ol().bF(this.bR())!==Ol().bF(e.bR())?!1:vx(this,e)}),M.bg=(function(){return Ly().hE}),M.fl=(function(e){return this.mb(e)}),M.en=(function(e){return this.mb(e)});function qS(e){this.cV=null,this.cV=e}M=qS.prototype=new VS,M.constructor=qS,M.q=(function(){return this.cV.a.length}),M.fb=(function(e){return this.cV.a[e]}),M.v=(function(){var e=G();return e.aD(this.cV,e.ad)}),M.p=(function(e){return e instanceof qS?z().m3(this.cV,e.cV):vx(this,e)}),M.k=(function(){return new ay(this.cV)}),M.cm=(function(){return this.cV}),M.a8=(function(){return Lb()}),M.s=(function(e){return this.fb(e)}),M.c=(function(e){return this.fb(e|0)}),new F().i(qS,`scala.collection.immutable.ArraySeq$ofBoolean`,{bD:1,X:1,x:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,k:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,B:1,y:1,l:1,q:1,z:1,a0:1,a:1});function JS(e){this.cW=null,this.cW=e}M=JS.prototype=new VS,M.constructor=JS,M.q=(function(){return this.cW.a.length}),M.f3=(function(e){return this.cW.a[e]}),M.v=(function(){var e=G();return e.aD(this.cW,e.ad)}),M.p=(function(e){return e instanceof JS?z().lZ(this.cW,e.cW):vx(this,e)}),M.k=(function(){return new ay(this.cW)}),M.cm=(function(){return this.cW}),M.a8=(function(){return Bb()}),M.s=(function(e){return this.f3(e)}),M.c=(function(e){return this.f3(e|0)}),new F().i(JS,`scala.collection.immutable.ArraySeq$ofByte`,{bE:1,X:1,x:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,k:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,B:1,y:1,l:1,q:1,z:1,a0:1,a:1});function YS(e){this.cs=null,this.cs=e}M=YS.prototype=new VS,M.constructor=YS,M.q=(function(){return this.cs.a.length}),M.f4=(function(e){return this.cs.a[e]}),M.v=(function(){var e=G();return e.aD(this.cs,e.ad)}),M.p=(function(e){return e instanceof YS?z().m0(this.cs,e.cs):vx(this,e)}),M.k=(function(){return new ay(this.cs)}),M.ci=(function(e,t,n,r){return new dC(this.cs).ci(e,t,n,r)}),M.cm=(function(){return this.cs}),M.a8=(function(){return Ub()}),M.s=(function(e){return za(this.f4(e))}),M.c=(function(e){return za(this.f4(e|0))}),new F().i(YS,`scala.collection.immutable.ArraySeq$ofChar`,{bF:1,X:1,x:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,k:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,B:1,y:1,l:1,q:1,z:1,a0:1,a:1});function XS(e){this.cX=null,this.cX=e}M=XS.prototype=new VS,M.constructor=XS,M.q=(function(){return this.cX.a.length}),M.f5=(function(e){return this.cX.a[e]}),M.v=(function(){var e=G();return e.aD(this.cX,e.ad)}),M.p=(function(e){if(e instanceof XS){var t=this.cX,n=e.cX;if(t===n)return!0;if(t.a.length===n.a.length){for(var r=0;r<t.a.length&&t.a[r]===n.a[r];)r=1+r|0;return r>=t.a.length}return!1}return vx(this,e)}),M.k=(function(){return new ay(this.cX)}),M.cm=(function(){return this.cX}),M.a8=(function(){return Kb()}),M.s=(function(e){return this.f5(e)}),M.c=(function(e){return this.f5(e|0)}),new F().i(XS,`scala.collection.immutable.ArraySeq$ofDouble`,{bG:1,X:1,x:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,k:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,B:1,y:1,l:1,q:1,z:1,a0:1,a:1});function ZS(e){this.cY=null,this.cY=e}M=ZS.prototype=new VS,M.constructor=ZS,M.q=(function(){return this.cY.a.length}),M.f6=(function(e){return this.cY.a[e]}),M.v=(function(){var e=G();return e.aD(this.cY,e.ad)}),M.p=(function(e){if(e instanceof ZS){var t=this.cY,n=e.cY;if(t===n)return!0;if(t.a.length===n.a.length){for(var r=0;r<t.a.length&&t.a[r]===n.a[r];)r=1+r|0;return r>=t.a.length}return!1}return vx(this,e)}),M.k=(function(){return new ay(this.cY)}),M.cm=(function(){return this.cY}),M.a8=(function(){return Yb()}),M.s=(function(e){return this.f6(e)}),M.c=(function(e){return this.f6(e|0)}),new F().i(ZS,`scala.collection.immutable.ArraySeq$ofFloat`,{bH:1,X:1,x:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,k:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,B:1,y:1,l:1,q:1,z:1,a0:1,a:1});function QS(e){this.cZ=null,this.cZ=e}M=QS.prototype=new VS,M.constructor=QS,M.q=(function(){return this.cZ.a.length}),M.f7=(function(e){return this.cZ.a[e]}),M.v=(function(){var e=G();return e.aD(this.cZ,e.ad)}),M.p=(function(e){return e instanceof QS?z().hZ(this.cZ,e.cZ):vx(this,e)}),M.k=(function(){return new ay(this.cZ)}),M.cm=(function(){return this.cZ}),M.a8=(function(){return Qb()}),M.s=(function(e){return this.f7(e)}),M.c=(function(e){return this.f7(e|0)}),new F().i(QS,`scala.collection.immutable.ArraySeq$ofInt`,{bI:1,X:1,x:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,k:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,B:1,y:1,l:1,q:1,z:1,a0:1,a:1});function $S(e){this.d0=null,this.d0=e}M=$S.prototype=new VS,M.constructor=$S,M.q=(function(){return this.d0.a.length>>>1|0}),M.f8=(function(e){var t=this.d0.a,n=e<<1;return Ba(t[n],t[n+1|0])}),M.v=(function(){var e=G();return e.aD(this.d0,e.ad)}),M.p=(function(e){return e instanceof $S?z().m1(this.d0,e.d0):vx(this,e)}),M.k=(function(){return new ay(this.d0)}),M.cm=(function(){return this.d0}),M.a8=(function(){return tx()}),M.s=(function(e){return this.f8(e)}),M.c=(function(e){return this.f8(e|0)}),new F().i($S,`scala.collection.immutable.ArraySeq$ofLong`,{bJ:1,X:1,x:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,k:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,B:1,y:1,l:1,q:1,z:1,a0:1,a:1});function eC(e){this.cd=null,this.cd=e}M=eC.prototype=new VS,M.constructor=eC,M.a8=(function(){return Zu().lH(Sa(this.cd).a9.Q())}),M.q=(function(){return this.cd.a.length}),M.s=(function(e){return this.cd.a[e]}),M.v=(function(){var e=G();return e.aD(this.cd,e.ad)}),M.p=(function(e){return e instanceof eC?Vl().m4(this.cd,e.cd):vx(this,e)}),M.k=(function(){return new ay(this.cd)}),M.cm=(function(){return this.cd}),M.c=(function(e){return this.s(e|0)}),new F().i(eC,`scala.collection.immutable.ArraySeq$ofRef`,{bK:1,X:1,x:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,k:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,B:1,y:1,l:1,q:1,z:1,a0:1,a:1});function tC(e){this.d1=null,this.d1=e}M=tC.prototype=new VS,M.constructor=tC,M.q=(function(){return this.d1.a.length}),M.f9=(function(e){return this.d1.a[e]}),M.v=(function(){var e=G();return e.aD(this.d1,e.ad)}),M.p=(function(e){return e instanceof tC?z().m2(this.d1,e.d1):vx(this,e)}),M.k=(function(){return new ay(this.d1)}),M.cm=(function(){return this.d1}),M.a8=(function(){return px()}),M.s=(function(e){return this.f9(e)}),M.c=(function(e){return this.f9(e|0)}),new F().i(tC,`scala.collection.immutable.ArraySeq$ofShort`,{bL:1,X:1,x:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,k:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,B:1,y:1,l:1,q:1,z:1,a0:1,a:1});function nC(e){this.dH=null,this.dH=e}M=nC.prototype=new VS,M.constructor=nC,M.q=(function(){return this.dH.a.length}),M.fa=(function(e){}),M.v=(function(){var e=G();return e.aD(this.dH,e.ad)}),M.p=(function(e){return e instanceof nC?this.dH.a.length===e.dH.a.length:vx(this,e)}),M.k=(function(){return new ay(this.dH)}),M.cm=(function(){return this.dH}),M.a8=(function(){return gx()}),M.s=(function(e){this.fa(e)}),M.c=(function(e){this.fa(e|0)}),new F().i(nC,`scala.collection.immutable.ArraySeq$ofUnit`,{bM:1,X:1,x:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,k:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,B:1,y:1,l:1,q:1,z:1,a0:1,a:1});function rC(e,t,n,r){for(var i=r,a=n;;)if(a===t)return!i.d()|0;else{if(!i.d()){var o=1+a|0,s=i.t();a=o,i=s;continue}return-1}}function iC(e,t,n){for(var r=n,i=t;;)if(i===r)return!0;else{var a=i.d(),o=r.d();if(!(a||o)&&H().o(i.y(),r.y())){var s=i.t(),c=r.t();i=s,r=c;continue}return a&&o}}function aC(){}M=aC.prototype=new eS,M.constructor=aC;function oC(){}oC.prototype=M,M.ig=(function(e){return Hg(this,e)}),M.s=(function(e){return Ug(this,e)}),M.dU=(function(e){return Wg(this,e)}),M.bl=(function(){return`LinearSeq`}),M.k=(function(){return new Xg(this)}),M.c2=(function(e){return sb(this,e)}),M.ds=(function(){return w_()}),M.ls=(function(e){if(this.d())return e;if(e.d())return this;for(var t=new CC(e.y(),this),n=t,r=e.t();!r.d();){var i=new CC(r.y(),this);n.ao=i,n=i,r=r.t()}return t}),M.d=(function(){return this===$()}),M.iu=(function(e){if(e instanceof aC)return this.ls(e);if(e.w()===0)return this;if(e instanceof zC&&this.d())return e.mI();var t=e.k();if(t.n()){for(var n=new CC(t.l(),this),r=n;t.n();){var i=new CC(t.l(),this);r.ao=i,r=i}return n}return this}),M.lF=(function(e){return e instanceof aC?e.ls(this):hy(this,e)}),M.p0=(function(e){if(this===$())var t=$();else{for(var n=new CC(e.c(this.y()),$()),r=n,i=this.t();i!==$();){var a=new CC(e.c(i.y()),$());r.ao=a,r=a,i=i.t()}var t=n}return t}),M.bE=(function(e){for(var t=this;!t.d();)e.c(t.y()),t=t.t()}),M.q=(function(){for(var e=this,t=0;!e.d();)t=1+t|0,e=e.t();return t}),M.b3=(function(e){return e<0?1:rC(this,e,0,this)}),M.bv=(function(e){for(var t=this;!t.d();){if(H().o(t.y(),e))return!0;t=t.t()}return!1}),M.bD=(function(){return`List`}),M.p=(function(e){return e instanceof aC?iC(this,this,e):vx(this,e)}),M.bg=(function(){return w_()}),M.c5=(function(e){return this.p0(e)}),M.lW=(function(e){return ob(this,e,this)}),M.c4=(function(e){return Hg(this,e|0)}),M.c=(function(e){return Ug(this,e|0)});function sC(){this.e=null}M=sC.prototype=new WS,M.constructor=sC;function cC(){}cC.prototype=M;function lC(e){this.dc=null,this.dc=e}M=lC.prototype=new KS,M.constructor=lC,M.q=(function(){return this.dc.a.length}),M.fb=(function(e){return this.dc.a[e]}),M.v=(function(){var e=G();return e.aD(this.dc,e.ad)}),M.p=(function(e){return e instanceof lC?z().m3(this.dc,e.dc):GS.prototype.p.call(this,e)}),M.k=(function(){return new ay(this.dc)}),M.bR=(function(){return this.dc}),M.a8=(function(){return Lb()}),M.s=(function(e){return this.fb(e)}),M.c=(function(e){return this.fb(e|0)}),new F().i(lC,`scala.collection.mutable.ArraySeq$ofBoolean`,{bY:1,Y:1,J:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,k:1,d:1,m:1,H:1,A:1,F:1,M:1,L:1,p:1,o:1,S:1,R:1,l:1,q:1,a:1});function uC(e){this.dd=null,this.dd=e}M=uC.prototype=new KS,M.constructor=uC,M.q=(function(){return this.dd.a.length}),M.f3=(function(e){return this.dd.a[e]}),M.v=(function(){var e=G();return e.aD(this.dd,e.ad)}),M.p=(function(e){return e instanceof uC?z().lZ(this.dd,e.dd):GS.prototype.p.call(this,e)}),M.k=(function(){return new ay(this.dd)}),M.bR=(function(){return this.dd}),M.a8=(function(){return Bb()}),M.s=(function(e){return this.f3(e)}),M.c=(function(e){return this.f3(e|0)}),new F().i(uC,`scala.collection.mutable.ArraySeq$ofByte`,{bZ:1,Y:1,J:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,k:1,d:1,m:1,H:1,A:1,F:1,M:1,L:1,p:1,o:1,S:1,R:1,l:1,q:1,a:1});function dC(e){this.bC=null,this.bC=e}M=dC.prototype=new KS,M.constructor=dC,M.q=(function(){return this.bC.a.length}),M.f4=(function(e){return this.bC.a[e]}),M.v=(function(){var e=G();return e.aD(this.bC,e.ad)}),M.p=(function(e){return e instanceof dC?z().m0(this.bC,e.bC):GS.prototype.p.call(this,e)}),M.k=(function(){return new ay(this.bC)}),M.ci=(function(e,t,n,r){var i=e.aN;t.length!==0&&(i.r=``+i.r+t);var a=this.bC.a.length;if(a!==0){if(n===``)i.lC(this.bC);else{i.q();var o=this.bC.a[0],s=``+ka(o);i.r+=s;for(var c=1;c<a;){i.r=``+i.r+n;var l=this.bC.a[c],u=``+ka(l);i.r+=u,c=1+c|0}}}return r.length!==0&&(i.r=``+i.r+r),e}),M.bR=(function(){return this.bC}),M.a8=(function(){return Ub()}),M.s=(function(e){return za(this.f4(e))}),M.c=(function(e){return za(this.f4(e|0))}),new F().i(dC,`scala.collection.mutable.ArraySeq$ofChar`,{c0:1,Y:1,J:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,k:1,d:1,m:1,H:1,A:1,F:1,M:1,L:1,p:1,o:1,S:1,R:1,l:1,q:1,a:1});function fC(e){this.bN=null,this.bN=e}M=fC.prototype=new KS,M.constructor=fC,M.q=(function(){return this.bN.a.length}),M.f5=(function(e){return this.bN.a[e]}),M.v=(function(){var e=G();return e.aD(this.bN,e.ad)}),M.p=(function(e){if(e instanceof fC){var t=e.bN;if(this.bN===t)return!0;if(this.bN.a.length===t.a.length){for(var n=0;n<this.bN.a.length&&this.bN.a[n]===t.a[n];)n=1+n|0;return n>=this.bN.a.length}return!1}return GS.prototype.p.call(this,e)}),M.k=(function(){return new ay(this.bN)}),M.bR=(function(){return this.bN}),M.a8=(function(){return Kb()}),M.s=(function(e){return this.f5(e)}),M.c=(function(e){return this.f5(e|0)}),new F().i(fC,`scala.collection.mutable.ArraySeq$ofDouble`,{c1:1,Y:1,J:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,k:1,d:1,m:1,H:1,A:1,F:1,M:1,L:1,p:1,o:1,S:1,R:1,l:1,q:1,a:1});function pC(e){this.bO=null,this.bO=e}M=pC.prototype=new KS,M.constructor=pC,M.q=(function(){return this.bO.a.length}),M.f6=(function(e){return this.bO.a[e]}),M.v=(function(){var e=G();return e.aD(this.bO,e.ad)}),M.p=(function(e){if(e instanceof pC){var t=e.bO;if(this.bO===t)return!0;if(this.bO.a.length===t.a.length){for(var n=0;n<this.bO.a.length&&this.bO.a[n]===t.a[n];)n=1+n|0;return n>=this.bO.a.length}return!1}return GS.prototype.p.call(this,e)}),M.k=(function(){return new ay(this.bO)}),M.bR=(function(){return this.bO}),M.a8=(function(){return Yb()}),M.s=(function(e){return this.f6(e)}),M.c=(function(e){return this.f6(e|0)}),new F().i(pC,`scala.collection.mutable.ArraySeq$ofFloat`,{c2:1,Y:1,J:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,k:1,d:1,m:1,H:1,A:1,F:1,M:1,L:1,p:1,o:1,S:1,R:1,l:1,q:1,a:1});function mC(e){this.de=null,this.de=e}M=mC.prototype=new KS,M.constructor=mC,M.q=(function(){return this.de.a.length}),M.f7=(function(e){return this.de.a[e]}),M.v=(function(){var e=G();return e.aD(this.de,e.ad)}),M.p=(function(e){return e instanceof mC?z().hZ(this.de,e.de):GS.prototype.p.call(this,e)}),M.k=(function(){return new ay(this.de)}),M.bR=(function(){return this.de}),M.a8=(function(){return Qb()}),M.s=(function(e){return this.f7(e)}),M.c=(function(e){return this.f7(e|0)}),new F().i(mC,`scala.collection.mutable.ArraySeq$ofInt`,{c3:1,Y:1,J:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,k:1,d:1,m:1,H:1,A:1,F:1,M:1,L:1,p:1,o:1,S:1,R:1,l:1,q:1,a:1});function hC(e){this.df=null,this.df=e}M=hC.prototype=new KS,M.constructor=hC,M.q=(function(){return this.df.a.length>>>1|0}),M.f8=(function(e){var t=this.df.a,n=e<<1;return Ba(t[n],t[n+1|0])}),M.v=(function(){var e=G();return e.aD(this.df,e.ad)}),M.p=(function(e){return e instanceof hC?z().m1(this.df,e.df):GS.prototype.p.call(this,e)}),M.k=(function(){return new ay(this.df)}),M.bR=(function(){return this.df}),M.a8=(function(){return tx()}),M.s=(function(e){return this.f8(e)}),M.c=(function(e){return this.f8(e|0)}),new F().i(hC,`scala.collection.mutable.ArraySeq$ofLong`,{c4:1,Y:1,J:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,k:1,d:1,m:1,H:1,A:1,F:1,M:1,L:1,p:1,o:1,S:1,R:1,l:1,q:1,a:1});function gC(e){this.cB=null,this.cB=e}M=gC.prototype=new KS,M.constructor=gC,M.a8=(function(){return Zu().lH(Sa(this.cB).a9.Q())}),M.q=(function(){return this.cB.a.length}),M.s=(function(e){return this.cB.a[e]}),M.v=(function(){var e=G();return e.aD(this.cB,e.ad)}),M.p=(function(e){return e instanceof gC?Vl().m4(this.cB,e.cB):GS.prototype.p.call(this,e)}),M.k=(function(){return new ay(this.cB)}),M.bR=(function(){return this.cB}),M.c=(function(e){return this.s(e|0)}),new F().i(gC,`scala.collection.mutable.ArraySeq$ofRef`,{c5:1,Y:1,J:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,k:1,d:1,m:1,H:1,A:1,F:1,M:1,L:1,p:1,o:1,S:1,R:1,l:1,q:1,a:1});function _C(e){this.dg=null,this.dg=e}M=_C.prototype=new KS,M.constructor=_C,M.q=(function(){return this.dg.a.length}),M.f9=(function(e){return this.dg.a[e]}),M.v=(function(){var e=G();return e.aD(this.dg,e.ad)}),M.p=(function(e){return e instanceof _C?z().m2(this.dg,e.dg):GS.prototype.p.call(this,e)}),M.k=(function(){return new ay(this.dg)}),M.bR=(function(){return this.dg}),M.a8=(function(){return px()}),M.s=(function(e){return this.f9(e)}),M.c=(function(e){return this.f9(e|0)}),new F().i(_C,`scala.collection.mutable.ArraySeq$ofShort`,{c6:1,Y:1,J:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,k:1,d:1,m:1,H:1,A:1,F:1,M:1,L:1,p:1,o:1,S:1,R:1,l:1,q:1,a:1});function vC(e){this.dN=null,this.dN=e}M=vC.prototype=new KS,M.constructor=vC,M.q=(function(){return this.dN.a.length}),M.fa=(function(e){}),M.v=(function(){var e=G();return e.aD(this.dN,e.ad)}),M.p=(function(e){return e instanceof vC?this.dN.a.length===e.dN.a.length:GS.prototype.p.call(this,e)}),M.k=(function(){return new ay(this.dN)}),M.bR=(function(){return this.dN}),M.a8=(function(){return gx()}),M.s=(function(e){this.fa(e)}),M.c=(function(e){this.fa(e|0)}),new F().i(vC,`scala.collection.mutable.ArraySeq$ofUnit`,{c7:1,Y:1,J:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,k:1,d:1,m:1,H:1,A:1,F:1,M:1,L:1,p:1,o:1,S:1,R:1,l:1,q:1,a:1});function yC(e,t,n,r){return e.h=n,e.j=r,HS(e,t),e}function bC(){this.e=null,this.h=null,this.j=0}M=bC.prototype=new cC,M.constructor=bC;function xC(){}xC.prototype=M;function SC(e){this.e=null,HS(this,e)}M=SC.prototype=new cC,M.constructor=SC,M.s=(function(e){if(e>=0&&e<this.e.a.length)return this.e.a[e];throw this.ay(e)}),M.dt=(function(e,t){if(e>=0&&e<this.e.a.length){var n=this.e.f();return n.a[e]=t,new SC(n)}throw this.ay(e)}),M.dm=(function(e){if(this.e.a.length<32)return new SC(V().el(this.e,e));var t=this.e,n=V().be,r=new P(1);return r.a[0]=e,new kC(t,32,n,r,33)}),M.c6=(function(e){return new SC(V().bS(this.e,e))}),M.co=(function(){return 1}),M.cn=(function(e){return this.e}),M.c=(function(e){var t=e|0;if(t>=0&&t<this.e.a.length)return this.e.a[t];throw this.ay(t)}),M.c5=(function(e){return this.c6(e)}),new F().i(SC,`scala.collection.immutable.Vector1`,{gd:1,aa:1,a5:1,x:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,k:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,B:1,y:1,l:1,q:1,z:1,a:1,W:1});function CC(e,t){this.hs=null,this.ao=null,this.hs=e,this.ao=t}M=CC.prototype=new oC,M.constructor=CC,M.cl=(function(){return new Tg(this)}),M.bi=(function(){return 2}),M.bk=(function(){return`::`}),M.bj=(function(e){if(e===0)return this.hs;if(e===1)return this.ao;throw ug(new dg,e)}),M.y=(function(){return this.hs}),M.t=(function(){return this.ao}),new F().i(CC,`scala.collection.immutable.$colon$colon`,{fv:1,aM:1,x:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,k:1,d:1,m:1,r:1,v:1,u:1,aG:1,ao:1,aL:1,aK:1,l:1,q:1,bC:1,z:1,a:1,W:1,U:1});function wC(){TC=this,$(),$()}M=wC.prototype=new oC,M.constructor=wC,M.cl=(function(){return new Tg(this)}),M.bi=(function(){return 0}),M.bk=(function(){return`Nil`}),M.bj=(function(e){throw ug(new dg,e)}),M.oG=(function(){throw new yg(`head of empty list`)}),M.pW=(function(){throw new _g(`tail of empty list`)}),M.w=(function(){return 0}),M.k=(function(){return qp().Q}),M.y=(function(){this.oG()}),M.t=(function(){this.pW()}),new F().i(wC,`scala.collection.immutable.Nil$`,{g2:1,aM:1,x:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,k:1,d:1,m:1,r:1,v:1,u:1,aG:1,ao:1,aL:1,aK:1,l:1,q:1,bC:1,z:1,a:1,W:1,U:1});var TC;function $(){return TC||=new wC,TC}function EC(){this.e=null,this.h=null,this.j=0,yC(this,V().hz,V().hz,0)}M=EC.prototype=new xC,M.constructor=EC,M.lG=(function(e){throw this.ay(e)}),M.dt=(function(e,t){throw this.ay(e)}),M.dm=(function(e){var t=new P(1);return t.a[0]=e,new SC(t)}),M.co=(function(){return 0}),M.cn=(function(e){return null}),M.p=(function(e){return this===e||(e instanceof US?!1:vx(this,e))}),M.ay=(function(e){return lg(new dg,e+` is out of bounds (empty vector)`)}),M.s=(function(e){this.lG(e)}),M.c=(function(e){this.lG(e|0)}),M.c5=(function(e){return this}),new F().i(EC,`scala.collection.immutable.Vector0$`,{gc:1,a9:1,aa:1,a5:1,x:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,k:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,B:1,y:1,l:1,q:1,z:1,a:1,W:1});var DC;function OC(){return DC||=new EC,DC}function kC(e,t,n,r,i){this.e=null,this.h=null,this.j=0,this.bu=0,this.b6=null,this.bu=t,this.b6=n,yC(this,e,r,i)}M=kC.prototype=new xC,M.constructor=kC,M.s=(function(e){if(e>=0&&e<this.j){var t=e-this.bu|0;if(t>=0){var n=t>>>5|0,r=31&t;return n<this.b6.a.length?this.b6.a[n].a[r]:this.h.a[31&t]}return this.e.a[e]}throw this.ay(e)}),M.dt=(function(e,t){if(e>=0&&e<this.j){if(e>=this.bu){var n=e-this.bu|0,r=n>>>5|0,i=31&n;if(r<this.b6.a.length){var a=this.b6.f(),o=a.a[r].f();return o.a[i]=t,a.a[r]=o,new kC(this.e,this.bu,a,this.h,this.j)}var s=this.h.f();return s.a[i]=t,new kC(this.e,this.bu,this.b6,s,this.j)}var c=this.e.f();return c.a[e]=t,new kC(c,this.bu,this.b6,this.h,this.j)}throw this.ay(e)}),M.dm=(function(e){if(this.h.a.length<32){var t=V().el(this.h,e),n=1+this.j|0;return new kC(this.e,this.bu,this.b6,t,n)}if(this.b6.a.length<30){var r=V().B(this.b6,this.h),i=new P(1);i.a[0]=e;var a=1+this.j|0;return new kC(this.e,this.bu,r,i,a)}var o=this.e,s=this.bu,c=this.b6,l=this.bu,u=V().ch,d=this.h,f=new(I.r().r()).C(1);f.a[0]=d;var p=new P(1);return p.a[0]=e,new AC(o,s,c,960+l|0,u,f,p,1+this.j|0)}),M.c6=(function(e){var t=V().bS(this.e,e),n=V().Y(2,this.b6,e),r=V().bS(this.h,e);return new kC(t,this.bu,n,r,this.j)}),M.co=(function(){return 3}),M.cn=(function(e){switch(e){case 0:return this.e;case 1:return this.b6;case 2:return this.h;default:throw new Sg(e)}}),M.c=(function(e){var t=e|0;if(t>=0&&t<this.j){var n=t-this.bu|0;if(n>=0){var r=n>>>5|0,i=31&n;return r<this.b6.a.length?this.b6.a[r].a[i]:this.h.a[31&n]}return this.e.a[t]}throw this.ay(t)}),M.c5=(function(e){return this.c6(e)}),new F().i(kC,`scala.collection.immutable.Vector2`,{ge:1,a9:1,aa:1,a5:1,x:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,k:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,B:1,y:1,l:1,q:1,z:1,a:1,W:1});function AC(e,t,n,r,i,a,o,s){this.e=null,this.h=null,this.j=0,this.b1=0,this.bd=null,this.b2=0,this.aJ=null,this.aK=null,this.b1=t,this.bd=n,this.b2=r,this.aJ=i,this.aK=a,yC(this,e,o,s)}M=AC.prototype=new xC,M.constructor=AC,M.s=(function(e){if(e>=0&&e<this.j){var t=e-this.b2|0;if(t>=0){var n=t>>>10|0,r=31&(t>>>5|0),i=31&t;return n<this.aJ.a.length?this.aJ.a[n].a[r].a[i]:r<this.aK.a.length?this.aK.a[r].a[i]:this.h.a[i]}if(e>=this.b1){var a=e-this.b1|0;return this.bd.a[a>>>5|0].a[31&a]}return this.e.a[e]}throw this.ay(e)}),M.dt=(function(e,t){if(e>=0&&e<this.j){if(e>=this.b2){var n=e-this.b2|0,r=n>>>10|0,i=31&(n>>>5|0),a=31&n;if(r<this.aJ.a.length){var o=this.aJ.f(),s=o.a[r].f(),c=s.a[i].f();return c.a[a]=t,s.a[i]=c,o.a[r]=s,new AC(this.e,this.b1,this.bd,this.b2,o,this.aK,this.h,this.j)}if(i<this.aK.a.length){var l=this.aK.f(),u=l.a[i].f();return u.a[a]=t,l.a[i]=u,new AC(this.e,this.b1,this.bd,this.b2,this.aJ,l,this.h,this.j)}var d=this.h.f();return d.a[a]=t,new AC(this.e,this.b1,this.bd,this.b2,this.aJ,this.aK,d,this.j)}if(e>=this.b1){var f=e-this.b1|0,p=this.bd,m=f>>>5|0,h=31&f,g=p.f(),_=g.a[m].f();return _.a[h]=t,g.a[m]=_,new AC(this.e,this.b1,g,this.b2,this.aJ,this.aK,this.h,this.j)}var v=this.e.f();return v.a[e]=t,new AC(v,this.b1,this.bd,this.b2,this.aJ,this.aK,this.h,this.j)}throw this.ay(e)}),M.dm=(function(e){if(this.h.a.length<32){var t=V().el(this.h,e),n=1+this.j|0;return new AC(this.e,this.b1,this.bd,this.b2,this.aJ,this.aK,t,n)}if(this.aK.a.length<31){var r=V().B(this.aK,this.h),i=new P(1);i.a[0]=e;var a=1+this.j|0;return new AC(this.e,this.b1,this.bd,this.b2,this.aJ,r,i,a)}if(this.aJ.a.length<30){var o=V().B(this.aJ,V().B(this.aK,this.h)),s=new P(1);s.a[0]=e;var c=1+this.j|0;return new AC(this.e,this.b1,this.bd,this.b2,o,V().be,s,c)}var l=this.e,u=this.b1,d=this.bd,f=this.b2,p=this.aJ,m=this.b2,h=V().ee,g=V().B(this.aK,this.h),_=new(I.r().r().r()).C(1);_.a[0]=g;var v=V().be,y=new P(1);return y.a[0]=e,new jC(l,u,d,f,p,30720+m|0,h,_,v,y,1+this.j|0)}),M.c6=(function(e){var t=V().bS(this.e,e),n=V().Y(2,this.bd,e),r=V().Y(3,this.aJ,e),i=V().Y(2,this.aK,e),a=V().bS(this.h,e);return new AC(t,this.b1,n,this.b2,r,i,a,this.j)}),M.co=(function(){return 5}),M.cn=(function(e){switch(e){case 0:return this.e;case 1:return this.bd;case 2:return this.aJ;case 3:return this.aK;case 4:return this.h;default:throw new Sg(e)}}),M.c=(function(e){var t=e|0;if(t>=0&&t<this.j){var n=t-this.b2|0;if(n>=0){var r=n>>>10|0,i=31&(n>>>5|0),a=31&n;return r<this.aJ.a.length?this.aJ.a[r].a[i].a[a]:i<this.aK.a.length?this.aK.a[i].a[a]:this.h.a[a]}if(t>=this.b1){var o=t-this.b1|0;return this.bd.a[o>>>5|0].a[31&o]}return this.e.a[t]}throw this.ay(t)}),M.c5=(function(e){return this.c6(e)}),new F().i(AC,`scala.collection.immutable.Vector3`,{gf:1,a9:1,aa:1,a5:1,x:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,k:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,B:1,y:1,l:1,q:1,z:1,a:1,W:1});function jC(e,t,n,r,i,a,o,s,c,l,u){this.e=null,this.h=null,this.j=0,this.az=0,this.aR=null,this.aA=0,this.aS=null,this.aB=0,this.aq=null,this.as=null,this.ar=null,this.az=t,this.aR=n,this.aA=r,this.aS=i,this.aB=a,this.aq=o,this.as=s,this.ar=c,yC(this,e,l,u)}M=jC.prototype=new xC,M.constructor=jC,M.s=(function(e){if(e>=0&&e<this.j){var t=e-this.aB|0;if(t>=0){var n=t>>>15|0,r=31&(t>>>10|0),i=31&(t>>>5|0),a=31&t;return n<this.aq.a.length?this.aq.a[n].a[r].a[i].a[a]:r<this.as.a.length?this.as.a[r].a[i].a[a]:i<this.ar.a.length?this.ar.a[i].a[a]:this.h.a[a]}if(e>=this.aA){var o=e-this.aA|0;return this.aS.a[o>>>10|0].a[31&(o>>>5|0)].a[31&o]}if(e>=this.az){var s=e-this.az|0;return this.aR.a[s>>>5|0].a[31&s]}return this.e.a[e]}throw this.ay(e)}),M.dt=(function(e,t){if(e>=0&&e<this.j){if(e>=this.aB){var n=e-this.aB|0,r=n>>>15|0,i=31&(n>>>10|0),a=31&(n>>>5|0),o=31&n;if(r<this.aq.a.length){var s=this.aq.f(),c=s.a[r].f(),l=c.a[i].f(),u=l.a[a].f();return u.a[o]=t,l.a[a]=u,c.a[i]=l,s.a[r]=c,new jC(this.e,this.az,this.aR,this.aA,this.aS,this.aB,s,this.as,this.ar,this.h,this.j)}if(i<this.as.a.length){var d=this.as.f(),f=d.a[i].f(),p=f.a[a].f();return p.a[o]=t,f.a[a]=p,d.a[i]=f,new jC(this.e,this.az,this.aR,this.aA,this.aS,this.aB,this.aq,d,this.ar,this.h,this.j)}if(a<this.ar.a.length){var m=this.ar.f(),h=m.a[a].f();return h.a[o]=t,m.a[a]=h,new jC(this.e,this.az,this.aR,this.aA,this.aS,this.aB,this.aq,this.as,m,this.h,this.j)}var g=this.h.f();return g.a[o]=t,new jC(this.e,this.az,this.aR,this.aA,this.aS,this.aB,this.aq,this.as,this.ar,g,this.j)}if(e>=this.aA){var _=e-this.aA|0,v=this.aS,y=_>>>10|0,b=31&(_>>>5|0),ee=31&_,te=v.f(),x=te.a[y].f(),S=x.a[b].f();return S.a[ee]=t,x.a[b]=S,te.a[y]=x,new jC(this.e,this.az,this.aR,this.aA,te,this.aB,this.aq,this.as,this.ar,this.h,this.j)}if(e>=this.az){var C=e-this.az|0,ne=this.aR,re=C>>>5|0,ie=31&C,ae=ne.f(),oe=ae.a[re].f();return oe.a[ie]=t,ae.a[re]=oe,new jC(this.e,this.az,ae,this.aA,this.aS,this.aB,this.aq,this.as,this.ar,this.h,this.j)}var se=this.e.f();return se.a[e]=t,new jC(se,this.az,this.aR,this.aA,this.aS,this.aB,this.aq,this.as,this.ar,this.h,this.j)}throw this.ay(e)}),M.dm=(function(e){if(this.h.a.length<32){var t=V().el(this.h,e),n=1+this.j|0;return new jC(this.e,this.az,this.aR,this.aA,this.aS,this.aB,this.aq,this.as,this.ar,t,n)}if(this.ar.a.length<31){var r=V().B(this.ar,this.h),i=new P(1);i.a[0]=e;var a=1+this.j|0;return new jC(this.e,this.az,this.aR,this.aA,this.aS,this.aB,this.aq,this.as,r,i,a)}if(this.as.a.length<31){var o=V().B(this.as,V().B(this.ar,this.h)),s=new P(1);s.a[0]=e;var c=1+this.j|0;return new jC(this.e,this.az,this.aR,this.aA,this.aS,this.aB,this.aq,o,V().be,s,c)}if(this.aq.a.length<30){var l=V().B(this.aq,V().B(this.as,V().B(this.ar,this.h))),u=new P(1);u.a[0]=e;var d=1+this.j|0;return new jC(this.e,this.az,this.aR,this.aA,this.aS,this.aB,l,V().ch,V().be,u,d)}var f=this.e,p=this.az,m=this.aR,h=this.aA,g=this.aS,_=this.aB,v=this.aq,y=this.aB,b=V().hA,ee=V().B(this.as,V().B(this.ar,this.h)),te=new(I.r().r().r().r()).C(1);te.a[0]=ee;var x=V().ch,S=V().be,C=new P(1);return C.a[0]=e,new MC(f,p,m,h,g,_,v,983040+y|0,b,te,x,S,C,1+this.j|0)}),M.c6=(function(e){var t=V().bS(this.e,e),n=V().Y(2,this.aR,e),r=V().Y(3,this.aS,e),i=V().Y(4,this.aq,e),a=V().Y(3,this.as,e),o=V().Y(2,this.ar,e),s=V().bS(this.h,e);return new jC(t,this.az,n,this.aA,r,this.aB,i,a,o,s,this.j)}),M.co=(function(){return 7}),M.cn=(function(e){switch(e){case 0:return this.e;case 1:return this.aR;case 2:return this.aS;case 3:return this.aq;case 4:return this.as;case 5:return this.ar;case 6:return this.h;default:throw new Sg(e)}}),M.c=(function(e){var t=e|0;if(t>=0&&t<this.j){var n=t-this.aB|0;if(n>=0){var r=n>>>15|0,i=31&(n>>>10|0),a=31&(n>>>5|0),o=31&n;return r<this.aq.a.length?this.aq.a[r].a[i].a[a].a[o]:i<this.as.a.length?this.as.a[i].a[a].a[o]:a<this.ar.a.length?this.ar.a[a].a[o]:this.h.a[o]}if(t>=this.aA){var s=t-this.aA|0;return this.aS.a[s>>>10|0].a[31&(s>>>5|0)].a[31&s]}if(t>=this.az){var c=t-this.az|0;return this.aR.a[c>>>5|0].a[31&c]}return this.e.a[t]}throw this.ay(t)}),M.c5=(function(e){return this.c6(e)}),new F().i(jC,`scala.collection.immutable.Vector4`,{gg:1,a9:1,aa:1,a5:1,x:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,k:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,B:1,y:1,l:1,q:1,z:1,a:1,W:1});function MC(e,t,n,r,i,a,o,s,c,l,u,d,f,p){this.e=null,this.h=null,this.j=0,this.af=0,this.at=null,this.ag=0,this.au=null,this.ah=0,this.av=null,this.ai=0,this.a0=null,this.a3=null,this.a2=null,this.a1=null,this.af=t,this.at=n,this.ag=r,this.au=i,this.ah=a,this.av=o,this.ai=s,this.a0=c,this.a3=l,this.a2=u,this.a1=d,yC(this,e,f,p)}M=MC.prototype=new xC,M.constructor=MC,M.s=(function(e){if(e>=0&&e<this.j){var t=e-this.ai|0;if(t>=0){var n=t>>>20|0,r=31&(t>>>15|0),i=31&(t>>>10|0),a=31&(t>>>5|0),o=31&t;return n<this.a0.a.length?this.a0.a[n].a[r].a[i].a[a].a[o]:r<this.a3.a.length?this.a3.a[r].a[i].a[a].a[o]:i<this.a2.a.length?this.a2.a[i].a[a].a[o]:a<this.a1.a.length?this.a1.a[a].a[o]:this.h.a[o]}if(e>=this.ah){var s=e-this.ah|0;return this.av.a[s>>>15|0].a[31&(s>>>10|0)].a[31&(s>>>5|0)].a[31&s]}if(e>=this.ag){var c=e-this.ag|0;return this.au.a[c>>>10|0].a[31&(c>>>5|0)].a[31&c]}if(e>=this.af){var l=e-this.af|0;return this.at.a[l>>>5|0].a[31&l]}return this.e.a[e]}throw this.ay(e)}),M.dt=(function(e,t){if(e>=0&&e<this.j){if(e>=this.ai){var n=e-this.ai|0,r=n>>>20|0,i=31&(n>>>15|0),a=31&(n>>>10|0),o=31&(n>>>5|0),s=31&n;if(r<this.a0.a.length){var c=this.a0.f(),l=c.a[r].f(),u=l.a[i].f(),d=u.a[a].f(),f=d.a[o].f();return f.a[s]=t,d.a[o]=f,u.a[a]=d,l.a[i]=u,c.a[r]=l,new MC(this.e,this.af,this.at,this.ag,this.au,this.ah,this.av,this.ai,c,this.a3,this.a2,this.a1,this.h,this.j)}if(i<this.a3.a.length){var p=this.a3.f(),m=p.a[i].f(),h=m.a[a].f(),g=h.a[o].f();return g.a[s]=t,h.a[o]=g,m.a[a]=h,p.a[i]=m,new MC(this.e,this.af,this.at,this.ag,this.au,this.ah,this.av,this.ai,this.a0,p,this.a2,this.a1,this.h,this.j)}if(a<this.a2.a.length){var _=this.a2.f(),v=_.a[a].f(),y=v.a[o].f();return y.a[s]=t,v.a[o]=y,_.a[a]=v,new MC(this.e,this.af,this.at,this.ag,this.au,this.ah,this.av,this.ai,this.a0,this.a3,_,this.a1,this.h,this.j)}if(o<this.a1.a.length){var b=this.a1.f(),ee=b.a[o].f();return ee.a[s]=t,b.a[o]=ee,new MC(this.e,this.af,this.at,this.ag,this.au,this.ah,this.av,this.ai,this.a0,this.a3,this.a2,b,this.h,this.j)}var te=this.h.f();return te.a[s]=t,new MC(this.e,this.af,this.at,this.ag,this.au,this.ah,this.av,this.ai,this.a0,this.a3,this.a2,this.a1,te,this.j)}if(e>=this.ah){var x=e-this.ah|0,S=this.av,C=x>>>15|0,ne=31&(x>>>10|0),re=31&(x>>>5|0),ie=31&x,ae=S.f(),oe=ae.a[C].f(),se=oe.a[ne].f(),ce=se.a[re].f();return ce.a[ie]=t,se.a[re]=ce,oe.a[ne]=se,ae.a[C]=oe,new MC(this.e,this.af,this.at,this.ag,this.au,this.ah,ae,this.ai,this.a0,this.a3,this.a2,this.a1,this.h,this.j)}if(e>=this.ag){var le=e-this.ag|0,ue=this.au,de=le>>>10|0,fe=31&(le>>>5|0),w=31&le,pe=ue.f(),me=pe.a[de].f(),he=me.a[fe].f();return he.a[w]=t,me.a[fe]=he,pe.a[de]=me,new MC(this.e,this.af,this.at,this.ag,pe,this.ah,this.av,this.ai,this.a0,this.a3,this.a2,this.a1,this.h,this.j)}if(e>=this.af){var ge=e-this.af|0,_e=this.at,ve=ge>>>5|0,ye=31&ge,be=_e.f(),xe=be.a[ve].f();return xe.a[ye]=t,be.a[ve]=xe,new MC(this.e,this.af,be,this.ag,this.au,this.ah,this.av,this.ai,this.a0,this.a3,this.a2,this.a1,this.h,this.j)}var Se=this.e.f();return Se.a[e]=t,new MC(Se,this.af,this.at,this.ag,this.au,this.ah,this.av,this.ai,this.a0,this.a3,this.a2,this.a1,this.h,this.j)}throw this.ay(e)}),M.dm=(function(e){if(this.h.a.length<32){var t=V().el(this.h,e),n=1+this.j|0;return new MC(this.e,this.af,this.at,this.ag,this.au,this.ah,this.av,this.ai,this.a0,this.a3,this.a2,this.a1,t,n)}if(this.a1.a.length<31){var r=V().B(this.a1,this.h),i=new P(1);i.a[0]=e;var a=1+this.j|0;return new MC(this.e,this.af,this.at,this.ag,this.au,this.ah,this.av,this.ai,this.a0,this.a3,this.a2,r,i,a)}if(this.a2.a.length<31){var o=V().B(this.a2,V().B(this.a1,this.h)),s=new P(1);s.a[0]=e;var c=1+this.j|0;return new MC(this.e,this.af,this.at,this.ag,this.au,this.ah,this.av,this.ai,this.a0,this.a3,o,V().be,s,c)}if(this.a3.a.length<31){var l=V().B(this.a3,V().B(this.a2,V().B(this.a1,this.h))),u=new P(1);u.a[0]=e;var d=1+this.j|0;return new MC(this.e,this.af,this.at,this.ag,this.au,this.ah,this.av,this.ai,this.a0,l,V().ch,V().be,u,d)}if(this.a0.a.length<30){var f=V().B(this.a0,V().B(this.a3,V().B(this.a2,V().B(this.a1,this.h)))),p=new P(1);p.a[0]=e;var m=1+this.j|0;return new MC(this.e,this.af,this.at,this.ag,this.au,this.ah,this.av,this.ai,f,V().ee,V().ch,V().be,p,m)}var h=this.e,g=this.af,_=this.at,v=this.ag,y=this.au,b=this.ah,ee=this.av,te=this.ai,x=this.a0,S=this.ai,C=V().l6,ne=V().B(this.a3,V().B(this.a2,V().B(this.a1,this.h))),re=new(I.r().r().r().r().r()).C(1);re.a[0]=ne;var ie=V().ee,ae=V().ch,oe=V().be,se=new P(1);return se.a[0]=e,new NC(h,g,_,v,y,b,ee,te,x,31457280+S|0,C,re,ie,ae,oe,se,1+this.j|0)}),M.c6=(function(e){var t=V().bS(this.e,e),n=V().Y(2,this.at,e),r=V().Y(3,this.au,e),i=V().Y(4,this.av,e),a=V().Y(5,this.a0,e),o=V().Y(4,this.a3,e),s=V().Y(3,this.a2,e),c=V().Y(2,this.a1,e),l=V().bS(this.h,e);return new MC(t,this.af,n,this.ag,r,this.ah,i,this.ai,a,o,s,c,l,this.j)}),M.co=(function(){return 9}),M.cn=(function(e){switch(e){case 0:return this.e;case 1:return this.at;case 2:return this.au;case 3:return this.av;case 4:return this.a0;case 5:return this.a3;case 6:return this.a2;case 7:return this.a1;case 8:return this.h;default:throw new Sg(e)}}),M.c=(function(e){var t=e|0;if(t>=0&&t<this.j){var n=t-this.ai|0;if(n>=0){var r=n>>>20|0,i=31&(n>>>15|0),a=31&(n>>>10|0),o=31&(n>>>5|0),s=31&n;return r<this.a0.a.length?this.a0.a[r].a[i].a[a].a[o].a[s]:i<this.a3.a.length?this.a3.a[i].a[a].a[o].a[s]:a<this.a2.a.length?this.a2.a[a].a[o].a[s]:o<this.a1.a.length?this.a1.a[o].a[s]:this.h.a[s]}if(t>=this.ah){var c=t-this.ah|0;return this.av.a[c>>>15|0].a[31&(c>>>10|0)].a[31&(c>>>5|0)].a[31&c]}if(t>=this.ag){var l=t-this.ag|0;return this.au.a[l>>>10|0].a[31&(l>>>5|0)].a[31&l]}if(t>=this.af){var u=t-this.af|0;return this.at.a[u>>>5|0].a[31&u]}return this.e.a[t]}throw this.ay(t)}),M.c5=(function(e){return this.c6(e)}),new F().i(MC,`scala.collection.immutable.Vector5`,{gh:1,a9:1,aa:1,a5:1,x:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,k:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,B:1,y:1,l:1,q:1,z:1,a:1,W:1});function NC(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){this.e=null,this.h=null,this.j=0,this.a4=0,this.aj=null,this.a5=0,this.ak=null,this.a6=0,this.al=null,this.a7=0,this.am=null,this.ac=0,this.S=null,this.W=null,this.V=null,this.U=null,this.T=null,this.a4=t,this.aj=n,this.a5=r,this.ak=i,this.a6=a,this.al=o,this.a7=s,this.am=c,this.ac=l,this.S=u,this.W=d,this.V=f,this.U=p,this.T=m,yC(this,e,h,g)}M=NC.prototype=new xC,M.constructor=NC,M.s=(function(e){if(e>=0&&e<this.j){var t=e-this.ac|0;if(t>=0){var n=t>>>25|0,r=31&(t>>>20|0),i=31&(t>>>15|0),a=31&(t>>>10|0),o=31&(t>>>5|0),s=31&t;return n<this.S.a.length?this.S.a[n].a[r].a[i].a[a].a[o].a[s]:r<this.W.a.length?this.W.a[r].a[i].a[a].a[o].a[s]:i<this.V.a.length?this.V.a[i].a[a].a[o].a[s]:a<this.U.a.length?this.U.a[a].a[o].a[s]:o<this.T.a.length?this.T.a[o].a[s]:this.h.a[s]}if(e>=this.a7){var c=e-this.a7|0;return this.am.a[c>>>20|0].a[31&(c>>>15|0)].a[31&(c>>>10|0)].a[31&(c>>>5|0)].a[31&c]}if(e>=this.a6){var l=e-this.a6|0;return this.al.a[l>>>15|0].a[31&(l>>>10|0)].a[31&(l>>>5|0)].a[31&l]}if(e>=this.a5){var u=e-this.a5|0;return this.ak.a[u>>>10|0].a[31&(u>>>5|0)].a[31&u]}if(e>=this.a4){var d=e-this.a4|0;return this.aj.a[d>>>5|0].a[31&d]}return this.e.a[e]}throw this.ay(e)}),M.dt=(function(e,t){if(e>=0&&e<this.j){if(e>=this.ac){var n=e-this.ac|0,r=n>>>25|0,i=31&(n>>>20|0),a=31&(n>>>15|0),o=31&(n>>>10|0),s=31&(n>>>5|0),c=31&n;if(r<this.S.a.length){var l=this.S.f(),u=l.a[r].f(),d=u.a[i].f(),f=d.a[a].f(),p=f.a[o].f(),m=p.a[s].f();return m.a[c]=t,p.a[s]=m,f.a[o]=p,d.a[a]=f,u.a[i]=d,l.a[r]=u,new NC(this.e,this.a4,this.aj,this.a5,this.ak,this.a6,this.al,this.a7,this.am,this.ac,l,this.W,this.V,this.U,this.T,this.h,this.j)}if(i<this.W.a.length){var h=this.W.f(),g=h.a[i].f(),_=g.a[a].f(),v=_.a[o].f(),y=v.a[s].f();return y.a[c]=t,v.a[s]=y,_.a[o]=v,g.a[a]=_,h.a[i]=g,new NC(this.e,this.a4,this.aj,this.a5,this.ak,this.a6,this.al,this.a7,this.am,this.ac,this.S,h,this.V,this.U,this.T,this.h,this.j)}if(a<this.V.a.length){var b=this.V.f(),ee=b.a[a].f(),te=ee.a[o].f(),x=te.a[s].f();return x.a[c]=t,te.a[s]=x,ee.a[o]=te,b.a[a]=ee,new NC(this.e,this.a4,this.aj,this.a5,this.ak,this.a6,this.al,this.a7,this.am,this.ac,this.S,this.W,b,this.U,this.T,this.h,this.j)}if(o<this.U.a.length){var S=this.U.f(),C=S.a[o].f(),ne=C.a[s].f();return ne.a[c]=t,C.a[s]=ne,S.a[o]=C,new NC(this.e,this.a4,this.aj,this.a5,this.ak,this.a6,this.al,this.a7,this.am,this.ac,this.S,this.W,this.V,S,this.T,this.h,this.j)}if(s<this.T.a.length){var re=this.T.f(),ie=re.a[s].f();return ie.a[c]=t,re.a[s]=ie,new NC(this.e,this.a4,this.aj,this.a5,this.ak,this.a6,this.al,this.a7,this.am,this.ac,this.S,this.W,this.V,this.U,re,this.h,this.j)}var ae=this.h.f();return ae.a[c]=t,new NC(this.e,this.a4,this.aj,this.a5,this.ak,this.a6,this.al,this.a7,this.am,this.ac,this.S,this.W,this.V,this.U,this.T,ae,this.j)}if(e>=this.a7){var oe=e-this.a7|0,se=this.am,ce=oe>>>20|0,le=31&(oe>>>15|0),ue=31&(oe>>>10|0),de=31&(oe>>>5|0),fe=31&oe,w=se.f(),pe=w.a[ce].f(),me=pe.a[le].f(),he=me.a[ue].f(),ge=he.a[de].f();return ge.a[fe]=t,he.a[de]=ge,me.a[ue]=he,pe.a[le]=me,w.a[ce]=pe,new NC(this.e,this.a4,this.aj,this.a5,this.ak,this.a6,this.al,this.a7,w,this.ac,this.S,this.W,this.V,this.U,this.T,this.h,this.j)}if(e>=this.a6){var _e=e-this.a6|0,ve=this.al,ye=_e>>>15|0,be=31&(_e>>>10|0),xe=31&(_e>>>5|0),Se=31&_e,Ce=ve.f(),we=Ce.a[ye].f(),Te=we.a[be].f(),Ee=Te.a[xe].f();return Ee.a[Se]=t,Te.a[xe]=Ee,we.a[be]=Te,Ce.a[ye]=we,new NC(this.e,this.a4,this.aj,this.a5,this.ak,this.a6,Ce,this.a7,this.am,this.ac,this.S,this.W,this.V,this.U,this.T,this.h,this.j)}if(e>=this.a5){var De=e-this.a5|0,Oe=this.ak,ke=De>>>10|0,Ae=31&(De>>>5|0),je=31&De,Me=Oe.f(),Ne=Me.a[ke].f(),Pe=Ne.a[Ae].f();return Pe.a[je]=t,Ne.a[Ae]=Pe,Me.a[ke]=Ne,new NC(this.e,this.a4,this.aj,this.a5,Me,this.a6,this.al,this.a7,this.am,this.ac,this.S,this.W,this.V,this.U,this.T,this.h,this.j)}if(e>=this.a4){var T=e-this.a4|0,Fe=this.aj,Ie=T>>>5|0,Le=31&T,Re=Fe.f(),ze=Re.a[Ie].f();return ze.a[Le]=t,Re.a[Ie]=ze,new NC(this.e,this.a4,Re,this.a5,this.ak,this.a6,this.al,this.a7,this.am,this.ac,this.S,this.W,this.V,this.U,this.T,this.h,this.j)}var Be=this.e.f();return Be.a[e]=t,new NC(Be,this.a4,this.aj,this.a5,this.ak,this.a6,this.al,this.a7,this.am,this.ac,this.S,this.W,this.V,this.U,this.T,this.h,this.j)}throw this.ay(e)}),M.dm=(function(e){if(this.h.a.length<32){var t=V().el(this.h,e),n=1+this.j|0;return new NC(this.e,this.a4,this.aj,this.a5,this.ak,this.a6,this.al,this.a7,this.am,this.ac,this.S,this.W,this.V,this.U,this.T,t,n)}if(this.T.a.length<31){var r=V().B(this.T,this.h),i=new P(1);i.a[0]=e;var a=1+this.j|0;return new NC(this.e,this.a4,this.aj,this.a5,this.ak,this.a6,this.al,this.a7,this.am,this.ac,this.S,this.W,this.V,this.U,r,i,a)}if(this.U.a.length<31){var o=V().B(this.U,V().B(this.T,this.h)),s=new P(1);s.a[0]=e;var c=1+this.j|0;return new NC(this.e,this.a4,this.aj,this.a5,this.ak,this.a6,this.al,this.a7,this.am,this.ac,this.S,this.W,this.V,o,V().be,s,c)}if(this.V.a.length<31){var l=V().B(this.V,V().B(this.U,V().B(this.T,this.h))),u=new P(1);u.a[0]=e;var d=1+this.j|0;return new NC(this.e,this.a4,this.aj,this.a5,this.ak,this.a6,this.al,this.a7,this.am,this.ac,this.S,this.W,l,V().ch,V().be,u,d)}if(this.W.a.length<31){var f=V().B(this.W,V().B(this.V,V().B(this.U,V().B(this.T,this.h)))),p=new P(1);p.a[0]=e;var m=1+this.j|0;return new NC(this.e,this.a4,this.aj,this.a5,this.ak,this.a6,this.al,this.a7,this.am,this.ac,this.S,f,V().ee,V().ch,V().be,p,m)}if(this.S.a.length<62){var h=V().B(this.S,V().B(this.W,V().B(this.V,V().B(this.U,V().B(this.T,this.h))))),g=new P(1);g.a[0]=e;var _=1+this.j|0;return new NC(this.e,this.a4,this.aj,this.a5,this.ak,this.a6,this.al,this.a7,this.am,this.ac,h,V().hA,V().ee,V().ch,V().be,g,_)}throw og(new sg)}),M.c6=(function(e){var t=V().bS(this.e,e),n=V().Y(2,this.aj,e),r=V().Y(3,this.ak,e),i=V().Y(4,this.al,e),a=V().Y(5,this.am,e),o=V().Y(6,this.S,e),s=V().Y(5,this.W,e),c=V().Y(4,this.V,e),l=V().Y(3,this.U,e),u=V().Y(2,this.T,e),d=V().bS(this.h,e);return new NC(t,this.a4,n,this.a5,r,this.a6,i,this.a7,a,this.ac,o,s,c,l,u,d,this.j)}),M.co=(function(){return 11}),M.cn=(function(e){switch(e){case 0:return this.e;case 1:return this.aj;case 2:return this.ak;case 3:return this.al;case 4:return this.am;case 5:return this.S;case 6:return this.W;case 7:return this.V;case 8:return this.U;case 9:return this.T;case 10:return this.h;default:throw new Sg(e)}}),M.c=(function(e){var t=e|0;if(t>=0&&t<this.j){var n=t-this.ac|0;if(n>=0){var r=n>>>25|0,i=31&(n>>>20|0),a=31&(n>>>15|0),o=31&(n>>>10|0),s=31&(n>>>5|0),c=31&n;return r<this.S.a.length?this.S.a[r].a[i].a[a].a[o].a[s].a[c]:i<this.W.a.length?this.W.a[i].a[a].a[o].a[s].a[c]:a<this.V.a.length?this.V.a[a].a[o].a[s].a[c]:o<this.U.a.length?this.U.a[o].a[s].a[c]:s<this.T.a.length?this.T.a[s].a[c]:this.h.a[c]}if(t>=this.a7){var l=t-this.a7|0;return this.am.a[l>>>20|0].a[31&(l>>>15|0)].a[31&(l>>>10|0)].a[31&(l>>>5|0)].a[31&l]}if(t>=this.a6){var u=t-this.a6|0;return this.al.a[u>>>15|0].a[31&(u>>>10|0)].a[31&(u>>>5|0)].a[31&u]}if(t>=this.a5){var d=t-this.a5|0;return this.ak.a[d>>>10|0].a[31&(d>>>5|0)].a[31&d]}if(t>=this.a4){var f=t-this.a4|0;return this.aj.a[f>>>5|0].a[31&f]}return this.e.a[t]}throw this.ay(t)}),M.c5=(function(e){return this.c6(e)}),new F().i(NC,`scala.collection.immutable.Vector6`,{gi:1,a9:1,aa:1,a5:1,x:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,k:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,B:1,y:1,l:1,q:1,z:1,a:1,W:1});function PC(e,t){return e.aN=t,e}function FC(e){return PC(e,Ym(new Zm)),e}function IC(){this.aN=null}M=IC.prototype=new dS,M.constructor=IC,M.aU=(function(e){return Af(this,e)}),M.aW=(function(e){}),M.k=(function(){return oy(new cy,new Qx(this))}),M.b3=(function(e){var t=this.aN.q();return t===e?0:t<e?-1:1}),M.bl=(function(){return`IndexedSeq`}),M.q=(function(){return this.aN.q()}),M.w=(function(){return this.aN.q()}),M.nl=(function(e){var t=this.aN,n=``+ka(e);return t.r+=n,this}),M.x=(function(){return this.aN.r}),M.lD=(function(e){if(e instanceof dC)this.aN.lC(e.bC);else if(e instanceof IC){var t=this.aN,n=e.aN;t.r=``+t.r+n}else{var r=e.w();if(r!==0){var i=this.aN;r>0&&i.q();for(var a=e.k();a.n();){var o=``+ka(Ha(a.l()));i.r+=o}}}return this}),M.d=(function(){return this.aN.q()===0}),M.s=(function(e){return za(this.aN.lL(e))}),M.c=(function(e){var t=e|0;return za(this.aN.lL(t))}),M.fl=(function(e){return FC(new IC).lD(e)}),M.en=(function(e){return FC(new IC).lD(e)}),M.aO=(function(e){return this.nl(Ha(e))}),M.aV=(function(){return this.aN.r}),M.bg=(function(){return dv()}),new F().i(IC,`scala.collection.mutable.StringBuilder`,{cb:1,J:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,k:1,d:1,m:1,H:1,A:1,F:1,M:1,L:1,E:1,G:1,K:1,a6:1,p:1,o:1,S:1,R:1,aD:1,a:1});function LC(e){var t=new zC().gp(e);e.bP=t.bP,e.cE=t.cE,e.g2=!1}function RC(e){e.g3=1+e.g3|0,e.g2&&LC(e)}function zC(){this.g3=0,this.bP=null,this.cE=null,this.g2=!1,this.bQ=0,this.g3=0,this.bP=$(),this.cE=null,this.g2=!1,this.bQ=0}M=zC.prototype=new jS,M.constructor=zC,M.c2=(function(e){return my(this,e)}),M.aW=(function(e){}),M.k=(function(){return new hv(this.bP.k(),new fm((()=>this.g3)))}),M.ds=(function(){return mv()}),M.s=(function(e){return Ug(this.bP,e)}),M.q=(function(){return this.bQ}),M.w=(function(){return this.bQ}),M.d=(function(){return this.bQ===0}),M.mI=(function(){return this.g2=!this.d(),this.bP}),M.nt=(function(e){RC(this);var t=new CC(e,$());if(this.bQ===0)this.bP=t;else{var n=this.cE;n===null&&rd().c8(),n.ao=t}return this.cE=t,this.bQ=1+this.bQ|0,this}),M.gp=(function(e){var t=e.k();if(t.n()){var n=1,r=new CC(t.l(),$());for(this.bP=r;t.n();){var i=new CC(t.l(),$());r.ao=i,r=i,n=1+n|0}this.bQ=n,this.cE=r}return this}),M.nj=(function(e){var t=e.k();if(t.n()){var n=new zC().gp(t);if(RC(this),this.bQ===0)this.bP=n.bP;else{var r=this.cE;r===null&&rd().c8(),r.ao=n.bP}this.cE=n.cE,this.bQ=this.bQ+n.bQ|0}return this}),M.bl=(function(){return`ListBuffer`}),M.bg=(function(){return mv()}),M.c=(function(e){var t=e|0;return Ug(this.bP,t)}),M.aV=(function(){return this.mI()}),M.aO=(function(e){return this.nt(e)}),M.aU=(function(e){return this.nj(e)}),new F().i(zC,`scala.collection.mutable.ListBuffer`,{ca:1,aO:1,J:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,k:1,d:1,m:1,H:1,A:1,F:1,M:1,L:1,E:1,G:1,au:1,aP:1,l:1,q:1,K:1,a6:1,a:1,W:1});function BC(e,t,n){return e.ef=0,e.cA=t,e.aT=n,e}function VC(e){return BC(e,new P(16),0),e}function HC(){this.ef=0,this.cA=null,this.aT=0}M=HC.prototype=new jS,M.constructor=HC,M.k=(function(){return this.q4().k()}),M.b3=(function(e){var t=this.aT;return t===e?0:t<e?-1:1}),M.c2=(function(e){return my(this,e)}),M.w=(function(){return this.aT}),M.hY=(function(e){this.cA=Z_().mF(this.cA,this.aT,e)}),M.aW=(function(e){e>this.aT&&e>=1&&this.hY(e)}),M.s=(function(e){var t=1+e|0;if(e<0)throw bu().id(e,this.aT-1|0);if(t>this.aT)throw bu().id(t-1|0,this.aT-1|0);return this.cA.a[e]}),M.q=(function(){return this.aT}),M.q4=(function(){return new tS(this,new fm((()=>this.ef)))}),M.ds=(function(){return Z_()}),M.nq=(function(e){this.ef=1+this.ef|0;var t=1+this.aT|0;return this.cA.a.length<=(t-1|0)&&this.hY(t),this.aT=t,this.cA.a[t-1|0]=e,this}),M.ly=(function(e){if(e instanceof HC){var t=e.aT;t>0&&(this.ef=1+this.ef|0,this.hY(this.aT+t|0),Vl().fe(e.cA,0,this.cA,this.aT,t),this.aT=this.aT+t|0)}else Af(this,e);return this}),M.bl=(function(){return`ArrayBuffer`}),M.bf=(function(e,t,n){var r=this.aT,i=Ol().bF(e),a=n<r?n:r,o=t<0?i:i-t|0,s=o<a?o:a,c=s<0?0:s;return c>0&&Vl().fe(this.cA,0,e,t,c),c}),M.c=(function(e){return this.s(e|0)}),M.bg=(function(){return Z_()}),M.aO=(function(e){return this.nq(e)}),M.aU=(function(e){return this.ly(e)}),new F().i(HC,`scala.collection.mutable.ArrayBuffer`,{bX:1,aO:1,J:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,k:1,d:1,m:1,H:1,A:1,F:1,M:1,L:1,E:1,G:1,au:1,aP:1,p:1,o:1,S:1,R:1,c9:1,l:1,q:1,a:1,W:1});function UC(e,t){return e.dk=t,e}function WC(e){return UC(e,[]),e}function GC(){this.dk=null}M=GC.prototype=new jS,M.constructor=GC,M.aW=(function(e){}),M.bl=(function(){return`IndexedSeq`}),M.k=(function(){return oy(new cy,new Qx(this))}),M.b3=(function(e){var t=this.dk.length|0;return t===e?0:t<e?-1:1}),M.c2=(function(e){return my(this,e)}),M.ds=(function(){return Sv()}),M.s=(function(e){return this.dk[e]}),M.q=(function(){return this.dk.length|0}),M.w=(function(){return this.dk.length|0}),M.bD=(function(){return`WrappedArray`}),M.aV=(function(){return this}),M.aO=(function(e){return this.dk.push(e),this}),M.c=(function(e){var t=e|0;return this.dk[t]}),M.bg=(function(){return Sv()}),new F().i(GC,`scala.scalajs.js.WrappedArray`,{hx:1,aO:1,J:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,k:1,d:1,m:1,H:1,A:1,F:1,M:1,L:1,E:1,G:1,au:1,aP:1,q:1,l:1,R:1,p:1,o:1,S:1,c9:1,K:1,a:1}),jc(new(Qv.r()).C([]));