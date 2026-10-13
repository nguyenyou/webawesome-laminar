var e=Object.defineProperty,t=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r};
/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const n=globalThis,r=n.ShadowRoot&&(n.ShadyCSS===void 0||n.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,i=Symbol(),a=/* @__PURE__ */ new WeakMap;var o=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(r&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=a.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&a.set(t,e))}return e}toString(){return this.cssText}};const s=e=>new o(typeof e==`string`?e:e+``,void 0,i),c=(e,...t)=>new o(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,i),l=(e,t)=>{if(r)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let r of t){let t=document.createElement(`style`),i=n.litNonce;i!==void 0&&t.setAttribute(`nonce`,i),t.textContent=r.cssText,e.appendChild(t)}},u=r?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return s(t)})(e):e,{is:d,defineProperty:f,getOwnPropertyDescriptor:p,getOwnPropertyNames:m,getOwnPropertySymbols:h,getPrototypeOf:g}=Object,_=globalThis,v=_.trustedTypes,y=v?v.emptyScript:``,b=_.reactiveElementPolyfillSupport,x=(e,t)=>e,S={toAttribute(e,t){
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
switch(t){case Boolean:e=e?y:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},C=(e,t)=>!d(e,t),w={attribute:!0,type:String,converter:S,reflect:!1,useDefault:!1,hasChanged:C};Symbol.metadata??=Symbol(`metadata`),_.litPropertyMetadata??=/* @__PURE__ */ new WeakMap;var T=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=w){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&f(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=p(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??w}static _$Ei(){if(this.hasOwnProperty(x(`elementProperties`)))return;let e=g(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(x(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x(`properties`))){let e=this.properties,t=[...m(e),...h(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=/* @__PURE__ */ new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(u(e))}else e!==void 0&&t.push(u(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=/* @__PURE__ */ new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=/* @__PURE__ */ new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=/* @__PURE__ */ new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return l(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?S:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?S:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??C)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=/* @__PURE__ */ new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=/* @__PURE__ */ new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=/* @__PURE__ */ new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};T.elementStyles=[],T.shadowRootOptions={mode:`open`},T[x(`elementProperties`)]=/* @__PURE__ */ new Map,T[x(`finalized`)]=/* @__PURE__ */ new Map,b?.({ReactiveElement:T}),(_.reactiveElementVersions??=[]).push(`2.1.2`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const ee=globalThis,te=e=>e,ne=ee.trustedTypes,E=ne?ne.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,re=`$lit$`,ie=`lit$${Math.random().toFixed(9).slice(2)}$`,ae=`?`+ie,oe=`<${ae}>`,se=document,D=()=>se.createComment(``),ce=e=>e===null||typeof e!=`object`&&typeof e!=`function`,O=Array.isArray,le=e=>O(e)||typeof e?.[Symbol.iterator]==`function`,ue=`[ 	
\f\r]`,de=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,fe=/-->/g,pe=/>/g,me=RegExp(`>|${ue}(?:([^\\s"'>=/]+)(${ue}*=${ue}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),he=/'/g,ge=/"/g,_e=/^(?:script|style|textarea|title)$/i,ve=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),ye=Symbol.for(`lit-noChange`),be=Symbol.for(`lit-nothing`),xe=/* @__PURE__ */ new WeakMap,Se=se.createTreeWalker(se,129);function Ce(e,t){if(!O(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return E===void 0?t:E.createHTML(t)}const we=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=de;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===de?c[1]===`!--`?o=fe:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=me):(_e.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=me):o=pe:o===me?c[0]===`>`?(o=i??de,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?me:c[3]===`"`?ge:he):o===ge||o===he?o=me:o===fe||o===pe?o=de:(o=me,i=void 0);let d=o===me&&e[t+1].startsWith(`/>`)?` `:``;a+=o===de?n+oe:l>=0?(r.push(s),n.slice(0,l)+re+n.slice(l)+ie+d):n+ie+(l===-2?t:d)}return[Ce(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]};var Te=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=we(t,n);if(this.el=e.createElement(l,r),Se.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=Se.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(re)){let t=u[o++],n=i.getAttribute(e).split(ie),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Ae:r[1]===`?`?k:r[1]===`@`?je:ke}),i.removeAttribute(e)}else e.startsWith(ie)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(_e.test(i.tagName)){let e=i.textContent.split(ie),t=e.length-1;if(t>0){i.textContent=ne?ne.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],D()),Se.nextNode(),c.push({type:2,index:++a});i.append(e[t],D())}}}else if(i.nodeType===8){if(i.data===ae)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(ie,e+1))!==-1;)c.push({type:7,index:a}),e+=ie.length-1}}a++}}static createElement(e,t){let n=se.createElement(`template`);return n.innerHTML=e,n}};function Ee(e,t,n=e,r){if(t===ye)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=ce(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=Ee(e,i._$AS(e,t.values),i,r)),t}var De=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??se).importNode(t,!0);Se.currentNode=r;let i=Se.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Oe(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Me(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=Se.nextNode(),a++)}return Se.currentNode=se,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Oe=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=be,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ee(this,e,t),ce(e)?e===be||e==null||e===``?(this._$AH!==be&&this._$AR(),this._$AH=be):e!==this._$AH&&e!==ye&&this._(e):e._$litType$===void 0?e.nodeType===void 0?le(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==be&&ce(this._$AH)?this._$AA.nextSibling.data=e:this.T(se.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Te.createElement(Ce(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new De(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=xe.get(e.strings);return t===void 0&&xe.set(e.strings,t=new Te(e)),t}k(t){O(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(D()),this.O(D()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=te(e).nextSibling;te(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},ke=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=be,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(/* @__PURE__ */ new String),this.strings=n):this._$AH=be}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=Ee(this,e,t,0),a=!ce(e)||e!==this._$AH&&e!==ye,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=Ee(this,r[n+o],t,o),s===ye&&(s=this._$AH[o]),a||=!ce(s)||s!==this._$AH[o],s===be?e=be:e!==be&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===be?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Ae=class extends ke{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===be?void 0:e}},k=class extends ke{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==be)}},je=class extends ke{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=Ee(this,e,t,0)??be)===ye)return;let n=this._$AH,r=e===be&&n!==be||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==be&&(n===be||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Me=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Ee(this,e)}};const Ne={M:re,P:ie,A:ae,C:1,L:we,R:De,D:le,V:Ee,I:Oe,H:ke,N:k,U:je,B:Ae,F:Me},Pe=ee.litHtmlPolyfillSupport;Pe?.(Te,Oe),(ee.litHtmlVersions??=[]).push(`3.3.3`);const Fe=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Oe(t.insertBefore(D(),e),e,void 0,n??{})}return i._$AI(e),i},Ie=globalThis
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
;var Le=class extends T{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Fe(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ye}};Le._$litElement$=!0,Le.finalized=!0,Ie.litElementHydrateSupport?.({LitElement:Le});const Re=Ie.litElementPolyfillSupport;Re?.({LitElement:Le}),(Ie.litElementVersions??=[]).push(`4.2.2`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var ze=c`
  :host {
    color: var(--wa-color-text-link);
    display: inline-flex;
    align-items: center;
    font: inherit;
    font-weight: var(--wa-font-weight-action);
    line-height: var(--wa-line-height-normal);
    white-space: nowrap;
  }

  :host(:last-of-type) {
    color: var(--wa-color-text-quiet);
  }

  .label {
    display: inline-block;
    font: inherit;
    text-decoration: none;
    color: currentColor;
    background: none;
    border: none;
    border-radius: var(--wa-border-radius-m);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: color var(--wa-transition-normal) var(--wa-transition-easing);
  }

  @media (hover: hover) {
    :host(:not(:last-of-type)) .label:hover {
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
    }
  }

  :host(:not(:last-of-type)) .label:active {
    color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
  }

  .label:focus {
    outline: none;
  }

  .label:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  .start,
  .end {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .start,
  .end {
    display: inline-flex;
    color: var(--wa-color-text-quiet);
  }

  ::slotted([slot='start']) {
    margin-inline-end: var(--wa-space-s);
  }

  ::slotted([slot='end']) {
    margin-inline-start: var(--wa-space-s);
  }

  :host(:last-of-type) .separator {
    display: none;
  }

  .separator {
    color: var(--wa-color-text-quiet);
    display: inline-flex;
    align-items: center;
    margin: 0 var(--wa-space-s);
    user-select: none;
    -webkit-user-select: none;
  }
`;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Be(e,t){let n={waitUntilFirstUpdate:!1,...t};return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ve=Object.defineProperty,He=Object.getOwnPropertyDescriptor,Ue=e=>{throw TypeError(e)},A=(e,t,n,r)=>{for(var i=r>1?void 0:r?He(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Ve(t,n,i),i},We=(e,t,n)=>t.has(e)||Ue(`Cannot `+n),Ge=(e,t,n)=>(We(e,t,`read from private field`),n?n.call(e):t.get(e)),Ke=(e,t,n)=>t.has(e)?Ue(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),qe=(e,t,n,r)=>(We(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const Je=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},Ye={attribute:!0,type:String,converter:S,reflect:!1,hasChanged:C},Xe=(e=Ye,t,n)=>{
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=/* @__PURE__ */ new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function j(e){return(t,n)=>typeof n==`object`?Xe(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function M(e){return j({...e,state:!0,attribute:!1})}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const Ze=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function Qe(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return Ze(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return Ze(n,r,{get(){return a(this)}})}}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var $e=c`
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
`,et=/;\s+$/;function tt(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function nt(e){let{property:t,value:n,element:r}=e;if(n){let e=r.getAttribute(`style`)||``;e&&(e.match(et)||(e+=`;`),e+=` `);let i=`${t}: ${n}`;return e.includes(i)?void 0:`${e}${i};`}return null}var rt,it=class extends Le{constructor(){super(),Ke(this,rt,!1),this.initialReflectedProperties=/* @__PURE__ */ new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,t)=>{if(this.internals?.states)try{t?this.internals.states.add(e):this.internals.states.delete(e)}catch(e){if(String(e).includes(`must start with '--'`))console.error(`Your browser implements an outdated version of CustomStateSet. Consider using a polyfill`);else throw e}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error(`Element internals are not supported in your browser. Consider using a polyfill`)}this.customStates.set(`wa-defined`,!0);let e=this.constructor;for(let[t,n]of e.elementProperties)n.default===`inherit`&&n.initial!==void 0&&typeof t==`string`&&this.customStates.set(`initial-${t}-${n.initial}`,!0)}static get styles(){return[$e,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `)),this.didSSR&&this.updateComplete.then(()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `))})}attributeChangedCallback(e,t,n){Ge(this,rt)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),qe(this,rt,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll(`slot`).forEach(e=>{e.dispatchEvent(new Event(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(e){if(this.didSSR&&!this.hasUpdated){let t=new Event(`lit-hydration-error`,{bubbles:!0,composed:!0,cancelable:!1});t.error=e,this.dispatchEvent(t)}throw e}}setStyle(e,t){if(this.style)this.style[e]=t;else{let n=nt({property:tt(e),value:t,element:this});n&&this.setAttribute(`style`,n)}}setStyleProperty(e,t){if(this.style)this.style.setProperty(e,t);else{let n=nt({property:e,value:t,element:this});n&&this.setAttribute(`style`,n)}}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};rt=/* @__PURE__ */ new WeakMap,A([j()],it.prototype,`dir`,2),A([j()],it.prototype,`lang`,2),A([j({type:Boolean,reflect:!0,attribute:`did-ssr`})],it.prototype,`didSSR`,2);
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const at=e=>e??be;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var ot=class extends it{constructor(){super(...arguments),this.renderType=`button`,this.rel=`noreferrer noopener`}setRenderType(){let e=this.defaultSlot.assignedElements({flatten:!0}).filter(e=>e.tagName.toLowerCase()===`wa-dropdown`).length>0;this.renderType=typeof this.href==`string`?`link`:e?`dropdown`:`button`}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return ve`
      <span part="start" class="start">
        <slot name="start"></slot>
      </span>

      ${this.renderType===`link`?ve`
            <a
              part="label"
              class="label label-link"
              href="${this.href}"
              target="${at(this.target?this.target:void 0)}"
              rel=${at(this.target?this.rel:void 0)}
            >
              <slot></slot>
            </a>
          `:``}
      ${this.renderType===`button`?ve`
            <button part="label" type="button" class="label label-button">
              <slot @slotchange=${this.handleSlotChange}></slot>
            </button>
          `:``}
      ${this.renderType===`dropdown`?ve`
            <div part="label" class="label label-dropdown">
              <slot @slotchange=${this.handleSlotChange}></slot>
            </div>
          `:``}

      <span part="end" class="end">
        <slot name="end"></slot>
      </span>

      <span part="separator" class="separator" aria-hidden="true">
        <slot name="separator"></slot>
      </span>
    `}};ot.css=ze,A([Qe(`slot:not([name])`)],ot.prototype,`defaultSlot`,2),A([M()],ot.prototype,`renderType`,2),A([j()],ot.prototype,`href`,2),A([j()],ot.prototype,`target`,2),A([j()],ot.prototype,`rel`,2),A([Be(`href`,{waitUntilFirstUpdate:!0})],ot.prototype,`hrefChanged`,1),ot=A([Je(`wa-breadcrumb-item`)],ot);var st=/* @__PURE__ */ t({default:()=>ot}),ct=c`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;const lt=/* @__PURE__ */ new Set,ut=/* @__PURE__ */ new Map;let dt,ft=`ltr`,pt=`en`;const mt=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(mt){let e=new MutationObserver(gt);ft=document.documentElement.dir||`ltr`,pt=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function ht(...e){e.map(e=>{let t=e.$code.toLowerCase();ut.has(t)?ut.set(t,Object.assign(Object.assign({},ut.get(t)),e)):ut.set(t,e),dt||=e}),gt()}function gt(){mt&&(ft=document.documentElement.dir||`ltr`,pt=document.documentElement.lang||navigator.language),[...lt.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var _t=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){lt.add(this.host)}hostDisconnected(){lt.delete(this.host)}dir(){return`${this.host.dir||ft}`.toLowerCase()}lang(){let e=`${this.host.lang||pt}`.toLowerCase().replace(/_/g,`-`);try{return new Intl.Locale(e),e}catch{return dt?dt.$code.toLowerCase():`en`}}getTranslationData(e){let t;try{t=new Intl.Locale(e.replace(/_/g,`-`))}catch{return{locale:void 0,language:``,region:``,primary:void 0,secondary:void 0}}let n=t.language.toLowerCase(),r=t.region?.toLowerCase()??``,i=ut.get(`${n}-${r}`),a=ut.get(n);return{locale:t,language:n,region:r,primary:i,secondary:a}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&dt&&dt[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(dt&&dt[e])i=dt[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},vt={$code:`en`,$name:`English`,$dir:`ltr`,allTagsRemoved:`All tags removed`,am:`AM`,autosizeColumn:`Autosize column`,captions:`Captions`,carousel:`Carousel`,chooseDate:`Choose date`,chooseDecade:`Choose decade`,chooseMonth:`Choose month`,chooseTime:`Choose time`,chooseYear:`Choose year`,clearEntry:`Clear entry`,clearFilter:`Clear filter`,clearSort:`Clear sort`,close:`Close`,closeCalendar:`Close calendar`,closeTimeInput:`Close time picker`,collapseRow:`Collapse row`,columnMenu:`Column options`,columnMovedToPosition:(e,t,n)=>`${e} moved to position ${t} of ${n}`,columns:`Columns`,compactPageXOfY:(e,t)=>`${e} of ${t}`,completed:`Completed`,copied:`Copied`,copy:`Copy`,createOption:e=>`Create "${e}"`,currentlyPlaying:`currently playing`,currentValue:`Current value`,date:`Date`,datePickerKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the calendar.`,day:`Day`,dayPeriod:`AM/PM`,decrement:`Decrement`,deselectAllRows:`Deselect all rows`,disabled:`Disabled`,dropFileHere:`Drop file here or click to browse`,dropFilesHere:`Drop files here or click to browse`,empty:`Empty`,endDate:`End date`,enterFullscreen:`Enter fullscreen`,error:`Error`,exitFullscreen:`Exit fullscreen`,expandRow:`Expand row`,filterByColumn:e=>`Filter by ${e}`,filterFrom:`From`,filterMax:`Max`,filterMin:`Min`,filterTo:`To`,firstPage:`First page`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hideColumn:`Hide column`,hidePassword:`Hide password`,hour:`Hour`,incompleteDate:`Enter a valid date.`,increment:`Increment`,jumpBackwardX:e=>`Jump back ${e} pages`,jumpForwardX:e=>`Jump forward ${e} pages`,lastPage:`Last page`,loading:`Loading`,locked:`Locked`,minute:`Minute`,month:`Month`,moreOptions:`More Options`,mute:`Mute`,nextDecade:`Next decade`,nextMonth:`Next month`,nextPage:`Next page`,nextSlide:`Next slide`,nextVideo:`Next Video`,nextYear:`Next year`,noData:`No data`,noOptions:`No options`,noResults:`No matching results`,notCompleted:`Not completed`,now:`Now`,numCharacters:e=>e===1?`1 character`:`${e} characters`,numCharactersRemaining:e=>e===1?`1 character remaining`:`${e} characters remaining`,numOptionsAvailable:e=>e===0?`No options available`:e===1?`1 option available`:`${e} options available`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,numRowsCopied:e=>e===1?`1 row copied`:`${e} rows copied`,numRowsSelected:e=>e===1?`1 row selected`:`${e} rows selected`,optionPosition:(e,t,n)=>`${e}, ${t} of ${n}`,optionsLoadError:`Options could not be loaded`,pageXOfY:(e,t)=>`Page ${e} of ${t}`,pagination:`Pagination`,pause:`Pause`,pauseAnimation:`Pause animation`,pictureInPicture:`Picture in picture`,pinLeft:`Pin left`,pinRight:`Pin right`,play:`Play`,playAnimation:`Play animation`,playbackSpeed:`Playback speed`,playlist:`Playlist`,pm:`PM`,previousDecade:`Previous decade`,previousMonth:`Previous month`,previousPage:`Previous page`,previousSlide:`Previous slide`,previousVideo:`Previous video`,previousYear:`Previous year`,progress:`Progress`,rangeTooLong:e=>e===1?`Select a range no longer than 1 day`:`Select a range no longer than ${e} days`,rangeTooShort:e=>e===1?`Select a range at least 1 day long`:`Select a range at least ${e} days long`,readonly:`Read-only`,remove:`Remove`,resetColumns:`Reset columns`,resize:`Resize`,resizeColumn:`Resize column`,rowsPerPage:`Rows per page`,scrollableRegion:`Scrollable region`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,search:`Search`,second:`Second`,seek:`Seek`,seekProgress:(e,t)=>`${e} of ${t}`,selectAColorFromTheScreen:`Select a color from the screen`,selectAllRows:`Select all rows`,selected:`Selected`,selectedDateLabel:e=>`Selected: ${e}`,selectedRangeLabel:e=>`Selected range: ${e}`,selectGroup:`Select group`,selectionCleared:`Selection cleared`,selectRow:`Select row`,showingNofMRows:(e,t)=>`Showing ${e} of ${t} rows`,showingXtoYofZ:(e,t,n)=>`${e}\u2013${t} of ${n}`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,sortAscending:`Sort ascending`,sortColumn:`Sort column`,sortDescending:`Sort descending`,startDate:`Start date`,steps:`Steps`,stepXOfY:(e,t)=>`Step ${e} of ${t}`,tagAdded:e=>`${e} added`,tagAlreadyAdded:e=>`${e} is already added`,tagInputKeyboardHelp:`Press Backspace or Delete to remove this tag.`,tagRemoved:e=>`${e} removed`,time:`Time`,timeInputKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the time picker.`,today:`Today`,toggleColorFormat:`Toggle color format`,tooFewTags:e=>e===1?`Add at least 1 tag`:`Add at least ${e} tags`,tooManyTags:e=>e===1?`Add no more than 1 tag`:`Add no more than ${e} tags`,unmute:`Unmute`,unpin:`Unpin`,unpinColumn:`Unpin column`,videoPlayer:`Video player`,volume:`Volume`,year:`Year`,zoomIn:`Zoom in`,zoomOut:`Zoom out`}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;ht(vt);var yt=vt,bt=class extends _t{lang(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||`en`:super.lang()}};ht(yt);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var xt=class extends it{constructor(){super(...arguments),this.localize=new bt(this),this.separatorDir=this.localize.dir(),this.label=``}getSeparator(){let e=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[e,...e.querySelectorAll(`[id]`)].forEach(e=>e.removeAttribute(`id`)),e.setAttribute(`data-default`,``),e.slot=`separator`,e}handleSlotChange(){let e=[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>e.tagName.toLowerCase()===`wa-breadcrumb-item`);e.forEach((t,n)=>{let r=t.querySelector(`[slot="separator"]`);r===null?t.append(this.getSeparator()):r.hasAttribute(`data-default`)&&r.replaceWith(this.getSeparator()),n===e.length-1?t.setAttribute(`aria-current`,`page`):t.removeAttribute(`aria-current`)})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),ve`
      <nav part="base breadcrumb" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <wa-icon
            name=${this.localize.dir()===`rtl`?`chevron-left`:`chevron-right`}
            library="system"
            variant="solid"
          ></wa-icon>
        </slot>
      </span>
    `}};xt.css=ct,A([Qe(`slot`)],xt.prototype,`defaultSlot`,2),A([Qe(`slot[name="separator"]`)],xt.prototype,`separatorSlot`,2),A([j()],xt.prototype,`label`,2),xt=A([Je(`wa-breadcrumb`)],xt);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var St=class extends Event{constructor(){super(`wa-error`,{bubbles:!0,cancelable:!1,composed:!0})}},Ct=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-load`,{bubbles:!0,cancelable:!1,composed:!0})}},wt=c`
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
`,Tt=``,Et=``
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;function Dt(){return Tt.replace(/\/$/,``)}function Ot(e){Et=e}function kt(){if(!Et){let e=document.querySelector(`[data-fa-kit-code]`);e&&Ot(e.getAttribute(`data-fa-kit-code`)||``)}return Et}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var At=`7.3.0`;function jt(e,t,n){let r=`solid`;return t===`chisel`&&(r=`chisel-regular`),t===`etch`&&(r=`etch-solid`),t===`graphite`&&(r=`graphite-thin`),t===`jelly`&&(r=`jelly-regular`,n===`duo-regular`&&(r=`jelly-duo-regular`),n===`fill-regular`&&(r=`jelly-fill-regular`)),t===`jelly-duo`&&(r=`jelly-duo-regular`),t===`jelly-fill`&&(r=`jelly-fill-regular`),t===`notdog`&&(n===`solid`&&(r=`notdog-solid`),n===`duo-solid`&&(r=`notdog-duo-solid`)),t===`notdog-duo`&&(r=`notdog-duo-solid`),t===`slab`&&((n===`solid`||n===`regular`)&&(r=`slab-regular`),n===`press-regular`&&(r=`slab-press-regular`)),t===`slab-press`&&(r=`slab-press-regular`),t===`slab-duo`&&(r=`slab-duo-regular`),t===`slab-press-duo`&&(r=`slab-press-duo-regular`),t===`thumbprint`&&(r=`thumbprint-light`),t===`utility`&&(r=`utility-semibold`),t===`utility-duo`&&(r=`utility-duo-semibold`),t===`utility-fill`&&(r=`utility-fill-semibold`),t===`whiteboard`&&(r=`whiteboard-semibold`),t===`mosaic`&&(r=`mosaic-solid`),t===`pixel`&&(r=`pixel-regular`),t===`vellum`&&(r=`vellum-solid`),t===`classic`&&(n===`thin`&&(r=`thin`),n===`light`&&(r=`light`),n===`regular`&&(r=`regular`),n===`solid`&&(r=`solid`)),t===`duotone`&&(n===`thin`&&(r=`duotone-thin`),n===`light`&&(r=`duotone-light`),n===`regular`&&(r=`duotone-regular`),n===`solid`&&(r=`duotone`)),t===`sharp`&&(n===`thin`&&(r=`sharp-thin`),n===`light`&&(r=`sharp-light`),n===`regular`&&(r=`sharp-regular`),n===`solid`&&(r=`sharp-solid`)),t===`sharp-duotone`&&(n===`thin`&&(r=`sharp-duotone-thin`),n===`light`&&(r=`sharp-duotone-light`),n===`regular`&&(r=`sharp-duotone-regular`),n===`solid`&&(r=`sharp-duotone-solid`)),t===`brands`&&(r=`brands`),r}function Mt(e,t,n){let r=jt(e,t,n),i=Dt();if(i)return`${i}/${r}/${e}.svg`;let a=kt();return a.length>0?`https://ka-p.fontawesome.com/releases/v${At}/svgs/${r}/${e}.svg?token=${encodeURIComponent(a)}`:`https://ka-f.fontawesome.com/releases/v${At}/svgs/${r}/${e}.svg`}var Nt={name:`default`,resolver:(e,t=`classic`,n=`solid`)=>Mt(e,t,n),mutator:(e,t)=>{if(e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`),t?.family&&!e.hasAttribute(`data-duotone-initialized`)){let{family:n,variant:r}=t;if(n===`duotone`||n===`sharp-duotone`||n===`notdog-duo`||n===`notdog`&&r===`duo-solid`||n===`jelly-duo`||n===`jelly`&&r===`duo-regular`||n===`utility-duo`||n===`slab-duo`||n===`slab-press-duo`||n===`thumbprint`){let n=[...e.querySelectorAll(`path`)],r=n.find(e=>!e.hasAttribute(`opacity`)),i=n.find(e=>e.hasAttribute(`opacity`));if(!r||!i)return;if(r.setAttribute(`data-duotone-primary`,``),i.setAttribute(`data-duotone-secondary`,``),t.swapOpacity&&r&&i){let e=i.getAttribute(`opacity`)||`0.4`;r.style.setProperty(`--path-opacity`,e),i.style.setProperty(`--path-opacity`,`1`)}e.setAttribute(`data-duotone-initialized`,``)}}}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Pt(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var Ft={solid:{"arrow-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`,"arrow-up":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>`,backward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M236.3 107.1C247.9 96 265 92.9 279.7 99.2C294.4 105.5 304 120 304 136L304 272.3L476.3 107.2C487.9 96 505 92.9 519.7 99.2C534.4 105.5 544 120 544 136L544 504C544 520 534.4 534.5 519.7 540.8C505 547.1 487.9 544 476.3 532.9L304 367.7L304 504C304 520 294.4 534.5 279.7 540.8C265 547.1 247.9 544 236.3 532.9L44.3 348.9C36.5 341.3 32 330.9 32 320C32 309.1 36.5 298.7 44.3 291.1L236.3 107.1z"/></svg>`,"backward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M491 100.8C478.1 93.8 462.3 94.5 450 102.6L192 272.1L192 128C192 110.3 177.7 96 160 96C142.3 96 128 110.3 128 128L128 512C128 529.7 142.3 544 160 544C177.7 544 192 529.7 192 512L192 367.9L450 537.5C462.3 545.6 478 546.3 491 539.3C504 532.3 512 518.8 512 504.1L512 136.1C512 121.4 503.9 107.9 491 100.9z"/></svg>`,bars:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>`,"angles-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M77.3 256 214.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256zm192 0L406.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L269.3 256z"/></svg>`,"angles-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.7 256 297.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 256zm-192 0L105.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256z"/></svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>`,"chevron-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`,"chevron-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>`,"chevron-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>`,circle:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>`,"closed-captioning":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M64 192C64 156.7 92.7 128 128 128L512 128C547.3 128 576 156.7 576 192L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 192zM216 272L248 272C252.4 272 256 275.6 256 280C256 293.3 266.7 304 280 304C293.3 304 304 293.3 304 280C304 249.1 278.9 224 248 224L216 224C185.1 224 160 249.1 160 280L160 360C160 390.9 185.1 416 216 416L248 416C278.9 416 304 390.9 304 360C304 346.7 293.3 336 280 336C266.7 336 256 346.7 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 280C208 275.6 211.6 272 216 272zM384 280C384 275.6 387.6 272 392 272L424 272C428.4 272 432 275.6 432 280C432 293.3 442.7 304 456 304C469.3 304 480 293.3 480 280C480 249.1 454.9 224 424 224L392 224C361.1 224 336 249.1 336 280L336 360C336 390.9 361.1 416 392 416L424 416C454.9 416 480 390.9 480 360C480 346.7 469.3 336 456 336C442.7 336 432 346.7 432 360C432 364.4 428.4 368 424 368L392 368C387.6 368 384 364.4 384 360L384 280z"/></svg>`,"closed-captioning-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M39 39.1C48.4 29.7 63.6 29.7 72.9 39.1L161.8 128L512 128C547.3 128 576 156.7 576 192L576 448C576 473.5 561.1 495.4 539.6 505.8L601 567.1C610.4 576.5 610.4 591.7 601 601C591.6 610.3 576.4 610.4 567.1 601L39 73.1C29.7 63.7 29.7 48.5 39 39.1zM384 350.1L384 279.9C384 275.5 387.6 271.9 392 271.9L424 271.9C428.4 271.9 432 275.5 432 279.9C432 293.2 442.7 303.9 456 303.9C469.3 303.9 480 293.2 480 279.9C480 249 454.9 223.9 424 223.9L392 223.9C361.1 223.9 336 249 336 279.9L336 302.1L384 350.1zM445.5 411.6C465.7 403.2 480 383.2 480 359.9C480 346.6 469.3 335.9 456 335.9C442.7 335.9 432 346.6 432 359.9C432 364.3 428.4 367.9 424 367.9L401.8 367.9L445.5 411.6zM162.3 264.1C160.8 269.1 160 274.5 160 280L160 360C160 390.9 185.1 416 216 416L248 416C266.1 416 282.1 407.5 292.4 394.2L410.2 512L128 512C92.7 512 64 483.3 64 448L64 192C64 184.2 65.4 176.7 68 169.8L162.3 264.1zM256.1 357.9C256 358.6 256 359.3 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 309.8L256.1 357.9z"/></svg>`,compress:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>`,ellipsis:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M96 320C96 289.1 121.1 264 152 264C182.9 264 208 289.1 208 320C208 350.9 182.9 376 152 376C121.1 376 96 350.9 96 320zM264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320zM488 264C518.9 264 544 289.1 544 320C544 350.9 518.9 376 488 376C457.1 376 432 350.9 432 320C432 289.1 457.1 264 488 264z"/></svg>`,"ellipsis-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/></svg>`,expand:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 96C110.3 96 96 110.3 96 128L96 224C96 241.7 110.3 256 128 256C145.7 256 160 241.7 160 224L160 160L224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L128 96zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 512C96 529.7 110.3 544 128 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480L160 416zM416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160L480 224C480 241.7 494.3 256 512 256C529.7 256 544 241.7 544 224L544 128C544 110.3 529.7 96 512 96L416 96zM544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L512 544C529.7 544 544 529.7 544 512L544 416z"/></svg>`,eyedropper:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>`,filter:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 64C19.1 64 7.4 71.8 2.4 83.8S.2 109.5 9.4 118.6L192 301.3 192 416c0 8.5 3.4 16.6 9.4 22.6l64 64c9.2 9.2 22.9 11.9 34.9 6.9S320 492.9 320 480l0-178.7 182.6-182.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 64 480 64L32 64z"/></svg>`,forward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M403.7 107.1C392.1 96 375 92.9 360.3 99.2C345.6 105.5 336 120 336 136L336 272.3L163.7 107.2C152.1 96 135 92.9 120.3 99.2C105.6 105.5 96 120 96 136L96 504C96 520 105.6 534.5 120.3 540.8C135 547.1 152.1 544 163.7 532.9L336 367.7L336 504C336 520 345.6 534.5 360.3 540.8C375 547.1 392.1 544 403.7 532.9L595.7 348.9C603.6 341.4 608 330.9 608 320C608 309.1 603.5 298.7 595.7 291.1L403.7 107.1z"/></svg>`,file:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>`,"file-audio":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>`,"file-code":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>`,"file-excel":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>`,"file-image":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>`,"file-pdf":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>`,"file-powerpoint":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>`,"file-video":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>`,"file-word":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>`,"file-zipper":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>`,"forward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M21 36.8c12.9-7 28.7-6.3 41 1.8L320 208.1 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-144.1-258 169.6c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440L0 72C0 57.3 8.1 43.8 21 36.8z"/></svg>`,gauge:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,gear:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>`,"grip-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>`,indeterminate:`<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>`,"magnifying-glass":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>`,minus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>`,pause:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>`,"picture-in-picture":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M448 32c35.3 0 64 28.7 64 64l0 112-64 0 0-112-384 0 0 320 144 0 0 64-144 0-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416 0 96C0 62.9 25.2 35.6 57.5 32.3L64 32 448 32zm16 224c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48l160 0z"/></svg>`,play:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>`,"play-circle":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>`,plus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>`,"table-columns":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 64l0 256 128 0 0-256-128 0zm320 0l-128 0 0 256 128 0 0-256z"/></svg>`,thumbtack:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 10.3 134.1c37.1 21.2 65.8 56.4 78.2 99.7l3.8 13.4c2.8 9.7 .8 20-5.2 28.1S362 352 352 352L32 352c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1L5 297.8c12.4-43.3 41-78.5 78.2-99.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 400l64 0 0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-112z"/></svg>`,"up-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M406.6 502.6l96-96c9.2-9.2 11.9-22.9 6.9-34.9S492.9 352 480 352l-64 0 0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 320-64 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l96 96c12.5 12.5 32.8 12.5 45.3 0zM150.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-9.2 9.2-11.9 22.9-6.9 34.9S19.1 160 32 160l64 0 0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320 64 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-96-96z"/></svg>`,upload:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>`,user:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>`,volume:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM441.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C443.3 170.7 464 210.9 464 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-low":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,xmark:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>`},regular:{calendar:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z"/></svg>`,"circle-question":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`,"circle-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,clock:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>`,copy:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>`,eye:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>`,"eye-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>`}},It={name:`system`,resolver:(e,t=`classic`,n=`solid`)=>{let r=Ft[n][e]??Ft.regular[e]??Ft.regular[`circle-question`];return r?Pt(r):``},mutator:e=>{e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`)}},Lt=`classic`,Rt=[Nt,It],zt=/* @__PURE__ */ new Set
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;function Bt(e){zt.add(e)}function Vt(e){zt.delete(e)}function Ht(e){return Rt.find(t=>t.name===e)}function Ut(){return Lt}
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const{I:Wt}=Ne,Gt=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Kt=Symbol(),qt=Symbol(),Jt,Yt=/* @__PURE__ */ new Map,Xt=class extends it{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label=``,this.library=`default`,this.rotate=0,this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=ve`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let n=this.shadowRoot.querySelector(`[part='svg']`);return typeof t.mutator==`function`&&t.mutator(n,this),this.svg}try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?Kt:qt}catch{return qt}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return Kt;Jt||=new DOMParser;let r=Jt.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):Kt}catch{return Kt}}}connectedCallback(){super.connectedCallback(),Bt(this)}firstUpdated(e){super.firstUpdated(e),this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Vt(this)}async getIconSource(){let e=Ht(this.library),t=this.family||Ut();if(this.name&&e){let n=this.canvas===`auto`||this.autoWidth,r;try{r=await e.resolver(this.name,t,this.variant,n)}catch{r=void 0}return{url:r,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=await this.getIconSource(),n=t?Ht(this.library):void 0;if(!e){this.svg=null;return}let r=Yt.get(e);r||(r=this.resolveIcon(e,n),Yt.set(e,r));let i=await r;if(i===qt&&Yt.delete(e),e===(await this.getIconSource()).url){if(Gt(i))this.svg=i;else switch(i){case qt:case Kt:this.svg=null,this.dispatchEvent(new St);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new Ct)}}}willUpdate(e){return this.style||this.setStyleProperty(`--rotate-angle`,`${this.rotate}deg`),super.willUpdate(e)}updated(e){super.updated(e);let t=Ht(this.library);this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`);let n=this.shadowRoot?.querySelector(`svg`);n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:ve`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};Xt.css=wt,A([M()],Xt.prototype,`svg`,2),A([j({reflect:!0})],Xt.prototype,`name`,2),A([j({reflect:!0})],Xt.prototype,`family`,2),A([j({reflect:!0})],Xt.prototype,`variant`,2),A([j({reflect:!0})],Xt.prototype,`canvas`,2),A([j({attribute:`auto-width`,type:Boolean,reflect:!0})],Xt.prototype,`autoWidth`,2),A([j({attribute:`swap-opacity`,type:Boolean,reflect:!0})],Xt.prototype,`swapOpacity`,2),A([j()],Xt.prototype,`src`,2),A([j()],Xt.prototype,`label`,2),A([j({reflect:!0})],Xt.prototype,`library`,2),A([j({type:Number,reflect:!0})],Xt.prototype,`rotate`,2),A([j({type:String,reflect:!0})],Xt.prototype,`flip`,2),A([j({type:String,reflect:!0})],Xt.prototype,`animation`,2),A([Be(`label`)],Xt.prototype,`handleLabelChange`,1),A([Be([`family`,`name`,`library`,`variant`,`src`,`autoWidth`,`canvas`,`swapOpacity`],{waitUntilFirstUpdate:!0})],Xt.prototype,`setIcon`,1),Xt=A([Je(`wa-icon`)],Xt);var Zt=/* @__PURE__ */ t({default:()=>xt}),Qt=()=>({checkValidity(e){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
let t=e.input,n={message:``,isValid:!0,invalidKeys:[]};if(!t)return n;let r=!0;if(`checkValidity`in t&&(r=t.checkValidity()),r)return n;if(n.isValid=!1,`validationMessage`in t&&(n.message=t.validationMessage),!(`validity`in t))return n.invalidKeys.push(`customError`),n;for(let e in t.validity){if(e===`valid`)continue;let r=e;t.validity[r]&&n.invalidKeys.push(r)}return n}}),$t=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-invalid`,{bubbles:!0,cancelable:!1,composed:!0})}},en=()=>({observedAttributes:[`custom-error`],checkValidity(e){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
let t={message:``,isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=[`customError`]),t}}),tn=class extends it{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=[`input`],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new $t))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},`addEventListener`in this&&this.addEventListener(`invalid`,this.emitInvalid)}static get validators(){return[en()]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let n of t.observedAttributes)e.add(n);return[...e]}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.updateValidity()}):this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener?.(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has(`customError`)&&(this.customError||=null,this.setCustomValidity(this.customError||``)),e.has(`value`)||e.has(`disabled`)||e.has(`defaultValue`)){let e=this.value;this.updateFormValue(e)}e.has(`disabled`)&&(this.customStates.set(`disabled`,this.disabled),(this.hasAttribute(`disabled`)||!this.matches(`:disabled`))&&this.toggleAttribute(`disabled`,this.disabled)),super.willUpdate(e),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>this.updateValidity()):this.updateValidity()}updateFormValue(e){if(Array.isArray(e)){if(this.name){let t=new FormData;for(let n of e)t.append(this.name,n);this.setValue(t,t)}}else this.setValue(e,e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(e){e?this.setAttribute(`form`,e):this.removeAttribute(`form`)}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],n=e[1],r=e[2];r||=this.validationTarget,this.internals.setValidity(t,n,r||void 0),this.requestUpdate(`validity`),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set(`required`,e),this.customStates.set(`optional`,!e),this.customStates.set(`invalid`,!t),this.customStates.set(`valid`,t),this.customStates.set(`user-invalid`,!t&&n),this.customStates.set(`user-valid`,t&&n)}setCustomValidity(e){e?(this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)):(this.customError=null,this.setValidity({}))}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity()}):(this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity())}setValue(...e){let[t,n]=e;this.internals.setFormValue(t,n)}get allValidators(){let e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(``),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute(`disabled`)||!this.willValidate){this.resetValidity();return}let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},n=this.validationTarget||this.input||void 0,r=``;for(let n of e){let{isValid:e,message:i,invalidKeys:a}=n.checkValidity(this);e||(r||=i,a?.length>=0&&a.forEach(e=>t[e]=!0))}r||=this.validationMessage,this.setValidity(t,r,n)}};tn.formAssociated=!0,A([j({reflect:!0})],tn.prototype,`name`,2),A([j({type:Boolean})],tn.prototype,`disabled`,2),A([j({state:!0,attribute:!1})],tn.prototype,`valueHasChanged`,2),A([j({state:!0,attribute:!1})],tn.prototype,`hasInteracted`,2),A([j({attribute:`custom-error`,reflect:!0})],tn.prototype,`customError`,2),A([j({attribute:!1,state:!0,type:Object})],tn.prototype,`validity`,1);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var nn={small:`s`,medium:`m`,large:`l`},rn=/* @__PURE__ */ new Set;function an(e,t){t in nn&&!rn.has(`${e}:${t}`)&&(rn.add(`${e}:${t}`),console.warn(`[${e}] size="${t}" is deprecated. Use size="${nn[t]}" instead. The long-form value will be removed in the next major version.`))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var on=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return this.host.childNodes?[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===Node.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`wa-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1}):!1}hasNamedSlot(e){return this.host.querySelector?.(`:scope > [slot="${e}"]`)!==null}test(e,t){return t&&this.host.didSSR&&!this.host.hasUpdated?!!this.host[t]:e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){let e=this.host.shadowRoot;e&&`addEventListener`in e&&e.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){let e=this.host.shadowRoot;e&&`removeEventListener`in e&&e.removeEventListener(`slotchange`,this.handleSlotChange)}},sn=c`
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
`,cn=c`
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
`,ln=c`
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
`
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const un={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},dn=e=>(...t)=>({_$litDirective$:e,values:t});var fn=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const pn=dn(class extends fn{constructor(e){if(super(e),e.type!==un.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=/* @__PURE__ */ new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return ye}}),mn=Symbol.for(``),hn=e=>{
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
if(e?.r===mn)return e?._$litStatic$},gn=(e,...t)=>({_$litStatic$:t.reduce((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1],e[0]),r:mn}),_n=/* @__PURE__ */ new Map,vn=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],(i=hn(a))!==void 0);)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=_n.get(e))===void 0&&(o.raw=o,_n.set(e,t=o)),n=s}return e(t,...n)})(ve);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var N=class extends tn{constructor(){super(...arguments),this.assumeInteractionOn=[`click`],this.hasSlotController=new on(this,`[default]`,`start`,`end`),this.localize=new bt(this),this.invalid=!1,this.isIconButton=!1,this.title=``,this.variant=`neutral`,this.appearance=`accent`,this.size=`m`,this.withCaret=!1,this.withStart=!1,this.withEnd=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type=`button`}static get validators(){return[...super.validators,Qt()]}handleSizeChange(){an(this.localName,this.size)}constructLightDOMButton(){let e=document.createElement(`button`);for(let t of this.attributes)t.name!==`style`&&e.setAttribute(t.name,t.value);return e.type=this.type,e.style.position=`absolute !important`,e.style.width=`0 !important`,e.style.height=`0 !important`,e.style.clipPath=`inset(50%) !important`,e.style.overflow=`hidden !important`,e.style.whiteSpace=`nowrap !important`,this.name&&(e.name=this.name),e.value=this.value||``,e}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopImmediatePropagation();return}if(this.type!==`submit`&&this.type!==`reset`||!this.getForm())return;let t=this.constructLightDOMButton();this.parentElement?.append(t),t.click(),t.remove()}handleInvalid(){this.dispatchEvent(new $t)}handleLabelSlotChange(){let e=this.labelSlot.assignedNodes({flatten:!0}),t=!1,n=!1,r=!1,i=!1;[...e].forEach(e=>{if(e.nodeType===Node.ELEMENT_NODE){let r=e;r.localName===`wa-icon`?(n=!0,t||=r.label!==void 0):i=!0}else e.nodeType===Node.TEXT_NODE&&(e.textContent?.trim()||``).length>0&&(r=!0)}),this.isIconButton=n&&!r&&!i,this.customStates.set(`icon-button`,this.isIconButton),this.isIconButton&&!t&&console.warn(`Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.`,this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.customStates.set(`disabled`,this.disabled),this.updateValidity()}handleHrefChange(){this.customStates.set(`link`,this.isLink())}handleLoadingChange(){this.customStates.set(`loading`,this.loading)}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=this.isLink(),t=e?gn`a`:gn`button`;return vn`
      <${t}
        part="base button"
        class=${pn({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()===`rtl`,"has-label":this.hasSlotController.test(`[default]`),"has-start":this.hasSlotController.test(`start`,`withStart`),"has-end":this.hasSlotController.test(`end`,`withEnd`),"is-icon-button":this.isIconButton})}
        ?disabled=${at(e?void 0:this.disabled)}
        type=${at(e?void 0:this.type)}
        title=${this.title}
        name=${at(e?void 0:this.name)}
        value=${at(e?void 0:this.value)}
        href=${at(e?this.href:void 0)}
        target=${at(e?this.target:void 0)}
        download=${at(e?this.download:void 0)}
        rel=${at(e&&this.rel?this.rel:void 0)}
        role=${at(e?void 0:`button`)}
        aria-disabled=${at(e&&this.disabled?`true`:void 0)}
        aria-busy=${this.loading?`true`:`false`}
        tabindex=${this.disabled?`-1`:`0`}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?vn`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:``}
        ${this.loading?vn`<wa-spinner part="spinner"></wa-spinner>`:``}
      </${t}>
    `}};N.shadowRootOptions={...tn.shadowRootOptions,delegatesFocus:!0},N.css=[cn,ln,sn],A([Qe(`.button`)],N.prototype,`button`,2),A([Qe(`slot:not([name])`)],N.prototype,`labelSlot`,2),A([M()],N.prototype,`invalid`,2),A([M()],N.prototype,`isIconButton`,2),A([j()],N.prototype,`title`,2),A([j({reflect:!0})],N.prototype,`variant`,2),A([j({reflect:!0})],N.prototype,`appearance`,2),A([j({reflect:!0})],N.prototype,`size`,2),A([Be(`size`)],N.prototype,`handleSizeChange`,1),A([j({attribute:`with-caret`,type:Boolean,reflect:!0})],N.prototype,`withCaret`,2),A([j({attribute:`with-start`,type:Boolean})],N.prototype,`withStart`,2),A([j({attribute:`with-end`,type:Boolean})],N.prototype,`withEnd`,2),A([j({type:Boolean})],N.prototype,`disabled`,2),A([j({type:Boolean,reflect:!0})],N.prototype,`loading`,2),A([j({type:Boolean,reflect:!0})],N.prototype,`pill`,2),A([j()],N.prototype,`type`,2),A([j({reflect:!0})],N.prototype,`name`,2),A([j({reflect:!0})],N.prototype,`value`,2),A([j({reflect:!0})],N.prototype,`href`,2),A([j()],N.prototype,`target`,2),A([j()],N.prototype,`rel`,2),A([j()],N.prototype,`download`,2),A([j({attribute:`formaction`})],N.prototype,`formAction`,2),A([j({attribute:`formenctype`})],N.prototype,`formEnctype`,2),A([j({attribute:`formmethod`})],N.prototype,`formMethod`,2),A([j({attribute:`formnovalidate`,type:Boolean})],N.prototype,`formNoValidate`,2),A([j({attribute:`formtarget`})],N.prototype,`formTarget`,2),A([Be(`disabled`,{waitUntilFirstUpdate:!0})],N.prototype,`handleDisabledChange`,1),A([Be(`href`)],N.prototype,`handleHrefChange`,1),A([Be(`loading`,{waitUntilFirstUpdate:!0})],N.prototype,`handleLoadingChange`,1),N=A([Je(`wa-button`)],N),N.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var yn=c`
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
`,bn=class extends it{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(...arguments),this.localize=new bt(this)}render(){return ve`
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
    `}};bn.css=yn,bn=A([Je(`wa-spinner`)],bn);var xn=/* @__PURE__ */ t({default:()=>N}),Sn=c`
  :host {
    display: flex;
    position: relative;
    align-items: center;
    padding: 0.5em 1em;
    border-radius: var(--wa-border-radius-s);
    isolation: isolate;
    color: var(--wa-color-text-normal);
    line-height: var(--wa-line-height-condensed);
    cursor: pointer;
    transition:
      var(--wa-transition-fast) background-color var(--wa-transition-easing),
      var(--wa-transition-fast) color var(--wa-transition-easing);
  }

  @media (hover: hover) {
    :host(:hover:not(:state(disabled))) {
      background-color: var(--wa-color-neutral-fill-normal);
    }
  }

  :host(:state(submenu-open)) {
    background-color: var(--wa-color-neutral-fill-normal);
  }

  :host(:focus-visible) {
    z-index: 1;
    outline: var(--wa-focus-ring);
    background-color: var(--wa-color-neutral-fill-normal);
  }

  :host(:state(disabled)),
  :host([disabled]) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Danger variant */
  :host([variant='danger']),
  :host([variant='danger']) #details {
    color: var(--wa-color-danger-on-quiet);
  }

  @media (hover: hover) {
    :host([variant='danger']:hover) {
      background-color: var(--wa-color-danger-fill-normal);
      color: var(--wa-color-danger-on-normal);
    }
  }

  :host([variant='danger']:state(submenu-open)),
  :host([variant='danger']:focus-visible) {
    background-color: var(--wa-color-danger-fill-normal);
    color: var(--wa-color-danger-on-normal);
  }

  :host([checkbox-adjacent]) {
    padding-inline-start: 2em;
  }

  /* Only add padding when item actually has a submenu */
  :host([submenu-adjacent]:not(:state(has-submenu))) #details {
    padding-inline-end: 0;
  }

  :host(:state(has-submenu)[submenu-adjacent]) #details {
    padding-inline-end: 1.75em;
  }

  /* The link only exists to be clicked programmatically. */
  #link {
    display: none;
  }

  #check {
    visibility: hidden;
    margin-inline-start: -1.5em;
    margin-inline-end: 0.5em;
    font-size: var(--wa-font-size-smaller);
  }

  :host(:state(checked)) #check {
    visibility: visible;
  }

  #icon ::slotted(*) {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    margin-inline-end: 0.75em !important;
    font-size: var(--wa-font-size-smaller);
  }

  #label {
    flex: 1 1 auto;
    min-width: 0;
  }

  #details {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: end;
    color: var(--wa-color-text-quiet);
    font-size: var(--wa-font-size-smaller) !important;
  }

  #details ::slotted(*) {
    margin-inline-start: 2em !important;
  }

  /* Submenu indicator icon */
  #submenu-indicator {
    position: absolute;
    inset-inline-end: 1em;
    color: var(--wa-color-neutral-on-quiet);
    font-size: var(--wa-font-size-smaller);
  }

  /* Flip chevron icon when RTL */
  :host(:dir(rtl)) #submenu-indicator {
    transform: scaleX(-1);
  }

  /* Submenu styles */
  #submenu {
    display: flex;
    z-index: 10;
    position: absolute;
    top: 0;
    left: 0;
    flex-direction: column;
    width: max-content;
    margin: 0;
    padding: 0.25em;
    border: var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-surface-border);
    border-radius: var(--wa-border-radius-m);
    background-color: var(--wa-color-surface-raised);
    box-shadow: var(--wa-shadow-m);
    color: var(--wa-color-text-normal);
    text-align: start;
    user-select: none;

    /* Override default popover styles */
    &[popover] {
      margin: 0;
      inset: auto;
      padding: 0.25em;
      overflow: visible;
      border-radius: var(--wa-border-radius-m);
    }

    &.show {
      animation: submenu-show var(--show-duration, var(--wa-transition-fast)) ease;
    }

    &.hide {
      animation: submenu-show var(--show-duration, var(--wa-transition-fast)) ease reverse;
    }

    /* Submenu placement transform origins */
    &[data-placement^='top'] {
      transform-origin: bottom;
    }

    &[data-placement^='bottom'] {
      transform-origin: top;
    }

    &[data-placement^='left'] {
      transform-origin: right;
    }

    &[data-placement^='right'] {
      transform-origin: left;
    }

    &[data-placement='left-start'] {
      transform-origin: right top;
    }

    &[data-placement='left-end'] {
      transform-origin: right bottom;
    }

    &[data-placement='right-start'] {
      transform-origin: left top;
    }

    &[data-placement='right-end'] {
      transform-origin: left bottom;
    }

    /* Safe triangle styling */
    &::before {
      display: none;
      z-index: 9;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: transparent;
      content: '';
      clip-path: polygon(
        var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
        var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
        var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
      );
      pointer-events: auto; /* Enable mouse events on the triangle */
    }

    &[data-visible]::before {
      display: block;
    }
  }

  ::slotted(wa-dropdown-item) {
    font-size: inherit;
  }

  ::slotted(wa-divider) {
    --spacing: 0.25em;
  }

  @keyframes submenu-show {
    from {
      scale: 0.9;
      opacity: 0;
    }
    to {
      scale: 1;
      opacity: 1;
    }
  }
`
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Cn(e,t){return new Promise(n=>{let r=new AbortController,{signal:i}=r;if(e.classList.contains(t))return;e.classList.add(t);let a=!1,o=()=>{a||(a=!0,e.classList.remove(t),n(),r.abort())};e.addEventListener(`animationend`,o,{once:!0,signal:i}),e.addEventListener(`animationcancel`,o,{once:!0,signal:i}),requestAnimationFrame(()=>{!a&&e.getAnimations().length===0&&o()})})}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var wn=class extends it{constructor(){super(...arguments),this.hasSlotController=new on(this,`[default]`,`start`,`end`),this.active=!1,this.variant=`default`,this.size=`m`,this.checkboxAdjacent=!1,this.submenuAdjacent=!1,this.type=`normal`,this.checked=!1,this.disabled=!1,this.submenuOpen=!1,this.hasSubmenu=!1,this.handleSlotChange=()=>{this.hasSubmenu=this.hasSlotController.test(`submenu`),this.updateHasSubmenuState(),this.hasSubmenu?(this.setAttribute(`aria-haspopup`,`menu`),this.setAttribute(`aria-expanded`,this.submenuOpen?`true`:`false`)):(this.removeAttribute(`aria-haspopup`),this.removeAttribute(`aria-expanded`))},this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handlePointerEnter=e=>{e.pointerType===`mouse`&&this.hasSubmenu&&!this.disabled&&(this.notifyParentOfOpening(),this.submenuOpen=!0)}}handleSizeChange(){an(this.localName,this.size)}connectedCallback(){super.connectedCallback(),this.addEventListener?.(`click`,this.handleHostClick),this.addEventListener?.(`pointerenter`,this.handlePointerEnter),this.shadowRoot?.addEventListener?.(`click`,this.handleClick,{capture:!0}),this.shadowRoot?.addEventListener?.(`slotchange`,this.handleSlotChange)}disconnectedCallback(){super.disconnectedCallback(),this.closeSubmenu(),this.removeEventListener?.(`click`,this.handleHostClick),this.removeEventListener?.(`pointerenter`,this.handlePointerEnter),this.shadowRoot?.removeEventListener?.(`click`,this.handleClick,{capture:!0}),this.shadowRoot?.removeEventListener?.(`slotchange`,this.handleSlotChange)}firstUpdated(e){super.firstUpdated(e),this.setAttribute(`tabindex`,`-1`),this.hasSubmenu=this.hasSlotController.test(`submenu`),this.updateHasSubmenuState()}updated(e){e.has(`active`)&&(this.setAttribute(`tabindex`,this.active?`0`:`-1`),this.customStates.set(`active`,this.active)),e.has(`checked`)&&(this.type===`checkbox`?this.setAttribute(`aria-checked`,this.checked?`true`:`false`):this.removeAttribute(`aria-checked`),this.customStates.set(`checked`,this.checked)),e.has(`disabled`)&&(this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`),this.customStates.set(`disabled`,this.disabled)),e.has(`type`)&&(this.type===`checkbox`?(this.setAttribute(`role`,`menuitemcheckbox`),this.setAttribute(`aria-checked`,this.checked?`true`:`false`)):(this.setAttribute(`role`,`menuitem`),this.removeAttribute(`aria-checked`))),(e.has(`href`)||e.has(`hasSubmenu`))&&this.customStates.set(`link`,this.isLink()),e.has(`submenuOpen`)&&(this.customStates.set(`submenu-open`,this.submenuOpen),this.submenuOpen?this.openSubmenu():this.closeSubmenu())}updateHasSubmenuState(){this.customStates.set(`has-submenu`,this.hasSubmenu)}async openSubmenu(){let e=this.submenuElement;this.hasSubmenu&&e&&this.isConnected&&(this.notifyParentOfOpening(),e.showPopover?.(),e.hidden=!1,e.setAttribute(`data-visible`,``),this.submenuOpen=!0,this.setAttribute(`aria-expanded`,`true`),await Cn(e,`show`),setTimeout(()=>{let e=this.getSubmenuItems();e.length>0&&(e.forEach((e,t)=>e.active=t===0),e[0].focus({preventScroll:!0}))},0))}notifyParentOfOpening(){let e=new CustomEvent(`submenu-opening`,{bubbles:!0,composed:!0,detail:{item:this}});this.dispatchEvent(e);let t=this.parentElement;t&&[...t.children].filter(e=>e!==this&&e.localName===`wa-dropdown-item`&&e.getAttribute(`slot`)===this.getAttribute(`slot`)&&e.submenuOpen).forEach(e=>{e.submenuOpen=!1})}async closeSubmenu(){let e=this.submenuElement;this.hasSubmenu&&e&&(this.submenuOpen=!1,this.setAttribute(`aria-expanded`,`false`),e.hidden||(await Cn(e,`hide`),e?.isConnected&&(e.hidden=!0,e.removeAttribute(`data-visible`),e.hidePopover?.())))}isLink(){return!!this.href&&!this.hasSubmenu}navigate(e){let t=this.linkElement;this.isLink()&&!this.disabled&&t&&t.dispatchEvent(new MouseEvent(`click`,{bubbles:!1,cancelable:!0,composed:!1,altKey:e?.altKey??!1,ctrlKey:e?.ctrlKey??!1,metaKey:e?.metaKey??!1,shiftKey:e?.shiftKey??!1}))}getSubmenuItems(){return[...this.children].filter(e=>e.localName===`wa-dropdown-item`&&e.getAttribute(`slot`)===`submenu`&&!e.hasAttribute(`disabled`))}render(){return ve`
      ${this.href?ve`
            <a
              id="link"
              href=${this.href}
              target=${at(this.target)}
              rel=${at(this.rel)}
              download=${at(this.download)}
              tabindex="-1"
              aria-hidden="true"
            ></a>
          `:``}
      ${this.type===`checkbox`?ve`
            <wa-icon
              id="check"
              part="checkmark"
              exportparts="svg:checkmark__svg"
              library="system"
              name="check"
            ></wa-icon>
          `:``}

      <span id="icon" part="icon">
        <slot name="icon"></slot>
      </span>

      <span id="label" part="label">
        <slot></slot>
      </span>

      <span id="details" part="details">
        <slot name="details"></slot>
      </span>

      ${this.hasSubmenu?ve`
            <wa-icon
              id="submenu-indicator"
              part="submenu-icon"
              exportparts="svg:submenu-icon__svg"
              library="system"
              name="chevron-right"
            ></wa-icon>
          `:``}
      ${this.hasSubmenu?ve`
            <div
              id="submenu"
              part="submenu"
              popover="manual"
              role="menu"
              tabindex="-1"
              aria-orientation="vertical"
              hidden
            >
              <slot name="submenu"></slot>
            </div>
          `:``}
    `}};wn.css=Sn,A([Qe(`#submenu`)],wn.prototype,`submenuElement`,2),A([Qe(`#link`)],wn.prototype,`linkElement`,2),A([j({type:Boolean})],wn.prototype,`active`,2),A([j({reflect:!0})],wn.prototype,`variant`,2),A([j({reflect:!0})],wn.prototype,`size`,2),A([Be(`size`)],wn.prototype,`handleSizeChange`,1),A([j({attribute:`checkbox-adjacent`,type:Boolean,reflect:!0})],wn.prototype,`checkboxAdjacent`,2),A([j({attribute:`submenu-adjacent`,type:Boolean,reflect:!0})],wn.prototype,`submenuAdjacent`,2),A([j()],wn.prototype,`value`,2),A([j({reflect:!0})],wn.prototype,`type`,2),A([j({type:Boolean})],wn.prototype,`checked`,2),A([j({type:Boolean,reflect:!0})],wn.prototype,`disabled`,2),A([j({type:Boolean,reflect:!0})],wn.prototype,`submenuOpen`,2),A([j({reflect:!0})],wn.prototype,`href`,2),A([j()],wn.prototype,`target`,2),A([j()],wn.prototype,`rel`,2),A([j()],wn.prototype,`download`,2),A([M()],wn.prototype,`hasSubmenu`,2),wn=A([Je(`wa-dropdown-item`)],wn);var Tn=/* @__PURE__ */ t({default:()=>wn}),En=class extends Event{constructor(e){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-select`,{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function*Dn(e=document.activeElement){e!=null&&(yield e,`shadowRoot`in e&&e.shadowRoot&&e.shadowRoot.mode!==`closed`&&(yield*Dn(e.shadowRoot.activeElement)))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var On=c`
  :host {
    --show-duration: var(--wa-transition-fast);
    --hide-duration: var(--wa-transition-fast);
    display: contents;
  }

  #menu {
    display: flex;
    flex-direction: column;
    width: max-content;
    margin: 0;
    padding: 0.25em;
    border: var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-surface-border);
    border-radius: var(--wa-border-radius-m);
    background-color: var(--wa-color-surface-raised);
    box-shadow: var(--wa-shadow-m);
    color: var(--wa-color-text-normal);
    text-align: start;
    user-select: none;
    overflow: auto;
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;

    &.show {
      animation: show var(--show-duration) ease;
    }

    &.hide {
      animation: show var(--hide-duration) ease reverse;
    }

    ::slotted(h1),
    ::slotted(h2),
    ::slotted(h3),
    ::slotted(h4),
    ::slotted(h5),
    ::slotted(h6) {
      display: block !important;
      margin: 0.25em 0 !important;
      padding: 0.25em 0.75em !important;
      color: var(--wa-color-text-quiet);
      font-family: var(--wa-font-family-body) !important;
      font-weight: var(--wa-font-weight-semibold) !important;
      font-size: var(--wa-font-size-smaller) !important;
    }

    ::slotted(wa-divider) {
      --spacing: 0.25em; /* Component-specific, left as-is */
    }
  }

  wa-popup[data-current-placement^='top'] #menu {
    transform-origin: bottom;
  }

  wa-popup[data-current-placement^='bottom'] #menu {
    transform-origin: top;
  }

  wa-popup[data-current-placement^='left'] #menu {
    transform-origin: right;
  }

  wa-popup[data-current-placement^='right'] #menu {
    transform-origin: left;
  }

  wa-popup[data-current-placement='left-start'] #menu {
    transform-origin: right top;
  }

  wa-popup[data-current-placement='left-end'] #menu {
    transform-origin: right bottom;
  }

  wa-popup[data-current-placement='right-start'] #menu {
    transform-origin: left top;
  }

  wa-popup[data-current-placement='right-end'] #menu {
    transform-origin: left bottom;
  }

  @keyframes show {
    from {
      scale: 0.9;
      opacity: 0;
    }
    to {
      scale: 1;
      opacity: 1;
    }
  }
`,kn=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-show`,{bubbles:!0,cancelable:!0,composed:!0})}},An=class extends Event{constructor(e){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-hide`,{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}},jn=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-after-hide`,{bubbles:!0,cancelable:!1,composed:!0})}},Mn=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-after-show`,{bubbles:!0,cancelable:!1,composed:!0})}},Nn=[]
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;function Pn(e){Fn(e),Nn.push(e)}function Fn(e){for(let t=Nn.length-1;t>=0;t--)if(Nn[t]===e){Nn.splice(t,1);break}}function In(e){return Nn.length>0&&Nn[Nn.length-1]===e}let Ln=(e=21)=>{let t=``,n=crypto.getRandomValues(new Uint8Array(e|=0));for(;e--;)t+=`useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict`[n[e]&63];return t};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Rn(e=``){return`${e}${Ln()}`}const zn=Math.min,Bn=Math.max,Vn=Math.round,Hn=Math.floor,Un=e=>({x:e,y:e}),Wn={left:`right`,right:`left`,bottom:`top`,top:`bottom`};function Gn(e,t,n){return Bn(e,zn(t,n))}function Kn(e,t){return typeof e==`function`?e(t):e}function qn(e){return e.split(`-`)[0]}function Jn(e){return e.split(`-`)[1]}function Yn(e){return e===`x`?`y`:`x`}function Xn(e){return e===`y`?`height`:`width`}function Zn(e){let t=e[0];return t===`t`||t===`b`?`y`:`x`}function Qn(e){return Yn(Zn(e))}function $n(e,t,n){n===void 0&&(n=!1);let r=Jn(e),i=Qn(e),a=Xn(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=cr(o)),[o,cr(o)]}function er(e){let t=cr(e);return[tr(e),t,tr(t)]}function tr(e){return e.includes(`start`)?e.replace(`start`,`end`):e.replace(`end`,`start`)}const nr=[`left`,`right`],rr=[`right`,`left`],ir=[`top`,`bottom`],ar=[`bottom`,`top`];function or(e,t,n){switch(e){case`top`:case`bottom`:return n?t?rr:nr:t?nr:rr;case`left`:case`right`:return t?ir:ar;default:return[]}}function sr(e,t,n,r){let i=Jn(e),a=or(qn(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(tr)))),a}function cr(e){let t=qn(e);return Wn[t]+e.slice(t.length)}function lr(e){return{top:e.top??0,right:e.right??0,bottom:e.bottom??0,left:e.left??0}}function ur(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:lr(e)}function dr(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function fr(e,t,n){let{reference:r,floating:i}=e,a=Zn(t),o=Qn(t),s=Xn(o),c=qn(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}let m=Jn(t);return m&&(p[o]+=f*(m===`end`?1:-1)*(n&&l?-1:1)),p}async function pr(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=Kn(t,e),p=ur(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=dr(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=dr(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}const mr=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=o.detectOverflow?o:{...o,detectOverflow:pr},c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=fr(l,r,c),f=r,p=0,m={};for(let n=0;n<a.length;n++){let h=a[n];if(!h)continue;let{name:g,fn:_}=h,{x:v,y,data:b,reset:x}=await _({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:m,rects:l,platform:s,elements:{reference:e,floating:t}});u=v??u,d=y??d,m[g]={...m[g],...b},x&&p<50&&(p++,typeof x==`object`&&(x.placement&&(f=x.placement),x.rects&&(l=x.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):x.rects),{x:u,y:d}=fr(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:m}},hr=e=>({name:`arrow`,options:e,async fn(t){let{x:n,y:r,placement:i,rects:a,platform:o,elements:s,middlewareData:c}=t,{element:l,padding:u=0}=Kn(e,t)||{};if(l==null)return{};let d=ur(u),f={x:n,y:r},p=Qn(i),m=Xn(p),h=await o.getDimensions(l),g=p===`y`,_=g?`top`:`left`,v=g?`bottom`:`right`,y=g?`clientHeight`:`clientWidth`,b=a.reference[m]+a.reference[p]-f[p]-a.floating[m],x=f[p]-a.reference[p],S=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l)),C=S?S[y]:0;(!C||!await(o.isElement==null?void 0:o.isElement(S)))&&(C=s.floating[y]||a.floating[m]);let w=b/2-x/2,T=C/2-h[m]/2-1,ee=zn(d[_],T),te=zn(d[v],T),ne=C-h[m]-te,E=C/2-h[m]/2+w,re=Gn(ee,E,ne),ie=!c.arrow&&Jn(i)!=null&&E!==re&&a.reference[m]/2-(E<ee?ee:te)-h[m]/2<0,ae=ie?E<ee?E-ee:E-ne:0;return{[p]:f[p]+ae,data:{[p]:re,centerOffset:E-re-ae,...ie&&{alignmentOffset:ae}},reset:ie}}}),gr=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=Kn(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=qn(r),_=Zn(o),v=qn(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),b=d||(v||!m?[cr(o)]:er(o)),x=p!==`none`;!d&&x&&b.push(...sr(o,m,p,y));let S=[o,...b],C=await s.detectOverflow(t,h),w=[],T=i.flip?.overflows||[];if(l&&w.push(C[g]),u){let e=$n(r,a,y);w.push(C[e[0]],C[e[1]])}if(T=[...T,{placement:r,overflows:w}],!w.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=S[e];if(t&&(u!==`alignment`||_===Zn(t)||T.every(e=>Zn(e.placement)!==_||e.overflows[0]>0)))return{data:{index:e,overflows:T},reset:{placement:t}};let n=T.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=T.filter(e=>{if(x){let t=Zn(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o}if(r!==n)return{reset:{placement:n}}}return{}}}},_r=/*#__PURE__*/ new Set([`left`,`top`]);async function vr(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=qn(n),s=Jn(n),c=Zn(n)===`y`,l=_r.has(o)?-1:1,u=a&&c?-1:1,d=Kn(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}const yr=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await vr(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},br=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i,platform:a}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=Kn(e,t),u={x:n,y:r},d=await a.detectOverflow(t,l),f=Zn(i),p=Yn(f),m=u[p],h=u[f],g=(e,t)=>Gn(t+d[e===`y`?`top`:`left`],t,t-d[e===`y`?`bottom`:`right`]);o&&(m=g(p,m)),s&&(h=g(f,h));let _=c.fn({...t,[p]:m,[f]:h});return{..._,data:{x:_.x-n,y:_.y-r,enabled:{[p]:o,[f]:s}}}}}},xr=function(e){return e===void 0&&(e={}),{name:`size`,options:e,async fn(t){let{placement:n,rects:r,platform:i,elements:a}=t,{apply:o=()=>{},...s}=Kn(e,t),c=await i.detectOverflow(t,s),l=qn(n),u=Jn(n),d=Zn(n)===`y`,{width:f,height:p}=r.floating,m,h;l===`top`||l===`bottom`?(m=l,h=u===(await(i.isRTL==null?void 0:i.isRTL(a.floating))?`start`:`end`)?`left`:`right`):(h=l,m=u===`end`?`top`:`bottom`);let g=p-c.top-c.bottom,_=f-c.left-c.right,v=zn(p-c[m],g),y=zn(f-c[h],_),b=t.middlewareData.shift,x=!b,S=v,C=y;b!=null&&b.enabled.x&&(C=_),b!=null&&b.enabled.y&&(S=g),x&&!u&&(d?C=f-2*Bn(c.left,c.right):S=p-2*Bn(c.top,c.bottom)),await o({...t,availableWidth:C,availableHeight:S});let w=await i.getDimensions(a.floating);return f!==w.width||p!==w.height?{reset:{rects:!0}}:{}}}};function Sr(){return typeof window<`u`}function Cr(e){return Er(e)?(e.nodeName||``).toLowerCase():`#document`}function wr(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Tr(e){return((Er(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function Er(e){return Sr()?e instanceof Node||e instanceof wr(e).Node:!1}function Dr(e){return Sr()?e instanceof Element||e instanceof wr(e).Element:!1}function Or(e){return Sr()?e instanceof HTMLElement||e instanceof wr(e).HTMLElement:!1}function kr(e){return!Sr()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof wr(e).ShadowRoot}function Ar(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=Vr(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!==`inline`&&i!==`contents`}function jr(e){return/^(table|td|th)$/.test(Cr(e))}function Mr(e){try{if(e.matches(`:popover-open`))return!0}catch{}try{return e.matches(`:modal`)}catch{return!1}}const Nr=/transform|translate|scale|rotate|perspective|filter/,Pr=/paint|layout|strict|content/,Fr=e=>!!e&&e!==`none`;let Ir;function Lr(e){let t=Dr(e)?Vr(e):e;return Fr(t.transform)||Fr(t.translate)||Fr(t.scale)||Fr(t.rotate)||Fr(t.perspective)||!zr()&&(Fr(t.backdropFilter)||Fr(t.filter))||Nr.test(t.willChange||``)||Pr.test(t.contain||``)}function Rr(e){let t=Ur(e);for(;Or(t)&&!Br(t);){if(Lr(t))return t;if(Mr(t))return null;t=Ur(t)}return null}function zr(){return Ir??=typeof CSS<`u`&&CSS.supports&&CSS.supports(`-webkit-backdrop-filter`,`none`),Ir}function Br(e){return/^(html|body|#document)$/.test(Cr(e))}function Vr(e){return wr(e).getComputedStyle(e)}function Hr(e){return Dr(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Ur(e){if(Cr(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||kr(e)&&e.host||Tr(e);return kr(t)?t.host:t}function Wr(e){let t=Ur(e);return Br(t)?(e.ownerDocument||e).body:Or(t)&&Ar(t)?t:Wr(t)}function Gr(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=Wr(e),i=r===e.ownerDocument?.body,a=wr(r);if(i){let e=Kr(a);return t.concat(a,a.visualViewport||[],Ar(r)?r:[],e&&n?Gr(e):[])}return t.concat(r,Gr(r,[],n))}function Kr(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function qr(e){let t=Vr(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=Or(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=Vn(n)!==a||Vn(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function Jr(e){return Dr(e)?e:e.contextElement}function Yr(e){let t=Jr(e);if(!Or(t))return Un(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=qr(t),o=(a?Vn(n.width):n.width)/r,s=(a?Vn(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}const Xr=/*#__PURE__*/ Un(0);function Zr(e){let t=wr(e);return!zr()||!t.visualViewport?Xr:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Qr(e,t,n){return t===void 0&&(t=!1),!!n&&t&&n===wr(e)}function $r(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=Jr(e),o=Un(1);t&&(r?Dr(r)&&(o=Yr(r)):o=Yr(e));let s=Qr(a,n,r)?Zr(a):Un(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a&&r){let e=wr(a),t=Dr(r)?wr(r):r,n=e,i=Kr(n);for(;i&&t!==n;){let e=Yr(i),t=i.getBoundingClientRect(),r=Vr(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=wr(i),i=Kr(n)}}return dr({width:u,height:d,x:c,y:l})}function ei(e,t){let n=Hr(e).scrollLeft;return t?t.left+n:$r(Tr(e)).left+n}function ti(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-ei(e,n),y:n.top+t.scrollTop}}function ni(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=Tr(r),s=t?Mr(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=Un(1),u=Un(0),d=Or(r);if((d||!a)&&((Cr(r)!==`body`||Ar(o))&&(c=Hr(r)),d)){let e=$r(r);l=Yr(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?ti(o,c):Un(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function ri(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function ii(e){let t=Hr(e),n=e.ownerDocument.body,r=Bn(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),i=Bn(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight),a=-t.scrollLeft+ei(e),o=-t.scrollTop;return Vr(n).direction===`rtl`&&(a+=Bn(e.clientWidth,n.clientWidth)-r),{width:r,height:i,x:a,y:o}}function ai(e,t,n){n===void 0&&(n=`viewport`);let r=n===`layoutViewport`,i=wr(e),a=Tr(e),o=i.visualViewport,s=a.clientWidth,c=a.clientHeight,l=0,u=0;if(o){let e=!zr()||t===`fixed`;r?e||(l=-o.offsetLeft,u=-o.offsetTop):(s=o.width,c=o.height,e&&(l=o.offsetLeft,u=o.offsetTop))}if(ei(a)<=0){let e=a.ownerDocument,t=e.body,n=getComputedStyle(t),r=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,i=Math.abs(a.clientWidth-t.clientWidth-r),o=getComputedStyle(a).scrollbarGutter===`stable both-edges`?i/2:i;o<=25&&(s-=o)}return{width:s,height:c,x:l,y:u}}function oi(e,t){let n=$r(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=Yr(e);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function si(e,t,n){let r;if(t===`viewport`||t===`layoutViewport`)r=ai(e,n,t);else if(t===`document`)r=ii(Tr(e));else if(Dr(t))r=oi(t,n);else{let n=Zr(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return dr(r)}function ci(e,t){let n=t.get(e);if(n)return n;let r=Gr(e,[],!1).filter(e=>Dr(e)&&Cr(e)!==`body`),i=null,a=Vr(e).position===`fixed`,o=a?Ur(e):e;for(;Dr(o)&&!Br(o);){let e=Vr(o),t=Lr(o),n=i?i.position:a?`fixed`:``;!t&&(n===`fixed`||n===`absolute`&&e.position===`static`)?r=r.filter(e=>e!==o):i=e,o=Ur(o)}return t.set(e,r),r}function li(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?Mr(t)?[]:ci(t,this._c):[].concat(n),r],o=si(t,a[0],i),s=o.top,c=o.right,l=o.bottom,u=o.left;for(let e=1;e<a.length;e++){let n=si(t,a[e],i);s=Bn(n.top,s),c=zn(n.right,c),l=zn(n.bottom,l),u=Bn(n.left,u)}return{width:c-u,height:l-s,x:u,y:s}}function ui(e){let{width:t,height:n}=qr(e);return{width:t,height:n}}function di(e,t,n){let r=Or(t),i=Tr(t),a=n===`fixed`,o=$r(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=Un(0);if((r||!a)&&((Cr(t)!==`body`||Ar(i))&&(s=Hr(t)),r)){let e=$r(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}!r&&i&&(c.x=ei(i));let l=i&&!r&&!a?ti(i,s):Un(0);return{x:o.left+s.scrollLeft-c.x-l.x,y:o.top+s.scrollTop-c.y-l.y,width:o.width,height:o.height}}function fi(e){return Vr(e).position===`static`}function pi(e,t){if(!Or(e)||Vr(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return Tr(e)===n&&(n=n.ownerDocument.body),n}function mi(e,t){let n=wr(e);if(Mr(e))return n;if(!Or(e)){let t=Ur(e);for(;t&&!Br(t);){if(Dr(t)&&!fi(t))return t;t=Ur(t)}return n}let r=pi(e,t);for(;r&&jr(r)&&fi(r);)r=pi(r,t);return r&&Br(r)&&fi(r)&&!Lr(r)?n:r||Rr(e)||n}const hi=async function(e){let t=this.getOffsetParent||mi,n=this.getDimensions,r=await n(e.floating);return{reference:di(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function gi(e){return Vr(e).direction===`rtl`}const _i={convertOffsetParentRelativeRectToViewportRelativeRect:ni,getDocumentElement:Tr,getClippingRect:li,getOffsetParent:mi,getElementRects:hi,getClientRects:ri,getDimensions:ui,getScale:Yr,isElement:Dr,isRTL:gi};function vi(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function yi(e,t,n){let r=null,i,a=Tr(e);function o(){var e;clearTimeout(i),(e=r)==null||e.disconnect(),r=null}function s(n,c){n===void 0&&(n=!1),c===void 0&&(c=1),o();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(n||t(),!f||!p)return;let m=Hn(d),h=Hn(a.clientWidth-(u+f)),g=Hn(a.clientHeight-(d+p)),_=Hn(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:Bn(0,zn(1,c))||1},y=!0;function b(t){let n=t[0].intersectionRatio;if(!vi(l,e.getBoundingClientRect()))return s();if(n!==c){if(!y)return s();n?s(!1,n):i=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{r=new IntersectionObserver(b,{...v,root:a.ownerDocument})}catch{r=new IntersectionObserver(b,v)}r.observe(e)}let c=wr(e),l=()=>s(n);return c.addEventListener(`resize`,l),s(!0),()=>{c.removeEventListener(`resize`,l),o()}}function bi(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=Jr(e),u=i||a?[...l?Gr(l):[],...t?Gr(t):[]]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n),a&&e.addEventListener(`resize`,n)});let d=l&&s?yi(l,n,a):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&t&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),t&&p.observe(t));let m,h=c?$r(e):null;c&&g();function g(){let t=$r(e);h&&!vi(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}const xi=yr,Si=br,Ci=gr,wi=xr,Ti=hr,Ei=(e,t,n)=>{let r=/* @__PURE__ */ new Map,i=n??{},a={..._i,...i.platform,_c:r};return mr(e,t,{...i,platform:a})};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Di=/* @__PURE__ */ new Set,Oi=class extends it{constructor(){super(...arguments),this.submenuCleanups=/* @__PURE__ */ new Map,this.localize=new bt(this),this.userTypedQuery=``,this.openSubmenuStack=[],this.open=!1,this.size=`m`,this.placement=`bottom-start`,this.distance=0,this.skidding=0,this.handleDocumentKeyDown=async e=>{let t=this.localize.dir()===`rtl`;if(e.key===`Escape`&&this.open&&In(this)){let t=this.getTrigger();e.preventDefault(),e.stopPropagation(),this.open=!1,t?.focus({preventScroll:!0});return}let n=[...Dn()].find(e=>e.localName===`wa-dropdown-item`),r=n?.localName===`wa-dropdown-item`,i=this.getCurrentSubmenuItem(),a=!!i,o,s,c;a?(o=this.getSubmenuItems(i),s=o.find(e=>e.active||e===n),c=s?o.indexOf(s):-1):(o=this.getItems(),s=o.find(e=>e.active||e===n),c=s?o.indexOf(s):-1);let l;if(e.key===`ArrowUp`&&(e.preventDefault(),e.stopPropagation(),l=c>0?o[c-1]:o[o.length-1]),e.key===`ArrowDown`&&(e.preventDefault(),e.stopPropagation(),l=c!==-1&&c<o.length-1?o[c+1]:o[0]),e.key===(t?`ArrowLeft`:`ArrowRight`)&&r&&s&&s.hasSubmenu)e.preventDefault(),e.stopPropagation(),s.submenuOpen=!0,this.addToSubmenuStack(s),setTimeout(()=>{let e=this.getSubmenuItems(s);e.length>0&&(e.forEach((e,t)=>e.active=t===0),e[0].focus({preventScroll:!0}))},0);else if(e.key===(t?`ArrowRight`:`ArrowLeft`)&&a){e.preventDefault(),e.stopPropagation();let t=this.removeFromSubmenuStack();t&&(t.submenuOpen=!1,setTimeout(()=>{t.focus({preventScroll:!0}),t.active=!0,(t.slot===`submenu`?this.getSubmenuItems(t.parentElement):this.getItems()).forEach(e=>{e!==t&&(e.active=!1)})},0))}else(e.key===`Home`||e.key===`End`)&&(e.preventDefault(),e.stopPropagation(),l=e.key===`Home`?o[0]:o[o.length-1]),e.key===`Tab`&&await this.hideMenu(),e.key.length===1&&!(e.metaKey||e.ctrlKey||e.altKey)&&(e.key!==` `||this.userTypedQuery!==``)&&(clearTimeout(this.userTypedTimeout),this.userTypedTimeout=setTimeout(()=>{this.userTypedQuery=``},1e3),this.userTypedQuery+=e.key,o.some(e=>{let t=(e.textContent||``).trim().toLowerCase(),n=this.userTypedQuery.trim().toLowerCase();return t.startsWith(n)?(l=e,!0):!1})),l?(e.preventDefault(),e.stopPropagation(),o.forEach(e=>e.active=e===l),l.focus({preventScroll:!0}),l.scrollIntoView({block:`nearest`})):(e.key===`Enter`||e.key===` `&&this.userTypedQuery===``)&&r&&s&&(e.preventDefault(),e.stopPropagation(),s.hasSubmenu?(s.submenuOpen=!0,this.addToSubmenuStack(s),setTimeout(()=>{let e=this.getSubmenuItems(s);e.length>0&&(e.forEach((e,t)=>e.active=t===0),e[0].focus({preventScroll:!0}))},0)):this.makeSelection(s,e))},this.handleDocumentPointerDown=e=>{e.composedPath().some(e=>e instanceof HTMLElement?e===this||e.closest(`wa-dropdown, [part="submenu"]`):!1)||(this.open=!1)},this.handleGlobalMouseMove=e=>{let t=this.getCurrentSubmenuItem();if(!t?.submenuOpen||!t.submenuElement)return;let n=t.submenuElement.getBoundingClientRect(),r=this.localize.dir()===`rtl`,i=r?n.right:n.left,a=r?Math.max(e.clientX,i):Math.min(e.clientX,i),o=Math.max(n.top,Math.min(e.clientY,n.bottom));t.submenuElement.style.setProperty(`--safe-triangle-cursor-x`,`${a}px`),t.submenuElement.style.setProperty(`--safe-triangle-cursor-y`,`${o}px`);let s=e.composedPath(),c=t.matches(`:hover`),l=!!t.submenuElement?.matches(`:hover`),u=c||!!s.find(e=>e===t),d=l||!!s.find(e=>e instanceof HTMLElement&&e.closest(`[part="submenu"]`)===t.submenuElement);!u&&!d&&setTimeout(()=>{!c&&!l&&(t.submenuOpen=!1)},100)}}handleSizeChange(){an(this.localName,this.size)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.userTypedTimeout),this.closeAllSubmenus(),this.submenuCleanups.forEach(e=>e()),this.submenuCleanups.clear(),document.removeEventListener(`mousemove`,this.handleGlobalMouseMove),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`pointerdown`,this.handleDocumentPointerDown),Fn(this)}firstUpdated(e){super.firstUpdated(e),this.syncAriaAttributes()}async updated(e){if(e.has(`open`)){let t=e.get(`open`);if(t===this.open||t===void 0&&this.open===!1)return;this.customStates.set(`open`,this.open),this.open?await this.showMenu():(this.closeAllSubmenus(),await this.hideMenu())}e.has(`size`)&&this.syncItemSizes()}getItems(e=!1){let t=(this.defaultSlot?.assignedElements({flatten:!0})??[]).filter(e=>e.localName===`wa-dropdown-item`);return e?t:t.filter(e=>!e.disabled)}getSubmenuItems(e,t=!1){let n=e.shadowRoot?.querySelector(`slot[name="submenu"]`)||e.querySelector(`slot[name="submenu"]`);if(!n)return[];let r=n.assignedElements({flatten:!0}).filter(e=>e.localName===`wa-dropdown-item`);return t?r:r.filter(e=>!e.disabled)}syncItemSizes(){(this.defaultSlot?.assignedElements({flatten:!0})??[]).filter(e=>e.localName===`wa-dropdown-item`).forEach(e=>e.size=this.size)}addToSubmenuStack(e){let t=this.openSubmenuStack.indexOf(e);t===-1?this.openSubmenuStack.push(e):this.openSubmenuStack=this.openSubmenuStack.slice(0,t+1)}removeFromSubmenuStack(){return this.openSubmenuStack.pop()}getCurrentSubmenuItem(){return this.openSubmenuStack.length>0?this.openSubmenuStack[this.openSubmenuStack.length-1]:void 0}closeAllSubmenus(){this.getItems(!0).forEach(e=>{e.submenuOpen=!1}),this.openSubmenuStack=[]}closeSiblingSubmenus(e){let t=e.closest(`wa-dropdown-item:not([slot="submenu"])`),n;n=t?this.getSubmenuItems(t,!0):this.getItems(!0),n.forEach(t=>{t!==e&&t.submenuOpen&&(t.submenuOpen=!1)}),this.openSubmenuStack.includes(e)||this.openSubmenuStack.push(e)}getTrigger(){return this.querySelector(`[slot="trigger"]`)}async showMenu(){if(!this.getTrigger()||!this.popup||!this.menu)return;let e=new kn;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}if(this.popup.active)return;Di.forEach(e=>e.open=!1),this.popup.active=!0,this.open=!0,Di.add(this),Pn(this),this.syncAriaAttributes(),document.addEventListener(`keydown`,this.handleDocumentKeyDown),document.addEventListener(`pointerdown`,this.handleDocumentPointerDown),document.addEventListener(`mousemove`,this.handleGlobalMouseMove),this.menu.classList.remove(`hide`),await Cn(this.menu,`show`);let t=this.getItems();t.length>0&&(t.forEach((e,t)=>e.active=t===0),t[0].focus({preventScroll:!0})),this.dispatchEvent(new Mn)}async hideMenu(){if(!this.popup||!this.menu)return;let e=new An({source:this});this.dispatchEvent(e),e.defaultPrevented?this.open=!0:(this.open=!1,Di.delete(this),Fn(this),this.syncAriaAttributes(),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`pointerdown`,this.handleDocumentPointerDown),document.removeEventListener(`mousemove`,this.handleGlobalMouseMove),this.menu.classList.remove(`show`),await Cn(this.menu,`hide`),this.popup.active=this.open,this.dispatchEvent(new jn))}handleMenuClick(e){let t=e.target.closest(`wa-dropdown-item`);t&&!t.disabled&&(t.hasSubmenu?(t.submenuOpen||=(this.closeSiblingSubmenus(t),this.addToSubmenuStack(t),!0),e.stopPropagation()):this.makeSelection(t,e))}async handleMenuSlotChange(){let e=this.getItems(!0);await Promise.all(e.map(e=>e.updateComplete)),this.syncItemSizes();let t=e.some(e=>e.type===`checkbox`),n=e.some(e=>e.hasSubmenu);e.forEach((r,i)=>{r.setAttribute(`aria-posinset`,String(i+1)),r.setAttribute(`aria-setsize`,String(e.length)),r.active=i===0,r.checkboxAdjacent=t,r.submenuAdjacent=n})}handleTriggerClick(){this.open=!this.open}handleSubmenuOpening(e){let t=e.detail.item;this.closeSiblingSubmenus(t),this.addToSubmenuStack(t),this.setupSubmenuPosition(t),this.processSubmenuItems(t)}setupSubmenuPosition(e){if(!e.submenuElement)return;this.cleanupSubmenuPosition(e);let t=bi(e,e.submenuElement,()=>{this.positionSubmenu(e),this.updateSafeTriangleCoordinates(e)});this.submenuCleanups.set(e,t);let n=e.submenuElement.querySelector(`slot[name="submenu"]`);n&&(n.removeEventListener(`slotchange`,Oi.handleSubmenuSlotChange),n.addEventListener(`slotchange`,Oi.handleSubmenuSlotChange),Oi.handleSubmenuSlotChange({target:n}))}static handleSubmenuSlotChange(e){let t=e.target;if(!t)return;let n=t.assignedElements().filter(e=>e.localName===`wa-dropdown-item`);if(n.length===0)return;let r=n.some(e=>e.hasSubmenu),i=n.some(e=>e.type===`checkbox`);n.forEach(e=>{e.submenuAdjacent=r,e.checkboxAdjacent=i})}processSubmenuItems(e){if(!e.submenuElement)return;let t=this.getSubmenuItems(e,!0),n=t.some(e=>e.hasSubmenu);t.forEach(e=>{e.submenuAdjacent=n})}cleanupSubmenuPosition(e){let t=this.submenuCleanups.get(e);t&&(t(),this.submenuCleanups.delete(e))}positionSubmenu(e){if(!e.submenuElement)return;let t=this.localize.dir()===`rtl`?`left-start`:`right-start`;Ei(e,e.submenuElement,{placement:t,middleware:[xi({mainAxis:0,crossAxis:-5}),Ci({fallbackStrategy:`bestFit`}),Si({padding:8,crossAxis:!0})]}).then(({x:t,y:n,placement:r})=>{e.submenuElement.setAttribute(`data-placement`,r),Object.assign(e.submenuElement.style,{left:`${t}px`,top:`${n}px`})})}updateSafeTriangleCoordinates(e){if(!e.submenuElement||!e.submenuOpen)return;if(document.activeElement?.matches(`:focus-visible`)){e.submenuElement.style.setProperty(`--safe-triangle-visible`,`none`);return}e.submenuElement.style.setProperty(`--safe-triangle-visible`,`block`);let t=e.submenuElement.getBoundingClientRect(),n=this.localize.dir()===`rtl`;e.submenuElement.style.setProperty(`--safe-triangle-submenu-start-x`,`${n?t.right:t.left}px`),e.submenuElement.style.setProperty(`--safe-triangle-submenu-start-y`,`${t.top}px`),e.submenuElement.style.setProperty(`--safe-triangle-submenu-end-x`,`${n?t.right:t.left}px`),e.submenuElement.style.setProperty(`--safe-triangle-submenu-end-y`,`${t.bottom}px`)}makeSelection(e,t){let n=this.getTrigger();if(e.disabled)return;e.type===`checkbox`&&(e.checked=!e.checked);let r=new En({item:e});this.dispatchEvent(r),r.defaultPrevented||(e.navigate(t),this.open=!1,n?.focus({preventScroll:!0}))}async syncAriaAttributes(){let e=this.getTrigger(),t;e&&(e.localName===`wa-button`?(await customElements.whenDefined(`wa-button`),await e.updateComplete,t=e.shadowRoot.querySelector(`[part~="base"]`)):t=e,t.hasAttribute(`id`)||t.setAttribute(`id`,Rn(`wa-dropdown-trigger-`)),t.setAttribute(`aria-haspopup`,`menu`),t.setAttribute(`aria-expanded`,this.open?`true`:`false`),this.menu?.setAttribute(`aria-expanded`,`false`))}render(){let e=this.didSSR&&!this.hasUpdated?this.open:this.popup?.active;return ve`
      <wa-popup
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        ?active=${e}
        flip
        flip-fallback-strategy="best-fit"
        shift
        shift-padding="10"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot
          name="trigger"
          slot="anchor"
          @click=${this.handleTriggerClick}
          @slotchange=${this.syncAriaAttributes}
        ></slot>
        <div
          id="menu"
          part="menu"
          role="menu"
          tabindex="-1"
          aria-orientation="vertical"
          @click=${this.handleMenuClick}
          @submenu-opening=${this.handleSubmenuOpening}
        >
          <slot @slotchange=${this.handleMenuSlotChange}></slot>
        </div>
      </wa-popup>
    `}};Oi.css=[sn,On],A([Qe(`slot:not([name])`)],Oi.prototype,`defaultSlot`,2),A([Qe(`#menu`)],Oi.prototype,`menu`,2),A([Qe(`wa-popup`)],Oi.prototype,`popup`,2),A([j({type:Boolean,reflect:!0})],Oi.prototype,`open`,2),A([j({reflect:!0})],Oi.prototype,`size`,2),A([Be(`size`)],Oi.prototype,`handleSizeChange`,1),A([j({reflect:!0})],Oi.prototype,`placement`,2),A([j({type:Number})],Oi.prototype,`distance`,2),A([j({type:Number})],Oi.prototype,`skidding`,2),Oi=A([Je(`wa-dropdown`)],Oi);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var ki=class extends Event{constructor(){super(`wa-reposition`,{bubbles:!0,cancelable:!1,composed:!0})}},Ai=c`
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
;function ji(e){return Ni(e)}function Mi(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Ni(e){for(let t=e;t;t=Mi(t))if(t instanceof Element&&getComputedStyle(t).display===`none`)return null;for(let t=Mi(e);t;t=Mi(t)){if(!(t instanceof Element))continue;let e=getComputedStyle(t);if(e.display!==`contents`&&(e.position!==`static`||Lr(e)||t.tagName===`BODY`))return t}return null}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Pi(e){return typeof e==`object`&&!!e&&`getBoundingClientRect`in e&&(`contextElement`in e?e instanceof Element:!0)}var Fi=!!globalThis?.HTMLElement?.prototype.hasOwnProperty(`popover`),Ii=class extends it{constructor(){super(...arguments),this.localize=new bt(this),this.SUPPORTS_POPOVER=!1,this.active=!1,this.placement=`top`,this.boundary=`viewport`,this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement=`anchor`,this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements=``,this.flipFallbackStrategy=`best-fit`,this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl&&this.popup){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),n=this.placement.includes(`top`)||this.placement.includes(`bottom`),r=0,i=0,a=0,o=0,s=0,c=0,l=0,u=0;n?e.top<t.top?(r=e.left,i=e.bottom,a=e.right,o=e.bottom,s=t.left,c=t.top,l=t.right,u=t.top):(r=t.left,i=t.bottom,a=t.right,o=t.bottom,s=e.left,c=e.top,l=e.right,u=e.top):e.left<t.left?(r=e.right,i=e.top,a=t.left,o=t.top,s=e.right,c=e.bottom,l=t.left,u=t.bottom):(r=t.right,i=t.top,a=e.left,o=e.top,s=t.right,c=t.bottom,l=e.left,u=e.bottom),this.style.setProperty(`--hover-bridge-top-left-x`,`${r}px`),this.style.setProperty(`--hover-bridge-top-left-y`,`${i}px`),this.style.setProperty(`--hover-bridge-top-right-x`,`${a}px`),this.style.setProperty(`--hover-bridge-top-right-y`,`${o}px`),this.style.setProperty(`--hover-bridge-bottom-left-x`,`${s}px`),this.style.setProperty(`--hover-bridge-bottom-left-y`,`${c}px`),this.style.setProperty(`--hover-bridge-bottom-right-x`,`${l}px`),this.style.setProperty(`--hover-bridge-bottom-right-y`,`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.SUPPORTS_POPOVER=Fi,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has(`active`)&&(this.active?this.start():this.stop()),e.has(`anchor`)&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor==`string`){let e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchorEl=this.anchor instanceof Element||Pi(this.anchor)?this.anchor:this.querySelector(`[slot="anchor"]`);this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&this.active&&this.isConnected&&(this.popup?.showPopover?.(),this.cleanup=bi(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.popup?.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute(`data-current-placement`),this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl||!this.popup)return;let e=[xi({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(wi({apply:({rects:e})=>{let t=this.sync===`width`||this.sync===`both`,n=this.sync===`height`||this.sync===`both`;this.popup.style.width=t?`${e.reference.width}px`:``,this.popup.style.height=n?`${e.reference.height}px`:``}})):(this.popup.style.width=``,this.popup.style.height=``);let t;this.SUPPORTS_POPOVER&&!Pi(this.anchor)&&this.boundary===`scroll`&&(t=Gr(this.anchorEl).filter(e=>e instanceof Element)),this.flip&&e.push(Ci({boundary:this.flipBoundary||t,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy===`best-fit`?`bestFit`:`initialPlacement`,padding:this.flipPadding})),this.shift&&e.push(Si({boundary:this.shiftBoundary||t,padding:this.shiftPadding})),this.autoSize?e.push(wi({boundary:this.autoSizeBoundary||t,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{this.autoSize===`vertical`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-height`,`${t}px`):this.style.removeProperty(`--auto-size-available-height`),this.autoSize===`horizontal`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-width`,`${e}px`):this.style.removeProperty(`--auto-size-available-width`)}})):(this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`)),this.arrow&&e.push(Ti({element:this.arrowEl,padding:this.arrowPadding}));let n=this.SUPPORTS_POPOVER?e=>_i.getOffsetParent(e,ji):_i.getOffsetParent;Ei(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.SUPPORTS_POPOVER?`absolute`:`fixed`,platform:{..._i,getOffsetParent:n}}).then(({x:e,y:t,middlewareData:n,placement:r})=>{let i=this.localize.dir()===`rtl`,a={top:`bottom`,right:`left`,bottom:`top`,left:`right`}[r.split(`-`)[0]];if(this.setAttribute(`data-current-placement`,r),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=n.arrow.x,t=n.arrow.y,r=``,o=``,s=``,c=``;if(this.arrowPlacement===`start`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;r=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``,o=i?n:``,c=i?``:n}else if(this.arrowPlacement===`end`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;o=i?``:n,c=i?n:``,s=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``}else this.arrowPlacement===`center`?(c=typeof e==`number`?`calc(50% - var(--arrow-size-diagonal))`:``,r=typeof t==`number`?`calc(50% - var(--arrow-size-diagonal))`:``):(c=typeof e==`number`?`${e}px`:``,r=typeof t==`number`?`${t}px`:``);Object.assign(this.arrowEl.style,{top:r,right:o,bottom:s,left:c,[a]:`calc(var(--arrow-base-offset) - var(--arrow-size-diagonal))`})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new ki)}render(){return ve`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${pn({"popup-hover-bridge":!0,"popup-hover-bridge-visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${pn({popup:!0,"popup-active":this.active,"popup-fixed":!this.SUPPORTS_POPOVER,"popup-has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?ve`<div part="arrow" class="arrow" role="presentation"></div>`:``}
      </div>
    `}};Ii.css=Ai,A([Qe(`.popup`)],Ii.prototype,`popup`,2),A([Qe(`.arrow`)],Ii.prototype,`arrowEl`,2),A([j({attribute:!1,type:Boolean})],Ii.prototype,`SUPPORTS_POPOVER`,2),A([j()],Ii.prototype,`anchor`,2),A([j({type:Boolean,reflect:!0})],Ii.prototype,`active`,2),A([j({reflect:!0})],Ii.prototype,`placement`,2),A([j()],Ii.prototype,`boundary`,2),A([j({type:Number})],Ii.prototype,`distance`,2),A([j({type:Number})],Ii.prototype,`skidding`,2),A([j({type:Boolean})],Ii.prototype,`arrow`,2),A([j({attribute:`arrow-placement`})],Ii.prototype,`arrowPlacement`,2),A([j({attribute:`arrow-padding`,type:Number})],Ii.prototype,`arrowPadding`,2),A([j({type:Boolean})],Ii.prototype,`flip`,2),A([j({attribute:`flip-fallback-placements`,converter:{fromAttribute:e=>e.split(` `).map(e=>e.trim()).filter(e=>e!==``),toAttribute:e=>e.join(` `)}})],Ii.prototype,`flipFallbackPlacements`,2),A([j({attribute:`flip-fallback-strategy`})],Ii.prototype,`flipFallbackStrategy`,2),A([j({type:Object})],Ii.prototype,`flipBoundary`,2),A([j({attribute:`flip-padding`,type:Number})],Ii.prototype,`flipPadding`,2),A([j({type:Boolean})],Ii.prototype,`shift`,2),A([j({type:Object})],Ii.prototype,`shiftBoundary`,2),A([j({attribute:`shift-padding`,type:Number})],Ii.prototype,`shiftPadding`,2),A([j({attribute:`auto-size`})],Ii.prototype,`autoSize`,2),A([j()],Ii.prototype,`sync`,2),A([j({type:Object})],Ii.prototype,`autoSizeBoundary`,2),A([j({attribute:`auto-size-padding`,type:Number})],Ii.prototype,`autoSizePadding`,2),A([j({attribute:`hover-bridge`,type:Boolean})],Ii.prototype,`hoverBridge`,2),Ii=A([Je(`wa-popup`)],Ii);var Li=/* @__PURE__ */ t({default:()=>Oi}),Ri=/* @__PURE__ */ t({default:()=>Xt}),P
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;Object.getOwnPropertyDescriptors||(()=>{var e;if(typeof Reflect<`u`&&Reflect.ownKeys)e=Reflect.ownKeys;else{var t=Object.getOwnPropertySymbols||(e=>[]);e=(e=>Object.getOwnPropertyNames(e).concat(t(e)))}return(t=>{for(var n=e(t),r={},i=n.length|0,a=0;a!==i;){var o=n[a];Object.defineProperty(r,o,{configurable:!0,enumerable:!0,writable:!0,value:Object.getOwnPropertyDescriptor(t,o)}),a=a+1|0}return r})})();function zi(e){this.c=e}P=zi.prototype,P.toString=(function(){return String.fromCharCode(this.c)});function Bi(e,t){this.l=e,this.h=t}P=Bi.prototype,P.toString=(function(){return Dc(this.l,this.h)});function Vi(e){switch(typeof e){case`string`:return r_.l();case`number`:return na(e)?e<<24>>24===e?Cm.l():e<<16>>16===e?Fm.l():Xg.l():ra(e)?Yg.l():Jg.l();case`boolean`:return Dp.l();case`undefined`:return bc.l();default:return e instanceof Bi?$g.l():e instanceof zi?Ap.l():e&&e.$classData?e.$classData.l():null}}function Hi(e){switch(typeof e){case`string`:return`java.lang.String`;case`number`:return na(e)?e<<24>>24===e?`java.lang.Byte`:e<<16>>16===e?`java.lang.Short`:`java.lang.Integer`:ra(e)?`java.lang.Float`:`java.lang.Double`;case`boolean`:return`java.lang.Boolean`;case`undefined`:return`java.lang.Void`;default:return e instanceof Bi?`java.lang.Long`:e instanceof zi?`java.lang.Character`:e&&e.$classData?e.$classData.N:null.nJ()}}function Ui(e,t){switch(typeof e){case`string`:return n_(e,t);case`number`:return Kg(e,t);case`boolean`:return Tp(e,t);case`undefined`:return _c(e,t);default:return e&&e.$classData||e===null?e.t(t):e instanceof Bi?Zg(e.l,e.h,t):e instanceof zi?kp(e.c,t):ua.prototype.t.call(e,t)}}function Wi(e){switch(typeof e){case`string`:return t_(e);case`number`:return qg(e);case`boolean`:return Ep(e);case`undefined`:return vc(e);default:return e&&e.$classData||e===null?e.x():e instanceof Bi?Qg(e.l,e.h):e instanceof zi?Op(e.c):ua.prototype.x.call(e)}}function Gi(e){return e===void 0?`undefined`:e.toString()}function Ki(e){if(e===0)throw new Sm(`/ by zero`);return e}function qi(e){return e>2147483647?2147483647:e<-2147483648?-2147483648:e|0}function Ji(e){return String.fromCharCode(e)}var Yi=/* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(8));function Xi(e,t,n,r,i){if(e!==n||r-t>>>0>i>>>0)for(var a=0;a<i;a=a+1|0)n[r+a|0]=e[t+a|0];else for(var a=i-1|0;a>=0;a=a-1|0)n[r+a|0]=e[t+a|0]}var Zi=0,Qi=/* @__PURE__ */ new WeakMap;function $i(e){switch(typeof e){case`string`:return t_(e);case`number`:return qg(e);case`bigint`:var t=0;for(e<BigInt(0)&&(e=~e);e!==BigInt(0);)t^=Number(BigInt.asIntN(32,e)),e>>=BigInt(32);return t;case`boolean`:return e?1231:1237;case`undefined`:return 0;case`symbol`:var n=e.description;return n===void 0?0:t_(n);default:if(e===null)return 0;var r=Qi.get(e);return r===void 0&&(r=Zi+1|0,Zi=r,Qi.set(e,r)),r}}function ea(e){return typeof e==`number`&&e<<24>>24===e&&1/e!=-1/0}function ta(e){return typeof e==`number`&&e<<16>>16===e&&1/e!=-1/0}function na(e){return typeof e==`number`&&(e|0)===e&&1/e!=-1/0}function ra(e){return typeof e==`number`&&(e!==e||Math.fround(e)===e)}function ia(e){return new zi(e)}ia(0);function aa(e,t){return new Bi(e,t)}var oa=aa(0,0);function sa(e){return e===null?0:e.c}function ca(e){return e===null?oa:e}function la(e){return e}function ua(){}P=ua.prototype,P.constructor=ua;function F(){}F.prototype=P,P.x=(function(){return $i(this)}),P.t=(function(e){return this===e}),P.B=(function(){var e=this.x();return Hi(this)+`@`+(e>>>0).toString(16)}),P.toString=(function(){return this.B()});function I(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}P=I.prototype=new F,P.constructor=I,P.q=(function(e,t,n,r){Xi(this.a,e,t.a,n,r)}),P.d=(function(){return new I(this.a.slice())});function da(){}da.prototype=P;function fa(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=!1}else this.a=e}P=fa.prototype=new F,P.constructor=fa,P.q=(function(e,t,n,r){Xi(this.a,e,t.a,n,r)}),P.d=(function(){return new fa(this.a.slice())});function pa(e){this.a=typeof e==`number`?new Uint16Array(e):e}P=pa.prototype=new F,P.constructor=pa,P.q=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),P.d=(function(){return new pa(this.a.slice())});function ma(e){this.a=typeof e==`number`?new Int8Array(e):e}P=ma.prototype=new F,P.constructor=ma,P.q=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),P.d=(function(){return new ma(this.a.slice())});function ha(e){this.a=typeof e==`number`?new Int16Array(e):e}P=ha.prototype=new F,P.constructor=ha,P.q=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),P.d=(function(){return new ha(this.a.slice())});function ga(e){this.a=typeof e==`number`?new Int32Array(e):e}P=ga.prototype=new F,P.constructor=ga,P.q=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),P.d=(function(){return new ga(this.a.slice())});function _a(e){typeof e==`number`?(e<<=1,this.a=new Int32Array(e)):this.a=e}P=_a.prototype=new F,P.constructor=_a,P.q=(function(e,t,n,r){t.a.set(this.a.subarray(e<<1,(e+r|0)<<1),n<<1)}),P.d=(function(){return new _a(this.a.slice())});function va(e){this.a=typeof e==`number`?new Float32Array(e):e}P=va.prototype=new F,P.constructor=va,P.q=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),P.d=(function(){return new va(this.a.slice())});function ya(e){this.a=typeof e==`number`?new Float64Array(e):e}P=ya.prototype=new F,P.constructor=ya,P.q=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),P.d=(function(){return new ya(this.a.slice())});function L(){this.C=void 0,this.n=null,this.O=null,this.B=null,this.D=0,this.z=null,this.E=``,this.L=void 0,this.A=void 0,this.F=void 0,this.w=void 0,this.J=!1,this.N=``,this.X=!1,this.Y=!1,this.Z=!1,this.I=void 0}P=L.prototype,P.p=(function(e,t,n,r,i){this.n={},this.z=e,this.E=t;var a=this;return this.F=(e=>e===a),this.N=n,this.X=!0,this.I=(e=>!1),r!==void 0&&(this.A=new L().y(this,r,i,t===`J`)),this}),P.i=(function(e,t,n,r){var i=Object.getOwnPropertyNames(n)[0];return this.n=n,this.E=`L`+t+`;`,this.F=(e=>!!e.n[i]),this.J=e===2,this.N=t,this.Y=e===1,this.I=r||(e=>!!(e&&e.$classData&&e.$classData.n[i])),typeof e!=`number`&&(e.prototype.$classData=this),this}),P.y=(function(e,t,n,r,i){t.prototype.$classData=this;var a=`[`+e.E;this.C=t,this.n={z:1,a:1},this.O=e,this.B=e,this.D=1,this.E=a,this.N=a,this.Z=!0;var o=this;return this.F=i||(e=>o===e),this.w=r?(e=>{for(var n=e.length|0,r=new t(n),i=r.a,a=0;a<n;a=a+1|0){var o=e[a];i[a<<1]=o.l,i[(a<<1)+1|0]=o.h}return r}):n?(e=>new t(new n(e))):(e=>new t(e)),this.I=(e=>e instanceof t),this}),P.a=(function(e){function t(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}var n=t.prototype=new da;n.constructor=t,n.q=(function(e,t,n,r){Xi(this.a,e,t.a,n,r)}),n.d=(function(){return new t(this.a.slice())}),n.$classData=this;var r=e.B||e,i=e.D+1,a=`[`+e.E;this.C=t,this.n={z:1,a:1},this.O=e,this.B=r,this.D=i,this.E=a,this.N=a,this.Z=!0;var o=(e=>{var t=e.D;return t===i?r.F(e.B):t>i&&r===R});this.F=o,this.w=(e=>new t(e));var s=this;return this.I=(e=>{var t=e&&e.$classData;return!!t&&(t===s||o(t))}),this}),P.r=(function(){return this.A||=new L().a(this),this.A}),P.l=(function(){return this.L||=new hf(this),this.L}),P.R=(function(e){return this===e||this.F(e)}),P.S=(function(){return this.P?this.P.l():null}),P.Q=(function(){return this.O?this.O.l():null}),P.U=(function(e){if(this===ba)throw Tm(new Em);return new(this.r()).C(e)});var R=new L;R.n={},R.E=`Ljava.lang.Object;`,R.F=(e=>!e.X),R.N=`java.lang.Object`,R.I=(e=>e!==null),R.A=new L().y(R,I,void 0,!1,(e=>{var t=e.D;return t===1?!e.B.X:t>1})),ua.prototype.$classData=R;var ba=new L().p(void 0,`V`,`void`,void 0,void 0),xa=new L().p(!1,`Z`,`boolean`,fa,void 0),Sa=new L().p(0,`C`,`char`,pa,Uint16Array),Ca=new L().p(0,`B`,`byte`,ma,Int8Array),wa=new L().p(0,`S`,`short`,ha,Int16Array),Ta=new L().p(0,`I`,`int`,ga,Int32Array),Ea=new L().p(oa,`J`,`long`,_a,Int32Array),Da=new L().p(0,`F`,`float`,va,Float32Array),Oa=new L().p(0,`D`,`double`,ya,Float64Array);new Int8Array(new Int32Array([1]).buffer)[0];function ka(e,t,n){for(var r=new Int32Array(e),i=t.length|0,a=0,o=0,s=0,c=0;o!==i;){var l=t.charCodeAt(o);l<80?c=(c|l-48)<<5:(c|=l-93,a=(a&n)+c|0,r[s]=a,s=s+1|0,c=0),o=o+1|0}return r}function Aa(e,t){return new ga(ka(e,t,-1))}function ja(e){return Vi(e).gQ()+`@`+$i(e)}function Ma(e){var t=e.h9;return t===void 0?ja(e):t}function Na(){Pa=this,Fa().nA(new cm((e=>void 0)),Yc().iM,!0)}P=Na.prototype=new F,P.constructor=Na,P.nA=(function(e,t,n){return new hp(e,n,t,this)}),new L().i(Na,`com.raquo.airstream.core.Observer$`,{c3:1});var Pa;function Fa(){return Pa||=new Na,Pa}function Ia(e){this.fM=null,this.ha=null,this.fN=0,this.fM=e,this.ha=void 0;var t=Qa().eZ();this.fN=t===void 0?1:1+t.fN|0,Ba().f4===-1||this.fN>Ba().f4?Nd().f1(new Rg(this,Ba().f4)):Wa().bI?Wa().dq.push(this)|0:Qa().gx(this)}P=Ia.prototype=new F,P.constructor=Ia;var La=new L().i(Ia,`com.raquo.airstream.core.Transaction`,{c6:1});function Ra(){this.f4=0,this.hb=null,za=this,this.f4=1e3,this.hb=new cm((e=>{throw gf(new _f,`Attempted to run Transaction `+e+` after it was already executed.`)}))}P=Ra.prototype=new F,P.constructor=Ra,P.jS=(function(e){try{e.fM.g(e);var t=e.ha;if(t!==void 0)for(;t.nM();)t.nH().nO(e)}catch(e){var n=e instanceof id?e:new iv(e);Nd().f1(n)}}),new L().i(Ra,`com.raquo.airstream.core.Transaction$`,{c7:1});var za;function Ba(){return za||=new Ra,za}function Va(e){e.f5.length|0?new Ia(new cm((t=>{for(;(e.f5.length|0)>0;){var n=e.f5.shift();try{n.g(t)}catch(e){var r=e instanceof id?e:new iv(e);Nd().f1(r)}}for(;(e.dq.length|0)>0;){var i=e.dq.shift();Qa().gx(i)}}))):(e.dq.length|0)>0&&new Ia(new cm((t=>{for(;(e.dq.length|0)>0;)Qa().gx(e.dq.shift())})))}function Ha(){this.bI=!1,this.f5=null,this.dq=null,Ua=this,this.bI=!1,this.f5=vo().dF(tu().dp(new(H.r()).C([]))),this.dq=vo().dF(tu().dp(new(La.r()).C([])))}P=Ha.prototype=new F,P.constructor=Ha,new L().i(Ha,`com.raquo.airstream.core.Transaction$onStart$`,{c8:1});var Ua;function Wa(){return Ua||=new Ha,Ua}function Ga(e,t){return e.dr.get(t)}function Ka(e,t){e.f6.unshift(t)}function qa(e){return e.f6.shift()}function Ja(e,t,n){var r=Ga(e,t),i=r===void 0,a=r===void 0?vo().dF(tu().dp(new(La.r()).C([]))):r;a.push(n),i&&e.dr.set(t,a)}function Ya(e,t){var n=Ga(e,t),r=n===void 0||(n.length|0)>0?n:void 0;if(r!==void 0){var i=r.shift();return r.length|0||e.dr.delete(t),i}}function Xa(){this.f6=null,this.dr=null,Za=this,this.f6=vo().dF(tu().dp(new(La.r()).C([]))),this.dr=/* @__PURE__ */ new Map}P=Xa.prototype=new F,P.constructor=Xa,P.gx=(function(e){var t=this.eZ();t===void 0?(Ka(this,e),Ba().jS(e),this.lZ(e)):Ja(this,t,e)}),P.lZ=(function(e){for(var t=e;;){var n=this.eZ(),r=t;if(!(n!==void 0&&W().n(r,n)))throw gf(new _f,`Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.`);this.n3(t),t.fM=Ba().hb;var i=this.eZ();if(W().n(i,void 0)){if((this.dr.size|0)>0){var a=new Td(0);throw this.dr.forEach((e=>((t,n)=>{e.dC=e.dC+(t.length|0)|0}))(a)),gf(new _f,`Transaction queue error: Stack cleared, but a total of `+a.dC+` children for `+(this.dr.size|0)+` transactions remain. This is a bug in Airstream.`)}return}Ba().jS(i),t=i}}),P.n3=(function(e){for(var t=e;;){var n=Ya(this,t);if(W().n(n,void 0)){qa(this);var r=this.eZ();if(!W().n(r,void 0))t=r;else return}else{Ka(this,n);return}}}),P.eZ=(function(){return this.f6[0]}),new L().i(Xa,`com.raquo.airstream.core.Transaction$pendingTransactions$`,{c9:1});var Za;function Qa(){return Za||=new Xa,Za}function $a(e,t){var n=e.cE.indexOf(t)|0;if(n!==-1)e.cE.splice(n,1),e.bn.e()||t.ks();else throw gf(new _f,`Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?`)}function eo(e){for(;(e.f7.length|0)>0;)$a(e,e.f7.shift())}function to(e){this.hc=null,this.cE=null,this.dO=!1,this.f7=null,this.bn=null,this.dP=0,this.hc=e,this.cE=vo().dF(tu().dp(new(ro.r()).C([]))),this.dO=!0,this.f7=vo().dF(tu().dp(new(ro.r()).C([]))),this.bn=o_(),this.dP=0}P=to.prototype=new F,P.constructor=to,P.jA=(function(){if(this.bn.e()){var e=Wa(),t=(()=>{var e=new gu(this.hc);this.bn=new s_(e),this.dO=!1,this.dP=0;for(var t=0,n=this.cE.length|0;t<n;){var r=t+this.dP|0;this.cE[r].kr(e),t=1+t|0}eo(this),this.dO=!0,this.dP=0});if(Wa(),e.bI)t();else{e.bI=!0;try{t()}finally{e.bI=!1,Va(e)}}}else throw gf(new _f,`Can not activate `+this+`: it is already active`)}),P.lS=(function(){if(this.bn.e())throw gf(new _f,`Can not deactivate DynamicOwner: it is not active`);this.dO=!1;for(var e=this.cE,t=0,n=e.length|0;t<n;)e[t].ks(),t=1+t|0;eo(this);var r=this.bn;r.e()||r.aC().mK(),eo(this),this.dO=!0,this.bn=o_()}),P.lw=(function(e,t){t?(this.dP=1+this.dP|0,this.cE.unshift(e)):this.cE.push(e);var n=this.bn;if(!n.e()){var r=n.aC();e.kr(r)}}),P.n9=(function(e){this.dO?$a(this,e):this.f7.push(e)}),new L().i(to,`com.raquo.airstream.ownership.DynamicOwner`,{ca:1});function no(e,t,n){this.f8=null,this.hd=null,this.f9=null,this.f8=e,this.hd=t,this.f9=o_(),e.lw(this,n)}P=no.prototype=new F,P.constructor=no,P.fG=(function(){this.f8.n9(this)}),P.kr=(function(e){var t=Wa(),n=(()=>{this.f9=this.hd.g(e)});if(Wa(),t.bI)n();else{t.bI=!0;try{n()}finally{t.bI=!1,Va(t)}}}),P.ks=(function(){var e=this.f9;e.e()||(e.aC().fG(),this.f9=o_())});var ro=new L().i(no,`com.raquo.airstream.ownership.DynamicSubscription`,{cb:1});function io(){}P=io.prototype=new F,P.constructor=io,P.nw=(function(e,t,n){return new no(e,new cm((e=>new s_(t.g(e)))),n)}),P.nn=(function(e,t,n){return new no(e,new cm((e=>(t.g(e),o_()))),n)}),new L().i(io,`com.raquo.airstream.ownership.DynamicSubscription$`,{cc:1});var ao;function oo(){return ao||=new io,ao}function so(e){e.dQ=vo().dF(tu().dp(new(mo.r()).C([])))}function co(e){for(var t=e.dQ,n=0,r=t.length|0;n<r;)fo(t[n]),n=1+n|0;e.dQ.length=0}function lo(e,t){var n=e.dQ.indexOf(t)|0;if(n!==-1)e.dQ.splice(n,1);else throw gf(new _f,`Can not remove Subscription from Owner: subscription not found.`)}function uo(e,t){e.dQ.push(t)}function fo(e){if(!e.fP)e.hf.a6(),e.fP=!0;else throw gf(new _f,`Can not kill Subscription: it was already killed.`)}function po(e,t){this.hg=null,this.hf=null,this.fP=!1,this.hg=e,this.hf=t,this.fP=!1,e.n2(this)}P=po.prototype=new F,P.constructor=po,P.fG=(function(){fo(this),lo(this.hg,this)});var mo=new L().i(po,`com.raquo.airstream.ownership.Subscription`,{cf:1});function ho(e,t){this.hh=null,this.hi=null,this.cF=null,this.ds=!1,this.hh=e,this.hi=t,this.cF=o_(),this.ds=!1}P=ho.prototype=new F,P.constructor=ho,P.mH=(function(){var e=this.cF;return!e.e()&&!e.aC().f8.bn.e()}),P.nh=(function(e){if(this.ds)throw gf(new _f,`Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var t=this.cF;if(t.e())var n=!1;else var r=t.aC().f8,n=e===null?r===null:e===r;if(!n){this.mH()&&!e.bn.e()&&(this.ds=!0);var i=this.cF;i.e()||(i.aC().fG(),this.cF=o_());var a=oo().nw(e,new cm((e=>(this.ds||this.hh.a6(),new po(e,new sm((()=>{this.ds||this.hi.a6()})))))),!1);this.cF=new s_(a),this.ds=!1}}),P.lJ=(function(){if(this.ds)throw gf(new _f,`Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var e=this.cF;e.e()||e.aC().fG(),this.cF=o_()}),new L().i(ho,`com.raquo.airstream.ownership.TransferableSubscription`,{cg:1});function go(){}P=go.prototype=new F,P.constructor=go,P.dF=(function(e){return[...lu().nu(e)]}),new L().i(go,`com.raquo.ew.JsArray$`,{ch:1});var _o;function vo(){return _o||=new go,_o}function yo(){}P=yo.prototype=new F,P.constructor=yo,P.mi=(function(e,t){for(var n=0,r=e.length|0;n<r;)t(e[n]),n=1+n|0}),new L().i(yo,`com.raquo.ew.JsArray$RichJsArray$`,{ci:1});var bo;function xo(){return bo||=new yo,bo}function So(){this.hj=null,Co=this,document.createElement(`template`),this.lQ(X().o.np().nq()),this.hj=/* @__PURE__ */ RegExp(` `,`g`)}P=So.prototype=new F,P.constructor=So,P.lz=(function(e,t){try{return e.appendChild(t),!0}catch(e){var n=e instanceof id?e:new iv(e);if(n instanceof iv&&n.bE instanceof DOMException)return!1;throw n instanceof iv?n.bE:n}}),P.mI=(function(e,t){for(var n=e;;){if(n.parentNode!==null)var r=n.parentNode;else var i=n.host,r=i===void 0?null:i;if(r===null)return!1;if(W().n(t,r))return!0;n=r}}),P.lP=(function(e){return document.createElement(e.gW())}),P.mu=(function(e,t){var n=this.mv(e,t);return n===void 0?void 0:t.dR.eR(n)}),P.mv=(function(e,t){var n=e.cc.getAttributeNS(null,t.cG);return n===null?void 0:n}),P.kE=(function(e,t,n){this.ng(e,t,t.dR.eS(n))}),P.ng=(function(e,t,n){n===null?this.n8(e,t):e.cc.setAttribute(t.cG,n)}),P.n8=(function(e,t){e.cc.removeAttribute(t.cG)}),P.kF=(function(e,t,n){var r=e.cc,i=t.dS,a=t.dT,o=n===null?null:n;o===null?(a.b8(new cm((e=>r.style.removeProperty(``+e+i)))),r.style.removeProperty(i)):(a.b8(new cm((e=>{r.style.setProperty(``+e+i,o)}))),r.style.setProperty(i,o))}),P.lQ=(function(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e.i4)}),P.my=(function(e,t){var n=this.mz(e,t);return n===void 0?void 0:t.fW.eR(n)}),P.mz=(function(e,t){var n=e.h2(),r=t.fd,i=n.getAttributeNS(r.e()?null:r.aC(),t.fX);return i===null?void 0:i}),P.ni=(function(e,t,n){this.nj(e,t,t.fW.eS(n))}),P.nj=(function(e,t,n){if(n===null)this.na(e,t);else{var r=t.fd;if(r.e())e.h2().setAttribute(t.fc,n);else{var i=r.aC();e.h2().setAttributeNS(i,t.fc,n)}}}),P.na=(function(e,t){var n=e.h2(),r=t.fd;n.removeAttributeNS(r.e()?null:r.aC(),t.fX)}),P.lR=(function(e){return document.createTextNode(e)}),P.lU=(function(e,t){for(var n=t,r=e;;){if(r===null)return n;var i=r.parentNode,a=new fx(this.lT(r),n);r=i,n=a}}),P.lT=(function(e){if(e instanceof HTMLElement){var t=e.id;if(fl(),t!==``)var n=`#`+t;else var r=e.className,n=(fl(),r===``?``:`.`+r.replace(this.hj,`.`));return e.tagName.toLowerCase()+n}return e.nodeName}),new L().i(So,`com.raquo.laminar.DomApi$`,{cj:1});var Co;function wo(){return Co||=new So,Co}function To(e,t,n){this.fR=null,this.hk=null,this.fQ=null,this.fR=e,this.hk=t,this.fQ=n}P=To.prototype=new F,P.constructor=To,P.b8=(function(e){this.fR===null?this.fQ===null?Qc().mk(this.hk,e):xo().mi(this.fQ,op().mq(e)):this.fR.b8(e)}),new L().i(To,`com.raquo.laminar.Seq`,{ck:1});function Eo(){Do=this,$()}P=Eo.prototype=new F,P.constructor=Eo,new L().i(Eo,`com.raquo.laminar.Seq$`,{cl:1});var Do;function Oo(){return Do||=new Eo,Do}function ko(e){Fa(),Nd()}function Ao(e){e.kS=ns()}function jo(e){Mo(e,new cm((e=>{e.hR.cc.focus()})))}function Mo(e,t){return new Ou(new cm((e=>{var n=new wd(!e.dU.bn.e()),r=new cm((e=>{n.fr?n.fr=!1:t.g(e)}));oo().nn(e.dU,new cm((e=>(t=>{r.g(new $o(e,t))}))(e)),!1)})),ns())}function No(){this.dt=null,this.fS=null,Po=this,this.dt=new vu(Fo()),new vu(Fo()),new vu(Fo()),this.fS=new _u}P=No.prototype=new F,P.constructor=No,new L().i(No,`com.raquo.laminar.codecs.package$`,{ct:1});var Po;function Fo(){return Po||=new No,Po}function Io(e){e.hp=Lo(e,`class`,` `)}function Lo(e,t,n){var r=Cu(new wu,t,Fo().dt);return new bu(r.cG,new cm((e=>{var t=wo().mu(e,r);return t===void 0?``:t})),new lm(((e,t)=>{wo().kE(e,r,t)})),n)}function Ro(e){e.kR=zo(e,`class`,` `)}function zo(e,t,n){var r=new Eu(t,Fo().dt,o_());return new bu(r.fc,new cm((e=>{var t=wo().my(e,r);return t===void 0?``:t})),new lm(((e,t)=>{wo().ni(e,r,t)})),n)}function Bo(e){this.fa=null,this.fa=e}P=Bo.prototype=new F,P.constructor=Bo,P.kt=(function(e,t){try{this.fa.cu(e,t)}catch(e){var n=e instanceof id?e:new iv(e);Nd().f1(n)}}),P.lK=(function(e){return new Bo(new lm(((t,n)=>{this.fa.cu(t,n),e.fa.cu(t,n)})))}),P.lA=(function(e){return e===void 0?this:e.lK(this)}),new L().i(Bo,`com.raquo.laminar.inserters.InserterHooks`,{cR:1});function Vo(){}P=Vo.prototype=new F,P.constructor=Vo,P.cA=(function(e,t){return new dm(e,void 0)}),new L().i(Vo,`com.raquo.laminar.inserters.StaticChildInserter$`,{cT:1});var Ho;function Uo(){return Ho||=new Vo,Ho}function Wo(){}P=Wo.prototype=new F,P.constructor=Wo,P.kq=(function(e,t){if(e===``)return $();var n=Mx(new Px,e.split(t).filter((e=>(fl(),e!==``))));return zh(),$().h0(n)}),new L().i(Wo,`com.raquo.laminar.keys.CompositeKey$`,{cW:1});var Go;function Ko(){return Go||=new Wo,Go}function qo(e,t){this.hQ=null,this.hP=null,this.hQ=e,this.hP=t}P=qo.prototype=new F,P.constructor=qo,P.E=(function(e){return new Ld(this.hQ,this.hP.g(e),new um(((e,t,n)=>{wo().kF(e,t,n)})))}),new L().i(qo,`com.raquo.laminar.keys.DerivedStyleProp`,{d0:1});function Jo(){}P=Jo.prototype=new F,P.constructor=Jo;function Yo(){}Yo.prototype=P;function Xo(){this.kT=null,this.kU=null,this.kV=null,this.kW=null,this.kT=`http://www.w3.org/2000/svg`,this.kU=`http://www.w3.org/1999/xlink`,this.kV=`http://www.w3.org/XML/1998/namespace`,this.kW=`http://www.w3.org/2000/xmlns/`}P=Xo.prototype=new F,P.constructor=Xo,P.mV=(function(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`xlink`:return`http://www.w3.org/1999/xlink`;case`xml`:return`http://www.w3.org/XML/1998/namespace`;case`xmlns`:return`http://www.w3.org/2000/xmlns/`;default:throw new Vm(e)}}),new L().i(Xo,`com.raquo.laminar.keys.SvgAttr$`,{d2:1});var Zo;function Qo(){return Zo||=new Xo,Zo}function $o(e,t){this.hR=null,this.hR=e}P=$o.prototype=new F,P.constructor=$o,new L().i($o,`com.raquo.laminar.lifecycle.MountContext`,{d3:1});var z=new L().i(1,`com.raquo.laminar.modifiers.Modifier`,{a2:1});function es(){this.kX=null,ts=this,this.kX=new Du}P=es.prototype=new F,P.constructor=es,new L().i(es,`com.raquo.laminar.modifiers.Modifier$`,{d6:1});var ts;function ns(){return ts||=new es,ts}function rs(){this.bY=null,is=this,this.bY=new ku}P=rs.prototype=new F,P.constructor=rs,new L().i(rs,`com.raquo.laminar.modifiers.RenderableNode$`,{da:1});var is;function as(){return is||=new rs,is}function os(){this.C=null,ss=this,this.C=new Nu(new cm((e=>e)),B()),new Nu(new cm((e=>``+(e|0))),B()),new Nu(new cm((e=>``+ +e)),B()),new Nu(new cm((e=>``+!!e)),B()),new Nu(new cm((e=>e.nt())),B())}P=os.prototype=new F,P.constructor=os,new L().i(os,`com.raquo.laminar.modifiers.RenderableText$`,{df:1});var ss;function B(){return ss||=new os,ss}function cs(){}P=cs.prototype=new F,P.constructor=cs,P.eF=(function(e,t,n){var r=new s_(e);t.kQ(r),n!==void 0&&n.kt(e,t);var i=wo().lz(e.dK(),t.dK());return i&&t.kG(r),i}),new L().i(cs,`com.raquo.laminar.nodes.ParentNode$`,{dh:1});var ls;function us(){return ls||=new cs,ls}function ds(e){this.i1=null,this.i1=new Bo(new lm(((t,n)=>{matchResult1:{var r=n.dK();if(r instanceof Element){r.setAttribute(`slot`,e);break matchResult1}if(r instanceof Text){var i=Nd(),a=r.textContent,o=t.dK().tagName;i.f1(gf(new _f,"Error: You tried to insert a raw text node `"+a+"` into the `"+e+"` slot of <"+o.toLowerCase()+`>.
 - Cause: This is not possible: named slots only accept elements. Your node was inserted into the default slot instead.
 - Suggestion: Wrap your text node into \`span()\``));break matchResult1}}})))}P=ds.prototype=new F,P.constructor=ds,P.cw=(function(e){return e.bT(new cm((e=>e.nz(this.i1))))}),new L().i(ds,`com.raquo.laminar.nodes.Slot`,{dl:1});function fs(){}P=fs.prototype=new F,P.constructor=fs,P.le=(function(e){return X().o.jY().fz(new Q([X().o.jX().k9(),X().o.ka().jR(),X().o.ki().kv().E(8),Fd(X().o,e,Mu())]))}),new L().i(fs,`doc.ExampleGroups$package$`,{dq:1});var ps;function ms(){return ps||=new fs,ps}function hs(){}P=hs.prototype=new F,P.constructor=hs,P.lg=(function(e){return X().o.jY().fz(new Q([X().o.jX().k9(),X().o.mh().nB(),X().o.ka().jR(),X().o.ki().kv().E(16),Fd(X().o,e,Mu())]))}),new L().i(hs,`doc.VerticalExamples$package$`,{dr:1});var gs;function _s(){return gs||=new hs,gs}function vs(){}P=vs.prototype=new F,P.constructor=vs,P.ly=(function(){bs().m7(),bs().m8(),bs().m9(),bs().ma(),bs().mb(),bs().mc(),bs().md()}),P.m7=(function(){var e=document.querySelector(`#example1`);Kc().dE(e).e()||(X(),new Rd(e,Hd().s(new Q([]),new Q([Gd().s(new Q([]),new Q([J(X().o,`Catalog`,B().C)])),Gd().s(new Q([]),new Q([J(X().o,`Clothing`,B().C)])),Gd().s(new Q([]),new Q([J(X().o,`Women's`,B().C)])),Gd().s(new Q([]),new Q([J(X().o,`Shirts & Tops`,B().C)]))]))))}),P.m8=(function(){var e=document.querySelector(`#example2`);Kc().dE(e).e()||(X(),new Rd(e,Hd().s(new Q(K().b(new(H.r()).C([]))),new Q(K().b(new(z.r()).C([Gd().s(new Q(K().b(new(H.r()).C([new Y((e=>e.fF().E(`https://example.com/home`)))]))),new Q(K().b(new(z.r()).C([J(X().o,`Homepage`,B().C)])))),Gd().s(new Q(K().b(new(H.r()).C([new Y((e=>e.fF().E(`https://example.com/home/services`)))]))),new Q(K().b(new(z.r()).C([J(X().o,`Our Services`,B().C)])))),Gd().s(new Q(K().b(new(H.r()).C([new Y((e=>e.fF().E(`https://example.com/home/services/digital`)))]))),new Q(K().b(new(z.r()).C([J(X().o,`Digital Media`,B().C)])))),Gd().s(new Q(K().b(new(H.r()).C([new Y((e=>e.fF().E(`https://example.com/home/services/digital/web-design`)))]))),new Q(K().b(new(z.r()).C([J(X().o,`Web Design`,B().C)]))))]))))))}),P.m9=(function(){var e=document.querySelector(`#example3`);Kc().dE(e).e()||(X(),new Rd(e,Hd().s(new Q(K().b(new(H.r()).C([]))),new Q(K().b(new(z.r()).C([Gd().s(new Q(K().b(new(H.r()).C([new Y((e=>Pd(X().o,Ds().kJ().cw(new Q(K().b(new(fm.r()).C([(X(),Uo().cA(pf().s(new Q(K().b(new(H.r()).C([new Y((e=>e.dJ().E(`house`)))]))),new Q(K().b(new(z.r()).C([])))),as().bY))])))),Nc().bZ,Mu())))]))),new Q(K().b(new(z.r()).C([J(X().o,`Home`,B().C)])))),Gd().s(new Q(K().b(new(H.r()).C([]))),new Q(K().b(new(z.r()).C([J(X().o,`Articles`,B().C)])))),Gd().s(new Q(K().b(new(H.r()).C([new Y((e=>Pd(X().o,Ds().k1().cw(new Q(K().b(new(fm.r()).C([(X(),Uo().cA(pf().s(new Q(K().b(new(H.r()).C([new Y((e=>e.dJ().E(`tree-palm`)))]))),new Q(K().b(new(z.r()).C([])))),as().bY))])))),Nc().bZ,Mu())))]))),new Q(K().b(new(z.r()).C([J(X().o,`Traveling`,B().C)]))))]))))))}),P.ma=(function(){var e=document.querySelector(`#example4`);Kc().dE(e).e()||(X(),new Rd(e,ms().le(new Q(K().b(new(Hg.r()).C([_s().lg(new Q(K().b(new(Hg.r()).C([Hd().s(new Q(K().b(new(H.r()).C([new Y((e=>Pd(X().o,ws().h4().cw(new Q(K().b(new(fm.r()).C([(X(),Uo().cA(pf().s(new Q(K().b(new(H.r()).C([new Y((e=>e.dJ().E(`angles-right`))),new Y((e=>e.f3().E(`solid`)))]))),new Q(K().b(new(z.r()).C([])))),as().bY))])))),Nc().bZ,Mu())))]))),new Q(K().b(new(z.r()).C([Gd().s(new Q(K().b(new(H.r()).C([]))),new Q(K().b(new(z.r()).C([J(X().o,`First`,B().C)])))),Gd().s(new Q(K().b(new(H.r()).C([]))),new Q(K().b(new(z.r()).C([J(X().o,`Second`,B().C)])))),Gd().s(new Q(K().b(new(H.r()).C([]))),new Q(K().b(new(z.r()).C([J(X().o,`Third`,B().C)]))))])))),Hd().s(new Q(K().b(new(H.r()).C([new Y((e=>Pd(X().o,ws().h4().cw(new Q(K().b(new(fm.r()).C([(X(),Uo().cA(pf().s(new Q(K().b(new(H.r()).C([new Y((e=>e.dJ().E(`arrow-right`))),new Y((e=>e.f3().E(`solid`)))]))),new Q(K().b(new(z.r()).C([])))),as().bY))])))),Nc().bZ,Mu())))]))),new Q(K().b(new(z.r()).C([Gd().s(new Q(K().b(new(H.r()).C([]))),new Q(K().b(new(z.r()).C([J(X().o,`First`,B().C)])))),Gd().s(new Q(K().b(new(H.r()).C([]))),new Q(K().b(new(z.r()).C([J(X().o,`Second`,B().C)])))),Gd().s(new Q(K().b(new(H.r()).C([]))),new Q(K().b(new(z.r()).C([J(X().o,`Third`,B().C)]))))])))),Hd().s(new Q(K().b(new(H.r()).C([new Y((e=>Pd(X().o,ws().h4().cw(new Q(K().b(new(fm.r()).C([(X(),Uo().cA(X().o.nm().fz(new Q(K().b(new(z.r()).C([J(X().o,`/`,B().C)])))),as().bY))])))),Nc().bZ,Mu())))]))),new Q(K().b(new(z.r()).C([Gd().s(new Q(K().b(new(H.r()).C([]))),new Q(K().b(new(z.r()).C([J(X().o,`First`,B().C)])))),Gd().s(new Q(K().b(new(H.r()).C([]))),new Q(K().b(new(z.r()).C([J(X().o,`Second`,B().C)])))),Gd().s(new Q(K().b(new(H.r()).C([]))),new Q(K().b(new(z.r()).C([J(X().o,`Third`,B().C)]))))]))))]))))]))))))}),P.mb=(function(){var e=document.querySelector(`#example5`);Kc().dE(e).e()||(X(),new Rd(e,Hd().s(new Q(K().b(new(H.r()).C([]))),new Q(K().b(new(z.r()).C([X().o.hp.ld(`redcrumbs`),Gd().s(new Q(K().b(new(H.r()).C([new Y((e=>Pd(X().o,Ds().kJ().cw(new Q(K().b(new(fm.r()).C([(X(),Uo().cA(pf().s(new Q(K().b(new(H.r()).C([new Y((e=>e.dJ().E(`house`))),new Y((e=>e.f3().E(`solid`)))]))),new Q(K().b(new(z.r()).C([])))),as().bY))])))),Nc().bZ,Mu())))]))),new Q(K().b(new(z.r()).C([J(X().o,`Home`,B().C)])))),Gd().s(new Q(K().b(new(H.r()).C([]))),new Q(K().b(new(z.r()).C([J(X().o,`Articles`,B().C)])))),Gd().s(new Q(K().b(new(H.r()).C([]))),new Q(K().b(new(z.r()).C([J(X().o,`Traveling`,B().C)]))))]))))))}),P.mc=(function(){var e=document.querySelector(`#example6`);Kc().dE(e).e()||(X(),new Rd(e,Hd().s(new Q(K().b(new(H.r()).C([]))),new Q(K().b(new(z.r()).C([Gd().s(new Q(K().b(new(H.r()).C([]))),new Q(K().b(new(z.r()).C([J(X().o,`Homepage`,B().C)])))),Gd().s(new Q(K().b(new(H.r()).C([]))),new Q(K().b(new(z.r()).C([sf().s(new Q(K().b(new(H.r()).C([new Y((e=>Pd(X().o,As().kM().cw(new Q(K().b(new(fm.r()).C([(X(),Uo().cA(Jd().s(new Q(K().b(new(H.r()).C([new Y((e=>e.kH().kI())),new Y((e=>e.jH().k8())),new Y((e=>e.ku().E(!0)))]))),new Q(K().b(new(z.r()).C([pf().s(new Q(K().b(new(H.r()).C([new Y((e=>e.ko().E(`More options`))),new Y((e=>e.dJ().E(`ellipsis`))),new Y((e=>e.f3().E(`solid`)))]))),new Q(K().b(new(z.r()).C([]))))])))),as().bY))])))),Nc().bZ,Mu())))]))),new Q(K().b(new(z.r()).C([uf().s(new Q(K().b(new(H.r()).C([new Y((e=>e.ef().E(`checkbox`))),new Y((e=>e.jQ().E(!0)))]))),new Q(K().b(new(z.r()).C([J(X().o,`Web Design`,B().C)])))),uf().s(new Q(K().b(new(H.r()).C([new Y((e=>e.ef().E(`checkbox`)))]))),new Q(K().b(new(z.r()).C([J(X().o,`Web Development`,B().C)])))),uf().s(new Q(K().b(new(H.r()).C([new Y((e=>e.ef().E(`checkbox`)))]))),new Q(K().b(new(z.r()).C([J(X().o,`Marketing`,B().C)]))))]))))])))),Gd().s(new Q(K().b(new(H.r()).C([]))),new Q(K().b(new(z.r()).C([J(X().o,`Our Services`,B().C)])))),Gd().s(new Q(K().b(new(H.r()).C([]))),new Q(K().b(new(z.r()).C([J(X().o,`Digital Media`,B().C)]))))]))))))}),P.md=(function(){var e=document.querySelector(`#example7`);Kc().dE(e).e()||(X(),new Rd(e,Hd().s(new Q(K().b(new(H.r()).C([]))),new Q(K().b(new(z.r()).C([Gd().s(new Q(K().b(new(H.r()).C([]))),new Q(K().b(new(z.r()).C([J(X().o,`Homepage`,B().C)])))),Gd().s(new Q(K().b(new(H.r()).C([]))),new Q(K().b(new(z.r()).C([J(X().o,`Our Services`,B().C)])))),Gd().s(new Q(K().b(new(H.r()).C([]))),new Q(K().b(new(z.r()).C([J(X().o,`Digital Media`,B().C)])))),Gd().s(new Q(K().b(new(H.r()).C([new Y((e=>Pd(X().o,Ds().k1().cw(new Q(K().b(new(fm.r()).C([(X(),Uo().cA(sf().s(new Q(K().b(new(H.r()).C([new Y((e=>Pd(X().o,As().kM().cw(new Q(K().b(new(fm.r()).C([(X(),Uo().cA(Jd().s(new Q(K().b(new(H.r()).C([new Y((e=>e.kH().kI())),new Y((e=>e.jH().k8())),new Y((e=>e.ku().E(!0)))]))),new Q(K().b(new(z.r()).C([pf().s(new Q(K().b(new(H.r()).C([new Y((e=>e.ko().E(`More options`))),new Y((e=>e.dJ().E(`ellipsis`))),new Y((e=>e.f3().E(`solid`)))]))),new Q(K().b(new(z.r()).C([]))))])))),as().bY))])))),Nc().bZ,Mu())))]))),new Q(K().b(new(z.r()).C([uf().s(new Q(K().b(new(H.r()).C([new Y((e=>e.ef().E(`checkbox`))),new Y((e=>e.jQ().E(!0)))]))),new Q(K().b(new(z.r()).C([J(X().o,`Web Design`,B().C)])))),uf().s(new Q(K().b(new(H.r()).C([new Y((e=>e.ef().E(`checkbox`)))]))),new Q(K().b(new(z.r()).C([J(X().o,`Web Development`,B().C)])))),uf().s(new Q(K().b(new(H.r()).C([new Y((e=>e.ef().E(`checkbox`)))]))),new Q(K().b(new(z.r()).C([J(X().o,`Marketing`,B().C)]))))])))),as().bY))])))),Nc().bZ,Mu())))]))),new Q(K().b(new(z.r()).C([J(X().o,`Web Design`,B().C)]))))]))))))}),new L().i(vs,`examples.breadcrumb.Main$package$`,{ds:1});var ys;function bs(){return ys||=new vs,ys}function xs(e){try{bs().ly()}catch(e){throw e}}function Ss(){this.i5=null,this.i6=!1}P=Ss.prototype=new F,P.constructor=Ss,P.h4=(function(){return this.i6||=(this.i5=new ds(`separator`),!0),this.i5}),new L().i(Ss,`io.github.nguyenyou.webawesome.laminar.Breadcrumb$slots$`,{du:1});var Cs;function ws(){return Cs||=new Ss,Cs}function Ts(){this.ib=null,this.ic=!1,this.i9=null,this.ia=!1}P=Ts.prototype=new F,P.constructor=Ts,P.kJ=(function(){return this.ic||=(this.ib=new ds(`start`),!0),this.ib}),P.k1=(function(){return this.ia||=(this.i9=new ds(`end`),!0),this.i9}),new L().i(Ts,`io.github.nguyenyou.webawesome.laminar.BreadcrumbItem$slots$`,{dw:1});var Es;function Ds(){return Es||=new Ts,Es}function Os(){this.ip=null,this.iq=!1}P=Os.prototype=new F,P.constructor=Os,P.kM=(function(){return this.iq||=(this.ip=new ds(`trigger`),!0),this.ip}),new L().i(Os,`io.github.nguyenyou.webawesome.laminar.Dropdown$slots$`,{dC:1});var ks;function As(){return ks||=new Os,ks}function js(e,t){for(var n=rc().bW(`^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$`),r=[],i=0;i<(t.length|0);){var a=t[i];if(a!==``){var o=n.exec(a);if(o!==null){var s=Ms(e,o[1]),c=s[0],l=s[1],u=o[2],d=o[3],f=parseInt(d),p=o[4];r.push(new Zu(c,l,u,f|0,p===void 0?-1:parseInt(p)|0))}else r.push(new Zu(`<jscode>`,a,null,-1,-1))|0}i=1+i|0}var m=r.length|0,h=new(Qu.r()).C(m);for(i=0;i<m;)h.a[i]=r[i],i=1+i|0;return h}function Ms(e,t){var n=rc().bW(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$`),r=rc().bW(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$`),i=rc().bW(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$`),a=rc().bW(`^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$`),o=rc().bW(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$`),s=n.exec(t),c=s===null?r.exec(t):s;if(c!==null)return[Ns(e,c[1]),Bs(e,c[2])];var l=i.exec(t),u=l===null?a.exec(t):l;if(u!==null)return[Ns(e,u[1]),`<init>`];var d=o.exec(t);return d===null?[`<jscode>`,t]:[Ns(e,d[1]),`<clinit>`]}function Ns(e,t){var n=Fs(e);if(gc().g9.call(n,t))var r=Fs(e)[t];else var r=Zs(e,0,t);return r.split(`_`).join(`.`).split(`＿`).join(`_`)}function Ps(e){if(!((1&e.bu)<<24>>24)){var t={};t.O=`java_lang_Object`,t.T=`java_lang_String`;for(var n=0;n<=22;){if(n>=2){var r=`T`+n;t[r]=`scala_Tuple`+n}var i=`F`+n;t[i]=`scala_Function`+n,n=1+n|0}e.g6=t,e.bu=(1|e.bu)<<24>>24}return e.g6}function Fs(e){return(1&e.bu)<<24>>24?e.g6:Ps(e)}function Is(e){if(!((2&e.bu)<<24>>24)){var t={};t.sjsr_=`scala_scalajs_runtime_`,t.sjs_=`scala_scalajs_`,t.sci_=`scala_collection_immutable_`,t.scm_=`scala_collection_mutable_`,t.scg_=`scala_collection_generic_`,t.sc_=`scala_collection_`,t.sr_=`scala_runtime_`,t.s_=`scala_`,t.jl_=`java_lang_`,t.ju_=`java_util_`,e.g7=t,e.bu=(2|e.bu)<<24>>24}return e.g7}function Ls(e){return(2&e.bu)<<24>>24?e.g7:Is(e)}function Rs(e){return(4&e.bu)<<24>>24||(e.g5=Object.keys(Ls(e)),e.bu=(4|e.bu)<<24>>24),e.g5}function zs(e){return(4&e.bu)<<24>>24?e.g5:Rs(e)}function Bs(e,t){if(t.startsWith(`init___`))return`<init>`;var n=t.indexOf(`__`)|0;return n<0?t:t.substring(0,n)}function Vs(e,t){return t?t.arguments&&t.stack?Hs(e,t):t.stack&&t.sourceURL?Gs(e,t):t.stack&&t.number?Ws(e,t):t.stack&&t.fileName?Us(e,t):t.message&&t[`opera#sourceloc`]?t.stacktrace?t.message.indexOf(`
`)>-1&&t.message.split(`
`).length>t.stacktrace.split(`
`).length?Ks(e,t):qs(e,t):Ks(e,t):t.message&&t.stack&&t.stacktrace?t.stacktrace.indexOf(`called from line`)<0?Js(e,t):Ys(e,t):t.stack&&!t.fileName?Hs(e,t):Xs(e,t):[]}function Hs(e,t){return(t.stack+`
`).replace(rc().bW(`^[\\s\\S]+?\\s+at\\s+`),` at `).replace(rc().bm(`^\\s+(at eval )?at\\s+`,`gm`),``).replace(rc().bm(`^([^\\(]+?)([\\n])`,`gm`),`{anonymous}() ($1)$2`).replace(rc().bm(`^Object.<anonymous>\\s*\\(([^\\)]+)\\)`,`gm`),`{anonymous}() ($1)`).replace(rc().bm(`^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(0,-1)}function Us(e,t){return t.stack.replace(rc().bm(`(?:\\n@:0)?\\s+$`,`m`),``).replace(rc().bm(`^(?:\\((\\S*)\\))?@`,`gm`),`{anonymous}($1)@`).split(`
`)}function Ws(e,t){return t.stack.replace(rc().bm(`^\\s*at\\s+(.*)$`,`gm`),`$1`).replace(rc().bm(`^Anonymous function\\s+`,`gm`),`{anonymous}() `).replace(rc().bm(`^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(1)}function Gs(e,t){return t.stack.replace(rc().bm(`\\[native code\\]\\n`,`m`),``).replace(rc().bm(`^(?=\\w+Error\\:).*$\\n`,`m`),``).replace(rc().bm(`^@`,`gm`),`{anonymous}()@`).split(`
`)}function Ks(e,t){for(var n=rc().bm(`Line (\\d+).*script (?:in )?(\\S+)`,`i`),r=t.message.split(`
`),i=[],a=2,o=r.length|0;a<o;){var s=n.exec(r[a]);s!==null&&i.push(`{anonymous}()@`+s[2]+`:`+s[1])|0,a=2+a|0}return i}function qs(e,t){for(var n=rc().bm(`Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$`,`i`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[3],l=c===void 0?`{anonymous}`:c;i.push(l+`()@`+s[2]+`:`+s[1])|0}a=2+a|0}return i}function Js(e,t){for(var n=rc().bW(`^(.*)@(.+):(\\d+)$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[1],l=c===void 0?`global code`:c+`()`;i.push(l+`@`+s[2]+`:`+s[3])|0}a=1+a|0}return i}function Ys(e,t){for(var n=rc().bW(`^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[4]+`:`+s[1]+`:`+s[2],l=s[2],u=(l===void 0?`global code`:l).replace(rc().bW(`<anonymous function: (\\S+)>`),`$1`).replace(rc().bW(`<anonymous function>`),`{anonymous}`);i.push(u+`@`+c)|0}a=2+a|0}return i}function Xs(e,t){return[]}function Zs(e,t,n){for(;;)if(t<(zs(e).length|0)){var r=zs(e)[t];if(n.startsWith(r))return``+Ls(e)[r]+n.substring(r.length);t=1+t|0}else return n.startsWith(`L`)?n.substring(1):n}function Qs(){this.g6=null,this.g7=null,this.g5=null,this.bu=0}P=Qs.prototype=new F,P.constructor=Qs,P.me=(function(e){return js(this,Vs(this,e))}),new L().i(Qs,`java.lang.StackTrace$`,{e0:1});var $s;function ec(){return $s||=new Qs,$s}function tc(){}P=tc.prototype=new F,P.constructor=tc,P.bW=(function(e){return new RegExp(e)}),P.bm=(function(e,t){return new RegExp(e,t)}),new L().i(tc,`java.lang.StackTrace$StringRE$`,{e1:1});var nc;function rc(){return nc||=new tc,nc}function ic(){this.iC=null,this.kY=null,ac=this,this.iC=new ov(!1),this.kY=new ov(!0)}P=ic.prototype=new F,P.constructor=ic,new L().i(ic,`java.lang.System$Streams$`,{e5:1});var ac;function oc(){return ac||=new ic,ac}function sc(e){var t={};return t[`java.version`]=`1.8`,t[`java.vm.specification.version`]=`1.8`,t[`java.vm.specification.vendor`]=`Oracle Corporation`,t[`java.vm.specification.name`]=`Java Virtual Machine Specification`,t[`java.vm.name`]=`Scala.js`,t[`java.vm.version`]=`1.22.0`,t[`java.specification.version`]=`1.8`,t[`java.specification.vendor`]=`Oracle Corporation`,t[`java.specification.name`]=`Java Platform API Specification`,t[`file.separator`]=`/`,t[`path.separator`]=`:`,t[`line.separator`]=`
`,t}function cc(){this.g8=null,this.iD=null,lc=this,this.g8=sc(this),this.iD=null}P=cc.prototype=new F,P.constructor=cc,P.gP=(function(e,t){if(this.g8!==null){var n=this.g8;return gc().g9.call(n,e)?n[e]:t}return this.iD.gP(e,t)}),new L().i(cc,`java.lang.System$SystemProperties$`,{e6:1});var lc;function uc(){return lc||=new cc,lc}function dc(){this.iE=null,fc=this,this.iE=new nd(void 0)}P=dc.prototype=new F,P.constructor=dc,new L().i(dc,`java.lang.Thread$`,{e7:1});var fc;function pc(){return fc||=new dc,fc}function mc(){this.g9=null,hc=this,this.g9=Object.prototype.hasOwnProperty}P=mc.prototype=new F,P.constructor=mc,new L().i(mc,`java.lang.Utils$Cache$`,{e9:1});var hc;function gc(){return hc||=new mc,hc}function _c(e,t){return e===t}function vc(e){return 0}function yc(e,t){return!!(e&&e.$classData&&e.$classData.D===t&&e.$classData.B.n.b7)}var bc=new L().i(0,`java.lang.Void`,{b7:1},(e=>e===void 0));function xc(e,t){throw wm(new Em,`argument type mismatch`)}function Sc(){}P=Sc.prototype=new F,P.constructor=Sc,P.bt=(function(e){return e instanceof I||e instanceof fa||e instanceof pa||e instanceof ma||e instanceof ha||e instanceof ga?e.a.length:e instanceof _a?e.a.length>>>1|0:(e instanceof va||e instanceof ya||xc(this,e),e.a.length)}),new L().i(Sc,`java.lang.reflect.Array$`,{ea:1});var Cc;function wc(){return Cc||=new Sc,Cc}function Tc(){}P=Tc.prototype=new F,P.constructor=Tc,P.lF=(function(e,t){for(var n=0,r=e.a.length;;)if(n===r)return~n;else{var i=(n+r|0)>>>1|0,a=e.a[i],o=t===a?0:t<a?-1:1;if(o<0){r=i;continue}if(o!==0){n=1+i|0;continue}return i}}),P.k4=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length>>>1|0;if((t.a.length>>>1|0)!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a,o=i<<1,s=a[o],c=a[o+1|0],l=r,u=t.a,d=l<<1,f=u[d],p=u[d+1|0];if((s^f|c^p)!==0)return!1;r=1+r|0}return!0}),P.gE=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),P.k5=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),P.k3=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),P.k2=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),P.k6=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),P.O=(function(e,t){var n=e.a.length,r=t<n?t:n,i=Vi(e).a8.Q().a8.U(t);return e.q(0,i,0,r),i}),P.X=(function(e,t,n){if(t>n)throw wm(new Em,t+` > `+n);var r=e.a.length,i=n-t|0,a=r-t|0,o=i<a?i:a,s=Vi(e).a8.Q().a8.U(i);return e.q(t,s,0,o),s}),new L().i(Tc,`java.util.Arrays$`,{eb:1});var Ec;function V(){return Ec||=new Tc,Ec}function Dc(e,t){return Ac().kL(e,t)}function Oc(){}P=Oc.prototype=new F,P.constructor=Oc,P.kL=(function(e,t){if(t===e>>31)return``+e;if(-2097152&(t^t>>10)){var n=t>>31,r=e^n,i=r-n|0,a=4294967296*(((t^n)+(i>>>0<r>>>0|0)|0)>>>0)+(i>>>0),o=+Math.floor(1.0000000000000265e-9*a),s=i-Math.imul(1e9,o|0)|0;s<0&&(--o,s=1e9+s|0);var c=``+s,l=o,u=c.length,d=``+l+`000000000`.substring(u)+c;return t<0?`-`+d:d}return``+(4294967296*t+(e>>>0))}),P.kg=(function(e){if(e<-0x8000000000000000)return aa(0,-2147483648);if(e>=0x8000000000000000)return aa(-1,2147483647);var t=e|0,n=23283064365386963e-26*e|0;return aa(t,e<0&&t!==0?n-1|0:n)}),P.lX=(function(e,t,n,r){var i=t>>31,a=e^i,o=a-i|0,s=(t^i)+(o>>>0<a>>>0|0)|0,c=r>>31,l=n^c,u=l-c|0,d=(r^c)+(u>>>0<l>>>0|0)|0;if(d|-2097152&u){var f=(4294967296*(s>>>0)+(o>>>0))/(4294967296*(d>>>0)+(u>>>0))+.00390625,p=f|0,m=23283064365386963e-26*f|0,h=65535&u,g=u>>>16|0,_=65535&p,v=p>>>16|0,y=Math.imul(h,_),b=Math.imul(g,_),x=Math.imul(h,v),S=y+((b+x|0)<<16)|0,C=(y>>>16|0)+x|0;if(((s-((((Math.imul(u,m)+Math.imul(d,p)|0)+Math.imul(g,v)|0)+(C>>>16|0)|0)+(((65535&C)+b|0)>>>16|0)|0)|0)-((o-S|0)>>>0>o>>>0|0)|0)<0)var w=p-1|0,T=(m-1|0)+(w!==-1|0)|0,ee=w,te=T;else var ee=p,te=m}else var ne=(s>>>0)/(Ki(u)>>>0)|0,ee=(4294967296*(s-Math.imul(u,ne)|0)+(o>>>0))/u|0,te=ne;if((t^r)>=0)return aa(ee,te);var E=-ee|0;return aa(E,(-te|0)-(E!==0|0)|0)}),P.lY=(function(e,t,n,r){if(!(r|-2097152&n)){var i=(t>>>0)/(Ki(n)>>>0)|0;return aa((4294967296*(t-Math.imul(n,i)|0)+(e>>>0))/n|0,i)}if(r>=0){var a=(4294967296*(t>>>0)+(e>>>0))/(4294967296*(r>>>0)+(n>>>0))+.00390625,o=a|0,s=23283064365386963e-26*a|0,c=65535&n,l=n>>>16|0,u=65535&o,d=o>>>16|0,f=Math.imul(c,u),p=Math.imul(l,u),m=Math.imul(c,d),h=f+((p+m|0)<<16)|0,g=(f>>>16|0)+m|0;if(((t-((((Math.imul(n,s)+Math.imul(r,o)|0)+Math.imul(l,d)|0)+(g>>>16|0)|0)+(((65535&g)+p|0)>>>16|0)|0)|0)-((e-h|0)>>>0>e>>>0|0)|0)<0){var _=o-1|0;return aa(_,(s-1|0)+(_!==-1|0)|0)}return aa(o,s)}return(t===r?e>>>0<n>>>0:t>>>0<r>>>0)?aa(0,0):aa(1,0)}),P.n6=(function(e,t,n,r){var i=t>>31,a=e^i,o=a-i|0,s=(t^i)+(o>>>0<a>>>0|0)|0,c=r>>31,l=n^c,u=l-c|0,d=(r^c)+(u>>>0<l>>>0|0)|0;if(d|-2097152&u){var f=(4294967296*(s>>>0)+(o>>>0))/(4294967296*(d>>>0)+(u>>>0))+.00390625,p=f|0,m=23283064365386963e-26*f|0,h=65535&u,g=u>>>16|0,_=65535&p,v=p>>>16|0,y=Math.imul(h,_),b=Math.imul(g,_),x=Math.imul(h,v),S=y+((b+x|0)<<16)|0,C=(y>>>16|0)+x|0,w=(((Math.imul(u,m)+Math.imul(d,p)|0)+Math.imul(g,v)|0)+(C>>>16|0)|0)+(((65535&C)+b|0)>>>16|0)|0,T=o-S|0,ee=(s-w|0)-(T>>>0>o>>>0|0)|0;if(ee<0)var te=T+u|0,ne=(ee+d|0)+(te>>>0<T>>>0|0)|0,E=te,re=ne;else var E=T,re=ee}else var ie=(4294967296*((s>>>0)%(Ki(u)>>>0)|0)+(o>>>0))/u|0,E=o-Math.imul(u,ie)|0,re=0;if(t<0){var ae=-E|0;return aa(ae,(-re|0)-(ae!==0|0)|0)}return aa(E,re)}),P.n7=(function(e,t,n,r){if(!(r|-2097152&n)){var i=(4294967296*((t>>>0)%(Ki(n)>>>0)|0)+(e>>>0))/n|0;return aa(e-Math.imul(n,i)|0,0)}if(r>=0){var a=(4294967296*(t>>>0)+(e>>>0))/(4294967296*(r>>>0)+(n>>>0))+.00390625,o=a|0,s=23283064365386963e-26*a|0,c=65535&n,l=n>>>16|0,u=65535&o,d=o>>>16|0,f=Math.imul(c,u),p=Math.imul(l,u),m=Math.imul(c,d),h=f+((p+m|0)<<16)|0,g=(f>>>16|0)+m|0,_=(((Math.imul(n,s)+Math.imul(r,o)|0)+Math.imul(l,d)|0)+(g>>>16|0)|0)+(((65535&g)+p|0)>>>16|0)|0,v=e-h|0,y=(t-_|0)-(v>>>0>e>>>0|0)|0;if(y<0){var b=v+n|0;return aa(b,(y+r|0)+(b>>>0<v>>>0|0)|0)}return aa(v,y)}if(t===r?e>>>0<n>>>0:t>>>0<r>>>0)return aa(e,t);var x=e-n|0;return aa(x,(t-r|0)-(x>>>0>e>>>0|0)|0)}),new L().i(Oc,`org.scalajs.linker.runtime.RuntimeLong$`,{ee:1});var kc;function Ac(){return kc||=new Oc,kc}function jc(){this.bZ=null,Mc=this,this.bZ=new zm}P=jc.prototype=new F,P.constructor=jc,new L().i(jc,`scala.$less$colon$less$`,{eh:1});var Mc;function Nc(){return Mc||=new jc,Mc}function Pc(e,t,n,r,i,a){for(var o=n,s=i,c=n+a|0;o<c;)tu().fB(r,s,tu().dG(t,o)),o=1+o|0,s=1+s|0}function Fc(){}P=Fc.prototype=new F,P.constructor=Fc,P.kb=(function(e,t){var n=e.u();if(n>-1){for(var r=t.ba(n),i=e.j(),a=0;a<n;)tu().fB(r,a,i.i()),a=1+a|0;return r}var o=null,s=t.aD(),c=s===Sa.l();o=[];for(var l=e.j();l.k();){var u=l.i(),d=c?sa(u):u===null?Rl().fJ(s):u;o.push(d)}return Rl().fI(s===ba.l()?bc.l():s===Yl.l()||s===rp.l()?R.l():s,o)}),P.eP=(function(e,t,n,r,i){var a=Vi(e);a.a8.Z&&Vi(n).a8.R(a.a8)?e.q(t,n,r,i):Pc(this,e,t,n,r,i)}),P.k7=(function(e,t){if(e===t)return!0;if(e.a.length!==t.a.length)return!1;for(var n=e.a.length,r=0;r<n;){if(!W().n(e.a[r],t.a[r]))return!1;r=1+r|0}return!0}),new L().i(Fc,`scala.Array$`,{ej:1});var Ic;function Lc(){return Ic||=new Fc,Ic}function Rc(){this.ga=null,this.iI=null,zc=this,this.ga=new ga(0),this.iI=new I(0)}P=Rc.prototype=new F,P.constructor=Rc,new L().i(Rc,`scala.Array$EmptyArrays$`,{ek:1});var zc;function Bc(){return zc||=new Rc,zc}function Vc(e){return!!(e&&e.$classData&&e.$classData.n.as)}var H=new L().i(1,`scala.Function1`,{f:1});function Hc(){}P=Hc.prototype=new F,P.constructor=Hc;function Uc(){}Uc.prototype=P;function Wc(){}P=Wc.prototype=new F,P.constructor=Wc,P.dE=(function(e){return e===null?o_():new s_(e)}),new L().i(Wc,`scala.Option$`,{er:1});var Gc;function Kc(){return Gc||=new Wc,Gc}function qc(){this.iN=null,this.iM=null,Jc=this,this.iN=new Y((e=>this.iN)),this.iM=new Rp}P=qc.prototype=new F,P.constructor=qc,new L().i(qc,`scala.PartialFunction$`,{es:1});var Jc;function Yc(){return Jc||=new qc,Jc}function Xc(){this.iQ=null,Zc=this,this.iQ=new Y((e=>Qc().iQ))}P=Xc.prototype=new F,P.constructor=Xc,P.mk=(function(e,t){var n=wc().bt(e),r=0;if(e instanceof I)for(;r<n;)t.g(e.a[r]),r=1+r|0;else if(e instanceof ga)for(;r<n;)t.g(e.a[r]),r=1+r|0;else if(e instanceof ya)for(;r<n;)t.g(e.a[r]),r=1+r|0;else if(e instanceof _a)for(;r<n;){var i=e.a,a=r<<1,o=i[a],s=i[a+1|0];t.g(aa(o,s)),r=1+r|0}else if(e instanceof va)for(;r<n;)t.g(e.a[r]),r=1+r|0;else if(e instanceof pa)for(;r<n;)t.g(ia(e.a[r])),r=1+r|0;else if(e instanceof ma)for(;r<n;)t.g(e.a[r]),r=1+r|0;else if(e instanceof ha)for(;r<n;)t.g(e.a[r]),r=1+r|0;else if(e instanceof fa)for(;r<n;)t.g(e.a[r]),r=1+r|0;else throw new Vm(e)}),new L().i(Xc,`scala.collection.ArrayOps$`,{ez:1});var Zc;function Qc(){return Zc||=new Xc,Zc}function $c(){}P=$c.prototype=new F,P.constructor=$c,P.bS=(function(e){var t=e+~(e<<9)|0;return t^=t>>>14|0,t=t+(t<<4)|0,t^(t>>>10|0)}),new L().i($c,`scala.collection.Hashing$`,{eD:1});var el;function tl(){return el||=new $c,el}function nl(e,t){for(var n=e.j();n.k();)t.g(n.i())}function rl(e,t){for(var n=!0,r=e.j();n&&r.k();)n=!!t.g(r.i());return n}function il(e){var t=e.u();return t===-1?!e.j().k():t===0}function al(e,t,n,r){var i=e.j(),a=n;matchResult18:{var o,s=e.u();if(s===-1){var o=wc().bt(t);break matchResult18}var o=s}for(var c=wc().bt(t),l=r<o?r:o,u=n<0?c:c-n|0,d=u<l?u:l,f=n+(d<0?0:d)|0;a<f&&i.k();)tu().fB(t,a,i.i()),a=1+a|0;return a-n|0}function ol(e,t,n,r){return e.u()===0?``+t+r:e.dd(wx(new Tx),t,n,r).aM.m}function sl(e,t,n,r,i){var a=t.aM;n.length!==0&&(a.m=``+a.m+n);var o=e.j();if(o.k()){var s=o.i();for(a.m=``+a.m+s;o.k();){r.length!==0&&(a.m=``+a.m+r);var c=o.i();a.m=``+a.m+c}}return i.length!==0&&(a.m=``+a.m+i),t}function cl(e,t){if(e.u()>=0){var n=e.u(),r=t.ba(n);return e.bs(r,0,2147483647),r}var i=null,a=t.aD(),o=a===Sa.l();i=[];for(var s=e.j();s.k();){var c=s.i(),l=o?sa(c):c===null?Rl().fJ(a):c;i.push(l)}return Rl().fI(a===ba.l()?bc.l():a===Yl.l()||a===rp.l()?R.l():a,i)}function ll(e,t){this.iW=null,this.eq=null,this.iW=e,this.eq=t}P=ll.prototype=new F,P.constructor=ll,P.mB=(function(){return this.iW.a6().j()}),new L().i(ll,`scala.collection.Iterator$ConcatIteratorCell`,{eM:1});function ul(){this.iZ=null,dl=this,this.iZ=new Y((e=>this.iZ))}P=ul.prototype=new F,P.constructor=ul,new L().i(ul,`scala.collection.StringOps$`,{eT:1});var dl;function fl(){return dl||=new ul,dl}function pl(){}P=pl.prototype=new F,P.constructor=pl,P.gS=(function(e,t){return Om(new Am,e+` is out of bounds (min 0, max `+t+`)`)}),new L().i(pl,`scala.collection.generic.CommonErrors$`,{eX:1});var ml;function hl(){return ml||=new pl,ml}function gl(){this.j4=0,_l=this;try{fl();var e=Ju().km(uc().gP(`scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength`,`64`),10,214748364)}catch(t){if(0)var e;else{var e;throw t}}this.j4=e}P=gl.prototype=new F,P.constructor=gl,new L().i(gl,`scala.collection.immutable.IndexedSeqDefaults$`,{f5:1});var _l;function vl(){return _l||=new gl,_l}function yl(){}P=yl.prototype=new F,P.constructor=yl,new L().i(yl,`scala.collection.immutable.LazyList$EmptyMarker$`,{f8:1});var bl;function xl(){return bl||=new yl,bl}function Sl(){this.gh=null}P=Sl.prototype=new F,P.constructor=Sl,P.gF=(function(){var e=this.gh;if(e===null)throw new Dm(`uninitialized`);return e.a6()}),P.gT=(function(e){if(this.gh!==null)throw new Dm(`already initialized`);this.gh=e}),new L().i(Sl,`scala.collection.immutable.LazyList$LazyBuilder$DeferredState`,{fa:1});function Cl(){}P=Cl.prototype=new F,P.constructor=Cl,new L().i(Cl,`scala.collection.immutable.LazyListBase$TailUpdater`,{ff:1});function wl(){this.j9=null,Tl=this,$v(),this.j9=new Uf(0,0,new I(0),new ga(0),0,0)}P=wl.prototype=new F,P.constructor=wl,new L().i(wl,`scala.collection.immutable.MapNode$`,{ft:1});var Tl;function El(){return Tl||=new wl,Tl}function Dl(e,t,n){return Ug(new Gg,n+` is out of bounds (min 0, max `+(wc().bt(t)-1|0))}function Ol(){}P=Ol.prototype=new F,P.constructor=Ol;function kl(){}kl.prototype=P,P.kw=(function(e,t){if(t<0||t>(e.a.length-1|0))throw Dl(this,e,t);var n=new ga(e.a.length-1|0);e.q(0,n,0,t);var r=1+t|0,i=(e.a.length-t|0)-1|0;return e.q(r,n,t,i),n}),P.mF=(function(e,t,n){if(t<0||t>e.a.length)throw Dl(this,e,t);var r=new ga(1+e.a.length|0);e.q(0,r,0,t),r.a[t]=n;var i=1+t|0,a=e.a.length-t|0;return e.q(t,r,i,a),r});var Al=new L().i(0,`scala.collection.immutable.Node`,{aI:1});function jl(){this.ey=0,Ml=this,this.ey=qi(7)}P=jl.prototype=new F,P.constructor=jl,P.dI=(function(e,t){return 31&(e>>>t|0)}),P.dg=(function(e){return 1<<e}),P.mC=(function(e,t){return Ju().df(e&(t-1|0))}),P.c8=(function(e,t,n){return e===-1?t:this.mC(e,n)}),new L().i(jl,`scala.collection.immutable.Node$`,{fw:1});var Ml;function Nl(){return Ml||=new jl,Ml}function Pl(){this.gl=null,this.b7=null,this.c4=null,this.e5=null,this.gm=null,this.jd=null,Fl=this,this.gl=new I(0),this.b7=new(R.r().r()).C(0),this.c4=new(R.r().r().r()).C(0),this.e5=new(R.r().r().r().r()).C(0),this.gm=new(R.r().r().r().r().r()).C(0),this.jd=new(R.r().r().r().r().r().r()).C(0)}P=Pl.prototype=new F,P.constructor=Pl,P.ea=(function(e,t){var n=e.a.length,r=new I(1+n|0);return e.q(0,r,0,n),r.a[n]=t,r}),P.z=(function(e,t){var n=V().O(e,1+e.a.length|0);return n.a[n.a.length-1|0]=t,n}),P.c6=(function(e,t){var n=Vi(t).a8.Q().a8.U(1+t.a.length|0),r=t.a.length;return t.q(0,n,1,r),n.a[0]=e,n}),P.gH=(function(e,t,n){var r=0,i=t.a.length;if(e===0)for(;r<i;)n.g(t.a[r]),r=1+r|0;else for(var a=e-1|0;r<i;)this.gH(a,t.a[r],n),r=1+r|0}),P.bH=(function(e,t){for(var n=0;n<e.a.length;){var r=e.a[n],i=t.g(r);if(!Object.is(r,i))return this.mQ(e,t,n,i);n=1+n|0}return e}),P.mQ=(function(e,t,n,r){var i=new I(e.a.length);n>0&&e.q(0,i,0,n),i.a[n]=r;for(var a=1+n|0;a<e.a.length;)i.a[a]=t.g(e.a[a]),a=1+a|0;return i}),P.W=(function(e,t,n){if(e===1)return this.bH(t,n);for(var r=0;r<t.a.length;){var i=t.a[r],a=this.W(e-1|0,i,n);if(i!==a)return this.mR(e,t,n,r,a);r=1+r|0}return t}),P.mR=(function(e,t,n,r,i){var a=Vi(t).a8.Q().a8.U(t.a.length);r>0&&t.q(0,a,0,r),a.a[r]=i;for(var o=1+r|0;o<t.a.length;)a.a[o]=this.W(e-1|0,t.a[o],n),o=1+o|0;return a}),new L().i(Pl,`scala.collection.immutable.VectorStatics$`,{fN:1});var Fl;function U(){return Fl||=new Pl,Fl}function Il(){}P=Il.prototype=new F,P.constructor=Il,P.fJ=(function(e){return e===Ca.l()||e===wa.l()||e===Sa.l()||e===Ta.l()?0:e===Ea.l()?aa(0,0):e===Da.l()||e===Oa.l()?0:e===xa.l()?!1:e===ba.l()?void 0:null}),P.fI=(function(e,t){var n=t.length|0;if(e===Sa.l()){for(var r=new pa(n),i=0;i!==n;)r.a[i]=65535&(t[i]|0),i=1+i|0;return r}for(var a=e.a8.U(n),o=0;o!==n;)tu().fB(a,o,t[o]),o=1+o|0;return a}),new L().i(Il,`scala.collection.mutable.ArrayBuilder$`,{fU:1});var Ll;function Rl(){return Ll||=new Il,Ll}function zl(e,t,n){this.e8=null,this.cr=0,this.aL=null,this.e8=e,this.cr=t,this.aL=n}P=zl.prototype=new F,P.constructor=zl,P.mg=(function(e,t){for(var n=this;;)if(t===n.cr&&W().n(e,n.e8))return n;else if(n.aL===null||n.cr>t)return null;else n=n.aL}),P.B=(function(){return`Node(`+this.e8+`, `+this.cr+`) -> `+this.aL});var Bl=new L().i(zl,`scala.collection.mutable.HashSet$Node`,{g6:1});function Vl(){}P=Vl.prototype=new F,P.constructor=Vl,P.jP=(function(e,t,n){if(t!==e)throw new Lm(n)}),new L().i(Vl,`scala.collection.mutable.MutationTracker$`,{gc:1});var Hl;function Ul(){return Hl||=new Vl,Hl}function Wl(){this.l2=null,this.lb=null,this.l3=null,this.l6=null,this.l7=null,this.l5=null,this.l4=null,this.l1=null,this.lc=null,this.l0=null,this.la=null,this.l8=null,this.l9=null,Gl=this,this.l2=Vv(),this.lb=my(),this.l3=Wv(),this.l6=$v(),this.l7=ny(),this.l5=Xv(),this.l4=qv(),this.l1=Rv(),this.lc=_y(),this.l0=Fv(),this.la=dy(),this.l8=ay(),this.l9=cy()}P=Wl.prototype=new F,P.constructor=Wl,P.jM=(function(e){return e===Ca.l()?Vv():e===wa.l()?my():e===Sa.l()?Wv():e===Ta.l()?$v():e===Ea.l()?ny():e===Da.l()?Xv():e===Oa.l()?qv():e===xa.l()?Rv():e===ba.l()?_y():e===R.l()?dy():e===rp.l()?ay():e===Yl.l()?cy():new G_(e)}),new L().i(Wl,`scala.reflect.ClassTag$`,{gk:1});var Gl;function Kl(){return Gl||=new Wl,Gl}function ql(){}P=ql.prototype=new F,P.constructor=ql,P.n=(function(e,t){return e===t||(Xu(e)?this.m6(e,t):e instanceof zi?this.m4(e,t):e===null?t===null:Ui(e,t))}),P.m6=(function(e,t){if(Xu(t))return this.m5(e,t);if(t instanceof zi){if(typeof e==`number`)return+e===t.c;if(e instanceof Bi){var n=ca(e),r=n.l,i=n.h,a=t.c,o=a>>31;return(r^a|i^o)===0}return e===null?t===null:Ui(e,t)}return e===null?t===null:Ui(e,t)}),P.m5=(function(e,t){if(typeof e==`number`){var n=+e;if(typeof t==`number`)return n===+t;if(t instanceof Bi){var r=ca(t),i=r.l;return n===4294967296*r.h+(i>>>0)}return!1}if(e instanceof Bi){var a=ca(e),o=a.l,s=a.h;if(t instanceof Bi){var c=ca(t),l=c.l,u=c.h;return(o^l|s^u)===0}if(typeof t==`number`){var d=+t;return 4294967296*s+(o>>>0)===d}return!1}return e===null?t===null:Ui(e,t)}),P.m4=(function(e,t){if(t instanceof zi)return e.c===t.c;if(Xu(t)){if(typeof t==`number`)return+t===e.c;if(t instanceof Bi){var n=ca(t),r=n.l,i=n.h,a=e.c,o=a>>31;return(r^a|i^o)===0}return t===null?e===null:Ui(t,e)}return e===null&&t===null}),new L().i(ql,`scala.runtime.BoxesRunTime$`,{gN:1});var Jl;function W(){return Jl||=new ql,Jl}var Yl=new L().i(0,`scala.runtime.Null$`,{gQ:1});function Xl(){}P=Xl.prototype=new F,P.constructor=Xl,P.bV=(function(){throw Mm(new Pm,`tried to cast away nullability, but value is null`)}),new L().i(Xl,`scala.runtime.Scala3RunTime$`,{gS:1});var Zl;function Ql(){return Zl||=new Xl,Zl}function $l(){}P=$l.prototype=new F,P.constructor=$l,P.lx=(function(e){return e===null?Yl.l():Vi(e)}),P.dG=(function(e,t){if(e instanceof I||e instanceof ga||e instanceof ya)return e.a[t];if(e instanceof _a){var n=e.a,r=t<<1;return aa(n[r],n[r+1|0])}if(e instanceof va)return e.a[t];if(e instanceof pa)return ia(e.a[t]);if(e instanceof ma||e instanceof ha||e instanceof fa)return e.a[t];throw e===null?Nm(new Pm):new Vm(e)}),P.fB=(function(e,t,n){if(e instanceof I)e.a[t]=n;else if(e instanceof ga)e.a[t]=n|0;else if(e instanceof ya)e.a[t]=+n;else if(e instanceof _a){var r=ca(n),i=e.a,a=t<<1;i[a]=r.l,i[a+1|0]=r.h}else if(e instanceof va)e.a[t]=Math.fround(n);else if(e instanceof pa)e.a[t]=sa(n);else if(e instanceof ma)e.a[t]=n|0;else if(e instanceof ha)e.a[t]=n|0;else if(e instanceof fa)e.a[t]=!!n;else throw e===null?Nm(new Pm):new Vm(e)}),P.lh=(function(e){return ol(e.ed(),e.cD()+`(`,`,`,`)`)}),P.dp=(function(e){if(e===null)return null;if(e.a.length===0){var t=C_();return dy(),b_(t)}return new Ub(e)}),new L().i($l,`scala.runtime.ScalaRunTime$`,{gT:1});var eu;function tu(){return eu||=new $l,eu}function nu(){}P=nu.prototype=new F,P.constructor=nu,P.y=(function(e,t){var n=this.cz(e,t),r=n;return n=r<<13|r>>>19,Math.imul(5,n)-430675100|0}),P.cz=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|r>>>17,n=Math.imul(461845907,n),e^n}),P.aB=(function(e,t){return this.lE(e^t)}),P.lE=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),P.mM=(function(e,t){return t===e>>31?e:e^t}),P.m0=(function(e){var t=qi(e);if(t===e)return t;var n=Ac().kg(e),r=n.l,i=n.h;if(4294967296*i+(r>>>0)===e)return r^i;var a=e|0;if(a===e&&1/e!=-1/0)return a;if(e!==e)return 2146959360;var o=Yi;return o.setFloat64(0,e,!0),(o.getInt32(0,!0)|0)^(o.getInt32(4,!0)|0)}),P.J=(function(e){if(e===null)return 0;if(typeof e==`number`)return this.m0(+e);if(e instanceof Bi){var t=ca(e);return this.mM(t.l,t.h)}return Wi(e)}),P.mG=(function(e){throw Om(new Am,``+e)}),new L().i(nu,`scala.runtime.Statics$`,{gV:1});var ru;function G(){return ru||=new nu,ru}function iu(){}P=iu.prototype=new F,P.constructor=iu,P.nk=(function(e,t){return setTimeout((()=>{t.a6()}),e)}),new L().i(iu,`scala.scalajs.js.timers.package$`,{h1:1});var au;function ou(){return au||=new iu,au}function su(){}P=su.prototype=new F,P.constructor=su,P.nu=(function(e){if(e instanceof Q)return e.ft;var t=[];return e.b8(new Y((e=>t.push(e)|0))),t}),new L().i(su,`scala.scalajs.runtime.Compat$`,{ha:1});var cu;function lu(){return cu||=new su,cu}function uu(){}P=uu.prototype=new F,P.constructor=uu,P.b=(function(e){for(var t=e.a.length,n=[],r=0;r!==t;){var i=r;n.push(e.a[i]),r=1+r|0}return n}),new L().i(uu,`scala.scalajs.runtime.package$`,{hc:1});var du;function K(){return du||=new uu,du}function fu(){}P=fu.prototype=new F,P.constructor=fu,P.nl=(function(e){var t=`Illegal command line`+(e.kl()===0?``:e.kl()===1?` after first argument`:` after `+e.kl()+` arguments`)+`: `+e.nK();sd().n1().mJ(t+`
`)}),new L().i(fu,`scala.util.CommandLineParser$`,{hd:1});function pu(e){this.gv=null,this.gv=e}P=pu.prototype=new F,P.constructor=pu,P.B=(function(){return`DynamicVariable(`+this.gv+`)`}),new L().i(pu,`scala.util.DynamicVariable`,{hf:1});function mu(){}P=mu.prototype=new F,P.constructor=mu;function hu(){}hu.prototype=P,P.y=(function(e,t){var n=this.cz(e,t),r=n;return n=r<<13|r>>>19,Math.imul(5,n)-430675100|0}),P.cz=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|r>>>17,n=Math.imul(461845907,n),e^n}),P.aB=(function(e,t){return this.f0(e^t)}),P.f0=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),P.kN=(function(e,t,n){var r=n;return r=this.y(r,t_(`Tuple2`)),r=this.y(r,e),r=this.y(r,t),this.aB(r,2)}),P.h1=(function(e,t,n){var r=e.cB();if(r===0)return n?t:t_(e.cD());var i=t;n||(i=this.y(i,t_(e.cD())));for(var a=0;a<r;)i=this.y(i,G().J(e.cC(a))),a=1+a|0;return this.aB(i,r)}),P.h5=(function(e,t){for(var n=0,r=0,i=0,a=1,o=e.j();o.k();){var s=o.i(),c=G().J(s);n=n+c|0,r^=c,a=Math.imul(a,1|c),i=1+i|0}var l=t;return l=this.y(l,n),l=this.y(l,r),l=this.cz(l,a),this.aB(l,i)}),P.n0=(function(e,t){var n=e.j(),r=t;if(!n.k())return this.aB(r,0);var i=n.i();if(!n.k())return this.aB(this.y(r,G().J(i)),1);var a=n.i(),o=G().J(i);r=this.y(r,o);for(var s=r,c=G().J(a),l=c-o|0,u=2;n.k();){r=this.y(r,c);var d=G().J(n.i());if(l!==(d-c|0)||l===0){for(r=this.y(r,d),u=1+u|0;n.k();)r=this.y(r,G().J(n.i())),u=1+u|0;return this.aB(r,u)}c=d,u=1+u|0}return this.f0(this.y(this.y(s,l),c))}),P.aA=(function(e,t){var n=t,r=wc().bt(e);switch(r){case 0:return this.aB(n,0);case 1:return this.aB(this.y(n,G().J(tu().dG(e,0))),1);default:var i=G().J(tu().dG(e,0));n=this.y(n,i);for(var a=n,o=G().J(tu().dG(e,1)),s=o-i|0,c=2;c<r;){n=this.y(n,o);var l=G().J(tu().dG(e,c));if(s!==(l-o|0)||s===0){for(n=this.y(n,l),c=1+c|0;c<r;)n=this.y(n,G().J(tu().dG(e,c))),c=1+c|0;return this.aB(n,r)}o=l,c=1+c|0}return this.f0(this.y(this.y(a,s),o))}}),P.n4=(function(e,t,n,r){return this.f0(this.y(this.y(this.y(r,e),t),n))}),P.mD=(function(e,t){var n=t,r=e.l();switch(r){case 0:return this.aB(n,0);case 1:return this.aB(this.y(n,G().J(e.r(0))),1);default:var i=G().J(e.r(0));n=this.y(n,i);for(var a=n,o=G().J(e.r(1)),s=o-i|0,c=2;c<r;){n=this.y(n,o);var l=G().J(e.r(c));if(s!==(l-o|0)||s===0){for(n=this.y(n,l),c=1+c|0;c<r;)n=this.y(n,G().J(e.r(c))),c=1+c|0;return this.aB(n,r)}o=l,c=1+c|0}return this.f0(this.y(this.y(a,s),o))}}),P.mL=(function(e,t){for(var n=0,r=t,i=0,a=0,o=0,s=0,c=e;!c.e();){var l=c.v(),u=c.p(),d=G().J(l);switch(r=this.y(r,d),i){case 0:s=d,i=1;break;case 1:a=d-o|0,i=2;break;case 2:(a!==(d-o|0)||a===0)&&(i=3)}o=d,n=1+n|0,c=u}return i===2?this.n4(s,a,o,t):this.aB(r,n)});function gu(e){this.dQ=null,this.he=null,this.fO=!1,this.he=e,so(this),this.fO=!1}P=gu.prototype=new F,P.constructor=gu,P.n2=(function(e){this.fO?(fo(e),this.he.a6()):uo(this,e)}),P.mK=(function(){co(this),this.fO=!0}),new L().i(gu,`com.raquo.airstream.ownership.OneTimeOwner`,{cd:1,ce:1});function _u(){}P=_u.prototype=new F,P.constructor=_u,P.lV=(function(e){return e!==null}),P.m2=(function(e){return e?``:null}),P.eR=(function(e){return this.lV(e)}),P.eS=(function(e){return this.m2(!!e)}),new L().i(_u,`com.raquo.laminar.codecs.package$$anon$1`,{cu:1,an:1});function vu(e){if(e===null)throw Nm(new Pm)}P=vu.prototype=new F,P.constructor=vu,P.eS=(function(e){return e}),P.eR=(function(e){return e}),new L().i(vu,`com.raquo.laminar.codecs.package$$anon$2`,{cv:1,an:1});function yu(e){return new qo(e,new cm((e=>e+`px`)))}function bu(e,t,n,r){this.hM=null,this.hO=null,this.hN=null,this.fU=null,this.hM=t,this.hO=n,this.hN=r,this.fU=new xu(r)}P=bu.prototype=new Yo,P.constructor=bu,P.ld=(function(e){return new Id(this,(X().o.lf(),Ko().kq(e,this.hN)))}),new L().i(bu,`com.raquo.laminar.keys.CompositeKey`,{cV:1,W:1});function xu(e){this.fV=null,this.fV=e}P=xu.prototype=new F,P.constructor=xu,P.jW=(function(e){return Ko().kq(e,this.fV)}),P.k0=(function(e){return ol(e,``,this.fV,``)}),P.eR=(function(e){return this.jW(e)}),P.eS=(function(e){return this.k0(e)}),new L().i(xu,`com.raquo.laminar.keys.CompositeKey$CompositeCodec`,{cX:1,an:1});function Su(e){if(e===null)throw Nm(new Pm)}P=Su.prototype=new F,P.constructor=Su,new L().i(Su,`com.raquo.laminar.keys.CompositeKey$CompositeValueMappers$StringValueMapper$`,{cZ:1,cY:1});function Cu(e,t,n){return e.cG=t,e.dR=n,e}function wu(){this.cG=null,this.dR=null}P=wu.prototype=new Yo,P.constructor=wu;function Tu(){}Tu.prototype=P,P.E=(function(e){return new Ld(this,e,new um(((e,t,n)=>{wo().kE(e,t,n)})))}),new L().i(wu,`com.raquo.laminar.keys.HtmlAttr`,{aq:1,W:1});function Eu(e,t,n){this.fX=null,this.fW=null,this.fc=null,this.fd=null,this.fX=e,this.fW=t;var r=n.e()?o_():new s_(n.aC()+`:`+e);this.fc=r.e()?e:r.aC(),this.fd=n.e()?o_():new s_(Qo().mV(n.aC()))}P=Eu.prototype=new Yo,P.constructor=Eu,new L().i(Eu,`com.raquo.laminar.keys.SvgAttr`,{d1:1,W:1});function Du(){}P=Du.prototype=new F,P.constructor=Du,P.c5=(function(e){}),new L().i(Du,`com.raquo.laminar.modifiers.Modifier$$anon$1`,{d7:1,a2:1});function Ou(e,t){if(this.hW=null,this.hW=e,t===null)throw Nm(new Pm)}P=Ou.prototype=new F,P.constructor=Ou,P.c5=(function(e){var t=Wa(),n=(()=>{this.hW.g(e)});if(Wa(),t.bI)n();else{t.bI=!0;try{n()}finally{t.bI=!1,Va(t)}}}),new L().i(Ou,`com.raquo.laminar.modifiers.Modifier$$anon$2`,{d8:1,a2:1});function ku(){}P=ku.prototype=new F,P.constructor=ku,new L().i(ku,`com.raquo.laminar.modifiers.RenderableNode$$anon$1`,{db:1,d9:1});function Au(){}P=Au.prototype=new F,P.constructor=Au,new L().i(Au,`com.raquo.laminar.modifiers.RenderableSeq$collectionSeqRenderable$`,{dd:1,dc:1});var ju;function Mu(){return ju||=new Au,ju}function Nu(e,t){if(this.hX=null,this.hX=e,t===null)throw Nm(new Pm)}P=Nu.prototype=new F,P.constructor=Nu,P.lD=(function(e){return this.hX.g(e)}),new L().i(Nu,`com.raquo.laminar.modifiers.RenderableText$$anon$1`,{dg:1,de:1});function Pu(e){e.jT(new to(new sm((()=>{throw gf(new _f,`Attempting to use owner of unmounted element: `+ol(wo().lU(e.dK(),(wo(),$())),``,` > `,``))}))))}function Fu(e,t,n){return e.g2=t,e}function Iu(){this.g2=null}P=Iu.prototype=new F,P.constructor=Iu;function Lu(){}Lu.prototype=P,P.gW=(function(){return this.g2}),P.fz=(function(e){var t=this.lG();return e.b8(new cm((e=>{e.c5(t)}))),t}),P.lG=(function(){return new Vg(this,wo().lP(this))}),new L().i(Iu,`com.raquo.laminar.tags.HtmlTag`,{aU:1,ax:1});function Ru(e,t){this.i4=null,this.i4=e}P=Ru.prototype=new F,P.constructor=Ru,new L().i(Ru,`com.raquo.laminar.tags.SvgTag`,{dp:1,ax:1});function zu(){}P=zu.prototype=new F,P.constructor=zu,P.eS=(function(e){return e}),P.eR=(function(e){return e}),new L().i(zu,`io.github.nguyenyou.webawesome.laminar.UnionAsStringCodec$$anon$1`,{dF:1,an:1});function Bu(e,t){return e.cI=t,e.e9(),e}function Vu(){this.cI=null,this.cH=null,this.cJ=!1}P=Vu.prototype=new F,P.constructor=Vu;function Hu(){}Hu.prototype=P,P.nr=(function(){return this.cJ||=(this.cH=new zd(this.cI,new Y((e=>void 0)),void 0),!0),this.cH}),P.s=(function(e,t){var n=this.nr().fz(new Q([]));return e.b8(new Y((e=>{e.g(this).c5(n)}))),t.b8(new Y((e=>{e.c5(n)}))),n});function Uu(){this.g3=null,Wu=this,this.g3=Aa(67,`1C]4m6m=c4]4]4]4]4]4]4]4]4]3g4]2m9]2m1Jm1m9s4g5mm6]3]4mm12>mEm1m6m1]3]=]DI]1<m24mIs4g2c4w9];]4]<]3m3m=m3mH]8]2m=mBHm3]4mK3{gggg2:g=m@]13]4E]`)}P=Uu.prototype=new F,P.constructor=Uu,P.lW=(function(e,t){if(e<256)var n=(e-48|0)>>>0<=9?e-48|0:(e-65|0)>>>0<=25?e-55|0:(e-97|0)>>>0<=25?e-87|0:-1;else if((e-65313|0)>>>0<=25)var n=e-65303|0;else if((e-65345|0)>>>0<=25)var n=e-65335|0;else{var r=V().lF(this.g3,e),i=r<0?-2-r|0:r;if(i<0)var n=-1;else var a=e-this.g3.a[i]|0,n=a>9?-1:a}return n<t?n:-1}),new L().i(Uu,`java.lang.Character$`,{dM:1,a:1});var Wu;function Gu(){return Wu||=new Uu,Wu}function Ku(){}P=Ku.prototype=new F,P.constructor=Ku,P.eY=(function(e){throw new e_(`For input string: "`+e+`"`)}),P.km=(function(e,t,n){e===null&&Ju().eY(e);var r=e.length;r===0&&Ju().eY(e);var i=Gu(),a=e.charCodeAt(0),o=a===45,s=o?-1:0,c=(o||a===43)|0;c>=r&&Ju().eY(e);var l=0;for(l=0;c!==r;){var u=i.lW(e.charCodeAt(c),t);(u<0||l>>>0>n>>>0)&&Ju().eY(e),l=Math.imul(l,t)+u|0,c=1+c|0}return l>>>0>(2147483647-s|0)>>>0&&Ju().eY(e),(l^s)-s|0}),P.df=(function(e){var t=e-(1431655765&e>>1)|0,n=(858993459&t)+(858993459&t>>2)|0;return Math.imul(16843009,252645135&(n+(n>>4)|0))>>24}),new L().i(Ku,`java.lang.Integer$`,{dS:1,a:1});var qu;function Ju(){return qu||=new Ku,qu}function Yu(){}P=Yu.prototype=new F,P.constructor=Yu;function Xu(e){return e instanceof Yu||typeof e==`number`||e instanceof Bi}function Zu(e,t,n,r,i){this.dW=null,this.ek=null,this.dX=null,this.dY=0,this.dV=0,this.dW=e,this.ek=t,this.dX=n,this.dY=r,this.dV=i}P=Zu.prototype=new F,P.constructor=Zu,P.t=(function(e){return e instanceof Zu&&this.dX===e.dX&&this.dY===e.dY&&this.dV===e.dV&&this.dW===e.dW&&this.ek===e.ek}),P.B=(function(){var e=``;return this.dW!==`<jscode>`&&(e=``+e+this.dW+`.`),e=``+e+this.ek,this.dX===null?e+=`(Unknown Source)`:(e=e+`(`+this.dX,this.dY>=0&&(e=e+`:`+this.dY,this.dV>=0&&(e=e+`:`+this.dV)),e+=`)`),e}),P.x=(function(){return t_(this.dW)^t_(this.ek)^t_(this.dX)^this.dY^this.dV});var Qu=new L().i(Zu,`java.lang.StackTraceElement`,{b5:1,a:1});function $u(){}P=$u.prototype=new F,P.constructor=$u,P.mW=(function(e,t,n){for(var r=t+n|0,i=``,a=t;a!==r;)i+=``+Ji(e.a[a]),a=1+a|0;return i}),new L().i($u,`java.lang.String$`,{e3:1,a:1});var ed;function td(){return ed||=new $u,ed}function nd(e){}P=nd.prototype=new F,P.constructor=nd,new L().i(nd,`java.lang.Thread`,{b6:1,dX:1});function rd(e,t,n,r,i){return e.iG=t,e.iH=i,i&&e.mf(),e}var id=class extends Error{constructor(){super(),this.iG=null,this.iH=!1,this.iF=null,this.ff=null}eW(){return this.iG}mf(){var e=this instanceof iv?this.bE:this;return this.iF=Object.prototype.toString.call(e)===`[object Error]`?e:Error.captureStackTrace===void 0||Object.isSealed(this)?/* @__PURE__ */ Error():(Error.captureStackTrace(this),this),this}mx(){return this.ff===null&&(this.ff=this.iH?ec().me(this.iF):new(Qu.r()).C(0)),this.ff}B(){var e=Hi(this),t=this.eW();return t===null?e:e+`: `+t}x(){return ua.prototype.x.call(this)}t(e){return ua.prototype.t.call(this,e)}get message(){var e=this.eW();return e===null?``:e}get name(){return Hi(this)}toString(){return this.B()}};function ad(){this.iJ=null,od=this,this.iJ=new pu(oc().iC)}P=ad.prototype=new F,P.constructor=ad,P.n1=(function(){return this.iJ.gv}),new L().i(ad,`scala.Console$`,{el:1,gi:1});var od;function sd(){return od||=new ad,od}function cd(){}P=cd.prototype=new Uc,P.constructor=cd;function ld(){}ld.prototype=P,P.nC=(function(e){if(e===null)return null;if(e.a.length===0){var t=V_();return dy(),t.ji}return new ax(e)});function ud(){}P=ud.prototype=new F,P.constructor=ud,new L().i(ud,`scala.collection.immutable.LazyList$Uninitialized$`,{fc:1,a:1});var dd;function fd(){return dd||=new ud,dd}function pd(){}P=pd.prototype=new kl,P.constructor=pd;function md(){}md.prototype=P;function hd(e,t){if(t===e)e.aT(pg().kc(t));else for(var n=t.j();n.k();)e.aN(n.i());return e}function gd(){}P=gd.prototype=new F,P.constructor=gd;function _d(){}_d.prototype=P,P.B=(function(){return`<function0>`});function vd(){}P=vd.prototype=new F,P.constructor=vd;function yd(){}yd.prototype=P,P.B=(function(){return`<function1>`});function bd(){}P=bd.prototype=new F,P.constructor=bd;function xd(){}xd.prototype=P,P.B=(function(){return`<function2>`});function Sd(){}P=Sd.prototype=new F,P.constructor=Sd;function Cd(){}Cd.prototype=P,P.B=(function(){return`<function3>`});function wd(e){this.fr=!1,this.fr=e}P=wd.prototype=new F,P.constructor=wd,P.B=(function(){return``+this.fr}),new L().i(wd,`scala.runtime.BooleanRef`,{gM:1,a:1});function Td(e){this.dC=0,this.dC=e}P=Td.prototype=new F,P.constructor=Td,P.B=(function(){return``+this.dC}),new L().i(Td,`scala.runtime.IntRef`,{gO:1,a:1});function Ed(e){this.fs=null,this.fs=e}P=Ed.prototype=new F,P.constructor=Ed,P.B=(function(){return``+this.fs}),new L().i(Ed,`scala.runtime.ObjectRef`,{gR:1,a:1});function Dd(){this.ac=0,this.dc=0,this.jy=0,this.gw=0,Od=this,this.ac=t_(`Seq`),this.dc=t_(`Map`),this.jy=t_(`Set`),this.gw=this.h5($(),this.dc)}P=Dd.prototype=new hu,P.constructor=Dd,P.bX=(function(e,t){return this.kN(G().J(e),G().J(t),-889275714)}),P.kD=(function(e){return Ay(e)?this.mD(e,this.ac):e instanceof Jb?this.mL(e,this.ac):this.n0(e,this.ac)}),P.mS=(function(e){if(e.e())return this.gw;var t=new kd,n=this.dc;return e.dH(t),n=this.y(n,t.fu),n=this.y(n,t.fv),n=this.cz(n,t.fw),this.aB(n,t.fx)}),new L().i(Dd,`scala.util.hashing.MurmurHash3$`,{hh:1,hg:1});var Od;function q(){return Od||=new Dd,Od}function kd(){this.fu=0,this.fv=0,this.fx=0,this.fw=0,this.fu=0,this.fv=0,this.fx=0,this.fw=1}P=kd.prototype=new F,P.constructor=kd,P.B=(function(){return`<function2>`}),P.lC=(function(e,t){var n=q().bX(e,t);this.fu=this.fu+n|0,this.fv^=n,this.fw=Math.imul(this.fw,1|n),this.fx=1+this.fx|0}),P.cu=(function(e,t){this.lC(e,t)}),new L().i(kd,`scala.util.hashing.MurmurHash3$accum$1`,{hi:1,az:1});var Ad=class extends id{};function jd(){this.fL=null,this.h7=null,this.h8=null,Md=this,this.fL=pg().jN(tu().dp(new(H.r()).C([]))),this.h7=new cm((e=>{try{console.error(this.mt(e)+`
`+this.mw(e,`
`))}catch(e){var t=e instanceof id?e:new iv(e);console.error(`Error in AirstreamError.consoleErrorCallback:`),console.error(t)}})),this.h8=new cm((e=>{console.warn(`Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.`);var t=e;throw t instanceof iv?t.bE:t})),this.n5(this.h7)}P=jd.prototype=new F,P.constructor=jd,P.mt=(function(e){try{var t=e.eW()}catch{var t=`(Unable to get the message for this error - exception occurred in its getMessage)`}return Vi(e).gQ()+`: `+t}),P.mw=(function(e,t){try{return ol(Sf().nC(e.mx()),``,t,``)}catch{return`(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)`}}),P.n5=(function(e){this.fL.aN(e)}),P.f1=(function(e){for(var t=this.fL.j();t.k();){var n=t.i();try{n.g(e)}catch(e){var r=e instanceof id?e:new iv(e),i=this.h8;if(n===null?i===null:n.t(i))throw r instanceof iv?r.bE:r;console.warn(`Error processing an unhandled error callback:`),ou().nk(0,new sm((e=>(()=>{throw e instanceof iv?e.bE:e}))(r)))}}}),new L().i(jd,`com.raquo.airstream.core.AirstreamError$`,{c0:1,gg:1,gh:1});var Md;function Nd(){return Md||=new jd,Md}function J(e,t,n){return new Sp(n.lD(t))}function Pd(e,t,n,r){return new Ou(new cm((e=>{(Oo(),new To(t,null,null)).b8(new cm((e=>(t=>{n.g(t).c5(e)}))(e)))})),ns())}function Fd(e,t,n){return new Ou(new cm((e=>{(Oo(),new To(t,null,null)).b8(new cm((e=>(t=>{us().eF(e,t,void 0)}))(e)))})),ns())}function Id(e,t){this.hS=null,this.fY=null,this.hS=e,this.fY=t}P=Id.prototype=new F,P.constructor=Id,P.c5=(function(e){this.fY.e()||mm(e,this.hS,null,this.fY,$())}),new L().i(Id,`com.raquo.laminar.modifiers.CompositeKeySetter`,{d4:1,a2:1,aR:1});function Ld(e,t,n){this.hU=null,this.hV=null,this.hT=null,this.hU=e,this.hV=t,this.hT=n}P=Ld.prototype=new F,P.constructor=Ld,P.c5=(function(e){this.hT.lB(e,this.hU,this.hV)}),new L().i(Ld,`com.raquo.laminar.modifiers.KeySetter`,{d5:1,a2:1,aR:1});function Rd(e,t){if(this.g0=null,this.hZ=null,this.i0=null,this.hZ=t,Pu(this),e===null)throw gf(new _f,`Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load`);if(!wo().mI(e,document))throw gf(new _f,`Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering`);this.i0=e,this.mU()}P=Rd.prototype=new F,P.constructor=Rd,P.fD=(function(){return this.g0}),P.jT=(function(e){this.g0=e}),P.mU=(function(){return this.g0.jA(),us().eF(this,this.hZ,void 0)}),P.dK=(function(){return this.i0}),new L().i(Rd,`com.raquo.laminar.nodes.RootNode`,{dk:1,aw:1,aT:1});function zd(e,t,n){this.g2=null,this.i3=null,this.i3=e,Fu(this,e,!1)}P=zd.prototype=new Lu,P.constructor=zd,P.gW=(function(){return this.i3}),new L().i(zd,`com.raquo.laminar.tags.CustomHtmlTag`,{dn:1,aU:1,ax:1});function Bd(){this.cI=null,this.cH=null,this.cJ=!1,Bu(this,`wa-breadcrumb`)}P=Bd.prototype=new Hu,P.constructor=Bd,P.e9=(function(){return Zt}),new L().i(Bd,`io.github.nguyenyou.webawesome.laminar.Breadcrumb$`,{dt:1,ad:1,ac:1});var Vd;function Hd(){return Vd||=new Bd,Vd}function Ud(){this.cI=null,this.cH=null,this.cJ=!1,this.i7=null,this.i8=!1,Bu(this,`wa-breadcrumb-item`)}P=Ud.prototype=new Hu,P.constructor=Ud,P.fF=(function(){return this.i8||=(this.i7=(X(),Cu(new wu,`href`,Fo().dt)),!0),this.i7}),P.e9=(function(){return st}),new L().i(Ud,`io.github.nguyenyou.webawesome.laminar.BreadcrumbItem$`,{dv:1,ad:1,ac:1});var Wd;function Gd(){return Wd||=new Ud,Wd}function Kd(){this.cI=null,this.cH=null,this.cJ=!1,this.id=null,this.ie=!1,this.ii=null,this.ij=!1,this.ig=null,this.ih=!1,Bu(this,`wa-button`)}P=Kd.prototype=new Hu,P.constructor=Kd,P.jH=(function(){return this.ie||=(this.id=rf(),!0),this.id}),P.kH=(function(){return this.ij||=(this.ii=Zd(),!0),this.ii}),P.ku=(function(){return this.ih||=(this.ig=(X(),Cu(new wu,`pill`,Fo().fS)),!0),this.ig}),P.e9=(function(){return xn}),new L().i(Kd,`io.github.nguyenyou.webawesome.laminar.Button$`,{dx:1,ad:1,ac:1});var qd;function Jd(){return qd||=new Kd,qd}function Yd(){this.cG=null,this.dR=null,this.ik=null,this.il=!1,Cu(this,`size`,new zu)}P=Yd.prototype=new Tu,P.constructor=Yd,P.kI=(function(){return this.il||=(this.ik=Zd().E(`small`),!0),this.ik}),new L().i(Yd,`io.github.nguyenyou.webawesome.laminar.CommonKeys$ComponentSize$`,{dy:1,aq:1,W:1});var Xd;function Zd(){return Xd||=new Yd,Xd}function Qd(){this.cG=null,this.dR=null,Cu(this,`type`,new zu)}P=Qd.prototype=new Tu,P.constructor=Qd,new L().i(Qd,`io.github.nguyenyou.webawesome.laminar.CommonKeys$DropdownItemElementType$`,{dz:1,aq:1,W:1});var $d;function ef(){return $d||=new Qd,$d}function tf(){this.cG=null,this.dR=null,this.im=null,this.io=!1,Cu(this,`appearance`,new zu)}P=tf.prototype=new Tu,P.constructor=tf,P.k8=(function(){return this.io||=(this.im=rf().E(`filled`),!0),this.im}),new L().i(tf,`io.github.nguyenyou.webawesome.laminar.CommonKeys$ExtendedAppearance$`,{dA:1,aq:1,W:1});var nf;function rf(){return nf||=new tf,nf}function af(){this.cI=null,this.cH=null,this.cJ=!1,Bu(this,`wa-dropdown`)}P=af.prototype=new Hu,P.constructor=af,P.e9=(function(){return Li}),new L().i(af,`io.github.nguyenyou.webawesome.laminar.Dropdown$`,{dB:1,ad:1,ac:1});var of;function sf(){return of||=new af,of}function cf(){this.cI=null,this.cH=null,this.cJ=!1,this.it=null,this.iu=!1,this.ir=null,this.is=!1,Bu(this,`wa-dropdown-item`)}P=cf.prototype=new Hu,P.constructor=cf,P.ef=(function(){return this.iu||=(this.it=ef(),!0),this.it}),P.jQ=(function(){return this.is||=(this.ir=(X(),Cu(new wu,`checked`,Fo().fS)),!0),this.ir}),P.e9=(function(){return Tn}),new L().i(cf,`io.github.nguyenyou.webawesome.laminar.DropdownItem$`,{dD:1,ad:1,ac:1});var lf;function uf(){return lf||=new cf,lf}function df(){this.cI=null,this.cH=null,this.cJ=!1,this.ix=null,this.iy=!1,this.iz=null,this.iA=!1,this.iv=null,this.iw=!1,Bu(this,`wa-icon`)}P=df.prototype=new Hu,P.constructor=df,P.dJ=(function(){return this.iy||=(this.ix=(X(),Cu(new wu,`name`,Fo().dt)),!0),this.ix}),P.f3=(function(){return this.iA||=(this.iz=(X(),Cu(new wu,`variant`,Fo().dt)),!0),this.iz}),P.ko=(function(){return this.iw||=(this.iv=(X(),Cu(new wu,`label`,Fo().dt)),!0),this.iv}),P.e9=(function(){return Ri}),new L().i(df,`io.github.nguyenyou.webawesome.laminar.Icon$`,{dE:1,ad:1,ac:1});var ff;function pf(){return ff||=new df,ff}function mf(e){if(e.a8.Z)return e.a8.Q().gQ()+`[]`;for(var t=e.a8.N,n=t.length-1|0;n>=0&&t.charCodeAt(n)===36;)n=n-1|0;if(n>=0&&(t.charCodeAt(n)-48|0)>>>0<=9){for(n=n-1|0;n>=0&&(t.charCodeAt(n)-48|0)>>>0<=9;)n=n-1|0;for(;n>=0&&t.charCodeAt(n)===36;)n=n-1|0}for(;;){if(n>=0)var r=n,i=t.charCodeAt(r),a=i!==36&&i!==46;else var a=!1;if(a)n=n-1|0;else break}var o=1+n|0;return t.substring(o)}function hf(e){this.g4=null,this.a8=e}P=hf.prototype=new F,P.constructor=hf,P.B=(function(){return(this.a8.Y?`interface `:this.a8.X?``:`class `)+this.a8.N}),P.gQ=(function(){return this.g4===null&&(this.g4=mf(this)),this.g4}),new L().i(hf,`java.lang.Class`,{dN:1,a:1,X:1});function gf(e,t){return rd(e,t,null,!0,!0),e}var _f=class extends id{};new L().i(_f,`java.lang.Exception`,{H:1,B:1,a:1});function vf(){}P=vf.prototype=new F,P.constructor=vf;function yf(){}yf.prototype=P;function bf(){this.kZ=null,xf=this,zh(),this.kZ=Xf()}P=bf.prototype=new ld,P.constructor=bf,P.nb=(function(e){if(!e)throw wm(new Em,`requirement failed`)}),new L().i(bf,`scala.Predef$`,{eu:1,en:1,eo:1});var xf;function Sf(){return xf||=new bf,xf}function Cf(e,t){switch(t){case 0:return e.aX;case 1:return e.aP;default:throw Om(new Am,t+` is out of bounds (min 0, max 1)`)}}function wf(e,t){return e.eo=t,e}function Tf(){this.eo=null}P=Tf.prototype=new F,P.constructor=Tf;function Ef(){}Ef.prototype=P,P.ar=(function(e){return this.eo.gI(e,Fv())}),P.aO=(function(){return this.eo.fH(Fv())}),P.cv=(function(e){return this.eo.gI(e,Fv())});function Df(e,t){return e.fi=t,e}function Of(){this.fi=null}P=Of.prototype=new F,P.constructor=Of;function kf(){}kf.prototype=P,P.ar=(function(e){return this.fi.ar(e)}),P.aO=(function(){return this.fi.aO()});function Af(e,t){if(t<0)return 1;var n=e.u();if(n>=0)return n===t?0:n<t?-1:1;for(var r=0,i=e.j();i.k();){if(r===t)return 1;i.i(),r=1+r|0}return r-t|0}function jf(e,t){return new th(e).gB(t)}function Mf(e,t,n){var r=t>0?t:0,i=n<0?-1:n<=r?0:n-r|0;return i===0?If().P:new ih(e,r,i)}function Nf(e,t){for(var n=t.j();e.k();)if(!n.k()||!W().n(e.i(),n.i()))return!1;return!n.k()}function Pf(){this.P=null,Ff=this,this.P=new Ym}P=Pf.prototype=new F,P.constructor=Pf,P.aO=(function(){return new h_}),P.ar=(function(e){return e.j()}),new L().i(Pf,`scala.collection.Iterator$`,{eG:1,a:1,I:1});var Ff;function If(){return Ff||=new Pf,Ff}function Lf(e,t){return e.gd=t,e}function Rf(){this.gd=null}P=Rf.prototype=new F,P.constructor=Rf;function zf(){}zf.prototype=P,P.ar=(function(e){return this.gd.ar(e)});function Bf(){}P=Bf.prototype=new F,P.constructor=Bf,P.kd=(function(e){return Z_(e)?e:Jm(e)?new by(new tp((e=>(()=>e.j()))(e))):Py(new Fy,Z().gK(e))}),P.aO=(function(){return new rm(new Y((e=>this.kd(e))),(lg(),new ug))}),P.ar=(function(e){return this.kd(e)}),new L().i(Bf,`scala.collection.View$`,{eU:1,a:1,I:1});var Vf;function Hf(){return Vf||=new Bf,Vf}function Uf(e,t,n,r,i,a){this.Q=0,this.a9=0,this.ad=null,this.bd=null,this.aF=0,this.b3=0,this.Q=e,this.a9=t,this.ad=n,this.bd=r,this.aF=i,this.b3=a}P=Uf.prototype=new md,P.constructor=Uf,P.aE=(function(){return this.aF}),P.dh=(function(){return this.b3}),P.dj=(function(e){return this.ad.a[e<<1]}),P.cy=(function(e){return this.ad.a[1+(e<<1)|0]}),P.kj=(function(e){return new Gm(this.ad.a[e<<1],this.ad.a[1+(e<<1)|0])}),P.eV=(function(e){return this.bd.a[e]}),P.cx=(function(e){return this.ad.a[(this.ad.a.length-1|0)-e|0]}),P.gz=(function(e,t,n,r){var i=Nl().dI(n,r),a=Nl().dg(i);if((this.Q&a)!==0){var o=Nl().c8(this.Q,i,a);if(W().n(e,this.dj(o)))return this.cy(o);throw new Rm(`key not found: `+e)}if((this.a9&a)!==0)return this.cx(Nl().c8(this.a9,i,a)).gz(e,t,n,5+r|0);throw new Rm(`key not found: `+e)}),P.gO=(function(e,t,n,r,i){var a=Nl().dI(n,r),o=Nl().dg(a);if((this.Q&o)!==0){var s=Nl().c8(this.Q,a,o);return W().n(e,this.dj(s))?this.cy(s):i.a6()}return(this.a9&o)===0?i.a6():this.cx(Nl().c8(this.a9,a,o)).gO(e,t,n,5+r|0,i)}),P.gC=(function(e,t,n,r){var i=Nl().dI(n,r),a=Nl().dg(i);if((this.Q&a)!==0){var o=Nl().c8(this.Q,i,a);return this.bd.a[o]===t&&W().n(e,this.dj(o))}return(this.a9&a)!==0&&this.cx(Nl().c8(this.a9,i,a)).gC(e,t,n,5+r|0)}),P.kO=(function(e,t,n,r,i,a){var o=Nl().dI(r,i),s=Nl().dg(o);if((this.Q&s)!==0){var c=Nl().c8(this.Q,o,s),l=this.dj(c),u=this.eV(c);if(u===n&&W().n(l,e)){if(a){var d=this.cy(c);return Object.is(l,e)&&Object.is(d,t)?this:this.lO(s,e,t)}return this}var f=this.cy(c),p=tl().bS(u);return this.lM(s,p,this.gV(l,f,u,p,e,t,n,r,5+i|0))}if((this.a9&s)!==0){var m=Nl().c8(this.a9,o,s),h=this.cx(m),g=h.kP(e,t,n,r,5+i|0,a);return g===h?this:this.lN(s,h,g)}return this.lL(s,e,n,r,t)}),P.gV=(function(e,t,n,r,i,a,o,s,c){if(c>=32)return new Wf(n,r,Qh().gL(new Q([new Gm(e,t),new Gm(i,a)])));var l=Nl().dI(r,c),u=Nl().dI(s,c),d=r+s|0;if(l!==u){var f=Nl().dg(l)|Nl().dg(u);if(l<u){for(var p=new Q([e,t,i,a]),m=new I(p.l()),h=d_(new p_,new Vy(p)),g=0;h.b1>0;)m.a[g]=h.i(),g=1+g|0;return new Uf(f,0,m,new ga(new Int32Array([n,o])),2,d)}for(var _=new Q([i,a,e,t]),v=new I(_.l()),y=d_(new p_,new Vy(_)),b=0;y.b1>0;)v.a[b]=y.i(),b=1+b|0;return new Uf(f,0,v,new ga(new Int32Array([o,n])),2,d)}for(var x=Nl().dg(l),S=this.gV(e,t,n,r,i,a,o,s,5+c|0),C=new Q([S]),w=new I(C.l()),T=d_(new p_,new Vy(C)),ee=0;T.b1>0;)w.a[ee]=T.i(),ee=1+ee|0;return new Uf(0,x,w,Bc().ga,S.aE(),S.dh())}),P.gR=(function(){return this.a9!==0}),P.gX=(function(){return Ju().df(this.a9)}),P.fE=(function(){return this.Q!==0}),P.gZ=(function(){return Ju().df(this.Q)}),P.eQ=(function(e){return Ju().df(this.Q&(e-1|0))}),P.gY=(function(e){return Ju().df(this.a9&(e-1|0))}),P.lO=(function(e,t,n){var r=this.eQ(e)<<1,i=this.ad,a=new I(i.a.length),o=i.a.length;return i.q(0,a,0,o),a.a[1+r|0]=n,new Uf(this.Q,this.a9,a,this.bd,this.aF,this.b3)}),P.lN=(function(e,t,n){var r=(this.ad.a.length-1|0)-this.gY(e)|0,i=this.ad,a=new I(i.a.length),o=i.a.length;return i.q(0,a,0,o),a.a[r]=n,new Uf(this.Q,this.a9,a,this.bd,(this.aF-t.aE()|0)+n.aE()|0,(this.b3-t.dh()|0)+n.dh()|0)}),P.lL=(function(e,t,n,r,i){var a=this.eQ(e),o=a<<1,s=this.ad,c=new I(2+s.a.length|0);s.q(0,c,0,o),c.a[o]=t,c.a[1+o|0]=i;var l=2+o|0,u=s.a.length-o|0;s.q(o,c,l,u);var d=this.mF(this.bd,a,n);return new Uf(this.Q|e,this.a9,c,d,1+this.aF|0,this.b3+r|0)}),P.mT=(function(e,t,n){var r=this.eQ(e),i=r<<1,a=(this.ad.a.length-2|0)-this.gY(e)|0,o=this.ad,s=new I(o.a.length-1|0);o.q(0,s,0,i);var c=2+i|0,l=a-i|0;o.q(c,s,i,l),s.a[a]=n;var u=2+a|0,d=1+a|0,f=(o.a.length-a|0)-2|0;o.q(u,s,d,f);var p=this.kw(this.bd,r);return this.Q^=e,this.a9|=e,this.ad=s,this.bd=p,this.aF=(this.aF-1|0)+n.aE()|0,this.b3=(this.b3-t|0)+n.dh()|0,this}),P.lM=(function(e,t,n){var r=this.eQ(e),i=r<<1,a=(this.ad.a.length-2|0)-this.gY(e)|0,o=this.ad,s=new I(o.a.length-1|0);o.q(0,s,0,i);var c=2+i|0,l=a-i|0;o.q(c,s,i,l),s.a[a]=n;var u=2+a|0,d=1+a|0,f=(o.a.length-a|0)-2|0;o.q(u,s,d,f);var p=this.kw(this.bd,r);return new Uf(this.Q^e,this.a9|e,s,p,(this.aF-1|0)+n.aE()|0,(this.b3-t|0)+n.dh()|0)}),P.dH=(function(e){for(var t=Ju().df(this.Q),n=0;n<t;)e.cu(this.dj(n),this.cy(n)),n=1+n|0;for(var r=Ju().df(this.a9),i=0;i<r;)this.cx(i).dH(e),i=1+i|0}),P.t=(function(e){if(e instanceof Uf){if(this===e)return!0;if(this.b3===e.b3&&this.a9===e.a9&&this.Q===e.Q&&this.aF===e.aF&&V().gE(this.bd,e.bd)){var t=this.ad,n=e.ad,r=this.ad.a.length;if(t===n)return!0;for(var i=!0,a=0;i&&a<r;)i=W().n(t.a[a],n.a[a]),a=1+a|0;return i}return!1}return!1}),P.x=(function(){throw new Im(`Trie nodes do not support hashing.`)}),P.B=(function(){var e=$i(this);return Hi(this)+`@`+(e>>>0).toString(16)}),P.jU=(function(){for(var e=this.ad.d(),t=e.a.length,n=Ju().df(this.Q)<<1;n<t;)e.a[n]=e.a[n].jV(),n=1+n|0;return new Uf(this.Q,this.a9,e,this.bd.d(),this.aF,this.b3)}),P.gN=(function(e){return this.cx(e)}),P.kP=(function(e,t,n,r,i,a){return this.kO(e,t,n,r,i,a)}),P.jV=(function(){return this.jU()}),new L().i(Uf,`scala.collection.immutable.BitmapIndexedMapNode`,{bv:1,bE:1,aI:1});function Wf(e,t,n){this.gg=0,this.cU=0,this.aa=null,this.gg=e,this.cU=t,this.aa=n,Sf().nb(this.aa.l()>=2)}P=Wf.prototype=new md,P.constructor=Wf,P.ec=(function(e){for(var t=this.aa.j(),n=0;t.k();){if(W().n(t.i().aX,e))return n;n=1+n|0}return-1}),P.aE=(function(){return this.aa.l()}),P.gz=(function(e,t,n,r){var i=this.mr(e,t,n,r);return i.e()?If().P.i():i.aC()}),P.mr=(function(e,t,n,r){if(this.cU===n){var i=this.ec(e);return i>=0?new s_(this.aa.r(i).aP):o_()}return o_()}),P.gO=(function(e,t,n,r,i){if(this.cU===n){var a=this.ec(e);return a===-1?i.a6():this.aa.r(a).aP}return i.a6()}),P.gC=(function(e,t,n,r){return this.cU===n&&this.ec(e)>=0}),P.kP=(function(e,t,n,r,i,a){var o=this.ec(e);return o>=0?a?Object.is(this.aa.r(o).aP,t)?this:new Wf(n,r,this.aa.dm(o,new Gm(e,t))):this:new Wf(n,r,this.aa.de(new Gm(e,t)))}),P.gR=(function(){return!1}),P.gX=(function(){return 0}),P.cx=(function(e){throw Om(new Am,`No sub-nodes present in hash-collision leaf node.`)}),P.fE=(function(){return!0}),P.gZ=(function(){return this.aa.l()}),P.dj=(function(e){return this.aa.r(e).aX}),P.cy=(function(e){return this.aa.r(e).aP}),P.kj=(function(e){return this.aa.r(e)}),P.eV=(function(e){return this.gg}),P.dH=(function(e){this.aa.b8(new Y((t=>{var n=t.aX,r=t.aP;return e.cu(n,r)})))}),P.t=(function(e){if(e instanceof Wf){if(this===e)return!0;if(this.cU===e.cU&&this.aa.l()===e.aa.l()){for(var t=this.aa.j();t.k();){var n=t.i(),r=n.aX,i=n.aP,a=e.ec(r);if(a<0||!W().n(i,e.aa.r(a).aP))return!1}return!0}return!1}return!1}),P.x=(function(){throw new Im(`Trie nodes do not support hashing.`)}),P.B=(function(){var e=$i(this);return Hi(this)+`@`+(e>>>0).toString(16)}),P.dh=(function(){return Math.imul(this.aa.l(),this.cU)}),P.gN=(function(e){return this.cx(e)}),P.jV=(function(){return new Wf(this.gg,this.cU,this.aa)}),new L().i(Wf,`scala.collection.immutable.HashCollisionMapNode`,{bx:1,bE:1,aI:1});function Gf(){this.fn=null,Kf=this,this.fn=new ub(El().j9)}P=Gf.prototype=new F,P.constructor=Gf,P.mm=(function(e){return e instanceof ub?e:e.u()===0?this.fn:new Ph().gy(e).h3()}),P.ar=(function(e){return this.mm(e)}),new L().i(Gf,`scala.collection.immutable.HashMap$`,{f1:1,a:1,aC:1});var Kf;function qf(){return Kf||=new Gf,Kf}function Jf(){}P=Jf.prototype=new F,P.constructor=Jf,P.mo=(function(e){return T_(e)&&e.e()?rb():e instanceof ub||e instanceof ib||e instanceof ab||e instanceof ob||e instanceof sb?e:new Yh().jB(e).kx()}),P.ar=(function(e){return this.mo(e)}),new L().i(Jf,`scala.collection.immutable.Map$`,{fi:1,a:1,aC:1});var Yf;function Xf(){return Yf||=new Jf,Yf}function Zf(e,t,n){var r=t.u();if(r!==-1){var i=r+n|0;e.aV(i<0?0:i)}}function Qf(){}P=Qf.prototype=new F,P.constructor=Qf,P.mp=(function(e){var t=e.u();return xb(new Ob,t>0?qi((1+t|0)/.75):16,.75).jE(e)}),P.aO=(function(){return new mg(16,.75)}),P.ar=(function(e){return this.mp(e)}),new L().i(Qf,`scala.collection.mutable.HashSet$`,{g1:1,a:1,I:1});var $f;function ep(){return $f||=new Qf,$f}function tp(e){this.jp=null,this.jp=e}P=tp.prototype=new _d,P.constructor=tp,P.a6=(function(){return(0,this.jp)()}),new L().i(tp,`scala.runtime.AbstractFunction0.$$Lambda$07eded5776954a9c145e92c329afd52873ad179c`,{gI:1,bU:1,as:1});function Y(e){this.jq=null,this.jq=e}P=Y.prototype=new yd,P.constructor=Y,P.g=(function(e){return(0,this.jq)(e)}),new L().i(Y,`scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919`,{gJ:1,bV:1,f:1});function np(e){this.jr=null,this.jr=e}P=np.prototype=new xd,P.constructor=np,P.cu=(function(e,t){return(0,this.jr)(e,t)}),new L().i(np,`scala.runtime.AbstractFunction2.$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8`,{gK:1,bW:1,az:1});var rp=new L().i(0,`scala.runtime.Nothing$`,{gP:1,B:1,a:1});function ip(){}P=ip.prototype=new F,P.constructor=ip,P.mq=(function(e){return(t=>e.g(t))}),new L().i(ip,`scala.scalajs.js.Any$`,{gW:1,gX:1,gY:1});var ap;function op(){return ap||=new ip,ap}function sp(){}P=sp.prototype=new _d,P.constructor=sp;function cp(){}cp.prototype=P;function lp(){}P=lp.prototype=new yd,P.constructor=lp;function up(){}up.prototype=P;function dp(){}P=dp.prototype=new xd,P.constructor=dp;function fp(){}fp.prototype=P;function pp(){}P=pp.prototype=new Cd,P.constructor=pp;function mp(){}mp.prototype=P;function hp(e,t,n,r){if(this.h9=null,r===null)throw Nm(new Pm);this.h9=void 0}P=hp.prototype=new F,P.constructor=hp,P.B=(function(){return Ma(this)}),new L().i(hp,`com.raquo.airstream.core.Observer$$anon$8`,{c4:1,c5:1,c1:1,c2:1});function gp(e){if(this.hl=null,this.hm=!1,this.kR=null,e===null)throw Nm(new Pm);Ro(this)}P=gp.prototype=new F,P.constructor=gp,P.nq=(function(){return this.hm||=(this.hl=new Ru(`svg`,!1),!0),this.hl}),new L().i(gp,`com.raquo.laminar.api.Laminar$svg$`,{co:1,cO:1,cx:1,cz:1});function _p(){this.o=null,vp=this,this.o=new Ly}P=_p.prototype=new F,P.constructor=_p,new L().i(_p,`com.raquo.laminar.api.package$`,{cr:1,aP:1,aQ:1,aO:1});var vp;function X(){return vp||=new _p,vp}function yp(e,t,n){return e.dS=t,e.dT=n,e}function bp(){this.dS=null,this.dT=null}P=bp.prototype=new Yo,P.constructor=bp;function xp(){}xp.prototype=P,P.E=(function(e){return new Ld(this,Gi(e),new um(((e,t,n)=>{wo().kF(e,t,n)})))});function Sp(e){this.i2=null,this.g1=null,this.i2=o_(),this.g1=wo().lR(e)}P=Sp.prototype=new F,P.constructor=Sp,P.kG=(function(e){this.i2=e}),P.kQ=(function(e){}),P.c5=(function(e){us().eF(e,this,void 0)}),P.nt=(function(){return this.g1.data}),P.dK=(function(){return this.g1}),new L().i(Sp,`com.raquo.laminar.nodes.TextNode`,{dm:1,aw:1,a2:1,aS:1});function Cp(){}P=Cp.prototype=new F,P.constructor=Cp;function wp(){}wp.prototype=P;function Tp(e,t){return e===t}function Ep(e){return e?1231:1237}var Dp=new L().i(0,`java.lang.Boolean`,{dK:1,a:1,a0:1,X:1},(e=>typeof e==`boolean`));function Op(e){return e}function kp(e,t){return t instanceof zi&&e===t.c}var Ap=new L().i(0,`java.lang.Character`,{b0:1,a:1,a0:1,X:1},(e=>e instanceof zi));function jp(e,t){return rd(e,t,null,!0,!0),e}var Mp=class extends _f{};new L().i(Mp,`java.lang.RuntimeException`,{P:1,H:1,B:1,a:1});function Np(e){return e.m=``,e}function Pp(e,t){return Np(e),e.m=t,e}function Fp(){this.m=null}P=Fp.prototype=new F,P.constructor=Fp,P.jI=(function(e){var t=td().mW(e,0,e.a.length);return this.m=``+this.m+t,this}),P.B=(function(){return this.m}),P.l=(function(){return this.m.length}),P.jO=(function(e){return this.m.charCodeAt(e)}),new L().i(Fp,`java.lang.StringBuilder`,{e4:1,ay:1,aY:1,a:1});function Ip(){}P=Ip.prototype=new yf,P.constructor=Ip;function Lp(){}Lp.prototype=P;function Rp(){}P=Rp.prototype=new F,P.constructor=Rp,P.B=(function(){return`<function1>`}),P.gA=(function(e){throw new Vm(e)}),P.g=(function(e){this.gA(e)}),new L().i(Rp,`scala.PartialFunction$$anon$1`,{et:1,f:1,j:1,a:1});function zp(){}P=zp.prototype=new F,P.constructor=zp;function Bp(){}Bp.prototype=P,P.u=(function(){return-1}),P.bs=(function(e,t,n){return al(this,e,t,n)}),P.dd=(function(e,t,n,r){return sl(this,e,t,n,r)}),P.j=(function(){return this}),P.gB=(function(e){return jf(this,e)}),P.di=(function(e){return this.f2(e,-1)}),P.f2=(function(e,t){return Mf(this,e,t)}),P.B=(function(){return`<iterator>`});function Vp(){this.gd=null,this.iX=null,this.iY=null,Lf(this,Xf()),Hp=this,this.iX=la(new ua),this.iY=new tp((()=>this.iX))}P=Vp.prototype=new zf,P.constructor=Vp,new L().i(Vp,`scala.collection.Map$`,{eO:1,eP:1,a:1,aC:1});var Hp;function Up(){return Hp||=new Vp,Hp}function Wp(e,t){return e.dZ=t,e}function Gp(){this.dZ=null}P=Gp.prototype=new F,P.constructor=Gp;function Kp(){}Kp.prototype=P,P.jN=(function(e){return this.dZ.cv(e)}),P.kc=(function(e){return this.dZ.ar(e)}),P.aO=(function(){return this.dZ.aO()}),P.cv=(function(e){return this.jN(e)}),P.ar=(function(e){return this.kc(e)});function qp(e){return e.c7(new Y((e=>e)))}function Jp(e,t){return e.eT(new xy(e,t))}function Yp(e){return e.bl(0)===0}function Xp(e,t){var n=e.u();if(n!==-1){var r=t.u();if(r!==-1){if(n!==r)return!1;if(n===0)return!0}}return Nf(e.j(),t)}function Zp(e,t){for(var n=e.b9().aO(),r=e.j();r.k();)n.aN(t.g(r.i()));return n.aU()}function Qp(){this.fi=null,Df(this,zh())}P=Qp.prototype=new kf,P.constructor=Qp,P.mn=(function(e){return T_(e)?e:Of.prototype.ar.call(this,e)}),P.ar=(function(e){return this.mn(e)}),new L().i(Qp,`scala.collection.immutable.Iterable$`,{f6:1,eF:1,a:1,I:1});var $p;function em(){return $p||=new Qp,$p}function tm(){this.L=null,this.j5=null,this.j6=!1,nm=this,this.L=db(new vb,xl())}P=tm.prototype=new F,P.constructor=tm,P.cv=(function(e){return this.gK(e)}),P.kz=(function(){return this.j6||=(this.j5=new Cl,!0),this.j5}),P.nf=(function(e,t){return db(new vb,new tp(((e,t)=>(()=>{for(var n=e.fs,r=t.dC;r>0&&mb(n)!==Z().L;)n=n.aW(),e.fs=n,r=r-1|0,t.dC=r;return n}))(new Ed(e),new Td(t))))}),P.gK=(function(e){return e instanceof vb?e:e.u()===0?this.L:db(new vb,new tp((()=>this.kA(e.j()))))}),P.kB=(function(e,t){return e.k()?fb(new vb,e.i(),db(new vb,new tp((()=>this.kB(e,t))))):t.a6()}),P.kA=(function(e){return e.k()?fb(new vb,e.i(),db(new vb,new tp((()=>this.kA(e))))):this.L}),P.aO=(function(){return new Fh}),P.ar=(function(e){return this.gK(e)}),new L().i(tm,`scala.collection.immutable.LazyList$`,{f7:1,a:1,I:1,Z:1});var nm;function Z(){return nm||=new tm,nm}function rm(e,t){if(this.jj=null,this.ez=null,this.jj=e,t===null)throw Nm(new Pm);this.ez=t}P=rm.prototype=new F,P.constructor=rm,P.lt=(function(e){return this.ez.aN(e),this}),P.lk=(function(e){return this.ez.aT(e),this}),P.aV=(function(e){this.ez.aV(e)}),P.aU=(function(){return this.jj.g(this.ez.aU())}),P.aN=(function(e){return this.lt(e)}),P.aT=(function(e){return this.lk(e)}),new L().i(rm,`scala.collection.mutable.Builder$$anon$1`,{fY:1,D:1,F:1,K:1});function im(e,t){return e.d8=t,e}function am(){this.d8=null}P=am.prototype=new F,P.constructor=am;function om(){}om.prototype=P,P.aV=(function(e){}),P.lu=(function(e){return this.d8.aN(e),this}),P.ll=(function(e){return this.d8.aT(e),this}),P.aU=(function(){return this.d8}),P.aN=(function(e){return this.lu(e)}),P.aT=(function(e){return this.ll(e)}),new L().i(am,`scala.collection.mutable.GrowableBuilder`,{aL:1,D:1,F:1,K:1});function sm(e){this.ju=null,this.ju=e}P=sm.prototype=new cp,P.constructor=sm,P.a6=(function(){return(0,this.ju)()}),new L().i(sm,`scala.scalajs.runtime.AnonFunction0.$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d`,{h3:1,h2:1,bU:1,as:1});function cm(e){this.jv=null,this.jv=e}P=cm.prototype=new up,P.constructor=cm,P.g=(function(e){return(0,this.jv)(e)}),new L().i(cm,`scala.scalajs.runtime.AnonFunction1.$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1`,{h5:1,h4:1,bV:1,f:1});function lm(e){this.jw=null,this.jw=e}P=lm.prototype=new fp,P.constructor=lm,P.cu=(function(e,t){return(0,this.jw)(e,t)}),new L().i(lm,`scala.scalajs.runtime.AnonFunction2.$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7`,{h7:1,h6:1,bW:1,az:1});function um(e){this.jx=null,this.jx=e}P=um.prototype=new mp,P.constructor=um,P.lB=(function(e,t,n){return(0,this.jx)(e,t,n)}),new L().i(um,`scala.scalajs.runtime.AnonFunction3.$$Lambda$73f37e31ba038fe839c174212837da323f140c96`,{h9:1,h8:1,gL:1,em:1});function dm(e,t){this.fb=null,this.fT=null,this.fb=e,this.fT=t}P=dm.prototype=new F,P.constructor=dm,P.c5=(function(e){var t=this.fT;t!==void 0&&t.kt(e,this.fb),us().eF(e,this.fb,void 0)}),P.nz=(function(e){return new dm(this.fb,e.lA(this.fT))});var fm=new L().i(dm,`com.raquo.laminar.inserters.StaticChildInserter`,{cS:1,a2:1,cQ:1,cU:1,cP:1});function pm(e){e.fZ=new ho(new sm((()=>{e.dU.jA()})),new sm((()=>{e.dU.lS()}))),e.ei=rb()}function mm(e,t,n,r,i){var a=e.ei.dk(t,new sm((()=>$()))),o=(e=>{for(var t=a;!t.e();){var r=t.v(),i=r.aX;if(i===null?e===null:Ui(i,e)){var o=r.aP;if(o===null?n===null:Ui(o,n))var s=n===null;else var s=!0}else var s=!1;if(s)return!0;t=t.p()}return!1}),s=qp(r);_return$1:{for(var c,l=i;;)if(l.e()){var c=$();break}else{var u=l.v(),d=l.p();if(o(u)){l=d;continue}for(var f=l,p=d;;)if(p.e()){var c=f;break _return$1}else{if(!o(p.v())){p=p.p();continue}for(var m=p,h=new fx(f.v(),$()),g=f.p(),_=h;g!==m;){var v=new fx(g.v(),$());_.am=v,_=v,g=g.p()}for(var y=m.p(),b=y;!y.e();)if(!o(y.v()))y=y.p();else{for(;b!==y;){var x=new fx(b.v(),$());_.am=x,_=x,b=b.p()}b=y.p(),y=y.p()}b.e()||(_.am=b);var c=h;break _return$1}}}var S=e.ei.dk(t,new sm((()=>$()))),C=(e=>c.bR(e.aX));_return$3:{for(var w,T=S;;)if(T.e()){var w=$();break}else{var ee=T.v(),te=T.p();if(C(ee)){T=te;continue}for(var ne=T,E=te;;)if(E.e()){var w=ne;break _return$3}else{if(!C(E.v())){E=E.p();continue}for(var re=E,ie=new fx(ne.v(),$()),ae=ne.p(),oe=ie;ae!==re;){var se=new fx(ae.v(),$());oe.am=se,oe=se,ae=ae.p()}for(var D=re.p(),ce=D;!D.e();)if(!C(D.v()))D=D.p();else{for(;ce!==D;){var O=new fx(ce.v(),$());oe.am=O,oe=O,ce=ce.p()}ce=D.p(),D=D.p()}ce.e()||(oe.am=ce);var w=ie;break _return$3}}}var le=(e=>new Gm(e,n));if(s===$())var ue=$();else{for(var de=new fx(le(s.v()),$()),fe=de,pe=s.p();pe!==$();){var me=new fx(le(pe.v()),$());fe.am=me,fe=me,pe=pe.p()}var ue=de}var he=w.jK(ue),ge=t.fU.jW(t.hM.g(e)),_e=(e=>c.bR(e));_return$5:{for(var ve,ye=ge;;)if(ye.e()){var ve=$();break}else{var be=ye.v(),xe=ye.p();if(_e(be)){ye=xe;continue}for(var Se=ye,Ce=xe;;)if(Ce.e()){var ve=Se;break _return$5}else{if(!_e(Ce.v())){Ce=Ce.p();continue}for(var we=Ce,Te=new fx(Se.v(),$()),Ee=Se.p(),De=Te;Ee!==we;){var Oe=new fx(Ee.v(),$());De.am=Oe,De=Oe,Ee=Ee.p()}for(var ke=we.p(),Ae=ke;!ke.e();)if(!_e(ke.v()))ke=ke.p();else{for(;Ae!==ke;){var k=new fx(Ae.v(),$());De.am=k,De=k,Ae=Ae.p()}Ae=ke.p(),ke=ke.p()}Ae.e()||(De.am=Ae);var ve=Te;break _return$5}}}_return$7:{for(var je,Me=s;;)if(Me.e()){var je=$();break}else{var Ne=Me.v(),Pe=Me.p();if(o(Ne)){Me=Pe;continue}for(var Fe=Me,Ie=Pe;;)if(Ie.e()){var je=Fe;break _return$7}else{if(!o(Ie.v())){Ie=Ie.p();continue}for(var Le=Ie,Re=new fx(Fe.v(),$()),ze=Fe.p(),Be=Re;ze!==Le;){var Ve=new fx(ze.v(),$());Be.am=Ve,Be=Ve,ze=ze.p()}for(var He=Le.p(),Ue=He;!He.e();)if(!o(He.v()))He=He.p();else{for(;Ue!==He;){var A=new fx(Ue.v(),$());Be.am=A,Be=A,Ue=Ue.p()}Ue=He.p(),He=He.p()}Ue.e()||(Be.am=Ue);var je=Re;break _return$7}}}var We=ve.jK(je);e.ei=e.ei.dn(t,he),t.hO.cu(e,t.fU.k0(We))}function hm(e,t){_m(e,e.fe,t)&&vm(e,t)}function gm(e,t){var n=e.fe;e.fe=t,_m(e,n,t)||vm(e,t)}function _m(e,t,n){var r=!t.e()&&!t.aC().fD().bn.e(),i=!n.e()&&!n.aC().fD().bn.e();return r&&!i}function vm(e,t){ym(e,t.e()?o_():new s_(t.aC().fD()))}function ym(e,t){if(t.e())e.fZ.lJ();else{var n=t.aC();e.fZ.nh(n)}}function bm(){}P=bm.prototype=new wp,P.constructor=bm;function xm(){}xm.prototype=P;var Sm=class extends Mp{constructor(e){super(),rd(this,e,null,!0,!0)}};new L().i(Sm,`java.lang.ArithmeticException`,{dI:1,P:1,H:1,B:1,a:1});var Cm=new L().i(0,`java.lang.Byte`,{dL:1,a7:1,a:1,a0:1,X:1},(e=>ea(e)));function wm(e,t){return rd(e,t,null,!0,!0),e}function Tm(e){return rd(e,null,null,!0,!0),e}var Em=class extends Mp{};new L().i(Em,`java.lang.IllegalArgumentException`,{b2:1,P:1,H:1,B:1,a:1});var Dm=class extends Mp{constructor(e){super(),rd(this,e,null,!0,!0)}};new L().i(Dm,`java.lang.IllegalStateException`,{dQ:1,P:1,H:1,B:1,a:1});function Om(e,t){return rd(e,t,null,!0,!0),e}function km(e,t){return rd(e,`Index out of range: `+t,null,!0,!0),e}var Am=class extends Mp{};new L().i(Am,`java.lang.IndexOutOfBoundsException`,{b3:1,P:1,H:1,B:1,a:1});function jm(){}P=jm.prototype=new wp,P.constructor=jm,new L().i(jm,`java.lang.JSConsoleBasedPrintStream$DummyOutputStream`,{dU:1,aX:1,aV:1,aZ:1,aW:1});function Mm(e,t){return rd(e,t,null,!0,!0),e}function Nm(e){return rd(e,null,null,!0,!0),e}var Pm=class extends Mp{};new L().i(Pm,`java.lang.NullPointerException`,{dV:1,P:1,H:1,B:1,a:1});var Fm=new L().i(0,`java.lang.Short`,{dZ:1,a7:1,a:1,a0:1,X:1},(e=>ta(e))),Im=class extends Mp{constructor(e){super(),rd(this,e,null,!0,!0)}};new L().i(Im,`java.lang.UnsupportedOperationException`,{e8:1,P:1,H:1,B:1,a:1});var Lm=class extends Mp{constructor(e){super(),rd(this,e,null,!0,!0)}};new L().i(Lm,`java.util.ConcurrentModificationException`,{ec:1,P:1,H:1,B:1,a:1});var Rm=class extends Mp{constructor(e){super(),rd(this,e,null,!0,!0)}};new L().i(Rm,`java.util.NoSuchElementException`,{ed:1,P:1,H:1,B:1,a:1});function zm(){}P=zm.prototype=new Lp,P.constructor=zm,P.g=(function(e){return e}),P.B=(function(){return`generalized constraint`}),new L().i(zm,`scala.$less$colon$less$$anon$1`,{ei:1,ef:1,eg:1,f:1,a:1});function Bm(e){if(!e.iL){if(e.fg===null)var t=`null`;else{var n=tu().lx(e.fg),r=n===null?`of a JS class`:`of class `+n.a8.N;try{var t=e.fg+` (`+r+`)`}catch{var t=`an instance `+r}}e.iK=t,e.iL=!0}return e.iK}var Vm=class extends Mp{constructor(e){super(),this.fg=null,this.iK=null,this.iL=!1,this.fg=e,rd(this,null,null,!0,!0)}eW(){return Bm(this)}};new L().i(Vm,`scala.MatchError`,{ep:1,P:1,H:1,B:1,a:1});function Hm(){}P=Hm.prototype=new F,P.constructor=Hm;function Um(){}Um.prototype=P,P.ed=(function(){return new Wm(this)}),P.e=(function(){return this===o_()}),P.u=(function(){return!this.e()|0}),P.j=(function(){return this.e()?If().P:new Xm(this.aC())});function Wm(e){if(this.el=0,this.iP=0,this.iO=null,e===null)throw Nm(new Pm);this.iO=e,this.el=0,this.iP=e.cB()}P=Wm.prototype=new Bp,P.constructor=Wm,P.k=(function(){return this.el<this.iP}),P.i=(function(){var e=this.iO.cC(this.el);return this.el=1+this.el|0,e}),new L().i(Wm,`scala.Product$$anon$1`,{ev:1,s:1,b:1,c:1,t:1});function Gm(e,t){this.aX=null,this.aP=null,this.aX=e,this.aP=t}P=Gm.prototype=new F,P.constructor=Gm,P.cB=(function(){return 2}),P.cC=(function(e){return Cf(this,e)}),P.B=(function(){return`(`+this.aX+`,`+this.aP+`)`}),P.cD=(function(){return`Tuple2`}),P.ed=(function(){return new jg(this)}),P.x=(function(){return q().h1(this,-116390334,!0)}),P.t=(function(e){return this===e||e instanceof Gm&&W().n(this.aX,e.aX)&&W().n(this.aP,e.aP)}),new L().i(Gm,`scala.Tuple2`,{ba:1,ew:1,a8:1,d:1,a:1});function Km(e){this.eo=null,wf(this,e)}P=Km.prototype=new Ef,P.constructor=Km,new L().i(Km,`scala.collection.ClassTagSeqFactory$AnySeqDelegate`,{eC:1,eB:1,a:1,I:1,Z:1});function qm(e){return ol(e,e.bG()+`(`,`, `,`)`)}function Jm(e){return!!(e&&e.$classData&&e.$classData.n.e)}function Ym(){}P=Ym.prototype=new Bp,P.constructor=Ym,P.k=(function(){return!1}),P.mX=(function(){throw new Rm(`next on empty iterator`)}),P.u=(function(){return 0}),P.i=(function(){this.mX()}),P.f2=(function(e,t){return this}),new L().i(Ym,`scala.collection.Iterator$$anon$19`,{eH:1,s:1,b:1,c:1,t:1});function Xm(e){this.iR=null,this.ep=!1,this.iR=e,this.ep=!1}P=Xm.prototype=new Bp,P.constructor=Xm,P.k=(function(){return!this.ep}),P.i=(function(){return this.ep?If().P.i():(this.ep=!0,this.iR)}),P.f2=(function(e,t){return this.ep||e>0||t===0?If().P:this}),new L().i(Xm,`scala.collection.Iterator$$anon$20`,{eI:1,s:1,b:1,c:1,t:1});function Zm(e,t){if(this.iS=null,this.iU=null,this.fj=!1,this.iT=null,this.gc=null,this.iS=e,t===null)throw Nm(new Pm);this.gc=t,this.iU=Sb(new Ob),this.fj=!1}P=Zm.prototype=new Bp,P.constructor=Zm,P.k=(function(){for(;;)if(this.fj)return!0;else if(this.gc.k()){var e=this.gc.i();if(!this.iU.fy(this.iS.g(e)))continue;return this.iT=e,this.fj=!0,!0}else return!1}),P.i=(function(){return this.k()?(this.fj=!1,this.iT):If().P.i()}),new L().i(Zm,`scala.collection.Iterator$$anon$8`,{eK:1,s:1,b:1,c:1,t:1});function Qm(e,t){if(this.iV=null,this.fk=null,this.iV=e,t===null)throw Nm(new Pm);this.fk=t}P=Qm.prototype=new Bp,P.constructor=Qm,P.u=(function(){return this.fk.u()}),P.k=(function(){return this.fk.k()}),P.i=(function(){return this.iV.g(this.fk.i())}),new L().i(Qm,`scala.collection.Iterator$$anon$9`,{eL:1,s:1,b:1,c:1,t:1});function $m(e){for(;;)if(e.bc instanceof th){var t=e.bc;if(e.bc=t.bc,e.cK=t.cK,t.bw!==null){e.bv===null&&(e.bv=t.bv);var n=t.bv;n===null&&Ql().bV(),n.eq=e.bw,e.bw=t.bw}}else return}function eh(e){for(;;)if(e.bw===null)return e.bc=null,e.bv=null,!1;else{if(e.bc=e.bw.mB(),e.bv===e.bw){var t=e.bv;t===null&&Ql().bV(),e.bv=t.eq}if(e.bw=e.bw.eq,$m(e),e.cK)return!0;if(!(e.bc!==null&&e.bc.k()))continue;return e.cK=!0,!0}}function th(e){this.bc=null,this.bw=null,this.bv=null,this.cK=!1,this.bc=e,this.bw=null,this.bv=null,this.cK=!1}P=th.prototype=new Bp,P.constructor=th,P.k=(function(){return this.cK?!0:this.bc===null?!1:this.bc.k()?(this.cK=!0,!0):eh(this)}),P.i=(function(){if(this.k()){this.cK=!1;var e=this.bc;return e===null&&Ql().bV(),e.i()}return If().P.i()}),P.gB=(function(e){var t=new ll(e,null);if(this.bw===null)this.bw=t,this.bv=t;else{var n=this.bv;n===null&&Ql().bV(),n.eq=t,this.bv=t}return this.bc===null&&(this.bc=If().P),this}),new L().i(th,`scala.collection.Iterator$ConcatIterator`,{bg:1,s:1,b:1,c:1,t:1});function nh(e){for(;e.cf>0;)e.cL.k()?(e.cL.i(),e.cf=e.cf-1|0):e.cf=0}function rh(e,t){if(e.bo<0)return-1;var n=e.bo-t|0;return n<0?0:n}function ih(e,t,n){this.cL=null,this.bo=0,this.cf=0,this.cL=e,this.bo=n,this.cf=t}P=ih.prototype=new Bp,P.constructor=ih,P.u=(function(){var e=this.cL.u();if(e<0)return-1;var t=e-this.cf|0,n=t<0?0:t;if(this.bo<0)return n;var r=this.bo;return r<n?r:n}),P.k=(function(){return nh(this),this.bo!==0&&this.cL.k()}),P.i=(function(){return nh(this),this.bo>0?(this.bo=this.bo-1|0,this.cL.i()):this.bo<0?this.cL.i():If().P.i()}),P.f2=(function(e,t){var n=e>0?e:0;if(t<0)var r=rh(this,n);else if(t<=n)var r=0;else if(this.bo<0)var r=t-n|0;else var i=rh(this,n),a=t-n|0,r=i<a?i:a;var o=this.cf+n|0;return r===0?If().P:o<0?(this.cf=2147483647,this.bo=0,jf(this,new tp((()=>new ih(this.cL,o-2147483647|0,r))))):(this.cf=o,this.bo=r,this)}),new L().i(ih,`scala.collection.Iterator$SliceIterator`,{eN:1,s:1,b:1,c:1,t:1});function ah(e){for(var t=e,n=0;!t.e();)n=1+n|0,t=t.p();return n}function oh(e,t){return t<0?1:lh(e,t,0,e)}function sh(e,t){if(t<0)throw Om(new Am,``+t);var n=e.jZ(t);if(n.e())throw Om(new Am,``+t);return n.v()}function ch(e,t){return jy(t)?uh(e,e,t):Xp(e,t)}function lh(e,t,n,r){for(var i=r,a=n;;)if(a===t)return!i.e()|0;else{if(!i.e()){var o=1+a|0,s=i.p();a=o,i=s;continue}return-1}}function uh(e,t,n){for(var r=n,i=t;;)if(i===r)return!0;else{if(!i.e()&&!r.e()&&W().n(i.v(),r.v())){var a=i.p(),o=r.p();i=a,r=o;continue}return i.e()&&r.e()}}function dh(e){if(this.er=null,e===null)throw Nm(new Pm);this.er=e}P=dh.prototype=new Bp,P.constructor=dh,P.k=(function(){return!this.er.e()}),P.i=(function(){var e=this.er.v();return this.er=this.er.p(),e}),new L().i(dh,`scala.collection.StrictOptimizedLinearSeqOps$$anon$1`,{eR:1,s:1,b:1,c:1,t:1});function fh(e){return e.bp=0,e.es=0,e.be=-1,e}function ph(e){e.ch===null&&(e.ch=new ga(Nl().ey<<1),e.et=new(Al.r()).C(Nl().ey))}function mh(e,t){return fh(e),t.gR()&&gh(e,t),t.fE()&&hh(e,t),e}function hh(e,t){e.dw=t,e.bp=0,e.es=t.gZ()}function gh(e,t){ph(e),e.be=1+e.be|0;var n=e.be<<1,r=1+(e.be<<1)|0;e.et.a[e.be]=t,e.ch.a[n]=0,e.ch.a[r]=t.gX()}function _h(e){e.be=e.be-1|0}function vh(e){for(;e.be>=0;){var t=e.be<<1,n=1+(e.be<<1)|0,r=e.ch.a[t];if(r<e.ch.a[n]){var i=e.ch;i.a[t]=1+i.a[t]|0;var a=e.et.a[e.be].gN(r);if(a.gR()&&gh(e,a),a.fE())return hh(e,a),!0}else _h(e)}return!1}function yh(){this.bp=0,this.es=0,this.dw=null,this.be=0,this.ch=null,this.et=null}P=yh.prototype=new Bp,P.constructor=yh;function bh(){}bh.prototype=P,P.k=(function(){return this.bp<this.es||vh(this)});function xh(e){return e.cT=-1,e.bq=-1,e.eu=new ga(1+Nl().ey|0),e.ev=new(Al.r()).C(1+Nl().ey|0),e}function Sh(e,t){return xh(e),wh(e,t),Eh(e),e}function Ch(e,t){e.fm=t,e.cT=t.gZ()-1|0}function wh(e,t){e.bq=1+e.bq|0,e.ev.a[e.bq]=t,e.eu.a[e.bq]=t.gX()-1|0}function Th(e){e.bq=e.bq-1|0}function Eh(e){for(;e.bq>=0;){var t=e.eu.a[e.bq];if(e.eu.a[e.bq]=t-1|0,t>=0)wh(e,e.ev.a[e.bq].gN(t));else{var n=e.ev.a[e.bq];if(Th(e),n.fE())return Ch(e,n),!0}}return!1}function Dh(){this.cT=0,this.fm=null,this.bq=0,this.eu=null,this.ev=null}P=Dh.prototype=new Bp,P.constructor=Dh;function Oh(){}Oh.prototype=P,P.k=(function(){return this.cT>=0||Eh(this)});function kh(e){return e.e0!==null}function Ah(e,t,n,r){if(n<0||n>t.a.length)throw Wg(new Gg);var i=new ga(1+t.a.length|0);t.q(0,i,0,n),i.a[n]=r;var a=1+n|0,o=t.a.length-n|0;return t.q(n,i,a,o),i}function jh(e,t,n,r,i,a,o){var s=t.eQ(n),c=s<<1,l=t.ad,u=new I(2+l.a.length|0);l.q(0,u,0,c),u.a[c]=r,u.a[1+c|0]=o;var d=2+c|0,f=l.a.length-c|0;l.q(c,u,d,f);var p=Ah(e,t.bd,s,i);t.Q|=n,t.ad=u,t.bd=p,t.aF=1+t.aF|0,t.b3=t.b3+a|0}function Mh(e){kh(e)&&Nh(e),e.e0=null}function Nh(e){e.c1=e.c1.jU()}function Ph(){this.e0=null,this.c1=null,this.c1=new Uf(0,0,Bc().iI,Bc().ga,0,0)}P=Ph.prototype=new F,P.constructor=Ph,P.aV=(function(e){}),P.eg=(function(e,t,n,r,i,a){if(e instanceof Uf){var o=Nl().dI(i,a),s=Nl().dg(o);if((e.Q&s)!==0){var c=Nl().c8(e.Q,o,s),l=e.dj(c),u=e.eV(c);if(u===r&&W().n(l,t)){e.ad.a[1+(c<<1)|0]=n;return}var d=e.cy(c),f=tl().bS(u),p=e.gV(l,d,u,f,t,n,r,i,5+a|0);e.mT(s,f,p);return}if((e.a9&s)!==0){var m=Nl().c8(e.a9,o,s),h=e.cx(m),g=h.aE(),_=h.dh();this.eg(h,t,n,r,i,5+a|0),e.aF=e.aF+(h.aE()-g|0)|0,e.b3=e.b3+(h.dh()-_|0)|0;return}jh(this,e,s,t,r,i,n)}else if(e instanceof Wf){var v=e.ec(t);if(v<0){e.aa=e.aa.de(new Gm(t,n));return}e.aa=e.aa.dm(v,new Gm(t,n))}else throw new Vm(e)}),P.h3=(function(){return this.c1.aF===0?qf().fn:(this.e0===null&&(this.e0=new ub(this.c1)),this.e0)}),P.jG=(function(e){Mh(this);var t=G().J(e.aX),n=tl().bS(t);return this.eg(this.c1,e.aX,e.aP,t,n,0),this}),P.dD=(function(e,t){Mh(this);var n=G().J(e);return this.eg(this.c1,e,t,n,tl().bS(n),0),this}),P.gy=(function(e){if(Mh(this),e instanceof ub)new w_(e,this);else if(Ry(e))e.dH(new np(((e,t)=>this.dD(e,t))));else for(var t=e.j();t.k();)this.jG(t.i());return this}),P.aU=(function(){return this.h3()}),P.aN=(function(e){return this.jG(e)}),P.aT=(function(e){return this.gy(e)}),new L().i(Ph,`scala.collection.immutable.HashMapBuilder`,{f2:1,D:1,F:1,K:1,a6:1});function Fh(){this.e1=null,this.j7=null,this.lI()}P=Fh.prototype=new F,P.constructor=Fh,P.aV=(function(e){}),P.lI=(function(){var e=new Sl;this.j7=(Z(),db(new vb,new tp((()=>e.gF())))),this.e1=e}),P.ne=(function(){return this.e1.gT(new tp((()=>Z().L))),this.j7}),P.lq=(function(e){var t=new Sl;return this.e1.gT(new tp((()=>(Z(),fb(new vb,e,(Z(),db(new vb,new tp((()=>t.gF()))))))))),this.e1=t,this}),P.li=(function(e){if(e.u()!==0){var t=new Sl;this.e1.gT(new tp((()=>Z().kB(e.j(),new tp((()=>t.gF())))))),this.e1=t}return this}),P.aU=(function(){return this.ne()}),P.aN=(function(e){return this.lq(e)}),P.aT=(function(e){return this.li(e)}),new L().i(Fh,`scala.collection.immutable.LazyList$LazyBuilder`,{f9:1,D:1,F:1,K:1,a6:1});function Ih(e){this.e2=null,this.e2=e}P=Ih.prototype=new Bp,P.constructor=Ih,P.k=(function(){return mb(this.e2)!==Z().L}),P.i=(function(){if(mb(this.e2)===Z().L)return If().P.i();var e=this.e2.v();return this.e2=this.e2.aW(),e}),new L().i(Ih,`scala.collection.immutable.LazyList$LazyIterator`,{fb:1,s:1,b:1,c:1,t:1});function Lh(){Rh=this,$(),$()}P=Lh.prototype=new F,P.constructor=Lh,P.cv=(function(e){return $().h0(e)}),P.aO=(function(){return new Ox}),P.ar=(function(e){return $().h0(e)}),new L().i(Lh,`scala.collection.immutable.List$`,{fg:1,a:1,I:1,Z:1,ah:1});var Rh;function zh(){return Rh||=new Lh,Rh}function Bh(e,t){if(t===null)throw Nm(new Pm);return e.e3=t,e.cX=0,e}function Vh(){this.cX=0,this.e3=null}P=Vh.prototype=new Bp,P.constructor=Vh;function Hh(){}Hh.prototype=P,P.k=(function(){return this.cX<2}),P.i=(function(){matchResult5$1:{var e,t=this.cX;if(t===0){var e=new Gm(this.e3.bK,this.e3.cV);break matchResult5$1}if(t===1){var e=new Gm(this.e3.bL,this.e3.cW);break matchResult5$1}var e=If().P.i()}return this.cX=1+this.cX|0,e}),P.di=(function(e){return this.cX=this.cX+e|0,this});function Uh(e,t){if(t===null)throw Nm(new Pm);return e.cY=t,e.cZ=0,e}function Wh(){this.cZ=0,this.cY=null}P=Wh.prototype=new Bp,P.constructor=Wh;function Gh(){}Gh.prototype=P,P.k=(function(){return this.cZ<3}),P.i=(function(){var e;switch(this.cZ){case 0:var e=new Gm(this.cY.bx,this.cY.ci);break;case 1:var e=new Gm(this.cY.by,this.cY.cj);break;case 2:var e=new Gm(this.cY.bz,this.cY.ck);break;default:var e=If().P.i()}return this.cZ=1+this.cZ|0,e}),P.di=(function(e){return this.cZ=this.cZ+e|0,this});function Kh(e,t){if(t===null)throw Nm(new Pm);return e.c3=t,e.d0=0,e}function qh(){this.d0=0,this.c3=null}P=qh.prototype=new Bp,P.constructor=qh;function Jh(){}Jh.prototype=P,P.k=(function(){return this.d0<4}),P.i=(function(){var e;switch(this.d0){case 0:var e=new Gm(this.c3.bf,this.c3.bM);break;case 1:var e=new Gm(this.c3.bg,this.c3.bN);break;case 2:var e=new Gm(this.c3.bh,this.c3.bO);break;case 3:var e=new Gm(this.c3.bi,this.c3.bP);break;default:var e=If().P.i()}return this.d0=1+this.d0|0,e}),P.di=(function(e){return this.d0=this.d0+e|0,this});function Yh(){this.cl=null,this.ew=!1,this.dy=null,this.cl=rb(),this.ew=!1}P=Yh.prototype=new F,P.constructor=Yh,P.aV=(function(e){}),P.kx=(function(){return this.ew?this.dy.h3():this.cl}),P.lo=(function(e,t){return this.ew?this.dy.dD(e,t):this.cl.aE()<4||this.cl.bR(e)?this.cl=this.cl.dn(e,t):(this.ew=!0,this.dy===null&&(this.dy=new Ph),this.cl.lH(this.dy),this.dy.dD(e,t)),this}),P.jB=(function(e){return this.ew?(this.dy.gy(e),this):hd(this,e)}),P.aU=(function(){return this.kx()}),P.aN=(function(e){return this.lo(e.aX,e.aP)}),P.aT=(function(e){return this.jB(e)}),new L().i(Yh,`scala.collection.immutable.MapBuilderImpl`,{fq:1,D:1,F:1,K:1,a6:1});function Xh(){this.jb=0,this.jc=null,Zh=this;try{fl();var e=Ju().km(uc().gP(`scala.collection.immutable.Vector.defaultApplyPreferredMaxLength`,`250`),10,214748364)}catch(t){if(0)var e;else{var e;throw t}}this.jb=e,this.jc=new F_(_x(),0,0)}P=Xh.prototype=new F,P.constructor=Xh,P.cv=(function(e){return this.gL(e)}),P.gL=(function(e){if(e instanceof Mb)return e;var t=e.u();if(t===0)return _x();if((t-1|0)>>>0<=31){matchResult3:{var n;if(e instanceof Ub){var r=e.a7().aD();if(r!==null&&r===R.l()){var n=e.c0;break matchResult3}}if(T_(e)){var i=new I(t);e.bs(i,0,2147483647);var n=i;break matchResult3}var a=new I(t);e.j().bs(a,0,2147483647);var n=a}return new dx(n)}return new og().jC(e).ky()}),P.ar=(function(e){return this.gL(e)}),P.aO=(function(){return new og}),new L().i(Xh,`scala.collection.immutable.Vector$`,{fD:1,a:1,I:1,Z:1,ah:1});var Zh;function Qh(){return Zh||=new Xh,Zh}function $h(e){var t=null,n=null;if(e.H>=6){t=e.av;var r=e.D>>>25|0;if(r>0){var i=t,a=t,o=64-r|0;i.q(r,a,0,o)}var s=e.D,c=s>>24>>>7|0,l=(33554431&(s+c|0))-c|0;e.w=e.w-(e.D-l|0)|0,e.D=l,e.w>>>25|0||(e.H=5),n=t,t=t.a[0]}if(e.H>=5){t===null&&(t=e.M);var u=31&(e.D>>>20|0);if(e.H===5){if(u>0){var d=t,f=t,p=32-u|0;d.q(u,f,0,p)}e.M=t;var m=e.D,h=m>>19>>>12|0,g=(1048575&(m+h|0))-h|0;e.w=e.w-(e.D-g|0)|0,e.D=g,e.w>>>20|0||(e.H=4)}else u>0&&(t=V().X(t,u,32)),n.a[0]=t;n=t,t=t.a[0]}if(e.H>=4){t===null&&(t=e.I);var _=31&(e.D>>>15|0);if(e.H===4){if(_>0){var v=t,y=t,b=32-_|0;v.q(_,y,0,b)}e.I=t;var x=e.D,S=x>>14>>>17|0,C=(32767&(x+S|0))-S|0;e.w=e.w-(e.D-C|0)|0,e.D=C,e.w>>>15|0||(e.H=3)}else _>0&&(t=V().X(t,_,32)),n.a[0]=t;n=t,t=t.a[0]}if(e.H>=3){t===null&&(t=e.F);var w=31&(e.D>>>10|0);if(e.H===3){if(w>0){var T=t,ee=t,te=32-w|0;T.q(w,ee,0,te)}e.F=t;var ne=e.D,E=ne>>9>>>22|0,re=(1023&(ne+E|0))-E|0;e.w=e.w-(e.D-re|0)|0,e.D=re,e.w>>>10|0||(e.H=2)}else w>0&&(t=V().X(t,w,32)),n.a[0]=t;n=t,t=t.a[0]}if(e.H>=2){t===null&&(t=e.A);var ie=31&(e.D>>>5|0);if(e.H===2){if(ie>0){var ae=t,oe=t,se=32-ie|0;ae.q(ie,oe,0,se)}e.A=t;var D=e.D,ce=D>>4>>>27|0,O=(31&(D+ce|0))-ce|0;e.w=e.w-(e.D-O|0)|0,e.D=O,e.w>>>5|0||(e.H=1)}else ie>0&&(t=V().X(t,ie,32)),n.a[0]=t;n=t,t=t.a[0]}if(e.H>=1){t===null&&(t=e.K);var le=31&e.D;if(e.H===1){if(le>0){var ue=t,de=t,fe=32-le|0;ue.q(le,de,0,fe)}e.K=t,e.G=e.G-e.D|0,e.D=0}else le>0&&(t=V().X(t,le,32)),n.a[0]=t}e.fo=!1}function eg(e,t){var n=t.a.length;if(n>0){e.G===32&&rg(e);var r=32-e.G|0,i=r<n?r:n,a=n-i|0,o=e.K,s=e.G;if(t.q(0,o,s,i),e.G=e.G+i|0,a>0){rg(e);var c=e.K;t.q(i,c,0,a),e.G=e.G+a|0}}}function tg(e,t,n){if(t.a.length!==0){e.G===32&&rg(e);var r=t.a.length;switch(n){case 2:var i=31&((1024-e.w|0)>>>5|0),a=i<r?i:r,o=r-a|0,s=31&(e.w>>>5|0),c=e.A;if(t.q(0,c,s,a),ig(e,a<<5),o>0){var l=e.A;t.q(a,l,0,o),ig(e,o<<5)}break;case 3:var u=e.w,d=u>>9>>>22|0;if((1023&(u+d|0))-d|0){var f=(t=>{tg(e,t,2)}),p=t.a.length,m=0;if(t!==null)for(;m<p;){var h=t.a[m];f(h),m=1+m|0}else if(t instanceof ga)for(;m<p;){var g=t.a[m];f(g),m=1+m|0}else if(t instanceof ya)for(;m<p;){var _=t.a[m];f(_),m=1+m|0}else if(t instanceof _a)for(;m<p;){var v=t.a,y=m<<1,b=v[y],x=v[y+1|0];f(aa(b,x)),m=1+m|0}else if(t instanceof va)for(;m<p;){var S=t.a[m];f(S),m=1+m|0}else if(t instanceof pa)for(;m<p;){var C=t.a[m];f(ia(C)),m=1+m|0}else if(t instanceof ma)for(;m<p;){var w=t.a[m];f(w),m=1+m|0}else if(t instanceof ha)for(;m<p;){var T=t.a[m];f(T),m=1+m|0}else if(t instanceof fa)for(;m<p;){var ee=t.a[m];f(ee),m=1+m|0}else throw new Vm(t);return}var te=31&((32768-e.w|0)>>>10|0),ne=te<r?te:r,E=r-ne|0,re=31&(e.w>>>10|0),ie=e.F;if(t.q(0,ie,re,ne),ig(e,ne<<10),E>0){var ae=e.F;t.q(ne,ae,0,E),ig(e,E<<10)}break;case 4:var oe=e.w,se=oe>>14>>>17|0;if((32767&(oe+se|0))-se|0){var D=(t=>{tg(e,t,3)}),ce=t.a.length,O=0;if(t!==null)for(;O<ce;){var le=t.a[O];D(le),O=1+O|0}else if(t instanceof ga)for(;O<ce;){var ue=t.a[O];D(ue),O=1+O|0}else if(t instanceof ya)for(;O<ce;){var de=t.a[O];D(de),O=1+O|0}else if(t instanceof _a)for(;O<ce;){var fe=t.a,pe=O<<1,me=fe[pe],he=fe[pe+1|0];D(aa(me,he)),O=1+O|0}else if(t instanceof va)for(;O<ce;){var ge=t.a[O];D(ge),O=1+O|0}else if(t instanceof pa)for(;O<ce;){var _e=t.a[O];D(ia(_e)),O=1+O|0}else if(t instanceof ma)for(;O<ce;){var ve=t.a[O];D(ve),O=1+O|0}else if(t instanceof ha)for(;O<ce;){var ye=t.a[O];D(ye),O=1+O|0}else if(t instanceof fa)for(;O<ce;){var be=t.a[O];D(be),O=1+O|0}else throw new Vm(t);return}var xe=31&((1048576-e.w|0)>>>15|0),Se=xe<r?xe:r,Ce=r-Se|0,we=31&(e.w>>>15|0),Te=e.I;if(t.q(0,Te,we,Se),ig(e,Se<<15),Ce>0){var Ee=e.I;t.q(Se,Ee,0,Ce),ig(e,Ce<<15)}break;case 5:var De=e.w,Oe=De>>19>>>12|0;if((1048575&(De+Oe|0))-Oe|0){var ke=(t=>{tg(e,t,4)}),Ae=t.a.length,k=0;if(t!==null)for(;k<Ae;){var je=t.a[k];ke(je),k=1+k|0}else if(t instanceof ga)for(;k<Ae;){var Me=t.a[k];ke(Me),k=1+k|0}else if(t instanceof ya)for(;k<Ae;){var Ne=t.a[k];ke(Ne),k=1+k|0}else if(t instanceof _a)for(;k<Ae;){var Pe=t.a,Fe=k<<1,Ie=Pe[Fe],Le=Pe[Fe+1|0];ke(aa(Ie,Le)),k=1+k|0}else if(t instanceof va)for(;k<Ae;){var Re=t.a[k];ke(Re),k=1+k|0}else if(t instanceof pa)for(;k<Ae;){var ze=t.a[k];ke(ia(ze)),k=1+k|0}else if(t instanceof ma)for(;k<Ae;){var Be=t.a[k];ke(Be),k=1+k|0}else if(t instanceof ha)for(;k<Ae;){var Ve=t.a[k];ke(Ve),k=1+k|0}else if(t instanceof fa)for(;k<Ae;){var He=t.a[k];ke(He),k=1+k|0}else throw new Vm(t);return}var Ue=31&((33554432-e.w|0)>>>20|0),A=Ue<r?Ue:r,We=r-A|0,Ge=31&(e.w>>>20|0),Ke=e.M;if(t.q(0,Ke,Ge,A),ig(e,A<<20),We>0){var qe=e.M;t.q(A,qe,0,We),ig(e,We<<20)}break;case 6:var Je=e.w,Ye=Je>>24>>>7|0;if((33554431&(Je+Ye|0))-Ye|0){var Xe=(t=>{tg(e,t,5)}),j=t.a.length,M=0;if(t!==null)for(;M<j;){var Ze=t.a[M];Xe(Ze),M=1+M|0}else if(t instanceof ga)for(;M<j;){var Qe=t.a[M];Xe(Qe),M=1+M|0}else if(t instanceof ya)for(;M<j;){var $e=t.a[M];Xe($e),M=1+M|0}else if(t instanceof _a)for(;M<j;){var et=t.a,tt=M<<1,nt=et[tt],rt=et[tt+1|0];Xe(aa(nt,rt)),M=1+M|0}else if(t instanceof va)for(;M<j;){var it=t.a[M];Xe(it),M=1+M|0}else if(t instanceof pa)for(;M<j;){var at=t.a[M];Xe(ia(at)),M=1+M|0}else if(t instanceof ma)for(;M<j;){var ot=t.a[M];Xe(ot),M=1+M|0}else if(t instanceof ha)for(;M<j;){var st=t.a[M];Xe(st),M=1+M|0}else if(t instanceof fa)for(;M<j;){var ct=t.a[M];Xe(ct),M=1+M|0}else throw new Vm(t);return}var lt=e.w>>>25|0;if((lt+r|0)>64)throw wm(new Em,`exceeding 2^31 elements`);var ut=e.av;t.q(0,ut,lt,r),ig(e,r<<25);break;default:throw new Vm(n)}}}function ng(e,t){for(var n=t.cb(),r=0;r<n;){var i=t.ca(r);matchResult26:{var a=r,o=(n+(n>>>31|0)|0)>>1,s=a-o|0,c=s>>31,l=(1+o|0)-((s^c)-c|0)|0;if(l===1){eg(e,i);break matchResult26}if(e.G===32||e.G===0){tg(e,i,l);break matchResult26}U().gH(l-2|0,i,new Y((t=>{eg(e,t)})))}r=1+r|0}return e}function rg(e){var t=32+e.w|0,n=t^e.w;e.w=t,e.G=0,ag(e,t,n)}function ig(e,t){if(t>0){var n=e.w+t|0,r=n^e.w;e.w=n,e.G=0,ag(e,n,r)}}function ag(e,t,n){if(n<=0)throw wm(new Em,`advance1(`+t+`, `+n+`): a1=`+e.K+`, a2=`+e.A+`, a3=`+e.F+`, a4=`+e.I+`, a5=`+e.M+`, a6=`+e.av+`, depth=`+e.H);n<1024?(e.H<=1&&(e.A=new(R.r().r()).C(32),e.A.a[0]=e.K,e.H=2),e.K=new I(32),e.A.a[31&(t>>>5|0)]=e.K):n<32768?(e.H<=2&&(e.F=new(R.r().r().r()).C(32),e.F.a[0]=e.A,e.H=3),e.K=new I(32),e.A=new(R.r().r()).C(32),e.A.a[31&(t>>>5|0)]=e.K,e.F.a[31&(t>>>10|0)]=e.A):n<1048576?(e.H<=3&&(e.I=new(R.r().r().r().r()).C(32),e.I.a[0]=e.F,e.H=4),e.K=new I(32),e.A=new(R.r().r()).C(32),e.F=new(R.r().r().r()).C(32),e.A.a[31&(t>>>5|0)]=e.K,e.F.a[31&(t>>>10|0)]=e.A,e.I.a[31&(t>>>15|0)]=e.F):n<33554432?(e.H<=4&&(e.M=new(R.r().r().r().r().r()).C(32),e.M.a[0]=e.I,e.H=5),e.K=new I(32),e.A=new(R.r().r()).C(32),e.F=new(R.r().r().r()).C(32),e.I=new(R.r().r().r().r()).C(32),e.A.a[31&(t>>>5|0)]=e.K,e.F.a[31&(t>>>10|0)]=e.A,e.I.a[31&(t>>>15|0)]=e.F,e.M.a[31&(t>>>20|0)]=e.I):(e.H<=5&&(e.av=new(R.r().r().r().r().r().r()).C(64),e.av.a[0]=e.M,e.H=6),e.K=new I(32),e.A=new(R.r().r()).C(32),e.F=new(R.r().r().r()).C(32),e.I=new(R.r().r().r().r()).C(32),e.M=new(R.r().r().r().r().r()).C(32),e.A.a[31&(t>>>5|0)]=e.K,e.F.a[31&(t>>>10|0)]=e.A,e.I.a[31&(t>>>15|0)]=e.F,e.M.a[31&(t>>>20|0)]=e.I,e.av.a[t>>>25|0]=e.M)}function og(){this.av=null,this.M=null,this.I=null,this.F=null,this.A=null,this.K=null,this.G=0,this.w=0,this.D=0,this.fo=!1,this.H=0,this.K=new I(32),this.G=0,this.w=0,this.D=0,this.fo=!1,this.H=1}P=og.prototype=new F,P.constructor=og,P.aV=(function(e){}),P.mE=(function(e){var t=e.cb();switch(t){case 0:break;case 1:this.H=1;var n=e.c.a.length;this.G=31&n,this.w=n-this.G|0;var r=e.c;this.K=r.a.length===32?r:V().X(r,0,32);break;case 3:var i=e.b2,a=e.f;this.K=a.a.length===32?a:V().X(a,0,32),this.H=2,this.D=32-e.bk|0;var o=e.h+this.D|0;this.G=31&o,this.w=o-this.G|0,this.A=new(R.r().r()).C(32),this.A.a[0]=e.c;var s=this.A,c=i.a.length;i.q(0,s,1,c),this.A.a[1+i.a.length|0]=this.K;break;case 5:var l=e.aI,u=e.aJ,d=e.f;this.K=d.a.length===32?d:V().X(d,0,32),this.H=3,this.D=1024-e.b0|0;var f=e.h+this.D|0;this.G=31&f,this.w=f-this.G|0,this.F=new(R.r().r().r()).C(32),this.F.a[0]=U().c6(e.c,e.b6);var p=this.F,m=l.a.length;l.q(0,p,1,m),this.A=V().O(u,32),this.F.a[1+l.a.length|0]=this.A,this.A.a[u.a.length]=this.K;break;case 7:var h=e.ao,g=e.aq,_=e.ap,v=e.f;this.K=v.a.length===32?v:V().X(v,0,32),this.H=4,this.D=32768-e.az|0;var y=e.h+this.D|0;this.G=31&y,this.w=y-this.G|0,this.I=new(R.r().r().r().r()).C(32),this.I.a[0]=U().c6(U().c6(e.c,e.aQ),e.aR);var b=this.I,x=h.a.length;h.q(0,b,1,x),this.F=V().O(g,32),this.A=V().O(_,32),this.I.a[1+h.a.length|0]=this.F,this.F.a[g.a.length]=this.A,this.A.a[_.a.length]=this.K;break;case 9:var S=e.Y,C=e.a1,w=e.a0,T=e.Z,ee=e.f;this.K=ee.a.length===32?ee:V().X(ee,0,32),this.H=5,this.D=1048576-e.ah|0;var te=e.h+this.D|0;this.G=31&te,this.w=te-this.G|0,this.M=new(R.r().r().r().r().r()).C(32),this.M.a[0]=U().c6(U().c6(U().c6(e.c,e.as),e.at),e.au);var ne=this.M,E=S.a.length;S.q(0,ne,1,E),this.I=V().O(C,32),this.F=V().O(w,32),this.A=V().O(T,32),this.M.a[1+S.a.length|0]=this.I,this.I.a[C.a.length]=this.F,this.F.a[w.a.length]=this.A,this.A.a[T.a.length]=this.K;break;case 11:var re=e.R,ie=e.V,ae=e.U,oe=e.T,se=e.S,D=e.f;this.K=D.a.length===32?D:V().X(D,0,32),this.H=6,this.D=33554432-e.ab|0;var ce=e.h+this.D|0;this.G=31&ce,this.w=ce-this.G|0,this.av=new(R.r().r().r().r().r().r()).C(64),this.av.a[0]=U().c6(U().c6(U().c6(U().c6(e.c,e.ai),e.aj),e.ak),e.al);var O=this.av,le=re.a.length;re.q(0,O,1,le),this.M=V().O(ie,32),this.I=V().O(ae,32),this.F=V().O(oe,32),this.A=V().O(se,32),this.av.a[1+re.a.length|0]=this.M,this.M.a[ie.a.length]=this.I,this.I.a[ae.a.length]=this.F,this.F.a[oe.a.length]=this.A,this.A.a[se.a.length]=this.K;break;default:throw new Vm(t)}return this.G===0&&this.w>0&&(this.G=32,this.w=this.w-32|0),this}),P.lr=(function(e){return this.G===32&&rg(this),this.K.a[this.G]=e,this.G=1+this.G|0,this}),P.jC=(function(e){return e instanceof Mb?this.G===0&&this.w===0&&!this.fo?this.mE(e):ng(this,e):hd(this,e)}),P.ky=(function(){this.fo&&$h(this);var e=this.G+this.w|0,t=e-this.D|0;if(t===0)return Qh(),_x();if(e<0)throw Om(new Am,`Vector cannot have negative size `+e);if(e<=32){var n=this.K;return new dx(n.a.length===t?n:V().O(n,t))}if(e<=1024){var r=31&(e-1|0),i=(e-1|0)>>>5|0,a=V().X(this.A,1,i),o=this.A.a[0],s=this.A.a[i],c=1+r|0,l=s.a.length===c?s:V().O(s,c);return new vx(o,32-this.D|0,a,l,t)}if(e<=32768){var u=31&(e-1|0),d=31&((e-1|0)>>>5|0),f=(e-1|0)>>>10|0,p=V().X(this.F,1,f),m=this.F.a[0],h=V().X(m,1,m.a.length),g=this.F.a[0].a[0],_=V().O(this.F.a[f],d),v=this.F.a[f].a[d],y=1+u|0,b=v.a.length===y?v:V().O(v,y),x=g.a.length;return new yx(g,x,h,x+(h.a.length<<5)|0,p,_,b,t)}if(e<=1048576){var S=31&(e-1|0),C=31&((e-1|0)>>>5|0),w=31&((e-1|0)>>>10|0),T=(e-1|0)>>>15|0,ee=V().X(this.I,1,T),te=this.I.a[0],ne=V().X(te,1,te.a.length),E=this.I.a[0].a[0],re=V().X(E,1,E.a.length),ie=this.I.a[0].a[0].a[0],ae=V().O(this.I.a[T],w),oe=V().O(this.I.a[T].a[w],C),se=this.I.a[T].a[w].a[C],D=1+S|0,ce=se.a.length===D?se:V().O(se,D),O=ie.a.length,le=O+(re.a.length<<5)|0;return new bx(ie,O,re,le,ne,le+(ne.a.length<<10)|0,ee,ae,oe,ce,t)}if(e<=33554432){var ue=31&(e-1|0),de=31&((e-1|0)>>>5|0),fe=31&((e-1|0)>>>10|0),pe=31&((e-1|0)>>>15|0),me=(e-1|0)>>>20|0,he=V().X(this.M,1,me),ge=this.M.a[0],_e=V().X(ge,1,ge.a.length),ve=this.M.a[0].a[0],ye=V().X(ve,1,ve.a.length),be=this.M.a[0].a[0].a[0],xe=V().X(be,1,be.a.length),Se=this.M.a[0].a[0].a[0].a[0],Ce=V().O(this.M.a[me],pe),we=V().O(this.M.a[me].a[pe],fe),Te=V().O(this.M.a[me].a[pe].a[fe],de),Ee=this.M.a[me].a[pe].a[fe].a[de],De=1+ue|0,Oe=Ee.a.length===De?Ee:V().O(Ee,De),ke=Se.a.length,Ae=ke+(xe.a.length<<5)|0,k=Ae+(ye.a.length<<10)|0;return new xx(Se,ke,xe,Ae,ye,k,_e,k+(_e.a.length<<15)|0,he,Ce,we,Te,Oe,t)}var je=31&(e-1|0),Me=31&((e-1|0)>>>5|0),Ne=31&((e-1|0)>>>10|0),Pe=31&((e-1|0)>>>15|0),Fe=31&((e-1|0)>>>20|0),Ie=(e-1|0)>>>25|0,Le=V().X(this.av,1,Ie),Re=this.av.a[0],ze=V().X(Re,1,Re.a.length),Be=this.av.a[0].a[0],Ve=V().X(Be,1,Be.a.length),He=this.av.a[0].a[0].a[0],Ue=V().X(He,1,He.a.length),A=this.av.a[0].a[0].a[0].a[0],We=V().X(A,1,A.a.length),Ge=this.av.a[0].a[0].a[0].a[0].a[0],Ke=V().O(this.av.a[Ie],Fe),qe=V().O(this.av.a[Ie].a[Fe],Pe),Je=V().O(this.av.a[Ie].a[Fe].a[Pe],Ne),Ye=V().O(this.av.a[Ie].a[Fe].a[Pe].a[Ne],Me),Xe=this.av.a[Ie].a[Fe].a[Pe].a[Ne].a[Me],j=1+je|0,M=Xe.a.length===j?Xe:V().O(Xe,j),Ze=Ge.a.length,Qe=Ze+(We.a.length<<5)|0,$e=Qe+(Ue.a.length<<10)|0,et=$e+(Ve.a.length<<15)|0;return new Sx(Ge,Ze,We,Qe,Ue,$e,Ve,et,ze,et+(ze.a.length<<20)|0,Le,Ke,qe,Je,Ye,M,t)}),P.B=(function(){return`VectorBuilder(len1=`+this.G+`, lenRest=`+this.w+`, offset=`+this.D+`, depth=`+this.H+`)`}),P.aN=(function(e){return this.lr(e)}),P.aT=(function(e){return this.jC(e)}),P.aU=(function(){return this.ky()}),new L().i(og,`scala.collection.immutable.VectorBuilder`,{fL:1,D:1,F:1,K:1,a6:1});function sg(){this.je=null,cg=this,this.je=new I(0)}P=sg.prototype=new F,P.constructor=sg,P.cv=(function(e){return this.ke(e)}),P.ke=(function(e){var t=e.u();if(t>=0){var n=this.kC(this.je,0,t),r=Jm(e)?e.bs(n,0,2147483647):e.j().bs(n,0,2147483647);if(r!==t)throw new Dm(`Copied `+r+` of `+t);return kx(new jx,n,t)}return Ax(new jx).jD(e)}),P.aO=(function(){return new ug}),P.nd=(function(e,t){if(t<0)throw jp(new Mp,`Overflow while resizing array of array-backed collection. Requested length: `+t+`; current length: `+e+`; increase: `+(t-e|0));if(t<=e)return-1;if(t>2147483639)throw jp(new Mp,`Array of array-backed collection exceeds VM length limit of 2147483639. Requested length: `+t+`; current length: `+e);if(e>1073741819)return 2147483639;var n=e<<1,r=n>16?n:16;return t>r?t:r}),P.kC=(function(e,t,n){var r=this.nd(e.a.length,n);if(r<0)return e;var i=new I(r);return e.q(0,i,0,t),i}),P.ar=(function(e){return this.ke(e)}),new L().i(sg,`scala.collection.mutable.ArrayBuffer$`,{fQ:1,a:1,I:1,Z:1,ah:1});var cg;function lg(){return cg||=new sg,cg}function ug(){this.d8=null,im(this,(lg(),Ax(new jx)))}P=ug.prototype=new om,P.constructor=ug,P.aV=(function(e){this.d8.aV(e)}),new L().i(ug,`scala.collection.mutable.ArrayBuffer$$anon$1`,{fR:1,aL:1,D:1,F:1,K:1});function dg(){this.dZ=null,Wp(this,Pg())}P=dg.prototype=new Kp,P.constructor=dg,new L().i(dg,`scala.collection.mutable.Buffer$`,{fX:1,bh:1,a:1,I:1,Z:1});var fg;function pg(){return fg||=new dg,fg}function mg(e,t){this.d8=null,im(this,xb(new Ob,e,t))}P=mg.prototype=new om,P.constructor=mg,P.aV=(function(e){this.d8.aV(e)}),new L().i(mg,`scala.collection.mutable.HashSet$$anon$4`,{g5:1,aL:1,D:1,F:1,K:1});function hg(e,t){if(t===null)throw Nm(new Pm);return e.eA=t,e.da=0,e.cq=null,e.eB=t.aK.a.length,e}function gg(){this.da=0,this.cq=null,this.eB=0,this.eA=null}P=gg.prototype=new Bp,P.constructor=gg;function _g(){}_g.prototype=P,P.k=(function(){if(this.cq!==null)return!0;for(;this.da<this.eB;){var e=this.eA.aK.a[this.da];if(this.da=1+this.da|0,e!==null)return this.cq=e,!0}return!1}),P.i=(function(){if(this.k()){var e=this.cq;e===null&&Ql().bV();var t=this.gG(e),n=this.cq;return n===null&&Ql().bV(),this.cq=n.aL,t}return If().P.i()});function vg(e,t){return e.eC=t,e}function yg(){this.eC=null}P=yg.prototype=new F,P.constructor=yg;function bg(){}bg.prototype=P,P.aT=(function(e){return hd(this,e)}),P.aV=(function(e){}),P.aU=(function(){return this.eC});function xg(){this.dZ=null,Wp(this,lg())}P=xg.prototype=new Kp,P.constructor=xg,new L().i(xg,`scala.collection.mutable.IndexedSeq$`,{g8:1,bh:1,a:1,I:1,Z:1});var Sg;function Cg(){return Sg||=new xg,Sg}function wg(){}P=wg.prototype=new F,P.constructor=wg,P.cv=(function(e){return new Ox().fK(e)}),P.aO=(function(){return im(new am,new Ox)}),P.ar=(function(e){return new Ox().fK(e)}),new L().i(wg,`scala.collection.mutable.ListBuffer$`,{gb:1,a:1,I:1,Z:1,ah:1});var Tg;function Eg(){return Tg||=new wg,Tg}function Dg(e,t){this.gu=null,this.jo=null,this.jn=0,this.gu=e,this.jo=t,this.jn=t.a6()|0}P=Dg.prototype=new Bp,P.constructor=Dg,P.k=(function(){return Ul().jP(this.jn,this.jo.a6()|0,`mutation occurred during iteration`),this.gu.k()}),P.i=(function(){return this.gu.i()}),new L().i(Dg,`scala.collection.mutable.MutationTracker$CheckedIterator`,{gd:1,s:1,b:1,c:1,t:1});function Og(e,t){if(Ag(t)){var n=e.aD(),r=t.aD();return n===null?r===null:n===r}return!1}function kg(e,t){return t.a8.Z?`Array[`+kg(e,t.a8.Q())+`]`:t.a8.N}function Ag(e){return!!(e&&e.$classData&&e.$classData.n.C)}function jg(e){this.jt=null,this.eE=0,this.js=0,this.jt=e,this.eE=0,this.js=e.cB()}P=jg.prototype=new Bp,P.constructor=jg,P.k=(function(){return this.eE<this.js}),P.i=(function(){var e=this.jt.cC(this.eE);return this.eE=1+this.eE|0,e}),new L().i(jg,`scala.runtime.ScalaRunTime$$anon$1`,{gU:1,s:1,b:1,c:1,t:1});function Mg(){}P=Mg.prototype=new F,P.constructor=Mg,P.cv=(function(e){return this.kf(e)}),P.aO=(function(){return Nx(new Px)}),P.kf=(function(e){return hd(Nx(new Px),e).aU()}),P.ar=(function(e){return this.kf(e)}),new L().i(Mg,`scala.scalajs.js.WrappedArray$`,{h0:1,ah:1,a:1,I:1,Z:1});var Ng;function Pg(){return Ng||=new Mg,Ng}function Fg(){}P=Fg.prototype=new F,P.constructor=Fg,P.cv=(function(e){return this.gM(e)}),P.gM=(function(e){return this.aO().aT(e).aU()}),P.aO=(function(){return new rm(new Y((e=>new Q(e.db))),Mx(new Px,[]))}),P.ar=(function(e){return this.gM(e)}),new L().i(Fg,`scala.scalajs.runtime.WrappedVarArgs$`,{hb:1,ah:1,a:1,I:1,Z:1});var Ig;function Lg(){return Ig||=new Fg,Ig}var Rg=class e extends Ad{constructor(e,t){super(),this.dN=null,this.dM=0,this.dN=e,this.dM=t,rd(this,`Transaction depth exceeded maxDepth = `+t+`: Execution of `+e+" aborted. See `Transaction.maxDepth`.",null,!0,!0)}ed(){return new Wm(this)}x(){var e=-889275714;return e=G().y(e,t_(`TransactionDepthExceeded`)),e=G().y(e,G().J(this.dN)),e=G().y(e,this.dM),G().aB(e,2)}t(t){if(this===t)return!0;if(t instanceof e){if(this.dM===t.dM){var n=this.dN,r=t.dN;return n===null?r===null:n===r}return!1}return!1}cB(){return 2}cD(){return`TransactionDepthExceeded`}cC(e){if(e===0)return this.dN;if(e===1)return this.dM;throw Om(new Am,``+e)}B(){return`TransactionDepthExceeded: `+this.dN+`; maxDepth: `+this.dM}};new L().i(Rg,`com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded`,{aN:1,bZ:1,B:1,a:1,d:1,a8:1});function zg(e){this.dS=null,this.dT=null,this.hG=null,this.hH=!1,yp(this,e,$())}P=zg.prototype=new xp,P.constructor=zg,P.jR=(function(){return this.hH||=(this.hG=this.E(`column`),!0),this.hG}),new L().i(zg,`com.raquo.laminar.defs.styles.StyleProps$$anon$30`,{cE:1,ar:1,W:1,ao:1,ap:1,cI:1});function Bg(e){this.dS=null,this.dT=null,this.hI=null,this.hJ=!1,yp(this,e,$())}P=Bg.prototype=new xp,P.constructor=Bg,P.nB=(function(){return this.hJ||=(this.hI=this.E(`wrap`),!0),this.hI}),new L().i(Bg,`com.raquo.laminar.defs.styles.StyleProps$$anon$31`,{cF:1,ar:1,W:1,ao:1,ap:1,cJ:1});function Vg(e,t){this.fe=null,this.dU=null,this.fZ=null,this.ei=null,this.hY=null,this.cc=null,this.hY=e,this.cc=t,this.fe=o_(),Pu(this),pm(this)}P=Vg.prototype=new F,P.constructor=Vg,P.c5=(function(e){us().eF(e,this,void 0)}),P.fD=(function(){return this.dU}),P.jT=(function(e){this.dU=e}),P.kQ=(function(e){hm(this,e)}),P.kG=(function(e){gm(this,e)}),P.B=(function(){return`ReactiveHtmlElement(`+(this.cc===null?`tag=`+this.hY.gW():this.cc.outerHTML)+`)`}),P.dK=(function(){return this.cc});var Hg=new L().i(Vg,`com.raquo.laminar.nodes.ReactiveHtmlElement`,{dj:1,aw:1,a2:1,aS:1,aT:1,di:1});function Ug(e,t){return rd(e,t,null,!0,!0),e}function Wg(e){return rd(e,null,null,!0,!0),e}var Gg=class extends Am{};new L().i(Gg,`java.lang.ArrayIndexOutOfBoundsException`,{dJ:1,b3:1,P:1,H:1,B:1,a:1});function Kg(e,t){return Object.is(e,t)}function qg(e){var t=e|0;if(t===e&&1/e!=-1/0)return t;if(e!==e)return 2146959360;var n=Yi;return n.setFloat64(0,e,!0),(n.getInt32(0,!0)|0)^(n.getInt32(4,!0)|0)}var Jg=new L().i(0,`java.lang.Double`,{b1:1,a7:1,a:1,a0:1,X:1,ak:1},(e=>typeof e==`number`)),Yg=new L().i(0,`java.lang.Float`,{dP:1,a7:1,a:1,a0:1,X:1,ak:1},(e=>ra(e))),Xg=new L().i(0,`java.lang.Integer`,{dR:1,a7:1,a:1,a0:1,X:1,ak:1},(e=>na(e)));function Zg(e,t,n){if(n instanceof Bi){var r=n,i=r.l,a=r.h;return(e^i|t^a)===0}return!1}function Qg(e,t){return e^t}var $g=new L().i(0,`java.lang.Long`,{b4:1,a7:1,a:1,a0:1,X:1,ak:1},(e=>e instanceof Bi)),e_=class extends Em{constructor(e){super(),rd(this,e,null,!0,!0)}};new L().i(e_,`java.lang.NumberFormatException`,{dW:1,b2:1,P:1,H:1,B:1,a:1});function t_(e){for(var t=e.length,n=0,r=0;r!==t;)n=((n<<5)-n|0)+e.charCodeAt(r)|0,r=1+r|0;return n}function n_(e,t){return e===t}var r_=new L().i(0,`java.lang.String`,{e2:1,a:1,a0:1,ay:1,X:1,ak:1},(e=>typeof e==`string`));function i_(){}P=i_.prototype=new Um,P.constructor=i_,P.x=(function(){return 2433880}),P.B=(function(){return`None`}),P.cB=(function(){return 0}),P.cD=(function(){return`None`}),P.cC=(function(e){throw km(new Am,e)}),P.ms=(function(){throw new Rm(`None.get`)}),P.aC=(function(){this.ms()}),new L().i(i_,`scala.None$`,{eq:1,b8:1,b:1,d:1,a8:1,a:1});var a_;function o_(){return a_||=new i_,a_}function s_(e){this.em=null,this.em=e}P=s_.prototype=new Um,P.constructor=s_,P.x=(function(){return q().h1(this,1323286827,!0)}),P.t=(function(e){return this===e||e instanceof s_&&W().n(this.em,e.em)}),P.B=(function(){return tu().lh(this)}),P.cB=(function(){return 1}),P.cD=(function(){return`Some`}),P.cC=(function(e){if(e===0)return this.em;throw km(new Am,e)}),P.aC=(function(){return this.em}),new L().i(s_,`scala.Some`,{b9:1,b8:1,b:1,d:1,a8:1,a:1});function c_(){}P=c_.prototype=new F,P.constructor=c_;function l_(){}l_.prototype=P,P.u=(function(){return-1}),P.b8=(function(e){nl(this,e)}),P.eb=(function(e){return rl(this,e)}),P.e=(function(){return il(this)}),P.bs=(function(e,t,n){return al(this,e,t,n)}),P.dd=(function(e,t,n,r){return sl(this,e,t,n,r)}),P.eU=(function(e){return this.b9().ar(e)}),P.eX=(function(){return this.b9().aO()}),P.bG=(function(){return this.bb()}),P.eT=(function(e){return this.eU(e)});function u_(e){this.fh=null,this.cd=0,this.en=0,this.fh=e,this.cd=0,this.en=wc().bt(this.fh)}P=u_.prototype=new Bp,P.constructor=u_,P.u=(function(){return this.en-this.cd|0}),P.k=(function(){return this.cd<this.en}),P.i=(function(){this.cd>=wc().bt(this.fh)&&If().P.i();var e=tu().dG(this.fh,this.cd);return this.cd=1+this.cd|0,e}),P.di=(function(e){if(e>0){var t=this.cd+e|0;if(t<0)var n=this.en;else var r=this.en,n=r<t?r:t;this.cd=n}return this}),new L().i(u_,`scala.collection.ArrayOps$ArrayIterator`,{eA:1,s:1,b:1,c:1,t:1,a:1});function d_(e,t){return e.gb=t,e.ce=0,e.b1=t.l(),e}function f_(e,t){return t<0?0:t>e.b1?e.b1:t}function p_(){this.gb=null,this.ce=0,this.b1=0}P=p_.prototype=new Bp,P.constructor=p_;function m_(){}m_.prototype=P,P.u=(function(){return this.b1}),P.k=(function(){return this.b1>0}),P.i=(function(){if(this.b1>0){var e=this.gb.r(this.ce);return this.ce=1+this.ce|0,this.b1=this.b1-1|0,e}return If().P.i()}),P.di=(function(e){if(e>0){this.ce=this.ce+e|0;var t=this.b1-e|0;this.b1=t<0?0:t}return this}),P.f2=(function(e,t){var n=f_(this,e),r=f_(this,t)-n|0;return this.b1=r<0?0:r,this.ce=this.ce+n|0,this}),new L().i(p_,`scala.collection.IndexedSeqView$IndexedSeqViewIterator`,{bf:1,s:1,b:1,c:1,t:1,a:1});function h_(){this.eC=null,vg(this,If().P)}P=h_.prototype=new bg,P.constructor=h_,P.lp=(function(e){return this.eC=this.eC.gB(new tp((()=>new Xm(e)))),this}),P.aN=(function(e){return this.lp(e)}),new L().i(h_,`scala.collection.Iterator$$anon$21`,{eJ:1,g7:1,D:1,F:1,K:1,a6:1});function g_(e,t){for(var n=e.j();n.k();){var r=n.i();t.cu(r.aX,r.aP)}}function __(e,t,n,r,i){return sl(new Qm(new Y((e=>{var t=e.aX,n=e.aP;return t+` -> `+n})),e.j()),t,n,r,i)}function v_(e,t){for(var n=e.eX(),r=Sb(new Ob),i=e.j();i.k();){var a=i.i();r.fy(t.g(a))&&n.aN(a)}return n.aU()}function y_(e,t){var n=e.dl().aO();return n.aT(e),n.aT(t),n.aU()}function b_(e){return e.j3||=(e.j2=new Ub(new(rp.r()).C(0)),!0),e.j2}function x_(){this.gf=null,this.j2=null,this.j3=!1,S_=this,this.gf=new Km(this)}P=x_.prototype=new F,P.constructor=x_,P.gJ=(function(e,t){return e instanceof kb?e:this.h6(Lc().kb(e,t))}),P.fH=(function(e){return new rm(new Y((t=>this.h6(cl(t,e)))),(lg(),new ug))}),P.h6=(function(e){if(e===null)return null;if(e instanceof I)return new Ub(e);if(e instanceof ga)return new Vb(e);if(e instanceof ya)return new zb(e);if(e instanceof _a)return new Hb(e);if(e instanceof va)return new Bb(e);if(e instanceof pa)return new Rb(e);if(e instanceof ma)return new Lb(e);if(e instanceof ha)return new Wb(e);if(e instanceof fa)return new Ib(e);if(yc(e,1))return new Gb(e);throw new Vm(e)}),P.gI=(function(e,t){return this.gJ(e,t)}),new L().i(x_,`scala.collection.immutable.ArraySeq$`,{eZ:1,a:1,bd:1,bb:1,bc:1,bj:1});var S_;function C_(){return S_||=new x_,S_}function w_(e,t){if(this.bp=0,this.es=0,this.dw=null,this.be=0,this.ch=null,this.et=null,t===null)throw Nm(new Pm);for(mh(this,e.b4);this.k();){var n=this.dw.eV(this.bp);t.eg(t.c1,this.dw.dj(this.bp),this.dw.cy(this.bp),n,tl().bS(n),0),this.bp=1+this.bp|0}}P=w_.prototype=new bh,P.constructor=w_,P.i=(function(){return If().P.i()}),new L().i(w_,`scala.collection.immutable.HashMapBuilder$$anon$1`,{f3:1,bw:1,s:1,b:1,c:1,t:1});function T_(e){return!!(e&&e.$classData&&e.$classData.n.r)}function E_(e){if(this.cX=0,this.e3=null,e===null)throw Nm(new Pm);Bh(this,e)}P=E_.prototype=new Hh,P.constructor=E_,new L().i(E_,`scala.collection.immutable.Map$Map2$$anon$1`,{fk:1,fl:1,s:1,b:1,c:1,t:1});function D_(e){if(this.cZ=0,this.cY=null,e===null)throw Nm(new Pm);Uh(this,e)}P=D_.prototype=new Gh,P.constructor=D_,new L().i(D_,`scala.collection.immutable.Map$Map3$$anon$4`,{fm:1,fn:1,s:1,b:1,c:1,t:1});function O_(e){if(this.d0=0,this.c3=null,e===null)throw Nm(new Pm);Kh(this,e)}P=O_.prototype=new Jh,P.constructor=O_,new L().i(O_,`scala.collection.immutable.Map$Map4$$anon$7`,{fo:1,fp:1,s:1,b:1,c:1,t:1});function k_(e){this.cT=0,this.fm=null,this.bq=0,this.eu=null,this.ev=null,this.gi=0,this.j8=null,Sh(this,e),this.gi=0}P=k_.prototype=new Oh,P.constructor=k_,P.x=(function(){return q().kN(this.gi,G().J(this.j8),-889275714)}),P.mZ=(function(){return this.k()||If().P.i(),this.gi=this.fm.eV(this.cT),this.j8=this.fm.cy(this.cT),this.cT=this.cT-1|0,this}),P.i=(function(){return this.mZ()}),new L().i(k_,`scala.collection.immutable.MapKeyValueTupleHashIterator`,{fr:1,f0:1,s:1,b:1,c:1,t:1});function A_(e){this.bp=0,this.es=0,this.dw=null,this.be=0,this.ch=null,this.et=null,mh(this,e)}P=A_.prototype=new bh,P.constructor=A_,P.mY=(function(){this.k()||If().P.i();var e=this.dw.kj(this.bp);return this.bp=1+this.bp|0,e}),P.i=(function(){return this.mY()}),new L().i(A_,`scala.collection.immutable.MapKeyValueTupleIterator`,{fs:1,bw:1,s:1,b:1,c:1,t:1});function j_(e){e.bj<=e.an&&If().P.i(),e.d2=1+e.d2|0;for(var t=e.gk.ca(e.d2);t.a.length===0;)e.d2=1+e.d2|0,t=e.gk.ca(e.d2);e.ex=e.dA;var n=e.ja,r=e.d2,i=(n+(n>>>31|0)|0)>>1,a=r-i|0,o=a>>31;e.d1=(1+i|0)-((a^o)-o|0)|0;var s=e.d1;switch(s){case 1:e.aG=t;break;case 2:e.aH=t;break;case 3:e.b5=t;break;case 4:e.bQ=t;break;case 5:e.dz=t;break;case 6:e.gj=t;break;default:throw new Vm(s)}e.dA=e.ex+Math.imul(t.a.length,1<<Math.imul(5,e.d1-1|0))|0,e.dA>e.cn&&(e.dA=e.cn),e.d1>1&&(e.e4=(1<<Math.imul(5,e.d1))-1|0)}function M_(e){var t=(e.an-e.bj|0)+e.cn|0;if(t===e.dA&&j_(e),e.d1>1){var n=t-e.ex|0;N_(e,n,e.e4^n),e.e4=n}e.bj=e.bj-e.an|0;var r=e.aG.a.length,i=e.bj;e.cm=r<i?r:i,e.an=0}function N_(e,t,n){n<1024?e.aG=e.aH.a[31&(t>>>5|0)]:n<32768?(e.aH=e.b5.a[31&(t>>>10|0)],e.aG=e.aH.a[0]):n<1048576?(e.b5=e.bQ.a[31&(t>>>15|0)],e.aH=e.b5.a[0],e.aG=e.aH.a[0]):n<33554432?(e.bQ=e.dz.a[31&(t>>>20|0)],e.b5=e.bQ.a[0],e.aH=e.b5.a[0],e.aG=e.aH.a[0]):(e.dz=e.gj.a[t>>>25|0],e.bQ=e.dz.a[0],e.b5=e.bQ.a[0],e.aH=e.b5.a[0],e.aG=e.aH.a[0])}function P_(e,t,n){n<1024?e.aG=e.aH.a[31&(t>>>5|0)]:n<32768?(e.aH=e.b5.a[31&(t>>>10|0)],e.aG=e.aH.a[31&(t>>>5|0)]):n<1048576?(e.b5=e.bQ.a[31&(t>>>15|0)],e.aH=e.b5.a[31&(t>>>10|0)],e.aG=e.aH.a[31&(t>>>5|0)]):n<33554432?(e.bQ=e.dz.a[31&(t>>>20|0)],e.b5=e.bQ.a[31&(t>>>15|0)],e.aH=e.b5.a[31&(t>>>10|0)],e.aG=e.aH.a[31&(t>>>5|0)]):(e.dz=e.gj.a[t>>>25|0],e.bQ=e.dz.a[31&(t>>>20|0)],e.b5=e.bQ.a[31&(t>>>15|0)],e.aH=e.b5.a[31&(t>>>10|0)],e.aG=e.aH.a[31&(t>>>5|0)])}function F_(e,t,n){this.gk=null,this.cn=0,this.ja=0,this.aG=null,this.aH=null,this.b5=null,this.bQ=null,this.dz=null,this.gj=null,this.cm=0,this.an=0,this.e4=0,this.bj=0,this.d2=0,this.d1=0,this.ex=0,this.dA=0,this.gk=e,this.cn=t,this.ja=n,this.aG=e.c,this.cm=this.aG.a.length,this.an=0,this.e4=0,this.bj=this.cn,this.d2=0,this.d1=1,this.ex=0,this.dA=this.cm}P=F_.prototype=new Bp,P.constructor=F_,P.u=(function(){return this.bj-this.an|0}),P.k=(function(){return this.bj>this.an}),P.i=(function(){this.an===this.cm&&M_(this);var e=this.aG.a[this.an];return this.an=1+this.an|0,e}),P.di=(function(e){if(e>0){var t=((this.an-this.bj|0)+this.cn|0)+e|0,n=this.cn,r=t<n?t:n;if(r===this.cn)this.an=0,this.bj=0,this.cm=0;else{for(;r>=this.dA;)j_(this);var i=r-this.ex|0;this.d1>1&&(P_(this,i,this.e4^i),this.e4=i),this.cm=this.aG.a.length,this.an=31&i,this.bj=this.an+(this.cn-r|0)|0,this.cm>this.bj&&(this.cm=this.bj)}}return this}),P.bs=(function(e,t,n){for(var r=wc().bt(e),i=this.bj-this.an|0,a=n<i?n:i,o=t<0?r:r-t|0,s=o<a?o:a,c=s<0?0:s,l=0,u=e instanceof I;l<c;){this.an===this.cm&&M_(this);var d=c-l|0,f=this.aG.a.length-this.an|0,p=d<f?d:f;if(u){var m=this.aG,h=this.an,g=t+l|0;m.q(h,e,g,p)}else Lc().eP(this.aG,this.an,e,t+l|0,p);this.an=this.an+p|0,l=l+p|0}return c}),new L().i(F_,`scala.collection.immutable.NewVectorIterator`,{fu:1,s:1,b:1,c:1,t:1,z:1});function I_(e){return e.go=0,e.jg=0,e}function L_(){this.go=0,this.jg=0}P=L_.prototype=new F,P.constructor=L_;function R_(){}R_.prototype=P,P.aV=(function(e){this.go<e&&this.nc(e)});function z_(){this.gq=null,this.ji=null,B_=this,this.gq=new Km(this),this.ji=new ax(new I(0))}P=z_.prototype=new F,P.constructor=z_,P.ml=(function(e,t){return this.gU(Lc().kb(e,t))}),P.fH=(function(e){return new rm(new Y((e=>this.gU(e))),new Q_(e.aD()))}),P.gU=(function(e){if(e===null)return null;if(e instanceof I)return new ax(e);if(e instanceof ga)return new rx(e);if(e instanceof ya)return new tx(e);if(e instanceof _a)return new ix(e);if(e instanceof va)return new nx(e);if(e instanceof pa)return new ex(e);if(e instanceof ma)return new $b(e);if(e instanceof ha)return new ox(e);if(e instanceof fa)return new Qb(e);if(yc(e,1))return new sx(e);throw new Vm(e)}),P.gI=(function(e,t){return this.ml(e,t)}),new L().i(z_,`scala.collection.mutable.ArraySeq$`,{fW:1,a:1,bd:1,bb:1,bc:1,bj:1});var B_;function V_(){return B_||=new z_,B_}function H_(e){if(this.da=0,this.cq=null,this.eB=0,this.eA=null,e===null)throw Nm(new Pm);hg(this,e)}P=H_.prototype=new _g,P.constructor=H_,P.gG=(function(e){return e.e8}),new L().i(H_,`scala.collection.mutable.HashSet$$anon$1`,{g2:1,aM:1,s:1,b:1,c:1,t:1});function U_(e){if(this.da=0,this.cq=null,this.eB=0,this.eA=null,e===null)throw Nm(new Pm);hg(this,e)}P=U_.prototype=new _g,P.constructor=U_,P.gG=(function(e){return e}),new L().i(U_,`scala.collection.mutable.HashSet$$anon$2`,{g3:1,aM:1,s:1,b:1,c:1,t:1});function W_(e){if(this.da=0,this.cq=null,this.eB=0,this.eA=null,this.gt=0,this.jm=null,e===null)throw Nm(new Pm);this.jm=e,hg(this,e),this.gt=0}P=W_.prototype=new _g,P.constructor=W_,P.x=(function(){return this.gt}),P.gG=(function(e){return this.gt=Cb(this.jm,e.cr),this}),new L().i(W_,`scala.collection.mutable.HashSet$$anon$3`,{g4:1,aM:1,s:1,b:1,c:1,t:1});function G_(e){this.eD=null,this.eD=e}P=G_.prototype=new F,P.constructor=G_,P.t=(function(e){return Og(this,e)}),P.x=(function(){return G().J(this.eD)}),P.B=(function(){return kg(this,this.eD)}),P.aD=(function(){return this.eD}),P.ba=(function(e){return this.eD.a8.U(e)}),new L().i(G_,`scala.reflect.ClassTag$GenericClassTag`,{gl:1,a:1,O:1,N:1,d:1,C:1});function K_(e){this.dS=null,this.dT=null,this.hE=null,this.hF=!1,yp(this,e,$())}P=K_.prototype=new xp,P.constructor=K_,P.k9=(function(){return this.hF||=(this.hE=this.E(`flex`),!0),this.hE}),new L().i(K_,`com.raquo.laminar.defs.styles.StyleProps$$anon$28`,{cD:1,ar:1,W:1,ao:1,ap:1,cK:1,cH:1});function q_(e){this.dS=null,this.dT=null,this.hK=null,this.hL=!1,yp(this,e,$())}P=q_.prototype=new xp,P.constructor=q_,P.kv=(function(){return this.hL||=(this.hK=yu(this),!0),this.hK}),new L().i(q_,`com.raquo.laminar.defs.styles.StyleProps$$anon$5`,{cG:1,ar:1,W:1,ao:1,ap:1,cL:1,cM:1});function J_(){}P=J_.prototype=new xm,P.constructor=J_;function Y_(){}Y_.prototype=P;function X_(e){return e.bG()+`(<not computed>)`}function Z_(e){return!!(e&&e.$classData&&e.$classData.n.a9)}function Q_(e){this.go=0,this.jg=0,this.e7=null,this.jh=!1,this.gp=null,this.e7=e,I_(this),this.jh=e===Sa.l(),this.gp=[]}P=Q_.prototype=new R_,P.constructor=Q_,P.jF=(function(e){var t=this.jh?sa(e):e===null?Rl().fJ(this.e7):e;return this.gp.push(t),this}),P.lj=(function(e){for(var t=e.j();t.k();)this.jF(t.i());return this}),P.nc=(function(e){}),P.aU=(function(){return Rl().fI(this.e7===ba.l()?bc.l():this.e7===Yl.l()||this.e7===rp.l()?R.l():this.e7,this.gp)}),P.B=(function(){return`ArrayBuilder.generic`}),P.aN=(function(e){return this.jF(e)}),P.aT=(function(e){return this.lj(e)}),new L().i(Q_,`scala.collection.mutable.ArrayBuilder$generic`,{fV:1,fT:1,D:1,F:1,K:1,a6:1,a:1});function $_(e,t){this.gb=null,this.ce=0,this.b1=0,this.jl=null,this.jk=0,this.jl=t,d_(this,e),this.jk=t.a6()|0}P=$_.prototype=new m_,P.constructor=$_,P.k=(function(){return Ul().jP(this.jk,this.jl.a6()|0,`mutation occurred during iteration`),this.b1>0}),new L().i($_,`scala.collection.mutable.CheckedIndexedSeqView$CheckedIterator`,{fZ:1,bf:1,s:1,b:1,c:1,t:1,a:1});function ev(){this.N=null}P=ev.prototype=new F,P.constructor=ev;function tv(){}tv.prototype=P,P.B=(function(){return this.N}),P.t=(function(e){return this===e}),P.x=(function(){return $i(this)});function nv(){}P=nv.prototype=new F,P.constructor=nv;function rv(){}rv.prototype=P;var iv=class e extends Mp{constructor(e){super(),this.bE=null,this.bE=e,rd(this,null,null,!0,!0)}eW(){return Gi(this.bE)}cD(){return`JavaScriptException`}cB(){return 1}cC(e){return e===0?this.bE:G().mG(e)}ed(){return new jg(this)}x(){return q().h1(this,1744042595,!0)}t(t){return this===t||t instanceof e&&W().n(this.bE,t.bE)}};new L().i(iv,`scala.scalajs.js.JavaScriptException`,{bX:1,P:1,H:1,B:1,a:1,a8:1,d:1});function av(e,t){typeof console<`u`&&(e.iB&&console.error?console.error(t):console.log(t))}function ov(e){this.iB=!1,this.ej=null,this.iB=e,new jm,this.ej=``}P=ov.prototype=new Y_,P.constructor=ov,P.mJ=(function(e){for(var t=e;t!==``;){var n=t.indexOf(`
`)|0;if(n<0)this.ej=``+this.ej+t,t=``;else{var r=this.ej,i=t;av(this,``+r+i.substring(0,n)),this.ej=``;var a=t,o=1+n|0;t=a.substring(o)}}}),new L().i(ov,`java.lang.JSConsoleBasedPrintStream`,{dT:1,dH:1,dG:1,aX:1,aV:1,aZ:1,aW:1,aY:1});function sv(e,t,n){for(var r=n,i=t;;)if(i<=0||r.e())return r;else{var a=i-1|0,o=r.p();i=a,r=o}}function cv(e,t){if(e.bl(1)<=0)return e;for(var n=e.eX(),r=Sb(new Ob),i=e.j(),a=!1;i.k();){var o=i.i();r.fy(t.g(o))?n.aN(o):a=!0}return a?n.aU():e}function lv(){this.N=null}P=lv.prototype=new tv,P.constructor=lv;function uv(){}uv.prototype=P,P.aD=(function(){return xa.l()}),P.ba=(function(e){return new fa(e)});function dv(){this.N=null}P=dv.prototype=new tv,P.constructor=dv;function fv(){}fv.prototype=P,P.aD=(function(){return Ca.l()}),P.ba=(function(e){return new ma(e)});function pv(){this.N=null}P=pv.prototype=new tv,P.constructor=pv;function mv(){}mv.prototype=P,P.aD=(function(){return Sa.l()}),P.ba=(function(e){return new pa(e)});function hv(){this.N=null}P=hv.prototype=new tv,P.constructor=hv;function gv(){}gv.prototype=P,P.aD=(function(){return Oa.l()}),P.ba=(function(e){return new ya(e)});function _v(){this.N=null}P=_v.prototype=new tv,P.constructor=_v;function vv(){}vv.prototype=P,P.aD=(function(){return Da.l()}),P.ba=(function(e){return new va(e)});function yv(){this.N=null}P=yv.prototype=new tv,P.constructor=yv;function bv(){}bv.prototype=P,P.aD=(function(){return Ta.l()}),P.ba=(function(e){return new ga(e)});function xv(){this.N=null}P=xv.prototype=new tv,P.constructor=xv;function Sv(){}Sv.prototype=P,P.aD=(function(){return Ea.l()}),P.ba=(function(e){return new _a(e)});function Cv(){this.ct=null}P=Cv.prototype=new rv,P.constructor=Cv;function wv(){}wv.prototype=P,P.B=(function(){return this.ct}),P.t=(function(e){return this===e}),P.x=(function(){return $i(this)});function Tv(){this.N=null}P=Tv.prototype=new tv,P.constructor=Tv;function Ev(){}Ev.prototype=P,P.aD=(function(){return wa.l()}),P.ba=(function(e){return new ha(e)});function Dv(){this.N=null}P=Dv.prototype=new tv,P.constructor=Dv;function Ov(){}Ov.prototype=P,P.aD=(function(){return ba.l()}),P.ba=(function(e){return new(bc.r()).C(e)});function kv(){}P=kv.prototype=new l_,P.constructor=kv;function Av(){}Av.prototype=P,P.b9=(function(){return Hf()}),P.B=(function(){return X_(this)}),P.bb=(function(){return`View`});function jv(e,t){if(e===t)return!0;if(Mv(t)){if(e.aE()===t.aE())try{return e.no(t)}catch(e){throw e}return!1}return!1}function Mv(e){return!!(e&&e.$classData&&e.$classData.n.aE)}function Nv(){this.ct=null,this.ct=`Any`,$()}P=Nv.prototype=new wv,P.constructor=Nv,P.aD=(function(){return R.l()}),P.ba=(function(e){return new I(e)}),new L().i(Nv,`scala.reflect.ManifestFactory$AnyManifest$`,{gm:1,av:1,au:1,a:1,O:1,N:1,d:1,C:1,S:1});var Pv;function Fv(){return Pv||=new Nv,Pv}function Iv(){this.N=null,this.N=`Boolean`}P=Iv.prototype=new uv,P.constructor=Iv,new L().i(Iv,`scala.reflect.ManifestFactory$BooleanManifest$`,{go:1,gn:1,a1:1,a:1,O:1,N:1,d:1,C:1,S:1});var Lv;function Rv(){return Lv||=new Iv,Lv}function zv(){this.N=null,this.N=`Byte`}P=zv.prototype=new fv,P.constructor=zv,new L().i(zv,`scala.reflect.ManifestFactory$ByteManifest$`,{gq:1,gp:1,a1:1,a:1,O:1,N:1,d:1,C:1,S:1});var Bv;function Vv(){return Bv||=new zv,Bv}function Hv(){this.N=null,this.N=`Char`}P=Hv.prototype=new mv,P.constructor=Hv,new L().i(Hv,`scala.reflect.ManifestFactory$CharManifest$`,{gs:1,gr:1,a1:1,a:1,O:1,N:1,d:1,C:1,S:1});var Uv;function Wv(){return Uv||=new Hv,Uv}function Gv(){this.N=null,this.N=`Double`}P=Gv.prototype=new gv,P.constructor=Gv,new L().i(Gv,`scala.reflect.ManifestFactory$DoubleManifest$`,{gu:1,gt:1,a1:1,a:1,O:1,N:1,d:1,C:1,S:1});var Kv;function qv(){return Kv||=new Gv,Kv}function Jv(){this.N=null,this.N=`Float`}P=Jv.prototype=new vv,P.constructor=Jv,new L().i(Jv,`scala.reflect.ManifestFactory$FloatManifest$`,{gw:1,gv:1,a1:1,a:1,O:1,N:1,d:1,C:1,S:1});var Yv;function Xv(){return Yv||=new Jv,Yv}function Zv(){this.N=null,this.N=`Int`}P=Zv.prototype=new bv,P.constructor=Zv,new L().i(Zv,`scala.reflect.ManifestFactory$IntManifest$`,{gy:1,gx:1,a1:1,a:1,O:1,N:1,d:1,C:1,S:1});var Qv;function $v(){return Qv||=new Zv,Qv}function ey(){this.N=null,this.N=`Long`}P=ey.prototype=new Sv,P.constructor=ey,new L().i(ey,`scala.reflect.ManifestFactory$LongManifest$`,{gA:1,gz:1,a1:1,a:1,O:1,N:1,d:1,C:1,S:1});var ty;function ny(){return ty||=new ey,ty}function ry(){this.ct=null,this.ct=`Nothing`,$()}P=ry.prototype=new wv,P.constructor=ry,P.aD=(function(){return rp.l()}),P.ba=(function(e){return new(rp.r()).C(e)}),new L().i(ry,`scala.reflect.ManifestFactory$NothingManifest$`,{gB:1,av:1,au:1,a:1,O:1,N:1,d:1,C:1,S:1});var iy;function ay(){return iy||=new ry,iy}function oy(){this.ct=null,this.ct=`Null`,$()}P=oy.prototype=new wv,P.constructor=oy,P.aD=(function(){return Yl.l()}),P.ba=(function(e){return new(Yl.r()).C(e)}),new L().i(oy,`scala.reflect.ManifestFactory$NullManifest$`,{gC:1,av:1,au:1,a:1,O:1,N:1,d:1,C:1,S:1});var sy;function cy(){return sy||=new oy,sy}function ly(){this.ct=null,this.ct=`Object`,$()}P=ly.prototype=new wv,P.constructor=ly,P.aD=(function(){return R.l()}),P.ba=(function(e){return new I(e)}),new L().i(ly,`scala.reflect.ManifestFactory$ObjectManifest$`,{gD:1,av:1,au:1,a:1,O:1,N:1,d:1,C:1,S:1});var uy;function dy(){return uy||=new ly,uy}function fy(){this.N=null,this.N=`Short`}P=fy.prototype=new Ev,P.constructor=fy,new L().i(fy,`scala.reflect.ManifestFactory$ShortManifest$`,{gF:1,gE:1,a1:1,a:1,O:1,N:1,d:1,C:1,S:1});var py;function my(){return py||=new fy,py}function hy(){this.N=null,this.N=`Unit`}P=hy.prototype=new Ov,P.constructor=hy,new L().i(hy,`scala.reflect.ManifestFactory$UnitManifest$`,{gH:1,gG:1,a1:1,a:1,O:1,N:1,d:1,C:1,S:1});var gy;function _y(){return gy||=new hy,gy}function vy(e,t){return e===t?!0:yy(t)&&t.fC(e)?e.ee(t):!1}function yy(e){return!!(e&&e.$classData&&e.$classData.n.m)}function by(e){this.j0=null,this.j0=e}P=by.prototype=new Av,P.constructor=by,P.j=(function(){return this.j0.a6()}),new L().i(by,`scala.collection.View$$anon$1`,{eV:1,al:1,i:1,b:1,c:1,h:1,g:1,e:1,a:1,a9:1});function xy(e,t){this.fl=null,this.j1=null,this.fl=e,this.j1=t}P=xy.prototype=new Av,P.constructor=xy,P.j=(function(){var e=this.fl.j();return new Zm(this.j1,e)}),P.u=(function(){return this.fl.u()===0?0:-1}),P.e=(function(){return this.fl.e()}),new L().i(xy,`scala.collection.View$DistinctBy`,{eW:1,al:1,i:1,b:1,c:1,h:1,g:1,e:1,a:1,a9:1});function Sy(){}P=Sy.prototype=new l_,P.constructor=Sy;function Cy(){}Cy.prototype=P,P.no=(function(e){return this.eb(e)}),P.t=(function(e){return jv(this,e)}),P.bb=(function(){return`Set`}),P.B=(function(){return qm(this)}),P.g=(function(e){return this.bR(e)});function wy(e,t){if(e===t)return!0;if(Ty(t)){if(e.aE()===t.aE())try{return e.eb(new Y((e=>(t=>W().n(e.dk(t.aX,new tp((()=>Up().iY.a6()))),t.aP)))(t)))}catch(e){throw e}return!1}return!1}function Ty(e){return!!(e&&e.$classData&&e.$classData.n.a3)}function Ey(){}P=Ey.prototype=new l_,P.constructor=Ey;function Dy(){}Dy.prototype=P,P.c7=(function(e){return Jp(this,e)}),P.bl=(function(e){return Af(this,e)}),P.e=(function(){return Yp(this)}),P.ee=(function(e){return Xp(this,e)}),P.fC=(function(e){return!0}),P.t=(function(e){return vy(this,e)}),P.x=(function(){return q().kD(this)}),P.B=(function(){return qm(this)});function Oy(){}P=Oy.prototype=new Av,P.constructor=Oy;function ky(){}ky.prototype=P,P.c7=(function(e){return Jp(this,e)}),P.bl=(function(e){return Af(this,e)}),P.e=(function(){return Yp(this)}),P.bb=(function(){return`SeqView`});function Ay(e){return!!(e&&e.$classData&&e.$classData.n.o)}function jy(e){return!!(e&&e.$classData&&e.$classData.n.am)}function My(){}P=My.prototype=new l_,P.constructor=My;function Ny(){}Ny.prototype=P,P.dH=(function(e){g_(this,e)}),P.dd=(function(e,t,n,r){return __(this,e,t,n,r)}),P.eU=(function(e){return this.kp().ar(e)}),P.t=(function(e){return wy(this,e)}),P.x=(function(){return q().mS(this)}),P.bb=(function(){return`Map`}),P.B=(function(){return qm(this)});function Py(e,t){return e.du=t,e}function Fy(){this.du=null}P=Fy.prototype=new ky,P.constructor=Fy;function Iy(){}Iy.prototype=P,P.r=(function(e){return this.du.r(e)}),P.l=(function(){return this.du.l()}),P.j=(function(){return this.du.j()}),P.u=(function(){return this.du.u()}),P.e=(function(){return this.du.e()}),new L().i(Fy,`scala.collection.SeqView$Id`,{bi:1,aA:1,al:1,i:1,b:1,c:1,h:1,g:1,e:1,a:1,a9:1,l:1,aD:1});function Ly(){this.hA=null,this.hB=!1,this.hs=null,this.ht=!1,this.hq=null,this.hr=!1,this.hu=null,this.hv=!1,this.hw=null,this.hx=!1,this.hy=null,this.hz=!1,this.hp=null,this.kS=null,this.hn=null,this.ho=!1,this.hC=null,this.hD=!1,Io(this),jo(this),ko(this),Ao(this)}P=Ly.prototype=new F,P.constructor=Ly,P.nm=(function(){return this.hB||=(this.hA=Fu(new Iu,`span`,!1),!0),this.hA}),P.jY=(function(){return this.ht||=(this.hs=Fu(new Iu,`div`,!1),!0),this.hs}),P.jX=(function(){return this.hr||=(this.hq=new K_(`display`),!0),this.hq}),P.ka=(function(){return this.hv||=(this.hu=new zg(`flex-direction`),!0),this.hu}),P.mh=(function(){return this.hx||=(this.hw=new Bg(`flex-wrap`),!0),this.hw}),P.ki=(function(){return this.hz||=(this.hy=new q_(`gap`),!0),this.hy}),P.lf=(function(){return this.ho||=(this.hn=new Su(this),!0),this.hn}),P.np=(function(){return this.hD||=(this.hC=new gp(this),!0),this.hC}),new L().i(Ly,`com.raquo.laminar.api.package$$anon$1`,{cs:1,cN:1,cw:1,cB:1,cA:1,cC:1,cy:1,cq:1,cm:1,cp:1,aP:1,aQ:1,aO:1,cn:1});function Ry(e){return!!(e&&e.$classData&&e.$classData.n.a4)}function zy(){}P=zy.prototype=new ky,P.constructor=zy;function By(){}By.prototype=P,P.bl=(function(e){var t=this.l();return t===e?0:t<e?-1:1}),P.u=(function(){return this.l()}),P.bb=(function(){return`IndexedSeqView`});function Vy(e){this.du=null,Py(this,e)}P=Vy.prototype=new Iy,P.constructor=Vy,P.bl=(function(e){var t=this.l();return t===e?0:t<e?-1:1}),P.u=(function(){return this.l()}),P.j=(function(){return d_(new p_,this)}),P.bb=(function(){return`IndexedSeqView`}),new L().i(Vy,`scala.collection.IndexedSeqView$Id`,{eE:1,bi:1,aA:1,al:1,i:1,b:1,c:1,h:1,g:1,e:1,a:1,a9:1,l:1,aD:1,p:1,be:1});function Hy(){}P=Hy.prototype=new Dy,P.constructor=Hy;function Uy(){}Uy.prototype=P;function Wy(e,t){this.gn=null,this.jf=null,this.gn=e,this.jf=t}P=Wy.prototype=new By,P.constructor=Wy,P.r=(function(e){return this.gn.r(e)}),P.l=(function(){return this.gn.aS}),P.bG=(function(){return`ArrayBufferView`}),P.j=(function(){return new $_(this,this.jf)}),new L().i(Wy,`scala.collection.mutable.ArrayBufferView`,{fS:1,ex:1,aA:1,al:1,i:1,b:1,c:1,h:1,g:1,e:1,a:1,a9:1,l:1,aD:1,p:1,be:1});function Gy(){}P=Gy.prototype=new Ny,P.constructor=Gy;function Ky(){}Ky.prototype=P,P.b9=(function(){return em()}),P.kp=(function(){return Xf()});function qy(e,t){return!Yy(t)||e.l()===t.l()}function Jy(e,t){if(Yy(t)){if(e===t)return!0;var n=e.l(),r=n===t.l();if(r){var i=0,a=e.fA(),o=t.fA(),s=a<o?a:o,c=n>>31,l=s>>31,u=s<<1,d=s>>>31|0|l<<1;if(c===d?n>>>0>u>>>0:c>d)var f=s;else var f=n;for(;i<f&&r;)r=W().n(e.r(i),t.r(i)),i=1+i|0;if(i<n&&r)for(var p=e.j().di(i),m=t.j().di(i);r&&p.k();)r=W().n(p.i(),m.i())}return r}return Xp(e,t)}function Yy(e){return!!(e&&e.$classData&&e.$classData.n.x)}function Xy(e,t){return e.bJ=t,e}function Zy(){this.bJ=null}P=Zy.prototype=new Uy,P.constructor=Zy;function Qy(){}Qy.prototype=P;function $y(){}P=$y.prototype=new Dy,P.constructor=$y;function eb(){}eb.prototype=P;function tb(){}P=tb.prototype=new Ky,P.constructor=tb,P.aE=(function(){return 0}),P.u=(function(){return 0}),P.e=(function(){return!0}),P.gA=(function(e){throw new Rm(`key not found: `+e)}),P.bR=(function(e){return!1}),P.dk=(function(e,t){return t.a6()}),P.j=(function(){return If().P}),P.g=(function(e){this.gA(e)}),P.dn=(function(e,t){return new ib(e,t)}),new L().i(tb,`scala.collection.immutable.Map$EmptyMap$`,{fj:1,ai:1,ae:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,ag:1,af:1,d:1,a3:1,r:1,aj:1,a4:1,a:1});var nb;function rb(){return nb||=new tb,nb}function ib(e,t){this.c2=null,this.dx=null,this.c2=e,this.dx=t}P=ib.prototype=new Ky,P.constructor=ib,P.aE=(function(){return 1}),P.u=(function(){return 1}),P.e=(function(){return!1}),P.g=(function(e){if(W().n(e,this.c2))return this.dx;throw new Rm(`key not found: `+e)}),P.bR=(function(e){return W().n(e,this.c2)}),P.dk=(function(e,t){return W().n(e,this.c2)?this.dx:t.a6()}),P.j=(function(){return new Xm(new Gm(this.c2,this.dx))}),P.dL=(function(e,t){return W().n(e,this.c2)?new ib(this.c2,t):new ab(this.c2,this.dx,e,t)}),P.eb=(function(e){return!!e.g(new Gm(this.c2,this.dx))}),P.x=(function(){var e=0,t=0,n=1,r=q().bX(this.c2,this.dx);return e=e+r|0,t^=r,n=Math.imul(n,1|r),r=q().dc,r=q().y(r,e),r=q().y(r,t),r=q().cz(r,n),q().aB(r,1)}),P.dn=(function(e,t){return this.dL(e,t)}),new L().i(ib,`scala.collection.immutable.Map$Map1`,{bA:1,ai:1,ae:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,ag:1,af:1,d:1,a3:1,r:1,aj:1,a4:1,k:1,a:1});function ab(e,t,n,r){this.bK=null,this.cV=null,this.bL=null,this.cW=null,this.bK=e,this.cV=t,this.bL=n,this.cW=r}P=ab.prototype=new Ky,P.constructor=ab,P.aE=(function(){return 2}),P.u=(function(){return 2}),P.e=(function(){return!1}),P.g=(function(e){if(W().n(e,this.bK))return this.cV;if(W().n(e,this.bL))return this.cW;throw new Rm(`key not found: `+e)}),P.bR=(function(e){return W().n(e,this.bK)||W().n(e,this.bL)}),P.dk=(function(e,t){return W().n(e,this.bK)?this.cV:W().n(e,this.bL)?this.cW:t.a6()}),P.j=(function(){return new E_(this)}),P.dL=(function(e,t){return W().n(e,this.bK)?new ab(this.bK,t,this.bL,this.cW):W().n(e,this.bL)?new ab(this.bK,this.cV,this.bL,t):new ob(this.bK,this.cV,this.bL,this.cW,e,t)}),P.eb=(function(e){return!!e.g(new Gm(this.bK,this.cV))&&!!e.g(new Gm(this.bL,this.cW))}),P.x=(function(){var e=0,t=0,n=1,r=q().bX(this.bK,this.cV);return e=e+r|0,t^=r,n=Math.imul(n,1|r),r=q().bX(this.bL,this.cW),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=q().dc,r=q().y(r,e),r=q().y(r,t),r=q().cz(r,n),q().aB(r,2)}),P.dn=(function(e,t){return this.dL(e,t)}),new L().i(ab,`scala.collection.immutable.Map$Map2`,{bB:1,ai:1,ae:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,ag:1,af:1,d:1,a3:1,r:1,aj:1,a4:1,k:1,a:1});function ob(e,t,n,r,i,a){this.bx=null,this.ci=null,this.by=null,this.cj=null,this.bz=null,this.ck=null,this.bx=e,this.ci=t,this.by=n,this.cj=r,this.bz=i,this.ck=a}P=ob.prototype=new Ky,P.constructor=ob,P.aE=(function(){return 3}),P.u=(function(){return 3}),P.e=(function(){return!1}),P.g=(function(e){if(W().n(e,this.bx))return this.ci;if(W().n(e,this.by))return this.cj;if(W().n(e,this.bz))return this.ck;throw new Rm(`key not found: `+e)}),P.bR=(function(e){return W().n(e,this.bx)||W().n(e,this.by)||W().n(e,this.bz)}),P.dk=(function(e,t){return W().n(e,this.bx)?this.ci:W().n(e,this.by)?this.cj:W().n(e,this.bz)?this.ck:t.a6()}),P.j=(function(){return new D_(this)}),P.dL=(function(e,t){return W().n(e,this.bx)?new ob(this.bx,t,this.by,this.cj,this.bz,this.ck):W().n(e,this.by)?new ob(this.bx,this.ci,this.by,t,this.bz,this.ck):W().n(e,this.bz)?new ob(this.bx,this.ci,this.by,this.cj,this.bz,t):new sb(this.bx,this.ci,this.by,this.cj,this.bz,this.ck,e,t)}),P.eb=(function(e){return!!e.g(new Gm(this.bx,this.ci))&&!!e.g(new Gm(this.by,this.cj))&&!!e.g(new Gm(this.bz,this.ck))}),P.x=(function(){var e=0,t=0,n=1,r=q().bX(this.bx,this.ci);return e=e+r|0,t^=r,n=Math.imul(n,1|r),r=q().bX(this.by,this.cj),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=q().bX(this.bz,this.ck),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=q().dc,r=q().y(r,e),r=q().y(r,t),r=q().cz(r,n),q().aB(r,3)}),P.dn=(function(e,t){return this.dL(e,t)}),new L().i(ob,`scala.collection.immutable.Map$Map3`,{bC:1,ai:1,ae:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,ag:1,af:1,d:1,a3:1,r:1,aj:1,a4:1,k:1,a:1});function sb(e,t,n,r,i,a,o,s){this.bf=null,this.bM=null,this.bg=null,this.bN=null,this.bh=null,this.bO=null,this.bi=null,this.bP=null,this.bf=e,this.bM=t,this.bg=n,this.bN=r,this.bh=i,this.bO=a,this.bi=o,this.bP=s}P=sb.prototype=new Ky,P.constructor=sb,P.aE=(function(){return 4}),P.u=(function(){return 4}),P.e=(function(){return!1}),P.g=(function(e){if(W().n(e,this.bf))return this.bM;if(W().n(e,this.bg))return this.bN;if(W().n(e,this.bh))return this.bO;if(W().n(e,this.bi))return this.bP;throw new Rm(`key not found: `+e)}),P.bR=(function(e){return W().n(e,this.bf)||W().n(e,this.bg)||W().n(e,this.bh)||W().n(e,this.bi)}),P.dk=(function(e,t){return W().n(e,this.bf)?this.bM:W().n(e,this.bg)?this.bN:W().n(e,this.bh)?this.bO:W().n(e,this.bi)?this.bP:t.a6()}),P.j=(function(){return new O_(this)}),P.dL=(function(e,t){return W().n(e,this.bf)?new sb(this.bf,t,this.bg,this.bN,this.bh,this.bO,this.bi,this.bP):W().n(e,this.bg)?new sb(this.bf,this.bM,this.bg,t,this.bh,this.bO,this.bi,this.bP):W().n(e,this.bh)?new sb(this.bf,this.bM,this.bg,this.bN,this.bh,t,this.bi,this.bP):W().n(e,this.bi)?new sb(this.bf,this.bM,this.bg,this.bN,this.bh,this.bO,this.bi,t):qf().fn.eh(this.bf,this.bM).eh(this.bg,this.bN).eh(this.bh,this.bO).eh(this.bi,this.bP).eh(e,t)}),P.eb=(function(e){return!!e.g(new Gm(this.bf,this.bM))&&!!e.g(new Gm(this.bg,this.bN))&&!!e.g(new Gm(this.bh,this.bO))&&!!e.g(new Gm(this.bi,this.bP))}),P.lH=(function(e){return e.dD(this.bf,this.bM).dD(this.bg,this.bN).dD(this.bh,this.bO).dD(this.bi,this.bP)}),P.x=(function(){var e=0,t=0,n=1,r=q().bX(this.bf,this.bM);return e=e+r|0,t^=r,n=Math.imul(n,1|r),r=q().bX(this.bg,this.bN),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=q().bX(this.bh,this.bO),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=q().bX(this.bi,this.bP),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=q().dc,r=q().y(r,e),r=q().y(r,t),r=q().cz(r,n),q().aB(r,4)}),P.dn=(function(e,t){return this.dL(e,t)}),new L().i(sb,`scala.collection.immutable.Map$Map4`,{bD:1,ai:1,ae:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,ag:1,af:1,d:1,a3:1,r:1,aj:1,a4:1,k:1,a:1});function cb(){}P=cb.prototype=new Cy,P.constructor=cb;function lb(){}lb.prototype=P,P.aU=(function(){return this});function Q(e){this.ft=null,this.ft=e}P=Q.prototype=new F,P.constructor=Q,P.c7=(function(e){return cv(this,e)}),P.bT=(function(e){return Zp(this,e)}),P.fC=(function(e){return qy(this,e)}),P.ee=(function(e){return Jy(this,e)}),P.fA=(function(){return vl().j4}),P.j=(function(){return d_(new p_,new Vy(this))}),P.bl=(function(e){var t=this.l();return t===e?0:t<e?-1:1}),P.u=(function(){return this.l()}),P.t=(function(e){return vy(this,e)}),P.x=(function(){return q().kD(this)}),P.B=(function(){return qm(this)}),P.e=(function(){return Yp(this)}),P.eX=(function(){return Lg().aO()}),P.b8=(function(e){nl(this,e)}),P.bs=(function(e,t,n){return al(this,e,t,n)}),P.dd=(function(e,t,n,r){return sl(this,e,t,n,r)}),P.dl=(function(){return Lg()}),P.l=(function(){return this.ft.length|0}),P.r=(function(e){return this.ft[e]}),P.bG=(function(){return`WrappedVarArgs`}),P.eT=(function(e){return Lg().gM(e)}),P.g=(function(e){return this.r(e|0)}),P.b9=(function(){return Lg()}),new L().i(Q,`scala.scalajs.runtime.WrappedVarArgs`,{bY:1,x:1,b:1,c:1,h:1,g:1,e:1,r:1,f:1,j:1,l:1,d:1,m:1,v:1,u:1,p:1,o:1,A:1,y:1,k:1,q:1,a:1});function ub(e){this.b4=null,this.b4=e}P=ub.prototype=new Ky,P.constructor=ub,P.kp=(function(){return qf()}),P.u=(function(){return this.b4.aF}),P.aE=(function(){return this.b4.aF}),P.e=(function(){return this.b4.aF===0}),P.j=(function(){return this.e()?If().P:new A_(this.b4)}),P.bR=(function(e){var t=G().J(e),n=tl().bS(t);return this.b4.gC(e,t,n,0)}),P.g=(function(e){var t=G().J(e),n=tl().bS(t);return this.b4.gz(e,t,n,0)}),P.dk=(function(e,t){var n=G().J(e),r=tl().bS(n);return this.b4.gO(e,n,r,0,t)}),P.eh=(function(e,t){var n=G().J(e),r=this.b4.kO(e,t,n,tl().bS(n),0,!0);return r===this.b4?this:new ub(r)}),P.dH=(function(e){this.b4.dH(e)}),P.t=(function(e){if(e instanceof ub){if(this===e)return!0;var t=this.b4,n=e.b4;return t===null?n===null:t.t(n)}return wy(this,e)}),P.x=(function(){if(this.e())return q().gw;var e=new k_(this.b4);return q().h5(e,q().dc)}),P.bG=(function(){return`HashMap`}),P.dn=(function(e,t){return this.eh(e,t)}),new L().i(ub,`scala.collection.immutable.HashMap`,{by:1,ai:1,ae:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,ag:1,af:1,d:1,a3:1,r:1,aj:1,a4:1,k:1,eS:1,fB:1,a:1,T:1});function db(e,t){return Xy(e,t===xl()?null:t),e.aY=t===xl()?null:fd(),e}function fb(e,t,n){return db(e,xl()),e.aY=t,e.bJ=n,e}function pb(e){for(;e.aY===fd();){var t=e.bJ;if(t instanceof nd&&_b(e),Vc(t)){Z().kz();var n=pc().iE;if(e.bJ===t){e.bJ=n;var r=!0}else var r=!1;if(r){var i=null;try{var a=mb(t.a6())}catch(e){i=e instanceof id?e:new iv(e);var a=null}if(i===null){a===null&&Ql().bV();var o=a.bJ}else var o=t;if(Z().kz(),e.bJ,e.bJ=o,i===null&&(a===null&&Ql().bV(),e.aY=a.aY),i!==null){var s=i;s===null&&Ql().bV();var c=s;throw c instanceof iv?c.bE:c}continue}}}}function mb(e){for(;;)if(e.aY!==fd())return e.bJ===null?Z().L:e;else pb(e)}function hb(e,t){return Z(),db(new vb,new tp((()=>mb(e)===Z().L?Z().L:(Z(),fb(new vb,t.g(e.v()),hb(e.aW(),t))))))}function gb(e,t,n,r,i){if(t.m=``+t.m+n,e.aY===fd())t.m+=`<not computed>`;else if(mb(e)!==Z().L){var a=e.v();t.m=``+t.m+a;var o=e,s=e.aW();if(o!==s){o=s;var c=s;if(c.aY!==fd()&&mb(c)!==Z().L)for(s=s.aW();;){if(o!==s)var l=s,u=l.aY!==fd()&&mb(l)!==Z().L;else var u=!1;if(u){var d=o;t.m=``+t.m+r;var f=d.v();t.m=``+t.m+f,o=o.aW(),s=s.aW();var p=s;p.aY!==fd()&&mb(p)!==Z().L&&(s=s.aW())}else break}}var m=s;if(m.aY===fd()||mb(m)===Z().L){for(;o!==s;){var h=o;t.m=``+t.m+r;var g=h.v();t.m=``+t.m+g,o=o.aW()}o.aY===fd()&&(t.m=``+t.m+r,t.m+=`<not computed>`)}else{if(o!==e){for(var _=e;_!==s;)_=_.aW(),s=s.aW();for(;;){var v=o.aW();if(v!==s){var y=o;t.m=``+t.m+r;var b=y.v();t.m=``+t.m+b}if(o=v,o===s)break}}t.m=``+t.m+r,t.m+=`<cycle>`}}return t.m=``+t.m+i,t}function _b(e){throw jp(new Mp,`LazyList evaluation depends on its own result (self-reference); see docs for more info`)}function vb(){this.bJ=null,this.aY=null}P=vb.prototype=new Qy,P.constructor=vb,P.l=(function(){return ah(this)}),P.bl=(function(e){return oh(this,e)}),P.r=(function(e){return sh(this,e)}),P.ee=(function(e){return ch(this,e)}),P.bb=(function(){return`LinearSeq`}),P.e=(function(){return mb(this)===Z().L}),P.u=(function(){return this.aY!==fd()&&mb(this)===Z().L?0:-1}),P.v=(function(){if(mb(this)===Z().L)throw new Rm(`head of empty lazy list`);return this.aY}),P.aW=(function(){if(mb(this)===Z().L)throw new Im(`tail of empty lazy list`);return this.bJ}),P.mj=(function(){var e=this,t=this;for(mb(e)!==Z().L&&(e=e.aW());t!==e;){if(mb(e)===Z().L||(e=e.aW(),mb(e)===Z().L)||(e=e.aW(),e===t))return this;t=t.aW()}return this}),P.j=(function(){return this.aY!==fd()&&mb(this)===Z().L?If().P:new Ih(this)}),P.b8=(function(e){for(var t=this;;)if(mb(t)!==Z().L)e.g(t.v()),t=t.aW();else return}),P.bG=(function(){return`LazyList`}),P.mO=(function(e){return this.aY!==fd()&&mb(this)===Z().L?Z().L:hb(this,e)}),P.m1=(function(e){return e<=0?this:this.aY!==fd()&&mb(this)===Z().L?Z().L:Z().nf(this,e)}),P.dd=(function(e,t,n,r){return this.mj(),gb(this,e.aM,t,n,r),e}),P.B=(function(){return gb(this,Pp(new Fp,`LazyList`),`(`,`, `,`)`).m}),P.b9=(function(){return Z()}),P.p=(function(){return this.aW()}),P.bT=(function(e){return this.mO(e)}),P.jZ=(function(e){return this.m1(e)}),P.g=(function(e){return sh(this,e|0)}),new L().i(vb,`scala.collection.immutable.LazyList`,{bz:1,fd:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,a:1,aB:1,am:1,aG:1,aF:1});function yb(){}P=yb.prototype=new eb,P.constructor=yb;function bb(){}bb.prototype=P,P.aT=(function(e){return hd(this,e)});function xb(e,t,n){return e.gr=n,e.aK=new(Bl.r()).C(Eb(e,t)),e.gs=Db(e,e.aK.a.length),e.d9=0,e}function Sb(e){return xb(e,16,.75),e}function Cb(e,t){return t^(t>>>16|0)}function wb(e,t,n){var r=n&(e.aK.a.length-1|0);matchResult4:{var i=e.aK.a[r];if(i===null){e.aK.a[r]=new zl(t,n,null);break matchResult4}for(var a=null,o=i;o!==null&&o.cr<=n;){if(o.cr===n&&W().n(t,o.e8))return!1;a=o,o=o.aL}if(a===null)e.aK.a[r]=new zl(t,n,i);else{var s=a;s.aL=new zl(t,n,a.aL)}}return e.d9=1+e.d9|0,!0}function Tb(e,t){var n=e.aK.a.length;if(e.gs=Db(e,t),e.d9===0)e.aK=new(Bl.r()).C(t);else{e.aK=V().O(e.aK,t);for(var r=new zl(null,0,null),i=new zl(null,0,null);n<t;){for(var a=0;a<n;){var o=e.aK.a[a];if(o!==null){r.aL=null,i.aL=null;for(var s=r,c=i,l=o;l!==null;){var u=l.aL;if((l.cr&n)===0){var d=s;d.aL=l,s=l}else{var f=c;f.aL=l,c=l}l=u}var p=s;if(p.aL=null,o!==r.aL&&(e.aK.a[a]=r.aL),i.aL!==null){e.aK.a[a+n|0]=i.aL;var m=c;m.aL=null}}a=1+a|0}n<<=1}}}function Eb(e,t){var n=t-1|0,r=n>4?n:4,i=(-2147483648>>Math.clz32(r)&r)<<1;return i<1073741824?i:1073741824}function Db(e,t){return qi(t*e.gr)}function Ob(){this.gr=0,this.aK=null,this.gs=0,this.d9=0}P=Ob.prototype=new lb,P.constructor=Ob,P.aE=(function(){return this.d9}),P.bR=(function(e){var t=Cb(this,G().J(e));matchResult1:{var n,r=this.aK.a[t&(this.aK.a.length-1|0)];if(r===null){var n=null;break matchResult1}var n=r.mg(e,t)}return n!==null}),P.aV=(function(e){var t=Eb(this,qi((1+e|0)/this.gr));t>this.aK.a.length&&Tb(this,t)}),P.fy=(function(e){return(1+this.d9|0)>=this.gs&&Tb(this,this.aK.a.length<<1),wb(this,e,Cb(this,G().J(e)))}),P.jE=(function(e){if(Zf(this,e,0),e instanceof Ob){for(var t=new U_(e);t.k();){var n=t.i();wb(this,n.e8,n.cr)}return this}return hd(this,e)}),P.j=(function(){return new H_(this)}),P.b9=(function(){return ep()}),P.u=(function(){return this.d9}),P.e=(function(){return this.d9===0}),P.bG=(function(){return`HashSet`}),P.x=(function(){var e=new H_(this),t=e.k()?new W_(this):e;return q().h5(t,q().jy)}),P.aT=(function(e){return this.jE(e)}),P.aN=(function(e){return this.fy(e),this}),new L().i(Ob,`scala.collection.mutable.HashSet`,{bQ:1,fP:1,ey:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,eQ:1,d:1,aE:1,G:1,z:1,E:1,D:1,F:1,K:1,at:1,gf:1,ge:1,k:1,a:1});function kb(){}P=kb.prototype=new Uy,P.constructor=kb;function Ab(){}Ab.prototype=P,P.bl=(function(e){var t=this.l();return t===e?0:t<e?-1:1}),P.u=(function(){return this.l()}),P.bb=(function(){return`IndexedSeq`}),P.fC=(function(e){return qy(this,e)}),P.ee=(function(e){return Jy(this,e)}),P.c7=(function(e){return cv(this,e)}),P.eU=(function(e){return C_().gJ(e,this.a7())}),P.eX=(function(){return C_().fH(this.a7())}),P.dl=(function(){return C_().gf}),P.mN=(function(e){for(var t=new I(this.l()),n=0;n<t.a.length;)t.a[n]=e.g(this.r(n)),n=1+n|0;return C_().h6(t)}),P.bG=(function(){return`ArraySeq`}),P.bs=(function(e,t,n){var r=this.l(),i=wc().bt(e),a=n<r?n:r,o=t<0?i:i-t|0,s=o<a?o:a,c=s<0?0:s;return c>0&&Lc().eP(this.c9(),0,e,t,c),c}),P.fA=(function(){return 2147483647}),P.b9=(function(){return C_().gf}),P.bT=(function(e){return this.mN(e)}),P.eT=(function(e){return C_().gJ(e,this.a7())});function jb(e,t){return e.c=t,e}function Mb(){this.c=null}P=Mb.prototype=new Uy,P.constructor=Mb;function Nb(){}Nb.prototype=P,P.bl=(function(e){var t=this.l();return t===e?0:t<e?-1:1}),P.u=(function(){return this.l()}),P.bb=(function(){return`IndexedSeq`}),P.fC=(function(e){return qy(this,e)}),P.ee=(function(e){return Jy(this,e)}),P.c7=(function(e){return cv(this,e)}),P.dl=(function(){return Qh()}),P.l=(function(){return this instanceof lx?this.h:this.c.a.length}),P.j=(function(){return this===_x()?Qh().jc:new F_(this,this.l(),this.cb())}),P.bG=(function(){return`Vector`}),P.bs=(function(e,t,n){return this.j().bs(e,t,n)}),P.fA=(function(){return Qh().jb}),P.aw=(function(e){return hl().gS(e,this.l()-1|0)}),P.b8=(function(e){for(var t=this.cb(),n=0;n<t;){var r=U(),i=n,a=(t+(t>>>31|0)|0)>>1,o=i-a|0,s=o>>31;r.gH(((1+a|0)-((o^s)-s|0)|0)-1|0,this.ca(n),e),n=1+n|0}}),P.b9=(function(){return Qh()});function Pb(){}P=Pb.prototype=new eb,P.constructor=Pb;function Fb(){}Fb.prototype=P,P.bl=(function(e){var t=this.l();return t===e?0:t<e?-1:1}),P.u=(function(){return this.l()}),P.bb=(function(){return`IndexedSeq`}),P.c7=(function(e){return v_(this,e)}),P.dl=(function(){return V_().gq}),P.kh=(function(e){var t=this.a7(),n=null,r=t.aD(),i=r===Sa.l();n=[],e.u();for(var a=e.j();a.k();){var o=a.i(),s=i?sa(o):o===null?Rl().fJ(r):o;n.push(s)}return V_().gU(Rl().fI(r===ba.l()?bc.l():r===Yl.l()||r===rp.l()?R.l():r,n))}),P.eX=(function(){return V_().fH(this.a7())}),P.bG=(function(){return`ArraySeq`}),P.bs=(function(e,t,n){var r=this.l(),i=wc().bt(e),a=n<r?n:r,o=t<0?i:i-t|0,s=o<a?o:a,c=s<0?0:s;return c>0&&Lc().eP(this.bF(),0,e,t,c),c}),P.t=(function(e){return e instanceof Pb&&wc().bt(this.bF())!==wc().bt(e.bF())?!1:vy(this,e)}),P.b9=(function(){return V_().gq}),P.eU=(function(e){return this.kh(e)}),P.eT=(function(e){return this.kh(e)});function Ib(e){this.cM=null,this.cM=e}P=Ib.prototype=new Ab,P.constructor=Ib,P.l=(function(){return this.cM.a.length}),P.eO=(function(e){return this.cM.a[e]}),P.x=(function(){var e=q();return e.aA(this.cM,e.ac)}),P.t=(function(e){return e instanceof Ib?V().k6(this.cM,e.cM):vy(this,e)}),P.j=(function(){return new u_(this.cM)}),P.c9=(function(){return this.cM}),P.a7=(function(){return Rv()}),P.r=(function(e){return this.eO(e)}),P.g=(function(e){return this.eO(e|0)}),new L().i(Ib,`scala.collection.immutable.ArraySeq$ofBoolean`,{bl:1,U:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,A:1,x:1,k:1,q:1,y:1,Y:1,a:1});function Lb(e){this.cN=null,this.cN=e}P=Lb.prototype=new Ab,P.constructor=Lb,P.l=(function(){return this.cN.a.length}),P.eG=(function(e){return this.cN.a[e]}),P.x=(function(){var e=q();return e.aA(this.cN,e.ac)}),P.t=(function(e){return e instanceof Lb?V().k2(this.cN,e.cN):vy(this,e)}),P.j=(function(){return new u_(this.cN)}),P.c9=(function(){return this.cN}),P.a7=(function(){return Vv()}),P.r=(function(e){return this.eG(e)}),P.g=(function(e){return this.eG(e|0)}),new L().i(Lb,`scala.collection.immutable.ArraySeq$ofByte`,{bm:1,U:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,A:1,x:1,k:1,q:1,y:1,Y:1,a:1});function Rb(e){this.cg=null,this.cg=e}P=Rb.prototype=new Ab,P.constructor=Rb,P.l=(function(){return this.cg.a.length}),P.eH=(function(e){return this.cg.a[e]}),P.x=(function(){var e=q();return e.aA(this.cg,e.ac)}),P.t=(function(e){return e instanceof Rb?V().k3(this.cg,e.cg):vy(this,e)}),P.j=(function(){return new u_(this.cg)}),P.dd=(function(e,t,n,r){return new ex(this.cg).dd(e,t,n,r)}),P.c9=(function(){return this.cg}),P.a7=(function(){return Wv()}),P.r=(function(e){return ia(this.eH(e))}),P.g=(function(e){return ia(this.eH(e|0))}),new L().i(Rb,`scala.collection.immutable.ArraySeq$ofChar`,{bn:1,U:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,A:1,x:1,k:1,q:1,y:1,Y:1,a:1});function zb(e){this.cO=null,this.cO=e}P=zb.prototype=new Ab,P.constructor=zb,P.l=(function(){return this.cO.a.length}),P.eI=(function(e){return this.cO.a[e]}),P.x=(function(){var e=q();return e.aA(this.cO,e.ac)}),P.t=(function(e){if(e instanceof zb){var t=this.cO,n=e.cO;if(t===n)return!0;if(t.a.length===n.a.length){for(var r=0;r<t.a.length&&t.a[r]===n.a[r];)r=1+r|0;return r>=t.a.length}return!1}return vy(this,e)}),P.j=(function(){return new u_(this.cO)}),P.c9=(function(){return this.cO}),P.a7=(function(){return qv()}),P.r=(function(e){return this.eI(e)}),P.g=(function(e){return this.eI(e|0)}),new L().i(zb,`scala.collection.immutable.ArraySeq$ofDouble`,{bo:1,U:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,A:1,x:1,k:1,q:1,y:1,Y:1,a:1});function Bb(e){this.cP=null,this.cP=e}P=Bb.prototype=new Ab,P.constructor=Bb,P.l=(function(){return this.cP.a.length}),P.eJ=(function(e){return this.cP.a[e]}),P.x=(function(){var e=q();return e.aA(this.cP,e.ac)}),P.t=(function(e){if(e instanceof Bb){var t=this.cP,n=e.cP;if(t===n)return!0;if(t.a.length===n.a.length){for(var r=0;r<t.a.length&&t.a[r]===n.a[r];)r=1+r|0;return r>=t.a.length}return!1}return vy(this,e)}),P.j=(function(){return new u_(this.cP)}),P.c9=(function(){return this.cP}),P.a7=(function(){return Xv()}),P.r=(function(e){return this.eJ(e)}),P.g=(function(e){return this.eJ(e|0)}),new L().i(Bb,`scala.collection.immutable.ArraySeq$ofFloat`,{bp:1,U:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,A:1,x:1,k:1,q:1,y:1,Y:1,a:1});function Vb(e){this.cQ=null,this.cQ=e}P=Vb.prototype=new Ab,P.constructor=Vb,P.l=(function(){return this.cQ.a.length}),P.eK=(function(e){return this.cQ.a[e]}),P.x=(function(){var e=q();return e.aA(this.cQ,e.ac)}),P.t=(function(e){return e instanceof Vb?V().gE(this.cQ,e.cQ):vy(this,e)}),P.j=(function(){return new u_(this.cQ)}),P.c9=(function(){return this.cQ}),P.a7=(function(){return $v()}),P.r=(function(e){return this.eK(e)}),P.g=(function(e){return this.eK(e|0)}),new L().i(Vb,`scala.collection.immutable.ArraySeq$ofInt`,{bq:1,U:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,A:1,x:1,k:1,q:1,y:1,Y:1,a:1});function Hb(e){this.cR=null,this.cR=e}P=Hb.prototype=new Ab,P.constructor=Hb,P.l=(function(){return this.cR.a.length>>>1|0}),P.eL=(function(e){var t=this.cR.a,n=e<<1;return aa(t[n],t[n+1|0])}),P.x=(function(){var e=q();return e.aA(this.cR,e.ac)}),P.t=(function(e){return e instanceof Hb?V().k4(this.cR,e.cR):vy(this,e)}),P.j=(function(){return new u_(this.cR)}),P.c9=(function(){return this.cR}),P.a7=(function(){return ny()}),P.r=(function(e){return this.eL(e)}),P.g=(function(e){return this.eL(e|0)}),new L().i(Hb,`scala.collection.immutable.ArraySeq$ofLong`,{br:1,U:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,A:1,x:1,k:1,q:1,y:1,Y:1,a:1});function Ub(e){this.c0=null,this.c0=e}P=Ub.prototype=new Ab,P.constructor=Ub,P.a7=(function(){return Kl().jM(Vi(this.c0).a8.Q())}),P.l=(function(){return this.c0.a.length}),P.r=(function(e){return this.c0.a[e]}),P.x=(function(){var e=q();return e.aA(this.c0,e.ac)}),P.t=(function(e){return e instanceof Ub?Lc().k7(this.c0,e.c0):vy(this,e)}),P.j=(function(){return new u_(this.c0)}),P.c9=(function(){return this.c0}),P.g=(function(e){return this.r(e|0)}),new L().i(Ub,`scala.collection.immutable.ArraySeq$ofRef`,{bs:1,U:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,A:1,x:1,k:1,q:1,y:1,Y:1,a:1});function Wb(e){this.cS=null,this.cS=e}P=Wb.prototype=new Ab,P.constructor=Wb,P.l=(function(){return this.cS.a.length}),P.eM=(function(e){return this.cS.a[e]}),P.x=(function(){var e=q();return e.aA(this.cS,e.ac)}),P.t=(function(e){return e instanceof Wb?V().k5(this.cS,e.cS):vy(this,e)}),P.j=(function(){return new u_(this.cS)}),P.c9=(function(){return this.cS}),P.a7=(function(){return my()}),P.r=(function(e){return this.eM(e)}),P.g=(function(e){return this.eM(e|0)}),new L().i(Wb,`scala.collection.immutable.ArraySeq$ofShort`,{bt:1,U:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,A:1,x:1,k:1,q:1,y:1,Y:1,a:1});function Gb(e){this.dv=null,this.dv=e}P=Gb.prototype=new Ab,P.constructor=Gb,P.l=(function(){return this.dv.a.length}),P.eN=(function(e){}),P.x=(function(){var e=q();return e.aA(this.dv,e.ac)}),P.t=(function(e){return e instanceof Gb?this.dv.a.length===e.dv.a.length:vy(this,e)}),P.j=(function(){return new u_(this.dv)}),P.c9=(function(){return this.dv}),P.a7=(function(){return _y()}),P.r=(function(e){this.eN(e)}),P.g=(function(e){this.eN(e|0)}),new L().i(Gb,`scala.collection.immutable.ArraySeq$ofUnit`,{bu:1,U:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,A:1,x:1,k:1,q:1,y:1,Y:1,a:1});function Kb(e,t,n,r){for(var i=r,a=n;;)if(a===t)return!i.e()|0;else{if(!i.e()){var o=1+a|0,s=i.p();a=o,i=s;continue}return-1}}function qb(e,t,n){for(var r=n,i=t;;)if(i===r)return!0;else{var a=i.e(),o=r.e();if(!(a||o)&&W().n(i.v(),r.v())){var s=i.p(),c=r.p();i=s,r=c;continue}return a&&o}}function Jb(){}P=Jb.prototype=new Uy,P.constructor=Jb;function Yb(){}Yb.prototype=P,P.r=(function(e){return sh(this,e)}),P.ee=(function(e){return ch(this,e)}),P.bb=(function(){return`LinearSeq`}),P.j=(function(){return new dh(this)}),P.c7=(function(e){return cv(this,e)}),P.dl=(function(){return zh()}),P.jz=(function(e){if(this.e())return e;if(e.e())return this;for(var t=new fx(e.v(),this),n=t,r=e.p();!r.e();){var i=new fx(r.v(),this);n.am=i,n=i,r=r.p()}return t}),P.e=(function(){return this===$()}),P.h0=(function(e){if(e instanceof Jb)return this.jz(e);if(e.u()===0)return this;if(e instanceof Ox&&this.e())return e.kK();var t=e.j();if(t.k()){for(var n=new fx(t.i(),this),r=n;t.k();){var i=new fx(t.i(),this);r.am=i,r=i}return n}return this}),P.jK=(function(e){return e instanceof Jb?e.jz(this):y_(this,e)}),P.mP=(function(e){if(this===$())var t=$();else{for(var n=new fx(e.g(this.v()),$()),r=n,i=this.p();i!==$();){var a=new fx(e.g(i.v()),$());r.am=a,r=a,i=i.p()}var t=n}return t}),P.b8=(function(e){for(var t=this;!t.e();)e.g(t.v()),t=t.p()}),P.l=(function(){for(var e=this,t=0;!e.e();)t=1+t|0,e=e.p();return t}),P.bl=(function(e){return e<0?1:Kb(this,e,0,this)}),P.bR=(function(e){for(var t=this;!t.e();){if(W().n(t.v(),e))return!0;t=t.p()}return!1}),P.bG=(function(){return`List`}),P.t=(function(e){return e instanceof Jb?qb(this,this,e):vy(this,e)}),P.b9=(function(){return zh()}),P.bT=(function(e){return this.mP(e)}),P.jZ=(function(e){return sv(this,e,this)}),P.g=(function(e){return sh(this,e|0)});function Xb(){this.c=null}P=Xb.prototype=new Nb,P.constructor=Xb;function Zb(){}Zb.prototype=P;function Qb(e){this.d3=null,this.d3=e}P=Qb.prototype=new Fb,P.constructor=Qb,P.l=(function(){return this.d3.a.length}),P.eO=(function(e){return this.d3.a[e]}),P.x=(function(){var e=q();return e.aA(this.d3,e.ac)}),P.t=(function(e){return e instanceof Qb?V().k6(this.d3,e.d3):Pb.prototype.t.call(this,e)}),P.j=(function(){return new u_(this.d3)}),P.bF=(function(){return this.d3}),P.a7=(function(){return Rv()}),P.r=(function(e){return this.eO(e)}),P.g=(function(e){return this.eO(e|0)}),new L().i(Qb,`scala.collection.mutable.ArraySeq$ofBoolean`,{bG:1,V:1,J:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,G:1,z:1,E:1,M:1,L:1,p:1,o:1,R:1,Q:1,k:1,q:1,a:1});function $b(e){this.d4=null,this.d4=e}P=$b.prototype=new Fb,P.constructor=$b,P.l=(function(){return this.d4.a.length}),P.eG=(function(e){return this.d4.a[e]}),P.x=(function(){var e=q();return e.aA(this.d4,e.ac)}),P.t=(function(e){return e instanceof $b?V().k2(this.d4,e.d4):Pb.prototype.t.call(this,e)}),P.j=(function(){return new u_(this.d4)}),P.bF=(function(){return this.d4}),P.a7=(function(){return Vv()}),P.r=(function(e){return this.eG(e)}),P.g=(function(e){return this.eG(e|0)}),new L().i($b,`scala.collection.mutable.ArraySeq$ofByte`,{bH:1,V:1,J:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,G:1,z:1,E:1,M:1,L:1,p:1,o:1,R:1,Q:1,k:1,q:1,a:1});function ex(e){this.br=null,this.br=e}P=ex.prototype=new Fb,P.constructor=ex,P.l=(function(){return this.br.a.length}),P.eH=(function(e){return this.br.a[e]}),P.x=(function(){var e=q();return e.aA(this.br,e.ac)}),P.t=(function(e){return e instanceof ex?V().k3(this.br,e.br):Pb.prototype.t.call(this,e)}),P.j=(function(){return new u_(this.br)}),P.dd=(function(e,t,n,r){var i=e.aM;t.length!==0&&(i.m=``+i.m+t);var a=this.br.a.length;if(a!==0){if(n===``)i.jI(this.br);else{i.l();var o=this.br.a[0],s=``+Ji(o);i.m+=s;for(var c=1;c<a;){i.m=``+i.m+n;var l=this.br.a[c],u=``+Ji(l);i.m+=u,c=1+c|0}}}return r.length!==0&&(i.m=``+i.m+r),e}),P.bF=(function(){return this.br}),P.a7=(function(){return Wv()}),P.r=(function(e){return ia(this.eH(e))}),P.g=(function(e){return ia(this.eH(e|0))}),new L().i(ex,`scala.collection.mutable.ArraySeq$ofChar`,{bI:1,V:1,J:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,G:1,z:1,E:1,M:1,L:1,p:1,o:1,R:1,Q:1,k:1,q:1,a:1});function tx(e){this.bA=null,this.bA=e}P=tx.prototype=new Fb,P.constructor=tx,P.l=(function(){return this.bA.a.length}),P.eI=(function(e){return this.bA.a[e]}),P.x=(function(){var e=q();return e.aA(this.bA,e.ac)}),P.t=(function(e){if(e instanceof tx){var t=e.bA;if(this.bA===t)return!0;if(this.bA.a.length===t.a.length){for(var n=0;n<this.bA.a.length&&this.bA.a[n]===t.a[n];)n=1+n|0;return n>=this.bA.a.length}return!1}return Pb.prototype.t.call(this,e)}),P.j=(function(){return new u_(this.bA)}),P.bF=(function(){return this.bA}),P.a7=(function(){return qv()}),P.r=(function(e){return this.eI(e)}),P.g=(function(e){return this.eI(e|0)}),new L().i(tx,`scala.collection.mutable.ArraySeq$ofDouble`,{bJ:1,V:1,J:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,G:1,z:1,E:1,M:1,L:1,p:1,o:1,R:1,Q:1,k:1,q:1,a:1});function nx(e){this.bB=null,this.bB=e}P=nx.prototype=new Fb,P.constructor=nx,P.l=(function(){return this.bB.a.length}),P.eJ=(function(e){return this.bB.a[e]}),P.x=(function(){var e=q();return e.aA(this.bB,e.ac)}),P.t=(function(e){if(e instanceof nx){var t=e.bB;if(this.bB===t)return!0;if(this.bB.a.length===t.a.length){for(var n=0;n<this.bB.a.length&&this.bB.a[n]===t.a[n];)n=1+n|0;return n>=this.bB.a.length}return!1}return Pb.prototype.t.call(this,e)}),P.j=(function(){return new u_(this.bB)}),P.bF=(function(){return this.bB}),P.a7=(function(){return Xv()}),P.r=(function(e){return this.eJ(e)}),P.g=(function(e){return this.eJ(e|0)}),new L().i(nx,`scala.collection.mutable.ArraySeq$ofFloat`,{bK:1,V:1,J:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,G:1,z:1,E:1,M:1,L:1,p:1,o:1,R:1,Q:1,k:1,q:1,a:1});function rx(e){this.d5=null,this.d5=e}P=rx.prototype=new Fb,P.constructor=rx,P.l=(function(){return this.d5.a.length}),P.eK=(function(e){return this.d5.a[e]}),P.x=(function(){var e=q();return e.aA(this.d5,e.ac)}),P.t=(function(e){return e instanceof rx?V().gE(this.d5,e.d5):Pb.prototype.t.call(this,e)}),P.j=(function(){return new u_(this.d5)}),P.bF=(function(){return this.d5}),P.a7=(function(){return $v()}),P.r=(function(e){return this.eK(e)}),P.g=(function(e){return this.eK(e|0)}),new L().i(rx,`scala.collection.mutable.ArraySeq$ofInt`,{bL:1,V:1,J:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,G:1,z:1,E:1,M:1,L:1,p:1,o:1,R:1,Q:1,k:1,q:1,a:1});function ix(e){this.d6=null,this.d6=e}P=ix.prototype=new Fb,P.constructor=ix,P.l=(function(){return this.d6.a.length>>>1|0}),P.eL=(function(e){var t=this.d6.a,n=e<<1;return aa(t[n],t[n+1|0])}),P.x=(function(){var e=q();return e.aA(this.d6,e.ac)}),P.t=(function(e){return e instanceof ix?V().k4(this.d6,e.d6):Pb.prototype.t.call(this,e)}),P.j=(function(){return new u_(this.d6)}),P.bF=(function(){return this.d6}),P.a7=(function(){return ny()}),P.r=(function(e){return this.eL(e)}),P.g=(function(e){return this.eL(e|0)}),new L().i(ix,`scala.collection.mutable.ArraySeq$ofLong`,{bM:1,V:1,J:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,G:1,z:1,E:1,M:1,L:1,p:1,o:1,R:1,Q:1,k:1,q:1,a:1});function ax(e){this.cp=null,this.cp=e}P=ax.prototype=new Fb,P.constructor=ax,P.a7=(function(){return Kl().jM(Vi(this.cp).a8.Q())}),P.l=(function(){return this.cp.a.length}),P.r=(function(e){return this.cp.a[e]}),P.x=(function(){var e=q();return e.aA(this.cp,e.ac)}),P.t=(function(e){return e instanceof ax?Lc().k7(this.cp,e.cp):Pb.prototype.t.call(this,e)}),P.j=(function(){return new u_(this.cp)}),P.bF=(function(){return this.cp}),P.g=(function(e){return this.r(e|0)}),new L().i(ax,`scala.collection.mutable.ArraySeq$ofRef`,{bN:1,V:1,J:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,G:1,z:1,E:1,M:1,L:1,p:1,o:1,R:1,Q:1,k:1,q:1,a:1});function ox(e){this.d7=null,this.d7=e}P=ox.prototype=new Fb,P.constructor=ox,P.l=(function(){return this.d7.a.length}),P.eM=(function(e){return this.d7.a[e]}),P.x=(function(){var e=q();return e.aA(this.d7,e.ac)}),P.t=(function(e){return e instanceof ox?V().k5(this.d7,e.d7):Pb.prototype.t.call(this,e)}),P.j=(function(){return new u_(this.d7)}),P.bF=(function(){return this.d7}),P.a7=(function(){return my()}),P.r=(function(e){return this.eM(e)}),P.g=(function(e){return this.eM(e|0)}),new L().i(ox,`scala.collection.mutable.ArraySeq$ofShort`,{bO:1,V:1,J:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,G:1,z:1,E:1,M:1,L:1,p:1,o:1,R:1,Q:1,k:1,q:1,a:1});function sx(e){this.dB=null,this.dB=e}P=sx.prototype=new Fb,P.constructor=sx,P.l=(function(){return this.dB.a.length}),P.eN=(function(e){}),P.x=(function(){var e=q();return e.aA(this.dB,e.ac)}),P.t=(function(e){return e instanceof sx?this.dB.a.length===e.dB.a.length:Pb.prototype.t.call(this,e)}),P.j=(function(){return new u_(this.dB)}),P.bF=(function(){return this.dB}),P.a7=(function(){return _y()}),P.r=(function(e){this.eN(e)}),P.g=(function(e){this.eN(e|0)}),new L().i(sx,`scala.collection.mutable.ArraySeq$ofUnit`,{bP:1,V:1,J:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,G:1,z:1,E:1,M:1,L:1,p:1,o:1,R:1,Q:1,k:1,q:1,a:1});function cx(e,t,n,r){return e.f=n,e.h=r,jb(e,t),e}function lx(){this.c=null,this.f=null,this.h=0}P=lx.prototype=new Zb,P.constructor=lx;function ux(){}ux.prototype=P;function dx(e){this.c=null,jb(this,e)}P=dx.prototype=new Zb,P.constructor=dx,P.r=(function(e){if(e>=0&&e<this.c.a.length)return this.c.a[e];throw this.aw(e)}),P.dm=(function(e,t){if(e>=0&&e<this.c.a.length){var n=this.c.d();return n.a[e]=t,new dx(n)}throw this.aw(e)}),P.de=(function(e){if(this.c.a.length<32)return new dx(U().ea(this.c,e));var t=this.c,n=U().b7,r=new I(1);return r.a[0]=e,new vx(t,32,n,r,33)}),P.bU=(function(e){return new dx(U().bH(this.c,e))}),P.cb=(function(){return 1}),P.ca=(function(e){return this.c}),P.g=(function(e){var t=e|0;if(t>=0&&t<this.c.a.length)return this.c.a[t];throw this.aw(t)}),P.bT=(function(e){return this.bU(e)}),new L().i(dx,`scala.collection.immutable.Vector1`,{fF:1,ab:1,a5:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,A:1,x:1,k:1,q:1,y:1,a:1,T:1});function fx(e,t){this.ge=null,this.am=null,this.ge=e,this.am=t}P=fx.prototype=new Yb,P.constructor=fx,P.ed=(function(){return new Wm(this)}),P.cB=(function(){return 2}),P.cD=(function(){return`::`}),P.cC=(function(e){if(e===0)return this.ge;if(e===1)return this.am;throw km(new Am,e)}),P.v=(function(){return this.ge}),P.p=(function(){return this.am}),new L().i(fx,`scala.collection.immutable.$colon$colon`,{eY:1,aH:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,aB:1,am:1,aG:1,aF:1,k:1,q:1,bk:1,y:1,a:1,T:1,a8:1});function px(){mx=this,$(),$()}P=px.prototype=new Yb,P.constructor=px,P.ed=(function(){return new Wm(this)}),P.cB=(function(){return 0}),P.cD=(function(){return`Nil`}),P.cC=(function(e){throw km(new Am,e)}),P.mA=(function(){throw new Rm(`head of empty list`)}),P.ns=(function(){throw new Im(`tail of empty list`)}),P.u=(function(){return 0}),P.j=(function(){return If().P}),P.v=(function(){this.mA()}),P.p=(function(){this.ns()}),new L().i(px,`scala.collection.immutable.Nil$`,{fv:1,aH:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,aB:1,am:1,aG:1,aF:1,k:1,q:1,bk:1,y:1,a:1,T:1,a8:1});var mx;function $(){return mx||=new px,mx}function hx(){this.c=null,this.f=null,this.h=0,cx(this,U().gl,U().gl,0)}P=hx.prototype=new ux,P.constructor=hx,P.jL=(function(e){throw this.aw(e)}),P.dm=(function(e,t){throw this.aw(e)}),P.de=(function(e){var t=new I(1);return t.a[0]=e,new dx(t)}),P.cb=(function(){return 0}),P.ca=(function(e){return null}),P.t=(function(e){return this===e||(e instanceof Mb?!1:vy(this,e))}),P.aw=(function(e){return Om(new Am,e+` is out of bounds (empty vector)`)}),P.r=(function(e){this.jL(e)}),P.g=(function(e){this.jL(e|0)}),P.bT=(function(e){return this}),new L().i(hx,`scala.collection.immutable.Vector0$`,{fE:1,aa:1,ab:1,a5:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,A:1,x:1,k:1,q:1,y:1,a:1,T:1});var gx;function _x(){return gx||=new hx,gx}function vx(e,t,n,r,i){this.c=null,this.f=null,this.h=0,this.bk=0,this.b2=null,this.bk=t,this.b2=n,cx(this,e,r,i)}P=vx.prototype=new ux,P.constructor=vx,P.r=(function(e){if(e>=0&&e<this.h){var t=e-this.bk|0;if(t>=0){var n=t>>>5|0,r=31&t;return n<this.b2.a.length?this.b2.a[n].a[r]:this.f.a[31&t]}return this.c.a[e]}throw this.aw(e)}),P.dm=(function(e,t){if(e>=0&&e<this.h){if(e>=this.bk){var n=e-this.bk|0,r=n>>>5|0,i=31&n;if(r<this.b2.a.length){var a=this.b2.d(),o=a.a[r].d();return o.a[i]=t,a.a[r]=o,new vx(this.c,this.bk,a,this.f,this.h)}var s=this.f.d();return s.a[i]=t,new vx(this.c,this.bk,this.b2,s,this.h)}var c=this.c.d();return c.a[e]=t,new vx(c,this.bk,this.b2,this.f,this.h)}throw this.aw(e)}),P.de=(function(e){if(this.f.a.length<32){var t=U().ea(this.f,e),n=1+this.h|0;return new vx(this.c,this.bk,this.b2,t,n)}if(this.b2.a.length<30){var r=U().z(this.b2,this.f),i=new I(1);i.a[0]=e;var a=1+this.h|0;return new vx(this.c,this.bk,r,i,a)}var o=this.c,s=this.bk,c=this.b2,l=this.bk,u=U().c4,d=this.f,f=new(R.r().r()).C(1);f.a[0]=d;var p=new I(1);return p.a[0]=e,new yx(o,s,c,960+l|0,u,f,p,1+this.h|0)}),P.bU=(function(e){var t=U().bH(this.c,e),n=U().W(2,this.b2,e),r=U().bH(this.f,e);return new vx(t,this.bk,n,r,this.h)}),P.cb=(function(){return 3}),P.ca=(function(e){switch(e){case 0:return this.c;case 1:return this.b2;case 2:return this.f;default:throw new Vm(e)}}),P.g=(function(e){var t=e|0;if(t>=0&&t<this.h){var n=t-this.bk|0;if(n>=0){var r=n>>>5|0,i=31&n;return r<this.b2.a.length?this.b2.a[r].a[i]:this.f.a[31&n]}return this.c.a[t]}throw this.aw(t)}),P.bT=(function(e){return this.bU(e)}),new L().i(vx,`scala.collection.immutable.Vector2`,{fG:1,aa:1,ab:1,a5:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,A:1,x:1,k:1,q:1,y:1,a:1,T:1});function yx(e,t,n,r,i,a,o,s){this.c=null,this.f=null,this.h=0,this.aZ=0,this.b6=null,this.b0=0,this.aI=null,this.aJ=null,this.aZ=t,this.b6=n,this.b0=r,this.aI=i,this.aJ=a,cx(this,e,o,s)}P=yx.prototype=new ux,P.constructor=yx,P.r=(function(e){if(e>=0&&e<this.h){var t=e-this.b0|0;if(t>=0){var n=t>>>10|0,r=31&(t>>>5|0),i=31&t;return n<this.aI.a.length?this.aI.a[n].a[r].a[i]:r<this.aJ.a.length?this.aJ.a[r].a[i]:this.f.a[i]}if(e>=this.aZ){var a=e-this.aZ|0;return this.b6.a[a>>>5|0].a[31&a]}return this.c.a[e]}throw this.aw(e)}),P.dm=(function(e,t){if(e>=0&&e<this.h){if(e>=this.b0){var n=e-this.b0|0,r=n>>>10|0,i=31&(n>>>5|0),a=31&n;if(r<this.aI.a.length){var o=this.aI.d(),s=o.a[r].d(),c=s.a[i].d();return c.a[a]=t,s.a[i]=c,o.a[r]=s,new yx(this.c,this.aZ,this.b6,this.b0,o,this.aJ,this.f,this.h)}if(i<this.aJ.a.length){var l=this.aJ.d(),u=l.a[i].d();return u.a[a]=t,l.a[i]=u,new yx(this.c,this.aZ,this.b6,this.b0,this.aI,l,this.f,this.h)}var d=this.f.d();return d.a[a]=t,new yx(this.c,this.aZ,this.b6,this.b0,this.aI,this.aJ,d,this.h)}if(e>=this.aZ){var f=e-this.aZ|0,p=this.b6,m=f>>>5|0,h=31&f,g=p.d(),_=g.a[m].d();return _.a[h]=t,g.a[m]=_,new yx(this.c,this.aZ,g,this.b0,this.aI,this.aJ,this.f,this.h)}var v=this.c.d();return v.a[e]=t,new yx(v,this.aZ,this.b6,this.b0,this.aI,this.aJ,this.f,this.h)}throw this.aw(e)}),P.de=(function(e){if(this.f.a.length<32){var t=U().ea(this.f,e),n=1+this.h|0;return new yx(this.c,this.aZ,this.b6,this.b0,this.aI,this.aJ,t,n)}if(this.aJ.a.length<31){var r=U().z(this.aJ,this.f),i=new I(1);i.a[0]=e;var a=1+this.h|0;return new yx(this.c,this.aZ,this.b6,this.b0,this.aI,r,i,a)}if(this.aI.a.length<30){var o=U().z(this.aI,U().z(this.aJ,this.f)),s=new I(1);s.a[0]=e;var c=1+this.h|0;return new yx(this.c,this.aZ,this.b6,this.b0,o,U().b7,s,c)}var l=this.c,u=this.aZ,d=this.b6,f=this.b0,p=this.aI,m=this.b0,h=U().e5,g=U().z(this.aJ,this.f),_=new(R.r().r().r()).C(1);_.a[0]=g;var v=U().b7,y=new I(1);return y.a[0]=e,new bx(l,u,d,f,p,30720+m|0,h,_,v,y,1+this.h|0)}),P.bU=(function(e){var t=U().bH(this.c,e),n=U().W(2,this.b6,e),r=U().W(3,this.aI,e),i=U().W(2,this.aJ,e),a=U().bH(this.f,e);return new yx(t,this.aZ,n,this.b0,r,i,a,this.h)}),P.cb=(function(){return 5}),P.ca=(function(e){switch(e){case 0:return this.c;case 1:return this.b6;case 2:return this.aI;case 3:return this.aJ;case 4:return this.f;default:throw new Vm(e)}}),P.g=(function(e){var t=e|0;if(t>=0&&t<this.h){var n=t-this.b0|0;if(n>=0){var r=n>>>10|0,i=31&(n>>>5|0),a=31&n;return r<this.aI.a.length?this.aI.a[r].a[i].a[a]:i<this.aJ.a.length?this.aJ.a[i].a[a]:this.f.a[a]}if(t>=this.aZ){var o=t-this.aZ|0;return this.b6.a[o>>>5|0].a[31&o]}return this.c.a[t]}throw this.aw(t)}),P.bT=(function(e){return this.bU(e)}),new L().i(yx,`scala.collection.immutable.Vector3`,{fH:1,aa:1,ab:1,a5:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,A:1,x:1,k:1,q:1,y:1,a:1,T:1});function bx(e,t,n,r,i,a,o,s,c,l,u){this.c=null,this.f=null,this.h=0,this.ax=0,this.aQ=null,this.ay=0,this.aR=null,this.az=0,this.ao=null,this.aq=null,this.ap=null,this.ax=t,this.aQ=n,this.ay=r,this.aR=i,this.az=a,this.ao=o,this.aq=s,this.ap=c,cx(this,e,l,u)}P=bx.prototype=new ux,P.constructor=bx,P.r=(function(e){if(e>=0&&e<this.h){var t=e-this.az|0;if(t>=0){var n=t>>>15|0,r=31&(t>>>10|0),i=31&(t>>>5|0),a=31&t;return n<this.ao.a.length?this.ao.a[n].a[r].a[i].a[a]:r<this.aq.a.length?this.aq.a[r].a[i].a[a]:i<this.ap.a.length?this.ap.a[i].a[a]:this.f.a[a]}if(e>=this.ay){var o=e-this.ay|0;return this.aR.a[o>>>10|0].a[31&(o>>>5|0)].a[31&o]}if(e>=this.ax){var s=e-this.ax|0;return this.aQ.a[s>>>5|0].a[31&s]}return this.c.a[e]}throw this.aw(e)}),P.dm=(function(e,t){if(e>=0&&e<this.h){if(e>=this.az){var n=e-this.az|0,r=n>>>15|0,i=31&(n>>>10|0),a=31&(n>>>5|0),o=31&n;if(r<this.ao.a.length){var s=this.ao.d(),c=s.a[r].d(),l=c.a[i].d(),u=l.a[a].d();return u.a[o]=t,l.a[a]=u,c.a[i]=l,s.a[r]=c,new bx(this.c,this.ax,this.aQ,this.ay,this.aR,this.az,s,this.aq,this.ap,this.f,this.h)}if(i<this.aq.a.length){var d=this.aq.d(),f=d.a[i].d(),p=f.a[a].d();return p.a[o]=t,f.a[a]=p,d.a[i]=f,new bx(this.c,this.ax,this.aQ,this.ay,this.aR,this.az,this.ao,d,this.ap,this.f,this.h)}if(a<this.ap.a.length){var m=this.ap.d(),h=m.a[a].d();return h.a[o]=t,m.a[a]=h,new bx(this.c,this.ax,this.aQ,this.ay,this.aR,this.az,this.ao,this.aq,m,this.f,this.h)}var g=this.f.d();return g.a[o]=t,new bx(this.c,this.ax,this.aQ,this.ay,this.aR,this.az,this.ao,this.aq,this.ap,g,this.h)}if(e>=this.ay){var _=e-this.ay|0,v=this.aR,y=_>>>10|0,b=31&(_>>>5|0),x=31&_,S=v.d(),C=S.a[y].d(),w=C.a[b].d();return w.a[x]=t,C.a[b]=w,S.a[y]=C,new bx(this.c,this.ax,this.aQ,this.ay,S,this.az,this.ao,this.aq,this.ap,this.f,this.h)}if(e>=this.ax){var T=e-this.ax|0,ee=this.aQ,te=T>>>5|0,ne=31&T,E=ee.d(),re=E.a[te].d();return re.a[ne]=t,E.a[te]=re,new bx(this.c,this.ax,E,this.ay,this.aR,this.az,this.ao,this.aq,this.ap,this.f,this.h)}var ie=this.c.d();return ie.a[e]=t,new bx(ie,this.ax,this.aQ,this.ay,this.aR,this.az,this.ao,this.aq,this.ap,this.f,this.h)}throw this.aw(e)}),P.de=(function(e){if(this.f.a.length<32){var t=U().ea(this.f,e),n=1+this.h|0;return new bx(this.c,this.ax,this.aQ,this.ay,this.aR,this.az,this.ao,this.aq,this.ap,t,n)}if(this.ap.a.length<31){var r=U().z(this.ap,this.f),i=new I(1);i.a[0]=e;var a=1+this.h|0;return new bx(this.c,this.ax,this.aQ,this.ay,this.aR,this.az,this.ao,this.aq,r,i,a)}if(this.aq.a.length<31){var o=U().z(this.aq,U().z(this.ap,this.f)),s=new I(1);s.a[0]=e;var c=1+this.h|0;return new bx(this.c,this.ax,this.aQ,this.ay,this.aR,this.az,this.ao,o,U().b7,s,c)}if(this.ao.a.length<30){var l=U().z(this.ao,U().z(this.aq,U().z(this.ap,this.f))),u=new I(1);u.a[0]=e;var d=1+this.h|0;return new bx(this.c,this.ax,this.aQ,this.ay,this.aR,this.az,l,U().c4,U().b7,u,d)}var f=this.c,p=this.ax,m=this.aQ,h=this.ay,g=this.aR,_=this.az,v=this.ao,y=this.az,b=U().gm,x=U().z(this.aq,U().z(this.ap,this.f)),S=new(R.r().r().r().r()).C(1);S.a[0]=x;var C=U().c4,w=U().b7,T=new I(1);return T.a[0]=e,new xx(f,p,m,h,g,_,v,983040+y|0,b,S,C,w,T,1+this.h|0)}),P.bU=(function(e){var t=U().bH(this.c,e),n=U().W(2,this.aQ,e),r=U().W(3,this.aR,e),i=U().W(4,this.ao,e),a=U().W(3,this.aq,e),o=U().W(2,this.ap,e),s=U().bH(this.f,e);return new bx(t,this.ax,n,this.ay,r,this.az,i,a,o,s,this.h)}),P.cb=(function(){return 7}),P.ca=(function(e){switch(e){case 0:return this.c;case 1:return this.aQ;case 2:return this.aR;case 3:return this.ao;case 4:return this.aq;case 5:return this.ap;case 6:return this.f;default:throw new Vm(e)}}),P.g=(function(e){var t=e|0;if(t>=0&&t<this.h){var n=t-this.az|0;if(n>=0){var r=n>>>15|0,i=31&(n>>>10|0),a=31&(n>>>5|0),o=31&n;return r<this.ao.a.length?this.ao.a[r].a[i].a[a].a[o]:i<this.aq.a.length?this.aq.a[i].a[a].a[o]:a<this.ap.a.length?this.ap.a[a].a[o]:this.f.a[o]}if(t>=this.ay){var s=t-this.ay|0;return this.aR.a[s>>>10|0].a[31&(s>>>5|0)].a[31&s]}if(t>=this.ax){var c=t-this.ax|0;return this.aQ.a[c>>>5|0].a[31&c]}return this.c.a[t]}throw this.aw(t)}),P.bT=(function(e){return this.bU(e)}),new L().i(bx,`scala.collection.immutable.Vector4`,{fI:1,aa:1,ab:1,a5:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,A:1,x:1,k:1,q:1,y:1,a:1,T:1});function xx(e,t,n,r,i,a,o,s,c,l,u,d,f,p){this.c=null,this.f=null,this.h=0,this.ae=0,this.as=null,this.af=0,this.at=null,this.ag=0,this.au=null,this.ah=0,this.Y=null,this.a1=null,this.a0=null,this.Z=null,this.ae=t,this.as=n,this.af=r,this.at=i,this.ag=a,this.au=o,this.ah=s,this.Y=c,this.a1=l,this.a0=u,this.Z=d,cx(this,e,f,p)}P=xx.prototype=new ux,P.constructor=xx,P.r=(function(e){if(e>=0&&e<this.h){var t=e-this.ah|0;if(t>=0){var n=t>>>20|0,r=31&(t>>>15|0),i=31&(t>>>10|0),a=31&(t>>>5|0),o=31&t;return n<this.Y.a.length?this.Y.a[n].a[r].a[i].a[a].a[o]:r<this.a1.a.length?this.a1.a[r].a[i].a[a].a[o]:i<this.a0.a.length?this.a0.a[i].a[a].a[o]:a<this.Z.a.length?this.Z.a[a].a[o]:this.f.a[o]}if(e>=this.ag){var s=e-this.ag|0;return this.au.a[s>>>15|0].a[31&(s>>>10|0)].a[31&(s>>>5|0)].a[31&s]}if(e>=this.af){var c=e-this.af|0;return this.at.a[c>>>10|0].a[31&(c>>>5|0)].a[31&c]}if(e>=this.ae){var l=e-this.ae|0;return this.as.a[l>>>5|0].a[31&l]}return this.c.a[e]}throw this.aw(e)}),P.dm=(function(e,t){if(e>=0&&e<this.h){if(e>=this.ah){var n=e-this.ah|0,r=n>>>20|0,i=31&(n>>>15|0),a=31&(n>>>10|0),o=31&(n>>>5|0),s=31&n;if(r<this.Y.a.length){var c=this.Y.d(),l=c.a[r].d(),u=l.a[i].d(),d=u.a[a].d(),f=d.a[o].d();return f.a[s]=t,d.a[o]=f,u.a[a]=d,l.a[i]=u,c.a[r]=l,new xx(this.c,this.ae,this.as,this.af,this.at,this.ag,this.au,this.ah,c,this.a1,this.a0,this.Z,this.f,this.h)}if(i<this.a1.a.length){var p=this.a1.d(),m=p.a[i].d(),h=m.a[a].d(),g=h.a[o].d();return g.a[s]=t,h.a[o]=g,m.a[a]=h,p.a[i]=m,new xx(this.c,this.ae,this.as,this.af,this.at,this.ag,this.au,this.ah,this.Y,p,this.a0,this.Z,this.f,this.h)}if(a<this.a0.a.length){var _=this.a0.d(),v=_.a[a].d(),y=v.a[o].d();return y.a[s]=t,v.a[o]=y,_.a[a]=v,new xx(this.c,this.ae,this.as,this.af,this.at,this.ag,this.au,this.ah,this.Y,this.a1,_,this.Z,this.f,this.h)}if(o<this.Z.a.length){var b=this.Z.d(),x=b.a[o].d();return x.a[s]=t,b.a[o]=x,new xx(this.c,this.ae,this.as,this.af,this.at,this.ag,this.au,this.ah,this.Y,this.a1,this.a0,b,this.f,this.h)}var S=this.f.d();return S.a[s]=t,new xx(this.c,this.ae,this.as,this.af,this.at,this.ag,this.au,this.ah,this.Y,this.a1,this.a0,this.Z,S,this.h)}if(e>=this.ag){var C=e-this.ag|0,w=this.au,T=C>>>15|0,ee=31&(C>>>10|0),te=31&(C>>>5|0),ne=31&C,E=w.d(),re=E.a[T].d(),ie=re.a[ee].d(),ae=ie.a[te].d();return ae.a[ne]=t,ie.a[te]=ae,re.a[ee]=ie,E.a[T]=re,new xx(this.c,this.ae,this.as,this.af,this.at,this.ag,E,this.ah,this.Y,this.a1,this.a0,this.Z,this.f,this.h)}if(e>=this.af){var oe=e-this.af|0,se=this.at,D=oe>>>10|0,ce=31&(oe>>>5|0),O=31&oe,le=se.d(),ue=le.a[D].d(),de=ue.a[ce].d();return de.a[O]=t,ue.a[ce]=de,le.a[D]=ue,new xx(this.c,this.ae,this.as,this.af,le,this.ag,this.au,this.ah,this.Y,this.a1,this.a0,this.Z,this.f,this.h)}if(e>=this.ae){var fe=e-this.ae|0,pe=this.as,me=fe>>>5|0,he=31&fe,ge=pe.d(),_e=ge.a[me].d();return _e.a[he]=t,ge.a[me]=_e,new xx(this.c,this.ae,ge,this.af,this.at,this.ag,this.au,this.ah,this.Y,this.a1,this.a0,this.Z,this.f,this.h)}var ve=this.c.d();return ve.a[e]=t,new xx(ve,this.ae,this.as,this.af,this.at,this.ag,this.au,this.ah,this.Y,this.a1,this.a0,this.Z,this.f,this.h)}throw this.aw(e)}),P.de=(function(e){if(this.f.a.length<32){var t=U().ea(this.f,e),n=1+this.h|0;return new xx(this.c,this.ae,this.as,this.af,this.at,this.ag,this.au,this.ah,this.Y,this.a1,this.a0,this.Z,t,n)}if(this.Z.a.length<31){var r=U().z(this.Z,this.f),i=new I(1);i.a[0]=e;var a=1+this.h|0;return new xx(this.c,this.ae,this.as,this.af,this.at,this.ag,this.au,this.ah,this.Y,this.a1,this.a0,r,i,a)}if(this.a0.a.length<31){var o=U().z(this.a0,U().z(this.Z,this.f)),s=new I(1);s.a[0]=e;var c=1+this.h|0;return new xx(this.c,this.ae,this.as,this.af,this.at,this.ag,this.au,this.ah,this.Y,this.a1,o,U().b7,s,c)}if(this.a1.a.length<31){var l=U().z(this.a1,U().z(this.a0,U().z(this.Z,this.f))),u=new I(1);u.a[0]=e;var d=1+this.h|0;return new xx(this.c,this.ae,this.as,this.af,this.at,this.ag,this.au,this.ah,this.Y,l,U().c4,U().b7,u,d)}if(this.Y.a.length<30){var f=U().z(this.Y,U().z(this.a1,U().z(this.a0,U().z(this.Z,this.f)))),p=new I(1);p.a[0]=e;var m=1+this.h|0;return new xx(this.c,this.ae,this.as,this.af,this.at,this.ag,this.au,this.ah,f,U().e5,U().c4,U().b7,p,m)}var h=this.c,g=this.ae,_=this.as,v=this.af,y=this.at,b=this.ag,x=this.au,S=this.ah,C=this.Y,w=this.ah,T=U().jd,ee=U().z(this.a1,U().z(this.a0,U().z(this.Z,this.f))),te=new(R.r().r().r().r().r()).C(1);te.a[0]=ee;var ne=U().e5,E=U().c4,re=U().b7,ie=new I(1);return ie.a[0]=e,new Sx(h,g,_,v,y,b,x,S,C,31457280+w|0,T,te,ne,E,re,ie,1+this.h|0)}),P.bU=(function(e){var t=U().bH(this.c,e),n=U().W(2,this.as,e),r=U().W(3,this.at,e),i=U().W(4,this.au,e),a=U().W(5,this.Y,e),o=U().W(4,this.a1,e),s=U().W(3,this.a0,e),c=U().W(2,this.Z,e),l=U().bH(this.f,e);return new xx(t,this.ae,n,this.af,r,this.ag,i,this.ah,a,o,s,c,l,this.h)}),P.cb=(function(){return 9}),P.ca=(function(e){switch(e){case 0:return this.c;case 1:return this.as;case 2:return this.at;case 3:return this.au;case 4:return this.Y;case 5:return this.a1;case 6:return this.a0;case 7:return this.Z;case 8:return this.f;default:throw new Vm(e)}}),P.g=(function(e){var t=e|0;if(t>=0&&t<this.h){var n=t-this.ah|0;if(n>=0){var r=n>>>20|0,i=31&(n>>>15|0),a=31&(n>>>10|0),o=31&(n>>>5|0),s=31&n;return r<this.Y.a.length?this.Y.a[r].a[i].a[a].a[o].a[s]:i<this.a1.a.length?this.a1.a[i].a[a].a[o].a[s]:a<this.a0.a.length?this.a0.a[a].a[o].a[s]:o<this.Z.a.length?this.Z.a[o].a[s]:this.f.a[s]}if(t>=this.ag){var c=t-this.ag|0;return this.au.a[c>>>15|0].a[31&(c>>>10|0)].a[31&(c>>>5|0)].a[31&c]}if(t>=this.af){var l=t-this.af|0;return this.at.a[l>>>10|0].a[31&(l>>>5|0)].a[31&l]}if(t>=this.ae){var u=t-this.ae|0;return this.as.a[u>>>5|0].a[31&u]}return this.c.a[t]}throw this.aw(t)}),P.bT=(function(e){return this.bU(e)}),new L().i(xx,`scala.collection.immutable.Vector5`,{fJ:1,aa:1,ab:1,a5:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,A:1,x:1,k:1,q:1,y:1,a:1,T:1});function Sx(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){this.c=null,this.f=null,this.h=0,this.a2=0,this.ai=null,this.a3=0,this.aj=null,this.a4=0,this.ak=null,this.a5=0,this.al=null,this.ab=0,this.R=null,this.V=null,this.U=null,this.T=null,this.S=null,this.a2=t,this.ai=n,this.a3=r,this.aj=i,this.a4=a,this.ak=o,this.a5=s,this.al=c,this.ab=l,this.R=u,this.V=d,this.U=f,this.T=p,this.S=m,cx(this,e,h,g)}P=Sx.prototype=new ux,P.constructor=Sx,P.r=(function(e){if(e>=0&&e<this.h){var t=e-this.ab|0;if(t>=0){var n=t>>>25|0,r=31&(t>>>20|0),i=31&(t>>>15|0),a=31&(t>>>10|0),o=31&(t>>>5|0),s=31&t;return n<this.R.a.length?this.R.a[n].a[r].a[i].a[a].a[o].a[s]:r<this.V.a.length?this.V.a[r].a[i].a[a].a[o].a[s]:i<this.U.a.length?this.U.a[i].a[a].a[o].a[s]:a<this.T.a.length?this.T.a[a].a[o].a[s]:o<this.S.a.length?this.S.a[o].a[s]:this.f.a[s]}if(e>=this.a5){var c=e-this.a5|0;return this.al.a[c>>>20|0].a[31&(c>>>15|0)].a[31&(c>>>10|0)].a[31&(c>>>5|0)].a[31&c]}if(e>=this.a4){var l=e-this.a4|0;return this.ak.a[l>>>15|0].a[31&(l>>>10|0)].a[31&(l>>>5|0)].a[31&l]}if(e>=this.a3){var u=e-this.a3|0;return this.aj.a[u>>>10|0].a[31&(u>>>5|0)].a[31&u]}if(e>=this.a2){var d=e-this.a2|0;return this.ai.a[d>>>5|0].a[31&d]}return this.c.a[e]}throw this.aw(e)}),P.dm=(function(e,t){if(e>=0&&e<this.h){if(e>=this.ab){var n=e-this.ab|0,r=n>>>25|0,i=31&(n>>>20|0),a=31&(n>>>15|0),o=31&(n>>>10|0),s=31&(n>>>5|0),c=31&n;if(r<this.R.a.length){var l=this.R.d(),u=l.a[r].d(),d=u.a[i].d(),f=d.a[a].d(),p=f.a[o].d(),m=p.a[s].d();return m.a[c]=t,p.a[s]=m,f.a[o]=p,d.a[a]=f,u.a[i]=d,l.a[r]=u,new Sx(this.c,this.a2,this.ai,this.a3,this.aj,this.a4,this.ak,this.a5,this.al,this.ab,l,this.V,this.U,this.T,this.S,this.f,this.h)}if(i<this.V.a.length){var h=this.V.d(),g=h.a[i].d(),_=g.a[a].d(),v=_.a[o].d(),y=v.a[s].d();return y.a[c]=t,v.a[s]=y,_.a[o]=v,g.a[a]=_,h.a[i]=g,new Sx(this.c,this.a2,this.ai,this.a3,this.aj,this.a4,this.ak,this.a5,this.al,this.ab,this.R,h,this.U,this.T,this.S,this.f,this.h)}if(a<this.U.a.length){var b=this.U.d(),x=b.a[a].d(),S=x.a[o].d(),C=S.a[s].d();return C.a[c]=t,S.a[s]=C,x.a[o]=S,b.a[a]=x,new Sx(this.c,this.a2,this.ai,this.a3,this.aj,this.a4,this.ak,this.a5,this.al,this.ab,this.R,this.V,b,this.T,this.S,this.f,this.h)}if(o<this.T.a.length){var w=this.T.d(),T=w.a[o].d(),ee=T.a[s].d();return ee.a[c]=t,T.a[s]=ee,w.a[o]=T,new Sx(this.c,this.a2,this.ai,this.a3,this.aj,this.a4,this.ak,this.a5,this.al,this.ab,this.R,this.V,this.U,w,this.S,this.f,this.h)}if(s<this.S.a.length){var te=this.S.d(),ne=te.a[s].d();return ne.a[c]=t,te.a[s]=ne,new Sx(this.c,this.a2,this.ai,this.a3,this.aj,this.a4,this.ak,this.a5,this.al,this.ab,this.R,this.V,this.U,this.T,te,this.f,this.h)}var E=this.f.d();return E.a[c]=t,new Sx(this.c,this.a2,this.ai,this.a3,this.aj,this.a4,this.ak,this.a5,this.al,this.ab,this.R,this.V,this.U,this.T,this.S,E,this.h)}if(e>=this.a5){var re=e-this.a5|0,ie=this.al,ae=re>>>20|0,oe=31&(re>>>15|0),se=31&(re>>>10|0),D=31&(re>>>5|0),ce=31&re,O=ie.d(),le=O.a[ae].d(),ue=le.a[oe].d(),de=ue.a[se].d(),fe=de.a[D].d();return fe.a[ce]=t,de.a[D]=fe,ue.a[se]=de,le.a[oe]=ue,O.a[ae]=le,new Sx(this.c,this.a2,this.ai,this.a3,this.aj,this.a4,this.ak,this.a5,O,this.ab,this.R,this.V,this.U,this.T,this.S,this.f,this.h)}if(e>=this.a4){var pe=e-this.a4|0,me=this.ak,he=pe>>>15|0,ge=31&(pe>>>10|0),_e=31&(pe>>>5|0),ve=31&pe,ye=me.d(),be=ye.a[he].d(),xe=be.a[ge].d(),Se=xe.a[_e].d();return Se.a[ve]=t,xe.a[_e]=Se,be.a[ge]=xe,ye.a[he]=be,new Sx(this.c,this.a2,this.ai,this.a3,this.aj,this.a4,ye,this.a5,this.al,this.ab,this.R,this.V,this.U,this.T,this.S,this.f,this.h)}if(e>=this.a3){var Ce=e-this.a3|0,we=this.aj,Te=Ce>>>10|0,Ee=31&(Ce>>>5|0),De=31&Ce,Oe=we.d(),ke=Oe.a[Te].d(),Ae=ke.a[Ee].d();return Ae.a[De]=t,ke.a[Ee]=Ae,Oe.a[Te]=ke,new Sx(this.c,this.a2,this.ai,this.a3,Oe,this.a4,this.ak,this.a5,this.al,this.ab,this.R,this.V,this.U,this.T,this.S,this.f,this.h)}if(e>=this.a2){var k=e-this.a2|0,je=this.ai,Me=k>>>5|0,Ne=31&k,Pe=je.d(),Fe=Pe.a[Me].d();return Fe.a[Ne]=t,Pe.a[Me]=Fe,new Sx(this.c,this.a2,Pe,this.a3,this.aj,this.a4,this.ak,this.a5,this.al,this.ab,this.R,this.V,this.U,this.T,this.S,this.f,this.h)}var Ie=this.c.d();return Ie.a[e]=t,new Sx(Ie,this.a2,this.ai,this.a3,this.aj,this.a4,this.ak,this.a5,this.al,this.ab,this.R,this.V,this.U,this.T,this.S,this.f,this.h)}throw this.aw(e)}),P.de=(function(e){if(this.f.a.length<32){var t=U().ea(this.f,e),n=1+this.h|0;return new Sx(this.c,this.a2,this.ai,this.a3,this.aj,this.a4,this.ak,this.a5,this.al,this.ab,this.R,this.V,this.U,this.T,this.S,t,n)}if(this.S.a.length<31){var r=U().z(this.S,this.f),i=new I(1);i.a[0]=e;var a=1+this.h|0;return new Sx(this.c,this.a2,this.ai,this.a3,this.aj,this.a4,this.ak,this.a5,this.al,this.ab,this.R,this.V,this.U,this.T,r,i,a)}if(this.T.a.length<31){var o=U().z(this.T,U().z(this.S,this.f)),s=new I(1);s.a[0]=e;var c=1+this.h|0;return new Sx(this.c,this.a2,this.ai,this.a3,this.aj,this.a4,this.ak,this.a5,this.al,this.ab,this.R,this.V,this.U,o,U().b7,s,c)}if(this.U.a.length<31){var l=U().z(this.U,U().z(this.T,U().z(this.S,this.f))),u=new I(1);u.a[0]=e;var d=1+this.h|0;return new Sx(this.c,this.a2,this.ai,this.a3,this.aj,this.a4,this.ak,this.a5,this.al,this.ab,this.R,this.V,l,U().c4,U().b7,u,d)}if(this.V.a.length<31){var f=U().z(this.V,U().z(this.U,U().z(this.T,U().z(this.S,this.f)))),p=new I(1);p.a[0]=e;var m=1+this.h|0;return new Sx(this.c,this.a2,this.ai,this.a3,this.aj,this.a4,this.ak,this.a5,this.al,this.ab,this.R,f,U().e5,U().c4,U().b7,p,m)}if(this.R.a.length<62){var h=U().z(this.R,U().z(this.V,U().z(this.U,U().z(this.T,U().z(this.S,this.f))))),g=new I(1);g.a[0]=e;var _=1+this.h|0;return new Sx(this.c,this.a2,this.ai,this.a3,this.aj,this.a4,this.ak,this.a5,this.al,this.ab,h,U().gm,U().e5,U().c4,U().b7,g,_)}throw Tm(new Em)}),P.bU=(function(e){var t=U().bH(this.c,e),n=U().W(2,this.ai,e),r=U().W(3,this.aj,e),i=U().W(4,this.ak,e),a=U().W(5,this.al,e),o=U().W(6,this.R,e),s=U().W(5,this.V,e),c=U().W(4,this.U,e),l=U().W(3,this.T,e),u=U().W(2,this.S,e),d=U().bH(this.f,e);return new Sx(t,this.a2,n,this.a3,r,this.a4,i,this.a5,a,this.ab,o,s,c,l,u,d,this.h)}),P.cb=(function(){return 11}),P.ca=(function(e){switch(e){case 0:return this.c;case 1:return this.ai;case 2:return this.aj;case 3:return this.ak;case 4:return this.al;case 5:return this.R;case 6:return this.V;case 7:return this.U;case 8:return this.T;case 9:return this.S;case 10:return this.f;default:throw new Vm(e)}}),P.g=(function(e){var t=e|0;if(t>=0&&t<this.h){var n=t-this.ab|0;if(n>=0){var r=n>>>25|0,i=31&(n>>>20|0),a=31&(n>>>15|0),o=31&(n>>>10|0),s=31&(n>>>5|0),c=31&n;return r<this.R.a.length?this.R.a[r].a[i].a[a].a[o].a[s].a[c]:i<this.V.a.length?this.V.a[i].a[a].a[o].a[s].a[c]:a<this.U.a.length?this.U.a[a].a[o].a[s].a[c]:o<this.T.a.length?this.T.a[o].a[s].a[c]:s<this.S.a.length?this.S.a[s].a[c]:this.f.a[c]}if(t>=this.a5){var l=t-this.a5|0;return this.al.a[l>>>20|0].a[31&(l>>>15|0)].a[31&(l>>>10|0)].a[31&(l>>>5|0)].a[31&l]}if(t>=this.a4){var u=t-this.a4|0;return this.ak.a[u>>>15|0].a[31&(u>>>10|0)].a[31&(u>>>5|0)].a[31&u]}if(t>=this.a3){var d=t-this.a3|0;return this.aj.a[d>>>10|0].a[31&(d>>>5|0)].a[31&d]}if(t>=this.a2){var f=t-this.a2|0;return this.ai.a[f>>>5|0].a[31&f]}return this.c.a[t]}throw this.aw(t)}),P.bT=(function(e){return this.bU(e)}),new L().i(Sx,`scala.collection.immutable.Vector6`,{fK:1,aa:1,ab:1,a5:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,A:1,x:1,k:1,q:1,y:1,a:1,T:1});function Cx(e,t){return e.aM=t,e}function wx(e){return Cx(e,Np(new Fp)),e}function Tx(){this.aM=null}P=Tx.prototype=new eb,P.constructor=Tx,P.aT=(function(e){return hd(this,e)}),P.aV=(function(e){}),P.j=(function(){return d_(new p_,new Vy(this))}),P.bl=(function(e){var t=this.aM.l();return t===e?0:t<e?-1:1}),P.bb=(function(){return`IndexedSeq`}),P.l=(function(){return this.aM.l()}),P.u=(function(){return this.aM.l()}),P.ln=(function(e){var t=this.aM,n=``+Ji(e);return t.m+=n,this}),P.B=(function(){return this.aM.m}),P.jJ=(function(e){if(e instanceof ex)this.aM.jI(e.br);else if(e instanceof Tx){var t=this.aM,n=e.aM;t.m=``+t.m+n}else{var r=e.u();if(r!==0){var i=this.aM;r>0&&i.l();for(var a=e.j();a.k();){var o=``+Ji(sa(a.i()));i.m+=o}}}return this}),P.e=(function(){return this.aM.l()===0}),P.r=(function(e){return ia(this.aM.jO(e))}),P.g=(function(e){var t=e|0;return ia(this.aM.jO(t))}),P.eU=(function(e){return wx(new Tx).jJ(e)}),P.eT=(function(e){return wx(new Tx).jJ(e)}),P.aN=(function(e){return this.ln(sa(e))}),P.aU=(function(){return this.aM.m}),P.b9=(function(){return Cg()}),new L().i(Tx,`scala.collection.mutable.StringBuilder`,{bT:1,J:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,G:1,z:1,E:1,M:1,L:1,D:1,F:1,K:1,a6:1,p:1,o:1,R:1,Q:1,ay:1,a:1});function Ex(e){var t=new Ox().fK(e);e.bC=t.bC,e.cs=t.cs,e.fp=!1}function Dx(e){e.fq=1+e.fq|0,e.fp&&Ex(e)}function Ox(){this.fq=0,this.bC=null,this.cs=null,this.fp=!1,this.bD=0,this.fq=0,this.bC=$(),this.cs=null,this.fp=!1,this.bD=0}P=Ox.prototype=new bb,P.constructor=Ox,P.c7=(function(e){return v_(this,e)}),P.aV=(function(e){}),P.j=(function(){return new Dg(this.bC.j(),new tp((()=>this.fq)))}),P.dl=(function(){return Eg()}),P.r=(function(e){return sh(this.bC,e)}),P.l=(function(){return this.bD}),P.u=(function(){return this.bD}),P.e=(function(){return this.bD===0}),P.kK=(function(){return this.fp=!this.e(),this.bC}),P.lv=(function(e){Dx(this);var t=new fx(e,$());if(this.bD===0)this.bC=t;else{var n=this.cs;n===null&&Ql().bV(),n.am=t}return this.cs=t,this.bD=1+this.bD|0,this}),P.fK=(function(e){var t=e.j();if(t.k()){var n=1,r=new fx(t.i(),$());for(this.bC=r;t.k();){var i=new fx(t.i(),$());r.am=i,r=i,n=1+n|0}this.bD=n,this.cs=r}return this}),P.lm=(function(e){var t=e.j();if(t.k()){var n=new Ox().fK(t);if(Dx(this),this.bD===0)this.bC=n.bC;else{var r=this.cs;r===null&&Ql().bV(),r.am=n.bC}this.cs=n.cs,this.bD=this.bD+n.bD|0}return this}),P.bb=(function(){return`ListBuffer`}),P.b9=(function(){return Eg()}),P.g=(function(e){var t=e|0;return sh(this.bC,t)}),P.aU=(function(){return this.kK()}),P.aN=(function(e){return this.lv(e)}),P.aT=(function(e){return this.lm(e)}),new L().i(Ox,`scala.collection.mutable.ListBuffer`,{bS:1,aJ:1,J:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,G:1,z:1,E:1,M:1,L:1,D:1,F:1,at:1,aK:1,k:1,q:1,K:1,a6:1,a:1,T:1});function kx(e,t,n){return e.e6=0,e.co=t,e.aS=n,e}function Ax(e){return kx(e,new I(16),0),e}function jx(){this.e6=0,this.co=null,this.aS=0}P=jx.prototype=new bb,P.constructor=jx,P.j=(function(){return this.ny().j()}),P.bl=(function(e){var t=this.aS;return t===e?0:t<e?-1:1}),P.c7=(function(e){return v_(this,e)}),P.u=(function(){return this.aS}),P.gD=(function(e){this.co=lg().kC(this.co,this.aS,e)}),P.aV=(function(e){e>this.aS&&e>=1&&this.gD(e)}),P.r=(function(e){var t=1+e|0;if(e<0)throw hl().gS(e,this.aS-1|0);if(t>this.aS)throw hl().gS(t-1|0,this.aS-1|0);return this.co.a[e]}),P.l=(function(){return this.aS}),P.ny=(function(){return new Wy(this,new tp((()=>this.e6)))}),P.dl=(function(){return lg()}),P.ls=(function(e){this.e6=1+this.e6|0;var t=1+this.aS|0;return this.co.a.length<=(t-1|0)&&this.gD(t),this.aS=t,this.co.a[t-1|0]=e,this}),P.jD=(function(e){if(e instanceof jx){var t=e.aS;t>0&&(this.e6=1+this.e6|0,this.gD(this.aS+t|0),Lc().eP(e.co,0,this.co,this.aS,t),this.aS=this.aS+t|0)}else hd(this,e);return this}),P.bb=(function(){return`ArrayBuffer`}),P.bs=(function(e,t,n){var r=this.aS,i=wc().bt(e),a=n<r?n:r,o=t<0?i:i-t|0,s=o<a?o:a,c=s<0?0:s;return c>0&&Lc().eP(this.co,0,e,t,c),c}),P.g=(function(e){return this.r(e|0)}),P.b9=(function(){return lg()}),P.aN=(function(e){return this.ls(e)}),P.aT=(function(e){return this.jD(e)}),new L().i(jx,`scala.collection.mutable.ArrayBuffer`,{bF:1,aJ:1,J:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,G:1,z:1,E:1,M:1,L:1,D:1,F:1,at:1,aK:1,p:1,o:1,R:1,Q:1,bR:1,k:1,q:1,a:1,T:1});function Mx(e,t){return e.db=t,e}function Nx(e){return Mx(e,[]),e}function Px(){this.db=null}P=Px.prototype=new bb,P.constructor=Px,P.aV=(function(e){}),P.bb=(function(){return`IndexedSeq`}),P.j=(function(){return d_(new p_,new Vy(this))}),P.bl=(function(e){var t=this.db.length|0;return t===e?0:t<e?-1:1}),P.c7=(function(e){return v_(this,e)}),P.dl=(function(){return Pg()}),P.r=(function(e){return this.db[e]}),P.l=(function(){return this.db.length|0}),P.u=(function(){return this.db.length|0}),P.bG=(function(){return`WrappedArray`}),P.aU=(function(){return this}),P.aN=(function(e){return this.db.push(e),this}),P.g=(function(e){var t=e|0;return this.db[t]}),P.b9=(function(){return Pg()}),new L().i(Px,`scala.scalajs.js.WrappedArray`,{gZ:1,aJ:1,J:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,G:1,z:1,E:1,M:1,L:1,D:1,F:1,at:1,aK:1,q:1,k:1,Q:1,p:1,o:1,R:1,bR:1,K:1,a:1}),xs(new(r_.r()).C([]));