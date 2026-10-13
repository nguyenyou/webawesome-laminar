var e=Object.defineProperty,t=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function n(e,t){function n(n){let r=e.getBoundingClientRect(),i=e.ownerDocument.defaultView,a=r.left+i.pageXOffset,o=r.top+i.pageYOffset,s=n.pageX-a,c=n.pageY-o;t?.onMove&&t.onMove(s,c)}function r(){document.removeEventListener(`pointermove`,n),document.removeEventListener(`pointerup`,r),t?.onStop&&t.onStop()}document.addEventListener(`pointermove`,n,{passive:!0}),document.addEventListener(`pointerup`,r),t?.initialEvent instanceof PointerEvent&&n(t.initialEvent)}typeof window<`u`&&`ontouchstart`in window;
/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const r=globalThis,i=r.ShadowRoot&&(r.ShadyCSS===void 0||r.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,a=Symbol(),o=/* @__PURE__ */ new WeakMap;var s=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(i&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=o.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&o.set(t,e))}return e}toString(){return this.cssText}};const c=e=>new s(typeof e==`string`?e:e+``,void 0,a),l=(e,...t)=>new s(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,a),u=(e,t)=>{if(i)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),i=r.litNonce;i!==void 0&&t.setAttribute(`nonce`,i),t.textContent=n.cssText,e.appendChild(t)}},d=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return c(t)})(e):e,{is:f,defineProperty:p,getOwnPropertyDescriptor:m,getOwnPropertyNames:h,getOwnPropertySymbols:g,getPrototypeOf:_}=Object,v=globalThis,y=v.trustedTypes,b=y?y.emptyScript:``,x=v.reactiveElementPolyfillSupport,ee=(e,t)=>e,S={toAttribute(e,t){
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
switch(t){case Boolean:e=e?b:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},te=(e,t)=>!f(e,t),C={attribute:!0,type:String,converter:S,reflect:!1,useDefault:!1,hasChanged:te};Symbol.metadata??=Symbol(`metadata`),v.litPropertyMetadata??=/* @__PURE__ */ new WeakMap;var w=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=C){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&p(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=m(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??C}static _$Ei(){if(this.hasOwnProperty(ee(`elementProperties`)))return;let e=_(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ee(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ee(`properties`))){let e=this.properties,t=[...h(e),...g(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=/* @__PURE__ */ new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(d(e))}else e!==void 0&&t.push(d(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=/* @__PURE__ */ new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=/* @__PURE__ */ new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=/* @__PURE__ */ new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return u(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?S:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?S:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??te)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=/* @__PURE__ */ new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=/* @__PURE__ */ new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=/* @__PURE__ */ new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};w.elementStyles=[],w.shadowRootOptions={mode:`open`},w[ee(`elementProperties`)]=/* @__PURE__ */ new Map,w[ee(`finalized`)]=/* @__PURE__ */ new Map,x?.({ReactiveElement:w}),(v.reactiveElementVersions??=[]).push(`2.1.2`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const ne=globalThis,re=e=>e,ie=ne.trustedTypes,ae=ie?ie.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,oe=`$lit$`,se=`lit$${Math.random().toFixed(9).slice(2)}$`,ce=`?`+se,le=`<${ce}>`,ue=document,de=()=>ue.createComment(``),fe=e=>e===null||typeof e!=`object`&&typeof e!=`function`,pe=Array.isArray,me=e=>pe(e)||typeof e?.[Symbol.iterator]==`function`,he=`[ 	
\f\r]`,ge=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_e=/-->/g,ve=/>/g,ye=RegExp(`>|${he}(?:([^\\s"'>=/]+)(${he}*=${he}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),be=/'/g,xe=/"/g,Se=/^(?:script|style|textarea|title)$/i,T=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),Ce=Symbol.for(`lit-noChange`),E=Symbol.for(`lit-nothing`),we=/* @__PURE__ */ new WeakMap,Te=ue.createTreeWalker(ue,129);function Ee(e,t){if(!pe(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return ae===void 0?t:ae.createHTML(t)}const De=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=ge;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===ge?c[1]===`!--`?o=_e:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=ye):(Se.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=ye):o=ve:o===ye?c[0]===`>`?(o=i??ge,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?ye:c[3]===`"`?xe:be):o===xe||o===be?o=ye:o===_e||o===ve?o=ge:(o=ye,i=void 0);let d=o===ye&&e[t+1].startsWith(`/>`)?` `:``;a+=o===ge?n+le:l>=0?(r.push(s),n.slice(0,l)+oe+n.slice(l)+se+d):n+se+(l===-2?t:d)}return[Ee(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]};var Oe=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=De(t,n);if(this.el=e.createElement(l,r),Te.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=Te.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(oe)){let t=u[o++],n=i.getAttribute(e).split(se),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Ne:r[1]===`?`?Pe:r[1]===`@`?Fe:Me}),i.removeAttribute(e)}else e.startsWith(se)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Se.test(i.tagName)){let e=i.textContent.split(se),t=e.length-1;if(t>0){i.textContent=ie?ie.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],de()),Te.nextNode(),c.push({type:2,index:++a});i.append(e[t],de())}}}else if(i.nodeType===8){if(i.data===ce)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(se,e+1))!==-1;)c.push({type:7,index:a}),e+=se.length-1}}a++}}static createElement(e,t){let n=ue.createElement(`template`);return n.innerHTML=e,n}};function ke(e,t,n=e,r){if(t===Ce)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=fe(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=ke(e,i._$AS(e,t.values),i,r)),t}var Ae=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??ue).importNode(t,!0);Te.currentNode=r;let i=Te.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new je(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Ie(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=Te.nextNode(),a++)}return Te.currentNode=ue,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},je=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ke(this,e,t),fe(e)?e===E||e==null||e===``?(this._$AH!==E&&this._$AR(),this._$AH=E):e!==this._$AH&&e!==Ce&&this._(e):e._$litType$===void 0?e.nodeType===void 0?me(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==E&&fe(this._$AH)?this._$AA.nextSibling.data=e:this.T(ue.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Oe.createElement(Ee(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Ae(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=we.get(e.strings);return t===void 0&&we.set(e.strings,t=new Oe(e)),t}k(t){pe(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(de()),this.O(de()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=re(e).nextSibling;re(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Me=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=E,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(/* @__PURE__ */ new String),this.strings=n):this._$AH=E}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=ke(this,e,t,0),a=!fe(e)||e!==this._$AH&&e!==Ce,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=ke(this,r[n+o],t,o),s===Ce&&(s=this._$AH[o]),a||=!fe(s)||s!==this._$AH[o],s===E?e=E:e!==E&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Ne=class extends Me{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===E?void 0:e}},Pe=class extends Me{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==E)}},Fe=class extends Me{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=ke(this,e,t,0)??E)===Ce)return;let n=this._$AH,r=e===E&&n!==E||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==E&&(n===E||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ie=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){ke(this,e)}};const Le={M:oe,P:se,A:ce,C:1,L:De,R:Ae,D:me,V:ke,I:je,H:Me,N:Pe,U:Fe,B:Ne,F:Ie},Re=ne.litHtmlPolyfillSupport;Re?.(Oe,je),(ne.litHtmlVersions??=[]).push(`3.3.3`);const ze=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new je(t.insertBefore(de(),e),e,void 0,n??{})}return i._$AI(e),i},Be=globalThis
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
;var Ve=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ze(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ce}};Ve._$litElement$=!0,Ve.finalized=!0,Be.litElementHydrateSupport?.({LitElement:Ve});const He=Be.litElementPolyfillSupport;He?.({LitElement:Ve}),(Be.litElementVersions??=[]).push(`4.2.2`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ue=l`
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
`,We=[]
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;function Ge(e){Ke(e),We.push(e)}function Ke(e){for(let t=We.length-1;t>=0;t--)if(We[t]===e){We.splice(t,1);break}}function qe(e){return We.length>0&&We[We.length-1]===e}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Je=(e={})=>{let{validationElement:t,validationProperty:n}=e;t||typeof document<`u`&&`createElement`in document&&(t=Object.assign(document.createElement(`input`),{required:!0})),n||=`value`;let r={observedAttributes:[`required`],message:t?.validationMessage,checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return(e.required??e.hasAttribute(`required`))&&(e[n]||(t.message=typeof r.message==`function`?r.message(e):r.message||``,t.isValid=!1,t.invalidKeys.push(`valueMissing`))),t}};return r},Ye=l`
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
`,Xe=l`
  :host {
    --grid-width: 17em;
    --grid-height: 12em;
    --grid-handle-size: 1.25em;
    --slider-height: 1em;
    --slider-handle-size: calc(var(--slider-height) + 0.25em);
  }

  .color-picker {
    background-color: var(--wa-color-surface-raised);
    border-radius: var(--wa-border-radius-m);
    border-style: var(--wa-border-style);
    border-width: var(--wa-border-width-s);
    border-color: var(--wa-color-surface-border);
    box-shadow: var(--wa-shadow-m);
    color: var(--color);
    font: inherit;
    font-size: inherit;
    user-select: none;
    width: var(--grid-width);
    -webkit-user-select: none;
  }

  .grid {
    position: relative;
    height: var(--grid-height);
    background-image:
      linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: calc(var(--wa-border-radius-m) - var(--wa-border-width-s));
    border-top-right-radius: calc(var(--wa-border-radius-m) - var(--wa-border-width-s));
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: var(--wa-border-radius-circle);
    box-shadow: 0 0 0 0.0625rem rgba(0, 0, 0, 0.2);
    border: solid 0.125rem white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: scale var(--wa-transition-normal) var(--wa-transition-easing);
  }

  .grid-handle-dragging {
    cursor: none;
    scale: 1.5;
  }

  .grid-handle:focus-visible {
    outline: var(--wa-focus-ring);
  }

  .controls {
    padding: 0.75em;
    display: flex;
    align-items: center;
  }

  .sliders {
    flex: 1 1 auto;
  }

  .slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--wa-border-radius-s);
    box-shadow: inset 0 0 0 0.0625rem rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .slider:not(:last-of-type) {
    margin-bottom: 0.75em;
  }

  .slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    border-radius: var(--wa-border-radius-circle);
    border: solid 0.125rem white;
    box-shadow: 0 0 0 0.0625rem rgba(0, 0, 0, 0.2);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .slider-handle:focus-visible {
    outline: var(--wa-focus-ring);
  }

  .hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .alpha .alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 3em;
    height: 3em;
    border: none;
    border-radius: var(--wa-border-radius-circle);
    background: none;
    font-size: inherit;
    margin-inline-start: 0.75em;
    cursor: copy;
    forced-color-adjust: none;
  }

  .preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 0.0625rem rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .preview:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  .preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 0.0625rem rgba(0, 0, 0, 0.125);
  }

  .preview-color-copied {
    animation: pulse 850ms;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--wa-color-brand-fill-loud);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .user-input {
    display: flex;
    align-items: center;
    padding: 0 0.75em 0.75em 0.75em;
  }

  .user-input wa-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;

    &::part(form-control-label) {
      /* Visually hidden */
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
  }

  .user-input wa-button-group {
    margin-inline-start: 0.75em;

    &::part(base) {
      flex-wrap: nowrap;
    }
  }

  .user-input wa-button:first-of-type {
    min-width: 3em;
    max-width: 3em;
  }

  .swatches {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(1.5em, 100%), 1fr));
    grid-gap: 0.5em;
    justify-items: center;
    border-block-start: var(--wa-form-control-border-style) var(--wa-form-control-border-width)
      var(--wa-color-surface-border);
    padding: 0.5em;
    forced-color-adjust: none;
  }

  .swatch {
    position: relative;
    aspect-ratio: 1 / 1;
    width: 100%;
    border-radius: var(--wa-border-radius-s);
  }

  .swatch .swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 0.0625rem rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .swatch:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  .transparent-bg {
    background-image:
      linear-gradient(45deg, var(--wa-color-neutral-fill-normal) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--wa-color-neutral-fill-normal) 75%),
      linear-gradient(45deg, transparent 75%, var(--wa-color-neutral-fill-normal) 75%),
      linear-gradient(45deg, var(--wa-color-neutral-fill-normal) 25%, transparent 25%);
    background-size: 0.5rem 0.5rem;
    background-position:
      0 0,
      0 0,
      -0.25rem -0.25rem,
      0.25rem 0.25rem;
  }

  :host([disabled]) {
    opacity: 0.5;
    cursor: not-allowed;

    .grid,
    .grid-handle,
    .slider,
    .slider-handle,
    .preview,
    .swatch,
    .swatch-color {
      pointer-events: none;
    }
  }

  /*
   * Color dropdown
   */

  .color-dropdown {
    display: contents;
  }

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--wa-color-surface-raised);
    border: var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-surface-border);
    border-radius: var(--wa-border-radius-m);
    overflow: visible;
  }

  .trigger {
    display: block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: inherit;
    forced-color-adjust: none;
    width: var(--wa-form-control-height);
    height: var(--wa-form-control-height);
    border-radius: var(--wa-form-control-border-radius);
  }

  .trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow:
      inset 0 0 0 var(--wa-form-control-border-width) var(--wa-form-control-border-color),
      inset 0 0 0 calc(var(--wa-form-control-border-width) * 3) var(--wa-color-surface-default);
  }

  .trigger-empty:before {
    background-color: transparent;
  }

  .trigger:focus-visible {
    outline: none;
  }

  .trigger:focus-visible:not(.trigger:disabled) {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  :host([disabled]) :is(.label, .trigger) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .form-control.form-control-has-label .label {
    cursor: pointer;
    display: inline-block;
  }
`
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Ze(e,t,n){return(e=>Object.is(e,-0)?0:e)(e<t?t:e>n?n:e)}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Qe=class extends Event{constructor(){super(`wa-invalid`,{bubbles:!0,cancelable:!1,composed:!0})}},$e=Object.defineProperty,et=Object.getOwnPropertyDescriptor,tt=e=>{
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
throw TypeError(e)},D=(e,t,n,r)=>{for(var i=r>1?void 0:r?et(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&$e(t,n,i),i},nt=(e,t,n)=>t.has(e)||tt(`Cannot `+n),rt=(e,t,n)=>(nt(e,t,`read from private field`),n?n.call(e):t.get(e)),it=(e,t,n)=>t.has(e)?tt(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),at=(e,t,n,r)=>(nt(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const ot=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},st={attribute:!0,type:String,converter:S,reflect:!1,hasChanged:te},ct=(e=st,t,n)=>{
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=/* @__PURE__ */ new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function O(e){return(t,n)=>typeof n==`object`?ct(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function k(e){return O({...e,state:!0,attribute:!1})}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
function lt(e){return(t,n)=>{let r=typeof t==`function`?t:t[n];Object.assign(r,e)}}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const ut=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function dt(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return ut(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return ut(n,r,{get(){return a(this)}})}}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var ft=l`
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
`,pt=/;\s+$/;function mt(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function ht(e){let{property:t,value:n,element:r}=e;if(n){let e=r.getAttribute(`style`)||``;e&&(e.match(pt)||(e+=`;`),e+=` `);let i=`${t}: ${n}`;return e.includes(i)?void 0:`${e}${i};`}return null}var gt,_t=class extends Ve{constructor(){super(),it(this,gt,!1),this.initialReflectedProperties=/* @__PURE__ */ new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,t)=>{if(this.internals?.states)try{t?this.internals.states.add(e):this.internals.states.delete(e)}catch(e){if(String(e).includes(`must start with '--'`))console.error(`Your browser implements an outdated version of CustomStateSet. Consider using a polyfill`);else throw e}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error(`Element internals are not supported in your browser. Consider using a polyfill`)}this.customStates.set(`wa-defined`,!0);let e=this.constructor;for(let[t,n]of e.elementProperties)n.default===`inherit`&&n.initial!==void 0&&typeof t==`string`&&this.customStates.set(`initial-${t}-${n.initial}`,!0)}static get styles(){return[ft,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `)),this.didSSR&&this.updateComplete.then(()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `))})}attributeChangedCallback(e,t,n){rt(this,gt)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),at(this,gt,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll(`slot`).forEach(e=>{e.dispatchEvent(new Event(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(e){if(this.didSSR&&!this.hasUpdated){let t=new Event(`lit-hydration-error`,{bubbles:!0,composed:!0,cancelable:!1});t.error=e,this.dispatchEvent(t)}throw e}}setStyle(e,t){if(this.style)this.style[e]=t;else{let n=ht({property:mt(e),value:t,element:this});n&&this.setAttribute(`style`,n)}}setStyleProperty(e,t){if(this.style)this.style.setProperty(e,t);else{let n=ht({property:e,value:t,element:this});n&&this.setAttribute(`style`,n)}}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};gt=/* @__PURE__ */ new WeakMap,D([O()],_t.prototype,`dir`,2),D([O()],_t.prototype,`lang`,2),D([O({type:Boolean,reflect:!0,attribute:`did-ssr`})],_t.prototype,`didSSR`,2);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var vt=()=>({observedAttributes:[`custom-error`],checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=[`customError`]),t}}),yt=class extends _t{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=[`input`],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new Qe))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},`addEventListener`in this&&this.addEventListener(`invalid`,this.emitInvalid)}static get validators(){return[vt()]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let n of t.observedAttributes)e.add(n);return[...e]}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.updateValidity()}):this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener?.(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has(`customError`)&&(this.customError||=null,this.setCustomValidity(this.customError||``)),e.has(`value`)||e.has(`disabled`)||e.has(`defaultValue`)){let e=this.value;this.updateFormValue(e)}e.has(`disabled`)&&(this.customStates.set(`disabled`,this.disabled),(this.hasAttribute(`disabled`)||!this.matches(`:disabled`))&&this.toggleAttribute(`disabled`,this.disabled)),super.willUpdate(e),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>this.updateValidity()):this.updateValidity()}updateFormValue(e){if(Array.isArray(e)){if(this.name){let t=new FormData;for(let n of e)t.append(this.name,n);this.setValue(t,t)}}else this.setValue(e,e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(e){e?this.setAttribute(`form`,e):this.removeAttribute(`form`)}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],n=e[1],r=e[2];r||=this.validationTarget,this.internals.setValidity(t,n,r||void 0),this.requestUpdate(`validity`),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set(`required`,e),this.customStates.set(`optional`,!e),this.customStates.set(`invalid`,!t),this.customStates.set(`valid`,t),this.customStates.set(`user-invalid`,!t&&n),this.customStates.set(`user-valid`,t&&n)}setCustomValidity(e){e?(this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)):(this.customError=null,this.setValidity({}))}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity()}):(this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity())}setValue(...e){let[t,n]=e;this.internals.setFormValue(t,n)}get allValidators(){let e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(``),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute(`disabled`)||!this.willValidate){this.resetValidity();return}let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},n=this.validationTarget||this.input||void 0,r=``;for(let n of e){let{isValid:e,message:i,invalidKeys:a}=n.checkValidity(this);e||(r||=i,a?.length>=0&&a.forEach(e=>t[e]=!0))}r||=this.validationMessage,this.setValidity(t,r,n)}};yt.formAssociated=!0,D([O({reflect:!0})],yt.prototype,`name`,2),D([O({type:Boolean})],yt.prototype,`disabled`,2),D([O({state:!0,attribute:!1})],yt.prototype,`valueHasChanged`,2),D([O({state:!0,attribute:!1})],yt.prototype,`hasInteracted`,2),D([O({attribute:`custom-error`,reflect:!0})],yt.prototype,`customError`,2),D([O({attribute:!1,state:!0,type:Object})],yt.prototype,`validity`,1);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var bt={small:`s`,medium:`m`,large:`l`},xt=/* @__PURE__ */ new Set;function St(e,t){t in bt&&!xt.has(`${e}:${t}`)&&(xt.add(`${e}:${t}`),console.warn(`[${e}] size="${t}" is deprecated. Use size="${bt[t]}" instead. The long-form value will be removed in the next major version.`))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ct=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return this.host.childNodes?[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===Node.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`wa-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1}):!1}hasNamedSlot(e){return this.host.querySelector?.(`:scope > [slot="${e}"]`)!==null}test(e,t){return t&&this.host.didSSR&&!this.host.hasUpdated?!!this.host[t]:e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){let e=this.host.shadowRoot;e&&`addEventListener`in e&&e.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){let e=this.host.shadowRoot;e&&`removeEventListener`in e&&e.removeEventListener(`slotchange`,this.handleSlotChange)}},wt=l`
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
function Tt(e,t){return new Promise(n=>{function r(i){i.target===e&&(e.removeEventListener(t,r),n())}e.addEventListener(t,r)})}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Et(e,t){return new Promise(n=>{let r=new AbortController,{signal:i}=r;if(e.classList.contains(t))return;e.classList.add(t);let a=!1,o=()=>{a||(a=!0,e.classList.remove(t),n(),r.abort())};e.addEventListener(`animationend`,o,{once:!0,signal:i}),e.addEventListener(`animationcancel`,o,{once:!0,signal:i}),requestAnimationFrame(()=>{!a&&e.getAnimations().length===0&&o()})})}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Dt(e,t){let n={waitUntilFirstUpdate:!1,...t};return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}const Ot=/* @__PURE__ */ new Set,kt=/* @__PURE__ */ new Map;let At,jt=`ltr`,Mt=`en`;const Nt=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(Nt){let e=new MutationObserver(Ft);jt=document.documentElement.dir||`ltr`,Mt=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function Pt(...e){e.map(e=>{let t=e.$code.toLowerCase();kt.has(t)?kt.set(t,Object.assign(Object.assign({},kt.get(t)),e)):kt.set(t,e),At||=e}),Ft()}function Ft(){Nt&&(jt=document.documentElement.dir||`ltr`,Mt=document.documentElement.lang||navigator.language),[...Ot.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var It=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Ot.add(this.host)}hostDisconnected(){Ot.delete(this.host)}dir(){return`${this.host.dir||jt}`.toLowerCase()}lang(){let e=`${this.host.lang||Mt}`.toLowerCase().replace(/_/g,`-`);try{return new Intl.Locale(e),e}catch{return At?At.$code.toLowerCase():`en`}}getTranslationData(e){let t;try{t=new Intl.Locale(e.replace(/_/g,`-`))}catch{return{locale:void 0,language:``,region:``,primary:void 0,secondary:void 0}}let n=t.language.toLowerCase(),r=t.region?.toLowerCase()??``,i=kt.get(`${n}-${r}`),a=kt.get(n);return{locale:t,language:n,region:r,primary:i,secondary:a}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&At&&At[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(At&&At[e])i=At[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},Lt={$code:`en`,$name:`English`,$dir:`ltr`,allTagsRemoved:`All tags removed`,am:`AM`,autosizeColumn:`Autosize column`,captions:`Captions`,carousel:`Carousel`,chooseDate:`Choose date`,chooseDecade:`Choose decade`,chooseMonth:`Choose month`,chooseTime:`Choose time`,chooseYear:`Choose year`,clearEntry:`Clear entry`,clearFilter:`Clear filter`,clearSort:`Clear sort`,close:`Close`,closeCalendar:`Close calendar`,closeTimeInput:`Close time picker`,collapseRow:`Collapse row`,columnMenu:`Column options`,columnMovedToPosition:(e,t,n)=>`${e} moved to position ${t} of ${n}`,columns:`Columns`,compactPageXOfY:(e,t)=>`${e} of ${t}`,completed:`Completed`,copied:`Copied`,copy:`Copy`,createOption:e=>`Create "${e}"`,currentlyPlaying:`currently playing`,currentValue:`Current value`,date:`Date`,datePickerKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the calendar.`,day:`Day`,dayPeriod:`AM/PM`,decrement:`Decrement`,deselectAllRows:`Deselect all rows`,disabled:`Disabled`,dropFileHere:`Drop file here or click to browse`,dropFilesHere:`Drop files here or click to browse`,empty:`Empty`,endDate:`End date`,enterFullscreen:`Enter fullscreen`,error:`Error`,exitFullscreen:`Exit fullscreen`,expandRow:`Expand row`,filterByColumn:e=>`Filter by ${e}`,filterFrom:`From`,filterMax:`Max`,filterMin:`Min`,filterTo:`To`,firstPage:`First page`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hideColumn:`Hide column`,hidePassword:`Hide password`,hour:`Hour`,incompleteDate:`Enter a valid date.`,increment:`Increment`,jumpBackwardX:e=>`Jump back ${e} pages`,jumpForwardX:e=>`Jump forward ${e} pages`,lastPage:`Last page`,loading:`Loading`,locked:`Locked`,minute:`Minute`,month:`Month`,moreOptions:`More Options`,mute:`Mute`,nextDecade:`Next decade`,nextMonth:`Next month`,nextPage:`Next page`,nextSlide:`Next slide`,nextVideo:`Next Video`,nextYear:`Next year`,noData:`No data`,noOptions:`No options`,noResults:`No matching results`,notCompleted:`Not completed`,now:`Now`,numCharacters:e=>e===1?`1 character`:`${e} characters`,numCharactersRemaining:e=>e===1?`1 character remaining`:`${e} characters remaining`,numOptionsAvailable:e=>e===0?`No options available`:e===1?`1 option available`:`${e} options available`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,numRowsCopied:e=>e===1?`1 row copied`:`${e} rows copied`,numRowsSelected:e=>e===1?`1 row selected`:`${e} rows selected`,optionPosition:(e,t,n)=>`${e}, ${t} of ${n}`,optionsLoadError:`Options could not be loaded`,pageXOfY:(e,t)=>`Page ${e} of ${t}`,pagination:`Pagination`,pause:`Pause`,pauseAnimation:`Pause animation`,pictureInPicture:`Picture in picture`,pinLeft:`Pin left`,pinRight:`Pin right`,play:`Play`,playAnimation:`Play animation`,playbackSpeed:`Playback speed`,playlist:`Playlist`,pm:`PM`,previousDecade:`Previous decade`,previousMonth:`Previous month`,previousPage:`Previous page`,previousSlide:`Previous slide`,previousVideo:`Previous video`,previousYear:`Previous year`,progress:`Progress`,rangeTooLong:e=>e===1?`Select a range no longer than 1 day`:`Select a range no longer than ${e} days`,rangeTooShort:e=>e===1?`Select a range at least 1 day long`:`Select a range at least ${e} days long`,readonly:`Read-only`,remove:`Remove`,resetColumns:`Reset columns`,resize:`Resize`,resizeColumn:`Resize column`,rowsPerPage:`Rows per page`,scrollableRegion:`Scrollable region`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,search:`Search`,second:`Second`,seek:`Seek`,seekProgress:(e,t)=>`${e} of ${t}`,selectAColorFromTheScreen:`Select a color from the screen`,selectAllRows:`Select all rows`,selected:`Selected`,selectedDateLabel:e=>`Selected: ${e}`,selectedRangeLabel:e=>`Selected range: ${e}`,selectGroup:`Select group`,selectionCleared:`Selection cleared`,selectRow:`Select row`,showingNofMRows:(e,t)=>`Showing ${e} of ${t} rows`,showingXtoYofZ:(e,t,n)=>`${e}\u2013${t} of ${n}`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,sortAscending:`Sort ascending`,sortColumn:`Sort column`,sortDescending:`Sort descending`,startDate:`Start date`,steps:`Steps`,stepXOfY:(e,t)=>`Step ${e} of ${t}`,tagAdded:e=>`${e} added`,tagAlreadyAdded:e=>`${e} is already added`,tagInputKeyboardHelp:`Press Backspace or Delete to remove this tag.`,tagRemoved:e=>`${e} removed`,time:`Time`,timeInputKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the time picker.`,today:`Today`,toggleColorFormat:`Toggle color format`,tooFewTags:e=>e===1?`Add at least 1 tag`:`Add at least ${e} tags`,tooManyTags:e=>e===1?`Add no more than 1 tag`:`Add no more than ${e} tags`,unmute:`Unmute`,unpin:`Unpin`,unpinColumn:`Unpin column`,videoPlayer:`Video player`,volume:`Volume`,year:`Year`,zoomIn:`Zoom in`,zoomOut:`Zoom out`}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;Pt(Lt);var Rt=Lt,zt=class extends It{lang(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||`en`:super.lang()}};Pt(Rt);function A(e,t){Vt(e)&&(e=`100%`);let n=Ht(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),n&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(e=t===360?(e<0?e%t+t:e%t)/parseFloat(String(t)):e%t/parseFloat(String(t)),e)}function Bt(e){return Math.min(1,Math.max(0,e))}function Vt(e){return typeof e==`string`&&e.indexOf(`.`)!==-1&&parseFloat(e)===1}function Ht(e){return typeof e==`string`&&e.indexOf(`%`)!==-1}function Ut(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function Wt(e){return Number(e)<=1?`${Number(e)*100}%`:e}function Gt(e){return e.length===1?`0`+e:String(e)}function Kt(e,t,n){return{r:A(e,255)*255,g:A(t,255)*255,b:A(n,255)*255}}function qt(e,t,n){e=A(e,255),t=A(t,255),n=A(n,255);let r=Math.max(e,t,n),i=Math.min(e,t,n),a=0,o=0,s=(r+i)/2;if(r===i)o=0,a=0;else{let c=r-i;switch(o=s>.5?c/(2-r-i):c/(r+i),r){case e:a=(t-n)/c+(t<n?6:0);break;case t:a=(n-e)/c+2;break;case n:a=(e-t)/c+4}a/=6}return{h:a,s:o,l:s}}function Jt(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*(6*n):n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Yt(e,t,n){let r,i,a;if(e=A(e,360),t=A(t,100),n=A(n,100),t===0)i=n,a=n,r=n;else{let o=n<.5?n*(1+t):n+t-n*t,s=2*n-o;r=Jt(s,o,e+1/3),i=Jt(s,o,e),a=Jt(s,o,e-1/3)}return{r:r*255,g:i*255,b:a*255}}function Xt(e,t,n){e=A(e,255),t=A(t,255),n=A(n,255);let r=Math.max(e,t,n),i=Math.min(e,t,n),a=0,o=r,s=r-i,c=r===0?0:s/r;if(r===i)a=0;else{switch(r){case e:a=(t-n)/s+(t<n?6:0);break;case t:a=(n-e)/s+2;break;case n:a=(e-t)/s+4}a/=6}return{h:a,s:c,v:o}}function Zt(e,t,n){e=A(e,360)*6,t=A(t,100),n=A(n,100);let r=Math.floor(e),i=e-r,a=n*(1-t),o=n*(1-i*t),s=n*(1-(1-i)*t),c=r%6,l=[n,o,a,a,s,n][c],u=[s,n,n,o,a,a][c],d=[a,a,s,n,n,o][c];return{r:l*255,g:u*255,b:d*255}}function Qt(e,t,n,r){let i=[Gt(Math.round(e).toString(16)),Gt(Math.round(t).toString(16)),Gt(Math.round(n).toString(16))];return r&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join(``)}function $t(e,t,n,r,i){let a=[Gt(Math.round(e).toString(16)),Gt(Math.round(t).toString(16)),Gt(Math.round(n).toString(16)),Gt(nn(r))];return i&&a[0].startsWith(a[0].charAt(1))&&a[1].startsWith(a[1].charAt(1))&&a[2].startsWith(a[2].charAt(1))&&a[3].startsWith(a[3].charAt(1))?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join(``)}function en(e,t,n,r){let i=e/100,a=t/100,o=n/100,s=r/100;return{r:255*(1-i)*(1-s),g:255*(1-a)*(1-s),b:255*(1-o)*(1-s)}}function tn(e,t,n){let r=1-e/255,i=1-t/255,a=1-n/255,o=Math.min(r,i,a);return o===1?(r=0,i=0,a=0):(r=(r-o)/(1-o)*100,i=(i-o)/(1-o)*100,a=(a-o)/(1-o)*100),o*=100,{c:Math.round(r),m:Math.round(i),y:Math.round(a),k:Math.round(o)}}function nn(e){return Math.round(parseFloat(e)*255).toString(16)}function rn(e){return an(e)/255}function an(e){return parseInt(e,16)}function on(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}const sn={aliceblue:`#f0f8ff`,antiquewhite:`#faebd7`,aqua:`#00ffff`,aquamarine:`#7fffd4`,azure:`#f0ffff`,beige:`#f5f5dc`,bisque:`#ffe4c4`,black:`#000000`,blanchedalmond:`#ffebcd`,blue:`#0000ff`,blueviolet:`#8a2be2`,brown:`#a52a2a`,burlywood:`#deb887`,cadetblue:`#5f9ea0`,chartreuse:`#7fff00`,chocolate:`#d2691e`,coral:`#ff7f50`,cornflowerblue:`#6495ed`,cornsilk:`#fff8dc`,crimson:`#dc143c`,cyan:`#00ffff`,darkblue:`#00008b`,darkcyan:`#008b8b`,darkgoldenrod:`#b8860b`,darkgray:`#a9a9a9`,darkgreen:`#006400`,darkgrey:`#a9a9a9`,darkkhaki:`#bdb76b`,darkmagenta:`#8b008b`,darkolivegreen:`#556b2f`,darkorange:`#ff8c00`,darkorchid:`#9932cc`,darkred:`#8b0000`,darksalmon:`#e9967a`,darkseagreen:`#8fbc8f`,darkslateblue:`#483d8b`,darkslategray:`#2f4f4f`,darkslategrey:`#2f4f4f`,darkturquoise:`#00ced1`,darkviolet:`#9400d3`,deeppink:`#ff1493`,deepskyblue:`#00bfff`,dimgray:`#696969`,dimgrey:`#696969`,dodgerblue:`#1e90ff`,firebrick:`#b22222`,floralwhite:`#fffaf0`,forestgreen:`#228b22`,fuchsia:`#ff00ff`,gainsboro:`#dcdcdc`,ghostwhite:`#f8f8ff`,goldenrod:`#daa520`,gold:`#ffd700`,gray:`#808080`,green:`#008000`,greenyellow:`#adff2f`,grey:`#808080`,honeydew:`#f0fff0`,hotpink:`#ff69b4`,indianred:`#cd5c5c`,indigo:`#4b0082`,ivory:`#fffff0`,khaki:`#f0e68c`,lavenderblush:`#fff0f5`,lavender:`#e6e6fa`,lawngreen:`#7cfc00`,lemonchiffon:`#fffacd`,lightblue:`#add8e6`,lightcoral:`#f08080`,lightcyan:`#e0ffff`,lightgoldenrodyellow:`#fafad2`,lightgray:`#d3d3d3`,lightgreen:`#90ee90`,lightgrey:`#d3d3d3`,lightpink:`#ffb6c1`,lightsalmon:`#ffa07a`,lightseagreen:`#20b2aa`,lightskyblue:`#87cefa`,lightslategray:`#778899`,lightslategrey:`#778899`,lightsteelblue:`#b0c4de`,lightyellow:`#ffffe0`,lime:`#00ff00`,limegreen:`#32cd32`,linen:`#faf0e6`,magenta:`#ff00ff`,maroon:`#800000`,mediumaquamarine:`#66cdaa`,mediumblue:`#0000cd`,mediumorchid:`#ba55d3`,mediumpurple:`#9370db`,mediumseagreen:`#3cb371`,mediumslateblue:`#7b68ee`,mediumspringgreen:`#00fa9a`,mediumturquoise:`#48d1cc`,mediumvioletred:`#c71585`,midnightblue:`#191970`,mintcream:`#f5fffa`,mistyrose:`#ffe4e1`,moccasin:`#ffe4b5`,navajowhite:`#ffdead`,navy:`#000080`,oldlace:`#fdf5e6`,olive:`#808000`,olivedrab:`#6b8e23`,orange:`#ffa500`,orangered:`#ff4500`,orchid:`#da70d6`,palegoldenrod:`#eee8aa`,palegreen:`#98fb98`,paleturquoise:`#afeeee`,palevioletred:`#db7093`,papayawhip:`#ffefd5`,peachpuff:`#ffdab9`,peru:`#cd853f`,pink:`#ffc0cb`,plum:`#dda0dd`,powderblue:`#b0e0e6`,purple:`#800080`,rebeccapurple:`#663399`,red:`#ff0000`,rosybrown:`#bc8f8f`,royalblue:`#4169e1`,saddlebrown:`#8b4513`,salmon:`#fa8072`,sandybrown:`#f4a460`,seagreen:`#2e8b57`,seashell:`#fff5ee`,sienna:`#a0522d`,silver:`#c0c0c0`,skyblue:`#87ceeb`,slateblue:`#6a5acd`,slategray:`#708090`,slategrey:`#708090`,snow:`#fffafa`,springgreen:`#00ff7f`,steelblue:`#4682b4`,tan:`#d2b48c`,teal:`#008080`,thistle:`#d8bfd8`,tomato:`#ff6347`,turquoise:`#40e0d0`,violet:`#ee82ee`,wheat:`#f5deb3`,white:`#ffffff`,whitesmoke:`#f5f5f5`,yellow:`#ffff00`,yellowgreen:`#9acd32`};function cn(e){let t={r:0,g:0,b:0},n=1,r=null,i=null,a=null,o=!1,s=!1;return typeof e==`string`&&(e=pn(e)),typeof e==`object`&&(mn(e.r)&&mn(e.g)&&mn(e.b)?(t=Kt(e.r,e.g,e.b),o=!0,s=String(e.r).substr(-1)===`%`?`prgb`:`rgb`):mn(e.h)&&mn(e.s)&&mn(e.v)?(r=Wt(e.s),i=Wt(e.v),t=Zt(e.h,r,i),o=!0,s=`hsv`):mn(e.h)&&mn(e.s)&&mn(e.l)?(r=Wt(e.s),a=Wt(e.l),t=Yt(e.h,r,a),o=!0,s=`hsl`):mn(e.c)&&mn(e.m)&&mn(e.y)&&mn(e.k)&&(t=en(e.c,e.m,e.y,e.k),o=!0,s=`cmyk`),Object.prototype.hasOwnProperty.call(e,`a`)&&(n=e.a)),n=Ut(n),{ok:o,format:e.format||s,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:n}}const ln=`(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)`,un=`[\\s|\\(]+(`+ln+`)[,|\\s]+(`+ln+`)[,|\\s]+(`+ln+`)\\s*\\)?`,dn=`[\\s|\\(]+(`+ln+`)[,|\\s]+(`+ln+`)[,|\\s]+(`+ln+`)[,|\\s]+(`+ln+`)\\s*\\)?`,fn={CSS_UNIT:RegExp(ln),rgb:RegExp(`rgb`+un),rgba:RegExp(`rgba`+dn),hsl:RegExp(`hsl`+un),hsla:RegExp(`hsla`+dn),hsv:RegExp(`hsv`+un),hsva:RegExp(`hsva`+dn),cmyk:RegExp(`cmyk`+dn),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function pn(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;let t=!1;if(sn[e])e=sn[e],t=!0;else if(e===`transparent`)return{r:0,g:0,b:0,a:0,format:`name`};let n=fn.rgb.exec(e);return n?{r:n[1],g:n[2],b:n[3]}:(n=fn.rgba.exec(e),n?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=fn.hsl.exec(e),n?{h:n[1],s:n[2],l:n[3]}:(n=fn.hsla.exec(e),n?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=fn.hsv.exec(e),n?{h:n[1],s:n[2],v:n[3]}:(n=fn.hsva.exec(e),n?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=fn.cmyk.exec(e),n?{c:n[1],m:n[2],y:n[3],k:n[4]}:(n=fn.hex8.exec(e),n?{r:an(n[1]),g:an(n[2]),b:an(n[3]),a:rn(n[4]),format:t?`name`:`hex8`}:(n=fn.hex6.exec(e),n?{r:an(n[1]),g:an(n[2]),b:an(n[3]),format:t?`name`:`hex`}:(n=fn.hex4.exec(e),n?{r:an(n[1]+n[1]),g:an(n[2]+n[2]),b:an(n[3]+n[3]),a:rn(n[4]+n[4]),format:t?`name`:`hex8`}:(n=fn.hex3.exec(e),n?{r:an(n[1]+n[1]),g:an(n[2]+n[2]),b:an(n[3]+n[3]),format:t?`name`:`hex`}:!1))))))))))}function mn(e){return typeof e==`number`?!Number.isNaN(e):fn.CSS_UNIT.test(e)}var hn=class e{constructor(t=``,n={}){if(t instanceof e)return t;typeof t==`number`&&(t=on(t)),this.originalInput=t;let r=cn(t);this.originalInput=t,this.r=r.r,this.g=r.g,this.b=r.b,this.a=r.a,this.roundA=Math.round(100*this.a)/100,this.format=n.format??r.format,this.gradientType=n.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=r.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){let e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3}getLuminance(){let e=this.toRgb(),t,n,r,i=e.r/255,a=e.g/255,o=e.b/255;return t=i<=.03928?i/12.92:((i+.055)/1.055)**2.4,n=a<=.03928?a/12.92:((a+.055)/1.055)**2.4,r=o<=.03928?o/12.92:((o+.055)/1.055)**2.4,.2126*t+.7152*n+.0722*r}getAlpha(){return this.a}setAlpha(e){return this.a=Ut(e),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){let{s:e}=this.toHsl();return e===0}toHsv(){let e=Xt(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}}toHsvString(){let e=Xt(this.r,this.g,this.b),t=Math.round(e.h*360),n=Math.round(e.s*100),r=Math.round(e.v*100);return this.a===1?`hsv(${t}, ${n}%, ${r}%)`:`hsva(${t}, ${n}%, ${r}%, ${this.roundA})`}toHsl(){let e=qt(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}}toHslString(){let e=qt(this.r,this.g,this.b),t=Math.round(e.h*360),n=Math.round(e.s*100),r=Math.round(e.l*100);return this.a===1?`hsl(${t}, ${n}%, ${r}%)`:`hsla(${t}, ${n}%, ${r}%, ${this.roundA})`}toHex(e=!1){return Qt(this.r,this.g,this.b,e)}toHexString(e=!1){return`#`+this.toHex(e)}toHex8(e=!1){return $t(this.r,this.g,this.b,this.a,e)}toHex8String(e=!1){return`#`+this.toHex8(e)}toHexShortString(e=!1){return this.a===1?this.toHexString(e):this.toHex8String(e)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){let e=Math.round(this.r),t=Math.round(this.g),n=Math.round(this.b);return this.a===1?`rgb(${e}, ${t}, ${n})`:`rgba(${e}, ${t}, ${n}, ${this.roundA})`}toPercentageRgb(){let e=e=>`${Math.round(A(e,255)*100)}%`;return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}}toPercentageRgbString(){let e=e=>Math.round(A(e,255)*100);return this.a===1?`rgb(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%)`:`rgba(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%, ${this.roundA})`}toCmyk(){return{...tn(this.r,this.g,this.b)}}toCmykString(){let{c:e,m:t,y:n,k:r}=tn(this.r,this.g,this.b);return`cmyk(${e}, ${t}, ${n}, ${r})`}toName(){if(this.a===0)return`transparent`;if(this.a<1)return!1;let e=`#`+Qt(this.r,this.g,this.b,!1);for(let[t,n]of Object.entries(sn))if(e===n)return t;return!1}toString(e){let t=!!e;e??=this.format;let n=!1,r=this.a<1&&this.a>=0;return!t&&r&&(e.startsWith(`hex`)||e===`name`)?e===`name`&&this.a===0?this.toName():this.toRgbString():(e===`rgb`&&(n=this.toRgbString()),e===`prgb`&&(n=this.toPercentageRgbString()),(e===`hex`||e===`hex6`)&&(n=this.toHexString()),e===`hex3`&&(n=this.toHexString(!0)),e===`hex4`&&(n=this.toHex8String(!0)),e===`hex8`&&(n=this.toHex8String()),e===`name`&&(n=this.toName()),e===`hsl`&&(n=this.toHslString()),e===`hsv`&&(n=this.toHsvString()),e===`cmyk`&&(n=this.toCmykString()),n||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new e(this.toString())}lighten(t=10){let n=this.toHsl();return n.l+=t/100,n.l=Bt(n.l),new e(n)}brighten(t=10){let n=this.toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(255*-(t/100)))),n.g=Math.max(0,Math.min(255,n.g-Math.round(255*-(t/100)))),n.b=Math.max(0,Math.min(255,n.b-Math.round(255*-(t/100)))),new e(n)}darken(t=10){let n=this.toHsl();return n.l-=t/100,n.l=Bt(n.l),new e(n)}tint(e=10){return this.mix(`white`,e)}shade(e=10){return this.mix(`black`,e)}desaturate(t=10){let n=this.toHsl();return n.s-=t/100,n.s=Bt(n.s),new e(n)}saturate(t=10){let n=this.toHsl();return n.s+=t/100,n.s=Bt(n.s),new e(n)}greyscale(){return this.desaturate(100)}spin(t){let n=this.toHsl(),r=(n.h+t)%360;return n.h=r<0?360+r:r,new e(n)}mix(t,n=50){let r=this.toRgb(),i=new e(t).toRgb(),a=n/100,o={r:(i.r-r.r)*a+r.r,g:(i.g-r.g)*a+r.g,b:(i.b-r.b)*a+r.b,a:(i.a-r.a)*a+r.a};return new e(o)}analogous(t=6,n=30){let r=this.toHsl(),i=360/n,a=[this];for(r.h=(r.h-(i*t>>1)+720)%360;--t;)r.h=(r.h+i)%360,a.push(new e(r));return a}complement(){let t=this.toHsl();return t.h=(t.h+180)%360,new e(t)}monochromatic(t=6){let n=this.toHsv(),{h:r}=n,{s:i}=n,{v:a}=n,o=[],s=1/t;for(;t--;)o.push(new e({h:r,s:i,v:a})),a=(a+s)%1;return o}splitcomplement(){let t=this.toHsl(),{h:n}=t;return[this,new e({h:(n+72)%360,s:t.s,l:t.l}),new e({h:(n+216)%360,s:t.s,l:t.l})]}onBackground(t){let n=this.toRgb(),r=new e(t).toRgb(),i=n.a+r.a*(1-n.a);return new e({r:(n.r*n.a+r.r*r.a*(1-n.a))/i,g:(n.g*n.a+r.g*r.a*(1-n.a))/i,b:(n.b*n.a+r.b*r.a*(1-n.a))/i,a:i})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(t){let n=this.toHsl(),{h:r}=n,i=[this],a=360/t;for(let o=1;o<t;o++)i.push(new e({h:(r+o*a)%360,s:n.s,l:n.l}));return i}equals(t){let n=new e(t);return this.format===`cmyk`||n.format===`cmyk`?this.toCmykString()===n.toCmykString():this.toRgbString()===n.toRgbString()}};
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const gn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},_n=e=>(...t)=>({_$litDirective$:e,values:t});var vn=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const yn=_n(class extends vn{constructor(e){if(super(e),e.type!==gn.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=/* @__PURE__ */ new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return Ce}}),j=e=>e??E,bn=_n(class extends vn{constructor(e){
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
if(super(e),e.type!==gn.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(` !important`);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?`important`:``):n[e]=r}}return Ce}});
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var M=class extends yt{constructor(){super(),this.hasSlotController=new Ct(this,`hint`,`label`),this.isSafeValue=!1,this.localize=new zt(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.inputValue=``,this.hue=0,this.isEmpty=!0,this.saturation=100,this.brightness=100,this.alpha=100,this._value=null,this.defaultValue=this.getAttribute(`value`)||null,this.withLabel=!1,this.withHint=!1,this.hasEyeDropper=!1,this.label=``,this.hint=``,this.format=`hex`,this.size=`m`,this.placement=`bottom-start`,this.withoutFormatToggle=!1,this.name=null,this.disabled=!1,this.open=!1,this.opacity=!1,this.uppercase=!1,this.swatches=``,this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0},this.handleFocusOut=()=>{this.hasFocus=!1},this.reportValidityAfterShow=()=>{this.removeEventListener(`invalid`,this.emitInvalid),this.reportValidity(),this.addEventListener(`invalid`,this.emitInvalid)},this.handleKeyDown=e=>{this.open&&e.key===`Escape`&&qe(this)&&(e.stopPropagation(),this.hide(),this.focus())},this.handleDocumentKeyDown=e=>{e.key===`Escape`&&this.open&&qe(this)?(e.stopPropagation(),this.focus(),this.hide()):e.key===`Tab`&&setTimeout(()=>{let e=this.getRootNode()instanceof ShadowRoot?document.activeElement?.shadowRoot?.activeElement:document.activeElement;(!this||e?.closest(this.tagName.toLowerCase())!==this)&&this.hide()})},this.handleDocumentMouseDown=e=>{let t=e.composedPath().some(e=>e instanceof Element&&(e.closest(`.color-picker`)||e===this.trigger));this&&!t&&this.hide()},this.addEventListener(`focusin`,this.handleFocusIn),this.addEventListener(`focusout`,this.handleFocusOut),this.opacity=this.hasAttribute(`opacity`),this.uppercase=this.hasAttribute(`uppercase`);let e=this.getAttribute(`format`);(e===`rgb`||e===`hsl`||e===`hsv`)&&(this.format=e),this.handleValueChange(``,this.value||``)}static get validators(){let e=[Je()];return[...super.validators,...e]}get validationTarget(){return this.popup?.active?this.input:this.trigger}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){this._value!==e&&(this.valueHasChanged=!0,this._value=e)}handleSizeChange(){St(this.localName,this.size)}updateFormValue(e){e==null?this.setValue(``,null):super.updateFormValue(e)}handleCopy(){this.input.select(),document.execCommand(`copy`),this.previewButton.focus(),this.previewButton.classList.add(`preview-color-copied`),this.previewButton.addEventListener(`animationend`,()=>{this.previewButton.classList.remove(`preview-color-copied`)})}handleFormatToggle(){let e=[`hex`,`rgb`,`hsl`,`hsv`],t=(e.indexOf(this.format)+1)%e.length;this.format=e[t],this.setColor(this.value||``),this.updateComplete.then(()=>{this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0}))})}handleAlphaDrag(e){let t=this.shadowRoot.querySelector(`.slider.alpha`),r=t.querySelector(`.slider-handle`),{width:i}=t.getBoundingClientRect(),a=this.value,o=this.value;r.focus(),e.preventDefault(),n(t,{onMove:e=>{this.alpha=Ze(e/i*100,0,100),this.syncValues(),this.value!==o&&(o=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0}))}))},onStop:()=>{this.value!==a&&(a=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}))},initialEvent:e})}handleHueDrag(e){let t=this.shadowRoot.querySelector(`.slider.hue`),r=t.querySelector(`.slider-handle`),{width:i}=t.getBoundingClientRect(),a=this.value,o=this.value;r.focus(),e.preventDefault(),n(t,{onMove:e=>{this.hue=Ze(e/i*360,0,360),this.syncValues(),this.value!==o&&(o=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`))}))},onStop:()=>{this.value!==a&&(a=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}))},initialEvent:e})}handleGridDrag(e){let t=this.shadowRoot.querySelector(`.grid`),r=t.querySelector(`.grid-handle`),{width:i,height:a}=t.getBoundingClientRect(),o=this.value,s=this.value;r.focus(),e.preventDefault(),this.isDraggingGridHandle=!0,n(t,{onMove:(e,t)=>{this.saturation=Ze(e/i*100,0,100),this.brightness=Ze(100-t/a*100,0,100),this.syncValues(),this.value!==s&&(s=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0}))}))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==o&&(o=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}))},initialEvent:e})}handleAlphaKeyDown(e){let t=e.shiftKey?10:1,n=this.value;e.key===`ArrowLeft`&&(e.preventDefault(),this.alpha=Ze(this.alpha-t,0,100),this.syncValues()),e.key===`ArrowRight`&&(e.preventDefault(),this.alpha=Ze(this.alpha+t,0,100),this.syncValues()),e.key===`Home`&&(e.preventDefault(),this.alpha=0,this.syncValues()),e.key===`End`&&(e.preventDefault(),this.alpha=100,this.syncValues()),this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})}handleHueKeyDown(e){let t=e.shiftKey?10:1,n=this.value;e.key===`ArrowLeft`&&(e.preventDefault(),this.hue=Ze(this.hue-t,0,360),this.syncValues()),e.key===`ArrowRight`&&(e.preventDefault(),this.hue=Ze(this.hue+t,0,360),this.syncValues()),e.key===`Home`&&(e.preventDefault(),this.hue=0,this.syncValues()),e.key===`End`&&(e.preventDefault(),this.hue=360,this.syncValues()),this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})}handleGridKeyDown(e){let t=e.shiftKey?10:1,n=this.value;e.key===`ArrowLeft`&&(e.preventDefault(),this.saturation=Ze(this.saturation-t,0,100),this.syncValues()),e.key===`ArrowRight`&&(e.preventDefault(),this.saturation=Ze(this.saturation+t,0,100),this.syncValues()),e.key===`ArrowUp`&&(e.preventDefault(),this.brightness=Ze(this.brightness+t,0,100),this.syncValues()),e.key===`ArrowDown`&&(e.preventDefault(),this.brightness=Ze(this.brightness-t,0,100),this.syncValues()),this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})}handleInputChange(e){let t=e.target,n=this.value;e.stopPropagation(),this.input.value?(this.setColor(t.value),t.value=this.value||``):this.value=``,this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})}handleInputInput(e){this.updateValidity(),e.stopPropagation()}handleInputKeyDown(e){if(e.key===`Enter`){let e=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==e&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}),setTimeout(()=>this.input.select())):this.hue=0}}handleTouchMove(e){e.preventDefault()}parseColor(e){if(!e||e.trim()===``)return null;let t=new hn(e);if(!t.isValid)return null;let n=t.toHsl(),r=t.toRgb(),i=t.toHsv();if(!r||r.r==null||r.g==null||r.b==null)return null;let a={h:n.h||0,s:(n.s||0)*100,l:(n.l||0)*100,a:n.a||0},o=t.toHexString(),s=t.toHex8String(),c={h:i.h||0,s:(i.s||0)*100,v:(i.v||0)*100,a:i.a||0};return{hsl:{h:a.h,s:a.s,l:a.l,string:this.setLetterCase(`hsl(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.l)}%)`)},hsla:{h:a.h,s:a.s,l:a.l,a:a.a,string:this.setLetterCase(`hsla(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.l)}%, ${a.a.toFixed(2).toString()})`)},hsv:{h:c.h,s:c.s,v:c.v,string:this.setLetterCase(`hsv(${Math.round(c.h)}, ${Math.round(c.s)}%, ${Math.round(c.v)}%)`)},hsva:{h:c.h,s:c.s,v:c.v,a:c.a,string:this.setLetterCase(`hsva(${Math.round(c.h)}, ${Math.round(c.s)}%, ${Math.round(c.v)}%, ${c.a.toFixed(2).toString()})`)},rgb:{r:r.r,g:r.g,b:r.b,string:this.setLetterCase(`rgb(${Math.round(r.r)}, ${Math.round(r.g)}, ${Math.round(r.b)})`)},rgba:{r:r.r,g:r.g,b:r.b,a:r.a||0,string:this.setLetterCase(`rgba(${Math.round(r.r)}, ${Math.round(r.g)}, ${Math.round(r.b)}, ${(r.a||0).toFixed(2).toString()})`)},hex:this.setLetterCase(o),hexa:this.setLetterCase(s)}}setColor(e){let t=this.parseColor(e);return t!==null&&(this.hue=t.hsva.h,this.saturation=t.hsva.s,this.brightness=t.hsva.v,this.alpha=this.opacity?t.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(e){return typeof e==`string`?this.uppercase?e.toUpperCase():e.toLowerCase():``}async syncValues(){let e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);e!==null&&(this.inputValue=this.format===`hsl`?this.opacity?e.hsla.string:e.hsl.string:this.format===`rgb`?this.opacity?e.rgba.string:e.rgb.string:this.format===`hsv`?this.opacity?e.hsva.string:e.hsv.string:this.opacity?e.hexa:e.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove(`preview-color-copied`),this.updateValidity()}handleAfterShow(){this.updateValidity()}handleEyeDropper(){this.hasEyeDropper&&new EyeDropper().open().then(e=>{let t=this.value;this.setColor(e.sRGBHex),this.value!==t&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})}).catch(()=>{})}selectSwatch(e){let t=this.value;this.disabled||(this.setColor(e),this.value!==t&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}))}getHexString(e,t,n,r=100){let i=new hn(`hsva(${e}, ${t}%, ${n}%, ${r/100})`);return i.isValid?i.toHex8String():``}stopNestedEventPropagation(e){e.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}willUpdate(e){(e.has(`value`)||e.has(`defaultValue`))&&this.handleValueChange(e.get(`value`)||``,this.value||``),super.willUpdate(e)}handleValueChange(e,t){if(this.isEmpty=!t,t||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){let n=this.parseColor(t);n===null?this.inputValue=e??``:(this.inputValue=this.value||``,this.hue=n.hsva.h,this.saturation=n.hsva.s,this.brightness=n.hsva.v,this.alpha=this.opacity?n.hsva.a*100:100,this.syncValues())}this.requestUpdate()}focus(e){this.trigger.focus(e)}blur(){let e=this.trigger;this.hasFocus&&(e.focus({preventScroll:!0}),e.blur()),this.popup?.active&&this.hide()}getFormattedValue(e=`hex`){let t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(t===null)return``;switch(e){case`hex`:return t.hex;case`hexa`:return t.hexa;case`rgb`:return t.rgb.string;case`rgba`:return t.rgba.string;case`hsl`:return t.hsl.string;case`hsla`:return t.hsla.string;case`hsv`:return t.hsv.string;case`hsva`:return t.hsva.string;default:return``}}reportValidity(){return!this.validity.valid&&!this.open?(this.addEventListener(`wa-after-show`,this.reportValidityAfterShow,{once:!0}),this.show(),this.disabled||this.dispatchEvent(new Qe),!1):super.reportValidity()}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}firstUpdated(e){super.firstUpdated(e),this.hasEyeDropper=`EyeDropper`in window}handleTriggerClick(){this.open?this.hide():(this.show(),this.focus())}async handleTriggerKeyDown(e){[` `,`Enter`].includes(e.key)&&(e.preventDefault(),this.handleTriggerClick())}handleTriggerKeyUp(e){e.key===` `&&e.preventDefault()}updateAccessibleTrigger(){let e=this.trigger;e&&(e.setAttribute(`aria-haspopup`,`true`),e.setAttribute(`aria-expanded`,this.open?`true`:`false`))}async show(){if(!this.open)return this.open=!0,Tt(this,`wa-after-show`)}async hide(){if(this.open)return this.open=!1,Tt(this,`wa-after-hide`)}addOpenListeners(){this.base.addEventListener(`keydown`,this.handleKeyDown),document.addEventListener(`keydown`,this.handleDocumentKeyDown),document.addEventListener(`mousedown`,this.handleDocumentMouseDown),Ge(this)}removeOpenListeners(){this.base&&this.base.removeEventListener(`keydown`,this.handleKeyDown),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`mousedown`,this.handleDocumentMouseDown),Ke(this)}async handleOpenChange(){this.disabled?this.open=!1:(this.updateAccessibleTrigger(),this.open?(this.dispatchEvent(new CustomEvent(`wa-show`)),this.addOpenListeners(),await this.updateComplete,this.base.hidden=!1,this.popup.active=!0,await Et(this.popup.popup,`show-with-scale`),this.dispatchEvent(new CustomEvent(`wa-after-show`))):(this.dispatchEvent(new CustomEvent(`wa-hide`)),this.removeOpenListeners(),await Et(this.popup.popup,`hide-with-scale`),this.base.hidden=!0,this.popup.active=!1,this.dispatchEvent(new CustomEvent(`wa-after-hide`))))}render(){let e=this.isEmpty,t=this.hasSlotController.test(`label`,`withLabel`),n=this.hasSlotController.test(`hint`,`withHint`),r=this.label?!0:!!t,i=this.hint?!0:!!n,a=this.saturation,o=100-this.brightness,s=Array.isArray(this.swatches)?this.swatches.map(e=>typeof e==`string`?{color:e,label:e}:e):this.swatches.split(`;`).filter(e=>e.trim()!==``).map(e=>({color:e.trim(),label:e.trim()})),c=T`
      <div
        part="base color-picker"
        class=${yn({"color-picker":!0})}
        aria-disabled=${this.disabled?`true`:`false`}
        tabindex="-1"
      >
        <div
          part="grid"
          class="grid"
          style=${bn({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${yn({"grid-handle":!0,"grid-handle-dragging":this.isDraggingGridHandle})}
            style=${bn({top:`${o}%`,left:`${a}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${j(this.disabled?void 0:`0`)}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="controls">
          <div class="sliders">
            <div
              part="slider hue-slider"
              class="hue slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="slider-handle"
                style=${bn({left:`${this.hue===0?0:100/(360/this.hue)}%`,backgroundColor:this.getHexString(this.hue,100,100)})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${j(this.disabled?void 0:`0`)}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?T`
                  <div
                    part="slider opacity-slider"
                    class="alpha slider transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="alpha-gradient"
                      style=${bn({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="slider-handle"
                      style=${bn({left:`${this.alpha}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${j(this.disabled?void 0:`0`)}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:``}
          </div>

          <button
            type="button"
            part="preview"
            class="preview transparent-bg"
            aria-label=${this.localize.term(`copy`)}
            style=${bn({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="user-input" aria-live="polite">
          <wa-input
            part="input"
            type="text"
            name=${this.name}
            size="s"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            .value=${e?``:this.inputValue}
            value=${e?``:this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term(`currentValue`)}
            @keydown=${this.handleInputKeyDown}
            @change=${this.handleInputChange}
            @input=${this.handleInputInput}
            @blur=${this.stopNestedEventPropagation}
            @focus=${this.stopNestedEventPropagation}
          ></wa-input>

          <wa-button-group>
            ${this.withoutFormatToggle?``:T`
                  <wa-button
                    part="format-button"
                    size="s"
                    appearance="outlined"
                    aria-label=${this.localize.term(`toggleColorFormat`)}
                    exportparts="
                      base:format-button__base,
                      start:format-button__start,
                      label:format-button__label,
                      end:format-button__end,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @blur=${this.stopNestedEventPropagation}
                    @focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </wa-button>
                `}
            ${this.hasEyeDropper?T`
                  <wa-button
                    part="eyedropper-button"
                    size="s"
                    appearance="outlined"
                    exportparts="
                      base:eyedropper-button__base,
                      start:eyedropper-button__start,
                      label:eyedropper-button__label,
                      end:eyedropper-button__end,
                      caret:eyedropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @blur=${this.stopNestedEventPropagation}
                    @focus=${this.stopNestedEventPropagation}
                  >
                    <wa-icon
                      library="system"
                      name="eyedropper"
                      variant="solid"
                      label=${this.localize.term(`selectAColorFromTheScreen`)}
                    ></wa-icon>
                  </wa-button>
                `:``}
          </wa-button-group>
        </div>

        ${s.length>0?T`
              <div part="swatches" class="swatches">
                ${s.map(e=>{let t=this.parseColor(e.color);return t?T`
                    <div
                      part="swatch"
                      class="swatch transparent-bg"
                      tabindex=${j(this.disabled?void 0:`0`)}
                      role="button"
                      aria-label=${e.label}
                      @click=${()=>this.selectSwatch(e.color)}
                      @keydown=${t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),this.selectSwatch(e.color))}}
                    >
                      <div class="swatch-color" style=${bn({backgroundColor:t.hexa})}></div>
                    </div>
                  `:``})}
              </div>
            `:``}
      </div>
    `;return T`
      <div
        class=${yn({container:!0,"form-control":!0,"form-control-has-label":r})}
        part="trigger-container form-control"
      >
        <div
          part="form-control-label"
          class=${yn({label:!0,"has-label":r})}
          id="form-control-label"
        >
          <slot name="label">${this.label}</slot>
        </div>

        <button
          id="trigger"
          part="trigger form-control-input"
          class=${yn({trigger:!0,"trigger-empty":e,"transparent-bg":!0,"form-control-input":!0})}
          style=${bn({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
          aria-labelledby="form-control-label"
          aria-describedby="hint"
          .disabled=${this.disabled}
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
        ></button>

        <slot
          id="hint"
          name="hint"
          part="hint"
          class=${yn({"has-slotted":i})}
          >${this.hint}</slot
        >
      </div>

      <wa-popup
        class="color-popup"
        anchor="trigger"
        placement=${this.placement}
        distance="0"
        skidding="0"
        flip
        flip-fallback-strategy="best-fit"
        shift
        shift-padding="10"
        aria-disabled=${this.disabled?`true`:`false`}
        @wa-after-show=${this.handleAfterShow}
        @wa-after-hide=${this.handleAfterHide}
      >
        ${c}
      </wa-popup>
    `}};M.css=[Ue,wt,Ye,Xe],M.shadowRootOptions={...yt.shadowRootOptions,delegatesFocus:!0},D([dt(`[part~="base"]`)],M.prototype,`base`,2),D([dt(`[part~="input"]`)],M.prototype,`input`,2),D([dt(`[part~="form-control-label"]`)],M.prototype,`triggerLabel`,2),D([dt(`[part~="form-control-input"]`)],M.prototype,`triggerButton`,2),D([dt(`.color-popup`)],M.prototype,`popup`,2),D([dt(`[part~="preview"]`)],M.prototype,`previewButton`,2),D([dt(`[part~="trigger"]`)],M.prototype,`trigger`,2),D([k()],M.prototype,`hasFocus`,2),D([k()],M.prototype,`isDraggingGridHandle`,2),D([k()],M.prototype,`inputValue`,2),D([k()],M.prototype,`hue`,2),D([k()],M.prototype,`isEmpty`,2),D([k()],M.prototype,`saturation`,2),D([k()],M.prototype,`brightness`,2),D([k()],M.prototype,`alpha`,2),D([k()],M.prototype,`value`,1),D([O({attribute:`value`,reflect:!0})],M.prototype,`defaultValue`,2),D([O({attribute:`with-label`,reflect:!0,type:Boolean})],M.prototype,`withLabel`,2),D([O({attribute:`with-hint`,reflect:!0,type:Boolean})],M.prototype,`withHint`,2),D([k()],M.prototype,`hasEyeDropper`,2),D([O()],M.prototype,`label`,2),D([O({attribute:`hint`})],M.prototype,`hint`,2),D([O()],M.prototype,`format`,2),D([O({reflect:!0})],M.prototype,`size`,2),D([Dt(`size`)],M.prototype,`handleSizeChange`,1),D([O({reflect:!0})],M.prototype,`placement`,2),D([O({attribute:`without-format-toggle`,type:Boolean})],M.prototype,`withoutFormatToggle`,2),D([O({reflect:!0})],M.prototype,`name`,2),D([O({type:Boolean})],M.prototype,`disabled`,2),D([O({type:Boolean,reflect:!0})],M.prototype,`open`,2),D([O({type:Boolean})],M.prototype,`opacity`,2),D([O({type:Boolean})],M.prototype,`uppercase`,2),D([O()],M.prototype,`swatches`,2),D([O({type:Boolean,reflect:!0})],M.prototype,`required`,2),D([lt({passive:!1})],M.prototype,`handleTouchMove`,1),D([Dt(`format`,{waitUntilFirstUpdate:!0})],M.prototype,`handleFormatChange`,1),D([Dt(`opacity`,{waitUntilFirstUpdate:!0})],M.prototype,`handleOpacityChange`,1),D([Dt(`value`)],M.prototype,`handleValueChange`,1),D([Dt(`open`,{waitUntilFirstUpdate:!0})],M.prototype,`handleOpenChange`,1),M=D([ot(`wa-color-picker`)],M),M.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var xn=class extends Event{constructor(){super(`wa-clear`,{bubbles:!0,cancelable:!1,composed:!0})}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Sn(e,t){let n=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key===`Enter`&&!n&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&En(t)})}var Cn=/* @__PURE__ */ new Map([[`input`,!0],[`wa-input`,!0],[`wa-tag-input`,!0],[`wa-number-input`,!0],[`wa-otp-input`,!0],[`wa-slider`,!0]]),wn=/* @__PURE__ */ new Map([[`button`,!1],[`checkbox`,!1],[`color`,!1],[`date`,!1],[`datetime-local`,!1],[`email`,!0],[`file`,!1],[`hidden`,!1],[`image`,!1],[`month`,!1],[`number`,!0],[`password`,!0],[`radio`,!1],[`range`,!1],[`reset`,!0],[`search`,!0],[`submit`,!1],[`tel`,!0],[`text`,!0],[`time`,!1],[`url`,!0],[`week`,!1]]),Tn=e=>{let t=e?.localName;if(!t||!Cn.get(t))return!1;if(t!==`input`&&t!==`wa-input`)return!0;let n=e.type;return!!wn.get(n)};function En(e){let t=null;if(`form`in e&&(t=e.form),!t&&`getForm`in e&&(t=e.getForm()),!t)return;let n=Array.from(t.elements),r=0;for(let e of n)Tn(e)&&(r+=1);if(r===1){t.requestSubmit(null);return}let i=n.find(e=>e.type===`submit`&&!e.matches(`:disabled`));i&&([`input`,`button`].includes(i.localName)?t.requestSubmit(i):i.click())}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Dn=l`
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
`,On=()=>({checkValidity(e){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
let t=e.input,n={message:``,isValid:!0,invalidKeys:[]};if(!t)return n;let r=!0;if(`checkValidity`in t&&(r=t.checkValidity()),r)return n;if(n.isValid=!1,`validationMessage`in t&&(n.message=t.validationMessage),!(`validity`in t))return n.invalidKeys.push(`customError`),n;for(let e in t.validity){if(e===`valid`)continue;let r=e;t.validity[r]&&n.invalidKeys.push(r)}return n}});
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const{I:kn}=Le,An=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,jn=e=>e.strings===void 0,Mn={},Nn=(e,t=Mn)=>e._$AH=t,Pn=_n(class extends vn{constructor(e){
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
if(super(e),e.type!==gn.PROPERTY&&e.type!==gn.ATTRIBUTE&&e.type!==gn.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!jn(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===Ce||t===E)return t;let n=e.element,r=e.name;if(e.type===gn.PROPERTY){if(t===n[r])return Ce}else if(e.type===gn.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return Ce}else if(e.type===gn.ATTRIBUTE&&n.getAttribute(r)===t+``)return Ce;return Nn(e),t}});
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var N=class extends yt{constructor(){super(...arguments),this.assumeInteractionOn=[`blur`,`input`],this.hasSlotController=new Ct(this,`hint`,`label`),this.localize=new zt(this),this.title=``,this.type=`text`,this._value=null,this.defaultValue=this.getAttribute(`value`)||null,this.size=`m`,this.appearance=`outlined`,this.pill=!1,this.label=``,this.hint=``,this.withClear=!1,this.placeholder=``,this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.withoutSpinButtons=!1,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,On()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){this._value!==e&&(this.valueHasChanged=!0,this._value=e)}updateFormValue(e){e==null?this.setValue(``,null):super.updateFormValue(e)}handleSizeChange(){St(this.localName,this.size)}handleChange(e){this.value=this.input.value,this.relayNativeEvent(e,{bubbles:!0,composed:!0})}handleClearClick(e){e.preventDefault(),this.value!==``&&(this.value=``,this.updateComplete.then(()=>{this.dispatchEvent(new xn),this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})),this.input.focus()}handleInput(){this.value=this.input.value}handleKeyDown(e){Sn(e,this)}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}updated(e){super.updated(e),(e.has(`value`)||e.has(`defaultValue`)||e.has(`type`))&&(this.input&&[`number`,`date`,`time`,`datetime-local`].includes(this.type)&&this.value&&this.input.value!==this.value&&(this._value=this.input.value),this.customStates.set(`blank`,!this.value),this.updateValidity())}handleStepChange(){this.input.step=String(this.step),this.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,n=`none`){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,r=`preserve`){let i=t??this.input.selectionStart,a=n??this.input.selectionEnd;this.input.setRangeText(e,i,a,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){`showPicker`in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}formResetCallback(){this.value=null,this.input&&(this.input.value=this.value),super.formResetCallback()}render(){let e=this.hasSlotController.test(`label`,`withLabel`),t=this.hasSlotController.test(`hint`,`withHint`),n=this.label?!0:!!e,r=this.hint?!0:!!t,i=this.withClear&&!this.disabled&&!this.readonly,a=(!this.didSSR||this.hasUpdated)&&i&&(typeof this.value==`number`||this.value&&this.value.length>0);return T`
      <label
        part="form-control-label label"
        class=${yn({label:!0,"has-label":n})}
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
          name=${j(this.name)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${j(this.placeholder)}
          minlength=${j(this.minlength)}
          maxlength=${j(this.maxlength)}
          min=${j(this.min)}
          max=${j(this.max)}
          step=${j(this.step)}
          .value=${Pn(this.value??``)}
          autocapitalize=${j(this.autocapitalize)}
          autocomplete=${j(this.autocomplete)}
          autocorrect=${this.autocorrect?`on`:`off`}
          ?autofocus=${this.autofocus}
          spellcheck=${this.spellcheck}
          pattern=${j(this.pattern)}
          enterkeyhint=${j(this.enterkeyhint)}
          inputmode=${j(this.inputmode)}
          aria-describedby="hint"
          @change=${this.handleChange}
          @input=${this.handleInput}
          @keydown=${this.handleKeyDown}
        />

        ${a?T`
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
        ${this.passwordToggle&&!this.disabled?T`
              <button
                part="password-toggle-button"
                class="password-toggle"
                type="button"
                aria-label=${this.localize.term(this.passwordVisible?`hidePassword`:`showPassword`)}
                @click=${this.handlePasswordToggle}
              >
                ${this.passwordVisible?T`
                      <slot name="hide-password-icon">
                        <wa-icon name="eye-slash" library="system" variant="regular"></wa-icon>
                      </slot>
                    `:T`
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
        class=${yn({"has-slotted":r})}
        aria-hidden=${r?`false`:`true`}
        >${this.hint}</slot
      >
    `}};N.css=[wt,Ye,Dn],N.shadowRootOptions={...yt.shadowRootOptions,delegatesFocus:!0},D([dt(`input`)],N.prototype,`input`,2),D([O()],N.prototype,`title`,2),D([O({reflect:!0})],N.prototype,`type`,2),D([k()],N.prototype,`value`,1),D([O({attribute:`value`,reflect:!0})],N.prototype,`defaultValue`,2),D([O({reflect:!0})],N.prototype,`size`,2),D([Dt(`size`)],N.prototype,`handleSizeChange`,1),D([O({reflect:!0})],N.prototype,`appearance`,2),D([O({type:Boolean,reflect:!0})],N.prototype,`pill`,2),D([O()],N.prototype,`label`,2),D([O({attribute:`hint`})],N.prototype,`hint`,2),D([O({attribute:`with-clear`,type:Boolean})],N.prototype,`withClear`,2),D([O()],N.prototype,`placeholder`,2),D([O({type:Boolean,reflect:!0})],N.prototype,`readonly`,2),D([O({attribute:`password-toggle`,type:Boolean})],N.prototype,`passwordToggle`,2),D([O({attribute:`password-visible`,type:Boolean})],N.prototype,`passwordVisible`,2),D([O({attribute:`without-spin-buttons`,type:Boolean,reflect:!0})],N.prototype,`withoutSpinButtons`,2),D([O({type:Boolean,reflect:!0})],N.prototype,`required`,2),D([O()],N.prototype,`pattern`,2),D([O({type:Number})],N.prototype,`minlength`,2),D([O({type:Number})],N.prototype,`maxlength`,2),D([O()],N.prototype,`min`,2),D([O()],N.prototype,`max`,2),D([O()],N.prototype,`step`,2),D([O()],N.prototype,`autocapitalize`,2),D([O({type:Boolean,converter:{fromAttribute:e=>!(!e||e===`off`),toAttribute:e=>e?`on`:`off`}})],N.prototype,`autocorrect`,2),D([O()],N.prototype,`autocomplete`,2),D([O({type:Boolean})],N.prototype,`autofocus`,2),D([O()],N.prototype,`enterkeyhint`,2),D([O({type:Boolean,converter:{fromAttribute:e=>!(!e||e===`false`),toAttribute:e=>e?`true`:`false`}})],N.prototype,`spellcheck`,2),D([O()],N.prototype,`inputmode`,2),D([O({attribute:`with-label`,type:Boolean})],N.prototype,`withLabel`,2),D([O({attribute:`with-hint`,type:Boolean})],N.prototype,`withHint`,2),D([Dt(`step`,{waitUntilFirstUpdate:!0})],N.prototype,`handleStepChange`,1),N=D([ot(`wa-input`)],N),N.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Fn=class extends Event{constructor(){super(`wa-reposition`,{bubbles:!0,cancelable:!1,composed:!0})}},In=l`
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
;const Ln=Math.min,Rn=Math.max,zn=Math.round,Bn=Math.floor,Vn=e=>({x:e,y:e}),Hn={left:`right`,right:`left`,bottom:`top`,top:`bottom`};function Un(e,t,n){return Rn(e,Ln(t,n))}function Wn(e,t){return typeof e==`function`?e(t):e}function Gn(e){return e.split(`-`)[0]}function Kn(e){return e.split(`-`)[1]}function qn(e){return e===`x`?`y`:`x`}function Jn(e){return e===`y`?`height`:`width`}function Yn(e){let t=e[0];return t===`t`||t===`b`?`y`:`x`}function Xn(e){return qn(Yn(e))}function Zn(e,t,n){n===void 0&&(n=!1);let r=Kn(e),i=Xn(e),a=Jn(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=or(o)),[o,or(o)]}function Qn(e){let t=or(e);return[$n(e),t,$n(t)]}function $n(e){return e.includes(`start`)?e.replace(`start`,`end`):e.replace(`end`,`start`)}const er=[`left`,`right`],tr=[`right`,`left`],nr=[`top`,`bottom`],rr=[`bottom`,`top`];function ir(e,t,n){switch(e){case`top`:case`bottom`:return n?t?tr:er:t?er:tr;case`left`:case`right`:return t?nr:rr;default:return[]}}function ar(e,t,n,r){let i=Kn(e),a=ir(Gn(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map($n)))),a}function or(e){let t=Gn(e);return Hn[t]+e.slice(t.length)}function sr(e){return{top:e.top??0,right:e.right??0,bottom:e.bottom??0,left:e.left??0}}function cr(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:sr(e)}function lr(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function ur(e,t,n){let{reference:r,floating:i}=e,a=Yn(t),o=Xn(t),s=Jn(o),c=Gn(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}let m=Kn(t);return m&&(p[o]+=f*(m===`end`?1:-1)*(n&&l?-1:1)),p}async function dr(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=Wn(t,e),p=cr(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=lr(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=lr(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}const fr=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=o.detectOverflow?o:{...o,detectOverflow:dr},c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=ur(l,r,c),f=r,p=0,m={};for(let n=0;n<a.length;n++){let h=a[n];if(!h)continue;let{name:g,fn:_}=h,{x:v,y,data:b,reset:x}=await _({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:m,rects:l,platform:s,elements:{reference:e,floating:t}});u=v??u,d=y??d,m[g]={...m[g],...b},x&&p<50&&(p++,typeof x==`object`&&(x.placement&&(f=x.placement),x.rects&&(l=x.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):x.rects),{x:u,y:d}=ur(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:m}},pr=e=>({name:`arrow`,options:e,async fn(t){let{x:n,y:r,placement:i,rects:a,platform:o,elements:s,middlewareData:c}=t,{element:l,padding:u=0}=Wn(e,t)||{};if(l==null)return{};let d=cr(u),f={x:n,y:r},p=Xn(i),m=Jn(p),h=await o.getDimensions(l),g=p===`y`,_=g?`top`:`left`,v=g?`bottom`:`right`,y=g?`clientHeight`:`clientWidth`,b=a.reference[m]+a.reference[p]-f[p]-a.floating[m],x=f[p]-a.reference[p],ee=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l)),S=ee?ee[y]:0;(!S||!await(o.isElement==null?void 0:o.isElement(ee)))&&(S=s.floating[y]||a.floating[m]);let te=b/2-x/2,C=S/2-h[m]/2-1,w=Ln(d[_],C),ne=Ln(d[v],C),re=S-h[m]-ne,ie=S/2-h[m]/2+te,ae=Un(w,ie,re),oe=!c.arrow&&Kn(i)!=null&&ie!==ae&&a.reference[m]/2-(ie<w?w:ne)-h[m]/2<0,se=oe?ie<w?ie-w:ie-re:0;return{[p]:f[p]+se,data:{[p]:ae,centerOffset:ie-ae-se,...oe&&{alignmentOffset:se}},reset:oe}}}),mr=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=Wn(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=Gn(r),_=Yn(o),v=Gn(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),b=d||(v||!m?[or(o)]:Qn(o)),x=p!==`none`;!d&&x&&b.push(...ar(o,m,p,y));let ee=[o,...b],S=await s.detectOverflow(t,h),te=[],C=i.flip?.overflows||[];if(l&&te.push(S[g]),u){let e=Zn(r,a,y);te.push(S[e[0]],S[e[1]])}if(C=[...C,{placement:r,overflows:te}],!te.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=ee[e];if(t&&(u!==`alignment`||_===Yn(t)||C.every(e=>Yn(e.placement)!==_||e.overflows[0]>0)))return{data:{index:e,overflows:C},reset:{placement:t}};let n=C.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=C.filter(e=>{if(x){let t=Yn(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o}if(r!==n)return{reset:{placement:n}}}return{}}}},hr=/*#__PURE__*/ new Set([`left`,`top`]);async function gr(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=Gn(n),s=Kn(n),c=Yn(n)===`y`,l=hr.has(o)?-1:1,u=a&&c?-1:1,d=Wn(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}const _r=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await gr(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},vr=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i,platform:a}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=Wn(e,t),u={x:n,y:r},d=await a.detectOverflow(t,l),f=Yn(i),p=qn(f),m=u[p],h=u[f],g=(e,t)=>Un(t+d[e===`y`?`top`:`left`],t,t-d[e===`y`?`bottom`:`right`]);o&&(m=g(p,m)),s&&(h=g(f,h));let _=c.fn({...t,[p]:m,[f]:h});return{..._,data:{x:_.x-n,y:_.y-r,enabled:{[p]:o,[f]:s}}}}}},yr=function(e){return e===void 0&&(e={}),{name:`size`,options:e,async fn(t){let{placement:n,rects:r,platform:i,elements:a}=t,{apply:o=()=>{},...s}=Wn(e,t),c=await i.detectOverflow(t,s),l=Gn(n),u=Kn(n),d=Yn(n)===`y`,{width:f,height:p}=r.floating,m,h;l===`top`||l===`bottom`?(m=l,h=u===(await(i.isRTL==null?void 0:i.isRTL(a.floating))?`start`:`end`)?`left`:`right`):(h=l,m=u===`end`?`top`:`bottom`);let g=p-c.top-c.bottom,_=f-c.left-c.right,v=Ln(p-c[m],g),y=Ln(f-c[h],_),b=t.middlewareData.shift,x=!b,ee=v,S=y;b!=null&&b.enabled.x&&(S=_),b!=null&&b.enabled.y&&(ee=g),x&&!u&&(d?S=f-2*Rn(c.left,c.right):ee=p-2*Rn(c.top,c.bottom)),await o({...t,availableWidth:S,availableHeight:ee});let te=await i.getDimensions(a.floating);return f!==te.width||p!==te.height?{reset:{rects:!0}}:{}}}};function br(){return typeof window<`u`}function xr(e){return wr(e)?(e.nodeName||``).toLowerCase():`#document`}function Sr(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Cr(e){return((wr(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function wr(e){return br()?e instanceof Node||e instanceof Sr(e).Node:!1}function Tr(e){return br()?e instanceof Element||e instanceof Sr(e).Element:!1}function Er(e){return br()?e instanceof HTMLElement||e instanceof Sr(e).HTMLElement:!1}function Dr(e){return!br()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof Sr(e).ShadowRoot}function Or(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=zr(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!==`inline`&&i!==`contents`}function kr(e){return/^(table|td|th)$/.test(xr(e))}function Ar(e){try{if(e.matches(`:popover-open`))return!0}catch{}try{return e.matches(`:modal`)}catch{return!1}}const jr=/transform|translate|scale|rotate|perspective|filter/,Mr=/paint|layout|strict|content/,Nr=e=>!!e&&e!==`none`;let Pr;function Fr(e){let t=Tr(e)?zr(e):e;return Nr(t.transform)||Nr(t.translate)||Nr(t.scale)||Nr(t.rotate)||Nr(t.perspective)||!Lr()&&(Nr(t.backdropFilter)||Nr(t.filter))||jr.test(t.willChange||``)||Mr.test(t.contain||``)}function Ir(e){let t=Vr(e);for(;Er(t)&&!Rr(t);){if(Fr(t))return t;if(Ar(t))return null;t=Vr(t)}return null}function Lr(){return Pr??=typeof CSS<`u`&&CSS.supports&&CSS.supports(`-webkit-backdrop-filter`,`none`),Pr}function Rr(e){return/^(html|body|#document)$/.test(xr(e))}function zr(e){return Sr(e).getComputedStyle(e)}function Br(e){return Tr(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Vr(e){if(xr(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||Dr(e)&&e.host||Cr(e);return Dr(t)?t.host:t}function Hr(e){let t=Vr(e);return Rr(t)?(e.ownerDocument||e).body:Er(t)&&Or(t)?t:Hr(t)}function Ur(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=Hr(e),i=r===e.ownerDocument?.body,a=Sr(r);if(i){let e=Wr(a);return t.concat(a,a.visualViewport||[],Or(r)?r:[],e&&n?Ur(e):[])}return t.concat(r,Ur(r,[],n))}function Wr(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Gr(e){let t=zr(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=Er(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=zn(n)!==a||zn(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function Kr(e){return Tr(e)?e:e.contextElement}function qr(e){let t=Kr(e);if(!Er(t))return Vn(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=Gr(t),o=(a?zn(n.width):n.width)/r,s=(a?zn(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}const Jr=/*#__PURE__*/ Vn(0);function Yr(e){let t=Sr(e);return!Lr()||!t.visualViewport?Jr:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Xr(e,t,n){return t===void 0&&(t=!1),!!n&&t&&n===Sr(e)}function Zr(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=Kr(e),o=Vn(1);t&&(r?Tr(r)&&(o=qr(r)):o=qr(e));let s=Xr(a,n,r)?Yr(a):Vn(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a&&r){let e=Sr(a),t=Tr(r)?Sr(r):r,n=e,i=Wr(n);for(;i&&t!==n;){let e=qr(i),t=i.getBoundingClientRect(),r=zr(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=Sr(i),i=Wr(n)}}return lr({width:u,height:d,x:c,y:l})}function Qr(e,t){let n=Br(e).scrollLeft;return t?t.left+n:Zr(Cr(e)).left+n}function $r(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-Qr(e,n),y:n.top+t.scrollTop}}function ei(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=Cr(r),s=t?Ar(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=Vn(1),u=Vn(0),d=Er(r);if((d||!a)&&((xr(r)!==`body`||Or(o))&&(c=Br(r)),d)){let e=Zr(r);l=qr(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?$r(o,c):Vn(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function ti(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function ni(e){let t=Br(e),n=e.ownerDocument.body,r=Rn(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),i=Rn(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight),a=-t.scrollLeft+Qr(e),o=-t.scrollTop;return zr(n).direction===`rtl`&&(a+=Rn(e.clientWidth,n.clientWidth)-r),{width:r,height:i,x:a,y:o}}function ri(e,t,n){n===void 0&&(n=`viewport`);let r=n===`layoutViewport`,i=Sr(e),a=Cr(e),o=i.visualViewport,s=a.clientWidth,c=a.clientHeight,l=0,u=0;if(o){let e=!Lr()||t===`fixed`;r?e||(l=-o.offsetLeft,u=-o.offsetTop):(s=o.width,c=o.height,e&&(l=o.offsetLeft,u=o.offsetTop))}if(Qr(a)<=0){let e=a.ownerDocument,t=e.body,n=getComputedStyle(t),r=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,i=Math.abs(a.clientWidth-t.clientWidth-r),o=getComputedStyle(a).scrollbarGutter===`stable both-edges`?i/2:i;o<=25&&(s-=o)}return{width:s,height:c,x:l,y:u}}function ii(e,t){let n=Zr(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=qr(e);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function ai(e,t,n){let r;if(t===`viewport`||t===`layoutViewport`)r=ri(e,n,t);else if(t===`document`)r=ni(Cr(e));else if(Tr(t))r=ii(t,n);else{let n=Yr(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return lr(r)}function oi(e,t){let n=t.get(e);if(n)return n;let r=Ur(e,[],!1).filter(e=>Tr(e)&&xr(e)!==`body`),i=null,a=zr(e).position===`fixed`,o=a?Vr(e):e;for(;Tr(o)&&!Rr(o);){let e=zr(o),t=Fr(o),n=i?i.position:a?`fixed`:``;!t&&(n===`fixed`||n===`absolute`&&e.position===`static`)?r=r.filter(e=>e!==o):i=e,o=Vr(o)}return t.set(e,r),r}function si(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?Ar(t)?[]:oi(t,this._c):[].concat(n),r],o=ai(t,a[0],i),s=o.top,c=o.right,l=o.bottom,u=o.left;for(let e=1;e<a.length;e++){let n=ai(t,a[e],i);s=Rn(n.top,s),c=Ln(n.right,c),l=Ln(n.bottom,l),u=Rn(n.left,u)}return{width:c-u,height:l-s,x:u,y:s}}function ci(e){let{width:t,height:n}=Gr(e);return{width:t,height:n}}function li(e,t,n){let r=Er(t),i=Cr(t),a=n===`fixed`,o=Zr(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=Vn(0);if((r||!a)&&((xr(t)!==`body`||Or(i))&&(s=Br(t)),r)){let e=Zr(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}!r&&i&&(c.x=Qr(i));let l=i&&!r&&!a?$r(i,s):Vn(0);return{x:o.left+s.scrollLeft-c.x-l.x,y:o.top+s.scrollTop-c.y-l.y,width:o.width,height:o.height}}function ui(e){return zr(e).position===`static`}function di(e,t){if(!Er(e)||zr(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return Cr(e)===n&&(n=n.ownerDocument.body),n}function fi(e,t){let n=Sr(e);if(Ar(e))return n;if(!Er(e)){let t=Vr(e);for(;t&&!Rr(t);){if(Tr(t)&&!ui(t))return t;t=Vr(t)}return n}let r=di(e,t);for(;r&&kr(r)&&ui(r);)r=di(r,t);return r&&Rr(r)&&ui(r)&&!Fr(r)?n:r||Ir(e)||n}const pi=async function(e){let t=this.getOffsetParent||fi,n=this.getDimensions,r=await n(e.floating);return{reference:li(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function mi(e){return zr(e).direction===`rtl`}const hi={convertOffsetParentRelativeRectToViewportRelativeRect:ei,getDocumentElement:Cr,getClippingRect:si,getOffsetParent:fi,getElementRects:pi,getClientRects:ti,getDimensions:ci,getScale:qr,isElement:Tr,isRTL:mi};function gi(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function _i(e,t,n){let r=null,i,a=Cr(e);function o(){var e;clearTimeout(i),(e=r)==null||e.disconnect(),r=null}function s(n,c){n===void 0&&(n=!1),c===void 0&&(c=1),o();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(n||t(),!f||!p)return;let m=Bn(d),h=Bn(a.clientWidth-(u+f)),g=Bn(a.clientHeight-(d+p)),_=Bn(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:Rn(0,Ln(1,c))||1},y=!0;function b(t){let n=t[0].intersectionRatio;if(!gi(l,e.getBoundingClientRect()))return s();if(n!==c){if(!y)return s();n?s(!1,n):i=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{r=new IntersectionObserver(b,{...v,root:a.ownerDocument})}catch{r=new IntersectionObserver(b,v)}r.observe(e)}let c=Sr(e),l=()=>s(n);return c.addEventListener(`resize`,l),s(!0),()=>{c.removeEventListener(`resize`,l),o()}}function vi(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=Kr(e),u=i||a?[...l?Ur(l):[],...t?Ur(t):[]]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n),a&&e.addEventListener(`resize`,n)});let d=l&&s?_i(l,n,a):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&t&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),t&&p.observe(t));let m,h=c?Zr(e):null;c&&g();function g(){let t=Zr(e);h&&!gi(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}const yi=_r,bi=vr,xi=mr,Si=yr,Ci=pr,wi=(e,t,n)=>{let r=/* @__PURE__ */ new Map,i=n??{},a={...hi,...i.platform,_c:r};return fr(e,t,{...i,platform:a})};function Ti(e){return Di(e)}function Ei(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Di(e){for(let t=e;t;t=Ei(t))if(t instanceof Element&&getComputedStyle(t).display===`none`)return null;for(let t=Ei(e);t;t=Ei(t)){if(!(t instanceof Element))continue;let e=getComputedStyle(t);if(e.display!==`contents`&&(e.position!==`static`||Fr(e)||t.tagName===`BODY`))return t}return null}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Oi(e){return typeof e==`object`&&!!e&&`getBoundingClientRect`in e&&(`contextElement`in e?e instanceof Element:!0)}var ki=!!globalThis?.HTMLElement?.prototype.hasOwnProperty(`popover`),P=class extends _t{constructor(){super(...arguments),this.localize=new zt(this),this.SUPPORTS_POPOVER=!1,this.active=!1,this.placement=`top`,this.boundary=`viewport`,this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement=`anchor`,this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements=``,this.flipFallbackStrategy=`best-fit`,this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl&&this.popup){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),n=this.placement.includes(`top`)||this.placement.includes(`bottom`),r=0,i=0,a=0,o=0,s=0,c=0,l=0,u=0;n?e.top<t.top?(r=e.left,i=e.bottom,a=e.right,o=e.bottom,s=t.left,c=t.top,l=t.right,u=t.top):(r=t.left,i=t.bottom,a=t.right,o=t.bottom,s=e.left,c=e.top,l=e.right,u=e.top):e.left<t.left?(r=e.right,i=e.top,a=t.left,o=t.top,s=e.right,c=e.bottom,l=t.left,u=t.bottom):(r=t.right,i=t.top,a=e.left,o=e.top,s=t.right,c=t.bottom,l=e.left,u=e.bottom),this.style.setProperty(`--hover-bridge-top-left-x`,`${r}px`),this.style.setProperty(`--hover-bridge-top-left-y`,`${i}px`),this.style.setProperty(`--hover-bridge-top-right-x`,`${a}px`),this.style.setProperty(`--hover-bridge-top-right-y`,`${o}px`),this.style.setProperty(`--hover-bridge-bottom-left-x`,`${s}px`),this.style.setProperty(`--hover-bridge-bottom-left-y`,`${c}px`),this.style.setProperty(`--hover-bridge-bottom-right-x`,`${l}px`),this.style.setProperty(`--hover-bridge-bottom-right-y`,`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.SUPPORTS_POPOVER=ki,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has(`active`)&&(this.active?this.start():this.stop()),e.has(`anchor`)&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor==`string`){let e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchorEl=this.anchor instanceof Element||Oi(this.anchor)?this.anchor:this.querySelector(`[slot="anchor"]`);this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&this.active&&this.isConnected&&(this.popup?.showPopover?.(),this.cleanup=vi(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.popup?.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute(`data-current-placement`),this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl||!this.popup)return;let e=[yi({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Si({apply:({rects:e})=>{let t=this.sync===`width`||this.sync===`both`,n=this.sync===`height`||this.sync===`both`;this.popup.style.width=t?`${e.reference.width}px`:``,this.popup.style.height=n?`${e.reference.height}px`:``}})):(this.popup.style.width=``,this.popup.style.height=``);let t;this.SUPPORTS_POPOVER&&!Oi(this.anchor)&&this.boundary===`scroll`&&(t=Ur(this.anchorEl).filter(e=>e instanceof Element)),this.flip&&e.push(xi({boundary:this.flipBoundary||t,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy===`best-fit`?`bestFit`:`initialPlacement`,padding:this.flipPadding})),this.shift&&e.push(bi({boundary:this.shiftBoundary||t,padding:this.shiftPadding})),this.autoSize?e.push(Si({boundary:this.autoSizeBoundary||t,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{this.autoSize===`vertical`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-height`,`${t}px`):this.style.removeProperty(`--auto-size-available-height`),this.autoSize===`horizontal`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-width`,`${e}px`):this.style.removeProperty(`--auto-size-available-width`)}})):(this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`)),this.arrow&&e.push(Ci({element:this.arrowEl,padding:this.arrowPadding}));let n=this.SUPPORTS_POPOVER?e=>hi.getOffsetParent(e,Ti):hi.getOffsetParent;wi(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.SUPPORTS_POPOVER?`absolute`:`fixed`,platform:{...hi,getOffsetParent:n}}).then(({x:e,y:t,middlewareData:n,placement:r})=>{let i=this.localize.dir()===`rtl`,a={top:`bottom`,right:`left`,bottom:`top`,left:`right`}[r.split(`-`)[0]];if(this.setAttribute(`data-current-placement`,r),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=n.arrow.x,t=n.arrow.y,r=``,o=``,s=``,c=``;if(this.arrowPlacement===`start`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;r=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``,o=i?n:``,c=i?``:n}else if(this.arrowPlacement===`end`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;o=i?``:n,c=i?n:``,s=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``}else this.arrowPlacement===`center`?(c=typeof e==`number`?`calc(50% - var(--arrow-size-diagonal))`:``,r=typeof t==`number`?`calc(50% - var(--arrow-size-diagonal))`:``):(c=typeof e==`number`?`${e}px`:``,r=typeof t==`number`?`${t}px`:``);Object.assign(this.arrowEl.style,{top:r,right:o,bottom:s,left:c,[a]:`calc(var(--arrow-base-offset) - var(--arrow-size-diagonal))`})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new Fn)}render(){return T`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${yn({"popup-hover-bridge":!0,"popup-hover-bridge-visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${yn({popup:!0,"popup-active":this.active,"popup-fixed":!this.SUPPORTS_POPOVER,"popup-has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?T`<div part="arrow" class="arrow" role="presentation"></div>`:``}
      </div>
    `}};P.css=In,D([dt(`.popup`)],P.prototype,`popup`,2),D([dt(`.arrow`)],P.prototype,`arrowEl`,2),D([O({attribute:!1,type:Boolean})],P.prototype,`SUPPORTS_POPOVER`,2),D([O()],P.prototype,`anchor`,2),D([O({type:Boolean,reflect:!0})],P.prototype,`active`,2),D([O({reflect:!0})],P.prototype,`placement`,2),D([O()],P.prototype,`boundary`,2),D([O({type:Number})],P.prototype,`distance`,2),D([O({type:Number})],P.prototype,`skidding`,2),D([O({type:Boolean})],P.prototype,`arrow`,2),D([O({attribute:`arrow-placement`})],P.prototype,`arrowPlacement`,2),D([O({attribute:`arrow-padding`,type:Number})],P.prototype,`arrowPadding`,2),D([O({type:Boolean})],P.prototype,`flip`,2),D([O({attribute:`flip-fallback-placements`,converter:{fromAttribute:e=>e.split(` `).map(e=>e.trim()).filter(e=>e!==``),toAttribute:e=>e.join(` `)}})],P.prototype,`flipFallbackPlacements`,2),D([O({attribute:`flip-fallback-strategy`})],P.prototype,`flipFallbackStrategy`,2),D([O({type:Object})],P.prototype,`flipBoundary`,2),D([O({attribute:`flip-padding`,type:Number})],P.prototype,`flipPadding`,2),D([O({type:Boolean})],P.prototype,`shift`,2),D([O({type:Object})],P.prototype,`shiftBoundary`,2),D([O({attribute:`shift-padding`,type:Number})],P.prototype,`shiftPadding`,2),D([O({attribute:`auto-size`})],P.prototype,`autoSize`,2),D([O()],P.prototype,`sync`,2),D([O({type:Object})],P.prototype,`autoSizeBoundary`,2),D([O({attribute:`auto-size-padding`,type:Number})],P.prototype,`autoSizePadding`,2),D([O({attribute:`hover-bridge`,type:Boolean})],P.prototype,`hoverBridge`,2),P=D([ot(`wa-popup`)],P);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ai=l`
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
`,ji=l`
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
;
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const Mi=Symbol.for(``),Ni=e=>{if(e?.r===Mi)return e?._$litStatic$},Pi=(e,...t)=>({_$litStatic$:t.reduce((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1],e[0]),r:Mi}),Fi=/* @__PURE__ */ new Map,Ii=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],(i=Ni(a))!==void 0);)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=Fi.get(e))===void 0&&(o.raw=o,Fi.set(e,t=o)),n=s}return e(t,...n)})(T);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var F=class extends yt{constructor(){super(...arguments),this.assumeInteractionOn=[`click`],this.hasSlotController=new Ct(this,`[default]`,`start`,`end`),this.localize=new zt(this),this.invalid=!1,this.isIconButton=!1,this.title=``,this.variant=`neutral`,this.appearance=`accent`,this.size=`m`,this.withCaret=!1,this.withStart=!1,this.withEnd=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type=`button`}static get validators(){return[...super.validators,On()]}handleSizeChange(){St(this.localName,this.size)}constructLightDOMButton(){let e=document.createElement(`button`);for(let t of this.attributes)t.name!==`style`&&e.setAttribute(t.name,t.value);return e.type=this.type,e.style.position=`absolute !important`,e.style.width=`0 !important`,e.style.height=`0 !important`,e.style.clipPath=`inset(50%) !important`,e.style.overflow=`hidden !important`,e.style.whiteSpace=`nowrap !important`,this.name&&(e.name=this.name),e.value=this.value||``,e}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopImmediatePropagation();return}if(this.type!==`submit`&&this.type!==`reset`||!this.getForm())return;let t=this.constructLightDOMButton();this.parentElement?.append(t),t.click(),t.remove()}handleInvalid(){this.dispatchEvent(new Qe)}handleLabelSlotChange(){let e=this.labelSlot.assignedNodes({flatten:!0}),t=!1,n=!1,r=!1,i=!1;[...e].forEach(e=>{if(e.nodeType===Node.ELEMENT_NODE){let r=e;r.localName===`wa-icon`?(n=!0,t||=r.label!==void 0):i=!0}else e.nodeType===Node.TEXT_NODE&&(e.textContent?.trim()||``).length>0&&(r=!0)}),this.isIconButton=n&&!r&&!i,this.customStates.set(`icon-button`,this.isIconButton),this.isIconButton&&!t&&console.warn(`Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.`,this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.customStates.set(`disabled`,this.disabled),this.updateValidity()}handleHrefChange(){this.customStates.set(`link`,this.isLink())}handleLoadingChange(){this.customStates.set(`loading`,this.loading)}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=this.isLink(),t=e?Pi`a`:Pi`button`;return Ii`
      <${t}
        part="base button"
        class=${yn({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()===`rtl`,"has-label":this.hasSlotController.test(`[default]`),"has-start":this.hasSlotController.test(`start`,`withStart`),"has-end":this.hasSlotController.test(`end`,`withEnd`),"is-icon-button":this.isIconButton})}
        ?disabled=${j(e?void 0:this.disabled)}
        type=${j(e?void 0:this.type)}
        title=${this.title}
        name=${j(e?void 0:this.name)}
        value=${j(e?void 0:this.value)}
        href=${j(e?this.href:void 0)}
        target=${j(e?this.target:void 0)}
        download=${j(e?this.download:void 0)}
        rel=${j(e&&this.rel?this.rel:void 0)}
        role=${j(e?void 0:`button`)}
        aria-disabled=${j(e&&this.disabled?`true`:void 0)}
        aria-busy=${this.loading?`true`:`false`}
        tabindex=${this.disabled?`-1`:`0`}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?Ii`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:``}
        ${this.loading?Ii`<wa-spinner part="spinner"></wa-spinner>`:``}
      </${t}>
    `}};F.shadowRootOptions={...yt.shadowRootOptions,delegatesFocus:!0},F.css=[Ai,ji,wt],D([dt(`.button`)],F.prototype,`button`,2),D([dt(`slot:not([name])`)],F.prototype,`labelSlot`,2),D([k()],F.prototype,`invalid`,2),D([k()],F.prototype,`isIconButton`,2),D([O()],F.prototype,`title`,2),D([O({reflect:!0})],F.prototype,`variant`,2),D([O({reflect:!0})],F.prototype,`appearance`,2),D([O({reflect:!0})],F.prototype,`size`,2),D([Dt(`size`)],F.prototype,`handleSizeChange`,1),D([O({attribute:`with-caret`,type:Boolean,reflect:!0})],F.prototype,`withCaret`,2),D([O({attribute:`with-start`,type:Boolean})],F.prototype,`withStart`,2),D([O({attribute:`with-end`,type:Boolean})],F.prototype,`withEnd`,2),D([O({type:Boolean})],F.prototype,`disabled`,2),D([O({type:Boolean,reflect:!0})],F.prototype,`loading`,2),D([O({type:Boolean,reflect:!0})],F.prototype,`pill`,2),D([O()],F.prototype,`type`,2),D([O({reflect:!0})],F.prototype,`name`,2),D([O({reflect:!0})],F.prototype,`value`,2),D([O({reflect:!0})],F.prototype,`href`,2),D([O()],F.prototype,`target`,2),D([O()],F.prototype,`rel`,2),D([O()],F.prototype,`download`,2),D([O({attribute:`formaction`})],F.prototype,`formAction`,2),D([O({attribute:`formenctype`})],F.prototype,`formEnctype`,2),D([O({attribute:`formmethod`})],F.prototype,`formMethod`,2),D([O({attribute:`formnovalidate`,type:Boolean})],F.prototype,`formNoValidate`,2),D([O({attribute:`formtarget`})],F.prototype,`formTarget`,2),D([Dt(`disabled`,{waitUntilFirstUpdate:!0})],F.prototype,`handleDisabledChange`,1),D([Dt(`href`)],F.prototype,`handleHrefChange`,1),D([Dt(`loading`,{waitUntilFirstUpdate:!0})],F.prototype,`handleLoadingChange`,1),F=D([ot(`wa-button`)],F),F.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Li=l`
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
`,Ri=class extends _t{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(...arguments),this.localize=new zt(this)}render(){return T`
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
    `}};Ri.css=Li,Ri=D([ot(`wa-spinner`)],Ri);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var zi=l`
  :host {
    display: inline-flex;
  }

  .button-group {
    display: flex;
    position: relative;
    isolation: isolate;
    flex-wrap: wrap;

    @media (hover: hover) {
      > :hover,
      &::slotted(:hover) {
        z-index: 1;
      }
    }

    /* Focus and checked are always on top */
    > :focus,
    &::slotted(:focus),
    > [aria-checked='true'],
    &::slotted([aria-checked='true']),
    > [checked],
    &::slotted([checked]) {
      z-index: 2 !important;
    }

    :host([orientation='horizontal']) & {
      flex-direction: row;
    }

    :host([orientation='vertical']) & {
      flex-direction: column;
    }
  }

  /* Set custom properties to be inherited by slotted buttons */
  :host([orientation='horizontal']) {
    --_button-horizontal-indent: var(--wa-form-control-border-width);
    --_button-horizontal-indent-outlined: calc(var(--wa-form-control-border-width) * -1);

    ::slotted(:first-child) {
      --_button-horizontal-indent: 0;
      --_button-horizontal-indent-outlined: 0;
    }
  }

  :host([orientation='vertical']) {
    --_button-vertical-indent: var(--wa-form-control-border-width);
    --_button-vertical-indent-outlined: calc(var(--wa-form-control-border-width) * -1);

    ::slotted(:first-child) {
      --_button-vertical-indent: 0;
      --_button-vertical-indent-outlined: 0;
    }
  }

  /* All buttons that are not in front or at the end get their border radius removed */
  ::slotted(:not(:first-child):not(:last-child)) {
    --_button-start-start-radius: 0;
    --_button-start-end-radius: 0;
    --_button-end-start-radius: 0;
    --_button-end-end-radius: 0;
  }

  /* Remove leading and trailing buttons border radius individually */
  :host([orientation='horizontal']) {
    ::slotted(:first-child:not(:last-child)) {
      --_button-start-end-radius: 0;
      --_button-end-end-radius: 0;
    }

    ::slotted(:last-child:not(:first-child)) {
      --_button-start-start-radius: 0;
      --_button-end-start-radius: 0;
    }
  }

  :host([orientation='vertical']) {
    ::slotted(:first-child:not(:last-child)) {
      --_button-end-start-radius: 0;
      --_button-end-end-radius: 0;
    }

    ::slotted(:last-child:not(:first-child)) {
      --_button-start-start-radius: 0;
      --_button-start-end-radius: 0;
    }
  }
`,Bi=class extends _t{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(...arguments),this.disableRole=!1,this.hasOutlined=!1,this.label=``,this.orientation=`horizontal`}updated(e){super.updated(e),e.has(`orientation`)&&this.setAttribute(`aria-orientation`,this.orientation)}handleFocus(e){Vi(e.target)?.classList.add(`button-focus`)}handleBlur(e){Vi(e.target)?.classList.remove(`button-focus`)}handleMouseOver(e){Vi(e.target)?.classList.add(`button-hover`)}handleMouseOut(e){Vi(e.target)?.classList.remove(`button-hover`)}render(){return T`
      <slot
        part="base"
        class="button-group"
        role="${this.disableRole?`presentation`:`group`}"
        aria-label=${this.label}
        aria-orientation=${this.orientation}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      ></slot>
    `}};Bi.css=[zi],D([dt(`slot`)],Bi.prototype,`defaultSlot`,2),D([k()],Bi.prototype,`disableRole`,2),D([k()],Bi.prototype,`hasOutlined`,2),D([O()],Bi.prototype,`label`,2),D([O({reflect:!0})],Bi.prototype,`orientation`,2),Bi=D([ot(`wa-button-group`)],Bi);function Vi(e){let t=`wa-button, wa-radio-button`;return e.closest(t)??e.querySelector(t)}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Hi=class extends Event{constructor(){super(`wa-error`,{bubbles:!0,cancelable:!1,composed:!0})}},Ui=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-load`,{bubbles:!0,cancelable:!1,composed:!0})}},Wi=l`
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
`,Gi=``,Ki=``
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;function qi(){return Gi.replace(/\/$/,``)}function Ji(e){Ki=e}function Yi(){if(!Ki){let e=document.querySelector(`[data-fa-kit-code]`);e&&Ji(e.getAttribute(`data-fa-kit-code`)||``)}return Ki}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Xi=`7.3.0`;function Zi(e,t,n){let r=`solid`;return t===`chisel`&&(r=`chisel-regular`),t===`etch`&&(r=`etch-solid`),t===`graphite`&&(r=`graphite-thin`),t===`jelly`&&(r=`jelly-regular`,n===`duo-regular`&&(r=`jelly-duo-regular`),n===`fill-regular`&&(r=`jelly-fill-regular`)),t===`jelly-duo`&&(r=`jelly-duo-regular`),t===`jelly-fill`&&(r=`jelly-fill-regular`),t===`notdog`&&(n===`solid`&&(r=`notdog-solid`),n===`duo-solid`&&(r=`notdog-duo-solid`)),t===`notdog-duo`&&(r=`notdog-duo-solid`),t===`slab`&&((n===`solid`||n===`regular`)&&(r=`slab-regular`),n===`press-regular`&&(r=`slab-press-regular`)),t===`slab-press`&&(r=`slab-press-regular`),t===`slab-duo`&&(r=`slab-duo-regular`),t===`slab-press-duo`&&(r=`slab-press-duo-regular`),t===`thumbprint`&&(r=`thumbprint-light`),t===`utility`&&(r=`utility-semibold`),t===`utility-duo`&&(r=`utility-duo-semibold`),t===`utility-fill`&&(r=`utility-fill-semibold`),t===`whiteboard`&&(r=`whiteboard-semibold`),t===`mosaic`&&(r=`mosaic-solid`),t===`pixel`&&(r=`pixel-regular`),t===`vellum`&&(r=`vellum-solid`),t===`classic`&&(n===`thin`&&(r=`thin`),n===`light`&&(r=`light`),n===`regular`&&(r=`regular`),n===`solid`&&(r=`solid`)),t===`duotone`&&(n===`thin`&&(r=`duotone-thin`),n===`light`&&(r=`duotone-light`),n===`regular`&&(r=`duotone-regular`),n===`solid`&&(r=`duotone`)),t===`sharp`&&(n===`thin`&&(r=`sharp-thin`),n===`light`&&(r=`sharp-light`),n===`regular`&&(r=`sharp-regular`),n===`solid`&&(r=`sharp-solid`)),t===`sharp-duotone`&&(n===`thin`&&(r=`sharp-duotone-thin`),n===`light`&&(r=`sharp-duotone-light`),n===`regular`&&(r=`sharp-duotone-regular`),n===`solid`&&(r=`sharp-duotone-solid`)),t===`brands`&&(r=`brands`),r}function Qi(e,t,n){let r=Zi(e,t,n),i=qi();if(i)return`${i}/${r}/${e}.svg`;let a=Yi();return a.length>0?`https://ka-p.fontawesome.com/releases/v${Xi}/svgs/${r}/${e}.svg?token=${encodeURIComponent(a)}`:`https://ka-f.fontawesome.com/releases/v${Xi}/svgs/${r}/${e}.svg`}var $i={name:`default`,resolver:(e,t=`classic`,n=`solid`)=>Qi(e,t,n),mutator:(e,t)=>{if(e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`),t?.family&&!e.hasAttribute(`data-duotone-initialized`)){let{family:n,variant:r}=t;if(n===`duotone`||n===`sharp-duotone`||n===`notdog-duo`||n===`notdog`&&r===`duo-solid`||n===`jelly-duo`||n===`jelly`&&r===`duo-regular`||n===`utility-duo`||n===`slab-duo`||n===`slab-press-duo`||n===`thumbprint`){let n=[...e.querySelectorAll(`path`)],r=n.find(e=>!e.hasAttribute(`opacity`)),i=n.find(e=>e.hasAttribute(`opacity`));if(!r||!i)return;if(r.setAttribute(`data-duotone-primary`,``),i.setAttribute(`data-duotone-secondary`,``),t.swapOpacity&&r&&i){let e=i.getAttribute(`opacity`)||`0.4`;r.style.setProperty(`--path-opacity`,e),i.style.setProperty(`--path-opacity`,`1`)}e.setAttribute(`data-duotone-initialized`,``)}}}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function ea(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var ta={solid:{"arrow-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`,"arrow-up":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>`,backward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M236.3 107.1C247.9 96 265 92.9 279.7 99.2C294.4 105.5 304 120 304 136L304 272.3L476.3 107.2C487.9 96 505 92.9 519.7 99.2C534.4 105.5 544 120 544 136L544 504C544 520 534.4 534.5 519.7 540.8C505 547.1 487.9 544 476.3 532.9L304 367.7L304 504C304 520 294.4 534.5 279.7 540.8C265 547.1 247.9 544 236.3 532.9L44.3 348.9C36.5 341.3 32 330.9 32 320C32 309.1 36.5 298.7 44.3 291.1L236.3 107.1z"/></svg>`,"backward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M491 100.8C478.1 93.8 462.3 94.5 450 102.6L192 272.1L192 128C192 110.3 177.7 96 160 96C142.3 96 128 110.3 128 128L128 512C128 529.7 142.3 544 160 544C177.7 544 192 529.7 192 512L192 367.9L450 537.5C462.3 545.6 478 546.3 491 539.3C504 532.3 512 518.8 512 504.1L512 136.1C512 121.4 503.9 107.9 491 100.9z"/></svg>`,bars:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>`,"angles-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M77.3 256 214.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256zm192 0L406.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L269.3 256z"/></svg>`,"angles-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.7 256 297.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 256zm-192 0L105.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256z"/></svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>`,"chevron-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`,"chevron-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>`,"chevron-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>`,circle:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>`,"closed-captioning":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M64 192C64 156.7 92.7 128 128 128L512 128C547.3 128 576 156.7 576 192L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 192zM216 272L248 272C252.4 272 256 275.6 256 280C256 293.3 266.7 304 280 304C293.3 304 304 293.3 304 280C304 249.1 278.9 224 248 224L216 224C185.1 224 160 249.1 160 280L160 360C160 390.9 185.1 416 216 416L248 416C278.9 416 304 390.9 304 360C304 346.7 293.3 336 280 336C266.7 336 256 346.7 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 280C208 275.6 211.6 272 216 272zM384 280C384 275.6 387.6 272 392 272L424 272C428.4 272 432 275.6 432 280C432 293.3 442.7 304 456 304C469.3 304 480 293.3 480 280C480 249.1 454.9 224 424 224L392 224C361.1 224 336 249.1 336 280L336 360C336 390.9 361.1 416 392 416L424 416C454.9 416 480 390.9 480 360C480 346.7 469.3 336 456 336C442.7 336 432 346.7 432 360C432 364.4 428.4 368 424 368L392 368C387.6 368 384 364.4 384 360L384 280z"/></svg>`,"closed-captioning-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M39 39.1C48.4 29.7 63.6 29.7 72.9 39.1L161.8 128L512 128C547.3 128 576 156.7 576 192L576 448C576 473.5 561.1 495.4 539.6 505.8L601 567.1C610.4 576.5 610.4 591.7 601 601C591.6 610.3 576.4 610.4 567.1 601L39 73.1C29.7 63.7 29.7 48.5 39 39.1zM384 350.1L384 279.9C384 275.5 387.6 271.9 392 271.9L424 271.9C428.4 271.9 432 275.5 432 279.9C432 293.2 442.7 303.9 456 303.9C469.3 303.9 480 293.2 480 279.9C480 249 454.9 223.9 424 223.9L392 223.9C361.1 223.9 336 249 336 279.9L336 302.1L384 350.1zM445.5 411.6C465.7 403.2 480 383.2 480 359.9C480 346.6 469.3 335.9 456 335.9C442.7 335.9 432 346.6 432 359.9C432 364.3 428.4 367.9 424 367.9L401.8 367.9L445.5 411.6zM162.3 264.1C160.8 269.1 160 274.5 160 280L160 360C160 390.9 185.1 416 216 416L248 416C266.1 416 282.1 407.5 292.4 394.2L410.2 512L128 512C92.7 512 64 483.3 64 448L64 192C64 184.2 65.4 176.7 68 169.8L162.3 264.1zM256.1 357.9C256 358.6 256 359.3 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 309.8L256.1 357.9z"/></svg>`,compress:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>`,ellipsis:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M96 320C96 289.1 121.1 264 152 264C182.9 264 208 289.1 208 320C208 350.9 182.9 376 152 376C121.1 376 96 350.9 96 320zM264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320zM488 264C518.9 264 544 289.1 544 320C544 350.9 518.9 376 488 376C457.1 376 432 350.9 432 320C432 289.1 457.1 264 488 264z"/></svg>`,"ellipsis-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/></svg>`,expand:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 96C110.3 96 96 110.3 96 128L96 224C96 241.7 110.3 256 128 256C145.7 256 160 241.7 160 224L160 160L224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L128 96zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 512C96 529.7 110.3 544 128 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480L160 416zM416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160L480 224C480 241.7 494.3 256 512 256C529.7 256 544 241.7 544 224L544 128C544 110.3 529.7 96 512 96L416 96zM544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L512 544C529.7 544 544 529.7 544 512L544 416z"/></svg>`,eyedropper:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>`,filter:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 64C19.1 64 7.4 71.8 2.4 83.8S.2 109.5 9.4 118.6L192 301.3 192 416c0 8.5 3.4 16.6 9.4 22.6l64 64c9.2 9.2 22.9 11.9 34.9 6.9S320 492.9 320 480l0-178.7 182.6-182.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 64 480 64L32 64z"/></svg>`,forward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M403.7 107.1C392.1 96 375 92.9 360.3 99.2C345.6 105.5 336 120 336 136L336 272.3L163.7 107.2C152.1 96 135 92.9 120.3 99.2C105.6 105.5 96 120 96 136L96 504C96 520 105.6 534.5 120.3 540.8C135 547.1 152.1 544 163.7 532.9L336 367.7L336 504C336 520 345.6 534.5 360.3 540.8C375 547.1 392.1 544 403.7 532.9L595.7 348.9C603.6 341.4 608 330.9 608 320C608 309.1 603.5 298.7 595.7 291.1L403.7 107.1z"/></svg>`,file:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>`,"file-audio":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>`,"file-code":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>`,"file-excel":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>`,"file-image":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>`,"file-pdf":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>`,"file-powerpoint":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>`,"file-video":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>`,"file-word":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>`,"file-zipper":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>`,"forward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M21 36.8c12.9-7 28.7-6.3 41 1.8L320 208.1 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-144.1-258 169.6c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440L0 72C0 57.3 8.1 43.8 21 36.8z"/></svg>`,gauge:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,gear:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>`,"grip-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>`,indeterminate:`<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>`,"magnifying-glass":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>`,minus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>`,pause:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>`,"picture-in-picture":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M448 32c35.3 0 64 28.7 64 64l0 112-64 0 0-112-384 0 0 320 144 0 0 64-144 0-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416 0 96C0 62.9 25.2 35.6 57.5 32.3L64 32 448 32zm16 224c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48l160 0z"/></svg>`,play:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>`,"play-circle":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>`,plus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>`,"table-columns":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 64l0 256 128 0 0-256-128 0zm320 0l-128 0 0 256 128 0 0-256z"/></svg>`,thumbtack:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 10.3 134.1c37.1 21.2 65.8 56.4 78.2 99.7l3.8 13.4c2.8 9.7 .8 20-5.2 28.1S362 352 352 352L32 352c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1L5 297.8c12.4-43.3 41-78.5 78.2-99.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 400l64 0 0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-112z"/></svg>`,"up-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M406.6 502.6l96-96c9.2-9.2 11.9-22.9 6.9-34.9S492.9 352 480 352l-64 0 0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 320-64 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l96 96c12.5 12.5 32.8 12.5 45.3 0zM150.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-9.2 9.2-11.9 22.9-6.9 34.9S19.1 160 32 160l64 0 0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320 64 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-96-96z"/></svg>`,upload:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>`,user:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>`,volume:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM441.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C443.3 170.7 464 210.9 464 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-low":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,xmark:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>`},regular:{calendar:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z"/></svg>`,"circle-question":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`,"circle-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,clock:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>`,copy:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>`,eye:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>`,"eye-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>`}},na={name:`system`,resolver:(e,t=`classic`,n=`solid`)=>{let r=ta[n][e]??ta.regular[e]??ta.regular[`circle-question`];return r?ea(r):``},mutator:e=>{e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`)}},ra=`classic`,ia=[$i,na],aa=/* @__PURE__ */ new Set
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;function oa(e){aa.add(e)}function sa(e){aa.delete(e)}function ca(e){return ia.find(t=>t.name===e)}function la(){return ra}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var ua=Symbol(),da=Symbol(),fa,pa=/* @__PURE__ */ new Map,I=class extends _t{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label=``,this.library=`default`,this.rotate=0,this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=T`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let n=this.shadowRoot.querySelector(`[part='svg']`);return typeof t.mutator==`function`&&t.mutator(n,this),this.svg}try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?ua:da}catch{return da}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return ua;fa||=new DOMParser;let r=fa.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):ua}catch{return ua}}}connectedCallback(){super.connectedCallback(),oa(this)}firstUpdated(e){super.firstUpdated(e),this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),sa(this)}async getIconSource(){let e=ca(this.library),t=this.family||la();if(this.name&&e){let n=this.canvas===`auto`||this.autoWidth,r;try{r=await e.resolver(this.name,t,this.variant,n)}catch{r=void 0}return{url:r,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=await this.getIconSource(),n=t?ca(this.library):void 0;if(!e){this.svg=null;return}let r=pa.get(e);r||(r=this.resolveIcon(e,n),pa.set(e,r));let i=await r;if(i===da&&pa.delete(e),e===(await this.getIconSource()).url){if(An(i))this.svg=i;else switch(i){case da:case ua:this.svg=null,this.dispatchEvent(new Hi);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new Ui)}}}willUpdate(e){return this.style||this.setStyleProperty(`--rotate-angle`,`${this.rotate}deg`),super.willUpdate(e)}updated(e){super.updated(e);let t=ca(this.library);this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`);let n=this.shadowRoot?.querySelector(`svg`);n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:T`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};I.css=Wi,D([k()],I.prototype,`svg`,2),D([O({reflect:!0})],I.prototype,`name`,2),D([O({reflect:!0})],I.prototype,`family`,2),D([O({reflect:!0})],I.prototype,`variant`,2),D([O({reflect:!0})],I.prototype,`canvas`,2),D([O({attribute:`auto-width`,type:Boolean,reflect:!0})],I.prototype,`autoWidth`,2),D([O({attribute:`swap-opacity`,type:Boolean,reflect:!0})],I.prototype,`swapOpacity`,2),D([O()],I.prototype,`src`,2),D([O()],I.prototype,`label`,2),D([O({reflect:!0})],I.prototype,`library`,2),D([O({type:Number,reflect:!0})],I.prototype,`rotate`,2),D([O({type:String,reflect:!0})],I.prototype,`flip`,2),D([O({type:String,reflect:!0})],I.prototype,`animation`,2),D([Dt(`label`)],I.prototype,`handleLabelChange`,1),D([Dt([`family`,`name`,`library`,`variant`,`src`,`autoWidth`,`canvas`,`swapOpacity`],{waitUntilFirstUpdate:!0})],I.prototype,`setIcon`,1),I=D([ot(`wa-icon`)],I);var ma=/* @__PURE__ */ t({default:()=>M}),L
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;Object.getOwnPropertyDescriptors||(()=>{var e;if(typeof Reflect<`u`&&Reflect.ownKeys)e=Reflect.ownKeys;else{var t=Object.getOwnPropertySymbols||(e=>[]);e=(e=>Object.getOwnPropertyNames(e).concat(t(e)))}return(t=>{for(var n=e(t),r={},i=n.length|0,a=0;a!==i;){var o=n[a];Object.defineProperty(r,o,{configurable:!0,enumerable:!0,writable:!0,value:Object.getOwnPropertyDescriptor(t,o)}),a=a+1|0}return r})})();function ha(e){this.c=e}L=ha.prototype,L.toString=(function(){return String.fromCharCode(this.c)});function R(e,t){this.l=e,this.h=t}L=R.prototype,L.toString=(function(){return Pc(this.l,this.h)});function ga(e){switch(typeof e){case`string`:return Cp.l();case`number`:return ja(e)?e<<24>>24===e?yf.l():e<<16>>16===e?Af.l():gp.l():Ma(e)?hp.l():mp.l();case`boolean`:return Kd.l();case`undefined`:return Ec.l();default:return e instanceof R?yp.l():e instanceof ha?Yd.l():e&&e.$classData?e.$classData.l():null}}function _a(e){switch(typeof e){case`string`:return`java.lang.String`;case`number`:return ja(e)?e<<24>>24===e?`java.lang.Byte`:e<<16>>16===e?`java.lang.Short`:`java.lang.Integer`:Ma(e)?`java.lang.Float`:`java.lang.Double`;case`boolean`:return`java.lang.Boolean`;case`undefined`:return`java.lang.Void`;default:return e instanceof R?`java.lang.Long`:e instanceof ha?`java.lang.Character`:e&&e.$classData?e.$classData.N:null.hh()}}function va(e,t){switch(typeof e){case`string`:return Sp(e,t);case`number`:return fp(e,t);case`boolean`:return Wd(e,t);case`undefined`:return Cc(e,t);default:return e&&e.$classData||e===null?e.d(t):e instanceof R?_p(e.l,e.h,t):e instanceof ha?Jd(e.c,t):La.prototype.d.call(e,t)}}function ya(e){switch(typeof e){case`string`:return xp(e);case`number`:return pp(e);case`boolean`:return Gd(e);case`undefined`:return wc(e);default:return e&&e.$classData||e===null?e.j():e instanceof R?vp(e.l,e.h):e instanceof ha?qd(e.c):La.prototype.j.call(e)}}function ba(e){return e===void 0?`undefined`:e.toString()}function xa(e){if(e===0)throw new vf(`/ by zero`);return e}function Sa(e){return e>2147483647?2147483647:e<-2147483648?-2147483648:e|0}function Ca(e){return String.fromCharCode(e)}var wa=/* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(8));function Ta(e,t,n,r,i){if(e!==n||r-t>>>0>i>>>0)for(var a=0;a<i;a=a+1|0)n[r+a|0]=e[t+a|0];else for(var a=i-1|0;a>=0;a=a-1|0)n[r+a|0]=e[t+a|0]}var Ea=0,Da=/* @__PURE__ */ new WeakMap;function Oa(e){switch(typeof e){case`string`:return xp(e);case`number`:return pp(e);case`bigint`:var t=0;for(e<BigInt(0)&&(e=~e);e!==BigInt(0);)t^=Number(BigInt.asIntN(32,e)),e>>=BigInt(32);return t;case`boolean`:return e?1231:1237;case`undefined`:return 0;case`symbol`:var n=e.description;return n===void 0?0:xp(n);default:if(e===null)return 0;var r=Da.get(e);return r===void 0&&(r=Ea+1|0,Ea=r,Da.set(e,r)),r}}function ka(e){return typeof e==`number`&&e<<24>>24===e&&1/e!=-1/0}function Aa(e){return typeof e==`number`&&e<<16>>16===e&&1/e!=-1/0}function ja(e){return typeof e==`number`&&(e|0)===e&&1/e!=-1/0}function Ma(e){return typeof e==`number`&&(e!==e||Math.fround(e)===e)}function Na(e){return new ha(e)}Na(0);function z(e,t){return new R(e,t)}var Pa=z(0,0);function Fa(e){return e===null?0:e.c}function Ia(e){return e===null?Pa:e}function La(){}L=La.prototype,L.constructor=La;function B(){}B.prototype=L,L.j=(function(){return Oa(this)}),L.d=(function(e){return this===e}),L.o=(function(){var e=this.j();return _a(this)+`@`+(e>>>0).toString(16)}),L.toString=(function(){return this.o()});function Ra(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}L=Ra.prototype=new B,L.constructor=Ra,L.X=(function(e,t,n,r){Ta(this.a,e,t.a,n,r)}),L.U=(function(){return new Ra(this.a.slice())});function za(){}za.prototype=L;function Ba(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=!1}else this.a=e}L=Ba.prototype=new B,L.constructor=Ba,L.X=(function(e,t,n,r){Ta(this.a,e,t.a,n,r)}),L.U=(function(){return new Ba(this.a.slice())});function Va(e){this.a=typeof e==`number`?new Uint16Array(e):e}L=Va.prototype=new B,L.constructor=Va,L.X=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),L.U=(function(){return new Va(this.a.slice())});function Ha(e){this.a=typeof e==`number`?new Int8Array(e):e}L=Ha.prototype=new B,L.constructor=Ha,L.X=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),L.U=(function(){return new Ha(this.a.slice())});function Ua(e){this.a=typeof e==`number`?new Int16Array(e):e}L=Ua.prototype=new B,L.constructor=Ua,L.X=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),L.U=(function(){return new Ua(this.a.slice())});function Wa(e){this.a=typeof e==`number`?new Int32Array(e):e}L=Wa.prototype=new B,L.constructor=Wa,L.X=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),L.U=(function(){return new Wa(this.a.slice())});function Ga(e){typeof e==`number`?(e<<=1,this.a=new Int32Array(e)):this.a=e}L=Ga.prototype=new B,L.constructor=Ga,L.X=(function(e,t,n,r){t.a.set(this.a.subarray(e<<1,(e+r|0)<<1),n<<1)}),L.U=(function(){return new Ga(this.a.slice())});function Ka(e){this.a=typeof e==`number`?new Float32Array(e):e}L=Ka.prototype=new B,L.constructor=Ka,L.X=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),L.U=(function(){return new Ka(this.a.slice())});function qa(e){this.a=typeof e==`number`?new Float64Array(e):e}L=qa.prototype=new B,L.constructor=qa,L.X=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),L.U=(function(){return new qa(this.a.slice())});function V(){this.C=void 0,this.n=null,this.O=null,this.B=null,this.D=0,this.z=null,this.E=``,this.L=void 0,this.A=void 0,this.F=void 0,this.w=void 0,this.J=!1,this.N=``,this.X=!1,this.Y=!1,this.Z=!1,this.I=void 0}L=V.prototype,L.p=(function(e,t,n,r,i){this.n={},this.z=e,this.E=t;var a=this;return this.F=(e=>e===a),this.N=n,this.X=!0,this.I=(e=>!1),r!==void 0&&(this.A=new V().y(this,r,i,t===`J`)),this}),L.i=(function(e,t,n,r){var i=Object.getOwnPropertyNames(n)[0];return this.n=n,this.E=`L`+t+`;`,this.F=(e=>!!e.n[i]),this.J=e===2,this.N=t,this.Y=e===1,this.I=r||(e=>!!(e&&e.$classData&&e.$classData.n[i])),typeof e!=`number`&&(e.prototype.$classData=this),this}),L.y=(function(e,t,n,r,i){t.prototype.$classData=this;var a=`[`+e.E;this.C=t,this.n={r:1,a:1},this.O=e,this.B=e,this.D=1,this.E=a,this.N=a,this.Z=!0;var o=this;return this.F=i||(e=>o===e),this.w=r?(e=>{for(var n=e.length|0,r=new t(n),i=r.a,a=0;a<n;a=a+1|0){var o=e[a];i[a<<1]=o.l,i[(a<<1)+1|0]=o.h}return r}):n?(e=>new t(new n(e))):(e=>new t(e)),this.I=(e=>e instanceof t),this}),L.a=(function(e){function t(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}var n=t.prototype=new za;n.constructor=t,n.X=(function(e,t,n,r){Ta(this.a,e,t.a,n,r)}),n.U=(function(){return new t(this.a.slice())}),n.$classData=this;var r=e.B||e,i=e.D+1,a=`[`+e.E;this.C=t,this.n={r:1,a:1},this.O=e,this.B=r,this.D=i,this.E=a,this.N=a,this.Z=!0;var o=(e=>{var t=e.D;return t===i?r.F(e.B):t>i&&r===Ja});this.F=o,this.w=(e=>new t(e));var s=this;return this.I=(e=>{var t=e&&e.$classData;return!!t&&(t===s||o(t))}),this}),L.r=(function(){return this.A||=new V().a(this),this.A}),L.l=(function(){return this.L||=new ad(this),this.L}),L.R=(function(e){return this===e||this.F(e)}),L.S=(function(){return this.P?this.P.l():null}),L.Q=(function(){return this.O?this.O.l():null}),L.U=(function(e){if(this===Ya)throw xf(new Sf);return new(this.r()).C(e)});var Ja=new V;Ja.n={},Ja.E=`Ljava.lang.Object;`,Ja.F=(e=>!e.X),Ja.N=`java.lang.Object`,Ja.I=(e=>e!==null),Ja.A=new V().y(Ja,Ra,void 0,!1,(e=>{var t=e.D;return t===1?!e.B.X:t>1})),La.prototype.$classData=Ja;var Ya=new V().p(void 0,`V`,`void`,void 0,void 0),Xa=new V().p(!1,`Z`,`boolean`,Ba,void 0),Za=new V().p(0,`C`,`char`,Va,Uint16Array),Qa=new V().p(0,`B`,`byte`,Ha,Int8Array),$a=new V().p(0,`S`,`short`,Ua,Int16Array),eo=new V().p(0,`I`,`int`,Wa,Int32Array),to=new V().p(Pa,`J`,`long`,Ga,Int32Array),no=new V().p(0,`F`,`float`,Ka,Float32Array),ro=new V().p(0,`D`,`double`,qa,Float64Array);new Int8Array(new Int32Array([1]).buffer)[0];function io(e,t,n){for(var r=new Int32Array(e),i=t.length|0,a=0,o=0,s=0,c=0;o!==i;){var l=t.charCodeAt(o);l<80?c=(c|l-48)<<5:(c|=l-93,a=(a&n)+c|0,r[s]=a,s=s+1|0,c=0),o=o+1|0}return r}function ao(e,t){return new Wa(io(e,t,-1))}function oo(e){return ga(e).co()+`@`+Oa(e)}function so(e){var t=e.cx;return t===void 0?oo(e):t}function co(){lo=this,uo().he(new X((e=>void 0)),Yc().e7,!0)}L=co.prototype=new B,L.constructor=co,L.he=(function(e,t,n){return new Fd(e,n,t,this)}),new V().i(co,`com.raquo.airstream.core.Observer$`,{bd:1});var lo;function uo(){return lo||=new co,lo}function fo(e){this.bO=null,this.cy=null,this.bP=0,this.bO=e,this.cy=void 0;var t=Oo().bi();this.bP=t===void 0?1:1+t.bP|0,go().bm===-1||this.bP>go().bm?Vu().ct(new cp(this,go().bm)):bo().L?bo().ag.push(this)|0:Oo().ce(this)}L=fo.prototype=new B,L.constructor=fo;var po=new V().i(fo,`com.raquo.airstream.core.Transaction`,{bg:1});function mo(){this.bm=0,this.cz=null,ho=this,this.bm=1e3,this.cz=new X((e=>{throw od(new q,`Attempted to run Transaction `+e+` after it was already executed.`)}))}L=mo.prototype=new B,L.constructor=mo,L.ez=(function(e){try{e.bO.c(e);var t=e.cy;if(t!==void 0)for(;t.hj();)t.hg().hl(e)}catch(e){var n=e instanceof _u?e:new qp(e);Vu().ct(n)}}),new V().i(mo,`com.raquo.airstream.core.Transaction$`,{bh:1});var ho;function go(){return ho||=new mo,ho}function _o(e){e.bn.length|0?new fo(new X((t=>{for(;(e.bn.length|0)>0;){var n=e.bn.shift();try{n.c(t)}catch(e){var r=e instanceof _u?e:new qp(e);Vu().ct(r)}}for(;(e.ag.length|0)>0;){var i=e.ag.shift();Oo().ce(i)}}))):(e.ag.length|0)>0&&new fo(new X((t=>{for(;(e.ag.length|0)>0;)Oo().ce(e.ag.shift())})))}function vo(){this.L=!1,this.bn=null,this.ag=null,yo=this,this.L=!1,this.bn=qo().aw(U().ae(new(Vc.r()).C([]))),this.ag=qo().aw(U().ae(new(po.r()).C([])))}L=vo.prototype=new B,L.constructor=vo,new V().i(vo,`com.raquo.airstream.core.Transaction$onStart$`,{bi:1});var yo;function bo(){return yo||=new vo,yo}function xo(e,t){return e.ah.get(t)}function So(e,t){e.bo.unshift(t)}function Co(e){return e.bo.shift()}function wo(e,t,n){var r=xo(e,t),i=r===void 0,a=r===void 0?qo().aw(U().ae(new(po.r()).C([]))):r;a.push(n),i&&e.ah.set(t,a)}function To(e,t){var n=xo(e,t),r=n===void 0||(n.length|0)>0?n:void 0;if(r!==void 0){var i=r.shift();return r.length|0||e.ah.delete(t),i}}function Eo(){this.bo=null,this.ah=null,Do=this,this.bo=qo().aw(U().ae(new(po.r()).C([]))),this.ah=/* @__PURE__ */ new Map}L=Eo.prototype=new B,L.constructor=Eo,L.ce=(function(e){var t=this.bi();t===void 0?(So(this,e),go().ez(e),this.fM(e)):wo(this,t,e)}),L.fM=(function(e){for(var t=e;;){var n=this.bi(),r=t;if(!(n!==void 0&&ml().C(r,n)))throw od(new q,`Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.`);this.gJ(t),t.bO=go().cz;var i=this.bi();if(ml().C(i,void 0)){if((this.ah.size|0)>0){var a=new Fu(0);throw this.ah.forEach((e=>((t,n)=>{e.b4=e.b4+(t.length|0)|0}))(a)),od(new q,`Transaction queue error: Stack cleared, but a total of `+a.b4+` children for `+(this.ah.size|0)+` transactions remain. This is a bug in Airstream.`)}return}go().ez(i),t=i}}),L.gJ=(function(e){for(var t=e;;){var n=To(this,t);if(ml().C(n,void 0)){Co(this);var r=this.bi();if(!ml().C(r,void 0))t=r;else return}else{So(this,n);return}}}),L.bi=(function(){return this.bo[0]}),new V().i(Eo,`com.raquo.airstream.core.Transaction$pendingTransactions$`,{bj:1});var Do;function Oo(){return Do||=new Eo,Do}function ko(e,t){var n=e.Y.indexOf(t)|0;if(n!==-1)e.Y.splice(n,1),e.z.b()||t.eS();else throw od(new q,`Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?`)}function Ao(e){for(;(e.bp.length|0)>0;)ko(e,e.bp.shift())}function jo(e){this.cA=null,this.Y=null,this.aC=!1,this.bp=null,this.z=null,this.aD=0,this.cA=e,this.Y=qo().aw(U().ae(new(No.r()).C([]))),this.aC=!0,this.bp=qo().aw(U().ae(new(No.r()).C([]))),this.z=Ep(),this.aD=0}L=jo.prototype=new B,L.constructor=jo,L.et=(function(){if(this.z.b()){var e=bo(),t=(()=>{var e=new Nl(this.cA);this.z=new Dp(e),this.aC=!1,this.aD=0;for(var t=0,n=this.Y.length|0;t<n;){var r=t+this.aD|0;this.Y[r].eR(e),t=1+t|0}Ao(this),this.aC=!0,this.aD=0});if(bo(),e.L)t();else{e.L=!0;try{t()}finally{e.L=!1,_o(e)}}}else throw od(new q,`Can not activate `+this+`: it is already active`)}),L.fE=(function(){if(this.z.b())throw od(new q,`Can not deactivate DynamicOwner: it is not active`);this.aC=!1;for(var e=this.Y,t=0,n=e.length|0;t<n;)e[t].eS(),t=1+t|0;Ao(this);var r=this.z;r.b()||r.s().gu(),Ao(this),this.aC=!0,this.z=Ep()}),L.fn=(function(e,t){t?(this.aD=1+this.aD|0,this.Y.unshift(e)):this.Y.push(e);var n=this.z;if(!n.b()){var r=n.s();e.eR(r)}}),L.gP=(function(e){this.aC?ko(this,e):this.bp.push(e)}),new V().i(jo,`com.raquo.airstream.ownership.DynamicOwner`,{bk:1});function Mo(e,t,n){this.bq=null,this.cB=null,this.br=null,this.bq=e,this.cB=t,this.br=Ep(),e.fn(this,n)}L=Mo.prototype=new B,L.constructor=Mo,L.bJ=(function(){this.bq.gP(this)}),L.eR=(function(e){var t=bo(),n=(()=>{this.br=this.cB.c(e)});if(bo(),t.L)n();else{t.L=!0;try{n()}finally{t.L=!1,_o(t)}}}),L.eS=(function(){var e=this.br;e.b()||(e.s().bJ(),this.br=Ep())});var No=new V().i(Mo,`com.raquo.airstream.ownership.DynamicSubscription`,{bl:1});function Po(){}L=Po.prototype=new B,L.constructor=Po,L.hc=(function(e,t,n){return new Mo(e,new X((e=>new Dp(t.c(e)))),n)}),L.h3=(function(e,t,n){return new Mo(e,new X((e=>(t.c(e),Ep()))),n)}),new V().i(Po,`com.raquo.airstream.ownership.DynamicSubscription$`,{bm:1});var Fo;function Io(){return Fo||=new Po,Fo}function Lo(e){e.aE=qo().aw(U().ae(new(Uo.r()).C([])))}function Ro(e){for(var t=e.aE,n=0,r=t.length|0;n<r;)Vo(t[n]),n=1+n|0;e.aE.length=0}function zo(e,t){var n=e.aE.indexOf(t)|0;if(n!==-1)e.aE.splice(n,1);else throw od(new q,`Can not remove Subscription from Owner: subscription not found.`)}function Bo(e,t){e.aE.push(t)}function Vo(e){if(!e.bR)e.cD.ax(),e.bR=!0;else throw od(new q,`Can not kill Subscription: it was already killed.`)}function Ho(e,t){this.cE=null,this.cD=null,this.bR=!1,this.cE=e,this.cD=t,this.bR=!1,e.gH(this)}L=Ho.prototype=new B,L.constructor=Ho,L.bJ=(function(){Vo(this),zo(this.cE,this)});var Uo=new V().i(Ho,`com.raquo.airstream.ownership.Subscription`,{bp:1});function Wo(e,t){this.cF=null,this.cG=null,this.Z=null,this.ai=!1,this.cF=e,this.cG=t,this.Z=Ep(),this.ai=!1}L=Wo.prototype=new B,L.constructor=Wo,L.gq=(function(){var e=this.Z;return!e.b()&&!e.s().bq.z.b()}),L.gX=(function(e){if(this.ai)throw od(new q,`Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var t=this.Z;if(t.b())var n=!1;else var r=t.s().bq,n=e===null?r===null:e===r;if(!n){this.gq()&&!e.z.b()&&(this.ai=!0);var i=this.Z;i.b()||(i.s().bJ(),this.Z=Ep());var a=Io().hc(e,new X((e=>(this.ai||this.cF.ax(),new Ho(e,new sf((()=>{this.ai||this.cG.ax()})))))),!1);this.Z=new Dp(a),this.ai=!1}}),L.fA=(function(){if(this.ai)throw od(new q,`Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var e=this.Z;e.b()||e.s().bJ(),this.Z=Ep()}),new V().i(Wo,`com.raquo.airstream.ownership.TransferableSubscription`,{bq:1});function Go(){}L=Go.prototype=new B,L.constructor=Go,L.aw=(function(e){return[...Ol().ha(e)]}),new V().i(Go,`com.raquo.ew.JsArray$`,{br:1});var Ko;function qo(){return Ko||=new Go,Ko}function Jo(){}L=Jo.prototype=new B,L.constructor=Jo,L.g5=(function(e,t){for(var n=0,r=e.length|0;n<r;)t(e[n]),n=1+n|0}),new V().i(Jo,`com.raquo.ew.JsArray$RichJsArray$`,{bs:1});var Yo;function Xo(){return Yo||=new Jo,Yo}function Zo(){this.cH=null,Qo=this,document.createElement(`template`),this.fD(Y().n.h4().h5()),this.cH=/* @__PURE__ */ RegExp(` `,`g`)}L=Zo.prototype=new B,L.constructor=Zo,L.fs=(function(e,t){try{return e.appendChild(t),!0}catch(e){var n=e instanceof _u?e:new qp(e);if(n instanceof qp&&n.O instanceof DOMException)return!1;throw n instanceof qp?n.O:n}}),L.gr=(function(e,t){for(var n=e;;){if(n.parentNode!==null)var r=n.parentNode;else var i=n.host,r=i===void 0?null:i;if(r===null)return!1;if(ml().C(t,r))return!0;n=r}}),L.fC=(function(e){return document.createElement(e.cp())}),L.gc=(function(e,t){var n=this.gd(e,t);return n===void 0?void 0:t.aF.bE(n)}),L.gd=(function(e,t){var n=e.M.getAttributeNS(null,t.a0);return n===null?void 0:n}),L.eY=(function(e,t,n){this.gU(e,t,t.aF.bf(n))}),L.gU=(function(e,t,n){n===null?this.gO(e,t):e.M.setAttribute(t.a0,n)}),L.gO=(function(e,t){e.M.removeAttribute(t.a0)}),L.gV=(function(e,t,n){this.gW(e,t,t.dd.bf(n))}),L.gW=(function(e,t,n){e.M[t.de]=n}),L.eZ=(function(e,t,n){var r=e.M,i=t.ak,a=t.al,o=n===null?null:n;o===null?(a.Q(new X((e=>r.style.removeProperty(``+e+i)))),r.style.removeProperty(i)):(a.Q(new X((e=>{r.style.setProperty(``+e+i,o)}))),r.style.setProperty(i,o))}),L.fD=(function(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e.dp)}),L.gg=(function(e,t){var n=this.gh(e,t);return n===void 0?void 0:t.bV.bE(n)}),L.gh=(function(e,t){var n=e.cs(),r=t.bt,i=n.getAttributeNS(r.b()?null:r.s(),t.bW);return i===null?void 0:i}),L.gY=(function(e,t,n){this.gZ(e,t,t.bV.bf(n))}),L.gZ=(function(e,t,n){if(n===null)this.gQ(e,t);else{var r=t.bt;if(r.b())e.cs().setAttribute(t.bs,n);else{var i=r.s();e.cs().setAttributeNS(i,t.bs,n)}}}),L.gQ=(function(e,t){var n=e.cs(),r=t.bt;n.removeAttributeNS(r.b()?null:r.s(),t.bW)}),L.fG=(function(e,t){for(var n=t,r=e;;){if(r===null)return n;var i=r.parentNode,a=new rh(this.fF(r),n);r=i,n=a}}),L.fF=(function(e){if(e instanceof HTMLElement){var t=e.id;if(al(),t!==``)var n=`#`+t;else var r=e.className,n=(al(),r===``?``:`.`+r.replace(this.cH,`.`));return e.tagName.toLowerCase()+n}return e.nodeName}),new V().i(Zo,`com.raquo.laminar.DomApi$`,{bt:1});var Qo;function $o(){return Qo||=new Zo,Qo}function es(e,t,n){this.bT=null,this.cI=null,this.bS=null,this.bT=e,this.cI=t,this.bS=n}L=es.prototype=new B,L.constructor=es,L.Q=(function(e){this.bT===null?this.bS===null?Qc().g6(this.cI,e):Xo().g5(this.bS,Ed().g9(e)):this.bT.Q(e)}),new V().i(es,`com.raquo.laminar.Seq`,{bu:1});function ts(){ns=this,$()}L=ts.prototype=new B,L.constructor=ts,new V().i(ts,`com.raquo.laminar.Seq$`,{bv:1});var ns;function rs(){return ns||=new ts,ns}function is(e){uo(),Vu()}function as(e){e.f3=ws()}function os(e){ss(e,new X((e=>{e.df.M.focus()})))}function ss(e,t){return new Wl(new X((e=>{var n=new Pu(!e.aG.z.b()),r=new X((e=>{n.bA?n.bA=!1:t.c(e)}));Io().h3(e.aG,new X((e=>(t=>{r.c(new xs(e,t))}))(e)),!1)})),ws())}function cs(){this.aj=null,this.bU=null,ls=this,this.aj=new Fl(us()),new Fl(us()),new Fl(us()),this.bU=new Pl}L=cs.prototype=new B,L.constructor=cs,new V().i(cs,`com.raquo.laminar.codecs.package$`,{bD:1});var ls;function us(){return ls||=new cs,ls}function ds(e){e.f4=fs(e,`class`,` `)}function fs(e,t,n){var r=Rl(new zl,t,us().aj);return new Ll(r.a0,new X((e=>{var t=$o().gc(e,r);return t===void 0?``:t})),new cf(((e,t)=>{$o().eY(e,r,t)})),n)}function ps(e){e.f2=ms(e,`class`,` `)}function ms(e,t,n){var r=new Hl(t,us().aj,Ep());return new Ll(r.bs,new X((e=>{var t=$o().gg(e,r);return t===void 0?``:t})),new cf(((e,t)=>{$o().gY(e,r,t)})),n)}function hs(e,t){this.dc=null,this.db=null,this.dc=e,this.db=t}L=hs.prototype=new B,L.constructor=hs,L.f=(function(e){return new Uu(this.dc,this.db.c(e),new lf(((e,t,n)=>{$o().eZ(e,t,n)})))}),new V().i(hs,`com.raquo.laminar.keys.DerivedStyleProp`,{c3:1});function gs(){}L=gs.prototype=new B,L.constructor=gs;function _s(){}_s.prototype=L;function vs(){this.f5=null,this.f6=null,this.f7=null,this.f8=null,this.f5=`http://www.w3.org/2000/svg`,this.f6=`http://www.w3.org/1999/xlink`,this.f7=`http://www.w3.org/XML/1998/namespace`,this.f8=`http://www.w3.org/2000/xmlns/`}L=vs.prototype=new B,L.constructor=vs,L.gB=(function(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`xlink`:return`http://www.w3.org/1999/xlink`;case`xml`:return`http://www.w3.org/XML/1998/namespace`;case`xmlns`:return`http://www.w3.org/2000/xmlns/`;default:throw new Pf(e)}}),new V().i(vs,`com.raquo.laminar.keys.SvgAttr$`,{c6:1});var ys;function bs(){return ys||=new vs,ys}function xs(e,t){this.df=null,this.df=e}L=xs.prototype=new B,L.constructor=xs,new V().i(xs,`com.raquo.laminar.lifecycle.MountContext`,{c7:1});function Ss(){this.f9=null,Cs=this,this.f9=new Ul}L=Ss.prototype=new B,L.constructor=Ss,new V().i(Ss,`com.raquo.laminar.modifiers.Modifier$`,{c9:1});var Cs;function ws(){return Cs||=new Ss,Cs}function Ts(){}L=Ts.prototype=new B,L.constructor=Ts,L.cg=(function(e,t,n){var r=new Dp(e);df(t,r),n!==void 0&&n.hk(e,t);var i=$o().fs(e.cr(),t.M);return i&&ff(t,r),i}),new V().i(Ts,`com.raquo.laminar.nodes.ParentNode$`,{cg:1});var Es;function Ds(){return Es||=new Ts,Es}function Os(){}L=Os.prototype=new B,L.constructor=Os,L.es=(function(e){return Y().n.ck().bC(new Q([Y().n.cj().cl(),Y().n.eI().ey(),Y().n.cn().cq().f(8),Hu(Y().n,e,ql())]))}),new V().i(Os,`doc.ExampleGroups$package$`,{cm:1});var ks;function As(){return ks||=new Os,ks}function js(){}L=js.prototype=new B,L.constructor=js,L.fi=(function(e){return Y().n.ck().bC(new Q([Y().n.cj().cl(),Y().n.eJ().f1(),Y().n.fo().fz(),Y().n.cn().cq().f(16),Hu(Y().n,e,ql())]))}),new V().i(js,`doc.Examples$package$`,{cn:1});var Ms;function Ns(){return Ms||=new js,Ms}function Ps(){}L=Ps.prototype=new B,L.constructor=Ps,L.fk=(function(e){return Y().n.ck().bC(new Q([Y().n.cj().cl(),Y().n.eJ().f1(),Y().n.eI().ey(),Y().n.cn().cq().f(16),Hu(Y().n,e,ql())]))}),new V().i(Ps,`doc.VerticalExamples$package$`,{co:1});var Fs;function Is(){return Fs||=new Ps,Fs}function Ls(){}L=Ls.prototype=new B,L.constructor=Ls,L.fq=(function(){zs().fT(),zs().fV(),zs().fW(),zs().fX(),zs().fY(),zs().fZ(),zs().g0(),zs().g1(),zs().g2(),zs().fU()}),L.fT=(function(){var e=document.querySelector(`#example1`);Kc().T(e).b()||(Y(),new Wu(e,K().u(new Q([new J((e=>e.v().f(`Select a color`)))]),new Q([]))))}),L.fV=(function(){var e=document.querySelector(`#example2`);if(!Kc().T(e).b()){Y();var t=[{color:`#2563eb`,label:`Ocean blue`},{color:`#16a34a`,label:`Forest green`},{color:`#dc2626`,label:`Brick red`}];new Wu(e,K().u(new Q([new J((e=>e.v().f(`Accent color`))),new J((e=>e.h7().f(t)))]),new Q([])))}}),L.fW=(function(){var e=document.querySelector(`#example3`);Kc().T(e).b()||(Y(),new Wu(e,K().u(new Q([new J((e=>e.v().f(`Color`))),new J((e=>e.gI().fx()))]),new Q([]))))}),L.fX=(function(){var e=document.querySelector(`#example4`);Kc().T(e).b()||(Y(),new Wu(e,K().u(new Q([new J((e=>(K().aR(),Y().n).aS().f(`#4a90e2`))),new J((e=>e.v().f(`Select a color`)))]),new Q([]))))}),L.fY=(function(){var e=document.querySelector(`#example5`);Kc().T(e).b()||(Y(),new Wu(e,K().u(new Q([new J((e=>(K().aR(),Y().n).aS().f(`#f5a623ff`))),new J((e=>e.gE().f(!0))),new J((e=>e.v().f(`Select a color`)))]),new Q([]))))}),L.fZ=(function(){var e=document.querySelector(`#example6`);Kc().T(e).b()||(Y(),new Wu(e,As().es(new Q([Is().fk(new Q([K().u(new Q([new J((e=>e.bH().gk())),new J((e=>(K().aR(),Y().n).aS().f(`#4a90e2`))),new J((e=>e.v().f(`Pick a hex color`)))]),new Q([])),K().u(new Q([new J((e=>e.bH().gR())),new J((e=>(K().aR(),Y().n).aS().f(`rgb(80, 227, 194)`))),new J((e=>e.v().f(`Pick an RGB color`)))]),new Q([])),K().u(new Q([new J((e=>e.bH().gm())),new J((e=>(K().aR(),Y().n).aS().f(`hsl(290, 87%, 47%)`))),new J((e=>e.v().f(`Pick an HSL color`)))]),new Q([])),K().u(new Q([new J((e=>e.bH().gn())),new J((e=>(K().aR(),Y().n).aS().f(`hsv(55, 89%, 97%)`))),new J((e=>e.v().f(`Pick an HSV color`)))]),new Q([]))]))]))))}),L.g0=(function(){var e=document.querySelector(`#example7`);Kc().T(e).b()||(Y(),new Wu(e,K().u(new Q([new J((e=>e.v().f(`Select a color`))),new J((e=>e.h6().f(`#d0021b; #f5a623; #f8e71c; #8b572a; #7ed321; #417505; #bd10e0; #9013fe; #4a90e2; #50e3c2; #b8e986; #000; #444; #888; #ccc; #fff;`)))]),new Q([]))))}),L.g1=(function(){var e=document.querySelector(`#example8`);Kc().T(e).b()||(Y(),new Wu(e,As().es(new Q([Ns().fi(new Q([K().u(new Q([new J((e=>e.cu().h2())),new J((e=>e.v().f(`Select a color`)))]),new Q([])),K().u(new Q([new J((e=>e.cu().gz())),new J((e=>e.v().f(`Select a color`)))]),new Q([])),K().u(new Q([new J((e=>e.cu().gv())),new J((e=>e.v().f(`Select a color`)))]),new Q([]))]))]))))}),L.g2=(function(){var e=document.querySelector(`#example9`);Kc().T(e).b()||(Y(),new Wu(e,K().u(new Q([new J((e=>e.fJ().f(!0))),new J((e=>e.v().f(`Select a color`)))]),new Q([]))))}),L.fU=(function(){var e=document.querySelector(`#example10`);Kc().T(e).b()||(Y(),new Wu(e,K().u(new Q([new J((e=>e.v().f(`Select a color`))),new J((e=>e.gl().f(`Choose a color with appropriate contrast!`)))]),new Q([]))))}),new V().i(Ls,`examples.colorPicker.Main$package$`,{cp:1});var Rs;function zs(){return Rs||=new Ls,Rs}function Bs(e){try{zs().fq()}catch(e){throw e}}function Vs(e,t){for(var n=H().S(`^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$`),r=[],i=0;i<(t.length|0);){var a=t[i];if(a!==``){var o=n.exec(a);if(o!==null){var s=Hs(e,o[1]),c=s[0],l=s[1],u=o[2],d=o[3],f=parseInt(d),p=o[4];r.push(new du(c,l,u,f|0,p===void 0?-1:parseInt(p)|0))}else r.push(new du(`<jscode>`,a,null,-1,-1))|0}i=1+i|0}var m=r.length|0,h=new(fu.r()).C(m);for(i=0;i<m;)h.a[i]=r[i],i=1+i|0;return h}function Hs(e,t){var n=H().S(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$`),r=H().S(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$`),i=H().S(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$`),a=H().S(`^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$`),o=H().S(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$`),s=n.exec(t),c=s===null?r.exec(t):s;if(c!==null)return[Us(e,c[1]),Xs(e,c[2])];var l=i.exec(t),u=l===null?a.exec(t):l;if(u!==null)return[Us(e,u[1]),`<init>`];var d=o.exec(t);return d===null?[`<jscode>`,t]:[Us(e,d[1]),`<clinit>`]}function Us(e,t){var n=Gs(e);if(Sc().cb.call(n,t))var r=Gs(e)[t];else var r=sc(e,0,t);return r.split(`_`).join(`.`).split(`＿`).join(`_`)}function Ws(e){if(!((1&e.E)<<24>>24)){var t={};t.O=`java_lang_Object`,t.T=`java_lang_String`;for(var n=0;n<=22;){if(n>=2){var r=`T`+n;t[r]=`scala_Tuple`+n}var i=`F`+n;t[i]=`scala_Function`+n,n=1+n|0}e.c8=t,e.E=(1|e.E)<<24>>24}return e.c8}function Gs(e){return(1&e.E)<<24>>24?e.c8:Ws(e)}function Ks(e){if(!((2&e.E)<<24>>24)){var t={};t.sjsr_=`scala_scalajs_runtime_`,t.sjs_=`scala_scalajs_`,t.sci_=`scala_collection_immutable_`,t.scm_=`scala_collection_mutable_`,t.scg_=`scala_collection_generic_`,t.sc_=`scala_collection_`,t.sr_=`scala_runtime_`,t.s_=`scala_`,t.jl_=`java_lang_`,t.ju_=`java_util_`,e.c9=t,e.E=(2|e.E)<<24>>24}return e.c9}function qs(e){return(2&e.E)<<24>>24?e.c9:Ks(e)}function Js(e){return(4&e.E)<<24>>24||(e.c7=Object.keys(qs(e)),e.E=(4|e.E)<<24>>24),e.c7}function Ys(e){return(4&e.E)<<24>>24?e.c7:Js(e)}function Xs(e,t){if(t.startsWith(`init___`))return`<init>`;var n=t.indexOf(`__`)|0;return n<0?t:t.substring(0,n)}function Zs(e,t){return t?t.arguments&&t.stack?Qs(e,t):t.stack&&t.sourceURL?tc(e,t):t.stack&&t.number?ec(e,t):t.stack&&t.fileName?$s(e,t):t.message&&t[`opera#sourceloc`]?t.stacktrace?t.message.indexOf(`
`)>-1&&t.message.split(`
`).length>t.stacktrace.split(`
`).length?nc(e,t):rc(e,t):nc(e,t):t.message&&t.stack&&t.stacktrace?t.stacktrace.indexOf(`called from line`)<0?ic(e,t):ac(e,t):t.stack&&!t.fileName?Qs(e,t):oc(e,t):[]}function Qs(e,t){return(t.stack+`
`).replace(H().S(`^[\\s\\S]+?\\s+at\\s+`),` at `).replace(H().y(`^\\s+(at eval )?at\\s+`,`gm`),``).replace(H().y(`^([^\\(]+?)([\\n])`,`gm`),`{anonymous}() ($1)$2`).replace(H().y(`^Object.<anonymous>\\s*\\(([^\\)]+)\\)`,`gm`),`{anonymous}() ($1)`).replace(H().y(`^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(0,-1)}function $s(e,t){return t.stack.replace(H().y(`(?:\\n@:0)?\\s+$`,`m`),``).replace(H().y(`^(?:\\((\\S*)\\))?@`,`gm`),`{anonymous}($1)@`).split(`
`)}function ec(e,t){return t.stack.replace(H().y(`^\\s*at\\s+(.*)$`,`gm`),`$1`).replace(H().y(`^Anonymous function\\s+`,`gm`),`{anonymous}() `).replace(H().y(`^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(1)}function tc(e,t){return t.stack.replace(H().y(`\\[native code\\]\\n`,`m`),``).replace(H().y(`^(?=\\w+Error\\:).*$\\n`,`m`),``).replace(H().y(`^@`,`gm`),`{anonymous}()@`).split(`
`)}function nc(e,t){for(var n=H().y(`Line (\\d+).*script (?:in )?(\\S+)`,`i`),r=t.message.split(`
`),i=[],a=2,o=r.length|0;a<o;){var s=n.exec(r[a]);s!==null&&i.push(`{anonymous}()@`+s[2]+`:`+s[1])|0,a=2+a|0}return i}function rc(e,t){for(var n=H().y(`Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$`,`i`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[3],l=c===void 0?`{anonymous}`:c;i.push(l+`()@`+s[2]+`:`+s[1])|0}a=2+a|0}return i}function ic(e,t){for(var n=H().S(`^(.*)@(.+):(\\d+)$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[1],l=c===void 0?`global code`:c+`()`;i.push(l+`@`+s[2]+`:`+s[3])|0}a=1+a|0}return i}function ac(e,t){for(var n=H().S(`^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[4]+`:`+s[1]+`:`+s[2],l=s[2],u=(l===void 0?`global code`:l).replace(H().S(`<anonymous function: (\\S+)>`),`$1`).replace(H().S(`<anonymous function>`),`{anonymous}`);i.push(u+`@`+c)|0}a=2+a|0}return i}function oc(e,t){return[]}function sc(e,t,n){for(;;)if(t<(Ys(e).length|0)){var r=Ys(e)[t];if(n.startsWith(r))return``+qs(e)[r]+n.substring(r.length);t=1+t|0}else return n.startsWith(`L`)?n.substring(1):n}function cc(){this.c8=null,this.c9=null,this.c7=null,this.E=0}L=cc.prototype=new B,L.constructor=cc,L.g3=(function(e){return Vs(this,Zs(this,e))}),new V().i(cc,`java.lang.StackTrace$`,{cP:1});var lc;function uc(){return lc||=new cc,lc}function dc(){}L=dc.prototype=new B,L.constructor=dc,L.S=(function(e){return new RegExp(e)}),L.y=(function(e,t){return new RegExp(e,t)}),new V().i(dc,`java.lang.StackTrace$StringRE$`,{cQ:1});var fc;function H(){return fc||=new dc,fc}function pc(){this.dZ=null,this.fa=null,mc=this,this.dZ=new Yp(!1),this.fa=new Yp(!0)}L=pc.prototype=new B,L.constructor=pc,new V().i(pc,`java.lang.System$Streams$`,{cU:1});var mc;function hc(){return mc||=new pc,mc}function gc(e){var t={};return t[`java.version`]=`1.8`,t[`java.vm.specification.version`]=`1.8`,t[`java.vm.specification.vendor`]=`Oracle Corporation`,t[`java.vm.specification.name`]=`Java Virtual Machine Specification`,t[`java.vm.name`]=`Scala.js`,t[`java.vm.version`]=`1.22.0`,t[`java.specification.version`]=`1.8`,t[`java.specification.vendor`]=`Oracle Corporation`,t[`java.specification.name`]=`Java Platform API Specification`,t[`file.separator`]=`/`,t[`path.separator`]=`:`,t[`line.separator`]=`
`,t}function _c(){this.ca=null,this.e0=null,vc=this,this.ca=gc(this),this.e0=null}L=_c.prototype=new B,L.constructor=_c,L.eO=(function(e,t){if(this.ca!==null){var n=this.ca;return Sc().cb.call(n,e)?n[e]:t}return this.e0.eO(e,t)}),new V().i(_c,`java.lang.System$SystemProperties$`,{cV:1});var vc;function yc(){return vc||=new _c,vc}function bc(){this.cb=null,xc=this,this.cb=Object.prototype.hasOwnProperty}L=bc.prototype=new B,L.constructor=bc,new V().i(bc,`java.lang.Utils$Cache$`,{cX:1});var xc;function Sc(){return xc||=new bc,xc}function Cc(e,t){return e===t}function wc(e){return 0}function Tc(e,t){return!!(e&&e.$classData&&e.$classData.D===t&&e.$classData.B.n.an)}var Ec=new V().i(0,`java.lang.Void`,{an:1},(e=>e===void 0));function Dc(e,t){throw bf(new Sf,`argument type mismatch`)}function Oc(){}L=Oc.prototype=new B,L.constructor=Oc,L.aP=(function(e){return e instanceof Ra||e instanceof Ba||e instanceof Va||e instanceof Ha||e instanceof Ua||e instanceof Wa?e.a.length:e instanceof Ga?e.a.length>>>1|0:(e instanceof Ka||e instanceof qa||Dc(this,e),e.a.length)}),new V().i(Oc,`java.lang.reflect.Array$`,{cY:1});var kc;function Ac(){return kc||=new Oc,kc}function jc(){}L=jc.prototype=new B,L.constructor=jc,L.fw=(function(e,t){for(var n=0,r=e.a.length;;)if(n===r)return~n;else{var i=(n+r|0)>>>1|0,a=e.a[i],o=t===a?0:t<a?-1:1;if(o<0){r=i;continue}if(o!==0){n=1+i|0;continue}return i}}),L.eE=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length>>>1|0;if((t.a.length>>>1|0)!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a,o=i<<1,s=a[o],c=a[o+1|0],l=r,u=t.a,d=l<<1,f=u[d],p=u[d+1|0];if((s^f|c^p)!==0)return!1;r=1+r|0}return!0}),L.eD=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),L.eF=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),L.eC=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),L.eB=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),L.eG=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),new V().i(jc,`java.util.Arrays$`,{cZ:1});var Mc;function Nc(){return Mc||=new jc,Mc}function Pc(e,t){return Lc().f0(e,t)}function Fc(){}L=Fc.prototype=new B,L.constructor=Fc,L.f0=(function(e,t){if(t===e>>31)return``+e;if(-2097152&(t^t>>10)){var n=t>>31,r=e^n,i=r-n|0,a=4294967296*(((t^n)+(i>>>0<r>>>0|0)|0)>>>0)+(i>>>0),o=+Math.floor(1.0000000000000265e-9*a),s=i-Math.imul(1e9,o|0)|0;s<0&&(--o,s=1e9+s|0);var c=``+s,l=o,u=c.length,d=``+l+`000000000`.substring(u)+c;return t<0?`-`+d:d}return``+(4294967296*t+(e>>>0))}),L.eN=(function(e){if(e<-0x8000000000000000)return z(0,-2147483648);if(e>=0x8000000000000000)return z(-1,2147483647);var t=e|0,n=23283064365386963e-26*e|0;return z(t,e<0&&t!==0?n-1|0:n)}),L.fK=(function(e,t,n,r){var i=t>>31,a=e^i,o=a-i|0,s=(t^i)+(o>>>0<a>>>0|0)|0,c=r>>31,l=n^c,u=l-c|0,d=(r^c)+(u>>>0<l>>>0|0)|0;if(d|-2097152&u){var f=(4294967296*(s>>>0)+(o>>>0))/(4294967296*(d>>>0)+(u>>>0))+.00390625,p=f|0,m=23283064365386963e-26*f|0,h=65535&u,g=u>>>16|0,_=65535&p,v=p>>>16|0,y=Math.imul(h,_),b=Math.imul(g,_),x=Math.imul(h,v),ee=y+((b+x|0)<<16)|0,S=(y>>>16|0)+x|0;if(((s-((((Math.imul(u,m)+Math.imul(d,p)|0)+Math.imul(g,v)|0)+(S>>>16|0)|0)+(((65535&S)+b|0)>>>16|0)|0)|0)-((o-ee|0)>>>0>o>>>0|0)|0)<0)var te=p-1|0,C=(m-1|0)+(te!==-1|0)|0,w=te,ne=C;else var w=p,ne=m}else var re=(s>>>0)/(xa(u)>>>0)|0,w=(4294967296*(s-Math.imul(u,re)|0)+(o>>>0))/u|0,ne=re;if((t^r)>=0)return z(w,ne);var ie=-w|0;return z(ie,(-ne|0)-(ie!==0|0)|0)}),L.fL=(function(e,t,n,r){if(!(r|-2097152&n)){var i=(t>>>0)/(xa(n)>>>0)|0;return z((4294967296*(t-Math.imul(n,i)|0)+(e>>>0))/n|0,i)}if(r>=0){var a=(4294967296*(t>>>0)+(e>>>0))/(4294967296*(r>>>0)+(n>>>0))+.00390625,o=a|0,s=23283064365386963e-26*a|0,c=65535&n,l=n>>>16|0,u=65535&o,d=o>>>16|0,f=Math.imul(c,u),p=Math.imul(l,u),m=Math.imul(c,d),h=f+((p+m|0)<<16)|0,g=(f>>>16|0)+m|0;if(((t-((((Math.imul(n,s)+Math.imul(r,o)|0)+Math.imul(l,d)|0)+(g>>>16|0)|0)+(((65535&g)+p|0)>>>16|0)|0)|0)-((e-h|0)>>>0>e>>>0|0)|0)<0){var _=o-1|0;return z(_,(s-1|0)+(_!==-1|0)|0)}return z(o,s)}return(t===r?e>>>0<n>>>0:t>>>0<r>>>0)?z(0,0):z(1,0)}),L.gM=(function(e,t,n,r){var i=t>>31,a=e^i,o=a-i|0,s=(t^i)+(o>>>0<a>>>0|0)|0,c=r>>31,l=n^c,u=l-c|0,d=(r^c)+(u>>>0<l>>>0|0)|0;if(d|-2097152&u){var f=(4294967296*(s>>>0)+(o>>>0))/(4294967296*(d>>>0)+(u>>>0))+.00390625,p=f|0,m=23283064365386963e-26*f|0,h=65535&u,g=u>>>16|0,_=65535&p,v=p>>>16|0,y=Math.imul(h,_),b=Math.imul(g,_),x=Math.imul(h,v),ee=y+((b+x|0)<<16)|0,S=(y>>>16|0)+x|0,te=(((Math.imul(u,m)+Math.imul(d,p)|0)+Math.imul(g,v)|0)+(S>>>16|0)|0)+(((65535&S)+b|0)>>>16|0)|0,C=o-ee|0,w=(s-te|0)-(C>>>0>o>>>0|0)|0;if(w<0)var ne=C+u|0,re=(w+d|0)+(ne>>>0<C>>>0|0)|0,ie=ne,ae=re;else var ie=C,ae=w}else var oe=(4294967296*((s>>>0)%(xa(u)>>>0)|0)+(o>>>0))/u|0,ie=o-Math.imul(u,oe)|0,ae=0;if(t<0){var se=-ie|0;return z(se,(-ae|0)-(se!==0|0)|0)}return z(ie,ae)}),L.gN=(function(e,t,n,r){if(!(r|-2097152&n)){var i=(4294967296*((t>>>0)%(xa(n)>>>0)|0)+(e>>>0))/n|0;return z(e-Math.imul(n,i)|0,0)}if(r>=0){var a=(4294967296*(t>>>0)+(e>>>0))/(4294967296*(r>>>0)+(n>>>0))+.00390625,o=a|0,s=23283064365386963e-26*a|0,c=65535&n,l=n>>>16|0,u=65535&o,d=o>>>16|0,f=Math.imul(c,u),p=Math.imul(l,u),m=Math.imul(c,d),h=f+((p+m|0)<<16)|0,g=(f>>>16|0)+m|0,_=(((Math.imul(n,s)+Math.imul(r,o)|0)+Math.imul(l,d)|0)+(g>>>16|0)|0)+(((65535&g)+p|0)>>>16|0)|0,v=e-h|0,y=(t-_|0)-(v>>>0>e>>>0|0)|0;if(y<0){var b=v+n|0;return z(b,(y+r|0)+(b>>>0<v>>>0|0)|0)}return z(v,y)}if(t===r?e>>>0<n>>>0:t>>>0<r>>>0)return z(e,t);var x=e-n|0;return z(x,(t-r|0)-(x>>>0>e>>>0|0)|0)}),new V().i(Fc,`org.scalajs.linker.runtime.RuntimeLong$`,{d1:1});var Ic;function Lc(){return Ic||=new Fc,Ic}function Rc(){}L=Rc.prototype=new B,L.constructor=Rc,L.eK=(function(e,t){var n=e.t();if(n>-1){for(var r=t.eQ(n),i=e.g(),a=0;a<n;)U().ew(r,a,i.i()),a=1+a|0;return r}var o=null,s=t.eW(),c=s===Za.l();o=[];for(var l=e.g();l.m();){var u=l.i(),d=c?Fa(u):u===null?dl().gT(s):u;o.push(d)}return dl().gS(s===Ya.l()?Ec.l():s===hl.l()||s===Cd.l()?Ja.l():s,o)}),L.eH=(function(e,t){if(e===t)return!0;if(e.a.length!==t.a.length)return!1;for(var n=e.a.length,r=0;r<n;){if(!ml().C(e.a[r],t.a[r]))return!1;r=1+r|0}return!0}),new V().i(Rc,`scala.Array$`,{d2:1});var zc;function Bc(){return zc||=new Rc,zc}var Vc=new V().i(1,`scala.Function1`,{e:1});function Hc(){}L=Hc.prototype=new B,L.constructor=Hc;function Uc(){}Uc.prototype=L;function Wc(){}L=Wc.prototype=new B,L.constructor=Wc,L.T=(function(e){return e===null?Ep():new Dp(e)}),new V().i(Wc,`scala.Option$`,{db:1});var Gc;function Kc(){return Gc||=new Wc,Gc}function qc(){this.e8=null,this.e7=null,Jc=this,this.e8=new J((e=>this.e8)),this.e7=new Qd}L=qc.prototype=new B,L.constructor=qc,new V().i(qc,`scala.PartialFunction$`,{dc:1});var Jc;function Yc(){return Jc||=new qc,Jc}function Xc(){this.eb=null,Zc=this,this.eb=new J((e=>Qc().eb))}L=Xc.prototype=new B,L.constructor=Xc,L.g6=(function(e,t){var n=Ac().aP(e),r=0;if(e instanceof Ra)for(;r<n;)t.c(e.a[r]),r=1+r|0;else if(e instanceof Wa)for(;r<n;)t.c(e.a[r]),r=1+r|0;else if(e instanceof qa)for(;r<n;)t.c(e.a[r]),r=1+r|0;else if(e instanceof Ga)for(;r<n;){var i=e.a,a=r<<1,o=i[a],s=i[a+1|0];t.c(z(o,s)),r=1+r|0}else if(e instanceof Ka)for(;r<n;)t.c(e.a[r]),r=1+r|0;else if(e instanceof Va)for(;r<n;)t.c(Na(e.a[r])),r=1+r|0;else if(e instanceof Ha)for(;r<n;)t.c(e.a[r]),r=1+r|0;else if(e instanceof Ua)for(;r<n;)t.c(e.a[r]),r=1+r|0;else if(e instanceof Ba)for(;r<n;)t.c(e.a[r]),r=1+r|0;else throw new Pf(e)}),new V().i(Xc,`scala.collection.ArrayOps$`,{di:1});var Zc;function Qc(){return Zc||=new Xc,Zc}function $c(e,t){for(var n=e.g();n.m();)t.c(n.i())}function el(e,t,n,r){return e.t()===0?``+t+r:e.aM(sh(new ch),t,n,r).B.l}function tl(e,t,n,r,i){var a=t.B;n.length!==0&&(a.l=``+a.l+n);var o=e.g();if(o.m()){var s=o.i();for(a.l=``+a.l+s;o.m();){r.length!==0&&(a.l=``+a.l+r);var c=o.i();a.l=``+a.l+c}}return i.length!==0&&(a.l=``+a.l+i),t}function nl(e,t){this.ee=null,this.aZ=null,this.ee=e,this.aZ=t}L=nl.prototype=new B,L.constructor=nl,L.gj=(function(){return this.ee.ax().g()}),new V().i(nl,`scala.collection.Iterator$ConcatIteratorCell`,{dt:1});function rl(){this.ef=null,il=this,this.ef=new J((e=>this.ef))}L=rl.prototype=new B,L.constructor=rl,new V().i(rl,`scala.collection.StringOps$`,{dA:1});var il;function al(){return il||=new rl,il}function ol(){this.ei=0,sl=this;try{al();var e=cu().gs(yc().eO(`scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength`,`64`),10,214748364)}catch(t){if(0)var e;else{var e;throw t}}this.ei=e}L=ol.prototype=new B,L.constructor=ol,new V().i(ol,`scala.collection.immutable.IndexedSeqDefaults$`,{dE:1});var sl;function cl(){return sl||=new ol,sl}function ll(){}L=ll.prototype=new B,L.constructor=ll,L.gT=(function(e){return e===Qa.l()||e===$a.l()||e===Za.l()||e===eo.l()?0:e===to.l()?z(0,0):e===no.l()||e===ro.l()?0:e===Xa.l()?!1:e===Ya.l()?void 0:null}),L.gS=(function(e,t){var n=t.length|0;if(e===Za.l()){for(var r=new Va(n),i=0;i!==n;)r.a[i]=65535&(t[i]|0),i=1+i|0;return r}for(var a=e.af.U(n),o=0;o!==n;)U().ew(a,o,t[o]),o=1+o|0;return a}),new V().i(ll,`scala.collection.mutable.ArrayBuilder$`,{dJ:1});var ul;function dl(){return ul||=new ll,ul}function fl(){}L=fl.prototype=new B,L.constructor=fl,L.C=(function(e,t){return e===t||(uu(e)?this.fS(e,t):e instanceof ha?this.fQ(e,t):e===null?t===null:va(e,t))}),L.fS=(function(e,t){if(uu(t))return this.fR(e,t);if(t instanceof ha){if(typeof e==`number`)return+e===t.c;if(e instanceof R){var n=Ia(e),r=n.l,i=n.h,a=t.c,o=a>>31;return(r^a|i^o)===0}return e===null?t===null:va(e,t)}return e===null?t===null:va(e,t)}),L.fR=(function(e,t){if(typeof e==`number`){var n=+e;if(typeof t==`number`)return n===+t;if(t instanceof R){var r=Ia(t),i=r.l;return n===4294967296*r.h+(i>>>0)}return!1}if(e instanceof R){var a=Ia(e),o=a.l,s=a.h;if(t instanceof R){var c=Ia(t),l=c.l,u=c.h;return(o^l|s^u)===0}if(typeof t==`number`){var d=+t;return 4294967296*s+(o>>>0)===d}return!1}return e===null?t===null:va(e,t)}),L.fQ=(function(e,t){if(t instanceof ha)return e.c===t.c;if(uu(t)){if(typeof t==`number`)return+t===e.c;if(t instanceof R){var n=Ia(t),r=n.l,i=n.h,a=e.c,o=a>>31;return(r^a|i^o)===0}return t===null?e===null:va(t,e)}return e===null&&t===null}),new V().i(fl,`scala.runtime.BoxesRunTime$`,{e3:1});var pl;function ml(){return pl||=new fl,pl}var hl=new V().i(0,`scala.runtime.Null$`,{e6:1});function gl(){}L=gl.prototype=new B,L.constructor=gl,L.bL=(function(){throw Df(new kf,`tried to cast away nullability, but value is null`)}),new V().i(gl,`scala.runtime.Scala3RunTime$`,{e7:1});var _l;function vl(){return _l||=new gl,_l}function yl(){}L=yl.prototype=new B,L.constructor=yl,L.fp=(function(e){return e===null?hl.l():ga(e)}),L.aO=(function(e,t){if(e instanceof Ra||e instanceof Wa||e instanceof qa)return e.a[t];if(e instanceof Ga){var n=e.a,r=t<<1;return z(n[r],n[r+1|0])}if(e instanceof Ka)return e.a[t];if(e instanceof Va)return Na(e.a[t]);if(e instanceof Ha||e instanceof Ua||e instanceof Ba)return e.a[t];throw e===null?Of(new kf):new Pf(e)}),L.ew=(function(e,t,n){if(e instanceof Ra)e.a[t]=n;else if(e instanceof Wa)e.a[t]=n|0;else if(e instanceof qa)e.a[t]=+n;else if(e instanceof Ga){var r=Ia(n),i=e.a,a=t<<1;i[a]=r.l,i[a+1|0]=r.h}else if(e instanceof Ka)e.a[t]=Math.fround(n);else if(e instanceof Va)e.a[t]=Fa(n);else if(e instanceof Ha)e.a[t]=n|0;else if(e instanceof Ua)e.a[t]=n|0;else if(e instanceof Ba)e.a[t]=!!n;else throw e===null?Of(new kf):new Pf(e)}),L.fl=(function(e){return el(e.bj(),e.ad()+`(`,`,`,`)`)}),L.ae=(function(e){if(e===null)return null;if(e.a.length===0){var t=Fp();return om(),Mp(t)}return new Bm(e)}),new V().i(yl,`scala.runtime.ScalaRunTime$`,{e8:1});var bl;function U(){return bl||=new yl,bl}function xl(){}L=xl.prototype=new B,L.constructor=xl,L.k=(function(e,t){var n=this.bK(e,t),r=n;return n=r<<13|r>>>19,Math.imul(5,n)-430675100|0}),L.bK=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|r>>>17,n=Math.imul(461845907,n),e^n}),L.x=(function(e,t){return this.fv(e^t)}),L.fv=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),L.gx=(function(e,t){return t===e>>31?e:e^t}),L.fN=(function(e){var t=Sa(e);if(t===e)return t;var n=Lc().eN(e),r=n.l,i=n.h;if(4294967296*i+(r>>>0)===e)return r^i;var a=e|0;if(a===e&&1/e!=-1/0)return a;if(e!==e)return 2146959360;var o=wa;return o.setFloat64(0,e,!0),(o.getInt32(0,!0)|0)^(o.getInt32(4,!0)|0)}),L.r=(function(e){if(e===null)return 0;if(typeof e==`number`)return this.fN(+e);if(e instanceof R){var t=Ia(e);return this.gx(t.l,t.h)}return ya(e)}),L.gp=(function(e){throw Cf(new Tf,``+e)}),new V().i(xl,`scala.runtime.Statics$`,{ea:1});var Sl;function W(){return Sl||=new xl,Sl}function Cl(){}L=Cl.prototype=new B,L.constructor=Cl,L.h0=(function(e,t){return setTimeout((()=>{t.ax()}),e)}),new V().i(Cl,`scala.scalajs.js.timers.package$`,{eg:1});var wl;function Tl(){return wl||=new Cl,wl}function El(){}L=El.prototype=new B,L.constructor=El,L.ha=(function(e){if(e instanceof Q)return e.bB;var t=[];return e.Q(new J((e=>t.push(e)|0))),t}),new V().i(El,`scala.scalajs.runtime.Compat$`,{ep:1});var Dl;function Ol(){return Dl||=new El,Dl}function kl(){}L=kl.prototype=new B,L.constructor=kl,L.h1=(function(e){var t=`Illegal command line`+(e.eP()===0?``:e.eP()===1?` after first argument`:` after `+e.eP()+` arguments`)+`: `+e.hi();bu().gG().gt(t+`
`)}),new V().i(kl,`scala.util.CommandLineParser$`,{eq:1});function Al(e){this.cd=null,this.cd=e}L=Al.prototype=new B,L.constructor=Al,L.o=(function(){return`DynamicVariable(`+this.cd+`)`}),new V().i(Al,`scala.util.DynamicVariable`,{es:1});function jl(){}L=jl.prototype=new B,L.constructor=jl;function Ml(){}Ml.prototype=L,L.k=(function(e,t){var n=this.bK(e,t),r=n;return n=r<<13|r>>>19,Math.imul(5,n)-430675100|0}),L.bK=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|r>>>17,n=Math.imul(461845907,n),e^n}),L.x=(function(e,t){return this.bk(e^t)}),L.bk=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),L.eU=(function(e,t,n){var r=e.ab();if(r===0)return n?t:xp(e.ad());var i=t;n||(i=this.k(i,xp(e.ad())));for(var a=0;a<r;)i=this.k(i,W().r(e.ac(a))),a=1+a|0;return this.x(i,r)}),L.hb=(function(e,t){for(var n=0,r=0,i=0,a=1,o=e.g();o.m();){var s=o.i(),c=W().r(s);n=n+c|0,r^=c,a=Math.imul(a,1|c),i=1+i|0}var l=t;return l=this.k(l,n),l=this.k(l,r),l=this.bK(l,a),this.x(l,i)}),L.gF=(function(e,t){var n=e.g(),r=t;if(!n.m())return this.x(r,0);var i=n.i();if(!n.m())return this.x(this.k(r,W().r(i)),1);var a=n.i(),o=W().r(i);r=this.k(r,o);for(var s=r,c=W().r(a),l=c-o|0,u=2;n.m();){r=this.k(r,c);var d=W().r(n.i());if(l!==(d-c|0)||l===0){for(r=this.k(r,d),u=1+u|0;n.m();)r=this.k(r,W().r(n.i())),u=1+u|0;return this.x(r,u)}c=d,u=1+u|0}return this.bk(this.k(this.k(s,l),c))}),L.q=(function(e,t){var n=t,r=Ac().aP(e);switch(r){case 0:return this.x(n,0);case 1:return this.x(this.k(n,W().r(U().aO(e,0))),1);default:var i=W().r(U().aO(e,0));n=this.k(n,i);for(var a=n,o=W().r(U().aO(e,1)),s=o-i|0,c=2;c<r;){n=this.k(n,o);var l=W().r(U().aO(e,c));if(s!==(l-o|0)||s===0){for(n=this.k(n,l),c=1+c|0;c<r;)n=this.k(n,W().r(U().aO(e,c))),c=1+c|0;return this.x(n,r)}o=l,c=1+c|0}return this.bk(this.k(this.k(a,s),o))}}),L.gK=(function(e,t,n,r){return this.bk(this.k(this.k(this.k(r,e),t),n))}),L.go=(function(e,t){var n=t,r=e.e();switch(r){case 0:return this.x(n,0);case 1:return this.x(this.k(n,W().r(e.h(0))),1);default:var i=W().r(e.h(0));n=this.k(n,i);for(var a=n,o=W().r(e.h(1)),s=o-i|0,c=2;c<r;){n=this.k(n,o);var l=W().r(e.h(c));if(s!==(l-o|0)||s===0){for(n=this.k(n,l),c=1+c|0;c<r;)n=this.k(n,W().r(e.h(c))),c=1+c|0;return this.x(n,r)}o=l,c=1+c|0}return this.bk(this.k(this.k(a,s),o))}}),L.gw=(function(e,t){for(var n=0,r=t,i=0,a=0,o=0,s=0,c=e;!c.b();){var l=c.R(),u=c.D(),d=W().r(l);switch(r=this.k(r,d),i){case 0:s=d,i=1;break;case 1:a=d-o|0,i=2;break;case 2:(a!==(d-o|0)||a===0)&&(i=3)}o=d,n=1+n|0,c=u}return i===2?this.gK(s,a,o,t):this.x(r,n)});function Nl(e){this.aE=null,this.cC=null,this.bQ=!1,this.cC=e,Lo(this),this.bQ=!1}L=Nl.prototype=new B,L.constructor=Nl,L.gH=(function(e){this.bQ?(Vo(e),this.cC.ax()):Bo(this,e)}),L.gu=(function(){Ro(this),this.bQ=!0}),new V().i(Nl,`com.raquo.airstream.ownership.OneTimeOwner`,{bn:1,bo:1});function Pl(){}L=Pl.prototype=new B,L.constructor=Pl,L.fH=(function(e){return e!==null}),L.fP=(function(e){return e?``:null}),L.bE=(function(e){return this.fH(e)}),L.bf=(function(e){return this.fP(!!e)}),new V().i(Pl,`com.raquo.laminar.codecs.package$$anon$1`,{bE:1,a2:1});function Fl(e){if(e===null)throw Of(new kf)}L=Fl.prototype=new B,L.constructor=Fl,L.bf=(function(e){return e}),L.bE=(function(e){return e}),new V().i(Fl,`com.raquo.laminar.codecs.package$$anon$2`,{bF:1,a2:1});function Il(e){return new hs(e,new X((e=>e+`px`)))}function Ll(e,t,n,r){}L=Ll.prototype=new _s,L.constructor=Ll,new V().i(Ll,`com.raquo.laminar.keys.CompositeKey`,{c2:1,y:1});function Rl(e,t,n){return e.a0=t,e.aF=n,e}function zl(){this.a0=null,this.aF=null}L=zl.prototype=new _s,L.constructor=zl;function Bl(){}Bl.prototype=L,L.f=(function(e){return new Uu(this,e,new lf(((e,t,n)=>{$o().eY(e,t,n)})))}),new V().i(zl,`com.raquo.laminar.keys.HtmlAttr`,{Y:1,y:1});function Vl(e,t){this.de=null,this.dd=null,this.de=e,this.dd=t}L=Vl.prototype=new _s,L.constructor=Vl,L.f=(function(e){return new Uu(this,e,new lf(((e,t,n)=>{$o().gV(e,t,n)})))}),new V().i(Vl,`com.raquo.laminar.keys.HtmlProp`,{c4:1,y:1});function Hl(e,t,n){this.bW=null,this.bV=null,this.bs=null,this.bt=null,this.bW=e,this.bV=t;var r=n.b()?Ep():new Dp(n.s()+`:`+e);this.bs=r.b()?e:r.s(),this.bt=n.b()?Ep():new Dp(bs().gB(n.s()))}L=Hl.prototype=new _s,L.constructor=Hl,new V().i(Hl,`com.raquo.laminar.keys.SvgAttr`,{c5:1,y:1});function Ul(){}L=Ul.prototype=new B,L.constructor=Ul,L.aN=(function(e){}),new V().i(Ul,`com.raquo.laminar.modifiers.Modifier$$anon$1`,{ca:1,Z:1});function Wl(e,t){if(this.dj=null,this.dj=e,t===null)throw Of(new kf)}L=Wl.prototype=new B,L.constructor=Wl,L.aN=(function(e){var t=bo(),n=(()=>{this.dj.c(e)});if(bo(),t.L)n();else{t.L=!0;try{n()}finally{t.L=!1,_o(t)}}}),new V().i(Wl,`com.raquo.laminar.modifiers.Modifier$$anon$2`,{cb:1,Z:1});function Gl(){}L=Gl.prototype=new B,L.constructor=Gl,new V().i(Gl,`com.raquo.laminar.modifiers.RenderableSeq$collectionSeqRenderable$`,{cd:1,cc:1});var Kl;function ql(){return Kl||=new Gl,Kl}function Jl(e){e.eA(new jo(new sf((()=>{throw od(new q,`Attempting to use owner of unmounted element: `+el($o().fG(e.cr(),($o(),$())),``,` > `,``))}))))}function Yl(e,t,n){return e.bZ=t,e}function Xl(){this.bZ=null}L=Xl.prototype=new B,L.constructor=Xl;function Zl(){}Zl.prototype=L,L.cp=(function(){return this.bZ}),L.bC=(function(e){var t=this.fy();return e.Q(new X((e=>{e.aN(t)}))),t}),L.fy=(function(){return new dp(this,$o().fC(this))}),new V().i(Xl,`com.raquo.laminar.tags.HtmlTag`,{ac:1,a3:1});function Ql(e,t){this.dp=null,this.dp=e}L=Ql.prototype=new B,L.constructor=Ql,new V().i(Ql,`com.raquo.laminar.tags.SvgTag`,{cl:1,a3:1});function $l(){}L=$l.prototype=new B,L.constructor=$l,L.bf=(function(e){return e}),L.bE=(function(e){return e}),new V().i($l,`io.github.nguyenyou.webawesome.laminar.UnionAsStringCodec$$anon$1`,{cv:1,a2:1});function eu(e,t){return e.c1=t,e.fj(),e}function tu(){this.c1=null,this.c0=null,this.c2=!1,this.c3=null,this.c4=!1}L=tu.prototype=new B,L.constructor=tu;function nu(){}nu.prototype=L,L.h8=(function(){return this.c2||=(this.c0=new Gu(this.c1,new J((e=>void 0)),void 0),!0),this.c0}),L.u=(function(e,t){var n=this.h8().bC(new Q([]));return e.Q(new J((e=>{e.c(this).aN(n)}))),t.Q(new J((e=>{e.aN(n)}))),n}),L.aR=(function(){return this.c4||=(this.c3=new rd,!0),this.c3});function ru(){this.c5=null,iu=this,this.c5=ao(67,`1C]4m6m=c4]4]4]4]4]4]4]4]4]3g4]2m9]2m1Jm1m9s4g5mm6]3]4mm12>mEm1m6m1]3]=]DI]1<m24mIs4g2c4w9];]4]<]3m3m=m3mH]8]2m=mBHm3]4mK3{gggg2:g=m@]13]4E]`)}L=ru.prototype=new B,L.constructor=ru,L.fI=(function(e,t){if(e<256)var n=(e-48|0)>>>0<=9?e-48|0:(e-65|0)>>>0<=25?e-55|0:(e-97|0)>>>0<=25?e-87|0:-1;else if((e-65313|0)>>>0<=25)var n=e-65303|0;else if((e-65345|0)>>>0<=25)var n=e-65335|0;else{var r=Nc().fw(this.c5,e),i=r<0?-2-r|0:r;if(i<0)var n=-1;else var a=e-this.c5.a[i]|0,n=a>9?-1:a}return n<t?n:-1}),new V().i(ru,`java.lang.Character$`,{cD:1,a:1});var iu;function au(){return iu||=new ru,iu}function ou(){}L=ou.prototype=new B,L.constructor=ou,L.bh=(function(e){throw new bp(`For input string: "`+e+`"`)}),L.gs=(function(e,t,n){e===null&&cu().bh(e);var r=e.length;r===0&&cu().bh(e);var i=au(),a=e.charCodeAt(0),o=a===45,s=o?-1:0,c=(o||a===43)|0;c>=r&&cu().bh(e);var l=0;for(l=0;c!==r;){var u=i.fI(e.charCodeAt(c),t);(u<0||l>>>0>n>>>0)&&cu().bh(e),l=Math.imul(l,t)+u|0,c=1+c|0}return l>>>0>(2147483647-s|0)>>>0&&cu().bh(e),(l^s)-s|0}),new V().i(ou,`java.lang.Integer$`,{cI:1,a:1});var su;function cu(){return su||=new ou,su}function lu(){}L=lu.prototype=new B,L.constructor=lu;function uu(e){return e instanceof lu||typeof e==`number`||e instanceof R}function du(e,t,n,r,i){this.aI=null,this.aU=null,this.aJ=null,this.aK=0,this.aH=0,this.aI=e,this.aU=t,this.aJ=n,this.aK=r,this.aH=i}L=du.prototype=new B,L.constructor=du,L.d=(function(e){return e instanceof du&&this.aJ===e.aJ&&this.aK===e.aK&&this.aH===e.aH&&this.aI===e.aI&&this.aU===e.aU}),L.o=(function(){var e=``;return this.aI!==`<jscode>`&&(e=``+e+this.aI+`.`),e=``+e+this.aU,this.aJ===null?e+=`(Unknown Source)`:(e=e+`(`+this.aJ,this.aK>=0&&(e=e+`:`+this.aK,this.aH>=0&&(e=e+`:`+this.aH)),e+=`)`),e}),L.j=(function(){return xp(this.aI)^xp(this.aU)^xp(this.aJ)^this.aK^this.aH});var fu=new V().i(du,`java.lang.StackTraceElement`,{am:1,a:1});function pu(){}L=pu.prototype=new B,L.constructor=pu,L.gC=(function(e,t,n){for(var r=t+n|0,i=``,a=t;a!==r;)i+=``+Ca(e.a[a]),a=1+a|0;return i}),new V().i(pu,`java.lang.String$`,{cS:1,a:1});var mu;function hu(){return mu||=new pu,mu}function gu(e,t,n,r,i){return e.e2=t,e.e3=i,i&&e.g4(),e}var _u=class extends Error{constructor(){super(),this.e2=null,this.e3=!1,this.e1=null,this.bv=null}bg(){return this.e2}g4(){var e=this instanceof qp?this.O:this;return this.e1=Object.prototype.toString.call(e)===`[object Error]`?e:Error.captureStackTrace===void 0||Object.isSealed(this)?/* @__PURE__ */ Error():(Error.captureStackTrace(this),this),this}gf(){return this.bv===null&&(this.bv=this.e3?uc().g3(this.e1):new(fu.r()).C(0)),this.bv}o(){var e=_a(this),t=this.bg();return t===null?e:e+`: `+t}j(){return La.prototype.j.call(this)}d(e){return La.prototype.d.call(this,e)}get message(){var e=this.bg();return e===null?``:e}get name(){return _a(this)}toString(){return this.o()}};function vu(){this.e4=null,yu=this,this.e4=new Al(hc().dZ)}L=vu.prototype=new B,L.constructor=vu,L.gG=(function(){return this.e4.cd}),new V().i(vu,`scala.Console$`,{d3:1,dU:1});var yu;function bu(){return yu||=new vu,yu}function xu(){}L=xu.prototype=new B,L.constructor=xu;function Su(){}Su.prototype=L,L.o=(function(){return`<function1>`});function Cu(){}L=Cu.prototype=new Uc,L.constructor=Cu;function wu(){}wu.prototype=L,L.hf=(function(e){if(e===null)return null;if(e.a.length===0){var t=Rp();return om(),t.ej}return new eh(e)});function Tu(e,t){if(t===e)e.eu(rp().eL(t));else for(var n=t.g();n.m();)e.cf(n.i());return e}function Eu(){}L=Eu.prototype=new B,L.constructor=Eu;function Du(){}Du.prototype=L,L.o=(function(){return`<function0>`});function Ou(){}L=Ou.prototype=new B,L.constructor=Ou;function ku(){}ku.prototype=L,L.o=(function(){return`<function1>`});function Au(){}L=Au.prototype=new B,L.constructor=Au;function ju(){}ju.prototype=L,L.o=(function(){return`<function2>`});function Mu(){}L=Mu.prototype=new B,L.constructor=Mu;function Nu(){}Nu.prototype=L,L.o=(function(){return`<function3>`});function Pu(e){this.bA=!1,this.bA=e}L=Pu.prototype=new B,L.constructor=Pu,L.o=(function(){return``+this.bA}),new V().i(Pu,`scala.runtime.BooleanRef`,{e2:1,a:1});function Fu(e){this.b4=0,this.b4=e}L=Fu.prototype=new B,L.constructor=Fu,L.o=(function(){return``+this.b4}),new V().i(Fu,`scala.runtime.IntRef`,{e4:1,a:1});function Iu(){this.p=0,this.er=0,this.fg=0,this.ff=0,Lu=this,this.p=xp(`Seq`),this.er=xp(`Map`),this.fg=xp(`Set`),this.ff=this.hb($(),this.er)}L=Iu.prototype=new Ml,L.constructor=Iu,L.eX=(function(e){return pm(e)?this.go(e,this.p):e instanceof Gm?this.gw(e,this.p):this.gF(e,this.p)}),new V().i(Iu,`scala.util.hashing.MurmurHash3$`,{eu:1,et:1});var Lu;function G(){return Lu||=new Iu,Lu}var Ru=class extends _u{};function zu(){this.bN=null,this.cv=null,this.cw=null,Bu=this,this.bN=rp().ev(U().ae(new(Vc.r()).C([]))),this.cv=new X((e=>{try{console.error(this.gb(e)+`
`+this.ge(e,`
`))}catch(e){var t=e instanceof _u?e:new qp(e);console.error(`Error in AirstreamError.consoleErrorCallback:`),console.error(t)}})),this.cw=new X((e=>{console.warn(`Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.`);var t=e;throw t instanceof qp?t.O:t})),this.gL(this.cv)}L=zu.prototype=new B,L.constructor=zu,L.gb=(function(e){try{var t=e.bg()}catch{var t=`(Unable to get the message for this error - exception occurred in its getMessage)`}return ga(e).co()+`: `+t}),L.ge=(function(e,t){try{return el(ld().hf(e.gf()),``,t,``)}catch{return`(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)`}}),L.gL=(function(e){this.bN.cf(e)}),L.ct=(function(e){for(var t=this.bN.g();t.m();){var n=t.i();try{n.c(e)}catch(e){var r=e instanceof _u?e:new qp(e),i=this.cw;if(n===null?i===null:n.d(i))throw r instanceof qp?r.O:r;console.warn(`Error processing an unhandled error callback:`),Tl().h0(0,new sf((e=>(()=>{throw e instanceof qp?e.O:e}))(r)))}}}),new V().i(zu,`com.raquo.airstream.core.AirstreamError$`,{ba:1,dS:1,dT:1});var Bu;function Vu(){return Bu||=new zu,Bu}function Hu(e,t,n){return new Wl(new X((e=>{(rs(),new es(t,null,null)).Q(new X((e=>(t=>{Ds().cg(e,t,void 0)}))(e)))})),ws())}function Uu(e,t,n){this.dh=null,this.di=null,this.dg=null,this.dh=e,this.di=t,this.dg=n}L=Uu.prototype=new B,L.constructor=Uu,L.aN=(function(e){this.dg.ft(e,this.dh,this.di)}),new V().i(Uu,`com.raquo.laminar.modifiers.KeySetter`,{c8:1,Z:1,ce:1});function Wu(e,t){if(this.bY=null,this.dl=null,this.dm=null,this.dl=t,Jl(this),e===null)throw od(new q,`Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load`);if(!$o().gr(e,document))throw od(new q,`Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering`);this.dm=e,this.gA()}L=Wu.prototype=new B,L.constructor=Wu,L.bG=(function(){return this.bY}),L.eA=(function(e){this.bY=e}),L.gA=(function(){return this.bY.et(),Ds().cg(this,this.dl,void 0)}),L.cr=(function(){return this.dm}),new V().i(Wu,`com.raquo.laminar.nodes.RootNode`,{cj:1,ab:1,aa:1});function Gu(e,t,n){this.bZ=null,this.dn=null,this.dn=e,Yl(this,e,!1)}L=Gu.prototype=new Zl,L.constructor=Gu,L.cp=(function(){return this.dn}),new V().i(Gu,`com.raquo.laminar.tags.CustomHtmlTag`,{ck:1,ac:1,a3:1});function Ku(){this.c1=null,this.c0=null,this.c2=!1,this.c3=null,this.c4=!1,this.dw=null,this.dx=!1,this.du=null,this.dv=!1,this.ds=null,this.dt=!1,this.dC=null,this.dD=!1,this.dA=null,this.dB=!1,this.dq=null,this.dr=!1,this.dy=null,this.dz=!1,this.dE=null,this.dH=!1,this.dF=null,this.dG=!1,eu(this,`wa-color-picker`)}L=Ku.prototype=new nu,L.constructor=Ku,L.v=(function(){return this.dx||=(this.dw=(Y(),Rl(new zl,`label`,us().aj)),!0),this.dw}),L.gl=(function(){return this.dv||=(this.du=(Y(),Rl(new zl,`hint`,us().aj)),!0),this.du}),L.bH=(function(){return this.dt||=(this.ds=Xu(),!0),this.ds}),L.cu=(function(){return this.dD||=(this.dC=$u(),!0),this.dC}),L.gI=(function(){return this.dB||=(this.dA=nd(),!0),this.dA}),L.fJ=(function(){return this.dr||=(this.dq=(Y(),Rl(new zl,`disabled`,us().bU)),!0),this.dq}),L.gE=(function(){return this.dz||=(this.dy=(Y(),Rl(new zl,`opacity`,us().bU)),!0),this.dy}),L.h6=(function(){return this.dH||=(this.dE=(Y(),Rl(new zl,`swatches`,us().aj)),!0),this.dE}),L.h7=(function(){return this.dG||=(this.dF=(Y(),new Vl(`swatches`,new Fl(us()))),!0),this.dF}),L.fj=(function(){return ma}),new V().i(Ku,`io.github.nguyenyou.webawesome.laminar.ColorPicker$`,{cq:1,cw:1,cu:1});var qu;function K(){return qu||=new Ku,qu}function Ju(){this.a0=null,this.aF=null,this.dI=null,this.dJ=!1,this.dK=null,this.dL=!1,this.dM=null,this.dN=!1,this.dO=null,this.dP=!1,Rl(this,`format`,new $l)}L=Ju.prototype=new Bl,L.constructor=Ju,L.gk=(function(){return this.dJ||=(this.dI=Xu().f(`hex`),!0),this.dI}),L.gm=(function(){return this.dL||=(this.dK=Xu().f(`hsl`),!0),this.dK}),L.gn=(function(){return this.dN||=(this.dM=Xu().f(`hsv`),!0),this.dM}),L.gR=(function(){return this.dP||=(this.dO=Xu().f(`rgb`),!0),this.dO}),new V().i(Ju,`io.github.nguyenyou.webawesome.laminar.CommonKeys$ColorPickerFormat$`,{cr:1,Y:1,y:1});var Yu;function Xu(){return Yu||=new Ju,Yu}function Zu(){this.a0=null,this.aF=null,this.dQ=null,this.dR=!1,this.dS=null,this.dT=!1,this.dU=null,this.dV=!1,Rl(this,`size`,new $l)}L=Zu.prototype=new Bl,L.constructor=Zu,L.gv=(function(){return this.dR||=(this.dQ=$u().f(`large`),!0),this.dQ}),L.gz=(function(){return this.dT||=(this.dS=$u().f(`medium`),!0),this.dS}),L.h2=(function(){return this.dV||=(this.dU=$u().f(`small`),!0),this.dU}),new V().i(Zu,`io.github.nguyenyou.webawesome.laminar.CommonKeys$ComponentSize$`,{cs:1,Y:1,y:1});var Qu;function $u(){return Qu||=new Zu,Qu}function ed(){this.a0=null,this.aF=null,this.dW=null,this.dX=!1,Rl(this,`placement`,new $l)}L=ed.prototype=new Bl,L.constructor=ed,L.fx=(function(){return this.dX||=(this.dW=nd().f(`bottom-start`),!0),this.dW}),new V().i(ed,`io.github.nguyenyou.webawesome.laminar.CommonKeys$Placement$`,{ct:1,Y:1,y:1});var td;function nd(){return td||=new ed,td}function rd(){}L=rd.prototype=new Su,L.constructor=rd,L.c=(function(e){return Y().n}),new V().i(rd,`io.github.nguyenyou.webawesome.laminar.WebComponent$toL$`,{cx:1,d4:1,e:1});function id(e){if(e.af.Z)return e.af.Q().co()+`[]`;for(var t=e.af.N,n=t.length-1|0;n>=0&&t.charCodeAt(n)===36;)n=n-1|0;if(n>=0&&(t.charCodeAt(n)-48|0)>>>0<=9){for(n=n-1|0;n>=0&&(t.charCodeAt(n)-48|0)>>>0<=9;)n=n-1|0;for(;n>=0&&t.charCodeAt(n)===36;)n=n-1|0}for(;;){if(n>=0)var r=n,i=t.charCodeAt(r),a=i!==36&&i!==46;else var a=!1;if(a)n=n-1|0;else break}var o=1+n|0;return t.substring(o)}function ad(e){this.c6=null,this.af=e}L=ad.prototype=new B,L.constructor=ad,L.o=(function(){return(this.af.Y?`interface `:this.af.X?``:`class `)+this.af.N}),L.co=(function(){return this.c6===null&&(this.c6=id(this)),this.c6}),new V().i(ad,`java.lang.Class`,{cE:1,a:1,L:1});function od(e,t){return gu(e,t,null,!0,!0),e}var q=class extends _u{};new V().i(q,`java.lang.Exception`,{K:1,s:1,a:1});function sd(){this.fb=null,cd=this,ep(),this.fb=xd()}L=sd.prototype=new wu,L.constructor=sd,new V().i(sd,`scala.Predef$`,{de:1,d7:1,d8:1});var cd;function ld(){return cd||=new sd,cd}function ud(e,t){return e.by=t,e}function dd(){this.by=null}L=dd.prototype=new B,L.constructor=dd;function fd(){}fd.prototype=L,L.bI=(function(e){return this.by.cm(e,rm())}),L.bD=(function(e){return this.by.cm(e,rm())});function pd(e,t){return new Wf(e).fB(t)}function md(e,t,n){var r=t>0?t:0,i=n<0?-1:n<=r?0:n-r|0;return i===0?vd().F:new qf(e,r,i)}function hd(e,t){for(var n=t.g();e.m();)if(!n.m()||!ml().C(e.i(),n.i()))return!1;return!n.m()}function gd(){this.F=null,_d=this,this.F=new Bf}L=gd.prototype=new B,L.constructor=gd,new V().i(gd,`scala.collection.Iterator$`,{dq:1,a:1,X:1});var _d;function vd(){return _d||=new gd,_d}function yd(){}L=yd.prototype=new B,L.constructor=yd,new V().i(yd,`scala.collection.immutable.Map$`,{dG:1,a:1,dv:1});var bd;function xd(){return bd||=new yd,bd}function Sd(e){this.ek=null,this.ek=e}L=Sd.prototype=new Du,L.constructor=Sd,L.ax=(function(){return(0,this.ek)()}),new V().i(Sd,`scala.runtime.AbstractFunction0.$$Lambda$07eded5776954a9c145e92c329afd52873ad179c`,{dY:1,b5:1,ao:1});function J(e){this.el=null,this.el=e}L=J.prototype=new ku,L.constructor=J,L.c=(function(e){return(0,this.el)(e)}),new V().i(J,`scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919`,{dZ:1,b6:1,e:1});var Cd=new V().i(0,`scala.runtime.Nothing$`,{e5:1,s:1,a:1});function wd(){}L=wd.prototype=new B,L.constructor=wd,L.g9=(function(e){return(t=>e.c(t))}),new V().i(wd,`scala.scalajs.js.Any$`,{eb:1,ec:1,ed:1});var Td;function Ed(){return Td||=new wd,Td}function Dd(){}L=Dd.prototype=new Du,L.constructor=Dd;function Od(){}Od.prototype=L;function kd(){}L=kd.prototype=new ku,L.constructor=kd;function Ad(){}Ad.prototype=L;function jd(){}L=jd.prototype=new ju,L.constructor=jd;function Md(){}Md.prototype=L;function Nd(){}L=Nd.prototype=new Nu,L.constructor=Nd;function Pd(){}Pd.prototype=L;function Fd(e,t,n,r){if(this.cx=null,r===null)throw Of(new kf);this.cx=void 0}L=Fd.prototype=new B,L.constructor=Fd,L.o=(function(){return so(this)}),new V().i(Fd,`com.raquo.airstream.core.Observer$$anon$8`,{be:1,bf:1,bb:1,bc:1});function Id(e){if(this.cJ=null,this.cK=!1,this.f2=null,e===null)throw Of(new kf);ps(this)}L=Id.prototype=new B,L.constructor=Id,L.h5=(function(){return this.cK||=(this.cJ=new Ql(`svg`,!1),!0),this.cJ}),new V().i(Id,`com.raquo.laminar.api.Laminar$svg$`,{by:1,c1:1,bH:1,bJ:1});function Ld(){this.n=null,Rd=this,this.n=new vm}L=Ld.prototype=new B,L.constructor=Ld,new V().i(Ld,`com.raquo.laminar.api.package$`,{bB:1,a8:1,a9:1,a7:1});var Rd;function Y(){return Rd||=new Ld,Rd}function zd(e,t,n){return e.ak=t,e.al=n,e}function Bd(){this.ak=null,this.al=null}L=Bd.prototype=new _s,L.constructor=Bd;function Vd(){}Vd.prototype=L,L.f=(function(e){return new Uu(this,ba(e),new lf(((e,t,n)=>{$o().eZ(e,t,n)})))});function Hd(){}L=Hd.prototype=new B,L.constructor=Hd;function Ud(){}Ud.prototype=L;function Wd(e,t){return e===t}function Gd(e){return e?1231:1237}var Kd=new V().i(0,`java.lang.Boolean`,{cB:1,a:1,N:1,L:1},(e=>typeof e==`boolean`));function qd(e){return e}function Jd(e,t){return t instanceof ha&&e===t.c}var Yd=new V().i(0,`java.lang.Character`,{ai:1,a:1,N:1,L:1},(e=>e instanceof ha)),Xd=class extends q{};function Zd(){this.l=null,this.l=``}L=Zd.prototype=new B,L.constructor=Zd,L.fr=(function(e){var t=hu().gC(e,0,e.a.length);return this.l=``+this.l+t,this}),L.o=(function(){return this.l}),L.e=(function(){return this.l.length}),L.ex=(function(e){return this.l.charCodeAt(e)}),new V().i(Zd,`java.lang.StringBuilder`,{cT:1,a4:1,ag:1,a:1});function Qd(){}L=Qd.prototype=new B,L.constructor=Qd,L.o=(function(){return`<function1>`}),L.fu=(function(e){throw new Pf(e)}),L.c=(function(e){this.fu(e)}),new V().i(Qd,`scala.PartialFunction$$anon$1`,{dd:1,e:1,g:1,a:1});function $d(){}L=$d.prototype=new B,L.constructor=$d;function ef(){}ef.prototype=L,L.t=(function(){return-1}),L.aM=(function(e,t,n,r){return tl(this,e,t,n,r)}),L.g=(function(){return this}),L.bF=(function(e){return this.bl(e,-1)}),L.bl=(function(e,t){return md(this,e,t)}),L.o=(function(){return`<iterator>`});function tf(e,t){return e.bz=t,e}function nf(){this.bz=null}L=nf.prototype=new B,L.constructor=nf;function rf(){}rf.prototype=L,L.ev=(function(e){return this.bz.bD(e)}),L.eL=(function(e){return this.bz.bI(e)}),L.bD=(function(e){return this.ev(e)}),L.bI=(function(e){return this.eL(e)});function af(e){return e.az(0)===0}function of(e,t){var n=e.t();if(n!==-1){var r=t.t();if(r!==-1){if(n!==r)return!1;if(n===0)return!0}}return hd(e.g(),t)}function sf(e){this.eo=null,this.eo=e}L=sf.prototype=new Od,L.constructor=sf,L.ax=(function(){return(0,this.eo)()}),new V().i(sf,`scala.scalajs.runtime.AnonFunction0.$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d`,{ei:1,eh:1,b5:1,ao:1});function X(e){this.ep=null,this.ep=e}L=X.prototype=new Ad,L.constructor=X,L.c=(function(e){return(0,this.ep)(e)}),new V().i(X,`scala.scalajs.runtime.AnonFunction1.$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1`,{ek:1,ej:1,b6:1,e:1});function cf(e){this.fe=null,this.fe=e}L=cf.prototype=new Md,L.constructor=cf,new V().i(cf,`scala.scalajs.runtime.AnonFunction2.$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7`,{em:1,el:1,e0:1,d5:1});function lf(e){this.eq=null,this.eq=e}L=lf.prototype=new Pd,L.constructor=lf,L.ft=(function(e,t,n){return(0,this.eq)(e,t,n)}),new V().i(lf,`scala.scalajs.runtime.AnonFunction3.$$Lambda$73f37e31ba038fe839c174212837da323f140c96`,{eo:1,en:1,e1:1,d6:1});function uf(e){e.bX=new Wo(new sf((()=>{e.aG.et()})),new sf((()=>{e.aG.fE()})))}function df(e,t){pf(e,e.bu,t)&&mf(e,t)}function ff(e,t){var n=e.bu;e.bu=t,pf(e,n,t)||mf(e,t)}function pf(e,t,n){var r=!t.b()&&!t.s().bG().z.b(),i=!n.b()&&!n.s().bG().z.b();return r&&!i}function mf(e,t){hf(e,t.b()?Ep():new Dp(t.s().bG()))}function hf(e,t){if(t.b())e.bX.fA();else{var n=t.s();e.bX.gX(n)}}function gf(){}L=gf.prototype=new Ud,L.constructor=gf;function _f(){}_f.prototype=L;var vf=class extends Xd{constructor(e){super(),gu(this,e,null,!0,!0)}};new V().i(vf,`java.lang.ArithmeticException`,{cA:1,O:1,K:1,s:1,a:1});var yf=new V().i(0,`java.lang.Byte`,{cC:1,R:1,a:1,N:1,L:1},(e=>ka(e)));function bf(e,t){return gu(e,t,null,!0,!0),e}function xf(e){return gu(e,null,null,!0,!0),e}var Sf=class extends Xd{};new V().i(Sf,`java.lang.IllegalArgumentException`,{ak:1,O:1,K:1,s:1,a:1});function Cf(e,t){return gu(e,t,null,!0,!0),e}function wf(e,t){return gu(e,`Index out of range: `+t,null,!0,!0),e}var Tf=class extends Xd{};new V().i(Tf,`java.lang.IndexOutOfBoundsException`,{cG:1,O:1,K:1,s:1,a:1});function Ef(){}L=Ef.prototype=new Ud,L.constructor=Ef,new V().i(Ef,`java.lang.JSConsoleBasedPrintStream$DummyOutputStream`,{cK:1,af:1,ad:1,ah:1,ae:1});function Df(e,t){return gu(e,t,null,!0,!0),e}function Of(e){return gu(e,null,null,!0,!0),e}var kf=class extends Xd{};new V().i(kf,`java.lang.NullPointerException`,{cL:1,O:1,K:1,s:1,a:1});var Af=new V().i(0,`java.lang.Short`,{cO:1,R:1,a:1,N:1,L:1},(e=>Aa(e))),jf=class extends Xd{constructor(e){super(),gu(this,e,null,!0,!0)}};new V().i(jf,`java.lang.UnsupportedOperationException`,{cW:1,O:1,K:1,s:1,a:1});var Mf=class extends Xd{constructor(e){super(),gu(this,e,null,!0,!0)}};new V().i(Mf,`java.util.NoSuchElementException`,{d0:1,O:1,K:1,s:1,a:1});function Nf(e){if(!e.e6){if(e.bw===null)var t=`null`;else{var n=U().fp(e.bw),r=n===null?`of a JS class`:`of class `+n.af.N;try{var t=e.bw+` (`+r+`)`}catch{var t=`an instance `+r}}e.e5=t,e.e6=!0}return e.e5}var Pf=class extends Xd{constructor(e){super(),this.bw=null,this.e5=null,this.e6=!1,this.bw=e,gu(this,null,null,!0,!0)}bg(){return Nf(this)}};new V().i(Pf,`scala.MatchError`,{d9:1,O:1,K:1,s:1,a:1});function Ff(){}L=Ff.prototype=new B,L.constructor=Ff;function If(){}If.prototype=L,L.bj=(function(){return new Lf(this)}),L.b=(function(){return this===Ep()}),L.t=(function(){return!this.b()|0}),L.g=(function(){return this.b()?vd().F:new Vf(this.s())});function Lf(e){if(this.aV=0,this.ea=0,this.e9=null,e===null)throw Of(new kf);this.e9=e,this.aV=0,this.ea=e.ab()}L=Lf.prototype=new ef,L.constructor=Lf,L.m=(function(){return this.aV<this.ea}),L.i=(function(){var e=this.e9.ac(this.aV);return this.aV=1+this.aV|0,e}),new V().i(Lf,`scala.Product$$anon$1`,{df:1,P:1,b:1,c:1,Q:1});function Rf(e){this.by=null,ud(this,e)}L=Rf.prototype=new fd,L.constructor=Rf,new V().i(Rf,`scala.collection.ClassTagSeqFactory$AnySeqDelegate`,{dl:1,dk:1,a:1,X:1,a1:1});function zf(e){return el(e,e.ay()+`(`,`, `,`)`)}function Bf(){}L=Bf.prototype=new ef,L.constructor=Bf,L.m=(function(){return!1}),L.gD=(function(){throw new Mf(`next on empty iterator`)}),L.t=(function(){return 0}),L.i=(function(){this.gD()}),L.bl=(function(e,t){return this}),new V().i(Bf,`scala.collection.Iterator$$anon$19`,{dr:1,P:1,b:1,c:1,Q:1});function Vf(e){this.ed=null,this.aY=!1,this.ed=e,this.aY=!1}L=Vf.prototype=new ef,L.constructor=Vf,L.m=(function(){return!this.aY}),L.i=(function(){return this.aY?vd().F.i():(this.aY=!0,this.ed)}),L.bl=(function(e,t){return this.aY||e>0||t===0?vd().F:this}),new V().i(Vf,`scala.collection.Iterator$$anon$20`,{ds:1,P:1,b:1,c:1,Q:1});function Hf(e){for(;;)if(e.w instanceof Wf){var t=e.w;if(e.w=t.w,e.a2=t.a2,t.H!==null){e.G===null&&(e.G=t.G);var n=t.G;n===null&&vl().bL(),n.aZ=e.H,e.H=t.H}}else return}function Uf(e){for(;;)if(e.H===null)return e.w=null,e.G=null,!1;else{if(e.w=e.H.gj(),e.G===e.H){var t=e.G;t===null&&vl().bL(),e.G=t.aZ}if(e.H=e.H.aZ,Hf(e),e.a2)return!0;if(!(e.w!==null&&e.w.m()))continue;return e.a2=!0,!0}}function Wf(e){this.w=null,this.H=null,this.G=null,this.a2=!1,this.w=e,this.H=null,this.G=null,this.a2=!1}L=Wf.prototype=new ef,L.constructor=Wf,L.m=(function(){return this.a2?!0:this.w===null?!1:this.w.m()?(this.a2=!0,!0):Uf(this)}),L.i=(function(){if(this.m()){this.a2=!1;var e=this.w;return e===null&&vl().bL(),e.i()}return vd().F.i()}),L.fB=(function(e){var t=new nl(e,null);if(this.H===null)this.H=t,this.G=t;else{var n=this.G;n===null&&vl().bL(),n.aZ=t,this.G=t}return this.w===null&&(this.w=vd().F),this}),new V().i(Wf,`scala.collection.Iterator$ConcatIterator`,{au:1,P:1,b:1,c:1,Q:1});function Gf(e){for(;e.W>0;)e.a3.m()?(e.a3.i(),e.W=e.W-1|0):e.W=0}function Kf(e,t){if(e.A<0)return-1;var n=e.A-t|0;return n<0?0:n}function qf(e,t,n){this.a3=null,this.A=0,this.W=0,this.a3=e,this.A=n,this.W=t}L=qf.prototype=new ef,L.constructor=qf,L.t=(function(){var e=this.a3.t();if(e<0)return-1;var t=e-this.W|0,n=t<0?0:t;if(this.A<0)return n;var r=this.A;return r<n?r:n}),L.m=(function(){return Gf(this),this.A!==0&&this.a3.m()}),L.i=(function(){return Gf(this),this.A>0?(this.A=this.A-1|0,this.a3.i()):this.A<0?this.a3.i():vd().F.i()}),L.bl=(function(e,t){var n=e>0?e:0;if(t<0)var r=Kf(this,n);else if(t<=n)var r=0;else if(this.A<0)var r=t-n|0;else var i=Kf(this,n),a=t-n|0,r=i<a?i:a;var o=this.W+n|0;return r===0?vd().F:o<0?(this.W=2147483647,this.A=0,pd(this,new Sd((()=>new qf(this.a3,o-2147483647|0,r))))):(this.W=o,this.A=r,this)}),new V().i(qf,`scala.collection.Iterator$SliceIterator`,{du:1,P:1,b:1,c:1,Q:1});function Jf(e,t){if(t<0)throw Cf(new Tf,``+t);var n=e.fO(t);if(n.b())throw Cf(new Tf,``+t);return n.R()}function Yf(e,t){return mm(t)?Xf(e,e,t):of(e,t)}function Xf(e,t,n){for(var r=n,i=t;;)if(i===r)return!0;else{if(!i.b()&&!r.b()&&ml().C(i.R(),r.R())){var a=i.D(),o=r.D();i=a,r=o;continue}return i.b()&&r.b()}}function Zf(e){if(this.b1=null,e===null)throw Of(new kf);this.b1=e}L=Zf.prototype=new ef,L.constructor=Zf,L.m=(function(){return!this.b1.b()}),L.i=(function(){var e=this.b1.R();return this.b1=this.b1.D(),e}),new V().i(Zf,`scala.collection.StrictOptimizedLinearSeqOps$$anon$1`,{dz:1,P:1,b:1,c:1,Q:1});function Qf(){$f=this,$(),$()}L=Qf.prototype=new B,L.constructor=Qf,L.bD=(function(e){return $().eT(e)}),L.bI=(function(e){return $().eT(e)}),new V().i(Qf,`scala.collection.immutable.List$`,{dF:1,a:1,X:1,a1:1,ay:1});var $f;function ep(){return $f||=new Qf,$f}function tp(){this.bz=null,tf(this,sp())}L=tp.prototype=new rf,L.constructor=tp,new V().i(tp,`scala.collection.mutable.Buffer$`,{dM:1,dw:1,a:1,X:1,a1:1});var np;function rp(){return np||=new tp,np}function ip(e){this.en=null,this.b5=0,this.em=0,this.en=e,this.b5=0,this.em=e.ab()}L=ip.prototype=new ef,L.constructor=ip,L.m=(function(){return this.b5<this.em}),L.i=(function(){var e=this.en.ac(this.b5);return this.b5=1+this.b5|0,e}),new V().i(ip,`scala.runtime.ScalaRunTime$$anon$1`,{e9:1,P:1,b:1,c:1,Q:1});function ap(){}L=ap.prototype=new B,L.constructor=ap,L.bD=(function(e){return this.eM(e)}),L.eM=(function(e){return Tu(uh(new dh),e).eV()}),L.bI=(function(e){return this.eM(e)}),new V().i(ap,`scala.scalajs.js.WrappedArray$`,{ef:1,ay:1,a:1,X:1,a1:1});var op;function sp(){return op||=new ap,op}var cp=class e extends Ru{constructor(e,t){super(),this.aB=null,this.aA=0,this.aB=e,this.aA=t,gu(this,`Transaction depth exceeded maxDepth = `+t+`: Execution of `+e+" aborted. See `Transaction.maxDepth`.",null,!0,!0)}bj(){return new Lf(this)}j(){var e=-889275714;return e=W().k(e,xp(`TransactionDepthExceeded`)),e=W().k(e,W().r(this.aB)),e=W().k(e,this.aA),W().x(e,2)}d(t){if(this===t)return!0;if(t instanceof e){if(this.aA===t.aA){var n=this.aB,r=t.aB;return n===null?r===null:n===r}return!1}return!1}ab(){return 2}ad(){return`TransactionDepthExceeded`}ac(e){if(e===0)return this.aB;if(e===1)return this.aA;throw Cf(new Tf,``+e)}o(){return`TransactionDepthExceeded: `+this.aB+`; maxDepth: `+this.aA}};new V().i(cp,`com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded`,{a6:1,b9:1,s:1,a:1,d:1,S:1});function lp(e){this.ak=null,this.al=null,this.d5=null,this.d6=!1,zd(this,e,$())}L=lp.prototype=new Vd,L.constructor=lp,L.ey=(function(){return this.d6||=(this.d5=this.f(`column`),!0),this.d5}),new V().i(lp,`com.raquo.laminar.defs.styles.StyleProps$$anon$30`,{bP:1,V:1,y:1,T:1,U:1,bT:1});function up(e){this.ak=null,this.al=null,this.d7=null,this.d8=!1,zd(this,e,$())}L=up.prototype=new Vd,L.constructor=up,L.f1=(function(){return this.d8||=(this.d7=this.f(`wrap`),!0),this.d7}),new V().i(up,`com.raquo.laminar.defs.styles.StyleProps$$anon$31`,{bQ:1,V:1,y:1,T:1,U:1,bV:1});function dp(e,t){this.bu=null,this.aG=null,this.bX=null,this.dk=null,this.M=null,this.dk=e,this.M=t,this.bu=Ep(),Jl(this),uf(this)}L=dp.prototype=new B,L.constructor=dp,L.aN=(function(e){Ds().cg(e,this,void 0)}),L.bG=(function(){return this.aG}),L.eA=(function(e){this.aG=e}),L.o=(function(){return`ReactiveHtmlElement(`+(this.M===null?`tag=`+this.dk.cp():this.M.outerHTML)+`)`}),L.cr=(function(){return this.M}),new V().i(dp,`com.raquo.laminar.nodes.ReactiveHtmlElement`,{ci:1,ab:1,Z:1,cf:1,aa:1,ch:1});function fp(e,t){return Object.is(e,t)}function pp(e){var t=e|0;if(t===e&&1/e!=-1/0)return t;if(e!==e)return 2146959360;var n=wa;return n.setFloat64(0,e,!0),(n.getInt32(0,!0)|0)^(n.getInt32(4,!0)|0)}var mp=new V().i(0,`java.lang.Double`,{aj:1,R:1,a:1,N:1,L:1,W:1},(e=>typeof e==`number`)),hp=new V().i(0,`java.lang.Float`,{cF:1,R:1,a:1,N:1,L:1,W:1},(e=>Ma(e))),gp=new V().i(0,`java.lang.Integer`,{cH:1,R:1,a:1,N:1,L:1,W:1},(e=>ja(e)));function _p(e,t,n){if(n instanceof R){var r=n,i=r.l,a=r.h;return(e^i|t^a)===0}return!1}function vp(e,t){return e^t}var yp=new V().i(0,`java.lang.Long`,{al:1,R:1,a:1,N:1,L:1,W:1},(e=>e instanceof R)),bp=class extends Sf{constructor(e){super(),gu(this,e,null,!0,!0)}};new V().i(bp,`java.lang.NumberFormatException`,{cM:1,ak:1,O:1,K:1,s:1,a:1});function xp(e){for(var t=e.length,n=0,r=0;r!==t;)n=((n<<5)-n|0)+e.charCodeAt(r)|0,r=1+r|0;return n}function Sp(e,t){return e===t}var Cp=new V().i(0,`java.lang.String`,{cR:1,a:1,N:1,a4:1,L:1,W:1},(e=>typeof e==`string`));function wp(){}L=wp.prototype=new If,L.constructor=wp,L.j=(function(){return 2433880}),L.o=(function(){return`None`}),L.ab=(function(){return 0}),L.ad=(function(){return`None`}),L.ac=(function(e){throw wf(new Tf,e)}),L.ga=(function(){throw new Mf(`None.get`)}),L.s=(function(){this.ga()}),new V().i(wp,`scala.None$`,{da:1,ap:1,b:1,d:1,S:1,a:1});var Tp;function Ep(){return Tp||=new wp,Tp}function Dp(e){this.aW=null,this.aW=e}L=Dp.prototype=new If,L.constructor=Dp,L.j=(function(){return G().eU(this,1323286827,!0)}),L.d=(function(e){return this===e||e instanceof Dp&&ml().C(this.aW,e.aW)}),L.o=(function(){return U().fl(this)}),L.ab=(function(){return 1}),L.ad=(function(){return`Some`}),L.ac=(function(e){if(e===0)return this.aW;throw wf(new Tf,e)}),L.s=(function(){return this.aW}),new V().i(Dp,`scala.Some`,{aq:1,ap:1,b:1,d:1,S:1,a:1});function Op(){}L=Op.prototype=new B,L.constructor=Op;function kp(){}kp.prototype=L,L.t=(function(){return-1}),L.Q=(function(e){$c(this,e)}),L.aM=(function(e,t,n,r){return tl(this,e,t,n,r)}),L.ay=(function(){return this.aQ()});function Z(e){this.bx=null,this.V=0,this.aX=0,this.bx=e,this.V=0,this.aX=Ac().aP(this.bx)}L=Z.prototype=new ef,L.constructor=Z,L.t=(function(){return this.aX-this.V|0}),L.m=(function(){return this.V<this.aX}),L.i=(function(){this.V>=Ac().aP(this.bx)&&vd().F.i();var e=U().aO(this.bx,this.V);return this.V=1+this.V|0,e}),L.bF=(function(e){if(e>0){var t=this.V+e|0;if(t<0)var n=this.aX;else var r=this.aX,n=r<t?r:t;this.V=n}return this}),new V().i(Z,`scala.collection.ArrayOps$ArrayIterator`,{dj:1,P:1,b:1,c:1,Q:1,a:1});function Ap(e,t){return t<0?0:t>e.N?e.N:t}function jp(e){this.ec=null,this.a1=0,this.N=0,this.ec=e,this.a1=0,this.N=e.e()}L=jp.prototype=new ef,L.constructor=jp,L.t=(function(){return this.N}),L.m=(function(){return this.N>0}),L.i=(function(){if(this.N>0){var e=this.ec.h(this.a1);return this.a1=1+this.a1|0,this.N=this.N-1|0,e}return vd().F.i()}),L.bF=(function(e){if(e>0){this.a1=this.a1+e|0;var t=this.N-e|0;this.N=t<0?0:t}return this}),L.bl=(function(e,t){var n=Ap(this,e),r=Ap(this,t)-n|0;return this.N=r<0?0:r,this.a1=this.a1+n|0,this}),new V().i(jp,`scala.collection.IndexedSeqView$IndexedSeqViewIterator`,{dp:1,P:1,b:1,c:1,Q:1,a:1});function Mp(e){return e.eh||=(e.eg=new Bm(new(Cd.r()).C(0)),!0),e.eg}function Np(){this.fc=null,this.eg=null,this.eh=!1,Pp=this,this.fc=new Rf(this)}L=Np.prototype=new B,L.constructor=Np,L.g7=(function(e,t){return e instanceof km?e:this.hd(Bc().eK(e,t))}),L.hd=(function(e){if(e===null)return null;if(e instanceof Ra)return new Bm(e);if(e instanceof Wa)return new Rm(e);if(e instanceof qa)return new Im(e);if(e instanceof Ga)return new zm(e);if(e instanceof Ka)return new Lm(e);if(e instanceof Va)return new Fm(e);if(e instanceof Ha)return new Pm(e);if(e instanceof Ua)return new Vm(e);if(e instanceof Ba)return new Nm(e);if(Tc(e,1))return new Hm(e);throw new Pf(e)}),L.cm=(function(e,t){return this.g7(e,t)}),new V().i(Np,`scala.collection.immutable.ArraySeq$`,{dD:1,a:1,at:1,ar:1,as:1,aw:1});var Pp;function Fp(){return Pp||=new Np,Pp}function Ip(){this.fd=null,this.ej=null,Lp=this,this.fd=new Rf(this),this.ej=new eh(new Ra(0))}L=Ip.prototype=new B,L.constructor=Ip,L.g8=(function(e,t){return this.gy(Bc().eK(e,t))}),L.gy=(function(e){if(e===null)return null;if(e instanceof Ra)return new eh(e);if(e instanceof Wa)return new Qm(e);if(e instanceof qa)return new Xm(e);if(e instanceof Ga)return new $m(e);if(e instanceof Ka)return new Zm(e);if(e instanceof Va)return new Ym(e);if(e instanceof Ha)return new Jm(e);if(e instanceof Ua)return new th(e);if(e instanceof Ba)return new qm(e);if(Tc(e,1))return new nh(e);throw new Pf(e)}),L.cm=(function(e,t){return this.g8(e,t)}),new V().i(Ip,`scala.collection.mutable.ArraySeq$`,{dK:1,a:1,at:1,ar:1,as:1,aw:1});var Lp;function Rp(){return Lp||=new Ip,Lp}function zp(e){this.ak=null,this.al=null,this.d1=null,this.d2=!1,zd(this,e,$())}L=zp.prototype=new Vd,L.constructor=zp,L.cl=(function(){return this.d2||=(this.d1=this.f(`flex`),!0),this.d1}),new V().i(zp,`com.raquo.laminar.defs.styles.StyleProps$$anon$28`,{bN:1,V:1,y:1,T:1,U:1,bW:1,bS:1});function Bp(e){this.ak=null,this.al=null,this.d3=null,this.d4=!1,zd(this,e,$())}L=Bp.prototype=new Vd,L.constructor=Bp,L.fz=(function(){return this.d4||=(this.d3=this.f(`center`),!0),this.d3}),new V().i(Bp,`com.raquo.laminar.defs.styles.StyleProps$$anon$3`,{bO:1,V:1,y:1,T:1,U:1,bX:1,bU:1});function Vp(e){this.ak=null,this.al=null,this.d9=null,this.da=!1,zd(this,e,$())}L=Vp.prototype=new Vd,L.constructor=Vp,L.cq=(function(){return this.da||=(this.d9=Il(this),!0),this.d9}),new V().i(Vp,`com.raquo.laminar.defs.styles.StyleProps$$anon$5`,{bR:1,V:1,y:1,T:1,U:1,bY:1,bZ:1});function Hp(){}L=Hp.prototype=new _f,L.constructor=Hp;function Up(){}Up.prototype=L;function Wp(e){return e.ay()+`(<not computed>)`}function Gp(){}L=Gp.prototype=new B,L.constructor=Gp;function Kp(){}Kp.prototype=L;var qp=class e extends Xd{constructor(e){super(),this.O=null,this.O=e,gu(this,null,null,!0,!0)}bg(){return ba(this.O)}ad(){return`JavaScriptException`}ab(){return 1}ac(e){return e===0?this.O:W().gp(e)}bj(){return new ip(this)}j(){return G().eU(this,1744042595,!0)}d(t){return this===t||t instanceof e&&ml().C(this.O,t.O)}};new V().i(qp,`scala.scalajs.js.JavaScriptException`,{b7:1,O:1,K:1,s:1,a:1,S:1,d:1});function Jp(e,t){typeof console<`u`&&(e.dY&&console.error?console.error(t):console.log(t))}function Yp(e){this.dY=!1,this.aT=null,this.dY=e,new Ef,this.aT=``}L=Yp.prototype=new Up,L.constructor=Yp,L.gt=(function(e){for(var t=e;t!==``;){var n=t.indexOf(`
`)|0;if(n<0)this.aT=``+this.aT+t,t=``;else{var r=this.aT,i=t;Jp(this,``+r+i.substring(0,n)),this.aT=``;var a=t,o=1+n|0;t=a.substring(o)}}}),new V().i(Yp,`java.lang.JSConsoleBasedPrintStream`,{cJ:1,cz:1,cy:1,af:1,ad:1,ah:1,ae:1,ag:1});function Xp(e,t,n){for(var r=n,i=t;;)if(i<=0||r.b())return r;else{var a=i-1|0,o=r.D();i=a,r=o}}function Zp(){this.b3=null}L=Zp.prototype=new Kp,L.constructor=Zp;function Qp(){}Qp.prototype=L,L.o=(function(){return this.b3}),L.d=(function(e){return this===e}),L.j=(function(){return Oa(this)});function $p(){}L=$p.prototype=new kp,L.constructor=$p;function em(){}em.prototype=L,L.o=(function(){return Wp(this)});function tm(){this.b3=null,this.b3=`Any`,$()}L=tm.prototype=new Qp,L.constructor=tm,L.eW=(function(){return Ja.l()}),L.eQ=(function(e){return new Ra(e)}),new V().i(tm,`scala.reflect.ManifestFactory$AnyManifest$`,{dW:1,b3:1,b2:1,a:1,b4:1,aZ:1,d:1,b0:1,b1:1});var nm;function rm(){return nm||=new tm,nm}function im(){this.b3=null,this.b3=`Object`,$()}L=im.prototype=new Qp,L.constructor=im,L.eW=(function(){return Ja.l()}),L.eQ=(function(e){return new Ra(e)}),new V().i(im,`scala.reflect.ManifestFactory$ObjectManifest$`,{dX:1,b3:1,b2:1,a:1,b4:1,aZ:1,d:1,b0:1,b1:1});var am;function om(){return am||=new im,am}function sm(e,t){return e===t?!0:cm(t)&&t.ci(e)?e.bM(t):!1}function cm(e){return!!(e&&e.$classData&&e.$classData.n.f)}function lm(){}L=lm.prototype=new kp,L.constructor=lm;function um(){}um.prototype=L,L.b=(function(){return af(this)}),L.bM=(function(e){return of(this,e)}),L.ci=(function(e){return!0}),L.d=(function(e){return sm(this,e)}),L.j=(function(){return G().eX(this)}),L.o=(function(){return zf(this)});function dm(){}L=dm.prototype=new em,L.constructor=dm;function fm(){}fm.prototype=L;function pm(e){return!!(e&&e.$classData&&e.$classData.n.m)}function mm(e){return!!(e&&e.$classData&&e.$classData.n.a0)}function hm(e,t){return e.b0=t,e}function gm(){this.b0=null}L=gm.prototype=new fm,L.constructor=gm;function _m(){}_m.prototype=L,L.h=(function(e){return this.b0.h(e)}),L.e=(function(){return this.b0.e()}),L.b=(function(){return this.b0.b()});function vm(){this.cP=null,this.cQ=!1,this.cZ=null,this.d0=!1,this.cL=null,this.cM=!1,this.cN=null,this.cO=!1,this.cR=null,this.cS=!1,this.cT=null,this.cU=!1,this.cV=null,this.cW=!1,this.f4=null,this.f3=null,this.cX=null,this.cY=!1,ds(this),os(this),is(this),as(this)}L=vm.prototype=new B,L.constructor=vm,L.ck=(function(){return this.cQ||=(this.cP=Yl(new Xl,`div`,!1),!0),this.cP}),L.aS=(function(){return this.d0||=(this.cZ=new Vl(`value`,us().aj),!0),this.cZ}),L.fo=(function(){return this.cM||=(this.cL=new Bp(`align-items`),!0),this.cL}),L.cj=(function(){return this.cO||=(this.cN=new zp(`display`),!0),this.cN}),L.eI=(function(){return this.cS||=(this.cR=new lp(`flex-direction`),!0),this.cR}),L.eJ=(function(){return this.cU||=(this.cT=new up(`flex-wrap`),!0),this.cT}),L.cn=(function(){return this.cW||=(this.cV=new Vp(`gap`),!0),this.cV}),L.h4=(function(){return this.cY||=(this.cX=new Id(this),!0),this.cX}),new V().i(vm,`com.raquo.laminar.api.package$$anon$1`,{bC:1,c0:1,bG:1,bL:1,bK:1,bM:1,bI:1,bA:1,bw:1,bz:1,a8:1,a9:1,a7:1,bx:1});function ym(e){this.b0=null,hm(this,e)}L=ym.prototype=new _m,L.constructor=ym,L.az=(function(e){var t=this.e();return t===e?0:t<e?-1:1}),L.t=(function(){return this.e()}),L.g=(function(){return new jp(this)}),L.aQ=(function(){return`IndexedSeqView`}),new V().i(ym,`scala.collection.IndexedSeqView$Id`,{dn:1,dy:1,dg:1,dh:1,l:1,b:1,c:1,j:1,i:1,h:1,a:1,dB:1,k:1,dx:1,o:1,dm:1});function bm(){}L=bm.prototype=new um,L.constructor=bm;function xm(){}xm.prototype=L;function Sm(e,t){return!wm(t)||e.e()===t.e()}function Cm(e,t){if(wm(t)){if(e===t)return!0;var n=e.e(),r=n===t.e();if(r){var i=0,a=e.ch(),o=t.ch(),s=a<o?a:o,c=n>>31,l=s>>31,u=s<<1,d=s>>>31|0|l<<1;if(c===d?n>>>0>u>>>0:c>d)var f=s;else var f=n;for(;i<f&&r;)r=ml().C(e.h(i),t.h(i)),i=1+i|0;if(i<n&&r)for(var p=e.g().bF(i),m=t.g().bF(i);r&&p.m();)r=ml().C(p.i(),m.i())}return r}return of(e,t)}function wm(e){return!!(e&&e.$classData&&e.$classData.n.t)}function Tm(){}L=Tm.prototype=new um,L.constructor=Tm;function Em(){}Em.prototype=L;function Q(e){this.bB=null,this.bB=e}L=Q.prototype=new B,L.constructor=Q,L.ci=(function(e){return Sm(this,e)}),L.bM=(function(e){return Cm(this,e)}),L.ch=(function(){return cl().ei}),L.g=(function(){return new jp(new ym(this))}),L.az=(function(e){var t=this.e();return t===e?0:t<e?-1:1}),L.t=(function(){return this.e()}),L.d=(function(e){return sm(this,e)}),L.j=(function(){return G().eX(this)}),L.o=(function(){return zf(this)}),L.b=(function(){return af(this)}),L.Q=(function(e){$c(this,e)}),L.aM=(function(e,t,n,r){return tl(this,e,t,n,r)}),L.e=(function(){return this.bB.length|0}),L.h=(function(e){return this.bB[e]}),L.ay=(function(){return`WrappedVarArgs`}),L.c=(function(e){return this.h(e|0)}),new V().i(Q,`scala.scalajs.runtime.WrappedVarArgs`,{b8:1,t:1,b:1,c:1,j:1,i:1,h:1,u:1,e:1,g:1,k:1,d:1,f:1,w:1,v:1,o:1,m:1,I:1,x:1,p:1,q:1,a:1});function Dm(){}L=Dm.prototype=new Em,L.constructor=Dm;function Om(){}Om.prototype=L,L.eu=(function(e){return Tu(this,e)});function km(){}L=km.prototype=new xm,L.constructor=km;function Am(){}Am.prototype=L,L.az=(function(e){var t=this.e();return t===e?0:t<e?-1:1}),L.t=(function(){return this.e()}),L.aQ=(function(){return`IndexedSeq`}),L.ci=(function(e){return Sm(this,e)}),L.bM=(function(e){return Cm(this,e)}),L.ay=(function(){return`ArraySeq`}),L.ch=(function(){return 2147483647});function jm(){}L=jm.prototype=new Em,L.constructor=jm;function Mm(){}Mm.prototype=L,L.az=(function(e){var t=this.e();return t===e?0:t<e?-1:1}),L.t=(function(){return this.e()}),L.aQ=(function(){return`IndexedSeq`}),L.ay=(function(){return`ArraySeq`}),L.d=(function(e){return e instanceof jm&&Ac().aP(this.P())!==Ac().aP(e.P())?!1:sm(this,e)});function Nm(e){this.am=null,this.am=e}L=Nm.prototype=new Am,L.constructor=Nm,L.e=(function(){return this.am.a.length}),L.be=(function(e){return this.am.a[e]}),L.j=(function(){var e=G();return e.q(this.am,e.p)}),L.d=(function(e){return e instanceof Nm?Nc().eG(this.am,e.am):sm(this,e)}),L.g=(function(){return new Z(this.am)}),L.h=(function(e){return this.be(e)}),L.c=(function(e){return this.be(e|0)}),new V().i(Nm,`scala.collection.immutable.ArraySeq$ofBoolean`,{aA:1,H:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,I:1,t:1,p:1,q:1,x:1,M:1,a:1});function Pm(e){this.an=null,this.an=e}L=Pm.prototype=new Am,L.constructor=Pm,L.e=(function(){return this.an.a.length}),L.b6=(function(e){return this.an.a[e]}),L.j=(function(){var e=G();return e.q(this.an,e.p)}),L.d=(function(e){return e instanceof Pm?Nc().eB(this.an,e.an):sm(this,e)}),L.g=(function(){return new Z(this.an)}),L.h=(function(e){return this.b6(e)}),L.c=(function(e){return this.b6(e|0)}),new V().i(Pm,`scala.collection.immutable.ArraySeq$ofByte`,{aB:1,H:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,I:1,t:1,p:1,q:1,x:1,M:1,a:1});function Fm(e){this.a4=null,this.a4=e}L=Fm.prototype=new Am,L.constructor=Fm,L.e=(function(){return this.a4.a.length}),L.b7=(function(e){return this.a4.a[e]}),L.j=(function(){var e=G();return e.q(this.a4,e.p)}),L.d=(function(e){return e instanceof Fm?Nc().eC(this.a4,e.a4):sm(this,e)}),L.g=(function(){return new Z(this.a4)}),L.aM=(function(e,t,n,r){return new Ym(this.a4).aM(e,t,n,r)}),L.h=(function(e){return Na(this.b7(e))}),L.c=(function(e){return Na(this.b7(e|0))}),new V().i(Fm,`scala.collection.immutable.ArraySeq$ofChar`,{aC:1,H:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,I:1,t:1,p:1,q:1,x:1,M:1,a:1});function Im(e){this.ao=null,this.ao=e}L=Im.prototype=new Am,L.constructor=Im,L.e=(function(){return this.ao.a.length}),L.b8=(function(e){return this.ao.a[e]}),L.j=(function(){var e=G();return e.q(this.ao,e.p)}),L.d=(function(e){if(e instanceof Im){var t=this.ao,n=e.ao;if(t===n)return!0;if(t.a.length===n.a.length){for(var r=0;r<t.a.length&&t.a[r]===n.a[r];)r=1+r|0;return r>=t.a.length}return!1}return sm(this,e)}),L.g=(function(){return new Z(this.ao)}),L.h=(function(e){return this.b8(e)}),L.c=(function(e){return this.b8(e|0)}),new V().i(Im,`scala.collection.immutable.ArraySeq$ofDouble`,{aD:1,H:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,I:1,t:1,p:1,q:1,x:1,M:1,a:1});function Lm(e){this.ap=null,this.ap=e}L=Lm.prototype=new Am,L.constructor=Lm,L.e=(function(){return this.ap.a.length}),L.b9=(function(e){return this.ap.a[e]}),L.j=(function(){var e=G();return e.q(this.ap,e.p)}),L.d=(function(e){if(e instanceof Lm){var t=this.ap,n=e.ap;if(t===n)return!0;if(t.a.length===n.a.length){for(var r=0;r<t.a.length&&t.a[r]===n.a[r];)r=1+r|0;return r>=t.a.length}return!1}return sm(this,e)}),L.g=(function(){return new Z(this.ap)}),L.h=(function(e){return this.b9(e)}),L.c=(function(e){return this.b9(e|0)}),new V().i(Lm,`scala.collection.immutable.ArraySeq$ofFloat`,{aE:1,H:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,I:1,t:1,p:1,q:1,x:1,M:1,a:1});function Rm(e){this.aq=null,this.aq=e}L=Rm.prototype=new Am,L.constructor=Rm,L.e=(function(){return this.aq.a.length}),L.ba=(function(e){return this.aq.a[e]}),L.j=(function(){var e=G();return e.q(this.aq,e.p)}),L.d=(function(e){return e instanceof Rm?Nc().eD(this.aq,e.aq):sm(this,e)}),L.g=(function(){return new Z(this.aq)}),L.h=(function(e){return this.ba(e)}),L.c=(function(e){return this.ba(e|0)}),new V().i(Rm,`scala.collection.immutable.ArraySeq$ofInt`,{aF:1,H:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,I:1,t:1,p:1,q:1,x:1,M:1,a:1});function zm(e){this.ar=null,this.ar=e}L=zm.prototype=new Am,L.constructor=zm,L.e=(function(){return this.ar.a.length>>>1|0}),L.bb=(function(e){var t=this.ar.a,n=e<<1;return z(t[n],t[n+1|0])}),L.j=(function(){var e=G();return e.q(this.ar,e.p)}),L.d=(function(e){return e instanceof zm?Nc().eE(this.ar,e.ar):sm(this,e)}),L.g=(function(){return new Z(this.ar)}),L.h=(function(e){return this.bb(e)}),L.c=(function(e){return this.bb(e|0)}),new V().i(zm,`scala.collection.immutable.ArraySeq$ofLong`,{aG:1,H:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,I:1,t:1,p:1,q:1,x:1,M:1,a:1});function Bm(e){this.as=null,this.as=e}L=Bm.prototype=new Am,L.constructor=Bm,L.e=(function(){return this.as.a.length}),L.h=(function(e){return this.as.a[e]}),L.j=(function(){var e=G();return e.q(this.as,e.p)}),L.d=(function(e){return e instanceof Bm?Bc().eH(this.as,e.as):sm(this,e)}),L.g=(function(){return new Z(this.as)}),L.c=(function(e){return this.h(e|0)}),new V().i(Bm,`scala.collection.immutable.ArraySeq$ofRef`,{aH:1,H:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,I:1,t:1,p:1,q:1,x:1,M:1,a:1});function Vm(e){this.at=null,this.at=e}L=Vm.prototype=new Am,L.constructor=Vm,L.e=(function(){return this.at.a.length}),L.bc=(function(e){return this.at.a[e]}),L.j=(function(){var e=G();return e.q(this.at,e.p)}),L.d=(function(e){return e instanceof Vm?Nc().eF(this.at,e.at):sm(this,e)}),L.g=(function(){return new Z(this.at)}),L.h=(function(e){return this.bc(e)}),L.c=(function(e){return this.bc(e|0)}),new V().i(Vm,`scala.collection.immutable.ArraySeq$ofShort`,{aI:1,H:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,I:1,t:1,p:1,q:1,x:1,M:1,a:1});function Hm(e){this.aL=null,this.aL=e}L=Hm.prototype=new Am,L.constructor=Hm,L.e=(function(){return this.aL.a.length}),L.bd=(function(e){}),L.j=(function(){var e=G();return e.q(this.aL,e.p)}),L.d=(function(e){return e instanceof Hm?this.aL.a.length===e.aL.a.length:sm(this,e)}),L.g=(function(){return new Z(this.aL)}),L.h=(function(e){this.bd(e)}),L.c=(function(e){this.bd(e|0)}),new V().i(Hm,`scala.collection.immutable.ArraySeq$ofUnit`,{aJ:1,H:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,I:1,t:1,p:1,q:1,x:1,M:1,a:1});function Um(e,t,n,r){for(var i=r,a=n;;)if(a===t)return!i.b()|0;else{if(!i.b()){var o=1+a|0,s=i.D();a=o,i=s;continue}return-1}}function Wm(e,t,n){for(var r=n,i=t;;)if(i===r)return!0;else{var a=i.b(),o=r.b();if(!(a||o)&&ml().C(i.R(),r.R())){var s=i.D(),c=r.D();i=s,r=c;continue}return a&&o}}function Gm(){}L=Gm.prototype=new xm,L.constructor=Gm;function Km(){}Km.prototype=L,L.h=(function(e){return Jf(this,e)}),L.bM=(function(e){return Yf(this,e)}),L.aQ=(function(){return`LinearSeq`}),L.g=(function(){return new Zf(this)}),L.fh=(function(e){if(this.b())return e;if(e.b())return this;for(var t=new rh(e.R(),this),n=t,r=e.D();!r.b();){var i=new rh(r.R(),this);n.b2=i,n=i,r=r.D()}return t}),L.b=(function(){return this===$()}),L.eT=(function(e){if(e instanceof Gm)return this.fh(e);if(e.t()===0)return this;var t=e.g();if(t.m()){for(var n=new rh(t.i(),this),r=n;t.m();){var i=new rh(t.i(),this);r.b2=i,r=i}return n}return this}),L.Q=(function(e){for(var t=this;!t.b();)e.c(t.R()),t=t.D()}),L.e=(function(){for(var e=this,t=0;!e.b();)t=1+t|0,e=e.D();return t}),L.az=(function(e){return e<0?1:Um(this,e,0,this)}),L.ay=(function(){return`List`}),L.d=(function(e){return e instanceof Gm?Wm(this,this,e):sm(this,e)}),L.fO=(function(e){return Xp(this,e,this)}),L.c=(function(e){return Jf(this,e|0)});function qm(e){this.a5=null,this.a5=e}L=qm.prototype=new Mm,L.constructor=qm,L.e=(function(){return this.a5.a.length}),L.be=(function(e){return this.a5.a[e]}),L.j=(function(){var e=G();return e.q(this.a5,e.p)}),L.d=(function(e){return e instanceof qm?Nc().eG(this.a5,e.a5):jm.prototype.d.call(this,e)}),L.g=(function(){return new Z(this.a5)}),L.P=(function(){return this.a5}),L.h=(function(e){return this.be(e)}),L.c=(function(e){return this.be(e|0)}),new V().i(qm,`scala.collection.mutable.ArraySeq$ofBoolean`,{aM:1,J:1,A:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,E:1,r:1,B:1,G:1,F:1,o:1,m:1,D:1,C:1,p:1,q:1,a:1});function Jm(e){this.a6=null,this.a6=e}L=Jm.prototype=new Mm,L.constructor=Jm,L.e=(function(){return this.a6.a.length}),L.b6=(function(e){return this.a6.a[e]}),L.j=(function(){var e=G();return e.q(this.a6,e.p)}),L.d=(function(e){return e instanceof Jm?Nc().eB(this.a6,e.a6):jm.prototype.d.call(this,e)}),L.g=(function(){return new Z(this.a6)}),L.P=(function(){return this.a6}),L.h=(function(e){return this.b6(e)}),L.c=(function(e){return this.b6(e|0)}),new V().i(Jm,`scala.collection.mutable.ArraySeq$ofByte`,{aN:1,J:1,A:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,E:1,r:1,B:1,G:1,F:1,o:1,m:1,D:1,C:1,p:1,q:1,a:1});function Ym(e){this.I=null,this.I=e}L=Ym.prototype=new Mm,L.constructor=Ym,L.e=(function(){return this.I.a.length}),L.b7=(function(e){return this.I.a[e]}),L.j=(function(){var e=G();return e.q(this.I,e.p)}),L.d=(function(e){return e instanceof Ym?Nc().eC(this.I,e.I):jm.prototype.d.call(this,e)}),L.g=(function(){return new Z(this.I)}),L.aM=(function(e,t,n,r){var i=e.B;t.length!==0&&(i.l=``+i.l+t);var a=this.I.a.length;if(a!==0){if(n===``)i.fr(this.I);else{i.e();var o=this.I.a[0],s=``+Ca(o);i.l+=s;for(var c=1;c<a;){i.l=``+i.l+n;var l=this.I.a[c],u=``+Ca(l);i.l+=u,c=1+c|0}}}return r.length!==0&&(i.l=``+i.l+r),e}),L.P=(function(){return this.I}),L.h=(function(e){return Na(this.b7(e))}),L.c=(function(e){return Na(this.b7(e|0))}),new V().i(Ym,`scala.collection.mutable.ArraySeq$ofChar`,{aO:1,J:1,A:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,E:1,r:1,B:1,G:1,F:1,o:1,m:1,D:1,C:1,p:1,q:1,a:1});function Xm(e){this.J=null,this.J=e}L=Xm.prototype=new Mm,L.constructor=Xm,L.e=(function(){return this.J.a.length}),L.b8=(function(e){return this.J.a[e]}),L.j=(function(){var e=G();return e.q(this.J,e.p)}),L.d=(function(e){if(e instanceof Xm){var t=e.J;if(this.J===t)return!0;if(this.J.a.length===t.a.length){for(var n=0;n<this.J.a.length&&this.J.a[n]===t.a[n];)n=1+n|0;return n>=this.J.a.length}return!1}return jm.prototype.d.call(this,e)}),L.g=(function(){return new Z(this.J)}),L.P=(function(){return this.J}),L.h=(function(e){return this.b8(e)}),L.c=(function(e){return this.b8(e|0)}),new V().i(Xm,`scala.collection.mutable.ArraySeq$ofDouble`,{aP:1,J:1,A:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,E:1,r:1,B:1,G:1,F:1,o:1,m:1,D:1,C:1,p:1,q:1,a:1});function Zm(e){this.K=null,this.K=e}L=Zm.prototype=new Mm,L.constructor=Zm,L.e=(function(){return this.K.a.length}),L.b9=(function(e){return this.K.a[e]}),L.j=(function(){var e=G();return e.q(this.K,e.p)}),L.d=(function(e){if(e instanceof Zm){var t=e.K;if(this.K===t)return!0;if(this.K.a.length===t.a.length){for(var n=0;n<this.K.a.length&&this.K.a[n]===t.a[n];)n=1+n|0;return n>=this.K.a.length}return!1}return jm.prototype.d.call(this,e)}),L.g=(function(){return new Z(this.K)}),L.P=(function(){return this.K}),L.h=(function(e){return this.b9(e)}),L.c=(function(e){return this.b9(e|0)}),new V().i(Zm,`scala.collection.mutable.ArraySeq$ofFloat`,{aQ:1,J:1,A:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,E:1,r:1,B:1,G:1,F:1,o:1,m:1,D:1,C:1,p:1,q:1,a:1});function Qm(e){this.a7=null,this.a7=e}L=Qm.prototype=new Mm,L.constructor=Qm,L.e=(function(){return this.a7.a.length}),L.ba=(function(e){return this.a7.a[e]}),L.j=(function(){var e=G();return e.q(this.a7,e.p)}),L.d=(function(e){return e instanceof Qm?Nc().eD(this.a7,e.a7):jm.prototype.d.call(this,e)}),L.g=(function(){return new Z(this.a7)}),L.P=(function(){return this.a7}),L.h=(function(e){return this.ba(e)}),L.c=(function(e){return this.ba(e|0)}),new V().i(Qm,`scala.collection.mutable.ArraySeq$ofInt`,{aR:1,J:1,A:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,E:1,r:1,B:1,G:1,F:1,o:1,m:1,D:1,C:1,p:1,q:1,a:1});function $m(e){this.a8=null,this.a8=e}L=$m.prototype=new Mm,L.constructor=$m,L.e=(function(){return this.a8.a.length>>>1|0}),L.bb=(function(e){var t=this.a8.a,n=e<<1;return z(t[n],t[n+1|0])}),L.j=(function(){var e=G();return e.q(this.a8,e.p)}),L.d=(function(e){return e instanceof $m?Nc().eE(this.a8,e.a8):jm.prototype.d.call(this,e)}),L.g=(function(){return new Z(this.a8)}),L.P=(function(){return this.a8}),L.h=(function(e){return this.bb(e)}),L.c=(function(e){return this.bb(e|0)}),new V().i($m,`scala.collection.mutable.ArraySeq$ofLong`,{aS:1,J:1,A:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,E:1,r:1,B:1,G:1,F:1,o:1,m:1,D:1,C:1,p:1,q:1,a:1});function eh(e){this.a9=null,this.a9=e}L=eh.prototype=new Mm,L.constructor=eh,L.e=(function(){return this.a9.a.length}),L.h=(function(e){return this.a9.a[e]}),L.j=(function(){var e=G();return e.q(this.a9,e.p)}),L.d=(function(e){return e instanceof eh?Bc().eH(this.a9,e.a9):jm.prototype.d.call(this,e)}),L.g=(function(){return new Z(this.a9)}),L.P=(function(){return this.a9}),L.c=(function(e){return this.h(e|0)}),new V().i(eh,`scala.collection.mutable.ArraySeq$ofRef`,{aT:1,J:1,A:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,E:1,r:1,B:1,G:1,F:1,o:1,m:1,D:1,C:1,p:1,q:1,a:1});function th(e){this.aa=null,this.aa=e}L=th.prototype=new Mm,L.constructor=th,L.e=(function(){return this.aa.a.length}),L.bc=(function(e){return this.aa.a[e]}),L.j=(function(){var e=G();return e.q(this.aa,e.p)}),L.d=(function(e){return e instanceof th?Nc().eF(this.aa,e.aa):jm.prototype.d.call(this,e)}),L.g=(function(){return new Z(this.aa)}),L.P=(function(){return this.aa}),L.h=(function(e){return this.bc(e)}),L.c=(function(e){return this.bc(e|0)}),new V().i(th,`scala.collection.mutable.ArraySeq$ofShort`,{aU:1,J:1,A:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,E:1,r:1,B:1,G:1,F:1,o:1,m:1,D:1,C:1,p:1,q:1,a:1});function nh(e){this.au=null,this.au=e}L=nh.prototype=new Mm,L.constructor=nh,L.e=(function(){return this.au.a.length}),L.bd=(function(e){}),L.j=(function(){var e=G();return e.q(this.au,e.p)}),L.d=(function(e){return e instanceof nh?this.au.a.length===e.au.a.length:jm.prototype.d.call(this,e)}),L.g=(function(){return new Z(this.au)}),L.P=(function(){return this.au}),L.h=(function(e){this.bd(e)}),L.c=(function(e){this.bd(e|0)}),new V().i(nh,`scala.collection.mutable.ArraySeq$ofUnit`,{aV:1,J:1,A:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,E:1,r:1,B:1,G:1,F:1,o:1,m:1,D:1,C:1,p:1,q:1,a:1});function rh(e,t){this.cc=null,this.b2=null,this.cc=e,this.b2=t}L=rh.prototype=new Km,L.constructor=rh,L.bj=(function(){return new Lf(this)}),L.ab=(function(){return 2}),L.ad=(function(){return`::`}),L.ac=(function(e){if(e===0)return this.cc;if(e===1)return this.b2;throw wf(new Tf,e)}),L.R=(function(){return this.cc}),L.D=(function(){return this.b2}),new V().i(rh,`scala.collection.immutable.$colon$colon`,{dC:1,a5:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,av:1,a0:1,aL:1,aK:1,p:1,q:1,ax:1,x:1,a:1,az:1,S:1});function ih(){ah=this,$(),$()}L=ih.prototype=new Km,L.constructor=ih,L.bj=(function(){return new Lf(this)}),L.ab=(function(){return 0}),L.ad=(function(){return`Nil`}),L.ac=(function(e){throw wf(new Tf,e)}),L.gi=(function(){throw new Mf(`head of empty list`)}),L.h9=(function(){throw new jf(`tail of empty list`)}),L.t=(function(){return 0}),L.g=(function(){return vd().F}),L.R=(function(){this.gi()}),L.D=(function(){this.h9()}),new V().i(ih,`scala.collection.immutable.Nil$`,{dH:1,a5:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,av:1,a0:1,aL:1,aK:1,p:1,q:1,ax:1,x:1,a:1,az:1,S:1});var ah;function $(){return ah||=new ih,ah}function oh(e,t){return e.B=t,e}function sh(e){return oh(e,new Zd),e}function ch(){this.B=null}L=ch.prototype=new Em,L.constructor=ch,L.eu=(function(e){return Tu(this,e)}),L.g=(function(){return new jp(new ym(this))}),L.az=(function(e){var t=this.B.e();return t===e?0:t<e?-1:1}),L.aQ=(function(){return`IndexedSeq`}),L.e=(function(){return this.B.e()}),L.t=(function(){return this.B.e()}),L.fm=(function(e){var t=this.B,n=``+Ca(e);return t.l+=n,this}),L.o=(function(){return this.B.l}),L.b=(function(){return this.B.e()===0}),L.h=(function(e){return Na(this.B.ex(e))}),L.c=(function(e){var t=e|0;return Na(this.B.ex(t))}),L.cf=(function(e){return this.fm(Fa(e))}),L.eV=(function(){return this.B.l}),new V().i(ch,`scala.collection.mutable.StringBuilder`,{dR:1,A:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,E:1,r:1,B:1,G:1,F:1,aX:1,aY:1,aW:1,dP:1,o:1,m:1,D:1,C:1,a4:1,a:1});function lh(e,t){return e.av=t,e}function uh(e){return lh(e,[]),e}function dh(){this.av=null}L=dh.prototype=new Om,L.constructor=dh,L.aQ=(function(){return`IndexedSeq`}),L.g=(function(){return new jp(new ym(this))}),L.az=(function(e){var t=this.av.length|0;return t===e?0:t<e?-1:1}),L.h=(function(e){return this.av[e]}),L.e=(function(){return this.av.length|0}),L.t=(function(){return this.av.length|0}),L.ay=(function(){return`WrappedArray`}),L.eV=(function(){return this}),L.cf=(function(e){return this.av.push(e),this}),L.c=(function(e){var t=e|0;return this.av[t]}),new V().i(dh,`scala.scalajs.js.WrappedArray`,{ee:1,dI:1,A:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,E:1,r:1,B:1,G:1,F:1,aX:1,aY:1,dQ:1,dL:1,q:1,p:1,C:1,o:1,m:1,D:1,dN:1,aW:1,a:1}),Bs(new(Cp.r()).C([]));