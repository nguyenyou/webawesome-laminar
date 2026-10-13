var e=Object.defineProperty,t=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r};
/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const n=globalThis,r=n.ShadowRoot&&(n.ShadyCSS===void 0||n.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,i=Symbol(),a=/* @__PURE__ */ new WeakMap;var o=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(r&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=a.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&a.set(t,e))}return e}toString(){return this.cssText}};const s=e=>new o(typeof e==`string`?e:e+``,void 0,i),c=(e,...t)=>new o(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,i),l=(e,t)=>{if(r)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let r of t){let t=document.createElement(`style`),i=n.litNonce;i!==void 0&&t.setAttribute(`nonce`,i),t.textContent=r.cssText,e.appendChild(t)}},u=r?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return s(t)})(e):e,{is:d,defineProperty:f,getOwnPropertyDescriptor:p,getOwnPropertyNames:m,getOwnPropertySymbols:ee,getPrototypeOf:h}=Object,g=globalThis,te=g.trustedTypes,ne=te?te.emptyScript:``,re=g.reactiveElementPolyfillSupport,_=(e,t)=>e,ie={toAttribute(e,t){
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
switch(t){case Boolean:e=e?ne:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},ae=(e,t)=>!d(e,t),oe={attribute:!0,type:String,converter:ie,reflect:!1,useDefault:!1,hasChanged:ae};Symbol.metadata??=Symbol(`metadata`),g.litPropertyMetadata??=/* @__PURE__ */ new WeakMap;var v=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=oe){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&f(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=p(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??oe}static _$Ei(){if(this.hasOwnProperty(_(`elementProperties`)))return;let e=h(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(_(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_(`properties`))){let e=this.properties,t=[...m(e),...ee(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=/* @__PURE__ */ new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(u(e))}else e!==void 0&&t.push(u(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=/* @__PURE__ */ new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=/* @__PURE__ */ new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=/* @__PURE__ */ new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return l(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?ie:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?ie:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??ae)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=/* @__PURE__ */ new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=/* @__PURE__ */ new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=/* @__PURE__ */ new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};v.elementStyles=[],v.shadowRootOptions={mode:`open`},v[_(`elementProperties`)]=/* @__PURE__ */ new Map,v[_(`finalized`)]=/* @__PURE__ */ new Map,re?.({ReactiveElement:v}),(g.reactiveElementVersions??=[]).push(`2.1.2`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const se=globalThis,ce=e=>e,le=se.trustedTypes,ue=le?le.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,de=`$lit$`,fe=`lit$${Math.random().toFixed(9).slice(2)}$`,pe=`?`+fe,me=`<${pe}>`,he=document,ge=()=>he.createComment(``),_e=e=>e===null||typeof e!=`object`&&typeof e!=`function`,ve=Array.isArray,ye=e=>ve(e)||typeof e?.[Symbol.iterator]==`function`,be=`[ 	
\f\r]`,xe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Se=/-->/g,Ce=/>/g,we=RegExp(`>|${be}(?:([^\\s"'>=/]+)(${be}*=${be}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Te=/'/g,Ee=/"/g,De=/^(?:script|style|textarea|title)$/i,Oe=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),ke=Symbol.for(`lit-noChange`),y=Symbol.for(`lit-nothing`),Ae=/* @__PURE__ */ new WeakMap,je=he.createTreeWalker(he,129);function Me(e,t){if(!ve(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return ue===void 0?t:ue.createHTML(t)}const Ne=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=xe;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===xe?c[1]===`!--`?o=Se:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=we):(De.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=we):o=Ce:o===we?c[0]===`>`?(o=i??xe,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?we:c[3]===`"`?Ee:Te):o===Ee||o===Te?o=we:o===Se||o===Ce?o=xe:(o=we,i=void 0);let d=o===we&&e[t+1].startsWith(`/>`)?` `:``;a+=o===xe?n+me:l>=0?(r.push(s),n.slice(0,l)+de+n.slice(l)+fe+d):n+fe+(l===-2?t:d)}return[Me(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]};var Pe=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Ne(t,n);if(this.el=e.createElement(l,r),je.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=je.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(de)){let t=u[o++],n=i.getAttribute(e).split(fe),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?ze:r[1]===`?`?Be:r[1]===`@`?Ve:Re}),i.removeAttribute(e)}else e.startsWith(fe)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(De.test(i.tagName)){let e=i.textContent.split(fe),t=e.length-1;if(t>0){i.textContent=le?le.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],ge()),je.nextNode(),c.push({type:2,index:++a});i.append(e[t],ge())}}}else if(i.nodeType===8){if(i.data===pe)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(fe,e+1))!==-1;)c.push({type:7,index:a}),e+=fe.length-1}}a++}}static createElement(e,t){let n=he.createElement(`template`);return n.innerHTML=e,n}};function Fe(e,t,n=e,r){if(t===ke)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=_e(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=Fe(e,i._$AS(e,t.values),i,r)),t}var Ie=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??he).importNode(t,!0);je.currentNode=r;let i=je.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Le(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new He(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=je.nextNode(),a++)}return je.currentNode=he,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Le=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Fe(this,e,t),_e(e)?e===y||e==null||e===``?(this._$AH!==y&&this._$AR(),this._$AH=y):e!==this._$AH&&e!==ke&&this._(e):e._$litType$===void 0?e.nodeType===void 0?ye(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==y&&_e(this._$AH)?this._$AA.nextSibling.data=e:this.T(he.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Pe.createElement(Me(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Ie(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Ae.get(e.strings);return t===void 0&&Ae.set(e.strings,t=new Pe(e)),t}k(t){ve(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(ge()),this.O(ge()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=ce(e).nextSibling;ce(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Re=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=y,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(/* @__PURE__ */ new String),this.strings=n):this._$AH=y}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=Fe(this,e,t,0),a=!_e(e)||e!==this._$AH&&e!==ke,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=Fe(this,r[n+o],t,o),s===ke&&(s=this._$AH[o]),a||=!_e(s)||s!==this._$AH[o],s===y?e=y:e!==y&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},ze=class extends Re{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===y?void 0:e}},Be=class extends Re{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==y)}},Ve=class extends Re{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=Fe(this,e,t,0)??y)===ke)return;let n=this._$AH,r=e===y&&n!==y||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==y&&(n===y||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},He=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Fe(this,e)}};const Ue={M:de,P:fe,A:pe,C:1,L:Ne,R:Ie,D:ye,V:Fe,I:Le,H:Re,N:Be,U:Ve,B:ze,F:He},We=se.litHtmlPolyfillSupport;We?.(Pe,Le),(se.litHtmlVersions??=[]).push(`3.3.3`);const Ge=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Le(t.insertBefore(ge(),e),e,void 0,n??{})}return i._$AI(e),i},Ke=globalThis
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
;var qe=class extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ge(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ke}};qe._$litElement$=!0,qe.finalized=!0,Ke.litElementHydrateSupport?.({LitElement:qe});const Je=Ke.litElementPolyfillSupport;Je?.({LitElement:qe}),(Ke.litElementVersions??=[]).push(`4.2.2`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ye=c`
  :host {
    display: block;
    position: relative;
    aspect-ratio: 16 / 9;
    width: 100%;
    overflow: hidden;
    border-radius: var(--wa-border-radius-m);
  }

  #frame-container {
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% / var(--zoom));
    height: calc(100% / var(--zoom));
    transform: scale(var(--zoom));
    transform-origin: 0 0;
  }

  #iframe {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: inherit;
    /* Prevent the iframe from being selected, e.g. by a double click. Doesn't affect selection withing the iframe. */
    user-select: none;
    -webkit-user-select: none;
  }

  #controls {
    display: flex;
    position: absolute;
    bottom: 0.5em;
    align-items: center;
    font-weight: var(--wa-font-weight-semibold);
    padding: 0.25em 0.5em;
    gap: 0.5em;
    border-radius: var(--wa-border-radius-s);
    background: #000b;
    color: white;
    font-size: min(12px, 0.75em);
    user-select: none;
    -webkit-user-select: none;

    &:dir(ltr) {
      right: 0.5em;
    }

    &:dir(rtl) {
      left: 0.5em;
    }

    button {
      display: flex;
      align-items: center;
      padding: 0.25em;
      border: none;
      background: none;
      color: inherit;
      cursor: pointer;

      &:focus {
        outline: none;
      }

      &:focus-visible {
        outline: var(--wa-focus-ring);
        outline-offset: var(--wa-focus-ring-offset);
      }

      &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }
    }

    span {
      min-width: 4.5ch; /* extra space so numbers don't shift */
      font-variant-numeric: tabular-nums;
      text-align: center;
    }
  }
`;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Xe(e){return e.split(` `).map(e=>e.trim()).filter(e=>e!==``)}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ze=Object.defineProperty,Qe=Object.getOwnPropertyDescriptor,$e=e=>{throw TypeError(e)},b=(e,t,n,r)=>{for(var i=r>1?void 0:r?Qe(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Ze(t,n,i),i},et=(e,t,n)=>t.has(e)||$e(`Cannot `+n),tt=(e,t,n)=>(et(e,t,`read from private field`),n?n.call(e):t.get(e)),nt=(e,t,n)=>t.has(e)?$e(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),rt=(e,t,n,r)=>(et(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const it=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},at={attribute:!0,type:String,converter:ie,reflect:!1,hasChanged:ae},ot=(e=at,t,n)=>{
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=/* @__PURE__ */ new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function x(e){return(t,n)=>typeof n==`object`?ot(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function st(e){return x({...e,state:!0,attribute:!1})}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const ct=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function lt(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return ct(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return ct(n,r,{get(){return a(this)}})}}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var ut=c`
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
`,dt=/;\s+$/;function ft(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function pt(e){let{property:t,value:n,element:r}=e;if(n){let e=r.getAttribute(`style`)||``;e&&(e.match(dt)||(e+=`;`),e+=` `);let i=`${t}: ${n}`;return e.includes(i)?void 0:`${e}${i};`}return null}var mt,ht=class extends qe{constructor(){super(),nt(this,mt,!1),this.initialReflectedProperties=/* @__PURE__ */ new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,t)=>{if(this.internals?.states)try{t?this.internals.states.add(e):this.internals.states.delete(e)}catch(e){if(String(e).includes(`must start with '--'`))console.error(`Your browser implements an outdated version of CustomStateSet. Consider using a polyfill`);else throw e}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error(`Element internals are not supported in your browser. Consider using a polyfill`)}this.customStates.set(`wa-defined`,!0);let e=this.constructor;for(let[t,n]of e.elementProperties)n.default===`inherit`&&n.initial!==void 0&&typeof t==`string`&&this.customStates.set(`initial-${t}-${n.initial}`,!0)}static get styles(){return[ut,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `)),this.didSSR&&this.updateComplete.then(()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `))})}attributeChangedCallback(e,t,n){tt(this,mt)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),rt(this,mt,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll(`slot`).forEach(e=>{e.dispatchEvent(new Event(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(e){if(this.didSSR&&!this.hasUpdated){let t=new Event(`lit-hydration-error`,{bubbles:!0,composed:!0,cancelable:!1});t.error=e,this.dispatchEvent(t)}throw e}}setStyle(e,t){if(this.style)this.style[e]=t;else{let n=pt({property:ft(e),value:t,element:this});n&&this.setAttribute(`style`,n)}}setStyleProperty(e,t){if(this.style)this.style.setProperty(e,t);else{let n=pt({property:e,value:t,element:this});n&&this.setAttribute(`style`,n)}}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};mt=/* @__PURE__ */ new WeakMap,b([x()],ht.prototype,`dir`,2),b([x()],ht.prototype,`lang`,2),b([x({type:Boolean,reflect:!0,attribute:`did-ssr`})],ht.prototype,`didSSR`,2);const gt=/* @__PURE__ */ new Set,_t=/* @__PURE__ */ new Map;let vt,yt=`ltr`,bt=`en`;const xt=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(xt){let e=new MutationObserver(Ct);yt=document.documentElement.dir||`ltr`,bt=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function St(...e){e.map(e=>{let t=e.$code.toLowerCase();_t.has(t)?_t.set(t,Object.assign(Object.assign({},_t.get(t)),e)):_t.set(t,e),vt||=e}),Ct()}function Ct(){xt&&(yt=document.documentElement.dir||`ltr`,bt=document.documentElement.lang||navigator.language),[...gt.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var wt=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){gt.add(this.host)}hostDisconnected(){gt.delete(this.host)}dir(){return`${this.host.dir||yt}`.toLowerCase()}lang(){let e=`${this.host.lang||bt}`.toLowerCase().replace(/_/g,`-`);try{return new Intl.Locale(e),e}catch{return vt?vt.$code.toLowerCase():`en`}}getTranslationData(e){let t;try{t=new Intl.Locale(e.replace(/_/g,`-`))}catch{return{locale:void 0,language:``,region:``,primary:void 0,secondary:void 0}}let n=t.language.toLowerCase(),r=t.region?.toLowerCase()??``,i=_t.get(`${n}-${r}`),a=_t.get(n);return{locale:t,language:n,region:r,primary:i,secondary:a}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&vt&&vt[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(vt&&vt[e])i=vt[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},Tt={$code:`en`,$name:`English`,$dir:`ltr`,allTagsRemoved:`All tags removed`,am:`AM`,autosizeColumn:`Autosize column`,captions:`Captions`,carousel:`Carousel`,chooseDate:`Choose date`,chooseDecade:`Choose decade`,chooseMonth:`Choose month`,chooseTime:`Choose time`,chooseYear:`Choose year`,clearEntry:`Clear entry`,clearFilter:`Clear filter`,clearSort:`Clear sort`,close:`Close`,closeCalendar:`Close calendar`,closeTimeInput:`Close time picker`,collapseRow:`Collapse row`,columnMenu:`Column options`,columnMovedToPosition:(e,t,n)=>`${e} moved to position ${t} of ${n}`,columns:`Columns`,compactPageXOfY:(e,t)=>`${e} of ${t}`,completed:`Completed`,copied:`Copied`,copy:`Copy`,createOption:e=>`Create "${e}"`,currentlyPlaying:`currently playing`,currentValue:`Current value`,date:`Date`,datePickerKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the calendar.`,day:`Day`,dayPeriod:`AM/PM`,decrement:`Decrement`,deselectAllRows:`Deselect all rows`,disabled:`Disabled`,dropFileHere:`Drop file here or click to browse`,dropFilesHere:`Drop files here or click to browse`,empty:`Empty`,endDate:`End date`,enterFullscreen:`Enter fullscreen`,error:`Error`,exitFullscreen:`Exit fullscreen`,expandRow:`Expand row`,filterByColumn:e=>`Filter by ${e}`,filterFrom:`From`,filterMax:`Max`,filterMin:`Min`,filterTo:`To`,firstPage:`First page`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hideColumn:`Hide column`,hidePassword:`Hide password`,hour:`Hour`,incompleteDate:`Enter a valid date.`,increment:`Increment`,jumpBackwardX:e=>`Jump back ${e} pages`,jumpForwardX:e=>`Jump forward ${e} pages`,lastPage:`Last page`,loading:`Loading`,locked:`Locked`,minute:`Minute`,month:`Month`,moreOptions:`More Options`,mute:`Mute`,nextDecade:`Next decade`,nextMonth:`Next month`,nextPage:`Next page`,nextSlide:`Next slide`,nextVideo:`Next Video`,nextYear:`Next year`,noData:`No data`,noOptions:`No options`,noResults:`No matching results`,notCompleted:`Not completed`,now:`Now`,numCharacters:e=>e===1?`1 character`:`${e} characters`,numCharactersRemaining:e=>e===1?`1 character remaining`:`${e} characters remaining`,numOptionsAvailable:e=>e===0?`No options available`:e===1?`1 option available`:`${e} options available`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,numRowsCopied:e=>e===1?`1 row copied`:`${e} rows copied`,numRowsSelected:e=>e===1?`1 row selected`:`${e} rows selected`,optionPosition:(e,t,n)=>`${e}, ${t} of ${n}`,optionsLoadError:`Options could not be loaded`,pageXOfY:(e,t)=>`Page ${e} of ${t}`,pagination:`Pagination`,pause:`Pause`,pauseAnimation:`Pause animation`,pictureInPicture:`Picture in picture`,pinLeft:`Pin left`,pinRight:`Pin right`,play:`Play`,playAnimation:`Play animation`,playbackSpeed:`Playback speed`,playlist:`Playlist`,pm:`PM`,previousDecade:`Previous decade`,previousMonth:`Previous month`,previousPage:`Previous page`,previousSlide:`Previous slide`,previousVideo:`Previous video`,previousYear:`Previous year`,progress:`Progress`,rangeTooLong:e=>e===1?`Select a range no longer than 1 day`:`Select a range no longer than ${e} days`,rangeTooShort:e=>e===1?`Select a range at least 1 day long`:`Select a range at least ${e} days long`,readonly:`Read-only`,remove:`Remove`,resetColumns:`Reset columns`,resize:`Resize`,resizeColumn:`Resize column`,rowsPerPage:`Rows per page`,scrollableRegion:`Scrollable region`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,search:`Search`,second:`Second`,seek:`Seek`,seekProgress:(e,t)=>`${e} of ${t}`,selectAColorFromTheScreen:`Select a color from the screen`,selectAllRows:`Select all rows`,selected:`Selected`,selectedDateLabel:e=>`Selected: ${e}`,selectedRangeLabel:e=>`Selected range: ${e}`,selectGroup:`Select group`,selectionCleared:`Selection cleared`,selectRow:`Select row`,showingNofMRows:(e,t)=>`Showing ${e} of ${t} rows`,showingXtoYofZ:(e,t,n)=>`${e}\u2013${t} of ${n}`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,sortAscending:`Sort ascending`,sortColumn:`Sort column`,sortDescending:`Sort descending`,startDate:`Start date`,steps:`Steps`,stepXOfY:(e,t)=>`Step ${e} of ${t}`,tagAdded:e=>`${e} added`,tagAlreadyAdded:e=>`${e} is already added`,tagInputKeyboardHelp:`Press Backspace or Delete to remove this tag.`,tagRemoved:e=>`${e} removed`,time:`Time`,timeInputKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the time picker.`,today:`Today`,toggleColorFormat:`Toggle color format`,tooFewTags:e=>e===1?`Add at least 1 tag`:`Add at least ${e} tags`,tooManyTags:e=>e===1?`Add no more than 1 tag`:`Add no more than ${e} tags`,unmute:`Unmute`,unpin:`Unpin`,unpinColumn:`Unpin column`,videoPlayer:`Video player`,volume:`Volume`,year:`Year`,zoomIn:`Zoom in`,zoomOut:`Zoom out`}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;St(Tt);var Et=Tt,Dt=class extends wt{lang(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||`en`:super.lang()}};St(Et);
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Ot=e=>e??y;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var kt=class{constructor(e,t){this.handleTransitionEnd=()=>{this.onThemeChange()},(this.host=e).addController(this),this.onThemeChange=t,typeof document<`u`&&(this.hiddenElement=document.createElement(`div`),this.hiddenElement.setAttribute(`aria-hidden`,`true`),Object.assign(this.hiddenElement.style,{position:`absolute`,width:`0`,height:`0`,overflow:`hidden`,pointerEvents:`none`,opacity:`0`,color:`var(--wa-color-surface-default, transparent)`,transition:`color 0.001ms`}))}hostConnected(){this.hiddenElement&&(this.host.appendChild(this.hiddenElement),this.hiddenElement.addEventListener(`transitionend`,this.handleTransitionEnd))}hostDisconnected(){this.hiddenElement&&(this.hiddenElement.removeEventListener(`transitionend`,this.handleTransitionEnd),this.hiddenElement.remove())}},S=class extends ht{constructor(){super(),this.localize=new Dt(this),this.themeObserver=new MutationObserver(()=>this.syncTheme()),this.availableZoomLevels=[],this.allowfullscreen=!1,this.loading=`eager`,this.label=``,this.zoom=1,this.zoomLevels=`25% 50% 75% 100% 125% 150% 175% 200%`,this.withoutControls=!1,this.withoutInteraction=!1,this.withThemeSync=!1,new kt(this,()=>this.syncTheme())}get contentWindow(){return this.iframe?.contentWindow||null}get contentDocument(){return this.iframe?.contentDocument||null}parseZoomLevels(e){let t=Xe(e),n=[];for(let e of t){let t;if(e.endsWith(`%`)){let n=parseFloat(e.slice(0,-1));if(!isNaN(n))t=Math.max(0,n/100);else continue}else if(t=parseFloat(e),!isNaN(t))t=Math.max(0,t);else continue;n.push(t)}return[...new Set(n)].sort((e,t)=>e-t)}getCurrentZoomIndex(){if(this.availableZoomLevels.length===0)return-1;let e=0,t=Math.abs(this.availableZoomLevels[0]-this.zoom);for(let n=1;n<this.availableZoomLevels.length;n++){let r=Math.abs(this.availableZoomLevels[n]-this.zoom);r<t&&(t=r,e=n)}return e}isZoomInDisabled(){return this.availableZoomLevels.length!==0&&this.getCurrentZoomIndex()>=this.availableZoomLevels.length-1}isZoomOutDisabled(){return this.availableZoomLevels.length!==0&&this.getCurrentZoomIndex()<=0}willUpdate(e){e.has(`zoom`)&&this.setStyleProperty(`--zoom`,`${this.zoom}`),super.willUpdate(e)}updated(e){if(e.has(`zoomLevels`)&&(this.availableZoomLevels=this.parseZoomLevels(this.zoomLevels),this.availableZoomLevels.length>0)){let e=this.getCurrentZoomIndex();Math.abs(this.availableZoomLevels[e]-this.zoom)>.001&&(this.zoom=this.availableZoomLevels[e])}e.has(`withThemeSync`)&&(this.withThemeSync?(this.themeObserver?.observe(document.documentElement,{attributes:!0,attributeFilter:[`class`]}),this.syncTheme()):this.themeObserver?.disconnect()),super.updated(e)}zoomIn(){if(this.availableZoomLevels.length===0){this.zoom=Math.min(this.zoom+.05,2);return}let e=this.getCurrentZoomIndex();e<this.availableZoomLevels.length-1&&(this.zoom=this.availableZoomLevels[e+1])}zoomOut(){if(this.availableZoomLevels.length===0){this.zoom=Math.max(this.zoom-.05,0);return}let e=this.getCurrentZoomIndex();e>0&&(this.zoom=this.availableZoomLevels[e-1])}disconnectedCallback(){super.disconnectedCallback(),this.themeObserver?.disconnect()}syncTheme(){if(this.withThemeSync)try{let e=this.contentDocument?.documentElement;if(!e)return;let t=[`wa-theme-`,`wa-brand-`,`wa-palette-`],n=/* @__PURE__ */ new Set,r=/* @__PURE__ */ new Set,i=this,a=!1;for(;i;){a||(i.classList.contains(`wa-dark`)?(n.add(`wa-dark`),a=!0):i.classList.contains(`wa-light`)&&(n.add(`wa-light`),a=!0));for(let e of i.classList)t.some(t=>e.startsWith(t))&&r.add(e);i=i.parentElement}e.classList.toggle(`wa-dark`,n.has(`wa-dark`)),e.classList.toggle(`wa-light`,n.has(`wa-light`));let o=Array.from(e.classList).filter(e=>t.some(t=>e.startsWith(t)));e.classList.remove(...o),e.classList.add(...r)}catch{}}handleLoad(){this.withThemeSync&&this.syncTheme(),this.dispatchEvent(new Event(`load`,{bubbles:!1,cancelable:!1,composed:!0}))}handleError(){this.dispatchEvent(new Event(`error`,{bubbles:!1,cancelable:!1,composed:!0}))}render(){return Oe`
      <div id="frame-container">
        <iframe
          id="iframe"
          part="iframe"
          ?inert=${this.withoutInteraction}
          ?allowfullscreen=${this.allowfullscreen}
          allow=${Ot(this.allow??void 0)}
          sandbox=${Ot(this.sandbox??void 0)}
          referrerpolicy=${Ot(this.referrerpolicy??void 0)}
          name=${Ot(this.name??void 0)}
          title=${Ot(this.label||void 0)}
          loading=${this.loading}
          src=${Ot(this.src??void 0)}
          srcdoc=${Ot(this.srcdoc??void 0)}
          @load=${this.handleLoad}
          @error=${this.handleError}
        ></iframe>
      </div>

      ${this.withoutControls?``:Oe`
            <div id="controls" part="controls">
              <button
                part="zoom-out-button"
                aria-label=${this.localize.term(`zoomOut`)}
                @click=${this.zoomOut}
                ?disabled=${this.isZoomOutDisabled()}
              >
                <slot name="zoom-out-icon">
                  <wa-icon name="minus" label="Zoom out"></wa-icon>
                </slot>
              </button>
              <span>${this.localize.number(this.zoom,{style:`percent`,maximumFractionDigits:1})}</span>
              <button
                part="zoom-in-button"
                aria-label=${this.localize.term(`zoomIn`)}
                @click=${this.zoomIn}
                ?disabled=${this.isZoomInDisabled()}
              >
                <slot name="zoom-in-icon">
                  <wa-icon name="plus" label="Zoom in"></wa-icon>
                </slot>
              </button>
            </div>
          `}
    `}};S.css=Ye,b([st()],S.prototype,`availableZoomLevels`,2),b([lt(`#iframe`)],S.prototype,`iframe`,2),b([x()],S.prototype,`src`,2),b([x()],S.prototype,`srcdoc`,2),b([x()],S.prototype,`allow`,2),b([x({type:Boolean})],S.prototype,`allowfullscreen`,2),b([x()],S.prototype,`loading`,2),b([x()],S.prototype,`name`,2),b([x()],S.prototype,`referrerpolicy`,2),b([x()],S.prototype,`sandbox`,2),b([x()],S.prototype,`label`,2),b([x({type:Number,reflect:!0})],S.prototype,`zoom`,2),b([x({attribute:`zoom-levels`})],S.prototype,`zoomLevels`,2),b([x({type:Boolean,attribute:`without-controls`,reflect:!0})],S.prototype,`withoutControls`,2),b([x({type:Boolean,attribute:`without-interaction`,reflect:!0})],S.prototype,`withoutInteraction`,2),b([x({type:Boolean,attribute:`with-theme-sync`,reflect:!0})],S.prototype,`withThemeSync`,2),S=b([it(`wa-zoomable-frame`)],S);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var At=class extends Event{constructor(){super(`wa-error`,{bubbles:!0,cancelable:!1,composed:!0})}},jt=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-load`,{bubbles:!0,cancelable:!1,composed:!0})}},Mt=c`
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
`
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Nt(e,t){let n={waitUntilFirstUpdate:!1,...t};return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Pt=``,Ft=``;function It(){return Pt.replace(/\/$/,``)}function Lt(e){Ft=e}function Rt(){if(!Ft){let e=document.querySelector(`[data-fa-kit-code]`);e&&Lt(e.getAttribute(`data-fa-kit-code`)||``)}return Ft}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var zt=`7.3.0`;function Bt(e,t,n){let r=`solid`;return t===`chisel`&&(r=`chisel-regular`),t===`etch`&&(r=`etch-solid`),t===`graphite`&&(r=`graphite-thin`),t===`jelly`&&(r=`jelly-regular`,n===`duo-regular`&&(r=`jelly-duo-regular`),n===`fill-regular`&&(r=`jelly-fill-regular`)),t===`jelly-duo`&&(r=`jelly-duo-regular`),t===`jelly-fill`&&(r=`jelly-fill-regular`),t===`notdog`&&(n===`solid`&&(r=`notdog-solid`),n===`duo-solid`&&(r=`notdog-duo-solid`)),t===`notdog-duo`&&(r=`notdog-duo-solid`),t===`slab`&&((n===`solid`||n===`regular`)&&(r=`slab-regular`),n===`press-regular`&&(r=`slab-press-regular`)),t===`slab-press`&&(r=`slab-press-regular`),t===`slab-duo`&&(r=`slab-duo-regular`),t===`slab-press-duo`&&(r=`slab-press-duo-regular`),t===`thumbprint`&&(r=`thumbprint-light`),t===`utility`&&(r=`utility-semibold`),t===`utility-duo`&&(r=`utility-duo-semibold`),t===`utility-fill`&&(r=`utility-fill-semibold`),t===`whiteboard`&&(r=`whiteboard-semibold`),t===`mosaic`&&(r=`mosaic-solid`),t===`pixel`&&(r=`pixel-regular`),t===`vellum`&&(r=`vellum-solid`),t===`classic`&&(n===`thin`&&(r=`thin`),n===`light`&&(r=`light`),n===`regular`&&(r=`regular`),n===`solid`&&(r=`solid`)),t===`duotone`&&(n===`thin`&&(r=`duotone-thin`),n===`light`&&(r=`duotone-light`),n===`regular`&&(r=`duotone-regular`),n===`solid`&&(r=`duotone`)),t===`sharp`&&(n===`thin`&&(r=`sharp-thin`),n===`light`&&(r=`sharp-light`),n===`regular`&&(r=`sharp-regular`),n===`solid`&&(r=`sharp-solid`)),t===`sharp-duotone`&&(n===`thin`&&(r=`sharp-duotone-thin`),n===`light`&&(r=`sharp-duotone-light`),n===`regular`&&(r=`sharp-duotone-regular`),n===`solid`&&(r=`sharp-duotone-solid`)),t===`brands`&&(r=`brands`),r}function Vt(e,t,n){let r=Bt(e,t,n),i=It();if(i)return`${i}/${r}/${e}.svg`;let a=Rt();return a.length>0?`https://ka-p.fontawesome.com/releases/v${zt}/svgs/${r}/${e}.svg?token=${encodeURIComponent(a)}`:`https://ka-f.fontawesome.com/releases/v${zt}/svgs/${r}/${e}.svg`}var Ht={name:`default`,resolver:(e,t=`classic`,n=`solid`)=>Vt(e,t,n),mutator:(e,t)=>{if(e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`),t?.family&&!e.hasAttribute(`data-duotone-initialized`)){let{family:n,variant:r}=t;if(n===`duotone`||n===`sharp-duotone`||n===`notdog-duo`||n===`notdog`&&r===`duo-solid`||n===`jelly-duo`||n===`jelly`&&r===`duo-regular`||n===`utility-duo`||n===`slab-duo`||n===`slab-press-duo`||n===`thumbprint`){let n=[...e.querySelectorAll(`path`)],r=n.find(e=>!e.hasAttribute(`opacity`)),i=n.find(e=>e.hasAttribute(`opacity`));if(!r||!i)return;if(r.setAttribute(`data-duotone-primary`,``),i.setAttribute(`data-duotone-secondary`,``),t.swapOpacity&&r&&i){let e=i.getAttribute(`opacity`)||`0.4`;r.style.setProperty(`--path-opacity`,e),i.style.setProperty(`--path-opacity`,`1`)}e.setAttribute(`data-duotone-initialized`,``)}}}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Ut(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var Wt={solid:{"arrow-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`,"arrow-up":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>`,backward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M236.3 107.1C247.9 96 265 92.9 279.7 99.2C294.4 105.5 304 120 304 136L304 272.3L476.3 107.2C487.9 96 505 92.9 519.7 99.2C534.4 105.5 544 120 544 136L544 504C544 520 534.4 534.5 519.7 540.8C505 547.1 487.9 544 476.3 532.9L304 367.7L304 504C304 520 294.4 534.5 279.7 540.8C265 547.1 247.9 544 236.3 532.9L44.3 348.9C36.5 341.3 32 330.9 32 320C32 309.1 36.5 298.7 44.3 291.1L236.3 107.1z"/></svg>`,"backward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M491 100.8C478.1 93.8 462.3 94.5 450 102.6L192 272.1L192 128C192 110.3 177.7 96 160 96C142.3 96 128 110.3 128 128L128 512C128 529.7 142.3 544 160 544C177.7 544 192 529.7 192 512L192 367.9L450 537.5C462.3 545.6 478 546.3 491 539.3C504 532.3 512 518.8 512 504.1L512 136.1C512 121.4 503.9 107.9 491 100.9z"/></svg>`,bars:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>`,"angles-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M77.3 256 214.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256zm192 0L406.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L269.3 256z"/></svg>`,"angles-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.7 256 297.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 256zm-192 0L105.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256z"/></svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>`,"chevron-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`,"chevron-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>`,"chevron-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>`,circle:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>`,"closed-captioning":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M64 192C64 156.7 92.7 128 128 128L512 128C547.3 128 576 156.7 576 192L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 192zM216 272L248 272C252.4 272 256 275.6 256 280C256 293.3 266.7 304 280 304C293.3 304 304 293.3 304 280C304 249.1 278.9 224 248 224L216 224C185.1 224 160 249.1 160 280L160 360C160 390.9 185.1 416 216 416L248 416C278.9 416 304 390.9 304 360C304 346.7 293.3 336 280 336C266.7 336 256 346.7 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 280C208 275.6 211.6 272 216 272zM384 280C384 275.6 387.6 272 392 272L424 272C428.4 272 432 275.6 432 280C432 293.3 442.7 304 456 304C469.3 304 480 293.3 480 280C480 249.1 454.9 224 424 224L392 224C361.1 224 336 249.1 336 280L336 360C336 390.9 361.1 416 392 416L424 416C454.9 416 480 390.9 480 360C480 346.7 469.3 336 456 336C442.7 336 432 346.7 432 360C432 364.4 428.4 368 424 368L392 368C387.6 368 384 364.4 384 360L384 280z"/></svg>`,"closed-captioning-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M39 39.1C48.4 29.7 63.6 29.7 72.9 39.1L161.8 128L512 128C547.3 128 576 156.7 576 192L576 448C576 473.5 561.1 495.4 539.6 505.8L601 567.1C610.4 576.5 610.4 591.7 601 601C591.6 610.3 576.4 610.4 567.1 601L39 73.1C29.7 63.7 29.7 48.5 39 39.1zM384 350.1L384 279.9C384 275.5 387.6 271.9 392 271.9L424 271.9C428.4 271.9 432 275.5 432 279.9C432 293.2 442.7 303.9 456 303.9C469.3 303.9 480 293.2 480 279.9C480 249 454.9 223.9 424 223.9L392 223.9C361.1 223.9 336 249 336 279.9L336 302.1L384 350.1zM445.5 411.6C465.7 403.2 480 383.2 480 359.9C480 346.6 469.3 335.9 456 335.9C442.7 335.9 432 346.6 432 359.9C432 364.3 428.4 367.9 424 367.9L401.8 367.9L445.5 411.6zM162.3 264.1C160.8 269.1 160 274.5 160 280L160 360C160 390.9 185.1 416 216 416L248 416C266.1 416 282.1 407.5 292.4 394.2L410.2 512L128 512C92.7 512 64 483.3 64 448L64 192C64 184.2 65.4 176.7 68 169.8L162.3 264.1zM256.1 357.9C256 358.6 256 359.3 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 309.8L256.1 357.9z"/></svg>`,compress:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>`,ellipsis:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M96 320C96 289.1 121.1 264 152 264C182.9 264 208 289.1 208 320C208 350.9 182.9 376 152 376C121.1 376 96 350.9 96 320zM264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320zM488 264C518.9 264 544 289.1 544 320C544 350.9 518.9 376 488 376C457.1 376 432 350.9 432 320C432 289.1 457.1 264 488 264z"/></svg>`,"ellipsis-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/></svg>`,expand:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 96C110.3 96 96 110.3 96 128L96 224C96 241.7 110.3 256 128 256C145.7 256 160 241.7 160 224L160 160L224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L128 96zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 512C96 529.7 110.3 544 128 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480L160 416zM416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160L480 224C480 241.7 494.3 256 512 256C529.7 256 544 241.7 544 224L544 128C544 110.3 529.7 96 512 96L416 96zM544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L512 544C529.7 544 544 529.7 544 512L544 416z"/></svg>`,eyedropper:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>`,filter:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 64C19.1 64 7.4 71.8 2.4 83.8S.2 109.5 9.4 118.6L192 301.3 192 416c0 8.5 3.4 16.6 9.4 22.6l64 64c9.2 9.2 22.9 11.9 34.9 6.9S320 492.9 320 480l0-178.7 182.6-182.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 64 480 64L32 64z"/></svg>`,forward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M403.7 107.1C392.1 96 375 92.9 360.3 99.2C345.6 105.5 336 120 336 136L336 272.3L163.7 107.2C152.1 96 135 92.9 120.3 99.2C105.6 105.5 96 120 96 136L96 504C96 520 105.6 534.5 120.3 540.8C135 547.1 152.1 544 163.7 532.9L336 367.7L336 504C336 520 345.6 534.5 360.3 540.8C375 547.1 392.1 544 403.7 532.9L595.7 348.9C603.6 341.4 608 330.9 608 320C608 309.1 603.5 298.7 595.7 291.1L403.7 107.1z"/></svg>`,file:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>`,"file-audio":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>`,"file-code":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>`,"file-excel":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>`,"file-image":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>`,"file-pdf":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>`,"file-powerpoint":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>`,"file-video":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>`,"file-word":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>`,"file-zipper":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>`,"forward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M21 36.8c12.9-7 28.7-6.3 41 1.8L320 208.1 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-144.1-258 169.6c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440L0 72C0 57.3 8.1 43.8 21 36.8z"/></svg>`,gauge:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,gear:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>`,"grip-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>`,indeterminate:`<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>`,"magnifying-glass":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>`,minus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>`,pause:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>`,"picture-in-picture":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M448 32c35.3 0 64 28.7 64 64l0 112-64 0 0-112-384 0 0 320 144 0 0 64-144 0-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416 0 96C0 62.9 25.2 35.6 57.5 32.3L64 32 448 32zm16 224c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48l160 0z"/></svg>`,play:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>`,"play-circle":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>`,plus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>`,"table-columns":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 64l0 256 128 0 0-256-128 0zm320 0l-128 0 0 256 128 0 0-256z"/></svg>`,thumbtack:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 10.3 134.1c37.1 21.2 65.8 56.4 78.2 99.7l3.8 13.4c2.8 9.7 .8 20-5.2 28.1S362 352 352 352L32 352c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1L5 297.8c12.4-43.3 41-78.5 78.2-99.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 400l64 0 0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-112z"/></svg>`,"up-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M406.6 502.6l96-96c9.2-9.2 11.9-22.9 6.9-34.9S492.9 352 480 352l-64 0 0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 320-64 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l96 96c12.5 12.5 32.8 12.5 45.3 0zM150.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-9.2 9.2-11.9 22.9-6.9 34.9S19.1 160 32 160l64 0 0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320 64 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-96-96z"/></svg>`,upload:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>`,user:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>`,volume:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM441.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C443.3 170.7 464 210.9 464 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-low":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,xmark:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>`},regular:{calendar:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z"/></svg>`,"circle-question":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`,"circle-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,clock:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>`,copy:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>`,eye:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>`,"eye-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>`}},Gt={name:`system`,resolver:(e,t=`classic`,n=`solid`)=>{let r=Wt[n][e]??Wt.regular[e]??Wt.regular[`circle-question`];return r?Ut(r):``},mutator:e=>{e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`)}},Kt=`classic`,qt=[Ht,Gt],Jt=/* @__PURE__ */ new Set
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;function Yt(e){Jt.add(e)}function Xt(e){Jt.delete(e)}function Zt(e){return qt.find(t=>t.name===e)}function Qt(){return Kt}
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const{I:$t}=Ue,en=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var tn=Symbol(),nn=Symbol(),rn,an=/* @__PURE__ */ new Map,C=class extends ht{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label=``,this.library=`default`,this.rotate=0,this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=Oe`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let n=this.shadowRoot.querySelector(`[part='svg']`);return typeof t.mutator==`function`&&t.mutator(n,this),this.svg}try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?tn:nn}catch{return nn}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return tn;rn||=new DOMParser;let r=rn.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):tn}catch{return tn}}}connectedCallback(){super.connectedCallback(),Yt(this)}firstUpdated(e){super.firstUpdated(e),this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Xt(this)}async getIconSource(){let e=Zt(this.library),t=this.family||Qt();if(this.name&&e){let n=this.canvas===`auto`||this.autoWidth,r;try{r=await e.resolver(this.name,t,this.variant,n)}catch{r=void 0}return{url:r,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=await this.getIconSource(),n=t?Zt(this.library):void 0;if(!e){this.svg=null;return}let r=an.get(e);r||(r=this.resolveIcon(e,n),an.set(e,r));let i=await r;if(i===nn&&an.delete(e),e===(await this.getIconSource()).url){if(en(i))this.svg=i;else switch(i){case nn:case tn:this.svg=null,this.dispatchEvent(new At);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new jt)}}}willUpdate(e){return this.style||this.setStyleProperty(`--rotate-angle`,`${this.rotate}deg`),super.willUpdate(e)}updated(e){super.updated(e);let t=Zt(this.library);this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`);let n=this.shadowRoot?.querySelector(`svg`);n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:Oe`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};C.css=Mt,b([st()],C.prototype,`svg`,2),b([x({reflect:!0})],C.prototype,`name`,2),b([x({reflect:!0})],C.prototype,`family`,2),b([x({reflect:!0})],C.prototype,`variant`,2),b([x({reflect:!0})],C.prototype,`canvas`,2),b([x({attribute:`auto-width`,type:Boolean,reflect:!0})],C.prototype,`autoWidth`,2),b([x({attribute:`swap-opacity`,type:Boolean,reflect:!0})],C.prototype,`swapOpacity`,2),b([x()],C.prototype,`src`,2),b([x()],C.prototype,`label`,2),b([x({reflect:!0})],C.prototype,`library`,2),b([x({type:Number,reflect:!0})],C.prototype,`rotate`,2),b([x({type:String,reflect:!0})],C.prototype,`flip`,2),b([x({type:String,reflect:!0})],C.prototype,`animation`,2),b([Nt(`label`)],C.prototype,`handleLabelChange`,1),b([Nt([`family`,`name`,`library`,`variant`,`src`,`autoWidth`,`canvas`,`swapOpacity`],{waitUntilFirstUpdate:!0})],C.prototype,`setIcon`,1),C=b([it(`wa-icon`)],C);var on=/* @__PURE__ */ t({default:()=>S}),w
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;Object.getOwnPropertyDescriptors||(()=>{var e;if(typeof Reflect<`u`&&Reflect.ownKeys)e=Reflect.ownKeys;else{var t=Object.getOwnPropertySymbols||(e=>[]);e=(e=>Object.getOwnPropertyNames(e).concat(t(e)))}return(t=>{for(var n=e(t),r={},i=n.length|0,a=0;a!==i;){var o=n[a];Object.defineProperty(r,o,{configurable:!0,enumerable:!0,writable:!0,value:Object.getOwnPropertyDescriptor(t,o)}),a=a+1|0}return r})})();function T(e){this.c=e}w=T.prototype,w.toString=(function(){return String.fromCharCode(this.c)});function E(e,t){this.l=e,this.h=t}w=E.prototype,w.toString=(function(){return oa(this.l,this.h)});function sn(e){switch(typeof e){case`string`:return Sl.l();case`number`:return Sn(e)?e<<24>>24===e?xc.l():e<<16>>16===e?Mc.l():gl.l():Cn(e)?hl.l():ml.l();case`boolean`:return Ys.l();case`undefined`:return $i.l();default:return e instanceof E?yl.l():e instanceof T?Qs.l():e&&e.$classData?e.$classData.l():null}}function cn(e){switch(typeof e){case`string`:return`java.lang.String`;case`number`:return Sn(e)?e<<24>>24===e?`java.lang.Byte`:e<<16>>16===e?`java.lang.Short`:`java.lang.Integer`:Cn(e)?`java.lang.Float`:`java.lang.Double`;case`boolean`:return`java.lang.Boolean`;case`undefined`:return`java.lang.Void`;default:return e instanceof E?`java.lang.Long`:e instanceof T?`java.lang.Character`:e&&e.$classData?e.$classData.N:null.g6()}}function ln(e,t){switch(typeof e){case`string`:return xl(e,t);case`number`:return fl(e,t);case`boolean`:return qs(e,t);case`undefined`:return Xi(e,t);default:return e&&e.$classData||e===null?e.c(t):e instanceof E?_l(e.l,e.h,t):e instanceof T?Zs(e.c,t):On.prototype.c.call(e,t)}}function un(e){switch(typeof e){case`string`:return K(e);case`number`:return pl(e);case`boolean`:return Js(e);case`undefined`:return Zi(e);default:return e&&e.$classData||e===null?e.i():e instanceof E?vl(e.l,e.h):e instanceof T?Xs(e.c):On.prototype.i.call(e)}}function dn(e){return e===void 0?`undefined`:e.toString()}function fn(e){if(e===0)throw new bc(`/ by zero`);return e}function pn(e){return e>2147483647?2147483647:e<-2147483648?-2147483648:e|0}function mn(e){return String.fromCharCode(e)}var hn=/* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(8));function gn(e,t,n,r,i){if(e!==n||r-t>>>0>i>>>0)for(var a=0;a<i;a=a+1|0)n[r+a|0]=e[t+a|0];else for(var a=i-1|0;a>=0;a=a-1|0)n[r+a|0]=e[t+a|0]}var _n=0,vn=/* @__PURE__ */ new WeakMap;function yn(e){switch(typeof e){case`string`:return K(e);case`number`:return pl(e);case`bigint`:var t=0;for(e<BigInt(0)&&(e=~e);e!==BigInt(0);)t^=Number(BigInt.asIntN(32,e)),e>>=BigInt(32);return t;case`boolean`:return e?1231:1237;case`undefined`:return 0;case`symbol`:var n=e.description;return n===void 0?0:K(n);default:if(e===null)return 0;var r=vn.get(e);return r===void 0&&(r=_n+1|0,_n=r,vn.set(e,r)),r}}function bn(e){return typeof e==`number`&&e<<24>>24===e&&1/e!=-1/0}function xn(e){return typeof e==`number`&&e<<16>>16===e&&1/e!=-1/0}function Sn(e){return typeof e==`number`&&(e|0)===e&&1/e!=-1/0}function Cn(e){return typeof e==`number`&&(e!==e||Math.fround(e)===e)}function wn(e){return new T(e)}wn(0);function D(e,t){return new E(e,t)}var Tn=D(0,0);function En(e){return e===null?0:e.c}function Dn(e){return e===null?Tn:e}function On(){}w=On.prototype,w.constructor=On;function O(){}O.prototype=w,w.i=(function(){return yn(this)}),w.c=(function(e){return this===e}),w.m=(function(){var e=this.i();return cn(this)+`@`+(e>>>0).toString(16)}),w.toString=(function(){return this.m()});function k(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}w=k.prototype=new O,w.constructor=k,w.T=(function(e,t,n,r){gn(this.a,e,t.a,n,r)}),w.O=(function(){return new k(this.a.slice())});function kn(){}kn.prototype=w;function An(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=!1}else this.a=e}w=An.prototype=new O,w.constructor=An,w.T=(function(e,t,n,r){gn(this.a,e,t.a,n,r)}),w.O=(function(){return new An(this.a.slice())});function jn(e){this.a=typeof e==`number`?new Uint16Array(e):e}w=jn.prototype=new O,w.constructor=jn,w.T=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),w.O=(function(){return new jn(this.a.slice())});function Mn(e){this.a=typeof e==`number`?new Int8Array(e):e}w=Mn.prototype=new O,w.constructor=Mn,w.T=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),w.O=(function(){return new Mn(this.a.slice())});function Nn(e){this.a=typeof e==`number`?new Int16Array(e):e}w=Nn.prototype=new O,w.constructor=Nn,w.T=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),w.O=(function(){return new Nn(this.a.slice())});function Pn(e){this.a=typeof e==`number`?new Int32Array(e):e}w=Pn.prototype=new O,w.constructor=Pn,w.T=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),w.O=(function(){return new Pn(this.a.slice())});function Fn(e){typeof e==`number`?(e<<=1,this.a=new Int32Array(e)):this.a=e}w=Fn.prototype=new O,w.constructor=Fn,w.T=(function(e,t,n,r){t.a.set(this.a.subarray(e<<1,(e+r|0)<<1),n<<1)}),w.O=(function(){return new Fn(this.a.slice())});function In(e){this.a=typeof e==`number`?new Float32Array(e):e}w=In.prototype=new O,w.constructor=In,w.T=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),w.O=(function(){return new In(this.a.slice())});function Ln(e){this.a=typeof e==`number`?new Float64Array(e):e}w=Ln.prototype=new O,w.constructor=Ln,w.T=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),w.O=(function(){return new Ln(this.a.slice())});function A(){this.C=void 0,this.n=null,this.O=null,this.B=null,this.D=0,this.z=null,this.E=``,this.L=void 0,this.A=void 0,this.F=void 0,this.w=void 0,this.J=!1,this.N=``,this.X=!1,this.Y=!1,this.Z=!1,this.I=void 0}w=A.prototype,w.p=(function(e,t,n,r,i){this.n={},this.z=e,this.E=t;var a=this;return this.F=(e=>e===a),this.N=n,this.X=!0,this.I=(e=>!1),r!==void 0&&(this.A=new A().y(this,r,i,t===`J`)),this}),w.i=(function(e,t,n,r){var i=Object.getOwnPropertyNames(n)[0];return this.n=n,this.E=`L`+t+`;`,this.F=(e=>!!e.n[i]),this.J=e===2,this.N=t,this.Y=e===1,this.I=r||(e=>!!(e&&e.$classData&&e.$classData.n[i])),typeof e!=`number`&&(e.prototype.$classData=this),this}),w.y=(function(e,t,n,r,i){t.prototype.$classData=this;var a=`[`+e.E;this.C=t,this.n={r:1,a:1},this.O=e,this.B=e,this.D=1,this.E=a,this.N=a,this.Z=!0;var o=this;return this.F=i||(e=>o===e),this.w=r?(e=>{for(var n=e.length|0,r=new t(n),i=r.a,a=0;a<n;a=a+1|0){var o=e[a];i[a<<1]=o.l,i[(a<<1)+1|0]=o.h}return r}):n?(e=>new t(new n(e))):(e=>new t(e)),this.I=(e=>e instanceof t),this}),w.a=(function(e){function t(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}var n=t.prototype=new kn;n.constructor=t,n.T=(function(e,t,n,r){gn(this.a,e,t.a,n,r)}),n.O=(function(){return new t(this.a.slice())}),n.$classData=this;var r=e.B||e,i=e.D+1,a=`[`+e.E;this.C=t,this.n={r:1,a:1},this.O=e,this.B=r,this.D=i,this.E=a,this.N=a,this.Z=!0;var o=(e=>{var t=e.D;return t===i?r.F(e.B):t>i&&r===j});this.F=o,this.w=(e=>new t(e));var s=this;return this.I=(e=>{var t=e&&e.$classData;return!!t&&(t===s||o(t))}),this}),w.r=(function(){return this.A||=new A().a(this),this.A}),w.l=(function(){return this.L||=new hs(this),this.L}),w.R=(function(e){return this===e||this.F(e)}),w.S=(function(){return this.P?this.P.l():null}),w.Q=(function(){return this.O?this.O.l():null}),w.U=(function(e){if(this===Rn)throw Cc(new wc);return new(this.r()).C(e)});var j=new A;j.n={},j.E=`Ljava.lang.Object;`,j.F=(e=>!e.X),j.N=`java.lang.Object`,j.I=(e=>e!==null),j.A=new A().y(j,k,void 0,!1,(e=>{var t=e.D;return t===1?!e.B.X:t>1})),On.prototype.$classData=j;var Rn=new A().p(void 0,`V`,`void`,void 0,void 0),zn=new A().p(!1,`Z`,`boolean`,An,void 0),Bn=new A().p(0,`C`,`char`,jn,Uint16Array),Vn=new A().p(0,`B`,`byte`,Mn,Int8Array),Hn=new A().p(0,`S`,`short`,Nn,Int16Array),Un=new A().p(0,`I`,`int`,Pn,Int32Array),Wn=new A().p(Tn,`J`,`long`,Fn,Int32Array),Gn=new A().p(0,`F`,`float`,In,Float32Array),Kn=new A().p(0,`D`,`double`,Ln,Float64Array);new Int8Array(new Int32Array([1]).buffer)[0];function qn(e,t,n){for(var r=new Int32Array(e),i=t.length|0,a=0,o=0,s=0,c=0;o!==i;){var l=t.charCodeAt(o);l<80?c=(c|l-48)<<5:(c|=l-93,a=(a&n)+c|0,r[s]=a,s=s+1|0,c=0),o=o+1|0}return r}function Jn(e,t){return new Pn(qn(e,t,-1))}function Yn(e){return sn(e).cd()+`@`+yn(e)}function Xn(e){var t=e.cj;return t===void 0?Yn(e):t}function Zn(){Qn=this,$n().fZ(new G((e=>void 0)),xa().dc,!0)}w=Zn.prototype=new O,w.constructor=Zn,w.fZ=(function(e,t,n){return new Vs(e,n,t,this)}),new A().i(Zn,`com.raquo.airstream.core.Observer$`,{b8:1});var Qn;function $n(){return Qn||=new Zn,Qn}function er(e){this.bJ=null,this.ck=null,this.bK=0,this.bJ=e,this.ck=void 0;var t=gr().bc();this.bK=t===void 0?1:1+t.bK|0,ir().bg===-1||this.bK>ir().bg?ss().cg(new ul(this,ir().bg)):cr().I?cr().ae.push(this)|0:gr().c8(this)}w=er.prototype=new O,w.constructor=er;var tr=new A().i(er,`com.raquo.airstream.core.Transaction`,{bb:1});function nr(){this.bg=0,this.cl=null,rr=this,this.bg=1e3,this.cl=new G((e=>{throw V(new H,`Attempted to run Transaction `+e+` after it was already executed.`)}))}w=nr.prototype=new O,w.constructor=nr,w.dD=(function(e){try{e.bJ.f(e);var t=e.ck;if(t!==void 0)for(;t.g8();)t.g5().ga(e)}catch(e){var n=e instanceof zo?e:new X(e);ss().cg(n)}}),new A().i(nr,`com.raquo.airstream.core.Transaction$`,{bc:1});var rr;function ir(){return rr||=new nr,rr}function ar(e){e.bh.length|0?new er(new G((t=>{for(;(e.bh.length|0)>0;){var n=e.bh.shift();try{n.f(t)}catch(e){var r=e instanceof zo?e:new X(e);ss().cg(r)}}for(;(e.ae.length|0)>0;){var i=e.ae.shift();gr().c8(i)}}))):(e.ae.length|0)>0&&new er(new G((t=>{for(;(e.ae.length|0)>0;)gr().c8(e.ae.shift())})))}function or(){this.I=!1,this.bh=null,this.ae=null,sr=this,this.I=!1,this.bh=Fr().ar(I().ac(new(pa.r()).C([]))),this.ae=Fr().ar(I().ac(new(tr.r()).C([])))}w=or.prototype=new O,w.constructor=or,new A().i(or,`com.raquo.airstream.core.Transaction$onStart$`,{bd:1});var sr;function cr(){return sr||=new or,sr}function lr(e,t){return e.af.get(t)}function ur(e,t){e.bi.unshift(t)}function dr(e){return e.bi.shift()}function fr(e,t,n){var r=lr(e,t),i=r===void 0,a=r===void 0?Fr().ar(I().ac(new(tr.r()).C([]))):r;a.push(n),i&&e.af.set(t,a)}function pr(e,t){var n=lr(e,t),r=n===void 0||(n.length|0)>0?n:void 0;if(r!==void 0){var i=r.shift();return r.length|0||e.af.delete(t),i}}function mr(){this.bi=null,this.af=null,hr=this,this.bi=Fr().ar(I().ac(new(tr.r()).C([]))),this.af=/* @__PURE__ */ new Map}w=mr.prototype=new O,w.constructor=mr,w.c8=(function(e){var t=this.bc();t===void 0?(ur(this,e),ir().dD(e),this.eK(e)):fr(this,t,e)}),w.eK=(function(e){for(var t=e;;){var n=this.bc(),r=t;if(!(n!==void 0&&F().z(r,n)))throw V(new H,`Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.`);this.fy(t),t.bJ=ir().cl;var i=this.bc();if(F().z(i,void 0)){if((this.af.size|0)>0){var a=new ts(0);throw this.af.forEach((e=>((t,n)=>{e.aY=e.aY+(t.length|0)|0}))(a)),V(new H,`Transaction queue error: Stack cleared, but a total of `+a.aY+` children for `+(this.af.size|0)+` transactions remain. This is a bug in Airstream.`)}return}ir().dD(i),t=i}}),w.fy=(function(e){for(var t=e;;){var n=pr(this,t);if(F().z(n,void 0)){dr(this);var r=this.bc();if(!F().z(r,void 0))t=r;else return}else{ur(this,n);return}}}),w.bc=(function(){return this.bi[0]}),new A().i(mr,`com.raquo.airstream.core.Transaction$pendingTransactions$`,{be:1});var hr;function gr(){return hr||=new mr,hr}function _r(e,t){var n=e.U.indexOf(t)|0;if(n!==-1)e.U.splice(n,1),e.w.b()||t.dU();else throw V(new H,`Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?`)}function vr(e){for(;(e.bj.length|0)>0;)_r(e,e.bj.shift())}function yr(e){this.cm=null,this.U=null,this.ax=!1,this.bj=null,this.w=null,this.ay=0,this.cm=e,this.U=Fr().ar(I().ac(new(xr.r()).C([]))),this.ax=!0,this.bj=Fr().ar(I().ac(new(xr.r()).C([]))),this.w=q(),this.ay=0}w=yr.prototype=new O,w.constructor=yr,w.dx=(function(){if(this.w.b()){var e=cr(),t=(()=>{var e=new to(this.cm);this.w=new J(e),this.ax=!1,this.ay=0;for(var t=0,n=this.U.length|0;t<n;){var r=t+this.ay|0;this.U[r].dT(e),t=1+t|0}vr(this),this.ax=!0,this.ay=0});if(cr(),e.I)t();else{e.I=!0;try{t()}finally{e.I=!1,ar(e)}}}else throw V(new H,`Can not activate `+this+`: it is already active`)}),w.eC=(function(){if(this.w.b())throw V(new H,`Can not deactivate DynamicOwner: it is not active`);this.ax=!1;for(var e=this.U,t=0,n=e.length|0;t<n;)e[t].dU(),t=1+t|0;vr(this);var r=this.w;r.b()||r.r().fj(),vr(this),this.ax=!0,this.w=q()}),w.en=(function(e,t){t?(this.ay=1+this.ay|0,this.U.unshift(e)):this.U.push(e);var n=this.w;if(!n.b()){var r=n.r();e.dT(r)}}),w.fE=(function(e){this.ax?_r(this,e):this.bj.push(e)}),new A().i(yr,`com.raquo.airstream.ownership.DynamicOwner`,{bf:1});function br(e,t,n){this.bk=null,this.cn=null,this.bl=null,this.bk=e,this.cn=t,this.bl=q(),e.en(this,n)}w=br.prototype=new O,w.constructor=br,w.bD=(function(){this.bk.fE(this)}),w.dT=(function(e){var t=cr(),n=(()=>{this.bl=this.cn.f(e)});if(cr(),t.I)n();else{t.I=!0;try{n()}finally{t.I=!1,ar(t)}}}),w.dU=(function(){var e=this.bl;e.b()||(e.r().bD(),this.bl=q())});var xr=new A().i(br,`com.raquo.airstream.ownership.DynamicSubscription`,{bg:1});function Sr(){}w=Sr.prototype=new O,w.constructor=Sr,w.fX=(function(e,t,n){return new br(e,new G((e=>new J(t.f(e)))),n)}),w.fQ=(function(e,t,n){return new br(e,new G((e=>(t.f(e),q()))),n)}),new A().i(Sr,`com.raquo.airstream.ownership.DynamicSubscription$`,{bh:1});var Cr;function wr(){return Cr||=new Sr,Cr}function Tr(e){e.az=Fr().ar(I().ac(new(jr.r()).C([])))}function Er(e){for(var t=e.az,n=0,r=t.length|0;n<r;)kr(t[n]),n=1+n|0;e.az.length=0}function Dr(e,t){var n=e.az.indexOf(t)|0;if(n!==-1)e.az.splice(n,1);else throw V(new H,`Can not remove Subscription from Owner: subscription not found.`)}function Or(e,t){e.az.push(t)}function kr(e){if(!e.bM)e.cp.as(),e.bM=!0;else throw V(new H,`Can not kill Subscription: it was already killed.`)}function Ar(e,t){this.cq=null,this.cp=null,this.bM=!1,this.cq=e,this.cp=t,this.bM=!1,e.fv(this)}w=Ar.prototype=new O,w.constructor=Ar,w.bD=(function(){kr(this),Dr(this.cq,this)});var jr=new A().i(Ar,`com.raquo.airstream.ownership.Subscription`,{bk:1});function Mr(e,t){this.cr=null,this.cs=null,this.V=null,this.ag=!1,this.cr=e,this.cs=t,this.V=q(),this.ag=!1}w=Mr.prototype=new O,w.constructor=Mr,w.ff=(function(){var e=this.V;return!e.b()&&!e.r().bk.w.b()}),w.fK=(function(e){if(this.ag)throw V(new H,`Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var t=this.V;if(t.b())var n=!1;else var r=t.r().bk,n=e===null?r===null:e===r;if(!n){this.ff()&&!e.w.b()&&(this.ag=!0);var i=this.V;i.b()||(i.r().bD(),this.V=q());var a=wr().fX(e,new G((e=>(this.ag||this.cr.as(),new Ar(e,new lc((()=>{this.ag||this.cs.as()})))))),!1);this.V=new J(a),this.ag=!1}}),w.ey=(function(){if(this.ag)throw V(new H,`Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var e=this.V;e.b()||e.r().bD(),this.V=q()}),new A().i(Mr,`com.raquo.airstream.ownership.TransferableSubscription`,{bl:1});function Nr(){}w=Nr.prototype=new O,w.constructor=Nr,w.ar=(function(e){return[...Xa().fV(e)]}),new A().i(Nr,`com.raquo.ew.JsArray$`,{bm:1});var Pr;function Fr(){return Pr||=new Nr,Pr}function Ir(){this.ct=null,Lr=this,document.createElement(`template`),this.eB(W().bN.fR().fS()),this.ct=/* @__PURE__ */ RegExp(` `,`g`)}w=Ir.prototype=new O,w.constructor=Ir,w.er=(function(e,t){try{return e.appendChild(t),!0}catch(e){var n=e instanceof zo?e:new X(e);if(n instanceof X&&n.K instanceof DOMException)return!1;throw n instanceof X?n.K:n}}),w.fg=(function(e,t){for(var n=e;;){if(n.parentNode!==null)var r=n.parentNode;else var i=n.host,r=i===void 0?null:i;if(r===null)return!1;if(F().z(t,r))return!0;n=r}}),w.eA=(function(e){return document.createElement(e.bT)}),w.f5=(function(e,t){var n=this.f6(e,t);return n===void 0?void 0:t.bO.by(n)}),w.f6=(function(e,t){var n=e.Q.getAttributeNS(null,t.aM);return n===null?void 0:n}),w.e0=(function(e,t,n){this.fJ(e,t,t.bO.bB(n))}),w.fJ=(function(e,t,n){n===null?this.fD(e,t):e.Q.setAttribute(t.aM,n)}),w.fD=(function(e,t){e.Q.removeAttribute(t.aM)}),w.eB=(function(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e.cK)}),w.f9=(function(e,t){var n=this.fa(e,t);return n===void 0?void 0:t.bP.by(n)}),w.fa=(function(e,t){var n=e.cf(),r=t.bo,i=n.getAttributeNS(r.b()?null:r.r(),t.bQ);return i===null?void 0:i}),w.fL=(function(e,t,n){this.fM(e,t,t.bP.bB(n))}),w.fM=(function(e,t,n){if(n===null)this.fF(e,t);else{var r=t.bo;if(r.b())e.cf().setAttribute(t.bn,n);else{var i=r.r();e.cf().setAttributeNS(i,t.bn,n)}}}),w.fF=(function(e,t){var n=e.cf(),r=t.bo;n.removeAttributeNS(r.b()?null:r.r(),t.bQ)}),w.eE=(function(e,t){for(var n=t,r=e;;){if(r===null)return n;var i=r.parentNode,a=new Ju(this.eD(r),n);r=i,n=a}}),w.eD=(function(e){if(e instanceof HTMLElement){var t=e.id;if(Oa(),t!==``)var n=`#`+t;else var r=e.className,n=(Oa(),r===``?``:`.`+r.replace(this.ct,`.`));return e.tagName.toLowerCase()+n}return e.nodeName}),new A().i(Ir,`com.raquo.laminar.DomApi$`,{bn:1});var Lr;function Rr(){return Lr||=new Ir,Lr}function zr(e){$n(),ss()}function Br(e){e.e4=ri()}function Vr(e){Hr(e,new G((e=>{e.cC.Q.focus()})))}function Hr(e,t){return new co(new G((e=>{var n=new es(!e.aA.w.b()),r=new G((e=>{n.bv?n.bv=!1:t.f(e)}));wr().fQ(e.aA,new G((e=>(t=>{r.f(new ei(e,t))}))(e)),!1)})),ri())}function Ur(){this.P=null,this.cA=null,this.cB=!1,this.bm=null,Wr=this,this.P=new ro(M()),new ro(M()),new ro(M()),this.bm=new no}w=Ur.prototype=new O,w.constructor=Ur,w.ej=(function(){return this.cB||=(this.cA=new io(this),!0),this.cA}),new A().i(Ur,`com.raquo.laminar.codecs.package$`,{bv:1});var Wr;function M(){return Wr||=new Ur,Wr}function Gr(e){e.e5=Kr(e,`class`,` `)}function Kr(e,t,n){var r=new R(t,M().P);return new ao(r.aM,new G((e=>{var t=Rr().f5(e,r);return t===void 0?``:t})),new uc(((e,t)=>{Rr().e0(e,r,t)})),n)}function qr(e){e.e3=Jr(e,`class`,` `)}function Jr(e,t,n){var r=new oo(t,M().P,q());return new ao(r.bn,new G((e=>{var t=Rr().f9(e,r);return t===void 0?``:t})),new uc(((e,t)=>{Rr().fL(e,r,t)})),n)}function Yr(){}w=Yr.prototype=new O,w.constructor=Yr;function Xr(){}Xr.prototype=w;function Zr(){this.e6=null,this.e7=null,this.e8=null,this.e9=null,this.e6=`http://www.w3.org/2000/svg`,this.e7=`http://www.w3.org/1999/xlink`,this.e8=`http://www.w3.org/XML/1998/namespace`,this.e9=`http://www.w3.org/2000/xmlns/`}w=Zr.prototype=new O,w.constructor=Zr,w.fq=(function(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`xlink`:return`http://www.w3.org/1999/xlink`;case`xml`:return`http://www.w3.org/XML/1998/namespace`;case`xmlns`:return`http://www.w3.org/2000/xmlns/`;default:throw new Ic(e)}}),new A().i(Zr,`com.raquo.laminar.keys.SvgAttr$`,{bL:1});var Qr;function $r(){return Qr||=new Zr,Qr}function ei(e,t){this.cC=null,this.cC=e}w=ei.prototype=new O,w.constructor=ei,new A().i(ei,`com.raquo.laminar.lifecycle.MountContext`,{bM:1});function ti(){this.ea=null,ni=this,this.ea=new so}w=ti.prototype=new O,w.constructor=ti,new A().i(ti,`com.raquo.laminar.modifiers.Modifier$`,{bO:1});var ni;function ri(){return ni||=new ti,ni}function ii(){}w=ii.prototype=new O,w.constructor=ii,w.dz=(function(e,t,n){var r=new J(e);pc(t,r),n!==void 0&&n.g9(e,t);var i=Rr().er(e.ce(),t.Q);return i&&mc(t,r),i}),new A().i(ii,`com.raquo.laminar.nodes.ParentNode$`,{bT:1});var ai;function oi(){return ai||=new ii,ai}function si(){}w=si.prototype=new O,w.constructor=si,w.ep=(function(){li().eR(),li().eS(),li().eT(),li().eU(),li().eV(),li().eW(),li().eX(),li().eY()}),w.eR=(function(){var e=document.querySelector(`#example1`);va().a7(e).b()||(W(),new ls(e,ps().a8(new Q([new U((e=>e.aK().p(`https://webawesome.com/`))),new U((e=>e.bH().p(.5)))]),new Q([]))))}),w.eS=(function(){var e=document.querySelector(`#example2`);va().a7(e).b()||(W(),new ls(e,ps().a8(new Q([new U((e=>e.fk().p(`Theme preview`))),new U((e=>e.fp().p(`theme-preview`))),new U((e=>e.g0().p(!0))),new U((e=>e.e1().p(`<html><body style='font-family: sans-serif'><h1>Theme preview</h1><p>This frame receives theme changes from its parent.</p></body></html>`)))]),new Q([]))))}),w.eT=(function(){var e=document.querySelector(`#example3`);va().a7(e).b()||(W(),new ls(e,ps().a8(new Q([new U((e=>e.aK().p(`https://example.com/`)))]),new Q([]))))}),w.eU=(function(){var e=document.querySelector(`#example4`);va().a7(e).b()||(W(),new ls(e,ps().a8(new Q([new U((e=>e.aK().p(`https://example.com/`)))]),new Q([W().bN.fP().p(`aspect-ratio: 4/3;`)]))))}),w.eV=(function(){var e=document.querySelector(`#example5`);va().a7(e).b()||(W(),new ls(e,ps().a8(new Q([new U((e=>e.e1().p(`<html><body><h1>Hello, World!</h1><p>This is inline content.</p></body></html>`)))]),new Q([]))))}),w.eW=(function(){var e=document.querySelector(`#example6`);va().a7(e).b()||(W(),new ls(e,ps().a8(new Q([new U((e=>e.aK().p(`https://webawesome.com/`))),new U((e=>e.bH().p(.5))),new U((e=>e.g4().p(`50% 0.75 100%`)))]),new Q([]))))}),w.eX=(function(){var e=document.querySelector(`#example7`);va().a7(e).b()||(W(),new ls(e,ps().a8(new Q([new U((e=>e.aK().p(`https://webawesome.com/`))),new U((e=>e.g1().p(!0))),new U((e=>e.bH().p(.5)))]),new Q([]))))}),w.eY=(function(){var e=document.querySelector(`#example8`);va().a7(e).b()||(W(),new ls(e,ps().a8(new Q([new U((e=>e.aK().p(`https://webawesome.com/`))),new U((e=>e.bH().p(.5))),new U((e=>e.g2().p(!0)))]),new Q([]))))}),new A().i(si,`examples.zoomableFrame.Main$package$`,{c0:1});var ci;function li(){return ci||=new si,ci}function ui(e){try{li().ep()}catch(e){throw e}}function di(){}w=di.prototype=new O,w.constructor=di,w.fI=(function(e,t){var n=hn;n.setFloat64(0,e,!0);var r=n.getInt32(0,!0)|0,i=n.getInt32(4,!0)|0,a=2047&(i>>>20|0),o=a+t|0,s=-2146435073&i,c=0,l=0;if(c=r,l=s,!((a-1|0)>>>0<=2045)){var u=2147483647&i;if((r|u)===0||u>=2146435072)return e;var d=1048575&i,f=d===0?32+Math.clz32(r)|0:Math.clz32(d);o=o-(f-12|0)|0;var p=-2147483648&i,m=f-11|0,ee=32&m?0:r<<m,h=p|1048575&(32&m?r<<m:(r>>>1|0)>>>~m|0|i<<m);c=ee,l=h}if((o-1|0)>>>0<=2045){var g=o,te=c,ne=l,re=g<<20|ne,_=hn;return _.setInt32(0,te,!0),_.setInt32(4,re,!0),+_.getFloat64(0,!0)}if((53+o|0)>>>0<=53){var ie=54+o|0,ae=c,oe=l,v=ie<<20|oe,se=hn;return se.setInt32(0,ae,!0),se.setInt32(4,v,!0),5551115123125783e-32*se.getFloat64(0,!0)}var ce=2047&~(t>>31),le=-2147483648&i,ue=ce<<20|le,de=hn;return de.setInt32(0,0,!0),de.setInt32(4,ue,!0),+de.getFloat64(0,!0)}),new A().i(di,`java.lang.Math$`,{ci:1});var fi;function pi(){return fi||=new di,fi}function mi(e,t){for(var n=N().N(`^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$`),r=[],i=0;i<(t.length|0);){var a=t[i];if(a!==``){var o=n.exec(a);if(o!==null){var s=hi(e,o[1]),c=s[0],l=s[1],u=o[2],d=o[3],f=parseInt(d),p=o[4];r.push(new Po(c,l,u,f|0,p===void 0?-1:parseInt(p)|0))}else r.push(new Po(`<jscode>`,a,null,-1,-1))|0}i=1+i|0}var m=r.length|0,ee=new(Fo.r()).C(m);for(i=0;i<m;)ee.a[i]=r[i],i=1+i|0;return ee}function hi(e,t){var n=N().N(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$`),r=N().N(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$`),i=N().N(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$`),a=N().N(`^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$`),o=N().N(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$`),s=n.exec(t),c=s===null?r.exec(t):s;if(c!==null)return[gi(e,c[1]),Ci(e,c[2])];var l=i.exec(t),u=l===null?a.exec(t):l;if(u!==null)return[gi(e,u[1]),`<init>`];var d=o.exec(t);return d===null?[`<jscode>`,t]:[gi(e,d[1]),`<clinit>`]}function gi(e,t){var n=vi(e);if(Yi().c5.call(n,t))var r=vi(e)[t];else var r=Pi(e,0,t);return r.split(`_`).join(`.`).split(`＿`).join(`_`)}function _i(e){if(!((1&e.B)<<24>>24)){var t={};t.O=`java_lang_Object`,t.T=`java_lang_String`;for(var n=0;n<=22;){if(n>=2){var r=`T`+n;t[r]=`scala_Tuple`+n}var i=`F`+n;t[i]=`scala_Function`+n,n=1+n|0}e.c2=t,e.B=(1|e.B)<<24>>24}return e.c2}function vi(e){return(1&e.B)<<24>>24?e.c2:_i(e)}function yi(e){if(!((2&e.B)<<24>>24)){var t={};t.sjsr_=`scala_scalajs_runtime_`,t.sjs_=`scala_scalajs_`,t.sci_=`scala_collection_immutable_`,t.scm_=`scala_collection_mutable_`,t.scg_=`scala_collection_generic_`,t.sc_=`scala_collection_`,t.sr_=`scala_runtime_`,t.s_=`scala_`,t.jl_=`java_lang_`,t.ju_=`java_util_`,e.c3=t,e.B=(2|e.B)<<24>>24}return e.c3}function bi(e){return(2&e.B)<<24>>24?e.c3:yi(e)}function xi(e){return(4&e.B)<<24>>24||(e.c1=Object.keys(bi(e)),e.B=(4|e.B)<<24>>24),e.c1}function Si(e){return(4&e.B)<<24>>24?e.c1:xi(e)}function Ci(e,t){if(t.startsWith(`init___`))return`<init>`;var n=t.indexOf(`__`)|0;return n<0?t:t.substring(0,n)}function wi(e,t){return t?t.arguments&&t.stack?Ti(e,t):t.stack&&t.sourceURL?Oi(e,t):t.stack&&t.number?Di(e,t):t.stack&&t.fileName?Ei(e,t):t.message&&t[`opera#sourceloc`]?t.stacktrace?t.message.indexOf(`
`)>-1&&t.message.split(`
`).length>t.stacktrace.split(`
`).length?ki(e,t):Ai(e,t):ki(e,t):t.message&&t.stack&&t.stacktrace?t.stacktrace.indexOf(`called from line`)<0?ji(e,t):Mi(e,t):t.stack&&!t.fileName?Ti(e,t):Ni(e,t):[]}function Ti(e,t){return(t.stack+`
`).replace(N().N(`^[\\s\\S]+?\\s+at\\s+`),` at `).replace(N().v(`^\\s+(at eval )?at\\s+`,`gm`),``).replace(N().v(`^([^\\(]+?)([\\n])`,`gm`),`{anonymous}() ($1)$2`).replace(N().v(`^Object.<anonymous>\\s*\\(([^\\)]+)\\)`,`gm`),`{anonymous}() ($1)`).replace(N().v(`^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(0,-1)}function Ei(e,t){return t.stack.replace(N().v(`(?:\\n@:0)?\\s+$`,`m`),``).replace(N().v(`^(?:\\((\\S*)\\))?@`,`gm`),`{anonymous}($1)@`).split(`
`)}function Di(e,t){return t.stack.replace(N().v(`^\\s*at\\s+(.*)$`,`gm`),`$1`).replace(N().v(`^Anonymous function\\s+`,`gm`),`{anonymous}() `).replace(N().v(`^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(1)}function Oi(e,t){return t.stack.replace(N().v(`\\[native code\\]\\n`,`m`),``).replace(N().v(`^(?=\\w+Error\\:).*$\\n`,`m`),``).replace(N().v(`^@`,`gm`),`{anonymous}()@`).split(`
`)}function ki(e,t){for(var n=N().v(`Line (\\d+).*script (?:in )?(\\S+)`,`i`),r=t.message.split(`
`),i=[],a=2,o=r.length|0;a<o;){var s=n.exec(r[a]);s!==null&&i.push(`{anonymous}()@`+s[2]+`:`+s[1])|0,a=2+a|0}return i}function Ai(e,t){for(var n=N().v(`Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$`,`i`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[3],l=c===void 0?`{anonymous}`:c;i.push(l+`()@`+s[2]+`:`+s[1])|0}a=2+a|0}return i}function ji(e,t){for(var n=N().N(`^(.*)@(.+):(\\d+)$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[1],l=c===void 0?`global code`:c+`()`;i.push(l+`@`+s[2]+`:`+s[3])|0}a=1+a|0}return i}function Mi(e,t){for(var n=N().N(`^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[4]+`:`+s[1]+`:`+s[2],l=s[2],u=(l===void 0?`global code`:l).replace(N().N(`<anonymous function: (\\S+)>`),`$1`).replace(N().N(`<anonymous function>`),`{anonymous}`);i.push(u+`@`+c)|0}a=2+a|0}return i}function Ni(e,t){return[]}function Pi(e,t,n){for(;;)if(t<(Si(e).length|0)){var r=Si(e)[t];if(n.startsWith(r))return``+bi(e)[r]+n.substring(r.length);t=1+t|0}else return n.startsWith(`L`)?n.substring(1):n}function Fi(){this.c2=null,this.c3=null,this.c1=null,this.B=0}w=Fi.prototype=new O,w.constructor=Fi,w.eZ=(function(e){return mi(this,wi(this,e))}),new A().i(Fi,`java.lang.StackTrace$`,{cn:1});var Ii;function Li(){return Ii||=new Fi,Ii}function Ri(){}w=Ri.prototype=new O,w.constructor=Ri,w.N=(function(e){return new RegExp(e)}),w.v=(function(e,t){return new RegExp(e,t)}),new A().i(Ri,`java.lang.StackTrace$StringRE$`,{co:1});var zi;function N(){return zi||=new Ri,zi}function Bi(){this.d4=null,this.eb=null,Vi=this,this.d4=new Hl(!1),this.eb=new Hl(!0)}w=Bi.prototype=new O,w.constructor=Bi,new A().i(Bi,`java.lang.System$Streams$`,{cs:1});var Vi;function Hi(){return Vi||=new Bi,Vi}function Ui(e){var t={};return t[`java.version`]=`1.8`,t[`java.vm.specification.version`]=`1.8`,t[`java.vm.specification.vendor`]=`Oracle Corporation`,t[`java.vm.specification.name`]=`Java Virtual Machine Specification`,t[`java.vm.name`]=`Scala.js`,t[`java.vm.version`]=`1.22.0`,t[`java.specification.version`]=`1.8`,t[`java.specification.vendor`]=`Oracle Corporation`,t[`java.specification.name`]=`Java Platform API Specification`,t[`file.separator`]=`/`,t[`path.separator`]=`:`,t[`line.separator`]=`
`,t}function Wi(){this.c4=null,this.d5=null,Gi=this,this.c4=Ui(this),this.d5=null}w=Wi.prototype=new O,w.constructor=Wi,w.dQ=(function(e,t){if(this.c4!==null){var n=this.c4;return Yi().c5.call(n,e)?n[e]:t}return this.d5.dQ(e,t)}),new A().i(Wi,`java.lang.System$SystemProperties$`,{ct:1});var Gi;function Ki(){return Gi||=new Wi,Gi}function qi(){this.c5=null,Ji=this,this.c5=Object.prototype.hasOwnProperty}w=qi.prototype=new O,w.constructor=qi,new A().i(qi,`java.lang.Utils$Cache$`,{cv:1});var Ji;function Yi(){return Ji||=new qi,Ji}function Xi(e,t){return e===t}function Zi(e){return 0}function Qi(e,t){return!!(e&&e.$classData&&e.$classData.D===t&&e.$classData.B.n.ai)}var $i=new A().i(0,`java.lang.Void`,{ai:1},(e=>e===void 0));function ea(e,t){throw Sc(new wc,`argument type mismatch`)}function ta(){}w=ta.prototype=new O,w.constructor=ta,w.b9=(function(e){return e instanceof k||e instanceof An||e instanceof jn||e instanceof Mn||e instanceof Nn||e instanceof Pn?e.a.length:e instanceof Fn?e.a.length>>>1|0:(e instanceof In||e instanceof Ln||ea(this,e),e.a.length)}),new A().i(ta,`java.lang.reflect.Array$`,{cw:1});var na;function ra(){return na||=new ta,na}function ia(){}w=ia.prototype=new O,w.constructor=ia,w.ew=(function(e,t){for(var n=0,r=e.a.length;;)if(n===r)return~n;else{var i=(n+r|0)>>>1|0,a=e.a[i],o=t===a?0:t<a?-1:1;if(o<0){r=i;continue}if(o!==0){n=1+i|0;continue}return i}}),w.dI=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length>>>1|0;if((t.a.length>>>1|0)!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a,o=i<<1,s=a[o],c=a[o+1|0],l=r,u=t.a,d=l<<1,f=u[d],p=u[d+1|0];if((s^f|c^p)!==0)return!1;r=1+r|0}return!0}),w.dH=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),w.dJ=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),w.dG=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),w.dF=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),w.dK=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),new A().i(ia,`java.util.Arrays$`,{cx:1});var aa;function P(){return aa||=new ia,aa}function oa(e,t){return la().e2(e,t)}function sa(){}w=sa.prototype=new O,w.constructor=sa,w.e2=(function(e,t){if(t===e>>31)return``+e;if(-2097152&(t^t>>10)){var n=t>>31,r=e^n,i=r-n|0,a=4294967296*(((t^n)+(i>>>0<r>>>0|0)|0)>>>0)+(i>>>0),o=+Math.floor(1.0000000000000265e-9*a),s=i-Math.imul(1e9,o|0)|0;s<0&&(--o,s=1e9+s|0);var c=``+s,l=o,u=c.length,d=``+l+`000000000`.substring(u)+c;return t<0?`-`+d:d}return``+(4294967296*t+(e>>>0))}),w.dP=(function(e){if(e<-0x8000000000000000)return D(0,-2147483648);if(e>=0x8000000000000000)return D(-1,2147483647);var t=e|0,n=23283064365386963e-26*e|0;return D(t,e<0&&t!==0?n-1|0:n)}),w.eI=(function(e,t,n,r){var i=t>>31,a=e^i,o=a-i|0,s=(t^i)+(o>>>0<a>>>0|0)|0,c=r>>31,l=n^c,u=l-c|0,d=(r^c)+(u>>>0<l>>>0|0)|0;if(d|-2097152&u){var f=(4294967296*(s>>>0)+(o>>>0))/(4294967296*(d>>>0)+(u>>>0))+.00390625,p=f|0,m=23283064365386963e-26*f|0,ee=65535&u,h=u>>>16|0,g=65535&p,te=p>>>16|0,ne=Math.imul(ee,g),re=Math.imul(h,g),_=Math.imul(ee,te),ie=ne+((re+_|0)<<16)|0,ae=(ne>>>16|0)+_|0;if(((s-((((Math.imul(u,m)+Math.imul(d,p)|0)+Math.imul(h,te)|0)+(ae>>>16|0)|0)+(((65535&ae)+re|0)>>>16|0)|0)|0)-((o-ie|0)>>>0>o>>>0|0)|0)<0)var oe=p-1|0,v=(m-1|0)+(oe!==-1|0)|0,se=oe,ce=v;else var se=p,ce=m}else var le=(s>>>0)/(fn(u)>>>0)|0,se=(4294967296*(s-Math.imul(u,le)|0)+(o>>>0))/u|0,ce=le;if((t^r)>=0)return D(se,ce);var ue=-se|0;return D(ue,(-ce|0)-(ue!==0|0)|0)}),w.eJ=(function(e,t,n,r){if(!(r|-2097152&n)){var i=(t>>>0)/(fn(n)>>>0)|0;return D((4294967296*(t-Math.imul(n,i)|0)+(e>>>0))/n|0,i)}if(r>=0){var a=(4294967296*(t>>>0)+(e>>>0))/(4294967296*(r>>>0)+(n>>>0))+.00390625,o=a|0,s=23283064365386963e-26*a|0,c=65535&n,l=n>>>16|0,u=65535&o,d=o>>>16|0,f=Math.imul(c,u),p=Math.imul(l,u),m=Math.imul(c,d),ee=f+((p+m|0)<<16)|0,h=(f>>>16|0)+m|0;if(((t-((((Math.imul(n,s)+Math.imul(r,o)|0)+Math.imul(l,d)|0)+(h>>>16|0)|0)+(((65535&h)+p|0)>>>16|0)|0)|0)-((e-ee|0)>>>0>e>>>0|0)|0)<0){var g=o-1|0;return D(g,(s-1|0)+(g!==-1|0)|0)}return D(o,s)}return(t===r?e>>>0<n>>>0:t>>>0<r>>>0)?D(0,0):D(1,0)}),w.fB=(function(e,t,n,r){var i=t>>31,a=e^i,o=a-i|0,s=(t^i)+(o>>>0<a>>>0|0)|0,c=r>>31,l=n^c,u=l-c|0,d=(r^c)+(u>>>0<l>>>0|0)|0;if(d|-2097152&u){var f=(4294967296*(s>>>0)+(o>>>0))/(4294967296*(d>>>0)+(u>>>0))+.00390625,p=f|0,m=23283064365386963e-26*f|0,ee=65535&u,h=u>>>16|0,g=65535&p,te=p>>>16|0,ne=Math.imul(ee,g),re=Math.imul(h,g),_=Math.imul(ee,te),ie=ne+((re+_|0)<<16)|0,ae=(ne>>>16|0)+_|0,oe=(((Math.imul(u,m)+Math.imul(d,p)|0)+Math.imul(h,te)|0)+(ae>>>16|0)|0)+(((65535&ae)+re|0)>>>16|0)|0,v=o-ie|0,se=(s-oe|0)-(v>>>0>o>>>0|0)|0;if(se<0)var ce=v+u|0,le=(se+d|0)+(ce>>>0<v>>>0|0)|0,ue=ce,de=le;else var ue=v,de=se}else var fe=(4294967296*((s>>>0)%(fn(u)>>>0)|0)+(o>>>0))/u|0,ue=o-Math.imul(u,fe)|0,de=0;if(t<0){var pe=-ue|0;return D(pe,(-de|0)-(pe!==0|0)|0)}return D(ue,de)}),w.fC=(function(e,t,n,r){if(!(r|-2097152&n)){var i=(4294967296*((t>>>0)%(fn(n)>>>0)|0)+(e>>>0))/n|0;return D(e-Math.imul(n,i)|0,0)}if(r>=0){var a=(4294967296*(t>>>0)+(e>>>0))/(4294967296*(r>>>0)+(n>>>0))+.00390625,o=a|0,s=23283064365386963e-26*a|0,c=65535&n,l=n>>>16|0,u=65535&o,d=o>>>16|0,f=Math.imul(c,u),p=Math.imul(l,u),m=Math.imul(c,d),ee=f+((p+m|0)<<16)|0,h=(f>>>16|0)+m|0,g=(((Math.imul(n,s)+Math.imul(r,o)|0)+Math.imul(l,d)|0)+(h>>>16|0)|0)+(((65535&h)+p|0)>>>16|0)|0,te=e-ee|0,ne=(t-g|0)-(te>>>0>e>>>0|0)|0;if(ne<0){var re=te+n|0;return D(re,(ne+r|0)+(re>>>0<te>>>0|0)|0)}return D(te,ne)}if(t===r?e>>>0<n>>>0:t>>>0<r>>>0)return D(e,t);var _=e-n|0;return D(_,(t-r|0)-(_>>>0>e>>>0|0)|0)}),new A().i(sa,`org.scalajs.linker.runtime.RuntimeLong$`,{cz:1});var ca;function la(){return ca||=new sa,ca}function ua(){}w=ua.prototype=new O,w.constructor=ua,w.dM=(function(e,t){var n=e.s();if(n>-1){for(var r=t.dS(n),i=e.e(),a=0;a<n;)I().dB(r,a,i.h()),a=1+a|0;return r}var o=null,s=t.dY(),c=s===Bn.l();o=[];for(var l=e.e();l.l();){var u=l.h(),d=c?En(u):u===null?Pa().fH(s):u;o.push(d)}return Pa().fG(s===Rn.l()?$i.l():s===La.l()||s===Ms.l()?j.l():s,o)}),w.dL=(function(e,t){if(e===t)return!0;if(e.a.length!==t.a.length)return!1;for(var n=e.a.length,r=0;r<n;){if(!F().z(e.a[r],t.a[r]))return!1;r=1+r|0}return!0}),new A().i(ua,`scala.Array$`,{cA:1});var da;function fa(){return da||=new ua,da}var pa=new A().i(1,`scala.Function1`,{e:1});function ma(){}w=ma.prototype=new O,w.constructor=ma;function ha(){}ha.prototype=w;function ga(){}w=ga.prototype=new O,w.constructor=ga,w.a7=(function(e){return e===null?q():new J(e)}),new A().i(ga,`scala.Option$`,{cI:1});var _a;function va(){return _a||=new ga,_a}function ya(){this.dd=null,this.dc=null,ba=this,this.dd=new U((e=>this.dd)),this.dc=new tc}w=ya.prototype=new O,w.constructor=ya,new A().i(ya,`scala.PartialFunction$`,{cJ:1});var ba;function xa(){return ba||=new ya,ba}function Sa(e,t){for(var n=e.e();n.l();)t.f(n.h())}function Ca(e,t,n,r){return e.s()===0?``+t+r:e.aG($u(new ed),t,n,r).y.k}function wa(e,t,n,r,i){var a=t.y;n.length!==0&&(a.k=``+a.k+n);var o=e.e();if(o.l()){var s=o.h();for(a.k=``+a.k+s;o.l();){r.length!==0&&(a.k=``+a.k+r);var c=o.h();a.k=``+a.k+c}}return i.length!==0&&(a.k=``+a.k+i),t}function Ta(e,t){this.di=null,this.aT=null,this.di=e,this.aT=t}w=Ta.prototype=new O,w.constructor=Ta,w.fc=(function(){return this.di.as().e()}),new A().i(Ta,`scala.collection.Iterator$ConcatIteratorCell`,{cY:1});function Ea(){this.dj=null,Da=this,this.dj=new U((e=>this.dj))}w=Ea.prototype=new O,w.constructor=Ea,new A().i(Ea,`scala.collection.StringOps$`,{d5:1});var Da;function Oa(){return Da||=new Ea,Da}function ka(){this.dm=0,Aa=this;try{Oa();var e=jo().fh(Ki().dQ(`scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength`,`64`),10,214748364)}catch(t){if(0)var e;else{var e;throw t}}this.dm=e}w=ka.prototype=new O,w.constructor=ka,new A().i(ka,`scala.collection.immutable.IndexedSeqDefaults$`,{d9:1});var Aa;function ja(){return Aa||=new ka,Aa}function Ma(){}w=Ma.prototype=new O,w.constructor=Ma,w.fH=(function(e){return e===Vn.l()||e===Hn.l()||e===Bn.l()||e===Un.l()?0:e===Wn.l()?D(0,0):e===Gn.l()||e===Kn.l()?0:e===zn.l()?!1:e===Rn.l()?void 0:null}),w.fG=(function(e,t){var n=t.length|0;if(e===Bn.l()){for(var r=new jn(n),i=0;i!==n;)r.a[i]=65535&(t[i]|0),i=1+i|0;return r}for(var a=e.ad.U(n),o=0;o!==n;)I().dB(a,o,t[o]),o=1+o|0;return a}),new A().i(Ma,`scala.collection.mutable.ArrayBuilder$`,{de:1});var Na;function Pa(){return Na||=new Ma,Na}function Fa(){}w=Fa.prototype=new O,w.constructor=Fa,w.z=(function(e,t){return e===t||(No(e)?this.eQ(e,t):e instanceof T?this.eO(e,t):e===null?t===null:ln(e,t))}),w.eQ=(function(e,t){if(No(t))return this.eP(e,t);if(t instanceof T){if(typeof e==`number`)return+e===t.c;if(e instanceof E){var n=Dn(e),r=n.l,i=n.h,a=t.c,o=a>>31;return(r^a|i^o)===0}return e===null?t===null:ln(e,t)}return e===null?t===null:ln(e,t)}),w.eP=(function(e,t){if(typeof e==`number`){var n=+e;if(typeof t==`number`)return n===+t;if(t instanceof E){var r=Dn(t),i=r.l;return n===4294967296*r.h+(i>>>0)}return!1}if(e instanceof E){var a=Dn(e),o=a.l,s=a.h;if(t instanceof E){var c=Dn(t),l=c.l,u=c.h;return(o^l|s^u)===0}if(typeof t==`number`){var d=+t;return 4294967296*s+(o>>>0)===d}return!1}return e===null?t===null:ln(e,t)}),w.eO=(function(e,t){if(t instanceof T)return e.c===t.c;if(No(t)){if(typeof t==`number`)return+t===e.c;if(t instanceof E){var n=Dn(t),r=n.l,i=n.h,a=e.c,o=a>>31;return(r^a|i^o)===0}return t===null?e===null:ln(t,e)}return e===null&&t===null}),new A().i(Fa,`scala.runtime.BoxesRunTime$`,{dz:1});var Ia;function F(){return Ia||=new Fa,Ia}var La=new A().i(0,`scala.runtime.Null$`,{dC:1});function Ra(){}w=Ra.prototype=new O,w.constructor=Ra,w.bF=(function(){throw kc(new jc,`tried to cast away nullability, but value is null`)}),new A().i(Ra,`scala.runtime.Scala3RunTime$`,{dD:1});var za;function Ba(){return za||=new Ra,za}function Va(){}w=Va.prototype=new O,w.constructor=Va,w.eo=(function(e){return e===null?La.l():sn(e)}),w.aI=(function(e,t){if(e instanceof k||e instanceof Pn||e instanceof Ln)return e.a[t];if(e instanceof Fn){var n=e.a,r=t<<1;return D(n[r],n[r+1|0])}if(e instanceof In)return e.a[t];if(e instanceof jn)return wn(e.a[t]);if(e instanceof Mn||e instanceof Nn||e instanceof An)return e.a[t];throw e===null?Ac(new jc):new Ic(e)}),w.dB=(function(e,t,n){if(e instanceof k)e.a[t]=n;else if(e instanceof Pn)e.a[t]=n|0;else if(e instanceof Ln)e.a[t]=+n;else if(e instanceof Fn){var r=Dn(n),i=e.a,a=t<<1;i[a]=r.l,i[a+1|0]=r.h}else if(e instanceof In)e.a[t]=Math.fround(n);else if(e instanceof jn)e.a[t]=En(n);else if(e instanceof Mn)e.a[t]=n|0;else if(e instanceof Nn)e.a[t]=n|0;else if(e instanceof An)e.a[t]=!!n;else throw e===null?Ac(new jc):new Ic(e)}),w.el=(function(e){return Ca(e.bd(),e.ab()+`(`,`,`,`)`)}),w.ac=(function(e){if(e===null)return null;if(e.a.length===0){var t=Ml();return $l(),kl(t)}return new ju(e)}),new A().i(Va,`scala.runtime.ScalaRunTime$`,{dE:1});var Ha;function I(){return Ha||=new Va,Ha}function Ua(){}w=Ua.prototype=new O,w.constructor=Ua,w.j=(function(e,t){var n=this.bE(e,t),r=n;return n=r<<13|r>>>19,Math.imul(5,n)-430675100|0}),w.bE=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|r>>>17,n=Math.imul(461845907,n),e^n}),w.u=(function(e,t){return this.ev(e^t)}),w.ev=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),w.fm=(function(e,t){return t===e>>31?e:e^t}),w.eL=(function(e){var t=pn(e);if(t===e)return t;var n=la().dP(e),r=n.l,i=n.h;if(4294967296*i+(r>>>0)===e)return r^i;var a=e|0;if(a===e&&1/e!=-1/0)return a;if(e!==e)return 2146959360;var o=hn;return o.setFloat64(0,e,!0),(o.getInt32(0,!0)|0)^(o.getInt32(4,!0)|0)}),w.q=(function(e){if(e===null)return 0;if(typeof e==`number`)return this.eL(+e);if(e instanceof E){var t=Dn(e);return this.fm(t.l,t.h)}return un(e)}),w.fe=(function(e){throw Tc(new Dc,``+e)}),new A().i(Ua,`scala.runtime.Statics$`,{dG:1});var Wa;function L(){return Wa||=new Ua,Wa}function Ga(){}w=Ga.prototype=new O,w.constructor=Ga,w.fN=(function(e,t){return setTimeout((()=>{t.as()}),e)}),new A().i(Ga,`scala.scalajs.js.timers.package$`,{dJ:1});var Ka;function qa(){return Ka||=new Ga,Ka}function Ja(){}w=Ja.prototype=new O,w.constructor=Ja,w.fV=(function(e){if(e instanceof Q)return e.bw;var t=[];return e.aJ(new U((e=>t.push(e)|0))),t}),new A().i(Ja,`scala.scalajs.runtime.Compat$`,{dS:1});var Ya;function Xa(){return Ya||=new Ja,Ya}function Za(){}w=Za.prototype=new O,w.constructor=Za,w.fO=(function(e){var t=`Illegal command line`+(e.dR()===0?``:e.dR()===1?` after first argument`:` after `+e.dR()+` arguments`)+`: `+e.g7();Ho().fu().fi(t+`
`)}),new A().i(Za,`scala.util.CommandLineParser$`,{dT:1});function Qa(e){this.c7=null,this.c7=e}w=Qa.prototype=new O,w.constructor=Qa,w.m=(function(){return`DynamicVariable(`+this.c7+`)`}),new A().i(Qa,`scala.util.DynamicVariable`,{dV:1});function $a(){}w=$a.prototype=new O,w.constructor=$a;function eo(){}eo.prototype=w,w.j=(function(e,t){var n=this.bE(e,t),r=n;return n=r<<13|r>>>19,Math.imul(5,n)-430675100|0}),w.bE=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|r>>>17,n=Math.imul(461845907,n),e^n}),w.u=(function(e,t){return this.be(e^t)}),w.be=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),w.dW=(function(e,t,n){var r=e.a9();if(r===0)return n?t:K(e.ab());var i=t;n||(i=this.j(i,K(e.ab())));for(var a=0;a<r;)i=this.j(i,L().q(e.aa(a))),a=1+a|0;return this.u(i,r)}),w.fW=(function(e,t){for(var n=0,r=0,i=0,a=1,o=e.e();o.l();){var s=o.h(),c=L().q(s);n=n+c|0,r^=c,a=Math.imul(a,1|c),i=1+i|0}var l=t;return l=this.j(l,n),l=this.j(l,r),l=this.bE(l,a),this.u(l,i)}),w.ft=(function(e,t){var n=e.e(),r=t;if(!n.l())return this.u(r,0);var i=n.h();if(!n.l())return this.u(this.j(r,L().q(i)),1);var a=n.h(),o=L().q(i);r=this.j(r,o);for(var s=r,c=L().q(a),l=c-o|0,u=2;n.l();){r=this.j(r,c);var d=L().q(n.h());if(l!==(d-c|0)||l===0){for(r=this.j(r,d),u=1+u|0;n.l();)r=this.j(r,L().q(n.h())),u=1+u|0;return this.u(r,u)}c=d,u=1+u|0}return this.be(this.j(this.j(s,l),c))}),w.o=(function(e,t){var n=t,r=ra().b9(e);switch(r){case 0:return this.u(n,0);case 1:return this.u(this.j(n,L().q(I().aI(e,0))),1);default:var i=L().q(I().aI(e,0));n=this.j(n,i);for(var a=n,o=L().q(I().aI(e,1)),s=o-i|0,c=2;c<r;){n=this.j(n,o);var l=L().q(I().aI(e,c));if(s!==(l-o|0)||s===0){for(n=this.j(n,l),c=1+c|0;c<r;)n=this.j(n,L().q(I().aI(e,c))),c=1+c|0;return this.u(n,r)}o=l,c=1+c|0}return this.be(this.j(this.j(a,s),o))}}),w.fz=(function(e,t,n,r){return this.be(this.j(this.j(this.j(r,e),t),n))}),w.fd=(function(e,t){var n=t,r=e.d();switch(r){case 0:return this.u(n,0);case 1:return this.u(this.j(n,L().q(e.g(0))),1);default:var i=L().q(e.g(0));n=this.j(n,i);for(var a=n,o=L().q(e.g(1)),s=o-i|0,c=2;c<r;){n=this.j(n,o);var l=L().q(e.g(c));if(s!==(l-o|0)||s===0){for(n=this.j(n,l),c=1+c|0;c<r;)n=this.j(n,L().q(e.g(c))),c=1+c|0;return this.u(n,r)}o=l,c=1+c|0}return this.be(this.j(this.j(a,s),o))}}),w.fl=(function(e,t){for(var n=0,r=t,i=0,a=0,o=0,s=0,c=e;!c.b();){var l=c.M(),u=c.A(),d=L().q(l);switch(r=this.j(r,d),i){case 0:s=d,i=1;break;case 1:a=d-o|0,i=2;break;case 2:(a!==(d-o|0)||a===0)&&(i=3)}o=d,n=1+n|0,c=u}return i===2?this.fz(s,a,o,t):this.u(r,n)});function to(e){this.az=null,this.co=null,this.bL=!1,this.co=e,Tr(this),this.bL=!1}w=to.prototype=new O,w.constructor=to,w.fv=(function(e){this.bL?(kr(e),this.co.as()):Or(this,e)}),w.fj=(function(){Er(this),this.bL=!0}),new A().i(to,`com.raquo.airstream.ownership.OneTimeOwner`,{bi:1,bj:1});function no(){}w=no.prototype=new O,w.constructor=no,w.eG=(function(e){return e!==null}),w.eN=(function(e){return e?``:null}),w.by=(function(e){return this.eG(e)}),w.bB=(function(e){return this.eN(!!e)}),new A().i(no,`com.raquo.laminar.codecs.package$$anon$1`,{bw:1,X:1});function ro(e){if(e===null)throw Ac(new jc)}w=ro.prototype=new O,w.constructor=ro,w.bB=(function(e){return e}),w.by=(function(e){return e}),new A().i(ro,`com.raquo.laminar.codecs.package$$anon$2`,{bx:1,X:1});function io(e){if(e===null)throw Ac(new jc)}w=io.prototype=new O,w.constructor=io,w.eF=(function(e){return Oa(),Oo().fw(e)}),w.by=(function(e){return this.eF(e)}),w.bB=(function(e){return``+ +e}),new A().i(io,`com.raquo.laminar.codecs.package$$anon$4`,{by:1,X:1});function ao(e,t,n,r){}w=ao.prototype=new Xr,w.constructor=ao,new A().i(ao,`com.raquo.laminar.keys.CompositeKey`,{bI:1,Y:1});function R(e,t){this.aM=null,this.bO=null,this.aM=e,this.bO=t}w=R.prototype=new Xr,w.constructor=R,w.p=(function(e){return new cs(this,e,new dc(((e,t,n)=>{Rr().e0(e,t,n)})))}),new A().i(R,`com.raquo.laminar.keys.HtmlAttr`,{bJ:1,Y:1});function oo(e,t,n){this.bQ=null,this.bP=null,this.bn=null,this.bo=null,this.bQ=e,this.bP=t;var r=n.b()?q():new J(n.r()+`:`+e);this.bn=r.b()?e:r.r(),this.bo=n.b()?q():new J($r().fq(n.r()))}w=oo.prototype=new Xr,w.constructor=oo,new A().i(oo,`com.raquo.laminar.keys.SvgAttr`,{bK:1,Y:1});function so(){}w=so.prototype=new O,w.constructor=so,w.aH=(function(e){}),new A().i(so,`com.raquo.laminar.modifiers.Modifier$$anon$1`,{bP:1,U:1});function co(e,t){if(this.cG=null,this.cG=e,t===null)throw Ac(new jc)}w=co.prototype=new O,w.constructor=co,w.aH=(function(e){var t=cr(),n=(()=>{this.cG.f(e)});if(cr(),t.I)n();else{t.I=!0;try{n()}finally{t.I=!1,ar(t)}}}),new A().i(co,`com.raquo.laminar.modifiers.Modifier$$anon$2`,{bQ:1,U:1});function lo(e){e.dE(new yr(new lc((()=>{throw V(new H,`Attempting to use owner of unmounted element: `+Ca(Rr().eE(e.ce(),(Rr(),Zu())),``,` > `,``))}))))}function uo(){}w=uo.prototype=new O,w.constructor=uo;function fo(){}fo.prototype=w,w.eu=(function(e){var t=this.ex();return e.aJ(new G((e=>{e.aH(t)}))),t}),w.ex=(function(){return new dl(this,Rr().eA(this))});function po(e,t){this.cK=null,this.cK=e}w=po.prototype=new O,w.constructor=po,new A().i(po,`com.raquo.laminar.tags.SvgTag`,{bZ:1,a7:1});function mo(e,t){return e.bV=t,e.ek(),e}function ho(){this.bV=null,this.bU=null,this.bW=!1}w=ho.prototype=new O,w.constructor=ho;function go(){}go.prototype=w,w.fT=(function(){return this.bW||=(this.bU=new us(this.bV,new U((e=>void 0)),void 0),!0),this.bU}),w.a8=(function(e,t){var n=this.fT().eu(new Q([]));return e.aJ(new U((e=>{e.f(this).aH(n)}))),t.aJ(new U((e=>{e.aH(n)}))),n});function _o(){this.bX=null,vo=this,this.bX=Jn(67,`1C]4m6m=c4]4]4]4]4]4]4]4]4]3g4]2m9]2m1Jm1m9s4g5mm6]3]4mm12>mEm1m6m1]3]=]DI]1<m24mIs4g2c4w9];]4]<]3m3m=m3mH]8]2m=mBHm3]4mK3{gggg2:g=m@]13]4E]`)}w=_o.prototype=new O,w.constructor=_o,w.eH=(function(e,t){if(e<256)var n=(e-48|0)>>>0<=9?e-48|0:(e-65|0)>>>0<=25?e-55|0:(e-97|0)>>>0<=25?e-87|0:-1;else if((e-65313|0)>>>0<=25)var n=e-65303|0;else if((e-65345|0)>>>0<=25)var n=e-65335|0;else{var r=P().ew(this.bX,e),i=r<0?-2-r|0:r;if(i<0)var n=-1;else var a=e-this.bX.a[i]|0,n=a>9?-1:a}return n<t?n:-1}),new A().i(_o,`java.lang.Character$`,{c9:1,a:1});var vo;function yo(){return vo||=new _o,vo}function bo(e){return(1&e.W)<<24>>24||(e.c0=/* @__PURE__ */ RegExp(`^[\\x00-\\x20]*([+-]?(?:NaN|Infinity|(?:\\d+\\.?\\d*|\\.\\d+)(?:[eE][+-]?\\d+)?)[fFdD]?)[\\x00-\\x20]*$`),e.W=(1|e.W)<<24>>24),e.c0}function xo(e){return(1&e.W)<<24>>24?e.c0:bo(e)}function So(e){return(2&e.W)<<24>>24||(e.bZ=/* @__PURE__ */ RegExp(`^[\\x00-\\x20]*([+-]?)0[xX]([0-9A-Fa-f]*)\\.?([0-9A-Fa-f]*)[pP]([+-]?\\d+)[fFdD]?[\\x00-\\x20]*$`),e.W=(2|e.W)<<24>>24),e.bZ}function Co(e){return(2&e.W)<<24>>24?e.bZ:So(e)}function wo(e,t){var n=Co(e).exec(t);n===null&&To(t);var r=n[1],i=n[2],a=n[3],o=n[4];i===``&&a===``&&To(t);var s=e.fx(i,a,o,15);return r===`-`?-s:s}function To(e){throw new bl(`For input string: "`+e+`"`)}function Eo(){this.c0=null,this.bZ=null,this.W=0}w=Eo.prototype=new O,w.constructor=Eo,w.fw=(function(e){var t=xo(this).exec(e);return t===null?wo(this,e):+parseFloat(t[1])}),w.fx=(function(e,t,n,r){for(var i=``+e+t,a=-(t.length<<2)|0,o=i.length-1|0,s=0;s!==o&&i.charCodeAt(s)===48;)s=1+s|0;var c=s,l=i.substring(c),u=l.length,d=u>r;if(d){for(var f=!1,p=r;!f&&p!==u;)l.charCodeAt(p)!==48&&(f=!0),p=1+p|0;var m=f?`1`:`0`,ee=l.substring(0,r)+m}else var ee=l;var h=a+(d?(l.length-(1+r|0)|0)<<2:0)|0;return pi().fI(+parseInt(ee,16),pn(+parseInt(n,10))+h|0)}),new A().i(Eo,`java.lang.Double$`,{cb:1,a:1});var Do;function Oo(){return Do||=new Eo,Do}function ko(){}w=ko.prototype=new O,w.constructor=ko,w.bb=(function(e){throw new bl(`For input string: "`+e+`"`)}),w.fh=(function(e,t,n){e===null&&jo().bb(e);var r=e.length;r===0&&jo().bb(e);var i=yo(),a=e.charCodeAt(0),o=a===45,s=o?-1:0,c=(o||a===43)|0;c>=r&&jo().bb(e);var l=0;for(l=0;c!==r;){var u=i.eH(e.charCodeAt(c),t);(u<0||l>>>0>n>>>0)&&jo().bb(e),l=Math.imul(l,t)+u|0,c=1+c|0}return l>>>0>(2147483647-s|0)>>>0&&jo().bb(e),(l^s)-s|0}),new A().i(ko,`java.lang.Integer$`,{cf:1,a:1});var Ao;function jo(){return Ao||=new ko,Ao}function Mo(){}w=Mo.prototype=new O,w.constructor=Mo;function No(e){return e instanceof Mo||typeof e==`number`||e instanceof E}function Po(e,t,n,r,i){this.aC=null,this.aO=null,this.aD=null,this.aE=0,this.aB=0,this.aC=e,this.aO=t,this.aD=n,this.aE=r,this.aB=i}w=Po.prototype=new O,w.constructor=Po,w.c=(function(e){return e instanceof Po&&this.aD===e.aD&&this.aE===e.aE&&this.aB===e.aB&&this.aC===e.aC&&this.aO===e.aO}),w.m=(function(){var e=``;return this.aC!==`<jscode>`&&(e=``+e+this.aC+`.`),e=``+e+this.aO,this.aD===null?e+=`(Unknown Source)`:(e=e+`(`+this.aD,this.aE>=0&&(e=e+`:`+this.aE,this.aB>=0&&(e=e+`:`+this.aB)),e+=`)`),e}),w.i=(function(){return K(this.aC)^K(this.aO)^K(this.aD)^this.aE^this.aB});var Fo=new A().i(Po,`java.lang.StackTraceElement`,{ah:1,a:1});function Io(){}w=Io.prototype=new O,w.constructor=Io,w.fr=(function(e,t,n){for(var r=t+n|0,i=``,a=t;a!==r;)i+=``+mn(e.a[a]),a=1+a|0;return i}),new A().i(Io,`java.lang.String$`,{cq:1,a:1});var Lo;function Ro(){return Lo||=new Io,Lo}function z(e,t,n,r,i){return e.d7=t,e.d8=i,i&&e.f0(),e}var zo=class extends Error{constructor(){super(),this.d7=null,this.d8=!1,this.d6=null,this.bq=null}ba(){return this.d7}f0(){var e=this instanceof X?this.K:this;return this.d6=Object.prototype.toString.call(e)===`[object Error]`?e:Error.captureStackTrace===void 0||Object.isSealed(this)?/* @__PURE__ */ Error():(Error.captureStackTrace(this),this),this}f8(){return this.bq===null&&(this.bq=this.d8?Li().eZ(this.d6):new(Fo.r()).C(0)),this.bq}m(){var e=cn(this),t=this.ba();return t===null?e:e+`: `+t}i(){return On.prototype.i.call(this)}c(e){return On.prototype.c.call(this,e)}get message(){var e=this.ba();return e===null?``:e}get name(){return cn(this)}toString(){return this.m()}};function Bo(){this.d9=null,Vo=this,this.d9=new Qa(Hi().d4)}w=Bo.prototype=new O,w.constructor=Bo,w.fu=(function(){return this.d9.c7}),new A().i(Bo,`scala.Console$`,{cB:1,dq:1});var Vo;function Ho(){return Vo||=new Bo,Vo}function Uo(){}w=Uo.prototype=new ha,w.constructor=Uo;function Wo(){}Wo.prototype=w,w.g3=(function(e){if(e===null)return null;if(e.a.length===0){var t=Fl();return $l(),t.dn}return new Gu(e)});function Go(e,t){if(t===e)e.dy(al().dN(t));else for(var n=t.e();n.l();)e.c9(n.h());return e}function Ko(){}w=Ko.prototype=new O,w.constructor=Ko;function qo(){}qo.prototype=w,w.m=(function(){return`<function0>`});function Jo(){}w=Jo.prototype=new O,w.constructor=Jo;function Yo(){}Yo.prototype=w,w.m=(function(){return`<function1>`});function Xo(){}w=Xo.prototype=new O,w.constructor=Xo;function Zo(){}Zo.prototype=w,w.m=(function(){return`<function2>`});function Qo(){}w=Qo.prototype=new O,w.constructor=Qo;function $o(){}$o.prototype=w,w.m=(function(){return`<function3>`});function es(e){this.bv=!1,this.bv=e}w=es.prototype=new O,w.constructor=es,w.m=(function(){return``+this.bv}),new A().i(es,`scala.runtime.BooleanRef`,{dy:1,a:1});function ts(e){this.aY=0,this.aY=e}w=ts.prototype=new O,w.constructor=ts,w.m=(function(){return``+this.aY}),new A().i(ts,`scala.runtime.IntRef`,{dA:1,a:1});function ns(){this.n=0,this.dw=0,this.eh=0,this.eg=0,rs=this,this.n=K(`Seq`),this.dw=K(`Map`),this.eh=K(`Set`),this.eg=this.fW(Zu(),this.dw)}w=ns.prototype=new eo,w.constructor=ns,w.dZ=(function(e){return au(e)?this.fd(e,this.n):e instanceof Iu?this.fl(e,this.n):this.ft(e,this.n)}),new A().i(ns,`scala.util.hashing.MurmurHash3$`,{dX:1,dW:1});var rs;function B(){return rs||=new ns,rs}var is=class extends zo{};function as(){this.bI=null,this.ch=null,this.ci=null,os=this,this.bI=al().dA(I().ac(new(pa.r()).C([]))),this.ch=new G((e=>{try{console.error(this.f4(e)+`
`+this.f7(e,`
`))}catch(e){var t=e instanceof zo?e:new X(e);console.error(`Error in AirstreamError.consoleErrorCallback:`),console.error(t)}})),this.ci=new G((e=>{console.warn(`Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.`);var t=e;throw t instanceof X?t.K:t})),this.fA(this.ch)}w=as.prototype=new O,w.constructor=as,w.f4=(function(e){try{var t=e.ba()}catch{var t=`(Unable to get the message for this error - exception occurred in its getMessage)`}return sn(e).cd()+`: `+t}),w.f7=(function(e,t){try{return Ca(vs().g3(e.f8()),``,t,``)}catch{return`(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)`}}),w.fA=(function(e){this.bI.c9(e)}),w.cg=(function(e){for(var t=this.bI.e();t.l();){var n=t.h();try{n.f(e)}catch(e){var r=e instanceof zo?e:new X(e),i=this.ci;if(n===null?i===null:n.c(i))throw r instanceof X?r.K:r;console.warn(`Error processing an unhandled error callback:`),qa().fN(0,new lc((e=>(()=>{throw e instanceof X?e.K:e}))(r)))}}}),new A().i(as,`com.raquo.airstream.core.AirstreamError$`,{b5:1,dn:1,dp:1});var os;function ss(){return os||=new as,os}function cs(e,t,n){this.cE=null,this.cF=null,this.cD=null,this.cE=e,this.cF=t,this.cD=n}w=cs.prototype=new O,w.constructor=cs,w.aH=(function(e){this.cD.es(e,this.cE,this.cF)}),new A().i(cs,`com.raquo.laminar.modifiers.KeySetter`,{bN:1,U:1,bR:1});function ls(e,t){if(this.bS=null,this.cI=null,this.cJ=null,this.cI=t,lo(this),e===null)throw V(new H,`Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load`);if(!Rr().fg(e,document))throw V(new H,`Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering`);this.cJ=e,this.fo()}w=ls.prototype=new O,w.constructor=ls,w.bA=(function(){return this.bS}),w.dE=(function(e){this.bS=e}),w.fo=(function(){return this.bS.dx(),oi().dz(this,this.cI,void 0)}),w.ce=(function(){return this.cJ}),new A().i(ls,`com.raquo.laminar.nodes.RootNode`,{bW:1,a6:1,a5:1});function us(e,t,n){this.bT=null,this.bT=e}w=us.prototype=new fo,w.constructor=us,new A().i(us,`com.raquo.laminar.tags.CustomHtmlTag`,{bX:1,bY:1,a7:1});function ds(){this.bV=null,this.bU=null,this.bW=!1,this.cP=null,this.cQ=!1,this.cR=null,this.cS=!1,this.cN=null,this.cO=!1,this.cL=null,this.cM=!1,this.cZ=null,this.d2=!1,this.d0=null,this.d1=!1,this.cV=null,this.cW=!1,this.cX=null,this.cY=!1,this.cT=null,this.cU=!1,mo(this,`wa-zoomable-frame`)}w=ds.prototype=new go,w.constructor=ds,w.aK=(function(){return this.cQ||=(this.cP=(W(),new R(`src`,M().P)),!0),this.cP}),w.e1=(function(){return this.cS||=(this.cR=(W(),new R(`srcdoc`,M().P)),!0),this.cR}),w.fp=(function(){return this.cO||=(this.cN=(W(),new R(`name`,M().P)),!0),this.cN}),w.fk=(function(){return this.cM||=(this.cL=(W(),new R(`label`,M().P)),!0),this.cL}),w.bH=(function(){return this.d2||=(this.cZ=(W(),new R(`zoom`,M().ej())),!0),this.cZ}),w.g4=(function(){return this.d1||=(this.d0=(W(),new R(`zoom-levels`,M().P)),!0),this.d0}),w.g1=(function(){return this.cW||=(this.cV=(W(),new R(`without-controls`,M().bm)),!0),this.cV}),w.g2=(function(){return this.cY||=(this.cX=(W(),new R(`without-interaction`,M().bm)),!0),this.cX}),w.g0=(function(){return this.cU||=(this.cT=(W(),new R(`with-theme-sync`,M().bm)),!0),this.cT}),w.ek=(function(){return on}),new A().i(ds,`io.github.nguyenyou.webawesome.laminar.ZoomableFrame$`,{c3:1,c2:1,c1:1});var fs;function ps(){return fs||=new ds,fs}function ms(e){if(e.ad.Z)return e.ad.Q().cd()+`[]`;for(var t=e.ad.N,n=t.length-1|0;n>=0&&t.charCodeAt(n)===36;)n=n-1|0;if(n>=0&&(t.charCodeAt(n)-48|0)>>>0<=9){for(n=n-1|0;n>=0&&(t.charCodeAt(n)-48|0)>>>0<=9;)n=n-1|0;for(;n>=0&&t.charCodeAt(n)===36;)n=n-1|0}for(;;){if(n>=0)var r=n,i=t.charCodeAt(r),a=i!==36&&i!==46;else var a=!1;if(a)n=n-1|0;else break}var o=1+n|0;return t.substring(o)}function hs(e){this.bY=null,this.ad=e}w=hs.prototype=new O,w.constructor=hs,w.m=(function(){return(this.ad.Y?`interface `:this.ad.X?``:`class `)+this.ad.N}),w.cd=(function(){return this.bY===null&&(this.bY=ms(this)),this.bY}),new A().i(hs,`java.lang.Class`,{ca:1,a:1,K:1});function V(e,t){return z(e,t,null,!0,!0),e}var H=class extends zo{};new A().i(H,`java.lang.Exception`,{J:1,s:1,a:1});function gs(){this.ec=null,_s=this,nl(),this.ec=As()}w=gs.prototype=new Wo,w.constructor=gs,new A().i(gs,`scala.Predef$`,{cL:1,cE:1,cF:1});var _s;function vs(){return _s||=new gs,_s}function ys(e,t){return e.bt=t,e}function bs(){this.bt=null}w=bs.prototype=new O,w.constructor=bs;function xs(){}xs.prototype=w,w.bC=(function(e){return this.bt.cc(e,Xl())}),w.bx=(function(e){return this.bt.cc(e,Xl())});function Ss(e,t){return new Kc(e).ez(t)}function Cs(e,t,n){var r=t>0?t:0,i=n<0?-1:n<=r?0:n-r|0;return i===0?Ds().C:new Yc(e,r,i)}function ws(e,t){for(var n=t.e();e.l();)if(!n.l()||!F().z(e.h(),n.h()))return!1;return!n.l()}function Ts(){this.C=null,Es=this,this.C=new Hc}w=Ts.prototype=new O,w.constructor=Ts,new A().i(Ts,`scala.collection.Iterator$`,{cV:1,a:1,T:1});var Es;function Ds(){return Es||=new Ts,Es}function Os(){}w=Os.prototype=new O,w.constructor=Os,new A().i(Os,`scala.collection.immutable.Map$`,{db:1,a:1,d0:1});var ks;function As(){return ks||=new Os,ks}function js(e){this.dp=null,this.dp=e}w=js.prototype=new qo,w.constructor=js,w.as=(function(){return(0,this.dp)()}),new A().i(js,`scala.runtime.AbstractFunction0.$$Lambda$07eded5776954a9c145e92c329afd52873ad179c`,{du:1,b0:1,aj:1});function U(e){this.dq=null,this.dq=e}w=U.prototype=new Yo,w.constructor=U,w.f=(function(e){return(0,this.dq)(e)}),new A().i(U,`scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919`,{dv:1,b1:1,e:1});var Ms=new A().i(0,`scala.runtime.Nothing$`,{dB:1,s:1,a:1});function Ns(){}w=Ns.prototype=new qo,w.constructor=Ns;function Ps(){}Ps.prototype=w;function Fs(){}w=Fs.prototype=new Yo,w.constructor=Fs;function Is(){}Is.prototype=w;function Ls(){}w=Ls.prototype=new Zo,w.constructor=Ls;function Rs(){}Rs.prototype=w;function zs(){}w=zs.prototype=new $o,w.constructor=zs;function Bs(){}Bs.prototype=w;function Vs(e,t,n,r){if(this.cj=null,r===null)throw Ac(new jc);this.cj=void 0}w=Vs.prototype=new O,w.constructor=Vs,w.m=(function(){return Xn(this)}),new A().i(Vs,`com.raquo.airstream.core.Observer$$anon$8`,{b9:1,ba:1,b6:1,b7:1});function Hs(e){if(this.cu=null,this.cv=!1,this.e3=null,e===null)throw Ac(new jc);qr(this)}w=Hs.prototype=new O,w.constructor=Hs,w.fS=(function(){return this.cv||=(this.cu=new po(`svg`,!1),!0),this.cu}),new A().i(Hs,`com.raquo.laminar.api.Laminar$svg$`,{bq:1,bH:1,bA:1,bC:1});function Us(){this.bN=null,Ws=this,this.bN=new uu}w=Us.prototype=new O,w.constructor=Us,new A().i(Us,`com.raquo.laminar.api.package$`,{bt:1,a3:1,a4:1,a2:1});var Ws;function W(){return Ws||=new Us,Ws}function Gs(){}w=Gs.prototype=new O,w.constructor=Gs;function Ks(){}Ks.prototype=w;function qs(e,t){return e===t}function Js(e){return e?1231:1237}var Ys=new A().i(0,`java.lang.Boolean`,{c7:1,a:1,M:1,K:1},(e=>typeof e==`boolean`));function Xs(e){return e}function Zs(e,t){return t instanceof T&&e===t.c}var Qs=new A().i(0,`java.lang.Character`,{ad:1,a:1,M:1,K:1},(e=>e instanceof T)),$s=class extends H{};function ec(){this.k=null,this.k=``}w=ec.prototype=new O,w.constructor=ec,w.eq=(function(e){var t=Ro().fr(e,0,e.a.length);return this.k=``+this.k+t,this}),w.m=(function(){return this.k}),w.d=(function(){return this.k.length}),w.dC=(function(e){return this.k.charCodeAt(e)}),new A().i(ec,`java.lang.StringBuilder`,{cr:1,Z:1,ab:1,a:1});function tc(){}w=tc.prototype=new O,w.constructor=tc,w.m=(function(){return`<function1>`}),w.et=(function(e){throw new Ic(e)}),w.f=(function(e){this.et(e)}),new A().i(tc,`scala.PartialFunction$$anon$1`,{cK:1,e:1,g:1,a:1});function nc(){}w=nc.prototype=new O,w.constructor=nc;function rc(){}rc.prototype=w,w.s=(function(){return-1}),w.aG=(function(e,t,n,r){return wa(this,e,t,n,r)}),w.e=(function(){return this}),w.bz=(function(e){return this.bf(e,-1)}),w.bf=(function(e,t){return Cs(this,e,t)}),w.m=(function(){return`<iterator>`});function ic(e,t){return e.bu=t,e}function ac(){this.bu=null}w=ac.prototype=new O,w.constructor=ac;function oc(){}oc.prototype=w,w.dA=(function(e){return this.bu.bx(e)}),w.dN=(function(e){return this.bu.bC(e)}),w.bx=(function(e){return this.dA(e)}),w.bC=(function(e){return this.dN(e)});function sc(e){return e.au(0)===0}function cc(e,t){var n=e.s();if(n!==-1){var r=t.s();if(r!==-1){if(n!==r)return!1;if(n===0)return!0}}return ws(e.e(),t)}function lc(e){this.dt=null,this.dt=e}w=lc.prototype=new Ps,w.constructor=lc,w.as=(function(){return(0,this.dt)()}),new A().i(lc,`scala.scalajs.runtime.AnonFunction0.$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d`,{dL:1,dK:1,b0:1,aj:1});function G(e){this.du=null,this.du=e}w=G.prototype=new Is,w.constructor=G,w.f=(function(e){return(0,this.du)(e)}),new A().i(G,`scala.scalajs.runtime.AnonFunction1.$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1`,{dN:1,dM:1,b1:1,e:1});function uc(e){this.ef=null,this.ef=e}w=uc.prototype=new Rs,w.constructor=uc,new A().i(uc,`scala.scalajs.runtime.AnonFunction2.$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7`,{dP:1,dO:1,dw:1,cC:1});function dc(e){this.dv=null,this.dv=e}w=dc.prototype=new Bs,w.constructor=dc,w.es=(function(e,t,n){return(0,this.dv)(e,t,n)}),new A().i(dc,`scala.scalajs.runtime.AnonFunction3.$$Lambda$73f37e31ba038fe839c174212837da323f140c96`,{dR:1,dQ:1,dx:1,cD:1});function fc(e){e.bR=new Mr(new lc((()=>{e.aA.dx()})),new lc((()=>{e.aA.eC()})))}function pc(e,t){hc(e,e.bp,t)&&gc(e,t)}function mc(e,t){var n=e.bp;e.bp=t,hc(e,n,t)||gc(e,t)}function hc(e,t,n){var r=!t.b()&&!t.r().bA().w.b(),i=!n.b()&&!n.r().bA().w.b();return r&&!i}function gc(e,t){_c(e,t.b()?q():new J(t.r().bA()))}function _c(e,t){if(t.b())e.bR.ey();else{var n=t.r();e.bR.fK(n)}}function vc(){}w=vc.prototype=new Ks,w.constructor=vc;function yc(){}yc.prototype=w;var bc=class extends $s{constructor(e){super(),z(this,e,null,!0,!0)}};new A().i(bc,`java.lang.ArithmeticException`,{c6:1,N:1,J:1,s:1,a:1});var xc=new A().i(0,`java.lang.Byte`,{c8:1,Q:1,a:1,M:1,K:1},(e=>bn(e)));function Sc(e,t){return z(e,t,null,!0,!0),e}function Cc(e){return z(e,null,null,!0,!0),e}var wc=class extends $s{};new A().i(wc,`java.lang.IllegalArgumentException`,{af:1,N:1,J:1,s:1,a:1});function Tc(e,t){return z(e,t,null,!0,!0),e}function Ec(e,t){return z(e,`Index out of range: `+t,null,!0,!0),e}var Dc=class extends $s{};new A().i(Dc,`java.lang.IndexOutOfBoundsException`,{cd:1,N:1,J:1,s:1,a:1});function Oc(){}w=Oc.prototype=new Ks,w.constructor=Oc,new A().i(Oc,`java.lang.JSConsoleBasedPrintStream$DummyOutputStream`,{ch:1,aa:1,a8:1,ac:1,a9:1});function kc(e,t){return z(e,t,null,!0,!0),e}function Ac(e){return z(e,null,null,!0,!0),e}var jc=class extends $s{};new A().i(jc,`java.lang.NullPointerException`,{cj:1,N:1,J:1,s:1,a:1});var Mc=new A().i(0,`java.lang.Short`,{cm:1,Q:1,a:1,M:1,K:1},(e=>xn(e))),Nc=class extends $s{constructor(e){super(),z(this,e,null,!0,!0)}};new A().i(Nc,`java.lang.UnsupportedOperationException`,{cu:1,N:1,J:1,s:1,a:1});var Pc=class extends $s{constructor(e){super(),z(this,e,null,!0,!0)}};new A().i(Pc,`java.util.NoSuchElementException`,{cy:1,N:1,J:1,s:1,a:1});function Fc(e){if(!e.db){if(e.br===null)var t=`null`;else{var n=I().eo(e.br),r=n===null?`of a JS class`:`of class `+n.ad.N;try{var t=e.br+` (`+r+`)`}catch{var t=`an instance `+r}}e.da=t,e.db=!0}return e.da}var Ic=class extends $s{constructor(e){super(),this.br=null,this.da=null,this.db=!1,this.br=e,z(this,null,null,!0,!0)}ba(){return Fc(this)}};new A().i(Ic,`scala.MatchError`,{cG:1,N:1,J:1,s:1,a:1});function Lc(){}w=Lc.prototype=new O,w.constructor=Lc;function Rc(){}Rc.prototype=w,w.bd=(function(){return new zc(this)}),w.b=(function(){return this===q()}),w.s=(function(){return!this.b()|0}),w.e=(function(){return this.b()?Ds().C:new Uc(this.r())});function zc(e){if(this.aP=0,this.df=0,this.de=null,e===null)throw Ac(new jc);this.de=e,this.aP=0,this.df=e.a9()}w=zc.prototype=new rc,w.constructor=zc,w.l=(function(){return this.aP<this.df}),w.h=(function(){var e=this.de.aa(this.aP);return this.aP=1+this.aP|0,e}),new A().i(zc,`scala.Product$$anon$1`,{cM:1,O:1,b:1,c:1,P:1});function Bc(e){this.bt=null,ys(this,e)}w=Bc.prototype=new xs,w.constructor=Bc,new A().i(Bc,`scala.collection.ClassTagSeqFactory$AnySeqDelegate`,{cR:1,cQ:1,a:1,T:1,W:1});function Vc(e){return Ca(e,e.at()+`(`,`, `,`)`)}function Hc(){}w=Hc.prototype=new rc,w.constructor=Hc,w.l=(function(){return!1}),w.fs=(function(){throw new Pc(`next on empty iterator`)}),w.s=(function(){return 0}),w.h=(function(){this.fs()}),w.bf=(function(e,t){return this}),new A().i(Hc,`scala.collection.Iterator$$anon$19`,{cW:1,O:1,b:1,c:1,P:1});function Uc(e){this.dh=null,this.aS=!1,this.dh=e,this.aS=!1}w=Uc.prototype=new rc,w.constructor=Uc,w.l=(function(){return!this.aS}),w.h=(function(){return this.aS?Ds().C.h():(this.aS=!0,this.dh)}),w.bf=(function(e,t){return this.aS||e>0||t===0?Ds().C:this}),new A().i(Uc,`scala.collection.Iterator$$anon$20`,{cX:1,O:1,b:1,c:1,P:1});function Wc(e){for(;;)if(e.t instanceof Kc){var t=e.t;if(e.t=t.t,e.Y=t.Y,t.E!==null){e.D===null&&(e.D=t.D);var n=t.D;n===null&&Ba().bF(),n.aT=e.E,e.E=t.E}}else return}function Gc(e){for(;;)if(e.E===null)return e.t=null,e.D=null,!1;else{if(e.t=e.E.fc(),e.D===e.E){var t=e.D;t===null&&Ba().bF(),e.D=t.aT}if(e.E=e.E.aT,Wc(e),e.Y)return!0;if(!(e.t!==null&&e.t.l()))continue;return e.Y=!0,!0}}function Kc(e){this.t=null,this.E=null,this.D=null,this.Y=!1,this.t=e,this.E=null,this.D=null,this.Y=!1}w=Kc.prototype=new rc,w.constructor=Kc,w.l=(function(){return this.Y?!0:this.t===null?!1:this.t.l()?(this.Y=!0,!0):Gc(this)}),w.h=(function(){if(this.l()){this.Y=!1;var e=this.t;return e===null&&Ba().bF(),e.h()}return Ds().C.h()}),w.ez=(function(e){var t=new Ta(e,null);if(this.E===null)this.E=t,this.D=t;else{var n=this.D;n===null&&Ba().bF(),n.aT=t,this.D=t}return this.t===null&&(this.t=Ds().C),this}),new A().i(Kc,`scala.collection.Iterator$ConcatIterator`,{ap:1,O:1,b:1,c:1,P:1});function qc(e){for(;e.S>0;)e.Z.l()?(e.Z.h(),e.S=e.S-1|0):e.S=0}function Jc(e,t){if(e.x<0)return-1;var n=e.x-t|0;return n<0?0:n}function Yc(e,t,n){this.Z=null,this.x=0,this.S=0,this.Z=e,this.x=n,this.S=t}w=Yc.prototype=new rc,w.constructor=Yc,w.s=(function(){var e=this.Z.s();if(e<0)return-1;var t=e-this.S|0,n=t<0?0:t;if(this.x<0)return n;var r=this.x;return r<n?r:n}),w.l=(function(){return qc(this),this.x!==0&&this.Z.l()}),w.h=(function(){return qc(this),this.x>0?(this.x=this.x-1|0,this.Z.h()):this.x<0?this.Z.h():Ds().C.h()}),w.bf=(function(e,t){var n=e>0?e:0;if(t<0)var r=Jc(this,n);else if(t<=n)var r=0;else if(this.x<0)var r=t-n|0;else var i=Jc(this,n),a=t-n|0,r=i<a?i:a;var o=this.S+n|0;return r===0?Ds().C:o<0?(this.S=2147483647,this.x=0,Ss(this,new js((()=>new Yc(this.Z,o-2147483647|0,r))))):(this.S=o,this.x=r,this)}),new A().i(Yc,`scala.collection.Iterator$SliceIterator`,{cZ:1,O:1,b:1,c:1,P:1});function Xc(e,t){if(t<0)throw Tc(new Dc,``+t);var n=e.eM(t);if(n.b())throw Tc(new Dc,``+t);return n.M()}function Zc(e,t){return ou(t)?Qc(e,e,t):cc(e,t)}function Qc(e,t,n){for(var r=n,i=t;;)if(i===r)return!0;else{if(!i.b()&&!r.b()&&F().z(i.M(),r.M())){var a=i.A(),o=r.A();i=a,r=o;continue}return i.b()&&r.b()}}function $c(e){if(this.aV=null,e===null)throw Ac(new jc);this.aV=e}w=$c.prototype=new rc,w.constructor=$c,w.l=(function(){return!this.aV.b()}),w.h=(function(){var e=this.aV.M();return this.aV=this.aV.A(),e}),new A().i($c,`scala.collection.StrictOptimizedLinearSeqOps$$anon$1`,{d4:1,O:1,b:1,c:1,P:1});function el(){tl=this,Zu(),Zu()}w=el.prototype=new O,w.constructor=el,w.bx=(function(e){return Zu().dV(e)}),w.bC=(function(e){return Zu().dV(e)}),new A().i(el,`scala.collection.immutable.List$`,{da:1,a:1,T:1,W:1,at:1});var tl;function nl(){return tl||=new el,tl}function rl(){this.bu=null,ic(this,ll())}w=rl.prototype=new oc,w.constructor=rl,new A().i(rl,`scala.collection.mutable.Buffer$`,{dh:1,d1:1,a:1,T:1,W:1});var il;function al(){return il||=new rl,il}function ol(e){this.ds=null,this.aZ=0,this.dr=0,this.ds=e,this.aZ=0,this.dr=e.a9()}w=ol.prototype=new rc,w.constructor=ol,w.l=(function(){return this.aZ<this.dr}),w.h=(function(){var e=this.ds.aa(this.aZ);return this.aZ=1+this.aZ|0,e}),new A().i(ol,`scala.runtime.ScalaRunTime$$anon$1`,{dF:1,O:1,b:1,c:1,P:1});function sl(){}w=sl.prototype=new O,w.constructor=sl,w.bx=(function(e){return this.dO(e)}),w.dO=(function(e){return Go(nd(new rd),e).dX()}),w.bC=(function(e){return this.dO(e)}),new A().i(sl,`scala.scalajs.js.WrappedArray$`,{dI:1,at:1,a:1,T:1,W:1});var cl;function ll(){return cl||=new sl,cl}var ul=class e extends is{constructor(e,t){super(),this.aw=null,this.av=0,this.aw=e,this.av=t,z(this,`Transaction depth exceeded maxDepth = `+t+`: Execution of `+e+" aborted. See `Transaction.maxDepth`.",null,!0,!0)}bd(){return new zc(this)}i(){var e=-889275714;return e=L().j(e,K(`TransactionDepthExceeded`)),e=L().j(e,L().q(this.aw)),e=L().j(e,this.av),L().u(e,2)}c(t){if(this===t)return!0;if(t instanceof e){if(this.av===t.av){var n=this.aw,r=t.aw;return n===null?r===null:n===r}return!1}return!1}a9(){return 2}ab(){return`TransactionDepthExceeded`}aa(e){if(e===0)return this.aw;if(e===1)return this.av;throw Tc(new Dc,``+e)}m(){return`TransactionDepthExceeded: `+this.aw+`; maxDepth: `+this.av}};new A().i(ul,`com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded`,{a1:1,b4:1,s:1,a:1,d:1,R:1});function dl(e,t){this.bp=null,this.aA=null,this.bR=null,this.cH=null,this.Q=null,this.cH=e,this.Q=t,this.bp=q(),lo(this),fc(this)}w=dl.prototype=new O,w.constructor=dl,w.aH=(function(e){oi().dz(e,this,void 0)}),w.bA=(function(){return this.aA}),w.dE=(function(e){this.aA=e}),w.m=(function(){return`ReactiveHtmlElement(`+(this.Q===null?`tag=`+this.cH.bT:this.Q.outerHTML)+`)`}),w.ce=(function(){return this.Q}),new A().i(dl,`com.raquo.laminar.nodes.ReactiveHtmlElement`,{bV:1,a6:1,U:1,bS:1,a5:1,bU:1});function fl(e,t){return Object.is(e,t)}function pl(e){var t=e|0;if(t===e&&1/e!=-1/0)return t;if(e!==e)return 2146959360;var n=hn;return n.setFloat64(0,e,!0),(n.getInt32(0,!0)|0)^(n.getInt32(4,!0)|0)}var ml=new A().i(0,`java.lang.Double`,{ae:1,Q:1,a:1,M:1,K:1,S:1},(e=>typeof e==`number`)),hl=new A().i(0,`java.lang.Float`,{cc:1,Q:1,a:1,M:1,K:1,S:1},(e=>Cn(e))),gl=new A().i(0,`java.lang.Integer`,{ce:1,Q:1,a:1,M:1,K:1,S:1},(e=>Sn(e)));function _l(e,t,n){if(n instanceof E){var r=n,i=r.l,a=r.h;return(e^i|t^a)===0}return!1}function vl(e,t){return e^t}var yl=new A().i(0,`java.lang.Long`,{ag:1,Q:1,a:1,M:1,K:1,S:1},(e=>e instanceof E)),bl=class extends wc{constructor(e){super(),z(this,e,null,!0,!0)}};new A().i(bl,`java.lang.NumberFormatException`,{ck:1,af:1,N:1,J:1,s:1,a:1});function K(e){for(var t=e.length,n=0,r=0;r!==t;)n=((n<<5)-n|0)+e.charCodeAt(r)|0,r=1+r|0;return n}function xl(e,t){return e===t}var Sl=new A().i(0,`java.lang.String`,{cp:1,a:1,M:1,Z:1,K:1,S:1},(e=>typeof e==`string`));function Cl(){}w=Cl.prototype=new Rc,w.constructor=Cl,w.i=(function(){return 2433880}),w.m=(function(){return`None`}),w.a9=(function(){return 0}),w.ab=(function(){return`None`}),w.aa=(function(e){throw Ec(new Dc,e)}),w.f3=(function(){throw new Pc(`None.get`)}),w.r=(function(){this.f3()}),new A().i(Cl,`scala.None$`,{cH:1,ak:1,b:1,d:1,R:1,a:1});var wl;function q(){return wl||=new Cl,wl}function J(e){this.aQ=null,this.aQ=e}w=J.prototype=new Rc,w.constructor=J,w.i=(function(){return B().dW(this,1323286827,!0)}),w.c=(function(e){return this===e||e instanceof J&&F().z(this.aQ,e.aQ)}),w.m=(function(){return I().el(this)}),w.a9=(function(){return 1}),w.ab=(function(){return`Some`}),w.aa=(function(e){if(e===0)return this.aQ;throw Ec(new Dc,e)}),w.r=(function(){return this.aQ}),new A().i(J,`scala.Some`,{al:1,ak:1,b:1,d:1,R:1,a:1});function Tl(){}w=Tl.prototype=new O,w.constructor=Tl;function El(){}El.prototype=w,w.s=(function(){return-1}),w.aJ=(function(e){Sa(this,e)}),w.aG=(function(e,t,n,r){return wa(this,e,t,n,r)}),w.at=(function(){return this.aL()});function Y(e){this.bs=null,this.R=0,this.aR=0,this.bs=e,this.R=0,this.aR=ra().b9(this.bs)}w=Y.prototype=new rc,w.constructor=Y,w.s=(function(){return this.aR-this.R|0}),w.l=(function(){return this.R<this.aR}),w.h=(function(){this.R>=ra().b9(this.bs)&&Ds().C.h();var e=I().aI(this.bs,this.R);return this.R=1+this.R|0,e}),w.bz=(function(e){if(e>0){var t=this.R+e|0;if(t<0)var n=this.aR;else var r=this.aR,n=r<t?r:t;this.R=n}return this}),new A().i(Y,`scala.collection.ArrayOps$ArrayIterator`,{cP:1,O:1,b:1,c:1,P:1,a:1});function Dl(e,t){return t<0?0:t>e.J?e.J:t}function Ol(e){this.dg=null,this.X=0,this.J=0,this.dg=e,this.X=0,this.J=e.d()}w=Ol.prototype=new rc,w.constructor=Ol,w.s=(function(){return this.J}),w.l=(function(){return this.J>0}),w.h=(function(){if(this.J>0){var e=this.dg.g(this.X);return this.X=1+this.X|0,this.J=this.J-1|0,e}return Ds().C.h()}),w.bz=(function(e){if(e>0){this.X=this.X+e|0;var t=this.J-e|0;this.J=t<0?0:t}return this}),w.bf=(function(e,t){var n=Dl(this,e),r=Dl(this,t)-n|0;return this.J=r<0?0:r,this.X=this.X+n|0,this}),new A().i(Ol,`scala.collection.IndexedSeqView$IndexedSeqViewIterator`,{cU:1,O:1,b:1,c:1,P:1,a:1});function kl(e){return e.dl||=(e.dk=new ju(new(Ms.r()).C(0)),!0),e.dk}function Al(){this.ed=null,this.dk=null,this.dl=!1,jl=this,this.ed=new Bc(this)}w=Al.prototype=new O,w.constructor=Al,w.f1=(function(e,t){return e instanceof xu?e:this.fY(fa().dM(e,t))}),w.fY=(function(e){if(e===null)return null;if(e instanceof k)return new ju(e);if(e instanceof Pn)return new ku(e);if(e instanceof Ln)return new Du(e);if(e instanceof Fn)return new Au(e);if(e instanceof In)return new Ou(e);if(e instanceof jn)return new Eu(e);if(e instanceof Mn)return new Tu(e);if(e instanceof Nn)return new Mu(e);if(e instanceof An)return new wu(e);if(Qi(e,1))return new Nu(e);throw new Ic(e)}),w.cc=(function(e,t){return this.f1(e,t)}),new A().i(Al,`scala.collection.immutable.ArraySeq$`,{d8:1,a:1,ao:1,am:1,an:1,ar:1});var jl;function Ml(){return jl||=new Al,jl}function Nl(){this.ee=null,this.dn=null,Pl=this,this.ee=new Bc(this),this.dn=new Gu(new k(0))}w=Nl.prototype=new O,w.constructor=Nl,w.f2=(function(e,t){return this.fn(fa().dM(e,t))}),w.fn=(function(e){if(e===null)return null;if(e instanceof k)return new Gu(e);if(e instanceof Pn)return new Uu(e);if(e instanceof Ln)return new Vu(e);if(e instanceof Fn)return new Wu(e);if(e instanceof In)return new Hu(e);if(e instanceof jn)return new Bu(e);if(e instanceof Mn)return new zu(e);if(e instanceof Nn)return new Ku(e);if(e instanceof An)return new Ru(e);if(Qi(e,1))return new qu(e);throw new Ic(e)}),w.cc=(function(e,t){return this.f2(e,t)}),new A().i(Nl,`scala.collection.mutable.ArraySeq$`,{df:1,a:1,ao:1,am:1,an:1,ar:1});var Pl;function Fl(){return Pl||=new Nl,Pl}function Il(){}w=Il.prototype=new yc,w.constructor=Il;function Ll(){}Ll.prototype=w;function Rl(e){return e.at()+`(<not computed>)`}function zl(){}w=zl.prototype=new O,w.constructor=zl;function Bl(){}Bl.prototype=w;var X=class e extends $s{constructor(e){super(),this.K=null,this.K=e,z(this,null,null,!0,!0)}ba(){return dn(this.K)}ab(){return`JavaScriptException`}a9(){return 1}aa(e){return e===0?this.K:L().fe(e)}bd(){return new ol(this)}i(){return B().dW(this,1744042595,!0)}c(t){return this===t||t instanceof e&&F().z(this.K,t.K)}};new A().i(X,`scala.scalajs.js.JavaScriptException`,{b2:1,N:1,J:1,s:1,a:1,R:1,d:1});function Vl(e,t){typeof console<`u`&&(e.d3&&console.error?console.error(t):console.log(t))}function Hl(e){this.d3=!1,this.aN=null,this.d3=e,new Oc,this.aN=``}w=Hl.prototype=new Ll,w.constructor=Hl,w.fi=(function(e){for(var t=e;t!==``;){var n=t.indexOf(`
`)|0;if(n<0)this.aN=``+this.aN+t,t=``;else{var r=this.aN,i=t;Vl(this,``+r+i.substring(0,n)),this.aN=``;var a=t,o=1+n|0;t=a.substring(o)}}}),new A().i(Hl,`java.lang.JSConsoleBasedPrintStream`,{cg:1,c5:1,c4:1,aa:1,a8:1,ac:1,a9:1,ab:1});function Ul(e,t,n){for(var r=n,i=t;;)if(i<=0||r.b())return r;else{var a=i-1|0,o=r.A();i=a,r=o}}function Wl(){this.aX=null}w=Wl.prototype=new Bl,w.constructor=Wl;function Gl(){}Gl.prototype=w,w.m=(function(){return this.aX}),w.c=(function(e){return this===e}),w.i=(function(){return yn(this)});function Kl(){}w=Kl.prototype=new El,w.constructor=Kl;function ql(){}ql.prototype=w,w.m=(function(){return Rl(this)});function Jl(){this.aX=null,this.aX=`Any`,Zu()}w=Jl.prototype=new Gl,w.constructor=Jl,w.dY=(function(){return j.l()}),w.dS=(function(e){return new k(e)}),new A().i(Jl,`scala.reflect.ManifestFactory$AnyManifest$`,{ds:1,aY:1,aX:1,a:1,aZ:1,aU:1,d:1,aV:1,aW:1});var Yl;function Xl(){return Yl||=new Jl,Yl}function Zl(){this.aX=null,this.aX=`Object`,Zu()}w=Zl.prototype=new Gl,w.constructor=Zl,w.dY=(function(){return j.l()}),w.dS=(function(e){return new k(e)}),new A().i(Zl,`scala.reflect.ManifestFactory$ObjectManifest$`,{dt:1,aY:1,aX:1,a:1,aZ:1,aU:1,d:1,aV:1,aW:1});var Ql;function $l(){return Ql||=new Zl,Ql}function Z(e,t){return e===t?!0:eu(t)&&t.cb(e)?e.bG(t):!1}function eu(e){return!!(e&&e.$classData&&e.$classData.n.f)}function tu(){}w=tu.prototype=new El,w.constructor=tu;function nu(){}nu.prototype=w,w.b=(function(){return sc(this)}),w.bG=(function(e){return cc(this,e)}),w.cb=(function(e){return!0}),w.c=(function(e){return Z(this,e)}),w.i=(function(){return B().dZ(this)}),w.m=(function(){return Vc(this)});function ru(){}w=ru.prototype=new ql,w.constructor=ru;function iu(){}iu.prototype=w;function au(e){return!!(e&&e.$classData&&e.$classData.n.m)}function ou(e){return!!(e&&e.$classData&&e.$classData.n.V)}function su(e,t){return e.aU=t,e}function cu(){this.aU=null}w=cu.prototype=new iu,w.constructor=cu;function lu(){}lu.prototype=w,w.g=(function(e){return this.aU.g(e)}),w.d=(function(){return this.aU.d()}),w.b=(function(){return this.aU.b()});function uu(){this.e5=null,this.cw=null,this.cx=!1,this.e4=null,this.cy=null,this.cz=!1,Gr(this),Vr(this),zr(this),Br(this)}w=uu.prototype=new O,w.constructor=uu,w.fP=(function(){return this.cx||=(this.cw=new R(`style`,M().P),!0),this.cw}),w.fR=(function(){return this.cz||=(this.cy=new Hs(this),!0),this.cy}),new A().i(uu,`com.raquo.laminar.api.package$$anon$1`,{bu:1,bG:1,bz:1,bE:1,bD:1,bF:1,bB:1,bs:1,bo:1,br:1,a3:1,a4:1,a2:1,bp:1});function du(e){this.aU=null,su(this,e)}w=du.prototype=new lu,w.constructor=du,w.au=(function(e){var t=this.d();return t===e?0:t<e?-1:1}),w.s=(function(){return this.d()}),w.e=(function(){return new Ol(this)}),w.aL=(function(){return`IndexedSeqView`}),new A().i(du,`scala.collection.IndexedSeqView$Id`,{cT:1,d3:1,cN:1,cO:1,l:1,b:1,c:1,j:1,i:1,h:1,a:1,d6:1,k:1,d2:1,o:1,cS:1});function fu(){}w=fu.prototype=new nu,w.constructor=fu;function pu(){}pu.prototype=w;function mu(e,t){return!gu(t)||e.d()===t.d()}function hu(e,t){if(gu(t)){if(e===t)return!0;var n=e.d(),r=n===t.d();if(r){var i=0,a=e.ca(),o=t.ca(),s=a<o?a:o,c=n>>31,l=s>>31,u=s<<1,d=s>>>31|0|l<<1;if(c===d?n>>>0>u>>>0:c>d)var f=s;else var f=n;for(;i<f&&r;)r=F().z(e.g(i),t.g(i)),i=1+i|0;if(i<n&&r)for(var p=e.e().bz(i),m=t.e().bz(i);r&&p.l();)r=F().z(p.h(),m.h())}return r}return cc(e,t)}function gu(e){return!!(e&&e.$classData&&e.$classData.n.t)}function _u(){}w=_u.prototype=new nu,w.constructor=_u;function vu(){}vu.prototype=w;function Q(e){this.bw=null,this.bw=e}w=Q.prototype=new O,w.constructor=Q,w.cb=(function(e){return mu(this,e)}),w.bG=(function(e){return hu(this,e)}),w.ca=(function(){return ja().dm}),w.e=(function(){return new Ol(new du(this))}),w.au=(function(e){var t=this.d();return t===e?0:t<e?-1:1}),w.s=(function(){return this.d()}),w.c=(function(e){return Z(this,e)}),w.i=(function(){return B().dZ(this)}),w.m=(function(){return Vc(this)}),w.b=(function(){return sc(this)}),w.aJ=(function(e){Sa(this,e)}),w.aG=(function(e,t,n,r){return wa(this,e,t,n,r)}),w.d=(function(){return this.bw.length|0}),w.g=(function(e){return this.bw[e]}),w.at=(function(){return`WrappedVarArgs`}),w.f=(function(e){return this.g(e|0)}),new A().i(Q,`scala.scalajs.runtime.WrappedVarArgs`,{b3:1,t:1,b:1,c:1,j:1,i:1,h:1,u:1,e:1,g:1,k:1,d:1,f:1,w:1,v:1,o:1,m:1,H:1,x:1,p:1,q:1,a:1});function yu(){}w=yu.prototype=new vu,w.constructor=yu;function bu(){}bu.prototype=w,w.dy=(function(e){return Go(this,e)});function xu(){}w=xu.prototype=new pu,w.constructor=xu;function Su(){}Su.prototype=w,w.au=(function(e){var t=this.d();return t===e?0:t<e?-1:1}),w.s=(function(){return this.d()}),w.aL=(function(){return`IndexedSeq`}),w.cb=(function(e){return mu(this,e)}),w.bG=(function(e){return hu(this,e)}),w.at=(function(){return`ArraySeq`}),w.ca=(function(){return 2147483647});function $(){}w=$.prototype=new vu,w.constructor=$;function Cu(){}Cu.prototype=w,w.au=(function(e){var t=this.d();return t===e?0:t<e?-1:1}),w.s=(function(){return this.d()}),w.aL=(function(){return`IndexedSeq`}),w.at=(function(){return`ArraySeq`}),w.c=(function(e){return e instanceof $&&ra().b9(this.L())!==ra().b9(e.L())?!1:Z(this,e)});function wu(e){this.ah=null,this.ah=e}w=wu.prototype=new Su,w.constructor=wu,w.d=(function(){return this.ah.a.length}),w.b8=(function(e){return this.ah.a[e]}),w.i=(function(){var e=B();return e.o(this.ah,e.n)}),w.c=(function(e){return e instanceof wu?P().dK(this.ah,e.ah):Z(this,e)}),w.e=(function(){return new Y(this.ah)}),w.g=(function(e){return this.b8(e)}),w.f=(function(e){return this.b8(e|0)}),new A().i(wu,`scala.collection.immutable.ArraySeq$ofBoolean`,{av:1,G:1,y:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,H:1,t:1,p:1,q:1,x:1,L:1,a:1});function Tu(e){this.ai=null,this.ai=e}w=Tu.prototype=new Su,w.constructor=Tu,w.d=(function(){return this.ai.a.length}),w.b0=(function(e){return this.ai.a[e]}),w.i=(function(){var e=B();return e.o(this.ai,e.n)}),w.c=(function(e){return e instanceof Tu?P().dF(this.ai,e.ai):Z(this,e)}),w.e=(function(){return new Y(this.ai)}),w.g=(function(e){return this.b0(e)}),w.f=(function(e){return this.b0(e|0)}),new A().i(Tu,`scala.collection.immutable.ArraySeq$ofByte`,{aw:1,G:1,y:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,H:1,t:1,p:1,q:1,x:1,L:1,a:1});function Eu(e){this.a0=null,this.a0=e}w=Eu.prototype=new Su,w.constructor=Eu,w.d=(function(){return this.a0.a.length}),w.b1=(function(e){return this.a0.a[e]}),w.i=(function(){var e=B();return e.o(this.a0,e.n)}),w.c=(function(e){return e instanceof Eu?P().dG(this.a0,e.a0):Z(this,e)}),w.e=(function(){return new Y(this.a0)}),w.aG=(function(e,t,n,r){return new Bu(this.a0).aG(e,t,n,r)}),w.g=(function(e){return wn(this.b1(e))}),w.f=(function(e){return wn(this.b1(e|0))}),new A().i(Eu,`scala.collection.immutable.ArraySeq$ofChar`,{ax:1,G:1,y:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,H:1,t:1,p:1,q:1,x:1,L:1,a:1});function Du(e){this.aj=null,this.aj=e}w=Du.prototype=new Su,w.constructor=Du,w.d=(function(){return this.aj.a.length}),w.b2=(function(e){return this.aj.a[e]}),w.i=(function(){var e=B();return e.o(this.aj,e.n)}),w.c=(function(e){if(e instanceof Du){var t=this.aj,n=e.aj;if(t===n)return!0;if(t.a.length===n.a.length){for(var r=0;r<t.a.length&&t.a[r]===n.a[r];)r=1+r|0;return r>=t.a.length}return!1}return Z(this,e)}),w.e=(function(){return new Y(this.aj)}),w.g=(function(e){return this.b2(e)}),w.f=(function(e){return this.b2(e|0)}),new A().i(Du,`scala.collection.immutable.ArraySeq$ofDouble`,{ay:1,G:1,y:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,H:1,t:1,p:1,q:1,x:1,L:1,a:1});function Ou(e){this.ak=null,this.ak=e}w=Ou.prototype=new Su,w.constructor=Ou,w.d=(function(){return this.ak.a.length}),w.b3=(function(e){return this.ak.a[e]}),w.i=(function(){var e=B();return e.o(this.ak,e.n)}),w.c=(function(e){if(e instanceof Ou){var t=this.ak,n=e.ak;if(t===n)return!0;if(t.a.length===n.a.length){for(var r=0;r<t.a.length&&t.a[r]===n.a[r];)r=1+r|0;return r>=t.a.length}return!1}return Z(this,e)}),w.e=(function(){return new Y(this.ak)}),w.g=(function(e){return this.b3(e)}),w.f=(function(e){return this.b3(e|0)}),new A().i(Ou,`scala.collection.immutable.ArraySeq$ofFloat`,{az:1,G:1,y:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,H:1,t:1,p:1,q:1,x:1,L:1,a:1});function ku(e){this.al=null,this.al=e}w=ku.prototype=new Su,w.constructor=ku,w.d=(function(){return this.al.a.length}),w.b4=(function(e){return this.al.a[e]}),w.i=(function(){var e=B();return e.o(this.al,e.n)}),w.c=(function(e){return e instanceof ku?P().dH(this.al,e.al):Z(this,e)}),w.e=(function(){return new Y(this.al)}),w.g=(function(e){return this.b4(e)}),w.f=(function(e){return this.b4(e|0)}),new A().i(ku,`scala.collection.immutable.ArraySeq$ofInt`,{aA:1,G:1,y:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,H:1,t:1,p:1,q:1,x:1,L:1,a:1});function Au(e){this.am=null,this.am=e}w=Au.prototype=new Su,w.constructor=Au,w.d=(function(){return this.am.a.length>>>1|0}),w.b5=(function(e){var t=this.am.a,n=e<<1;return D(t[n],t[n+1|0])}),w.i=(function(){var e=B();return e.o(this.am,e.n)}),w.c=(function(e){return e instanceof Au?P().dI(this.am,e.am):Z(this,e)}),w.e=(function(){return new Y(this.am)}),w.g=(function(e){return this.b5(e)}),w.f=(function(e){return this.b5(e|0)}),new A().i(Au,`scala.collection.immutable.ArraySeq$ofLong`,{aB:1,G:1,y:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,H:1,t:1,p:1,q:1,x:1,L:1,a:1});function ju(e){this.an=null,this.an=e}w=ju.prototype=new Su,w.constructor=ju,w.d=(function(){return this.an.a.length}),w.g=(function(e){return this.an.a[e]}),w.i=(function(){var e=B();return e.o(this.an,e.n)}),w.c=(function(e){return e instanceof ju?fa().dL(this.an,e.an):Z(this,e)}),w.e=(function(){return new Y(this.an)}),w.f=(function(e){return this.g(e|0)}),new A().i(ju,`scala.collection.immutable.ArraySeq$ofRef`,{aC:1,G:1,y:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,H:1,t:1,p:1,q:1,x:1,L:1,a:1});function Mu(e){this.ao=null,this.ao=e}w=Mu.prototype=new Su,w.constructor=Mu,w.d=(function(){return this.ao.a.length}),w.b6=(function(e){return this.ao.a[e]}),w.i=(function(){var e=B();return e.o(this.ao,e.n)}),w.c=(function(e){return e instanceof Mu?P().dJ(this.ao,e.ao):Z(this,e)}),w.e=(function(){return new Y(this.ao)}),w.g=(function(e){return this.b6(e)}),w.f=(function(e){return this.b6(e|0)}),new A().i(Mu,`scala.collection.immutable.ArraySeq$ofShort`,{aD:1,G:1,y:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,H:1,t:1,p:1,q:1,x:1,L:1,a:1});function Nu(e){this.aF=null,this.aF=e}w=Nu.prototype=new Su,w.constructor=Nu,w.d=(function(){return this.aF.a.length}),w.b7=(function(e){}),w.i=(function(){var e=B();return e.o(this.aF,e.n)}),w.c=(function(e){return e instanceof Nu?this.aF.a.length===e.aF.a.length:Z(this,e)}),w.e=(function(){return new Y(this.aF)}),w.g=(function(e){this.b7(e)}),w.f=(function(e){this.b7(e|0)}),new A().i(Nu,`scala.collection.immutable.ArraySeq$ofUnit`,{aE:1,G:1,y:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,H:1,t:1,p:1,q:1,x:1,L:1,a:1});function Pu(e,t,n,r){for(var i=r,a=n;;)if(a===t)return!i.b()|0;else{if(!i.b()){var o=1+a|0,s=i.A();a=o,i=s;continue}return-1}}function Fu(e,t,n){for(var r=n,i=t;;)if(i===r)return!0;else{var a=i.b(),o=r.b();if(!(a||o)&&F().z(i.M(),r.M())){var s=i.A(),c=r.A();i=s,r=c;continue}return a&&o}}function Iu(){}w=Iu.prototype=new pu,w.constructor=Iu;function Lu(){}Lu.prototype=w,w.g=(function(e){return Xc(this,e)}),w.bG=(function(e){return Zc(this,e)}),w.aL=(function(){return`LinearSeq`}),w.e=(function(){return new $c(this)}),w.ei=(function(e){if(this.b())return e;if(e.b())return this;for(var t=new Ju(e.M(),this),n=t,r=e.A();!r.b();){var i=new Ju(r.M(),this);n.aW=i,n=i,r=r.A()}return t}),w.b=(function(){return this===Zu()}),w.dV=(function(e){if(e instanceof Iu)return this.ei(e);if(e.s()===0)return this;var t=e.e();if(t.l()){for(var n=new Ju(t.h(),this),r=n;t.l();){var i=new Ju(t.h(),this);r.aW=i,r=i}return n}return this}),w.aJ=(function(e){for(var t=this;!t.b();)e.f(t.M()),t=t.A()}),w.d=(function(){for(var e=this,t=0;!e.b();)t=1+t|0,e=e.A();return t}),w.au=(function(e){return e<0?1:Pu(this,e,0,this)}),w.at=(function(){return`List`}),w.c=(function(e){return e instanceof Iu?Fu(this,this,e):Z(this,e)}),w.eM=(function(e){return Ul(this,e,this)}),w.f=(function(e){return Xc(this,e|0)});function Ru(e){this.a1=null,this.a1=e}w=Ru.prototype=new Cu,w.constructor=Ru,w.d=(function(){return this.a1.a.length}),w.b8=(function(e){return this.a1.a[e]}),w.i=(function(){var e=B();return e.o(this.a1,e.n)}),w.c=(function(e){return e instanceof Ru?P().dK(this.a1,e.a1):$.prototype.c.call(this,e)}),w.e=(function(){return new Y(this.a1)}),w.L=(function(){return this.a1}),w.g=(function(e){return this.b8(e)}),w.f=(function(e){return this.b8(e|0)}),new A().i(Ru,`scala.collection.mutable.ArraySeq$ofBoolean`,{aH:1,I:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,D:1,r:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function zu(e){this.a2=null,this.a2=e}w=zu.prototype=new Cu,w.constructor=zu,w.d=(function(){return this.a2.a.length}),w.b0=(function(e){return this.a2.a[e]}),w.i=(function(){var e=B();return e.o(this.a2,e.n)}),w.c=(function(e){return e instanceof zu?P().dF(this.a2,e.a2):$.prototype.c.call(this,e)}),w.e=(function(){return new Y(this.a2)}),w.L=(function(){return this.a2}),w.g=(function(e){return this.b0(e)}),w.f=(function(e){return this.b0(e|0)}),new A().i(zu,`scala.collection.mutable.ArraySeq$ofByte`,{aI:1,I:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,D:1,r:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function Bu(e){this.F=null,this.F=e}w=Bu.prototype=new Cu,w.constructor=Bu,w.d=(function(){return this.F.a.length}),w.b1=(function(e){return this.F.a[e]}),w.i=(function(){var e=B();return e.o(this.F,e.n)}),w.c=(function(e){return e instanceof Bu?P().dG(this.F,e.F):$.prototype.c.call(this,e)}),w.e=(function(){return new Y(this.F)}),w.aG=(function(e,t,n,r){var i=e.y;t.length!==0&&(i.k=``+i.k+t);var a=this.F.a.length;if(a!==0){if(n===``)i.eq(this.F);else{i.d();var o=this.F.a[0],s=``+mn(o);i.k+=s;for(var c=1;c<a;){i.k=``+i.k+n;var l=this.F.a[c],u=``+mn(l);i.k+=u,c=1+c|0}}}return r.length!==0&&(i.k=``+i.k+r),e}),w.L=(function(){return this.F}),w.g=(function(e){return wn(this.b1(e))}),w.f=(function(e){return wn(this.b1(e|0))}),new A().i(Bu,`scala.collection.mutable.ArraySeq$ofChar`,{aJ:1,I:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,D:1,r:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function Vu(e){this.G=null,this.G=e}w=Vu.prototype=new Cu,w.constructor=Vu,w.d=(function(){return this.G.a.length}),w.b2=(function(e){return this.G.a[e]}),w.i=(function(){var e=B();return e.o(this.G,e.n)}),w.c=(function(e){if(e instanceof Vu){var t=e.G;if(this.G===t)return!0;if(this.G.a.length===t.a.length){for(var n=0;n<this.G.a.length&&this.G.a[n]===t.a[n];)n=1+n|0;return n>=this.G.a.length}return!1}return $.prototype.c.call(this,e)}),w.e=(function(){return new Y(this.G)}),w.L=(function(){return this.G}),w.g=(function(e){return this.b2(e)}),w.f=(function(e){return this.b2(e|0)}),new A().i(Vu,`scala.collection.mutable.ArraySeq$ofDouble`,{aK:1,I:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,D:1,r:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function Hu(e){this.H=null,this.H=e}w=Hu.prototype=new Cu,w.constructor=Hu,w.d=(function(){return this.H.a.length}),w.b3=(function(e){return this.H.a[e]}),w.i=(function(){var e=B();return e.o(this.H,e.n)}),w.c=(function(e){if(e instanceof Hu){var t=e.H;if(this.H===t)return!0;if(this.H.a.length===t.a.length){for(var n=0;n<this.H.a.length&&this.H.a[n]===t.a[n];)n=1+n|0;return n>=this.H.a.length}return!1}return $.prototype.c.call(this,e)}),w.e=(function(){return new Y(this.H)}),w.L=(function(){return this.H}),w.g=(function(e){return this.b3(e)}),w.f=(function(e){return this.b3(e|0)}),new A().i(Hu,`scala.collection.mutable.ArraySeq$ofFloat`,{aL:1,I:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,D:1,r:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function Uu(e){this.a3=null,this.a3=e}w=Uu.prototype=new Cu,w.constructor=Uu,w.d=(function(){return this.a3.a.length}),w.b4=(function(e){return this.a3.a[e]}),w.i=(function(){var e=B();return e.o(this.a3,e.n)}),w.c=(function(e){return e instanceof Uu?P().dH(this.a3,e.a3):$.prototype.c.call(this,e)}),w.e=(function(){return new Y(this.a3)}),w.L=(function(){return this.a3}),w.g=(function(e){return this.b4(e)}),w.f=(function(e){return this.b4(e|0)}),new A().i(Uu,`scala.collection.mutable.ArraySeq$ofInt`,{aM:1,I:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,D:1,r:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function Wu(e){this.a4=null,this.a4=e}w=Wu.prototype=new Cu,w.constructor=Wu,w.d=(function(){return this.a4.a.length>>>1|0}),w.b5=(function(e){var t=this.a4.a,n=e<<1;return D(t[n],t[n+1|0])}),w.i=(function(){var e=B();return e.o(this.a4,e.n)}),w.c=(function(e){return e instanceof Wu?P().dI(this.a4,e.a4):$.prototype.c.call(this,e)}),w.e=(function(){return new Y(this.a4)}),w.L=(function(){return this.a4}),w.g=(function(e){return this.b5(e)}),w.f=(function(e){return this.b5(e|0)}),new A().i(Wu,`scala.collection.mutable.ArraySeq$ofLong`,{aN:1,I:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,D:1,r:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function Gu(e){this.a5=null,this.a5=e}w=Gu.prototype=new Cu,w.constructor=Gu,w.d=(function(){return this.a5.a.length}),w.g=(function(e){return this.a5.a[e]}),w.i=(function(){var e=B();return e.o(this.a5,e.n)}),w.c=(function(e){return e instanceof Gu?fa().dL(this.a5,e.a5):$.prototype.c.call(this,e)}),w.e=(function(){return new Y(this.a5)}),w.L=(function(){return this.a5}),w.f=(function(e){return this.g(e|0)}),new A().i(Gu,`scala.collection.mutable.ArraySeq$ofRef`,{aO:1,I:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,D:1,r:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function Ku(e){this.a6=null,this.a6=e}w=Ku.prototype=new Cu,w.constructor=Ku,w.d=(function(){return this.a6.a.length}),w.b6=(function(e){return this.a6.a[e]}),w.i=(function(){var e=B();return e.o(this.a6,e.n)}),w.c=(function(e){return e instanceof Ku?P().dJ(this.a6,e.a6):$.prototype.c.call(this,e)}),w.e=(function(){return new Y(this.a6)}),w.L=(function(){return this.a6}),w.g=(function(e){return this.b6(e)}),w.f=(function(e){return this.b6(e|0)}),new A().i(Ku,`scala.collection.mutable.ArraySeq$ofShort`,{aP:1,I:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,D:1,r:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function qu(e){this.ap=null,this.ap=e}w=qu.prototype=new Cu,w.constructor=qu,w.d=(function(){return this.ap.a.length}),w.b7=(function(e){}),w.i=(function(){var e=B();return e.o(this.ap,e.n)}),w.c=(function(e){return e instanceof qu?this.ap.a.length===e.ap.a.length:$.prototype.c.call(this,e)}),w.e=(function(){return new Y(this.ap)}),w.L=(function(){return this.ap}),w.g=(function(e){this.b7(e)}),w.f=(function(e){this.b7(e|0)}),new A().i(qu,`scala.collection.mutable.ArraySeq$ofUnit`,{aQ:1,I:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,D:1,r:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function Ju(e,t){this.c6=null,this.aW=null,this.c6=e,this.aW=t}w=Ju.prototype=new Lu,w.constructor=Ju,w.bd=(function(){return new zc(this)}),w.a9=(function(){return 2}),w.ab=(function(){return`::`}),w.aa=(function(e){if(e===0)return this.c6;if(e===1)return this.aW;throw Ec(new Dc,e)}),w.M=(function(){return this.c6}),w.A=(function(){return this.aW}),new A().i(Ju,`scala.collection.immutable.$colon$colon`,{d7:1,a0:1,y:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,aq:1,V:1,aG:1,aF:1,p:1,q:1,as:1,x:1,a:1,au:1,R:1});function Yu(){Xu=this,Zu(),Zu()}w=Yu.prototype=new Lu,w.constructor=Yu,w.bd=(function(){return new zc(this)}),w.a9=(function(){return 0}),w.ab=(function(){return`Nil`}),w.aa=(function(e){throw Ec(new Dc,e)}),w.fb=(function(){throw new Pc(`head of empty list`)}),w.fU=(function(){throw new Nc(`tail of empty list`)}),w.s=(function(){return 0}),w.e=(function(){return Ds().C}),w.M=(function(){this.fb()}),w.A=(function(){this.fU()}),new A().i(Yu,`scala.collection.immutable.Nil$`,{dc:1,a0:1,y:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,aq:1,V:1,aG:1,aF:1,p:1,q:1,as:1,x:1,a:1,au:1,R:1});var Xu;function Zu(){return Xu||=new Yu,Xu}function Qu(e,t){return e.y=t,e}function $u(e){return Qu(e,new ec),e}function ed(){this.y=null}w=ed.prototype=new vu,w.constructor=ed,w.dy=(function(e){return Go(this,e)}),w.e=(function(){return new Ol(new du(this))}),w.au=(function(e){var t=this.y.d();return t===e?0:t<e?-1:1}),w.aL=(function(){return`IndexedSeq`}),w.d=(function(){return this.y.d()}),w.s=(function(){return this.y.d()}),w.em=(function(e){var t=this.y,n=``+mn(e);return t.k+=n,this}),w.m=(function(){return this.y.k}),w.b=(function(){return this.y.d()===0}),w.g=(function(e){return wn(this.y.dC(e))}),w.f=(function(e){var t=e|0;return wn(this.y.dC(t))}),w.c9=(function(e){return this.em(En(e))}),w.dX=(function(){return this.y.k}),new A().i(ed,`scala.collection.mutable.StringBuilder`,{dm:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,D:1,r:1,A:1,F:1,E:1,aS:1,aT:1,aR:1,dk:1,o:1,m:1,C:1,B:1,Z:1,a:1});function td(e,t){return e.aq=t,e}function nd(e){return td(e,[]),e}function rd(){this.aq=null}w=rd.prototype=new bu,w.constructor=rd,w.aL=(function(){return`IndexedSeq`}),w.e=(function(){return new Ol(new du(this))}),w.au=(function(e){var t=this.aq.length|0;return t===e?0:t<e?-1:1}),w.g=(function(e){return this.aq[e]}),w.d=(function(){return this.aq.length|0}),w.s=(function(){return this.aq.length|0}),w.at=(function(){return`WrappedArray`}),w.dX=(function(){return this}),w.c9=(function(e){return this.aq.push(e),this}),w.f=(function(e){var t=e|0;return this.aq[t]}),new A().i(rd,`scala.scalajs.js.WrappedArray`,{dH:1,dd:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,D:1,r:1,A:1,F:1,E:1,aS:1,aT:1,dl:1,dg:1,q:1,p:1,B:1,o:1,m:1,C:1,di:1,aR:1,a:1}),ui(new(Sl.r()).C([]));