var e=Object.defineProperty,t=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r},n=class extends Event{constructor(e){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-tab-show`,{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}},r=class extends Event{constructor(e){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-tab-hide`,{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}};
/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const i=globalThis,a=i.ShadowRoot&&(i.ShadyCSS===void 0||i.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,o=Symbol(),s=/* @__PURE__ */ new WeakMap;var c=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(a&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=s.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&s.set(t,e))}return e}toString(){return this.cssText}};const l=e=>new c(typeof e==`string`?e:e+``,void 0,o),u=(e,...t)=>new c(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,o),d=(e,t)=>{if(a)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=i.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},f=a?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return l(t)})(e):e,{is:p,defineProperty:m,getOwnPropertyDescriptor:ee,getOwnPropertyNames:te,getOwnPropertySymbols:ne,getPrototypeOf:re}=Object,ie=globalThis,ae=ie.trustedTypes,oe=ae?ae.emptyScript:``,se=ie.reactiveElementPolyfillSupport,ce=(e,t)=>e,le={toAttribute(e,t){
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
switch(t){case Boolean:e=e?oe:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},ue=(e,t)=>!p(e,t),de={attribute:!0,type:String,converter:le,reflect:!1,useDefault:!1,hasChanged:ue};Symbol.metadata??=Symbol(`metadata`),ie.litPropertyMetadata??=/* @__PURE__ */ new WeakMap;var fe=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=de){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&m(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=ee(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??de}static _$Ei(){if(this.hasOwnProperty(ce(`elementProperties`)))return;let e=re(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ce(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ce(`properties`))){let e=this.properties,t=[...te(e),...ne(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=/* @__PURE__ */ new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(f(e))}else e!==void 0&&t.push(f(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=/* @__PURE__ */ new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=/* @__PURE__ */ new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=/* @__PURE__ */ new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return d(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?le:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?le:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??ue)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=/* @__PURE__ */ new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=/* @__PURE__ */ new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=/* @__PURE__ */ new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};fe.elementStyles=[],fe.shadowRootOptions={mode:`open`},fe[ce(`elementProperties`)]=/* @__PURE__ */ new Map,fe[ce(`finalized`)]=/* @__PURE__ */ new Map,se?.({ReactiveElement:fe}),(ie.reactiveElementVersions??=[]).push(`2.1.2`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const pe=globalThis,me=e=>e,he=pe.trustedTypes,ge=he?he.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,_e=`$lit$`,ve=`lit$${Math.random().toFixed(9).slice(2)}$`,ye=`?`+ve,be=`<${ye}>`,xe=document,Se=()=>xe.createComment(``),Ce=e=>e===null||typeof e!=`object`&&typeof e!=`function`,we=Array.isArray,Te=e=>we(e)||typeof e?.[Symbol.iterator]==`function`,Ee=`[ 	
\f\r]`,De=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Oe=/-->/g,ke=/>/g,Ae=RegExp(`>|${Ee}(?:([^\\s"'>=/]+)(${Ee}*=${Ee}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),je=/'/g,Me=/"/g,Ne=/^(?:script|style|textarea|title)$/i,Pe=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),Fe=Symbol.for(`lit-noChange`),h=Symbol.for(`lit-nothing`),Ie=/* @__PURE__ */ new WeakMap,Le=xe.createTreeWalker(xe,129);function Re(e,t){if(!we(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return ge===void 0?t:ge.createHTML(t)}const ze=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=De;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===De?c[1]===`!--`?o=Oe:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=Ae):(Ne.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=Ae):o=ke:o===Ae?c[0]===`>`?(o=i??De,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?Ae:c[3]===`"`?Me:je):o===Me||o===je?o=Ae:o===Oe||o===ke?o=De:(o=Ae,i=void 0);let d=o===Ae&&e[t+1].startsWith(`/>`)?` `:``;a+=o===De?n+be:l>=0?(r.push(s),n.slice(0,l)+_e+n.slice(l)+ve+d):n+ve+(l===-2?t:d)}return[Re(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]};var Be=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=ze(t,n);if(this.el=e.createElement(l,r),Le.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=Le.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(_e)){let t=u[o++],n=i.getAttribute(e).split(ve),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Ge:r[1]===`?`?Ke:r[1]===`@`?qe:We}),i.removeAttribute(e)}else e.startsWith(ve)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Ne.test(i.tagName)){let e=i.textContent.split(ve),t=e.length-1;if(t>0){i.textContent=he?he.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],Se()),Le.nextNode(),c.push({type:2,index:++a});i.append(e[t],Se())}}}else if(i.nodeType===8){if(i.data===ye)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(ve,e+1))!==-1;)c.push({type:7,index:a}),e+=ve.length-1}}a++}}static createElement(e,t){let n=xe.createElement(`template`);return n.innerHTML=e,n}};function Ve(e,t,n=e,r){if(t===Fe)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=Ce(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=Ve(e,i._$AS(e,t.values),i,r)),t}var He=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??xe).importNode(t,!0);Le.currentNode=r;let i=Le.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Ue(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Je(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=Le.nextNode(),a++)}return Le.currentNode=xe,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Ue=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ve(this,e,t),Ce(e)?e===h||e==null||e===``?(this._$AH!==h&&this._$AR(),this._$AH=h):e!==this._$AH&&e!==Fe&&this._(e):e._$litType$===void 0?e.nodeType===void 0?Te(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==h&&Ce(this._$AH)?this._$AA.nextSibling.data=e:this.T(xe.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Be.createElement(Re(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new He(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Ie.get(e.strings);return t===void 0&&Ie.set(e.strings,t=new Be(e)),t}k(t){we(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(Se()),this.O(Se()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=me(e).nextSibling;me(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},We=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=h,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(/* @__PURE__ */ new String),this.strings=n):this._$AH=h}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=Ve(this,e,t,0),a=!Ce(e)||e!==this._$AH&&e!==Fe,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=Ve(this,r[n+o],t,o),s===Fe&&(s=this._$AH[o]),a||=!Ce(s)||s!==this._$AH[o],s===h?e=h:e!==h&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Ge=class extends We{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===h?void 0:e}},Ke=class extends We{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==h)}},qe=class extends We{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=Ve(this,e,t,0)??h)===Fe)return;let n=this._$AH,r=e===h&&n!==h||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==h&&(n===h||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Je=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Ve(this,e)}};const Ye={M:_e,P:ve,A:ye,C:1,L:ze,R:He,D:Te,V:Ve,I:Ue,H:We,N:Ke,U:qe,B:Ge,F:Je},Xe=pe.litHtmlPolyfillSupport;Xe?.(Be,Ue),(pe.litHtmlVersions??=[]).push(`3.3.3`);const Ze=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Ue(t.insertBefore(Se(),e),e,void 0,n??{})}return i._$AI(e),i},Qe=globalThis
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
;var $e=class extends fe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ze(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Fe}};$e._$litElement$=!0,$e.finalized=!0,Qe.litElementHydrateSupport?.({LitElement:$e});const et=Qe.litElementPolyfillSupport;et?.({LitElement:$e}),(Qe.litElementVersions??=[]).push(`4.2.2`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var tt=u`
  :host {
    --indicator-color: var(--wa-color-brand-fill-loud);
    --track-color: var(--wa-color-neutral-fill-normal);
    --track-width: 0.125rem;

    /* Private */
    --safe-track-width: max(0.5px, round(var(--track-width), 0.5px));

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tabs {
    display: flex;
    position: relative;
  }

  .indicator {
    position: absolute;
  }

  .tab-group-has-scroll-controls .nav-container {
    position: relative;
    padding: 0 1.5em;
  }

  .body {
    display: block;
  }

  .scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 1.5em;
  }

  .scroll-button-start {
    inset-inline-start: 0;
  }

  .scroll-button-end {
    inset-inline-end: 0;
  }

  /*
    * Top
    */

  .tab-group-top {
    flex-direction: column;
  }

  .tab-group-top .nav-container {
    order: 1;
  }

  .tab-group-top .nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group-top .nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group-top .tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--safe-track-width) var(--track-color);
  }

  .tab-group-top .indicator {
    bottom: calc(-1 * var(--safe-track-width));
    border-bottom: solid var(--safe-track-width) var(--indicator-color);
  }

  .tab-group-top .body {
    order: 2;
  }

  .tab-group-top ::slotted(wa-tab[active]) {
    border-block-end: solid var(--safe-track-width) var(--indicator-color);
    margin-block-end: calc(-1 * var(--safe-track-width));
  }

  .tab-group-top .body slot::slotted(wa-tab-panel) {
    --padding: var(--wa-space-xl) 0;
  }

  /*
    * Bottom
    */

  .tab-group-bottom {
    flex-direction: column;
  }

  .tab-group-bottom .nav-container {
    order: 2;
  }

  .tab-group-bottom .nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group-bottom .nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group-bottom .tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--safe-track-width) var(--track-color);
  }

  .tab-group-bottom .indicator {
    top: calc(-1 * var(--safe-track-width));
    border-top: solid var(--safe-track-width) var(--indicator-color);
  }

  .tab-group-bottom .body {
    order: 1;
  }

  .tab-group-bottom ::slotted(wa-tab[active]) {
    border-block-start: solid var(--safe-track-width) var(--indicator-color);
    margin-block-start: calc(-1 * var(--safe-track-width));
  }

  .tab-group-bottom .body slot::slotted(wa-tab-panel) {
    --padding: var(--wa-space-xl) 0;
  }

  /*
    * Start
    */

  .tab-group-start {
    flex-direction: row;
  }

  .tab-group-start .nav-container {
    order: 1;
  }

  .tab-group-start .tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--safe-track-width) var(--track-color);
  }

  .tab-group-start .indicator {
    inset-inline-end: calc(-1 * var(--safe-track-width));
    border-right: solid var(--safe-track-width) var(--indicator-color);
  }

  .tab-group-start .body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group-start ::slotted(wa-tab[active]) {
    border-inline-end: solid var(--safe-track-width) var(--indicator-color);
    margin-inline-end: calc(-1 * var(--safe-track-width));
  }

  .tab-group-start .body slot::slotted(wa-tab-panel) {
    --padding: 0 var(--wa-space-xl);
  }

  /*
    * End
    */

  .tab-group-end {
    flex-direction: row;
  }

  .tab-group-end .nav-container {
    order: 2;
  }

  .tab-group-end .tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--safe-track-width) var(--track-color);
  }

  .tab-group-end .indicator {
    inset-inline-start: calc(-1 * var(--safe-track-width));
    border-inline-start: solid var(--safe-track-width) var(--indicator-color);
  }

  .tab-group-end .body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group-end ::slotted(wa-tab[active]) {
    border-inline-start: solid var(--safe-track-width) var(--indicator-color);
    margin-inline-start: calc(-1 * var(--safe-track-width));
  }

  .tab-group-end .body slot::slotted(wa-tab-panel) {
    --padding: 0 var(--wa-space-xl);
  }
`;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function nt(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}function rt(e,t,n=`vertical`,r=`smooth`){let i=nt(e,t),a=i.top+t.scrollTop,o=i.left+t.scrollLeft,s=t.scrollLeft,c=t.scrollLeft+t.offsetWidth,l=t.scrollTop,u=t.scrollTop+t.offsetHeight;(n===`horizontal`||n===`both`)&&(o<s?t.scrollTo({left:o,behavior:r}):o+e.clientWidth>c&&t.scrollTo({left:o-t.offsetWidth+e.clientWidth,behavior:r})),(n===`vertical`||n===`both`)&&(a<l?t.scrollTo({top:a,behavior:r}):a+e.clientHeight>u&&t.scrollTo({top:a-t.offsetHeight+e.clientHeight,behavior:r}))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function it(e,t){let n={waitUntilFirstUpdate:!1,...t};return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var at=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,st=e=>{throw TypeError(e)},g=(e,t,n,r)=>{for(var i=r>1?void 0:r?ot(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&at(t,n,i),i},ct=(e,t,n)=>t.has(e)||st(`Cannot `+n),lt=(e,t,n)=>(ct(e,t,`read from private field`),n?n.call(e):t.get(e)),ut=(e,t,n)=>t.has(e)?st(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),dt=(e,t,n,r)=>(ct(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const ft=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},pt={attribute:!0,type:String,converter:le,reflect:!1,hasChanged:ue},mt=(e=pt,t,n)=>{
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=/* @__PURE__ */ new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function _(e){return(t,n)=>typeof n==`object`?mt(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function ht(e){return _({...e,state:!0,attribute:!1})}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const gt=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function _t(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return gt(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return gt(n,r,{get(){return a(this)}})}}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var vt=u`
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
`,yt=/;\s+$/;function bt(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function xt(e){let{property:t,value:n,element:r}=e;if(n){let e=r.getAttribute(`style`)||``;e&&(e.match(yt)||(e+=`;`),e+=` `);let i=`${t}: ${n}`;return e.includes(i)?void 0:`${e}${i};`}return null}var St,Ct=class extends $e{constructor(){super(),ut(this,St,!1),this.initialReflectedProperties=/* @__PURE__ */ new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,t)=>{if(this.internals?.states)try{t?this.internals.states.add(e):this.internals.states.delete(e)}catch(e){if(String(e).includes(`must start with '--'`))console.error(`Your browser implements an outdated version of CustomStateSet. Consider using a polyfill`);else throw e}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error(`Element internals are not supported in your browser. Consider using a polyfill`)}this.customStates.set(`wa-defined`,!0);let e=this.constructor;for(let[t,n]of e.elementProperties)n.default===`inherit`&&n.initial!==void 0&&typeof t==`string`&&this.customStates.set(`initial-${t}-${n.initial}`,!0)}static get styles(){return[vt,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `)),this.didSSR&&this.updateComplete.then(()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `))})}attributeChangedCallback(e,t,n){lt(this,St)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),dt(this,St,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll(`slot`).forEach(e=>{e.dispatchEvent(new Event(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(e){if(this.didSSR&&!this.hasUpdated){let t=new Event(`lit-hydration-error`,{bubbles:!0,composed:!0,cancelable:!1});t.error=e,this.dispatchEvent(t)}throw e}}setStyle(e,t){if(this.style)this.style[e]=t;else{let n=xt({property:bt(e),value:t,element:this});n&&this.setAttribute(`style`,n)}}setStyleProperty(e,t){if(this.style)this.style.setProperty(e,t);else{let n=xt({property:e,value:t,element:this});n&&this.setAttribute(`style`,n)}}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};St=/* @__PURE__ */ new WeakMap,g([_()],Ct.prototype,`dir`,2),g([_()],Ct.prototype,`lang`,2),g([_({type:Boolean,reflect:!0,attribute:`did-ssr`})],Ct.prototype,`didSSR`,2);const wt=/* @__PURE__ */ new Set,Tt=/* @__PURE__ */ new Map;let Et,Dt=`ltr`,Ot=`en`;const kt=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(kt){let e=new MutationObserver(jt);Dt=document.documentElement.dir||`ltr`,Ot=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function At(...e){e.map(e=>{let t=e.$code.toLowerCase();Tt.has(t)?Tt.set(t,Object.assign(Object.assign({},Tt.get(t)),e)):Tt.set(t,e),Et||=e}),jt()}function jt(){kt&&(Dt=document.documentElement.dir||`ltr`,Ot=document.documentElement.lang||navigator.language),[...wt.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var Mt=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){wt.add(this.host)}hostDisconnected(){wt.delete(this.host)}dir(){return`${this.host.dir||Dt}`.toLowerCase()}lang(){let e=`${this.host.lang||Ot}`.toLowerCase().replace(/_/g,`-`);try{return new Intl.Locale(e),e}catch{return Et?Et.$code.toLowerCase():`en`}}getTranslationData(e){let t;try{t=new Intl.Locale(e.replace(/_/g,`-`))}catch{return{locale:void 0,language:``,region:``,primary:void 0,secondary:void 0}}let n=t.language.toLowerCase(),r=t.region?.toLowerCase()??``,i=Tt.get(`${n}-${r}`),a=Tt.get(n);return{locale:t,language:n,region:r,primary:i,secondary:a}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&Et&&Et[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(Et&&Et[e])i=Et[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},Nt={$code:`en`,$name:`English`,$dir:`ltr`,allTagsRemoved:`All tags removed`,am:`AM`,autosizeColumn:`Autosize column`,captions:`Captions`,carousel:`Carousel`,chooseDate:`Choose date`,chooseDecade:`Choose decade`,chooseMonth:`Choose month`,chooseTime:`Choose time`,chooseYear:`Choose year`,clearEntry:`Clear entry`,clearFilter:`Clear filter`,clearSort:`Clear sort`,close:`Close`,closeCalendar:`Close calendar`,closeTimeInput:`Close time picker`,collapseRow:`Collapse row`,columnMenu:`Column options`,columnMovedToPosition:(e,t,n)=>`${e} moved to position ${t} of ${n}`,columns:`Columns`,compactPageXOfY:(e,t)=>`${e} of ${t}`,completed:`Completed`,copied:`Copied`,copy:`Copy`,createOption:e=>`Create "${e}"`,currentlyPlaying:`currently playing`,currentValue:`Current value`,date:`Date`,datePickerKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the calendar.`,day:`Day`,dayPeriod:`AM/PM`,decrement:`Decrement`,deselectAllRows:`Deselect all rows`,disabled:`Disabled`,dropFileHere:`Drop file here or click to browse`,dropFilesHere:`Drop files here or click to browse`,empty:`Empty`,endDate:`End date`,enterFullscreen:`Enter fullscreen`,error:`Error`,exitFullscreen:`Exit fullscreen`,expandRow:`Expand row`,filterByColumn:e=>`Filter by ${e}`,filterFrom:`From`,filterMax:`Max`,filterMin:`Min`,filterTo:`To`,firstPage:`First page`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hideColumn:`Hide column`,hidePassword:`Hide password`,hour:`Hour`,incompleteDate:`Enter a valid date.`,increment:`Increment`,jumpBackwardX:e=>`Jump back ${e} pages`,jumpForwardX:e=>`Jump forward ${e} pages`,lastPage:`Last page`,loading:`Loading`,locked:`Locked`,minute:`Minute`,month:`Month`,moreOptions:`More Options`,mute:`Mute`,nextDecade:`Next decade`,nextMonth:`Next month`,nextPage:`Next page`,nextSlide:`Next slide`,nextVideo:`Next Video`,nextYear:`Next year`,noData:`No data`,noOptions:`No options`,noResults:`No matching results`,notCompleted:`Not completed`,now:`Now`,numCharacters:e=>e===1?`1 character`:`${e} characters`,numCharactersRemaining:e=>e===1?`1 character remaining`:`${e} characters remaining`,numOptionsAvailable:e=>e===0?`No options available`:e===1?`1 option available`:`${e} options available`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,numRowsCopied:e=>e===1?`1 row copied`:`${e} rows copied`,numRowsSelected:e=>e===1?`1 row selected`:`${e} rows selected`,optionPosition:(e,t,n)=>`${e}, ${t} of ${n}`,optionsLoadError:`Options could not be loaded`,pageXOfY:(e,t)=>`Page ${e} of ${t}`,pagination:`Pagination`,pause:`Pause`,pauseAnimation:`Pause animation`,pictureInPicture:`Picture in picture`,pinLeft:`Pin left`,pinRight:`Pin right`,play:`Play`,playAnimation:`Play animation`,playbackSpeed:`Playback speed`,playlist:`Playlist`,pm:`PM`,previousDecade:`Previous decade`,previousMonth:`Previous month`,previousPage:`Previous page`,previousSlide:`Previous slide`,previousVideo:`Previous video`,previousYear:`Previous year`,progress:`Progress`,rangeTooLong:e=>e===1?`Select a range no longer than 1 day`:`Select a range no longer than ${e} days`,rangeTooShort:e=>e===1?`Select a range at least 1 day long`:`Select a range at least ${e} days long`,readonly:`Read-only`,remove:`Remove`,resetColumns:`Reset columns`,resize:`Resize`,resizeColumn:`Resize column`,rowsPerPage:`Rows per page`,scrollableRegion:`Scrollable region`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,search:`Search`,second:`Second`,seek:`Seek`,seekProgress:(e,t)=>`${e} of ${t}`,selectAColorFromTheScreen:`Select a color from the screen`,selectAllRows:`Select all rows`,selected:`Selected`,selectedDateLabel:e=>`Selected: ${e}`,selectedRangeLabel:e=>`Selected range: ${e}`,selectGroup:`Select group`,selectionCleared:`Selection cleared`,selectRow:`Select row`,showingNofMRows:(e,t)=>`Showing ${e} of ${t} rows`,showingXtoYofZ:(e,t,n)=>`${e}\u2013${t} of ${n}`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,sortAscending:`Sort ascending`,sortColumn:`Sort column`,sortDescending:`Sort descending`,startDate:`Start date`,steps:`Steps`,stepXOfY:(e,t)=>`Step ${e} of ${t}`,tagAdded:e=>`${e} added`,tagAlreadyAdded:e=>`${e} is already added`,tagInputKeyboardHelp:`Press Backspace or Delete to remove this tag.`,tagRemoved:e=>`${e} removed`,time:`Time`,timeInputKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the time picker.`,today:`Today`,toggleColorFormat:`Toggle color format`,tooFewTags:e=>e===1?`Add at least 1 tag`:`Add at least ${e} tags`,tooManyTags:e=>e===1?`Add no more than 1 tag`:`Add no more than ${e} tags`,unmute:`Unmute`,unpin:`Unpin`,unpinColumn:`Unpin column`,videoPlayer:`Video player`,volume:`Volume`,year:`Year`,zoomIn:`Zoom in`,zoomOut:`Zoom out`}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;At(Nt);var Pt=Nt,Ft=class extends Mt{lang(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||`en`:super.lang()}};At(Pt);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const It={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Lt=e=>(...t)=>({_$litDirective$:e,values:t});var Rt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const zt=Lt(class extends Rt{constructor(e){if(super(e),e.type!==It.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=/* @__PURE__ */ new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return Fe}});
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var v=class extends Ct{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new Ft(this),this.hasScrollControls=!1,this.active=``,this.placement=`top`,this.activation=`auto`,this.withoutScrollControls=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.updateScrollControls()}),this.mutationObserver=new MutationObserver(e=>{e.some(e=>![`aria-labelledby`,`aria-controls`].includes(e.attributeName))&&setTimeout(()=>this.setAriaLabels());let t=e.filter(e=>e.target.closest(`wa-tab-group`)===this);if(t.some(e=>e.attributeName===`disabled`))this.syncTabsAndPanels();else if(t.some(e=>e.attributeName===`active`)){let e=t.filter(e=>e.attributeName===`active`&&e.target.tagName.toLowerCase()===`wa-tab`).map(e=>e.target).find(e=>e.active);e&&e.closest(`wa-tab-group`)===this&&this.setActiveTab(e)}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),new IntersectionObserver((e,t)=>{if(e[0].intersectionRatio>0){if(this.setAriaLabels(),this.active){let e=this.tabs.find(e=>e.panel===this.active);e&&this.setActiveTab(e)}else this.setActiveTab(this.getActiveTab()??this.tabs[0],{emitEvents:!1});t.unobserve(e[0].target)}}).observe(this.tabGroup)})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect(),this.nav&&this.resizeObserver?.unobserve(this.nav)}getAllTabs(){return[...this.shadowRoot.querySelector(`slot[name="nav"]`).assignedElements()].filter(e=>e.tagName.toLowerCase()===`wa-tab`)}getAllPanels(){return[...this.defaultSlot.assignedElements()].filter(e=>e.tagName.toLowerCase()===`wa-tab-panel`)}getActiveTab(){return this.tabs.find(e=>e.active)}handleClick(e){let t=e.target.closest(`wa-tab`);t?.closest(`wa-tab-group`)===this&&t!==null&&this.setActiveTab(t,{scrollBehavior:`smooth`})}handleKeyDown(e){let t=e.target.closest(`wa-tab`);if(t?.closest(`wa-tab-group`)===this){if([`Enter`,` `].includes(e.key))t!==null&&(this.setActiveTab(t,{scrollBehavior:`smooth`}),e.preventDefault());else if([`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`,`Home`,`End`].includes(e.key)){let t=this.tabs.find(e=>e.matches(`:focus`)),n=this.localize.dir()===`rtl`,r=null;if(t?.tagName.toLowerCase()===`wa-tab`){if(e.key===`Home`)r=this.focusableTabs[0];else if(e.key===`End`)r=this.focusableTabs[this.focusableTabs.length-1];else if([`top`,`bottom`].includes(this.placement)&&e.key===(n?`ArrowRight`:`ArrowLeft`)||[`start`,`end`].includes(this.placement)&&e.key===`ArrowUp`){let e=this.tabs.findIndex(e=>e===t);r=this.findNextFocusableTab(e,`backward`)}else if([`top`,`bottom`].includes(this.placement)&&e.key===(n?`ArrowLeft`:`ArrowRight`)||[`start`,`end`].includes(this.placement)&&e.key===`ArrowDown`){let e=this.tabs.findIndex(e=>e===t);r=this.findNextFocusableTab(e,`forward`)}if(!r)return;r.tabIndex=0,r.focus({preventScroll:!0}),this.activation===`auto`?this.setActiveTab(r,{scrollBehavior:`smooth`}):this.tabs.forEach(e=>{e.tabIndex=e===r?0:-1}),[`top`,`bottom`].includes(this.placement)&&rt(r,this.nav,`horizontal`),e.preventDefault()}}}}findNextFocusableTab(e,t){let n=null,r=t===`forward`?1:-1,i=e+r;for(;e<this.tabs.length;){if(n=this.tabs[i]||null,n===null){n=t===`forward`?this.focusableTabs[0]:this.focusableTabs[this.focusableTabs.length-1];break}if(!n.disabled)break;i+=r}return n}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()===`rtl`?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:`smooth`})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()===`rtl`?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:`smooth`})}setActiveTab(e,t){if(t={emitEvents:!0,scrollBehavior:`auto`,...t},e.closest(`wa-tab-group`)===this&&e!==this.activeTab&&!e.disabled){let i=this.activeTab;this.active=e.panel,this.activeTab=e,this.tabs.forEach(e=>{e.active=e===this.activeTab,e.tabIndex=e===this.activeTab?0:-1}),this.panels.forEach(e=>e.active=e.name===this.activeTab?.panel),[`top`,`bottom`].includes(this.placement)&&rt(this.activeTab,this.nav,`horizontal`,t.scrollBehavior),t.emitEvents&&(i&&this.dispatchEvent(new r({name:i.panel})),this.dispatchEvent(new n({name:this.activeTab.panel})))}}setAriaLabels(){this.tabs.forEach(e=>{let t=this.panels.find(t=>t.name===e.panel);t&&(e.setAttribute(`aria-controls`,t.getAttribute(`id`)),t.setAttribute(`aria-labelledby`,e.getAttribute(`id`)))})}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(e=>!e.disabled),this.panels=this.getAllPanels(),this.updateComplete.then(()=>this.updateScrollControls())}updateActiveTab(){let e=this.tabs.find(e=>e.panel===this.active);e&&this.setActiveTab(e,{scrollBehavior:`smooth`})}updateScrollControls(){this.hasScrollControls=!this.withoutScrollControls&&[`top`,`bottom`].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1}render(){let e=this.hasUpdated?this.localize.dir()===`rtl`:this.dir===`rtl`;return Pe`
      <div
        part="base tab-group"
        class=${zt({"tab-group":!0,"tab-group-top":this.placement===`top`,"tab-group-bottom":this.placement===`bottom`,"tab-group-start":this.placement===`start`,"tab-group-end":this.placement===`end`,"tab-group-has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="nav-container" part="nav">
          ${this.hasScrollControls?Pe`
                <wa-button
                  part="scroll-button scroll-button-start"
                  exportparts="base:scroll-button__base"
                  class="scroll-button scroll-button-start"
                  appearance="plain"
                  @click=${this.handleScrollToStart}
                >
                  <wa-icon
                    name=${e?`chevron-right`:`chevron-left`}
                    library="system"
                    variant="solid"
                    label=${this.localize.term(`scrollToStart`)}
                  ></wa-icon>
                </wa-button>
              `:``}

          <!-- We have a focus listener because in Firefox (and soon to be Chrome) overflow containers are focusable. -->
          <div class="nav" @focus=${()=>this.activeTab?.focus({preventScroll:!0})}>
            <div part="tabs" class="tabs" role="tablist">
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls?Pe`
                <wa-button
                  part="scroll-button scroll-button-end"
                  class="scroll-button scroll-button-end"
                  exportparts="base:scroll-button__base"
                  appearance="plain"
                  @click=${this.handleScrollToEnd}
                >
                  <wa-icon
                    name=${e?`chevron-left`:`chevron-right`}
                    library="system"
                    variant="solid"
                    label=${this.localize.term(`scrollToEnd`)}
                  ></wa-icon>
                </wa-button>
              `:``}
        </div>

        <div part="body" class="body"><slot @slotchange=${this.syncTabsAndPanels}></slot></div>
      </div>
    `}};v.css=tt,g([_t(`.tab-group`)],v.prototype,`tabGroup`,2),g([_t(`.body slot`)],v.prototype,`defaultSlot`,2),g([_t(`.nav`)],v.prototype,`nav`,2),g([ht()],v.prototype,`hasScrollControls`,2),g([_({reflect:!0})],v.prototype,`active`,2),g([_()],v.prototype,`placement`,2),g([_()],v.prototype,`activation`,2),g([_({attribute:`without-scroll-controls`,type:Boolean})],v.prototype,`withoutScrollControls`,2),g([it(`active`)],v.prototype,`updateActiveTab`,1),g([it(`withoutScrollControls`,{waitUntilFirstUpdate:!0})],v.prototype,`updateScrollControls`,1),v=g([ft(`wa-tab-group`)],v);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Bt=u`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`,Vt=0,Ht=class extends Ct{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(...arguments),this.attrId=++Vt,this.componentId=`wa-tab-panel-${this.attrId}`,this.name=``,this.active=!1,this.role=`tabpanel`}connectedCallback(){super.connectedCallback(),this.id=(this.id||``).length>0?this.id:this.componentId}handleActiveChange(){this.setAttribute(`aria-hidden`,this.active?`false`:`true`)}render(){return Pe`
      <slot
        part="base"
        class=${zt({"tab-panel":!0,"tab-panel-active":this.active})}
      ></slot>
    `}};Ht.css=Bt,g([_({reflect:!0})],Ht.prototype,`name`,2),g([_({type:Boolean,reflect:!0})],Ht.prototype,`active`,2),g([_({reflect:!0})],Ht.prototype,`role`,2),g([it(`active`)],Ht.prototype,`handleActiveChange`,1),Ht=g([ft(`wa-tab-panel`)],Ht);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ut=u`
  :host {
    display: inline-block;
    color: var(--wa-color-neutral-on-quiet);
    font-weight: var(--wa-font-weight-action);
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font: inherit;
    padding: 1em 1.5em;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition: color var(--wa-transition-fast) var(--wa-transition-easing);

    ::slotted(wa-icon:first-child) {
      margin-inline-end: 0.5em;
    }

    ::slotted(wa-icon:last-child) {
      margin-inline-start: 0.5em;
    }
  }

  @media (hover: hover) {
    :host(:hover:not([disabled])) .tab {
      color: currentColor;
    }
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible) .tab {
    outline: var(--wa-focus-ring);
    outline-offset: calc(-1 * var(--wa-border-width-l) - var(--wa-focus-ring-offset));
  }

  :host([active]:not([disabled])) {
    color: var(--wa-color-brand-on-quiet);
  }

  :host([disabled]) .tab {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (forced-colors: active) {
    :host([active]:not([disabled])) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,Wt=0,y=class extends Ct{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(...arguments),this.attrId=++Wt,this.componentId=`wa-tab-${this.attrId}`,this.panel=``,this.active=!1,this.disabled=!1,this.tabIndex=0,this.slot=`nav`,this.role=`tab`}handleActiveChange(){this.setAttribute(`aria-selected`,this.active?`true`:`false`)}handleDisabledChange(){this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`),this.tabIndex=this.disabled&&!this.active?-1:0}render(){return this.id=this.id?.length>0?this.id:this.componentId,Pe`
      <div
        part="base tab"
        class=${zt({tab:!0,"tab-active":this.active})}
      >
        <slot></slot>
      </div>
    `}};y.css=Ut,g([_t(`.tab`)],y.prototype,`tab`,2),g([_({reflect:!0})],y.prototype,`panel`,2),g([_({type:Boolean,reflect:!0})],y.prototype,`active`,2),g([_({type:Boolean,reflect:!0})],y.prototype,`disabled`,2),g([_({type:Number,reflect:!0})],y.prototype,`tabIndex`,2),g([_({reflect:!0})],y.prototype,`slot`,2),g([_({reflect:!0})],y.prototype,`role`,2),g([it(`active`)],y.prototype,`handleActiveChange`,1),g([it(`disabled`)],y.prototype,`handleDisabledChange`,1),y=g([ft(`wa-tab`)],y);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Gt=()=>({checkValidity(e){let t=e.input,n={message:``,isValid:!0,invalidKeys:[]};if(!t)return n;let r=!0;if(`checkValidity`in t&&(r=t.checkValidity()),r)return n;if(n.isValid=!1,`validationMessage`in t&&(n.message=t.validationMessage),!(`validity`in t))return n.invalidKeys.push(`customError`),n;for(let e in t.validity){if(e===`valid`)continue;let r=e;t.validity[r]&&n.invalidKeys.push(r)}return n}}),Kt=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-invalid`,{bubbles:!0,cancelable:!1,composed:!0})}},qt=()=>({observedAttributes:[`custom-error`],checkValidity(e){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
let t={message:``,isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=[`customError`]),t}}),Jt=class extends Ct{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=[`input`],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new Kt))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},`addEventListener`in this&&this.addEventListener(`invalid`,this.emitInvalid)}static get validators(){return[qt()]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let n of t.observedAttributes)e.add(n);return[...e]}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.updateValidity()}):this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener?.(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has(`customError`)&&(this.customError||=null,this.setCustomValidity(this.customError||``)),e.has(`value`)||e.has(`disabled`)||e.has(`defaultValue`)){let e=this.value;this.updateFormValue(e)}e.has(`disabled`)&&(this.customStates.set(`disabled`,this.disabled),(this.hasAttribute(`disabled`)||!this.matches(`:disabled`))&&this.toggleAttribute(`disabled`,this.disabled)),super.willUpdate(e),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>this.updateValidity()):this.updateValidity()}updateFormValue(e){if(Array.isArray(e)){if(this.name){let t=new FormData;for(let n of e)t.append(this.name,n);this.setValue(t,t)}}else this.setValue(e,e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(e){e?this.setAttribute(`form`,e):this.removeAttribute(`form`)}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],n=e[1],r=e[2];r||=this.validationTarget,this.internals.setValidity(t,n,r||void 0),this.requestUpdate(`validity`),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set(`required`,e),this.customStates.set(`optional`,!e),this.customStates.set(`invalid`,!t),this.customStates.set(`valid`,t),this.customStates.set(`user-invalid`,!t&&n),this.customStates.set(`user-valid`,t&&n)}setCustomValidity(e){e?(this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)):(this.customError=null,this.setValidity({}))}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity()}):(this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity())}setValue(...e){let[t,n]=e;this.internals.setFormValue(t,n)}get allValidators(){let e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(``),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute(`disabled`)||!this.willValidate){this.resetValidity();return}let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},n=this.validationTarget||this.input||void 0,r=``;for(let n of e){let{isValid:e,message:i,invalidKeys:a}=n.checkValidity(this);e||(r||=i,a?.length>=0&&a.forEach(e=>t[e]=!0))}r||=this.validationMessage,this.setValidity(t,r,n)}};Jt.formAssociated=!0,g([_({reflect:!0})],Jt.prototype,`name`,2),g([_({type:Boolean})],Jt.prototype,`disabled`,2),g([_({state:!0,attribute:!1})],Jt.prototype,`valueHasChanged`,2),g([_({state:!0,attribute:!1})],Jt.prototype,`hasInteracted`,2),g([_({attribute:`custom-error`,reflect:!0})],Jt.prototype,`customError`,2),g([_({attribute:!1,state:!0,type:Object})],Jt.prototype,`validity`,1);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Yt={small:`s`,medium:`m`,large:`l`},Xt=/* @__PURE__ */ new Set;function Zt(e,t){t in Yt&&!Xt.has(`${e}:${t}`)&&(Xt.add(`${e}:${t}`),console.warn(`[${e}] size="${t}" is deprecated. Use size="${Yt[t]}" instead. The long-form value will be removed in the next major version.`))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Qt=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return this.host.childNodes?[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===Node.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`wa-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1}):!1}hasNamedSlot(e){return this.host.querySelector?.(`:scope > [slot="${e}"]`)!==null}test(e,t){return t&&this.host.didSSR&&!this.host.hasUpdated?!!this.host[t]:e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){let e=this.host.shadowRoot;e&&`addEventListener`in e&&e.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){let e=this.host.shadowRoot;e&&`removeEventListener`in e&&e.removeEventListener(`slotchange`,this.handleSlotChange)}},$t=u`
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
`,en=u`
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
`,tn=u`
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
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const nn=e=>e??h,rn=Symbol.for(``),an=e=>{
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
if(e?.r===rn)return e?._$litStatic$},on=(e,...t)=>({_$litStatic$:t.reduce((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1],e[0]),r:rn}),sn=/* @__PURE__ */ new Map,cn=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],(i=an(a))!==void 0);)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=sn.get(e))===void 0&&(o.raw=o,sn.set(e,t=o)),n=s}return e(t,...n)})(Pe);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var b=class extends Jt{constructor(){super(...arguments),this.assumeInteractionOn=[`click`],this.hasSlotController=new Qt(this,`[default]`,`start`,`end`),this.localize=new Ft(this),this.invalid=!1,this.isIconButton=!1,this.title=``,this.variant=`neutral`,this.appearance=`accent`,this.size=`m`,this.withCaret=!1,this.withStart=!1,this.withEnd=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type=`button`}static get validators(){return[...super.validators,Gt()]}handleSizeChange(){Zt(this.localName,this.size)}constructLightDOMButton(){let e=document.createElement(`button`);for(let t of this.attributes)t.name!==`style`&&e.setAttribute(t.name,t.value);return e.type=this.type,e.style.position=`absolute !important`,e.style.width=`0 !important`,e.style.height=`0 !important`,e.style.clipPath=`inset(50%) !important`,e.style.overflow=`hidden !important`,e.style.whiteSpace=`nowrap !important`,this.name&&(e.name=this.name),e.value=this.value||``,e}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopImmediatePropagation();return}if(this.type!==`submit`&&this.type!==`reset`||!this.getForm())return;let t=this.constructLightDOMButton();this.parentElement?.append(t),t.click(),t.remove()}handleInvalid(){this.dispatchEvent(new Kt)}handleLabelSlotChange(){let e=this.labelSlot.assignedNodes({flatten:!0}),t=!1,n=!1,r=!1,i=!1;[...e].forEach(e=>{if(e.nodeType===Node.ELEMENT_NODE){let r=e;r.localName===`wa-icon`?(n=!0,t||=r.label!==void 0):i=!0}else e.nodeType===Node.TEXT_NODE&&(e.textContent?.trim()||``).length>0&&(r=!0)}),this.isIconButton=n&&!r&&!i,this.customStates.set(`icon-button`,this.isIconButton),this.isIconButton&&!t&&console.warn(`Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.`,this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.customStates.set(`disabled`,this.disabled),this.updateValidity()}handleHrefChange(){this.customStates.set(`link`,this.isLink())}handleLoadingChange(){this.customStates.set(`loading`,this.loading)}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=this.isLink(),t=e?on`a`:on`button`;return cn`
      <${t}
        part="base button"
        class=${zt({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()===`rtl`,"has-label":this.hasSlotController.test(`[default]`),"has-start":this.hasSlotController.test(`start`,`withStart`),"has-end":this.hasSlotController.test(`end`,`withEnd`),"is-icon-button":this.isIconButton})}
        ?disabled=${nn(e?void 0:this.disabled)}
        type=${nn(e?void 0:this.type)}
        title=${this.title}
        name=${nn(e?void 0:this.name)}
        value=${nn(e?void 0:this.value)}
        href=${nn(e?this.href:void 0)}
        target=${nn(e?this.target:void 0)}
        download=${nn(e?this.download:void 0)}
        rel=${nn(e&&this.rel?this.rel:void 0)}
        role=${nn(e?void 0:`button`)}
        aria-disabled=${nn(e&&this.disabled?`true`:void 0)}
        aria-busy=${this.loading?`true`:`false`}
        tabindex=${this.disabled?`-1`:`0`}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?cn`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:``}
        ${this.loading?cn`<wa-spinner part="spinner"></wa-spinner>`:``}
      </${t}>
    `}};b.shadowRootOptions={...Jt.shadowRootOptions,delegatesFocus:!0},b.css=[en,tn,$t],g([_t(`.button`)],b.prototype,`button`,2),g([_t(`slot:not([name])`)],b.prototype,`labelSlot`,2),g([ht()],b.prototype,`invalid`,2),g([ht()],b.prototype,`isIconButton`,2),g([_()],b.prototype,`title`,2),g([_({reflect:!0})],b.prototype,`variant`,2),g([_({reflect:!0})],b.prototype,`appearance`,2),g([_({reflect:!0})],b.prototype,`size`,2),g([it(`size`)],b.prototype,`handleSizeChange`,1),g([_({attribute:`with-caret`,type:Boolean,reflect:!0})],b.prototype,`withCaret`,2),g([_({attribute:`with-start`,type:Boolean})],b.prototype,`withStart`,2),g([_({attribute:`with-end`,type:Boolean})],b.prototype,`withEnd`,2),g([_({type:Boolean})],b.prototype,`disabled`,2),g([_({type:Boolean,reflect:!0})],b.prototype,`loading`,2),g([_({type:Boolean,reflect:!0})],b.prototype,`pill`,2),g([_()],b.prototype,`type`,2),g([_({reflect:!0})],b.prototype,`name`,2),g([_({reflect:!0})],b.prototype,`value`,2),g([_({reflect:!0})],b.prototype,`href`,2),g([_()],b.prototype,`target`,2),g([_()],b.prototype,`rel`,2),g([_()],b.prototype,`download`,2),g([_({attribute:`formaction`})],b.prototype,`formAction`,2),g([_({attribute:`formenctype`})],b.prototype,`formEnctype`,2),g([_({attribute:`formmethod`})],b.prototype,`formMethod`,2),g([_({attribute:`formnovalidate`,type:Boolean})],b.prototype,`formNoValidate`,2),g([_({attribute:`formtarget`})],b.prototype,`formTarget`,2),g([it(`disabled`,{waitUntilFirstUpdate:!0})],b.prototype,`handleDisabledChange`,1),g([it(`href`)],b.prototype,`handleHrefChange`,1),g([it(`loading`,{waitUntilFirstUpdate:!0})],b.prototype,`handleLoadingChange`,1),b=g([ft(`wa-button`)],b),b.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var ln=u`
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
`,un=class extends Ct{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(...arguments),this.localize=new Ft(this)}render(){return Pe`
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
    `}};un.css=ln,un=g([ft(`wa-spinner`)],un);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var dn=class extends Event{constructor(){super(`wa-error`,{bubbles:!0,cancelable:!1,composed:!0})}},fn=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-load`,{bubbles:!0,cancelable:!1,composed:!0})}},pn=u`
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
`,mn=``,hn=``
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;function gn(){return mn.replace(/\/$/,``)}function _n(e){hn=e}function vn(){if(!hn){let e=document.querySelector(`[data-fa-kit-code]`);e&&_n(e.getAttribute(`data-fa-kit-code`)||``)}return hn}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var yn=`7.3.0`;function bn(e,t,n){let r=`solid`;return t===`chisel`&&(r=`chisel-regular`),t===`etch`&&(r=`etch-solid`),t===`graphite`&&(r=`graphite-thin`),t===`jelly`&&(r=`jelly-regular`,n===`duo-regular`&&(r=`jelly-duo-regular`),n===`fill-regular`&&(r=`jelly-fill-regular`)),t===`jelly-duo`&&(r=`jelly-duo-regular`),t===`jelly-fill`&&(r=`jelly-fill-regular`),t===`notdog`&&(n===`solid`&&(r=`notdog-solid`),n===`duo-solid`&&(r=`notdog-duo-solid`)),t===`notdog-duo`&&(r=`notdog-duo-solid`),t===`slab`&&((n===`solid`||n===`regular`)&&(r=`slab-regular`),n===`press-regular`&&(r=`slab-press-regular`)),t===`slab-press`&&(r=`slab-press-regular`),t===`slab-duo`&&(r=`slab-duo-regular`),t===`slab-press-duo`&&(r=`slab-press-duo-regular`),t===`thumbprint`&&(r=`thumbprint-light`),t===`utility`&&(r=`utility-semibold`),t===`utility-duo`&&(r=`utility-duo-semibold`),t===`utility-fill`&&(r=`utility-fill-semibold`),t===`whiteboard`&&(r=`whiteboard-semibold`),t===`mosaic`&&(r=`mosaic-solid`),t===`pixel`&&(r=`pixel-regular`),t===`vellum`&&(r=`vellum-solid`),t===`classic`&&(n===`thin`&&(r=`thin`),n===`light`&&(r=`light`),n===`regular`&&(r=`regular`),n===`solid`&&(r=`solid`)),t===`duotone`&&(n===`thin`&&(r=`duotone-thin`),n===`light`&&(r=`duotone-light`),n===`regular`&&(r=`duotone-regular`),n===`solid`&&(r=`duotone`)),t===`sharp`&&(n===`thin`&&(r=`sharp-thin`),n===`light`&&(r=`sharp-light`),n===`regular`&&(r=`sharp-regular`),n===`solid`&&(r=`sharp-solid`)),t===`sharp-duotone`&&(n===`thin`&&(r=`sharp-duotone-thin`),n===`light`&&(r=`sharp-duotone-light`),n===`regular`&&(r=`sharp-duotone-regular`),n===`solid`&&(r=`sharp-duotone-solid`)),t===`brands`&&(r=`brands`),r}function xn(e,t,n){let r=bn(e,t,n),i=gn();if(i)return`${i}/${r}/${e}.svg`;let a=vn();return a.length>0?`https://ka-p.fontawesome.com/releases/v${yn}/svgs/${r}/${e}.svg?token=${encodeURIComponent(a)}`:`https://ka-f.fontawesome.com/releases/v${yn}/svgs/${r}/${e}.svg`}var Sn={name:`default`,resolver:(e,t=`classic`,n=`solid`)=>xn(e,t,n),mutator:(e,t)=>{if(e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`),t?.family&&!e.hasAttribute(`data-duotone-initialized`)){let{family:n,variant:r}=t;if(n===`duotone`||n===`sharp-duotone`||n===`notdog-duo`||n===`notdog`&&r===`duo-solid`||n===`jelly-duo`||n===`jelly`&&r===`duo-regular`||n===`utility-duo`||n===`slab-duo`||n===`slab-press-duo`||n===`thumbprint`){let n=[...e.querySelectorAll(`path`)],r=n.find(e=>!e.hasAttribute(`opacity`)),i=n.find(e=>e.hasAttribute(`opacity`));if(!r||!i)return;if(r.setAttribute(`data-duotone-primary`,``),i.setAttribute(`data-duotone-secondary`,``),t.swapOpacity&&r&&i){let e=i.getAttribute(`opacity`)||`0.4`;r.style.setProperty(`--path-opacity`,e),i.style.setProperty(`--path-opacity`,`1`)}e.setAttribute(`data-duotone-initialized`,``)}}}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Cn(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var wn={solid:{"arrow-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`,"arrow-up":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>`,backward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M236.3 107.1C247.9 96 265 92.9 279.7 99.2C294.4 105.5 304 120 304 136L304 272.3L476.3 107.2C487.9 96 505 92.9 519.7 99.2C534.4 105.5 544 120 544 136L544 504C544 520 534.4 534.5 519.7 540.8C505 547.1 487.9 544 476.3 532.9L304 367.7L304 504C304 520 294.4 534.5 279.7 540.8C265 547.1 247.9 544 236.3 532.9L44.3 348.9C36.5 341.3 32 330.9 32 320C32 309.1 36.5 298.7 44.3 291.1L236.3 107.1z"/></svg>`,"backward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M491 100.8C478.1 93.8 462.3 94.5 450 102.6L192 272.1L192 128C192 110.3 177.7 96 160 96C142.3 96 128 110.3 128 128L128 512C128 529.7 142.3 544 160 544C177.7 544 192 529.7 192 512L192 367.9L450 537.5C462.3 545.6 478 546.3 491 539.3C504 532.3 512 518.8 512 504.1L512 136.1C512 121.4 503.9 107.9 491 100.9z"/></svg>`,bars:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>`,"angles-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M77.3 256 214.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256zm192 0L406.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L269.3 256z"/></svg>`,"angles-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.7 256 297.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 256zm-192 0L105.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256z"/></svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>`,"chevron-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`,"chevron-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>`,"chevron-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>`,circle:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>`,"closed-captioning":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M64 192C64 156.7 92.7 128 128 128L512 128C547.3 128 576 156.7 576 192L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 192zM216 272L248 272C252.4 272 256 275.6 256 280C256 293.3 266.7 304 280 304C293.3 304 304 293.3 304 280C304 249.1 278.9 224 248 224L216 224C185.1 224 160 249.1 160 280L160 360C160 390.9 185.1 416 216 416L248 416C278.9 416 304 390.9 304 360C304 346.7 293.3 336 280 336C266.7 336 256 346.7 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 280C208 275.6 211.6 272 216 272zM384 280C384 275.6 387.6 272 392 272L424 272C428.4 272 432 275.6 432 280C432 293.3 442.7 304 456 304C469.3 304 480 293.3 480 280C480 249.1 454.9 224 424 224L392 224C361.1 224 336 249.1 336 280L336 360C336 390.9 361.1 416 392 416L424 416C454.9 416 480 390.9 480 360C480 346.7 469.3 336 456 336C442.7 336 432 346.7 432 360C432 364.4 428.4 368 424 368L392 368C387.6 368 384 364.4 384 360L384 280z"/></svg>`,"closed-captioning-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M39 39.1C48.4 29.7 63.6 29.7 72.9 39.1L161.8 128L512 128C547.3 128 576 156.7 576 192L576 448C576 473.5 561.1 495.4 539.6 505.8L601 567.1C610.4 576.5 610.4 591.7 601 601C591.6 610.3 576.4 610.4 567.1 601L39 73.1C29.7 63.7 29.7 48.5 39 39.1zM384 350.1L384 279.9C384 275.5 387.6 271.9 392 271.9L424 271.9C428.4 271.9 432 275.5 432 279.9C432 293.2 442.7 303.9 456 303.9C469.3 303.9 480 293.2 480 279.9C480 249 454.9 223.9 424 223.9L392 223.9C361.1 223.9 336 249 336 279.9L336 302.1L384 350.1zM445.5 411.6C465.7 403.2 480 383.2 480 359.9C480 346.6 469.3 335.9 456 335.9C442.7 335.9 432 346.6 432 359.9C432 364.3 428.4 367.9 424 367.9L401.8 367.9L445.5 411.6zM162.3 264.1C160.8 269.1 160 274.5 160 280L160 360C160 390.9 185.1 416 216 416L248 416C266.1 416 282.1 407.5 292.4 394.2L410.2 512L128 512C92.7 512 64 483.3 64 448L64 192C64 184.2 65.4 176.7 68 169.8L162.3 264.1zM256.1 357.9C256 358.6 256 359.3 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 309.8L256.1 357.9z"/></svg>`,compress:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>`,ellipsis:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M96 320C96 289.1 121.1 264 152 264C182.9 264 208 289.1 208 320C208 350.9 182.9 376 152 376C121.1 376 96 350.9 96 320zM264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320zM488 264C518.9 264 544 289.1 544 320C544 350.9 518.9 376 488 376C457.1 376 432 350.9 432 320C432 289.1 457.1 264 488 264z"/></svg>`,"ellipsis-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/></svg>`,expand:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 96C110.3 96 96 110.3 96 128L96 224C96 241.7 110.3 256 128 256C145.7 256 160 241.7 160 224L160 160L224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L128 96zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 512C96 529.7 110.3 544 128 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480L160 416zM416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160L480 224C480 241.7 494.3 256 512 256C529.7 256 544 241.7 544 224L544 128C544 110.3 529.7 96 512 96L416 96zM544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L512 544C529.7 544 544 529.7 544 512L544 416z"/></svg>`,eyedropper:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>`,filter:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 64C19.1 64 7.4 71.8 2.4 83.8S.2 109.5 9.4 118.6L192 301.3 192 416c0 8.5 3.4 16.6 9.4 22.6l64 64c9.2 9.2 22.9 11.9 34.9 6.9S320 492.9 320 480l0-178.7 182.6-182.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 64 480 64L32 64z"/></svg>`,forward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M403.7 107.1C392.1 96 375 92.9 360.3 99.2C345.6 105.5 336 120 336 136L336 272.3L163.7 107.2C152.1 96 135 92.9 120.3 99.2C105.6 105.5 96 120 96 136L96 504C96 520 105.6 534.5 120.3 540.8C135 547.1 152.1 544 163.7 532.9L336 367.7L336 504C336 520 345.6 534.5 360.3 540.8C375 547.1 392.1 544 403.7 532.9L595.7 348.9C603.6 341.4 608 330.9 608 320C608 309.1 603.5 298.7 595.7 291.1L403.7 107.1z"/></svg>`,file:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>`,"file-audio":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>`,"file-code":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>`,"file-excel":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>`,"file-image":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>`,"file-pdf":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>`,"file-powerpoint":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>`,"file-video":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>`,"file-word":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>`,"file-zipper":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>`,"forward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M21 36.8c12.9-7 28.7-6.3 41 1.8L320 208.1 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-144.1-258 169.6c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440L0 72C0 57.3 8.1 43.8 21 36.8z"/></svg>`,gauge:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,gear:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>`,"grip-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>`,indeterminate:`<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>`,"magnifying-glass":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>`,minus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>`,pause:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>`,"picture-in-picture":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M448 32c35.3 0 64 28.7 64 64l0 112-64 0 0-112-384 0 0 320 144 0 0 64-144 0-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416 0 96C0 62.9 25.2 35.6 57.5 32.3L64 32 448 32zm16 224c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48l160 0z"/></svg>`,play:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>`,"play-circle":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>`,plus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>`,"table-columns":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 64l0 256 128 0 0-256-128 0zm320 0l-128 0 0 256 128 0 0-256z"/></svg>`,thumbtack:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 10.3 134.1c37.1 21.2 65.8 56.4 78.2 99.7l3.8 13.4c2.8 9.7 .8 20-5.2 28.1S362 352 352 352L32 352c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1L5 297.8c12.4-43.3 41-78.5 78.2-99.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 400l64 0 0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-112z"/></svg>`,"up-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M406.6 502.6l96-96c9.2-9.2 11.9-22.9 6.9-34.9S492.9 352 480 352l-64 0 0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 320-64 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l96 96c12.5 12.5 32.8 12.5 45.3 0zM150.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-9.2 9.2-11.9 22.9-6.9 34.9S19.1 160 32 160l64 0 0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320 64 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-96-96z"/></svg>`,upload:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>`,user:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>`,volume:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM441.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C443.3 170.7 464 210.9 464 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-low":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,xmark:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>`},regular:{calendar:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z"/></svg>`,"circle-question":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`,"circle-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,clock:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>`,copy:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>`,eye:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>`,"eye-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>`}},Tn={name:`system`,resolver:(e,t=`classic`,n=`solid`)=>{let r=wn[n][e]??wn.regular[e]??wn.regular[`circle-question`];return r?Cn(r):``},mutator:e=>{e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`)}},En=`classic`,Dn=[Sn,Tn],On=/* @__PURE__ */ new Set
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;function kn(e){On.add(e)}function An(e){On.delete(e)}function jn(e){return Dn.find(t=>t.name===e)}function Mn(){return En}
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const{I:Nn}=Ye,Pn=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Fn=Symbol(),In=Symbol(),Ln,Rn=/* @__PURE__ */ new Map,x=class extends Ct{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label=``,this.library=`default`,this.rotate=0,this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=Pe`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let n=this.shadowRoot.querySelector(`[part='svg']`);return typeof t.mutator==`function`&&t.mutator(n,this),this.svg}try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?Fn:In}catch{return In}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return Fn;Ln||=new DOMParser;let r=Ln.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):Fn}catch{return Fn}}}connectedCallback(){super.connectedCallback(),kn(this)}firstUpdated(e){super.firstUpdated(e),this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),An(this)}async getIconSource(){let e=jn(this.library),t=this.family||Mn();if(this.name&&e){let n=this.canvas===`auto`||this.autoWidth,r;try{r=await e.resolver(this.name,t,this.variant,n)}catch{r=void 0}return{url:r,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=await this.getIconSource(),n=t?jn(this.library):void 0;if(!e){this.svg=null;return}let r=Rn.get(e);r||(r=this.resolveIcon(e,n),Rn.set(e,r));let i=await r;if(i===In&&Rn.delete(e),e===(await this.getIconSource()).url){if(Pn(i))this.svg=i;else switch(i){case In:case Fn:this.svg=null,this.dispatchEvent(new dn);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new fn)}}}willUpdate(e){return this.style||this.setStyleProperty(`--rotate-angle`,`${this.rotate}deg`),super.willUpdate(e)}updated(e){super.updated(e);let t=jn(this.library);this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`);let n=this.shadowRoot?.querySelector(`svg`);n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:Pe`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};x.css=pn,g([ht()],x.prototype,`svg`,2),g([_({reflect:!0})],x.prototype,`name`,2),g([_({reflect:!0})],x.prototype,`family`,2),g([_({reflect:!0})],x.prototype,`variant`,2),g([_({reflect:!0})],x.prototype,`canvas`,2),g([_({attribute:`auto-width`,type:Boolean,reflect:!0})],x.prototype,`autoWidth`,2),g([_({attribute:`swap-opacity`,type:Boolean,reflect:!0})],x.prototype,`swapOpacity`,2),g([_()],x.prototype,`src`,2),g([_()],x.prototype,`label`,2),g([_({reflect:!0})],x.prototype,`library`,2),g([_({type:Number,reflect:!0})],x.prototype,`rotate`,2),g([_({type:String,reflect:!0})],x.prototype,`flip`,2),g([_({type:String,reflect:!0})],x.prototype,`animation`,2),g([it(`label`)],x.prototype,`handleLabelChange`,1),g([it([`family`,`name`,`library`,`variant`,`src`,`autoWidth`,`canvas`,`swapOpacity`],{waitUntilFirstUpdate:!0})],x.prototype,`setIcon`,1),x=g([ft(`wa-icon`)],x);var zn=/* @__PURE__ */ t({default:()=>v}),Bn=/* @__PURE__ */ t({default:()=>Ht}),Vn=/* @__PURE__ */ t({default:()=>y}),S
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;Object.getOwnPropertyDescriptors||(()=>{var e;if(typeof Reflect<`u`&&Reflect.ownKeys)e=Reflect.ownKeys;else{var t=Object.getOwnPropertySymbols||(e=>[]);e=(e=>Object.getOwnPropertyNames(e).concat(t(e)))}return(t=>{for(var n=e(t),r={},i=n.length|0,a=0;a!==i;){var o=n[a];Object.defineProperty(r,o,{configurable:!0,enumerable:!0,writable:!0,value:Object.getOwnPropertyDescriptor(t,o)}),a=a+1|0}return r})})();function Hn(e){this.c=e}S=Hn.prototype,S.toString=(function(){return String.fromCharCode(this.c)});function C(e,t){this.l=e,this.h=t}S=C.prototype,S.toString=(function(){return Ha(this.l,this.h)});function Un(e){switch(typeof e){case`string`:return fu.l();case`number`:return ir(e)?e<<24>>24===e?dl.l():e<<16>>16===e?Sl.l():ou.l():ar(e)?au.l():iu.l();case`boolean`:return zc.l();case`undefined`:return Fa.l();default:return e instanceof C?lu.l():e instanceof Hn?Hc.l():e&&e.$classData?e.$classData.l():null}}function Wn(e){switch(typeof e){case`string`:return`java.lang.String`;case`number`:return ir(e)?e<<24>>24===e?`java.lang.Byte`:e<<16>>16===e?`java.lang.Short`:`java.lang.Integer`:ar(e)?`java.lang.Float`:`java.lang.Double`;case`boolean`:return`java.lang.Boolean`;case`undefined`:return`java.lang.Void`;default:return e instanceof C?`java.lang.Long`:e instanceof Hn?`java.lang.Character`:e&&e.$classData?e.$classData.N:null.gd()}}function Gn(e,t){switch(typeof e){case`string`:return du(e,t);case`number`:return nu(e,t);case`boolean`:return Lc(e,t);case`undefined`:return Ma(e,t);default:return e&&e.$classData||e===null?e.h(t):e instanceof C?su(e.l,e.h,t):e instanceof Hn?Vc(e.c,t):ur.prototype.h.call(e,t)}}function Kn(e){switch(typeof e){case`string`:return J(e);case`number`:return ru(e);case`boolean`:return Rc(e);case`undefined`:return Na(e);default:return e&&e.$classData||e===null?e.p():e instanceof C?cu(e.l,e.h):e instanceof Hn?Bc(e.c):ur.prototype.p.call(e)}}function qn(e){return e===void 0?`undefined`:e.toString()}function Jn(e){if(e===0)throw new ul(`/ by zero`);return e}function Yn(e){return e>2147483647?2147483647:e<-2147483648?-2147483648:e|0}function Xn(e){return String.fromCharCode(e)}var Zn=/* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(8));function Qn(e,t,n,r,i){if(e!==n||r-t>>>0>i>>>0)for(var a=0;a<i;a=a+1|0)n[r+a|0]=e[t+a|0];else for(var a=i-1|0;a>=0;a=a-1|0)n[r+a|0]=e[t+a|0]}var $n=0,er=/* @__PURE__ */ new WeakMap;function tr(e){switch(typeof e){case`string`:return J(e);case`number`:return ru(e);case`bigint`:var t=0;for(e<BigInt(0)&&(e=~e);e!==BigInt(0);)t^=Number(BigInt.asIntN(32,e)),e>>=BigInt(32);return t;case`boolean`:return e?1231:1237;case`undefined`:return 0;case`symbol`:var n=e.description;return n===void 0?0:J(n);default:if(e===null)return 0;var r=er.get(e);return r===void 0&&(r=$n+1|0,$n=r,er.set(e,r)),r}}function nr(e){return typeof e==`number`&&e<<24>>24===e&&1/e!=-1/0}function rr(e){return typeof e==`number`&&e<<16>>16===e&&1/e!=-1/0}function ir(e){return typeof e==`number`&&(e|0)===e&&1/e!=-1/0}function ar(e){return typeof e==`number`&&(e!==e||Math.fround(e)===e)}function or(e){return new Hn(e)}or(0);function w(e,t){return new C(e,t)}var sr=w(0,0);function cr(e){return e===null?0:e.c}function lr(e){return e===null?sr:e}function ur(){}S=ur.prototype,S.constructor=ur;function T(){}T.prototype=S,S.p=(function(){return tr(this)}),S.h=(function(e){return this===e}),S.t=(function(){var e=this.p();return Wn(this)+`@`+(e>>>0).toString(16)}),S.toString=(function(){return this.t()});function dr(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}S=dr.prototype=new T,S.constructor=dr,S.Y=(function(e,t,n,r){Qn(this.a,e,t.a,n,r)}),S.U=(function(){return new dr(this.a.slice())});function fr(){}fr.prototype=S;function pr(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=!1}else this.a=e}S=pr.prototype=new T,S.constructor=pr,S.Y=(function(e,t,n,r){Qn(this.a,e,t.a,n,r)}),S.U=(function(){return new pr(this.a.slice())});function mr(e){this.a=typeof e==`number`?new Uint16Array(e):e}S=mr.prototype=new T,S.constructor=mr,S.Y=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),S.U=(function(){return new mr(this.a.slice())});function hr(e){this.a=typeof e==`number`?new Int8Array(e):e}S=hr.prototype=new T,S.constructor=hr,S.Y=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),S.U=(function(){return new hr(this.a.slice())});function gr(e){this.a=typeof e==`number`?new Int16Array(e):e}S=gr.prototype=new T,S.constructor=gr,S.Y=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),S.U=(function(){return new gr(this.a.slice())});function _r(e){this.a=typeof e==`number`?new Int32Array(e):e}S=_r.prototype=new T,S.constructor=_r,S.Y=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),S.U=(function(){return new _r(this.a.slice())});function vr(e){typeof e==`number`?(e<<=1,this.a=new Int32Array(e)):this.a=e}S=vr.prototype=new T,S.constructor=vr,S.Y=(function(e,t,n,r){t.a.set(this.a.subarray(e<<1,(e+r|0)<<1),n<<1)}),S.U=(function(){return new vr(this.a.slice())});function yr(e){this.a=typeof e==`number`?new Float32Array(e):e}S=yr.prototype=new T,S.constructor=yr,S.Y=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),S.U=(function(){return new yr(this.a.slice())});function br(e){this.a=typeof e==`number`?new Float64Array(e):e}S=br.prototype=new T,S.constructor=br,S.Y=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),S.U=(function(){return new br(this.a.slice())});function E(){this.C=void 0,this.n=null,this.O=null,this.B=null,this.D=0,this.z=null,this.E=``,this.L=void 0,this.A=void 0,this.F=void 0,this.w=void 0,this.J=!1,this.N=``,this.X=!1,this.Y=!1,this.Z=!1,this.I=void 0}S=E.prototype,S.p=(function(e,t,n,r,i){this.n={},this.z=e,this.E=t;var a=this;return this.F=(e=>e===a),this.N=n,this.X=!0,this.I=(e=>!1),r!==void 0&&(this.A=new E().y(this,r,i,t===`J`)),this}),S.i=(function(e,t,n,r){var i=Object.getOwnPropertyNames(n)[0];return this.n=n,this.E=`L`+t+`;`,this.F=(e=>!!e.n[i]),this.J=e===2,this.N=t,this.Y=e===1,this.I=r||(e=>!!(e&&e.$classData&&e.$classData.n[i])),typeof e!=`number`&&(e.prototype.$classData=this),this}),S.y=(function(e,t,n,r,i){t.prototype.$classData=this;var a=`[`+e.E;this.C=t,this.n={r:1,a:1},this.O=e,this.B=e,this.D=1,this.E=a,this.N=a,this.Z=!0;var o=this;return this.F=i||(e=>o===e),this.w=r?(e=>{for(var n=e.length|0,r=new t(n),i=r.a,a=0;a<n;a=a+1|0){var o=e[a];i[a<<1]=o.l,i[(a<<1)+1|0]=o.h}return r}):n?(e=>new t(new n(e))):(e=>new t(e)),this.I=(e=>e instanceof t),this}),S.a=(function(e){function t(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}var n=t.prototype=new fr;n.constructor=t,n.Y=(function(e,t,n,r){Qn(this.a,e,t.a,n,r)}),n.U=(function(){return new t(this.a.slice())}),n.$classData=this;var r=e.B||e,i=e.D+1,a=`[`+e.E;this.C=t,this.n={r:1,a:1},this.O=e,this.B=r,this.D=i,this.E=a,this.N=a,this.Z=!0;var o=(e=>{var t=e.D;return t===i?r.F(e.B):t>i&&r===D});this.F=o,this.w=(e=>new t(e));var s=this;return this.I=(e=>{var t=e&&e.$classData;return!!t&&(t===s||o(t))}),this}),S.r=(function(){return this.A||=new E().a(this),this.A}),S.l=(function(){return this.L||=new ic(this),this.L}),S.R=(function(e){return this===e||this.F(e)}),S.S=(function(){return this.P?this.P.l():null}),S.Q=(function(){return this.O?this.O.l():null}),S.U=(function(e){if(this===xr)throw pl(new ml);return new(this.r()).C(e)});var D=new E;D.n={},D.E=`Ljava.lang.Object;`,D.F=(e=>!e.X),D.N=`java.lang.Object`,D.I=(e=>e!==null),D.A=new E().y(D,dr,void 0,!1,(e=>{var t=e.D;return t===1?!e.B.X:t>1})),ur.prototype.$classData=D;var xr=new E().p(void 0,`V`,`void`,void 0,void 0),Sr=new E().p(!1,`Z`,`boolean`,pr,void 0),Cr=new E().p(0,`C`,`char`,mr,Uint16Array),wr=new E().p(0,`B`,`byte`,hr,Int8Array),Tr=new E().p(0,`S`,`short`,gr,Int16Array),Er=new E().p(0,`I`,`int`,_r,Int32Array),Dr=new E().p(sr,`J`,`long`,vr,Int32Array),Or=new E().p(0,`F`,`float`,yr,Float32Array),kr=new E().p(0,`D`,`double`,br,Float64Array);new Int8Array(new Int32Array([1]).buffer)[0];function Ar(e,t,n){for(var r=new Int32Array(e),i=t.length|0,a=0,o=0,s=0,c=0;o!==i;){var l=t.charCodeAt(o);l<80?c=(c|l-48)<<5:(c|=l-93,a=(a&n)+c|0,r[s]=a,s=s+1|0,c=0),o=o+1|0}return r}function jr(e,t){return new _r(Ar(e,t,-1))}function Mr(e){return Un(e).cg()+`@`+tr(e)}function Nr(e){var t=e.cm;return t===void 0?Mr(e):t}function Pr(){Fr=this,Ir().ga(new q((e=>void 0)),no().dl,!0)}S=Pr.prototype=new T,S.constructor=Pr,S.ga=(function(e,t,n){return new Ac(e,n,t,this)}),new E().i(Pr,`com.raquo.airstream.core.Observer$`,{bc:1});var Fr;function Ir(){return Fr||=new Pr,Fr}function Lr(e){this.bQ=null,this.cn=null,this.bR=0,this.bQ=e,this.cn=void 0;var t=$r().bl();this.bR=t===void 0?1:1+t.bR|0,Vr().bq===-1||this.bR>Vr().bq?Bs().cj(new eu(this,Vr().bq)):Gr().O?Gr().ag.push(this)|0:$r().ca(this)}S=Lr.prototype=new T,S.constructor=Lr;var Rr=new E().i(Lr,`com.raquo.airstream.core.Transaction`,{bf:1});function zr(){this.bq=0,this.co=null,Br=this,this.bq=1e3,this.co=new q((e=>{throw U(new W,`Attempted to run Transaction `+e+` after it was already executed.`)}))}S=zr.prototype=new T,S.constructor=zr,S.dL=(function(e){try{e.bQ.m(e);var t=e.cn;if(t!==void 0)for(;t.gf();)t.gc().gh(e)}catch(e){var n=e instanceof vs?e:new Mu(e);Bs().cj(n)}}),new E().i(zr,`com.raquo.airstream.core.Transaction$`,{bg:1});var Br;function Vr(){return Br||=new zr,Br}function Hr(e){e.br.length|0?new Lr(new q((t=>{for(;(e.br.length|0)>0;){var n=e.br.shift();try{n.m(t)}catch(e){var r=e instanceof vs?e:new Mu(e);Bs().cj(r)}}for(;(e.ag.length|0)>0;){var i=e.ag.shift();$r().ca(i)}}))):(e.ag.length|0)>0&&new Lr(new q((t=>{for(;(e.ag.length|0)>0;)$r().ca(e.ag.shift())})))}function Ur(){this.O=!1,this.br=null,this.ag=null,Wr=this,this.O=!1,this.br=vi().aw(F().ae(new(N.r()).C([]))),this.ag=vi().aw(F().ae(new(Rr.r()).C([])))}S=Ur.prototype=new T,S.constructor=Ur,new E().i(Ur,`com.raquo.airstream.core.Transaction$onStart$`,{bh:1});var Wr;function Gr(){return Wr||=new Ur,Wr}function Kr(e,t){return e.ah.get(t)}function qr(e,t){e.bs.unshift(t)}function Jr(e){return e.bs.shift()}function Yr(e,t,n){var r=Kr(e,t),i=r===void 0,a=r===void 0?vi().aw(F().ae(new(Rr.r()).C([]))):r;a.push(n),i&&e.ah.set(t,a)}function Xr(e,t){var n=Kr(e,t),r=n===void 0||(n.length|0)>0?n:void 0;if(r!==void 0){var i=r.shift();return r.length|0||e.ah.delete(t),i}}function Zr(){this.bs=null,this.ah=null,Qr=this,this.bs=vi().aw(F().ae(new(Rr.r()).C([]))),this.ah=/* @__PURE__ */ new Map}S=Zr.prototype=new T,S.constructor=Zr,S.ca=(function(e){var t=this.bl();t===void 0?(qr(this,e),Vr().dL(e),this.eW(e)):Yr(this,t,e)}),S.eW=(function(e){for(var t=e;;){var n=this.bl(),r=t;if(!(n!==void 0&&P().F(r,n)))throw U(new W,`Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.`);this.fH(t),t.bQ=Vr().co;var i=this.bl();if(P().F(i,void 0)){if((this.ah.size|0)>0){var a=new Ps(0);throw this.ah.forEach((e=>((t,n)=>{e.b5=e.b5+(t.length|0)|0}))(a)),U(new W,`Transaction queue error: Stack cleared, but a total of `+a.b5+` children for `+(this.ah.size|0)+` transactions remain. This is a bug in Airstream.`)}return}Vr().dL(i),t=i}}),S.fH=(function(e){for(var t=e;;){var n=Xr(this,t);if(P().F(n,void 0)){Jr(this);var r=this.bl();if(!P().F(r,void 0))t=r;else return}else{qr(this,n);return}}}),S.bl=(function(){return this.bs[0]}),new E().i(Zr,`com.raquo.airstream.core.Transaction$pendingTransactions$`,{bi:1});var Qr;function $r(){return Qr||=new Zr,Qr}function ei(e,t){var n=e.Z.indexOf(t)|0;if(n!==-1)e.Z.splice(n,1),e.C.g()||t.e2();else throw U(new W,`Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?`)}function ti(e){for(;(e.bt.length|0)>0;)ei(e,e.bt.shift())}function ni(e){this.cp=null,this.Z=null,this.aC=!1,this.bt=null,this.C=null,this.aD=0,this.cp=e,this.Z=vi().aw(F().ae(new(ii.r()).C([]))),this.aC=!0,this.bt=vi().aw(F().ae(new(ii.r()).C([]))),this.C=Y(),this.aD=0}S=ni.prototype=new T,S.constructor=ni,S.dG=(function(){if(this.C.g()){var e=Gr(),t=(()=>{var e=new zo(this.cp);this.C=new hu(e),this.aC=!1,this.aD=0;for(var t=0,n=this.Z.length|0;t<n;){var r=t+this.aD|0;this.Z[r].e1(e),t=1+t|0}ti(this),this.aC=!0,this.aD=0});if(Gr(),e.O)t();else{e.O=!0;try{t()}finally{e.O=!1,Hr(e)}}}else throw U(new W,`Can not activate `+this+`: it is already active`)}),S.eO=(function(){if(this.C.g())throw U(new W,`Can not deactivate DynamicOwner: it is not active`);this.aC=!1;for(var e=this.Z,t=0,n=e.length|0;t<n;)e[t].e2(),t=1+t|0;ti(this);var r=this.C;r.g()||r.x().fv(),ti(this),this.aC=!0,this.C=Y()}),S.ew=(function(e,t){t?(this.aD=1+this.aD|0,this.Z.unshift(e)):this.Z.push(e);var n=this.C;if(!n.g()){var r=n.x();e.e1(r)}}),S.fN=(function(e){this.aC?ei(this,e):this.bt.push(e)}),new E().i(ni,`com.raquo.airstream.ownership.DynamicOwner`,{bj:1});function ri(e,t,n){this.bu=null,this.cq=null,this.bv=null,this.bu=e,this.cq=t,this.bv=Y(),e.ew(this,n)}S=ri.prototype=new T,S.constructor=ri,S.bL=(function(){this.bu.fN(this)}),S.e1=(function(e){var t=Gr(),n=(()=>{this.bv=this.cq.m(e)});if(Gr(),t.O)n();else{t.O=!0;try{n()}finally{t.O=!1,Hr(t)}}}),S.e2=(function(){var e=this.bv;e.g()||(e.x().bL(),this.bv=Y())});var ii=new E().i(ri,`com.raquo.airstream.ownership.DynamicSubscription`,{bk:1});function ai(){}S=ai.prototype=new T,S.constructor=ai,S.g8=(function(e,t,n){return new ri(e,new q((e=>new hu(t.m(e)))),n)}),S.g0=(function(e,t,n){return new ri(e,new q((e=>(t.m(e),Y()))),n)}),new E().i(ai,`com.raquo.airstream.ownership.DynamicSubscription$`,{bl:1});var oi;function si(){return oi||=new ai,oi}function ci(e){e.aE=vi().aw(F().ae(new(mi.r()).C([])))}function li(e){for(var t=e.aE,n=0,r=t.length|0;n<r;)fi(t[n]),n=1+n|0;e.aE.length=0}function ui(e,t){var n=e.aE.indexOf(t)|0;if(n!==-1)e.aE.splice(n,1);else throw U(new W,`Can not remove Subscription from Owner: subscription not found.`)}function di(e,t){e.aE.push(t)}function fi(e){if(!e.bT)e.cs.ax(),e.bT=!0;else throw U(new W,`Can not kill Subscription: it was already killed.`)}function pi(e,t){this.ct=null,this.cs=null,this.bT=!1,this.ct=e,this.cs=t,this.bT=!1,e.fG(this)}S=pi.prototype=new T,S.constructor=pi,S.bL=(function(){fi(this),ui(this.ct,this)});var mi=new E().i(pi,`com.raquo.airstream.ownership.Subscription`,{bo:1});function hi(e,t){this.cu=null,this.cv=null,this.a0=null,this.ai=!1,this.cu=e,this.cv=t,this.a0=Y(),this.ai=!1}S=hi.prototype=new T,S.constructor=hi,S.fr=(function(){var e=this.a0;return!e.g()&&!e.x().bu.C.g()}),S.fU=(function(e){if(this.ai)throw U(new W,`Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var t=this.a0;if(t.g())var n=!1;else var r=t.x().bu,n=e===null?r===null:e===r;if(!n){this.fr()&&!e.C.g()&&(this.ai=!0);var i=this.a0;i.g()||(i.x().bL(),this.a0=Y());var a=si().g8(e,new q((e=>(this.ai||this.cu.ax(),new pi(e,new $c((()=>{this.ai||this.cv.ax()})))))),!1);this.a0=new hu(a),this.ai=!1}}),S.eJ=(function(){if(this.ai)throw U(new W,`Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var e=this.a0;e.g()||e.x().bL(),this.a0=Y()}),new E().i(hi,`com.raquo.airstream.ownership.TransferableSubscription`,{bp:1});function gi(){}S=gi.prototype=new T,S.constructor=gi,S.aw=(function(e){return[...Mo().g6(e)]}),new E().i(gi,`com.raquo.ew.JsArray$`,{bq:1});var _i;function vi(){return _i||=new gi,_i}function yi(){this.cw=null,bi=this,document.createElement(`template`),this.eM(K().e.g1().g2()),this.cw=/* @__PURE__ */ RegExp(` `,`g`)}S=yi.prototype=new T,S.constructor=yi,S.eA=(function(e,t){try{return e.appendChild(t),!0}catch(e){var n=e instanceof vs?e:new Mu(e);if(n instanceof Mu&&n.Q instanceof DOMException)return!1;throw n instanceof Mu?n.Q:n}}),S.fs=(function(e,t){for(var n=e;;){if(n.parentNode!==null)var r=n.parentNode;else var i=n.host,r=i===void 0?null:i;if(r===null)return!1;if(P().F(t,r))return!0;n=r}}),S.eL=(function(e){return document.createElement(e.bZ)}),S.fh=(function(e,t){var n=this.fi(e,t);return n===void 0?void 0:t.aQ.bH(n)}),S.fi=(function(e,t){var n=e.V.getAttributeNS(null,t.aj);return n===null?void 0:n}),S.e8=(function(e,t,n){this.fR(e,t,t.aQ.bh(n))}),S.fR=(function(e,t,n){n===null?this.fM(e,t):e.V.setAttribute(t.aj,n)}),S.fM=(function(e,t){e.V.removeAttribute(t.aj)}),S.fS=(function(e,t,n){this.fT(e,t,t.cF.bh(n))}),S.fT=(function(e,t,n){e.V[t.cG]=n}),S.eM=(function(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e.cR)}),S.fl=(function(e,t){var n=this.fm(e,t);return n===void 0?void 0:t.bU.bH(n)}),S.fm=(function(e,t){var n=e.ci(),r=t.bx,i=n.getAttributeNS(r.g()?null:r.x(),t.bV);return i===null?void 0:i}),S.fV=(function(e,t,n){this.fW(e,t,t.bU.bh(n))}),S.fW=(function(e,t,n){if(n===null)this.fO(e,t);else{var r=t.bx;if(r.g())e.ci().setAttribute(t.bw,n);else{var i=r.x();e.ci().setAttributeNS(i,t.bw,n)}}}),S.fO=(function(e,t){var n=e.ci(),r=t.bx;n.removeAttributeNS(r.g()?null:r.x(),t.bV)}),S.eN=(function(e){return document.createTextNode(e)}),S.eQ=(function(e,t){for(var n=t,r=e;;){if(r===null)return n;var i=r.parentNode,a=new Bd(this.eP(r),n);r=i,n=a}}),S.eP=(function(e){if(e instanceof HTMLElement){var t=e.id;if(lo(),t!==``)var n=`#`+t;else var r=e.className,n=(lo(),r===``?``:`.`+r.replace(this.cw,`.`));return e.tagName.toLowerCase()+n}return e.nodeName}),new E().i(yi,`com.raquo.laminar.DomApi$`,{br:1});var bi;function O(){return bi||=new yi,bi}function xi(e){Ir(),Bs()}function Si(e){e.ed=Bi()}function Ci(e){wi(e,new q((e=>{e.cH.V.focus()})))}function wi(e,t){return new Yo(new q((e=>{var n=new Ns(!e.aG.C.g()),r=new q((e=>{n.bE?n.bE=!1:t.m(e)}));si().g0(e.aG,new q((e=>(t=>{r.m(new Li(e,t))}))(e)),!1)})),Bi())}function Ti(){this.aF=null,this.cE=null,this.cD=null,Ei=this,this.aF=new Vo(Di()),new Vo(Di()),this.cE=new Vo(Di()),this.cD=new Bo}S=Ti.prototype=new T,S.constructor=Ti,new E().i(Ti,`com.raquo.laminar.codecs.package$`,{bz:1});var Ei;function Di(){return Ei||=new Ti,Ei}function Oi(e){e.ee=ki(e,`class`,` `)}function ki(e,t,n){var r=Uo(new Wo,t,Di().aF);return new Ho(r.aj,new q((e=>{var t=O().fh(e,r);return t===void 0?``:t})),new el(((e,t)=>{O().e8(e,r,t)})),n)}function Ai(e){e.ec=ji(e,`class`,` `)}function ji(e,t,n){var r=new qo(t,Di().aF,Y());return new Ho(r.bw,new q((e=>{var t=O().fl(e,r);return t===void 0?``:t})),new el(((e,t)=>{O().fV(e,r,t)})),n)}function Mi(){}S=Mi.prototype=new T,S.constructor=Mi;function Ni(){}Ni.prototype=S;function Pi(){this.ef=null,this.eg=null,this.eh=null,this.ei=null,this.ef=`http://www.w3.org/2000/svg`,this.eg=`http://www.w3.org/1999/xlink`,this.eh=`http://www.w3.org/XML/1998/namespace`,this.ei=`http://www.w3.org/2000/xmlns/`}S=Pi.prototype=new T,S.constructor=Pi,S.fB=(function(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`xlink`:return`http://www.w3.org/1999/xlink`;case`xml`:return`http://www.w3.org/XML/1998/namespace`;case`xmlns`:return`http://www.w3.org/2000/xmlns/`;default:throw new El(e)}}),new E().i(Pi,`com.raquo.laminar.keys.SvgAttr$`,{bO:1});var Fi;function Ii(){return Fi||=new Pi,Fi}function Li(e,t){this.cH=null,this.cH=e}S=Li.prototype=new T,S.constructor=Li,new E().i(Li,`com.raquo.laminar.lifecycle.MountContext`,{bP:1});var k=new E().i(1,`com.raquo.laminar.modifiers.Modifier`,{S:1});function Ri(){this.ej=null,zi=this,this.ej=new Jo}S=Ri.prototype=new T,S.constructor=Ri,new E().i(Ri,`com.raquo.laminar.modifiers.Modifier$`,{bR:1});var zi;function Bi(){return zi||=new Ri,zi}function Vi(){this.f=null,Hi=this,this.f=new Xo(new q((e=>e)),A()),new Xo(new q((e=>``+(e|0))),A()),new Xo(new q((e=>``+ +e)),A()),new Xo(new q((e=>``+!!e)),A()),new Xo(new q((e=>e.g5())),A())}S=Vi.prototype=new T,S.constructor=Vi,new E().i(Vi,`com.raquo.laminar.modifiers.RenderableText$`,{bV:1});var Hi;function A(){return Hi||=new Vi,Hi}function Ui(){}S=Ui.prototype=new T,S.constructor=Ui,S.cc=(function(e,t,n){var r=new hu(e);t.eb(r),n!==void 0&&n.gg(e,t);var i=O().eA(e.bn(),t.bn());return i&&t.e9(r),i}),new E().i(Ui,`com.raquo.laminar.nodes.ParentNode$`,{bY:1});var Wi;function Gi(){return Wi||=new Ui,Wi}function Ki(){}S=Ki.prototype=new T,S.constructor=Ki,S.ey=(function(){Ji().f4(),Ji().f5(),Ji().f6(),Ji().f7(),Ji().f8(),Ji().f9(),Ji().fa()}),S.f4=(function(){var e=document.querySelector(`#example1`);$a().av(e).g()||(K(),new Hs(e,ec().d(new Q(L().b(new(N.r()).C([]))),new Q(L().b(new(k.r()).C([V().d(new Q(L().b(new(N.r()).C([new G((e=>e.k().c(`general`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`General`,A().f)])))),V().d(new Q(L().b(new(N.r()).C([new G((e=>e.k().c(`custom`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Custom`,A().f)])))),V().d(new Q(L().b(new(N.r()).C([new G((e=>e.k().c(`advanced`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Advanced`,A().f)])))),V().d(new Q(L().b(new(N.r()).C([new G((e=>e.k().c(`disabled`))),new G((e=>e.bg().c(!0)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Disabled`,A().f)])))),H().d(new Q(L().b(new(N.r()).C([new G((e=>e.j().c(`general`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`This is the general tab panel.`,A().f)])))),H().d(new Q(L().b(new(N.r()).C([new G((e=>e.j().c(`custom`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`This is the custom tab panel.`,A().f)])))),H().d(new Q(L().b(new(N.r()).C([new G((e=>e.j().c(`advanced`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`This is the advanced tab panel.`,A().f)])))),H().d(new Q(L().b(new(N.r()).C([new G((e=>e.j().c(`disabled`)))]))),new Q(L().b(new(k.r()).C([K().e.eT().c(!0),B(K().e,`This is the disabled tab panel.`,A().f)]))))]))))))}),S.f5=(function(){var e=document.querySelector(`#example2`);$a().av(e).g()||(K(),new Hs(e,ec().d(new Q(L().b(new(N.r()).C([new G((e=>e.eu().c(`advanced`)))]))),new Q(L().b(new(k.r()).C([V().d(new Q(L().b(new(N.r()).C([new G((e=>e.k().c(`general`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`General`,A().f)])))),V().d(new Q(L().b(new(N.r()).C([new G((e=>e.k().c(`custom`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Custom`,A().f)])))),V().d(new Q(L().b(new(N.r()).C([new G((e=>e.k().c(`advanced`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Advanced`,A().f)])))),H().d(new Q(L().b(new(N.r()).C([new G((e=>e.j().c(`general`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`This is the general tab panel.`,A().f)])))),H().d(new Q(L().b(new(N.r()).C([new G((e=>e.j().c(`custom`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`This is the custom tab panel.`,A().f)])))),H().d(new Q(L().b(new(N.r()).C([new G((e=>e.j().c(`advanced`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`This is the advanced tab panel.`,A().f)]))))]))))))}),S.f6=(function(){var e=document.querySelector(`#example3`);$a().av(e).g()||(K(),new Hs(e,ec().d(new Q(L().b(new(N.r()).C([new G((e=>e.ch().eH()))]))),new Q(L().b(new(k.r()).C([V().d(new Q(L().b(new(N.r()).C([new G((e=>e.k().c(`general`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`General`,A().f)])))),V().d(new Q(L().b(new(N.r()).C([new G((e=>e.k().c(`custom`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Custom`,A().f)])))),V().d(new Q(L().b(new(N.r()).C([new G((e=>e.k().c(`advanced`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Advanced`,A().f)])))),V().d(new Q(L().b(new(N.r()).C([new G((e=>e.k().c(`disabled`))),new G((e=>e.bg().c(!0)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Disabled`,A().f)])))),H().d(new Q(L().b(new(N.r()).C([new G((e=>e.j().c(`general`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`This is the general tab panel.`,A().f)])))),H().d(new Q(L().b(new(N.r()).C([new G((e=>e.j().c(`custom`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`This is the custom tab panel.`,A().f)])))),H().d(new Q(L().b(new(N.r()).C([new G((e=>e.j().c(`advanced`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`This is the advanced tab panel.`,A().f)])))),H().d(new Q(L().b(new(N.r()).C([new G((e=>e.j().c(`disabled`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`This is a disabled tab panel.`,A().f)]))))]))))))}),S.f7=(function(){var e=document.querySelector(`#example4`);$a().av(e).g()||(K(),new Hs(e,ec().d(new Q(L().b(new(N.r()).C([new G((e=>e.ch().fZ()))]))),new Q(L().b(new(k.r()).C([V().d(new Q(L().b(new(N.r()).C([new G((e=>e.k().c(`general`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`General`,A().f)])))),V().d(new Q(L().b(new(N.r()).C([new G((e=>e.k().c(`custom`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Custom`,A().f)])))),V().d(new Q(L().b(new(N.r()).C([new G((e=>e.k().c(`advanced`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Advanced`,A().f)])))),V().d(new Q(L().b(new(N.r()).C([new G((e=>e.k().c(`disabled`))),new G((e=>e.bg().c(!0)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Disabled`,A().f)])))),H().d(new Q(L().b(new(N.r()).C([new G((e=>e.j().c(`general`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`This is the general tab panel.`,A().f)])))),H().d(new Q(L().b(new(N.r()).C([new G((e=>e.j().c(`custom`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`This is the custom tab panel.`,A().f)])))),H().d(new Q(L().b(new(N.r()).C([new G((e=>e.j().c(`advanced`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`This is the advanced tab panel.`,A().f)])))),H().d(new Q(L().b(new(N.r()).C([new G((e=>e.j().c(`disabled`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`This is a disabled tab panel.`,A().f)]))))]))))))}),S.f8=(function(){var e=document.querySelector(`#example5`);$a().av(e).g()||(K(),new Hs(e,ec().d(new Q(L().b(new(N.r()).C([new G((e=>e.ch().f0()))]))),new Q(L().b(new(k.r()).C([V().d(new Q(L().b(new(N.r()).C([new G((e=>e.k().c(`general`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`General`,A().f)])))),V().d(new Q(L().b(new(N.r()).C([new G((e=>e.k().c(`custom`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Custom`,A().f)])))),V().d(new Q(L().b(new(N.r()).C([new G((e=>e.k().c(`advanced`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Advanced`,A().f)])))),V().d(new Q(L().b(new(N.r()).C([new G((e=>e.k().c(`disabled`))),new G((e=>e.bg().c(!0)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Disabled`,A().f)])))),H().d(new Q(L().b(new(N.r()).C([new G((e=>e.j().c(`general`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`This is the general tab panel.`,A().f)])))),H().d(new Q(L().b(new(N.r()).C([new G((e=>e.j().c(`custom`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`This is the custom tab panel.`,A().f)])))),H().d(new Q(L().b(new(N.r()).C([new G((e=>e.j().c(`advanced`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`This is the advanced tab panel.`,A().f)])))),H().d(new Q(L().b(new(N.r()).C([new G((e=>e.j().c(`disabled`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`This is a disabled tab panel.`,A().f)]))))]))))))}),S.f9=(function(){var e=document.querySelector(`#example6`);$a().av(e).g()||(K(),new Hs(e,ec().d(new Q(L().b(new(N.r()).C([]))),new Q(L().b(new(k.r()).C([V().d(new Q(L().b(new(N.r()).C([new G((e=>e.k().c(`tab-1`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Tab 1`,A().f)])))),V().d(new Q(L().b(new(N.r()).C([new G((e=>e.k().c(`tab-2`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Tab 2`,A().f)])))),V().d(new Q(L().b(new(N.r()).C([new G((e=>e.k().c(`tab-3`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Tab 3`,A().f)])))),V().d(new Q(L().b(new(N.r()).C([new G((e=>e.k().c(`tab-4`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Tab 4`,A().f)])))),V().d(new Q(L().b(new(N.r()).C([new G((e=>e.k().c(`tab-5`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Tab 5`,A().f)])))),V().d(new Q(L().b(new(N.r()).C([new G((e=>e.k().c(`tab-6`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Tab 6`,A().f)])))),V().d(new Q(L().b(new(N.r()).C([new G((e=>e.k().c(`tab-7`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Tab 7`,A().f)])))),V().d(new Q(L().b(new(N.r()).C([new G((e=>e.k().c(`tab-8`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Tab 8`,A().f)])))),V().d(new Q(L().b(new(N.r()).C([new G((e=>e.k().c(`tab-9`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Tab 9`,A().f)])))),V().d(new Q(L().b(new(N.r()).C([new G((e=>e.k().c(`tab-10`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Tab 10`,A().f)])))),V().d(new Q(L().b(new(N.r()).C([new G((e=>e.k().c(`tab-11`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Tab 11`,A().f)])))),V().d(new Q(L().b(new(N.r()).C([new G((e=>e.k().c(`tab-12`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Tab 12`,A().f)])))),V().d(new Q(L().b(new(N.r()).C([new G((e=>e.k().c(`tab-13`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Tab 13`,A().f)])))),V().d(new Q(L().b(new(N.r()).C([new G((e=>e.k().c(`tab-14`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Tab 14`,A().f)])))),V().d(new Q(L().b(new(N.r()).C([new G((e=>e.k().c(`tab-15`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Tab 15`,A().f)])))),V().d(new Q(L().b(new(N.r()).C([new G((e=>e.k().c(`tab-16`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Tab 16`,A().f)])))),V().d(new Q(L().b(new(N.r()).C([new G((e=>e.k().c(`tab-17`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Tab 17`,A().f)])))),V().d(new Q(L().b(new(N.r()).C([new G((e=>e.k().c(`tab-18`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Tab 18`,A().f)])))),V().d(new Q(L().b(new(N.r()).C([new G((e=>e.k().c(`tab-19`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Tab 19`,A().f)])))),V().d(new Q(L().b(new(N.r()).C([new G((e=>e.k().c(`tab-20`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Tab 20`,A().f)])))),H().d(new Q(L().b(new(N.r()).C([new G((e=>e.j().c(`tab-1`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Tab panel 1`,A().f)])))),H().d(new Q(L().b(new(N.r()).C([new G((e=>e.j().c(`tab-2`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Tab panel 2`,A().f)])))),H().d(new Q(L().b(new(N.r()).C([new G((e=>e.j().c(`tab-3`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Tab panel 3`,A().f)])))),H().d(new Q(L().b(new(N.r()).C([new G((e=>e.j().c(`tab-4`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Tab panel 4`,A().f)])))),H().d(new Q(L().b(new(N.r()).C([new G((e=>e.j().c(`tab-5`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Tab panel 5`,A().f)])))),H().d(new Q(L().b(new(N.r()).C([new G((e=>e.j().c(`tab-6`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Tab panel 6`,A().f)])))),H().d(new Q(L().b(new(N.r()).C([new G((e=>e.j().c(`tab-7`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Tab panel 7`,A().f)])))),H().d(new Q(L().b(new(N.r()).C([new G((e=>e.j().c(`tab-8`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Tab panel 8`,A().f)])))),H().d(new Q(L().b(new(N.r()).C([new G((e=>e.j().c(`tab-9`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Tab panel 9`,A().f)])))),H().d(new Q(L().b(new(N.r()).C([new G((e=>e.j().c(`tab-10`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Tab panel 10`,A().f)])))),H().d(new Q(L().b(new(N.r()).C([new G((e=>e.j().c(`tab-11`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Tab panel 11`,A().f)])))),H().d(new Q(L().b(new(N.r()).C([new G((e=>e.j().c(`tab-12`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Tab panel 12`,A().f)])))),H().d(new Q(L().b(new(N.r()).C([new G((e=>e.j().c(`tab-13`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Tab panel 13`,A().f)])))),H().d(new Q(L().b(new(N.r()).C([new G((e=>e.j().c(`tab-14`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Tab panel 14`,A().f)])))),H().d(new Q(L().b(new(N.r()).C([new G((e=>e.j().c(`tab-15`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Tab panel 15`,A().f)])))),H().d(new Q(L().b(new(N.r()).C([new G((e=>e.j().c(`tab-16`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Tab panel 16`,A().f)])))),H().d(new Q(L().b(new(N.r()).C([new G((e=>e.j().c(`tab-17`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Tab panel 17`,A().f)])))),H().d(new Q(L().b(new(N.r()).C([new G((e=>e.j().c(`tab-18`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Tab panel 18`,A().f)])))),H().d(new Q(L().b(new(N.r()).C([new G((e=>e.j().c(`tab-19`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Tab panel 19`,A().f)])))),H().d(new Q(L().b(new(N.r()).C([new G((e=>e.j().c(`tab-20`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Tab panel 20`,A().f)]))))]))))))}),S.fa=(function(){var e=document.querySelector(`#example7`);$a().av(e).g()||(K(),new Hs(e,ec().d(new Q(L().b(new(N.r()).C([new G((e=>e.et().fz()))]))),new Q(L().b(new(k.r()).C([V().d(new Q(L().b(new(N.r()).C([new G((e=>e.k().c(`general`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`General`,A().f)])))),V().d(new Q(L().b(new(N.r()).C([new G((e=>e.k().c(`custom`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Custom`,A().f)])))),V().d(new Q(L().b(new(N.r()).C([new G((e=>e.k().c(`advanced`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Advanced`,A().f)])))),V().d(new Q(L().b(new(N.r()).C([new G((e=>e.k().c(`disabled`))),new G((e=>e.bg().c(!0)))]))),new Q(L().b(new(k.r()).C([B(K().e,`Disabled`,A().f)])))),H().d(new Q(L().b(new(N.r()).C([new G((e=>e.j().c(`general`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`This is the general tab panel.`,A().f)])))),H().d(new Q(L().b(new(N.r()).C([new G((e=>e.j().c(`custom`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`This is the custom tab panel.`,A().f)])))),H().d(new Q(L().b(new(N.r()).C([new G((e=>e.j().c(`advanced`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`This is the advanced tab panel.`,A().f)])))),H().d(new Q(L().b(new(N.r()).C([new G((e=>e.j().c(`disabled`)))]))),new Q(L().b(new(k.r()).C([B(K().e,`This is a disabled tab panel.`,A().f)]))))]))))))}),new E().i(Ki,`examples.tabGroup.Main$package$`,{c6:1});var qi;function Ji(){return qi||=new Ki,qi}function Yi(e){try{Ji().ey()}catch(e){throw e}}function Xi(e,t){for(var n=j().T(`^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$`),r=[],i=0;i<(t.length|0);){var a=t[i];if(a!==``){var o=n.exec(a);if(o!==null){var s=Zi(e,o[1]),c=s[0],l=s[1],u=o[2],d=o[3],f=parseInt(d),p=o[4];r.push(new ps(c,l,u,f|0,p===void 0?-1:parseInt(p)|0))}else r.push(new ps(`<jscode>`,a,null,-1,-1))|0}i=1+i|0}var m=r.length|0,ee=new(ms.r()).C(m);for(i=0;i<m;)ee.a[i]=r[i],i=1+i|0;return ee}function Zi(e,t){var n=j().T(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$`),r=j().T(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$`),i=j().T(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$`),a=j().T(`^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$`),o=j().T(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$`),s=n.exec(t),c=s===null?r.exec(t):s;if(c!==null)return[Qi(e,c[1]),aa(e,c[2])];var l=i.exec(t),u=l===null?a.exec(t):l;if(u!==null)return[Qi(e,u[1]),`<init>`];var d=o.exec(t);return d===null?[`<jscode>`,t]:[Qi(e,d[1]),`<clinit>`]}function Qi(e,t){var n=ea(e);if(ja().c6.call(n,t))var r=ea(e)[t];else var r=ga(e,0,t);return r.split(`_`).join(`.`).split(`＿`).join(`_`)}function $i(e){if(!((1&e.H)<<24>>24)){var t={};t.O=`java_lang_Object`,t.T=`java_lang_String`;for(var n=0;n<=22;){if(n>=2){var r=`T`+n;t[r]=`scala_Tuple`+n}var i=`F`+n;t[i]=`scala_Function`+n,n=1+n|0}e.c3=t,e.H=(1|e.H)<<24>>24}return e.c3}function ea(e){return(1&e.H)<<24>>24?e.c3:$i(e)}function ta(e){if(!((2&e.H)<<24>>24)){var t={};t.sjsr_=`scala_scalajs_runtime_`,t.sjs_=`scala_scalajs_`,t.sci_=`scala_collection_immutable_`,t.scm_=`scala_collection_mutable_`,t.scg_=`scala_collection_generic_`,t.sc_=`scala_collection_`,t.sr_=`scala_runtime_`,t.s_=`scala_`,t.jl_=`java_lang_`,t.ju_=`java_util_`,e.c4=t,e.H=(2|e.H)<<24>>24}return e.c4}function na(e){return(2&e.H)<<24>>24?e.c4:ta(e)}function ra(e){return(4&e.H)<<24>>24||(e.c2=Object.keys(na(e)),e.H=(4|e.H)<<24>>24),e.c2}function ia(e){return(4&e.H)<<24>>24?e.c2:ra(e)}function aa(e,t){if(t.startsWith(`init___`))return`<init>`;var n=t.indexOf(`__`)|0;return n<0?t:t.substring(0,n)}function oa(e,t){return t?t.arguments&&t.stack?sa(e,t):t.stack&&t.sourceURL?ua(e,t):t.stack&&t.number?la(e,t):t.stack&&t.fileName?ca(e,t):t.message&&t[`opera#sourceloc`]?t.stacktrace?t.message.indexOf(`
`)>-1&&t.message.split(`
`).length>t.stacktrace.split(`
`).length?da(e,t):fa(e,t):da(e,t):t.message&&t.stack&&t.stacktrace?t.stacktrace.indexOf(`called from line`)<0?pa(e,t):ma(e,t):t.stack&&!t.fileName?sa(e,t):ha(e,t):[]}function sa(e,t){return(t.stack+`
`).replace(j().T(`^[\\s\\S]+?\\s+at\\s+`),` at `).replace(j().B(`^\\s+(at eval )?at\\s+`,`gm`),``).replace(j().B(`^([^\\(]+?)([\\n])`,`gm`),`{anonymous}() ($1)$2`).replace(j().B(`^Object.<anonymous>\\s*\\(([^\\)]+)\\)`,`gm`),`{anonymous}() ($1)`).replace(j().B(`^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(0,-1)}function ca(e,t){return t.stack.replace(j().B(`(?:\\n@:0)?\\s+$`,`m`),``).replace(j().B(`^(?:\\((\\S*)\\))?@`,`gm`),`{anonymous}($1)@`).split(`
`)}function la(e,t){return t.stack.replace(j().B(`^\\s*at\\s+(.*)$`,`gm`),`$1`).replace(j().B(`^Anonymous function\\s+`,`gm`),`{anonymous}() `).replace(j().B(`^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(1)}function ua(e,t){return t.stack.replace(j().B(`\\[native code\\]\\n`,`m`),``).replace(j().B(`^(?=\\w+Error\\:).*$\\n`,`m`),``).replace(j().B(`^@`,`gm`),`{anonymous}()@`).split(`
`)}function da(e,t){for(var n=j().B(`Line (\\d+).*script (?:in )?(\\S+)`,`i`),r=t.message.split(`
`),i=[],a=2,o=r.length|0;a<o;){var s=n.exec(r[a]);s!==null&&i.push(`{anonymous}()@`+s[2]+`:`+s[1])|0,a=2+a|0}return i}function fa(e,t){for(var n=j().B(`Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$`,`i`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[3],l=c===void 0?`{anonymous}`:c;i.push(l+`()@`+s[2]+`:`+s[1])|0}a=2+a|0}return i}function pa(e,t){for(var n=j().T(`^(.*)@(.+):(\\d+)$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[1],l=c===void 0?`global code`:c+`()`;i.push(l+`@`+s[2]+`:`+s[3])|0}a=1+a|0}return i}function ma(e,t){for(var n=j().T(`^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[4]+`:`+s[1]+`:`+s[2],l=s[2],u=(l===void 0?`global code`:l).replace(j().T(`<anonymous function: (\\S+)>`),`$1`).replace(j().T(`<anonymous function>`),`{anonymous}`);i.push(u+`@`+c)|0}a=2+a|0}return i}function ha(e,t){return[]}function ga(e,t,n){for(;;)if(t<(ia(e).length|0)){var r=ia(e)[t];if(n.startsWith(r))return``+na(e)[r]+n.substring(r.length);t=1+t|0}else return n.startsWith(`L`)?n.substring(1):n}function _a(){this.c3=null,this.c4=null,this.c2=null,this.H=0}S=_a.prototype=new T,S.constructor=_a,S.fb=(function(e){return Xi(this,oa(this,e))}),new E().i(_a,`java.lang.StackTrace$`,{cu:1});var va;function ya(){return va||=new _a,va}function ba(){}S=ba.prototype=new T,S.constructor=ba,S.T=(function(e){return new RegExp(e)}),S.B=(function(e,t){return new RegExp(e,t)}),new E().i(ba,`java.lang.StackTrace$StringRE$`,{cv:1});var xa;function j(){return xa||=new ba,xa}function Sa(){this.dd=null,this.ek=null,Ca=this,this.dd=new Pu(!1),this.ek=new Pu(!0)}S=Sa.prototype=new T,S.constructor=Sa,new E().i(Sa,`java.lang.System$Streams$`,{cz:1});var Ca;function wa(){return Ca||=new Sa,Ca}function Ta(e){var t={};return t[`java.version`]=`1.8`,t[`java.vm.specification.version`]=`1.8`,t[`java.vm.specification.vendor`]=`Oracle Corporation`,t[`java.vm.specification.name`]=`Java Virtual Machine Specification`,t[`java.vm.name`]=`Scala.js`,t[`java.vm.version`]=`1.22.0`,t[`java.specification.version`]=`1.8`,t[`java.specification.vendor`]=`Oracle Corporation`,t[`java.specification.name`]=`Java Platform API Specification`,t[`file.separator`]=`/`,t[`path.separator`]=`:`,t[`line.separator`]=`
`,t}function Ea(){this.c5=null,this.de=null,Da=this,this.c5=Ta(this),this.de=null}S=Ea.prototype=new T,S.constructor=Ea,S.dY=(function(e,t){if(this.c5!==null){var n=this.c5;return ja().c6.call(n,e)?n[e]:t}return this.de.dY(e,t)}),new E().i(Ea,`java.lang.System$SystemProperties$`,{cA:1});var Da;function Oa(){return Da||=new Ea,Da}function ka(){this.c6=null,Aa=this,this.c6=Object.prototype.hasOwnProperty}S=ka.prototype=new T,S.constructor=ka,new E().i(ka,`java.lang.Utils$Cache$`,{cC:1});var Aa;function ja(){return Aa||=new ka,Aa}function Ma(e,t){return e===t}function Na(e){return 0}function Pa(e,t){return!!(e&&e.$classData&&e.$classData.D===t&&e.$classData.B.n.am)}var Fa=new E().i(0,`java.lang.Void`,{am:1},(e=>e===void 0));function Ia(e,t){throw fl(new ml,`argument type mismatch`)}function La(){}S=La.prototype=new T,S.constructor=La,S.bi=(function(e){return e instanceof dr||e instanceof pr||e instanceof mr||e instanceof hr||e instanceof gr||e instanceof _r?e.a.length:e instanceof vr?e.a.length>>>1|0:(e instanceof yr||e instanceof br||Ia(this,e),e.a.length)}),new E().i(La,`java.lang.reflect.Array$`,{cD:1});var Ra;function za(){return Ra||=new La,Ra}function Ba(){}S=Ba.prototype=new T,S.constructor=Ba,S.eG=(function(e,t){for(var n=0,r=e.a.length;;)if(n===r)return~n;else{var i=(n+r|0)>>>1|0,a=e.a[i],o=t===a?0:t<a?-1:1;if(o<0){r=i;continue}if(o!==0){n=1+i|0;continue}return i}}),S.dQ=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length>>>1|0;if((t.a.length>>>1|0)!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a,o=i<<1,s=a[o],c=a[o+1|0],l=r,u=t.a,d=l<<1,f=u[d],p=u[d+1|0];if((s^f|c^p)!==0)return!1;r=1+r|0}return!0}),S.dP=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),S.dR=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),S.dO=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),S.dN=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),S.dS=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),new E().i(Ba,`java.util.Arrays$`,{cE:1});var Va;function M(){return Va||=new Ba,Va}function Ha(e,t){return Ga().ea(e,t)}function Ua(){}S=Ua.prototype=new T,S.constructor=Ua,S.ea=(function(e,t){if(t===e>>31)return``+e;if(-2097152&(t^t>>10)){var n=t>>31,r=e^n,i=r-n|0,a=4294967296*(((t^n)+(i>>>0<r>>>0|0)|0)>>>0)+(i>>>0),o=+Math.floor(1.0000000000000265e-9*a),s=i-Math.imul(1e9,o|0)|0;s<0&&(--o,s=1e9+s|0);var c=``+s,l=o,u=c.length,d=``+l+`000000000`.substring(u)+c;return t<0?`-`+d:d}return``+(4294967296*t+(e>>>0))}),S.dX=(function(e){if(e<-0x8000000000000000)return w(0,-2147483648);if(e>=0x8000000000000000)return w(-1,2147483647);var t=e|0,n=23283064365386963e-26*e|0;return w(t,e<0&&t!==0?n-1|0:n)}),S.eU=(function(e,t,n,r){var i=t>>31,a=e^i,o=a-i|0,s=(t^i)+(o>>>0<a>>>0|0)|0,c=r>>31,l=n^c,u=l-c|0,d=(r^c)+(u>>>0<l>>>0|0)|0;if(d|-2097152&u){var f=(4294967296*(s>>>0)+(o>>>0))/(4294967296*(d>>>0)+(u>>>0))+.00390625,p=f|0,m=23283064365386963e-26*f|0,ee=65535&u,te=u>>>16|0,ne=65535&p,re=p>>>16|0,ie=Math.imul(ee,ne),ae=Math.imul(te,ne),oe=Math.imul(ee,re),se=ie+((ae+oe|0)<<16)|0,ce=(ie>>>16|0)+oe|0;if(((s-((((Math.imul(u,m)+Math.imul(d,p)|0)+Math.imul(te,re)|0)+(ce>>>16|0)|0)+(((65535&ce)+ae|0)>>>16|0)|0)|0)-((o-se|0)>>>0>o>>>0|0)|0)<0)var le=p-1|0,ue=(m-1|0)+(le!==-1|0)|0,de=le,fe=ue;else var de=p,fe=m}else var pe=(s>>>0)/(Jn(u)>>>0)|0,de=(4294967296*(s-Math.imul(u,pe)|0)+(o>>>0))/u|0,fe=pe;if((t^r)>=0)return w(de,fe);var me=-de|0;return w(me,(-fe|0)-(me!==0|0)|0)}),S.eV=(function(e,t,n,r){if(!(r|-2097152&n)){var i=(t>>>0)/(Jn(n)>>>0)|0;return w((4294967296*(t-Math.imul(n,i)|0)+(e>>>0))/n|0,i)}if(r>=0){var a=(4294967296*(t>>>0)+(e>>>0))/(4294967296*(r>>>0)+(n>>>0))+.00390625,o=a|0,s=23283064365386963e-26*a|0,c=65535&n,l=n>>>16|0,u=65535&o,d=o>>>16|0,f=Math.imul(c,u),p=Math.imul(l,u),m=Math.imul(c,d),ee=f+((p+m|0)<<16)|0,te=(f>>>16|0)+m|0;if(((t-((((Math.imul(n,s)+Math.imul(r,o)|0)+Math.imul(l,d)|0)+(te>>>16|0)|0)+(((65535&te)+p|0)>>>16|0)|0)|0)-((e-ee|0)>>>0>e>>>0|0)|0)<0){var ne=o-1|0;return w(ne,(s-1|0)+(ne!==-1|0)|0)}return w(o,s)}return(t===r?e>>>0<n>>>0:t>>>0<r>>>0)?w(0,0):w(1,0)}),S.fK=(function(e,t,n,r){var i=t>>31,a=e^i,o=a-i|0,s=(t^i)+(o>>>0<a>>>0|0)|0,c=r>>31,l=n^c,u=l-c|0,d=(r^c)+(u>>>0<l>>>0|0)|0;if(d|-2097152&u){var f=(4294967296*(s>>>0)+(o>>>0))/(4294967296*(d>>>0)+(u>>>0))+.00390625,p=f|0,m=23283064365386963e-26*f|0,ee=65535&u,te=u>>>16|0,ne=65535&p,re=p>>>16|0,ie=Math.imul(ee,ne),ae=Math.imul(te,ne),oe=Math.imul(ee,re),se=ie+((ae+oe|0)<<16)|0,ce=(ie>>>16|0)+oe|0,le=(((Math.imul(u,m)+Math.imul(d,p)|0)+Math.imul(te,re)|0)+(ce>>>16|0)|0)+(((65535&ce)+ae|0)>>>16|0)|0,ue=o-se|0,de=(s-le|0)-(ue>>>0>o>>>0|0)|0;if(de<0)var fe=ue+u|0,pe=(de+d|0)+(fe>>>0<ue>>>0|0)|0,me=fe,he=pe;else var me=ue,he=de}else var ge=(4294967296*((s>>>0)%(Jn(u)>>>0)|0)+(o>>>0))/u|0,me=o-Math.imul(u,ge)|0,he=0;if(t<0){var _e=-me|0;return w(_e,(-he|0)-(_e!==0|0)|0)}return w(me,he)}),S.fL=(function(e,t,n,r){if(!(r|-2097152&n)){var i=(4294967296*((t>>>0)%(Jn(n)>>>0)|0)+(e>>>0))/n|0;return w(e-Math.imul(n,i)|0,0)}if(r>=0){var a=(4294967296*(t>>>0)+(e>>>0))/(4294967296*(r>>>0)+(n>>>0))+.00390625,o=a|0,s=23283064365386963e-26*a|0,c=65535&n,l=n>>>16|0,u=65535&o,d=o>>>16|0,f=Math.imul(c,u),p=Math.imul(l,u),m=Math.imul(c,d),ee=f+((p+m|0)<<16)|0,te=(f>>>16|0)+m|0,ne=(((Math.imul(n,s)+Math.imul(r,o)|0)+Math.imul(l,d)|0)+(te>>>16|0)|0)+(((65535&te)+p|0)>>>16|0)|0,re=e-ee|0,ie=(t-ne|0)-(re>>>0>e>>>0|0)|0;if(ie<0){var ae=re+n|0;return w(ae,(ie+r|0)+(ae>>>0<re>>>0|0)|0)}return w(re,ie)}if(t===r?e>>>0<n>>>0:t>>>0<r>>>0)return w(e,t);var oe=e-n|0;return w(oe,(t-r|0)-(oe>>>0>e>>>0|0)|0)}),new E().i(Ua,`org.scalajs.linker.runtime.RuntimeLong$`,{cG:1});var Wa;function Ga(){return Wa||=new Ua,Wa}function Ka(){}S=Ka.prototype=new T,S.constructor=Ka,S.dU=(function(e,t){var n=e.y();if(n>-1){for(var r=t.e0(n),i=e.l(),a=0;a<n;)F().dJ(r,a,i.o()),a=1+a|0;return r}var o=null,s=t.e6(),c=s===Cr.l();o=[];for(var l=e.l();l.s();){var u=l.o(),d=c?cr(u):u===null?go().fQ(s):u;o.push(d)}return go().fP(s===xr.l()?Fa.l():s===yo.l()||s===xc.l()?D.l():s,o)}),S.dT=(function(e,t){if(e===t)return!0;if(e.a.length!==t.a.length)return!1;for(var n=e.a.length,r=0;r<n;){if(!P().F(e.a[r],t.a[r]))return!1;r=1+r|0}return!0}),new E().i(Ka,`scala.Array$`,{cH:1});var qa;function Ja(){return qa||=new Ka,qa}var N=new E().i(1,`scala.Function1`,{e:1});function Ya(){}S=Ya.prototype=new T,S.constructor=Ya;function Xa(){}Xa.prototype=S;function Za(){}S=Za.prototype=new T,S.constructor=Za,S.av=(function(e){return e===null?Y():new hu(e)}),new E().i(Za,`scala.Option$`,{cP:1});var Qa;function $a(){return Qa||=new Za,Qa}function eo(){this.dm=null,this.dl=null,to=this,this.dm=new G((e=>this.dm)),this.dl=new Gc}S=eo.prototype=new T,S.constructor=eo,new E().i(eo,`scala.PartialFunction$`,{cQ:1});var to;function no(){return to||=new eo,to}function ro(e,t){for(var n=e.l();n.s();)t.m(n.o())}function io(e,t,n,r){return e.y()===0?``+t+r:e.aM(Gd(new Kd),t,n,r).E.r}function ao(e,t,n,r,i){var a=t.E;n.length!==0&&(a.r=``+a.r+n);var o=e.l();if(o.s()){var s=o.o();for(a.r=``+a.r+s;o.s();){r.length!==0&&(a.r=``+a.r+r);var c=o.o();a.r=``+a.r+c}}return i.length!==0&&(a.r=``+a.r+i),t}function oo(e,t){this.ds=null,this.b0=null,this.ds=e,this.b0=t}S=oo.prototype=new T,S.constructor=oo,S.fo=(function(){return this.ds.ax().l()}),new E().i(oo,`scala.collection.Iterator$ConcatIteratorCell`,{d5:1});function so(){this.dt=null,co=this,this.dt=new G((e=>this.dt))}S=so.prototype=new T,S.constructor=so,new E().i(so,`scala.collection.StringOps$`,{dc:1});var co;function lo(){return co||=new so,co}function uo(){this.dw=0,fo=this;try{lo();var e=us().ft(Oa().dY(`scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength`,`64`),10,214748364)}catch(t){if(0)var e;else{var e;throw t}}this.dw=e}S=uo.prototype=new T,S.constructor=uo,new E().i(uo,`scala.collection.immutable.IndexedSeqDefaults$`,{dg:1});var fo;function po(){return fo||=new uo,fo}function mo(){}S=mo.prototype=new T,S.constructor=mo,S.fQ=(function(e){return e===wr.l()||e===Tr.l()||e===Cr.l()||e===Er.l()?0:e===Dr.l()?w(0,0):e===Or.l()||e===kr.l()?0:e===Sr.l()?!1:e===xr.l()?void 0:null}),S.fP=(function(e,t){var n=t.length|0;if(e===Cr.l()){for(var r=new mr(n),i=0;i!==n;)r.a[i]=65535&(t[i]|0),i=1+i|0;return r}for(var a=e.af.U(n),o=0;o!==n;)F().dJ(a,o,t[o]),o=1+o|0;return a}),new E().i(mo,`scala.collection.mutable.ArrayBuilder$`,{dl:1});var ho;function go(){return ho||=new mo,ho}function _o(){}S=_o.prototype=new T,S.constructor=_o,S.F=(function(e,t){return e===t||(fs(e)?this.f3(e,t):e instanceof Hn?this.f1(e,t):e===null?t===null:Gn(e,t))}),S.f3=(function(e,t){if(fs(t))return this.f2(e,t);if(t instanceof Hn){if(typeof e==`number`)return+e===t.c;if(e instanceof C){var n=lr(e),r=n.l,i=n.h,a=t.c,o=a>>31;return(r^a|i^o)===0}return e===null?t===null:Gn(e,t)}return e===null?t===null:Gn(e,t)}),S.f2=(function(e,t){if(typeof e==`number`){var n=+e;if(typeof t==`number`)return n===+t;if(t instanceof C){var r=lr(t),i=r.l;return n===4294967296*r.h+(i>>>0)}return!1}if(e instanceof C){var a=lr(e),o=a.l,s=a.h;if(t instanceof C){var c=lr(t),l=c.l,u=c.h;return(o^l|s^u)===0}if(typeof t==`number`){var d=+t;return 4294967296*s+(o>>>0)===d}return!1}return e===null?t===null:Gn(e,t)}),S.f1=(function(e,t){if(t instanceof Hn)return e.c===t.c;if(fs(t)){if(typeof t==`number`)return+t===e.c;if(t instanceof C){var n=lr(t),r=n.l,i=n.h,a=e.c,o=a>>31;return(r^a|i^o)===0}return t===null?e===null:Gn(t,e)}return e===null&&t===null}),new E().i(_o,`scala.runtime.BoxesRunTime$`,{dG:1});var vo;function P(){return vo||=new _o,vo}var yo=new E().i(0,`scala.runtime.Null$`,{dJ:1});function bo(){}S=bo.prototype=new T,S.constructor=bo,S.bN=(function(){throw yl(new xl,`tried to cast away nullability, but value is null`)}),new E().i(bo,`scala.runtime.Scala3RunTime$`,{dK:1});var xo;function So(){return xo||=new bo,xo}function Co(){}S=Co.prototype=new T,S.constructor=Co,S.ex=(function(e){return e===null?yo.l():Un(e)}),S.aN=(function(e,t){if(e instanceof dr||e instanceof _r||e instanceof br)return e.a[t];if(e instanceof vr){var n=e.a,r=t<<1;return w(n[r],n[r+1|0])}if(e instanceof yr)return e.a[t];if(e instanceof mr)return or(e.a[t]);if(e instanceof hr||e instanceof gr||e instanceof pr)return e.a[t];throw e===null?bl(new xl):new El(e)}),S.dJ=(function(e,t,n){if(e instanceof dr)e.a[t]=n;else if(e instanceof _r)e.a[t]=n|0;else if(e instanceof br)e.a[t]=+n;else if(e instanceof vr){var r=lr(n),i=e.a,a=t<<1;i[a]=r.l,i[a+1|0]=r.h}else if(e instanceof yr)e.a[t]=Math.fround(n);else if(e instanceof mr)e.a[t]=cr(n);else if(e instanceof hr)e.a[t]=n|0;else if(e instanceof gr)e.a[t]=n|0;else if(e instanceof pr)e.a[t]=!!n;else throw e===null?bl(new xl):new El(e)}),S.es=(function(e){return io(e.bm(),e.ad()+`(`,`,`,`)`)}),S.ae=(function(e){if(e===null)return null;if(e.a.length===0){var t=Cu();return Gu(),bu(t)}return new Cd(e)}),new E().i(Co,`scala.runtime.ScalaRunTime$`,{dL:1});var wo;function F(){return wo||=new Co,wo}function To(){}S=To.prototype=new T,S.constructor=To,S.q=(function(e,t){var n=this.bM(e,t),r=n;return n=r<<13|r>>>19,Math.imul(5,n)-430675100|0}),S.bM=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|r>>>17,n=Math.imul(461845907,n),e^n}),S.A=(function(e,t){return this.eF(e^t)}),S.eF=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),S.fx=(function(e,t){return t===e>>31?e:e^t}),S.eX=(function(e){var t=Yn(e);if(t===e)return t;var n=Ga().dX(e),r=n.l,i=n.h;if(4294967296*i+(r>>>0)===e)return r^i;var a=e|0;if(a===e&&1/e!=-1/0)return a;if(e!==e)return 2146959360;var o=Zn;return o.setFloat64(0,e,!0),(o.getInt32(0,!0)|0)^(o.getInt32(4,!0)|0)}),S.w=(function(e){if(e===null)return 0;if(typeof e==`number`)return this.eX(+e);if(e instanceof C){var t=lr(e);return this.fx(t.l,t.h)}return Kn(e)}),S.fq=(function(e){throw hl(new _l,``+e)}),new E().i(To,`scala.runtime.Statics$`,{dN:1});var Eo;function I(){return Eo||=new To,Eo}function Do(){}S=Do.prototype=new T,S.constructor=Do,S.fX=(function(e,t){return setTimeout((()=>{t.ax()}),e)}),new E().i(Do,`scala.scalajs.js.timers.package$`,{dQ:1});var Oo;function ko(){return Oo||=new Do,Oo}function Ao(){}S=Ao.prototype=new T,S.constructor=Ao,S.g6=(function(e){if(e instanceof Q)return e.bF;var t=[];return e.aO(new G((e=>t.push(e)|0))),t}),new E().i(Ao,`scala.scalajs.runtime.Compat$`,{dZ:1});var jo;function Mo(){return jo||=new Ao,jo}function No(){}S=No.prototype=new T,S.constructor=No,S.b=(function(e){for(var t=e.a.length,n=[],r=0;r!==t;){var i=r;n.push(e.a[i]),r=1+r|0}return n}),new E().i(No,`scala.scalajs.runtime.package$`,{e0:1});var Po;function L(){return Po||=new No,Po}function Fo(){}S=Fo.prototype=new T,S.constructor=Fo,S.fY=(function(e){var t=`Illegal command line`+(e.dZ()===0?``:e.dZ()===1?` after first argument`:` after `+e.dZ()+` arguments`)+`: `+e.ge();xs().fF().fu(t+`
`)}),new E().i(Fo,`scala.util.CommandLineParser$`,{e1:1});function Io(e){this.c8=null,this.c8=e}S=Io.prototype=new T,S.constructor=Io,S.t=(function(){return`DynamicVariable(`+this.c8+`)`}),new E().i(Io,`scala.util.DynamicVariable`,{e3:1});function Lo(){}S=Lo.prototype=new T,S.constructor=Lo;function Ro(){}Ro.prototype=S,S.q=(function(e,t){var n=this.bM(e,t),r=n;return n=r<<13|r>>>19,Math.imul(5,n)-430675100|0}),S.bM=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|r>>>17,n=Math.imul(461845907,n),e^n}),S.A=(function(e,t){return this.bo(e^t)}),S.bo=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),S.e4=(function(e,t,n){var r=e.ab();if(r===0)return n?t:J(e.ad());var i=t;n||(i=this.q(i,J(e.ad())));for(var a=0;a<r;)i=this.q(i,I().w(e.ac(a))),a=1+a|0;return this.A(i,r)}),S.g7=(function(e,t){for(var n=0,r=0,i=0,a=1,o=e.l();o.s();){var s=o.o(),c=I().w(s);n=n+c|0,r^=c,a=Math.imul(a,1|c),i=1+i|0}var l=t;return l=this.q(l,n),l=this.q(l,r),l=this.bM(l,a),this.A(l,i)}),S.fE=(function(e,t){var n=e.l(),r=t;if(!n.s())return this.A(r,0);var i=n.o();if(!n.s())return this.A(this.q(r,I().w(i)),1);var a=n.o(),o=I().w(i);r=this.q(r,o);for(var s=r,c=I().w(a),l=c-o|0,u=2;n.s();){r=this.q(r,c);var d=I().w(n.o());if(l!==(d-c|0)||l===0){for(r=this.q(r,d),u=1+u|0;n.s();)r=this.q(r,I().w(n.o())),u=1+u|0;return this.A(r,u)}c=d,u=1+u|0}return this.bo(this.q(this.q(s,l),c))}),S.v=(function(e,t){var n=t,r=za().bi(e);switch(r){case 0:return this.A(n,0);case 1:return this.A(this.q(n,I().w(F().aN(e,0))),1);default:var i=I().w(F().aN(e,0));n=this.q(n,i);for(var a=n,o=I().w(F().aN(e,1)),s=o-i|0,c=2;c<r;){n=this.q(n,o);var l=I().w(F().aN(e,c));if(s!==(l-o|0)||s===0){for(n=this.q(n,l),c=1+c|0;c<r;)n=this.q(n,I().w(F().aN(e,c))),c=1+c|0;return this.A(n,r)}o=l,c=1+c|0}return this.bo(this.q(this.q(a,s),o))}}),S.fI=(function(e,t,n,r){return this.bo(this.q(this.q(this.q(r,e),t),n))}),S.fp=(function(e,t){var n=t,r=e.i();switch(r){case 0:return this.A(n,0);case 1:return this.A(this.q(n,I().w(e.n(0))),1);default:var i=I().w(e.n(0));n=this.q(n,i);for(var a=n,o=I().w(e.n(1)),s=o-i|0,c=2;c<r;){n=this.q(n,o);var l=I().w(e.n(c));if(s!==(l-o|0)||s===0){for(n=this.q(n,l),c=1+c|0;c<r;)n=this.q(n,I().w(e.n(c))),c=1+c|0;return this.A(n,r)}o=l,c=1+c|0}return this.bo(this.q(this.q(a,s),o))}}),S.fw=(function(e,t){for(var n=0,r=t,i=0,a=0,o=0,s=0,c=e;!c.g();){var l=c.S(),u=c.G(),d=I().w(l);switch(r=this.q(r,d),i){case 0:s=d,i=1;break;case 1:a=d-o|0,i=2;break;case 2:(a!==(d-o|0)||a===0)&&(i=3)}o=d,n=1+n|0,c=u}return i===2?this.fI(s,a,o,t):this.A(r,n)});function zo(e){this.aE=null,this.cr=null,this.bS=!1,this.cr=e,ci(this),this.bS=!1}S=zo.prototype=new T,S.constructor=zo,S.fG=(function(e){this.bS?(fi(e),this.cr.ax()):di(this,e)}),S.fv=(function(){li(this),this.bS=!0}),new E().i(zo,`com.raquo.airstream.ownership.OneTimeOwner`,{bm:1,bn:1});function Bo(){}S=Bo.prototype=new T,S.constructor=Bo,S.eR=(function(e){return e!==null}),S.eZ=(function(e){return e?``:null}),S.bH=(function(e){return this.eR(e)}),S.bh=(function(e){return this.eZ(!!e)}),new E().i(Bo,`com.raquo.laminar.codecs.package$$anon$1`,{bA:1,Y:1});function Vo(e){if(e===null)throw bl(new xl)}S=Vo.prototype=new T,S.constructor=Vo,S.bh=(function(e){return e}),S.bH=(function(e){return e}),new E().i(Vo,`com.raquo.laminar.codecs.package$$anon$2`,{bB:1,Y:1});function Ho(e,t,n,r){}S=Ho.prototype=new Ni,S.constructor=Ho,new E().i(Ho,`com.raquo.laminar.keys.CompositeKey`,{bL:1,R:1});function Uo(e,t,n){return e.aj=t,e.aQ=n,e}function Wo(){this.aj=null,this.aQ=null}S=Wo.prototype=new Ni,S.constructor=Wo;function Go(){}Go.prototype=S,S.c=(function(e){return new Vs(this,e,new tl(((e,t,n)=>{O().e8(e,t,n)})))}),new E().i(Wo,`com.raquo.laminar.keys.HtmlAttr`,{Z:1,R:1});function Ko(e,t){this.cG=null,this.cF=null,this.cG=e,this.cF=t}S=Ko.prototype=new Ni,S.constructor=Ko,S.c=(function(e){return new Vs(this,e,new tl(((e,t,n)=>{O().fS(e,t,n)})))}),new E().i(Ko,`com.raquo.laminar.keys.HtmlProp`,{bM:1,R:1});function qo(e,t,n){this.bV=null,this.bU=null,this.bw=null,this.bx=null,this.bV=e,this.bU=t;var r=n.g()?Y():new hu(n.x()+`:`+e);this.bw=r.g()?e:r.x(),this.bx=n.g()?Y():new hu(Ii().fB(n.x()))}S=qo.prototype=new Ni,S.constructor=qo,new E().i(qo,`com.raquo.laminar.keys.SvgAttr`,{bN:1,R:1});function Jo(){}S=Jo.prototype=new T,S.constructor=Jo,S.au=(function(e){}),new E().i(Jo,`com.raquo.laminar.modifiers.Modifier$$anon$1`,{bS:1,S:1});function Yo(e,t){if(this.cL=null,this.cL=e,t===null)throw bl(new xl)}S=Yo.prototype=new T,S.constructor=Yo,S.au=(function(e){var t=Gr(),n=(()=>{this.cL.m(e)});if(Gr(),t.O)n();else{t.O=!0;try{n()}finally{t.O=!1,Hr(t)}}}),new E().i(Yo,`com.raquo.laminar.modifiers.Modifier$$anon$2`,{bT:1,S:1});function Xo(e,t){if(this.cM=null,this.cM=e,t===null)throw bl(new xl)}S=Xo.prototype=new T,S.constructor=Xo,S.eE=(function(e){return this.cM.m(e)}),new E().i(Xo,`com.raquo.laminar.modifiers.RenderableText$$anon$1`,{bW:1,bU:1});function Zo(e){e.dM(new ni(new $c((()=>{throw U(new W,`Attempting to use owner of unmounted element: `+io(O().eQ(e.bn(),(O(),Ud())),``,` > `,``))}))))}function Qo(){}S=Qo.prototype=new T,S.constructor=Qo;function $o(){}$o.prototype=S,S.eD=(function(e){var t=this.eI();return e.aO(new q((e=>{e.au(t)}))),t}),S.eI=(function(){return new tu(this,O().eL(this))});function es(e,t){this.cR=null,this.cR=e}S=es.prototype=new T,S.constructor=es,new E().i(es,`com.raquo.laminar.tags.SvgTag`,{c5:1,ab:1});function ts(){}S=ts.prototype=new T,S.constructor=ts,S.bh=(function(e){return e}),S.bH=(function(e){return e}),new E().i(ts,`io.github.nguyenyou.webawesome.laminar.UnionAsStringCodec$$anon$1`,{cc:1,Y:1});function ns(e,t){return e.aS=t,e.c9(),e}function rs(){this.aS=null,this.aR=null,this.aT=!1}S=rs.prototype=new T,S.constructor=rs;function is(){}is.prototype=S,S.g3=(function(){return this.aT||=(this.aR=new Us(this.aS,new G((e=>void 0)),void 0),!0),this.aR}),S.d=(function(e,t){var n=this.g3().eD(new Q([]));return e.aO(new G((e=>{e.m(this).au(n)}))),t.aO(new G((e=>{e.au(n)}))),n});function as(){this.c0=null,os=this,this.c0=jr(67,`1C]4m6m=c4]4]4]4]4]4]4]4]4]3g4]2m9]2m1Jm1m9s4g5mm6]3]4mm12>mEm1m6m1]3]=]DI]1<m24mIs4g2c4w9];]4]<]3m3m=m3mH]8]2m=mBHm3]4mK3{gggg2:g=m@]13]4E]`)}S=as.prototype=new T,S.constructor=as,S.eS=(function(e,t){if(e<256)var n=(e-48|0)>>>0<=9?e-48|0:(e-65|0)>>>0<=25?e-55|0:(e-97|0)>>>0<=25?e-87|0:-1;else if((e-65313|0)>>>0<=25)var n=e-65303|0;else if((e-65345|0)>>>0<=25)var n=e-65335|0;else{var r=M().eG(this.c0,e),i=r<0?-2-r|0:r;if(i<0)var n=-1;else var a=e-this.c0.a[i]|0,n=a>9?-1:a}return n<t?n:-1}),new E().i(as,`java.lang.Character$`,{ci:1,a:1});var os;function ss(){return os||=new as,os}function cs(){}S=cs.prototype=new T,S.constructor=cs,S.bk=(function(e){throw new uu(`For input string: "`+e+`"`)}),S.ft=(function(e,t,n){e===null&&us().bk(e);var r=e.length;r===0&&us().bk(e);var i=ss(),a=e.charCodeAt(0),o=a===45,s=o?-1:0,c=(o||a===43)|0;c>=r&&us().bk(e);var l=0;for(l=0;c!==r;){var u=i.eS(e.charCodeAt(c),t);(u<0||l>>>0>n>>>0)&&us().bk(e),l=Math.imul(l,t)+u|0,c=1+c|0}return l>>>0>(2147483647-s|0)>>>0&&us().bk(e),(l^s)-s|0}),new E().i(cs,`java.lang.Integer$`,{cn:1,a:1});var ls;function us(){return ls||=new cs,ls}function ds(){}S=ds.prototype=new T,S.constructor=ds;function fs(e){return e instanceof ds||typeof e==`number`||e instanceof C}function ps(e,t,n,r,i){this.aI=null,this.aV=null,this.aJ=null,this.aK=0,this.aH=0,this.aI=e,this.aV=t,this.aJ=n,this.aK=r,this.aH=i}S=ps.prototype=new T,S.constructor=ps,S.h=(function(e){return e instanceof ps&&this.aJ===e.aJ&&this.aK===e.aK&&this.aH===e.aH&&this.aI===e.aI&&this.aV===e.aV}),S.t=(function(){var e=``;return this.aI!==`<jscode>`&&(e=``+e+this.aI+`.`),e=``+e+this.aV,this.aJ===null?e+=`(Unknown Source)`:(e=e+`(`+this.aJ,this.aK>=0&&(e=e+`:`+this.aK,this.aH>=0&&(e=e+`:`+this.aH)),e+=`)`),e}),S.p=(function(){return J(this.aI)^J(this.aV)^J(this.aJ)^this.aK^this.aH});var ms=new E().i(ps,`java.lang.StackTraceElement`,{al:1,a:1});function hs(){}S=hs.prototype=new T,S.constructor=hs,S.fC=(function(e,t,n){for(var r=t+n|0,i=``,a=t;a!==r;)i+=``+Xn(e.a[a]),a=1+a|0;return i}),new E().i(hs,`java.lang.String$`,{cx:1,a:1});var gs;function _s(){return gs||=new hs,gs}function R(e,t,n,r,i){return e.dg=t,e.dh=i,i&&e.fc(),e}var vs=class extends Error{constructor(){super(),this.dg=null,this.dh=!1,this.df=null,this.bz=null}bj(){return this.dg}fc(){var e=this instanceof Mu?this.Q:this;return this.df=Object.prototype.toString.call(e)===`[object Error]`?e:Error.captureStackTrace===void 0||Object.isSealed(this)?/* @__PURE__ */ Error():(Error.captureStackTrace(this),this),this}fk(){return this.bz===null&&(this.bz=this.dh?ya().fb(this.df):new(ms.r()).C(0)),this.bz}t(){var e=Wn(this),t=this.bj();return t===null?e:e+`: `+t}p(){return ur.prototype.p.call(this)}h(e){return ur.prototype.h.call(this,e)}get message(){var e=this.bj();return e===null?``:e}get name(){return Wn(this)}toString(){return this.t()}};function ys(){this.di=null,bs=this,this.di=new Io(wa().dd)}S=ys.prototype=new T,S.constructor=ys,S.fF=(function(){return this.di.c8}),new E().i(ys,`scala.Console$`,{cI:1,dx:1});var bs;function xs(){return bs||=new ys,bs}function Ss(){}S=Ss.prototype=new Xa,S.constructor=Ss;function Cs(){}Cs.prototype=S,S.gb=(function(e){if(e===null)return null;if(e.a.length===0){var t=Eu();return Gu(),t.dx}return new Ld(e)});function ws(e,t){if(t===e)e.dH(Yl().dV(t));else for(var n=t.l();n.s();)e.cb(n.o());return e}function Ts(){}S=Ts.prototype=new T,S.constructor=Ts;function Es(){}Es.prototype=S,S.t=(function(){return`<function0>`});function Ds(){}S=Ds.prototype=new T,S.constructor=Ds;function Os(){}Os.prototype=S,S.t=(function(){return`<function1>`});function ks(){}S=ks.prototype=new T,S.constructor=ks;function As(){}As.prototype=S,S.t=(function(){return`<function2>`});function js(){}S=js.prototype=new T,S.constructor=js;function Ms(){}Ms.prototype=S,S.t=(function(){return`<function3>`});function Ns(e){this.bE=!1,this.bE=e}S=Ns.prototype=new T,S.constructor=Ns,S.t=(function(){return``+this.bE}),new E().i(Ns,`scala.runtime.BooleanRef`,{dF:1,a:1});function Ps(e){this.b5=0,this.b5=e}S=Ps.prototype=new T,S.constructor=Ps,S.t=(function(){return``+this.b5}),new E().i(Ps,`scala.runtime.IntRef`,{dH:1,a:1});function Fs(){this.u=0,this.dF=0,this.eq=0,this.ep=0,Is=this,this.u=J(`Seq`),this.dF=J(`Map`),this.eq=J(`Set`),this.ep=this.g7(Ud(),this.dF)}S=Fs.prototype=new Ro,S.constructor=Fs,S.e7=(function(e){return Zu(e)?this.fp(e,this.u):e instanceof Od?this.fw(e,this.u):this.fE(e,this.u)}),new E().i(Fs,`scala.util.hashing.MurmurHash3$`,{e5:1,e4:1});var Is;function z(){return Is||=new Fs,Is}var Ls=class extends vs{};function Rs(){this.bP=null,this.ck=null,this.cl=null,zs=this,this.bP=Yl().dI(F().ae(new(N.r()).C([]))),this.ck=new q((e=>{try{console.error(this.fg(e)+`
`+this.fj(e,`
`))}catch(e){var t=e instanceof vs?e:new Mu(e);console.error(`Error in AirstreamError.consoleErrorCallback:`),console.error(t)}})),this.cl=new q((e=>{console.warn(`Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.`);var t=e;throw t instanceof Mu?t.Q:t})),this.fJ(this.ck)}S=Rs.prototype=new T,S.constructor=Rs,S.fg=(function(e){try{var t=e.bj()}catch{var t=`(Unable to get the message for this error - exception occurred in its getMessage)`}return Un(e).cg()+`: `+t}),S.fj=(function(e,t){try{return io(sc().gb(e.fk()),``,t,``)}catch{return`(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)`}}),S.fJ=(function(e){this.bP.cb(e)}),S.cj=(function(e){for(var t=this.bP.l();t.s();){var n=t.o();try{n.m(e)}catch(e){var r=e instanceof vs?e:new Mu(e),i=this.cl;if(n===null?i===null:n.h(i))throw r instanceof Mu?r.Q:r;console.warn(`Error processing an unhandled error callback:`),ko().fX(0,new $c((e=>(()=>{throw e instanceof Mu?e.Q:e}))(r)))}}}),new E().i(Rs,`com.raquo.airstream.core.AirstreamError$`,{b9:1,dv:1,dw:1});var zs;function Bs(){return zs||=new Rs,zs}function B(e,t,n){return new Pc(n.eE(t))}function Vs(e,t,n){this.cJ=null,this.cK=null,this.cI=null,this.cJ=e,this.cK=t,this.cI=n}S=Vs.prototype=new T,S.constructor=Vs,S.au=(function(e){this.cI.eB(e,this.cJ,this.cK)}),new E().i(Vs,`com.raquo.laminar.modifiers.KeySetter`,{bQ:1,S:1,bX:1});function Hs(e,t){if(this.bX=null,this.cO=null,this.cP=null,this.cO=t,Zo(this),e===null)throw U(new W,`Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load`);if(!O().fs(e,document))throw U(new W,`Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering`);this.cP=e,this.fA()}S=Hs.prototype=new T,S.constructor=Hs,S.bJ=(function(){return this.bX}),S.dM=(function(e){this.bX=e}),S.fA=(function(){return this.bX.dG(),Gi().cc(this,this.cO,void 0)}),S.bn=(function(){return this.cP}),new E().i(Hs,`com.raquo.laminar.nodes.RootNode`,{c1:1,a0:1,aa:1});function Us(e,t,n){this.bZ=null,this.bZ=e}S=Us.prototype=new $o,S.constructor=Us,new E().i(Us,`com.raquo.laminar.tags.CustomHtmlTag`,{c3:1,c4:1,ab:1});function Ws(){this.aj=null,this.aQ=null,this.cS=null,this.cT=!1,this.cU=null,this.cV=!1,this.cW=null,this.cX=!1,Uo(this,`placement`,new ts)}S=Ws.prototype=new Go,S.constructor=Ws,S.eH=(function(){return this.cT||=(this.cS=Ks().c(`bottom`),!0),this.cS}),S.f0=(function(){return this.cV||=(this.cU=Ks().c(`end`),!0),this.cU}),S.fZ=(function(){return this.cX||=(this.cW=Ks().c(`start`),!0),this.cW}),new E().i(Ws,`io.github.nguyenyou.webawesome.laminar.CommonKeys$ComponentPlacement$`,{c7:1,Z:1,R:1});var Gs;function Ks(){return Gs||=new Ws,Gs}function qs(){this.aj=null,this.aQ=null,this.cY=null,this.cZ=!1,Uo(this,`activation`,new ts)}S=qs.prototype=new Go,S.constructor=qs,S.fz=(function(){return this.cZ||=(this.cY=Ys().c(`manual`),!0),this.cY}),new E().i(qs,`io.github.nguyenyou.webawesome.laminar.CommonKeys$TabGroupActivation$`,{c8:1,Z:1,R:1});var Js;function Ys(){return Js||=new qs,Js}function Xs(){this.aS=null,this.aR=null,this.aT=!1,this.d2=null,this.d3=!1,this.d0=null,this.d1=!1,ns(this,`wa-tab`)}S=Xs.prototype=new is,S.constructor=Xs,S.k=(function(){return this.d3||=(this.d2=(K(),Uo(new Wo,`panel`,Di().aF)),!0),this.d2}),S.bg=(function(){return this.d1||=(this.d0=(K(),Uo(new Wo,`disabled`,Di().cD)),!0),this.d0}),S.c9=(function(){return Vn}),new E().i(Xs,`io.github.nguyenyou.webawesome.laminar.Tab$`,{c9:1,a2:1,a1:1});var Zs;function V(){return Zs||=new Xs,Zs}function Qs(){this.aS=null,this.aR=null,this.aT=!1,this.d6=null,this.d7=!1,this.d8=null,this.d9=!1,this.d4=null,this.d5=!1,ns(this,`wa-tab-group`)}S=Qs.prototype=new is,S.constructor=Qs,S.eu=(function(){return this.d7||=(this.d6=(K(),Uo(new Wo,`active`,Di().aF)),!0),this.d6}),S.ch=(function(){return this.d9||=(this.d8=Ks(),!0),this.d8}),S.et=(function(){return this.d5||=(this.d4=Ys(),!0),this.d4}),S.c9=(function(){return zn}),new E().i(Qs,`io.github.nguyenyou.webawesome.laminar.TabGroup$`,{ca:1,a2:1,a1:1});var $s;function ec(){return $s||=new Qs,$s}function tc(){this.aS=null,this.aR=null,this.aT=!1,this.da=null,this.db=!1,ns(this,`wa-tab-panel`)}S=tc.prototype=new is,S.constructor=tc,S.j=(function(){return this.db||=(this.da=(K(),Uo(new Wo,`name`,Di().aF)),!0),this.da}),S.c9=(function(){return Bn}),new E().i(tc,`io.github.nguyenyou.webawesome.laminar.TabPanel$`,{cb:1,a2:1,a1:1});var nc;function H(){return nc||=new tc,nc}function rc(e){if(e.af.Z)return e.af.Q().cg()+`[]`;for(var t=e.af.N,n=t.length-1|0;n>=0&&t.charCodeAt(n)===36;)n=n-1|0;if(n>=0&&(t.charCodeAt(n)-48|0)>>>0<=9){for(n=n-1|0;n>=0&&(t.charCodeAt(n)-48|0)>>>0<=9;)n=n-1|0;for(;n>=0&&t.charCodeAt(n)===36;)n=n-1|0}for(;;){if(n>=0)var r=n,i=t.charCodeAt(r),a=i!==36&&i!==46;else var a=!1;if(a)n=n-1|0;else break}var o=1+n|0;return t.substring(o)}function ic(e){this.c1=null,this.af=e}S=ic.prototype=new T,S.constructor=ic,S.t=(function(){return(this.af.Y?`interface `:this.af.X?``:`class `)+this.af.N}),S.cg=(function(){return this.c1===null&&(this.c1=rc(this)),this.c1}),new E().i(ic,`java.lang.Class`,{cj:1,a:1,K:1});function U(e,t){return R(e,t,null,!0,!0),e}var W=class extends vs{};new E().i(W,`java.lang.Exception`,{J:1,s:1,a:1});function ac(){this.el=null,oc=this,Kl(),this.el=yc()}S=ac.prototype=new Cs,S.constructor=ac,new E().i(ac,`scala.Predef$`,{cS:1,cL:1,cM:1});var oc;function sc(){return oc||=new ac,oc}function cc(e,t){return e.bC=t,e}function lc(){this.bC=null}S=lc.prototype=new T,S.constructor=lc;function uc(){}uc.prototype=S,S.bK=(function(e){return this.bC.cf(e,Hu())}),S.bG=(function(e){return this.bC.cf(e,Hu())});function dc(e,t){return new Il(e).eK(t)}function fc(e,t,n){var r=t>0?t:0,i=n<0?-1:n<=r?0:n-r|0;return i===0?gc().I:new zl(e,r,i)}function pc(e,t){for(var n=t.l();e.s();)if(!n.s()||!P().F(e.o(),n.o()))return!1;return!n.s()}function mc(){this.I=null,hc=this,this.I=new Ml}S=mc.prototype=new T,S.constructor=mc,new E().i(mc,`scala.collection.Iterator$`,{d2:1,a:1,V:1});var hc;function gc(){return hc||=new mc,hc}function _c(){}S=_c.prototype=new T,S.constructor=_c,new E().i(_c,`scala.collection.immutable.Map$`,{di:1,a:1,d7:1});var vc;function yc(){return vc||=new _c,vc}function bc(e){this.dy=null,this.dy=e}S=bc.prototype=new Es,S.constructor=bc,S.ax=(function(){return(0,this.dy)()}),new E().i(bc,`scala.runtime.AbstractFunction0.$$Lambda$07eded5776954a9c145e92c329afd52873ad179c`,{dB:1,b4:1,an:1});function G(e){this.dz=null,this.dz=e}S=G.prototype=new Os,S.constructor=G,S.m=(function(e){return(0,this.dz)(e)}),new E().i(G,`scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919`,{dC:1,b5:1,e:1});var xc=new E().i(0,`scala.runtime.Nothing$`,{dI:1,s:1,a:1});function Sc(){}S=Sc.prototype=new Es,S.constructor=Sc;function Cc(){}Cc.prototype=S;function wc(){}S=wc.prototype=new Os,S.constructor=wc;function Tc(){}Tc.prototype=S;function Ec(){}S=Ec.prototype=new As,S.constructor=Ec;function Dc(){}Dc.prototype=S;function Oc(){}S=Oc.prototype=new Ms,S.constructor=Oc;function kc(){}kc.prototype=S;function Ac(e,t,n,r){if(this.cm=null,r===null)throw bl(new xl);this.cm=void 0}S=Ac.prototype=new T,S.constructor=Ac,S.t=(function(){return Nr(this)}),new E().i(Ac,`com.raquo.airstream.core.Observer$$anon$8`,{bd:1,be:1,ba:1,bb:1});function jc(e){if(this.cx=null,this.cy=!1,this.ec=null,e===null)throw bl(new xl);Ai(this)}S=jc.prototype=new T,S.constructor=jc,S.g2=(function(){return this.cy||=(this.cx=new es(`svg`,!1),!0),this.cx}),new E().i(jc,`com.raquo.laminar.api.Laminar$svg$`,{bu:1,bK:1,bD:1,bF:1});function Mc(){this.e=null,Nc=this,this.e=new nd}S=Mc.prototype=new T,S.constructor=Mc,new E().i(Mc,`com.raquo.laminar.api.package$`,{bx:1,a7:1,a8:1,a6:1});var Nc;function K(){return Nc||=new Mc,Nc}function Pc(e){this.cQ=null,this.bY=null,this.cQ=Y(),this.bY=O().eN(e)}S=Pc.prototype=new T,S.constructor=Pc,S.e9=(function(e){this.cQ=e}),S.eb=(function(e){}),S.au=(function(e){Gi().cc(e,this,void 0)}),S.g5=(function(){return this.bY.data}),S.bn=(function(){return this.bY}),new E().i(Pc,`com.raquo.laminar.nodes.TextNode`,{c2:1,a0:1,S:1,a9:1});function Fc(){}S=Fc.prototype=new T,S.constructor=Fc;function Ic(){}Ic.prototype=S;function Lc(e,t){return e===t}function Rc(e){return e?1231:1237}var zc=new E().i(0,`java.lang.Boolean`,{cg:1,a:1,M:1,K:1},(e=>typeof e==`boolean`));function Bc(e){return e}function Vc(e,t){return t instanceof Hn&&e===t.c}var Hc=new E().i(0,`java.lang.Character`,{ah:1,a:1,M:1,K:1},(e=>e instanceof Hn)),Uc=class extends W{};function Wc(){this.r=null,this.r=``}S=Wc.prototype=new T,S.constructor=Wc,S.ez=(function(e){var t=_s().fC(e,0,e.a.length);return this.r=``+this.r+t,this}),S.t=(function(){return this.r}),S.i=(function(){return this.r.length}),S.dK=(function(e){return this.r.charCodeAt(e)}),new E().i(Wc,`java.lang.StringBuilder`,{cy:1,a3:1,af:1,a:1});function Gc(){}S=Gc.prototype=new T,S.constructor=Gc,S.t=(function(){return`<function1>`}),S.eC=(function(e){throw new El(e)}),S.m=(function(e){this.eC(e)}),new E().i(Gc,`scala.PartialFunction$$anon$1`,{cR:1,e:1,g:1,a:1});function Kc(){}S=Kc.prototype=new T,S.constructor=Kc;function qc(){}qc.prototype=S,S.y=(function(){return-1}),S.aM=(function(e,t,n,r){return ao(this,e,t,n,r)}),S.l=(function(){return this}),S.bI=(function(e){return this.bp(e,-1)}),S.bp=(function(e,t){return fc(this,e,t)}),S.t=(function(){return`<iterator>`});function Jc(e,t){return e.bD=t,e}function Yc(){this.bD=null}S=Yc.prototype=new T,S.constructor=Yc;function Xc(){}Xc.prototype=S,S.dI=(function(e){return this.bD.bG(e)}),S.dV=(function(e){return this.bD.bK(e)}),S.bG=(function(e){return this.dI(e)}),S.bK=(function(e){return this.dV(e)});function Zc(e){return e.az(0)===0}function Qc(e,t){var n=e.y();if(n!==-1){var r=t.y();if(r!==-1){if(n!==r)return!1;if(n===0)return!0}}return pc(e.l(),t)}function $c(e){this.dC=null,this.dC=e}S=$c.prototype=new Cc,S.constructor=$c,S.ax=(function(){return(0,this.dC)()}),new E().i($c,`scala.scalajs.runtime.AnonFunction0.$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d`,{dS:1,dR:1,b4:1,an:1});function q(e){this.dD=null,this.dD=e}S=q.prototype=new Tc,S.constructor=q,S.m=(function(e){return(0,this.dD)(e)}),new E().i(q,`scala.scalajs.runtime.AnonFunction1.$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1`,{dU:1,dT:1,b5:1,e:1});function el(e){this.eo=null,this.eo=e}S=el.prototype=new Dc,S.constructor=el,new E().i(el,`scala.scalajs.runtime.AnonFunction2.$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7`,{dW:1,dV:1,dD:1,cJ:1});function tl(e){this.dE=null,this.dE=e}S=tl.prototype=new kc,S.constructor=tl,S.eB=(function(e,t,n){return(0,this.dE)(e,t,n)}),new E().i(tl,`scala.scalajs.runtime.AnonFunction3.$$Lambda$73f37e31ba038fe839c174212837da323f140c96`,{dY:1,dX:1,dE:1,cK:1});function nl(e){e.bW=new hi(new $c((()=>{e.aG.dG()})),new $c((()=>{e.aG.eO()})))}function rl(e,t){al(e,e.by,t)&&ol(e,t)}function il(e,t){var n=e.by;e.by=t,al(e,n,t)||ol(e,t)}function al(e,t,n){var r=!t.g()&&!t.x().bJ().C.g(),i=!n.g()&&!n.x().bJ().C.g();return r&&!i}function ol(e,t){sl(e,t.g()?Y():new hu(t.x().bJ()))}function sl(e,t){if(t.g())e.bW.eJ();else{var n=t.x();e.bW.fU(n)}}function cl(){}S=cl.prototype=new Ic,S.constructor=cl;function ll(){}ll.prototype=S;var ul=class extends Uc{constructor(e){super(),R(this,e,null,!0,!0)}};new E().i(ul,`java.lang.ArithmeticException`,{cf:1,N:1,J:1,s:1,a:1});var dl=new E().i(0,`java.lang.Byte`,{ch:1,Q:1,a:1,M:1,K:1},(e=>nr(e)));function fl(e,t){return R(e,t,null,!0,!0),e}function pl(e){return R(e,null,null,!0,!0),e}var ml=class extends Uc{};new E().i(ml,`java.lang.IllegalArgumentException`,{aj:1,N:1,J:1,s:1,a:1});function hl(e,t){return R(e,t,null,!0,!0),e}function gl(e,t){return R(e,`Index out of range: `+t,null,!0,!0),e}var _l=class extends Uc{};new E().i(_l,`java.lang.IndexOutOfBoundsException`,{cl:1,N:1,J:1,s:1,a:1});function vl(){}S=vl.prototype=new Ic,S.constructor=vl,new E().i(vl,`java.lang.JSConsoleBasedPrintStream$DummyOutputStream`,{cp:1,ae:1,ac:1,ag:1,ad:1});function yl(e,t){return R(e,t,null,!0,!0),e}function bl(e){return R(e,null,null,!0,!0),e}var xl=class extends Uc{};new E().i(xl,`java.lang.NullPointerException`,{cq:1,N:1,J:1,s:1,a:1});var Sl=new E().i(0,`java.lang.Short`,{ct:1,Q:1,a:1,M:1,K:1},(e=>rr(e))),Cl=class extends Uc{constructor(e){super(),R(this,e,null,!0,!0)}};new E().i(Cl,`java.lang.UnsupportedOperationException`,{cB:1,N:1,J:1,s:1,a:1});var wl=class extends Uc{constructor(e){super(),R(this,e,null,!0,!0)}};new E().i(wl,`java.util.NoSuchElementException`,{cF:1,N:1,J:1,s:1,a:1});function Tl(e){if(!e.dk){if(e.bA===null)var t=`null`;else{var n=F().ex(e.bA),r=n===null?`of a JS class`:`of class `+n.af.N;try{var t=e.bA+` (`+r+`)`}catch{var t=`an instance `+r}}e.dj=t,e.dk=!0}return e.dj}var El=class extends Uc{constructor(e){super(),this.bA=null,this.dj=null,this.dk=!1,this.bA=e,R(this,null,null,!0,!0)}bj(){return Tl(this)}};new E().i(El,`scala.MatchError`,{cN:1,N:1,J:1,s:1,a:1});function Dl(){}S=Dl.prototype=new T,S.constructor=Dl;function Ol(){}Ol.prototype=S,S.bm=(function(){return new kl(this)}),S.g=(function(){return this===Y()}),S.y=(function(){return!this.g()|0}),S.l=(function(){return this.g()?gc().I:new Nl(this.x())});function kl(e){if(this.aW=0,this.dp=0,this.dn=null,e===null)throw bl(new xl);this.dn=e,this.aW=0,this.dp=e.ab()}S=kl.prototype=new qc,S.constructor=kl,S.s=(function(){return this.aW<this.dp}),S.o=(function(){var e=this.dn.ac(this.aW);return this.aW=1+this.aW|0,e}),new E().i(kl,`scala.Product$$anon$1`,{cT:1,O:1,b:1,c:1,P:1});function Al(e){this.bC=null,cc(this,e)}S=Al.prototype=new uc,S.constructor=Al,new E().i(Al,`scala.collection.ClassTagSeqFactory$AnySeqDelegate`,{cY:1,cX:1,a:1,V:1,X:1});function jl(e){return io(e,e.ay()+`(`,`, `,`)`)}function Ml(){}S=Ml.prototype=new qc,S.constructor=Ml,S.s=(function(){return!1}),S.fD=(function(){throw new wl(`next on empty iterator`)}),S.y=(function(){return 0}),S.o=(function(){this.fD()}),S.bp=(function(e,t){return this}),new E().i(Ml,`scala.collection.Iterator$$anon$19`,{d3:1,O:1,b:1,c:1,P:1});function Nl(e){this.dr=null,this.aZ=!1,this.dr=e,this.aZ=!1}S=Nl.prototype=new qc,S.constructor=Nl,S.s=(function(){return!this.aZ}),S.o=(function(){return this.aZ?gc().I.o():(this.aZ=!0,this.dr)}),S.bp=(function(e,t){return this.aZ||e>0||t===0?gc().I:this}),new E().i(Nl,`scala.collection.Iterator$$anon$20`,{d4:1,O:1,b:1,c:1,P:1});function Pl(e){for(;;)if(e.z instanceof Il){var t=e.z;if(e.z=t.z,e.a2=t.a2,t.K!==null){e.J===null&&(e.J=t.J);var n=t.J;n===null&&So().bN(),n.b0=e.K,e.K=t.K}}else return}function Fl(e){for(;;)if(e.K===null)return e.z=null,e.J=null,!1;else{if(e.z=e.K.fo(),e.J===e.K){var t=e.J;t===null&&So().bN(),e.J=t.b0}if(e.K=e.K.b0,Pl(e),e.a2)return!0;if(!(e.z!==null&&e.z.s()))continue;return e.a2=!0,!0}}function Il(e){this.z=null,this.K=null,this.J=null,this.a2=!1,this.z=e,this.K=null,this.J=null,this.a2=!1}S=Il.prototype=new qc,S.constructor=Il,S.s=(function(){return this.a2?!0:this.z===null?!1:this.z.s()?(this.a2=!0,!0):Fl(this)}),S.o=(function(){if(this.s()){this.a2=!1;var e=this.z;return e===null&&So().bN(),e.o()}return gc().I.o()}),S.eK=(function(e){var t=new oo(e,null);if(this.K===null)this.K=t,this.J=t;else{var n=this.J;n===null&&So().bN(),n.b0=t,this.J=t}return this.z===null&&(this.z=gc().I),this}),new E().i(Il,`scala.collection.Iterator$ConcatIterator`,{at:1,O:1,b:1,c:1,P:1});function Ll(e){for(;e.X>0;)e.a3.s()?(e.a3.o(),e.X=e.X-1|0):e.X=0}function Rl(e,t){if(e.D<0)return-1;var n=e.D-t|0;return n<0?0:n}function zl(e,t,n){this.a3=null,this.D=0,this.X=0,this.a3=e,this.D=n,this.X=t}S=zl.prototype=new qc,S.constructor=zl,S.y=(function(){var e=this.a3.y();if(e<0)return-1;var t=e-this.X|0,n=t<0?0:t;if(this.D<0)return n;var r=this.D;return r<n?r:n}),S.s=(function(){return Ll(this),this.D!==0&&this.a3.s()}),S.o=(function(){return Ll(this),this.D>0?(this.D=this.D-1|0,this.a3.o()):this.D<0?this.a3.o():gc().I.o()}),S.bp=(function(e,t){var n=e>0?e:0;if(t<0)var r=Rl(this,n);else if(t<=n)var r=0;else if(this.D<0)var r=t-n|0;else var i=Rl(this,n),a=t-n|0,r=i<a?i:a;var o=this.X+n|0;return r===0?gc().I:o<0?(this.X=2147483647,this.D=0,dc(this,new bc((()=>new zl(this.a3,o-2147483647|0,r))))):(this.X=o,this.D=r,this)}),new E().i(zl,`scala.collection.Iterator$SliceIterator`,{d6:1,O:1,b:1,c:1,P:1});function Bl(e,t){if(t<0)throw hl(new _l,``+t);var n=e.eY(t);if(n.g())throw hl(new _l,``+t);return n.S()}function Vl(e,t){return Qu(t)?Hl(e,e,t):Qc(e,t)}function Hl(e,t,n){for(var r=n,i=t;;)if(i===r)return!0;else{if(!i.g()&&!r.g()&&P().F(i.S(),r.S())){var a=i.G(),o=r.G();i=a,r=o;continue}return i.g()&&r.g()}}function Ul(e){if(this.b2=null,e===null)throw bl(new xl);this.b2=e}S=Ul.prototype=new qc,S.constructor=Ul,S.s=(function(){return!this.b2.g()}),S.o=(function(){var e=this.b2.S();return this.b2=this.b2.G(),e}),new E().i(Ul,`scala.collection.StrictOptimizedLinearSeqOps$$anon$1`,{db:1,O:1,b:1,c:1,P:1});function Wl(){Gl=this,Ud(),Ud()}S=Wl.prototype=new T,S.constructor=Wl,S.bG=(function(e){return Ud().e3(e)}),S.bK=(function(e){return Ud().e3(e)}),new E().i(Wl,`scala.collection.immutable.List$`,{dh:1,a:1,V:1,X:1,ax:1});var Gl;function Kl(){return Gl||=new Wl,Gl}function ql(){this.bD=null,Jc(this,$l())}S=ql.prototype=new Xc,S.constructor=ql,new E().i(ql,`scala.collection.mutable.Buffer$`,{dp:1,d8:1,a:1,V:1,X:1});var Jl;function Yl(){return Jl||=new ql,Jl}function Xl(e){this.dB=null,this.b6=0,this.dA=0,this.dB=e,this.b6=0,this.dA=e.ab()}S=Xl.prototype=new qc,S.constructor=Xl,S.s=(function(){return this.b6<this.dA}),S.o=(function(){var e=this.dB.ac(this.b6);return this.b6=1+this.b6|0,e}),new E().i(Xl,`scala.runtime.ScalaRunTime$$anon$1`,{dM:1,O:1,b:1,c:1,P:1});function Zl(){}S=Zl.prototype=new T,S.constructor=Zl,S.bG=(function(e){return this.dW(e)}),S.dW=(function(e){return ws(Jd(new Yd),e).e5()}),S.bK=(function(e){return this.dW(e)}),new E().i(Zl,`scala.scalajs.js.WrappedArray$`,{dP:1,ax:1,a:1,V:1,X:1});var Ql;function $l(){return Ql||=new Zl,Ql}var eu=class e extends Ls{constructor(e,t){super(),this.aB=null,this.aA=0,this.aB=e,this.aA=t,R(this,`Transaction depth exceeded maxDepth = `+t+`: Execution of `+e+" aborted. See `Transaction.maxDepth`.",null,!0,!0)}bm(){return new kl(this)}p(){var e=-889275714;return e=I().q(e,J(`TransactionDepthExceeded`)),e=I().q(e,I().w(this.aB)),e=I().q(e,this.aA),I().A(e,2)}h(t){if(this===t)return!0;if(t instanceof e){if(this.aA===t.aA){var n=this.aB,r=t.aB;return n===null?r===null:n===r}return!1}return!1}ab(){return 2}ad(){return`TransactionDepthExceeded`}ac(e){if(e===0)return this.aB;if(e===1)return this.aA;throw hl(new _l,``+e)}t(){return`TransactionDepthExceeded: `+this.aB+`; maxDepth: `+this.aA}};new E().i(eu,`com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded`,{a5:1,b8:1,s:1,a:1,d:1,T:1});function tu(e,t){this.by=null,this.aG=null,this.bW=null,this.cN=null,this.V=null,this.cN=e,this.V=t,this.by=Y(),Zo(this),nl(this)}S=tu.prototype=new T,S.constructor=tu,S.au=(function(e){Gi().cc(e,this,void 0)}),S.bJ=(function(){return this.aG}),S.dM=(function(e){this.aG=e}),S.eb=(function(e){rl(this,e)}),S.e9=(function(e){il(this,e)}),S.t=(function(){return`ReactiveHtmlElement(`+(this.V===null?`tag=`+this.cN.bZ:this.V.outerHTML)+`)`}),S.bn=(function(){return this.V}),new E().i(tu,`com.raquo.laminar.nodes.ReactiveHtmlElement`,{c0:1,a0:1,S:1,a9:1,aa:1,bZ:1});function nu(e,t){return Object.is(e,t)}function ru(e){var t=e|0;if(t===e&&1/e!=-1/0)return t;if(e!==e)return 2146959360;var n=Zn;return n.setFloat64(0,e,!0),(n.getInt32(0,!0)|0)^(n.getInt32(4,!0)|0)}var iu=new E().i(0,`java.lang.Double`,{ai:1,Q:1,a:1,M:1,K:1,U:1},(e=>typeof e==`number`)),au=new E().i(0,`java.lang.Float`,{ck:1,Q:1,a:1,M:1,K:1,U:1},(e=>ar(e))),ou=new E().i(0,`java.lang.Integer`,{cm:1,Q:1,a:1,M:1,K:1,U:1},(e=>ir(e)));function su(e,t,n){if(n instanceof C){var r=n,i=r.l,a=r.h;return(e^i|t^a)===0}return!1}function cu(e,t){return e^t}var lu=new E().i(0,`java.lang.Long`,{ak:1,Q:1,a:1,M:1,K:1,U:1},(e=>e instanceof C)),uu=class extends ml{constructor(e){super(),R(this,e,null,!0,!0)}};new E().i(uu,`java.lang.NumberFormatException`,{cr:1,aj:1,N:1,J:1,s:1,a:1});function J(e){for(var t=e.length,n=0,r=0;r!==t;)n=((n<<5)-n|0)+e.charCodeAt(r)|0,r=1+r|0;return n}function du(e,t){return e===t}var fu=new E().i(0,`java.lang.String`,{cw:1,a:1,M:1,a3:1,K:1,U:1},(e=>typeof e==`string`));function pu(){}S=pu.prototype=new Ol,S.constructor=pu,S.p=(function(){return 2433880}),S.t=(function(){return`None`}),S.ab=(function(){return 0}),S.ad=(function(){return`None`}),S.ac=(function(e){throw gl(new _l,e)}),S.ff=(function(){throw new wl(`None.get`)}),S.x=(function(){this.ff()}),new E().i(pu,`scala.None$`,{cO:1,ao:1,b:1,d:1,T:1,a:1});var mu;function Y(){return mu||=new pu,mu}function hu(e){this.aX=null,this.aX=e}S=hu.prototype=new Ol,S.constructor=hu,S.p=(function(){return z().e4(this,1323286827,!0)}),S.h=(function(e){return this===e||e instanceof hu&&P().F(this.aX,e.aX)}),S.t=(function(){return F().es(this)}),S.ab=(function(){return 1}),S.ad=(function(){return`Some`}),S.ac=(function(e){if(e===0)return this.aX;throw gl(new _l,e)}),S.x=(function(){return this.aX}),new E().i(hu,`scala.Some`,{ap:1,ao:1,b:1,d:1,T:1,a:1});function gu(){}S=gu.prototype=new T,S.constructor=gu;function _u(){}_u.prototype=S,S.y=(function(){return-1}),S.aO=(function(e){ro(this,e)}),S.aM=(function(e,t,n,r){return ao(this,e,t,n,r)}),S.ay=(function(){return this.aP()});function X(e){this.bB=null,this.W=0,this.aY=0,this.bB=e,this.W=0,this.aY=za().bi(this.bB)}S=X.prototype=new qc,S.constructor=X,S.y=(function(){return this.aY-this.W|0}),S.s=(function(){return this.W<this.aY}),S.o=(function(){this.W>=za().bi(this.bB)&&gc().I.o();var e=F().aN(this.bB,this.W);return this.W=1+this.W|0,e}),S.bI=(function(e){if(e>0){var t=this.W+e|0;if(t<0)var n=this.aY;else var r=this.aY,n=r<t?r:t;this.W=n}return this}),new E().i(X,`scala.collection.ArrayOps$ArrayIterator`,{cW:1,O:1,b:1,c:1,P:1,a:1});function vu(e,t){return t<0?0:t>e.P?e.P:t}function yu(e){this.dq=null,this.a1=0,this.P=0,this.dq=e,this.a1=0,this.P=e.i()}S=yu.prototype=new qc,S.constructor=yu,S.y=(function(){return this.P}),S.s=(function(){return this.P>0}),S.o=(function(){if(this.P>0){var e=this.dq.n(this.a1);return this.a1=1+this.a1|0,this.P=this.P-1|0,e}return gc().I.o()}),S.bI=(function(e){if(e>0){this.a1=this.a1+e|0;var t=this.P-e|0;this.P=t<0?0:t}return this}),S.bp=(function(e,t){var n=vu(this,e),r=vu(this,t)-n|0;return this.P=r<0?0:r,this.a1=this.a1+n|0,this}),new E().i(yu,`scala.collection.IndexedSeqView$IndexedSeqViewIterator`,{d1:1,O:1,b:1,c:1,P:1,a:1});function bu(e){return e.dv||=(e.du=new Cd(new(xc.r()).C(0)),!0),e.du}function xu(){this.em=null,this.du=null,this.dv=!1,Su=this,this.em=new Al(this)}S=xu.prototype=new T,S.constructor=xu,S.fd=(function(e,t){return e instanceof pd?e:this.g9(Ja().dU(e,t))}),S.g9=(function(e){if(e===null)return null;if(e instanceof dr)return new Cd(e);if(e instanceof _r)return new xd(e);if(e instanceof br)return new yd(e);if(e instanceof vr)return new Sd(e);if(e instanceof yr)return new bd(e);if(e instanceof mr)return new vd(e);if(e instanceof hr)return new _d(e);if(e instanceof gr)return new wd(e);if(e instanceof pr)return new gd(e);if(Pa(e,1))return new Td(e);throw new El(e)}),S.cf=(function(e,t){return this.fd(e,t)}),new E().i(xu,`scala.collection.immutable.ArraySeq$`,{df:1,a:1,as:1,aq:1,ar:1,av:1});var Su;function Cu(){return Su||=new xu,Su}function wu(){this.en=null,this.dx=null,Tu=this,this.en=new Al(this),this.dx=new Ld(new dr(0))}S=wu.prototype=new T,S.constructor=wu,S.fe=(function(e,t){return this.fy(Ja().dU(e,t))}),S.fy=(function(e){if(e===null)return null;if(e instanceof dr)return new Ld(e);if(e instanceof _r)return new Fd(e);if(e instanceof br)return new Nd(e);if(e instanceof vr)return new Id(e);if(e instanceof yr)return new Pd(e);if(e instanceof mr)return new Md(e);if(e instanceof hr)return new jd(e);if(e instanceof gr)return new Rd(e);if(e instanceof pr)return new Ad(e);if(Pa(e,1))return new zd(e);throw new El(e)}),S.cf=(function(e,t){return this.fe(e,t)}),new E().i(wu,`scala.collection.mutable.ArraySeq$`,{dm:1,a:1,as:1,aq:1,ar:1,av:1});var Tu;function Eu(){return Tu||=new wu,Tu}function Du(){}S=Du.prototype=new ll,S.constructor=Du;function Ou(){}Ou.prototype=S;function ku(e){return e.ay()+`(<not computed>)`}function Au(){}S=Au.prototype=new T,S.constructor=Au;function ju(){}ju.prototype=S;var Mu=class e extends Uc{constructor(e){super(),this.Q=null,this.Q=e,R(this,null,null,!0,!0)}bj(){return qn(this.Q)}ad(){return`JavaScriptException`}ab(){return 1}ac(e){return e===0?this.Q:I().fq(e)}bm(){return new Xl(this)}p(){return z().e4(this,1744042595,!0)}h(t){return this===t||t instanceof e&&P().F(this.Q,t.Q)}};new E().i(Mu,`scala.scalajs.js.JavaScriptException`,{b6:1,N:1,J:1,s:1,a:1,T:1,d:1});function Nu(e,t){typeof console<`u`&&(e.dc&&console.error?console.error(t):console.log(t))}function Pu(e){this.dc=!1,this.aU=null,this.dc=e,new vl,this.aU=``}S=Pu.prototype=new Ou,S.constructor=Pu,S.fu=(function(e){for(var t=e;t!==``;){var n=t.indexOf(`
`)|0;if(n<0)this.aU=``+this.aU+t,t=``;else{var r=this.aU,i=t;Nu(this,``+r+i.substring(0,n)),this.aU=``;var a=t,o=1+n|0;t=a.substring(o)}}}),new E().i(Pu,`java.lang.JSConsoleBasedPrintStream`,{co:1,ce:1,cd:1,ae:1,ac:1,ag:1,ad:1,af:1});function Fu(e,t,n){for(var r=n,i=t;;)if(i<=0||r.g())return r;else{var a=i-1|0,o=r.G();i=a,r=o}}function Iu(){this.b4=null}S=Iu.prototype=new ju,S.constructor=Iu;function Lu(){}Lu.prototype=S,S.t=(function(){return this.b4}),S.h=(function(e){return this===e}),S.p=(function(){return tr(this)});function Ru(){}S=Ru.prototype=new _u,S.constructor=Ru;function zu(){}zu.prototype=S,S.t=(function(){return ku(this)});function Bu(){this.b4=null,this.b4=`Any`,Ud()}S=Bu.prototype=new Lu,S.constructor=Bu,S.e6=(function(){return D.l()}),S.e0=(function(e){return new dr(e)}),new E().i(Bu,`scala.reflect.ManifestFactory$AnyManifest$`,{dz:1,b2:1,b1:1,a:1,b3:1,aY:1,d:1,aZ:1,b0:1});var Vu;function Hu(){return Vu||=new Bu,Vu}function Uu(){this.b4=null,this.b4=`Object`,Ud()}S=Uu.prototype=new Lu,S.constructor=Uu,S.e6=(function(){return D.l()}),S.e0=(function(e){return new dr(e)}),new E().i(Uu,`scala.reflect.ManifestFactory$ObjectManifest$`,{dA:1,b2:1,b1:1,a:1,b3:1,aY:1,d:1,aZ:1,b0:1});var Wu;function Gu(){return Wu||=new Uu,Wu}function Z(e,t){return e===t?!0:Ku(t)&&t.ce(e)?e.bO(t):!1}function Ku(e){return!!(e&&e.$classData&&e.$classData.n.f)}function qu(){}S=qu.prototype=new _u,S.constructor=qu;function Ju(){}Ju.prototype=S,S.g=(function(){return Zc(this)}),S.bO=(function(e){return Qc(this,e)}),S.ce=(function(e){return!0}),S.h=(function(e){return Z(this,e)}),S.p=(function(){return z().e7(this)}),S.t=(function(){return jl(this)});function Yu(){}S=Yu.prototype=new zu,S.constructor=Yu;function Xu(){}Xu.prototype=S;function Zu(e){return!!(e&&e.$classData&&e.$classData.n.m)}function Qu(e){return!!(e&&e.$classData&&e.$classData.n.W)}function $u(e,t){return e.b1=t,e}function ed(){this.b1=null}S=ed.prototype=new Xu,S.constructor=ed;function td(){}td.prototype=S,S.n=(function(e){return this.b1.n(e)}),S.i=(function(){return this.b1.i()}),S.g=(function(){return this.b1.g()});function nd(){this.cz=null,this.cA=!1,this.ee=null,this.ed=null,this.cB=null,this.cC=!1,Oi(this),Ci(this),xi(this),Si(this)}S=nd.prototype=new T,S.constructor=nd,S.eT=(function(){return this.cA||=(this.cz=new Ko(`disabled`,Di().cE),!0),this.cz}),S.g1=(function(){return this.cC||=(this.cB=new jc(this),!0),this.cB}),new E().i(nd,`com.raquo.laminar.api.package$$anon$1`,{by:1,bJ:1,bC:1,bH:1,bG:1,bI:1,bE:1,bw:1,bs:1,bv:1,a7:1,a8:1,a6:1,bt:1});function rd(e){this.b1=null,$u(this,e)}S=rd.prototype=new td,S.constructor=rd,S.az=(function(e){var t=this.i();return t===e?0:t<e?-1:1}),S.y=(function(){return this.i()}),S.l=(function(){return new yu(this)}),S.aP=(function(){return`IndexedSeqView`}),new E().i(rd,`scala.collection.IndexedSeqView$Id`,{d0:1,da:1,cU:1,cV:1,l:1,b:1,c:1,j:1,i:1,h:1,a:1,dd:1,k:1,d9:1,o:1,cZ:1});function id(){}S=id.prototype=new Ju,S.constructor=id;function ad(){}ad.prototype=S;function od(e,t){return!cd(t)||e.i()===t.i()}function sd(e,t){if(cd(t)){if(e===t)return!0;var n=e.i(),r=n===t.i();if(r){var i=0,a=e.cd(),o=t.cd(),s=a<o?a:o,c=n>>31,l=s>>31,u=s<<1,d=s>>>31|0|l<<1;if(c===d?n>>>0>u>>>0:c>d)var f=s;else var f=n;for(;i<f&&r;)r=P().F(e.n(i),t.n(i)),i=1+i|0;if(i<n&&r)for(var p=e.l().bI(i),m=t.l().bI(i);r&&p.s();)r=P().F(p.o(),m.o())}return r}return Qc(e,t)}function cd(e){return!!(e&&e.$classData&&e.$classData.n.t)}function ld(){}S=ld.prototype=new Ju,S.constructor=ld;function ud(){}ud.prototype=S;function Q(e){this.bF=null,this.bF=e}S=Q.prototype=new T,S.constructor=Q,S.ce=(function(e){return od(this,e)}),S.bO=(function(e){return sd(this,e)}),S.cd=(function(){return po().dw}),S.l=(function(){return new yu(new rd(this))}),S.az=(function(e){var t=this.i();return t===e?0:t<e?-1:1}),S.y=(function(){return this.i()}),S.h=(function(e){return Z(this,e)}),S.p=(function(){return z().e7(this)}),S.t=(function(){return jl(this)}),S.g=(function(){return Zc(this)}),S.aO=(function(e){ro(this,e)}),S.aM=(function(e,t,n,r){return ao(this,e,t,n,r)}),S.i=(function(){return this.bF.length|0}),S.n=(function(e){return this.bF[e]}),S.ay=(function(){return`WrappedVarArgs`}),S.m=(function(e){return this.n(e|0)}),new E().i(Q,`scala.scalajs.runtime.WrappedVarArgs`,{b7:1,t:1,b:1,c:1,j:1,i:1,h:1,u:1,e:1,g:1,k:1,d:1,f:1,w:1,v:1,o:1,m:1,H:1,x:1,p:1,q:1,a:1});function dd(){}S=dd.prototype=new ud,S.constructor=dd;function fd(){}fd.prototype=S,S.dH=(function(e){return ws(this,e)});function pd(){}S=pd.prototype=new ad,S.constructor=pd;function md(){}md.prototype=S,S.az=(function(e){var t=this.i();return t===e?0:t<e?-1:1}),S.y=(function(){return this.i()}),S.aP=(function(){return`IndexedSeq`}),S.ce=(function(e){return od(this,e)}),S.bO=(function(e){return sd(this,e)}),S.ay=(function(){return`ArraySeq`}),S.cd=(function(){return 2147483647});function $(){}S=$.prototype=new ud,S.constructor=$;function hd(){}hd.prototype=S,S.az=(function(e){var t=this.i();return t===e?0:t<e?-1:1}),S.y=(function(){return this.i()}),S.aP=(function(){return`IndexedSeq`}),S.ay=(function(){return`ArraySeq`}),S.h=(function(e){return e instanceof $&&za().bi(this.R())!==za().bi(e.R())?!1:Z(this,e)});function gd(e){this.ak=null,this.ak=e}S=gd.prototype=new md,S.constructor=gd,S.i=(function(){return this.ak.a.length}),S.bf=(function(e){return this.ak.a[e]}),S.p=(function(){var e=z();return e.v(this.ak,e.u)}),S.h=(function(e){return e instanceof gd?M().dS(this.ak,e.ak):Z(this,e)}),S.l=(function(){return new X(this.ak)}),S.n=(function(e){return this.bf(e)}),S.m=(function(e){return this.bf(e|0)}),new E().i(gd,`scala.collection.immutable.ArraySeq$ofBoolean`,{az:1,G:1,y:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,H:1,t:1,p:1,q:1,x:1,L:1,a:1});function _d(e){this.al=null,this.al=e}S=_d.prototype=new md,S.constructor=_d,S.i=(function(){return this.al.a.length}),S.b7=(function(e){return this.al.a[e]}),S.p=(function(){var e=z();return e.v(this.al,e.u)}),S.h=(function(e){return e instanceof _d?M().dN(this.al,e.al):Z(this,e)}),S.l=(function(){return new X(this.al)}),S.n=(function(e){return this.b7(e)}),S.m=(function(e){return this.b7(e|0)}),new E().i(_d,`scala.collection.immutable.ArraySeq$ofByte`,{aA:1,G:1,y:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,H:1,t:1,p:1,q:1,x:1,L:1,a:1});function vd(e){this.a4=null,this.a4=e}S=vd.prototype=new md,S.constructor=vd,S.i=(function(){return this.a4.a.length}),S.b8=(function(e){return this.a4.a[e]}),S.p=(function(){var e=z();return e.v(this.a4,e.u)}),S.h=(function(e){return e instanceof vd?M().dO(this.a4,e.a4):Z(this,e)}),S.l=(function(){return new X(this.a4)}),S.aM=(function(e,t,n,r){return new Md(this.a4).aM(e,t,n,r)}),S.n=(function(e){return or(this.b8(e))}),S.m=(function(e){return or(this.b8(e|0))}),new E().i(vd,`scala.collection.immutable.ArraySeq$ofChar`,{aB:1,G:1,y:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,H:1,t:1,p:1,q:1,x:1,L:1,a:1});function yd(e){this.am=null,this.am=e}S=yd.prototype=new md,S.constructor=yd,S.i=(function(){return this.am.a.length}),S.b9=(function(e){return this.am.a[e]}),S.p=(function(){var e=z();return e.v(this.am,e.u)}),S.h=(function(e){if(e instanceof yd){var t=this.am,n=e.am;if(t===n)return!0;if(t.a.length===n.a.length){for(var r=0;r<t.a.length&&t.a[r]===n.a[r];)r=1+r|0;return r>=t.a.length}return!1}return Z(this,e)}),S.l=(function(){return new X(this.am)}),S.n=(function(e){return this.b9(e)}),S.m=(function(e){return this.b9(e|0)}),new E().i(yd,`scala.collection.immutable.ArraySeq$ofDouble`,{aC:1,G:1,y:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,H:1,t:1,p:1,q:1,x:1,L:1,a:1});function bd(e){this.an=null,this.an=e}S=bd.prototype=new md,S.constructor=bd,S.i=(function(){return this.an.a.length}),S.ba=(function(e){return this.an.a[e]}),S.p=(function(){var e=z();return e.v(this.an,e.u)}),S.h=(function(e){if(e instanceof bd){var t=this.an,n=e.an;if(t===n)return!0;if(t.a.length===n.a.length){for(var r=0;r<t.a.length&&t.a[r]===n.a[r];)r=1+r|0;return r>=t.a.length}return!1}return Z(this,e)}),S.l=(function(){return new X(this.an)}),S.n=(function(e){return this.ba(e)}),S.m=(function(e){return this.ba(e|0)}),new E().i(bd,`scala.collection.immutable.ArraySeq$ofFloat`,{aD:1,G:1,y:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,H:1,t:1,p:1,q:1,x:1,L:1,a:1});function xd(e){this.ao=null,this.ao=e}S=xd.prototype=new md,S.constructor=xd,S.i=(function(){return this.ao.a.length}),S.bb=(function(e){return this.ao.a[e]}),S.p=(function(){var e=z();return e.v(this.ao,e.u)}),S.h=(function(e){return e instanceof xd?M().dP(this.ao,e.ao):Z(this,e)}),S.l=(function(){return new X(this.ao)}),S.n=(function(e){return this.bb(e)}),S.m=(function(e){return this.bb(e|0)}),new E().i(xd,`scala.collection.immutable.ArraySeq$ofInt`,{aE:1,G:1,y:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,H:1,t:1,p:1,q:1,x:1,L:1,a:1});function Sd(e){this.ap=null,this.ap=e}S=Sd.prototype=new md,S.constructor=Sd,S.i=(function(){return this.ap.a.length>>>1|0}),S.bc=(function(e){var t=this.ap.a,n=e<<1;return w(t[n],t[n+1|0])}),S.p=(function(){var e=z();return e.v(this.ap,e.u)}),S.h=(function(e){return e instanceof Sd?M().dQ(this.ap,e.ap):Z(this,e)}),S.l=(function(){return new X(this.ap)}),S.n=(function(e){return this.bc(e)}),S.m=(function(e){return this.bc(e|0)}),new E().i(Sd,`scala.collection.immutable.ArraySeq$ofLong`,{aF:1,G:1,y:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,H:1,t:1,p:1,q:1,x:1,L:1,a:1});function Cd(e){this.aq=null,this.aq=e}S=Cd.prototype=new md,S.constructor=Cd,S.i=(function(){return this.aq.a.length}),S.n=(function(e){return this.aq.a[e]}),S.p=(function(){var e=z();return e.v(this.aq,e.u)}),S.h=(function(e){return e instanceof Cd?Ja().dT(this.aq,e.aq):Z(this,e)}),S.l=(function(){return new X(this.aq)}),S.m=(function(e){return this.n(e|0)}),new E().i(Cd,`scala.collection.immutable.ArraySeq$ofRef`,{aG:1,G:1,y:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,H:1,t:1,p:1,q:1,x:1,L:1,a:1});function wd(e){this.ar=null,this.ar=e}S=wd.prototype=new md,S.constructor=wd,S.i=(function(){return this.ar.a.length}),S.bd=(function(e){return this.ar.a[e]}),S.p=(function(){var e=z();return e.v(this.ar,e.u)}),S.h=(function(e){return e instanceof wd?M().dR(this.ar,e.ar):Z(this,e)}),S.l=(function(){return new X(this.ar)}),S.n=(function(e){return this.bd(e)}),S.m=(function(e){return this.bd(e|0)}),new E().i(wd,`scala.collection.immutable.ArraySeq$ofShort`,{aH:1,G:1,y:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,H:1,t:1,p:1,q:1,x:1,L:1,a:1});function Td(e){this.aL=null,this.aL=e}S=Td.prototype=new md,S.constructor=Td,S.i=(function(){return this.aL.a.length}),S.be=(function(e){}),S.p=(function(){var e=z();return e.v(this.aL,e.u)}),S.h=(function(e){return e instanceof Td?this.aL.a.length===e.aL.a.length:Z(this,e)}),S.l=(function(){return new X(this.aL)}),S.n=(function(e){this.be(e)}),S.m=(function(e){this.be(e|0)}),new E().i(Td,`scala.collection.immutable.ArraySeq$ofUnit`,{aI:1,G:1,y:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,H:1,t:1,p:1,q:1,x:1,L:1,a:1});function Ed(e,t,n,r){for(var i=r,a=n;;)if(a===t)return!i.g()|0;else{if(!i.g()){var o=1+a|0,s=i.G();a=o,i=s;continue}return-1}}function Dd(e,t,n){for(var r=n,i=t;;)if(i===r)return!0;else{var a=i.g(),o=r.g();if(!(a||o)&&P().F(i.S(),r.S())){var s=i.G(),c=r.G();i=s,r=c;continue}return a&&o}}function Od(){}S=Od.prototype=new ad,S.constructor=Od;function kd(){}kd.prototype=S,S.n=(function(e){return Bl(this,e)}),S.bO=(function(e){return Vl(this,e)}),S.aP=(function(){return`LinearSeq`}),S.l=(function(){return new Ul(this)}),S.er=(function(e){if(this.g())return e;if(e.g())return this;for(var t=new Bd(e.S(),this),n=t,r=e.G();!r.g();){var i=new Bd(r.S(),this);n.b3=i,n=i,r=r.G()}return t}),S.g=(function(){return this===Ud()}),S.e3=(function(e){if(e instanceof Od)return this.er(e);if(e.y()===0)return this;var t=e.l();if(t.s()){for(var n=new Bd(t.o(),this),r=n;t.s();){var i=new Bd(t.o(),this);r.b3=i,r=i}return n}return this}),S.aO=(function(e){for(var t=this;!t.g();)e.m(t.S()),t=t.G()}),S.i=(function(){for(var e=this,t=0;!e.g();)t=1+t|0,e=e.G();return t}),S.az=(function(e){return e<0?1:Ed(this,e,0,this)}),S.ay=(function(){return`List`}),S.h=(function(e){return e instanceof Od?Dd(this,this,e):Z(this,e)}),S.eY=(function(e){return Fu(this,e,this)}),S.m=(function(e){return Bl(this,e|0)});function Ad(e){this.a5=null,this.a5=e}S=Ad.prototype=new hd,S.constructor=Ad,S.i=(function(){return this.a5.a.length}),S.bf=(function(e){return this.a5.a[e]}),S.p=(function(){var e=z();return e.v(this.a5,e.u)}),S.h=(function(e){return e instanceof Ad?M().dS(this.a5,e.a5):$.prototype.h.call(this,e)}),S.l=(function(){return new X(this.a5)}),S.R=(function(){return this.a5}),S.n=(function(e){return this.bf(e)}),S.m=(function(e){return this.bf(e|0)}),new E().i(Ad,`scala.collection.mutable.ArraySeq$ofBoolean`,{aL:1,I:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,D:1,r:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function jd(e){this.a6=null,this.a6=e}S=jd.prototype=new hd,S.constructor=jd,S.i=(function(){return this.a6.a.length}),S.b7=(function(e){return this.a6.a[e]}),S.p=(function(){var e=z();return e.v(this.a6,e.u)}),S.h=(function(e){return e instanceof jd?M().dN(this.a6,e.a6):$.prototype.h.call(this,e)}),S.l=(function(){return new X(this.a6)}),S.R=(function(){return this.a6}),S.n=(function(e){return this.b7(e)}),S.m=(function(e){return this.b7(e|0)}),new E().i(jd,`scala.collection.mutable.ArraySeq$ofByte`,{aM:1,I:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,D:1,r:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function Md(e){this.L=null,this.L=e}S=Md.prototype=new hd,S.constructor=Md,S.i=(function(){return this.L.a.length}),S.b8=(function(e){return this.L.a[e]}),S.p=(function(){var e=z();return e.v(this.L,e.u)}),S.h=(function(e){return e instanceof Md?M().dO(this.L,e.L):$.prototype.h.call(this,e)}),S.l=(function(){return new X(this.L)}),S.aM=(function(e,t,n,r){var i=e.E;t.length!==0&&(i.r=``+i.r+t);var a=this.L.a.length;if(a!==0){if(n===``)i.ez(this.L);else{i.i();var o=this.L.a[0],s=``+Xn(o);i.r+=s;for(var c=1;c<a;){i.r=``+i.r+n;var l=this.L.a[c],u=``+Xn(l);i.r+=u,c=1+c|0}}}return r.length!==0&&(i.r=``+i.r+r),e}),S.R=(function(){return this.L}),S.n=(function(e){return or(this.b8(e))}),S.m=(function(e){return or(this.b8(e|0))}),new E().i(Md,`scala.collection.mutable.ArraySeq$ofChar`,{aN:1,I:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,D:1,r:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function Nd(e){this.M=null,this.M=e}S=Nd.prototype=new hd,S.constructor=Nd,S.i=(function(){return this.M.a.length}),S.b9=(function(e){return this.M.a[e]}),S.p=(function(){var e=z();return e.v(this.M,e.u)}),S.h=(function(e){if(e instanceof Nd){var t=e.M;if(this.M===t)return!0;if(this.M.a.length===t.a.length){for(var n=0;n<this.M.a.length&&this.M.a[n]===t.a[n];)n=1+n|0;return n>=this.M.a.length}return!1}return $.prototype.h.call(this,e)}),S.l=(function(){return new X(this.M)}),S.R=(function(){return this.M}),S.n=(function(e){return this.b9(e)}),S.m=(function(e){return this.b9(e|0)}),new E().i(Nd,`scala.collection.mutable.ArraySeq$ofDouble`,{aO:1,I:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,D:1,r:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function Pd(e){this.N=null,this.N=e}S=Pd.prototype=new hd,S.constructor=Pd,S.i=(function(){return this.N.a.length}),S.ba=(function(e){return this.N.a[e]}),S.p=(function(){var e=z();return e.v(this.N,e.u)}),S.h=(function(e){if(e instanceof Pd){var t=e.N;if(this.N===t)return!0;if(this.N.a.length===t.a.length){for(var n=0;n<this.N.a.length&&this.N.a[n]===t.a[n];)n=1+n|0;return n>=this.N.a.length}return!1}return $.prototype.h.call(this,e)}),S.l=(function(){return new X(this.N)}),S.R=(function(){return this.N}),S.n=(function(e){return this.ba(e)}),S.m=(function(e){return this.ba(e|0)}),new E().i(Pd,`scala.collection.mutable.ArraySeq$ofFloat`,{aP:1,I:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,D:1,r:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function Fd(e){this.a7=null,this.a7=e}S=Fd.prototype=new hd,S.constructor=Fd,S.i=(function(){return this.a7.a.length}),S.bb=(function(e){return this.a7.a[e]}),S.p=(function(){var e=z();return e.v(this.a7,e.u)}),S.h=(function(e){return e instanceof Fd?M().dP(this.a7,e.a7):$.prototype.h.call(this,e)}),S.l=(function(){return new X(this.a7)}),S.R=(function(){return this.a7}),S.n=(function(e){return this.bb(e)}),S.m=(function(e){return this.bb(e|0)}),new E().i(Fd,`scala.collection.mutable.ArraySeq$ofInt`,{aQ:1,I:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,D:1,r:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function Id(e){this.a8=null,this.a8=e}S=Id.prototype=new hd,S.constructor=Id,S.i=(function(){return this.a8.a.length>>>1|0}),S.bc=(function(e){var t=this.a8.a,n=e<<1;return w(t[n],t[n+1|0])}),S.p=(function(){var e=z();return e.v(this.a8,e.u)}),S.h=(function(e){return e instanceof Id?M().dQ(this.a8,e.a8):$.prototype.h.call(this,e)}),S.l=(function(){return new X(this.a8)}),S.R=(function(){return this.a8}),S.n=(function(e){return this.bc(e)}),S.m=(function(e){return this.bc(e|0)}),new E().i(Id,`scala.collection.mutable.ArraySeq$ofLong`,{aR:1,I:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,D:1,r:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function Ld(e){this.a9=null,this.a9=e}S=Ld.prototype=new hd,S.constructor=Ld,S.i=(function(){return this.a9.a.length}),S.n=(function(e){return this.a9.a[e]}),S.p=(function(){var e=z();return e.v(this.a9,e.u)}),S.h=(function(e){return e instanceof Ld?Ja().dT(this.a9,e.a9):$.prototype.h.call(this,e)}),S.l=(function(){return new X(this.a9)}),S.R=(function(){return this.a9}),S.m=(function(e){return this.n(e|0)}),new E().i(Ld,`scala.collection.mutable.ArraySeq$ofRef`,{aS:1,I:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,D:1,r:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function Rd(e){this.aa=null,this.aa=e}S=Rd.prototype=new hd,S.constructor=Rd,S.i=(function(){return this.aa.a.length}),S.bd=(function(e){return this.aa.a[e]}),S.p=(function(){var e=z();return e.v(this.aa,e.u)}),S.h=(function(e){return e instanceof Rd?M().dR(this.aa,e.aa):$.prototype.h.call(this,e)}),S.l=(function(){return new X(this.aa)}),S.R=(function(){return this.aa}),S.n=(function(e){return this.bd(e)}),S.m=(function(e){return this.bd(e|0)}),new E().i(Rd,`scala.collection.mutable.ArraySeq$ofShort`,{aT:1,I:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,D:1,r:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function zd(e){this.as=null,this.as=e}S=zd.prototype=new hd,S.constructor=zd,S.i=(function(){return this.as.a.length}),S.be=(function(e){}),S.p=(function(){var e=z();return e.v(this.as,e.u)}),S.h=(function(e){return e instanceof zd?this.as.a.length===e.as.a.length:$.prototype.h.call(this,e)}),S.l=(function(){return new X(this.as)}),S.R=(function(){return this.as}),S.n=(function(e){this.be(e)}),S.m=(function(e){this.be(e|0)}),new E().i(zd,`scala.collection.mutable.ArraySeq$ofUnit`,{aU:1,I:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,D:1,r:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function Bd(e,t){this.c7=null,this.b3=null,this.c7=e,this.b3=t}S=Bd.prototype=new kd,S.constructor=Bd,S.bm=(function(){return new kl(this)}),S.ab=(function(){return 2}),S.ad=(function(){return`::`}),S.ac=(function(e){if(e===0)return this.c7;if(e===1)return this.b3;throw gl(new _l,e)}),S.S=(function(){return this.c7}),S.G=(function(){return this.b3}),new E().i(Bd,`scala.collection.immutable.$colon$colon`,{de:1,a4:1,y:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,au:1,W:1,aK:1,aJ:1,p:1,q:1,aw:1,x:1,a:1,ay:1,T:1});function Vd(){Hd=this,Ud(),Ud()}S=Vd.prototype=new kd,S.constructor=Vd,S.bm=(function(){return new kl(this)}),S.ab=(function(){return 0}),S.ad=(function(){return`Nil`}),S.ac=(function(e){throw gl(new _l,e)}),S.fn=(function(){throw new wl(`head of empty list`)}),S.g4=(function(){throw new Cl(`tail of empty list`)}),S.y=(function(){return 0}),S.l=(function(){return gc().I}),S.S=(function(){this.fn()}),S.G=(function(){this.g4()}),new E().i(Vd,`scala.collection.immutable.Nil$`,{dj:1,a4:1,y:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,au:1,W:1,aK:1,aJ:1,p:1,q:1,aw:1,x:1,a:1,ay:1,T:1});var Hd;function Ud(){return Hd||=new Vd,Hd}function Wd(e,t){return e.E=t,e}function Gd(e){return Wd(e,new Wc),e}function Kd(){this.E=null}S=Kd.prototype=new ud,S.constructor=Kd,S.dH=(function(e){return ws(this,e)}),S.l=(function(){return new yu(new rd(this))}),S.az=(function(e){var t=this.E.i();return t===e?0:t<e?-1:1}),S.aP=(function(){return`IndexedSeq`}),S.i=(function(){return this.E.i()}),S.y=(function(){return this.E.i()}),S.ev=(function(e){var t=this.E,n=``+Xn(e);return t.r+=n,this}),S.t=(function(){return this.E.r}),S.g=(function(){return this.E.i()===0}),S.n=(function(e){return or(this.E.dK(e))}),S.m=(function(e){var t=e|0;return or(this.E.dK(t))}),S.cb=(function(e){return this.ev(cr(e))}),S.e5=(function(){return this.E.r}),new E().i(Kd,`scala.collection.mutable.StringBuilder`,{du:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,D:1,r:1,A:1,F:1,E:1,aW:1,aX:1,aV:1,ds:1,o:1,m:1,C:1,B:1,a3:1,a:1});function qd(e,t){return e.at=t,e}function Jd(e){return qd(e,[]),e}function Yd(){this.at=null}S=Yd.prototype=new fd,S.constructor=Yd,S.aP=(function(){return`IndexedSeq`}),S.l=(function(){return new yu(new rd(this))}),S.az=(function(e){var t=this.at.length|0;return t===e?0:t<e?-1:1}),S.n=(function(e){return this.at[e]}),S.i=(function(){return this.at.length|0}),S.y=(function(){return this.at.length|0}),S.ay=(function(){return`WrappedArray`}),S.e5=(function(){return this}),S.cb=(function(e){return this.at.push(e),this}),S.m=(function(e){var t=e|0;return this.at[t]}),new E().i(Yd,`scala.scalajs.js.WrappedArray`,{dO:1,dk:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,D:1,r:1,A:1,F:1,E:1,aW:1,aX:1,dt:1,dn:1,q:1,p:1,B:1,o:1,m:1,C:1,dq:1,aV:1,a:1}),Yi(new(fu.r()).C([]));