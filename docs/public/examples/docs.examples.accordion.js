var e=Object.defineProperty,t=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r},n=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-accordion-item-collapsed`,{bubbles:!1,cancelable:!1,composed:!1})}},r=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-accordion-item-expanded`,{bubbles:!1,cancelable:!1,composed:!1})}},i=class extends Event{constructor(e){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-accordion-item-trigger`,{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function a(e,t){return new Promise(n=>{function r(i){i.target===e&&(e.removeEventListener(t,r),n())}e.addEventListener(t,r)})}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
async function o(e,t,n){return e.animate(t,n).finished.catch(()=>{})}function s(e){return e=e.toString().toLowerCase(),e.indexOf(`ms`)>-1?parseFloat(e)||0:e.indexOf(`s`)>-1?(parseFloat(e)||0)*1e3:parseFloat(e)||0}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function c(e,t){let n={waitUntilFirstUpdate:!1,...t};return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var l=Object.defineProperty,u=Object.getOwnPropertyDescriptor,d=e=>{throw TypeError(e)},f=(e,t,n,r)=>{for(var i=r>1?void 0:r?u(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&l(t,n,i),i},p=(e,t,n)=>t.has(e)||d(`Cannot `+n),ee=(e,t,n)=>(p(e,t,`read from private field`),n?n.call(e):t.get(e)),te=(e,t,n)=>t.has(e)?d(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),ne=(e,t,n,r)=>(p(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n);
/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const re=globalThis,ie=re.ShadowRoot&&(re.ShadyCSS===void 0||re.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,ae=Symbol(),oe=/* @__PURE__ */ new WeakMap;var se=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==ae)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(ie&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=oe.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&oe.set(t,e))}return e}toString(){return this.cssText}};const ce=e=>new se(typeof e==`string`?e:e+``,void 0,ae),le=(e,...t)=>new se(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,ae),ue=(e,t)=>{if(ie)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=re.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},de=ie?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return ce(t)})(e):e,{is:fe,defineProperty:pe,getOwnPropertyDescriptor:me,getOwnPropertyNames:he,getOwnPropertySymbols:ge,getPrototypeOf:_e}=Object,ve=globalThis,ye=ve.trustedTypes,be=ye?ye.emptyScript:``,xe=ve.reactiveElementPolyfillSupport,Se=(e,t)=>e,Ce={toAttribute(e,t){
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
switch(t){case Boolean:e=e?be:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},we=(e,t)=>!fe(e,t),Te={attribute:!0,type:String,converter:Ce,reflect:!1,useDefault:!1,hasChanged:we};Symbol.metadata??=Symbol(`metadata`),ve.litPropertyMetadata??=/* @__PURE__ */ new WeakMap;var Ee=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Te){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&pe(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=me(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Te}static _$Ei(){if(this.hasOwnProperty(Se(`elementProperties`)))return;let e=_e(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Se(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Se(`properties`))){let e=this.properties,t=[...he(e),...ge(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=/* @__PURE__ */ new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(de(e))}else e!==void 0&&t.push(de(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=/* @__PURE__ */ new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=/* @__PURE__ */ new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=/* @__PURE__ */ new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ue(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?Ce:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?Ce:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??we)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=/* @__PURE__ */ new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=/* @__PURE__ */ new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=/* @__PURE__ */ new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};Ee.elementStyles=[],Ee.shadowRootOptions={mode:`open`},Ee[Se(`elementProperties`)]=/* @__PURE__ */ new Map,Ee[Se(`finalized`)]=/* @__PURE__ */ new Map,xe?.({ReactiveElement:Ee}),(ve.reactiveElementVersions??=[]).push(`2.1.2`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const De=globalThis,Oe=e=>e,ke=De.trustedTypes,Ae=ke?ke.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,je=`$lit$`,Me=`lit$${Math.random().toFixed(9).slice(2)}$`,Ne=`?`+Me,Pe=`<${Ne}>`,Fe=document,Ie=()=>Fe.createComment(``),Le=e=>e===null||typeof e!=`object`&&typeof e!=`function`,Re=Array.isArray,ze=e=>Re(e)||typeof e?.[Symbol.iterator]==`function`,Be=`[ 	
\f\r]`,Ve=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,He=/-->/g,Ue=/>/g,We=RegExp(`>|${Be}(?:([^\\s"'>=/]+)(${Be}*=${Be}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Ge=/'/g,Ke=/"/g,qe=/^(?:script|style|textarea|title)$/i,m=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),Je=Symbol.for(`lit-noChange`),h=Symbol.for(`lit-nothing`),Ye=/* @__PURE__ */ new WeakMap,Xe=Fe.createTreeWalker(Fe,129);function Ze(e,t){if(!Re(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return Ae===void 0?t:Ae.createHTML(t)}const Qe=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=Ve;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===Ve?c[1]===`!--`?o=He:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=We):(qe.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=We):o=Ue:o===We?c[0]===`>`?(o=i??Ve,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?We:c[3]===`"`?Ke:Ge):o===Ke||o===Ge?o=We:o===He||o===Ue?o=Ve:(o=We,i=void 0);let d=o===We&&e[t+1].startsWith(`/>`)?` `:``;a+=o===Ve?n+Pe:l>=0?(r.push(s),n.slice(0,l)+je+n.slice(l)+Me+d):n+Me+(l===-2?t:d)}return[Ze(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]};var $e=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Qe(t,n);if(this.el=e.createElement(l,r),Xe.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=Xe.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(je)){let t=u[o++],n=i.getAttribute(e).split(Me),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?it:r[1]===`?`?at:r[1]===`@`?ot:rt}),i.removeAttribute(e)}else e.startsWith(Me)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(qe.test(i.tagName)){let e=i.textContent.split(Me),t=e.length-1;if(t>0){i.textContent=ke?ke.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],Ie()),Xe.nextNode(),c.push({type:2,index:++a});i.append(e[t],Ie())}}}else if(i.nodeType===8){if(i.data===Ne)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(Me,e+1))!==-1;)c.push({type:7,index:a}),e+=Me.length-1}}a++}}static createElement(e,t){let n=Fe.createElement(`template`);return n.innerHTML=e,n}};function et(e,t,n=e,r){if(t===Je)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=Le(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=et(e,i._$AS(e,t.values),i,r)),t}var tt=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??Fe).importNode(t,!0);Xe.currentNode=r;let i=Xe.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new nt(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new st(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=Xe.nextNode(),a++)}return Xe.currentNode=Fe,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},nt=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=et(this,e,t),Le(e)?e===h||e==null||e===``?(this._$AH!==h&&this._$AR(),this._$AH=h):e!==this._$AH&&e!==Je&&this._(e):e._$litType$===void 0?e.nodeType===void 0?ze(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==h&&Le(this._$AH)?this._$AA.nextSibling.data=e:this.T(Fe.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=$e.createElement(Ze(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new tt(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Ye.get(e.strings);return t===void 0&&Ye.set(e.strings,t=new $e(e)),t}k(t){Re(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(Ie()),this.O(Ie()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=Oe(e).nextSibling;Oe(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},rt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=h,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(/* @__PURE__ */ new String),this.strings=n):this._$AH=h}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=et(this,e,t,0),a=!Le(e)||e!==this._$AH&&e!==Je,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=et(this,r[n+o],t,o),s===Je&&(s=this._$AH[o]),a||=!Le(s)||s!==this._$AH[o],s===h?e=h:e!==h&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},it=class extends rt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===h?void 0:e}},at=class extends rt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==h)}},ot=class extends rt{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=et(this,e,t,0)??h)===Je)return;let n=this._$AH,r=e===h&&n!==h||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==h&&(n===h||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},st=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){et(this,e)}};const ct={M:je,P:Me,A:Ne,C:1,L:Qe,R:tt,D:ze,V:et,I:nt,H:rt,N:at,U:ot,B:it,F:st},lt=De.litHtmlPolyfillSupport;lt?.($e,nt),(De.litHtmlVersions??=[]).push(`3.3.3`);const ut=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new nt(t.insertBefore(Ie(),e),e,void 0,n??{})}return i._$AI(e),i},dt=globalThis
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
;var ft=class extends Ee{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ut(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Je}};ft._$litElement$=!0,ft.finalized=!0,dt.litElementHydrateSupport?.({LitElement:ft});const pt=dt.litElementPolyfillSupport;pt?.({LitElement:ft}),(dt.litElementVersions??=[]).push(`4.2.2`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const mt=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},ht={attribute:!0,type:String,converter:Ce,reflect:!1,hasChanged:we},gt=(e=ht,t,n)=>{
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=/* @__PURE__ */ new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function g(e){return(t,n)=>typeof n==`object`?gt(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function _t(e){return g({...e,state:!0,attribute:!1})}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const vt=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function yt(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return vt(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return vt(n,r,{get(){return a(this)}})}}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var bt=le`
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
`,xt=/;\s+$/;function St(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function Ct(e){let{property:t,value:n,element:r}=e;if(n){let e=r.getAttribute(`style`)||``;e&&(e.match(xt)||(e+=`;`),e+=` `);let i=`${t}: ${n}`;return e.includes(i)?void 0:`${e}${i};`}return null}var wt,Tt=class extends ft{constructor(){super(),te(this,wt,!1),this.initialReflectedProperties=/* @__PURE__ */ new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,t)=>{if(this.internals?.states)try{t?this.internals.states.add(e):this.internals.states.delete(e)}catch(e){if(String(e).includes(`must start with '--'`))console.error(`Your browser implements an outdated version of CustomStateSet. Consider using a polyfill`);else throw e}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error(`Element internals are not supported in your browser. Consider using a polyfill`)}this.customStates.set(`wa-defined`,!0);let e=this.constructor;for(let[t,n]of e.elementProperties)n.default===`inherit`&&n.initial!==void 0&&typeof t==`string`&&this.customStates.set(`initial-${t}-${n.initial}`,!0)}static get styles(){return[bt,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `)),this.didSSR&&this.updateComplete.then(()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `))})}attributeChangedCallback(e,t,n){ee(this,wt)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),ne(this,wt,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll(`slot`).forEach(e=>{e.dispatchEvent(new Event(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(e){if(this.didSSR&&!this.hasUpdated){let t=new Event(`lit-hydration-error`,{bubbles:!0,composed:!0,cancelable:!1});t.error=e,this.dispatchEvent(t)}throw e}}setStyle(e,t){if(this.style)this.style[e]=t;else{let n=Ct({property:St(e),value:t,element:this});n&&this.setAttribute(`style`,n)}}setStyleProperty(e,t){if(this.style)this.style.setProperty(e,t);else{let n=Ct({property:e,value:t,element:this});n&&this.setAttribute(`style`,n)}}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};wt=/* @__PURE__ */ new WeakMap,f([g()],Tt.prototype,`dir`,2),f([g()],Tt.prototype,`lang`,2),f([g({type:Boolean,reflect:!0,attribute:`did-ssr`})],Tt.prototype,`didSSR`,2);const Et=/* @__PURE__ */ new Set,Dt=/* @__PURE__ */ new Map;let Ot,kt=`ltr`,At=`en`;const jt=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(jt){let e=new MutationObserver(Nt);kt=document.documentElement.dir||`ltr`,At=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function Mt(...e){e.map(e=>{let t=e.$code.toLowerCase();Dt.has(t)?Dt.set(t,Object.assign(Object.assign({},Dt.get(t)),e)):Dt.set(t,e),Ot||=e}),Nt()}function Nt(){jt&&(kt=document.documentElement.dir||`ltr`,At=document.documentElement.lang||navigator.language),[...Et.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var Pt=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Et.add(this.host)}hostDisconnected(){Et.delete(this.host)}dir(){return`${this.host.dir||kt}`.toLowerCase()}lang(){let e=`${this.host.lang||At}`.toLowerCase().replace(/_/g,`-`);try{return new Intl.Locale(e),e}catch{return Ot?Ot.$code.toLowerCase():`en`}}getTranslationData(e){let t;try{t=new Intl.Locale(e.replace(/_/g,`-`))}catch{return{locale:void 0,language:``,region:``,primary:void 0,secondary:void 0}}let n=t.language.toLowerCase(),r=t.region?.toLowerCase()??``,i=Dt.get(`${n}-${r}`),a=Dt.get(n);return{locale:t,language:n,region:r,primary:i,secondary:a}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&Ot&&Ot[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(Ot&&Ot[e])i=Ot[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},Ft={$code:`en`,$name:`English`,$dir:`ltr`,allTagsRemoved:`All tags removed`,am:`AM`,autosizeColumn:`Autosize column`,captions:`Captions`,carousel:`Carousel`,chooseDate:`Choose date`,chooseDecade:`Choose decade`,chooseMonth:`Choose month`,chooseTime:`Choose time`,chooseYear:`Choose year`,clearEntry:`Clear entry`,clearFilter:`Clear filter`,clearSort:`Clear sort`,close:`Close`,closeCalendar:`Close calendar`,closeTimeInput:`Close time picker`,collapseRow:`Collapse row`,columnMenu:`Column options`,columnMovedToPosition:(e,t,n)=>`${e} moved to position ${t} of ${n}`,columns:`Columns`,compactPageXOfY:(e,t)=>`${e} of ${t}`,completed:`Completed`,copied:`Copied`,copy:`Copy`,createOption:e=>`Create "${e}"`,currentlyPlaying:`currently playing`,currentValue:`Current value`,date:`Date`,datePickerKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the calendar.`,day:`Day`,dayPeriod:`AM/PM`,decrement:`Decrement`,deselectAllRows:`Deselect all rows`,disabled:`Disabled`,dropFileHere:`Drop file here or click to browse`,dropFilesHere:`Drop files here or click to browse`,empty:`Empty`,endDate:`End date`,enterFullscreen:`Enter fullscreen`,error:`Error`,exitFullscreen:`Exit fullscreen`,expandRow:`Expand row`,filterByColumn:e=>`Filter by ${e}`,filterFrom:`From`,filterMax:`Max`,filterMin:`Min`,filterTo:`To`,firstPage:`First page`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hideColumn:`Hide column`,hidePassword:`Hide password`,hour:`Hour`,incompleteDate:`Enter a valid date.`,increment:`Increment`,jumpBackwardX:e=>`Jump back ${e} pages`,jumpForwardX:e=>`Jump forward ${e} pages`,lastPage:`Last page`,loading:`Loading`,locked:`Locked`,minute:`Minute`,month:`Month`,moreOptions:`More Options`,mute:`Mute`,nextDecade:`Next decade`,nextMonth:`Next month`,nextPage:`Next page`,nextSlide:`Next slide`,nextVideo:`Next Video`,nextYear:`Next year`,noData:`No data`,noOptions:`No options`,noResults:`No matching results`,notCompleted:`Not completed`,now:`Now`,numCharacters:e=>e===1?`1 character`:`${e} characters`,numCharactersRemaining:e=>e===1?`1 character remaining`:`${e} characters remaining`,numOptionsAvailable:e=>e===0?`No options available`:e===1?`1 option available`:`${e} options available`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,numRowsCopied:e=>e===1?`1 row copied`:`${e} rows copied`,numRowsSelected:e=>e===1?`1 row selected`:`${e} rows selected`,optionPosition:(e,t,n)=>`${e}, ${t} of ${n}`,optionsLoadError:`Options could not be loaded`,pageXOfY:(e,t)=>`Page ${e} of ${t}`,pagination:`Pagination`,pause:`Pause`,pauseAnimation:`Pause animation`,pictureInPicture:`Picture in picture`,pinLeft:`Pin left`,pinRight:`Pin right`,play:`Play`,playAnimation:`Play animation`,playbackSpeed:`Playback speed`,playlist:`Playlist`,pm:`PM`,previousDecade:`Previous decade`,previousMonth:`Previous month`,previousPage:`Previous page`,previousSlide:`Previous slide`,previousVideo:`Previous video`,previousYear:`Previous year`,progress:`Progress`,rangeTooLong:e=>e===1?`Select a range no longer than 1 day`:`Select a range no longer than ${e} days`,rangeTooShort:e=>e===1?`Select a range at least 1 day long`:`Select a range at least ${e} days long`,readonly:`Read-only`,remove:`Remove`,resetColumns:`Reset columns`,resize:`Resize`,resizeColumn:`Resize column`,rowsPerPage:`Rows per page`,scrollableRegion:`Scrollable region`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,search:`Search`,second:`Second`,seek:`Seek`,seekProgress:(e,t)=>`${e} of ${t}`,selectAColorFromTheScreen:`Select a color from the screen`,selectAllRows:`Select all rows`,selected:`Selected`,selectedDateLabel:e=>`Selected: ${e}`,selectedRangeLabel:e=>`Selected range: ${e}`,selectGroup:`Select group`,selectionCleared:`Selection cleared`,selectRow:`Select row`,showingNofMRows:(e,t)=>`Showing ${e} of ${t} rows`,showingXtoYofZ:(e,t,n)=>`${e}\u2013${t} of ${n}`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,sortAscending:`Sort ascending`,sortColumn:`Sort column`,sortDescending:`Sort descending`,startDate:`Start date`,steps:`Steps`,stepXOfY:(e,t)=>`Step ${e} of ${t}`,tagAdded:e=>`${e} added`,tagAlreadyAdded:e=>`${e} is already added`,tagInputKeyboardHelp:`Press Backspace or Delete to remove this tag.`,tagRemoved:e=>`${e} removed`,time:`Time`,timeInputKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the time picker.`,today:`Today`,toggleColorFormat:`Toggle color format`,tooFewTags:e=>e===1?`Add at least 1 tag`:`Add at least ${e} tags`,tooManyTags:e=>e===1?`Add no more than 1 tag`:`Add no more than ${e} tags`,unmute:`Unmute`,unpin:`Unpin`,unpinColumn:`Unpin column`,videoPlayer:`Video player`,volume:`Volume`,year:`Year`,zoomIn:`Zoom in`,zoomOut:`Zoom out`}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;Mt(Ft);var It=Ft,Lt=class extends Pt{lang(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||`en`:super.lang()}};Mt(It);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Rt=le`
  @layer wa-component {
    :host {
      --spacing: var(--wa-space-m);
      --show-duration: var(--wa-transition-normal);
      --hide-duration: var(--wa-transition-normal);
      --easing: var(--wa-transition-easing);

      display: block;
    }

    :host(:not(:first-child)) {
      border-top: var(--wa-panel-border-width) var(--wa-panel-border-style) var(--wa-color-surface-border);
    }

    :host([appearance='filled']) {
      background-color: var(--wa-color-neutral-fill-quiet);
    }

    :host([appearance='filled']:not(:first-child)) {
      margin-block-start: var(--wa-panel-border-width);
      border-top: none;
    }

    [part~='heading'] {
      margin: 0;
      font: inherit;
    }

    [part~='button'] {
      display: flex;
      align-items: center;
      gap: var(--spacing);
      padding: var(--spacing);
      width: 100%;
      background: none;
      border: none;
      cursor: pointer;
      text-align: start;
      color: var(--wa-color-text-normal);
      font: inherit;
      font-weight: var(--wa-font-weight-semibold);

      &:focus {
        outline: none;
      }

      &:focus-visible {
        outline: var(--wa-focus-ring);
        /* Inset by the full ring width + offset so the parent's overflow:hidden doesn't clip it */
        outline-offset: calc(0px - var(--wa-focus-ring-width) - var(--wa-focus-ring-offset));
      }
    }

    /* Icon at end (default) */
    :host([icon-placement='end']) [part~='button'] {
      justify-content: space-between;
    }

    /* Icon at start */
    :host([icon-placement='start']) [part~='button'] {
      flex-direction: row-reverse;
      justify-content: flex-end;
    }

    :host([disabled]) {
      opacity: 0.5;
      cursor: not-allowed;
    }

    :host([disabled]) [part~='button'] {
      cursor: not-allowed;
      pointer-events: none;
    }

    :host(:first-child) [part~='button'] {
      border-top-left-radius: var(--wa-panel-border-radius);
      border-top-right-radius: var(--wa-panel-border-radius);
    }

    :host(:last-child:not([expanded])) [part~='button'] {
      border-bottom-left-radius: var(--wa-panel-border-radius);
      border-bottom-right-radius: var(--wa-panel-border-radius);
    }

    [part~='icon'] {
      flex: 0 0 auto;
      display: flex;
      align-items: center;
      color: var(--wa-color-text-quiet);
      transition: rotate var(--hide-duration) var(--easing);
    }

    :host([expanded]) [part~='icon'] {
      rotate: 90deg;
      transition-duration: var(--show-duration);
    }

    :host([expanded]:dir(rtl)) [part~='icon'] {
      rotate: -90deg;
    }

    .body {
      overflow: hidden;
      color: var(--wa-color-text-quiet);
    }

    :host([expanded]) .body:not(.animating) {
      overflow: visible;
    }

    .content {
      display: block;
      padding: 0 var(--spacing) var(--spacing);
    }
  }
`;
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const zt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Bt=e=>(...t)=>({_$litDirective$:e,values:t});var Vt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Ht=Bt(class extends Vt{constructor(e){if(super(e),e.type!==zt.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=/* @__PURE__ */ new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return Je}});
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var _=class extends Tt{constructor(){super(...arguments),this.animationGeneration=0,this.localize=new Lt(this),this.isAnimating=!1,this.label=``,this.expanded=!1,this.disabled=!1,this.headingLevel=`3`,this.iconPlacement=`end`,this.appearance=`outlined`}firstUpdated(e){super.firstUpdated(e),this.body.style.height=this.expanded?`auto`:`0`}updated(){this.customStates.set(`animating`,this.isAnimating)}handleTriggerClick(){this.disabled||this.dispatchEvent(new i({item:this}))}handleTriggerKeyDown(e){(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this.handleTriggerClick())}async handleExpandedChange(){this.animationGeneration++;let e=this.animationGeneration;if(this.expanded){this.isAnimating=!0;let t=s(getComputedStyle(this.body).getPropertyValue(`--show-duration`)||`200ms`),n=getComputedStyle(this.body).getPropertyValue(`--easing`)||`ease`;if(await o(this.body,[{height:`0`,opacity:`0`},{height:`${this.body.scrollHeight}px`,opacity:`1`}],{duration:t,easing:n}),this.animationGeneration!==e)return;this.body.style.height=`auto`,this.isAnimating=!1,this.dispatchEvent(new r)}else{this.isAnimating=!0;let t=s(getComputedStyle(this.body).getPropertyValue(`--hide-duration`)||`200ms`),r=getComputedStyle(this.body).getPropertyValue(`--easing`)||`ease`;if(await o(this.body,[{height:`${this.body.scrollHeight}px`,opacity:`1`},{height:`0`,opacity:`0`}],{duration:t,easing:r}),this.animationGeneration!==e)return;this.body.style.height=`0`,this.isAnimating=!1,this.dispatchEvent(new n)}}async expand(){if(!(this.expanded||this.disabled))return this.expanded=!0,a(this,`wa-accordion-item-expanded`)}async collapse(){if(this.expanded&&!this.disabled)return this.expanded=!1,a(this,`wa-accordion-item-collapsed`)}async toggle(){return this.expanded?this.collapse():this.expand()}focus(e){this.triggerButton?.focus(e)}renderHeadingWrapper(e){let t=parseInt(this.headingLevel,10);switch(t>=1&&t<=6?t:3){case 1:return m`<h1 part="heading">${e}</h1>`;case 2:return m`<h2 part="heading">${e}</h2>`;case 4:return m`<h4 part="heading">${e}</h4>`;case 5:return m`<h5 part="heading">${e}</h5>`;case 6:return m`<h6 part="heading">${e}</h6>`;default:return m`<h3 part="heading">${e}</h3>`}}render(){let e=this.hasUpdated?this.localize.dir()===`rtl`:this.dir===`rtl`,t=m`
      <button
        part="button"
        type="button"
        id="trigger"
        aria-expanded=${this.expanded?`true`:`false`}
        aria-controls="panel"
        aria-disabled=${this.disabled?`true`:`false`}
        tabindex=${this.disabled?`-1`:`0`}
        @click=${this.handleTriggerClick}
        @keydown=${this.handleTriggerKeyDown}
      >
        <slot name="label" part="label">${this.label}</slot>
        <span part="icon">
          <slot name="icon">
            <wa-icon library="system" variant="solid" name=${e?`chevron-left`:`chevron-right`}></wa-icon>
          </slot>
        </span>
      </button>
    `;return m`
      <div part="base accordion-item">
        ${this.headingLevel===`none`?t:this.renderHeadingWrapper(t)}
        <div
          part="panel"
          id="panel"
          class=${Ht({body:!0,animating:this.isAnimating})}
          role="region"
          aria-labelledby="trigger"
        >
          <slot part="content" class="content"></slot>
        </div>
      </div>
    `}};_.css=Rt,f([yt(`.body`)],_.prototype,`body`,2),f([yt(`[part~="button"]`)],_.prototype,`triggerButton`,2),f([_t()],_.prototype,`isAnimating`,2),f([g()],_.prototype,`label`,2),f([g({type:Boolean,reflect:!0})],_.prototype,`expanded`,2),f([g({type:Boolean,reflect:!0})],_.prototype,`disabled`,2),f([g({attribute:`heading-level`,reflect:!0})],_.prototype,`headingLevel`,2),f([g({attribute:`icon-placement`,reflect:!0})],_.prototype,`iconPlacement`,2),f([g({reflect:!0})],_.prototype,`appearance`,2),f([c(`expanded`,{waitUntilFirstUpdate:!0})],_.prototype,`handleExpandedChange`,1),_=f([mt(`wa-accordion-item`)],_);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ut=class extends Event{constructor(){super(`wa-error`,{bubbles:!0,cancelable:!1,composed:!0})}},Wt=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-load`,{bubbles:!0,cancelable:!1,composed:!0})}},Gt=le`
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
`,Kt=``,qt=``
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;function Jt(){return Kt.replace(/\/$/,``)}function Yt(e){qt=e}function Xt(){if(!qt){let e=document.querySelector(`[data-fa-kit-code]`);e&&Yt(e.getAttribute(`data-fa-kit-code`)||``)}return qt}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Zt=`7.3.0`;function Qt(e,t,n){let r=`solid`;return t===`chisel`&&(r=`chisel-regular`),t===`etch`&&(r=`etch-solid`),t===`graphite`&&(r=`graphite-thin`),t===`jelly`&&(r=`jelly-regular`,n===`duo-regular`&&(r=`jelly-duo-regular`),n===`fill-regular`&&(r=`jelly-fill-regular`)),t===`jelly-duo`&&(r=`jelly-duo-regular`),t===`jelly-fill`&&(r=`jelly-fill-regular`),t===`notdog`&&(n===`solid`&&(r=`notdog-solid`),n===`duo-solid`&&(r=`notdog-duo-solid`)),t===`notdog-duo`&&(r=`notdog-duo-solid`),t===`slab`&&((n===`solid`||n===`regular`)&&(r=`slab-regular`),n===`press-regular`&&(r=`slab-press-regular`)),t===`slab-press`&&(r=`slab-press-regular`),t===`slab-duo`&&(r=`slab-duo-regular`),t===`slab-press-duo`&&(r=`slab-press-duo-regular`),t===`thumbprint`&&(r=`thumbprint-light`),t===`utility`&&(r=`utility-semibold`),t===`utility-duo`&&(r=`utility-duo-semibold`),t===`utility-fill`&&(r=`utility-fill-semibold`),t===`whiteboard`&&(r=`whiteboard-semibold`),t===`mosaic`&&(r=`mosaic-solid`),t===`pixel`&&(r=`pixel-regular`),t===`vellum`&&(r=`vellum-solid`),t===`classic`&&(n===`thin`&&(r=`thin`),n===`light`&&(r=`light`),n===`regular`&&(r=`regular`),n===`solid`&&(r=`solid`)),t===`duotone`&&(n===`thin`&&(r=`duotone-thin`),n===`light`&&(r=`duotone-light`),n===`regular`&&(r=`duotone-regular`),n===`solid`&&(r=`duotone`)),t===`sharp`&&(n===`thin`&&(r=`sharp-thin`),n===`light`&&(r=`sharp-light`),n===`regular`&&(r=`sharp-regular`),n===`solid`&&(r=`sharp-solid`)),t===`sharp-duotone`&&(n===`thin`&&(r=`sharp-duotone-thin`),n===`light`&&(r=`sharp-duotone-light`),n===`regular`&&(r=`sharp-duotone-regular`),n===`solid`&&(r=`sharp-duotone-solid`)),t===`brands`&&(r=`brands`),r}function $t(e,t,n){let r=Qt(e,t,n),i=Jt();if(i)return`${i}/${r}/${e}.svg`;let a=Xt();return a.length>0?`https://ka-p.fontawesome.com/releases/v${Zt}/svgs/${r}/${e}.svg?token=${encodeURIComponent(a)}`:`https://ka-f.fontawesome.com/releases/v${Zt}/svgs/${r}/${e}.svg`}var en={name:`default`,resolver:(e,t=`classic`,n=`solid`)=>$t(e,t,n),mutator:(e,t)=>{if(e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`),t?.family&&!e.hasAttribute(`data-duotone-initialized`)){let{family:n,variant:r}=t;if(n===`duotone`||n===`sharp-duotone`||n===`notdog-duo`||n===`notdog`&&r===`duo-solid`||n===`jelly-duo`||n===`jelly`&&r===`duo-regular`||n===`utility-duo`||n===`slab-duo`||n===`slab-press-duo`||n===`thumbprint`){let n=[...e.querySelectorAll(`path`)],r=n.find(e=>!e.hasAttribute(`opacity`)),i=n.find(e=>e.hasAttribute(`opacity`));if(!r||!i)return;if(r.setAttribute(`data-duotone-primary`,``),i.setAttribute(`data-duotone-secondary`,``),t.swapOpacity&&r&&i){let e=i.getAttribute(`opacity`)||`0.4`;r.style.setProperty(`--path-opacity`,e),i.style.setProperty(`--path-opacity`,`1`)}e.setAttribute(`data-duotone-initialized`,``)}}}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function tn(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var nn={solid:{"arrow-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`,"arrow-up":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>`,backward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M236.3 107.1C247.9 96 265 92.9 279.7 99.2C294.4 105.5 304 120 304 136L304 272.3L476.3 107.2C487.9 96 505 92.9 519.7 99.2C534.4 105.5 544 120 544 136L544 504C544 520 534.4 534.5 519.7 540.8C505 547.1 487.9 544 476.3 532.9L304 367.7L304 504C304 520 294.4 534.5 279.7 540.8C265 547.1 247.9 544 236.3 532.9L44.3 348.9C36.5 341.3 32 330.9 32 320C32 309.1 36.5 298.7 44.3 291.1L236.3 107.1z"/></svg>`,"backward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M491 100.8C478.1 93.8 462.3 94.5 450 102.6L192 272.1L192 128C192 110.3 177.7 96 160 96C142.3 96 128 110.3 128 128L128 512C128 529.7 142.3 544 160 544C177.7 544 192 529.7 192 512L192 367.9L450 537.5C462.3 545.6 478 546.3 491 539.3C504 532.3 512 518.8 512 504.1L512 136.1C512 121.4 503.9 107.9 491 100.9z"/></svg>`,bars:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>`,"angles-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M77.3 256 214.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256zm192 0L406.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L269.3 256z"/></svg>`,"angles-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.7 256 297.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 256zm-192 0L105.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256z"/></svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>`,"chevron-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`,"chevron-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>`,"chevron-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>`,circle:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>`,"closed-captioning":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M64 192C64 156.7 92.7 128 128 128L512 128C547.3 128 576 156.7 576 192L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 192zM216 272L248 272C252.4 272 256 275.6 256 280C256 293.3 266.7 304 280 304C293.3 304 304 293.3 304 280C304 249.1 278.9 224 248 224L216 224C185.1 224 160 249.1 160 280L160 360C160 390.9 185.1 416 216 416L248 416C278.9 416 304 390.9 304 360C304 346.7 293.3 336 280 336C266.7 336 256 346.7 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 280C208 275.6 211.6 272 216 272zM384 280C384 275.6 387.6 272 392 272L424 272C428.4 272 432 275.6 432 280C432 293.3 442.7 304 456 304C469.3 304 480 293.3 480 280C480 249.1 454.9 224 424 224L392 224C361.1 224 336 249.1 336 280L336 360C336 390.9 361.1 416 392 416L424 416C454.9 416 480 390.9 480 360C480 346.7 469.3 336 456 336C442.7 336 432 346.7 432 360C432 364.4 428.4 368 424 368L392 368C387.6 368 384 364.4 384 360L384 280z"/></svg>`,"closed-captioning-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M39 39.1C48.4 29.7 63.6 29.7 72.9 39.1L161.8 128L512 128C547.3 128 576 156.7 576 192L576 448C576 473.5 561.1 495.4 539.6 505.8L601 567.1C610.4 576.5 610.4 591.7 601 601C591.6 610.3 576.4 610.4 567.1 601L39 73.1C29.7 63.7 29.7 48.5 39 39.1zM384 350.1L384 279.9C384 275.5 387.6 271.9 392 271.9L424 271.9C428.4 271.9 432 275.5 432 279.9C432 293.2 442.7 303.9 456 303.9C469.3 303.9 480 293.2 480 279.9C480 249 454.9 223.9 424 223.9L392 223.9C361.1 223.9 336 249 336 279.9L336 302.1L384 350.1zM445.5 411.6C465.7 403.2 480 383.2 480 359.9C480 346.6 469.3 335.9 456 335.9C442.7 335.9 432 346.6 432 359.9C432 364.3 428.4 367.9 424 367.9L401.8 367.9L445.5 411.6zM162.3 264.1C160.8 269.1 160 274.5 160 280L160 360C160 390.9 185.1 416 216 416L248 416C266.1 416 282.1 407.5 292.4 394.2L410.2 512L128 512C92.7 512 64 483.3 64 448L64 192C64 184.2 65.4 176.7 68 169.8L162.3 264.1zM256.1 357.9C256 358.6 256 359.3 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 309.8L256.1 357.9z"/></svg>`,compress:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>`,ellipsis:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M96 320C96 289.1 121.1 264 152 264C182.9 264 208 289.1 208 320C208 350.9 182.9 376 152 376C121.1 376 96 350.9 96 320zM264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320zM488 264C518.9 264 544 289.1 544 320C544 350.9 518.9 376 488 376C457.1 376 432 350.9 432 320C432 289.1 457.1 264 488 264z"/></svg>`,"ellipsis-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/></svg>`,expand:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 96C110.3 96 96 110.3 96 128L96 224C96 241.7 110.3 256 128 256C145.7 256 160 241.7 160 224L160 160L224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L128 96zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 512C96 529.7 110.3 544 128 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480L160 416zM416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160L480 224C480 241.7 494.3 256 512 256C529.7 256 544 241.7 544 224L544 128C544 110.3 529.7 96 512 96L416 96zM544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L512 544C529.7 544 544 529.7 544 512L544 416z"/></svg>`,eyedropper:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>`,filter:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 64C19.1 64 7.4 71.8 2.4 83.8S.2 109.5 9.4 118.6L192 301.3 192 416c0 8.5 3.4 16.6 9.4 22.6l64 64c9.2 9.2 22.9 11.9 34.9 6.9S320 492.9 320 480l0-178.7 182.6-182.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 64 480 64L32 64z"/></svg>`,forward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M403.7 107.1C392.1 96 375 92.9 360.3 99.2C345.6 105.5 336 120 336 136L336 272.3L163.7 107.2C152.1 96 135 92.9 120.3 99.2C105.6 105.5 96 120 96 136L96 504C96 520 105.6 534.5 120.3 540.8C135 547.1 152.1 544 163.7 532.9L336 367.7L336 504C336 520 345.6 534.5 360.3 540.8C375 547.1 392.1 544 403.7 532.9L595.7 348.9C603.6 341.4 608 330.9 608 320C608 309.1 603.5 298.7 595.7 291.1L403.7 107.1z"/></svg>`,file:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>`,"file-audio":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>`,"file-code":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>`,"file-excel":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>`,"file-image":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>`,"file-pdf":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>`,"file-powerpoint":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>`,"file-video":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>`,"file-word":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>`,"file-zipper":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>`,"forward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M21 36.8c12.9-7 28.7-6.3 41 1.8L320 208.1 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-144.1-258 169.6c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440L0 72C0 57.3 8.1 43.8 21 36.8z"/></svg>`,gauge:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,gear:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>`,"grip-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>`,indeterminate:`<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>`,"magnifying-glass":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>`,minus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>`,pause:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>`,"picture-in-picture":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M448 32c35.3 0 64 28.7 64 64l0 112-64 0 0-112-384 0 0 320 144 0 0 64-144 0-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416 0 96C0 62.9 25.2 35.6 57.5 32.3L64 32 448 32zm16 224c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48l160 0z"/></svg>`,play:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>`,"play-circle":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>`,plus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>`,"table-columns":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 64l0 256 128 0 0-256-128 0zm320 0l-128 0 0 256 128 0 0-256z"/></svg>`,thumbtack:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 10.3 134.1c37.1 21.2 65.8 56.4 78.2 99.7l3.8 13.4c2.8 9.7 .8 20-5.2 28.1S362 352 352 352L32 352c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1L5 297.8c12.4-43.3 41-78.5 78.2-99.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 400l64 0 0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-112z"/></svg>`,"up-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M406.6 502.6l96-96c9.2-9.2 11.9-22.9 6.9-34.9S492.9 352 480 352l-64 0 0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 320-64 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l96 96c12.5 12.5 32.8 12.5 45.3 0zM150.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-9.2 9.2-11.9 22.9-6.9 34.9S19.1 160 32 160l64 0 0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320 64 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-96-96z"/></svg>`,upload:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>`,user:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>`,volume:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM441.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C443.3 170.7 464 210.9 464 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-low":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,xmark:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>`},regular:{calendar:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z"/></svg>`,"circle-question":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`,"circle-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,clock:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>`,copy:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>`,eye:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>`,"eye-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>`}},rn={name:`system`,resolver:(e,t=`classic`,n=`solid`)=>{let r=nn[n][e]??nn.regular[e]??nn.regular[`circle-question`];return r?tn(r):``},mutator:e=>{e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`)}},an=`classic`,on=[en,rn],sn=/* @__PURE__ */ new Set
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;function cn(e){sn.add(e)}function ln(e){sn.delete(e)}function un(e){return on.find(t=>t.name===e)}function dn(){return an}
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const{I:fn}=ct,pn=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var mn=Symbol(),hn=Symbol(),gn,_n=/* @__PURE__ */ new Map,v=class extends Tt{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label=``,this.library=`default`,this.rotate=0,this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=m`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let n=this.shadowRoot.querySelector(`[part='svg']`);return typeof t.mutator==`function`&&t.mutator(n,this),this.svg}try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?mn:hn}catch{return hn}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return mn;gn||=new DOMParser;let r=gn.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):mn}catch{return mn}}}connectedCallback(){super.connectedCallback(),cn(this)}firstUpdated(e){super.firstUpdated(e),this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),ln(this)}async getIconSource(){let e=un(this.library),t=this.family||dn();if(this.name&&e){let n=this.canvas===`auto`||this.autoWidth,r;try{r=await e.resolver(this.name,t,this.variant,n)}catch{r=void 0}return{url:r,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=await this.getIconSource(),n=t?un(this.library):void 0;if(!e){this.svg=null;return}let r=_n.get(e);r||(r=this.resolveIcon(e,n),_n.set(e,r));let i=await r;if(i===hn&&_n.delete(e),e===(await this.getIconSource()).url){if(pn(i))this.svg=i;else switch(i){case hn:case mn:this.svg=null,this.dispatchEvent(new Ut);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new Wt)}}}willUpdate(e){return this.style||this.setStyleProperty(`--rotate-angle`,`${this.rotate}deg`),super.willUpdate(e)}updated(e){super.updated(e);let t=un(this.library);this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`);let n=this.shadowRoot?.querySelector(`svg`);n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:m`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};v.css=Gt,f([_t()],v.prototype,`svg`,2),f([g({reflect:!0})],v.prototype,`name`,2),f([g({reflect:!0})],v.prototype,`family`,2),f([g({reflect:!0})],v.prototype,`variant`,2),f([g({reflect:!0})],v.prototype,`canvas`,2),f([g({attribute:`auto-width`,type:Boolean,reflect:!0})],v.prototype,`autoWidth`,2),f([g({attribute:`swap-opacity`,type:Boolean,reflect:!0})],v.prototype,`swapOpacity`,2),f([g()],v.prototype,`src`,2),f([g()],v.prototype,`label`,2),f([g({reflect:!0})],v.prototype,`library`,2),f([g({type:Number,reflect:!0})],v.prototype,`rotate`,2),f([g({type:String,reflect:!0})],v.prototype,`flip`,2),f([g({type:String,reflect:!0})],v.prototype,`animation`,2),f([c(`label`)],v.prototype,`handleLabelChange`,1),f([c([`family`,`name`,`library`,`variant`,`src`,`autoWidth`,`canvas`,`swapOpacity`],{waitUntilFirstUpdate:!0})],v.prototype,`setIcon`,1),v=f([mt(`wa-icon`)],v);var vn=/* @__PURE__ */ t({default:()=>_}),yn=class extends Event{constructor(e){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-after-collapse`,{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}},bn=class extends Event{constructor(e){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-after-expand`,{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}},xn=class extends Event{constructor(e){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-collapse`,{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}},Sn=class extends Event{constructor(e){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-expand`,{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}},Cn=le`
  @layer wa-component {
    :host {
      display: block;
      border: var(--wa-panel-border-width) var(--wa-panel-border-style) var(--wa-color-surface-border);
      border-radius: var(--wa-panel-border-radius);
      overflow: hidden;
    }

    /* Appearance modifiers */
    :host([appearance='outlined']) {
      background-color: var(--wa-color-surface-default);
      border-color: var(--wa-color-surface-border);
    }

    :host([appearance='filled']) {
      border-color: transparent;
    }

    :host([appearance='filled-outlined']) {
      background-color: var(--wa-color-neutral-fill-quiet);
      border-color: var(--wa-color-neutral-border-quiet);
    }

    :host([appearance='plain']) {
      background-color: transparent;
      border-color: transparent;
      border-radius: 0;
    }
  }
`,wn=class extends Tt{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(...arguments),this.mode=`multiple`,this.iconPlacement=`end`,this.headingLevel=`3`,this.appearance=`outlined`}getAllItems(){return this.defaultSlot.assignedElements({flatten:!0}).filter(e=>e.tagName.toLowerCase()===`wa-accordion-item`)}getFocusableItems(){return this.getAllItems().filter(e=>!e.disabled)}ownsItem(e){return e.closest(`wa-accordion`)===this}handleSlotChange(){if(this.didSSR){let e=[];if(this.getAllItems().forEach(t=>{t.didSSR&&!t.hasUpdated&&e.push(t.updateComplete)}),e.length>0){Promise.allSettled(e).then(()=>{this.handleSlotChange()});return}}this.syncIconPlacement(),this.syncHeadingLevel(),this.syncAppearance()}handleKeyDown(e){let t=this.getFocusableItems();if(!t.length)return;let n=e.composedPath().find(e=>e instanceof Element&&e.tagName.toLowerCase()===`wa-accordion-item`);if(!n||!this.ownsItem(n))return;let r=t.findIndex(e=>e===n),i=r;switch(e.key){case`ArrowDown`:e.preventDefault(),i=(r+1)%t.length;break;case`ArrowUp`:e.preventDefault(),i=(r-1+t.length)%t.length;break;case`Home`:e.preventDefault(),i=0;break;case`End`:e.preventDefault(),i=t.length-1;break;default:return}t[i].focus()}syncIconPlacement(){this.getAllItems().forEach(e=>e.iconPlacement=this.iconPlacement)}syncHeadingLevel(){this.getAllItems().forEach(e=>e.headingLevel=this.headingLevel)}syncAppearance(){this.getAllItems().forEach(e=>e.appearance=this.appearance)}async handleItemTrigger(e){let{item:t}=e.detail;if(this.ownsItem(t)&&(e.stopPropagation(),!t.disabled)){if(t.expanded){if(this.mode===`single`)return;let e=new xn({item:t});if(this.dispatchEvent(e),e.defaultPrevented)return;await t.collapse(),this.dispatchEvent(new yn({item:t}))}else{(this.mode===`single`||this.mode===`single-collapsible`)&&this.getAllItems().filter(e=>e!==t&&e.expanded).forEach(e=>e.collapse());let e=new Sn({item:t});if(this.dispatchEvent(e),e.defaultPrevented)return;await t.expand(),this.dispatchEvent(new bn({item:t}))}}}expandAll(){this.mode!==`single`&&this.mode!==`single-collapsible`&&this.getAllItems().filter(e=>!e.disabled&&!e.expanded).forEach(e=>e.expand())}collapseAll(){this.getAllItems().filter(e=>e.expanded).forEach(e=>e.collapse())}render(){return m`
      <slot
        @slotchange=${this.handleSlotChange}
        @wa-accordion-item-trigger=${this.handleItemTrigger}
        @keydown=${this.handleKeyDown}
      ></slot>
    `}};wn.css=Cn,f([yt(`slot`)],wn.prototype,`defaultSlot`,2),f([g({reflect:!0})],wn.prototype,`mode`,2),f([g({attribute:`icon-placement`,reflect:!0})],wn.prototype,`iconPlacement`,2),f([g({attribute:`heading-level`,reflect:!0})],wn.prototype,`headingLevel`,2),f([g({reflect:!0})],wn.prototype,`appearance`,2),f([c(`iconPlacement`,{waitUntilFirstUpdate:!0})],wn.prototype,`syncIconPlacement`,1),f([c(`headingLevel`,{waitUntilFirstUpdate:!0})],wn.prototype,`syncHeadingLevel`,1),f([c(`appearance`,{waitUntilFirstUpdate:!0})],wn.prototype,`syncAppearance`,1),wn=f([mt(`wa-accordion`)],wn);var Tn=/* @__PURE__ */ t({default:()=>wn}),En=()=>({checkValidity(e){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
let t=e.input,n={message:``,isValid:!0,invalidKeys:[]};if(!t)return n;let r=!0;if(`checkValidity`in t&&(r=t.checkValidity()),r)return n;if(n.isValid=!1,`validationMessage`in t&&(n.message=t.validationMessage),!(`validity`in t))return n.invalidKeys.push(`customError`),n;for(let e in t.validity){if(e===`valid`)continue;let r=e;t.validity[r]&&n.invalidKeys.push(r)}return n}}),Dn=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-invalid`,{bubbles:!0,cancelable:!1,composed:!0})}},On=()=>({observedAttributes:[`custom-error`],checkValidity(e){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
let t={message:``,isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=[`customError`]),t}}),kn=class extends Tt{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=[`input`],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new Dn))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},`addEventListener`in this&&this.addEventListener(`invalid`,this.emitInvalid)}static get validators(){return[On()]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let n of t.observedAttributes)e.add(n);return[...e]}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.updateValidity()}):this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener?.(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has(`customError`)&&(this.customError||=null,this.setCustomValidity(this.customError||``)),e.has(`value`)||e.has(`disabled`)||e.has(`defaultValue`)){let e=this.value;this.updateFormValue(e)}e.has(`disabled`)&&(this.customStates.set(`disabled`,this.disabled),(this.hasAttribute(`disabled`)||!this.matches(`:disabled`))&&this.toggleAttribute(`disabled`,this.disabled)),super.willUpdate(e),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>this.updateValidity()):this.updateValidity()}updateFormValue(e){if(Array.isArray(e)){if(this.name){let t=new FormData;for(let n of e)t.append(this.name,n);this.setValue(t,t)}}else this.setValue(e,e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(e){e?this.setAttribute(`form`,e):this.removeAttribute(`form`)}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],n=e[1],r=e[2];r||=this.validationTarget,this.internals.setValidity(t,n,r||void 0),this.requestUpdate(`validity`),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set(`required`,e),this.customStates.set(`optional`,!e),this.customStates.set(`invalid`,!t),this.customStates.set(`valid`,t),this.customStates.set(`user-invalid`,!t&&n),this.customStates.set(`user-valid`,t&&n)}setCustomValidity(e){e?(this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)):(this.customError=null,this.setValidity({}))}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity()}):(this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity())}setValue(...e){let[t,n]=e;this.internals.setFormValue(t,n)}get allValidators(){let e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(``),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute(`disabled`)||!this.willValidate){this.resetValidity();return}let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},n=this.validationTarget||this.input||void 0,r=``;for(let n of e){let{isValid:e,message:i,invalidKeys:a}=n.checkValidity(this);e||(r||=i,a?.length>=0&&a.forEach(e=>t[e]=!0))}r||=this.validationMessage,this.setValidity(t,r,n)}};kn.formAssociated=!0,f([g({reflect:!0})],kn.prototype,`name`,2),f([g({type:Boolean})],kn.prototype,`disabled`,2),f([g({state:!0,attribute:!1})],kn.prototype,`valueHasChanged`,2),f([g({state:!0,attribute:!1})],kn.prototype,`hasInteracted`,2),f([g({attribute:`custom-error`,reflect:!0})],kn.prototype,`customError`,2),f([g({attribute:!1,state:!0,type:Object})],kn.prototype,`validity`,1);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var An={small:`s`,medium:`m`,large:`l`},jn=/* @__PURE__ */ new Set;function Mn(e,t){t in An&&!jn.has(`${e}:${t}`)&&(jn.add(`${e}:${t}`),console.warn(`[${e}] size="${t}" is deprecated. Use size="${An[t]}" instead. The long-form value will be removed in the next major version.`))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Nn=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return this.host.childNodes?[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===Node.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`wa-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1}):!1}hasNamedSlot(e){return this.host.querySelector?.(`:scope > [slot="${e}"]`)!==null}test(e,t){return t&&this.host.didSSR&&!this.host.hasUpdated?!!this.host[t]:e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){let e=this.host.shadowRoot;e&&`addEventListener`in e&&e.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){let e=this.host.shadowRoot;e&&`removeEventListener`in e&&e.removeEventListener(`slotchange`,this.handleSlotChange)}},Pn=le`
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
`,Fn=le`
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
`,In=le`
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
*/const Ln=e=>e??h,Rn=Symbol.for(``),zn=e=>{
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
if(e?.r===Rn)return e?._$litStatic$},Bn=(e,...t)=>({_$litStatic$:t.reduce((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1],e[0]),r:Rn}),Vn=/* @__PURE__ */ new Map,Hn=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],(i=zn(a))!==void 0);)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=Vn.get(e))===void 0&&(o.raw=o,Vn.set(e,t=o)),n=s}return e(t,...n)})(m);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var y=class extends kn{constructor(){super(...arguments),this.assumeInteractionOn=[`click`],this.hasSlotController=new Nn(this,`[default]`,`start`,`end`),this.localize=new Lt(this),this.invalid=!1,this.isIconButton=!1,this.title=``,this.variant=`neutral`,this.appearance=`accent`,this.size=`m`,this.withCaret=!1,this.withStart=!1,this.withEnd=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type=`button`}static get validators(){return[...super.validators,En()]}handleSizeChange(){Mn(this.localName,this.size)}constructLightDOMButton(){let e=document.createElement(`button`);for(let t of this.attributes)t.name!==`style`&&e.setAttribute(t.name,t.value);return e.type=this.type,e.style.position=`absolute !important`,e.style.width=`0 !important`,e.style.height=`0 !important`,e.style.clipPath=`inset(50%) !important`,e.style.overflow=`hidden !important`,e.style.whiteSpace=`nowrap !important`,this.name&&(e.name=this.name),e.value=this.value||``,e}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopImmediatePropagation();return}if(this.type!==`submit`&&this.type!==`reset`||!this.getForm())return;let t=this.constructLightDOMButton();this.parentElement?.append(t),t.click(),t.remove()}handleInvalid(){this.dispatchEvent(new Dn)}handleLabelSlotChange(){let e=this.labelSlot.assignedNodes({flatten:!0}),t=!1,n=!1,r=!1,i=!1;[...e].forEach(e=>{if(e.nodeType===Node.ELEMENT_NODE){let r=e;r.localName===`wa-icon`?(n=!0,t||=r.label!==void 0):i=!0}else e.nodeType===Node.TEXT_NODE&&(e.textContent?.trim()||``).length>0&&(r=!0)}),this.isIconButton=n&&!r&&!i,this.customStates.set(`icon-button`,this.isIconButton),this.isIconButton&&!t&&console.warn(`Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.`,this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.customStates.set(`disabled`,this.disabled),this.updateValidity()}handleHrefChange(){this.customStates.set(`link`,this.isLink())}handleLoadingChange(){this.customStates.set(`loading`,this.loading)}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=this.isLink(),t=e?Bn`a`:Bn`button`;return Hn`
      <${t}
        part="base button"
        class=${Ht({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()===`rtl`,"has-label":this.hasSlotController.test(`[default]`),"has-start":this.hasSlotController.test(`start`,`withStart`),"has-end":this.hasSlotController.test(`end`,`withEnd`),"is-icon-button":this.isIconButton})}
        ?disabled=${Ln(e?void 0:this.disabled)}
        type=${Ln(e?void 0:this.type)}
        title=${this.title}
        name=${Ln(e?void 0:this.name)}
        value=${Ln(e?void 0:this.value)}
        href=${Ln(e?this.href:void 0)}
        target=${Ln(e?this.target:void 0)}
        download=${Ln(e?this.download:void 0)}
        rel=${Ln(e&&this.rel?this.rel:void 0)}
        role=${Ln(e?void 0:`button`)}
        aria-disabled=${Ln(e&&this.disabled?`true`:void 0)}
        aria-busy=${this.loading?`true`:`false`}
        tabindex=${this.disabled?`-1`:`0`}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?Hn`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:``}
        ${this.loading?Hn`<wa-spinner part="spinner"></wa-spinner>`:``}
      </${t}>
    `}};y.shadowRootOptions={...kn.shadowRootOptions,delegatesFocus:!0},y.css=[Fn,In,Pn],f([yt(`.button`)],y.prototype,`button`,2),f([yt(`slot:not([name])`)],y.prototype,`labelSlot`,2),f([_t()],y.prototype,`invalid`,2),f([_t()],y.prototype,`isIconButton`,2),f([g()],y.prototype,`title`,2),f([g({reflect:!0})],y.prototype,`variant`,2),f([g({reflect:!0})],y.prototype,`appearance`,2),f([g({reflect:!0})],y.prototype,`size`,2),f([c(`size`)],y.prototype,`handleSizeChange`,1),f([g({attribute:`with-caret`,type:Boolean,reflect:!0})],y.prototype,`withCaret`,2),f([g({attribute:`with-start`,type:Boolean})],y.prototype,`withStart`,2),f([g({attribute:`with-end`,type:Boolean})],y.prototype,`withEnd`,2),f([g({type:Boolean})],y.prototype,`disabled`,2),f([g({type:Boolean,reflect:!0})],y.prototype,`loading`,2),f([g({type:Boolean,reflect:!0})],y.prototype,`pill`,2),f([g()],y.prototype,`type`,2),f([g({reflect:!0})],y.prototype,`name`,2),f([g({reflect:!0})],y.prototype,`value`,2),f([g({reflect:!0})],y.prototype,`href`,2),f([g()],y.prototype,`target`,2),f([g()],y.prototype,`rel`,2),f([g()],y.prototype,`download`,2),f([g({attribute:`formaction`})],y.prototype,`formAction`,2),f([g({attribute:`formenctype`})],y.prototype,`formEnctype`,2),f([g({attribute:`formmethod`})],y.prototype,`formMethod`,2),f([g({attribute:`formnovalidate`,type:Boolean})],y.prototype,`formNoValidate`,2),f([g({attribute:`formtarget`})],y.prototype,`formTarget`,2),f([c(`disabled`,{waitUntilFirstUpdate:!0})],y.prototype,`handleDisabledChange`,1),f([c(`href`)],y.prototype,`handleHrefChange`,1),f([c(`loading`,{waitUntilFirstUpdate:!0})],y.prototype,`handleLoadingChange`,1),y=f([mt(`wa-button`)],y),y.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Un=le`
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
`,Wn=class extends Tt{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(...arguments),this.localize=new Lt(this)}render(){return m`
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
    `}};Wn.css=Un,Wn=f([mt(`wa-spinner`)],Wn);var Gn=/* @__PURE__ */ t({default:()=>y}),b
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;Object.getOwnPropertyDescriptors||(()=>{var e;if(typeof Reflect<`u`&&Reflect.ownKeys)e=Reflect.ownKeys;else{var t=Object.getOwnPropertySymbols||(e=>[]);e=(e=>Object.getOwnPropertyNames(e).concat(t(e)))}return(t=>{for(var n=e(t),r={},i=n.length|0,a=0;a!==i;){var o=n[a];Object.defineProperty(r,o,{configurable:!0,enumerable:!0,writable:!0,value:Object.getOwnPropertyDescriptor(t,o)}),a=a+1|0}return r})})();function Kn(e){this.c=e}b=Kn.prototype,b.toString=(function(){return String.fromCharCode(this.c)});function x(e,t){this.l=e,this.h=t}b=x.prototype,b.toString=(function(){return xo(this.l,this.h)});function qn(e){switch(typeof e){case`string`:return cf.l();case`number`:return cr(e)?e<<24>>24===e?Bu.l():e<<16>>16===e?Zu.l():ef.l():lr(e)?$d.l():Qd.l();case`boolean`:return nu.l();case`undefined`:return mo.l();default:return e instanceof x?rf.l():e instanceof Kn?au.l():e&&e.$classData?e.$classData.l():null}}function Jn(e){switch(typeof e){case`string`:return`java.lang.String`;case`number`:return cr(e)?e<<24>>24===e?`java.lang.Byte`:e<<16>>16===e?`java.lang.Short`:`java.lang.Integer`:lr(e)?`java.lang.Float`:`java.lang.Double`;case`boolean`:return`java.lang.Boolean`;case`undefined`:return`java.lang.Void`;default:return e instanceof x?`java.lang.Long`:e instanceof Kn?`java.lang.Character`:e&&e.$classData?e.$classData.N:null.ih()}}function Yn(e,t){switch(typeof e){case`string`:return sf(e,t);case`number`:return Xd(e,t);case`boolean`:return eu(e,t);case`undefined`:return uo(e,t);default:return e&&e.$classData||e===null?e.f(t):e instanceof x?tf(e.l,e.h,t):e instanceof Kn?iu(e.c,t):mr.prototype.f.call(e,t)}}function Xn(e){switch(typeof e){case`string`:return of(e);case`number`:return Zd(e);case`boolean`:return tu(e);case`undefined`:return fo(e);default:return e&&e.$classData||e===null?e.k():e instanceof x?nf(e.l,e.h):e instanceof Kn?ru(e.c):mr.prototype.k.call(e)}}function Zn(e){return e===void 0?`undefined`:e.toString()}function Qn(e){if(e===0)throw new zu(`/ by zero`);return e}function $n(e){return e>2147483647?2147483647:e<-2147483648?-2147483648:e|0}function er(e){return String.fromCharCode(e)}var tr=/* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(8));function nr(e,t,n,r,i){if(e!==n||r-t>>>0>i>>>0)for(var a=0;a<i;a=a+1|0)n[r+a|0]=e[t+a|0];else for(var a=i-1|0;a>=0;a=a-1|0)n[r+a|0]=e[t+a|0]}var rr=0,ir=/* @__PURE__ */ new WeakMap;function ar(e){switch(typeof e){case`string`:return of(e);case`number`:return Zd(e);case`bigint`:var t=0;for(e<BigInt(0)&&(e=~e);e!==BigInt(0);)t^=Number(BigInt.asIntN(32,e)),e>>=BigInt(32);return t;case`boolean`:return e?1231:1237;case`undefined`:return 0;case`symbol`:var n=e.description;return n===void 0?0:of(n);default:if(e===null)return 0;var r=ir.get(e);return r===void 0&&(r=rr+1|0,rr=r,ir.set(e,r)),r}}function or(e){return typeof e==`number`&&e<<24>>24===e&&1/e!=-1/0}function sr(e){return typeof e==`number`&&e<<16>>16===e&&1/e!=-1/0}function cr(e){return typeof e==`number`&&(e|0)===e&&1/e!=-1/0}function lr(e){return typeof e==`number`&&(e!==e||Math.fround(e)===e)}function ur(e){return new Kn(e)}ur(0);function S(e,t){return new x(e,t)}var dr=S(0,0);function fr(e){return e===null?0:e.c}function pr(e){return e===null?dr:e}function mr(){}b=mr.prototype,b.constructor=mr;function C(){}C.prototype=b,b.k=(function(){return ar(this)}),b.f=(function(e){return this===e}),b.o=(function(){var e=this.k();return Jn(this)+`@`+(e>>>0).toString(16)}),b.toString=(function(){return this.o()});function w(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}b=w.prototype=new C,b.constructor=w,b.a1=(function(e,t,n,r){nr(this.a,e,t.a,n,r)}),b.a4=(function(){return new w(this.a.slice())});function hr(){}hr.prototype=b;function gr(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=!1}else this.a=e}b=gr.prototype=new C,b.constructor=gr,b.a1=(function(e,t,n,r){nr(this.a,e,t.a,n,r)}),b.a4=(function(){return new gr(this.a.slice())});function _r(e){this.a=typeof e==`number`?new Uint16Array(e):e}b=_r.prototype=new C,b.constructor=_r,b.a1=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),b.a4=(function(){return new _r(this.a.slice())});function vr(e){this.a=typeof e==`number`?new Int8Array(e):e}b=vr.prototype=new C,b.constructor=vr,b.a1=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),b.a4=(function(){return new vr(this.a.slice())});function yr(e){this.a=typeof e==`number`?new Int16Array(e):e}b=yr.prototype=new C,b.constructor=yr,b.a1=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),b.a4=(function(){return new yr(this.a.slice())});function br(e){this.a=typeof e==`number`?new Int32Array(e):e}b=br.prototype=new C,b.constructor=br,b.a1=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),b.a4=(function(){return new br(this.a.slice())});function xr(e){typeof e==`number`?(e<<=1,this.a=new Int32Array(e)):this.a=e}b=xr.prototype=new C,b.constructor=xr,b.a1=(function(e,t,n,r){t.a.set(this.a.subarray(e<<1,(e+r|0)<<1),n<<1)}),b.a4=(function(){return new xr(this.a.slice())});function Sr(e){this.a=typeof e==`number`?new Float32Array(e):e}b=Sr.prototype=new C,b.constructor=Sr,b.a1=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),b.a4=(function(){return new Sr(this.a.slice())});function Cr(e){this.a=typeof e==`number`?new Float64Array(e):e}b=Cr.prototype=new C,b.constructor=Cr,b.a1=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),b.a4=(function(){return new Cr(this.a.slice())});function T(){this.C=void 0,this.n=null,this.O=null,this.B=null,this.D=0,this.z=null,this.E=``,this.L=void 0,this.A=void 0,this.F=void 0,this.w=void 0,this.J=!1,this.N=``,this.X=!1,this.Y=!1,this.Z=!1,this.I=void 0}b=T.prototype,b.p=(function(e,t,n,r,i){this.n={},this.z=e,this.E=t;var a=this;return this.F=(e=>e===a),this.N=n,this.X=!0,this.I=(e=>!1),r!==void 0&&(this.A=new T().y(this,r,i,t===`J`)),this}),b.i=(function(e,t,n,r){var i=Object.getOwnPropertyNames(n)[0];return this.n=n,this.E=`L`+t+`;`,this.F=(e=>!!e.n[i]),this.J=e===2,this.N=t,this.Y=e===1,this.I=r||(e=>!!(e&&e.$classData&&e.$classData.n[i])),typeof e!=`number`&&(e.prototype.$classData=this),this}),b.y=(function(e,t,n,r,i){t.prototype.$classData=this;var a=`[`+e.E;this.C=t,this.n={r:1,a:1},this.O=e,this.B=e,this.D=1,this.E=a,this.N=a,this.Z=!0;var o=this;return this.F=i||(e=>o===e),this.w=r?(e=>{for(var n=e.length|0,r=new t(n),i=r.a,a=0;a<n;a=a+1|0){var o=e[a];i[a<<1]=o.l,i[(a<<1)+1|0]=o.h}return r}):n?(e=>new t(new n(e))):(e=>new t(e)),this.I=(e=>e instanceof t),this}),b.a=(function(e){function t(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}var n=t.prototype=new hr;n.constructor=t,n.a1=(function(e,t,n,r){nr(this.a,e,t.a,n,r)}),n.a4=(function(){return new t(this.a.slice())}),n.$classData=this;var r=e.B||e,i=e.D+1,a=`[`+e.E;this.C=t,this.n={r:1,a:1},this.O=e,this.B=r,this.D=i,this.E=a,this.N=a,this.Z=!0;var o=(e=>{var t=e.D;return t===i?r.F(e.B):t>i&&r===E});this.F=o,this.w=(e=>new t(e));var s=this;return this.I=(e=>{var t=e&&e.$classData;return!!t&&(t===s||o(t))}),this}),b.r=(function(){return this.A||=new T().a(this),this.A}),b.l=(function(){return this.L||=new fl(this),this.L}),b.R=(function(e){return this===e||this.F(e)}),b.S=(function(){return this.P?this.P.l():null}),b.Q=(function(){return this.O?this.O.l():null}),b.U=(function(e){if(this===wr)throw Hu(new Uu);return new(this.r()).C(e)});var E=new T;E.n={},E.E=`Ljava.lang.Object;`,E.F=(e=>!e.X),E.N=`java.lang.Object`,E.I=(e=>e!==null),E.A=new T().y(E,w,void 0,!1,(e=>{var t=e.D;return t===1?!e.B.X:t>1})),mr.prototype.$classData=E;var wr=new T().p(void 0,`V`,`void`,void 0,void 0),Tr=new T().p(!1,`Z`,`boolean`,gr,void 0),Er=new T().p(0,`C`,`char`,_r,Uint16Array),Dr=new T().p(0,`B`,`byte`,vr,Int8Array),Or=new T().p(0,`S`,`short`,yr,Int16Array),kr=new T().p(0,`I`,`int`,br,Int32Array),Ar=new T().p(dr,`J`,`long`,xr,Int32Array),jr=new T().p(0,`F`,`float`,Sr,Float32Array),Mr=new T().p(0,`D`,`double`,Cr,Float64Array);new Int8Array(new Int32Array([1]).buffer)[0];function Nr(e,t,n){for(var r=new Int32Array(e),i=t.length|0,a=0,o=0,s=0,c=0;o!==i;){var l=t.charCodeAt(o);l<80?c=(c|l-48)<<5:(c|=l-93,a=(a&n)+c|0,r[s]=a,s=s+1|0,c=0),o=o+1|0}return r}function Pr(e,t){return new br(Nr(e,t,-1))}function Fr(e){return qn(e).cW()+`@`+ar(e)}function Ir(e){var t=e.d7;return t===void 0?Fr(e):t}function Lr(){Rr=this,zr().ic(new G((e=>void 0)),zo().eC,!0)}b=Lr.prototype=new C,b.constructor=Lr,b.ic=(function(e,t,n){return new Wl(e,n,t,this)}),new T().i(Lr,`com.raquo.airstream.core.Observer$`,{bu:1});var Rr;function zr(){return Rr||=new Lr,Rr}function Br(e){this.cm=null,this.d8=null,this.cn=0,this.cm=e,this.d8=void 0;var t=ni().bK();this.cn=t===void 0?1:1+t.cn|0,Wr().bP===-1||this.cn>Wr().bP?zc().bN(new Kd(this,Wr().bP)):Jr().V?Jr().aK.push(this)|0:ni().cQ(this)}b=Br.prototype=new C,b.constructor=Br;var Vr=new T().i(Br,`com.raquo.airstream.core.Transaction`,{bx:1});function Hr(){this.bP=0,this.d9=null,Ur=this,this.bP=1e3,this.d9=new G((e=>{throw B(new V,`Attempted to run Transaction `+e+` after it was already executed.`)}))}b=Hr.prototype=new C,b.constructor=Hr,b.ff=(function(e){try{e.cm.b(e);var t=e.d8;if(t!==void 0)for(;t.ij();)t.ig().ik(e)}catch(e){var n=e instanceof _c?e:new Rf(e);zc().bN(n)}}),new T().i(Hr,`com.raquo.airstream.core.Transaction$`,{by:1});var Ur;function Wr(){return Ur||=new Hr,Ur}function Gr(e){e.bQ.length|0?new Br(new G((t=>{for(;(e.bQ.length|0)>0;){var n=e.bQ.shift();try{n.b(t)}catch(e){var r=e instanceof _c?e:new Rf(e);zc().bN(r)}}for(;(e.aK.length|0)>0;){var i=e.aK.shift();ni().cQ(i)}}))):(e.aK.length|0)>0&&new Br(new G((t=>{for(;(e.aK.length|0)>0;)ni().cQ(e.aK.shift())})))}function Kr(){this.V=!1,this.bQ=null,this.aK=null,qr=this,this.V=!1,this.bQ=xi().aE(P().aj(new(M.r()).C([]))),this.aK=xi().aE(P().aj(new(Vr.r()).C([])))}b=Kr.prototype=new C,b.constructor=Kr,new T().i(Kr,`com.raquo.airstream.core.Transaction$onStart$`,{bz:1});var qr;function Jr(){return qr||=new Kr,qr}function Yr(e,t){return e.aL.get(t)}function Xr(e,t){e.bR.unshift(t)}function Zr(e){return e.bR.shift()}function Qr(e,t,n){var r=Yr(e,t),i=r===void 0,a=r===void 0?xi().aE(P().aj(new(Vr.r()).C([]))):r;a.push(n),i&&e.aL.set(t,a)}function $r(e,t){var n=Yr(e,t),r=n===void 0||(n.length|0)>0?n:void 0;if(r!==void 0){var i=r.shift();return r.length|0||e.aL.delete(t),i}}function ei(){this.bR=null,this.aL=null,ti=this,this.bR=xi().aE(P().aj(new(Vr.r()).C([]))),this.aL=/* @__PURE__ */ new Map}b=ei.prototype=new C,b.constructor=ei,b.cQ=(function(e){var t=this.bK();t===void 0?(Xr(this,e),Wr().ff(e),this.gO(e)):Qr(this,t,e)}),b.gO=(function(e){for(var t=e;;){var n=this.bK(),r=t;if(!(n!==void 0&&N().I(r,n)))throw B(new V,`Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.`);this.hI(t),t.cm=Wr().d9;var i=this.bK();if(N().I(i,void 0)){if((this.aL.size|0)>0){var a=new Nc(0);throw this.aL.forEach((e=>((t,n)=>{e.bu=e.bu+(t.length|0)|0}))(a)),B(new V,`Transaction queue error: Stack cleared, but a total of `+a.bu+` children for `+(this.aL.size|0)+` transactions remain. This is a bug in Airstream.`)}return}Wr().ff(i),t=i}}),b.hI=(function(e){for(var t=e;;){var n=$r(this,t);if(N().I(n,void 0)){Zr(this);var r=this.bK();if(!N().I(r,void 0))t=r;else return}else{Xr(this,n);return}}}),b.bK=(function(){return this.bR[0]}),new T().i(ei,`com.raquo.airstream.core.Transaction$pendingTransactions$`,{bA:1});var ti;function ni(){return ti||=new ei,ti}function ri(e,t){var n=e.ak.indexOf(t)|0;if(n!==-1)e.ak.splice(n,1),e.C.c()||t.fF();else throw B(new V,`Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?`)}function ii(e){for(;(e.bS.length|0)>0;)ri(e,e.bS.shift())}function ai(e){this.da=null,this.ak=null,this.aX=!1,this.bS=null,this.C=null,this.aY=0,this.da=e,this.ak=xi().aE(P().aj(new(si.r()).C([]))),this.aX=!0,this.bS=xi().aE(P().aj(new(si.r()).C([]))),this.C=q(),this.aY=0}b=ai.prototype=new C,b.constructor=ai,b.f9=(function(){if(this.C.c()){var e=Jr(),t=(()=>{var e=new Ms(this.da);this.C=new J(e),this.aX=!1,this.aY=0;for(var t=0,n=this.ak.length|0;t<n;){var r=t+this.aY|0;this.ak[r].fD(e),t=1+t|0}ii(this),this.aX=!0,this.aY=0});if(Jr(),e.V)t();else{e.V=!0;try{t()}finally{e.V=!1,Gr(e)}}}else throw B(new V,`Can not activate `+this+`: it is already active`)}),b.gF=(function(){if(this.C.c())throw B(new V,`Can not deactivate DynamicOwner: it is not active`);this.aX=!1;for(var e=this.ak,t=0,n=e.length|0;t<n;)e[t].fF(),t=1+t|0;ii(this);var r=this.C;r.c()||r.t().ht(),ii(this),this.aX=!0,this.C=q()}),b.gi=(function(e,t){t?(this.aY=1+this.aY|0,this.ak.unshift(e)):this.ak.push(e);var n=this.C;if(!n.c()){var r=n.t();e.fD(r)}}),b.hQ=(function(e){this.aX?ri(this,e):this.bS.push(e)}),new T().i(ai,`com.raquo.airstream.ownership.DynamicOwner`,{bB:1});function oi(e,t,n){this.bT=null,this.db=null,this.bU=null,this.bT=e,this.db=t,this.bU=q(),e.gi(this,n)}b=oi.prototype=new C,b.constructor=oi,b.cg=(function(){this.bT.hQ(this)}),b.fD=(function(e){var t=Jr(),n=(()=>{this.bU=this.db.b(e)});if(Jr(),t.V)n();else{t.V=!0;try{n()}finally{t.V=!1,Gr(t)}}}),b.fF=(function(){var e=this.bU;e.c()||(e.t().cg(),this.bU=q())});var si=new T().i(oi,`com.raquo.airstream.ownership.DynamicSubscription`,{bC:1});function ci(){}b=ci.prototype=new C,b.constructor=ci,b.d3=(function(e,t,n){return new oi(e,new G((e=>new J(t.b(e)))),n)}),b.fO=(function(e,t,n){return new oi(e,new G((e=>(t.b(e),q()))),n)}),new T().i(ci,`com.raquo.airstream.ownership.DynamicSubscription$`,{bD:1});var li;function ui(){return li||=new ci,li}function di(e){e.aZ=xi().aE(P().aj(new(_i.r()).C([])))}function fi(e){for(var t=e.aZ,n=0,r=t.length|0;n<r;)hi(t[n]),n=1+n|0;e.aZ.length=0}function pi(e,t){var n=e.aZ.indexOf(t)|0;if(n!==-1)e.aZ.splice(n,1);else throw B(new V,`Can not remove Subscription from Owner: subscription not found.`)}function mi(e,t){e.aZ.push(t)}function hi(e){if(!e.cp)e.dd.Y(),e.cp=!0;else throw B(new V,`Can not kill Subscription: it was already killed.`)}function gi(e,t){this.de=null,this.dd=null,this.cp=!1,this.de=e,this.dd=t,this.cp=!1,e.hH(this)}b=gi.prototype=new C,b.constructor=gi,b.cg=(function(){hi(this),pi(this.de,this)});var _i=new T().i(gi,`com.raquo.airstream.ownership.Subscription`,{bG:1});function vi(e,t){this.df=null,this.dg=null,this.al=null,this.aM=!1,this.df=e,this.dg=t,this.al=q(),this.aM=!1}b=vi.prototype=new C,b.constructor=vi,b.hp=(function(){var e=this.al;return!e.c()&&!e.t().bT.C.c()}),b.hU=(function(e){if(this.aM)throw B(new V,`Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var t=this.al;if(t.c())var n=!1;else var r=t.t().bT,n=e===null?r===null:e===r;if(!n){this.hp()&&!e.C.c()&&(this.aM=!0);var i=this.al;i.c()||(i.t().cg(),this.al=q());var a=ui().d3(e,new G((e=>(this.aM||this.df.Y(),new gi(e,new Cu((()=>{this.aM||this.dg.Y()})))))),!1);this.al=new J(a),this.aM=!1}}),b.gA=(function(){if(this.aM)throw B(new V,`Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var e=this.al;e.c()||e.t().cg(),this.al=q()}),new T().i(vi,`com.raquo.airstream.ownership.TransferableSubscription`,{bH:1});function yi(){}b=yi.prototype=new C,b.constructor=yi,b.aE=(function(e){return[...Ts().i7(e)]}),new T().i(yi,`com.raquo.ew.JsArray$`,{bI:1});var bi;function xi(){return bi||=new yi,bi}function Si(){}b=Si.prototype=new C,b.constructor=Si,b.h5=(function(e,t){for(var n=0,r=e.length|0;n<r;)t(e[n]),n=1+n|0}),new T().i(Si,`com.raquo.ew.JsArray$RichJsArray$`,{bJ:1});var Ci;function wi(){return Ci||=new Si,Ci}function Ti(){this.dh=null,Ei=this,document.createElement(`template`),this.gD(U().n.i2().i3()),this.dh=/* @__PURE__ */ RegExp(` `,`g`)}b=Ti.prototype=new C,b.constructor=Ti,b.go=(function(e,t){try{return e.appendChild(t),!0}catch(e){var n=e instanceof _c?e:new Rf(e);if(n instanceof Rf&&n.W instanceof DOMException)return!1;throw n instanceof Rf?n.W:n}}),b.hq=(function(e,t){for(var n=e;;){if(n.parentNode!==null)var r=n.parentNode;else var i=n.host,r=i===void 0?null:i;if(r===null)return!1;if(N().I(t,r))return!0;n=r}}),b.gb=(function(e,t){e.addEventListener(t.b3.bX.bY,t.cw,t.cx)}),b.hO=(function(e,t){e.removeEventListener(t.b3.bX.bY,t.cw,t.cx)}),b.gC=(function(e){return document.createElement(e.cY())}),b.hd=(function(e,t){var n=this.he(e,t);return n===void 0?void 0:t.b0.cc(n)}),b.he=(function(e,t){var n=e.D.getAttributeNS(null,t.am);return n===null?void 0:n}),b.fL=(function(e,t,n){this.hT(e,t,t.b0.cf(n))}),b.hT=(function(e,t,n){n===null?this.hP(e,t):e.D.setAttribute(t.am,n)}),b.hP=(function(e,t){e.D.removeAttribute(t.am)}),b.fM=(function(e,t,n){var r=e.D,i=t.b1,a=t.b2,o=n===null?null:n;o===null?(a.U(new G((e=>r.style.removeProperty(``+e+i)))),r.style.removeProperty(i)):(a.U(new G((e=>{r.style.setProperty(``+e+i,o)}))),r.style.setProperty(i,o))}),b.gD=(function(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e.e5)}),b.hh=(function(e,t){var n=this.hi(e,t);return n===void 0?void 0:t.cu.cc(n)}),b.hi=(function(e,t){var n=e.d0(),r=t.c0,i=n.getAttributeNS(r.c()?null:r.t(),t.cv);return i===null?void 0:i}),b.hV=(function(e,t,n){this.hW(e,t,t.cu.cf(n))}),b.hW=(function(e,t,n){if(n===null)this.hR(e,t);else{var r=t.c0;if(r.c())e.d0().setAttribute(t.bZ,n);else{var i=r.t();e.d0().setAttributeNS(i,t.bZ,n)}}}),b.hR=(function(e,t){var n=e.d0(),r=t.c0;n.removeAttributeNS(r.c()?null:r.t(),t.cv)}),b.gE=(function(e){return document.createTextNode(e)}),b.gH=(function(e,t){for(var n=t,r=e;;){if(r===null)return n;var i=r.parentNode,a=new Q(this.gG(r),n);r=i,n=a}}),b.gG=(function(e){if(e instanceof HTMLElement){var t=e.id;if(Zo(),t!==``)var n=`#`+t;else var r=e.className,n=(Zo(),r===``?``:`.`+r.replace(this.dh,`.`));return e.tagName.toLowerCase()+n}return e.nodeName}),new T().i(Ti,`com.raquo.laminar.DomApi$`,{bK:1});var Ei;function D(){return Ei||=new Ti,Ei}function Di(e,t,n){this.cr=null,this.di=null,this.cq=null,this.cr=e,this.di=t,this.cq=n}b=Di.prototype=new C,b.constructor=Di,b.U=(function(e){this.cr===null?this.cq===null?Ho().h6(this.di,e):wi().h5(this.cq,Fl().h9(e)):this.cr.U(e)}),new T().i(Di,`com.raquo.laminar.Seq`,{bL:1});function Oi(){ki=this,$()}b=Oi.prototype=new C,b.constructor=Oi,new T().i(Oi,`com.raquo.laminar.Seq$`,{bM:1});var ki;function Ai(){return ki||=new Oi,ki}function ji(e){zr(),zc()}function Mi(e){e.fT=aa()}function Ni(e){Pi(e,new G((e=>{e.dS.D.focus()})))}function Pi(e,t){return new Us(new G((e=>{var n=new Mc(!e.aa.C.c()),r=new G((e=>{n.c8?n.c8=!1:t.b(e)}));ui().fO(e.aa,new G((e=>(t=>{r.b(new na(e,t))}))(e)),!1)})),aa())}function Fi(){this.bc=null,this.cs=null,Ii=this,this.bc=new Ps(Li()),new Ps(Li()),new Ps(Li()),this.cs=new Ns}b=Fi.prototype=new C,b.constructor=Fi,new T().i(Fi,`com.raquo.laminar.codecs.package$`,{bU:1});var Ii;function Li(){return Ii||=new Fi,Ii}function Ri(e){e.fU=zi(e,`class`,` `)}function zi(e,t,n){var r=Rs(new zs,t,Li().bc);return new Is(r.am,new G((e=>{var t=D().hd(e,r);return t===void 0?``:t})),new wu(((e,t)=>{D().fL(e,r,t)})),n)}function Bi(e){e.fS=Vi(e,`class`,` `)}function Vi(e,t,n){var r=new Vs(t,Li().bc,q());return new Is(r.bZ,new G((e=>{var t=D().hh(e,r);return t===void 0?``:t})),new wu(((e,t)=>{D().hV(e,r,t)})),n)}function Hi(e){this.bV=null,this.bV=e}b=Hi.prototype=new C,b.constructor=Hi,b.fG=(function(e,t){try{this.bV.cR(e,t)}catch(e){var n=e instanceof _c?e:new Rf(e);zc().bN(n)}}),b.gB=(function(e){return new Hi(new wu(((t,n)=>{this.bV.cR(t,n),e.bV.cR(t,n)})))}),b.gp=(function(e){return e===void 0?this:e.gB(this)}),new T().i(Hi,`com.raquo.laminar.inserters.InserterHooks`,{cj:1});function Ui(){}b=Ui.prototype=new C,b.constructor=Ui,b.hE=(function(e,t){return new Eu(e,void 0)}),new T().i(Ui,`com.raquo.laminar.inserters.StaticChildInserter$`,{cl:1});var Wi;function Gi(){return Wi||=new Ui,Wi}function Ki(e,t){this.dN=null,this.dM=null,this.dN=e,this.dM=t}b=Ki.prototype=new C,b.constructor=Ki,b.r=(function(e){return new Wc(this.dN,this.dM.b(e),new Tu(((e,t,n)=>{D().fM(e,t,n)})))}),new T().i(Ki,`com.raquo.laminar.keys.DerivedStyleProp`,{co:1});function qi(e,t,n,r){this.bX=null,this.dQ=!1,this.dP=!1,this.dO=null,this.bX=e,this.dQ=t,this.dP=n,this.dO=r}b=qi.prototype=new C,b.constructor=qi,new T().i(qi,`com.raquo.laminar.keys.EventProcessor`,{cp:1});function Ji(){}b=Ji.prototype=new C,b.constructor=Ji,b.fi=(function(e,t,n){return new qi(e,t,n,new G((e=>new J(e))))}),new T().i(Ji,`com.raquo.laminar.keys.EventProcessor$`,{cq:1});var Yi;function Xi(){return Yi||=new Ji,Yi}function Zi(){}b=Zi.prototype=new C,b.constructor=Zi;function Qi(){}Qi.prototype=b;function $i(){this.fV=null,this.fW=null,this.fX=null,this.fY=null,this.fV=`http://www.w3.org/2000/svg`,this.fW=`http://www.w3.org/1999/xlink`,this.fX=`http://www.w3.org/XML/1998/namespace`,this.fY=`http://www.w3.org/2000/xmlns/`}b=$i.prototype=new C,b.constructor=$i,b.hB=(function(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`xlink`:return`http://www.w3.org/1999/xlink`;case`xml`:return`http://www.w3.org/XML/1998/namespace`;case`xmlns`:return`http://www.w3.org/2000/xmlns/`;default:throw new rd(e)}}),new T().i($i,`com.raquo.laminar.keys.SvgAttr$`,{ct:1});var ea;function ta(){return ea||=new $i,ea}function na(e,t){this.dS=null,this.dR=null,this.dS=e,this.dR=t}b=na.prototype=new C,b.constructor=na,new T().i(na,`com.raquo.laminar.lifecycle.MountContext`,{cu:1});var O=new T().i(1,`com.raquo.laminar.modifiers.Modifier`,{T:1});function ra(){this.fZ=null,ia=this,this.fZ=new Hs}b=ra.prototype=new C,b.constructor=ra,new T().i(ra,`com.raquo.laminar.modifiers.Modifier$`,{cy:1});var ia;function aa(){return ia||=new ra,ia}function oa(){this.dX=null,sa=this,this.dX=new Ws}b=oa.prototype=new C,b.constructor=oa,new T().i(oa,`com.raquo.laminar.modifiers.RenderableNode$`,{cC:1});var sa;function ca(){return sa||=new oa,sa}function la(){this.x=null,ua=this,this.x=new Js(new G((e=>e)),k()),new Js(new G((e=>``+(e|0))),k()),new Js(new G((e=>``+ +e)),k()),new Js(new G((e=>``+!!e)),k()),new Js(new G((e=>e.i6())),k())}b=la.prototype=new C,b.constructor=la,new T().i(la,`com.raquo.laminar.modifiers.RenderableText$`,{cH:1});var ua;function k(){return ua||=new la,ua}function da(){}b=da.prototype=new C,b.constructor=da,b.bw=(function(e,t,n){var r=new J(e);t.fR(r),n!==void 0&&n.fG(e,t);var i=D().go(e.aU(),t.aU());return i&&t.fN(r),i}),new T().i(da,`com.raquo.laminar.nodes.ParentNode$`,{cK:1});var fa;function pa(){return fa||=new da,fa}function ma(){}b=ma.prototype=new C,b.constructor=ma,b.i9=(function(e,t){return ui().d3(e.aa,new G((n=>t.b(new na(e,n)))),!0)}),new T().i(ma,`com.raquo.laminar.nodes.ReactiveElement$`,{cM:1});var ha;function ga(){return ha||=new ma,ha}function _a(e){this.e2=null,this.e2=new Hi(new wu(((t,n)=>{matchResult1:{var r=n.aU();if(r instanceof Element){r.setAttribute(`slot`,e);break matchResult1}if(r instanceof Text){var i=zc(),a=r.textContent,o=t.aU().tagName;i.bN(B(new V,"Error: You tried to insert a raw text node `"+a+"` into the `"+e+"` slot of <"+o.toLowerCase()+`>.
 - Cause: This is not possible: named slots only accept elements. Your node was inserted into the default slot instead.
 - Suggestion: Wrap your text node into \`span()\``));break matchResult1}}})))}b=_a.prototype=new C,b.constructor=_a,b.gs=(function(e){return e.cX(new G((e=>e.ib(this.e2))))}),new T().i(_a,`com.raquo.laminar.nodes.Slot`,{cP:1});function va(){}b=va.prototype=new C,b.constructor=va,b.g5=(function(e){return U().n.fh().bH(new Z([U().n.gL().h3(),U().n.h4().id(),U().n.gj().gz(),U().n.ha().hJ().r(16),Vc(U().n,e,qs())]))}),new T().i(va,`doc.Examples$package$`,{cT:1});var ya;function ba(){return ya||=new va,ya}function xa(){}b=xa.prototype=new C,b.constructor=xa,b.gl=(function(){Ca().gV(),Ca().gW(),Ca().gX(),Ca().gY(),Ca().gZ()}),b.gV=(function(){var e=document.querySelector(`#example1`);Io().bG(e).c()||(U(),new Gc(e,Yc().v(new Z(I().j(new(M.r()).C([]))),new Z(I().j(new(O.r()).C([Qc().v(new Z(I().j(new(M.r()).C([new H((e=>e.a5().r(`Shipping`))),new H((e=>e.fr().r(!0)))]))),new Z(I().j(new(O.r()).C([z(U().n,`Orders ship within two business days.`,k().x)])))),Qc().v(new Z(I().j(new(M.r()).C([new H((e=>e.a5().r(`Returns`)))]))),new Z(I().j(new(O.r()).C([z(U().n,`You can return unused items within 30 days.`,k().x)])))),Qc().v(new Z(I().j(new(M.r()).C([new H((e=>e.a5().r(`Support`)))]))),new Z(I().j(new(O.r()).C([z(U().n,`Contact us if you need help with your order.`,k().x)]))))]))))))}),b.gW=(function(){var e=document.querySelector(`#example2`);Io().bG(e).c()||(U(),new Gc(e,Yc().v(new Z(I().j(new(M.r()).C([new H((e=>e.hz().hZ()))]))),new Z(I().j(new(O.r()).C([Qc().v(new Z(I().j(new(M.r()).C([new H((e=>e.a5().r(`First section`))),new H((e=>e.fr().r(!0)))]))),new Z(I().j(new(O.r()).C([z(U().n,`First section content.`,k().x)])))),Qc().v(new Z(I().j(new(M.r()).C([new H((e=>e.a5().r(`Second section`)))]))),new Z(I().j(new(O.r()).C([z(U().n,`Second section content.`,k().x)]))))]))))))}),b.gX=(function(){var e=document.querySelector(`#example3`);Io().bG(e).c()||(U(),new Gc(e,Yc().v(new Z(I().j(new(M.r()).C([new H((e=>e.gm().h2())),new H((e=>e.hm().i0())),new H((e=>e.hl().r(`2`)))]))),new Z(I().j(new(O.r()).C([Qc().v(new Z(I().j(new(M.r()).C([new H((e=>e.a5().r(`Account settings`)))]))),new Z(I().j(new(O.r()).C([z(U().n,`Manage your profile and preferences.`,k().x)])))),Qc().v(new Z(I().j(new(M.r()).C([new H((e=>e.a5().r(`Privacy settings`)))]))),new Z(I().j(new(O.r()).C([z(U().n,`Choose what information to share.`,k().x)]))))]))))))}),b.gY=(function(){var e=document.querySelector(`#example4`);Io().bG(e).c()||(U(),new Gc(e,Yc().v(new Z(I().j(new(M.r()).C([]))),new Z(I().j(new(O.r()).C([Qc().v(new Z(I().j(new(M.r()).C([new H((e=>Bc(U().n,Da().hu().gs(new Z(I().j(new(Du.r()).C([(U(),Gi().hE(U().n.i1().bH(new Z(I().j(new(O.r()).C([z(U().n,`Important information`,k().x)])))),ca().dX))])))),Do().ey,qs())))]))),new Z(I().j(new(O.r()).C([z(U().n,`This section has a custom label.`,k().x)])))),Qc().v(new Z(I().j(new(M.r()).C([new H((e=>e.a5().r(`Unavailable`))),new H((e=>e.gK().r(!0)))]))),new Z(I().j(new(O.r()).C([z(U().n,`This section cannot be toggled.`,k().x)]))))]))))))}),b.gZ=(function(){var e=document.querySelector(`#example5`);if(!Io().bG(e).c()){U();var t=Yc().v(new Z(I().j(new(M.r()).C([]))),new Z(I().j(new(O.r()).C([Qc().v(new Z(I().j(new(M.r()).C([new H((e=>e.a5().r(`Overview`)))]))),new Z(I().j(new(O.r()).C([z(U().n,`A short overview.`,k().x)])))),Qc().v(new Z(I().j(new(M.r()).C([new H((e=>e.a5().r(`Details`)))]))),new Z(I().j(new(O.r()).C([z(U().n,`More detailed information.`,k().x)]))))]))));new Gc(e,U().n.fh().bH(new Z(I().j(new(O.r()).C([ba().g5(new Z(I().j(new(Yd.r()).C([tl().v(new Z(I().j(new(M.r()).C([]))),new Z(I().j(new(O.r()).C([z(U().n,`Expand all`,k().x),new Hc((U(),Xi().fi(U().n.fE(),!1,!1)),new H((e=>{t.D.expandAll()})))])))),tl().v(new Z(I().j(new(M.r()).C([]))),new Z(I().j(new(O.r()).C([z(U().n,`Collapse all`,k().x),new Hc((U(),Xi().fi(U().n.fE(),!1,!1)),new H((e=>{t.D.collapseAll()})))]))))])))),U().n.gx().bH(new Z(I().j(new(O.r()).C([])))),t])))))}}),new T().i(xa,`examples.accordion.Main$package$`,{cU:1});var Sa;function Ca(){return Sa||=new xa,Sa}function wa(e){try{Ca().gl()}catch(e){throw e}}function Ta(){this.ek=null,this.el=!1}b=Ta.prototype=new C,b.constructor=Ta,b.hu=(function(){return this.el||=(this.ek=new _a(`label`),!0),this.ek}),new T().i(Ta,`io.github.nguyenyou.webawesome.laminar.AccordionItem$slots$`,{cX:1});var Ea;function Da(){return Ea||=new Ta,Ea}function Oa(e,t){for(var n=A().a0(`^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$`),r=[],i=0;i<(t.length|0);){var a=t[i];if(a!==``){var o=n.exec(a);if(o!==null){var s=ka(e,o[1]),c=s[0],l=s[1],u=o[2],d=o[3],f=parseInt(d),p=o[4];r.push(new fc(c,l,u,f|0,p===void 0?-1:parseInt(p)|0))}else r.push(new fc(`<jscode>`,a,null,-1,-1))|0}i=1+i|0}var ee=r.length|0,te=new(pc.r()).C(ee);for(i=0;i<ee;)te.a[i]=r[i],i=1+i|0;return te}function ka(e,t){var n=A().a0(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$`),r=A().a0(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$`),i=A().a0(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$`),a=A().a0(`^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$`),o=A().a0(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$`),s=n.exec(t),c=s===null?r.exec(t):s;if(c!==null)return[Aa(e,c[1]),La(e,c[2])];var l=i.exec(t),u=l===null?a.exec(t):l;if(u!==null)return[Aa(e,u[1]),`<init>`];var d=o.exec(t);return d===null?[`<jscode>`,t]:[Aa(e,d[1]),`<clinit>`]}function Aa(e,t){var n=Ma(e);if(lo().cI.call(n,t))var r=Ma(e)[t];else var r=Ja(e,0,t);return r.split(`_`).join(`.`).split(`＿`).join(`_`)}function ja(e){if(!((1&e.K)<<24>>24)){var t={};t.O=`java_lang_Object`,t.T=`java_lang_String`;for(var n=0;n<=22;){if(n>=2){var r=`T`+n;t[r]=`scala_Tuple`+n}var i=`F`+n;t[i]=`scala_Function`+n,n=1+n|0}e.cF=t,e.K=(1|e.K)<<24>>24}return e.cF}function Ma(e){return(1&e.K)<<24>>24?e.cF:ja(e)}function Na(e){if(!((2&e.K)<<24>>24)){var t={};t.sjsr_=`scala_scalajs_runtime_`,t.sjs_=`scala_scalajs_`,t.sci_=`scala_collection_immutable_`,t.scm_=`scala_collection_mutable_`,t.scg_=`scala_collection_generic_`,t.sc_=`scala_collection_`,t.sr_=`scala_runtime_`,t.s_=`scala_`,t.jl_=`java_lang_`,t.ju_=`java_util_`,e.cG=t,e.K=(2|e.K)<<24>>24}return e.cG}function Pa(e){return(2&e.K)<<24>>24?e.cG:Na(e)}function Fa(e){return(4&e.K)<<24>>24||(e.cE=Object.keys(Pa(e)),e.K=(4|e.K)<<24>>24),e.cE}function Ia(e){return(4&e.K)<<24>>24?e.cE:Fa(e)}function La(e,t){if(t.startsWith(`init___`))return`<init>`;var n=t.indexOf(`__`)|0;return n<0?t:t.substring(0,n)}function Ra(e,t){return t?t.arguments&&t.stack?za(e,t):t.stack&&t.sourceURL?Ha(e,t):t.stack&&t.number?Va(e,t):t.stack&&t.fileName?Ba(e,t):t.message&&t[`opera#sourceloc`]?t.stacktrace?t.message.indexOf(`
`)>-1&&t.message.split(`
`).length>t.stacktrace.split(`
`).length?Ua(e,t):Wa(e,t):Ua(e,t):t.message&&t.stack&&t.stacktrace?t.stacktrace.indexOf(`called from line`)<0?Ga(e,t):Ka(e,t):t.stack&&!t.fileName?za(e,t):qa(e,t):[]}function za(e,t){return(t.stack+`
`).replace(A().a0(`^[\\s\\S]+?\\s+at\\s+`),` at `).replace(A().B(`^\\s+(at eval )?at\\s+`,`gm`),``).replace(A().B(`^([^\\(]+?)([\\n])`,`gm`),`{anonymous}() ($1)$2`).replace(A().B(`^Object.<anonymous>\\s*\\(([^\\)]+)\\)`,`gm`),`{anonymous}() ($1)`).replace(A().B(`^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(0,-1)}function Ba(e,t){return t.stack.replace(A().B(`(?:\\n@:0)?\\s+$`,`m`),``).replace(A().B(`^(?:\\((\\S*)\\))?@`,`gm`),`{anonymous}($1)@`).split(`
`)}function Va(e,t){return t.stack.replace(A().B(`^\\s*at\\s+(.*)$`,`gm`),`$1`).replace(A().B(`^Anonymous function\\s+`,`gm`),`{anonymous}() `).replace(A().B(`^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(1)}function Ha(e,t){return t.stack.replace(A().B(`\\[native code\\]\\n`,`m`),``).replace(A().B(`^(?=\\w+Error\\:).*$\\n`,`m`),``).replace(A().B(`^@`,`gm`),`{anonymous}()@`).split(`
`)}function Ua(e,t){for(var n=A().B(`Line (\\d+).*script (?:in )?(\\S+)`,`i`),r=t.message.split(`
`),i=[],a=2,o=r.length|0;a<o;){var s=n.exec(r[a]);s!==null&&i.push(`{anonymous}()@`+s[2]+`:`+s[1])|0,a=2+a|0}return i}function Wa(e,t){for(var n=A().B(`Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$`,`i`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[3],l=c===void 0?`{anonymous}`:c;i.push(l+`()@`+s[2]+`:`+s[1])|0}a=2+a|0}return i}function Ga(e,t){for(var n=A().a0(`^(.*)@(.+):(\\d+)$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[1],l=c===void 0?`global code`:c+`()`;i.push(l+`@`+s[2]+`:`+s[3])|0}a=1+a|0}return i}function Ka(e,t){for(var n=A().a0(`^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[4]+`:`+s[1]+`:`+s[2],l=s[2],u=(l===void 0?`global code`:l).replace(A().a0(`<anonymous function: (\\S+)>`),`$1`).replace(A().a0(`<anonymous function>`),`{anonymous}`);i.push(u+`@`+c)|0}a=2+a|0}return i}function qa(e,t){return[]}function Ja(e,t,n){for(;;)if(t<(Ia(e).length|0)){var r=Ia(e)[t];if(n.startsWith(r))return``+Pa(e)[r]+n.substring(r.length);t=1+t|0}else return n.startsWith(`L`)?n.substring(1):n}function Ya(){this.cF=null,this.cG=null,this.cE=null,this.K=0}b=Ya.prototype=new C,b.constructor=Ya,b.h0=(function(e){return Oa(this,Ra(this,e))}),new T().i(Ya,`java.lang.StackTrace$`,{dl:1});var Xa;function Za(){return Xa||=new Ya,Xa}function Qa(){}b=Qa.prototype=new C,b.constructor=Qa,b.a0=(function(e){return new RegExp(e)}),b.B=(function(e,t){return new RegExp(e,t)}),new T().i(Qa,`java.lang.StackTrace$StringRE$`,{dm:1});var $a;function A(){return $a||=new Qa,$a}function eo(){this.et=null,this.g0=null,to=this,this.et=new Bf(!1),this.g0=new Bf(!0)}b=eo.prototype=new C,b.constructor=eo,new T().i(eo,`java.lang.System$Streams$`,{dr:1});var to;function no(){return to||=new eo,to}function ro(e){var t={};return t[`java.version`]=`1.8`,t[`java.vm.specification.version`]=`1.8`,t[`java.vm.specification.vendor`]=`Oracle Corporation`,t[`java.vm.specification.name`]=`Java Virtual Machine Specification`,t[`java.vm.name`]=`Scala.js`,t[`java.vm.version`]=`1.22.0`,t[`java.specification.version`]=`1.8`,t[`java.specification.vendor`]=`Oracle Corporation`,t[`java.specification.name`]=`Java Platform API Specification`,t[`file.separator`]=`/`,t[`path.separator`]=`:`,t[`line.separator`]=`
`,t}function io(){this.cH=null,this.eu=null,ao=this,this.cH=ro(this),this.eu=null}b=io.prototype=new C,b.constructor=io,b.fy=(function(e,t){if(this.cH!==null){var n=this.cH;return lo().cI.call(n,e)?n[e]:t}return this.eu.fy(e,t)}),new T().i(io,`java.lang.System$SystemProperties$`,{ds:1});var ao;function oo(){return ao||=new io,ao}function so(){this.cI=null,co=this,this.cI=Object.prototype.hasOwnProperty}b=so.prototype=new C,b.constructor=so,new T().i(so,`java.lang.Utils$Cache$`,{du:1});var co;function lo(){return co||=new so,co}function uo(e,t){return e===t}function fo(e){return 0}function po(e,t){return!!(e&&e.$classData&&e.$classData.D===t&&e.$classData.B.n.az)}var mo=new T().i(0,`java.lang.Void`,{az:1},(e=>e===void 0));function ho(e,t){throw Vu(new Uu,`argument type mismatch`)}function go(){}b=go.prototype=new C,b.constructor=go,b.Z=(function(e){return e instanceof w||e instanceof gr||e instanceof _r||e instanceof vr||e instanceof yr||e instanceof br?e.a.length:e instanceof xr?e.a.length>>>1|0:(e instanceof Sr||e instanceof Cr||ho(this,e),e.a.length)}),new T().i(go,`java.lang.reflect.Array$`,{dv:1});var _o;function vo(){return _o||=new go,_o}function yo(){}b=yo.prototype=new C,b.constructor=yo,b.gv=(function(e,t){for(var n=0,r=e.a.length;;)if(n===r)return~n;else{var i=(n+r|0)>>>1|0,a=e.a[i],o=t===a?0:t<a?-1:1;if(o<0){r=i;continue}if(o!==0){n=1+i|0;continue}return i}}),b.fn=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length>>>1|0;if((t.a.length>>>1|0)!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a,o=i<<1,s=a[o],c=a[o+1|0],l=r,u=t.a,d=l<<1,f=u[d],p=u[d+1|0];if((s^f|c^p)!==0)return!1;r=1+r|0}return!0}),b.fm=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),b.fo=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),b.fl=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),b.fk=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),b.fp=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),new T().i(yo,`java.util.Arrays$`,{dw:1});var bo;function j(){return bo||=new yo,bo}function xo(e,t){return wo().fQ(e,t)}function So(){}b=So.prototype=new C,b.constructor=So,b.fQ=(function(e,t){if(t===e>>31)return``+e;if(-2097152&(t^t>>10)){var n=t>>31,r=e^n,i=r-n|0,a=4294967296*(((t^n)+(i>>>0<r>>>0|0)|0)>>>0)+(i>>>0),o=+Math.floor(1.0000000000000265e-9*a),s=i-Math.imul(1e9,o|0)|0;s<0&&(--o,s=1e9+s|0);var c=``+s,l=o,u=c.length,d=``+l+`000000000`.substring(u)+c;return t<0?`-`+d:d}return``+(4294967296*t+(e>>>0))}),b.fx=(function(e){if(e<-0x8000000000000000)return S(0,-2147483648);if(e>=0x8000000000000000)return S(-1,2147483647);var t=e|0,n=23283064365386963e-26*e|0;return S(t,e<0&&t!==0?n-1|0:n)}),b.gM=(function(e,t,n,r){var i=t>>31,a=e^i,o=a-i|0,s=(t^i)+(o>>>0<a>>>0|0)|0,c=r>>31,l=n^c,u=l-c|0,d=(r^c)+(u>>>0<l>>>0|0)|0;if(d|-2097152&u){var f=(4294967296*(s>>>0)+(o>>>0))/(4294967296*(d>>>0)+(u>>>0))+.00390625,p=f|0,ee=23283064365386963e-26*f|0,te=65535&u,ne=u>>>16|0,re=65535&p,ie=p>>>16|0,ae=Math.imul(te,re),oe=Math.imul(ne,re),se=Math.imul(te,ie),ce=ae+((oe+se|0)<<16)|0,le=(ae>>>16|0)+se|0;if(((s-((((Math.imul(u,ee)+Math.imul(d,p)|0)+Math.imul(ne,ie)|0)+(le>>>16|0)|0)+(((65535&le)+oe|0)>>>16|0)|0)|0)-((o-ce|0)>>>0>o>>>0|0)|0)<0)var ue=p-1|0,de=(ee-1|0)+(ue!==-1|0)|0,fe=ue,pe=de;else var fe=p,pe=ee}else var me=(s>>>0)/(Qn(u)>>>0)|0,fe=(4294967296*(s-Math.imul(u,me)|0)+(o>>>0))/u|0,pe=me;if((t^r)>=0)return S(fe,pe);var he=-fe|0;return S(he,(-pe|0)-(he!==0|0)|0)}),b.gN=(function(e,t,n,r){if(!(r|-2097152&n)){var i=(t>>>0)/(Qn(n)>>>0)|0;return S((4294967296*(t-Math.imul(n,i)|0)+(e>>>0))/n|0,i)}if(r>=0){var a=(4294967296*(t>>>0)+(e>>>0))/(4294967296*(r>>>0)+(n>>>0))+.00390625,o=a|0,s=23283064365386963e-26*a|0,c=65535&n,l=n>>>16|0,u=65535&o,d=o>>>16|0,f=Math.imul(c,u),p=Math.imul(l,u),ee=Math.imul(c,d),te=f+((p+ee|0)<<16)|0,ne=(f>>>16|0)+ee|0;if(((t-((((Math.imul(n,s)+Math.imul(r,o)|0)+Math.imul(l,d)|0)+(ne>>>16|0)|0)+(((65535&ne)+p|0)>>>16|0)|0)|0)-((e-te|0)>>>0>e>>>0|0)|0)<0){var re=o-1|0;return S(re,(s-1|0)+(re!==-1|0)|0)}return S(o,s)}return(t===r?e>>>0<n>>>0:t>>>0<r>>>0)?S(0,0):S(1,0)}),b.hM=(function(e,t,n,r){var i=t>>31,a=e^i,o=a-i|0,s=(t^i)+(o>>>0<a>>>0|0)|0,c=r>>31,l=n^c,u=l-c|0,d=(r^c)+(u>>>0<l>>>0|0)|0;if(d|-2097152&u){var f=(4294967296*(s>>>0)+(o>>>0))/(4294967296*(d>>>0)+(u>>>0))+.00390625,p=f|0,ee=23283064365386963e-26*f|0,te=65535&u,ne=u>>>16|0,re=65535&p,ie=p>>>16|0,ae=Math.imul(te,re),oe=Math.imul(ne,re),se=Math.imul(te,ie),ce=ae+((oe+se|0)<<16)|0,le=(ae>>>16|0)+se|0,ue=(((Math.imul(u,ee)+Math.imul(d,p)|0)+Math.imul(ne,ie)|0)+(le>>>16|0)|0)+(((65535&le)+oe|0)>>>16|0)|0,de=o-ce|0,fe=(s-ue|0)-(de>>>0>o>>>0|0)|0;if(fe<0)var pe=de+u|0,me=(fe+d|0)+(pe>>>0<de>>>0|0)|0,he=pe,ge=me;else var he=de,ge=fe}else var _e=(4294967296*((s>>>0)%(Qn(u)>>>0)|0)+(o>>>0))/u|0,he=o-Math.imul(u,_e)|0,ge=0;if(t<0){var ve=-he|0;return S(ve,(-ge|0)-(ve!==0|0)|0)}return S(he,ge)}),b.hN=(function(e,t,n,r){if(!(r|-2097152&n)){var i=(4294967296*((t>>>0)%(Qn(n)>>>0)|0)+(e>>>0))/n|0;return S(e-Math.imul(n,i)|0,0)}if(r>=0){var a=(4294967296*(t>>>0)+(e>>>0))/(4294967296*(r>>>0)+(n>>>0))+.00390625,o=a|0,s=23283064365386963e-26*a|0,c=65535&n,l=n>>>16|0,u=65535&o,d=o>>>16|0,f=Math.imul(c,u),p=Math.imul(l,u),ee=Math.imul(c,d),te=f+((p+ee|0)<<16)|0,ne=(f>>>16|0)+ee|0,re=(((Math.imul(n,s)+Math.imul(r,o)|0)+Math.imul(l,d)|0)+(ne>>>16|0)|0)+(((65535&ne)+p|0)>>>16|0)|0,ie=e-te|0,ae=(t-re|0)-(ie>>>0>e>>>0|0)|0;if(ae<0){var oe=ie+n|0;return S(oe,(ae+r|0)+(oe>>>0<ie>>>0|0)|0)}return S(ie,ae)}if(t===r?e>>>0<n>>>0:t>>>0<r>>>0)return S(e,t);var se=e-n|0;return S(se,(t-r|0)-(se>>>0>e>>>0|0)|0)}),new T().i(So,`org.scalajs.linker.runtime.RuntimeLong$`,{dz:1});var Co;function wo(){return Co||=new So,Co}function To(){this.ey=null,Eo=this,this.ey=new td}b=To.prototype=new C,b.constructor=To,new T().i(To,`scala.$less$colon$less$`,{dC:1});var Eo;function Do(){return Eo||=new To,Eo}function Oo(e,t,n,r,i,a){for(var o=n,s=i,c=n+a|0;o<c;)P().ca(r,s,P().aR(t,o)),o=1+o|0,s=1+s|0}function ko(){}b=ko.prototype=new C,b.constructor=ko,b.fs=(function(e,t){var n=e.p();if(n>-1){for(var r=t.cZ(n),i=e.d(),a=0;a<n;)P().ca(r,a,i.g()),a=1+a|0;return r}var o=null,s=t.ci(),c=s===Er.l();o=[];for(var l=e.d();l.i();){var u=l.g(),d=c?fr(u):u===null?os().d2(s):u;o.push(d)}return os().d1(s===wr.l()?mo.l():s===fs.l()||s===Ml.l()?E.l():s,o)}),b.cb=(function(e,t,n,r,i){var a=qn(e);a.a2.Z&&qn(n).a2.R(a.a2)?e.a1(t,n,r,i):Oo(this,e,t,n,r,i)}),b.fq=(function(e,t){if(e===t)return!0;if(e.a.length!==t.a.length)return!1;for(var n=e.a.length,r=0;r<n;){if(!N().I(e.a[r],t.a[r]))return!1;r=1+r|0}return!0}),new T().i(ko,`scala.Array$`,{dE:1});var Ao;function jo(){return Ao||=new ko,Ao}var M=new T().i(1,`scala.Function1`,{e:1});function Mo(){}b=Mo.prototype=new C,b.constructor=Mo;function No(){}No.prototype=b;function Po(){}b=Po.prototype=new C,b.constructor=Po,b.bG=(function(e){return e===null?q():new J(e)}),new T().i(Po,`scala.Option$`,{dM:1});var Fo;function Io(){return Fo||=new Po,Fo}function Lo(){this.eD=null,this.eC=null,Ro=this,this.eD=new H((e=>this.eD)),this.eC=new uu}b=Lo.prototype=new C,b.constructor=Lo,new T().i(Lo,`scala.PartialFunction$`,{dN:1});var Ro;function zo(){return Ro||=new Lo,Ro}function Bo(){this.eG=null,Vo=this,this.eG=new H((e=>Ho().eG))}b=Bo.prototype=new C,b.constructor=Bo,b.h6=(function(e,t){var n=vo().Z(e),r=0;if(e instanceof w)for(;r<n;)t.b(e.a[r]),r=1+r|0;else if(e instanceof br)for(;r<n;)t.b(e.a[r]),r=1+r|0;else if(e instanceof Cr)for(;r<n;)t.b(e.a[r]),r=1+r|0;else if(e instanceof xr)for(;r<n;){var i=e.a,a=r<<1,o=i[a],s=i[a+1|0];t.b(S(o,s)),r=1+r|0}else if(e instanceof Sr)for(;r<n;)t.b(e.a[r]),r=1+r|0;else if(e instanceof _r)for(;r<n;)t.b(ur(e.a[r])),r=1+r|0;else if(e instanceof vr)for(;r<n;)t.b(e.a[r]),r=1+r|0;else if(e instanceof yr)for(;r<n;)t.b(e.a[r]),r=1+r|0;else if(e instanceof gr)for(;r<n;)t.b(e.a[r]),r=1+r|0;else throw new rd(e)}),new T().i(Bo,`scala.collection.ArrayOps$`,{dS:1});var Vo;function Ho(){return Vo||=new Bo,Vo}function Uo(e,t){for(var n=e.d();n.i();)t.b(n.g())}function Wo(e,t,n,r){var i=e.d(),a=n;matchResult18:{var o,s=e.p();if(s===-1){var o=vo().Z(t);break matchResult18}var o=s}for(var c=vo().Z(t),l=r<o?r:o,u=n<0?c:c-n|0,d=u<l?u:l,f=n+(d<0?0:d)|0;a<f&&i.i();)P().ca(t,a,i.g()),a=1+a|0;return a-n|0}function Go(e,t,n,r){return e.p()===0?``+t+r:e.ba($p(new em),t,n,r).H.m}function Ko(e,t,n,r,i){var a=t.H;n.length!==0&&(a.m=``+a.m+n);var o=e.d();if(o.i()){var s=o.g();for(a.m=``+a.m+s;o.i();){r.length!==0&&(a.m=``+a.m+r);var c=o.g();a.m=``+a.m+c}}return i.length!==0&&(a.m=``+a.m+i),t}function qo(e,t){if(e.p()>=0){var n=e.p(),r=t.cZ(n);return e.aG(r,0,2147483647),r}var i=null,a=t.ci(),o=a===Er.l();i=[];for(var s=e.d();s.i();){var c=s.g(),l=o?fr(c):c===null?os().d2(a):c;i.push(l)}return os().d1(a===wr.l()?mo.l():a===fs.l()||a===Ml.l()?E.l():a,i)}function Jo(e,t){this.eI=null,this.bn=null,this.eI=e,this.bn=t}b=Jo.prototype=new C,b.constructor=Jo,b.hk=(function(){return this.eI.Y().d()}),new T().i(Jo,`scala.collection.Iterator$ConcatIteratorCell`,{e1:1});function Yo(){this.eJ=null,Xo=this,this.eJ=new H((e=>this.eJ))}b=Yo.prototype=new C,b.constructor=Yo,new T().i(Yo,`scala.collection.StringOps$`,{e7:1});var Xo;function Zo(){return Xo||=new Yo,Xo}function Qo(){}b=Qo.prototype=new C,b.constructor=Qo,b.fA=(function(e,t){return Gu(new qu,e+` is out of bounds (min 0, max `+t+`)`)}),new T().i(Qo,`scala.collection.generic.CommonErrors$`,{e8:1});var $o;function es(){return $o||=new Qo,$o}function ts(){this.eN=0,ns=this;try{Zo();var e=lc().hr(oo().fy(`scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength`,`64`),10,214748364)}catch(t){if(0)var e;else{var e;throw t}}this.eN=e}b=ts.prototype=new C,b.constructor=ts,new T().i(ts,`scala.collection.immutable.IndexedSeqDefaults$`,{eb:1});var ns;function rs(){return ns||=new ts,ns}function is(){}b=is.prototype=new C,b.constructor=is,b.d2=(function(e){return e===Dr.l()||e===Or.l()||e===Er.l()||e===kr.l()?0:e===Ar.l()?S(0,0):e===jr.l()||e===Mr.l()?0:e===Tr.l()?!1:e===wr.l()?void 0:null}),b.d1=(function(e,t){var n=t.length|0;if(e===Er.l()){for(var r=new _r(n),i=0;i!==n;)r.a[i]=65535&(t[i]|0),i=1+i|0;return r}for(var a=e.a2.U(n),o=0;o!==n;)P().ca(a,o,t[o]),o=1+o|0;return a}),new T().i(is,`scala.collection.mutable.ArrayBuilder$`,{ej:1});var as;function os(){return as||=new is,as}function ss(){}b=ss.prototype=new C,b.constructor=ss,b.fe=(function(e,t,n){if(t!==e)throw new $u(n)}),new T().i(ss,`scala.collection.mutable.MutationTracker$`,{er:1});var cs;function ls(){return cs||=new ss,cs}function us(){}b=us.prototype=new C,b.constructor=us,b.I=(function(e,t){return e===t||(dc(e)?this.gU(e,t):e instanceof Kn?this.gS(e,t):e===null?t===null:Yn(e,t))}),b.gU=(function(e,t){if(dc(t))return this.gT(e,t);if(t instanceof Kn){if(typeof e==`number`)return+e===t.c;if(e instanceof x){var n=pr(e),r=n.l,i=n.h,a=t.c,o=a>>31;return(r^a|i^o)===0}return e===null?t===null:Yn(e,t)}return e===null?t===null:Yn(e,t)}),b.gT=(function(e,t){if(typeof e==`number`){var n=+e;if(typeof t==`number`)return n===+t;if(t instanceof x){var r=pr(t),i=r.l;return n===4294967296*r.h+(i>>>0)}return!1}if(e instanceof x){var a=pr(e),o=a.l,s=a.h;if(t instanceof x){var c=pr(t),l=c.l,u=c.h;return(o^l|s^u)===0}if(typeof t==`number`){var d=+t;return 4294967296*s+(o>>>0)===d}return!1}return e===null?t===null:Yn(e,t)}),b.gS=(function(e,t){if(t instanceof Kn)return e.c===t.c;if(dc(t)){if(typeof t==`number`)return+t===e.c;if(t instanceof x){var n=pr(t),r=n.l,i=n.h,a=e.c,o=a>>31;return(r^a|i^o)===0}return t===null?e===null:Yn(t,e)}return e===null&&t===null}),new T().i(us,`scala.runtime.BoxesRunTime$`,{eF:1});var ds;function N(){return ds||=new us,ds}var fs=new T().i(0,`scala.runtime.Null$`,{eI:1});function ps(){}b=ps.prototype=new C,b.constructor=ps,b.bb=(function(){throw Yu(new K,`tried to cast away nullability, but value is null`)}),new T().i(ps,`scala.runtime.Scala3RunTime$`,{eJ:1});var ms;function hs(){return ms||=new ps,ms}function gs(){}b=gs.prototype=new C,b.constructor=gs,b.gk=(function(e){return e===null?fs.l():qn(e)}),b.aR=(function(e,t){if(e instanceof w||e instanceof br||e instanceof Cr)return e.a[t];if(e instanceof xr){var n=e.a,r=t<<1;return S(n[r],n[r+1|0])}if(e instanceof Sr)return e.a[t];if(e instanceof _r)return ur(e.a[t]);if(e instanceof vr||e instanceof yr||e instanceof gr)return e.a[t];throw e===null?Xu(new K):new rd(e)}),b.ca=(function(e,t,n){if(e instanceof w)e.a[t]=n;else if(e instanceof br)e.a[t]=n|0;else if(e instanceof Cr)e.a[t]=+n;else if(e instanceof xr){var r=pr(n),i=e.a,a=t<<1;i[a]=r.l,i[a+1|0]=r.h}else if(e instanceof Sr)e.a[t]=Math.fround(n);else if(e instanceof _r)e.a[t]=fr(n);else if(e instanceof vr)e.a[t]=n|0;else if(e instanceof yr)e.a[t]=n|0;else if(e instanceof gr)e.a[t]=!!n;else throw e===null?Xu(new K):new rd(e)}),b.g6=(function(e){return Go(e.bL(),e.aJ()+`(`,`,`,`)`)}),b.aj=(function(e){if(e===null)return null;if(e.a.length===0){var t=xf();return Zf(),vf(t)}return new Np(e)}),new T().i(gs,`scala.runtime.ScalaRunTime$`,{eK:1});var _s;function P(){return _s||=new gs,_s}function vs(){}b=vs.prototype=new C,b.constructor=vs,b.l=(function(e,t){var n=this.ch(e,t),r=n;return n=r<<13|r>>>19,Math.imul(5,n)-430675100|0}),b.ch=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|r>>>17,n=Math.imul(461845907,n),e^n}),b.A=(function(e,t){return this.gu(e^t)}),b.gu=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),b.hw=(function(e,t){return t===e>>31?e:e^t}),b.gP=(function(e){var t=$n(e);if(t===e)return t;var n=wo().fx(e),r=n.l,i=n.h;if(4294967296*i+(r>>>0)===e)return r^i;var a=e|0;if(a===e&&1/e!=-1/0)return a;if(e!==e)return 2146959360;var o=tr;return o.setFloat64(0,e,!0),(o.getInt32(0,!0)|0)^(o.getInt32(4,!0)|0)}),b.u=(function(e){if(e===null)return 0;if(typeof e==`number`)return this.gP(+e);if(e instanceof x){var t=pr(e);return this.hw(t.l,t.h)}return Xn(e)}),b.ho=(function(e){throw Gu(new qu,``+e)}),new T().i(vs,`scala.runtime.Statics$`,{eM:1});var ys;function F(){return ys||=new vs,ys}function bs(){}b=bs.prototype=new C,b.constructor=bs,b.hX=(function(e,t){return setTimeout((()=>{t.Y()}),e)}),new T().i(bs,`scala.scalajs.js.timers.package$`,{eS:1});var xs;function Ss(){return xs||=new bs,xs}function Cs(){}b=Cs.prototype=new C,b.constructor=Cs,b.i7=(function(e){if(e instanceof Z)return e.c9;var t=[];return e.U(new H((e=>t.push(e)|0))),t}),new T().i(Cs,`scala.scalajs.runtime.Compat$`,{f1:1});var ws;function Ts(){return ws||=new Cs,ws}function Es(){}b=Es.prototype=new C,b.constructor=Es,b.j=(function(e){for(var t=e.a.length,n=[],r=0;r!==t;){var i=r;n.push(e.a[i]),r=1+r|0}return n}),new T().i(Es,`scala.scalajs.runtime.package$`,{f3:1});var Ds;function I(){return Ds||=new Es,Ds}function Os(){}b=Os.prototype=new C,b.constructor=Os,b.hY=(function(e){var t=`Illegal command line`+(e.fz()===0?``:e.fz()===1?` after first argument`:` after `+e.fz()+` arguments`)+`: `+e.ii();bc().hG().hs(t+`
`)}),new T().i(Os,`scala.util.CommandLineParser$`,{f4:1});function ks(e){this.cO=null,this.cO=e}b=ks.prototype=new C,b.constructor=ks,b.o=(function(){return`DynamicVariable(`+this.cO+`)`}),new T().i(ks,`scala.util.DynamicVariable`,{f6:1});function As(){}b=As.prototype=new C,b.constructor=As;function js(){}js.prototype=b,b.l=(function(e,t){var n=this.ch(e,t),r=n;return n=r<<13|r>>>19,Math.imul(5,n)-430675100|0}),b.ch=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|r>>>17,n=Math.imul(461845907,n),e^n}),b.A=(function(e,t){return this.bM(e^t)}),b.bM=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),b.fI=(function(e,t,n){var r=e.aH();if(r===0)return n?t:of(e.aJ());var i=t;n||(i=this.l(i,of(e.aJ())));for(var a=0;a<r;)i=this.l(i,F().u(e.aI(a))),a=1+a|0;return this.A(i,r)}),b.i8=(function(e,t){for(var n=0,r=0,i=0,a=1,o=e.d();o.i();){var s=o.g(),c=F().u(s);n=n+c|0,r^=c,a=Math.imul(a,1|c),i=1+i|0}var l=t;return l=this.l(l,n),l=this.l(l,r),l=this.ch(l,a),this.A(l,i)}),b.hF=(function(e,t){var n=e.d(),r=t;if(!n.i())return this.A(r,0);var i=n.g();if(!n.i())return this.A(this.l(r,F().u(i)),1);var a=n.g(),o=F().u(i);r=this.l(r,o);for(var s=r,c=F().u(a),l=c-o|0,u=2;n.i();){r=this.l(r,c);var d=F().u(n.g());if(l!==(d-c|0)||l===0){for(r=this.l(r,d),u=1+u|0;n.i();)r=this.l(r,F().u(n.g())),u=1+u|0;return this.A(r,u)}c=d,u=1+u|0}return this.bM(this.l(this.l(s,l),c))}),b.s=(function(e,t){var n=t,r=vo().Z(e);switch(r){case 0:return this.A(n,0);case 1:return this.A(this.l(n,F().u(P().aR(e,0))),1);default:var i=F().u(P().aR(e,0));n=this.l(n,i);for(var a=n,o=F().u(P().aR(e,1)),s=o-i|0,c=2;c<r;){n=this.l(n,o);var l=F().u(P().aR(e,c));if(s!==(l-o|0)||s===0){for(n=this.l(n,l),c=1+c|0;c<r;)n=this.l(n,F().u(P().aR(e,c))),c=1+c|0;return this.A(n,r)}o=l,c=1+c|0}return this.bM(this.l(this.l(a,s),o))}}),b.hK=(function(e,t,n,r){return this.bM(this.l(this.l(this.l(r,e),t),n))}),b.hn=(function(e,t){var n=t,r=e.e();switch(r){case 0:return this.A(n,0);case 1:return this.A(this.l(n,F().u(e.h(0))),1);default:var i=F().u(e.h(0));n=this.l(n,i);for(var a=n,o=F().u(e.h(1)),s=o-i|0,c=2;c<r;){n=this.l(n,o);var l=F().u(e.h(c));if(s!==(l-o|0)||s===0){for(n=this.l(n,l),c=1+c|0;c<r;)n=this.l(n,F().u(e.h(c))),c=1+c|0;return this.A(n,r)}o=l,c=1+c|0}return this.bM(this.l(this.l(a,s),o))}}),b.hv=(function(e,t){for(var n=0,r=t,i=0,a=0,o=0,s=0,c=e;!c.c();){var l=c.J(),u=c.y(),d=F().u(l);switch(r=this.l(r,d),i){case 0:s=d,i=1;break;case 1:a=d-o|0,i=2;break;case 2:(a!==(d-o|0)||a===0)&&(i=3)}o=d,n=1+n|0,c=u}return i===2?this.hK(s,a,o,t):this.A(r,n)});function Ms(e){this.aZ=null,this.dc=null,this.co=!1,this.dc=e,di(this),this.co=!1}b=Ms.prototype=new C,b.constructor=Ms,b.hH=(function(e){this.co?(hi(e),this.dc.Y()):mi(this,e)}),b.ht=(function(){fi(this),this.co=!0}),new T().i(Ms,`com.raquo.airstream.ownership.OneTimeOwner`,{bE:1,bF:1});function Ns(){}b=Ns.prototype=new C,b.constructor=Ns,b.gI=(function(e){return e!==null}),b.gR=(function(e){return e?``:null}),b.cc=(function(e){return this.gI(e)}),b.cf=(function(e){return this.gR(!!e)}),new T().i(Ns,`com.raquo.laminar.codecs.package$$anon$1`,{bV:1,a8:1});function Ps(e){if(e===null)throw Xu(new K)}b=Ps.prototype=new C,b.constructor=Ps,b.cf=(function(e){return e}),b.cc=(function(e){return e}),new T().i(Ps,`com.raquo.laminar.codecs.package$$anon$2`,{bW:1,a8:1});function Fs(e){return new Ki(e,new G((e=>e+`px`)))}function Is(e,t,n,r){}b=Is.prototype=new Qi,b.constructor=Is,new T().i(Is,`com.raquo.laminar.keys.CompositeKey`,{cn:1,I:1});function Ls(e){this.bY=null,this.bY=e}b=Ls.prototype=new Qi,b.constructor=Ls,new T().i(Ls,`com.raquo.laminar.keys.EventProp`,{cr:1,I:1});function Rs(e,t,n){return e.am=t,e.b0=n,e}function zs(){this.am=null,this.b0=null}b=zs.prototype=new Qi,b.constructor=zs;function Bs(){}Bs.prototype=b,b.r=(function(e){return new Wc(this,e,new Tu(((e,t,n)=>{D().fL(e,t,n)})))}),new T().i(zs,`com.raquo.laminar.keys.HtmlAttr`,{a3:1,I:1});function Vs(e,t,n){this.cv=null,this.cu=null,this.bZ=null,this.c0=null,this.cv=e,this.cu=t;var r=n.c()?q():new J(n.t()+`:`+e);this.bZ=r.c()?e:r.t(),this.c0=n.c()?q():new J(ta().hB(n.t()))}b=Vs.prototype=new Qi,b.constructor=Vs,new T().i(Vs,`com.raquo.laminar.keys.SvgAttr`,{cs:1,I:1});function Hs(){}b=Hs.prototype=new C,b.constructor=Hs,b.a3=(function(e){}),new T().i(Hs,`com.raquo.laminar.modifiers.Modifier$$anon$1`,{cz:1,T:1});function Us(e,t){if(this.dW=null,this.dW=e,t===null)throw Xu(new K)}b=Us.prototype=new C,b.constructor=Us,b.a3=(function(e){var t=Jr(),n=(()=>{this.dW.b(e)});if(Jr(),t.V)n();else{t.V=!0;try{n()}finally{t.V=!1,Gr(t)}}}),new T().i(Us,`com.raquo.laminar.modifiers.Modifier$$anon$2`,{cA:1,T:1});function Ws(){}b=Ws.prototype=new C,b.constructor=Ws,new T().i(Ws,`com.raquo.laminar.modifiers.RenderableNode$$anon$1`,{cD:1,cB:1});function Gs(){}b=Gs.prototype=new C,b.constructor=Gs,new T().i(Gs,`com.raquo.laminar.modifiers.RenderableSeq$collectionSeqRenderable$`,{cF:1,cE:1});var Ks;function qs(){return Ks||=new Gs,Ks}function Js(e,t){if(this.dY=null,this.dY=e,t===null)throw Xu(new K)}b=Js.prototype=new C,b.constructor=Js,b.gt=(function(e){return this.dY.b(e)}),new T().i(Js,`com.raquo.laminar.modifiers.RenderableText$$anon$1`,{cI:1,cG:1});function Ys(e){e.fg(new ai(new Cu((()=>{throw B(new V,`Attempting to use owner of unmounted element: `+Go(D().gH(e.aU(),(D(),$())),``,` > `,``))}))))}function Xs(e,t,n){return e.cB=t,e}function Zs(){this.cB=null}b=Zs.prototype=new C,b.constructor=Zs;function Qs(){}Qs.prototype=b,b.cY=(function(){return this.cB}),b.bH=(function(e){var t=this.gy();return e.U(new G((e=>{e.a3(t)}))),t}),b.gy=(function(){return new Jd(this,D().gC(this))}),new T().i(Zs,`com.raquo.laminar.tags.HtmlTag`,{ao:1,aa:1});function $s(e,t){this.e5=null,this.e5=e}b=$s.prototype=new C,b.constructor=$s,new T().i($s,`com.raquo.laminar.tags.SvgTag`,{cS:1,aa:1});function ec(){}b=ec.prototype=new C,b.constructor=ec,b.cf=(function(e){return e}),b.cc=(function(e){return e}),new T().i(ec,`io.github.nguyenyou.webawesome.laminar.UnionAsStringCodec$$anon$1`,{d2:1,a8:1});function tc(e,t){return e.be=t,e.cP(),e}function nc(){this.be=null,this.bd=null,this.bf=!1}b=nc.prototype=new C,b.constructor=nc;function rc(){}rc.prototype=b,b.i4=(function(){return this.bf||=(this.bd=new Kc(this.be,new H((e=>void 0)),void 0),!0),this.bd}),b.v=(function(e,t){var n=this.i4().bH(new Z([]));return e.U(new H((e=>{e.b(this).a3(n)}))),t.U(new H((e=>{e.a3(n)}))),n});function ic(){this.cC=null,ac=this,this.cC=Pr(67,`1C]4m6m=c4]4]4]4]4]4]4]4]4]3g4]2m9]2m1Jm1m9s4g5mm6]3]4mm12>mEm1m6m1]3]=]DI]1<m24mIs4g2c4w9];]4]<]3m3m=m3mH]8]2m=mBHm3]4mK3{gggg2:g=m@]13]4E]`)}b=ic.prototype=new C,b.constructor=ic,b.gJ=(function(e,t){if(e<256)var n=(e-48|0)>>>0<=9?e-48|0:(e-65|0)>>>0<=25?e-55|0:(e-97|0)>>>0<=25?e-87|0:-1;else if((e-65313|0)>>>0<=25)var n=e-65303|0;else if((e-65345|0)>>>0<=25)var n=e-65335|0;else{var r=j().gv(this.cC,e),i=r<0?-2-r|0:r;if(i<0)var n=-1;else var a=e-this.cC.a[i]|0,n=a>9?-1:a}return n<t?n:-1}),new T().i(ic,`java.lang.Character$`,{d8:1,a:1});var ac;function oc(){return ac||=new ic,ac}function sc(){}b=sc.prototype=new C,b.constructor=sc,b.bJ=(function(e){throw new af(`For input string: "`+e+`"`)}),b.hr=(function(e,t,n){e===null&&lc().bJ(e);var r=e.length;r===0&&lc().bJ(e);var i=oc(),a=e.charCodeAt(0),o=a===45,s=o?-1:0,c=(o||a===43)|0;c>=r&&lc().bJ(e);var l=0;for(l=0;c!==r;){var u=i.gJ(e.charCodeAt(c),t);(u<0||l>>>0>n>>>0)&&lc().bJ(e),l=Math.imul(l,t)+u|0,c=1+c|0}return l>>>0>(2147483647-s|0)>>>0&&lc().bJ(e),(l^s)-s|0}),new T().i(sc,`java.lang.Integer$`,{de:1,a:1});var cc;function lc(){return cc||=new sc,cc}function uc(){}b=uc.prototype=new C,b.constructor=uc;function dc(e){return e instanceof uc||typeof e==`number`||e instanceof x}function fc(e,t,n,r,i){this.b5=null,this.bh=null,this.b6=null,this.b7=0,this.b4=0,this.b5=e,this.bh=t,this.b6=n,this.b7=r,this.b4=i}b=fc.prototype=new C,b.constructor=fc,b.f=(function(e){return e instanceof fc&&this.b6===e.b6&&this.b7===e.b7&&this.b4===e.b4&&this.b5===e.b5&&this.bh===e.bh}),b.o=(function(){var e=``;return this.b5!==`<jscode>`&&(e=``+e+this.b5+`.`),e=``+e+this.bh,this.b6===null?e+=`(Unknown Source)`:(e=e+`(`+this.b6,this.b7>=0&&(e=e+`:`+this.b7,this.b4>=0&&(e=e+`:`+this.b4)),e+=`)`),e}),b.k=(function(){return of(this.b5)^of(this.bh)^of(this.b6)^this.b7^this.b4});var pc=new T().i(fc,`java.lang.StackTraceElement`,{ay:1,a:1});function mc(){}b=mc.prototype=new C,b.constructor=mc,b.hC=(function(e,t,n){for(var r=t+n|0,i=``,a=t;a!==r;)i+=``+er(e.a[a]),a=1+a|0;return i}),new T().i(mc,`java.lang.String$`,{dp:1,a:1});var hc;function gc(){return hc||=new mc,hc}function L(e,t,n,r,i){return e.ew=t,e.ex=i,i&&e.h1(),e}var _c=class extends Error{constructor(){super(),this.ew=null,this.ex=!1,this.ev=null,this.c2=null}bI(){return this.ew}h1(){var e=this instanceof Rf?this.W:this;return this.ev=Object.prototype.toString.call(e)===`[object Error]`?e:Error.captureStackTrace===void 0||Object.isSealed(this)?/* @__PURE__ */ Error():(Error.captureStackTrace(this),this),this}hg(){return this.c2===null&&(this.c2=this.ex?Za().h0(this.ev):new(pc.r()).C(0)),this.c2}o(){var e=Jn(this),t=this.bI();return t===null?e:e+`: `+t}k(){return mr.prototype.k.call(this)}f(e){return mr.prototype.f.call(this,e)}get message(){var e=this.bI();return e===null?``:e}get name(){return Jn(this)}toString(){return this.o()}};function vc(){this.ez=null,yc=this,this.ez=new ks(no().et)}b=vc.prototype=new C,b.constructor=vc,b.hG=(function(){return this.ez.cO}),new T().i(vc,`scala.Console$`,{dF:1,ew:1});var yc;function bc(){return yc||=new vc,yc}function xc(){}b=xc.prototype=new No,b.constructor=xc;function Sc(){}Sc.prototype=b,b.ie=(function(e){if(e===null)return null;if(e.a.length===0){var t=Df();return Zf(),t.eT}return new qp(e)});function Cc(e,t){if(t===e)e.X(jd().ft(t));else for(var n=t.d();n.i();)e.S(n.g());return e}function wc(){}b=wc.prototype=new C,b.constructor=wc;function Tc(){}Tc.prototype=b,b.o=(function(){return`<function0>`});function Ec(){}b=Ec.prototype=new C,b.constructor=Ec;function Dc(){}Dc.prototype=b,b.o=(function(){return`<function1>`});function Oc(){}b=Oc.prototype=new C,b.constructor=Oc;function kc(){}kc.prototype=b,b.o=(function(){return`<function2>`});function Ac(){}b=Ac.prototype=new C,b.constructor=Ac;function jc(){}jc.prototype=b,b.o=(function(){return`<function3>`});function Mc(e){this.c8=!1,this.c8=e}b=Mc.prototype=new C,b.constructor=Mc,b.o=(function(){return``+this.c8}),new T().i(Mc,`scala.runtime.BooleanRef`,{eE:1,a:1});function Nc(e){this.bu=0,this.bu=e}b=Nc.prototype=new C,b.constructor=Nc,b.o=(function(){return``+this.bu}),new T().i(Nc,`scala.runtime.IntRef`,{eG:1,a:1});function Pc(){this.q=0,this.f8=0,this.g3=0,this.g2=0,Fc=this,this.q=of(`Seq`),this.f8=of(`Map`),this.g3=of(`Set`),this.g2=this.i8($(),this.f8)}b=Pc.prototype=new js,b.constructor=Pc,b.fK=(function(e){return rp(e)?this.hn(e,this.q):e instanceof Rp?this.hv(e,this.q):this.hF(e,this.q)}),new T().i(Pc,`scala.util.hashing.MurmurHash3$`,{f8:1,f7:1});var Fc;function R(){return Fc||=new Pc,Fc}var Ic=class extends _c{};function Lc(){this.cl=null,this.d5=null,this.d6=null,Rc=this,this.cl=jd().fc(P().aj(new(M.r()).C([]))),this.d5=new G((e=>{try{console.error(this.hc(e)+`
`+this.hf(e,`
`))}catch(e){var t=e instanceof _c?e:new Rf(e);console.error(`Error in AirstreamError.consoleErrorCallback:`),console.error(t)}})),this.d6=new G((e=>{console.warn(`Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.`);var t=e;throw t instanceof Rf?t.W:t})),this.hL(this.d5)}b=Lc.prototype=new C,b.constructor=Lc,b.hc=(function(e){try{var t=e.bI()}catch{var t=`(Unable to get the message for this error - exception occurred in its getMessage)`}return qn(e).cW()+`: `+t}),b.hf=(function(e,t){try{return Go(_l().ie(e.hg()),``,t,``)}catch{return`(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)`}}),b.hL=(function(e){this.cl.S(e)}),b.bN=(function(e){for(var t=this.cl.d();t.i();){var n=t.g();try{n.b(e)}catch(e){var r=e instanceof _c?e:new Rf(e),i=this.d6;if(n===null?i===null:n.f(i))throw r instanceof Rf?r.W:r;console.warn(`Error processing an unhandled error callback:`),Ss().hX(0,new Cu((e=>(()=>{throw e instanceof Rf?e.W:e}))(r)))}}}),new T().i(Lc,`com.raquo.airstream.core.AirstreamError$`,{br:1,eu:1,ev:1});var Rc;function zc(){return Rc||=new Lc,Rc}function z(e,t,n){return new Zl(n.gt(t))}function Bc(e,t,n,r){return new Us(new G((e=>{(Ai(),new Di(t,null,null)).U(new G((e=>(t=>{n.b(t).a3(e)}))(e)))})),aa())}function Vc(e,t,n){return new Us(new G((e=>{(Ai(),new Di(t,null,null)).U(new G((e=>(t=>{pa().bw(e,t,void 0)}))(e)))})),aa())}function Hc(e,t){this.b3=null,this.cw=null,this.cx=null,this.b3=e,this.cw=(n=>{var r=e.dO.b(n);r.c()||t.b(r.t())}),this.cx=(()=>{var e=null;e=this;var t={};if(e===null)throw Xu(new K);return t.capture=e.b3.dQ,t.passive=e.b3.dP,t})()}b=Hc.prototype=new C,b.constructor=Hc,b.a3=(function(e){this.gw(e,!1)}),b.gw=(function(e,t){if(ju(e,this)===-1){var n=new G((t=>(D().gb(e.D,this),new gi(t.dR,new Cu((()=>{var t=ju(e,this);t!==-1&&(Au(e,t),D().hO(e.D,this))})))))),r=t?ga().i9(e,n):ui().d3(e.aa,new G((t=>n.b(new na(e,t)))),!1);return ku(e,this,t),r}var i=new G((e=>void 0));return ui().fO(e.aa,new G((t=>{i.b(new na(e,t))})),!1)}),b.o=(function(){return`EventListener(`+this.b3.bX.bY+`)`});var Uc=new T().i(Hc,`com.raquo.laminar.modifiers.EventListener`,{cw:1,T:1,cv:1});function Wc(e,t,n){this.dU=null,this.dV=null,this.dT=null,this.dU=e,this.dV=t,this.dT=n}b=Wc.prototype=new C,b.constructor=Wc,b.a3=(function(e){this.dT.gq(e,this.dU,this.dV)}),new T().i(Wc,`com.raquo.laminar.modifiers.KeySetter`,{cx:1,T:1,cJ:1});function Gc(e,t){if(this.cz=null,this.e0=null,this.e1=null,this.e0=t,Ys(this),e===null)throw B(new V,`Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load`);if(!D().hq(e,document))throw B(new V,`Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering`);this.e1=e,this.hA()}b=Gc.prototype=new C,b.constructor=Gc,b.ce=(function(){return this.cz}),b.fg=(function(e){this.cz=e}),b.hA=(function(){return this.cz.f9(),pa().bw(this,this.e0,void 0)}),b.aU=(function(){return this.e1}),new T().i(Gc,`com.raquo.laminar.nodes.RootNode`,{cO:1,a9:1,an:1});function Kc(e,t,n){this.cB=null,this.e4=null,this.e4=e,Xs(this,e,!1)}b=Kc.prototype=new Qs,b.constructor=Kc,b.cY=(function(){return this.e4}),new T().i(Kc,`com.raquo.laminar.tags.CustomHtmlTag`,{cR:1,ao:1,aa:1});function qc(){this.be=null,this.bd=null,this.bf=!1,this.ec=null,this.ed=!1,this.ea=null,this.eb=!1,this.e8=null,this.e9=!1,this.e6=null,this.e7=!1,tc(this,`wa-accordion`)}b=qc.prototype=new rc,b.constructor=qc,b.hz=(function(){return this.ed||=(this.ec=il(),!0),this.ec}),b.hm=(function(){return this.eb||=(this.ea=ul(),!0),this.ea}),b.hl=(function(){return this.e9||=(this.e8=(U(),Rs(new zs,`heading-level`,Li().bc)),!0),this.e8}),b.gm=(function(){return this.e7||=(this.e6=sl(),!0),this.e6}),b.cP=(function(){return Tn}),new T().i(qc,`io.github.nguyenyou.webawesome.laminar.Accordion$`,{cV:1,ac:1,ab:1});var Jc;function Yc(){return Jc||=new qc,Jc}function Xc(){this.be=null,this.bd=null,this.bf=!1,this.ei=null,this.ej=!1,this.eg=null,this.eh=!1,this.ee=null,this.ef=!1,tc(this,`wa-accordion-item`)}b=Xc.prototype=new rc,b.constructor=Xc,b.a5=(function(){return this.ej||=(this.ei=(U(),Rs(new zs,`label`,Li().bc)),!0),this.ei}),b.fr=(function(){return this.eh||=(this.eg=(U(),Rs(new zs,`expanded`,Li().cs)),!0),this.eg}),b.gK=(function(){return this.ef||=(this.ee=(U(),Rs(new zs,`disabled`,Li().cs)),!0),this.ee}),b.cP=(function(){return vn}),new T().i(Xc,`io.github.nguyenyou.webawesome.laminar.AccordionItem$`,{cW:1,ac:1,ab:1});var Zc;function Qc(){return Zc||=new Xc,Zc}function $c(){this.be=null,this.bd=null,this.bf=!1,tc(this,`wa-button`)}b=$c.prototype=new rc,b.constructor=$c,b.cP=(function(){return Gn}),new T().i($c,`io.github.nguyenyou.webawesome.laminar.Button$`,{cY:1,ac:1,ab:1});var el;function tl(){return el||=new $c,el}function nl(){this.am=null,this.b0=null,this.em=null,this.en=!1,Rs(this,`mode`,new ec)}b=nl.prototype=new Bs,b.constructor=nl,b.hZ=(function(){return this.en||=(this.em=il().r(`single-collapsible`),!0),this.em}),new T().i(nl,`io.github.nguyenyou.webawesome.laminar.CommonKeys$AccordionMode$`,{cZ:1,a3:1,I:1});var rl;function il(){return rl||=new nl,rl}function al(){this.am=null,this.b0=null,this.eo=null,this.ep=!1,Rs(this,`appearance`,new ec)}b=al.prototype=new Bs,b.constructor=al,b.h2=(function(){return this.ep||=(this.eo=sl().r(`filled`),!0),this.eo}),new T().i(al,`io.github.nguyenyou.webawesome.laminar.CommonKeys$Appearance1$`,{d0:1,a3:1,I:1});var ol;function sl(){return ol||=new al,ol}function cl(){this.am=null,this.b0=null,this.eq=null,this.er=!1,Rs(this,`icon-placement`,new ec)}b=cl.prototype=new Bs,b.constructor=cl,b.i0=(function(){return this.er||=(this.eq=ul().r(`start`),!0),this.eq}),new T().i(cl,`io.github.nguyenyou.webawesome.laminar.CommonKeys$IconPlacement$`,{d1:1,a3:1,I:1});var ll;function ul(){return ll||=new cl,ll}function dl(e){if(e.a2.Z)return e.a2.Q().cW()+`[]`;for(var t=e.a2.N,n=t.length-1|0;n>=0&&t.charCodeAt(n)===36;)n=n-1|0;if(n>=0&&(t.charCodeAt(n)-48|0)>>>0<=9){for(n=n-1|0;n>=0&&(t.charCodeAt(n)-48|0)>>>0<=9;)n=n-1|0;for(;n>=0&&t.charCodeAt(n)===36;)n=n-1|0}for(;;){if(n>=0)var r=n,i=t.charCodeAt(r),a=i!==36&&i!==46;else var a=!1;if(a)n=n-1|0;else break}var o=1+n|0;return t.substring(o)}function fl(e){this.cD=null,this.a2=e}b=fl.prototype=new C,b.constructor=fl,b.o=(function(){return(this.a2.Y?`interface `:this.a2.X?``:`class `)+this.a2.N}),b.cW=(function(){return this.cD===null&&(this.cD=dl(this)),this.cD}),new T().i(fl,`java.lang.Class`,{d9:1,a:1,O:1});function B(e,t){return L(e,t,null,!0,!0),e}var V=class extends _c{};new T().i(V,`java.lang.Exception`,{y:1,s:1,a:1});function pl(){}b=pl.prototype=new C,b.constructor=pl;function ml(){}ml.prototype=b;function hl(){this.g1=null,gl=this,wd(),this.g1=Al()}b=hl.prototype=new Sc,b.constructor=hl,new T().i(hl,`scala.Predef$`,{dP:1,dI:1,dJ:1});var gl;function _l(){return gl||=new hl,gl}function vl(e,t){return e.bl=t,e}function yl(){this.bl=null}b=yl.prototype=new C,b.constructor=yl;function bl(){}bl.prototype=b,b.aS=(function(e){return this.bl.cV(e,Jf())}),b.a7=(function(){return this.bl.fC(Jf())}),b.aQ=(function(e){return this.bl.cV(e,Jf())});function xl(e,t){if(t<0)return 1;var n=e.p();if(n>=0)return n===t?0:n<t?-1:1;for(var r=0,i=e.d();i.i();){if(r===t)return 1;i.g(),r=1+r|0}return r-t|0}function Sl(e,t){return new md(e).cU(t)}function Cl(e,t,n){var r=t>0?t:0,i=n<0?-1:n<=r?0:n-r|0;return i===0?Dl().F:new _d(e,r,i)}function wl(e,t){for(var n=t.d();e.i();)if(!n.i()||!N().I(e.g(),n.g()))return!1;return!n.i()}function Tl(){this.F=null,El=this,this.F=new ud}b=Tl.prototype=new C,b.constructor=Tl,b.a7=(function(){return new _f}),new T().i(Tl,`scala.collection.Iterator$`,{dX:1,a:1,U:1});var El;function Dl(){return El||=new Tl,El}function Ol(){}b=Ol.prototype=new C,b.constructor=Ol,new T().i(Ol,`scala.collection.immutable.Map$`,{ed:1,a:1,e3:1});var kl;function Al(){return kl||=new Ol,kl}function jl(e){this.f0=null,this.f0=e}b=jl.prototype=new Tc,b.constructor=jl,b.Y=(function(){return(0,this.f0)()}),new T().i(jl,`scala.runtime.AbstractFunction0.$$Lambda$07eded5776954a9c145e92c329afd52873ad179c`,{eA:1,bm:1,aA:1});function H(e){this.f1=null,this.f1=e}b=H.prototype=new Dc,b.constructor=H,b.b=(function(e){return(0,this.f1)(e)}),new T().i(H,`scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919`,{eB:1,bn:1,e:1});var Ml=new T().i(0,`scala.runtime.Nothing$`,{eH:1,s:1,a:1});function Nl(){}b=Nl.prototype=new C,b.constructor=Nl,b.h9=(function(e){return(t=>e.b(t))}),new T().i(Nl,`scala.scalajs.js.Any$`,{eN:1,eO:1,eP:1});var Pl;function Fl(){return Pl||=new Nl,Pl}function Il(){}b=Il.prototype=new Tc,b.constructor=Il;function Ll(){}Ll.prototype=b;function Rl(){}b=Rl.prototype=new Dc,b.constructor=Rl;function zl(){}zl.prototype=b;function Bl(){}b=Bl.prototype=new kc,b.constructor=Bl;function Vl(){}Vl.prototype=b;function Hl(){}b=Hl.prototype=new jc,b.constructor=Hl;function Ul(){}Ul.prototype=b;function Wl(e,t,n,r){if(this.d7=null,r===null)throw Xu(new K);this.d7=void 0}b=Wl.prototype=new C,b.constructor=Wl,b.o=(function(){return Ir(this)}),new T().i(Wl,`com.raquo.airstream.core.Observer$$anon$8`,{bv:1,bw:1,bs:1,bt:1});function Gl(e){if(this.dj=null,this.dk=!1,this.fS=null,e===null)throw Xu(new K);Bi(this)}b=Gl.prototype=new C,b.constructor=Gl,b.i3=(function(){return this.dk||=(this.dj=new $s(`svg`,!1),!0),this.dj}),new T().i(Gl,`com.raquo.laminar.api.Laminar$svg$`,{bP:1,cg:1,bY:1,c0:1});function Kl(){this.n=null,ql=this,this.n=new cp}b=Kl.prototype=new C,b.constructor=Kl,new T().i(Kl,`com.raquo.laminar.api.package$`,{bS:1,ak:1,al:1,aj:1});var ql;function U(){return ql||=new Kl,ql}function Jl(e,t,n){return e.b1=t,e.b2=n,e}function Yl(){this.b1=null,this.b2=null}b=Yl.prototype=new Qi,b.constructor=Yl;function Xl(){}Xl.prototype=b,b.r=(function(e){return new Wc(this,Zn(e),new Tu(((e,t,n)=>{D().fM(e,t,n)})))});function Zl(e){this.e3=null,this.cA=null,this.e3=q(),this.cA=D().gE(e)}b=Zl.prototype=new C,b.constructor=Zl,b.fN=(function(e){this.e3=e}),b.fR=(function(e){}),b.a3=(function(e){pa().bw(e,this,void 0)}),b.i6=(function(){return this.cA.data}),b.aU=(function(){return this.cA}),new T().i(Zl,`com.raquo.laminar.nodes.TextNode`,{cQ:1,a9:1,T:1,am:1});function Ql(){}b=Ql.prototype=new C,b.constructor=Ql;function $l(){}$l.prototype=b;function eu(e,t){return e===t}function tu(e){return e?1231:1237}var nu=new T().i(0,`java.lang.Boolean`,{d6:1,a:1,Q:1,O:1},(e=>typeof e==`boolean`));function ru(e){return e}function iu(e,t){return t instanceof Kn&&e===t.c}var au=new T().i(0,`java.lang.Character`,{au:1,a:1,Q:1,O:1},(e=>e instanceof Kn));function ou(e,t){return L(e,t,null,!0,!0),e}var W=class extends V{};new T().i(W,`java.lang.RuntimeException`,{G:1,y:1,s:1,a:1});function su(){this.m=null,this.m=``}b=su.prototype=new C,b.constructor=su,b.gn=(function(e){var t=gc().hC(e,0,e.a.length);return this.m=``+this.m+t,this}),b.o=(function(){return this.m}),b.e=(function(){return this.m.length}),b.fd=(function(e){return this.m.charCodeAt(e)}),new T().i(su,`java.lang.StringBuilder`,{dq:1,ad:1,as:1,a:1});function cu(){}b=cu.prototype=new ml,b.constructor=cu;function lu(){}lu.prototype=b;function uu(){}b=uu.prototype=new C,b.constructor=uu,b.o=(function(){return`<function1>`}),b.gr=(function(e){throw new rd(e)}),b.b=(function(e){this.gr(e)}),new T().i(uu,`scala.PartialFunction$$anon$1`,{dO:1,e:1,k:1,a:1});function du(){}b=du.prototype=new C,b.constructor=du;function fu(){}fu.prototype=b,b.p=(function(){return-1}),b.aG=(function(e,t,n){return Wo(this,e,t,n)}),b.ba=(function(e,t,n,r){return Ko(this,e,t,n,r)}),b.d=(function(){return this}),b.cU=(function(e){return Sl(this,e)}),b.cd=(function(e){return this.bO(e,-1)}),b.bO=(function(e,t){return Cl(this,e,t)}),b.o=(function(){return`<iterator>`});function pu(e,t){return e.bo=t,e}function mu(){this.bo=null}b=mu.prototype=new C,b.constructor=mu;function hu(){}hu.prototype=b,b.fc=(function(e){return this.bo.aQ(e)}),b.ft=(function(e){return this.bo.aS(e)}),b.a7=(function(){return this.bo.a7()}),b.aQ=(function(e){return this.fc(e)}),b.aS=(function(e){return this.ft(e)});function gu(e){return e.a6(0)===0}function _u(e,t){var n=e.p();if(n!==-1){var r=t.p();if(r!==-1){if(n!==r)return!1;if(n===0)return!0}}return wl(e.d(),t)}function vu(e,t){for(var n=e.aT().a7(),r=e.d();r.i();)n.S(t.b(r.g()));return n.a8()}function yu(e,t){if(this.eV=null,this.c5=null,this.eV=e,t===null)throw Xu(new K);this.c5=t}b=yu.prototype=new C,b.constructor=yu,b.gf=(function(e){return this.c5.S(e),this}),b.g8=(function(e){return this.c5.X(e),this}),b.a8=(function(){return this.eV.b(this.c5.a8())}),b.S=(function(e){return this.gf(e)}),b.X=(function(e){return this.g8(e)}),new T().i(yu,`scala.collection.mutable.Builder$$anon$1`,{en:1,R:1,S:1,V:1});function bu(e,t){return e.br=t,e}function xu(){this.br=null}b=xu.prototype=new C,b.constructor=xu;function Su(){}Su.prototype=b,b.gg=(function(e){return this.br.S(e),this}),b.g9=(function(e){return this.br.X(e),this}),b.a8=(function(){return this.br}),b.S=(function(e){return this.gg(e)}),b.X=(function(e){return this.g9(e)}),new T().i(xu,`scala.collection.mutable.GrowableBuilder`,{bd:1,R:1,S:1,V:1});function Cu(e){this.f4=null,this.f4=e}b=Cu.prototype=new Ll,b.constructor=Cu,b.Y=(function(){return(0,this.f4)()}),new T().i(Cu,`scala.scalajs.runtime.AnonFunction0.$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d`,{eU:1,eT:1,bm:1,aA:1});function G(e){this.f5=null,this.f5=e}b=G.prototype=new zl,b.constructor=G,b.b=(function(e){return(0,this.f5)(e)}),new T().i(G,`scala.scalajs.runtime.AnonFunction1.$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1`,{eW:1,eV:1,bn:1,e:1});function wu(e){this.f6=null,this.f6=e}b=wu.prototype=new Vl,b.constructor=wu,b.cR=(function(e,t){return(0,this.f6)(e,t)}),new T().i(wu,`scala.scalajs.runtime.AnonFunction2.$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7`,{eY:1,eX:1,eC:1,dG:1});function Tu(e){this.f7=null,this.f7=e}b=Tu.prototype=new Ul,b.constructor=Tu,b.gq=(function(e,t,n){return(0,this.f7)(e,t,n)}),new T().i(Tu,`scala.scalajs.runtime.AnonFunction3.$$Lambda$73f37e31ba038fe839c174212837da323f140c96`,{f0:1,eZ:1,eD:1,dH:1});function Eu(e,t){this.bW=null,this.ct=null,this.bW=e,this.ct=t}b=Eu.prototype=new C,b.constructor=Eu,b.a3=(function(e){var t=this.ct;t!==void 0&&t.fG(e,this.bW),pa().bw(e,this.bW,void 0)}),b.ib=(function(e){return new Eu(this.bW,e.gp(this.ct))});var Du=new T().i(Eu,`com.raquo.laminar.inserters.StaticChildInserter`,{ck:1,T:1,ci:1,cm:1,ch:1});function Ou(e){e.cy=new vi(new Cu((()=>{e.aa.f9()})),new Cu((()=>{e.aa.gF()}))),e.aN=void 0}function ku(e,t,n){if(e.aN===void 0)e.aN=xi().aE(P().aj(new(Uc.r()).C([t])));else if(n){var r=e.aN;if(r===void 0)throw new ed(`undefined.get`);r.unshift(t)}else{var i=e.aN;if(i===void 0)throw new ed(`undefined.get`);i.push(t)}}function Au(e,t){var n=e.aN;n!==void 0&&n.splice(t,1)}function ju(e,t){var n=e.aN;if(n===void 0)return-1;for(var r=!1,i=0;!r&&i<(n.length|0);){var a=n[i];(a===null?t===null:Yn(a,t))?r=!0:i=1+i|0}return r?i:-1}function Mu(e,t){Pu(e,e.c1,t)&&Fu(e,t)}function Nu(e,t){var n=e.c1;e.c1=t,Pu(e,n,t)||Fu(e,t)}function Pu(e,t,n){var r=!t.c()&&!t.t().ce().C.c(),i=!n.c()&&!n.t().ce().C.c();return r&&!i}function Fu(e,t){Iu(e,t.c()?q():new J(t.t().ce()))}function Iu(e,t){if(t.c())e.cy.gA();else{var n=t.t();e.cy.hU(n)}}function Lu(){}b=Lu.prototype=new $l,b.constructor=Lu;function Ru(){}Ru.prototype=b;var zu=class extends W{constructor(e){super(),L(this,e,null,!0,!0)}};new T().i(zu,`java.lang.ArithmeticException`,{d5:1,G:1,y:1,s:1,a:1});var Bu=new T().i(0,`java.lang.Byte`,{d7:1,W:1,a:1,Q:1,O:1},(e=>or(e)));function Vu(e,t){return L(e,t,null,!0,!0),e}function Hu(e){return L(e,null,null,!0,!0),e}var Uu=class extends W{};new T().i(Uu,`java.lang.IllegalArgumentException`,{aw:1,G:1,y:1,s:1,a:1});var Wu=class extends W{constructor(e){super(),L(this,e,null,!0,!0)}};new T().i(Wu,`java.lang.IllegalStateException`,{db:1,G:1,y:1,s:1,a:1});function Gu(e,t){return L(e,t,null,!0,!0),e}function Ku(e,t){return L(e,`Index out of range: `+t,null,!0,!0),e}var qu=class extends W{};new T().i(qu,`java.lang.IndexOutOfBoundsException`,{dc:1,G:1,y:1,s:1,a:1});function Ju(){}b=Ju.prototype=new $l,b.constructor=Ju,new T().i(Ju,`java.lang.JSConsoleBasedPrintStream$DummyOutputStream`,{dg:1,ar:1,ap:1,at:1,aq:1});function Yu(e,t){return L(e,t,null,!0,!0),e}function Xu(e){return L(e,null,null,!0,!0),e}var K=class extends W{};new T().i(K,`java.lang.NullPointerException`,{dh:1,G:1,y:1,s:1,a:1});var Zu=new T().i(0,`java.lang.Short`,{dk:1,W:1,a:1,Q:1,O:1},(e=>sr(e))),Qu=class extends W{constructor(e){super(),L(this,e,null,!0,!0)}};new T().i(Qu,`java.lang.UnsupportedOperationException`,{dt:1,G:1,y:1,s:1,a:1});var $u=class extends W{constructor(e){super(),L(this,e,null,!0,!0)}};new T().i($u,`java.util.ConcurrentModificationException`,{dx:1,G:1,y:1,s:1,a:1});var ed=class extends W{constructor(e){super(),L(this,e,null,!0,!0)}};new T().i(ed,`java.util.NoSuchElementException`,{dy:1,G:1,y:1,s:1,a:1});function td(){}b=td.prototype=new lu,b.constructor=td,b.b=(function(e){return e}),b.o=(function(){return`generalized constraint`}),new T().i(td,`scala.$less$colon$less$$anon$1`,{dD:1,dA:1,dB:1,e:1,a:1});function nd(e){if(!e.eB){if(e.c3===null)var t=`null`;else{var n=P().gk(e.c3),r=n===null?`of a JS class`:`of class `+n.a2.N;try{var t=e.c3+` (`+r+`)`}catch{var t=`an instance `+r}}e.eA=t,e.eB=!0}return e.eA}var rd=class extends W{constructor(e){super(),this.c3=null,this.eA=null,this.eB=!1,this.c3=e,L(this,null,null,!0,!0)}bI(){return nd(this)}};new T().i(rd,`scala.MatchError`,{dK:1,G:1,y:1,s:1,a:1});function id(){}b=id.prototype=new C,b.constructor=id;function ad(){}ad.prototype=b,b.bL=(function(){return new od(this)}),b.c=(function(){return this===q()}),b.p=(function(){return!this.c()|0}),b.d=(function(){return this.c()?Dl().F:new dd(this.t())});function od(e){if(this.bi=0,this.eF=0,this.eE=null,e===null)throw Xu(new K);this.eE=e,this.bi=0,this.eF=e.aH()}b=od.prototype=new fu,b.constructor=od,b.i=(function(){return this.bi<this.eF}),b.g=(function(){var e=this.eE.aI(this.bi);return this.bi=1+this.bi|0,e}),new T().i(od,`scala.Product$$anon$1`,{dQ:1,J:1,b:1,c:1,K:1});function sd(e){this.bl=null,vl(this,e)}b=sd.prototype=new bl,b.constructor=sd,new T().i(sd,`scala.collection.ClassTagSeqFactory$AnySeqDelegate`,{dV:1,dU:1,a:1,U:1,X:1});function cd(e){return Go(e,e.aF()+`(`,`, `,`)`)}function ld(e){return!!(e&&e.$classData&&e.$classData.n.f)}function ud(){}b=ud.prototype=new fu,b.constructor=ud,b.i=(function(){return!1}),b.hD=(function(){throw new ed(`next on empty iterator`)}),b.p=(function(){return 0}),b.g=(function(){this.hD()}),b.bO=(function(e,t){return this}),new T().i(ud,`scala.collection.Iterator$$anon$19`,{dY:1,J:1,b:1,c:1,K:1});function dd(e){this.eH=null,this.bm=!1,this.eH=e,this.bm=!1}b=dd.prototype=new fu,b.constructor=dd,b.i=(function(){return!this.bm}),b.g=(function(){return this.bm?Dl().F.g():(this.bm=!0,this.eH)}),b.bO=(function(e,t){return this.bm||e>0||t===0?Dl().F:this}),new T().i(dd,`scala.collection.Iterator$$anon$20`,{dZ:1,J:1,b:1,c:1,K:1});function fd(e){for(;;)if(e.z instanceof md){var t=e.z;if(e.z=t.z,e.an=t.an,t.M!==null){e.L===null&&(e.L=t.L);var n=t.L;n===null&&hs().bb(),n.bn=e.M,e.M=t.M}}else return}function pd(e){for(;;)if(e.M===null)return e.z=null,e.L=null,!1;else{if(e.z=e.M.hk(),e.L===e.M){var t=e.L;t===null&&hs().bb(),e.L=t.bn}if(e.M=e.M.bn,fd(e),e.an)return!0;if(!(e.z!==null&&e.z.i()))continue;return e.an=!0,!0}}function md(e){this.z=null,this.M=null,this.L=null,this.an=!1,this.z=e,this.M=null,this.L=null,this.an=!1}b=md.prototype=new fu,b.constructor=md,b.i=(function(){return this.an?!0:this.z===null?!1:this.z.i()?(this.an=!0,!0):pd(this)}),b.g=(function(){if(this.i()){this.an=!1;var e=this.z;return e===null&&hs().bb(),e.g()}return Dl().F.g()}),b.cU=(function(e){var t=new Jo(e,null);if(this.M===null)this.M=t,this.L=t;else{var n=this.L;n===null&&hs().bb(),n.bn=t,this.L=t}return this.z===null&&(this.z=Dl().F),this}),new T().i(md,`scala.collection.Iterator$ConcatIterator`,{aK:1,J:1,b:1,c:1,K:1});function hd(e){for(;e.ad>0;)e.ao.i()?(e.ao.g(),e.ad=e.ad-1|0):e.ad=0}function gd(e,t){if(e.G<0)return-1;var n=e.G-t|0;return n<0?0:n}function _d(e,t,n){this.ao=null,this.G=0,this.ad=0,this.ao=e,this.G=n,this.ad=t}b=_d.prototype=new fu,b.constructor=_d,b.p=(function(){var e=this.ao.p();if(e<0)return-1;var t=e-this.ad|0,n=t<0?0:t;if(this.G<0)return n;var r=this.G;return r<n?r:n}),b.i=(function(){return hd(this),this.G!==0&&this.ao.i()}),b.g=(function(){return hd(this),this.G>0?(this.G=this.G-1|0,this.ao.g()):this.G<0?this.ao.g():Dl().F.g()}),b.bO=(function(e,t){var n=e>0?e:0;if(t<0)var r=gd(this,n);else if(t<=n)var r=0;else if(this.G<0)var r=t-n|0;else var i=gd(this,n),a=t-n|0,r=i<a?i:a;var o=this.ad+n|0;return r===0?Dl().F:o<0?(this.ad=2147483647,this.G=0,Sl(this,new jl((()=>new _d(this.ao,o-2147483647|0,r))))):(this.ad=o,this.G=r,this)}),new T().i(_d,`scala.collection.Iterator$SliceIterator`,{e2:1,J:1,b:1,c:1,K:1});function vd(e,t){if(t<0)throw Gu(new qu,``+t);var n=e.gQ(t);if(n.c())throw Gu(new qu,``+t);return n.J()}function yd(e,t){return ip(t)?bd(e,e,t):_u(e,t)}function bd(e,t,n){for(var r=n,i=t;;)if(i===r)return!0;else{if(!i.c()&&!r.c()&&N().I(i.J(),r.J())){var a=i.y(),o=r.y();i=a,r=o;continue}return i.c()&&r.c()}}function xd(e){if(this.bq=null,e===null)throw Xu(new K);this.bq=e}b=xd.prototype=new fu,b.constructor=xd,b.i=(function(){return!this.bq.c()}),b.g=(function(){var e=this.bq.J();return this.bq=this.bq.y(),e}),new T().i(xd,`scala.collection.StrictOptimizedLinearSeqOps$$anon$1`,{e6:1,J:1,b:1,c:1,K:1});function Sd(){Cd=this,$(),$()}b=Sd.prototype=new C,b.constructor=Sd,b.aQ=(function(e){return $().fH(e)}),b.a7=(function(){return new rm}),b.aS=(function(e){return $().fH(e)}),new T().i(Sd,`scala.collection.immutable.List$`,{ec:1,a:1,U:1,X:1,a0:1});var Cd;function wd(){return Cd||=new Sd,Cd}function Td(){this.eO=null,Ed=this,this.eO=new w(0)}b=Td.prototype=new C,b.constructor=Td,b.aQ=(function(e){return this.fu(e)}),b.fu=(function(e){var t=e.p();if(t>=0){var n=this.fJ(this.eO,0,t),r=ld(e)?e.aG(n,0,2147483647):e.d().aG(n,0,2147483647);if(r!==t)throw new Wu(`Copied `+r+` of `+t);return im(new om,n,t)}return am(new om).fa(e)}),b.a7=(function(){return new Od}),b.hS=(function(e,t){if(t<0)throw ou(new W,`Overflow while resizing array of array-backed collection. Requested length: `+t+`; current length: `+e+`; increase: `+(t-e|0));if(t<=e)return-1;if(t>2147483639)throw ou(new W,`Array of array-backed collection exceeds VM length limit of 2147483639. Requested length: `+t+`; current length: `+e);if(e>1073741819)return 2147483639;var n=e<<1,r=n>16?n:16;return t>r?t:r}),b.fJ=(function(e,t,n){var r=this.hS(e.a.length,n);if(r<0)return e;var i=new w(r);return e.a1(0,i,0,t),i}),b.aS=(function(e){return this.fu(e)}),new T().i(Td,`scala.collection.mutable.ArrayBuffer$`,{ef:1,a:1,U:1,X:1,a0:1});var Ed;function Dd(){return Ed||=new Td,Ed}function Od(){this.br=null,bu(this,(Dd(),am(new om)))}b=Od.prototype=new Su,b.constructor=Od,new T().i(Od,`scala.collection.mutable.ArrayBuffer$$anon$1`,{eg:1,bd:1,R:1,S:1,V:1});function kd(){this.bo=null,pu(this,Hd())}b=kd.prototype=new hu,b.constructor=kd,new T().i(kd,`scala.collection.mutable.Buffer$`,{em:1,e4:1,a:1,U:1,X:1});var Ad;function jd(){return Ad||=new kd,Ad}function Md(e,t){return e.bs=t,e}function Nd(){this.bs=null}b=Nd.prototype=new C,b.constructor=Nd;function Pd(){}Pd.prototype=b,b.X=(function(e){return Cc(this,e)}),b.a8=(function(){return this.bs});function Fd(){}b=Fd.prototype=new C,b.constructor=Fd,b.aQ=(function(e){return new rm().ck(e)}),b.a7=(function(){return bu(new xu,new rm)}),b.aS=(function(e){return new rm().ck(e)}),new T().i(Fd,`scala.collection.mutable.ListBuffer$`,{eq:1,a:1,U:1,X:1,a0:1});var Id;function Ld(){return Id||=new Fd,Id}function Rd(e,t){this.cN=null,this.eZ=null,this.eY=0,this.cN=e,this.eZ=t,this.eY=t.Y()|0}b=Rd.prototype=new fu,b.constructor=Rd,b.i=(function(){return ls().fe(this.eY,this.eZ.Y()|0,`mutation occurred during iteration`),this.cN.i()}),b.g=(function(){return this.cN.g()}),new T().i(Rd,`scala.collection.mutable.MutationTracker$CheckedIterator`,{es:1,J:1,b:1,c:1,K:1});function zd(e){this.f3=null,this.bv=0,this.f2=0,this.f3=e,this.bv=0,this.f2=e.aH()}b=zd.prototype=new fu,b.constructor=zd,b.i=(function(){return this.bv<this.f2}),b.g=(function(){var e=this.f3.aI(this.bv);return this.bv=1+this.bv|0,e}),new T().i(zd,`scala.runtime.ScalaRunTime$$anon$1`,{eL:1,J:1,b:1,c:1,K:1});function Bd(){}b=Bd.prototype=new C,b.constructor=Bd,b.aQ=(function(e){return this.fv(e)}),b.a7=(function(){return cm(new lm)}),b.fv=(function(e){return Cc(cm(new lm),e).a8()}),b.aS=(function(e){return this.fv(e)}),new T().i(Bd,`scala.scalajs.js.WrappedArray$`,{eR:1,a0:1,a:1,U:1,X:1});var Vd;function Hd(){return Vd||=new Bd,Vd}function Ud(){}b=Ud.prototype=new C,b.constructor=Ud,b.aQ=(function(e){return this.fw(e)}),b.fw=(function(e){return this.a7().X(e).a8()}),b.a7=(function(){return new yu(new H((e=>new Z(e.aD))),sm(new lm,[]))}),b.aS=(function(e){return this.fw(e)}),new T().i(Ud,`scala.scalajs.runtime.WrappedVarArgs$`,{f2:1,a0:1,a:1,U:1,X:1});var Wd;function Gd(){return Wd||=new Ud,Wd}var Kd=class e extends Ic{constructor(e,t){super(),this.aW=null,this.aV=0,this.aW=e,this.aV=t,L(this,`Transaction depth exceeded maxDepth = `+t+`: Execution of `+e+" aborted. See `Transaction.maxDepth`.",null,!0,!0)}bL(){return new od(this)}k(){var e=-889275714;return e=F().l(e,of(`TransactionDepthExceeded`)),e=F().l(e,F().u(this.aW)),e=F().l(e,this.aV),F().A(e,2)}f(t){if(this===t)return!0;if(t instanceof e){if(this.aV===t.aV){var n=this.aW,r=t.aW;return n===null?r===null:n===r}return!1}return!1}aH(){return 2}aJ(){return`TransactionDepthExceeded`}aI(e){if(e===0)return this.aW;if(e===1)return this.aV;throw Gu(new qu,``+e)}o(){return`TransactionDepthExceeded: `+this.aW+`; maxDepth: `+this.aV}};new T().i(Kd,`com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded`,{ai:1,bq:1,s:1,a:1,d:1,Y:1});function qd(e){this.b1=null,this.b2=null,this.dI=null,this.dJ=!1,Jl(this,e,$())}b=qd.prototype=new Xl,b.constructor=qd,b.id=(function(){return this.dJ||=(this.dI=this.r(`wrap`),!0),this.dI}),new T().i(qd,`com.raquo.laminar.defs.styles.StyleProps$$anon$31`,{c6:1,a4:1,I:1,a1:1,a2:1,ca:1});function Jd(e,t){this.c1=null,this.aa=null,this.cy=null,this.aN=null,this.dZ=null,this.D=null,this.dZ=e,this.D=t,this.c1=q(),Ys(this),Ou(this)}b=Jd.prototype=new C,b.constructor=Jd,b.a3=(function(e){pa().bw(e,this,void 0)}),b.ce=(function(){return this.aa}),b.fg=(function(e){this.aa=e}),b.fR=(function(e){Mu(this,e)}),b.fN=(function(e){Nu(this,e)}),b.o=(function(){return`ReactiveHtmlElement(`+(this.D===null?`tag=`+this.dZ.cY():this.D.outerHTML)+`)`}),b.aU=(function(){return this.D});var Yd=new T().i(Jd,`com.raquo.laminar.nodes.ReactiveHtmlElement`,{cN:1,a9:1,T:1,am:1,an:1,cL:1});function Xd(e,t){return Object.is(e,t)}function Zd(e){var t=e|0;if(t===e&&1/e!=-1/0)return t;if(e!==e)return 2146959360;var n=tr;return n.setFloat64(0,e,!0),(n.getInt32(0,!0)|0)^(n.getInt32(4,!0)|0)}var Qd=new T().i(0,`java.lang.Double`,{av:1,W:1,a:1,Q:1,O:1,Z:1},(e=>typeof e==`number`)),$d=new T().i(0,`java.lang.Float`,{da:1,W:1,a:1,Q:1,O:1,Z:1},(e=>lr(e))),ef=new T().i(0,`java.lang.Integer`,{dd:1,W:1,a:1,Q:1,O:1,Z:1},(e=>cr(e)));function tf(e,t,n){if(n instanceof x){var r=n,i=r.l,a=r.h;return(e^i|t^a)===0}return!1}function nf(e,t){return e^t}var rf=new T().i(0,`java.lang.Long`,{ax:1,W:1,a:1,Q:1,O:1,Z:1},(e=>e instanceof x)),af=class extends Uu{constructor(e){super(),L(this,e,null,!0,!0)}};new T().i(af,`java.lang.NumberFormatException`,{di:1,aw:1,G:1,y:1,s:1,a:1});function of(e){for(var t=e.length,n=0,r=0;r!==t;)n=((n<<5)-n|0)+e.charCodeAt(r)|0,r=1+r|0;return n}function sf(e,t){return e===t}var cf=new T().i(0,`java.lang.String`,{dn:1,a:1,Q:1,ad:1,O:1,Z:1},(e=>typeof e==`string`));function lf(){}b=lf.prototype=new ad,b.constructor=lf,b.k=(function(){return 2433880}),b.o=(function(){return`None`}),b.aH=(function(){return 0}),b.aJ=(function(){return`None`}),b.aI=(function(e){throw Ku(new qu,e)}),b.hb=(function(){throw new ed(`None.get`)}),b.t=(function(){this.hb()}),new T().i(lf,`scala.None$`,{dL:1,aB:1,b:1,d:1,Y:1,a:1});var uf;function q(){return uf||=new lf,uf}function J(e){this.bj=null,this.bj=e}b=J.prototype=new ad,b.constructor=J,b.k=(function(){return R().fI(this,1323286827,!0)}),b.f=(function(e){return this===e||e instanceof J&&N().I(this.bj,e.bj)}),b.o=(function(){return P().g6(this)}),b.aH=(function(){return 1}),b.aJ=(function(){return`Some`}),b.aI=(function(e){if(e===0)return this.bj;throw Ku(new qu,e)}),b.t=(function(){return this.bj}),new T().i(J,`scala.Some`,{aC:1,aB:1,b:1,d:1,Y:1,a:1});function df(){}b=df.prototype=new C,b.constructor=df;function ff(){}ff.prototype=b,b.p=(function(){return-1}),b.U=(function(e){Uo(this,e)}),b.aG=(function(e,t,n){return Wo(this,e,t,n)}),b.ba=(function(e,t,n,r){return Ko(this,e,t,n,r)}),b.aF=(function(){return this.ai()});function Y(e){this.c4=null,this.ab=0,this.bk=0,this.c4=e,this.ab=0,this.bk=vo().Z(this.c4)}b=Y.prototype=new fu,b.constructor=Y,b.p=(function(){return this.bk-this.ab|0}),b.i=(function(){return this.ab<this.bk}),b.g=(function(){this.ab>=vo().Z(this.c4)&&Dl().F.g();var e=P().aR(this.c4,this.ab);return this.ab=1+this.ab|0,e}),b.cd=(function(e){if(e>0){var t=this.ab+e|0;if(t<0)var n=this.bk;else var r=this.bk,n=r<t?r:t;this.ab=n}return this}),new T().i(Y,`scala.collection.ArrayOps$ArrayIterator`,{dT:1,J:1,b:1,c:1,K:1,a:1});function pf(e,t){return e.cJ=t,e.ac=0,e.E=t.e(),e}function mf(e,t){return t<0?0:t>e.E?e.E:t}function hf(){this.cJ=null,this.ac=0,this.E=0}b=hf.prototype=new fu,b.constructor=hf;function gf(){}gf.prototype=b,b.p=(function(){return this.E}),b.i=(function(){return this.E>0}),b.g=(function(){if(this.E>0){var e=this.cJ.h(this.ac);return this.ac=1+this.ac|0,this.E=this.E-1|0,e}return Dl().F.g()}),b.cd=(function(e){if(e>0){this.ac=this.ac+e|0;var t=this.E-e|0;this.E=t<0?0:t}return this}),b.bO=(function(e,t){var n=mf(this,e),r=mf(this,t)-n|0;return this.E=r<0?0:r,this.ac=this.ac+n|0,this}),new T().i(hf,`scala.collection.IndexedSeqView$IndexedSeqViewIterator`,{aJ:1,J:1,b:1,c:1,K:1,a:1});function _f(){this.bs=null,Md(this,Dl().F)}b=_f.prototype=new Pd,b.constructor=_f,b.gd=(function(e){return this.bs=this.bs.cU(new jl((()=>new dd(e)))),this}),b.S=(function(e){return this.gd(e)}),new T().i(_f,`scala.collection.Iterator$$anon$21`,{e0:1,ep:1,R:1,S:1,V:1,a7:1});function vf(e){return e.eL||=(e.eK=new Np(new(Ml.r()).C(0)),!0),e.eK}function yf(){this.eM=null,this.eK=null,this.eL=!1,bf=this,this.eM=new sd(this)}b=yf.prototype=new C,b.constructor=yf,b.h7=(function(e,t){return e instanceof Sp?e:this.d4(jo().fs(e,t))}),b.fC=(function(e){return new yu(new H((t=>this.d4(qo(t,e)))),(Dd(),new Od))}),b.d4=(function(e){if(e===null)return null;if(e instanceof w)return new Np(e);if(e instanceof br)return new jp(e);if(e instanceof Cr)return new kp(e);if(e instanceof xr)return new Mp(e);if(e instanceof Sr)return new Ap(e);if(e instanceof _r)return new Op(e);if(e instanceof vr)return new Dp(e);if(e instanceof yr)return new Pp(e);if(e instanceof gr)return new Ep(e);if(po(e,1))return new Fp(e);throw new rd(e)}),b.cV=(function(e,t){return this.h7(e,t)}),new T().i(yf,`scala.collection.immutable.ArraySeq$`,{ea:1,a:1,aH:1,aF:1,aG:1,aN:1});var bf;function xf(){return bf||=new yf,bf}function Sf(e){return e.eQ=0,e.eR=0,e}function Cf(){this.eQ=0,this.eR=0}b=Cf.prototype=new C,b.constructor=Cf;function wf(){}wf.prototype=b;function Tf(){this.eU=null,this.eT=null,Ef=this,this.eU=new sd(this),this.eT=new qp(new w(0))}b=Tf.prototype=new C,b.constructor=Tf,b.h8=(function(e,t){return this.fB(jo().fs(e,t))}),b.fC=(function(e){return new yu(new H((e=>this.fB(e))),new Pf(e.ci()))}),b.fB=(function(e){if(e===null)return null;if(e instanceof w)return new qp(e);if(e instanceof br)return new Gp(e);if(e instanceof Cr)return new Up(e);if(e instanceof xr)return new Kp(e);if(e instanceof Sr)return new Wp(e);if(e instanceof _r)return new Hp(e);if(e instanceof vr)return new Vp(e);if(e instanceof yr)return new Jp(e);if(e instanceof gr)return new Bp(e);if(po(e,1))return new Yp(e);throw new rd(e)}),b.cV=(function(e,t){return this.h8(e,t)}),new T().i(Tf,`scala.collection.mutable.ArraySeq$`,{el:1,a:1,aH:1,aF:1,aG:1,aN:1});var Ef;function Df(){return Ef||=new Tf,Ef}function Of(e){this.b1=null,this.b2=null,this.dE=null,this.dF=!1,Jl(this,e,$())}b=Of.prototype=new Xl,b.constructor=Of,b.h3=(function(){return this.dF||=(this.dE=this.r(`flex`),!0),this.dE}),new T().i(Of,`com.raquo.laminar.defs.styles.StyleProps$$anon$28`,{c4:1,a4:1,I:1,a1:1,a2:1,cb:1,c8:1});function kf(e){this.b1=null,this.b2=null,this.dG=null,this.dH=!1,Jl(this,e,$())}b=kf.prototype=new Xl,b.constructor=kf,b.gz=(function(){return this.dH||=(this.dG=this.r(`center`),!0),this.dG}),new T().i(kf,`com.raquo.laminar.defs.styles.StyleProps$$anon$3`,{c5:1,a4:1,I:1,a1:1,a2:1,cc:1,c9:1});function Af(e){this.b1=null,this.b2=null,this.dK=null,this.dL=!1,Jl(this,e,$())}b=Af.prototype=new Xl,b.constructor=Af,b.hJ=(function(){return this.dL||=(this.dK=Fs(this),!0),this.dK}),new T().i(Af,`com.raquo.laminar.defs.styles.StyleProps$$anon$5`,{c7:1,a4:1,I:1,a1:1,a2:1,cd:1,ce:1});function jf(){}b=jf.prototype=new Ru,b.constructor=jf;function Mf(){}Mf.prototype=b;function Nf(e){return e.aF()+`(<not computed>)`}function Pf(e){this.eQ=0,this.eR=0,this.b9=null,this.eS=!1,this.cM=null,this.b9=e,Sf(this),this.eS=e===Er.l(),this.cM=[]}b=Pf.prototype=new wf,b.constructor=Pf,b.fb=(function(e){var t=this.eS?fr(e):e===null?os().d2(this.b9):e;return this.cM.push(t),this}),b.g7=(function(e){for(var t=e.d();t.i();)this.fb(t.g());return this}),b.a8=(function(){return os().d1(this.b9===wr.l()?mo.l():this.b9===fs.l()||this.b9===Ml.l()?E.l():this.b9,this.cM)}),b.o=(function(){return`ArrayBuilder.generic`}),b.S=(function(e){return this.fb(e)}),b.X=(function(e){return this.g7(e)}),new T().i(Pf,`scala.collection.mutable.ArrayBuilder$generic`,{ek:1,ei:1,R:1,S:1,V:1,a7:1,a:1});function Ff(e,t){this.cJ=null,this.ac=0,this.E=0,this.eX=null,this.eW=0,this.eX=t,pf(this,e),this.eW=t.Y()|0}b=Ff.prototype=new gf,b.constructor=Ff,b.i=(function(){return ls().fe(this.eW,this.eX.Y()|0,`mutation occurred during iteration`),this.E>0}),new T().i(Ff,`scala.collection.mutable.CheckedIndexedSeqView$CheckedIterator`,{eo:1,aJ:1,J:1,b:1,c:1,K:1,a:1});function If(){}b=If.prototype=new C,b.constructor=If;function Lf(){}Lf.prototype=b;var Rf=class e extends W{constructor(e){super(),this.W=null,this.W=e,L(this,null,null,!0,!0)}bI(){return Zn(this.W)}aJ(){return`JavaScriptException`}aH(){return 1}aI(e){return e===0?this.W:F().ho(e)}bL(){return new zd(this)}k(){return R().fI(this,1744042595,!0)}f(t){return this===t||t instanceof e&&N().I(this.W,t.W)}};new T().i(Rf,`scala.scalajs.js.JavaScriptException`,{bo:1,G:1,y:1,s:1,a:1,Y:1,d:1});function zf(e,t){typeof console<`u`&&(e.es&&console.error?console.error(t):console.log(t))}function Bf(e){this.es=!1,this.bg=null,this.es=e,new Ju,this.bg=``}b=Bf.prototype=new Mf,b.constructor=Bf,b.hs=(function(e){for(var t=e;t!==``;){var n=t.indexOf(`
`)|0;if(n<0)this.bg=``+this.bg+t,t=``;else{var r=this.bg,i=t;zf(this,``+r+i.substring(0,n)),this.bg=``;var a=t,o=1+n|0;t=a.substring(o)}}}),new T().i(Bf,`java.lang.JSConsoleBasedPrintStream`,{df:1,d4:1,d3:1,ar:1,ap:1,at:1,aq:1,as:1});function Vf(e,t,n){for(var r=n,i=t;;)if(i<=0||r.c())return r;else{var a=i-1|0,o=r.y();i=a,r=o}}function Hf(){this.bt=null}b=Hf.prototype=new Lf,b.constructor=Hf;function Uf(){}Uf.prototype=b,b.o=(function(){return this.bt}),b.f=(function(e){return this===e}),b.k=(function(){return ar(this)});function Wf(){}b=Wf.prototype=new ff,b.constructor=Wf;function Gf(){}Gf.prototype=b,b.o=(function(){return Nf(this)});function Kf(){this.bt=null,this.bt=`Any`,$()}b=Kf.prototype=new Uf,b.constructor=Kf,b.ci=(function(){return E.l()}),b.cZ=(function(e){return new w(e)}),new T().i(Kf,`scala.reflect.ManifestFactory$AnyManifest$`,{ey:1,bk:1,bj:1,a:1,bl:1,bg:1,d:1,bh:1,bi:1});var qf;function Jf(){return qf||=new Kf,qf}function Yf(){this.bt=null,this.bt=`Object`,$()}b=Yf.prototype=new Uf,b.constructor=Yf,b.ci=(function(){return E.l()}),b.cZ=(function(e){return new w(e)}),new T().i(Yf,`scala.reflect.ManifestFactory$ObjectManifest$`,{ez:1,bk:1,bj:1,a:1,bl:1,bg:1,d:1,bh:1,bi:1});var Xf;function Zf(){return Xf||=new Yf,Xf}function X(e,t){return e===t?!0:Qf(t)&&t.cT(e)?e.cj(t):!1}function Qf(e){return!!(e&&e.$classData&&e.$classData.n.i)}function $f(){}b=$f.prototype=new ff,b.constructor=$f;function ep(){}ep.prototype=b,b.a6=(function(e){return xl(this,e)}),b.c=(function(){return gu(this)}),b.cj=(function(e){return _u(this,e)}),b.cT=(function(e){return!0}),b.f=(function(e){return X(this,e)}),b.k=(function(){return R().fK(this)}),b.o=(function(){return cd(this)});function tp(){}b=tp.prototype=new Gf,b.constructor=tp;function np(){}np.prototype=b,b.c=(function(){return gu(this)});function rp(e){return!!(e&&e.$classData&&e.$classData.n.n)}function ip(e){return!!(e&&e.$classData&&e.$classData.n.a5)}function ap(e,t){return e.bp=t,e}function op(){this.bp=null}b=op.prototype=new np,b.constructor=op;function sp(){}sp.prototype=b,b.h=(function(e){return this.bp.h(e)}),b.e=(function(){return this.bp.e()}),b.c=(function(){return this.bp.c()});function cp(){this.dA=null,this.dB=!1,this.dn=null,this.dp=!1,this.ds=null,this.dt=!1,this.dy=null,this.dz=!1,this.dl=null,this.dm=!1,this.dq=null,this.dr=!1,this.du=null,this.dv=!1,this.dw=null,this.dx=!1,this.fU=null,this.fT=null,this.dC=null,this.dD=!1,Ri(this),Ni(this),ji(this),Mi(this)}b=cp.prototype=new C,b.constructor=cp,b.i1=(function(){return this.dB||=(this.dA=Xs(new Zs,`strong`,!1),!0),this.dA}),b.gx=(function(){return this.dp||=(this.dn=Xs(new Zs,`br`,!0),!0),this.dn}),b.fh=(function(){return this.dt||=(this.ds=Xs(new Zs,`div`,!1),!0),this.ds}),b.fE=(function(){return this.dz||=(this.dy=new Ls(`click`),!0),this.dy}),b.gj=(function(){return this.dm||=(this.dl=new kf(`align-items`),!0),this.dl}),b.gL=(function(){return this.dr||=(this.dq=new Of(`display`),!0),this.dq}),b.h4=(function(){return this.dv||=(this.du=new qd(`flex-wrap`),!0),this.du}),b.ha=(function(){return this.dx||=(this.dw=new Af(`gap`),!0),this.dw}),b.i2=(function(){return this.dD||=(this.dC=new Gl(this),!0),this.dC}),new T().i(cp,`com.raquo.laminar.api.package$$anon$1`,{bT:1,cf:1,bX:1,c2:1,c1:1,c3:1,bZ:1,bR:1,bN:1,bQ:1,ak:1,al:1,aj:1,bO:1});function lp(){}b=lp.prototype=new np,b.constructor=lp;function up(){}up.prototype=b,b.a6=(function(e){var t=this.e();return t===e?0:t<e?-1:1}),b.p=(function(){return this.e()}),b.ai=(function(){return`IndexedSeqView`});function dp(e){this.bp=null,ap(this,e)}b=dp.prototype=new sp,b.constructor=dp,b.a6=(function(e){var t=this.e();return t===e?0:t<e?-1:1}),b.p=(function(){return this.e()}),b.d=(function(){return pf(new hf,this)}),b.ai=(function(){return`IndexedSeqView`}),new T().i(dp,`scala.collection.IndexedSeqView$Id`,{dW:1,e5:1,aD:1,aE:1,l:1,b:1,c:1,h:1,g:1,f:1,a:1,aP:1,j:1,aM:1,o:1,aI:1});function fp(){}b=fp.prototype=new ep,b.constructor=fp;function pp(){}pp.prototype=b;function mp(e,t){this.cL=null,this.eP=null,this.cL=e,this.eP=t}b=mp.prototype=new up,b.constructor=mp,b.h=(function(e){return this.cL.h(e)}),b.e=(function(){return this.cL.w}),b.aF=(function(){return`ArrayBufferView`}),b.d=(function(){return new Ff(this,this.eP)}),new T().i(mp,`scala.collection.mutable.ArrayBufferView`,{eh:1,dR:1,aD:1,aE:1,l:1,b:1,c:1,h:1,g:1,f:1,a:1,aP:1,j:1,aM:1,o:1,aI:1});function hp(e,t){return!_p(t)||e.e()===t.e()}function gp(e,t){if(_p(t)){if(e===t)return!0;var n=e.e(),r=n===t.e();if(r){var i=0,a=e.cS(),o=t.cS(),s=a<o?a:o,c=n>>31,l=s>>31,u=s<<1,d=s>>>31|0|l<<1;if(c===d?n>>>0>u>>>0:c>d)var f=s;else var f=n;for(;i<f&&r;)r=N().I(e.h(i),t.h(i)),i=1+i|0;if(i<n&&r)for(var p=e.d().cd(i),ee=t.d().cd(i);r&&p.i();)r=N().I(p.g(),ee.g())}return r}return _u(e,t)}function _p(e){return!!(e&&e.$classData&&e.$classData.n.z)}function vp(){}b=vp.prototype=new ep,b.constructor=vp;function yp(){}yp.prototype=b;function Z(e){this.c9=null,this.c9=e}b=Z.prototype=new C,b.constructor=Z,b.cX=(function(e){return vu(this,e)}),b.cT=(function(e){return hp(this,e)}),b.cj=(function(e){return gp(this,e)}),b.cS=(function(){return rs().eN}),b.d=(function(){return pf(new hf,new dp(this))}),b.a6=(function(e){var t=this.e();return t===e?0:t<e?-1:1}),b.p=(function(){return this.e()}),b.f=(function(e){return X(this,e)}),b.k=(function(){return R().fK(this)}),b.o=(function(){return cd(this)}),b.c=(function(){return gu(this)}),b.U=(function(e){Uo(this,e)}),b.aG=(function(e,t,n){return Wo(this,e,t,n)}),b.ba=(function(e,t,n,r){return Ko(this,e,t,n,r)}),b.e=(function(){return this.c9.length|0}),b.h=(function(e){return this.c9[e]}),b.aF=(function(){return`WrappedVarArgs`}),b.b=(function(e){return this.h(e|0)}),b.aT=(function(){return Gd()}),new T().i(Z,`scala.scalajs.runtime.WrappedVarArgs`,{bp:1,z:1,b:1,c:1,h:1,g:1,f:1,A:1,e:1,k:1,j:1,d:1,i:1,C:1,B:1,o:1,n:1,M:1,D:1,p:1,q:1,a:1});function bp(){}b=bp.prototype=new yp,b.constructor=bp;function xp(){}xp.prototype=b,b.X=(function(e){return Cc(this,e)});function Sp(){}b=Sp.prototype=new pp,b.constructor=Sp;function Cp(){}Cp.prototype=b,b.a6=(function(e){var t=this.e();return t===e?0:t<e?-1:1}),b.p=(function(){return this.e()}),b.ai=(function(){return`IndexedSeq`}),b.cT=(function(e){return hp(this,e)}),b.cj=(function(e){return gp(this,e)}),b.hx=(function(e){for(var t=new w(this.e()),n=0;n<t.a.length;)t.a[n]=e.b(this.h(n)),n=1+n|0;return xf().d4(t)}),b.aF=(function(){return`ArraySeq`}),b.aG=(function(e,t,n){var r=this.e(),i=vo().Z(e),a=n<r?n:r,o=t<0?i:i-t|0,s=o<a?o:a,c=s<0?0:s;return c>0&&jo().cb(this.a9(),0,e,t,c),c}),b.cS=(function(){return 2147483647}),b.aT=(function(){return xf().eM}),b.cX=(function(e){return this.hx(e)});function wp(){}b=wp.prototype=new yp,b.constructor=wp;function Tp(){}Tp.prototype=b,b.a6=(function(e){var t=this.e();return t===e?0:t<e?-1:1}),b.p=(function(){return this.e()}),b.ai=(function(){return`IndexedSeq`}),b.aF=(function(){return`ArraySeq`}),b.aG=(function(e,t,n){var r=this.e(),i=vo().Z(e),a=n<r?n:r,o=t<0?i:i-t|0,s=o<a?o:a,c=s<0?0:s;return c>0&&jo().cb(this.T(),0,e,t,c),c}),b.f=(function(e){return e instanceof wp&&vo().Z(this.T())!==vo().Z(e.T())?!1:X(this,e)}),b.aT=(function(){return Df().eU});function Ep(e){this.ap=null,this.ap=e}b=Ep.prototype=new Cp,b.constructor=Ep,b.e=(function(){return this.ap.a.length}),b.bF=(function(e){return this.ap.a[e]}),b.k=(function(){var e=R();return e.s(this.ap,e.q)}),b.f=(function(e){return e instanceof Ep?j().fp(this.ap,e.ap):X(this,e)}),b.d=(function(){return new Y(this.ap)}),b.a9=(function(){return this.ap}),b.h=(function(e){return this.bF(e)}),b.b=(function(e){return this.bF(e|0)}),new T().i(Ep,`scala.collection.immutable.ArraySeq$ofBoolean`,{aQ:1,L:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,o:1,n:1,M:1,z:1,p:1,q:1,D:1,P:1,a:1});function Dp(e){this.aq=null,this.aq=e}b=Dp.prototype=new Cp,b.constructor=Dp,b.e=(function(){return this.aq.a.length}),b.bx=(function(e){return this.aq.a[e]}),b.k=(function(){var e=R();return e.s(this.aq,e.q)}),b.f=(function(e){return e instanceof Dp?j().fk(this.aq,e.aq):X(this,e)}),b.d=(function(){return new Y(this.aq)}),b.a9=(function(){return this.aq}),b.h=(function(e){return this.bx(e)}),b.b=(function(e){return this.bx(e|0)}),new T().i(Dp,`scala.collection.immutable.ArraySeq$ofByte`,{aR:1,L:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,o:1,n:1,M:1,z:1,p:1,q:1,D:1,P:1,a:1});function Op(e){this.af=null,this.af=e}b=Op.prototype=new Cp,b.constructor=Op,b.e=(function(){return this.af.a.length}),b.by=(function(e){return this.af.a[e]}),b.k=(function(){var e=R();return e.s(this.af,e.q)}),b.f=(function(e){return e instanceof Op?j().fl(this.af,e.af):X(this,e)}),b.d=(function(){return new Y(this.af)}),b.ba=(function(e,t,n,r){return new Hp(this.af).ba(e,t,n,r)}),b.a9=(function(){return this.af}),b.h=(function(e){return ur(this.by(e))}),b.b=(function(e){return ur(this.by(e|0))}),new T().i(Op,`scala.collection.immutable.ArraySeq$ofChar`,{aS:1,L:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,o:1,n:1,M:1,z:1,p:1,q:1,D:1,P:1,a:1});function kp(e){this.ar=null,this.ar=e}b=kp.prototype=new Cp,b.constructor=kp,b.e=(function(){return this.ar.a.length}),b.bz=(function(e){return this.ar.a[e]}),b.k=(function(){var e=R();return e.s(this.ar,e.q)}),b.f=(function(e){if(e instanceof kp){var t=this.ar,n=e.ar;if(t===n)return!0;if(t.a.length===n.a.length){for(var r=0;r<t.a.length&&t.a[r]===n.a[r];)r=1+r|0;return r>=t.a.length}return!1}return X(this,e)}),b.d=(function(){return new Y(this.ar)}),b.a9=(function(){return this.ar}),b.h=(function(e){return this.bz(e)}),b.b=(function(e){return this.bz(e|0)}),new T().i(kp,`scala.collection.immutable.ArraySeq$ofDouble`,{aT:1,L:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,o:1,n:1,M:1,z:1,p:1,q:1,D:1,P:1,a:1});function Ap(e){this.as=null,this.as=e}b=Ap.prototype=new Cp,b.constructor=Ap,b.e=(function(){return this.as.a.length}),b.bA=(function(e){return this.as.a[e]}),b.k=(function(){var e=R();return e.s(this.as,e.q)}),b.f=(function(e){if(e instanceof Ap){var t=this.as,n=e.as;if(t===n)return!0;if(t.a.length===n.a.length){for(var r=0;r<t.a.length&&t.a[r]===n.a[r];)r=1+r|0;return r>=t.a.length}return!1}return X(this,e)}),b.d=(function(){return new Y(this.as)}),b.a9=(function(){return this.as}),b.h=(function(e){return this.bA(e)}),b.b=(function(e){return this.bA(e|0)}),new T().i(Ap,`scala.collection.immutable.ArraySeq$ofFloat`,{aU:1,L:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,o:1,n:1,M:1,z:1,p:1,q:1,D:1,P:1,a:1});function jp(e){this.at=null,this.at=e}b=jp.prototype=new Cp,b.constructor=jp,b.e=(function(){return this.at.a.length}),b.bB=(function(e){return this.at.a[e]}),b.k=(function(){var e=R();return e.s(this.at,e.q)}),b.f=(function(e){return e instanceof jp?j().fm(this.at,e.at):X(this,e)}),b.d=(function(){return new Y(this.at)}),b.a9=(function(){return this.at}),b.h=(function(e){return this.bB(e)}),b.b=(function(e){return this.bB(e|0)}),new T().i(jp,`scala.collection.immutable.ArraySeq$ofInt`,{aV:1,L:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,o:1,n:1,M:1,z:1,p:1,q:1,D:1,P:1,a:1});function Mp(e){this.au=null,this.au=e}b=Mp.prototype=new Cp,b.constructor=Mp,b.e=(function(){return this.au.a.length>>>1|0}),b.bC=(function(e){var t=this.au.a,n=e<<1;return S(t[n],t[n+1|0])}),b.k=(function(){var e=R();return e.s(this.au,e.q)}),b.f=(function(e){return e instanceof Mp?j().fn(this.au,e.au):X(this,e)}),b.d=(function(){return new Y(this.au)}),b.a9=(function(){return this.au}),b.h=(function(e){return this.bC(e)}),b.b=(function(e){return this.bC(e|0)}),new T().i(Mp,`scala.collection.immutable.ArraySeq$ofLong`,{aW:1,L:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,o:1,n:1,M:1,z:1,p:1,q:1,D:1,P:1,a:1});function Np(e){this.av=null,this.av=e}b=Np.prototype=new Cp,b.constructor=Np,b.e=(function(){return this.av.a.length}),b.h=(function(e){return this.av.a[e]}),b.k=(function(){var e=R();return e.s(this.av,e.q)}),b.f=(function(e){return e instanceof Np?jo().fq(this.av,e.av):X(this,e)}),b.d=(function(){return new Y(this.av)}),b.a9=(function(){return this.av}),b.b=(function(e){return this.h(e|0)}),new T().i(Np,`scala.collection.immutable.ArraySeq$ofRef`,{aX:1,L:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,o:1,n:1,M:1,z:1,p:1,q:1,D:1,P:1,a:1});function Pp(e){this.aw=null,this.aw=e}b=Pp.prototype=new Cp,b.constructor=Pp,b.e=(function(){return this.aw.a.length}),b.bD=(function(e){return this.aw.a[e]}),b.k=(function(){var e=R();return e.s(this.aw,e.q)}),b.f=(function(e){return e instanceof Pp?j().fo(this.aw,e.aw):X(this,e)}),b.d=(function(){return new Y(this.aw)}),b.a9=(function(){return this.aw}),b.h=(function(e){return this.bD(e)}),b.b=(function(e){return this.bD(e|0)}),new T().i(Pp,`scala.collection.immutable.ArraySeq$ofShort`,{aY:1,L:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,o:1,n:1,M:1,z:1,p:1,q:1,D:1,P:1,a:1});function Fp(e){this.aO=null,this.aO=e}b=Fp.prototype=new Cp,b.constructor=Fp,b.e=(function(){return this.aO.a.length}),b.bE=(function(e){}),b.k=(function(){var e=R();return e.s(this.aO,e.q)}),b.f=(function(e){return e instanceof Fp?this.aO.a.length===e.aO.a.length:X(this,e)}),b.d=(function(){return new Y(this.aO)}),b.a9=(function(){return this.aO}),b.h=(function(e){this.bE(e)}),b.b=(function(e){this.bE(e|0)}),new T().i(Fp,`scala.collection.immutable.ArraySeq$ofUnit`,{aZ:1,L:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,o:1,n:1,M:1,z:1,p:1,q:1,D:1,P:1,a:1});function Ip(e,t,n,r){for(var i=r,a=n;;)if(a===t)return!i.c()|0;else{if(!i.c()){var o=1+a|0,s=i.y();a=o,i=s;continue}return-1}}function Lp(e,t,n){for(var r=n,i=t;;)if(i===r)return!0;else{var a=i.c(),o=r.c();if(!(a||o)&&N().I(i.J(),r.J())){var s=i.y(),c=r.y();i=s,r=c;continue}return a&&o}}function Rp(){}b=Rp.prototype=new pp,b.constructor=Rp;function zp(){}zp.prototype=b,b.h=(function(e){return vd(this,e)}),b.cj=(function(e){return yd(this,e)}),b.ai=(function(){return`LinearSeq`}),b.d=(function(){return new xd(this)}),b.g4=(function(e){if(this.c())return e;if(e.c())return this;for(var t=new Q(e.J(),this),n=t,r=e.y();!r.c();){var i=new Q(r.J(),this);n.ae=i,n=i,r=r.y()}return t}),b.c=(function(){return this===$()}),b.fH=(function(e){if(e instanceof Rp)return this.g4(e);if(e.p()===0)return this;if(e instanceof rm&&this.c())return e.fP();var t=e.d();if(t.i()){for(var n=new Q(t.g(),this),r=n;t.i();){var i=new Q(t.g(),this);r.ae=i,r=i}return n}return this}),b.hy=(function(e){if(this===$())var t=$();else{for(var n=new Q(e.b(this.J()),$()),r=n,i=this.y();i!==$();){var a=new Q(e.b(i.J()),$());r.ae=a,r=a,i=i.y()}var t=n}return t}),b.U=(function(e){for(var t=this;!t.c();)e.b(t.J()),t=t.y()}),b.e=(function(){for(var e=this,t=0;!e.c();)t=1+t|0,e=e.y();return t}),b.a6=(function(e){return e<0?1:Ip(this,e,0,this)}),b.aF=(function(){return`List`}),b.f=(function(e){return e instanceof Rp?Lp(this,this,e):X(this,e)}),b.aT=(function(){return wd()}),b.cX=(function(e){return this.hy(e)}),b.gQ=(function(e){return Vf(this,e,this)}),b.b=(function(e){return vd(this,e|0)});function Bp(e){this.ax=null,this.ax=e}b=Bp.prototype=new Tp,b.constructor=Bp,b.e=(function(){return this.ax.a.length}),b.bF=(function(e){return this.ax.a[e]}),b.k=(function(){var e=R();return e.s(this.ax,e.q)}),b.f=(function(e){return e instanceof Bp?j().fp(this.ax,e.ax):wp.prototype.f.call(this,e)}),b.d=(function(){return new Y(this.ax)}),b.T=(function(){return this.ax}),b.h=(function(e){return this.bF(e)}),b.b=(function(e){return this.bF(e|0)}),new T().i(Bp,`scala.collection.mutable.ArraySeq$ofBoolean`,{b3:1,N:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,r:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function Vp(e){this.ay=null,this.ay=e}b=Vp.prototype=new Tp,b.constructor=Vp,b.e=(function(){return this.ay.a.length}),b.bx=(function(e){return this.ay.a[e]}),b.k=(function(){var e=R();return e.s(this.ay,e.q)}),b.f=(function(e){return e instanceof Vp?j().fk(this.ay,e.ay):wp.prototype.f.call(this,e)}),b.d=(function(){return new Y(this.ay)}),b.T=(function(){return this.ay}),b.h=(function(e){return this.bx(e)}),b.b=(function(e){return this.bx(e|0)}),new T().i(Vp,`scala.collection.mutable.ArraySeq$ofByte`,{b4:1,N:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,r:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function Hp(e){this.N=null,this.N=e}b=Hp.prototype=new Tp,b.constructor=Hp,b.e=(function(){return this.N.a.length}),b.by=(function(e){return this.N.a[e]}),b.k=(function(){var e=R();return e.s(this.N,e.q)}),b.f=(function(e){return e instanceof Hp?j().fl(this.N,e.N):wp.prototype.f.call(this,e)}),b.d=(function(){return new Y(this.N)}),b.ba=(function(e,t,n,r){var i=e.H;t.length!==0&&(i.m=``+i.m+t);var a=this.N.a.length;if(a!==0){if(n===``)i.gn(this.N);else{i.e();var o=this.N.a[0],s=``+er(o);i.m+=s;for(var c=1;c<a;){i.m=``+i.m+n;var l=this.N.a[c],u=``+er(l);i.m+=u,c=1+c|0}}}return r.length!==0&&(i.m=``+i.m+r),e}),b.T=(function(){return this.N}),b.h=(function(e){return ur(this.by(e))}),b.b=(function(e){return ur(this.by(e|0))}),new T().i(Hp,`scala.collection.mutable.ArraySeq$ofChar`,{b5:1,N:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,r:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function Up(e){this.O=null,this.O=e}b=Up.prototype=new Tp,b.constructor=Up,b.e=(function(){return this.O.a.length}),b.bz=(function(e){return this.O.a[e]}),b.k=(function(){var e=R();return e.s(this.O,e.q)}),b.f=(function(e){if(e instanceof Up){var t=e.O;if(this.O===t)return!0;if(this.O.a.length===t.a.length){for(var n=0;n<this.O.a.length&&this.O.a[n]===t.a[n];)n=1+n|0;return n>=this.O.a.length}return!1}return wp.prototype.f.call(this,e)}),b.d=(function(){return new Y(this.O)}),b.T=(function(){return this.O}),b.h=(function(e){return this.bz(e)}),b.b=(function(e){return this.bz(e|0)}),new T().i(Up,`scala.collection.mutable.ArraySeq$ofDouble`,{b6:1,N:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,r:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function Wp(e){this.P=null,this.P=e}b=Wp.prototype=new Tp,b.constructor=Wp,b.e=(function(){return this.P.a.length}),b.bA=(function(e){return this.P.a[e]}),b.k=(function(){var e=R();return e.s(this.P,e.q)}),b.f=(function(e){if(e instanceof Wp){var t=e.P;if(this.P===t)return!0;if(this.P.a.length===t.a.length){for(var n=0;n<this.P.a.length&&this.P.a[n]===t.a[n];)n=1+n|0;return n>=this.P.a.length}return!1}return wp.prototype.f.call(this,e)}),b.d=(function(){return new Y(this.P)}),b.T=(function(){return this.P}),b.h=(function(e){return this.bA(e)}),b.b=(function(e){return this.bA(e|0)}),new T().i(Wp,`scala.collection.mutable.ArraySeq$ofFloat`,{b7:1,N:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,r:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function Gp(e){this.az=null,this.az=e}b=Gp.prototype=new Tp,b.constructor=Gp,b.e=(function(){return this.az.a.length}),b.bB=(function(e){return this.az.a[e]}),b.k=(function(){var e=R();return e.s(this.az,e.q)}),b.f=(function(e){return e instanceof Gp?j().fm(this.az,e.az):wp.prototype.f.call(this,e)}),b.d=(function(){return new Y(this.az)}),b.T=(function(){return this.az}),b.h=(function(e){return this.bB(e)}),b.b=(function(e){return this.bB(e|0)}),new T().i(Gp,`scala.collection.mutable.ArraySeq$ofInt`,{b8:1,N:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,r:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function Kp(e){this.aA=null,this.aA=e}b=Kp.prototype=new Tp,b.constructor=Kp,b.e=(function(){return this.aA.a.length>>>1|0}),b.bC=(function(e){var t=this.aA.a,n=e<<1;return S(t[n],t[n+1|0])}),b.k=(function(){var e=R();return e.s(this.aA,e.q)}),b.f=(function(e){return e instanceof Kp?j().fn(this.aA,e.aA):wp.prototype.f.call(this,e)}),b.d=(function(){return new Y(this.aA)}),b.T=(function(){return this.aA}),b.h=(function(e){return this.bC(e)}),b.b=(function(e){return this.bC(e|0)}),new T().i(Kp,`scala.collection.mutable.ArraySeq$ofLong`,{b9:1,N:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,r:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function qp(e){this.aB=null,this.aB=e}b=qp.prototype=new Tp,b.constructor=qp,b.e=(function(){return this.aB.a.length}),b.h=(function(e){return this.aB.a[e]}),b.k=(function(){var e=R();return e.s(this.aB,e.q)}),b.f=(function(e){return e instanceof qp?jo().fq(this.aB,e.aB):wp.prototype.f.call(this,e)}),b.d=(function(){return new Y(this.aB)}),b.T=(function(){return this.aB}),b.b=(function(e){return this.h(e|0)}),new T().i(qp,`scala.collection.mutable.ArraySeq$ofRef`,{ba:1,N:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,r:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function Jp(e){this.aC=null,this.aC=e}b=Jp.prototype=new Tp,b.constructor=Jp,b.e=(function(){return this.aC.a.length}),b.bD=(function(e){return this.aC.a[e]}),b.k=(function(){var e=R();return e.s(this.aC,e.q)}),b.f=(function(e){return e instanceof Jp?j().fo(this.aC,e.aC):wp.prototype.f.call(this,e)}),b.d=(function(){return new Y(this.aC)}),b.T=(function(){return this.aC}),b.h=(function(e){return this.bD(e)}),b.b=(function(e){return this.bD(e|0)}),new T().i(Jp,`scala.collection.mutable.ArraySeq$ofShort`,{bb:1,N:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,r:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function Yp(e){this.aP=null,this.aP=e}b=Yp.prototype=new Tp,b.constructor=Yp,b.e=(function(){return this.aP.a.length}),b.bE=(function(e){}),b.k=(function(){var e=R();return e.s(this.aP,e.q)}),b.f=(function(e){return e instanceof Yp?this.aP.a.length===e.aP.a.length:wp.prototype.f.call(this,e)}),b.d=(function(){return new Y(this.aP)}),b.T=(function(){return this.aP}),b.h=(function(e){this.bE(e)}),b.b=(function(e){this.bE(e|0)}),new T().i(Yp,`scala.collection.mutable.ArraySeq$ofUnit`,{bc:1,N:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,r:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function Q(e,t){this.cK=null,this.ae=null,this.cK=e,this.ae=t}b=Q.prototype=new zp,b.constructor=Q,b.bL=(function(){return new od(this)}),b.aH=(function(){return 2}),b.aJ=(function(){return`::`}),b.aI=(function(e){if(e===0)return this.cK;if(e===1)return this.ae;throw Ku(new qu,e)}),b.J=(function(){return this.cK}),b.y=(function(){return this.ae}),new T().i(Q,`scala.collection.immutable.$colon$colon`,{e9:1,ae:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,aL:1,a5:1,b1:1,b0:1,p:1,q:1,aO:1,D:1,a:1,a6:1,Y:1});function Xp(){Zp=this,$(),$()}b=Xp.prototype=new zp,b.constructor=Xp,b.bL=(function(){return new od(this)}),b.aH=(function(){return 0}),b.aJ=(function(){return`Nil`}),b.aI=(function(e){throw Ku(new qu,e)}),b.hj=(function(){throw new ed(`head of empty list`)}),b.i5=(function(){throw new Qu(`tail of empty list`)}),b.p=(function(){return 0}),b.d=(function(){return Dl().F}),b.J=(function(){this.hj()}),b.y=(function(){this.i5()}),new T().i(Xp,`scala.collection.immutable.Nil$`,{ee:1,ae:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,aL:1,a5:1,b1:1,b0:1,p:1,q:1,aO:1,D:1,a:1,a6:1,Y:1});var Zp;function $(){return Zp||=new Xp,Zp}function Qp(e,t){return e.H=t,e}function $p(e){return Qp(e,new su),e}function em(){this.H=null}b=em.prototype=new yp,b.constructor=em,b.X=(function(e){return Cc(this,e)}),b.d=(function(){return pf(new hf,new dp(this))}),b.a6=(function(e){var t=this.H.e();return t===e?0:t<e?-1:1}),b.ai=(function(){return`IndexedSeq`}),b.e=(function(){return this.H.e()}),b.p=(function(){return this.H.e()}),b.gc=(function(e){var t=this.H,n=``+er(e);return t.m+=n,this}),b.o=(function(){return this.H.m}),b.c=(function(){return this.H.e()===0}),b.h=(function(e){return ur(this.H.fd(e))}),b.b=(function(e){var t=e|0;return ur(this.H.fd(t))}),b.S=(function(e){return this.gc(fr(e))}),b.a8=(function(){return this.H.m}),new T().i(em,`scala.collection.mutable.StringBuilder`,{et:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,r:1,u:1,x:1,w:1,R:1,S:1,V:1,a7:1,o:1,n:1,F:1,E:1,ad:1,a:1});function tm(e){var t=new rm().ck(e);e.Q=t.Q,e.ah=t.ah,e.c6=!1}function nm(e){e.c7=1+e.c7|0,e.c6&&tm(e)}function rm(){this.c7=0,this.Q=null,this.ah=null,this.c6=!1,this.R=0,this.c7=0,this.Q=$(),this.ah=null,this.c6=!1,this.R=0}b=rm.prototype=new xp,b.constructor=rm,b.d=(function(){return new Rd(this.Q.d(),new jl((()=>this.c7)))}),b.h=(function(e){return vd(this.Q,e)}),b.e=(function(){return this.R}),b.p=(function(){return this.R}),b.c=(function(){return this.R===0}),b.fP=(function(){return this.c6=!this.c(),this.Q}),b.gh=(function(e){nm(this);var t=new Q(e,$());if(this.R===0)this.Q=t;else{var n=this.ah;n===null&&hs().bb(),n.ae=t}return this.ah=t,this.R=1+this.R|0,this}),b.ck=(function(e){var t=e.d();if(t.i()){var n=1,r=new Q(t.g(),$());for(this.Q=r;t.i();){var i=new Q(t.g(),$());r.ae=i,r=i,n=1+n|0}this.R=n,this.ah=r}return this}),b.ga=(function(e){var t=e.d();if(t.i()){var n=new rm().ck(t);if(nm(this),this.R===0)this.Q=n.Q;else{var r=this.ah;r===null&&hs().bb(),r.ae=n.Q}this.ah=n.ah,this.R=this.R+n.R|0}return this}),b.ai=(function(){return`ListBuffer`}),b.aT=(function(){return Ld()}),b.b=(function(e){var t=e|0;return vd(this.Q,t)}),b.a8=(function(){return this.fP()}),b.S=(function(e){return this.gh(e)}),b.X=(function(e){return this.ga(e)}),new T().i(rm,`scala.collection.mutable.ListBuffer`,{bf:1,af:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,r:1,u:1,x:1,w:1,R:1,S:1,ah:1,ag:1,p:1,q:1,V:1,a7:1,a:1,a6:1});function im(e,t,n){return e.b8=0,e.ag=t,e.w=n,e}function am(e){return im(e,new w(16),0),e}function om(){this.b8=0,this.ag=null,this.w=0}b=om.prototype=new xp,b.constructor=om,b.d=(function(){return this.ia().d()}),b.a6=(function(e){var t=this.w;return t===e?0:t<e?-1:1}),b.p=(function(){return this.w}),b.fj=(function(e){this.ag=Dd().fJ(this.ag,this.w,e)}),b.h=(function(e){var t=1+e|0;if(e<0)throw es().fA(e,this.w-1|0);if(t>this.w)throw es().fA(t-1|0,this.w-1|0);return this.ag.a[e]}),b.e=(function(){return this.w}),b.ia=(function(){return new mp(this,new jl((()=>this.b8)))}),b.ge=(function(e){this.b8=1+this.b8|0;var t=1+this.w|0;return this.ag.a.length<=(t-1|0)&&this.fj(t),this.w=t,this.ag.a[t-1|0]=e,this}),b.fa=(function(e){if(e instanceof om){var t=e.w;t>0&&(this.b8=1+this.b8|0,this.fj(this.w+t|0),jo().cb(e.ag,0,this.ag,this.w,t),this.w=this.w+t|0)}else Cc(this,e);return this}),b.ai=(function(){return`ArrayBuffer`}),b.aG=(function(e,t,n){var r=this.w,i=vo().Z(e),a=n<r?n:r,o=t<0?i:i-t|0,s=o<a?o:a,c=s<0?0:s;return c>0&&jo().cb(this.ag,0,e,t,c),c}),b.b=(function(e){return this.h(e|0)}),b.aT=(function(){return Dd()}),b.S=(function(e){return this.ge(e)}),b.X=(function(e){return this.fa(e)}),new T().i(om,`scala.collection.mutable.ArrayBuffer`,{b2:1,af:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,r:1,u:1,x:1,w:1,R:1,S:1,ah:1,ag:1,o:1,n:1,F:1,E:1,be:1,p:1,q:1,a:1,a6:1});function sm(e,t){return e.aD=t,e}function cm(e){return sm(e,[]),e}function lm(){this.aD=null}b=lm.prototype=new xp,b.constructor=lm,b.ai=(function(){return`IndexedSeq`}),b.d=(function(){return pf(new hf,new dp(this))}),b.a6=(function(e){var t=this.aD.length|0;return t===e?0:t<e?-1:1}),b.h=(function(e){return this.aD[e]}),b.e=(function(){return this.aD.length|0}),b.p=(function(){return this.aD.length|0}),b.aF=(function(){return`WrappedArray`}),b.a8=(function(){return this}),b.S=(function(e){return this.aD.push(e),this}),b.b=(function(e){var t=e|0;return this.aD[t]}),b.aT=(function(){return Hd()}),new T().i(lm,`scala.scalajs.js.WrappedArray`,{eQ:1,af:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,r:1,u:1,x:1,w:1,R:1,S:1,ah:1,ag:1,q:1,p:1,E:1,o:1,n:1,F:1,be:1,V:1,a:1}),wa(new(cf.r()).C([]));