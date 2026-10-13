var e=Object.defineProperty,t=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r},n=()=>({checkValidity(e){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
let t=e.input,n={message:``,isValid:!0,invalidKeys:[]};if(!t)return n;let r=!0;if(`checkValidity`in t&&(r=t.checkValidity()),r)return n;if(n.isValid=!1,`validationMessage`in t&&(n.message=t.validationMessage),!(`validity`in t))return n.invalidKeys.push(`customError`),n;for(let e in t.validity){if(e===`valid`)continue;let r=e;t.validity[r]&&n.invalidKeys.push(r)}return n}}),r=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-invalid`,{bubbles:!0,cancelable:!1,composed:!0})}},i=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=e=>{
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
throw TypeError(e)},s=(e,t,n,r)=>{for(var o=r>1?void 0:r?a(t,n):t,s=e.length-1,c;s>=0;s--)(c=e[s])&&(o=(r?c(t,n,o):c(o))||o);return r&&o&&i(t,n,o),o},c=(e,t,n)=>t.has(e)||o(`Cannot `+n),l=(e,t,n)=>(c(e,t,`read from private field`),n?n.call(e):t.get(e)),u=(e,t,n)=>t.has(e)?o(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),d=(e,t,n,r)=>(c(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n);
/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const f=globalThis,p=f.ShadowRoot&&(f.ShadyCSS===void 0||f.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,m=Symbol(),h=/* @__PURE__ */ new WeakMap;var g=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==m)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(p&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=h.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&h.set(t,e))}return e}toString(){return this.cssText}};const ee=e=>new g(typeof e==`string`?e:e+``,void 0,m),_=(e,...t)=>new g(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,m),te=(e,t)=>{if(p)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=f.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},ne=p?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return ee(t)})(e):e,{is:re,defineProperty:ie,getOwnPropertyDescriptor:ae,getOwnPropertyNames:oe,getOwnPropertySymbols:se,getPrototypeOf:ce}=Object,le=globalThis,ue=le.trustedTypes,de=ue?ue.emptyScript:``,fe=le.reactiveElementPolyfillSupport,pe=(e,t)=>e,me={toAttribute(e,t){
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
switch(t){case Boolean:e=e?de:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},he=(e,t)=>!re(e,t),ge={attribute:!0,type:String,converter:me,reflect:!1,useDefault:!1,hasChanged:he};Symbol.metadata??=Symbol(`metadata`),le.litPropertyMetadata??=/* @__PURE__ */ new WeakMap;var _e=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ge){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&ie(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=ae(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ge}static _$Ei(){if(this.hasOwnProperty(pe(`elementProperties`)))return;let e=ce(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(pe(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(pe(`properties`))){let e=this.properties,t=[...oe(e),...se(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=/* @__PURE__ */ new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(ne(e))}else e!==void 0&&t.push(ne(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=/* @__PURE__ */ new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=/* @__PURE__ */ new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=/* @__PURE__ */ new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return te(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?me:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?me:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??he)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=/* @__PURE__ */ new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=/* @__PURE__ */ new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=/* @__PURE__ */ new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};_e.elementStyles=[],_e.shadowRootOptions={mode:`open`},_e[pe(`elementProperties`)]=/* @__PURE__ */ new Map,_e[pe(`finalized`)]=/* @__PURE__ */ new Map,fe?.({ReactiveElement:_e}),(le.reactiveElementVersions??=[]).push(`2.1.2`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const ve=globalThis,ye=e=>e,be=ve.trustedTypes,xe=be?be.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,Se=`$lit$`,Ce=`lit$${Math.random().toFixed(9).slice(2)}$`,we=`?`+Ce,Te=`<${we}>`,Ee=document,De=()=>Ee.createComment(``),Oe=e=>e===null||typeof e!=`object`&&typeof e!=`function`,ke=Array.isArray,Ae=e=>ke(e)||typeof e?.[Symbol.iterator]==`function`,je=`[ 	
\f\r]`,Me=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ne=/-->/g,Pe=/>/g,Fe=RegExp(`>|${je}(?:([^\\s"'>=/]+)(${je}*=${je}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Ie=/'/g,Le=/"/g,Re=/^(?:script|style|textarea|title)$/i,ze=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),Be=Symbol.for(`lit-noChange`),v=Symbol.for(`lit-nothing`),Ve=/* @__PURE__ */ new WeakMap,He=Ee.createTreeWalker(Ee,129);function Ue(e,t){if(!ke(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return xe===void 0?t:xe.createHTML(t)}const We=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=Me;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===Me?c[1]===`!--`?o=Ne:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=Fe):(Re.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=Fe):o=Pe:o===Fe?c[0]===`>`?(o=i??Me,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?Fe:c[3]===`"`?Le:Ie):o===Le||o===Ie?o=Fe:o===Ne||o===Pe?o=Me:(o=Fe,i=void 0);let d=o===Fe&&e[t+1].startsWith(`/>`)?` `:``;a+=o===Me?n+Te:l>=0?(r.push(s),n.slice(0,l)+Se+n.slice(l)+Ce+d):n+Ce+(l===-2?t:d)}return[Ue(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]};var Ge=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=We(t,n);if(this.el=e.createElement(l,r),He.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=He.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(Se)){let t=u[o++],n=i.getAttribute(e).split(Ce),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Xe:r[1]===`?`?Ze:r[1]===`@`?Qe:Ye}),i.removeAttribute(e)}else e.startsWith(Ce)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Re.test(i.tagName)){let e=i.textContent.split(Ce),t=e.length-1;if(t>0){i.textContent=be?be.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],De()),He.nextNode(),c.push({type:2,index:++a});i.append(e[t],De())}}}else if(i.nodeType===8){if(i.data===we)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(Ce,e+1))!==-1;)c.push({type:7,index:a}),e+=Ce.length-1}}a++}}static createElement(e,t){let n=Ee.createElement(`template`);return n.innerHTML=e,n}};function Ke(e,t,n=e,r){if(t===Be)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=Oe(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=Ke(e,i._$AS(e,t.values),i,r)),t}var qe=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??Ee).importNode(t,!0);He.currentNode=r;let i=He.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Je(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new $e(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=He.nextNode(),a++)}return He.currentNode=Ee,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Je=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ke(this,e,t),Oe(e)?e===v||e==null||e===``?(this._$AH!==v&&this._$AR(),this._$AH=v):e!==this._$AH&&e!==Be&&this._(e):e._$litType$===void 0?e.nodeType===void 0?Ae(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==v&&Oe(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ee.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Ge.createElement(Ue(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new qe(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Ve.get(e.strings);return t===void 0&&Ve.set(e.strings,t=new Ge(e)),t}k(t){ke(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(De()),this.O(De()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=ye(e).nextSibling;ye(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Ye=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=v,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(/* @__PURE__ */ new String),this.strings=n):this._$AH=v}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=Ke(this,e,t,0),a=!Oe(e)||e!==this._$AH&&e!==Be,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=Ke(this,r[n+o],t,o),s===Be&&(s=this._$AH[o]),a||=!Oe(s)||s!==this._$AH[o],s===v?e=v:e!==v&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Xe=class extends Ye{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===v?void 0:e}},Ze=class extends Ye{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==v)}},Qe=class extends Ye{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=Ke(this,e,t,0)??v)===Be)return;let n=this._$AH,r=e===v&&n!==v||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==v&&(n===v||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},$e=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Ke(this,e)}};const et={M:Se,P:Ce,A:we,C:1,L:We,R:qe,D:Ae,V:Ke,I:Je,H:Ye,N:Ze,U:Qe,B:Xe,F:$e},tt=ve.litHtmlPolyfillSupport;tt?.(Ge,Je),(ve.litHtmlVersions??=[]).push(`3.3.3`);const nt=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Je(t.insertBefore(De(),e),e,void 0,n??{})}return i._$AI(e),i},rt=globalThis
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
;var it=class extends _e{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=nt(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Be}};it._$litElement$=!0,it.finalized=!0,rt.litElementHydrateSupport?.({LitElement:it});const at=rt.litElementPolyfillSupport;at?.({LitElement:it}),(rt.litElementVersions??=[]).push(`4.2.2`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const ot=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},st={attribute:!0,type:String,converter:me,reflect:!1,hasChanged:he},ct=(e=st,t,n)=>{
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=/* @__PURE__ */ new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function y(e){return(t,n)=>typeof n==`object`?ct(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function lt(e){return y({...e,state:!0,attribute:!1})}
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
var ft=_`
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
`,pt=/;\s+$/;function mt(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function ht(e){let{property:t,value:n,element:r}=e;if(n){let e=r.getAttribute(`style`)||``;e&&(e.match(pt)||(e+=`;`),e+=` `);let i=`${t}: ${n}`;return e.includes(i)?void 0:`${e}${i};`}return null}var gt,_t=class extends it{constructor(){super(),u(this,gt,!1),this.initialReflectedProperties=/* @__PURE__ */ new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,t)=>{if(this.internals?.states)try{t?this.internals.states.add(e):this.internals.states.delete(e)}catch(e){if(String(e).includes(`must start with '--'`))console.error(`Your browser implements an outdated version of CustomStateSet. Consider using a polyfill`);else throw e}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error(`Element internals are not supported in your browser. Consider using a polyfill`)}this.customStates.set(`wa-defined`,!0);let e=this.constructor;for(let[t,n]of e.elementProperties)n.default===`inherit`&&n.initial!==void 0&&typeof t==`string`&&this.customStates.set(`initial-${t}-${n.initial}`,!0)}static get styles(){return[ft,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `)),this.didSSR&&this.updateComplete.then(()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `))})}attributeChangedCallback(e,t,n){l(this,gt)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),d(this,gt,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll(`slot`).forEach(e=>{e.dispatchEvent(new Event(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(e){if(this.didSSR&&!this.hasUpdated){let t=new Event(`lit-hydration-error`,{bubbles:!0,composed:!0,cancelable:!1});t.error=e,this.dispatchEvent(t)}throw e}}setStyle(e,t){if(this.style)this.style[e]=t;else{let n=ht({property:mt(e),value:t,element:this});n&&this.setAttribute(`style`,n)}}setStyleProperty(e,t){if(this.style)this.style.setProperty(e,t);else{let n=ht({property:e,value:t,element:this});n&&this.setAttribute(`style`,n)}}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};gt=/* @__PURE__ */ new WeakMap,s([y()],_t.prototype,`dir`,2),s([y()],_t.prototype,`lang`,2),s([y({type:Boolean,reflect:!0,attribute:`did-ssr`})],_t.prototype,`didSSR`,2);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var vt=()=>({observedAttributes:[`custom-error`],checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=[`customError`]),t}}),yt=class extends _t{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=[`input`],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new r))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},`addEventListener`in this&&this.addEventListener(`invalid`,this.emitInvalid)}static get validators(){return[vt()]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let n of t.observedAttributes)e.add(n);return[...e]}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.updateValidity()}):this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener?.(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has(`customError`)&&(this.customError||=null,this.setCustomValidity(this.customError||``)),e.has(`value`)||e.has(`disabled`)||e.has(`defaultValue`)){let e=this.value;this.updateFormValue(e)}e.has(`disabled`)&&(this.customStates.set(`disabled`,this.disabled),(this.hasAttribute(`disabled`)||!this.matches(`:disabled`))&&this.toggleAttribute(`disabled`,this.disabled)),super.willUpdate(e),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>this.updateValidity()):this.updateValidity()}updateFormValue(e){if(Array.isArray(e)){if(this.name){let t=new FormData;for(let n of e)t.append(this.name,n);this.setValue(t,t)}}else this.setValue(e,e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(e){e?this.setAttribute(`form`,e):this.removeAttribute(`form`)}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],n=e[1],r=e[2];r||=this.validationTarget,this.internals.setValidity(t,n,r||void 0),this.requestUpdate(`validity`),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set(`required`,e),this.customStates.set(`optional`,!e),this.customStates.set(`invalid`,!t),this.customStates.set(`valid`,t),this.customStates.set(`user-invalid`,!t&&n),this.customStates.set(`user-valid`,t&&n)}setCustomValidity(e){e?(this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)):(this.customError=null,this.setValidity({}))}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity()}):(this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity())}setValue(...e){let[t,n]=e;this.internals.setFormValue(t,n)}get allValidators(){let e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(``),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute(`disabled`)||!this.willValidate){this.resetValidity();return}let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},n=this.validationTarget||this.input||void 0,r=``;for(let n of e){let{isValid:e,message:i,invalidKeys:a}=n.checkValidity(this);e||(r||=i,a?.length>=0&&a.forEach(e=>t[e]=!0))}r||=this.validationMessage,this.setValidity(t,r,n)}};yt.formAssociated=!0,s([y({reflect:!0})],yt.prototype,`name`,2),s([y({type:Boolean})],yt.prototype,`disabled`,2),s([y({state:!0,attribute:!1})],yt.prototype,`valueHasChanged`,2),s([y({state:!0,attribute:!1})],yt.prototype,`hasInteracted`,2),s([y({attribute:`custom-error`,reflect:!0})],yt.prototype,`customError`,2),s([y({attribute:!1,state:!0,type:Object})],yt.prototype,`validity`,1);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var bt={small:`s`,medium:`m`,large:`l`},xt=/* @__PURE__ */ new Set;function St(e,t){t in bt&&!xt.has(`${e}:${t}`)&&(xt.add(`${e}:${t}`),console.warn(`[${e}] size="${t}" is deprecated. Use size="${bt[t]}" instead. The long-form value will be removed in the next major version.`))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ct=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return this.host.childNodes?[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===Node.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`wa-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1}):!1}hasNamedSlot(e){return this.host.querySelector?.(`:scope > [slot="${e}"]`)!==null}test(e,t){return t&&this.host.didSSR&&!this.host.hasUpdated?!!this.host[t]:e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){let e=this.host.shadowRoot;e&&`addEventListener`in e&&e.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){let e=this.host.shadowRoot;e&&`removeEventListener`in e&&e.removeEventListener(`slotchange`,this.handleSlotChange)}},wt=_`
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
`,Tt=_`
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
`,Et=_`
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
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Dt(e,t){let n={waitUntilFirstUpdate:!1,...t};return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}const Ot=/* @__PURE__ */ new Set,kt=/* @__PURE__ */ new Map;let At,jt=`ltr`,Mt=`en`;const Nt=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(Nt){let e=new MutationObserver(Ft);jt=document.documentElement.dir||`ltr`,Mt=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function Pt(...e){e.map(e=>{let t=e.$code.toLowerCase();kt.has(t)?kt.set(t,Object.assign(Object.assign({},kt.get(t)),e)):kt.set(t,e),At||=e}),Ft()}function Ft(){Nt&&(jt=document.documentElement.dir||`ltr`,Mt=document.documentElement.lang||navigator.language),[...Ot.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var It=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Ot.add(this.host)}hostDisconnected(){Ot.delete(this.host)}dir(){return`${this.host.dir||jt}`.toLowerCase()}lang(){let e=`${this.host.lang||Mt}`.toLowerCase().replace(/_/g,`-`);try{return new Intl.Locale(e),e}catch{return At?At.$code.toLowerCase():`en`}}getTranslationData(e){let t;try{t=new Intl.Locale(e.replace(/_/g,`-`))}catch{return{locale:void 0,language:``,region:``,primary:void 0,secondary:void 0}}let n=t.language.toLowerCase(),r=t.region?.toLowerCase()??``,i=kt.get(`${n}-${r}`),a=kt.get(n);return{locale:t,language:n,region:r,primary:i,secondary:a}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&At&&At[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(At&&At[e])i=At[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},Lt={$code:`en`,$name:`English`,$dir:`ltr`,allTagsRemoved:`All tags removed`,am:`AM`,autosizeColumn:`Autosize column`,captions:`Captions`,carousel:`Carousel`,chooseDate:`Choose date`,chooseDecade:`Choose decade`,chooseMonth:`Choose month`,chooseTime:`Choose time`,chooseYear:`Choose year`,clearEntry:`Clear entry`,clearFilter:`Clear filter`,clearSort:`Clear sort`,close:`Close`,closeCalendar:`Close calendar`,closeTimeInput:`Close time picker`,collapseRow:`Collapse row`,columnMenu:`Column options`,columnMovedToPosition:(e,t,n)=>`${e} moved to position ${t} of ${n}`,columns:`Columns`,compactPageXOfY:(e,t)=>`${e} of ${t}`,completed:`Completed`,copied:`Copied`,copy:`Copy`,createOption:e=>`Create "${e}"`,currentlyPlaying:`currently playing`,currentValue:`Current value`,date:`Date`,datePickerKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the calendar.`,day:`Day`,dayPeriod:`AM/PM`,decrement:`Decrement`,deselectAllRows:`Deselect all rows`,disabled:`Disabled`,dropFileHere:`Drop file here or click to browse`,dropFilesHere:`Drop files here or click to browse`,empty:`Empty`,endDate:`End date`,enterFullscreen:`Enter fullscreen`,error:`Error`,exitFullscreen:`Exit fullscreen`,expandRow:`Expand row`,filterByColumn:e=>`Filter by ${e}`,filterFrom:`From`,filterMax:`Max`,filterMin:`Min`,filterTo:`To`,firstPage:`First page`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hideColumn:`Hide column`,hidePassword:`Hide password`,hour:`Hour`,incompleteDate:`Enter a valid date.`,increment:`Increment`,jumpBackwardX:e=>`Jump back ${e} pages`,jumpForwardX:e=>`Jump forward ${e} pages`,lastPage:`Last page`,loading:`Loading`,locked:`Locked`,minute:`Minute`,month:`Month`,moreOptions:`More Options`,mute:`Mute`,nextDecade:`Next decade`,nextMonth:`Next month`,nextPage:`Next page`,nextSlide:`Next slide`,nextVideo:`Next Video`,nextYear:`Next year`,noData:`No data`,noOptions:`No options`,noResults:`No matching results`,notCompleted:`Not completed`,now:`Now`,numCharacters:e=>e===1?`1 character`:`${e} characters`,numCharactersRemaining:e=>e===1?`1 character remaining`:`${e} characters remaining`,numOptionsAvailable:e=>e===0?`No options available`:e===1?`1 option available`:`${e} options available`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,numRowsCopied:e=>e===1?`1 row copied`:`${e} rows copied`,numRowsSelected:e=>e===1?`1 row selected`:`${e} rows selected`,optionPosition:(e,t,n)=>`${e}, ${t} of ${n}`,optionsLoadError:`Options could not be loaded`,pageXOfY:(e,t)=>`Page ${e} of ${t}`,pagination:`Pagination`,pause:`Pause`,pauseAnimation:`Pause animation`,pictureInPicture:`Picture in picture`,pinLeft:`Pin left`,pinRight:`Pin right`,play:`Play`,playAnimation:`Play animation`,playbackSpeed:`Playback speed`,playlist:`Playlist`,pm:`PM`,previousDecade:`Previous decade`,previousMonth:`Previous month`,previousPage:`Previous page`,previousSlide:`Previous slide`,previousVideo:`Previous video`,previousYear:`Previous year`,progress:`Progress`,rangeTooLong:e=>e===1?`Select a range no longer than 1 day`:`Select a range no longer than ${e} days`,rangeTooShort:e=>e===1?`Select a range at least 1 day long`:`Select a range at least ${e} days long`,readonly:`Read-only`,remove:`Remove`,resetColumns:`Reset columns`,resize:`Resize`,resizeColumn:`Resize column`,rowsPerPage:`Rows per page`,scrollableRegion:`Scrollable region`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,search:`Search`,second:`Second`,seek:`Seek`,seekProgress:(e,t)=>`${e} of ${t}`,selectAColorFromTheScreen:`Select a color from the screen`,selectAllRows:`Select all rows`,selected:`Selected`,selectedDateLabel:e=>`Selected: ${e}`,selectedRangeLabel:e=>`Selected range: ${e}`,selectGroup:`Select group`,selectionCleared:`Selection cleared`,selectRow:`Select row`,showingNofMRows:(e,t)=>`Showing ${e} of ${t} rows`,showingXtoYofZ:(e,t,n)=>`${e}\u2013${t} of ${n}`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,sortAscending:`Sort ascending`,sortColumn:`Sort column`,sortDescending:`Sort descending`,startDate:`Start date`,steps:`Steps`,stepXOfY:(e,t)=>`Step ${e} of ${t}`,tagAdded:e=>`${e} added`,tagAlreadyAdded:e=>`${e} is already added`,tagInputKeyboardHelp:`Press Backspace or Delete to remove this tag.`,tagRemoved:e=>`${e} removed`,time:`Time`,timeInputKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the time picker.`,today:`Today`,toggleColorFormat:`Toggle color format`,tooFewTags:e=>e===1?`Add at least 1 tag`:`Add at least ${e} tags`,tooManyTags:e=>e===1?`Add no more than 1 tag`:`Add no more than ${e} tags`,unmute:`Unmute`,unpin:`Unpin`,unpinColumn:`Unpin column`,videoPlayer:`Video player`,volume:`Volume`,year:`Year`,zoomIn:`Zoom in`,zoomOut:`Zoom out`}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;Pt(Lt);var Rt=Lt,zt=class extends It{lang(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||`en`:super.lang()}};Pt(Rt);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const Bt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Vt=e=>(...t)=>({_$litDirective$:e,values:t});var Ht=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Ut=Vt(class extends Ht{constructor(e){if(super(e),e.type!==Bt.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=/* @__PURE__ */ new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return Be}}),Wt=e=>e??v,Gt=Symbol.for(``),Kt=e=>{
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
if(e?.r===Gt)return e?._$litStatic$},qt=(e,...t)=>({_$litStatic$:t.reduce((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1],e[0]),r:Gt}),Jt=/* @__PURE__ */ new Map,Yt=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],(i=Kt(a))!==void 0);)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=Jt.get(e))===void 0&&(o.raw=o,Jt.set(e,t=o)),n=s}return e(t,...n)})(ze);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var b=class extends yt{constructor(){super(...arguments),this.assumeInteractionOn=[`click`],this.hasSlotController=new Ct(this,`[default]`,`start`,`end`),this.localize=new zt(this),this.invalid=!1,this.isIconButton=!1,this.title=``,this.variant=`neutral`,this.appearance=`accent`,this.size=`m`,this.withCaret=!1,this.withStart=!1,this.withEnd=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type=`button`}static get validators(){return[...super.validators,n()]}handleSizeChange(){St(this.localName,this.size)}constructLightDOMButton(){let e=document.createElement(`button`);for(let t of this.attributes)t.name!==`style`&&e.setAttribute(t.name,t.value);return e.type=this.type,e.style.position=`absolute !important`,e.style.width=`0 !important`,e.style.height=`0 !important`,e.style.clipPath=`inset(50%) !important`,e.style.overflow=`hidden !important`,e.style.whiteSpace=`nowrap !important`,this.name&&(e.name=this.name),e.value=this.value||``,e}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopImmediatePropagation();return}if(this.type!==`submit`&&this.type!==`reset`||!this.getForm())return;let t=this.constructLightDOMButton();this.parentElement?.append(t),t.click(),t.remove()}handleInvalid(){this.dispatchEvent(new r)}handleLabelSlotChange(){let e=this.labelSlot.assignedNodes({flatten:!0}),t=!1,n=!1,r=!1,i=!1;[...e].forEach(e=>{if(e.nodeType===Node.ELEMENT_NODE){let r=e;r.localName===`wa-icon`?(n=!0,t||=r.label!==void 0):i=!0}else e.nodeType===Node.TEXT_NODE&&(e.textContent?.trim()||``).length>0&&(r=!0)}),this.isIconButton=n&&!r&&!i,this.customStates.set(`icon-button`,this.isIconButton),this.isIconButton&&!t&&console.warn(`Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.`,this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.customStates.set(`disabled`,this.disabled),this.updateValidity()}handleHrefChange(){this.customStates.set(`link`,this.isLink())}handleLoadingChange(){this.customStates.set(`loading`,this.loading)}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=this.isLink(),t=e?qt`a`:qt`button`;return Yt`
      <${t}
        part="base button"
        class=${Ut({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()===`rtl`,"has-label":this.hasSlotController.test(`[default]`),"has-start":this.hasSlotController.test(`start`,`withStart`),"has-end":this.hasSlotController.test(`end`,`withEnd`),"is-icon-button":this.isIconButton})}
        ?disabled=${Wt(e?void 0:this.disabled)}
        type=${Wt(e?void 0:this.type)}
        title=${this.title}
        name=${Wt(e?void 0:this.name)}
        value=${Wt(e?void 0:this.value)}
        href=${Wt(e?this.href:void 0)}
        target=${Wt(e?this.target:void 0)}
        download=${Wt(e?this.download:void 0)}
        rel=${Wt(e&&this.rel?this.rel:void 0)}
        role=${Wt(e?void 0:`button`)}
        aria-disabled=${Wt(e&&this.disabled?`true`:void 0)}
        aria-busy=${this.loading?`true`:`false`}
        tabindex=${this.disabled?`-1`:`0`}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?Yt`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:``}
        ${this.loading?Yt`<wa-spinner part="spinner"></wa-spinner>`:``}
      </${t}>
    `}};b.shadowRootOptions={...yt.shadowRootOptions,delegatesFocus:!0},b.css=[Tt,Et,wt],s([dt(`.button`)],b.prototype,`button`,2),s([dt(`slot:not([name])`)],b.prototype,`labelSlot`,2),s([lt()],b.prototype,`invalid`,2),s([lt()],b.prototype,`isIconButton`,2),s([y()],b.prototype,`title`,2),s([y({reflect:!0})],b.prototype,`variant`,2),s([y({reflect:!0})],b.prototype,`appearance`,2),s([y({reflect:!0})],b.prototype,`size`,2),s([Dt(`size`)],b.prototype,`handleSizeChange`,1),s([y({attribute:`with-caret`,type:Boolean,reflect:!0})],b.prototype,`withCaret`,2),s([y({attribute:`with-start`,type:Boolean})],b.prototype,`withStart`,2),s([y({attribute:`with-end`,type:Boolean})],b.prototype,`withEnd`,2),s([y({type:Boolean})],b.prototype,`disabled`,2),s([y({type:Boolean,reflect:!0})],b.prototype,`loading`,2),s([y({type:Boolean,reflect:!0})],b.prototype,`pill`,2),s([y()],b.prototype,`type`,2),s([y({reflect:!0})],b.prototype,`name`,2),s([y({reflect:!0})],b.prototype,`value`,2),s([y({reflect:!0})],b.prototype,`href`,2),s([y()],b.prototype,`target`,2),s([y()],b.prototype,`rel`,2),s([y()],b.prototype,`download`,2),s([y({attribute:`formaction`})],b.prototype,`formAction`,2),s([y({attribute:`formenctype`})],b.prototype,`formEnctype`,2),s([y({attribute:`formmethod`})],b.prototype,`formMethod`,2),s([y({attribute:`formnovalidate`,type:Boolean})],b.prototype,`formNoValidate`,2),s([y({attribute:`formtarget`})],b.prototype,`formTarget`,2),s([Dt(`disabled`,{waitUntilFirstUpdate:!0})],b.prototype,`handleDisabledChange`,1),s([Dt(`href`)],b.prototype,`handleHrefChange`,1),s([Dt(`loading`,{waitUntilFirstUpdate:!0})],b.prototype,`handleLoadingChange`,1),b=s([ot(`wa-button`)],b),b.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Xt=_`
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
`,Zt=class extends _t{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(...arguments),this.localize=new zt(this)}render(){return ze`
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
    `}};Zt.css=Xt,Zt=s([ot(`wa-spinner`)],Zt);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Qt=class extends Event{constructor(){super(`wa-error`,{bubbles:!0,cancelable:!1,composed:!0})}},$t=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-load`,{bubbles:!0,cancelable:!1,composed:!0})}},en=_`
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
`,tn=``,nn=``
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;function rn(){return tn.replace(/\/$/,``)}function an(e){nn=e}function on(){if(!nn){let e=document.querySelector(`[data-fa-kit-code]`);e&&an(e.getAttribute(`data-fa-kit-code`)||``)}return nn}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var sn=`7.3.0`;function cn(e,t,n){let r=`solid`;return t===`chisel`&&(r=`chisel-regular`),t===`etch`&&(r=`etch-solid`),t===`graphite`&&(r=`graphite-thin`),t===`jelly`&&(r=`jelly-regular`,n===`duo-regular`&&(r=`jelly-duo-regular`),n===`fill-regular`&&(r=`jelly-fill-regular`)),t===`jelly-duo`&&(r=`jelly-duo-regular`),t===`jelly-fill`&&(r=`jelly-fill-regular`),t===`notdog`&&(n===`solid`&&(r=`notdog-solid`),n===`duo-solid`&&(r=`notdog-duo-solid`)),t===`notdog-duo`&&(r=`notdog-duo-solid`),t===`slab`&&((n===`solid`||n===`regular`)&&(r=`slab-regular`),n===`press-regular`&&(r=`slab-press-regular`)),t===`slab-press`&&(r=`slab-press-regular`),t===`slab-duo`&&(r=`slab-duo-regular`),t===`slab-press-duo`&&(r=`slab-press-duo-regular`),t===`thumbprint`&&(r=`thumbprint-light`),t===`utility`&&(r=`utility-semibold`),t===`utility-duo`&&(r=`utility-duo-semibold`),t===`utility-fill`&&(r=`utility-fill-semibold`),t===`whiteboard`&&(r=`whiteboard-semibold`),t===`mosaic`&&(r=`mosaic-solid`),t===`pixel`&&(r=`pixel-regular`),t===`vellum`&&(r=`vellum-solid`),t===`classic`&&(n===`thin`&&(r=`thin`),n===`light`&&(r=`light`),n===`regular`&&(r=`regular`),n===`solid`&&(r=`solid`)),t===`duotone`&&(n===`thin`&&(r=`duotone-thin`),n===`light`&&(r=`duotone-light`),n===`regular`&&(r=`duotone-regular`),n===`solid`&&(r=`duotone`)),t===`sharp`&&(n===`thin`&&(r=`sharp-thin`),n===`light`&&(r=`sharp-light`),n===`regular`&&(r=`sharp-regular`),n===`solid`&&(r=`sharp-solid`)),t===`sharp-duotone`&&(n===`thin`&&(r=`sharp-duotone-thin`),n===`light`&&(r=`sharp-duotone-light`),n===`regular`&&(r=`sharp-duotone-regular`),n===`solid`&&(r=`sharp-duotone-solid`)),t===`brands`&&(r=`brands`),r}function ln(e,t,n){let r=cn(e,t,n),i=rn();if(i)return`${i}/${r}/${e}.svg`;let a=on();return a.length>0?`https://ka-p.fontawesome.com/releases/v${sn}/svgs/${r}/${e}.svg?token=${encodeURIComponent(a)}`:`https://ka-f.fontawesome.com/releases/v${sn}/svgs/${r}/${e}.svg`}var un={name:`default`,resolver:(e,t=`classic`,n=`solid`)=>ln(e,t,n),mutator:(e,t)=>{if(e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`),t?.family&&!e.hasAttribute(`data-duotone-initialized`)){let{family:n,variant:r}=t;if(n===`duotone`||n===`sharp-duotone`||n===`notdog-duo`||n===`notdog`&&r===`duo-solid`||n===`jelly-duo`||n===`jelly`&&r===`duo-regular`||n===`utility-duo`||n===`slab-duo`||n===`slab-press-duo`||n===`thumbprint`){let n=[...e.querySelectorAll(`path`)],r=n.find(e=>!e.hasAttribute(`opacity`)),i=n.find(e=>e.hasAttribute(`opacity`));if(!r||!i)return;if(r.setAttribute(`data-duotone-primary`,``),i.setAttribute(`data-duotone-secondary`,``),t.swapOpacity&&r&&i){let e=i.getAttribute(`opacity`)||`0.4`;r.style.setProperty(`--path-opacity`,e),i.style.setProperty(`--path-opacity`,`1`)}e.setAttribute(`data-duotone-initialized`,``)}}}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function dn(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var fn={solid:{"arrow-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`,"arrow-up":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>`,backward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M236.3 107.1C247.9 96 265 92.9 279.7 99.2C294.4 105.5 304 120 304 136L304 272.3L476.3 107.2C487.9 96 505 92.9 519.7 99.2C534.4 105.5 544 120 544 136L544 504C544 520 534.4 534.5 519.7 540.8C505 547.1 487.9 544 476.3 532.9L304 367.7L304 504C304 520 294.4 534.5 279.7 540.8C265 547.1 247.9 544 236.3 532.9L44.3 348.9C36.5 341.3 32 330.9 32 320C32 309.1 36.5 298.7 44.3 291.1L236.3 107.1z"/></svg>`,"backward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M491 100.8C478.1 93.8 462.3 94.5 450 102.6L192 272.1L192 128C192 110.3 177.7 96 160 96C142.3 96 128 110.3 128 128L128 512C128 529.7 142.3 544 160 544C177.7 544 192 529.7 192 512L192 367.9L450 537.5C462.3 545.6 478 546.3 491 539.3C504 532.3 512 518.8 512 504.1L512 136.1C512 121.4 503.9 107.9 491 100.9z"/></svg>`,bars:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>`,"angles-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M77.3 256 214.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256zm192 0L406.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L269.3 256z"/></svg>`,"angles-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.7 256 297.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 256zm-192 0L105.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256z"/></svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>`,"chevron-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`,"chevron-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>`,"chevron-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>`,circle:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>`,"closed-captioning":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M64 192C64 156.7 92.7 128 128 128L512 128C547.3 128 576 156.7 576 192L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 192zM216 272L248 272C252.4 272 256 275.6 256 280C256 293.3 266.7 304 280 304C293.3 304 304 293.3 304 280C304 249.1 278.9 224 248 224L216 224C185.1 224 160 249.1 160 280L160 360C160 390.9 185.1 416 216 416L248 416C278.9 416 304 390.9 304 360C304 346.7 293.3 336 280 336C266.7 336 256 346.7 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 280C208 275.6 211.6 272 216 272zM384 280C384 275.6 387.6 272 392 272L424 272C428.4 272 432 275.6 432 280C432 293.3 442.7 304 456 304C469.3 304 480 293.3 480 280C480 249.1 454.9 224 424 224L392 224C361.1 224 336 249.1 336 280L336 360C336 390.9 361.1 416 392 416L424 416C454.9 416 480 390.9 480 360C480 346.7 469.3 336 456 336C442.7 336 432 346.7 432 360C432 364.4 428.4 368 424 368L392 368C387.6 368 384 364.4 384 360L384 280z"/></svg>`,"closed-captioning-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M39 39.1C48.4 29.7 63.6 29.7 72.9 39.1L161.8 128L512 128C547.3 128 576 156.7 576 192L576 448C576 473.5 561.1 495.4 539.6 505.8L601 567.1C610.4 576.5 610.4 591.7 601 601C591.6 610.3 576.4 610.4 567.1 601L39 73.1C29.7 63.7 29.7 48.5 39 39.1zM384 350.1L384 279.9C384 275.5 387.6 271.9 392 271.9L424 271.9C428.4 271.9 432 275.5 432 279.9C432 293.2 442.7 303.9 456 303.9C469.3 303.9 480 293.2 480 279.9C480 249 454.9 223.9 424 223.9L392 223.9C361.1 223.9 336 249 336 279.9L336 302.1L384 350.1zM445.5 411.6C465.7 403.2 480 383.2 480 359.9C480 346.6 469.3 335.9 456 335.9C442.7 335.9 432 346.6 432 359.9C432 364.3 428.4 367.9 424 367.9L401.8 367.9L445.5 411.6zM162.3 264.1C160.8 269.1 160 274.5 160 280L160 360C160 390.9 185.1 416 216 416L248 416C266.1 416 282.1 407.5 292.4 394.2L410.2 512L128 512C92.7 512 64 483.3 64 448L64 192C64 184.2 65.4 176.7 68 169.8L162.3 264.1zM256.1 357.9C256 358.6 256 359.3 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 309.8L256.1 357.9z"/></svg>`,compress:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>`,ellipsis:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M96 320C96 289.1 121.1 264 152 264C182.9 264 208 289.1 208 320C208 350.9 182.9 376 152 376C121.1 376 96 350.9 96 320zM264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320zM488 264C518.9 264 544 289.1 544 320C544 350.9 518.9 376 488 376C457.1 376 432 350.9 432 320C432 289.1 457.1 264 488 264z"/></svg>`,"ellipsis-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/></svg>`,expand:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 96C110.3 96 96 110.3 96 128L96 224C96 241.7 110.3 256 128 256C145.7 256 160 241.7 160 224L160 160L224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L128 96zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 512C96 529.7 110.3 544 128 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480L160 416zM416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160L480 224C480 241.7 494.3 256 512 256C529.7 256 544 241.7 544 224L544 128C544 110.3 529.7 96 512 96L416 96zM544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L512 544C529.7 544 544 529.7 544 512L544 416z"/></svg>`,eyedropper:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>`,filter:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 64C19.1 64 7.4 71.8 2.4 83.8S.2 109.5 9.4 118.6L192 301.3 192 416c0 8.5 3.4 16.6 9.4 22.6l64 64c9.2 9.2 22.9 11.9 34.9 6.9S320 492.9 320 480l0-178.7 182.6-182.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 64 480 64L32 64z"/></svg>`,forward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M403.7 107.1C392.1 96 375 92.9 360.3 99.2C345.6 105.5 336 120 336 136L336 272.3L163.7 107.2C152.1 96 135 92.9 120.3 99.2C105.6 105.5 96 120 96 136L96 504C96 520 105.6 534.5 120.3 540.8C135 547.1 152.1 544 163.7 532.9L336 367.7L336 504C336 520 345.6 534.5 360.3 540.8C375 547.1 392.1 544 403.7 532.9L595.7 348.9C603.6 341.4 608 330.9 608 320C608 309.1 603.5 298.7 595.7 291.1L403.7 107.1z"/></svg>`,file:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>`,"file-audio":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>`,"file-code":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>`,"file-excel":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>`,"file-image":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>`,"file-pdf":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>`,"file-powerpoint":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>`,"file-video":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>`,"file-word":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>`,"file-zipper":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>`,"forward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M21 36.8c12.9-7 28.7-6.3 41 1.8L320 208.1 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-144.1-258 169.6c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440L0 72C0 57.3 8.1 43.8 21 36.8z"/></svg>`,gauge:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,gear:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>`,"grip-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>`,indeterminate:`<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>`,"magnifying-glass":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>`,minus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>`,pause:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>`,"picture-in-picture":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M448 32c35.3 0 64 28.7 64 64l0 112-64 0 0-112-384 0 0 320 144 0 0 64-144 0-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416 0 96C0 62.9 25.2 35.6 57.5 32.3L64 32 448 32zm16 224c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48l160 0z"/></svg>`,play:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>`,"play-circle":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>`,plus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>`,"table-columns":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 64l0 256 128 0 0-256-128 0zm320 0l-128 0 0 256 128 0 0-256z"/></svg>`,thumbtack:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 10.3 134.1c37.1 21.2 65.8 56.4 78.2 99.7l3.8 13.4c2.8 9.7 .8 20-5.2 28.1S362 352 352 352L32 352c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1L5 297.8c12.4-43.3 41-78.5 78.2-99.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 400l64 0 0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-112z"/></svg>`,"up-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M406.6 502.6l96-96c9.2-9.2 11.9-22.9 6.9-34.9S492.9 352 480 352l-64 0 0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 320-64 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l96 96c12.5 12.5 32.8 12.5 45.3 0zM150.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-9.2 9.2-11.9 22.9-6.9 34.9S19.1 160 32 160l64 0 0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320 64 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-96-96z"/></svg>`,upload:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>`,user:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>`,volume:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM441.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C443.3 170.7 464 210.9 464 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-low":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,xmark:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>`},regular:{calendar:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z"/></svg>`,"circle-question":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`,"circle-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,clock:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>`,copy:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>`,eye:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>`,"eye-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>`}},pn={name:`system`,resolver:(e,t=`classic`,n=`solid`)=>{let r=fn[n][e]??fn.regular[e]??fn.regular[`circle-question`];return r?dn(r):``},mutator:e=>{e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`)}},mn=`classic`,hn=[un,pn],gn=/* @__PURE__ */ new Set
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;function _n(e){gn.add(e)}function vn(e){gn.delete(e)}function yn(e){return hn.find(t=>t.name===e)}function bn(){return mn}
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const{I:xn}=et,Sn=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Cn=Symbol(),wn=Symbol(),Tn,En=/* @__PURE__ */ new Map,x=class extends _t{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label=``,this.library=`default`,this.rotate=0,this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=ze`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let n=this.shadowRoot.querySelector(`[part='svg']`);return typeof t.mutator==`function`&&t.mutator(n,this),this.svg}try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?Cn:wn}catch{return wn}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return Cn;Tn||=new DOMParser;let r=Tn.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):Cn}catch{return Cn}}}connectedCallback(){super.connectedCallback(),_n(this)}firstUpdated(e){super.firstUpdated(e),this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),vn(this)}async getIconSource(){let e=yn(this.library),t=this.family||bn();if(this.name&&e){let n=this.canvas===`auto`||this.autoWidth,r;try{r=await e.resolver(this.name,t,this.variant,n)}catch{r=void 0}return{url:r,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=await this.getIconSource(),n=t?yn(this.library):void 0;if(!e){this.svg=null;return}let r=En.get(e);r||(r=this.resolveIcon(e,n),En.set(e,r));let i=await r;if(i===wn&&En.delete(e),e===(await this.getIconSource()).url){if(Sn(i))this.svg=i;else switch(i){case wn:case Cn:this.svg=null,this.dispatchEvent(new Qt);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new $t)}}}willUpdate(e){return this.style||this.setStyleProperty(`--rotate-angle`,`${this.rotate}deg`),super.willUpdate(e)}updated(e){super.updated(e);let t=yn(this.library);this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`);let n=this.shadowRoot?.querySelector(`svg`);n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:ze`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};x.css=en,s([lt()],x.prototype,`svg`,2),s([y({reflect:!0})],x.prototype,`name`,2),s([y({reflect:!0})],x.prototype,`family`,2),s([y({reflect:!0})],x.prototype,`variant`,2),s([y({reflect:!0})],x.prototype,`canvas`,2),s([y({attribute:`auto-width`,type:Boolean,reflect:!0})],x.prototype,`autoWidth`,2),s([y({attribute:`swap-opacity`,type:Boolean,reflect:!0})],x.prototype,`swapOpacity`,2),s([y()],x.prototype,`src`,2),s([y()],x.prototype,`label`,2),s([y({reflect:!0})],x.prototype,`library`,2),s([y({type:Number,reflect:!0})],x.prototype,`rotate`,2),s([y({type:String,reflect:!0})],x.prototype,`flip`,2),s([y({type:String,reflect:!0})],x.prototype,`animation`,2),s([Dt(`label`)],x.prototype,`handleLabelChange`,1),s([Dt([`family`,`name`,`library`,`variant`,`src`,`autoWidth`,`canvas`,`swapOpacity`],{waitUntilFirstUpdate:!0})],x.prototype,`setIcon`,1),x=s([ot(`wa-icon`)],x);var Dn=/* @__PURE__ */ t({default:()=>b}),On=class extends Event{constructor(e){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-content-change`,{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}},kn=_`
  :host {
    display: contents;
  }

  /*
   * Force-hide unselected children. A bare [hidden] (display: none from the UA sheet) loses to any
   * author display set on the child — a utility class like .wa-flank, or a component's own
   * :host display — so children with their own layout wouldn't actually hide without this.
   */
  ::slotted([hidden]) {
    display: none !important;
  }

  /*
   * @keyframes are defined in both document scope (random-content.ts) and here:
   * Chromium resolves animation-name from the document for slotted elements;
   * WebKit resolves it from the shadow root. Both copies are needed.
   */

  @keyframes wa-rc-fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes wa-rc-fade-up {
    from {
      opacity: 0;
      transform: translateY(var(--animation-translate, 0.5em));
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes wa-rc-fade-down {
    from {
      opacity: 0;
      transform: translateY(calc(-1 * var(--animation-translate, 0.5em)));
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes wa-rc-fade-left {
    from {
      opacity: 0;
      transform: translateX(var(--animation-translate, 0.5em));
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes wa-rc-fade-right {
    from {
      opacity: 0;
      transform: translateX(calc(-1 * var(--animation-translate, 0.5em)));
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  /* The JS already skips animations under reduced motion; this guards CSS-only consumers too. */
  @media (prefers-reduced-motion: no-preference) {
    ::slotted([data-wa-animation]) {
      animation-duration: var(--animation-duration, 300ms);
      animation-timing-function: var(--animation-easing, ease);
      animation-fill-mode: both;
    }

    ::slotted([data-wa-animation='fade']) {
      animation-name: wa-rc-fade;
    }

    ::slotted([data-wa-animation='fade-up']) {
      animation-name: wa-rc-fade-up;
    }

    ::slotted([data-wa-animation='fade-down']) {
      animation-name: wa-rc-fade-down;
    }

    ::slotted([data-wa-animation='fade-left']) {
      animation-name: wa-rc-fade-left;
    }

    ::slotted([data-wa-animation='fade-right']) {
      animation-name: wa-rc-fade-right;
    }
  }
`,An=_`
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
`,jn=class{constructor(e,t){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},e.addController(this),this.host=e,this.tickCallback=t}hostConnected(){this.host.addEventListener(`mouseenter`,this.pause),this.host.addEventListener(`mouseleave`,this.resume),this.host.addEventListener(`focusin`,this.pause),this.host.addEventListener(`focusout`,this.resume),this.host.addEventListener(`touchstart`,this.pause,{passive:!0}),this.host.addEventListener(`touchend`,this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener(`mouseenter`,this.pause),this.host.removeEventListener(`mouseleave`,this.resume),this.host.removeEventListener(`focusin`,this.pause),this.host.removeEventListener(`focusout`,this.resume),this.host.removeEventListener(`touchstart`,this.pause),this.host.removeEventListener(`touchend`,this.resume)}start(e){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},e)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Mn(){return window.matchMedia(`(prefers-reduced-motion: reduce)`).matches}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
if(typeof document<`u`){let e=new CSSStyleSheet;e.replaceSync(`
    @keyframes wa-rc-fade {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes wa-rc-fade-up {
      from { opacity: 0; transform: translateY(var(--animation-translate, 0.5em)); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes wa-rc-fade-down {
      from { opacity: 0; transform: translateY(calc(-1 * var(--animation-translate, 0.5em))); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes wa-rc-fade-left {
      from { opacity: 0; transform: translateX(var(--animation-translate, 0.5em)); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes wa-rc-fade-right {
      from { opacity: 0; transform: translateX(calc(-1 * var(--animation-translate, 0.5em))); }
      to { opacity: 1; transform: translateX(0); }
    }
  `),document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}var S=class extends _t{constructor(){super(...arguments),this.sequenceCursor=0,this.uniqueQueue=[],this.currentSelection=/* @__PURE__ */ new Set,this.isInitialSelection=!0,this.autoplayController=new jn(this,()=>this.randomize()),this.animationCleanups=/* @__PURE__ */ new WeakMap,this.liveAnnouncement=``,this.items=1,this.mode=`unique`,this.autoplay=!1,this.autoplayInterval=3e3,this.animation=`none`}connectedCallback(){super.connectedCallback(),this.hasUpdated&&this.syncAutoplay()}firstUpdated(e){super.firstUpdated(e),this.syncAutoplay()}handleAutoplayChange(){this.syncAutoplay()}handleModeChange(){this.sequenceCursor=0,this.uniqueQueue=[],this.currentSelection.clear(),this.randomize()}handleItemsChange(){this.uniqueQueue=[],this.randomize()}randomize(){let e=this.assignedChildren();if(!e.length)return[];let t=Math.min(Math.max(1,this.items),e.length),n;if(this.mode===`sequence`)n=[],Array.from({length:t}).forEach((t,r)=>{n.push(e[(this.sequenceCursor+r)%e.length])}),this.sequenceCursor=(this.sequenceCursor+t)%e.length;else if(this.mode===`unique`){if(this.uniqueQueue.length<t){let n=new Set(this.uniqueQueue),r=e.filter(e=>!this.currentSelection.has(e)&&!n.has(e)),i=e.filter(e=>this.currentSelection.has(e)&&!n.has(e));this.uniqueQueue.push(...this.sample(r,r.length),...this.sample(i,i.length)),this.uniqueQueue.length<t&&(this.uniqueQueue=this.sample([...e],e.length))}n=this.uniqueQueue.splice(0,t),this.currentSelection=new Set(n)}else{let r=e.filter(e=>!this.currentSelection.has(e));n=this.sample(r.length>=t?r:e,t),this.currentSelection=new Set(n)}let r=n[0],i=n[n.length-1];return e.forEach(e=>{let t=e,a=n.includes(e);delete t.dataset.waAnimation,t.style.display=``,t.hidden=!a,t.style.marginBlockStart=a&&e===r?`0`:``,t.style.marginBlockEnd=a&&e===i?`0`:``}),this.animation!==`none`&&!Mn()&&n.forEach(e=>{let t=e;this.animation!==`fade`&&getComputedStyle(e).display===`inline`&&(t.style.display=`inline-block`),e.getAnimations().forEach(e=>e.cancel()),t.dataset.waAnimation=this.animation,this.animationCleanups.get(e)?.abort();let n=new AbortController;this.animationCleanups.set(e,n),t.addEventListener(`animationend`,()=>delete t.dataset.waAnimation,{once:!0,signal:n.signal})}),this.isInitialSelection?this.isInitialSelection=!1:this.liveAnnouncement=n.map(e=>e.textContent?.trim()).filter(Boolean).join(`, `),this.dispatchEvent(new On({items:n})),n}syncAutoplay(){this.autoplayController.stop(),this.autoplay&&this.autoplayInterval>0&&this.autoplayController.start(this.autoplayInterval)}assignedChildren(){return(this.shadowRoot?.querySelector(`slot`))?.assignedElements()??[]}sample(e,t){let n=[...e];return Array.from({length:t}).forEach((e,t)=>{let r=t+Math.floor(Math.random()*(n.length-t));[n[t],n[r]]=[n[r],n[t]]}),n.slice(0,t)}handleSlotChange(){this.randomize()}render(){return ze`
      <slot @slotchange=${this.handleSlotChange}></slot>
      <div class="wa-visually-hidden" role="status" aria-live="polite" aria-atomic="true">${this.liveAnnouncement}</div>
    `}};S.css=[kn,An],s([lt()],S.prototype,`liveAnnouncement`,2),s([y({type:Number})],S.prototype,`items`,2),s([y({reflect:!0})],S.prototype,`mode`,2),s([y({type:Boolean,reflect:!0})],S.prototype,`autoplay`,2),s([y({type:Number,attribute:`autoplay-interval`})],S.prototype,`autoplayInterval`,2),s([y({reflect:!0})],S.prototype,`animation`,2),s([Dt([`autoplay`,`autoplayInterval`],{waitUntilFirstUpdate:!0})],S.prototype,`handleAutoplayChange`,1),s([Dt(`mode`,{waitUntilFirstUpdate:!0})],S.prototype,`handleModeChange`,1),s([Dt(`items`,{waitUntilFirstUpdate:!0})],S.prototype,`handleItemsChange`,1),S=s([ot(`wa-random-content`)],S);var Nn=/* @__PURE__ */ t({default:()=>S}),C
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;Object.getOwnPropertyDescriptors||(()=>{var e;if(typeof Reflect<`u`&&Reflect.ownKeys)e=Reflect.ownKeys;else{var t=Object.getOwnPropertySymbols||(e=>[]);e=(e=>Object.getOwnPropertyNames(e).concat(t(e)))}return(t=>{for(var n=e(t),r={},i=n.length|0,a=0;a!==i;){var o=n[a];Object.defineProperty(r,o,{configurable:!0,enumerable:!0,writable:!0,value:Object.getOwnPropertyDescriptor(t,o)}),a=a+1|0}return r})})();function Pn(e){this.c=e}C=Pn.prototype,C.toString=(function(){return String.fromCharCode(this.c)});function w(e,t){this.l=e,this.h=t}C=w.prototype,C.toString=(function(){return Ua(this.l,this.h)});function Fn(e){switch(typeof e){case`string`:return Eu.l();case`number`:return Xn(e)?e<<24>>24===e?El.l():e<<16>>16===e?Il.l():bu.l():Zn(e)?yu.l():vu.l();case`boolean`:return Zc.l();case`undefined`:return Ia.l();default:return e instanceof w?Cu.l():e instanceof Pn?el.l():e&&e.$classData?e.$classData.l():null}}function In(e){switch(typeof e){case`string`:return`java.lang.String`;case`number`:return Xn(e)?e<<24>>24===e?`java.lang.Byte`:e<<16>>16===e?`java.lang.Short`:`java.lang.Integer`:Zn(e)?`java.lang.Float`:`java.lang.Double`;case`boolean`:return`java.lang.Boolean`;case`undefined`:return`java.lang.Void`;default:return e instanceof w?`java.lang.Long`:e instanceof Pn?`java.lang.Character`:e&&e.$classData?e.$classData.N:null.gs()}}function Ln(e,t){switch(typeof e){case`string`:return Tu(e,t);case`number`:return gu(e,t);case`boolean`:return Yc(e,t);case`undefined`:return Na(e,t);default:return e&&e.$classData||e===null?e.c(t):e instanceof w?xu(e.l,e.h,t):e instanceof Pn?$c(e.c,t):nr.prototype.c.call(e,t)}}function Rn(e){switch(typeof e){case`string`:return K(e);case`number`:return _u(e);case`boolean`:return Xc(e);case`undefined`:return Pa(e);default:return e&&e.$classData||e===null?e.i():e instanceof w?Su(e.l,e.h):e instanceof Pn?Qc(e.c):nr.prototype.i.call(e)}}function zn(e){return e===void 0?`undefined`:e.toString()}function Bn(e){if(e===0)throw new Tl(`/ by zero`);return e}function Vn(e){return e>2147483647?2147483647:e<-2147483648?-2147483648:e|0}function Hn(e){return String.fromCharCode(e)}var Un=/* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(8));function Wn(e,t,n,r,i){if(e!==n||r-t>>>0>i>>>0)for(var a=0;a<i;a=a+1|0)n[r+a|0]=e[t+a|0];else for(var a=i-1|0;a>=0;a=a-1|0)n[r+a|0]=e[t+a|0]}var Gn=0,Kn=/* @__PURE__ */ new WeakMap;function qn(e){switch(typeof e){case`string`:return K(e);case`number`:return _u(e);case`bigint`:var t=0;for(e<BigInt(0)&&(e=~e);e!==BigInt(0);)t^=Number(BigInt.asIntN(32,e)),e>>=BigInt(32);return t;case`boolean`:return e?1231:1237;case`undefined`:return 0;case`symbol`:var n=e.description;return n===void 0?0:K(n);default:if(e===null)return 0;var r=Kn.get(e);return r===void 0&&(r=Gn+1|0,Gn=r,Kn.set(e,r)),r}}function Jn(e){return typeof e==`number`&&e<<24>>24===e&&1/e!=-1/0}function Yn(e){return typeof e==`number`&&e<<16>>16===e&&1/e!=-1/0}function Xn(e){return typeof e==`number`&&(e|0)===e&&1/e!=-1/0}function Zn(e){return typeof e==`number`&&(e!==e||Math.fround(e)===e)}function Qn(e){return new Pn(e)}Qn(0);function T(e,t){return new w(e,t)}var $n=T(0,0);function er(e){return e===null?0:e.c}function tr(e){return e===null?$n:e}function nr(){}C=nr.prototype,C.constructor=nr;function E(){}E.prototype=C,C.i=(function(){return qn(this)}),C.c=(function(e){return this===e}),C.n=(function(){var e=this.i();return In(this)+`@`+(e>>>0).toString(16)}),C.toString=(function(){return this.n()});function D(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}C=D.prototype=new E,C.constructor=D,C.X=(function(e,t,n,r){Wn(this.a,e,t.a,n,r)}),C.S=(function(){return new D(this.a.slice())});function rr(){}rr.prototype=C;function ir(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=!1}else this.a=e}C=ir.prototype=new E,C.constructor=ir,C.X=(function(e,t,n,r){Wn(this.a,e,t.a,n,r)}),C.S=(function(){return new ir(this.a.slice())});function ar(e){this.a=typeof e==`number`?new Uint16Array(e):e}C=ar.prototype=new E,C.constructor=ar,C.X=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),C.S=(function(){return new ar(this.a.slice())});function or(e){this.a=typeof e==`number`?new Int8Array(e):e}C=or.prototype=new E,C.constructor=or,C.X=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),C.S=(function(){return new or(this.a.slice())});function sr(e){this.a=typeof e==`number`?new Int16Array(e):e}C=sr.prototype=new E,C.constructor=sr,C.X=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),C.S=(function(){return new sr(this.a.slice())});function cr(e){this.a=typeof e==`number`?new Int32Array(e):e}C=cr.prototype=new E,C.constructor=cr,C.X=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),C.S=(function(){return new cr(this.a.slice())});function lr(e){typeof e==`number`?(e<<=1,this.a=new Int32Array(e)):this.a=e}C=lr.prototype=new E,C.constructor=lr,C.X=(function(e,t,n,r){t.a.set(this.a.subarray(e<<1,(e+r|0)<<1),n<<1)}),C.S=(function(){return new lr(this.a.slice())});function ur(e){this.a=typeof e==`number`?new Float32Array(e):e}C=ur.prototype=new E,C.constructor=ur,C.X=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),C.S=(function(){return new ur(this.a.slice())});function dr(e){this.a=typeof e==`number`?new Float64Array(e):e}C=dr.prototype=new E,C.constructor=dr,C.X=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),C.S=(function(){return new dr(this.a.slice())});function O(){this.C=void 0,this.n=null,this.O=null,this.B=null,this.D=0,this.z=null,this.E=``,this.L=void 0,this.A=void 0,this.F=void 0,this.w=void 0,this.J=!1,this.N=``,this.X=!1,this.Y=!1,this.Z=!1,this.I=void 0}C=O.prototype,C.p=(function(e,t,n,r,i){this.n={},this.z=e,this.E=t;var a=this;return this.F=(e=>e===a),this.N=n,this.X=!0,this.I=(e=>!1),r!==void 0&&(this.A=new O().y(this,r,i,t===`J`)),this}),C.i=(function(e,t,n,r){var i=Object.getOwnPropertyNames(n)[0];return this.n=n,this.E=`L`+t+`;`,this.F=(e=>!!e.n[i]),this.J=e===2,this.N=t,this.Y=e===1,this.I=r||(e=>!!(e&&e.$classData&&e.$classData.n[i])),typeof e!=`number`&&(e.prototype.$classData=this),this}),C.y=(function(e,t,n,r,i){t.prototype.$classData=this;var a=`[`+e.E;this.C=t,this.n={r:1,a:1},this.O=e,this.B=e,this.D=1,this.E=a,this.N=a,this.Z=!0;var o=this;return this.F=i||(e=>o===e),this.w=r?(e=>{for(var n=e.length|0,r=new t(n),i=r.a,a=0;a<n;a=a+1|0){var o=e[a];i[a<<1]=o.l,i[(a<<1)+1|0]=o.h}return r}):n?(e=>new t(new n(e))):(e=>new t(e)),this.I=(e=>e instanceof t),this}),C.a=(function(e){function t(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}var n=t.prototype=new rr;n.constructor=t,n.X=(function(e,t,n,r){Wn(this.a,e,t.a,n,r)}),n.S=(function(){return new t(this.a.slice())}),n.$classData=this;var r=e.B||e,i=e.D+1,a=`[`+e.E;this.C=t,this.n={r:1,a:1},this.O=e,this.B=r,this.D=i,this.E=a,this.N=a,this.Z=!0;var o=(e=>{var t=e.D;return t===i?r.F(e.B):t>i&&r===k});this.F=o,this.w=(e=>new t(e));var s=this;return this.I=(e=>{var t=e&&e.$classData;return!!t&&(t===s||o(t))}),this}),C.r=(function(){return this.A||=new O().a(this),this.A}),C.l=(function(){return this.L||=new gc(this),this.L}),C.R=(function(e){return this===e||this.F(e)}),C.S=(function(){return this.P?this.P.l():null}),C.Q=(function(){return this.O?this.O.l():null}),C.U=(function(e){if(this===fr)throw Ol(new kl);return new(this.r()).C(e)});var k=new O;k.n={},k.E=`Ljava.lang.Object;`,k.F=(e=>!e.X),k.N=`java.lang.Object`,k.I=(e=>e!==null),k.A=new O().y(k,D,void 0,!1,(e=>{var t=e.D;return t===1?!e.B.X:t>1})),nr.prototype.$classData=k;var fr=new O().p(void 0,`V`,`void`,void 0,void 0),pr=new O().p(!1,`Z`,`boolean`,ir,void 0),mr=new O().p(0,`C`,`char`,ar,Uint16Array),hr=new O().p(0,`B`,`byte`,or,Int8Array),gr=new O().p(0,`S`,`short`,sr,Int16Array),_r=new O().p(0,`I`,`int`,cr,Int32Array),vr=new O().p($n,`J`,`long`,lr,Int32Array),yr=new O().p(0,`F`,`float`,ur,Float32Array),br=new O().p(0,`D`,`double`,dr,Float64Array);new Int8Array(new Int32Array([1]).buffer)[0];function xr(e,t,n){for(var r=new Int32Array(e),i=t.length|0,a=0,o=0,s=0,c=0;o!==i;){var l=t.charCodeAt(o);l<80?c=(c|l-48)<<5:(c|=l-93,a=(a&n)+c|0,r[s]=a,s=s+1|0,c=0),o=o+1|0}return r}function Sr(e,t){return new cr(xr(e,t,-1))}function Cr(e){return Fn(e).cm()+`@`+qn(e)}function wr(e){var t=e.ct;return t===void 0?Cr(e):t}function Tr(){Er=this,Dr().gp(new W((e=>void 0)),io().dv,!0)}C=Tr.prototype=new E,C.constructor=Tr,C.gp=(function(e,t,n){return new Hc(e,n,t,this)}),new O().i(Tr,`com.raquo.airstream.core.Observer$`,{bd:1});var Er;function Dr(){return Er||=new Tr,Er}function Or(e){this.bS=null,this.cu=null,this.bT=0,this.bS=e,this.cu=void 0;var t=Wr().bi();this.bT=t===void 0?1:1+t.bT|0,Mr().bn===-1||this.bT>Mr().bn?Zs().cp(new mu(this,Mr().bn)):Ir().L?Ir().ah.push(this)|0:Wr().cg(this)}C=Or.prototype=new E,C.constructor=Or;var kr=new O().i(Or,`com.raquo.airstream.core.Transaction`,{bg:1});function Ar(){this.bn=0,this.cv=null,jr=this,this.bn=1e3,this.cv=new W((e=>{throw B(new V,`Attempted to run Transaction `+e+` after it was already executed.`)}))}C=Ar.prototype=new E,C.constructor=Ar,C.dW=(function(e){try{e.bS.e(e);var t=e.cu;if(t!==void 0)for(;t.gu();)t.gr().gw(e)}catch(e){var n=e instanceof ks?e:new X(e);Zs().cp(n)}}),new O().i(Ar,`com.raquo.airstream.core.Transaction$`,{bh:1});var jr;function Mr(){return jr||=new Ar,jr}function Nr(e){e.bo.length|0?new Or(new W((t=>{for(;(e.bo.length|0)>0;){var n=e.bo.shift();try{n.e(t)}catch(e){var r=e instanceof ks?e:new X(e);Zs().cp(r)}}for(;(e.ah.length|0)>0;){var i=e.ah.shift();Wr().cg(i)}}))):(e.ah.length|0)>0&&new Or(new W((t=>{for(;(e.ah.length|0)>0;)Wr().cg(e.ah.shift())})))}function Pr(){this.L=!1,this.bo=null,this.ah=null,Fr=this,this.L=!1,this.bo=li().ac(F().W(new(Xa.r()).C([]))),this.ah=li().ac(F().W(new(kr.r()).C([])))}C=Pr.prototype=new E,C.constructor=Pr,new O().i(Pr,`com.raquo.airstream.core.Transaction$onStart$`,{bi:1});var Fr;function Ir(){return Fr||=new Pr,Fr}function Lr(e,t){return e.ai.get(t)}function Rr(e,t){e.bp.unshift(t)}function zr(e){return e.bp.shift()}function Br(e,t,n){var r=Lr(e,t),i=r===void 0,a=r===void 0?li().ac(F().W(new(kr.r()).C([]))):r;a.push(n),i&&e.ai.set(t,a)}function Vr(e,t){var n=Lr(e,t),r=n===void 0||(n.length|0)>0?n:void 0;if(r!==void 0){var i=r.shift();return r.length|0||e.ai.delete(t),i}}function Hr(){this.bp=null,this.ai=null,Ur=this,this.bp=li().ac(F().W(new(kr.r()).C([]))),this.ai=/* @__PURE__ */ new Map}C=Hr.prototype=new E,C.constructor=Hr,C.cg=(function(e){var t=this.bi();t===void 0?(Rr(this,e),Mr().dW(e),this.fa(e)):Br(this,t,e)}),C.fa=(function(e){for(var t=e;;){var n=this.bi(),r=t;if(!(n!==void 0&&P().B(r,n)))throw B(new V,`Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.`);this.fX(t),t.bS=Mr().cv;var i=this.bi();if(P().B(i,void 0)){if((this.ai.size|0)>0){var a=new Gs(0);throw this.ai.forEach((e=>((t,n)=>{e.b0=e.b0+(t.length|0)|0}))(a)),B(new V,`Transaction queue error: Stack cleared, but a total of `+a.b0+` children for `+(this.ai.size|0)+` transactions remain. This is a bug in Airstream.`)}return}Mr().dW(i),t=i}}),C.fX=(function(e){for(var t=e;;){var n=Vr(this,t);if(P().B(n,void 0)){zr(this);var r=this.bi();if(!P().B(r,void 0))t=r;else return}else{Rr(this,n);return}}}),C.bi=(function(){return this.bp[0]}),new O().i(Hr,`com.raquo.airstream.core.Transaction$pendingTransactions$`,{bj:1});var Ur;function Wr(){return Ur||=new Hr,Ur}function Gr(e,t){var n=e.Y.indexOf(t)|0;if(n!==-1)e.Y.splice(n,1),e.y.b()||t.ed();else throw B(new V,`Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?`)}function Kr(e){for(;(e.bq.length|0)>0;)Gr(e,e.bq.shift())}function qr(e){this.cw=null,this.Y=null,this.aB=!1,this.bq=null,this.y=null,this.aC=0,this.cw=e,this.Y=li().ac(F().W(new(Yr.r()).C([]))),this.aB=!0,this.bq=li().ac(F().W(new(Yr.r()).C([]))),this.y=q(),this.aC=0}C=qr.prototype=new E,C.constructor=qr,C.dR=(function(){if(this.y.b()){var e=Ir(),t=(()=>{var e=new zo(this.cw);this.y=new J(e),this.aB=!1,this.aC=0;for(var t=0,n=this.Y.length|0;t<n;){var r=t+this.aC|0;this.Y[r].ec(e),t=1+t|0}Kr(this),this.aB=!0,this.aC=0});if(Ir(),e.L)t();else{e.L=!0;try{t()}finally{e.L=!1,Nr(e)}}}else throw B(new V,`Can not activate `+this+`: it is already active`)}),C.f1=(function(){if(this.y.b())throw B(new V,`Can not deactivate DynamicOwner: it is not active`);this.aB=!1;for(var e=this.Y,t=0,n=e.length|0;t<n;)e[t].ed(),t=1+t|0;Kr(this);var r=this.y;r.b()||r.q().fI(),Kr(this),this.aB=!0,this.y=q()}),C.eH=(function(e,t){t?(this.aC=1+this.aC|0,this.Y.unshift(e)):this.Y.push(e);var n=this.y;if(!n.b()){var r=n.q();e.ec(r)}}),C.g4=(function(e){this.aB?Gr(this,e):this.bq.push(e)}),new O().i(qr,`com.raquo.airstream.ownership.DynamicOwner`,{bk:1});function Jr(e,t,n){this.br=null,this.cx=null,this.bs=null,this.br=e,this.cx=t,this.bs=q(),e.eH(this,n)}C=Jr.prototype=new E,C.constructor=Jr,C.bN=(function(){this.br.g4(this)}),C.ec=(function(e){var t=Ir(),n=(()=>{this.bs=this.cx.e(e)});if(Ir(),t.L)n();else{t.L=!0;try{n()}finally{t.L=!1,Nr(t)}}}),C.ed=(function(){var e=this.bs;e.b()||(e.q().bN(),this.bs=q())});var Yr=new O().i(Jr,`com.raquo.airstream.ownership.DynamicSubscription`,{bl:1});function Xr(){}C=Xr.prototype=new E,C.constructor=Xr,C.cq=(function(e,t,n){return new Jr(e,new W((e=>new J(t.e(e)))),n)}),C.el=(function(e,t,n){return new Jr(e,new W((e=>(t.e(e),q()))),n)}),new O().i(Xr,`com.raquo.airstream.ownership.DynamicSubscription$`,{bm:1});var Zr;function Qr(){return Zr||=new Xr,Zr}function $r(e){e.aD=li().ac(F().W(new(ai.r()).C([])))}function ei(e){for(var t=e.aD,n=0,r=t.length|0;n<r;)ri(t[n]),n=1+n|0;e.aD.length=0}function ti(e,t){var n=e.aD.indexOf(t)|0;if(n!==-1)e.aD.splice(n,1);else throw B(new V,`Can not remove Subscription from Owner: subscription not found.`)}function ni(e,t){e.aD.push(t)}function ri(e){if(!e.bV)e.cz.aw(),e.bV=!0;else throw B(new V,`Can not kill Subscription: it was already killed.`)}function ii(e,t){this.cA=null,this.cz=null,this.bV=!1,this.cA=e,this.cz=t,this.bV=!1,e.fU(this)}C=ii.prototype=new E,C.constructor=ii,C.bN=(function(){ri(this),ti(this.cA,this)});var ai=new O().i(ii,`com.raquo.airstream.ownership.Subscription`,{bp:1});function oi(e,t){this.cB=null,this.cC=null,this.Z=null,this.aj=!1,this.cB=e,this.cC=t,this.Z=q(),this.aj=!1}C=oi.prototype=new E,C.constructor=oi,C.fD=(function(){var e=this.Z;return!e.b()&&!e.q().br.y.b()}),C.gb=(function(e){if(this.aj)throw B(new V,`Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var t=this.Z;if(t.b())var n=!1;else var r=t.q().br,n=e===null?r===null:e===r;if(!n){this.fD()&&!e.y.b()&&(this.aj=!0);var i=this.Z;i.b()||(i.q().bN(),this.Z=q());var a=Qr().cq(e,new W((e=>(this.aj||this.cB.aw(),new ii(e,new dl((()=>{this.aj||this.cC.aw()})))))),!1);this.Z=new J(a),this.aj=!1}}),C.eW=(function(){if(this.aj)throw B(new V,`Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var e=this.Z;e.b()||e.q().bN(),this.Z=q()}),new O().i(oi,`com.raquo.airstream.ownership.TransferableSubscription`,{bq:1});function si(){}C=si.prototype=new E,C.constructor=si,C.ac=(function(e){return[...Po().gl(e)]}),new O().i(si,`com.raquo.ew.JsArray$`,{br:1});var ci;function li(){return ci||=new si,ci}function ui(){this.cD=null,di=this,document.createElement(`template`),this.eZ(U().k.gg().gh()),this.cD=/* @__PURE__ */ RegExp(` `,`g`)}C=ui.prototype=new E,C.constructor=ui,C.eM=(function(e,t){try{return e.appendChild(t),!0}catch(e){var n=e instanceof ks?e:new X(e);if(n instanceof X&&n.O instanceof DOMException)return!1;throw n instanceof X?n.O:n}}),C.fE=(function(e,t){for(var n=e;;){if(n.parentNode!==null)var r=n.parentNode;else var i=n.host,r=i===void 0?null:i;if(r===null)return!1;if(P().B(t,r))return!0;n=r}}),C.eF=(function(e,t){e.addEventListener(t.aE.bt.bu,t.bZ,t.c0)}),C.g2=(function(e,t){e.removeEventListener(t.aE.bt.bu,t.bZ,t.c0)}),C.eY=(function(e){return document.createElement(e.cn())}),C.ft=(function(e,t){var n=this.fu(e,t);return n===void 0?void 0:t.aO.bd(n)}),C.fu=(function(e,t){var n=e.M.getAttributeNS(null,t.ak);return n===null?void 0:n}),C.ej=(function(e,t,n){this.ga(e,t,t.aO.be(n))}),C.ga=(function(e,t,n){n===null?this.g3(e,t):e.M.setAttribute(t.ak,n)}),C.g3=(function(e,t){e.M.removeAttribute(t.ak)}),C.eZ=(function(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e.d6)}),C.fx=(function(e,t){var n=this.fy(e,t);return n===void 0?void 0:t.bX.bd(n)}),C.fy=(function(e,t){var n=e.co(),r=t.bw,i=n.getAttributeNS(r.b()?null:r.q(),t.bY);return i===null?void 0:i}),C.gc=(function(e,t,n){this.gd(e,t,t.bX.be(n))}),C.gd=(function(e,t,n){if(n===null)this.g5(e,t);else{var r=t.bw;if(r.b())e.co().setAttribute(t.bv,n);else{var i=r.q();e.co().setAttributeNS(i,t.bv,n)}}}),C.g5=(function(e,t){var n=e.co(),r=t.bw;n.removeAttributeNS(r.b()?null:r.q(),t.bY)}),C.f0=(function(e){return document.createTextNode(e)}),C.f3=(function(e,t){for(var n=t,r=e;;){if(r===null)return n;var i=r.parentNode,a=new Qd(this.f2(r),n);r=i,n=a}}),C.f2=(function(e){if(e instanceof HTMLElement){var t=e.id;if(fo(),t!==``)var n=`#`+t;else var r=e.className,n=(fo(),r===``?``:`.`+r.replace(this.cD,`.`));return e.tagName.toLowerCase()+n}return e.nodeName}),new O().i(ui,`com.raquo.laminar.DomApi$`,{bs:1});var di;function A(){return di||=new ui,di}function fi(e){Dr(),Zs()}function pi(e){e.ep=Fi()}function mi(e){hi(e,new W((e=>{e.cV.M.focus()})))}function hi(e,t){return new Xo(new W((e=>{var n=new Ws(!e.T.y.b()),r=new W((e=>{n.bG?n.bG=!1:t.e(e)}));Qr().el(e.T,new W((e=>(t=>{r.e(new Mi(e,t))}))(e)),!1)})),Fi())}function gi(){this.bW=null,this.cP=null,this.cQ=!1,this.cO=null,_i=this,this.bW=new Vo(vi()),new Vo(vi()),new Vo(vi()),this.cO=new Bo}C=gi.prototype=new E,C.constructor=gi,C.dP=(function(){return this.cQ||=(this.cP=new Ho(this),!0),this.cP}),new O().i(gi,`com.raquo.laminar.codecs.package$`,{bA:1});var _i;function vi(){return _i||=new gi,_i}function yi(e){e.eq=bi(e,`class`,` `)}function bi(e,t,n){var r=Go(new Ko,t,vi().bW);return new Uo(r.ak,new W((e=>{var t=A().ft(e,r);return t===void 0?``:t})),new fl(((e,t)=>{A().ej(e,r,t)})),n)}function xi(e){e.eo=Si(e,`class`,` `)}function Si(e,t,n){var r=new Jo(t,vi().bW,q());return new Uo(r.bv,new W((e=>{var t=A().fx(e,r);return t===void 0?``:t})),new fl(((e,t)=>{A().gc(e,r,t)})),n)}function Ci(e,t,n,r){this.bt=null,this.cT=!1,this.cS=!1,this.cR=null,this.bt=e,this.cT=t,this.cS=n,this.cR=r}C=Ci.prototype=new E,C.constructor=Ci,new O().i(Ci,`com.raquo.laminar.keys.EventProcessor`,{bO:1});function wi(){}C=wi.prototype=new E,C.constructor=wi,C.fd=(function(e,t,n){return new Ci(e,t,n,new W((e=>new J(e))))}),new O().i(wi,`com.raquo.laminar.keys.EventProcessor$`,{bP:1});var Ti;function Ei(){return Ti||=new wi,Ti}function Di(){}C=Di.prototype=new E,C.constructor=Di;function Oi(){}Oi.prototype=C;function ki(){this.er=null,this.es=null,this.et=null,this.eu=null,this.er=`http://www.w3.org/2000/svg`,this.es=`http://www.w3.org/1999/xlink`,this.et=`http://www.w3.org/XML/1998/namespace`,this.eu=`http://www.w3.org/2000/xmlns/`}C=ki.prototype=new E,C.constructor=ki,C.fO=(function(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`xlink`:return`http://www.w3.org/1999/xlink`;case`xml`:return`http://www.w3.org/XML/1998/namespace`;case`xmlns`:return`http://www.w3.org/2000/xmlns/`;default:throw new Bl(e)}}),new O().i(ki,`com.raquo.laminar.keys.SvgAttr$`,{bS:1});var Ai;function ji(){return Ai||=new ki,Ai}function Mi(e,t){this.cV=null,this.cU=null,this.cV=e,this.cU=t}C=Mi.prototype=new E,C.constructor=Mi,new O().i(Mi,`com.raquo.laminar.lifecycle.MountContext`,{bT:1});function Ni(){this.ev=null,Pi=this,this.ev=new Yo}C=Ni.prototype=new E,C.constructor=Ni,new O().i(Ni,`com.raquo.laminar.modifiers.Modifier$`,{bX:1});var Pi;function Fi(){return Pi||=new Ni,Pi}function Ii(){this.t=null,Li=this,this.t=new Zo(new W((e=>e)),j()),new Zo(new W((e=>``+(e|0))),j()),new Zo(new W((e=>``+ +e)),j()),new Zo(new W((e=>``+!!e)),j()),new Zo(new W((e=>e.gk())),j())}C=Ii.prototype=new E,C.constructor=Ii,new O().i(Ii,`com.raquo.laminar.modifiers.RenderableText$`,{c1:1});var Li;function j(){return Li||=new Ii,Li}function Ri(){}C=Ri.prototype=new E,C.constructor=Ri,C.ci=(function(e,t,n){var r=new J(e);t.en(r),n!==void 0&&n.gv(e,t);var i=A().eM(e.bk(),t.bk());return i&&t.ek(r),i}),new O().i(Ri,`com.raquo.laminar.nodes.ParentNode$`,{c4:1});var zi;function Bi(){return zi||=new Ri,zi}function Vi(){}C=Vi.prototype=new E,C.constructor=Vi,C.gn=(function(e,t){return Qr().cq(e.T,new W((n=>t.e(new Mi(e,n)))),!0)}),new O().i(Vi,`com.raquo.laminar.nodes.ReactiveElement$`,{c6:1});var Hi;function Ui(){return Hi||=new Vi,Hi}function Wi(){}C=Wi.prototype=new E,C.constructor=Wi,C.eK=(function(){Ki().fi(),Ki().fj(),Ki().fk(),Ki().fl()}),C.fi=(function(){var e=document.querySelector(`#example1`);to().bI(e).b()||(U(),new tc(e,mc().bc(new Q([]),new Q([U().k.C().u(new Q([z(U().k,`Tip: use a clear label for every form control.`,j().t)])),U().k.C().u(new Q([z(U().k,`Tip: keep related options together.`,j().t)])),U().k.C().u(new Q([z(U().k,`Tip: give users useful feedback after an action.`,j().t)]))]))))}),C.fj=(function(){var e=document.querySelector(`#example2`);if(!to().bI(e).b()){U();var t=mc().bc(new Q([new H((e=>e.fM().g9()))]),new Q([U().k.C().u(new Q([z(U().k,`First tip`,j().t)])),U().k.C().u(new Q([z(U().k,`Second tip`,j().t)])),U().k.C().u(new Q([z(U().k,`Third tip`,j().t)]))]));new tc(e,U().k.f7().u(new Q([t,ac().bc(new Q([]),new Q([z(U().k,`Next tip`,j().t),new Qs((U(),Ei().fd(U().k.fR(),!1,!1)),new H((e=>{t.M.randomize()})))]))])))}}),C.fk=(function(){var e=document.querySelector(`#example3`);to().bI(e).b()||(U(),new tc(e,mc().bc(new Q([new H((e=>e.fF().b2(2)))]),new Q([U().k.C().u(new Q([z(U().k,`Design`,j().t)])),U().k.C().u(new Q([z(U().k,`Development`,j().t)])),U().k.C().u(new Q([z(U().k,`Testing`,j().t)])),U().k.C().u(new Q([z(U().k,`Documentation`,j().t)]))]))))}),C.fl=(function(){var e=document.querySelector(`#example4`);to().bI(e).b()||(U(),new tc(e,mc().bc(new Q([new H((e=>e.eQ().b2(!0))),new H((e=>e.eR().b2(3e3))),new H((e=>e.eI().fn()))]),new Q([U().k.C().u(new Q([z(U().k,`A little progress every day.`,j().t)])),U().k.C().u(new Q([z(U().k,`Simple code is easier to understand.`,j().t)])),U().k.C().u(new Q([z(U().k,`Make the next step clear.`,j().t)]))]))))}),new O().i(Wi,`examples.randomContent.Main$package$`,{cc:1});var Gi;function Ki(){return Gi||=new Wi,Gi}function qi(e){try{Ki().eK()}catch(e){throw e}}function Ji(){}C=Ji.prototype=new E,C.constructor=Ji,C.g8=(function(e,t){var n=Un;n.setFloat64(0,e,!0);var r=n.getInt32(0,!0)|0,i=n.getInt32(4,!0)|0,a=2047&(i>>>20|0),o=a+t|0,s=-2146435073&i,c=0,l=0;if(c=r,l=s,!((a-1|0)>>>0<=2045)){var u=2147483647&i;if((r|u)===0||u>=2146435072)return e;var d=1048575&i,f=d===0?32+Math.clz32(r)|0:Math.clz32(d);o=o-(f-12|0)|0;var p=-2147483648&i,m=f-11|0,h=32&m?0:r<<m,g=p|1048575&(32&m?r<<m:(r>>>1|0)>>>~m|0|i<<m);c=h,l=g}if((o-1|0)>>>0<=2045){var ee=o,_=c,te=l,ne=ee<<20|te,re=Un;return re.setInt32(0,_,!0),re.setInt32(4,ne,!0),+re.getFloat64(0,!0)}if((53+o|0)>>>0<=53){var ie=54+o|0,ae=c,oe=l,se=ie<<20|oe,ce=Un;return ce.setInt32(0,ae,!0),ce.setInt32(4,se,!0),5551115123125783e-32*ce.getFloat64(0,!0)}var le=2047&~(t>>31),ue=-2147483648&i,de=le<<20|ue,fe=Un;return fe.setInt32(0,0,!0),fe.setInt32(4,de,!0),+fe.getFloat64(0,!0)}),new O().i(Ji,`java.lang.Math$`,{cw:1});var Yi;function Xi(){return Yi||=new Ji,Yi}function Zi(e,t){for(var n=M().R(`^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$`),r=[],i=0;i<(t.length|0);){var a=t[i];if(a!==``){var o=n.exec(a);if(o!==null){var s=Qi(e,o[1]),c=s[0],l=s[1],u=o[2],d=o[3],f=parseInt(d),p=o[4];r.push(new ws(c,l,u,f|0,p===void 0?-1:parseInt(p)|0))}else r.push(new ws(`<jscode>`,a,null,-1,-1))|0}i=1+i|0}var m=r.length|0,h=new(Ts.r()).C(m);for(i=0;i<m;)h.a[i]=r[i],i=1+i|0;return h}function Qi(e,t){var n=M().R(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$`),r=M().R(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$`),i=M().R(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$`),a=M().R(`^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$`),o=M().R(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$`),s=n.exec(t),c=s===null?r.exec(t):s;if(c!==null)return[$i(e,c[1]),oa(e,c[2])];var l=i.exec(t),u=l===null?a.exec(t):l;if(u!==null)return[$i(e,u[1]),`<init>`];var d=o.exec(t);return d===null?[`<jscode>`,t]:[$i(e,d[1]),`<clinit>`]}function $i(e,t){var n=ta(e);if(Ma().cd.call(n,t))var r=ta(e)[t];else var r=_a(e,0,t);return r.split(`_`).join(`.`).split(`＿`).join(`_`)}function ea(e){if(!((1&e.E)<<24>>24)){var t={};t.O=`java_lang_Object`,t.T=`java_lang_String`;for(var n=0;n<=22;){if(n>=2){var r=`T`+n;t[r]=`scala_Tuple`+n}var i=`F`+n;t[i]=`scala_Function`+n,n=1+n|0}e.ca=t,e.E=(1|e.E)<<24>>24}return e.ca}function ta(e){return(1&e.E)<<24>>24?e.ca:ea(e)}function na(e){if(!((2&e.E)<<24>>24)){var t={};t.sjsr_=`scala_scalajs_runtime_`,t.sjs_=`scala_scalajs_`,t.sci_=`scala_collection_immutable_`,t.scm_=`scala_collection_mutable_`,t.scg_=`scala_collection_generic_`,t.sc_=`scala_collection_`,t.sr_=`scala_runtime_`,t.s_=`scala_`,t.jl_=`java_lang_`,t.ju_=`java_util_`,e.cb=t,e.E=(2|e.E)<<24>>24}return e.cb}function ra(e){return(2&e.E)<<24>>24?e.cb:na(e)}function ia(e){return(4&e.E)<<24>>24||(e.c9=Object.keys(ra(e)),e.E=(4|e.E)<<24>>24),e.c9}function aa(e){return(4&e.E)<<24>>24?e.c9:ia(e)}function oa(e,t){if(t.startsWith(`init___`))return`<init>`;var n=t.indexOf(`__`)|0;return n<0?t:t.substring(0,n)}function sa(e,t){return t?t.arguments&&t.stack?ca(e,t):t.stack&&t.sourceURL?da(e,t):t.stack&&t.number?ua(e,t):t.stack&&t.fileName?la(e,t):t.message&&t[`opera#sourceloc`]?t.stacktrace?t.message.indexOf(`
`)>-1&&t.message.split(`
`).length>t.stacktrace.split(`
`).length?fa(e,t):pa(e,t):fa(e,t):t.message&&t.stack&&t.stacktrace?t.stacktrace.indexOf(`called from line`)<0?ma(e,t):ha(e,t):t.stack&&!t.fileName?ca(e,t):ga(e,t):[]}function ca(e,t){return(t.stack+`
`).replace(M().R(`^[\\s\\S]+?\\s+at\\s+`),` at `).replace(M().x(`^\\s+(at eval )?at\\s+`,`gm`),``).replace(M().x(`^([^\\(]+?)([\\n])`,`gm`),`{anonymous}() ($1)$2`).replace(M().x(`^Object.<anonymous>\\s*\\(([^\\)]+)\\)`,`gm`),`{anonymous}() ($1)`).replace(M().x(`^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(0,-1)}function la(e,t){return t.stack.replace(M().x(`(?:\\n@:0)?\\s+$`,`m`),``).replace(M().x(`^(?:\\((\\S*)\\))?@`,`gm`),`{anonymous}($1)@`).split(`
`)}function ua(e,t){return t.stack.replace(M().x(`^\\s*at\\s+(.*)$`,`gm`),`$1`).replace(M().x(`^Anonymous function\\s+`,`gm`),`{anonymous}() `).replace(M().x(`^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(1)}function da(e,t){return t.stack.replace(M().x(`\\[native code\\]\\n`,`m`),``).replace(M().x(`^(?=\\w+Error\\:).*$\\n`,`m`),``).replace(M().x(`^@`,`gm`),`{anonymous}()@`).split(`
`)}function fa(e,t){for(var n=M().x(`Line (\\d+).*script (?:in )?(\\S+)`,`i`),r=t.message.split(`
`),i=[],a=2,o=r.length|0;a<o;){var s=n.exec(r[a]);s!==null&&i.push(`{anonymous}()@`+s[2]+`:`+s[1])|0,a=2+a|0}return i}function pa(e,t){for(var n=M().x(`Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$`,`i`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[3],l=c===void 0?`{anonymous}`:c;i.push(l+`()@`+s[2]+`:`+s[1])|0}a=2+a|0}return i}function ma(e,t){for(var n=M().R(`^(.*)@(.+):(\\d+)$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[1],l=c===void 0?`global code`:c+`()`;i.push(l+`@`+s[2]+`:`+s[3])|0}a=1+a|0}return i}function ha(e,t){for(var n=M().R(`^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[4]+`:`+s[1]+`:`+s[2],l=s[2],u=(l===void 0?`global code`:l).replace(M().R(`<anonymous function: (\\S+)>`),`$1`).replace(M().R(`<anonymous function>`),`{anonymous}`);i.push(u+`@`+c)|0}a=2+a|0}return i}function ga(e,t){return[]}function _a(e,t,n){for(;;)if(t<(aa(e).length|0)){var r=aa(e)[t];if(n.startsWith(r))return``+ra(e)[r]+n.substring(r.length);t=1+t|0}else return n.startsWith(`L`)?n.substring(1):n}function va(){this.ca=null,this.cb=null,this.c9=null,this.E=0}C=va.prototype=new E,C.constructor=va,C.fm=(function(e){return Zi(this,sa(this,e))}),new O().i(va,`java.lang.StackTrace$`,{cB:1});var ya;function ba(){return ya||=new va,ya}function xa(){}C=xa.prototype=new E,C.constructor=xa,C.R=(function(e){return new RegExp(e)}),C.x=(function(e,t){return new RegExp(e,t)}),new O().i(xa,`java.lang.StackTrace$StringRE$`,{cC:1});var Sa;function M(){return Sa||=new xa,Sa}function Ca(){this.dm=null,this.ew=null,wa=this,this.dm=new Ku(!1),this.ew=new Ku(!0)}C=Ca.prototype=new E,C.constructor=Ca,new O().i(Ca,`java.lang.System$Streams$`,{cG:1});var wa;function Ta(){return wa||=new Ca,wa}function Ea(e){var t={};return t[`java.version`]=`1.8`,t[`java.vm.specification.version`]=`1.8`,t[`java.vm.specification.vendor`]=`Oracle Corporation`,t[`java.vm.specification.name`]=`Java Virtual Machine Specification`,t[`java.vm.name`]=`Scala.js`,t[`java.vm.version`]=`1.22.0`,t[`java.specification.version`]=`1.8`,t[`java.specification.vendor`]=`Oracle Corporation`,t[`java.specification.name`]=`Java Platform API Specification`,t[`file.separator`]=`/`,t[`path.separator`]=`:`,t[`line.separator`]=`
`,t}function Da(){this.cc=null,this.dn=null,Oa=this,this.cc=Ea(this),this.dn=null}C=Da.prototype=new E,C.constructor=Da,C.e9=(function(e,t){if(this.cc!==null){var n=this.cc;return Ma().cd.call(n,e)?n[e]:t}return this.dn.e9(e,t)}),new O().i(Da,`java.lang.System$SystemProperties$`,{cH:1});var Oa;function ka(){return Oa||=new Da,Oa}function Aa(){this.cd=null,ja=this,this.cd=Object.prototype.hasOwnProperty}C=Aa.prototype=new E,C.constructor=Aa,new O().i(Aa,`java.lang.Utils$Cache$`,{cJ:1});var ja;function Ma(){return ja||=new Aa,ja}function Na(e,t){return e===t}function Pa(e){return 0}function Fa(e,t){return!!(e&&e.$classData&&e.$classData.D===t&&e.$classData.B.n.an)}var Ia=new O().i(0,`java.lang.Void`,{an:1},(e=>e===void 0));function La(e,t){throw Dl(new kl,`argument type mismatch`)}function Ra(){}C=Ra.prototype=new E,C.constructor=Ra,C.bf=(function(e){return e instanceof D||e instanceof ir||e instanceof ar||e instanceof or||e instanceof sr||e instanceof cr?e.a.length:e instanceof lr?e.a.length>>>1|0:(e instanceof ur||e instanceof dr||La(this,e),e.a.length)}),new O().i(Ra,`java.lang.reflect.Array$`,{cK:1});var za;function Ba(){return za||=new Ra,za}function Va(){}C=Va.prototype=new E,C.constructor=Va,C.eT=(function(e,t){for(var n=0,r=e.a.length;;)if(n===r)return~n;else{var i=(n+r|0)>>>1|0,a=e.a[i],o=t===a?0:t<a?-1:1;if(o<0){r=i;continue}if(o!==0){n=1+i|0;continue}return i}}),C.e1=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length>>>1|0;if((t.a.length>>>1|0)!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a,o=i<<1,s=a[o],c=a[o+1|0],l=r,u=t.a,d=l<<1,f=u[d],p=u[d+1|0];if((s^f|c^p)!==0)return!1;r=1+r|0}return!0}),C.e0=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),C.e2=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),C.dZ=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),C.dY=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),C.e3=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),new O().i(Va,`java.util.Arrays$`,{cL:1});var Ha;function N(){return Ha||=new Va,Ha}function Ua(e,t){return Ka().em(e,t)}function Wa(){}C=Wa.prototype=new E,C.constructor=Wa,C.em=(function(e,t){if(t===e>>31)return``+e;if(-2097152&(t^t>>10)){var n=t>>31,r=e^n,i=r-n|0,a=4294967296*(((t^n)+(i>>>0<r>>>0|0)|0)>>>0)+(i>>>0),o=+Math.floor(1.0000000000000265e-9*a),s=i-Math.imul(1e9,o|0)|0;s<0&&(--o,s=1e9+s|0);var c=``+s,l=o,u=c.length,d=``+l+`000000000`.substring(u)+c;return t<0?`-`+d:d}return``+(4294967296*t+(e>>>0))}),C.e8=(function(e){if(e<-0x8000000000000000)return T(0,-2147483648);if(e>=0x8000000000000000)return T(-1,2147483647);var t=e|0,n=23283064365386963e-26*e|0;return T(t,e<0&&t!==0?n-1|0:n)}),C.f8=(function(e,t,n,r){var i=t>>31,a=e^i,o=a-i|0,s=(t^i)+(o>>>0<a>>>0|0)|0,c=r>>31,l=n^c,u=l-c|0,d=(r^c)+(u>>>0<l>>>0|0)|0;if(d|-2097152&u){var f=(4294967296*(s>>>0)+(o>>>0))/(4294967296*(d>>>0)+(u>>>0))+.00390625,p=f|0,m=23283064365386963e-26*f|0,h=65535&u,g=u>>>16|0,ee=65535&p,_=p>>>16|0,te=Math.imul(h,ee),ne=Math.imul(g,ee),re=Math.imul(h,_),ie=te+((ne+re|0)<<16)|0,ae=(te>>>16|0)+re|0;if(((s-((((Math.imul(u,m)+Math.imul(d,p)|0)+Math.imul(g,_)|0)+(ae>>>16|0)|0)+(((65535&ae)+ne|0)>>>16|0)|0)|0)-((o-ie|0)>>>0>o>>>0|0)|0)<0)var oe=p-1|0,se=(m-1|0)+(oe!==-1|0)|0,ce=oe,le=se;else var ce=p,le=m}else var ue=(s>>>0)/(Bn(u)>>>0)|0,ce=(4294967296*(s-Math.imul(u,ue)|0)+(o>>>0))/u|0,le=ue;if((t^r)>=0)return T(ce,le);var de=-ce|0;return T(de,(-le|0)-(de!==0|0)|0)}),C.f9=(function(e,t,n,r){if(!(r|-2097152&n)){var i=(t>>>0)/(Bn(n)>>>0)|0;return T((4294967296*(t-Math.imul(n,i)|0)+(e>>>0))/n|0,i)}if(r>=0){var a=(4294967296*(t>>>0)+(e>>>0))/(4294967296*(r>>>0)+(n>>>0))+.00390625,o=a|0,s=23283064365386963e-26*a|0,c=65535&n,l=n>>>16|0,u=65535&o,d=o>>>16|0,f=Math.imul(c,u),p=Math.imul(l,u),m=Math.imul(c,d),h=f+((p+m|0)<<16)|0,g=(f>>>16|0)+m|0;if(((t-((((Math.imul(n,s)+Math.imul(r,o)|0)+Math.imul(l,d)|0)+(g>>>16|0)|0)+(((65535&g)+p|0)>>>16|0)|0)|0)-((e-h|0)>>>0>e>>>0|0)|0)<0){var ee=o-1|0;return T(ee,(s-1|0)+(ee!==-1|0)|0)}return T(o,s)}return(t===r?e>>>0<n>>>0:t>>>0<r>>>0)?T(0,0):T(1,0)}),C.g0=(function(e,t,n,r){var i=t>>31,a=e^i,o=a-i|0,s=(t^i)+(o>>>0<a>>>0|0)|0,c=r>>31,l=n^c,u=l-c|0,d=(r^c)+(u>>>0<l>>>0|0)|0;if(d|-2097152&u){var f=(4294967296*(s>>>0)+(o>>>0))/(4294967296*(d>>>0)+(u>>>0))+.00390625,p=f|0,m=23283064365386963e-26*f|0,h=65535&u,g=u>>>16|0,ee=65535&p,_=p>>>16|0,te=Math.imul(h,ee),ne=Math.imul(g,ee),re=Math.imul(h,_),ie=te+((ne+re|0)<<16)|0,ae=(te>>>16|0)+re|0,oe=(((Math.imul(u,m)+Math.imul(d,p)|0)+Math.imul(g,_)|0)+(ae>>>16|0)|0)+(((65535&ae)+ne|0)>>>16|0)|0,se=o-ie|0,ce=(s-oe|0)-(se>>>0>o>>>0|0)|0;if(ce<0)var le=se+u|0,ue=(ce+d|0)+(le>>>0<se>>>0|0)|0,de=le,fe=ue;else var de=se,fe=ce}else var pe=(4294967296*((s>>>0)%(Bn(u)>>>0)|0)+(o>>>0))/u|0,de=o-Math.imul(u,pe)|0,fe=0;if(t<0){var me=-de|0;return T(me,(-fe|0)-(me!==0|0)|0)}return T(de,fe)}),C.g1=(function(e,t,n,r){if(!(r|-2097152&n)){var i=(4294967296*((t>>>0)%(Bn(n)>>>0)|0)+(e>>>0))/n|0;return T(e-Math.imul(n,i)|0,0)}if(r>=0){var a=(4294967296*(t>>>0)+(e>>>0))/(4294967296*(r>>>0)+(n>>>0))+.00390625,o=a|0,s=23283064365386963e-26*a|0,c=65535&n,l=n>>>16|0,u=65535&o,d=o>>>16|0,f=Math.imul(c,u),p=Math.imul(l,u),m=Math.imul(c,d),h=f+((p+m|0)<<16)|0,g=(f>>>16|0)+m|0,ee=(((Math.imul(n,s)+Math.imul(r,o)|0)+Math.imul(l,d)|0)+(g>>>16|0)|0)+(((65535&g)+p|0)>>>16|0)|0,_=e-h|0,te=(t-ee|0)-(_>>>0>e>>>0|0)|0;if(te<0){var ne=_+n|0;return T(ne,(te+r|0)+(ne>>>0<_>>>0|0)|0)}return T(_,te)}if(t===r?e>>>0<n>>>0:t>>>0<r>>>0)return T(e,t);var re=e-n|0;return T(re,(t-r|0)-(re>>>0>e>>>0|0)|0)}),new O().i(Wa,`org.scalajs.linker.runtime.RuntimeLong$`,{cN:1});var Ga;function Ka(){return Ga||=new Wa,Ga}function qa(){}C=qa.prototype=new E,C.constructor=qa,C.e5=(function(e,t){var n=e.s();if(n>-1){for(var r=t.eb(n),i=e.f(),a=0;a<n;)F().dU(r,a,i.h()),a=1+a|0;return r}var o=null,s=t.eh(),c=s===mr.l();o=[];for(var l=e.f();l.m();){var u=l.h(),d=c?er(u):u===null?vo().g7(s):u;o.push(d)}return vo().g6(s===fr.l()?Ia.l():s===xo.l()||s===Nc.l()?k.l():s,o)}),C.e4=(function(e,t){if(e===t)return!0;if(e.a.length!==t.a.length)return!1;for(var n=e.a.length,r=0;r<n;){if(!P().B(e.a[r],t.a[r]))return!1;r=1+r|0}return!0}),new O().i(qa,`scala.Array$`,{cO:1});var Ja;function Ya(){return Ja||=new qa,Ja}var Xa=new O().i(1,`scala.Function1`,{e:1});function Za(){}C=Za.prototype=new E,C.constructor=Za;function Qa(){}Qa.prototype=C;function $a(){}C=$a.prototype=new E,C.constructor=$a,C.bI=(function(e){return e===null?q():new J(e)}),new O().i($a,`scala.Option$`,{cW:1});var eo;function to(){return eo||=new $a,eo}function no(){this.dw=null,this.dv=null,ro=this,this.dw=new H((e=>this.dw)),this.dv=new rl}C=no.prototype=new E,C.constructor=no,new O().i(no,`scala.PartialFunction$`,{cX:1});var ro;function io(){return ro||=new no,ro}function ao(e,t){for(var n=e.f();n.m();)t.e(n.h())}function oo(e,t,n,r){return e.s()===0?``+t+r:e.aK(rf(new af),t,n,r).A.l}function so(e,t,n,r,i){var a=t.A;n.length!==0&&(a.l=``+a.l+n);var o=e.f();if(o.m()){var s=o.h();for(a.l=``+a.l+s;o.m();){r.length!==0&&(a.l=``+a.l+r);var c=o.h();a.l=``+a.l+c}}return i.length!==0&&(a.l=``+a.l+i),t}function co(e,t){this.dB=null,this.aV=null,this.dB=e,this.aV=t}C=co.prototype=new E,C.constructor=co,C.fA=(function(){return this.dB.aw().f()}),new O().i(co,`scala.collection.Iterator$ConcatIteratorCell`,{dc:1});function lo(){this.dC=null,uo=this,this.dC=new H((e=>this.dC))}C=lo.prototype=new E,C.constructor=lo,new O().i(lo,`scala.collection.StringOps$`,{dj:1});var uo;function fo(){return uo||=new lo,uo}function po(){this.dF=0,mo=this;try{fo();var e=xs().fG(ka().e9(`scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength`,`64`),10,214748364)}catch(t){if(0)var e;else{var e;throw t}}this.dF=e}C=po.prototype=new E,C.constructor=po,new O().i(po,`scala.collection.immutable.IndexedSeqDefaults$`,{dn:1});var mo;function ho(){return mo||=new po,mo}function go(){}C=go.prototype=new E,C.constructor=go,C.g7=(function(e){return e===hr.l()||e===gr.l()||e===mr.l()||e===_r.l()?0:e===vr.l()?T(0,0):e===yr.l()||e===br.l()?0:e===pr.l()?!1:e===fr.l()?void 0:null}),C.g6=(function(e,t){var n=t.length|0;if(e===mr.l()){for(var r=new ar(n),i=0;i!==n;)r.a[i]=65535&(t[i]|0),i=1+i|0;return r}for(var a=e.ag.U(n),o=0;o!==n;)F().dU(a,o,t[o]),o=1+o|0;return a}),new O().i(go,`scala.collection.mutable.ArrayBuilder$`,{dt:1});var _o;function vo(){return _o||=new go,_o}function yo(){}C=yo.prototype=new E,C.constructor=yo,C.B=(function(e,t){return e===t||(Cs(e)?this.fh(e,t):e instanceof Pn?this.ff(e,t):e===null?t===null:Ln(e,t))}),C.fh=(function(e,t){if(Cs(t))return this.fg(e,t);if(t instanceof Pn){if(typeof e==`number`)return+e===t.c;if(e instanceof w){var n=tr(e),r=n.l,i=n.h,a=t.c,o=a>>31;return(r^a|i^o)===0}return e===null?t===null:Ln(e,t)}return e===null?t===null:Ln(e,t)}),C.fg=(function(e,t){if(typeof e==`number`){var n=+e;if(typeof t==`number`)return n===+t;if(t instanceof w){var r=tr(t),i=r.l;return n===4294967296*r.h+(i>>>0)}return!1}if(e instanceof w){var a=tr(e),o=a.l,s=a.h;if(t instanceof w){var c=tr(t),l=c.l,u=c.h;return(o^l|s^u)===0}if(typeof t==`number`){var d=+t;return 4294967296*s+(o>>>0)===d}return!1}return e===null?t===null:Ln(e,t)}),C.ff=(function(e,t){if(t instanceof Pn)return e.c===t.c;if(Cs(t)){if(typeof t==`number`)return+t===e.c;if(t instanceof w){var n=tr(t),r=n.l,i=n.h,a=e.c,o=a>>31;return(r^a|i^o)===0}return t===null?e===null:Ln(t,e)}return e===null&&t===null}),new O().i(yo,`scala.runtime.BoxesRunTime$`,{dN:1});var bo;function P(){return bo||=new yo,bo}var xo=new O().i(0,`scala.runtime.Null$`,{dQ:1});function So(){}C=So.prototype=new E,C.constructor=So,C.bP=(function(){throw Pl(new G,`tried to cast away nullability, but value is null`)}),new O().i(So,`scala.runtime.Scala3RunTime$`,{dR:1});var Co;function wo(){return Co||=new So,Co}function To(){}C=To.prototype=new E,C.constructor=To,C.eJ=(function(e){return e===null?xo.l():Fn(e)}),C.aL=(function(e,t){if(e instanceof D||e instanceof cr||e instanceof dr)return e.a[t];if(e instanceof lr){var n=e.a,r=t<<1;return T(n[r],n[r+1|0])}if(e instanceof ur)return e.a[t];if(e instanceof ar)return Qn(e.a[t]);if(e instanceof or||e instanceof sr||e instanceof ir)return e.a[t];throw e===null?Fl(new G):new Bl(e)}),C.dU=(function(e,t,n){if(e instanceof D)e.a[t]=n;else if(e instanceof cr)e.a[t]=n|0;else if(e instanceof dr)e.a[t]=+n;else if(e instanceof lr){var r=tr(n),i=e.a,a=t<<1;i[a]=r.l,i[a+1|0]=r.h}else if(e instanceof ur)e.a[t]=Math.fround(n);else if(e instanceof ar)e.a[t]=er(n);else if(e instanceof or)e.a[t]=n|0;else if(e instanceof sr)e.a[t]=n|0;else if(e instanceof ir)e.a[t]=!!n;else throw e===null?Fl(new G):new Bl(e)}),C.eE=(function(e){return oo(e.bj(),e.af()+`(`,`,`,`)`)}),C.W=(function(e){if(e===null)return null;if(e.a.length===0){var t=Iu();return rd(),Nu(t)}return new Fd(e)}),new O().i(To,`scala.runtime.ScalaRunTime$`,{dS:1});var Eo;function F(){return Eo||=new To,Eo}function Do(){}C=Do.prototype=new E,C.constructor=Do,C.j=(function(e,t){var n=this.bO(e,t),r=n;return n=r<<13|r>>>19,Math.imul(5,n)-430675100|0}),C.bO=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|r>>>17,n=Math.imul(461845907,n),e^n}),C.w=(function(e,t){return this.eS(e^t)}),C.eS=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),C.fK=(function(e,t){return t===e>>31?e:e^t}),C.fb=(function(e){var t=Vn(e);if(t===e)return t;var n=Ka().e8(e),r=n.l,i=n.h;if(4294967296*i+(r>>>0)===e)return r^i;var a=e|0;if(a===e&&1/e!=-1/0)return a;if(e!==e)return 2146959360;var o=Un;return o.setFloat64(0,e,!0),(o.getInt32(0,!0)|0)^(o.getInt32(4,!0)|0)}),C.r=(function(e){if(e===null)return 0;if(typeof e==`number`)return this.fb(+e);if(e instanceof w){var t=tr(e);return this.fK(t.l,t.h)}return Rn(e)}),C.fC=(function(e){throw Al(new Ml,``+e)}),new O().i(Do,`scala.runtime.Statics$`,{dU:1});var Oo;function I(){return Oo||=new Do,Oo}function ko(){}C=ko.prototype=new E,C.constructor=ko,C.ge=(function(e,t){return setTimeout((()=>{t.aw()}),e)}),new O().i(ko,`scala.scalajs.js.timers.package$`,{dX:1});var Ao;function jo(){return Ao||=new ko,Ao}function Mo(){}C=Mo.prototype=new E,C.constructor=Mo,C.gl=(function(e){if(e instanceof Q)return e.bH;var t=[];return e.aM(new H((e=>t.push(e)|0))),t}),new O().i(Mo,`scala.scalajs.runtime.Compat$`,{e6:1});var No;function Po(){return No||=new Mo,No}function Fo(){}C=Fo.prototype=new E,C.constructor=Fo,C.gf=(function(e){var t=`Illegal command line`+(e.ea()===0?``:e.ea()===1?` after first argument`:` after `+e.ea()+` arguments`)+`: `+e.gt();Ms().fT().fH(t+`
`)}),new O().i(Fo,`scala.util.CommandLineParser$`,{e7:1});function Io(e){this.cf=null,this.cf=e}C=Io.prototype=new E,C.constructor=Io,C.n=(function(){return`DynamicVariable(`+this.cf+`)`}),new O().i(Io,`scala.util.DynamicVariable`,{e9:1});function Lo(){}C=Lo.prototype=new E,C.constructor=Lo;function Ro(){}Ro.prototype=C,C.j=(function(e,t){var n=this.bO(e,t),r=n;return n=r<<13|r>>>19,Math.imul(5,n)-430675100|0}),C.bO=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|r>>>17,n=Math.imul(461845907,n),e^n}),C.w=(function(e,t){return this.bl(e^t)}),C.bl=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),C.ef=(function(e,t,n){var r=e.ad();if(r===0)return n?t:K(e.af());var i=t;n||(i=this.j(i,K(e.af())));for(var a=0;a<r;)i=this.j(i,I().r(e.ae(a))),a=1+a|0;return this.w(i,r)}),C.gm=(function(e,t){for(var n=0,r=0,i=0,a=1,o=e.f();o.m();){var s=o.h(),c=I().r(s);n=n+c|0,r^=c,a=Math.imul(a,1|c),i=1+i|0}var l=t;return l=this.j(l,n),l=this.j(l,r),l=this.bO(l,a),this.w(l,i)}),C.fS=(function(e,t){var n=e.f(),r=t;if(!n.m())return this.w(r,0);var i=n.h();if(!n.m())return this.w(this.j(r,I().r(i)),1);var a=n.h(),o=I().r(i);r=this.j(r,o);for(var s=r,c=I().r(a),l=c-o|0,u=2;n.m();){r=this.j(r,c);var d=I().r(n.h());if(l!==(d-c|0)||l===0){for(r=this.j(r,d),u=1+u|0;n.m();)r=this.j(r,I().r(n.h())),u=1+u|0;return this.w(r,u)}c=d,u=1+u|0}return this.bl(this.j(this.j(s,l),c))}),C.p=(function(e,t){var n=t,r=Ba().bf(e);switch(r){case 0:return this.w(n,0);case 1:return this.w(this.j(n,I().r(F().aL(e,0))),1);default:var i=I().r(F().aL(e,0));n=this.j(n,i);for(var a=n,o=I().r(F().aL(e,1)),s=o-i|0,c=2;c<r;){n=this.j(n,o);var l=I().r(F().aL(e,c));if(s!==(l-o|0)||s===0){for(n=this.j(n,l),c=1+c|0;c<r;)n=this.j(n,I().r(F().aL(e,c))),c=1+c|0;return this.w(n,r)}o=l,c=1+c|0}return this.bl(this.j(this.j(a,s),o))}}),C.fY=(function(e,t,n,r){return this.bl(this.j(this.j(this.j(r,e),t),n))}),C.fB=(function(e,t){var n=t,r=e.d();switch(r){case 0:return this.w(n,0);case 1:return this.w(this.j(n,I().r(e.g(0))),1);default:var i=I().r(e.g(0));n=this.j(n,i);for(var a=n,o=I().r(e.g(1)),s=o-i|0,c=2;c<r;){n=this.j(n,o);var l=I().r(e.g(c));if(s!==(l-o|0)||s===0){for(n=this.j(n,l),c=1+c|0;c<r;)n=this.j(n,I().r(e.g(c))),c=1+c|0;return this.w(n,r)}o=l,c=1+c|0}return this.bl(this.j(this.j(a,s),o))}}),C.fJ=(function(e,t){for(var n=0,r=t,i=0,a=0,o=0,s=0,c=e;!c.b();){var l=c.Q(),u=c.D(),d=I().r(l);switch(r=this.j(r,d),i){case 0:s=d,i=1;break;case 1:a=d-o|0,i=2;break;case 2:(a!==(d-o|0)||a===0)&&(i=3)}o=d,n=1+n|0,c=u}return i===2?this.fY(s,a,o,t):this.w(r,n)});function zo(e){this.aD=null,this.cy=null,this.bU=!1,this.cy=e,$r(this),this.bU=!1}C=zo.prototype=new E,C.constructor=zo,C.fU=(function(e){this.bU?(ri(e),this.cy.aw()):ni(this,e)}),C.fI=(function(){ei(this),this.bU=!0}),new O().i(zo,`com.raquo.airstream.ownership.OneTimeOwner`,{bn:1,bo:1});function Bo(){}C=Bo.prototype=new E,C.constructor=Bo,C.f5=(function(e){return e!==null}),C.fe=(function(e){return e?``:null}),C.bd=(function(e){return this.f5(e)}),C.be=(function(e){return this.fe(!!e)}),new O().i(Bo,`com.raquo.laminar.codecs.package$$anon$1`,{bB:1,W:1});function Vo(e){if(e===null)throw Fl(new G)}C=Vo.prototype=new E,C.constructor=Vo,C.be=(function(e){return e}),C.bd=(function(e){return e}),new O().i(Vo,`com.raquo.laminar.codecs.package$$anon$2`,{bC:1,W:1});function Ho(e){if(e===null)throw Fl(new G)}C=Ho.prototype=new E,C.constructor=Ho,C.f4=(function(e){return fo(),vs().fV(e)}),C.bd=(function(e){return this.f4(e)}),C.be=(function(e){return``+ +e}),new O().i(Ho,`com.raquo.laminar.codecs.package$$anon$4`,{bD:1,W:1});function Uo(e,t,n,r){}C=Uo.prototype=new Oi,C.constructor=Uo,new O().i(Uo,`com.raquo.laminar.keys.CompositeKey`,{bN:1,R:1});function Wo(e){this.bu=null,this.bu=e}C=Wo.prototype=new Oi,C.constructor=Wo,new O().i(Wo,`com.raquo.laminar.keys.EventProp`,{bQ:1,R:1});function Go(e,t,n){return e.ak=t,e.aO=n,e}function Ko(){this.ak=null,this.aO=null}C=Ko.prototype=new Oi,C.constructor=Ko;function qo(){}qo.prototype=C,C.b2=(function(e){return new ec(this,e,new pl(((e,t,n)=>{A().ej(e,t,n)})))}),new O().i(Ko,`com.raquo.laminar.keys.HtmlAttr`,{Z:1,R:1});function Jo(e,t,n){this.bY=null,this.bX=null,this.bv=null,this.bw=null,this.bY=e,this.bX=t;var r=n.b()?q():new J(n.q()+`:`+e);this.bv=r.b()?e:r.q(),this.bw=n.b()?q():new J(ji().fO(n.q()))}C=Jo.prototype=new Oi,C.constructor=Jo,new O().i(Jo,`com.raquo.laminar.keys.SvgAttr`,{bR:1,R:1});function Yo(){}C=Yo.prototype=new E,C.constructor=Yo,C.ab=(function(e){}),new O().i(Yo,`com.raquo.laminar.modifiers.Modifier$$anon$1`,{bY:1,S:1});function Xo(e,t){if(this.cZ=null,this.cZ=e,t===null)throw Fl(new G)}C=Xo.prototype=new E,C.constructor=Xo,C.ab=(function(e){var t=Ir(),n=(()=>{this.cZ.e(e)});if(Ir(),t.L)n();else{t.L=!0;try{n()}finally{t.L=!1,Nr(t)}}}),new O().i(Xo,`com.raquo.laminar.modifiers.Modifier$$anon$2`,{bZ:1,S:1});function Zo(e,t){if(this.d0=null,this.d0=e,t===null)throw Fl(new G)}C=Zo.prototype=new E,C.constructor=Zo,C.eP=(function(e){return this.d0.e(e)}),new O().i(Zo,`com.raquo.laminar.modifiers.RenderableText$$anon$1`,{c2:1,c0:1});function Qo(e){e.dX(new qr(new dl((()=>{throw B(new V,`Attempting to use owner of unmounted element: `+oo(A().f3(e.bk(),(A(),tf())),``,` > `,``))}))))}function $o(e,t,n){return e.c4=t,e}function es(){this.c4=null}C=es.prototype=new E,C.constructor=es;function ts(){}ts.prototype=C,C.cn=(function(){return this.c4}),C.u=(function(e){var t=this.eV();return e.aM(new W((e=>{e.ab(t)}))),t}),C.eV=(function(){return new hu(this,A().eY(this))}),new O().i(es,`com.raquo.laminar.tags.HtmlTag`,{aa:1,a1:1});function ns(e,t){this.d6=null,this.d6=e}C=ns.prototype=new E,C.constructor=ns,new O().i(ns,`com.raquo.laminar.tags.SvgTag`,{cb:1,a1:1});function rs(){}C=rs.prototype=new E,C.constructor=rs,C.be=(function(e){return e}),C.bd=(function(e){return e}),new O().i(rs,`io.github.nguyenyou.webawesome.laminar.UnionAsStringCodec$$anon$1`,{ch:1,W:1});function is(e,t){return e.bz=t,e.dQ(),e}function as(){this.bz=null,this.by=null,this.bA=!1}C=as.prototype=new E,C.constructor=as;function os(){}os.prototype=C,C.gi=(function(){return this.bA||=(this.by=new nc(this.bz,new H((e=>void 0)),void 0),!0),this.by}),C.bc=(function(e,t){var n=this.gi().u(new Q([]));return e.aM(new H((e=>{e.e(this).ab(n)}))),t.aM(new H((e=>{e.ab(n)}))),n});function ss(){this.c5=null,cs=this,this.c5=Sr(67,`1C]4m6m=c4]4]4]4]4]4]4]4]4]3g4]2m9]2m1Jm1m9s4g5mm6]3]4mm12>mEm1m6m1]3]=]DI]1<m24mIs4g2c4w9];]4]<]3m3m=m3mH]8]2m=mBHm3]4mK3{gggg2:g=m@]13]4E]`)}C=ss.prototype=new E,C.constructor=ss,C.f6=(function(e,t){if(e<256)var n=(e-48|0)>>>0<=9?e-48|0:(e-65|0)>>>0<=25?e-55|0:(e-97|0)>>>0<=25?e-87|0:-1;else if((e-65313|0)>>>0<=25)var n=e-65303|0;else if((e-65345|0)>>>0<=25)var n=e-65335|0;else{var r=N().eT(this.c5,e),i=r<0?-2-r|0:r;if(i<0)var n=-1;else var a=e-this.c5.a[i]|0,n=a>9?-1:a}return n<t?n:-1}),new O().i(ss,`java.lang.Character$`,{cn:1,a:1});var cs;function ls(){return cs||=new ss,cs}function us(e){return(1&e.a0)<<24>>24||(e.c8=/* @__PURE__ */ RegExp(`^[\\x00-\\x20]*([+-]?(?:NaN|Infinity|(?:\\d+\\.?\\d*|\\.\\d+)(?:[eE][+-]?\\d+)?)[fFdD]?)[\\x00-\\x20]*$`),e.a0=(1|e.a0)<<24>>24),e.c8}function ds(e){return(1&e.a0)<<24>>24?e.c8:us(e)}function fs(e){return(2&e.a0)<<24>>24||(e.c7=/* @__PURE__ */ RegExp(`^[\\x00-\\x20]*([+-]?)0[xX]([0-9A-Fa-f]*)\\.?([0-9A-Fa-f]*)[pP]([+-]?\\d+)[fFdD]?[\\x00-\\x20]*$`),e.a0=(2|e.a0)<<24>>24),e.c7}function ps(e){return(2&e.a0)<<24>>24?e.c7:fs(e)}function ms(e,t){var n=ps(e).exec(t);n===null&&hs(t);var r=n[1],i=n[2],a=n[3],o=n[4];i===``&&a===``&&hs(t);var s=e.fW(i,a,o,15);return r===`-`?-s:s}function hs(e){throw new wu(`For input string: "`+e+`"`)}function gs(){this.c8=null,this.c7=null,this.a0=0}C=gs.prototype=new E,C.constructor=gs,C.fV=(function(e){var t=ds(this).exec(e);return t===null?ms(this,e):+parseFloat(t[1])}),C.fW=(function(e,t,n,r){for(var i=``+e+t,a=-(t.length<<2)|0,o=i.length-1|0,s=0;s!==o&&i.charCodeAt(s)===48;)s=1+s|0;var c=s,l=i.substring(c),u=l.length,d=u>r;if(d){for(var f=!1,p=r;!f&&p!==u;)l.charCodeAt(p)!==48&&(f=!0),p=1+p|0;var m=f?`1`:`0`,h=l.substring(0,r)+m}else var h=l;var g=a+(d?(l.length-(1+r|0)|0)<<2:0)|0;return Xi().g8(+parseInt(h,16),Vn(+parseInt(n,10))+g|0)}),new O().i(gs,`java.lang.Double$`,{cp:1,a:1});var _s;function vs(){return _s||=new gs,_s}function ys(){}C=ys.prototype=new E,C.constructor=ys,C.bh=(function(e){throw new wu(`For input string: "`+e+`"`)}),C.fG=(function(e,t,n){e===null&&xs().bh(e);var r=e.length;r===0&&xs().bh(e);var i=ls(),a=e.charCodeAt(0),o=a===45,s=o?-1:0,c=(o||a===43)|0;c>=r&&xs().bh(e);var l=0;for(l=0;c!==r;){var u=i.f6(e.charCodeAt(c),t);(u<0||l>>>0>n>>>0)&&xs().bh(e),l=Math.imul(l,t)+u|0,c=1+c|0}return l>>>0>(2147483647-s|0)>>>0&&xs().bh(e),(l^s)-s|0}),new O().i(ys,`java.lang.Integer$`,{ct:1,a:1});var bs;function xs(){return bs||=new ys,bs}function Ss(){}C=Ss.prototype=new E,C.constructor=Ss;function Cs(e){return e instanceof Ss||typeof e==`number`||e instanceof w}function ws(e,t,n,r,i){this.aG=null,this.aQ=null,this.aH=null,this.aI=0,this.aF=0,this.aG=e,this.aQ=t,this.aH=n,this.aI=r,this.aF=i}C=ws.prototype=new E,C.constructor=ws,C.c=(function(e){return e instanceof ws&&this.aH===e.aH&&this.aI===e.aI&&this.aF===e.aF&&this.aG===e.aG&&this.aQ===e.aQ}),C.n=(function(){var e=``;return this.aG!==`<jscode>`&&(e=``+e+this.aG+`.`),e=``+e+this.aQ,this.aH===null?e+=`(Unknown Source)`:(e=e+`(`+this.aH,this.aI>=0&&(e=e+`:`+this.aI,this.aF>=0&&(e=e+`:`+this.aF)),e+=`)`),e}),C.i=(function(){return K(this.aG)^K(this.aQ)^K(this.aH)^this.aI^this.aF});var Ts=new O().i(ws,`java.lang.StackTraceElement`,{am:1,a:1});function Es(){}C=Es.prototype=new E,C.constructor=Es,C.fP=(function(e,t,n){for(var r=t+n|0,i=``,a=t;a!==r;)i+=``+Hn(e.a[a]),a=1+a|0;return i}),new O().i(Es,`java.lang.String$`,{cE:1,a:1});var Ds;function Os(){return Ds||=new Es,Ds}function L(e,t,n,r,i){return e.dq=t,e.dr=i,i&&e.fo(),e}var ks=class extends Error{constructor(){super(),this.dq=null,this.dr=!1,this.dp=null,this.bB=null}bg(){return this.dq}fo(){var e=this instanceof X?this.O:this;return this.dp=Object.prototype.toString.call(e)===`[object Error]`?e:Error.captureStackTrace===void 0||Object.isSealed(this)?/* @__PURE__ */ Error():(Error.captureStackTrace(this),this),this}fw(){return this.bB===null&&(this.bB=this.dr?ba().fm(this.dp):new(Ts.r()).C(0)),this.bB}n(){var e=In(this),t=this.bg();return t===null?e:e+`: `+t}i(){return nr.prototype.i.call(this)}c(e){return nr.prototype.c.call(this,e)}get message(){var e=this.bg();return e===null?``:e}get name(){return In(this)}toString(){return this.n()}};function As(){this.ds=null,js=this,this.ds=new Io(Ta().dm)}C=As.prototype=new E,C.constructor=As,C.fT=(function(){return this.ds.cf}),new O().i(As,`scala.Console$`,{cP:1,dE:1});var js;function Ms(){return js||=new As,js}function Ns(){}C=Ns.prototype=new Qa,C.constructor=Ns;function Ps(){}Ps.prototype=C,C.gq=(function(e){if(e===null)return null;if(e.a.length===0){var t=zu();return rd(),t.dG}return new Yd(e)});function Fs(e,t){if(t===e)e.dS(lu().e6(t));else for(var n=t.f();n.m();)e.ch(n.h());return e}function Is(){}C=Is.prototype=new E,C.constructor=Is;function Ls(){}Ls.prototype=C,C.n=(function(){return`<function0>`});function Rs(){}C=Rs.prototype=new E,C.constructor=Rs;function zs(){}zs.prototype=C,C.n=(function(){return`<function1>`});function Bs(){}C=Bs.prototype=new E,C.constructor=Bs;function Vs(){}Vs.prototype=C,C.n=(function(){return`<function2>`});function Hs(){}C=Hs.prototype=new E,C.constructor=Hs;function Us(){}Us.prototype=C,C.n=(function(){return`<function3>`});function Ws(e){this.bG=!1,this.bG=e}C=Ws.prototype=new E,C.constructor=Ws,C.n=(function(){return``+this.bG}),new O().i(Ws,`scala.runtime.BooleanRef`,{dM:1,a:1});function Gs(e){this.b0=0,this.b0=e}C=Gs.prototype=new E,C.constructor=Gs,C.n=(function(){return``+this.b0}),new O().i(Gs,`scala.runtime.IntRef`,{dO:1,a:1});function Ks(){this.o=0,this.dO=0,this.eC=0,this.eB=0,qs=this,this.o=K(`Seq`),this.dO=K(`Map`),this.eC=K(`Set`),this.eB=this.gm(tf(),this.dO)}C=Ks.prototype=new Ro,C.constructor=Ks,C.ei=(function(e){return ld(e)?this.fB(e,this.o):e instanceof Bd?this.fJ(e,this.o):this.fS(e,this.o)}),new O().i(Ks,`scala.util.hashing.MurmurHash3$`,{eb:1,ea:1});var qs;function R(){return qs||=new Ks,qs}var Js=class extends ks{};function Ys(){this.bR=null,this.cr=null,this.cs=null,Xs=this,this.bR=lu().dT(F().W(new(Xa.r()).C([]))),this.cr=new W((e=>{try{console.error(this.fs(e)+`
`+this.fv(e,`
`))}catch(e){var t=e instanceof ks?e:new X(e);console.error(`Error in AirstreamError.consoleErrorCallback:`),console.error(t)}})),this.cs=new W((e=>{console.warn(`Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.`);var t=e;throw t instanceof X?t.O:t})),this.fZ(this.cr)}C=Ys.prototype=new E,C.constructor=Ys,C.fs=(function(e){try{var t=e.bg()}catch{var t=`(Unable to get the message for this error - exception occurred in its getMessage)`}return Fn(e).cm()+`: `+t}),C.fv=(function(e,t){try{return oo(yc().gq(e.fw()),``,t,``)}catch{return`(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)`}}),C.fZ=(function(e){this.bR.ch(e)}),C.cp=(function(e){for(var t=this.bR.f();t.m();){var n=t.h();try{n.e(e)}catch(e){var r=e instanceof ks?e:new X(e),i=this.cs;if(n===null?i===null:n.c(i))throw r instanceof X?r.O:r;console.warn(`Error processing an unhandled error callback:`),jo().ge(0,new dl((e=>(()=>{throw e instanceof X?e.O:e}))(r)))}}}),new O().i(Ys,`com.raquo.airstream.core.AirstreamError$`,{ba:1,dC:1,dD:1});var Xs;function Zs(){return Xs||=new Ys,Xs}function z(e,t,n){return new Kc(n.eP(t))}function Qs(e,t){this.aE=null,this.bZ=null,this.c0=null,this.aE=e,this.bZ=(n=>{var r=e.cR.e(n);r.b()||t.e(r.q())}),this.c0=(()=>{var e=null;e=this;var t={};if(e===null)throw Fl(new G);return t.capture=e.aE.cT,t.passive=e.aE.cS,t})()}C=Qs.prototype=new E,C.constructor=Qs,C.ab=(function(e){this.eU(e,!1)}),C.eU=(function(e,t){if(_l(e,this)===-1){var n=new W((t=>(A().eF(e.M,this),new ii(t.cU,new dl((()=>{var t=_l(e,this);t!==-1&&(gl(e,t),A().g2(e.M,this))})))))),r=t?Ui().gn(e,n):Qr().cq(e.T,new W((t=>n.e(new Mi(e,t)))),!1);return hl(e,this,t),r}var i=new W((e=>void 0));return Qr().el(e.T,new W((t=>{i.e(new Mi(e,t))})),!1)}),C.n=(function(){return`EventListener(`+this.aE.bt.bu+`)`});var $s=new O().i(Qs,`com.raquo.laminar.modifiers.EventListener`,{bV:1,S:1,bU:1});function ec(e,t,n){this.cX=null,this.cY=null,this.cW=null,this.cX=e,this.cY=t,this.cW=n}C=ec.prototype=new E,C.constructor=ec,C.ab=(function(e){this.cW.eN(e,this.cX,this.cY)}),new O().i(ec,`com.raquo.laminar.modifiers.KeySetter`,{bW:1,S:1,c3:1});function tc(e,t){if(this.c2=null,this.d2=null,this.d3=null,this.d2=t,Qo(this),e===null)throw B(new V,`Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load`);if(!A().fE(e,document))throw B(new V,`Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering`);this.d3=e,this.fN()}C=tc.prototype=new E,C.constructor=tc,C.bL=(function(){return this.c2}),C.dX=(function(e){this.c2=e}),C.fN=(function(){return this.c2.dR(),Bi().ci(this,this.d2,void 0)}),C.bk=(function(){return this.d3}),new O().i(tc,`com.raquo.laminar.nodes.RootNode`,{c8:1,a0:1,a9:1});function nc(e,t,n){this.c4=null,this.d5=null,this.d5=e,$o(this,e,!1)}C=nc.prototype=new ts,C.constructor=nc,C.cn=(function(){return this.d5}),new O().i(nc,`com.raquo.laminar.tags.CustomHtmlTag`,{ca:1,aa:1,a1:1});function rc(){this.bz=null,this.by=null,this.bA=!1,is(this,`wa-button`)}C=rc.prototype=new os,C.constructor=rc,C.dQ=(function(){return Dn}),new O().i(rc,`io.github.nguyenyou.webawesome.laminar.Button$`,{cd:1,ac:1,ab:1});var ic;function ac(){return ic||=new rc,ic}function oc(){this.ak=null,this.aO=null,this.d7=null,this.d8=!1,Go(this,`animation`,new rs)}C=oc.prototype=new qo,C.constructor=oc,C.fn=(function(){return this.d8||=(this.d7=cc().b2(`fade`),!0),this.d7}),new O().i(oc,`io.github.nguyenyou.webawesome.laminar.CommonKeys$RandomContentAnimation$`,{ce:1,Z:1,R:1});var sc;function cc(){return sc||=new oc,sc}function lc(){this.ak=null,this.aO=null,this.d9=null,this.da=!1,Go(this,`mode`,new rs)}C=lc.prototype=new qo,C.constructor=lc,C.g9=(function(){return this.da||=(this.d9=dc().b2(`sequence`),!0),this.d9}),new O().i(lc,`io.github.nguyenyou.webawesome.laminar.CommonKeys$RandomContentMode$`,{cf:1,Z:1,R:1});var uc;function dc(){return uc||=new lc,uc}function fc(){this.bz=null,this.by=null,this.bA=!1,this.dh=null,this.di=!1,this.dj=null,this.dk=!1,this.dd=null,this.dg=!1,this.de=null,this.df=!1,this.db=null,this.dc=!1,is(this,`wa-random-content`)}C=fc.prototype=new os,C.constructor=fc,C.fF=(function(){return this.di||=(this.dh=(U(),Go(new Ko,`items`,vi().dP())),!0),this.dh}),C.fM=(function(){return this.dk||=(this.dj=dc(),!0),this.dj}),C.eQ=(function(){return this.dg||=(this.dd=(U(),Go(new Ko,`autoplay`,vi().cO)),!0),this.dd}),C.eR=(function(){return this.df||=(this.de=(U(),Go(new Ko,`autoplay-interval`,vi().dP())),!0),this.de}),C.eI=(function(){return this.dc||=(this.db=cc(),!0),this.db}),C.dQ=(function(){return Nn}),new O().i(fc,`io.github.nguyenyou.webawesome.laminar.RandomContent$`,{cg:1,ac:1,ab:1});var pc;function mc(){return pc||=new fc,pc}function hc(e){if(e.ag.Z)return e.ag.Q().cm()+`[]`;for(var t=e.ag.N,n=t.length-1|0;n>=0&&t.charCodeAt(n)===36;)n=n-1|0;if(n>=0&&(t.charCodeAt(n)-48|0)>>>0<=9){for(n=n-1|0;n>=0&&(t.charCodeAt(n)-48|0)>>>0<=9;)n=n-1|0;for(;n>=0&&t.charCodeAt(n)===36;)n=n-1|0}for(;;){if(n>=0)var r=n,i=t.charCodeAt(r),a=i!==36&&i!==46;else var a=!1;if(a)n=n-1|0;else break}var o=1+n|0;return t.substring(o)}function gc(e){this.c6=null,this.ag=e}C=gc.prototype=new E,C.constructor=gc,C.n=(function(){return(this.ag.Y?`interface `:this.ag.X?``:`class `)+this.ag.N}),C.cm=(function(){return this.c6===null&&(this.c6=hc(this)),this.c6}),new O().i(gc,`java.lang.Class`,{co:1,a:1,K:1});function B(e,t){return L(e,t,null,!0,!0),e}var V=class extends ks{};new O().i(V,`java.lang.Exception`,{J:1,s:1,a:1});function _c(){this.ex=null,vc=this,ou(),this.ex=jc()}C=_c.prototype=new Ps,C.constructor=_c,new O().i(_c,`scala.Predef$`,{cZ:1,cS:1,cT:1});var vc;function yc(){return vc||=new _c,vc}function bc(e,t){return e.bE=t,e}function xc(){this.bE=null}C=xc.prototype=new E,C.constructor=xc;function Sc(){}Sc.prototype=C,C.bM=(function(e){return this.bE.cl(e,ed())}),C.bJ=(function(e){return this.bE.cl(e,ed())});function Cc(e,t){return new Xl(e).eX(t)}function wc(e,t,n){var r=t>0?t:0,i=n<0?-1:n<=r?0:n-r|0;return i===0?Oc().F:new $l(e,r,i)}function Tc(e,t){for(var n=t.f();e.m();)if(!n.m()||!P().B(e.h(),n.h()))return!1;return!n.m()}function Ec(){this.F=null,Dc=this,this.F=new Kl}C=Ec.prototype=new E,C.constructor=Ec,new O().i(Ec,`scala.collection.Iterator$`,{d9:1,a:1,V:1});var Dc;function Oc(){return Dc||=new Ec,Dc}function kc(){}C=kc.prototype=new E,C.constructor=kc,new O().i(kc,`scala.collection.immutable.Map$`,{dq:1,a:1,de:1});var Ac;function jc(){return Ac||=new kc,Ac}function Mc(e){this.dH=null,this.dH=e}C=Mc.prototype=new Ls,C.constructor=Mc,C.aw=(function(){return(0,this.dH)()}),new O().i(Mc,`scala.runtime.AbstractFunction0.$$Lambda$07eded5776954a9c145e92c329afd52873ad179c`,{dI:1,b5:1,ao:1});function H(e){this.dI=null,this.dI=e}C=H.prototype=new zs,C.constructor=H,C.e=(function(e){return(0,this.dI)(e)}),new O().i(H,`scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919`,{dJ:1,b6:1,e:1});var Nc=new O().i(0,`scala.runtime.Nothing$`,{dP:1,s:1,a:1});function Pc(){}C=Pc.prototype=new Ls,C.constructor=Pc;function Fc(){}Fc.prototype=C;function Ic(){}C=Ic.prototype=new zs,C.constructor=Ic;function Lc(){}Lc.prototype=C;function Rc(){}C=Rc.prototype=new Vs,C.constructor=Rc;function zc(){}zc.prototype=C;function Bc(){}C=Bc.prototype=new Us,C.constructor=Bc;function Vc(){}Vc.prototype=C;function Hc(e,t,n,r){if(this.ct=null,r===null)throw Fl(new G);this.ct=void 0}C=Hc.prototype=new E,C.constructor=Hc,C.n=(function(){return wr(this)}),new O().i(Hc,`com.raquo.airstream.core.Observer$$anon$8`,{be:1,bf:1,bb:1,bc:1});function Uc(e){if(this.cE=null,this.cF=!1,this.eo=null,e===null)throw Fl(new G);xi(this)}C=Uc.prototype=new E,C.constructor=Uc,C.gh=(function(){return this.cF||=(this.cE=new ns(`svg`,!1),!0),this.cE}),new O().i(Uc,`com.raquo.laminar.api.Laminar$svg$`,{bv:1,bM:1,bF:1,bH:1});function Wc(){this.k=null,Gc=this,this.k=new md}C=Wc.prototype=new E,C.constructor=Wc,new O().i(Wc,`com.raquo.laminar.api.package$`,{by:1,a6:1,a7:1,a5:1});var Gc;function U(){return Gc||=new Wc,Gc}function Kc(e){this.d4=null,this.c3=null,this.d4=q(),this.c3=A().f0(e)}C=Kc.prototype=new E,C.constructor=Kc,C.ek=(function(e){this.d4=e}),C.en=(function(e){}),C.ab=(function(e){Bi().ci(e,this,void 0)}),C.gk=(function(){return this.c3.data}),C.bk=(function(){return this.c3}),new O().i(Kc,`com.raquo.laminar.nodes.TextNode`,{c9:1,a0:1,S:1,a8:1});function qc(){}C=qc.prototype=new E,C.constructor=qc;function Jc(){}Jc.prototype=C;function Yc(e,t){return e===t}function Xc(e){return e?1231:1237}var Zc=new O().i(0,`java.lang.Boolean`,{cl:1,a:1,M:1,K:1},(e=>typeof e==`boolean`));function Qc(e){return e}function $c(e,t){return t instanceof Pn&&e===t.c}var el=new O().i(0,`java.lang.Character`,{ai:1,a:1,M:1,K:1},(e=>e instanceof Pn)),tl=class extends V{};function nl(){this.l=null,this.l=``}C=nl.prototype=new E,C.constructor=nl,C.eL=(function(e){var t=Os().fP(e,0,e.a.length);return this.l=``+this.l+t,this}),C.n=(function(){return this.l}),C.d=(function(){return this.l.length}),C.dV=(function(e){return this.l.charCodeAt(e)}),new O().i(nl,`java.lang.StringBuilder`,{cF:1,a2:1,ag:1,a:1});function rl(){}C=rl.prototype=new E,C.constructor=rl,C.n=(function(){return`<function1>`}),C.eO=(function(e){throw new Bl(e)}),C.e=(function(e){this.eO(e)}),new O().i(rl,`scala.PartialFunction$$anon$1`,{cY:1,e:1,g:1,a:1});function il(){}C=il.prototype=new E,C.constructor=il;function al(){}al.prototype=C,C.s=(function(){return-1}),C.aK=(function(e,t,n,r){return so(this,e,t,n,r)}),C.f=(function(){return this}),C.bK=(function(e){return this.bm(e,-1)}),C.bm=(function(e,t){return wc(this,e,t)}),C.n=(function(){return`<iterator>`});function ol(e,t){return e.bF=t,e}function sl(){this.bF=null}C=sl.prototype=new E,C.constructor=sl;function cl(){}cl.prototype=C,C.dT=(function(e){return this.bF.bJ(e)}),C.e6=(function(e){return this.bF.bM(e)}),C.bJ=(function(e){return this.dT(e)}),C.bM=(function(e){return this.e6(e)});function ll(e){return e.ay(0)===0}function ul(e,t){var n=e.s();if(n!==-1){var r=t.s();if(r!==-1){if(n!==r)return!1;if(n===0)return!0}}return Tc(e.f(),t)}function dl(e){this.dL=null,this.dL=e}C=dl.prototype=new Fc,C.constructor=dl,C.aw=(function(){return(0,this.dL)()}),new O().i(dl,`scala.scalajs.runtime.AnonFunction0.$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d`,{dZ:1,dY:1,b5:1,ao:1});function W(e){this.dM=null,this.dM=e}C=W.prototype=new Lc,C.constructor=W,C.e=(function(e){return(0,this.dM)(e)}),new O().i(W,`scala.scalajs.runtime.AnonFunction1.$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1`,{e1:1,e0:1,b6:1,e:1});function fl(e){this.eA=null,this.eA=e}C=fl.prototype=new zc,C.constructor=fl,new O().i(fl,`scala.scalajs.runtime.AnonFunction2.$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7`,{e3:1,e2:1,dK:1,cQ:1});function pl(e){this.dN=null,this.dN=e}C=pl.prototype=new Vc,C.constructor=pl,C.eN=(function(e,t,n){return(0,this.dN)(e,t,n)}),new O().i(pl,`scala.scalajs.runtime.AnonFunction3.$$Lambda$73f37e31ba038fe839c174212837da323f140c96`,{e5:1,e4:1,dL:1,cR:1});function ml(e){e.c1=new oi(new dl((()=>{e.T.dR()})),new dl((()=>{e.T.f1()}))),e.al=void 0}function hl(e,t,n){if(e.al===void 0)e.al=li().ac(F().W(new($s.r()).C([t])));else if(n){var r=e.al;if(r===void 0)throw new Rl(`undefined.get`);r.unshift(t)}else{var i=e.al;if(i===void 0)throw new Rl(`undefined.get`);i.push(t)}}function gl(e,t){var n=e.al;n!==void 0&&n.splice(t,1)}function _l(e,t){var n=e.al;if(n===void 0)return-1;for(var r=!1,i=0;!r&&i<(n.length|0);){var a=n[i];(a===null?t===null:Ln(a,t))?r=!0:i=1+i|0}return r?i:-1}function vl(e,t){bl(e,e.bx,t)&&xl(e,t)}function yl(e,t){var n=e.bx;e.bx=t,bl(e,n,t)||xl(e,t)}function bl(e,t,n){var r=!t.b()&&!t.q().bL().y.b(),i=!n.b()&&!n.q().bL().y.b();return r&&!i}function xl(e,t){Sl(e,t.b()?q():new J(t.q().bL()))}function Sl(e,t){if(t.b())e.c1.eW();else{var n=t.q();e.c1.gb(n)}}function Cl(){}C=Cl.prototype=new Jc,C.constructor=Cl;function wl(){}wl.prototype=C;var Tl=class extends tl{constructor(e){super(),L(this,e,null,!0,!0)}};new O().i(Tl,`java.lang.ArithmeticException`,{ck:1,N:1,J:1,s:1,a:1});var El=new O().i(0,`java.lang.Byte`,{cm:1,Q:1,a:1,M:1,K:1},(e=>Jn(e)));function Dl(e,t){return L(e,t,null,!0,!0),e}function Ol(e){return L(e,null,null,!0,!0),e}var kl=class extends tl{};new O().i(kl,`java.lang.IllegalArgumentException`,{ak:1,N:1,J:1,s:1,a:1});function Al(e,t){return L(e,t,null,!0,!0),e}function jl(e,t){return L(e,`Index out of range: `+t,null,!0,!0),e}var Ml=class extends tl{};new O().i(Ml,`java.lang.IndexOutOfBoundsException`,{cr:1,N:1,J:1,s:1,a:1});function Nl(){}C=Nl.prototype=new Jc,C.constructor=Nl,new O().i(Nl,`java.lang.JSConsoleBasedPrintStream$DummyOutputStream`,{cv:1,af:1,ad:1,ah:1,ae:1});function Pl(e,t){return L(e,t,null,!0,!0),e}function Fl(e){return L(e,null,null,!0,!0),e}var G=class extends tl{};new O().i(G,`java.lang.NullPointerException`,{cx:1,N:1,J:1,s:1,a:1});var Il=new O().i(0,`java.lang.Short`,{cA:1,Q:1,a:1,M:1,K:1},(e=>Yn(e))),Ll=class extends tl{constructor(e){super(),L(this,e,null,!0,!0)}};new O().i(Ll,`java.lang.UnsupportedOperationException`,{cI:1,N:1,J:1,s:1,a:1});var Rl=class extends tl{constructor(e){super(),L(this,e,null,!0,!0)}};new O().i(Rl,`java.util.NoSuchElementException`,{cM:1,N:1,J:1,s:1,a:1});function zl(e){if(!e.du){if(e.bC===null)var t=`null`;else{var n=F().eJ(e.bC),r=n===null?`of a JS class`:`of class `+n.ag.N;try{var t=e.bC+` (`+r+`)`}catch{var t=`an instance `+r}}e.dt=t,e.du=!0}return e.dt}var Bl=class extends tl{constructor(e){super(),this.bC=null,this.dt=null,this.du=!1,this.bC=e,L(this,null,null,!0,!0)}bg(){return zl(this)}};new O().i(Bl,`scala.MatchError`,{cU:1,N:1,J:1,s:1,a:1});function Vl(){}C=Vl.prototype=new E,C.constructor=Vl;function Hl(){}Hl.prototype=C,C.bj=(function(){return new Ul(this)}),C.b=(function(){return this===q()}),C.s=(function(){return!this.b()|0}),C.f=(function(){return this.b()?Oc().F:new ql(this.q())});function Ul(e){if(this.aR=0,this.dy=0,this.dx=null,e===null)throw Fl(new G);this.dx=e,this.aR=0,this.dy=e.ad()}C=Ul.prototype=new al,C.constructor=Ul,C.m=(function(){return this.aR<this.dy}),C.h=(function(){var e=this.dx.ae(this.aR);return this.aR=1+this.aR|0,e}),new O().i(Ul,`scala.Product$$anon$1`,{d0:1,O:1,b:1,c:1,P:1});function Wl(e){this.bE=null,bc(this,e)}C=Wl.prototype=new Sc,C.constructor=Wl,new O().i(Wl,`scala.collection.ClassTagSeqFactory$AnySeqDelegate`,{d5:1,d4:1,a:1,V:1,Y:1});function Gl(e){return oo(e,e.ax()+`(`,`, `,`)`)}function Kl(){}C=Kl.prototype=new al,C.constructor=Kl,C.m=(function(){return!1}),C.fQ=(function(){throw new Rl(`next on empty iterator`)}),C.s=(function(){return 0}),C.h=(function(){this.fQ()}),C.bm=(function(e,t){return this}),new O().i(Kl,`scala.collection.Iterator$$anon$19`,{da:1,O:1,b:1,c:1,P:1});function ql(e){this.dA=null,this.aU=!1,this.dA=e,this.aU=!1}C=ql.prototype=new al,C.constructor=ql,C.m=(function(){return!this.aU}),C.h=(function(){return this.aU?Oc().F.h():(this.aU=!0,this.dA)}),C.bm=(function(e,t){return this.aU||e>0||t===0?Oc().F:this}),new O().i(ql,`scala.collection.Iterator$$anon$20`,{db:1,O:1,b:1,c:1,P:1});function Jl(e){for(;;)if(e.v instanceof Xl){var t=e.v;if(e.v=t.v,e.a2=t.a2,t.H!==null){e.G===null&&(e.G=t.G);var n=t.G;n===null&&wo().bP(),n.aV=e.H,e.H=t.H}}else return}function Yl(e){for(;;)if(e.H===null)return e.v=null,e.G=null,!1;else{if(e.v=e.H.fA(),e.G===e.H){var t=e.G;t===null&&wo().bP(),e.G=t.aV}if(e.H=e.H.aV,Jl(e),e.a2)return!0;if(!(e.v!==null&&e.v.m()))continue;return e.a2=!0,!0}}function Xl(e){this.v=null,this.H=null,this.G=null,this.a2=!1,this.v=e,this.H=null,this.G=null,this.a2=!1}C=Xl.prototype=new al,C.constructor=Xl,C.m=(function(){return this.a2?!0:this.v===null?!1:this.v.m()?(this.a2=!0,!0):Yl(this)}),C.h=(function(){if(this.m()){this.a2=!1;var e=this.v;return e===null&&wo().bP(),e.h()}return Oc().F.h()}),C.eX=(function(e){var t=new co(e,null);if(this.H===null)this.H=t,this.G=t;else{var n=this.G;n===null&&wo().bP(),n.aV=t,this.G=t}return this.v===null&&(this.v=Oc().F),this}),new O().i(Xl,`scala.collection.Iterator$ConcatIterator`,{au:1,O:1,b:1,c:1,P:1});function Zl(e){for(;e.V>0;)e.a3.m()?(e.a3.h(),e.V=e.V-1|0):e.V=0}function Ql(e,t){if(e.z<0)return-1;var n=e.z-t|0;return n<0?0:n}function $l(e,t,n){this.a3=null,this.z=0,this.V=0,this.a3=e,this.z=n,this.V=t}C=$l.prototype=new al,C.constructor=$l,C.s=(function(){var e=this.a3.s();if(e<0)return-1;var t=e-this.V|0,n=t<0?0:t;if(this.z<0)return n;var r=this.z;return r<n?r:n}),C.m=(function(){return Zl(this),this.z!==0&&this.a3.m()}),C.h=(function(){return Zl(this),this.z>0?(this.z=this.z-1|0,this.a3.h()):this.z<0?this.a3.h():Oc().F.h()}),C.bm=(function(e,t){var n=e>0?e:0;if(t<0)var r=Ql(this,n);else if(t<=n)var r=0;else if(this.z<0)var r=t-n|0;else var i=Ql(this,n),a=t-n|0,r=i<a?i:a;var o=this.V+n|0;return r===0?Oc().F:o<0?(this.V=2147483647,this.z=0,Cc(this,new Mc((()=>new $l(this.a3,o-2147483647|0,r))))):(this.V=o,this.z=r,this)}),new O().i($l,`scala.collection.Iterator$SliceIterator`,{dd:1,O:1,b:1,c:1,P:1});function eu(e,t){if(t<0)throw Al(new Ml,``+t);var n=e.fc(t);if(n.b())throw Al(new Ml,``+t);return n.Q()}function tu(e,t){return ud(t)?nu(e,e,t):ul(e,t)}function nu(e,t,n){for(var r=n,i=t;;)if(i===r)return!0;else{if(!i.b()&&!r.b()&&P().B(i.Q(),r.Q())){var a=i.D(),o=r.D();i=a,r=o;continue}return i.b()&&r.b()}}function ru(e){if(this.aX=null,e===null)throw Fl(new G);this.aX=e}C=ru.prototype=new al,C.constructor=ru,C.m=(function(){return!this.aX.b()}),C.h=(function(){var e=this.aX.Q();return this.aX=this.aX.D(),e}),new O().i(ru,`scala.collection.StrictOptimizedLinearSeqOps$$anon$1`,{di:1,O:1,b:1,c:1,P:1});function iu(){au=this,tf(),tf()}C=iu.prototype=new E,C.constructor=iu,C.bJ=(function(e){return tf().ee(e)}),C.bM=(function(e){return tf().ee(e)}),new O().i(iu,`scala.collection.immutable.List$`,{dp:1,a:1,V:1,Y:1,ay:1});var au;function ou(){return au||=new iu,au}function su(){this.bF=null,ol(this,pu())}C=su.prototype=new cl,C.constructor=su,new O().i(su,`scala.collection.mutable.Buffer$`,{dw:1,df:1,a:1,V:1,Y:1});var cu;function lu(){return cu||=new su,cu}function uu(e){this.dK=null,this.b1=0,this.dJ=0,this.dK=e,this.b1=0,this.dJ=e.ad()}C=uu.prototype=new al,C.constructor=uu,C.m=(function(){return this.b1<this.dJ}),C.h=(function(){var e=this.dK.ae(this.b1);return this.b1=1+this.b1|0,e}),new O().i(uu,`scala.runtime.ScalaRunTime$$anon$1`,{dT:1,O:1,b:1,c:1,P:1});function du(){}C=du.prototype=new E,C.constructor=du,C.bJ=(function(e){return this.e7(e)}),C.e7=(function(e){return Fs(sf(new cf),e).eg()}),C.bM=(function(e){return this.e7(e)}),new O().i(du,`scala.scalajs.js.WrappedArray$`,{dW:1,ay:1,a:1,V:1,Y:1});var fu;function pu(){return fu||=new du,fu}var mu=class e extends Js{constructor(e,t){super(),this.aA=null,this.az=0,this.aA=e,this.az=t,L(this,`Transaction depth exceeded maxDepth = `+t+`: Execution of `+e+" aborted. See `Transaction.maxDepth`.",null,!0,!0)}bj(){return new Ul(this)}i(){var e=-889275714;return e=I().j(e,K(`TransactionDepthExceeded`)),e=I().j(e,I().r(this.aA)),e=I().j(e,this.az),I().w(e,2)}c(t){if(this===t)return!0;if(t instanceof e){if(this.az===t.az){var n=this.aA,r=t.aA;return n===null?r===null:n===r}return!1}return!1}ad(){return 2}af(){return`TransactionDepthExceeded`}ae(e){if(e===0)return this.aA;if(e===1)return this.az;throw Al(new Ml,``+e)}n(){return`TransactionDepthExceeded: `+this.aA+`; maxDepth: `+this.az}};new O().i(mu,`com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded`,{a4:1,b9:1,s:1,a:1,d:1,T:1});function hu(e,t){this.bx=null,this.T=null,this.c1=null,this.al=null,this.d1=null,this.M=null,this.d1=e,this.M=t,this.bx=q(),Qo(this),ml(this)}C=hu.prototype=new E,C.constructor=hu,C.ab=(function(e){Bi().ci(e,this,void 0)}),C.bL=(function(){return this.T}),C.dX=(function(e){this.T=e}),C.en=(function(e){vl(this,e)}),C.ek=(function(e){yl(this,e)}),C.n=(function(){return`ReactiveHtmlElement(`+(this.M===null?`tag=`+this.d1.cn():this.M.outerHTML)+`)`}),C.bk=(function(){return this.M}),new O().i(hu,`com.raquo.laminar.nodes.ReactiveHtmlElement`,{c7:1,a0:1,S:1,a8:1,a9:1,c5:1});function gu(e,t){return Object.is(e,t)}function _u(e){var t=e|0;if(t===e&&1/e!=-1/0)return t;if(e!==e)return 2146959360;var n=Un;return n.setFloat64(0,e,!0),(n.getInt32(0,!0)|0)^(n.getInt32(4,!0)|0)}var vu=new O().i(0,`java.lang.Double`,{aj:1,Q:1,a:1,M:1,K:1,U:1},(e=>typeof e==`number`)),yu=new O().i(0,`java.lang.Float`,{cq:1,Q:1,a:1,M:1,K:1,U:1},(e=>Zn(e))),bu=new O().i(0,`java.lang.Integer`,{cs:1,Q:1,a:1,M:1,K:1,U:1},(e=>Xn(e)));function xu(e,t,n){if(n instanceof w){var r=n,i=r.l,a=r.h;return(e^i|t^a)===0}return!1}function Su(e,t){return e^t}var Cu=new O().i(0,`java.lang.Long`,{al:1,Q:1,a:1,M:1,K:1,U:1},(e=>e instanceof w)),wu=class extends kl{constructor(e){super(),L(this,e,null,!0,!0)}};new O().i(wu,`java.lang.NumberFormatException`,{cy:1,ak:1,N:1,J:1,s:1,a:1});function K(e){for(var t=e.length,n=0,r=0;r!==t;)n=((n<<5)-n|0)+e.charCodeAt(r)|0,r=1+r|0;return n}function Tu(e,t){return e===t}var Eu=new O().i(0,`java.lang.String`,{cD:1,a:1,M:1,a2:1,K:1,U:1},(e=>typeof e==`string`));function Du(){}C=Du.prototype=new Hl,C.constructor=Du,C.i=(function(){return 2433880}),C.n=(function(){return`None`}),C.ad=(function(){return 0}),C.af=(function(){return`None`}),C.ae=(function(e){throw jl(new Ml,e)}),C.fr=(function(){throw new Rl(`None.get`)}),C.q=(function(){this.fr()}),new O().i(Du,`scala.None$`,{cV:1,ap:1,b:1,d:1,T:1,a:1});var Ou;function q(){return Ou||=new Du,Ou}function J(e){this.aS=null,this.aS=e}C=J.prototype=new Hl,C.constructor=J,C.i=(function(){return R().ef(this,1323286827,!0)}),C.c=(function(e){return this===e||e instanceof J&&P().B(this.aS,e.aS)}),C.n=(function(){return F().eE(this)}),C.ad=(function(){return 1}),C.af=(function(){return`Some`}),C.ae=(function(e){if(e===0)return this.aS;throw jl(new Ml,e)}),C.q=(function(){return this.aS}),new O().i(J,`scala.Some`,{aq:1,ap:1,b:1,d:1,T:1,a:1});function ku(){}C=ku.prototype=new E,C.constructor=ku;function Au(){}Au.prototype=C,C.s=(function(){return-1}),C.aM=(function(e){ao(this,e)}),C.aK=(function(e,t,n,r){return so(this,e,t,n,r)}),C.ax=(function(){return this.aN()});function Y(e){this.bD=null,this.U=0,this.aT=0,this.bD=e,this.U=0,this.aT=Ba().bf(this.bD)}C=Y.prototype=new al,C.constructor=Y,C.s=(function(){return this.aT-this.U|0}),C.m=(function(){return this.U<this.aT}),C.h=(function(){this.U>=Ba().bf(this.bD)&&Oc().F.h();var e=F().aL(this.bD,this.U);return this.U=1+this.U|0,e}),C.bK=(function(e){if(e>0){var t=this.U+e|0;if(t<0)var n=this.aT;else var r=this.aT,n=r<t?r:t;this.U=n}return this}),new O().i(Y,`scala.collection.ArrayOps$ArrayIterator`,{d3:1,O:1,b:1,c:1,P:1,a:1});function ju(e,t){return t<0?0:t>e.N?e.N:t}function Mu(e){this.dz=null,this.a1=0,this.N=0,this.dz=e,this.a1=0,this.N=e.d()}C=Mu.prototype=new al,C.constructor=Mu,C.s=(function(){return this.N}),C.m=(function(){return this.N>0}),C.h=(function(){if(this.N>0){var e=this.dz.g(this.a1);return this.a1=1+this.a1|0,this.N=this.N-1|0,e}return Oc().F.h()}),C.bK=(function(e){if(e>0){this.a1=this.a1+e|0;var t=this.N-e|0;this.N=t<0?0:t}return this}),C.bm=(function(e,t){var n=ju(this,e),r=ju(this,t)-n|0;return this.N=r<0?0:r,this.a1=this.a1+n|0,this}),new O().i(Mu,`scala.collection.IndexedSeqView$IndexedSeqViewIterator`,{d8:1,O:1,b:1,c:1,P:1,a:1});function Nu(e){return e.dE||=(e.dD=new Fd(new(Nc.r()).C(0)),!0),e.dD}function Pu(){this.ey=null,this.dD=null,this.dE=!1,Fu=this,this.ey=new Wl(this)}C=Pu.prototype=new E,C.constructor=Pu,C.fp=(function(e,t){return e instanceof Td?e:this.go(Ya().e5(e,t))}),C.go=(function(e){if(e===null)return null;if(e instanceof D)return new Fd(e);if(e instanceof cr)return new Nd(e);if(e instanceof dr)return new jd(e);if(e instanceof lr)return new Pd(e);if(e instanceof ur)return new Md(e);if(e instanceof ar)return new Ad(e);if(e instanceof or)return new kd(e);if(e instanceof sr)return new Id(e);if(e instanceof ir)return new Od(e);if(Fa(e,1))return new Ld(e);throw new Bl(e)}),C.cl=(function(e,t){return this.fp(e,t)}),new O().i(Pu,`scala.collection.immutable.ArraySeq$`,{dm:1,a:1,at:1,ar:1,as:1,aw:1});var Fu;function Iu(){return Fu||=new Pu,Fu}function Lu(){this.ez=null,this.dG=null,Ru=this,this.ez=new Wl(this),this.dG=new Yd(new D(0))}C=Lu.prototype=new E,C.constructor=Lu,C.fq=(function(e,t){return this.fL(Ya().e5(e,t))}),C.fL=(function(e){if(e===null)return null;if(e instanceof D)return new Yd(e);if(e instanceof cr)return new qd(e);if(e instanceof dr)return new Gd(e);if(e instanceof lr)return new Jd(e);if(e instanceof ur)return new Kd(e);if(e instanceof ar)return new Wd(e);if(e instanceof or)return new Ud(e);if(e instanceof sr)return new Xd(e);if(e instanceof ir)return new Hd(e);if(Fa(e,1))return new Zd(e);throw new Bl(e)}),C.cl=(function(e,t){return this.fq(e,t)}),new O().i(Lu,`scala.collection.mutable.ArraySeq$`,{du:1,a:1,at:1,ar:1,as:1,aw:1});var Ru;function zu(){return Ru||=new Lu,Ru}function Bu(){}C=Bu.prototype=new wl,C.constructor=Bu;function Vu(){}Vu.prototype=C;function Hu(e){return e.ax()+`(<not computed>)`}function Uu(){}C=Uu.prototype=new E,C.constructor=Uu;function Wu(){}Wu.prototype=C;var X=class e extends tl{constructor(e){super(),this.O=null,this.O=e,L(this,null,null,!0,!0)}bg(){return zn(this.O)}af(){return`JavaScriptException`}ad(){return 1}ae(e){return e===0?this.O:I().fC(e)}bj(){return new uu(this)}i(){return R().ef(this,1744042595,!0)}c(t){return this===t||t instanceof e&&P().B(this.O,t.O)}};new O().i(X,`scala.scalajs.js.JavaScriptException`,{b7:1,N:1,J:1,s:1,a:1,T:1,d:1});function Gu(e,t){typeof console<`u`&&(e.dl&&console.error?console.error(t):console.log(t))}function Ku(e){this.dl=!1,this.aP=null,this.dl=e,new Nl,this.aP=``}C=Ku.prototype=new Vu,C.constructor=Ku,C.fH=(function(e){for(var t=e;t!==``;){var n=t.indexOf(`
`)|0;if(n<0)this.aP=``+this.aP+t,t=``;else{var r=this.aP,i=t;Gu(this,``+r+i.substring(0,n)),this.aP=``;var a=t,o=1+n|0;t=a.substring(o)}}}),new O().i(Ku,`java.lang.JSConsoleBasedPrintStream`,{cu:1,cj:1,ci:1,af:1,ad:1,ah:1,ae:1,ag:1});function qu(e,t,n){for(var r=n,i=t;;)if(i<=0||r.b())return r;else{var a=i-1|0,o=r.D();i=a,r=o}}function Ju(){this.aZ=null}C=Ju.prototype=new Wu,C.constructor=Ju;function Yu(){}Yu.prototype=C,C.n=(function(){return this.aZ}),C.c=(function(e){return this===e}),C.i=(function(){return qn(this)});function Xu(){}C=Xu.prototype=new Au,C.constructor=Xu;function Zu(){}Zu.prototype=C,C.n=(function(){return Hu(this)});function Qu(){this.aZ=null,this.aZ=`Any`,tf()}C=Qu.prototype=new Yu,C.constructor=Qu,C.eh=(function(){return k.l()}),C.eb=(function(e){return new D(e)}),new O().i(Qu,`scala.reflect.ManifestFactory$AnyManifest$`,{dG:1,b3:1,b2:1,a:1,b4:1,aZ:1,d:1,b0:1,b1:1});var $u;function ed(){return $u||=new Qu,$u}function td(){this.aZ=null,this.aZ=`Object`,tf()}C=td.prototype=new Yu,C.constructor=td,C.eh=(function(){return k.l()}),C.eb=(function(e){return new D(e)}),new O().i(td,`scala.reflect.ManifestFactory$ObjectManifest$`,{dH:1,b3:1,b2:1,a:1,b4:1,aZ:1,d:1,b0:1,b1:1});var nd;function rd(){return nd||=new td,nd}function Z(e,t){return e===t?!0:id(t)&&t.ck(e)?e.bQ(t):!1}function id(e){return!!(e&&e.$classData&&e.$classData.n.f)}function ad(){}C=ad.prototype=new Au,C.constructor=ad;function od(){}od.prototype=C,C.b=(function(){return ll(this)}),C.bQ=(function(e){return ul(this,e)}),C.ck=(function(e){return!0}),C.c=(function(e){return Z(this,e)}),C.i=(function(){return R().ei(this)}),C.n=(function(){return Gl(this)});function sd(){}C=sd.prototype=new Zu,C.constructor=sd;function cd(){}cd.prototype=C;function ld(e){return!!(e&&e.$classData&&e.$classData.n.m)}function ud(e){return!!(e&&e.$classData&&e.$classData.n.X)}function dd(e,t){return e.aW=t,e}function fd(){this.aW=null}C=fd.prototype=new cd,C.constructor=fd;function pd(){}pd.prototype=C,C.g=(function(e){return this.aW.g(e)}),C.d=(function(){return this.aW.d()}),C.b=(function(){return this.aW.b()});function md(){this.cK=null,this.cL=!1,this.cG=null,this.cH=!1,this.cI=null,this.cJ=!1,this.eq=null,this.ep=null,this.cM=null,this.cN=!1,yi(this),mi(this),fi(this),pi(this)}C=md.prototype=new E,C.constructor=md,C.C=(function(){return this.cL||=(this.cK=$o(new es,`p`,!1),!0),this.cK}),C.f7=(function(){return this.cH||=(this.cG=$o(new es,`div`,!1),!0),this.cG}),C.fR=(function(){return this.cJ||=(this.cI=new Wo(`click`),!0),this.cI}),C.gg=(function(){return this.cN||=(this.cM=new Uc(this),!0),this.cM}),new O().i(md,`com.raquo.laminar.api.package$$anon$1`,{bz:1,bL:1,bE:1,bJ:1,bI:1,bK:1,bG:1,bx:1,bt:1,bw:1,a6:1,a7:1,a5:1,bu:1});function hd(e){this.aW=null,dd(this,e)}C=hd.prototype=new pd,C.constructor=hd,C.ay=(function(e){var t=this.d();return t===e?0:t<e?-1:1}),C.s=(function(){return this.d()}),C.f=(function(){return new Mu(this)}),C.aN=(function(){return`IndexedSeqView`}),new O().i(hd,`scala.collection.IndexedSeqView$Id`,{d7:1,dh:1,d1:1,d2:1,l:1,b:1,c:1,j:1,i:1,h:1,a:1,dk:1,k:1,dg:1,o:1,d6:1});function gd(){}C=gd.prototype=new od,C.constructor=gd;function _d(){}_d.prototype=C;function vd(e,t){return!bd(t)||e.d()===t.d()}function yd(e,t){if(bd(t)){if(e===t)return!0;var n=e.d(),r=n===t.d();if(r){var i=0,a=e.cj(),o=t.cj(),s=a<o?a:o,c=n>>31,l=s>>31,u=s<<1,d=s>>>31|0|l<<1;if(c===d?n>>>0>u>>>0:c>d)var f=s;else var f=n;for(;i<f&&r;)r=P().B(e.g(i),t.g(i)),i=1+i|0;if(i<n&&r)for(var p=e.f().bK(i),m=t.f().bK(i);r&&p.m();)r=P().B(p.h(),m.h())}return r}return ul(e,t)}function bd(e){return!!(e&&e.$classData&&e.$classData.n.t)}function xd(){}C=xd.prototype=new od,C.constructor=xd;function Sd(){}Sd.prototype=C;function Q(e){this.bH=null,this.bH=e}C=Q.prototype=new E,C.constructor=Q,C.ck=(function(e){return vd(this,e)}),C.bQ=(function(e){return yd(this,e)}),C.cj=(function(){return ho().dF}),C.f=(function(){return new Mu(new hd(this))}),C.ay=(function(e){var t=this.d();return t===e?0:t<e?-1:1}),C.s=(function(){return this.d()}),C.c=(function(e){return Z(this,e)}),C.i=(function(){return R().ei(this)}),C.n=(function(){return Gl(this)}),C.b=(function(){return ll(this)}),C.aM=(function(e){ao(this,e)}),C.aK=(function(e,t,n,r){return so(this,e,t,n,r)}),C.d=(function(){return this.bH.length|0}),C.g=(function(e){return this.bH[e]}),C.ax=(function(){return`WrappedVarArgs`}),C.e=(function(e){return this.g(e|0)}),new O().i(Q,`scala.scalajs.runtime.WrappedVarArgs`,{b8:1,t:1,b:1,c:1,j:1,i:1,h:1,u:1,e:1,g:1,k:1,d:1,f:1,w:1,v:1,o:1,m:1,H:1,x:1,p:1,q:1,a:1});function Cd(){}C=Cd.prototype=new Sd,C.constructor=Cd;function wd(){}wd.prototype=C,C.dS=(function(e){return Fs(this,e)});function Td(){}C=Td.prototype=new _d,C.constructor=Td;function Ed(){}Ed.prototype=C,C.ay=(function(e){var t=this.d();return t===e?0:t<e?-1:1}),C.s=(function(){return this.d()}),C.aN=(function(){return`IndexedSeq`}),C.ck=(function(e){return vd(this,e)}),C.bQ=(function(e){return yd(this,e)}),C.ax=(function(){return`ArraySeq`}),C.cj=(function(){return 2147483647});function $(){}C=$.prototype=new Sd,C.constructor=$;function Dd(){}Dd.prototype=C,C.ay=(function(e){var t=this.d();return t===e?0:t<e?-1:1}),C.s=(function(){return this.d()}),C.aN=(function(){return`IndexedSeq`}),C.ax=(function(){return`ArraySeq`}),C.c=(function(e){return e instanceof $&&Ba().bf(this.P())!==Ba().bf(e.P())?!1:Z(this,e)});function Od(e){this.am=null,this.am=e}C=Od.prototype=new Ed,C.constructor=Od,C.d=(function(){return this.am.a.length}),C.bb=(function(e){return this.am.a[e]}),C.i=(function(){var e=R();return e.p(this.am,e.o)}),C.c=(function(e){return e instanceof Od?N().e3(this.am,e.am):Z(this,e)}),C.f=(function(){return new Y(this.am)}),C.g=(function(e){return this.bb(e)}),C.e=(function(e){return this.bb(e|0)}),new O().i(Od,`scala.collection.immutable.ArraySeq$ofBoolean`,{aA:1,G:1,y:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,H:1,t:1,p:1,q:1,x:1,L:1,a:1});function kd(e){this.an=null,this.an=e}C=kd.prototype=new Ed,C.constructor=kd,C.d=(function(){return this.an.a.length}),C.b3=(function(e){return this.an.a[e]}),C.i=(function(){var e=R();return e.p(this.an,e.o)}),C.c=(function(e){return e instanceof kd?N().dY(this.an,e.an):Z(this,e)}),C.f=(function(){return new Y(this.an)}),C.g=(function(e){return this.b3(e)}),C.e=(function(e){return this.b3(e|0)}),new O().i(kd,`scala.collection.immutable.ArraySeq$ofByte`,{aB:1,G:1,y:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,H:1,t:1,p:1,q:1,x:1,L:1,a:1});function Ad(e){this.a4=null,this.a4=e}C=Ad.prototype=new Ed,C.constructor=Ad,C.d=(function(){return this.a4.a.length}),C.b4=(function(e){return this.a4.a[e]}),C.i=(function(){var e=R();return e.p(this.a4,e.o)}),C.c=(function(e){return e instanceof Ad?N().dZ(this.a4,e.a4):Z(this,e)}),C.f=(function(){return new Y(this.a4)}),C.aK=(function(e,t,n,r){return new Wd(this.a4).aK(e,t,n,r)}),C.g=(function(e){return Qn(this.b4(e))}),C.e=(function(e){return Qn(this.b4(e|0))}),new O().i(Ad,`scala.collection.immutable.ArraySeq$ofChar`,{aC:1,G:1,y:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,H:1,t:1,p:1,q:1,x:1,L:1,a:1});function jd(e){this.ao=null,this.ao=e}C=jd.prototype=new Ed,C.constructor=jd,C.d=(function(){return this.ao.a.length}),C.b5=(function(e){return this.ao.a[e]}),C.i=(function(){var e=R();return e.p(this.ao,e.o)}),C.c=(function(e){if(e instanceof jd){var t=this.ao,n=e.ao;if(t===n)return!0;if(t.a.length===n.a.length){for(var r=0;r<t.a.length&&t.a[r]===n.a[r];)r=1+r|0;return r>=t.a.length}return!1}return Z(this,e)}),C.f=(function(){return new Y(this.ao)}),C.g=(function(e){return this.b5(e)}),C.e=(function(e){return this.b5(e|0)}),new O().i(jd,`scala.collection.immutable.ArraySeq$ofDouble`,{aD:1,G:1,y:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,H:1,t:1,p:1,q:1,x:1,L:1,a:1});function Md(e){this.ap=null,this.ap=e}C=Md.prototype=new Ed,C.constructor=Md,C.d=(function(){return this.ap.a.length}),C.b6=(function(e){return this.ap.a[e]}),C.i=(function(){var e=R();return e.p(this.ap,e.o)}),C.c=(function(e){if(e instanceof Md){var t=this.ap,n=e.ap;if(t===n)return!0;if(t.a.length===n.a.length){for(var r=0;r<t.a.length&&t.a[r]===n.a[r];)r=1+r|0;return r>=t.a.length}return!1}return Z(this,e)}),C.f=(function(){return new Y(this.ap)}),C.g=(function(e){return this.b6(e)}),C.e=(function(e){return this.b6(e|0)}),new O().i(Md,`scala.collection.immutable.ArraySeq$ofFloat`,{aE:1,G:1,y:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,H:1,t:1,p:1,q:1,x:1,L:1,a:1});function Nd(e){this.aq=null,this.aq=e}C=Nd.prototype=new Ed,C.constructor=Nd,C.d=(function(){return this.aq.a.length}),C.b7=(function(e){return this.aq.a[e]}),C.i=(function(){var e=R();return e.p(this.aq,e.o)}),C.c=(function(e){return e instanceof Nd?N().e0(this.aq,e.aq):Z(this,e)}),C.f=(function(){return new Y(this.aq)}),C.g=(function(e){return this.b7(e)}),C.e=(function(e){return this.b7(e|0)}),new O().i(Nd,`scala.collection.immutable.ArraySeq$ofInt`,{aF:1,G:1,y:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,H:1,t:1,p:1,q:1,x:1,L:1,a:1});function Pd(e){this.ar=null,this.ar=e}C=Pd.prototype=new Ed,C.constructor=Pd,C.d=(function(){return this.ar.a.length>>>1|0}),C.b8=(function(e){var t=this.ar.a,n=e<<1;return T(t[n],t[n+1|0])}),C.i=(function(){var e=R();return e.p(this.ar,e.o)}),C.c=(function(e){return e instanceof Pd?N().e1(this.ar,e.ar):Z(this,e)}),C.f=(function(){return new Y(this.ar)}),C.g=(function(e){return this.b8(e)}),C.e=(function(e){return this.b8(e|0)}),new O().i(Pd,`scala.collection.immutable.ArraySeq$ofLong`,{aG:1,G:1,y:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,H:1,t:1,p:1,q:1,x:1,L:1,a:1});function Fd(e){this.as=null,this.as=e}C=Fd.prototype=new Ed,C.constructor=Fd,C.d=(function(){return this.as.a.length}),C.g=(function(e){return this.as.a[e]}),C.i=(function(){var e=R();return e.p(this.as,e.o)}),C.c=(function(e){return e instanceof Fd?Ya().e4(this.as,e.as):Z(this,e)}),C.f=(function(){return new Y(this.as)}),C.e=(function(e){return this.g(e|0)}),new O().i(Fd,`scala.collection.immutable.ArraySeq$ofRef`,{aH:1,G:1,y:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,H:1,t:1,p:1,q:1,x:1,L:1,a:1});function Id(e){this.at=null,this.at=e}C=Id.prototype=new Ed,C.constructor=Id,C.d=(function(){return this.at.a.length}),C.b9=(function(e){return this.at.a[e]}),C.i=(function(){var e=R();return e.p(this.at,e.o)}),C.c=(function(e){return e instanceof Id?N().e2(this.at,e.at):Z(this,e)}),C.f=(function(){return new Y(this.at)}),C.g=(function(e){return this.b9(e)}),C.e=(function(e){return this.b9(e|0)}),new O().i(Id,`scala.collection.immutable.ArraySeq$ofShort`,{aI:1,G:1,y:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,H:1,t:1,p:1,q:1,x:1,L:1,a:1});function Ld(e){this.aJ=null,this.aJ=e}C=Ld.prototype=new Ed,C.constructor=Ld,C.d=(function(){return this.aJ.a.length}),C.ba=(function(e){}),C.i=(function(){var e=R();return e.p(this.aJ,e.o)}),C.c=(function(e){return e instanceof Ld?this.aJ.a.length===e.aJ.a.length:Z(this,e)}),C.f=(function(){return new Y(this.aJ)}),C.g=(function(e){this.ba(e)}),C.e=(function(e){this.ba(e|0)}),new O().i(Ld,`scala.collection.immutable.ArraySeq$ofUnit`,{aJ:1,G:1,y:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,H:1,t:1,p:1,q:1,x:1,L:1,a:1});function Rd(e,t,n,r){for(var i=r,a=n;;)if(a===t)return!i.b()|0;else{if(!i.b()){var o=1+a|0,s=i.D();a=o,i=s;continue}return-1}}function zd(e,t,n){for(var r=n,i=t;;)if(i===r)return!0;else{var a=i.b(),o=r.b();if(!(a||o)&&P().B(i.Q(),r.Q())){var s=i.D(),c=r.D();i=s,r=c;continue}return a&&o}}function Bd(){}C=Bd.prototype=new _d,C.constructor=Bd;function Vd(){}Vd.prototype=C,C.g=(function(e){return eu(this,e)}),C.bQ=(function(e){return tu(this,e)}),C.aN=(function(){return`LinearSeq`}),C.f=(function(){return new ru(this)}),C.eD=(function(e){if(this.b())return e;if(e.b())return this;for(var t=new Qd(e.Q(),this),n=t,r=e.D();!r.b();){var i=new Qd(r.Q(),this);n.aY=i,n=i,r=r.D()}return t}),C.b=(function(){return this===tf()}),C.ee=(function(e){if(e instanceof Bd)return this.eD(e);if(e.s()===0)return this;var t=e.f();if(t.m()){for(var n=new Qd(t.h(),this),r=n;t.m();){var i=new Qd(t.h(),this);r.aY=i,r=i}return n}return this}),C.aM=(function(e){for(var t=this;!t.b();)e.e(t.Q()),t=t.D()}),C.d=(function(){for(var e=this,t=0;!e.b();)t=1+t|0,e=e.D();return t}),C.ay=(function(e){return e<0?1:Rd(this,e,0,this)}),C.ax=(function(){return`List`}),C.c=(function(e){return e instanceof Bd?zd(this,this,e):Z(this,e)}),C.fc=(function(e){return qu(this,e,this)}),C.e=(function(e){return eu(this,e|0)});function Hd(e){this.a5=null,this.a5=e}C=Hd.prototype=new Dd,C.constructor=Hd,C.d=(function(){return this.a5.a.length}),C.bb=(function(e){return this.a5.a[e]}),C.i=(function(){var e=R();return e.p(this.a5,e.o)}),C.c=(function(e){return e instanceof Hd?N().e3(this.a5,e.a5):$.prototype.c.call(this,e)}),C.f=(function(){return new Y(this.a5)}),C.P=(function(){return this.a5}),C.g=(function(e){return this.bb(e)}),C.e=(function(e){return this.bb(e|0)}),new O().i(Hd,`scala.collection.mutable.ArraySeq$ofBoolean`,{aM:1,I:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,D:1,r:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function Ud(e){this.a6=null,this.a6=e}C=Ud.prototype=new Dd,C.constructor=Ud,C.d=(function(){return this.a6.a.length}),C.b3=(function(e){return this.a6.a[e]}),C.i=(function(){var e=R();return e.p(this.a6,e.o)}),C.c=(function(e){return e instanceof Ud?N().dY(this.a6,e.a6):$.prototype.c.call(this,e)}),C.f=(function(){return new Y(this.a6)}),C.P=(function(){return this.a6}),C.g=(function(e){return this.b3(e)}),C.e=(function(e){return this.b3(e|0)}),new O().i(Ud,`scala.collection.mutable.ArraySeq$ofByte`,{aN:1,I:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,D:1,r:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function Wd(e){this.I=null,this.I=e}C=Wd.prototype=new Dd,C.constructor=Wd,C.d=(function(){return this.I.a.length}),C.b4=(function(e){return this.I.a[e]}),C.i=(function(){var e=R();return e.p(this.I,e.o)}),C.c=(function(e){return e instanceof Wd?N().dZ(this.I,e.I):$.prototype.c.call(this,e)}),C.f=(function(){return new Y(this.I)}),C.aK=(function(e,t,n,r){var i=e.A;t.length!==0&&(i.l=``+i.l+t);var a=this.I.a.length;if(a!==0){if(n===``)i.eL(this.I);else{i.d();var o=this.I.a[0],s=``+Hn(o);i.l+=s;for(var c=1;c<a;){i.l=``+i.l+n;var l=this.I.a[c],u=``+Hn(l);i.l+=u,c=1+c|0}}}return r.length!==0&&(i.l=``+i.l+r),e}),C.P=(function(){return this.I}),C.g=(function(e){return Qn(this.b4(e))}),C.e=(function(e){return Qn(this.b4(e|0))}),new O().i(Wd,`scala.collection.mutable.ArraySeq$ofChar`,{aO:1,I:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,D:1,r:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function Gd(e){this.J=null,this.J=e}C=Gd.prototype=new Dd,C.constructor=Gd,C.d=(function(){return this.J.a.length}),C.b5=(function(e){return this.J.a[e]}),C.i=(function(){var e=R();return e.p(this.J,e.o)}),C.c=(function(e){if(e instanceof Gd){var t=e.J;if(this.J===t)return!0;if(this.J.a.length===t.a.length){for(var n=0;n<this.J.a.length&&this.J.a[n]===t.a[n];)n=1+n|0;return n>=this.J.a.length}return!1}return $.prototype.c.call(this,e)}),C.f=(function(){return new Y(this.J)}),C.P=(function(){return this.J}),C.g=(function(e){return this.b5(e)}),C.e=(function(e){return this.b5(e|0)}),new O().i(Gd,`scala.collection.mutable.ArraySeq$ofDouble`,{aP:1,I:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,D:1,r:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function Kd(e){this.K=null,this.K=e}C=Kd.prototype=new Dd,C.constructor=Kd,C.d=(function(){return this.K.a.length}),C.b6=(function(e){return this.K.a[e]}),C.i=(function(){var e=R();return e.p(this.K,e.o)}),C.c=(function(e){if(e instanceof Kd){var t=e.K;if(this.K===t)return!0;if(this.K.a.length===t.a.length){for(var n=0;n<this.K.a.length&&this.K.a[n]===t.a[n];)n=1+n|0;return n>=this.K.a.length}return!1}return $.prototype.c.call(this,e)}),C.f=(function(){return new Y(this.K)}),C.P=(function(){return this.K}),C.g=(function(e){return this.b6(e)}),C.e=(function(e){return this.b6(e|0)}),new O().i(Kd,`scala.collection.mutable.ArraySeq$ofFloat`,{aQ:1,I:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,D:1,r:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function qd(e){this.a7=null,this.a7=e}C=qd.prototype=new Dd,C.constructor=qd,C.d=(function(){return this.a7.a.length}),C.b7=(function(e){return this.a7.a[e]}),C.i=(function(){var e=R();return e.p(this.a7,e.o)}),C.c=(function(e){return e instanceof qd?N().e0(this.a7,e.a7):$.prototype.c.call(this,e)}),C.f=(function(){return new Y(this.a7)}),C.P=(function(){return this.a7}),C.g=(function(e){return this.b7(e)}),C.e=(function(e){return this.b7(e|0)}),new O().i(qd,`scala.collection.mutable.ArraySeq$ofInt`,{aR:1,I:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,D:1,r:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function Jd(e){this.a8=null,this.a8=e}C=Jd.prototype=new Dd,C.constructor=Jd,C.d=(function(){return this.a8.a.length>>>1|0}),C.b8=(function(e){var t=this.a8.a,n=e<<1;return T(t[n],t[n+1|0])}),C.i=(function(){var e=R();return e.p(this.a8,e.o)}),C.c=(function(e){return e instanceof Jd?N().e1(this.a8,e.a8):$.prototype.c.call(this,e)}),C.f=(function(){return new Y(this.a8)}),C.P=(function(){return this.a8}),C.g=(function(e){return this.b8(e)}),C.e=(function(e){return this.b8(e|0)}),new O().i(Jd,`scala.collection.mutable.ArraySeq$ofLong`,{aS:1,I:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,D:1,r:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function Yd(e){this.a9=null,this.a9=e}C=Yd.prototype=new Dd,C.constructor=Yd,C.d=(function(){return this.a9.a.length}),C.g=(function(e){return this.a9.a[e]}),C.i=(function(){var e=R();return e.p(this.a9,e.o)}),C.c=(function(e){return e instanceof Yd?Ya().e4(this.a9,e.a9):$.prototype.c.call(this,e)}),C.f=(function(){return new Y(this.a9)}),C.P=(function(){return this.a9}),C.e=(function(e){return this.g(e|0)}),new O().i(Yd,`scala.collection.mutable.ArraySeq$ofRef`,{aT:1,I:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,D:1,r:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function Xd(e){this.aa=null,this.aa=e}C=Xd.prototype=new Dd,C.constructor=Xd,C.d=(function(){return this.aa.a.length}),C.b9=(function(e){return this.aa.a[e]}),C.i=(function(){var e=R();return e.p(this.aa,e.o)}),C.c=(function(e){return e instanceof Xd?N().e2(this.aa,e.aa):$.prototype.c.call(this,e)}),C.f=(function(){return new Y(this.aa)}),C.P=(function(){return this.aa}),C.g=(function(e){return this.b9(e)}),C.e=(function(e){return this.b9(e|0)}),new O().i(Xd,`scala.collection.mutable.ArraySeq$ofShort`,{aU:1,I:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,D:1,r:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function Zd(e){this.au=null,this.au=e}C=Zd.prototype=new Dd,C.constructor=Zd,C.d=(function(){return this.au.a.length}),C.ba=(function(e){}),C.i=(function(){var e=R();return e.p(this.au,e.o)}),C.c=(function(e){return e instanceof Zd?this.au.a.length===e.au.a.length:$.prototype.c.call(this,e)}),C.f=(function(){return new Y(this.au)}),C.P=(function(){return this.au}),C.g=(function(e){this.ba(e)}),C.e=(function(e){this.ba(e|0)}),new O().i(Zd,`scala.collection.mutable.ArraySeq$ofUnit`,{aV:1,I:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,D:1,r:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function Qd(e,t){this.ce=null,this.aY=null,this.ce=e,this.aY=t}C=Qd.prototype=new Vd,C.constructor=Qd,C.bj=(function(){return new Ul(this)}),C.ad=(function(){return 2}),C.af=(function(){return`::`}),C.ae=(function(e){if(e===0)return this.ce;if(e===1)return this.aY;throw jl(new Ml,e)}),C.Q=(function(){return this.ce}),C.D=(function(){return this.aY}),new O().i(Qd,`scala.collection.immutable.$colon$colon`,{dl:1,a3:1,y:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,av:1,X:1,aL:1,aK:1,p:1,q:1,ax:1,x:1,a:1,az:1,T:1});function $d(){ef=this,tf(),tf()}C=$d.prototype=new Vd,C.constructor=$d,C.bj=(function(){return new Ul(this)}),C.ad=(function(){return 0}),C.af=(function(){return`Nil`}),C.ae=(function(e){throw jl(new Ml,e)}),C.fz=(function(){throw new Rl(`head of empty list`)}),C.gj=(function(){throw new Ll(`tail of empty list`)}),C.s=(function(){return 0}),C.f=(function(){return Oc().F}),C.Q=(function(){this.fz()}),C.D=(function(){this.gj()}),new O().i($d,`scala.collection.immutable.Nil$`,{dr:1,a3:1,y:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,av:1,X:1,aL:1,aK:1,p:1,q:1,ax:1,x:1,a:1,az:1,T:1});var ef;function tf(){return ef||=new $d,ef}function nf(e,t){return e.A=t,e}function rf(e){return nf(e,new nl),e}function af(){this.A=null}C=af.prototype=new Sd,C.constructor=af,C.dS=(function(e){return Fs(this,e)}),C.f=(function(){return new Mu(new hd(this))}),C.ay=(function(e){var t=this.A.d();return t===e?0:t<e?-1:1}),C.aN=(function(){return`IndexedSeq`}),C.d=(function(){return this.A.d()}),C.s=(function(){return this.A.d()}),C.eG=(function(e){var t=this.A,n=``+Hn(e);return t.l+=n,this}),C.n=(function(){return this.A.l}),C.b=(function(){return this.A.d()===0}),C.g=(function(e){return Qn(this.A.dV(e))}),C.e=(function(e){var t=e|0;return Qn(this.A.dV(t))}),C.ch=(function(e){return this.eG(er(e))}),C.eg=(function(){return this.A.l}),new O().i(af,`scala.collection.mutable.StringBuilder`,{dB:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,D:1,r:1,A:1,F:1,E:1,aX:1,aY:1,aW:1,dz:1,o:1,m:1,C:1,B:1,a2:1,a:1});function of(e,t){return e.av=t,e}function sf(e){return of(e,[]),e}function cf(){this.av=null}C=cf.prototype=new wd,C.constructor=cf,C.aN=(function(){return`IndexedSeq`}),C.f=(function(){return new Mu(new hd(this))}),C.ay=(function(e){var t=this.av.length|0;return t===e?0:t<e?-1:1}),C.g=(function(e){return this.av[e]}),C.d=(function(){return this.av.length|0}),C.s=(function(){return this.av.length|0}),C.ax=(function(){return`WrappedArray`}),C.eg=(function(){return this}),C.ch=(function(e){return this.av.push(e),this}),C.e=(function(e){var t=e|0;return this.av[t]}),new O().i(cf,`scala.scalajs.js.WrappedArray`,{dV:1,ds:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,D:1,r:1,A:1,F:1,E:1,aX:1,aY:1,dA:1,dv:1,q:1,p:1,B:1,o:1,m:1,C:1,dx:1,aW:1,a:1}),qi(new(Eu.r()).C([]));