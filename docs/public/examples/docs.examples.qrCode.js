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
const i=globalThis,a=i.ShadowRoot&&(i.ShadyCSS===void 0||i.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,o=Symbol(),s=/* @__PURE__ */ new WeakMap;var c=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(a&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=s.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&s.set(t,e))}return e}toString(){return this.cssText}};const l=e=>new c(typeof e==`string`?e:e+``,void 0,o),u=(e,...t)=>new c(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,o),d=(e,t)=>{if(a)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=i.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},f=a?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return l(t)})(e):e,{is:p,defineProperty:m,getOwnPropertyDescriptor:h,getOwnPropertyNames:g,getOwnPropertySymbols:_,getPrototypeOf:v}=Object,y=globalThis,b=y.trustedTypes,ee=b?b.emptyScript:``,te=y.reactiveElementPolyfillSupport,ne=(e,t)=>e,re={toAttribute(e,t){
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
switch(t){case Boolean:e=e?ee:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},ie=(e,t)=>!p(e,t),x={attribute:!0,type:String,converter:re,reflect:!1,useDefault:!1,hasChanged:ie};Symbol.metadata??=Symbol(`metadata`),y.litPropertyMetadata??=/* @__PURE__ */ new WeakMap;var ae=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=x){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&m(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=h(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??x}static _$Ei(){if(this.hasOwnProperty(ne(`elementProperties`)))return;let e=v(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ne(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ne(`properties`))){let e=this.properties,t=[...g(e),..._(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=/* @__PURE__ */ new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(f(e))}else e!==void 0&&t.push(f(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=/* @__PURE__ */ new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=/* @__PURE__ */ new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=/* @__PURE__ */ new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return d(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?re:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?re:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??ie)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=/* @__PURE__ */ new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=/* @__PURE__ */ new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=/* @__PURE__ */ new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};ae.elementStyles=[],ae.shadowRootOptions={mode:`open`},ae[ne(`elementProperties`)]=/* @__PURE__ */ new Map,ae[ne(`finalized`)]=/* @__PURE__ */ new Map,te?.({ReactiveElement:ae}),(y.reactiveElementVersions??=[]).push(`2.1.2`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const oe=globalThis,se=e=>e,ce=oe.trustedTypes,le=ce?ce.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,ue=`$lit$`,de=`lit$${Math.random().toFixed(9).slice(2)}$`,fe=`?`+de,pe=`<${fe}>`,me=document,he=()=>me.createComment(``),ge=e=>e===null||typeof e!=`object`&&typeof e!=`function`,_e=Array.isArray,ve=e=>_e(e)||typeof e?.[Symbol.iterator]==`function`,ye=`[ 	
\f\r]`,be=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,xe=/-->/g,Se=/>/g,Ce=RegExp(`>|${ye}(?:([^\\s"'>=/]+)(${ye}*=${ye}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),we=/'/g,Te=/"/g,Ee=/^(?:script|style|textarea|title)$/i,De=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),Oe=Symbol.for(`lit-noChange`),S=Symbol.for(`lit-nothing`),ke=/* @__PURE__ */ new WeakMap,Ae=me.createTreeWalker(me,129);function je(e,t){if(!_e(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return le===void 0?t:le.createHTML(t)}const Me=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=be;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===be?c[1]===`!--`?o=xe:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=Ce):(Ee.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=Ce):o=Se:o===Ce?c[0]===`>`?(o=i??be,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?Ce:c[3]===`"`?Te:we):o===Te||o===we?o=Ce:o===xe||o===Se?o=be:(o=Ce,i=void 0);let d=o===Ce&&e[t+1].startsWith(`/>`)?` `:``;a+=o===be?n+pe:l>=0?(r.push(s),n.slice(0,l)+ue+n.slice(l)+de+d):n+de+(l===-2?t:d)}return[je(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]};var Ne=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Me(t,n);if(this.el=e.createElement(l,r),Ae.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=Ae.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(ue)){let t=u[o++],n=i.getAttribute(e).split(de),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Re:r[1]===`?`?ze:r[1]===`@`?Be:Le}),i.removeAttribute(e)}else e.startsWith(de)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Ee.test(i.tagName)){let e=i.textContent.split(de),t=e.length-1;if(t>0){i.textContent=ce?ce.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],he()),Ae.nextNode(),c.push({type:2,index:++a});i.append(e[t],he())}}}else if(i.nodeType===8){if(i.data===fe)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(de,e+1))!==-1;)c.push({type:7,index:a}),e+=de.length-1}}a++}}static createElement(e,t){let n=me.createElement(`template`);return n.innerHTML=e,n}};function Pe(e,t,n=e,r){if(t===Oe)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=ge(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=Pe(e,i._$AS(e,t.values),i,r)),t}var Fe=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??me).importNode(t,!0);Ae.currentNode=r;let i=Ae.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Ie(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Ve(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=Ae.nextNode(),a++)}return Ae.currentNode=me,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Ie=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Pe(this,e,t),ge(e)?e===S||e==null||e===``?(this._$AH!==S&&this._$AR(),this._$AH=S):e!==this._$AH&&e!==Oe&&this._(e):e._$litType$===void 0?e.nodeType===void 0?ve(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==S&&ge(this._$AH)?this._$AA.nextSibling.data=e:this.T(me.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Ne.createElement(je(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Fe(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=ke.get(e.strings);return t===void 0&&ke.set(e.strings,t=new Ne(e)),t}k(t){_e(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(he()),this.O(he()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=se(e).nextSibling;se(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Le=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=S,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(/* @__PURE__ */ new String),this.strings=n):this._$AH=S}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=Pe(this,e,t,0),a=!ge(e)||e!==this._$AH&&e!==Oe,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=Pe(this,r[n+o],t,o),s===Oe&&(s=this._$AH[o]),a||=!ge(s)||s!==this._$AH[o],s===S?e=S:e!==S&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Re=class extends Le{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===S?void 0:e}},ze=class extends Le{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==S)}},Be=class extends Le{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=Pe(this,e,t,0)??S)===Oe)return;let n=this._$AH,r=e===S&&n!==S||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==S&&(n===S||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ve=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Pe(this,e)}};const He={M:ue,P:de,A:fe,C:1,L:Me,R:Fe,D:ve,V:Pe,I:Ie,H:Le,N:ze,U:Be,B:Re,F:Ve},Ue=oe.litHtmlPolyfillSupport;Ue?.(Ne,Ie),(oe.litHtmlVersions??=[]).push(`3.3.3`);const We=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Ie(t.insertBefore(he(),e),e,void 0,n??{})}return i._$AI(e),i},Ge=globalThis
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
;var Ke=class extends ae{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=We(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Oe}};Ke._$litElement$=!0,Ke.finalized=!0,Ge.litElementHydrateSupport?.({LitElement:Ke});const qe=Ge.litElementPolyfillSupport;qe?.({LitElement:Ke}),(Ge.litElementVersions??=[]).push(`4.2.2`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Je=u`
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
function Ye(e,t){let n={waitUntilFirstUpdate:!1,...t};return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Xe=Object.defineProperty,Ze=Object.getOwnPropertyDescriptor,Qe=e=>{throw TypeError(e)},C=(e,t,n,r)=>{for(var i=r>1?void 0:r?Ze(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Xe(t,n,i),i},$e=(e,t,n)=>t.has(e)||Qe(`Cannot `+n),et=(e,t,n)=>($e(e,t,`read from private field`),n?n.call(e):t.get(e)),tt=(e,t,n)=>t.has(e)?Qe(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),nt=(e,t,n,r)=>($e(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const rt=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},it={attribute:!0,type:String,converter:re,reflect:!1,hasChanged:ie},at=(e=it,t,n)=>{
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=/* @__PURE__ */ new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function w(e){return(t,n)=>typeof n==`object`?at(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function ot(e){return w({...e,state:!0,attribute:!1})}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const st=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function ct(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return st(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return st(n,r,{get(){return a(this)}})}}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var lt=u`
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
`,ut=/;\s+$/;function dt(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function ft(e){let{property:t,value:n,element:r}=e;if(n){let e=r.getAttribute(`style`)||``;e&&(e.match(ut)||(e+=`;`),e+=` `);let i=`${t}: ${n}`;return e.includes(i)?void 0:`${e}${i};`}return null}var pt,mt=class extends Ke{constructor(){super(),tt(this,pt,!1),this.initialReflectedProperties=/* @__PURE__ */ new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,t)=>{if(this.internals?.states)try{t?this.internals.states.add(e):this.internals.states.delete(e)}catch(e){if(String(e).includes(`must start with '--'`))console.error(`Your browser implements an outdated version of CustomStateSet. Consider using a polyfill`);else throw e}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error(`Element internals are not supported in your browser. Consider using a polyfill`)}this.customStates.set(`wa-defined`,!0);let e=this.constructor;for(let[t,n]of e.elementProperties)n.default===`inherit`&&n.initial!==void 0&&typeof t==`string`&&this.customStates.set(`initial-${t}-${n.initial}`,!0)}static get styles(){return[lt,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `)),this.didSSR&&this.updateComplete.then(()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `))})}attributeChangedCallback(e,t,n){et(this,pt)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),nt(this,pt,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll(`slot`).forEach(e=>{e.dispatchEvent(new Event(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(e){if(this.didSSR&&!this.hasUpdated){let t=new Event(`lit-hydration-error`,{bubbles:!0,composed:!0,cancelable:!1});t.error=e,this.dispatchEvent(t)}throw e}}setStyle(e,t){if(this.style)this.style[e]=t;else{let n=ft({property:dt(e),value:t,element:this});n&&this.setAttribute(`style`,n)}}setStyleProperty(e,t){if(this.style)this.style.setProperty(e,t);else{let n=ft({property:e,value:t,element:this});n&&this.setAttribute(`style`,n)}}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};pt=/* @__PURE__ */ new WeakMap,C([w()],mt.prototype,`dir`,2),C([w()],mt.prototype,`lang`,2),C([w({type:Boolean,reflect:!0,attribute:`did-ssr`})],mt.prototype,`didSSR`,2);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var ht=``,gt=``;function _t(){return ht.replace(/\/$/,``)}function vt(e){gt=e}function yt(){if(!gt){let e=document.querySelector(`[data-fa-kit-code]`);e&&vt(e.getAttribute(`data-fa-kit-code`)||``)}return gt}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var bt=`7.3.0`;function xt(e,t,n){let r=`solid`;return t===`chisel`&&(r=`chisel-regular`),t===`etch`&&(r=`etch-solid`),t===`graphite`&&(r=`graphite-thin`),t===`jelly`&&(r=`jelly-regular`,n===`duo-regular`&&(r=`jelly-duo-regular`),n===`fill-regular`&&(r=`jelly-fill-regular`)),t===`jelly-duo`&&(r=`jelly-duo-regular`),t===`jelly-fill`&&(r=`jelly-fill-regular`),t===`notdog`&&(n===`solid`&&(r=`notdog-solid`),n===`duo-solid`&&(r=`notdog-duo-solid`)),t===`notdog-duo`&&(r=`notdog-duo-solid`),t===`slab`&&((n===`solid`||n===`regular`)&&(r=`slab-regular`),n===`press-regular`&&(r=`slab-press-regular`)),t===`slab-press`&&(r=`slab-press-regular`),t===`slab-duo`&&(r=`slab-duo-regular`),t===`slab-press-duo`&&(r=`slab-press-duo-regular`),t===`thumbprint`&&(r=`thumbprint-light`),t===`utility`&&(r=`utility-semibold`),t===`utility-duo`&&(r=`utility-duo-semibold`),t===`utility-fill`&&(r=`utility-fill-semibold`),t===`whiteboard`&&(r=`whiteboard-semibold`),t===`mosaic`&&(r=`mosaic-solid`),t===`pixel`&&(r=`pixel-regular`),t===`vellum`&&(r=`vellum-solid`),t===`classic`&&(n===`thin`&&(r=`thin`),n===`light`&&(r=`light`),n===`regular`&&(r=`regular`),n===`solid`&&(r=`solid`)),t===`duotone`&&(n===`thin`&&(r=`duotone-thin`),n===`light`&&(r=`duotone-light`),n===`regular`&&(r=`duotone-regular`),n===`solid`&&(r=`duotone`)),t===`sharp`&&(n===`thin`&&(r=`sharp-thin`),n===`light`&&(r=`sharp-light`),n===`regular`&&(r=`sharp-regular`),n===`solid`&&(r=`sharp-solid`)),t===`sharp-duotone`&&(n===`thin`&&(r=`sharp-duotone-thin`),n===`light`&&(r=`sharp-duotone-light`),n===`regular`&&(r=`sharp-duotone-regular`),n===`solid`&&(r=`sharp-duotone-solid`)),t===`brands`&&(r=`brands`),r}function St(e,t,n){let r=xt(e,t,n),i=_t();if(i)return`${i}/${r}/${e}.svg`;let a=yt();return a.length>0?`https://ka-p.fontawesome.com/releases/v${bt}/svgs/${r}/${e}.svg?token=${encodeURIComponent(a)}`:`https://ka-f.fontawesome.com/releases/v${bt}/svgs/${r}/${e}.svg`}var Ct={name:`default`,resolver:(e,t=`classic`,n=`solid`)=>St(e,t,n),mutator:(e,t)=>{if(e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`),t?.family&&!e.hasAttribute(`data-duotone-initialized`)){let{family:n,variant:r}=t;if(n===`duotone`||n===`sharp-duotone`||n===`notdog-duo`||n===`notdog`&&r===`duo-solid`||n===`jelly-duo`||n===`jelly`&&r===`duo-regular`||n===`utility-duo`||n===`slab-duo`||n===`slab-press-duo`||n===`thumbprint`){let n=[...e.querySelectorAll(`path`)],r=n.find(e=>!e.hasAttribute(`opacity`)),i=n.find(e=>e.hasAttribute(`opacity`));if(!r||!i)return;if(r.setAttribute(`data-duotone-primary`,``),i.setAttribute(`data-duotone-secondary`,``),t.swapOpacity&&r&&i){let e=i.getAttribute(`opacity`)||`0.4`;r.style.setProperty(`--path-opacity`,e),i.style.setProperty(`--path-opacity`,`1`)}e.setAttribute(`data-duotone-initialized`,``)}}}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function wt(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var Tt={solid:{"arrow-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`,"arrow-up":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>`,backward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M236.3 107.1C247.9 96 265 92.9 279.7 99.2C294.4 105.5 304 120 304 136L304 272.3L476.3 107.2C487.9 96 505 92.9 519.7 99.2C534.4 105.5 544 120 544 136L544 504C544 520 534.4 534.5 519.7 540.8C505 547.1 487.9 544 476.3 532.9L304 367.7L304 504C304 520 294.4 534.5 279.7 540.8C265 547.1 247.9 544 236.3 532.9L44.3 348.9C36.5 341.3 32 330.9 32 320C32 309.1 36.5 298.7 44.3 291.1L236.3 107.1z"/></svg>`,"backward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M491 100.8C478.1 93.8 462.3 94.5 450 102.6L192 272.1L192 128C192 110.3 177.7 96 160 96C142.3 96 128 110.3 128 128L128 512C128 529.7 142.3 544 160 544C177.7 544 192 529.7 192 512L192 367.9L450 537.5C462.3 545.6 478 546.3 491 539.3C504 532.3 512 518.8 512 504.1L512 136.1C512 121.4 503.9 107.9 491 100.9z"/></svg>`,bars:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>`,"angles-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M77.3 256 214.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256zm192 0L406.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L269.3 256z"/></svg>`,"angles-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.7 256 297.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 256zm-192 0L105.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256z"/></svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>`,"chevron-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`,"chevron-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>`,"chevron-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>`,circle:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>`,"closed-captioning":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M64 192C64 156.7 92.7 128 128 128L512 128C547.3 128 576 156.7 576 192L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 192zM216 272L248 272C252.4 272 256 275.6 256 280C256 293.3 266.7 304 280 304C293.3 304 304 293.3 304 280C304 249.1 278.9 224 248 224L216 224C185.1 224 160 249.1 160 280L160 360C160 390.9 185.1 416 216 416L248 416C278.9 416 304 390.9 304 360C304 346.7 293.3 336 280 336C266.7 336 256 346.7 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 280C208 275.6 211.6 272 216 272zM384 280C384 275.6 387.6 272 392 272L424 272C428.4 272 432 275.6 432 280C432 293.3 442.7 304 456 304C469.3 304 480 293.3 480 280C480 249.1 454.9 224 424 224L392 224C361.1 224 336 249.1 336 280L336 360C336 390.9 361.1 416 392 416L424 416C454.9 416 480 390.9 480 360C480 346.7 469.3 336 456 336C442.7 336 432 346.7 432 360C432 364.4 428.4 368 424 368L392 368C387.6 368 384 364.4 384 360L384 280z"/></svg>`,"closed-captioning-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M39 39.1C48.4 29.7 63.6 29.7 72.9 39.1L161.8 128L512 128C547.3 128 576 156.7 576 192L576 448C576 473.5 561.1 495.4 539.6 505.8L601 567.1C610.4 576.5 610.4 591.7 601 601C591.6 610.3 576.4 610.4 567.1 601L39 73.1C29.7 63.7 29.7 48.5 39 39.1zM384 350.1L384 279.9C384 275.5 387.6 271.9 392 271.9L424 271.9C428.4 271.9 432 275.5 432 279.9C432 293.2 442.7 303.9 456 303.9C469.3 303.9 480 293.2 480 279.9C480 249 454.9 223.9 424 223.9L392 223.9C361.1 223.9 336 249 336 279.9L336 302.1L384 350.1zM445.5 411.6C465.7 403.2 480 383.2 480 359.9C480 346.6 469.3 335.9 456 335.9C442.7 335.9 432 346.6 432 359.9C432 364.3 428.4 367.9 424 367.9L401.8 367.9L445.5 411.6zM162.3 264.1C160.8 269.1 160 274.5 160 280L160 360C160 390.9 185.1 416 216 416L248 416C266.1 416 282.1 407.5 292.4 394.2L410.2 512L128 512C92.7 512 64 483.3 64 448L64 192C64 184.2 65.4 176.7 68 169.8L162.3 264.1zM256.1 357.9C256 358.6 256 359.3 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 309.8L256.1 357.9z"/></svg>`,compress:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>`,ellipsis:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M96 320C96 289.1 121.1 264 152 264C182.9 264 208 289.1 208 320C208 350.9 182.9 376 152 376C121.1 376 96 350.9 96 320zM264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320zM488 264C518.9 264 544 289.1 544 320C544 350.9 518.9 376 488 376C457.1 376 432 350.9 432 320C432 289.1 457.1 264 488 264z"/></svg>`,"ellipsis-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/></svg>`,expand:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 96C110.3 96 96 110.3 96 128L96 224C96 241.7 110.3 256 128 256C145.7 256 160 241.7 160 224L160 160L224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L128 96zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 512C96 529.7 110.3 544 128 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480L160 416zM416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160L480 224C480 241.7 494.3 256 512 256C529.7 256 544 241.7 544 224L544 128C544 110.3 529.7 96 512 96L416 96zM544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L512 544C529.7 544 544 529.7 544 512L544 416z"/></svg>`,eyedropper:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>`,filter:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 64C19.1 64 7.4 71.8 2.4 83.8S.2 109.5 9.4 118.6L192 301.3 192 416c0 8.5 3.4 16.6 9.4 22.6l64 64c9.2 9.2 22.9 11.9 34.9 6.9S320 492.9 320 480l0-178.7 182.6-182.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 64 480 64L32 64z"/></svg>`,forward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M403.7 107.1C392.1 96 375 92.9 360.3 99.2C345.6 105.5 336 120 336 136L336 272.3L163.7 107.2C152.1 96 135 92.9 120.3 99.2C105.6 105.5 96 120 96 136L96 504C96 520 105.6 534.5 120.3 540.8C135 547.1 152.1 544 163.7 532.9L336 367.7L336 504C336 520 345.6 534.5 360.3 540.8C375 547.1 392.1 544 403.7 532.9L595.7 348.9C603.6 341.4 608 330.9 608 320C608 309.1 603.5 298.7 595.7 291.1L403.7 107.1z"/></svg>`,file:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>`,"file-audio":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>`,"file-code":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>`,"file-excel":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>`,"file-image":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>`,"file-pdf":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>`,"file-powerpoint":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>`,"file-video":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>`,"file-word":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>`,"file-zipper":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>`,"forward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M21 36.8c12.9-7 28.7-6.3 41 1.8L320 208.1 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-144.1-258 169.6c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440L0 72C0 57.3 8.1 43.8 21 36.8z"/></svg>`,gauge:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,gear:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>`,"grip-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>`,indeterminate:`<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>`,"magnifying-glass":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>`,minus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>`,pause:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>`,"picture-in-picture":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M448 32c35.3 0 64 28.7 64 64l0 112-64 0 0-112-384 0 0 320 144 0 0 64-144 0-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416 0 96C0 62.9 25.2 35.6 57.5 32.3L64 32 448 32zm16 224c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48l160 0z"/></svg>`,play:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>`,"play-circle":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>`,plus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>`,"table-columns":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 64l0 256 128 0 0-256-128 0zm320 0l-128 0 0 256 128 0 0-256z"/></svg>`,thumbtack:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 10.3 134.1c37.1 21.2 65.8 56.4 78.2 99.7l3.8 13.4c2.8 9.7 .8 20-5.2 28.1S362 352 352 352L32 352c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1L5 297.8c12.4-43.3 41-78.5 78.2-99.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 400l64 0 0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-112z"/></svg>`,"up-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M406.6 502.6l96-96c9.2-9.2 11.9-22.9 6.9-34.9S492.9 352 480 352l-64 0 0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 320-64 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l96 96c12.5 12.5 32.8 12.5 45.3 0zM150.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-9.2 9.2-11.9 22.9-6.9 34.9S19.1 160 32 160l64 0 0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320 64 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-96-96z"/></svg>`,upload:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>`,user:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>`,volume:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM441.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C443.3 170.7 464 210.9 464 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-low":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,xmark:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>`},regular:{calendar:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z"/></svg>`,"circle-question":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`,"circle-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,clock:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>`,copy:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>`,eye:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>`,"eye-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>`}},Et={name:`system`,resolver:(e,t=`classic`,n=`solid`)=>{let r=Tt[n][e]??Tt.regular[e]??Tt.regular[`circle-question`];return r?wt(r):``},mutator:e=>{e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`)}},Dt=`classic`,Ot=[Ct,Et],kt=/* @__PURE__ */ new Set
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;function At(e){kt.add(e)}function jt(e){kt.delete(e)}function Mt(e){return Ot.find(t=>t.name===e)}function Nt(){return Dt}
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const{I:Pt}=He,Ft=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,It=e=>e.strings===void 0,Lt={},Rt=(e,t=Lt)=>e._$AH=t;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var zt=Symbol(),Bt=Symbol(),Vt,Ht=/* @__PURE__ */ new Map,T=class extends mt{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label=``,this.library=`default`,this.rotate=0,this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=De`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let n=this.shadowRoot.querySelector(`[part='svg']`);return typeof t.mutator==`function`&&t.mutator(n,this),this.svg}try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?zt:Bt}catch{return Bt}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return zt;Vt||=new DOMParser;let r=Vt.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):zt}catch{return zt}}}connectedCallback(){super.connectedCallback(),At(this)}firstUpdated(e){super.firstUpdated(e),this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),jt(this)}async getIconSource(){let e=Mt(this.library),t=this.family||Nt();if(this.name&&e){let n=this.canvas===`auto`||this.autoWidth,r;try{r=await e.resolver(this.name,t,this.variant,n)}catch{r=void 0}return{url:r,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=await this.getIconSource(),i=t?Mt(this.library):void 0;if(!e){this.svg=null;return}let a=Ht.get(e);a||(a=this.resolveIcon(e,i),Ht.set(e,a));let o=await a;if(o===Bt&&Ht.delete(e),e===(await this.getIconSource()).url){if(Ft(o))this.svg=o;else switch(o){case Bt:case zt:this.svg=null,this.dispatchEvent(new n);break;default:this.svg=o.cloneNode(!0),i?.mutator?.(this.svg,this),this.dispatchEvent(new r)}}}willUpdate(e){return this.style||this.setStyleProperty(`--rotate-angle`,`${this.rotate}deg`),super.willUpdate(e)}updated(e){super.updated(e);let t=Mt(this.library);this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`);let n=this.shadowRoot?.querySelector(`svg`);n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:De`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};T.css=Je,C([ot()],T.prototype,`svg`,2),C([w({reflect:!0})],T.prototype,`name`,2),C([w({reflect:!0})],T.prototype,`family`,2),C([w({reflect:!0})],T.prototype,`variant`,2),C([w({reflect:!0})],T.prototype,`canvas`,2),C([w({attribute:`auto-width`,type:Boolean,reflect:!0})],T.prototype,`autoWidth`,2),C([w({attribute:`swap-opacity`,type:Boolean,reflect:!0})],T.prototype,`swapOpacity`,2),C([w()],T.prototype,`src`,2),C([w()],T.prototype,`label`,2),C([w({reflect:!0})],T.prototype,`library`,2),C([w({type:Number,reflect:!0})],T.prototype,`rotate`,2),C([w({type:String,reflect:!0})],T.prototype,`flip`,2),C([w({type:String,reflect:!0})],T.prototype,`animation`,2),C([Ye(`label`)],T.prototype,`handleLabelChange`,1),C([Ye([`family`,`name`,`library`,`variant`,`src`,`autoWidth`,`canvas`,`swapOpacity`],{waitUntilFirstUpdate:!0})],T.prototype,`setIcon`,1),T=C([rt(`wa-icon`)],T);var Ut=/* @__PURE__ */ t({default:()=>T}),Wt=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-clear`,{bubbles:!0,cancelable:!1,composed:!0})}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Gt(e,t){let n=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key===`Enter`&&!n&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&Yt(t)})}var Kt=/* @__PURE__ */ new Map([[`input`,!0],[`wa-input`,!0],[`wa-tag-input`,!0],[`wa-number-input`,!0],[`wa-otp-input`,!0],[`wa-slider`,!0]]),qt=/* @__PURE__ */ new Map([[`button`,!1],[`checkbox`,!1],[`color`,!1],[`date`,!1],[`datetime-local`,!1],[`email`,!0],[`file`,!1],[`hidden`,!1],[`image`,!1],[`month`,!1],[`number`,!0],[`password`,!0],[`radio`,!1],[`range`,!1],[`reset`,!0],[`search`,!0],[`submit`,!1],[`tel`,!0],[`text`,!0],[`time`,!1],[`url`,!0],[`week`,!1]]),Jt=e=>{let t=e?.localName;if(!t||!Kt.get(t))return!1;if(t!==`input`&&t!==`wa-input`)return!0;let n=e.type;return!!qt.get(n)};function Yt(e){let t=null;if(`form`in e&&(t=e.form),!t&&`getForm`in e&&(t=e.getForm()),!t)return;let n=Array.from(t.elements),r=0;for(let e of n)Jt(e)&&(r+=1);if(r===1){t.requestSubmit(null);return}let i=n.find(e=>e.type===`submit`&&!e.matches(`:disabled`));i&&([`input`,`button`].includes(i.localName)?t.requestSubmit(i):i.click())}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Xt=u`
  :host {
    border-width: 0;
  }

  :host(:focus) {
    outline: none;
  }

  .text-field {
    display: flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    transition: inherit;
    height: var(--wa-form-control-height);
    border-color: var(--wa-form-control-border-color);
    border-radius: var(--wa-form-control-border-radius);
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
    cursor: text;
    color: var(--wa-form-control-value-color);
    font-size: var(--wa-form-control-value-font-size);
    font-family: inherit;
    font-weight: var(--wa-form-control-value-font-weight);
    line-height: var(--wa-form-control-value-line-height);
    vertical-align: middle;
    width: 100%;
    transition:
      background-color var(--wa-transition-normal),
      border-color var(--wa-transition-normal),
      outline-color var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
    background-color: var(--wa-form-control-background-color);
    box-shadow: var(--box-shadow);
    padding: 0 var(--wa-form-control-padding-inline);
    outline: var(--wa-focus-ring-style) var(--wa-focus-ring-width) transparent;
    outline-offset: var(--wa-focus-ring-offset);

    /* Only ring the field when the text input has focus, not inner buttons */
    &:has(input:focus, textarea:focus) {
      outline-color: var(--wa-color-focus);
    }

    /* Style disabled inputs */
    &:has(:disabled) {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  /* Appearance modifiers */
  :host([appearance='outlined']) .text-field {
    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
  }

  :host([appearance='filled']) .text-field {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-color-neutral-fill-quiet);
  }

  :host([appearance='filled-outlined']) .text-field {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-form-control-border-color);
  }

  :host([pill]) .text-field {
    border-radius: var(--wa-border-radius-pill) !important;
  }

  .text-field {
    /* Show autofill styles over the entire text field, not just the native <input> */
    &:has(:autofill),
    &:has(:-webkit-autofill) {
      background-color: var(--wa-color-brand-fill-quiet) !important;
    }

    input,
    textarea {
      /*
      Fixes an alignment issue with placeholders.
      https://github.com/shoelace-style/webawesome/issues/342
    */
      height: 100%;

      padding: 0;
      border: none;
      outline: none;
      box-shadow: none;
      margin: 0;
      cursor: inherit;
      -webkit-appearance: none;
      font: inherit;

      /* Turn off Safari's autofill styles */
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        -webkit-background-clip: text;
        background-color: transparent;
        -webkit-text-fill-color: inherit;
      }
    }
  }

  input {
    flex: 1 1 auto;
    min-width: 0;
    height: 100%;
    transition: inherit;

    /* prettier-ignore */
    background-color: rgb(118 118 118 / 0); /* ensures proper placeholder styles in webkit's date input */
    height: calc(var(--wa-form-control-height) - var(--border-width) * 2);
    padding-block: 0;
    color: inherit;

    &:autofill {
      &,
      &:hover,
      &:focus,
      &:active {
        box-shadow: none;
        caret-color: var(--wa-form-control-value-color);
      }
    }

    &::placeholder {
      color: var(--wa-form-control-placeholder-color);
      user-select: none;
      -webkit-user-select: none;
    }

    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      -webkit-appearance: none;
    }

    &:focus {
      outline: none;
    }
  }

  textarea {
    &:autofill {
      &,
      &:hover,
      &:focus,
      &:active {
        box-shadow: none;
        caret-color: var(--wa-form-control-value-color);
      }
    }

    &::placeholder {
      color: var(--wa-form-control-placeholder-color);
      user-select: none;
      -webkit-user-select: none;
    }
  }

  .start,
  .end {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;

    &::slotted(wa-icon) {
      color: var(--wa-color-neutral-on-quiet);
    }
  }

  .start::slotted(*) {
    margin-inline-end: var(--wa-form-control-padding-inline);
  }

  .end::slotted(*) {
    margin-inline-start: var(--wa-form-control-padding-inline);
  }

  /*
   * Clearable + Password Toggle
   */

  .clear,
  .password-toggle {
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
    /* The box is wider than the glyph, so overhang half of that growth on each side. Keeps the
       glyph flush with the field's trailing padding edge, like every other form control. */
    margin-inline-start: calc(var(--wa-form-control-padding-inline) - 0.125em);
    margin-inline-end: -0.125em;

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

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  :host([without-spin-buttons]) input[type='number'] {
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      display: none;
    }
  }
`,Zt=u`
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
`,Qt=()=>({checkValidity(e){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
let t=e.input,n={message:``,isValid:!0,invalidKeys:[]};if(!t)return n;let r=!0;if(`checkValidity`in t&&(r=t.checkValidity()),r)return n;if(n.isValid=!1,`validationMessage`in t&&(n.message=t.validationMessage),!(`validity`in t))return n.invalidKeys.push(`customError`),n;for(let e in t.validity){if(e===`valid`)continue;let r=e;t.validity[r]&&n.invalidKeys.push(r)}return n}}),$t=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-invalid`,{bubbles:!0,cancelable:!1,composed:!0})}},en=()=>({observedAttributes:[`custom-error`],checkValidity(e){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
let t={message:``,isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=[`customError`]),t}}),tn=class extends mt{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=[`input`],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new $t))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},`addEventListener`in this&&this.addEventListener(`invalid`,this.emitInvalid)}static get validators(){return[en()]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let n of t.observedAttributes)e.add(n);return[...e]}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.updateValidity()}):this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener?.(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has(`customError`)&&(this.customError||=null,this.setCustomValidity(this.customError||``)),e.has(`value`)||e.has(`disabled`)||e.has(`defaultValue`)){let e=this.value;this.updateFormValue(e)}e.has(`disabled`)&&(this.customStates.set(`disabled`,this.disabled),(this.hasAttribute(`disabled`)||!this.matches(`:disabled`))&&this.toggleAttribute(`disabled`,this.disabled)),super.willUpdate(e),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>this.updateValidity()):this.updateValidity()}updateFormValue(e){if(Array.isArray(e)){if(this.name){let t=new FormData;for(let n of e)t.append(this.name,n);this.setValue(t,t)}}else this.setValue(e,e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(e){e?this.setAttribute(`form`,e):this.removeAttribute(`form`)}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],n=e[1],r=e[2];r||=this.validationTarget,this.internals.setValidity(t,n,r||void 0),this.requestUpdate(`validity`),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set(`required`,e),this.customStates.set(`optional`,!e),this.customStates.set(`invalid`,!t),this.customStates.set(`valid`,t),this.customStates.set(`user-invalid`,!t&&n),this.customStates.set(`user-valid`,t&&n)}setCustomValidity(e){e?(this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)):(this.customError=null,this.setValidity({}))}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity()}):(this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity())}setValue(...e){let[t,n]=e;this.internals.setFormValue(t,n)}get allValidators(){let e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(``),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute(`disabled`)||!this.willValidate){this.resetValidity();return}let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},n=this.validationTarget||this.input||void 0,r=``;for(let n of e){let{isValid:e,message:i,invalidKeys:a}=n.checkValidity(this);e||(r||=i,a?.length>=0&&a.forEach(e=>t[e]=!0))}r||=this.validationMessage,this.setValidity(t,r,n)}};tn.formAssociated=!0,C([w({reflect:!0})],tn.prototype,`name`,2),C([w({type:Boolean})],tn.prototype,`disabled`,2),C([w({state:!0,attribute:!1})],tn.prototype,`valueHasChanged`,2),C([w({state:!0,attribute:!1})],tn.prototype,`hasInteracted`,2),C([w({attribute:`custom-error`,reflect:!0})],tn.prototype,`customError`,2),C([w({attribute:!1,state:!0,type:Object})],tn.prototype,`validity`,1);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var nn={small:`s`,medium:`m`,large:`l`},rn=/* @__PURE__ */ new Set;function an(e,t){t in nn&&!rn.has(`${e}:${t}`)&&(rn.add(`${e}:${t}`),console.warn(`[${e}] size="${t}" is deprecated. Use size="${nn[t]}" instead. The long-form value will be removed in the next major version.`))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var on=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return this.host.childNodes?[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===Node.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`wa-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1}):!1}hasNamedSlot(e){return this.host.querySelector?.(`:scope > [slot="${e}"]`)!==null}test(e,t){return t&&this.host.didSSR&&!this.host.hasUpdated?!!this.host[t]:e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){let e=this.host.shadowRoot;e&&`addEventListener`in e&&e.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){let e=this.host.shadowRoot;e&&`removeEventListener`in e&&e.removeEventListener(`slotchange`,this.handleSlotChange)}},sn=u`
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
;const cn=/* @__PURE__ */ new Set,ln=/* @__PURE__ */ new Map;let un,dn=`ltr`,fn=`en`;const pn=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(pn){let e=new MutationObserver(hn);dn=document.documentElement.dir||`ltr`,fn=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function mn(...e){e.map(e=>{let t=e.$code.toLowerCase();ln.has(t)?ln.set(t,Object.assign(Object.assign({},ln.get(t)),e)):ln.set(t,e),un||=e}),hn()}function hn(){pn&&(dn=document.documentElement.dir||`ltr`,fn=document.documentElement.lang||navigator.language),[...cn.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var gn=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){cn.add(this.host)}hostDisconnected(){cn.delete(this.host)}dir(){return`${this.host.dir||dn}`.toLowerCase()}lang(){let e=`${this.host.lang||fn}`.toLowerCase().replace(/_/g,`-`);try{return new Intl.Locale(e),e}catch{return un?un.$code.toLowerCase():`en`}}getTranslationData(e){let t;try{t=new Intl.Locale(e.replace(/_/g,`-`))}catch{return{locale:void 0,language:``,region:``,primary:void 0,secondary:void 0}}let n=t.language.toLowerCase(),r=t.region?.toLowerCase()??``,i=ln.get(`${n}-${r}`),a=ln.get(n);return{locale:t,language:n,region:r,primary:i,secondary:a}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&un&&un[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(un&&un[e])i=un[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},_n={$code:`en`,$name:`English`,$dir:`ltr`,allTagsRemoved:`All tags removed`,am:`AM`,autosizeColumn:`Autosize column`,captions:`Captions`,carousel:`Carousel`,chooseDate:`Choose date`,chooseDecade:`Choose decade`,chooseMonth:`Choose month`,chooseTime:`Choose time`,chooseYear:`Choose year`,clearEntry:`Clear entry`,clearFilter:`Clear filter`,clearSort:`Clear sort`,close:`Close`,closeCalendar:`Close calendar`,closeTimeInput:`Close time picker`,collapseRow:`Collapse row`,columnMenu:`Column options`,columnMovedToPosition:(e,t,n)=>`${e} moved to position ${t} of ${n}`,columns:`Columns`,compactPageXOfY:(e,t)=>`${e} of ${t}`,completed:`Completed`,copied:`Copied`,copy:`Copy`,createOption:e=>`Create "${e}"`,currentlyPlaying:`currently playing`,currentValue:`Current value`,date:`Date`,datePickerKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the calendar.`,day:`Day`,dayPeriod:`AM/PM`,decrement:`Decrement`,deselectAllRows:`Deselect all rows`,disabled:`Disabled`,dropFileHere:`Drop file here or click to browse`,dropFilesHere:`Drop files here or click to browse`,empty:`Empty`,endDate:`End date`,enterFullscreen:`Enter fullscreen`,error:`Error`,exitFullscreen:`Exit fullscreen`,expandRow:`Expand row`,filterByColumn:e=>`Filter by ${e}`,filterFrom:`From`,filterMax:`Max`,filterMin:`Min`,filterTo:`To`,firstPage:`First page`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hideColumn:`Hide column`,hidePassword:`Hide password`,hour:`Hour`,incompleteDate:`Enter a valid date.`,increment:`Increment`,jumpBackwardX:e=>`Jump back ${e} pages`,jumpForwardX:e=>`Jump forward ${e} pages`,lastPage:`Last page`,loading:`Loading`,locked:`Locked`,minute:`Minute`,month:`Month`,moreOptions:`More Options`,mute:`Mute`,nextDecade:`Next decade`,nextMonth:`Next month`,nextPage:`Next page`,nextSlide:`Next slide`,nextVideo:`Next Video`,nextYear:`Next year`,noData:`No data`,noOptions:`No options`,noResults:`No matching results`,notCompleted:`Not completed`,now:`Now`,numCharacters:e=>e===1?`1 character`:`${e} characters`,numCharactersRemaining:e=>e===1?`1 character remaining`:`${e} characters remaining`,numOptionsAvailable:e=>e===0?`No options available`:e===1?`1 option available`:`${e} options available`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,numRowsCopied:e=>e===1?`1 row copied`:`${e} rows copied`,numRowsSelected:e=>e===1?`1 row selected`:`${e} rows selected`,optionPosition:(e,t,n)=>`${e}, ${t} of ${n}`,optionsLoadError:`Options could not be loaded`,pageXOfY:(e,t)=>`Page ${e} of ${t}`,pagination:`Pagination`,pause:`Pause`,pauseAnimation:`Pause animation`,pictureInPicture:`Picture in picture`,pinLeft:`Pin left`,pinRight:`Pin right`,play:`Play`,playAnimation:`Play animation`,playbackSpeed:`Playback speed`,playlist:`Playlist`,pm:`PM`,previousDecade:`Previous decade`,previousMonth:`Previous month`,previousPage:`Previous page`,previousSlide:`Previous slide`,previousVideo:`Previous video`,previousYear:`Previous year`,progress:`Progress`,rangeTooLong:e=>e===1?`Select a range no longer than 1 day`:`Select a range no longer than ${e} days`,rangeTooShort:e=>e===1?`Select a range at least 1 day long`:`Select a range at least ${e} days long`,readonly:`Read-only`,remove:`Remove`,resetColumns:`Reset columns`,resize:`Resize`,resizeColumn:`Resize column`,rowsPerPage:`Rows per page`,scrollableRegion:`Scrollable region`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,search:`Search`,second:`Second`,seek:`Seek`,seekProgress:(e,t)=>`${e} of ${t}`,selectAColorFromTheScreen:`Select a color from the screen`,selectAllRows:`Select all rows`,selected:`Selected`,selectedDateLabel:e=>`Selected: ${e}`,selectedRangeLabel:e=>`Selected range: ${e}`,selectGroup:`Select group`,selectionCleared:`Selection cleared`,selectRow:`Select row`,showingNofMRows:(e,t)=>`Showing ${e} of ${t} rows`,showingXtoYofZ:(e,t,n)=>`${e}\u2013${t} of ${n}`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,sortAscending:`Sort ascending`,sortColumn:`Sort column`,sortDescending:`Sort descending`,startDate:`Start date`,steps:`Steps`,stepXOfY:(e,t)=>`Step ${e} of ${t}`,tagAdded:e=>`${e} added`,tagAlreadyAdded:e=>`${e} is already added`,tagInputKeyboardHelp:`Press Backspace or Delete to remove this tag.`,tagRemoved:e=>`${e} removed`,time:`Time`,timeInputKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the time picker.`,today:`Today`,toggleColorFormat:`Toggle color format`,tooFewTags:e=>e===1?`Add at least 1 tag`:`Add at least ${e} tags`,tooManyTags:e=>e===1?`Add no more than 1 tag`:`Add no more than ${e} tags`,unmute:`Unmute`,unpin:`Unpin`,unpinColumn:`Unpin column`,videoPlayer:`Video player`,volume:`Volume`,year:`Year`,zoomIn:`Zoom in`,zoomOut:`Zoom out`}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;mn(_n);var vn=_n,yn=class extends gn{lang(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||`en`:super.lang()}};mn(vn);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const bn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},xn=e=>(...t)=>({_$litDirective$:e,values:t});var Sn=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Cn=xn(class extends Sn{constructor(e){if(super(e),e.type!==bn.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=/* @__PURE__ */ new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return Oe}}),wn=e=>e??S,Tn=xn(class extends Sn{constructor(e){
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
if(super(e),e.type!==bn.PROPERTY&&e.type!==bn.ATTRIBUTE&&e.type!==bn.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!It(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===Oe||t===S)return t;let n=e.element,r=e.name;if(e.type===bn.PROPERTY){if(t===n[r])return Oe}else if(e.type===bn.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return Oe}else if(e.type===bn.ATTRIBUTE&&n.getAttribute(r)===t+``)return Oe;return Rt(e),t}});
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var E=class extends tn{constructor(){super(...arguments),this.assumeInteractionOn=[`blur`,`input`],this.hasSlotController=new on(this,`hint`,`label`),this.localize=new yn(this),this.title=``,this.type=`text`,this._value=null,this.defaultValue=this.getAttribute(`value`)||null,this.size=`m`,this.appearance=`outlined`,this.pill=!1,this.label=``,this.hint=``,this.withClear=!1,this.placeholder=``,this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.withoutSpinButtons=!1,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,Qt()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){this._value!==e&&(this.valueHasChanged=!0,this._value=e)}updateFormValue(e){e==null?this.setValue(``,null):super.updateFormValue(e)}handleSizeChange(){an(this.localName,this.size)}handleChange(e){this.value=this.input.value,this.relayNativeEvent(e,{bubbles:!0,composed:!0})}handleClearClick(e){e.preventDefault(),this.value!==``&&(this.value=``,this.updateComplete.then(()=>{this.dispatchEvent(new Wt),this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})),this.input.focus()}handleInput(){this.value=this.input.value}handleKeyDown(e){Gt(e,this)}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}updated(e){super.updated(e),(e.has(`value`)||e.has(`defaultValue`)||e.has(`type`))&&(this.input&&[`number`,`date`,`time`,`datetime-local`].includes(this.type)&&this.value&&this.input.value!==this.value&&(this._value=this.input.value),this.customStates.set(`blank`,!this.value),this.updateValidity())}handleStepChange(){this.input.step=String(this.step),this.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,n=`none`){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,r=`preserve`){let i=t??this.input.selectionStart,a=n??this.input.selectionEnd;this.input.setRangeText(e,i,a,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){`showPicker`in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}formResetCallback(){this.value=null,this.input&&(this.input.value=this.value),super.formResetCallback()}render(){let e=this.hasSlotController.test(`label`,`withLabel`),t=this.hasSlotController.test(`hint`,`withHint`),n=this.label?!0:!!e,r=this.hint?!0:!!t,i=this.withClear&&!this.disabled&&!this.readonly,a=(!this.didSSR||this.hasUpdated)&&i&&(typeof this.value==`number`||this.value&&this.value.length>0);return De`
      <label
        part="form-control-label label"
        class=${Cn({label:!0,"has-label":n})}
        for="input"
        aria-hidden=${n?`false`:`true`}
      >
        <slot name="label">${this.label}</slot>
      </label>

      <div part="base input-wrapper" class="text-field">
        <slot name="start" part="start" class="start"></slot>

        <input
          part="input"
          id="input"
          class="control"
          type=${this.type===`password`&&this.passwordVisible?`text`:this.type}
          title=${this.title}
          name=${wn(this.name)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${wn(this.placeholder)}
          minlength=${wn(this.minlength)}
          maxlength=${wn(this.maxlength)}
          min=${wn(this.min)}
          max=${wn(this.max)}
          step=${wn(this.step)}
          .value=${Tn(this.value??``)}
          autocapitalize=${wn(this.autocapitalize)}
          autocomplete=${wn(this.autocomplete)}
          autocorrect=${this.autocorrect?`on`:`off`}
          ?autofocus=${this.autofocus}
          spellcheck=${this.spellcheck}
          pattern=${wn(this.pattern)}
          enterkeyhint=${wn(this.enterkeyhint)}
          inputmode=${wn(this.inputmode)}
          aria-describedby="hint"
          @change=${this.handleChange}
          @input=${this.handleInput}
          @keydown=${this.handleKeyDown}
        />

        ${a?De`
              <button
                part="clear-button"
                class="clear"
                type="button"
                aria-label=${this.localize.term(`clearEntry`)}
                @click=${this.handleClearClick}
                tabindex="-1"
              >
                <slot name="clear-icon">
                  <wa-icon name="circle-xmark" library="system" variant="regular"></wa-icon>
                </slot>
              </button>
            `:``}
        ${this.passwordToggle&&!this.disabled?De`
              <button
                part="password-toggle-button"
                class="password-toggle"
                type="button"
                aria-label=${this.localize.term(this.passwordVisible?`hidePassword`:`showPassword`)}
                @click=${this.handlePasswordToggle}
              >
                ${this.passwordVisible?De`
                      <slot name="hide-password-icon">
                        <wa-icon name="eye-slash" library="system" variant="regular"></wa-icon>
                      </slot>
                    `:De`
                      <slot name="show-password-icon">
                        <wa-icon name="eye" library="system" variant="regular"></wa-icon>
                      </slot>
                    `}
              </button>
            `:``}

        <slot name="end" part="end" class="end"></slot>
      </div>

      <slot
        id="hint"
        part="hint"
        name="hint"
        class=${Cn({"has-slotted":r})}
        aria-hidden=${r?`false`:`true`}
        >${this.hint}</slot
      >
    `}};E.css=[sn,Zt,Xt],E.shadowRootOptions={...tn.shadowRootOptions,delegatesFocus:!0},C([ct(`input`)],E.prototype,`input`,2),C([w()],E.prototype,`title`,2),C([w({reflect:!0})],E.prototype,`type`,2),C([ot()],E.prototype,`value`,1),C([w({attribute:`value`,reflect:!0})],E.prototype,`defaultValue`,2),C([w({reflect:!0})],E.prototype,`size`,2),C([Ye(`size`)],E.prototype,`handleSizeChange`,1),C([w({reflect:!0})],E.prototype,`appearance`,2),C([w({type:Boolean,reflect:!0})],E.prototype,`pill`,2),C([w()],E.prototype,`label`,2),C([w({attribute:`hint`})],E.prototype,`hint`,2),C([w({attribute:`with-clear`,type:Boolean})],E.prototype,`withClear`,2),C([w()],E.prototype,`placeholder`,2),C([w({type:Boolean,reflect:!0})],E.prototype,`readonly`,2),C([w({attribute:`password-toggle`,type:Boolean})],E.prototype,`passwordToggle`,2),C([w({attribute:`password-visible`,type:Boolean})],E.prototype,`passwordVisible`,2),C([w({attribute:`without-spin-buttons`,type:Boolean,reflect:!0})],E.prototype,`withoutSpinButtons`,2),C([w({type:Boolean,reflect:!0})],E.prototype,`required`,2),C([w()],E.prototype,`pattern`,2),C([w({type:Number})],E.prototype,`minlength`,2),C([w({type:Number})],E.prototype,`maxlength`,2),C([w()],E.prototype,`min`,2),C([w()],E.prototype,`max`,2),C([w()],E.prototype,`step`,2),C([w()],E.prototype,`autocapitalize`,2),C([w({type:Boolean,converter:{fromAttribute:e=>!(!e||e===`off`),toAttribute:e=>e?`on`:`off`}})],E.prototype,`autocorrect`,2),C([w()],E.prototype,`autocomplete`,2),C([w({type:Boolean})],E.prototype,`autofocus`,2),C([w()],E.prototype,`enterkeyhint`,2),C([w({type:Boolean,converter:{fromAttribute:e=>!(!e||e===`false`),toAttribute:e=>e?`true`:`false`}})],E.prototype,`spellcheck`,2),C([w()],E.prototype,`inputmode`,2),C([w({attribute:`with-label`,type:Boolean})],E.prototype,`withLabel`,2),C([w({attribute:`with-hint`,type:Boolean})],E.prototype,`withHint`,2),C([Ye(`step`,{waitUntilFirstUpdate:!0})],E.prototype,`handleStepChange`,1),E=C([rt(`wa-input`)],E),E.disableWarning?.(`change-in-update`);var En=/* @__PURE__ */ t({default:()=>E}),Dn=u`
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1;
  }

  canvas {
    width: 100%;
    height: 100%;
    /* We force a near-instant transition so we can listen for transitionend when the color changes */
    transition: color 1ms;
  }

  span {
    /* We force a near-instant transition so we can listen for transitionend when the color changes */
    transition: color 1ms;
  }
`,On=function(e,t,n){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
},kn=class{static render(e,t,n){On(e,t,n)}};
/*! jquery-qrcode v0.14.0 - https://larsjung.de/jquery-qrcode/ */
(function(e){function t(t,n,r,i){var a=e(r,n);a.addData(t),a.make(),i||=0;var o=a.getModuleCount(),s=a.getModuleCount()+2*i;function c(e,t){return e-=i,t-=i,e<0||e>=o||t<0||t>=o?!1:a.isDark(e,t)}return{text:t,level:n,version:r,moduleCount:s,isDark:c}}function n(e,n,r,i,a){r=Math.max(1,r||1),i=Math.min(40,i||40);for(var o=r;o<=i;o+=1)try{return t(e,n,o,a)}catch{}}function r(e,t,n){n.background&&(t.fillStyle=n.background,t.fillRect(n.left,n.top,n.size,n.size))}function i(e,t,n,r,i,a,o,s,c,l){o?e.moveTo(t+a,n):e.moveTo(t,n);function u(t,n,r,i,o,s,c){t?(e.lineTo(n+s,r+c),e.arcTo(n,r,i,o,a)):e.lineTo(n,r)}u(s,r,n,r,i,-a,0),u(c,r,i,t,i,0,-a),u(l,t,i,t,n,a,0),u(o,t,n,r,n,0,a)}function a(e,t,n,r,i,a,o,s,c,l){function u(t,n,r,i){e.moveTo(t+r,n),e.lineTo(t,n),e.lineTo(t,n+i),e.arcTo(t,n,t+r,n,a)}o&&u(t,n,a,a),s&&u(r,n,-a,a),c&&u(r,i,-a,-a),l&&u(t,i,a,-a)}function o(e,t,n,r,o,s,c,l){var u=e.isDark,d=r+s,f=o+s,p=c-1,m=c+1,h=l-1,g=l+1,_=Math.floor(Math.min(.5,Math.max(0,n.radius))*s),v=u(c,l),y=u(p,h),b=u(p,l),ee=u(p,g),te=u(c,g),ne=u(m,g),re=u(m,l),ie=u(m,h),x=u(c,h);r=Math.round(r),o=Math.round(o),d=Math.round(d),f=Math.round(f),v?i(t,r,o,d,f,_,!b&&!x,!b&&!te,!re&&!te,!re&&!x):a(t,r,o,d,f,_,b&&x&&y,b&&te&&ee,re&&te&&ne,re&&x&&ie)}function s(e,t,n,r){var i=e.moduleCount,a=n.size/i,s=0,l=0;t.beginPath();let u=7+n.quiet;for(s=0;s<i;s+=1)for(l=0;l<i;l+=1)(l<u&&s<u||l>=i-u&&s<u||l<u&&s>=i-u)===r&&o(e,t,n,n.left+l*a,n.top+s*a,a,s,l);c(t,n,r),t.fill()}function c(e,t,n){let r=n&&t.cornerFill||t.fill;if(typeof r==`string`){e.fillStyle=r;return}let i=r.type,a=r.position,o=r.colorStops,s;if(i===`linear-gradient`){let n=a.slice(0,4).map(e=>Math.round(e*t.size));s=e.createLinearGradient.apply(e,n)}else if(i===`radial-gradient`){let n=a.slice(0,6).map(e=>Math.round(e*t.size));s=e.createRadialGradient.apply(e,n)}else throw Error(`Unsupported fill`);o.forEach(([e,t])=>{s.addColorStop(e,t)}),e.fillStyle=s}function l(e,t,i){if(e=n(i.text,i.ecLevel,i.minVersion,i.maxVersion,i.quiet),!e)return null;var a=i.context||t?.getContext(`2d`);return a&&(r(e,a,i),s(e,a,i,!0),s(e,a,i,!1)),t}function u(e,t){var n=document.createElement(`canvas`);return n.width=t.size,n.height=t.size,l(e,n,t)}var d={minVersion:1,maxVersion:40,ecLevel:`L`,left:0,top:0,size:200,fill:`#000`,cornerFill:null,background:null,text:`no text`,radius:.5,quiet:0,image:null,imageEcCover:.5};On=function(e,t,r){var i=Object.assign({},d,e);i.minVersion=i.minVersion,i.maxVersion=i.maxVersion,i.ecLevel=i.ecLevel,i.left=i.left,i.top=i.top,i.size=i.size,i.fill=i.fill,i.background=i.background,i.text=i.text,i.radius=i.radius,i.quiet=i.quiet,i.cornerFill=i.cornerFill||i.fill,i.image=i.image,i.imageBackground=i.imageBackground,i.imageEcCover=i.imageEcCover,i.imagePadding=i.imagePadding;var a=n(i.text,i.ecLevel,i.minVersion,i.maxVersion,i.quiet);if(!a)return;r||=function(){};let o=function(){var e=t;if(t instanceof HTMLCanvasElement){(t.width!==i.size||t.height!==i.size)&&(t.width=i.size,t.height=i.size);let e=t.getContext(`2d`);e&&e.clearRect(0,0,t.width,t.height),l(a,t,i)}else if(i.context)i.context.clearRect(0,0,i.size,i.size),l(a,null,i);else if(a){let n=u(a,i);n&&(e=n,t.appendChild(e))}return e};if(i.image){let e=new Image;e.onload=function(){if(!a)return;let t=i.imageEcCover??d.imageEcCover,n=a.moduleCount-i.quiet*2,s=i.size/n,c=e.naturalWidth/e.naturalHeight,l=i.size*t;l=Math.min(l,l*c);let u=i.size*t;u=Math.min(u,u/c);let f=n*n-172,p={L:.07,M:.15,Q:.25,H:.3}[i.ecLevel]*t*f|0;var m=Math.min(n,Math.sqrt(p*c)|0,l),h=m/c|0;h>n&&(h=n,m=h*c|0),h=Math.min(h,u);let g=a.moduleCount/2-m/2|0,_=a.moduleCount/2-h/2|0,v=a.isDark;a.isDark=function(e,t){return g<=t&&t<g+m&&_<=e&&e<_+h?!1:v(e,t)};let y=Math.min(m,h*c)-i.quiet,b=Math.min(h,m/c)-i.quiet,ee=g+(m-y)/2-i.quiet,te=_+(h-b)/2-i.quiet,ne=ee*s,re=te*s,ie=y*s,x=b*s,ae=o().getContext(`2d`);ae&&(ae.fillStyle=i.imageBackground||`transparent`,ae.fillRect(ne-4,re-4,ie+8,x+8),ae.drawImage(e,ne,re,ie,x)),r()},e.onerror=()=>{o(),r()},e.src=i.image}else o(),r()}})(function(){return function(){function e(e,t){var r=e,a=n[t],u=null,d=0,f=null,p=[],m={},h=function(e,t){d=r*4+17,u=function(e){for(var t=Array(e),n=0;n<e;n+=1){t[n]=Array(e);for(var r=0;r<e;r+=1)t[n][r]=null}return t}(d),g(0,0),g(d-7,0),g(0,d-7),y(),v(),ee(e,t),r>=7&&b(e),f??=re(r,a,p),te(f,t)},g=function(e,t){if(u!=null){for(var n=-1;n<=7;n+=1)if(!(e+n<=-1||d<=e+n))for(var r=-1;r<=7;r+=1)t+r<=-1||d<=t+r||(0<=n&&n<=6&&(r==0||r==6)||0<=r&&r<=6&&(n==0||n==6)||2<=n&&n<=4&&2<=r&&r<=4?u[e+n][t+r]=!0:u[e+n][t+r]=!1)}},_=function(){for(var e=0,t=0,n=0;n<8;n+=1){h(!0,n);var r=i.getLostPoint(m);(n==0||e>r)&&(e=r,t=n)}return t},v=function(){if(u){for(var e=8;e<d-8;e+=1)u[e][6]??(u[e][6]=e%2==0);for(var t=8;t<d-8;t+=1)u[6][t]??(u[6][t]=t%2==0)}},y=function(){if(u)for(var e=i.getPatternPosition(r),t=0;t<e.length;t+=1)for(var n=0;n<e.length;n+=1){var a=e[t],o=e[n];if(u[a][o]==null)for(var s=-2;s<=2;s+=1)for(var c=-2;c<=2;c+=1)u[a+s][o+c]=s==-2||s==2||c==-2||c==2||s==0&&c==0}},b=function(e){if(u){for(var t=i.getBCHTypeNumber(r),n=0;n<18;n+=1){var a=!e&&(t>>n&1)==1;u[Math.floor(n/3)][n%3+d-8-3]=a}for(var n=0;n<18;n+=1){var a=!e&&(t>>n&1)==1;u[n%3+d-8-3][Math.floor(n/3)]=a}}},ee=function(e,t){var n=a<<3|t,r=i.getBCHTypeInfo(n);if(u){for(var o=0;o<15;o+=1){let t=!e&&(r>>o&1)==1;u[o<6?o:o<8?o+1:d-15+o][8]=t,u[8][o<8?d-o-1:o<9?15-o:14-o]=t}u[d-8][8]=!e}},te=function(e,t){for(var n=-1,r=d-1,a=7,o=0,s=i.getMaskFunction(t),c=d-1;c>0;c-=2)for(c==6&&--c;;){for(var l=0;l<2;l+=1)if(u&&u[r][c-l]==null){var f=!1;o<e.length&&(f=(e[o]>>>a&1)==1),s(r,c-l)&&(f=!f),u[r][c-l]=f,--a,a==-1&&(o+=1,a=7)}if(r+=n,r<0||d<=r){r-=n,n=-n;break}}},ne=function(e,t){for(var n=0,r=0,a=0,s=Array(t.length),c=Array(t.length),l=0;l<t.length;l+=1){var u=t[l].dataCount,d=t[l].totalCount-u;r=Math.max(r,u),a=Math.max(a,d),s[l]=Array(u);for(var f=0;f<s[l].length;f+=1)s[l][f]=255&e.getBuffer()[f+n];n+=u;var p=i.getErrorCorrectPolynomial(d),m=o(s[l],p.getLength()-1).mod(p);c[l]=Array(p.getLength()-1);for(var f=0;f<c[l].length;f+=1){var h=f+m.getLength()-c[l].length;c[l][f]=h>=0?m.getAt(h):0}}for(var g=0,f=0;f<t.length;f+=1)g+=t[f].totalCount;for(var _=Array(g),v=0,f=0;f<r;f+=1)for(var l=0;l<t.length;l+=1)f<s[l].length&&(_[v]=s[l][f],v+=1);for(var f=0;f<a;f+=1)for(var l=0;l<t.length;l+=1)f<c[l].length&&(_[v]=c[l][f],v+=1);return _},re=function(e,t,n){for(var r=s.getRSBlocks(e,t),a=c(),o=0;o<n.length;o+=1){var l=n[o];a.put(l.getMode(),4),a.put(l.getLength(),i.getLengthInBits(l.getMode(),e)),l.write(a)}for(var u=0,o=0;o<r.length;o+=1)u+=r[o].dataCount;if(a.getLengthInBits()>u*8)throw Error(`code length overflow. (`+a.getLengthInBits()+`>`+u*8+`)`);for(a.getLengthInBits()+4<=u*8&&a.put(0,4);a.getLengthInBits()%8!=0;)a.putBit(!1);for(;!(a.getLengthInBits()>=u*8||(a.put(236,8),a.getLengthInBits()>=u*8));)a.put(17,8);return ne(a,r)};return m.addData=function(e){var t=l(e);p.push(t),f=null},m.isDark=function(e,t){if(!u)throw Error(`_modules is null`);if(e<0||d<=e||t<0||d<=t)throw Error(e+`,`+t);return u[e][t]},m.getModuleCount=function(){return d},m.make=function(){h(!1,_())},m}e.stringToBytes=function(e){return new TextEncoder().encode(e)};var t={MODE_8BIT_BYTE:4},n={L:1,M:0,Q:3,H:2},r={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},i=function(){var e=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],n=1335,i=7973,s=21522,c={},l=function(e){for(var t=0;e!=0;)t+=1,e>>>=1;return t};return c.getBCHTypeInfo=function(e){for(var t=e<<10;l(t)-l(n)>=0;)t^=n<<l(t)-l(n);return(e<<10|t)^s},c.getBCHTypeNumber=function(e){for(var t=e<<12;l(t)-l(i)>=0;)t^=i<<l(t)-l(i);return e<<12|t},c.getPatternPosition=function(t){return e[t-1]},c.getMaskFunction=function(e){switch(e){case r.PATTERN000:return function(e,t){return(e+t)%2==0};case r.PATTERN001:return function(e,t){return e%2==0};case r.PATTERN010:return function(e,t){return t%3==0};case r.PATTERN011:return function(e,t){return(e+t)%3==0};case r.PATTERN100:return function(e,t){return(Math.floor(e/2)+Math.floor(t/3))%2==0};case r.PATTERN101:return function(e,t){return e*t%2+e*t%3==0};case r.PATTERN110:return function(e,t){return(e*t%2+e*t%3)%2==0};case r.PATTERN111:return function(e,t){return(e*t%3+(e+t)%2)%2==0};default:throw Error(`bad maskPattern:`+e)}},c.getErrorCorrectPolynomial=function(e){for(var t=o([1],0),n=0;n<e;n+=1)t=t.multiply(o([1,a.gexp(n)],0));return t},c.getLengthInBits=function(e,n){if(e!=t.MODE_8BIT_BYTE||n<1||n>40)throw Error(`mode: `+e+`; type: `+n);return n<10?8:16},c.getLostPoint=function(e){for(var t=e.getModuleCount(),n=0,r=0;r<t;r+=1)for(var i=0;i<t;i+=1){for(var a=0,o=e.isDark(r,i),s=-1;s<=1;s+=1)if(!(r+s<0||t<=r+s))for(var c=-1;c<=1;c+=1)i+c<0||t<=i+c||(s!=0||c!=0)&&o==e.isDark(r+s,i+c)&&(a+=1);a>5&&(n+=3+a-5)}for(var r=0;r<t-1;r+=1)for(var i=0;i<t-1;i+=1){var l=0;e.isDark(r,i)&&(l+=1),e.isDark(r+1,i)&&(l+=1),e.isDark(r,i+1)&&(l+=1),e.isDark(r+1,i+1)&&(l+=1),(l==0||l==4)&&(n+=3)}for(var r=0;r<t;r+=1)for(var i=0;i<t-6;i+=1)e.isDark(r,i)&&!e.isDark(r,i+1)&&e.isDark(r,i+2)&&e.isDark(r,i+3)&&e.isDark(r,i+4)&&!e.isDark(r,i+5)&&e.isDark(r,i+6)&&(n+=40);for(var i=0;i<t;i+=1)for(var r=0;r<t-6;r+=1)e.isDark(r,i)&&!e.isDark(r+1,i)&&e.isDark(r+2,i)&&e.isDark(r+3,i)&&e.isDark(r+4,i)&&!e.isDark(r+5,i)&&e.isDark(r+6,i)&&(n+=40);for(var u=0,i=0;i<t;i+=1)for(var r=0;r<t;r+=1)e.isDark(r,i)&&(u+=1);var d=Math.abs(100*u/t/t-50)/5;return n+=d*10,n},c}(),a=function(){for(var e=Array(256),t=Array(256),n=0;n<8;n+=1)t[n]=1<<n;for(var n=8;n<256;n+=1)t[n]=t[n-4]^t[n-5]^t[n-6]^t[n-8];for(var n=0;n<255;n+=1)e[t[n]]=n;var r={};return r.glog=function(t){if(t<1)throw Error(`glog(`+t+`)`);return e[t]},r.gexp=function(e){for(;e<0;)e+=255;for(;e>=256;)e-=255;return t[e]},r}();function o(e,t){if(e.length===void 0)throw Error(e.length+`/`+t);var n=function(){for(var n=0;n<e.length&&e[n]==0;)n+=1;for(var r=Array(e.length-n+t),i=0;i<e.length-n;i+=1)r[i]=e[i+n];return r}(),r={};return r.getAt=function(e){return n[e]},r.getLength=function(){return n.length},r.multiply=function(e){for(var t=Array(r.getLength()+e.getLength()-1),n=0;n<r.getLength();n+=1)for(var i=0;i<e.getLength();i+=1)t[n+i]^=a.gexp(a.glog(r.getAt(n))+a.glog(e.getAt(i)));return o(t,0)},r.mod=function(e){if(r.getLength()-e.getLength()<0)return r;for(var t=a.glog(r.getAt(0))-a.glog(e.getAt(0)),n=Array(r.getLength()),i=0;i<r.getLength();i+=1)n[i]=r.getAt(i);for(var i=0;i<e.getLength();i+=1)n[i]^=a.gexp(a.glog(e.getAt(i))+t);return o(n,0).mod(e)},r}var s=function(){var e=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],t=function(e,t){var n={};return n.totalCount=e,n.dataCount=t,n},r={},i=function(t,r){switch(r){case n.L:return e[(t-1)*4+0];case n.M:return e[(t-1)*4+1];case n.Q:return e[(t-1)*4+2];case n.H:return e[(t-1)*4+3];default:return}};return r.getRSBlocks=function(e,n){var r=i(e,n);if(r===void 0)throw Error(`bad rs block @ typeNumber:`+e+`/errorCorrectLevel:`+n);for(var a=r.length/3,o=[],s=0;s<a;s+=1)for(var c=r[s*3+0],l=r[s*3+1],u=r[s*3+2],d=0;d<c;d+=1)o.push(t(l,u));return o},r}(),c=function(){var e=[],t=0,n={};return n.getBuffer=function(){return e},n.getAt=function(t){return(e[Math.floor(t/8)]>>>7-t%8&1)==1},n.put=function(e,t){for(var r=0;r<t;r+=1)n.putBit((e>>>t-r-1&1)==1)},n.getLengthInBits=function(){return t},n.putBit=function(n){var r=Math.floor(t/8);e.length<=r&&e.push(0),n&&(e[r]|=128>>>t%8),t+=1},n},l=function(n){var r=t.MODE_8BIT_BYTE,i=e.stringToBytes(n),a={};return a.getMode=function(){return r},a.getLength=function(e){return i.length},a.write=function(e){for(var t=0;t<i.length;t+=1)e.put(i[t],8)},a};return e}()}());
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const An=xn(class extends Sn{constructor(e){if(super(e),e.type!==bn.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(` !important`);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?`important`:``):n[e]=r}}return Oe}});
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var D=class extends mt{constructor(){super(...arguments),this.value=``,this.label=``,this.size=128,this.fill=``,this.background=``,this.radius=0,this.errorCorrection=`H`,this.image=null,this.imageBackground=null,this.imageCoverage=null,this.imagePadding=null,this.computedStyle=null}updated(e){super.updated(e),this.generate()}generate(){if(!this.hasUpdated)return;this.canvas.style.maxWidth=`${this.size}px`,this.canvas.style.maxHeight=`${this.size}px`,this.computedStyle||=getComputedStyle(this);let e=this.computedStyle,t=this.shadowRoot?.querySelector(`span`);t&&(this.spanComputedStyle||=getComputedStyle(t)),kn.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill||e.color,background:this.background||null,size:this.size*2,image:this.image,imageEcCover:this.imageCoverage,imagePadding:this.imagePadding,imageBackground:this.imageBackground||this.background,cornerFill:this.spanComputedStyle?.color},this.canvas)}render(){return De`
      <canvas
        part="base qr-code"
        class="qr-code"
        role="img"
        aria-label=${this.label?.length>0?this.label:this.value}
        style=${An({maxWidth:`${this.size}px`,maxHeight:`${this.size}px`,minWidth:`${this.size}px`,minHeight:`${this.size}px`})}
        @transitionend=${e=>{e.propertyName===`color`&&this.generate()}}
      >
        <span style="color: var(--corner-color);"></span>
      </canvas>
    `}};D.css=Dn,C([ct(`canvas`)],D.prototype,`canvas`,2),C([w()],D.prototype,`value`,2),C([w()],D.prototype,`label`,2),C([w({type:Number})],D.prototype,`size`,2),C([w()],D.prototype,`fill`,2),C([w()],D.prototype,`background`,2),C([w({type:Number})],D.prototype,`radius`,2),C([w({attribute:`error-correction`})],D.prototype,`errorCorrection`,2),C([w()],D.prototype,`image`,2),C([w({attribute:`image-background`})],D.prototype,`imageBackground`,2),C([w({attribute:`image-coverage`,type:Number})],D.prototype,`imageCoverage`,2),C([w({attribute:`image-padding`,type:Number})],D.prototype,`imagePadding`,2),D=C([rt(`wa-qr-code`)],D);var jn=/* @__PURE__ */ t({default:()=>D}),O
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;Object.getOwnPropertyDescriptors||(()=>{var e;if(typeof Reflect<`u`&&Reflect.ownKeys)e=Reflect.ownKeys;else{var t=Object.getOwnPropertySymbols||(e=>[]);e=(e=>Object.getOwnPropertyNames(e).concat(t(e)))}return(t=>{for(var n=e(t),r={},i=n.length|0,a=0;a!==i;){var o=n[a];Object.defineProperty(r,o,{configurable:!0,enumerable:!0,writable:!0,value:Object.getOwnPropertyDescriptor(t,o)}),a=a+1|0}return r})})();function Mn(e){this.c=e}O=Mn.prototype,O.toString=(function(){return String.fromCharCode(this.c)});function Nn(e,t){this.l=e,this.h=t}O=Nn.prototype,O.toString=(function(){return To(this.l,this.h)});function Pn(e){switch(typeof e){case`string`:return ip.l();case`number`:return Yn(e)?e<<24>>24===e?Ed.l():e<<16>>16===e?Ld.l():Xf.l():Xn(e)?Yf.l():Jf.l();case`boolean`:return Ou.l();case`undefined`:return _o.l();default:return e instanceof Nn?$f.l():e instanceof Mn?ju.l():e&&e.$classData?e.$classData.l():null}}function Fn(e){switch(typeof e){case`string`:return`java.lang.String`;case`number`:return Yn(e)?e<<24>>24===e?`java.lang.Byte`:e<<16>>16===e?`java.lang.Short`:`java.lang.Integer`:Xn(e)?`java.lang.Float`:`java.lang.Double`;case`boolean`:return`java.lang.Boolean`;case`undefined`:return`java.lang.Void`;default:return e instanceof Nn?`java.lang.Long`:e instanceof Mn?`java.lang.Character`:e&&e.$classData?e.$classData.N:null.ke()}}function In(e,t){switch(typeof e){case`string`:return np(e,t);case`number`:return Kf(e,t);case`boolean`:return Eu(e,t);case`undefined`:return mo(e,t);default:return e&&e.$classData||e===null?e.d(t):e instanceof Nn?Zf(e.l,e.h,t):e instanceof Mn?Au(e.c,t):tr.prototype.d.call(e,t)}}function Ln(e){switch(typeof e){case`string`:return tp(e);case`number`:return qf(e);case`boolean`:return Du(e);case`undefined`:return ho(e);default:return e&&e.$classData||e===null?e.j():e instanceof Nn?Qf(e.l,e.h):e instanceof Mn?ku(e.c):tr.prototype.j.call(e)}}function Rn(e){return e===void 0?`undefined`:e.toString()}function zn(e){if(e===0)throw new Td(`/ by zero`);return e}function Bn(e){return e>2147483647?2147483647:e<-2147483648?-2147483648:e|0}function Vn(e){return String.fromCharCode(e)}var Hn=/* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(8));function Un(e,t,n,r,i){if(e!==n||r-t>>>0>i>>>0)for(var a=0;a<i;a=a+1|0)n[r+a|0]=e[t+a|0];else for(var a=i-1|0;a>=0;a=a-1|0)n[r+a|0]=e[t+a|0]}var Wn=0,Gn=/* @__PURE__ */ new WeakMap;function Kn(e){switch(typeof e){case`string`:return tp(e);case`number`:return qf(e);case`bigint`:var t=0;for(e<BigInt(0)&&(e=~e);e!==BigInt(0);)t^=Number(BigInt.asIntN(32,e)),e>>=BigInt(32);return t;case`boolean`:return e?1231:1237;case`undefined`:return 0;case`symbol`:var n=e.description;return n===void 0?0:tp(n);default:if(e===null)return 0;var r=Gn.get(e);return r===void 0&&(r=Wn+1|0,Wn=r,Gn.set(e,r)),r}}function qn(e){return typeof e==`number`&&e<<24>>24===e&&1/e!=-1/0}function Jn(e){return typeof e==`number`&&e<<16>>16===e&&1/e!=-1/0}function Yn(e){return typeof e==`number`&&(e|0)===e&&1/e!=-1/0}function Xn(e){return typeof e==`number`&&(e!==e||Math.fround(e)===e)}function Zn(e){return new Mn(e)}Zn(0);function k(e,t){return new Nn(e,t)}var Qn=k(0,0);function $n(e){return e===null?0:e.c}function er(e){return e===null?Qn:e}function tr(){}O=tr.prototype,O.constructor=tr;function A(){}A.prototype=O,O.j=(function(){return Kn(this)}),O.d=(function(e){return this===e}),O.k=(function(){var e=this.j();return Fn(this)+`@`+(e>>>0).toString(16)}),O.toString=(function(){return this.k()});function j(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}O=j.prototype=new A,O.constructor=j,O.a7=(function(e,t,n,r){Un(this.a,e,t.a,n,r)}),O.ac=(function(){return new j(this.a.slice())});function nr(){}nr.prototype=O;function rr(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=!1}else this.a=e}O=rr.prototype=new A,O.constructor=rr,O.a7=(function(e,t,n,r){Un(this.a,e,t.a,n,r)}),O.ac=(function(){return new rr(this.a.slice())});function ir(e){this.a=typeof e==`number`?new Uint16Array(e):e}O=ir.prototype=new A,O.constructor=ir,O.a7=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),O.ac=(function(){return new ir(this.a.slice())});function ar(e){this.a=typeof e==`number`?new Int8Array(e):e}O=ar.prototype=new A,O.constructor=ar,O.a7=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),O.ac=(function(){return new ar(this.a.slice())});function or(e){this.a=typeof e==`number`?new Int16Array(e):e}O=or.prototype=new A,O.constructor=or,O.a7=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),O.ac=(function(){return new or(this.a.slice())});function sr(e){this.a=typeof e==`number`?new Int32Array(e):e}O=sr.prototype=new A,O.constructor=sr,O.a7=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),O.ac=(function(){return new sr(this.a.slice())});function cr(e){typeof e==`number`?(e<<=1,this.a=new Int32Array(e)):this.a=e}O=cr.prototype=new A,O.constructor=cr,O.a7=(function(e,t,n,r){t.a.set(this.a.subarray(e<<1,(e+r|0)<<1),n<<1)}),O.ac=(function(){return new cr(this.a.slice())});function lr(e){this.a=typeof e==`number`?new Float32Array(e):e}O=lr.prototype=new A,O.constructor=lr,O.a7=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),O.ac=(function(){return new lr(this.a.slice())});function ur(e){this.a=typeof e==`number`?new Float64Array(e):e}O=ur.prototype=new A,O.constructor=ur,O.a7=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),O.ac=(function(){return new ur(this.a.slice())});function M(){this.C=void 0,this.n=null,this.O=null,this.B=null,this.D=0,this.z=null,this.E=``,this.L=void 0,this.A=void 0,this.F=void 0,this.w=void 0,this.J=!1,this.N=``,this.X=!1,this.Y=!1,this.Z=!1,this.I=void 0}O=M.prototype,O.p=(function(e,t,n,r,i){this.n={},this.z=e,this.E=t;var a=this;return this.F=(e=>e===a),this.N=n,this.X=!0,this.I=(e=>!1),r!==void 0&&(this.A=new M().y(this,r,i,t===`J`)),this}),O.i=(function(e,t,n,r){var i=Object.getOwnPropertyNames(n)[0];return this.n=n,this.E=`L`+t+`;`,this.F=(e=>!!e.n[i]),this.J=e===2,this.N=t,this.Y=e===1,this.I=r||(e=>!!(e&&e.$classData&&e.$classData.n[i])),typeof e!=`number`&&(e.prototype.$classData=this),this}),O.y=(function(e,t,n,r,i){t.prototype.$classData=this;var a=`[`+e.E;this.C=t,this.n={s:1,a:1},this.O=e,this.B=e,this.D=1,this.E=a,this.N=a,this.Z=!0;var o=this;return this.F=i||(e=>o===e),this.w=r?(e=>{for(var n=e.length|0,r=new t(n),i=r.a,a=0;a<n;a=a+1|0){var o=e[a];i[a<<1]=o.l,i[(a<<1)+1|0]=o.h}return r}):n?(e=>new t(new n(e))):(e=>new t(e)),this.I=(e=>e instanceof t),this}),O.a=(function(e){function t(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}var n=t.prototype=new nr;n.constructor=t,n.a7=(function(e,t,n,r){Un(this.a,e,t.a,n,r)}),n.ac=(function(){return new t(this.a.slice())}),n.$classData=this;var r=e.B||e,i=e.D+1,a=`[`+e.E;this.C=t,this.n={s:1,a:1},this.O=e,this.B=r,this.D=i,this.E=a,this.N=a,this.Z=!0;var o=(e=>{var t=e.D;return t===i?r.F(e.B):t>i&&r===dr});this.F=o,this.w=(e=>new t(e));var s=this;return this.I=(e=>{var t=e&&e.$classData;return!!t&&(t===s||o(t))}),this}),O.r=(function(){return this.A||=new M().a(this),this.A}),O.l=(function(){return this.L||=new Fl(this),this.L}),O.R=(function(e){return this===e||this.F(e)}),O.S=(function(){return this.P?this.P.l():null}),O.Q=(function(){return this.O?this.O.l():null}),O.U=(function(e){if(this===fr)throw Od(new kd);return new(this.r()).C(e)});var dr=new M;dr.n={},dr.E=`Ljava.lang.Object;`,dr.F=(e=>!e.X),dr.N=`java.lang.Object`,dr.I=(e=>e!==null),dr.A=new M().y(dr,j,void 0,!1,(e=>{var t=e.D;return t===1?!e.B.X:t>1})),tr.prototype.$classData=dr;var fr=new M().p(void 0,`V`,`void`,void 0,void 0),pr=new M().p(!1,`Z`,`boolean`,rr,void 0),mr=new M().p(0,`C`,`char`,ir,Uint16Array),hr=new M().p(0,`B`,`byte`,ar,Int8Array),gr=new M().p(0,`S`,`short`,or,Int16Array),_r=new M().p(0,`I`,`int`,sr,Int32Array),vr=new M().p(Qn,`J`,`long`,cr,Int32Array),yr=new M().p(0,`F`,`float`,lr,Float32Array),br=new M().p(0,`D`,`double`,ur,Float64Array);new Int8Array(new Int32Array([1]).buffer)[0];function xr(e,t,n){for(var r=new Int32Array(e),i=t.length|0,a=0,o=0,s=0,c=0;o!==i;){var l=t.charCodeAt(o);l<80?c=(c|l-48)<<5:(c|=l-93,a=(a&n)+c|0,r[s]=a,s=s+1|0,c=0),o=o+1|0}return r}function Sr(e,t){return new sr(xr(e,t,-1))}var Cr=new M().i(1,`com.raquo.airstream.core.InternalObserver`,{bK:1});function wr(e){return Pn(e).dE()+`@`+e.j()}function Tr(e){var t=e.cC();return t===void 0?e.cw():t}function Er(){Dr=this,Or().hk(new q((e=>void 0)),Go().cm,!0)}O=Er.prototype=new A,O.constructor=Er,O.hk=(function(e,t,n){return new gu(e,n,t,this)}),O.iM=(function(e,t){return new _u(e,t,this)}),new M().i(Er,`com.raquo.airstream.core.Observer$`,{bM:1});var Dr;function Or(){return Dr||=new Er,Dr}function kr(){}O=kr.prototype=new A,O.constructor=kr,O.jH=(function(e,t){var n=e.indexOf(t)|0,r=n!==-1;return r&&e.splice(n,1),r}),new M().i(kr,`com.raquo.airstream.core.ObserverList$`,{bP:1});var Ar;function jr(){return Ar||=new kr,Ar}function Mr(){this.b2=0,this.b2=0}O=Mr.prototype=new A,O.constructor=Mr,O.h8=(function(){return this.b2=this.b2===2147483647?1:1+this.b2|0,this.b2}),new M().i(Mr,`com.raquo.airstream.core.Signal$`,{bR:1});var Nr;function Pr(){return Nr||=new Mr,Nr}function Fr(e){this.cQ=null,this.dX=null,this.cR=0,this.cQ=e,this.dX=void 0;var t=Zr().bZ();this.cR=t===void 0?1:1+t.cR|0,zr().c2===-1||this.cR>zr().c2?U().a2(new Rf(this,zr().c2)):Ur().B?Ur().aO.push(this)|0:Zr().dx(this)}O=Fr.prototype=new A,O.constructor=Fr;var Ir=new M().i(Fr,`com.raquo.airstream.core.Transaction`,{bS:1});function Lr(){this.c2=0,this.dY=null,Rr=this,this.c2=1e3,this.dY=new q((e=>{throw Il(new W,`Attempted to run Transaction `+e+` after it was already executed.`)}))}O=Lr.prototype=new A,O.constructor=Lr,O.gF=(function(e){try{e.cQ.b(e);var t=e.dX;if(t!==void 0)for(;t.kh();)t.kd().kj(e)}catch(e){var n=e instanceof Lc?e:new Z(e);U().a2(n)}}),new M().i(Lr,`com.raquo.airstream.core.Transaction$`,{bT:1});var Rr;function zr(){return Rr||=new Lr,Rr}function Br(e){e.c3.length|0?new Fr(new q((t=>{for(;(e.c3.length|0)>0;){var n=e.c3.shift();try{n.b(t)}catch(e){var r=e instanceof Lc?e:new Z(e);U().a2(r)}}for(;(e.aO.length|0)>0;){var i=e.aO.shift();Zr().dx(i)}}))):(e.aO.length|0)>0&&new Fr(new q((t=>{for(;(e.aO.length|0)>0;)Zr().dx(e.aO.shift())})))}function Vr(){this.B=!1,this.c3=null,this.aO=null,Hr=this,this.B=!1,this.c3=N().x(L().w(new(Lo.r()).C([]))),this.aO=N().x(L().w(new(Ir.r()).C([])))}O=Vr.prototype=new A,O.constructor=Vr,new M().i(Vr,`com.raquo.airstream.core.Transaction$onStart$`,{bU:1});var Hr;function Ur(){return Hr||=new Vr,Hr}function Wr(e,t){return e.aP.get(t)}function Gr(e,t){e.c4.unshift(t)}function Kr(e){return e.c4.shift()}function qr(e,t,n){var r=Wr(e,t),i=r===void 0,a=r===void 0?N().x(L().w(new(Ir.r()).C([]))):r;a.push(n),i&&e.aP.set(t,a)}function Jr(e,t){var n=Wr(e,t),r=n===void 0||(n.length|0)>0?n:void 0;if(r!==void 0){var i=r.shift();return r.length|0||e.aP.delete(t),i}}function Yr(){this.c4=null,this.aP=null,Xr=this,this.c4=N().x(L().w(new(Ir.r()).C([]))),this.aP=/* @__PURE__ */ new Map}O=Yr.prototype=new A,O.constructor=Yr,O.dx=(function(e){var t=this.bZ();t===void 0?(Gr(this,e),zr().gF(e),this.io(e)):qr(this,t,e)}),O.io=(function(e){for(var t=e;;){var n=this.bZ(),r=t;if(!(n!==void 0&&vs().y(r,n)))throw Il(new W,`Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.`);this.jz(t),t.cQ=zr().dY;var i=this.bZ();if(vs().y(i,void 0)){if((this.aP.size|0)>0){var a=new tl(0);throw this.aP.forEach((e=>((t,n)=>{e.bF=e.bF+(t.length|0)|0}))(a)),Il(new W,`Transaction queue error: Stack cleared, but a total of `+a.bF+` children for `+(this.aP.size|0)+` transactions remain. This is a bug in Airstream.`)}return}zr().gF(i),t=i}}),O.jz=(function(e){for(var t=e;;){var n=Jr(this,t);if(vs().y(n,void 0)){Kr(this);var r=this.bZ();if(!vs().y(r,void 0))t=r;else return}else{Gr(this,n);return}}}),O.bZ=(function(){return this.c4[0]}),new M().i(Yr,`com.raquo.airstream.core.Transaction$pendingTransactions$`,{bV:1});var Xr;function Zr(){return Xr||=new Yr,Xr}function Qr(e,t){var n=e.ap.indexOf(t)|0;if(n!==-1)e.ap.splice(n,1),e.F.c()||t.ha();else throw Il(new W,`Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?`)}function $r(e){for(;(e.c5.length|0)>0;)Qr(e,e.c5.shift())}function ei(e){this.dZ=null,this.ap=null,this.b3=!1,this.c5=null,this.F=null,this.b4=0,this.dZ=e,this.ap=N().x(L().w(new(ni.r()).C([]))),this.b3=!0,this.c5=N().x(L().w(new(ni.r()).C([]))),this.F=Y(),this.b4=0}O=ei.prototype=new A,O.constructor=ei,O.gw=(function(){if(this.F.c()){var e=Ur(),t=(()=>{var e=new Us(this.dZ);this.F=new sp(e),this.b3=!1,this.b4=0;for(var t=0,n=this.ap.length|0;t<n;){var r=t+this.b4|0;this.ap[r].h9(e),t=1+t|0}$r(this),this.b3=!0,this.b4=0});if(Ur(),e.B)t();else{e.B=!0;try{t()}finally{e.B=!1,Br(e)}}}else throw Il(new W,`Can not activate `+this+`: it is already active`)}),O.ig=(function(){if(this.F.c())throw Il(new W,`Can not deactivate DynamicOwner: it is not active`);this.b3=!1;for(var e=this.ap,t=0,n=e.length|0;t<n;)e[t].ha(),t=1+t|0;$r(this);var r=this.F;r.c()||r.r().jd(),$r(this),this.b3=!0,this.F=Y()}),O.hL=(function(e,t){t?(this.b4=1+this.b4|0,this.ap.unshift(e)):this.ap.push(e);var n=this.F;if(!n.c()){var r=n.r();e.h9(r)}}),O.jI=(function(e){this.b3?Qr(this,e):this.c5.push(e)}),new M().i(ei,`com.raquo.airstream.ownership.DynamicOwner`,{bY:1});function ti(e,t,n){this.c6=null,this.e0=null,this.c7=null,this.c6=e,this.e0=t,this.c7=Y(),e.hL(this,n)}O=ti.prototype=new A,O.constructor=ti,O.cA=(function(){this.c6.jI(this)}),O.h9=(function(e){var t=Ur(),n=(()=>{this.c7=this.e0.b(e)});if(Ur(),t.B)n();else{t.B=!0;try{n()}finally{t.B=!1,Br(t)}}}),O.ha=(function(){var e=this.c7;e.c()||(e.r().cA(),this.c7=Y())});var ni=new M().i(ti,`com.raquo.airstream.ownership.DynamicSubscription`,{bZ:1});function ri(){}O=ri.prototype=new A,O.constructor=ri,O.cM=(function(e,t,n){return new ti(e,new q((e=>new sp(t.b(e)))),n)}),O.hh=(function(e,t,n){return new ti(e,new q((e=>(t.b(e),Y()))),n)}),O.jW=(function(e,t,n){return ai().cM(e,new q((e=>cl(t,n,e))),!1)}),new M().i(ri,`com.raquo.airstream.ownership.DynamicSubscription$`,{c0:1});var ii;function ai(){return ii||=new ri,ii}function oi(e){e.b5=N().x(L().w(new(fi.r()).C([])))}function si(e){for(var t=e.b5,n=0,r=t.length|0;n<r;)ui(t[n]),n=1+n|0;e.b5.length=0}function ci(e,t){var n=e.b5.indexOf(t)|0;if(n!==-1)e.b5.splice(n,1);else throw Il(new W,`Can not remove Subscription from Owner: subscription not found.`)}function li(e,t){e.b5.push(t)}function ui(e){if(!e.cT)e.e2.K(),e.cT=!0;else throw Il(new W,`Can not kill Subscription: it was already killed.`)}function di(e,t){this.e3=null,this.e2=null,this.cT=!1,this.e3=e,this.e2=t,this.cT=!1,e.jw(this)}O=di.prototype=new A,O.constructor=di,O.cA=(function(){ui(this),ci(this.e3,this)});var fi=new M().i(di,`com.raquo.airstream.ownership.Subscription`,{c3:1});function pi(e,t){this.e4=null,this.e5=null,this.aq=null,this.aQ=!1,this.e4=e,this.e5=t,this.aq=Y(),this.aQ=!1}O=pi.prototype=new A,O.constructor=pi,O.j8=(function(){var e=this.aq;return!e.c()&&!e.r().c6.F.c()}),O.jP=(function(e){if(this.aQ)throw Il(new W,`Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var t=this.aq;if(t.c())var n=!1;else var r=t.r().c6,n=e===null?r===null:e===r;if(!n){this.j8()&&!e.F.c()&&(this.aQ=!0);var i=this.aq;i.c()||(i.r().cA(),this.aq=Y());var a=ai().cM(e,new q((e=>(this.aQ||this.e4.K(),new di(e,new Zu((()=>{this.aQ||this.e5.K()})))))),!1);this.aq=new sp(a),this.aQ=!1}}),O.i8=(function(){if(this.aQ)throw Il(new W,`Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var e=this.aq;e.c()||e.r().cA(),this.aq=Y()}),new M().i(pi,`com.raquo.airstream.ownership.TransferableSubscription`,{c4:1});function mi(){}O=mi.prototype=new A,O.constructor=mi,O.hU=(function(e){return new Bf(new Ff(e))}),new M().i(mi,`com.raquo.airstream.state.Var$`,{c8:1});var hi;function gi(){return hi||=new mi,hi}function _i(){}O=_i.prototype=new A,O.constructor=_i,O.x=(function(e){return[...Fs().k1(e)]}),new M().i(_i,`com.raquo.ew.JsArray$`,{cb:1});var vi;function N(){return vi||=new _i,vi}function yi(){}O=yi.prototype=new A,O.constructor=yi,O.j3=(function(e,t,n){return(e.indexOf(t,n)|0)!=-1}),O.iH=(function(e,t){for(var n=0,r=e.length|0;n<r;)t(e[n]),n=1+n|0}),new M().i(yi,`com.raquo.ew.JsArray$RichJsArray$`,{cc:1});var bi;function xi(){return bi||=new yi,bi}function Si(){this.eb=null,Ci=this,document.createElement(`template`),this.ie(K().o.jX().jY()),this.eb=/* @__PURE__ */ RegExp(` `,`g`)}O=Si.prototype=new A,O.constructor=Si,O.hR=(function(e,t){try{return e.appendChild(t),!0}catch(e){var n=e instanceof Lc?e:new Z(e);if(n instanceof Z&&n.X instanceof DOMException)return!1;throw n instanceof Z?n.X:n}}),O.ja=(function(e,t){for(var n=e;;){if(n.parentNode!==null)var r=n.parentNode;else var i=n.host,r=i===void 0?null:i;if(r===null)return!1;if(vs().y(t,r))return!0;n=r}}),O.hE=(function(e,t){e.addEventListener(t.b7.bl.cf,t.d6,t.d7)}),O.jF=(function(e,t){e.removeEventListener(t.b7.bl.cf,t.d6,t.d7)}),O.id=(function(e){return document.createElement(e.dG())}),O.iO=(function(e,t){var n=this.iP(e,t);return n===void 0?void 0:t.cg.bT(n)}),O.iP=(function(e,t){var n=e.u.getAttributeNS(null,t.b6);return n===null?void 0:n}),O.dM=(function(e,t,n){this.jN(e,t,t.cg.aW(n))}),O.jN=(function(e,t,n){n===null?this.jG(e,t):e.u.setAttribute(t.b6,n)}),O.jG=(function(e,t){e.u.removeAttribute(t.b6)}),O.iQ=(function(e,t){return e.u[t.a9]}),O.jO=(function(e,t,n){this.hf(e,t,t.d3.aW(n))}),O.hf=(function(e,t,n){e.u[t.a9]=n}),O.hg=(function(e,t,n){var r=e.u,i=t.ar,a=t.as,o=n===null?null:n;o===null?(a.a0(new q((e=>r.style.removeProperty(``+e+i)))),r.style.removeProperty(i)):(a.a0(new q((e=>{r.style.setProperty(``+e+i,o)}))),r.style.setProperty(i,o))}),O.ie=(function(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e.fh)}),O.iT=(function(e,t){var n=this.iU(e,t);return n===void 0?void 0:t.d4.bT(n)}),O.iU=(function(e,t){var n=e.dJ(),r=t.ci,i=n.getAttributeNS(r.c()?null:r.r(),t.d5);return i===null?void 0:i}),O.jQ=(function(e,t,n){this.jR(e,t,t.d4.aW(n))}),O.jR=(function(e,t,n){if(n===null)this.jJ(e,t);else{var r=t.ci;if(r.c())e.dJ().setAttribute(t.ch,n);else{var i=r.r();e.dJ().setAttributeNS(i,t.ch,n)}}}),O.jJ=(function(e,t){var n=e.dJ(),r=t.ci;n.removeAttributeNS(r.c()?null:r.r(),t.d5)}),O.h2=(function(e){return rs().ib(e.tagName,45)}),O.iV=(function(e){if(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement||e instanceof HTMLButtonElement||e instanceof HTMLOptionElement)return e.value;if(this.h2(e)){var t=e.value;return new fd(this),t===void 0?void 0:typeof t==`string`?t:void 0}}),O.ih=(function(e,t){for(var n=t,r=e;;){if(r===null)return n;var i=r.parentNode,a=new Qm(this.gH(r),n);r=i,n=a}}),O.gH=(function(e){if(e instanceof HTMLElement){var t=e.id;if(rs(),t!==``)var n=`#`+t;else var r=e.className,n=(rs(),r===``?``:`.`+r.replace(this.eb,`.`));return e.tagName.toLowerCase()+n}return e.nodeName}),new M().i(Si,`com.raquo.laminar.DomApi$`,{cd:1});var Ci;function P(){return Ci||=new Si,Ci}function wi(e,t,n){this.cY=null,this.ec=null,this.cX=null,this.cY=e,this.ec=t,this.cX=n}O=wi.prototype=new A,O.constructor=wi,O.a0=(function(e){this.cY===null?this.cX===null?Jo().iI(this.ec,e):xi().iH(this.cX,su().iL(e)):this.cY.a0(e)}),new M().i(wi,`com.raquo.laminar.Seq`,{cf:1});function Ti(){Ei=this,$()}O=Ti.prototype=new A,O.constructor=Ti,new M().i(Ti,`com.raquo.laminar.Seq$`,{cg:1});var Ei;function Di(){return Ei||=new Ti,Ei}function Oi(e){Or(),U(),e.ef=gi()}function ki(e){e.hm=ia()}function Ai(e){ji(e,new q((e=>{e.f2.u.focus()})))}function ji(e,t){return new tc(new q((e=>{var n=new el(!e.aa.F.c()),r=new q((e=>{n.cr?n.cr=!1:t.b(e)}));ai().hh(e.aa,new q((e=>(t=>{r.b(new ta(e,t))}))(e)),!1)})),ia())}function Mi(){this.C=null,this.eK=null,this.eL=!1,this.eJ=null,this.eI=null,Ni=this,this.C=new Gs(F()),new Gs(F()),this.eJ=new Gs(F()),this.eI=new Ws}O=Mi.prototype=new A,O.constructor=Mi,O.du=(function(){return this.eL||=(this.eK=new Ks(this),!0),this.eK}),new M().i(Mi,`com.raquo.laminar.codecs.package$`,{co:1});var Ni;function F(){return Ni||=new Mi,Ni}function Pi(e){e.hn=Fi(e,`class`,` `)}function Fi(e,t,n){var r=z(new B,t,F().C);return new Js(r.b6,new q((e=>{var t=P().iO(e,r);return t===void 0?``:t})),new Qu(((e,t)=>{P().dM(e,r,t)})),n)}function Ii(e){e.hl=Li(e,`class`,` `)}function Li(e,t,n){var r=new $s(t,F().C,Y());return new Js(r.ch,new q((e=>{var t=P().iT(e,r);return t===void 0?``:t})),new Qu(((e,t)=>{P().jQ(e,r,t)})),n)}function Ri(){this.eY=null,zi=this,K().o.dP(),N().x(L().w(new(Xs.r()).C([K().o.cF()]))),K().o.dP(),N().x(L().w(new(Xs.r()).C([K().o.cF(),K().o.js()]))),K().o.i7(),N().x(L().w(new(Xs.r()).C([K().o.cF(),K().o.jt()]))),this.eY=N().x(L().w(new(ip.r()).C([`value`,`checked`])))}O=Ri.prototype=new A,O.constructor=Ri,new M().i(Ri,`com.raquo.laminar.inputs.InputController$`,{cN:1});var zi;function Bi(){return zi||=new Ri,zi}function Vi(e){this.cd=null,this.cd=e}O=Vi.prototype=new A,O.constructor=Vi,O.hb=(function(e,t){try{this.cd.dy(e,t)}catch(e){var n=e instanceof Lc?e:new Z(e);U().a2(n)}}),O.ia=(function(e){return new Vi(new Qu(((t,n)=>{this.cd.dy(t,n),e.cd.dy(t,n)})))}),O.hS=(function(e){return e===void 0?this:e.ia(this)}),new M().i(Vi,`com.raquo.laminar.inserters.InserterHooks`,{cQ:1});function Hi(){}O=Hi.prototype=new A,O.constructor=Hi,O.jq=(function(e,t){return new pd(e,void 0)}),new M().i(Hi,`com.raquo.laminar.inserters.StaticChildInserter$`,{cS:1});var Ui;function Wi(){return Ui||=new Hi,Ui}function Gi(e,t){this.f0=null,this.eZ=null,this.f0=e,this.eZ=t}O=Gi.prototype=new A,O.constructor=Gi,O.l=(function(e){return new _l(this.f0,this.eZ.b(e),new $u(((e,t,n)=>{P().hg(e,t,n)})))}),new M().i(Gi,`com.raquo.laminar.keys.DerivedStyleProp`,{cV:1});function Ki(e,t,n,r){this.bl=null,this.d2=!1,this.d1=!1,this.d0=null,this.bl=e,this.d2=t,this.d1=n,this.d0=r}O=Ki.prototype=new A,O.constructor=Ki,O.ji=(function(){var e=new q((e=>{var t=this.d0.b(e);if(t.c())return Y();t.r();var n=P().iV(e.target);return new sp(n===void 0?``:n)}));return new Ki(this.bl,this.d2,this.d1,e)}),new M().i(Ki,`com.raquo.laminar.keys.EventProcessor`,{cW:1});function qi(){}O=qi.prototype=new A,O.constructor=qi,O.ir=(function(e,t,n){return new Ki(e,t,n,new q((e=>new sp(e))))}),new M().i(qi,`com.raquo.laminar.keys.EventProcessor$`,{cX:1});var Ji;function Yi(){return Ji||=new qi,Ji}function Xi(){}O=Xi.prototype=new A,O.constructor=Xi;function Zi(){}Zi.prototype=O;function Qi(){this.ho=null,this.hp=null,this.hq=null,this.hr=null,this.ho=`http://www.w3.org/2000/svg`,this.hp=`http://www.w3.org/1999/xlink`,this.hq=`http://www.w3.org/XML/1998/namespace`,this.hr=`http://www.w3.org/2000/xmlns/`}O=Qi.prototype=new A,O.constructor=Qi,O.jn=(function(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`xlink`:return`http://www.w3.org/1999/xlink`;case`xml`:return`http://www.w3.org/XML/1998/namespace`;case`xmlns`:return`http://www.w3.org/2000/xmlns/`;default:throw new Ud(e)}}),new M().i(Qi,`com.raquo.laminar.keys.SvgAttr$`,{d0:1});var $i;function ea(){return $i||=new Qi,$i}function ta(e,t){this.f2=null,this.f1=null,this.f2=e,this.f1=t}O=ta.prototype=new A,O.constructor=ta,new M().i(ta,`com.raquo.laminar.lifecycle.MountContext`,{d1:1});function na(){this.hs=null,ra=this,this.hs=new ec}O=na.prototype=new A,O.constructor=na,new M().i(na,`com.raquo.laminar.modifiers.Modifier$`,{d5:1});var ra;function ia(){return ra||=new na,ra}function aa(){this.fa=null,oa=this,this.fa=new nc}O=aa.prototype=new A,O.constructor=aa,new M().i(aa,`com.raquo.laminar.modifiers.RenderableNode$`,{d9:1});var oa;function sa(){return oa||=new aa,oa}function ca(){}O=ca.prototype=new A,O.constructor=ca,O.ct=(function(e,t,n){var r=new sp(e);vd(t,r),n!==void 0&&n.hb(e,t);var i=P().hR(e.cI(),t.u);return i&&yd(t,r),i}),new M().i(ca,`com.raquo.laminar.nodes.ParentNode$`,{df:1});var la;function ua(){return la||=new ca,la}function da(){}O=da.prototype=new A,O.constructor=da,O.k6=(function(e,t){return ai().cM(e.aa,new q((n=>t.b(new ta(e,n)))),!0)}),new M().i(da,`com.raquo.laminar.nodes.ReactiveElement$`,{dh:1});var fa;function pa(){return fa||=new da,fa}function ma(e){this.fe=null,this.fe=new Vi(new Qu(((t,n)=>{matchResult1:{var r=n.u;if(r instanceof Element){r.setAttribute(`slot`,e);break matchResult1}if(r instanceof Text){var i=U(),a=r.textContent,o=t.cI().tagName;i.a2(Il(new W,"Error: You tried to insert a raw text node `"+a+"` into the `"+e+"` slot of <"+o.toLowerCase()+`>.
 - Cause: This is not possible: named slots only accept elements. Your node was inserted into the default slot instead.
 - Suggestion: Wrap your text node into \`span()\``));break matchResult1}}})))}O=ma.prototype=new A,O.constructor=ma,O.hX=(function(e){return e.dF(new q((e=>e.k9(this.fe))))}),new M().i(ma,`com.raquo.laminar.nodes.Slot`,{dk:1});function ha(){}O=ha.prototype=new A,O.constructor=ha,O.hy=(function(e){return K().o.dC().bS(new Q([K().o.gI().gR(),K().o.iF().i9(),K().o.gY().cH().l(8),ml(K().o,e,ac())]))}),new M().i(ha,`doc.ExampleGroups$package$`,{dm:1});var ga;function _a(){return ga||=new ha,ga}function va(){}O=va.prototype=new A,O.constructor=va,O.hz=(function(e){return K().o.dC().bS(new Q([K().o.gI().gR(),K().o.iG().ka(),K().o.hM().i6(),K().o.gY().cH().l(16),ml(K().o,e,ac())]))}),new M().i(va,`doc.Examples$package$`,{dn:1});var ya;function ba(){return ya||=new va,ya}function xa(){}O=xa.prototype=new A,O.constructor=xa,O.hP=(function(){Ca().iw(),Ca().ix(),Ca().iy(),Ca().iz(),Ca().iA(),Ca().iB()}),O.iw=(function(){var e=document.querySelector(`#example1`);if(!Ho().bf(e).c()){K();var t=K().o.ef.hU(`https://shoelace.style/`);new yl(e,K().o.dC().bS(new Q([K().o.jj().cH().l(256),Ml().a4(new Q([new G((e=>e.ao().dt(t.c8))),new G((e=>e.cB().l(`Scan this code to visit Web Awesome on the web!`)))]),new Q([])),K().o.i4().bS(new Q([])),kl().a4(new Q([new G((e=>e.jk().l(255))),new G((e=>e.k8().l(!0))),new G((e=>e.cB().l(`Value`))),new G((e=>(kl().k2(),K().o).dP().dt(t.c8))),new G((e=>pl(K().o,Da().jV().hX(new Q([(K(),Wi().jq(El().a4(new Q([new G((e=>e.jm().l(`link`)))]),new Q([])),sa().fa))])),jo().fW,ac())))]),new Q([new hl((K(),Yi().ir(K().o.cF(),!1,!1)).ji(),new q((e=>(t=>{e.dI(t)}))(t.e7)))]))])))}}),O.ix=(function(){var e=document.querySelector(`#example2`);Ho().bf(e).c()||(K(),new yl(e,Ml().a4(new Q([new G((e=>e.ao().l(`https://webawesome.com/`))),new G((e=>e.cB().l(`Visit Web Awesome`))),new G((e=>e.bU().iW())),new G((e=>e.iZ().l(`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Ccircle cx='16' cy='16' r='14' fill='%232563eb'/%3E%3C/svg%3E`))),new G((e=>e.j1().l(`0.15`))),new G((e=>e.j2().l(`4`))),new G((e=>e.j0().l(`white`)))]),new Q([]))))}),O.iy=(function(){var e=document.querySelector(`#example3`);Ho().bf(e).c()||(K(),new yl(e,Ml().a4(new Q([new G((e=>e.ao().l(`https://shoelace.style/`))),new G((e=>e.iD().l(`deeppink`))),new G((e=>e.i0().l(`white`)))]),new Q([]))))}),O.iz=(function(){var e=document.querySelector(`#example4`);Ho().bf(e).c()||(K(),new yl(e,Ml().a4(new Q([new G((e=>e.ao().l(`https://shoelace.style/`))),new G((e=>e.jU().l(64)))]),new Q([]))))}),O.iA=(function(){var e=document.querySelector(`#example5`);Ho().bf(e).c()||(K(),new yl(e,Ml().a4(new Q([new G((e=>e.ao().l(`https://shoelace.style/`))),new G((e=>e.jA().l(.5)))]),new Q([]))))}),O.iB=(function(){var e=document.querySelector(`#example6`);Ho().bf(e).c()||(K(),new yl(e,_a().hy(new Q([ba().hz(new Q([Ml().a4(new Q([new G((e=>e.ao().l(`https://shoelace.style/`))),new G((e=>e.bU().l(`L`)))]),new Q([])),Ml().a4(new Q([new G((e=>e.ao().l(`https://shoelace.style/`))),new G((e=>e.bU().l(`M`)))]),new Q([])),Ml().a4(new Q([new G((e=>e.ao().l(`https://shoelace.style/`))),new G((e=>e.bU().l(`Q`)))]),new Q([])),Ml().a4(new Q([new G((e=>e.ao().l(`https://shoelace.style/`))),new G((e=>e.bU().l(`H`)))]),new Q([]))]))]))))}),new M().i(xa,`examples.qrCode.Main$package$`,{dp:1});var Sa;function Ca(){return Sa||=new xa,Sa}function wa(e){try{Ca().hP()}catch(e){throw e}}function Ta(){this.fs=null,this.ft=!1}O=Ta.prototype=new A,O.constructor=Ta,O.jV=(function(){return this.ft||=(this.fs=new ma(`start`),!0),this.fs}),new M().i(Ta,`io.github.nguyenyou.webawesome.laminar.Input$slots$`,{dt:1});var Ea;function Da(){return Ea||=new Ta,Ea}function Oa(){}O=Oa.prototype=new A,O.constructor=Oa,O.jL=(function(e,t){var n=Hn;n.setFloat64(0,e,!0);var r=n.getInt32(0,!0)|0,i=n.getInt32(4,!0)|0,a=2047&(i>>>20|0),o=a+t|0,s=-2146435073&i,c=0,l=0;if(c=r,l=s,!((a-1|0)>>>0<=2045)){var u=2147483647&i;if((r|u)===0||u>=2146435072)return e;var d=1048575&i,f=d===0?32+Math.clz32(r)|0:Math.clz32(d);o=o-(f-12|0)|0;var p=-2147483648&i,m=f-11|0,h=32&m?0:r<<m,g=p|1048575&(32&m?r<<m:(r>>>1|0)>>>~m|0|i<<m);c=h,l=g}if((o-1|0)>>>0<=2045){var _=o,v=c,y=l,b=_<<20|y,ee=Hn;return ee.setInt32(0,v,!0),ee.setInt32(4,b,!0),+ee.getFloat64(0,!0)}if((53+o|0)>>>0<=53){var te=54+o|0,ne=c,re=l,ie=te<<20|re,x=Hn;return x.setInt32(0,ne,!0),x.setInt32(4,ie,!0),5551115123125783e-32*x.getFloat64(0,!0)}var ae=2047&~(t>>31),oe=-2147483648&i,se=ae<<20|oe,ce=Hn;return ce.setInt32(0,0,!0),ce.setInt32(4,se,!0),+ce.getFloat64(0,!0)}),new M().i(Oa,`java.lang.Math$`,{dO:1});var ka;function Aa(){return ka||=new Oa,ka}function ja(e,t){for(var n=I().a6(`^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$`),r=[],i=0;i<(t.length|0);){var a=t[i];if(a!==``){var o=n.exec(a);if(o!==null){var s=Ma(e,o[1]),c=s[0],l=s[1],u=o[2],d=o[3],f=parseInt(d),p=o[4];r.push(new Mc(c,l,u,f|0,p===void 0?-1:parseInt(p)|0))}else r.push(new Mc(`<jscode>`,a,null,-1,-1))|0}i=1+i|0}var m=r.length|0,h=new(Nc.r()).C(m);for(i=0;i<m;)h.a[i]=r[i],i=1+i|0;return h}function Ma(e,t){var n=I().a6(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$`),r=I().a6(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$`),i=I().a6(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$`),a=I().a6(`^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$`),o=I().a6(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$`),s=n.exec(t),c=s===null?r.exec(t):s;if(c!==null)return[Na(e,c[1]),Ba(e,c[2])];var l=i.exec(t),u=l===null?a.exec(t):l;if(u!==null)return[Na(e,u[1]),`<init>`];var d=o.exec(t);return d===null?[`<jscode>`,t]:[Na(e,d[1]),`<clinit>`]}function Na(e,t){var n=Fa(e);if(po().dl.call(n,t))var r=Fa(e)[t];else var r=Za(e,0,t);return r.split(`_`).join(`.`).split(`＿`).join(`_`)}function Pa(e){if(!((1&e.P)<<24>>24)){var t={};t.O=`java_lang_Object`,t.T=`java_lang_String`;for(var n=0;n<=22;){if(n>=2){var r=`T`+n;t[r]=`scala_Tuple`+n}var i=`F`+n;t[i]=`scala_Function`+n,n=1+n|0}e.di=t,e.P=(1|e.P)<<24>>24}return e.di}function Fa(e){return(1&e.P)<<24>>24?e.di:Pa(e)}function Ia(e){if(!((2&e.P)<<24>>24)){var t={};t.sjsr_=`scala_scalajs_runtime_`,t.sjs_=`scala_scalajs_`,t.sci_=`scala_collection_immutable_`,t.scm_=`scala_collection_mutable_`,t.scg_=`scala_collection_generic_`,t.sc_=`scala_collection_`,t.sr_=`scala_runtime_`,t.s_=`scala_`,t.jl_=`java_lang_`,t.ju_=`java_util_`,e.dj=t,e.P=(2|e.P)<<24>>24}return e.dj}function La(e){return(2&e.P)<<24>>24?e.dj:Ia(e)}function Ra(e){return(4&e.P)<<24>>24||(e.dh=Object.keys(La(e)),e.P=(4|e.P)<<24>>24),e.dh}function za(e){return(4&e.P)<<24>>24?e.dh:Ra(e)}function Ba(e,t){if(t.startsWith(`init___`))return`<init>`;var n=t.indexOf(`__`)|0;return n<0?t:t.substring(0,n)}function Va(e,t){return t?t.arguments&&t.stack?Ha(e,t):t.stack&&t.sourceURL?Ga(e,t):t.stack&&t.number?Wa(e,t):t.stack&&t.fileName?Ua(e,t):t.message&&t[`opera#sourceloc`]?t.stacktrace?t.message.indexOf(`
`)>-1&&t.message.split(`
`).length>t.stacktrace.split(`
`).length?Ka(e,t):qa(e,t):Ka(e,t):t.message&&t.stack&&t.stacktrace?t.stacktrace.indexOf(`called from line`)<0?Ja(e,t):Ya(e,t):t.stack&&!t.fileName?Ha(e,t):Xa(e,t):[]}function Ha(e,t){return(t.stack+`
`).replace(I().a6(`^[\\s\\S]+?\\s+at\\s+`),` at `).replace(I().E(`^\\s+(at eval )?at\\s+`,`gm`),``).replace(I().E(`^([^\\(]+?)([\\n])`,`gm`),`{anonymous}() ($1)$2`).replace(I().E(`^Object.<anonymous>\\s*\\(([^\\)]+)\\)`,`gm`),`{anonymous}() ($1)`).replace(I().E(`^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(0,-1)}function Ua(e,t){return t.stack.replace(I().E(`(?:\\n@:0)?\\s+$`,`m`),``).replace(I().E(`^(?:\\((\\S*)\\))?@`,`gm`),`{anonymous}($1)@`).split(`
`)}function Wa(e,t){return t.stack.replace(I().E(`^\\s*at\\s+(.*)$`,`gm`),`$1`).replace(I().E(`^Anonymous function\\s+`,`gm`),`{anonymous}() `).replace(I().E(`^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(1)}function Ga(e,t){return t.stack.replace(I().E(`\\[native code\\]\\n`,`m`),``).replace(I().E(`^(?=\\w+Error\\:).*$\\n`,`m`),``).replace(I().E(`^@`,`gm`),`{anonymous}()@`).split(`
`)}function Ka(e,t){for(var n=I().E(`Line (\\d+).*script (?:in )?(\\S+)`,`i`),r=t.message.split(`
`),i=[],a=2,o=r.length|0;a<o;){var s=n.exec(r[a]);s!==null&&i.push(`{anonymous}()@`+s[2]+`:`+s[1])|0,a=2+a|0}return i}function qa(e,t){for(var n=I().E(`Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$`,`i`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[3],l=c===void 0?`{anonymous}`:c;i.push(l+`()@`+s[2]+`:`+s[1])|0}a=2+a|0}return i}function Ja(e,t){for(var n=I().a6(`^(.*)@(.+):(\\d+)$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[1],l=c===void 0?`global code`:c+`()`;i.push(l+`@`+s[2]+`:`+s[3])|0}a=1+a|0}return i}function Ya(e,t){for(var n=I().a6(`^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[4]+`:`+s[1]+`:`+s[2],l=s[2],u=(l===void 0?`global code`:l).replace(I().a6(`<anonymous function: (\\S+)>`),`$1`).replace(I().a6(`<anonymous function>`),`{anonymous}`);i.push(u+`@`+c)|0}a=2+a|0}return i}function Xa(e,t){return[]}function Za(e,t,n){for(;;)if(t<(za(e).length|0)){var r=za(e)[t];if(n.startsWith(r))return``+La(e)[r]+n.substring(r.length);t=1+t|0}else return n.startsWith(`L`)?n.substring(1):n}function Qa(){this.di=null,this.dj=null,this.dh=null,this.P=0}O=Qa.prototype=new A,O.constructor=Qa,O.iC=(function(e){return ja(this,Va(this,e))}),new M().i(Qa,`java.lang.StackTrace$`,{dT:1});var $a;function eo(){return $a||=new Qa,$a}function to(){}O=to.prototype=new A,O.constructor=to,O.a6=(function(e){return new RegExp(e)}),O.E=(function(e,t){return new RegExp(e,t)}),new M().i(to,`java.lang.StackTrace$StringRE$`,{dU:1});var no;function I(){return no||=new to,no}function ro(){this.fR=null,this.ht=null,io=this,this.fR=new zp(!1),this.ht=new zp(!0)}O=ro.prototype=new A,O.constructor=ro,new M().i(ro,`java.lang.System$Streams$`,{dX:1});var io;function ao(){return io||=new ro,io}function oo(e){var t={};return t[`java.version`]=`1.8`,t[`java.vm.specification.version`]=`1.8`,t[`java.vm.specification.vendor`]=`Oracle Corporation`,t[`java.vm.specification.name`]=`Java Virtual Machine Specification`,t[`java.vm.name`]=`Scala.js`,t[`java.vm.version`]=`1.22.0`,t[`java.specification.version`]=`1.8`,t[`java.specification.vendor`]=`Oracle Corporation`,t[`java.specification.name`]=`Java Platform API Specification`,t[`file.separator`]=`/`,t[`path.separator`]=`:`,t[`line.separator`]=`
`,t}function so(){this.dk=null,this.fS=null,co=this,this.dk=oo(this),this.fS=null}O=so.prototype=new A,O.constructor=so,O.gZ=(function(e,t){if(this.dk!==null){var n=this.dk;return po().dl.call(n,e)?n[e]:t}return this.fS.gZ(e,t)}),new M().i(so,`java.lang.System$SystemProperties$`,{dY:1});var co;function lo(){return co||=new so,co}function uo(){this.dl=null,fo=this,this.dl=Object.prototype.hasOwnProperty}O=uo.prototype=new A,O.constructor=uo,new M().i(uo,`java.lang.Utils$Cache$`,{e1:1});var fo;function po(){return fo||=new uo,fo}function mo(e,t){return e===t}function ho(e){return 0}function go(e,t){return!!(e&&e.$classData&&e.$classData.D===t&&e.$classData.B.n.aO)}var _o=new M().i(0,`java.lang.Void`,{aO:1},(e=>e===void 0));function vo(e,t){throw Dd(new kd,`argument type mismatch`)}function yo(){}O=yo.prototype=new A,O.constructor=yo,O.a5=(function(e){return e instanceof j||e instanceof rr||e instanceof ir||e instanceof ar||e instanceof or||e instanceof sr?e.a.length:e instanceof cr?e.a.length>>>1|0:(e instanceof lr||e instanceof ur||vo(this,e),e.a.length)}),new M().i(yo,`java.lang.reflect.Array$`,{e3:1});var bo;function xo(){return bo||=new yo,bo}function So(){}O=So.prototype=new A,O.constructor=So,O.i1=(function(e,t){for(var n=0,r=e.a.length;;)if(n===r)return~n;else{var i=(n+r|0)>>>1|0,a=e.a[i],o=t===a?0:t<a?-1:1;if(o<0){r=i;continue}if(o!==0){n=1+i|0;continue}return i}}),O.gN=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length>>>1|0;if((t.a.length>>>1|0)!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a,o=i<<1,s=a[o],c=a[o+1|0],l=r,u=t.a,d=l<<1,f=u[d],p=u[d+1|0];if((s^f|c^p)!==0)return!1;r=1+r|0}return!0}),O.gM=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),O.gO=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),O.gL=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),O.gK=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),O.gP=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),new M().i(So,`java.util.Arrays$`,{e4:1});var Co;function wo(){return Co||=new So,Co}function To(e,t){return Oo().hj(e,t)}function Eo(){}O=Eo.prototype=new A,O.constructor=Eo,O.hj=(function(e,t){if(t===e>>31)return``+e;if(-2097152&(t^t>>10)){var n=t>>31,r=e^n,i=r-n|0,a=4294967296*(((t^n)+(i>>>0<r>>>0|0)|0)>>>0)+(i>>>0),o=+Math.floor(1.0000000000000265e-9*a),s=i-Math.imul(1e9,o|0)|0;s<0&&(--o,s=1e9+s|0);var c=``+s,l=o,u=c.length,d=``+l+`000000000`.substring(u)+c;return t<0?`-`+d:d}return``+(4294967296*t+(e>>>0))}),O.gX=(function(e){if(e<-0x8000000000000000)return k(0,-2147483648);if(e>=0x8000000000000000)return k(-1,2147483647);var t=e|0,n=23283064365386963e-26*e|0;return k(t,e<0&&t!==0?n-1|0:n)}),O.il=(function(e,t,n,r){var i=t>>31,a=e^i,o=a-i|0,s=(t^i)+(o>>>0<a>>>0|0)|0,c=r>>31,l=n^c,u=l-c|0,d=(r^c)+(u>>>0<l>>>0|0)|0;if(d|-2097152&u){var f=(4294967296*(s>>>0)+(o>>>0))/(4294967296*(d>>>0)+(u>>>0))+.00390625,p=f|0,m=23283064365386963e-26*f|0,h=65535&u,g=u>>>16|0,_=65535&p,v=p>>>16|0,y=Math.imul(h,_),b=Math.imul(g,_),ee=Math.imul(h,v),te=y+((b+ee|0)<<16)|0,ne=(y>>>16|0)+ee|0;if(((s-((((Math.imul(u,m)+Math.imul(d,p)|0)+Math.imul(g,v)|0)+(ne>>>16|0)|0)+(((65535&ne)+b|0)>>>16|0)|0)|0)-((o-te|0)>>>0>o>>>0|0)|0)<0)var re=p-1|0,ie=(m-1|0)+(re!==-1|0)|0,x=re,ae=ie;else var x=p,ae=m}else var oe=(s>>>0)/(zn(u)>>>0)|0,x=(4294967296*(s-Math.imul(u,oe)|0)+(o>>>0))/u|0,ae=oe;if((t^r)>=0)return k(x,ae);var se=-x|0;return k(se,(-ae|0)-(se!==0|0)|0)}),O.im=(function(e,t,n,r){if(!(r|-2097152&n)){var i=(t>>>0)/(zn(n)>>>0)|0;return k((4294967296*(t-Math.imul(n,i)|0)+(e>>>0))/n|0,i)}if(r>=0){var a=(4294967296*(t>>>0)+(e>>>0))/(4294967296*(r>>>0)+(n>>>0))+.00390625,o=a|0,s=23283064365386963e-26*a|0,c=65535&n,l=n>>>16|0,u=65535&o,d=o>>>16|0,f=Math.imul(c,u),p=Math.imul(l,u),m=Math.imul(c,d),h=f+((p+m|0)<<16)|0,g=(f>>>16|0)+m|0;if(((t-((((Math.imul(n,s)+Math.imul(r,o)|0)+Math.imul(l,d)|0)+(g>>>16|0)|0)+(((65535&g)+p|0)>>>16|0)|0)|0)-((e-h|0)>>>0>e>>>0|0)|0)<0){var _=o-1|0;return k(_,(s-1|0)+(_!==-1|0)|0)}return k(o,s)}return(t===r?e>>>0<n>>>0:t>>>0<r>>>0)?k(0,0):k(1,0)}),O.jD=(function(e,t,n,r){var i=t>>31,a=e^i,o=a-i|0,s=(t^i)+(o>>>0<a>>>0|0)|0,c=r>>31,l=n^c,u=l-c|0,d=(r^c)+(u>>>0<l>>>0|0)|0;if(d|-2097152&u){var f=(4294967296*(s>>>0)+(o>>>0))/(4294967296*(d>>>0)+(u>>>0))+.00390625,p=f|0,m=23283064365386963e-26*f|0,h=65535&u,g=u>>>16|0,_=65535&p,v=p>>>16|0,y=Math.imul(h,_),b=Math.imul(g,_),ee=Math.imul(h,v),te=y+((b+ee|0)<<16)|0,ne=(y>>>16|0)+ee|0,re=(((Math.imul(u,m)+Math.imul(d,p)|0)+Math.imul(g,v)|0)+(ne>>>16|0)|0)+(((65535&ne)+b|0)>>>16|0)|0,ie=o-te|0,x=(s-re|0)-(ie>>>0>o>>>0|0)|0;if(x<0)var ae=ie+u|0,oe=(x+d|0)+(ae>>>0<ie>>>0|0)|0,se=ae,ce=oe;else var se=ie,ce=x}else var le=(4294967296*((s>>>0)%(zn(u)>>>0)|0)+(o>>>0))/u|0,se=o-Math.imul(u,le)|0,ce=0;if(t<0){var ue=-se|0;return k(ue,(-ce|0)-(ue!==0|0)|0)}return k(se,ce)}),O.jE=(function(e,t,n,r){if(!(r|-2097152&n)){var i=(4294967296*((t>>>0)%(zn(n)>>>0)|0)+(e>>>0))/n|0;return k(e-Math.imul(n,i)|0,0)}if(r>=0){var a=(4294967296*(t>>>0)+(e>>>0))/(4294967296*(r>>>0)+(n>>>0))+.00390625,o=a|0,s=23283064365386963e-26*a|0,c=65535&n,l=n>>>16|0,u=65535&o,d=o>>>16|0,f=Math.imul(c,u),p=Math.imul(l,u),m=Math.imul(c,d),h=f+((p+m|0)<<16)|0,g=(f>>>16|0)+m|0,_=(((Math.imul(n,s)+Math.imul(r,o)|0)+Math.imul(l,d)|0)+(g>>>16|0)|0)+(((65535&g)+p|0)>>>16|0)|0,v=e-h|0,y=(t-_|0)-(v>>>0>e>>>0|0)|0;if(y<0){var b=v+n|0;return k(b,(y+r|0)+(b>>>0<v>>>0|0)|0)}return k(v,y)}if(t===r?e>>>0<n>>>0:t>>>0<r>>>0)return k(e,t);var ee=e-n|0;return k(ee,(t-r|0)-(ee>>>0>e>>>0|0)|0)}),new M().i(Eo,`org.scalajs.linker.runtime.RuntimeLong$`,{e7:1});var Do;function Oo(){return Do||=new Eo,Do}function ko(){this.fW=null,Ao=this,this.fW=new Vd}O=ko.prototype=new A,O.constructor=ko,new M().i(ko,`scala.$less$colon$less$`,{ea:1});var Ao;function jo(){return Ao||=new ko,Ao}function Mo(e,t,n,r,i,a){for(var o=n,s=i,c=n+a|0;o<c;)L().cu(r,s,L().aV(t,o)),o=1+o|0,s=1+s|0}function No(){}O=No.prototype=new A,O.constructor=No,O.gS=(function(e,t){var n=e.p();if(n>-1){for(var r=t.dH(n),i=e.e(),a=0;a<n;)L().cu(r,a,i.g()),a=1+a|0;return r}var o=null,s=t.cJ(),c=s===mr.l();o=[];for(var l=e.e();l.i();){var u=l.g(),d=c?$n(u):u===null?fs().dL(s):u;o.push(d)}return fs().dK(s===fr.l()?_o.l():s===ys.l()||s===iu.l()?dr.l():s,o)}),O.cv=(function(e,t,n,r,i){var a=Pn(e);a.a8.Z&&Pn(n).a8.R(a.a8)?e.a7(t,n,r,i):Mo(this,e,t,n,r,i)}),O.gQ=(function(e,t){if(e===t)return!0;if(e.a.length!==t.a.length)return!1;for(var n=e.a.length,r=0;r<n;){if(!vs().y(e.a[r],t.a[r]))return!1;r=1+r|0}return!0}),new M().i(No,`scala.Array$`,{ec:1});var Po;function Fo(){return Po||=new No,Po}var Io=new M().i(1,`scala.Function0`,{ag:1}),Lo=new M().i(1,`scala.Function1`,{e:1});function Ro(){}O=Ro.prototype=new A,O.constructor=Ro;function zo(){}zo.prototype=O;function Bo(){}O=Bo.prototype=new A,O.constructor=Bo,O.bf=(function(e){return e===null?Y():new sp(e)}),new M().i(Bo,`scala.Option$`,{el:1});var Vo;function Ho(){return Vo||=new Bo,Vo}function Uo(){this.g0=null,this.cm=null,Wo=this,this.g0=new G((e=>this.g0)),this.cm=new Lu}O=Uo.prototype=new A,O.constructor=Uo,new M().i(Uo,`scala.PartialFunction$`,{em:1});var Wo;function Go(){return Wo||=new Uo,Wo}function Ko(){this.g3=null,qo=this,this.g3=new G((e=>Jo().g3))}O=Ko.prototype=new A,O.constructor=Ko,O.iI=(function(e,t){var n=xo().a5(e),r=0;if(e instanceof j)for(;r<n;)t.b(e.a[r]),r=1+r|0;else if(e instanceof sr)for(;r<n;)t.b(e.a[r]),r=1+r|0;else if(e instanceof ur)for(;r<n;)t.b(e.a[r]),r=1+r|0;else if(e instanceof cr)for(;r<n;){var i=e.a,a=r<<1,o=i[a],s=i[a+1|0];t.b(k(o,s)),r=1+r|0}else if(e instanceof lr)for(;r<n;)t.b(e.a[r]),r=1+r|0;else if(e instanceof ir)for(;r<n;)t.b(Zn(e.a[r])),r=1+r|0;else if(e instanceof ar)for(;r<n;)t.b(e.a[r]),r=1+r|0;else if(e instanceof or)for(;r<n;)t.b(e.a[r]),r=1+r|0;else if(e instanceof rr)for(;r<n;)t.b(e.a[r]),r=1+r|0;else throw new Ud(e)}),new M().i(Ko,`scala.collection.ArrayOps$`,{er:1});var qo;function Jo(){return qo||=new Ko,qo}function Yo(e,t){for(var n=e.e();n.i();)t.b(n.g())}function Xo(e,t,n,r){var i=e.e(),a=n;matchResult18:{var o,s=e.p();if(s===-1){var o=xo().a5(t);break matchResult18}var o=s}for(var c=xo().a5(t),l=r<o?r:o,u=n<0?c:c-n|0,d=u<l?u:l,f=n+(d<0?0:d)|0;a<f&&i.i();)L().cu(t,a,i.g()),a=1+a|0;return a-n|0}function Zo(e,t,n,r){return e.p()===0?``+t+r:e.be(nh(new rh),t,n,r).J.n}function Qo(e,t,n,r,i){var a=t.J;n.length!==0&&(a.n=``+a.n+n);var o=e.e();if(o.i()){var s=o.g();for(a.n=``+a.n+s;o.i();){r.length!==0&&(a.n=``+a.n+r);var c=o.g();a.n=``+a.n+c}}return i.length!==0&&(a.n=``+a.n+i),t}function $o(e,t){if(e.p()>=0){var n=e.p(),r=t.dH(n);return e.aM(r,0,2147483647),r}var i=null,a=t.cJ(),o=a===mr.l();i=[];for(var s=e.e();s.i();){var c=s.g(),l=o?$n(c):c===null?fs().dL(a):c;i.push(l)}return fs().dK(a===fr.l()?_o.l():a===ys.l()||a===iu.l()?dr.l():a,i)}function es(e,t){this.g5=null,this.by=null,this.g5=e,this.by=t}O=es.prototype=new A,O.constructor=es,O.iY=(function(){return this.g5.K().e()}),new M().i(es,`scala.collection.Iterator$ConcatIteratorCell`,{eA:1});function ts(){this.g6=null,ns=this,this.g6=new G((e=>this.g6))}O=ts.prototype=new A,O.constructor=ts,O.ib=(function(e,t){return rp(e,t)>=0}),new M().i(ts,`scala.collection.StringOps$`,{eG:1});var ns;function rs(){return ns||=new ts,ns}function is(){}O=is.prototype=new A,O.constructor=is,O.h1=(function(e,t){return jd(new Nd,e+` is out of bounds (min 0, max `+t+`)`)}),new M().i(is,`scala.collection.generic.CommonErrors$`,{eH:1});var as;function os(){return as||=new is,as}function ss(){this.ga=0,cs=this;try{rs();var e=kc().jb(lo().gZ(`scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength`,`64`),10,214748364)}catch(t){if(0)var e;else{var e;throw t}}this.ga=e}O=ss.prototype=new A,O.constructor=ss,new M().i(ss,`scala.collection.immutable.IndexedSeqDefaults$`,{eK:1});var cs;function ls(){return cs||=new ss,cs}function us(){}O=us.prototype=new A,O.constructor=us,O.dL=(function(e){return e===hr.l()||e===gr.l()||e===mr.l()||e===_r.l()?0:e===vr.l()?k(0,0):e===yr.l()||e===br.l()?0:e===pr.l()?!1:e===fr.l()?void 0:null}),O.dK=(function(e,t){var n=t.length|0;if(e===mr.l()){for(var r=new ir(n),i=0;i!==n;)r.a[i]=65535&(t[i]|0),i=1+i|0;return r}for(var a=e.a8.U(n),o=0;o!==n;)L().cu(a,o,t[o]),o=1+o|0;return a}),new M().i(us,`scala.collection.mutable.ArrayBuilder$`,{eS:1});var ds;function fs(){return ds||=new us,ds}function ps(){}O=ps.prototype=new A,O.constructor=ps,O.gE=(function(e,t,n){if(t!==e)throw new zd(n)}),new M().i(ps,`scala.collection.mutable.MutationTracker$`,{f0:1});var ms;function hs(){return ms||=new ps,ms}function gs(){}O=gs.prototype=new A,O.constructor=gs,O.y=(function(e,t){return e===t||(jc(e)?this.iv(e,t):e instanceof Mn?this.it(e,t):e===null?t===null:In(e,t))}),O.iv=(function(e,t){if(jc(t))return this.iu(e,t);if(t instanceof Mn){if(typeof e==`number`)return+e===t.c;if(e instanceof Nn){var n=er(e),r=n.l,i=n.h,a=t.c,o=a>>31;return(r^a|i^o)===0}return e===null?t===null:In(e,t)}return e===null?t===null:In(e,t)}),O.iu=(function(e,t){if(typeof e==`number`){var n=+e;if(typeof t==`number`)return n===+t;if(t instanceof Nn){var r=er(t),i=r.l;return n===4294967296*r.h+(i>>>0)}return!1}if(e instanceof Nn){var a=er(e),o=a.l,s=a.h;if(t instanceof Nn){var c=er(t),l=c.l,u=c.h;return(o^l|s^u)===0}if(typeof t==`number`){var d=+t;return 4294967296*s+(o>>>0)===d}return!1}return e===null?t===null:In(e,t)}),O.it=(function(e,t){if(t instanceof Mn)return e.c===t.c;if(jc(t)){if(typeof t==`number`)return+t===e.c;if(t instanceof Nn){var n=er(t),r=n.l,i=n.h,a=e.c,o=a>>31;return(r^a|i^o)===0}return t===null?e===null:In(t,e)}return e===null&&t===null}),new M().i(gs,`scala.runtime.BoxesRunTime$`,{fe:1});var _s;function vs(){return _s||=new gs,_s}var ys=new M().i(0,`scala.runtime.Null$`,{fh:1});function bs(){}O=bs.prototype=new A,O.constructor=bs,O.bg=(function(){throw Fd(new J,`tried to cast away nullability, but value is null`)}),new M().i(bs,`scala.runtime.Scala3RunTime$`,{fi:1});var xs;function Ss(){return xs||=new bs,xs}function Cs(){}O=Cs.prototype=new A,O.constructor=Cs,O.hO=(function(e){return e===null?ys.l():Pn(e)}),O.aV=(function(e,t){if(e instanceof j||e instanceof sr||e instanceof ur)return e.a[t];if(e instanceof cr){var n=e.a,r=t<<1;return k(n[r],n[r+1|0])}if(e instanceof lr)return e.a[t];if(e instanceof ir)return Zn(e.a[t]);if(e instanceof ar||e instanceof or||e instanceof rr)return e.a[t];throw e===null?Id(new J):new Ud(e)}),O.cu=(function(e,t,n){if(e instanceof j)e.a[t]=n;else if(e instanceof sr)e.a[t]=n|0;else if(e instanceof ur)e.a[t]=+n;else if(e instanceof cr){var r=er(n),i=e.a,a=t<<1;i[a]=r.l,i[a+1|0]=r.h}else if(e instanceof lr)e.a[t]=Math.fround(n);else if(e instanceof ir)e.a[t]=$n(n);else if(e instanceof ar)e.a[t]=n|0;else if(e instanceof or)e.a[t]=n|0;else if(e instanceof rr)e.a[t]=!!n;else throw e===null?Id(new J):new Ud(e)}),O.dw=(function(e){return Zo(e.aN(),e.O()+`(`,`,`,`)`)}),O.w=(function(e){if(e===null)return null;if(e.a.length===0){var t=vp();return Zp(),hp(t)}return new Fm(e)}),new M().i(Cs,`scala.runtime.ScalaRunTime$`,{fj:1});var ws;function L(){return ws||=new Cs,ws}function Ts(){}O=Ts.prototype=new A,O.constructor=Ts,O.m=(function(e,t){var n=this.cD(e,t),r=n;return n=r<<13|r>>>19,Math.imul(5,n)-430675100|0}),O.cD=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|r>>>17,n=Math.imul(461845907,n),e^n}),O.z=(function(e,t){return this.hZ(e^t)}),O.hZ=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),O.jf=(function(e,t){return t===e>>31?e:e^t}),O.ip=(function(e){var t=Bn(e);if(t===e)return t;var n=Oo().gX(e),r=n.l,i=n.h;if(4294967296*i+(r>>>0)===e)return r^i;var a=e|0;if(a===e&&1/e!=-1/0)return a;if(e!==e)return 2146959360;var o=Hn;return o.setFloat64(0,e,!0),(o.getInt32(0,!0)|0)^(o.getInt32(4,!0)|0)}),O.s=(function(e){if(e===null)return 0;if(typeof e==`number`)return this.ip(+e);if(e instanceof Nn){var t=er(e);return this.jf(t.l,t.h)}return Ln(e)}),O.j6=(function(e){throw jd(new Nd,``+e)}),new M().i(Ts,`scala.runtime.Statics$`,{fl:1});var Es;function R(){return Es||=new Ts,Es}function Ds(){}O=Ds.prototype=new A,O.constructor=Ds,O.hV=(function(e){return e}),new M().i(Ds,`scala.scalajs.js.defined$`,{fr:1});var Os;function ks(){return Os||=new Ds,Os}function As(){}O=As.prototype=new A,O.constructor=As,O.jS=(function(e,t){return setTimeout((()=>{t.K()}),e)}),new M().i(As,`scala.scalajs.js.timers.package$`,{fs:1});var js;function Ms(){return js||=new As,js}function Ns(){}O=Ns.prototype=new A,O.constructor=Ns,O.k1=(function(e){if(e instanceof Q)return e.cs;var t=[];return e.a0(new G((e=>t.push(e)|0))),t}),new M().i(Ns,`scala.scalajs.runtime.Compat$`,{fB:1});var Ps;function Fs(){return Ps||=new Ns,Ps}function Is(){}O=Is.prototype=new A,O.constructor=Is,O.jT=(function(e){var t=`Illegal command line`+(e.h0()===0?``:e.h0()===1?` after first argument`:` after `+e.h0()+` arguments`)+`: `+e.kg();Bc().jv().jc(t+`
`)}),new M().i(Is,`scala.util.CommandLineParser$`,{fD:1});function Ls(e){this.ds=null,this.ds=e}O=Ls.prototype=new A,O.constructor=Ls,O.k=(function(){return`DynamicVariable(`+this.ds+`)`}),new M().i(Ls,`scala.util.DynamicVariable`,{fF:1});function Rs(){}O=Rs.prototype=new A,O.constructor=Rs,O.hW=(function(e){matchAlts1:{matchAlts2:break matchAlts1;return!1}return!0}),O.k4=(function(e){return this.hW(e)?new sp(e):Y()}),new M().i(Rs,`scala.util.control.NonFatal$`,{fH:1});var zs;function Bs(){return zs||=new Rs,zs}function Vs(){}O=Vs.prototype=new A,O.constructor=Vs;function Hs(){}Hs.prototype=O,O.m=(function(e,t){var n=this.cD(e,t),r=n;return n=r<<13|r>>>19,Math.imul(5,n)-430675100|0}),O.cD=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|r>>>17,n=Math.imul(461845907,n),e^n}),O.z=(function(e,t){return this.c0(e^t)}),O.c0=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),O.cG=(function(e,t,n){var r=e.M();if(r===0)return n?t:tp(e.O());var i=t;n||(i=this.m(i,tp(e.O())));for(var a=0;a<r;)i=this.m(i,R().s(e.N(a))),a=1+a|0;return this.z(i,r)}),O.gC=(function(e,t,n){var r=e.M(),i=tp(n===null?e.O():n);if(r===0)return i;var a=t;a=this.m(a,i);for(var o=0;o<r;)a=this.m(a,R().s(e.N(o))),o=1+o|0;return this.z(a,r)}),O.k5=(function(e,t){for(var n=0,r=0,i=0,a=1,o=e.e();o.i();){var s=o.g(),c=R().s(s);n=n+c|0,r^=c,a=Math.imul(a,1|c),i=1+i|0}var l=t;return l=this.m(l,n),l=this.m(l,r),l=this.cD(l,a),this.z(l,i)}),O.ju=(function(e,t){var n=e.e(),r=t;if(!n.i())return this.z(r,0);var i=n.g();if(!n.i())return this.z(this.m(r,R().s(i)),1);var a=n.g(),o=R().s(i);r=this.m(r,o);for(var s=r,c=R().s(a),l=c-o|0,u=2;n.i();){r=this.m(r,c);var d=R().s(n.g());if(l!==(d-c|0)||l===0){for(r=this.m(r,d),u=1+u|0;n.i();)r=this.m(r,R().s(n.g())),u=1+u|0;return this.z(r,u)}c=d,u=1+u|0}return this.c0(this.m(this.m(s,l),c))}),O.t=(function(e,t){var n=t,r=xo().a5(e);switch(r){case 0:return this.z(n,0);case 1:return this.z(this.m(n,R().s(L().aV(e,0))),1);default:var i=R().s(L().aV(e,0));n=this.m(n,i);for(var a=n,o=R().s(L().aV(e,1)),s=o-i|0,c=2;c<r;){n=this.m(n,o);var l=R().s(L().aV(e,c));if(s!==(l-o|0)||s===0){for(n=this.m(n,l),c=1+c|0;c<r;)n=this.m(n,R().s(L().aV(e,c))),c=1+c|0;return this.z(n,r)}o=l,c=1+c|0}return this.c0(this.m(this.m(a,s),o))}}),O.jB=(function(e,t,n,r){return this.c0(this.m(this.m(this.m(r,e),t),n))}),O.j4=(function(e,t){var n=t,r=e.f();switch(r){case 0:return this.z(n,0);case 1:return this.z(this.m(n,R().s(e.h(0))),1);default:var i=R().s(e.h(0));n=this.m(n,i);for(var a=n,o=R().s(e.h(1)),s=o-i|0,c=2;c<r;){n=this.m(n,o);var l=R().s(e.h(c));if(s!==(l-o|0)||s===0){for(n=this.m(n,l),c=1+c|0;c<r;)n=this.m(n,R().s(e.h(c))),c=1+c|0;return this.z(n,r)}o=l,c=1+c|0}return this.c0(this.m(this.m(a,s),o))}}),O.je=(function(e,t){for(var n=0,r=t,i=0,a=0,o=0,s=0,c=e;!c.c();){var l=c.L(),u=c.A(),d=R().s(l);switch(r=this.m(r,d),i){case 0:s=d,i=1;break;case 1:a=d-o|0,i=2;break;case 2:(a!==(d-o|0)||a===0)&&(i=3)}o=d,n=1+n|0,c=u}return i===2?this.jB(s,a,o,t):this.z(r,n)});function Us(e){this.b5=null,this.e1=null,this.cS=!1,this.e1=e,oi(this),this.cS=!1}O=Us.prototype=new A,O.constructor=Us,O.jw=(function(e){this.cS?(ui(e),this.e1.K()):li(this,e)}),O.jd=(function(){si(this),this.cS=!0}),new M().i(Us,`com.raquo.airstream.ownership.OneTimeOwner`,{c1:1,c2:1});function Ws(){}O=Ws.prototype=new A,O.constructor=Ws,O.ij=(function(e){return e!==null}),O.is=(function(e){return e?``:null}),O.bT=(function(e){return this.ij(e)}),O.aW=(function(e){return this.is(!!e)}),new M().i(Ws,`com.raquo.laminar.codecs.package$$anon$1`,{cp:1,a6:1});function Gs(e){if(e===null)throw Id(new J)}O=Gs.prototype=new A,O.constructor=Gs,O.aW=(function(e){return e}),O.bT=(function(e){return e}),new M().i(Gs,`com.raquo.laminar.codecs.package$$anon$2`,{cq:1,a6:1});function Ks(e){if(e===null)throw Id(new J)}O=Ks.prototype=new A,O.constructor=Ks,O.ii=(function(e){return rs(),Ec().jx(e)}),O.bT=(function(e){return this.ii(e)}),O.aW=(function(e){return``+ +e}),new M().i(Ks,`com.raquo.laminar.codecs.package$$anon$4`,{cr:1,a6:1});function qs(e){return new Gi(e,new q((e=>e+`px`)))}function Js(e,t,n,r){}O=Js.prototype=new Zi,O.constructor=Js,new M().i(Js,`com.raquo.laminar.keys.CompositeKey`,{cU:1,G:1});function Ys(e){this.cf=null,this.cf=e}O=Ys.prototype=new Zi,O.constructor=Ys;var Xs=new M().i(Ys,`com.raquo.laminar.keys.EventProp`,{cY:1,G:1});function z(e,t,n){return e.b6=t,e.cg=n,e}function B(){this.b6=null,this.cg=null}O=B.prototype=new Zi,O.constructor=B;function Zs(){}Zs.prototype=O,O.l=(function(e){return new _l(this,e,new $u(((e,t,n)=>{P().dM(e,t,n)})))}),O.dt=(function(e){return new vl(this,e.dN(),new $u(((e,t,n)=>{P().dM(e,this,t)})))}),new M().i(B,`com.raquo.laminar.keys.HtmlAttr`,{aw:1,G:1});function Qs(e,t){this.a9=null,this.d3=null,this.a9=e,this.d3=t}O=Qs.prototype=new Zi,O.constructor=Qs,O.dt=(function(e){var t=this.a9===`value`?new $u(((e,t,n)=>{var r=this.d3.aW(t),i=P().iQ(e,this);i!==void 0&&vs().y(r,i)||P().hf(e,this,r)})):new $u(((e,t,n)=>{P().jO(e,this,t)}));return new vl(this,e.dN(),t)}),new M().i(Qs,`com.raquo.laminar.keys.HtmlProp`,{ax:1,G:1});function $s(e,t,n){this.d5=null,this.d4=null,this.ch=null,this.ci=null,this.d5=e,this.d4=t;var r=n.c()?Y():new sp(n.r()+`:`+e);this.ch=r.c()?e:r.r(),this.ci=n.c()?Y():new sp(ea().jn(n.r()))}O=$s.prototype=new Zi,O.constructor=$s,new M().i($s,`com.raquo.laminar.keys.SvgAttr`,{cZ:1,G:1});function ec(){}O=ec.prototype=new A,O.constructor=ec,O.ab=(function(e){}),new M().i(ec,`com.raquo.laminar.modifiers.Modifier$$anon$1`,{d6:1,W:1});function tc(e,t){if(this.f9=null,this.f9=e,t===null)throw Id(new J)}O=tc.prototype=new A,O.constructor=tc,O.ab=(function(e){var t=Ur(),n=(()=>{this.f9.b(e)});if(Ur(),t.B)n();else{t.B=!0;try{n()}finally{t.B=!1,Br(t)}}}),new M().i(tc,`com.raquo.laminar.modifiers.Modifier$$anon$2`,{d7:1,W:1});function nc(){}O=nc.prototype=new A,O.constructor=nc,new M().i(nc,`com.raquo.laminar.modifiers.RenderableNode$$anon$1`,{da:1,d8:1});function rc(){}O=rc.prototype=new A,O.constructor=rc,new M().i(rc,`com.raquo.laminar.modifiers.RenderableSeq$collectionSeqRenderable$`,{dc:1,db:1});var ic;function ac(){return ic||=new rc,ic}function oc(e){e.gG(new ei(new Zu((()=>{throw Il(new W,`Attempting to use owner of unmounted element: `+Zo(P().ih(e.cI(),(P(),$())),``,` > `,``))}))))}function sc(e,t,n){return e.dc=t,e}function cc(){this.dc=null}O=cc.prototype=new A,O.constructor=cc;function lc(){}lc.prototype=O,O.dG=(function(){return this.dc}),O.bS=(function(e){var t=this.i5();return e.a0(new q((e=>{e.ab(t)}))),t}),O.i5=(function(){return new Gf(this,P().id(this))}),new M().i(cc,`com.raquo.laminar.tags.HtmlTag`,{aC:1,ac:1});function uc(e,t){this.fh=null,this.fh=e}O=uc.prototype=new A,O.constructor=uc,new M().i(uc,`com.raquo.laminar.tags.SvgTag`,{dl:1,ac:1});function dc(){}O=dc.prototype=new A,O.constructor=dc,O.aW=(function(e){return e}),O.bT=(function(e){return e}),new M().i(dc,`io.github.nguyenyou.webawesome.laminar.UnionAsStringCodec$$anon$1`,{dv:1,a6:1});function fc(e,t){return e.bn=t,e.dv(),e}function pc(){this.bn=null,this.bm=null,this.bo=!1,this.bp=null,this.bq=!1}O=pc.prototype=new A,O.constructor=pc;function mc(){}mc.prototype=O,O.jZ=(function(){return this.bo||=(this.bm=new bl(this.bn,new G((e=>void 0)),void 0),!0),this.bm}),O.a4=(function(e,t){var n=this.jZ().bS(new Q([]));return e.a0(new G((e=>{e.b(this).ab(n)}))),t.a0(new G((e=>{e.ab(n)}))),n}),O.k2=(function(){return this.bq||=(this.bp=new Nl,!0),this.bp});function hc(){this.dd=null,gc=this,this.dd=Sr(67,`1C]4m6m=c4]4]4]4]4]4]4]4]4]3g4]2m9]2m1Jm1m9s4g5mm6]3]4mm12>mEm1m6m1]3]=]DI]1<m24mIs4g2c4w9];]4]<]3m3m=m3mH]8]2m=mBHm3]4mK3{gggg2:g=m@]13]4E]`)}O=hc.prototype=new A,O.constructor=hc,O.k3=(function(e){if(e>>>0>1114111)throw Od(new kd);return String.fromCodePoint(e)}),O.ik=(function(e,t){if(e<256)var n=(e-48|0)>>>0<=9?e-48|0:(e-65|0)>>>0<=25?e-55|0:(e-97|0)>>>0<=25?e-87|0:-1;else if((e-65313|0)>>>0<=25)var n=e-65303|0;else if((e-65345|0)>>>0<=25)var n=e-65335|0;else{var r=wo().i1(this.dd,e),i=r<0?-2-r|0:r;if(i<0)var n=-1;else var a=e-this.dd.a[i]|0,n=a>9?-1:a}return n<t?n:-1}),new M().i(hc,`java.lang.Character$`,{dC:1,a:1});var gc;function _c(){return gc||=new hc,gc}function vc(e){return(1&e.at)<<24>>24||(e.dg=/* @__PURE__ */ RegExp(`^[\\x00-\\x20]*([+-]?(?:NaN|Infinity|(?:\\d+\\.?\\d*|\\.\\d+)(?:[eE][+-]?\\d+)?)[fFdD]?)[\\x00-\\x20]*$`),e.at=(1|e.at)<<24>>24),e.dg}function yc(e){return(1&e.at)<<24>>24?e.dg:vc(e)}function bc(e){return(2&e.at)<<24>>24||(e.df=/* @__PURE__ */ RegExp(`^[\\x00-\\x20]*([+-]?)0[xX]([0-9A-Fa-f]*)\\.?([0-9A-Fa-f]*)[pP]([+-]?\\d+)[fFdD]?[\\x00-\\x20]*$`),e.at=(2|e.at)<<24>>24),e.df}function xc(e){return(2&e.at)<<24>>24?e.df:bc(e)}function Sc(e,t){var n=xc(e).exec(t);n===null&&Cc(t);var r=n[1],i=n[2],a=n[3],o=n[4];i===``&&a===``&&Cc(t);var s=e.jy(i,a,o,15);return r===`-`?-s:s}function Cc(e){throw new ep(`For input string: "`+e+`"`)}function wc(){this.dg=null,this.df=null,this.at=0}O=wc.prototype=new A,O.constructor=wc,O.jx=(function(e){var t=yc(this).exec(e);return t===null?Sc(this,e):+parseFloat(t[1])}),O.jy=(function(e,t,n,r){for(var i=``+e+t,a=-(t.length<<2)|0,o=i.length-1|0,s=0;s!==o&&i.charCodeAt(s)===48;)s=1+s|0;var c=s,l=i.substring(c),u=l.length,d=u>r;if(d){for(var f=!1,p=r;!f&&p!==u;)l.charCodeAt(p)!==48&&(f=!0),p=1+p|0;var m=f?`1`:`0`,h=l.substring(0,r)+m}else var h=l;var g=a+(d?(l.length-(1+r|0)|0)<<2:0)|0;return Aa().jL(+parseInt(h,16),Bn(+parseInt(n,10))+g|0)}),new M().i(wc,`java.lang.Double$`,{dE:1,a:1});var Tc;function Ec(){return Tc||=new wc,Tc}function Dc(){}O=Dc.prototype=new A,O.constructor=Dc,O.bY=(function(e){throw new ep(`For input string: "`+e+`"`)}),O.jb=(function(e,t,n){e===null&&kc().bY(e);var r=e.length;r===0&&kc().bY(e);var i=_c(),a=e.charCodeAt(0),o=a===45,s=o?-1:0,c=(o||a===43)|0;c>=r&&kc().bY(e);var l=0;for(l=0;c!==r;){var u=i.ik(e.charCodeAt(c),t);(u<0||l>>>0>n>>>0)&&kc().bY(e),l=Math.imul(l,t)+u|0,c=1+c|0}return l>>>0>(2147483647-s|0)>>>0&&kc().bY(e),(l^s)-s|0}),new M().i(Dc,`java.lang.Integer$`,{dJ:1,a:1});var Oc;function kc(){return Oc||=new Dc,Oc}function Ac(){}O=Ac.prototype=new A,O.constructor=Ac;function jc(e){return e instanceof Ac||typeof e==`number`||e instanceof Nn}function Mc(e,t,n,r,i){this.b9=null,this.bs=null,this.ba=null,this.bb=0,this.b8=0,this.b9=e,this.bs=t,this.ba=n,this.bb=r,this.b8=i}O=Mc.prototype=new A,O.constructor=Mc,O.d=(function(e){return e instanceof Mc&&this.ba===e.ba&&this.bb===e.bb&&this.b8===e.b8&&this.b9===e.b9&&this.bs===e.bs}),O.k=(function(){var e=``;return this.b9!==`<jscode>`&&(e=``+e+this.b9+`.`),e=``+e+this.bs,this.ba===null?e+=`(Unknown Source)`:(e=e+`(`+this.ba,this.bb>=0&&(e=e+`:`+this.bb,this.b8>=0&&(e=e+`:`+this.b8)),e+=`)`),e}),O.j=(function(){return tp(this.b9)^tp(this.bs)^tp(this.ba)^this.bb^this.b8});var Nc=new M().i(Mc,`java.lang.StackTraceElement`,{aM:1,a:1});function Pc(){}O=Pc.prototype=new A,O.constructor=Pc,O.jo=(function(e,t,n){for(var r=t+n|0,i=``,a=t;a!==r;)i+=``+Vn(e.a[a]),a=1+a|0;return i}),new M().i(Pc,`java.lang.String$`,{dV:1,a:1});var Fc;function Ic(){return Fc||=new Pc,Fc}function V(e,t,n,r,i){return e.fU=t,e.fV=i,i&&e.iE(),e}var Lc=class extends Error{constructor(){super(),this.fU=null,this.fV=!1,this.fT=null,this.ck=null}j5(e){return this}bW(){return this.fU}iE(){var e=this instanceof Z?this.X:this;return this.fT=Object.prototype.toString.call(e)===`[object Error]`?e:Error.captureStackTrace===void 0||Object.isSealed(this)?/* @__PURE__ */ Error():(Error.captureStackTrace(this),this),this}iS(){return this.ck===null&&(this.ck=this.fV?eo().iC(this.fT):new(Nc.r()).C(0)),this.ck}k(){var e=Fn(this),t=this.bW();return t===null?e:e+`: `+t}j(){return tr.prototype.j.call(this)}d(e){return tr.prototype.d.call(this,e)}get message(){var e=this.bW();return e===null?``:e}get name(){return Fn(this)}toString(){return this.k()}};function Rc(){this.fX=null,zc=this,this.fX=new Ls(ao().fR)}O=Rc.prototype=new A,O.constructor=Rc,O.jv=(function(){return this.fX.ds}),new M().i(Rc,`scala.Console$`,{ed:1,f5:1});var zc;function Bc(){return zc||=new Rc,zc}function Vc(){}O=Vc.prototype=new A,O.constructor=Vc;function Hc(){}Hc.prototype=O,O.k=(function(){return`<function1>`});function Uc(){}O=Uc.prototype=new zo,O.constructor=Uc;function Wc(){}Wc.prototype=O,O.kb=(function(e){if(e===null)return null;if(e.a.length===0){var t=wp();return Zp(),t.gg}return new Ym(e)});function Gc(e,t){if(t===e)e.a3(yf().gT(t));else for(var n=t.e();n.i();)e.Y(n.g());return e}function Kc(){}O=Kc.prototype=new A,O.constructor=Kc;function qc(){}qc.prototype=O,O.k=(function(){return`<function0>`});function Jc(){}O=Jc.prototype=new A,O.constructor=Jc;function Yc(){}Yc.prototype=O,O.k=(function(){return`<function1>`});function Xc(){}O=Xc.prototype=new A,O.constructor=Xc;function Zc(){}Zc.prototype=O,O.k=(function(){return`<function2>`});function Qc(){}O=Qc.prototype=new A,O.constructor=Qc;function $c(){}$c.prototype=O,O.k=(function(){return`<function3>`});function el(e){this.cr=!1,this.cr=e}O=el.prototype=new A,O.constructor=el,O.k=(function(){return``+this.cr}),new M().i(el,`scala.runtime.BooleanRef`,{fd:1,a:1});function tl(e){this.bF=0,this.bF=e}O=tl.prototype=new A,O.constructor=tl,O.k=(function(){return``+this.bF}),new M().i(tl,`scala.runtime.IntRef`,{ff:1,a:1});function nl(){this.q=0,this.gv=0,this.hw=0,this.hv=0,rl=this,this.q=tp(`Seq`),this.gv=tp(`Map`),this.hw=tp(`Set`),this.hv=this.k5($(),this.gv)}O=nl.prototype=new Hs,O.constructor=nl,O.he=(function(e){return am(e)?this.j4(e,this.q):e instanceof Bm?this.je(e,this.q):this.ju(e,this.q)}),new M().i(nl,`scala.util.hashing.MurmurHash3$`,{fJ:1,fI:1});var rl;function H(){return rl||=new nl,rl}var il=class extends Lc{};function al(){this.cN=null,this.dQ=null,this.dR=null,ol=this,this.cN=yf().gA(L().w(new(Lo.r()).C([]))),this.dQ=new q((e=>{try{console.error(this.cz(e)+`
`+this.iR(e,`
`))}catch(e){var t=e instanceof Lc?e:new Z(e);console.error(`Error in AirstreamError.consoleErrorCallback:`),console.error(t)}})),this.dR=new q((e=>{console.warn(`Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.`);var t=e;throw t instanceof Z?t.X:t})),this.jC(this.dQ)}O=al.prototype=new A,O.constructor=al,O.cz=(function(e){try{var t=e.bW()}catch{var t=`(Unable to get the message for this error - exception occurred in its getMessage)`}return Pn(e).dE()+`: `+t}),O.iR=(function(e,t){try{return Zo(Vl().kb(e.iS()),``,t,``)}catch{return`(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)`}}),O.jC=(function(e){this.cN.Y(e)}),O.a2=(function(e){for(var t=this.cN.e();t.i();){var n=t.g();try{n.b(e)}catch(e){var r=e instanceof Lc?e:new Z(e),i=this.dR;if(n===null?i===null:n.d(i))throw r instanceof Z?r.X:r;console.warn(`Error processing an unhandled error callback:`),Ms().jS(0,new Zu((e=>(()=>{throw e instanceof Z?e.X:e}))(r)))}}}),new M().i(al,`com.raquo.airstream.core.AirstreamError$`,{bI:1,f3:1,f4:1});var ol;function U(){return ol||=new al,ol}function sl(e){e.c9=!0,e.cb=void 0}function cl(e,t,n){return rd(e,Or().hk(t,Go().cm,!0),n)}function ll(e,t){e.c9?ad(e,t):dl(e).push(new Zu((()=>{ad(e,t)})))}function ul(e){return ld(e)>0}function dl(e){var t=e.cb;if(t===void 0){var n=N().x(L().w(new(Io.r()).C([])));return e.cb=n,n}return t}var fl=new M().i(1,`com.raquo.airstream.core.Observer`,{ab:1,a5:1,a2:1});function pl(e,t,n,r){return new tc(new q((e=>{(Di(),new wi(t,null,null)).a0(new q((e=>(t=>{n.b(t).ab(e)}))(e)))})),ia())}function ml(e,t,n){return new tc(new q((e=>{(Di(),new wi(t,null,null)).a0(new q((e=>(t=>{ua().ct(e,t,void 0)}))(e)))})),ia())}function hl(e,t){this.b7=null,this.d6=null,this.d7=null,this.b7=e,this.d6=(n=>{var r=e.d0.b(n);r.c()||t.b(r.r())}),this.d7=(()=>{var e=null;e=this;var t={};if(e===null)throw Id(new J);return t.capture=e.b7.d2,t.passive=e.b7.d1,t})()}O=hl.prototype=new A,O.constructor=hl,O.ab=(function(e){this.i2(e,!1)}),O.i2=(function(e,t){if(_d(e,this)===-1){var n=new q((t=>(P().hE(e.u,this),new di(t.f1,new Zu((()=>{var t=_d(e,this);t!==-1&&(gd(e,t),P().jF(e.u,this))})))))),r=t?pa().k6(e,n):ai().cM(e.aa,new q((t=>n.b(new ta(e,t)))),!1);return hd(e,this,t),r}var i=new q((e=>void 0));return ai().hh(e.aa,new q((t=>{i.b(new ta(e,t))})),!1)}),O.k=(function(){return`EventListener(`+this.b7.bl.cf+`)`});var gl=new M().i(hl,`com.raquo.laminar.modifiers.EventListener`,{d2:1,W:1,ay:1});function _l(e,t,n){this.f4=null,this.f5=null,this.f3=null,this.f4=e,this.f5=t,this.f3=n}O=_l.prototype=new A,O.constructor=_l,O.ab=(function(e){this.f3.gz(e,this.f4,this.f5)}),new M().i(_l,`com.raquo.laminar.modifiers.KeySetter`,{d3:1,W:1,dd:1});function vl(e,t,n){this.f6=null,this.f8=null,this.f7=null,this.f6=e,this.f8=t,this.f7=n}O=vl.prototype=new A,O.constructor=vl,O.ab=(function(e){this.i3(e)}),O.i3=(function(e){e.jr(this.f6);var t=this.f8,n=new q((t=>{this.f7.gz(e,t,this)}));return ai().jW(e.aa,t,n)}),new M().i(vl,`com.raquo.laminar.modifiers.KeyUpdater`,{d4:1,W:1,ay:1});function yl(e,t){if(this.db=null,this.fc=null,this.fd=null,this.fc=t,oc(this),e===null)throw Il(new W,`Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load`);if(!P().ja(e,document))throw Il(new W,`Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering`);this.fd=e,this.jl()}O=yl.prototype=new A,O.constructor=yl,O.cy=(function(){return this.db}),O.gG=(function(e){this.db=e}),O.jl=(function(){return this.db.gw(),ua().ct(this,this.fc,void 0)}),O.cI=(function(){return this.fd}),new M().i(yl,`com.raquo.laminar.nodes.RootNode`,{dj:1,aA:1,az:1});function bl(e,t,n){this.dc=null,this.fg=null,this.ff=null,this.fg=e,this.ff=n,sc(this,e,!1)}O=bl.prototype=new lc,O.constructor=bl,O.dG=(function(){return this.fg}),O.hN=(function(){var e=this.ff;return e===void 0?void 0:e.map((e=>e.kc.a9))}),new M().i(bl,`com.raquo.laminar.tags.CustomHtmlTag`,{aB:1,aC:1,ac:1});function xl(){this.b6=null,this.cg=null,this.fi=null,this.fj=!1,z(this,`error-correction`,new dc)}O=xl.prototype=new Zs,O.constructor=xl,O.iW=(function(){return this.fj||=(this.fi=Cl().l(`H`),!0),this.fi}),new M().i(xl,`io.github.nguyenyou.webawesome.laminar.CommonKeys$QrCodeErrorCorrection$`,{dq:1,aw:1,G:1});var Sl;function Cl(){return Sl||=new xl,Sl}function wl(){this.bn=null,this.bm=null,this.bo=!1,this.bp=null,this.bq=!1,this.fk=null,this.fl=!1,fc(this,`wa-icon`)}O=wl.prototype=new mc,O.constructor=wl,O.jm=(function(){return this.fl||=(this.fk=(K(),z(new B,`name`,F().C)),!0),this.fk}),O.dv=(function(){return Ut}),new M().i(wl,`io.github.nguyenyou.webawesome.laminar.Icon$`,{dr:1,ae:1,ad:1});var Tl;function El(){return Tl||=new wl,Tl}function Dl(){this.bn=null,this.bm=null,this.bo=!1,this.bp=null,this.bq=!1,this.fm=null,this.fn=!1,this.fq=null,this.fr=!1,this.fo=null,this.fp=!1,fc(this,`wa-input`)}O=Dl.prototype=new mc,O.constructor=Dl,O.cB=(function(){return this.fn||=(this.fm=(K(),z(new B,`label`,F().C)),!0),this.fm}),O.k8=(function(){return this.fr||=(this.fq=(K(),z(new B,`with-clear`,F().eI)),!0),this.fq}),O.jk=(function(){return this.fp||=(this.fo=(K(),z(new B,`maxlength`,F().du())),!0),this.fo}),O.dv=(function(){return En}),new M().i(Dl,`io.github.nguyenyou.webawesome.laminar.Input$`,{ds:1,ae:1,ad:1});var Ol;function kl(){return Ol||=new Dl,Ol}function Al(){this.bn=null,this.bm=null,this.bo=!1,this.bp=null,this.bq=!1,this.fO=null,this.fP=!1,this.fI=null,this.fJ=!1,this.fM=null,this.fN=!1,this.fy=null,this.fz=!1,this.fu=null,this.fv=!1,this.fK=null,this.fL=!1,this.fw=null,this.fx=!1,this.fA=null,this.fH=!1,this.fB=null,this.fC=!1,this.fD=null,this.fE=!1,this.fF=null,this.fG=!1,fc(this,`wa-qr-code`)}O=Al.prototype=new mc,O.constructor=Al,O.ao=(function(){return this.fP||=(this.fO=(K(),z(new B,`value`,F().C)),!0),this.fO}),O.cB=(function(){return this.fJ||=(this.fI=(K(),z(new B,`label`,F().C)),!0),this.fI}),O.jU=(function(){return this.fN||=(this.fM=(K(),z(new B,`size`,F().du())),!0),this.fM}),O.iD=(function(){return this.fz||=(this.fy=(K(),z(new B,`fill`,F().C)),!0),this.fy}),O.i0=(function(){return this.fv||=(this.fu=(K(),z(new B,`background`,F().C)),!0),this.fu}),O.jA=(function(){return this.fL||=(this.fK=(K(),z(new B,`radius`,F().du())),!0),this.fK}),O.bU=(function(){return this.fx||=(this.fw=Cl(),!0),this.fw}),O.iZ=(function(){return this.fH||=(this.fA=(K(),z(new B,`image`,F().C)),!0),this.fA}),O.j0=(function(){return this.fC||=(this.fB=(K(),z(new B,`image-background`,F().C)),!0),this.fB}),O.j1=(function(){return this.fE||=(this.fD=(K(),z(new B,`image-coverage`,F().C)),!0),this.fD}),O.j2=(function(){return this.fG||=(this.fF=(K(),z(new B,`image-padding`,F().C)),!0),this.fF}),O.dv=(function(){return jn}),new M().i(Al,`io.github.nguyenyou.webawesome.laminar.QrCode$`,{du:1,ae:1,ad:1});var jl;function Ml(){return jl||=new Al,jl}function Nl(){}O=Nl.prototype=new Hc,O.constructor=Nl,O.b=(function(e){return K().o}),new M().i(Nl,`io.github.nguyenyou.webawesome.laminar.WebComponent$toL$`,{dw:1,ee:1,e:1});function Pl(e){if(e.a8.Z)return e.a8.Q().dE()+`[]`;for(var t=e.a8.N,n=t.length-1|0;n>=0&&t.charCodeAt(n)===36;)n=n-1|0;if(n>=0&&(t.charCodeAt(n)-48|0)>>>0<=9){for(n=n-1|0;n>=0&&(t.charCodeAt(n)-48|0)>>>0<=9;)n=n-1|0;for(;n>=0&&t.charCodeAt(n)===36;)n=n-1|0}for(;;){if(n>=0)var r=n,i=t.charCodeAt(r),a=i!==36&&i!==46;else var a=!1;if(a)n=n-1|0;else break}var o=1+n|0;return t.substring(o)}function Fl(e){this.de=null,this.a8=e}O=Fl.prototype=new A,O.constructor=Fl,O.k=(function(){return(this.a8.Y?`interface `:this.a8.X?``:`class `)+this.a8.N}),O.dE=(function(){return this.de===null&&(this.de=Pl(this)),this.de}),new M().i(Fl,`java.lang.Class`,{dD:1,a:1,O:1});function Il(e,t){return V(e,t,null,!0,!0),e}var W=class extends Lc{};new M().i(W,`java.lang.Exception`,{y:1,r:1,a:1});function Ll(){}O=Ll.prototype=new A,O.constructor=Ll;function Rl(){}Rl.prototype=O;function zl(){this.hu=null,Bl=this,ff(),this.hu=eu()}O=zl.prototype=new Wc,O.constructor=zl,new M().i(zl,`scala.Predef$`,{eo:1,eh:1,ei:1});var Bl;function Vl(){return Bl||=new zl,Bl}function Hl(e,t){return e.bw=t,e}function Ul(){this.bw=null}O=Ul.prototype=new A,O.constructor=Ul;function Wl(){}Wl.prototype=O,O.aX=(function(e){return this.bw.dD(e,Jp())}),O.ad=(function(){return this.bw.h7(Jp())}),O.aU=(function(e){return this.bw.dD(e,Jp())});function Gl(e,t){if(t<0)return 1;var n=e.p();if(n>=0)return n===t?0:n<t?-1:1;for(var r=0,i=e.e();i.i();){if(r===t)return 1;i.g(),r=1+r|0}return r-t|0}function Kl(e,t){return new ef(e).dB(t)}function ql(e,t,n){var r=t>0?t:0,i=n<0?-1:n<=r?0:n-r|0;return i===0?Zl().H:new rf(e,r,i)}function Jl(e,t){for(var n=t.e();e.i();)if(!n.i()||!vs().y(e.g(),n.g()))return!1;return!n.i()}function Yl(){this.H=null,Xl=this,this.H=new Xd}O=Yl.prototype=new A,O.constructor=Yl,O.ad=(function(){return new mp}),new M().i(Yl,`scala.collection.Iterator$`,{ew:1,a:1,U:1});var Xl;function Zl(){return Xl||=new Yl,Xl}function Ql(){}O=Ql.prototype=new A,O.constructor=Ql,new M().i(Ql,`scala.collection.immutable.Map$`,{eM:1,a:1,eC:1});var $l;function eu(){return $l||=new Ql,$l}function tu(e){this.gn=null,this.gn=e}O=tu.prototype=new qc,O.constructor=tu,O.K=(function(){return(0,this.gn)()}),new M().i(tu,`scala.runtime.AbstractFunction0.$$Lambda$07eded5776954a9c145e92c329afd52873ad179c`,{f9:1,bA:1,ag:1});function G(e){this.go=null,this.go=e}O=G.prototype=new Yc,O.constructor=G,O.b=(function(e){return(0,this.go)(e)}),new M().i(G,`scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919`,{fa:1,bB:1,e:1});function nu(){}O=nu.prototype=new A,O.constructor=nu;function ru(){}ru.prototype=O,O.k=(function(){return`<function1>`}),O.b=(function(e){return this.gB(e,Go().cm)});var iu=new M().i(0,`scala.runtime.Nothing$`,{fg:1,r:1,a:1});function au(){}O=au.prototype=new A,O.constructor=au,O.iL=(function(e){return(t=>e.b(t))}),new M().i(au,`scala.scalajs.js.Any$`,{fm:1,fn:1,fo:1});var ou;function su(){return ou||=new au,ou}function cu(){}O=cu.prototype=new qc,O.constructor=cu;function lu(){}lu.prototype=O;function uu(){}O=uu.prototype=new Yc,O.constructor=uu;function du(){}du.prototype=O;function fu(){}O=fu.prototype=new Zc,O.constructor=fu;function pu(){}pu.prototype=O;function mu(){}O=mu.prototype=new $c,O.constructor=mu;function hu(){}hu.prototype=O;function gu(e,t,n,r){if(this.dU=null,this.dS=!1,this.cO=null,this.dT=null,this.dU=e,this.dS=t,this.cO=n,r===null)throw Id(new J);this.dT=void 0}O=gu.prototype=new A,O.constructor=gu,O.cC=(function(){return this.dT}),O.cw=(function(){return wr(this)}),O.k=(function(){return Tr(this)}),O.dI=(function(e){try{this.dU.b(e)}catch(e){var t=e instanceof Lc?e:new Z(e);this.dS?this.cE(new If(t)):U().a2(new If(t))}}),O.cE=(function(e){try{this.cO.aY(e)?this.cO.b(e):U().a2(e)}catch(n){var t=n instanceof Lc?n:new Z(n);U().a2(new Lf(t,e))}}),O.bX=(function(e){e.bV(new q((e=>{this.cE(e)})),new q((e=>{this.dI(e)})))}),new M().i(gu,`com.raquo.airstream.core.Observer$$anon$8`,{bN:1,a5:1,a2:1,ab:1});function _u(e,t,n){if(this.cP=null,this.dV=!1,this.dW=null,this.cP=e,this.dV=t,n===null)throw Id(new J);this.dW=void 0}O=_u.prototype=new A,O.constructor=_u,O.cC=(function(){return this.dW}),O.cw=(function(){return wr(this)}),O.k=(function(){return Tr(this)}),O.dI=(function(e){this.bX(new Ff(e))}),O.cE=(function(e){this.bX(new Pf(e))}),O.bX=(function(e){try{this.cP.aY(e)?this.cP.b(e):e.bV(new q((e=>{U().a2(e)})),new q((e=>void 0)))}catch(n){var t=n instanceof Lc?n:new Z(n);this.dV&&e.h5()?this.cE(new If(t)):e.bV(new q((e=>{U().a2(new Lf(t,e))})),new q((e=>{U().a2(new If(t))})))}}),new M().i(_u,`com.raquo.airstream.core.Observer$$anon$9`,{bO:1,a5:1,a2:1,ab:1});function vu(e){if(this.ed=null,this.ee=!1,this.hl=null,e===null)throw Id(new J);Ii(this)}O=vu.prototype=new A,O.constructor=vu,O.jY=(function(){return this.ee||=(this.ed=new uc(`svg`,!1),!0),this.ed}),new M().i(vu,`com.raquo.laminar.api.Laminar$svg$`,{cj:1,cM:1,ct:1,cv:1});function yu(){this.o=null,bu=this,this.o=new um}O=yu.prototype=new A,O.constructor=yu,new M().i(yu,`com.raquo.laminar.api.package$`,{cm:1,ar:1,av:1,aq:1});var bu;function K(){return bu||=new yu,bu}function xu(e,t,n){return e.ar=t,e.as=n,e}function Su(){this.ar=null,this.as=null}O=Su.prototype=new Zi,O.constructor=Su;function Cu(){}Cu.prototype=O,O.l=(function(e){return new _l(this,Rn(e),new $u(((e,t,n)=>{P().hg(e,t,n)})))});function wu(){}O=wu.prototype=new A,O.constructor=wu;function Tu(){}Tu.prototype=O;function Eu(e,t){return e===t}function Du(e){return e?1231:1237}var Ou=new M().i(0,`java.lang.Boolean`,{dA:1,a:1,R:1,O:1},(e=>typeof e==`boolean`));function ku(e){return e}function Au(e,t){return t instanceof Mn&&e===t.c}var ju=new M().i(0,`java.lang.Character`,{aI:1,a:1,R:1,O:1},(e=>e instanceof Mn));function Mu(e,t){return V(e,t,null,!0,!0),e}var Nu=class extends W{};new M().i(Nu,`java.lang.RuntimeException`,{H:1,y:1,r:1,a:1});function Pu(){this.n=null,this.n=``}O=Pu.prototype=new A,O.constructor=Pu,O.hQ=(function(e){var t=Ic().jo(e,0,e.a.length);return this.n=``+this.n+t,this}),O.k=(function(){return this.n}),O.f=(function(){return this.n.length}),O.gD=(function(e){return this.n.charCodeAt(e)}),new M().i(Pu,`java.lang.StringBuilder`,{dW:1,af:1,aG:1,a:1});function Fu(){}O=Fu.prototype=new Rl,O.constructor=Fu;function Iu(){}Iu.prototype=O;function Lu(){}O=Lu.prototype=new A,O.constructor=Lu,O.k=(function(){return`<function1>`}),O.aY=(function(e){return!1}),O.hT=(function(e){throw new Ud(e)}),O.b=(function(e){this.hT(e)}),new M().i(Lu,`scala.PartialFunction$$anon$1`,{en:1,e:1,g:1,a:1});function Ru(){}O=Ru.prototype=new A,O.constructor=Ru;function zu(){}zu.prototype=O,O.p=(function(){return-1}),O.aM=(function(e,t,n){return Xo(this,e,t,n)}),O.be=(function(e,t,n,r){return Qo(this,e,t,n,r)}),O.e=(function(){return this}),O.dB=(function(e){return Kl(this,e)}),O.cx=(function(e){return this.c1(e,-1)}),O.c1=(function(e,t){return ql(this,e,t)}),O.k=(function(){return`<iterator>`});function Bu(e,t){return e.bz=t,e}function Vu(){this.bz=null}O=Vu.prototype=new A,O.constructor=Vu;function Hu(){}Hu.prototype=O,O.gA=(function(e){return this.bz.aU(e)}),O.gT=(function(e){return this.bz.aX(e)}),O.ad=(function(){return this.bz.ad()}),O.aU=(function(e){return this.gA(e)}),O.aX=(function(e){return this.gT(e)});function Uu(e,t){return t>=0&&e.a1(t)>0}function Wu(e){return e.a1(0)===0}function Gu(e,t){var n=e.p();if(n!==-1){var r=t.p();if(r!==-1){if(n!==r)return!1;if(n===0)return!0}}return Jl(e.e(),t)}function Ku(e,t){for(var n=e.aZ().ad(),r=e.e();r.i();)n.Y(t.b(r.g()));return n.ae()}function qu(e,t){if(this.gi=null,this.co=null,this.gi=e,t===null)throw Id(new J);this.co=t}O=qu.prototype=new A,O.constructor=qu,O.hI=(function(e){return this.co.Y(e),this}),O.hB=(function(e){return this.co.a3(e),this}),O.ae=(function(){return this.gi.b(this.co.ae())}),O.Y=(function(e){return this.hI(e)}),O.a3=(function(e){return this.hB(e)}),new M().i(qu,`scala.collection.mutable.Builder$$anon$1`,{eW:1,S:1,T:1,V:1});function Ju(e,t){return e.bC=t,e}function Yu(){this.bC=null}O=Yu.prototype=new A,O.constructor=Yu;function Xu(){}Xu.prototype=O,O.hJ=(function(e){return this.bC.Y(e),this}),O.hC=(function(e){return this.bC.a3(e),this}),O.ae=(function(){return this.bC}),O.Y=(function(e){return this.hJ(e)}),O.a3=(function(e){return this.hC(e)}),new M().i(Yu,`scala.collection.mutable.GrowableBuilder`,{br:1,S:1,T:1,V:1});function Zu(e){this.gr=null,this.gr=e}O=Zu.prototype=new lu,O.constructor=Zu,O.K=(function(){return(0,this.gr)()}),new M().i(Zu,`scala.scalajs.runtime.AnonFunction0.$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d`,{fu:1,ft:1,bA:1,ag:1});function q(e){this.gs=null,this.gs=e}O=q.prototype=new du,O.constructor=q,O.b=(function(e){return(0,this.gs)(e)}),new M().i(q,`scala.scalajs.runtime.AnonFunction1.$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1`,{fw:1,fv:1,bB:1,e:1});function Qu(e){this.gt=null,this.gt=e}O=Qu.prototype=new pu,O.constructor=Qu,O.dy=(function(e,t){return(0,this.gt)(e,t)}),new M().i(Qu,`scala.scalajs.runtime.AnonFunction2.$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7`,{fy:1,fx:1,fb:1,ef:1});function $u(e){this.gu=null,this.gu=e}O=$u.prototype=new hu,O.constructor=$u,O.gz=(function(e,t,n){return(0,this.gu)(e,t,n)}),new M().i($u,`scala.scalajs.runtime.AnonFunction3.$$Lambda$73f37e31ba038fe839c174212837da323f140c96`,{fA:1,fz:1,fc:1,eg:1});function ed(){}O=ed.prototype=new A,O.constructor=ed;function td(){}td.prototype=O,O.aN=(function(){return new Kd(this)});function nd(e){e.bk=N().x(L().w(new(fl.r()).C([]))),e.cW=N().x(L().w(new(Cr.r()).C([]))),e.cc=!1}function rd(e,t,n){var r=Ur(),i=(()=>{od(e);var r=id(e,t,n);return t.bX(Ip(e)),sd(e),r}),a=!ul(e);if(r.B||!a)var o=i();else{r.B=!0;try{var o=i()}finally{r.B=!1,Br(r)}}return o}function id(e,t,n){var r=new di(n,new Zu((()=>{ll(e,t)})));return e.bk.push(t),r}function ad(e,t){jr().jH(e.bk,t)&&cd(e)}function od(e){e.cc||=!0}function sd(e){ld(e)===1&&zf(e)}function cd(e){ul(e)||(e.cc=!1)}function ld(e){var t=e.bk.length,n=e.cW;return(t|0)+(n.length|0)|0}function ud(e){e.e7=Or().iM(new dd(e),(Or(),!0))}function dd(e){if(this.e8=null,e===null)throw Id(new J);this.e8=e}O=dd.prototype=new ru,O.constructor=dd,O.j9=(function(e){return!0}),O.hY=(function(e,t){new Fr(new q((t=>{this.e8.jM(e,t)})))}),O.aY=(function(e){return this.j9(e)}),O.gB=(function(e,t){return this.hY(e,t)}),new M().i(dd,`com.raquo.airstream.state.Var$$anon$1`,{c9:1,bC:1,e:1,g:1,a:1});function fd(e){if(e===null)throw Id(new J)}O=fd.prototype=new ru,O.constructor=fd,O.aY=(function(e){return typeof e==`string`||!1}),O.gB=(function(e,t){return typeof e==`string`?e:t.b(e)}),new M().i(fd,`com.raquo.laminar.DomApi$$anon$2`,{ce:1,bC:1,e:1,g:1,a:1});function pd(e,t){this.ce=null,this.cZ=null,this.ce=e,this.cZ=t}O=pd.prototype=new A,O.constructor=pd,O.ab=(function(e){var t=this.cZ;t!==void 0&&t.hb(e,this.ce),ua().ct(e,this.ce,void 0)}),O.k9=(function(e){return new pd(this.ce,e.hS(this.cZ))}),new M().i(pd,`com.raquo.laminar.inserters.StaticChildInserter`,{cR:1,W:1,cP:1,cT:1,cO:1});function md(e){e.d8=new pi(new Zu((()=>{e.aa.gw()})),new Zu((()=>{e.aa.ig()}))),e.aR=void 0}function hd(e,t,n){if(e.aR===void 0)e.aR=N().x(L().w(new(gl.r()).C([t])));else if(n){var r=e.aR;if(r===void 0)throw new Bd(`undefined.get`);r.unshift(t)}else{var i=e.aR;if(i===void 0)throw new Bd(`undefined.get`);i.push(t)}}function gd(e,t){var n=e.aR;n!==void 0&&n.splice(t,1)}function _d(e,t){var n=e.aR;if(n===void 0)return-1;for(var r=!1,i=0;!r&&i<(n.length|0);){var a=n[i];(a===null?t===null:In(a,t))?r=!0:i=1+i|0}return r?i:-1}function vd(e,t){bd(e,e.cj,t)&&xd(e,t)}function yd(e,t){var n=e.cj;e.cj=t,bd(e,n,t)||xd(e,t)}function bd(e,t,n){var r=!t.c()&&!t.r().cy().F.c(),i=!n.c()&&!n.r().cy().F.c();return r&&!i}function xd(e,t){Sd(e,t.c()?Y():new sp(t.r().cy()))}function Sd(e,t){if(t.c())e.d8.i8();else{var n=t.r();e.d8.jP(n)}}function Cd(){}O=Cd.prototype=new Tu,O.constructor=Cd;function wd(){}wd.prototype=O;var Td=class extends Nu{constructor(e){super(),V(this,e,null,!0,!0)}};new M().i(Td,`java.lang.ArithmeticException`,{dz:1,H:1,y:1,r:1,a:1});var Ed=new M().i(0,`java.lang.Byte`,{dB:1,X:1,a:1,R:1,O:1},(e=>qn(e)));function Dd(e,t){return V(e,t,null,!0,!0),e}function Od(e){return V(e,null,null,!0,!0),e}var kd=class extends Nu{};new M().i(kd,`java.lang.IllegalArgumentException`,{aK:1,H:1,y:1,r:1,a:1});var Ad=class extends Nu{constructor(e){super(),V(this,e,null,!0,!0)}};new M().i(Ad,`java.lang.IllegalStateException`,{dG:1,H:1,y:1,r:1,a:1});function jd(e,t){return V(e,t,null,!0,!0),e}function Md(e,t){return V(e,`Index out of range: `+t,null,!0,!0),e}var Nd=class extends Nu{};new M().i(Nd,`java.lang.IndexOutOfBoundsException`,{dH:1,H:1,y:1,r:1,a:1});function Pd(){}O=Pd.prototype=new Tu,O.constructor=Pd,new M().i(Pd,`java.lang.JSConsoleBasedPrintStream$DummyOutputStream`,{dM:1,aF:1,aD:1,aH:1,aE:1});function Fd(e,t){return V(e,t,null,!0,!0),e}function Id(e){return V(e,null,null,!0,!0),e}var J=class extends Nu{};new M().i(J,`java.lang.NullPointerException`,{dP:1,H:1,y:1,r:1,a:1});var Ld=new M().i(0,`java.lang.Short`,{dS:1,X:1,a:1,R:1,O:1},(e=>Jn(e))),Rd=class extends Nu{constructor(e){super(),V(this,e,null,!0,!0)}};new M().i(Rd,`java.lang.UnsupportedOperationException`,{e0:1,H:1,y:1,r:1,a:1});var zd=class extends Nu{constructor(e){super(),V(this,e,null,!0,!0)}};new M().i(zd,`java.util.ConcurrentModificationException`,{e5:1,H:1,y:1,r:1,a:1});var Bd=class extends Nu{constructor(e){super(),V(this,e,null,!0,!0)}};new M().i(Bd,`java.util.NoSuchElementException`,{e6:1,H:1,y:1,r:1,a:1});function Vd(){}O=Vd.prototype=new Iu,O.constructor=Vd,O.b=(function(e){return e}),O.k=(function(){return`generalized constraint`}),new M().i(Vd,`scala.$less$colon$less$$anon$1`,{eb:1,e8:1,e9:1,e:1,a:1});function Hd(e){if(!e.fZ){if(e.cl===null)var t=`null`;else{var n=L().hO(e.cl),r=n===null?`of a JS class`:`of class `+n.a8.N;try{var t=e.cl+` (`+r+`)`}catch{var t=`an instance `+r}}e.fY=t,e.fZ=!0}return e.fY}var Ud=class extends Nu{constructor(e){super(),this.cl=null,this.fY=null,this.fZ=!1,this.cl=e,V(this,null,null,!0,!0)}bW(){return Hd(this)}};new M().i(Ud,`scala.MatchError`,{ej:1,H:1,y:1,r:1,a:1});function Wd(){}O=Wd.prototype=new A,O.constructor=Wd;function Gd(){}Gd.prototype=O,O.aN=(function(){return new Kd(this)}),O.c=(function(){return this===Y()}),O.p=(function(){return!this.c()|0}),O.e=(function(){return this.c()?Zl().H:new Zd(this.r())});function Kd(e){if(this.bt=0,this.g2=0,this.g1=null,e===null)throw Id(new J);this.g1=e,this.bt=0,this.g2=e.M()}O=Kd.prototype=new zu,O.constructor=Kd,O.i=(function(){return this.bt<this.g2}),O.g=(function(){var e=this.g1.N(this.bt);return this.bt=1+this.bt|0,e}),new M().i(Kd,`scala.Product$$anon$1`,{ep:1,J:1,b:1,c:1,K:1});function qd(e){this.bw=null,Hl(this,e)}O=qd.prototype=new Wl,O.constructor=qd,new M().i(qd,`scala.collection.ClassTagSeqFactory$AnySeqDelegate`,{eu:1,et:1,a:1,U:1,Y:1});function Jd(e){return Zo(e,e.aL()+`(`,`, `,`)`)}function Yd(e){return!!(e&&e.$classData&&e.$classData.n.f)}function Xd(){}O=Xd.prototype=new zu,O.constructor=Xd,O.i=(function(){return!1}),O.jp=(function(){throw new Bd(`next on empty iterator`)}),O.p=(function(){return 0}),O.g=(function(){this.jp()}),O.c1=(function(e,t){return this}),new M().i(Xd,`scala.collection.Iterator$$anon$19`,{ex:1,J:1,b:1,c:1,K:1});function Zd(e){this.g4=null,this.bx=!1,this.g4=e,this.bx=!1}O=Zd.prototype=new zu,O.constructor=Zd,O.i=(function(){return!this.bx}),O.g=(function(){return this.bx?Zl().H.g():(this.bx=!0,this.g4)}),O.c1=(function(e,t){return this.bx||e>0||t===0?Zl().H:this}),new M().i(Zd,`scala.collection.Iterator$$anon$20`,{ey:1,J:1,b:1,c:1,K:1});function Qd(e){for(;;)if(e.D instanceof ef){var t=e.D;if(e.D=t.D,e.au=t.au,t.R!==null){e.Q===null&&(e.Q=t.Q);var n=t.Q;n===null&&Ss().bg(),n.by=e.R,e.R=t.R}}else return}function $d(e){for(;;)if(e.R===null)return e.D=null,e.Q=null,!1;else{if(e.D=e.R.iY(),e.Q===e.R){var t=e.Q;t===null&&Ss().bg(),e.Q=t.by}if(e.R=e.R.by,Qd(e),e.au)return!0;if(!(e.D!==null&&e.D.i()))continue;return e.au=!0,!0}}function ef(e){this.D=null,this.R=null,this.Q=null,this.au=!1,this.D=e,this.R=null,this.Q=null,this.au=!1}O=ef.prototype=new zu,O.constructor=ef,O.i=(function(){return this.au?!0:this.D===null?!1:this.D.i()?(this.au=!0,!0):$d(this)}),O.g=(function(){if(this.i()){this.au=!1;var e=this.D;return e===null&&Ss().bg(),e.g()}return Zl().H.g()}),O.dB=(function(e){var t=new es(e,null);if(this.R===null)this.R=t,this.Q=t;else{var n=this.Q;n===null&&Ss().bg(),n.by=t,this.Q=t}return this.D===null&&(this.D=Zl().H),this}),new M().i(ef,`scala.collection.Iterator$ConcatIterator`,{aY:1,J:1,b:1,c:1,K:1});function tf(e){for(;e.ai>0;)e.av.i()?(e.av.g(),e.ai=e.ai-1|0):e.ai=0}function nf(e,t){if(e.I<0)return-1;var n=e.I-t|0;return n<0?0:n}function rf(e,t,n){this.av=null,this.I=0,this.ai=0,this.av=e,this.I=n,this.ai=t}O=rf.prototype=new zu,O.constructor=rf,O.p=(function(){var e=this.av.p();if(e<0)return-1;var t=e-this.ai|0,n=t<0?0:t;if(this.I<0)return n;var r=this.I;return r<n?r:n}),O.i=(function(){return tf(this),this.I!==0&&this.av.i()}),O.g=(function(){return tf(this),this.I>0?(this.I=this.I-1|0,this.av.g()):this.I<0?this.av.g():Zl().H.g()}),O.c1=(function(e,t){var n=e>0?e:0;if(t<0)var r=nf(this,n);else if(t<=n)var r=0;else if(this.I<0)var r=t-n|0;else var i=nf(this,n),a=t-n|0,r=i<a?i:a;var o=this.ai+n|0;return r===0?Zl().H:o<0?(this.ai=2147483647,this.I=0,Kl(this,new tu((()=>new rf(this.av,o-2147483647|0,r))))):(this.ai=o,this.I=r,this)}),new M().i(rf,`scala.collection.Iterator$SliceIterator`,{eB:1,J:1,b:1,c:1,K:1});function af(e,t){return t>=0&&e.a1(t)>0}function of(e,t){if(t<0)throw jd(new Nd,``+t);var n=e.iq(t);if(n.c())throw jd(new Nd,``+t);return n.L()}function sf(e,t){return om(t)?cf(e,e,t):Gu(e,t)}function cf(e,t,n){for(var r=n,i=t;;)if(i===r)return!0;else{if(!i.c()&&!r.c()&&vs().y(i.L(),r.L())){var a=i.A(),o=r.A();i=a,r=o;continue}return i.c()&&r.c()}}function lf(e){if(this.bB=null,e===null)throw Id(new J);this.bB=e}O=lf.prototype=new zu,O.constructor=lf,O.i=(function(){return!this.bB.c()}),O.g=(function(){var e=this.bB.L();return this.bB=this.bB.A(),e}),new M().i(lf,`scala.collection.StrictOptimizedLinearSeqOps$$anon$1`,{eF:1,J:1,b:1,c:1,K:1});function uf(){df=this,$(),$()}O=uf.prototype=new A,O.constructor=uf,O.aU=(function(e){return $().hc(e)}),O.ad=(function(){return new oh}),O.aX=(function(e){return $().hc(e)}),new M().i(uf,`scala.collection.immutable.List$`,{eL:1,a:1,U:1,Y:1,a4:1});var df;function ff(){return df||=new uf,df}function pf(){this.gb=null,mf=this,this.gb=new j(0)}O=pf.prototype=new A,O.constructor=pf,O.aU=(function(e){return this.gU(e)}),O.gU=(function(e){var t=e.p();if(t>=0){var n=this.hd(this.gb,0,t),r=Yd(e)?e.aM(n,0,2147483647):e.e().aM(n,0,2147483647);if(r!==t)throw new Ad(`Copied `+r+` of `+t);return sh(new lh,n,t)}return ch(new lh).gx(e)}),O.ad=(function(){return new gf}),O.jK=(function(e,t){if(t<0)throw Mu(new Nu,`Overflow while resizing array of array-backed collection. Requested length: `+t+`; current length: `+e+`; increase: `+(t-e|0));if(t<=e)return-1;if(t>2147483639)throw Mu(new Nu,`Array of array-backed collection exceeds VM length limit of 2147483639. Requested length: `+t+`; current length: `+e);if(e>1073741819)return 2147483639;var n=e<<1,r=n>16?n:16;return t>r?t:r}),O.hd=(function(e,t,n){var r=this.jK(e.a.length,n);if(r<0)return e;var i=new j(r);return e.a7(0,i,0,t),i}),O.aX=(function(e){return this.gU(e)}),new M().i(pf,`scala.collection.mutable.ArrayBuffer$`,{eO:1,a:1,U:1,Y:1,a4:1});var mf;function hf(){return mf||=new pf,mf}function gf(){this.bC=null,Ju(this,(hf(),ch(new lh)))}O=gf.prototype=new Xu,O.constructor=gf,new M().i(gf,`scala.collection.mutable.ArrayBuffer$$anon$1`,{eP:1,br:1,S:1,T:1,V:1});function _f(){this.bz=null,Bu(this,Af())}O=_f.prototype=new Hu,O.constructor=_f,new M().i(_f,`scala.collection.mutable.Buffer$`,{eV:1,eD:1,a:1,U:1,Y:1});var vf;function yf(){return vf||=new _f,vf}function bf(e,t){return e.bD=t,e}function xf(){this.bD=null}O=xf.prototype=new A,O.constructor=xf;function Sf(){}Sf.prototype=O,O.a3=(function(e){return Gc(this,e)}),O.ae=(function(){return this.bD});function Cf(){}O=Cf.prototype=new A,O.constructor=Cf,O.aU=(function(e){return new oh().cL(e)}),O.ad=(function(){return Ju(new Yu,new oh)}),O.aX=(function(e){return new oh().cL(e)}),new M().i(Cf,`scala.collection.mutable.ListBuffer$`,{eZ:1,a:1,U:1,Y:1,a4:1});var wf;function Tf(){return wf||=new Cf,wf}function Ef(e,t){this.dr=null,this.gm=null,this.gl=0,this.dr=e,this.gm=t,this.gl=t.K()|0}O=Ef.prototype=new zu,O.constructor=Ef,O.i=(function(){return hs().gE(this.gl,this.gm.K()|0,`mutation occurred during iteration`),this.dr.i()}),O.g=(function(){return this.dr.g()}),new M().i(Ef,`scala.collection.mutable.MutationTracker$CheckedIterator`,{f1:1,J:1,b:1,c:1,K:1});function Df(e){this.gq=null,this.bG=0,this.gp=0,this.gq=e,this.bG=0,this.gp=e.M()}O=Df.prototype=new zu,O.constructor=Df,O.i=(function(){return this.bG<this.gp}),O.g=(function(){var e=this.gq.N(this.bG);return this.bG=1+this.bG|0,e}),new M().i(Df,`scala.runtime.ScalaRunTime$$anon$1`,{fk:1,J:1,b:1,c:1,K:1});function Of(){}O=Of.prototype=new A,O.constructor=Of,O.aU=(function(e){return this.gV(e)}),O.ad=(function(){return dh(new fh)}),O.gV=(function(e){return Gc(dh(new fh),e).ae()}),O.aX=(function(e){return this.gV(e)}),new M().i(Of,`scala.scalajs.js.WrappedArray$`,{fq:1,a4:1,a:1,U:1,Y:1});var kf;function Af(){return kf||=new Of,kf}function jf(){}O=jf.prototype=new A,O.constructor=jf,O.aU=(function(e){return this.gW(e)}),O.gW=(function(e){return this.ad().a3(e).ae()}),O.ad=(function(){return new qu(new G((e=>new Q(e.aK))),uh(new fh,[]))}),O.aX=(function(e){return this.gW(e)}),new M().i(jf,`scala.scalajs.runtime.WrappedVarArgs$`,{fC:1,a4:1,a:1,U:1,Y:1});var Mf;function Nf(){return Mf||=new jf,Mf}function Pf(e){this.bH=null,this.bH=e}O=Pf.prototype=new td,O.constructor=Pf,O.j=(function(){return H().cG(this,-1408943127,!0)}),O.d=(function(e){if(this===e)return!0;if(e instanceof Pf){var t=this.bH,n=e.bH;return t===null?n===null:t.d(n)}return!1}),O.k=(function(){return L().dw(this)}),O.M=(function(){return 1}),O.O=(function(){return`Failure`}),O.N=(function(e){if(e===0)return this.bH;throw Md(new Nd,e)}),O.h4=(function(){return!0}),O.h5=(function(){return!1}),O.bV=(function(e,t){return e.b(this.bH)}),new M().i(Pf,`scala.util.Failure`,{bF:1,bH:1,d:1,P:1,a:1});function Ff(e){this.bI=null,this.bI=e}O=Ff.prototype=new td,O.constructor=Ff,O.j=(function(){return H().cG(this,-1750213842,!0)}),O.d=(function(e){return this===e||e instanceof Ff&&vs().y(this.bI,e.bI)}),O.k=(function(){return L().dw(this)}),O.M=(function(){return 1}),O.O=(function(){return`Success`}),O.N=(function(e){if(e===0)return this.bI;throw Md(new Nd,e)}),O.h4=(function(){return!1}),O.h5=(function(){return!0}),O.bV=(function(e,t){try{return t.b(this.bI)}catch(t){var n=t instanceof Lc?t:new Z(t),r=Bs().k4(n);if(!r.c()){var i=r.r();return e.b(i)}throw n instanceof Z?n.X:n}}),new M().i(Ff,`scala.util.Success`,{bG:1,bH:1,d:1,P:1,a:1});var If=class e extends il{constructor(e){super(),this.bh=null,this.bh=e,V(this,`ObserverError: `+U().cz(e),null,!0,!0)}aN(){return new Kd(this)}j(){return H().gC(this,-889275714,null)}d(t){if(this===t)return!0;if(t instanceof e){var n=this.bh,r=t.bh;return n===null?r===null:n.d(r)}return!1}M(){return 1}O(){return`ObserverError`}N(e){if(e===0)return this.bh;throw jd(new Nd,``+e)}k(){return`ObserverError: `+this.bh}};new M().i(If,`com.raquo.airstream.core.AirstreamError$ObserverError`,{al:1,aa:1,r:1,a:1,d:1,P:1});var Lf=class e extends il{constructor(e,t){super(),this.bj=null,this.bi=null,this.bj=e,this.bi=t,V(this,`ObserverErrorHandlingError: `+U().cz(e)+`; cause: `+U().cz(t),null,!0,!0),this.j5(t)}aN(){return new Kd(this)}j(){return H().gC(this,-889275714,null)}d(t){if(this===t)return!0;if(t instanceof e){var n=this.bj,r=t.bj;if(n===null?r===null:n.d(r)){var i=this.bi,a=t.bi;return i===null?a===null:i.d(a)}return!1}return!1}M(){return 2}O(){return`ObserverErrorHandlingError`}N(e){if(e===0)return this.bj;if(e===1)return this.bi;throw jd(new Nd,``+e)}k(){return`ObserverErrorHandlingError: `+this.bj+`; cause: `+this.bi}};new M().i(Lf,`com.raquo.airstream.core.AirstreamError$ObserverErrorHandlingError`,{am:1,aa:1,r:1,a:1,d:1,P:1});var Rf=class e extends il{constructor(e,t){super(),this.b1=null,this.b0=0,this.b1=e,this.b0=t,V(this,`Transaction depth exceeded maxDepth = `+t+`: Execution of `+e+" aborted. See `Transaction.maxDepth`.",null,!0,!0)}aN(){return new Kd(this)}j(){var e=-889275714;return e=R().m(e,tp(`TransactionDepthExceeded`)),e=R().m(e,R().s(this.b1)),e=R().m(e,this.b0),R().z(e,2)}d(t){if(this===t)return!0;if(t instanceof e){if(this.b0===t.b0){var n=this.b1,r=t.b1;return n===null?r===null:n===r}return!1}return!1}M(){return 2}O(){return`TransactionDepthExceeded`}N(e){if(e===0)return this.b1;if(e===1)return this.b0;throw jd(new Nd,``+e)}k(){return`TransactionDepthExceeded: `+this.b1+`; maxDepth: `+this.b0}};new M().i(Rf,`com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded`,{an:1,aa:1,r:1,a:1,d:1,P:1});function zf(e){Ip(e)}function Bf(e){this.e6=null,this.e7=null,this.cV=null,this.cU=null,this.c8=null,this.e6=void 0,ud(this),this.cV=e,this.cU=new Qp(this.cV,new Zu((()=>Tr(this)))),this.c8=this.cU}O=Bf.prototype=new A,O.constructor=Bf,O.cC=(function(){return this.e6}),O.cw=(function(){return wr(this)}),O.k=(function(){return Tr(this)}),O.dN=(function(){return this.c8}),O.jM=(function(e,t){this.cV=e,Lp(this.cU,e,t)}),new M().i(Bf,`com.raquo.airstream.state.SourceVar`,{c5:1,ao:1,ap:1,a5:1,a2:1,c7:1});function Vf(e){this.ar=null,this.as=null,this.eQ=null,this.eR=!1,xu(this,e,$())}O=Vf.prototype=new Cu,O.constructor=Vf,O.i9=(function(){return this.eR||=(this.eQ=this.l(`column`),!0),this.eQ}),new M().i(Vf,`com.raquo.laminar.defs.styles.StyleProps$$anon$30`,{cB:1,a1:1,G:1,Z:1,a0:1,cG:1});function Hf(e){this.ar=null,this.as=null,this.eS=null,this.eT=!1,xu(this,e,$())}O=Hf.prototype=new Cu,O.constructor=Hf,O.ka=(function(){return this.eT||=(this.eS=this.l(`wrap`),!0),this.eS}),new M().i(Hf,`com.raquo.laminar.defs.styles.StyleProps$$anon$31`,{cC:1,a1:1,G:1,Z:1,a0:1,cI:1});function Uf(e,t){var n=e.d9;n===void 0?e.d9=ks().hV(N().x(L().w(new(ip.r()).C([t])))):n.push(t)|0}function Wf(e,t){var n=e.fb;if(n!==void 0){_return:{for(var r=n.length|0,i=0;i<r;){if(n[i].ki()===t){var a=i;break _return}i=1+i|0}var a=-1}return a>=0}return!1}function Gf(e,t){this.cj=null,this.aa=null,this.d8=null,this.aR=null,this.da=null,this.u=null,this.fb=null,this.d9=null,this.da=e,this.u=t,this.cj=Y(),oc(this),md(this),this.fb=void 0,this.d9=void 0}O=Gf.prototype=new A,O.constructor=Gf,O.ab=(function(e){ua().ct(e,this,void 0)}),O.cy=(function(){return this.aa}),O.gG=(function(e){this.aa=e}),O.ic=(function(){if(P().h2(this.u)){var e=this.da;return e instanceof bl?e.hN():void 0}return Bi().eY}),O.j7=(function(e){var t=this.ic();return t!==void 0&&xi().j3(t,e,0)}),O.jr=(function(e){if(e instanceof Qs&&this.j7(e.a9)){if(Wf(this,e.a9))throw Il(new W,"Can not add uncontrolled `"+e.a9+" <-- ???` to element `"+P().gH(this.u)+"` that already has an input controller for `"+e.a9+"` property.");Uf(this,e.a9)}}),O.k=(function(){return`ReactiveHtmlElement(`+(this.u===null?`tag=`+this.da.dG():this.u.outerHTML)+`)`}),O.cI=(function(){return this.u}),new M().i(Gf,`com.raquo.laminar.nodes.ReactiveHtmlElement`,{di:1,aA:1,W:1,de:1,az:1,dg:1});function Kf(e,t){return Object.is(e,t)}function qf(e){var t=e|0;if(t===e&&1/e!=-1/0)return t;if(e!==e)return 2146959360;var n=Hn;return n.setFloat64(0,e,!0),(n.getInt32(0,!0)|0)^(n.getInt32(4,!0)|0)}var Jf=new M().i(0,`java.lang.Double`,{aJ:1,X:1,a:1,R:1,O:1,a3:1},(e=>typeof e==`number`)),Yf=new M().i(0,`java.lang.Float`,{dF:1,X:1,a:1,R:1,O:1,a3:1},(e=>Xn(e))),Xf=new M().i(0,`java.lang.Integer`,{dI:1,X:1,a:1,R:1,O:1,a3:1},(e=>Yn(e)));function Zf(e,t,n){if(n instanceof Nn){var r=n,i=r.l,a=r.h;return(e^i|t^a)===0}return!1}function Qf(e,t){return e^t}var $f=new M().i(0,`java.lang.Long`,{aL:1,X:1,a:1,R:1,O:1,a3:1},(e=>e instanceof Nn)),ep=class extends kd{constructor(e){super(),V(this,e,null,!0,!0)}};new M().i(ep,`java.lang.NumberFormatException`,{dQ:1,aK:1,H:1,y:1,r:1,a:1});function tp(e){for(var t=e.length,n=0,r=0;r!==t;)n=((n<<5)-n|0)+e.charCodeAt(r)|0,r=1+r|0;return n}function np(e,t){return e===t}function rp(e,t){var n=_c().k3(t);return e.indexOf(n)|0}var ip=new M().i(0,`java.lang.String`,{aN:1,a:1,R:1,af:1,O:1,a3:1},(e=>typeof e==`string`));function ap(){}O=ap.prototype=new Gd,O.constructor=ap,O.j=(function(){return 2433880}),O.k=(function(){return`None`}),O.M=(function(){return 0}),O.O=(function(){return`None`}),O.N=(function(e){throw Md(new Nd,e)}),O.iN=(function(){throw new Bd(`None.get`)}),O.r=(function(){this.iN()}),new M().i(ap,`scala.None$`,{ek:1,aP:1,b:1,d:1,P:1,a:1});var op;function Y(){return op||=new ap,op}function sp(e){this.bu=null,this.bu=e}O=sp.prototype=new Gd,O.constructor=sp,O.j=(function(){return H().cG(this,1323286827,!0)}),O.d=(function(e){return this===e||e instanceof sp&&vs().y(this.bu,e.bu)}),O.k=(function(){return L().dw(this)}),O.M=(function(){return 1}),O.O=(function(){return`Some`}),O.N=(function(e){if(e===0)return this.bu;throw Md(new Nd,e)}),O.r=(function(){return this.bu}),new M().i(sp,`scala.Some`,{aQ:1,aP:1,b:1,d:1,P:1,a:1});function cp(){}O=cp.prototype=new A,O.constructor=cp;function lp(){}lp.prototype=O,O.p=(function(){return-1}),O.a0=(function(e){Yo(this,e)}),O.aM=(function(e,t,n){return Xo(this,e,t,n)}),O.be=(function(e,t,n,r){return Qo(this,e,t,n,r)}),O.aL=(function(){return this.an()});function X(e){this.cn=null,this.ag=0,this.bv=0,this.cn=e,this.ag=0,this.bv=xo().a5(this.cn)}O=X.prototype=new zu,O.constructor=X,O.p=(function(){return this.bv-this.ag|0}),O.i=(function(){return this.ag<this.bv}),O.g=(function(){this.ag>=xo().a5(this.cn)&&Zl().H.g();var e=L().aV(this.cn,this.ag);return this.ag=1+this.ag|0,e}),O.cx=(function(e){if(e>0){var t=this.ag+e|0;if(t<0)var n=this.bv;else var r=this.bv,n=r<t?r:t;this.ag=n}return this}),new M().i(X,`scala.collection.ArrayOps$ArrayIterator`,{es:1,J:1,b:1,c:1,K:1,a:1});function up(e,t){return e.dm=t,e.ah=0,e.G=t.f(),e}function dp(e,t){return t<0?0:t>e.G?e.G:t}function fp(){this.dm=null,this.ah=0,this.G=0}O=fp.prototype=new zu,O.constructor=fp;function pp(){}pp.prototype=O,O.p=(function(){return this.G}),O.i=(function(){return this.G>0}),O.g=(function(){if(this.G>0){var e=this.dm.h(this.ah);return this.ah=1+this.ah|0,this.G=this.G-1|0,e}return Zl().H.g()}),O.cx=(function(e){if(e>0){this.ah=this.ah+e|0;var t=this.G-e|0;this.G=t<0?0:t}return this}),O.c1=(function(e,t){var n=dp(this,e),r=dp(this,t)-n|0;return this.G=r<0?0:r,this.ah=this.ah+n|0,this}),new M().i(fp,`scala.collection.IndexedSeqView$IndexedSeqViewIterator`,{aX:1,J:1,b:1,c:1,K:1,a:1});function mp(){this.bD=null,bf(this,Zl().H)}O=mp.prototype=new Sf,O.constructor=mp,O.hG=(function(e){return this.bD=this.bD.dB(new tu((()=>new Zd(e)))),this}),O.Y=(function(e){return this.hG(e)}),new M().i(mp,`scala.collection.Iterator$$anon$21`,{ez:1,eY:1,S:1,T:1,V:1,a9:1});function hp(e){return e.g8||=(e.g7=new Fm(new(iu.r()).C(0)),!0),e.g7}function gp(){this.g9=null,this.g7=null,this.g8=!1,_p=this,this.g9=new qd(this)}O=gp.prototype=new A,O.constructor=gp,O.iJ=(function(e,t){return e instanceof wm?e:this.dO(Fo().gS(e,t))}),O.h7=(function(e){return new qu(new G((t=>this.dO($o(t,e)))),(hf(),new gf))}),O.dO=(function(e){if(e===null)return null;if(e instanceof j)return new Fm(e);if(e instanceof sr)return new Nm(e);if(e instanceof ur)return new jm(e);if(e instanceof cr)return new Pm(e);if(e instanceof lr)return new Mm(e);if(e instanceof ir)return new Am(e);if(e instanceof ar)return new km(e);if(e instanceof or)return new Im(e);if(e instanceof rr)return new Om(e);if(go(e,1))return new Lm(e);throw new Ud(e)}),O.dD=(function(e,t){return this.iJ(e,t)}),new M().i(gp,`scala.collection.immutable.ArraySeq$`,{eJ:1,a:1,aV:1,aT:1,aU:1,b1:1});var _p;function vp(){return _p||=new gp,_p}function yp(e){return e.gd=0,e.ge=0,e}function bp(){this.gd=0,this.ge=0}O=bp.prototype=new A,O.constructor=bp;function xp(){}xp.prototype=O;function Sp(){this.gh=null,this.gg=null,Cp=this,this.gh=new qd(this),this.gg=new Ym(new j(0))}O=Sp.prototype=new A,O.constructor=Sp,O.iK=(function(e,t){return this.h6(Fo().gS(e,t))}),O.h7=(function(e){return new qu(new G((e=>this.h6(e))),new jp(e.cJ()))}),O.h6=(function(e){if(e===null)return null;if(e instanceof j)return new Ym(e);if(e instanceof sr)return new qm(e);if(e instanceof ur)return new Gm(e);if(e instanceof cr)return new Jm(e);if(e instanceof lr)return new Km(e);if(e instanceof ir)return new Wm(e);if(e instanceof ar)return new Um(e);if(e instanceof or)return new Xm(e);if(e instanceof rr)return new Hm(e);if(go(e,1))return new Zm(e);throw new Ud(e)}),O.dD=(function(e,t){return this.iK(e,t)}),new M().i(Sp,`scala.collection.mutable.ArraySeq$`,{eU:1,a:1,aV:1,aT:1,aU:1,b1:1});var Cp;function wp(){return Cp||=new Sp,Cp}function Tp(e){this.ar=null,this.as=null,this.eM=null,this.eN=!1,xu(this,e,$())}O=Tp.prototype=new Cu,O.constructor=Tp,O.gR=(function(){return this.eN||=(this.eM=this.l(`flex`),!0),this.eM}),new M().i(Tp,`com.raquo.laminar.defs.styles.StyleProps$$anon$28`,{cz:1,a1:1,G:1,Z:1,a0:1,as:1,cF:1});function Ep(e){this.ar=null,this.as=null,this.eO=null,this.eP=!1,xu(this,e,$())}O=Ep.prototype=new Cu,O.constructor=Ep,O.i6=(function(){return this.eP||=(this.eO=this.l(`center`),!0),this.eO}),new M().i(Ep,`com.raquo.laminar.defs.styles.StyleProps$$anon$3`,{cA:1,a1:1,G:1,Z:1,a0:1,cK:1,cH:1});function Dp(e){this.ar=null,this.as=null,this.eU=null,this.eV=!1,xu(this,e,$())}O=Dp.prototype=new Cu,O.constructor=Dp,O.cH=(function(){return this.eV||=(this.eU=qs(this),!0),this.eU}),new M().i(Dp,`com.raquo.laminar.defs.styles.StyleProps$$anon$5`,{cD:1,a1:1,G:1,Z:1,a0:1,at:1,au:1});function Op(){}O=Op.prototype=new wd,O.constructor=Op;function kp(){}kp.prototype=O;function Ap(e){return e.aL()+`(<not computed>)`}function jp(e){this.gd=0,this.ge=0,this.bd=null,this.gf=!1,this.dq=null,this.bd=e,yp(this),this.gf=e===mr.l(),this.dq=[]}O=jp.prototype=new xp,O.constructor=jp,O.gy=(function(e){var t=this.gf?$n(e):e===null?fs().dL(this.bd):e;return this.dq.push(t),this}),O.hA=(function(e){for(var t=e.e();t.i();)this.gy(t.g());return this}),O.ae=(function(){return fs().dK(this.bd===fr.l()?_o.l():this.bd===ys.l()||this.bd===iu.l()?dr.l():this.bd,this.dq)}),O.k=(function(){return`ArrayBuilder.generic`}),O.Y=(function(e){return this.gy(e)}),O.a3=(function(e){return this.hA(e)}),new M().i(jp,`scala.collection.mutable.ArrayBuilder$generic`,{eT:1,eR:1,S:1,T:1,V:1,a9:1,a:1});function Mp(e,t){this.dm=null,this.ah=0,this.G=0,this.gk=null,this.gj=0,this.gk=t,up(this,e),this.gj=t.K()|0}O=Mp.prototype=new pp,O.constructor=Mp,O.i=(function(){return hs().gE(this.gj,this.gk.K()|0,`mutation occurred during iteration`),this.G>0}),new M().i(Mp,`scala.collection.mutable.CheckedIndexedSeqView$CheckedIterator`,{eX:1,aX:1,J:1,b:1,c:1,K:1,a:1});function Np(){}O=Np.prototype=new A,O.constructor=Np;function Pp(){}Pp.prototype=O;var Z=class e extends Nu{constructor(e){super(),this.X=null,this.X=e,V(this,null,null,!0,!0)}bW(){return Rn(this.X)}O(){return`JavaScriptException`}M(){return 1}N(e){return e===0?this.X:R().j6(e)}aN(){return new Df(this)}j(){return H().cG(this,1744042595,!0)}d(t){return this===t||t instanceof e&&vs().y(this.X,t.X)}};new M().i(Z,`scala.scalajs.js.JavaScriptException`,{bD:1,H:1,y:1,r:1,a:1,P:1,d:1});function Fp(e,t){e.ca!==void 0&&Pr().h8(),e.ca=t}function Ip(e){var t=e.ca;if(t===void 0){Pr().h8();var n=Ip(e);Fp(e,n);var r=n}else var r=t;return r}function Lp(e,t,n){Fp(e,t);var r=t.h4(),i=!1;i=!1,e.c9=!1;for(var a=e.bk,o=0;o<(a.length|0);){var s=a[o];o=1+o|0,s.bX(t),r&&!i&&(i=!0)}for(var c=e.cW,l=0;l<(c.length|0);)c[l],l=1+l|0,r&&!i&&(i=!0);e.c9=!0;var u=e.cb;if(u!==void 0){for(var d=0,f=u.length|0;d<f;)u[d].K(),d=1+d|0;u.length=0}r&&!i&&t.bV(new q((e=>{U().a2(e)})),new q((e=>void 0)))}function Rp(e,t){typeof console<`u`&&(e.fQ&&console.error?console.error(t):console.log(t))}function zp(e){this.fQ=!1,this.br=null,this.fQ=e,new Pd,this.br=``}O=zp.prototype=new kp,O.constructor=zp,O.jc=(function(e){for(var t=e;t!==``;){var n=t.indexOf(`
`)|0;if(n<0)this.br=``+this.br+t,t=``;else{var r=this.br,i=t;Rp(this,``+r+i.substring(0,n)),this.br=``;var a=t,o=1+n|0;t=a.substring(o)}}}),new M().i(zp,`java.lang.JSConsoleBasedPrintStream`,{dL:1,dy:1,dx:1,aF:1,aD:1,aH:1,aE:1,aG:1});function Bp(e,t,n){for(var r=n,i=t;;)if(i<=0||r.c())return r;else{var a=i-1|0,o=r.A();i=a,r=o}}function Vp(){this.bE=null}O=Vp.prototype=new Pp,O.constructor=Vp;function Hp(){}Hp.prototype=O,O.k=(function(){return this.bE}),O.d=(function(e){return this===e}),O.j=(function(){return Kn(this)});function Up(e){this.ar=null,this.as=null,this.eW=null,this.eX=!1,xu(this,e,$())}O=Up.prototype=new Cu,O.constructor=Up,O.cH=(function(){return this.eX||=(this.eW=qs(this),!0),this.eW}),new M().i(Up,`com.raquo.laminar.defs.styles.StyleProps$$anon$7`,{cE:1,a1:1,G:1,Z:1,a0:1,at:1,au:1,cJ:1,as:1});function Wp(){}O=Wp.prototype=new lp,O.constructor=Wp;function Gp(){}Gp.prototype=O,O.k=(function(){return Ap(this)});function Kp(){this.bE=null,this.bE=`Any`,$()}O=Kp.prototype=new Hp,O.constructor=Kp,O.cJ=(function(){return dr.l()}),O.dH=(function(e){return new j(e)}),new M().i(Kp,`scala.reflect.ManifestFactory$AnyManifest$`,{f7:1,by:1,bx:1,a:1,bz:1,bu:1,d:1,bv:1,bw:1});var qp;function Jp(){return qp||=new Kp,qp}function Yp(){this.bE=null,this.bE=`Object`,$()}O=Yp.prototype=new Hp,O.constructor=Yp,O.cJ=(function(){return dr.l()}),O.dH=(function(e){return new j(e)}),new M().i(Yp,`scala.reflect.ManifestFactory$ObjectManifest$`,{f8:1,by:1,bx:1,a:1,bz:1,bu:1,d:1,bv:1,bw:1});var Xp;function Zp(){return Xp||=new Yp,Xp}function Qp(e,t){this.e9=null,this.c9=!1,this.cb=null,this.bk=null,this.cW=null,this.cc=!1,this.ca=null,this.ea=null,this.ea=t,this.e9=void 0,sl(this),nd(this),this.ca=void 0,Fp(this,e)}O=Qp.prototype=new A,O.constructor=Qp,O.cC=(function(){return this.e9}),O.k=(function(){return Tr(this)}),O.d=(function(e){return this===e}),O.j=(function(){return Kn(this)}),O.dN=(function(){return this}),O.cw=(function(){return this.ea.K()+`.signal`}),new M().i(Qp,`com.raquo.airstream.state.VarSignal`,{ca:1,ao:1,a2:1,bJ:1,bL:1,ap:1,bQ:1,bW:1,bX:1,c6:1});function $p(e,t){return e===t?!0:em(t)&&t.dA(e)?e.cK(t):!1}function em(e){return!!(e&&e.$classData&&e.$classData.n.j)}function tm(){}O=tm.prototype=new lp,O.constructor=tm;function nm(){}nm.prototype=O,O.h3=(function(e){return Uu(this,e)}),O.a1=(function(e){return Gl(this,e)}),O.c=(function(){return Wu(this)}),O.cK=(function(e){return Gu(this,e)}),O.dA=(function(e){return!0}),O.d=(function(e){return $p(this,e)}),O.j=(function(){return H().he(this)}),O.k=(function(){return Jd(this)}),O.aY=(function(e){return this.h3(e|0)});function rm(){}O=rm.prototype=new Gp,O.constructor=rm;function im(){}im.prototype=O,O.c=(function(){return Wu(this)});function am(e){return!!(e&&e.$classData&&e.$classData.n.n)}function om(e){return!!(e&&e.$classData&&e.$classData.n.a7)}function sm(e,t){return e.bA=t,e}function cm(){this.bA=null}O=cm.prototype=new im,O.constructor=cm;function lm(){}lm.prototype=O,O.h=(function(e){return this.bA.h(e)}),O.f=(function(){return this.bA.f()}),O.c=(function(){return this.bA.c()});function um(){this.ei=null,this.ej=!1,this.eo=null,this.ep=!1,this.ek=null,this.el=!1,this.eG=null,this.eH=!1,this.eA=null,this.eB=!1,this.ey=null,this.ez=!1,this.eC=null,this.eD=!1,this.eg=null,this.eh=!1,this.em=null,this.en=!1,this.eq=null,this.er=!1,this.es=null,this.et=!1,this.eu=null,this.ev=!1,this.ew=null,this.ex=!1,this.hn=null,this.ef=null,this.hm=null,this.eE=null,this.eF=!1,Pi(this),Ai(this),Oi(this),ki(this)}O=um.prototype=new A,O.constructor=um,O.i4=(function(){return this.ej||=(this.ei=sc(new cc,`br`,!0),!0),this.ei}),O.dC=(function(){return this.ep||=(this.eo=sc(new cc,`div`,!1),!0),this.eo}),O.i7=(function(){return this.el||=(this.ek=new Qs(`checked`,F().eJ),!0),this.ek}),O.dP=(function(){return this.eH||=(this.eG=new Qs(`value`,F().C),!0),this.eG}),O.jt=(function(){return this.eB||=(this.eA=new Ys(`click`),!0),this.eA}),O.js=(function(){return this.ez||=(this.ey=new Ys(`change`),!0),this.ey}),O.cF=(function(){return this.eD||=(this.eC=new Ys(`input`),!0),this.eC}),O.hM=(function(){return this.eh||=(this.eg=new Ep(`align-items`),!0),this.eg}),O.gI=(function(){return this.en||=(this.em=new Tp(`display`),!0),this.em}),O.iF=(function(){return this.er||=(this.eq=new Vf(`flex-direction`),!0),this.eq}),O.iG=(function(){return this.et||=(this.es=new Hf(`flex-wrap`),!0),this.es}),O.gY=(function(){return this.ev||=(this.eu=new Dp(`gap`),!0),this.eu}),O.jj=(function(){return this.ex||=(this.ew=new Up(`max-width`),!0),this.ew}),O.jX=(function(){return this.eF||=(this.eE=new vu(this),!0),this.eE}),new M().i(um,`com.raquo.laminar.api.package$$anon$1`,{cn:1,cL:1,cs:1,cx:1,cw:1,cy:1,cu:1,cl:1,ch:1,ck:1,ar:1,av:1,aq:1,ci:1});function dm(){}O=dm.prototype=new im,O.constructor=dm;function fm(){}fm.prototype=O,O.a1=(function(e){var t=this.f();return t===e?0:t<e?-1:1}),O.p=(function(){return this.f()}),O.an=(function(){return`IndexedSeqView`});function pm(e){this.bA=null,sm(this,e)}O=pm.prototype=new lm,O.constructor=pm,O.a1=(function(e){var t=this.f();return t===e?0:t<e?-1:1}),O.p=(function(){return this.f()}),O.e=(function(){return up(new fp,this)}),O.an=(function(){return`IndexedSeqView`}),new M().i(pm,`scala.collection.IndexedSeqView$Id`,{ev:1,eE:1,aR:1,aS:1,l:1,b:1,c:1,i:1,h:1,f:1,a:1,b3:1,k:1,b0:1,o:1,aW:1});function mm(){}O=mm.prototype=new nm,O.constructor=mm;function hm(){}hm.prototype=O;function gm(e,t){this.dp=null,this.gc=null,this.dp=e,this.gc=t}O=gm.prototype=new fm,O.constructor=gm,O.h=(function(e){return this.dp.h(e)}),O.f=(function(){return this.dp.v}),O.aL=(function(){return`ArrayBufferView`}),O.e=(function(){return new Mp(this,this.gc)}),new M().i(gm,`scala.collection.mutable.ArrayBufferView`,{eQ:1,eq:1,aR:1,aS:1,l:1,b:1,c:1,i:1,h:1,f:1,a:1,b3:1,k:1,b0:1,o:1,aW:1});function _m(e,t){return!ym(t)||e.f()===t.f()}function vm(e,t){if(ym(t)){if(e===t)return!0;var n=e.f(),r=n===t.f();if(r){var i=0,a=e.dz(),o=t.dz(),s=a<o?a:o,c=n>>31,l=s>>31,u=s<<1,d=s>>>31|0|l<<1;if(c===d?n>>>0>u>>>0:c>d)var f=s;else var f=n;for(;i<f&&r;)r=vs().y(e.h(i),t.h(i)),i=1+i|0;if(i<n&&r)for(var p=e.e().cx(i),m=t.e().cx(i);r&&p.i();)r=vs().y(p.g(),m.g())}return r}return Gu(e,t)}function ym(e){return!!(e&&e.$classData&&e.$classData.n.z)}function bm(){}O=bm.prototype=new nm,O.constructor=bm;function xm(){}xm.prototype=O;function Q(e){this.cs=null,this.cs=e}O=Q.prototype=new A,O.constructor=Q,O.dF=(function(e){return Ku(this,e)}),O.dA=(function(e){return _m(this,e)}),O.cK=(function(e){return vm(this,e)}),O.dz=(function(){return ls().ga}),O.e=(function(){return up(new fp,new pm(this))}),O.a1=(function(e){var t=this.f();return t===e?0:t<e?-1:1}),O.p=(function(){return this.f()}),O.d=(function(e){return $p(this,e)}),O.j=(function(){return H().he(this)}),O.k=(function(){return Jd(this)}),O.c=(function(){return Wu(this)}),O.a0=(function(e){Yo(this,e)}),O.aM=(function(e,t,n){return Xo(this,e,t,n)}),O.be=(function(e,t,n,r){return Qo(this,e,t,n,r)}),O.f=(function(){return this.cs.length|0}),O.h=(function(e){return this.cs[e]}),O.aL=(function(){return`WrappedVarArgs`}),O.aY=(function(e){return Uu(this,e|0)}),O.b=(function(e){return this.h(e|0)}),O.aZ=(function(){return Nf()}),new M().i(Q,`scala.scalajs.runtime.WrappedVarArgs`,{bE:1,z:1,b:1,c:1,i:1,h:1,f:1,A:1,e:1,g:1,k:1,d:1,j:1,C:1,B:1,o:1,n:1,M:1,D:1,p:1,q:1,a:1});function Sm(){}O=Sm.prototype=new xm,O.constructor=Sm;function Cm(){}Cm.prototype=O,O.a3=(function(e){return Gc(this,e)});function wm(){}O=wm.prototype=new hm,O.constructor=wm;function Tm(){}Tm.prototype=O,O.a1=(function(e){var t=this.f();return t===e?0:t<e?-1:1}),O.p=(function(){return this.f()}),O.an=(function(){return`IndexedSeq`}),O.dA=(function(e){return _m(this,e)}),O.cK=(function(e){return vm(this,e)}),O.jg=(function(e){for(var t=new j(this.f()),n=0;n<t.a.length;)t.a[n]=e.b(this.h(n)),n=1+n|0;return vp().dO(t)}),O.aL=(function(){return`ArraySeq`}),O.aM=(function(e,t,n){var r=this.f(),i=xo().a5(e),a=n<r?n:r,o=t<0?i:i-t|0,s=o<a?o:a,c=s<0?0:s;return c>0&&Fo().cv(this.af(),0,e,t,c),c}),O.dz=(function(){return 2147483647}),O.aZ=(function(){return vp().g9}),O.dF=(function(e){return this.jg(e)});function Em(){}O=Em.prototype=new xm,O.constructor=Em;function Dm(){}Dm.prototype=O,O.a1=(function(e){var t=this.f();return t===e?0:t<e?-1:1}),O.p=(function(){return this.f()}),O.an=(function(){return`IndexedSeq`}),O.aL=(function(){return`ArraySeq`}),O.aM=(function(e,t,n){var r=this.f(),i=xo().a5(e),a=n<r?n:r,o=t<0?i:i-t|0,s=o<a?o:a,c=s<0?0:s;return c>0&&Fo().cv(this.Z(),0,e,t,c),c}),O.d=(function(e){return e instanceof Em&&xo().a5(this.Z())!==xo().a5(e.Z())?!1:$p(this,e)}),O.aZ=(function(){return wp().gh});function Om(e){this.aw=null,this.aw=e}O=Om.prototype=new Tm,O.constructor=Om,O.f=(function(){return this.aw.a.length}),O.bR=(function(e){return this.aw.a[e]}),O.j=(function(){var e=H();return e.t(this.aw,e.q)}),O.d=(function(e){return e instanceof Om?wo().gP(this.aw,e.aw):$p(this,e)}),O.e=(function(){return new X(this.aw)}),O.af=(function(){return this.aw}),O.h=(function(e){return this.bR(e)}),O.b=(function(e){return this.bR(e|0)}),new M().i(Om,`scala.collection.immutable.ArraySeq$ofBoolean`,{b4:1,L:1,I:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,A:1,C:1,B:1,o:1,n:1,M:1,z:1,p:1,q:1,D:1,Q:1,a:1});function km(e){this.ax=null,this.ax=e}O=km.prototype=new Tm,O.constructor=km,O.f=(function(){return this.ax.a.length}),O.bJ=(function(e){return this.ax.a[e]}),O.j=(function(){var e=H();return e.t(this.ax,e.q)}),O.d=(function(e){return e instanceof km?wo().gK(this.ax,e.ax):$p(this,e)}),O.e=(function(){return new X(this.ax)}),O.af=(function(){return this.ax}),O.h=(function(e){return this.bJ(e)}),O.b=(function(e){return this.bJ(e|0)}),new M().i(km,`scala.collection.immutable.ArraySeq$ofByte`,{b5:1,L:1,I:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,A:1,C:1,B:1,o:1,n:1,M:1,z:1,p:1,q:1,D:1,Q:1,a:1});function Am(e){this.ak=null,this.ak=e}O=Am.prototype=new Tm,O.constructor=Am,O.f=(function(){return this.ak.a.length}),O.bK=(function(e){return this.ak.a[e]}),O.j=(function(){var e=H();return e.t(this.ak,e.q)}),O.d=(function(e){return e instanceof Am?wo().gL(this.ak,e.ak):$p(this,e)}),O.e=(function(){return new X(this.ak)}),O.be=(function(e,t,n,r){return new Wm(this.ak).be(e,t,n,r)}),O.af=(function(){return this.ak}),O.h=(function(e){return Zn(this.bK(e))}),O.b=(function(e){return Zn(this.bK(e|0))}),new M().i(Am,`scala.collection.immutable.ArraySeq$ofChar`,{b6:1,L:1,I:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,A:1,C:1,B:1,o:1,n:1,M:1,z:1,p:1,q:1,D:1,Q:1,a:1});function jm(e){this.ay=null,this.ay=e}O=jm.prototype=new Tm,O.constructor=jm,O.f=(function(){return this.ay.a.length}),O.bL=(function(e){return this.ay.a[e]}),O.j=(function(){var e=H();return e.t(this.ay,e.q)}),O.d=(function(e){if(e instanceof jm){var t=this.ay,n=e.ay;if(t===n)return!0;if(t.a.length===n.a.length){for(var r=0;r<t.a.length&&t.a[r]===n.a[r];)r=1+r|0;return r>=t.a.length}return!1}return $p(this,e)}),O.e=(function(){return new X(this.ay)}),O.af=(function(){return this.ay}),O.h=(function(e){return this.bL(e)}),O.b=(function(e){return this.bL(e|0)}),new M().i(jm,`scala.collection.immutable.ArraySeq$ofDouble`,{b7:1,L:1,I:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,A:1,C:1,B:1,o:1,n:1,M:1,z:1,p:1,q:1,D:1,Q:1,a:1});function Mm(e){this.az=null,this.az=e}O=Mm.prototype=new Tm,O.constructor=Mm,O.f=(function(){return this.az.a.length}),O.bM=(function(e){return this.az.a[e]}),O.j=(function(){var e=H();return e.t(this.az,e.q)}),O.d=(function(e){if(e instanceof Mm){var t=this.az,n=e.az;if(t===n)return!0;if(t.a.length===n.a.length){for(var r=0;r<t.a.length&&t.a[r]===n.a[r];)r=1+r|0;return r>=t.a.length}return!1}return $p(this,e)}),O.e=(function(){return new X(this.az)}),O.af=(function(){return this.az}),O.h=(function(e){return this.bM(e)}),O.b=(function(e){return this.bM(e|0)}),new M().i(Mm,`scala.collection.immutable.ArraySeq$ofFloat`,{b8:1,L:1,I:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,A:1,C:1,B:1,o:1,n:1,M:1,z:1,p:1,q:1,D:1,Q:1,a:1});function Nm(e){this.aA=null,this.aA=e}O=Nm.prototype=new Tm,O.constructor=Nm,O.f=(function(){return this.aA.a.length}),O.bN=(function(e){return this.aA.a[e]}),O.j=(function(){var e=H();return e.t(this.aA,e.q)}),O.d=(function(e){return e instanceof Nm?wo().gM(this.aA,e.aA):$p(this,e)}),O.e=(function(){return new X(this.aA)}),O.af=(function(){return this.aA}),O.h=(function(e){return this.bN(e)}),O.b=(function(e){return this.bN(e|0)}),new M().i(Nm,`scala.collection.immutable.ArraySeq$ofInt`,{b9:1,L:1,I:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,A:1,C:1,B:1,o:1,n:1,M:1,z:1,p:1,q:1,D:1,Q:1,a:1});function Pm(e){this.aB=null,this.aB=e}O=Pm.prototype=new Tm,O.constructor=Pm,O.f=(function(){return this.aB.a.length>>>1|0}),O.bO=(function(e){var t=this.aB.a,n=e<<1;return k(t[n],t[n+1|0])}),O.j=(function(){var e=H();return e.t(this.aB,e.q)}),O.d=(function(e){return e instanceof Pm?wo().gN(this.aB,e.aB):$p(this,e)}),O.e=(function(){return new X(this.aB)}),O.af=(function(){return this.aB}),O.h=(function(e){return this.bO(e)}),O.b=(function(e){return this.bO(e|0)}),new M().i(Pm,`scala.collection.immutable.ArraySeq$ofLong`,{ba:1,L:1,I:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,A:1,C:1,B:1,o:1,n:1,M:1,z:1,p:1,q:1,D:1,Q:1,a:1});function Fm(e){this.aC=null,this.aC=e}O=Fm.prototype=new Tm,O.constructor=Fm,O.f=(function(){return this.aC.a.length}),O.h=(function(e){return this.aC.a[e]}),O.j=(function(){var e=H();return e.t(this.aC,e.q)}),O.d=(function(e){return e instanceof Fm?Fo().gQ(this.aC,e.aC):$p(this,e)}),O.e=(function(){return new X(this.aC)}),O.af=(function(){return this.aC}),O.b=(function(e){return this.h(e|0)}),new M().i(Fm,`scala.collection.immutable.ArraySeq$ofRef`,{bb:1,L:1,I:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,A:1,C:1,B:1,o:1,n:1,M:1,z:1,p:1,q:1,D:1,Q:1,a:1});function Im(e){this.aD=null,this.aD=e}O=Im.prototype=new Tm,O.constructor=Im,O.f=(function(){return this.aD.a.length}),O.bP=(function(e){return this.aD.a[e]}),O.j=(function(){var e=H();return e.t(this.aD,e.q)}),O.d=(function(e){return e instanceof Im?wo().gO(this.aD,e.aD):$p(this,e)}),O.e=(function(){return new X(this.aD)}),O.af=(function(){return this.aD}),O.h=(function(e){return this.bP(e)}),O.b=(function(e){return this.bP(e|0)}),new M().i(Im,`scala.collection.immutable.ArraySeq$ofShort`,{bc:1,L:1,I:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,A:1,C:1,B:1,o:1,n:1,M:1,z:1,p:1,q:1,D:1,Q:1,a:1});function Lm(e){this.aS=null,this.aS=e}O=Lm.prototype=new Tm,O.constructor=Lm,O.f=(function(){return this.aS.a.length}),O.bQ=(function(e){}),O.j=(function(){var e=H();return e.t(this.aS,e.q)}),O.d=(function(e){return e instanceof Lm?this.aS.a.length===e.aS.a.length:$p(this,e)}),O.e=(function(){return new X(this.aS)}),O.af=(function(){return this.aS}),O.h=(function(e){this.bQ(e)}),O.b=(function(e){this.bQ(e|0)}),new M().i(Lm,`scala.collection.immutable.ArraySeq$ofUnit`,{bd:1,L:1,I:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,A:1,C:1,B:1,o:1,n:1,M:1,z:1,p:1,q:1,D:1,Q:1,a:1});function Rm(e,t,n,r){for(var i=r,a=n;;)if(a===t)return!i.c()|0;else{if(!i.c()){var o=1+a|0,s=i.A();a=o,i=s;continue}return-1}}function zm(e,t,n){for(var r=n,i=t;;)if(i===r)return!0;else{var a=i.c(),o=r.c();if(!(a||o)&&vs().y(i.L(),r.L())){var s=i.A(),c=r.A();i=s,r=c;continue}return a&&o}}function Bm(){}O=Bm.prototype=new hm,O.constructor=Bm;function Vm(){}Vm.prototype=O,O.h3=(function(e){return af(this,e)}),O.h=(function(e){return of(this,e)}),O.cK=(function(e){return sf(this,e)}),O.an=(function(){return`LinearSeq`}),O.e=(function(){return new lf(this)}),O.hx=(function(e){if(this.c())return e;if(e.c())return this;for(var t=new Qm(e.L(),this),n=t,r=e.A();!r.c();){var i=new Qm(r.L(),this);n.aj=i,n=i,r=r.A()}return t}),O.c=(function(){return this===$()}),O.hc=(function(e){if(e instanceof Bm)return this.hx(e);if(e.p()===0)return this;if(e instanceof oh&&this.c())return e.hi();var t=e.e();if(t.i()){for(var n=new Qm(t.g(),this),r=n;t.i();){var i=new Qm(t.g(),this);r.aj=i,r=i}return n}return this}),O.jh=(function(e){if(this===$())var t=$();else{for(var n=new Qm(e.b(this.L()),$()),r=n,i=this.A();i!==$();){var a=new Qm(e.b(i.L()),$());r.aj=a,r=a,i=i.A()}var t=n}return t}),O.a0=(function(e){for(var t=this;!t.c();)e.b(t.L()),t=t.A()}),O.f=(function(){for(var e=this,t=0;!e.c();)t=1+t|0,e=e.A();return t}),O.a1=(function(e){return e<0?1:Rm(this,e,0,this)}),O.aL=(function(){return`List`}),O.d=(function(e){return e instanceof Bm?zm(this,this,e):$p(this,e)}),O.aZ=(function(){return ff()}),O.dF=(function(e){return this.jh(e)}),O.iq=(function(e){return Bp(this,e,this)}),O.aY=(function(e){return af(this,e|0)}),O.b=(function(e){return of(this,e|0)});function Hm(e){this.aE=null,this.aE=e}O=Hm.prototype=new Dm,O.constructor=Hm,O.f=(function(){return this.aE.a.length}),O.bR=(function(e){return this.aE.a[e]}),O.j=(function(){var e=H();return e.t(this.aE,e.q)}),O.d=(function(e){return e instanceof Hm?wo().gP(this.aE,e.aE):Em.prototype.d.call(this,e)}),O.e=(function(){return new X(this.aE)}),O.Z=(function(){return this.aE}),O.h=(function(e){return this.bR(e)}),O.b=(function(e){return this.bR(e|0)}),new M().i(Hm,`scala.collection.mutable.ArraySeq$ofBoolean`,{bh:1,N:1,t:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,v:1,s:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function Um(e){this.aF=null,this.aF=e}O=Um.prototype=new Dm,O.constructor=Um,O.f=(function(){return this.aF.a.length}),O.bJ=(function(e){return this.aF.a[e]}),O.j=(function(){var e=H();return e.t(this.aF,e.q)}),O.d=(function(e){return e instanceof Um?wo().gK(this.aF,e.aF):Em.prototype.d.call(this,e)}),O.e=(function(){return new X(this.aF)}),O.Z=(function(){return this.aF}),O.h=(function(e){return this.bJ(e)}),O.b=(function(e){return this.bJ(e|0)}),new M().i(Um,`scala.collection.mutable.ArraySeq$ofByte`,{bi:1,N:1,t:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,v:1,s:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function Wm(e){this.S=null,this.S=e}O=Wm.prototype=new Dm,O.constructor=Wm,O.f=(function(){return this.S.a.length}),O.bK=(function(e){return this.S.a[e]}),O.j=(function(){var e=H();return e.t(this.S,e.q)}),O.d=(function(e){return e instanceof Wm?wo().gL(this.S,e.S):Em.prototype.d.call(this,e)}),O.e=(function(){return new X(this.S)}),O.be=(function(e,t,n,r){var i=e.J;t.length!==0&&(i.n=``+i.n+t);var a=this.S.a.length;if(a!==0){if(n===``)i.hQ(this.S);else{i.f();var o=this.S.a[0],s=``+Vn(o);i.n+=s;for(var c=1;c<a;){i.n=``+i.n+n;var l=this.S.a[c],u=``+Vn(l);i.n+=u,c=1+c|0}}}return r.length!==0&&(i.n=``+i.n+r),e}),O.Z=(function(){return this.S}),O.h=(function(e){return Zn(this.bK(e))}),O.b=(function(e){return Zn(this.bK(e|0))}),new M().i(Wm,`scala.collection.mutable.ArraySeq$ofChar`,{bj:1,N:1,t:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,v:1,s:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function Gm(e){this.T=null,this.T=e}O=Gm.prototype=new Dm,O.constructor=Gm,O.f=(function(){return this.T.a.length}),O.bL=(function(e){return this.T.a[e]}),O.j=(function(){var e=H();return e.t(this.T,e.q)}),O.d=(function(e){if(e instanceof Gm){var t=e.T;if(this.T===t)return!0;if(this.T.a.length===t.a.length){for(var n=0;n<this.T.a.length&&this.T.a[n]===t.a[n];)n=1+n|0;return n>=this.T.a.length}return!1}return Em.prototype.d.call(this,e)}),O.e=(function(){return new X(this.T)}),O.Z=(function(){return this.T}),O.h=(function(e){return this.bL(e)}),O.b=(function(e){return this.bL(e|0)}),new M().i(Gm,`scala.collection.mutable.ArraySeq$ofDouble`,{bk:1,N:1,t:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,v:1,s:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function Km(e){this.U=null,this.U=e}O=Km.prototype=new Dm,O.constructor=Km,O.f=(function(){return this.U.a.length}),O.bM=(function(e){return this.U.a[e]}),O.j=(function(){var e=H();return e.t(this.U,e.q)}),O.d=(function(e){if(e instanceof Km){var t=e.U;if(this.U===t)return!0;if(this.U.a.length===t.a.length){for(var n=0;n<this.U.a.length&&this.U.a[n]===t.a[n];)n=1+n|0;return n>=this.U.a.length}return!1}return Em.prototype.d.call(this,e)}),O.e=(function(){return new X(this.U)}),O.Z=(function(){return this.U}),O.h=(function(e){return this.bM(e)}),O.b=(function(e){return this.bM(e|0)}),new M().i(Km,`scala.collection.mutable.ArraySeq$ofFloat`,{bl:1,N:1,t:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,v:1,s:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function qm(e){this.aG=null,this.aG=e}O=qm.prototype=new Dm,O.constructor=qm,O.f=(function(){return this.aG.a.length}),O.bN=(function(e){return this.aG.a[e]}),O.j=(function(){var e=H();return e.t(this.aG,e.q)}),O.d=(function(e){return e instanceof qm?wo().gM(this.aG,e.aG):Em.prototype.d.call(this,e)}),O.e=(function(){return new X(this.aG)}),O.Z=(function(){return this.aG}),O.h=(function(e){return this.bN(e)}),O.b=(function(e){return this.bN(e|0)}),new M().i(qm,`scala.collection.mutable.ArraySeq$ofInt`,{bm:1,N:1,t:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,v:1,s:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function Jm(e){this.aH=null,this.aH=e}O=Jm.prototype=new Dm,O.constructor=Jm,O.f=(function(){return this.aH.a.length>>>1|0}),O.bO=(function(e){var t=this.aH.a,n=e<<1;return k(t[n],t[n+1|0])}),O.j=(function(){var e=H();return e.t(this.aH,e.q)}),O.d=(function(e){return e instanceof Jm?wo().gN(this.aH,e.aH):Em.prototype.d.call(this,e)}),O.e=(function(){return new X(this.aH)}),O.Z=(function(){return this.aH}),O.h=(function(e){return this.bO(e)}),O.b=(function(e){return this.bO(e|0)}),new M().i(Jm,`scala.collection.mutable.ArraySeq$ofLong`,{bn:1,N:1,t:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,v:1,s:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function Ym(e){this.aI=null,this.aI=e}O=Ym.prototype=new Dm,O.constructor=Ym,O.f=(function(){return this.aI.a.length}),O.h=(function(e){return this.aI.a[e]}),O.j=(function(){var e=H();return e.t(this.aI,e.q)}),O.d=(function(e){return e instanceof Ym?Fo().gQ(this.aI,e.aI):Em.prototype.d.call(this,e)}),O.e=(function(){return new X(this.aI)}),O.Z=(function(){return this.aI}),O.b=(function(e){return this.h(e|0)}),new M().i(Ym,`scala.collection.mutable.ArraySeq$ofRef`,{bo:1,N:1,t:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,v:1,s:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function Xm(e){this.aJ=null,this.aJ=e}O=Xm.prototype=new Dm,O.constructor=Xm,O.f=(function(){return this.aJ.a.length}),O.bP=(function(e){return this.aJ.a[e]}),O.j=(function(){var e=H();return e.t(this.aJ,e.q)}),O.d=(function(e){return e instanceof Xm?wo().gO(this.aJ,e.aJ):Em.prototype.d.call(this,e)}),O.e=(function(){return new X(this.aJ)}),O.Z=(function(){return this.aJ}),O.h=(function(e){return this.bP(e)}),O.b=(function(e){return this.bP(e|0)}),new M().i(Xm,`scala.collection.mutable.ArraySeq$ofShort`,{bp:1,N:1,t:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,v:1,s:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function Zm(e){this.aT=null,this.aT=e}O=Zm.prototype=new Dm,O.constructor=Zm,O.f=(function(){return this.aT.a.length}),O.bQ=(function(e){}),O.j=(function(){var e=H();return e.t(this.aT,e.q)}),O.d=(function(e){return e instanceof Zm?this.aT.a.length===e.aT.a.length:Em.prototype.d.call(this,e)}),O.e=(function(){return new X(this.aT)}),O.Z=(function(){return this.aT}),O.h=(function(e){this.bQ(e)}),O.b=(function(e){this.bQ(e|0)}),new M().i(Zm,`scala.collection.mutable.ArraySeq$ofUnit`,{bq:1,N:1,t:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,v:1,s:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function Qm(e,t){this.dn=null,this.aj=null,this.dn=e,this.aj=t}O=Qm.prototype=new Vm,O.constructor=Qm,O.aN=(function(){return new Kd(this)}),O.M=(function(){return 2}),O.O=(function(){return`::`}),O.N=(function(e){if(e===0)return this.dn;if(e===1)return this.aj;throw Md(new Nd,e)}),O.L=(function(){return this.dn}),O.A=(function(){return this.aj}),new M().i(Qm,`scala.collection.immutable.$colon$colon`,{eI:1,ah:1,I:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,A:1,C:1,B:1,aZ:1,a7:1,bf:1,be:1,p:1,q:1,b2:1,D:1,a:1,a8:1,P:1});function $m(){eh=this,$(),$()}O=$m.prototype=new Vm,O.constructor=$m,O.aN=(function(){return new Kd(this)}),O.M=(function(){return 0}),O.O=(function(){return`Nil`}),O.N=(function(e){throw Md(new Nd,e)}),O.iX=(function(){throw new Bd(`head of empty list`)}),O.k0=(function(){throw new Rd(`tail of empty list`)}),O.p=(function(){return 0}),O.e=(function(){return Zl().H}),O.L=(function(){this.iX()}),O.A=(function(){this.k0()}),new M().i($m,`scala.collection.immutable.Nil$`,{eN:1,ah:1,I:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,A:1,C:1,B:1,aZ:1,a7:1,bf:1,be:1,p:1,q:1,b2:1,D:1,a:1,a8:1,P:1});var eh;function $(){return eh||=new $m,eh}function th(e,t){return e.J=t,e}function nh(e){return th(e,new Pu),e}function rh(){this.J=null}O=rh.prototype=new xm,O.constructor=rh,O.a3=(function(e){return Gc(this,e)}),O.e=(function(){return up(new fp,new pm(this))}),O.a1=(function(e){var t=this.J.f();return t===e?0:t<e?-1:1}),O.an=(function(){return`IndexedSeq`}),O.f=(function(){return this.J.f()}),O.p=(function(){return this.J.f()}),O.hF=(function(e){var t=this.J,n=``+Vn(e);return t.n+=n,this}),O.k=(function(){return this.J.n}),O.c=(function(){return this.J.f()===0}),O.h=(function(e){return Zn(this.J.gD(e))}),O.b=(function(e){var t=e|0;return Zn(this.J.gD(t))}),O.Y=(function(e){return this.hF($n(e))}),O.ae=(function(){return this.J.n}),new M().i(rh,`scala.collection.mutable.StringBuilder`,{f2:1,t:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,v:1,s:1,u:1,x:1,w:1,S:1,T:1,V:1,a9:1,o:1,n:1,F:1,E:1,af:1,a:1});function ih(e){var t=new oh().cL(e);e.V=t.V,e.am=t.am,e.cp=!1}function ah(e){e.cq=1+e.cq|0,e.cp&&ih(e)}function oh(){this.cq=0,this.V=null,this.am=null,this.cp=!1,this.W=0,this.cq=0,this.V=$(),this.am=null,this.cp=!1,this.W=0}O=oh.prototype=new Cm,O.constructor=oh,O.e=(function(){return new Ef(this.V.e(),new tu((()=>this.cq)))}),O.h=(function(e){return of(this.V,e)}),O.f=(function(){return this.W}),O.p=(function(){return this.W}),O.c=(function(){return this.W===0}),O.hi=(function(){return this.cp=!this.c(),this.V}),O.hK=(function(e){ah(this);var t=new Qm(e,$());if(this.W===0)this.V=t;else{var n=this.am;n===null&&Ss().bg(),n.aj=t}return this.am=t,this.W=1+this.W|0,this}),O.cL=(function(e){var t=e.e();if(t.i()){var n=1,r=new Qm(t.g(),$());for(this.V=r;t.i();){var i=new Qm(t.g(),$());r.aj=i,r=i,n=1+n|0}this.W=n,this.am=r}return this}),O.hD=(function(e){var t=e.e();if(t.i()){var n=new oh().cL(t);if(ah(this),this.W===0)this.V=n.V;else{var r=this.am;r===null&&Ss().bg(),r.aj=n.V}this.am=n.am,this.W=this.W+n.W|0}return this}),O.an=(function(){return`ListBuffer`}),O.aZ=(function(){return Tf()}),O.b=(function(e){var t=e|0;return of(this.V,t)}),O.ae=(function(){return this.hi()}),O.Y=(function(e){return this.hK(e)}),O.a3=(function(e){return this.hD(e)}),new M().i(oh,`scala.collection.mutable.ListBuffer`,{bt:1,ai:1,t:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,v:1,s:1,u:1,x:1,w:1,S:1,T:1,ak:1,aj:1,p:1,q:1,V:1,a9:1,a:1,a8:1});function sh(e,t,n){return e.bc=0,e.al=t,e.v=n,e}function ch(e){return sh(e,new j(16),0),e}function lh(){this.bc=0,this.al=null,this.v=0}O=lh.prototype=new Cm,O.constructor=lh,O.e=(function(){return this.k7().e()}),O.a1=(function(e){var t=this.v;return t===e?0:t<e?-1:1}),O.p=(function(){return this.v}),O.gJ=(function(e){this.al=hf().hd(this.al,this.v,e)}),O.h=(function(e){var t=1+e|0;if(e<0)throw os().h1(e,this.v-1|0);if(t>this.v)throw os().h1(t-1|0,this.v-1|0);return this.al.a[e]}),O.f=(function(){return this.v}),O.k7=(function(){return new gm(this,new tu((()=>this.bc)))}),O.hH=(function(e){this.bc=1+this.bc|0;var t=1+this.v|0;return this.al.a.length<=(t-1|0)&&this.gJ(t),this.v=t,this.al.a[t-1|0]=e,this}),O.gx=(function(e){if(e instanceof lh){var t=e.v;t>0&&(this.bc=1+this.bc|0,this.gJ(this.v+t|0),Fo().cv(e.al,0,this.al,this.v,t),this.v=this.v+t|0)}else Gc(this,e);return this}),O.an=(function(){return`ArrayBuffer`}),O.aM=(function(e,t,n){var r=this.v,i=xo().a5(e),a=n<r?n:r,o=t<0?i:i-t|0,s=o<a?o:a,c=s<0?0:s;return c>0&&Fo().cv(this.al,0,e,t,c),c}),O.b=(function(e){return this.h(e|0)}),O.aZ=(function(){return hf()}),O.Y=(function(e){return this.hH(e)}),O.a3=(function(e){return this.gx(e)}),new M().i(lh,`scala.collection.mutable.ArrayBuffer`,{bg:1,ai:1,t:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,v:1,s:1,u:1,x:1,w:1,S:1,T:1,ak:1,aj:1,o:1,n:1,F:1,E:1,bs:1,p:1,q:1,a:1,a8:1});function uh(e,t){return e.aK=t,e}function dh(e){return uh(e,[]),e}function fh(){this.aK=null}O=fh.prototype=new Cm,O.constructor=fh,O.an=(function(){return`IndexedSeq`}),O.e=(function(){return up(new fp,new pm(this))}),O.a1=(function(e){var t=this.aK.length|0;return t===e?0:t<e?-1:1}),O.h=(function(e){return this.aK[e]}),O.f=(function(){return this.aK.length|0}),O.p=(function(){return this.aK.length|0}),O.aL=(function(){return`WrappedArray`}),O.ae=(function(){return this}),O.Y=(function(e){return this.aK.push(e),this}),O.b=(function(e){var t=e|0;return this.aK[t]}),O.aZ=(function(){return Af()}),new M().i(fh,`scala.scalajs.js.WrappedArray`,{fp:1,ai:1,t:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,v:1,s:1,u:1,x:1,w:1,S:1,T:1,ak:1,aj:1,q:1,p:1,E:1,o:1,n:1,F:1,bs:1,V:1,a:1}),wa(new(ip.r()).C([]));