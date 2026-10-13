var e=Object.defineProperty,t=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r};
/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const n=globalThis,r=n.ShadowRoot&&(n.ShadyCSS===void 0||n.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,i=Symbol(),a=/* @__PURE__ */ new WeakMap;var o=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(r&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=a.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&a.set(t,e))}return e}toString(){return this.cssText}};const s=e=>new o(typeof e==`string`?e:e+``,void 0,i),c=(e,...t)=>new o(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,i),l=(e,t)=>{if(r)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let r of t){let t=document.createElement(`style`),i=n.litNonce;i!==void 0&&t.setAttribute(`nonce`,i),t.textContent=r.cssText,e.appendChild(t)}},u=r?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return s(t)})(e):e,{is:d,defineProperty:f,getOwnPropertyDescriptor:p,getOwnPropertyNames:m,getOwnPropertySymbols:h,getPrototypeOf:g}=Object,_=globalThis,v=_.trustedTypes,y=v?v.emptyScript:``,ee=_.reactiveElementPolyfillSupport,b=(e,t)=>e,te={toAttribute(e,t){
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
switch(t){case Boolean:e=e?y:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},x=(e,t)=>!d(e,t),ne={attribute:!0,type:String,converter:te,reflect:!1,useDefault:!1,hasChanged:x};Symbol.metadata??=Symbol(`metadata`),_.litPropertyMetadata??=/* @__PURE__ */ new WeakMap;var S=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ne){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&f(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=p(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ne}static _$Ei(){if(this.hasOwnProperty(b(`elementProperties`)))return;let e=g(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(b(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b(`properties`))){let e=this.properties,t=[...m(e),...h(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=/* @__PURE__ */ new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(u(e))}else e!==void 0&&t.push(u(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=/* @__PURE__ */ new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=/* @__PURE__ */ new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=/* @__PURE__ */ new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return l(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?te:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?te:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??x)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=/* @__PURE__ */ new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=/* @__PURE__ */ new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=/* @__PURE__ */ new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};S.elementStyles=[],S.shadowRootOptions={mode:`open`},S[b(`elementProperties`)]=/* @__PURE__ */ new Map,S[b(`finalized`)]=/* @__PURE__ */ new Map,ee?.({ReactiveElement:S}),(_.reactiveElementVersions??=[]).push(`2.1.2`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const re=globalThis,ie=e=>e,ae=re.trustedTypes,oe=ae?ae.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,se=`$lit$`,ce=`lit$${Math.random().toFixed(9).slice(2)}$`,le=`?`+ce,ue=`<${le}>`,de=document,fe=()=>de.createComment(``),pe=e=>e===null||typeof e!=`object`&&typeof e!=`function`,me=Array.isArray,he=e=>me(e)||typeof e?.[Symbol.iterator]==`function`,ge=`[ 	
\f\r]`,_e=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ve=/-->/g,ye=/>/g,be=RegExp(`>|${ge}(?:([^\\s"'>=/]+)(${ge}*=${ge}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),xe=/'/g,Se=/"/g,Ce=/^(?:script|style|textarea|title)$/i,we=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),Te=Symbol.for(`lit-noChange`),C=Symbol.for(`lit-nothing`),Ee=/* @__PURE__ */ new WeakMap,De=de.createTreeWalker(de,129);function Oe(e,t){if(!me(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return oe===void 0?t:oe.createHTML(t)}const ke=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=_e;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===_e?c[1]===`!--`?o=ve:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=be):(Ce.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=be):o=ye:o===be?c[0]===`>`?(o=i??_e,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?be:c[3]===`"`?Se:xe):o===Se||o===xe?o=be:o===ve||o===ye?o=_e:(o=be,i=void 0);let d=o===be&&e[t+1].startsWith(`/>`)?` `:``;a+=o===_e?n+ue:l>=0?(r.push(s),n.slice(0,l)+se+n.slice(l)+ce+d):n+ce+(l===-2?t:d)}return[Oe(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]};var Ae=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=ke(t,n);if(this.el=e.createElement(l,r),De.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=De.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(se)){let t=u[o++],n=i.getAttribute(e).split(ce),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Fe:r[1]===`?`?Ie:r[1]===`@`?Le:Pe}),i.removeAttribute(e)}else e.startsWith(ce)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Ce.test(i.tagName)){let e=i.textContent.split(ce),t=e.length-1;if(t>0){i.textContent=ae?ae.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],fe()),De.nextNode(),c.push({type:2,index:++a});i.append(e[t],fe())}}}else if(i.nodeType===8){if(i.data===le)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(ce,e+1))!==-1;)c.push({type:7,index:a}),e+=ce.length-1}}a++}}static createElement(e,t){let n=de.createElement(`template`);return n.innerHTML=e,n}};function je(e,t,n=e,r){if(t===Te)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=pe(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=je(e,i._$AS(e,t.values),i,r)),t}var Me=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??de).importNode(t,!0);De.currentNode=r;let i=De.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Ne(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Re(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=De.nextNode(),a++)}return De.currentNode=de,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Ne=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=C,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=je(this,e,t),pe(e)?e===C||e==null||e===``?(this._$AH!==C&&this._$AR(),this._$AH=C):e!==this._$AH&&e!==Te&&this._(e):e._$litType$===void 0?e.nodeType===void 0?he(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==C&&pe(this._$AH)?this._$AA.nextSibling.data=e:this.T(de.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Ae.createElement(Oe(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Me(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Ee.get(e.strings);return t===void 0&&Ee.set(e.strings,t=new Ae(e)),t}k(t){me(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(fe()),this.O(fe()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=ie(e).nextSibling;ie(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Pe=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=C,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(/* @__PURE__ */ new String),this.strings=n):this._$AH=C}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=je(this,e,t,0),a=!pe(e)||e!==this._$AH&&e!==Te,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=je(this,r[n+o],t,o),s===Te&&(s=this._$AH[o]),a||=!pe(s)||s!==this._$AH[o],s===C?e=C:e!==C&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===C?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Fe=class extends Pe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===C?void 0:e}},Ie=class extends Pe{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==C)}},Le=class extends Pe{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=je(this,e,t,0)??C)===Te)return;let n=this._$AH,r=e===C&&n!==C||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==C&&(n===C||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Re=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){je(this,e)}};const ze={M:se,P:ce,A:le,C:1,L:ke,R:Me,D:he,V:je,I:Ne,H:Pe,N:Ie,U:Le,B:Fe,F:Re},Be=re.litHtmlPolyfillSupport;Be?.(Ae,Ne),(re.litHtmlVersions??=[]).push(`3.3.3`);const Ve=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Ne(t.insertBefore(fe(),e),e,void 0,n??{})}return i._$AI(e),i},He=globalThis
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
;var Ue=class extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ve(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Te}};Ue._$litElement$=!0,Ue.finalized=!0,He.litElementHydrateSupport?.({LitElement:Ue});const We=He.litElementPolyfillSupport;We?.({LitElement:Ue}),(He.litElementVersions??=[]).push(`4.2.2`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ge=c`
  :host {
    --color: var(--wa-color-surface-border);
    --width: var(--wa-border-width-s);
    --spacing: var(--wa-space-m);
    --label-spacing: var(--wa-space-s);
    --label-offset: 0;
  }

  :host(:not([orientation='vertical'])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([orientation='vertical']) {
    display: inline-block;
    height: 100%;
    border-inline-start: solid var(--width) var(--color);
    margin: 0 var(--spacing);
    min-block-size: 1lh;
  }

  /* With a label, the host's border gives way to two lines that flank the label */
  :host([with-label]) {
    align-items: center;
    gap: var(--label-spacing);
    border: none;
  }

  :host([with-label]:not([orientation='vertical'])) {
    display: flex;
  }

  :host([with-label][orientation='vertical']) {
    display: inline-flex;
    flex-direction: column;
  }

  :host([with-label])::before,
  :host([with-label])::after {
    content: '';
    flex: 1 1 0;
  }

  :host([with-label]:not([orientation='vertical']))::before,
  :host([with-label]:not([orientation='vertical']))::after {
    min-inline-size: 1em;
    border-top: solid var(--width) var(--color);
  }

  :host([with-label][orientation='vertical'])::before,
  :host([with-label][orientation='vertical'])::after {
    min-block-size: 1lh;
    border-inline-start: solid var(--width) var(--color);
  }

  :host([with-label][label-placement='start'])::before,
  :host([with-label][label-placement='end'])::after {
    flex: 0 0 var(--label-offset);
    min-inline-size: 0;
    min-block-size: 0;
  }

  :host(:not([with-label])) .label {
    display: none;
  }

  :host([with-label]) .label {
    display: inline-flex;
    align-items: center;
    gap: var(--wa-space-2xs);
    flex: 0 1 auto;
    color: var(--wa-color-text-quiet);
    font-size: var(--wa-font-size-s);
    line-height: var(--wa-line-height-condensed);
    text-align: center;
  }
`,Ke=class{constructor(e,...t){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return this.host.childNodes?[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===Node.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`wa-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1}):!1}hasNamedSlot(e){return this.host.querySelector?.(`:scope > [slot="${e}"]`)!==null}test(e,t){return t&&this.host.didSSR&&!this.host.hasUpdated?!!this.host[t]:e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){let e=this.host.shadowRoot;e&&`addEventListener`in e&&e.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){let e=this.host.shadowRoot;e&&`removeEventListener`in e&&e.removeEventListener(`slotchange`,this.handleSlotChange)}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function qe(e,t){let n={waitUntilFirstUpdate:!1,...t};return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Je=Object.defineProperty,Ye=Object.getOwnPropertyDescriptor,Xe=e=>{throw TypeError(e)},w=(e,t,n,r)=>{for(var i=r>1?void 0:r?Ye(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Je(t,n,i),i},Ze=(e,t,n)=>t.has(e)||Xe(`Cannot `+n),Qe=(e,t,n)=>(Ze(e,t,`read from private field`),n?n.call(e):t.get(e)),$e=(e,t,n)=>t.has(e)?Xe(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),et=(e,t,n,r)=>(Ze(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const tt=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},nt={attribute:!0,type:String,converter:te,reflect:!1,hasChanged:x},rt=(e=nt,t,n)=>{
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=/* @__PURE__ */ new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function T(e){return(t,n)=>typeof n==`object`?rt(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function it(e){return T({...e,state:!0,attribute:!1})}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const at=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function ot(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return at(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return at(n,r,{get(){return a(this)}})}}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var st=c`
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
`,ct=/;\s+$/;function lt(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function ut(e){let{property:t,value:n,element:r}=e;if(n){let e=r.getAttribute(`style`)||``;e&&(e.match(ct)||(e+=`;`),e+=` `);let i=`${t}: ${n}`;return e.includes(i)?void 0:`${e}${i};`}return null}var dt,ft=class extends Ue{constructor(){super(),$e(this,dt,!1),this.initialReflectedProperties=/* @__PURE__ */ new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,t)=>{if(this.internals?.states)try{t?this.internals.states.add(e):this.internals.states.delete(e)}catch(e){if(String(e).includes(`must start with '--'`))console.error(`Your browser implements an outdated version of CustomStateSet. Consider using a polyfill`);else throw e}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error(`Element internals are not supported in your browser. Consider using a polyfill`)}this.customStates.set(`wa-defined`,!0);let e=this.constructor;for(let[t,n]of e.elementProperties)n.default===`inherit`&&n.initial!==void 0&&typeof t==`string`&&this.customStates.set(`initial-${t}-${n.initial}`,!0)}static get styles(){return[st,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `)),this.didSSR&&this.updateComplete.then(()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `))})}attributeChangedCallback(e,t,n){Qe(this,dt)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),et(this,dt,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll(`slot`).forEach(e=>{e.dispatchEvent(new Event(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(e){if(this.didSSR&&!this.hasUpdated){let t=new Event(`lit-hydration-error`,{bubbles:!0,composed:!0,cancelable:!1});t.error=e,this.dispatchEvent(t)}throw e}}setStyle(e,t){if(this.style)this.style[e]=t;else{let n=ut({property:lt(e),value:t,element:this});n&&this.setAttribute(`style`,n)}}setStyleProperty(e,t){if(this.style)this.style.setProperty(e,t);else{let n=ut({property:e,value:t,element:this});n&&this.setAttribute(`style`,n)}}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};dt=/* @__PURE__ */ new WeakMap,w([T()],ft.prototype,`dir`,2),w([T()],ft.prototype,`lang`,2),w([T({type:Boolean,reflect:!0,attribute:`did-ssr`})],ft.prototype,`didSSR`,2);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var pt=class extends ft{constructor(){super(...arguments),this.hasSlotController=new Ke(this,`[default]`),this.orientation=`horizontal`,this.withLabel=!1,this.labelPlacement=`center`}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`separator`)}willUpdate(e){this.withLabel=this.hasSlotController.test(`[default]`,`withLabel`),super.willUpdate(e)}handleVerticalChange(){this.setAttribute(`aria-orientation`,this.orientation)}handleSlotChange(){this.internals&&(this.internals.ariaLabel=this.textContent?.trim()||null)}render(){return we`
      <div part="label" class="label">
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};pt.css=Ge,w([T({reflect:!0})],pt.prototype,`orientation`,2),w([T({attribute:`with-label`,type:Boolean,reflect:!0})],pt.prototype,`withLabel`,2),w([T({attribute:`label-placement`,reflect:!0})],pt.prototype,`labelPlacement`,2),w([qe(`orientation`)],pt.prototype,`handleVerticalChange`,1),pt=w([tt(`wa-divider`)],pt);var mt=/* @__PURE__ */ t({default:()=>pt}),ht=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-error`,{bubbles:!0,cancelable:!1,composed:!0})}},gt=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-load`,{bubbles:!0,cancelable:!1,composed:!0})}},_t=c`
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
`,vt=``,yt=``
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;function bt(){return vt.replace(/\/$/,``)}function xt(e){yt=e}function St(){if(!yt){let e=document.querySelector(`[data-fa-kit-code]`);e&&xt(e.getAttribute(`data-fa-kit-code`)||``)}return yt}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ct=`7.3.0`;function wt(e,t,n){let r=`solid`;return t===`chisel`&&(r=`chisel-regular`),t===`etch`&&(r=`etch-solid`),t===`graphite`&&(r=`graphite-thin`),t===`jelly`&&(r=`jelly-regular`,n===`duo-regular`&&(r=`jelly-duo-regular`),n===`fill-regular`&&(r=`jelly-fill-regular`)),t===`jelly-duo`&&(r=`jelly-duo-regular`),t===`jelly-fill`&&(r=`jelly-fill-regular`),t===`notdog`&&(n===`solid`&&(r=`notdog-solid`),n===`duo-solid`&&(r=`notdog-duo-solid`)),t===`notdog-duo`&&(r=`notdog-duo-solid`),t===`slab`&&((n===`solid`||n===`regular`)&&(r=`slab-regular`),n===`press-regular`&&(r=`slab-press-regular`)),t===`slab-press`&&(r=`slab-press-regular`),t===`slab-duo`&&(r=`slab-duo-regular`),t===`slab-press-duo`&&(r=`slab-press-duo-regular`),t===`thumbprint`&&(r=`thumbprint-light`),t===`utility`&&(r=`utility-semibold`),t===`utility-duo`&&(r=`utility-duo-semibold`),t===`utility-fill`&&(r=`utility-fill-semibold`),t===`whiteboard`&&(r=`whiteboard-semibold`),t===`mosaic`&&(r=`mosaic-solid`),t===`pixel`&&(r=`pixel-regular`),t===`vellum`&&(r=`vellum-solid`),t===`classic`&&(n===`thin`&&(r=`thin`),n===`light`&&(r=`light`),n===`regular`&&(r=`regular`),n===`solid`&&(r=`solid`)),t===`duotone`&&(n===`thin`&&(r=`duotone-thin`),n===`light`&&(r=`duotone-light`),n===`regular`&&(r=`duotone-regular`),n===`solid`&&(r=`duotone`)),t===`sharp`&&(n===`thin`&&(r=`sharp-thin`),n===`light`&&(r=`sharp-light`),n===`regular`&&(r=`sharp-regular`),n===`solid`&&(r=`sharp-solid`)),t===`sharp-duotone`&&(n===`thin`&&(r=`sharp-duotone-thin`),n===`light`&&(r=`sharp-duotone-light`),n===`regular`&&(r=`sharp-duotone-regular`),n===`solid`&&(r=`sharp-duotone-solid`)),t===`brands`&&(r=`brands`),r}function Tt(e,t,n){let r=wt(e,t,n),i=bt();if(i)return`${i}/${r}/${e}.svg`;let a=St();return a.length>0?`https://ka-p.fontawesome.com/releases/v${Ct}/svgs/${r}/${e}.svg?token=${encodeURIComponent(a)}`:`https://ka-f.fontawesome.com/releases/v${Ct}/svgs/${r}/${e}.svg`}var Et={name:`default`,resolver:(e,t=`classic`,n=`solid`)=>Tt(e,t,n),mutator:(e,t)=>{if(e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`),t?.family&&!e.hasAttribute(`data-duotone-initialized`)){let{family:n,variant:r}=t;if(n===`duotone`||n===`sharp-duotone`||n===`notdog-duo`||n===`notdog`&&r===`duo-solid`||n===`jelly-duo`||n===`jelly`&&r===`duo-regular`||n===`utility-duo`||n===`slab-duo`||n===`slab-press-duo`||n===`thumbprint`){let n=[...e.querySelectorAll(`path`)],r=n.find(e=>!e.hasAttribute(`opacity`)),i=n.find(e=>e.hasAttribute(`opacity`));if(!r||!i)return;if(r.setAttribute(`data-duotone-primary`,``),i.setAttribute(`data-duotone-secondary`,``),t.swapOpacity&&r&&i){let e=i.getAttribute(`opacity`)||`0.4`;r.style.setProperty(`--path-opacity`,e),i.style.setProperty(`--path-opacity`,`1`)}e.setAttribute(`data-duotone-initialized`,``)}}}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Dt(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var Ot={solid:{"arrow-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`,"arrow-up":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>`,backward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M236.3 107.1C247.9 96 265 92.9 279.7 99.2C294.4 105.5 304 120 304 136L304 272.3L476.3 107.2C487.9 96 505 92.9 519.7 99.2C534.4 105.5 544 120 544 136L544 504C544 520 534.4 534.5 519.7 540.8C505 547.1 487.9 544 476.3 532.9L304 367.7L304 504C304 520 294.4 534.5 279.7 540.8C265 547.1 247.9 544 236.3 532.9L44.3 348.9C36.5 341.3 32 330.9 32 320C32 309.1 36.5 298.7 44.3 291.1L236.3 107.1z"/></svg>`,"backward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M491 100.8C478.1 93.8 462.3 94.5 450 102.6L192 272.1L192 128C192 110.3 177.7 96 160 96C142.3 96 128 110.3 128 128L128 512C128 529.7 142.3 544 160 544C177.7 544 192 529.7 192 512L192 367.9L450 537.5C462.3 545.6 478 546.3 491 539.3C504 532.3 512 518.8 512 504.1L512 136.1C512 121.4 503.9 107.9 491 100.9z"/></svg>`,bars:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>`,"angles-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M77.3 256 214.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256zm192 0L406.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L269.3 256z"/></svg>`,"angles-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.7 256 297.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 256zm-192 0L105.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256z"/></svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>`,"chevron-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`,"chevron-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>`,"chevron-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>`,circle:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>`,"closed-captioning":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M64 192C64 156.7 92.7 128 128 128L512 128C547.3 128 576 156.7 576 192L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 192zM216 272L248 272C252.4 272 256 275.6 256 280C256 293.3 266.7 304 280 304C293.3 304 304 293.3 304 280C304 249.1 278.9 224 248 224L216 224C185.1 224 160 249.1 160 280L160 360C160 390.9 185.1 416 216 416L248 416C278.9 416 304 390.9 304 360C304 346.7 293.3 336 280 336C266.7 336 256 346.7 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 280C208 275.6 211.6 272 216 272zM384 280C384 275.6 387.6 272 392 272L424 272C428.4 272 432 275.6 432 280C432 293.3 442.7 304 456 304C469.3 304 480 293.3 480 280C480 249.1 454.9 224 424 224L392 224C361.1 224 336 249.1 336 280L336 360C336 390.9 361.1 416 392 416L424 416C454.9 416 480 390.9 480 360C480 346.7 469.3 336 456 336C442.7 336 432 346.7 432 360C432 364.4 428.4 368 424 368L392 368C387.6 368 384 364.4 384 360L384 280z"/></svg>`,"closed-captioning-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M39 39.1C48.4 29.7 63.6 29.7 72.9 39.1L161.8 128L512 128C547.3 128 576 156.7 576 192L576 448C576 473.5 561.1 495.4 539.6 505.8L601 567.1C610.4 576.5 610.4 591.7 601 601C591.6 610.3 576.4 610.4 567.1 601L39 73.1C29.7 63.7 29.7 48.5 39 39.1zM384 350.1L384 279.9C384 275.5 387.6 271.9 392 271.9L424 271.9C428.4 271.9 432 275.5 432 279.9C432 293.2 442.7 303.9 456 303.9C469.3 303.9 480 293.2 480 279.9C480 249 454.9 223.9 424 223.9L392 223.9C361.1 223.9 336 249 336 279.9L336 302.1L384 350.1zM445.5 411.6C465.7 403.2 480 383.2 480 359.9C480 346.6 469.3 335.9 456 335.9C442.7 335.9 432 346.6 432 359.9C432 364.3 428.4 367.9 424 367.9L401.8 367.9L445.5 411.6zM162.3 264.1C160.8 269.1 160 274.5 160 280L160 360C160 390.9 185.1 416 216 416L248 416C266.1 416 282.1 407.5 292.4 394.2L410.2 512L128 512C92.7 512 64 483.3 64 448L64 192C64 184.2 65.4 176.7 68 169.8L162.3 264.1zM256.1 357.9C256 358.6 256 359.3 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 309.8L256.1 357.9z"/></svg>`,compress:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>`,ellipsis:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M96 320C96 289.1 121.1 264 152 264C182.9 264 208 289.1 208 320C208 350.9 182.9 376 152 376C121.1 376 96 350.9 96 320zM264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320zM488 264C518.9 264 544 289.1 544 320C544 350.9 518.9 376 488 376C457.1 376 432 350.9 432 320C432 289.1 457.1 264 488 264z"/></svg>`,"ellipsis-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/></svg>`,expand:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 96C110.3 96 96 110.3 96 128L96 224C96 241.7 110.3 256 128 256C145.7 256 160 241.7 160 224L160 160L224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L128 96zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 512C96 529.7 110.3 544 128 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480L160 416zM416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160L480 224C480 241.7 494.3 256 512 256C529.7 256 544 241.7 544 224L544 128C544 110.3 529.7 96 512 96L416 96zM544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L512 544C529.7 544 544 529.7 544 512L544 416z"/></svg>`,eyedropper:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>`,filter:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 64C19.1 64 7.4 71.8 2.4 83.8S.2 109.5 9.4 118.6L192 301.3 192 416c0 8.5 3.4 16.6 9.4 22.6l64 64c9.2 9.2 22.9 11.9 34.9 6.9S320 492.9 320 480l0-178.7 182.6-182.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 64 480 64L32 64z"/></svg>`,forward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M403.7 107.1C392.1 96 375 92.9 360.3 99.2C345.6 105.5 336 120 336 136L336 272.3L163.7 107.2C152.1 96 135 92.9 120.3 99.2C105.6 105.5 96 120 96 136L96 504C96 520 105.6 534.5 120.3 540.8C135 547.1 152.1 544 163.7 532.9L336 367.7L336 504C336 520 345.6 534.5 360.3 540.8C375 547.1 392.1 544 403.7 532.9L595.7 348.9C603.6 341.4 608 330.9 608 320C608 309.1 603.5 298.7 595.7 291.1L403.7 107.1z"/></svg>`,file:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>`,"file-audio":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>`,"file-code":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>`,"file-excel":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>`,"file-image":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>`,"file-pdf":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>`,"file-powerpoint":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>`,"file-video":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>`,"file-word":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>`,"file-zipper":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>`,"forward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M21 36.8c12.9-7 28.7-6.3 41 1.8L320 208.1 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-144.1-258 169.6c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440L0 72C0 57.3 8.1 43.8 21 36.8z"/></svg>`,gauge:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,gear:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>`,"grip-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>`,indeterminate:`<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>`,"magnifying-glass":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>`,minus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>`,pause:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>`,"picture-in-picture":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M448 32c35.3 0 64 28.7 64 64l0 112-64 0 0-112-384 0 0 320 144 0 0 64-144 0-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416 0 96C0 62.9 25.2 35.6 57.5 32.3L64 32 448 32zm16 224c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48l160 0z"/></svg>`,play:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>`,"play-circle":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>`,plus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>`,"table-columns":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 64l0 256 128 0 0-256-128 0zm320 0l-128 0 0 256 128 0 0-256z"/></svg>`,thumbtack:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 10.3 134.1c37.1 21.2 65.8 56.4 78.2 99.7l3.8 13.4c2.8 9.7 .8 20-5.2 28.1S362 352 352 352L32 352c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1L5 297.8c12.4-43.3 41-78.5 78.2-99.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 400l64 0 0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-112z"/></svg>`,"up-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M406.6 502.6l96-96c9.2-9.2 11.9-22.9 6.9-34.9S492.9 352 480 352l-64 0 0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 320-64 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l96 96c12.5 12.5 32.8 12.5 45.3 0zM150.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-9.2 9.2-11.9 22.9-6.9 34.9S19.1 160 32 160l64 0 0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320 64 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-96-96z"/></svg>`,upload:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>`,user:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>`,volume:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM441.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C443.3 170.7 464 210.9 464 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-low":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,xmark:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>`},regular:{calendar:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z"/></svg>`,"circle-question":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`,"circle-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,clock:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>`,copy:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>`,eye:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>`,"eye-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>`}},kt={name:`system`,resolver:(e,t=`classic`,n=`solid`)=>{let r=Ot[n][e]??Ot.regular[e]??Ot.regular[`circle-question`];return r?Dt(r):``},mutator:e=>{e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`)}},At=`classic`,jt=[Et,kt],Mt=/* @__PURE__ */ new Set
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;function Nt(e){Mt.add(e)}function Pt(e){Mt.delete(e)}function Ft(e){return jt.find(t=>t.name===e)}function It(){return At}
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const{I:Lt}=ze,Rt=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var zt=Symbol(),Bt=Symbol(),Vt,Ht=/* @__PURE__ */ new Map,E=class extends ft{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label=``,this.library=`default`,this.rotate=0,this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=we`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let n=this.shadowRoot.querySelector(`[part='svg']`);return typeof t.mutator==`function`&&t.mutator(n,this),this.svg}try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?zt:Bt}catch{return Bt}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return zt;Vt||=new DOMParser;let r=Vt.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):zt}catch{return zt}}}connectedCallback(){super.connectedCallback(),Nt(this)}firstUpdated(e){super.firstUpdated(e),this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Pt(this)}async getIconSource(){let e=Ft(this.library),t=this.family||It();if(this.name&&e){let n=this.canvas===`auto`||this.autoWidth,r;try{r=await e.resolver(this.name,t,this.variant,n)}catch{r=void 0}return{url:r,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=await this.getIconSource(),n=t?Ft(this.library):void 0;if(!e){this.svg=null;return}let r=Ht.get(e);r||(r=this.resolveIcon(e,n),Ht.set(e,r));let i=await r;if(i===Bt&&Ht.delete(e),e===(await this.getIconSource()).url){if(Rt(i))this.svg=i;else switch(i){case Bt:case zt:this.svg=null,this.dispatchEvent(new ht);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new gt)}}}willUpdate(e){return this.style||this.setStyleProperty(`--rotate-angle`,`${this.rotate}deg`),super.willUpdate(e)}updated(e){super.updated(e);let t=Ft(this.library);this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`);let n=this.shadowRoot?.querySelector(`svg`);n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:we`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};E.css=_t,w([it()],E.prototype,`svg`,2),w([T({reflect:!0})],E.prototype,`name`,2),w([T({reflect:!0})],E.prototype,`family`,2),w([T({reflect:!0})],E.prototype,`variant`,2),w([T({reflect:!0})],E.prototype,`canvas`,2),w([T({attribute:`auto-width`,type:Boolean,reflect:!0})],E.prototype,`autoWidth`,2),w([T({attribute:`swap-opacity`,type:Boolean,reflect:!0})],E.prototype,`swapOpacity`,2),w([T()],E.prototype,`src`,2),w([T()],E.prototype,`label`,2),w([T({reflect:!0})],E.prototype,`library`,2),w([T({type:Number,reflect:!0})],E.prototype,`rotate`,2),w([T({type:String,reflect:!0})],E.prototype,`flip`,2),w([T({type:String,reflect:!0})],E.prototype,`animation`,2),w([qe(`label`)],E.prototype,`handleLabelChange`,1),w([qe([`family`,`name`,`library`,`variant`,`src`,`autoWidth`,`canvas`,`swapOpacity`],{waitUntilFirstUpdate:!0})],E.prototype,`setIcon`,1),E=w([tt(`wa-icon`)],E);var Ut=/* @__PURE__ */ t({default:()=>E}),Wt=c`
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
;const Gt=/* @__PURE__ */ new Set,Kt=/* @__PURE__ */ new Map;let qt,Jt=`ltr`,Yt=`en`;const Xt=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(Xt){let e=new MutationObserver(Qt);Jt=document.documentElement.dir||`ltr`,Yt=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function Zt(...e){e.map(e=>{let t=e.$code.toLowerCase();Kt.has(t)?Kt.set(t,Object.assign(Object.assign({},Kt.get(t)),e)):Kt.set(t,e),qt||=e}),Qt()}function Qt(){Xt&&(Jt=document.documentElement.dir||`ltr`,Yt=document.documentElement.lang||navigator.language),[...Gt.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var $t=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Gt.add(this.host)}hostDisconnected(){Gt.delete(this.host)}dir(){return`${this.host.dir||Jt}`.toLowerCase()}lang(){let e=`${this.host.lang||Yt}`.toLowerCase().replace(/_/g,`-`);try{return new Intl.Locale(e),e}catch{return qt?qt.$code.toLowerCase():`en`}}getTranslationData(e){let t;try{t=new Intl.Locale(e.replace(/_/g,`-`))}catch{return{locale:void 0,language:``,region:``,primary:void 0,secondary:void 0}}let n=t.language.toLowerCase(),r=t.region?.toLowerCase()??``,i=Kt.get(`${n}-${r}`),a=Kt.get(n);return{locale:t,language:n,region:r,primary:i,secondary:a}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&qt&&qt[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(qt&&qt[e])i=qt[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},en={$code:`en`,$name:`English`,$dir:`ltr`,allTagsRemoved:`All tags removed`,am:`AM`,autosizeColumn:`Autosize column`,captions:`Captions`,carousel:`Carousel`,chooseDate:`Choose date`,chooseDecade:`Choose decade`,chooseMonth:`Choose month`,chooseTime:`Choose time`,chooseYear:`Choose year`,clearEntry:`Clear entry`,clearFilter:`Clear filter`,clearSort:`Clear sort`,close:`Close`,closeCalendar:`Close calendar`,closeTimeInput:`Close time picker`,collapseRow:`Collapse row`,columnMenu:`Column options`,columnMovedToPosition:(e,t,n)=>`${e} moved to position ${t} of ${n}`,columns:`Columns`,compactPageXOfY:(e,t)=>`${e} of ${t}`,completed:`Completed`,copied:`Copied`,copy:`Copy`,createOption:e=>`Create "${e}"`,currentlyPlaying:`currently playing`,currentValue:`Current value`,date:`Date`,datePickerKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the calendar.`,day:`Day`,dayPeriod:`AM/PM`,decrement:`Decrement`,deselectAllRows:`Deselect all rows`,disabled:`Disabled`,dropFileHere:`Drop file here or click to browse`,dropFilesHere:`Drop files here or click to browse`,empty:`Empty`,endDate:`End date`,enterFullscreen:`Enter fullscreen`,error:`Error`,exitFullscreen:`Exit fullscreen`,expandRow:`Expand row`,filterByColumn:e=>`Filter by ${e}`,filterFrom:`From`,filterMax:`Max`,filterMin:`Min`,filterTo:`To`,firstPage:`First page`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hideColumn:`Hide column`,hidePassword:`Hide password`,hour:`Hour`,incompleteDate:`Enter a valid date.`,increment:`Increment`,jumpBackwardX:e=>`Jump back ${e} pages`,jumpForwardX:e=>`Jump forward ${e} pages`,lastPage:`Last page`,loading:`Loading`,locked:`Locked`,minute:`Minute`,month:`Month`,moreOptions:`More Options`,mute:`Mute`,nextDecade:`Next decade`,nextMonth:`Next month`,nextPage:`Next page`,nextSlide:`Next slide`,nextVideo:`Next Video`,nextYear:`Next year`,noData:`No data`,noOptions:`No options`,noResults:`No matching results`,notCompleted:`Not completed`,now:`Now`,numCharacters:e=>e===1?`1 character`:`${e} characters`,numCharactersRemaining:e=>e===1?`1 character remaining`:`${e} characters remaining`,numOptionsAvailable:e=>e===0?`No options available`:e===1?`1 option available`:`${e} options available`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,numRowsCopied:e=>e===1?`1 row copied`:`${e} rows copied`,numRowsSelected:e=>e===1?`1 row selected`:`${e} rows selected`,optionPosition:(e,t,n)=>`${e}, ${t} of ${n}`,optionsLoadError:`Options could not be loaded`,pageXOfY:(e,t)=>`Page ${e} of ${t}`,pagination:`Pagination`,pause:`Pause`,pauseAnimation:`Pause animation`,pictureInPicture:`Picture in picture`,pinLeft:`Pin left`,pinRight:`Pin right`,play:`Play`,playAnimation:`Play animation`,playbackSpeed:`Playback speed`,playlist:`Playlist`,pm:`PM`,previousDecade:`Previous decade`,previousMonth:`Previous month`,previousPage:`Previous page`,previousSlide:`Previous slide`,previousVideo:`Previous video`,previousYear:`Previous year`,progress:`Progress`,rangeTooLong:e=>e===1?`Select a range no longer than 1 day`:`Select a range no longer than ${e} days`,rangeTooShort:e=>e===1?`Select a range at least 1 day long`:`Select a range at least ${e} days long`,readonly:`Read-only`,remove:`Remove`,resetColumns:`Reset columns`,resize:`Resize`,resizeColumn:`Resize column`,rowsPerPage:`Rows per page`,scrollableRegion:`Scrollable region`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,search:`Search`,second:`Second`,seek:`Seek`,seekProgress:(e,t)=>`${e} of ${t}`,selectAColorFromTheScreen:`Select a color from the screen`,selectAllRows:`Select all rows`,selected:`Selected`,selectedDateLabel:e=>`Selected: ${e}`,selectedRangeLabel:e=>`Selected range: ${e}`,selectGroup:`Select group`,selectionCleared:`Selection cleared`,selectRow:`Select row`,showingNofMRows:(e,t)=>`Showing ${e} of ${t} rows`,showingXtoYofZ:(e,t,n)=>`${e}\u2013${t} of ${n}`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,sortAscending:`Sort ascending`,sortColumn:`Sort column`,sortDescending:`Sort descending`,startDate:`Start date`,steps:`Steps`,stepXOfY:(e,t)=>`Step ${e} of ${t}`,tagAdded:e=>`${e} added`,tagAlreadyAdded:e=>`${e} is already added`,tagInputKeyboardHelp:`Press Backspace or Delete to remove this tag.`,tagRemoved:e=>`${e} removed`,time:`Time`,timeInputKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the time picker.`,today:`Today`,toggleColorFormat:`Toggle color format`,tooFewTags:e=>e===1?`Add at least 1 tag`:`Add at least ${e} tags`,tooManyTags:e=>e===1?`Add no more than 1 tag`:`Add no more than ${e} tags`,unmute:`Unmute`,unpin:`Unpin`,unpinColumn:`Unpin column`,videoPlayer:`Video player`,volume:`Volume`,year:`Year`,zoomIn:`Zoom in`,zoomOut:`Zoom out`}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;Zt(en);var tn=en,nn=class extends $t{lang(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||`en`:super.lang()}};Zt(tn);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function rn(e,t=0){if(!e||!globalThis.Node)return``;if(typeof e[Symbol.iterator]==`function`)return(Array.isArray(e)?e:[...e]).map(e=>rn(e,--t)).join(``);let n=e;if(n.nodeType===Node.TEXT_NODE)return n.textContent??``;if(n.nodeType===Node.ELEMENT_NODE){let e=n;if(e.hasAttribute(`slot`)||e.matches(`style, script`))return``;if(e instanceof HTMLSlotElement){let n=e.assignedNodes({flatten:!0});if(n.length>0)return rn(n,--t)}return t>-1?rn(e,--t):e.textContent??``}return n.hasChildNodes()?rn(n.childNodes,--t):``}var an=class extends ft{constructor(){super(...arguments),this.localize=new nn(this),this.cachedDefaultLabel=``,this.isInitialized=!1,this.isDefaultLabelDirty=!0,this.current=!1,this.value=``,this.disabled=!1,this.selected=!1,this.defaultSelected=!1,this._label=``,this.handleHover=e=>{e.type===`mouseenter`?this.customStates.set(`hover`,!0):e.type===`mouseleave`&&this.customStates.set(`hover`,!1)}}set label(e){let t=this._label;this._label=e||``,this._label!==t&&this.requestUpdate(`label`,t)}get label(){return this._label?this._label:this.defaultLabel}get defaultLabel(){return(this.isDefaultLabelDirty||!this.cachedDefaultLabel)&&this.updateDefaultLabel(),this.cachedDefaultLabel}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`option`),this.setAttribute(`aria-selected`,`false`),this.addEventListener(`mouseenter`,this.handleHover),this.addEventListener(`mouseleave`,this.handleHover)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`mouseenter`,this.handleHover),this.removeEventListener(`mouseleave`,this.handleHover)}handleDefaultSlotChange(){if(this.isDefaultLabelDirty=!0,!this.isInitialized){this.isInitialized=!0;return}let e=this.closest(`wa-select, wa-combobox`);e&&customElements.whenDefined(e.localName).then(()=>e.handleDefaultSlotChange?.())}willUpdate(e){e.has(`defaultSelected`)&&(this.didSSR&&this.hasUpdated||!this.didSSR)&&this.syncDefaultSelected(),super.willUpdate(e)}syncDefaultSelected(){if(`closest`in this&&!this.closest(`wa-combobox, wa-select`)?.hasInteracted&&this.defaultSelected){let e=this.selected;this.selected=this.defaultSelected,this.requestUpdate(`selected`,e)}}updated(e){e.has(`disabled`)&&(this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`),this.customStates.set(`disabled`,this.disabled)),e.has(`selected`)&&(this.setAttribute(`aria-selected`,this.selected?`true`:`false`),this.customStates.set(`selected`,this.selected)),e.has(`value`)&&(typeof this.value!=`string`&&(this.value=String(this.value)),this.handleDefaultSlotChange()),e.has(`current`)&&this.customStates.set(`current`,this.current),super.updated(e)}async firstUpdated(e){if(super.firstUpdated(e),this.didSSR&&!this.hasUpdated&&await this.updateComplete,this.syncDefaultSelected(),this.selected&&!this.defaultSelected){let e=this.closest(`wa-select, wa-combobox`);e&&!e.hasInteracted&&(await customElements.whenDefined(e?.localName),await e.updateComplete,e.selectionChanged?.())}}updateDefaultLabel(){let e=this.cachedDefaultLabel;this.cachedDefaultLabel=rn(this).trim(),this.isDefaultLabelDirty=!1;let t=this.cachedDefaultLabel!==e;return!this._label&&t&&this.requestUpdate(`label`,e),t}render(){let e=this.selected;return this.didSSR&&!this.hasUpdated?(this.updateComplete.then(()=>{this.requestUpdate()}),C):we`
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
    `}};an.css=Wt,w([ot(`.label`)],an.prototype,`defaultSlot`,2),w([it()],an.prototype,`current`,2),w([T({reflect:!0})],an.prototype,`value`,2),w([T({type:Boolean})],an.prototype,`disabled`,2),w([T({type:Boolean,attribute:!1})],an.prototype,`selected`,2),w([T({type:Boolean,attribute:`selected`})],an.prototype,`defaultSelected`,2),w([T()],an.prototype,`label`,1),an=w([tt(`wa-option`)],an);var on=/* @__PURE__ */ t({default:()=>an}),sn=c`
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
function cn(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}function ln(e,t,n=`vertical`,r=`smooth`){let i=cn(e,t),a=i.top+t.scrollTop,o=i.left+t.scrollLeft,s=t.scrollLeft,c=t.scrollLeft+t.offsetWidth,l=t.scrollTop,u=t.scrollTop+t.offsetHeight;(n===`horizontal`||n===`both`)&&(o<s?t.scrollTo({left:o,behavior:r}):o+e.clientWidth>c&&t.scrollTo({left:o-t.offsetWidth+e.clientWidth,behavior:r})),(n===`vertical`||n===`both`)&&(a<l?t.scrollTo({top:a,behavior:r}):a+e.clientHeight>u&&t.scrollTo({top:a-t.offsetHeight+e.clientHeight,behavior:r}))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var un=class extends Event{constructor(){super(`wa-show`,{bubbles:!0,cancelable:!0,composed:!0})}},dn=class extends Event{constructor(e){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-hide`,{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}},fn=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-after-hide`,{bubbles:!0,cancelable:!1,composed:!0})}},pn=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-after-show`,{bubbles:!0,cancelable:!1,composed:!0})}},mn=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-clear`,{bubbles:!0,cancelable:!1,composed:!0})}},hn=[]
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;function gn(e){_n(e),hn.push(e)}function _n(e){for(let t=hn.length-1;t>=0;t--)if(hn[t]===e){hn.splice(t,1);break}}function vn(e){return hn.length>0&&hn[hn.length-1]===e}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var yn=(e={})=>{let{validationElement:t,validationProperty:n}=e;t||typeof document<`u`&&`createElement`in document&&(t=Object.assign(document.createElement(`input`),{required:!0})),n||=`value`;let r={observedAttributes:[`required`],message:t?.validationMessage,checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return(e.required??e.hasAttribute(`required`))&&(e[n]||(t.message=typeof r.message==`function`?r.message(e):r.message||``,t.isValid=!1,t.invalidKeys.push(`valueMissing`))),t}};return r},bn=c`
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
`,xn=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-invalid`,{bubbles:!0,cancelable:!1,composed:!0})}},Sn=()=>({observedAttributes:[`custom-error`],checkValidity(e){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
let t={message:``,isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=[`customError`]),t}}),Cn=class extends ft{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=[`input`],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new xn))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},`addEventListener`in this&&this.addEventListener(`invalid`,this.emitInvalid)}static get validators(){return[Sn()]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let n of t.observedAttributes)e.add(n);return[...e]}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.updateValidity()}):this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener?.(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has(`customError`)&&(this.customError||=null,this.setCustomValidity(this.customError||``)),e.has(`value`)||e.has(`disabled`)||e.has(`defaultValue`)){let e=this.value;this.updateFormValue(e)}e.has(`disabled`)&&(this.customStates.set(`disabled`,this.disabled),(this.hasAttribute(`disabled`)||!this.matches(`:disabled`))&&this.toggleAttribute(`disabled`,this.disabled)),super.willUpdate(e),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>this.updateValidity()):this.updateValidity()}updateFormValue(e){if(Array.isArray(e)){if(this.name){let t=new FormData;for(let n of e)t.append(this.name,n);this.setValue(t,t)}}else this.setValue(e,e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(e){e?this.setAttribute(`form`,e):this.removeAttribute(`form`)}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],n=e[1],r=e[2];r||=this.validationTarget,this.internals.setValidity(t,n,r||void 0),this.requestUpdate(`validity`),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set(`required`,e),this.customStates.set(`optional`,!e),this.customStates.set(`invalid`,!t),this.customStates.set(`valid`,t),this.customStates.set(`user-invalid`,!t&&n),this.customStates.set(`user-valid`,t&&n)}setCustomValidity(e){e?(this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)):(this.customError=null,this.setValidity({}))}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity()}):(this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity())}setValue(...e){let[t,n]=e;this.internals.setFormValue(t,n)}get allValidators(){let e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(``),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute(`disabled`)||!this.willValidate){this.resetValidity();return}let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},n=this.validationTarget||this.input||void 0,r=``;for(let n of e){let{isValid:e,message:i,invalidKeys:a}=n.checkValidity(this);e||(r||=i,a?.length>=0&&a.forEach(e=>t[e]=!0))}r||=this.validationMessage,this.setValidity(t,r,n)}};Cn.formAssociated=!0,w([T({reflect:!0})],Cn.prototype,`name`,2),w([T({type:Boolean})],Cn.prototype,`disabled`,2),w([T({state:!0,attribute:!1})],Cn.prototype,`valueHasChanged`,2),w([T({state:!0,attribute:!1})],Cn.prototype,`hasInteracted`,2),w([T({attribute:`custom-error`,reflect:!0})],Cn.prototype,`customError`,2),w([T({attribute:!1,state:!0,type:Object})],Cn.prototype,`validity`,1);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var wn={small:`s`,medium:`m`,large:`l`},Tn=/* @__PURE__ */ new Set;function En(e,t){t in wn&&!Tn.has(`${e}:${t}`)&&(Tn.add(`${e}:${t}`),console.warn(`[${e}] size="${t}" is deprecated. Use size="${wn[t]}" instead. The long-form value will be removed in the next major version.`))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Dn=c`
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
function On(e,t){return new Promise(n=>{function r(i){i.target===e&&(e.removeEventListener(t,r),n())}e.addEventListener(t,r)})}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function kn(e,t){return new Promise(n=>{let r=new AbortController,{signal:i}=r;if(e.classList.contains(t))return;e.classList.add(t);let a=!1,o=()=>{a||(a=!0,e.classList.remove(t),n(),r.abort())};e.addEventListener(`animationend`,o,{once:!0,signal:i}),e.addEventListener(`animationcancel`,o,{once:!0,signal:i}),requestAnimationFrame(()=>{!a&&e.getAnimations().length===0&&o()})})}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const An={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},jn=e=>(...t)=>({_$litDirective$:e,values:t});var Mn=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Nn=jn(class extends Mn{constructor(e){if(super(e),e.type!==An.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=/* @__PURE__ */ new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return Te}});
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/var Pn=class extends Mn{constructor(e){if(super(e),this.it=C,e.type!==An.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===C||e==null)return this._t=void 0,this.it=e;if(e===Te)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Pn.directiveName=`unsafeHTML`,Pn.resultType=1;const Fn=jn(Pn);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var D=class extends Cn{constructor(){super(...arguments),this.assumeInteractionOn=[`blur`,`input`],this.cachedOptions=null,this.hasSlotController=new Ke(this,`hint`,`label`),this.localize=new nn(this),this.selectionOrder=/* @__PURE__ */ new Map,this.typeToSelectString=``,this.slotChangePending=!1,this.displayLabel=``,this.selectedOptions=[],this.name=``,this._defaultValue=null,this.size=`m`,this.placeholder=``,this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.withClear=!1,this.open=!1,this.appearance=`outlined`,this.pill=!1,this.label=``,this.placement=`bottom`,this.hint=``,this.withLabel=!1,this.withHint=!1,this.required=!1,this.getTag=e=>we`
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
      `,this.handleDocumentFocusIn=e=>{let t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{let t=e.target,n=t.closest(`[part~="clear-button"]`)!==null,r=t.closest(`wa-button`)!==null;if(!(n||r)){if(e.key===`Escape`&&this.open&&vn(this)&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key===`Enter`||e.key===` `&&this.typeToSelectString===``){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.hasInteracted=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}else{if([`ArrowUp`,`ArrowDown`,`Home`,`End`].includes(e.key)){let t=this.getAllOptions(),n=t.indexOf(this.currentOption),r=Math.max(0,n);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key===`ArrowDown`?(r=n+1,r>t.length-1&&(r=0)):e.key===`ArrowUp`?(r=n-1,r<0&&(r=t.length-1)):e.key===`Home`?r=0:e.key===`End`&&(r=t.length-1),this.setCurrentOption(t[r])}if(e.key?.length===1||e.key===`Backspace`){let t=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key===`Backspace`)return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString=``,1e3),e.key===`Backspace`?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(let e of t)if(e.label.toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(e);break}}}}},this.handleDocumentMouseDown=e=>{let t=e.composedPath();this&&!t.includes(this)&&this.hide()}}static get validators(){let e=[yn({validationElement:Object.assign(document.createElement(`select`),{required:!0})})];return[...super.validators,...e]}get validationTarget(){return this.valueInput}set defaultValue(e){this._defaultValue=this.convertDefaultValue(e)}get defaultValue(){return this.convertDefaultValue(this._defaultValue)}rawValuesEqual(e,t){return e==null&&t==null?!0:e==null||t==null||e.length!==t.length?!1:e.every((e,n)=>e===t[n])}convertDefaultValue(e){return!(this.multiple||this.hasAttribute(`multiple`))&&Array.isArray(e)&&(e=e[0]),e}set value(e){let t=this.value;e instanceof FormData&&(e=e.getAll(this.name)),e!=null&&!Array.isArray(e)&&(e=[e]);let n=this._value;this._value=e??null,this.rawValuesEqual(n,this._value)||(this.valueHasChanged=!0,this.requestUpdate(`value`,t))}get value(){let e=this._value??this.defaultValue??null;e!=null&&(e=Array.isArray(e)?e:[e]),this.optionValues=new Set(this.getAllOptions().filter(e=>!e.disabled).map(e=>e.value));let t=e;return e!=null&&(t=e.filter(e=>this.optionValues.has(e)),t=this.multiple?t:t[0],t??=null),t}handleSizeChange(){En(this.localName,this.size)}connectedCallback(){super.connectedCallback(),this.processSlotChange(),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.cachedOptions=null}updateDefaultValue(){let e=this.getAllOptions().filter(e=>e.hasAttribute(`selected`)||e.defaultSelected);if(e.length>0){let t=e.map(e=>e.value);this._defaultValue=this.multiple?t:t[0]}this.hasAttribute(`value`)&&(this._defaultValue=this.getAttribute(`value`)||null)}addOpenListeners(){document.addEventListener(`focusin`,this.handleDocumentFocusIn),document.addEventListener(`keydown`,this.handleDocumentKeyDown),document.addEventListener(`mousedown`,this.handleDocumentMouseDown),gn(this),this.getRootNode()!==document&&this.getRootNode().addEventListener(`focusin`,this.handleDocumentFocusIn)}removeOpenListeners(){document.removeEventListener(`focusin`,this.handleDocumentFocusIn),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`mousedown`,this.handleDocumentMouseDown),_n(this),this.getRootNode()!==document&&this.getRootNode().removeEventListener(`focusin`,this.handleDocumentFocusIn)}handleFocus(){this.displayInput.setSelectionRange(0,0)}handleLabelClick(){this.displayInput.focus()}handleComboboxClick(e){e.preventDefault()}handleComboboxMouseDown(e){let t=e.composedPath().some(e=>e instanceof Element&&e.tagName.toLowerCase()===`wa-button`);this.disabled||t||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.stopPropagation(),this.handleDocumentKeyDown(e)}handleClearClick(e){e.stopPropagation(),this.hasInteracted=!0,this.valueHasChanged=!0,this.value!==null&&(this.displayLabel=``,this.selectionOrder.clear(),this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.dispatchEvent(new mn),this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){let t=e.target.closest(`wa-option`);t&&!t.disabled&&(this.hasInteracted=!0,this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(t):this.setSelectedOptions(t),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.requestUpdate(`value`),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){this.slotChangePending||(this.slotChangePending=!0,queueMicrotask(()=>{this.slotChangePending=!1,this.processSlotChange()}))}processSlotChange(){if(customElements.get(`wa-option`)||customElements.whenDefined(`wa-option`).then(()=>this.handleDefaultSlotChange()),this.didSSR&&!this.hasUpdated){this.updateComplete.then(()=>{this.handleDefaultSlotChange()});return}this.cachedOptions=null;let e=this.getAllOptions();this.updateDefaultValue();let t=this.value;if(t==null||!this.valueHasChanged&&!this.hasInteracted){this.selectionChanged();return}Array.isArray(t)||(t=[t]);let n=e.filter(e=>t.includes(e.value));this.setSelectedOptions(n)}handleTagRemove(e,t){if(e.stopPropagation(),this.disabled)return;this.hasInteracted=!0,this.valueHasChanged=!0;let n=t;if(!n){let t=e.target.closest(`wa-tag[data-value]`);if(t){let e=t.dataset.value;n=this.selectedOptions.find(t=>t.value===e)}}n&&(this.toggleOptionSelection(n,!1),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}))}getAllOptions(){return this.cachedOptions?this.cachedOptions:this?.querySelectorAll?(this.cachedOptions=[...this.querySelectorAll(`wa-option`)],this.cachedOptions):[]}getFirstOption(){return this.querySelector(`wa-option`)}setCurrentOption(e){this.getAllOptions().forEach(e=>{e.current=!1,e.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus({preventScroll:!0}),this.open&&!this.listbox.hidden&&ln(e,this.listbox,`vertical`,`auto`))}setSelectedOptions(e){let t=this.getAllOptions(),n=Array.isArray(e)?e:[e];t.forEach(e=>{n.includes(e)||(e.selected=!1)}),n.length&&n.forEach(e=>e.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){e.selected=t===!0||t===!1?t:!e.selected,this.selectionChanged()}selectionChanged(){let e=this.getAllOptions().filter(e=>{if(!this.hasInteracted&&!this.valueHasChanged){let t=this.defaultValue,n=Array.isArray(t)?t:[t];return e.hasAttribute(`selected`)||e.defaultSelected||e.selected||n?.includes(e.value)}return e.selected}),t=new Set(e.map(e=>e.value));for(let e of this.selectionOrder.keys())t.has(e)||this.selectionOrder.delete(e);let n=(this.selectionOrder.size>0?Math.max(...this.selectionOrder.values()):-1)+1;for(let t of e)this.selectionOrder.has(t.value)||this.selectionOrder.set(t.value,n++);this.selectedOptions=e.sort((e,t)=>(this.selectionOrder.get(e.value)??0)-(this.selectionOrder.get(t.value)??0));let r=new Set(this.selectedOptions.map(e=>e.value));if(r.size>0||this._value){let e=this._value;if(this._value==null){let e=this.defaultValue??[];this._value=Array.isArray(e)?e:[e]}this._value=this._value?.filter(e=>!this.optionValues?.has(e))??null,this._value?.unshift(...r),this.requestUpdate(`value`,e)}if(this.multiple)this.displayLabel=this.placeholder&&!this.value?.length?``:this.localize.term(`numOptionsSelected`,this.selectedOptions.length);else{let e=this.selectedOptions[0];this.displayLabel=e?.label??``}this.updateComplete.then(()=>{this.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){let n=this.getTag(e,t);return n?typeof n==`string`?Fn(n):n:null}return t===this.maxOptionsVisible?we`
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
        `:null})}updated(e){super.updated(e),(e.has(`value`)||e.has(`displayLabel`))&&this.customStates.set(`blank`,!this.value&&!this.displayLabel)}handleDisabledChange(){this.disabled&&this.open&&(this.open=!1)}handleValueChange(){let e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value],n=e.filter(e=>t.includes(e.value));this.setSelectedOptions(n),this.updateValidity()}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption());let e=new un;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)}),await kn(this.popup.popup,`show`),this.currentOption&&ln(this.currentOption,this.listbox,`vertical`,`auto`),this.dispatchEvent(new pn)}else{let e=new dn;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.removeOpenListeners(),await kn(this.popup.popup,`hide`),this.listbox.hidden=!0,this.popup.active=!1,this.dispatchEvent(new fn)}}async show(){if(this.open||this.disabled)this.open=!1;else return this.open=!0,On(this,`wa-after-show`)}async hide(){if(!this.open||this.disabled)this.open=!1;else return this.open=!1,On(this,`wa-after-hide`)}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}formResetCallback(){this.selectionOrder.clear(),this.value=this.defaultValue,super.formResetCallback(),this.handleValueChange(),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})}render(){let e=this.hasSlotController.test(`label`,`withLabel`),t=this.hasSlotController.test(`hint`,`withHint`),n=this.label?!0:!!e,r=this.hint?!0:!!t,i=(this.hasUpdated||!1)&&this.withClear&&!this.disabled&&(this.displayLabel||this.value&&this.value.length>0);return we`
      <div
        part="form-control"
        class=${Nn({"form-control":!0,"form-control-has-label":n})}
      >
        <label
          id="label"
          part="form-control-label label"
          class=${Nn({label:!0,"has-label":n})}
          aria-hidden=${n?`false`:`true`}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <wa-popup
            class=${Nn({select:!0,open:this.open,disabled:this.disabled,enabled:!this.disabled,multiple:this.multiple})}
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
          class=${Nn({"has-slotted":r})}
          aria-hidden=${r?`false`:`true`}
          >${this.hint}</slot
        >
      </div>
    `}};D.css=[sn,bn,Dn],w([ot(`.select`)],D.prototype,`popup`,2),w([ot(`.combobox`)],D.prototype,`combobox`,2),w([ot(`.display-input`)],D.prototype,`displayInput`,2),w([ot(`.value-input`)],D.prototype,`valueInput`,2),w([ot(`.listbox`)],D.prototype,`listbox`,2),w([it()],D.prototype,`displayLabel`,2),w([it()],D.prototype,`currentOption`,2),w([it()],D.prototype,`selectedOptions`,2),w([T({reflect:!0})],D.prototype,`name`,2),w([T({attribute:!1})],D.prototype,`defaultValue`,1),w([T({attribute:`value`,reflect:!1})],D.prototype,`value`,1),w([T({reflect:!0})],D.prototype,`size`,2),w([qe(`size`)],D.prototype,`handleSizeChange`,1),w([T()],D.prototype,`placeholder`,2),w([T({type:Boolean,reflect:!0})],D.prototype,`multiple`,2),w([T({attribute:`max-options-visible`,type:Number})],D.prototype,`maxOptionsVisible`,2),w([T({type:Boolean})],D.prototype,`disabled`,2),w([T({attribute:`with-clear`,type:Boolean})],D.prototype,`withClear`,2),w([T({type:Boolean,reflect:!0})],D.prototype,`open`,2),w([T({reflect:!0})],D.prototype,`appearance`,2),w([T({type:Boolean,reflect:!0})],D.prototype,`pill`,2),w([T()],D.prototype,`label`,2),w([T({reflect:!0})],D.prototype,`placement`,2),w([T({attribute:`hint`})],D.prototype,`hint`,2),w([T({attribute:`with-label`,type:Boolean})],D.prototype,`withLabel`,2),w([T({attribute:`with-hint`,type:Boolean})],D.prototype,`withHint`,2),w([T({type:Boolean,reflect:!0})],D.prototype,`required`,2),w([T({attribute:!1})],D.prototype,`getTag`,2),w([qe(`disabled`,{waitUntilFirstUpdate:!0})],D.prototype,`handleDisabledChange`,1),w([qe(`value`,{waitUntilFirstUpdate:!0})],D.prototype,`handleValueChange`,1),w([qe(`open`,{waitUntilFirstUpdate:!0})],D.prototype,`handleOpenChange`,1),D=w([tt(`wa-select`)],D),D.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var In=class extends Event{constructor(){super(`wa-remove`,{bubbles:!0,cancelable:!1,composed:!0})}},Ln=c`
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
`,Rn=c`
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
`,zn=class extends ft{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(...arguments),this.localize=new nn(this),this.variant=`neutral`,this.appearance=`filled-outlined`,this.size=`m`,this.pill=!1,this.withRemove=!1}handleSizeChange(){En(this.localName,this.size)}handleRemoveClick(){this.dispatchEvent(new In)}render(){return we`
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
    `}};zn.css=[Ln,Rn,Dn],w([T({reflect:!0})],zn.prototype,`variant`,2),w([T({reflect:!0})],zn.prototype,`appearance`,2),w([T({reflect:!0})],zn.prototype,`size`,2),w([qe(`size`)],zn.prototype,`handleSizeChange`,1),w([T({type:Boolean,reflect:!0})],zn.prototype,`pill`,2),w([T({attribute:`with-remove`,type:Boolean})],zn.prototype,`withRemove`,2),zn=w([tt(`wa-tag`)],zn);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Bn=class extends Event{constructor(){super(`wa-reposition`,{bubbles:!0,cancelable:!1,composed:!0})}},Vn=c`
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
;const Hn=Math.min,Un=Math.max,Wn=Math.round,Gn=Math.floor,Kn=e=>({x:e,y:e}),qn={left:`right`,right:`left`,bottom:`top`,top:`bottom`};function Jn(e,t,n){return Un(e,Hn(t,n))}function Yn(e,t){return typeof e==`function`?e(t):e}function Xn(e){return e.split(`-`)[0]}function Zn(e){return e.split(`-`)[1]}function Qn(e){return e===`x`?`y`:`x`}function $n(e){return e===`y`?`height`:`width`}function er(e){let t=e[0];return t===`t`||t===`b`?`y`:`x`}function tr(e){return Qn(er(e))}function nr(e,t,n){n===void 0&&(n=!1);let r=Zn(e),i=tr(e),a=$n(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=dr(o)),[o,dr(o)]}function rr(e){let t=dr(e);return[ir(e),t,ir(t)]}function ir(e){return e.includes(`start`)?e.replace(`start`,`end`):e.replace(`end`,`start`)}const ar=[`left`,`right`],or=[`right`,`left`],sr=[`top`,`bottom`],cr=[`bottom`,`top`];function lr(e,t,n){switch(e){case`top`:case`bottom`:return n?t?or:ar:t?ar:or;case`left`:case`right`:return t?sr:cr;default:return[]}}function ur(e,t,n,r){let i=Zn(e),a=lr(Xn(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(ir)))),a}function dr(e){let t=Xn(e);return qn[t]+e.slice(t.length)}function fr(e){return{top:e.top??0,right:e.right??0,bottom:e.bottom??0,left:e.left??0}}function pr(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:fr(e)}function mr(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function hr(e,t,n){let{reference:r,floating:i}=e,a=er(t),o=tr(t),s=$n(o),c=Xn(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}let m=Zn(t);return m&&(p[o]+=f*(m===`end`?1:-1)*(n&&l?-1:1)),p}async function gr(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=Yn(t,e),p=pr(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=mr(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=mr(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}const _r=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=o.detectOverflow?o:{...o,detectOverflow:gr},c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=hr(l,r,c),f=r,p=0,m={};for(let n=0;n<a.length;n++){let h=a[n];if(!h)continue;let{name:g,fn:_}=h,{x:v,y,data:ee,reset:b}=await _({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:m,rects:l,platform:s,elements:{reference:e,floating:t}});u=v??u,d=y??d,m[g]={...m[g],...ee},b&&p<50&&(p++,typeof b==`object`&&(b.placement&&(f=b.placement),b.rects&&(l=b.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):b.rects),{x:u,y:d}=hr(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:m}},vr=e=>({name:`arrow`,options:e,async fn(t){let{x:n,y:r,placement:i,rects:a,platform:o,elements:s,middlewareData:c}=t,{element:l,padding:u=0}=Yn(e,t)||{};if(l==null)return{};let d=pr(u),f={x:n,y:r},p=tr(i),m=$n(p),h=await o.getDimensions(l),g=p===`y`,_=g?`top`:`left`,v=g?`bottom`:`right`,y=g?`clientHeight`:`clientWidth`,ee=a.reference[m]+a.reference[p]-f[p]-a.floating[m],b=f[p]-a.reference[p],te=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l)),x=te?te[y]:0;(!x||!await(o.isElement==null?void 0:o.isElement(te)))&&(x=s.floating[y]||a.floating[m]);let ne=ee/2-b/2,S=x/2-h[m]/2-1,re=Hn(d[_],S),ie=Hn(d[v],S),ae=x-h[m]-ie,oe=x/2-h[m]/2+ne,se=Jn(re,oe,ae),ce=!c.arrow&&Zn(i)!=null&&oe!==se&&a.reference[m]/2-(oe<re?re:ie)-h[m]/2<0,le=ce?oe<re?oe-re:oe-ae:0;return{[p]:f[p]+le,data:{[p]:se,centerOffset:oe-se-le,...ce&&{alignmentOffset:le}},reset:ce}}}),yr=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=Yn(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=Xn(r),_=er(o),v=Xn(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),ee=d||(v||!m?[dr(o)]:rr(o)),b=p!==`none`;!d&&b&&ee.push(...ur(o,m,p,y));let te=[o,...ee],x=await s.detectOverflow(t,h),ne=[],S=i.flip?.overflows||[];if(l&&ne.push(x[g]),u){let e=nr(r,a,y);ne.push(x[e[0]],x[e[1]])}if(S=[...S,{placement:r,overflows:ne}],!ne.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=te[e];if(t&&(u!==`alignment`||_===er(t)||S.every(e=>er(e.placement)!==_||e.overflows[0]>0)))return{data:{index:e,overflows:S},reset:{placement:t}};let n=S.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=S.filter(e=>{if(b){let t=er(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o}if(r!==n)return{reset:{placement:n}}}return{}}}},br=/*#__PURE__*/ new Set([`left`,`top`]);async function xr(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=Xn(n),s=Zn(n),c=er(n)===`y`,l=br.has(o)?-1:1,u=a&&c?-1:1,d=Yn(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}const Sr=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await xr(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},Cr=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i,platform:a}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=Yn(e,t),u={x:n,y:r},d=await a.detectOverflow(t,l),f=er(i),p=Qn(f),m=u[p],h=u[f],g=(e,t)=>Jn(t+d[e===`y`?`top`:`left`],t,t-d[e===`y`?`bottom`:`right`]);o&&(m=g(p,m)),s&&(h=g(f,h));let _=c.fn({...t,[p]:m,[f]:h});return{..._,data:{x:_.x-n,y:_.y-r,enabled:{[p]:o,[f]:s}}}}}},wr=function(e){return e===void 0&&(e={}),{name:`size`,options:e,async fn(t){let{placement:n,rects:r,platform:i,elements:a}=t,{apply:o=()=>{},...s}=Yn(e,t),c=await i.detectOverflow(t,s),l=Xn(n),u=Zn(n),d=er(n)===`y`,{width:f,height:p}=r.floating,m,h;l===`top`||l===`bottom`?(m=l,h=u===(await(i.isRTL==null?void 0:i.isRTL(a.floating))?`start`:`end`)?`left`:`right`):(h=l,m=u===`end`?`top`:`bottom`);let g=p-c.top-c.bottom,_=f-c.left-c.right,v=Hn(p-c[m],g),y=Hn(f-c[h],_),ee=t.middlewareData.shift,b=!ee,te=v,x=y;ee!=null&&ee.enabled.x&&(x=_),ee!=null&&ee.enabled.y&&(te=g),b&&!u&&(d?x=f-2*Un(c.left,c.right):te=p-2*Un(c.top,c.bottom)),await o({...t,availableWidth:x,availableHeight:te});let ne=await i.getDimensions(a.floating);return f!==ne.width||p!==ne.height?{reset:{rects:!0}}:{}}}};function Tr(){return typeof window<`u`}function Er(e){return kr(e)?(e.nodeName||``).toLowerCase():`#document`}function Dr(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Or(e){return((kr(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function kr(e){return Tr()?e instanceof Node||e instanceof Dr(e).Node:!1}function Ar(e){return Tr()?e instanceof Element||e instanceof Dr(e).Element:!1}function jr(e){return Tr()?e instanceof HTMLElement||e instanceof Dr(e).HTMLElement:!1}function Mr(e){return!Tr()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof Dr(e).ShadowRoot}function Nr(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=Wr(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!==`inline`&&i!==`contents`}function Pr(e){return/^(table|td|th)$/.test(Er(e))}function Fr(e){try{if(e.matches(`:popover-open`))return!0}catch{}try{return e.matches(`:modal`)}catch{return!1}}const Ir=/transform|translate|scale|rotate|perspective|filter/,Lr=/paint|layout|strict|content/,Rr=e=>!!e&&e!==`none`;let zr;function Br(e){let t=Ar(e)?Wr(e):e;return Rr(t.transform)||Rr(t.translate)||Rr(t.scale)||Rr(t.rotate)||Rr(t.perspective)||!Hr()&&(Rr(t.backdropFilter)||Rr(t.filter))||Ir.test(t.willChange||``)||Lr.test(t.contain||``)}function Vr(e){let t=Kr(e);for(;jr(t)&&!Ur(t);){if(Br(t))return t;if(Fr(t))return null;t=Kr(t)}return null}function Hr(){return zr??=typeof CSS<`u`&&CSS.supports&&CSS.supports(`-webkit-backdrop-filter`,`none`),zr}function Ur(e){return/^(html|body|#document)$/.test(Er(e))}function Wr(e){return Dr(e).getComputedStyle(e)}function Gr(e){return Ar(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Kr(e){if(Er(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||Mr(e)&&e.host||Or(e);return Mr(t)?t.host:t}function qr(e){let t=Kr(e);return Ur(t)?(e.ownerDocument||e).body:jr(t)&&Nr(t)?t:qr(t)}function Jr(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=qr(e),i=r===e.ownerDocument?.body,a=Dr(r);if(i){let e=Yr(a);return t.concat(a,a.visualViewport||[],Nr(r)?r:[],e&&n?Jr(e):[])}return t.concat(r,Jr(r,[],n))}function Yr(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Xr(e){let t=Wr(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=jr(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=Wn(n)!==a||Wn(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function Zr(e){return Ar(e)?e:e.contextElement}function Qr(e){let t=Zr(e);if(!jr(t))return Kn(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=Xr(t),o=(a?Wn(n.width):n.width)/r,s=(a?Wn(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}const $r=/*#__PURE__*/ Kn(0);function ei(e){let t=Dr(e);return!Hr()||!t.visualViewport?$r:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function ti(e,t,n){return t===void 0&&(t=!1),!!n&&t&&n===Dr(e)}function ni(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=Zr(e),o=Kn(1);t&&(r?Ar(r)&&(o=Qr(r)):o=Qr(e));let s=ti(a,n,r)?ei(a):Kn(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a&&r){let e=Dr(a),t=Ar(r)?Dr(r):r,n=e,i=Yr(n);for(;i&&t!==n;){let e=Qr(i),t=i.getBoundingClientRect(),r=Wr(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=Dr(i),i=Yr(n)}}return mr({width:u,height:d,x:c,y:l})}function ri(e,t){let n=Gr(e).scrollLeft;return t?t.left+n:ni(Or(e)).left+n}function ii(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-ri(e,n),y:n.top+t.scrollTop}}function ai(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=Or(r),s=t?Fr(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=Kn(1),u=Kn(0),d=jr(r);if((d||!a)&&((Er(r)!==`body`||Nr(o))&&(c=Gr(r)),d)){let e=ni(r);l=Qr(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?ii(o,c):Kn(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function oi(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function si(e){let t=Gr(e),n=e.ownerDocument.body,r=Un(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),i=Un(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight),a=-t.scrollLeft+ri(e),o=-t.scrollTop;return Wr(n).direction===`rtl`&&(a+=Un(e.clientWidth,n.clientWidth)-r),{width:r,height:i,x:a,y:o}}function ci(e,t,n){n===void 0&&(n=`viewport`);let r=n===`layoutViewport`,i=Dr(e),a=Or(e),o=i.visualViewport,s=a.clientWidth,c=a.clientHeight,l=0,u=0;if(o){let e=!Hr()||t===`fixed`;r?e||(l=-o.offsetLeft,u=-o.offsetTop):(s=o.width,c=o.height,e&&(l=o.offsetLeft,u=o.offsetTop))}if(ri(a)<=0){let e=a.ownerDocument,t=e.body,n=getComputedStyle(t),r=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,i=Math.abs(a.clientWidth-t.clientWidth-r),o=getComputedStyle(a).scrollbarGutter===`stable both-edges`?i/2:i;o<=25&&(s-=o)}return{width:s,height:c,x:l,y:u}}function li(e,t){let n=ni(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=Qr(e);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function ui(e,t,n){let r;if(t===`viewport`||t===`layoutViewport`)r=ci(e,n,t);else if(t===`document`)r=si(Or(e));else if(Ar(t))r=li(t,n);else{let n=ei(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return mr(r)}function di(e,t){let n=t.get(e);if(n)return n;let r=Jr(e,[],!1).filter(e=>Ar(e)&&Er(e)!==`body`),i=null,a=Wr(e).position===`fixed`,o=a?Kr(e):e;for(;Ar(o)&&!Ur(o);){let e=Wr(o),t=Br(o),n=i?i.position:a?`fixed`:``;!t&&(n===`fixed`||n===`absolute`&&e.position===`static`)?r=r.filter(e=>e!==o):i=e,o=Kr(o)}return t.set(e,r),r}function fi(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?Fr(t)?[]:di(t,this._c):[].concat(n),r],o=ui(t,a[0],i),s=o.top,c=o.right,l=o.bottom,u=o.left;for(let e=1;e<a.length;e++){let n=ui(t,a[e],i);s=Un(n.top,s),c=Hn(n.right,c),l=Hn(n.bottom,l),u=Un(n.left,u)}return{width:c-u,height:l-s,x:u,y:s}}function pi(e){let{width:t,height:n}=Xr(e);return{width:t,height:n}}function mi(e,t,n){let r=jr(t),i=Or(t),a=n===`fixed`,o=ni(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=Kn(0);if((r||!a)&&((Er(t)!==`body`||Nr(i))&&(s=Gr(t)),r)){let e=ni(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}!r&&i&&(c.x=ri(i));let l=i&&!r&&!a?ii(i,s):Kn(0);return{x:o.left+s.scrollLeft-c.x-l.x,y:o.top+s.scrollTop-c.y-l.y,width:o.width,height:o.height}}function hi(e){return Wr(e).position===`static`}function gi(e,t){if(!jr(e)||Wr(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return Or(e)===n&&(n=n.ownerDocument.body),n}function _i(e,t){let n=Dr(e);if(Fr(e))return n;if(!jr(e)){let t=Kr(e);for(;t&&!Ur(t);){if(Ar(t)&&!hi(t))return t;t=Kr(t)}return n}let r=gi(e,t);for(;r&&Pr(r)&&hi(r);)r=gi(r,t);return r&&Ur(r)&&hi(r)&&!Br(r)?n:r||Vr(e)||n}const vi=async function(e){let t=this.getOffsetParent||_i,n=this.getDimensions,r=await n(e.floating);return{reference:mi(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function yi(e){return Wr(e).direction===`rtl`}const bi={convertOffsetParentRelativeRectToViewportRelativeRect:ai,getDocumentElement:Or,getClippingRect:fi,getOffsetParent:_i,getElementRects:vi,getClientRects:oi,getDimensions:pi,getScale:Qr,isElement:Ar,isRTL:yi};function xi(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Si(e,t,n){let r=null,i,a=Or(e);function o(){var e;clearTimeout(i),(e=r)==null||e.disconnect(),r=null}function s(n,c){n===void 0&&(n=!1),c===void 0&&(c=1),o();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(n||t(),!f||!p)return;let m=Gn(d),h=Gn(a.clientWidth-(u+f)),g=Gn(a.clientHeight-(d+p)),_=Gn(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:Un(0,Hn(1,c))||1},y=!0;function ee(t){let n=t[0].intersectionRatio;if(!xi(l,e.getBoundingClientRect()))return s();if(n!==c){if(!y)return s();n?s(!1,n):i=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{r=new IntersectionObserver(ee,{...v,root:a.ownerDocument})}catch{r=new IntersectionObserver(ee,v)}r.observe(e)}let c=Dr(e),l=()=>s(n);return c.addEventListener(`resize`,l),s(!0),()=>{c.removeEventListener(`resize`,l),o()}}function Ci(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=Zr(e),u=i||a?[...l?Jr(l):[],...t?Jr(t):[]]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n),a&&e.addEventListener(`resize`,n)});let d=l&&s?Si(l,n,a):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&t&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),t&&p.observe(t));let m,h=c?ni(e):null;c&&g();function g(){let t=ni(e);h&&!xi(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}const wi=Sr,Ti=Cr,Ei=yr,Di=wr,Oi=vr,ki=(e,t,n)=>{let r=/* @__PURE__ */ new Map,i=n??{},a={...bi,...i.platform,_c:r};return _r(e,t,{...i,platform:a})};function Ai(e){return Mi(e)}function ji(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Mi(e){for(let t=e;t;t=ji(t))if(t instanceof Element&&getComputedStyle(t).display===`none`)return null;for(let t=ji(e);t;t=ji(t)){if(!(t instanceof Element))continue;let e=getComputedStyle(t);if(e.display!==`contents`&&(e.position!==`static`||Br(e)||t.tagName===`BODY`))return t}return null}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Ni(e){return typeof e==`object`&&!!e&&`getBoundingClientRect`in e&&(`contextElement`in e?e instanceof Element:!0)}var Pi=!!globalThis?.HTMLElement?.prototype.hasOwnProperty(`popover`),O=class extends ft{constructor(){super(...arguments),this.localize=new nn(this),this.SUPPORTS_POPOVER=!1,this.active=!1,this.placement=`top`,this.boundary=`viewport`,this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement=`anchor`,this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements=``,this.flipFallbackStrategy=`best-fit`,this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl&&this.popup){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),n=this.placement.includes(`top`)||this.placement.includes(`bottom`),r=0,i=0,a=0,o=0,s=0,c=0,l=0,u=0;n?e.top<t.top?(r=e.left,i=e.bottom,a=e.right,o=e.bottom,s=t.left,c=t.top,l=t.right,u=t.top):(r=t.left,i=t.bottom,a=t.right,o=t.bottom,s=e.left,c=e.top,l=e.right,u=e.top):e.left<t.left?(r=e.right,i=e.top,a=t.left,o=t.top,s=e.right,c=e.bottom,l=t.left,u=t.bottom):(r=t.right,i=t.top,a=e.left,o=e.top,s=t.right,c=t.bottom,l=e.left,u=e.bottom),this.style.setProperty(`--hover-bridge-top-left-x`,`${r}px`),this.style.setProperty(`--hover-bridge-top-left-y`,`${i}px`),this.style.setProperty(`--hover-bridge-top-right-x`,`${a}px`),this.style.setProperty(`--hover-bridge-top-right-y`,`${o}px`),this.style.setProperty(`--hover-bridge-bottom-left-x`,`${s}px`),this.style.setProperty(`--hover-bridge-bottom-left-y`,`${c}px`),this.style.setProperty(`--hover-bridge-bottom-right-x`,`${l}px`),this.style.setProperty(`--hover-bridge-bottom-right-y`,`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.SUPPORTS_POPOVER=Pi,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has(`active`)&&(this.active?this.start():this.stop()),e.has(`anchor`)&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor==`string`){let e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchorEl=this.anchor instanceof Element||Ni(this.anchor)?this.anchor:this.querySelector(`[slot="anchor"]`);this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&this.active&&this.isConnected&&(this.popup?.showPopover?.(),this.cleanup=Ci(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.popup?.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute(`data-current-placement`),this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl||!this.popup)return;let e=[wi({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Di({apply:({rects:e})=>{let t=this.sync===`width`||this.sync===`both`,n=this.sync===`height`||this.sync===`both`;this.popup.style.width=t?`${e.reference.width}px`:``,this.popup.style.height=n?`${e.reference.height}px`:``}})):(this.popup.style.width=``,this.popup.style.height=``);let t;this.SUPPORTS_POPOVER&&!Ni(this.anchor)&&this.boundary===`scroll`&&(t=Jr(this.anchorEl).filter(e=>e instanceof Element)),this.flip&&e.push(Ei({boundary:this.flipBoundary||t,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy===`best-fit`?`bestFit`:`initialPlacement`,padding:this.flipPadding})),this.shift&&e.push(Ti({boundary:this.shiftBoundary||t,padding:this.shiftPadding})),this.autoSize?e.push(Di({boundary:this.autoSizeBoundary||t,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{this.autoSize===`vertical`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-height`,`${t}px`):this.style.removeProperty(`--auto-size-available-height`),this.autoSize===`horizontal`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-width`,`${e}px`):this.style.removeProperty(`--auto-size-available-width`)}})):(this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`)),this.arrow&&e.push(Oi({element:this.arrowEl,padding:this.arrowPadding}));let n=this.SUPPORTS_POPOVER?e=>bi.getOffsetParent(e,Ai):bi.getOffsetParent;ki(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.SUPPORTS_POPOVER?`absolute`:`fixed`,platform:{...bi,getOffsetParent:n}}).then(({x:e,y:t,middlewareData:n,placement:r})=>{let i=this.localize.dir()===`rtl`,a={top:`bottom`,right:`left`,bottom:`top`,left:`right`}[r.split(`-`)[0]];if(this.setAttribute(`data-current-placement`,r),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=n.arrow.x,t=n.arrow.y,r=``,o=``,s=``,c=``;if(this.arrowPlacement===`start`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;r=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``,o=i?n:``,c=i?``:n}else if(this.arrowPlacement===`end`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;o=i?``:n,c=i?n:``,s=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``}else this.arrowPlacement===`center`?(c=typeof e==`number`?`calc(50% - var(--arrow-size-diagonal))`:``,r=typeof t==`number`?`calc(50% - var(--arrow-size-diagonal))`:``):(c=typeof e==`number`?`${e}px`:``,r=typeof t==`number`?`${t}px`:``);Object.assign(this.arrowEl.style,{top:r,right:o,bottom:s,left:c,[a]:`calc(var(--arrow-base-offset) - var(--arrow-size-diagonal))`})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new Bn)}render(){return we`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${Nn({"popup-hover-bridge":!0,"popup-hover-bridge-visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${Nn({popup:!0,"popup-active":this.active,"popup-fixed":!this.SUPPORTS_POPOVER,"popup-has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?we`<div part="arrow" class="arrow" role="presentation"></div>`:``}
      </div>
    `}};O.css=Vn,w([ot(`.popup`)],O.prototype,`popup`,2),w([ot(`.arrow`)],O.prototype,`arrowEl`,2),w([T({attribute:!1,type:Boolean})],O.prototype,`SUPPORTS_POPOVER`,2),w([T()],O.prototype,`anchor`,2),w([T({type:Boolean,reflect:!0})],O.prototype,`active`,2),w([T({reflect:!0})],O.prototype,`placement`,2),w([T()],O.prototype,`boundary`,2),w([T({type:Number})],O.prototype,`distance`,2),w([T({type:Number})],O.prototype,`skidding`,2),w([T({type:Boolean})],O.prototype,`arrow`,2),w([T({attribute:`arrow-placement`})],O.prototype,`arrowPlacement`,2),w([T({attribute:`arrow-padding`,type:Number})],O.prototype,`arrowPadding`,2),w([T({type:Boolean})],O.prototype,`flip`,2),w([T({attribute:`flip-fallback-placements`,converter:{fromAttribute:e=>e.split(` `).map(e=>e.trim()).filter(e=>e!==``),toAttribute:e=>e.join(` `)}})],O.prototype,`flipFallbackPlacements`,2),w([T({attribute:`flip-fallback-strategy`})],O.prototype,`flipFallbackStrategy`,2),w([T({type:Object})],O.prototype,`flipBoundary`,2),w([T({attribute:`flip-padding`,type:Number})],O.prototype,`flipPadding`,2),w([T({type:Boolean})],O.prototype,`shift`,2),w([T({type:Object})],O.prototype,`shiftBoundary`,2),w([T({attribute:`shift-padding`,type:Number})],O.prototype,`shiftPadding`,2),w([T({attribute:`auto-size`})],O.prototype,`autoSize`,2),w([T()],O.prototype,`sync`,2),w([T({type:Object})],O.prototype,`autoSizeBoundary`,2),w([T({attribute:`auto-size-padding`,type:Number})],O.prototype,`autoSizePadding`,2),w([T({attribute:`hover-bridge`,type:Boolean})],O.prototype,`hoverBridge`,2),O=w([tt(`wa-popup`)],O);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Fi=()=>({checkValidity(e){let t=e.input,n={message:``,isValid:!0,invalidKeys:[]};if(!t)return n;let r=!0;if(`checkValidity`in t&&(r=t.checkValidity()),r)return n;if(n.isValid=!1,`validationMessage`in t&&(n.message=t.validationMessage),!(`validity`in t))return n.invalidKeys.push(`customError`),n;for(let e in t.validity){if(e===`valid`)continue;let r=e;t.validity[r]&&n.invalidKeys.push(r)}return n}}),Ii=c`
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
*/const Li=e=>e??C,Ri=Symbol.for(``),zi=e=>{
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
if(e?.r===Ri)return e?._$litStatic$},Bi=(e,...t)=>({_$litStatic$:t.reduce((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1],e[0]),r:Ri}),Vi=/* @__PURE__ */ new Map,Hi=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],(i=zi(a))!==void 0);)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=Vi.get(e))===void 0&&(o.raw=o,Vi.set(e,t=o)),n=s}return e(t,...n)})(we);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var k=class extends Cn{constructor(){super(...arguments),this.assumeInteractionOn=[`click`],this.hasSlotController=new Ke(this,`[default]`,`start`,`end`),this.localize=new nn(this),this.invalid=!1,this.isIconButton=!1,this.title=``,this.variant=`neutral`,this.appearance=`accent`,this.size=`m`,this.withCaret=!1,this.withStart=!1,this.withEnd=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type=`button`}static get validators(){return[...super.validators,Fi()]}handleSizeChange(){En(this.localName,this.size)}constructLightDOMButton(){let e=document.createElement(`button`);for(let t of this.attributes)t.name!==`style`&&e.setAttribute(t.name,t.value);return e.type=this.type,e.style.position=`absolute !important`,e.style.width=`0 !important`,e.style.height=`0 !important`,e.style.clipPath=`inset(50%) !important`,e.style.overflow=`hidden !important`,e.style.whiteSpace=`nowrap !important`,this.name&&(e.name=this.name),e.value=this.value||``,e}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopImmediatePropagation();return}if(this.type!==`submit`&&this.type!==`reset`||!this.getForm())return;let t=this.constructLightDOMButton();this.parentElement?.append(t),t.click(),t.remove()}handleInvalid(){this.dispatchEvent(new xn)}handleLabelSlotChange(){let e=this.labelSlot.assignedNodes({flatten:!0}),t=!1,n=!1,r=!1,i=!1;[...e].forEach(e=>{if(e.nodeType===Node.ELEMENT_NODE){let r=e;r.localName===`wa-icon`?(n=!0,t||=r.label!==void 0):i=!0}else e.nodeType===Node.TEXT_NODE&&(e.textContent?.trim()||``).length>0&&(r=!0)}),this.isIconButton=n&&!r&&!i,this.customStates.set(`icon-button`,this.isIconButton),this.isIconButton&&!t&&console.warn(`Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.`,this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.customStates.set(`disabled`,this.disabled),this.updateValidity()}handleHrefChange(){this.customStates.set(`link`,this.isLink())}handleLoadingChange(){this.customStates.set(`loading`,this.loading)}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=this.isLink(),t=e?Bi`a`:Bi`button`;return Hi`
      <${t}
        part="base button"
        class=${Nn({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()===`rtl`,"has-label":this.hasSlotController.test(`[default]`),"has-start":this.hasSlotController.test(`start`,`withStart`),"has-end":this.hasSlotController.test(`end`,`withEnd`),"is-icon-button":this.isIconButton})}
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
    `}};k.shadowRootOptions={...Cn.shadowRootOptions,delegatesFocus:!0},k.css=[Ii,Rn,Dn],w([ot(`.button`)],k.prototype,`button`,2),w([ot(`slot:not([name])`)],k.prototype,`labelSlot`,2),w([it()],k.prototype,`invalid`,2),w([it()],k.prototype,`isIconButton`,2),w([T()],k.prototype,`title`,2),w([T({reflect:!0})],k.prototype,`variant`,2),w([T({reflect:!0})],k.prototype,`appearance`,2),w([T({reflect:!0})],k.prototype,`size`,2),w([qe(`size`)],k.prototype,`handleSizeChange`,1),w([T({attribute:`with-caret`,type:Boolean,reflect:!0})],k.prototype,`withCaret`,2),w([T({attribute:`with-start`,type:Boolean})],k.prototype,`withStart`,2),w([T({attribute:`with-end`,type:Boolean})],k.prototype,`withEnd`,2),w([T({type:Boolean})],k.prototype,`disabled`,2),w([T({type:Boolean,reflect:!0})],k.prototype,`loading`,2),w([T({type:Boolean,reflect:!0})],k.prototype,`pill`,2),w([T()],k.prototype,`type`,2),w([T({reflect:!0})],k.prototype,`name`,2),w([T({reflect:!0})],k.prototype,`value`,2),w([T({reflect:!0})],k.prototype,`href`,2),w([T()],k.prototype,`target`,2),w([T()],k.prototype,`rel`,2),w([T()],k.prototype,`download`,2),w([T({attribute:`formaction`})],k.prototype,`formAction`,2),w([T({attribute:`formenctype`})],k.prototype,`formEnctype`,2),w([T({attribute:`formmethod`})],k.prototype,`formMethod`,2),w([T({attribute:`formnovalidate`,type:Boolean})],k.prototype,`formNoValidate`,2),w([T({attribute:`formtarget`})],k.prototype,`formTarget`,2),w([qe(`disabled`,{waitUntilFirstUpdate:!0})],k.prototype,`handleDisabledChange`,1),w([qe(`href`)],k.prototype,`handleHrefChange`,1),w([qe(`loading`,{waitUntilFirstUpdate:!0})],k.prototype,`handleLoadingChange`,1),k=w([tt(`wa-button`)],k),k.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ui=c`
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
`,Wi=class extends ft{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(...arguments),this.localize=new nn(this)}render(){return we`
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
    `}};Wi.css=Ui,Wi=w([tt(`wa-spinner`)],Wi);var Gi=/* @__PURE__ */ t({default:()=>D}),A
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;Object.getOwnPropertyDescriptors||(()=>{var e;if(typeof Reflect<`u`&&Reflect.ownKeys)e=Reflect.ownKeys;else{var t=Object.getOwnPropertySymbols||(e=>[]);e=(e=>Object.getOwnPropertyNames(e).concat(t(e)))}return(t=>{for(var n=e(t),r={},i=n.length|0,a=0;a!==i;){var o=n[a];Object.defineProperty(r,o,{configurable:!0,enumerable:!0,writable:!0,value:Object.getOwnPropertyDescriptor(t,o)}),a=a+1|0}return r})})();function Ki(e){this.c=e}A=Ki.prototype,A.toString=(function(){return String.fromCharCode(this.c)});function qi(e,t){this.l=e,this.h=t}A=qi.prototype,A.toString=(function(){return Bc(this.l,this.h)});function Ji(e){switch(typeof e){case`string`:return Eh.l();case`number`:return la(e)?e<<24>>24===e?qp.l():e<<16>>16===e?am.l():vh.l():ua(e)?_h.l():gh.l();case`boolean`:return Jf.l();case`undefined`:return Mc.l();default:return e instanceof qi?xh.l():e instanceof Ki?Zf.l():e&&e.$classData?e.$classData.l():null}}function Yi(e){switch(typeof e){case`string`:return`java.lang.String`;case`number`:return la(e)?e<<24>>24===e?`java.lang.Byte`:e<<16>>16===e?`java.lang.Short`:`java.lang.Integer`:ua(e)?`java.lang.Float`:`java.lang.Double`;case`boolean`:return`java.lang.Boolean`;case`undefined`:return`java.lang.Void`;default:return e instanceof qi?`java.lang.Long`:e instanceof Ki?`java.lang.Character`:e&&e.$classData?e.$classData.N:null.ks()}}function Xi(e,t){switch(typeof e){case`string`:return wh(e,t);case`number`:return mh(e,t);case`boolean`:return Kf(e,t);case`undefined`:return kc(e,t);default:return e&&e.$classData||e===null?e.j(t):e instanceof qi?yh(e.l,e.h,t):e instanceof Ki?Xf(e.c,t):ha.prototype.j.call(e,t)}}function Zi(e){switch(typeof e){case`string`:return Ch(e);case`number`:return hh(e);case`boolean`:return qf(e);case`undefined`:return Ac(e);default:return e&&e.$classData||e===null?e.p():e instanceof qi?bh(e.l,e.h):e instanceof Ki?Yf(e.c):ha.prototype.p.call(e)}}function Qi(e){return e===void 0?`undefined`:e.toString()}function $i(e){if(e===0)throw new Kp(`/ by zero`);return e}function ea(e){return e>2147483647?2147483647:e<-2147483648?-2147483648:e|0}function ta(e){return String.fromCharCode(e)}var na=/* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(8));function ra(e,t,n,r,i){if(e!==n||r-t>>>0>i>>>0)for(var a=0;a<i;a=a+1|0)n[r+a|0]=e[t+a|0];else for(var a=i-1|0;a>=0;a=a-1|0)n[r+a|0]=e[t+a|0]}var ia=0,aa=/* @__PURE__ */ new WeakMap;function oa(e){switch(typeof e){case`string`:return Ch(e);case`number`:return hh(e);case`bigint`:var t=0;for(e<BigInt(0)&&(e=~e);e!==BigInt(0);)t^=Number(BigInt.asIntN(32,e)),e>>=BigInt(32);return t;case`boolean`:return e?1231:1237;case`undefined`:return 0;case`symbol`:var n=e.description;return n===void 0?0:Ch(n);default:if(e===null)return 0;var r=aa.get(e);return r===void 0&&(r=ia+1|0,ia=r,aa.set(e,r)),r}}function sa(e){return typeof e==`number`&&e<<24>>24===e&&1/e!=-1/0}function ca(e){return typeof e==`number`&&e<<16>>16===e&&1/e!=-1/0}function la(e){return typeof e==`number`&&(e|0)===e&&1/e!=-1/0}function ua(e){return typeof e==`number`&&(e!==e||Math.fround(e)===e)}function da(e){return new Ki(e)}da(0);function j(e,t){return new qi(e,t)}var fa=j(0,0);function pa(e){return e===null?0:e.c}function ma(e){return e===null?fa:e}function ha(){}A=ha.prototype,A.constructor=ha;function M(){}M.prototype=A,A.p=(function(){return oa(this)}),A.j=(function(e){return this===e}),A.q=(function(){var e=this.p();return Yi(this)+`@`+(e>>>0).toString(16)}),A.toString=(function(){return this.q()});function ga(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}A=ga.prototype=new M,A.constructor=ga,A.ac=(function(e,t,n,r){ra(this.a,e,t.a,n,r)}),A.af=(function(){return new ga(this.a.slice())});function _a(){}_a.prototype=A;function va(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=!1}else this.a=e}A=va.prototype=new M,A.constructor=va,A.ac=(function(e,t,n,r){ra(this.a,e,t.a,n,r)}),A.af=(function(){return new va(this.a.slice())});function ya(e){this.a=typeof e==`number`?new Uint16Array(e):e}A=ya.prototype=new M,A.constructor=ya,A.ac=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),A.af=(function(){return new ya(this.a.slice())});function ba(e){this.a=typeof e==`number`?new Int8Array(e):e}A=ba.prototype=new M,A.constructor=ba,A.ac=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),A.af=(function(){return new ba(this.a.slice())});function xa(e){this.a=typeof e==`number`?new Int16Array(e):e}A=xa.prototype=new M,A.constructor=xa,A.ac=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),A.af=(function(){return new xa(this.a.slice())});function Sa(e){this.a=typeof e==`number`?new Int32Array(e):e}A=Sa.prototype=new M,A.constructor=Sa,A.ac=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),A.af=(function(){return new Sa(this.a.slice())});function Ca(e){typeof e==`number`?(e<<=1,this.a=new Int32Array(e)):this.a=e}A=Ca.prototype=new M,A.constructor=Ca,A.ac=(function(e,t,n,r){t.a.set(this.a.subarray(e<<1,(e+r|0)<<1),n<<1)}),A.af=(function(){return new Ca(this.a.slice())});function wa(e){this.a=typeof e==`number`?new Float32Array(e):e}A=wa.prototype=new M,A.constructor=wa,A.ac=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),A.af=(function(){return new wa(this.a.slice())});function Ta(e){this.a=typeof e==`number`?new Float64Array(e):e}A=Ta.prototype=new M,A.constructor=Ta,A.ac=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),A.af=(function(){return new Ta(this.a.slice())});function N(){this.C=void 0,this.n=null,this.O=null,this.B=null,this.D=0,this.z=null,this.E=``,this.L=void 0,this.A=void 0,this.F=void 0,this.w=void 0,this.J=!1,this.N=``,this.X=!1,this.Y=!1,this.Z=!1,this.I=void 0}A=N.prototype,A.p=(function(e,t,n,r,i){this.n={},this.z=e,this.E=t;var a=this;return this.F=(e=>e===a),this.N=n,this.X=!0,this.I=(e=>!1),r!==void 0&&(this.A=new N().y(this,r,i,t===`J`)),this}),A.i=(function(e,t,n,r){var i=Object.getOwnPropertyNames(n)[0];return this.n=n,this.E=`L`+t+`;`,this.F=(e=>!!e.n[i]),this.J=e===2,this.N=t,this.Y=e===1,this.I=r||(e=>!!(e&&e.$classData&&e.$classData.n[i])),typeof e!=`number`&&(e.prototype.$classData=this),this}),A.y=(function(e,t,n,r,i){t.prototype.$classData=this;var a=`[`+e.E;this.C=t,this.n={s:1,a:1},this.O=e,this.B=e,this.D=1,this.E=a,this.N=a,this.Z=!0;var o=this;return this.F=i||(e=>o===e),this.w=r?(e=>{for(var n=e.length|0,r=new t(n),i=r.a,a=0;a<n;a=a+1|0){var o=e[a];i[a<<1]=o.l,i[(a<<1)+1|0]=o.h}return r}):n?(e=>new t(new n(e))):(e=>new t(e)),this.I=(e=>e instanceof t),this}),A.a=(function(e){function t(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}var n=t.prototype=new _a;n.constructor=t,n.ac=(function(e,t,n,r){ra(this.a,e,t.a,n,r)}),n.af=(function(){return new t(this.a.slice())}),n.$classData=this;var r=e.B||e,i=e.D+1,a=`[`+e.E;this.C=t,this.n={s:1,a:1},this.O=e,this.B=r,this.D=i,this.E=a,this.N=a,this.Z=!0;var o=(e=>{var t=e.D;return t===i?r.F(e.B):t>i&&r===Ea});this.F=o,this.w=(e=>new t(e));var s=this;return this.I=(e=>{var t=e&&e.$classData;return!!t&&(t===s||o(t))}),this}),A.r=(function(){return this.A||=new N().a(this),this.A}),A.l=(function(){return this.L||=new Xd(this),this.L}),A.R=(function(e){return this===e||this.F(e)}),A.S=(function(){return this.P?this.P.l():null}),A.Q=(function(){return this.O?this.O.l():null}),A.U=(function(e){if(this===Da)throw Yp(new Xp);return new(this.r()).C(e)});var Ea=new N;Ea.n={},Ea.E=`Ljava.lang.Object;`,Ea.F=(e=>!e.X),Ea.N=`java.lang.Object`,Ea.I=(e=>e!==null),Ea.A=new N().y(Ea,ga,void 0,!1,(e=>{var t=e.D;return t===1?!e.B.X:t>1})),ha.prototype.$classData=Ea;var Da=new N().p(void 0,`V`,`void`,void 0,void 0),Oa=new N().p(!1,`Z`,`boolean`,va,void 0),ka=new N().p(0,`C`,`char`,ya,Uint16Array),Aa=new N().p(0,`B`,`byte`,ba,Int8Array),ja=new N().p(0,`S`,`short`,xa,Int16Array),Ma=new N().p(0,`I`,`int`,Sa,Int32Array),Na=new N().p(fa,`J`,`long`,Ca,Int32Array),Pa=new N().p(0,`F`,`float`,wa,Float32Array),Fa=new N().p(0,`D`,`double`,Ta,Float64Array);new Int8Array(new Int32Array([1]).buffer)[0];function Ia(e,t,n){for(var r=new Int32Array(e),i=t.length|0,a=0,o=0,s=0,c=0;o!==i;){var l=t.charCodeAt(o);l<80?c=(c|l-48)<<5:(c|=l-93,a=(a&n)+c|0,r[s]=a,s=s+1|0,c=0),o=o+1|0}return r}function La(e,t){return new Sa(Ia(e,t,-1))}var Ra=new N().i(1,`com.raquo.airstream.core.InternalObserver`,{bI:1});function za(e){return Ji(e).dJ()+`@`+e.p()}function Ba(e){var t=e.cO();return t===void 0?e.cJ():t}function Va(){Ha=this,Ua().hG(new X((e=>void 0)),al().cy,!0)}A=Va.prototype=new M,A.constructor=Va,A.hG=(function(e,t,n){return new Nf(e,n,t,this)}),A.jc=(function(e,t){return new Pf(e,t,this)}),new N().i(Va,`com.raquo.airstream.core.Observer$`,{bK:1});var Ha;function Ua(){return Ha||=new Va,Ha}function Wa(){}A=Wa.prototype=new M,A.constructor=Wa,A.jX=(function(e,t){var n=e.indexOf(t)|0,r=n!==-1;return r&&e.splice(n,1),r}),new N().i(Wa,`com.raquo.airstream.core.ObserverList$`,{bN:1});var Ga;function Ka(){return Ga||=new Wa,Ga}function qa(){this.b6=0,this.b6=0}A=qa.prototype=new M,A.constructor=qa,A.ho=(function(){return this.b6=this.b6===2147483647?1:1+this.b6|0,this.b6}),new N().i(qa,`com.raquo.airstream.core.Signal$`,{bP:1});var Ja;function Ya(){return Ja||=new qa,Ja}function Xa(e){this.cZ=null,this.e3=null,this.d0=0,this.cZ=e,this.e3=void 0;var t=po().cd();this.d0=t===void 0?1:1+t.d0|0,eo().cg===-1||this.d0>eo().cg?gd().a6(new ah(this,eo().cg)):io().E?io().aQ.push(this)|0:po().dC(this)}A=Xa.prototype=new M,A.constructor=Xa;var Za=new N().i(Xa,`com.raquo.airstream.core.Transaction`,{bQ:1});function Qa(){this.cg=0,this.e4=null,$a=this,this.cg=1e3,this.e4=new X((e=>{throw Zd(new Qd,`Attempted to run Transaction `+e+` after it was already executed.`)}))}A=Qa.prototype=new M,A.constructor=Qa,A.gQ=(function(e){try{e.cZ.f(e);var t=e.e3;if(t!==void 0)for(;t.kv();)t.kr().kx(e)}catch(e){var n=e instanceof Ku?e:new rg(e);gd().a6(n)}}),new N().i(Qa,`com.raquo.airstream.core.Transaction$`,{bR:1});var $a;function eo(){return $a||=new Qa,$a}function to(e){e.ch.length|0?new Xa(new X((t=>{for(;(e.ch.length|0)>0;){var n=e.ch.shift();try{n.f(t)}catch(e){var r=e instanceof Ku?e:new rg(e);gd().a6(r)}}for(;(e.aQ.length|0)>0;){var i=e.aQ.shift();po().dC(i)}}))):(e.aQ.length|0)>0&&new Xa(new X((t=>{for(;(e.aQ.length|0)>0;)po().dC(e.aQ.shift())})))}function no(){this.E=!1,this.ch=null,this.aQ=null,ro=this,this.E=!1,this.ch=Fo().A(B().z(new(z.r()).C([]))),this.aQ=Fo().A(B().z(new(Za.r()).C([])))}A=no.prototype=new M,A.constructor=no,new N().i(no,`com.raquo.airstream.core.Transaction$onStart$`,{bS:1});var ro;function io(){return ro||=new no,ro}function ao(e,t){return e.aR.get(t)}function oo(e,t){e.ci.unshift(t)}function so(e){return e.ci.shift()}function co(e,t,n){var r=ao(e,t),i=r===void 0,a=r===void 0?Fo().A(B().z(new(Za.r()).C([]))):r;a.push(n),i&&e.aR.set(t,a)}function lo(e,t){var n=ao(e,t),r=n===void 0||(n.length|0)>0?n:void 0;if(r!==void 0){var i=r.shift();return r.length|0||e.aR.delete(t),i}}function uo(){this.ci=null,this.aR=null,fo=this,this.ci=Fo().A(B().z(new(Za.r()).C([]))),this.aR=/* @__PURE__ */ new Map}A=uo.prototype=new M,A.constructor=uo,A.dC=(function(e){var t=this.cd();t===void 0?(oo(this,e),eo().gQ(e),this.iG(e)):co(this,t,e)}),A.iG=(function(e){for(var t=e;;){var n=this.cd(),r=t;if(!(n!==void 0&&Ml().H(r,n)))throw Zd(new Qd,`Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.`);this.jQ(t),t.cZ=eo().e4;var i=this.cd();if(Ml().H(i,void 0)){if((this.aR.size|0)>0){var a=new ud(0);throw this.aR.forEach((e=>((t,n)=>{e.bS=e.bS+(t.length|0)|0}))(a)),Zd(new Qd,`Transaction queue error: Stack cleared, but a total of `+a.bS+` children for `+(this.aR.size|0)+` transactions remain. This is a bug in Airstream.`)}return}eo().gQ(i),t=i}}),A.jQ=(function(e){for(var t=e;;){var n=lo(this,t);if(Ml().H(n,void 0)){so(this);var r=this.cd();if(!Ml().H(r,void 0))t=r;else return}else{oo(this,n);return}}}),A.cd=(function(){return this.ci[0]}),new N().i(uo,`com.raquo.airstream.core.Transaction$pendingTransactions$`,{bT:1});var fo;function po(){return fo||=new uo,fo}function mo(e,t){var n=e.ar.indexOf(t)|0;if(n!==-1)e.ar.splice(n,1),e.J.g()||t.hq();else throw Zd(new Qd,`Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?`)}function ho(e){for(;(e.cj.length|0)>0;)mo(e,e.cj.shift())}function go(e){this.e5=null,this.ar=null,this.b7=!1,this.cj=null,this.J=null,this.b8=0,this.e5=e,this.ar=Fo().A(B().z(new(vo.r()).C([]))),this.b7=!0,this.cj=Fo().A(B().z(new(vo.r()).C([]))),this.J=kh(),this.b8=0}A=go.prototype=new M,A.constructor=go,A.gG=(function(){if(this.J.g()){var e=io(),t=(()=>{var e=new au(this.e5);this.J=new Ah(e),this.b7=!1,this.b8=0;for(var t=0,n=this.ar.length|0;t<n;){var r=t+this.b8|0;this.ar[r].hp(e),t=1+t|0}ho(this),this.b7=!0,this.b8=0});if(io(),e.E)t();else{e.E=!0;try{t()}finally{e.E=!1,to(e)}}}else throw Zd(new Qd,`Can not activate `+this+`: it is already active`)}),A.iz=(function(){if(this.J.g())throw Zd(new Qd,`Can not deactivate DynamicOwner: it is not active`);this.b7=!1;for(var e=this.ar,t=0,n=e.length|0;t<n;)e[t].hq(),t=1+t|0;ho(this);var r=this.J;r.g()||r.v().jy(),ho(this),this.b7=!0,this.J=kh()}),A.i6=(function(e,t){t?(this.b8=1+this.b8|0,this.ar.unshift(e)):this.ar.push(e);var n=this.J;if(!n.g()){var r=n.v();e.hp(r)}}),A.jY=(function(e){this.b7?mo(this,e):this.cj.push(e)}),new N().i(go,`com.raquo.airstream.ownership.DynamicOwner`,{bW:1});function _o(e,t,n){this.ck=null,this.e6=null,this.cl=null,this.ck=e,this.e6=t,this.cl=kh(),e.i6(this,n)}A=_o.prototype=new M,A.constructor=_o,A.cN=(function(){this.ck.jY(this)}),A.hp=(function(e){var t=io(),n=(()=>{this.cl=this.e6.f(e)});if(io(),t.E)n();else{t.E=!0;try{n()}finally{t.E=!1,to(t)}}}),A.hq=(function(){var e=this.cl;e.g()||(e.v().cN(),this.cl=kh())});var vo=new N().i(_o,`com.raquo.airstream.ownership.DynamicSubscription`,{bX:1});function yo(){}A=yo.prototype=new M,A.constructor=yo,A.cV=(function(e,t,n){return new _o(e,new X((e=>new Ah(t.f(e)))),n)}),A.hA=(function(e,t,n){return new _o(e,new X((e=>(t.f(e),kh()))),n)}),A.ka=(function(e,t,n){return xo().cV(e,new X((e=>vd(t,n,e))),!1)}),new N().i(yo,`com.raquo.airstream.ownership.DynamicSubscription$`,{bY:1});var bo;function xo(){return bo||=new yo,bo}function So(e){e.b9=Fo().A(B().z(new(Oo.r()).C([])))}function Co(e){for(var t=e.b9,n=0,r=t.length|0;n<r;)Eo(t[n]),n=1+n|0;e.b9.length=0}function wo(e,t){var n=e.b9.indexOf(t)|0;if(n!==-1)e.b9.splice(n,1);else throw Zd(new Qd,`Can not remove Subscription from Owner: subscription not found.`)}function To(e,t){e.b9.push(t)}function Eo(e){if(!e.d2)e.e8.O(),e.d2=!0;else throw Zd(new Qd,`Can not kill Subscription: it was already killed.`)}function Do(e,t){this.e9=null,this.e8=null,this.d2=!1,this.e9=e,this.e8=t,this.d2=!1,e.jN(this)}A=Do.prototype=new M,A.constructor=Do,A.cN=(function(){Eo(this),wo(this.e9,this)});var Oo=new N().i(Do,`com.raquo.airstream.ownership.Subscription`,{c1:1});function ko(e,t){this.ea=null,this.eb=null,this.as=null,this.aS=!1,this.ea=e,this.eb=t,this.as=kh(),this.aS=!1}A=ko.prototype=new M,A.constructor=ko,A.jt=(function(){var e=this.as;return!e.g()&&!e.v().ck.J.g()}),A.k5=(function(e){if(this.aS)throw Zd(new Qd,`Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var t=this.as;if(t.g())var n=!1;else var r=t.v().ck,n=e===null?r===null:e===r;if(!n){this.jt()&&!e.J.g()&&(this.aS=!0);var i=this.as;i.g()||(i.v().cN(),this.as=kh());var a=xo().cV(e,new X((e=>(this.aS||this.ea.O(),new Do(e,new _p((()=>{this.aS||this.eb.O()})))))),!1);this.as=new Ah(a),this.aS=!1}}),A.is=(function(){if(this.aS)throw Zd(new Qd,`Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var e=this.as;e.g()||e.v().cN(),this.as=kh()}),new N().i(ko,`com.raquo.airstream.ownership.TransferableSubscription`,{c2:1});function Ao(){}A=Ao.prototype=new M,A.constructor=Ao,A.ig=(function(e){return new sh(new nh(e))}),new N().i(Ao,`com.raquo.airstream.state.Var$`,{c6:1});var jo;function Mo(){return jo||=new Ao,jo}function No(){}A=No.prototype=new M,A.constructor=No,A.A=(function(e){return[...Yl().kg(e)]}),new N().i(No,`com.raquo.ew.JsArray$`,{c9:1});var Po;function Fo(){return Po||=new No,Po}function Io(){}A=Io.prototype=new M,A.constructor=Io,A.jo=(function(e,t,n){return(e.indexOf(t,n)|0)!=-1}),A.j7=(function(e,t){for(var n=0,r=e.length|0;n<r;)t(e[n]),n=1+n|0}),new N().i(Io,`com.raquo.ew.JsArray$RichJsArray$`,{ca:1});var Lo;function Ro(){return Lo||=new Io,Lo}function zo(){this.ei=null,Bo=this,document.createElement(`template`),this.ix(J().d.kb().kc()),this.ei=/* @__PURE__ */ RegExp(` `,`g`)}A=zo.prototype=new M,A.constructor=zo,A.ic=(function(e,t){try{return e.appendChild(t),!0}catch(e){var n=e instanceof Ku?e:new rg(e);if(n instanceof rg&&n.a1 instanceof DOMException)return!1;throw n instanceof rg?n.a1:n}}),A.jv=(function(e,t){for(var n=e;;){if(n.parentNode!==null)var r=n.parentNode;else var i=n.host,r=i===void 0?null:i;if(r===null)return!1;if(Ml().H(t,r))return!0;n=r}}),A.hZ=(function(e,t){e.addEventListener(t.bd.bD.cs,t.df,t.dg)}),A.jV=(function(e,t){e.removeEventListener(t.bd.bD.cs,t.df,t.dg)}),A.iw=(function(e){return document.createElement(e.dM())}),A.je=(function(e,t){var n=this.jf(e,t);return n===void 0?void 0:t.ba.cI(n)}),A.jf=(function(e,t){var n=e.F.getAttributeNS(null,t.at);return n===null?void 0:n}),A.dS=(function(e,t,n){this.k2(e,t,t.ba.c7(n))}),A.k2=(function(e,t,n){n===null?this.jW(e,t):e.F.setAttribute(t.at,n)}),A.jW=(function(e,t){e.F.removeAttribute(t.at)}),A.k3=(function(e,t,n){this.k4(e,t,t.eY.c7(n))}),A.k4=(function(e,t,n){e.F[t.au]=n}),A.hw=(function(e,t,n){var r=e.F,i=t.bb,a=t.bc,o=n===null?null:n;o===null?(a.a4(new X((e=>r.style.removeProperty(``+e+i)))),r.style.removeProperty(i)):(a.a4(new X((e=>{r.style.setProperty(``+e+i,o)}))),r.style.setProperty(i,o))}),A.ix=(function(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e.fg)}),A.ji=(function(e,t){var n=this.jj(e,t);return n===void 0?void 0:t.dd.cI(n)}),A.jj=(function(e,t){var n=e.dP(),r=t.cu,i=n.getAttributeNS(r.g()?null:r.v(),t.de);return i===null?void 0:i}),A.k6=(function(e,t,n){this.k7(e,t,t.dd.c7(n))}),A.k7=(function(e,t,n){if(n===null)this.jZ(e,t);else{var r=t.cu;if(r.g())e.dP().setAttribute(t.ct,n);else{var i=r.v();e.dP().setAttributeNS(i,t.ct,n)}}}),A.jZ=(function(e,t){var n=e.dP(),r=t.cu;n.removeAttributeNS(r.g()?null:r.v(),t.de)}),A.iy=(function(e){return document.createTextNode(e)}),A.hf=(function(e){return _l().iu(e.tagName,45)}),A.jk=(function(e){if(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement||e instanceof HTMLButtonElement||e instanceof HTMLOptionElement)return e.value;if(this.hf(e)){var t=e.value;return new Mp(this),t===void 0?void 0:typeof t==`string`?t:void 0}}),A.iA=(function(e,t){for(var n=t,r=e;;){if(r===null)return n;var i=r.parentNode,a=new b_(this.gS(r),n);r=i,n=a}}),A.gS=(function(e){if(e instanceof HTMLElement){var t=e.id;if(_l(),t!==``)var n=`#`+t;else var r=e.className,n=(_l(),r===``?``:`.`+r.replace(this.ei,`.`));return e.tagName.toLowerCase()+n}return e.nodeName}),new N().i(zo,`com.raquo.laminar.DomApi$`,{cb:1});var Bo;function P(){return Bo||=new zo,Bo}function Vo(e,t,n){this.d7=null,this.ej=null,this.d6=null,this.d7=e,this.ej=t,this.d6=n}A=Vo.prototype=new M,A.constructor=Vo,A.a4=(function(e){this.d7===null?this.d6===null?cl().j8(this.ej,e):Ro().j7(this.d6,wf().jb(e)):this.d7.a4(e)}),new N().i(Vo,`com.raquo.laminar.Seq`,{cd:1});function Ho(){Uo=this,$()}A=Ho.prototype=new M,A.constructor=Ho,new N().i(Ho,`com.raquo.laminar.Seq$`,{ce:1});var Uo;function Wo(){return Uo||=new Ho,Uo}function Go(e){Ua(),gd(),e.em=Mo()}function Ko(e){e.hI=xs()}function qo(e){Jo(e,new X((e=>{e.f0.F.focus()})))}function Jo(e,t){return new vu(new X((e=>{var n=new ld(!e.ae.J.g()),r=new X((e=>{n.cD?n.cD=!1:t.f(e)}));xo().hA(e.ae,new X((e=>(t=>{r.f(new vs(e,t))}))(e)),!1)})),xs())}function Yo(){this.a7=null,this.d8=null,this.bC=null,Xo=this,this.a7=new su(F()),new su(F()),this.d8=new su(F()),this.bC=new ou}A=Yo.prototype=new M,A.constructor=Yo,new N().i(Yo,`com.raquo.laminar.codecs.package$`,{cm:1});var Xo;function F(){return Xo||=new Yo,Xo}function Zo(e){e.hJ=Qo(e,`class`,` `)}function Qo(e,t,n){var r=fu(new pu,t,F().a7);return new lu(r.at,new X((e=>{var t=P().je(e,r);return t===void 0?``:t})),new vp(((e,t)=>{P().dS(e,r,t)})),n)}function $o(e){e.hH=es(e,`class`,` `)}function es(e,t,n){var r=new gu(t,F().a7,kh());return new lu(r.ct,new X((e=>{var t=P().ji(e,r);return t===void 0?``:t})),new vp(((e,t)=>{P().k6(e,r,t)})),n)}function ts(){this.eV=null,ns=this,J().d.hE(),Fo().A(B().z(new(du.r()).C([J().d.ca()]))),J().d.hE(),Fo().A(B().z(new(du.r()).C([J().d.ca(),J().d.jJ()]))),J().d.ir(),Fo().A(B().z(new(du.r()).C([J().d.ca(),J().d.jK()]))),this.eV=Fo().A(B().z(new(Eh.r()).C([`value`,`checked`])))}A=ts.prototype=new M,A.constructor=ts,new N().i(ts,`com.raquo.laminar.inputs.InputController$`,{cI:1});var ns;function rs(){return ns||=new ts,ns}function is(e){this.cq=null,this.cq=e}A=is.prototype=new M,A.constructor=is,A.hr=(function(e,t){try{this.cq.dD(e,t)}catch(e){var n=e instanceof Ku?e:new rg(e);gd().a6(n)}}),A.it=(function(e){return new is(new vp(((t,n)=>{this.cq.dD(t,n),e.cq.dD(t,n)})))}),A.id=(function(e){return e===void 0?this:e.it(this)}),new N().i(is,`com.raquo.laminar.inserters.InserterHooks`,{cL:1});function as(){}A=as.prototype=new M,A.constructor=as,A.bt=(function(e,t){return new Np(e,void 0)}),new N().i(as,`com.raquo.laminar.inserters.StaticChildInserter$`,{cN:1});var os;function ss(){return os||=new as,os}function cs(e,t){this.eX=null,this.eW=null,this.eX=e,this.eW=t}A=cs.prototype=new M,A.constructor=cs,A.c=(function(e){return new Dd(this.eX,this.eW.f(e),new yp(((e,t,n)=>{P().hw(e,t,n)})))}),new N().i(cs,`com.raquo.laminar.keys.DerivedStyleProp`,{cQ:1});function ls(e,t,n,r){this.bD=null,this.dc=!1,this.db=!1,this.da=null,this.bD=e,this.dc=t,this.db=n,this.da=r}A=ls.prototype=new M,A.constructor=ls,A.jD=(function(){var e=new X((e=>{var t=this.da.f(e);if(t.g())return kh();t.v();var n=P().jk(e.target);return new Ah(n===void 0?``:n)}));return new ls(this.bD,this.dc,this.db,e)}),new N().i(ls,`com.raquo.laminar.keys.EventProcessor`,{cR:1});function us(){}A=us.prototype=new M,A.constructor=us,A.iJ=(function(e,t,n){return new ls(e,t,n,new X((e=>new Ah(e))))}),new N().i(us,`com.raquo.laminar.keys.EventProcessor$`,{cS:1});var ds;function fs(){return ds||=new us,ds}function ps(){}A=ps.prototype=new M,A.constructor=ps;function ms(){}ms.prototype=A;function hs(){this.hK=null,this.hL=null,this.hM=null,this.hN=null,this.hK=`http://www.w3.org/2000/svg`,this.hL=`http://www.w3.org/1999/xlink`,this.hM=`http://www.w3.org/XML/1998/namespace`,this.hN=`http://www.w3.org/2000/xmlns/`}A=hs.prototype=new M,A.constructor=hs,A.jF=(function(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`xlink`:return`http://www.w3.org/1999/xlink`;case`xml`:return`http://www.w3.org/XML/1998/namespace`;case`xmlns`:return`http://www.w3.org/2000/xmlns/`;default:throw new dm(e)}}),new N().i(hs,`com.raquo.laminar.keys.SvgAttr$`,{cV:1});var gs;function _s(){return gs||=new hs,gs}function vs(e,t){this.f0=null,this.eZ=null,this.f0=e,this.eZ=t}A=vs.prototype=new M,A.constructor=vs,new N().i(vs,`com.raquo.laminar.lifecycle.MountContext`,{cW:1});var I=new N().i(1,`com.raquo.laminar.modifiers.Modifier`,{R:1});function ys(){this.hO=null,bs=this,this.hO=new _u}A=ys.prototype=new M,A.constructor=ys,new N().i(ys,`com.raquo.laminar.modifiers.Modifier$`,{d0:1});var bs;function xs(){return bs||=new ys,bs}function Ss(){this.aT=null,Cs=this,this.aT=new yu}A=Ss.prototype=new M,A.constructor=Ss,new N().i(Ss,`com.raquo.laminar.modifiers.RenderableNode$`,{d4:1});var Cs;function ws(){return Cs||=new Ss,Cs}function Ts(){this.h=null,Es=this,this.h=new Cu(new X((e=>e)),L()),new Cu(new X((e=>``+(e|0))),L()),new Cu(new X((e=>``+ +e)),L()),new Cu(new X((e=>``+!!e)),L()),new Cu(new X((e=>e.kf())),L())}A=Ts.prototype=new M,A.constructor=Ts,new N().i(Ts,`com.raquo.laminar.modifiers.RenderableText$`,{d9:1});var Es;function L(){return Es||=new Ts,Es}function Ds(){}A=Ds.prototype=new M,A.constructor=Ds,A.bW=(function(e,t,n){var r=new Ah(e);t.hF(r),n!==void 0&&n.hr(e,t);var i=P().ic(e.b3(),t.b3());return i&&t.hx(r),i}),new N().i(Ds,`com.raquo.laminar.nodes.ParentNode$`,{dc:1});var Os;function ks(){return Os||=new Ds,Os}function As(){}A=As.prototype=new M,A.constructor=As,A.kl=(function(e,t){return xo().cV(e.ae,new X((n=>t.f(new vs(e,n)))),!0)}),new N().i(As,`com.raquo.laminar.nodes.ReactiveElement$`,{de:1});var js;function Ms(){return js||=new As,js}function Ns(e){this.fc=null,this.fc=new is(new vp(((t,n)=>{matchResult1:{var r=n.b3();if(r instanceof Element){r.setAttribute(`slot`,e);break matchResult1}if(r instanceof Text){var i=gd(),a=r.textContent,o=t.b3().tagName;i.a6(Zd(new Qd,"Error: You tried to insert a raw text node `"+a+"` into the `"+e+"` slot of <"+o.toLowerCase()+`>.
 - Cause: This is not possible: named slots only accept elements. Your node was inserted into the default slot instead.
 - Suggestion: Wrap your text node into \`span()\``));break matchResult1}}})))}A=Ns.prototype=new M,A.constructor=Ns,A.bq=(function(e){return e.dL(new X((e=>e.kn(this.fc))))}),new N().i(Ns,`com.raquo.laminar.nodes.Slot`,{dh:1});function Ps(){}A=Ps.prototype=new M,A.constructor=Ps,A.gE=(function(e){return J().d.gU().c6(new Q([J().d.gT().h3(),J().d.h4().gP(),J().d.hb().ht().c(8),wd(J().d,e,Su())]))}),new N().i(Ps,`doc.ExampleGroups$package$`,{dk:1});var Fs;function Is(){return Fs||=new Ps,Fs}function Ls(){}A=Ls.prototype=new M,A.constructor=Ls,A.gF=(function(e){return J().d.gU().c6(new Q([J().d.gT().h3(),J().d.j6().ko(),J().d.h4().gP(),J().d.hb().ht().c(16),wd(J().d,e,Su())]))}),new N().i(Ls,`doc.VerticalExamples$package$`,{dl:1});var Rs;function zs(){return Rs||=new Ls,Rs}function Bs(){}A=Bs.prototype=new M,A.constructor=Bs,A.i9=(function(){Hs().iO(),Hs().iV(),Hs().iW(),Hs().iX(),Hs().iY(),Hs().iZ(),Hs().j0(),Hs().j1(),Hs().j2(),Hs().iP(),Hs().iQ(),Hs().iR(),Hs().iS(),Hs().iT(),Hs().iU()}),A.iO=(function(){var e=document.querySelector(`#example1`);if(!nl().B(e).g()){J();var t=J().d.em.ig(``);new kd(e,Y().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().hU(t))),new q((e=>new Td((J(),fs().iJ(e.ca(),!1,!1)).jD(),new X((e=>{t.ee.dO(e)})))))]))),new Q(H().b(new(I.r()).C([K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(``)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 1`,L().h)])))),K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-2`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 2`,L().h)])))),K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-3`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 3`,L().h)])))),K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-4`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 4`,L().h)])))),K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-5`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 5`,L().h)])))),K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-6`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 6`,L().h)]))))])))))}}),A.iV=(function(){var e=document.querySelector(`#example2`);nl().B(e).g()||(J(),new kd(e,Y().e(new Q(H().b(new(z.r()).C([new q((e=>e.dK().c(`Select one`)))]))),new Q(H().b(new(I.r()).C([K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-1`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 1`,L().h)])))),K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-2`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 2`,L().h)])))),K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-3`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 3`,L().h)]))))]))))))}),A.iW=(function(){var e=document.querySelector(`#example3`);nl().B(e).g()||(J(),new kd(e,Y().e(new Q(H().b(new(z.r()).C([new q((e=>e.dK().c(`Experience`))),new q((e=>e.jn().c(`Please tell us your skill level.`)))]))),new Q(H().b(new(I.r()).C([K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`1`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Novice`,L().h)])))),K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`2`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Intermediate`,L().h)])))),K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`3`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Advanced`,L().h)]))))]))))))}),A.iX=(function(){var e=document.querySelector(`#example4`);nl().B(e).g()||(J(),new kd(e,Y().e(new Q(H().b(new(z.r()).C([new q((e=>e.aO().c(`Select one`)))]))),new Q(H().b(new(I.r()).C([K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-1`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 1`,L().h)])))),K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-2`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 2`,L().h)])))),K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-3`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 3`,L().h)]))))]))))))}),A.iY=(function(){var e=document.querySelector(`#example5`);nl().B(e).g()||(J(),new kd(e,Y().e(new Q(H().b(new(z.r()).C([new q((e=>e.bx().c(!0))),new q((e=>e.i().c(`option-1`)))]))),new Q(H().b(new(I.r()).C([K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-1`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 1`,L().h)])))),K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-2`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 2`,L().h)])))),K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-3`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 3`,L().h)]))))]))))))}),A.iZ=(function(){var e=document.querySelector(`#example6`);nl().B(e).g()||(J(),new kd(e,Y().e(new Q(H().b(new(z.r()).C([new q((e=>e.ia().j5()))]))),new Q(H().b(new(I.r()).C([K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-1`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 1`,L().h)])))),K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-2`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 2`,L().h)])))),K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-3`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 3`,L().h)]))))]))))))}),A.j0=(function(){var e=document.querySelector(`#example7`);nl().B(e).g()||(J(),new kd(e,Y().e(new Q(H().b(new(z.r()).C([new q((e=>e.jO().c(!0)))]))),new Q(H().b(new(I.r()).C([K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-1`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 1`,L().h)])))),K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-2`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 2`,L().h)])))),K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-3`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 3`,L().h)]))))]))))))}),A.j1=(function(){var e=document.querySelector(`#example8`);nl().B(e).g()||(J(),new kd(e,Y().e(new Q(H().b(new(z.r()).C([new q((e=>e.aO().c(`Disabled`))),new q((e=>e.iD().c(!0)))]))),new Q(H().b(new(I.r()).C([K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-1`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 1`,L().h)])))),K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-2`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 2`,L().h)])))),K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-3`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 3`,L().h)]))))]))))))}),A.j2=(function(){var e=document.querySelector(`#example9`);nl().B(e).g()||(J(),new kd(e,Y().e(new Q(H().b(new(z.r()).C([new q((e=>e.dK().c(`Select a Few`))),new q((e=>e.hm().c(!0))),new q((e=>e.bx().c(!0)))]))),new Q(H().b(new(I.r()).C([K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-1`))),new q((e=>(K().bw(),J().d).bu().c(!0)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 1`,L().h)])))),K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-2`))),new q((e=>(K().bw(),J().d).bu().c(!0)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 2`,L().h)])))),K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-3`))),new q((e=>(K().bw(),J().d).bu().c(!0)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 3`,L().h)])))),K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-4`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 4`,L().h)])))),K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-5`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 5`,L().h)])))),K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-6`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 6`,L().h)]))))]))))))}),A.iP=(function(){var e=document.querySelector(`#example10`);nl().B(e).g()||(J(),new kd(e,Y().e(new Q(H().b(new(z.r()).C([]))),new Q(H().b(new(I.r()).C([K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-1`))),new q((e=>(K().bw(),J().d).bu().c(!0)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 1`,L().h)])))),K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-2`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 2`,L().h)])))),K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-3`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 3`,L().h)])))),K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-4`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 4`,L().h)]))))]))))))}),A.iQ=(function(){var e=document.querySelector(`#example11`);nl().B(e).g()||(J(),new kd(e,Y().e(new Q(H().b(new(z.r()).C([new q((e=>e.hm().c(!0))),new q((e=>e.bx().c(!0)))]))),new Q(H().b(new(I.r()).C([K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-1`))),new q((e=>(K().bw(),J().d).bu().c(!0)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 1`,L().h)])))),K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-2`))),new q((e=>(K().bw(),J().d).bu().c(!0)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 2`,L().h)])))),K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-3`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 3`,L().h)])))),K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-4`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 4`,L().h)]))))]))))))}),A.iR=(function(){var e=document.querySelector(`#example12`);nl().B(e).g()||(J(),new kd(e,Y().e(new Q(H().b(new(z.r()).C([]))),new Q(H().b(new(I.r()).C([J().d.hz().c6(new Q(H().b(new(I.r()).C([G(J().d,`Section 1`,L().h)])))),K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-1`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 1`,L().h)])))),K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-2`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 2`,L().h)])))),K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-3`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 3`,L().h)])))),Hd().e(new Q(H().b(new(z.r()).C([]))),new Q(H().b(new(I.r()).C([])))),J().d.hz().c6(new Q(H().b(new(I.r()).C([G(J().d,`Section 2`,L().h)])))),K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-4`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 4`,L().h)])))),K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-5`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 5`,L().h)])))),K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-6`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 6`,L().h)]))))]))))))}),A.iS=(function(){var e=document.querySelector(`#example13`);nl().B(e).g()||(J(),new kd(e,Is().gE(new Q(H().b(new(ph.r()).C([zs().gF(new Q(H().b(new(ph.r()).C([Y().e(new Q(H().b(new(z.r()).C([new q((e=>e.aO().c(`Small`))),new q((e=>e.bv().hy()))]))),new Q(H().b(new(I.r()).C([K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-1`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 1`,L().h)])))),K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-2`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 2`,L().h)])))),K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-3`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 3`,L().h)]))))])))),Y().e(new Q(H().b(new(z.r()).C([new q((e=>e.aO().c(`Medium`))),new q((e=>e.bv().hl()))]))),new Q(H().b(new(I.r()).C([K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-1`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 1`,L().h)])))),K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-2`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 2`,L().h)])))),K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-3`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 3`,L().h)]))))])))),Y().e(new Q(H().b(new(z.r()).C([new q((e=>e.aO().c(`Large`))),new q((e=>e.bv().hj()))]))),new Q(H().b(new(I.r()).C([K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-1`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 1`,L().h)])))),K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-2`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 2`,L().h)])))),K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-3`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 3`,L().h)]))))]))))]))))]))))))}),A.iT=(function(){var e=document.querySelector(`#example14`);nl().B(e).g()||(J(),new kd(e,Y().e(new Q(H().b(new(z.r()).C([new q((e=>e.jP().ki()))]))),new Q(H().b(new(I.r()).C([K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-1`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 1`,L().h)])))),K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-2`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 2`,L().h)])))),K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-3`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 3`,L().h)]))))]))))))}),A.iU=(function(){var e=document.querySelector(`#example15`);nl().B(e).g()||(J(),new kd(e,Is().gE(new Q(H().b(new(ph.r()).C([zs().gF(new Q(H().b(new(ph.r()).C([Y().e(new Q(H().b(new(z.r()).C([new q((e=>e.aO().c(`Small`))),new q((e=>e.bv().hy())),new q((e=>e.bx().c(!0))),new q((e=>Cd(J().d,Ks().dT().bq(new Q(H().b(new(Pp.r()).C([(J(),ss().bt(Gd().e(new Q(H().b(new(z.r()).C([new q((e=>e.br().c(`house`))),new q((e=>e.dV().c(`solid`)))]))),new Q(H().b(new(I.r()).C([])))),ws().aT))])))),Kc().aV,Su()))),new q((e=>Cd(J().d,Ks().dH().bq(new Q(H().b(new(Pp.r()).C([(J(),ss().bt(Gd().e(new Q(H().b(new(z.r()).C([new q((e=>e.br().c(`flag-checkered`)))]))),new Q(H().b(new(I.r()).C([])))),ws().aT))])))),Kc().aV,Su())))]))),new Q(H().b(new(I.r()).C([K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-1`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 1`,L().h)])))),K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-2`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 2`,L().h)])))),K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-3`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 3`,L().h)]))))])))),Y().e(new Q(H().b(new(z.r()).C([new q((e=>e.aO().c(`Medium`))),new q((e=>e.bv().hl())),new q((e=>e.bx().c(!0))),new q((e=>Cd(J().d,Ks().dT().bq(new Q(H().b(new(Pp.r()).C([(J(),ss().bt(Gd().e(new Q(H().b(new(z.r()).C([new q((e=>e.br().c(`house`))),new q((e=>e.dV().c(`solid`)))]))),new Q(H().b(new(I.r()).C([])))),ws().aT))])))),Kc().aV,Su()))),new q((e=>Cd(J().d,Ks().dH().bq(new Q(H().b(new(Pp.r()).C([(J(),ss().bt(Gd().e(new Q(H().b(new(z.r()).C([new q((e=>e.br().c(`flag-checkered`)))]))),new Q(H().b(new(I.r()).C([])))),ws().aT))])))),Kc().aV,Su())))]))),new Q(H().b(new(I.r()).C([K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-1`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 1`,L().h)])))),K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-2`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 2`,L().h)])))),K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-3`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 3`,L().h)]))))])))),Y().e(new Q(H().b(new(z.r()).C([new q((e=>e.aO().c(`Large`))),new q((e=>e.bv().hj())),new q((e=>e.bx().c(!0))),new q((e=>Cd(J().d,Ks().dT().bq(new Q(H().b(new(Pp.r()).C([(J(),ss().bt(Gd().e(new Q(H().b(new(z.r()).C([new q((e=>e.br().c(`house`))),new q((e=>e.dV().c(`solid`)))]))),new Q(H().b(new(I.r()).C([])))),ws().aT))])))),Kc().aV,Su()))),new q((e=>Cd(J().d,Ks().dH().bq(new Q(H().b(new(Pp.r()).C([(J(),ss().bt(Gd().e(new Q(H().b(new(z.r()).C([new q((e=>e.br().c(`flag-checkered`)))]))),new Q(H().b(new(I.r()).C([])))),ws().aT))])))),Kc().aV,Su())))]))),new Q(H().b(new(I.r()).C([K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-1`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 1`,L().h)])))),K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-2`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 2`,L().h)])))),K().e(new Q(H().b(new(z.r()).C([new q((e=>e.i().c(`option-3`)))]))),new Q(H().b(new(I.r()).C([G(J().d,`Option 3`,L().h)]))))]))))]))))]))))))}),new N().i(Bs,`examples.select.Main$package$`,{dm:1});var Vs;function Hs(){return Vs||=new Bs,Vs}function Us(e){try{Hs().i9()}catch(e){throw e}}function Ws(){this.fV=null,this.fW=!1,this.fT=null,this.fU=!1}A=Ws.prototype=new M,A.constructor=Ws,A.dT=(function(){return this.fW||=(this.fV=new Ns(`start`),!0),this.fV}),A.dH=(function(){return this.fU||=(this.fT=new Ns(`end`),!0),this.fT}),new N().i(Ws,`io.github.nguyenyou.webawesome.laminar.Select$slots$`,{du:1});var Gs;function Ks(){return Gs||=new Ws,Gs}function qs(e,t){for(var n=R().ab(`^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$`),r=[],i=0;i<(t.length|0);){var a=t[i];if(a!==``){var o=n.exec(a);if(o!==null){var s=Js(e,o[1]),c=s[0],l=s[1],u=o[2],d=o[3],f=parseInt(d),p=o[4];r.push(new Vu(c,l,u,f|0,p===void 0?-1:parseInt(p)|0))}else r.push(new Vu(`<jscode>`,a,null,-1,-1))|0}i=1+i|0}var m=r.length|0,h=new(Hu.r()).C(m);for(i=0;i<m;)h.a[i]=r[i],i=1+i|0;return h}function Js(e,t){var n=R().ab(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$`),r=R().ab(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$`),i=R().ab(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$`),a=R().ab(`^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$`),o=R().ab(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$`),s=n.exec(t),c=s===null?r.exec(t):s;if(c!==null)return[Ys(e,c[1]),nc(e,c[2])];var l=i.exec(t),u=l===null?a.exec(t):l;if(u!==null)return[Ys(e,u[1]),`<init>`];var d=o.exec(t);return d===null?[`<jscode>`,t]:[Ys(e,d[1]),`<clinit>`]}function Ys(e,t){var n=Zs(e);if(Oc().du.call(n,t))var r=Zs(e)[t];else var r=pc(e,0,t);return r.split(`_`).join(`.`).split(`＿`).join(`_`)}function Xs(e){if(!((1&e.T)<<24>>24)){var t={};t.O=`java_lang_Object`,t.T=`java_lang_String`;for(var n=0;n<=22;){if(n>=2){var r=`T`+n;t[r]=`scala_Tuple`+n}var i=`F`+n;t[i]=`scala_Function`+n,n=1+n|0}e.dr=t,e.T=(1|e.T)<<24>>24}return e.dr}function Zs(e){return(1&e.T)<<24>>24?e.dr:Xs(e)}function Qs(e){if(!((2&e.T)<<24>>24)){var t={};t.sjsr_=`scala_scalajs_runtime_`,t.sjs_=`scala_scalajs_`,t.sci_=`scala_collection_immutable_`,t.scm_=`scala_collection_mutable_`,t.scg_=`scala_collection_generic_`,t.sc_=`scala_collection_`,t.sr_=`scala_runtime_`,t.s_=`scala_`,t.jl_=`java_lang_`,t.ju_=`java_util_`,e.ds=t,e.T=(2|e.T)<<24>>24}return e.ds}function $s(e){return(2&e.T)<<24>>24?e.ds:Qs(e)}function ec(e){return(4&e.T)<<24>>24||(e.dq=Object.keys($s(e)),e.T=(4|e.T)<<24>>24),e.dq}function tc(e){return(4&e.T)<<24>>24?e.dq:ec(e)}function nc(e,t){if(t.startsWith(`init___`))return`<init>`;var n=t.indexOf(`__`)|0;return n<0?t:t.substring(0,n)}function rc(e,t){return t?t.arguments&&t.stack?ic(e,t):t.stack&&t.sourceURL?sc(e,t):t.stack&&t.number?oc(e,t):t.stack&&t.fileName?ac(e,t):t.message&&t[`opera#sourceloc`]?t.stacktrace?t.message.indexOf(`
`)>-1&&t.message.split(`
`).length>t.stacktrace.split(`
`).length?cc(e,t):lc(e,t):cc(e,t):t.message&&t.stack&&t.stacktrace?t.stacktrace.indexOf(`called from line`)<0?uc(e,t):dc(e,t):t.stack&&!t.fileName?ic(e,t):fc(e,t):[]}function ic(e,t){return(t.stack+`
`).replace(R().ab(`^[\\s\\S]+?\\s+at\\s+`),` at `).replace(R().I(`^\\s+(at eval )?at\\s+`,`gm`),``).replace(R().I(`^([^\\(]+?)([\\n])`,`gm`),`{anonymous}() ($1)$2`).replace(R().I(`^Object.<anonymous>\\s*\\(([^\\)]+)\\)`,`gm`),`{anonymous}() ($1)`).replace(R().I(`^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(0,-1)}function ac(e,t){return t.stack.replace(R().I(`(?:\\n@:0)?\\s+$`,`m`),``).replace(R().I(`^(?:\\((\\S*)\\))?@`,`gm`),`{anonymous}($1)@`).split(`
`)}function oc(e,t){return t.stack.replace(R().I(`^\\s*at\\s+(.*)$`,`gm`),`$1`).replace(R().I(`^Anonymous function\\s+`,`gm`),`{anonymous}() `).replace(R().I(`^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(1)}function sc(e,t){return t.stack.replace(R().I(`\\[native code\\]\\n`,`m`),``).replace(R().I(`^(?=\\w+Error\\:).*$\\n`,`m`),``).replace(R().I(`^@`,`gm`),`{anonymous}()@`).split(`
`)}function cc(e,t){for(var n=R().I(`Line (\\d+).*script (?:in )?(\\S+)`,`i`),r=t.message.split(`
`),i=[],a=2,o=r.length|0;a<o;){var s=n.exec(r[a]);s!==null&&i.push(`{anonymous}()@`+s[2]+`:`+s[1])|0,a=2+a|0}return i}function lc(e,t){for(var n=R().I(`Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$`,`i`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[3],l=c===void 0?`{anonymous}`:c;i.push(l+`()@`+s[2]+`:`+s[1])|0}a=2+a|0}return i}function uc(e,t){for(var n=R().ab(`^(.*)@(.+):(\\d+)$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[1],l=c===void 0?`global code`:c+`()`;i.push(l+`@`+s[2]+`:`+s[3])|0}a=1+a|0}return i}function dc(e,t){for(var n=R().ab(`^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[4]+`:`+s[1]+`:`+s[2],l=s[2],u=(l===void 0?`global code`:l).replace(R().ab(`<anonymous function: (\\S+)>`),`$1`).replace(R().ab(`<anonymous function>`),`{anonymous}`);i.push(u+`@`+c)|0}a=2+a|0}return i}function fc(e,t){return[]}function pc(e,t,n){for(;;)if(t<(tc(e).length|0)){var r=tc(e)[t];if(n.startsWith(r))return``+$s(e)[r]+n.substring(r.length);t=1+t|0}else return n.startsWith(`L`)?n.substring(1):n}function mc(){this.dr=null,this.ds=null,this.dq=null,this.T=0}A=mc.prototype=new M,A.constructor=mc,A.j3=(function(e){return qs(this,rc(this,e))}),new N().i(mc,`java.lang.StackTrace$`,{dT:1});var hc;function gc(){return hc||=new mc,hc}function _c(){}A=_c.prototype=new M,A.constructor=_c,A.ab=(function(e){return new RegExp(e)}),A.I=(function(e,t){return new RegExp(e,t)}),new N().i(_c,`java.lang.StackTrace$StringRE$`,{dU:1});var vc;function R(){return vc||=new _c,vc}function yc(){this.g0=null,this.hP=null,bc=this,this.g0=new cg(!1),this.hP=new cg(!0)}A=yc.prototype=new M,A.constructor=yc,new N().i(yc,`java.lang.System$Streams$`,{dX:1});var bc;function xc(){return bc||=new yc,bc}function Sc(e){var t={};return t[`java.version`]=`1.8`,t[`java.vm.specification.version`]=`1.8`,t[`java.vm.specification.vendor`]=`Oracle Corporation`,t[`java.vm.specification.name`]=`Java Virtual Machine Specification`,t[`java.vm.name`]=`Scala.js`,t[`java.vm.version`]=`1.22.0`,t[`java.specification.version`]=`1.8`,t[`java.specification.vendor`]=`Oracle Corporation`,t[`java.specification.name`]=`Java Platform API Specification`,t[`file.separator`]=`/`,t[`path.separator`]=`:`,t[`line.separator`]=`
`,t}function Cc(){this.dt=null,this.g1=null,wc=this,this.dt=Sc(this),this.g1=null}A=Cc.prototype=new M,A.constructor=Cc,A.hc=(function(e,t){if(this.dt!==null){var n=this.dt;return Oc().du.call(n,e)?n[e]:t}return this.g1.hc(e,t)}),new N().i(Cc,`java.lang.System$SystemProperties$`,{dY:1});var wc;function Tc(){return wc||=new Cc,wc}function Ec(){this.du=null,Dc=this,this.du=Object.prototype.hasOwnProperty}A=Ec.prototype=new M,A.constructor=Ec,new N().i(Ec,`java.lang.Utils$Cache$`,{e1:1});var Dc;function Oc(){return Dc||=new Ec,Dc}function kc(e,t){return e===t}function Ac(e){return 0}function jc(e,t){return!!(e&&e.$classData&&e.$classData.D===t&&e.$classData.B.n.aM)}var Mc=new N().i(0,`java.lang.Void`,{aM:1},(e=>e===void 0));function Nc(e,t){throw Jp(new Xp,`argument type mismatch`)}function Pc(){}A=Pc.prototype=new M,A.constructor=Pc,A.aa=(function(e){return e instanceof ga||e instanceof va||e instanceof ya||e instanceof ba||e instanceof xa||e instanceof Sa?e.a.length:e instanceof Ca?e.a.length>>>1|0:(e instanceof wa||e instanceof Ta||Nc(this,e),e.a.length)}),new N().i(Pc,`java.lang.reflect.Array$`,{e3:1});var Fc;function Ic(){return Fc||=new Pc,Fc}function Lc(){}A=Lc.prototype=new M,A.constructor=Lc,A.im=(function(e,t){for(var n=0,r=e.a.length;;)if(n===r)return~n;else{var i=(n+r|0)>>>1|0,a=e.a[i],o=t===a?0:t<a?-1:1;if(o<0){r=i;continue}if(o!==0){n=1+i|0;continue}return i}}),A.gZ=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length>>>1|0;if((t.a.length>>>1|0)!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a,o=i<<1,s=a[o],c=a[o+1|0],l=r,u=t.a,d=l<<1,f=u[d],p=u[d+1|0];if((s^f|c^p)!==0)return!1;r=1+r|0}return!0}),A.gY=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),A.h0=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),A.gX=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),A.gW=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),A.h1=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),new N().i(Lc,`java.util.Arrays$`,{e4:1});var Rc;function zc(){return Rc||=new Lc,Rc}function Bc(e,t){return Uc().hD(e,t)}function Vc(){}A=Vc.prototype=new M,A.constructor=Vc,A.hD=(function(e,t){if(t===e>>31)return``+e;if(-2097152&(t^t>>10)){var n=t>>31,r=e^n,i=r-n|0,a=4294967296*(((t^n)+(i>>>0<r>>>0|0)|0)>>>0)+(i>>>0),o=+Math.floor(1.0000000000000265e-9*a),s=i-Math.imul(1e9,o|0)|0;s<0&&(--o,s=1e9+s|0);var c=``+s,l=o,u=c.length,d=``+l+`000000000`.substring(u)+c;return t<0?`-`+d:d}return``+(4294967296*t+(e>>>0))}),A.ha=(function(e){if(e<-0x8000000000000000)return j(0,-2147483648);if(e>=0x8000000000000000)return j(-1,2147483647);var t=e|0,n=23283064365386963e-26*e|0;return j(t,e<0&&t!==0?n-1|0:n)}),A.iE=(function(e,t,n,r){var i=t>>31,a=e^i,o=a-i|0,s=(t^i)+(o>>>0<a>>>0|0)|0,c=r>>31,l=n^c,u=l-c|0,d=(r^c)+(u>>>0<l>>>0|0)|0;if(d|-2097152&u){var f=(4294967296*(s>>>0)+(o>>>0))/(4294967296*(d>>>0)+(u>>>0))+.00390625,p=f|0,m=23283064365386963e-26*f|0,h=65535&u,g=u>>>16|0,_=65535&p,v=p>>>16|0,y=Math.imul(h,_),ee=Math.imul(g,_),b=Math.imul(h,v),te=y+((ee+b|0)<<16)|0,x=(y>>>16|0)+b|0;if(((s-((((Math.imul(u,m)+Math.imul(d,p)|0)+Math.imul(g,v)|0)+(x>>>16|0)|0)+(((65535&x)+ee|0)>>>16|0)|0)|0)-((o-te|0)>>>0>o>>>0|0)|0)<0)var ne=p-1|0,S=(m-1|0)+(ne!==-1|0)|0,re=ne,ie=S;else var re=p,ie=m}else var ae=(s>>>0)/($i(u)>>>0)|0,re=(4294967296*(s-Math.imul(u,ae)|0)+(o>>>0))/u|0,ie=ae;if((t^r)>=0)return j(re,ie);var oe=-re|0;return j(oe,(-ie|0)-(oe!==0|0)|0)}),A.iF=(function(e,t,n,r){if(!(r|-2097152&n)){var i=(t>>>0)/($i(n)>>>0)|0;return j((4294967296*(t-Math.imul(n,i)|0)+(e>>>0))/n|0,i)}if(r>=0){var a=(4294967296*(t>>>0)+(e>>>0))/(4294967296*(r>>>0)+(n>>>0))+.00390625,o=a|0,s=23283064365386963e-26*a|0,c=65535&n,l=n>>>16|0,u=65535&o,d=o>>>16|0,f=Math.imul(c,u),p=Math.imul(l,u),m=Math.imul(c,d),h=f+((p+m|0)<<16)|0,g=(f>>>16|0)+m|0;if(((t-((((Math.imul(n,s)+Math.imul(r,o)|0)+Math.imul(l,d)|0)+(g>>>16|0)|0)+(((65535&g)+p|0)>>>16|0)|0)|0)-((e-h|0)>>>0>e>>>0|0)|0)<0){var _=o-1|0;return j(_,(s-1|0)+(_!==-1|0)|0)}return j(o,s)}return(t===r?e>>>0<n>>>0:t>>>0<r>>>0)?j(0,0):j(1,0)}),A.jT=(function(e,t,n,r){var i=t>>31,a=e^i,o=a-i|0,s=(t^i)+(o>>>0<a>>>0|0)|0,c=r>>31,l=n^c,u=l-c|0,d=(r^c)+(u>>>0<l>>>0|0)|0;if(d|-2097152&u){var f=(4294967296*(s>>>0)+(o>>>0))/(4294967296*(d>>>0)+(u>>>0))+.00390625,p=f|0,m=23283064365386963e-26*f|0,h=65535&u,g=u>>>16|0,_=65535&p,v=p>>>16|0,y=Math.imul(h,_),ee=Math.imul(g,_),b=Math.imul(h,v),te=y+((ee+b|0)<<16)|0,x=(y>>>16|0)+b|0,ne=(((Math.imul(u,m)+Math.imul(d,p)|0)+Math.imul(g,v)|0)+(x>>>16|0)|0)+(((65535&x)+ee|0)>>>16|0)|0,S=o-te|0,re=(s-ne|0)-(S>>>0>o>>>0|0)|0;if(re<0)var ie=S+u|0,ae=(re+d|0)+(ie>>>0<S>>>0|0)|0,oe=ie,se=ae;else var oe=S,se=re}else var ce=(4294967296*((s>>>0)%($i(u)>>>0)|0)+(o>>>0))/u|0,oe=o-Math.imul(u,ce)|0,se=0;if(t<0){var le=-oe|0;return j(le,(-se|0)-(le!==0|0)|0)}return j(oe,se)}),A.jU=(function(e,t,n,r){if(!(r|-2097152&n)){var i=(4294967296*((t>>>0)%($i(n)>>>0)|0)+(e>>>0))/n|0;return j(e-Math.imul(n,i)|0,0)}if(r>=0){var a=(4294967296*(t>>>0)+(e>>>0))/(4294967296*(r>>>0)+(n>>>0))+.00390625,o=a|0,s=23283064365386963e-26*a|0,c=65535&n,l=n>>>16|0,u=65535&o,d=o>>>16|0,f=Math.imul(c,u),p=Math.imul(l,u),m=Math.imul(c,d),h=f+((p+m|0)<<16)|0,g=(f>>>16|0)+m|0,_=(((Math.imul(n,s)+Math.imul(r,o)|0)+Math.imul(l,d)|0)+(g>>>16|0)|0)+(((65535&g)+p|0)>>>16|0)|0,v=e-h|0,y=(t-_|0)-(v>>>0>e>>>0|0)|0;if(y<0){var ee=v+n|0;return j(ee,(y+r|0)+(ee>>>0<v>>>0|0)|0)}return j(v,y)}if(t===r?e>>>0<n>>>0:t>>>0<r>>>0)return j(e,t);var b=e-n|0;return j(b,(t-r|0)-(b>>>0>e>>>0|0)|0)}),new N().i(Vc,`org.scalajs.linker.runtime.RuntimeLong$`,{e7:1});var Hc;function Uc(){return Hc||=new Vc,Hc}function Wc(){this.aV=null,Gc=this,this.aV=new lm}A=Wc.prototype=new M,A.constructor=Wc,new N().i(Wc,`scala.$less$colon$less$`,{ea:1});var Gc;function Kc(){return Gc||=new Wc,Gc}function qc(e,t,n,r,i,a){for(var o=n,s=i,c=n+a|0;o<c;)B().cG(r,s,B().aZ(t,o)),o=1+o|0,s=1+s|0}function Jc(){}A=Jc.prototype=new M,A.constructor=Jc,A.h5=(function(e,t){var n=e.t();if(n>-1){for(var r=t.dN(n),i=e.k(),a=0;a<n;)B().cG(r,a,i.m()),a=1+a|0;return r}var o=null,s=t.cS(),c=s===ka.l();o=[];for(var l=e.k();l.o();){var u=l.m(),d=c?pa(u):u===null?El().dR(s):u;o.push(d)}return El().dQ(s===Da.l()?Mc.l():s===Nl.l()||s===xf.l()?Ea.l():s,o)}),A.cH=(function(e,t,n,r,i){var a=Ji(e);a.ad.Z&&Ji(n).ad.R(a.ad)?e.ac(t,n,r,i):qc(this,e,t,n,r,i)}),A.h2=(function(e,t){if(e===t)return!0;if(e.a.length!==t.a.length)return!1;for(var n=e.a.length,r=0;r<n;){if(!Ml().H(e.a[r],t.a[r]))return!1;r=1+r|0}return!0}),new N().i(Jc,`scala.Array$`,{ec:1});var Yc;function Xc(){return Yc||=new Jc,Yc}var Zc=new N().i(1,`scala.Function0`,{ai:1}),z=new N().i(1,`scala.Function1`,{e:1});function Qc(){}A=Qc.prototype=new M,A.constructor=Qc;function $c(){}$c.prototype=A;function el(){}A=el.prototype=new M,A.constructor=el,A.B=(function(e){return e===null?kh():new Ah(e)}),new N().i(el,`scala.Option$`,{el:1});var tl;function nl(){return tl||=new el,tl}function rl(){this.g8=null,this.cy=null,il=this,this.g8=new q((e=>this.g8)),this.cy=new rp}A=rl.prototype=new M,A.constructor=rl,new N().i(rl,`scala.PartialFunction$`,{em:1});var il;function al(){return il||=new rl,il}function ol(){this.gb=null,sl=this,this.gb=new q((e=>cl().gb))}A=ol.prototype=new M,A.constructor=ol,A.j8=(function(e,t){var n=Ic().aa(e),r=0;if(e instanceof ga)for(;r<n;)t.f(e.a[r]),r=1+r|0;else if(e instanceof Sa)for(;r<n;)t.f(e.a[r]),r=1+r|0;else if(e instanceof Ta)for(;r<n;)t.f(e.a[r]),r=1+r|0;else if(e instanceof Ca)for(;r<n;){var i=e.a,a=r<<1,o=i[a],s=i[a+1|0];t.f(j(o,s)),r=1+r|0}else if(e instanceof wa)for(;r<n;)t.f(e.a[r]),r=1+r|0;else if(e instanceof ya)for(;r<n;)t.f(da(e.a[r])),r=1+r|0;else if(e instanceof ba)for(;r<n;)t.f(e.a[r]),r=1+r|0;else if(e instanceof xa)for(;r<n;)t.f(e.a[r]),r=1+r|0;else if(e instanceof va)for(;r<n;)t.f(e.a[r]),r=1+r|0;else throw new dm(e)}),new N().i(ol,`scala.collection.ArrayOps$`,{er:1});var sl;function cl(){return sl||=new ol,sl}function ll(e,t){for(var n=e.k();n.o();)t.f(n.m())}function ul(e,t,n,r){var i=e.k(),a=n;matchResult18:{var o,s=e.t();if(s===-1){var o=Ic().aa(t);break matchResult18}var o=s}for(var c=Ic().aa(t),l=r<o?r:o,u=n<0?c:c-n|0,d=u<l?u:l,f=n+(d<0?0:d)|0;a<f&&i.o();)B().cG(t,a,i.m()),a=1+a|0;return a-n|0}function dl(e,t,n,r){return e.t()===0?``+t+r:e.bp(w_(new T_),t,n,r).N.s}function fl(e,t,n,r,i){var a=t.N;n.length!==0&&(a.s=``+a.s+n);var o=e.k();if(o.o()){var s=o.m();for(a.s=``+a.s+s;o.o();){r.length!==0&&(a.s=``+a.s+r);var c=o.m();a.s=``+a.s+c}}return i.length!==0&&(a.s=``+a.s+i),t}function pl(e,t){if(e.t()>=0){var n=e.t(),r=t.dN(n);return e.aN(r,0,2147483647),r}var i=null,a=t.cS(),o=a===ka.l();i=[];for(var s=e.k();s.o();){var c=s.m(),l=o?pa(c):c===null?El().dR(a):c;i.push(l)}return El().dQ(a===Da.l()?Mc.l():a===Nl.l()||a===xf.l()?Ea.l():a,i)}function ml(e,t){this.gd=null,this.bL=null,this.gd=e,this.bL=t}A=ml.prototype=new M,A.constructor=ml,A.jm=(function(){return this.gd.O().k()}),new N().i(ml,`scala.collection.Iterator$ConcatIteratorCell`,{eA:1});function hl(){this.ge=null,gl=this,this.ge=new q((e=>this.ge))}A=hl.prototype=new M,A.constructor=hl,A.iu=(function(e,t){return Th(e,t)>=0}),new N().i(hl,`scala.collection.StringOps$`,{eG:1});var gl;function _l(){return gl||=new hl,gl}function vl(){}A=vl.prototype=new M,A.constructor=vl,A.he=(function(e,t){return Qp(new em,e+` is out of bounds (min 0, max `+t+`)`)}),new N().i(vl,`scala.collection.generic.CommonErrors$`,{eH:1});var yl;function bl(){return yl||=new vl,yl}function xl(){this.gi=0,Sl=this;try{_l();var e=Ru().jw(Tc().hc(`scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength`,`64`),10,214748364)}catch(t){if(0)var e;else{var e;throw t}}this.gi=e}A=xl.prototype=new M,A.constructor=xl,new N().i(xl,`scala.collection.immutable.IndexedSeqDefaults$`,{eK:1});var Sl;function Cl(){return Sl||=new xl,Sl}function wl(){}A=wl.prototype=new M,A.constructor=wl,A.dR=(function(e){return e===Aa.l()||e===ja.l()||e===ka.l()||e===Ma.l()?0:e===Na.l()?j(0,0):e===Pa.l()||e===Fa.l()?0:e===Oa.l()?!1:e===Da.l()?void 0:null}),A.dQ=(function(e,t){var n=t.length|0;if(e===ka.l()){for(var r=new ya(n),i=0;i!==n;)r.a[i]=65535&(t[i]|0),i=1+i|0;return r}for(var a=e.ad.U(n),o=0;o!==n;)B().cG(a,o,t[o]),o=1+o|0;return a}),new N().i(wl,`scala.collection.mutable.ArrayBuilder$`,{eS:1});var Tl;function El(){return Tl||=new wl,Tl}function Dl(){}A=Dl.prototype=new M,A.constructor=Dl,A.gO=(function(e,t,n){if(t!==e)throw new sm(n)}),new N().i(Dl,`scala.collection.mutable.MutationTracker$`,{f0:1});var Ol;function kl(){return Ol||=new Dl,Ol}function Al(){}A=Al.prototype=new M,A.constructor=Al,A.H=(function(e,t){return e===t||(Bu(e)?this.iN(e,t):e instanceof Ki?this.iL(e,t):e===null?t===null:Xi(e,t))}),A.iN=(function(e,t){if(Bu(t))return this.iM(e,t);if(t instanceof Ki){if(typeof e==`number`)return+e===t.c;if(e instanceof qi){var n=ma(e),r=n.l,i=n.h,a=t.c,o=a>>31;return(r^a|i^o)===0}return e===null?t===null:Xi(e,t)}return e===null?t===null:Xi(e,t)}),A.iM=(function(e,t){if(typeof e==`number`){var n=+e;if(typeof t==`number`)return n===+t;if(t instanceof qi){var r=ma(t),i=r.l;return n===4294967296*r.h+(i>>>0)}return!1}if(e instanceof qi){var a=ma(e),o=a.l,s=a.h;if(t instanceof qi){var c=ma(t),l=c.l,u=c.h;return(o^l|s^u)===0}if(typeof t==`number`){var d=+t;return 4294967296*s+(o>>>0)===d}return!1}return e===null?t===null:Xi(e,t)}),A.iL=(function(e,t){if(t instanceof Ki)return e.c===t.c;if(Bu(t)){if(typeof t==`number`)return+t===e.c;if(t instanceof qi){var n=ma(t),r=n.l,i=n.h,a=e.c,o=a>>31;return(r^a|i^o)===0}return t===null?e===null:Xi(t,e)}return e===null&&t===null}),new N().i(Al,`scala.runtime.BoxesRunTime$`,{fe:1});var jl;function Ml(){return jl||=new Al,jl}var Nl=new N().i(0,`scala.runtime.Null$`,{fh:1});function Pl(){}A=Pl.prototype=new M,A.constructor=Pl,A.bs=(function(){throw nm(new im,`tried to cast away nullability, but value is null`)}),new N().i(Pl,`scala.runtime.Scala3RunTime$`,{fi:1});var Fl;function Il(){return Fl||=new Pl,Fl}function Ll(){}A=Ll.prototype=new M,A.constructor=Ll,A.i8=(function(e){return e===null?Nl.l():Ji(e)}),A.aZ=(function(e,t){if(e instanceof ga||e instanceof Sa||e instanceof Ta)return e.a[t];if(e instanceof Ca){var n=e.a,r=t<<1;return j(n[r],n[r+1|0])}if(e instanceof wa)return e.a[t];if(e instanceof ya)return da(e.a[t]);if(e instanceof ba||e instanceof xa||e instanceof va)return e.a[t];throw e===null?rm(new im):new dm(e)}),A.cG=(function(e,t,n){if(e instanceof ga)e.a[t]=n;else if(e instanceof Sa)e.a[t]=n|0;else if(e instanceof Ta)e.a[t]=+n;else if(e instanceof Ca){var r=ma(n),i=e.a,a=t<<1;i[a]=r.l,i[a+1|0]=r.h}else if(e instanceof wa)e.a[t]=Math.fround(n);else if(e instanceof ya)e.a[t]=pa(n);else if(e instanceof ba)e.a[t]=n|0;else if(e instanceof xa)e.a[t]=n|0;else if(e instanceof va)e.a[t]=!!n;else throw e===null?rm(new im):new dm(e)}),A.dB=(function(e){return dl(e.aP(),e.S()+`(`,`,`,`)`)}),A.z=(function(e){if(e===null)return null;if(e.a.length===0){var t=Vh();return yg(),Rh(t)}return new r_(e)}),new N().i(Ll,`scala.runtime.ScalaRunTime$`,{fj:1});var Rl;function B(){return Rl||=new Ll,Rl}function zl(){}A=zl.prototype=new M,A.constructor=zl,A.r=(function(e,t){var n=this.cP(e,t),r=n;return n=r<<13|r>>>19,Math.imul(5,n)-430675100|0}),A.cP=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|r>>>17,n=Math.imul(461845907,n),e^n}),A.C=(function(e,t){return this.il(e^t)}),A.il=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),A.jA=(function(e,t){return t===e>>31?e:e^t}),A.iH=(function(e){var t=ea(e);if(t===e)return t;var n=Uc().ha(e),r=n.l,i=n.h;if(4294967296*i+(r>>>0)===e)return r^i;var a=e|0;if(a===e&&1/e!=-1/0)return a;if(e!==e)return 2146959360;var o=na;return o.setFloat64(0,e,!0),(o.getInt32(0,!0)|0)^(o.getInt32(4,!0)|0)}),A.w=(function(e){if(e===null)return 0;if(typeof e==`number`)return this.iH(+e);if(e instanceof qi){var t=ma(e);return this.jA(t.l,t.h)}return Zi(e)}),A.jr=(function(e){throw Qp(new em,``+e)}),new N().i(zl,`scala.runtime.Statics$`,{fl:1});var Bl;function V(){return Bl||=new zl,Bl}function Vl(){}A=Vl.prototype=new M,A.constructor=Vl,A.ih=(function(e){return e}),new N().i(Vl,`scala.scalajs.js.defined$`,{fr:1});var Hl;function Ul(){return Hl||=new Vl,Hl}function Wl(){}A=Wl.prototype=new M,A.constructor=Wl,A.k8=(function(e,t){return setTimeout((()=>{t.O()}),e)}),new N().i(Wl,`scala.scalajs.js.timers.package$`,{fs:1});var Gl;function Kl(){return Gl||=new Wl,Gl}function ql(){}A=ql.prototype=new M,A.constructor=ql,A.kg=(function(e){if(e instanceof Q)return e.cE;var t=[];return e.a4(new q((e=>t.push(e)|0))),t}),new N().i(ql,`scala.scalajs.runtime.Compat$`,{fB:1});var Jl;function Yl(){return Jl||=new ql,Jl}function Xl(){}A=Xl.prototype=new M,A.constructor=Xl,A.b=(function(e){for(var t=e.a.length,n=[],r=0;r!==t;){var i=r;n.push(e.a[i]),r=1+r|0}return n}),new N().i(Xl,`scala.scalajs.runtime.package$`,{fD:1});var Zl;function H(){return Zl||=new Xl,Zl}function Ql(){}A=Ql.prototype=new M,A.constructor=Ql,A.k9=(function(e){var t=`Illegal command line`+(e.hd()===0?``:e.hd()===1?` after first argument`:` after `+e.hd()+` arguments`)+`: `+e.ku();Yu().jM().jx(t+`
`)}),new N().i(Ql,`scala.util.CommandLineParser$`,{fE:1});function $l(e){this.dA=null,this.dA=e}A=$l.prototype=new M,A.constructor=$l,A.q=(function(){return`DynamicVariable(`+this.dA+`)`}),new N().i($l,`scala.util.DynamicVariable`,{fG:1});function eu(){}A=eu.prototype=new M,A.constructor=eu,A.ii=(function(e){matchAlts1:{matchAlts2:break matchAlts1;return!1}return!0}),A.kj=(function(e){return this.ii(e)?new Ah(e):kh()}),new N().i(eu,`scala.util.control.NonFatal$`,{fI:1});var tu;function nu(){return tu||=new eu,tu}function ru(){}A=ru.prototype=new M,A.constructor=ru;function iu(){}iu.prototype=A,A.r=(function(e,t){var n=this.cP(e,t),r=n;return n=r<<13|r>>>19,Math.imul(5,n)-430675100|0}),A.cP=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|r>>>17,n=Math.imul(461845907,n),e^n}),A.C=(function(e,t){return this.ce(e^t)}),A.ce=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),A.cR=(function(e,t,n){var r=e.Q();if(r===0)return n?t:Ch(e.S());var i=t;n||(i=this.r(i,Ch(e.S())));for(var a=0;a<r;)i=this.r(i,V().w(e.R(a))),a=1+a|0;return this.C(i,r)}),A.gM=(function(e,t,n){var r=e.Q(),i=Ch(n===null?e.S():n);if(r===0)return i;var a=t;a=this.r(a,i);for(var o=0;o<r;)a=this.r(a,V().w(e.R(o))),o=1+o|0;return this.C(a,r)}),A.kk=(function(e,t){for(var n=0,r=0,i=0,a=1,o=e.k();o.o();){var s=o.m(),c=V().w(s);n=n+c|0,r^=c,a=Math.imul(a,1|c),i=1+i|0}var l=t;return l=this.r(l,n),l=this.r(l,r),l=this.cP(l,a),this.C(l,i)}),A.jL=(function(e,t){var n=e.k(),r=t;if(!n.o())return this.C(r,0);var i=n.m();if(!n.o())return this.C(this.r(r,V().w(i)),1);var a=n.m(),o=V().w(i);r=this.r(r,o);for(var s=r,c=V().w(a),l=c-o|0,u=2;n.o();){r=this.r(r,c);var d=V().w(n.m());if(l!==(d-c|0)||l===0){for(r=this.r(r,d),u=1+u|0;n.o();)r=this.r(r,V().w(n.m())),u=1+u|0;return this.C(r,u)}c=d,u=1+u|0}return this.ce(this.r(this.r(s,l),c))}),A.x=(function(e,t){var n=t,r=Ic().aa(e);switch(r){case 0:return this.C(n,0);case 1:return this.C(this.r(n,V().w(B().aZ(e,0))),1);default:var i=V().w(B().aZ(e,0));n=this.r(n,i);for(var a=n,o=V().w(B().aZ(e,1)),s=o-i|0,c=2;c<r;){n=this.r(n,o);var l=V().w(B().aZ(e,c));if(s!==(l-o|0)||s===0){for(n=this.r(n,l),c=1+c|0;c<r;)n=this.r(n,V().w(B().aZ(e,c))),c=1+c|0;return this.C(n,r)}o=l,c=1+c|0}return this.ce(this.r(this.r(a,s),o))}}),A.jR=(function(e,t,n,r){return this.ce(this.r(this.r(this.r(r,e),t),n))}),A.jp=(function(e,t){var n=t,r=e.l();switch(r){case 0:return this.C(n,0);case 1:return this.C(this.r(n,V().w(e.n(0))),1);default:var i=V().w(e.n(0));n=this.r(n,i);for(var a=n,o=V().w(e.n(1)),s=o-i|0,c=2;c<r;){n=this.r(n,o);var l=V().w(e.n(c));if(s!==(l-o|0)||s===0){for(n=this.r(n,l),c=1+c|0;c<r;)n=this.r(n,V().w(e.n(c))),c=1+c|0;return this.C(n,r)}o=l,c=1+c|0}return this.ce(this.r(this.r(a,s),o))}}),A.jz=(function(e,t){for(var n=0,r=t,i=0,a=0,o=0,s=0,c=e;!c.g();){var l=c.P(),u=c.D(),d=V().w(l);switch(r=this.r(r,d),i){case 0:s=d,i=1;break;case 1:a=d-o|0,i=2;break;case 2:(a!==(d-o|0)||a===0)&&(i=3)}o=d,n=1+n|0,c=u}return i===2?this.jR(s,a,o,t):this.C(r,n)});function au(e){this.b9=null,this.e7=null,this.d1=!1,this.e7=e,So(this),this.d1=!1}A=au.prototype=new M,A.constructor=au,A.jN=(function(e){this.d1?(Eo(e),this.e7.O()):To(this,e)}),A.jy=(function(){Co(this),this.d1=!0}),new N().i(au,`com.raquo.airstream.ownership.OneTimeOwner`,{bZ:1,c0:1});function ou(){}A=ou.prototype=new M,A.constructor=ou,A.iB=(function(e){return e!==null}),A.iK=(function(e){return e?``:null}),A.cI=(function(e){return this.iB(e)}),A.c7=(function(e){return this.iK(!!e)}),new N().i(ou,`com.raquo.laminar.codecs.package$$anon$1`,{cn:1,ae:1});function su(e){if(e===null)throw rm(new im)}A=su.prototype=new M,A.constructor=su,A.c7=(function(e){return e}),A.cI=(function(e){return e}),new N().i(su,`com.raquo.laminar.codecs.package$$anon$2`,{co:1,ae:1});function cu(e){return new cs(e,new X((e=>e+`px`)))}function lu(e,t,n,r){}A=lu.prototype=new ms,A.constructor=lu,new N().i(lu,`com.raquo.laminar.keys.CompositeKey`,{cP:1,G:1});function uu(e){this.cs=null,this.cs=e}A=uu.prototype=new ms,A.constructor=uu;var du=new N().i(uu,`com.raquo.laminar.keys.EventProp`,{cT:1,G:1});function fu(e,t,n){return e.at=t,e.ba=n,e}function pu(){this.at=null,this.ba=null}A=pu.prototype=new ms,A.constructor=pu;function mu(){}mu.prototype=A,A.c=(function(e){return new Dd(this,e,new yp(((e,t,n)=>{P().dS(e,t,n)})))}),A.hU=(function(e){return new Od(this,e.hC(),new yp(((e,t,n)=>{P().dS(e,this,t)})))}),new N().i(pu,`com.raquo.laminar.keys.HtmlAttr`,{a5:1,G:1});function hu(e,t){this.au=null,this.eY=null,this.au=e,this.eY=t}A=hu.prototype=new ms,A.constructor=hu,A.c=(function(e){return new Dd(this,e,new yp(((e,t,n)=>{P().k3(e,t,n)})))}),new N().i(hu,`com.raquo.laminar.keys.HtmlProp`,{av:1,G:1});function gu(e,t,n){this.de=null,this.dd=null,this.ct=null,this.cu=null,this.de=e,this.dd=t;var r=n.g()?kh():new Ah(n.v()+`:`+e);this.ct=r.g()?e:r.v(),this.cu=n.g()?kh():new Ah(_s().jF(n.v()))}A=gu.prototype=new ms,A.constructor=gu,new N().i(gu,`com.raquo.laminar.keys.SvgAttr`,{cU:1,G:1});function _u(){}A=_u.prototype=new M,A.constructor=_u,A.a9=(function(e){}),new N().i(_u,`com.raquo.laminar.modifiers.Modifier$$anon$1`,{d1:1,R:1});function vu(e,t){if(this.f7=null,this.f7=e,t===null)throw rm(new im)}A=vu.prototype=new M,A.constructor=vu,A.a9=(function(e){var t=io(),n=(()=>{this.f7.f(e)});if(io(),t.E)n();else{t.E=!0;try{n()}finally{t.E=!1,to(t)}}}),new N().i(vu,`com.raquo.laminar.modifiers.Modifier$$anon$2`,{d2:1,R:1});function yu(){}A=yu.prototype=new M,A.constructor=yu,new N().i(yu,`com.raquo.laminar.modifiers.RenderableNode$$anon$1`,{d5:1,d3:1});function bu(){}A=bu.prototype=new M,A.constructor=bu,new N().i(bu,`com.raquo.laminar.modifiers.RenderableSeq$collectionSeqRenderable$`,{d7:1,d6:1});var xu;function Su(){return xu||=new bu,xu}function Cu(e,t){if(this.f8=null,this.f8=e,t===null)throw rm(new im)}A=Cu.prototype=new M,A.constructor=Cu,A.ik=(function(e){return this.f8.f(e)}),new N().i(Cu,`com.raquo.laminar.modifiers.RenderableText$$anon$1`,{da:1,d8:1});function wu(e){e.gR(new go(new _p((()=>{throw Zd(new Qd,`Attempting to use owner of unmounted element: `+dl(P().iA(e.b3(),(P(),$())),``,` > `,``))}))))}function Tu(e,t,n){return e.dm=t,e}function Eu(){this.dm=null}A=Eu.prototype=new M,A.constructor=Eu;function Du(){}Du.prototype=A,A.dM=(function(){return this.dm}),A.c6=(function(e){var t=this.iq();return e.a4(new X((e=>{e.a9(t)}))),t}),A.iq=(function(){return new fh(this,P().iw(this))}),new N().i(Eu,`com.raquo.laminar.tags.HtmlTag`,{aA:1,ag:1});function Ou(e,t){this.fg=null,this.fg=e}A=Ou.prototype=new M,A.constructor=Ou,new N().i(Ou,`com.raquo.laminar.tags.SvgTag`,{dj:1,ag:1});function ku(){}A=ku.prototype=new M,A.constructor=ku,A.c7=(function(e){return e}),A.cI=(function(e){return e}),new N().i(ku,`io.github.nguyenyou.webawesome.laminar.UnionAsStringCodec$$anon$1`,{dw:1,ae:1});function Au(e,t){return e.bf=t,e.cF(),e}function ju(){this.bf=null,this.be=null,this.bg=!1,this.bh=null,this.bi=!1}A=ju.prototype=new M,A.constructor=ju;function Mu(){}Mu.prototype=A,A.kd=(function(){return this.bg||=(this.be=new Ad(this.bf,new q((e=>void 0)),void 0),!0),this.be}),A.e=(function(e,t){var n=this.kd().c6(new Q([]));return e.a4(new q((e=>{e.f(this).a9(n)}))),t.a4(new q((e=>{e.a9(n)}))),n}),A.bw=(function(){return this.bi||=(this.bh=new Jd,!0),this.bh});function Nu(){this.dn=null,Pu=this,this.dn=La(67,`1C]4m6m=c4]4]4]4]4]4]4]4]4]3g4]2m9]2m1Jm1m9s4g5mm6]3]4mm12>mEm1m6m1]3]=]DI]1<m24mIs4g2c4w9];]4]<]3m3m=m3mH]8]2m=mBHm3]4mK3{gggg2:g=m@]13]4E]`)}A=Nu.prototype=new M,A.constructor=Nu,A.kh=(function(e){if(e>>>0>1114111)throw Yp(new Xp);return String.fromCodePoint(e)}),A.iC=(function(e,t){if(e<256)var n=(e-48|0)>>>0<=9?e-48|0:(e-65|0)>>>0<=25?e-55|0:(e-97|0)>>>0<=25?e-87|0:-1;else if((e-65313|0)>>>0<=25)var n=e-65303|0;else if((e-65345|0)>>>0<=25)var n=e-65335|0;else{var r=zc().im(this.dn,e),i=r<0?-2-r|0:r;if(i<0)var n=-1;else var a=e-this.dn.a[i]|0,n=a>9?-1:a}return n<t?n:-1}),new N().i(Nu,`java.lang.Character$`,{dE:1,a:1});var Pu;function Fu(){return Pu||=new Nu,Pu}function Iu(){}A=Iu.prototype=new M,A.constructor=Iu,A.cc=(function(e){throw new Sh(`For input string: "`+e+`"`)}),A.jw=(function(e,t,n){e===null&&Ru().cc(e);var r=e.length;r===0&&Ru().cc(e);var i=Fu(),a=e.charCodeAt(0),o=a===45,s=o?-1:0,c=(o||a===43)|0;c>=r&&Ru().cc(e);var l=0;for(l=0;c!==r;){var u=i.iC(e.charCodeAt(c),t);(u<0||l>>>0>n>>>0)&&Ru().cc(e),l=Math.imul(l,t)+u|0,c=1+c|0}return l>>>0>(2147483647-s|0)>>>0&&Ru().cc(e),(l^s)-s|0}),new N().i(Iu,`java.lang.Integer$`,{dK:1,a:1});var Lu;function Ru(){return Lu||=new Iu,Lu}function zu(){}A=zu.prototype=new M,A.constructor=zu;function Bu(e){return e instanceof zu||typeof e==`number`||e instanceof qi}function Vu(e,t,n,r,i){this.bk=null,this.bF=null,this.bl=null,this.bm=0,this.bj=0,this.bk=e,this.bF=t,this.bl=n,this.bm=r,this.bj=i}A=Vu.prototype=new M,A.constructor=Vu,A.j=(function(e){return e instanceof Vu&&this.bl===e.bl&&this.bm===e.bm&&this.bj===e.bj&&this.bk===e.bk&&this.bF===e.bF}),A.q=(function(){var e=``;return this.bk!==`<jscode>`&&(e=``+e+this.bk+`.`),e=``+e+this.bF,this.bl===null?e+=`(Unknown Source)`:(e=e+`(`+this.bl,this.bm>=0&&(e=e+`:`+this.bm,this.bj>=0&&(e=e+`:`+this.bj)),e+=`)`),e}),A.p=(function(){return Ch(this.bk)^Ch(this.bF)^Ch(this.bl)^this.bm^this.bj});var Hu=new N().i(Vu,`java.lang.StackTraceElement`,{aK:1,a:1});function Uu(){}A=Uu.prototype=new M,A.constructor=Uu,A.jG=(function(e,t,n){for(var r=t+n|0,i=``,a=t;a!==r;)i+=``+ta(e.a[a]),a=1+a|0;return i}),new N().i(Uu,`java.lang.String$`,{dV:1,a:1});var Wu;function Gu(){return Wu||=new Uu,Wu}function U(e,t,n,r,i){return e.g3=t,e.g4=i,i&&e.j4(),e}var Ku=class extends Error{constructor(){super(),this.g3=null,this.g4=!1,this.g2=null,this.cw=null}jq(e){return this}c9(){return this.g3}j4(){var e=this instanceof rg?this.a1:this;return this.g2=Object.prototype.toString.call(e)===`[object Error]`?e:Error.captureStackTrace===void 0||Object.isSealed(this)?/* @__PURE__ */ Error():(Error.captureStackTrace(this),this),this}jh(){return this.cw===null&&(this.cw=this.g4?gc().j3(this.g2):new(Hu.r()).C(0)),this.cw}q(){var e=Yi(this),t=this.c9();return t===null?e:e+`: `+t}p(){return ha.prototype.p.call(this)}j(e){return ha.prototype.j.call(this,e)}get message(){var e=this.c9();return e===null?``:e}get name(){return Yi(this)}toString(){return this.q()}};function qu(){this.g5=null,Ju=this,this.g5=new $l(xc().g0)}A=qu.prototype=new M,A.constructor=qu,A.jM=(function(){return this.g5.dA}),new N().i(qu,`scala.Console$`,{ed:1,f5:1});var Ju;function Yu(){return Ju||=new qu,Ju}function Xu(){}A=Xu.prototype=new M,A.constructor=Xu;function Zu(){}Zu.prototype=A,A.q=(function(){return`<function1>`});function Qu(){}A=Qu.prototype=new $c,A.constructor=Qu;function $u(){}$u.prototype=A,A.kp=(function(e){if(e===null)return null;if(e.a.length===0){var t=qh();return yg(),t.go}return new __(e)});function ed(e,t){if(t===e)e.a8(Bm().h6(t));else for(var n=t.k();n.o();)e.a2(n.m());return e}function td(){}A=td.prototype=new M,A.constructor=td;function nd(){}nd.prototype=A,A.q=(function(){return`<function0>`});function rd(){}A=rd.prototype=new M,A.constructor=rd;function id(){}id.prototype=A,A.q=(function(){return`<function1>`});function ad(){}A=ad.prototype=new M,A.constructor=ad;function od(){}od.prototype=A,A.q=(function(){return`<function2>`});function sd(){}A=sd.prototype=new M,A.constructor=sd;function cd(){}cd.prototype=A,A.q=(function(){return`<function3>`});function ld(e){this.cD=!1,this.cD=e}A=ld.prototype=new M,A.constructor=ld,A.q=(function(){return``+this.cD}),new N().i(ld,`scala.runtime.BooleanRef`,{fd:1,a:1});function ud(e){this.bS=0,this.bS=e}A=ud.prototype=new M,A.constructor=ud,A.q=(function(){return``+this.bS}),new N().i(ud,`scala.runtime.IntRef`,{ff:1,a:1});function dd(){this.u=0,this.gD=0,this.hS=0,this.hR=0,fd=this,this.u=Ch(`Seq`),this.gD=Ch(`Map`),this.hS=Ch(`Set`),this.hR=this.kk($(),this.gD)}A=dd.prototype=new iu,A.constructor=dd,A.hv=(function(e){return Dg(e)?this.jp(e,this.u):e instanceof c_?this.jz(e,this.u):this.jL(e,this.u)}),new N().i(dd,`scala.util.hashing.MurmurHash3$`,{fK:1,fJ:1});var fd;function W(){return fd||=new dd,fd}var pd=class extends Ku{};function md(){this.cW=null,this.dW=null,this.dX=null,hd=this,this.cW=Bm().gK(B().z(new(z.r()).C([]))),this.dW=new X((e=>{try{console.error(this.cM(e)+`
`+this.jg(e,`
`))}catch(e){var t=e instanceof Ku?e:new rg(e);console.error(`Error in AirstreamError.consoleErrorCallback:`),console.error(t)}})),this.dX=new X((e=>{console.warn(`Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.`);var t=e;throw t instanceof rg?t.a1:t})),this.jS(this.dW)}A=md.prototype=new M,A.constructor=md,A.cM=(function(e){try{var t=e.c9()}catch{var t=`(Unable to get the message for this error - exception occurred in its getMessage)`}return Ji(e).dJ()+`: `+t}),A.jg=(function(e,t){try{return dl(rf().kp(e.jh()),``,t,``)}catch{return`(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)`}}),A.jS=(function(e){this.cW.a2(e)}),A.a6=(function(e){for(var t=this.cW.k();t.o();){var n=t.m();try{n.f(e)}catch(e){var r=e instanceof Ku?e:new rg(e),i=this.dX;if(n===null?i===null:n.j(i))throw r instanceof rg?r.a1:r;console.warn(`Error processing an unhandled error callback:`),Kl().k8(0,new _p((e=>(()=>{throw e instanceof rg?e.a1:e}))(r)))}}}),new N().i(md,`com.raquo.airstream.core.AirstreamError$`,{bG:1,f3:1,f4:1});var hd;function gd(){return hd||=new md,hd}function _d(e){e.cm=!0,e.co=void 0}function vd(e,t,n){return Cp(e,Ua().hG(t,al().cy,!0),n)}function yd(e,t){e.cm?Tp(e,t):xd(e).push(new _p((()=>{Tp(e,t)})))}function bd(e){return kp(e)>0}function xd(e){var t=e.co;if(t===void 0){var n=Fo().A(B().z(new(Zc.r()).C([])));return e.co=n,n}return t}var Sd=new N().i(1,`com.raquo.airstream.core.Observer`,{ad:1,a2:1,Z:1});function G(e,t,n){return new Vf(n.ik(t))}function Cd(e,t,n,r){return new vu(new X((e=>{(Wo(),new Vo(t,null,null)).a4(new X((e=>(t=>{n.f(t).a9(e)}))(e)))})),xs())}function wd(e,t,n){return new vu(new X((e=>{(Wo(),new Vo(t,null,null)).a4(new X((e=>(t=>{ks().bW(e,t,void 0)}))(e)))})),xs())}function Td(e,t){this.bd=null,this.df=null,this.dg=null,this.bd=e,this.df=(n=>{var r=e.da.f(n);r.g()||t.f(r.v())}),this.dg=(()=>{var e=null;e=this;var t={};if(e===null)throw rm(new im);return t.capture=e.bd.dc,t.passive=e.bd.db,t})()}A=Td.prototype=new M,A.constructor=Td,A.a9=(function(e){this.io(e,!1)}),A.io=(function(e,t){if(Rp(e,this)===-1){var n=new X((t=>(P().hZ(e.F,this),new Do(t.eZ,new _p((()=>{var t=Rp(e,this);t!==-1&&(Lp(e,t),P().jV(e.F,this))})))))),r=t?Ms().kl(e,n):xo().cV(e.ae,new X((t=>n.f(new vs(e,t)))),!1);return Ip(e,this,t),r}var i=new X((e=>void 0));return xo().hA(e.ae,new X((t=>{i.f(new vs(e,t))})),!1)}),A.q=(function(){return`EventListener(`+this.bd.bD.cs+`)`});var Ed=new N().i(Td,`com.raquo.laminar.modifiers.EventListener`,{cX:1,R:1,aw:1});function Dd(e,t,n){this.f2=null,this.f3=null,this.f1=null,this.f2=e,this.f3=t,this.f1=n}A=Dd.prototype=new M,A.constructor=Dd,A.a9=(function(e){this.f1.gJ(e,this.f2,this.f3)}),new N().i(Dd,`com.raquo.laminar.modifiers.KeySetter`,{cY:1,R:1,db:1});function Od(e,t,n){this.f4=null,this.f6=null,this.f5=null,this.f4=e,this.f6=t,this.f5=n}A=Od.prototype=new M,A.constructor=Od,A.a9=(function(e){this.ip(e)}),A.ip=(function(e){e.jI(this.f4);var t=this.f6,n=new X((t=>{this.f5.gJ(e,t,this)}));return xo().ka(e.ae,t,n)}),new N().i(Od,`com.raquo.laminar.modifiers.KeyUpdater`,{cZ:1,R:1,aw:1});function kd(e,t){if(this.dk=null,this.fa=null,this.fb=null,this.fa=t,wu(this),e===null)throw Zd(new Qd,`Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load`);if(!P().jv(e,document))throw Zd(new Qd,`Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering`);this.fb=e,this.jE()}A=kd.prototype=new M,A.constructor=kd,A.cL=(function(){return this.dk}),A.gR=(function(e){this.dk=e}),A.jE=(function(){return this.dk.gG(),ks().bW(this,this.fa,void 0)}),A.b3=(function(){return this.fb}),new N().i(kd,`com.raquo.laminar.nodes.RootNode`,{dg:1,af:1,ay:1});function Ad(e,t,n){this.dm=null,this.ff=null,this.fe=null,this.ff=e,this.fe=n,Tu(this,e,!1)}A=Ad.prototype=new Du,A.constructor=Ad,A.dM=(function(){return this.ff}),A.i7=(function(){var e=this.fe;return e===void 0?void 0:e.map((e=>e.kq.au))}),new N().i(Ad,`com.raquo.laminar.tags.CustomHtmlTag`,{az:1,aA:1,ag:1});function jd(){this.at=null,this.ba=null,this.fh=null,this.fi=!1,fu(this,`appearance`,new ku)}A=jd.prototype=new mu,A.constructor=jd,A.j5=(function(){return this.fi||=(this.fh=Nd().c(`filled`),!0),this.fh}),new N().i(jd,`io.github.nguyenyou.webawesome.laminar.CommonKeys$Appearance$`,{dn:1,a5:1,G:1});var Md;function Nd(){return Md||=new jd,Md}function Pd(){this.at=null,this.ba=null,this.fj=null,this.fk=!1,this.fl=null,this.fm=!1,this.fn=null,this.fo=!1,fu(this,`size`,new ku)}A=Pd.prototype=new mu,A.constructor=Pd,A.hj=(function(){return this.fk||=(this.fj=Id().c(`large`),!0),this.fj}),A.hl=(function(){return this.fm||=(this.fl=Id().c(`medium`),!0),this.fl}),A.hy=(function(){return this.fo||=(this.fn=Id().c(`small`),!0),this.fn}),new N().i(Pd,`io.github.nguyenyou.webawesome.laminar.CommonKeys$ComponentSize$`,{dp:1,a5:1,G:1});var Fd;function Id(){return Fd||=new Pd,Fd}function Ld(){this.at=null,this.ba=null,this.fp=null,this.fq=!1,fu(this,`placement`,new ku)}A=Ld.prototype=new mu,A.constructor=Ld,A.ki=(function(){return this.fq||=(this.fp=zd().c(`top`),!0),this.fp}),new N().i(Ld,`io.github.nguyenyou.webawesome.laminar.CommonKeys$SelectPlacement$`,{dq:1,a5:1,G:1});var Rd;function zd(){return Rd||=new Ld,Rd}function Bd(){this.bf=null,this.be=null,this.bg=!1,this.bh=null,this.bi=!1,Au(this,`wa-divider`)}A=Bd.prototype=new Mu,A.constructor=Bd,A.cF=(function(){return mt}),new N().i(Bd,`io.github.nguyenyou.webawesome.laminar.Divider$`,{dr:1,a8:1,a7:1});var Vd;function Hd(){return Vd||=new Bd,Vd}function Ud(){this.bf=null,this.be=null,this.bg=!1,this.bh=null,this.bi=!1,this.fr=null,this.fs=!1,this.ft=null,this.fu=!1,Au(this,`wa-icon`)}A=Ud.prototype=new Mu,A.constructor=Ud,A.br=(function(){return this.fs||=(this.fr=(J(),fu(new pu,`name`,F().a7)),!0),this.fr}),A.dV=(function(){return this.fu||=(this.ft=(J(),fu(new pu,`variant`,F().a7)),!0),this.ft}),A.cF=(function(){return Ut}),new N().i(Ud,`io.github.nguyenyou.webawesome.laminar.Icon$`,{ds:1,a8:1,a7:1});var Wd;function Gd(){return Wd||=new Ud,Wd}function Kd(){this.bf=null,this.be=null,this.bg=!1,this.bh=null,this.bi=!1,this.fX=null,this.fY=!1,Au(this,`wa-option`)}A=Kd.prototype=new Mu,A.constructor=Kd,A.i=(function(){return this.fY||=(this.fX=(J(),fu(new pu,`value`,F().a7)),!0),this.fX}),A.cF=(function(){return on}),new N().i(Kd,`io.github.nguyenyou.webawesome.laminar.UOption$`,{dv:1,a8:1,a7:1});var qd;function K(){return qd||=new Kd,qd}function Jd(){}A=Jd.prototype=new Zu,A.constructor=Jd,A.f=(function(e){return J().d}),new N().i(Jd,`io.github.nguyenyou.webawesome.laminar.WebComponent$toL$`,{dx:1,ee:1,e:1});function Yd(e){if(e.ad.Z)return e.ad.Q().dJ()+`[]`;for(var t=e.ad.N,n=t.length-1|0;n>=0&&t.charCodeAt(n)===36;)n=n-1|0;if(n>=0&&(t.charCodeAt(n)-48|0)>>>0<=9){for(n=n-1|0;n>=0&&(t.charCodeAt(n)-48|0)>>>0<=9;)n=n-1|0;for(;n>=0&&t.charCodeAt(n)===36;)n=n-1|0}for(;;){if(n>=0)var r=n,i=t.charCodeAt(r),a=i!==36&&i!==46;else var a=!1;if(a)n=n-1|0;else break}var o=1+n|0;return t.substring(o)}function Xd(e){this.dp=null,this.ad=e}A=Xd.prototype=new M,A.constructor=Xd,A.q=(function(){return(this.ad.Y?`interface `:this.ad.X?``:`class `)+this.ad.N}),A.dJ=(function(){return this.dp===null&&(this.dp=Yd(this)),this.dp}),new N().i(Xd,`java.lang.Class`,{dF:1,a:1,O:1});function Zd(e,t){return U(e,t,null,!0,!0),e}var Qd=class extends Ku{};new N().i(Qd,`java.lang.Exception`,{y:1,r:1,a:1});function $d(){}A=$d.prototype=new M,A.constructor=$d;function ef(){}ef.prototype=A;function tf(){this.hQ=null,nf=this,Nm(),this.hQ=_f()}A=tf.prototype=new $u,A.constructor=tf,new N().i(tf,`scala.Predef$`,{eo:1,eh:1,ei:1});var nf;function rf(){return nf||=new tf,nf}function af(e,t){return e.bJ=t,e}function of(){this.bJ=null}A=of.prototype=new M,A.constructor=of;function sf(){}sf.prototype=A,A.b0=(function(e){return this.bJ.dI(e,gg())}),A.ag=(function(){return this.bJ.hn(gg())}),A.aY=(function(e){return this.bJ.dI(e,gg())});function cf(e,t){if(t<0)return 1;var n=e.t();if(n>=0)return n===t?0:n<t?-1:1;for(var r=0,i=e.k();i.o();){if(r===t)return 1;i.m(),r=1+r|0}return r-t|0}function lf(e,t){return new Sm(e).dG(t)}function uf(e,t,n){var r=t>0?t:0,i=n<0?-1:n<=r?0:n-r|0;return i===0?mf().L:new Tm(e,r,i)}function df(e,t){for(var n=t.k();e.o();)if(!n.o()||!Ml().H(e.m(),n.m()))return!1;return!n.o()}function ff(){this.L=null,pf=this,this.L=new vm}A=ff.prototype=new M,A.constructor=ff,A.ag=(function(){return new Lh}),new N().i(ff,`scala.collection.Iterator$`,{ew:1,a:1,V:1});var pf;function mf(){return pf||=new ff,pf}function hf(){}A=hf.prototype=new M,A.constructor=hf,new N().i(hf,`scala.collection.immutable.Map$`,{eM:1,a:1,eC:1});var gf;function _f(){return gf||=new hf,gf}function vf(e){this.gv=null,this.gv=e}A=vf.prototype=new nd,A.constructor=vf,A.O=(function(){return(0,this.gv)()}),new N().i(vf,`scala.runtime.AbstractFunction0.$$Lambda$07eded5776954a9c145e92c329afd52873ad179c`,{f9:1,by:1,ai:1});function q(e){this.gw=null,this.gw=e}A=q.prototype=new id,A.constructor=q,A.f=(function(e){return(0,this.gw)(e)}),new N().i(q,`scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919`,{fa:1,bz:1,e:1});function yf(){}A=yf.prototype=new M,A.constructor=yf;function bf(){}bf.prototype=A,A.q=(function(){return`<function1>`}),A.f=(function(e){return this.gL(e,al().cy)});var xf=new N().i(0,`scala.runtime.Nothing$`,{fg:1,r:1,a:1});function Sf(){}A=Sf.prototype=new M,A.constructor=Sf,A.jb=(function(e){return(t=>e.f(t))}),new N().i(Sf,`scala.scalajs.js.Any$`,{fm:1,fn:1,fo:1});var Cf;function wf(){return Cf||=new Sf,Cf}function Tf(){}A=Tf.prototype=new nd,A.constructor=Tf;function Ef(){}Ef.prototype=A;function Df(){}A=Df.prototype=new id,A.constructor=Df;function Of(){}Of.prototype=A;function kf(){}A=kf.prototype=new od,A.constructor=kf;function Af(){}Af.prototype=A;function jf(){}A=jf.prototype=new cd,A.constructor=jf;function Mf(){}Mf.prototype=A;function Nf(e,t,n,r){if(this.e0=null,this.dY=!1,this.cX=null,this.dZ=null,this.e0=e,this.dY=t,this.cX=n,r===null)throw rm(new im);this.dZ=void 0}A=Nf.prototype=new M,A.constructor=Nf,A.cO=(function(){return this.dZ}),A.cJ=(function(){return za(this)}),A.q=(function(){return Ba(this)}),A.dO=(function(e){try{this.e0.f(e)}catch(e){var t=e instanceof Ku?e:new rg(e);this.dY?this.cQ(new rh(t)):gd().a6(new rh(t))}}),A.cQ=(function(e){try{this.cX.b1(e)?this.cX.f(e):gd().a6(e)}catch(n){var t=n instanceof Ku?n:new rg(n);gd().a6(new ih(t,e))}}),A.cb=(function(e){e.c8(new X((e=>{this.cQ(e)})),new X((e=>{this.dO(e)})))}),new N().i(Nf,`com.raquo.airstream.core.Observer$$anon$8`,{bL:1,a2:1,Z:1,ad:1});function Pf(e,t,n){if(this.cY=null,this.e1=!1,this.e2=null,this.cY=e,this.e1=t,n===null)throw rm(new im);this.e2=void 0}A=Pf.prototype=new M,A.constructor=Pf,A.cO=(function(){return this.e2}),A.cJ=(function(){return za(this)}),A.q=(function(){return Ba(this)}),A.dO=(function(e){this.cb(new nh(e))}),A.cQ=(function(e){this.cb(new th(e))}),A.cb=(function(e){try{this.cY.b1(e)?this.cY.f(e):e.c8(new X((e=>{gd().a6(e)})),new X((e=>void 0)))}catch(n){var t=n instanceof Ku?n:new rg(n);this.e1&&e.hi()?this.cQ(new rh(t)):e.c8(new X((e=>{gd().a6(new ih(t,e))})),new X((e=>{gd().a6(new rh(t))})))}}),new N().i(Pf,`com.raquo.airstream.core.Observer$$anon$9`,{bM:1,a2:1,Z:1,ad:1});function Ff(e){if(this.ek=null,this.el=!1,this.hH=null,e===null)throw rm(new im);$o(this)}A=Ff.prototype=new M,A.constructor=Ff,A.kc=(function(){return this.el||=(this.ek=new Ou(`svg`,!1),!0),this.ek}),new N().i(Ff,`com.raquo.laminar.api.Laminar$svg$`,{ch:1,cH:1,cq:1,cs:1});function If(){this.d=null,Lf=this,this.d=new Mg}A=If.prototype=new M,A.constructor=If,new N().i(If,`com.raquo.laminar.api.package$`,{ck:1,at:1,au:1,as:1});var Lf;function J(){return Lf||=new If,Lf}function Rf(e,t,n){return e.bb=t,e.bc=n,e}function zf(){this.bb=null,this.bc=null}A=zf.prototype=new ms,A.constructor=zf;function Bf(){}Bf.prototype=A,A.c=(function(e){return new Dd(this,Qi(e),new yp(((e,t,n)=>{P().hw(e,t,n)})))});function Vf(e){this.fd=null,this.dl=null,this.fd=kh(),this.dl=P().iy(e)}A=Vf.prototype=new M,A.constructor=Vf,A.hx=(function(e){this.fd=e}),A.hF=(function(e){}),A.a9=(function(e){ks().bW(e,this,void 0)}),A.kf=(function(){return this.dl.data}),A.b3=(function(){return this.dl}),new N().i(Vf,`com.raquo.laminar.nodes.TextNode`,{di:1,af:1,R:1,ax:1});function Hf(){this.bf=null,this.be=null,this.bg=!1,this.bh=null,this.bi=!1,this.fF=null,this.fG=!1,this.fP=null,this.fQ=!1,this.fN=null,this.fO=!1,this.fJ=null,this.fK=!1,this.fD=null,this.fE=!1,this.fx=null,this.fy=!1,this.fR=null,this.fS=!1,this.fv=null,this.fw=!1,this.fH=null,this.fI=!1,this.fB=null,this.fC=!1,this.fL=null,this.fM=!1,this.fz=null,this.fA=!1,Au(this,`wa-select`)}A=Hf.prototype=new Mu,A.constructor=Hf,A.ca=(function(){return this.fG||=(this.fF=(J(),new uu(`input`)),!0),this.fF}),A.i=(function(){return this.fQ||=(this.fP=(J(),fu(new pu,`value`,F().a7)),!0),this.fP}),A.bv=(function(){return this.fO||=(this.fN=Id(),!0),this.fN}),A.aO=(function(){return this.fK||=(this.fJ=(J(),fu(new pu,`placeholder`,F().a7)),!0),this.fJ}),A.hm=(function(){return this.fE||=(this.fD=(J(),fu(new pu,`multiple`,F().bC)),!0),this.fD}),A.iD=(function(){return this.fy||=(this.fx=(J(),fu(new pu,`disabled`,F().bC)),!0),this.fx}),A.bx=(function(){return this.fS||=(this.fR=(J(),fu(new pu,`with-clear`,F().bC)),!0),this.fR}),A.ia=(function(){return this.fw||=(this.fv=Nd(),!0),this.fv}),A.jO=(function(){return this.fI||=(this.fH=(J(),fu(new pu,`pill`,F().bC)),!0),this.fH}),A.dK=(function(){return this.fC||=(this.fB=(J(),fu(new pu,`label`,F().a7)),!0),this.fB}),A.jP=(function(){return this.fM||=(this.fL=zd(),!0),this.fL}),A.jn=(function(){return this.fA||=(this.fz=(J(),fu(new pu,`hint`,F().a7)),!0),this.fz}),A.cF=(function(){return Gi}),new N().i(Hf,`io.github.nguyenyou.webawesome.laminar.Select$`,{dt:1,a8:1,a7:1,dy:1});var Uf;function Y(){return Uf||=new Hf,Uf}function Wf(){}A=Wf.prototype=new M,A.constructor=Wf;function Gf(){}Gf.prototype=A;function Kf(e,t){return e===t}function qf(e){return e?1231:1237}var Jf=new N().i(0,`java.lang.Boolean`,{dC:1,a:1,S:1,O:1},(e=>typeof e==`boolean`));function Yf(e){return e}function Xf(e,t){return t instanceof Ki&&e===t.c}var Zf=new N().i(0,`java.lang.Character`,{aG:1,a:1,S:1,O:1},(e=>e instanceof Ki));function Qf(e,t){return U(e,t,null,!0,!0),e}var $f=class extends Qd{};new N().i($f,`java.lang.RuntimeException`,{H:1,y:1,r:1,a:1});function ep(){this.s=null,this.s=``}A=ep.prototype=new M,A.constructor=ep,A.ib=(function(e){var t=Gu().jG(e,0,e.a.length);return this.s=``+this.s+t,this}),A.q=(function(){return this.s}),A.l=(function(){return this.s.length}),A.gN=(function(e){return this.s.charCodeAt(e)}),new N().i(ep,`java.lang.StringBuilder`,{dW:1,ah:1,aE:1,a:1});function tp(){}A=tp.prototype=new ef,A.constructor=tp;function np(){}np.prototype=A;function rp(){}A=rp.prototype=new M,A.constructor=rp,A.q=(function(){return`<function1>`}),A.b1=(function(e){return!1}),A.ie=(function(e){throw new dm(e)}),A.f=(function(e){this.ie(e)}),new N().i(rp,`scala.PartialFunction$$anon$1`,{en:1,e:1,g:1,a:1});function ip(){}A=ip.prototype=new M,A.constructor=ip;function ap(){}ap.prototype=A,A.t=(function(){return-1}),A.aN=(function(e,t,n){return ul(this,e,t,n)}),A.bp=(function(e,t,n,r){return fl(this,e,t,n,r)}),A.k=(function(){return this}),A.dG=(function(e){return lf(this,e)}),A.cK=(function(e){return this.cf(e,-1)}),A.cf=(function(e,t){return uf(this,e,t)}),A.q=(function(){return`<iterator>`});function op(e,t){return e.bM=t,e}function sp(){this.bM=null}A=sp.prototype=new M,A.constructor=sp;function cp(){}cp.prototype=A,A.gK=(function(e){return this.bM.aY(e)}),A.h6=(function(e){return this.bM.b0(e)}),A.ag=(function(){return this.bM.ag()}),A.aY=(function(e){return this.gK(e)}),A.b0=(function(e){return this.h6(e)});function lp(e,t){return t>=0&&e.a5(t)>0}function up(e){return e.a5(0)===0}function dp(e,t){var n=e.t();if(n!==-1){var r=t.t();if(r!==-1){if(n!==r)return!1;if(n===0)return!0}}return df(e.k(),t)}function fp(e,t){for(var n=e.b2().ag(),r=e.k();r.o();)n.a2(t.f(r.m()));return n.ah()}function pp(e,t){if(this.gq=null,this.cA=null,this.gq=e,t===null)throw rm(new im);this.cA=t}A=pp.prototype=new M,A.constructor=pp,A.i3=(function(e){return this.cA.a2(e),this}),A.hW=(function(e){return this.cA.a8(e),this}),A.ah=(function(){return this.gq.f(this.cA.ah())}),A.a2=(function(e){return this.i3(e)}),A.a8=(function(e){return this.hW(e)}),new N().i(pp,`scala.collection.mutable.Builder$$anon$1`,{eW:1,T:1,U:1,W:1});function mp(e,t){return e.bP=t,e}function hp(){this.bP=null}A=hp.prototype=new M,A.constructor=hp;function gp(){}gp.prototype=A,A.i4=(function(e){return this.bP.a2(e),this}),A.hX=(function(e){return this.bP.a8(e),this}),A.ah=(function(){return this.bP}),A.a2=(function(e){return this.i4(e)}),A.a8=(function(e){return this.hX(e)}),new N().i(hp,`scala.collection.mutable.GrowableBuilder`,{bp:1,T:1,U:1,W:1});function _p(e){this.gz=null,this.gz=e}A=_p.prototype=new Ef,A.constructor=_p,A.O=(function(){return(0,this.gz)()}),new N().i(_p,`scala.scalajs.runtime.AnonFunction0.$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d`,{fu:1,ft:1,by:1,ai:1});function X(e){this.gA=null,this.gA=e}A=X.prototype=new Of,A.constructor=X,A.f=(function(e){return(0,this.gA)(e)}),new N().i(X,`scala.scalajs.runtime.AnonFunction1.$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1`,{fw:1,fv:1,bz:1,e:1});function vp(e){this.gB=null,this.gB=e}A=vp.prototype=new Af,A.constructor=vp,A.dD=(function(e,t){return(0,this.gB)(e,t)}),new N().i(vp,`scala.scalajs.runtime.AnonFunction2.$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7`,{fy:1,fx:1,fb:1,ef:1});function yp(e){this.gC=null,this.gC=e}A=yp.prototype=new Mf,A.constructor=yp,A.gJ=(function(e,t,n){return(0,this.gC)(e,t,n)}),new N().i(yp,`scala.scalajs.runtime.AnonFunction3.$$Lambda$73f37e31ba038fe839c174212837da323f140c96`,{fA:1,fz:1,fc:1,eg:1});function bp(){}A=bp.prototype=new M,A.constructor=bp;function xp(){}xp.prototype=A,A.aP=(function(){return new mm(this)});function Sp(e){e.bB=Fo().A(B().z(new(Sd.r()).C([]))),e.d5=Fo().A(B().z(new(Ra.r()).C([]))),e.cp=!1}function Cp(e,t,n){var r=io(),i=(()=>{Ep(e);var r=wp(e,t,n);return t.cb(ag(e)),Dp(e),r}),a=!bd(e);if(r.E||!a)var o=i();else{r.E=!0;try{var o=i()}finally{r.E=!1,to(r)}}return o}function wp(e,t,n){var r=new Do(n,new _p((()=>{yd(e,t)})));return e.bB.push(t),r}function Tp(e,t){Ka().jX(e.bB,t)&&Op(e)}function Ep(e){e.cp||=!0}function Dp(e){kp(e)===1&&oh(e)}function Op(e){bd(e)||(e.cp=!1)}function kp(e){var t=e.bB.length,n=e.d5;return(t|0)+(n.length|0)|0}function Ap(e){e.ee=Ua().jc(new jp(e),(Ua(),!0))}function jp(e){if(this.ef=null,e===null)throw rm(new im);this.ef=e}A=jp.prototype=new bf,A.constructor=jp,A.ju=(function(e){return!0}),A.ij=(function(e,t){new Xa(new X((t=>{this.ef.k1(e,t)})))}),A.b1=(function(e){return this.ju(e)}),A.gL=(function(e,t){return this.ij(e,t)}),new N().i(jp,`com.raquo.airstream.state.Var$$anon$1`,{c7:1,bA:1,e:1,g:1,a:1});function Mp(e){if(e===null)throw rm(new im)}A=Mp.prototype=new bf,A.constructor=Mp,A.b1=(function(e){return typeof e==`string`||!1}),A.gL=(function(e,t){return typeof e==`string`?e:t.f(e)}),new N().i(Mp,`com.raquo.laminar.DomApi$$anon$2`,{cc:1,bA:1,e:1,g:1,a:1});function Np(e,t){this.cr=null,this.d9=null,this.cr=e,this.d9=t}A=Np.prototype=new M,A.constructor=Np,A.a9=(function(e){var t=this.d9;t!==void 0&&t.hr(e,this.cr),ks().bW(e,this.cr,void 0)}),A.kn=(function(e){return new Np(this.cr,e.id(this.d9))});var Pp=new N().i(Np,`com.raquo.laminar.inserters.StaticChildInserter`,{cM:1,R:1,cK:1,cO:1,cJ:1});function Fp(e){e.dh=new ko(new _p((()=>{e.ae.gG()})),new _p((()=>{e.ae.iz()}))),e.aU=void 0}function Ip(e,t,n){if(e.aU===void 0)e.aU=Fo().A(B().z(new(Ed.r()).C([t])));else if(n){var r=e.aU;if(r===void 0)throw new cm(`undefined.get`);r.unshift(t)}else{var i=e.aU;if(i===void 0)throw new cm(`undefined.get`);i.push(t)}}function Lp(e,t){var n=e.aU;n!==void 0&&n.splice(t,1)}function Rp(e,t){var n=e.aU;if(n===void 0)return-1;for(var r=!1,i=0;!r&&i<(n.length|0);){var a=n[i];(a===null?t===null:Xi(a,t))?r=!0:i=1+i|0}return r?i:-1}function zp(e,t){Vp(e,e.cv,t)&&Hp(e,t)}function Bp(e,t){var n=e.cv;e.cv=t,Vp(e,n,t)||Hp(e,t)}function Vp(e,t,n){var r=!t.g()&&!t.v().cL().J.g(),i=!n.g()&&!n.v().cL().J.g();return r&&!i}function Hp(e,t){Up(e,t.g()?kh():new Ah(t.v().cL()))}function Up(e,t){if(t.g())e.dh.is();else{var n=t.v();e.dh.k5(n)}}function Wp(){}A=Wp.prototype=new Gf,A.constructor=Wp;function Gp(){}Gp.prototype=A;var Kp=class extends $f{constructor(e){super(),U(this,e,null,!0,!0)}};new N().i(Kp,`java.lang.ArithmeticException`,{dB:1,H:1,y:1,r:1,a:1});var qp=new N().i(0,`java.lang.Byte`,{dD:1,X:1,a:1,S:1,O:1},(e=>sa(e)));function Jp(e,t){return U(e,t,null,!0,!0),e}function Yp(e){return U(e,null,null,!0,!0),e}var Xp=class extends $f{};new N().i(Xp,`java.lang.IllegalArgumentException`,{aI:1,H:1,y:1,r:1,a:1});var Zp=class extends $f{constructor(e){super(),U(this,e,null,!0,!0)}};new N().i(Zp,`java.lang.IllegalStateException`,{dH:1,H:1,y:1,r:1,a:1});function Qp(e,t){return U(e,t,null,!0,!0),e}function $p(e,t){return U(e,`Index out of range: `+t,null,!0,!0),e}var em=class extends $f{};new N().i(em,`java.lang.IndexOutOfBoundsException`,{dI:1,H:1,y:1,r:1,a:1});function tm(){}A=tm.prototype=new Gf,A.constructor=tm,new N().i(tm,`java.lang.JSConsoleBasedPrintStream$DummyOutputStream`,{dN:1,aD:1,aB:1,aF:1,aC:1});function nm(e,t){return U(e,t,null,!0,!0),e}function rm(e){return U(e,null,null,!0,!0),e}var im=class extends $f{};new N().i(im,`java.lang.NullPointerException`,{dP:1,H:1,y:1,r:1,a:1});var am=new N().i(0,`java.lang.Short`,{dS:1,X:1,a:1,S:1,O:1},(e=>ca(e))),om=class extends $f{constructor(e){super(),U(this,e,null,!0,!0)}};new N().i(om,`java.lang.UnsupportedOperationException`,{e0:1,H:1,y:1,r:1,a:1});var sm=class extends $f{constructor(e){super(),U(this,e,null,!0,!0)}};new N().i(sm,`java.util.ConcurrentModificationException`,{e5:1,H:1,y:1,r:1,a:1});var cm=class extends $f{constructor(e){super(),U(this,e,null,!0,!0)}};new N().i(cm,`java.util.NoSuchElementException`,{e6:1,H:1,y:1,r:1,a:1});function lm(){}A=lm.prototype=new np,A.constructor=lm,A.f=(function(e){return e}),A.q=(function(){return`generalized constraint`}),new N().i(lm,`scala.$less$colon$less$$anon$1`,{eb:1,e8:1,e9:1,e:1,a:1});function um(e){if(!e.g7){if(e.cx===null)var t=`null`;else{var n=B().i8(e.cx),r=n===null?`of a JS class`:`of class `+n.ad.N;try{var t=e.cx+` (`+r+`)`}catch{var t=`an instance `+r}}e.g6=t,e.g7=!0}return e.g6}var dm=class extends $f{constructor(e){super(),this.cx=null,this.g6=null,this.g7=!1,this.cx=e,U(this,null,null,!0,!0)}c9(){return um(this)}};new N().i(dm,`scala.MatchError`,{ej:1,H:1,y:1,r:1,a:1});function fm(){}A=fm.prototype=new M,A.constructor=fm;function pm(){}pm.prototype=A,A.aP=(function(){return new mm(this)}),A.g=(function(){return this===kh()}),A.t=(function(){return!this.g()|0}),A.k=(function(){return this.g()?mf().L:new ym(this.v())});function mm(e){if(this.bG=0,this.ga=0,this.g9=null,e===null)throw rm(new im);this.g9=e,this.bG=0,this.ga=e.Q()}A=mm.prototype=new ap,A.constructor=mm,A.o=(function(){return this.bG<this.ga}),A.m=(function(){var e=this.g9.R(this.bG);return this.bG=1+this.bG|0,e}),new N().i(mm,`scala.Product$$anon$1`,{ep:1,J:1,b:1,c:1,K:1});function hm(e){this.bJ=null,af(this,e)}A=hm.prototype=new sf,A.constructor=hm,new N().i(hm,`scala.collection.ClassTagSeqFactory$AnySeqDelegate`,{eu:1,et:1,a:1,V:1,Y:1});function gm(e){return dl(e,e.aM()+`(`,`, `,`)`)}function _m(e){return!!(e&&e.$classData&&e.$classData.n.f)}function vm(){}A=vm.prototype=new ap,A.constructor=vm,A.o=(function(){return!1}),A.jH=(function(){throw new cm(`next on empty iterator`)}),A.t=(function(){return 0}),A.m=(function(){this.jH()}),A.cf=(function(e,t){return this}),new N().i(vm,`scala.collection.Iterator$$anon$19`,{ex:1,J:1,b:1,c:1,K:1});function ym(e){this.gc=null,this.bK=!1,this.gc=e,this.bK=!1}A=ym.prototype=new ap,A.constructor=ym,A.o=(function(){return!this.bK}),A.m=(function(){return this.bK?mf().L.m():(this.bK=!0,this.gc)}),A.cf=(function(e,t){return this.bK||e>0||t===0?mf().L:this}),new N().i(ym,`scala.collection.Iterator$$anon$20`,{ey:1,J:1,b:1,c:1,K:1});function bm(e){for(;;)if(e.G instanceof Sm){var t=e.G;if(e.G=t.G,e.av=t.av,t.V!==null){e.U===null&&(e.U=t.U);var n=t.U;n===null&&Il().bs(),n.bL=e.V,e.V=t.V}}else return}function xm(e){for(;;)if(e.V===null)return e.G=null,e.U=null,!1;else{if(e.G=e.V.jm(),e.U===e.V){var t=e.U;t===null&&Il().bs(),e.U=t.bL}if(e.V=e.V.bL,bm(e),e.av)return!0;if(!(e.G!==null&&e.G.o()))continue;return e.av=!0,!0}}function Sm(e){this.G=null,this.V=null,this.U=null,this.av=!1,this.G=e,this.V=null,this.U=null,this.av=!1}A=Sm.prototype=new ap,A.constructor=Sm,A.o=(function(){return this.av?!0:this.G===null?!1:this.G.o()?(this.av=!0,!0):xm(this)}),A.m=(function(){if(this.o()){this.av=!1;var e=this.G;return e===null&&Il().bs(),e.m()}return mf().L.m()}),A.dG=(function(e){var t=new ml(e,null);if(this.V===null)this.V=t,this.U=t;else{var n=this.U;n===null&&Il().bs(),n.bL=t,this.U=t}return this.G===null&&(this.G=mf().L),this}),new N().i(Sm,`scala.collection.Iterator$ConcatIterator`,{aW:1,J:1,b:1,c:1,K:1});function Cm(e){for(;e.al>0;)e.aw.o()?(e.aw.m(),e.al=e.al-1|0):e.al=0}function wm(e,t){if(e.M<0)return-1;var n=e.M-t|0;return n<0?0:n}function Tm(e,t,n){this.aw=null,this.M=0,this.al=0,this.aw=e,this.M=n,this.al=t}A=Tm.prototype=new ap,A.constructor=Tm,A.t=(function(){var e=this.aw.t();if(e<0)return-1;var t=e-this.al|0,n=t<0?0:t;if(this.M<0)return n;var r=this.M;return r<n?r:n}),A.o=(function(){return Cm(this),this.M!==0&&this.aw.o()}),A.m=(function(){return Cm(this),this.M>0?(this.M=this.M-1|0,this.aw.m()):this.M<0?this.aw.m():mf().L.m()}),A.cf=(function(e,t){var n=e>0?e:0;if(t<0)var r=wm(this,n);else if(t<=n)var r=0;else if(this.M<0)var r=t-n|0;else var i=wm(this,n),a=t-n|0,r=i<a?i:a;var o=this.al+n|0;return r===0?mf().L:o<0?(this.al=2147483647,this.M=0,lf(this,new vf((()=>new Tm(this.aw,o-2147483647|0,r))))):(this.al=o,this.M=r,this)}),new N().i(Tm,`scala.collection.Iterator$SliceIterator`,{eB:1,J:1,b:1,c:1,K:1});function Em(e,t){return t>=0&&e.a5(t)>0}function Dm(e,t){if(t<0)throw Qp(new em,``+t);var n=e.iI(t);if(n.g())throw Qp(new em,``+t);return n.P()}function Om(e,t){return Og(t)?km(e,e,t):dp(e,t)}function km(e,t,n){for(var r=n,i=t;;)if(i===r)return!0;else{if(!i.g()&&!r.g()&&Ml().H(i.P(),r.P())){var a=i.D(),o=r.D();i=a,r=o;continue}return i.g()&&r.g()}}function Am(e){if(this.bO=null,e===null)throw rm(new im);this.bO=e}A=Am.prototype=new ap,A.constructor=Am,A.o=(function(){return!this.bO.g()}),A.m=(function(){var e=this.bO.P();return this.bO=this.bO.D(),e}),new N().i(Am,`scala.collection.StrictOptimizedLinearSeqOps$$anon$1`,{eF:1,J:1,b:1,c:1,K:1});function jm(){Mm=this,$(),$()}A=jm.prototype=new M,A.constructor=jm,A.aY=(function(e){return $().hs(e)}),A.ag=(function(){return new O_}),A.b0=(function(e){return $().hs(e)}),new N().i(jm,`scala.collection.immutable.List$`,{eL:1,a:1,V:1,Y:1,a1:1});var Mm;function Nm(){return Mm||=new jm,Mm}function Pm(){this.gj=null,Fm=this,this.gj=new ga(0)}A=Pm.prototype=new M,A.constructor=Pm,A.aY=(function(e){return this.h7(e)}),A.h7=(function(e){var t=e.t();if(t>=0){var n=this.hu(this.gj,0,t),r=_m(e)?e.aN(n,0,2147483647):e.k().aN(n,0,2147483647);if(r!==t)throw new Zp(`Copied `+r+` of `+t);return k_(new j_,n,t)}return A_(new j_).gH(e)}),A.ag=(function(){return new Lm}),A.k0=(function(e,t){if(t<0)throw Qf(new $f,`Overflow while resizing array of array-backed collection. Requested length: `+t+`; current length: `+e+`; increase: `+(t-e|0));if(t<=e)return-1;if(t>2147483639)throw Qf(new $f,`Array of array-backed collection exceeds VM length limit of 2147483639. Requested length: `+t+`; current length: `+e);if(e>1073741819)return 2147483639;var n=e<<1,r=n>16?n:16;return t>r?t:r}),A.hu=(function(e,t,n){var r=this.k0(e.a.length,n);if(r<0)return e;var i=new ga(r);return e.ac(0,i,0,t),i}),A.b0=(function(e){return this.h7(e)}),new N().i(Pm,`scala.collection.mutable.ArrayBuffer$`,{eO:1,a:1,V:1,Y:1,a1:1});var Fm;function Im(){return Fm||=new Pm,Fm}function Lm(){this.bP=null,mp(this,(Im(),A_(new j_)))}A=Lm.prototype=new gp,A.constructor=Lm,new N().i(Lm,`scala.collection.mutable.ArrayBuffer$$anon$1`,{eP:1,bp:1,T:1,U:1,W:1});function Rm(){this.bM=null,op(this,Zm())}A=Rm.prototype=new cp,A.constructor=Rm,new N().i(Rm,`scala.collection.mutable.Buffer$`,{eV:1,eD:1,a:1,V:1,Y:1});var zm;function Bm(){return zm||=new Rm,zm}function Vm(e,t){return e.bQ=t,e}function Hm(){this.bQ=null}A=Hm.prototype=new M,A.constructor=Hm;function Um(){}Um.prototype=A,A.a8=(function(e){return ed(this,e)}),A.ah=(function(){return this.bQ});function Wm(){}A=Wm.prototype=new M,A.constructor=Wm,A.aY=(function(e){return new O_().cU(e)}),A.ag=(function(){return mp(new hp,new O_)}),A.b0=(function(e){return new O_().cU(e)}),new N().i(Wm,`scala.collection.mutable.ListBuffer$`,{eZ:1,a:1,V:1,Y:1,a1:1});var Gm;function Km(){return Gm||=new Wm,Gm}function qm(e,t){this.dz=null,this.gu=null,this.gt=0,this.dz=e,this.gu=t,this.gt=t.O()|0}A=qm.prototype=new ap,A.constructor=qm,A.o=(function(){return kl().gO(this.gt,this.gu.O()|0,`mutation occurred during iteration`),this.dz.o()}),A.m=(function(){return this.dz.m()}),new N().i(qm,`scala.collection.mutable.MutationTracker$CheckedIterator`,{f1:1,J:1,b:1,c:1,K:1});function Jm(e){this.gy=null,this.bT=0,this.gx=0,this.gy=e,this.bT=0,this.gx=e.Q()}A=Jm.prototype=new ap,A.constructor=Jm,A.o=(function(){return this.bT<this.gx}),A.m=(function(){var e=this.gy.R(this.bT);return this.bT=1+this.bT|0,e}),new N().i(Jm,`scala.runtime.ScalaRunTime$$anon$1`,{fk:1,J:1,b:1,c:1,K:1});function Ym(){}A=Ym.prototype=new M,A.constructor=Ym,A.aY=(function(e){return this.h8(e)}),A.ag=(function(){return N_(new P_)}),A.h8=(function(e){return ed(N_(new P_),e).ah()}),A.b0=(function(e){return this.h8(e)}),new N().i(Ym,`scala.scalajs.js.WrappedArray$`,{fq:1,a1:1,a:1,V:1,Y:1});var Xm;function Zm(){return Xm||=new Ym,Xm}function Qm(){}A=Qm.prototype=new M,A.constructor=Qm,A.aY=(function(e){return this.h9(e)}),A.h9=(function(e){return this.ag().a8(e).ah()}),A.ag=(function(){return new pp(new q((e=>new Q(e.aL))),M_(new P_,[]))}),A.b0=(function(e){return this.h9(e)}),new N().i(Qm,`scala.scalajs.runtime.WrappedVarArgs$`,{fC:1,a1:1,a:1,V:1,Y:1});var $m;function eh(){return $m||=new Qm,$m}function th(e){this.bU=null,this.bU=e}A=th.prototype=new xp,A.constructor=th,A.p=(function(){return W().cR(this,-1408943127,!0)}),A.j=(function(e){if(this===e)return!0;if(e instanceof th){var t=this.bU,n=e.bU;return t===null?n===null:t.j(n)}return!1}),A.q=(function(){return B().dB(this)}),A.Q=(function(){return 1}),A.S=(function(){return`Failure`}),A.R=(function(e){if(e===0)return this.bU;throw $p(new em,e)}),A.hh=(function(){return!0}),A.hi=(function(){return!1}),A.c8=(function(e,t){return e.f(this.bU)}),new N().i(th,`scala.util.Failure`,{bD:1,bF:1,d:1,P:1,a:1});function nh(e){this.bV=null,this.bV=e}A=nh.prototype=new xp,A.constructor=nh,A.p=(function(){return W().cR(this,-1750213842,!0)}),A.j=(function(e){return this===e||e instanceof nh&&Ml().H(this.bV,e.bV)}),A.q=(function(){return B().dB(this)}),A.Q=(function(){return 1}),A.S=(function(){return`Success`}),A.R=(function(e){if(e===0)return this.bV;throw $p(new em,e)}),A.hh=(function(){return!1}),A.hi=(function(){return!0}),A.c8=(function(e,t){try{return t.f(this.bV)}catch(t){var n=t instanceof Ku?t:new rg(t),r=nu().kj(n);if(!r.g()){var i=r.v();return e.f(i)}throw n instanceof rg?n.a1:n}}),new N().i(nh,`scala.util.Success`,{bE:1,bF:1,d:1,P:1,a:1});var rh=class e extends pd{constructor(e){super(),this.by=null,this.by=e,U(this,`ObserverError: `+gd().cM(e),null,!0,!0)}aP(){return new mm(this)}p(){return W().gM(this,-889275714,null)}j(t){if(this===t)return!0;if(t instanceof e){var n=this.by,r=t.by;return n===null?r===null:n.j(r)}return!1}Q(){return 1}S(){return`ObserverError`}R(e){if(e===0)return this.by;throw Qp(new em,``+e)}q(){return`ObserverError: `+this.by}};new N().i(rh,`com.raquo.airstream.core.AirstreamError$ObserverError`,{an:1,ac:1,r:1,a:1,d:1,P:1});var ih=class e extends pd{constructor(e,t){super(),this.bA=null,this.bz=null,this.bA=e,this.bz=t,U(this,`ObserverErrorHandlingError: `+gd().cM(e)+`; cause: `+gd().cM(t),null,!0,!0),this.jq(t)}aP(){return new mm(this)}p(){return W().gM(this,-889275714,null)}j(t){if(this===t)return!0;if(t instanceof e){var n=this.bA,r=t.bA;if(n===null?r===null:n.j(r)){var i=this.bz,a=t.bz;return i===null?a===null:i.j(a)}return!1}return!1}Q(){return 2}S(){return`ObserverErrorHandlingError`}R(e){if(e===0)return this.bA;if(e===1)return this.bz;throw Qp(new em,``+e)}q(){return`ObserverErrorHandlingError: `+this.bA+`; cause: `+this.bz}};new N().i(ih,`com.raquo.airstream.core.AirstreamError$ObserverErrorHandlingError`,{ao:1,ac:1,r:1,a:1,d:1,P:1});var ah=class e extends pd{constructor(e,t){super(),this.b5=null,this.b4=0,this.b5=e,this.b4=t,U(this,`Transaction depth exceeded maxDepth = `+t+`: Execution of `+e+" aborted. See `Transaction.maxDepth`.",null,!0,!0)}aP(){return new mm(this)}p(){var e=-889275714;return e=V().r(e,Ch(`TransactionDepthExceeded`)),e=V().r(e,V().w(this.b5)),e=V().r(e,this.b4),V().C(e,2)}j(t){if(this===t)return!0;if(t instanceof e){if(this.b4===t.b4){var n=this.b5,r=t.b5;return n===null?r===null:n===r}return!1}return!1}Q(){return 2}S(){return`TransactionDepthExceeded`}R(e){if(e===0)return this.b5;if(e===1)return this.b4;throw Qp(new em,``+e)}q(){return`TransactionDepthExceeded: `+this.b5+`; maxDepth: `+this.b4}};new N().i(ah,`com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded`,{ap:1,ac:1,r:1,a:1,d:1,P:1});function oh(e){ag(e)}function sh(e){this.ec=null,this.ee=null,this.d4=null,this.d3=null,this.ed=null,this.ec=void 0,Ap(this),this.d4=e,this.d3=new bg(this.d4,new _p((()=>Ba(this)))),this.ed=this.d3}A=sh.prototype=new M,A.constructor=sh,A.cO=(function(){return this.ec}),A.cJ=(function(){return za(this)}),A.q=(function(){return Ba(this)}),A.hC=(function(){return this.ed}),A.k1=(function(e,t){this.d4=e,og(this.d3,e,t)}),new N().i(sh,`com.raquo.airstream.state.SourceVar`,{c3:1,aq:1,ar:1,a2:1,Z:1,c5:1});function ch(e){this.bb=null,this.bc=null,this.eP=null,this.eQ=!1,Rf(this,e,$())}A=ch.prototype=new Bf,A.constructor=ch,A.gP=(function(){return this.eQ||=(this.eP=this.c(`column`),!0),this.eP}),new N().i(ch,`com.raquo.laminar.defs.styles.StyleProps$$anon$30`,{cx:1,a6:1,G:1,a3:1,a4:1,cB:1});function lh(e){this.bb=null,this.bc=null,this.eR=null,this.eS=!1,Rf(this,e,$())}A=lh.prototype=new Bf,A.constructor=lh,A.ko=(function(){return this.eS||=(this.eR=this.c(`wrap`),!0),this.eR}),new N().i(lh,`com.raquo.laminar.defs.styles.StyleProps$$anon$31`,{cy:1,a6:1,G:1,a3:1,a4:1,cC:1});function uh(e,t){var n=e.di;n===void 0?e.di=Ul().ih(Fo().A(B().z(new(Eh.r()).C([t])))):n.push(t)|0}function dh(e,t){var n=e.f9;if(n!==void 0){_return:{for(var r=n.length|0,i=0;i<r;){if(n[i].kw()===t){var a=i;break _return}i=1+i|0}var a=-1}return a>=0}return!1}function fh(e,t){this.cv=null,this.ae=null,this.dh=null,this.aU=null,this.dj=null,this.F=null,this.f9=null,this.di=null,this.dj=e,this.F=t,this.cv=kh(),wu(this),Fp(this),this.f9=void 0,this.di=void 0}A=fh.prototype=new M,A.constructor=fh,A.a9=(function(e){ks().bW(e,this,void 0)}),A.cL=(function(){return this.ae}),A.gR=(function(e){this.ae=e}),A.hF=(function(e){zp(this,e)}),A.hx=(function(e){Bp(this,e)}),A.iv=(function(){if(P().hf(this.F)){var e=this.dj;return e instanceof Ad?e.i7():void 0}return rs().eV}),A.js=(function(e){var t=this.iv();return t!==void 0&&Ro().jo(t,e,0)}),A.jI=(function(e){if(e instanceof hu&&this.js(e.au)){if(dh(this,e.au))throw Zd(new Qd,"Can not add uncontrolled `"+e.au+" <-- ???` to element `"+P().gS(this.F)+"` that already has an input controller for `"+e.au+"` property.");uh(this,e.au)}}),A.q=(function(){return`ReactiveHtmlElement(`+(this.F===null?`tag=`+this.dj.dM():this.F.outerHTML)+`)`}),A.b3=(function(){return this.F});var ph=new N().i(fh,`com.raquo.laminar.nodes.ReactiveHtmlElement`,{df:1,af:1,R:1,ax:1,ay:1,dd:1});function mh(e,t){return Object.is(e,t)}function hh(e){var t=e|0;if(t===e&&1/e!=-1/0)return t;if(e!==e)return 2146959360;var n=na;return n.setFloat64(0,e,!0),(n.getInt32(0,!0)|0)^(n.getInt32(4,!0)|0)}var gh=new N().i(0,`java.lang.Double`,{aH:1,X:1,a:1,S:1,O:1,a0:1},(e=>typeof e==`number`)),_h=new N().i(0,`java.lang.Float`,{dG:1,X:1,a:1,S:1,O:1,a0:1},(e=>ua(e))),vh=new N().i(0,`java.lang.Integer`,{dJ:1,X:1,a:1,S:1,O:1,a0:1},(e=>la(e)));function yh(e,t,n){if(n instanceof qi){var r=n,i=r.l,a=r.h;return(e^i|t^a)===0}return!1}function bh(e,t){return e^t}var xh=new N().i(0,`java.lang.Long`,{aJ:1,X:1,a:1,S:1,O:1,a0:1},(e=>e instanceof qi)),Sh=class extends Xp{constructor(e){super(),U(this,e,null,!0,!0)}};new N().i(Sh,`java.lang.NumberFormatException`,{dQ:1,aI:1,H:1,y:1,r:1,a:1});function Ch(e){for(var t=e.length,n=0,r=0;r!==t;)n=((n<<5)-n|0)+e.charCodeAt(r)|0,r=1+r|0;return n}function wh(e,t){return e===t}function Th(e,t){var n=Fu().kh(t);return e.indexOf(n)|0}var Eh=new N().i(0,`java.lang.String`,{aL:1,a:1,S:1,ah:1,O:1,a0:1},(e=>typeof e==`string`));function Dh(){}A=Dh.prototype=new pm,A.constructor=Dh,A.p=(function(){return 2433880}),A.q=(function(){return`None`}),A.Q=(function(){return 0}),A.S=(function(){return`None`}),A.R=(function(e){throw $p(new em,e)}),A.jd=(function(){throw new cm(`None.get`)}),A.v=(function(){this.jd()}),new N().i(Dh,`scala.None$`,{ek:1,aN:1,b:1,d:1,P:1,a:1});var Oh;function kh(){return Oh||=new Dh,Oh}function Ah(e){this.bH=null,this.bH=e}A=Ah.prototype=new pm,A.constructor=Ah,A.p=(function(){return W().cR(this,1323286827,!0)}),A.j=(function(e){return this===e||e instanceof Ah&&Ml().H(this.bH,e.bH)}),A.q=(function(){return B().dB(this)}),A.Q=(function(){return 1}),A.S=(function(){return`Some`}),A.R=(function(e){if(e===0)return this.bH;throw $p(new em,e)}),A.v=(function(){return this.bH}),new N().i(Ah,`scala.Some`,{aO:1,aN:1,b:1,d:1,P:1,a:1});function jh(){}A=jh.prototype=new M,A.constructor=jh;function Mh(){}Mh.prototype=A,A.t=(function(){return-1}),A.a4=(function(e){ll(this,e)}),A.aN=(function(e,t,n){return ul(this,e,t,n)}),A.bp=(function(e,t,n,r){return fl(this,e,t,n,r)}),A.aM=(function(){return this.aq()});function Z(e){this.cz=null,this.aj=0,this.bI=0,this.cz=e,this.aj=0,this.bI=Ic().aa(this.cz)}A=Z.prototype=new ap,A.constructor=Z,A.t=(function(){return this.bI-this.aj|0}),A.o=(function(){return this.aj<this.bI}),A.m=(function(){this.aj>=Ic().aa(this.cz)&&mf().L.m();var e=B().aZ(this.cz,this.aj);return this.aj=1+this.aj|0,e}),A.cK=(function(e){if(e>0){var t=this.aj+e|0;if(t<0)var n=this.bI;else var r=this.bI,n=r<t?r:t;this.aj=n}return this}),new N().i(Z,`scala.collection.ArrayOps$ArrayIterator`,{es:1,J:1,b:1,c:1,K:1,a:1});function Nh(e,t){return e.dv=t,e.ak=0,e.K=t.l(),e}function Ph(e,t){return t<0?0:t>e.K?e.K:t}function Fh(){this.dv=null,this.ak=0,this.K=0}A=Fh.prototype=new ap,A.constructor=Fh;function Ih(){}Ih.prototype=A,A.t=(function(){return this.K}),A.o=(function(){return this.K>0}),A.m=(function(){if(this.K>0){var e=this.dv.n(this.ak);return this.ak=1+this.ak|0,this.K=this.K-1|0,e}return mf().L.m()}),A.cK=(function(e){if(e>0){this.ak=this.ak+e|0;var t=this.K-e|0;this.K=t<0?0:t}return this}),A.cf=(function(e,t){var n=Ph(this,e),r=Ph(this,t)-n|0;return this.K=r<0?0:r,this.ak=this.ak+n|0,this}),new N().i(Fh,`scala.collection.IndexedSeqView$IndexedSeqViewIterator`,{aV:1,J:1,b:1,c:1,K:1,a:1});function Lh(){this.bQ=null,Vm(this,mf().L)}A=Lh.prototype=new Um,A.constructor=Lh,A.i1=(function(e){return this.bQ=this.bQ.dG(new vf((()=>new ym(e)))),this}),A.a2=(function(e){return this.i1(e)}),new N().i(Lh,`scala.collection.Iterator$$anon$21`,{ez:1,eY:1,T:1,U:1,W:1,ab:1});function Rh(e){return e.gg||=(e.gf=new r_(new(xf.r()).C(0)),!0),e.gf}function zh(){this.gh=null,this.gf=null,this.gg=!1,Bh=this,this.gh=new hm(this)}A=zh.prototype=new M,A.constructor=zh,A.j9=(function(e,t){return e instanceof Kg?e:this.dU(Xc().h5(e,t))}),A.hn=(function(e){return new pp(new q((t=>this.dU(pl(t,e)))),(Im(),new Lm))}),A.dU=(function(e){if(e===null)return null;if(e instanceof ga)return new r_(e);if(e instanceof Sa)return new t_(e);if(e instanceof Ta)return new $g(e);if(e instanceof Ca)return new n_(e);if(e instanceof wa)return new e_(e);if(e instanceof ya)return new Qg(e);if(e instanceof ba)return new Zg(e);if(e instanceof xa)return new i_(e);if(e instanceof va)return new Xg(e);if(jc(e,1))return new a_(e);throw new dm(e)}),A.dI=(function(e,t){return this.j9(e,t)}),new N().i(zh,`scala.collection.immutable.ArraySeq$`,{eJ:1,a:1,aT:1,aR:1,aS:1,aZ:1});var Bh;function Vh(){return Bh||=new zh,Bh}function Hh(e){return e.gl=0,e.gm=0,e}function Uh(){this.gl=0,this.gm=0}A=Uh.prototype=new M,A.constructor=Uh;function Wh(){}Wh.prototype=A;function Gh(){this.gp=null,this.go=null,Kh=this,this.gp=new hm(this),this.go=new __(new ga(0))}A=Gh.prototype=new M,A.constructor=Gh,A.ja=(function(e,t){return this.hk(Xc().h5(e,t))}),A.hn=(function(e){return new pp(new q((e=>this.hk(e))),new $h(e.cS()))}),A.hk=(function(e){if(e===null)return null;if(e instanceof ga)return new __(e);if(e instanceof Sa)return new h_(e);if(e instanceof Ta)return new p_(e);if(e instanceof Ca)return new g_(e);if(e instanceof wa)return new m_(e);if(e instanceof ya)return new f_(e);if(e instanceof ba)return new d_(e);if(e instanceof xa)return new v_(e);if(e instanceof va)return new u_(e);if(jc(e,1))return new y_(e);throw new dm(e)}),A.dI=(function(e,t){return this.ja(e,t)}),new N().i(Gh,`scala.collection.mutable.ArraySeq$`,{eU:1,a:1,aT:1,aR:1,aS:1,aZ:1});var Kh;function qh(){return Kh||=new Gh,Kh}function Jh(e){this.bb=null,this.bc=null,this.eN=null,this.eO=!1,Rf(this,e,$())}A=Jh.prototype=new Bf,A.constructor=Jh,A.h3=(function(){return this.eO||=(this.eN=this.c(`flex`),!0),this.eN}),new N().i(Jh,`com.raquo.laminar.defs.styles.StyleProps$$anon$28`,{cw:1,a6:1,G:1,a3:1,a4:1,cD:1,cA:1});function Yh(e){this.bb=null,this.bc=null,this.eT=null,this.eU=!1,Rf(this,e,$())}A=Yh.prototype=new Bf,A.constructor=Yh,A.ht=(function(){return this.eU||=(this.eT=cu(this),!0),this.eT}),new N().i(Yh,`com.raquo.laminar.defs.styles.StyleProps$$anon$5`,{cz:1,a6:1,G:1,a3:1,a4:1,cE:1,cF:1});function Xh(){}A=Xh.prototype=new Gp,A.constructor=Xh;function Zh(){}Zh.prototype=A;function Qh(e){return e.aM()+`(<not computed>)`}function $h(e){this.gl=0,this.gm=0,this.bo=null,this.gn=!1,this.dy=null,this.bo=e,Hh(this),this.gn=e===ka.l(),this.dy=[]}A=$h.prototype=new Wh,A.constructor=$h,A.gI=(function(e){var t=this.gn?pa(e):e===null?El().dR(this.bo):e;return this.dy.push(t),this}),A.hV=(function(e){for(var t=e.k();t.o();)this.gI(t.m());return this}),A.ah=(function(){return El().dQ(this.bo===Da.l()?Mc.l():this.bo===Nl.l()||this.bo===xf.l()?Ea.l():this.bo,this.dy)}),A.q=(function(){return`ArrayBuilder.generic`}),A.a2=(function(e){return this.gI(e)}),A.a8=(function(e){return this.hV(e)}),new N().i($h,`scala.collection.mutable.ArrayBuilder$generic`,{eT:1,eR:1,T:1,U:1,W:1,ab:1,a:1});function eg(e,t){this.dv=null,this.ak=0,this.K=0,this.gs=null,this.gr=0,this.gs=t,Nh(this,e),this.gr=t.O()|0}A=eg.prototype=new Ih,A.constructor=eg,A.o=(function(){return kl().gO(this.gr,this.gs.O()|0,`mutation occurred during iteration`),this.K>0}),new N().i(eg,`scala.collection.mutable.CheckedIndexedSeqView$CheckedIterator`,{eX:1,aV:1,J:1,b:1,c:1,K:1,a:1});function tg(){}A=tg.prototype=new M,A.constructor=tg;function ng(){}ng.prototype=A;var rg=class e extends $f{constructor(e){super(),this.a1=null,this.a1=e,U(this,null,null,!0,!0)}c9(){return Qi(this.a1)}S(){return`JavaScriptException`}Q(){return 1}R(e){return e===0?this.a1:V().jr(e)}aP(){return new Jm(this)}p(){return W().cR(this,1744042595,!0)}j(t){return this===t||t instanceof e&&Ml().H(this.a1,t.a1)}};new N().i(rg,`scala.scalajs.js.JavaScriptException`,{bB:1,H:1,y:1,r:1,a:1,P:1,d:1});function ig(e,t){e.cn!==void 0&&Ya().ho(),e.cn=t}function ag(e){var t=e.cn;if(t===void 0){Ya().ho();var n=ag(e);ig(e,n);var r=n}else var r=t;return r}function og(e,t,n){ig(e,t);var r=t.hh(),i=!1;i=!1,e.cm=!1;for(var a=e.bB,o=0;o<(a.length|0);){var s=a[o];o=1+o|0,s.cb(t),r&&!i&&(i=!0)}for(var c=e.d5,l=0;l<(c.length|0);)c[l],l=1+l|0,r&&!i&&(i=!0);e.cm=!0;var u=e.co;if(u!==void 0){for(var d=0,f=u.length|0;d<f;)u[d].O(),d=1+d|0;u.length=0}r&&!i&&t.c8(new X((e=>{gd().a6(e)})),new X((e=>void 0)))}function sg(e,t){typeof console<`u`&&(e.fZ&&console.error?console.error(t):console.log(t))}function cg(e){this.fZ=!1,this.bE=null,this.fZ=e,new tm,this.bE=``}A=cg.prototype=new Zh,A.constructor=cg,A.jx=(function(e){for(var t=e;t!==``;){var n=t.indexOf(`
`)|0;if(n<0)this.bE=``+this.bE+t,t=``;else{var r=this.bE,i=t;sg(this,``+r+i.substring(0,n)),this.bE=``;var a=t,o=1+n|0;t=a.substring(o)}}}),new N().i(cg,`java.lang.JSConsoleBasedPrintStream`,{dM:1,dA:1,dz:1,aD:1,aB:1,aF:1,aC:1,aE:1});function lg(e,t,n){for(var r=n,i=t;;)if(i<=0||r.g())return r;else{var a=i-1|0,o=r.D();i=a,r=o}}function ug(){this.bR=null}A=ug.prototype=new ng,A.constructor=ug;function dg(){}dg.prototype=A,A.q=(function(){return this.bR}),A.j=(function(e){return this===e}),A.p=(function(){return oa(this)});function fg(){}A=fg.prototype=new Mh,A.constructor=fg;function pg(){}pg.prototype=A,A.q=(function(){return Qh(this)});function mg(){this.bR=null,this.bR=`Any`,$()}A=mg.prototype=new dg,A.constructor=mg,A.cS=(function(){return Ea.l()}),A.dN=(function(e){return new ga(e)}),new N().i(mg,`scala.reflect.ManifestFactory$AnyManifest$`,{f7:1,bw:1,bv:1,a:1,bx:1,bs:1,d:1,bt:1,bu:1});var hg;function gg(){return hg||=new mg,hg}function _g(){this.bR=null,this.bR=`Object`,$()}A=_g.prototype=new dg,A.constructor=_g,A.cS=(function(){return Ea.l()}),A.dN=(function(e){return new ga(e)}),new N().i(_g,`scala.reflect.ManifestFactory$ObjectManifest$`,{f8:1,bw:1,bv:1,a:1,bx:1,bs:1,d:1,bt:1,bu:1});var vg;function yg(){return vg||=new _g,vg}function bg(e,t){this.eg=null,this.cm=!1,this.co=null,this.bB=null,this.d5=null,this.cp=!1,this.cn=null,this.eh=null,this.eh=t,this.eg=void 0,_d(this),Sp(this),this.cn=void 0,ig(this,e)}A=bg.prototype=new M,A.constructor=bg,A.cO=(function(){return this.eg}),A.q=(function(){return Ba(this)}),A.j=(function(e){return this===e}),A.p=(function(){return oa(this)}),A.hC=(function(){return this}),A.cJ=(function(){return this.eh.O()+`.signal`}),new N().i(bg,`com.raquo.airstream.state.VarSignal`,{c8:1,aq:1,Z:1,bH:1,bJ:1,ar:1,bO:1,bU:1,bV:1,c4:1});function xg(e,t){return e===t?!0:Sg(t)&&t.dF(e)?e.cT(t):!1}function Sg(e){return!!(e&&e.$classData&&e.$classData.n.j)}function Cg(){}A=Cg.prototype=new Mh,A.constructor=Cg;function wg(){}wg.prototype=A,A.hg=(function(e){return lp(this,e)}),A.a5=(function(e){return cf(this,e)}),A.g=(function(){return up(this)}),A.cT=(function(e){return dp(this,e)}),A.dF=(function(e){return!0}),A.j=(function(e){return xg(this,e)}),A.p=(function(){return W().hv(this)}),A.q=(function(){return gm(this)}),A.b1=(function(e){return this.hg(e|0)});function Tg(){}A=Tg.prototype=new pg,A.constructor=Tg;function Eg(){}Eg.prototype=A,A.g=(function(){return up(this)});function Dg(e){return!!(e&&e.$classData&&e.$classData.n.n)}function Og(e){return!!(e&&e.$classData&&e.$classData.n.a9)}function kg(e,t){return e.bN=t,e}function Ag(){this.bN=null}A=Ag.prototype=new Eg,A.constructor=Ag;function jg(){}jg.prototype=A,A.n=(function(e){return this.bN.n(e)}),A.l=(function(){return this.bN.l()}),A.g=(function(){return this.bN.g()});function Mg(){this.eH=null,this.eI=!1,this.er=null,this.es=!1,this.en=null,this.eo=!1,this.eF=null,this.eG=!1,this.eL=null,this.eM=!1,this.eB=null,this.eC=!1,this.ez=null,this.eA=!1,this.eD=null,this.eE=!1,this.ep=null,this.eq=!1,this.et=null,this.eu=!1,this.ev=null,this.ew=!1,this.ex=null,this.ey=!1,this.hJ=null,this.em=null,this.hI=null,this.eJ=null,this.eK=!1,Zo(this),qo(this),Go(this),Ko(this)}A=Mg.prototype=new M,A.constructor=Mg,A.hz=(function(){return this.eI||=(this.eH=Tu(new Eu,`small`,!1),!0),this.eH}),A.gU=(function(){return this.es||=(this.er=Tu(new Eu,`div`,!1),!0),this.er}),A.ir=(function(){return this.eo||=(this.en=new hu(`checked`,F().d8),!0),this.en}),A.bu=(function(){return this.eG||=(this.eF=new hu(`selected`,F().d8),!0),this.eF}),A.hE=(function(){return this.eM||=(this.eL=new hu(`value`,F().a7),!0),this.eL}),A.jK=(function(){return this.eC||=(this.eB=new uu(`click`),!0),this.eB}),A.jJ=(function(){return this.eA||=(this.ez=new uu(`change`),!0),this.ez}),A.ca=(function(){return this.eE||=(this.eD=new uu(`input`),!0),this.eD}),A.gT=(function(){return this.eq||=(this.ep=new Jh(`display`),!0),this.ep}),A.h4=(function(){return this.eu||=(this.et=new ch(`flex-direction`),!0),this.et}),A.j6=(function(){return this.ew||=(this.ev=new lh(`flex-wrap`),!0),this.ev}),A.hb=(function(){return this.ey||=(this.ex=new Yh(`gap`),!0),this.ex}),A.kb=(function(){return this.eK||=(this.eJ=new Ff(this),!0),this.eJ}),new N().i(Mg,`com.raquo.laminar.api.package$$anon$1`,{cl:1,cG:1,cp:1,cu:1,ct:1,cv:1,cr:1,cj:1,cf:1,ci:1,at:1,au:1,as:1,cg:1});function Ng(){}A=Ng.prototype=new Eg,A.constructor=Ng;function Pg(){}Pg.prototype=A,A.a5=(function(e){var t=this.l();return t===e?0:t<e?-1:1}),A.t=(function(){return this.l()}),A.aq=(function(){return`IndexedSeqView`});function Fg(e){this.bN=null,kg(this,e)}A=Fg.prototype=new jg,A.constructor=Fg,A.a5=(function(e){var t=this.l();return t===e?0:t<e?-1:1}),A.t=(function(){return this.l()}),A.k=(function(){return Nh(new Fh,this)}),A.aq=(function(){return`IndexedSeqView`}),new N().i(Fg,`scala.collection.IndexedSeqView$Id`,{ev:1,eE:1,aP:1,aQ:1,l:1,b:1,c:1,i:1,h:1,f:1,a:1,b1:1,k:1,aY:1,o:1,aU:1});function Ig(){}A=Ig.prototype=new wg,A.constructor=Ig;function Lg(){}Lg.prototype=A;function Rg(e,t){this.dx=null,this.gk=null,this.dx=e,this.gk=t}A=Rg.prototype=new Pg,A.constructor=Rg,A.n=(function(e){return this.dx.n(e)}),A.l=(function(){return this.dx.y}),A.aM=(function(){return`ArrayBufferView`}),A.k=(function(){return new eg(this,this.gk)}),new N().i(Rg,`scala.collection.mutable.ArrayBufferView`,{eQ:1,eq:1,aP:1,aQ:1,l:1,b:1,c:1,i:1,h:1,f:1,a:1,b1:1,k:1,aY:1,o:1,aU:1});function zg(e,t){return!Vg(t)||e.l()===t.l()}function Bg(e,t){if(Vg(t)){if(e===t)return!0;var n=e.l(),r=n===t.l();if(r){var i=0,a=e.dE(),o=t.dE(),s=a<o?a:o,c=n>>31,l=s>>31,u=s<<1,d=s>>>31|0|l<<1;if(c===d?n>>>0>u>>>0:c>d)var f=s;else var f=n;for(;i<f&&r;)r=Ml().H(e.n(i),t.n(i)),i=1+i|0;if(i<n&&r)for(var p=e.k().cK(i),m=t.k().cK(i);r&&p.o();)r=Ml().H(p.m(),m.m())}return r}return dp(e,t)}function Vg(e){return!!(e&&e.$classData&&e.$classData.n.z)}function Hg(){}A=Hg.prototype=new wg,A.constructor=Hg;function Ug(){}Ug.prototype=A;function Q(e){this.cE=null,this.cE=e}A=Q.prototype=new M,A.constructor=Q,A.dL=(function(e){return fp(this,e)}),A.dF=(function(e){return zg(this,e)}),A.cT=(function(e){return Bg(this,e)}),A.dE=(function(){return Cl().gi}),A.k=(function(){return Nh(new Fh,new Fg(this))}),A.a5=(function(e){var t=this.l();return t===e?0:t<e?-1:1}),A.t=(function(){return this.l()}),A.j=(function(e){return xg(this,e)}),A.p=(function(){return W().hv(this)}),A.q=(function(){return gm(this)}),A.g=(function(){return up(this)}),A.a4=(function(e){ll(this,e)}),A.aN=(function(e,t,n){return ul(this,e,t,n)}),A.bp=(function(e,t,n,r){return fl(this,e,t,n,r)}),A.l=(function(){return this.cE.length|0}),A.n=(function(e){return this.cE[e]}),A.aM=(function(){return`WrappedVarArgs`}),A.b1=(function(e){return lp(this,e|0)}),A.f=(function(e){return this.n(e|0)}),A.b2=(function(){return eh()}),new N().i(Q,`scala.scalajs.runtime.WrappedVarArgs`,{bC:1,z:1,b:1,c:1,i:1,h:1,f:1,A:1,e:1,g:1,k:1,d:1,j:1,C:1,B:1,o:1,n:1,M:1,D:1,p:1,q:1,a:1});function Wg(){}A=Wg.prototype=new Ug,A.constructor=Wg;function Gg(){}Gg.prototype=A,A.a8=(function(e){return ed(this,e)});function Kg(){}A=Kg.prototype=new Lg,A.constructor=Kg;function qg(){}qg.prototype=A,A.a5=(function(e){var t=this.l();return t===e?0:t<e?-1:1}),A.t=(function(){return this.l()}),A.aq=(function(){return`IndexedSeq`}),A.dF=(function(e){return zg(this,e)}),A.cT=(function(e){return Bg(this,e)}),A.jB=(function(e){for(var t=new ga(this.l()),n=0;n<t.a.length;)t.a[n]=e.f(this.n(n)),n=1+n|0;return Vh().dU(t)}),A.aM=(function(){return`ArraySeq`}),A.aN=(function(e,t,n){var r=this.l(),i=Ic().aa(e),a=n<r?n:r,o=t<0?i:i-t|0,s=o<a?o:a,c=s<0?0:s;return c>0&&Xc().cH(this.ai(),0,e,t,c),c}),A.dE=(function(){return 2147483647}),A.b2=(function(){return Vh().gh}),A.dL=(function(e){return this.jB(e)});function Jg(){}A=Jg.prototype=new Ug,A.constructor=Jg;function Yg(){}Yg.prototype=A,A.a5=(function(e){var t=this.l();return t===e?0:t<e?-1:1}),A.t=(function(){return this.l()}),A.aq=(function(){return`IndexedSeq`}),A.aM=(function(){return`ArraySeq`}),A.aN=(function(e,t,n){var r=this.l(),i=Ic().aa(e),a=n<r?n:r,o=t<0?i:i-t|0,s=o<a?o:a,c=s<0?0:s;return c>0&&Xc().cH(this.a3(),0,e,t,c),c}),A.j=(function(e){return e instanceof Jg&&Ic().aa(this.a3())!==Ic().aa(e.a3())?!1:xg(this,e)}),A.b2=(function(){return qh().gp});function Xg(e){this.ax=null,this.ax=e}A=Xg.prototype=new qg,A.constructor=Xg,A.l=(function(){return this.ax.a.length}),A.c5=(function(e){return this.ax.a[e]}),A.p=(function(){var e=W();return e.x(this.ax,e.u)}),A.j=(function(e){return e instanceof Xg?zc().h1(this.ax,e.ax):xg(this,e)}),A.k=(function(){return new Z(this.ax)}),A.ai=(function(){return this.ax}),A.n=(function(e){return this.c5(e)}),A.f=(function(e){return this.c5(e|0)}),new N().i(Xg,`scala.collection.immutable.ArraySeq$ofBoolean`,{b2:1,L:1,I:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,A:1,C:1,B:1,o:1,n:1,M:1,z:1,p:1,q:1,D:1,Q:1,a:1});function Zg(e){this.ay=null,this.ay=e}A=Zg.prototype=new qg,A.constructor=Zg,A.l=(function(){return this.ay.a.length}),A.bX=(function(e){return this.ay.a[e]}),A.p=(function(){var e=W();return e.x(this.ay,e.u)}),A.j=(function(e){return e instanceof Zg?zc().gW(this.ay,e.ay):xg(this,e)}),A.k=(function(){return new Z(this.ay)}),A.ai=(function(){return this.ay}),A.n=(function(e){return this.bX(e)}),A.f=(function(e){return this.bX(e|0)}),new N().i(Zg,`scala.collection.immutable.ArraySeq$ofByte`,{b3:1,L:1,I:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,A:1,C:1,B:1,o:1,n:1,M:1,z:1,p:1,q:1,D:1,Q:1,a:1});function Qg(e){this.an=null,this.an=e}A=Qg.prototype=new qg,A.constructor=Qg,A.l=(function(){return this.an.a.length}),A.bY=(function(e){return this.an.a[e]}),A.p=(function(){var e=W();return e.x(this.an,e.u)}),A.j=(function(e){return e instanceof Qg?zc().gX(this.an,e.an):xg(this,e)}),A.k=(function(){return new Z(this.an)}),A.bp=(function(e,t,n,r){return new f_(this.an).bp(e,t,n,r)}),A.ai=(function(){return this.an}),A.n=(function(e){return da(this.bY(e))}),A.f=(function(e){return da(this.bY(e|0))}),new N().i(Qg,`scala.collection.immutable.ArraySeq$ofChar`,{b4:1,L:1,I:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,A:1,C:1,B:1,o:1,n:1,M:1,z:1,p:1,q:1,D:1,Q:1,a:1});function $g(e){this.az=null,this.az=e}A=$g.prototype=new qg,A.constructor=$g,A.l=(function(){return this.az.a.length}),A.bZ=(function(e){return this.az.a[e]}),A.p=(function(){var e=W();return e.x(this.az,e.u)}),A.j=(function(e){if(e instanceof $g){var t=this.az,n=e.az;if(t===n)return!0;if(t.a.length===n.a.length){for(var r=0;r<t.a.length&&t.a[r]===n.a[r];)r=1+r|0;return r>=t.a.length}return!1}return xg(this,e)}),A.k=(function(){return new Z(this.az)}),A.ai=(function(){return this.az}),A.n=(function(e){return this.bZ(e)}),A.f=(function(e){return this.bZ(e|0)}),new N().i($g,`scala.collection.immutable.ArraySeq$ofDouble`,{b5:1,L:1,I:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,A:1,C:1,B:1,o:1,n:1,M:1,z:1,p:1,q:1,D:1,Q:1,a:1});function e_(e){this.aA=null,this.aA=e}A=e_.prototype=new qg,A.constructor=e_,A.l=(function(){return this.aA.a.length}),A.c0=(function(e){return this.aA.a[e]}),A.p=(function(){var e=W();return e.x(this.aA,e.u)}),A.j=(function(e){if(e instanceof e_){var t=this.aA,n=e.aA;if(t===n)return!0;if(t.a.length===n.a.length){for(var r=0;r<t.a.length&&t.a[r]===n.a[r];)r=1+r|0;return r>=t.a.length}return!1}return xg(this,e)}),A.k=(function(){return new Z(this.aA)}),A.ai=(function(){return this.aA}),A.n=(function(e){return this.c0(e)}),A.f=(function(e){return this.c0(e|0)}),new N().i(e_,`scala.collection.immutable.ArraySeq$ofFloat`,{b6:1,L:1,I:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,A:1,C:1,B:1,o:1,n:1,M:1,z:1,p:1,q:1,D:1,Q:1,a:1});function t_(e){this.aB=null,this.aB=e}A=t_.prototype=new qg,A.constructor=t_,A.l=(function(){return this.aB.a.length}),A.c1=(function(e){return this.aB.a[e]}),A.p=(function(){var e=W();return e.x(this.aB,e.u)}),A.j=(function(e){return e instanceof t_?zc().gY(this.aB,e.aB):xg(this,e)}),A.k=(function(){return new Z(this.aB)}),A.ai=(function(){return this.aB}),A.n=(function(e){return this.c1(e)}),A.f=(function(e){return this.c1(e|0)}),new N().i(t_,`scala.collection.immutable.ArraySeq$ofInt`,{b7:1,L:1,I:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,A:1,C:1,B:1,o:1,n:1,M:1,z:1,p:1,q:1,D:1,Q:1,a:1});function n_(e){this.aC=null,this.aC=e}A=n_.prototype=new qg,A.constructor=n_,A.l=(function(){return this.aC.a.length>>>1|0}),A.c2=(function(e){var t=this.aC.a,n=e<<1;return j(t[n],t[n+1|0])}),A.p=(function(){var e=W();return e.x(this.aC,e.u)}),A.j=(function(e){return e instanceof n_?zc().gZ(this.aC,e.aC):xg(this,e)}),A.k=(function(){return new Z(this.aC)}),A.ai=(function(){return this.aC}),A.n=(function(e){return this.c2(e)}),A.f=(function(e){return this.c2(e|0)}),new N().i(n_,`scala.collection.immutable.ArraySeq$ofLong`,{b8:1,L:1,I:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,A:1,C:1,B:1,o:1,n:1,M:1,z:1,p:1,q:1,D:1,Q:1,a:1});function r_(e){this.aD=null,this.aD=e}A=r_.prototype=new qg,A.constructor=r_,A.l=(function(){return this.aD.a.length}),A.n=(function(e){return this.aD.a[e]}),A.p=(function(){var e=W();return e.x(this.aD,e.u)}),A.j=(function(e){return e instanceof r_?Xc().h2(this.aD,e.aD):xg(this,e)}),A.k=(function(){return new Z(this.aD)}),A.ai=(function(){return this.aD}),A.f=(function(e){return this.n(e|0)}),new N().i(r_,`scala.collection.immutable.ArraySeq$ofRef`,{b9:1,L:1,I:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,A:1,C:1,B:1,o:1,n:1,M:1,z:1,p:1,q:1,D:1,Q:1,a:1});function i_(e){this.aE=null,this.aE=e}A=i_.prototype=new qg,A.constructor=i_,A.l=(function(){return this.aE.a.length}),A.c3=(function(e){return this.aE.a[e]}),A.p=(function(){var e=W();return e.x(this.aE,e.u)}),A.j=(function(e){return e instanceof i_?zc().h0(this.aE,e.aE):xg(this,e)}),A.k=(function(){return new Z(this.aE)}),A.ai=(function(){return this.aE}),A.n=(function(e){return this.c3(e)}),A.f=(function(e){return this.c3(e|0)}),new N().i(i_,`scala.collection.immutable.ArraySeq$ofShort`,{ba:1,L:1,I:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,A:1,C:1,B:1,o:1,n:1,M:1,z:1,p:1,q:1,D:1,Q:1,a:1});function a_(e){this.aW=null,this.aW=e}A=a_.prototype=new qg,A.constructor=a_,A.l=(function(){return this.aW.a.length}),A.c4=(function(e){}),A.p=(function(){var e=W();return e.x(this.aW,e.u)}),A.j=(function(e){return e instanceof a_?this.aW.a.length===e.aW.a.length:xg(this,e)}),A.k=(function(){return new Z(this.aW)}),A.ai=(function(){return this.aW}),A.n=(function(e){this.c4(e)}),A.f=(function(e){this.c4(e|0)}),new N().i(a_,`scala.collection.immutable.ArraySeq$ofUnit`,{bb:1,L:1,I:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,A:1,C:1,B:1,o:1,n:1,M:1,z:1,p:1,q:1,D:1,Q:1,a:1});function o_(e,t,n,r){for(var i=r,a=n;;)if(a===t)return!i.g()|0;else{if(!i.g()){var o=1+a|0,s=i.D();a=o,i=s;continue}return-1}}function s_(e,t,n){for(var r=n,i=t;;)if(i===r)return!0;else{var a=i.g(),o=r.g();if(!(a||o)&&Ml().H(i.P(),r.P())){var s=i.D(),c=r.D();i=s,r=c;continue}return a&&o}}function c_(){}A=c_.prototype=new Lg,A.constructor=c_;function l_(){}l_.prototype=A,A.hg=(function(e){return Em(this,e)}),A.n=(function(e){return Dm(this,e)}),A.cT=(function(e){return Om(this,e)}),A.aq=(function(){return`LinearSeq`}),A.k=(function(){return new Am(this)}),A.hT=(function(e){if(this.g())return e;if(e.g())return this;for(var t=new b_(e.P(),this),n=t,r=e.D();!r.g();){var i=new b_(r.P(),this);n.am=i,n=i,r=r.D()}return t}),A.g=(function(){return this===$()}),A.hs=(function(e){if(e instanceof c_)return this.hT(e);if(e.t()===0)return this;if(e instanceof O_&&this.g())return e.hB();var t=e.k();if(t.o()){for(var n=new b_(t.m(),this),r=n;t.o();){var i=new b_(t.m(),this);r.am=i,r=i}return n}return this}),A.jC=(function(e){if(this===$())var t=$();else{for(var n=new b_(e.f(this.P()),$()),r=n,i=this.D();i!==$();){var a=new b_(e.f(i.P()),$());r.am=a,r=a,i=i.D()}var t=n}return t}),A.a4=(function(e){for(var t=this;!t.g();)e.f(t.P()),t=t.D()}),A.l=(function(){for(var e=this,t=0;!e.g();)t=1+t|0,e=e.D();return t}),A.a5=(function(e){return e<0?1:o_(this,e,0,this)}),A.aM=(function(){return`List`}),A.j=(function(e){return e instanceof c_?s_(this,this,e):xg(this,e)}),A.b2=(function(){return Nm()}),A.dL=(function(e){return this.jC(e)}),A.iI=(function(e){return lg(this,e,this)}),A.b1=(function(e){return Em(this,e|0)}),A.f=(function(e){return Dm(this,e|0)});function u_(e){this.aF=null,this.aF=e}A=u_.prototype=new Yg,A.constructor=u_,A.l=(function(){return this.aF.a.length}),A.c5=(function(e){return this.aF.a[e]}),A.p=(function(){var e=W();return e.x(this.aF,e.u)}),A.j=(function(e){return e instanceof u_?zc().h1(this.aF,e.aF):Jg.prototype.j.call(this,e)}),A.k=(function(){return new Z(this.aF)}),A.a3=(function(){return this.aF}),A.n=(function(e){return this.c5(e)}),A.f=(function(e){return this.c5(e|0)}),new N().i(u_,`scala.collection.mutable.ArraySeq$ofBoolean`,{bf:1,N:1,t:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,v:1,s:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function d_(e){this.aG=null,this.aG=e}A=d_.prototype=new Yg,A.constructor=d_,A.l=(function(){return this.aG.a.length}),A.bX=(function(e){return this.aG.a[e]}),A.p=(function(){var e=W();return e.x(this.aG,e.u)}),A.j=(function(e){return e instanceof d_?zc().gW(this.aG,e.aG):Jg.prototype.j.call(this,e)}),A.k=(function(){return new Z(this.aG)}),A.a3=(function(){return this.aG}),A.n=(function(e){return this.bX(e)}),A.f=(function(e){return this.bX(e|0)}),new N().i(d_,`scala.collection.mutable.ArraySeq$ofByte`,{bg:1,N:1,t:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,v:1,s:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function f_(e){this.W=null,this.W=e}A=f_.prototype=new Yg,A.constructor=f_,A.l=(function(){return this.W.a.length}),A.bY=(function(e){return this.W.a[e]}),A.p=(function(){var e=W();return e.x(this.W,e.u)}),A.j=(function(e){return e instanceof f_?zc().gX(this.W,e.W):Jg.prototype.j.call(this,e)}),A.k=(function(){return new Z(this.W)}),A.bp=(function(e,t,n,r){var i=e.N;t.length!==0&&(i.s=``+i.s+t);var a=this.W.a.length;if(a!==0){if(n===``)i.ib(this.W);else{i.l();var o=this.W.a[0],s=``+ta(o);i.s+=s;for(var c=1;c<a;){i.s=``+i.s+n;var l=this.W.a[c],u=``+ta(l);i.s+=u,c=1+c|0}}}return r.length!==0&&(i.s=``+i.s+r),e}),A.a3=(function(){return this.W}),A.n=(function(e){return da(this.bY(e))}),A.f=(function(e){return da(this.bY(e|0))}),new N().i(f_,`scala.collection.mutable.ArraySeq$ofChar`,{bh:1,N:1,t:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,v:1,s:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function p_(e){this.X=null,this.X=e}A=p_.prototype=new Yg,A.constructor=p_,A.l=(function(){return this.X.a.length}),A.bZ=(function(e){return this.X.a[e]}),A.p=(function(){var e=W();return e.x(this.X,e.u)}),A.j=(function(e){if(e instanceof p_){var t=e.X;if(this.X===t)return!0;if(this.X.a.length===t.a.length){for(var n=0;n<this.X.a.length&&this.X.a[n]===t.a[n];)n=1+n|0;return n>=this.X.a.length}return!1}return Jg.prototype.j.call(this,e)}),A.k=(function(){return new Z(this.X)}),A.a3=(function(){return this.X}),A.n=(function(e){return this.bZ(e)}),A.f=(function(e){return this.bZ(e|0)}),new N().i(p_,`scala.collection.mutable.ArraySeq$ofDouble`,{bi:1,N:1,t:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,v:1,s:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function m_(e){this.Y=null,this.Y=e}A=m_.prototype=new Yg,A.constructor=m_,A.l=(function(){return this.Y.a.length}),A.c0=(function(e){return this.Y.a[e]}),A.p=(function(){var e=W();return e.x(this.Y,e.u)}),A.j=(function(e){if(e instanceof m_){var t=e.Y;if(this.Y===t)return!0;if(this.Y.a.length===t.a.length){for(var n=0;n<this.Y.a.length&&this.Y.a[n]===t.a[n];)n=1+n|0;return n>=this.Y.a.length}return!1}return Jg.prototype.j.call(this,e)}),A.k=(function(){return new Z(this.Y)}),A.a3=(function(){return this.Y}),A.n=(function(e){return this.c0(e)}),A.f=(function(e){return this.c0(e|0)}),new N().i(m_,`scala.collection.mutable.ArraySeq$ofFloat`,{bj:1,N:1,t:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,v:1,s:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function h_(e){this.aH=null,this.aH=e}A=h_.prototype=new Yg,A.constructor=h_,A.l=(function(){return this.aH.a.length}),A.c1=(function(e){return this.aH.a[e]}),A.p=(function(){var e=W();return e.x(this.aH,e.u)}),A.j=(function(e){return e instanceof h_?zc().gY(this.aH,e.aH):Jg.prototype.j.call(this,e)}),A.k=(function(){return new Z(this.aH)}),A.a3=(function(){return this.aH}),A.n=(function(e){return this.c1(e)}),A.f=(function(e){return this.c1(e|0)}),new N().i(h_,`scala.collection.mutable.ArraySeq$ofInt`,{bk:1,N:1,t:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,v:1,s:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function g_(e){this.aI=null,this.aI=e}A=g_.prototype=new Yg,A.constructor=g_,A.l=(function(){return this.aI.a.length>>>1|0}),A.c2=(function(e){var t=this.aI.a,n=e<<1;return j(t[n],t[n+1|0])}),A.p=(function(){var e=W();return e.x(this.aI,e.u)}),A.j=(function(e){return e instanceof g_?zc().gZ(this.aI,e.aI):Jg.prototype.j.call(this,e)}),A.k=(function(){return new Z(this.aI)}),A.a3=(function(){return this.aI}),A.n=(function(e){return this.c2(e)}),A.f=(function(e){return this.c2(e|0)}),new N().i(g_,`scala.collection.mutable.ArraySeq$ofLong`,{bl:1,N:1,t:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,v:1,s:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function __(e){this.aJ=null,this.aJ=e}A=__.prototype=new Yg,A.constructor=__,A.l=(function(){return this.aJ.a.length}),A.n=(function(e){return this.aJ.a[e]}),A.p=(function(){var e=W();return e.x(this.aJ,e.u)}),A.j=(function(e){return e instanceof __?Xc().h2(this.aJ,e.aJ):Jg.prototype.j.call(this,e)}),A.k=(function(){return new Z(this.aJ)}),A.a3=(function(){return this.aJ}),A.f=(function(e){return this.n(e|0)}),new N().i(__,`scala.collection.mutable.ArraySeq$ofRef`,{bm:1,N:1,t:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,v:1,s:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function v_(e){this.aK=null,this.aK=e}A=v_.prototype=new Yg,A.constructor=v_,A.l=(function(){return this.aK.a.length}),A.c3=(function(e){return this.aK.a[e]}),A.p=(function(){var e=W();return e.x(this.aK,e.u)}),A.j=(function(e){return e instanceof v_?zc().h0(this.aK,e.aK):Jg.prototype.j.call(this,e)}),A.k=(function(){return new Z(this.aK)}),A.a3=(function(){return this.aK}),A.n=(function(e){return this.c3(e)}),A.f=(function(e){return this.c3(e|0)}),new N().i(v_,`scala.collection.mutable.ArraySeq$ofShort`,{bn:1,N:1,t:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,v:1,s:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function y_(e){this.aX=null,this.aX=e}A=y_.prototype=new Yg,A.constructor=y_,A.l=(function(){return this.aX.a.length}),A.c4=(function(e){}),A.p=(function(){var e=W();return e.x(this.aX,e.u)}),A.j=(function(e){return e instanceof y_?this.aX.a.length===e.aX.a.length:Jg.prototype.j.call(this,e)}),A.k=(function(){return new Z(this.aX)}),A.a3=(function(){return this.aX}),A.n=(function(e){this.c4(e)}),A.f=(function(e){this.c4(e|0)}),new N().i(y_,`scala.collection.mutable.ArraySeq$ofUnit`,{bo:1,N:1,t:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,v:1,s:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function b_(e,t){this.dw=null,this.am=null,this.dw=e,this.am=t}A=b_.prototype=new l_,A.constructor=b_,A.aP=(function(){return new mm(this)}),A.Q=(function(){return 2}),A.S=(function(){return`::`}),A.R=(function(e){if(e===0)return this.dw;if(e===1)return this.am;throw $p(new em,e)}),A.P=(function(){return this.dw}),A.D=(function(){return this.am}),new N().i(b_,`scala.collection.immutable.$colon$colon`,{eI:1,aj:1,I:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,A:1,C:1,B:1,aX:1,a9:1,bd:1,bc:1,p:1,q:1,b0:1,D:1,a:1,aa:1,P:1});function x_(){S_=this,$(),$()}A=x_.prototype=new l_,A.constructor=x_,A.aP=(function(){return new mm(this)}),A.Q=(function(){return 0}),A.S=(function(){return`Nil`}),A.R=(function(e){throw $p(new em,e)}),A.jl=(function(){throw new cm(`head of empty list`)}),A.ke=(function(){throw new om(`tail of empty list`)}),A.t=(function(){return 0}),A.k=(function(){return mf().L}),A.P=(function(){this.jl()}),A.D=(function(){this.ke()}),new N().i(x_,`scala.collection.immutable.Nil$`,{eN:1,aj:1,I:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,A:1,C:1,B:1,aX:1,a9:1,bd:1,bc:1,p:1,q:1,b0:1,D:1,a:1,aa:1,P:1});var S_;function $(){return S_||=new x_,S_}function C_(e,t){return e.N=t,e}function w_(e){return C_(e,new ep),e}function T_(){this.N=null}A=T_.prototype=new Ug,A.constructor=T_,A.a8=(function(e){return ed(this,e)}),A.k=(function(){return Nh(new Fh,new Fg(this))}),A.a5=(function(e){var t=this.N.l();return t===e?0:t<e?-1:1}),A.aq=(function(){return`IndexedSeq`}),A.l=(function(){return this.N.l()}),A.t=(function(){return this.N.l()}),A.i0=(function(e){var t=this.N,n=``+ta(e);return t.s+=n,this}),A.q=(function(){return this.N.s}),A.g=(function(){return this.N.l()===0}),A.n=(function(e){return da(this.N.gN(e))}),A.f=(function(e){var t=e|0;return da(this.N.gN(t))}),A.a2=(function(e){return this.i0(pa(e))}),A.ah=(function(){return this.N.s}),new N().i(T_,`scala.collection.mutable.StringBuilder`,{f2:1,t:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,v:1,s:1,u:1,x:1,w:1,T:1,U:1,W:1,ab:1,o:1,n:1,F:1,E:1,ah:1,a:1});function E_(e){var t=new O_().cU(e);e.Z=t.Z,e.ap=t.ap,e.cB=!1}function D_(e){e.cC=1+e.cC|0,e.cB&&E_(e)}function O_(){this.cC=0,this.Z=null,this.ap=null,this.cB=!1,this.a0=0,this.cC=0,this.Z=$(),this.ap=null,this.cB=!1,this.a0=0}A=O_.prototype=new Gg,A.constructor=O_,A.k=(function(){return new qm(this.Z.k(),new vf((()=>this.cC)))}),A.n=(function(e){return Dm(this.Z,e)}),A.l=(function(){return this.a0}),A.t=(function(){return this.a0}),A.g=(function(){return this.a0===0}),A.hB=(function(){return this.cB=!this.g(),this.Z}),A.i5=(function(e){D_(this);var t=new b_(e,$());if(this.a0===0)this.Z=t;else{var n=this.ap;n===null&&Il().bs(),n.am=t}return this.ap=t,this.a0=1+this.a0|0,this}),A.cU=(function(e){var t=e.k();if(t.o()){var n=1,r=new b_(t.m(),$());for(this.Z=r;t.o();){var i=new b_(t.m(),$());r.am=i,r=i,n=1+n|0}this.a0=n,this.ap=r}return this}),A.hY=(function(e){var t=e.k();if(t.o()){var n=new O_().cU(t);if(D_(this),this.a0===0)this.Z=n.Z;else{var r=this.ap;r===null&&Il().bs(),r.am=n.Z}this.ap=n.ap,this.a0=this.a0+n.a0|0}return this}),A.aq=(function(){return`ListBuffer`}),A.b2=(function(){return Km()}),A.f=(function(e){var t=e|0;return Dm(this.Z,t)}),A.ah=(function(){return this.hB()}),A.a2=(function(e){return this.i5(e)}),A.a8=(function(e){return this.hY(e)}),new N().i(O_,`scala.collection.mutable.ListBuffer`,{br:1,ak:1,t:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,v:1,s:1,u:1,x:1,w:1,T:1,U:1,am:1,al:1,p:1,q:1,W:1,ab:1,a:1,aa:1});function k_(e,t,n){return e.bn=0,e.ao=t,e.y=n,e}function A_(e){return k_(e,new ga(16),0),e}function j_(){this.bn=0,this.ao=null,this.y=0}A=j_.prototype=new Gg,A.constructor=j_,A.k=(function(){return this.km().k()}),A.a5=(function(e){var t=this.y;return t===e?0:t<e?-1:1}),A.t=(function(){return this.y}),A.gV=(function(e){this.ao=Im().hu(this.ao,this.y,e)}),A.n=(function(e){var t=1+e|0;if(e<0)throw bl().he(e,this.y-1|0);if(t>this.y)throw bl().he(t-1|0,this.y-1|0);return this.ao.a[e]}),A.l=(function(){return this.y}),A.km=(function(){return new Rg(this,new vf((()=>this.bn)))}),A.i2=(function(e){this.bn=1+this.bn|0;var t=1+this.y|0;return this.ao.a.length<=(t-1|0)&&this.gV(t),this.y=t,this.ao.a[t-1|0]=e,this}),A.gH=(function(e){if(e instanceof j_){var t=e.y;t>0&&(this.bn=1+this.bn|0,this.gV(this.y+t|0),Xc().cH(e.ao,0,this.ao,this.y,t),this.y=this.y+t|0)}else ed(this,e);return this}),A.aq=(function(){return`ArrayBuffer`}),A.aN=(function(e,t,n){var r=this.y,i=Ic().aa(e),a=n<r?n:r,o=t<0?i:i-t|0,s=o<a?o:a,c=s<0?0:s;return c>0&&Xc().cH(this.ao,0,e,t,c),c}),A.f=(function(e){return this.n(e|0)}),A.b2=(function(){return Im()}),A.a2=(function(e){return this.i2(e)}),A.a8=(function(e){return this.gH(e)}),new N().i(j_,`scala.collection.mutable.ArrayBuffer`,{be:1,ak:1,t:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,v:1,s:1,u:1,x:1,w:1,T:1,U:1,am:1,al:1,o:1,n:1,F:1,E:1,bq:1,p:1,q:1,a:1,aa:1});function M_(e,t){return e.aL=t,e}function N_(e){return M_(e,[]),e}function P_(){this.aL=null}A=P_.prototype=new Gg,A.constructor=P_,A.aq=(function(){return`IndexedSeq`}),A.k=(function(){return Nh(new Fh,new Fg(this))}),A.a5=(function(e){var t=this.aL.length|0;return t===e?0:t<e?-1:1}),A.n=(function(e){return this.aL[e]}),A.l=(function(){return this.aL.length|0}),A.t=(function(){return this.aL.length|0}),A.aM=(function(){return`WrappedArray`}),A.ah=(function(){return this}),A.a2=(function(e){return this.aL.push(e),this}),A.f=(function(e){var t=e|0;return this.aL[t]}),A.b2=(function(){return Zm()}),new N().i(P_,`scala.scalajs.js.WrappedArray`,{fp:1,ak:1,t:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,v:1,s:1,u:1,x:1,w:1,T:1,U:1,am:1,al:1,q:1,p:1,E:1,o:1,n:1,F:1,bq:1,W:1,a:1}),Us(new(Eh.r()).C([]));