var e=Object.defineProperty,t=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r},n=Object.defineProperty,r=Object.getOwnPropertyDescriptor,i=e=>{
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
throw TypeError(e)},a=(e,t,i,a)=>{for(var o=a>1?void 0:a?r(t,i):t,s=e.length-1,c;s>=0;s--)(c=e[s])&&(o=(a?c(t,i,o):c(o))||o);return a&&o&&n(t,i,o),o},o=(e,t,n)=>t.has(e)||i(`Cannot `+n),s=(e,t,n)=>(o(e,t,`read from private field`),n?n.call(e):t.get(e)),c=(e,t,n)=>t.has(e)?i(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),l=(e,t,n,r)=>(o(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n);
/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const u=globalThis,d=u.ShadowRoot&&(u.ShadyCSS===void 0||u.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,f=Symbol(),p=/* @__PURE__ */ new WeakMap;var m=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==f)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(d&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=p.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&p.set(t,e))}return e}toString(){return this.cssText}};const ee=e=>new m(typeof e==`string`?e:e+``,void 0,f),h=(e,...t)=>new m(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,f),te=(e,t)=>{if(d)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=u.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},ne=d?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return ee(t)})(e):e,{is:re,defineProperty:ie,getOwnPropertyDescriptor:ae,getOwnPropertyNames:oe,getOwnPropertySymbols:se,getPrototypeOf:ce}=Object,le=globalThis,ue=le.trustedTypes,de=ue?ue.emptyScript:``,fe=le.reactiveElementPolyfillSupport,pe=(e,t)=>e,me={toAttribute(e,t){
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
\f\r]`,Me=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ne=/-->/g,Pe=/>/g,Fe=RegExp(`>|${je}(?:([^\\s"'>=/]+)(${je}*=${je}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Ie=/'/g,Le=/"/g,Re=/^(?:script|style|textarea|title)$/i,ze=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),Be=Symbol.for(`lit-noChange`),g=Symbol.for(`lit-nothing`),Ve=/* @__PURE__ */ new WeakMap,He=Ee.createTreeWalker(Ee,129);function Ue(e,t){if(!ke(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return xe===void 0?t:xe.createHTML(t)}const We=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=Me;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===Me?c[1]===`!--`?o=Ne:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=Fe):(Re.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=Fe):o=Pe:o===Fe?c[0]===`>`?(o=i??Me,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?Fe:c[3]===`"`?Le:Ie):o===Le||o===Ie?o=Fe:o===Ne||o===Pe?o=Me:(o=Fe,i=void 0);let d=o===Fe&&e[t+1].startsWith(`/>`)?` `:``;a+=o===Me?n+Te:l>=0?(r.push(s),n.slice(0,l)+Se+n.slice(l)+Ce+d):n+Ce+(l===-2?t:d)}return[Ue(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]};var Ge=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=We(t,n);if(this.el=e.createElement(l,r),He.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=He.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(Se)){let t=u[o++],n=i.getAttribute(e).split(Ce),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Xe:r[1]===`?`?Ze:r[1]===`@`?Qe:Ye}),i.removeAttribute(e)}else e.startsWith(Ce)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Re.test(i.tagName)){let e=i.textContent.split(Ce),t=e.length-1;if(t>0){i.textContent=be?be.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],De()),He.nextNode(),c.push({type:2,index:++a});i.append(e[t],De())}}}else if(i.nodeType===8){if(i.data===we)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(Ce,e+1))!==-1;)c.push({type:7,index:a}),e+=Ce.length-1}}a++}}static createElement(e,t){let n=Ee.createElement(`template`);return n.innerHTML=e,n}};function Ke(e,t,n=e,r){if(t===Be)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=Oe(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=Ke(e,i._$AS(e,t.values),i,r)),t}var qe=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??Ee).importNode(t,!0);He.currentNode=r;let i=He.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Je(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new $e(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=He.nextNode(),a++)}return He.currentNode=Ee,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Je=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ke(this,e,t),Oe(e)?e===g||e==null||e===``?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==Be&&this._(e):e._$litType$===void 0?e.nodeType===void 0?Ae(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==g&&Oe(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ee.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Ge.createElement(Ue(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new qe(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Ve.get(e.strings);return t===void 0&&Ve.set(e.strings,t=new Ge(e)),t}k(t){ke(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(De()),this.O(De()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=ye(e).nextSibling;ye(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Ye=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(/* @__PURE__ */ new String),this.strings=n):this._$AH=g}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=Ke(this,e,t,0),a=!Oe(e)||e!==this._$AH&&e!==Be,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=Ke(this,r[n+o],t,o),s===Be&&(s=this._$AH[o]),a||=!Oe(s)||s!==this._$AH[o],s===g?e=g:e!==g&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Xe=class extends Ye{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}},Ze=class extends Ye{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==g)}},Qe=class extends Ye{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=Ke(this,e,t,0)??g)===Be)return;let n=this._$AH,r=e===g&&n!==g||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==g&&(n===g||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},$e=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Ke(this,e)}};const et={M:Se,P:Ce,A:we,C:1,L:We,R:qe,D:Ae,V:Ke,I:Je,H:Ye,N:Ze,U:Qe,B:Xe,F:$e},tt=ve.litHtmlPolyfillSupport;tt?.(Ge,Je),(ve.litHtmlVersions??=[]).push(`3.3.3`);const nt=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Je(t.insertBefore(De(),e),e,void 0,n??{})}return i._$AI(e),i},rt=globalThis
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
let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=/* @__PURE__ */ new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function _(e){return(t,n)=>typeof n==`object`?ct(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function lt(e){return _({...e,state:!0,attribute:!1})}
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
var ft=h`
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
`,pt=/;\s+$/;function mt(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function ht(e){let{property:t,value:n,element:r}=e;if(n){let e=r.getAttribute(`style`)||``;e&&(e.match(pt)||(e+=`;`),e+=` `);let i=`${t}: ${n}`;return e.includes(i)?void 0:`${e}${i};`}return null}var gt,_t=class extends it{constructor(){super(),c(this,gt,!1),this.initialReflectedProperties=/* @__PURE__ */ new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,t)=>{if(this.internals?.states)try{t?this.internals.states.add(e):this.internals.states.delete(e)}catch(e){if(String(e).includes(`must start with '--'`))console.error(`Your browser implements an outdated version of CustomStateSet. Consider using a polyfill`);else throw e}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error(`Element internals are not supported in your browser. Consider using a polyfill`)}this.customStates.set(`wa-defined`,!0);let e=this.constructor;for(let[t,n]of e.elementProperties)n.default===`inherit`&&n.initial!==void 0&&typeof t==`string`&&this.customStates.set(`initial-${t}-${n.initial}`,!0)}static get styles(){return[ft,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `)),this.didSSR&&this.updateComplete.then(()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `))})}attributeChangedCallback(e,t,n){s(this,gt)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),l(this,gt,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll(`slot`).forEach(e=>{e.dispatchEvent(new Event(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(e){if(this.didSSR&&!this.hasUpdated){let t=new Event(`lit-hydration-error`,{bubbles:!0,composed:!0,cancelable:!1});t.error=e,this.dispatchEvent(t)}throw e}}setStyle(e,t){if(this.style)this.style[e]=t;else{let n=ht({property:mt(e),value:t,element:this});n&&this.setAttribute(`style`,n)}}setStyleProperty(e,t){if(this.style)this.style.setProperty(e,t);else{let n=ht({property:e,value:t,element:this});n&&this.setAttribute(`style`,n)}}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};gt=/* @__PURE__ */ new WeakMap,a([_()],_t.prototype,`dir`,2),a([_()],_t.prototype,`lang`,2),a([_({type:Boolean,reflect:!0,attribute:`did-ssr`})],_t.prototype,`didSSR`,2);const vt=/* @__PURE__ */ new Set,yt=/* @__PURE__ */ new Map;let bt,xt=`ltr`,St=`en`;const Ct=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(Ct){let e=new MutationObserver(Tt);xt=document.documentElement.dir||`ltr`,St=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function wt(...e){e.map(e=>{let t=e.$code.toLowerCase();yt.has(t)?yt.set(t,Object.assign(Object.assign({},yt.get(t)),e)):yt.set(t,e),bt||=e}),Tt()}function Tt(){Ct&&(xt=document.documentElement.dir||`ltr`,St=document.documentElement.lang||navigator.language),[...vt.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var Et=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){vt.add(this.host)}hostDisconnected(){vt.delete(this.host)}dir(){return`${this.host.dir||xt}`.toLowerCase()}lang(){let e=`${this.host.lang||St}`.toLowerCase().replace(/_/g,`-`);try{return new Intl.Locale(e),e}catch{return bt?bt.$code.toLowerCase():`en`}}getTranslationData(e){let t;try{t=new Intl.Locale(e.replace(/_/g,`-`))}catch{return{locale:void 0,language:``,region:``,primary:void 0,secondary:void 0}}let n=t.language.toLowerCase(),r=t.region?.toLowerCase()??``,i=yt.get(`${n}-${r}`),a=yt.get(n);return{locale:t,language:n,region:r,primary:i,secondary:a}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&bt&&bt[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(bt&&bt[e])i=bt[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},Dt={$code:`en`,$name:`English`,$dir:`ltr`,allTagsRemoved:`All tags removed`,am:`AM`,autosizeColumn:`Autosize column`,captions:`Captions`,carousel:`Carousel`,chooseDate:`Choose date`,chooseDecade:`Choose decade`,chooseMonth:`Choose month`,chooseTime:`Choose time`,chooseYear:`Choose year`,clearEntry:`Clear entry`,clearFilter:`Clear filter`,clearSort:`Clear sort`,close:`Close`,closeCalendar:`Close calendar`,closeTimeInput:`Close time picker`,collapseRow:`Collapse row`,columnMenu:`Column options`,columnMovedToPosition:(e,t,n)=>`${e} moved to position ${t} of ${n}`,columns:`Columns`,compactPageXOfY:(e,t)=>`${e} of ${t}`,completed:`Completed`,copied:`Copied`,copy:`Copy`,createOption:e=>`Create "${e}"`,currentlyPlaying:`currently playing`,currentValue:`Current value`,date:`Date`,datePickerKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the calendar.`,day:`Day`,dayPeriod:`AM/PM`,decrement:`Decrement`,deselectAllRows:`Deselect all rows`,disabled:`Disabled`,dropFileHere:`Drop file here or click to browse`,dropFilesHere:`Drop files here or click to browse`,empty:`Empty`,endDate:`End date`,enterFullscreen:`Enter fullscreen`,error:`Error`,exitFullscreen:`Exit fullscreen`,expandRow:`Expand row`,filterByColumn:e=>`Filter by ${e}`,filterFrom:`From`,filterMax:`Max`,filterMin:`Min`,filterTo:`To`,firstPage:`First page`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hideColumn:`Hide column`,hidePassword:`Hide password`,hour:`Hour`,incompleteDate:`Enter a valid date.`,increment:`Increment`,jumpBackwardX:e=>`Jump back ${e} pages`,jumpForwardX:e=>`Jump forward ${e} pages`,lastPage:`Last page`,loading:`Loading`,locked:`Locked`,minute:`Minute`,month:`Month`,moreOptions:`More Options`,mute:`Mute`,nextDecade:`Next decade`,nextMonth:`Next month`,nextPage:`Next page`,nextSlide:`Next slide`,nextVideo:`Next Video`,nextYear:`Next year`,noData:`No data`,noOptions:`No options`,noResults:`No matching results`,notCompleted:`Not completed`,now:`Now`,numCharacters:e=>e===1?`1 character`:`${e} characters`,numCharactersRemaining:e=>e===1?`1 character remaining`:`${e} characters remaining`,numOptionsAvailable:e=>e===0?`No options available`:e===1?`1 option available`:`${e} options available`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,numRowsCopied:e=>e===1?`1 row copied`:`${e} rows copied`,numRowsSelected:e=>e===1?`1 row selected`:`${e} rows selected`,optionPosition:(e,t,n)=>`${e}, ${t} of ${n}`,optionsLoadError:`Options could not be loaded`,pageXOfY:(e,t)=>`Page ${e} of ${t}`,pagination:`Pagination`,pause:`Pause`,pauseAnimation:`Pause animation`,pictureInPicture:`Picture in picture`,pinLeft:`Pin left`,pinRight:`Pin right`,play:`Play`,playAnimation:`Play animation`,playbackSpeed:`Playback speed`,playlist:`Playlist`,pm:`PM`,previousDecade:`Previous decade`,previousMonth:`Previous month`,previousPage:`Previous page`,previousSlide:`Previous slide`,previousVideo:`Previous video`,previousYear:`Previous year`,progress:`Progress`,rangeTooLong:e=>e===1?`Select a range no longer than 1 day`:`Select a range no longer than ${e} days`,rangeTooShort:e=>e===1?`Select a range at least 1 day long`:`Select a range at least ${e} days long`,readonly:`Read-only`,remove:`Remove`,resetColumns:`Reset columns`,resize:`Resize`,resizeColumn:`Resize column`,rowsPerPage:`Rows per page`,scrollableRegion:`Scrollable region`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,search:`Search`,second:`Second`,seek:`Seek`,seekProgress:(e,t)=>`${e} of ${t}`,selectAColorFromTheScreen:`Select a color from the screen`,selectAllRows:`Select all rows`,selected:`Selected`,selectedDateLabel:e=>`Selected: ${e}`,selectedRangeLabel:e=>`Selected range: ${e}`,selectGroup:`Select group`,selectionCleared:`Selection cleared`,selectRow:`Select row`,showingNofMRows:(e,t)=>`Showing ${e} of ${t} rows`,showingXtoYofZ:(e,t,n)=>`${e}\u2013${t} of ${n}`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,sortAscending:`Sort ascending`,sortColumn:`Sort column`,sortDescending:`Sort descending`,startDate:`Start date`,steps:`Steps`,stepXOfY:(e,t)=>`Step ${e} of ${t}`,tagAdded:e=>`${e} added`,tagAlreadyAdded:e=>`${e} is already added`,tagInputKeyboardHelp:`Press Backspace or Delete to remove this tag.`,tagRemoved:e=>`${e} removed`,time:`Time`,timeInputKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the time picker.`,today:`Today`,toggleColorFormat:`Toggle color format`,tooFewTags:e=>e===1?`Add at least 1 tag`:`Add at least ${e} tags`,tooManyTags:e=>e===1?`Add no more than 1 tag`:`Add no more than ${e} tags`,unmute:`Unmute`,unpin:`Unpin`,unpinColumn:`Unpin column`,videoPlayer:`Video player`,volume:`Volume`,year:`Year`,zoomIn:`Zoom in`,zoomOut:`Zoom out`}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;wt(Dt);var Ot=Dt,kt=class extends Et{lang(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||`en`:super.lang()}};wt(Ot);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var At=class extends _t{constructor(){super(...arguments),this.localize=new kt(this),this.value=0,this.unit=`byte`,this.display=`short`}static get styles(){return[]}render(){if(isNaN(this.value))return``;let e=this.unit===`bit`?[``,`kilo`,`mega`,`giga`,`tera`]:[``,`kilo`,`mega`,`giga`,`tera`,`peta`],t=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),e.length-1)),n=e[t]+this.unit,r=parseFloat((this.value/1e3**t).toPrecision(3));return this.localize.number(r,{style:`unit`,unit:n,unitDisplay:this.display})}};a([_({type:Number})],At.prototype,`value`,2),a([_()],At.prototype,`unit`,2),a([_()],At.prototype,`display`,2),At=a([ot(`wa-format-bytes`)],At);var jt=/* @__PURE__ */ t({default:()=>At}),Mt=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-clear`,{bubbles:!0,cancelable:!1,composed:!0})}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Nt(e,t){let n=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key===`Enter`&&!n&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&Lt(t)})}var Pt=/* @__PURE__ */ new Map([[`input`,!0],[`wa-input`,!0],[`wa-tag-input`,!0],[`wa-number-input`,!0],[`wa-otp-input`,!0],[`wa-slider`,!0]]),Ft=/* @__PURE__ */ new Map([[`button`,!1],[`checkbox`,!1],[`color`,!1],[`date`,!1],[`datetime-local`,!1],[`email`,!0],[`file`,!1],[`hidden`,!1],[`image`,!1],[`month`,!1],[`number`,!0],[`password`,!0],[`radio`,!1],[`range`,!1],[`reset`,!0],[`search`,!0],[`submit`,!1],[`tel`,!0],[`text`,!0],[`time`,!1],[`url`,!0],[`week`,!1]]),It=e=>{let t=e?.localName;if(!t||!Pt.get(t))return!1;if(t!==`input`&&t!==`wa-input`)return!0;let n=e.type;return!!Ft.get(n)};function Lt(e){let t=null;if(`form`in e&&(t=e.form),!t&&`getForm`in e&&(t=e.getForm()),!t)return;let n=Array.from(t.elements),r=0;for(let e of n)It(e)&&(r+=1);if(r===1){t.requestSubmit(null);return}let i=n.find(e=>e.type===`submit`&&!e.matches(`:disabled`));i&&([`input`,`button`].includes(i.localName)?t.requestSubmit(i):i.click())}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Rt=h`
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
`,zt=h`
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
`,Bt=()=>({checkValidity(e){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
let t=e.input,n={message:``,isValid:!0,invalidKeys:[]};if(!t)return n;let r=!0;if(`checkValidity`in t&&(r=t.checkValidity()),r)return n;if(n.isValid=!1,`validationMessage`in t&&(n.message=t.validationMessage),!(`validity`in t))return n.invalidKeys.push(`customError`),n;for(let e in t.validity){if(e===`valid`)continue;let r=e;t.validity[r]&&n.invalidKeys.push(r)}return n}}),Vt=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-invalid`,{bubbles:!0,cancelable:!1,composed:!0})}},Ht=()=>({observedAttributes:[`custom-error`],checkValidity(e){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
let t={message:``,isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=[`customError`]),t}}),Ut=class extends _t{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=[`input`],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new Vt))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},`addEventListener`in this&&this.addEventListener(`invalid`,this.emitInvalid)}static get validators(){return[Ht()]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let n of t.observedAttributes)e.add(n);return[...e]}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.updateValidity()}):this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener?.(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has(`customError`)&&(this.customError||=null,this.setCustomValidity(this.customError||``)),e.has(`value`)||e.has(`disabled`)||e.has(`defaultValue`)){let e=this.value;this.updateFormValue(e)}e.has(`disabled`)&&(this.customStates.set(`disabled`,this.disabled),(this.hasAttribute(`disabled`)||!this.matches(`:disabled`))&&this.toggleAttribute(`disabled`,this.disabled)),super.willUpdate(e),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>this.updateValidity()):this.updateValidity()}updateFormValue(e){if(Array.isArray(e)){if(this.name){let t=new FormData;for(let n of e)t.append(this.name,n);this.setValue(t,t)}}else this.setValue(e,e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(e){e?this.setAttribute(`form`,e):this.removeAttribute(`form`)}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],n=e[1],r=e[2];r||=this.validationTarget,this.internals.setValidity(t,n,r||void 0),this.requestUpdate(`validity`),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set(`required`,e),this.customStates.set(`optional`,!e),this.customStates.set(`invalid`,!t),this.customStates.set(`valid`,t),this.customStates.set(`user-invalid`,!t&&n),this.customStates.set(`user-valid`,t&&n)}setCustomValidity(e){e?(this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)):(this.customError=null,this.setValidity({}))}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity()}):(this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity())}setValue(...e){let[t,n]=e;this.internals.setFormValue(t,n)}get allValidators(){let e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(``),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute(`disabled`)||!this.willValidate){this.resetValidity();return}let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},n=this.validationTarget||this.input||void 0,r=``;for(let n of e){let{isValid:e,message:i,invalidKeys:a}=n.checkValidity(this);e||(r||=i,a?.length>=0&&a.forEach(e=>t[e]=!0))}r||=this.validationMessage,this.setValidity(t,r,n)}};Ut.formAssociated=!0,a([_({reflect:!0})],Ut.prototype,`name`,2),a([_({type:Boolean})],Ut.prototype,`disabled`,2),a([_({state:!0,attribute:!1})],Ut.prototype,`valueHasChanged`,2),a([_({state:!0,attribute:!1})],Ut.prototype,`hasInteracted`,2),a([_({attribute:`custom-error`,reflect:!0})],Ut.prototype,`customError`,2),a([_({attribute:!1,state:!0,type:Object})],Ut.prototype,`validity`,1);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Wt={small:`s`,medium:`m`,large:`l`},Gt=/* @__PURE__ */ new Set;function Kt(e,t){t in Wt&&!Gt.has(`${e}:${t}`)&&(Gt.add(`${e}:${t}`),console.warn(`[${e}] size="${t}" is deprecated. Use size="${Wt[t]}" instead. The long-form value will be removed in the next major version.`))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var qt=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return this.host.childNodes?[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===Node.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`wa-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1}):!1}hasNamedSlot(e){return this.host.querySelector?.(`:scope > [slot="${e}"]`)!==null}test(e,t){return t&&this.host.didSSR&&!this.host.hasUpdated?!!this.host[t]:e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){let e=this.host.shadowRoot;e&&`addEventListener`in e&&e.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){let e=this.host.shadowRoot;e&&`removeEventListener`in e&&e.removeEventListener(`slotchange`,this.handleSlotChange)}},Jt=h`
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
function Yt(e,t){let n={waitUntilFirstUpdate:!1,...t};return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const Xt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Zt=e=>(...t)=>({_$litDirective$:e,values:t});var Qt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const $t=Zt(class extends Qt{constructor(e){if(super(e),e.type!==Xt.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=/* @__PURE__ */ new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return Be}}),en=e=>e??g,{I:tn}=et,nn=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,rn=e=>e.strings===void 0,an={},on=(e,t=an)=>e._$AH=t,sn=Zt(class extends Qt{constructor(e){
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
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
if(super(e),e.type!==Xt.PROPERTY&&e.type!==Xt.ATTRIBUTE&&e.type!==Xt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!rn(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===Be||t===g)return t;let n=e.element,r=e.name;if(e.type===Xt.PROPERTY){if(t===n[r])return Be}else if(e.type===Xt.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return Be}else if(e.type===Xt.ATTRIBUTE&&n.getAttribute(r)===t+``)return Be;return on(e),t}});
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var v=class extends Ut{constructor(){super(...arguments),this.assumeInteractionOn=[`blur`,`input`],this.hasSlotController=new qt(this,`hint`,`label`),this.localize=new kt(this),this.title=``,this.type=`text`,this._value=null,this.defaultValue=this.getAttribute(`value`)||null,this.size=`m`,this.appearance=`outlined`,this.pill=!1,this.label=``,this.hint=``,this.withClear=!1,this.placeholder=``,this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.withoutSpinButtons=!1,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,Bt()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){this._value!==e&&(this.valueHasChanged=!0,this._value=e)}updateFormValue(e){e==null?this.setValue(``,null):super.updateFormValue(e)}handleSizeChange(){Kt(this.localName,this.size)}handleChange(e){this.value=this.input.value,this.relayNativeEvent(e,{bubbles:!0,composed:!0})}handleClearClick(e){e.preventDefault(),this.value!==``&&(this.value=``,this.updateComplete.then(()=>{this.dispatchEvent(new Mt),this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})),this.input.focus()}handleInput(){this.value=this.input.value}handleKeyDown(e){Nt(e,this)}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}updated(e){super.updated(e),(e.has(`value`)||e.has(`defaultValue`)||e.has(`type`))&&(this.input&&[`number`,`date`,`time`,`datetime-local`].includes(this.type)&&this.value&&this.input.value!==this.value&&(this._value=this.input.value),this.customStates.set(`blank`,!this.value),this.updateValidity())}handleStepChange(){this.input.step=String(this.step),this.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,n=`none`){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,r=`preserve`){let i=t??this.input.selectionStart,a=n??this.input.selectionEnd;this.input.setRangeText(e,i,a,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){`showPicker`in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}formResetCallback(){this.value=null,this.input&&(this.input.value=this.value),super.formResetCallback()}render(){let e=this.hasSlotController.test(`label`,`withLabel`),t=this.hasSlotController.test(`hint`,`withHint`),n=this.label?!0:!!e,r=this.hint?!0:!!t,i=this.withClear&&!this.disabled&&!this.readonly,a=(!this.didSSR||this.hasUpdated)&&i&&(typeof this.value==`number`||this.value&&this.value.length>0);return ze`
      <label
        part="form-control-label label"
        class=${$t({label:!0,"has-label":n})}
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
          name=${en(this.name)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${en(this.placeholder)}
          minlength=${en(this.minlength)}
          maxlength=${en(this.maxlength)}
          min=${en(this.min)}
          max=${en(this.max)}
          step=${en(this.step)}
          .value=${sn(this.value??``)}
          autocapitalize=${en(this.autocapitalize)}
          autocomplete=${en(this.autocomplete)}
          autocorrect=${this.autocorrect?`on`:`off`}
          ?autofocus=${this.autofocus}
          spellcheck=${this.spellcheck}
          pattern=${en(this.pattern)}
          enterkeyhint=${en(this.enterkeyhint)}
          inputmode=${en(this.inputmode)}
          aria-describedby="hint"
          @change=${this.handleChange}
          @input=${this.handleInput}
          @keydown=${this.handleKeyDown}
        />

        ${a?ze`
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
        ${this.passwordToggle&&!this.disabled?ze`
              <button
                part="password-toggle-button"
                class="password-toggle"
                type="button"
                aria-label=${this.localize.term(this.passwordVisible?`hidePassword`:`showPassword`)}
                @click=${this.handlePasswordToggle}
              >
                ${this.passwordVisible?ze`
                      <slot name="hide-password-icon">
                        <wa-icon name="eye-slash" library="system" variant="regular"></wa-icon>
                      </slot>
                    `:ze`
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
        class=${$t({"has-slotted":r})}
        aria-hidden=${r?`false`:`true`}
        >${this.hint}</slot
      >
    `}};v.css=[Jt,zt,Rt],v.shadowRootOptions={...Ut.shadowRootOptions,delegatesFocus:!0},a([dt(`input`)],v.prototype,`input`,2),a([_()],v.prototype,`title`,2),a([_({reflect:!0})],v.prototype,`type`,2),a([lt()],v.prototype,`value`,1),a([_({attribute:`value`,reflect:!0})],v.prototype,`defaultValue`,2),a([_({reflect:!0})],v.prototype,`size`,2),a([Yt(`size`)],v.prototype,`handleSizeChange`,1),a([_({reflect:!0})],v.prototype,`appearance`,2),a([_({type:Boolean,reflect:!0})],v.prototype,`pill`,2),a([_()],v.prototype,`label`,2),a([_({attribute:`hint`})],v.prototype,`hint`,2),a([_({attribute:`with-clear`,type:Boolean})],v.prototype,`withClear`,2),a([_()],v.prototype,`placeholder`,2),a([_({type:Boolean,reflect:!0})],v.prototype,`readonly`,2),a([_({attribute:`password-toggle`,type:Boolean})],v.prototype,`passwordToggle`,2),a([_({attribute:`password-visible`,type:Boolean})],v.prototype,`passwordVisible`,2),a([_({attribute:`without-spin-buttons`,type:Boolean,reflect:!0})],v.prototype,`withoutSpinButtons`,2),a([_({type:Boolean,reflect:!0})],v.prototype,`required`,2),a([_()],v.prototype,`pattern`,2),a([_({type:Number})],v.prototype,`minlength`,2),a([_({type:Number})],v.prototype,`maxlength`,2),a([_()],v.prototype,`min`,2),a([_()],v.prototype,`max`,2),a([_()],v.prototype,`step`,2),a([_()],v.prototype,`autocapitalize`,2),a([_({type:Boolean,converter:{fromAttribute:e=>!(!e||e===`off`),toAttribute:e=>e?`on`:`off`}})],v.prototype,`autocorrect`,2),a([_()],v.prototype,`autocomplete`,2),a([_({type:Boolean})],v.prototype,`autofocus`,2),a([_()],v.prototype,`enterkeyhint`,2),a([_({type:Boolean,converter:{fromAttribute:e=>!(!e||e===`false`),toAttribute:e=>e?`true`:`false`}})],v.prototype,`spellcheck`,2),a([_()],v.prototype,`inputmode`,2),a([_({attribute:`with-label`,type:Boolean})],v.prototype,`withLabel`,2),a([_({attribute:`with-hint`,type:Boolean})],v.prototype,`withHint`,2),a([Yt(`step`,{waitUntilFirstUpdate:!0})],v.prototype,`handleStepChange`,1),v=a([ot(`wa-input`)],v),v.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var cn=class extends Event{constructor(){super(`wa-error`,{bubbles:!0,cancelable:!1,composed:!0})}},ln=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-load`,{bubbles:!0,cancelable:!1,composed:!0})}},un=h`
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
`,dn=``,fn=``
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;function pn(){return dn.replace(/\/$/,``)}function mn(e){fn=e}function hn(){if(!fn){let e=document.querySelector(`[data-fa-kit-code]`);e&&mn(e.getAttribute(`data-fa-kit-code`)||``)}return fn}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var gn=`7.3.0`;function _n(e,t,n){let r=`solid`;return t===`chisel`&&(r=`chisel-regular`),t===`etch`&&(r=`etch-solid`),t===`graphite`&&(r=`graphite-thin`),t===`jelly`&&(r=`jelly-regular`,n===`duo-regular`&&(r=`jelly-duo-regular`),n===`fill-regular`&&(r=`jelly-fill-regular`)),t===`jelly-duo`&&(r=`jelly-duo-regular`),t===`jelly-fill`&&(r=`jelly-fill-regular`),t===`notdog`&&(n===`solid`&&(r=`notdog-solid`),n===`duo-solid`&&(r=`notdog-duo-solid`)),t===`notdog-duo`&&(r=`notdog-duo-solid`),t===`slab`&&((n===`solid`||n===`regular`)&&(r=`slab-regular`),n===`press-regular`&&(r=`slab-press-regular`)),t===`slab-press`&&(r=`slab-press-regular`),t===`slab-duo`&&(r=`slab-duo-regular`),t===`slab-press-duo`&&(r=`slab-press-duo-regular`),t===`thumbprint`&&(r=`thumbprint-light`),t===`utility`&&(r=`utility-semibold`),t===`utility-duo`&&(r=`utility-duo-semibold`),t===`utility-fill`&&(r=`utility-fill-semibold`),t===`whiteboard`&&(r=`whiteboard-semibold`),t===`mosaic`&&(r=`mosaic-solid`),t===`pixel`&&(r=`pixel-regular`),t===`vellum`&&(r=`vellum-solid`),t===`classic`&&(n===`thin`&&(r=`thin`),n===`light`&&(r=`light`),n===`regular`&&(r=`regular`),n===`solid`&&(r=`solid`)),t===`duotone`&&(n===`thin`&&(r=`duotone-thin`),n===`light`&&(r=`duotone-light`),n===`regular`&&(r=`duotone-regular`),n===`solid`&&(r=`duotone`)),t===`sharp`&&(n===`thin`&&(r=`sharp-thin`),n===`light`&&(r=`sharp-light`),n===`regular`&&(r=`sharp-regular`),n===`solid`&&(r=`sharp-solid`)),t===`sharp-duotone`&&(n===`thin`&&(r=`sharp-duotone-thin`),n===`light`&&(r=`sharp-duotone-light`),n===`regular`&&(r=`sharp-duotone-regular`),n===`solid`&&(r=`sharp-duotone-solid`)),t===`brands`&&(r=`brands`),r}function vn(e,t,n){let r=_n(e,t,n),i=pn();if(i)return`${i}/${r}/${e}.svg`;let a=hn();return a.length>0?`https://ka-p.fontawesome.com/releases/v${gn}/svgs/${r}/${e}.svg?token=${encodeURIComponent(a)}`:`https://ka-f.fontawesome.com/releases/v${gn}/svgs/${r}/${e}.svg`}var yn={name:`default`,resolver:(e,t=`classic`,n=`solid`)=>vn(e,t,n),mutator:(e,t)=>{if(e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`),t?.family&&!e.hasAttribute(`data-duotone-initialized`)){let{family:n,variant:r}=t;if(n===`duotone`||n===`sharp-duotone`||n===`notdog-duo`||n===`notdog`&&r===`duo-solid`||n===`jelly-duo`||n===`jelly`&&r===`duo-regular`||n===`utility-duo`||n===`slab-duo`||n===`slab-press-duo`||n===`thumbprint`){let n=[...e.querySelectorAll(`path`)],r=n.find(e=>!e.hasAttribute(`opacity`)),i=n.find(e=>e.hasAttribute(`opacity`));if(!r||!i)return;if(r.setAttribute(`data-duotone-primary`,``),i.setAttribute(`data-duotone-secondary`,``),t.swapOpacity&&r&&i){let e=i.getAttribute(`opacity`)||`0.4`;r.style.setProperty(`--path-opacity`,e),i.style.setProperty(`--path-opacity`,`1`)}e.setAttribute(`data-duotone-initialized`,``)}}}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function bn(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var xn={solid:{"arrow-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`,"arrow-up":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>`,backward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M236.3 107.1C247.9 96 265 92.9 279.7 99.2C294.4 105.5 304 120 304 136L304 272.3L476.3 107.2C487.9 96 505 92.9 519.7 99.2C534.4 105.5 544 120 544 136L544 504C544 520 534.4 534.5 519.7 540.8C505 547.1 487.9 544 476.3 532.9L304 367.7L304 504C304 520 294.4 534.5 279.7 540.8C265 547.1 247.9 544 236.3 532.9L44.3 348.9C36.5 341.3 32 330.9 32 320C32 309.1 36.5 298.7 44.3 291.1L236.3 107.1z"/></svg>`,"backward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M491 100.8C478.1 93.8 462.3 94.5 450 102.6L192 272.1L192 128C192 110.3 177.7 96 160 96C142.3 96 128 110.3 128 128L128 512C128 529.7 142.3 544 160 544C177.7 544 192 529.7 192 512L192 367.9L450 537.5C462.3 545.6 478 546.3 491 539.3C504 532.3 512 518.8 512 504.1L512 136.1C512 121.4 503.9 107.9 491 100.9z"/></svg>`,bars:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>`,"angles-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M77.3 256 214.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256zm192 0L406.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L269.3 256z"/></svg>`,"angles-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.7 256 297.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 256zm-192 0L105.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256z"/></svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>`,"chevron-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`,"chevron-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>`,"chevron-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>`,circle:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>`,"closed-captioning":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M64 192C64 156.7 92.7 128 128 128L512 128C547.3 128 576 156.7 576 192L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 192zM216 272L248 272C252.4 272 256 275.6 256 280C256 293.3 266.7 304 280 304C293.3 304 304 293.3 304 280C304 249.1 278.9 224 248 224L216 224C185.1 224 160 249.1 160 280L160 360C160 390.9 185.1 416 216 416L248 416C278.9 416 304 390.9 304 360C304 346.7 293.3 336 280 336C266.7 336 256 346.7 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 280C208 275.6 211.6 272 216 272zM384 280C384 275.6 387.6 272 392 272L424 272C428.4 272 432 275.6 432 280C432 293.3 442.7 304 456 304C469.3 304 480 293.3 480 280C480 249.1 454.9 224 424 224L392 224C361.1 224 336 249.1 336 280L336 360C336 390.9 361.1 416 392 416L424 416C454.9 416 480 390.9 480 360C480 346.7 469.3 336 456 336C442.7 336 432 346.7 432 360C432 364.4 428.4 368 424 368L392 368C387.6 368 384 364.4 384 360L384 280z"/></svg>`,"closed-captioning-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M39 39.1C48.4 29.7 63.6 29.7 72.9 39.1L161.8 128L512 128C547.3 128 576 156.7 576 192L576 448C576 473.5 561.1 495.4 539.6 505.8L601 567.1C610.4 576.5 610.4 591.7 601 601C591.6 610.3 576.4 610.4 567.1 601L39 73.1C29.7 63.7 29.7 48.5 39 39.1zM384 350.1L384 279.9C384 275.5 387.6 271.9 392 271.9L424 271.9C428.4 271.9 432 275.5 432 279.9C432 293.2 442.7 303.9 456 303.9C469.3 303.9 480 293.2 480 279.9C480 249 454.9 223.9 424 223.9L392 223.9C361.1 223.9 336 249 336 279.9L336 302.1L384 350.1zM445.5 411.6C465.7 403.2 480 383.2 480 359.9C480 346.6 469.3 335.9 456 335.9C442.7 335.9 432 346.6 432 359.9C432 364.3 428.4 367.9 424 367.9L401.8 367.9L445.5 411.6zM162.3 264.1C160.8 269.1 160 274.5 160 280L160 360C160 390.9 185.1 416 216 416L248 416C266.1 416 282.1 407.5 292.4 394.2L410.2 512L128 512C92.7 512 64 483.3 64 448L64 192C64 184.2 65.4 176.7 68 169.8L162.3 264.1zM256.1 357.9C256 358.6 256 359.3 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 309.8L256.1 357.9z"/></svg>`,compress:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>`,ellipsis:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M96 320C96 289.1 121.1 264 152 264C182.9 264 208 289.1 208 320C208 350.9 182.9 376 152 376C121.1 376 96 350.9 96 320zM264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320zM488 264C518.9 264 544 289.1 544 320C544 350.9 518.9 376 488 376C457.1 376 432 350.9 432 320C432 289.1 457.1 264 488 264z"/></svg>`,"ellipsis-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/></svg>`,expand:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 96C110.3 96 96 110.3 96 128L96 224C96 241.7 110.3 256 128 256C145.7 256 160 241.7 160 224L160 160L224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L128 96zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 512C96 529.7 110.3 544 128 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480L160 416zM416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160L480 224C480 241.7 494.3 256 512 256C529.7 256 544 241.7 544 224L544 128C544 110.3 529.7 96 512 96L416 96zM544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L512 544C529.7 544 544 529.7 544 512L544 416z"/></svg>`,eyedropper:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>`,filter:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 64C19.1 64 7.4 71.8 2.4 83.8S.2 109.5 9.4 118.6L192 301.3 192 416c0 8.5 3.4 16.6 9.4 22.6l64 64c9.2 9.2 22.9 11.9 34.9 6.9S320 492.9 320 480l0-178.7 182.6-182.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 64 480 64L32 64z"/></svg>`,forward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M403.7 107.1C392.1 96 375 92.9 360.3 99.2C345.6 105.5 336 120 336 136L336 272.3L163.7 107.2C152.1 96 135 92.9 120.3 99.2C105.6 105.5 96 120 96 136L96 504C96 520 105.6 534.5 120.3 540.8C135 547.1 152.1 544 163.7 532.9L336 367.7L336 504C336 520 345.6 534.5 360.3 540.8C375 547.1 392.1 544 403.7 532.9L595.7 348.9C603.6 341.4 608 330.9 608 320C608 309.1 603.5 298.7 595.7 291.1L403.7 107.1z"/></svg>`,file:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>`,"file-audio":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>`,"file-code":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>`,"file-excel":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>`,"file-image":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>`,"file-pdf":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>`,"file-powerpoint":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>`,"file-video":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>`,"file-word":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>`,"file-zipper":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>`,"forward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M21 36.8c12.9-7 28.7-6.3 41 1.8L320 208.1 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-144.1-258 169.6c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440L0 72C0 57.3 8.1 43.8 21 36.8z"/></svg>`,gauge:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,gear:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>`,"grip-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>`,indeterminate:`<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>`,"magnifying-glass":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>`,minus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>`,pause:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>`,"picture-in-picture":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M448 32c35.3 0 64 28.7 64 64l0 112-64 0 0-112-384 0 0 320 144 0 0 64-144 0-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416 0 96C0 62.9 25.2 35.6 57.5 32.3L64 32 448 32zm16 224c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48l160 0z"/></svg>`,play:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>`,"play-circle":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>`,plus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>`,"table-columns":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 64l0 256 128 0 0-256-128 0zm320 0l-128 0 0 256 128 0 0-256z"/></svg>`,thumbtack:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 10.3 134.1c37.1 21.2 65.8 56.4 78.2 99.7l3.8 13.4c2.8 9.7 .8 20-5.2 28.1S362 352 352 352L32 352c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1L5 297.8c12.4-43.3 41-78.5 78.2-99.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 400l64 0 0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-112z"/></svg>`,"up-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M406.6 502.6l96-96c9.2-9.2 11.9-22.9 6.9-34.9S492.9 352 480 352l-64 0 0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 320-64 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l96 96c12.5 12.5 32.8 12.5 45.3 0zM150.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-9.2 9.2-11.9 22.9-6.9 34.9S19.1 160 32 160l64 0 0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320 64 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-96-96z"/></svg>`,upload:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>`,user:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>`,volume:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM441.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C443.3 170.7 464 210.9 464 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-low":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,xmark:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>`},regular:{calendar:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z"/></svg>`,"circle-question":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`,"circle-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,clock:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>`,copy:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>`,eye:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>`,"eye-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>`}},Sn={name:`system`,resolver:(e,t=`classic`,n=`solid`)=>{let r=xn[n][e]??xn.regular[e]??xn.regular[`circle-question`];return r?bn(r):``},mutator:e=>{e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`)}},Cn=`classic`,wn=[yn,Sn],Tn=/* @__PURE__ */ new Set
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;function En(e){Tn.add(e)}function Dn(e){Tn.delete(e)}function On(e){return wn.find(t=>t.name===e)}function kn(){return Cn}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var An=Symbol(),jn=Symbol(),Mn,Nn=/* @__PURE__ */ new Map,y=class extends _t{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label=``,this.library=`default`,this.rotate=0,this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=ze`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let n=this.shadowRoot.querySelector(`[part='svg']`);return typeof t.mutator==`function`&&t.mutator(n,this),this.svg}try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?An:jn}catch{return jn}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return An;Mn||=new DOMParser;let r=Mn.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):An}catch{return An}}}connectedCallback(){super.connectedCallback(),En(this)}firstUpdated(e){super.firstUpdated(e),this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Dn(this)}async getIconSource(){let e=On(this.library),t=this.family||kn();if(this.name&&e){let n=this.canvas===`auto`||this.autoWidth,r;try{r=await e.resolver(this.name,t,this.variant,n)}catch{r=void 0}return{url:r,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=await this.getIconSource(),n=t?On(this.library):void 0;if(!e){this.svg=null;return}let r=Nn.get(e);r||(r=this.resolveIcon(e,n),Nn.set(e,r));let i=await r;if(i===jn&&Nn.delete(e),e===(await this.getIconSource()).url){if(nn(i))this.svg=i;else switch(i){case jn:case An:this.svg=null,this.dispatchEvent(new cn);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new ln)}}}willUpdate(e){return this.style||this.setStyleProperty(`--rotate-angle`,`${this.rotate}deg`),super.willUpdate(e)}updated(e){super.updated(e);let t=On(this.library);this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`);let n=this.shadowRoot?.querySelector(`svg`);n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:ze`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};y.css=un,a([lt()],y.prototype,`svg`,2),a([_({reflect:!0})],y.prototype,`name`,2),a([_({reflect:!0})],y.prototype,`family`,2),a([_({reflect:!0})],y.prototype,`variant`,2),a([_({reflect:!0})],y.prototype,`canvas`,2),a([_({attribute:`auto-width`,type:Boolean,reflect:!0})],y.prototype,`autoWidth`,2),a([_({attribute:`swap-opacity`,type:Boolean,reflect:!0})],y.prototype,`swapOpacity`,2),a([_()],y.prototype,`src`,2),a([_()],y.prototype,`label`,2),a([_({reflect:!0})],y.prototype,`library`,2),a([_({type:Number,reflect:!0})],y.prototype,`rotate`,2),a([_({type:String,reflect:!0})],y.prototype,`flip`,2),a([_({type:String,reflect:!0})],y.prototype,`animation`,2),a([Yt(`label`)],y.prototype,`handleLabelChange`,1),a([Yt([`family`,`name`,`library`,`variant`,`src`,`autoWidth`,`canvas`,`swapOpacity`],{waitUntilFirstUpdate:!0})],y.prototype,`setIcon`,1),y=a([ot(`wa-icon`)],y);var Pn=/* @__PURE__ */ t({default:()=>v}),b
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;Object.getOwnPropertyDescriptors||(()=>{var e;if(typeof Reflect<`u`&&Reflect.ownKeys)e=Reflect.ownKeys;else{var t=Object.getOwnPropertySymbols||(e=>[]);e=(e=>Object.getOwnPropertyNames(e).concat(t(e)))}return(t=>{for(var n=e(t),r={},i=n.length|0,a=0;a!==i;){var o=n[a];Object.defineProperty(r,o,{configurable:!0,enumerable:!0,writable:!0,value:Object.getOwnPropertyDescriptor(t,o)}),a=a+1|0}return r})})();function Fn(e){this.c=e}b=Fn.prototype,b.toString=(function(){return String.fromCharCode(this.c)});function x(e,t){this.l=e,this.h=t}b=x.prototype,b.toString=(function(){return yo(this.l,this.h)});function In(e){switch(typeof e){case`string`:return pf.l();case`number`:return Zn(e)?e<<24>>24===e?td.l():e<<16>>16===e?ld.l():of.l():Qn(e)?af.l():rf.l();case`boolean`:return du.l();case`undefined`:return fo.l();default:return e instanceof x?lf.l():e instanceof Fn?mu.l():e&&e.$classData?e.$classData.l():null}}function Ln(e){switch(typeof e){case`string`:return`java.lang.String`;case`number`:return Zn(e)?e<<24>>24===e?`java.lang.Byte`:e<<16>>16===e?`java.lang.Short`:`java.lang.Integer`:Qn(e)?`java.lang.Float`:`java.lang.Double`;case`boolean`:return`java.lang.Boolean`;case`undefined`:return`java.lang.Void`;default:return e instanceof x?`java.lang.Long`:e instanceof Fn?`java.lang.Character`:e&&e.$classData?e.$classData.N:null.jq()}}function Rn(e,t){switch(typeof e){case`string`:return df(e,t);case`number`:return tf(e,t);case`boolean`:return lu(e,t);case`undefined`:return co(e,t);default:return e&&e.$classData||e===null?e.d(t):e instanceof x?sf(e.l,e.h,t):e instanceof Fn?pu(e.c,t):rr.prototype.d.call(e,t)}}function zn(e){switch(typeof e){case`string`:return K(e);case`number`:return nf(e);case`boolean`:return uu(e);case`undefined`:return lo(e);default:return e&&e.$classData||e===null?e.f():e instanceof x?cf(e.l,e.h):e instanceof Fn?fu(e.c):rr.prototype.f.call(e)}}function Bn(e){return e===void 0?`undefined`:e.toString()}function Vn(e){if(e===0)throw new ed(`/ by zero`);return e}function Hn(e){return e>2147483647?2147483647:e<-2147483648?-2147483648:e|0}function Un(e){return String.fromCharCode(e)}var Wn=/* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(8));function Gn(e,t,n,r,i){if(e!==n||r-t>>>0>i>>>0)for(var a=0;a<i;a=a+1|0)n[r+a|0]=e[t+a|0];else for(var a=i-1|0;a>=0;a=a-1|0)n[r+a|0]=e[t+a|0]}var Kn=0,qn=/* @__PURE__ */ new WeakMap;function Jn(e){switch(typeof e){case`string`:return K(e);case`number`:return nf(e);case`bigint`:var t=0;for(e<BigInt(0)&&(e=~e);e!==BigInt(0);)t^=Number(BigInt.asIntN(32,e)),e>>=BigInt(32);return t;case`boolean`:return e?1231:1237;case`undefined`:return 0;case`symbol`:var n=e.description;return n===void 0?0:K(n);default:if(e===null)return 0;var r=qn.get(e);return r===void 0&&(r=Kn+1|0,Kn=r,qn.set(e,r)),r}}function Yn(e){return typeof e==`number`&&e<<24>>24===e&&1/e!=-1/0}function Xn(e){return typeof e==`number`&&e<<16>>16===e&&1/e!=-1/0}function Zn(e){return typeof e==`number`&&(e|0)===e&&1/e!=-1/0}function Qn(e){return typeof e==`number`&&(e!==e||Math.fround(e)===e)}function $n(e){return new Fn(e)}$n(0);function S(e,t){return new x(e,t)}var er=S(0,0);function tr(e){return e===null?0:e.c}function nr(e){return e===null?er:e}function rr(){}b=rr.prototype,b.constructor=rr;function C(){}C.prototype=b,b.f=(function(){return Jn(this)}),b.d=(function(e){return this===e}),b.h=(function(){var e=this.f();return Ln(this)+`@`+(e>>>0).toString(16)}),b.toString=(function(){return this.h()});function w(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}b=w.prototype=new C,b.constructor=w,b.a9=(function(e,t,n,r){Gn(this.a,e,t.a,n,r)}),b.a0=(function(){return new w(this.a.slice())});function ir(){}ir.prototype=b;function ar(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=!1}else this.a=e}b=ar.prototype=new C,b.constructor=ar,b.a9=(function(e,t,n,r){Gn(this.a,e,t.a,n,r)}),b.a0=(function(){return new ar(this.a.slice())});function or(e){this.a=typeof e==`number`?new Uint16Array(e):e}b=or.prototype=new C,b.constructor=or,b.a9=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),b.a0=(function(){return new or(this.a.slice())});function sr(e){this.a=typeof e==`number`?new Int8Array(e):e}b=sr.prototype=new C,b.constructor=sr,b.a9=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),b.a0=(function(){return new sr(this.a.slice())});function cr(e){this.a=typeof e==`number`?new Int16Array(e):e}b=cr.prototype=new C,b.constructor=cr,b.a9=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),b.a0=(function(){return new cr(this.a.slice())});function lr(e){this.a=typeof e==`number`?new Int32Array(e):e}b=lr.prototype=new C,b.constructor=lr,b.a9=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),b.a0=(function(){return new lr(this.a.slice())});function ur(e){typeof e==`number`?(e<<=1,this.a=new Int32Array(e)):this.a=e}b=ur.prototype=new C,b.constructor=ur,b.a9=(function(e,t,n,r){t.a.set(this.a.subarray(e<<1,(e+r|0)<<1),n<<1)}),b.a0=(function(){return new ur(this.a.slice())});function dr(e){this.a=typeof e==`number`?new Float32Array(e):e}b=dr.prototype=new C,b.constructor=dr,b.a9=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),b.a0=(function(){return new dr(this.a.slice())});function fr(e){this.a=typeof e==`number`?new Float64Array(e):e}b=fr.prototype=new C,b.constructor=fr,b.a9=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),b.a0=(function(){return new fr(this.a.slice())});function T(){this.C=void 0,this.n=null,this.O=null,this.B=null,this.D=0,this.z=null,this.E=``,this.L=void 0,this.A=void 0,this.F=void 0,this.w=void 0,this.J=!1,this.N=``,this.X=!1,this.Y=!1,this.Z=!1,this.I=void 0}b=T.prototype,b.p=(function(e,t,n,r,i){this.n={},this.z=e,this.E=t;var a=this;return this.F=(e=>e===a),this.N=n,this.X=!0,this.I=(e=>!1),r!==void 0&&(this.A=new T().y(this,r,i,t===`J`)),this}),b.i=(function(e,t,n,r){var i=Object.getOwnPropertyNames(n)[0];return this.n=n,this.E=`L`+t+`;`,this.F=(e=>!!e.n[i]),this.J=e===2,this.N=t,this.Y=e===1,this.I=r||(e=>!!(e&&e.$classData&&e.$classData.n[i])),typeof e!=`number`&&(e.prototype.$classData=this),this}),b.y=(function(e,t,n,r,i){t.prototype.$classData=this;var a=`[`+e.E;this.C=t,this.n={s:1,a:1},this.O=e,this.B=e,this.D=1,this.E=a,this.N=a,this.Z=!0;var o=this;return this.F=i||(e=>o===e),this.w=r?(e=>{for(var n=e.length|0,r=new t(n),i=r.a,a=0;a<n;a=a+1|0){var o=e[a];i[a<<1]=o.l,i[(a<<1)+1|0]=o.h}return r}):n?(e=>new t(new n(e))):(e=>new t(e)),this.I=(e=>e instanceof t),this}),b.a=(function(e){function t(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}var n=t.prototype=new ir;n.constructor=t,n.a9=(function(e,t,n,r){Gn(this.a,e,t.a,n,r)}),n.a0=(function(){return new t(this.a.slice())}),n.$classData=this;var r=e.B||e,i=e.D+1,a=`[`+e.E;this.C=t,this.n={s:1,a:1},this.O=e,this.B=r,this.D=i,this.E=a,this.N=a,this.Z=!0;var o=(e=>{var t=e.D;return t===i?r.F(e.B):t>i&&r===pr});this.F=o,this.w=(e=>new t(e));var s=this;return this.I=(e=>{var t=e&&e.$classData;return!!t&&(t===s||o(t))}),this}),b.r=(function(){return this.A||=new T().a(this),this.A}),b.l=(function(){return this.L||=new xl(this),this.L}),b.R=(function(e){return this===e||this.F(e)}),b.S=(function(){return this.P?this.P.l():null}),b.Q=(function(){return this.O?this.O.l():null}),b.U=(function(e){if(this===mr)throw rd(new id);return new(this.r()).C(e)});var pr=new T;pr.n={},pr.E=`Ljava.lang.Object;`,pr.F=(e=>!e.X),pr.N=`java.lang.Object`,pr.I=(e=>e!==null),pr.A=new T().y(pr,w,void 0,!1,(e=>{var t=e.D;return t===1?!e.B.X:t>1})),rr.prototype.$classData=pr;var mr=new T().p(void 0,`V`,`void`,void 0,void 0),hr=new T().p(!1,`Z`,`boolean`,ar,void 0),gr=new T().p(0,`C`,`char`,or,Uint16Array),_r=new T().p(0,`B`,`byte`,sr,Int8Array),vr=new T().p(0,`S`,`short`,cr,Int16Array),yr=new T().p(0,`I`,`int`,lr,Int32Array),br=new T().p(er,`J`,`long`,ur,Int32Array),xr=new T().p(0,`F`,`float`,dr,Float32Array),Sr=new T().p(0,`D`,`double`,fr,Float64Array);new Int8Array(new Int32Array([1]).buffer)[0];function Cr(e,t,n){for(var r=new Int32Array(e),i=t.length|0,a=0,o=0,s=0,c=0;o!==i;){var l=t.charCodeAt(o);l<80?c=(c|l-48)<<5:(c|=l-93,a=(a&n)+c|0,r[s]=a,s=s+1|0,c=0),o=o+1|0}return r}function wr(e,t){return new lr(Cr(e,t,-1))}var Tr=new T().i(1,`com.raquo.airstream.core.InternalObserver`,{aj:1});function Er(e){return In(e).dt()+`@`+e.f()}function Dr(e){var t=e.bC();return t===void 0?e.by():t}function Or(){kr=this,Ar().gW(new H((e=>void 0)),Fo().c1,!0)}b=Or.prototype=new C,b.constructor=Or,b.gW=(function(e,t,n){return new Ql(e,n,t,this)}),b.i4=(function(e,t){return new $l(e,t,this)}),new T().i(Or,`com.raquo.airstream.core.Observer$`,{bF:1});var kr;function Ar(){return kr||=new Or,kr}function jr(){}b=jr.prototype=new C,b.constructor=jr,b.gK=(function(e,t){var n=e.indexOf(t)|0,r=n!==-1;return r&&e.splice(n,1),r}),new T().i(jr,`com.raquo.airstream.core.ObserverList$`,{bI:1});var Mr;function Nr(){return Mr||=new jr,Mr}function Pr(){this.aL=0,this.aL=0}b=Pr.prototype=new C,b.constructor=Pr,b.gC=(function(){return this.aL=this.aL===2147483647?1:1+this.aL|0,this.aL}),new T().i(Pr,`com.raquo.airstream.core.Signal$`,{bJ:1});var Fr;function Ir(){return Fr||=new Pr,Fr}function Lr(e){this.cx=null,this.dL=null,this.cy=0,this.cx=e,this.dL=void 0;var t=$r().bF();this.cy=t===void 0?1:1+t.cy|0,Vr().bJ===-1||this.cy>Vr().bJ?I().a1(new qd(this,Vr().bJ)):Gr().u?Gr().ar.push(this)|0:$r().dj(this)}b=Lr.prototype=new C,b.constructor=Lr;var Rr=new T().i(Lr,`com.raquo.airstream.core.Transaction`,{bK:1});function zr(){this.bJ=0,this.dM=null,Br=this,this.bJ=1e3,this.dM=new H((e=>{throw L(new R,`Attempted to run Transaction `+e+` after it was already executed.`)}))}b=zr.prototype=new C,b.constructor=zr,b.g9=(function(e){try{e.cx.b(e);var t=e.dL;if(t!==void 0)for(;t.jt();)t.jp().jw(e)}catch(e){var n=e instanceof P?e:new X(e);I().a1(n)}}),new T().i(zr,`com.raquo.airstream.core.Transaction$`,{bL:1});var Br;function Vr(){return Br||=new zr,Br}function Hr(e){e.bK.length|0?new Lr(new H((t=>{for(;(e.bK.length|0)>0;){var n=e.bK.shift();try{n.b(t)}catch(e){var r=e instanceof P?e:new X(e);I().a1(r)}}for(;(e.ar.length|0)>0;){var i=e.ar.shift();$r().dj(i)}}))):(e.ar.length|0)>0&&new Lr(new H((t=>{for(;(e.ar.length|0)>0;)$r().dj(e.ar.shift())})))}function Ur(){this.u=!1,this.bK=null,this.ar=null,Wr=this,this.u=!1,this.bK=E().w(j().v(new(Do.r()).C([]))),this.ar=E().w(j().v(new(Rr.r()).C([])))}b=Ur.prototype=new C,b.constructor=Ur,new T().i(Ur,`com.raquo.airstream.core.Transaction$onStart$`,{bM:1});var Wr;function Gr(){return Wr||=new Ur,Wr}function Kr(e,t){return e.as.get(t)}function qr(e,t){e.bL.unshift(t)}function Jr(e){return e.bL.shift()}function Yr(e,t,n){var r=Kr(e,t),i=r===void 0,a=r===void 0?E().w(j().v(new(Rr.r()).C([]))):r;a.push(n),i&&e.as.set(t,a)}function Xr(e,t){var n=Kr(e,t),r=n===void 0||(n.length|0)>0?n:void 0;if(r!==void 0){var i=r.shift();return r.length|0||e.as.delete(t),i}}function Zr(){this.bL=null,this.as=null,Qr=this,this.bL=E().w(j().v(new(Rr.r()).C([]))),this.as=/* @__PURE__ */ new Map}b=Zr.prototype=new C,b.constructor=Zr,b.dj=(function(e){var t=this.bF();t===void 0?(qr(this,e),Vr().g9(e),this.hL(e)):Yr(this,t,e)}),b.hL=(function(e){for(var t=e;;){var n=this.bF(),r=t;if(!(n!==void 0&&A().z(r,n)))throw L(new R,`Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.`);this.iO(t),t.cx=Vr().dM;var i=this.bF();if(A().z(i,void 0)){if((this.as.size|0)>0){var a=new Lc(0);throw this.as.forEach((e=>((t,n)=>{e.bl=e.bl+(t.length|0)|0}))(a)),L(new R,`Transaction queue error: Stack cleared, but a total of `+a.bl+` children for `+(this.as.size|0)+` transactions remain. This is a bug in Airstream.`)}return}Vr().g9(i),t=i}}),b.iO=(function(e){for(var t=e;;){var n=Xr(this,t);if(A().z(n,void 0)){Jr(this);var r=this.bF();if(!A().z(r,void 0))t=r;else return}else{qr(this,n);return}}}),b.bF=(function(){return this.bL[0]}),new T().i(Zr,`com.raquo.airstream.core.Transaction$pendingTransactions$`,{bN:1});var Qr;function $r(){return Qr||=new Zr,Qr}function ei(e,t){var n=e.ab.indexOf(t)|0;if(n!==-1)e.ab.splice(n,1),e.G.c()||t.gE();else throw L(new R,`Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?`)}function ti(e){for(;(e.bN.length|0)>0;)ei(e,e.bN.shift())}function ni(e){this.dU=null,this.ab=null,this.aM=!1,this.bN=null,this.G=null,this.aN=0,this.dU=e,this.ab=E().w(j().v(new(ii.r()).C([]))),this.aM=!0,this.bN=E().w(j().v(new(ii.r()).C([]))),this.G=q(),this.aN=0}b=ni.prototype=new C,b.constructor=ni,b.g2=(function(){if(this.G.c()){var e=Gr(),t=(()=>{var e=new ws(this.dU);this.G=new J(e),this.aM=!1,this.aN=0;for(var t=0,n=this.ab.length|0;t<n;){var r=t+this.aN|0;this.ab[r].gD(e),t=1+t|0}ti(this),this.aM=!0,this.aN=0});if(Gr(),e.u)t();else{e.u=!0;try{t()}finally{e.u=!1,Hr(e)}}}else throw L(new R,`Can not activate `+this+`: it is already active`)}),b.hF=(function(){if(this.G.c())throw L(new R,`Can not deactivate DynamicOwner: it is not active`);this.aM=!1;for(var e=this.ab,t=0,n=e.length|0;t<n;)e[t].gE(),t=1+t|0;ti(this);var r=this.G;r.c()||r.n().ir(),ti(this),this.aM=!0,this.G=q()}),b.hg=(function(e,t){t?(this.aN=1+this.aN|0,this.ab.unshift(e)):this.ab.push(e);var n=this.G;if(!n.c()){var r=n.n();e.gD(r)}}),b.iV=(function(e){this.aM?ei(this,e):this.bN.push(e)}),new T().i(ni,`com.raquo.airstream.ownership.DynamicOwner`,{bP:1});function ri(e,t,n){this.bO=null,this.dV=null,this.bP=null,this.bO=e,this.dV=t,this.bP=q(),e.hg(this,n)}b=ri.prototype=new C,b.constructor=ri,b.cg=(function(){this.bO.iV(this)}),b.gD=(function(e){var t=Gr(),n=(()=>{this.bP=this.dV.b(e)});if(Gr(),t.u)n();else{t.u=!0;try{n()}finally{t.u=!1,Hr(t)}}}),b.gE=(function(){var e=this.bP;e.c()||(e.n().cg(),this.bP=q())});var ii=new T().i(ri,`com.raquo.airstream.ownership.DynamicSubscription`,{bQ:1});function ai(){}b=ai.prototype=new C,b.constructor=ai,b.cs=(function(e,t,n){return new ri(e,new H((e=>new J(t.b(e)))),n)}),b.gR=(function(e,t,n){return new ri(e,new H((e=>(t.b(e),q()))),n)}),b.j9=(function(e,t,n){return si().cs(e,new H((e=>Wc(t,n,e))),!1)}),new T().i(ai,`com.raquo.airstream.ownership.DynamicSubscription$`,{bR:1});var oi;function si(){return oi||=new ai,oi}function ci(e){e.aO=E().w(j().v(new(mi.r()).C([])))}function li(e){for(var t=e.aO,n=0,r=t.length|0;n<r;)fi(t[n]),n=1+n|0;e.aO.length=0}function ui(e,t){var n=e.aO.indexOf(t)|0;if(n!==-1)e.aO.splice(n,1);else throw L(new R,`Can not remove Subscription from Owner: subscription not found.`)}function di(e,t){e.aO.push(t)}function fi(e){if(!e.cF)e.dX.a5(),e.cF=!0;else throw L(new R,`Can not kill Subscription: it was already killed.`)}function pi(e,t){this.dY=null,this.dX=null,this.cF=!1,this.dY=e,this.dX=t,this.cF=!1,e.iL(this)}b=pi.prototype=new C,b.constructor=pi,b.cg=(function(){fi(this),ui(this.dY,this)});var mi=new T().i(pi,`com.raquo.airstream.ownership.Subscription`,{bU:1});function hi(e,t){this.dZ=null,this.e0=null,this.ac=null,this.at=!1,this.dZ=e,this.e0=t,this.ac=q(),this.at=!1}b=hi.prototype=new C,b.constructor=hi,b.il=(function(){var e=this.ac;return!e.c()&&!e.n().bO.G.c()}),b.j3=(function(e){if(this.at)throw L(new R,`Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var t=this.ac;if(t.c())var n=!1;else var r=t.n().bO,n=e===null?r===null:e===r;if(!n){this.il()&&!e.G.c()&&(this.at=!0);var i=this.ac;i.c()||(i.n().cg(),this.ac=q());var a=si().cs(e,new H((e=>(this.at||this.dZ.a5(),new pi(e,new V((()=>{this.at||this.e0.a5()})))))),!1);this.ac=new J(a),this.at=!1}}),b.hy=(function(){if(this.at)throw L(new R,`Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var e=this.ac;e.c()||e.n().cg(),this.ac=q()}),new T().i(hi,`com.raquo.airstream.ownership.TransferableSubscription`,{bV:1});function gi(){}b=gi.prototype=new C,b.constructor=gi,b.hn=(function(e){return new Yd(new Ud(e))}),new T().i(gi,`com.raquo.airstream.state.Var$`,{bZ:1});var _i;function vi(){return _i||=new gi,_i}function yi(){}b=yi.prototype=new C,b.constructor=yi,b.w=(function(e){return[...gs().jf(e)]}),new T().i(yi,`com.raquo.ew.JsArray$`,{c2:1});var bi;function E(){return bi||=new yi,bi}function xi(){}b=xi.prototype=new C,b.constructor=xi,b.ih=(function(e,t,n){return(e.indexOf(t,n)|0)!=-1}),b.hZ=(function(e,t){for(var n=0,r=e.length|0;n<r;)t(e[n]),n=1+n|0}),new T().i(xi,`com.raquo.ew.JsArray$RichJsArray$`,{c3:1});var Si;function Ci(){return Si||=new xi,Si}function wi(){this.ec=null,Ti=this,document.createElement(`template`),this.hD(B().m.ja().jb()),this.ec=/* @__PURE__ */ RegExp(` `,`g`)}b=wi.prototype=new C,b.constructor=wi,b.hl=(function(e,t){try{return e.appendChild(t),!0}catch(e){var n=e instanceof P?e:new X(e);if(n instanceof X&&n.y instanceof DOMException)return!1;throw n instanceof X?n.y:n}}),b.io=(function(e,t){for(var n=e;;){if(n.parentNode!==null)var r=n.parentNode;else var i=n.host,r=i===void 0?null:i;if(r===null)return!1;if(A().z(t,r))return!0;n=r}}),b.he=(function(e,t){e.addEventListener(t.aQ.b9.bQ,t.cT,t.cU)}),b.iT=(function(e,t){e.removeEventListener(t.aQ.b9.bQ,t.cT,t.cU)}),b.hC=(function(e){return document.createElement(e.dz())}),b.i6=(function(e,t){var n=this.i7(e,t);return n===void 0?void 0:t.aP.cb(n)}),b.i7=(function(e,t){var n=e.x.getAttributeNS(null,t.ad);return n===null?void 0:n}),b.dC=(function(e,t,n){this.j1(e,t,t.aP.aZ(n))}),b.j1=(function(e,t,n){n===null?this.iU(e,t):e.x.setAttribute(t.ad,n)}),b.iU=(function(e,t){e.x.removeAttribute(t.ad)}),b.i8=(function(e,t){return e.x[t.Y]}),b.j2=(function(e,t,n){this.gO(e,t,t.cQ.aZ(n))}),b.gO=(function(e,t,n){e.x[t.Y]=n}),b.gP=(function(e,t,n){var r=e.x,i=t.au,a=t.av,o=n===null?null:n;o===null?(a.V(new H((e=>r.style.removeProperty(``+e+i)))),r.style.removeProperty(i)):(a.V(new H((e=>{r.style.setProperty(``+e+i,o)}))),r.style.setProperty(i,o))}),b.hD=(function(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e.fd)}),b.ib=(function(e,t){var n=this.ic(e,t);return n===void 0?void 0:t.cR.cb(n)}),b.ic=(function(e,t){var n=e.dB(),r=t.bS,i=n.getAttributeNS(r.c()?null:r.n(),t.cS);return i===null?void 0:i}),b.j4=(function(e,t,n){this.j5(e,t,t.cR.aZ(n))}),b.j5=(function(e,t,n){if(n===null)this.iW(e,t);else{var r=t.bS;if(r.c())e.dB().setAttribute(t.bR,n);else{var i=r.n();e.dB().setAttributeNS(i,t.bR,n)}}}),b.iW=(function(e,t){var n=e.dB(),r=t.bS;n.removeAttributeNS(r.c()?null:r.n(),t.cS)}),b.hE=(function(e){return document.createTextNode(e)}),b.gw=(function(e){return Go().hA(e.tagName,45)}),b.id=(function(e){if(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement||e instanceof HTMLButtonElement||e instanceof HTMLOptionElement)return e.value;if(this.gw(e)){var t=e.value;return new Hu(this),t===void 0?void 0:typeof t==`string`?t:void 0}}),b.hG=(function(e,t){for(var n=t,r=e;;){if(r===null)return n;var i=r.parentNode,a=new nm(this.gd(r),n);r=i,n=a}}),b.gd=(function(e){if(e instanceof HTMLElement){var t=e.id;if(Go(),t!==``)var n=`#`+t;else var r=e.className,n=(Go(),r===``?``:`.`+r.replace(this.ec,`.`));return e.tagName.toLowerCase()+n}return e.nodeName}),new T().i(wi,`com.raquo.laminar.DomApi$`,{c4:1});var Ti;function D(){return Ti||=new wi,Ti}function Ei(e,t,n){this.cM=null,this.ed=null,this.cL=null,this.cM=e,this.ed=t,this.cL=n}b=Ei.prototype=new C,b.constructor=Ei,b.V=(function(e){this.cM===null?this.cL===null?Ro().i0(this.ed,e):Ci().hZ(this.cL,Ul().i3(e)):this.cM.V(e)}),new T().i(Ei,`com.raquo.laminar.Seq`,{c6:1});function Di(){Oi=this,$()}b=Di.prototype=new C,b.constructor=Di,new T().i(Di,`com.raquo.laminar.Seq$`,{c7:1});var Oi;function ki(){return Oi||=new Di,Oi}function Ai(e){Ar(),I(),e.eg=vi()}function ji(e){e.gY=ra()}function Mi(e){Ni(e,new H((e=>{e.eY.x.focus()})))}function Ni(e,t){return new Ls(new H((e=>{var n=new Ic(!e.Z.G.c()),r=new H((e=>{n.c5?n.c5=!1:t.b(e)}));si().gR(e.Z,new H((e=>(t=>{r.b(new ea(e,t))}))(e)),!1)})),ra())}function Pi(){this.b8=null,this.eI=null,this.eJ=!1,this.eH=null,Fi=this,this.b8=new Ts(Ii()),new Ts(Ii()),this.eH=new Ts(Ii())}b=Pi.prototype=new C,b.constructor=Pi,b.hd=(function(){return this.eJ||=(this.eI=new Es(this),!0),this.eI}),new T().i(Pi,`com.raquo.laminar.codecs.package$`,{cf:1});var Fi;function Ii(){return Fi||=new Pi,Fi}function Li(e){e.gZ=Ri(e,`class`,` `)}function Ri(e,t,n){var r=js(new Ms,t,Ii().b8);return new Os(r.ad,new H((e=>{var t=D().i6(e,r);return t===void 0?``:t})),new Eu(((e,t)=>{D().dC(e,r,t)})),n)}function zi(e){e.gX=Bi(e,`class`,` `)}function Bi(e,t,n){var r=new Fs(t,Ii().b8,q());return new Os(r.bR,new H((e=>{var t=D().ib(e,r);return t===void 0?``:t})),new Eu(((e,t)=>{D().j4(e,r,t)})),n)}function Vi(){this.eU=null,Hi=this,B().m.dD(),E().w(j().v(new(As.r()).C([B().m.ck()]))),B().m.dD(),E().w(j().v(new(As.r()).C([B().m.ck(),B().m.iG()]))),B().m.hx(),E().w(j().v(new(As.r()).C([B().m.ck(),B().m.iH()]))),this.eU=E().w(j().v(new(pf.r()).C([`value`,`checked`])))}b=Vi.prototype=new C,b.constructor=Vi,new T().i(Vi,`com.raquo.laminar.inputs.InputController$`,{cA:1});var Hi;function Ui(){return Hi||=new Vi,Hi}function Wi(e,t){this.eW=null,this.eV=null,this.eW=e,this.eV=t}b=Wi.prototype=new C,b.constructor=Wi,b.p=(function(e){return new el(this.eW,this.eV.b(e),new Du(((e,t,n)=>{D().gP(e,t,n)})))}),new T().i(Wi,`com.raquo.laminar.keys.DerivedStyleProp`,{cC:1});function Gi(e,t,n,r){this.b9=null,this.cP=!1,this.cO=!1,this.cN=null,this.b9=e,this.cP=t,this.cO=n,this.cN=r}b=Gi.prototype=new C,b.constructor=Gi,b.ix=(function(){var e=new H((e=>{var t=this.cN.b(e);if(t.c())return q();t.n();var n=D().id(e.target);return new J(n===void 0?``:n)}));return new Gi(this.b9,this.cP,this.cO,e)}),new T().i(Gi,`com.raquo.laminar.keys.EventProcessor`,{cD:1});function Ki(){}b=Ki.prototype=new C,b.constructor=Ki,b.hO=(function(e,t,n){return new Gi(e,t,n,new H((e=>new J(e))))}),new T().i(Ki,`com.raquo.laminar.keys.EventProcessor$`,{cE:1});var qi;function Ji(){return qi||=new Ki,qi}function Yi(){}b=Yi.prototype=new C,b.constructor=Yi;function Xi(){}Xi.prototype=b;function Zi(){this.h0=null,this.h1=null,this.h2=null,this.h3=null,this.h0=`http://www.w3.org/2000/svg`,this.h1=`http://www.w3.org/1999/xlink`,this.h2=`http://www.w3.org/XML/1998/namespace`,this.h3=`http://www.w3.org/2000/xmlns/`}b=Zi.prototype=new C,b.constructor=Zi,b.iA=(function(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`xlink`:return`http://www.w3.org/1999/xlink`;case`xml`:return`http://www.w3.org/XML/1998/namespace`;case`xmlns`:return`http://www.w3.org/2000/xmlns/`;default:throw new pd(e)}}),new T().i(Zi,`com.raquo.laminar.keys.SvgAttr$`,{cH:1});var Qi;function $i(){return Qi||=new Zi,Qi}function ea(e,t){this.eY=null,this.eX=null,this.eY=e,this.eX=t}b=ea.prototype=new C,b.constructor=ea,new T().i(ea,`com.raquo.laminar.lifecycle.MountContext`,{cI:1});function ta(){this.h4=null,na=this,this.h4=new Is}b=ta.prototype=new C,b.constructor=ta,new T().i(ta,`com.raquo.laminar.modifiers.Modifier$`,{cM:1});var na;function ra(){return na||=new ta,na}function ia(){this.cV=null,aa=this,this.cV=new Vs(new H((e=>e)),oa()),new Vs(new H((e=>``+(e|0))),oa()),new Vs(new H((e=>``+ +e)),oa()),new Vs(new H((e=>``+!!e)),oa()),new Vs(new H((e=>e.je())),oa())}b=ia.prototype=new C,b.constructor=ia,new T().i(ia,`com.raquo.laminar.modifiers.RenderableText$`,{cS:1});var aa;function oa(){return aa||=new ia,aa}function sa(){}b=sa.prototype=new C,b.constructor=sa,b.c7=(function(e,t,n){var r=new J(e);t.gU(r),n!==void 0&&n.ju(e,t);var i=D().hl(e.bG(),t.bG());return i&&t.gQ(r),i}),new T().i(sa,`com.raquo.laminar.nodes.ParentNode$`,{cV:1});var ca;function la(){return ca||=new sa,ca}function ua(){}b=ua.prototype=new C,b.constructor=ua,b.jk=(function(e,t){return si().cs(e.Z,new H((n=>t.b(new ea(e,n)))),!0)}),new T().i(ua,`com.raquo.laminar.nodes.ReactiveElement$`,{cX:1});var da;function fa(){return da||=new ua,da}function pa(){}b=pa.prototype=new C,b.constructor=pa,b.de=(function(e){return B().m.dr().bx(new Q([B().m.ge().gm(),B().m.gn().g8(),B().m.gs().cm().p(8),Zc(B().m,e,Bs())]))}),new T().i(pa,`doc.ExampleGroups$package$`,{d2:1});var ma;function ha(){return ma||=new pa,ma}function ga(){}b=ga.prototype=new C,b.constructor=ga,b.df=(function(e){return B().m.dr().bx(new Q([B().m.ge().gm(),B().m.hY().jm(),B().m.gn().g8(),B().m.gs().cm().p(16),Zc(B().m,e,Bs())]))}),new T().i(ga,`doc.VerticalExamples$package$`,{d3:1});var _a;function va(){return _a||=new ga,_a}function ya(){}b=ya.prototype=new C,b.constructor=ya,b.hj=(function(){xa().hS(),xa().hT(),xa().hU(),xa().hV()}),b.hS=(function(){var e=document.querySelector(`#example1`);if(!Mo().c8(e).c()){B();var t=B().m.eg.hn(`1000`);new nl(e,B().m.dr().bx(new Q([B().m.iM().bx(new Q([Xc(B().m,`The file is `,oa().cV),hl().J(new Q([new z((e=>e.S().dd(new sp(t.cI,new z((e=>(Go(),cc().gI(e)))),q()))))]),new Q([])),Xc(B().m,` in size.`,oa().cV)])),vl().J(new Q([new z((e=>e.ji().iE())),new z((e=>(vl().jg(),B().m).dD().dd(t))),new z((e=>e.is().p(`Number to Format`)))]),new Q([new Qc((B(),Ji().hO(B().m.ck(),!1,!1)).ix(),new H((e=>{t.e2.dA(e)}))),B().m.iy().cm().p(180)]))])))}}),b.hT=(function(){var e=document.querySelector(`#example2`);Mo().c8(e).c()||(B(),new nl(e,ha().de(new Q([va().df(new Q([hl().J(new Q([new z((e=>e.S().p(12)))]),new Q([])),hl().J(new Q([new z((e=>e.S().p(1200)))]),new Q([])),hl().J(new Q([new z((e=>e.S().p(12e5)))]),new Q([])),hl().J(new Q([new z((e=>e.S().p(12e8)))]),new Q([]))]))]))))}),b.hU=(function(){var e=document.querySelector(`#example3`);Mo().c8(e).c()||(B(),new nl(e,ha().de(new Q([va().df(new Q([hl().J(new Q([new z((e=>e.S().p(12))),new z((e=>e.cr().ca()))]),new Q([])),hl().J(new Q([new z((e=>e.S().p(1200))),new z((e=>e.cr().ca()))]),new Q([])),hl().J(new Q([new z((e=>e.S().p(12e5))),new z((e=>e.cr().ca()))]),new Q([])),hl().J(new Q([new z((e=>e.S().p(12e8))),new z((e=>e.cr().ca()))]),new Q([]))]))]))))}),b.hV=(function(){var e=document.querySelector(`#example4`);Mo().c8(e).c()||(B(),new nl(e,ha().de(new Q([va().df(new Q([hl().J(new Q([new z((e=>e.S().p(12e5))),new z((e=>e.dq().iu()))]),new Q([])),hl().J(new Q([new z((e=>e.S().p(12e5))),new z((e=>e.dq().j7()))]),new Q([])),hl().J(new Q([new z((e=>e.S().p(12e5))),new z((e=>e.dq().iB()))]),new Q([]))]))]))))}),new T().i(ya,`examples.formatBytes.Main$package$`,{d4:1});var ba;function xa(){return ba||=new ya,ba}function Sa(e){try{xa().hj()}catch(e){throw e}}function Ca(){}b=Ca.prototype=new C,b.constructor=Ca,b.iZ=(function(e,t){var n=Wn;n.setFloat64(0,e,!0);var r=n.getInt32(0,!0)|0,i=n.getInt32(4,!0)|0,a=2047&(i>>>20|0),o=a+t|0,s=-2146435073&i,c=0,l=0;if(c=r,l=s,!((a-1|0)>>>0<=2045)){var u=2147483647&i;if((r|u)===0||u>=2146435072)return e;var d=1048575&i,f=d===0?32+Math.clz32(r)|0:Math.clz32(d);o=o-(f-12|0)|0;var p=-2147483648&i,m=f-11|0,ee=32&m?0:r<<m,h=p|1048575&(32&m?r<<m:(r>>>1|0)>>>~m|0|i<<m);c=ee,l=h}if((o-1|0)>>>0<=2045){var te=o,ne=c,re=l,ie=te<<20|re,ae=Wn;return ae.setInt32(0,ne,!0),ae.setInt32(4,ie,!0),+ae.getFloat64(0,!0)}if((53+o|0)>>>0<=53){var oe=54+o|0,se=c,ce=l,le=oe<<20|ce,ue=Wn;return ue.setInt32(0,se,!0),ue.setInt32(4,le,!0),5551115123125783e-32*ue.getFloat64(0,!0)}var de=2047&~(t>>31),fe=-2147483648&i,pe=de<<20|fe,me=Wn;return me.setInt32(0,0,!0),me.setInt32(4,pe,!0),+me.getFloat64(0,!0)}),new T().i(Ca,`java.lang.Math$`,{dt:1});var wa;function Ta(){return wa||=new Ca,wa}function Ea(e,t){for(var n=O().X(`^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$`),r=[],i=0;i<(t.length|0);){var a=t[i];if(a!==``){var o=n.exec(a);if(o!==null){var s=Da(e,o[1]),c=s[0],l=s[1],u=o[2],d=o[3],f=parseInt(d),p=o[4];r.push(new mc(c,l,u,f|0,p===void 0?-1:parseInt(p)|0))}else r.push(new mc(`<jscode>`,a,null,-1,-1))|0}i=1+i|0}var m=r.length|0,ee=new(hc.r()).C(m);for(i=0;i<m;)ee.a[i]=r[i],i=1+i|0;return ee}function Da(e,t){var n=O().X(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$`),r=O().X(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$`),i=O().X(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$`),a=O().X(`^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$`),o=O().X(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$`),s=n.exec(t),c=s===null?r.exec(t):s;if(c!==null)return[Oa(e,c[1]),Fa(e,c[2])];var l=i.exec(t),u=l===null?a.exec(t):l;if(u!==null)return[Oa(e,u[1]),`<init>`];var d=o.exec(t);return d===null?[`<jscode>`,t]:[Oa(e,d[1]),`<clinit>`]}function Oa(e,t){var n=Aa(e);if(so().da.call(n,t))var r=Aa(e)[t];else var r=Ka(e,0,t);return r.split(`_`).join(`.`).split(`＿`).join(`_`)}function ka(e){if(!((1&e.L)<<24>>24)){var t={};t.O=`java_lang_Object`,t.T=`java_lang_String`;for(var n=0;n<=22;){if(n>=2){var r=`T`+n;t[r]=`scala_Tuple`+n}var i=`F`+n;t[i]=`scala_Function`+n,n=1+n|0}e.d7=t,e.L=(1|e.L)<<24>>24}return e.d7}function Aa(e){return(1&e.L)<<24>>24?e.d7:ka(e)}function ja(e){if(!((2&e.L)<<24>>24)){var t={};t.sjsr_=`scala_scalajs_runtime_`,t.sjs_=`scala_scalajs_`,t.sci_=`scala_collection_immutable_`,t.scm_=`scala_collection_mutable_`,t.scg_=`scala_collection_generic_`,t.sc_=`scala_collection_`,t.sr_=`scala_runtime_`,t.s_=`scala_`,t.jl_=`java_lang_`,t.ju_=`java_util_`,e.d8=t,e.L=(2|e.L)<<24>>24}return e.d8}function Ma(e){return(2&e.L)<<24>>24?e.d8:ja(e)}function Na(e){return(4&e.L)<<24>>24||(e.d6=Object.keys(Ma(e)),e.L=(4|e.L)<<24>>24),e.d6}function Pa(e){return(4&e.L)<<24>>24?e.d6:Na(e)}function Fa(e,t){if(t.startsWith(`init___`))return`<init>`;var n=t.indexOf(`__`)|0;return n<0?t:t.substring(0,n)}function Ia(e,t){return t?t.arguments&&t.stack?La(e,t):t.stack&&t.sourceURL?Ba(e,t):t.stack&&t.number?za(e,t):t.stack&&t.fileName?Ra(e,t):t.message&&t[`opera#sourceloc`]?t.stacktrace?t.message.indexOf(`
`)>-1&&t.message.split(`
`).length>t.stacktrace.split(`
`).length?Va(e,t):Ha(e,t):Va(e,t):t.message&&t.stack&&t.stacktrace?t.stacktrace.indexOf(`called from line`)<0?Ua(e,t):Wa(e,t):t.stack&&!t.fileName?La(e,t):Ga(e,t):[]}function La(e,t){return(t.stack+`
`).replace(O().X(`^[\\s\\S]+?\\s+at\\s+`),` at `).replace(O().F(`^\\s+(at eval )?at\\s+`,`gm`),``).replace(O().F(`^([^\\(]+?)([\\n])`,`gm`),`{anonymous}() ($1)$2`).replace(O().F(`^Object.<anonymous>\\s*\\(([^\\)]+)\\)`,`gm`),`{anonymous}() ($1)`).replace(O().F(`^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(0,-1)}function Ra(e,t){return t.stack.replace(O().F(`(?:\\n@:0)?\\s+$`,`m`),``).replace(O().F(`^(?:\\((\\S*)\\))?@`,`gm`),`{anonymous}($1)@`).split(`
`)}function za(e,t){return t.stack.replace(O().F(`^\\s*at\\s+(.*)$`,`gm`),`$1`).replace(O().F(`^Anonymous function\\s+`,`gm`),`{anonymous}() `).replace(O().F(`^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(1)}function Ba(e,t){return t.stack.replace(O().F(`\\[native code\\]\\n`,`m`),``).replace(O().F(`^(?=\\w+Error\\:).*$\\n`,`m`),``).replace(O().F(`^@`,`gm`),`{anonymous}()@`).split(`
`)}function Va(e,t){for(var n=O().F(`Line (\\d+).*script (?:in )?(\\S+)`,`i`),r=t.message.split(`
`),i=[],a=2,o=r.length|0;a<o;){var s=n.exec(r[a]);s!==null&&i.push(`{anonymous}()@`+s[2]+`:`+s[1])|0,a=2+a|0}return i}function Ha(e,t){for(var n=O().F(`Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$`,`i`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[3],l=c===void 0?`{anonymous}`:c;i.push(l+`()@`+s[2]+`:`+s[1])|0}a=2+a|0}return i}function Ua(e,t){for(var n=O().X(`^(.*)@(.+):(\\d+)$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[1],l=c===void 0?`global code`:c+`()`;i.push(l+`@`+s[2]+`:`+s[3])|0}a=1+a|0}return i}function Wa(e,t){for(var n=O().X(`^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[4]+`:`+s[1]+`:`+s[2],l=s[2],u=(l===void 0?`global code`:l).replace(O().X(`<anonymous function: (\\S+)>`),`$1`).replace(O().X(`<anonymous function>`),`{anonymous}`);i.push(u+`@`+c)|0}a=2+a|0}return i}function Ga(e,t){return[]}function Ka(e,t,n){for(;;)if(t<(Pa(e).length|0)){var r=Pa(e)[t];if(n.startsWith(r))return``+Ma(e)[r]+n.substring(r.length);t=1+t|0}else return n.startsWith(`L`)?n.substring(1):n}function qa(){this.d7=null,this.d8=null,this.d6=null,this.L=0}b=qa.prototype=new C,b.constructor=qa,b.hW=(function(e){return Ea(this,Ia(this,e))}),new T().i(qa,`java.lang.StackTrace$`,{dy:1});var Ja;function Ya(){return Ja||=new qa,Ja}function Xa(){}b=Xa.prototype=new C,b.constructor=Xa,b.X=(function(e){return new RegExp(e)}),b.F=(function(e,t){return new RegExp(e,t)}),new T().i(Xa,`java.lang.StackTrace$StringRE$`,{dz:1});var Za;function O(){return Za||=new Xa,Za}function Qa(){this.fz=null,this.h5=null,$a=this,this.fz=new Bf(!1),this.h5=new Bf(!0)}b=Qa.prototype=new C,b.constructor=Qa,new T().i(Qa,`java.lang.System$Streams$`,{dC:1});var $a;function eo(){return $a||=new Qa,$a}function to(e){var t={};return t[`java.version`]=`1.8`,t[`java.vm.specification.version`]=`1.8`,t[`java.vm.specification.vendor`]=`Oracle Corporation`,t[`java.vm.specification.name`]=`Java Virtual Machine Specification`,t[`java.vm.name`]=`Scala.js`,t[`java.vm.version`]=`1.22.0`,t[`java.specification.version`]=`1.8`,t[`java.specification.vendor`]=`Oracle Corporation`,t[`java.specification.name`]=`Java Platform API Specification`,t[`file.separator`]=`/`,t[`path.separator`]=`:`,t[`line.separator`]=`
`,t}function no(){this.d9=null,this.fA=null,ro=this,this.d9=to(this),this.fA=null}b=no.prototype=new C,b.constructor=no,b.gt=(function(e,t){if(this.d9!==null){var n=this.d9;return so().da.call(n,e)?n[e]:t}return this.fA.gt(e,t)}),new T().i(no,`java.lang.System$SystemProperties$`,{dD:1});var ro;function io(){return ro||=new no,ro}function ao(){this.da=null,oo=this,this.da=Object.prototype.hasOwnProperty}b=ao.prototype=new C,b.constructor=ao,new T().i(ao,`java.lang.Utils$Cache$`,{dG:1});var oo;function so(){return oo||=new ao,oo}function co(e,t){return e===t}function lo(e){return 0}function uo(e,t){return!!(e&&e.$classData&&e.$classData.D===t&&e.$classData.B.n.aN)}var fo=new T().i(0,`java.lang.Void`,{aN:1},(e=>e===void 0));function po(e,t){throw nd(new id,`argument type mismatch`)}function mo(){}b=mo.prototype=new C,b.constructor=mo,b.b1=(function(e){return e instanceof w||e instanceof ar||e instanceof or||e instanceof sr||e instanceof cr||e instanceof lr?e.a.length:e instanceof ur?e.a.length>>>1|0:(e instanceof dr||e instanceof fr||po(this,e),e.a.length)}),new T().i(mo,`java.lang.reflect.Array$`,{dI:1});var ho;function go(){return ho||=new mo,ho}function _o(){}b=_o.prototype=new C,b.constructor=_o,b.ht=(function(e,t){for(var n=0,r=e.a.length;;)if(n===r)return~n;else{var i=(n+r|0)>>>1|0,a=e.a[i],o=t===a?0:t<a?-1:1;if(o<0){r=i;continue}if(o!==0){n=1+i|0;continue}return i}}),b.gi=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length>>>1|0;if((t.a.length>>>1|0)!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a,o=i<<1,s=a[o],c=a[o+1|0],l=r,u=t.a,d=l<<1,f=u[d],p=u[d+1|0];if((s^f|c^p)!==0)return!1;r=1+r|0}return!0}),b.gh=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),b.gj=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),b.gg=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),b.gf=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),b.gk=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),new T().i(_o,`java.util.Arrays$`,{dJ:1});var vo;function k(){return vo||=new _o,vo}function yo(e,t){return So().gS(e,t)}function bo(){}b=bo.prototype=new C,b.constructor=bo,b.gS=(function(e,t){if(t===e>>31)return``+e;if(-2097152&(t^t>>10)){var n=t>>31,r=e^n,i=r-n|0,a=4294967296*(((t^n)+(i>>>0<r>>>0|0)|0)>>>0)+(i>>>0),o=+Math.floor(1.0000000000000265e-9*a),s=i-Math.imul(1e9,o|0)|0;s<0&&(--o,s=1e9+s|0);var c=``+s,l=o,u=c.length,d=``+l+`000000000`.substring(u)+c;return t<0?`-`+d:d}return``+(4294967296*t+(e>>>0))}),b.gr=(function(e){if(e<-0x8000000000000000)return S(0,-2147483648);if(e>=0x8000000000000000)return S(-1,2147483647);var t=e|0,n=23283064365386963e-26*e|0;return S(t,e<0&&t!==0?n-1|0:n)}),b.hJ=(function(e,t,n,r){var i=t>>31,a=e^i,o=a-i|0,s=(t^i)+(o>>>0<a>>>0|0)|0,c=r>>31,l=n^c,u=l-c|0,d=(r^c)+(u>>>0<l>>>0|0)|0;if(d|-2097152&u){var f=(4294967296*(s>>>0)+(o>>>0))/(4294967296*(d>>>0)+(u>>>0))+.00390625,p=f|0,m=23283064365386963e-26*f|0,ee=65535&u,h=u>>>16|0,te=65535&p,ne=p>>>16|0,re=Math.imul(ee,te),ie=Math.imul(h,te),ae=Math.imul(ee,ne),oe=re+((ie+ae|0)<<16)|0,se=(re>>>16|0)+ae|0;if(((s-((((Math.imul(u,m)+Math.imul(d,p)|0)+Math.imul(h,ne)|0)+(se>>>16|0)|0)+(((65535&se)+ie|0)>>>16|0)|0)|0)-((o-oe|0)>>>0>o>>>0|0)|0)<0)var ce=p-1|0,le=(m-1|0)+(ce!==-1|0)|0,ue=ce,de=le;else var ue=p,de=m}else var fe=(s>>>0)/(Vn(u)>>>0)|0,ue=(4294967296*(s-Math.imul(u,fe)|0)+(o>>>0))/u|0,de=fe;if((t^r)>=0)return S(ue,de);var pe=-ue|0;return S(pe,(-de|0)-(pe!==0|0)|0)}),b.hK=(function(e,t,n,r){if(!(r|-2097152&n)){var i=(t>>>0)/(Vn(n)>>>0)|0;return S((4294967296*(t-Math.imul(n,i)|0)+(e>>>0))/n|0,i)}if(r>=0){var a=(4294967296*(t>>>0)+(e>>>0))/(4294967296*(r>>>0)+(n>>>0))+.00390625,o=a|0,s=23283064365386963e-26*a|0,c=65535&n,l=n>>>16|0,u=65535&o,d=o>>>16|0,f=Math.imul(c,u),p=Math.imul(l,u),m=Math.imul(c,d),ee=f+((p+m|0)<<16)|0,h=(f>>>16|0)+m|0;if(((t-((((Math.imul(n,s)+Math.imul(r,o)|0)+Math.imul(l,d)|0)+(h>>>16|0)|0)+(((65535&h)+p|0)>>>16|0)|0)|0)-((e-ee|0)>>>0>e>>>0|0)|0)<0){var te=o-1|0;return S(te,(s-1|0)+(te!==-1|0)|0)}return S(o,s)}return(t===r?e>>>0<n>>>0:t>>>0<r>>>0)?S(0,0):S(1,0)}),b.iR=(function(e,t,n,r){var i=t>>31,a=e^i,o=a-i|0,s=(t^i)+(o>>>0<a>>>0|0)|0,c=r>>31,l=n^c,u=l-c|0,d=(r^c)+(u>>>0<l>>>0|0)|0;if(d|-2097152&u){var f=(4294967296*(s>>>0)+(o>>>0))/(4294967296*(d>>>0)+(u>>>0))+.00390625,p=f|0,m=23283064365386963e-26*f|0,ee=65535&u,h=u>>>16|0,te=65535&p,ne=p>>>16|0,re=Math.imul(ee,te),ie=Math.imul(h,te),ae=Math.imul(ee,ne),oe=re+((ie+ae|0)<<16)|0,se=(re>>>16|0)+ae|0,ce=(((Math.imul(u,m)+Math.imul(d,p)|0)+Math.imul(h,ne)|0)+(se>>>16|0)|0)+(((65535&se)+ie|0)>>>16|0)|0,le=o-oe|0,ue=(s-ce|0)-(le>>>0>o>>>0|0)|0;if(ue<0)var de=le+u|0,fe=(ue+d|0)+(de>>>0<le>>>0|0)|0,pe=de,me=fe;else var pe=le,me=ue}else var he=(4294967296*((s>>>0)%(Vn(u)>>>0)|0)+(o>>>0))/u|0,pe=o-Math.imul(u,he)|0,me=0;if(t<0){var ge=-pe|0;return S(ge,(-me|0)-(ge!==0|0)|0)}return S(pe,me)}),b.iS=(function(e,t,n,r){if(!(r|-2097152&n)){var i=(4294967296*((t>>>0)%(Vn(n)>>>0)|0)+(e>>>0))/n|0;return S(e-Math.imul(n,i)|0,0)}if(r>=0){var a=(4294967296*(t>>>0)+(e>>>0))/(4294967296*(r>>>0)+(n>>>0))+.00390625,o=a|0,s=23283064365386963e-26*a|0,c=65535&n,l=n>>>16|0,u=65535&o,d=o>>>16|0,f=Math.imul(c,u),p=Math.imul(l,u),m=Math.imul(c,d),ee=f+((p+m|0)<<16)|0,h=(f>>>16|0)+m|0,te=(((Math.imul(n,s)+Math.imul(r,o)|0)+Math.imul(l,d)|0)+(h>>>16|0)|0)+(((65535&h)+p|0)>>>16|0)|0,ne=e-ee|0,re=(t-te|0)-(ne>>>0>e>>>0|0)|0;if(re<0){var ie=ne+n|0;return S(ie,(re+r|0)+(ie>>>0<ne>>>0|0)|0)}return S(ne,re)}if(t===r?e>>>0<n>>>0:t>>>0<r>>>0)return S(e,t);var ae=e-n|0;return S(ae,(t-r|0)-(ae>>>0>e>>>0|0)|0)}),new T().i(bo,`org.scalajs.linker.runtime.RuntimeLong$`,{dL:1});var xo;function So(){return xo||=new bo,xo}function Co(){}b=Co.prototype=new C,b.constructor=Co,b.go=(function(e,t){var n=e.t();if(n>-1){for(var r=t.gB(n),i=e.g(),a=0;a<n;)j().g6(r,a,i.k()),a=1+a|0;return r}var o=null,s=t.gM(),c=s===gr.l();o=[];for(var l=e.g();l.o();){var u=l.k(),d=c?tr(u):u===null?Zo().iY(s):u;o.push(d)}return Zo().iX(s===mr.l()?fo.l():s===es.l()||s===Bl.l()?pr.l():s,o)}),b.gl=(function(e,t){if(e===t)return!0;if(e.a.length!==t.a.length)return!1;for(var n=e.a.length,r=0;r<n;){if(!A().z(e.a[r],t.a[r]))return!1;r=1+r|0}return!0}),new T().i(Co,`scala.Array$`,{dM:1});var wo;function To(){return wo||=new Co,wo}var Eo=new T().i(1,`scala.Function0`,{ac:1}),Do=new T().i(1,`scala.Function1`,{e:1});function Oo(){}b=Oo.prototype=new C,b.constructor=Oo;function ko(){}ko.prototype=b;function Ao(){}b=Ao.prototype=new C,b.constructor=Ao,b.c8=(function(e){return e===null?q():new J(e)}),new T().i(Ao,`scala.Option$`,{dV:1});var jo;function Mo(){return jo||=new Ao,jo}function No(){this.fH=null,this.c1=null,Po=this,this.fH=new z((e=>this.fH)),this.c1=new _u}b=No.prototype=new C,b.constructor=No,new T().i(No,`scala.PartialFunction$`,{dW:1});var Po;function Fo(){return Po||=new No,Po}function Io(){this.fK=null,Lo=this,this.fK=new z((e=>Ro().fK))}b=Io.prototype=new C,b.constructor=Io,b.i0=(function(e,t){var n=go().b1(e),r=0;if(e instanceof w)for(;r<n;)t.b(e.a[r]),r=1+r|0;else if(e instanceof lr)for(;r<n;)t.b(e.a[r]),r=1+r|0;else if(e instanceof fr)for(;r<n;)t.b(e.a[r]),r=1+r|0;else if(e instanceof ur)for(;r<n;){var i=e.a,a=r<<1,o=i[a],s=i[a+1|0];t.b(S(o,s)),r=1+r|0}else if(e instanceof dr)for(;r<n;)t.b(e.a[r]),r=1+r|0;else if(e instanceof or)for(;r<n;)t.b($n(e.a[r])),r=1+r|0;else if(e instanceof sr)for(;r<n;)t.b(e.a[r]),r=1+r|0;else if(e instanceof cr)for(;r<n;)t.b(e.a[r]),r=1+r|0;else if(e instanceof ar)for(;r<n;)t.b(e.a[r]),r=1+r|0;else throw new pd(e)}),new T().i(Io,`scala.collection.ArrayOps$`,{e2:1});var Lo;function Ro(){return Lo||=new Io,Lo}function zo(e,t){for(var n=e.g();n.o();)t.b(n.k())}function Bo(e,t,n,r){return e.t()===0?``+t+r:e.aX(om(new sm),t,n,r).I.l}function Vo(e,t,n,r,i){var a=t.I;n.length!==0&&(a.l=``+a.l+n);var o=e.g();if(o.o()){var s=o.k();for(a.l=``+a.l+s;o.o();){r.length!==0&&(a.l=``+a.l+r);var c=o.k();a.l=``+a.l+c}}return i.length!==0&&(a.l=``+a.l+i),t}function Ho(e,t){this.fN=null,this.bg=null,this.fN=e,this.bg=t}b=Ho.prototype=new C,b.constructor=Ho,b.ig=(function(){return this.fN.a5().g()}),new T().i(Ho,`scala.collection.Iterator$ConcatIteratorCell`,{ec:1});function Uo(){this.fO=null,Wo=this,this.fO=new z((e=>this.fO))}b=Uo.prototype=new C,b.constructor=Uo,b.hA=(function(e,t){return ff(e,t)>=0}),new T().i(Uo,`scala.collection.StringOps$`,{ej:1});var Wo;function Go(){return Wo||=new Uo,Wo}function Ko(){this.fR=0,qo=this;try{Go();var e=dc().ip(io().gt(`scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength`,`64`),10,214748364)}catch(t){if(0)var e;else{var e;throw t}}this.fR=e}b=Ko.prototype=new C,b.constructor=Ko,new T().i(Ko,`scala.collection.immutable.IndexedSeqDefaults$`,{en:1});var qo;function Jo(){return qo||=new Ko,qo}function Yo(){}b=Yo.prototype=new C,b.constructor=Yo,b.iY=(function(e){return e===_r.l()||e===vr.l()||e===gr.l()||e===yr.l()?0:e===br.l()?S(0,0):e===xr.l()||e===Sr.l()?0:e===hr.l()?!1:e===mr.l()?void 0:null}),b.iX=(function(e,t){var n=t.length|0;if(e===gr.l()){for(var r=new or(n),i=0;i!==n;)r.a[i]=65535&(t[i]|0),i=1+i|0;return r}for(var a=e.aq.U(n),o=0;o!==n;)j().g6(a,o,t[o]),o=1+o|0;return a}),new T().i(Yo,`scala.collection.mutable.ArrayBuilder$`,{es:1});var Xo;function Zo(){return Xo||=new Yo,Xo}function Qo(){}b=Qo.prototype=new C,b.constructor=Qo,b.z=(function(e,t){return e===t||(pc(e)?this.hR(e,t):e instanceof Fn?this.hP(e,t):e===null?t===null:Rn(e,t))}),b.hR=(function(e,t){if(pc(t))return this.hQ(e,t);if(t instanceof Fn){if(typeof e==`number`)return+e===t.c;if(e instanceof x){var n=nr(e),r=n.l,i=n.h,a=t.c,o=a>>31;return(r^a|i^o)===0}return e===null?t===null:Rn(e,t)}return e===null?t===null:Rn(e,t)}),b.hQ=(function(e,t){if(typeof e==`number`){var n=+e;if(typeof t==`number`)return n===+t;if(t instanceof x){var r=nr(t),i=r.l;return n===4294967296*r.h+(i>>>0)}return!1}if(e instanceof x){var a=nr(e),o=a.l,s=a.h;if(t instanceof x){var c=nr(t),l=c.l,u=c.h;return(o^l|s^u)===0}if(typeof t==`number`){var d=+t;return 4294967296*s+(o>>>0)===d}return!1}return e===null?t===null:Rn(e,t)}),b.hP=(function(e,t){if(t instanceof Fn)return e.c===t.c;if(pc(t)){if(typeof t==`number`)return+t===e.c;if(t instanceof x){var n=nr(t),r=n.l,i=n.h,a=e.c,o=a>>31;return(r^a|i^o)===0}return t===null?e===null:Rn(t,e)}return e===null&&t===null}),new T().i(Qo,`scala.runtime.BoxesRunTime$`,{eM:1});var $o;function A(){return $o||=new Qo,$o}var es=new T().i(0,`scala.runtime.Null$`,{eP:1});function ts(){}b=ts.prototype=new C,b.constructor=ts,b.ci=(function(){throw cd(new G,`tried to cast away nullability, but value is null`)}),new T().i(ts,`scala.runtime.Scala3RunTime$`,{eQ:1});var ns;function rs(){return ns||=new ts,ns}function is(){}b=is.prototype=new C,b.constructor=is,b.hi=(function(e){return e===null?es.l():In(e)}),b.aY=(function(e,t){if(e instanceof w||e instanceof lr||e instanceof fr)return e.a[t];if(e instanceof ur){var n=e.a,r=t<<1;return S(n[r],n[r+1|0])}if(e instanceof dr)return e.a[t];if(e instanceof or)return $n(e.a[t]);if(e instanceof sr||e instanceof cr||e instanceof ar)return e.a[t];throw e===null?W(new G):new pd(e)}),b.g6=(function(e,t,n){if(e instanceof w)e.a[t]=n;else if(e instanceof lr)e.a[t]=n|0;else if(e instanceof fr)e.a[t]=+n;else if(e instanceof ur){var r=nr(n),i=e.a,a=t<<1;i[a]=r.l,i[a+1|0]=r.h}else if(e instanceof dr)e.a[t]=Math.fround(n);else if(e instanceof or)e.a[t]=tr(n);else if(e instanceof sr)e.a[t]=n|0;else if(e instanceof cr)e.a[t]=n|0;else if(e instanceof ar)e.a[t]=!!n;else throw e===null?W(new G):new pd(e)}),b.di=(function(e){return Bo(e.a8(),e.E()+`(`,`,`,`)`)}),b.v=(function(e){if(e===null)return null;if(e.a.length===0){var t=Cf();return Qf(),bf(t)}return new zp(e)}),new T().i(is,`scala.runtime.ScalaRunTime$`,{eR:1});var as;function j(){return as||=new is,as}function os(){}b=os.prototype=new C,b.constructor=os,b.j=(function(e,t){var n=this.ch(e,t),r=n;return n=r<<13|r>>>19,Math.imul(5,n)-430675100|0}),b.ch=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|r>>>17,n=Math.imul(461845907,n),e^n}),b.A=(function(e,t){return this.hs(e^t)}),b.hs=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),b.iv=(function(e,t){return t===e>>31?e:e^t}),b.hM=(function(e){var t=Hn(e);if(t===e)return t;var n=So().gr(e),r=n.l,i=n.h;if(4294967296*i+(r>>>0)===e)return r^i;var a=e|0;if(a===e&&1/e!=-1/0)return a;if(e!==e)return 2146959360;var o=Wn;return o.setFloat64(0,e,!0),(o.getInt32(0,!0)|0)^(o.getInt32(4,!0)|0)}),b.r=(function(e){if(e===null)return 0;if(typeof e==`number`)return this.hM(+e);if(e instanceof x){var t=nr(e);return this.iv(t.l,t.h)}return zn(e)}),b.ij=(function(e){throw ad(new U,``+e)}),new T().i(os,`scala.runtime.Statics$`,{eT:1});var ss;function M(){return ss||=new os,ss}function cs(){}b=cs.prototype=new C,b.constructor=cs,b.ho=(function(e){return e}),new T().i(cs,`scala.scalajs.js.defined$`,{eZ:1});var ls;function us(){return ls||=new cs,ls}function ds(){}b=ds.prototype=new C,b.constructor=ds,b.j6=(function(e,t){return setTimeout((()=>{t.a5()}),e)}),new T().i(ds,`scala.scalajs.js.timers.package$`,{f0:1});var fs;function ps(){return fs||=new ds,fs}function ms(){}b=ms.prototype=new C,b.constructor=ms,b.jf=(function(e){if(e instanceof Q)return e.c6;var t=[];return e.V(new z((e=>t.push(e)|0))),t}),new T().i(ms,`scala.scalajs.runtime.Compat$`,{f9:1});var hs;function gs(){return hs||=new ms,hs}function _s(){}b=_s.prototype=new C,b.constructor=_s,b.j8=(function(e){var t=`Illegal command line`+(e.gu()===0?``:e.gu()===1?` after first argument`:` after `+e.gu()+` arguments`)+`: `+e.js();xc().iK().iq(t+`
`)}),new T().i(_s,`scala.util.CommandLineParser$`,{fa:1});function vs(e){this.dc=null,this.dc=e}b=vs.prototype=new C,b.constructor=vs,b.h=(function(){return`DynamicVariable(`+this.dc+`)`}),new T().i(vs,`scala.util.DynamicVariable`,{fc:1});function ys(){}b=ys.prototype=new C,b.constructor=ys,b.hp=(function(e){matchAlts1:{matchAlts2:break matchAlts1;return!1}return!0}),b.cq=(function(e){return this.hp(e)?new J(e):q()}),new T().i(ys,`scala.util.control.NonFatal$`,{fe:1});var bs;function xs(){return bs||=new ys,bs}function Ss(){}b=Ss.prototype=new C,b.constructor=Ss;function Cs(){}Cs.prototype=b,b.j=(function(e,t){var n=this.ch(e,t),r=n;return n=r<<13|r>>>19,Math.imul(5,n)-430675100|0}),b.ch=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|r>>>17,n=Math.imul(461845907,n),e^n}),b.A=(function(e,t){return this.bH(e^t)}),b.bH=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),b.cl=(function(e,t,n){var r=e.C();if(r===0)return n?t:K(e.E());var i=t;n||(i=this.j(i,K(e.E())));for(var a=0;a<r;)i=this.j(i,M().r(e.D(a))),a=1+a|0;return this.A(i,r)}),b.dn=(function(e,t,n){var r=e.C(),i=K(n===null?e.E():n);if(r===0)return i;var a=t;a=this.j(a,i);for(var o=0;o<r;)a=this.j(a,M().r(e.D(o))),o=1+o|0;return this.A(a,r)}),b.jj=(function(e,t){for(var n=0,r=0,i=0,a=1,o=e.g();o.o();){var s=o.k(),c=M().r(s);n=n+c|0,r^=c,a=Math.imul(a,1|c),i=1+i|0}var l=t;return l=this.j(l,n),l=this.j(l,r),l=this.ch(l,a),this.A(l,i)}),b.iJ=(function(e,t){var n=e.g(),r=t;if(!n.o())return this.A(r,0);var i=n.k();if(!n.o())return this.A(this.j(r,M().r(i)),1);var a=n.k(),o=M().r(i);r=this.j(r,o);for(var s=r,c=M().r(a),l=c-o|0,u=2;n.o();){r=this.j(r,c);var d=M().r(n.k());if(l!==(d-c|0)||l===0){for(r=this.j(r,d),u=1+u|0;n.o();)r=this.j(r,M().r(n.k())),u=1+u|0;return this.A(r,u)}c=d,u=1+u|0}return this.bH(this.j(this.j(s,l),c))}),b.s=(function(e,t){var n=t,r=go().b1(e);switch(r){case 0:return this.A(n,0);case 1:return this.A(this.j(n,M().r(j().aY(e,0))),1);default:var i=M().r(j().aY(e,0));n=this.j(n,i);for(var a=n,o=M().r(j().aY(e,1)),s=o-i|0,c=2;c<r;){n=this.j(n,o);var l=M().r(j().aY(e,c));if(s!==(l-o|0)||s===0){for(n=this.j(n,l),c=1+c|0;c<r;)n=this.j(n,M().r(j().aY(e,c))),c=1+c|0;return this.A(n,r)}o=l,c=1+c|0}return this.bH(this.j(this.j(a,s),o))}}),b.iP=(function(e,t,n,r){return this.bH(this.j(this.j(this.j(r,e),t),n))}),b.ii=(function(e,t){var n=t,r=e.e();switch(r){case 0:return this.A(n,0);case 1:return this.A(this.j(n,M().r(e.i(0))),1);default:var i=M().r(e.i(0));n=this.j(n,i);for(var a=n,o=M().r(e.i(1)),s=o-i|0,c=2;c<r;){n=this.j(n,o);var l=M().r(e.i(c));if(s!==(l-o|0)||s===0){for(n=this.j(n,l),c=1+c|0;c<r;)n=this.j(n,M().r(e.i(c))),c=1+c|0;return this.A(n,r)}o=l,c=1+c|0}return this.bH(this.j(this.j(a,s),o))}}),b.it=(function(e,t){for(var n=0,r=t,i=0,a=0,o=0,s=0,c=e;!c.c();){var l=c.W(),u=c.K(),d=M().r(l);switch(r=this.j(r,d),i){case 0:s=d,i=1;break;case 1:a=d-o|0,i=2;break;case 2:(a!==(d-o|0)||a===0)&&(i=3)}o=d,n=1+n|0,c=u}return i===2?this.iP(s,a,o,t):this.A(r,n)});function ws(e){this.aO=null,this.dW=null,this.cE=!1,this.dW=e,ci(this),this.cE=!1}b=ws.prototype=new C,b.constructor=ws,b.iL=(function(e){this.cE?(fi(e),this.dW.a5()):di(this,e)}),b.ir=(function(){li(this),this.cE=!0}),new T().i(ws,`com.raquo.airstream.ownership.OneTimeOwner`,{bS:1,bT:1});function Ts(e){if(e===null)throw W(new G)}b=Ts.prototype=new C,b.constructor=Ts,b.aZ=(function(e){return e}),b.cb=(function(e){return e}),new T().i(Ts,`com.raquo.laminar.codecs.package$$anon$2`,{cg:1,a8:1});function Es(e){if(e===null)throw W(new G)}b=Es.prototype=new C,b.constructor=Es,b.hH=(function(e){return Go(),cc().gI(e)}),b.cb=(function(e){return this.hH(e)}),b.aZ=(function(e){return``+ +e}),new T().i(Es,`com.raquo.laminar.codecs.package$$anon$4`,{ch:1,a8:1});function Ds(e){return new Wi(e,new H((e=>e+`px`)))}function Os(e,t,n,r){}b=Os.prototype=new Xi,b.constructor=Os,new T().i(Os,`com.raquo.laminar.keys.CompositeKey`,{cB:1,t:1});function ks(e){this.bQ=null,this.bQ=e}b=ks.prototype=new Xi,b.constructor=ks;var As=new T().i(ks,`com.raquo.laminar.keys.EventProp`,{cF:1,t:1});function js(e,t,n){return e.ad=t,e.aP=n,e}function Ms(){this.ad=null,this.aP=null}b=Ms.prototype=new Xi,b.constructor=Ms;function Ns(){}Ns.prototype=b,b.p=(function(e){return new el(this,e,new Du(((e,t,n)=>{D().dC(e,t,n)})))}),b.dd=(function(e){return new tl(this,e.co(),new Du(((e,t,n)=>{D().dC(e,this,t)})))}),new T().i(Ms,`com.raquo.laminar.keys.HtmlAttr`,{a2:1,t:1});function Ps(e,t){this.Y=null,this.cQ=null,this.Y=e,this.cQ=t}b=Ps.prototype=new Xi,b.constructor=Ps,b.dd=(function(e){var t=this.Y===`value`?new Du(((e,t,n)=>{var r=this.cQ.aZ(t),i=D().i8(e,this);i!==void 0&&A().z(r,i)||D().gO(e,this,r)})):new Du(((e,t,n)=>{D().j2(e,this,t)}));return new tl(this,e.co(),t)}),new T().i(Ps,`com.raquo.laminar.keys.HtmlProp`,{au:1,t:1});function Fs(e,t,n){this.cS=null,this.cR=null,this.bR=null,this.bS=null,this.cS=e,this.cR=t;var r=n.c()?q():new J(n.n()+`:`+e);this.bR=r.c()?e:r.n(),this.bS=n.c()?q():new J($i().iA(n.n()))}b=Fs.prototype=new Xi,b.constructor=Fs,new T().i(Fs,`com.raquo.laminar.keys.SvgAttr`,{cG:1,t:1});function Is(){}b=Is.prototype=new C,b.constructor=Is,b.a4=(function(e){}),new T().i(Is,`com.raquo.laminar.modifiers.Modifier$$anon$1`,{cN:1,S:1});function Ls(e,t){if(this.f5=null,this.f5=e,t===null)throw W(new G)}b=Ls.prototype=new C,b.constructor=Ls,b.a4=(function(e){var t=Gr(),n=(()=>{this.f5.b(e)});if(Gr(),t.u)n();else{t.u=!0;try{n()}finally{t.u=!1,Hr(t)}}}),new T().i(Ls,`com.raquo.laminar.modifiers.Modifier$$anon$2`,{cO:1,S:1});function Rs(){}b=Rs.prototype=new C,b.constructor=Rs,new T().i(Rs,`com.raquo.laminar.modifiers.RenderableSeq$collectionSeqRenderable$`,{cQ:1,cP:1});var zs;function Bs(){return zs||=new Rs,zs}function Vs(e,t){if(this.f6=null,this.f6=e,t===null)throw W(new G)}b=Vs.prototype=new C,b.constructor=Vs,b.hr=(function(e){return this.f6.b(e)}),new T().i(Vs,`com.raquo.laminar.modifiers.RenderableText$$anon$1`,{cT:1,cR:1});function Hs(e){e.gc(new ni(new V((()=>{throw L(new R,`Attempting to use owner of unmounted element: `+Bo(D().hG(e.bG(),(D(),$())),``,` > `,``))}))))}function Us(e,t,n){return e.d1=t,e}function Ws(){this.d1=null}b=Ws.prototype=new C,b.constructor=Ws;function Gs(){}Gs.prototype=b,b.dz=(function(){return this.d1}),b.bx=(function(e){var t=this.hw();return e.V(new H((e=>{e.a4(t)}))),t}),b.hw=(function(){return new ef(this,D().hC(this))}),new T().i(Ws,`com.raquo.laminar.tags.HtmlTag`,{az:1,aa:1});function Ks(e,t){this.fd=null,this.fd=e}b=Ks.prototype=new C,b.constructor=Ks,new T().i(Ks,`com.raquo.laminar.tags.SvgTag`,{d1:1,aa:1});function qs(){}b=qs.prototype=new C,b.constructor=qs,b.aZ=(function(e){return e}),b.cb=(function(e){return e}),new T().i(qs,`io.github.nguyenyou.webawesome.laminar.UnionAsStringCodec$$anon$1`,{da:1,a8:1});function Js(e,t){return e.bV=t,e.g1(),e}function Ys(){this.bV=null,this.bU=null,this.bW=!1,this.bX=null,this.bY=!1}b=Ys.prototype=new C,b.constructor=Ys;function Xs(){}Xs.prototype=b,b.jc=(function(){return this.bW||=(this.bU=new rl(this.bV,new z((e=>void 0)),void 0),!0),this.bU}),b.J=(function(e,t){var n=this.jc().bx(new Q([]));return e.V(new z((e=>{e.b(this).a4(n)}))),t.V(new z((e=>{e.a4(n)}))),n}),b.jg=(function(){return this.bY||=(this.bX=new yl,!0),this.bX});function Zs(){this.d2=null,Qs=this,this.d2=wr(67,`1C]4m6m=c4]4]4]4]4]4]4]4]4]3g4]2m9]2m1Jm1m9s4g5mm6]3]4mm12>mEm1m6m1]3]=]DI]1<m24mIs4g2c4w9];]4]<]3m3m=m3mH]8]2m=mBHm3]4mK3{gggg2:g=m@]13]4E]`)}b=Zs.prototype=new C,b.constructor=Zs,b.jh=(function(e){if(e>>>0>1114111)throw rd(new id);return String.fromCodePoint(e)}),b.hI=(function(e,t){if(e<256)var n=(e-48|0)>>>0<=9?e-48|0:(e-65|0)>>>0<=25?e-55|0:(e-97|0)>>>0<=25?e-87|0:-1;else if((e-65313|0)>>>0<=25)var n=e-65303|0;else if((e-65345|0)>>>0<=25)var n=e-65335|0;else{var r=k().ht(this.d2,e),i=r<0?-2-r|0:r;if(i<0)var n=-1;else var a=e-this.d2.a[i]|0,n=a>9?-1:a}return n<t?n:-1}),new T().i(Zs,`java.lang.Character$`,{dh:1,a:1});var Qs;function $s(){return Qs||=new Zs,Qs}function ec(e){return(1&e.ae)<<24>>24||(e.d5=/* @__PURE__ */ RegExp(`^[\\x00-\\x20]*([+-]?(?:NaN|Infinity|(?:\\d+\\.?\\d*|\\.\\d+)(?:[eE][+-]?\\d+)?)[fFdD]?)[\\x00-\\x20]*$`),e.ae=(1|e.ae)<<24>>24),e.d5}function tc(e){return(1&e.ae)<<24>>24?e.d5:ec(e)}function nc(e){return(2&e.ae)<<24>>24||(e.d4=/* @__PURE__ */ RegExp(`^[\\x00-\\x20]*([+-]?)0[xX]([0-9A-Fa-f]*)\\.?([0-9A-Fa-f]*)[pP]([+-]?\\d+)[fFdD]?[\\x00-\\x20]*$`),e.ae=(2|e.ae)<<24>>24),e.d4}function rc(e){return(2&e.ae)<<24>>24?e.d4:nc(e)}function ic(e,t){var n=rc(e).exec(t);n===null&&ac(t);var r=n[1],i=n[2],a=n[3],o=n[4];i===``&&a===``&&ac(t);var s=e.iN(i,a,o,15);return r===`-`?-s:s}function ac(e){throw new uf(`For input string: "`+e+`"`)}function oc(){this.d5=null,this.d4=null,this.ae=0}b=oc.prototype=new C,b.constructor=oc,b.gI=(function(e){var t=tc(this).exec(e);return t===null?ic(this,e):+parseFloat(t[1])}),b.iN=(function(e,t,n,r){for(var i=``+e+t,a=-(t.length<<2)|0,o=i.length-1|0,s=0;s!==o&&i.charCodeAt(s)===48;)s=1+s|0;var c=s,l=i.substring(c),u=l.length,d=u>r;if(d){for(var f=!1,p=r;!f&&p!==u;)l.charCodeAt(p)!==48&&(f=!0),p=1+p|0;var m=f?`1`:`0`,ee=l.substring(0,r)+m}else var ee=l;var h=a+(d?(l.length-(1+r|0)|0)<<2:0)|0;return Ta().iZ(+parseInt(ee,16),Hn(+parseInt(n,10))+h|0)}),new T().i(oc,`java.lang.Double$`,{dj:1,a:1});var sc;function cc(){return sc||=new oc,sc}function lc(){}b=lc.prototype=new C,b.constructor=lc,b.bE=(function(e){throw new uf(`For input string: "`+e+`"`)}),b.ip=(function(e,t,n){e===null&&dc().bE(e);var r=e.length;r===0&&dc().bE(e);var i=$s(),a=e.charCodeAt(0),o=a===45,s=o?-1:0,c=(o||a===43)|0;c>=r&&dc().bE(e);var l=0;for(l=0;c!==r;){var u=i.hI(e.charCodeAt(c),t);(u<0||l>>>0>n>>>0)&&dc().bE(e),l=Math.imul(l,t)+u|0,c=1+c|0}return l>>>0>(2147483647-s|0)>>>0&&dc().bE(e),(l^s)-s|0}),new T().i(lc,`java.lang.Integer$`,{dn:1,a:1});var uc;function dc(){return uc||=new lc,uc}function fc(){}b=fc.prototype=new C,b.constructor=fc;function pc(e){return e instanceof fc||typeof e==`number`||e instanceof x}function mc(e,t,n,r,i){this.aS=null,this.bb=null,this.aT=null,this.aU=0,this.aR=0,this.aS=e,this.bb=t,this.aT=n,this.aU=r,this.aR=i}b=mc.prototype=new C,b.constructor=mc,b.d=(function(e){return e instanceof mc&&this.aT===e.aT&&this.aU===e.aU&&this.aR===e.aR&&this.aS===e.aS&&this.bb===e.bb}),b.h=(function(){var e=``;return this.aS!==`<jscode>`&&(e=``+e+this.aS+`.`),e=``+e+this.bb,this.aT===null?e+=`(Unknown Source)`:(e=e+`(`+this.aT,this.aU>=0&&(e=e+`:`+this.aU,this.aR>=0&&(e=e+`:`+this.aR)),e+=`)`),e}),b.f=(function(){return K(this.aS)^K(this.bb)^K(this.aT)^this.aU^this.aR});var hc=new T().i(mc,`java.lang.StackTraceElement`,{aL:1,a:1});function gc(){}b=gc.prototype=new C,b.constructor=gc,b.iC=(function(e,t,n){for(var r=t+n|0,i=``,a=t;a!==r;)i+=``+Un(e.a[a]),a=1+a|0;return i}),new T().i(gc,`java.lang.String$`,{dA:1,a:1});var _c;function vc(){return _c||=new gc,_c}function N(e,t,n,r,i){return e.fC=t,e.fD=i,i&&e.hX(),e}var P=class extends Error{constructor(){super(),this.fC=null,this.fD=!1,this.fB=null,this.bZ=null}gv(e){return this}bA(){return this.fC}hX(){var e=this instanceof X?this.y:this;return this.fB=Object.prototype.toString.call(e)===`[object Error]`?e:Error.captureStackTrace===void 0||Object.isSealed(this)?/* @__PURE__ */ Error():(Error.captureStackTrace(this),this),this}ia(){return this.bZ===null&&(this.bZ=this.fD?Ya().hW(this.fB):new(hc.r()).C(0)),this.bZ}h(){var e=Ln(this),t=this.bA();return t===null?e:e+`: `+t}f(){return rr.prototype.f.call(this)}d(e){return rr.prototype.d.call(this,e)}get message(){var e=this.bA();return e===null?``:e}get name(){return Ln(this)}toString(){return this.h()}};function yc(){this.fE=null,bc=this,this.fE=new vs(eo().fz)}b=yc.prototype=new C,b.constructor=yc,b.iK=(function(){return this.fE.dc}),new T().i(yc,`scala.Console$`,{dN:1,eD:1});var bc;function xc(){return bc||=new yc,bc}function Sc(){}b=Sc.prototype=new C,b.constructor=Sc;function Cc(){}Cc.prototype=b,b.h=(function(){return`<function1>`});function wc(){}b=wc.prototype=new ko,b.constructor=wc;function Tc(){}Tc.prototype=b,b.jn=(function(e){if(e===null)return null;if(e.a.length===0){var t=Ef();return Qf(),t.fS}return new $p(e)});function Ec(e,t,n){return e.ap(t)?e.b(t):n.b(t)}function Dc(e,t){if(t===e)e.g3(Ld().gp(t));else for(var n=t.g();n.o();)e.dk(n.k());return e}function Oc(){}b=Oc.prototype=new C,b.constructor=Oc;function kc(){}kc.prototype=b,b.h=(function(){return`<function0>`});function Ac(){}b=Ac.prototype=new C,b.constructor=Ac;function jc(){}jc.prototype=b,b.h=(function(){return`<function1>`});function Mc(){}b=Mc.prototype=new C,b.constructor=Mc;function Nc(){}Nc.prototype=b,b.h=(function(){return`<function2>`});function Pc(){}b=Pc.prototype=new C,b.constructor=Pc;function Fc(){}Fc.prototype=b,b.h=(function(){return`<function3>`});function Ic(e){this.c5=!1,this.c5=e}b=Ic.prototype=new C,b.constructor=Ic,b.h=(function(){return``+this.c5}),new T().i(Ic,`scala.runtime.BooleanRef`,{eL:1,a:1});function Lc(e){this.bl=0,this.bl=e}b=Lc.prototype=new C,b.constructor=Lc,b.h=(function(){return``+this.bl}),new T().i(Lc,`scala.runtime.IntRef`,{eN:1,a:1});function Rc(){this.q=0,this.g0=0,this.hb=0,this.ha=0,zc=this,this.q=K(`Seq`),this.g0=K(`Map`),this.hb=K(`Set`),this.ha=this.jj($(),this.g0)}b=Rc.prototype=new Cs,b.constructor=Rc,b.gN=(function(e){return fp(e)?this.ii(e,this.q):e instanceof Wp?this.it(e,this.q):this.iJ(e,this.q)}),new T().i(Rc,`scala.util.hashing.MurmurHash3$`,{fg:1,ff:1});var zc;function F(){return zc||=new Rc,zc}var Bc=class extends P{};function Vc(){this.cu=null,this.dE=null,this.dF=null,Hc=this,this.cu=Ld().g5(j().v(new(Do.r()).C([]))),this.dE=new H((e=>{try{console.error(this.b0(e)+`
`+this.i9(e,`
`))}catch(e){var t=e instanceof P?e:new X(e);console.error(`Error in AirstreamError.consoleErrorCallback:`),console.error(t)}})),this.dF=new H((e=>{console.warn(`Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.`);var t=e;throw t instanceof X?t.y:t})),this.iQ(this.dE)}b=Vc.prototype=new C,b.constructor=Vc,b.b0=(function(e){try{var t=e.bA()}catch{var t=`(Unable to get the message for this error - exception occurred in its getMessage)`}return In(e).dt()+`: `+t}),b.i9=(function(e,t){try{return Bo(wl().jn(e.ia()),``,t,``)}catch{return`(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)`}}),b.iQ=(function(e){this.cu.dk(e)}),b.a1=(function(e){for(var t=this.cu.g();t.o();){var n=t.k();try{n.b(e)}catch(e){var r=e instanceof P?e:new X(e),i=this.dF;if(n===null?i===null:n.d(i))throw r instanceof X?r.y:r;console.warn(`Error processing an unhandled error callback:`),ps().j6(0,new V((e=>(()=>{throw e instanceof X?e.y:e}))(r)))}}}),new T().i(Vc,`com.raquo.airstream.core.AirstreamError$`,{bE:1,eB:1,eC:1});var Hc;function I(){return Hc||=new Vc,Hc}function Uc(e){e.cf(!0),e.dy(void 0)}function Wc(e,t,n){return ju(e,Ar().gW(t,Fo().c1,!0),n)}function Gc(e,t){e.du()?Fu(e,t):Jc(e).push(new V((()=>{Fu(e,t)})))}function Kc(e,t){e.du()?Pu(e,t):Jc(e).push(new V((()=>{Pu(e,t)})))}function qc(e){return zu(e)>0}function Jc(e){var t=e.dx();if(t===void 0){var n=E().w(j().v(new(Eo.r()).C([])));return e.dy(n),n}return t}var Yc=new T().i(1,`com.raquo.airstream.core.Observer`,{a5:1,a1:1,U:1});function Xc(e,t,n){return new ou(n.hr(t))}function Zc(e,t,n){return new Ls(new H((e=>{(ki(),new Ei(t,null,null)).V(new H((e=>(t=>{la().c7(e,t,void 0)}))(e)))})),ra())}function Qc(e,t){this.aQ=null,this.cT=null,this.cU=null,this.aQ=e,this.cT=(n=>{var r=e.cN.b(n);r.c()||t.b(r.n())}),this.cU=(()=>{var e=null;e=this;var t={};if(e===null)throw W(new G);return t.capture=e.aQ.cP,t.passive=e.aQ.cO,t})()}b=Qc.prototype=new C,b.constructor=Qc,b.a4=(function(e){this.hu(e,!1)}),b.hu=(function(e,t){if(Ku(e,this)===-1){var n=new H((t=>(D().he(e.x,this),new pi(t.eX,new V((()=>{var t=Ku(e,this);t!==-1&&(Gu(e,t),D().iT(e.x,this))})))))),r=t?fa().jk(e,n):si().cs(e.Z,new H((t=>n.b(new ea(e,t)))),!1);return Wu(e,this,t),r}var i=new H((e=>void 0));return si().gR(e.Z,new H((t=>{i.b(new ea(e,t))})),!1)}),b.h=(function(){return`EventListener(`+this.aQ.b9.bQ+`)`});var $c=new T().i(Qc,`com.raquo.laminar.modifiers.EventListener`,{cJ:1,S:1,av:1});function el(e,t,n){this.f0=null,this.f1=null,this.eZ=null,this.f0=e,this.f1=t,this.eZ=n}b=el.prototype=new C,b.constructor=el,b.a4=(function(e){this.eZ.g4(e,this.f0,this.f1)}),new T().i(el,`com.raquo.laminar.modifiers.KeySetter`,{cK:1,S:1,cU:1});function tl(e,t,n){this.f2=null,this.f4=null,this.f3=null,this.f2=e,this.f4=t,this.f3=n}b=tl.prototype=new C,b.constructor=tl,b.a4=(function(e){this.hv(e)}),b.hv=(function(e){e.iF(this.f2);var t=this.f4,n=new H((t=>{this.f3.g4(e,t,this)}));return si().j9(e.Z,t,n)}),new T().i(tl,`com.raquo.laminar.modifiers.KeyUpdater`,{cL:1,S:1,av:1});function nl(e,t){if(this.cZ=null,this.f8=null,this.f9=null,this.f8=t,Hs(this),e===null)throw L(new R,`Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load`);if(!D().io(e,document))throw L(new R,`Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering`);this.f9=e,this.iz()}b=nl.prototype=new C,b.constructor=nl,b.cd=(function(){return this.cZ}),b.gc=(function(e){this.cZ=e}),b.iz=(function(){return this.cZ.g2(),la().c7(this,this.f8,void 0)}),b.bG=(function(){return this.f9}),new T().i(nl,`com.raquo.laminar.nodes.RootNode`,{cZ:1,a9:1,ax:1});function rl(e,t,n){this.d1=null,this.fc=null,this.fb=null,this.fc=e,this.fb=n,Us(this,e,!1)}b=rl.prototype=new Gs,b.constructor=rl,b.dz=(function(){return this.fc}),b.hh=(function(){var e=this.fb;return e===void 0?void 0:e.map((e=>e.jo.Y))}),new T().i(rl,`com.raquo.laminar.tags.CustomHtmlTag`,{ay:1,az:1,aa:1});function il(){this.ad=null,this.aP=null,this.fe=null,this.ff=!1,this.fg=null,this.fh=!1,this.fi=null,this.fj=!1,js(this,`display`,new qs)}b=il.prototype=new Ns,b.constructor=il,b.iu=(function(){return this.ff||=(this.fe=ol().p(`long`),!0),this.fe}),b.iB=(function(){return this.fh||=(this.fg=ol().p(`narrow`),!0),this.fg}),b.j7=(function(){return this.fj||=(this.fi=ol().p(`short`),!0),this.fi}),new T().i(il,`io.github.nguyenyou.webawesome.laminar.CommonKeys$DisplayFormat$`,{d5:1,a2:1,t:1});var al;function ol(){return al||=new il,al}function sl(){this.ad=null,this.aP=null,this.fk=null,this.fl=!1,js(this,`unit`,new qs)}b=sl.prototype=new Ns,b.constructor=sl,b.ca=(function(){return this.fl||=(this.fk=ll().p(`bit`),!0),this.fk}),new T().i(sl,`io.github.nguyenyou.webawesome.laminar.CommonKeys$FormatBytesUnit$`,{d6:1,a2:1,t:1});var cl;function ll(){return cl||=new sl,cl}function ul(){this.ad=null,this.aP=null,this.fm=null,this.fn=!1,js(this,`type`,new qs)}b=ul.prototype=new Ns,b.constructor=ul,b.iE=(function(){return this.fn||=(this.fm=fl().p(`number`),!0),this.fm}),new T().i(ul,`io.github.nguyenyou.webawesome.laminar.CommonKeys$InputInputType$`,{d7:1,a2:1,t:1});var dl;function fl(){return dl||=new ul,dl}function pl(){this.bV=null,this.bU=null,this.bW=!1,this.bX=null,this.bY=!1,this.fs=null,this.ft=!1,this.fq=null,this.fr=!1,this.fo=null,this.fp=!1,Js(this,`wa-format-bytes`)}b=pl.prototype=new Xs,b.constructor=pl,b.S=(function(){return this.ft||=(this.fs=(B(),js(new Ms,`value`,Ii().hd())),!0),this.fs}),b.cr=(function(){return this.fr||=(this.fq=ll(),!0),this.fq}),b.dq=(function(){return this.fp||=(this.fo=ol(),!0),this.fo}),b.g1=(function(){return jt}),new T().i(pl,`io.github.nguyenyou.webawesome.laminar.FormatBytes$`,{d8:1,aB:1,aA:1});var ml;function hl(){return ml||=new pl,ml}function gl(){this.bV=null,this.bU=null,this.bW=!1,this.bX=null,this.bY=!1,this.fw=null,this.fx=!1,this.fu=null,this.fv=!1,Js(this,`wa-input`)}b=gl.prototype=new Xs,b.constructor=gl,b.ji=(function(){return this.fx||=(this.fw=fl(),!0),this.fw}),b.is=(function(){return this.fv||=(this.fu=(B(),js(new Ms,`label`,Ii().b8)),!0),this.fu}),b.g1=(function(){return Pn}),new T().i(gl,`io.github.nguyenyou.webawesome.laminar.Input$`,{d9:1,aB:1,aA:1});var _l;function vl(){return _l||=new gl,_l}function yl(){}b=yl.prototype=new Cc,b.constructor=yl,b.b=(function(e){return B().m}),new T().i(yl,`io.github.nguyenyou.webawesome.laminar.WebComponent$toL$`,{db:1,dO:1,e:1});function bl(e){if(e.aq.Z)return e.aq.Q().dt()+`[]`;for(var t=e.aq.N,n=t.length-1|0;n>=0&&t.charCodeAt(n)===36;)n=n-1|0;if(n>=0&&(t.charCodeAt(n)-48|0)>>>0<=9){for(n=n-1|0;n>=0&&(t.charCodeAt(n)-48|0)>>>0<=9;)n=n-1|0;for(;n>=0&&t.charCodeAt(n)===36;)n=n-1|0}for(;;){if(n>=0)var r=n,i=t.charCodeAt(r),a=i!==36&&i!==46;else var a=!1;if(a)n=n-1|0;else break}var o=1+n|0;return t.substring(o)}function xl(e){this.d3=null,this.aq=e}b=xl.prototype=new C,b.constructor=xl,b.h=(function(){return(this.aq.Y?`interface `:this.aq.X?``:`class `)+this.aq.N}),b.dt=(function(){return this.d3===null&&(this.d3=bl(this)),this.d3}),new T().i(xl,`java.lang.Class`,{di:1,a:1,M:1});function L(e,t){return N(e,t,null,!0,!0),e}var R=class extends P{};new T().i(R,`java.lang.Exception`,{L:1,r:1,a:1});function Sl(){this.h6=null,Cl=this,Pd(),this.h6=Il()}b=Sl.prototype=new Tc,b.constructor=Sl,new T().i(Sl,`scala.Predef$`,{dY:1,dR:1,dS:1});var Cl;function wl(){return Cl||=new Sl,Cl}function Tl(e,t){return e.c3=t,e}function El(){this.c3=null}b=El.prototype=new C,b.constructor=El;function Dl(){}Dl.prototype=b,b.ce=(function(e){return this.c3.ds(e,Yf())}),b.c9=(function(e){return this.c3.ds(e,Yf())});function Ol(e,t){return new Cd(e).hz(t)}function kl(e,t,n){var r=t>0?t:0,i=n<0?-1:n<=r?0:n-r|0;return i===0?Nl().M:new Ed(e,r,i)}function Al(e,t){for(var n=t.g();e.o();)if(!n.o()||!A().z(e.k(),n.k()))return!1;return!n.o()}function jl(){this.M=null,Ml=this,this.M=new yd}b=jl.prototype=new C,b.constructor=jl,new T().i(jl,`scala.collection.Iterator$`,{e9:1,a:1,Z:1});var Ml;function Nl(){return Ml||=new jl,Ml}function Pl(){}b=Pl.prototype=new C,b.constructor=Pl,new T().i(Pl,`scala.collection.immutable.Map$`,{ep:1,a:1,ee:1});var Fl;function Il(){return Fl||=new Pl,Fl}function Ll(e){this.fT=null,this.fT=e}b=Ll.prototype=new kc,b.constructor=Ll,b.a5=(function(){return(0,this.fT)()}),new T().i(Ll,`scala.runtime.AbstractFunction0.$$Lambda$07eded5776954a9c145e92c329afd52873ad179c`,{eH:1,bu:1,ac:1});function z(e){this.fU=null,this.fU=e}b=z.prototype=new jc,b.constructor=z,b.b=(function(e){return(0,this.fU)(e)}),new T().i(z,`scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919`,{eI:1,bv:1,e:1});function Rl(){}b=Rl.prototype=new C,b.constructor=Rl;function zl(){}zl.prototype=b,b.h=(function(){return`<function1>`}),b.b=(function(e){return this.aH(e,Fo().c1)});var Bl=new T().i(0,`scala.runtime.Nothing$`,{eO:1,r:1,a:1});function Vl(){}b=Vl.prototype=new C,b.constructor=Vl,b.i3=(function(e){return(t=>e.b(t))}),new T().i(Vl,`scala.scalajs.js.Any$`,{eU:1,eV:1,eW:1});var Hl;function Ul(){return Hl||=new Vl,Hl}function Wl(){}b=Wl.prototype=new kc,b.constructor=Wl;function Gl(){}Gl.prototype=b;function Kl(){}b=Kl.prototype=new jc,b.constructor=Kl;function ql(){}ql.prototype=b;function Jl(){}b=Jl.prototype=new Nc,b.constructor=Jl;function Yl(){}Yl.prototype=b;function Xl(){}b=Xl.prototype=new Fc,b.constructor=Xl;function Zl(){}Zl.prototype=b;function Ql(e,t,n,r){if(this.dI=null,this.dG=!1,this.cv=null,this.dH=null,this.dI=e,this.dG=t,this.cv=n,r===null)throw W(new G);this.dH=void 0}b=Ql.prototype=new C,b.constructor=Ql,b.bC=(function(){return this.dH}),b.by=(function(){return Er(this)}),b.h=(function(){return Dr(this)}),b.dA=(function(e){try{this.dI.b(e)}catch(e){var t=e instanceof P?e:new X(e);this.dG?this.cj(new Gd(t)):I().a1(new Gd(t))}}),b.cj=(function(e){try{this.cv.ap(e)?this.cv.b(e):I().a1(e)}catch(n){var t=n instanceof P?n:new X(n);I().a1(new Kd(t,e))}}),b.bD=(function(e){e.a6(new H((e=>{this.cj(e)})),new H((e=>{this.dA(e)})))}),new T().i(Ql,`com.raquo.airstream.core.Observer$$anon$8`,{bG:1,a1:1,U:1,a5:1});function $l(e,t,n){if(this.cw=null,this.dJ=!1,this.dK=null,this.cw=e,this.dJ=t,n===null)throw W(new G);this.dK=void 0}b=$l.prototype=new C,b.constructor=$l,b.bC=(function(){return this.dK}),b.by=(function(){return Er(this)}),b.h=(function(){return Dr(this)}),b.dA=(function(e){this.bD(new Ud(e))}),b.cj=(function(e){this.bD(new Hd(e))}),b.bD=(function(e){try{this.cw.ap(e)?this.cw.b(e):e.a6(new H((e=>{I().a1(e)})),new H((e=>void 0)))}catch(n){var t=n instanceof P?n:new X(n);this.dJ&&e.gz()?this.cj(new Gd(t)):e.a6(new H((e=>{I().a1(new Kd(t,e))})),new H((e=>{I().a1(new Gd(t))})))}}),new T().i($l,`com.raquo.airstream.core.Observer$$anon$9`,{bH:1,a1:1,U:1,a5:1});function eu(e){if(this.ee=null,this.ef=!1,this.gX=null,e===null)throw W(new G);zi(this)}b=eu.prototype=new C,b.constructor=eu,b.jb=(function(){return this.ef||=(this.ee=new Ks(`svg`,!1),!0),this.ee}),new T().i(eu,`com.raquo.laminar.api.Laminar$svg$`,{ca:1,cz:1,cj:1,cl:1});function tu(){this.m=null,nu=this,this.m=new _p}b=tu.prototype=new C,b.constructor=tu,new T().i(tu,`com.raquo.laminar.api.package$`,{cd:1,ap:1,at:1,ao:1});var nu;function B(){return nu||=new tu,nu}function ru(e,t,n){return e.au=t,e.av=n,e}function iu(){this.au=null,this.av=null}b=iu.prototype=new Xi,b.constructor=iu;function au(){}au.prototype=b,b.p=(function(e){return new el(this,Bn(e),new Du(((e,t,n)=>{D().gP(e,t,n)})))});function ou(e){this.fa=null,this.d0=null,this.fa=q(),this.d0=D().hE(e)}b=ou.prototype=new C,b.constructor=ou,b.gQ=(function(e){this.fa=e}),b.gU=(function(e){}),b.a4=(function(e){la().c7(e,this,void 0)}),b.je=(function(){return this.d0.data}),b.bG=(function(){return this.d0}),new T().i(ou,`com.raquo.laminar.nodes.TextNode`,{d0:1,a9:1,S:1,aw:1});function su(){}b=su.prototype=new C,b.constructor=su;function cu(){}cu.prototype=b;function lu(e,t){return e===t}function uu(e){return e?1231:1237}var du=new T().i(0,`java.lang.Boolean`,{df:1,a:1,O:1,M:1},(e=>typeof e==`boolean`));function fu(e){return e}function pu(e,t){return t instanceof Fn&&e===t.c}var mu=new T().i(0,`java.lang.Character`,{aH:1,a:1,O:1,M:1},(e=>e instanceof Fn)),hu=class extends R{};function gu(){this.l=null,this.l=``}b=gu.prototype=new C,b.constructor=gu,b.hk=(function(e){var t=vc().iC(e,0,e.a.length);return this.l=``+this.l+t,this}),b.h=(function(){return this.l}),b.e=(function(){return this.l.length}),b.g7=(function(e){return this.l.charCodeAt(e)}),new T().i(gu,`java.lang.StringBuilder`,{dB:1,ab:1,aF:1,a:1});function _u(){}b=_u.prototype=new C,b.constructor=_u,b.h=(function(){return`<function1>`}),b.aH=(function(e,t){return Ec(this,e,t)}),b.ap=(function(e){return!1}),b.hm=(function(e){throw new pd(e)}),b.b=(function(e){this.hm(e)}),new T().i(_u,`scala.PartialFunction$$anon$1`,{dX:1,e:1,f:1,a:1});function vu(){}b=vu.prototype=new C,b.constructor=vu;function yu(){}yu.prototype=b,b.t=(function(){return-1}),b.aX=(function(e,t,n,r){return Vo(this,e,t,n,r)}),b.g=(function(){return this}),b.cc=(function(e){return this.bI(e,-1)}),b.bI=(function(e,t){return kl(this,e,t)}),b.h=(function(){return`<iterator>`});function bu(e,t){return e.c4=t,e}function xu(){this.c4=null}b=xu.prototype=new C,b.constructor=xu;function Su(){}Su.prototype=b,b.g5=(function(e){return this.c4.c9(e)}),b.gp=(function(e){return this.c4.ce(e)}),b.c9=(function(e){return this.g5(e)}),b.ce=(function(e){return this.gp(e)});function Cu(e,t){return t>=0&&e.a7(t)>0}function wu(e){return e.a7(0)===0}function Tu(e,t){var n=e.t();if(n!==-1){var r=t.t();if(r!==-1){if(n!==r)return!1;if(n===0)return!0}}return Al(e.g(),t)}function V(e){this.fX=null,this.fX=e}b=V.prototype=new Gl,b.constructor=V,b.a5=(function(){return(0,this.fX)()}),new T().i(V,`scala.scalajs.runtime.AnonFunction0.$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d`,{f2:1,f1:1,bu:1,ac:1});function H(e){this.fY=null,this.fY=e}b=H.prototype=new ql,b.constructor=H,b.b=(function(e){return(0,this.fY)(e)}),new T().i(H,`scala.scalajs.runtime.AnonFunction1.$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1`,{f4:1,f3:1,bv:1,e:1});function Eu(e){this.h9=null,this.h9=e}b=Eu.prototype=new Yl,b.constructor=Eu,new T().i(Eu,`scala.scalajs.runtime.AnonFunction2.$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7`,{f6:1,f5:1,eJ:1,dP:1});function Du(e){this.fZ=null,this.fZ=e}b=Du.prototype=new Zl,b.constructor=Du,b.g4=(function(e,t,n){return(0,this.fZ)(e,t,n)}),new T().i(Du,`scala.scalajs.runtime.AnonFunction3.$$Lambda$73f37e31ba038fe839c174212837da323f140c96`,{f8:1,f7:1,eK:1,dQ:1});function Ou(){}b=Ou.prototype=new C,b.constructor=Ou;function ku(){}ku.prototype=b,b.a8=(function(){return new gd(this)});function Au(e){e.ga(E().w(j().v(new(Yc.r()).C([])))),e.gb(E().w(j().v(new(Tr.r()).C([])))),e.ct(!1)}function ju(e,t,n){var r=Gr(),i=(()=>{Iu(e);var r=Mu(e,t,n);return t.bD(e.cp()),Lu(e),r}),a=!qc(e);if(r.u||!a)var o=i();else{r.u=!0;try{var o=i()}finally{r.u=!1,Hr(r)}}return o}function Mu(e,t,n){var r=new pi(n,new V((()=>{Gc(e,t)})));return e.bz().push(t),r}function Nu(e,t,n){var r=Gr(),i=(()=>{!qc(e)&&n&&Iu(e),e.bB().push(t),Lu(e)}),a=!qc(e);if(r.u||!a)i();else{r.u=!0;try{i()}finally{r.u=!1,Hr(r)}}}function Pu(e,t){Nr().gK(e.bB(),t)&&Ru(e)}function Fu(e,t){Nr().gK(e.bz(),t)&&Ru(e)}function Iu(e){e.gV()||(e.gH(),e.ct(!0))}function Lu(e){zu(e)===1&&e.gF()}function Ru(e){qc(e)||(e.gG(),e.ct(!1))}function zu(e){var t=e.bz().length,n=e.bB();return(t|0)+(n.length|0)|0}function Bu(e){e.e2=Ar().i4(new Vu(e),(Ar(),!0))}function Vu(e){if(this.e3=null,e===null)throw W(new G);this.e3=e}b=Vu.prototype=new zl,b.constructor=Vu,b.im=(function(e){return!0}),b.hq=(function(e,t){new Lr(new H((t=>{this.e3.j0(e,t)})))}),b.ap=(function(e){return this.im(e)}),b.aH=(function(e,t){return this.hq(e,t)}),new T().i(Vu,`com.raquo.airstream.state.Var$$anon$1`,{c0:1,bw:1,e:1,f:1,a:1});function Hu(e){if(e===null)throw W(new G)}b=Hu.prototype=new zl,b.constructor=Hu,b.ap=(function(e){return typeof e==`string`||!1}),b.aH=(function(e,t){return typeof e==`string`?e:t.b(e)}),new T().i(Hu,`com.raquo.laminar.DomApi$$anon$2`,{c5:1,bw:1,e:1,f:1,a:1});function Uu(e){e.cW=new hi(new V((()=>{e.Z.g2()})),new V((()=>{e.Z.hF()}))),e.aw=void 0}function Wu(e,t,n){if(e.aw===void 0)e.aw=E().w(j().v(new($c.r()).C([t])));else if(n){var r=e.aw;if(r===void 0)throw new dd(`undefined.get`);r.unshift(t)}else{var i=e.aw;if(i===void 0)throw new dd(`undefined.get`);i.push(t)}}function Gu(e,t){var n=e.aw;n!==void 0&&n.splice(t,1)}function Ku(e,t){var n=e.aw;if(n===void 0)return-1;for(var r=!1,i=0;!r&&i<(n.length|0);){var a=n[i];(a===null?t===null:Rn(a,t))?r=!0:i=1+i|0}return r?i:-1}function qu(e,t){Yu(e,e.bT,t)&&Xu(e,t)}function Ju(e,t){var n=e.bT;e.bT=t,Yu(e,n,t)||Xu(e,t)}function Yu(e,t,n){var r=!t.c()&&!t.n().cd().G.c(),i=!n.c()&&!n.n().cd().G.c();return r&&!i}function Xu(e,t){Zu(e,t.c()?q():new J(t.n().cd()))}function Zu(e,t){if(t.c())e.cW.hy();else{var n=t.n();e.cW.j3(n)}}function Qu(){}b=Qu.prototype=new cu,b.constructor=Qu;function $u(){}$u.prototype=b;var ed=class extends hu{constructor(e){super(),N(this,e,null,!0,!0)}};new T().i(ed,`java.lang.ArithmeticException`,{de:1,P:1,L:1,r:1,a:1});var td=new T().i(0,`java.lang.Byte`,{dg:1,T:1,a:1,O:1,M:1},(e=>Yn(e)));function nd(e,t){return N(e,t,null,!0,!0),e}function rd(e){return N(e,null,null,!0,!0),e}var id=class extends hu{};new T().i(id,`java.lang.IllegalArgumentException`,{aJ:1,P:1,L:1,r:1,a:1});function ad(e,t){return N(e,t,null,!0,!0),e}function od(e,t){return N(e,`Index out of range: `+t,null,!0,!0),e}var U=class extends hu{};new T().i(U,`java.lang.IndexOutOfBoundsException`,{dl:1,P:1,L:1,r:1,a:1});function sd(){}b=sd.prototype=new cu,b.constructor=sd,new T().i(sd,`java.lang.JSConsoleBasedPrintStream$DummyOutputStream`,{dr:1,aE:1,aC:1,aG:1,aD:1});function cd(e,t){return N(e,t,null,!0,!0),e}function W(e){return N(e,null,null,!0,!0),e}var G=class extends hu{};new T().i(G,`java.lang.NullPointerException`,{du:1,P:1,L:1,r:1,a:1});var ld=new T().i(0,`java.lang.Short`,{dx:1,T:1,a:1,O:1,M:1},(e=>Xn(e))),ud=class extends hu{constructor(e){super(),N(this,e,null,!0,!0)}};new T().i(ud,`java.lang.UnsupportedOperationException`,{dF:1,P:1,L:1,r:1,a:1});var dd=class extends hu{constructor(e){super(),N(this,e,null,!0,!0)}};new T().i(dd,`java.util.NoSuchElementException`,{dK:1,P:1,L:1,r:1,a:1});function fd(e){if(!e.fG){if(e.c0===null)var t=`null`;else{var n=j().hi(e.c0),r=n===null?`of a JS class`:`of class `+n.aq.N;try{var t=e.c0+` (`+r+`)`}catch{var t=`an instance `+r}}e.fF=t,e.fG=!0}return e.fF}var pd=class extends hu{constructor(e){super(),this.c0=null,this.fF=null,this.fG=!1,this.c0=e,N(this,null,null,!0,!0)}bA(){return fd(this)}};new T().i(pd,`scala.MatchError`,{dT:1,P:1,L:1,r:1,a:1});function md(){}b=md.prototype=new C,b.constructor=md;function hd(){}hd.prototype=b,b.a8=(function(){return new gd(this)}),b.c=(function(){return this===q()}),b.t=(function(){return!this.c()|0}),b.g=(function(){return this.c()?Nl().M:new bd(this.n())});function gd(e){if(this.bc=0,this.fJ=0,this.fI=null,e===null)throw W(new G);this.fI=e,this.bc=0,this.fJ=e.C()}b=gd.prototype=new yu,b.constructor=gd,b.o=(function(){return this.bc<this.fJ}),b.k=(function(){var e=this.fI.D(this.bc);return this.bc=1+this.bc|0,e}),new T().i(gd,`scala.Product$$anon$1`,{dZ:1,Q:1,b:1,d:1,R:1});function _d(e){this.c3=null,Tl(this,e)}b=_d.prototype=new Dl,b.constructor=_d,new T().i(_d,`scala.collection.ClassTagSeqFactory$AnySeqDelegate`,{e5:1,e4:1,a:1,Z:1,a4:1});function vd(e){return Bo(e,e.aI()+`(`,`, `,`)`)}function yd(){}b=yd.prototype=new yu,b.constructor=yd,b.o=(function(){return!1}),b.iD=(function(){throw new dd(`next on empty iterator`)}),b.t=(function(){return 0}),b.k=(function(){this.iD()}),b.bI=(function(e,t){return this}),new T().i(yd,`scala.collection.Iterator$$anon$19`,{ea:1,Q:1,b:1,d:1,R:1});function bd(e){this.fM=null,this.bf=!1,this.fM=e,this.bf=!1}b=bd.prototype=new yu,b.constructor=bd,b.o=(function(){return!this.bf}),b.k=(function(){return this.bf?Nl().M.k():(this.bf=!0,this.fM)}),b.bI=(function(e,t){return this.bf||e>0||t===0?Nl().M:this}),new T().i(bd,`scala.collection.Iterator$$anon$20`,{eb:1,Q:1,b:1,d:1,R:1});function xd(e){for(;;)if(e.B instanceof Cd){var t=e.B;if(e.B=t.B,e.ag=t.ag,t.O!==null){e.N===null&&(e.N=t.N);var n=t.N;n===null&&rs().ci(),n.bg=e.O,e.O=t.O}}else return}function Sd(e){for(;;)if(e.O===null)return e.B=null,e.N=null,!1;else{if(e.B=e.O.ig(),e.N===e.O){var t=e.N;t===null&&rs().ci(),e.N=t.bg}if(e.O=e.O.bg,xd(e),e.ag)return!0;if(!(e.B!==null&&e.B.o()))continue;return e.ag=!0,!0}}function Cd(e){this.B=null,this.O=null,this.N=null,this.ag=!1,this.B=e,this.O=null,this.N=null,this.ag=!1}b=Cd.prototype=new yu,b.constructor=Cd,b.o=(function(){return this.ag?!0:this.B===null?!1:this.B.o()?(this.ag=!0,!0):Sd(this)}),b.k=(function(){if(this.o()){this.ag=!1;var e=this.B;return e===null&&rs().ci(),e.k()}return Nl().M.k()}),b.hz=(function(e){var t=new Ho(e,null);if(this.O===null)this.O=t,this.N=t;else{var n=this.N;n===null&&rs().ci(),n.bg=t,this.N=t}return this.B===null&&(this.B=Nl().M),this}),new T().i(Cd,`scala.collection.Iterator$ConcatIterator`,{aT:1,Q:1,b:1,d:1,R:1});function wd(e){for(;e.a3>0;)e.ah.o()?(e.ah.k(),e.a3=e.a3-1|0):e.a3=0}function Td(e,t){if(e.H<0)return-1;var n=e.H-t|0;return n<0?0:n}function Ed(e,t,n){this.ah=null,this.H=0,this.a3=0,this.ah=e,this.H=n,this.a3=t}b=Ed.prototype=new yu,b.constructor=Ed,b.t=(function(){var e=this.ah.t();if(e<0)return-1;var t=e-this.a3|0,n=t<0?0:t;if(this.H<0)return n;var r=this.H;return r<n?r:n}),b.o=(function(){return wd(this),this.H!==0&&this.ah.o()}),b.k=(function(){return wd(this),this.H>0?(this.H=this.H-1|0,this.ah.k()):this.H<0?this.ah.k():Nl().M.k()}),b.bI=(function(e,t){var n=e>0?e:0;if(t<0)var r=Td(this,n);else if(t<=n)var r=0;else if(this.H<0)var r=t-n|0;else var i=Td(this,n),a=t-n|0,r=i<a?i:a;var o=this.a3+n|0;return r===0?Nl().M:o<0?(this.a3=2147483647,this.H=0,Ol(this,new Ll((()=>new Ed(this.ah,o-2147483647|0,r))))):(this.a3=o,this.H=r,this)}),new T().i(Ed,`scala.collection.Iterator$SliceIterator`,{ed:1,Q:1,b:1,d:1,R:1});function Dd(e,t){return t>=0&&e.a7(t)>0}function Od(e,t){if(t<0)throw ad(new U,``+t);var n=e.hN(t);if(n.c())throw ad(new U,``+t);return n.W()}function kd(e,t){return pp(t)?Ad(e,e,t):Tu(e,t)}function Ad(e,t,n){for(var r=n,i=t;;)if(i===r)return!0;else{if(!i.c()&&!r.c()&&A().z(i.W(),r.W())){var a=i.K(),o=r.K();i=a,r=o;continue}return i.c()&&r.c()}}function jd(e){if(this.bi=null,e===null)throw W(new G);this.bi=e}b=jd.prototype=new yu,b.constructor=jd,b.o=(function(){return!this.bi.c()}),b.k=(function(){var e=this.bi.W();return this.bi=this.bi.K(),e}),new T().i(jd,`scala.collection.StrictOptimizedLinearSeqOps$$anon$1`,{ei:1,Q:1,b:1,d:1,R:1});function Md(){Nd=this,$(),$()}b=Md.prototype=new C,b.constructor=Md,b.c9=(function(e){return $().gJ(e)}),b.ce=(function(e){return $().gJ(e)}),new T().i(Md,`scala.collection.immutable.List$`,{eo:1,a:1,Z:1,a4:1,aX:1});var Nd;function Pd(){return Nd||=new Md,Nd}function Fd(){this.c4=null,bu(this,Vd())}b=Fd.prototype=new Su,b.constructor=Fd,new T().i(Fd,`scala.collection.mutable.Buffer$`,{ev:1,ef:1,a:1,Z:1,a4:1});var Id;function Ld(){return Id||=new Fd,Id}function Rd(e){this.fW=null,this.bm=0,this.fV=0,this.fW=e,this.bm=0,this.fV=e.C()}b=Rd.prototype=new yu,b.constructor=Rd,b.o=(function(){return this.bm<this.fV}),b.k=(function(){var e=this.fW.D(this.bm);return this.bm=1+this.bm|0,e}),new T().i(Rd,`scala.runtime.ScalaRunTime$$anon$1`,{eS:1,Q:1,b:1,d:1,R:1});function zd(){}b=zd.prototype=new C,b.constructor=zd,b.c9=(function(e){return this.gq(e)}),b.gq=(function(e){return Dc(lm(new um),e).gL()}),b.ce=(function(e){return this.gq(e)}),new T().i(zd,`scala.scalajs.js.WrappedArray$`,{eY:1,aX:1,a:1,Z:1,a4:1});var Bd;function Vd(){return Bd||=new zd,Bd}function Hd(e){this.bn=null,this.bn=e}b=Hd.prototype=new ku,b.constructor=Hd,b.f=(function(){return F().cl(this,-1408943127,!0)}),b.d=(function(e){if(this===e)return!0;if(e instanceof Hd){var t=this.bn,n=e.bn;return t===null?n===null:t.d(n)}return!1}),b.h=(function(){return j().di(this)}),b.C=(function(){return 1}),b.E=(function(){return`Failure`}),b.D=(function(e){if(e===0)return this.bn;throw od(new U,e)}),b.gy=(function(){return!0}),b.gz=(function(){return!1}),b.dv=(function(e){return this}),b.a6=(function(e,t){return e.b(this.bn)}),new T().i(Hd,`scala.util.Failure`,{bz:1,bB:1,c:1,H:1,a:1});function Ud(e){this.aW=null,this.aW=e}b=Ud.prototype=new ku,b.constructor=Ud,b.f=(function(){return F().cl(this,-1750213842,!0)}),b.d=(function(e){return this===e||e instanceof Ud&&A().z(this.aW,e.aW)}),b.h=(function(){return j().di(this)}),b.C=(function(){return 1}),b.E=(function(){return`Success`}),b.D=(function(e){if(e===0)return this.aW;throw od(new U,e)}),b.gy=(function(){return!1}),b.gz=(function(){return!0}),b.dv=(function(e){try{return new Ud(e.b(this.aW))}catch(e){var t=e instanceof P?e:new X(e),n=xs().cq(t);if(!n.c())return new Hd(n.n());throw t instanceof X?t.y:t}}),b.a6=(function(e,t){try{return t.b(this.aW)}catch(t){var n=t instanceof P?t:new X(t),r=xs().cq(n);if(!r.c()){var i=r.n();return e.b(i)}throw n instanceof X?n.y:n}}),new T().i(Ud,`scala.util.Success`,{bA:1,bB:1,c:1,H:1,a:1});var Wd=class e extends Bc{constructor(e,t){super(),this.b4=null,this.b3=null,this.b4=e,this.b3=t,N(this,`ErrorHandlingError: `+I().b0(e)+`; cause: `+I().b0(t),null,!0,!0),this.gv(t)}a8(){return new gd(this)}f(){return F().dn(this,-889275714,null)}d(t){if(this===t)return!0;if(t instanceof e){var n=this.b4,r=t.b4;if(n===null?r===null:n.d(r)){var i=this.b3,a=t.b3;return i===null?a===null:i.d(a)}return!1}return!1}C(){return 2}E(){return`ErrorHandlingError`}D(e){if(e===0)return this.b4;if(e===1)return this.b3;throw ad(new U,``+e)}h(){return`ErrorHandlingError: `+this.b4+`; cause: `+this.b3}};new T().i(Wd,`com.raquo.airstream.core.AirstreamError$ErrorHandlingError`,{ae:1,a0:1,r:1,a:1,c:1,H:1});var Gd=class e extends Bc{constructor(e){super(),this.b5=null,this.b5=e,N(this,`ObserverError: `+I().b0(e),null,!0,!0)}a8(){return new gd(this)}f(){return F().dn(this,-889275714,null)}d(t){if(this===t)return!0;if(t instanceof e){var n=this.b5,r=t.b5;return n===null?r===null:n.d(r)}return!1}C(){return 1}E(){return`ObserverError`}D(e){if(e===0)return this.b5;throw ad(new U,``+e)}h(){return`ObserverError: `+this.b5}};new T().i(Gd,`com.raquo.airstream.core.AirstreamError$ObserverError`,{af:1,a0:1,r:1,a:1,c:1,H:1});var Kd=class e extends Bc{constructor(e,t){super(),this.b7=null,this.b6=null,this.b7=e,this.b6=t,N(this,`ObserverErrorHandlingError: `+I().b0(e)+`; cause: `+I().b0(t),null,!0,!0),this.gv(t)}a8(){return new gd(this)}f(){return F().dn(this,-889275714,null)}d(t){if(this===t)return!0;if(t instanceof e){var n=this.b7,r=t.b7;if(n===null?r===null:n.d(r)){var i=this.b6,a=t.b6;return i===null?a===null:i.d(a)}return!1}return!1}C(){return 2}E(){return`ObserverErrorHandlingError`}D(e){if(e===0)return this.b7;if(e===1)return this.b6;throw ad(new U,``+e)}h(){return`ObserverErrorHandlingError: `+this.b7+`; cause: `+this.b6}};new T().i(Kd,`com.raquo.airstream.core.AirstreamError$ObserverErrorHandlingError`,{ag:1,a0:1,r:1,a:1,c:1,H:1});var qd=class e extends Bc{constructor(e,t){super(),this.aK=null,this.aJ=0,this.aK=e,this.aJ=t,N(this,`Transaction depth exceeded maxDepth = `+t+`: Execution of `+e+" aborted. See `Transaction.maxDepth`.",null,!0,!0)}a8(){return new gd(this)}f(){var e=-889275714;return e=M().j(e,K(`TransactionDepthExceeded`)),e=M().j(e,M().r(this.aK)),e=M().j(e,this.aJ),M().A(e,2)}d(t){if(this===t)return!0;if(t instanceof e){if(this.aJ===t.aJ){var n=this.aK,r=t.aK;return n===null?r===null:n===r}return!1}return!1}C(){return 2}E(){return`TransactionDepthExceeded`}D(e){if(e===0)return this.aK;if(e===1)return this.aJ;throw ad(new U,``+e)}h(){return`TransactionDepthExceeded: `+this.aK+`; maxDepth: `+this.aJ}};new T().i(qd,`com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded`,{ah:1,a0:1,r:1,a:1,c:1,H:1});function Jd(e){e.cp()}function Yd(e){this.e1=null,this.e2=null,this.cH=null,this.cG=null,this.cI=null,this.e1=void 0,Bu(this),this.cH=e,this.cG=new $f(this.cH,new V((()=>Dr(this)))),this.cI=this.cG}b=Yd.prototype=new C,b.constructor=Yd,b.bC=(function(){return this.e1}),b.by=(function(){return Er(this)}),b.h=(function(){return Dr(this)}),b.co=(function(){return this.cI}),b.j0=(function(e,t){this.cH=e,Rf(this.cG,e,t)}),new T().i(Yd,`com.raquo.airstream.state.SourceVar`,{bW:1,a6:1,a7:1,a1:1,U:1,bY:1});function Xd(e){this.au=null,this.av=null,this.eM=null,this.eN=!1,ru(this,e,$())}b=Xd.prototype=new au,b.constructor=Xd,b.g8=(function(){return this.eN||=(this.eM=this.p(`column`),!0),this.eM}),new T().i(Xd,`com.raquo.laminar.defs.styles.StyleProps$$anon$30`,{cq:1,X:1,t:1,V:1,W:1,cv:1});function Zd(e){this.au=null,this.av=null,this.eO=null,this.eP=!1,ru(this,e,$())}b=Zd.prototype=new au,b.constructor=Zd,b.jm=(function(){return this.eP||=(this.eO=this.p(`wrap`),!0),this.eO}),new T().i(Zd,`com.raquo.laminar.defs.styles.StyleProps$$anon$31`,{cr:1,X:1,t:1,V:1,W:1,cw:1});function Qd(e,t){var n=e.cX;n===void 0?e.cX=us().ho(E().w(j().v(new(pf.r()).C([t])))):n.push(t)|0}function $d(e,t){var n=e.f7;if(n!==void 0){_return:{for(var r=n.length|0,i=0;i<r;){if(n[i].jv()===t){var a=i;break _return}i=1+i|0}var a=-1}return a>=0}return!1}function ef(e,t){this.bT=null,this.Z=null,this.cW=null,this.aw=null,this.cY=null,this.x=null,this.f7=null,this.cX=null,this.cY=e,this.x=t,this.bT=q(),Hs(this),Uu(this),this.f7=void 0,this.cX=void 0}b=ef.prototype=new C,b.constructor=ef,b.a4=(function(e){la().c7(e,this,void 0)}),b.cd=(function(){return this.Z}),b.gc=(function(e){this.Z=e}),b.gU=(function(e){qu(this,e)}),b.gQ=(function(e){Ju(this,e)}),b.hB=(function(){if(D().gw(this.x)){var e=this.cY;return e instanceof rl?e.hh():void 0}return Ui().eU}),b.ik=(function(e){var t=this.hB();return t!==void 0&&Ci().ih(t,e,0)}),b.iF=(function(e){if(e instanceof Ps&&this.ik(e.Y)){if($d(this,e.Y))throw L(new R,"Can not add uncontrolled `"+e.Y+" <-- ???` to element `"+D().gd(this.x)+"` that already has an input controller for `"+e.Y+"` property.");Qd(this,e.Y)}}),b.h=(function(){return`ReactiveHtmlElement(`+(this.x===null?`tag=`+this.cY.dz():this.x.outerHTML)+`)`}),b.bG=(function(){return this.x}),new T().i(ef,`com.raquo.laminar.nodes.ReactiveHtmlElement`,{cY:1,a9:1,S:1,aw:1,ax:1,cW:1});function tf(e,t){return Object.is(e,t)}function nf(e){var t=e|0;if(t===e&&1/e!=-1/0)return t;if(e!==e)return 2146959360;var n=Wn;return n.setFloat64(0,e,!0),(n.getInt32(0,!0)|0)^(n.getInt32(4,!0)|0)}var rf=new T().i(0,`java.lang.Double`,{aI:1,T:1,a:1,O:1,M:1,Y:1},(e=>typeof e==`number`)),af=new T().i(0,`java.lang.Float`,{dk:1,T:1,a:1,O:1,M:1,Y:1},(e=>Qn(e))),of=new T().i(0,`java.lang.Integer`,{dm:1,T:1,a:1,O:1,M:1,Y:1},(e=>Zn(e)));function sf(e,t,n){if(n instanceof x){var r=n,i=r.l,a=r.h;return(e^i|t^a)===0}return!1}function cf(e,t){return e^t}var lf=new T().i(0,`java.lang.Long`,{aK:1,T:1,a:1,O:1,M:1,Y:1},(e=>e instanceof x)),uf=class extends id{constructor(e){super(),N(this,e,null,!0,!0)}};new T().i(uf,`java.lang.NumberFormatException`,{dv:1,aJ:1,P:1,L:1,r:1,a:1});function K(e){for(var t=e.length,n=0,r=0;r!==t;)n=((n<<5)-n|0)+e.charCodeAt(r)|0,r=1+r|0;return n}function df(e,t){return e===t}function ff(e,t){var n=$s().jh(t);return e.indexOf(n)|0}var pf=new T().i(0,`java.lang.String`,{aM:1,a:1,O:1,ab:1,M:1,Y:1},(e=>typeof e==`string`));function mf(){}b=mf.prototype=new hd,b.constructor=mf,b.f=(function(){return 2433880}),b.h=(function(){return`None`}),b.C=(function(){return 0}),b.E=(function(){return`None`}),b.D=(function(e){throw od(new U,e)}),b.i5=(function(){throw new dd(`None.get`)}),b.n=(function(){this.i5()}),new T().i(mf,`scala.None$`,{dU:1,aO:1,b:1,c:1,H:1,a:1});var hf;function q(){return hf||=new mf,hf}function J(e){this.bd=null,this.bd=e}b=J.prototype=new hd,b.constructor=J,b.f=(function(){return F().cl(this,1323286827,!0)}),b.d=(function(e){return this===e||e instanceof J&&A().z(this.bd,e.bd)}),b.h=(function(){return j().di(this)}),b.C=(function(){return 1}),b.E=(function(){return`Some`}),b.D=(function(e){if(e===0)return this.bd;throw od(new U,e)}),b.n=(function(){return this.bd}),new T().i(J,`scala.Some`,{aP:1,aO:1,b:1,c:1,H:1,a:1});function gf(){}b=gf.prototype=new C,b.constructor=gf;function _f(){}_f.prototype=b,b.t=(function(){return-1}),b.V=(function(e){zo(this,e)}),b.aX=(function(e,t,n,r){return Vo(this,e,t,n,r)}),b.aI=(function(){return this.b2()});function Y(e){this.c2=null,this.a2=0,this.be=0,this.c2=e,this.a2=0,this.be=go().b1(this.c2)}b=Y.prototype=new yu,b.constructor=Y,b.t=(function(){return this.be-this.a2|0}),b.o=(function(){return this.a2<this.be}),b.k=(function(){this.a2>=go().b1(this.c2)&&Nl().M.k();var e=j().aY(this.c2,this.a2);return this.a2=1+this.a2|0,e}),b.cc=(function(e){if(e>0){var t=this.a2+e|0;if(t<0)var n=this.be;else var r=this.be,n=r<t?r:t;this.a2=n}return this}),new T().i(Y,`scala.collection.ArrayOps$ArrayIterator`,{e3:1,Q:1,b:1,d:1,R:1,a:1});function vf(e,t){return t<0?0:t>e.T?e.T:t}function yf(e){this.fL=null,this.af=0,this.T=0,this.fL=e,this.af=0,this.T=e.e()}b=yf.prototype=new yu,b.constructor=yf,b.t=(function(){return this.T}),b.o=(function(){return this.T>0}),b.k=(function(){if(this.T>0){var e=this.fL.i(this.af);return this.af=1+this.af|0,this.T=this.T-1|0,e}return Nl().M.k()}),b.cc=(function(e){if(e>0){this.af=this.af+e|0;var t=this.T-e|0;this.T=t<0?0:t}return this}),b.bI=(function(e,t){var n=vf(this,e),r=vf(this,t)-n|0;return this.T=r<0?0:r,this.af=this.af+n|0,this}),new T().i(yf,`scala.collection.IndexedSeqView$IndexedSeqViewIterator`,{e8:1,Q:1,b:1,d:1,R:1,a:1});function bf(e){return e.fQ||=(e.fP=new zp(new(Bl.r()).C(0)),!0),e.fP}function xf(){this.h7=null,this.fP=null,this.fQ=!1,Sf=this,this.h7=new _d(this)}b=xf.prototype=new C,b.constructor=xf,b.i1=(function(e,t){return e instanceof Op?e:this.jl(To().go(e,t))}),b.jl=(function(e){if(e===null)return null;if(e instanceof w)return new zp(e);if(e instanceof lr)return new Lp(e);if(e instanceof fr)return new Fp(e);if(e instanceof ur)return new Rp(e);if(e instanceof dr)return new Ip(e);if(e instanceof or)return new Pp(e);if(e instanceof sr)return new Np(e);if(e instanceof cr)return new Bp(e);if(e instanceof ar)return new Mp(e);if(uo(e,1))return new Vp(e);throw new pd(e)}),b.ds=(function(e,t){return this.i1(e,t)}),new T().i(xf,`scala.collection.immutable.ArraySeq$`,{em:1,a:1,aS:1,aQ:1,aR:1,aV:1});var Sf;function Cf(){return Sf||=new xf,Sf}function wf(){this.h8=null,this.fS=null,Tf=this,this.h8=new _d(this),this.fS=new $p(new w(0))}b=wf.prototype=new C,b.constructor=wf,b.i2=(function(e,t){return this.iw(To().go(e,t))}),b.iw=(function(e){if(e===null)return null;if(e instanceof w)return new $p(e);if(e instanceof lr)return new Zp(e);if(e instanceof fr)return new Yp(e);if(e instanceof ur)return new Qp(e);if(e instanceof dr)return new Xp(e);if(e instanceof or)return new Jp(e);if(e instanceof sr)return new qp(e);if(e instanceof cr)return new em(e);if(e instanceof ar)return new Kp(e);if(uo(e,1))return new tm(e);throw new pd(e)}),b.ds=(function(e,t){return this.i2(e,t)}),new T().i(wf,`scala.collection.mutable.ArraySeq$`,{et:1,a:1,aS:1,aQ:1,aR:1,aV:1});var Tf;function Ef(){return Tf||=new wf,Tf}function Df(e){this.au=null,this.av=null,this.eK=null,this.eL=!1,ru(this,e,$())}b=Df.prototype=new au,b.constructor=Df,b.gm=(function(){return this.eL||=(this.eK=this.p(`flex`),!0),this.eK}),new T().i(Df,`com.raquo.laminar.defs.styles.StyleProps$$anon$28`,{cp:1,X:1,t:1,V:1,W:1,aq:1,cu:1});function Of(e){this.au=null,this.av=null,this.eQ=null,this.eR=!1,ru(this,e,$())}b=Of.prototype=new au,b.constructor=Of,b.cm=(function(){return this.eR||=(this.eQ=Ds(this),!0),this.eQ}),new T().i(Of,`com.raquo.laminar.defs.styles.StyleProps$$anon$5`,{cs:1,X:1,t:1,V:1,W:1,ar:1,as:1});function kf(){}b=kf.prototype=new $u,b.constructor=kf;function Af(){}Af.prototype=b;function jf(e){return e.aI()+`(<not computed>)`}function Mf(){}b=Mf.prototype=new C,b.constructor=Mf;function Nf(){}Nf.prototype=b;var X=class e extends hu{constructor(e){super(),this.y=null,this.y=e,N(this,null,null,!0,!0)}bA(){return Bn(this.y)}E(){return`JavaScriptException`}C(){return 1}D(e){return e===0?this.y:M().ij(e)}a8(){return new Rd(this)}f(){return F().cl(this,1744042595,!0)}d(t){return this===t||t instanceof e&&A().z(this.y,t.y)}};new T().i(X,`scala.scalajs.js.JavaScriptException`,{bx:1,P:1,L:1,r:1,a:1,H:1,c:1});function Pf(e,t){e.dw()!==void 0&&e.dh(Ir().gC()),e.gA(t)}function Ff(e){var t=e.dw();if(t===void 0){e.dh(Ir().gC());var n=e.dp();Pf(e,n);var r=n}else var r=t;return r}function If(e,t,n){Rf(e,new Ud(t),n)}function Lf(e,t,n){Rf(e,new Hd(t),n)}function Rf(e,t,n){Pf(e,t);var r=t.gy(),i=!1;i=!1,e.cf(!1);for(var a=e.bz(),o=0;o<(a.length|0);){var s=a[o];o=1+o|0,s.bD(t),r&&!i&&(i=!0)}for(var c=e.bB(),l=0;l<(c.length|0);){var u=c[l];l=1+l|0,u.iI(t,n),r&&!i&&(i=!0)}e.cf(!0);var d=e.dx();if(d!==void 0){for(var f=0,p=d.length|0;f<p;)d[f].a5(),f=1+f|0;d.length=0}r&&!i&&t.a6(new H((e=>{I().a1(e)})),new H((e=>void 0)))}function zf(e,t){typeof console<`u`&&(e.fy&&console.error?console.error(t):console.log(t))}function Bf(e){this.fy=!1,this.ba=null,this.fy=e,new sd,this.ba=``}b=Bf.prototype=new Af,b.constructor=Bf,b.iq=(function(e){for(var t=e;t!==``;){var n=t.indexOf(`
`)|0;if(n<0)this.ba=``+this.ba+t,t=``;else{var r=this.ba,i=t;zf(this,``+r+i.substring(0,n)),this.ba=``;var a=t,o=1+n|0;t=a.substring(o)}}}),new T().i(Bf,`java.lang.JSConsoleBasedPrintStream`,{dq:1,dd:1,dc:1,aE:1,aC:1,aG:1,aD:1,aF:1});function Vf(e,t,n){for(var r=n,i=t;;)if(i<=0||r.c())return r;else{var a=i-1|0,o=r.K();i=a,r=o}}function Hf(){this.bk=null}b=Hf.prototype=new Nf,b.constructor=Hf;function Uf(){}Uf.prototype=b,b.h=(function(){return this.bk}),b.d=(function(e){return this===e}),b.f=(function(){return Jn(this)});function Wf(e){this.au=null,this.av=null,this.eS=null,this.eT=!1,ru(this,e,$())}b=Wf.prototype=new au,b.constructor=Wf,b.cm=(function(){return this.eT||=(this.eS=Ds(this),!0),this.eS}),new T().i(Wf,`com.raquo.laminar.defs.styles.StyleProps$$anon$7`,{ct:1,X:1,t:1,V:1,W:1,ar:1,as:1,cx:1,aq:1});function Gf(){}b=Gf.prototype=new _f,b.constructor=Gf;function Kf(){}Kf.prototype=b,b.h=(function(){return jf(this)});function qf(){this.bk=null,this.bk=`Any`,$()}b=qf.prototype=new Uf,b.constructor=qf,b.gM=(function(){return pr.l()}),b.gB=(function(e){return new w(e)}),new T().i(qf,`scala.reflect.ManifestFactory$AnyManifest$`,{eF:1,bs:1,br:1,a:1,bt:1,bo:1,c:1,bp:1,bq:1});var Jf;function Yf(){return Jf||=new qf,Jf}function Xf(){this.bk=null,this.bk=`Object`,$()}b=Xf.prototype=new Uf,b.constructor=Xf,b.gM=(function(){return pr.l()}),b.gB=(function(e){return new w(e)}),new T().i(Xf,`scala.reflect.ManifestFactory$ObjectManifest$`,{eG:1,bs:1,br:1,a:1,bt:1,bo:1,c:1,bp:1,bq:1});var Zf;function Qf(){return Zf||=new Xf,Zf}function $f(e,t){this.e7=null,this.e6=!1,this.e8=null,this.cJ=0,this.e4=null,this.e5=null,this.eb=!1,this.cK=null,this.e9=null,this.ea=0,this.e9=t,this.e7=void 0,Uc(this),this.cJ=0,Au(this),this.cK=void 0,this.ea=1,Pf(this,e)}b=$f.prototype=new C,b.constructor=$f,b.bC=(function(){return this.e7}),b.h=(function(){return Dr(this)}),b.du=(function(){return this.e6}),b.dx=(function(){return this.e8}),b.cf=(function(e){this.e6=e}),b.dy=(function(e){this.e8=e}),b.gG=(function(){}),b.d=(function(e){return this===e}),b.f=(function(){return Jn(this)}),b.dg=(function(){return this.cJ}),b.dh=(function(e){this.cJ=e}),b.co=(function(){return this}),b.gF=(function(){Jd(this)}),b.bz=(function(){return this.e4}),b.bB=(function(){return this.e5}),b.gV=(function(){return this.eb}),b.ct=(function(e){this.eb=e}),b.ga=(function(e){this.e4=e}),b.gb=(function(e){this.e5=e}),b.dw=(function(){return this.cK}),b.gA=(function(e){this.cK=e}),b.cp=(function(){return Ff(this)}),b.gT=(function(){return this.ea}),b.dp=(function(){return Ff(this)}),b.gH=(function(){}),b.by=(function(){return this.e9.a5()+`.signal`}),new T().i($f,`com.raquo.airstream.state.VarSignal`,{c1:1,a6:1,U:1,ai:1,ak:1,a7:1,al:1,am:1,an:1,bX:1});function Z(e,t){return e===t?!0:ep(t)&&t.dm(e)?e.cn(t):!1}function ep(e){return!!(e&&e.$classData&&e.$classData.n.g)}function tp(e){e.cB=e.aa!==null,e.bM=-1}function np(e){if(Iu(e.aa),e.cB){var t=e.aa.dg();t!==e.bM&&rp(e,e.dp(),t)}}function rp(e,t,n){Pf(e,t),e.bM=n}function ip(e,t,n){e.cB&&(e.bM=e.aa.dg())}function ap(e){Nu(e.aa,e,!1),Jd(e)}function op(e){Kc(e.aa,e)}function sp(e,t,n){this.dQ=null,this.dP=!1,this.dR=null,this.cz=0,this.dN=null,this.dO=null,this.dT=!1,this.cA=null,this.cB=!1,this.bM=0,this.aa=null,this.cC=null,this.cD=null,this.dS=0,this.aa=e,this.cC=t,this.cD=n,this.dQ=void 0,Uc(this),this.cz=0,Au(this),this.cA=void 0,tp(this),this.dS=1+e.gT()|0}b=sp.prototype=new C,b.constructor=sp,b.bC=(function(){return this.dQ}),b.by=(function(){return Er(this)}),b.h=(function(){return Dr(this)}),b.du=(function(){return this.dP}),b.dx=(function(){return this.dR}),b.cf=(function(e){this.dP=e}),b.dy=(function(e){this.dR=e}),b.d=(function(e){return this===e}),b.f=(function(){return Jn(this)}),b.dg=(function(){return this.cz}),b.dh=(function(e){this.cz=e}),b.co=(function(){return this}),b.bz=(function(){return this.dN}),b.bB=(function(){return this.dO}),b.gV=(function(){return this.dT}),b.ct=(function(e){this.dT=e}),b.ga=(function(e){this.dN=e}),b.gb=(function(e){this.dO=e}),b.dw=(function(){return this.cA}),b.gA=(function(e){this.cA=e}),b.cp=(function(){return Ff(this)}),b.gH=(function(){np(this)}),b.gF=(function(){ap(this)}),b.gG=(function(){op(this)}),b.gT=(function(){return this.dS}),b.iI=(function(e,t){ip(this,e,t),e.a6(new H((e=>{var n=this.cD;if(n.c())Lf(this,e,t);else{var r=n.n();try{var i=new Ud(r.aH(e,new H((e=>null))))}catch(e){var a=e instanceof P?e:new X(e);matchResult1:{var i,o=xs().cq(a);if(!o.c()){var i=new Hd(o.n());break matchResult1}throw a instanceof X?a.y:a}}i.a6(new H((e=>(n=>{Lf(this,new Wd(n,e),t)}))(e)),new H((e=>(n=>{n===null?Lf(this,e,t):n.c()||If(this,n.n(),t)}))(e)))}})),new H((n=>{Rf(this,e.dv(this.cC),t)})))}),b.dp=(function(){var e=this.aa.cp().dv(this.cC);return e.a6(new H((t=>{var n=this.cD;if(n.c())return e;var r=n.n();try{var i=new Ud(r.aH(t,new H((e=>null))))}catch(e){var a=e instanceof P?e:new X(e);matchResult1:{var i,o=xs().cq(a);if(!o.c()){var i=new Hd(o.n());break matchResult1}throw a instanceof X?a.y:a}}return i.a6(new H((e=>(t=>new Hd(new Wd(t,e))))(t)),new H((t=>{if(t===null)return e;var n=t.c()?q():new J(new Ud(t.n()));return n.c()?e:n.n()})))})),new H((t=>e)))}),new T().i(sp,`com.raquo.airstream.misc.MapSignal`,{bO:1,a6:1,U:1,ai:1,ak:1,a7:1,al:1,am:1,an:1,aj:1,bC:1,bD:1});function cp(){}b=cp.prototype=new _f,b.constructor=cp;function lp(){}lp.prototype=b,b.aH=(function(e,t){return Ec(this,e,t)}),b.gx=(function(e){return Cu(this,e)}),b.c=(function(){return wu(this)}),b.cn=(function(e){return Tu(this,e)}),b.dm=(function(e){return!0}),b.d=(function(e){return Z(this,e)}),b.f=(function(){return F().gN(this)}),b.h=(function(){return vd(this)}),b.ap=(function(e){return this.gx(e|0)});function up(){}b=up.prototype=new Kf,b.constructor=up;function dp(){}dp.prototype=b;function fp(e){return!!(e&&e.$classData&&e.$classData.n.m)}function pp(e){return!!(e&&e.$classData&&e.$classData.n.a3)}function mp(e,t){return e.bh=t,e}function hp(){this.bh=null}b=hp.prototype=new dp,b.constructor=hp;function gp(){}gp.prototype=b,b.i=(function(e){return this.bh.i(e)}),b.e=(function(){return this.bh.e()}),b.c=(function(){return this.bh.c()});function _p(){this.eB=null,this.eC=!1,this.el=null,this.em=!1,this.eh=null,this.ei=!1,this.eF=null,this.eG=!1,this.ex=null,this.ey=!1,this.ev=null,this.ew=!1,this.ez=null,this.eA=!1,this.ej=null,this.ek=!1,this.en=null,this.eo=!1,this.ep=null,this.eq=!1,this.er=null,this.es=!1,this.et=null,this.eu=!1,this.gZ=null,this.eg=null,this.gY=null,this.eD=null,this.eE=!1,Li(this),Mi(this),Ai(this),ji(this)}b=_p.prototype=new C,b.constructor=_p,b.iM=(function(){return this.eC||=(this.eB=Us(new Ws,`p`,!1),!0),this.eB}),b.dr=(function(){return this.em||=(this.el=Us(new Ws,`div`,!1),!0),this.el}),b.hx=(function(){return this.ei||=(this.eh=new Ps(`checked`,Ii().eH),!0),this.eh}),b.dD=(function(){return this.eG||=(this.eF=new Ps(`value`,Ii().b8),!0),this.eF}),b.iH=(function(){return this.ey||=(this.ex=new ks(`click`),!0),this.ex}),b.iG=(function(){return this.ew||=(this.ev=new ks(`change`),!0),this.ev}),b.ck=(function(){return this.eA||=(this.ez=new ks(`input`),!0),this.ez}),b.ge=(function(){return this.ek||=(this.ej=new Df(`display`),!0),this.ej}),b.gn=(function(){return this.eo||=(this.en=new Xd(`flex-direction`),!0),this.en}),b.hY=(function(){return this.eq||=(this.ep=new Zd(`flex-wrap`),!0),this.ep}),b.gs=(function(){return this.es||=(this.er=new Of(`gap`),!0),this.er}),b.iy=(function(){return this.eu||=(this.et=new Wf(`max-width`),!0),this.et}),b.ja=(function(){return this.eE||=(this.eD=new eu(this),!0),this.eD}),new T().i(_p,`com.raquo.laminar.api.package$$anon$1`,{ce:1,cy:1,ci:1,cn:1,cm:1,co:1,ck:1,cc:1,c8:1,cb:1,ap:1,at:1,ao:1,c9:1});function vp(e){this.bh=null,mp(this,e)}b=vp.prototype=new gp,b.constructor=vp,b.a7=(function(e){var t=this.e();return t===e?0:t<e?-1:1}),b.t=(function(){return this.e()}),b.g=(function(){return new yf(this)}),b.b2=(function(){return`IndexedSeqView`}),new T().i(vp,`scala.collection.IndexedSeqView$Id`,{e7:1,eh:1,e0:1,e1:1,l:1,b:1,d:1,j:1,i:1,h:1,a:1,ek:1,k:1,eg:1,o:1,e6:1});function yp(){}b=yp.prototype=new lp,b.constructor=yp;function bp(){}bp.prototype=b;function xp(e,t){return!Cp(t)||e.e()===t.e()}function Sp(e,t){if(Cp(t)){if(e===t)return!0;var n=e.e(),r=n===t.e();if(r){var i=0,a=e.dl(),o=t.dl(),s=a<o?a:o,c=n>>31,l=s>>31,u=s<<1,d=s>>>31|0|l<<1;if(c===d?n>>>0>u>>>0:c>d)var f=s;else var f=n;for(;i<f&&r;)r=A().z(e.i(i),t.i(i)),i=1+i|0;if(i<n&&r)for(var p=e.g().cc(i),m=t.g().cc(i);r&&p.o();)r=A().z(p.k(),m.k())}return r}return Tu(e,t)}function Cp(e){return!!(e&&e.$classData&&e.$classData.n.u)}function wp(){}b=wp.prototype=new lp,b.constructor=wp;function Tp(){}Tp.prototype=b;function Q(e){this.c6=null,this.c6=e}b=Q.prototype=new C,b.constructor=Q,b.dm=(function(e){return xp(this,e)}),b.cn=(function(e){return Sp(this,e)}),b.dl=(function(){return Jo().fR}),b.g=(function(){return new yf(new vp(this))}),b.a7=(function(e){var t=this.e();return t===e?0:t<e?-1:1}),b.t=(function(){return this.e()}),b.d=(function(e){return Z(this,e)}),b.f=(function(){return F().gN(this)}),b.h=(function(){return vd(this)}),b.c=(function(){return wu(this)}),b.aH=(function(e,t){return Ec(this,e,t)}),b.V=(function(e){zo(this,e)}),b.aX=(function(e,t,n,r){return Vo(this,e,t,n,r)}),b.e=(function(){return this.c6.length|0}),b.i=(function(e){return this.c6[e]}),b.aI=(function(){return`WrappedVarArgs`}),b.ap=(function(e){return Cu(this,e|0)}),b.b=(function(e){return this.i(e|0)}),new T().i(Q,`scala.scalajs.runtime.WrappedVarArgs`,{by:1,u:1,b:1,d:1,j:1,i:1,h:1,v:1,e:1,f:1,k:1,c:1,g:1,x:1,w:1,o:1,m:1,J:1,y:1,p:1,q:1,a:1});function Ep(){}b=Ep.prototype=new Tp,b.constructor=Ep;function Dp(){}Dp.prototype=b,b.g3=(function(e){return Dc(this,e)});function Op(){}b=Op.prototype=new bp,b.constructor=Op;function kp(){}kp.prototype=b,b.a7=(function(e){var t=this.e();return t===e?0:t<e?-1:1}),b.t=(function(){return this.e()}),b.b2=(function(){return`IndexedSeq`}),b.dm=(function(e){return xp(this,e)}),b.cn=(function(e){return Sp(this,e)}),b.aI=(function(){return`ArraySeq`}),b.dl=(function(){return 2147483647});function Ap(){}b=Ap.prototype=new Tp,b.constructor=Ap;function jp(){}jp.prototype=b,b.a7=(function(e){var t=this.e();return t===e?0:t<e?-1:1}),b.t=(function(){return this.e()}),b.b2=(function(){return`IndexedSeq`}),b.aI=(function(){return`ArraySeq`}),b.d=(function(e){return e instanceof Ap&&go().b1(this.U())!==go().b1(e.U())?!1:Z(this,e)});function Mp(e){this.ax=null,this.ax=e}b=Mp.prototype=new kp,b.constructor=Mp,b.e=(function(){return this.ax.a.length}),b.bw=(function(e){return this.ax.a[e]}),b.f=(function(){var e=F();return e.s(this.ax,e.q)}),b.d=(function(e){return e instanceof Mp?k().gk(this.ax,e.ax):Z(this,e)}),b.g=(function(){return new Y(this.ax)}),b.i=(function(e){return this.bw(e)}),b.b=(function(e){return this.bw(e|0)}),new T().i(Mp,`scala.collection.immutable.ArraySeq$ofBoolean`,{aZ:1,I:1,z:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,v:1,x:1,w:1,o:1,m:1,J:1,u:1,p:1,q:1,y:1,N:1,a:1});function Np(e){this.ay=null,this.ay=e}b=Np.prototype=new kp,b.constructor=Np,b.e=(function(){return this.ay.a.length}),b.bo=(function(e){return this.ay.a[e]}),b.f=(function(){var e=F();return e.s(this.ay,e.q)}),b.d=(function(e){return e instanceof Np?k().gf(this.ay,e.ay):Z(this,e)}),b.g=(function(){return new Y(this.ay)}),b.i=(function(e){return this.bo(e)}),b.b=(function(e){return this.bo(e|0)}),new T().i(Np,`scala.collection.immutable.ArraySeq$ofByte`,{b0:1,I:1,z:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,v:1,x:1,w:1,o:1,m:1,J:1,u:1,p:1,q:1,y:1,N:1,a:1});function Pp(e){this.ai=null,this.ai=e}b=Pp.prototype=new kp,b.constructor=Pp,b.e=(function(){return this.ai.a.length}),b.bp=(function(e){return this.ai.a[e]}),b.f=(function(){var e=F();return e.s(this.ai,e.q)}),b.d=(function(e){return e instanceof Pp?k().gg(this.ai,e.ai):Z(this,e)}),b.g=(function(){return new Y(this.ai)}),b.aX=(function(e,t,n,r){return new Jp(this.ai).aX(e,t,n,r)}),b.i=(function(e){return $n(this.bp(e))}),b.b=(function(e){return $n(this.bp(e|0))}),new T().i(Pp,`scala.collection.immutable.ArraySeq$ofChar`,{b1:1,I:1,z:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,v:1,x:1,w:1,o:1,m:1,J:1,u:1,p:1,q:1,y:1,N:1,a:1});function Fp(e){this.az=null,this.az=e}b=Fp.prototype=new kp,b.constructor=Fp,b.e=(function(){return this.az.a.length}),b.bq=(function(e){return this.az.a[e]}),b.f=(function(){var e=F();return e.s(this.az,e.q)}),b.d=(function(e){if(e instanceof Fp){var t=this.az,n=e.az;if(t===n)return!0;if(t.a.length===n.a.length){for(var r=0;r<t.a.length&&t.a[r]===n.a[r];)r=1+r|0;return r>=t.a.length}return!1}return Z(this,e)}),b.g=(function(){return new Y(this.az)}),b.i=(function(e){return this.bq(e)}),b.b=(function(e){return this.bq(e|0)}),new T().i(Fp,`scala.collection.immutable.ArraySeq$ofDouble`,{b2:1,I:1,z:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,v:1,x:1,w:1,o:1,m:1,J:1,u:1,p:1,q:1,y:1,N:1,a:1});function Ip(e){this.aA=null,this.aA=e}b=Ip.prototype=new kp,b.constructor=Ip,b.e=(function(){return this.aA.a.length}),b.br=(function(e){return this.aA.a[e]}),b.f=(function(){var e=F();return e.s(this.aA,e.q)}),b.d=(function(e){if(e instanceof Ip){var t=this.aA,n=e.aA;if(t===n)return!0;if(t.a.length===n.a.length){for(var r=0;r<t.a.length&&t.a[r]===n.a[r];)r=1+r|0;return r>=t.a.length}return!1}return Z(this,e)}),b.g=(function(){return new Y(this.aA)}),b.i=(function(e){return this.br(e)}),b.b=(function(e){return this.br(e|0)}),new T().i(Ip,`scala.collection.immutable.ArraySeq$ofFloat`,{b3:1,I:1,z:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,v:1,x:1,w:1,o:1,m:1,J:1,u:1,p:1,q:1,y:1,N:1,a:1});function Lp(e){this.aB=null,this.aB=e}b=Lp.prototype=new kp,b.constructor=Lp,b.e=(function(){return this.aB.a.length}),b.bs=(function(e){return this.aB.a[e]}),b.f=(function(){var e=F();return e.s(this.aB,e.q)}),b.d=(function(e){return e instanceof Lp?k().gh(this.aB,e.aB):Z(this,e)}),b.g=(function(){return new Y(this.aB)}),b.i=(function(e){return this.bs(e)}),b.b=(function(e){return this.bs(e|0)}),new T().i(Lp,`scala.collection.immutable.ArraySeq$ofInt`,{b4:1,I:1,z:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,v:1,x:1,w:1,o:1,m:1,J:1,u:1,p:1,q:1,y:1,N:1,a:1});function Rp(e){this.aC=null,this.aC=e}b=Rp.prototype=new kp,b.constructor=Rp,b.e=(function(){return this.aC.a.length>>>1|0}),b.bt=(function(e){var t=this.aC.a,n=e<<1;return S(t[n],t[n+1|0])}),b.f=(function(){var e=F();return e.s(this.aC,e.q)}),b.d=(function(e){return e instanceof Rp?k().gi(this.aC,e.aC):Z(this,e)}),b.g=(function(){return new Y(this.aC)}),b.i=(function(e){return this.bt(e)}),b.b=(function(e){return this.bt(e|0)}),new T().i(Rp,`scala.collection.immutable.ArraySeq$ofLong`,{b5:1,I:1,z:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,v:1,x:1,w:1,o:1,m:1,J:1,u:1,p:1,q:1,y:1,N:1,a:1});function zp(e){this.aD=null,this.aD=e}b=zp.prototype=new kp,b.constructor=zp,b.e=(function(){return this.aD.a.length}),b.i=(function(e){return this.aD.a[e]}),b.f=(function(){var e=F();return e.s(this.aD,e.q)}),b.d=(function(e){return e instanceof zp?To().gl(this.aD,e.aD):Z(this,e)}),b.g=(function(){return new Y(this.aD)}),b.b=(function(e){return this.i(e|0)}),new T().i(zp,`scala.collection.immutable.ArraySeq$ofRef`,{b6:1,I:1,z:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,v:1,x:1,w:1,o:1,m:1,J:1,u:1,p:1,q:1,y:1,N:1,a:1});function Bp(e){this.aE=null,this.aE=e}b=Bp.prototype=new kp,b.constructor=Bp,b.e=(function(){return this.aE.a.length}),b.bu=(function(e){return this.aE.a[e]}),b.f=(function(){var e=F();return e.s(this.aE,e.q)}),b.d=(function(e){return e instanceof Bp?k().gj(this.aE,e.aE):Z(this,e)}),b.g=(function(){return new Y(this.aE)}),b.i=(function(e){return this.bu(e)}),b.b=(function(e){return this.bu(e|0)}),new T().i(Bp,`scala.collection.immutable.ArraySeq$ofShort`,{b7:1,I:1,z:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,v:1,x:1,w:1,o:1,m:1,J:1,u:1,p:1,q:1,y:1,N:1,a:1});function Vp(e){this.aV=null,this.aV=e}b=Vp.prototype=new kp,b.constructor=Vp,b.e=(function(){return this.aV.a.length}),b.bv=(function(e){}),b.f=(function(){var e=F();return e.s(this.aV,e.q)}),b.d=(function(e){return e instanceof Vp?this.aV.a.length===e.aV.a.length:Z(this,e)}),b.g=(function(){return new Y(this.aV)}),b.i=(function(e){this.bv(e)}),b.b=(function(e){this.bv(e|0)}),new T().i(Vp,`scala.collection.immutable.ArraySeq$ofUnit`,{b8:1,I:1,z:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,v:1,x:1,w:1,o:1,m:1,J:1,u:1,p:1,q:1,y:1,N:1,a:1});function Hp(e,t,n,r){for(var i=r,a=n;;)if(a===t)return!i.c()|0;else{if(!i.c()){var o=1+a|0,s=i.K();a=o,i=s;continue}return-1}}function Up(e,t,n){for(var r=n,i=t;;)if(i===r)return!0;else{var a=i.c(),o=r.c();if(!(a||o)&&A().z(i.W(),r.W())){var s=i.K(),c=r.K();i=s,r=c;continue}return a&&o}}function Wp(){}b=Wp.prototype=new bp,b.constructor=Wp;function Gp(){}Gp.prototype=b,b.gx=(function(e){return Dd(this,e)}),b.i=(function(e){return Od(this,e)}),b.cn=(function(e){return kd(this,e)}),b.b2=(function(){return`LinearSeq`}),b.g=(function(){return new jd(this)}),b.hc=(function(e){if(this.c())return e;if(e.c())return this;for(var t=new nm(e.W(),this),n=t,r=e.K();!r.c();){var i=new nm(r.W(),this);n.bj=i,n=i,r=r.K()}return t}),b.c=(function(){return this===$()}),b.gJ=(function(e){if(e instanceof Wp)return this.hc(e);if(e.t()===0)return this;var t=e.g();if(t.o()){for(var n=new nm(t.k(),this),r=n;t.o();){var i=new nm(t.k(),this);r.bj=i,r=i}return n}return this}),b.V=(function(e){for(var t=this;!t.c();)e.b(t.W()),t=t.K()}),b.e=(function(){for(var e=this,t=0;!e.c();)t=1+t|0,e=e.K();return t}),b.a7=(function(e){return e<0?1:Hp(this,e,0,this)}),b.aI=(function(){return`List`}),b.d=(function(e){return e instanceof Wp?Up(this,this,e):Z(this,e)}),b.hN=(function(e){return Vf(this,e,this)}),b.ap=(function(e){return Dd(this,e|0)}),b.b=(function(e){return Od(this,e|0)});function Kp(e){this.aj=null,this.aj=e}b=Kp.prototype=new jp,b.constructor=Kp,b.e=(function(){return this.aj.a.length}),b.bw=(function(e){return this.aj.a[e]}),b.f=(function(){var e=F();return e.s(this.aj,e.q)}),b.d=(function(e){return e instanceof Kp?k().gk(this.aj,e.aj):Ap.prototype.d.call(this,e)}),b.g=(function(){return new Y(this.aj)}),b.U=(function(){return this.aj}),b.i=(function(e){return this.bw(e)}),b.b=(function(e){return this.bw(e|0)}),new T().i(Kp,`scala.collection.mutable.ArraySeq$ofBoolean`,{bb:1,K:1,A:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,E:1,s:1,B:1,G:1,F:1,o:1,m:1,D:1,C:1,p:1,q:1,a:1});function qp(e){this.ak=null,this.ak=e}b=qp.prototype=new jp,b.constructor=qp,b.e=(function(){return this.ak.a.length}),b.bo=(function(e){return this.ak.a[e]}),b.f=(function(){var e=F();return e.s(this.ak,e.q)}),b.d=(function(e){return e instanceof qp?k().gf(this.ak,e.ak):Ap.prototype.d.call(this,e)}),b.g=(function(){return new Y(this.ak)}),b.U=(function(){return this.ak}),b.i=(function(e){return this.bo(e)}),b.b=(function(e){return this.bo(e|0)}),new T().i(qp,`scala.collection.mutable.ArraySeq$ofByte`,{bc:1,K:1,A:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,E:1,s:1,B:1,G:1,F:1,o:1,m:1,D:1,C:1,p:1,q:1,a:1});function Jp(e){this.P=null,this.P=e}b=Jp.prototype=new jp,b.constructor=Jp,b.e=(function(){return this.P.a.length}),b.bp=(function(e){return this.P.a[e]}),b.f=(function(){var e=F();return e.s(this.P,e.q)}),b.d=(function(e){return e instanceof Jp?k().gg(this.P,e.P):Ap.prototype.d.call(this,e)}),b.g=(function(){return new Y(this.P)}),b.aX=(function(e,t,n,r){var i=e.I;t.length!==0&&(i.l=``+i.l+t);var a=this.P.a.length;if(a!==0){if(n===``)i.hk(this.P);else{i.e();var o=this.P.a[0],s=``+Un(o);i.l+=s;for(var c=1;c<a;){i.l=``+i.l+n;var l=this.P.a[c],u=``+Un(l);i.l+=u,c=1+c|0}}}return r.length!==0&&(i.l=``+i.l+r),e}),b.U=(function(){return this.P}),b.i=(function(e){return $n(this.bp(e))}),b.b=(function(e){return $n(this.bp(e|0))}),new T().i(Jp,`scala.collection.mutable.ArraySeq$ofChar`,{bd:1,K:1,A:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,E:1,s:1,B:1,G:1,F:1,o:1,m:1,D:1,C:1,p:1,q:1,a:1});function Yp(e){this.Q=null,this.Q=e}b=Yp.prototype=new jp,b.constructor=Yp,b.e=(function(){return this.Q.a.length}),b.bq=(function(e){return this.Q.a[e]}),b.f=(function(){var e=F();return e.s(this.Q,e.q)}),b.d=(function(e){if(e instanceof Yp){var t=e.Q;if(this.Q===t)return!0;if(this.Q.a.length===t.a.length){for(var n=0;n<this.Q.a.length&&this.Q.a[n]===t.a[n];)n=1+n|0;return n>=this.Q.a.length}return!1}return Ap.prototype.d.call(this,e)}),b.g=(function(){return new Y(this.Q)}),b.U=(function(){return this.Q}),b.i=(function(e){return this.bq(e)}),b.b=(function(e){return this.bq(e|0)}),new T().i(Yp,`scala.collection.mutable.ArraySeq$ofDouble`,{be:1,K:1,A:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,E:1,s:1,B:1,G:1,F:1,o:1,m:1,D:1,C:1,p:1,q:1,a:1});function Xp(e){this.R=null,this.R=e}b=Xp.prototype=new jp,b.constructor=Xp,b.e=(function(){return this.R.a.length}),b.br=(function(e){return this.R.a[e]}),b.f=(function(){var e=F();return e.s(this.R,e.q)}),b.d=(function(e){if(e instanceof Xp){var t=e.R;if(this.R===t)return!0;if(this.R.a.length===t.a.length){for(var n=0;n<this.R.a.length&&this.R.a[n]===t.a[n];)n=1+n|0;return n>=this.R.a.length}return!1}return Ap.prototype.d.call(this,e)}),b.g=(function(){return new Y(this.R)}),b.U=(function(){return this.R}),b.i=(function(e){return this.br(e)}),b.b=(function(e){return this.br(e|0)}),new T().i(Xp,`scala.collection.mutable.ArraySeq$ofFloat`,{bf:1,K:1,A:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,E:1,s:1,B:1,G:1,F:1,o:1,m:1,D:1,C:1,p:1,q:1,a:1});function Zp(e){this.al=null,this.al=e}b=Zp.prototype=new jp,b.constructor=Zp,b.e=(function(){return this.al.a.length}),b.bs=(function(e){return this.al.a[e]}),b.f=(function(){var e=F();return e.s(this.al,e.q)}),b.d=(function(e){return e instanceof Zp?k().gh(this.al,e.al):Ap.prototype.d.call(this,e)}),b.g=(function(){return new Y(this.al)}),b.U=(function(){return this.al}),b.i=(function(e){return this.bs(e)}),b.b=(function(e){return this.bs(e|0)}),new T().i(Zp,`scala.collection.mutable.ArraySeq$ofInt`,{bg:1,K:1,A:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,E:1,s:1,B:1,G:1,F:1,o:1,m:1,D:1,C:1,p:1,q:1,a:1});function Qp(e){this.am=null,this.am=e}b=Qp.prototype=new jp,b.constructor=Qp,b.e=(function(){return this.am.a.length>>>1|0}),b.bt=(function(e){var t=this.am.a,n=e<<1;return S(t[n],t[n+1|0])}),b.f=(function(){var e=F();return e.s(this.am,e.q)}),b.d=(function(e){return e instanceof Qp?k().gi(this.am,e.am):Ap.prototype.d.call(this,e)}),b.g=(function(){return new Y(this.am)}),b.U=(function(){return this.am}),b.i=(function(e){return this.bt(e)}),b.b=(function(e){return this.bt(e|0)}),new T().i(Qp,`scala.collection.mutable.ArraySeq$ofLong`,{bh:1,K:1,A:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,E:1,s:1,B:1,G:1,F:1,o:1,m:1,D:1,C:1,p:1,q:1,a:1});function $p(e){this.an=null,this.an=e}b=$p.prototype=new jp,b.constructor=$p,b.e=(function(){return this.an.a.length}),b.i=(function(e){return this.an.a[e]}),b.f=(function(){var e=F();return e.s(this.an,e.q)}),b.d=(function(e){return e instanceof $p?To().gl(this.an,e.an):Ap.prototype.d.call(this,e)}),b.g=(function(){return new Y(this.an)}),b.U=(function(){return this.an}),b.b=(function(e){return this.i(e|0)}),new T().i($p,`scala.collection.mutable.ArraySeq$ofRef`,{bi:1,K:1,A:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,E:1,s:1,B:1,G:1,F:1,o:1,m:1,D:1,C:1,p:1,q:1,a:1});function em(e){this.ao=null,this.ao=e}b=em.prototype=new jp,b.constructor=em,b.e=(function(){return this.ao.a.length}),b.bu=(function(e){return this.ao.a[e]}),b.f=(function(){var e=F();return e.s(this.ao,e.q)}),b.d=(function(e){return e instanceof em?k().gj(this.ao,e.ao):Ap.prototype.d.call(this,e)}),b.g=(function(){return new Y(this.ao)}),b.U=(function(){return this.ao}),b.i=(function(e){return this.bu(e)}),b.b=(function(e){return this.bu(e|0)}),new T().i(em,`scala.collection.mutable.ArraySeq$ofShort`,{bj:1,K:1,A:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,E:1,s:1,B:1,G:1,F:1,o:1,m:1,D:1,C:1,p:1,q:1,a:1});function tm(e){this.aF=null,this.aF=e}b=tm.prototype=new jp,b.constructor=tm,b.e=(function(){return this.aF.a.length}),b.bv=(function(e){}),b.f=(function(){var e=F();return e.s(this.aF,e.q)}),b.d=(function(e){return e instanceof tm?this.aF.a.length===e.aF.a.length:Ap.prototype.d.call(this,e)}),b.g=(function(){return new Y(this.aF)}),b.U=(function(){return this.aF}),b.i=(function(e){this.bv(e)}),b.b=(function(e){this.bv(e|0)}),new T().i(tm,`scala.collection.mutable.ArraySeq$ofUnit`,{bk:1,K:1,A:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,E:1,s:1,B:1,G:1,F:1,o:1,m:1,D:1,C:1,p:1,q:1,a:1});function nm(e,t){this.db=null,this.bj=null,this.db=e,this.bj=t}b=nm.prototype=new Gp,b.constructor=nm,b.a8=(function(){return new gd(this)}),b.C=(function(){return 2}),b.E=(function(){return`::`}),b.D=(function(e){if(e===0)return this.db;if(e===1)return this.bj;throw od(new U,e)}),b.W=(function(){return this.db}),b.K=(function(){return this.bj}),new T().i(nm,`scala.collection.immutable.$colon$colon`,{el:1,ad:1,z:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,v:1,x:1,w:1,aU:1,a3:1,ba:1,b9:1,p:1,q:1,aW:1,y:1,a:1,aY:1,H:1});function rm(){im=this,$(),$()}b=rm.prototype=new Gp,b.constructor=rm,b.a8=(function(){return new gd(this)}),b.C=(function(){return 0}),b.E=(function(){return`Nil`}),b.D=(function(e){throw od(new U,e)}),b.ie=(function(){throw new dd(`head of empty list`)}),b.jd=(function(){throw new ud(`tail of empty list`)}),b.t=(function(){return 0}),b.g=(function(){return Nl().M}),b.W=(function(){this.ie()}),b.K=(function(){this.jd()}),new T().i(rm,`scala.collection.immutable.Nil$`,{eq:1,ad:1,z:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,v:1,x:1,w:1,aU:1,a3:1,ba:1,b9:1,p:1,q:1,aW:1,y:1,a:1,aY:1,H:1});var im;function $(){return im||=new rm,im}function am(e,t){return e.I=t,e}function om(e){return am(e,new gu),e}function sm(){this.I=null}b=sm.prototype=new Tp,b.constructor=sm,b.g3=(function(e){return Dc(this,e)}),b.g=(function(){return new yf(new vp(this))}),b.a7=(function(e){var t=this.I.e();return t===e?0:t<e?-1:1}),b.b2=(function(){return`IndexedSeq`}),b.e=(function(){return this.I.e()}),b.t=(function(){return this.I.e()}),b.hf=(function(e){var t=this.I,n=``+Un(e);return t.l+=n,this}),b.h=(function(){return this.I.l}),b.c=(function(){return this.I.e()===0}),b.i=(function(e){return $n(this.I.g7(e))}),b.b=(function(e){var t=e|0;return $n(this.I.g7(t))}),b.dk=(function(e){return this.hf(tr(e))}),b.gL=(function(){return this.I.l}),new T().i(sm,`scala.collection.mutable.StringBuilder`,{eA:1,A:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,E:1,s:1,B:1,G:1,F:1,bm:1,bn:1,bl:1,ey:1,o:1,m:1,D:1,C:1,ab:1,a:1});function cm(e,t){return e.aG=t,e}function lm(e){return cm(e,[]),e}function um(){this.aG=null}b=um.prototype=new Dp,b.constructor=um,b.b2=(function(){return`IndexedSeq`}),b.g=(function(){return new yf(new vp(this))}),b.a7=(function(e){var t=this.aG.length|0;return t===e?0:t<e?-1:1}),b.i=(function(e){return this.aG[e]}),b.e=(function(){return this.aG.length|0}),b.t=(function(){return this.aG.length|0}),b.aI=(function(){return`WrappedArray`}),b.gL=(function(){return this}),b.dk=(function(e){return this.aG.push(e),this}),b.b=(function(e){var t=e|0;return this.aG[t]}),new T().i(um,`scala.scalajs.js.WrappedArray`,{eX:1,er:1,A:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,E:1,s:1,B:1,G:1,F:1,bm:1,bn:1,ez:1,eu:1,q:1,p:1,C:1,o:1,m:1,D:1,ew:1,bl:1,a:1}),Sa(new(pf.r()).C([]));