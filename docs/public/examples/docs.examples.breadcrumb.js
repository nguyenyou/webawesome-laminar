var e=Object.defineProperty,t=t=>{let n={};for(var r in t)e(n,r,{get:t[r],enumerable:!0});return n};
/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const n=globalThis,r=n.ShadowRoot&&(n.ShadyCSS===void 0||n.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,i=Symbol(),a=new WeakMap;var o=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(r&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=a.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&a.set(t,e))}return e}toString(){return this.cssText}};const s=e=>new o(typeof e==`string`?e:e+``,void 0,i),c=(e,...t)=>new o(e.length===1?e[0]:t.reduce(((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1]),e[0]),e,i),l=(e,t)=>{if(r)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(let r of t){let t=document.createElement(`style`),i=n.litNonce;i!==void 0&&t.setAttribute(`nonce`,i),t.textContent=r.cssText,e.appendChild(t)}},u=r?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return s(t)})(e):e,{is:d,defineProperty:f,getOwnPropertyDescriptor:p,getOwnPropertyNames:m,getOwnPropertySymbols:h,getPrototypeOf:g}=Object,_=globalThis,v=_.trustedTypes,y=v?v.emptyScript:``,b=_.reactiveElementPolyfillSupport,ee=(e,t)=>e,te={toAttribute(e,t){switch(t){case Boolean:e=e?y:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},x=(e,t)=>!d(e,t),S={attribute:!0,type:String,converter:te,reflect:!1,useDefault:!1,hasChanged:x};Symbol.metadata??=Symbol(`metadata`),_.litPropertyMetadata??=new WeakMap;var C=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=S){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&f(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=p(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??S}static _$Ei(){if(this.hasOwnProperty(ee(`elementProperties`)))return;let e=g(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ee(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ee(`properties`))){let e=this.properties,t=[...m(e),...h(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(u(e))}else e!==void 0&&t.push(u(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return l(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?te:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?te:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n){if(e!==void 0){let r=this.constructor,i=this[e];if(n??=r.getPropertyOptions(e),!((n.hasChanged??x)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(e){}firstUpdated(e){}};C.elementStyles=[],C.shadowRootOptions={mode:`open`},C[ee(`elementProperties`)]=new Map,C[ee(`finalized`)]=new Map,b?.({ReactiveElement:C}),(_.reactiveElementVersions??=[]).push(`2.1.1`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const ne=globalThis,re=ne.trustedTypes,ie=re?re.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,ae=`$lit$`,w=`lit$${Math.random().toFixed(9).slice(2)}$`,T=`?`+w,E=`<${T}>`,oe=document,se=()=>oe.createComment(``),ce=e=>e===null||typeof e!=`object`&&typeof e!=`function`,le=Array.isArray,ue=e=>le(e)||typeof e?.[Symbol.iterator]==`function`,de=`[ 	
\f\r]`,fe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,pe=/-->/g,me=/>/g,he=RegExp(`>|${de}(?:([^\\s"'>=/]+)(${de}*=${de}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),ge=/'/g,_e=/"/g,ve=/^(?:script|style|textarea|title)$/i,ye=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),be=Symbol.for(`lit-noChange`),xe=Symbol.for(`lit-nothing`),Se=new WeakMap,Ce=oe.createTreeWalker(oe,129);function we(e,t){if(!le(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return ie===void 0?t:ie.createHTML(t)}const D=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=fe;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===fe?c[1]===`!--`?o=pe:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=he):(ve.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=he):o=me:o===he?c[0]===`>`?(o=i??fe,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?he:c[3]===`"`?_e:ge):o===_e||o===ge?o=he:o===pe||o===me?o=fe:(o=he,i=void 0);let d=o===he&&e[t+1].startsWith(`/>`)?` `:``;a+=o===fe?n+E:l>=0?(r.push(s),n.slice(0,l)+ae+n.slice(l)+w+d):n+w+(l===-2?t:d)}return[we(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]};var Te=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=D(t,n);if(this.el=e.createElement(l,r),Ce.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=Ce.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(ae)){let t=u[o++],n=i.getAttribute(e).split(w),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Ae:r[1]===`?`?je:r[1]===`@`?Me:ke}),i.removeAttribute(e)}else e.startsWith(w)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(ve.test(i.tagName)){let e=i.textContent.split(w),t=e.length-1;if(t>0){i.textContent=re?re.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],se()),Ce.nextNode(),c.push({type:2,index:++a});i.append(e[t],se())}}}else if(i.nodeType===8)if(i.data===T)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(w,e+1))!==-1;)c.push({type:7,index:a}),e+=w.length-1}a++}}static createElement(e,t){let n=oe.createElement(`template`);return n.innerHTML=e,n}};function Ee(e,t,n=e,r){if(t===be)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=ce(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=Ee(e,i._$AS(e,t.values),i,r)),t}var De=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??oe).importNode(t,!0);Ce.currentNode=r;let i=Ce.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Oe(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Ne(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=Ce.nextNode(),a++)}return Ce.currentNode=oe,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Oe=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=xe,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ee(this,e,t),ce(e)?e===xe||e==null||e===``?(this._$AH!==xe&&this._$AR(),this._$AH=xe):e!==this._$AH&&e!==be&&this._(e):e._$litType$===void 0?e.nodeType===void 0?ue(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==xe&&ce(this._$AH)?this._$AA.nextSibling.data=e:this.T(oe.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Te.createElement(we(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new De(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Se.get(e.strings);return t===void 0&&Se.set(e.strings,t=new Te(e)),t}k(t){le(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(se()),this.O(se()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},ke=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=xe,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=xe}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=Ee(this,e,t,0),a=!ce(e)||e!==this._$AH&&e!==be,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=Ee(this,r[n+o],t,o),s===be&&(s=this._$AH[o]),a||=!ce(s)||s!==this._$AH[o],s===xe?e=xe:e!==xe&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===xe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Ae=class extends ke{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===xe?void 0:e}},je=class extends ke{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==xe)}},Me=class extends ke{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=Ee(this,e,t,0)??xe)===be)return;let n=this._$AH,r=e===xe&&n!==xe||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==xe&&(n===xe||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ne=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Ee(this,e)}};const Pe={M:ae,P:w,A:T,C:1,L:D,R:De,D:ue,V:Ee,I:Oe,H:ke,N:je,U:Me,B:Ae,F:Ne},Fe=ne.litHtmlPolyfillSupport;Fe?.(Te,Oe),(ne.litHtmlVersions??=[]).push(`3.3.1`);const Ie=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Oe(t.insertBefore(se(),e),e,void 0,n??{})}return i._$AI(e),i},Le=globalThis;var Re=class extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ie(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return be}};Re._$litElement$=!0,Re.finalized=!0,Le.litElementHydrateSupport?.({LitElement:Re});const ze=Le.litElementPolyfillSupport;ze?.({LitElement:Re}),(Le.litElementVersions??=[]).push(`4.2.1`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Be=c`
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
function Ve(e,t){let n={waitUntilFirstUpdate:!1,...t};return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var He=Object.defineProperty,Ue=Object.getOwnPropertyDescriptor,O=e=>{throw TypeError(e)},k=(e,t,n,r)=>{for(var i=r>1?void 0:r?Ue(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&He(t,n,i),i},We=(e,t,n)=>t.has(e)||O(`Cannot `+n),Ge=(e,t,n)=>(We(e,t,`read from private field`),n?n.call(e):t.get(e)),Ke=(e,t,n)=>t.has(e)?O(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),qe=(e,t,n,r)=>(We(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const Je=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer((()=>{customElements.define(e,t)}))},Ye={attribute:!0,type:String,converter:te,reflect:!1,hasChanged:x},Xe=(e=Ye,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e)}}throw Error(`Unsupported decorator location: `+r)};function A(e){return(t,n)=>typeof n==`object`?Xe(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function Ze(e){return A({...e,state:!0,attribute:!1})}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const Qe=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function $e(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return Qe(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return Qe(n,r,{get(){return a(this)}})}}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var et=c`
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
`,tt=/;\s+$/;function nt(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function rt(e){let{property:t,value:n,element:r}=e;if(n){let e=r.getAttribute(`style`)||``;e&&(e.match(tt)||(e+=`;`),e+=` `);let i=`${t}: ${n}`;return e.includes(i)?void 0:`${e}${i};`}return null}var it,at=class extends Re{constructor(){super(),Ke(this,it,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,t)=>{if(this.internals?.states)try{t?this.internals.states.add(e):this.internals.states.delete(e)}catch(e){if(String(e).includes(`must start with '--'`))console.error(`Your browser implements an outdated version of CustomStateSet. Consider using a polyfill`);else throw e}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error(`Element internals are not supported in your browser. Consider using a polyfill`)}this.customStates.set(`wa-defined`,!0);let e=this.constructor;for(let[t,n]of e.elementProperties)n.default===`inherit`&&n.initial!==void 0&&typeof t==`string`&&this.customStates.set(`initial-${t}-${n.initial}`,!0)}static get styles(){return[et,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `)),this.didSSR&&this.updateComplete.then(()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `))})}attributeChangedCallback(e,t,n){Ge(this,it)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),qe(this,it,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll(`slot`).forEach(e=>{e.dispatchEvent(new Event(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(e){if(this.didSSR&&!this.hasUpdated){let t=new Event(`lit-hydration-error`,{bubbles:!0,composed:!0,cancelable:!1});t.error=e,this.dispatchEvent(t)}throw e}}setStyle(e,t){if(!this.style){let n=rt({property:nt(e),value:t,element:this});n&&this.setAttribute(`style`,n);return}this.style[e]=t}setStyleProperty(e,t){if(!this.style){let n=rt({property:e,value:t,element:this});n&&this.setAttribute(`style`,n);return}this.style.setProperty(e,t)}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};it=new WeakMap,k([A()],at.prototype,`dir`,2),k([A()],at.prototype,`lang`,2),k([A({type:Boolean,reflect:!0,attribute:`did-ssr`})],at.prototype,`didSSR`,2);
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const ot=e=>e??xe;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var st=class extends at{constructor(){super(...arguments),this.renderType=`button`,this.rel=`noreferrer noopener`}setRenderType(){let e=this.defaultSlot.assignedElements({flatten:!0}).filter(e=>e.tagName.toLowerCase()===`wa-dropdown`).length>0;if(typeof this.href==`string`){this.renderType=`link`;return}if(e){this.renderType=`dropdown`;return}this.renderType=`button`}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return ye`
      <span part="start" class="start">
        <slot name="start"></slot>
      </span>

      ${this.renderType===`link`?ye`
            <a
              part="label"
              class="label label-link"
              href="${this.href}"
              target="${ot(this.target?this.target:void 0)}"
              rel=${ot(this.target?this.rel:void 0)}
            >
              <slot></slot>
            </a>
          `:``}
      ${this.renderType===`button`?ye`
            <button part="label" type="button" class="label label-button">
              <slot @slotchange=${this.handleSlotChange}></slot>
            </button>
          `:``}
      ${this.renderType===`dropdown`?ye`
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
    `}};st.css=Be,k([$e(`slot:not([name])`)],st.prototype,`defaultSlot`,2),k([Ze()],st.prototype,`renderType`,2),k([A()],st.prototype,`href`,2),k([A()],st.prototype,`target`,2),k([A()],st.prototype,`rel`,2),k([Ve(`href`,{waitUntilFirstUpdate:!0})],st.prototype,`hrefChanged`,1),st=k([Je(`wa-breadcrumb-item`)],st);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var ct=t({default:()=>st}),lt=c`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`;const ut=new Set,dt=new Map;let ft,pt=`ltr`,mt=`en`;const ht=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(ht){let e=new MutationObserver(_t);pt=document.documentElement.dir||`ltr`,mt=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function gt(...e){e.map(e=>{let t=e.$code.toLowerCase();dt.has(t)?dt.set(t,Object.assign(Object.assign({},dt.get(t)),e)):dt.set(t,e),ft||=e}),_t()}function _t(){ht&&(pt=document.documentElement.dir||`ltr`,mt=document.documentElement.lang||navigator.language),[...ut.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var vt=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){ut.add(this.host)}hostDisconnected(){ut.delete(this.host)}dir(){return`${this.host.dir||pt}`.toLowerCase()}lang(){let e=`${this.host.lang||mt}`.toLowerCase().replace(/_/g,`-`);try{return new Intl.Locale(e),e}catch{return ft?ft.$code.toLowerCase():`en`}}getTranslationData(e){let t;try{t=new Intl.Locale(e.replace(/_/g,`-`))}catch{return{locale:void 0,language:``,region:``,primary:void 0,secondary:void 0}}let n=t.language.toLowerCase(),r=t.region?.toLowerCase()??``,i=dt.get(`${n}-${r}`),a=dt.get(n);return{locale:t,language:n,region:r,primary:i,secondary:a}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&ft&&ft[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(ft&&ft[e])i=ft[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},yt={$code:`en`,$name:`English`,$dir:`ltr`,allTagsRemoved:`All tags removed`,am:`AM`,autosizeColumn:`Autosize column`,captions:`Captions`,carousel:`Carousel`,chooseDate:`Choose date`,chooseDecade:`Choose decade`,chooseMonth:`Choose month`,chooseTime:`Choose time`,chooseYear:`Choose year`,clearEntry:`Clear entry`,clearFilter:`Clear filter`,clearSort:`Clear sort`,close:`Close`,closeCalendar:`Close calendar`,closeTimeInput:`Close time picker`,collapseRow:`Collapse row`,columnMenu:`Column options`,columnMovedToPosition:(e,t,n)=>`${e} moved to position ${t} of ${n}`,columns:`Columns`,compactPageXOfY:(e,t)=>`${e} of ${t}`,completed:`Completed`,copied:`Copied`,copy:`Copy`,createOption:e=>`Create "${e}"`,currentlyPlaying:`currently playing`,currentValue:`Current value`,date:`Date`,datePickerKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the calendar.`,day:`Day`,dayPeriod:`AM/PM`,decrement:`Decrement`,deselectAllRows:`Deselect all rows`,disabled:`Disabled`,dropFileHere:`Drop file here or click to browse`,dropFilesHere:`Drop files here or click to browse`,empty:`Empty`,endDate:`End date`,enterFullscreen:`Enter fullscreen`,error:`Error`,exitFullscreen:`Exit fullscreen`,expandRow:`Expand row`,filterByColumn:e=>`Filter by ${e}`,filterFrom:`From`,filterMax:`Max`,filterMin:`Min`,filterTo:`To`,firstPage:`First page`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hideColumn:`Hide column`,hidePassword:`Hide password`,hour:`Hour`,incompleteDate:`Enter a valid date.`,increment:`Increment`,jumpBackwardX:e=>`Jump back ${e} pages`,jumpForwardX:e=>`Jump forward ${e} pages`,lastPage:`Last page`,loading:`Loading`,locked:`Locked`,minute:`Minute`,month:`Month`,moreOptions:`More Options`,mute:`Mute`,nextDecade:`Next decade`,nextMonth:`Next month`,nextPage:`Next page`,nextSlide:`Next slide`,nextVideo:`Next Video`,nextYear:`Next year`,noData:`No data`,noOptions:`No options`,noResults:`No matching results`,notCompleted:`Not completed`,now:`Now`,numCharacters:e=>e===1?`1 character`:`${e} characters`,numCharactersRemaining:e=>e===1?`1 character remaining`:`${e} characters remaining`,numOptionsAvailable:e=>e===0?`No options available`:e===1?`1 option available`:`${e} options available`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,numRowsCopied:e=>e===1?`1 row copied`:`${e} rows copied`,numRowsSelected:e=>e===1?`1 row selected`:`${e} rows selected`,optionPosition:(e,t,n)=>`${e}, ${t} of ${n}`,optionsLoadError:`Options could not be loaded`,pageXOfY:(e,t)=>`Page ${e} of ${t}`,pagination:`Pagination`,pause:`Pause`,pauseAnimation:`Pause animation`,pictureInPicture:`Picture in picture`,pinLeft:`Pin left`,pinRight:`Pin right`,play:`Play`,playAnimation:`Play animation`,playbackSpeed:`Playback speed`,playlist:`Playlist`,pm:`PM`,previousDecade:`Previous decade`,previousMonth:`Previous month`,previousPage:`Previous page`,previousSlide:`Previous slide`,previousVideo:`Previous video`,previousYear:`Previous year`,progress:`Progress`,rangeTooLong:e=>e===1?`Select a range no longer than 1 day`:`Select a range no longer than ${e} days`,rangeTooShort:e=>e===1?`Select a range at least 1 day long`:`Select a range at least ${e} days long`,readonly:`Read-only`,remove:`Remove`,resetColumns:`Reset columns`,resize:`Resize`,resizeColumn:`Resize column`,rowsPerPage:`Rows per page`,scrollableRegion:`Scrollable region`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,search:`Search`,second:`Second`,seek:`Seek`,seekProgress:(e,t)=>`${e} of ${t}`,selectAColorFromTheScreen:`Select a color from the screen`,selectAllRows:`Select all rows`,selected:`Selected`,selectedDateLabel:e=>`Selected: ${e}`,selectedRangeLabel:e=>`Selected range: ${e}`,selectGroup:`Select group`,selectionCleared:`Selection cleared`,selectRow:`Select row`,showingNofMRows:(e,t)=>`Showing ${e} of ${t} rows`,showingXtoYofZ:(e,t,n)=>`${e}\u2013${t} of ${n}`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,sortAscending:`Sort ascending`,sortColumn:`Sort column`,sortDescending:`Sort descending`,startDate:`Start date`,steps:`Steps`,stepXOfY:(e,t)=>`Step ${e} of ${t}`,tagAdded:e=>`${e} added`,tagAlreadyAdded:e=>`${e} is already added`,tagInputKeyboardHelp:`Press Backspace or Delete to remove this tag.`,tagRemoved:e=>`${e} removed`,time:`Time`,timeInputKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the time picker.`,today:`Today`,toggleColorFormat:`Toggle color format`,tooFewTags:e=>e===1?`Add at least 1 tag`:`Add at least ${e} tags`,tooManyTags:e=>e===1?`Add no more than 1 tag`:`Add no more than ${e} tags`,unmute:`Unmute`,unpin:`Unpin`,unpinColumn:`Unpin column`,videoPlayer:`Video player`,volume:`Volume`,year:`Year`,zoomIn:`Zoom in`,zoomOut:`Zoom out`};gt(yt);var bt=yt,xt=class extends vt{lang(){return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||`en`:super.lang()}};gt(bt);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var St=class extends at{constructor(){super(...arguments),this.localize=new xt(this),this.separatorDir=this.localize.dir(),this.label=``}getSeparator(){let e=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[e,...e.querySelectorAll(`[id]`)].forEach(e=>e.removeAttribute(`id`)),e.setAttribute(`data-default`,``),e.slot=`separator`,e}handleSlotChange(){let e=[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>e.tagName.toLowerCase()===`wa-breadcrumb-item`);e.forEach((t,n)=>{let r=t.querySelector(`[slot="separator"]`);r===null?t.append(this.getSeparator()):r.hasAttribute(`data-default`)&&r.replaceWith(this.getSeparator()),n===e.length-1?t.setAttribute(`aria-current`,`page`):t.removeAttribute(`aria-current`)})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),ye`
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
    `}};St.css=lt,k([$e(`slot`)],St.prototype,`defaultSlot`,2),k([$e(`slot[name="separator"]`)],St.prototype,`separatorSlot`,2),k([A()],St.prototype,`label`,2),St=k([Je(`wa-breadcrumb`)],St);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ct=class extends Event{constructor(){super(`wa-error`,{bubbles:!0,cancelable:!1,composed:!0})}},wt=class extends Event{constructor(){super(`wa-load`,{bubbles:!0,cancelable:!1,composed:!0})}},Tt=c`
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
`,Et=``,Dt=``;function Ot(){return Et.replace(/\/$/,``)}function kt(e){Dt=e}function At(){if(!Dt){let e=document.querySelector(`[data-fa-kit-code]`);e&&kt(e.getAttribute(`data-fa-kit-code`)||``)}return Dt}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var jt=`7.3.0`;function Mt(e,t,n){let r=`solid`;return t===`chisel`&&(r=`chisel-regular`),t===`etch`&&(r=`etch-solid`),t===`graphite`&&(r=`graphite-thin`),t===`jelly`&&(r=`jelly-regular`,n===`duo-regular`&&(r=`jelly-duo-regular`),n===`fill-regular`&&(r=`jelly-fill-regular`)),t===`jelly-duo`&&(r=`jelly-duo-regular`),t===`jelly-fill`&&(r=`jelly-fill-regular`),t===`notdog`&&(n===`solid`&&(r=`notdog-solid`),n===`duo-solid`&&(r=`notdog-duo-solid`)),t===`notdog-duo`&&(r=`notdog-duo-solid`),t===`slab`&&((n===`solid`||n===`regular`)&&(r=`slab-regular`),n===`press-regular`&&(r=`slab-press-regular`)),t===`slab-press`&&(r=`slab-press-regular`),t===`slab-duo`&&(r=`slab-duo-regular`),t===`slab-press-duo`&&(r=`slab-press-duo-regular`),t===`thumbprint`&&(r=`thumbprint-light`),t===`utility`&&(r=`utility-semibold`),t===`utility-duo`&&(r=`utility-duo-semibold`),t===`utility-fill`&&(r=`utility-fill-semibold`),t===`whiteboard`&&(r=`whiteboard-semibold`),t===`mosaic`&&(r=`mosaic-solid`),t===`pixel`&&(r=`pixel-regular`),t===`vellum`&&(r=`vellum-solid`),t===`classic`&&(n===`thin`&&(r=`thin`),n===`light`&&(r=`light`),n===`regular`&&(r=`regular`),n===`solid`&&(r=`solid`)),t===`duotone`&&(n===`thin`&&(r=`duotone-thin`),n===`light`&&(r=`duotone-light`),n===`regular`&&(r=`duotone-regular`),n===`solid`&&(r=`duotone`)),t===`sharp`&&(n===`thin`&&(r=`sharp-thin`),n===`light`&&(r=`sharp-light`),n===`regular`&&(r=`sharp-regular`),n===`solid`&&(r=`sharp-solid`)),t===`sharp-duotone`&&(n===`thin`&&(r=`sharp-duotone-thin`),n===`light`&&(r=`sharp-duotone-light`),n===`regular`&&(r=`sharp-duotone-regular`),n===`solid`&&(r=`sharp-duotone-solid`)),t===`brands`&&(r=`brands`),r}function Nt(e,t,n){let r=Mt(e,t,n),i=Ot();if(i)return`${i}/${r}/${e}.svg`;let a=At();return a.length>0?`https://ka-p.fontawesome.com/releases/v${jt}/svgs/${r}/${e}.svg?token=${encodeURIComponent(a)}`:`https://ka-f.fontawesome.com/releases/v${jt}/svgs/${r}/${e}.svg`}var Pt={name:`default`,resolver:(e,t=`classic`,n=`solid`)=>Nt(e,t,n),mutator:(e,t)=>{if(e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`),t?.family&&!e.hasAttribute(`data-duotone-initialized`)){let{family:n,variant:r}=t;if(n===`duotone`||n===`sharp-duotone`||n===`notdog-duo`||n===`notdog`&&r===`duo-solid`||n===`jelly-duo`||n===`jelly`&&r===`duo-regular`||n===`utility-duo`||n===`slab-duo`||n===`slab-press-duo`||n===`thumbprint`){let n=[...e.querySelectorAll(`path`)],r=n.find(e=>!e.hasAttribute(`opacity`)),i=n.find(e=>e.hasAttribute(`opacity`));if(!r||!i)return;if(r.setAttribute(`data-duotone-primary`,``),i.setAttribute(`data-duotone-secondary`,``),t.swapOpacity&&r&&i){let e=i.getAttribute(`opacity`)||`0.4`;r.style.setProperty(`--path-opacity`,e),i.style.setProperty(`--path-opacity`,`1`)}e.setAttribute(`data-duotone-initialized`,``)}}}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Ft(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var It={solid:{"arrow-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`,"arrow-up":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>`,backward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M236.3 107.1C247.9 96 265 92.9 279.7 99.2C294.4 105.5 304 120 304 136L304 272.3L476.3 107.2C487.9 96 505 92.9 519.7 99.2C534.4 105.5 544 120 544 136L544 504C544 520 534.4 534.5 519.7 540.8C505 547.1 487.9 544 476.3 532.9L304 367.7L304 504C304 520 294.4 534.5 279.7 540.8C265 547.1 247.9 544 236.3 532.9L44.3 348.9C36.5 341.3 32 330.9 32 320C32 309.1 36.5 298.7 44.3 291.1L236.3 107.1z"/></svg>`,"backward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M491 100.8C478.1 93.8 462.3 94.5 450 102.6L192 272.1L192 128C192 110.3 177.7 96 160 96C142.3 96 128 110.3 128 128L128 512C128 529.7 142.3 544 160 544C177.7 544 192 529.7 192 512L192 367.9L450 537.5C462.3 545.6 478 546.3 491 539.3C504 532.3 512 518.8 512 504.1L512 136.1C512 121.4 503.9 107.9 491 100.9z"/></svg>`,bars:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>`,"angles-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M77.3 256 214.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256zm192 0L406.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L269.3 256z"/></svg>`,"angles-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.7 256 297.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 256zm-192 0L105.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256z"/></svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>`,"chevron-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`,"chevron-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>`,"chevron-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>`,circle:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>`,"closed-captioning":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M64 192C64 156.7 92.7 128 128 128L512 128C547.3 128 576 156.7 576 192L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 192zM216 272L248 272C252.4 272 256 275.6 256 280C256 293.3 266.7 304 280 304C293.3 304 304 293.3 304 280C304 249.1 278.9 224 248 224L216 224C185.1 224 160 249.1 160 280L160 360C160 390.9 185.1 416 216 416L248 416C278.9 416 304 390.9 304 360C304 346.7 293.3 336 280 336C266.7 336 256 346.7 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 280C208 275.6 211.6 272 216 272zM384 280C384 275.6 387.6 272 392 272L424 272C428.4 272 432 275.6 432 280C432 293.3 442.7 304 456 304C469.3 304 480 293.3 480 280C480 249.1 454.9 224 424 224L392 224C361.1 224 336 249.1 336 280L336 360C336 390.9 361.1 416 392 416L424 416C454.9 416 480 390.9 480 360C480 346.7 469.3 336 456 336C442.7 336 432 346.7 432 360C432 364.4 428.4 368 424 368L392 368C387.6 368 384 364.4 384 360L384 280z"/></svg>`,"closed-captioning-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M39 39.1C48.4 29.7 63.6 29.7 72.9 39.1L161.8 128L512 128C547.3 128 576 156.7 576 192L576 448C576 473.5 561.1 495.4 539.6 505.8L601 567.1C610.4 576.5 610.4 591.7 601 601C591.6 610.3 576.4 610.4 567.1 601L39 73.1C29.7 63.7 29.7 48.5 39 39.1zM384 350.1L384 279.9C384 275.5 387.6 271.9 392 271.9L424 271.9C428.4 271.9 432 275.5 432 279.9C432 293.2 442.7 303.9 456 303.9C469.3 303.9 480 293.2 480 279.9C480 249 454.9 223.9 424 223.9L392 223.9C361.1 223.9 336 249 336 279.9L336 302.1L384 350.1zM445.5 411.6C465.7 403.2 480 383.2 480 359.9C480 346.6 469.3 335.9 456 335.9C442.7 335.9 432 346.6 432 359.9C432 364.3 428.4 367.9 424 367.9L401.8 367.9L445.5 411.6zM162.3 264.1C160.8 269.1 160 274.5 160 280L160 360C160 390.9 185.1 416 216 416L248 416C266.1 416 282.1 407.5 292.4 394.2L410.2 512L128 512C92.7 512 64 483.3 64 448L64 192C64 184.2 65.4 176.7 68 169.8L162.3 264.1zM256.1 357.9C256 358.6 256 359.3 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 309.8L256.1 357.9z"/></svg>`,compress:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>`,ellipsis:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M96 320C96 289.1 121.1 264 152 264C182.9 264 208 289.1 208 320C208 350.9 182.9 376 152 376C121.1 376 96 350.9 96 320zM264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320zM488 264C518.9 264 544 289.1 544 320C544 350.9 518.9 376 488 376C457.1 376 432 350.9 432 320C432 289.1 457.1 264 488 264z"/></svg>`,"ellipsis-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/></svg>`,expand:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 96C110.3 96 96 110.3 96 128L96 224C96 241.7 110.3 256 128 256C145.7 256 160 241.7 160 224L160 160L224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L128 96zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 512C96 529.7 110.3 544 128 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480L160 416zM416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160L480 224C480 241.7 494.3 256 512 256C529.7 256 544 241.7 544 224L544 128C544 110.3 529.7 96 512 96L416 96zM544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L512 544C529.7 544 544 529.7 544 512L544 416z"/></svg>`,eyedropper:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>`,filter:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 64C19.1 64 7.4 71.8 2.4 83.8S.2 109.5 9.4 118.6L192 301.3 192 416c0 8.5 3.4 16.6 9.4 22.6l64 64c9.2 9.2 22.9 11.9 34.9 6.9S320 492.9 320 480l0-178.7 182.6-182.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 64 480 64L32 64z"/></svg>`,forward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M403.7 107.1C392.1 96 375 92.9 360.3 99.2C345.6 105.5 336 120 336 136L336 272.3L163.7 107.2C152.1 96 135 92.9 120.3 99.2C105.6 105.5 96 120 96 136L96 504C96 520 105.6 534.5 120.3 540.8C135 547.1 152.1 544 163.7 532.9L336 367.7L336 504C336 520 345.6 534.5 360.3 540.8C375 547.1 392.1 544 403.7 532.9L595.7 348.9C603.6 341.4 608 330.9 608 320C608 309.1 603.5 298.7 595.7 291.1L403.7 107.1z"/></svg>`,file:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>`,"file-audio":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>`,"file-code":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>`,"file-excel":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>`,"file-image":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>`,"file-pdf":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>`,"file-powerpoint":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>`,"file-video":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>`,"file-word":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>`,"file-zipper":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>`,"forward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M21 36.8c12.9-7 28.7-6.3 41 1.8L320 208.1 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-144.1-258 169.6c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440L0 72C0 57.3 8.1 43.8 21 36.8z"/></svg>`,gauge:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,gear:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>`,"grip-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>`,indeterminate:`<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>`,"magnifying-glass":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>`,minus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>`,pause:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>`,"picture-in-picture":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M448 32c35.3 0 64 28.7 64 64l0 112-64 0 0-112-384 0 0 320 144 0 0 64-144 0-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416 0 96C0 62.9 25.2 35.6 57.5 32.3L64 32 448 32zm16 224c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48l160 0z"/></svg>`,play:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>`,"play-circle":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>`,plus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>`,"table-columns":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 64l0 256 128 0 0-256-128 0zm320 0l-128 0 0 256 128 0 0-256z"/></svg>`,thumbtack:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 10.3 134.1c37.1 21.2 65.8 56.4 78.2 99.7l3.8 13.4c2.8 9.7 .8 20-5.2 28.1S362 352 352 352L32 352c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1L5 297.8c12.4-43.3 41-78.5 78.2-99.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 400l64 0 0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-112z"/></svg>`,"up-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M406.6 502.6l96-96c9.2-9.2 11.9-22.9 6.9-34.9S492.9 352 480 352l-64 0 0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 320-64 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l96 96c12.5 12.5 32.8 12.5 45.3 0zM150.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-9.2 9.2-11.9 22.9-6.9 34.9S19.1 160 32 160l64 0 0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320 64 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-96-96z"/></svg>`,upload:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>`,user:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>`,volume:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM441.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C443.3 170.7 464 210.9 464 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-low":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,xmark:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>`},regular:{calendar:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z"/></svg>`,"circle-question":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`,"circle-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,clock:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>`,copy:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>`,eye:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>`,"eye-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>`}},Lt={name:`system`,resolver:(e,t=`classic`,n=`solid`)=>{let r=It[n][e]??It.regular[e]??It.regular[`circle-question`];return r?Ft(r):``},mutator:e=>{e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`)}},Rt=`classic`,zt=[Pt,Lt],Bt=new Set;function Vt(e){Bt.add(e)}function Ht(e){Bt.delete(e)}function Ut(e){return zt.find(t=>t.name===e)}function Wt(){return Rt}
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const{I:Gt}=Pe,Kt=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var qt=Symbol(),Jt=Symbol(),Yt,Xt=new Map,Zt=class extends at{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label=``,this.library=`default`,this.rotate=0,this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=ye`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let n=this.shadowRoot.querySelector(`[part='svg']`);return typeof t.mutator==`function`&&t.mutator(n,this),this.svg}try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?qt:Jt}catch{return Jt}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return qt;Yt||=new DOMParser;let r=Yt.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):qt}catch{return qt}}}connectedCallback(){super.connectedCallback(),Vt(this)}firstUpdated(e){super.firstUpdated(e),this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Ht(this)}async getIconSource(){let e=Ut(this.library),t=this.family||Wt();if(this.name&&e){let n=this.canvas===`auto`||this.autoWidth,r;try{r=await e.resolver(this.name,t,this.variant,n)}catch{r=void 0}return{url:r,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=await this.getIconSource(),n=t?Ut(this.library):void 0;if(!e){this.svg=null;return}let r=Xt.get(e);r||(r=this.resolveIcon(e,n),Xt.set(e,r));let i=await r;if(i===Jt&&Xt.delete(e),e===(await this.getIconSource()).url){if(Kt(i)){this.svg=i;return}switch(i){case Jt:case qt:this.svg=null,this.dispatchEvent(new Ct);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new wt)}}}willUpdate(e){return this.style||this.setStyleProperty(`--rotate-angle`,`${this.rotate}deg`),super.willUpdate(e)}updated(e){super.updated(e);let t=Ut(this.library);this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`);let n=this.shadowRoot?.querySelector(`svg`);n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:ye`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};Zt.css=Tt,k([Ze()],Zt.prototype,`svg`,2),k([A({reflect:!0})],Zt.prototype,`name`,2),k([A({reflect:!0})],Zt.prototype,`family`,2),k([A({reflect:!0})],Zt.prototype,`variant`,2),k([A({reflect:!0})],Zt.prototype,`canvas`,2),k([A({attribute:`auto-width`,type:Boolean,reflect:!0})],Zt.prototype,`autoWidth`,2),k([A({attribute:`swap-opacity`,type:Boolean,reflect:!0})],Zt.prototype,`swapOpacity`,2),k([A()],Zt.prototype,`src`,2),k([A()],Zt.prototype,`label`,2),k([A({reflect:!0})],Zt.prototype,`library`,2),k([A({type:Number,reflect:!0})],Zt.prototype,`rotate`,2),k([A({type:String,reflect:!0})],Zt.prototype,`flip`,2),k([A({type:String,reflect:!0})],Zt.prototype,`animation`,2),k([Ve(`label`)],Zt.prototype,`handleLabelChange`,1),k([Ve([`family`,`name`,`library`,`variant`,`src`,`autoWidth`,`canvas`,`swapOpacity`],{waitUntilFirstUpdate:!0})],Zt.prototype,`setIcon`,1),Zt=k([Je(`wa-icon`)],Zt);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Qt=t({default:()=>St}),$t=()=>({checkValidity(e){let t=e.input,n={message:``,isValid:!0,invalidKeys:[]};if(!t)return n;let r=!0;if(`checkValidity`in t&&(r=t.checkValidity()),r)return n;if(n.isValid=!1,`validationMessage`in t&&(n.message=t.validationMessage),!(`validity`in t))return n.invalidKeys.push(`customError`),n;for(let e in t.validity){if(e===`valid`)continue;let r=e;t.validity[r]&&n.invalidKeys.push(r)}return n}}),en=class extends Event{constructor(){super(`wa-invalid`,{bubbles:!0,cancelable:!1,composed:!0})}},tn=()=>({observedAttributes:[`custom-error`],checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=[`customError`]),t}}),nn=class extends at{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=[`input`],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new en))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},`addEventListener`in this&&this.addEventListener(`invalid`,this.emitInvalid)}static get validators(){return[tn()]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let n of t.observedAttributes)e.add(n);return[...e]}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.updateValidity()}):this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener?.(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has(`customError`)&&(this.customError||=null,this.setCustomValidity(this.customError||``)),e.has(`value`)||e.has(`disabled`)||e.has(`defaultValue`)){let e=this.value;this.updateFormValue(e)}e.has(`disabled`)&&(this.customStates.set(`disabled`,this.disabled),(this.hasAttribute(`disabled`)||!this.matches(`:disabled`))&&this.toggleAttribute(`disabled`,this.disabled)),super.willUpdate(e),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>this.updateValidity()):this.updateValidity()}updateFormValue(e){if(Array.isArray(e)){if(this.name){let t=new FormData;for(let n of e)t.append(this.name,n);this.setValue(t,t)}}else this.setValue(e,e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(e){e?this.setAttribute(`form`,e):this.removeAttribute(`form`)}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],n=e[1],r=e[2];r||=this.validationTarget,this.internals.setValidity(t,n,r||void 0),this.requestUpdate(`validity`),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set(`required`,e),this.customStates.set(`optional`,!e),this.customStates.set(`invalid`,!t),this.customStates.set(`valid`,t),this.customStates.set(`user-invalid`,!t&&n),this.customStates.set(`user-valid`,t&&n)}setCustomValidity(e){if(!e){this.customError=null,this.setValidity({});return}this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity()}):(this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity())}setValue(...e){let[t,n]=e;this.internals.setFormValue(t,n)}get allValidators(){let e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(``),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute(`disabled`)||!this.willValidate){this.resetValidity();return}let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},n=this.validationTarget||this.input||void 0,r=``;for(let n of e){let{isValid:e,message:i,invalidKeys:a}=n.checkValidity(this);e||(r||=i,a?.length>=0&&a.forEach(e=>t[e]=!0))}r||=this.validationMessage,this.setValidity(t,r,n)}};nn.formAssociated=!0,k([A({reflect:!0})],nn.prototype,`name`,2),k([A({type:Boolean})],nn.prototype,`disabled`,2),k([A({state:!0,attribute:!1})],nn.prototype,`valueHasChanged`,2),k([A({state:!0,attribute:!1})],nn.prototype,`hasInteracted`,2),k([A({attribute:`custom-error`,reflect:!0})],nn.prototype,`customError`,2),k([A({attribute:!1,state:!0,type:Object})],nn.prototype,`validity`,1);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var rn={small:`s`,medium:`m`,large:`l`},an=new Set;function on(e,t){t in rn&&!an.has(`${e}:${t}`)&&(an.add(`${e}:${t}`),console.warn(`[${e}] size="${t}" is deprecated. Use size="${rn[t]}" instead. The long-form value will be removed in the next major version.`))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var sn=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return this.host.childNodes?[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===Node.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`wa-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1}):!1}hasNamedSlot(e){return this.host.querySelector?.(`:scope > [slot="${e}"]`)!==null}test(e,t){return t&&this.host.didSSR&&!this.host.hasUpdated?!!this.host[t]:e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){let e=this.host.shadowRoot;e&&`addEventListener`in e&&e.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){let e=this.host.shadowRoot;e&&`removeEventListener`in e&&e.removeEventListener(`slotchange`,this.handleSlotChange)}},cn=c`
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
`,ln=c`
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
`,un=c`
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
`;
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const dn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},fn=e=>(...t)=>({_$litDirective$:e,values:t});var pn=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const mn=fn(class extends pn{constructor(e){if(super(e),e.type!==dn.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter((t=>e[t])).join(` `)+` `}update(e,[t]){if(this.st===void 0){for(let n in this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter((e=>e!==``)))),t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return be}}),hn=Symbol.for(``),gn=e=>{if(e?.r===hn)return e?._$litStatic$},_n=(e,...t)=>({_$litStatic$:t.reduce(((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1]),e[0]),r:hn}),vn=new Map,yn=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],i=gn(a))!==void 0;)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=vn.get(e))===void 0&&(o.raw=o,vn.set(e,t=o)),n=s}return e(t,...n)})(ye);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var j=class extends nn{constructor(){super(...arguments),this.assumeInteractionOn=[`click`],this.hasSlotController=new sn(this,`[default]`,`start`,`end`),this.localize=new xt(this),this.invalid=!1,this.isIconButton=!1,this.title=``,this.variant=`neutral`,this.appearance=`accent`,this.size=`m`,this.withCaret=!1,this.withStart=!1,this.withEnd=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type=`button`}static get validators(){return[...super.validators,$t()]}handleSizeChange(){on(this.localName,this.size)}constructLightDOMButton(){let e=document.createElement(`button`);for(let t of this.attributes)t.name!==`style`&&e.setAttribute(t.name,t.value);return e.type=this.type,e.style.position=`absolute !important`,e.style.width=`0 !important`,e.style.height=`0 !important`,e.style.clipPath=`inset(50%) !important`,e.style.overflow=`hidden !important`,e.style.whiteSpace=`nowrap !important`,this.name&&(e.name=this.name),e.value=this.value||``,e}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopImmediatePropagation();return}if(this.type!==`submit`&&this.type!==`reset`||!this.getForm())return;let t=this.constructLightDOMButton();this.parentElement?.append(t),t.click(),t.remove()}handleInvalid(){this.dispatchEvent(new en)}handleLabelSlotChange(){let e=this.labelSlot.assignedNodes({flatten:!0}),t=!1,n=!1,r=!1,i=!1;[...e].forEach(e=>{if(e.nodeType===Node.ELEMENT_NODE){let r=e;r.localName===`wa-icon`?(n=!0,t||=r.label!==void 0):i=!0}else e.nodeType===Node.TEXT_NODE&&(e.textContent?.trim()||``).length>0&&(r=!0)}),this.isIconButton=n&&!r&&!i,this.customStates.set(`icon-button`,this.isIconButton),this.isIconButton&&!t&&console.warn(`Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.`,this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.customStates.set(`disabled`,this.disabled),this.updateValidity()}handleHrefChange(){this.customStates.set(`link`,this.isLink())}handleLoadingChange(){this.customStates.set(`loading`,this.loading)}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=this.isLink(),t=e?_n`a`:_n`button`;return yn`
      <${t}
        part="base button"
        class=${mn({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()===`rtl`,"has-label":this.hasSlotController.test(`[default]`),"has-start":this.hasSlotController.test(`start`,`withStart`),"has-end":this.hasSlotController.test(`end`,`withEnd`),"is-icon-button":this.isIconButton})}
        ?disabled=${ot(e?void 0:this.disabled)}
        type=${ot(e?void 0:this.type)}
        title=${this.title}
        name=${ot(e?void 0:this.name)}
        value=${ot(e?void 0:this.value)}
        href=${ot(e?this.href:void 0)}
        target=${ot(e?this.target:void 0)}
        download=${ot(e?this.download:void 0)}
        rel=${ot(e&&this.rel?this.rel:void 0)}
        role=${ot(e?void 0:`button`)}
        aria-disabled=${ot(e&&this.disabled?`true`:void 0)}
        aria-busy=${this.loading?`true`:`false`}
        tabindex=${this.disabled?`-1`:`0`}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?yn`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:``}
        ${this.loading?yn`<wa-spinner part="spinner"></wa-spinner>`:``}
      </${t}>
    `}};j.shadowRootOptions={...nn.shadowRootOptions,delegatesFocus:!0},j.css=[ln,un,cn],k([$e(`.button`)],j.prototype,`button`,2),k([$e(`slot:not([name])`)],j.prototype,`labelSlot`,2),k([Ze()],j.prototype,`invalid`,2),k([Ze()],j.prototype,`isIconButton`,2),k([A()],j.prototype,`title`,2),k([A({reflect:!0})],j.prototype,`variant`,2),k([A({reflect:!0})],j.prototype,`appearance`,2),k([A({reflect:!0})],j.prototype,`size`,2),k([Ve(`size`)],j.prototype,`handleSizeChange`,1),k([A({attribute:`with-caret`,type:Boolean,reflect:!0})],j.prototype,`withCaret`,2),k([A({attribute:`with-start`,type:Boolean})],j.prototype,`withStart`,2),k([A({attribute:`with-end`,type:Boolean})],j.prototype,`withEnd`,2),k([A({type:Boolean})],j.prototype,`disabled`,2),k([A({type:Boolean,reflect:!0})],j.prototype,`loading`,2),k([A({type:Boolean,reflect:!0})],j.prototype,`pill`,2),k([A()],j.prototype,`type`,2),k([A({reflect:!0})],j.prototype,`name`,2),k([A({reflect:!0})],j.prototype,`value`,2),k([A({reflect:!0})],j.prototype,`href`,2),k([A()],j.prototype,`target`,2),k([A()],j.prototype,`rel`,2),k([A()],j.prototype,`download`,2),k([A({attribute:`formaction`})],j.prototype,`formAction`,2),k([A({attribute:`formenctype`})],j.prototype,`formEnctype`,2),k([A({attribute:`formmethod`})],j.prototype,`formMethod`,2),k([A({attribute:`formnovalidate`,type:Boolean})],j.prototype,`formNoValidate`,2),k([A({attribute:`formtarget`})],j.prototype,`formTarget`,2),k([Ve(`disabled`,{waitUntilFirstUpdate:!0})],j.prototype,`handleDisabledChange`,1),k([Ve(`href`)],j.prototype,`handleHrefChange`,1),k([Ve(`loading`,{waitUntilFirstUpdate:!0})],j.prototype,`handleLoadingChange`,1),j=k([Je(`wa-button`)],j),j.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var bn=c`
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
`,xn=class extends at{constructor(){super(...arguments),this.localize=new xt(this)}render(){return ye`
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
    `}};xn.css=bn,xn=k([Je(`wa-spinner`)],xn);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Sn=t({default:()=>j}),Cn=c`
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
`;function wn(e,t){return new Promise(n=>{let r=new AbortController,{signal:i}=r;if(e.classList.contains(t))return;e.classList.add(t);let a=!1,o=()=>{a||(a=!0,e.classList.remove(t),n(),r.abort())};e.addEventListener(`animationend`,o,{once:!0,signal:i}),e.addEventListener(`animationcancel`,o,{once:!0,signal:i}),requestAnimationFrame(()=>{!a&&e.getAnimations().length===0&&o()})})}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Tn=class extends at{constructor(){super(...arguments),this.hasSlotController=new sn(this,`[default]`,`start`,`end`),this.active=!1,this.variant=`default`,this.size=`m`,this.checkboxAdjacent=!1,this.submenuAdjacent=!1,this.type=`normal`,this.checked=!1,this.disabled=!1,this.submenuOpen=!1,this.hasSubmenu=!1,this.handleSlotChange=()=>{this.hasSubmenu=this.hasSlotController.test(`submenu`),this.updateHasSubmenuState(),this.hasSubmenu?(this.setAttribute(`aria-haspopup`,`menu`),this.setAttribute(`aria-expanded`,this.submenuOpen?`true`:`false`)):(this.removeAttribute(`aria-haspopup`),this.removeAttribute(`aria-expanded`))},this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handlePointerEnter=e=>{e.pointerType===`mouse`&&this.hasSubmenu&&!this.disabled&&(this.notifyParentOfOpening(),this.submenuOpen=!0)}}handleSizeChange(){on(this.localName,this.size)}connectedCallback(){super.connectedCallback(),this.addEventListener?.(`click`,this.handleHostClick),this.addEventListener?.(`pointerenter`,this.handlePointerEnter),this.shadowRoot?.addEventListener?.(`click`,this.handleClick,{capture:!0}),this.shadowRoot?.addEventListener?.(`slotchange`,this.handleSlotChange)}disconnectedCallback(){super.disconnectedCallback(),this.closeSubmenu(),this.removeEventListener?.(`click`,this.handleHostClick),this.removeEventListener?.(`pointerenter`,this.handlePointerEnter),this.shadowRoot?.removeEventListener?.(`click`,this.handleClick,{capture:!0}),this.shadowRoot?.removeEventListener?.(`slotchange`,this.handleSlotChange)}firstUpdated(e){super.firstUpdated(e),this.setAttribute(`tabindex`,`-1`),this.hasSubmenu=this.hasSlotController.test(`submenu`),this.updateHasSubmenuState()}updated(e){e.has(`active`)&&(this.setAttribute(`tabindex`,this.active?`0`:`-1`),this.customStates.set(`active`,this.active)),e.has(`checked`)&&(this.type===`checkbox`?this.setAttribute(`aria-checked`,this.checked?`true`:`false`):this.removeAttribute(`aria-checked`),this.customStates.set(`checked`,this.checked)),e.has(`disabled`)&&(this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`),this.customStates.set(`disabled`,this.disabled)),e.has(`type`)&&(this.type===`checkbox`?(this.setAttribute(`role`,`menuitemcheckbox`),this.setAttribute(`aria-checked`,this.checked?`true`:`false`)):(this.setAttribute(`role`,`menuitem`),this.removeAttribute(`aria-checked`))),(e.has(`href`)||e.has(`hasSubmenu`))&&this.customStates.set(`link`,this.isLink()),e.has(`submenuOpen`)&&(this.customStates.set(`submenu-open`,this.submenuOpen),this.submenuOpen?this.openSubmenu():this.closeSubmenu())}updateHasSubmenuState(){this.customStates.set(`has-submenu`,this.hasSubmenu)}async openSubmenu(){let e=this.submenuElement;!this.hasSubmenu||!e||!this.isConnected||(this.notifyParentOfOpening(),e.showPopover?.(),e.hidden=!1,e.setAttribute(`data-visible`,``),this.submenuOpen=!0,this.setAttribute(`aria-expanded`,`true`),await wn(e,`show`),setTimeout(()=>{let e=this.getSubmenuItems();e.length>0&&(e.forEach((e,t)=>e.active=t===0),e[0].focus({preventScroll:!0}))},0))}notifyParentOfOpening(){let e=new CustomEvent(`submenu-opening`,{bubbles:!0,composed:!0,detail:{item:this}});this.dispatchEvent(e);let t=this.parentElement;t&&[...t.children].filter(e=>e!==this&&e.localName===`wa-dropdown-item`&&e.getAttribute(`slot`)===this.getAttribute(`slot`)&&e.submenuOpen).forEach(e=>{e.submenuOpen=!1})}async closeSubmenu(){let e=this.submenuElement;!this.hasSubmenu||!e||(this.submenuOpen=!1,this.setAttribute(`aria-expanded`,`false`),e.hidden||(await wn(e,`hide`),e?.isConnected&&(e.hidden=!0,e.removeAttribute(`data-visible`),e.hidePopover?.())))}isLink(){return!!this.href&&!this.hasSubmenu}navigate(e){let t=this.linkElement;!this.isLink()||this.disabled||!t||t.dispatchEvent(new MouseEvent(`click`,{bubbles:!1,cancelable:!0,composed:!1,altKey:e?.altKey??!1,ctrlKey:e?.ctrlKey??!1,metaKey:e?.metaKey??!1,shiftKey:e?.shiftKey??!1}))}getSubmenuItems(){return[...this.children].filter(e=>e.localName===`wa-dropdown-item`&&e.getAttribute(`slot`)===`submenu`&&!e.hasAttribute(`disabled`))}render(){return ye`
      ${this.href?ye`
            <a
              id="link"
              href=${this.href}
              target=${ot(this.target)}
              rel=${ot(this.rel)}
              download=${ot(this.download)}
              tabindex="-1"
              aria-hidden="true"
            ></a>
          `:``}
      ${this.type===`checkbox`?ye`
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

      ${this.hasSubmenu?ye`
            <wa-icon
              id="submenu-indicator"
              part="submenu-icon"
              exportparts="svg:submenu-icon__svg"
              library="system"
              name="chevron-right"
            ></wa-icon>
          `:``}
      ${this.hasSubmenu?ye`
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
    `}};Tn.css=Cn,k([$e(`#submenu`)],Tn.prototype,`submenuElement`,2),k([$e(`#link`)],Tn.prototype,`linkElement`,2),k([A({type:Boolean})],Tn.prototype,`active`,2),k([A({reflect:!0})],Tn.prototype,`variant`,2),k([A({reflect:!0})],Tn.prototype,`size`,2),k([Ve(`size`)],Tn.prototype,`handleSizeChange`,1),k([A({attribute:`checkbox-adjacent`,type:Boolean,reflect:!0})],Tn.prototype,`checkboxAdjacent`,2),k([A({attribute:`submenu-adjacent`,type:Boolean,reflect:!0})],Tn.prototype,`submenuAdjacent`,2),k([A()],Tn.prototype,`value`,2),k([A({reflect:!0})],Tn.prototype,`type`,2),k([A({type:Boolean})],Tn.prototype,`checked`,2),k([A({type:Boolean,reflect:!0})],Tn.prototype,`disabled`,2),k([A({type:Boolean,reflect:!0})],Tn.prototype,`submenuOpen`,2),k([A({reflect:!0})],Tn.prototype,`href`,2),k([A()],Tn.prototype,`target`,2),k([A()],Tn.prototype,`rel`,2),k([A()],Tn.prototype,`download`,2),k([Ze()],Tn.prototype,`hasSubmenu`,2),Tn=k([Je(`wa-dropdown-item`)],Tn);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var En=t({default:()=>Tn}),Dn=class extends Event{constructor(e){super(`wa-select`,{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function*On(e=document.activeElement){e!=null&&(yield e,`shadowRoot`in e&&e.shadowRoot&&e.shadowRoot.mode!==`closed`&&(yield*On(e.shadowRoot.activeElement)))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var kn=c`
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
`,An=class extends Event{constructor(){super(`wa-show`,{bubbles:!0,cancelable:!0,composed:!0})}},jn=class extends Event{constructor(e){super(`wa-hide`,{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}},Mn=class extends Event{constructor(){super(`wa-after-hide`,{bubbles:!0,cancelable:!1,composed:!0})}},Nn=class extends Event{constructor(){super(`wa-after-show`,{bubbles:!0,cancelable:!1,composed:!0})}},Pn=[];function Fn(e){In(e),Pn.push(e)}function In(e){for(let t=Pn.length-1;t>=0;t--)if(Pn[t]===e){Pn.splice(t,1);break}}function Ln(e){return Pn.length>0&&Pn[Pn.length-1]===e}let Rn=(e=21)=>{let t=``,n=crypto.getRandomValues(new Uint8Array(e|=0));for(;e--;)t+=`useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict`[n[e]&63];return t};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function zn(e=``){return`${e}${Rn()}`}const Bn=Math.min,Vn=Math.max,Hn=Math.round,Un=Math.floor,Wn=e=>({x:e,y:e}),Gn={left:`right`,right:`left`,bottom:`top`,top:`bottom`},Kn={start:`end`,end:`start`};function qn(e,t,n){return Vn(e,Bn(t,n))}function Jn(e,t){return typeof e==`function`?e(t):e}function Yn(e){return e.split(`-`)[0]}function Xn(e){return e.split(`-`)[1]}function Zn(e){return e===`x`?`y`:`x`}function Qn(e){return e===`y`?`height`:`width`}const $n=new Set([`top`,`bottom`]);function er(e){return $n.has(Yn(e))?`y`:`x`}function tr(e){return Zn(er(e))}function nr(e,t,n){n===void 0&&(n=!1);let r=Xn(e),i=tr(e),a=Qn(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=dr(o)),[o,dr(o)]}function rr(e){let t=dr(e);return[ir(e),t,ir(t)]}function ir(e){return e.replace(/start|end/g,e=>Kn[e])}const ar=[`left`,`right`],or=[`right`,`left`],sr=[`top`,`bottom`],cr=[`bottom`,`top`];function lr(e,t,n){switch(e){case`top`:case`bottom`:return n?t?or:ar:t?ar:or;case`left`:case`right`:return t?sr:cr;default:return[]}}function ur(e,t,n,r){let i=Xn(e),a=lr(Yn(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(ir)))),a}function dr(e){return e.replace(/left|right|bottom|top/g,e=>Gn[e])}function fr(e){return{top:0,right:0,bottom:0,left:0,...e}}function pr(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:fr(e)}function mr(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function hr(e,t,n){let{reference:r,floating:i}=e,a=er(t),o=tr(t),s=Qn(o),c=Yn(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}switch(Xn(t)){case`start`:p[o]-=f*(n&&l?-1:1);break;case`end`:p[o]+=f*(n&&l?-1:1);break}return p}const gr=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=a.filter(Boolean),c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=hr(l,r,c),f=r,p={},m=0;for(let n=0;n<s.length;n++){let{name:a,fn:h}=s[n],{x:g,y:_,data:v,reset:y}=await h({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:p,rects:l,platform:o,elements:{reference:e,floating:t}});u=g??u,d=_??d,p={...p,[a]:{...p[a],...v}},y&&m<=50&&(m++,typeof y==`object`&&(y.placement&&(f=y.placement),y.rects&&(l=y.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):y.rects),{x:u,y:d}=hr(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:p}};async function _r(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=Jn(t,e),p=pr(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=mr(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=mr(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}const vr=e=>({name:`arrow`,options:e,async fn(t){let{x:n,y:r,placement:i,rects:a,platform:o,elements:s,middlewareData:c}=t,{element:l,padding:u=0}=Jn(e,t)||{};if(l==null)return{};let d=pr(u),f={x:n,y:r},p=tr(i),m=Qn(p),h=await o.getDimensions(l),g=p===`y`,_=g?`top`:`left`,v=g?`bottom`:`right`,y=g?`clientHeight`:`clientWidth`,b=a.reference[m]+a.reference[p]-f[p]-a.floating[m],ee=f[p]-a.reference[p],te=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l)),x=te?te[y]:0;(!x||!await(o.isElement==null?void 0:o.isElement(te)))&&(x=s.floating[y]||a.floating[m]);let S=b/2-ee/2,C=x/2-h[m]/2-1,ne=Bn(d[_],C),re=Bn(d[v],C),ie=ne,ae=x-h[m]-re,w=x/2-h[m]/2+S,T=qn(ie,w,ae),E=!c.arrow&&Xn(i)!=null&&w!==T&&a.reference[m]/2-(w<ie?ne:re)-h[m]/2<0,oe=E?w<ie?w-ie:w-ae:0;return{[p]:f[p]+oe,data:{[p]:T,centerOffset:w-T-oe,...E&&{alignmentOffset:oe}},reset:E}}}),yr=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=Jn(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=Yn(r),_=er(o),v=Yn(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),b=d||(v||!m?[dr(o)]:rr(o)),ee=p!==`none`;!d&&ee&&b.push(...ur(o,m,p,y));let te=[o,...b],x=await _r(t,h),S=[],C=i.flip?.overflows||[];if(l&&S.push(x[g]),u){let e=nr(r,a,y);S.push(x[e[0]],x[e[1]])}if(C=[...C,{placement:r,overflows:S}],!S.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=te[e];if(t&&(!(u===`alignment`&&_!==er(t))||C.every(e=>er(e.placement)===_?e.overflows[0]>0:!0)))return{data:{index:e,overflows:C},reset:{placement:t}};let n=C.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=C.filter(e=>{if(ee){let t=er(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o;break}if(r!==n)return{reset:{placement:n}}}return{}}}},br=new Set([`left`,`top`]);async function xr(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=Yn(n),s=Xn(n),c=er(n)===`y`,l=br.has(o)?-1:1,u=a&&c?-1:1,d=Jn(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}const Sr=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await xr(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},Cr=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i}=t,{mainAxis:a=!0,crossAxis:o=!1,limiter:s={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...c}=Jn(e,t),l={x:n,y:r},u=await _r(t,c),d=er(Yn(i)),f=Zn(d),p=l[f],m=l[d];if(a){let e=f===`y`?`top`:`left`,t=f===`y`?`bottom`:`right`,n=p+u[e],r=p-u[t];p=qn(n,p,r)}if(o){let e=d===`y`?`top`:`left`,t=d===`y`?`bottom`:`right`,n=m+u[e],r=m-u[t];m=qn(n,m,r)}let h=s.fn({...t,[f]:p,[d]:m});return{...h,data:{x:h.x-n,y:h.y-r,enabled:{[f]:a,[d]:o}}}}}},wr=function(e){return e===void 0&&(e={}),{name:`size`,options:e,async fn(t){var n,r;let{placement:i,rects:a,platform:o,elements:s}=t,{apply:c=()=>{},...l}=Jn(e,t),u=await _r(t,l),d=Yn(i),f=Xn(i),p=er(i)===`y`,{width:m,height:h}=a.floating,g,_;d===`top`||d===`bottom`?(g=d,_=f===(await(o.isRTL==null?void 0:o.isRTL(s.floating))?`start`:`end`)?`left`:`right`):(_=d,g=f===`end`?`top`:`bottom`);let v=h-u.top-u.bottom,y=m-u.left-u.right,b=Bn(h-u[g],v),ee=Bn(m-u[_],y),te=!t.middlewareData.shift,x=b,S=ee;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(S=y),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(x=v),te&&!f){let e=Vn(u.left,0),t=Vn(u.right,0),n=Vn(u.top,0),r=Vn(u.bottom,0);p?S=m-2*(e!==0||t!==0?e+t:Vn(u.left,u.right)):x=h-2*(n!==0||r!==0?n+r:Vn(u.top,u.bottom))}await c({...t,availableWidth:S,availableHeight:x});let C=await o.getDimensions(s.floating);return m!==C.width||h!==C.height?{reset:{rects:!0}}:{}}}};function Tr(){return typeof window<`u`}function Er(e){return kr(e)?(e.nodeName||``).toLowerCase():`#document`}function Dr(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Or(e){return((kr(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function kr(e){return Tr()?e instanceof Node||e instanceof Dr(e).Node:!1}function Ar(e){return Tr()?e instanceof Element||e instanceof Dr(e).Element:!1}function jr(e){return Tr()?e instanceof HTMLElement||e instanceof Dr(e).HTMLElement:!1}function Mr(e){return!Tr()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof Dr(e).ShadowRoot}const Nr=new Set([`inline`,`contents`]);function Pr(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=qr(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!Nr.has(i)}const Fr=new Set([`table`,`td`,`th`]);function Ir(e){return Fr.has(Er(e))}const Lr=[`:popover-open`,`:modal`];function Rr(e){return Lr.some(t=>{try{return e.matches(t)}catch{return!1}})}const zr=[`transform`,`translate`,`scale`,`rotate`,`perspective`],Br=[`transform`,`translate`,`scale`,`rotate`,`perspective`,`filter`],Vr=[`paint`,`layout`,`strict`,`content`];function Hr(e){let t=Wr(),n=Ar(e)?qr(e):e;return zr.some(e=>n[e]?n[e]!==`none`:!1)||(n.containerType?n.containerType!==`normal`:!1)||!t&&(n.backdropFilter?n.backdropFilter!==`none`:!1)||!t&&(n.filter?n.filter!==`none`:!1)||Br.some(e=>(n.willChange||``).includes(e))||Vr.some(e=>(n.contain||``).includes(e))}function Ur(e){let t=Yr(e);for(;jr(t)&&!Kr(t);){if(Hr(t))return t;if(Rr(t))return null;t=Yr(t)}return null}function Wr(){return typeof CSS>`u`||!CSS.supports?!1:CSS.supports(`-webkit-backdrop-filter`,`none`)}const Gr=new Set([`html`,`body`,`#document`]);function Kr(e){return Gr.has(Er(e))}function qr(e){return Dr(e).getComputedStyle(e)}function Jr(e){return Ar(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Yr(e){if(Er(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||Mr(e)&&e.host||Or(e);return Mr(t)?t.host:t}function Xr(e){let t=Yr(e);return Kr(t)?e.ownerDocument?e.ownerDocument.body:e.body:jr(t)&&Pr(t)?t:Xr(t)}function Zr(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=Xr(e),i=r===e.ownerDocument?.body,a=Dr(r);if(i){let e=Qr(a);return t.concat(a,a.visualViewport||[],Pr(r)?r:[],e&&n?Zr(e):[])}return t.concat(r,Zr(r,[],n))}function Qr(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function $r(e){let t=qr(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=jr(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=Hn(n)!==a||Hn(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function ei(e){return Ar(e)?e:e.contextElement}function ti(e){let t=ei(e);if(!jr(t))return Wn(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=$r(t),o=(a?Hn(n.width):n.width)/r,s=(a?Hn(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}const ni=Wn(0);function ri(e){let t=Dr(e);return!Wr()||!t.visualViewport?ni:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function ii(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==Dr(e)?!1:t}function ai(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=ei(e),o=Wn(1);t&&(r?Ar(r)&&(o=ti(r)):o=ti(e));let s=ii(a,n,r)?ri(a):Wn(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a){let e=Dr(a),t=r&&Ar(r)?Dr(r):r,n=e,i=Qr(n);for(;i&&r&&t!==n;){let e=ti(i),t=i.getBoundingClientRect(),r=qr(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=Dr(i),i=Qr(n)}}return mr({width:u,height:d,x:c,y:l})}function oi(e,t){let n=Jr(e).scrollLeft;return t?t.left+n:ai(Or(e)).left+n}function si(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-oi(e,n),y:n.top+t.scrollTop}}function ci(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=Or(r),s=t?Rr(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=Wn(1),u=Wn(0),d=jr(r);if((d||!d&&!a)&&((Er(r)!==`body`||Pr(o))&&(c=Jr(r)),jr(r))){let e=ai(r);l=ti(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?si(o,c):Wn(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function li(e){return Array.from(e.getClientRects())}function ui(e){let t=Or(e),n=Jr(e),r=e.ownerDocument.body,i=Vn(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),a=Vn(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),o=-n.scrollLeft+oi(e),s=-n.scrollTop;return qr(r).direction===`rtl`&&(o+=Vn(t.clientWidth,r.clientWidth)-i),{width:i,height:a,x:o,y:s}}function di(e,t){let n=Dr(e),r=Or(e),i=n.visualViewport,a=r.clientWidth,o=r.clientHeight,s=0,c=0;if(i){a=i.width,o=i.height;let e=Wr();(!e||e&&t===`fixed`)&&(s=i.offsetLeft,c=i.offsetTop)}let l=oi(r);if(l<=0){let e=r.ownerDocument,t=e.body,n=getComputedStyle(t),i=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,o=Math.abs(r.clientWidth-t.clientWidth-i);o<=25&&(a-=o)}else l<=25&&(a+=l);return{width:a,height:o,x:s,y:c}}const fi=new Set([`absolute`,`fixed`]);function pi(e,t){let n=ai(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=jr(e)?ti(e):Wn(1);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function mi(e,t,n){let r;if(t===`viewport`)r=di(e,n);else if(t===`document`)r=ui(Or(e));else if(Ar(t))r=pi(t,n);else{let n=ri(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return mr(r)}function hi(e,t){let n=Yr(e);return n===t||!Ar(n)||Kr(n)?!1:qr(n).position===`fixed`||hi(n,t)}function gi(e,t){let n=t.get(e);if(n)return n;let r=Zr(e,[],!1).filter(e=>Ar(e)&&Er(e)!==`body`),i=null,a=qr(e).position===`fixed`,o=a?Yr(e):e;for(;Ar(o)&&!Kr(o);){let t=qr(o),n=Hr(o);!n&&t.position===`fixed`&&(i=null),(a?!n&&!i:!n&&t.position===`static`&&i&&fi.has(i.position)||Pr(o)&&!n&&hi(e,o))?r=r.filter(e=>e!==o):i=t,o=Yr(o)}return t.set(e,r),r}function _i(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?Rr(t)?[]:gi(t,this._c):[].concat(n),r],o=a[0],s=a.reduce((e,n)=>{let r=mi(t,n,i);return e.top=Vn(r.top,e.top),e.right=Bn(r.right,e.right),e.bottom=Bn(r.bottom,e.bottom),e.left=Vn(r.left,e.left),e},mi(t,o,i));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}}function vi(e){let{width:t,height:n}=$r(e);return{width:t,height:n}}function yi(e,t,n){let r=jr(t),i=Or(t),a=n===`fixed`,o=ai(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=Wn(0);function l(){c.x=oi(i)}if(r||!r&&!a)if((Er(t)!==`body`||Pr(i))&&(s=Jr(t)),r){let e=ai(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else i&&l();a&&!r&&i&&l();let u=i&&!r&&!a?si(i,s):Wn(0);return{x:o.left+s.scrollLeft-c.x-u.x,y:o.top+s.scrollTop-c.y-u.y,width:o.width,height:o.height}}function bi(e){return qr(e).position===`static`}function xi(e,t){if(!jr(e)||qr(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return Or(e)===n&&(n=n.ownerDocument.body),n}function Si(e,t){let n=Dr(e);if(Rr(e))return n;if(!jr(e)){let t=Yr(e);for(;t&&!Kr(t);){if(Ar(t)&&!bi(t))return t;t=Yr(t)}return n}let r=xi(e,t);for(;r&&Ir(r)&&bi(r);)r=xi(r,t);return r&&Kr(r)&&bi(r)&&!Hr(r)?n:r||Ur(e)||n}const Ci=async function(e){let t=this.getOffsetParent||Si,n=this.getDimensions,r=await n(e.floating);return{reference:yi(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function wi(e){return qr(e).direction===`rtl`}const Ti={convertOffsetParentRelativeRectToViewportRelativeRect:ci,getDocumentElement:Or,getClippingRect:_i,getOffsetParent:Si,getElementRects:Ci,getClientRects:li,getDimensions:vi,getScale:ti,isElement:Ar,isRTL:wi};function Ei(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Di(e,t){let n=null,r,i=Or(e);function a(){var e;clearTimeout(r),(e=n)==null||e.disconnect(),n=null}function o(s,c){s===void 0&&(s=!1),c===void 0&&(c=1),a();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(s||t(),!f||!p)return;let m=Un(d),h=Un(i.clientWidth-(u+f)),g=Un(i.clientHeight-(d+p)),_=Un(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:Vn(0,Bn(1,c))||1},y=!0;function b(t){let n=t[0].intersectionRatio;if(n!==c){if(!y)return o();n?o(!1,n):r=setTimeout(()=>{o(!1,1e-7)},1e3)}n===1&&!Ei(l,e.getBoundingClientRect())&&o(),y=!1}try{n=new IntersectionObserver(b,{...v,root:i.ownerDocument})}catch{n=new IntersectionObserver(b,v)}n.observe(e)}return o(!0),a}function Oi(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=ei(e),u=i||a?[...l?Zr(l):[],...Zr(t)]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n,{passive:!0}),a&&e.addEventListener(`resize`,n)});let d=l&&s?Di(l,n):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),p.observe(t));let m,h=c?ai(e):null;c&&g();function g(){let t=ai(e);h&&!Ei(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}const ki=Sr,Ai=Cr,ji=yr,Mi=wr,Ni=vr,Pi=(e,t,n)=>{let r=new Map,i={platform:Ti,...n},a={...i.platform,_c:r};return gr(e,t,{...i,platform:a})};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Fi=new Set,Ii=class extends at{constructor(){super(...arguments),this.submenuCleanups=new Map,this.localize=new xt(this),this.userTypedQuery=``,this.openSubmenuStack=[],this.open=!1,this.size=`m`,this.placement=`bottom-start`,this.distance=0,this.skidding=0,this.handleDocumentKeyDown=async e=>{let t=this.localize.dir()===`rtl`;if(e.key===`Escape`&&this.open&&Ln(this)){let t=this.getTrigger();e.preventDefault(),e.stopPropagation(),this.open=!1,t?.focus({preventScroll:!0});return}let n=[...On()].find(e=>e.localName===`wa-dropdown-item`),r=n?.localName===`wa-dropdown-item`,i=this.getCurrentSubmenuItem(),a=!!i,o,s,c;a?(o=this.getSubmenuItems(i),s=o.find(e=>e.active||e===n),c=s?o.indexOf(s):-1):(o=this.getItems(),s=o.find(e=>e.active||e===n),c=s?o.indexOf(s):-1);let l;if(e.key===`ArrowUp`&&(e.preventDefault(),e.stopPropagation(),l=c>0?o[c-1]:o[o.length-1]),e.key===`ArrowDown`&&(e.preventDefault(),e.stopPropagation(),l=c!==-1&&c<o.length-1?o[c+1]:o[0]),e.key===(t?`ArrowLeft`:`ArrowRight`)&&r&&s&&s.hasSubmenu){e.preventDefault(),e.stopPropagation(),s.submenuOpen=!0,this.addToSubmenuStack(s),setTimeout(()=>{let e=this.getSubmenuItems(s);e.length>0&&(e.forEach((e,t)=>e.active=t===0),e[0].focus({preventScroll:!0}))},0);return}if(e.key===(t?`ArrowRight`:`ArrowLeft`)&&a){e.preventDefault(),e.stopPropagation();let t=this.removeFromSubmenuStack();t&&(t.submenuOpen=!1,setTimeout(()=>{t.focus({preventScroll:!0}),t.active=!0,(t.slot===`submenu`?this.getSubmenuItems(t.parentElement):this.getItems()).forEach(e=>{e!==t&&(e.active=!1)})},0));return}if((e.key===`Home`||e.key===`End`)&&(e.preventDefault(),e.stopPropagation(),l=e.key===`Home`?o[0]:o[o.length-1]),e.key===`Tab`&&await this.hideMenu(),e.key.length===1&&!(e.metaKey||e.ctrlKey||e.altKey)&&!(e.key===` `&&this.userTypedQuery===``)&&(clearTimeout(this.userTypedTimeout),this.userTypedTimeout=setTimeout(()=>{this.userTypedQuery=``},1e3),this.userTypedQuery+=e.key,o.some(e=>{let t=(e.textContent||``).trim().toLowerCase(),n=this.userTypedQuery.trim().toLowerCase();return t.startsWith(n)?(l=e,!0):!1})),l){e.preventDefault(),e.stopPropagation(),o.forEach(e=>e.active=e===l),l.focus({preventScroll:!0}),l.scrollIntoView({block:`nearest`});return}(e.key===`Enter`||e.key===` `&&this.userTypedQuery===``)&&r&&s&&(e.preventDefault(),e.stopPropagation(),s.hasSubmenu?(s.submenuOpen=!0,this.addToSubmenuStack(s),setTimeout(()=>{let e=this.getSubmenuItems(s);e.length>0&&(e.forEach((e,t)=>e.active=t===0),e[0].focus({preventScroll:!0}))},0)):this.makeSelection(s,e))},this.handleDocumentPointerDown=e=>{e.composedPath().some(e=>e instanceof HTMLElement?e===this||e.closest(`wa-dropdown, [part="submenu"]`):!1)||(this.open=!1)},this.handleGlobalMouseMove=e=>{let t=this.getCurrentSubmenuItem();if(!t?.submenuOpen||!t.submenuElement)return;let n=t.submenuElement.getBoundingClientRect(),r=this.localize.dir()===`rtl`,i=r?n.right:n.left,a=r?Math.max(e.clientX,i):Math.min(e.clientX,i),o=Math.max(n.top,Math.min(e.clientY,n.bottom));t.submenuElement.style.setProperty(`--safe-triangle-cursor-x`,`${a}px`),t.submenuElement.style.setProperty(`--safe-triangle-cursor-y`,`${o}px`);let s=e.composedPath(),c=t.matches(`:hover`),l=!!t.submenuElement?.matches(`:hover`),u=c||!!s.find(e=>e===t),d=l||!!s.find(e=>e instanceof HTMLElement&&e.closest(`[part="submenu"]`)===t.submenuElement);!u&&!d&&setTimeout(()=>{!c&&!l&&(t.submenuOpen=!1)},100)}}handleSizeChange(){on(this.localName,this.size)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.userTypedTimeout),this.closeAllSubmenus(),this.submenuCleanups.forEach(e=>e()),this.submenuCleanups.clear(),document.removeEventListener(`mousemove`,this.handleGlobalMouseMove),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`pointerdown`,this.handleDocumentPointerDown),In(this)}firstUpdated(e){super.firstUpdated(e),this.syncAriaAttributes()}async updated(e){if(e.has(`open`)){let t=e.get(`open`);if(t===this.open||t===void 0&&this.open===!1)return;this.customStates.set(`open`,this.open),this.open?await this.showMenu():(this.closeAllSubmenus(),await this.hideMenu())}e.has(`size`)&&this.syncItemSizes()}getItems(e=!1){let t=(this.defaultSlot?.assignedElements({flatten:!0})??[]).filter(e=>e.localName===`wa-dropdown-item`);return e?t:t.filter(e=>!e.disabled)}getSubmenuItems(e,t=!1){let n=e.shadowRoot?.querySelector(`slot[name="submenu"]`)||e.querySelector(`slot[name="submenu"]`);if(!n)return[];let r=n.assignedElements({flatten:!0}).filter(e=>e.localName===`wa-dropdown-item`);return t?r:r.filter(e=>!e.disabled)}syncItemSizes(){(this.defaultSlot?.assignedElements({flatten:!0})??[]).filter(e=>e.localName===`wa-dropdown-item`).forEach(e=>e.size=this.size)}addToSubmenuStack(e){let t=this.openSubmenuStack.indexOf(e);t===-1?this.openSubmenuStack.push(e):this.openSubmenuStack=this.openSubmenuStack.slice(0,t+1)}removeFromSubmenuStack(){return this.openSubmenuStack.pop()}getCurrentSubmenuItem(){return this.openSubmenuStack.length>0?this.openSubmenuStack[this.openSubmenuStack.length-1]:void 0}closeAllSubmenus(){this.getItems(!0).forEach(e=>{e.submenuOpen=!1}),this.openSubmenuStack=[]}closeSiblingSubmenus(e){let t=e.closest(`wa-dropdown-item:not([slot="submenu"])`),n;n=t?this.getSubmenuItems(t,!0):this.getItems(!0),n.forEach(t=>{t!==e&&t.submenuOpen&&(t.submenuOpen=!1)}),this.openSubmenuStack.includes(e)||this.openSubmenuStack.push(e)}getTrigger(){return this.querySelector(`[slot="trigger"]`)}async showMenu(){if(!this.getTrigger()||!this.popup||!this.menu)return;let e=new An;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}if(this.popup.active)return;Fi.forEach(e=>e.open=!1),this.popup.active=!0,this.open=!0,Fi.add(this),Fn(this),this.syncAriaAttributes(),document.addEventListener(`keydown`,this.handleDocumentKeyDown),document.addEventListener(`pointerdown`,this.handleDocumentPointerDown),document.addEventListener(`mousemove`,this.handleGlobalMouseMove),this.menu.classList.remove(`hide`),await wn(this.menu,`show`);let t=this.getItems();t.length>0&&(t.forEach((e,t)=>e.active=t===0),t[0].focus({preventScroll:!0})),this.dispatchEvent(new Nn)}async hideMenu(){if(!this.popup||!this.menu)return;let e=new jn({source:this});if(this.dispatchEvent(e),e.defaultPrevented){this.open=!0;return}this.open=!1,Fi.delete(this),In(this),this.syncAriaAttributes(),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`pointerdown`,this.handleDocumentPointerDown),document.removeEventListener(`mousemove`,this.handleGlobalMouseMove),this.menu.classList.remove(`show`),await wn(this.menu,`hide`),this.popup.active=this.open,this.dispatchEvent(new Mn)}handleMenuClick(e){let t=e.target.closest(`wa-dropdown-item`);if(!(!t||t.disabled)){if(t.hasSubmenu){t.submenuOpen||=(this.closeSiblingSubmenus(t),this.addToSubmenuStack(t),!0),e.stopPropagation();return}this.makeSelection(t,e)}}async handleMenuSlotChange(){let e=this.getItems(!0);await Promise.all(e.map(e=>e.updateComplete)),this.syncItemSizes();let t=e.some(e=>e.type===`checkbox`),n=e.some(e=>e.hasSubmenu);e.forEach((r,i)=>{r.setAttribute(`aria-posinset`,String(i+1)),r.setAttribute(`aria-setsize`,String(e.length)),r.active=i===0,r.checkboxAdjacent=t,r.submenuAdjacent=n})}handleTriggerClick(){this.open=!this.open}handleSubmenuOpening(e){let t=e.detail.item;this.closeSiblingSubmenus(t),this.addToSubmenuStack(t),this.setupSubmenuPosition(t),this.processSubmenuItems(t)}setupSubmenuPosition(e){if(!e.submenuElement)return;this.cleanupSubmenuPosition(e);let t=Oi(e,e.submenuElement,()=>{this.positionSubmenu(e),this.updateSafeTriangleCoordinates(e)});this.submenuCleanups.set(e,t);let n=e.submenuElement.querySelector(`slot[name="submenu"]`);n&&(n.removeEventListener(`slotchange`,Ii.handleSubmenuSlotChange),n.addEventListener(`slotchange`,Ii.handleSubmenuSlotChange),Ii.handleSubmenuSlotChange({target:n}))}static handleSubmenuSlotChange(e){let t=e.target;if(!t)return;let n=t.assignedElements().filter(e=>e.localName===`wa-dropdown-item`);if(n.length===0)return;let r=n.some(e=>e.hasSubmenu),i=n.some(e=>e.type===`checkbox`);n.forEach(e=>{e.submenuAdjacent=r,e.checkboxAdjacent=i})}processSubmenuItems(e){if(!e.submenuElement)return;let t=this.getSubmenuItems(e,!0),n=t.some(e=>e.hasSubmenu);t.forEach(e=>{e.submenuAdjacent=n})}cleanupSubmenuPosition(e){let t=this.submenuCleanups.get(e);t&&(t(),this.submenuCleanups.delete(e))}positionSubmenu(e){if(!e.submenuElement)return;let t=this.localize.dir()===`rtl`?`left-start`:`right-start`;Pi(e,e.submenuElement,{placement:t,middleware:[ki({mainAxis:0,crossAxis:-5}),ji({fallbackStrategy:`bestFit`}),Ai({padding:8,crossAxis:!0})]}).then(({x:t,y:n,placement:r})=>{e.submenuElement.setAttribute(`data-placement`,r),Object.assign(e.submenuElement.style,{left:`${t}px`,top:`${n}px`})})}updateSafeTriangleCoordinates(e){if(!e.submenuElement||!e.submenuOpen)return;if(document.activeElement?.matches(`:focus-visible`)){e.submenuElement.style.setProperty(`--safe-triangle-visible`,`none`);return}e.submenuElement.style.setProperty(`--safe-triangle-visible`,`block`);let t=e.submenuElement.getBoundingClientRect(),n=this.localize.dir()===`rtl`;e.submenuElement.style.setProperty(`--safe-triangle-submenu-start-x`,`${n?t.right:t.left}px`),e.submenuElement.style.setProperty(`--safe-triangle-submenu-start-y`,`${t.top}px`),e.submenuElement.style.setProperty(`--safe-triangle-submenu-end-x`,`${n?t.right:t.left}px`),e.submenuElement.style.setProperty(`--safe-triangle-submenu-end-y`,`${t.bottom}px`)}makeSelection(e,t){let n=this.getTrigger();if(e.disabled)return;e.type===`checkbox`&&(e.checked=!e.checked);let r=new Dn({item:e});this.dispatchEvent(r),r.defaultPrevented||(e.navigate(t),this.open=!1,n?.focus({preventScroll:!0}))}async syncAriaAttributes(){let e=this.getTrigger(),t;e&&(e.localName===`wa-button`?(await customElements.whenDefined(`wa-button`),await e.updateComplete,t=e.shadowRoot.querySelector(`[part~="base"]`)):t=e,t.hasAttribute(`id`)||t.setAttribute(`id`,zn(`wa-dropdown-trigger-`)),t.setAttribute(`aria-haspopup`,`menu`),t.setAttribute(`aria-expanded`,this.open?`true`:`false`),this.menu?.setAttribute(`aria-expanded`,`false`))}render(){let e=this.didSSR&&!this.hasUpdated?this.open:this.popup?.active;return ye`
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
    `}};Ii.css=[cn,kn],k([$e(`slot:not([name])`)],Ii.prototype,`defaultSlot`,2),k([$e(`#menu`)],Ii.prototype,`menu`,2),k([$e(`wa-popup`)],Ii.prototype,`popup`,2),k([A({type:Boolean,reflect:!0})],Ii.prototype,`open`,2),k([A({reflect:!0})],Ii.prototype,`size`,2),k([Ve(`size`)],Ii.prototype,`handleSizeChange`,1),k([A({reflect:!0})],Ii.prototype,`placement`,2),k([A({type:Number})],Ii.prototype,`distance`,2),k([A({type:Number})],Ii.prototype,`skidding`,2),Ii=k([Je(`wa-dropdown`)],Ii);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Li=class extends Event{constructor(){super(`wa-reposition`,{bubbles:!0,cancelable:!1,composed:!0})}},Ri=c`
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
`;function zi(e){return Vi(e)}function Bi(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Vi(e){for(let t=e;t;t=Bi(t))if(t instanceof Element&&getComputedStyle(t).display===`none`)return null;for(let t=Bi(e);t;t=Bi(t)){if(!(t instanceof Element))continue;let e=getComputedStyle(t);if(e.display!==`contents`&&(e.position!==`static`||Hr(e)||t.tagName===`BODY`))return t}return null}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Hi(e){return typeof e==`object`&&!!e&&`getBoundingClientRect`in e&&(`contextElement`in e?e instanceof Element:!0)}var Ui=!!globalThis?.HTMLElement?.prototype.hasOwnProperty(`popover`),Wi=class extends at{constructor(){super(...arguments),this.localize=new xt(this),this.SUPPORTS_POPOVER=!1,this.active=!1,this.placement=`top`,this.boundary=`viewport`,this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement=`anchor`,this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements=``,this.flipFallbackStrategy=`best-fit`,this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl&&this.popup){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),n=this.placement.includes(`top`)||this.placement.includes(`bottom`),r=0,i=0,a=0,o=0,s=0,c=0,l=0,u=0;n?e.top<t.top?(r=e.left,i=e.bottom,a=e.right,o=e.bottom,s=t.left,c=t.top,l=t.right,u=t.top):(r=t.left,i=t.bottom,a=t.right,o=t.bottom,s=e.left,c=e.top,l=e.right,u=e.top):e.left<t.left?(r=e.right,i=e.top,a=t.left,o=t.top,s=e.right,c=e.bottom,l=t.left,u=t.bottom):(r=t.right,i=t.top,a=e.left,o=e.top,s=t.right,c=t.bottom,l=e.left,u=e.bottom),this.style.setProperty(`--hover-bridge-top-left-x`,`${r}px`),this.style.setProperty(`--hover-bridge-top-left-y`,`${i}px`),this.style.setProperty(`--hover-bridge-top-right-x`,`${a}px`),this.style.setProperty(`--hover-bridge-top-right-y`,`${o}px`),this.style.setProperty(`--hover-bridge-bottom-left-x`,`${s}px`),this.style.setProperty(`--hover-bridge-bottom-left-y`,`${c}px`),this.style.setProperty(`--hover-bridge-bottom-right-x`,`${l}px`),this.style.setProperty(`--hover-bridge-bottom-right-y`,`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.SUPPORTS_POPOVER=Ui,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has(`active`)&&(this.active?this.start():this.stop()),e.has(`anchor`)&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){await this.stop(),this.anchor&&typeof this.anchor==`string`?this.anchorEl=this.getRootNode().getElementById(this.anchor):this.anchor instanceof Element||Hi(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector(`[slot="anchor"]`),this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){!this.anchorEl||!this.active||!this.isConnected||(this.popup?.showPopover?.(),this.cleanup=Oi(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.popup?.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute(`data-current-placement`),this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl||!this.popup)return;let e=[ki({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Mi({apply:({rects:e})=>{let t=this.sync===`width`||this.sync===`both`,n=this.sync===`height`||this.sync===`both`;this.popup.style.width=t?`${e.reference.width}px`:``,this.popup.style.height=n?`${e.reference.height}px`:``}})):(this.popup.style.width=``,this.popup.style.height=``);let t;this.SUPPORTS_POPOVER&&!Hi(this.anchor)&&this.boundary===`scroll`&&(t=Zr(this.anchorEl).filter(e=>e instanceof Element)),this.flip&&e.push(ji({boundary:this.flipBoundary||t,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy===`best-fit`?`bestFit`:`initialPlacement`,padding:this.flipPadding})),this.shift&&e.push(Ai({boundary:this.shiftBoundary||t,padding:this.shiftPadding})),this.autoSize?e.push(Mi({boundary:this.autoSizeBoundary||t,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{this.autoSize===`vertical`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-height`,`${t}px`):this.style.removeProperty(`--auto-size-available-height`),this.autoSize===`horizontal`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-width`,`${e}px`):this.style.removeProperty(`--auto-size-available-width`)}})):(this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`)),this.arrow&&e.push(Ni({element:this.arrowEl,padding:this.arrowPadding}));let n=this.SUPPORTS_POPOVER?e=>Ti.getOffsetParent(e,zi):Ti.getOffsetParent;Pi(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.SUPPORTS_POPOVER?`absolute`:`fixed`,platform:{...Ti,getOffsetParent:n}}).then(({x:e,y:t,middlewareData:n,placement:r})=>{let i=this.localize.dir()===`rtl`,a={top:`bottom`,right:`left`,bottom:`top`,left:`right`}[r.split(`-`)[0]];if(this.setAttribute(`data-current-placement`,r),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=n.arrow.x,t=n.arrow.y,r=``,o=``,s=``,c=``;if(this.arrowPlacement===`start`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;r=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``,o=i?n:``,c=i?``:n}else if(this.arrowPlacement===`end`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;o=i?``:n,c=i?n:``,s=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``}else this.arrowPlacement===`center`?(c=typeof e==`number`?`calc(50% - var(--arrow-size-diagonal))`:``,r=typeof t==`number`?`calc(50% - var(--arrow-size-diagonal))`:``):(c=typeof e==`number`?`${e}px`:``,r=typeof t==`number`?`${t}px`:``);Object.assign(this.arrowEl.style,{top:r,right:o,bottom:s,left:c,[a]:`calc(var(--arrow-base-offset) - var(--arrow-size-diagonal))`})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new Li)}render(){return ye`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${mn({"popup-hover-bridge":!0,"popup-hover-bridge-visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${mn({popup:!0,"popup-active":this.active,"popup-fixed":!this.SUPPORTS_POPOVER,"popup-has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?ye`<div part="arrow" class="arrow" role="presentation"></div>`:``}
      </div>
    `}};Wi.css=Ri,k([$e(`.popup`)],Wi.prototype,`popup`,2),k([$e(`.arrow`)],Wi.prototype,`arrowEl`,2),k([A({attribute:!1,type:Boolean})],Wi.prototype,`SUPPORTS_POPOVER`,2),k([A()],Wi.prototype,`anchor`,2),k([A({type:Boolean,reflect:!0})],Wi.prototype,`active`,2),k([A({reflect:!0})],Wi.prototype,`placement`,2),k([A()],Wi.prototype,`boundary`,2),k([A({type:Number})],Wi.prototype,`distance`,2),k([A({type:Number})],Wi.prototype,`skidding`,2),k([A({type:Boolean})],Wi.prototype,`arrow`,2),k([A({attribute:`arrow-placement`})],Wi.prototype,`arrowPlacement`,2),k([A({attribute:`arrow-padding`,type:Number})],Wi.prototype,`arrowPadding`,2),k([A({type:Boolean})],Wi.prototype,`flip`,2),k([A({attribute:`flip-fallback-placements`,converter:{fromAttribute:e=>e.split(` `).map(e=>e.trim()).filter(e=>e!==``),toAttribute:e=>e.join(` `)}})],Wi.prototype,`flipFallbackPlacements`,2),k([A({attribute:`flip-fallback-strategy`})],Wi.prototype,`flipFallbackStrategy`,2),k([A({type:Object})],Wi.prototype,`flipBoundary`,2),k([A({attribute:`flip-padding`,type:Number})],Wi.prototype,`flipPadding`,2),k([A({type:Boolean})],Wi.prototype,`shift`,2),k([A({type:Object})],Wi.prototype,`shiftBoundary`,2),k([A({attribute:`shift-padding`,type:Number})],Wi.prototype,`shiftPadding`,2),k([A({attribute:`auto-size`})],Wi.prototype,`autoSize`,2),k([A()],Wi.prototype,`sync`,2),k([A({type:Object})],Wi.prototype,`autoSizeBoundary`,2),k([A({attribute:`auto-size-padding`,type:Number})],Wi.prototype,`autoSizePadding`,2),k([A({attribute:`hover-bridge`,type:Boolean})],Wi.prototype,`hoverBridge`,2),Wi=k([Je(`wa-popup`)],Wi);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Gi=t({default:()=>Ii}),Ki=t({default:()=>Zt}),M;Object.getOwnPropertyDescriptors||(()=>{var e;if(typeof Reflect<`u`&&Reflect.ownKeys)e=Reflect.ownKeys;else{var t=Object.getOwnPropertySymbols||(e=>[]);e=(e=>Object.getOwnPropertyNames(e).concat(t(e)))}return(t=>{for(var n=e(t),r={},i=n.length|0,a=0;a!==i;){var o=n[a];Object.defineProperty(r,o,{configurable:!0,enumerable:!0,writable:!0,value:Object.getOwnPropertyDescriptor(t,o)}),a=a+1|0}return r})})();var qi;function Ji(e){this.c=e}M=Ji.prototype,M.toString=(function(){return String.fromCharCode(this.c)});function Yi(e){switch(typeof e){case`string`:return cb.l();case`number`:return ua(e)?e<<24>>24===e?Jg.l():e<<16>>16===e?o_.l():tb.l():da(e)?eb.l():$y.l();case`boolean`:return Vh.l();case`undefined`:return pl.l();default:return e instanceof B?ib.l():e instanceof Ji?Wh.l():e&&e.$classData?e.$classData.l():null}}function Xi(e){switch(typeof e){case`string`:return`java.lang.String`;case`number`:return ua(e)?e<<24>>24===e?`java.lang.Byte`:e<<16>>16===e?`java.lang.Short`:`java.lang.Integer`:da(e)?`java.lang.Float`:`java.lang.Double`;case`boolean`:return`java.lang.Boolean`;case`undefined`:return`java.lang.Void`;default:return e instanceof B?`java.lang.Long`:e instanceof Ji?`java.lang.Character`:e&&e.$classData?e.$classData.N:null.oN()}}function Zi(e,t){switch(typeof e){case`string`:return sb(e,t);case`number`:return Zy(e,t);case`boolean`:return zh(e,t);case`undefined`:return ul(e,t);default:return e&&e.$classData||e===null?e.w(t):e instanceof B?nb(e,t):e instanceof Ji?Uh(pa(e),t):ga.prototype.w.call(e,t)}}function Qi(e){switch(typeof e){case`string`:return ob(e);case`number`:return Qy(e);case`boolean`:return Bh(e);case`undefined`:return dl(e);default:return e&&e.$classData||e===null?e.A():e instanceof B?rb(e):e instanceof Ji?Hh(pa(e)):ga.prototype.A.call(e)}}function $i(e){return e===void 0?`undefined`:e.toString()}function ea(e,t){if(t===0)throw new qg(`/ by zero`);return e/t|0}function ta(e,t){if(t===0)throw new qg(`/ by zero`);return e%t|0}function na(e){return e>2147483647?2147483647:e<-2147483648?-2147483648:e|0}function ra(e){return String.fromCharCode(e)}function ia(e,t,n,r,i){if(e!==n||r<t||(t+i|0)<r)for(var a=0;a<i;a=a+1|0)n[r+a|0]=e[t+a|0];else for(var a=i-1|0;a>=0;a=a-1|0)n[r+a|0]=e[t+a|0]}var aa=0,oa=new WeakMap;function sa(e){switch(typeof e){case`string`:return ob(e);case`number`:return Qy(e);case`bigint`:var t=0;for(e<BigInt(0)&&(e=~e);e!==BigInt(0);)t^=Number(BigInt.asIntN(32,e)),e>>=BigInt(32);return t;case`boolean`:return e?1231:1237;case`undefined`:return 0;case`symbol`:var n=e.description;return n===void 0?0:ob(n);default:if(e===null)return 0;var r=oa.get(e);return r===void 0&&(r=aa+1|0,aa=r,oa.set(e,r)),r}}function ca(e){return typeof e==`number`&&e<<24>>24===e&&1/e!=-1/0}function la(e){return typeof e==`number`&&e<<16>>16===e&&1/e!=-1/0}function ua(e){return typeof e==`number`&&(e|0)===e&&1/e!=-1/0}function da(e){return typeof e==`number`&&(e!==e||Math.fround(e)===e)}function fa(e){return new Ji(e)}fa(0);function pa(e){return e===null?0:e.c}function ma(e){return e===null?qi:e}function ha(e){return e}function ga(){}M=ga.prototype,M.constructor=ga;function N(){}N.prototype=M,M.A=(function(){return sa(this)}),M.w=(function(e){return this===e}),M.H=(function(){var e=this.A();return Xi(this)+`@`+(+(e>>>0)).toString(16)}),M.toString=(function(){return this.H()});function P(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}M=P.prototype=new N,M.constructor=P,M.t=(function(e,t,n,r){ia(this.a,e,t.a,n,r)}),M.f=(function(){return new P(this.a.slice())});function _a(){}_a.prototype=M;function va(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=!1}else this.a=e}M=va.prototype=new N,M.constructor=va,M.t=(function(e,t,n,r){ia(this.a,e,t.a,n,r)}),M.f=(function(){return new va(this.a.slice())});function ya(e){typeof e==`number`?this.a=new Uint16Array(e):this.a=e}M=ya.prototype=new N,M.constructor=ya,M.t=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),M.f=(function(){return new ya(this.a.slice())});function ba(e){typeof e==`number`?this.a=new Int8Array(e):this.a=e}M=ba.prototype=new N,M.constructor=ba,M.t=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),M.f=(function(){return new ba(this.a.slice())});function xa(e){typeof e==`number`?this.a=new Int16Array(e):this.a=e}M=xa.prototype=new N,M.constructor=xa,M.t=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),M.f=(function(){return new xa(this.a.slice())});function Sa(e){typeof e==`number`?this.a=new Int32Array(e):this.a=e}M=Sa.prototype=new N,M.constructor=Sa,M.t=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),M.f=(function(){return new Sa(this.a.slice())});function Ca(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=qi}else this.a=e}M=Ca.prototype=new N,M.constructor=Ca,M.t=(function(e,t,n,r){ia(this.a,e,t.a,n,r)}),M.f=(function(){return new Ca(this.a.slice())});function wa(e){typeof e==`number`?this.a=new Float32Array(e):this.a=e}M=wa.prototype=new N,M.constructor=wa,M.t=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),M.f=(function(){return new wa(this.a.slice())});function Ta(e){typeof e==`number`?this.a=new Float64Array(e):this.a=e}M=Ta.prototype=new N,M.constructor=Ta,M.t=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),M.f=(function(){return new Ta(this.a.slice())});function F(){this.C=void 0,this.n=null,this.O=null,this.B=null,this.D=0,this.z=null,this.E=``,this.L=void 0,this.A=void 0,this.F=void 0,this.w=void 0,this.J=!1,this.N=``,this.X=!1,this.Y=!1,this.Z=!1,this.I=void 0}M=F.prototype,M.p=(function(e,t,n,r,i){this.n={},this.z=e,this.E=t;var a=this;return this.F=(e=>e===a),this.N=n,this.X=!0,this.I=(e=>!1),r!==void 0&&(this.A=new F().y(this,r,i)),this}),M.i=(function(e,t,n,r){var i=Object.getOwnPropertyNames(n)[0];return this.n=n,this.E=`L`+t+`;`,this.F=(e=>!!e.n[i]),this.J=e===2,this.N=t,this.Y=e===1,this.I=r||(e=>!!(e&&e.$classData&&e.$classData.n[i])),typeof e!=`number`&&(e.prototype.$classData=this),this}),M.y=(function(e,t,n,r){t.prototype.$classData=this;var i=`[`+e.E;this.C=t,this.n={A:1,a:1},this.O=e,this.B=e,this.D=1,this.E=i,this.N=i,this.Z=!0;var a=this;return this.F=r||(e=>a===e),this.w=n?(e=>new t(new n(e))):(e=>new t(e)),this.I=(e=>e instanceof t),this}),M.a=(function(e){function t(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}var n=t.prototype=new _a;n.constructor=t,n.t=(function(e,t,n,r){ia(this.a,e,t.a,n,r)}),n.f=(function(){return new t(this.a.slice())}),n.$classData=this;var r=e.B||e,i=e.D+1,a=`[`+e.E;this.C=t,this.n={A:1,a:1},this.O=e,this.B=r,this.D=i,this.E=a,this.N=a,this.Z=!0;var o=(e=>{var t=e.D;return t===i?r.F(e.B):t>i&&r===I});this.F=o,this.w=(e=>new t(e));var s=this;return this.I=(e=>{var t=e&&e.$classData;return!!t&&(t===s||o(t))}),this}),M.r=(function(){return this.A||=new F().a(this),this.A}),M.l=(function(){return this.L||=new sm(this),this.L}),M.R=(function(e){return this===e||this.F(e)}),M.S=(function(){return this.P?this.P.l():null}),M.Q=(function(){return this.O?this.O.l():null}),M.U=(function(e){if(this===Ea)throw Zg(new Qg);return new(this.r()).C(e)});var I=new F;I.n={},I.E=`Ljava.lang.Object;`,I.F=(e=>!e.X),I.N=`java.lang.Object`,I.I=(e=>e!==null),I.A=new F().y(I,P,void 0,(e=>{var t=e.D;return t===1?!e.B.X:t>1})),ga.prototype.$classData=I;var Ea=new F().p(void 0,`V`,`void`,void 0,void 0),Da=new F().p(!1,`Z`,`boolean`,va,void 0),Oa=new F().p(0,`C`,`char`,ya,Uint16Array),ka=new F().p(0,`B`,`byte`,ba,Int8Array),Aa=new F().p(0,`S`,`short`,xa,Int16Array),ja=new F().p(0,`I`,`int`,Sa,Int32Array),Ma=new F().p(null,`J`,`long`,Ca,void 0),Na=new F().p(0,`F`,`float`,wa,Float32Array),Pa=new F().p(0,`D`,`double`,Ta,Float64Array);function Fa(e){return Yi(e).hd()+`@`+sa(e)}function Ia(e){var t=e.hy;return t===void 0?Fa(e):t}function La(){za=this,Ba().oi(new Z((e=>void 0)),Bl().j9,!0)}M=La.prototype=new N,M.constructor=La;function Ra(){}Ra.prototype=M,M.oi=(function(e,t,n){return new Th(e,n,t,this)}),new F().i(La,`com.raquo.airstream.core.Observer$`,{c6:1});var za;function Ba(){return za||=new La,za}function Va(e){this.fR=null,this.hz=null,this.fS=0,this.fR=e,this.hz=void 0;var t=so().f5();this.fS=t===void 0?1:1+t.fS|0,qa().f9===-1||this.fS>qa().f9?pp().f6(new By(this,qa().f9)):Qa().bL?Qa().dv.push(this)|0:so().gT(this)}M=Va.prototype=new N,M.constructor=Va;function Ha(){}Ha.prototype=M;var Ua=new F().i(Va,`com.raquo.airstream.core.Transaction`,{c9:1});function Wa(){this.f9=0,this.hA=null,Ka=this,this.f9=1e3,this.hA=new Z((e=>{throw lm(new um,`Attempted to run Transaction `+e+` after it was already executed.`)}))}M=Wa.prototype=new N,M.constructor=Wa;function Ga(){}Ga.prototype=M,M.kp=(function(e){try{e.fR.i(e);var t=e.hz;if(t!==void 0)for(;t.oS();)t.oG().oV(e)}catch(e){var n=e instanceof _f?e:new Zx(e);pp().f6(n)}}),new F().i(Wa,`com.raquo.airstream.core.Transaction$`,{ca:1});var Ka;function qa(){return Ka||=new Wa,Ka}function Ja(e){e.fa.length|0?new Va(new Z((t=>{for(;(e.fa.length|0)>0;){var n=e.fa.shift();try{n.i(t)}catch(e){var r=e instanceof _f?e:new Zx(e);pp().f6(r)}}for(;(e.dv.length|0)>0;){var i=e.dv.shift();so().gT(i)}}))):(e.dv.length|0)>0&&new Va(new Z((t=>{for(;(e.dv.length|0)>0;)so().gT(e.dv.shift())})))}function Ya(){this.bL=!1,this.fa=null,this.dv=null,Za=this,this.bL=!1,this.fa=No().dk(W().b(new(V.r()).C([]))),this.dv=No().dk(W().b(new(Ua.r()).C([])))}M=Ya.prototype=new N,M.constructor=Ya;function Xa(){}Xa.prototype=M,new F().i(Ya,`com.raquo.airstream.core.Transaction$onStart$`,{cb:1});var Za;function Qa(){return Za||=new Ya,Za}function $a(e,t){return e.dw.get(t)}function eo(e,t){e.fb.unshift(t)}function to(e){return e.fb.shift()}function no(e,t,n){var r=$a(e,t),i=r===void 0,a=r===void 0?No().dk(W().b(new(Ua.r()).C([]))):r;a.push(n),i&&e.dw.set(t,a)}function ro(e,t){var n=$a(e,t),r=n===void 0||(n.length|0)>0?n:void 0;if(r!==void 0){var i=r.shift();return r.length|0||e.dw.delete(t),i}}function io(){this.fb=null,this.dw=null,oo=this,this.fb=No().dk(W().b(new(Ua.r()).C([]))),this.dw=new Map}M=io.prototype=new N,M.constructor=io;function ao(){}ao.prototype=M,M.gT=(function(e){var t=this.f5();t===void 0?(eo(this,e),qa().kp(e),this.mE(e)):no(this,t,e)}),M.mE=(function(e){for(var t=e;;){var n=this.f5(),r=t;if(!(n!==void 0&&U().p(r,n)))throw lm(new um,`Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.`);this.nL(t),t.fR=qa().hA;var i=this.f5();if(U().p(i,void 0))if((this.dw.size|0)>0){var a=new ep(0);throw this.dw.forEach((e=>((t,n)=>{e.dH=e.dH+(t.length|0)|0}))(a)),lm(new um,`Transaction queue error: Stack cleared, but a total of `+a.dH+` children for `+(this.dw.size|0)+` transactions remain. This is a bug in Airstream.`)}else return;else qa().kp(i),t=i}}),M.nL=(function(e){for(var t=e;;){var n=ro(this,t);if(U().p(n,void 0)){to(this);var r=this.f5();if(!U().p(r,void 0))t=r;else return}else{eo(this,n);return}}}),M.f5=(function(){return this.fb[0]}),new F().i(io,`com.raquo.airstream.core.Transaction$pendingTransactions$`,{cc:1});var oo;function so(){return oo||=new io,oo}function co(e,t){var n=e.cF.indexOf(t)|0;if(n!==-1)e.cF.splice(n,1),e.bq.c()||t.l0();else throw lm(new um,`Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?`)}function lo(e){for(;(e.fc.length|0)>0;)co(e,e.fc.shift())}function uo(e){this.hB=null,this.cF=null,this.dT=!1,this.fc=null,this.bq=null,this.dU=0,this.hB=e,this.cF=No().dk(W().b(new(ho.r()).C([]))),this.dT=!0,this.fc=No().dk(W().b(new(ho.r()).C([]))),this.bq=pb(),this.dU=0}M=uo.prototype=new N,M.constructor=uo;function fo(){}fo.prototype=M,M.jX=(function(){if(this.bq.c()){var e=Qa(),t=(()=>{var e=new sd(this.hB);this.bq=new mb(e),this.dT=!1,this.dU=0;for(var t=0,n=this.cF.length|0;t<n;){var r=t+this.dU|0;this.cF[r].kZ(e),t=1+t|0}lo(this),this.dT=!0,this.dU=0});if(Qa(),e.bL)t();else{e.bL=!0;try{t()}finally{e.bL=!1,Ja(e)}}}else throw lm(new um,`Can not activate `+this+`: it is already active`)}),M.my=(function(){if(this.bq.c())throw lm(new um,`Can not deactivate DynamicOwner: it is not active`);this.dT=!1;for(var e=this.cF,t=0,n=e.length|0;t<n;)e[t].l0(),t=1+t|0;lo(this);var r=this.bq;r.c()||r.aH().nl(),lo(this),this.dT=!0,this.bq=pb()}),M.md=(function(e,t){t?(this.dU=1+this.dU|0,this.cF.unshift(e)):this.cF.push(e);var n=this.bq;if(!n.c()){var r=n.aH();e.kZ(r)}}),M.nQ=(function(e){this.dT?co(this,e):this.fc.push(e)}),new F().i(uo,`com.raquo.airstream.ownership.DynamicOwner`,{cd:1});function po(e,t,n){this.fd=null,this.hC=null,this.fe=null,this.fd=e,this.hC=t,this.fe=pb(),e.md(this,n)}M=po.prototype=new N,M.constructor=po;function mo(){}mo.prototype=M,M.fM=(function(){this.fd.nQ(this)}),M.kZ=(function(e){var t=Qa(),n=(()=>{this.fe=this.hC.i(e)});if(Qa(),t.bL)n();else{t.bL=!0;try{n()}finally{t.bL=!1,Ja(t)}}}),M.l0=(function(){var e=this.fe;e.c()||(e.aH().fM(),this.fe=pb())});var ho=new F().i(po,`com.raquo.airstream.ownership.DynamicSubscription`,{ce:1});function go(){}M=go.prototype=new N,M.constructor=go;function _o(){}_o.prototype=M,M.od=(function(e,t,n){return new po(e,new Z((e=>new mb(t.i(e)))),n)}),M.o4=(function(e,t,n){return new po(e,new Z((e=>(t.i(e),pb()))),n)}),new F().i(go,`com.raquo.airstream.ownership.DynamicSubscription$`,{cf:1});var vo;function yo(){return vo||=new go,vo}function bo(e){e.dV=No().dk(W().b(new(Do.r()).C([])))}function xo(e){for(var t=e.dV,n=0,r=t.length|0;n<r;)wo(t[n]),n=1+n|0;e.dV.length=0}function So(e,t){var n=e.dV.indexOf(t)|0;if(n!==-1)e.dV.splice(n,1);else throw lm(new um,`Can not remove Subscription from Owner: subscription not found.`)}function Co(e,t){e.dV.push(t)}function wo(e){if(!e.fU)e.hE.ah(),e.fU=!0;else throw lm(new um,`Can not kill Subscription: it was already killed.`)}function To(e,t){this.hF=null,this.hE=null,this.fU=!1,this.hF=e,this.hE=t,this.fU=!1,e.nK(this)}M=To.prototype=new N,M.constructor=To;function Eo(){}Eo.prototype=M,M.fM=(function(){wo(this),So(this.hF,this)});var Do=new F().i(To,`com.raquo.airstream.ownership.Subscription`,{ci:1});function Oo(e,t){this.hG=null,this.hH=null,this.cG=null,this.dx=!1,this.hG=e,this.hH=t,this.cG=pb(),this.dx=!1}M=Oo.prototype=new N,M.constructor=Oo;function ko(){}ko.prototype=M,M.ni=(function(){var e=this.cG;return!e.c()&&!e.aH().fd.bq.c()}),M.nY=(function(e){if(this.dx)throw lm(new um,`Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var t=this.cG;if(t.c())var n=!1;else var n=e===t.aH().fd;if(!n){this.ni()&&!e.bq.c()&&(this.dx=!0);var r=this.cG;r.c()||(r.aH().fM(),this.cG=pb()),this.cG=new mb(yo().od(e,new Z((e=>(this.dx||this.hG.ah(),new To(e,new Og((()=>{this.dx||this.hH.ah()})))))),!1)),this.dx=!1}}),M.mp=(function(){if(this.dx)throw lm(new um,`Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var e=this.cG;e.c()||e.aH().fM(),this.cG=pb()}),new F().i(Oo,`com.raquo.airstream.ownership.TransferableSubscription`,{cj:1});function Ao(){}M=Ao.prototype=new N,M.constructor=Ao;function jo(){}jo.prototype=M,M.dk=(function(e){return[...ed().ob(e)]}),new F().i(Ao,`com.raquo.ew.JsArray$`,{ck:1});var Mo;function No(){return Mo||=new Ao,Mo}function Po(){}M=Po.prototype=new N,M.constructor=Po;function Fo(){}Fo.prototype=M,M.mW=(function(e,t){for(var n=0,r=e.length|0;n<r;)t(e[n]),n=1+n|0}),new F().i(Po,`com.raquo.ew.JsArray$RichJsArray$`,{cl:1});var Io;function Lo(){return Io||=new Po,Io}function Ro(){this.hI=null,Bo=this,document.createElement(`template`),this.mw(X().r.o6().o7()),this.hI=RegExp(` `,`g`)}M=Ro.prototype=new N,M.constructor=Ro;function zo(){}zo.prototype=M,M.mf=(function(e,t){try{return e.appendChild(t),!0}catch(e){var n=e instanceof _f?e:new Zx(e);if(n instanceof Zx&&n.bT instanceof DOMException)return!1;throw n instanceof Zx?n.bT:n}}),M.nj=(function(e,t){for(var n=e;;){if(n.parentNode!==null)var r=n.parentNode;else var i=n.host,r=i===void 0?null:i;if(r===null)return!1;if(U().p(t,r))return!0;n=r}}),M.mv=(function(e){return document.createElement(e.hj())}),M.n7=(function(e,t){var n=this.n8(e,t);return n===void 0?void 0:t.dW.eV(n)}),M.n8=(function(e,t){var n=e.cf.getAttributeNS(null,t.cH);return n===null?void 0:n}),M.lg=(function(e,t,n){this.nX(e,t,t.dW.eW(n))}),M.nX=(function(e,t,n){n===null?this.nP(e,t):e.cf.setAttribute(t.cH,n)}),M.nP=(function(e,t){e.cf.removeAttribute(t.cH)}),M.lh=(function(e,t,n){var r=e.cf,i=t.dX,a=t.dY,o=n===null?null:n;o===null?(a.b9(new Z((e=>r.style.removeProperty(``+e+i)))),r.style.removeProperty(i)):(a.b9(new Z((e=>{r.style.setProperty(``+e+i,o)}))),r.style.setProperty(i,o))}),M.mw=(function(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e.iv)}),M.nb=(function(e,t){var n=this.nc(e,t);return n===void 0?void 0:t.g1.eV(n)}),M.nc=(function(e,t){var n=e.hr(),r=t.fi,i=n.getAttributeNS(r.c()?null:r.aH(),t.g2);return i===null?void 0:i}),M.nZ=(function(e,t,n){this.o0(e,t,t.g1.eW(n))}),M.o0=(function(e,t,n){if(n===null)this.nR(e,t);else{var r=t.fi;if(r.c())e.hr().setAttribute(t.fh,n);else{var i=r.aH();e.hr().setAttributeNS(i,t.fh,n)}}}),M.nR=(function(e,t){var n=e.hr(),r=t.fi;n.removeAttributeNS(r.c()?null:r.aH(),t.g2)}),M.mx=(function(e){return document.createTextNode(e)}),M.mA=(function(e,t){for(var n=t,r=e;;){if(r===null)return n;var i=r.parentNode,a=new qT(this.mz(r),n);r=i,n=a}}),M.mz=(function(e){if(e instanceof HTMLElement){var t=e.id;if(t!==``)var n=`#`+t;else var r=e.className,n=r===``?``:`.`+r.replace(this.hI,`.`);return e.tagName.toLowerCase()+n}else return e.nodeName}),new F().i(Ro,`com.raquo.laminar.DomApi$`,{cm:1});var Bo;function Vo(){return Bo||=new Ro,Bo}function Ho(e,t,n){this.fW=null,this.hJ=null,this.fV=null,this.fW=e,this.hJ=t,this.fV=n}M=Ho.prototype=new N,M.constructor=Ho;function Uo(){}Uo.prototype=M,M.b9=(function(e){this.fW===null?this.fV===null?Wl().mX(this.hJ,e):Lo().mW(this.fV,gh().n3(e)):this.fW.b9(e)}),new F().i(Ho,`com.raquo.laminar.Seq`,{cn:1});function Wo(){}M=Wo.prototype=new N,M.constructor=Wo;function Go(){}Go.prototype=M,new F().i(Wo,`com.raquo.laminar.Seq$`,{co:1});var Ko;function qo(){return Ko||=new Wo,Ko}function Jo(e){Ba(),pp()}function Yo(e){e.lt=ks()}function Xo(e){Zo(e,new Z((e=>{e.ih.cf.focus()})))}function Zo(e,t){return new Dd(new Z((e=>{var n=new Qf(!e.dZ.bq.c()),r=new Z((e=>{n.fy?n.fy=!1:t.i(e)}));yo().o4(e.dZ,new Z((e=>(t=>{r.i(new ws(e,t))}))(e)),!1)})),ks())}function Qo(){this.dy=null,this.fX=null,es=this,this.dy=new dd(ts()),new dd(ts()),new dd(ts()),this.fX=new ld}M=Qo.prototype=new N,M.constructor=Qo;function $o(){}$o.prototype=M,new F().i(Qo,`com.raquo.laminar.codecs.package$`,{cw:1});var es;function ts(){return es||=new Qo,es}function ns(e){e.hO=rs(e,`class`,` `)}function rs(e,t,n){var r=bd(new xd,t,ts().dy);return new md(r.cH,new Z((e=>{var t=Vo().n7(e,r);return t===void 0?``:t})),new jg(((e,t)=>{Vo().lg(e,r,t)})),n)}function is(e){e.ls=as(e,`class`,` `)}function as(e,t,n){var r=new Cd(t,ts().dy,pb());return new md(r.fh,new Z((e=>{var t=Vo().nb(e,r);return t===void 0?``:t})),new jg(((e,t)=>{Vo().nZ(e,r,t)})),n)}function os(e){this.ff=null,this.ff=e}M=os.prototype=new N,M.constructor=os;function ss(){}ss.prototype=M,M.l1=(function(e,t){try{this.ff.cv(e,t)}catch(e){var n=e instanceof _f?e:new Zx(e);pp().f6(n)}}),M.mq=(function(e){return new os(new jg(((t,n)=>{this.ff.cv(t,n),e.ff.cv(t,n)})))}),M.mg=(function(e){return e===void 0?this:e.mq(this)}),new F().i(os,`com.raquo.laminar.inserters.InserterHooks`,{cU:1});function cs(){}M=cs.prototype=new N,M.constructor=cs;function ls(){}ls.prototype=M,M.cB=(function(e,t){return new Fg(e,void 0)}),new F().i(cs,`com.raquo.laminar.inserters.StaticChildInserter$`,{cW:1});var us;function ds(){return us||=new cs,us}function fs(){}M=fs.prototype=new N,M.constructor=fs;function ps(){}ps.prototype=M,M.kY=(function(e,t){return e===``?$():$().hp(wE(new EE,e.split(t).filter((e=>e!==``))))}),new F().i(fs,`com.raquo.laminar.keys.CompositeKey$`,{cZ:1});var ms;function hs(){return ms||=new fs,ms}function gs(e,t){this.ig=null,this.ie=null,this.ig=e,this.ie=t}M=gs.prototype=new N,M.constructor=gs;function _s(){}_s.prototype=M,M.J=(function(e){return new vp(this.ig,this.ie.i(e),new Ng(((e,t,n)=>{Vo().lh(e,t,n)})))}),new F().i(gs,`com.raquo.laminar.keys.DerivedStyleProp`,{d3:1});function vs(){}M=vs.prototype=new N,M.constructor=vs;function ys(){}ys.prototype=M;function bs(){this.lu=null,this.lv=null,this.lw=null,this.lx=null,this.lu=`http://www.w3.org/2000/svg`,this.lv=`http://www.w3.org/1999/xlink`,this.lw=`http://www.w3.org/XML/1998/namespace`,this.lx=`http://www.w3.org/2000/xmlns/`}M=bs.prototype=new N,M.constructor=bs;function xs(){}xs.prototype=M,M.nv=(function(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`xlink`:return`http://www.w3.org/1999/xlink`;case`xml`:return`http://www.w3.org/XML/1998/namespace`;case`xmlns`:return`http://www.w3.org/2000/xmlns/`;default:throw new g_(e)}}),new F().i(bs,`com.raquo.laminar.keys.SvgAttr$`,{d5:1});var Ss;function Cs(){return Ss||=new bs,Ss}function ws(e,t){this.ih=null,this.ih=e}M=ws.prototype=new N,M.constructor=ws;function Ts(){}Ts.prototype=M,new F().i(ws,`com.raquo.laminar.lifecycle.MountContext`,{d6:1});var L=new F().i(1,`com.raquo.laminar.modifiers.Modifier`,{a3:1});function Es(){this.ly=null,Os=this,this.ly=new Td}M=Es.prototype=new N,M.constructor=Es;function Ds(){}Ds.prototype=M,new F().i(Es,`com.raquo.laminar.modifiers.Modifier$`,{d9:1});var Os;function ks(){return Os||=new Es,Os}function As(){this.c1=null,Ms=this,this.c1=new kd}M=As.prototype=new N,M.constructor=As;function js(){}js.prototype=M,new F().i(As,`com.raquo.laminar.modifiers.RenderableNode$`,{dd:1});var Ms;function Ns(){return Ms||=new As,Ms}function Ps(){this.G=null,Is=this,this.G=new Fd(new Z((e=>e)),R()),new Fd(new Z((e=>``+(e|0))),R()),new Fd(new Z((e=>``+ +e)),R()),new Fd(new Z((e=>``+!!e)),R()),new Fd(new Z((e=>e.oa())),R())}M=Ps.prototype=new N,M.constructor=Ps;function Fs(){}Fs.prototype=M,new F().i(Ps,`com.raquo.laminar.modifiers.RenderableText$`,{di:1});var Is;function R(){return Is||=new Ps,Is}function Ls(){}M=Ls.prototype=new N,M.constructor=Ls;function Rs(){}Rs.prototype=M,M.eJ=(function(e,t,n){var r=new mb(e);t.lr(r),n!==void 0&&n.l1(e,t);var i=Vo().mf(e.dP(),t.dP());return i&&t.li(r),i}),new F().i(Ls,`com.raquo.laminar.nodes.ParentNode$`,{dk:1});var zs;function Bs(){return zs||=new Ls,zs}function Vs(e){this.is=null,this.is=new os(new jg(((t,n)=>{matchResult1:{var r=n.dP();if(r instanceof Element){r.setAttribute(`slot`,e);break matchResult1}if(r instanceof Text){var i=pp(),a=r.textContent,o=t.dP().tagName;i.f6(lm(new um,"Error: You tried to insert a raw text node `"+a+"` into the `"+e+"` slot of <"+o.toLowerCase()+`>.
 - Cause: This is not possible: named slots only accept elements. Your node was inserted into the default slot instead.
 - Suggestion: Wrap your text node into \`span()\``));break matchResult1}}})))}M=Vs.prototype=new N,M.constructor=Vs;function Hs(){}Hs.prototype=M,M.cx=(function(e){return e.bX(new Z((e=>e.oh(this.is))))}),new F().i(Vs,`com.raquo.laminar.nodes.Slot`,{dp:1});function Us(){Gs=this,No().dk(W().ok(new Sa(new Int32Array([0]))))}M=Us.prototype=new N,M.constructor=Us;function Ws(){}Ws.prototype=M,M.lU=(function(){return new Z((e=>void 0))}),new F().i(Us,`com.raquo.laminar.tags.CustomHtmlTag$`,{ds:1});var Gs;function Ks(){return Gs||=new Us,Gs}function qs(){}M=qs.prototype=new N,M.constructor=qs;function Js(){}Js.prototype=M,M.lV=(function(e){return X().r.kv().fG(W().b(new(L.r()).C([X().r.ku().kI(),X().r.kJ().ko(),X().r.kR().l8().J(8),hp(X().r,e,Pd())])))}),new F().i(qs,`doc.ExampleGroups$package$`,{du:1});var Ys;function Xs(){return Ys||=new qs,Ys}function Zs(){}M=Zs.prototype=new N,M.constructor=Zs;function Qs(){}Qs.prototype=M,M.lX=(function(e){return X().r.kv().fG(W().b(new(L.r()).C([X().r.ku().kI(),X().r.mV().oj(),X().r.kJ().ko(),X().r.kR().l8().J(16),hp(X().r,e,Pd())])))}),new F().i(Zs,`doc.VerticalExamples$package$`,{dv:1});var $s;function ec(){return $s||=new Zs,$s}function tc(){}M=tc.prototype=new N,M.constructor=tc;function nc(){}nc.prototype=M,M.me=(function(){ic().mL(),ic().mM(),ic().mN(),ic().mO(),ic().mP(),ic().mQ(),ic().mR()}),M.mL=(function(){var e=document.querySelector(`#example1`);If().dJ(e).c()||(X(),new bp(e,Dp().v(W().b(new(V.r()).C([])),W().b(new(L.r()).C([jp().v(W().b(new(V.r()).C([])),W().b(new(L.r()).C([q(X().r,`Catalog`,R().G)]))),jp().v(W().b(new(V.r()).C([])),W().b(new(L.r()).C([q(X().r,`Clothing`,R().G)]))),jp().v(W().b(new(V.r()).C([])),W().b(new(L.r()).C([q(X().r,`Women's`,R().G)]))),jp().v(W().b(new(V.r()).C([])),W().b(new(L.r()).C([q(X().r,`Shirts & Tops`,R().G)])))])))))}),M.mM=(function(){var e=document.querySelector(`#example2`);If().dJ(e).c()||(X(),new bp(e,Dp().v(W().b(new(V.r()).C([])),W().b(new(L.r()).C([jp().v(W().b(new(V.r()).C([new Y((e=>e.fL().J(`https://example.com/home`)))])),W().b(new(L.r()).C([q(X().r,`Homepage`,R().G)]))),jp().v(W().b(new(V.r()).C([new Y((e=>e.fL().J(`https://example.com/home/services`)))])),W().b(new(L.r()).C([q(X().r,`Our Services`,R().G)]))),jp().v(W().b(new(V.r()).C([new Y((e=>e.fL().J(`https://example.com/home/services/digital`)))])),W().b(new(L.r()).C([q(X().r,`Digital Media`,R().G)]))),jp().v(W().b(new(V.r()).C([new Y((e=>e.fL().J(`https://example.com/home/services/digital/web-design`)))])),W().b(new(L.r()).C([q(X().r,`Web Design`,R().G)])))])))))}),M.mN=(function(){var e=document.querySelector(`#example3`);If().dJ(e).c()||(X(),new bp(e,Dp().v(W().b(new(V.r()).C([])),W().b(new(L.r()).C([jp().v(W().b(new(V.r()).C([new Y((e=>mp(X().r,pc().ll().cx(W().b(new(Lg.r()).C([(X(),ds().cB(am().v(W().b(new(V.r()).C([new Y((e=>e.dN().J(`house`)))])),W().b(new(L.r()).C([]))),Ns().c1))]))),xf().c2,Pd())))])),W().b(new(L.r()).C([q(X().r,`Home`,R().G)]))),jp().v(W().b(new(V.r()).C([])),W().b(new(L.r()).C([q(X().r,`Articles`,R().G)]))),jp().v(W().b(new(V.r()).C([new Y((e=>mp(X().r,pc().ky().cx(W().b(new(Lg.r()).C([(X(),ds().cB(am().v(W().b(new(V.r()).C([new Y((e=>e.dN().J(`tree-palm`)))])),W().b(new(L.r()).C([]))),Ns().c1))]))),xf().c2,Pd())))])),W().b(new(L.r()).C([q(X().r,`Traveling`,R().G)])))])))))}),M.mO=(function(){var e=document.querySelector(`#example4`);If().dJ(e).c()||(X(),new bp(e,Xs().lV(W().b(new(qy.r()).C([ec().lX(W().b(new(qy.r()).C([Dp().v(W().b(new(V.r()).C([new Y((e=>mp(X().r,lc().ht().cx(W().b(new(Lg.r()).C([(X(),ds().cB(am().v(W().b(new(V.r()).C([new Y((e=>e.dN().J(`angles-right`))),new Y((e=>e.f8().J(`solid`)))])),W().b(new(L.r()).C([]))),Ns().c1))]))),xf().c2,Pd())))])),W().b(new(L.r()).C([jp().v(W().b(new(V.r()).C([])),W().b(new(L.r()).C([q(X().r,`First`,R().G)]))),jp().v(W().b(new(V.r()).C([])),W().b(new(L.r()).C([q(X().r,`Second`,R().G)]))),jp().v(W().b(new(V.r()).C([])),W().b(new(L.r()).C([q(X().r,`Third`,R().G)])))]))),Dp().v(W().b(new(V.r()).C([new Y((e=>mp(X().r,lc().ht().cx(W().b(new(Lg.r()).C([(X(),ds().cB(am().v(W().b(new(V.r()).C([new Y((e=>e.dN().J(`arrow-right`))),new Y((e=>e.f8().J(`solid`)))])),W().b(new(L.r()).C([]))),Ns().c1))]))),xf().c2,Pd())))])),W().b(new(L.r()).C([jp().v(W().b(new(V.r()).C([])),W().b(new(L.r()).C([q(X().r,`First`,R().G)]))),jp().v(W().b(new(V.r()).C([])),W().b(new(L.r()).C([q(X().r,`Second`,R().G)]))),jp().v(W().b(new(V.r()).C([])),W().b(new(L.r()).C([q(X().r,`Third`,R().G)])))]))),Dp().v(W().b(new(V.r()).C([new Y((e=>mp(X().r,lc().ht().cx(W().b(new(Lg.r()).C([(X(),ds().cB(X().r.o3().fG(W().b(new(L.r()).C([q(X().r,`/`,R().G)]))),Ns().c1))]))),xf().c2,Pd())))])),W().b(new(L.r()).C([jp().v(W().b(new(V.r()).C([])),W().b(new(L.r()).C([q(X().r,`First`,R().G)]))),jp().v(W().b(new(V.r()).C([])),W().b(new(L.r()).C([q(X().r,`Second`,R().G)]))),jp().v(W().b(new(V.r()).C([])),W().b(new(L.r()).C([q(X().r,`Third`,R().G)])))])))])))])))))}),M.mP=(function(){var e=document.querySelector(`#example5`);If().dJ(e).c()||(X(),new bp(e,Dp().v(W().b(new(V.r()).C([])),W().b(new(L.r()).C([X().r.hO.lT(`redcrumbs`),jp().v(W().b(new(V.r()).C([new Y((e=>mp(X().r,pc().ll().cx(W().b(new(Lg.r()).C([(X(),ds().cB(am().v(W().b(new(V.r()).C([new Y((e=>e.dN().J(`house`))),new Y((e=>e.f8().J(`solid`)))])),W().b(new(L.r()).C([]))),Ns().c1))]))),xf().c2,Pd())))])),W().b(new(L.r()).C([q(X().r,`Home`,R().G)]))),jp().v(W().b(new(V.r()).C([])),W().b(new(L.r()).C([q(X().r,`Articles`,R().G)]))),jp().v(W().b(new(V.r()).C([])),W().b(new(L.r()).C([q(X().r,`Traveling`,R().G)])))])))))}),M.mQ=(function(){var e=document.querySelector(`#example6`);If().dJ(e).c()||(X(),new bp(e,Dp().v(W().b(new(V.r()).C([])),W().b(new(L.r()).C([jp().v(W().b(new(V.r()).C([])),W().b(new(L.r()).C([q(X().r,`Homepage`,R().G)]))),jp().v(W().b(new(V.r()).C([])),W().b(new(L.r()).C([Zp().v(W().b(new(V.r()).C([new Y((e=>mp(X().r,_c().ln().cx(W().b(new(Lg.r()).C([(X(),ds().cB(Fp().v(W().b(new(V.r()).C([new Y((e=>e.lj().lk())),new Y((e=>e.k4().kH())),new Y((e=>e.l7().J(!0)))])),W().b(new(L.r()).C([am().v(W().b(new(V.r()).C([new Y((e=>e.kW().J(`More options`))),new Y((e=>e.dN().J(`ellipsis`))),new Y((e=>e.f8().J(`solid`)))])),W().b(new(L.r()).C([])))]))),Ns().c1))]))),xf().c2,Pd())))])),W().b(new(L.r()).C([tm().v(W().b(new(V.r()).C([new Y((e=>e.ej().J(`checkbox`))),new Y((e=>e.kn().J(!0)))])),W().b(new(L.r()).C([q(X().r,`Web Design`,R().G)]))),tm().v(W().b(new(V.r()).C([new Y((e=>e.ej().J(`checkbox`)))])),W().b(new(L.r()).C([q(X().r,`Web Development`,R().G)]))),tm().v(W().b(new(V.r()).C([new Y((e=>e.ej().J(`checkbox`)))])),W().b(new(L.r()).C([q(X().r,`Marketing`,R().G)])))])))]))),jp().v(W().b(new(V.r()).C([])),W().b(new(L.r()).C([q(X().r,`Our Services`,R().G)]))),jp().v(W().b(new(V.r()).C([])),W().b(new(L.r()).C([q(X().r,`Digital Media`,R().G)])))])))))}),M.mR=(function(){var e=document.querySelector(`#example7`);If().dJ(e).c()||(X(),new bp(e,Dp().v(W().b(new(V.r()).C([])),W().b(new(L.r()).C([jp().v(W().b(new(V.r()).C([])),W().b(new(L.r()).C([q(X().r,`Homepage`,R().G)]))),jp().v(W().b(new(V.r()).C([])),W().b(new(L.r()).C([q(X().r,`Our Services`,R().G)]))),jp().v(W().b(new(V.r()).C([])),W().b(new(L.r()).C([q(X().r,`Digital Media`,R().G)]))),jp().v(W().b(new(V.r()).C([new Y((e=>mp(X().r,pc().ky().cx(W().b(new(Lg.r()).C([(X(),ds().cB(Zp().v(W().b(new(V.r()).C([new Y((e=>mp(X().r,_c().ln().cx(W().b(new(Lg.r()).C([(X(),ds().cB(Fp().v(W().b(new(V.r()).C([new Y((e=>e.lj().lk())),new Y((e=>e.k4().kH())),new Y((e=>e.l7().J(!0)))])),W().b(new(L.r()).C([am().v(W().b(new(V.r()).C([new Y((e=>e.kW().J(`More options`))),new Y((e=>e.dN().J(`ellipsis`))),new Y((e=>e.f8().J(`solid`)))])),W().b(new(L.r()).C([])))]))),Ns().c1))]))),xf().c2,Pd())))])),W().b(new(L.r()).C([tm().v(W().b(new(V.r()).C([new Y((e=>e.ej().J(`checkbox`))),new Y((e=>e.kn().J(!0)))])),W().b(new(L.r()).C([q(X().r,`Web Design`,R().G)]))),tm().v(W().b(new(V.r()).C([new Y((e=>e.ej().J(`checkbox`)))])),W().b(new(L.r()).C([q(X().r,`Web Development`,R().G)]))),tm().v(W().b(new(V.r()).C([new Y((e=>e.ej().J(`checkbox`)))])),W().b(new(L.r()).C([q(X().r,`Marketing`,R().G)])))]))),Ns().c1))]))),xf().c2,Pd())))])),W().b(new(L.r()).C([q(X().r,`Web Design`,R().G)])))])))))}),new F().i(tc,`examples.breadcrumb.Main$package$`,{dw:1});var rc;function ic(){return rc||=new tc,rc}function ac(e){try{ic().me()}catch(e){throw e}}function oc(){this.iw=null,this.ix=!1}M=oc.prototype=new N,M.constructor=oc;function sc(){}sc.prototype=M,M.ht=(function(){return this.ix||=(this.iw=new Vs(`separator`),!0),this.iw}),new F().i(oc,`io.github.nguyenyou.webawesome.laminar.Breadcrumb$slots$`,{dy:1});var cc;function lc(){return cc||=new oc,cc}function uc(){this.iC=null,this.iD=!1,this.iA=null,this.iB=!1}M=uc.prototype=new N,M.constructor=uc;function dc(){}dc.prototype=M,M.ll=(function(){return this.iD||=(this.iC=new Vs(`start`),!0),this.iC}),M.ky=(function(){return this.iB||=(this.iA=new Vs(`end`),!0),this.iA}),new F().i(uc,`io.github.nguyenyou.webawesome.laminar.BreadcrumbItem$slots$`,{dA:1});var fc;function pc(){return fc||=new uc,fc}function mc(){this.iO=null,this.iP=!1}M=mc.prototype=new N,M.constructor=mc;function hc(){}hc.prototype=M,M.ln=(function(){return this.iP||=(this.iO=new Vs(`trigger`),!0),this.iO}),new F().i(mc,`io.github.nguyenyou.webawesome.laminar.Dropdown$slots$`,{dG:1});var gc;function _c(){return gc||=new mc,gc}function vc(){this.lA=!1,this.en=null,this.fl=null,this.j0=null,this.ga=!1,this.lz=0,this.lC=0,this.lB=null,bc=this,this.lA=!0,this.en=new ArrayBuffer(8),this.fl=new Int32Array(this.en,0,2),new Float32Array(this.en,0,2),this.j0=new Float64Array(this.en,0,1),this.fl[0]=16909060,this.ga=(new Int8Array(this.en,0,8)[0]|0)==1,this.lz=this.ga?0:1,this.lC=this.ga?1:0,this.lB=null}M=vc.prototype=new N,M.constructor=vc;function yc(){}yc.prototype=M,M.hn=(function(e){var t=e|0;return t===e&&1/e!=-1/0?t:(this.j0[0]=e,(this.fl[0]|0)^(this.fl[1]|0))}),new F().i(vc,`java.lang.FloatingPointBits$`,{dT:1});var bc;function xc(){return bc||=new vc,bc}function Sc(e,t){for(var n=Xc().bZ(`^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$`),r=[],i=0;i<(t.length|0);){var a=t[i];if(a!==``){var o=n.exec(a);if(o!==null){var s=Cc(e,o[1]),c=s[0],l=s[1],u=o[2],d=o[3],f=parseInt(d),p=o[4];r.push(new lf(c,l,u,f|0,p===void 0?-1:parseInt(p)|0))}else r.push(new lf(`<jscode>`,a,null,-1,-1))|0}i=1+i|0}var m=r.length|0,h=new(df.r()).C(m);for(i=0;i<m;)h.a[i]=r[i],i=1+i|0;return h}function Cc(e,t){var n=Xc().bZ(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$`),r=Xc().bZ(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$`),i=Xc().bZ(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$`),a=Xc().bZ(`^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$`),o=Xc().bZ(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$`),s=n.exec(t),c=s===null?r.exec(t):s;if(c!==null)return[wc(e,c[1]),jc(e,c[2])];var l=i.exec(t),u=l===null?a.exec(t):l;if(u!==null)return[wc(e,u[1]),`<init>`];var d=o.exec(t);return d===null?[`<jscode>`,t]:[wc(e,d[1]),`<clinit>`]}function wc(e,t){var n=Ec(e);if(ll().gf.call(n,t))var r=Ec(e)[t];else var r=Hc(e,0,t);return r.split(`_`).join(`.`).split(`＿`).join(`_`)}function Tc(e){if(!((1&e.bz)<<24>>24)){var t={};t.O=`java_lang_Object`,t.T=`java_lang_String`;for(var n=0;n<=22;){if(n>=2){var r=`T`+n;t[r]=`scala_Tuple`+n}var i=`F`+n;t[i]=`scala_Function`+n,n=1+n|0}e.gc=t,e.bz=(1|e.bz)<<24>>24}return e.gc}function Ec(e){return(1&e.bz)<<24>>24?e.gc:Tc(e)}function Dc(e){if(!((2&e.bz)<<24>>24)){var t={};t.sjsr_=`scala_scalajs_runtime_`,t.sjs_=`scala_scalajs_`,t.sci_=`scala_collection_immutable_`,t.scm_=`scala_collection_mutable_`,t.scg_=`scala_collection_generic_`,t.sc_=`scala_collection_`,t.sr_=`scala_runtime_`,t.s_=`scala_`,t.jl_=`java_lang_`,t.ju_=`java_util_`,e.gd=t,e.bz=(2|e.bz)<<24>>24}return e.gd}function Oc(e){return(2&e.bz)<<24>>24?e.gd:Dc(e)}function kc(e){return(4&e.bz)<<24>>24||(e.gb=Object.keys(Oc(e)),e.bz=(4|e.bz)<<24>>24),e.gb}function Ac(e){return(4&e.bz)<<24>>24?e.gb:kc(e)}function jc(e,t){if(t.startsWith(`init___`))return`<init>`;var n=t.indexOf(`__`)|0;return n<0?t:t.substring(0,n)}function Mc(e,t){return t?t.arguments&&t.stack?Nc(e,t):t.stack&&t.sourceURL?Ic(e,t):t.stack&&t.number?Fc(e,t):t.stack&&t.fileName?Pc(e,t):t.message&&t[`opera#sourceloc`]?t.stacktrace?t.message.indexOf(`
`)>-1&&t.message.split(`
`).length>t.stacktrace.split(`
`).length?Lc(e,t):Rc(e,t):Lc(e,t):t.message&&t.stack&&t.stacktrace?t.stacktrace.indexOf(`called from line`)<0?zc(e,t):Bc(e,t):t.stack&&!t.fileName?Nc(e,t):Vc(e,t):[]}function Nc(e,t){return(t.stack+`
`).replace(Xc().bZ(`^[\\s\\S]+?\\s+at\\s+`),` at `).replace(Xc().bo(`^\\s+(at eval )?at\\s+`,`gm`),``).replace(Xc().bo(`^([^\\(]+?)([\\n])`,`gm`),`{anonymous}() ($1)$2`).replace(Xc().bo(`^Object.<anonymous>\\s*\\(([^\\)]+)\\)`,`gm`),`{anonymous}() ($1)`).replace(Xc().bo(`^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(0,-1)}function Pc(e,t){return t.stack.replace(Xc().bo(`(?:\\n@:0)?\\s+$`,`m`),``).replace(Xc().bo(`^(?:\\((\\S*)\\))?@`,`gm`),`{anonymous}($1)@`).split(`
`)}function Fc(e,t){return t.stack.replace(Xc().bo(`^\\s*at\\s+(.*)$`,`gm`),`$1`).replace(Xc().bo(`^Anonymous function\\s+`,`gm`),`{anonymous}() `).replace(Xc().bo(`^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(1)}function Ic(e,t){return t.stack.replace(Xc().bo(`\\[native code\\]\\n`,`m`),``).replace(Xc().bo(`^(?=\\w+Error\\:).*$\\n`,`m`),``).replace(Xc().bo(`^@`,`gm`),`{anonymous}()@`).split(`
`)}function Lc(e,t){for(var n=Xc().bo(`Line (\\d+).*script (?:in )?(\\S+)`,`i`),r=t.message.split(`
`),i=[],a=2,o=r.length|0;a<o;){var s=n.exec(r[a]);s!==null&&i.push(`{anonymous}()@`+s[2]+`:`+s[1])|0,a=2+a|0}return i}function Rc(e,t){for(var n=Xc().bo(`Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$`,`i`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[3],l=c===void 0?`{anonymous}`:c;i.push(l+`()@`+s[2]+`:`+s[1])|0}a=2+a|0}return i}function zc(e,t){for(var n=Xc().bZ(`^(.*)@(.+):(\\d+)$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[1],l=c===void 0?`global code`:c+`()`;i.push(l+`@`+s[2]+`:`+s[3])|0}a=1+a|0}return i}function Bc(e,t){for(var n=Xc().bZ(`^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[4]+`:`+s[1]+`:`+s[2],l=s[2],u=(l===void 0?`global code`:l).replace(Xc().bZ(`<anonymous function: (\\S+)>`),`$1`).replace(Xc().bZ(`<anonymous function>`),`{anonymous}`);i.push(u+`@`+c)|0}a=2+a|0}return i}function Vc(e,t){return[]}function Hc(e,t,n){for(;;)if(t<(Ac(e).length|0)){var r=Ac(e)[t];if(n.startsWith(r))return``+Oc(e)[r]+n.substring(r.length);t=1+t|0}else return n.startsWith(`L`)?n.substring(1):n}function Uc(){this.gc=null,this.gd=null,this.gb=null,this.bz=0}M=Uc.prototype=new N,M.constructor=Uc;function Wc(){}Wc.prototype=M,M.mS=(function(e){return Sc(this,Mc(this,e))}),new F().i(Uc,`java.lang.StackTrace$`,{e4:1});var Gc;function Kc(){return Gc||=new Uc,Gc}function qc(){}M=qc.prototype=new N,M.constructor=qc;function Jc(){}Jc.prototype=M,M.bZ=(function(e){return new RegExp(e)}),M.bo=(function(e,t){return new RegExp(e,t)}),new F().i(qc,`java.lang.StackTrace$StringRE$`,{e5:1});var Yc;function Xc(){return Yc||=new qc,Yc}function Zc(){this.j2=null,this.lD=null,$c=this,this.j2=new $x(!1),this.lD=new $x(!0)}M=Zc.prototype=new N,M.constructor=Zc;function Qc(){}Qc.prototype=M,new F().i(Zc,`java.lang.System$Streams$`,{ea:1});var $c;function el(){return $c||=new Zc,$c}function tl(e){var t={};return t[`java.version`]=`1.8`,t[`java.vm.specification.version`]=`1.8`,t[`java.vm.specification.vendor`]=`Oracle Corporation`,t[`java.vm.specification.name`]=`Java Virtual Machine Specification`,t[`java.vm.name`]=`Scala.js`,t[`java.vm.version`]=`1.19.0`,t[`java.specification.version`]=`1.8`,t[`java.specification.vendor`]=`Oracle Corporation`,t[`java.specification.name`]=`Java Platform API Specification`,t[`file.separator`]=`/`,t[`path.separator`]=`:`,t[`line.separator`]=`
`,t}function nl(){this.ge=null,this.j3=null,il=this,this.ge=tl(this),this.j3=null}M=nl.prototype=new N,M.constructor=nl;function rl(){}rl.prototype=M,M.hc=(function(e,t){if(this.ge!==null){var n=this.ge;return ll().gf.call(n,e)?n[e]:t}else return this.j3.hc(e,t)}),new F().i(nl,`java.lang.System$SystemProperties$`,{eb:1});var il;function al(){return il||=new nl,il}function ol(){this.gf=null,cl=this,this.gf=Object.prototype.hasOwnProperty}M=ol.prototype=new N,M.constructor=ol;function sl(){}sl.prototype=M,new F().i(ol,`java.lang.Utils$Cache$`,{ed:1});var cl;function ll(){return cl||=new ol,cl}function ul(e,t){return e===t}function dl(e){return 0}function fl(e,t){return!!(e&&e.$classData&&e.$classData.D===t&&e.$classData.B.n.b7)}var pl=new F().i(0,`java.lang.Void`,{b7:1},(e=>e===void 0));function ml(e,t){throw Xg(new Qg,`argument type mismatch`)}function hl(){}M=hl.prototype=new N,M.constructor=hl;function gl(){}gl.prototype=M,M.bJ=(function(e){return e instanceof P||e instanceof va||e instanceof ya||e instanceof ba||e instanceof xa||e instanceof Sa||e instanceof Ca||e instanceof wa||e instanceof Ta?e.a.length:ml(this,e)}),new F().i(hl,`java.lang.reflect.Array$`,{ee:1});var _l;function vl(){return _l||=new hl,_l}function yl(){}M=yl.prototype=new N,M.constructor=yl;function bl(){}bl.prototype=M,M.ml=(function(e,t){for(var n=0,r=e.a.length;;)if(n===r)return-1-n|0;else{var i=(n+r|0)>>>1|0,a=e.a[i],o=t===a?0:t<a?-1:1;if(o<0)r=i;else if(o===0)return i;else n=1+i|0}}),M.kD=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=a.m,s=a.o,c=r,l=t.a[c],u=l.m,d=l.o;if(!(o===u&&s===d))return!1;r=1+r|0}return!0}),M.h1=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),M.kE=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),M.kA=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),M.kz=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),M.kF=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),M.kB=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),M.kC=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),M.V=(function(e,t){if(t<0)throw new i_;var n=e.a.length,r=t<n?t:n,i=Yi(e).Q.Q().Q.U(t);return e.t(0,i,0,r),i}),M.a3=(function(e,t,n){if(t>n)throw Xg(new Qg,t+` > `+n);var r=e.a.length,i=n-t|0,a=r-t|0,o=i<a?i:a,s=Yi(e).Q.Q().Q.U(i);return e.t(t,s,0,o),s}),new F().i(yl,`java.util.Arrays$`,{ef:1});var xl;function z(){return xl||=new yl,xl}function B(e,t){this.m=0,this.o=0,this.m=e,this.o=t}M=B.prototype=new N,M.constructor=B;function Sl(){}Sl.prototype=M,M.w=(function(e){return e instanceof B&&this.m===e.m&&this.o===e.o}),M.A=(function(){return this.m^this.o}),M.H=(function(){return Al().l5(this.m,this.o)}),M.oY=(function(){return this.m}),M.oX=(function(){return Al().l4(this.m,this.o)}),M.oW=(function(){return Al().f4(this.m,this.o)}),M.oD=(function(){return this.m<<24>>24}),M.oU=(function(){return this.m<<16>>16}),M.oO=(function(){return this.m}),M.oP=(function(){return this}),M.oJ=(function(){return Al().l4(this.m,this.o)}),M.oH=(function(){return Al().f4(this.m,this.o)}),M.oF=(function(e){return Al().l2(this.m,this.o,e.m,e.o)}),M.oE=(function(e){return Al().l2(this.m,this.o,e.m,e.o)}),M.oI=(function(e){return this.m===e.m&&this.o===e.o}),M.oT=(function(e){return!(this.m===e.m&&this.o===e.o)}),M.ov=(function(e){var t=this.o,n=e.o;return t===n?(-2147483648^this.m)<(-2147483648^e.m):t<n}),M.ow=(function(e){var t=this.o,n=e.o;return t===n?(-2147483648^this.m)<=(-2147483648^e.m):t<n}),M.or=(function(e){var t=this.o,n=e.o;return t===n?(-2147483648^this.m)>(-2147483648^e.m):t>n}),M.os=(function(e){var t=this.o,n=e.o;return t===n?(-2147483648^this.m)>=(-2147483648^e.m):t>n}),M.p0=(function(){return new B(~this.m,~this.o)}),M.op=(function(e){return new B(this.m|e.m,this.o|e.o)}),M.oo=(function(e){return new B(this.m&e.m,this.o&e.o)}),M.oC=(function(e){return new B(this.m^e.m,this.o^e.o)}),M.ox=(function(e){var t=this.m;return new B(32&e?0:t<<e,32&e?t<<e:(t>>>1|0)>>>(31-e|0)|0|this.o<<e)}),M.ou=(function(e){var t=this.o;return new B(32&e?t>>>e|0:this.m>>>e|0|t<<1<<(31-e|0),32&e?0:t>>>e|0)}),M.ot=(function(e){var t=this.o;return new B(32&e?t>>e:this.m>>>e|0|t<<1<<(31-e|0),32&e?t>>31:t>>e)}),M.oZ=(function(){var e=this.m,t=this.o;return new B(-e|0,e===0?-t|0:~t)}),M.oA=(function(e){var t=this.m,n=this.o,r=e.o,i=t+e.m|0;return new B(i,(-2147483648^i)<(-2147483648^t)?1+(n+r|0)|0:n+r|0)}),M.oy=(function(e){var t=this.m,n=this.o,r=e.o,i=t-e.m|0;return new B(i,(-2147483648^i)>(-2147483648^t)?-1+(n-r|0)|0:n-r|0)}),M.oB=(function(e){var t=this.m,n=e.m,r=65535&t,i=t>>>16|0,a=65535&n,o=n>>>16|0,s=Math.imul(r,a),c=Math.imul(i,a),l=Math.imul(r,o),u=s+((c+l|0)<<16)|0,d=(s>>>16|0)+l|0;return new B(u,(((Math.imul(t,e.o)+Math.imul(this.o,n)|0)+Math.imul(i,o)|0)+(d>>>16|0)|0)+(((65535&d)+c|0)>>>16|0)|0)}),M.oq=(function(e){var t=Al();return new B(t.mD(this.m,this.o,e.m,e.o),t.S)}),M.oz=(function(e){var t=Al();return new B(t.nO(this.m,this.o,e.m,e.o),t.S)}),new F().i(B,`org.scalajs.linker.runtime.RuntimeLong`,{b8:1});function Cl(e,t,n){return-2097152&n?El(e,t,n,1e9,0,2):``+(4294967296*n+ +(t>>>0))}function wl(e,t,n,r,i){if(-2097152&n)if(i===0&&!(r&(-1+r|0))){var a=31-(Math.clz32(r)|0)|0;return e.S=n>>>a|0,t>>>a|0|n<<1<<(31-a|0)}else if(r===0&&!(i&(-1+i|0))){var o=31-(Math.clz32(i)|0)|0;return e.S=0,n>>>o|0}else return El(e,t,n,r,i,0)|0;else{if(-2097152&i)return e.S=0,0;var s=(4294967296*n+ +(t>>>0))/(4294967296*i+ +(r>>>0));return e.S=s/4294967296|0,s|0}}function Tl(e,t,n,r,i){if(-2097152&n)return i===0&&!(r&(-1+r|0))?(e.S=0,t&(-1+r|0)):r===0&&!(i&(-1+i|0))?(e.S=n&(-1+i|0),t):El(e,t,n,r,i,1)|0;if(-2097152&i)return e.S=n,t;var a=(4294967296*n+ +(t>>>0))%(4294967296*i+ +(r>>>0));return e.S=a/4294967296|0,a|0}function El(e,t,n,r,i,a){for(var o=(i===0?32+(Math.clz32(r)|0)|0:Math.clz32(i)|0)-(n===0?32+(Math.clz32(t)|0)|0:Math.clz32(n)|0)|0,s=o,c=32&s?0:r<<s,l=32&s?r<<s:(r>>>1|0)>>>(31-s|0)|0|i<<s,u=c,d=l,f=t,p=n,m=0,h=0;o>=0&&-2097152&p;){var g=f,_=p,v=u,y=d;if(_===y?(-2147483648^g)>=(-2147483648^v):(-2147483648^_)>=(-2147483648^y)){var b=f,ee=p,te=u,x=d,S=b-te|0,C=(-2147483648^S)>(-2147483648^b)?-1+(ee-x|0)|0:ee-x|0;f=S,p=C,o<32?m|=1<<o:h|=1<<o}o=-1+o|0;var ne=u,re=d,ie=ne>>>1|0|re<<31,ae=re>>>1|0;u=ie,d=ae}var w=f,T=p;if(T===i?(-2147483648^w)>=(-2147483648^r):(-2147483648^T)>=(-2147483648^i)){var E=f,oe=4294967296*p+ +(E>>>0),se=4294967296*i+ +(r>>>0);if(a!==1){var ce=oe/se,le=ce|0,ue=ce/4294967296|0,de=m,fe=h,pe=de+le|0,me=(-2147483648^pe)<(-2147483648^de)?1+(fe+ue|0)|0:fe+ue|0;m=pe,h=me}if(a!==0){var he=oe%se;f=he|0,p=he/4294967296|0}}if(a===0)return e.S=h,m;if(a===1)return e.S=p,f;var ge=m,_e=4294967296*h+ +(ge>>>0),ve=``+f,ye=ve.length;return``+_e+`000000000`.substring(ye)+ve}function Dl(){this.S=0}M=Dl.prototype=new N,M.constructor=Dl;function Ol(){}Ol.prototype=M,M.l5=(function(e,t){return t===e>>31?``+e:t<0?`-`+Cl(this,-e|0,e===0?-t|0:~t):Cl(this,e,t)}),M.f4=(function(e,t){return t<0?-(4294967296*((e===0?-t|0:~t)>>>0)+ +((-e|0)>>>0)):4294967296*t+ +(e>>>0)}),M.l4=(function(e,t){if(t<0)var n=-e|0,r=e===0?-t|0:~t;else var n=e,r=t;var i=!(-2097152&r)||!(65535&n)?n:32768|-65536&n,a=4294967296*(r>>>0)+ +(i>>>0);return Math.fround(t<0?-a:a)}),M.oM=(function(e){return new B(e,e>>31)}),M.oL=(function(e){return new B(this.l3(e),this.S)}),M.l3=(function(e){if(e<-0x8000000000000000)return this.S=-2147483648,0;if(e>=0x8000000000000000)return this.S=2147483647,-1;var t=e|0,n=e/4294967296|0;return this.S=e<0&&t!==0?-1+n|0:n,t}),M.l2=(function(e,t,n,r){return t===r?e===n?0:(-2147483648^e)<(-2147483648^n)?-1:1:t<r?-1:1}),M.mD=(function(e,t,n,r){if((n|r)===0)throw new qg(`/ by zero`);if(t===e>>31)if(r===n>>31){if(e===-2147483648&&n===-1)return this.S=0,-2147483648;var i=ea(e,n);return this.S=i>>31,i}else if(e===-2147483648&&n===-2147483648&&r===0)return this.S=-1,-1;else return this.S=0,0;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=wl(this,a,o,s,c);if((t^r)>=0)return l;var u=this.S;return this.S=l===0?-u|0:~u,-l|0}}),M.nO=(function(e,t,n,r){if((n|r)===0)throw new qg(`/ by zero`);if(t===e>>31)if(r===n>>31)if(n!==-1){var i=ta(e,n);return this.S=i>>31,i}else return this.S=0,0;else if(e===-2147483648&&n===-2147483648&&r===0)return this.S=0,0;else return this.S=t,e;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=Tl(this,a,o,s,c);if(t<0){var u=this.S;return this.S=l===0?-u|0:~u,-l|0}else return l}}),new F().i(Dl,`org.scalajs.linker.runtime.RuntimeLong$`,{ei:1});var kl;function Al(){return kl||=new Dl,kl}function jl(){this.gg=null,this.j7=null,Nl=this,this.gg=new Sa(0),this.j7=new P(0)}M=jl.prototype=new N,M.constructor=jl;function Ml(){}Ml.prototype=M,new F().i(jl,`scala.Array$EmptyArrays$`,{eo:1});var Nl;function Pl(){return Nl||=new jl,Nl}var V=new F().i(1,`scala.Function1`,{f:1});function Fl(){}M=Fl.prototype=new N,M.constructor=Fl;function Il(){}Il.prototype=M;function Ll(){this.ja=null,this.j9=null,zl=this,this.ja=new Y((e=>Bl().ja)),this.j9=new $h}M=Ll.prototype=new N,M.constructor=Ll;function Rl(){}Rl.prototype=M,new F().i(Ll,`scala.PartialFunction$`,{ew:1});var zl;function Bl(){return zl||=new Ll,zl}function Vl(){this.jf=null,Ul=this,this.jf=new Y((e=>Wl().jf))}M=Vl.prototype=new N,M.constructor=Vl;function Hl(){}Hl.prototype=M,M.mX=(function(e,t){var n=vl().bJ(e),r=0;if(e instanceof P)for(;r<n;)t.i(e.a[r]),r=1+r|0;else if(e instanceof Sa)for(;r<n;)t.i(e.a[r]),r=1+r|0;else if(e instanceof Ta)for(;r<n;)t.i(e.a[r]),r=1+r|0;else if(e instanceof Ca)for(;r<n;)t.i(e.a[r]),r=1+r|0;else if(e instanceof wa)for(;r<n;)t.i(e.a[r]),r=1+r|0;else if(e instanceof ya)for(;r<n;)t.i(fa(e.a[r])),r=1+r|0;else if(e instanceof ba)for(;r<n;)t.i(e.a[r]),r=1+r|0;else if(e instanceof xa)for(;r<n;)t.i(e.a[r]),r=1+r|0;else if(e instanceof va)for(;r<n;)t.i(e.a[r]),r=1+r|0;else throw new g_(e)}),new F().i(Vl,`scala.collection.ArrayOps$`,{eD:1});var Ul;function Wl(){return Ul||=new Vl,Ul}function Gl(){}M=Gl.prototype=new N,M.constructor=Gl;function Kl(){}Kl.prototype=M,M.bW=(function(e){var t=e+~(e<<9)|0;return t^=t>>>14|0,t=t+(t<<4)|0,t^(t>>>10|0)}),new F().i(Gl,`scala.collection.Hashing$`,{eP:1});var ql;function Jl(){return ql||=new Gl,ql}function Yl(e,t){for(var n=e.k();n.l();)t.i(n.g())}function Xl(e,t){for(var n=!0,r=e.k();n&&r.l();)n=!!t.i(r.g());return n}function Zl(e){switch(e.z()){case-1:return!e.k().l();case 0:return!0;default:return!1}}function Ql(e,t,n,r){for(var i=e.k(),a=n,o=vl().bJ(t)-n|0,s=n+(r<o?r:o)|0;a<s&&i.l();)W().gX(t,a,i.g()),a=1+a|0;return a-n|0}function $l(e,t,n,r){return e.z()===0?``+t+r:e.di(pE(new mE),t,n,r).aR.n}function eu(e,t,n,r,i){var a=t.aR;n.length!==0&&(a.n=``+a.n+n);var o=e.k();if(o.l()){var s=o.g();for(a.n=``+a.n+s;o.l();){a.n=``+a.n+r;var c=o.g();a.n=``+a.n+c}}return i.length!==0&&(a.n=``+a.n+i),t}function tu(e,t){if(e.z()>=0){var n=t.bb(e.z());return e.by(n,0,2147483647),n}else{var r=null,i=t.aI(),a=i===Oa.l();r=[];for(var o=e.k();o.l();){var s=o.g(),c=a?pa(s):s===null?i.Q.z:s;r.push(c)}return(i===Ea.l()?pl.l():i===Bu.l()||i===fh.l()?I.l():i).Q.r().w(r)}}function nu(e,t){this.jm=null,this.eu=null,this.jm=e,this.eu=t}M=nu.prototype=new N,M.constructor=nu;function ru(){}ru.prototype=M,M.nd=(function(){return this.jm.ah().k()}),new F().i(nu,`scala.collection.Iterator$ConcatIteratorCell`,{eY:1});function iu(){}M=iu.prototype=new N,M.constructor=iu;function au(){}au.prototype=M,M.f1=(function(e,t){return e_(new t_,e+` is out of bounds (min 0, max `+t+`)`)}),new F().i(iu,`scala.collection.generic.CommonErrors$`,{f8:1});var ou;function su(){return ou||=new iu,ou}function cu(){try{return af().l6(al().hc(`scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength`,`64`),10)}catch(e){throw e}}function lu(){this.jr=0,du=this,this.jr=cu()}M=lu.prototype=new N,M.constructor=lu;function uu(){}uu.prototype=M,new F().i(lu,`scala.collection.immutable.IndexedSeqDefaults$`,{fg:1});var du;function fu(){return du||=new lu,du}function pu(){this.gD=null}M=pu.prototype=new N,M.constructor=pu;function mu(){}mu.prototype=M,M.h2=(function(){var e=this.gD;if(e===null)throw new $g(`uninitialized`);return e.ah()}),M.hg=(function(e){if(this.gD!==null)throw new $g(`already initialized`);this.gD=e}),new F().i(pu,`scala.collection.immutable.LazyList$LazyBuilder$DeferredState`,{fk:1});function hu(){this.jw=null,_u=this,this.jw=new Rm(0,0,new P(0),new Sa(0),0,0)}M=hu.prototype=new N,M.constructor=hu;function gu(){}gu.prototype=M,new F().i(hu,`scala.collection.immutable.MapNode$`,{fB:1});var _u;function vu(){return _u||=new hu,_u}function yu(e,t,n){return Jy(new Xy,n+` is out of bounds (min 0, max `+(-1+vl().bJ(t)|0))}function bu(){}M=bu.prototype=new N,M.constructor=bu;function xu(){}xu.prototype=M,M.l9=(function(e,t){if(t<0||t>(-1+e.a.length|0))throw yu(this,e,t);var n=new Sa(-1+e.a.length|0);e.t(0,n,0,t);var r=1+t|0,i=-1+(e.a.length-t|0)|0;return e.t(r,n,t,i),n}),M.nh=(function(e,t,n){if(t<0||t>e.a.length)throw yu(this,e,t);var r=new Sa(1+e.a.length|0);e.t(0,r,0,t),r.a[t]=n;var i=1+t|0,a=e.a.length-t|0;return e.t(t,r,i,a),r});var Su=new F().i(0,`scala.collection.immutable.Node`,{aJ:1});function Cu(){this.eC=0,Tu=this,this.eC=na(7)}M=Cu.prototype=new N,M.constructor=Cu;function wu(){}wu.prototype=M,M.dM=(function(e,t){return 31&(e>>>t|0)}),M.dm=(function(e){return 1<<e}),M.ne=(function(e,t){return af().dl(e&(-1+t|0))}),M.cb=(function(e,t,n){return e===-1?t:this.ne(e,n)}),new F().i(Cu,`scala.collection.immutable.Node$`,{fE:1});var Tu;function Eu(){return Tu||=new Cu,Tu}function Du(){this.gH=null,this.b8=null,this.c7=null,this.ea=null,this.gI=null,this.jA=null,ku=this,this.gH=new P(0),this.b8=new(I.r().r()).C(0),this.c7=new(I.r().r().r()).C(0),this.ea=new(I.r().r().r().r()).C(0),this.gI=new(I.r().r().r().r().r()).C(0),this.jA=new(I.r().r().r().r().r().r()).C(0)}M=Du.prototype=new N,M.constructor=Du;function Ou(){}Ou.prototype=M,M.ee=(function(e,t){var n=e.a.length,r=new P(1+n|0);return e.t(0,r,0,n),r.a[n]=t,r}),M.E=(function(e,t){var n=z().V(e,1+e.a.length|0);return n.a[-1+n.a.length|0]=t,n}),M.c9=(function(e,t){var n=Yi(t).Q.Q().Q.U(1+t.a.length|0),r=t.a.length;return t.t(0,n,1,r),n.a[0]=e,n}),M.h4=(function(e,t,n){var r=0,i=t.a.length;if(e===0)for(;r<i;)n.i(t.a[r]),r=1+r|0;else for(var a=-1+e|0;r<i;)this.h4(a,t.a[r],n),r=1+r|0}),M.bK=(function(e,t){for(var n=0;n<e.a.length;){var r=e.a[n],i=t.i(r);if(!Object.is(r,i))return this.nq(e,t,n,i);n=1+n|0}return e}),M.nq=(function(e,t,n,r){var i=new P(e.a.length);n>0&&e.t(0,i,0,n),i.a[n]=r;for(var a=1+n|0;a<e.a.length;)i.a[a]=t.i(e.a[a]),a=1+a|0;return i}),M.a2=(function(e,t,n){if(e===1)return this.bK(t,n);for(var r=0;r<t.a.length;){var i=t.a[r],a=this.a2(-1+e|0,i,n);if(i!==a)return this.nr(e,t,n,r,a);r=1+r|0}return t}),M.nr=(function(e,t,n,r,i){var a=Yi(t).Q.Q().Q.U(t.a.length);r>0&&t.t(0,a,0,r),a.a[r]=i;for(var o=1+r|0;o<t.a.length;)a.a[o]=this.a2(-1+e|0,t.a[o],n),o=1+o|0;return a}),new F().i(Du,`scala.collection.immutable.VectorStatics$`,{fV:1});var ku;function H(){return ku||=new Du,ku}function Au(e,t,n){this.ec=null,this.cs=0,this.aQ=null,this.ec=e,this.cs=t,this.aQ=n}M=Au.prototype=new N,M.constructor=Au;function ju(){}ju.prototype=M,M.mU=(function(e,t){for(var n=this;;)if(t===n.cs&&U().p(e,n.ec))return n;else if(n.aQ===null||n.cs>t)return null;else n=n.aQ}),M.H=(function(){return`Node(`+this.ec+`, `+this.cs+`) -> `+this.aQ});var Mu=new F().i(Au,`scala.collection.mutable.HashSet$Node`,{gd:1});function Nu(){}M=Nu.prototype=new N,M.constructor=Nu;function Pu(){}Pu.prototype=M,M.km=(function(e,t,n){if(t!==e)throw new c_(n)}),new F().i(Nu,`scala.collection.mutable.MutationTracker$`,{gj:1});var Fu;function Iu(){return Fu||=new Nu,Fu}function Lu(){}M=Lu.prototype=new N,M.constructor=Lu;function Ru(){}Ru.prototype=M,M.p=(function(e,t){return e===t||(cf(e)?this.mK(e,t):e instanceof Ji?this.mI(e,t):e===null?t===null:Zi(e,t))}),M.mK=(function(e,t){if(cf(t))return this.mJ(e,t);if(t instanceof Ji){if(typeof e==`number`)return+e===t.c;if(e instanceof B){var n=ma(e),r=n.m,i=n.o,a=t.c,o=a>>31;return r===a&&i===o}else return e===null?t===null:Zi(e,t)}else return e===null?t===null:Zi(e,t)}),M.mJ=(function(e,t){if(typeof e==`number`){var n=+e;if(typeof t==`number`)return n===+t;if(t instanceof B){var r=ma(t);return n===Al().f4(r.m,r.o)}else return!1}else if(e instanceof B){var i=ma(e),a=i.m,o=i.o;if(t instanceof B){var s=ma(t),c=s.m,l=s.o;return a===c&&o===l}else if(typeof t==`number`){var u=+t;return Al().f4(a,o)===u}else return!1}else return e===null?t===null:Zi(e,t)}),M.mI=(function(e,t){if(t instanceof Ji)return e.c===t.c;if(cf(t)){if(typeof t==`number`)return+t===e.c;if(t instanceof B){var n=ma(t),r=n.m,i=n.o,a=e.c,o=a>>31;return r===a&&i===o}else return t===null?e===null:Zi(t,e)}else return e===null&&t===null}),new F().i(Lu,`scala.runtime.BoxesRunTime$`,{gU:1});var zu;function U(){return zu||=new Lu,zu}var Bu=new F().i(0,`scala.runtime.Null$`,{gX:1});function Vu(){}M=Vu.prototype=new N,M.constructor=Vu;function Hu(){}Hu.prototype=M,M.dK=(function(e,t){if(e instanceof P||e instanceof Sa||e instanceof Ta||e instanceof Ca||e instanceof wa)return e.a[t];if(e instanceof ya)return fa(e.a[t]);if(e instanceof ba||e instanceof xa||e instanceof va)return e.a[t];throw e===null?new a_:new g_(e)}),M.gX=(function(e,t,n){if(e instanceof P)e.a[t]=n;else if(e instanceof Sa)e.a[t]=n|0;else if(e instanceof Ta)e.a[t]=+n;else if(e instanceof Ca)e.a[t]=ma(n);else if(e instanceof wa)e.a[t]=Math.fround(n);else if(e instanceof ya)e.a[t]=pa(n);else if(e instanceof ba)e.a[t]=n|0;else if(e instanceof xa)e.a[t]=n|0;else if(e instanceof va)e.a[t]=!!n;else if(e===null)throw new a_;else throw new g_(e)}),M.lY=(function(e){return $l(e.dO(),e.cE()+`(`,`,`,`)`)}),M.b=(function(e){return e===null?null:e.a.length===0?Mb(Ib()):new uT(e)}),M.ok=(function(e){return e===null?null:new oT(e)}),new F().i(Vu,`scala.runtime.ScalaRunTime$`,{gZ:1});var Uu;function W(){return Uu||=new Vu,Uu}function Wu(){}M=Wu.prototype=new N,M.constructor=Wu;function Gu(){}Gu.prototype=M,M.e=(function(e,t){var n=this.cA(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),M.cA=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),M.C=(function(e,t){return this.mk(e^t)}),M.mk=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),M.eh=(function(e){var t=e.m,n=e.o;return n===t>>31?t:t^n}),M.bV=(function(e){var t=na(e);if(t===e)return t;var n=Al(),r=n.l3(e),i=n.S;return Al().f4(r,i)===e?r^i:xc().hn(e)}),M.P=(function(e){if(e===null)return 0;if(typeof e==`number`)return this.bV(+e);if(e instanceof B){var t=ma(e);return this.eh(new B(t.m,t.o))}else return Qi(e)}),M.f2=(function(e){throw e_(new t_,``+e)}),new F().i(Wu,`scala.runtime.Statics$`,{h1:1});var Ku;function G(){return Ku||=new Wu,Ku}function qu(){}M=qu.prototype=new N,M.constructor=qu;function Ju(){}Ju.prototype=M,M.o1=(function(e,t){return setTimeout((()=>{t.ah()}),e)}),new F().i(qu,`scala.scalajs.js.timers.package$`,{h7:1});var Yu;function Xu(){return Yu||=new qu,Yu}function Zu(){}M=Zu.prototype=new N,M.constructor=Zu;function Qu(){}Qu.prototype=M,M.ob=(function(e){if(e instanceof kw)return e.fA;var t=[];return e.b9(new Y((e=>t.push(e)|0))),t}),new F().i(Zu,`scala.scalajs.runtime.Compat$`,{hg:1});var $u;function ed(){return $u||=new Zu,$u}function td(){}M=td.prototype=new N,M.constructor=td;function nd(){}nd.prototype=M,M.o2=(function(e){var t=`Illegal command line`+(e.kU()===0?``:e.kU()===1?` after first argument`:` after `+e.kU()+` arguments`)+`: `+e.oQ();Af().nJ().nk(t+`
`)}),new F().i(td,`scala.util.CommandLineParser$`,{hi:1});function rd(e){this.gR=null,this.gR=e}M=rd.prototype=new N,M.constructor=rd;function id(){}id.prototype=M,M.H=(function(){return`DynamicVariable(`+this.gR+`)`}),new F().i(rd,`scala.util.DynamicVariable`,{hk:1});function ad(){}M=ad.prototype=new N,M.constructor=ad;function od(){}od.prototype=M,M.e=(function(e,t){var n=this.cA(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),M.cA=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),M.C=(function(e,t){return this.bp(e^t)}),M.bp=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),M.lo=(function(e,t,n){var r=n;return r=this.e(r,ob(`Tuple2`)),r=this.e(r,e),r=this.e(r,t),this.C(r,2)}),M.hq=(function(e,t,n){var r=e.cC();if(r===0)return ob(e.cE());var i=t;n||(i=this.e(i,ob(e.cE())));for(var a=0;a<r;)i=this.e(i,G().P(e.cD(a))),a=1+a|0;return this.C(i,r)}),M.hu=(function(e,t){for(var n=0,r=0,i=0,a=1,o=e.k();o.l();){var s=o.g(),c=G().P(s);n=n+c|0,r^=c,a=Math.imul(a,1|c),i=1+i|0}var l=t;return l=this.e(l,n),l=this.e(l,r),l=this.cA(l,a),this.C(l,i)}),M.nI=(function(e,t){var n=e.k(),r=t;if(!n.l())return this.C(r,0);var i=n.g();if(!n.l())return this.C(this.e(r,G().P(i)),1);var a=n.g(),o=G().P(i);r=this.e(r,o);for(var s=r,c=G().P(a),l=c-o|0,u=2;n.l();){r=this.e(r,c);var d=G().P(n.g());if(l!==(d-c|0)||l===0){for(r=this.e(r,d),u=1+u|0;n.l();)r=this.e(r,G().P(n.g())),u=1+u|0;return this.C(r,u)}c=d,u=1+u|0}return this.bp(this.e(this.e(s,l),c))}),M.kb=(function(e,t){var n=t,r=vl().bJ(e);switch(r){case 0:return this.C(n,0);case 1:return this.C(this.e(n,G().P(W().dK(e,0))),1);default:var i=G().P(W().dK(e,0));n=this.e(n,i);for(var a=n,o=G().P(W().dK(e,1)),s=o-i|0,c=2;c<r;){n=this.e(n,o);var l=G().P(W().dK(e,c));if(s!==(l-o|0)||s===0){for(n=this.e(n,l),c=1+c|0;c<r;)n=this.e(n,G().P(W().dK(e,c))),c=1+c|0;return this.C(n,r)}o=l,c=1+c|0}return this.bp(this.e(this.e(a,s),o))}}),M.nM=(function(e,t,n,r){return this.bp(this.e(this.e(this.e(r,e),t),n))}),M.nf=(function(e,t){var n=t,r=e.q();switch(r){case 0:return this.C(n,0);case 1:return this.C(this.e(n,G().P(e.u(0))),1);default:var i=G().P(e.u(0));n=this.e(n,i);for(var a=n,o=G().P(e.u(1)),s=o-i|0,c=2;c<r;){n=this.e(n,o);var l=G().P(e.u(c));if(s!==(l-o|0)||s===0){for(n=this.e(n,l),c=1+c|0;c<r;)n=this.e(n,G().P(e.u(c))),c=1+c|0;return this.C(n,r)}o=l,c=1+c|0}return this.bp(this.e(this.e(a,s),o))}}),M.nm=(function(e,t){for(var n=0,r=t,i=0,a=0,o=0,s=0,c=e;!c.c();){var l=c.x(),u=c.s(),d=G().P(l);switch(r=this.e(r,d),i){case 0:s=d,i=1;break;case 1:a=d-o|0,i=2;break;case 2:(a!==(d-o|0)||a===0)&&(i=3);break}o=d,n=1+n|0,c=u}return i===2?this.nM(s,a,o,t):this.C(r,n)}),M.kk=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.C(n,0);case 1:return this.C(this.e(n,e.a[0]?1231:1237),1);default:var i=e.a[0]?1231:1237;n=this.e(n,i);for(var a=n,o=e.a[1]?1231:1237,s=o-i|0,c=2;c<r;){n=this.e(n,o);var l=e.a[c]?1231:1237;if(s!==(l-o|0)||s===0){for(n=this.e(n,l),c=1+c|0;c<r;)n=this.e(n,e.a[c]?1231:1237),c=1+c|0;return this.C(n,r)}o=l,c=1+c|0}return this.bp(this.e(this.e(a,s),o))}}),M.kc=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.C(n,0);case 1:return this.C(this.e(n,e.a[0]),1);default:var i=e.a[0];n=this.e(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.e(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.e(n,l),c=1+c|0;c<r;)n=this.e(n,e.a[c]),c=1+c|0;return this.C(n,r)}o=l,c=1+c|0}return this.bp(this.e(this.e(a,s),o))}}),M.kd=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.C(n,0);case 1:return this.C(this.e(n,e.a[0]),1);default:var i=e.a[0];n=this.e(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.e(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.e(n,l),c=1+c|0;c<r;)n=this.e(n,e.a[c]),c=1+c|0;return this.C(n,r)}o=l,c=1+c|0}return this.bp(this.e(this.e(a,s),o))}}),M.ke=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.C(n,0);case 1:return this.C(this.e(n,G().bV(e.a[0])),1);default:var i=G().bV(e.a[0]);n=this.e(n,i);for(var a=n,o=G().bV(e.a[1]),s=o-i|0,c=2;c<r;){n=this.e(n,o);var l=G().bV(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.e(n,l),c=1+c|0;c<r;)n=this.e(n,G().bV(e.a[c])),c=1+c|0;return this.C(n,r)}o=l,c=1+c|0}return this.bp(this.e(this.e(a,s),o))}}),M.kf=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.C(n,0);case 1:return this.C(this.e(n,G().bV(e.a[0])),1);default:var i=G().bV(e.a[0]);n=this.e(n,i);for(var a=n,o=G().bV(e.a[1]),s=o-i|0,c=2;c<r;){n=this.e(n,o);var l=G().bV(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.e(n,l),c=1+c|0;c<r;)n=this.e(n,G().bV(e.a[c])),c=1+c|0;return this.C(n,r)}o=l,c=1+c|0}return this.bp(this.e(this.e(a,s),o))}}),M.kg=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.C(n,0);case 1:return this.C(this.e(n,e.a[0]),1);default:var i=e.a[0];n=this.e(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.e(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.e(n,l),c=1+c|0;c<r;)n=this.e(n,e.a[c]),c=1+c|0;return this.C(n,r)}o=l,c=1+c|0}return this.bp(this.e(this.e(a,s),o))}}),M.kh=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.C(n,0);case 1:var i=n,a=e.a[0];return this.C(this.e(i,G().eh(new B(a.m,a.o))),1);default:var o=e.a[0],s=G().eh(new B(o.m,o.o));n=this.e(n,s);for(var c=n,l=e.a[1],u=G().eh(new B(l.m,l.o)),d=u-s|0,f=2;f<r;){n=this.e(n,u);var p=e.a[f],m=G().eh(new B(p.m,p.o));if(d!==(m-u|0)||d===0){for(n=this.e(n,m),f=1+f|0;f<r;){var h=n,g=e.a[f];n=this.e(h,G().eh(new B(g.m,g.o))),f=1+f|0}return this.C(n,r)}u=m,f=1+f|0}return this.bp(this.e(this.e(c,d),u))}}),M.ki=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.C(n,0);case 1:return this.C(this.e(n,e.a[0]),1);default:var i=e.a[0];n=this.e(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.e(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.e(n,l),c=1+c|0;c<r;)n=this.e(n,e.a[c]),c=1+c|0;return this.C(n,r)}o=l,c=1+c|0}return this.bp(this.e(this.e(a,s),o))}}),M.kj=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.C(n,0);case 1:return this.C(this.e(n,0),1);default:n=this.e(n,0);for(var i=n,a=0,o=a,s=2;s<r;){if(n=this.e(n,a),o!==(-a|0)||o===0){for(n=this.e(n,0),s=1+s|0;s<r;)n=this.e(n,0),s=1+s|0;return this.C(n,r)}a=0,s=1+s|0}return this.bp(this.e(this.e(i,o),a))}});function sd(e){this.dV=null,this.hD=null,this.fT=!1,this.hD=e,bo(this),this.fT=!1}M=sd.prototype=new N,M.constructor=sd;function cd(){}cd.prototype=M,M.nK=(function(e){this.fT?(wo(e),this.hD.ah()):Co(this,e)}),M.nl=(function(){xo(this),this.fT=!0}),new F().i(sd,`com.raquo.airstream.ownership.OneTimeOwner`,{cg:1,ch:1});function ld(){}M=ld.prototype=new N,M.constructor=ld;function ud(){}ud.prototype=M,M.mB=(function(e){return e!==null}),M.mG=(function(e){return e?``:null}),M.eV=(function(e){return this.mB(e)}),M.eW=(function(e){return this.mG(!!e)}),new F().i(ld,`com.raquo.laminar.codecs.package$$anon$1`,{cx:1,ao:1});function dd(e){if(e===null)throw new a_}M=dd.prototype=new N,M.constructor=dd;function fd(){}fd.prototype=M,M.eW=(function(e){return e}),M.eV=(function(e){return e}),new F().i(dd,`com.raquo.laminar.codecs.package$$anon$2`,{cy:1,ao:1});function pd(e){return new gs(e,new Z((e=>e+`px`)))}function md(e,t,n,r){this.ib=null,this.id=null,this.ic=null,this.fZ=null,this.ib=t,this.id=n,this.ic=r,this.fZ=new gd(r)}M=md.prototype=new ys,M.constructor=md;function hd(){}hd.prototype=M,M.lT=(function(e){return new gp(this,(X().r.lW(),hs().kY(e,this.ic)))}),new F().i(md,`com.raquo.laminar.keys.CompositeKey`,{cY:1,W:1});function gd(e){this.g0=null,this.g0=e}M=gd.prototype=new N,M.constructor=gd;function _d(){}_d.prototype=M,M.kt=(function(e){return hs().kY(e,this.g0)}),M.kx=(function(e){return $l(e,``,this.g0,``)}),M.eV=(function(e){return this.kt(e)}),M.eW=(function(e){return this.kx(e)}),new F().i(gd,`com.raquo.laminar.keys.CompositeKey$CompositeCodec`,{d0:1,ao:1});function vd(e){if(e===null)throw new a_}M=vd.prototype=new N,M.constructor=vd;function yd(){}yd.prototype=M,new F().i(vd,`com.raquo.laminar.keys.CompositeKey$CompositeValueMappers$StringValueMapper$`,{d2:1,d1:1});function bd(e,t,n){return e.cH=t,e.dW=n,e}function xd(){this.cH=null,this.dW=null}M=xd.prototype=new ys,M.constructor=xd;function Sd(){}Sd.prototype=M,M.J=(function(e){return new vp(this,e,new Ng(((e,t,n)=>{Vo().lg(e,t,n)})))}),new F().i(xd,`com.raquo.laminar.keys.HtmlAttr`,{ar:1,W:1});function Cd(e,t,n){this.g2=null,this.g1=null,this.fh=null,this.fi=null,this.g2=e,this.g1=t;var r=n.c()?pb():new mb(n.aH()+`:`+e);this.fh=r.c()?e:r.aH(),this.fi=n.c()?pb():new mb(Cs().nv(n.aH()))}M=Cd.prototype=new ys,M.constructor=Cd;function wd(){}wd.prototype=M,new F().i(Cd,`com.raquo.laminar.keys.SvgAttr`,{d4:1,W:1});function Td(){}M=Td.prototype=new N,M.constructor=Td;function Ed(){}Ed.prototype=M,M.c8=(function(e){}),new F().i(Td,`com.raquo.laminar.modifiers.Modifier$$anon$1`,{da:1,a3:1});function Dd(e,t){if(this.im=null,this.im=e,t===null)throw new a_}M=Dd.prototype=new N,M.constructor=Dd;function Od(){}Od.prototype=M,M.c8=(function(e){var t=Qa(),n=(()=>{this.im.i(e)});if(Qa(),t.bL)n();else{t.bL=!0;try{n()}finally{t.bL=!1,Ja(t)}}}),new F().i(Dd,`com.raquo.laminar.modifiers.Modifier$$anon$2`,{db:1,a3:1});function kd(){}M=kd.prototype=new N,M.constructor=kd;function Ad(){}Ad.prototype=M,new F().i(kd,`com.raquo.laminar.modifiers.RenderableNode$$anon$1`,{de:1,dc:1});function jd(){}M=jd.prototype=new N,M.constructor=jd;function Md(){}Md.prototype=M,new F().i(jd,`com.raquo.laminar.modifiers.RenderableSeq$collectionSeqRenderable$`,{dg:1,df:1});var Nd;function Pd(){return Nd||=new jd,Nd}function Fd(e,t){if(this.io=null,this.io=e,t===null)throw new a_}M=Fd.prototype=new N,M.constructor=Fd;function Id(){}Id.prototype=M,M.mj=(function(e){return this.io.i(e)}),new F().i(Fd,`com.raquo.laminar.modifiers.RenderableText$$anon$1`,{dj:1,dh:1});function Ld(e){e.kq(new uo(new Og((()=>{throw lm(new um,`Attempting to use owner of unmounted element: `+$l(Vo().mA(e.dP(),(Vo(),$())),``,` > `,``))}))))}function Rd(e,t,n){return e.g7=t,e}function zd(){this.g7=null}M=zd.prototype=new N,M.constructor=zd;function Bd(){}Bd.prototype=M,M.hj=(function(){return this.g7}),M.fG=(function(e){var t=this.mm();return e.b9(new Z((e=>{e.c8(t)}))),t}),M.mm=(function(){return new Gy(this,Vo().mv(this))}),new F().i(zd,`com.raquo.laminar.tags.HtmlTag`,{aV:1,ax:1});function Vd(e,t){this.iv=null,this.iv=e}M=Vd.prototype=new N,M.constructor=Vd;function Hd(){}Hd.prototype=M,new F().i(Vd,`com.raquo.laminar.tags.SvgTag`,{dt:1,ax:1});function Ud(){}M=Ud.prototype=new N,M.constructor=Ud;function Wd(){}Wd.prototype=M,M.eW=(function(e){return e}),M.eV=(function(e){return e}),new F().i(Ud,`io.github.nguyenyou.webawesome.laminar.UnionAsStringCodec$$anon$1`,{dJ:1,ao:1});function Gd(e,t){return e.cJ=t,e.ed(),e}function Kd(){this.cJ=null,this.cI=null,this.cK=!1}M=Kd.prototype=new N,M.constructor=Kd;function qd(){}qd.prototype=M,M.o8=(function(){return this.cK||=(this.cI=new Sp(this.cJ,Ks().lU(),(Ks(),void 0)),!0),this.cI}),M.v=(function(e,t){var n=this.o8().fG(W().b(new(L.r()).C([])));return e.b9(new Z((e=>{e.i(this).c8(n)}))),t.b9(new Z((e=>{e.c8(n)}))),n});function Jd(e){return(32&e.fk)<<24>>24||(e.g8=new Sa(new Int32Array([1632,1776,1984,2406,2534,2662,2790,2918,3046,3174,3302,3430,3558,3664,3792,3872,4160,4240,6112,6160,6470,6608,6784,6800,6992,7088,7232,7248,42528,43216,43264,43472,43504,43600,44016,65296,66720,68912,69734,69872,69942,70096,70384,70736,70864,71248,71360,71472,71904,72016,72784,73040,73120,73552,92768,92864,93008,120782,120792,120802,120812,120822,123200,123632,124144,125264,130032])),e.fk=(32|e.fk)<<24>>24),e.g8}function Yd(e){return(32&e.fk)<<24>>24?e.g8:Jd(e)}function Xd(){this.g8=null,this.fk=0}M=Xd.prototype=new N,M.constructor=Xd;function Zd(){}Zd.prototype=M,M.mC=(function(e,t){if(e<256)var n=e>=48&&e<=57?-48+e|0:e>=65&&e<=90?-55+e|0:e>=97&&e<=122?-87+e|0:-1;else if(e>=65313&&e<=65338)var n=-65303+e|0;else if(e>=65345&&e<=65370)var n=-65335+e|0;else{var r=z().ml(Yd(this),e),i=r<0?-2-r|0:r;if(i<0)var n=-1;else var a=e-Yd(this).a[i]|0,n=a>9?-1:a}return n<t?n:-1}),new F().i(Xd,`java.lang.Character$`,{dQ:1,a:1});var Qd;function $d(){return Qd||=new Xd,Qd}function ef(e){throw new ab(`For input string: "`+e+`"`)}function tf(){}M=tf.prototype=new N,M.constructor=tf;function nf(){}nf.prototype=M,M.l6=(function(e,t){var n=e===null?0:e.length;(n===0||t<2||t>36)&&ef(e);var r=e.charCodeAt(0),i=r===45,a=i?2147483648:2147483647,o=i||r===43?1:0;o>=e.length&&ef(e);for(var s=0;o!==n;){var c=$d().mC(e.charCodeAt(o),t);s=s*t+c,(c===-1||s>a)&&ef(e),o=1+o|0}return i?-s|0:s|0}),M.dl=(function(e){var t=e-(1431655765&e>>1)|0,n=(858993459&t)+(858993459&t>>2)|0;return Math.imul(16843009,252645135&(n+(n>>4)|0))>>24}),new F().i(tf,`java.lang.Integer$`,{dW:1,a:1});var rf;function af(){return rf||=new tf,rf}function of(){}M=of.prototype=new N,M.constructor=of;function sf(){}sf.prototype=M;function cf(e){return e instanceof of||typeof e==`number`||e instanceof B}function lf(e,t,n,r,i){this.e1=null,this.ep=null,this.e2=null,this.e3=0,this.e0=0,this.e1=e,this.ep=t,this.e2=n,this.e3=r,this.e0=i}M=lf.prototype=new N,M.constructor=lf;function uf(){}uf.prototype=M,M.w=(function(e){return e instanceof lf&&this.e2===e.e2&&this.e3===e.e3&&this.e0===e.e0&&this.e1===e.e1&&this.ep===e.ep}),M.H=(function(){var e=``;return this.e1!==`<jscode>`&&(e=``+e+this.e1+`.`),e=``+e+this.ep,this.e2===null?e+=`(Unknown Source)`:(e=e+`(`+this.e2,this.e3>=0&&(e=e+`:`+this.e3,this.e0>=0&&(e=e+`:`+this.e0)),e+=`)`),e}),M.A=(function(){return ob(this.e1)^ob(this.ep)^ob(this.e2)^this.e3^this.e0});var df=new F().i(lf,`java.lang.StackTraceElement`,{b6:1,a:1});function ff(){}M=ff.prototype=new N,M.constructor=ff;function pf(){}pf.prototype=M,M.nw=(function(e,t,n){var r=t+n|0;if(t<0||r<t||r>e.a.length)throw new lb;for(var i=``,a=t;a!==r;)i+=``+ra(e.a[a]),a=1+a|0;return i}),new F().i(ff,`java.lang.String$`,{e7:1,a:1});var mf;function hf(){return mf||=new ff,mf}function gf(e,t,n,r,i){return e.j5=t,e.j6=i,i&&e.mT(),e}var _f=class extends Error{constructor(){super(),this.j5=null,this.j6=!1,this.j4=null,this.fm=null}f0(){return this.j5}mT(){var e=this instanceof Zx?this.bT:this;return this.j4=Object.prototype.toString.call(e)===`[object Error]`?e:Error.captureStackTrace===void 0||Object.isSealed(this)?Error():(Error.captureStackTrace(this),this),this}na(){return this.fm===null&&(this.j6?this.fm=Kc().mS(this.j4):this.fm=new(df.r()).C(0)),this.fm}H(){var e=Xi(this),t=this.f0();return t===null?e:e+`: `+t}A(){return ga.prototype.A.call(this)}w(e){return ga.prototype.w.call(this,e)}get message(){var e=this.f0();return e===null?``:e}get name(){return Xi(this)}toString(){return this.H()}};function vf(){this.c2=null,bf=this,this.c2=new u_}M=vf.prototype=new N,M.constructor=vf;function yf(){}yf.prototype=M,new F().i(vf,`scala.$less$colon$less$`,{el:1,a:1});var bf;function xf(){return bf||=new vf,bf}function Sf(e,t,n,r,i,a){for(var o=n,s=i,c=n+a|0;o<c;)W().gX(r,s,W().dK(t,o)),o=1+o|0,s=1+s|0}function Cf(){}M=Cf.prototype=new N,M.constructor=Cf;function wf(){}wf.prototype=M,M.kL=(function(e,t){var n=e.z();if(n>-1){for(var r=t.bb(n),i=e.k(),a=0;a<n;)W().gX(r,a,i.g()),a=1+a|0;return r}else{var o=null,s=t.aI(),c=s===Oa.l();o=[];for(var l=e.k();l.l();){var u=l.g(),d=c?pa(u):u===null?s.Q.z:u;o.push(d)}return(s===Ea.l()?pl.l():s===Bu.l()||s===fh.l()?I.l():s).Q.r().w(o)}}),M.eT=(function(e,t,n,r,i){var a=Yi(e);a.Q.Z&&Yi(n).Q.R(a.Q)?e.t(t,n,r,i):Sf(this,e,t,n,r,i)}),M.kG=(function(e,t){if(e===t)return!0;if(e.a.length!==t.a.length)return!1;for(var n=e.a.length,r=0;r<n;){if(!U().p(e.a[r],t.a[r]))return!1;r=1+r|0}return!0}),new F().i(Cf,`scala.Array$`,{en:1,a:1});var Tf;function Ef(){return Tf||=new Cf,Tf}function Df(){this.j8=null,kf=this,this.j8=new rd(el().j2)}M=Df.prototype=new N,M.constructor=Df;function Of(){}Of.prototype=M,M.nJ=(function(){return this.j8.gR}),new F().i(Df,`scala.Console$`,{ep:1,gp:1});var kf;function Af(){return kf||=new Df,kf}function jf(){}M=jf.prototype=new Il,M.constructor=jf;function Mf(){}Mf.prototype=M,M.ol=(function(e){return e===null?null:e.a.length===0?cx().jF:new IT(e)});function Nf(){}M=Nf.prototype=new N,M.constructor=Nf;function Pf(){}Pf.prototype=M,M.dJ=(function(e){return e===null?pb():new mb(e)}),new F().i(Nf,`scala.Option$`,{ev:1,a:1});var Ff;function If(){return Ff||=new Nf,Ff}function Lf(){}M=Lf.prototype=new xu,M.constructor=Lf;function Rf(){}Rf.prototype=M;function zf(e,t){if(t===e)e.aW(cy().kM(t));else for(var n=t.k();n.l();)e.aS(n.g());return e}function Bf(){this.lI=null,this.lR=null,this.lJ=null,this.lM=null,this.lN=null,this.lL=null,this.lK=null,this.lH=null,this.lS=null,this.lF=null,this.lQ=null,this.lG=null,this.lO=null,this.lP=null,Hf=this,this.lI=RS(),this.lR=bC(),this.lJ=HS(),this.lM=eC(),this.lN=iC(),this.lL=XS(),this.lK=KS(),this.lH=PS(),this.lS=wC(),this.lF=AS(),this.lQ=gC(),this.lG=gC(),this.lO=cC(),this.lP=fC()}M=Bf.prototype=new N,M.constructor=Bf;function Vf(){}Vf.prototype=M,M.k9=(function(e){return e===ka.l()?RS():e===Aa.l()?bC():e===Oa.l()?HS():e===ja.l()?eC():e===Ma.l()?iC():e===Na.l()?XS():e===Pa.l()?KS():e===Da.l()?PS():e===Ea.l()?wC():e===I.l()?gC():e===fh.l()?cC():e===Bu.l()?fC():new hx(e)}),new F().i(Bf,`scala.reflect.ClassTag$`,{gr:1,a:1});var Hf;function Uf(){return Hf||=new Bf,Hf}function Wf(){}M=Wf.prototype=new N,M.constructor=Wf;function Gf(){}Gf.prototype=M,M.H=(function(){return`<function0>`});function Kf(){}M=Kf.prototype=new N,M.constructor=Kf;function qf(){}qf.prototype=M,M.H=(function(){return`<function1>`});function Jf(){}M=Jf.prototype=new N,M.constructor=Jf;function Yf(){}Yf.prototype=M,M.H=(function(){return`<function2>`});function Xf(){}M=Xf.prototype=new N,M.constructor=Xf;function Zf(){}Zf.prototype=M,M.H=(function(){return`<function3>`});function Qf(e){this.fy=!1,this.fy=e}M=Qf.prototype=new N,M.constructor=Qf;function $f(){}$f.prototype=M,M.H=(function(){return``+this.fy}),new F().i(Qf,`scala.runtime.BooleanRef`,{gT:1,a:1});function ep(e){this.dH=0,this.dH=e}M=ep.prototype=new N,M.constructor=ep;function tp(){}tp.prototype=M,M.H=(function(){return``+this.dH}),new F().i(ep,`scala.runtime.IntRef`,{gV:1,a:1});function np(e){this.fz=null,this.fz=e}M=np.prototype=new N,M.constructor=np;function rp(){}rp.prototype=M,M.H=(function(){return``+this.fz}),new F().i(np,`scala.runtime.ObjectRef`,{gY:1,a:1});function ip(){this.ag=0,this.dh=0,this.jV=0,this.gS=0,op=this,this.ag=ob(`Seq`),this.dh=ob(`Map`),this.jV=ob(`Set`),this.gS=this.hu($(),this.dh)}M=ip.prototype=new od,M.constructor=ip;function ap(){}ap.prototype=M,M.c0=(function(e,t){return this.lo(G().P(e),G().P(t),-889275714)}),M.lf=(function(e){return zC(e)?this.nf(e,this.ag):e instanceof vT?this.nm(e,this.ag):this.nI(e,this.ag)}),M.ns=(function(e){if(e.c())return this.gS;var t=new sp,n=this.dh;return e.dL(t),n=this.e(n,t.fB),n=this.e(n,t.fC),n=this.cA(n,t.fD),this.C(n,t.fE)}),new F().i(ip,`scala.util.hashing.MurmurHash3$`,{hm:1,hl:1});var op;function K(){return op||=new ip,op}function sp(){this.fB=0,this.fC=0,this.fE=0,this.fD=0,this.fB=0,this.fC=0,this.fE=0,this.fD=1}M=sp.prototype=new N,M.constructor=sp;function cp(){}cp.prototype=M,M.H=(function(){return`<function2>`}),M.mi=(function(e,t){var n=K().c0(e,t);this.fB=this.fB+n|0,this.fC^=n,this.fD=Math.imul(this.fD,1|n),this.fE=1+this.fE|0}),M.cv=(function(e,t){this.mi(e,t)}),new F().i(sp,`scala.util.hashing.MurmurHash3$accum$1`,{hn:1,aA:1});var lp=class extends _f{};function up(){this.fQ=null,this.hw=null,this.hx=null,fp=this,this.fQ=cy().ka(W().b(new(V.r()).C([]))),this.hw=new Z((e=>{try{console.error(this.n6(e)+`
`+this.n9(e,`
`))}catch(e){var t=e instanceof _f?e:new Zx(e);console.error(`Error in AirstreamError.consoleErrorCallback:`),console.error(t)}})),this.hx=new Z((e=>{console.warn(`Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.`);var t=e;throw t instanceof Zx?t.bT:t})),this.nN(this.hw)}M=up.prototype=new N,M.constructor=up;function dp(){}dp.prototype=M,M.n6=(function(e){try{var t=e.f0()}catch{var t=`(Unable to get the message for this error - exception occurred in its getMessage)`}return Yi(e).hd()+`: `+t}),M.n9=(function(e,t){try{return $l(gm().ol(e.na()),``,t,``)}catch{return`(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)`}}),M.nN=(function(e){this.fQ.aS(e)}),M.f6=(function(e){for(var t=this.fQ.k();t.l();){var n=t.g();try{n.i(e)}catch(e){var r=e instanceof _f?e:new Zx(e),i=this.hx;if(n===null?i===null:n.w(i))throw r instanceof Zx?r.bT:r;console.warn(`Error processing an unhandled error callback:`),Xu().o1(0,new Og((e=>(()=>{throw e instanceof Zx?e.bT:e}))(r)))}}}),new F().i(up,`com.raquo.airstream.core.AirstreamError$`,{c3:1,gn:1,go:1});var fp;function pp(){return fp||=new up,fp}function q(e,t,n){return new Fh(n.mj(t))}function mp(e,t,n,r){return new Dd(new Z((e=>{(qo(),new Ho(t,null,null)).b9(new Z((e=>(t=>{n.i(t).c8(e)}))(e)))})),ks())}function hp(e,t,n){return new Dd(new Z((e=>{(qo(),new Ho(t,null,null)).b9(new Z((e=>(t=>{Bs().eJ(e,t,void 0)}))(e)))})),ks())}function gp(e,t){this.ii=null,this.g3=null,this.ii=e,this.g3=t}M=gp.prototype=new N,M.constructor=gp;function _p(){}_p.prototype=M,M.c8=(function(e){this.g3.c()||zg(e,this.ii,null,this.g3,$())}),new F().i(gp,`com.raquo.laminar.modifiers.CompositeKeySetter`,{d7:1,a3:1,aS:1});function vp(e,t,n){this.ik=null,this.il=null,this.ij=null,this.ik=e,this.il=t,this.ij=n}M=vp.prototype=new N,M.constructor=vp;function yp(){}yp.prototype=M,M.c8=(function(e){this.ij.mh(e,this.ik,this.il)}),new F().i(vp,`com.raquo.laminar.modifiers.KeySetter`,{d8:1,a3:1,aS:1});function bp(e,t){if(this.g5=null,this.iq=null,this.ir=null,this.iq=t,Ld(this),e===null)throw lm(new um,`Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load`);if(!Vo().nj(e,document))throw lm(new um,`Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering`);this.ir=e,this.nu()}M=bp.prototype=new N,M.constructor=bp;function xp(){}xp.prototype=M,M.fJ=(function(){return this.g5}),M.kq=(function(e){this.g5=e}),M.nu=(function(){return this.g5.jX(),Bs().eJ(this,this.iq,void 0)}),M.dP=(function(){return this.ir}),new F().i(bp,`com.raquo.laminar.nodes.RootNode`,{dn:1,aw:1,aU:1});function Sp(e,t,n){this.g7=null,this.iu=null,this.iu=e,Rd(this,e,!1)}M=Sp.prototype=new Bd,M.constructor=Sp;function Cp(){}Cp.prototype=M,M.hj=(function(){return this.iu}),new F().i(Sp,`com.raquo.laminar.tags.CustomHtmlTag`,{dr:1,aV:1,ax:1});function wp(){this.cJ=null,this.cI=null,this.cK=!1,Gd(this,`wa-breadcrumb`)}M=wp.prototype=new qd,M.constructor=wp;function Tp(){}Tp.prototype=M,M.ed=(function(){return Qt}),new F().i(wp,`io.github.nguyenyou.webawesome.laminar.Breadcrumb$`,{dx:1,ae:1,ad:1});var Ep;function Dp(){return Ep||=new wp,Ep}function Op(){this.cJ=null,this.cI=null,this.cK=!1,this.iy=null,this.iz=!1,Gd(this,`wa-breadcrumb-item`)}M=Op.prototype=new qd,M.constructor=Op;function kp(){}kp.prototype=M,M.fL=(function(){return this.iz||=(this.iy=(X(),bd(new xd,`href`,ts().dy)),!0),this.iy}),M.ed=(function(){return ct}),new F().i(Op,`io.github.nguyenyou.webawesome.laminar.BreadcrumbItem$`,{dz:1,ae:1,ad:1});var Ap;function jp(){return Ap||=new Op,Ap}function Mp(){this.cJ=null,this.cI=null,this.cK=!1,this.iE=null,this.iF=!1,this.iI=null,this.iJ=!1,this.iG=null,this.iH=!1,Gd(this,`wa-button`)}M=Mp.prototype=new qd,M.constructor=Mp;function Np(){}Np.prototype=M,M.k4=(function(){return this.iF||=(this.iE=qp(),!0),this.iE}),M.lj=(function(){return this.iJ||=(this.iI=zp(),!0),this.iI}),M.l7=(function(){return this.iH||=(this.iG=(X(),bd(new xd,`pill`,ts().fX)),!0),this.iG}),M.ed=(function(){return Sn}),new F().i(Mp,`io.github.nguyenyou.webawesome.laminar.Button$`,{dB:1,ae:1,ad:1});var Pp;function Fp(){return Pp||=new Mp,Pp}function Ip(){this.cH=null,this.dW=null,this.iK=null,this.iL=!1,bd(this,`size`,new Ud)}M=Ip.prototype=new Sd,M.constructor=Ip;function Lp(){}Lp.prototype=M,M.lk=(function(){return this.iL||=(this.iK=zp().J(`small`),!0),this.iK}),new F().i(Ip,`io.github.nguyenyou.webawesome.laminar.CommonKeys$ComponentSize$`,{dC:1,ar:1,W:1});var Rp;function zp(){return Rp||=new Ip,Rp}function Bp(){this.cH=null,this.dW=null,bd(this,`type`,new Ud)}M=Bp.prototype=new Sd,M.constructor=Bp;function Vp(){}Vp.prototype=M,new F().i(Bp,`io.github.nguyenyou.webawesome.laminar.CommonKeys$DropdownItemElementType$`,{dD:1,ar:1,W:1});var Hp;function Up(){return Hp||=new Bp,Hp}function Wp(){this.cH=null,this.dW=null,this.iM=null,this.iN=!1,bd(this,`appearance`,new Ud)}M=Wp.prototype=new Sd,M.constructor=Wp;function Gp(){}Gp.prototype=M,M.kH=(function(){return this.iN||=(this.iM=qp().J(`filled`),!0),this.iM}),new F().i(Wp,`io.github.nguyenyou.webawesome.laminar.CommonKeys$ExtendedAppearance$`,{dE:1,ar:1,W:1});var Kp;function qp(){return Kp||=new Wp,Kp}function Jp(){this.cJ=null,this.cI=null,this.cK=!1,Gd(this,`wa-dropdown`)}M=Jp.prototype=new qd,M.constructor=Jp;function Yp(){}Yp.prototype=M,M.ed=(function(){return Gi}),new F().i(Jp,`io.github.nguyenyou.webawesome.laminar.Dropdown$`,{dF:1,ae:1,ad:1});var Xp;function Zp(){return Xp||=new Jp,Xp}function Qp(){this.cJ=null,this.cI=null,this.cK=!1,this.iS=null,this.iT=!1,this.iQ=null,this.iR=!1,Gd(this,`wa-dropdown-item`)}M=Qp.prototype=new qd,M.constructor=Qp;function $p(){}$p.prototype=M,M.ej=(function(){return this.iT||=(this.iS=Up(),!0),this.iS}),M.kn=(function(){return this.iR||=(this.iQ=(X(),bd(new xd,`checked`,ts().fX)),!0),this.iQ}),M.ed=(function(){return En}),new F().i(Qp,`io.github.nguyenyou.webawesome.laminar.DropdownItem$`,{dH:1,ae:1,ad:1});var em;function tm(){return em||=new Qp,em}function nm(){this.cJ=null,this.cI=null,this.cK=!1,this.iW=null,this.iX=!1,this.iY=null,this.iZ=!1,this.iU=null,this.iV=!1,Gd(this,`wa-icon`)}M=nm.prototype=new qd,M.constructor=nm;function rm(){}rm.prototype=M,M.dN=(function(){return this.iX||=(this.iW=(X(),bd(new xd,`name`,ts().dy)),!0),this.iW}),M.f8=(function(){return this.iZ||=(this.iY=(X(),bd(new xd,`variant`,ts().dy)),!0),this.iY}),M.kW=(function(){return this.iV||=(this.iU=(X(),bd(new xd,`label`,ts().dy)),!0),this.iU}),M.ed=(function(){return Ki}),new F().i(nm,`io.github.nguyenyou.webawesome.laminar.Icon$`,{dI:1,ae:1,ad:1});var im;function am(){return im||=new nm,im}function om(e){if(e.Q.Z)return e.Q.Q().hd()+`[]`;for(var t=e.Q.N,n=-1+t.length|0;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0;if(n>=0)var r=n,i=t.charCodeAt(r),a=i>=48&&i<=57;else var a=!1;if(a){for(n=-1+n|0;;){if(n>=0)var o=n,s=t.charCodeAt(o),c=s>=48&&s<=57;else var c=!1;if(c)n=-1+n|0;else break}for(;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0}for(;;){if(n>=0)var l=n,u=t.charCodeAt(l),d=u!==46&&u!==36;else var d=!1;if(d)n=-1+n|0;else break}var f=1+n|0;return t.substring(f)}function sm(e){this.g9=null,this.Q=e}M=sm.prototype=new N,M.constructor=sm;function cm(){}cm.prototype=M,M.H=(function(){return(this.Q.Y?`interface `:this.Q.X?``:`class `)+this.Q.N}),M.hd=(function(){return this.g9===null&&(this.g9=om(this)),this.g9}),new F().i(sm,`java.lang.Class`,{dR:1,a:1,X:1});function lm(e,t){return gf(e,t,null,!0,!0),e}var um=class extends _f{};new F().i(um,`java.lang.Exception`,{C:1,w:1,a:1});function dm(){}M=dm.prototype=new N,M.constructor=dm;function fm(){}fm.prototype=M;function pm(){this.lE=null,hm=this,this.lE=th()}M=pm.prototype=new Mf,M.constructor=pm;function mm(){}mm.prototype=M,M.nS=(function(e){if(!e)throw Xg(new Qg,`requirement failed`)}),new F().i(pm,`scala.Predef$`,{ey:1,er:1,es:1});var hm;function gm(){return hm||=new pm,hm}function _m(e,t){switch(t){case 0:return e.b3();case 1:return e.b1();default:throw e_(new t_,t+` is out of bounds (min 0, max 1)`)}}function vm(e,t){return e.es=t,e}function ym(){this.es=null}M=ym.prototype=new N,M.constructor=ym;function bm(){}bm.prototype=M,M.ax=(function(e){return this.es.h5(e,AS())}),M.aT=(function(){return this.es.fN(AS())}),M.cw=(function(e){return this.es.h5(e,AS())});function xm(e,t){return e.fo=t,e}function Sm(){this.fo=null}M=Sm.prototype=new N,M.constructor=Sm;function Cm(){}Cm.prototype=M,M.ax=(function(e){return this.fo.ax(e)}),M.aT=(function(){return this.fo.aT()});function wm(e,t){if(t<0)return 1;var n=e.z();if(n>=0)return n===t?0:n<t?-1:1;for(var r=0,i=e.k();i.l();){if(r===t)return 1;i.g(),r=1+r|0}return r-t|0}function Tm(e,t){return new I_(e).gY(t)}function Em(e,t,n){var r=t>0?t:0,i=n<0?-1:n<=r?0:n-r|0;return i===0?J().K:new B_(e,r,i)}function Dm(e,t){for(var n=t.k();e.l()&&n.l();)if(!U().p(e.g(),n.g()))return!1;return e.l()===n.l()}function Om(){this.K=null,Am=this,this.K=new E_}M=Om.prototype=new N,M.constructor=Om;function km(){}km.prototype=M,M.aT=(function(){return new Tb}),M.ax=(function(e){return e.k()}),new F().i(Om,`scala.collection.Iterator$`,{eS:1,J:1,a:1});var Am;function J(){return Am||=new Om,Am}function jm(e,t){return e.gt=t,e}function Mm(){this.gt=null}M=Mm.prototype=new N,M.constructor=Mm;function Nm(){}Nm.prototype=M,M.ax=(function(e){return this.gt.ax(e)});function Pm(){}M=Pm.prototype=new N,M.constructor=Pm;function Fm(){}Fm.prototype=M,M.kN=(function(e){return Hx(e)?e:T_(e)?new DC(new sh((e=>(()=>e.k()))(e))):UC(new WC,Sg().h7(e))}),M.aT=(function(){return new Cg((ny(),new ry),new Y((e=>Lm().kN(e))))}),M.ax=(function(e){return this.kN(e)}),new F().i(Pm,`scala.collection.View$`,{f5:1,J:1,a:1});var Im;function Lm(){return Im||=new Pm,Im}function Rm(e,t,n,r,i,a){this.W=0,this.ad=0,this.ai=null,this.bf=null,this.aK=0,this.b4=0,this.W=e,this.ad=t,this.ai=n,this.bf=r,this.aK=i,this.b4=a}M=Rm.prototype=new Rf,M.constructor=Rm;function zm(){}zm.prototype=M,M.aJ=(function(){return this.aK}),M.dn=(function(){return this.b4}),M.dq=(function(e){return this.ai.a[e<<1]}),M.cz=(function(e){return this.ai.a[1+(e<<1)|0]}),M.kS=(function(e){return new Q(this.ai.a[e<<1],this.ai.a[1+(e<<1)|0])}),M.eZ=(function(e){return this.bf.a[e]}),M.cy=(function(e){return this.ai.a[(-1+this.ai.a.length|0)-e|0]}),M.gV=(function(e,t,n,r){var i=Eu().dM(n,r),a=Eu().dm(i);if((this.W&a)!==0){var o=Eu().cb(this.W,i,a);if(U().p(e,this.dq(o)))return this.cz(o);throw new l_(`key not found: `+e)}else if((this.ad&a)!==0)return this.cy(Eu().cb(this.ad,i,a)).gV(e,t,n,5+r|0);else throw new l_(`key not found: `+e)}),M.hb=(function(e,t,n,r,i){var a=Eu().dM(n,r),o=Eu().dm(a);if((this.W&o)!==0){var s=Eu().cb(this.W,a,o);return U().p(e,this.dq(s))?this.cz(s):i.ah()}else return(this.ad&o)===0?i.ah():this.cy(Eu().cb(this.ad,a,o)).hb(e,t,n,5+r|0,i)}),M.gZ=(function(e,t,n,r){var i=Eu().dM(n,r),a=Eu().dm(i);if((this.W&a)!==0){var o=Eu().cb(this.W,i,a);return this.bf.a[o]===t&&U().p(e,this.dq(o))}else return(this.ad&a)!==0&&this.cy(Eu().cb(this.ad,i,a)).gZ(e,t,n,5+r|0)}),M.lp=(function(e,t,n,r,i,a){var o=Eu().dM(r,i),s=Eu().dm(o);if((this.W&s)!==0){var c=Eu().cb(this.W,o,s),l=this.dq(c),u=this.eZ(c);if(u===n&&U().p(l,e))if(a){var d=this.cz(c);return Object.is(l,e)&&Object.is(d,t)?this:this.mu(s,e,t)}else return this;else{var f=this.cz(c),p=Jl().bW(u);return this.ms(s,p,this.hi(l,f,u,p,e,t,n,r,5+i|0))}}else if((this.ad&s)!==0){var m=Eu().cb(this.ad,o,s),h=this.cy(m),g=h.lq(e,t,n,r,5+i|0,a);return g===h?this:this.mt(s,h,g)}else return this.mr(s,e,n,r,t)}),M.hi=(function(e,t,n,r,i,a,o,s,c){if(c>=32)return new Bm(n,r,Uv().h8(new kw([new Q(e,t),new Q(i,a)])));var l=Eu().dM(r,c),u=Eu().dM(s,c),d=r+s|0;if(l!==u){var f=Eu().dm(l)|Eu().dm(u);return l<u?new Rm(f,0,new P([e,t,i,a]),new Sa(new Int32Array([n,o])),2,d):new Rm(f,0,new P([i,a,e,t]),new Sa(new Int32Array([o,n])),2,d)}else{var p=Eu().dm(l),m=this.hi(e,t,n,r,i,a,o,s,5+c|0);return new Rm(0,p,new P([m]),Pl().gg,m.aJ(),m.dn())}}),M.he=(function(){return this.ad!==0}),M.hl=(function(){return af().dl(this.ad)}),M.fK=(function(){return this.W!==0}),M.ho=(function(){return af().dl(this.W)}),M.eU=(function(e){return af().dl(this.W&(-1+e|0))}),M.hm=(function(e){return af().dl(this.ad&(-1+e|0))}),M.mu=(function(e,t,n){var r=this.eU(e)<<1,i=this.ai,a=new P(i.a.length),o=i.a.length;return i.t(0,a,0,o),a.a[1+r|0]=n,new Rm(this.W,this.ad,a,this.bf,this.aK,this.b4)}),M.mt=(function(e,t,n){var r=(-1+this.ai.a.length|0)-this.hm(e)|0,i=this.ai,a=new P(i.a.length),o=i.a.length;return i.t(0,a,0,o),a.a[r]=n,new Rm(this.W,this.ad,a,this.bf,(this.aK-t.aJ()|0)+n.aJ()|0,(this.b4-t.dn()|0)+n.dn()|0)}),M.mr=(function(e,t,n,r,i){var a=this.eU(e),o=a<<1,s=this.ai,c=new P(2+s.a.length|0);s.t(0,c,0,o),c.a[o]=t,c.a[1+o|0]=i;var l=2+o|0,u=s.a.length-o|0;s.t(o,c,l,u);var d=this.nh(this.bf,a,n);return new Rm(this.W|e,this.ad,c,d,1+this.aK|0,this.b4+r|0)}),M.nt=(function(e,t,n){var r=this.eU(e),i=r<<1,a=(-2+this.ai.a.length|0)-this.hm(e)|0,o=this.ai,s=new P(-1+o.a.length|0);o.t(0,s,0,i);var c=2+i|0,l=a-i|0;o.t(c,s,i,l),s.a[a]=n;var u=2+a|0,d=1+a|0,f=-2+(o.a.length-a|0)|0;o.t(u,s,d,f);var p=this.l9(this.bf,r);return this.W^=e,this.ad|=e,this.ai=s,this.bf=p,this.aK=(-1+this.aK|0)+n.aJ()|0,this.b4=(this.b4-t|0)+n.dn()|0,this}),M.ms=(function(e,t,n){var r=this.eU(e),i=r<<1,a=(-2+this.ai.a.length|0)-this.hm(e)|0,o=this.ai,s=new P(-1+o.a.length|0);o.t(0,s,0,i);var c=2+i|0,l=a-i|0;o.t(c,s,i,l),s.a[a]=n;var u=2+a|0,d=1+a|0,f=-2+(o.a.length-a|0)|0;o.t(u,s,d,f);var p=this.l9(this.bf,r);return new Rm(this.W^e,this.ad|e,s,p,(-1+this.aK|0)+n.aJ()|0,(this.b4-t|0)+n.dn()|0)}),M.dL=(function(e){for(var t=af().dl(this.W),n=0;n<t;)e.cv(this.dq(n),this.cz(n)),n=1+n|0;for(var r=af().dl(this.ad),i=0;i<r;)this.cy(i).dL(e),i=1+i|0}),M.w=(function(e){if(e instanceof Rm){if(this===e)return!0;if(this.b4===e.b4&&this.ad===e.ad&&this.W===e.W&&this.aK===e.aK&&z().h1(this.bf,e.bf)){var t=this.ai,n=e.ai,r=this.ai.a.length;if(t===n)return!0;for(var i=!0,a=0;i&&a<r;)i=U().p(t.a[a],n.a[a]),a=1+a|0;return i}else return!1}else return!1}),M.A=(function(){throw new s_(`Trie nodes do not support hashing.`)}),M.kr=(function(){for(var e=this.ai.f(),t=e.a.length,n=af().dl(this.W)<<1;n<t;)e.a[n]=e.a[n].ks(),n=1+n|0;return new Rm(this.W,this.ad,e,this.bf.f(),this.aK,this.b4)}),M.ks=(function(){return this.kr()}),M.lq=(function(e,t,n,r,i,a){return this.lp(e,t,n,r,i,a)}),M.ha=(function(e){return this.cy(e)}),new F().i(Rm,`scala.collection.immutable.BitmapIndexedMapNode`,{bx:1,bH:1,aJ:1});function Bm(e,t,n){this.gy=0,this.cV=0,this.ae=null,this.gy=e,this.cV=t,this.ae=n,gm().nS(this.ae.q()>=2)}M=Bm.prototype=new Rf,M.constructor=Bm;function Vm(){}Vm.prototype=M,M.eg=(function(e){for(var t=this.ae.k(),n=0;t.l();){if(U().p(t.g().b3(),e))return n;n=1+n|0}return-1}),M.aJ=(function(){return this.ae.q()}),M.gV=(function(e,t,n,r){var i=this.n4(e,t,n,r);if(i.c())throw J().K.g(),new Yg;return i.aH()}),M.n4=(function(e,t,n,r){if(this.cV===n){var i=this.eg(e);return i>=0?new mb(this.ae.u(i).b1()):pb()}else return pb()}),M.hb=(function(e,t,n,r,i){if(this.cV===n){var a=this.eg(e);return a===-1?i.ah():this.ae.u(a).b1()}else return i.ah()}),M.gZ=(function(e,t,n,r){return this.cV===n&&this.eg(e)>=0}),M.lq=(function(e,t,n,r,i,a){var o=this.eg(e);return o>=0?a?Object.is(this.ae.u(o).b1(),t)?this:new Bm(n,r,this.ae.dt(o,new Q(e,t))):this:new Bm(n,r,this.ae.dj(new Q(e,t)))}),M.he=(function(){return!1}),M.hl=(function(){return 0}),M.cy=(function(e){throw e_(new t_,`No sub-nodes present in hash-collision leaf node.`)}),M.fK=(function(){return!0}),M.ho=(function(){return this.ae.q()}),M.dq=(function(e){return this.ae.u(e).b3()}),M.cz=(function(e){return this.ae.u(e).b1()}),M.kS=(function(e){return this.ae.u(e)}),M.eZ=(function(e){return this.gy}),M.dL=(function(e){this.ae.b9(new Y((t=>{if(t!==null){var n=t.b3(),r=t.b1();return e.cv(n,r)}else throw new g_(t)})))}),M.w=(function(e){if(e instanceof Bm){if(this===e)return!0;if(this.cV===e.cV&&this.ae.q()===e.ae.q()){for(var t=this.ae.k();t.l();){var n=t.g();if(n===null)throw new g_(n);var r=n.b3(),i=n.b1(),a=e.eg(r);if(a<0||!U().p(i,e.ae.u(a).b1()))return!1}return!0}else return!1}else return!1}),M.A=(function(){throw new s_(`Trie nodes do not support hashing.`)}),M.dn=(function(){return Math.imul(this.ae.q(),this.cV)}),M.ks=(function(){return new Bm(this.gy,this.cV,this.ae)}),M.ha=(function(e){return this.cy(e)}),new F().i(Bm,`scala.collection.immutable.HashCollisionMapNode`,{bz:1,bH:1,aJ:1});function Hm(){this.gz=null,Wm=this,this.gz=new jw(vu().jw)}M=Hm.prototype=new N,M.constructor=Hm;function Um(){}Um.prototype=M,M.mZ=(function(e){return e instanceof jw?e:new vv().gU(e).hs()}),M.ax=(function(e){return this.mZ(e)}),new F().i(Hm,`scala.collection.immutable.HashMap$`,{fc:1,aD:1,a:1});var Wm;function Gm(){return Wm||=new Hm,Wm}function Km(e,t){this.jt=null,this.ju=null,this.jt=e,this.ju=t}M=Km.prototype=new N,M.constructor=Km;function qm(){}qm.prototype=M,M.x=(function(){return this.jt}),M.aD=(function(){return this.ju}),new F().i(Km,`scala.collection.immutable.LazyList$State$Cons`,{fm:1,bC:1,a:1});function Jm(){}M=Jm.prototype=new N,M.constructor=Jm;function Ym(){}Ym.prototype=M,M.hf=(function(){throw new l_(`head of empty lazy list`)}),M.aD=(function(){throw new s_(`tail of empty lazy list`)}),M.x=(function(){this.hf()}),new F().i(Jm,`scala.collection.immutable.LazyList$State$Empty$`,{fn:1,bC:1,a:1});var Xm;function Zm(){return Xm||=new Jm,Xm}function Qm(){}M=Qm.prototype=new N,M.constructor=Qm;function $m(){}$m.prototype=M,M.n1=(function(e){return zb(e)&&e.c()?pw():e instanceof jw||e instanceof mw||e instanceof gw||e instanceof vw||e instanceof bw?e:new Lv().jY(e).la()}),M.ax=(function(e){return this.n1(e)}),new F().i(Qm,`scala.collection.immutable.Map$`,{fq:1,aD:1,a:1});var eh;function th(){return eh||=new Qm,eh}function nh(e,t,n){var r=t.z();if(r!==-1){var i=r+n|0;e.aY(i<0?0:i)}}function rh(){}M=rh.prototype=new N,M.constructor=rh;function ih(){}ih.prototype=M,M.n2=(function(e){var t=e.z();return zw(new Vw,t>0?na((1+t|0)/.75):16,.75).k1(e)}),M.aT=(function(){return new ly(16,.75)}),M.ax=(function(e){return this.n2(e)}),new F().i(rh,`scala.collection.mutable.HashSet$`,{g8:1,J:1,a:1});var ah;function oh(){return ah||=new rh,ah}function sh(e){this.jM=null,this.jM=e}M=sh.prototype=new Gf,M.constructor=sh;function ch(){}ch.prototype=M,M.ah=(function(){return(0,this.jM)()}),new F().i(sh,`scala.runtime.AbstractFunction0.$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855`,{gP:1,bX:1,b9:1});function Y(e){this.jN=null,this.jN=e}M=Y.prototype=new qf,M.constructor=Y;function lh(){}lh.prototype=M,M.i=(function(e){return(0,this.jN)(e)}),new F().i(Y,`scala.runtime.AbstractFunction1.$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28`,{gQ:1,bY:1,f:1});function uh(e){this.jO=null,this.jO=e}M=uh.prototype=new Yf,M.constructor=uh;function dh(){}dh.prototype=M,M.cv=(function(e,t){return(0,this.jO)(e,t)}),new F().i(uh,`scala.runtime.AbstractFunction2.$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc`,{gR:1,bZ:1,aA:1});var fh=new F().i(0,`scala.runtime.Nothing$`,{gW:1,w:1,a:1});function ph(){}M=ph.prototype=new N,M.constructor=ph;function mh(){}mh.prototype=M,M.n3=(function(e){return(t=>e.i(t))}),new F().i(ph,`scala.scalajs.js.Any$`,{h2:1,h3:1,h4:1});var hh;function gh(){return hh||=new ph,hh}function _h(){}M=_h.prototype=new Gf,M.constructor=_h;function vh(){}vh.prototype=M;function yh(){}M=yh.prototype=new qf,M.constructor=yh;function bh(){}bh.prototype=M;function xh(){}M=xh.prototype=new Yf,M.constructor=xh;function Sh(){}Sh.prototype=M;function Ch(){}M=Ch.prototype=new Zf,M.constructor=Ch;function wh(){}wh.prototype=M;function Th(e,t,n,r){if(this.hy=null,r===null)throw new a_;this.hy=void 0}M=Th.prototype=new N,M.constructor=Th;function Eh(){}Eh.prototype=M,M.H=(function(){return Ia(this)}),new F().i(Th,`com.raquo.airstream.core.Observer$$anon$8`,{c7:1,c8:1,c4:1,c5:1});function Dh(e){if(this.hK=null,this.hL=!1,this.ls=null,e===null)throw new a_;is(this)}M=Dh.prototype=new N,M.constructor=Dh;function Oh(){}Oh.prototype=M,M.o7=(function(){return this.hL||=(this.hK=new Vd(`svg`,!1),!0),this.hK}),new F().i(Dh,`com.raquo.laminar.api.Laminar$svg$`,{cr:1,cR:1,cA:1,cC:1});function kh(){this.r=null,jh=this,this.r=new KC}M=kh.prototype=new N,M.constructor=kh;function Ah(){}Ah.prototype=M,new F().i(kh,`com.raquo.laminar.api.package$`,{cu:1,aQ:1,aR:1,aP:1});var jh;function X(){return jh||=new kh,jh}function Mh(e,t,n){return e.dX=t,e.dY=n,e}function Nh(){this.dX=null,this.dY=null}M=Nh.prototype=new ys,M.constructor=Nh;function Ph(){}Ph.prototype=M,M.J=(function(e){return new vp(this,$i(e),new Ng(((e,t,n)=>{Vo().lh(e,t,n)})))});function Fh(e){this.it=null,this.g6=null,this.it=pb(),this.g6=Vo().mx(e)}M=Fh.prototype=new N,M.constructor=Fh;function Ih(){}Ih.prototype=M,M.li=(function(e){this.it=e}),M.lr=(function(e){}),M.c8=(function(e){Bs().eJ(e,this,void 0)}),M.oa=(function(){return this.g6.data}),M.dP=(function(){return this.g6}),new F().i(Fh,`com.raquo.laminar.nodes.TextNode`,{dq:1,aw:1,a3:1,aT:1});function Lh(){}M=Lh.prototype=new N,M.constructor=Lh;function Rh(){}Rh.prototype=M;function zh(e,t){return e===t}function Bh(e){return e?1231:1237}var Vh=new F().i(0,`java.lang.Boolean`,{dO:1,a:1,a1:1,X:1},(e=>typeof e==`boolean`));function Hh(e){return e}function Uh(e,t){return t instanceof Ji&&e===t.c}var Wh=new F().i(0,`java.lang.Character`,{b1:1,a:1,a1:1,X:1},(e=>e instanceof Ji));function Gh(e,t){return gf(e,t,null,!0,!0),e}var Kh=class extends um{};new F().i(Kh,`java.lang.RuntimeException`,{D:1,C:1,w:1,a:1});function qh(e){return e.n=``,e}function Jh(e,t){if(qh(e),t===null)throw new a_;return e.n=t,e}function Yh(){this.n=null}M=Yh.prototype=new N,M.constructor=Yh;function Xh(){}Xh.prototype=M,M.k5=(function(e){var t=hf().nw(e,0,e.a.length);return this.n=``+this.n+t,this}),M.H=(function(){return this.n}),M.q=(function(){return this.n.length}),M.kl=(function(e){return this.n.charCodeAt(e)}),new F().i(Yh,`java.lang.StringBuilder`,{e8:1,ay:1,aZ:1,a:1});function Zh(){}M=Zh.prototype=new fm,M.constructor=Zh;function Qh(){}Qh.prototype=M;function $h(){}M=$h.prototype=new N,M.constructor=$h;function eg(){}eg.prototype=M,M.H=(function(){return`<function1>`}),M.gW=(function(e){throw new g_(e)}),M.i=(function(e){this.gW(e)}),new F().i($h,`scala.PartialFunction$$anon$1`,{ex:1,j:1,f:1,a:1});function tg(){}M=tg.prototype=new N,M.constructor=tg;function ng(){}ng.prototype=M,M.k=(function(){return this}),M.gY=(function(e){return Tm(this,e)}),M.dp=(function(e){return this.f7(e,-1)}),M.f7=(function(e,t){return Em(this,e,t)}),M.H=(function(){return`<iterator>`}),M.by=(function(e,t,n){return Ql(this,e,t,n)}),M.di=(function(e,t,n,r){return eu(this,e,t,n,r)}),M.z=(function(){return-1});function rg(){this.gt=null,this.jn=null,this.jo=null,jm(this,th()),ag=this,this.jn=ha(new ga),this.jo=new sh((()=>og().jn))}M=rg.prototype=new Nm,M.constructor=rg;function ig(){}ig.prototype=M,new F().i(rg,`scala.collection.Map$`,{f0:1,f1:1,aD:1,a:1});var ag;function og(){return ag||=new rg,ag}function sg(e,t){return e.e4=t,e}function cg(){this.e4=null}M=cg.prototype=new N,M.constructor=cg;function lg(){}lg.prototype=M,M.ka=(function(e){return this.e4.cw(e)}),M.kM=(function(e){return this.e4.ax(e)}),M.aT=(function(){return this.e4.aT()}),M.ax=(function(e){return this.kM(e)}),M.cw=(function(e){return this.ka(e)});function ug(e){return e.ca(new Y((e=>e)))}function dg(e,t){return e.eX(new kC(e,t))}function fg(e){return e.bn(0)===0}function pg(e,t){var n=e.z();if(n!==-1)var r=t.z(),i=r!==-1&&n!==r;else var i=!1;return i?!1:Dm(e.k(),t)}function mg(e,t){for(var n=e.ba().aT(),r=e.k();r.l();)n.aS(t.i(r.g()));return n.aX()}function hg(){this.fo=null,xm(this,Dv())}M=hg.prototype=new Cm,M.constructor=hg;function gg(){}gg.prototype=M,M.n0=(function(e){return zb(e)?e:Sm.prototype.ax.call(this,e)}),M.ax=(function(e){return this.n0(e)}),new F().i(hg,`scala.collection.immutable.Iterable$`,{fh:1,eR:1,J:1,a:1});var _g;function vg(){return _g||=new hg,_g}function yg(){this.fu=null,xg=this,this.fu=new Dw(new sh((()=>Zm()))).kK()}M=yg.prototype=new N,M.constructor=yg;function bg(){}bg.prototype=M,M.cw=(function(e){return this.h7(e)}),M.nW=(function(e,t){return new Dw(new sh(((e,t)=>(()=>{for(var n=e.fz,r=t.dH;r>0&&!n.c();)n=n.D().aD(),e.fz=n,r=-1+r|0,t.dH=r;return n.D()}))(new np(e),new ep(t))))}),M.h7=(function(e){return e instanceof Dw?e:e.z()===0?this.fu:new Dw(new sh((()=>Sg().lc(e.k()))))}),M.ld=(function(e,t){return e.l()?new Km(e.g(),new Dw(new sh((()=>Sg().ld(e,t))))):t.ah()}),M.lc=(function(e){return e.l()?new Km(e.g(),new Dw(new sh((()=>Sg().lc(e))))):Zm()}),M.aT=(function(){return new bv}),M.ax=(function(e){return this.h7(e)}),new F().i(yg,`scala.collection.immutable.LazyList$`,{fi:1,a0:1,J:1,a:1});var xg;function Sg(){return xg||=new yg,xg}function Cg(e,t){this.eD=null,this.jG=null,this.eD=e,this.jG=t}M=Cg.prototype=new N,M.constructor=Cg;function wg(){}wg.prototype=M,M.ma=(function(e){return this.eD.aS(e),this}),M.m1=(function(e){return this.eD.aW(e),this}),M.aY=(function(e){this.eD.aY(e)}),M.aX=(function(){return this.jG.i(this.eD.aX())}),M.aW=(function(e){return this.m1(e)}),M.aS=(function(e){return this.ma(e)}),new F().i(Cg,`scala.collection.mutable.Builder$$anon$1`,{g5:1,L:1,H:1,F:1});function Tg(e,t){return e.dd=t,e}function Eg(){this.dd=null}M=Eg.prototype=new N,M.constructor=Eg;function Dg(){}Dg.prototype=M,M.aY=(function(e){}),M.mb=(function(e){return this.dd.aS(e),this}),M.m2=(function(e){return this.dd.aW(e),this}),M.aW=(function(e){return this.m2(e)}),M.aS=(function(e){return this.mb(e)}),M.aX=(function(){return this.dd}),new F().i(Eg,`scala.collection.mutable.GrowableBuilder`,{aM:1,L:1,H:1,F:1});function Og(e){this.jR=null,this.jR=e}M=Og.prototype=new vh,M.constructor=Og;function kg(){}kg.prototype=M,M.ah=(function(){return(0,this.jR)()}),new F().i(Og,`scala.scalajs.runtime.AnonFunction0.$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1`,{h9:1,h8:1,bX:1,b9:1});function Z(e){this.jS=null,this.jS=e}M=Z.prototype=new bh,M.constructor=Z;function Ag(){}Ag.prototype=M,M.i=(function(e){return(0,this.jS)(e)}),new F().i(Z,`scala.scalajs.runtime.AnonFunction1.$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab`,{hb:1,ha:1,bY:1,f:1});function jg(e){this.jT=null,this.jT=e}M=jg.prototype=new Sh,M.constructor=jg;function Mg(){}Mg.prototype=M,M.cv=(function(e,t){return(0,this.jT)(e,t)}),new F().i(jg,`scala.scalajs.runtime.AnonFunction2.$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2`,{hd:1,hc:1,bZ:1,aA:1});function Ng(e){this.jU=null,this.jU=e}M=Ng.prototype=new wh,M.constructor=Ng;function Pg(){}Pg.prototype=M,M.mh=(function(e,t,n){return(0,this.jU)(e,t,n)}),new F().i(Ng,`scala.scalajs.runtime.AnonFunction3.$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491`,{hf:1,he:1,gS:1,eq:1});function Fg(e,t){this.fg=null,this.fY=null,this.fg=e,this.fY=t}M=Fg.prototype=new N,M.constructor=Fg;function Ig(){}Ig.prototype=M,M.c8=(function(e){var t=this.fY;t!==void 0&&t.l1(e,this.fg),Bs().eJ(e,this.fg,void 0)}),M.oh=(function(e){return new Fg(this.fg,e.mg(this.fY))});var Lg=new F().i(Fg,`com.raquo.laminar.inserters.StaticChildInserter`,{cV:1,a3:1,cT:1,cX:1,cS:1});function Rg(e){e.g4=new Oo(new Og((()=>{e.dZ.jX()})),new Og((()=>{e.dZ.my()}))),e.em=pw()}function zg(e,t,n,r,i){var a=e.em.dr(t,new Og((()=>$()))),o=(e=>{for(var t=a;!t.c();){var r=t.x(),i=r.b3();if(i===null?e===null:Zi(i,e)){var o=r.b1();if(o===null?n===null:Zi(o,n))var s=n===null;else var s=!0}else var s=!1;if(s)return!0;t=t.s()}return!1}),s=ug(r),c=i;block:for(var l;;)if(c.c()){var l=$();break}else{var u=c.x(),d=c.s();if(o(u)){c=d;continue}for(var f=c,p=d;;)if(p.c()){var l=f;break block}else{if(!o(p.x())){p=p.s();continue}for(var m=p,h=new qT(f.x(),$()),g=f.s(),_=h;g!==m;){var v=new qT(g.x(),$());_.ar=v,_=v,g=g.s()}for(var y=m.s(),b=y;!y.c();)if(!o(y.x()))y=y.s();else{for(;b!==y;){var ee=new qT(b.x(),$());_.ar=ee,_=ee,b=b.s()}b=y.s(),y=y.s()}b.c()||(_.ar=b);var l=h;break block}}var te=e.em.dr(t,new Og((()=>$()))),x=(e=>l.bU(e.b3())),S=te;block$2:for(var C;;)if(S.c()){var C=$();break}else{var ne=S.x(),re=S.s();if(x(ne)){S=re;continue}for(var ie=S,ae=re;;)if(ae.c()){var C=ie;break block$2}else{if(!x(ae.x())){ae=ae.s();continue}for(var w=ae,T=new qT(ie.x(),$()),E=ie.s(),oe=T;E!==w;){var se=new qT(E.x(),$());oe.ar=se,oe=se,E=E.s()}for(var ce=w.s(),le=ce;!ce.c();)if(!x(ce.x()))ce=ce.s();else{for(;le!==ce;){var ue=new qT(le.x(),$());oe.ar=ue,oe=ue,le=le.s()}le=ce.s(),ce=ce.s()}le.c()||(oe.ar=le);var C=T;break block$2}}var de=(e=>new Q(e,n));if(s===$())var fe=$();else{for(var pe=new qT(de(s.x()),$()),me=pe,he=s.s();he!==$();){var ge=new qT(de(he.x()),$());me.ar=ge,me=ge,he=he.s()}var fe=pe}var _e=C.k7(fe),ve=t.fZ.kt(t.ib.i(e)),ye=(e=>l.bU(e)),be=ve;block$4:for(var xe;;)if(be.c()){var xe=$();break}else{var Se=be.x(),Ce=be.s();if(ye(Se)){be=Ce;continue}for(var we=be,D=Ce;;)if(D.c()){var xe=we;break block$4}else{if(!ye(D.x())){D=D.s();continue}for(var Te=D,Ee=new qT(we.x(),$()),De=we.s(),Oe=Ee;De!==Te;){var ke=new qT(De.x(),$());Oe.ar=ke,Oe=ke,De=De.s()}for(var Ae=Te.s(),je=Ae;!Ae.c();)if(!ye(Ae.x()))Ae=Ae.s();else{for(;je!==Ae;){var Me=new qT(je.x(),$());Oe.ar=Me,Oe=Me,je=je.s()}je=Ae.s(),Ae=Ae.s()}je.c()||(Oe.ar=je);var xe=Ee;break block$4}}var Ne=s;block$6:for(var Pe;;)if(Ne.c()){var Pe=$();break}else{var Fe=Ne.x(),Ie=Ne.s();if(o(Fe)){Ne=Ie;continue}for(var Le=Ne,Re=Ie;;)if(Re.c()){var Pe=Le;break block$6}else{if(!o(Re.x())){Re=Re.s();continue}for(var ze=Re,Be=new qT(Le.x(),$()),Ve=Le.s(),He=Be;Ve!==ze;){var Ue=new qT(Ve.x(),$());He.ar=Ue,He=Ue,Ve=Ve.s()}for(var O=ze.s(),k=O;!O.c();)if(!o(O.x()))O=O.s();else{for(;k!==O;){var We=new qT(k.x(),$());He.ar=We,He=We,k=k.s()}k=O.s(),O=O.s()}k.c()||(He.ar=k);var Pe=Be;break block$6}}var Ge=xe.k7(Pe);e.em=e.em.du(t,_e),t.id.cv(e,t.fZ.kx(Ge))}function Bg(e,t){Hg(e,e.fj,t)&&Ug(e,t)}function Vg(e,t){var n=e.fj;e.fj=t,Hg(e,n,t)||Ug(e,t)}function Hg(e,t,n){var r=!t.c()&&!t.aH().fJ().bq.c(),i=!n.c()&&!n.aH().fJ().bq.c();return r&&!i}function Ug(e,t){Wg(e,t.c()?pb():new mb(t.aH().fJ()))}function Wg(e,t){if(t.c())e.g4.mp();else{var n=t.aH();e.g4.nY(n)}}function Gg(){}M=Gg.prototype=new Rh,M.constructor=Gg;function Kg(){}Kg.prototype=M;var qg=class extends Kh{constructor(e){super(),gf(this,e,null,!0,!0)}};new F().i(qg,`java.lang.ArithmeticException`,{dM:1,D:1,C:1,w:1,a:1});var Jg=new F().i(0,`java.lang.Byte`,{dP:1,a8:1,a:1,a1:1,X:1},(e=>ca(e))),Yg=class extends Kh{constructor(){super(),gf(this,null,null,!0,!0)}};new F().i(Yg,`java.lang.ClassCastException`,{b2:1,D:1,C:1,w:1,a:1});function Xg(e,t){return gf(e,t,null,!0,!0),e}function Zg(e){return gf(e,null,null,!0,!0),e}var Qg=class extends Kh{};new F().i(Qg,`java.lang.IllegalArgumentException`,{b4:1,D:1,C:1,w:1,a:1});var $g=class extends Kh{constructor(e){super(),gf(this,e,null,!0,!0)}};new F().i($g,`java.lang.IllegalStateException`,{dU:1,D:1,C:1,w:1,a:1});function e_(e,t){return gf(e,t,null,!0,!0),e}var t_=class extends Kh{};new F().i(t_,`java.lang.IndexOutOfBoundsException`,{az:1,D:1,C:1,w:1,a:1});function n_(){}M=n_.prototype=new Rh,M.constructor=n_;function r_(){}r_.prototype=M,new F().i(n_,`java.lang.JSConsoleBasedPrintStream$DummyOutputStream`,{dY:1,aY:1,aW:1,b0:1,aX:1});var i_=class extends Kh{constructor(){super(),gf(this,null,null,!0,!0)}};new F().i(i_,`java.lang.NegativeArraySizeException`,{dZ:1,D:1,C:1,w:1,a:1});var a_=class extends Kh{constructor(){super(),gf(this,null,null,!0,!0)}};new F().i(a_,`java.lang.NullPointerException`,{e0:1,D:1,C:1,w:1,a:1});var o_=new F().i(0,`java.lang.Short`,{e3:1,a8:1,a:1,a1:1,X:1},(e=>la(e))),s_=class extends Kh{constructor(e){super(),gf(this,e,null,!0,!0)}};new F().i(s_,`java.lang.UnsupportedOperationException`,{ec:1,D:1,C:1,w:1,a:1});var c_=class extends Kh{constructor(e){super(),gf(this,e,null,!0,!0)}};new F().i(c_,`java.util.ConcurrentModificationException`,{eg:1,D:1,C:1,w:1,a:1});var l_=class extends Kh{constructor(e){super(),gf(this,e,null,!0,!0)}};new F().i(l_,`java.util.NoSuchElementException`,{eh:1,D:1,C:1,w:1,a:1});function u_(){}M=u_.prototype=new Qh,M.constructor=u_;function d_(){}d_.prototype=M,M.i=(function(e){return e}),M.H=(function(){return`generalized constraint`}),new F().i(u_,`scala.$less$colon$less$$anon$1`,{em:1,ej:1,ek:1,f:1,a:1});function f_(e){return e.gh||=(e.gi=e.fn===null?`null`:h_(e),!0),e.gi}function p_(e){return e.gh?e.gi:f_(e)}function m_(e){var t=e.fn;return`of class `+Xi(t)}function h_(e){try{return e.fn+` (`+m_(e)+`)`}catch{return`an instance `+m_(e)}}var g_=class extends Kh{constructor(e){super(),this.gi=null,this.fn=null,this.gh=!1,this.fn=e,gf(this,null,null,!0,!0)}f0(){return p_(this)}};new F().i(g_,`scala.MatchError`,{et:1,D:1,C:1,w:1,a:1});function __(){}M=__.prototype=new N,M.constructor=__;function v_(){}v_.prototype=M,M.c=(function(){return this===pb()}),M.z=(function(){return this.c()?0:1}),M.k=(function(){return this.c()?J().K:new O_(this.aH())});function y_(e){this.eq=0,this.jc=0,this.jb=null,this.jb=e,this.eq=0,this.jc=e.cC()}M=y_.prototype=new ng,M.constructor=y_;function b_(){}b_.prototype=M,M.l=(function(){return this.eq<this.jc}),M.g=(function(){var e=this.jb.cD(this.eq);return this.eq=1+this.eq|0,e}),new F().i(y_,`scala.Product$$anon$1`,{ez:1,o:1,r:1,b:1,c:1});function Q(e,t){this.jd=null,this.je=null,this.jd=e,this.je=t}M=Q.prototype=new N,M.constructor=Q;function x_(){}x_.prototype=M,M.cC=(function(){return 2}),M.cD=(function(e){return _m(this,e)}),M.b3=(function(){return this.jd}),M.b1=(function(){return this.je}),M.H=(function(){return`(`+this.b3()+`,`+this.b1()+`)`}),M.cE=(function(){return`Tuple2`}),M.dO=(function(){return new Ay(this)}),M.A=(function(){return K().hq(this,-889275714,!1)}),M.w=(function(e){return this===e||e instanceof Q&&U().p(this.b3(),e.b3())&&U().p(this.b1(),e.b1())}),new F().i(Q,`scala.Tuple2`,{bc:1,eA:1,a9:1,d:1,a:1});function S_(e){this.es=null,vm(this,e)}M=S_.prototype=new bm,M.constructor=S_;function C_(){}C_.prototype=M,new F().i(S_,`scala.collection.ClassTagSeqFactory$AnySeqDelegate`,{eO:1,eN:1,J:1,a:1,a0:1});function w_(e){return $l(e,e.bI()+`(`,`, `,`)`)}function T_(e){return!!(e&&e.$classData&&e.$classData.n.e)}function E_(){}M=E_.prototype=new ng,M.constructor=E_;function D_(){}D_.prototype=M,M.l=(function(){return!1}),M.hk=(function(){throw new l_(`next on empty iterator`)}),M.z=(function(){return 0}),M.f7=(function(e,t){return this}),M.g=(function(){this.hk()}),new F().i(E_,`scala.collection.Iterator$$anon$19`,{eT:1,o:1,r:1,b:1,c:1});function O_(e){this.et=!1,this.jh=null,this.jh=e,this.et=!1}M=O_.prototype=new ng,M.constructor=O_;function k_(){}k_.prototype=M,M.l=(function(){return!this.et}),M.g=(function(){return this.et?J().K.g():(this.et=!0,this.jh)}),M.f7=(function(e,t){return this.et||e>0||t===0?J().K:this}),new F().i(O_,`scala.collection.Iterator$$anon$20`,{eU:1,o:1,r:1,b:1,c:1});function A_(e,t){this.jk=null,this.fp=!1,this.jj=null,this.gs=null,this.ji=null,this.gs=e,this.ji=t,this.jk=Bw(new Vw),this.fp=!1}M=A_.prototype=new ng,M.constructor=A_;function j_(){}j_.prototype=M,M.l=(function(){for(;;)if(this.fp)return!0;else if(this.gs.l()){var e=this.gs.g();if(this.jk.fF(this.ji.i(e)))return this.jj=e,this.fp=!0,!0}else return!1}),M.g=(function(){return this.l()?(this.fp=!1,this.jj):J().K.g()}),new F().i(A_,`scala.collection.Iterator$$anon$8`,{eW:1,o:1,r:1,b:1,c:1});function M_(e,t){this.fq=null,this.jl=null,this.fq=e,this.jl=t}M=M_.prototype=new ng,M.constructor=M_;function N_(){}N_.prototype=M,M.z=(function(){return this.fq.z()}),M.l=(function(){return this.fq.l()}),M.g=(function(){return this.jl.i(this.fq.g())}),new F().i(M_,`scala.collection.Iterator$$anon$9`,{eX:1,o:1,r:1,b:1,c:1});function P_(e){for(;;){if(e.be instanceof I_){var t=e.be;e.be=t.be,e.cL=t.cL,t.bB!==null&&(e.bA===null&&(e.bA=t.bA),t.bA.eu=e.bB,e.bB=t.bB);continue}return}}function F_(e){for(;;)if(e.bB===null)return e.be=null,e.bA=null,!1;else{if(e.be=e.bB.nd(),e.bA===e.bB&&(e.bA=e.bA.eu),e.bB=e.bB.eu,P_(e),e.cL)return!0;if(e.be!==null&&e.be.l())return e.cL=!0,!0}}function I_(e){this.be=null,this.bB=null,this.bA=null,this.cL=!1,this.be=e,this.bB=null,this.bA=null,this.cL=!1}M=I_.prototype=new ng,M.constructor=I_;function L_(){}L_.prototype=M,M.l=(function(){return this.cL?!0:this.be===null?!1:this.be.l()?(this.cL=!0,!0):F_(this)}),M.g=(function(){return this.l()?(this.cL=!1,this.be.g()):J().K.g()}),M.gY=(function(e){var t=new nu(e,null);return this.bB===null?(this.bB=t,this.bA=t):(this.bA.eu=t,this.bA=t),this.be===null&&(this.be=J().K),this}),new F().i(I_,`scala.collection.Iterator$ConcatIterator`,{bi:1,o:1,r:1,b:1,c:1});function R_(e){for(;e.ch>0;)e.cM.l()?(e.cM.g(),e.ch=-1+e.ch|0):e.ch=0}function z_(e,t){if(e.bt<0)return-1;var n=e.bt-t|0;return n<0?0:n}function B_(e,t,n){this.cM=null,this.bt=0,this.ch=0,this.cM=e,this.bt=n,this.ch=t}M=B_.prototype=new ng,M.constructor=B_;function V_(){}V_.prototype=M,M.z=(function(){var e=this.cM.z();if(e<0)return-1;var t=e-this.ch|0,n=t<0?0:t;if(this.bt<0)return n;var r=this.bt;return r<n?r:n}),M.l=(function(){return R_(this),this.bt!==0&&this.cM.l()}),M.g=(function(){return R_(this),this.bt>0?(this.bt=-1+this.bt|0,this.cM.g()):this.bt<0?this.cM.g():J().K.g()}),M.f7=(function(e,t){var n=e>0?e:0;if(t<0)var r=z_(this,n);else if(t<=n)var r=0;else if(this.bt<0)var r=t-n|0;else var i=z_(this,n),a=t-n|0,r=i<a?i:a;var o=this.ch+n|0;return r===0?J().K:o<0?(this.ch=2147483647,this.bt=0,Tm(this,new sh((()=>new B_(this.cM,-2147483647+o|0,r))))):(this.ch=o,this.bt=r,this)}),new F().i(B_,`scala.collection.Iterator$SliceIterator`,{eZ:1,o:1,r:1,b:1,c:1});function H_(e){for(var t=e,n=0;!t.c();)n=1+n|0,t=t.s();return n}function U_(e,t){return t<0?1:K_(e,0,e,t)}function W_(e,t){if(t<0)throw e_(new t_,``+t);var n=e.kw(t);if(n.c())throw e_(new t_,``+t);return n.x()}function G_(e,t){return BC(t)?q_(e,e,t):pg(e,t)}function K_(e,t,n,r){for(;;)if(t===r)return n.c()?0:1;else if(n.c())return-1;else{var i=1+t|0,a=n.s();t=i,n=a}}function q_(e,t,n){for(;;)if(t===n)return!0;else if(!t.c()&&!n.c()&&U().p(t.x(),n.x())){var r=t.s(),i=n.s();t=r,n=i}else return t.c()&&n.c()}function J_(e){this.ev=null,this.ev=e}M=J_.prototype=new ng,M.constructor=J_;function Y_(){}Y_.prototype=M,M.l=(function(){return!this.ev.c()}),M.g=(function(){var e=this.ev.x();return this.ev=this.ev.s(),e}),new F().i(J_,`scala.collection.StrictOptimizedLinearSeqOps$$anon$1`,{f3:1,o:1,r:1,b:1,c:1});function X_(e){e.cj===null&&(e.cj=new Sa(Eu().eC<<1),e.ex=new(Su.r()).C(Eu().eC))}function Z_(e,t){e.dB=t,e.bu=0,e.ew=t.ho()}function Q_(e,t){X_(e),e.bg=1+e.bg|0;var n=e.bg<<1,r=1+(e.bg<<1)|0;e.ex.a[e.bg]=t,e.cj.a[n]=0,e.cj.a[r]=t.hl()}function $_(e){e.bg=-1+e.bg|0}function ev(e){for(;e.bg>=0;){var t=e.bg<<1,n=1+(e.bg<<1)|0,r=e.cj.a[t];if(r<e.cj.a[n]){var i=e.cj;i.a[t]=1+i.a[t]|0;var a=e.ex.a[e.bg].ha(r);if(a.he()&&Q_(e,a),a.fK())return Z_(e,a),!0}else $_(e)}return!1}function tv(e){return e.bu=0,e.ew=0,e.bg=-1,e}function nv(e,t){return tv(e),t.he()&&Q_(e,t),t.fK()&&Z_(e,t),e}function rv(){this.bu=0,this.ew=0,this.dB=null,this.bg=0,this.cj=null,this.ex=null}M=rv.prototype=new ng,M.constructor=rv;function iv(){}iv.prototype=M,M.l=(function(){return this.bu<this.ew||ev(this)});function av(e,t){e.fs=t,e.cU=-1+t.ho()|0}function ov(e,t){e.bv=1+e.bv|0,e.ez.a[e.bv]=t,e.ey.a[e.bv]=-1+t.hl()|0}function sv(e){e.bv=-1+e.bv|0}function cv(e){for(;e.bv>=0;){var t=e.ey.a[e.bv];if(e.ey.a[e.bv]=-1+t|0,t>=0)ov(e,e.ez.a[e.bv].ha(t));else{var n=e.ez.a[e.bv];if(sv(e),n.fK())return av(e,n),!0}}return!1}function lv(e){return e.cU=-1,e.bv=-1,e.ey=new Sa(1+Eu().eC|0),e.ez=new(Su.r()).C(1+Eu().eC|0),e}function uv(e,t){return lv(e),ov(e,t),cv(e),e}function dv(){this.cU=0,this.fs=null,this.bv=0,this.ey=null,this.ez=null}M=dv.prototype=new ng,M.constructor=dv;function fv(){}fv.prototype=M,M.l=(function(){return this.cU>=0||cv(this)});function pv(e){return e.e5!==null}function mv(e,t,n,r){if(n<0||n>t.a.length)throw Yy(new Xy);var i=new Sa(1+t.a.length|0);t.t(0,i,0,n),i.a[n]=r;var a=1+n|0,o=t.a.length-n|0;return t.t(n,i,a,o),i}function hv(e,t,n,r,i,a,o){var s=t.eU(n),c=s<<1,l=t.ai,u=new P(2+l.a.length|0);l.t(0,u,0,c),u.a[c]=r,u.a[1+c|0]=o;var d=2+c|0,f=l.a.length-c|0;l.t(c,u,d,f);var p=mv(e,t.bf,s,i);t.W|=n,t.ai=u,t.bf=p,t.aK=1+t.aK|0,t.b4=t.b4+a|0}function gv(e){pv(e)&&_v(e),e.e5=null}function _v(e){e.c4=e.c4.kr()}function vv(){this.e5=null,this.c4=null,this.c4=new Rm(0,0,Pl().j7,Pl().gg,0,0)}M=vv.prototype=new N,M.constructor=vv;function yv(){}yv.prototype=M,M.aY=(function(e){}),M.ek=(function(e,t,n,r,i,a){if(e instanceof Rm){var o=Eu().dM(i,a),s=Eu().dm(o);if((e.W&s)!==0){var c=Eu().cb(e.W,o,s),l=e.dq(c),u=e.eZ(c);if(u===r&&U().p(l,t))e.ai.a[1+(c<<1)|0]=n;else{var d=e.cz(c),f=Jl().bW(u),p=e.hi(l,d,u,f,t,n,r,i,5+a|0);e.nt(s,f,p)}}else if((e.ad&s)!==0){var m=Eu().cb(e.ad,o,s),h=e.cy(m),g=h.aJ(),_=h.dn();this.ek(h,t,n,r,i,5+a|0),e.aK=e.aK+(h.aJ()-g|0)|0,e.b4=e.b4+(h.dn()-_|0)|0}else hv(this,e,s,t,r,i,n)}else if(e instanceof Bm){var v=e.eg(t);v<0?e.ae=e.ae.dj(new Q(t,n)):e.ae=e.ae.dt(v,new Q(t,n))}else throw new g_(e)}),M.hs=(function(){return this.c4.aK===0?Gm().gz:(this.e5===null&&(this.e5=new jw(this.c4)),this.e5)}),M.k3=(function(e){gv(this);var t=G().P(e.b3()),n=Jl().bW(t);return this.ek(this.c4,e.b3(),e.b1(),t,n,0),this}),M.dI=(function(e,t){gv(this);var n=G().P(e);return this.ek(this.c4,e,t,n,Jl().bW(n),0),this}),M.gU=(function(e){if(gv(this),e instanceof jw)new Lb(this,e);else if(JC(e))e.dL(new uh(((e,t)=>this.dI(e,t))));else for(var t=e.k();t.l();)this.k3(t.g());return this}),M.aW=(function(e){return this.gU(e)}),M.aS=(function(e){return this.k3(e)}),M.aX=(function(){return this.hs()}),new F().i(vv,`scala.collection.immutable.HashMapBuilder`,{fd:1,a7:1,L:1,H:1,F:1});function bv(){this.e6=null,this.js=null,this.mo()}M=bv.prototype=new N,M.constructor=bv;function xv(){}xv.prototype=M,M.aY=(function(e){}),M.mo=(function(){var e=new pu;this.js=(Sg(),new Dw(new sh((()=>e.h2())))),this.e6=e}),M.nV=(function(){return this.e6.hg(new sh((()=>Zm()))),this.js}),M.m7=(function(e){var t=new pu;return this.e6.hg(new sh((()=>(Sg(),new Km(e,(Sg(),new Dw(new sh((()=>t.h2()))))))))),this.e6=t,this}),M.lZ=(function(e){if(e.z()!==0){var t=new pu;this.e6.hg(new sh((()=>Sg().ld(e.k(),new sh((()=>t.h2())))))),this.e6=t}return this}),M.aW=(function(e){return this.lZ(e)}),M.aS=(function(e){return this.m7(e)}),M.aX=(function(){return this.nV()}),new F().i(bv,`scala.collection.immutable.LazyList$LazyBuilder`,{fj:1,a7:1,L:1,H:1,F:1});function Sv(e){this.e7=null,this.e7=e}M=Sv.prototype=new ng,M.constructor=Sv;function Cv(){}Cv.prototype=M,M.l=(function(){return!this.e7.c()}),M.g=(function(){if(this.e7.c())return J().K.g();var e=this.e7.D().x();return this.e7=this.e7.D().aD(),e}),new F().i(Sv,`scala.collection.immutable.LazyList$LazyIterator`,{fl:1,o:1,r:1,b:1,c:1});function wv(){}M=wv.prototype=new N,M.constructor=wv;function Tv(){}Tv.prototype=M,M.cw=(function(e){return $().hp(e)}),M.aT=(function(){return new vE}),M.ax=(function(e){return $().hp(e)}),new F().i(wv,`scala.collection.immutable.List$`,{fo:1,ai:1,a0:1,J:1,a:1});var Ev;function Dv(){return Ev||=new wv,Ev}function Ov(e,t){return e.e8=t,e.cY=0,e}function kv(){this.cY=0,this.e8=null}M=kv.prototype=new ng,M.constructor=kv;function Av(){}Av.prototype=M,M.l=(function(){return this.cY<2}),M.g=(function(){switch(this.cY){case 0:var e=new Q(this.e8.bM,this.e8.cW);break;case 1:var e=new Q(this.e8.bN,this.e8.cX);break;default:var e=J().K.g()}return this.cY=1+this.cY|0,e}),M.dp=(function(e){return this.cY=this.cY+e|0,this});function jv(e,t){return e.cZ=t,e.d0=0,e}function Mv(){this.d0=0,this.cZ=null}M=Mv.prototype=new ng,M.constructor=Mv;function Nv(){}Nv.prototype=M,M.l=(function(){return this.d0<3}),M.g=(function(){switch(this.d0){case 0:var e=new Q(this.cZ.bC,this.cZ.ck);break;case 1:var e=new Q(this.cZ.bD,this.cZ.cl);break;case 2:var e=new Q(this.cZ.bE,this.cZ.cm);break;default:var e=J().K.g()}return this.d0=1+this.d0|0,e}),M.dp=(function(e){return this.d0=this.d0+e|0,this});function Pv(e,t){return e.c6=t,e.d1=0,e}function Fv(){this.d1=0,this.c6=null}M=Fv.prototype=new ng,M.constructor=Fv;function Iv(){}Iv.prototype=M,M.l=(function(){return this.d1<4}),M.g=(function(){switch(this.d1){case 0:var e=new Q(this.c6.bh,this.c6.bO);break;case 1:var e=new Q(this.c6.bi,this.c6.bP);break;case 2:var e=new Q(this.c6.bj,this.c6.bQ);break;case 3:var e=new Q(this.c6.bk,this.c6.bR);break;default:var e=J().K.g()}return this.d1=1+this.d1|0,e}),M.dp=(function(e){return this.d1=this.d1+e|0,this});function Lv(){this.cn=null,this.eA=!1,this.dD=null,this.cn=pw(),this.eA=!1}M=Lv.prototype=new N,M.constructor=Lv;function Rv(){}Rv.prototype=M,M.aY=(function(e){}),M.la=(function(){return this.eA?this.dD.hs():this.cn}),M.m5=(function(e,t){return this.eA?this.dD.dI(e,t):this.cn.aJ()<4||this.cn.bU(e)?this.cn=this.cn.du(e,t):(this.eA=!0,this.dD===null&&(this.dD=new vv),this.cn.mn(this.dD),this.dD.dI(e,t)),this}),M.jY=(function(e){return this.eA?(this.dD.gU(e),this):zf(this,e)}),M.aW=(function(e){return this.jY(e)}),M.aS=(function(e){return this.m5(e.b3(),e.b1())}),M.aX=(function(){return this.la()}),new F().i(Lv,`scala.collection.immutable.MapBuilderImpl`,{fy:1,a7:1,L:1,H:1,F:1});function zv(){try{return af().l6(al().hc(`scala.collection.immutable.Vector.defaultApplyPreferredMaxLength`,`250`),10)}catch(e){throw e}}function Bv(){this.jy=0,this.jz=null,Hv=this,this.jy=zv(),this.jz=new ex(tE(),0,0)}M=Bv.prototype=new N,M.constructor=Bv;function Vv(){}Vv.prototype=M,M.cw=(function(e){return this.h8(e)}),M.h8=(function(e){if(e instanceof Kw)return e;var t=e.z();if(t===0)return tE();if(t>0&&t<=32){matchEnd5:{var n;if(e instanceof uT){var r=e.ac().aI();if(r!==null&&r===I.l()){var n=e.c3;break matchEnd5}}if(zb(e)){var i=new P(t);e.by(i,0,2147483647);var n=i;break matchEnd5}var a=new P(t);e.k().by(a,0,2147483647);var n=a}return new GT(n)}else return new Zv().jZ(e).lb()}),M.aT=(function(){return new Zv}),M.ax=(function(e){return this.h8(e)}),new F().i(Bv,`scala.collection.immutable.Vector$`,{fL:1,ai:1,a0:1,J:1,a:1});var Hv;function Uv(){return Hv||=new Bv,Hv}function Wv(e){var t=null,n=null;if(e.N>=6){t=e.aB;var r=e.I>>>25|0;if(r>0){var i=t,a=t,o=64-r|0;i.t(r,a,0,o)}var s=e.I%33554432|0;e.B=e.B-(e.I-s|0)|0,e.I=s,e.B>>>25|0||(e.N=5),n=t,t=t.a[0]}if(e.N>=5){t===null&&(t=e.T);var c=31&(e.I>>>20|0);if(e.N===5){if(c>0){var l=t,u=t,d=32-c|0;l.t(c,u,0,d)}e.T=t;var f=e.I%1048576|0;e.B=e.B-(e.I-f|0)|0,e.I=f,e.B>>>20|0||(e.N=4)}else c>0&&(t=z().a3(t,c,32)),n.a[0]=t;n=t,t=t.a[0]}if(e.N>=4){t===null&&(t=e.O);var p=31&(e.I>>>15|0);if(e.N===4){if(p>0){var m=t,h=t,g=32-p|0;m.t(p,h,0,g)}e.O=t;var _=e.I%32768|0;e.B=e.B-(e.I-_|0)|0,e.I=_,e.B>>>15|0||(e.N=3)}else p>0&&(t=z().a3(t,p,32)),n.a[0]=t;n=t,t=t.a[0]}if(e.N>=3){t===null&&(t=e.L);var v=31&(e.I>>>10|0);if(e.N===3){if(v>0){var y=t,b=t,ee=32-v|0;y.t(v,b,0,ee)}e.L=t;var te=e.I%1024|0;e.B=e.B-(e.I-te|0)|0,e.I=te,e.B>>>10|0||(e.N=2)}else v>0&&(t=z().a3(t,v,32)),n.a[0]=t;n=t,t=t.a[0]}if(e.N>=2){t===null&&(t=e.F);var x=31&(e.I>>>5|0);if(e.N===2){if(x>0){var S=t,C=t,ne=32-x|0;S.t(x,C,0,ne)}e.F=t;var re=e.I%32|0;e.B=e.B-(e.I-re|0)|0,e.I=re,e.B>>>5|0||(e.N=1)}else x>0&&(t=z().a3(t,x,32)),n.a[0]=t;n=t,t=t.a[0]}if(e.N>=1){t===null&&(t=e.R);var ie=31&e.I;if(e.N===1){if(ie>0){var ae=t,w=t,T=32-ie|0;ae.t(ie,w,0,T)}e.R=t,e.M=e.M-e.I|0,e.I=0}else ie>0&&(t=z().a3(t,ie,32)),n.a[0]=t}e.fv=!1}function Gv(e,t){var n=t.a.length;if(n>0){e.M===32&&Jv(e);var r=32-e.M|0,i=r<n?r:n,a=n-i|0,o=e.R,s=e.M;if(t.t(0,o,s,i),e.M=e.M+i|0,a>0){Jv(e);var c=e.R;t.t(i,c,0,a),e.M=e.M+a|0}}}function Kv(e,t,n){if(t.a.length!==0){e.M===32&&Jv(e);var r=t.a.length;switch(n){case 2:var i=31&((1024-e.B|0)>>>5|0),a=i<r?i:r,o=r-a|0,s=31&(e.B>>>5|0),c=e.F;if(t.t(0,c,s,a),Yv(e,a<<5),o>0){var l=e.F;t.t(a,l,0,o),Yv(e,o<<5)}break;case 3:if(e.B%1024|0){var u=(t=>{Kv(e,t,2)}),d=t.a.length,f=0;if(t!==null)for(;f<d;){var p=t.a[f];u(p),f=1+f|0}else if(t instanceof Sa)for(;f<d;){var m=t.a[f];u(m),f=1+f|0}else if(t instanceof Ta)for(;f<d;){var h=t.a[f];u(h),f=1+f|0}else if(t instanceof Ca)for(;f<d;){var g=t.a[f],_=g.m,v=g.o;u(new B(_,v)),f=1+f|0}else if(t instanceof wa)for(;f<d;){var y=t.a[f];u(y),f=1+f|0}else if(t instanceof ya)for(;f<d;){var b=t.a[f];u(fa(b)),f=1+f|0}else if(t instanceof ba)for(;f<d;){var ee=t.a[f];u(ee),f=1+f|0}else if(t instanceof xa)for(;f<d;){var te=t.a[f];u(te),f=1+f|0}else if(t instanceof va)for(;f<d;){var x=t.a[f];u(x),f=1+f|0}else throw new g_(t);return}var S=31&((32768-e.B|0)>>>10|0),C=S<r?S:r,ne=r-C|0,re=31&(e.B>>>10|0),ie=e.L;if(t.t(0,ie,re,C),Yv(e,C<<10),ne>0){var ae=e.L;t.t(C,ae,0,ne),Yv(e,ne<<10)}break;case 4:if(e.B%32768|0){var w=(t=>{Kv(e,t,3)}),T=t.a.length,E=0;if(t!==null)for(;E<T;){var oe=t.a[E];w(oe),E=1+E|0}else if(t instanceof Sa)for(;E<T;){var se=t.a[E];w(se),E=1+E|0}else if(t instanceof Ta)for(;E<T;){var ce=t.a[E];w(ce),E=1+E|0}else if(t instanceof Ca)for(;E<T;){var le=t.a[E],ue=le.m,de=le.o;w(new B(ue,de)),E=1+E|0}else if(t instanceof wa)for(;E<T;){var fe=t.a[E];w(fe),E=1+E|0}else if(t instanceof ya)for(;E<T;){var pe=t.a[E];w(fa(pe)),E=1+E|0}else if(t instanceof ba)for(;E<T;){var me=t.a[E];w(me),E=1+E|0}else if(t instanceof xa)for(;E<T;){var he=t.a[E];w(he),E=1+E|0}else if(t instanceof va)for(;E<T;){var ge=t.a[E];w(ge),E=1+E|0}else throw new g_(t);return}var _e=31&((1048576-e.B|0)>>>15|0),ve=_e<r?_e:r,ye=r-ve|0,be=31&(e.B>>>15|0),xe=e.O;if(t.t(0,xe,be,ve),Yv(e,ve<<15),ye>0){var Se=e.O;t.t(ve,Se,0,ye),Yv(e,ye<<15)}break;case 5:if(e.B%1048576|0){var Ce=(t=>{Kv(e,t,4)}),we=t.a.length,D=0;if(t!==null)for(;D<we;){var Te=t.a[D];Ce(Te),D=1+D|0}else if(t instanceof Sa)for(;D<we;){var Ee=t.a[D];Ce(Ee),D=1+D|0}else if(t instanceof Ta)for(;D<we;){var De=t.a[D];Ce(De),D=1+D|0}else if(t instanceof Ca)for(;D<we;){var Oe=t.a[D],ke=Oe.m,Ae=Oe.o;Ce(new B(ke,Ae)),D=1+D|0}else if(t instanceof wa)for(;D<we;){var je=t.a[D];Ce(je),D=1+D|0}else if(t instanceof ya)for(;D<we;){var Me=t.a[D];Ce(fa(Me)),D=1+D|0}else if(t instanceof ba)for(;D<we;){var Ne=t.a[D];Ce(Ne),D=1+D|0}else if(t instanceof xa)for(;D<we;){var Pe=t.a[D];Ce(Pe),D=1+D|0}else if(t instanceof va)for(;D<we;){var Fe=t.a[D];Ce(Fe),D=1+D|0}else throw new g_(t);return}var Ie=31&((33554432-e.B|0)>>>20|0),Le=Ie<r?Ie:r,Re=r-Le|0,ze=31&(e.B>>>20|0),Be=e.T;if(t.t(0,Be,ze,Le),Yv(e,Le<<20),Re>0){var Ve=e.T;t.t(Le,Ve,0,Re),Yv(e,Re<<20)}break;case 6:if(e.B%33554432|0){var He=(t=>{Kv(e,t,5)}),Ue=t.a.length,O=0;if(t!==null)for(;O<Ue;){var k=t.a[O];He(k),O=1+O|0}else if(t instanceof Sa)for(;O<Ue;){var We=t.a[O];He(We),O=1+O|0}else if(t instanceof Ta)for(;O<Ue;){var Ge=t.a[O];He(Ge),O=1+O|0}else if(t instanceof Ca)for(;O<Ue;){var Ke=t.a[O],qe=Ke.m,Je=Ke.o;He(new B(qe,Je)),O=1+O|0}else if(t instanceof wa)for(;O<Ue;){var Ye=t.a[O];He(Ye),O=1+O|0}else if(t instanceof ya)for(;O<Ue;){var Xe=t.a[O];He(fa(Xe)),O=1+O|0}else if(t instanceof ba)for(;O<Ue;){var A=t.a[O];He(A),O=1+O|0}else if(t instanceof xa)for(;O<Ue;){var Ze=t.a[O];He(Ze),O=1+O|0}else if(t instanceof va)for(;O<Ue;){var Qe=t.a[O];He(Qe),O=1+O|0}else throw new g_(t);return}var $e=e.B>>>25|0;if(($e+r|0)>64)throw Xg(new Qg,`exceeding 2^31 elements`);var et=e.aB;t.t(0,et,$e,r),Yv(e,r<<25);break;default:throw new g_(n)}}}function qv(e,t){for(var n=t.ce(),r=0;r<n;){var i=t.cd(r),a=r,o=n/2|0,s=a-o|0,c=(1+o|0)-(s<0?-s|0:s)|0;c===1?Gv(e,i):e.M===32||e.M===0?Kv(e,i,c):H().h4(-2+c|0,i,new Y((t=>{Gv(e,t)}))),r=1+r|0}return e}function Jv(e){var t=32+e.B|0,n=t^e.B;e.B=t,e.M=0,Xv(e,t,n)}function Yv(e,t){if(t>0){var n=e.B+t|0,r=n^e.B;e.B=n,e.M=0,Xv(e,n,r)}}function Xv(e,t,n){if(n<=0)throw Xg(new Qg,`advance1(`+t+`, `+n+`): a1=`+e.R+`, a2=`+e.F+`, a3=`+e.L+`, a4=`+e.O+`, a5=`+e.T+`, a6=`+e.aB+`, depth=`+e.N);n<1024?(e.N<=1&&(e.F=new(I.r().r()).C(32),e.F.a[0]=e.R,e.N=2),e.R=new P(32),e.F.a[31&(t>>>5|0)]=e.R):n<32768?(e.N<=2&&(e.L=new(I.r().r().r()).C(32),e.L.a[0]=e.F,e.N=3),e.R=new P(32),e.F=new(I.r().r()).C(32),e.F.a[31&(t>>>5|0)]=e.R,e.L.a[31&(t>>>10|0)]=e.F):n<1048576?(e.N<=3&&(e.O=new(I.r().r().r().r()).C(32),e.O.a[0]=e.L,e.N=4),e.R=new P(32),e.F=new(I.r().r()).C(32),e.L=new(I.r().r().r()).C(32),e.F.a[31&(t>>>5|0)]=e.R,e.L.a[31&(t>>>10|0)]=e.F,e.O.a[31&(t>>>15|0)]=e.L):n<33554432?(e.N<=4&&(e.T=new(I.r().r().r().r().r()).C(32),e.T.a[0]=e.O,e.N=5),e.R=new P(32),e.F=new(I.r().r()).C(32),e.L=new(I.r().r().r()).C(32),e.O=new(I.r().r().r().r()).C(32),e.F.a[31&(t>>>5|0)]=e.R,e.L.a[31&(t>>>10|0)]=e.F,e.O.a[31&(t>>>15|0)]=e.L,e.T.a[31&(t>>>20|0)]=e.O):(e.N<=5&&(e.aB=new(I.r().r().r().r().r().r()).C(64),e.aB.a[0]=e.T,e.N=6),e.R=new P(32),e.F=new(I.r().r()).C(32),e.L=new(I.r().r().r()).C(32),e.O=new(I.r().r().r().r()).C(32),e.T=new(I.r().r().r().r().r()).C(32),e.F.a[31&(t>>>5|0)]=e.R,e.L.a[31&(t>>>10|0)]=e.F,e.O.a[31&(t>>>15|0)]=e.L,e.T.a[31&(t>>>20|0)]=e.O,e.aB.a[t>>>25|0]=e.T)}function Zv(){this.aB=null,this.T=null,this.O=null,this.L=null,this.F=null,this.R=null,this.M=0,this.B=0,this.I=0,this.fv=!1,this.N=0,this.R=new P(32),this.M=0,this.B=0,this.I=0,this.fv=!1,this.N=1}M=Zv.prototype=new N,M.constructor=Zv;function Qv(){}Qv.prototype=M,M.aY=(function(e){}),M.ng=(function(e){var t=e.ce();switch(t){case 0:break;case 1:this.N=1;var n=e.d.a.length;this.M=31&n,this.B=n-this.M|0;var r=e.d;this.R=r.a.length===32?r:z().a3(r,0,32);break;case 3:var i=e.b2,a=e.h;this.R=a.a.length===32?a:z().a3(a,0,32),this.N=2,this.I=32-e.bm|0;var o=e.j+this.I|0;this.M=31&o,this.B=o-this.M|0,this.F=new(I.r().r()).C(32),this.F.a[0]=e.d;var s=this.F,c=i.a.length;i.t(0,s,1,c),this.F.a[1+i.a.length|0]=this.R;break;case 5:var l=e.aN,u=e.aO,d=e.h;this.R=d.a.length===32?d:z().a3(d,0,32),this.N=3,this.I=1024-e.b0|0;var f=e.j+this.I|0;this.M=31&f,this.B=f-this.M|0,this.L=new(I.r().r().r()).C(32),this.L.a[0]=H().c9(e.d,e.b7);var p=this.L,m=l.a.length;l.t(0,p,1,m),this.F=z().V(u,32),this.L.a[1+l.a.length|0]=this.F,this.F.a[u.a.length]=this.R;break;case 7:var h=e.at,g=e.av,_=e.au,v=e.h;this.R=v.a.length===32?v:z().a3(v,0,32),this.N=4,this.I=32768-e.aG|0;var y=e.j+this.I|0;this.M=31&y,this.B=y-this.M|0,this.O=new(I.r().r().r().r()).C(32),this.O.a[0]=H().c9(H().c9(e.d,e.aU),e.aV);var b=this.O,ee=h.a.length;h.t(0,b,1,ee),this.L=z().V(g,32),this.F=z().V(_,32),this.O.a[1+h.a.length|0]=this.L,this.L.a[g.a.length]=this.F,this.F.a[_.a.length]=this.R;break;case 9:var te=e.a4,x=e.a7,S=e.a6,C=e.a5,ne=e.h;this.R=ne.a.length===32?ne:z().a3(ne,0,32),this.N=5,this.I=1048576-e.am|0;var re=e.j+this.I|0;this.M=31&re,this.B=re-this.M|0,this.T=new(I.r().r().r().r().r()).C(32),this.T.a[0]=H().c9(H().c9(H().c9(e.d,e.ay),e.az),e.aA);var ie=this.T,ae=te.a.length;te.t(0,ie,1,ae),this.O=z().V(x,32),this.L=z().V(S,32),this.F=z().V(C,32),this.T.a[1+te.a.length|0]=this.O,this.O.a[x.a.length]=this.L,this.L.a[S.a.length]=this.F,this.F.a[C.a.length]=this.R;break;case 11:var w=e.X,T=e.a1,E=e.a0,oe=e.Z,se=e.Y,ce=e.h;this.R=ce.a.length===32?ce:z().a3(ce,0,32),this.N=6,this.I=33554432-e.af|0;var le=e.j+this.I|0;this.M=31&le,this.B=le-this.M|0,this.aB=new(I.r().r().r().r().r().r()).C(64),this.aB.a[0]=H().c9(H().c9(H().c9(H().c9(e.d,e.an),e.ao),e.ap),e.aq);var ue=this.aB,de=w.a.length;w.t(0,ue,1,de),this.T=z().V(T,32),this.O=z().V(E,32),this.L=z().V(oe,32),this.F=z().V(se,32),this.aB.a[1+w.a.length|0]=this.T,this.T.a[T.a.length]=this.O,this.O.a[E.a.length]=this.L,this.L.a[oe.a.length]=this.F,this.F.a[se.a.length]=this.R;break;default:throw new g_(t)}return this.M===0&&this.B>0&&(this.M=32,this.B=-32+this.B|0),this}),M.m8=(function(e){return this.M===32&&Jv(this),this.R.a[this.M]=e,this.M=1+this.M|0,this}),M.jZ=(function(e){return e instanceof Kw?this.M===0&&this.B===0&&!this.fv?this.ng(e):qv(this,e):zf(this,e)}),M.lb=(function(){this.fv&&Wv(this);var e=this.M+this.B|0,t=e-this.I|0;if(t===0)return Uv(),tE();if(e<0)throw e_(new t_,`Vector cannot have negative size `+e);if(e<=32){var n=this.R;return new GT(n.a.length===t?n:z().V(n,t))}else if(e<=1024){var r=31&(-1+e|0),i=(-1+e|0)>>>5|0,a=z().a3(this.F,1,i),o=this.F.a[0],s=this.F.a[i],c=1+r|0,l=s.a.length===c?s:z().V(s,c);return new nE(o,32-this.I|0,a,l,t)}else if(e<=32768){var u=31&(-1+e|0),d=31&((-1+e|0)>>>5|0),f=(-1+e|0)>>>10|0,p=z().a3(this.L,1,f),m=this.L.a[0],h=z().a3(m,1,m.a.length),g=this.L.a[0].a[0],_=z().V(this.L.a[f],d),v=this.L.a[f].a[d],y=1+u|0,b=v.a.length===y?v:z().V(v,y),ee=g.a.length;return new iE(g,ee,h,ee+(h.a.length<<5)|0,p,_,b,t)}else if(e<=1048576){var te=31&(-1+e|0),x=31&((-1+e|0)>>>5|0),S=31&((-1+e|0)>>>10|0),C=(-1+e|0)>>>15|0,ne=z().a3(this.O,1,C),re=this.O.a[0],ie=z().a3(re,1,re.a.length),ae=this.O.a[0].a[0],w=z().a3(ae,1,ae.a.length),T=this.O.a[0].a[0].a[0],E=z().V(this.O.a[C],S),oe=z().V(this.O.a[C].a[S],x),se=this.O.a[C].a[S].a[x],ce=1+te|0,le=se.a.length===ce?se:z().V(se,ce),ue=T.a.length,de=ue+(w.a.length<<5)|0;return new oE(T,ue,w,de,ie,de+(ie.a.length<<10)|0,ne,E,oe,le,t)}else if(e<=33554432){var fe=31&(-1+e|0),pe=31&((-1+e|0)>>>5|0),me=31&((-1+e|0)>>>10|0),he=31&((-1+e|0)>>>15|0),ge=(-1+e|0)>>>20|0,_e=z().a3(this.T,1,ge),ve=this.T.a[0],ye=z().a3(ve,1,ve.a.length),be=this.T.a[0].a[0],xe=z().a3(be,1,be.a.length),Se=this.T.a[0].a[0].a[0],Ce=z().a3(Se,1,Se.a.length),we=this.T.a[0].a[0].a[0].a[0],D=z().V(this.T.a[ge],he),Te=z().V(this.T.a[ge].a[he],me),Ee=z().V(this.T.a[ge].a[he].a[me],pe),De=this.T.a[ge].a[he].a[me].a[pe],Oe=1+fe|0,ke=De.a.length===Oe?De:z().V(De,Oe),Ae=we.a.length,je=Ae+(Ce.a.length<<5)|0,Me=je+(xe.a.length<<10)|0;return new cE(we,Ae,Ce,je,xe,Me,ye,Me+(ye.a.length<<15)|0,_e,D,Te,Ee,ke,t)}else{var Ne=31&(-1+e|0),Pe=31&((-1+e|0)>>>5|0),Fe=31&((-1+e|0)>>>10|0),Ie=31&((-1+e|0)>>>15|0),Le=31&((-1+e|0)>>>20|0),Re=(-1+e|0)>>>25|0,ze=z().a3(this.aB,1,Re),Be=this.aB.a[0],Ve=z().a3(Be,1,Be.a.length),He=this.aB.a[0].a[0],Ue=z().a3(He,1,He.a.length),O=this.aB.a[0].a[0].a[0],k=z().a3(O,1,O.a.length),We=this.aB.a[0].a[0].a[0].a[0],Ge=z().a3(We,1,We.a.length),Ke=this.aB.a[0].a[0].a[0].a[0].a[0],qe=z().V(this.aB.a[Re],Le),Je=z().V(this.aB.a[Re].a[Le],Ie),Ye=z().V(this.aB.a[Re].a[Le].a[Ie],Fe),Xe=z().V(this.aB.a[Re].a[Le].a[Ie].a[Fe],Pe),A=this.aB.a[Re].a[Le].a[Ie].a[Fe].a[Pe],Ze=1+Ne|0,Qe=A.a.length===Ze?A:z().V(A,Ze),$e=Ke.a.length,et=$e+(Ge.a.length<<5)|0,tt=et+(k.a.length<<10)|0,nt=tt+(Ue.a.length<<15)|0;return new uE(Ke,$e,Ge,et,k,tt,Ue,nt,Ve,nt+(Ve.a.length<<20)|0,ze,qe,Je,Ye,Xe,Qe,t)}}),M.H=(function(){return`VectorBuilder(len1=`+this.M+`, lenRest=`+this.B+`, offset=`+this.I+`, depth=`+this.N+`)`}),M.aX=(function(){return this.lb()}),M.aW=(function(e){return this.jZ(e)}),M.aS=(function(e){return this.m8(e)}),new F().i(Zv,`scala.collection.immutable.VectorBuilder`,{fT:1,a7:1,L:1,H:1,F:1});function $v(){this.jB=null,ty=this,this.jB=new P(0)}M=$v.prototype=new N,M.constructor=$v;function ey(){}ey.prototype=M,M.cw=(function(e){return this.kO(e)}),M.kO=(function(e){var t=e.z();if(t>=0){var n=this.le(this.jB,0,t),r=T_(e)?e.by(n,0,2147483647):e.k().by(n,0,2147483647);if(r!==t)throw new $g(`Copied `+r+` of `+t);return bE(new SE,n,t)}else return xE(new SE).k0(e)}),M.aT=(function(){return new ry}),M.nU=(function(e,t){if(t<0)throw Gh(new Kh,`Overflow while resizing array of array-backed collection. Requested length: `+t+`; current length: `+e+`; increase: `+(t-e|0));if(t<=e)return-1;if(t>2147483639)throw Gh(new Kh,`Array of array-backed collection exceeds VM length limit of 2147483639. Requested length: `+t+`; current length: `+e);if(e>1073741819)return 2147483639;var n=e<<1,r=n>16?n:16;return t>r?t:r}),M.le=(function(e,t,n){var r=this.nU(e.a.length,n);if(r<0)return e;var i=new P(r);return e.t(0,i,0,t),i}),M.ax=(function(e){return this.kO(e)}),new F().i($v,`scala.collection.mutable.ArrayBuffer$`,{fY:1,ai:1,a0:1,J:1,a:1});var ty;function ny(){return ty||=new $v,ty}function ry(){this.dd=null,Tg(this,(ny(),xE(new SE)))}M=ry.prototype=new Dg,M.constructor=ry;function iy(){}iy.prototype=M,M.aY=(function(e){this.dd.aY(e)}),new F().i(ry,`scala.collection.mutable.ArrayBuffer$$anon$1`,{fZ:1,aM:1,L:1,H:1,F:1});function ay(){this.e4=null,sg(this,Fy())}M=ay.prototype=new lg,M.constructor=ay;function oy(){}oy.prototype=M,new F().i(ay,`scala.collection.mutable.Buffer$`,{g4:1,bj:1,a0:1,J:1,a:1});var sy;function cy(){return sy||=new ay,sy}function ly(e,t){this.dd=null,Tg(this,zw(new Vw,e,t))}M=ly.prototype=new Dg,M.constructor=ly;function uy(){}uy.prototype=M,M.aY=(function(e){this.dd.aY(e)}),new F().i(ly,`scala.collection.mutable.HashSet$$anon$4`,{gc:1,aM:1,L:1,H:1,F:1});function dy(e,t){return e.eE=t,e.df=0,e.cr=null,e.eF=t.aP.a.length,e}function fy(){this.df=0,this.cr=null,this.eF=0,this.eE=null}M=fy.prototype=new ng,M.constructor=fy;function py(){}py.prototype=M,M.l=(function(){if(this.cr!==null)return!0;for(;this.df<this.eF;){var e=this.eE.aP.a[this.df];if(this.df=1+this.df|0,e!==null)return this.cr=e,!0}return!1}),M.g=(function(){if(this.l()){var e=this.h3(this.cr);return this.cr=this.cr.aQ,e}else return J().K.g()});function my(e,t){return e.eG=t,e}function hy(){this.eG=null}M=hy.prototype=new N,M.constructor=hy;function gy(){}gy.prototype=M,M.aY=(function(e){}),M.aW=(function(e){return zf(this,e)}),M.aX=(function(){return this.eG});function _y(){this.e4=null,sg(this,ny())}M=_y.prototype=new lg,M.constructor=_y;function vy(){}vy.prototype=M,new F().i(_y,`scala.collection.mutable.IndexedSeq$`,{gf:1,bj:1,a0:1,J:1,a:1});var yy;function by(){return yy||=new _y,yy}function xy(){}M=xy.prototype=new N,M.constructor=xy;function Sy(){}Sy.prototype=M,M.cw=(function(e){return new vE().fP(e)}),M.aT=(function(){return Tg(new Eg,new vE)}),M.ax=(function(e){return new vE().fP(e)}),new F().i(xy,`scala.collection.mutable.ListBuffer$`,{gi:1,ai:1,a0:1,J:1,a:1});var Cy;function wy(){return Cy||=new xy,Cy}function Ty(e,t){this.gQ=null,this.jL=null,this.jK=0,this.gQ=e,this.jL=t,this.jK=t.ah()|0}M=Ty.prototype=new ng,M.constructor=Ty;function Ey(){}Ey.prototype=M,M.l=(function(){return Iu().km(this.jK,this.jL.ah()|0,`mutation occurred during iteration`),this.gQ.l()}),M.g=(function(){return this.gQ.g()}),new F().i(Ty,`scala.collection.mutable.MutationTracker$CheckedIterator`,{gk:1,o:1,r:1,b:1,c:1});function Dy(e,t){return ky(t)?e.aI()===t.aI():!1}function Oy(e){return e.Q.Z?`Array[`+Oy(e.Q.Q())+`]`:e.Q.N}function ky(e){return!!(e&&e.$classData&&e.$classData.n.E)}function Ay(e){this.eI=0,this.jP=0,this.jQ=null,this.jQ=e,this.eI=0,this.jP=e.cC()}M=Ay.prototype=new ng,M.constructor=Ay;function jy(){}jy.prototype=M,M.l=(function(){return this.eI<this.jP}),M.g=(function(){var e=this.jQ.cD(this.eI);return this.eI=1+this.eI|0,e}),new F().i(Ay,`scala.runtime.ScalaRunTime$$anon$1`,{h0:1,o:1,r:1,b:1,c:1});function My(){}M=My.prototype=new N,M.constructor=My;function Ny(){}Ny.prototype=M,M.cw=(function(e){return this.kP(e)}),M.aT=(function(){return TE(new EE)}),M.kP=(function(e){return zf(TE(new EE),e).aX()}),M.ax=(function(e){return this.kP(e)}),new F().i(My,`scala.scalajs.js.WrappedArray$`,{h6:1,ai:1,a0:1,J:1,a:1});var Py;function Fy(){return Py||=new My,Py}function Iy(){}M=Iy.prototype=new N,M.constructor=Iy;function Ly(){}Ly.prototype=M,M.cw=(function(e){return this.h9(e)}),M.h9=(function(e){return this.aT().aW(e).aX()}),M.aT=(function(){return new Cg(wE(new EE,[]),new Y((e=>new kw(e.dg))))}),M.ax=(function(e){return this.h9(e)}),new F().i(Iy,`scala.scalajs.runtime.WrappedVarArgs$`,{hh:1,ai:1,a0:1,J:1,a:1});var Ry;function zy(){return Ry||=new Iy,Ry}var By=class e extends lp{constructor(e,t){super(),this.dS=null,this.dR=0,this.dS=e,this.dR=t,gf(this,`Transaction depth exceeded maxDepth = `+t+`: Execution of `+e+" aborted. See `Transaction.maxDepth`.",null,!0,!0)}dO(){return new y_(this)}A(){var e=-889275714;return e=G().e(e,ob(`TransactionDepthExceeded`)),e=G().e(e,G().P(this.dS)),e=G().e(e,this.dR),G().C(e,2)}w(t){return this===t?!0:t instanceof e&&this.dR===t.dR?this.dS===t.dS:!1}cC(){return 2}cE(){return`TransactionDepthExceeded`}cD(e){if(e===0)return this.dS;if(e===1)return this.dR;throw e_(new t_,``+e)}H(){return`TransactionDepthExceeded: `+this.dS+`; maxDepth: `+this.dR}};new F().i(By,`com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded`,{aO:1,c2:1,w:1,a:1,d:1,a9:1});function Vy(e){this.dX=null,this.dY=null,this.i5=null,this.i6=!1,Mh(this,e,$())}M=Vy.prototype=new Ph,M.constructor=Vy;function Hy(){}Hy.prototype=M,M.ko=(function(){return this.i6||=(this.i5=this.J(`column`),!0),this.i5}),new F().i(Vy,`com.raquo.laminar.defs.styles.StyleProps$$anon$30`,{cH:1,as:1,W:1,ap:1,aq:1,cL:1});function Uy(e){this.dX=null,this.dY=null,this.i7=null,this.i8=!1,Mh(this,e,$())}M=Uy.prototype=new Ph,M.constructor=Uy;function Wy(){}Wy.prototype=M,M.oj=(function(){return this.i8||=(this.i7=this.J(`wrap`),!0),this.i7}),new F().i(Uy,`com.raquo.laminar.defs.styles.StyleProps$$anon$31`,{cI:1,as:1,W:1,ap:1,aq:1,cM:1});function Gy(e,t){this.fj=null,this.dZ=null,this.g4=null,this.em=null,this.ip=null,this.cf=null,this.ip=e,this.cf=t,this.fj=pb(),Ld(this),Rg(this)}M=Gy.prototype=new N,M.constructor=Gy;function Ky(){}Ky.prototype=M,M.c8=(function(e){Bs().eJ(e,this,void 0)}),M.fJ=(function(){return this.dZ}),M.kq=(function(e){this.dZ=e}),M.lr=(function(e){Bg(this,e)}),M.li=(function(e){Vg(this,e)}),M.H=(function(){return`ReactiveHtmlElement(`+(this.cf===null?`tag=`+this.ip.hj():this.cf.outerHTML)+`)`}),M.dP=(function(){return this.cf});var qy=new F().i(Gy,`com.raquo.laminar.nodes.ReactiveHtmlElement`,{dm:1,aw:1,a3:1,aT:1,aU:1,dl:1});function Jy(e,t){return gf(e,t,null,!0,!0),e}function Yy(e){return gf(e,null,null,!0,!0),e}var Xy=class extends t_{};new F().i(Xy,`java.lang.ArrayIndexOutOfBoundsException`,{dN:1,az:1,D:1,C:1,w:1,a:1});function Zy(e,t){return Object.is(e,t)}function Qy(e){return xc().hn(e)}var $y=new F().i(0,`java.lang.Double`,{b3:1,a8:1,a:1,a1:1,X:1,al:1},(e=>typeof e==`number`)),eb=new F().i(0,`java.lang.Float`,{dS:1,a8:1,a:1,a1:1,X:1,al:1},(e=>da(e))),tb=new F().i(0,`java.lang.Integer`,{dV:1,a8:1,a:1,a1:1,X:1,al:1},(e=>ua(e)));function nb(e,t){return t instanceof B&&e.m===t.m&&e.o===t.o}function rb(e){return e.m^e.o}var ib=new F().i(0,`java.lang.Long`,{b5:1,a8:1,a:1,a1:1,X:1,al:1},(e=>e instanceof B)),ab=class extends Qg{constructor(e){super(),gf(this,e,null,!0,!0)}};new F().i(ab,`java.lang.NumberFormatException`,{e1:1,b4:1,D:1,C:1,w:1,a:1});function ob(e){for(var t=0,n=1,r=-1+e.length|0;r>=0;)t=t+Math.imul(e.charCodeAt(r),n)|0,n=Math.imul(31,n),r=-1+r|0;return t}function sb(e,t){return e===t}var cb=new F().i(0,`java.lang.String`,{e6:1,a:1,a1:1,ay:1,X:1,al:1},(e=>typeof e==`string`)),lb=class extends t_{constructor(){super(),gf(this,null,null,!0,!0)}};new F().i(lb,`java.lang.StringIndexOutOfBoundsException`,{e9:1,az:1,D:1,C:1,w:1,a:1});function ub(){}M=ub.prototype=new v_,M.constructor=ub;function db(){}db.prototype=M,M.n5=(function(){throw new l_(`None.get`)}),M.cE=(function(){return`None`}),M.cC=(function(){return 0}),M.cD=(function(e){return G().f2(e)}),M.dO=(function(){return new Ay(this)}),M.A=(function(){return 2433880}),M.H=(function(){return`None`}),M.aH=(function(){this.n5()}),new F().i(ub,`scala.None$`,{eu:1,ba:1,b:1,a9:1,d:1,a:1});var fb;function pb(){return fb||=new ub,fb}function mb(e){this.er=null,this.er=e}M=mb.prototype=new v_,M.constructor=mb;function hb(){}hb.prototype=M,M.aH=(function(){return this.er}),M.cE=(function(){return`Some`}),M.cC=(function(){return 1}),M.cD=(function(e){return e===0?this.er:G().f2(e)}),M.dO=(function(){return new Ay(this)}),M.A=(function(){return K().hq(this,-889275714,!1)}),M.H=(function(){return W().lY(this)}),M.w=(function(e){return this===e||e instanceof mb&&U().p(this.er,e.er)}),new F().i(mb,`scala.Some`,{bb:1,ba:1,b:1,a9:1,d:1,a:1});function gb(){}M=gb.prototype=new N,M.constructor=gb;function _b(){}_b.prototype=M,M.bI=(function(){return this.bc()}),M.eY=(function(e){return this.ba().ax(e)}),M.f3=(function(){return this.ba().aT()}),M.b9=(function(e){Yl(this,e)}),M.ef=(function(e){return Xl(this,e)}),M.c=(function(){return Zl(this)}),M.by=(function(e,t,n){return Ql(this,e,t,n)}),M.di=(function(e,t,n,r){return eu(this,e,t,n,r)}),M.z=(function(){return-1}),M.eX=(function(e){return this.eY(e)});function vb(e,t){return e.br=t,e.y=0,e.bd=vl().bJ(e.br),e}function yb(){this.br=null,this.y=0,this.bd=0}M=yb.prototype=new ng,M.constructor=yb;function bb(){}bb.prototype=M,M.z=(function(){return this.bd-this.y|0}),M.l=(function(){return this.y<this.bd}),M.g=(function(){this.y>=vl().bJ(this.br)&&J().K.g();var e=W().dK(this.br,this.y);return this.y=1+this.y|0,e}),M.dp=(function(e){if(e>0){var t=this.y+e|0;if(t<0)var n=this.bd;else var r=this.bd,n=r<t?r:t;this.y=n}return this}),new F().i(yb,`scala.collection.ArrayOps$ArrayIterator`,{Y:1,o:1,r:1,b:1,c:1,a:1});function xb(e,t){return t<0?0:t>e.bs?e.bs:t}function Sb(e,t){return e.gr=t,e.cg=0,e.bs=t.q(),e}function Cb(){this.gr=null,this.cg=0,this.bs=0}M=Cb.prototype=new ng,M.constructor=Cb;function wb(){}wb.prototype=M,M.z=(function(){return this.bs}),M.l=(function(){return this.bs>0}),M.g=(function(){if(this.bs>0){var e=this.gr.u(this.cg);return this.cg=1+this.cg|0,this.bs=-1+this.bs|0,e}else return J().K.g()}),M.dp=(function(e){if(e>0){this.cg=this.cg+e|0;var t=this.bs-e|0;this.bs=t<0?0:t}return this}),M.f7=(function(e,t){var n=xb(this,e),r=xb(this,t)-n|0;return this.bs=r<0?0:r,this.cg=this.cg+n|0,this}),new F().i(Cb,`scala.collection.IndexedSeqView$IndexedSeqViewIterator`,{bh:1,o:1,r:1,b:1,c:1,a:1});function Tb(){this.eG=null,my(this,J().K)}M=Tb.prototype=new gy,M.constructor=Tb;function Eb(){}Eb.prototype=M,M.m6=(function(e){return this.eG=this.eG.gY(new sh((()=>new O_(e)))),this}),M.aS=(function(e){return this.m6(e)}),new F().i(Tb,`scala.collection.Iterator$$anon$21`,{eV:1,ge:1,a7:1,L:1,H:1,F:1});function Db(e,t){for(var n=e.k();n.l();){var r=n.g();t.cv(r.b3(),r.b1())}}function Ob(e,t,n,r,i){return eu(new M_(e.k(),new Y((e=>{if(e!==null){var t=e.b3(),n=e.b1();return t+` -> `+n}else throw new g_(e)}))),t,n,r,i)}function kb(e,t){for(var n=e.f3(),r=Bw(new Vw),i=e.k();i.l();){var a=i.g();r.fF(t.i(a))&&n.aS(a)}return n.aX()}function Ab(e,t){var n=e.ds().aT();return n.aW(e),n.aW(t),n.aX()}function jb(e){return e.gv||=(e.gw=new uT(new P(0)),!0),e.gw}function Mb(e){return e.gv?e.gw:jb(e)}function Nb(){this.gw=null,this.gx=null,this.gv=!1,Fb=this,this.gx=new S_(this)}M=Nb.prototype=new N,M.constructor=Nb;function Pb(){}Pb.prototype=M,M.h6=(function(e,t){return e instanceof Uw?e:this.hv(Ef().kL(e,t))}),M.fN=(function(e){return new Cg((ny(),new ry),new Y((t=>Ib().hv(tu(t,e)))))}),M.hv=(function(e){if(e===null)return null;if(e instanceof P)return new uT(e);if(e instanceof Sa)return new oT(e);if(e instanceof Ta)return new nT(e);if(e instanceof Ca)return new cT(e);if(e instanceof wa)return new iT(e);if(e instanceof ya)return new eT(e);if(e instanceof ba)return new Qw(e);if(e instanceof xa)return new fT(e);if(e instanceof va)return new Xw(e);if(fl(e,1))return new mT(e);throw new g_(e)}),M.h5=(function(e,t){return this.h6(e,t)}),new F().i(Nb,`scala.collection.immutable.ArraySeq$`,{fa:1,bl:1,be:1,bd:1,bf:1,a:1});var Fb;function Ib(){return Fb||=new Nb,Fb}function Lb(e,t){for(this.bu=0,this.ew=0,this.dB=null,this.bg=0,this.cj=null,this.ex=null,nv(this,t.b5);this.l();){var n=this.dB.eZ(this.bu);e.ek(e.c4,this.dB.dq(this.bu),this.dB.cz(this.bu),n,Jl().bW(n),0),this.bu=1+this.bu|0}}M=Lb.prototype=new iv,M.constructor=Lb;function Rb(){}Rb.prototype=M,M.hk=(function(){throw J().K.g(),new Yg}),M.g=(function(){this.hk()}),new F().i(Lb,`scala.collection.immutable.HashMapBuilder$$anon$1`,{fe:1,by:1,o:1,r:1,b:1,c:1});function zb(e){return!!(e&&e.$classData&&e.$classData.n.t)}function Bb(e){this.cY=0,this.e8=null,Ov(this,e)}M=Bb.prototype=new Av,M.constructor=Bb;function Vb(){}Vb.prototype=M,new F().i(Bb,`scala.collection.immutable.Map$Map2$$anon$1`,{fs:1,ft:1,o:1,r:1,b:1,c:1});function Hb(e){this.d0=0,this.cZ=null,jv(this,e)}M=Hb.prototype=new Nv,M.constructor=Hb;function Ub(){}Ub.prototype=M,new F().i(Hb,`scala.collection.immutable.Map$Map3$$anon$4`,{fu:1,fv:1,o:1,r:1,b:1,c:1});function Wb(e){this.d1=0,this.c6=null,Pv(this,e)}M=Wb.prototype=new Iv,M.constructor=Wb;function Gb(){}Gb.prototype=M,new F().i(Wb,`scala.collection.immutable.Map$Map4$$anon$7`,{fw:1,fx:1,o:1,r:1,b:1,c:1});function Kb(e){this.cU=0,this.fs=null,this.bv=0,this.ey=null,this.ez=null,this.gE=0,this.jv=null,uv(this,e),this.gE=0}M=Kb.prototype=new fv,M.constructor=Kb;function qb(){}qb.prototype=M,M.A=(function(){return K().lo(this.gE,G().P(this.jv),-889275714)}),M.ny=(function(){return this.l()||J().K.g(),this.gE=this.fs.eZ(this.cU),this.jv=this.fs.cz(this.cU),this.cU=-1+this.cU|0,this}),M.g=(function(){return this.ny()}),new F().i(Kb,`scala.collection.immutable.MapKeyValueTupleHashIterator`,{fz:1,fb:1,o:1,r:1,b:1,c:1});function Jb(e){this.bu=0,this.ew=0,this.dB=null,this.bg=0,this.cj=null,this.ex=null,nv(this,e)}M=Jb.prototype=new iv,M.constructor=Jb;function Yb(){}Yb.prototype=M,M.nx=(function(){this.l()||J().K.g();var e=this.dB.kS(this.bu);return this.bu=1+this.bu|0,e}),M.g=(function(){return this.nx()}),new F().i(Jb,`scala.collection.immutable.MapKeyValueTupleIterator`,{fA:1,by:1,o:1,r:1,b:1,c:1});function Xb(e){e.bl<=e.as&&J().K.g(),e.d3=1+e.d3|0;for(var t=e.gG.cd(e.d3);t.a.length===0;)e.d3=1+e.d3|0,t=e.gG.cd(e.d3);e.eB=e.dF;var n=e.jx,r=e.d3,i=n/2|0,a=r-i|0;e.d2=(1+i|0)-(a<0?-a|0:a)|0;var o=e.d2;switch(o){case 1:e.aL=t;break;case 2:e.aM=t;break;case 3:e.b6=t;break;case 4:e.bS=t;break;case 5:e.dE=t;break;case 6:e.gF=t;break;default:throw new g_(o)}e.dF=e.eB+Math.imul(t.a.length,1<<Math.imul(5,-1+e.d2|0))|0,e.dF>e.cp&&(e.dF=e.cp),e.d2>1&&(e.e9=-1+(1<<Math.imul(5,e.d2))|0)}function Zb(e){var t=(e.as-e.bl|0)+e.cp|0;if(t===e.dF&&Xb(e),e.d2>1){var n=t-e.eB|0;Qb(e,n,e.e9^n),e.e9=n}e.bl=e.bl-e.as|0;var r=e.aL.a.length,i=e.bl;e.co=r<i?r:i,e.as=0}function Qb(e,t,n){n<1024?e.aL=e.aM.a[31&(t>>>5|0)]:n<32768?(e.aM=e.b6.a[31&(t>>>10|0)],e.aL=e.aM.a[0]):n<1048576?(e.b6=e.bS.a[31&(t>>>15|0)],e.aM=e.b6.a[0],e.aL=e.aM.a[0]):n<33554432?(e.bS=e.dE.a[31&(t>>>20|0)],e.b6=e.bS.a[0],e.aM=e.b6.a[0],e.aL=e.aM.a[0]):(e.dE=e.gF.a[t>>>25|0],e.bS=e.dE.a[0],e.b6=e.bS.a[0],e.aM=e.b6.a[0],e.aL=e.aM.a[0])}function $b(e,t,n){n<1024?e.aL=e.aM.a[31&(t>>>5|0)]:n<32768?(e.aM=e.b6.a[31&(t>>>10|0)],e.aL=e.aM.a[31&(t>>>5|0)]):n<1048576?(e.b6=e.bS.a[31&(t>>>15|0)],e.aM=e.b6.a[31&(t>>>10|0)],e.aL=e.aM.a[31&(t>>>5|0)]):n<33554432?(e.bS=e.dE.a[31&(t>>>20|0)],e.b6=e.bS.a[31&(t>>>15|0)],e.aM=e.b6.a[31&(t>>>10|0)],e.aL=e.aM.a[31&(t>>>5|0)]):(e.dE=e.gF.a[t>>>25|0],e.bS=e.dE.a[31&(t>>>20|0)],e.b6=e.bS.a[31&(t>>>15|0)],e.aM=e.b6.a[31&(t>>>10|0)],e.aL=e.aM.a[31&(t>>>5|0)])}function ex(e,t,n){this.gG=null,this.cp=0,this.jx=0,this.aL=null,this.aM=null,this.b6=null,this.bS=null,this.dE=null,this.gF=null,this.co=0,this.as=0,this.e9=0,this.bl=0,this.d3=0,this.d2=0,this.eB=0,this.dF=0,this.gG=e,this.cp=t,this.jx=n,this.aL=e.d,this.co=this.aL.a.length,this.as=0,this.e9=0,this.bl=this.cp,this.d3=0,this.d2=1,this.eB=0,this.dF=this.co}M=ex.prototype=new ng,M.constructor=ex;function tx(){}tx.prototype=M,M.z=(function(){return this.bl-this.as|0}),M.l=(function(){return this.bl>this.as}),M.g=(function(){this.as===this.co&&Zb(this);var e=this.aL.a[this.as];return this.as=1+this.as|0,e}),M.dp=(function(e){if(e>0){var t=((this.as-this.bl|0)+this.cp|0)+e|0,n=this.cp,r=t<n?t:n;if(r===this.cp)this.as=0,this.bl=0,this.co=0;else{for(;r>=this.dF;)Xb(this);var i=r-this.eB|0;this.d2>1&&($b(this,i,this.e9^i),this.e9=i),this.co=this.aL.a.length,this.as=31&i,this.bl=this.as+(this.cp-r|0)|0,this.co>this.bl&&(this.co=this.bl)}}return this}),M.by=(function(e,t,n){for(var r=vl().bJ(e),i=this.bl-this.as|0,a=n<i?n:i,o=r-t|0,s=a<o?a:o,c=s>0?s:0,l=0,u=e instanceof P;l<c;){this.as===this.co&&Zb(this);var d=c-l|0,f=this.aL.a.length-this.as|0,p=d<f?d:f;if(u){var m=this.aL,h=this.as,g=t+l|0;m.t(h,e,g,p)}else Ef().eT(this.aL,this.as,e,t+l|0,p);this.as=this.as+p|0,l=l+p|0}return c}),new F().i(ex,`scala.collection.immutable.NewVectorIterator`,{fC:1,o:1,r:1,b:1,c:1,A:1});function nx(e){return e.gK=0,e.jD=0,e}function rx(){this.gK=0,this.jD=0}M=rx.prototype=new N,M.constructor=rx;function ix(){}ix.prototype=M,M.aY=(function(e){this.gK<e&&this.nT(e)});function ax(){this.gM=null,this.jF=null,sx=this,this.gM=new S_(this),this.jF=new IT(new P(0))}M=ax.prototype=new N,M.constructor=ax;function ox(){}ox.prototype=M,M.mY=(function(e,t){return this.hh(Ef().kL(e,t))}),M.fN=(function(e){return new Cg(new Ux(e.aI()),new Y((e=>cx().hh(e))))}),M.hh=(function(e){if(e===null)return null;if(e instanceof P)return new IT(e);if(e instanceof Sa)return new MT(e);if(e instanceof Ta)return new OT(e);if(e instanceof Ca)return new PT(e);if(e instanceof wa)return new AT(e);if(e instanceof ya)return new ET(e);if(e instanceof ba)return new wT(e);if(e instanceof xa)return new RT(e);if(e instanceof va)return new ST(e);if(fl(e,1))return new BT(e);throw new g_(e)}),M.h5=(function(e,t){return this.mY(e,t)}),new F().i(ax,`scala.collection.mutable.ArraySeq$`,{g3:1,bl:1,be:1,bd:1,bf:1,a:1});var sx;function cx(){return sx||=new ax,sx}function lx(e){this.df=0,this.cr=null,this.eF=0,this.eE=null,dy(this,e)}M=lx.prototype=new py,M.constructor=lx;function ux(){}ux.prototype=M,M.h3=(function(e){return e.ec}),new F().i(lx,`scala.collection.mutable.HashSet$$anon$1`,{g9:1,aN:1,o:1,r:1,b:1,c:1});function dx(e){this.df=0,this.cr=null,this.eF=0,this.eE=null,dy(this,e)}M=dx.prototype=new py,M.constructor=dx;function fx(){}fx.prototype=M,M.h3=(function(e){return e}),new F().i(dx,`scala.collection.mutable.HashSet$$anon$2`,{ga:1,aN:1,o:1,r:1,b:1,c:1});function px(e){this.df=0,this.cr=null,this.eF=0,this.eE=null,this.gP=0,this.jJ=null,this.jJ=e,dy(this,e),this.gP=0}M=px.prototype=new py,M.constructor=px;function mx(){}mx.prototype=M,M.A=(function(){return this.gP}),M.h3=(function(e){return this.gP=this.jJ.fO(e.cs),this}),new F().i(px,`scala.collection.mutable.HashSet$$anon$3`,{gb:1,aN:1,o:1,r:1,b:1,c:1});function hx(e){this.eH=null,this.eH=e}M=hx.prototype=new N,M.constructor=hx;function gx(){}gx.prototype=M,M.w=(function(e){return Dy(this,e)}),M.A=(function(){return G().P(this.eH)}),M.H=(function(){return Oy(this.eH)}),M.aI=(function(){return this.eH}),M.bb=(function(e){return this.eH.Q.U(e)}),new F().i(hx,`scala.reflect.ClassTag$GenericClassTag`,{gs:1,E:1,O:1,P:1,a:1,d:1});function _x(e){this.dX=null,this.dY=null,this.i3=null,this.i4=!1,Mh(this,e,$())}M=_x.prototype=new Ph,M.constructor=_x;function vx(){}vx.prototype=M,M.kI=(function(){return this.i4||=(this.i3=this.J(`flex`),!0),this.i3}),new F().i(_x,`com.raquo.laminar.defs.styles.StyleProps$$anon$28`,{cG:1,as:1,W:1,ap:1,aq:1,cN:1,cK:1});function yx(e){this.dX=null,this.dY=null,this.i9=null,this.ia=!1,Mh(this,e,$())}M=yx.prototype=new Ph,M.constructor=yx;function bx(){}bx.prototype=M,M.l8=(function(){return this.ia||=(this.i9=pd(this),!0),this.i9}),new F().i(yx,`com.raquo.laminar.defs.styles.StyleProps$$anon$5`,{cJ:1,as:1,W:1,ap:1,aq:1,cO:1,cP:1});function xx(){}M=xx.prototype=new Kg,M.constructor=xx;function Sx(){}Sx.prototype=M;function Cx(e){this.br=null,this.y=0,this.bd=0,this.gj=null,this.gj=e,vb(this,e)}M=Cx.prototype=new bb,M.constructor=Cx;function wx(){}wx.prototype=M,M.nz=(function(){this.y>=this.gj.a.length&&J().K.g();var e=this.gj.a[this.y];return this.y=1+this.y|0,e}),M.g=(function(){return this.nz()}),new F().i(Cx,`scala.collection.ArrayOps$ArrayIterator$mcB$sp`,{eE:1,Y:1,o:1,r:1,b:1,c:1,a:1});function Tx(e){this.br=null,this.y=0,this.bd=0,this.gk=null,this.gk=e,vb(this,e)}M=Tx.prototype=new bb,M.constructor=Tx;function Ex(){}Ex.prototype=M,M.nA=(function(){this.y>=this.gk.a.length&&J().K.g();var e=this.gk.a[this.y];return this.y=1+this.y|0,e}),M.g=(function(){return fa(this.nA())}),new F().i(Tx,`scala.collection.ArrayOps$ArrayIterator$mcC$sp`,{eF:1,Y:1,o:1,r:1,b:1,c:1,a:1});function Dx(e){this.br=null,this.y=0,this.bd=0,this.gl=null,this.gl=e,vb(this,e)}M=Dx.prototype=new bb,M.constructor=Dx;function Ox(){}Ox.prototype=M,M.nB=(function(){this.y>=this.gl.a.length&&J().K.g();var e=this.gl.a[this.y];return this.y=1+this.y|0,e}),M.g=(function(){return this.nB()}),new F().i(Dx,`scala.collection.ArrayOps$ArrayIterator$mcD$sp`,{eG:1,Y:1,o:1,r:1,b:1,c:1,a:1});function kx(e){this.br=null,this.y=0,this.bd=0,this.gm=null,this.gm=e,vb(this,e)}M=kx.prototype=new bb,M.constructor=kx;function Ax(){}Ax.prototype=M,M.nC=(function(){this.y>=this.gm.a.length&&J().K.g();var e=this.gm.a[this.y];return this.y=1+this.y|0,e}),M.g=(function(){return this.nC()}),new F().i(kx,`scala.collection.ArrayOps$ArrayIterator$mcF$sp`,{eH:1,Y:1,o:1,r:1,b:1,c:1,a:1});function jx(e){this.br=null,this.y=0,this.bd=0,this.gn=null,this.gn=e,vb(this,e)}M=jx.prototype=new bb,M.constructor=jx;function Mx(){}Mx.prototype=M,M.nD=(function(){this.y>=this.gn.a.length&&J().K.g();var e=this.gn.a[this.y];return this.y=1+this.y|0,e}),M.g=(function(){return this.nD()}),new F().i(jx,`scala.collection.ArrayOps$ArrayIterator$mcI$sp`,{eI:1,Y:1,o:1,r:1,b:1,c:1,a:1});function Nx(e){this.br=null,this.y=0,this.bd=0,this.go=null,this.go=e,vb(this,e)}M=Nx.prototype=new bb,M.constructor=Nx;function Px(){}Px.prototype=M,M.nE=(function(){this.y>=this.go.a.length&&J().K.g();var e=this.go.a[this.y],t=e.m,n=e.o;return this.y=1+this.y|0,new B(t,n)}),M.g=(function(){return this.nE()}),new F().i(Nx,`scala.collection.ArrayOps$ArrayIterator$mcJ$sp`,{eJ:1,Y:1,o:1,r:1,b:1,c:1,a:1});function Fx(e){this.br=null,this.y=0,this.bd=0,this.gp=null,this.gp=e,vb(this,e)}M=Fx.prototype=new bb,M.constructor=Fx;function Ix(){}Ix.prototype=M,M.nF=(function(){this.y>=this.gp.a.length&&J().K.g();var e=this.gp.a[this.y];return this.y=1+this.y|0,e}),M.g=(function(){return this.nF()}),new F().i(Fx,`scala.collection.ArrayOps$ArrayIterator$mcS$sp`,{eK:1,Y:1,o:1,r:1,b:1,c:1,a:1});function Lx(e){this.br=null,this.y=0,this.bd=0,this.jg=null,this.jg=e,vb(this,e)}M=Lx.prototype=new bb,M.constructor=Lx;function Rx(){}Rx.prototype=M,M.nG=(function(){this.y>=this.jg.a.length&&J().K.g(),this.y=1+this.y|0}),M.g=(function(){this.nG()}),new F().i(Lx,`scala.collection.ArrayOps$ArrayIterator$mcV$sp`,{eL:1,Y:1,o:1,r:1,b:1,c:1,a:1});function zx(e){this.br=null,this.y=0,this.bd=0,this.gq=null,this.gq=e,vb(this,e)}M=zx.prototype=new bb,M.constructor=zx;function Bx(){}Bx.prototype=M,M.nH=(function(){this.y>=this.gq.a.length&&J().K.g();var e=this.gq.a[this.y];return this.y=1+this.y|0,e}),M.g=(function(){return this.nH()}),new F().i(zx,`scala.collection.ArrayOps$ArrayIterator$mcZ$sp`,{eM:1,Y:1,o:1,r:1,b:1,c:1,a:1});function Vx(e){return e.bI()+`(<not computed>)`}function Hx(e){return!!(e&&e.$classData&&e.$classData.n.aa)}function Ux(e){this.gK=0,this.jD=0,this.eb=null,this.jE=!1,this.gL=null,this.eb=e,nx(this),this.jE=e===Oa.l(),this.gL=[]}M=Ux.prototype=new ix,M.constructor=Ux;function Wx(){}Wx.prototype=M,M.k2=(function(e){var t=this.jE?pa(e):e===null?this.eb.Q.z:e;return this.gL.push(t),this}),M.m0=(function(e){for(var t=e.k();t.l();)this.k2(t.g());return this}),M.nT=(function(e){}),M.aX=(function(){return(this.eb===Ea.l()?pl.l():this.eb===Bu.l()||this.eb===fh.l()?I.l():this.eb).Q.r().w(this.gL)}),M.H=(function(){return`ArrayBuilder.generic`}),M.aW=(function(e){return this.m0(e)}),M.aS=(function(e){return this.k2(e)}),new F().i(Ux,`scala.collection.mutable.ArrayBuilder$generic`,{g2:1,g1:1,a7:1,L:1,H:1,F:1,a:1});function Gx(e,t){this.gr=null,this.cg=0,this.bs=0,this.jI=null,this.jH=0,this.jI=t,Sb(this,e),this.jH=t.ah()|0}M=Gx.prototype=new wb,M.constructor=Gx;function Kx(){}Kx.prototype=M,M.l=(function(){return Iu().km(this.jH,this.jI.ah()|0,`mutation occurred during iteration`),this.bs>0}),new F().i(Gx,`scala.collection.mutable.CheckedIndexedSeqView$CheckedIterator`,{g6:1,bh:1,o:1,r:1,b:1,c:1,a:1});function qx(){this.U=null}M=qx.prototype=new N,M.constructor=qx;function Jx(){}Jx.prototype=M,M.H=(function(){return this.U}),M.w=(function(e){return this===e}),M.A=(function(){return sa(this)});function Yx(){}M=Yx.prototype=new N,M.constructor=Yx;function Xx(){}Xx.prototype=M;var Zx=class e extends Kh{constructor(e){super(),this.bT=null,this.bT=e,gf(this,null,null,!0,!0)}f0(){return $i(this.bT)}cE(){return`JavaScriptException`}cC(){return 1}cD(e){return e===0?this.bT:G().f2(e)}dO(){return new Ay(this)}A(){return K().hq(this,-889275714,!1)}w(t){return this===t||t instanceof e&&U().p(this.bT,t.bT)}};new F().i(Zx,`scala.scalajs.js.JavaScriptException`,{c0:1,D:1,C:1,w:1,a:1,a9:1,d:1});function Qx(e,t){typeof console<`u`&&(e.j1&&console.error?console.error(t):console.log(t))}function $x(e){this.j1=!1,this.eo=null,this.j1=e,new n_,this.eo=``}M=$x.prototype=new Sx,M.constructor=$x;function eS(){}eS.prototype=M,M.nk=(function(e){for(var t=e;t!==``;){var n=t.indexOf(`
`)|0;if(n<0)this.eo=``+this.eo+t,t=``;else{var r=this.eo,i=t;Qx(this,``+r+i.substring(0,n)),this.eo=``;var a=t,o=1+n|0;t=a.substring(o)}}}),new F().i($x,`java.lang.JSConsoleBasedPrintStream`,{dX:1,dL:1,dK:1,aY:1,aW:1,b0:1,aX:1,aZ:1});function tS(e,t,n){for(;;)if(t<=0||n.c())return n;else{var r=-1+t|0,i=n.s();t=r,n=i}}function nS(e,t){if(e.bn(1)<=0)return e;for(var n=e.f3(),r=Bw(new Vw),i=e.k(),a=!1;i.l();){var o=i.g();r.fF(t.i(o))?n.aS(o):a=!0}return a?n.aX():e}function rS(){this.U=null}M=rS.prototype=new Jx,M.constructor=rS;function iS(){}iS.prototype=M,M.aI=(function(){return Da.l()}),M.bb=(function(e){return new va(e)});function aS(){this.U=null}M=aS.prototype=new Jx,M.constructor=aS;function oS(){}oS.prototype=M,M.aI=(function(){return ka.l()}),M.bb=(function(e){return new ba(e)});function sS(){this.U=null}M=sS.prototype=new Jx,M.constructor=sS;function cS(){}cS.prototype=M,M.aI=(function(){return Oa.l()}),M.bb=(function(e){return new ya(e)});function lS(){this.U=null}M=lS.prototype=new Jx,M.constructor=lS;function uS(){}uS.prototype=M,M.aI=(function(){return Pa.l()}),M.bb=(function(e){return new Ta(e)});function dS(){this.U=null}M=dS.prototype=new Jx,M.constructor=dS;function fS(){}fS.prototype=M,M.aI=(function(){return Na.l()}),M.bb=(function(e){return new wa(e)});function pS(){this.U=null}M=pS.prototype=new Jx,M.constructor=pS;function mS(){}mS.prototype=M,M.aI=(function(){return ja.l()}),M.bb=(function(e){return new Sa(e)});function hS(){this.U=null}M=hS.prototype=new Jx,M.constructor=hS;function gS(){}gS.prototype=M,M.aI=(function(){return Ma.l()}),M.bb=(function(e){return new Ca(e)});function _S(){this.cu=null}M=_S.prototype=new Xx,M.constructor=_S;function vS(){}vS.prototype=M,M.H=(function(){return this.cu}),M.w=(function(e){return this===e}),M.A=(function(){return sa(this)});function yS(){this.U=null}M=yS.prototype=new Jx,M.constructor=yS;function bS(){}bS.prototype=M,M.aI=(function(){return Aa.l()}),M.bb=(function(e){return new xa(e)});function xS(){this.U=null}M=xS.prototype=new Jx,M.constructor=xS;function SS(){}SS.prototype=M,M.aI=(function(){return Ea.l()}),M.bb=(function(e){return new(pl.r()).C(e)});function CS(){}M=CS.prototype=new _b,M.constructor=CS;function wS(){}wS.prototype=M,M.ba=(function(){return Lm()}),M.H=(function(){return Vx(this)}),M.bc=(function(){return`View`});function TS(e,t){if(e===t)return!0;if(ES(t))if(e.aJ()===t.aJ())try{return e.o5(t)}catch(e){if(e instanceof Yg)return!1;throw e}else return!1;else return!1}function ES(e){return!!(e&&e.$classData&&e.$classData.n.aF)}function DS(){this.cu=null,this.cu=`Any`}M=DS.prototype=new vS,M.constructor=DS;function OS(){}OS.prototype=M,M.aI=(function(){return I.l()}),M.bb=(function(e){return new P(e)}),new F().i(DS,`scala.reflect.ManifestFactory$AnyManifest$`,{gt:1,av:1,au:1,S:1,E:1,O:1,P:1,a:1,d:1});var kS;function AS(){return kS||=new DS,kS}function jS(){this.U=null,this.U=`Boolean`}M=jS.prototype=new iS,M.constructor=jS;function MS(){}MS.prototype=M,new F().i(jS,`scala.reflect.ManifestFactory$BooleanManifest$`,{gv:1,gu:1,a2:1,S:1,E:1,O:1,P:1,a:1,d:1});var NS;function PS(){return NS||=new jS,NS}function FS(){this.U=null,this.U=`Byte`}M=FS.prototype=new oS,M.constructor=FS;function IS(){}IS.prototype=M,new F().i(FS,`scala.reflect.ManifestFactory$ByteManifest$`,{gx:1,gw:1,a2:1,S:1,E:1,O:1,P:1,a:1,d:1});var LS;function RS(){return LS||=new FS,LS}function zS(){this.U=null,this.U=`Char`}M=zS.prototype=new cS,M.constructor=zS;function BS(){}BS.prototype=M,new F().i(zS,`scala.reflect.ManifestFactory$CharManifest$`,{gz:1,gy:1,a2:1,S:1,E:1,O:1,P:1,a:1,d:1});var VS;function HS(){return VS||=new zS,VS}function US(){this.U=null,this.U=`Double`}M=US.prototype=new uS,M.constructor=US;function WS(){}WS.prototype=M,new F().i(US,`scala.reflect.ManifestFactory$DoubleManifest$`,{gB:1,gA:1,a2:1,S:1,E:1,O:1,P:1,a:1,d:1});var GS;function KS(){return GS||=new US,GS}function qS(){this.U=null,this.U=`Float`}M=qS.prototype=new fS,M.constructor=qS;function JS(){}JS.prototype=M,new F().i(qS,`scala.reflect.ManifestFactory$FloatManifest$`,{gD:1,gC:1,a2:1,S:1,E:1,O:1,P:1,a:1,d:1});var YS;function XS(){return YS||=new qS,YS}function ZS(){this.U=null,this.U=`Int`}M=ZS.prototype=new mS,M.constructor=ZS;function QS(){}QS.prototype=M,new F().i(ZS,`scala.reflect.ManifestFactory$IntManifest$`,{gF:1,gE:1,a2:1,S:1,E:1,O:1,P:1,a:1,d:1});var $S;function eC(){return $S||=new ZS,$S}function tC(){this.U=null,this.U=`Long`}M=tC.prototype=new gS,M.constructor=tC;function nC(){}nC.prototype=M,new F().i(tC,`scala.reflect.ManifestFactory$LongManifest$`,{gH:1,gG:1,a2:1,S:1,E:1,O:1,P:1,a:1,d:1});var rC;function iC(){return rC||=new tC,rC}function aC(){this.cu=null,this.cu=`Nothing`}M=aC.prototype=new vS,M.constructor=aC;function oC(){}oC.prototype=M,M.aI=(function(){return fh.l()}),M.bb=(function(e){return new P(e)}),new F().i(aC,`scala.reflect.ManifestFactory$NothingManifest$`,{gI:1,av:1,au:1,S:1,E:1,O:1,P:1,a:1,d:1});var sC;function cC(){return sC||=new aC,sC}function lC(){this.cu=null,this.cu=`Null`}M=lC.prototype=new vS,M.constructor=lC;function uC(){}uC.prototype=M,M.aI=(function(){return Bu.l()}),M.bb=(function(e){return new P(e)}),new F().i(lC,`scala.reflect.ManifestFactory$NullManifest$`,{gJ:1,av:1,au:1,S:1,E:1,O:1,P:1,a:1,d:1});var dC;function fC(){return dC||=new lC,dC}function pC(){this.cu=null,this.cu=`Object`}M=pC.prototype=new vS,M.constructor=pC;function mC(){}mC.prototype=M,M.aI=(function(){return I.l()}),M.bb=(function(e){return new P(e)}),new F().i(pC,`scala.reflect.ManifestFactory$ObjectManifest$`,{gK:1,av:1,au:1,S:1,E:1,O:1,P:1,a:1,d:1});var hC;function gC(){return hC||=new pC,hC}function _C(){this.U=null,this.U=`Short`}M=_C.prototype=new bS,M.constructor=_C;function vC(){}vC.prototype=M,new F().i(_C,`scala.reflect.ManifestFactory$ShortManifest$`,{gM:1,gL:1,a2:1,S:1,E:1,O:1,P:1,a:1,d:1});var yC;function bC(){return yC||=new _C,yC}function xC(){this.U=null,this.U=`Unit`}M=xC.prototype=new SS,M.constructor=xC;function SC(){}SC.prototype=M,new F().i(xC,`scala.reflect.ManifestFactory$UnitManifest$`,{gO:1,gN:1,a2:1,S:1,E:1,O:1,P:1,a:1,d:1});var CC;function wC(){return CC||=new xC,CC}function TC(e,t){return e===t?!0:EC(t)&&t.fI(e)?e.ei(t):!1}function EC(e){return!!(e&&e.$classData&&e.$classData.n.m)}function DC(e){this.jp=null,this.jp=e}M=DC.prototype=new wS,M.constructor=DC;function OC(){}OC.prototype=M,M.k=(function(){return this.jp.ah()}),new F().i(DC,`scala.collection.View$$anon$1`,{f6:1,am:1,i:1,e:1,b:1,h:1,c:1,g:1,aa:1,a:1});function kC(e,t){this.fr=null,this.jq=null,this.fr=e,this.jq=t}M=kC.prototype=new wS,M.constructor=kC;function AC(){}AC.prototype=M,M.k=(function(){return new A_(this.fr.k(),this.jq)}),M.z=(function(){return this.fr.z()===0?0:-1}),M.c=(function(){return this.fr.c()}),new F().i(kC,`scala.collection.View$DistinctBy`,{f7:1,am:1,i:1,e:1,b:1,h:1,c:1,g:1,aa:1,a:1});function jC(){}M=jC.prototype=new _b,M.constructor=jC;function MC(){}MC.prototype=M,M.w=(function(e){return TS(this,e)}),M.bc=(function(){return`Set`}),M.H=(function(){return w_(this)}),M.o5=(function(e){return this.ef(e)}),M.i=(function(e){return this.bU(e)});function NC(e,t){if(e===t)return!0;if(PC(t))if(e.aJ()===t.aJ())try{return e.ef(new Y((e=>(t=>U().p(e.dr(t.b3(),og().jo),t.b1())))(t)))}catch(e){if(e instanceof Yg)return!1;throw e}else return!1;else return!1}function PC(e){return!!(e&&e.$classData&&e.$classData.n.a4)}function FC(){}M=FC.prototype=new _b,M.constructor=FC;function IC(){}IC.prototype=M,M.fI=(function(e){return!0}),M.w=(function(e){return TC(this,e)}),M.A=(function(){return K().lf(this)}),M.H=(function(){return w_(this)}),M.ca=(function(e){return dg(this,e)}),M.bn=(function(e){return wm(this,e)}),M.c=(function(){return fg(this)}),M.ei=(function(e){return pg(this,e)});function LC(){}M=LC.prototype=new wS,M.constructor=LC;function RC(){}RC.prototype=M,M.bc=(function(){return`SeqView`}),M.ca=(function(e){return dg(this,e)}),M.bn=(function(e){return wm(this,e)}),M.c=(function(){return fg(this)});function zC(e){return!!(e&&e.$classData&&e.$classData.n.p)}function BC(e){return!!(e&&e.$classData&&e.$classData.n.an)}function VC(){}M=VC.prototype=new _b,M.constructor=VC;function HC(){}HC.prototype=M,M.w=(function(e){return NC(this,e)}),M.A=(function(){return K().ns(this)}),M.bc=(function(){return`Map`}),M.H=(function(){return w_(this)}),M.eY=(function(e){return this.kX().ax(e)}),M.dL=(function(e){Db(this,e)}),M.di=(function(e,t,n,r){return Ob(this,e,t,n,r)});function UC(e,t){return e.dz=t,e}function WC(){this.dz=null}M=WC.prototype=new RC,M.constructor=WC;function GC(){}GC.prototype=M,M.u=(function(e){return this.dz.u(e)}),M.q=(function(){return this.dz.q()}),M.k=(function(){return this.dz.k()}),M.z=(function(){return this.dz.z()}),M.c=(function(){return this.dz.c()}),new F().i(WC,`scala.collection.SeqView$Id`,{bk:1,aB:1,am:1,i:1,e:1,b:1,h:1,c:1,g:1,aa:1,a:1,aE:1,l:1});function KC(){this.hZ=null,this.i0=!1,this.hR=null,this.hS=!1,this.hP=null,this.hQ=!1,this.hT=null,this.hU=!1,this.hV=null,this.hW=!1,this.hX=null,this.hY=!1,this.hO=null,this.lt=null,this.hM=null,this.hN=!1,this.i1=null,this.i2=!1,ns(this),Xo(this),Jo(this),Yo(this)}M=KC.prototype=new N,M.constructor=KC;function qC(){}qC.prototype=M,M.o3=(function(){return this.i0||=(this.hZ=Rd(new zd,`span`,!1),!0),this.hZ}),M.kv=(function(){return this.hS||=(this.hR=Rd(new zd,`div`,!1),!0),this.hR}),M.ku=(function(){return this.hQ||=(this.hP=new _x(`display`),!0),this.hP}),M.kJ=(function(){return this.hU||=(this.hT=new Vy(`flex-direction`),!0),this.hT}),M.mV=(function(){return this.hW||=(this.hV=new Uy(`flex-wrap`),!0),this.hV}),M.kR=(function(){return this.hY||=(this.hX=new yx(`gap`),!0),this.hX}),M.lW=(function(){return this.hN||=(this.hM=new vd(this),!0),this.hM}),M.o6=(function(){return this.i2||=(this.i1=new Dh(this),!0),this.i1}),new F().i(KC,`com.raquo.laminar.api.package$$anon$1`,{cv:1,cQ:1,cz:1,cE:1,cD:1,cF:1,cB:1,ct:1,cp:1,cs:1,aQ:1,aR:1,aP:1,cq:1});function JC(e){return!!(e&&e.$classData&&e.$classData.n.a5)}function YC(){}M=YC.prototype=new RC,M.constructor=YC;function XC(){}XC.prototype=M,M.bc=(function(){return`IndexedSeqView`}),M.bn=(function(e){var t=this.q();return t===e?0:t<e?-1:1}),M.z=(function(){return this.q()});function ZC(e){this.dz=null,UC(this,e)}M=ZC.prototype=new GC,M.constructor=ZC;function QC(){}QC.prototype=M,M.k=(function(){return Sb(new Cb,this)}),M.bc=(function(){return`IndexedSeqView`}),M.bn=(function(e){var t=this.q();return t===e?0:t<e?-1:1}),M.z=(function(){return this.q()}),new F().i(ZC,`scala.collection.IndexedSeqView$Id`,{eQ:1,bk:1,aB:1,am:1,i:1,e:1,b:1,h:1,c:1,g:1,aa:1,a:1,aE:1,l:1,bg:1,q:1});function $C(){}M=$C.prototype=new IC,M.constructor=$C;function ew(){}ew.prototype=M;function tw(e,t){this.gJ=null,this.jC=null,this.gJ=e,this.jC=t}M=tw.prototype=new XC,M.constructor=tw;function nw(){}nw.prototype=M,M.u=(function(e){return this.gJ.u(e)}),M.q=(function(){return this.gJ.aw}),M.bI=(function(){return`ArrayBufferView`}),M.k=(function(){return new Gx(this,this.jC)}),new F().i(tw,`scala.collection.mutable.ArrayBufferView`,{g0:1,eB:1,aB:1,am:1,i:1,e:1,b:1,h:1,c:1,g:1,aa:1,a:1,aE:1,l:1,bg:1,q:1});function rw(){}M=rw.prototype=new HC,M.constructor=rw;function iw(){}iw.prototype=M,M.kX=(function(){return th()}),M.ba=(function(){return vg()});function aw(e,t){return!sw(t)||e.q()===t.q()}function ow(e,t){if(sw(t)){if(e===t)return!0;var n=e.q(),r=n===t.q();if(r){var i=0,a=e.fH(),o=t.fH(),s=a<o?a:o,c=n>>31,l=s>>31,u=s<<1,d=s>>>31|0|l<<1;if(c===d?(-2147483648^n)>(-2147483648^u):c>d)var f=s;else var f=n;for(;i<f&&r;)r=U().p(e.u(i),t.u(i)),i=1+i|0;if(i<n&&r)for(var p=e.k().dp(i),m=t.k().dp(i);r&&p.l();)r=U().p(p.g(),m.g())}return r}else return pg(e,t)}function sw(e){return!!(e&&e.$classData&&e.$classData.n.y)}function cw(){}M=cw.prototype=new IC,M.constructor=cw;function lw(){}lw.prototype=M;function uw(){}M=uw.prototype=new iw,M.constructor=uw;function dw(){}dw.prototype=M,M.aJ=(function(){return 0}),M.z=(function(){return 0}),M.c=(function(){return!0}),M.gW=(function(e){throw new l_(`key not found: `+e)}),M.bU=(function(e){return!1}),M.dr=(function(e,t){return t.ah()}),M.k=(function(){return J().K}),M.du=(function(e,t){return new mw(e,t)}),M.i=(function(e){this.gW(e)}),new F().i(uw,`scala.collection.immutable.Map$EmptyMap$`,{fr:1,aj:1,af:1,i:1,e:1,b:1,h:1,c:1,g:1,a4:1,ah:1,j:1,f:1,ag:1,d:1,a5:1,t:1,ak:1,a:1});var fw;function pw(){return fw||=new uw,fw}function mw(e,t){this.c5=null,this.dC=null,this.c5=e,this.dC=t}M=mw.prototype=new iw,M.constructor=mw;function hw(){}hw.prototype=M,M.aJ=(function(){return 1}),M.z=(function(){return 1}),M.c=(function(){return!1}),M.i=(function(e){if(U().p(e,this.c5))return this.dC;throw new l_(`key not found: `+e)}),M.bU=(function(e){return U().p(e,this.c5)}),M.dr=(function(e,t){return U().p(e,this.c5)?this.dC:t.ah()}),M.k=(function(){return new O_(new Q(this.c5,this.dC))}),M.dQ=(function(e,t){return U().p(e,this.c5)?new mw(this.c5,t):new gw(this.c5,this.dC,e,t)}),M.ef=(function(e){return!!e.i(new Q(this.c5,this.dC))}),M.A=(function(){var e=0,t=0,n=1,r=K().c0(this.c5,this.dC);return e=e+r|0,t^=r,n=Math.imul(n,1|r),r=K().dh,r=K().e(r,e),r=K().e(r,t),r=K().cA(r,n),K().C(r,1)}),M.du=(function(e,t){return this.dQ(e,t)}),new F().i(mw,`scala.collection.immutable.Map$Map1`,{bD:1,aj:1,af:1,i:1,e:1,b:1,h:1,c:1,g:1,a4:1,ah:1,j:1,f:1,ag:1,d:1,a5:1,t:1,ak:1,k:1,a:1});function gw(e,t,n,r){this.bM=null,this.cW=null,this.bN=null,this.cX=null,this.bM=e,this.cW=t,this.bN=n,this.cX=r}M=gw.prototype=new iw,M.constructor=gw;function _w(){}_w.prototype=M,M.aJ=(function(){return 2}),M.z=(function(){return 2}),M.c=(function(){return!1}),M.i=(function(e){if(U().p(e,this.bM))return this.cW;if(U().p(e,this.bN))return this.cX;throw new l_(`key not found: `+e)}),M.bU=(function(e){return U().p(e,this.bM)||U().p(e,this.bN)}),M.dr=(function(e,t){return U().p(e,this.bM)?this.cW:U().p(e,this.bN)?this.cX:t.ah()}),M.k=(function(){return new Bb(this)}),M.dQ=(function(e,t){return U().p(e,this.bM)?new gw(this.bM,t,this.bN,this.cX):U().p(e,this.bN)?new gw(this.bM,this.cW,this.bN,t):new vw(this.bM,this.cW,this.bN,this.cX,e,t)}),M.ef=(function(e){return!!e.i(new Q(this.bM,this.cW))&&!!e.i(new Q(this.bN,this.cX))}),M.A=(function(){var e=0,t=0,n=1,r=K().c0(this.bM,this.cW);return e=e+r|0,t^=r,n=Math.imul(n,1|r),r=K().c0(this.bN,this.cX),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=K().dh,r=K().e(r,e),r=K().e(r,t),r=K().cA(r,n),K().C(r,2)}),M.du=(function(e,t){return this.dQ(e,t)}),new F().i(gw,`scala.collection.immutable.Map$Map2`,{bE:1,aj:1,af:1,i:1,e:1,b:1,h:1,c:1,g:1,a4:1,ah:1,j:1,f:1,ag:1,d:1,a5:1,t:1,ak:1,k:1,a:1});function vw(e,t,n,r,i,a){this.bC=null,this.ck=null,this.bD=null,this.cl=null,this.bE=null,this.cm=null,this.bC=e,this.ck=t,this.bD=n,this.cl=r,this.bE=i,this.cm=a}M=vw.prototype=new iw,M.constructor=vw;function yw(){}yw.prototype=M,M.aJ=(function(){return 3}),M.z=(function(){return 3}),M.c=(function(){return!1}),M.i=(function(e){if(U().p(e,this.bC))return this.ck;if(U().p(e,this.bD))return this.cl;if(U().p(e,this.bE))return this.cm;throw new l_(`key not found: `+e)}),M.bU=(function(e){return U().p(e,this.bC)||U().p(e,this.bD)||U().p(e,this.bE)}),M.dr=(function(e,t){return U().p(e,this.bC)?this.ck:U().p(e,this.bD)?this.cl:U().p(e,this.bE)?this.cm:t.ah()}),M.k=(function(){return new Hb(this)}),M.dQ=(function(e,t){return U().p(e,this.bC)?new vw(this.bC,t,this.bD,this.cl,this.bE,this.cm):U().p(e,this.bD)?new vw(this.bC,this.ck,this.bD,t,this.bE,this.cm):U().p(e,this.bE)?new vw(this.bC,this.ck,this.bD,this.cl,this.bE,t):new bw(this.bC,this.ck,this.bD,this.cl,this.bE,this.cm,e,t)}),M.ef=(function(e){return!!e.i(new Q(this.bC,this.ck))&&!!e.i(new Q(this.bD,this.cl))&&!!e.i(new Q(this.bE,this.cm))}),M.A=(function(){var e=0,t=0,n=1,r=K().c0(this.bC,this.ck);return e=e+r|0,t^=r,n=Math.imul(n,1|r),r=K().c0(this.bD,this.cl),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=K().c0(this.bE,this.cm),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=K().dh,r=K().e(r,e),r=K().e(r,t),r=K().cA(r,n),K().C(r,3)}),M.du=(function(e,t){return this.dQ(e,t)}),new F().i(vw,`scala.collection.immutable.Map$Map3`,{bF:1,aj:1,af:1,i:1,e:1,b:1,h:1,c:1,g:1,a4:1,ah:1,j:1,f:1,ag:1,d:1,a5:1,t:1,ak:1,k:1,a:1});function bw(e,t,n,r,i,a,o,s){this.bh=null,this.bO=null,this.bi=null,this.bP=null,this.bj=null,this.bQ=null,this.bk=null,this.bR=null,this.bh=e,this.bO=t,this.bi=n,this.bP=r,this.bj=i,this.bQ=a,this.bk=o,this.bR=s}M=bw.prototype=new iw,M.constructor=bw;function xw(){}xw.prototype=M,M.aJ=(function(){return 4}),M.z=(function(){return 4}),M.c=(function(){return!1}),M.i=(function(e){if(U().p(e,this.bh))return this.bO;if(U().p(e,this.bi))return this.bP;if(U().p(e,this.bj))return this.bQ;if(U().p(e,this.bk))return this.bR;throw new l_(`key not found: `+e)}),M.bU=(function(e){return U().p(e,this.bh)||U().p(e,this.bi)||U().p(e,this.bj)||U().p(e,this.bk)}),M.dr=(function(e,t){return U().p(e,this.bh)?this.bO:U().p(e,this.bi)?this.bP:U().p(e,this.bj)?this.bQ:U().p(e,this.bk)?this.bR:t.ah()}),M.k=(function(){return new Wb(this)}),M.dQ=(function(e,t){return U().p(e,this.bh)?new bw(this.bh,t,this.bi,this.bP,this.bj,this.bQ,this.bk,this.bR):U().p(e,this.bi)?new bw(this.bh,this.bO,this.bi,t,this.bj,this.bQ,this.bk,this.bR):U().p(e,this.bj)?new bw(this.bh,this.bO,this.bi,this.bP,this.bj,t,this.bk,this.bR):U().p(e,this.bk)?new bw(this.bh,this.bO,this.bi,this.bP,this.bj,this.bQ,this.bk,t):Gm().gz.el(this.bh,this.bO).el(this.bi,this.bP).el(this.bj,this.bQ).el(this.bk,this.bR).el(e,t)}),M.ef=(function(e){return!!e.i(new Q(this.bh,this.bO))&&!!e.i(new Q(this.bi,this.bP))&&!!e.i(new Q(this.bj,this.bQ))&&!!e.i(new Q(this.bk,this.bR))}),M.mn=(function(e){return e.dI(this.bh,this.bO).dI(this.bi,this.bP).dI(this.bj,this.bQ).dI(this.bk,this.bR)}),M.A=(function(){var e=0,t=0,n=1,r=K().c0(this.bh,this.bO);return e=e+r|0,t^=r,n=Math.imul(n,1|r),r=K().c0(this.bi,this.bP),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=K().c0(this.bj,this.bQ),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=K().c0(this.bk,this.bR),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=K().dh,r=K().e(r,e),r=K().e(r,t),r=K().cA(r,n),K().C(r,4)}),M.du=(function(e,t){return this.dQ(e,t)}),new F().i(bw,`scala.collection.immutable.Map$Map4`,{bG:1,aj:1,af:1,i:1,e:1,b:1,h:1,c:1,g:1,a4:1,ah:1,j:1,f:1,ag:1,d:1,a5:1,t:1,ak:1,k:1,a:1});function Sw(){}M=Sw.prototype=new MC,M.constructor=Sw;function Cw(){}Cw.prototype=M,M.aX=(function(){return this});function ww(e){if(!e.gA){if(e.ft)throw Gh(new Kh,`LazyList evaluation depends on its own result (self-reference); see docs for more info`);e.ft=!0;try{var t=e.gB.ah()}finally{e.ft=!1}e.bw=!0,e.gB=null,e.gC=t,e.gA=!0}return e.gC}function Tw(e,t){return Sg(),new Dw(new sh((()=>e.c()?Zm():(Sg(),new Km(t.i(e.D().x()),Tw(e.D().aD(),t))))))}function Ew(e,t,n,r,i){if(t.n=``+t.n+n,!e.bw)t.n+=`<not computed>`;else if(!e.c()){var a=e.D().x();t.n=``+t.n+a;var o=null;o=e;var s=e.D().aD(),c=null;if(c=s,o!==c&&(!c.bw||o.D()!==c.D())&&(o=c,c.bw&&!c.c()))for(c=c.D().aD();o!==c&&c.bw&&!c.c()&&o.D()!==c.D();){t.n=``+t.n+r;var l=o.D().x();t.n=``+t.n+l,o=o.D().aD(),c=c.D().aD(),c.bw&&!c.c()&&(c=c.D().aD())}if(c.bw&&!c.c()){for(var u=e,d=0;;){var f=u,p=c;if(!(f===p||f.D()===p.D()))u=u.D().aD(),c=c.D().aD(),d=1+d|0;else break}var m=o,h=c;if((m===h||m.D()===h.D())&&d>0){t.n=``+t.n+r;var g=o.D().x();t.n=``+t.n+g,o=o.D().aD()}for(;;){var _=o,v=c;if(_===v||_.D()===v.D())break;t.n=``+t.n+r;var y=o.D().x();t.n=``+t.n+y,o=o.D().aD()}t.n=``+t.n+r,t.n+=`<cycle>`}else{for(;o!==c;){t.n=``+t.n+r;var b=o.D().x();t.n=``+t.n+b,o=o.D().aD()}o.bw||(t.n=``+t.n+r,t.n+=`<not computed>`)}}return t.n=``+t.n+i,t}function Dw(e){this.gC=null,this.gB=null,this.bw=!1,this.ft=!1,this.gA=!1,this.gB=e,this.bw=!1,this.ft=!1}M=Dw.prototype=new ew,M.constructor=Dw;function Ow(){}Ow.prototype=M,M.bc=(function(){return`LinearSeq`}),M.q=(function(){return H_(this)}),M.bn=(function(e){return U_(this,e)}),M.u=(function(e){return W_(this,e)}),M.ei=(function(e){return G_(this,e)}),M.D=(function(){return this.gA?this.gC:ww(this)}),M.c=(function(){return this.D()===Zm()}),M.z=(function(){return this.bw&&this.D()===Zm()?0:-1}),M.x=(function(){return this.D().x()}),M.kK=(function(){var e=this,t=this;for(e.c()||(e=e.D().aD());t!==e;){if(e.c()||(e=e.D().aD(),e.c())||(e=e.D().aD(),e===t))return this;t=t.D().aD()}return this}),M.k=(function(){return this.bw&&this.D()===Zm()?J().K:new Sv(this)}),M.b9=(function(e){for(var t=this;;){if(!t.c()){e.i(t.D().x()),t=t.D().aD();continue}break}}),M.bI=(function(){return`LazyList`}),M.no=(function(e){return this.bw&&this.D()===Zm()?Sg().fu:(Sg(),new Dw(new sh((()=>this.c()?Zm():(Sg(),new Km(e.i(this.D().x()),Tw(this.D().aD(),e)))))))}),M.mF=(function(e){return e<=0?this:this.bw&&this.D()===Zm()?Sg().fu:Sg().nW(this,e)}),M.di=(function(e,t,n,r){return this.kK(),Ew(this,e.aR,t,n,r),e}),M.H=(function(){return Ew(this,Jh(new Yh,`LazyList`),`(`,`, `,`)`).n}),M.i=(function(e){return W_(this,e|0)}),M.kw=(function(e){return this.mF(e)}),M.bX=(function(e){return this.no(e)}),M.s=(function(){return this.D().aD()}),M.ba=(function(){return Sg()}),new F().i(Dw,`scala.collection.immutable.LazyList`,{bB:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,aG:1,an:1,aC:1,aH:1,a:1});function kw(e){this.fA=null,this.fA=e}M=kw.prototype=new N,M.constructor=kw;function Aw(){}Aw.prototype=M,M.ca=(function(e){return nS(this,e)}),M.bX=(function(e){return mg(this,e)}),M.fI=(function(e){return aw(this,e)}),M.ei=(function(e){return ow(this,e)}),M.fH=(function(){return fu().jr}),M.k=(function(){return Sb(new Cb,new ZC(this))}),M.bn=(function(e){var t=this.q();return t===e?0:t<e?-1:1}),M.z=(function(){return this.q()}),M.w=(function(e){return TC(this,e)}),M.A=(function(){return K().lf(this)}),M.H=(function(){return w_(this)}),M.c=(function(){return fg(this)}),M.f3=(function(){return zy().aT()}),M.b9=(function(e){Yl(this,e)}),M.by=(function(e,t,n){return Ql(this,e,t,n)}),M.di=(function(e,t,n,r){return eu(this,e,t,n,r)}),M.ds=(function(){return zy()}),M.q=(function(){return this.fA.length|0}),M.u=(function(e){return this.fA[e]}),M.bI=(function(){return`WrappedVarArgs`}),M.eX=(function(e){return zy().h9(e)}),M.i=(function(e){return this.u(e|0)}),M.ba=(function(){return zy()}),new F().i(kw,`scala.scalajs.runtime.WrappedVarArgs`,{c1:1,y:1,u:1,t:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,v:1,p:1,q:1,B:1,z:1,s:1,k:1,a:1});function jw(e){this.b5=null,this.b5=e}M=jw.prototype=new iw,M.constructor=jw;function Mw(){}Mw.prototype=M,M.kX=(function(){return Gm()}),M.z=(function(){return this.b5.aK}),M.aJ=(function(){return this.b5.aK}),M.c=(function(){return this.b5.aK===0}),M.k=(function(){return this.c()?J().K:new Jb(this.b5)}),M.bU=(function(e){var t=G().P(e),n=Jl().bW(t);return this.b5.gZ(e,t,n,0)}),M.i=(function(e){var t=G().P(e),n=Jl().bW(t);return this.b5.gV(e,t,n,0)}),M.dr=(function(e,t){var n=G().P(e),r=Jl().bW(n);return this.b5.hb(e,n,r,0,t)}),M.el=(function(e,t){var n=G().P(e),r=this.b5.lp(e,t,n,Jl().bW(n),0,!0);return r===this.b5?this:new jw(r)}),M.dL=(function(e){this.b5.dL(e)}),M.w=(function(e){if(e instanceof jw){if(this===e)return!0;var t=this.b5,n=e.b5;return t===null?n===null:t.w(n)}else return NC(this,e)}),M.A=(function(){if(this.c())return K().gS;var e=new Kb(this.b5);return K().hu(e,K().dh)}),M.bI=(function(){return`HashMap`}),M.du=(function(e,t){return this.el(e,t)}),new F().i(jw,`scala.collection.immutable.HashMap`,{bA:1,aj:1,af:1,i:1,e:1,b:1,h:1,c:1,g:1,a4:1,ah:1,j:1,f:1,ag:1,d:1,a5:1,t:1,ak:1,fJ:1,f4:1,k:1,T:1,a:1});function Nw(){}M=Nw.prototype=new lw,M.constructor=Nw;function Pw(){}Pw.prototype=M,M.aW=(function(e){return zf(this,e)});function Fw(e,t,n){var r=n&(-1+e.aP.a.length|0),i=e.aP.a[r];if(i===null)e.aP.a[r]=new Au(t,n,null);else{for(var a=null,o=i;o!==null&&o.cs<=n;){if(o.cs===n&&U().p(t,o.ec))return!1;a=o,o=o.aQ}a===null?e.aP.a[r]=new Au(t,n,i):a.aQ=new Au(t,n,a.aQ)}return e.de=1+e.de|0,!0}function Iw(e,t){var n=e.aP.a.length;if(e.gO=Rw(e,t),e.de===0)e.aP=new(Mu.r()).C(t);else{e.aP=z().V(e.aP,t);for(var r=new Au(null,0,null),i=new Au(null,0,null);n<t;){for(var a=0;a<n;){var o=e.aP.a[a];if(o!==null){r.aQ=null,i.aQ=null;for(var s=r,c=i,l=o;l!==null;){var u=l.aQ;(l.cs&n)===0?(s.aQ=l,s=l):(c.aQ=l,c=l),l=u}s.aQ=null,o!==r.aQ&&(e.aP.a[a]=r.aQ),i.aQ!==null&&(e.aP.a[a+n|0]=i.aQ,c.aQ=null)}a=1+a|0}n<<=1}}}function Lw(e,t){var n=-1+t|0,r=n>4?n:4,i=(-2147483648>>(Math.clz32(r)|0)&r)<<1;return i<1073741824?i:1073741824}function Rw(e,t){return na(t*e.gN)}function zw(e,t,n){return e.gN=n,e.aP=new(Mu.r()).C(Lw(e,t)),e.gO=Rw(e,e.aP.a.length),e.de=0,e}function Bw(e){return zw(e,16,.75),e}function Vw(){this.gN=0,this.aP=null,this.gO=0,this.de=0}M=Vw.prototype=new Cw,M.constructor=Vw;function Hw(){}Hw.prototype=M,M.aJ=(function(){return this.de}),M.fO=(function(e){return e^(e>>>16|0)}),M.bU=(function(e){var t=this.fO(G().P(e)),n=this.aP.a[t&(-1+this.aP.a.length|0)];return(n===null?null:n.mU(e,t))!==null}),M.aY=(function(e){var t=Lw(this,na((1+e|0)/this.gN));t>this.aP.a.length&&Iw(this,t)}),M.fF=(function(e){return(1+this.de|0)>=this.gO&&Iw(this,this.aP.a.length<<1),Fw(this,e,this.fO(G().P(e)))}),M.k1=(function(e){if(nh(this,e,0),e instanceof Vw){for(var t=new dx(e);t.l();){var n=t.g();Fw(this,n.ec,n.cs)}return this}else return zf(this,e)}),M.k=(function(){return new lx(this)}),M.ba=(function(){return oh()}),M.z=(function(){return this.de}),M.c=(function(){return this.de===0}),M.bI=(function(){return`HashSet`}),M.A=(function(){var e=new lx(this),t=e.l()?new px(this):e;return K().hu(t,K().jV)}),M.aS=(function(e){return this.fF(e),this}),M.aW=(function(e){return this.k1(e)}),new F().i(Vw,`scala.collection.mutable.HashSet`,{bT:1,fX:1,eC:1,i:1,e:1,b:1,h:1,c:1,g:1,aF:1,f2:1,f:1,d:1,gl:1,I:1,gm:1,G:1,A:1,L:1,H:1,F:1,at:1,k:1,a:1});function Uw(){}M=Uw.prototype=new ew,M.constructor=Uw;function Ww(){}Ww.prototype=M,M.eY=(function(e){return Ib().h6(e,this.ac())}),M.f3=(function(){return Ib().fN(this.ac())}),M.ca=(function(e){return nS(this,e)}),M.fI=(function(e){return aw(this,e)}),M.ei=(function(e){return ow(this,e)}),M.bc=(function(){return`IndexedSeq`}),M.bn=(function(e){var t=this.q();return t===e?0:t<e?-1:1}),M.z=(function(){return this.q()}),M.ds=(function(){return Ib().gx}),M.nn=(function(e){for(var t=new P(this.q()),n=0;n<t.a.length;)t.a[n]=e.i(this.u(n)),n=1+n|0;return Ib().hv(t)}),M.bI=(function(){return`ArraySeq`}),M.by=(function(e,t,n){var r=this.q(),i=vl().bJ(e),a=n<r?n:r,o=i-t|0,s=a<o?a:o,c=s>0?s:0;return c>0&&Ef().eT(this.cc(),0,e,t,c),c}),M.fH=(function(){return 2147483647}),M.eX=(function(e){return Ib().h6(e,this.ac())}),M.bX=(function(e){return this.nn(e)}),M.ba=(function(){return Ib().gx});function Gw(e,t){return e.d=t,e}function Kw(){this.d=null}M=Kw.prototype=new ew,M.constructor=Kw;function qw(){}qw.prototype=M,M.ca=(function(e){return nS(this,e)}),M.fI=(function(e){return aw(this,e)}),M.ei=(function(e){return ow(this,e)}),M.bc=(function(){return`IndexedSeq`}),M.bn=(function(e){var t=this.q();return t===e?0:t<e?-1:1}),M.z=(function(){return this.q()}),M.ds=(function(){return Uv()}),M.q=(function(){return this instanceof UT?this.j:this.d.a.length}),M.k=(function(){return tE()===this?Uv().jz:new ex(this,this.q(),this.ce())}),M.bI=(function(){return`Vector`}),M.by=(function(e,t,n){return this.k().by(e,t,n)}),M.fH=(function(){return Uv().jy}),M.aC=(function(e){return su().f1(e,-1+this.q()|0)}),M.b9=(function(e){for(var t=this.ce(),n=0;n<t;){var r=H(),i=n,a=t/2|0,o=i-a|0;r.h4(-1+((1+a|0)-(o<0?-o|0:o)|0)|0,this.cd(n),e),n=1+n|0}}),M.ba=(function(){return Uv()});function Jw(){}M=Jw.prototype=new lw,M.constructor=Jw;function Yw(){}Yw.prototype=M,M.ca=(function(e){return kb(this,e)}),M.bc=(function(){return`IndexedSeq`}),M.bn=(function(e){var t=this.q();return t===e?0:t<e?-1:1}),M.z=(function(){return this.q()}),M.ds=(function(){return cx().gM}),M.kQ=(function(e){var t=this.ac(),n=null,r=t.aI(),i=r===Oa.l();n=[],e.z();for(var a=e.k();a.l();){var o=a.g(),s=i?pa(o):o===null?r.Q.z:o;n.push(s)}var c=cx(),l=r===Ea.l()?pl.l():r===Bu.l()||r===fh.l()?I.l():r;return c.hh(l.Q.r().w(n))}),M.f3=(function(){return cx().fN(this.ac())}),M.bI=(function(){return`ArraySeq`}),M.by=(function(e,t,n){var r=this.q(),i=vl().bJ(e),a=n<r?n:r,o=i-t|0,s=a<o?a:o,c=s>0?s:0;return c>0&&Ef().eT(this.bH(),0,e,t,c),c}),M.w=(function(e){return e instanceof Jw&&vl().bJ(this.bH())!==vl().bJ(e.bH())?!1:TC(this,e)}),M.eX=(function(e){return this.kQ(e)}),M.eY=(function(e){return this.kQ(e)}),M.ba=(function(){return cx().gM});function Xw(e){this.cN=null,this.cN=e}M=Xw.prototype=new Ww,M.constructor=Xw;function Zw(){}Zw.prototype=M,M.q=(function(){return this.cN.a.length}),M.A=(function(){var e=K();return e.kk(this.cN,e.ag)}),M.w=(function(e){return e instanceof Xw?z().kF(this.cN,e.cN):TC(this,e)}),M.k=(function(){return new zx(this.cN)}),M.eS=(function(e){return this.cN.a[e]}),M.i=(function(e){return this.eS(e|0)}),M.u=(function(e){return this.eS(e)}),M.ac=(function(){return PS()}),M.cc=(function(){return this.cN}),new F().i(Xw,`scala.collection.immutable.ArraySeq$ofBoolean`,{bn:1,U:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,y:1,p:1,q:1,B:1,z:1,s:1,k:1,Z:1,a:1});function Qw(e){this.cO=null,this.cO=e}M=Qw.prototype=new Ww,M.constructor=Qw;function $w(){}$w.prototype=M,M.q=(function(){return this.cO.a.length}),M.eK=(function(e){return this.cO.a[e]}),M.A=(function(){var e=K();return e.kc(this.cO,e.ag)}),M.w=(function(e){return e instanceof Qw?z().kz(this.cO,e.cO):TC(this,e)}),M.k=(function(){return new Cx(this.cO)}),M.i=(function(e){return this.eK(e|0)}),M.u=(function(e){return this.eK(e)}),M.ac=(function(){return RS()}),M.cc=(function(){return this.cO}),new F().i(Qw,`scala.collection.immutable.ArraySeq$ofByte`,{bo:1,U:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,y:1,p:1,q:1,B:1,z:1,s:1,k:1,Z:1,a:1});function eT(e){this.ci=null,this.ci=e}M=eT.prototype=new Ww,M.constructor=eT;function tT(){}tT.prototype=M,M.q=(function(){return this.ci.a.length}),M.eL=(function(e){return this.ci.a[e]}),M.A=(function(){var e=K();return e.kd(this.ci,e.ag)}),M.w=(function(e){return e instanceof eT?z().kA(this.ci,e.ci):TC(this,e)}),M.k=(function(){return new Tx(this.ci)}),M.di=(function(e,t,n,r){return new ET(this.ci).di(e,t,n,r)}),M.i=(function(e){return fa(this.eL(e|0))}),M.u=(function(e){return fa(this.eL(e))}),M.ac=(function(){return HS()}),M.cc=(function(){return this.ci}),new F().i(eT,`scala.collection.immutable.ArraySeq$ofChar`,{bp:1,U:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,y:1,p:1,q:1,B:1,z:1,s:1,k:1,Z:1,a:1});function nT(e){this.cP=null,this.cP=e}M=nT.prototype=new Ww,M.constructor=nT;function rT(){}rT.prototype=M,M.q=(function(){return this.cP.a.length}),M.A=(function(){var e=K();return e.ke(this.cP,e.ag)}),M.w=(function(e){return e instanceof nT?z().kB(this.cP,e.cP):TC(this,e)}),M.k=(function(){return new Dx(this.cP)}),M.eN=(function(e){return this.cP.a[e]}),M.i=(function(e){return this.eN(e|0)}),M.u=(function(e){return this.eN(e)}),M.ac=(function(){return KS()}),M.cc=(function(){return this.cP}),new F().i(nT,`scala.collection.immutable.ArraySeq$ofDouble`,{bq:1,U:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,y:1,p:1,q:1,B:1,z:1,s:1,k:1,Z:1,a:1});function iT(e){this.cQ=null,this.cQ=e}M=iT.prototype=new Ww,M.constructor=iT;function aT(){}aT.prototype=M,M.q=(function(){return this.cQ.a.length}),M.A=(function(){var e=K();return e.kf(this.cQ,e.ag)}),M.w=(function(e){return e instanceof iT?z().kC(this.cQ,e.cQ):TC(this,e)}),M.k=(function(){return new kx(this.cQ)}),M.eO=(function(e){return this.cQ.a[e]}),M.i=(function(e){return this.eO(e|0)}),M.u=(function(e){return this.eO(e)}),M.ac=(function(){return XS()}),M.cc=(function(){return this.cQ}),new F().i(iT,`scala.collection.immutable.ArraySeq$ofFloat`,{br:1,U:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,y:1,p:1,q:1,B:1,z:1,s:1,k:1,Z:1,a:1});function oT(e){this.cR=null,this.cR=e}M=oT.prototype=new Ww,M.constructor=oT;function sT(){}sT.prototype=M,M.q=(function(){return this.cR.a.length}),M.A=(function(){var e=K();return e.kg(this.cR,e.ag)}),M.w=(function(e){return e instanceof oT?z().h1(this.cR,e.cR):TC(this,e)}),M.k=(function(){return new jx(this.cR)}),M.eP=(function(e){return this.cR.a[e]}),M.i=(function(e){return this.eP(e|0)}),M.u=(function(e){return this.eP(e)}),M.ac=(function(){return eC()}),M.cc=(function(){return this.cR}),new F().i(oT,`scala.collection.immutable.ArraySeq$ofInt`,{bs:1,U:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,y:1,p:1,q:1,B:1,z:1,s:1,k:1,Z:1,a:1});function cT(e){this.cS=null,this.cS=e}M=cT.prototype=new Ww,M.constructor=cT;function lT(){}lT.prototype=M,M.q=(function(){return this.cS.a.length}),M.A=(function(){var e=K();return e.kh(this.cS,e.ag)}),M.w=(function(e){return e instanceof cT?z().kD(this.cS,e.cS):TC(this,e)}),M.k=(function(){return new Nx(this.cS)}),M.eQ=(function(e){return this.cS.a[e]}),M.i=(function(e){return this.eQ(e|0)}),M.u=(function(e){return this.eQ(e)}),M.ac=(function(){return iC()}),M.cc=(function(){return this.cS}),new F().i(cT,`scala.collection.immutable.ArraySeq$ofLong`,{bt:1,U:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,y:1,p:1,q:1,B:1,z:1,s:1,k:1,Z:1,a:1});function uT(e){this.c3=null,this.c3=e}M=uT.prototype=new Ww,M.constructor=uT;function dT(){}dT.prototype=M,M.ac=(function(){return Uf().k9(Yi(this.c3).Q.Q())}),M.q=(function(){return this.c3.a.length}),M.u=(function(e){return this.c3.a[e]}),M.A=(function(){var e=K();return e.kb(this.c3,e.ag)}),M.w=(function(e){return e instanceof uT?Ef().kG(this.c3,e.c3):TC(this,e)}),M.k=(function(){return vb(new yb,this.c3)}),M.i=(function(e){return this.u(e|0)}),M.cc=(function(){return this.c3}),new F().i(uT,`scala.collection.immutable.ArraySeq$ofRef`,{bu:1,U:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,y:1,p:1,q:1,B:1,z:1,s:1,k:1,Z:1,a:1});function fT(e){this.cT=null,this.cT=e}M=fT.prototype=new Ww,M.constructor=fT;function pT(){}pT.prototype=M,M.q=(function(){return this.cT.a.length}),M.eM=(function(e){return this.cT.a[e]}),M.A=(function(){var e=K();return e.ki(this.cT,e.ag)}),M.w=(function(e){return e instanceof fT?z().kE(this.cT,e.cT):TC(this,e)}),M.k=(function(){return new Fx(this.cT)}),M.i=(function(e){return this.eM(e|0)}),M.u=(function(e){return this.eM(e)}),M.ac=(function(){return bC()}),M.cc=(function(){return this.cT}),new F().i(fT,`scala.collection.immutable.ArraySeq$ofShort`,{bv:1,U:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,y:1,p:1,q:1,B:1,z:1,s:1,k:1,Z:1,a:1});function mT(e){this.dA=null,this.dA=e}M=mT.prototype=new Ww,M.constructor=mT;function hT(){}hT.prototype=M,M.q=(function(){return this.dA.a.length}),M.A=(function(){var e=K();return e.kj(this.dA,e.ag)}),M.w=(function(e){return e instanceof mT?this.dA.a.length===e.dA.a.length:TC(this,e)}),M.k=(function(){return new Lx(this.dA)}),M.eR=(function(e){}),M.i=(function(e){this.eR(e|0)}),M.u=(function(e){this.eR(e)}),M.ac=(function(){return wC()}),M.cc=(function(){return this.dA}),new F().i(mT,`scala.collection.immutable.ArraySeq$ofUnit`,{bw:1,U:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,y:1,p:1,q:1,B:1,z:1,s:1,k:1,Z:1,a:1});function gT(e,t,n,r){for(;;)if(t===r)return n.c()?0:1;else if(n.c())return-1;else{var i=1+t|0,a=n.s();t=i,n=a}}function _T(e,t,n){for(;;)if(t===n)return!0;else{var r=t.c(),i=n.c();if(!(r||i)&&U().p(t.x(),n.x())){var a=t.s(),o=n.s();t=a,n=o}else return r&&i}}function vT(){}M=vT.prototype=new ew,M.constructor=vT;function yT(){}yT.prototype=M,M.ca=(function(e){return nS(this,e)}),M.k=(function(){return new J_(this)}),M.bc=(function(){return`LinearSeq`}),M.u=(function(e){return W_(this,e)}),M.ei=(function(e){return G_(this,e)}),M.ds=(function(){return Dv()}),M.jW=(function(e){if(this.c())return e;if(e.c())return this;for(var t=new qT(e.x(),this),n=t,r=e.s();!r.c();){var i=new qT(r.x(),this);n.ar=i,n=i,r=r.s()}return t}),M.c=(function(){return this===$()}),M.hp=(function(e){if(e instanceof vT)return this.jW(e);if(e.z()===0)return this;if(e instanceof vE&&this.c())return e.lm();var t=e.k();if(t.l()){for(var n=new qT(t.g(),this),r=n;t.l();){var i=new qT(t.g(),this);r.ar=i,r=i}return n}else return this}),M.k7=(function(e){return e instanceof vT?e.jW(this):Ab(this,e)}),M.np=(function(e){if(this===$())return $();for(var t=new qT(e.i(this.x()),$()),n=t,r=this.s();r!==$();){var i=new qT(e.i(r.x()),$());n.ar=i,n=i,r=r.s()}return t}),M.b9=(function(e){for(var t=this;!t.c();)e.i(t.x()),t=t.s()}),M.q=(function(){for(var e=this,t=0;!e.c();)t=1+t|0,e=e.s();return t}),M.bn=(function(e){return e<0?1:gT(this,0,this,e)}),M.bU=(function(e){for(var t=this;!t.c();){if(U().p(t.x(),e))return!0;t=t.s()}return!1}),M.bI=(function(){return`List`}),M.w=(function(e){return e instanceof vT?_T(this,this,e):TC(this,e)}),M.i=(function(e){return W_(this,e|0)}),M.kw=(function(e){return tS(this,e,this)}),M.bX=(function(e){return this.np(e)}),M.ba=(function(){return Dv()});function bT(){this.d=null}M=bT.prototype=new qw,M.constructor=bT;function xT(){}xT.prototype=M;function ST(e){this.d6=null,this.d6=e}M=ST.prototype=new Yw,M.constructor=ST;function CT(){}CT.prototype=M,M.q=(function(){return this.d6.a.length}),M.A=(function(){var e=K();return e.kk(this.d6,e.ag)}),M.w=(function(e){return e instanceof ST?z().kF(this.d6,e.d6):Jw.prototype.w.call(this,e)}),M.k=(function(){return new zx(this.d6)}),M.eS=(function(e){return this.d6.a[e]}),M.i=(function(e){return this.eS(e|0)}),M.u=(function(e){return this.eS(e)}),M.ac=(function(){return PS()}),M.bH=(function(){return this.d6}),new F().i(ST,`scala.collection.mutable.ArraySeq$ofBoolean`,{bJ:1,V:1,K:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,M:1,I:1,N:1,G:1,A:1,Q:1,p:1,q:1,R:1,s:1,k:1,a:1});function wT(e){this.d7=null,this.d7=e}M=wT.prototype=new Yw,M.constructor=wT;function TT(){}TT.prototype=M,M.q=(function(){return this.d7.a.length}),M.eK=(function(e){return this.d7.a[e]}),M.A=(function(){var e=K();return e.kc(this.d7,e.ag)}),M.w=(function(e){return e instanceof wT?z().kz(this.d7,e.d7):Jw.prototype.w.call(this,e)}),M.k=(function(){return new Cx(this.d7)}),M.i=(function(e){return this.eK(e|0)}),M.u=(function(e){return this.eK(e)}),M.ac=(function(){return RS()}),M.bH=(function(){return this.d7}),new F().i(wT,`scala.collection.mutable.ArraySeq$ofByte`,{bK:1,V:1,K:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,M:1,I:1,N:1,G:1,A:1,Q:1,p:1,q:1,R:1,s:1,k:1,a:1});function ET(e){this.bx=null,this.bx=e}M=ET.prototype=new Yw,M.constructor=ET;function DT(){}DT.prototype=M,M.q=(function(){return this.bx.a.length}),M.eL=(function(e){return this.bx.a[e]}),M.A=(function(){var e=K();return e.kd(this.bx,e.ag)}),M.w=(function(e){return e instanceof ET?z().kA(this.bx,e.bx):Jw.prototype.w.call(this,e)}),M.k=(function(){return new Tx(this.bx)}),M.di=(function(e,t,n,r){var i=e.aR;t.length!==0&&(i.n=``+i.n+t);var a=this.bx.a.length;if(a!==0)if(n===``)i.k5(this.bx);else{i.q();var o=this.bx.a[0],s=``+ra(o);i.n+=s;for(var c=1;c<a;){i.n=``+i.n+n;var l=this.bx.a[c],u=``+ra(l);i.n+=u,c=1+c|0}}return r.length!==0&&(i.n=``+i.n+r),e}),M.i=(function(e){return fa(this.eL(e|0))}),M.u=(function(e){return fa(this.eL(e))}),M.ac=(function(){return HS()}),M.bH=(function(){return this.bx}),new F().i(ET,`scala.collection.mutable.ArraySeq$ofChar`,{bL:1,V:1,K:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,M:1,I:1,N:1,G:1,A:1,Q:1,p:1,q:1,R:1,s:1,k:1,a:1});function OT(e){this.d8=null,this.d8=e}M=OT.prototype=new Yw,M.constructor=OT;function kT(){}kT.prototype=M,M.q=(function(){return this.d8.a.length}),M.A=(function(){var e=K();return e.ke(this.d8,e.ag)}),M.w=(function(e){return e instanceof OT?z().kB(this.d8,e.d8):Jw.prototype.w.call(this,e)}),M.k=(function(){return new Dx(this.d8)}),M.eN=(function(e){return this.d8.a[e]}),M.i=(function(e){return this.eN(e|0)}),M.u=(function(e){return this.eN(e)}),M.ac=(function(){return KS()}),M.bH=(function(){return this.d8}),new F().i(OT,`scala.collection.mutable.ArraySeq$ofDouble`,{bM:1,V:1,K:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,M:1,I:1,N:1,G:1,A:1,Q:1,p:1,q:1,R:1,s:1,k:1,a:1});function AT(e){this.d9=null,this.d9=e}M=AT.prototype=new Yw,M.constructor=AT;function jT(){}jT.prototype=M,M.q=(function(){return this.d9.a.length}),M.A=(function(){var e=K();return e.kf(this.d9,e.ag)}),M.w=(function(e){return e instanceof AT?z().kC(this.d9,e.d9):Jw.prototype.w.call(this,e)}),M.k=(function(){return new kx(this.d9)}),M.eO=(function(e){return this.d9.a[e]}),M.i=(function(e){return this.eO(e|0)}),M.u=(function(e){return this.eO(e)}),M.ac=(function(){return XS()}),M.bH=(function(){return this.d9}),new F().i(AT,`scala.collection.mutable.ArraySeq$ofFloat`,{bN:1,V:1,K:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,M:1,I:1,N:1,G:1,A:1,Q:1,p:1,q:1,R:1,s:1,k:1,a:1});function MT(e){this.da=null,this.da=e}M=MT.prototype=new Yw,M.constructor=MT;function NT(){}NT.prototype=M,M.q=(function(){return this.da.a.length}),M.A=(function(){var e=K();return e.kg(this.da,e.ag)}),M.w=(function(e){return e instanceof MT?z().h1(this.da,e.da):Jw.prototype.w.call(this,e)}),M.k=(function(){return new jx(this.da)}),M.eP=(function(e){return this.da.a[e]}),M.i=(function(e){return this.eP(e|0)}),M.u=(function(e){return this.eP(e)}),M.ac=(function(){return eC()}),M.bH=(function(){return this.da}),new F().i(MT,`scala.collection.mutable.ArraySeq$ofInt`,{bO:1,V:1,K:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,M:1,I:1,N:1,G:1,A:1,Q:1,p:1,q:1,R:1,s:1,k:1,a:1});function PT(e){this.db=null,this.db=e}M=PT.prototype=new Yw,M.constructor=PT;function FT(){}FT.prototype=M,M.q=(function(){return this.db.a.length}),M.A=(function(){var e=K();return e.kh(this.db,e.ag)}),M.w=(function(e){return e instanceof PT?z().kD(this.db,e.db):Jw.prototype.w.call(this,e)}),M.k=(function(){return new Nx(this.db)}),M.eQ=(function(e){return this.db.a[e]}),M.i=(function(e){return this.eQ(e|0)}),M.u=(function(e){return this.eQ(e)}),M.ac=(function(){return iC()}),M.bH=(function(){return this.db}),new F().i(PT,`scala.collection.mutable.ArraySeq$ofLong`,{bP:1,V:1,K:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,M:1,I:1,N:1,G:1,A:1,Q:1,p:1,q:1,R:1,s:1,k:1,a:1});function IT(e){this.cq=null,this.cq=e}M=IT.prototype=new Yw,M.constructor=IT;function LT(){}LT.prototype=M,M.ac=(function(){return Uf().k9(Yi(this.cq).Q.Q())}),M.q=(function(){return this.cq.a.length}),M.u=(function(e){return this.cq.a[e]}),M.A=(function(){var e=K();return e.kb(this.cq,e.ag)}),M.w=(function(e){return e instanceof IT?Ef().kG(this.cq,e.cq):Jw.prototype.w.call(this,e)}),M.k=(function(){return vb(new yb,this.cq)}),M.i=(function(e){return this.u(e|0)}),M.bH=(function(){return this.cq}),new F().i(IT,`scala.collection.mutable.ArraySeq$ofRef`,{bQ:1,V:1,K:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,M:1,I:1,N:1,G:1,A:1,Q:1,p:1,q:1,R:1,s:1,k:1,a:1});function RT(e){this.dc=null,this.dc=e}M=RT.prototype=new Yw,M.constructor=RT;function zT(){}zT.prototype=M,M.q=(function(){return this.dc.a.length}),M.eM=(function(e){return this.dc.a[e]}),M.A=(function(){var e=K();return e.ki(this.dc,e.ag)}),M.w=(function(e){return e instanceof RT?z().kE(this.dc,e.dc):Jw.prototype.w.call(this,e)}),M.k=(function(){return new Fx(this.dc)}),M.i=(function(e){return this.eM(e|0)}),M.u=(function(e){return this.eM(e)}),M.ac=(function(){return bC()}),M.bH=(function(){return this.dc}),new F().i(RT,`scala.collection.mutable.ArraySeq$ofShort`,{bR:1,V:1,K:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,M:1,I:1,N:1,G:1,A:1,Q:1,p:1,q:1,R:1,s:1,k:1,a:1});function BT(e){this.dG=null,this.dG=e}M=BT.prototype=new Yw,M.constructor=BT;function VT(){}VT.prototype=M,M.q=(function(){return this.dG.a.length}),M.A=(function(){var e=K();return e.kj(this.dG,e.ag)}),M.w=(function(e){return e instanceof BT?this.dG.a.length===e.dG.a.length:Jw.prototype.w.call(this,e)}),M.k=(function(){return new Lx(this.dG)}),M.eR=(function(e){}),M.i=(function(e){this.eR(e|0)}),M.u=(function(e){this.eR(e)}),M.ac=(function(){return wC()}),M.bH=(function(){return this.dG}),new F().i(BT,`scala.collection.mutable.ArraySeq$ofUnit`,{bS:1,V:1,K:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,M:1,I:1,N:1,G:1,A:1,Q:1,p:1,q:1,R:1,s:1,k:1,a:1});function HT(e,t,n,r){return e.h=n,e.j=r,Gw(e,t),e}function UT(){this.d=null,this.h=null,this.j=0}M=UT.prototype=new xT,M.constructor=UT;function WT(){}WT.prototype=M;function GT(e){this.d=null,Gw(this,e)}M=GT.prototype=new xT,M.constructor=GT;function KT(){}KT.prototype=M,M.u=(function(e){if(e>=0&&e<this.d.a.length)return this.d.a[e];throw this.aC(e)}),M.dt=(function(e,t){if(e>=0&&e<this.d.a.length){var n=this.d.f();return n.a[e]=t,new GT(n)}else throw this.aC(e)}),M.dj=(function(e){if(this.d.a.length<32)return new GT(H().ee(this.d,e));var t=this.d,n=H().b8,r=new P(1);return r.a[0]=e,new nE(t,32,n,r,33)}),M.bY=(function(e){return new GT(H().bK(this.d,e))}),M.ce=(function(){return 1}),M.cd=(function(e){return this.d}),M.bX=(function(e){return this.bY(e)}),M.i=(function(e){var t=e|0;if(t>=0&&t<this.d.a.length)return this.d.a[t];throw this.aC(t)}),new F().i(GT,`scala.collection.immutable.Vector1`,{fN:1,ac:1,a6:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,y:1,p:1,q:1,B:1,z:1,s:1,k:1,T:1,a:1});function qT(e,t){this.gu=null,this.ar=null,this.gu=e,this.ar=t}M=qT.prototype=new yT,M.constructor=qT;function JT(){}JT.prototype=M,M.x=(function(){return this.gu}),M.cE=(function(){return`::`}),M.cC=(function(){return 2}),M.cD=(function(e){switch(e){case 0:return this.gu;case 1:return this.ar;default:return G().f2(e)}}),M.dO=(function(){return new Ay(this)}),M.s=(function(){return this.ar}),new F().i(qT,`scala.collection.immutable.$colon$colon`,{f9:1,aI:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,aG:1,an:1,aC:1,aH:1,bm:1,s:1,k:1,z:1,T:1,a:1,a9:1});function YT(){}M=YT.prototype=new yT,M.constructor=YT;function XT(){}XT.prototype=M,M.hf=(function(){throw new l_(`head of empty list`)}),M.o9=(function(){throw new s_(`tail of empty list`)}),M.z=(function(){return 0}),M.k=(function(){return J().K}),M.cE=(function(){return`Nil`}),M.cC=(function(){return 0}),M.cD=(function(e){return G().f2(e)}),M.dO=(function(){return new Ay(this)}),M.s=(function(){this.o9()}),M.x=(function(){this.hf()}),new F().i(YT,`scala.collection.immutable.Nil$`,{fD:1,aI:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,aG:1,an:1,aC:1,aH:1,bm:1,s:1,k:1,z:1,T:1,a:1,a9:1});var ZT;function $(){return ZT||=new YT,ZT}function QT(){this.d=null,this.h=null,this.j=0,HT(this,H().gH,H().gH,0)}M=QT.prototype=new WT,M.constructor=QT;function $T(){}$T.prototype=M,M.k8=(function(e){throw this.aC(e)}),M.dt=(function(e,t){throw this.aC(e)}),M.dj=(function(e){var t=new P(1);return t.a[0]=e,new GT(t)}),M.ce=(function(){return 0}),M.cd=(function(e){return null}),M.w=(function(e){return this===e||!(e instanceof Kw)&&TC(this,e)}),M.aC=(function(e){return e_(new t_,e+` is out of bounds (empty vector)`)}),M.bX=(function(e){return this}),M.i=(function(e){this.k8(e|0)}),M.u=(function(e){this.k8(e)}),new F().i(QT,`scala.collection.immutable.Vector0$`,{fM:1,ab:1,ac:1,a6:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,y:1,p:1,q:1,B:1,z:1,s:1,k:1,T:1,a:1});var eE;function tE(){return eE||=new QT,eE}function nE(e,t,n,r,i){this.d=null,this.h=null,this.j=0,this.bm=0,this.b2=null,this.bm=t,this.b2=n,HT(this,e,r,i)}M=nE.prototype=new WT,M.constructor=nE;function rE(){}rE.prototype=M,M.u=(function(e){if(e>=0&&e<this.j){var t=e-this.bm|0;if(t>=0){var n=t>>>5|0,r=31&t;return n<this.b2.a.length?this.b2.a[n].a[r]:this.h.a[31&t]}else return this.d.a[e]}else throw this.aC(e)}),M.dt=(function(e,t){if(e>=0&&e<this.j)if(e>=this.bm){var n=e-this.bm|0,r=n>>>5|0,i=31&n;if(r<this.b2.a.length){var a=this.b2.f(),o=a.a[r].f();return o.a[i]=t,a.a[r]=o,new nE(this.d,this.bm,a,this.h,this.j)}else{var s=this.h.f();return s.a[i]=t,new nE(this.d,this.bm,this.b2,s,this.j)}}else{var c=this.d.f();return c.a[e]=t,new nE(c,this.bm,this.b2,this.h,this.j)}else throw this.aC(e)}),M.dj=(function(e){if(this.h.a.length<32){var t=H().ee(this.h,e),n=1+this.j|0;return new nE(this.d,this.bm,this.b2,t,n)}else if(this.b2.a.length<30){var r=H().E(this.b2,this.h),i=new P(1);i.a[0]=e;var a=1+this.j|0;return new nE(this.d,this.bm,r,i,a)}else{var o=this.d,s=this.bm,c=this.b2,l=this.bm,u=H().c7,d=this.h,f=new(I.r().r()).C(1);f.a[0]=d;var p=new P(1);return p.a[0]=e,new iE(o,s,c,960+l|0,u,f,p,1+this.j|0)}}),M.bY=(function(e){var t=H().bK(this.d,e),n=H().a2(2,this.b2,e),r=H().bK(this.h,e);return new nE(t,this.bm,n,r,this.j)}),M.ce=(function(){return 3}),M.cd=(function(e){switch(e){case 0:return this.d;case 1:return this.b2;case 2:return this.h;default:throw new g_(e)}}),M.bX=(function(e){return this.bY(e)}),M.i=(function(e){var t=e|0;if(t>=0&&t<this.j){var n=t-this.bm|0;if(n>=0){var r=n>>>5|0,i=31&n;return r<this.b2.a.length?this.b2.a[r].a[i]:this.h.a[31&n]}else return this.d.a[t]}else throw this.aC(t)}),new F().i(nE,`scala.collection.immutable.Vector2`,{fO:1,ab:1,ac:1,a6:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,y:1,p:1,q:1,B:1,z:1,s:1,k:1,T:1,a:1});function iE(e,t,n,r,i,a,o,s){this.d=null,this.h=null,this.j=0,this.aZ=0,this.b7=null,this.b0=0,this.aN=null,this.aO=null,this.aZ=t,this.b7=n,this.b0=r,this.aN=i,this.aO=a,HT(this,e,o,s)}M=iE.prototype=new WT,M.constructor=iE;function aE(){}aE.prototype=M,M.u=(function(e){if(e>=0&&e<this.j){var t=e-this.b0|0;if(t>=0){var n=t>>>10|0,r=31&(t>>>5|0),i=31&t;return n<this.aN.a.length?this.aN.a[n].a[r].a[i]:r<this.aO.a.length?this.aO.a[r].a[i]:this.h.a[i]}else if(e>=this.aZ){var a=e-this.aZ|0;return this.b7.a[a>>>5|0].a[31&a]}else return this.d.a[e]}else throw this.aC(e)}),M.dt=(function(e,t){if(e>=0&&e<this.j)if(e>=this.b0){var n=e-this.b0|0,r=n>>>10|0,i=31&(n>>>5|0),a=31&n;if(r<this.aN.a.length){var o=this.aN.f(),s=o.a[r].f(),c=s.a[i].f();return c.a[a]=t,s.a[i]=c,o.a[r]=s,new iE(this.d,this.aZ,this.b7,this.b0,o,this.aO,this.h,this.j)}else if(i<this.aO.a.length){var l=this.aO.f(),u=l.a[i].f();return u.a[a]=t,l.a[i]=u,new iE(this.d,this.aZ,this.b7,this.b0,this.aN,l,this.h,this.j)}else{var d=this.h.f();return d.a[a]=t,new iE(this.d,this.aZ,this.b7,this.b0,this.aN,this.aO,d,this.j)}}else if(e>=this.aZ){var f=e-this.aZ|0,p=this.b7,m=f>>>5|0,h=31&f,g=p.f(),_=g.a[m].f();return _.a[h]=t,g.a[m]=_,new iE(this.d,this.aZ,g,this.b0,this.aN,this.aO,this.h,this.j)}else{var v=this.d.f();return v.a[e]=t,new iE(v,this.aZ,this.b7,this.b0,this.aN,this.aO,this.h,this.j)}else throw this.aC(e)}),M.dj=(function(e){if(this.h.a.length<32){var t=H().ee(this.h,e),n=1+this.j|0;return new iE(this.d,this.aZ,this.b7,this.b0,this.aN,this.aO,t,n)}else if(this.aO.a.length<31){var r=H().E(this.aO,this.h),i=new P(1);i.a[0]=e;var a=1+this.j|0;return new iE(this.d,this.aZ,this.b7,this.b0,this.aN,r,i,a)}else if(this.aN.a.length<30){var o=H().E(this.aN,H().E(this.aO,this.h)),s=H().b8,c=new P(1);c.a[0]=e;var l=1+this.j|0;return new iE(this.d,this.aZ,this.b7,this.b0,o,s,c,l)}else{var u=this.d,d=this.aZ,f=this.b7,p=this.b0,m=this.aN,h=this.b0,g=H().ea,_=H().E(this.aO,this.h),v=new(I.r().r().r()).C(1);v.a[0]=_;var y=H().b8,b=new P(1);return b.a[0]=e,new oE(u,d,f,p,m,30720+h|0,g,v,y,b,1+this.j|0)}}),M.bY=(function(e){var t=H().bK(this.d,e),n=H().a2(2,this.b7,e),r=H().a2(3,this.aN,e),i=H().a2(2,this.aO,e),a=H().bK(this.h,e);return new iE(t,this.aZ,n,this.b0,r,i,a,this.j)}),M.ce=(function(){return 5}),M.cd=(function(e){switch(e){case 0:return this.d;case 1:return this.b7;case 2:return this.aN;case 3:return this.aO;case 4:return this.h;default:throw new g_(e)}}),M.bX=(function(e){return this.bY(e)}),M.i=(function(e){var t=e|0;if(t>=0&&t<this.j){var n=t-this.b0|0;if(n>=0){var r=n>>>10|0,i=31&(n>>>5|0),a=31&n;return r<this.aN.a.length?this.aN.a[r].a[i].a[a]:i<this.aO.a.length?this.aO.a[i].a[a]:this.h.a[a]}else if(t>=this.aZ){var o=t-this.aZ|0;return this.b7.a[o>>>5|0].a[31&o]}else return this.d.a[t]}else throw this.aC(t)}),new F().i(iE,`scala.collection.immutable.Vector3`,{fP:1,ab:1,ac:1,a6:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,y:1,p:1,q:1,B:1,z:1,s:1,k:1,T:1,a:1});function oE(e,t,n,r,i,a,o,s,c,l,u){this.d=null,this.h=null,this.j=0,this.aE=0,this.aU=null,this.aF=0,this.aV=null,this.aG=0,this.at=null,this.av=null,this.au=null,this.aE=t,this.aU=n,this.aF=r,this.aV=i,this.aG=a,this.at=o,this.av=s,this.au=c,HT(this,e,l,u)}M=oE.prototype=new WT,M.constructor=oE;function sE(){}sE.prototype=M,M.u=(function(e){if(e>=0&&e<this.j){var t=e-this.aG|0;if(t>=0){var n=t>>>15|0,r=31&(t>>>10|0),i=31&(t>>>5|0),a=31&t;return n<this.at.a.length?this.at.a[n].a[r].a[i].a[a]:r<this.av.a.length?this.av.a[r].a[i].a[a]:i<this.au.a.length?this.au.a[i].a[a]:this.h.a[a]}else if(e>=this.aF){var o=e-this.aF|0;return this.aV.a[o>>>10|0].a[31&(o>>>5|0)].a[31&o]}else if(e>=this.aE){var s=e-this.aE|0;return this.aU.a[s>>>5|0].a[31&s]}else return this.d.a[e]}else throw this.aC(e)}),M.dt=(function(e,t){if(e>=0&&e<this.j)if(e>=this.aG){var n=e-this.aG|0,r=n>>>15|0,i=31&(n>>>10|0),a=31&(n>>>5|0),o=31&n;if(r<this.at.a.length){var s=this.at.f(),c=s.a[r].f(),l=c.a[i].f(),u=l.a[a].f();return u.a[o]=t,l.a[a]=u,c.a[i]=l,s.a[r]=c,new oE(this.d,this.aE,this.aU,this.aF,this.aV,this.aG,s,this.av,this.au,this.h,this.j)}else if(i<this.av.a.length){var d=this.av.f(),f=d.a[i].f(),p=f.a[a].f();return p.a[o]=t,f.a[a]=p,d.a[i]=f,new oE(this.d,this.aE,this.aU,this.aF,this.aV,this.aG,this.at,d,this.au,this.h,this.j)}else if(a<this.au.a.length){var m=this.au.f(),h=m.a[a].f();return h.a[o]=t,m.a[a]=h,new oE(this.d,this.aE,this.aU,this.aF,this.aV,this.aG,this.at,this.av,m,this.h,this.j)}else{var g=this.h.f();return g.a[o]=t,new oE(this.d,this.aE,this.aU,this.aF,this.aV,this.aG,this.at,this.av,this.au,g,this.j)}}else if(e>=this.aF){var _=e-this.aF|0,v=this.aV,y=_>>>10|0,b=31&(_>>>5|0),ee=31&_,te=v.f(),x=te.a[y].f(),S=x.a[b].f();return S.a[ee]=t,x.a[b]=S,te.a[y]=x,new oE(this.d,this.aE,this.aU,this.aF,te,this.aG,this.at,this.av,this.au,this.h,this.j)}else if(e>=this.aE){var C=e-this.aE|0,ne=this.aU,re=C>>>5|0,ie=31&C,ae=ne.f(),w=ae.a[re].f();return w.a[ie]=t,ae.a[re]=w,new oE(this.d,this.aE,ae,this.aF,this.aV,this.aG,this.at,this.av,this.au,this.h,this.j)}else{var T=this.d.f();return T.a[e]=t,new oE(T,this.aE,this.aU,this.aF,this.aV,this.aG,this.at,this.av,this.au,this.h,this.j)}else throw this.aC(e)}),M.dj=(function(e){if(this.h.a.length<32){var t=H().ee(this.h,e),n=1+this.j|0;return new oE(this.d,this.aE,this.aU,this.aF,this.aV,this.aG,this.at,this.av,this.au,t,n)}else if(this.au.a.length<31){var r=H().E(this.au,this.h),i=new P(1);i.a[0]=e;var a=1+this.j|0;return new oE(this.d,this.aE,this.aU,this.aF,this.aV,this.aG,this.at,this.av,r,i,a)}else if(this.av.a.length<31){var o=H().E(this.av,H().E(this.au,this.h)),s=H().b8,c=new P(1);c.a[0]=e;var l=1+this.j|0;return new oE(this.d,this.aE,this.aU,this.aF,this.aV,this.aG,this.at,o,s,c,l)}else if(this.at.a.length<30){var u=H().E(this.at,H().E(this.av,H().E(this.au,this.h))),d=H().c7,f=H().b8,p=new P(1);p.a[0]=e;var m=1+this.j|0;return new oE(this.d,this.aE,this.aU,this.aF,this.aV,this.aG,u,d,f,p,m)}else{var h=this.d,g=this.aE,_=this.aU,v=this.aF,y=this.aV,b=this.aG,ee=this.at,te=this.aG,x=H().gI,S=H().E(this.av,H().E(this.au,this.h)),C=new(I.r().r().r().r()).C(1);C.a[0]=S;var ne=H().c7,re=H().b8,ie=new P(1);return ie.a[0]=e,new cE(h,g,_,v,y,b,ee,983040+te|0,x,C,ne,re,ie,1+this.j|0)}}),M.bY=(function(e){var t=H().bK(this.d,e),n=H().a2(2,this.aU,e),r=H().a2(3,this.aV,e),i=H().a2(4,this.at,e),a=H().a2(3,this.av,e),o=H().a2(2,this.au,e),s=H().bK(this.h,e);return new oE(t,this.aE,n,this.aF,r,this.aG,i,a,o,s,this.j)}),M.ce=(function(){return 7}),M.cd=(function(e){switch(e){case 0:return this.d;case 1:return this.aU;case 2:return this.aV;case 3:return this.at;case 4:return this.av;case 5:return this.au;case 6:return this.h;default:throw new g_(e)}}),M.bX=(function(e){return this.bY(e)}),M.i=(function(e){var t=e|0;if(t>=0&&t<this.j){var n=t-this.aG|0;if(n>=0){var r=n>>>15|0,i=31&(n>>>10|0),a=31&(n>>>5|0),o=31&n;return r<this.at.a.length?this.at.a[r].a[i].a[a].a[o]:i<this.av.a.length?this.av.a[i].a[a].a[o]:a<this.au.a.length?this.au.a[a].a[o]:this.h.a[o]}else if(t>=this.aF){var s=t-this.aF|0;return this.aV.a[s>>>10|0].a[31&(s>>>5|0)].a[31&s]}else if(t>=this.aE){var c=t-this.aE|0;return this.aU.a[c>>>5|0].a[31&c]}else return this.d.a[t]}else throw this.aC(t)}),new F().i(oE,`scala.collection.immutable.Vector4`,{fQ:1,ab:1,ac:1,a6:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,y:1,p:1,q:1,B:1,z:1,s:1,k:1,T:1,a:1});function cE(e,t,n,r,i,a,o,s,c,l,u,d,f,p){this.d=null,this.h=null,this.j=0,this.aj=0,this.ay=null,this.ak=0,this.az=null,this.al=0,this.aA=null,this.am=0,this.a4=null,this.a7=null,this.a6=null,this.a5=null,this.aj=t,this.ay=n,this.ak=r,this.az=i,this.al=a,this.aA=o,this.am=s,this.a4=c,this.a7=l,this.a6=u,this.a5=d,HT(this,e,f,p)}M=cE.prototype=new WT,M.constructor=cE;function lE(){}lE.prototype=M,M.u=(function(e){if(e>=0&&e<this.j){var t=e-this.am|0;if(t>=0){var n=t>>>20|0,r=31&(t>>>15|0),i=31&(t>>>10|0),a=31&(t>>>5|0),o=31&t;return n<this.a4.a.length?this.a4.a[n].a[r].a[i].a[a].a[o]:r<this.a7.a.length?this.a7.a[r].a[i].a[a].a[o]:i<this.a6.a.length?this.a6.a[i].a[a].a[o]:a<this.a5.a.length?this.a5.a[a].a[o]:this.h.a[o]}else if(e>=this.al){var s=e-this.al|0;return this.aA.a[s>>>15|0].a[31&(s>>>10|0)].a[31&(s>>>5|0)].a[31&s]}else if(e>=this.ak){var c=e-this.ak|0;return this.az.a[c>>>10|0].a[31&(c>>>5|0)].a[31&c]}else if(e>=this.aj){var l=e-this.aj|0;return this.ay.a[l>>>5|0].a[31&l]}else return this.d.a[e]}else throw this.aC(e)}),M.dt=(function(e,t){if(e>=0&&e<this.j)if(e>=this.am){var n=e-this.am|0,r=n>>>20|0,i=31&(n>>>15|0),a=31&(n>>>10|0),o=31&(n>>>5|0),s=31&n;if(r<this.a4.a.length){var c=this.a4.f(),l=c.a[r].f(),u=l.a[i].f(),d=u.a[a].f(),f=d.a[o].f();return f.a[s]=t,d.a[o]=f,u.a[a]=d,l.a[i]=u,c.a[r]=l,new cE(this.d,this.aj,this.ay,this.ak,this.az,this.al,this.aA,this.am,c,this.a7,this.a6,this.a5,this.h,this.j)}else if(i<this.a7.a.length){var p=this.a7.f(),m=p.a[i].f(),h=m.a[a].f(),g=h.a[o].f();return g.a[s]=t,h.a[o]=g,m.a[a]=h,p.a[i]=m,new cE(this.d,this.aj,this.ay,this.ak,this.az,this.al,this.aA,this.am,this.a4,p,this.a6,this.a5,this.h,this.j)}else if(a<this.a6.a.length){var _=this.a6.f(),v=_.a[a].f(),y=v.a[o].f();return y.a[s]=t,v.a[o]=y,_.a[a]=v,new cE(this.d,this.aj,this.ay,this.ak,this.az,this.al,this.aA,this.am,this.a4,this.a7,_,this.a5,this.h,this.j)}else if(o<this.a5.a.length){var b=this.a5.f(),ee=b.a[o].f();return ee.a[s]=t,b.a[o]=ee,new cE(this.d,this.aj,this.ay,this.ak,this.az,this.al,this.aA,this.am,this.a4,this.a7,this.a6,b,this.h,this.j)}else{var te=this.h.f();return te.a[s]=t,new cE(this.d,this.aj,this.ay,this.ak,this.az,this.al,this.aA,this.am,this.a4,this.a7,this.a6,this.a5,te,this.j)}}else if(e>=this.al){var x=e-this.al|0,S=this.aA,C=x>>>15|0,ne=31&(x>>>10|0),re=31&(x>>>5|0),ie=31&x,ae=S.f(),w=ae.a[C].f(),T=w.a[ne].f(),E=T.a[re].f();return E.a[ie]=t,T.a[re]=E,w.a[ne]=T,ae.a[C]=w,new cE(this.d,this.aj,this.ay,this.ak,this.az,this.al,ae,this.am,this.a4,this.a7,this.a6,this.a5,this.h,this.j)}else if(e>=this.ak){var oe=e-this.ak|0,se=this.az,ce=oe>>>10|0,le=31&(oe>>>5|0),ue=31&oe,de=se.f(),fe=de.a[ce].f(),pe=fe.a[le].f();return pe.a[ue]=t,fe.a[le]=pe,de.a[ce]=fe,new cE(this.d,this.aj,this.ay,this.ak,de,this.al,this.aA,this.am,this.a4,this.a7,this.a6,this.a5,this.h,this.j)}else if(e>=this.aj){var me=e-this.aj|0,he=this.ay,ge=me>>>5|0,_e=31&me,ve=he.f(),ye=ve.a[ge].f();return ye.a[_e]=t,ve.a[ge]=ye,new cE(this.d,this.aj,ve,this.ak,this.az,this.al,this.aA,this.am,this.a4,this.a7,this.a6,this.a5,this.h,this.j)}else{var be=this.d.f();return be.a[e]=t,new cE(be,this.aj,this.ay,this.ak,this.az,this.al,this.aA,this.am,this.a4,this.a7,this.a6,this.a5,this.h,this.j)}else throw this.aC(e)}),M.dj=(function(e){if(this.h.a.length<32){var t=H().ee(this.h,e),n=1+this.j|0;return new cE(this.d,this.aj,this.ay,this.ak,this.az,this.al,this.aA,this.am,this.a4,this.a7,this.a6,this.a5,t,n)}else if(this.a5.a.length<31){var r=H().E(this.a5,this.h),i=new P(1);i.a[0]=e;var a=1+this.j|0;return new cE(this.d,this.aj,this.ay,this.ak,this.az,this.al,this.aA,this.am,this.a4,this.a7,this.a6,r,i,a)}else if(this.a6.a.length<31){var o=H().E(this.a6,H().E(this.a5,this.h)),s=H().b8,c=new P(1);c.a[0]=e;var l=1+this.j|0;return new cE(this.d,this.aj,this.ay,this.ak,this.az,this.al,this.aA,this.am,this.a4,this.a7,o,s,c,l)}else if(this.a7.a.length<31){var u=H().E(this.a7,H().E(this.a6,H().E(this.a5,this.h))),d=H().c7,f=H().b8,p=new P(1);p.a[0]=e;var m=1+this.j|0;return new cE(this.d,this.aj,this.ay,this.ak,this.az,this.al,this.aA,this.am,this.a4,u,d,f,p,m)}else if(this.a4.a.length<30){var h=H().E(this.a4,H().E(this.a7,H().E(this.a6,H().E(this.a5,this.h)))),g=H().ea,_=H().c7,v=H().b8,y=new P(1);y.a[0]=e;var b=1+this.j|0;return new cE(this.d,this.aj,this.ay,this.ak,this.az,this.al,this.aA,this.am,h,g,_,v,y,b)}else{var ee=this.d,te=this.aj,x=this.ay,S=this.ak,C=this.az,ne=this.al,re=this.aA,ie=this.am,ae=this.a4,w=this.am,T=H().jA,E=H().E(this.a7,H().E(this.a6,H().E(this.a5,this.h))),oe=new(I.r().r().r().r().r()).C(1);oe.a[0]=E;var se=H().ea,ce=H().c7,le=H().b8,ue=new P(1);return ue.a[0]=e,new uE(ee,te,x,S,C,ne,re,ie,ae,31457280+w|0,T,oe,se,ce,le,ue,1+this.j|0)}}),M.bY=(function(e){var t=H().bK(this.d,e),n=H().a2(2,this.ay,e),r=H().a2(3,this.az,e),i=H().a2(4,this.aA,e),a=H().a2(5,this.a4,e),o=H().a2(4,this.a7,e),s=H().a2(3,this.a6,e),c=H().a2(2,this.a5,e),l=H().bK(this.h,e);return new cE(t,this.aj,n,this.ak,r,this.al,i,this.am,a,o,s,c,l,this.j)}),M.ce=(function(){return 9}),M.cd=(function(e){switch(e){case 0:return this.d;case 1:return this.ay;case 2:return this.az;case 3:return this.aA;case 4:return this.a4;case 5:return this.a7;case 6:return this.a6;case 7:return this.a5;case 8:return this.h;default:throw new g_(e)}}),M.bX=(function(e){return this.bY(e)}),M.i=(function(e){var t=e|0;if(t>=0&&t<this.j){var n=t-this.am|0;if(n>=0){var r=n>>>20|0,i=31&(n>>>15|0),a=31&(n>>>10|0),o=31&(n>>>5|0),s=31&n;return r<this.a4.a.length?this.a4.a[r].a[i].a[a].a[o].a[s]:i<this.a7.a.length?this.a7.a[i].a[a].a[o].a[s]:a<this.a6.a.length?this.a6.a[a].a[o].a[s]:o<this.a5.a.length?this.a5.a[o].a[s]:this.h.a[s]}else if(t>=this.al){var c=t-this.al|0;return this.aA.a[c>>>15|0].a[31&(c>>>10|0)].a[31&(c>>>5|0)].a[31&c]}else if(t>=this.ak){var l=t-this.ak|0;return this.az.a[l>>>10|0].a[31&(l>>>5|0)].a[31&l]}else if(t>=this.aj){var u=t-this.aj|0;return this.ay.a[u>>>5|0].a[31&u]}else return this.d.a[t]}else throw this.aC(t)}),new F().i(cE,`scala.collection.immutable.Vector5`,{fR:1,ab:1,ac:1,a6:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,y:1,p:1,q:1,B:1,z:1,s:1,k:1,T:1,a:1});function uE(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){this.d=null,this.h=null,this.j=0,this.a8=0,this.an=null,this.a9=0,this.ao=null,this.aa=0,this.ap=null,this.ab=0,this.aq=null,this.af=0,this.X=null,this.a1=null,this.a0=null,this.Z=null,this.Y=null,this.a8=t,this.an=n,this.a9=r,this.ao=i,this.aa=a,this.ap=o,this.ab=s,this.aq=c,this.af=l,this.X=u,this.a1=d,this.a0=f,this.Z=p,this.Y=m,HT(this,e,h,g)}M=uE.prototype=new WT,M.constructor=uE;function dE(){}dE.prototype=M,M.u=(function(e){if(e>=0&&e<this.j){var t=e-this.af|0;if(t>=0){var n=t>>>25|0,r=31&(t>>>20|0),i=31&(t>>>15|0),a=31&(t>>>10|0),o=31&(t>>>5|0),s=31&t;return n<this.X.a.length?this.X.a[n].a[r].a[i].a[a].a[o].a[s]:r<this.a1.a.length?this.a1.a[r].a[i].a[a].a[o].a[s]:i<this.a0.a.length?this.a0.a[i].a[a].a[o].a[s]:a<this.Z.a.length?this.Z.a[a].a[o].a[s]:o<this.Y.a.length?this.Y.a[o].a[s]:this.h.a[s]}else if(e>=this.ab){var c=e-this.ab|0;return this.aq.a[c>>>20|0].a[31&(c>>>15|0)].a[31&(c>>>10|0)].a[31&(c>>>5|0)].a[31&c]}else if(e>=this.aa){var l=e-this.aa|0;return this.ap.a[l>>>15|0].a[31&(l>>>10|0)].a[31&(l>>>5|0)].a[31&l]}else if(e>=this.a9){var u=e-this.a9|0;return this.ao.a[u>>>10|0].a[31&(u>>>5|0)].a[31&u]}else if(e>=this.a8){var d=e-this.a8|0;return this.an.a[d>>>5|0].a[31&d]}else return this.d.a[e]}else throw this.aC(e)}),M.dt=(function(e,t){if(e>=0&&e<this.j)if(e>=this.af){var n=e-this.af|0,r=n>>>25|0,i=31&(n>>>20|0),a=31&(n>>>15|0),o=31&(n>>>10|0),s=31&(n>>>5|0),c=31&n;if(r<this.X.a.length){var l=this.X.f(),u=l.a[r].f(),d=u.a[i].f(),f=d.a[a].f(),p=f.a[o].f(),m=p.a[s].f();return m.a[c]=t,p.a[s]=m,f.a[o]=p,d.a[a]=f,u.a[i]=d,l.a[r]=u,new uE(this.d,this.a8,this.an,this.a9,this.ao,this.aa,this.ap,this.ab,this.aq,this.af,l,this.a1,this.a0,this.Z,this.Y,this.h,this.j)}else if(i<this.a1.a.length){var h=this.a1.f(),g=h.a[i].f(),_=g.a[a].f(),v=_.a[o].f(),y=v.a[s].f();return y.a[c]=t,v.a[s]=y,_.a[o]=v,g.a[a]=_,h.a[i]=g,new uE(this.d,this.a8,this.an,this.a9,this.ao,this.aa,this.ap,this.ab,this.aq,this.af,this.X,h,this.a0,this.Z,this.Y,this.h,this.j)}else if(a<this.a0.a.length){var b=this.a0.f(),ee=b.a[a].f(),te=ee.a[o].f(),x=te.a[s].f();return x.a[c]=t,te.a[s]=x,ee.a[o]=te,b.a[a]=ee,new uE(this.d,this.a8,this.an,this.a9,this.ao,this.aa,this.ap,this.ab,this.aq,this.af,this.X,this.a1,b,this.Z,this.Y,this.h,this.j)}else if(o<this.Z.a.length){var S=this.Z.f(),C=S.a[o].f(),ne=C.a[s].f();return ne.a[c]=t,C.a[s]=ne,S.a[o]=C,new uE(this.d,this.a8,this.an,this.a9,this.ao,this.aa,this.ap,this.ab,this.aq,this.af,this.X,this.a1,this.a0,S,this.Y,this.h,this.j)}else if(s<this.Y.a.length){var re=this.Y.f(),ie=re.a[s].f();return ie.a[c]=t,re.a[s]=ie,new uE(this.d,this.a8,this.an,this.a9,this.ao,this.aa,this.ap,this.ab,this.aq,this.af,this.X,this.a1,this.a0,this.Z,re,this.h,this.j)}else{var ae=this.h.f();return ae.a[c]=t,new uE(this.d,this.a8,this.an,this.a9,this.ao,this.aa,this.ap,this.ab,this.aq,this.af,this.X,this.a1,this.a0,this.Z,this.Y,ae,this.j)}}else if(e>=this.ab){var w=e-this.ab|0,T=this.aq,E=w>>>20|0,oe=31&(w>>>15|0),se=31&(w>>>10|0),ce=31&(w>>>5|0),le=31&w,ue=T.f(),de=ue.a[E].f(),fe=de.a[oe].f(),pe=fe.a[se].f(),me=pe.a[ce].f();return me.a[le]=t,pe.a[ce]=me,fe.a[se]=pe,de.a[oe]=fe,ue.a[E]=de,new uE(this.d,this.a8,this.an,this.a9,this.ao,this.aa,this.ap,this.ab,ue,this.af,this.X,this.a1,this.a0,this.Z,this.Y,this.h,this.j)}else if(e>=this.aa){var he=e-this.aa|0,ge=this.ap,_e=he>>>15|0,ve=31&(he>>>10|0),ye=31&(he>>>5|0),be=31&he,xe=ge.f(),Se=xe.a[_e].f(),Ce=Se.a[ve].f(),we=Ce.a[ye].f();return we.a[be]=t,Ce.a[ye]=we,Se.a[ve]=Ce,xe.a[_e]=Se,new uE(this.d,this.a8,this.an,this.a9,this.ao,this.aa,xe,this.ab,this.aq,this.af,this.X,this.a1,this.a0,this.Z,this.Y,this.h,this.j)}else if(e>=this.a9){var D=e-this.a9|0,Te=this.ao,Ee=D>>>10|0,De=31&(D>>>5|0),Oe=31&D,ke=Te.f(),Ae=ke.a[Ee].f(),je=Ae.a[De].f();return je.a[Oe]=t,Ae.a[De]=je,ke.a[Ee]=Ae,new uE(this.d,this.a8,this.an,this.a9,ke,this.aa,this.ap,this.ab,this.aq,this.af,this.X,this.a1,this.a0,this.Z,this.Y,this.h,this.j)}else if(e>=this.a8){var Me=e-this.a8|0,Ne=this.an,Pe=Me>>>5|0,Fe=31&Me,Ie=Ne.f(),Le=Ie.a[Pe].f();return Le.a[Fe]=t,Ie.a[Pe]=Le,new uE(this.d,this.a8,Ie,this.a9,this.ao,this.aa,this.ap,this.ab,this.aq,this.af,this.X,this.a1,this.a0,this.Z,this.Y,this.h,this.j)}else{var Re=this.d.f();return Re.a[e]=t,new uE(Re,this.a8,this.an,this.a9,this.ao,this.aa,this.ap,this.ab,this.aq,this.af,this.X,this.a1,this.a0,this.Z,this.Y,this.h,this.j)}else throw this.aC(e)}),M.dj=(function(e){if(this.h.a.length<32){var t=H().ee(this.h,e),n=1+this.j|0;return new uE(this.d,this.a8,this.an,this.a9,this.ao,this.aa,this.ap,this.ab,this.aq,this.af,this.X,this.a1,this.a0,this.Z,this.Y,t,n)}else if(this.Y.a.length<31){var r=H().E(this.Y,this.h),i=new P(1);i.a[0]=e;var a=1+this.j|0;return new uE(this.d,this.a8,this.an,this.a9,this.ao,this.aa,this.ap,this.ab,this.aq,this.af,this.X,this.a1,this.a0,this.Z,r,i,a)}else if(this.Z.a.length<31){var o=H().E(this.Z,H().E(this.Y,this.h)),s=H().b8,c=new P(1);c.a[0]=e;var l=1+this.j|0;return new uE(this.d,this.a8,this.an,this.a9,this.ao,this.aa,this.ap,this.ab,this.aq,this.af,this.X,this.a1,this.a0,o,s,c,l)}else if(this.a0.a.length<31){var u=H().E(this.a0,H().E(this.Z,H().E(this.Y,this.h))),d=H().c7,f=H().b8,p=new P(1);p.a[0]=e;var m=1+this.j|0;return new uE(this.d,this.a8,this.an,this.a9,this.ao,this.aa,this.ap,this.ab,this.aq,this.af,this.X,this.a1,u,d,f,p,m)}else if(this.a1.a.length<31){var h=H().E(this.a1,H().E(this.a0,H().E(this.Z,H().E(this.Y,this.h)))),g=H().ea,_=H().c7,v=H().b8,y=new P(1);y.a[0]=e;var b=1+this.j|0;return new uE(this.d,this.a8,this.an,this.a9,this.ao,this.aa,this.ap,this.ab,this.aq,this.af,this.X,h,g,_,v,y,b)}else if(this.X.a.length<62){var ee=H().E(this.X,H().E(this.a1,H().E(this.a0,H().E(this.Z,H().E(this.Y,this.h))))),te=H().gI,x=H().ea,S=H().c7,C=H().b8,ne=new P(1);ne.a[0]=e;var re=1+this.j|0;return new uE(this.d,this.a8,this.an,this.a9,this.ao,this.aa,this.ap,this.ab,this.aq,this.af,ee,te,x,S,C,ne,re)}else throw Zg(new Qg)}),M.bY=(function(e){var t=H().bK(this.d,e),n=H().a2(2,this.an,e),r=H().a2(3,this.ao,e),i=H().a2(4,this.ap,e),a=H().a2(5,this.aq,e),o=H().a2(6,this.X,e),s=H().a2(5,this.a1,e),c=H().a2(4,this.a0,e),l=H().a2(3,this.Z,e),u=H().a2(2,this.Y,e),d=H().bK(this.h,e);return new uE(t,this.a8,n,this.a9,r,this.aa,i,this.ab,a,this.af,o,s,c,l,u,d,this.j)}),M.ce=(function(){return 11}),M.cd=(function(e){switch(e){case 0:return this.d;case 1:return this.an;case 2:return this.ao;case 3:return this.ap;case 4:return this.aq;case 5:return this.X;case 6:return this.a1;case 7:return this.a0;case 8:return this.Z;case 9:return this.Y;case 10:return this.h;default:throw new g_(e)}}),M.bX=(function(e){return this.bY(e)}),M.i=(function(e){var t=e|0;if(t>=0&&t<this.j){var n=t-this.af|0;if(n>=0){var r=n>>>25|0,i=31&(n>>>20|0),a=31&(n>>>15|0),o=31&(n>>>10|0),s=31&(n>>>5|0),c=31&n;return r<this.X.a.length?this.X.a[r].a[i].a[a].a[o].a[s].a[c]:i<this.a1.a.length?this.a1.a[i].a[a].a[o].a[s].a[c]:a<this.a0.a.length?this.a0.a[a].a[o].a[s].a[c]:o<this.Z.a.length?this.Z.a[o].a[s].a[c]:s<this.Y.a.length?this.Y.a[s].a[c]:this.h.a[c]}else if(t>=this.ab){var l=t-this.ab|0;return this.aq.a[l>>>20|0].a[31&(l>>>15|0)].a[31&(l>>>10|0)].a[31&(l>>>5|0)].a[31&l]}else if(t>=this.aa){var u=t-this.aa|0;return this.ap.a[u>>>15|0].a[31&(u>>>10|0)].a[31&(u>>>5|0)].a[31&u]}else if(t>=this.a9){var d=t-this.a9|0;return this.ao.a[d>>>10|0].a[31&(d>>>5|0)].a[31&d]}else if(t>=this.a8){var f=t-this.a8|0;return this.an.a[f>>>5|0].a[31&f]}else return this.d.a[t]}else throw this.aC(t)}),new F().i(uE,`scala.collection.immutable.Vector6`,{fS:1,ab:1,ac:1,a6:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,y:1,p:1,q:1,B:1,z:1,s:1,k:1,T:1,a:1});function fE(e,t){return e.aR=t,e}function pE(e){return fE(e,qh(new Yh)),e}function mE(){this.aR=null}M=mE.prototype=new lw,M.constructor=mE;function hE(){}hE.prototype=M,M.bc=(function(){return`IndexedSeq`}),M.k=(function(){return Sb(new Cb,new ZC(this))}),M.bn=(function(e){var t=this.aR.q();return t===e?0:t<e?-1:1}),M.aY=(function(e){}),M.aW=(function(e){return zf(this,e)}),M.q=(function(){return this.aR.q()}),M.z=(function(){return this.aR.q()}),M.m4=(function(e){var t=this.aR,n=``+ra(e);return t.n+=n,this}),M.H=(function(){return this.aR.n}),M.k6=(function(e){if(e instanceof ET)this.aR.k5(e.bx);else if(e instanceof mE){var t=this.aR,n=e.aR;t.n=``+t.n+n}else{var r=e.z();if(r!==0){var i=this.aR;r>0&&i.q();for(var a=e.k();a.l();){var o=``+ra(pa(a.g()));i.n+=o}}}return this}),M.c=(function(){return this.aR.q()===0}),M.ba=(function(){return by()}),M.aX=(function(){return this.aR.n}),M.aS=(function(e){return this.m4(pa(e))}),M.eX=(function(e){return pE(new mE).k6(e)}),M.eY=(function(e){return pE(new mE).k6(e)}),M.i=(function(e){var t=e|0;return fa(this.aR.kl(t))}),M.u=(function(e){return fa(this.aR.kl(e))}),new F().i(mE,`scala.collection.mutable.StringBuilder`,{bW:1,K:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,M:1,I:1,N:1,G:1,A:1,a7:1,L:1,H:1,F:1,Q:1,p:1,q:1,R:1,ay:1,a:1});function gE(e){var t=new vE().fP(e);e.bF=t.bF,e.ct=t.ct,e.fw=!1}function _E(e){e.fx=1+e.fx|0,e.fw&&gE(e)}function vE(){this.fx=0,this.bF=null,this.ct=null,this.fw=!1,this.bG=0,this.fx=0,this.bF=$(),this.ct=null,this.fw=!1,this.bG=0}M=vE.prototype=new Pw,M.constructor=vE;function yE(){}yE.prototype=M,M.aY=(function(e){}),M.ca=(function(e){return kb(this,e)}),M.k=(function(){return new Ty(this.bF.k(),new sh((()=>this.fx)))}),M.ds=(function(){return wy()}),M.u=(function(e){return W_(this.bF,e)}),M.q=(function(){return this.bG}),M.z=(function(){return this.bG}),M.c=(function(){return this.bG===0}),M.lm=(function(){return this.fw=!this.c(),this.bF}),M.mc=(function(e){_E(this);var t=new qT(e,$());return this.bG===0?this.bF=t:this.ct.ar=t,this.ct=t,this.bG=1+this.bG|0,this}),M.fP=(function(e){var t=e.k();if(t.l()){var n=1,r=new qT(t.g(),$());for(this.bF=r;t.l();){var i=new qT(t.g(),$());r.ar=i,r=i,n=1+n|0}this.bG=n,this.ct=r}return this}),M.m3=(function(e){var t=e.k();if(t.l()){var n=new vE().fP(t);_E(this),this.bG===0?this.bF=n.bF:this.ct.ar=n.bF,this.ct=n.ct,this.bG=this.bG+n.bG|0}return this}),M.bc=(function(){return`ListBuffer`}),M.aW=(function(e){return this.m3(e)}),M.aS=(function(e){return this.mc(e)}),M.aX=(function(){return this.lm()}),M.i=(function(e){var t=e|0;return W_(this.bF,t)}),M.ba=(function(){return wy()}),new F().i(vE,`scala.collection.mutable.ListBuffer`,{bV:1,aK:1,K:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,M:1,I:1,N:1,G:1,A:1,aL:1,H:1,F:1,at:1,s:1,k:1,a7:1,L:1,T:1,a:1});function bE(e,t,n){return e.d5=0,e.d4=t,e.aw=n,e}function xE(e){return bE(e,new P(16),0),e}function SE(){this.d5=0,this.d4=null,this.aw=0}M=SE.prototype=new Pw,M.constructor=SE;function CE(){}CE.prototype=M,M.ca=(function(e){return kb(this,e)}),M.k=(function(){return this.og().k()}),M.bn=(function(e){var t=this.aw;return t===e?0:t<e?-1:1}),M.z=(function(){return this.aw}),M.h0=(function(e){this.d4=ny().le(this.d4,this.aw,e)}),M.aY=(function(e){e>this.aw&&e>=1&&this.h0(e)}),M.u=(function(e){var t=1+e|0;if(e<0)throw su().f1(e,-1+this.aw|0);if(t>this.aw)throw su().f1(-1+t|0,-1+this.aw|0);return this.d4.a[e]}),M.oe=(function(e,t){var n=1+e|0;if(e<0)throw su().f1(e,-1+this.aw|0);if(n>this.aw)throw su().f1(-1+n|0,-1+this.aw|0);this.d5=1+this.d5|0,this.d4.a[e]=t}),M.q=(function(){return this.aw}),M.og=(function(){return new tw(this,new sh((()=>this.d5)))}),M.ds=(function(){return ny()}),M.m9=(function(e){this.d5=1+this.d5|0;var t=1+this.aw|0;return this.h0(t),this.aw=t,this.oe(-1+this.aw|0,e),this}),M.k0=(function(e){if(e instanceof SE){var t=e.aw;t>0&&(this.d5=1+this.d5|0,this.h0(this.aw+t|0),Ef().eT(e.d4,0,this.d4,this.aw,t),this.aw=this.aw+t|0)}else zf(this,e);return this}),M.bc=(function(){return`ArrayBuffer`}),M.by=(function(e,t,n){var r=this.aw,i=vl().bJ(e),a=n<r?n:r,o=i-t|0,s=a<o?a:o,c=s>0?s:0;return c>0&&Ef().eT(this.d4,0,e,t,c),c}),M.aW=(function(e){return this.k0(e)}),M.aS=(function(e){return this.m9(e)}),M.ba=(function(){return ny()}),M.i=(function(e){return this.u(e|0)}),new F().i(SE,`scala.collection.mutable.ArrayBuffer`,{bI:1,aK:1,K:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,M:1,I:1,N:1,G:1,A:1,aL:1,H:1,F:1,at:1,bU:1,Q:1,p:1,q:1,R:1,s:1,k:1,T:1,a:1});function wE(e,t){return e.dg=t,e}function TE(e){return wE(e,[]),e}function EE(){this.dg=null}M=EE.prototype=new Pw,M.constructor=EE;function DE(){}DE.prototype=M,M.aY=(function(e){}),M.bc=(function(){return`IndexedSeq`}),M.k=(function(){return Sb(new Cb,new ZC(this))}),M.bn=(function(e){var t=this.dg.length|0;return t===e?0:t<e?-1:1}),M.ca=(function(e){return kb(this,e)}),M.ds=(function(){return Fy()}),M.u=(function(e){return this.dg[e]}),M.q=(function(){return this.dg.length|0}),M.z=(function(){return this.dg.length|0}),M.bI=(function(){return`WrappedArray`}),M.aX=(function(){return this}),M.aS=(function(e){return this.dg.push(e),this}),M.i=(function(e){var t=e|0;return this.dg[t]}),M.ba=(function(){return Fy()}),new F().i(EE,`scala.scalajs.js.WrappedArray`,{h5:1,aK:1,K:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,M:1,I:1,N:1,G:1,A:1,aL:1,H:1,F:1,at:1,s:1,k:1,Q:1,p:1,q:1,R:1,bU:1,L:1,a:1}),qi=new B(0,0),Ma.z=qi,ac(new(cb.r()).C([]));