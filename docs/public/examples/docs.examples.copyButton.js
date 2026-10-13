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
const f=globalThis,p=f.ShadowRoot&&(f.ShadyCSS===void 0||f.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,m=Symbol(),h=/* @__PURE__ */ new WeakMap;var g=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==m)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(p&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=h.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&h.set(t,e))}return e}toString(){return this.cssText}};const _=e=>new g(typeof e==`string`?e:e+``,void 0,m),v=(e,...t)=>new g(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,m),y=(e,t)=>{if(p)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=f.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},b=p?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return _(t)})(e):e,{is:x,defineProperty:S,getOwnPropertyDescriptor:C,getOwnPropertyNames:w,getOwnPropertySymbols:T,getPrototypeOf:E}=Object,ee=globalThis,te=ee.trustedTypes,D=te?te.emptyScript:``,O=ee.reactiveElementPolyfillSupport,ne=(e,t)=>e,re={toAttribute(e,t){
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
switch(t){case Boolean:e=e?D:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},ie=(e,t)=>!x(e,t),ae={attribute:!0,type:String,converter:re,reflect:!1,useDefault:!1,hasChanged:ie};Symbol.metadata??=Symbol(`metadata`),ee.litPropertyMetadata??=/* @__PURE__ */ new WeakMap;var k=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ae){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&S(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=C(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ae}static _$Ei(){if(this.hasOwnProperty(ne(`elementProperties`)))return;let e=E(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ne(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ne(`properties`))){let e=this.properties,t=[...w(e),...T(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=/* @__PURE__ */ new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(b(e))}else e!==void 0&&t.push(b(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=/* @__PURE__ */ new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=/* @__PURE__ */ new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=/* @__PURE__ */ new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return y(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?re:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?re:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??ie)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=/* @__PURE__ */ new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=/* @__PURE__ */ new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=/* @__PURE__ */ new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};k.elementStyles=[],k.shadowRootOptions={mode:`open`},k[ne(`elementProperties`)]=/* @__PURE__ */ new Map,k[ne(`finalized`)]=/* @__PURE__ */ new Map,O?.({ReactiveElement:k}),(ee.reactiveElementVersions??=[]).push(`2.1.2`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const oe=globalThis,A=e=>e,se=oe.trustedTypes,ce=se?se.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,le=`$lit$`,ue=`lit$${Math.random().toFixed(9).slice(2)}$`,de=`?`+ue,fe=`<${de}>`,pe=document,me=()=>pe.createComment(``),he=e=>e===null||typeof e!=`object`&&typeof e!=`function`,ge=Array.isArray,_e=e=>ge(e)||typeof e?.[Symbol.iterator]==`function`,ve=`[ 	
\f\r]`,ye=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,be=/-->/g,xe=/>/g,Se=RegExp(`>|${ve}(?:([^\\s"'>=/]+)(${ve}*=${ve}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Ce=/'/g,we=/"/g,Te=/^(?:script|style|textarea|title)$/i,Ee=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),j=Symbol.for(`lit-noChange`),M=Symbol.for(`lit-nothing`),N=/* @__PURE__ */ new WeakMap,De=pe.createTreeWalker(pe,129);function Oe(e,t){if(!ge(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return ce===void 0?t:ce.createHTML(t)}const ke=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=ye;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===ye?c[1]===`!--`?o=be:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=Se):(Te.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=Se):o=xe:o===Se?c[0]===`>`?(o=i??ye,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?Se:c[3]===`"`?we:Ce):o===we||o===Ce?o=Se:o===be||o===xe?o=ye:(o=Se,i=void 0);let d=o===Se&&e[t+1].startsWith(`/>`)?` `:``;a+=o===ye?n+fe:l>=0?(r.push(s),n.slice(0,l)+le+n.slice(l)+ue+d):n+ue+(l===-2?t:d)}return[Oe(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]};var Ae=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=ke(t,n);if(this.el=e.createElement(l,r),De.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=De.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(le)){let t=u[o++],n=i.getAttribute(e).split(ue),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Fe:r[1]===`?`?Ie:r[1]===`@`?Le:Pe}),i.removeAttribute(e)}else e.startsWith(ue)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Te.test(i.tagName)){let e=i.textContent.split(ue),t=e.length-1;if(t>0){i.textContent=se?se.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],me()),De.nextNode(),c.push({type:2,index:++a});i.append(e[t],me())}}}else if(i.nodeType===8){if(i.data===de)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(ue,e+1))!==-1;)c.push({type:7,index:a}),e+=ue.length-1}}a++}}static createElement(e,t){let n=pe.createElement(`template`);return n.innerHTML=e,n}};function je(e,t,n=e,r){if(t===j)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=he(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=je(e,i._$AS(e,t.values),i,r)),t}var Me=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??pe).importNode(t,!0);De.currentNode=r;let i=De.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Ne(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Re(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=De.nextNode(),a++)}return De.currentNode=pe,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Ne=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=je(this,e,t),he(e)?e===M||e==null||e===``?(this._$AH!==M&&this._$AR(),this._$AH=M):e!==this._$AH&&e!==j&&this._(e):e._$litType$===void 0?e.nodeType===void 0?_e(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==M&&he(this._$AH)?this._$AA.nextSibling.data=e:this.T(pe.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Ae.createElement(Oe(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Me(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=N.get(e.strings);return t===void 0&&N.set(e.strings,t=new Ae(e)),t}k(t){ge(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(me()),this.O(me()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=A(e).nextSibling;A(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Pe=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=M,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(/* @__PURE__ */ new String),this.strings=n):this._$AH=M}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=je(this,e,t,0),a=!he(e)||e!==this._$AH&&e!==j,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=je(this,r[n+o],t,o),s===j&&(s=this._$AH[o]),a||=!he(s)||s!==this._$AH[o],s===M?e=M:e!==M&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Fe=class extends Pe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===M?void 0:e}},Ie=class extends Pe{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==M)}},Le=class extends Pe{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=je(this,e,t,0)??M)===j)return;let n=this._$AH,r=e===M&&n!==M||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==M&&(n===M||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Re=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){je(this,e)}};const ze={M:le,P:ue,A:de,C:1,L:ke,R:Me,D:_e,V:je,I:Ne,H:Pe,N:Ie,U:Le,B:Fe,F:Re},Be=oe.litHtmlPolyfillSupport;Be?.(Ae,Ne),(oe.litHtmlVersions??=[]).push(`3.3.3`);const Ve=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Ne(t.insertBefore(me(),e),e,void 0,n??{})}return i._$AI(e),i},He=globalThis
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
;var Ue=class extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ve(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return j}};Ue._$litElement$=!0,Ue.finalized=!0,He.litElementHydrateSupport?.({LitElement:Ue});const We=He.litElementPolyfillSupport;We?.({LitElement:Ue}),(He.litElementVersions??=[]).push(`4.2.2`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const Ge=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},Ke={attribute:!0,type:String,converter:re,reflect:!1,hasChanged:ie},qe=(e=Ke,t,n)=>{
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=/* @__PURE__ */ new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function P(e){return(t,n)=>typeof n==`object`?qe(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function F(e){return P({...e,state:!0,attribute:!1})}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const Je=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function Ye(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return Je(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return Je(n,r,{get(){return a(this)}})}}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Xe=v`
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
`,Ze=/;\s+$/;function Qe(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function $e(e){let{property:t,value:n,element:r}=e;if(n){let e=r.getAttribute(`style`)||``;e&&(e.match(Ze)||(e+=`;`),e+=` `);let i=`${t}: ${n}`;return e.includes(i)?void 0:`${e}${i};`}return null}var et,tt=class extends Ue{constructor(){super(),u(this,et,!1),this.initialReflectedProperties=/* @__PURE__ */ new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,t)=>{if(this.internals?.states)try{t?this.internals.states.add(e):this.internals.states.delete(e)}catch(e){if(String(e).includes(`must start with '--'`))console.error(`Your browser implements an outdated version of CustomStateSet. Consider using a polyfill`);else throw e}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error(`Element internals are not supported in your browser. Consider using a polyfill`)}this.customStates.set(`wa-defined`,!0);let e=this.constructor;for(let[t,n]of e.elementProperties)n.default===`inherit`&&n.initial!==void 0&&typeof t==`string`&&this.customStates.set(`initial-${t}-${n.initial}`,!0)}static get styles(){return[Xe,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `)),this.didSSR&&this.updateComplete.then(()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `))})}attributeChangedCallback(e,t,n){l(this,et)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),d(this,et,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll(`slot`).forEach(e=>{e.dispatchEvent(new Event(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(e){if(this.didSSR&&!this.hasUpdated){let t=new Event(`lit-hydration-error`,{bubbles:!0,composed:!0,cancelable:!1});t.error=e,this.dispatchEvent(t)}throw e}}setStyle(e,t){if(this.style)this.style[e]=t;else{let n=$e({property:Qe(e),value:t,element:this});n&&this.setAttribute(`style`,n)}}setStyleProperty(e,t){if(this.style)this.style.setProperty(e,t);else{let n=$e({property:e,value:t,element:this});n&&this.setAttribute(`style`,n)}}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};et=/* @__PURE__ */ new WeakMap,s([P()],tt.prototype,`dir`,2),s([P()],tt.prototype,`lang`,2),s([P({type:Boolean,reflect:!0,attribute:`did-ssr`})],tt.prototype,`didSSR`,2);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var nt=()=>({observedAttributes:[`custom-error`],checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=[`customError`]),t}}),rt=class extends tt{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=[`input`],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new r))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},`addEventListener`in this&&this.addEventListener(`invalid`,this.emitInvalid)}static get validators(){return[nt()]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let n of t.observedAttributes)e.add(n);return[...e]}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.updateValidity()}):this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener?.(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has(`customError`)&&(this.customError||=null,this.setCustomValidity(this.customError||``)),e.has(`value`)||e.has(`disabled`)||e.has(`defaultValue`)){let e=this.value;this.updateFormValue(e)}e.has(`disabled`)&&(this.customStates.set(`disabled`,this.disabled),(this.hasAttribute(`disabled`)||!this.matches(`:disabled`))&&this.toggleAttribute(`disabled`,this.disabled)),super.willUpdate(e),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>this.updateValidity()):this.updateValidity()}updateFormValue(e){if(Array.isArray(e)){if(this.name){let t=new FormData;for(let n of e)t.append(this.name,n);this.setValue(t,t)}}else this.setValue(e,e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(e){e?this.setAttribute(`form`,e):this.removeAttribute(`form`)}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],n=e[1],r=e[2];r||=this.validationTarget,this.internals.setValidity(t,n,r||void 0),this.requestUpdate(`validity`),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set(`required`,e),this.customStates.set(`optional`,!e),this.customStates.set(`invalid`,!t),this.customStates.set(`valid`,t),this.customStates.set(`user-invalid`,!t&&n),this.customStates.set(`user-valid`,t&&n)}setCustomValidity(e){e?(this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)):(this.customError=null,this.setValidity({}))}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity()}):(this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity())}setValue(...e){let[t,n]=e;this.internals.setFormValue(t,n)}get allValidators(){let e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(``),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute(`disabled`)||!this.willValidate){this.resetValidity();return}let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},n=this.validationTarget||this.input||void 0,r=``;for(let n of e){let{isValid:e,message:i,invalidKeys:a}=n.checkValidity(this);e||(r||=i,a?.length>=0&&a.forEach(e=>t[e]=!0))}r||=this.validationMessage,this.setValidity(t,r,n)}};rt.formAssociated=!0,s([P({reflect:!0})],rt.prototype,`name`,2),s([P({type:Boolean})],rt.prototype,`disabled`,2),s([P({state:!0,attribute:!1})],rt.prototype,`valueHasChanged`,2),s([P({state:!0,attribute:!1})],rt.prototype,`hasInteracted`,2),s([P({attribute:`custom-error`,reflect:!0})],rt.prototype,`customError`,2),s([P({attribute:!1,state:!0,type:Object})],rt.prototype,`validity`,1);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var it={small:`s`,medium:`m`,large:`l`},at=/* @__PURE__ */ new Set;function ot(e,t){t in it&&!at.has(`${e}:${t}`)&&(at.add(`${e}:${t}`),console.warn(`[${e}] size="${t}" is deprecated. Use size="${it[t]}" instead. The long-form value will be removed in the next major version.`))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var st=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return this.host.childNodes?[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===Node.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`wa-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1}):!1}hasNamedSlot(e){return this.host.querySelector?.(`:scope > [slot="${e}"]`)!==null}test(e,t){return t&&this.host.didSSR&&!this.host.hasUpdated?!!this.host[t]:e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){let e=this.host.shadowRoot;e&&`addEventListener`in e&&e.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){let e=this.host.shadowRoot;e&&`removeEventListener`in e&&e.removeEventListener(`slotchange`,this.handleSlotChange)}},ct=v`
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
`,lt=v`
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
`,ut=v`
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
function dt(e,t){let n={waitUntilFirstUpdate:!1,...t};return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}const ft=/* @__PURE__ */ new Set,pt=/* @__PURE__ */ new Map;let mt,ht=`ltr`,gt=`en`;const _t=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(_t){let e=new MutationObserver(yt);ht=document.documentElement.dir||`ltr`,gt=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function vt(...e){e.map(e=>{let t=e.$code.toLowerCase();pt.has(t)?pt.set(t,Object.assign(Object.assign({},pt.get(t)),e)):pt.set(t,e),mt||=e}),yt()}function yt(){_t&&(ht=document.documentElement.dir||`ltr`,gt=document.documentElement.lang||navigator.language),[...ft.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var bt=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){ft.add(this.host)}hostDisconnected(){ft.delete(this.host)}dir(){return`${this.host.dir||ht}`.toLowerCase()}lang(){let e=`${this.host.lang||gt}`.toLowerCase().replace(/_/g,`-`);try{return new Intl.Locale(e),e}catch{return mt?mt.$code.toLowerCase():`en`}}getTranslationData(e){let t;try{t=new Intl.Locale(e.replace(/_/g,`-`))}catch{return{locale:void 0,language:``,region:``,primary:void 0,secondary:void 0}}let n=t.language.toLowerCase(),r=t.region?.toLowerCase()??``,i=pt.get(`${n}-${r}`),a=pt.get(n);return{locale:t,language:n,region:r,primary:i,secondary:a}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&mt&&mt[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(mt&&mt[e])i=mt[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},xt={$code:`en`,$name:`English`,$dir:`ltr`,allTagsRemoved:`All tags removed`,am:`AM`,autosizeColumn:`Autosize column`,captions:`Captions`,carousel:`Carousel`,chooseDate:`Choose date`,chooseDecade:`Choose decade`,chooseMonth:`Choose month`,chooseTime:`Choose time`,chooseYear:`Choose year`,clearEntry:`Clear entry`,clearFilter:`Clear filter`,clearSort:`Clear sort`,close:`Close`,closeCalendar:`Close calendar`,closeTimeInput:`Close time picker`,collapseRow:`Collapse row`,columnMenu:`Column options`,columnMovedToPosition:(e,t,n)=>`${e} moved to position ${t} of ${n}`,columns:`Columns`,compactPageXOfY:(e,t)=>`${e} of ${t}`,completed:`Completed`,copied:`Copied`,copy:`Copy`,createOption:e=>`Create "${e}"`,currentlyPlaying:`currently playing`,currentValue:`Current value`,date:`Date`,datePickerKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the calendar.`,day:`Day`,dayPeriod:`AM/PM`,decrement:`Decrement`,deselectAllRows:`Deselect all rows`,disabled:`Disabled`,dropFileHere:`Drop file here or click to browse`,dropFilesHere:`Drop files here or click to browse`,empty:`Empty`,endDate:`End date`,enterFullscreen:`Enter fullscreen`,error:`Error`,exitFullscreen:`Exit fullscreen`,expandRow:`Expand row`,filterByColumn:e=>`Filter by ${e}`,filterFrom:`From`,filterMax:`Max`,filterMin:`Min`,filterTo:`To`,firstPage:`First page`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hideColumn:`Hide column`,hidePassword:`Hide password`,hour:`Hour`,incompleteDate:`Enter a valid date.`,increment:`Increment`,jumpBackwardX:e=>`Jump back ${e} pages`,jumpForwardX:e=>`Jump forward ${e} pages`,lastPage:`Last page`,loading:`Loading`,locked:`Locked`,minute:`Minute`,month:`Month`,moreOptions:`More Options`,mute:`Mute`,nextDecade:`Next decade`,nextMonth:`Next month`,nextPage:`Next page`,nextSlide:`Next slide`,nextVideo:`Next Video`,nextYear:`Next year`,noData:`No data`,noOptions:`No options`,noResults:`No matching results`,notCompleted:`Not completed`,now:`Now`,numCharacters:e=>e===1?`1 character`:`${e} characters`,numCharactersRemaining:e=>e===1?`1 character remaining`:`${e} characters remaining`,numOptionsAvailable:e=>e===0?`No options available`:e===1?`1 option available`:`${e} options available`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,numRowsCopied:e=>e===1?`1 row copied`:`${e} rows copied`,numRowsSelected:e=>e===1?`1 row selected`:`${e} rows selected`,optionPosition:(e,t,n)=>`${e}, ${t} of ${n}`,optionsLoadError:`Options could not be loaded`,pageXOfY:(e,t)=>`Page ${e} of ${t}`,pagination:`Pagination`,pause:`Pause`,pauseAnimation:`Pause animation`,pictureInPicture:`Picture in picture`,pinLeft:`Pin left`,pinRight:`Pin right`,play:`Play`,playAnimation:`Play animation`,playbackSpeed:`Playback speed`,playlist:`Playlist`,pm:`PM`,previousDecade:`Previous decade`,previousMonth:`Previous month`,previousPage:`Previous page`,previousSlide:`Previous slide`,previousVideo:`Previous video`,previousYear:`Previous year`,progress:`Progress`,rangeTooLong:e=>e===1?`Select a range no longer than 1 day`:`Select a range no longer than ${e} days`,rangeTooShort:e=>e===1?`Select a range at least 1 day long`:`Select a range at least ${e} days long`,readonly:`Read-only`,remove:`Remove`,resetColumns:`Reset columns`,resize:`Resize`,resizeColumn:`Resize column`,rowsPerPage:`Rows per page`,scrollableRegion:`Scrollable region`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,search:`Search`,second:`Second`,seek:`Seek`,seekProgress:(e,t)=>`${e} of ${t}`,selectAColorFromTheScreen:`Select a color from the screen`,selectAllRows:`Select all rows`,selected:`Selected`,selectedDateLabel:e=>`Selected: ${e}`,selectedRangeLabel:e=>`Selected range: ${e}`,selectGroup:`Select group`,selectionCleared:`Selection cleared`,selectRow:`Select row`,showingNofMRows:(e,t)=>`Showing ${e} of ${t} rows`,showingXtoYofZ:(e,t,n)=>`${e}\u2013${t} of ${n}`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,sortAscending:`Sort ascending`,sortColumn:`Sort column`,sortDescending:`Sort descending`,startDate:`Start date`,steps:`Steps`,stepXOfY:(e,t)=>`Step ${e} of ${t}`,tagAdded:e=>`${e} added`,tagAlreadyAdded:e=>`${e} is already added`,tagInputKeyboardHelp:`Press Backspace or Delete to remove this tag.`,tagRemoved:e=>`${e} removed`,time:`Time`,timeInputKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the time picker.`,today:`Today`,toggleColorFormat:`Toggle color format`,tooFewTags:e=>e===1?`Add at least 1 tag`:`Add at least ${e} tags`,tooManyTags:e=>e===1?`Add no more than 1 tag`:`Add no more than ${e} tags`,unmute:`Unmute`,unpin:`Unpin`,unpinColumn:`Unpin column`,videoPlayer:`Video player`,volume:`Volume`,year:`Year`,zoomIn:`Zoom in`,zoomOut:`Zoom out`}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;vt(xt);var St=xt,Ct=class extends bt{lang(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||`en`:super.lang()}};vt(St);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const wt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Tt=e=>(...t)=>({_$litDirective$:e,values:t});var Et=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Dt=Tt(class extends Et{constructor(e){if(super(e),e.type!==wt.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=/* @__PURE__ */ new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return j}}),Ot=e=>e??M,kt=Symbol.for(``),At=e=>{
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
if(e?.r===kt)return e?._$litStatic$},jt=(e,...t)=>({_$litStatic$:t.reduce((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1],e[0]),r:kt}),Mt=/* @__PURE__ */ new Map,Nt=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],(i=At(a))!==void 0);)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=Mt.get(e))===void 0&&(o.raw=o,Mt.set(e,t=o)),n=s}return e(t,...n)})(Ee);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var I=class extends rt{constructor(){super(...arguments),this.assumeInteractionOn=[`click`],this.hasSlotController=new st(this,`[default]`,`start`,`end`),this.localize=new Ct(this),this.invalid=!1,this.isIconButton=!1,this.title=``,this.variant=`neutral`,this.appearance=`accent`,this.size=`m`,this.withCaret=!1,this.withStart=!1,this.withEnd=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type=`button`}static get validators(){return[...super.validators,n()]}handleSizeChange(){ot(this.localName,this.size)}constructLightDOMButton(){let e=document.createElement(`button`);for(let t of this.attributes)t.name!==`style`&&e.setAttribute(t.name,t.value);return e.type=this.type,e.style.position=`absolute !important`,e.style.width=`0 !important`,e.style.height=`0 !important`,e.style.clipPath=`inset(50%) !important`,e.style.overflow=`hidden !important`,e.style.whiteSpace=`nowrap !important`,this.name&&(e.name=this.name),e.value=this.value||``,e}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopImmediatePropagation();return}if(this.type!==`submit`&&this.type!==`reset`||!this.getForm())return;let t=this.constructLightDOMButton();this.parentElement?.append(t),t.click(),t.remove()}handleInvalid(){this.dispatchEvent(new r)}handleLabelSlotChange(){let e=this.labelSlot.assignedNodes({flatten:!0}),t=!1,n=!1,r=!1,i=!1;[...e].forEach(e=>{if(e.nodeType===Node.ELEMENT_NODE){let r=e;r.localName===`wa-icon`?(n=!0,t||=r.label!==void 0):i=!0}else e.nodeType===Node.TEXT_NODE&&(e.textContent?.trim()||``).length>0&&(r=!0)}),this.isIconButton=n&&!r&&!i,this.customStates.set(`icon-button`,this.isIconButton),this.isIconButton&&!t&&console.warn(`Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.`,this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.customStates.set(`disabled`,this.disabled),this.updateValidity()}handleHrefChange(){this.customStates.set(`link`,this.isLink())}handleLoadingChange(){this.customStates.set(`loading`,this.loading)}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=this.isLink(),t=e?jt`a`:jt`button`;return Nt`
      <${t}
        part="base button"
        class=${Dt({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()===`rtl`,"has-label":this.hasSlotController.test(`[default]`),"has-start":this.hasSlotController.test(`start`,`withStart`),"has-end":this.hasSlotController.test(`end`,`withEnd`),"is-icon-button":this.isIconButton})}
        ?disabled=${Ot(e?void 0:this.disabled)}
        type=${Ot(e?void 0:this.type)}
        title=${this.title}
        name=${Ot(e?void 0:this.name)}
        value=${Ot(e?void 0:this.value)}
        href=${Ot(e?this.href:void 0)}
        target=${Ot(e?this.target:void 0)}
        download=${Ot(e?this.download:void 0)}
        rel=${Ot(e&&this.rel?this.rel:void 0)}
        role=${Ot(e?void 0:`button`)}
        aria-disabled=${Ot(e&&this.disabled?`true`:void 0)}
        aria-busy=${this.loading?`true`:`false`}
        tabindex=${this.disabled?`-1`:`0`}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?Nt`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:``}
        ${this.loading?Nt`<wa-spinner part="spinner"></wa-spinner>`:``}
      </${t}>
    `}};I.shadowRootOptions={...rt.shadowRootOptions,delegatesFocus:!0},I.css=[lt,ut,ct],s([Ye(`.button`)],I.prototype,`button`,2),s([Ye(`slot:not([name])`)],I.prototype,`labelSlot`,2),s([F()],I.prototype,`invalid`,2),s([F()],I.prototype,`isIconButton`,2),s([P()],I.prototype,`title`,2),s([P({reflect:!0})],I.prototype,`variant`,2),s([P({reflect:!0})],I.prototype,`appearance`,2),s([P({reflect:!0})],I.prototype,`size`,2),s([dt(`size`)],I.prototype,`handleSizeChange`,1),s([P({attribute:`with-caret`,type:Boolean,reflect:!0})],I.prototype,`withCaret`,2),s([P({attribute:`with-start`,type:Boolean})],I.prototype,`withStart`,2),s([P({attribute:`with-end`,type:Boolean})],I.prototype,`withEnd`,2),s([P({type:Boolean})],I.prototype,`disabled`,2),s([P({type:Boolean,reflect:!0})],I.prototype,`loading`,2),s([P({type:Boolean,reflect:!0})],I.prototype,`pill`,2),s([P()],I.prototype,`type`,2),s([P({reflect:!0})],I.prototype,`name`,2),s([P({reflect:!0})],I.prototype,`value`,2),s([P({reflect:!0})],I.prototype,`href`,2),s([P()],I.prototype,`target`,2),s([P()],I.prototype,`rel`,2),s([P()],I.prototype,`download`,2),s([P({attribute:`formaction`})],I.prototype,`formAction`,2),s([P({attribute:`formenctype`})],I.prototype,`formEnctype`,2),s([P({attribute:`formmethod`})],I.prototype,`formMethod`,2),s([P({attribute:`formnovalidate`,type:Boolean})],I.prototype,`formNoValidate`,2),s([P({attribute:`formtarget`})],I.prototype,`formTarget`,2),s([dt(`disabled`,{waitUntilFirstUpdate:!0})],I.prototype,`handleDisabledChange`,1),s([dt(`href`)],I.prototype,`handleHrefChange`,1),s([dt(`loading`,{waitUntilFirstUpdate:!0})],I.prototype,`handleLoadingChange`,1),I=s([Ge(`wa-button`)],I),I.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Pt=v`
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
`,Ft=class extends tt{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(...arguments),this.localize=new Ct(this)}render(){return Ee`
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
    `}};Ft.css=Pt,Ft=s([Ge(`wa-spinner`)],Ft);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var It=class extends Event{constructor(){super(`wa-error`,{bubbles:!0,cancelable:!1,composed:!0})}},Lt=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-load`,{bubbles:!0,cancelable:!1,composed:!0})}},Rt=v`
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
`,zt=``,Bt=``
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;function Vt(){return zt.replace(/\/$/,``)}function Ht(e){Bt=e}function Ut(){if(!Bt){let e=document.querySelector(`[data-fa-kit-code]`);e&&Ht(e.getAttribute(`data-fa-kit-code`)||``)}return Bt}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Wt=`7.3.0`;function Gt(e,t,n){let r=`solid`;return t===`chisel`&&(r=`chisel-regular`),t===`etch`&&(r=`etch-solid`),t===`graphite`&&(r=`graphite-thin`),t===`jelly`&&(r=`jelly-regular`,n===`duo-regular`&&(r=`jelly-duo-regular`),n===`fill-regular`&&(r=`jelly-fill-regular`)),t===`jelly-duo`&&(r=`jelly-duo-regular`),t===`jelly-fill`&&(r=`jelly-fill-regular`),t===`notdog`&&(n===`solid`&&(r=`notdog-solid`),n===`duo-solid`&&(r=`notdog-duo-solid`)),t===`notdog-duo`&&(r=`notdog-duo-solid`),t===`slab`&&((n===`solid`||n===`regular`)&&(r=`slab-regular`),n===`press-regular`&&(r=`slab-press-regular`)),t===`slab-press`&&(r=`slab-press-regular`),t===`slab-duo`&&(r=`slab-duo-regular`),t===`slab-press-duo`&&(r=`slab-press-duo-regular`),t===`thumbprint`&&(r=`thumbprint-light`),t===`utility`&&(r=`utility-semibold`),t===`utility-duo`&&(r=`utility-duo-semibold`),t===`utility-fill`&&(r=`utility-fill-semibold`),t===`whiteboard`&&(r=`whiteboard-semibold`),t===`mosaic`&&(r=`mosaic-solid`),t===`pixel`&&(r=`pixel-regular`),t===`vellum`&&(r=`vellum-solid`),t===`classic`&&(n===`thin`&&(r=`thin`),n===`light`&&(r=`light`),n===`regular`&&(r=`regular`),n===`solid`&&(r=`solid`)),t===`duotone`&&(n===`thin`&&(r=`duotone-thin`),n===`light`&&(r=`duotone-light`),n===`regular`&&(r=`duotone-regular`),n===`solid`&&(r=`duotone`)),t===`sharp`&&(n===`thin`&&(r=`sharp-thin`),n===`light`&&(r=`sharp-light`),n===`regular`&&(r=`sharp-regular`),n===`solid`&&(r=`sharp-solid`)),t===`sharp-duotone`&&(n===`thin`&&(r=`sharp-duotone-thin`),n===`light`&&(r=`sharp-duotone-light`),n===`regular`&&(r=`sharp-duotone-regular`),n===`solid`&&(r=`sharp-duotone-solid`)),t===`brands`&&(r=`brands`),r}function Kt(e,t,n){let r=Gt(e,t,n),i=Vt();if(i)return`${i}/${r}/${e}.svg`;let a=Ut();return a.length>0?`https://ka-p.fontawesome.com/releases/v${Wt}/svgs/${r}/${e}.svg?token=${encodeURIComponent(a)}`:`https://ka-f.fontawesome.com/releases/v${Wt}/svgs/${r}/${e}.svg`}var qt={name:`default`,resolver:(e,t=`classic`,n=`solid`)=>Kt(e,t,n),mutator:(e,t)=>{if(e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`),t?.family&&!e.hasAttribute(`data-duotone-initialized`)){let{family:n,variant:r}=t;if(n===`duotone`||n===`sharp-duotone`||n===`notdog-duo`||n===`notdog`&&r===`duo-solid`||n===`jelly-duo`||n===`jelly`&&r===`duo-regular`||n===`utility-duo`||n===`slab-duo`||n===`slab-press-duo`||n===`thumbprint`){let n=[...e.querySelectorAll(`path`)],r=n.find(e=>!e.hasAttribute(`opacity`)),i=n.find(e=>e.hasAttribute(`opacity`));if(!r||!i)return;if(r.setAttribute(`data-duotone-primary`,``),i.setAttribute(`data-duotone-secondary`,``),t.swapOpacity&&r&&i){let e=i.getAttribute(`opacity`)||`0.4`;r.style.setProperty(`--path-opacity`,e),i.style.setProperty(`--path-opacity`,`1`)}e.setAttribute(`data-duotone-initialized`,``)}}}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Jt(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var Yt={solid:{"arrow-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`,"arrow-up":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>`,backward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M236.3 107.1C247.9 96 265 92.9 279.7 99.2C294.4 105.5 304 120 304 136L304 272.3L476.3 107.2C487.9 96 505 92.9 519.7 99.2C534.4 105.5 544 120 544 136L544 504C544 520 534.4 534.5 519.7 540.8C505 547.1 487.9 544 476.3 532.9L304 367.7L304 504C304 520 294.4 534.5 279.7 540.8C265 547.1 247.9 544 236.3 532.9L44.3 348.9C36.5 341.3 32 330.9 32 320C32 309.1 36.5 298.7 44.3 291.1L236.3 107.1z"/></svg>`,"backward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M491 100.8C478.1 93.8 462.3 94.5 450 102.6L192 272.1L192 128C192 110.3 177.7 96 160 96C142.3 96 128 110.3 128 128L128 512C128 529.7 142.3 544 160 544C177.7 544 192 529.7 192 512L192 367.9L450 537.5C462.3 545.6 478 546.3 491 539.3C504 532.3 512 518.8 512 504.1L512 136.1C512 121.4 503.9 107.9 491 100.9z"/></svg>`,bars:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>`,"angles-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M77.3 256 214.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256zm192 0L406.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L269.3 256z"/></svg>`,"angles-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.7 256 297.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 256zm-192 0L105.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256z"/></svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>`,"chevron-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`,"chevron-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>`,"chevron-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>`,circle:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>`,"closed-captioning":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M64 192C64 156.7 92.7 128 128 128L512 128C547.3 128 576 156.7 576 192L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 192zM216 272L248 272C252.4 272 256 275.6 256 280C256 293.3 266.7 304 280 304C293.3 304 304 293.3 304 280C304 249.1 278.9 224 248 224L216 224C185.1 224 160 249.1 160 280L160 360C160 390.9 185.1 416 216 416L248 416C278.9 416 304 390.9 304 360C304 346.7 293.3 336 280 336C266.7 336 256 346.7 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 280C208 275.6 211.6 272 216 272zM384 280C384 275.6 387.6 272 392 272L424 272C428.4 272 432 275.6 432 280C432 293.3 442.7 304 456 304C469.3 304 480 293.3 480 280C480 249.1 454.9 224 424 224L392 224C361.1 224 336 249.1 336 280L336 360C336 390.9 361.1 416 392 416L424 416C454.9 416 480 390.9 480 360C480 346.7 469.3 336 456 336C442.7 336 432 346.7 432 360C432 364.4 428.4 368 424 368L392 368C387.6 368 384 364.4 384 360L384 280z"/></svg>`,"closed-captioning-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M39 39.1C48.4 29.7 63.6 29.7 72.9 39.1L161.8 128L512 128C547.3 128 576 156.7 576 192L576 448C576 473.5 561.1 495.4 539.6 505.8L601 567.1C610.4 576.5 610.4 591.7 601 601C591.6 610.3 576.4 610.4 567.1 601L39 73.1C29.7 63.7 29.7 48.5 39 39.1zM384 350.1L384 279.9C384 275.5 387.6 271.9 392 271.9L424 271.9C428.4 271.9 432 275.5 432 279.9C432 293.2 442.7 303.9 456 303.9C469.3 303.9 480 293.2 480 279.9C480 249 454.9 223.9 424 223.9L392 223.9C361.1 223.9 336 249 336 279.9L336 302.1L384 350.1zM445.5 411.6C465.7 403.2 480 383.2 480 359.9C480 346.6 469.3 335.9 456 335.9C442.7 335.9 432 346.6 432 359.9C432 364.3 428.4 367.9 424 367.9L401.8 367.9L445.5 411.6zM162.3 264.1C160.8 269.1 160 274.5 160 280L160 360C160 390.9 185.1 416 216 416L248 416C266.1 416 282.1 407.5 292.4 394.2L410.2 512L128 512C92.7 512 64 483.3 64 448L64 192C64 184.2 65.4 176.7 68 169.8L162.3 264.1zM256.1 357.9C256 358.6 256 359.3 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 309.8L256.1 357.9z"/></svg>`,compress:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>`,ellipsis:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M96 320C96 289.1 121.1 264 152 264C182.9 264 208 289.1 208 320C208 350.9 182.9 376 152 376C121.1 376 96 350.9 96 320zM264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320zM488 264C518.9 264 544 289.1 544 320C544 350.9 518.9 376 488 376C457.1 376 432 350.9 432 320C432 289.1 457.1 264 488 264z"/></svg>`,"ellipsis-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/></svg>`,expand:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 96C110.3 96 96 110.3 96 128L96 224C96 241.7 110.3 256 128 256C145.7 256 160 241.7 160 224L160 160L224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L128 96zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 512C96 529.7 110.3 544 128 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480L160 416zM416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160L480 224C480 241.7 494.3 256 512 256C529.7 256 544 241.7 544 224L544 128C544 110.3 529.7 96 512 96L416 96zM544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L512 544C529.7 544 544 529.7 544 512L544 416z"/></svg>`,eyedropper:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>`,filter:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 64C19.1 64 7.4 71.8 2.4 83.8S.2 109.5 9.4 118.6L192 301.3 192 416c0 8.5 3.4 16.6 9.4 22.6l64 64c9.2 9.2 22.9 11.9 34.9 6.9S320 492.9 320 480l0-178.7 182.6-182.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 64 480 64L32 64z"/></svg>`,forward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M403.7 107.1C392.1 96 375 92.9 360.3 99.2C345.6 105.5 336 120 336 136L336 272.3L163.7 107.2C152.1 96 135 92.9 120.3 99.2C105.6 105.5 96 120 96 136L96 504C96 520 105.6 534.5 120.3 540.8C135 547.1 152.1 544 163.7 532.9L336 367.7L336 504C336 520 345.6 534.5 360.3 540.8C375 547.1 392.1 544 403.7 532.9L595.7 348.9C603.6 341.4 608 330.9 608 320C608 309.1 603.5 298.7 595.7 291.1L403.7 107.1z"/></svg>`,file:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>`,"file-audio":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>`,"file-code":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>`,"file-excel":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>`,"file-image":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>`,"file-pdf":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>`,"file-powerpoint":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>`,"file-video":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>`,"file-word":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>`,"file-zipper":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>`,"forward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M21 36.8c12.9-7 28.7-6.3 41 1.8L320 208.1 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-144.1-258 169.6c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440L0 72C0 57.3 8.1 43.8 21 36.8z"/></svg>`,gauge:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,gear:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>`,"grip-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>`,indeterminate:`<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>`,"magnifying-glass":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>`,minus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>`,pause:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>`,"picture-in-picture":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M448 32c35.3 0 64 28.7 64 64l0 112-64 0 0-112-384 0 0 320 144 0 0 64-144 0-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416 0 96C0 62.9 25.2 35.6 57.5 32.3L64 32 448 32zm16 224c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48l160 0z"/></svg>`,play:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>`,"play-circle":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>`,plus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>`,"table-columns":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 64l0 256 128 0 0-256-128 0zm320 0l-128 0 0 256 128 0 0-256z"/></svg>`,thumbtack:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 10.3 134.1c37.1 21.2 65.8 56.4 78.2 99.7l3.8 13.4c2.8 9.7 .8 20-5.2 28.1S362 352 352 352L32 352c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1L5 297.8c12.4-43.3 41-78.5 78.2-99.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 400l64 0 0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-112z"/></svg>`,"up-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M406.6 502.6l96-96c9.2-9.2 11.9-22.9 6.9-34.9S492.9 352 480 352l-64 0 0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 320-64 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l96 96c12.5 12.5 32.8 12.5 45.3 0zM150.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-9.2 9.2-11.9 22.9-6.9 34.9S19.1 160 32 160l64 0 0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320 64 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-96-96z"/></svg>`,upload:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>`,user:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>`,volume:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM441.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C443.3 170.7 464 210.9 464 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-low":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,xmark:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>`},regular:{calendar:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z"/></svg>`,"circle-question":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`,"circle-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,clock:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>`,copy:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>`,eye:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>`,"eye-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>`}},Xt={name:`system`,resolver:(e,t=`classic`,n=`solid`)=>{let r=Yt[n][e]??Yt.regular[e]??Yt.regular[`circle-question`];return r?Jt(r):``},mutator:e=>{e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`)}},Zt=`classic`,Qt=[qt,Xt],$t=/* @__PURE__ */ new Set
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;function en(e){$t.add(e)}function tn(e){$t.delete(e)}function nn(e){return Qt.find(t=>t.name===e)}function rn(){return Zt}
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const{I:an}=ze,on=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,sn=e=>e.strings===void 0,cn={},ln=(e,t=cn)=>e._$AH=t;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var un=Symbol(),dn=Symbol(),fn,pn=/* @__PURE__ */ new Map,mn=class extends tt{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label=``,this.library=`default`,this.rotate=0,this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=Ee`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let n=this.shadowRoot.querySelector(`[part='svg']`);return typeof t.mutator==`function`&&t.mutator(n,this),this.svg}try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?un:dn}catch{return dn}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return un;fn||=new DOMParser;let r=fn.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):un}catch{return un}}}connectedCallback(){super.connectedCallback(),en(this)}firstUpdated(e){super.firstUpdated(e),this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),tn(this)}async getIconSource(){let e=nn(this.library),t=this.family||rn();if(this.name&&e){let n=this.canvas===`auto`||this.autoWidth,r;try{r=await e.resolver(this.name,t,this.variant,n)}catch{r=void 0}return{url:r,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=await this.getIconSource(),n=t?nn(this.library):void 0;if(!e){this.svg=null;return}let r=pn.get(e);r||(r=this.resolveIcon(e,n),pn.set(e,r));let i=await r;if(i===dn&&pn.delete(e),e===(await this.getIconSource()).url){if(on(i))this.svg=i;else switch(i){case dn:case un:this.svg=null,this.dispatchEvent(new It);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new Lt)}}}willUpdate(e){return this.style||this.setStyleProperty(`--rotate-angle`,`${this.rotate}deg`),super.willUpdate(e)}updated(e){super.updated(e);let t=nn(this.library);this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`);let n=this.shadowRoot?.querySelector(`svg`);n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:Ee`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};mn.css=Rt,s([F()],mn.prototype,`svg`,2),s([P({reflect:!0})],mn.prototype,`name`,2),s([P({reflect:!0})],mn.prototype,`family`,2),s([P({reflect:!0})],mn.prototype,`variant`,2),s([P({reflect:!0})],mn.prototype,`canvas`,2),s([P({attribute:`auto-width`,type:Boolean,reflect:!0})],mn.prototype,`autoWidth`,2),s([P({attribute:`swap-opacity`,type:Boolean,reflect:!0})],mn.prototype,`swapOpacity`,2),s([P()],mn.prototype,`src`,2),s([P()],mn.prototype,`label`,2),s([P({reflect:!0})],mn.prototype,`library`,2),s([P({type:Number,reflect:!0})],mn.prototype,`rotate`,2),s([P({type:String,reflect:!0})],mn.prototype,`flip`,2),s([P({type:String,reflect:!0})],mn.prototype,`animation`,2),s([dt(`label`)],mn.prototype,`handleLabelChange`,1),s([dt([`family`,`name`,`library`,`variant`,`src`,`autoWidth`,`canvas`,`swapOpacity`],{waitUntilFirstUpdate:!0})],mn.prototype,`setIcon`,1),mn=s([Ge(`wa-icon`)],mn);var hn=/* @__PURE__ */ t({default:()=>I}),gn=class extends Event{constructor(e){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-copy`,{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}},_n=null,vn=null,yn=7e3
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;function bn(e){let t=document.createElement(`div`);return t.setAttribute(`role`,`log`),t.setAttribute(`aria-live`,e),t.setAttribute(`aria-relevant`,`additions`),Object.assign(t.style,{position:`absolute`,width:`1px`,height:`1px`,margin:`-1px`,padding:`0`,border:`0`,overflow:`hidden`,clip:`rect(0 0 0 0)`,clipPath:`inset(50%)`,whiteSpace:`nowrap`}),t}function xn(e){return e===`assertive`?(vn??=document.body.appendChild(bn(`assertive`)),vn):(_n??=document.body.appendChild(bn(`polite`)),_n)}function Sn(e,t=`polite`){if(!e)return;let n=xn(t),r=document.createElement(`div`);r.textContent=e,n.appendChild(r),setTimeout(()=>r.remove(),yn)}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Cn=v`
  :host {
    display: inline-block;
    color: var(--wa-color-neutral-on-quiet);
  }

  .copy-button__trigger {
    position: relative;
  }

  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    border-radius: var(--wa-form-control-border-radius);
    color: inherit;
    font-size: inherit;
    height: calc(var(--wa-form-control-height) * 0.8);
    aspect-ratio: 1;
    cursor: pointer;
    transition-property: background-color, color;
    transition-duration: var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
  }

  @media (hover: hover) {
    .button:hover:not([disabled]) {
      background-color: var(--wa-color-neutral-fill-quiet);
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
    }
  }

  .button:focus-visible:not([disabled]) {
    background-color: var(--wa-color-neutral-fill-quiet);
    color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
  }

  .button:active:not([disabled]) {
    color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
  }

  .button:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  .button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }

  /* Icon swap animation */
  .show {
    animation: copy-button-icon-show var(--wa-transition-fast) var(--wa-transition-easing);
  }

  .hide {
    animation: copy-button-icon-show var(--wa-transition-fast) var(--wa-transition-easing) reverse;
  }

  @keyframes copy-button-icon-show {
    from {
      scale: 0.25;
      opacity: 0.25;
    }
    to {
      scale: 1;
      opacity: 1;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .show,
    .hide {
      animation-duration: 1ms;
    }
  }
`,wn=v`
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
`
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;let Tn=(e=21)=>{let t=``,n=crypto.getRandomValues(new Uint8Array(e|=0));for(;e--;)t+=`useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict`[n[e]&63];return t};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function En(e=``){return`${e}${Tn()}`}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Dn(e,t){return new Promise(n=>{let r=new AbortController,{signal:i}=r;if(e.classList.contains(t))return;e.classList.add(t);let a=!1,o=()=>{a||(a=!0,e.classList.remove(t),n(),r.abort())};e.addEventListener(`animationend`,o,{once:!0,signal:i}),e.addEventListener(`animationcancel`,o,{once:!0,signal:i}),requestAnimationFrame(()=>{!a&&e.getAnimations().length===0&&o()})})}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var On=`wa-internal-tooltip`,kn=`__waCopyButtonAssignedId`,An=class extends tt{constructor(){super(...arguments),this.localize=new Ct(this),this.isCopying=!1,this.status=`rest`,this.hasCustomTrigger=!1,this.customTriggerEl=null,this.lightTooltip=null,this.feedbackTimeout=null,this.value=``,this.from=``,this.disabled=!1,this.copyLabel=``,this.successLabel=``,this.errorLabel=``,this.feedbackDuration=1e3,this.tooltipPlacement=`top`,this.tooltip=`full`,this.handleDefaultSlotChange=()=>{let e=(this.defaultSlot?.assignedElements({flatten:!0})??[]).find(e=>e instanceof HTMLElement)??null;e!==this.customTriggerEl&&(this.releaseAssignedId(this.customTriggerEl),this.customTriggerEl=e),this.hasCustomTrigger=e!==null,e&&this.tooltip!==`none`?(e.id||(e.id=En(`wa-copy-button-trigger-`),e[kn]=!0),this.ensureLightTooltip()):this.removeLightTooltip()}}get activeTooltip(){return this.lightTooltip??this.shadowTooltip??null}get currentLabel(){return this.status===`success`?this.successLabel||this.localize.term(`copied`):this.status===`error`?this.errorLabel||this.localize.term(`error`):this.copyLabel||this.localize.term(`copy`)}firstUpdated(e){super.firstUpdated(e),this.didSSR?this.updateComplete.then(()=>{this.handleDefaultSlotChange()}):this.handleDefaultSlotChange()}disconnectedCallback(){super.disconnectedCallback(),this.removeLightTooltip()}handleStatusChange(){this.customStates.set(`success`,this.status===`success`),this.customStates.set(`error`,this.status===`error`),this.syncTooltipText(),(this.status===`success`||this.status===`error`)&&Sn(this.currentLabel,`polite`)}handleLabelChange(){this.syncTooltipText()}handleTooltipOptionsChange(){this.lightTooltip&&(this.lightTooltip.placement=this.tooltipPlacement,this.lightTooltip.disabled=this.disabled)}handleTooltipModeChange(e){this.tooltip===`none`?this.removeLightTooltip():e===`none`?this.handleDefaultSlotChange():this.lightTooltip&&this.lightTooltip.setAttribute(`trigger`,this.tooltip===`copy`?`manual`:`hover focus`)}releaseAssignedId(e){e&&e[kn]&&(e.removeAttribute(`id`),delete e[kn])}ensureLightTooltip(){if(!this.customTriggerEl)return;let e=this.tooltip===`copy`?`manual`:`hover focus`;if(this.lightTooltip)this.lightTooltip.setAttribute(`for`,this.customTriggerEl.id),this.lightTooltip.setAttribute(`trigger`,e),this.lightTooltip.placement=this.tooltipPlacement,this.lightTooltip.disabled=this.disabled,this.lightTooltip.textContent=this.currentLabel;else{let t=document.createElement(`wa-tooltip`);t.setAttribute(`slot`,On),t.setAttribute(`part`,`feedback`),t.setAttribute(`trigger`,e),t.dataset.copyButtonTooltip=``,t.setAttribute(`for`,this.customTriggerEl.id),t.placement=this.tooltipPlacement,t.disabled=this.disabled,t.textContent=this.currentLabel,this.appendChild(t),this.lightTooltip=t}}removeLightTooltip(){this.lightTooltip&&=(this.releaseAssignedId(this.customTriggerEl),this.lightTooltip.remove(),null)}syncTooltipText(){this.lightTooltip&&(this.lightTooltip.textContent=this.currentLabel)}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let e=this.value;if(this.from){let t=this.getRootNode(),n=this.from.includes(`.`),r=this.from.includes(`[`)&&this.from.includes(`]`),i=this.from,a=``;n?[i,a]=this.from.trim().split(`.`):r&&([i,a]=this.from.trim().replace(/\]$/,``).split(`[`));let o=`getElementById`in t?t.getElementById(i):null;o?e=r?o.getAttribute(a)||``:n?o[a]||``:o.textContent||``:(this.showStatus(`error`),this.dispatchEvent(new It))}if(!e)this.showStatus(`error`),this.dispatchEvent(new It);else try{await navigator.clipboard.writeText(e),this.showStatus(`success`),this.dispatchEvent(new gn({value:e}))}catch{this.showStatus(`error`),this.dispatchEvent(new It)}}async showStatus(e){if(this.status=e,this.copyIcon){let t=e===`success`?this.successIcon:this.errorIcon;await Dn(this.copyIcon,`hide`),this.copyIcon.hidden=!0,t.hidden=!1,await Dn(t,`show`)}await this.updateComplete;let t=this.tooltip===`none`?null:this.activeTooltip,n=null;t&&(t.show(),n=new Promise(e=>{t.addEventListener(`wa-after-hide`,()=>{this.feedbackTimeout!==null&&(clearTimeout(this.feedbackTimeout),this.feedbackTimeout=null),e()},{once:!0})}),this.feedbackTimeout=window.setTimeout(async()=>{this.feedbackTimeout=null,await t.hide()},this.feedbackDuration)),setTimeout(async()=>{if(n&&await n,this.copyIcon){let t=e===`success`?this.successIcon:this.errorIcon;await Dn(t,`hide`),t.hidden=!0,this.copyIcon.hidden=!1,await Dn(this.copyIcon,`show`)}this.status=`rest`,this.isCopying=!1},this.feedbackDuration)}render(){let e=!this.hasCustomTrigger&&this.tooltip!==`none`,t=this.tooltip===`copy`?`manual`:`hover focus`;return this.didSSR&&!this.hasUpdated&&(e=!1),Ee`
      <div class="copy-button__trigger" @click=${this.handleCopy}>
        <slot @slotchange=${this.handleDefaultSlotChange}></slot>
        <button
          class="button"
          part="button"
          type="button"
          id="copy-button"
          aria-label=${this.currentLabel}
          ?disabled=${this.disabled}
          ?hidden=${this.hasCustomTrigger}
        >
          <slot part="copy-icon" name="copy-icon">
            <wa-icon library="system" name="copy" variant="regular"></wa-icon>
          </slot>
          <slot part="success-icon" name="success-icon" variant="solid" hidden>
            <wa-icon library="system" name="check"></wa-icon>
          </slot>
          <slot part="error-icon" name="error-icon" variant="solid" hidden>
            <wa-icon library="system" name="xmark"></wa-icon>
          </slot>
        </button>

        ${e?Ee`
              <wa-tooltip
                part="feedback"
                for="copy-button"
                placement=${this.tooltipPlacement}
                trigger=${t}
                class=${Dt({"copy-button-tooltip":!0,"copy-button-tooltip-success":this.status===`success`,"copy-button-tooltip-error":this.status===`error`})}
                ?disabled=${this.disabled}
                >${this.currentLabel}</wa-tooltip
              >
            `:``}
        <slot name="${On}"></slot>
      </div>
    `}};An.css=[Xe,wn,Cn],s([Ye(`slot[name="copy-icon"]`)],An.prototype,`copyIcon`,2),s([Ye(`slot[name="success-icon"]`)],An.prototype,`successIcon`,2),s([Ye(`slot[name="error-icon"]`)],An.prototype,`errorIcon`,2),s([Ye(`slot:not([name])`)],An.prototype,`defaultSlot`,2),s([Ye(`wa-tooltip[part="feedback"]`)],An.prototype,`shadowTooltip`,2),s([F()],An.prototype,`isCopying`,2),s([F()],An.prototype,`status`,2),s([F()],An.prototype,`hasCustomTrigger`,2),s([P()],An.prototype,`value`,2),s([P()],An.prototype,`from`,2),s([P({type:Boolean,reflect:!0})],An.prototype,`disabled`,2),s([P({attribute:`copy-label`})],An.prototype,`copyLabel`,2),s([P({attribute:`success-label`})],An.prototype,`successLabel`,2),s([P({attribute:`error-label`})],An.prototype,`errorLabel`,2),s([P({attribute:`feedback-duration`,type:Number})],An.prototype,`feedbackDuration`,2),s([P({attribute:`tooltip-placement`,reflect:!0})],An.prototype,`tooltipPlacement`,2),s([P({reflect:!0})],An.prototype,`tooltip`,2),s([dt(`status`)],An.prototype,`handleStatusChange`,1),s([dt([`copyLabel`,`successLabel`,`errorLabel`])],An.prototype,`handleLabelChange`,1),s([dt([`tooltipPlacement`,`disabled`],{waitUntilFirstUpdate:!0})],An.prototype,`handleTooltipOptionsChange`,1),s([dt(`tooltip`,{waitUntilFirstUpdate:!0})],An.prototype,`handleTooltipModeChange`,1),An=s([Ge(`wa-copy-button`)],An);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var jn=v`
  :host {
    --max-width: 30ch;

    /** These styles are added so we don't interfere in the DOM. */
    display: inline-block;
    position: absolute;

    /** Defaults for inherited CSS properties */
    color: var(--wa-tooltip-content-color);
    font-size: var(--wa-tooltip-font-size);
    line-height: var(--wa-tooltip-line-height);
    text-align: start;
    white-space: normal;
  }

  .tooltip {
    --arrow-size: var(--wa-tooltip-arrow-size);
    --arrow-color: var(--wa-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: 1000;
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--wa-tooltip-border-radius);
    background-color: var(--wa-tooltip-background-color);
    border: var(--wa-tooltip-border-width) var(--wa-tooltip-border-style) var(--wa-tooltip-border-color);
    padding: 0.25em 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  .tooltip {
    --popup-border-width: var(--wa-tooltip-border-width);

    /* Inset box-shadow, not a border: Safari seams a clip-path edge that runs along a border. */
    &::part(arrow) {
      box-shadow: inset calc(-1 * var(--wa-tooltip-border-width)) calc(-1 * var(--wa-tooltip-border-width)) 0 0
        var(--wa-tooltip-border-color);
    }
  }
`,Mn=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-show`,{bubbles:!0,cancelable:!0,composed:!0})}},Nn=class extends Event{constructor(e){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-hide`,{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}},Pn=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-after-hide`,{bubbles:!0,cancelable:!1,composed:!0})}},Fn=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-after-show`,{bubbles:!0,cancelable:!1,composed:!0})}},In=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-reposition`,{bubbles:!0,cancelable:!1,composed:!0})}},Ln=v`
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
;const Rn=Math.min,zn=Math.max,Bn=Math.round,Vn=Math.floor,Hn=e=>({x:e,y:e}),Un={left:`right`,right:`left`,bottom:`top`,top:`bottom`};function Wn(e,t,n){return zn(e,Rn(t,n))}function Gn(e,t){return typeof e==`function`?e(t):e}function Kn(e){return e.split(`-`)[0]}function qn(e){return e.split(`-`)[1]}function Jn(e){return e===`x`?`y`:`x`}function Yn(e){return e===`y`?`height`:`width`}function Xn(e){let t=e[0];return t===`t`||t===`b`?`y`:`x`}function Zn(e){return Jn(Xn(e))}function Qn(e,t,n){n===void 0&&(n=!1);let r=qn(e),i=Zn(e),a=Yn(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=sr(o)),[o,sr(o)]}function $n(e){let t=sr(e);return[er(e),t,er(t)]}function er(e){return e.includes(`start`)?e.replace(`start`,`end`):e.replace(`end`,`start`)}const tr=[`left`,`right`],nr=[`right`,`left`],rr=[`top`,`bottom`],ir=[`bottom`,`top`];function ar(e,t,n){switch(e){case`top`:case`bottom`:return n?t?nr:tr:t?tr:nr;case`left`:case`right`:return t?rr:ir;default:return[]}}function or(e,t,n,r){let i=qn(e),a=ar(Kn(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(er)))),a}function sr(e){let t=Kn(e);return Un[t]+e.slice(t.length)}function cr(e){return{top:e.top??0,right:e.right??0,bottom:e.bottom??0,left:e.left??0}}function lr(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:cr(e)}function ur(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function dr(e,t,n){let{reference:r,floating:i}=e,a=Xn(t),o=Zn(t),s=Yn(o),c=Kn(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}let m=qn(t);return m&&(p[o]+=f*(m===`end`?1:-1)*(n&&l?-1:1)),p}async function fr(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=Gn(t,e),p=lr(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=ur(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=ur(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}const pr=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=o.detectOverflow?o:{...o,detectOverflow:fr},c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=dr(l,r,c),f=r,p=0,m={};for(let n=0;n<a.length;n++){let h=a[n];if(!h)continue;let{name:g,fn:_}=h,{x:v,y,data:b,reset:x}=await _({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:m,rects:l,platform:s,elements:{reference:e,floating:t}});u=v??u,d=y??d,m[g]={...m[g],...b},x&&p<50&&(p++,typeof x==`object`&&(x.placement&&(f=x.placement),x.rects&&(l=x.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):x.rects),{x:u,y:d}=dr(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:m}},mr=e=>({name:`arrow`,options:e,async fn(t){let{x:n,y:r,placement:i,rects:a,platform:o,elements:s,middlewareData:c}=t,{element:l,padding:u=0}=Gn(e,t)||{};if(l==null)return{};let d=lr(u),f={x:n,y:r},p=Zn(i),m=Yn(p),h=await o.getDimensions(l),g=p===`y`,_=g?`top`:`left`,v=g?`bottom`:`right`,y=g?`clientHeight`:`clientWidth`,b=a.reference[m]+a.reference[p]-f[p]-a.floating[m],x=f[p]-a.reference[p],S=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l)),C=S?S[y]:0;(!C||!await(o.isElement==null?void 0:o.isElement(S)))&&(C=s.floating[y]||a.floating[m]);let w=b/2-x/2,T=C/2-h[m]/2-1,E=Rn(d[_],T),ee=Rn(d[v],T),te=C-h[m]-ee,D=C/2-h[m]/2+w,O=Wn(E,D,te),ne=!c.arrow&&qn(i)!=null&&D!==O&&a.reference[m]/2-(D<E?E:ee)-h[m]/2<0,re=ne?D<E?D-E:D-te:0;return{[p]:f[p]+re,data:{[p]:O,centerOffset:D-O-re,...ne&&{alignmentOffset:re}},reset:ne}}}),hr=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=Gn(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=Kn(r),_=Xn(o),v=Kn(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),b=d||(v||!m?[sr(o)]:$n(o)),x=p!==`none`;!d&&x&&b.push(...or(o,m,p,y));let S=[o,...b],C=await s.detectOverflow(t,h),w=[],T=i.flip?.overflows||[];if(l&&w.push(C[g]),u){let e=Qn(r,a,y);w.push(C[e[0]],C[e[1]])}if(T=[...T,{placement:r,overflows:w}],!w.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=S[e];if(t&&(u!==`alignment`||_===Xn(t)||T.every(e=>Xn(e.placement)!==_||e.overflows[0]>0)))return{data:{index:e,overflows:T},reset:{placement:t}};let n=T.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=T.filter(e=>{if(x){let t=Xn(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o}if(r!==n)return{reset:{placement:n}}}return{}}}},gr=/*#__PURE__*/ new Set([`left`,`top`]);async function _r(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=Kn(n),s=qn(n),c=Xn(n)===`y`,l=gr.has(o)?-1:1,u=a&&c?-1:1,d=Gn(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}const vr=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await _r(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},yr=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i,platform:a}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=Gn(e,t),u={x:n,y:r},d=await a.detectOverflow(t,l),f=Xn(i),p=Jn(f),m=u[p],h=u[f],g=(e,t)=>Wn(t+d[e===`y`?`top`:`left`],t,t-d[e===`y`?`bottom`:`right`]);o&&(m=g(p,m)),s&&(h=g(f,h));let _=c.fn({...t,[p]:m,[f]:h});return{..._,data:{x:_.x-n,y:_.y-r,enabled:{[p]:o,[f]:s}}}}}},br=function(e){return e===void 0&&(e={}),{name:`size`,options:e,async fn(t){let{placement:n,rects:r,platform:i,elements:a}=t,{apply:o=()=>{},...s}=Gn(e,t),c=await i.detectOverflow(t,s),l=Kn(n),u=qn(n),d=Xn(n)===`y`,{width:f,height:p}=r.floating,m,h;l===`top`||l===`bottom`?(m=l,h=u===(await(i.isRTL==null?void 0:i.isRTL(a.floating))?`start`:`end`)?`left`:`right`):(h=l,m=u===`end`?`top`:`bottom`);let g=p-c.top-c.bottom,_=f-c.left-c.right,v=Rn(p-c[m],g),y=Rn(f-c[h],_),b=t.middlewareData.shift,x=!b,S=v,C=y;b!=null&&b.enabled.x&&(C=_),b!=null&&b.enabled.y&&(S=g),x&&!u&&(d?C=f-2*zn(c.left,c.right):S=p-2*zn(c.top,c.bottom)),await o({...t,availableWidth:C,availableHeight:S});let w=await i.getDimensions(a.floating);return f!==w.width||p!==w.height?{reset:{rects:!0}}:{}}}};function xr(){return typeof window<`u`}function Sr(e){return Tr(e)?(e.nodeName||``).toLowerCase():`#document`}function Cr(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function wr(e){return((Tr(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function Tr(e){return xr()?e instanceof Node||e instanceof Cr(e).Node:!1}function Er(e){return xr()?e instanceof Element||e instanceof Cr(e).Element:!1}function Dr(e){return xr()?e instanceof HTMLElement||e instanceof Cr(e).HTMLElement:!1}function Or(e){return!xr()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof Cr(e).ShadowRoot}function kr(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=Br(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!==`inline`&&i!==`contents`}function Ar(e){return/^(table|td|th)$/.test(Sr(e))}function jr(e){try{if(e.matches(`:popover-open`))return!0}catch{}try{return e.matches(`:modal`)}catch{return!1}}const Mr=/transform|translate|scale|rotate|perspective|filter/,Nr=/paint|layout|strict|content/,Pr=e=>!!e&&e!==`none`;let Fr;function Ir(e){let t=Er(e)?Br(e):e;return Pr(t.transform)||Pr(t.translate)||Pr(t.scale)||Pr(t.rotate)||Pr(t.perspective)||!Rr()&&(Pr(t.backdropFilter)||Pr(t.filter))||Mr.test(t.willChange||``)||Nr.test(t.contain||``)}function Lr(e){let t=Hr(e);for(;Dr(t)&&!zr(t);){if(Ir(t))return t;if(jr(t))return null;t=Hr(t)}return null}function Rr(){return Fr??=typeof CSS<`u`&&CSS.supports&&CSS.supports(`-webkit-backdrop-filter`,`none`),Fr}function zr(e){return/^(html|body|#document)$/.test(Sr(e))}function Br(e){return Cr(e).getComputedStyle(e)}function Vr(e){return Er(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Hr(e){if(Sr(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||Or(e)&&e.host||wr(e);return Or(t)?t.host:t}function Ur(e){let t=Hr(e);return zr(t)?(e.ownerDocument||e).body:Dr(t)&&kr(t)?t:Ur(t)}function Wr(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=Ur(e),i=r===e.ownerDocument?.body,a=Cr(r);if(i){let e=Gr(a);return t.concat(a,a.visualViewport||[],kr(r)?r:[],e&&n?Wr(e):[])}return t.concat(r,Wr(r,[],n))}function Gr(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Kr(e){let t=Br(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=Dr(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=Bn(n)!==a||Bn(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function qr(e){return Er(e)?e:e.contextElement}function Jr(e){let t=qr(e);if(!Dr(t))return Hn(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=Kr(t),o=(a?Bn(n.width):n.width)/r,s=(a?Bn(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}const Yr=/*#__PURE__*/ Hn(0);function Xr(e){let t=Cr(e);return!Rr()||!t.visualViewport?Yr:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Zr(e,t,n){return t===void 0&&(t=!1),!!n&&t&&n===Cr(e)}function Qr(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=qr(e),o=Hn(1);t&&(r?Er(r)&&(o=Jr(r)):o=Jr(e));let s=Zr(a,n,r)?Xr(a):Hn(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a&&r){let e=Cr(a),t=Er(r)?Cr(r):r,n=e,i=Gr(n);for(;i&&t!==n;){let e=Jr(i),t=i.getBoundingClientRect(),r=Br(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=Cr(i),i=Gr(n)}}return ur({width:u,height:d,x:c,y:l})}function $r(e,t){let n=Vr(e).scrollLeft;return t?t.left+n:Qr(wr(e)).left+n}function ei(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-$r(e,n),y:n.top+t.scrollTop}}function ti(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=wr(r),s=t?jr(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=Hn(1),u=Hn(0),d=Dr(r);if((d||!a)&&((Sr(r)!==`body`||kr(o))&&(c=Vr(r)),d)){let e=Qr(r);l=Jr(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?ei(o,c):Hn(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function ni(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function ri(e){let t=Vr(e),n=e.ownerDocument.body,r=zn(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),i=zn(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight),a=-t.scrollLeft+$r(e),o=-t.scrollTop;return Br(n).direction===`rtl`&&(a+=zn(e.clientWidth,n.clientWidth)-r),{width:r,height:i,x:a,y:o}}function ii(e,t,n){n===void 0&&(n=`viewport`);let r=n===`layoutViewport`,i=Cr(e),a=wr(e),o=i.visualViewport,s=a.clientWidth,c=a.clientHeight,l=0,u=0;if(o){let e=!Rr()||t===`fixed`;r?e||(l=-o.offsetLeft,u=-o.offsetTop):(s=o.width,c=o.height,e&&(l=o.offsetLeft,u=o.offsetTop))}if($r(a)<=0){let e=a.ownerDocument,t=e.body,n=getComputedStyle(t),r=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,i=Math.abs(a.clientWidth-t.clientWidth-r),o=getComputedStyle(a).scrollbarGutter===`stable both-edges`?i/2:i;o<=25&&(s-=o)}return{width:s,height:c,x:l,y:u}}function ai(e,t){let n=Qr(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=Jr(e);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function oi(e,t,n){let r;if(t===`viewport`||t===`layoutViewport`)r=ii(e,n,t);else if(t===`document`)r=ri(wr(e));else if(Er(t))r=ai(t,n);else{let n=Xr(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return ur(r)}function si(e,t){let n=t.get(e);if(n)return n;let r=Wr(e,[],!1).filter(e=>Er(e)&&Sr(e)!==`body`),i=null,a=Br(e).position===`fixed`,o=a?Hr(e):e;for(;Er(o)&&!zr(o);){let e=Br(o),t=Ir(o),n=i?i.position:a?`fixed`:``;!t&&(n===`fixed`||n===`absolute`&&e.position===`static`)?r=r.filter(e=>e!==o):i=e,o=Hr(o)}return t.set(e,r),r}function ci(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?jr(t)?[]:si(t,this._c):[].concat(n),r],o=oi(t,a[0],i),s=o.top,c=o.right,l=o.bottom,u=o.left;for(let e=1;e<a.length;e++){let n=oi(t,a[e],i);s=zn(n.top,s),c=Rn(n.right,c),l=Rn(n.bottom,l),u=zn(n.left,u)}return{width:c-u,height:l-s,x:u,y:s}}function li(e){let{width:t,height:n}=Kr(e);return{width:t,height:n}}function ui(e,t,n){let r=Dr(t),i=wr(t),a=n===`fixed`,o=Qr(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=Hn(0);if((r||!a)&&((Sr(t)!==`body`||kr(i))&&(s=Vr(t)),r)){let e=Qr(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}!r&&i&&(c.x=$r(i));let l=i&&!r&&!a?ei(i,s):Hn(0);return{x:o.left+s.scrollLeft-c.x-l.x,y:o.top+s.scrollTop-c.y-l.y,width:o.width,height:o.height}}function di(e){return Br(e).position===`static`}function fi(e,t){if(!Dr(e)||Br(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return wr(e)===n&&(n=n.ownerDocument.body),n}function pi(e,t){let n=Cr(e);if(jr(e))return n;if(!Dr(e)){let t=Hr(e);for(;t&&!zr(t);){if(Er(t)&&!di(t))return t;t=Hr(t)}return n}let r=fi(e,t);for(;r&&Ar(r)&&di(r);)r=fi(r,t);return r&&zr(r)&&di(r)&&!Ir(r)?n:r||Lr(e)||n}const mi=async function(e){let t=this.getOffsetParent||pi,n=this.getDimensions,r=await n(e.floating);return{reference:ui(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function hi(e){return Br(e).direction===`rtl`}const gi={convertOffsetParentRelativeRectToViewportRelativeRect:ti,getDocumentElement:wr,getClippingRect:ci,getOffsetParent:pi,getElementRects:mi,getClientRects:ni,getDimensions:li,getScale:Jr,isElement:Er,isRTL:hi};function _i(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function vi(e,t,n){let r=null,i,a=wr(e);function o(){var e;clearTimeout(i),(e=r)==null||e.disconnect(),r=null}function s(n,c){n===void 0&&(n=!1),c===void 0&&(c=1),o();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(n||t(),!f||!p)return;let m=Vn(d),h=Vn(a.clientWidth-(u+f)),g=Vn(a.clientHeight-(d+p)),_=Vn(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:zn(0,Rn(1,c))||1},y=!0;function b(t){let n=t[0].intersectionRatio;if(!_i(l,e.getBoundingClientRect()))return s();if(n!==c){if(!y)return s();n?s(!1,n):i=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{r=new IntersectionObserver(b,{...v,root:a.ownerDocument})}catch{r=new IntersectionObserver(b,v)}r.observe(e)}let c=Cr(e),l=()=>s(n);return c.addEventListener(`resize`,l),s(!0),()=>{c.removeEventListener(`resize`,l),o()}}function yi(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=qr(e),u=i||a?[...l?Wr(l):[],...t?Wr(t):[]]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n),a&&e.addEventListener(`resize`,n)});let d=l&&s?vi(l,n,a):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&t&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),t&&p.observe(t));let m,h=c?Qr(e):null;c&&g();function g(){let t=Qr(e);h&&!_i(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}const bi=vr,xi=yr,Si=hr,Ci=br,wi=mr,Ti=(e,t,n)=>{let r=/* @__PURE__ */ new Map,i=n??{},a={...gi,...i.platform,_c:r};return pr(e,t,{...i,platform:a})};function Ei(e){return Oi(e)}function Di(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Oi(e){for(let t=e;t;t=Di(t))if(t instanceof Element&&getComputedStyle(t).display===`none`)return null;for(let t=Di(e);t;t=Di(t)){if(!(t instanceof Element))continue;let e=getComputedStyle(t);if(e.display!==`contents`&&(e.position!==`static`||Ir(e)||t.tagName===`BODY`))return t}return null}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function ki(e){return typeof e==`object`&&!!e&&`getBoundingClientRect`in e&&(`contextElement`in e?e instanceof Element:!0)}var Ai=!!globalThis?.HTMLElement?.prototype.hasOwnProperty(`popover`),ji=class extends tt{constructor(){super(...arguments),this.localize=new Ct(this),this.SUPPORTS_POPOVER=!1,this.active=!1,this.placement=`top`,this.boundary=`viewport`,this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement=`anchor`,this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements=``,this.flipFallbackStrategy=`best-fit`,this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl&&this.popup){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),n=this.placement.includes(`top`)||this.placement.includes(`bottom`),r=0,i=0,a=0,o=0,s=0,c=0,l=0,u=0;n?e.top<t.top?(r=e.left,i=e.bottom,a=e.right,o=e.bottom,s=t.left,c=t.top,l=t.right,u=t.top):(r=t.left,i=t.bottom,a=t.right,o=t.bottom,s=e.left,c=e.top,l=e.right,u=e.top):e.left<t.left?(r=e.right,i=e.top,a=t.left,o=t.top,s=e.right,c=e.bottom,l=t.left,u=t.bottom):(r=t.right,i=t.top,a=e.left,o=e.top,s=t.right,c=t.bottom,l=e.left,u=e.bottom),this.style.setProperty(`--hover-bridge-top-left-x`,`${r}px`),this.style.setProperty(`--hover-bridge-top-left-y`,`${i}px`),this.style.setProperty(`--hover-bridge-top-right-x`,`${a}px`),this.style.setProperty(`--hover-bridge-top-right-y`,`${o}px`),this.style.setProperty(`--hover-bridge-bottom-left-x`,`${s}px`),this.style.setProperty(`--hover-bridge-bottom-left-y`,`${c}px`),this.style.setProperty(`--hover-bridge-bottom-right-x`,`${l}px`),this.style.setProperty(`--hover-bridge-bottom-right-y`,`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.SUPPORTS_POPOVER=Ai,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has(`active`)&&(this.active?this.start():this.stop()),e.has(`anchor`)&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor==`string`){let e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchorEl=this.anchor instanceof Element||ki(this.anchor)?this.anchor:this.querySelector(`[slot="anchor"]`);this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&this.active&&this.isConnected&&(this.popup?.showPopover?.(),this.cleanup=yi(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.popup?.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute(`data-current-placement`),this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl||!this.popup)return;let e=[bi({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Ci({apply:({rects:e})=>{let t=this.sync===`width`||this.sync===`both`,n=this.sync===`height`||this.sync===`both`;this.popup.style.width=t?`${e.reference.width}px`:``,this.popup.style.height=n?`${e.reference.height}px`:``}})):(this.popup.style.width=``,this.popup.style.height=``);let t;this.SUPPORTS_POPOVER&&!ki(this.anchor)&&this.boundary===`scroll`&&(t=Wr(this.anchorEl).filter(e=>e instanceof Element)),this.flip&&e.push(Si({boundary:this.flipBoundary||t,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy===`best-fit`?`bestFit`:`initialPlacement`,padding:this.flipPadding})),this.shift&&e.push(xi({boundary:this.shiftBoundary||t,padding:this.shiftPadding})),this.autoSize?e.push(Ci({boundary:this.autoSizeBoundary||t,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{this.autoSize===`vertical`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-height`,`${t}px`):this.style.removeProperty(`--auto-size-available-height`),this.autoSize===`horizontal`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-width`,`${e}px`):this.style.removeProperty(`--auto-size-available-width`)}})):(this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`)),this.arrow&&e.push(wi({element:this.arrowEl,padding:this.arrowPadding}));let n=this.SUPPORTS_POPOVER?e=>gi.getOffsetParent(e,Ei):gi.getOffsetParent;Ti(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.SUPPORTS_POPOVER?`absolute`:`fixed`,platform:{...gi,getOffsetParent:n}}).then(({x:e,y:t,middlewareData:n,placement:r})=>{let i=this.localize.dir()===`rtl`,a={top:`bottom`,right:`left`,bottom:`top`,left:`right`}[r.split(`-`)[0]];if(this.setAttribute(`data-current-placement`,r),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=n.arrow.x,t=n.arrow.y,r=``,o=``,s=``,c=``;if(this.arrowPlacement===`start`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;r=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``,o=i?n:``,c=i?``:n}else if(this.arrowPlacement===`end`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;o=i?``:n,c=i?n:``,s=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``}else this.arrowPlacement===`center`?(c=typeof e==`number`?`calc(50% - var(--arrow-size-diagonal))`:``,r=typeof t==`number`?`calc(50% - var(--arrow-size-diagonal))`:``):(c=typeof e==`number`?`${e}px`:``,r=typeof t==`number`?`${t}px`:``);Object.assign(this.arrowEl.style,{top:r,right:o,bottom:s,left:c,[a]:`calc(var(--arrow-base-offset) - var(--arrow-size-diagonal))`})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new In)}render(){return Ee`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${Dt({"popup-hover-bridge":!0,"popup-hover-bridge-visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${Dt({popup:!0,"popup-active":this.active,"popup-fixed":!this.SUPPORTS_POPOVER,"popup-has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?Ee`<div part="arrow" class="arrow" role="presentation"></div>`:``}
      </div>
    `}};ji.css=Ln,s([Ye(`.popup`)],ji.prototype,`popup`,2),s([Ye(`.arrow`)],ji.prototype,`arrowEl`,2),s([P({attribute:!1,type:Boolean})],ji.prototype,`SUPPORTS_POPOVER`,2),s([P()],ji.prototype,`anchor`,2),s([P({type:Boolean,reflect:!0})],ji.prototype,`active`,2),s([P({reflect:!0})],ji.prototype,`placement`,2),s([P()],ji.prototype,`boundary`,2),s([P({type:Number})],ji.prototype,`distance`,2),s([P({type:Number})],ji.prototype,`skidding`,2),s([P({type:Boolean})],ji.prototype,`arrow`,2),s([P({attribute:`arrow-placement`})],ji.prototype,`arrowPlacement`,2),s([P({attribute:`arrow-padding`,type:Number})],ji.prototype,`arrowPadding`,2),s([P({type:Boolean})],ji.prototype,`flip`,2),s([P({attribute:`flip-fallback-placements`,converter:{fromAttribute:e=>e.split(` `).map(e=>e.trim()).filter(e=>e!==``),toAttribute:e=>e.join(` `)}})],ji.prototype,`flipFallbackPlacements`,2),s([P({attribute:`flip-fallback-strategy`})],ji.prototype,`flipFallbackStrategy`,2),s([P({type:Object})],ji.prototype,`flipBoundary`,2),s([P({attribute:`flip-padding`,type:Number})],ji.prototype,`flipPadding`,2),s([P({type:Boolean})],ji.prototype,`shift`,2),s([P({type:Object})],ji.prototype,`shiftBoundary`,2),s([P({attribute:`shift-padding`,type:Number})],ji.prototype,`shiftPadding`,2),s([P({attribute:`auto-size`})],ji.prototype,`autoSize`,2),s([P()],ji.prototype,`sync`,2),s([P({type:Object})],ji.prototype,`autoSizeBoundary`,2),s([P({attribute:`auto-size-padding`,type:Number})],ji.prototype,`autoSizePadding`,2),s([P({attribute:`hover-bridge`,type:Boolean})],ji.prototype,`hoverBridge`,2),ji=s([Ge(`wa-popup`)],ji);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Mi=[];function Ni(e){Pi(e),Mi.push(e)}function Pi(e){for(let t=Mi.length-1;t>=0;t--)if(Mi[t]===e){Mi.splice(t,1);break}}function Fi(e){return Mi.length>0&&Mi[Mi.length-1]===e}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Ii(e,t){return new Promise(n=>{function r(i){i.target===e&&(e.removeEventListener(t,r),n())}e.addEventListener(t,r)})}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Li(e,t){for(;t;){if(t===e)return!0;t=t instanceof Element&&t.assignedSlot?t.assignedSlot:t.parentNode?t.parentNode:t instanceof ShadowRoot?t.host:null}return!1}var Ri=class extends tt{constructor(){super(...arguments),this.dismissedByPress=!1,this.placement=`top`,this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.showDelay=150,this.hideDelay=0,this.trigger=`hover focus`,this.withoutArrow=!1,this.for=null,this.anchor=null,this.eventController=new AbortController,this.handleBlur=()=>{this.dismissedByPress=!1,this.hasTrigger(`focus`)&&this.hide()},this.handleClick=()=>{this.hasTrigger(`click`)?this.open?this.hide():this.show():this.hasTrigger(`manual`)||this.lightDismiss()},this.handleFocus=()=>{this.dismissedByPress||this.hasTrigger(`focus`)&&this.show()},this.handleMouseDown=()=>{this.hasTrigger(`click`)||this.hasTrigger(`manual`)||this.lightDismiss()},this.handleDocumentKeyDown=e=>{this.hasTrigger(`manual`)||e.key===`Escape`&&this.open&&Fi(this)&&(e.preventDefault(),e.stopPropagation(),this.hide())},this.handleDocumentClick=e=>{this.hasTrigger(`manual`)||this.anchor&&e.composedPath().includes(this.anchor)||this.hide()},this.handleMouseOver=()=>{this.dismissedByPress||this.hasTrigger(`hover`)&&(clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),this.showDelay))},this.handleMouseOut=e=>{let t=e.relatedTarget,n=!!(t&&this.anchor&&Li(this.anchor,t)),r=!!(t&&Li(this,t));n||r||(this.dismissedByPress=!1,this.hasTrigger(`hover`)&&(clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>{this.hide()},this.hideDelay)))}}connectedCallback(){super.connectedCallback(),typeof document<`u`&&(this.eventController.signal.aborted&&(this.eventController=new AbortController),this.addEventListener(`mouseout`,this.handleMouseOut),this.dismissedByPress=!1,this.open&&(this.open=!1,this.updateComplete.then(()=>{this.open=!0})),this.id||=En(`wa-tooltip-`),this.for&&this.anchor?(this.anchor=null,this.handleForChange()):this.for&&this.handleForChange())}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`click`,this.handleDocumentClick),Pi(this),this.eventController.abort(),this.anchor&&this.removeFromAriaLabelledBy(this.anchor,this.id)}firstUpdated(e){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition()),super.firstUpdated(e)}lightDismiss(){clearTimeout(this.hoverTimeout),this.dismissedByPress=!0,this.hide()}hasTrigger(e){return this.trigger.split(` `).includes(e)}addToAriaLabelledBy(e,t){let n=(e.getAttribute(`aria-labelledby`)||``).split(/\s+/).filter(Boolean);n.includes(t)||(n.push(t),e.setAttribute(`aria-labelledby`,n.join(` `)))}removeFromAriaLabelledBy(e,t){let n=(e.getAttribute(`aria-labelledby`)||``).split(/\s+/).filter(Boolean).filter(e=>e!==t);n.length>0?e.setAttribute(`aria-labelledby`,n.join(` `)):e.removeAttribute(`aria-labelledby`)}async handleOpenChange(){if(this.open){if(this.disabled)return;let e=new Mn;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.hasTrigger(`manual`)||(document.addEventListener(`keydown`,this.handleDocumentKeyDown,{signal:this.eventController.signal}),document.addEventListener(`click`,this.handleDocumentClick,{signal:this.eventController.signal}),Ni(this)),this.body.hidden=!1,this.popup.active=!0,await Dn(this.popup.popup,`show-with-scale`),this.popup.reposition(),this.dispatchEvent(new Fn)}else{let e=new Nn;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!0;return}document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`click`,this.handleDocumentClick),Pi(this),await Dn(this.popup.popup,`hide-with-scale`),this.popup.active=!1,this.body.hidden=!0,this.dispatchEvent(new Pn)}}handleForChange(){let e=this.getRootNode?.();if(!e)return;let t=this.for?e.getElementById?.(this.for):null,n=this.anchor;if(t===n)return;this.dismissedByPress=!1;let{signal:r}=this.eventController;t&&(this.addToAriaLabelledBy(t,this.id),t.addEventListener(`blur`,this.handleBlur,{capture:!0,signal:r}),t.addEventListener(`focus`,this.handleFocus,{capture:!0,signal:r}),t.addEventListener(`click`,this.handleClick,{signal:r}),t.addEventListener(`mousedown`,this.handleMouseDown,{signal:r}),t.addEventListener(`mouseover`,this.handleMouseOver,{signal:r}),t.addEventListener(`mouseout`,this.handleMouseOut,{signal:r})),n&&(this.removeFromAriaLabelledBy(n,this.id),n.removeEventListener(`blur`,this.handleBlur,{capture:!0}),n.removeEventListener(`focus`,this.handleFocus,{capture:!0}),n.removeEventListener(`click`,this.handleClick),n.removeEventListener(`mousedown`,this.handleMouseDown),n.removeEventListener(`mouseover`,this.handleMouseOver),n.removeEventListener(`mouseout`,this.handleMouseOut)),this.anchor=t}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Ii(this,`wa-after-show`)}async hide(){if(this.open)return this.open=!1,Ii(this,`wa-after-hide`)}render(){return Ee`
      <wa-popup
        part="base tooltip"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${Dt({tooltip:!0,"tooltip-open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        flip
        shift
        ?arrow=${!this.withoutArrow}
        hover-bridge
        .anchor=${this.anchor}
      >
        <div part="body" class="body">
          <slot></slot>
        </div>
      </wa-popup>
    `}};Ri.css=jn,Ri.dependencies={"wa-popup":ji},s([Ye(`slot:not([name])`)],Ri.prototype,`defaultSlot`,2),s([Ye(`.body`)],Ri.prototype,`body`,2),s([Ye(`wa-popup`)],Ri.prototype,`popup`,2),s([P()],Ri.prototype,`placement`,2),s([P({type:Boolean,reflect:!0})],Ri.prototype,`disabled`,2),s([P({type:Number})],Ri.prototype,`distance`,2),s([P({type:Boolean,reflect:!0})],Ri.prototype,`open`,2),s([P({type:Number})],Ri.prototype,`skidding`,2),s([P({attribute:`show-delay`,type:Number})],Ri.prototype,`showDelay`,2),s([P({attribute:`hide-delay`,type:Number})],Ri.prototype,`hideDelay`,2),s([P()],Ri.prototype,`trigger`,2),s([P({attribute:`without-arrow`,type:Boolean,reflect:!0})],Ri.prototype,`withoutArrow`,2),s([P()],Ri.prototype,`for`,2),s([F()],Ri.prototype,`anchor`,2),s([dt(`open`,{waitUntilFirstUpdate:!0})],Ri.prototype,`handleOpenChange`,1),s([dt(`for`)],Ri.prototype,`handleForChange`,1),s([dt([`distance`,`placement`,`skidding`])],Ri.prototype,`handleOptionsChange`,1),s([dt(`disabled`)],Ri.prototype,`handleDisabledChange`,1),Ri=s([Ge(`wa-tooltip`)],Ri);var zi=/* @__PURE__ */ t({default:()=>An}),Bi=/* @__PURE__ */ t({default:()=>mn}),Vi=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-clear`,{bubbles:!0,cancelable:!1,composed:!0})}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Hi(e,t){let n=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key===`Enter`&&!n&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&Ki(t)})}var Ui=/* @__PURE__ */ new Map([[`input`,!0],[`wa-input`,!0],[`wa-tag-input`,!0],[`wa-number-input`,!0],[`wa-otp-input`,!0],[`wa-slider`,!0]]),Wi=/* @__PURE__ */ new Map([[`button`,!1],[`checkbox`,!1],[`color`,!1],[`date`,!1],[`datetime-local`,!1],[`email`,!0],[`file`,!1],[`hidden`,!1],[`image`,!1],[`month`,!1],[`number`,!0],[`password`,!0],[`radio`,!1],[`range`,!1],[`reset`,!0],[`search`,!0],[`submit`,!1],[`tel`,!0],[`text`,!0],[`time`,!1],[`url`,!0],[`week`,!1]]),Gi=e=>{let t=e?.localName;if(!t||!Ui.get(t))return!1;if(t!==`input`&&t!==`wa-input`)return!0;let n=e.type;return!!Wi.get(n)};function Ki(e){let t=null;if(`form`in e&&(t=e.form),!t&&`getForm`in e&&(t=e.getForm()),!t)return;let n=Array.from(t.elements),r=0;for(let e of n)Gi(e)&&(r+=1);if(r===1){t.requestSubmit(null);return}let i=n.find(e=>e.type===`submit`&&!e.matches(`:disabled`));i&&([`input`,`button`].includes(i.localName)?t.requestSubmit(i):i.click())}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var qi=v`
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
`,Ji=v`
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
`
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Yi=Tt(class extends Et{constructor(e){if(super(e),e.type!==wt.PROPERTY&&e.type!==wt.ATTRIBUTE&&e.type!==wt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!sn(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===j||t===M)return t;let n=e.element,r=e.name;if(e.type===wt.PROPERTY){if(t===n[r])return j}else if(e.type===wt.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return j}else if(e.type===wt.ATTRIBUTE&&n.getAttribute(r)===t+``)return j;return ln(e),t}});
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var L=class extends rt{constructor(){super(...arguments),this.assumeInteractionOn=[`blur`,`input`],this.hasSlotController=new st(this,`hint`,`label`),this.localize=new Ct(this),this.title=``,this.type=`text`,this._value=null,this.defaultValue=this.getAttribute(`value`)||null,this.size=`m`,this.appearance=`outlined`,this.pill=!1,this.label=``,this.hint=``,this.withClear=!1,this.placeholder=``,this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.withoutSpinButtons=!1,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,n()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){this._value!==e&&(this.valueHasChanged=!0,this._value=e)}updateFormValue(e){e==null?this.setValue(``,null):super.updateFormValue(e)}handleSizeChange(){ot(this.localName,this.size)}handleChange(e){this.value=this.input.value,this.relayNativeEvent(e,{bubbles:!0,composed:!0})}handleClearClick(e){e.preventDefault(),this.value!==``&&(this.value=``,this.updateComplete.then(()=>{this.dispatchEvent(new Vi),this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})),this.input.focus()}handleInput(){this.value=this.input.value}handleKeyDown(e){Hi(e,this)}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}updated(e){super.updated(e),(e.has(`value`)||e.has(`defaultValue`)||e.has(`type`))&&(this.input&&[`number`,`date`,`time`,`datetime-local`].includes(this.type)&&this.value&&this.input.value!==this.value&&(this._value=this.input.value),this.customStates.set(`blank`,!this.value),this.updateValidity())}handleStepChange(){this.input.step=String(this.step),this.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,n=`none`){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,r=`preserve`){let i=t??this.input.selectionStart,a=n??this.input.selectionEnd;this.input.setRangeText(e,i,a,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){`showPicker`in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}formResetCallback(){this.value=null,this.input&&(this.input.value=this.value),super.formResetCallback()}render(){let e=this.hasSlotController.test(`label`,`withLabel`),t=this.hasSlotController.test(`hint`,`withHint`),n=this.label?!0:!!e,r=this.hint?!0:!!t,i=this.withClear&&!this.disabled&&!this.readonly,a=(!this.didSSR||this.hasUpdated)&&i&&(typeof this.value==`number`||this.value&&this.value.length>0);return Ee`
      <label
        part="form-control-label label"
        class=${Dt({label:!0,"has-label":n})}
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
          name=${Ot(this.name)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${Ot(this.placeholder)}
          minlength=${Ot(this.minlength)}
          maxlength=${Ot(this.maxlength)}
          min=${Ot(this.min)}
          max=${Ot(this.max)}
          step=${Ot(this.step)}
          .value=${Yi(this.value??``)}
          autocapitalize=${Ot(this.autocapitalize)}
          autocomplete=${Ot(this.autocomplete)}
          autocorrect=${this.autocorrect?`on`:`off`}
          ?autofocus=${this.autofocus}
          spellcheck=${this.spellcheck}
          pattern=${Ot(this.pattern)}
          enterkeyhint=${Ot(this.enterkeyhint)}
          inputmode=${Ot(this.inputmode)}
          aria-describedby="hint"
          @change=${this.handleChange}
          @input=${this.handleInput}
          @keydown=${this.handleKeyDown}
        />

        ${a?Ee`
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
        ${this.passwordToggle&&!this.disabled?Ee`
              <button
                part="password-toggle-button"
                class="password-toggle"
                type="button"
                aria-label=${this.localize.term(this.passwordVisible?`hidePassword`:`showPassword`)}
                @click=${this.handlePasswordToggle}
              >
                ${this.passwordVisible?Ee`
                      <slot name="hide-password-icon">
                        <wa-icon name="eye-slash" library="system" variant="regular"></wa-icon>
                      </slot>
                    `:Ee`
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
        class=${Dt({"has-slotted":r})}
        aria-hidden=${r?`false`:`true`}
        >${this.hint}</slot
      >
    `}};L.css=[ct,Ji,qi],L.shadowRootOptions={...rt.shadowRootOptions,delegatesFocus:!0},s([Ye(`input`)],L.prototype,`input`,2),s([P()],L.prototype,`title`,2),s([P({reflect:!0})],L.prototype,`type`,2),s([F()],L.prototype,`value`,1),s([P({attribute:`value`,reflect:!0})],L.prototype,`defaultValue`,2),s([P({reflect:!0})],L.prototype,`size`,2),s([dt(`size`)],L.prototype,`handleSizeChange`,1),s([P({reflect:!0})],L.prototype,`appearance`,2),s([P({type:Boolean,reflect:!0})],L.prototype,`pill`,2),s([P()],L.prototype,`label`,2),s([P({attribute:`hint`})],L.prototype,`hint`,2),s([P({attribute:`with-clear`,type:Boolean})],L.prototype,`withClear`,2),s([P()],L.prototype,`placeholder`,2),s([P({type:Boolean,reflect:!0})],L.prototype,`readonly`,2),s([P({attribute:`password-toggle`,type:Boolean})],L.prototype,`passwordToggle`,2),s([P({attribute:`password-visible`,type:Boolean})],L.prototype,`passwordVisible`,2),s([P({attribute:`without-spin-buttons`,type:Boolean,reflect:!0})],L.prototype,`withoutSpinButtons`,2),s([P({type:Boolean,reflect:!0})],L.prototype,`required`,2),s([P()],L.prototype,`pattern`,2),s([P({type:Number})],L.prototype,`minlength`,2),s([P({type:Number})],L.prototype,`maxlength`,2),s([P()],L.prototype,`min`,2),s([P()],L.prototype,`max`,2),s([P()],L.prototype,`step`,2),s([P()],L.prototype,`autocapitalize`,2),s([P({type:Boolean,converter:{fromAttribute:e=>!(!e||e===`off`),toAttribute:e=>e?`on`:`off`}})],L.prototype,`autocorrect`,2),s([P()],L.prototype,`autocomplete`,2),s([P({type:Boolean})],L.prototype,`autofocus`,2),s([P()],L.prototype,`enterkeyhint`,2),s([P({type:Boolean,converter:{fromAttribute:e=>!(!e||e===`false`),toAttribute:e=>e?`true`:`false`}})],L.prototype,`spellcheck`,2),s([P()],L.prototype,`inputmode`,2),s([P({attribute:`with-label`,type:Boolean})],L.prototype,`withLabel`,2),s([P({attribute:`with-hint`,type:Boolean})],L.prototype,`withHint`,2),s([dt(`step`,{waitUntilFirstUpdate:!0})],L.prototype,`handleStepChange`,1),L=s([Ge(`wa-input`)],L),L.disableWarning?.(`change-in-update`);var Xi=/* @__PURE__ */ t({default:()=>L}),R
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;Object.getOwnPropertyDescriptors||(()=>{var e;if(typeof Reflect<`u`&&Reflect.ownKeys)e=Reflect.ownKeys;else{var t=Object.getOwnPropertySymbols||(e=>[]);e=(e=>Object.getOwnPropertyNames(e).concat(t(e)))}return(t=>{for(var n=e(t),r={},i=n.length|0,a=0;a!==i;){var o=n[a];Object.defineProperty(r,o,{configurable:!0,enumerable:!0,writable:!0,value:Object.getOwnPropertyDescriptor(t,o)}),a=a+1|0}return r})})();function Zi(e){this.c=e}R=Zi.prototype,R.toString=(function(){return String.fromCharCode(this.c)});function Qi(e,t){this.l=e,this.h=t}R=Qi.prototype,R.toString=(function(){return jc(this.l,this.h)});function $i(e){switch(typeof e){case`string`:return c_.l();case`number`:return ma(e)?e<<24>>24===e?Mm.l():e<<16>>16===e?Wm.l():t_.l():ha(e)?e_.l():$g.l();case`boolean`:return Lp.l();case`undefined`:return wc.l();default:return e instanceof Qi?i_.l():e instanceof Zi?Bp.l():e&&e.$classData?e.$classData.l():null}}function ea(e){switch(typeof e){case`string`:return`java.lang.String`;case`number`:return ma(e)?e<<24>>24===e?`java.lang.Byte`:e<<16>>16===e?`java.lang.Short`:`java.lang.Integer`:ha(e)?`java.lang.Float`:`java.lang.Double`;case`boolean`:return`java.lang.Boolean`;case`undefined`:return`java.lang.Void`;default:return e instanceof Qi?`java.lang.Long`:e instanceof Zi?`java.lang.Character`:e&&e.$classData?e.$classData.N:null.o2()}}function ta(e,t){switch(typeof e){case`string`:return s_(e,t);case`number`:return Zg(e,t);case`boolean`:return Fp(e,t);case`undefined`:return xc(e,t);default:return e&&e.$classData||e===null?e.q(t):e instanceof Qi?n_(e.l,e.h,t):e instanceof Zi?zp(e.c,t):Sa.prototype.q.call(e,t)}}function na(e){switch(typeof e){case`string`:return o_(e);case`number`:return Qg(e);case`boolean`:return Ip(e);case`undefined`:return Sc(e);default:return e&&e.$classData||e===null?e.u():e instanceof Qi?r_(e.l,e.h):e instanceof Zi?Rp(e.c):Sa.prototype.u.call(e)}}function ra(e){return e===void 0?`undefined`:e.toString()}function ia(e){if(e===0)throw new jm(`/ by zero`);return e}function aa(e){return e>2147483647?2147483647:e<-2147483648?-2147483648:e|0}function oa(e){return String.fromCharCode(e)}var sa=/* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(8));function ca(e,t,n,r,i){if(e!==n||r-t>>>0>i>>>0)for(var a=0;a<i;a=a+1|0)n[r+a|0]=e[t+a|0];else for(var a=i-1|0;a>=0;a=a-1|0)n[r+a|0]=e[t+a|0]}var la=0,ua=/* @__PURE__ */ new WeakMap;function da(e){switch(typeof e){case`string`:return o_(e);case`number`:return Qg(e);case`bigint`:var t=0;for(e<BigInt(0)&&(e=~e);e!==BigInt(0);)t^=Number(BigInt.asIntN(32,e)),e>>=BigInt(32);return t;case`boolean`:return e?1231:1237;case`undefined`:return 0;case`symbol`:var n=e.description;return n===void 0?0:o_(n);default:if(e===null)return 0;var r=ua.get(e);return r===void 0&&(r=la+1|0,la=r,ua.set(e,r)),r}}function fa(e){return typeof e==`number`&&e<<24>>24===e&&1/e!=-1/0}function pa(e){return typeof e==`number`&&e<<16>>16===e&&1/e!=-1/0}function ma(e){return typeof e==`number`&&(e|0)===e&&1/e!=-1/0}function ha(e){return typeof e==`number`&&(e!==e||Math.fround(e)===e)}function ga(e){return new Zi(e)}ga(0);function _a(e,t){return new Qi(e,t)}var va=_a(0,0);function ya(e){return e===null?0:e.c}function ba(e){return e===null?va:e}function xa(e){return e}function Sa(){}R=Sa.prototype,R.constructor=Sa;function z(){}z.prototype=R,R.u=(function(){return da(this)}),R.q=(function(e){return this===e}),R.y=(function(){var e=this.u();return ea(this)+`@`+(e>>>0).toString(16)}),R.toString=(function(){return this.y()});function B(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}R=B.prototype=new z,R.constructor=B,R.o=(function(e,t,n,r){ca(this.a,e,t.a,n,r)}),R.c=(function(){return new B(this.a.slice())});function Ca(){}Ca.prototype=R;function wa(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=!1}else this.a=e}R=wa.prototype=new z,R.constructor=wa,R.o=(function(e,t,n,r){ca(this.a,e,t.a,n,r)}),R.c=(function(){return new wa(this.a.slice())});function Ta(e){this.a=typeof e==`number`?new Uint16Array(e):e}R=Ta.prototype=new z,R.constructor=Ta,R.o=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),R.c=(function(){return new Ta(this.a.slice())});function Ea(e){this.a=typeof e==`number`?new Int8Array(e):e}R=Ea.prototype=new z,R.constructor=Ea,R.o=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),R.c=(function(){return new Ea(this.a.slice())});function Da(e){this.a=typeof e==`number`?new Int16Array(e):e}R=Da.prototype=new z,R.constructor=Da,R.o=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),R.c=(function(){return new Da(this.a.slice())});function Oa(e){this.a=typeof e==`number`?new Int32Array(e):e}R=Oa.prototype=new z,R.constructor=Oa,R.o=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),R.c=(function(){return new Oa(this.a.slice())});function ka(e){typeof e==`number`?(e<<=1,this.a=new Int32Array(e)):this.a=e}R=ka.prototype=new z,R.constructor=ka,R.o=(function(e,t,n,r){t.a.set(this.a.subarray(e<<1,(e+r|0)<<1),n<<1)}),R.c=(function(){return new ka(this.a.slice())});function Aa(e){this.a=typeof e==`number`?new Float32Array(e):e}R=Aa.prototype=new z,R.constructor=Aa,R.o=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),R.c=(function(){return new Aa(this.a.slice())});function ja(e){this.a=typeof e==`number`?new Float64Array(e):e}R=ja.prototype=new z,R.constructor=ja,R.o=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),R.c=(function(){return new ja(this.a.slice())});function V(){this.C=void 0,this.n=null,this.O=null,this.B=null,this.D=0,this.z=null,this.E=``,this.L=void 0,this.A=void 0,this.F=void 0,this.w=void 0,this.J=!1,this.N=``,this.X=!1,this.Y=!1,this.Z=!1,this.I=void 0}R=V.prototype,R.p=(function(e,t,n,r,i){this.n={},this.z=e,this.E=t;var a=this;return this.F=(e=>e===a),this.N=n,this.X=!0,this.I=(e=>!1),r!==void 0&&(this.A=new V().y(this,r,i,t===`J`)),this}),R.i=(function(e,t,n,r){var i=Object.getOwnPropertyNames(n)[0];return this.n=n,this.E=`L`+t+`;`,this.F=(e=>!!e.n[i]),this.J=e===2,this.N=t,this.Y=e===1,this.I=r||(e=>!!(e&&e.$classData&&e.$classData.n[i])),typeof e!=`number`&&(e.prototype.$classData=this),this}),R.y=(function(e,t,n,r,i){t.prototype.$classData=this;var a=`[`+e.E;this.C=t,this.n={z:1,a:1},this.O=e,this.B=e,this.D=1,this.E=a,this.N=a,this.Z=!0;var o=this;return this.F=i||(e=>o===e),this.w=r?(e=>{for(var n=e.length|0,r=new t(n),i=r.a,a=0;a<n;a=a+1|0){var o=e[a];i[a<<1]=o.l,i[(a<<1)+1|0]=o.h}return r}):n?(e=>new t(new n(e))):(e=>new t(e)),this.I=(e=>e instanceof t),this}),R.a=(function(e){function t(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}var n=t.prototype=new Ca;n.constructor=t,n.o=(function(e,t,n,r){ca(this.a,e,t.a,n,r)}),n.c=(function(){return new t(this.a.slice())}),n.$classData=this;var r=e.B||e,i=e.D+1,a=`[`+e.E;this.C=t,this.n={z:1,a:1},this.O=e,this.B=r,this.D=i,this.E=a,this.N=a,this.Z=!0;var o=(e=>{var t=e.D;return t===i?r.F(e.B):t>i&&r===H});this.F=o,this.w=(e=>new t(e));var s=this;return this.I=(e=>{var t=e&&e.$classData;return!!t&&(t===s||o(t))}),this}),R.r=(function(){return this.A||=new V().a(this),this.A}),R.l=(function(){return this.L||=new Of(this),this.L}),R.R=(function(e){return this===e||this.F(e)}),R.S=(function(){return this.P?this.P.l():null}),R.Q=(function(){return this.O?this.O.l():null}),R.U=(function(e){if(this===Ma)throw Pm(new Fm);return new(this.r()).C(e)});var H=new V;H.n={},H.E=`Ljava.lang.Object;`,H.F=(e=>!e.X),H.N=`java.lang.Object`,H.I=(e=>e!==null),H.A=new V().y(H,B,void 0,!1,(e=>{var t=e.D;return t===1?!e.B.X:t>1})),Sa.prototype.$classData=H;var Ma=new V().p(void 0,`V`,`void`,void 0,void 0),Na=new V().p(!1,`Z`,`boolean`,wa,void 0),Pa=new V().p(0,`C`,`char`,Ta,Uint16Array),Fa=new V().p(0,`B`,`byte`,Ea,Int8Array),Ia=new V().p(0,`S`,`short`,Da,Int16Array),La=new V().p(0,`I`,`int`,Oa,Int32Array),Ra=new V().p(va,`J`,`long`,ka,Int32Array),za=new V().p(0,`F`,`float`,Aa,Float32Array),Ba=new V().p(0,`D`,`double`,ja,Float64Array);new Int8Array(new Int32Array([1]).buffer)[0];function Va(e,t,n){for(var r=new Int32Array(e),i=t.length|0,a=0,o=0,s=0,c=0;o!==i;){var l=t.charCodeAt(o);l<80?c=(c|l-48)<<5:(c|=l-93,a=(a&n)+c|0,r[s]=a,s=s+1|0,c=0),o=o+1|0}return r}function Ha(e,t){return new Oa(Va(e,t,-1))}function Ua(e){return $i(e).gV()+`@`+da(e)}function Wa(e){var t=e.hf;return t===void 0?Ua(e):t}function Ga(){Ka=this,qa().nU(new vm((e=>void 0)),el().iX,!0)}R=Ga.prototype=new z,R.constructor=Ga,R.nU=(function(e,t,n){return new Op(e,n,t,this)}),new V().i(Ga,`com.raquo.airstream.core.Observer$`,{c0:1});var Ka;function qa(){return Ka||=new Ga,Ka}function Ja(e){this.fO=null,this.hg=null,this.fP=0,this.fO=e,this.hg=void 0;var t=uo().f0();this.fP=t===void 0?1:1+t.fP|0,Qa().f4===-1||this.fP>Qa().f4?Zd().f2(new Kg(this,Qa().f4)):no().bH?no().dk.push(this)|0:uo().gB(this)}R=Ja.prototype=new z,R.constructor=Ja;var Ya=new V().i(Ja,`com.raquo.airstream.core.Transaction`,{c3:1});function Xa(){this.f4=0,this.hh=null,Za=this,this.f4=1e3,this.hh=new vm((e=>{throw kf(new Af,`Attempted to run Transaction `+e+` after it was already executed.`)}))}R=Xa.prototype=new z,R.constructor=Xa,R.k1=(function(e){try{e.fO.f(e);var t=e.hg;if(t!==void 0)for(;t.o5();)t.o0().o7(e)}catch(e){var n=e instanceof bd?e:new sv(e);Zd().f2(n)}}),new V().i(Xa,`com.raquo.airstream.core.Transaction$`,{c4:1});var Za;function Qa(){return Za||=new Xa,Za}function $a(e){e.f5.length|0?new Ja(new vm((t=>{for(;(e.f5.length|0)>0;){var n=e.f5.shift();try{n.f(t)}catch(e){var r=e instanceof bd?e:new sv(e);Zd().f2(r)}}for(;(e.dk.length|0)>0;){var i=e.dk.shift();uo().gB(i)}}))):(e.dk.length|0)>0&&new Ja(new vm((t=>{for(;(e.dk.length|0)>0;)uo().gB(e.dk.shift())})))}function eo(){this.bH=!1,this.f5=null,this.dk=null,to=this,this.bH=!1,this.f5=Ao().dA(ou().dj(new(Kc.r()).C([]))),this.dk=Ao().dA(ou().dj(new(Ya.r()).C([])))}R=eo.prototype=new z,R.constructor=eo,new V().i(eo,`com.raquo.airstream.core.Transaction$onStart$`,{c5:1});var to;function no(){return to||=new eo,to}function ro(e,t){return e.dl.get(t)}function io(e,t){e.f6.unshift(t)}function ao(e){return e.f6.shift()}function oo(e,t,n){var r=ro(e,t),i=r===void 0,a=r===void 0?Ao().dA(ou().dj(new(Ya.r()).C([]))):r;a.push(n),i&&e.dl.set(t,a)}function so(e,t){var n=ro(e,t),r=n===void 0||(n.length|0)>0?n:void 0;if(r!==void 0){var i=r.shift();return r.length|0||e.dl.delete(t),i}}function co(){this.f6=null,this.dl=null,lo=this,this.f6=Ao().dA(ou().dj(new(Ya.r()).C([]))),this.dl=/* @__PURE__ */ new Map}R=co.prototype=new z,R.constructor=co,R.gB=(function(e){var t=this.f0();t===void 0?(io(this,e),Qa().k1(e),this.m1(e)):oo(this,t,e)}),R.m1=(function(e){for(var t=e;;){var n=this.f0(),r=t;if(!(n!==void 0&&G().m(r,n)))throw kf(new Af,`Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.`);this.ne(t),t.fO=Qa().hh;var i=this.f0();if(G().m(i,void 0)){if((this.dl.size|0)>0){var a=new Ud(0);throw this.dl.forEach((e=>((t,n)=>{e.dy=e.dy+(t.length|0)|0}))(a)),kf(new Af,`Transaction queue error: Stack cleared, but a total of `+a.dy+` children for `+(this.dl.size|0)+` transactions remain. This is a bug in Airstream.`)}return}Qa().k1(i),t=i}}),R.ne=(function(e){for(var t=e;;){var n=so(this,t);if(G().m(n,void 0)){ao(this);var r=this.f0();if(!G().m(r,void 0))t=r;else return}else{io(this,n);return}}}),R.f0=(function(){return this.f6[0]}),new V().i(co,`com.raquo.airstream.core.Transaction$pendingTransactions$`,{c6:1});var lo;function uo(){return lo||=new co,lo}function fo(e,t){var n=e.cA.indexOf(t)|0;if(n!==-1)e.cA.splice(n,1),e.bl.d()||t.kv();else throw kf(new Af,`Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?`)}function po(e){for(;(e.f7.length|0)>0;)fo(e,e.f7.shift())}function mo(e){this.hi=null,this.cA=null,this.dK=!1,this.f7=null,this.bl=null,this.dL=0,this.hi=e,this.cA=Ao().dA(ou().dj(new(go.r()).C([]))),this.dK=!0,this.f7=Ao().dA(ou().dj(new(go.r()).C([]))),this.bl=d_(),this.dL=0}R=mo.prototype=new z,R.constructor=mo,R.jM=(function(){if(this.bl.d()){var e=no(),t=(()=>{var e=new Su(this.hi);this.bl=new f_(e),this.dK=!1,this.dL=0;for(var t=0,n=this.cA.length|0;t<n;){var r=t+this.dL|0;this.cA[r].ku(e),t=1+t|0}po(this),this.dK=!0,this.dL=0});if(no(),e.bH)t();else{e.bH=!0;try{t()}finally{e.bH=!1,$a(e)}}}else throw kf(new Af,`Can not activate `+this+`: it is already active`)}),R.lR=(function(){if(this.bl.d())throw kf(new Af,`Can not deactivate DynamicOwner: it is not active`);this.dK=!1;for(var e=this.cA,t=0,n=e.length|0;t<n;)e[t].kv(),t=1+t|0;po(this);var r=this.bl;r.d()||r.az().mS(),po(this),this.dK=!0,this.bl=d_()}),R.lt=(function(e,t){t?(this.dL=1+this.dL|0,this.cA.unshift(e)):this.cA.push(e);var n=this.bl;if(!n.d()){var r=n.az();e.ku(r)}}),R.nk=(function(e){this.dK?fo(this,e):this.f7.push(e)}),new V().i(mo,`com.raquo.airstream.ownership.DynamicOwner`,{c7:1});function ho(e,t,n){this.f8=null,this.hj=null,this.f9=null,this.f8=e,this.hj=t,this.f9=d_(),e.lt(this,n)}R=ho.prototype=new z,R.constructor=ho,R.fH=(function(){this.f8.nk(this)}),R.ku=(function(e){var t=no(),n=(()=>{this.f9=this.hj.f(e)});if(no(),t.bH)n();else{t.bH=!0;try{n()}finally{t.bH=!1,$a(t)}}}),R.kv=(function(){var e=this.f9;e.d()||(e.az().fH(),this.f9=d_())});var go=new V().i(ho,`com.raquo.airstream.ownership.DynamicSubscription`,{c8:1});function _o(){}R=_o.prototype=new z,R.constructor=_o,R.nP=(function(e,t,n){return new ho(e,new vm((e=>new f_(t.f(e)))),n)}),R.nB=(function(e,t,n){return new ho(e,new vm((e=>(t.f(e),d_()))),n)}),new V().i(_o,`com.raquo.airstream.ownership.DynamicSubscription$`,{c9:1});var vo;function yo(){return vo||=new _o,vo}function bo(e){e.dM=Ao().dA(ou().dj(new(Eo.r()).C([])))}function xo(e){for(var t=e.dM,n=0,r=t.length|0;n<r;)wo(t[n]),n=1+n|0;e.dM.length=0}function So(e,t){var n=e.dM.indexOf(t)|0;if(n!==-1)e.dM.splice(n,1);else throw kf(new Af,`Can not remove Subscription from Owner: subscription not found.`)}function Co(e,t){e.dM.push(t)}function wo(e){if(!e.fR)e.hl.a3(),e.fR=!0;else throw kf(new Af,`Can not kill Subscription: it was already killed.`)}function To(e,t){this.hm=null,this.hl=null,this.fR=!1,this.hm=e,this.hl=t,this.fR=!1,e.nb(this)}R=To.prototype=new z,R.constructor=To,R.fH=(function(){wo(this),So(this.hm,this)});var Eo=new V().i(To,`com.raquo.airstream.ownership.Subscription`,{cc:1});function Do(e,t){this.hn=null,this.ho=null,this.cB=null,this.dm=!1,this.hn=e,this.ho=t,this.cB=d_(),this.dm=!1}R=Do.prototype=new z,R.constructor=Do,R.mP=(function(){var e=this.cB;return!e.d()&&!e.az().f8.bl.d()}),R.nv=(function(e){if(this.dm)throw kf(new Af,`Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var t=this.cB;if(t.d())var n=!1;else var r=t.az().f8,n=e===null?r===null:e===r;if(!n){this.mP()&&!e.bl.d()&&(this.dm=!0);var i=this.cB;i.d()||(i.az().fH(),this.cB=d_());var a=yo().nP(e,new vm((e=>(this.dm||this.hn.a3(),new To(e,new _m((()=>{this.dm||this.ho.a3()})))))),!1);this.cB=new f_(a),this.dm=!1}}),R.lH=(function(){if(this.dm)throw kf(new Af,`Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var e=this.cB;e.d()||e.az().fH(),this.cB=d_()}),new V().i(Do,`com.raquo.airstream.ownership.TransferableSubscription`,{cd:1});function Oo(){}R=Oo.prototype=new z,R.constructor=Oo,R.dA=(function(e){return[...mu().nK(e)]}),new V().i(Oo,`com.raquo.ew.JsArray$`,{ce:1});var ko;function Ao(){return ko||=new Oo,ko}function jo(){}R=jo.prototype=new z,R.constructor=jo,R.mo=(function(e,t){for(var n=0,r=e.length|0;n<r;)t(e[n]),n=1+n|0}),new V().i(jo,`com.raquo.ew.JsArray$RichJsArray$`,{cf:1});var Mo;function No(){return Mo||=new jo,Mo}function Po(){this.hp=null,Fo=this,document.createElement(`template`),this.lP(Y().G.nE().nF()),this.hp=/* @__PURE__ */ RegExp(` `,`g`)}R=Po.prototype=new z,R.constructor=Po,R.lx=(function(e,t){try{return e.appendChild(t),!0}catch(e){var n=e instanceof bd?e:new sv(e);if(n instanceof sv&&n.bC instanceof DOMException)return!1;throw n instanceof sv?n.bC:n}}),R.mQ=(function(e,t){for(var n=e;;){if(n.parentNode!==null)var r=n.parentNode;else var i=n.host,r=i===void 0?null:i;if(r===null)return!1;if(G().m(t,r))return!0;n=r}}),R.lO=(function(e){return document.createElement(e.h2())}),R.mA=(function(e,t){var n=this.mB(e,t);return n===void 0?void 0:t.dN.ed(n)}),R.mB=(function(e,t){var n=e.c9.getAttributeNS(null,t.cC);return n===null?void 0:n}),R.kF=(function(e,t,n){this.ns(e,t,t.dN.dC(n))}),R.ns=(function(e,t,n){n===null?this.nj(e,t):e.c9.setAttribute(t.cC,n)}),R.nj=(function(e,t){e.c9.removeAttribute(t.cC)}),R.nt=(function(e,t,n){this.nu(e,t,t.hU.dC(n))}),R.nu=(function(e,t,n){e.c9[t.hV]=n}),R.lP=(function(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e.i9)}),R.mE=(function(e,t){var n=this.mF(e,t);return n===void 0?void 0:t.fY.ed(n)}),R.mF=(function(e,t){var n=e.h8(),r=t.fd,i=n.getAttributeNS(r.d()?null:r.az(),t.fZ);return i===null?void 0:i}),R.nw=(function(e,t,n){this.nx(e,t,t.fY.dC(n))}),R.nx=(function(e,t,n){if(n===null)this.nl(e,t);else{var r=t.fd;if(r.d())e.h8().setAttribute(t.fc,n);else{var i=r.az();e.h8().setAttributeNS(i,t.fc,n)}}}),R.nl=(function(e,t){var n=e.h8(),r=t.fd;n.removeAttributeNS(r.d()?null:r.az(),t.fZ)}),R.lQ=(function(e){return document.createTextNode(e)}),R.lT=(function(e,t){for(var n=t,r=e;;){if(r===null)return n;var i=r.parentNode,a=new hx(this.lS(r),n);r=i,n=a}}),R.lS=(function(e){if(e instanceof HTMLElement){var t=e.id;if(_l(),t!==``)var n=`#`+t;else var r=e.className,n=(_l(),r===``?``:`.`+r.replace(this.hp,`.`));return e.tagName.toLowerCase()+n}return e.nodeName}),new V().i(Po,`com.raquo.laminar.DomApi$`,{cg:1});var Fo;function Io(){return Fo||=new Po,Fo}function Lo(e,t,n){this.fT=null,this.hq=null,this.fS=null,this.fT=e,this.hq=t,this.fS=n}R=Lo.prototype=new z,R.constructor=Lo,R.bF=(function(e){this.fT===null?this.fS===null?rl().mq(this.hq,e):No().mo(this.fS,yp().mw(e)):this.fT.bF(e)}),new V().i(Lo,`com.raquo.laminar.Seq`,{ch:1});function Ro(){zo=this,$()}R=Ro.prototype=new z,R.constructor=Ro,new V().i(Ro,`com.raquo.laminar.Seq$`,{ci:1});var zo;function Bo(){return zo||=new Ro,zo}function Vo(e){qa(),Zd()}function Ho(e){e.kQ=ms()}function Uo(e){Wo(e,new vm((e=>{e.hW.c9.focus()})))}function Wo(e,t){return new Fu(new vm((e=>{var n=new Hd(!e.dP.bl.d()),r=new vm((e=>{n.fr?n.fr=!1:t.f(e)}));yo().nB(e.dP,new vm((e=>(t=>{r.f(new us(e,t))}))(e)),!1)})),ms())}function Go(){this.b9=null,this.hP=null,this.hQ=!1,this.hO=null,Ko=this,this.b9=new wu(qo()),new wu(qo()),new wu(qo()),this.hO=new Cu}R=Go.prototype=new z,R.constructor=Go,R.lb=(function(){return this.hQ||=(this.hP=new Tu(this),!0),this.hP}),new V().i(Go,`com.raquo.laminar.codecs.package$`,{cq:1});var Ko;function qo(){return Ko||=new Go,Ko}function Jo(e){e.fU=Yo(e,`class`,` `),e.hz=e.fU}function Yo(e,t,n){var r=ku(new Au,t,qo().b9);return new Eu(r.cC,new vm((e=>{var t=Io().mA(e,r);return t===void 0?``:t})),new ym(((e,t)=>{Io().kF(e,r,t)})),n)}function Xo(e){e.kP=Zo(e,`class`,` `)}function Zo(e,t,n){var r=new Nu(t,qo().b9,d_());return new Eu(r.fc,new vm((e=>{var t=Io().mE(e,r);return t===void 0?``:t})),new ym(((e,t)=>{Io().nw(e,r,t)})),n)}function Qo(e){this.fa=null,this.fa=e}R=Qo.prototype=new z,R.constructor=Qo,R.kw=(function(e,t){try{this.fa.cr(e,t)}catch(e){var n=e instanceof bd?e:new sv(e);Zd().f2(n)}}),R.lI=(function(e){return new Qo(new ym(((t,n)=>{this.fa.cr(t,n),e.fa.cr(t,n)})))}),R.ly=(function(e){return e===void 0?this:e.lI(this)}),new V().i(Qo,`com.raquo.laminar.inserters.InserterHooks`,{cF:1});function $o(){}R=$o.prototype=new z,R.constructor=$o,R.eh=(function(e,t){return new xm(e,void 0)}),new V().i($o,`com.raquo.laminar.inserters.StaticChildInserter$`,{cH:1});var es;function ts(){return es||=new $o,es}function ns(){}R=ns.prototype=new z,R.constructor=ns,R.kt=(function(e,t){if(e===``)return $();var n=Fx(new Lx,e.split(t).filter((e=>(_l(),e!==``))));return qh(),$().h6(n)}),new V().i(ns,`com.raquo.laminar.keys.CompositeKey$`,{cK:1});var rs;function is(){return rs||=new ns,rs}function as(){}R=as.prototype=new z,R.constructor=as;function os(){}os.prototype=R;function ss(){this.kR=null,this.kS=null,this.kT=null,this.kU=null,this.kR=`http://www.w3.org/2000/svg`,this.kS=`http://www.w3.org/1999/xlink`,this.kT=`http://www.w3.org/XML/1998/namespace`,this.kU=`http://www.w3.org/2000/xmlns/`}R=ss.prototype=new z,R.constructor=ss,R.n3=(function(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`xlink`:return`http://www.w3.org/1999/xlink`;case`xml`:return`http://www.w3.org/XML/1998/namespace`;case`xmlns`:return`http://www.w3.org/2000/xmlns/`;default:throw new Xm(e)}}),new V().i(ss,`com.raquo.laminar.keys.SvgAttr$`,{cQ:1});var cs;function ls(){return cs||=new ss,cs}function us(e,t){this.hW=null,this.hW=e}R=us.prototype=new z,R.constructor=us,new V().i(us,`com.raquo.laminar.lifecycle.MountContext`,{cR:1});var ds=new V().i(1,`com.raquo.laminar.modifiers.Modifier`,{a1:1});function fs(){this.kV=null,ps=this,this.kV=new Pu}R=fs.prototype=new z,R.constructor=fs,new V().i(fs,`com.raquo.laminar.modifiers.Modifier$`,{cU:1});var ps;function ms(){return ps||=new fs,ps}function hs(){this.dn=null,gs=this,this.dn=new Iu}R=hs.prototype=new z,R.constructor=hs,new V().i(hs,`com.raquo.laminar.modifiers.RenderableNode$`,{cY:1});var gs;function _s(){return gs||=new hs,gs}function vs(){this.dO=null,ys=this,this.dO=new Bu(new vm((e=>e)),bs()),new Bu(new vm((e=>``+(e|0))),bs()),new Bu(new vm((e=>``+ +e)),bs()),new Bu(new vm((e=>``+!!e)),bs()),new Bu(new vm((e=>e.nJ())),bs())}R=vs.prototype=new z,R.constructor=vs,new V().i(vs,`com.raquo.laminar.modifiers.RenderableText$`,{d3:1});var ys;function bs(){return ys||=new vs,ys}function xs(){}R=xs.prototype=new z,R.constructor=xs,R.fA=(function(e,t,n){var r=new f_(e);t.kO(r),n!==void 0&&n.kw(e,t);var i=Io().lx(e.dF(),t.dF());return i&&t.kG(r),i}),new V().i(xs,`com.raquo.laminar.nodes.ParentNode$`,{d5:1});var Ss;function Cs(){return Ss||=new xs,Ss}function ws(e){this.i6=null,this.i6=new Qo(new ym(((t,n)=>{matchResult1:{var r=n.dF();if(r instanceof Element){r.setAttribute(`slot`,e);break matchResult1}if(r instanceof Text){var i=Zd(),a=r.textContent,o=t.dF().tagName;i.f2(kf(new Af,"Error: You tried to insert a raw text node `"+a+"` into the `"+e+"` slot of <"+o.toLowerCase()+`>.
 - Cause: This is not possible: named slots only accept elements. Your node was inserted into the default slot instead.
 - Suggestion: Wrap your text node into \`span()\``));break matchResult1}}})))}R=ws.prototype=new z,R.constructor=ws,R.eb=(function(e){return e.bS(new vm((e=>e.nT(this.i6))))}),new V().i(ws,`com.raquo.laminar.nodes.Slot`,{d9:1});function Ts(){}R=Ts.prototype=new z,R.constructor=Ts,R.lv=(function(){Ds().ma(),Ds().mb(),Ds().mc(),Ds().md(),Ds().me(),Ds().mf(),Ds().mg(),Ds().mh(),Ds().mi()}),R.ma=(function(){var e=document.querySelector(`#example1`);Zc().cs(e).d()||(Y(),new nf(e,yf().aL(new Q([new J((e=>e.dH().D(`Web Awesome rocks!`)))]),new Q([]))))}),R.mb=(function(){var e=document.querySelector(`#example2`);Zc().cs(e).d()||(Y(),new nf(e,yf().aL(new Q(_u().fJ(new(Kc.r()).C([new J((e=>e.dH().D(`Copied from a custom trigger`))),new J((e=>e.nM().n8()))]))),new Q(_u().fJ(new(ds.r()).C([sf().aL(new Q(_u().fJ(new(Kc.r()).C([new J((e=>e.lw().mm()))]))),new Q(_u().fJ(new(ds.r()).C([Qd(Y().G,`Copy text`,bs().dO)]))))]))))))}),R.mc=(function(){var e=document.querySelector(`#example3`);Zc().cs(e).d()||(Y(),new nf(e,yf().aL(new Q([new J((e=>e.dH().D(`Custom labels are easy`))),new J((e=>e.lN().D(`Click to copy`))),new J((e=>e.nD().D(`You did it!`))),new J((e=>e.m9().D(`Whoops, your browser doesn't support this!`)))]),new Q([]))))}),R.md=(function(){var e=document.querySelector(`#example4`);Zc().cs(e).d()||(Y(),new nf(e,yf().aL(new Q([new J((e=>e.dH().D(`Copied from a custom button`))),new J((e=>$d(Y().G,js().k5().eb(new Q([(Y(),ts().eh(Sf().aL(new Q([new J((e=>e.eg().D(`clipboard`))),new J((e=>e.hc().D(`regular`)))]),new Q([])),_s().dn))])),Lc().dp,zu()))),new J((e=>$d(Y().G,js().kI().eb(new Q([(Y(),ts().eh(Sf().aL(new Q([new J((e=>e.eg().D(`thumbs-up`))),new J((e=>e.hc().D(`solid`)))]),new Q([])),_s().dn))])),Lc().dp,zu()))),new J((e=>$d(Y().G,js().kf().eb(new Q([(Y(),ts().eh(Sf().aL(new Q([new J((e=>e.eg().D(`xmark`))),new J((e=>e.hc().D(`solid`)))]),new Q([])),_s().dn))])),Lc().dp,zu())))]),new Q([]))))}),R.me=(function(){var e=document.querySelector(`#example5`);Zc().cs(e).d()||(Y(),new nf(e,Y().G.lY().d9(new Q([Y().G.kH().d9(new Q([Y().G.gX().D(`my-phone`),Qd(Y().G,`+1 (234) 456-7890`,bs().dO)])),Qd(Y().G,` `,bs().dO),yf().aL(new Q([new J((e=>e.fF().D(`my-phone`)))]),new Q([])),Y().G.gF().d9(new Q([])),Y().G.gF().d9(new Q([])),Y().G.kH().d9(new Q([Y().G.hz.jL(`flex items-center gap-1`),Tf().aL(new Q([new J((e=>e.mJ().D(`my-input`))),new J((e=>e.nN().nI())),new J((e=>(Tf().nL(),Y().G).nQ().D(`User input`)))]),new Q([Y().G.nA().D(`display: inline-block; max-width: 300px;`)])),yf().aL(new Q([new J((e=>e.fF().D(`my-input.value`)))]),new Q([]))])),Y().G.gF().d9(new Q([])),Y().G.le().d9(new Q([Y().G.gX().D(`my-link`),Y().G.mI().D(`https://webawesome.com/`),Qd(Y().G,`Web Awesome Website`,bs().dO)])),Qd(Y().G,` `,bs().dO),yf().aL(new Q([new J((e=>e.fF().D(`my-link[href]`)))]),new Q([]))]))))}),R.mf=(function(){var e=document.querySelector(`#example6`);Zc().cs(e).d()||(Y(),new nf(e,yf().aL(new Q([new J((e=>e.fF().D(`i-do-not-exist`)))]),new Q([]))))}),R.mg=(function(){var e=document.querySelector(`#example7`);Zc().cs(e).d()||(Y(),new nf(e,yf().aL(new Q([new J((e=>e.dH().D(`You can't copy me`))),new J((e=>e.lX().D(!0)))]),new Q([]))))}),R.mh=(function(){var e=document.querySelector(`#example8`);Zc().cs(e).d()||(Y(),new nf(e,yf().aL(new Q([new J((e=>e.dH().D(`Web Awesome rocks!`))),new J((e=>e.mk().D(250)))]),new Q([]))))}),R.mi=(function(){var e=document.querySelector(`#example9`);Zc().cs(e).d()||(Y(),new nf(e,yf().aL(new Q([new J((e=>e.dH().D(`I'm so stylish`))),new J((e=>$d(Y().G,js().k5().eb(new Q([(Y(),ts().eh(Sf().aL(new Q([new J((e=>e.eg().D(`clipboard`)))]),new Q([])),_s().dn))])),Lc().dp,zu()))),new J((e=>$d(Y().G,js().kI().eb(new Q([(Y(),ts().eh(Sf().aL(new Q([new J((e=>e.eg().D(`thumbs-up`)))]),new Q([])),_s().dn))])),Lc().dp,zu()))),new J((e=>$d(Y().G,js().kf().eb(new Q([(Y(),ts().eh(Sf().aL(new Q([new J((e=>e.eg().D(`thumbs-down`)))]),new Q([])),_s().dn))])),Lc().dp,zu())))]),new Q([Y().G.fU.jL(`custom-styles`)]))))}),new V().i(Ts,`examples.copyButton.Main$package$`,{dd:1});var Es;function Ds(){return Es||=new Ts,Es}function Os(e){try{Ds().lv()}catch(e){throw e}}function ks(){this.iA=null,this.iB=!1,this.iE=null,this.iF=!1,this.iC=null,this.iD=!1}R=ks.prototype=new z,R.constructor=ks,R.k5=(function(){return this.iB||=(this.iA=new ws(`copy-icon`),!0),this.iA}),R.kI=(function(){return this.iF||=(this.iE=new ws(`success-icon`),!0),this.iE}),R.kf=(function(){return this.iD||=(this.iC=new ws(`error-icon`),!0),this.iC}),new V().i(ks,`io.github.nguyenyou.webawesome.laminar.CopyButton$slots$`,{dj:1});var As;function js(){return As||=new ks,As}function Ms(){}R=Ms.prototype=new z,R.constructor=Ms,R.nr=(function(e,t){var n=sa;n.setFloat64(0,e,!0);var r=n.getInt32(0,!0)|0,i=n.getInt32(4,!0)|0,a=2047&(i>>>20|0),o=a+t|0,s=-2146435073&i,c=0,l=0;if(c=r,l=s,!((a-1|0)>>>0<=2045)){var u=2147483647&i;if((r|u)===0||u>=2146435072)return e;var d=1048575&i,f=d===0?32+Math.clz32(r)|0:Math.clz32(d);o=o-(f-12|0)|0;var p=-2147483648&i,m=f-11|0,h=32&m?0:r<<m,g=p|1048575&(32&m?r<<m:(r>>>1|0)>>>~m|0|i<<m);c=h,l=g}if((o-1|0)>>>0<=2045){var _=o,v=c,y=l,b=_<<20|y,x=sa;return x.setInt32(0,v,!0),x.setInt32(4,b,!0),+x.getFloat64(0,!0)}if((53+o|0)>>>0<=53){var S=54+o|0,C=c,w=l,T=S<<20|w,E=sa;return E.setInt32(0,C,!0),E.setInt32(4,T,!0),5551115123125783e-32*E.getFloat64(0,!0)}var ee=2047&~(t>>31),te=-2147483648&i,D=ee<<20|te,O=sa;return O.setInt32(0,0,!0),O.setInt32(4,D,!0),+O.getFloat64(0,!0)}),new V().i(Ms,`java.lang.Math$`,{dF:1});var Ns;function Ps(){return Ns||=new Ms,Ns}function Fs(e,t){for(var n=sc().bV(`^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$`),r=[],i=0;i<(t.length|0);){var a=t[i];if(a!==``){var o=n.exec(a);if(o!==null){var s=Is(e,o[1]),c=s[0],l=s[1],u=o[2],d=o[3],f=parseInt(d),p=o[4];r.push(new pd(c,l,u,f|0,p===void 0?-1:parseInt(p)|0))}else r.push(new pd(`<jscode>`,a,null,-1,-1))|0}i=1+i|0}var m=r.length|0,h=new(md.r()).C(m);for(i=0;i<m;)h.a[i]=r[i],i=1+i|0;return h}function Is(e,t){var n=sc().bV(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$`),r=sc().bV(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$`),i=sc().bV(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$`),a=sc().bV(`^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$`),o=sc().bV(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$`),s=n.exec(t),c=s===null?r.exec(t):s;if(c!==null)return[Ls(e,c[1]),Ws(e,c[2])];var l=i.exec(t),u=l===null?a.exec(t):l;if(u!==null)return[Ls(e,u[1]),`<init>`];var d=o.exec(t);return d===null?[`<jscode>`,t]:[Ls(e,d[1]),`<clinit>`]}function Ls(e,t){var n=zs(e);if(bc().gd.call(n,t))var r=zs(e)[t];else var r=tc(e,0,t);return r.split(`_`).join(`.`).split(`＿`).join(`_`)}function Rs(e){if(!((1&e.bs)<<24>>24)){var t={};t.O=`java_lang_Object`,t.T=`java_lang_String`;for(var n=0;n<=22;){if(n>=2){var r=`T`+n;t[r]=`scala_Tuple`+n}var i=`F`+n;t[i]=`scala_Function`+n,n=1+n|0}e.ga=t,e.bs=(1|e.bs)<<24>>24}return e.ga}function zs(e){return(1&e.bs)<<24>>24?e.ga:Rs(e)}function Bs(e){if(!((2&e.bs)<<24>>24)){var t={};t.sjsr_=`scala_scalajs_runtime_`,t.sjs_=`scala_scalajs_`,t.sci_=`scala_collection_immutable_`,t.scm_=`scala_collection_mutable_`,t.scg_=`scala_collection_generic_`,t.sc_=`scala_collection_`,t.sr_=`scala_runtime_`,t.s_=`scala_`,t.jl_=`java_lang_`,t.ju_=`java_util_`,e.gb=t,e.bs=(2|e.bs)<<24>>24}return e.gb}function Vs(e){return(2&e.bs)<<24>>24?e.gb:Bs(e)}function Hs(e){return(4&e.bs)<<24>>24||(e.g9=Object.keys(Vs(e)),e.bs=(4|e.bs)<<24>>24),e.g9}function Us(e){return(4&e.bs)<<24>>24?e.g9:Hs(e)}function Ws(e,t){if(t.startsWith(`init___`))return`<init>`;var n=t.indexOf(`__`)|0;return n<0?t:t.substring(0,n)}function Gs(e,t){return t?t.arguments&&t.stack?Ks(e,t):t.stack&&t.sourceURL?Ys(e,t):t.stack&&t.number?Js(e,t):t.stack&&t.fileName?qs(e,t):t.message&&t[`opera#sourceloc`]?t.stacktrace?t.message.indexOf(`
`)>-1&&t.message.split(`
`).length>t.stacktrace.split(`
`).length?Xs(e,t):Zs(e,t):Xs(e,t):t.message&&t.stack&&t.stacktrace?t.stacktrace.indexOf(`called from line`)<0?Qs(e,t):$s(e,t):t.stack&&!t.fileName?Ks(e,t):ec(e,t):[]}function Ks(e,t){return(t.stack+`
`).replace(sc().bV(`^[\\s\\S]+?\\s+at\\s+`),` at `).replace(sc().bk(`^\\s+(at eval )?at\\s+`,`gm`),``).replace(sc().bk(`^([^\\(]+?)([\\n])`,`gm`),`{anonymous}() ($1)$2`).replace(sc().bk(`^Object.<anonymous>\\s*\\(([^\\)]+)\\)`,`gm`),`{anonymous}() ($1)`).replace(sc().bk(`^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(0,-1)}function qs(e,t){return t.stack.replace(sc().bk(`(?:\\n@:0)?\\s+$`,`m`),``).replace(sc().bk(`^(?:\\((\\S*)\\))?@`,`gm`),`{anonymous}($1)@`).split(`
`)}function Js(e,t){return t.stack.replace(sc().bk(`^\\s*at\\s+(.*)$`,`gm`),`$1`).replace(sc().bk(`^Anonymous function\\s+`,`gm`),`{anonymous}() `).replace(sc().bk(`^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(1)}function Ys(e,t){return t.stack.replace(sc().bk(`\\[native code\\]\\n`,`m`),``).replace(sc().bk(`^(?=\\w+Error\\:).*$\\n`,`m`),``).replace(sc().bk(`^@`,`gm`),`{anonymous}()@`).split(`
`)}function Xs(e,t){for(var n=sc().bk(`Line (\\d+).*script (?:in )?(\\S+)`,`i`),r=t.message.split(`
`),i=[],a=2,o=r.length|0;a<o;){var s=n.exec(r[a]);s!==null&&i.push(`{anonymous}()@`+s[2]+`:`+s[1])|0,a=2+a|0}return i}function Zs(e,t){for(var n=sc().bk(`Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$`,`i`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[3],l=c===void 0?`{anonymous}`:c;i.push(l+`()@`+s[2]+`:`+s[1])|0}a=2+a|0}return i}function Qs(e,t){for(var n=sc().bV(`^(.*)@(.+):(\\d+)$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[1],l=c===void 0?`global code`:c+`()`;i.push(l+`@`+s[2]+`:`+s[3])|0}a=1+a|0}return i}function $s(e,t){for(var n=sc().bV(`^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[4]+`:`+s[1]+`:`+s[2],l=s[2],u=(l===void 0?`global code`:l).replace(sc().bV(`<anonymous function: (\\S+)>`),`$1`).replace(sc().bV(`<anonymous function>`),`{anonymous}`);i.push(u+`@`+c)|0}a=2+a|0}return i}function ec(e,t){return[]}function tc(e,t,n){for(;;)if(t<(Us(e).length|0)){var r=Us(e)[t];if(n.startsWith(r))return``+Vs(e)[r]+n.substring(r.length);t=1+t|0}else return n.startsWith(`L`)?n.substring(1):n}function nc(){this.ga=null,this.gb=null,this.g9=null,this.bs=0}R=nc.prototype=new z,R.constructor=nc,R.mj=(function(e){return Fs(this,Gs(this,e))}),new V().i(nc,`java.lang.StackTrace$`,{dL:1});var rc;function ic(){return rc||=new nc,rc}function ac(){}R=ac.prototype=new z,R.constructor=ac,R.bV=(function(e){return new RegExp(e)}),R.bk=(function(e,t){return new RegExp(e,t)}),new V().i(ac,`java.lang.StackTrace$StringRE$`,{dM:1});var oc;function sc(){return oc||=new ac,oc}function cc(){this.iN=null,this.kW=null,lc=this,this.iN=new lv(!1),this.kW=new lv(!0)}R=cc.prototype=new z,R.constructor=cc,new V().i(cc,`java.lang.System$Streams$`,{dQ:1});var lc;function uc(){return lc||=new cc,lc}function dc(e){var t={};return t[`java.version`]=`1.8`,t[`java.vm.specification.version`]=`1.8`,t[`java.vm.specification.vendor`]=`Oracle Corporation`,t[`java.vm.specification.name`]=`Java Virtual Machine Specification`,t[`java.vm.name`]=`Scala.js`,t[`java.vm.version`]=`1.22.0`,t[`java.specification.version`]=`1.8`,t[`java.specification.vendor`]=`Oracle Corporation`,t[`java.specification.name`]=`Java Platform API Specification`,t[`file.separator`]=`/`,t[`path.separator`]=`:`,t[`line.separator`]=`
`,t}function fc(){this.gc=null,this.iO=null,pc=this,this.gc=dc(this),this.iO=null}R=fc.prototype=new z,R.constructor=fc,R.gU=(function(e,t){if(this.gc!==null){var n=this.gc;return bc().gd.call(n,e)?n[e]:t}return this.iO.gU(e,t)}),new V().i(fc,`java.lang.System$SystemProperties$`,{dR:1});var pc;function mc(){return pc||=new fc,pc}function hc(){this.iP=null,gc=this,this.iP=new vd(void 0)}R=hc.prototype=new z,R.constructor=hc,new V().i(hc,`java.lang.Thread$`,{dS:1});var gc;function _c(){return gc||=new hc,gc}function vc(){this.gd=null,yc=this,this.gd=Object.prototype.hasOwnProperty}R=vc.prototype=new z,R.constructor=vc,new V().i(vc,`java.lang.Utils$Cache$`,{dU:1});var yc;function bc(){return yc||=new vc,yc}function xc(e,t){return e===t}function Sc(e){return 0}function Cc(e,t){return!!(e&&e.$classData&&e.$classData.D===t&&e.$classData.B.n.b4)}var wc=new V().i(0,`java.lang.Void`,{b4:1},(e=>e===void 0));function Tc(e,t){throw Nm(new Fm,`argument type mismatch`)}function Ec(){}R=Ec.prototype=new z,R.constructor=Ec,R.br=(function(e){return e instanceof B||e instanceof wa||e instanceof Ta||e instanceof Ea||e instanceof Da||e instanceof Oa?e.a.length:e instanceof ka?e.a.length>>>1|0:(e instanceof Aa||e instanceof ja||Tc(this,e),e.a.length)}),new V().i(Ec,`java.lang.reflect.Array$`,{dV:1});var Dc;function Oc(){return Dc||=new Ec,Dc}function kc(){}R=kc.prototype=new z,R.constructor=kc,R.lD=(function(e,t){for(var n=0,r=e.a.length;;)if(n===r)return~n;else{var i=(n+r|0)>>>1|0,a=e.a[i],o=t===a?0:t<a?-1:1;if(o<0){r=i;continue}if(o!==0){n=1+i|0;continue}return i}}),R.kb=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length>>>1|0;if((t.a.length>>>1|0)!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a,o=i<<1,s=a[o],c=a[o+1|0],l=r,u=t.a,d=l<<1,f=u[d],p=u[d+1|0];if((s^f|c^p)!==0)return!1;r=1+r|0}return!0}),R.gJ=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),R.kc=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),R.ka=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),R.k9=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),R.kd=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),R.L=(function(e,t){var n=e.a.length,r=t<n?t:n,i=$i(e).a5.Q().a5.U(t);return e.o(0,i,0,r),i}),R.U=(function(e,t,n){if(t>n)throw Nm(new Fm,t+` > `+n);var r=e.a.length,i=n-t|0,a=r-t|0,o=i<a?i:a,s=$i(e).a5.Q().a5.U(i);return e.o(t,s,0,o),s}),new V().i(kc,`java.util.Arrays$`,{dW:1});var Ac;function U(){return Ac||=new kc,Ac}function jc(e,t){return Pc().kK(e,t)}function Mc(){}R=Mc.prototype=new z,R.constructor=Mc,R.kK=(function(e,t){if(t===e>>31)return``+e;if(-2097152&(t^t>>10)){var n=t>>31,r=e^n,i=r-n|0,a=4294967296*(((t^n)+(i>>>0<r>>>0|0)|0)>>>0)+(i>>>0),o=+Math.floor(1.0000000000000265e-9*a),s=i-Math.imul(1e9,o|0)|0;s<0&&(--o,s=1e9+s|0);var c=``+s,l=o,u=c.length,d=``+l+`000000000`.substring(u)+c;return t<0?`-`+d:d}return``+(4294967296*t+(e>>>0))}),R.kl=(function(e){if(e<-0x8000000000000000)return _a(0,-2147483648);if(e>=0x8000000000000000)return _a(-1,2147483647);var t=e|0,n=23283064365386963e-26*e|0;return _a(t,e<0&&t!==0?n-1|0:n)}),R.lZ=(function(e,t,n,r){var i=t>>31,a=e^i,o=a-i|0,s=(t^i)+(o>>>0<a>>>0|0)|0,c=r>>31,l=n^c,u=l-c|0,d=(r^c)+(u>>>0<l>>>0|0)|0;if(d|-2097152&u){var f=(4294967296*(s>>>0)+(o>>>0))/(4294967296*(d>>>0)+(u>>>0))+.00390625,p=f|0,m=23283064365386963e-26*f|0,h=65535&u,g=u>>>16|0,_=65535&p,v=p>>>16|0,y=Math.imul(h,_),b=Math.imul(g,_),x=Math.imul(h,v),S=y+((b+x|0)<<16)|0,C=(y>>>16|0)+x|0;if(((s-((((Math.imul(u,m)+Math.imul(d,p)|0)+Math.imul(g,v)|0)+(C>>>16|0)|0)+(((65535&C)+b|0)>>>16|0)|0)|0)-((o-S|0)>>>0>o>>>0|0)|0)<0)var w=p-1|0,T=(m-1|0)+(w!==-1|0)|0,E=w,ee=T;else var E=p,ee=m}else var te=(s>>>0)/(ia(u)>>>0)|0,E=(4294967296*(s-Math.imul(u,te)|0)+(o>>>0))/u|0,ee=te;if((t^r)>=0)return _a(E,ee);var D=-E|0;return _a(D,(-ee|0)-(D!==0|0)|0)}),R.m0=(function(e,t,n,r){if(!(r|-2097152&n)){var i=(t>>>0)/(ia(n)>>>0)|0;return _a((4294967296*(t-Math.imul(n,i)|0)+(e>>>0))/n|0,i)}if(r>=0){var a=(4294967296*(t>>>0)+(e>>>0))/(4294967296*(r>>>0)+(n>>>0))+.00390625,o=a|0,s=23283064365386963e-26*a|0,c=65535&n,l=n>>>16|0,u=65535&o,d=o>>>16|0,f=Math.imul(c,u),p=Math.imul(l,u),m=Math.imul(c,d),h=f+((p+m|0)<<16)|0,g=(f>>>16|0)+m|0;if(((t-((((Math.imul(n,s)+Math.imul(r,o)|0)+Math.imul(l,d)|0)+(g>>>16|0)|0)+(((65535&g)+p|0)>>>16|0)|0)|0)-((e-h|0)>>>0>e>>>0|0)|0)<0){var _=o-1|0;return _a(_,(s-1|0)+(_!==-1|0)|0)}return _a(o,s)}return(t===r?e>>>0<n>>>0:t>>>0<r>>>0)?_a(0,0):_a(1,0)}),R.nh=(function(e,t,n,r){var i=t>>31,a=e^i,o=a-i|0,s=(t^i)+(o>>>0<a>>>0|0)|0,c=r>>31,l=n^c,u=l-c|0,d=(r^c)+(u>>>0<l>>>0|0)|0;if(d|-2097152&u){var f=(4294967296*(s>>>0)+(o>>>0))/(4294967296*(d>>>0)+(u>>>0))+.00390625,p=f|0,m=23283064365386963e-26*f|0,h=65535&u,g=u>>>16|0,_=65535&p,v=p>>>16|0,y=Math.imul(h,_),b=Math.imul(g,_),x=Math.imul(h,v),S=y+((b+x|0)<<16)|0,C=(y>>>16|0)+x|0,w=(((Math.imul(u,m)+Math.imul(d,p)|0)+Math.imul(g,v)|0)+(C>>>16|0)|0)+(((65535&C)+b|0)>>>16|0)|0,T=o-S|0,E=(s-w|0)-(T>>>0>o>>>0|0)|0;if(E<0)var ee=T+u|0,te=(E+d|0)+(ee>>>0<T>>>0|0)|0,D=ee,O=te;else var D=T,O=E}else var ne=(4294967296*((s>>>0)%(ia(u)>>>0)|0)+(o>>>0))/u|0,D=o-Math.imul(u,ne)|0,O=0;if(t<0){var re=-D|0;return _a(re,(-O|0)-(re!==0|0)|0)}return _a(D,O)}),R.ni=(function(e,t,n,r){if(!(r|-2097152&n)){var i=(4294967296*((t>>>0)%(ia(n)>>>0)|0)+(e>>>0))/n|0;return _a(e-Math.imul(n,i)|0,0)}if(r>=0){var a=(4294967296*(t>>>0)+(e>>>0))/(4294967296*(r>>>0)+(n>>>0))+.00390625,o=a|0,s=23283064365386963e-26*a|0,c=65535&n,l=n>>>16|0,u=65535&o,d=o>>>16|0,f=Math.imul(c,u),p=Math.imul(l,u),m=Math.imul(c,d),h=f+((p+m|0)<<16)|0,g=(f>>>16|0)+m|0,_=(((Math.imul(n,s)+Math.imul(r,o)|0)+Math.imul(l,d)|0)+(g>>>16|0)|0)+(((65535&g)+p|0)>>>16|0)|0,v=e-h|0,y=(t-_|0)-(v>>>0>e>>>0|0)|0;if(y<0){var b=v+n|0;return _a(b,(y+r|0)+(b>>>0<v>>>0|0)|0)}return _a(v,y)}if(t===r?e>>>0<n>>>0:t>>>0<r>>>0)return _a(e,t);var x=e-n|0;return _a(x,(t-r|0)-(x>>>0>e>>>0|0)|0)}),new V().i(Mc,`org.scalajs.linker.runtime.RuntimeLong$`,{dZ:1});var Nc;function Pc(){return Nc||=new Mc,Nc}function Fc(){this.dp=null,Ic=this,this.dp=new Jm}R=Fc.prototype=new z,R.constructor=Fc,new V().i(Fc,`scala.$less$colon$less$`,{e2:1});var Ic;function Lc(){return Ic||=new Fc,Ic}function Rc(e,t,n,r,i,a){for(var o=n,s=i,c=n+a|0;o<c;)ou().fC(r,s,ou().dB(t,o)),o=1+o|0,s=1+s|0}function zc(){}R=zc.prototype=new z,R.constructor=zc,R.kg=(function(e,t){var n=e.r();if(n>-1){for(var r=t.b7(n),i=e.i(),a=0;a<n;)ou().fC(r,a,i.h()),a=1+a|0;return r}var o=null,s=t.aA(),c=s===Pa.l();o=[];for(var l=e.i();l.j();){var u=l.h(),d=c?ya(u):u===null?Ul().fL(s):u;o.push(d)}return Ul().fK(s===Ma.l()?wc.l():s===eu.l()||s===gp.l()?H.l():s,o)}),R.eS=(function(e,t,n,r,i){var a=$i(e);a.a5.Z&&$i(n).a5.R(a.a5)?e.o(t,n,r,i):Rc(this,e,t,n,r,i)}),R.ke=(function(e,t){if(e===t)return!0;if(e.a.length!==t.a.length)return!1;for(var n=e.a.length,r=0;r<n;){if(!G().m(e.a[r],t.a[r]))return!1;r=1+r|0}return!0}),new V().i(zc,`scala.Array$`,{e4:1});var Bc;function Vc(){return Bc||=new zc,Bc}function Hc(){this.ge=null,this.iT=null,Uc=this,this.ge=new Oa(0),this.iT=new B(0)}R=Hc.prototype=new z,R.constructor=Hc,new V().i(Hc,`scala.Array$EmptyArrays$`,{e5:1});var Uc;function Wc(){return Uc||=new Hc,Uc}function Gc(e){return!!(e&&e.$classData&&e.$classData.n.ap)}var Kc=new V().i(1,`scala.Function1`,{f:1});function qc(){}R=qc.prototype=new z,R.constructor=qc;function Jc(){}Jc.prototype=R;function Yc(){}R=Yc.prototype=new z,R.constructor=Yc,R.cs=(function(e){return e===null?d_():new f_(e)}),new V().i(Yc,`scala.Option$`,{ed:1});var Xc;function Zc(){return Xc||=new Yc,Xc}function Qc(){this.iY=null,this.iX=null,$c=this,this.iY=new J((e=>this.iY)),this.iX=new Jp}R=Qc.prototype=new z,R.constructor=Qc,new V().i(Qc,`scala.PartialFunction$`,{ee:1});var $c;function el(){return $c||=new Qc,$c}function tl(){this.j1=null,nl=this,this.j1=new J((e=>rl().j1))}R=tl.prototype=new z,R.constructor=tl,R.mq=(function(e,t){var n=Oc().br(e),r=0;if(e instanceof B)for(;r<n;)t.f(e.a[r]),r=1+r|0;else if(e instanceof Oa)for(;r<n;)t.f(e.a[r]),r=1+r|0;else if(e instanceof ja)for(;r<n;)t.f(e.a[r]),r=1+r|0;else if(e instanceof ka)for(;r<n;){var i=e.a,a=r<<1,o=i[a],s=i[a+1|0];t.f(_a(o,s)),r=1+r|0}else if(e instanceof Aa)for(;r<n;)t.f(e.a[r]),r=1+r|0;else if(e instanceof Ta)for(;r<n;)t.f(ga(e.a[r])),r=1+r|0;else if(e instanceof Ea)for(;r<n;)t.f(e.a[r]),r=1+r|0;else if(e instanceof Da)for(;r<n;)t.f(e.a[r]),r=1+r|0;else if(e instanceof wa)for(;r<n;)t.f(e.a[r]),r=1+r|0;else throw new Xm(e)}),new V().i(tl,`scala.collection.ArrayOps$`,{el:1});var nl;function rl(){return nl||=new tl,nl}function il(){}R=il.prototype=new z,R.constructor=il,R.bR=(function(e){var t=e+~(e<<9)|0;return t^=t>>>14|0,t=t+(t<<4)|0,t^(t>>>10|0)}),new V().i(il,`scala.collection.Hashing$`,{ep:1});var al;function ol(){return al||=new il,al}function sl(e,t){for(var n=e.i();n.j();)t.f(n.h())}function cl(e,t){for(var n=!0,r=e.i();n&&r.j();)n=!!t.f(r.h());return n}function ll(e){var t=e.r();return t===-1?!e.i().j():t===0}function ul(e,t,n,r){var i=e.i(),a=n;matchResult18:{var o,s=e.r();if(s===-1){var o=Oc().br(t);break matchResult18}var o=s}for(var c=Oc().br(t),l=r<o?r:o,u=n<0?c:c-n|0,d=u<l?u:l,f=n+(d<0?0:d)|0;a<f&&i.j();)ou().fC(t,a,i.h()),a=1+a|0;return a-n|0}function dl(e,t,n,r){return e.r()===0?``+t+r:e.d7(Dx(new Ox),t,n,r).aJ.l}function fl(e,t,n,r,i){var a=t.aJ;n.length!==0&&(a.l=``+a.l+n);var o=e.i();if(o.j()){var s=o.h();for(a.l=``+a.l+s;o.j();){r.length!==0&&(a.l=``+a.l+r);var c=o.h();a.l=``+a.l+c}}return i.length!==0&&(a.l=``+a.l+i),t}function pl(e,t){if(e.r()>=0){var n=e.r(),r=t.b7(n);return e.bq(r,0,2147483647),r}var i=null,a=t.aA(),o=a===Pa.l();i=[];for(var s=e.i();s.j();){var c=s.h(),l=o?ya(c):c===null?Ul().fL(a):c;i.push(l)}return Ul().fK(a===Ma.l()?wc.l():a===eu.l()||a===gp.l()?H.l():a,i)}function ml(e,t){this.j7=null,this.eu=null,this.j7=e,this.eu=t}R=ml.prototype=new z,R.constructor=ml,R.mH=(function(){return this.j7.a3().i()}),new V().i(ml,`scala.collection.Iterator$ConcatIteratorCell`,{ey:1});function hl(){this.ja=null,gl=this,this.ja=new J((e=>this.ja))}R=hl.prototype=new z,R.constructor=hl,new V().i(hl,`scala.collection.StringOps$`,{eF:1});var gl;function _l(){return gl||=new hl,gl}function vl(){}R=vl.prototype=new z,R.constructor=vl,R.gY=(function(e,t){return Lm(new zm,e+` is out of bounds (min 0, max `+t+`)`)}),new V().i(vl,`scala.collection.generic.CommonErrors$`,{eJ:1});var yl;function bl(){return yl||=new vl,yl}function xl(){this.jf=0,Sl=this;try{_l();var e=ud().kq(mc().gU(`scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength`,`64`),10,214748364)}catch(t){if(0)var e;else{var e;throw t}}this.jf=e}R=xl.prototype=new z,R.constructor=xl,new V().i(xl,`scala.collection.immutable.IndexedSeqDefaults$`,{eR:1});var Sl;function Cl(){return Sl||=new xl,Sl}function wl(){}R=wl.prototype=new z,R.constructor=wl,new V().i(wl,`scala.collection.immutable.LazyList$EmptyMarker$`,{eU:1});var Tl;function El(){return Tl||=new wl,Tl}function Dl(){this.gl=null}R=Dl.prototype=new z,R.constructor=Dl,R.gK=(function(){var e=this.gl;if(e===null)throw new Im(`uninitialized`);return e.a3()}),R.gZ=(function(e){if(this.gl!==null)throw new Im(`already initialized`);this.gl=e}),new V().i(Dl,`scala.collection.immutable.LazyList$LazyBuilder$DeferredState`,{eW:1});function Ol(){}R=Ol.prototype=new z,R.constructor=Ol,new V().i(Ol,`scala.collection.immutable.LazyListBase$TailUpdater`,{f1:1});function kl(){this.jk=null,Al=this,ny(),this.jk=new np(0,0,new B(0),new Oa(0),0,0)}R=kl.prototype=new z,R.constructor=kl,new V().i(kl,`scala.collection.immutable.MapNode$`,{ff:1});var Al;function jl(){return Al||=new kl,Al}function Ml(e,t,n){return Jg(new Xg,n+` is out of bounds (min 0, max `+(Oc().br(t)-1|0))}function Nl(){}R=Nl.prototype=new z,R.constructor=Nl;function Pl(){}Pl.prototype=R,R.kx=(function(e,t){if(t<0||t>(e.a.length-1|0))throw Ml(this,e,t);var n=new Oa(e.a.length-1|0);e.o(0,n,0,t);var r=1+t|0,i=(e.a.length-t|0)-1|0;return e.o(r,n,t,i),n}),R.mN=(function(e,t,n){if(t<0||t>e.a.length)throw Ml(this,e,t);var r=new Oa(1+e.a.length|0);e.o(0,r,0,t),r.a[t]=n;var i=1+t|0,a=e.a.length-t|0;return e.o(t,r,i,a),r});var Fl=new V().i(0,`scala.collection.immutable.Node`,{aF:1});function Il(){this.eC=0,Ll=this,this.eC=aa(7)}R=Il.prototype=new z,R.constructor=Il,R.dE=(function(e,t){return 31&(e>>>t|0)}),R.db=(function(e){return 1<<e}),R.mK=(function(e,t){return ud().da(e&(t-1|0))}),R.c5=(function(e,t,n){return e===-1?t:this.mK(e,n)}),new V().i(Il,`scala.collection.immutable.Node$`,{fi:1});var Ll;function Rl(){return Ll||=new Il,Ll}function zl(){this.gp=null,this.b5=null,this.c1=null,this.e7=null,this.gq=null,this.jo=null,Bl=this,this.gp=new B(0),this.b5=new(H.r().r()).C(0),this.c1=new(H.r().r().r()).C(0),this.e7=new(H.r().r().r().r()).C(0),this.gq=new(H.r().r().r().r().r()).C(0),this.jo=new(H.r().r().r().r().r().r()).C(0)}R=zl.prototype=new z,R.constructor=zl,R.ec=(function(e,t){var n=e.a.length,r=new B(1+n|0);return e.o(0,r,0,n),r.a[n]=t,r}),R.w=(function(e,t){var n=U().L(e,1+e.a.length|0);return n.a[n.a.length-1|0]=t,n}),R.c3=(function(e,t){var n=$i(t).a5.Q().a5.U(1+t.a.length|0),r=t.a.length;return t.o(0,n,1,r),n.a[0]=e,n}),R.gM=(function(e,t,n){var r=0,i=t.a.length;if(e===0)for(;r<i;)n.f(t.a[r]),r=1+r|0;else for(var a=e-1|0;r<i;)this.gM(a,t.a[r],n),r=1+r|0}),R.bG=(function(e,t){for(var n=0;n<e.a.length;){var r=e.a[n],i=t.f(r);if(!Object.is(r,i))return this.mY(e,t,n,i);n=1+n|0}return e}),R.mY=(function(e,t,n,r){var i=new B(e.a.length);n>0&&e.o(0,i,0,n),i.a[n]=r;for(var a=1+n|0;a<e.a.length;)i.a[a]=t.f(e.a[a]),a=1+a|0;return i}),R.T=(function(e,t,n){if(e===1)return this.bG(t,n);for(var r=0;r<t.a.length;){var i=t.a[r],a=this.T(e-1|0,i,n);if(i!==a)return this.mZ(e,t,n,r,a);r=1+r|0}return t}),R.mZ=(function(e,t,n,r,i){var a=$i(t).a5.Q().a5.U(t.a.length);r>0&&t.o(0,a,0,r),a.a[r]=i;for(var o=1+r|0;o<t.a.length;)a.a[o]=this.T(e-1|0,t.a[o],n),o=1+o|0;return a}),new V().i(zl,`scala.collection.immutable.VectorStatics$`,{fz:1});var Bl;function W(){return Bl||=new zl,Bl}function Vl(){}R=Vl.prototype=new z,R.constructor=Vl,R.fL=(function(e){return e===Fa.l()||e===Ia.l()||e===Pa.l()||e===La.l()?0:e===Ra.l()?_a(0,0):e===za.l()||e===Ba.l()?0:e===Na.l()?!1:e===Ma.l()?void 0:null}),R.fK=(function(e,t){var n=t.length|0;if(e===Pa.l()){for(var r=new Ta(n),i=0;i!==n;)r.a[i]=65535&(t[i]|0),i=1+i|0;return r}for(var a=e.a5.U(n),o=0;o!==n;)ou().fC(a,o,t[o]),o=1+o|0;return a}),new V().i(Vl,`scala.collection.mutable.ArrayBuilder$`,{fG:1});var Hl;function Ul(){return Hl||=new Vl,Hl}function Wl(e,t,n){this.ea=null,this.co=0,this.aI=null,this.ea=e,this.co=t,this.aI=n}R=Wl.prototype=new z,R.constructor=Wl,R.mn=(function(e,t){for(var n=this;;)if(t===n.co&&G().m(e,n.ea))return n;else if(n.aI===null||n.co>t)return null;else n=n.aI}),R.y=(function(){return`Node(`+this.ea+`, `+this.co+`) -> `+this.aI});var Gl=new V().i(Wl,`scala.collection.mutable.HashSet$Node`,{fS:1});function Kl(){}R=Kl.prototype=new z,R.constructor=Kl,R.k0=(function(e,t,n){if(t!==e)throw new Km(n)}),new V().i(Kl,`scala.collection.mutable.MutationTracker$`,{fY:1});var ql;function Jl(){return ql||=new Kl,ql}function Yl(){this.l0=null,this.l9=null,this.l1=null,this.l4=null,this.l5=null,this.l3=null,this.l2=null,this.kZ=null,this.la=null,this.kY=null,this.l8=null,this.l6=null,this.l7=null,Xl=this,this.l0=Wv(),this.l9=_y(),this.l1=qv(),this.l4=ny(),this.l5=ay(),this.l3=$v(),this.l2=Xv(),this.kZ=Vv(),this.la=by(),this.kY=Rv(),this.l8=my(),this.l6=cy(),this.l7=dy()}R=Yl.prototype=new z,R.constructor=Yl,R.jX=(function(e){return e===Fa.l()?Wv():e===Ia.l()?_y():e===Pa.l()?qv():e===La.l()?ny():e===Ra.l()?ay():e===za.l()?$v():e===Ba.l()?Xv():e===Na.l()?Vv():e===Ma.l()?by():e===H.l()?my():e===gp.l()?cy():e===eu.l()?dy():new X_(e)}),new V().i(Yl,`scala.reflect.ClassTag$`,{g6:1});var Xl;function Zl(){return Xl||=new Yl,Xl}function Ql(){}R=Ql.prototype=new z,R.constructor=Ql,R.m=(function(e,t){return e===t||(fd(e)?this.m8(e,t):e instanceof Zi?this.m6(e,t):e===null?t===null:ta(e,t))}),R.m8=(function(e,t){if(fd(t))return this.m7(e,t);if(t instanceof Zi){if(typeof e==`number`)return+e===t.c;if(e instanceof Qi){var n=ba(e),r=n.l,i=n.h,a=t.c,o=a>>31;return(r^a|i^o)===0}return e===null?t===null:ta(e,t)}return e===null?t===null:ta(e,t)}),R.m7=(function(e,t){if(typeof e==`number`){var n=+e;if(typeof t==`number`)return n===+t;if(t instanceof Qi){var r=ba(t),i=r.l;return n===4294967296*r.h+(i>>>0)}return!1}if(e instanceof Qi){var a=ba(e),o=a.l,s=a.h;if(t instanceof Qi){var c=ba(t),l=c.l,u=c.h;return(o^l|s^u)===0}if(typeof t==`number`){var d=+t;return 4294967296*s+(o>>>0)===d}return!1}return e===null?t===null:ta(e,t)}),R.m6=(function(e,t){if(t instanceof Zi)return e.c===t.c;if(fd(t)){if(typeof t==`number`)return+t===e.c;if(t instanceof Qi){var n=ba(t),r=n.l,i=n.h,a=e.c,o=a>>31;return(r^a|i^o)===0}return t===null?e===null:ta(t,e)}return e===null&&t===null}),new V().i(Ql,`scala.runtime.BoxesRunTime$`,{gz:1});var $l;function G(){return $l||=new Ql,$l}var eu=new V().i(0,`scala.runtime.Null$`,{gC:1});function tu(){}R=tu.prototype=new z,R.constructor=tu,R.bU=(function(){throw Vm(new Um,`tried to cast away nullability, but value is null`)}),new V().i(tu,`scala.runtime.Scala3RunTime$`,{gE:1});var nu;function ru(){return nu||=new tu,nu}function iu(){}R=iu.prototype=new z,R.constructor=iu,R.lu=(function(e){return e===null?eu.l():$i(e)}),R.dB=(function(e,t){if(e instanceof B||e instanceof Oa||e instanceof ja)return e.a[t];if(e instanceof ka){var n=e.a,r=t<<1;return _a(n[r],n[r+1|0])}if(e instanceof Aa)return e.a[t];if(e instanceof Ta)return ga(e.a[t]);if(e instanceof Ea||e instanceof Da||e instanceof wa)return e.a[t];throw e===null?Hm(new Um):new Xm(e)}),R.fC=(function(e,t,n){if(e instanceof B)e.a[t]=n;else if(e instanceof Oa)e.a[t]=n|0;else if(e instanceof ja)e.a[t]=+n;else if(e instanceof ka){var r=ba(n),i=e.a,a=t<<1;i[a]=r.l,i[a+1|0]=r.h}else if(e instanceof Aa)e.a[t]=Math.fround(n);else if(e instanceof Ta)e.a[t]=ya(n);else if(e instanceof Ea)e.a[t]=n|0;else if(e instanceof Da)e.a[t]=n|0;else if(e instanceof wa)e.a[t]=!!n;else throw e===null?Hm(new Um):new Xm(e)}),R.ld=(function(e){return dl(e.ei(),e.cz()+`(`,`,`,`)`)}),R.dj=(function(e){if(e===null)return null;if(e.a.length===0){var t=O_();return my(),T_(t)}return new Kb(e)}),new V().i(iu,`scala.runtime.ScalaRunTime$`,{gF:1});var au;function ou(){return au||=new iu,au}function su(){}R=su.prototype=new z,R.constructor=su,R.v=(function(e,t){var n=this.cw(e,t),r=n;return n=r<<13|r>>>19,Math.imul(5,n)-430675100|0}),R.cw=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|r>>>17,n=Math.imul(461845907,n),e^n}),R.ay=(function(e,t){return this.lC(e^t)}),R.lC=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),R.mU=(function(e,t){return t===e>>31?e:e^t}),R.m2=(function(e){var t=aa(e);if(t===e)return t;var n=Pc().kl(e),r=n.l,i=n.h;if(4294967296*i+(r>>>0)===e)return r^i;var a=e|0;if(a===e&&1/e!=-1/0)return a;if(e!==e)return 2146959360;var o=sa;return o.setFloat64(0,e,!0),(o.getInt32(0,!0)|0)^(o.getInt32(4,!0)|0)}),R.F=(function(e){if(e===null)return 0;if(typeof e==`number`)return this.m2(+e);if(e instanceof Qi){var t=ba(e);return this.mU(t.l,t.h)}return na(e)}),R.mO=(function(e){throw Lm(new zm,``+e)}),new V().i(su,`scala.runtime.Statics$`,{gH:1});var cu;function K(){return cu||=new su,cu}function lu(){}R=lu.prototype=new z,R.constructor=lu,R.ny=(function(e,t){return setTimeout((()=>{t.a3()}),e)}),new V().i(lu,`scala.scalajs.js.timers.package$`,{gN:1});var uu;function du(){return uu||=new lu,uu}function fu(){}R=fu.prototype=new z,R.constructor=fu,R.nK=(function(e){if(e instanceof Q)return e.ft;var t=[];return e.bF(new J((e=>t.push(e)|0))),t}),new V().i(fu,`scala.scalajs.runtime.Compat$`,{gW:1});var pu;function mu(){return pu||=new fu,pu}function hu(){}R=hu.prototype=new z,R.constructor=hu,R.fJ=(function(e){for(var t=e.a.length,n=[],r=0;r!==t;){var i=r;n.push(e.a[i]),r=1+r|0}return n}),new V().i(hu,`scala.scalajs.runtime.package$`,{gY:1});var gu;function _u(){return gu||=new hu,gu}function vu(){}R=vu.prototype=new z,R.constructor=vu,R.nz=(function(e){var t=`Illegal command line`+(e.kp()===0?``:e.kp()===1?` after first argument`:` after `+e.kp()+` arguments`)+`: `+e.o3();Cd().na().mR(t+`
`)}),new V().i(vu,`scala.util.CommandLineParser$`,{gZ:1});function yu(e){this.gz=null,this.gz=e}R=yu.prototype=new z,R.constructor=yu,R.y=(function(){return`DynamicVariable(`+this.gz+`)`}),new V().i(yu,`scala.util.DynamicVariable`,{h1:1});function bu(){}R=bu.prototype=new z,R.constructor=bu;function xu(){}xu.prototype=R,R.v=(function(e,t){var n=this.cw(e,t),r=n;return n=r<<13|r>>>19,Math.imul(5,n)-430675100|0}),R.cw=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|r>>>17,n=Math.imul(461845907,n),e^n}),R.ay=(function(e,t){return this.f1(e^t)}),R.f1=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),R.kL=(function(e,t,n){var r=n;return r=this.v(r,o_(`Tuple2`)),r=this.v(r,e),r=this.v(r,t),this.ay(r,2)}),R.h7=(function(e,t,n){var r=e.cx();if(r===0)return n?t:o_(e.cz());var i=t;n||(i=this.v(i,o_(e.cz())));for(var a=0;a<r;)i=this.v(i,K().F(e.cy(a))),a=1+a|0;return this.ay(i,r)}),R.ha=(function(e,t){for(var n=0,r=0,i=0,a=1,o=e.i();o.j();){var s=o.h(),c=K().F(s);n=n+c|0,r^=c,a=Math.imul(a,1|c),i=1+i|0}var l=t;return l=this.v(l,n),l=this.v(l,r),l=this.cw(l,a),this.ay(l,i)}),R.n9=(function(e,t){var n=e.i(),r=t;if(!n.j())return this.ay(r,0);var i=n.h();if(!n.j())return this.ay(this.v(r,K().F(i)),1);var a=n.h(),o=K().F(i);r=this.v(r,o);for(var s=r,c=K().F(a),l=c-o|0,u=2;n.j();){r=this.v(r,c);var d=K().F(n.h());if(l!==(d-c|0)||l===0){for(r=this.v(r,d),u=1+u|0;n.j();)r=this.v(r,K().F(n.h())),u=1+u|0;return this.ay(r,u)}c=d,u=1+u|0}return this.f1(this.v(this.v(s,l),c))}),R.ax=(function(e,t){var n=t,r=Oc().br(e);switch(r){case 0:return this.ay(n,0);case 1:return this.ay(this.v(n,K().F(ou().dB(e,0))),1);default:var i=K().F(ou().dB(e,0));n=this.v(n,i);for(var a=n,o=K().F(ou().dB(e,1)),s=o-i|0,c=2;c<r;){n=this.v(n,o);var l=K().F(ou().dB(e,c));if(s!==(l-o|0)||s===0){for(n=this.v(n,l),c=1+c|0;c<r;)n=this.v(n,K().F(ou().dB(e,c))),c=1+c|0;return this.ay(n,r)}o=l,c=1+c|0}return this.f1(this.v(this.v(a,s),o))}}),R.nf=(function(e,t,n,r){return this.f1(this.v(this.v(this.v(r,e),t),n))}),R.mL=(function(e,t){var n=t,r=e.k();switch(r){case 0:return this.ay(n,0);case 1:return this.ay(this.v(n,K().F(e.p(0))),1);default:var i=K().F(e.p(0));n=this.v(n,i);for(var a=n,o=K().F(e.p(1)),s=o-i|0,c=2;c<r;){n=this.v(n,o);var l=K().F(e.p(c));if(s!==(l-o|0)||s===0){for(n=this.v(n,l),c=1+c|0;c<r;)n=this.v(n,K().F(e.p(c))),c=1+c|0;return this.ay(n,r)}o=l,c=1+c|0}return this.f1(this.v(this.v(a,s),o))}}),R.mT=(function(e,t){for(var n=0,r=t,i=0,a=0,o=0,s=0,c=e;!c.d();){var l=c.s(),u=c.n(),d=K().F(l);switch(r=this.v(r,d),i){case 0:s=d,i=1;break;case 1:a=d-o|0,i=2;break;case 2:(a!==(d-o|0)||a===0)&&(i=3)}o=d,n=1+n|0,c=u}return i===2?this.nf(s,a,o,t):this.ay(r,n)});function Su(e){this.dM=null,this.hk=null,this.fQ=!1,this.hk=e,bo(this),this.fQ=!1}R=Su.prototype=new z,R.constructor=Su,R.nb=(function(e){this.fQ?(wo(e),this.hk.a3()):Co(this,e)}),R.mS=(function(){xo(this),this.fQ=!0}),new V().i(Su,`com.raquo.airstream.ownership.OneTimeOwner`,{ca:1,cb:1});function Cu(){}R=Cu.prototype=new z,R.constructor=Cu,R.lV=(function(e){return e!==null}),R.m4=(function(e){return e?``:null}),R.ed=(function(e){return this.lV(e)}),R.dC=(function(e){return this.m4(!!e)}),new V().i(Cu,`com.raquo.laminar.codecs.package$$anon$1`,{cr:1,ai:1});function wu(e){if(e===null)throw Hm(new Um)}R=wu.prototype=new z,R.constructor=wu,R.dC=(function(e){return e}),R.ed=(function(e){return e}),new V().i(wu,`com.raquo.laminar.codecs.package$$anon$2`,{cs:1,ai:1});function Tu(e){if(e===null)throw Hm(new Um)}R=Tu.prototype=new z,R.constructor=Tu,R.lU=(function(e){return _l(),sd().nc(e)}),R.ed=(function(e){return this.lU(e)}),R.dC=(function(e){return``+ +e}),new V().i(Tu,`com.raquo.laminar.codecs.package$$anon$4`,{ct:1,ai:1});function Eu(e,t,n,r){this.hR=null,this.hT=null,this.hS=null,this.fW=null,this.hR=t,this.hT=n,this.hS=r,this.fW=new Du(r)}R=Eu.prototype=new os,R.constructor=Eu,R.jL=(function(e){return new ef(this,(Y().G.lc(),is().kt(e,this.hS)))}),new V().i(Eu,`com.raquo.laminar.keys.CompositeKey`,{cJ:1,a6:1});function Du(e){this.fX=null,this.fX=e}R=Du.prototype=new z,R.constructor=Du,R.k6=(function(e){return is().kt(e,this.fX)}),R.k8=(function(e){return dl(e,``,this.fX,``)}),R.ed=(function(e){return this.k6(e)}),R.dC=(function(e){return this.k8(e)}),new V().i(Du,`com.raquo.laminar.keys.CompositeKey$CompositeCodec`,{cL:1,ai:1});function Ou(e){if(e===null)throw Hm(new Um)}R=Ou.prototype=new z,R.constructor=Ou,new V().i(Ou,`com.raquo.laminar.keys.CompositeKey$CompositeValueMappers$StringValueMapper$`,{cN:1,cM:1});function ku(e,t,n){return e.cC=t,e.dN=n,e}function Au(){this.cC=null,this.dN=null}R=Au.prototype=new os,R.constructor=Au;function ju(){}ju.prototype=R,R.D=(function(e){return new tf(this,e,new bm(((e,t,n)=>{Io().kF(e,t,n)})))}),new V().i(Au,`com.raquo.laminar.keys.HtmlAttr`,{am:1,a6:1});function Mu(e,t){this.hV=null,this.hU=null,this.hV=e,this.hU=t}R=Mu.prototype=new os,R.constructor=Mu,R.D=(function(e){return new tf(this,e,new bm(((e,t,n)=>{Io().nt(e,t,n)})))}),new V().i(Mu,`com.raquo.laminar.keys.HtmlProp`,{cO:1,a6:1});function Nu(e,t,n){this.fZ=null,this.fY=null,this.fc=null,this.fd=null,this.fZ=e,this.fY=t;var r=n.d()?d_():new f_(n.az()+`:`+e);this.fc=r.d()?e:r.az(),this.fd=n.d()?d_():new f_(ls().n3(n.az()))}R=Nu.prototype=new os,R.constructor=Nu,new V().i(Nu,`com.raquo.laminar.keys.SvgAttr`,{cP:1,a6:1});function Pu(){}R=Pu.prototype=new z,R.constructor=Pu,R.c2=(function(e){}),new V().i(Pu,`com.raquo.laminar.modifiers.Modifier$$anon$1`,{cV:1,a1:1});function Fu(e,t){if(this.i1=null,this.i1=e,t===null)throw Hm(new Um)}R=Fu.prototype=new z,R.constructor=Fu,R.c2=(function(e){var t=no(),n=(()=>{this.i1.f(e)});if(no(),t.bH)n();else{t.bH=!0;try{n()}finally{t.bH=!1,$a(t)}}}),new V().i(Fu,`com.raquo.laminar.modifiers.Modifier$$anon$2`,{cW:1,a1:1});function Iu(){}R=Iu.prototype=new z,R.constructor=Iu,new V().i(Iu,`com.raquo.laminar.modifiers.RenderableNode$$anon$1`,{cZ:1,cX:1});function Lu(){}R=Lu.prototype=new z,R.constructor=Lu,new V().i(Lu,`com.raquo.laminar.modifiers.RenderableSeq$collectionSeqRenderable$`,{d1:1,d0:1});var Ru;function zu(){return Ru||=new Lu,Ru}function Bu(e,t){if(this.i2=null,this.i2=e,t===null)throw Hm(new Um)}R=Bu.prototype=new z,R.constructor=Bu,R.lB=(function(e){return this.i2.f(e)}),new V().i(Bu,`com.raquo.laminar.modifiers.RenderableText$$anon$1`,{d4:1,d2:1});function Vu(e){e.k2(new mo(new _m((()=>{throw kf(new Af,`Attempting to use owner of unmounted element: `+dl(Io().lT(e.dF(),(Io(),$())),``,` > `,``))}))))}function Hu(e,t,n){return e.g4=t,e}function Uu(){this.g4=null}R=Uu.prototype=new z,R.constructor=Uu;function Wu(){}Wu.prototype=R,R.h2=(function(){return this.g4}),R.d9=(function(e){var t=this.lE();return e.bF(new vm((e=>{e.c2(t)}))),t}),R.lE=(function(){return new qg(this,Io().lO(this))}),new V().i(Uu,`com.raquo.laminar.tags.HtmlTag`,{aR:1,au:1});function Gu(e,t){this.i9=null,this.i9=e}R=Gu.prototype=new z,R.constructor=Gu,new V().i(Gu,`com.raquo.laminar.tags.SvgTag`,{dc:1,au:1});function Ku(){}R=Ku.prototype=new z,R.constructor=Ku,R.dC=(function(e){return e}),R.ed=(function(e){return e}),new V().i(Ku,`io.github.nguyenyou.webawesome.laminar.UnionAsStringCodec$$anon$1`,{dm:1,ai:1});function qu(e,t){return e.dT=t,e.fy(),e}function Ju(){this.dT=null,this.dQ=null,this.dR=!1,this.dS=null,this.dU=!1,this.dV=null,this.dW=!1}R=Ju.prototype=new z,R.constructor=Ju;function Yu(){}Yu.prototype=R,R.mJ=(function(){return this.dR||=(this.dQ=Y().G.gX(),!0),this.dQ}),R.nG=(function(){return this.dU||=(this.dS=new rf(this.dT,new J((e=>void 0)),void 0),!0),this.dS}),R.aL=(function(e,t){var n=this.nG().d9(new Q([]));return e.bF(new J((e=>{e.f(this).c2(n)}))),t.bF(new J((e=>{e.c2(n)}))),n}),R.nL=(function(){return this.dW||=(this.dV=new Ef,!0),this.dV});function Xu(){this.g5=null,Zu=this,this.g5=Ha(67,`1C]4m6m=c4]4]4]4]4]4]4]4]4]3g4]2m9]2m1Jm1m9s4g5mm6]3]4mm12>mEm1m6m1]3]=]DI]1<m24mIs4g2c4w9];]4]<]3m3m=m3mH]8]2m=mBHm3]4mK3{gggg2:g=m@]13]4E]`)}R=Xu.prototype=new z,R.constructor=Xu,R.lW=(function(e,t){if(e<256)var n=(e-48|0)>>>0<=9?e-48|0:(e-65|0)>>>0<=25?e-55|0:(e-97|0)>>>0<=25?e-87|0:-1;else if((e-65313|0)>>>0<=25)var n=e-65303|0;else if((e-65345|0)>>>0<=25)var n=e-65335|0;else{var r=U().lD(this.g5,e),i=r<0?-2-r|0:r;if(i<0)var n=-1;else var a=e-this.g5.a[i]|0,n=a>9?-1:a}return n<t?n:-1}),new V().i(Xu,`java.lang.Character$`,{dv:1,a:1});var Zu;function Qu(){return Zu||=new Xu,Zu}function $u(e){return(1&e.cD)<<24>>24||(e.g8=/* @__PURE__ */ RegExp(`^[\\x00-\\x20]*([+-]?(?:NaN|Infinity|(?:\\d+\\.?\\d*|\\.\\d+)(?:[eE][+-]?\\d+)?)[fFdD]?)[\\x00-\\x20]*$`),e.cD=(1|e.cD)<<24>>24),e.g8}function ed(e){return(1&e.cD)<<24>>24?e.g8:$u(e)}function td(e){return(2&e.cD)<<24>>24||(e.g7=/* @__PURE__ */ RegExp(`^[\\x00-\\x20]*([+-]?)0[xX]([0-9A-Fa-f]*)\\.?([0-9A-Fa-f]*)[pP]([+-]?\\d+)[fFdD]?[\\x00-\\x20]*$`),e.cD=(2|e.cD)<<24>>24),e.g7}function nd(e){return(2&e.cD)<<24>>24?e.g7:td(e)}function rd(e,t){var n=nd(e).exec(t);n===null&&id(t);var r=n[1],i=n[2],a=n[3],o=n[4];i===``&&a===``&&id(t);var s=e.nd(i,a,o,15);return r===`-`?-s:s}function id(e){throw new a_(`For input string: "`+e+`"`)}function ad(){this.g8=null,this.g7=null,this.cD=0}R=ad.prototype=new z,R.constructor=ad,R.nc=(function(e){var t=ed(this).exec(e);return t===null?rd(this,e):+parseFloat(t[1])}),R.nd=(function(e,t,n,r){for(var i=``+e+t,a=-(t.length<<2)|0,o=i.length-1|0,s=0;s!==o&&i.charCodeAt(s)===48;)s=1+s|0;var c=s,l=i.substring(c),u=l.length,d=u>r;if(d){for(var f=!1,p=r;!f&&p!==u;)l.charCodeAt(p)!==48&&(f=!0),p=1+p|0;var m=f?`1`:`0`,h=l.substring(0,r)+m}else var h=l;var g=a+(d?(l.length-(1+r|0)|0)<<2:0)|0;return Ps().nr(+parseInt(h,16),aa(+parseInt(n,10))+g|0)}),new V().i(ad,`java.lang.Double$`,{dy:1,a:1});var od;function sd(){return od||=new ad,od}function cd(){}R=cd.prototype=new z,R.constructor=cd,R.eZ=(function(e){throw new a_(`For input string: "`+e+`"`)}),R.kq=(function(e,t,n){e===null&&ud().eZ(e);var r=e.length;r===0&&ud().eZ(e);var i=Qu(),a=e.charCodeAt(0),o=a===45,s=o?-1:0,c=(o||a===43)|0;c>=r&&ud().eZ(e);var l=0;for(l=0;c!==r;){var u=i.lW(e.charCodeAt(c),t);(u<0||l>>>0>n>>>0)&&ud().eZ(e),l=Math.imul(l,t)+u|0,c=1+c|0}return l>>>0>(2147483647-s|0)>>>0&&ud().eZ(e),(l^s)-s|0}),R.da=(function(e){var t=e-(1431655765&e>>1)|0,n=(858993459&t)+(858993459&t>>2)|0;return Math.imul(16843009,252645135&(n+(n>>4)|0))>>24}),new V().i(cd,`java.lang.Integer$`,{dC:1,a:1});var ld;function ud(){return ld||=new cd,ld}function dd(){}R=dd.prototype=new z,R.constructor=dd;function fd(e){return e instanceof dd||typeof e==`number`||e instanceof Qi}function pd(e,t,n,r,i){this.dY=null,this.eo=null,this.dZ=null,this.e0=0,this.dX=0,this.dY=e,this.eo=t,this.dZ=n,this.e0=r,this.dX=i}R=pd.prototype=new z,R.constructor=pd,R.q=(function(e){return e instanceof pd&&this.dZ===e.dZ&&this.e0===e.e0&&this.dX===e.dX&&this.dY===e.dY&&this.eo===e.eo}),R.y=(function(){var e=``;return this.dY!==`<jscode>`&&(e=``+e+this.dY+`.`),e=``+e+this.eo,this.dZ===null?e+=`(Unknown Source)`:(e=e+`(`+this.dZ,this.e0>=0&&(e=e+`:`+this.e0,this.dX>=0&&(e=e+`:`+this.dX)),e+=`)`),e}),R.u=(function(){return o_(this.dY)^o_(this.eo)^o_(this.dZ)^this.e0^this.dX});var md=new V().i(pd,`java.lang.StackTraceElement`,{b2:1,a:1});function hd(){}R=hd.prototype=new z,R.constructor=hd,R.n4=(function(e,t,n){for(var r=t+n|0,i=``,a=t;a!==r;)i+=``+oa(e.a[a]),a=1+a|0;return i}),new V().i(hd,`java.lang.String$`,{dO:1,a:1});var gd;function _d(){return gd||=new hd,gd}function vd(e){}R=vd.prototype=new z,R.constructor=vd,new V().i(vd,`java.lang.Thread`,{b3:1,dI:1});function yd(e,t,n,r,i){return e.iR=t,e.iS=i,i&&e.ml(),e}var bd=class extends Error{constructor(){super(),this.iR=null,this.iS=!1,this.iQ=null,this.ff=null}eX(){return this.iR}ml(){var e=this instanceof sv?this.bC:this;return this.iQ=Object.prototype.toString.call(e)===`[object Error]`?e:Error.captureStackTrace===void 0||Object.isSealed(this)?/* @__PURE__ */ Error():(Error.captureStackTrace(this),this),this}mD(){return this.ff===null&&(this.ff=this.iS?ic().mj(this.iQ):new(md.r()).C(0)),this.ff}y(){var e=ea(this),t=this.eX();return t===null?e:e+`: `+t}u(){return Sa.prototype.u.call(this)}q(e){return Sa.prototype.q.call(this,e)}get message(){var e=this.eX();return e===null?``:e}get name(){return ea(this)}toString(){return this.y()}};function xd(){this.iU=null,Sd=this,this.iU=new yu(uc().iN)}R=xd.prototype=new z,R.constructor=xd,R.na=(function(){return this.iU.gz}),new V().i(xd,`scala.Console$`,{e6:1,g4:1});var Sd;function Cd(){return Sd||=new xd,Sd}function wd(){}R=wd.prototype=new z,R.constructor=wd;function Td(){}Td.prototype=R,R.y=(function(){return`<function1>`});function Ed(){}R=Ed.prototype=new Jc,R.constructor=Ed;function Dd(){}Dd.prototype=R,R.nV=(function(e){if(e===null)return null;if(e.a.length===0){var t=K_();return my(),t.jt}return new cx(e)});function Od(){}R=Od.prototype=new z,R.constructor=Od,new V().i(Od,`scala.collection.immutable.LazyList$Uninitialized$`,{eY:1,a:1});var kd;function Ad(){return kd||=new Od,kd}function jd(){}R=jd.prototype=new Pl,R.constructor=jd;function Md(){}Md.prototype=R;function Nd(e,t){if(t===e)e.aR(xg().kh(t));else for(var n=t.i();n.j();)e.aK(n.h());return e}function Pd(){}R=Pd.prototype=new z,R.constructor=Pd;function Fd(){}Fd.prototype=R,R.y=(function(){return`<function0>`});function Id(){}R=Id.prototype=new z,R.constructor=Id;function Ld(){}Ld.prototype=R,R.y=(function(){return`<function1>`});function Rd(){}R=Rd.prototype=new z,R.constructor=Rd;function zd(){}zd.prototype=R,R.y=(function(){return`<function2>`});function Bd(){}R=Bd.prototype=new z,R.constructor=Bd;function Vd(){}Vd.prototype=R,R.y=(function(){return`<function3>`});function Hd(e){this.fr=!1,this.fr=e}R=Hd.prototype=new z,R.constructor=Hd,R.y=(function(){return``+this.fr}),new V().i(Hd,`scala.runtime.BooleanRef`,{gy:1,a:1});function Ud(e){this.dy=0,this.dy=e}R=Ud.prototype=new z,R.constructor=Ud,R.y=(function(){return``+this.dy}),new V().i(Ud,`scala.runtime.IntRef`,{gA:1,a:1});function Wd(e){this.fs=null,this.fs=e}R=Wd.prototype=new z,R.constructor=Wd,R.y=(function(){return``+this.fs}),new V().i(Wd,`scala.runtime.ObjectRef`,{gD:1,a:1});function Gd(){this.a9=0,this.d6=0,this.jJ=0,this.gA=0,Kd=this,this.a9=o_(`Seq`),this.d6=o_(`Map`),this.jJ=o_(`Set`),this.gA=this.ha($(),this.d6)}R=Gd.prototype=new xu,R.constructor=Gd,R.bW=(function(e,t){return this.kL(K().F(e),K().F(t),-889275714)}),R.kE=(function(e){return Ny(e)?this.mL(e,this.a9):e instanceof Zb?this.mT(e,this.a9):this.n9(e,this.a9)}),R.n0=(function(e){if(e.d())return this.gA;var t=new qd,n=this.d6;return e.dD(t),n=this.v(n,t.fu),n=this.v(n,t.fv),n=this.cw(n,t.fw),this.ay(n,t.fx)}),new V().i(Gd,`scala.util.hashing.MurmurHash3$`,{h3:1,h2:1});var Kd;function q(){return Kd||=new Gd,Kd}function qd(){this.fu=0,this.fv=0,this.fx=0,this.fw=0,this.fu=0,this.fv=0,this.fx=0,this.fw=1}R=qd.prototype=new z,R.constructor=qd,R.y=(function(){return`<function2>`}),R.lA=(function(e,t){var n=q().bW(e,t);this.fu=this.fu+n|0,this.fv^=n,this.fw=Math.imul(this.fw,1|n),this.fx=1+this.fx|0}),R.cr=(function(e,t){this.lA(e,t)}),new V().i(qd,`scala.util.hashing.MurmurHash3$accum$1`,{h4:1,aw:1});var Jd=class extends bd{};function Yd(){this.fN=null,this.hd=null,this.he=null,Xd=this,this.fN=xg().jY(ou().dj(new(Kc.r()).C([]))),this.hd=new vm((e=>{try{console.error(this.mz(e)+`
`+this.mC(e,`
`))}catch(e){var t=e instanceof bd?e:new sv(e);console.error(`Error in AirstreamError.consoleErrorCallback:`),console.error(t)}})),this.he=new vm((e=>{console.warn(`Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.`);var t=e;throw t instanceof sv?t.bC:t})),this.ng(this.hd)}R=Yd.prototype=new z,R.constructor=Yd,R.mz=(function(e){try{var t=e.eX()}catch{var t=`(Unable to get the message for this error - exception occurred in its getMessage)`}return $i(e).gV()+`: `+t}),R.mC=(function(e,t){try{return dl(Ff().nV(e.mD()),``,t,``)}catch{return`(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)`}}),R.ng=(function(e){this.fN.aK(e)}),R.f2=(function(e){for(var t=this.fN.i();t.j();){var n=t.h();try{n.f(e)}catch(e){var r=e instanceof bd?e:new sv(e),i=this.he;if(n===null?i===null:n.q(i))throw r instanceof sv?r.bC:r;console.warn(`Error processing an unhandled error callback:`),du().ny(0,new _m((e=>(()=>{throw e instanceof sv?e.bC:e}))(r)))}}}),new V().i(Yd,`com.raquo.airstream.core.AirstreamError$`,{bX:1,g2:1,g3:1});var Xd;function Zd(){return Xd||=new Yd,Xd}function Qd(e,t,n){return new Mp(n.lB(t))}function $d(e,t,n,r){return new Fu(new vm((e=>{(Bo(),new Lo(t,null,null)).bF(new vm((e=>(t=>{n.f(t).c2(e)}))(e)))})),ms())}function ef(e,t){this.hX=null,this.g0=null,this.hX=e,this.g0=t}R=ef.prototype=new z,R.constructor=ef,R.c2=(function(e){this.g0.d()||Cm(e,this.hX,null,this.g0,$())}),new V().i(ef,`com.raquo.laminar.modifiers.CompositeKeySetter`,{cS:1,a1:1,aO:1});function tf(e,t,n){this.hZ=null,this.i0=null,this.hY=null,this.hZ=e,this.i0=t,this.hY=n}R=tf.prototype=new z,R.constructor=tf,R.c2=(function(e){this.hY.lz(e,this.hZ,this.i0)}),new V().i(tf,`com.raquo.laminar.modifiers.KeySetter`,{cT:1,a1:1,aO:1});function nf(e,t){if(this.g2=null,this.i4=null,this.i5=null,this.i4=t,Vu(this),e===null)throw kf(new Af,`Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load`);if(!Io().mQ(e,document))throw kf(new Af,`Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering`);this.i5=e,this.n2()}R=nf.prototype=new z,R.constructor=nf,R.fE=(function(){return this.g2}),R.k2=(function(e){this.g2=e}),R.n2=(function(){return this.g2.jM(),Cs().fA(this,this.i4,void 0)}),R.dF=(function(){return this.i5}),new V().i(nf,`com.raquo.laminar.nodes.RootNode`,{d8:1,at:1,aQ:1});function rf(e,t,n){this.g4=null,this.i8=null,this.i8=e,Hu(this,e,!1)}R=rf.prototype=new Wu,R.constructor=rf,R.h2=(function(){return this.i8}),new V().i(rf,`com.raquo.laminar.tags.CustomHtmlTag`,{db:1,aR:1,au:1});function af(){this.dT=null,this.dQ=null,this.dR=!1,this.dS=null,this.dU=!1,this.dV=null,this.dW=!1,this.ia=null,this.ib=!1,qu(this,`wa-button`)}R=af.prototype=new Yu,R.constructor=af,R.lw=(function(){return this.ib||=(this.ia=pf(),!0),this.ia}),R.fy=(function(){return hn}),new V().i(af,`io.github.nguyenyou.webawesome.laminar.Button$`,{de:1,ao:1,an:1});var of;function sf(){return of||=new af,of}function cf(){this.cC=null,this.dN=null,this.ic=null,this.id=!1,ku(this,`tooltip`,new Ku)}R=cf.prototype=new ju,R.constructor=cf,R.n8=(function(){return this.id||=(this.ic=uf().D(`none`),!0),this.ic}),new V().i(cf,`io.github.nguyenyou.webawesome.laminar.CommonKeys$CopyButtonTooltip$`,{df:1,am:1,a6:1});var lf;function uf(){return lf||=new cf,lf}function df(){this.cC=null,this.dN=null,this.ie=null,this.ig=!1,ku(this,`appearance`,new Ku)}R=df.prototype=new ju,R.constructor=df,R.mm=(function(){return this.ig||=(this.ie=pf().D(`filled`),!0),this.ie}),new V().i(df,`io.github.nguyenyou.webawesome.laminar.CommonKeys$ExtendedAppearance$`,{dg:1,am:1,a6:1});var ff;function pf(){return ff||=new df,ff}function mf(){this.cC=null,this.dN=null,this.ih=null,this.ii=!1,ku(this,`type`,new Ku)}R=mf.prototype=new ju,R.constructor=mf,R.nI=(function(){return this.ii||=(this.ih=gf().D(`text`),!0),this.ih}),new V().i(mf,`io.github.nguyenyou.webawesome.laminar.CommonKeys$InputInputType$`,{dh:1,am:1,a6:1});var hf;function gf(){return hf||=new mf,hf}function _f(){this.dT=null,this.dQ=null,this.dR=!1,this.dS=null,this.dU=!1,this.dV=null,this.dW=!1,this.iy=null,this.iz=!1,this.is=null,this.it=!1,this.il=null,this.im=!1,this.ij=null,this.ik=!1,this.iu=null,this.iv=!1,this.io=null,this.ip=!1,this.iq=null,this.ir=!1,this.iw=null,this.ix=!1,qu(this,`wa-copy-button`)}R=_f.prototype=new Yu,R.constructor=_f,R.dH=(function(){return this.iz||=(this.iy=(Y(),ku(new Au,`value`,qo().b9)),!0),this.iy}),R.fF=(function(){return this.it||=(this.is=(Y(),ku(new Au,`from`,qo().b9)),!0),this.is}),R.lX=(function(){return this.im||=(this.il=(Y(),ku(new Au,`disabled`,qo().hO)),!0),this.il}),R.lN=(function(){return this.ik||=(this.ij=(Y(),ku(new Au,`copy-label`,qo().b9)),!0),this.ij}),R.nD=(function(){return this.iv||=(this.iu=(Y(),ku(new Au,`success-label`,qo().b9)),!0),this.iu}),R.m9=(function(){return this.ip||=(this.io=(Y(),ku(new Au,`error-label`,qo().b9)),!0),this.io}),R.mk=(function(){return this.ir||=(this.iq=(Y(),ku(new Au,`feedback-duration`,qo().lb())),!0),this.iq}),R.nM=(function(){return this.ix||=(this.iw=uf(),!0),this.iw}),R.fy=(function(){return zi}),new V().i(_f,`io.github.nguyenyou.webawesome.laminar.CopyButton$`,{di:1,ao:1,an:1});var vf;function yf(){return vf||=new _f,vf}function bf(){this.dT=null,this.dQ=null,this.dR=!1,this.dS=null,this.dU=!1,this.dV=null,this.dW=!1,this.iG=null,this.iH=!1,this.iI=null,this.iJ=!1,qu(this,`wa-icon`)}R=bf.prototype=new Yu,R.constructor=bf,R.eg=(function(){return this.iH||=(this.iG=(Y(),ku(new Au,`name`,qo().b9)),!0),this.iG}),R.hc=(function(){return this.iJ||=(this.iI=(Y(),ku(new Au,`variant`,qo().b9)),!0),this.iI}),R.fy=(function(){return Bi}),new V().i(bf,`io.github.nguyenyou.webawesome.laminar.Icon$`,{dk:1,ao:1,an:1});var xf;function Sf(){return xf||=new bf,xf}function Cf(){this.dT=null,this.dQ=null,this.dR=!1,this.dS=null,this.dU=!1,this.dV=null,this.dW=!1,this.iK=null,this.iL=!1,qu(this,`wa-input`)}R=Cf.prototype=new Yu,R.constructor=Cf,R.nN=(function(){return this.iL||=(this.iK=gf(),!0),this.iK}),R.fy=(function(){return Xi}),new V().i(Cf,`io.github.nguyenyou.webawesome.laminar.Input$`,{dl:1,ao:1,an:1});var wf;function Tf(){return wf||=new Cf,wf}function Ef(){}R=Ef.prototype=new Td,R.constructor=Ef,R.f=(function(e){return Y().G}),new V().i(Ef,`io.github.nguyenyou.webawesome.laminar.WebComponent$toL$`,{dn:1,e7:1,f:1});function Df(e){if(e.a5.Z)return e.a5.Q().gV()+`[]`;for(var t=e.a5.N,n=t.length-1|0;n>=0&&t.charCodeAt(n)===36;)n=n-1|0;if(n>=0&&(t.charCodeAt(n)-48|0)>>>0<=9){for(n=n-1|0;n>=0&&(t.charCodeAt(n)-48|0)>>>0<=9;)n=n-1|0;for(;n>=0&&t.charCodeAt(n)===36;)n=n-1|0}for(;;){if(n>=0)var r=n,i=t.charCodeAt(r),a=i!==36&&i!==46;else var a=!1;if(a)n=n-1|0;else break}var o=1+n|0;return t.substring(o)}function Of(e){this.g6=null,this.a5=e}R=Of.prototype=new z,R.constructor=Of,R.y=(function(){return(this.a5.Y?`interface `:this.a5.X?``:`class `)+this.a5.N}),R.gV=(function(){return this.g6===null&&(this.g6=Df(this)),this.g6}),new V().i(Of,`java.lang.Class`,{dw:1,a:1,W:1});function kf(e,t){return yd(e,t,null,!0,!0),e}var Af=class extends bd{};new V().i(Af,`java.lang.Exception`,{H:1,B:1,a:1});function jf(){}R=jf.prototype=new z,R.constructor=jf;function Mf(){}Mf.prototype=R;function Nf(){this.kX=null,Pf=this,qh(),this.kX=lp()}R=Nf.prototype=new Dd,R.constructor=Nf,R.nm=(function(e){if(!e)throw Nm(new Fm,`requirement failed`)}),new V().i(Nf,`scala.Predef$`,{eg:1,e9:1,ea:1});var Pf;function Ff(){return Pf||=new Nf,Pf}function If(e,t){switch(t){case 0:return e.aV;case 1:return e.aN;default:throw Lm(new zm,t+` is out of bounds (min 0, max 1)`)}}function Lf(e,t){return e.es=t,e}function Rf(){this.es=null}R=Rf.prototype=new z,R.constructor=Rf;function zf(){}zf.prototype=R,R.ao=(function(e){return this.es.gN(e,Rv())}),R.aM=(function(){return this.es.fI(Rv())}),R.ct=(function(e){return this.es.gN(e,Rv())});function Bf(e,t){return e.fi=t,e}function Vf(){this.fi=null}R=Vf.prototype=new z,R.constructor=Vf;function Hf(){}Hf.prototype=R,R.ao=(function(e){return this.fi.ao(e)}),R.aM=(function(){return this.fi.aM()});function Uf(e,t){if(t<0)return 1;var n=e.r();if(n>=0)return n===t?0:n<t?-1:1;for(var r=0,i=e.i();i.j();){if(r===t)return 1;i.h(),r=1+r|0}return r-t|0}function Wf(e,t){return new lh(e).gG(t)}function Gf(e,t,n){var r=t>0?t:0,i=n<0?-1:n<=r?0:n-r|0;return i===0?Yf().M:new fh(e,r,i)}function Kf(e,t){for(var n=t.i();e.j();)if(!n.j()||!G().m(e.h(),n.h()))return!1;return!n.j()}function qf(){this.M=null,Jf=this,this.M=new rh}R=qf.prototype=new z,R.constructor=qf,R.aM=(function(){return new b_}),R.ao=(function(e){return e.i()}),new V().i(qf,`scala.collection.Iterator$`,{es:1,a:1,I:1});var Jf;function Yf(){return Jf||=new qf,Jf}function Xf(e,t){return e.gh=t,e}function Zf(){this.gh=null}R=Zf.prototype=new z,R.constructor=Zf;function Qf(){}Qf.prototype=R,R.ao=(function(e){return this.gh.ao(e)});function $f(){}R=$f.prototype=new z,R.constructor=$f,R.ki=(function(e){return ev(e)?e:nh(e)?new Cy(new mp((e=>(()=>e.i()))(e))):Ly(new Ry,X().gP(e))}),R.aM=(function(){return new pm(new J((e=>this.ki(e))),(_g(),new vg))}),R.ao=(function(e){return this.ki(e)}),new V().i($f,`scala.collection.View$`,{eG:1,a:1,I:1});var ep;function tp(){return ep||=new $f,ep}function np(e,t,n,r,i,a){this.N=0,this.a6=0,this.aa=null,this.bb=null,this.aC=0,this.b1=0,this.N=e,this.a6=t,this.aa=n,this.bb=r,this.aC=i,this.b1=a}R=np.prototype=new Md,R.constructor=np,R.aB=(function(){return this.aC}),R.dc=(function(){return this.b1}),R.de=(function(e){return this.aa.a[e<<1]}),R.cv=(function(e){return this.aa.a[1+(e<<1)|0]}),R.kn=(function(e){return new Z(this.aa.a[e<<1],this.aa.a[1+(e<<1)|0])}),R.eW=(function(e){return this.bb.a[e]}),R.cu=(function(e){return this.aa.a[(this.aa.a.length-1|0)-e|0]}),R.gD=(function(e,t,n,r){var i=Rl().dE(n,r),a=Rl().db(i);if((this.N&a)!==0){var o=Rl().c5(this.N,i,a);if(G().m(e,this.de(o)))return this.cv(o);throw new qm(`key not found: `+e)}if((this.a6&a)!==0)return this.cu(Rl().c5(this.a6,i,a)).gD(e,t,n,5+r|0);throw new qm(`key not found: `+e)}),R.gT=(function(e,t,n,r,i){var a=Rl().dE(n,r),o=Rl().db(a);if((this.N&o)!==0){var s=Rl().c5(this.N,a,o);return G().m(e,this.de(s))?this.cv(s):i.a3()}return(this.a6&o)===0?i.a3():this.cu(Rl().c5(this.a6,a,o)).gT(e,t,n,5+r|0,i)}),R.gH=(function(e,t,n,r){var i=Rl().dE(n,r),a=Rl().db(i);if((this.N&a)!==0){var o=Rl().c5(this.N,i,a);return this.bb.a[o]===t&&G().m(e,this.de(o))}return(this.a6&a)!==0&&this.cu(Rl().c5(this.a6,i,a)).gH(e,t,n,5+r|0)}),R.kM=(function(e,t,n,r,i,a){var o=Rl().dE(r,i),s=Rl().db(o);if((this.N&s)!==0){var c=Rl().c5(this.N,o,s),l=this.de(c),u=this.eW(c);if(u===n&&G().m(l,e)){if(a){var d=this.cv(c);return Object.is(l,e)&&Object.is(d,t)?this:this.lM(s,e,t)}return this}var f=this.cv(c),p=ol().bR(u);return this.lK(s,p,this.h1(l,f,u,p,e,t,n,r,5+i|0))}if((this.a6&s)!==0){var m=Rl().c5(this.a6,o,s),h=this.cu(m),g=h.kN(e,t,n,r,5+i|0,a);return g===h?this:this.lL(s,h,g)}return this.lJ(s,e,n,r,t)}),R.h1=(function(e,t,n,r,i,a,o,s,c){if(c>=32)return new rp(n,r,og().gQ(new Q([new Z(e,t),new Z(i,a)])));var l=Rl().dE(r,c),u=Rl().dE(s,c),d=r+s|0;if(l!==u){var f=Rl().db(l)|Rl().db(u);if(l<u){for(var p=new Q([e,t,i,a]),m=new B(p.k()),h=g_(new v_,new Wy(p)),g=0;h.aZ>0;)m.a[g]=h.h(),g=1+g|0;return new np(f,0,m,new Oa(new Int32Array([n,o])),2,d)}for(var _=new Q([i,a,e,t]),v=new B(_.k()),y=g_(new v_,new Wy(_)),b=0;y.aZ>0;)v.a[b]=y.h(),b=1+b|0;return new np(f,0,v,new Oa(new Int32Array([o,n])),2,d)}for(var x=Rl().db(l),S=this.h1(e,t,n,r,i,a,o,s,5+c|0),C=new Q([S]),w=new B(C.k()),T=g_(new v_,new Wy(C)),E=0;T.aZ>0;)w.a[E]=T.h(),E=1+E|0;return new np(0,x,w,Wc().ge,S.aB(),S.dc())}),R.gW=(function(){return this.a6!==0}),R.h3=(function(){return ud().da(this.a6)}),R.fG=(function(){return this.N!==0}),R.h5=(function(){return ud().da(this.N)}),R.eT=(function(e){return ud().da(this.N&(e-1|0))}),R.h4=(function(e){return ud().da(this.a6&(e-1|0))}),R.lM=(function(e,t,n){var r=this.eT(e)<<1,i=this.aa,a=new B(i.a.length),o=i.a.length;return i.o(0,a,0,o),a.a[1+r|0]=n,new np(this.N,this.a6,a,this.bb,this.aC,this.b1)}),R.lL=(function(e,t,n){var r=(this.aa.a.length-1|0)-this.h4(e)|0,i=this.aa,a=new B(i.a.length),o=i.a.length;return i.o(0,a,0,o),a.a[r]=n,new np(this.N,this.a6,a,this.bb,(this.aC-t.aB()|0)+n.aB()|0,(this.b1-t.dc()|0)+n.dc()|0)}),R.lJ=(function(e,t,n,r,i){var a=this.eT(e),o=a<<1,s=this.aa,c=new B(2+s.a.length|0);s.o(0,c,0,o),c.a[o]=t,c.a[1+o|0]=i;var l=2+o|0,u=s.a.length-o|0;s.o(o,c,l,u);var d=this.mN(this.bb,a,n);return new np(this.N|e,this.a6,c,d,1+this.aC|0,this.b1+r|0)}),R.n1=(function(e,t,n){var r=this.eT(e),i=r<<1,a=(this.aa.a.length-2|0)-this.h4(e)|0,o=this.aa,s=new B(o.a.length-1|0);o.o(0,s,0,i);var c=2+i|0,l=a-i|0;o.o(c,s,i,l),s.a[a]=n;var u=2+a|0,d=1+a|0,f=(o.a.length-a|0)-2|0;o.o(u,s,d,f);var p=this.kx(this.bb,r);return this.N^=e,this.a6|=e,this.aa=s,this.bb=p,this.aC=(this.aC-1|0)+n.aB()|0,this.b1=(this.b1-t|0)+n.dc()|0,this}),R.lK=(function(e,t,n){var r=this.eT(e),i=r<<1,a=(this.aa.a.length-2|0)-this.h4(e)|0,o=this.aa,s=new B(o.a.length-1|0);o.o(0,s,0,i);var c=2+i|0,l=a-i|0;o.o(c,s,i,l),s.a[a]=n;var u=2+a|0,d=1+a|0,f=(o.a.length-a|0)-2|0;o.o(u,s,d,f);var p=this.kx(this.bb,r);return new np(this.N^e,this.a6|e,s,p,(this.aC-1|0)+n.aB()|0,(this.b1-t|0)+n.dc()|0)}),R.dD=(function(e){for(var t=ud().da(this.N),n=0;n<t;)e.cr(this.de(n),this.cv(n)),n=1+n|0;for(var r=ud().da(this.a6),i=0;i<r;)this.cu(i).dD(e),i=1+i|0}),R.q=(function(e){if(e instanceof np){if(this===e)return!0;if(this.b1===e.b1&&this.a6===e.a6&&this.N===e.N&&this.aC===e.aC&&U().gJ(this.bb,e.bb)){var t=this.aa,n=e.aa,r=this.aa.a.length;if(t===n)return!0;for(var i=!0,a=0;i&&a<r;)i=G().m(t.a[a],n.a[a]),a=1+a|0;return i}return!1}return!1}),R.u=(function(){throw new Gm(`Trie nodes do not support hashing.`)}),R.y=(function(){var e=da(this);return ea(this)+`@`+(e>>>0).toString(16)}),R.k3=(function(){for(var e=this.aa.c(),t=e.a.length,n=ud().da(this.N)<<1;n<t;)e.a[n]=e.a[n].k4(),n=1+n|0;return new np(this.N,this.a6,e,this.bb.c(),this.aC,this.b1)}),R.gS=(function(e){return this.cu(e)}),R.kN=(function(e,t,n,r,i,a){return this.kM(e,t,n,r,i,a)}),R.k4=(function(){return this.k3()}),new V().i(np,`scala.collection.immutable.BitmapIndexedMapNode`,{bs:1,bB:1,aF:1});function rp(e,t,n){this.gk=0,this.cO=0,this.a7=null,this.gk=e,this.cO=t,this.a7=n,Ff().nm(this.a7.k()>=2)}R=rp.prototype=new Md,R.constructor=rp,R.ef=(function(e){for(var t=this.a7.i(),n=0;t.j();){if(G().m(t.h().aV,e))return n;n=1+n|0}return-1}),R.aB=(function(){return this.a7.k()}),R.gD=(function(e,t,n,r){var i=this.mx(e,t,n,r);return i.d()?Yf().M.h():i.az()}),R.mx=(function(e,t,n,r){if(this.cO===n){var i=this.ef(e);return i>=0?new f_(this.a7.p(i).aN):d_()}return d_()}),R.gT=(function(e,t,n,r,i){if(this.cO===n){var a=this.ef(e);return a===-1?i.a3():this.a7.p(a).aN}return i.a3()}),R.gH=(function(e,t,n,r){return this.cO===n&&this.ef(e)>=0}),R.kN=(function(e,t,n,r,i,a){var o=this.ef(e);return o>=0?a?Object.is(this.a7.p(o).aN,t)?this:new rp(n,r,this.a7.dh(o,new Z(e,t))):this:new rp(n,r,this.a7.d8(new Z(e,t)))}),R.gW=(function(){return!1}),R.h3=(function(){return 0}),R.cu=(function(e){throw Lm(new zm,`No sub-nodes present in hash-collision leaf node.`)}),R.fG=(function(){return!0}),R.h5=(function(){return this.a7.k()}),R.de=(function(e){return this.a7.p(e).aV}),R.cv=(function(e){return this.a7.p(e).aN}),R.kn=(function(e){return this.a7.p(e)}),R.eW=(function(e){return this.gk}),R.dD=(function(e){this.a7.bF(new J((t=>{var n=t.aV,r=t.aN;return e.cr(n,r)})))}),R.q=(function(e){if(e instanceof rp){if(this===e)return!0;if(this.cO===e.cO&&this.a7.k()===e.a7.k()){for(var t=this.a7.i();t.j();){var n=t.h(),r=n.aV,i=n.aN,a=e.ef(r);if(a<0||!G().m(i,e.a7.p(a).aN))return!1}return!0}return!1}return!1}),R.u=(function(){throw new Gm(`Trie nodes do not support hashing.`)}),R.y=(function(){var e=da(this);return ea(this)+`@`+(e>>>0).toString(16)}),R.dc=(function(){return Math.imul(this.a7.k(),this.cO)}),R.gS=(function(e){return this.cu(e)}),R.k4=(function(){return new rp(this.gk,this.cO,this.a7)}),new V().i(rp,`scala.collection.immutable.HashCollisionMapNode`,{bu:1,bB:1,aF:1});function ip(){this.fn=null,ap=this,this.fn=new pb(jl().jk)}R=ip.prototype=new z,R.constructor=ip,R.ms=(function(e){return e instanceof pb?e:e.r()===0?this.fn:new Hh().gC(e).h9()}),R.ao=(function(e){return this.ms(e)}),new V().i(ip,`scala.collection.immutable.HashMap$`,{eN:1,a:1,az:1});var ap;function op(){return ap||=new ip,ap}function sp(){}R=sp.prototype=new z,R.constructor=sp,R.mu=(function(e){return A_(e)&&e.d()?ob():e instanceof pb||e instanceof sb||e instanceof cb||e instanceof lb||e instanceof ub?e:new rg().jN(e).ky()}),R.ao=(function(e){return this.mu(e)}),new V().i(sp,`scala.collection.immutable.Map$`,{f4:1,a:1,az:1});var cp;function lp(){return cp||=new sp,cp}function up(e,t,n){var r=t.r();if(r!==-1){var i=r+n|0;e.aT(i<0?0:i)}}function dp(){}R=dp.prototype=new z,R.constructor=dp,R.mv=(function(e){var t=e.r();return wb(new jb,t>0?aa((1+t|0)/.75):16,.75).jQ(e)}),R.aM=(function(){return new Sg(16,.75)}),R.ao=(function(e){return this.mv(e)}),new V().i(dp,`scala.collection.mutable.HashSet$`,{fN:1,a:1,I:1});var fp;function pp(){return fp||=new dp,fp}function mp(e){this.jA=null,this.jA=e}R=mp.prototype=new Fd,R.constructor=mp,R.a3=(function(){return(0,this.jA)()}),new V().i(mp,`scala.runtime.AbstractFunction0.$$Lambda$07eded5776954a9c145e92c329afd52873ad179c`,{gu:1,bR:1,ap:1});function J(e){this.jB=null,this.jB=e}R=J.prototype=new Ld,R.constructor=J,R.f=(function(e){return(0,this.jB)(e)}),new V().i(J,`scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919`,{gv:1,bS:1,f:1});function hp(e){this.jC=null,this.jC=e}R=hp.prototype=new zd,R.constructor=hp,R.cr=(function(e,t){return(0,this.jC)(e,t)}),new V().i(hp,`scala.runtime.AbstractFunction2.$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8`,{gw:1,bT:1,aw:1});var gp=new V().i(0,`scala.runtime.Nothing$`,{gB:1,B:1,a:1});function _p(){}R=_p.prototype=new z,R.constructor=_p,R.mw=(function(e){return(t=>e.f(t))}),new V().i(_p,`scala.scalajs.js.Any$`,{gI:1,gJ:1,gK:1});var vp;function yp(){return vp||=new _p,vp}function bp(){}R=bp.prototype=new Fd,R.constructor=bp;function xp(){}xp.prototype=R;function Sp(){}R=Sp.prototype=new Ld,R.constructor=Sp;function Cp(){}Cp.prototype=R;function wp(){}R=wp.prototype=new zd,R.constructor=wp;function Tp(){}Tp.prototype=R;function Ep(){}R=Ep.prototype=new Vd,R.constructor=Ep;function Dp(){}Dp.prototype=R;function Op(e,t,n,r){if(this.hf=null,r===null)throw Hm(new Um);this.hf=void 0}R=Op.prototype=new z,R.constructor=Op,R.y=(function(){return Wa(this)}),new V().i(Op,`com.raquo.airstream.core.Observer$$anon$8`,{c1:1,c2:1,bY:1,bZ:1});function kp(e){if(this.hr=null,this.hs=!1,this.kP=null,e===null)throw Hm(new Um);Xo(this)}R=kp.prototype=new z,R.constructor=kp,R.nF=(function(){return this.hs||=(this.hr=new Gu(`svg`,!1),!0),this.hr}),new V().i(kp,`com.raquo.laminar.api.Laminar$svg$`,{cl:1,cC:1,cv:1,cx:1});function Ap(){this.G=null,jp=this,this.G=new By}R=Ap.prototype=new z,R.constructor=Ap,new V().i(Ap,`com.raquo.laminar.api.package$`,{co:1,aM:1,aN:1,aL:1});var jp;function Y(){return jp||=new Ap,jp}function Mp(e){this.i7=null,this.g3=null,this.i7=d_(),this.g3=Io().lQ(e)}R=Mp.prototype=new z,R.constructor=Mp,R.kG=(function(e){this.i7=e}),R.kO=(function(e){}),R.c2=(function(e){Cs().fA(e,this,void 0)}),R.nJ=(function(){return this.g3.data}),R.dF=(function(){return this.g3}),new V().i(Mp,`com.raquo.laminar.nodes.TextNode`,{da:1,at:1,a1:1,aP:1});function Np(){}R=Np.prototype=new z,R.constructor=Np;function Pp(){}Pp.prototype=R;function Fp(e,t){return e===t}function Ip(e){return e?1231:1237}var Lp=new V().i(0,`java.lang.Boolean`,{dt:1,a:1,Z:1,W:1},(e=>typeof e==`boolean`));function Rp(e){return e}function zp(e,t){return t instanceof Zi&&e===t.c}var Bp=new V().i(0,`java.lang.Character`,{aX:1,a:1,Z:1,W:1},(e=>e instanceof Zi));function Vp(e,t){return yd(e,t,null,!0,!0),e}var Hp=class extends Af{};new V().i(Hp,`java.lang.RuntimeException`,{P:1,H:1,B:1,a:1});function Up(e){return e.l=``,e}function Wp(e,t){return Up(e),e.l=t,e}function Gp(){this.l=null}R=Gp.prototype=new z,R.constructor=Gp,R.jT=(function(e){var t=_d().n4(e,0,e.a.length);return this.l=``+this.l+t,this}),R.y=(function(){return this.l}),R.k=(function(){return this.l.length}),R.jZ=(function(e){return this.l.charCodeAt(e)}),new V().i(Gp,`java.lang.StringBuilder`,{dP:1,av:1,aV:1,a:1});function Kp(){}R=Kp.prototype=new Mf,R.constructor=Kp;function qp(){}qp.prototype=R;function Jp(){}R=Jp.prototype=new z,R.constructor=Jp,R.y=(function(){return`<function1>`}),R.gE=(function(e){throw new Xm(e)}),R.f=(function(e){this.gE(e)}),new V().i(Jp,`scala.PartialFunction$$anon$1`,{ef:1,f:1,j:1,a:1});function Yp(){}R=Yp.prototype=new z,R.constructor=Yp;function Xp(){}Xp.prototype=R,R.r=(function(){return-1}),R.bq=(function(e,t,n){return ul(this,e,t,n)}),R.d7=(function(e,t,n,r){return fl(this,e,t,n,r)}),R.i=(function(){return this}),R.gG=(function(e){return Wf(this,e)}),R.dd=(function(e){return this.f3(e,-1)}),R.f3=(function(e,t){return Gf(this,e,t)}),R.y=(function(){return`<iterator>`});function Zp(){this.gh=null,this.j8=null,this.j9=null,Xf(this,lp()),Qp=this,this.j8=xa(new Sa),this.j9=new mp((()=>this.j8))}R=Zp.prototype=new Qf,R.constructor=Zp,new V().i(Zp,`scala.collection.Map$`,{eA:1,eB:1,a:1,az:1});var Qp;function $p(){return Qp||=new Zp,Qp}function em(e,t){return e.e1=t,e}function tm(){this.e1=null}R=tm.prototype=new z,R.constructor=tm;function nm(){}nm.prototype=R,R.jY=(function(e){return this.e1.ct(e)}),R.kh=(function(e){return this.e1.ao(e)}),R.aM=(function(){return this.e1.aM()}),R.ct=(function(e){return this.jY(e)}),R.ao=(function(e){return this.kh(e)});function rm(e){return e.c4(new J((e=>e)))}function im(e,t){return e.eU(new wy(e,t))}function am(e){return e.bj(0)===0}function om(e,t){var n=e.r();if(n!==-1){var r=t.r();if(r!==-1){if(n!==r)return!1;if(n===0)return!0}}return Kf(e.i(),t)}function sm(e,t){for(var n=e.b6().aM(),r=e.i();r.j();)n.aK(t.f(r.h()));return n.aS()}function cm(){this.fi=null,Bf(this,qh())}R=cm.prototype=new Hf,R.constructor=cm,R.mt=(function(e){return A_(e)?e:Vf.prototype.ao.call(this,e)}),R.ao=(function(e){return this.mt(e)}),new V().i(cm,`scala.collection.immutable.Iterable$`,{eS:1,er:1,a:1,I:1});var lm;function um(){return lm||=new cm,lm}function dm(){this.I=null,this.jg=null,this.jh=!1,fm=this,this.I=mb(new xb,El())}R=dm.prototype=new z,R.constructor=dm,R.ct=(function(e){return this.gP(e)}),R.kA=(function(){return this.jh||=(this.jg=new Ol,!0),this.jg}),R.nq=(function(e,t){return mb(new xb,new mp(((e,t)=>(()=>{for(var n=e.fs,r=t.dy;r>0&&_b(n)!==X().I;)n=n.aU(),e.fs=n,r=r-1|0,t.dy=r;return n}))(new Wd(e),new Ud(t))))}),R.gP=(function(e){return e instanceof xb?e:e.r()===0?this.I:mb(new xb,new mp((()=>this.kB(e.i()))))}),R.kC=(function(e,t){return e.j()?hb(new xb,e.h(),mb(new xb,new mp((()=>this.kC(e,t))))):t.a3()}),R.kB=(function(e){return e.j()?hb(new xb,e.h(),mb(new xb,new mp((()=>this.kB(e))))):this.I}),R.aM=(function(){return new Uh}),R.ao=(function(e){return this.gP(e)}),new V().i(dm,`scala.collection.immutable.LazyList$`,{eT:1,a:1,I:1,Y:1});var fm;function X(){return fm||=new dm,fm}function pm(e,t){if(this.ju=null,this.eD=null,this.ju=e,t===null)throw Hm(new Um);this.eD=t}R=pm.prototype=new z,R.constructor=pm,R.lq=(function(e){return this.eD.aK(e),this}),R.lh=(function(e){return this.eD.aR(e),this}),R.aT=(function(e){this.eD.aT(e)}),R.aS=(function(){return this.ju.f(this.eD.aS())}),R.aK=(function(e){return this.lq(e)}),R.aR=(function(e){return this.lh(e)}),new V().i(pm,`scala.collection.mutable.Builder$$anon$1`,{fK:1,D:1,F:1,K:1});function mm(e,t){return e.d2=t,e}function hm(){this.d2=null}R=hm.prototype=new z,R.constructor=hm;function gm(){}gm.prototype=R,R.aT=(function(e){}),R.lr=(function(e){return this.d2.aK(e),this}),R.li=(function(e){return this.d2.aR(e),this}),R.aS=(function(){return this.d2}),R.aK=(function(e){return this.lr(e)}),R.aR=(function(e){return this.li(e)}),new V().i(hm,`scala.collection.mutable.GrowableBuilder`,{aI:1,D:1,F:1,K:1});function _m(e){this.jF=null,this.jF=e}R=_m.prototype=new xp,R.constructor=_m,R.a3=(function(){return(0,this.jF)()}),new V().i(_m,`scala.scalajs.runtime.AnonFunction0.$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d`,{gP:1,gO:1,bR:1,ap:1});function vm(e){this.jG=null,this.jG=e}R=vm.prototype=new Cp,R.constructor=vm,R.f=(function(e){return(0,this.jG)(e)}),new V().i(vm,`scala.scalajs.runtime.AnonFunction1.$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1`,{gR:1,gQ:1,bS:1,f:1});function ym(e){this.jH=null,this.jH=e}R=ym.prototype=new Tp,R.constructor=ym,R.cr=(function(e,t){return(0,this.jH)(e,t)}),new V().i(ym,`scala.scalajs.runtime.AnonFunction2.$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7`,{gT:1,gS:1,bT:1,aw:1});function bm(e){this.jI=null,this.jI=e}R=bm.prototype=new Dp,R.constructor=bm,R.lz=(function(e,t,n){return(0,this.jI)(e,t,n)}),new V().i(bm,`scala.scalajs.runtime.AnonFunction3.$$Lambda$73f37e31ba038fe839c174212837da323f140c96`,{gV:1,gU:1,gx:1,e8:1});function xm(e,t){this.fb=null,this.fV=null,this.fb=e,this.fV=t}R=xm.prototype=new z,R.constructor=xm,R.c2=(function(e){var t=this.fV;t!==void 0&&t.kw(e,this.fb),Cs().fA(e,this.fb,void 0)}),R.nT=(function(e){return new xm(this.fb,e.ly(this.fV))}),new V().i(xm,`com.raquo.laminar.inserters.StaticChildInserter`,{cG:1,a1:1,cE:1,cI:1,cD:1});function Sm(e){e.g1=new Do(new _m((()=>{e.dP.jM()})),new _m((()=>{e.dP.lR()}))),e.em=ob()}function Cm(e,t,n,r,i){var a=e.em.df(t,new _m((()=>$()))),o=(e=>{for(var t=a;!t.d();){var r=t.s(),i=r.aV;if(i===null?e===null:ta(i,e)){var o=r.aN;if(o===null?n===null:ta(o,n))var s=n===null;else var s=!0}else var s=!1;if(s)return!0;t=t.n()}return!1}),s=rm(r);_return$1:{for(var c,l=i;;)if(l.d()){var c=$();break}else{var u=l.s(),d=l.n();if(o(u)){l=d;continue}for(var f=l,p=d;;)if(p.d()){var c=f;break _return$1}else{if(!o(p.s())){p=p.n();continue}for(var m=p,h=new hx(f.s(),$()),g=f.n(),_=h;g!==m;){var v=new hx(g.s(),$());_.aj=v,_=v,g=g.n()}for(var y=m.n(),b=y;!y.d();)if(!o(y.s()))y=y.n();else{for(;b!==y;){var x=new hx(b.s(),$());_.aj=x,_=x,b=b.n()}b=y.n(),y=y.n()}b.d()||(_.aj=b);var c=h;break _return$1}}}var S=e.em.df(t,new _m((()=>$()))),C=(e=>c.bQ(e.aV));_return$3:{for(var w,T=S;;)if(T.d()){var w=$();break}else{var E=T.s(),ee=T.n();if(C(E)){T=ee;continue}for(var te=T,D=ee;;)if(D.d()){var w=te;break _return$3}else{if(!C(D.s())){D=D.n();continue}for(var O=D,ne=new hx(te.s(),$()),re=te.n(),ie=ne;re!==O;){var ae=new hx(re.s(),$());ie.aj=ae,ie=ae,re=re.n()}for(var k=O.n(),oe=k;!k.d();)if(!C(k.s()))k=k.n();else{for(;oe!==k;){var A=new hx(oe.s(),$());ie.aj=A,ie=A,oe=oe.n()}oe=k.n(),k=k.n()}oe.d()||(ie.aj=oe);var w=ne;break _return$3}}}var se=(e=>new Z(e,n));if(s===$())var ce=$();else{for(var le=new hx(se(s.s()),$()),ue=le,de=s.n();de!==$();){var fe=new hx(se(de.s()),$());ue.aj=fe,ue=fe,de=de.n()}var ce=le}var pe=w.jV(ce),me=t.fW.k6(t.hR.f(e)),he=(e=>c.bQ(e));_return$5:{for(var ge,_e=me;;)if(_e.d()){var ge=$();break}else{var ve=_e.s(),ye=_e.n();if(he(ve)){_e=ye;continue}for(var be=_e,xe=ye;;)if(xe.d()){var ge=be;break _return$5}else{if(!he(xe.s())){xe=xe.n();continue}for(var Se=xe,Ce=new hx(be.s(),$()),we=be.n(),Te=Ce;we!==Se;){var Ee=new hx(we.s(),$());Te.aj=Ee,Te=Ee,we=we.n()}for(var j=Se.n(),M=j;!j.d();)if(!he(j.s()))j=j.n();else{for(;M!==j;){var N=new hx(M.s(),$());Te.aj=N,Te=N,M=M.n()}M=j.n(),j=j.n()}M.d()||(Te.aj=M);var ge=Ce;break _return$5}}}_return$7:{for(var De,Oe=s;;)if(Oe.d()){var De=$();break}else{var ke=Oe.s(),Ae=Oe.n();if(o(ke)){Oe=Ae;continue}for(var je=Oe,Me=Ae;;)if(Me.d()){var De=je;break _return$7}else{if(!o(Me.s())){Me=Me.n();continue}for(var Ne=Me,Pe=new hx(je.s(),$()),Fe=je.n(),Ie=Pe;Fe!==Ne;){var Le=new hx(Fe.s(),$());Ie.aj=Le,Ie=Le,Fe=Fe.n()}for(var Re=Ne.n(),ze=Re;!Re.d();)if(!o(Re.s()))Re=Re.n();else{for(;ze!==Re;){var Be=new hx(ze.s(),$());Ie.aj=Be,Ie=Be,ze=ze.n()}ze=Re.n(),Re=Re.n()}ze.d()||(Ie.aj=ze);var De=Pe;break _return$7}}}var Ve=ge.jV(De);e.em=e.em.di(t,pe),t.hT.cr(e,t.fW.k8(Ve))}function wm(e,t){Em(e,e.fe,t)&&Dm(e,t)}function Tm(e,t){var n=e.fe;e.fe=t,Em(e,n,t)||Dm(e,t)}function Em(e,t,n){var r=!t.d()&&!t.az().fE().bl.d(),i=!n.d()&&!n.az().fE().bl.d();return r&&!i}function Dm(e,t){Om(e,t.d()?d_():new f_(t.az().fE()))}function Om(e,t){if(t.d())e.g1.lH();else{var n=t.az();e.g1.nv(n)}}function km(){}R=km.prototype=new Pp,R.constructor=km;function Am(){}Am.prototype=R;var jm=class extends Hp{constructor(e){super(),yd(this,e,null,!0,!0)}};new V().i(jm,`java.lang.ArithmeticException`,{dr:1,P:1,H:1,B:1,a:1});var Mm=new V().i(0,`java.lang.Byte`,{du:1,a7:1,a:1,Z:1,W:1},(e=>fa(e)));function Nm(e,t){return yd(e,t,null,!0,!0),e}function Pm(e){return yd(e,null,null,!0,!0),e}var Fm=class extends Hp{};new V().i(Fm,`java.lang.IllegalArgumentException`,{aZ:1,P:1,H:1,B:1,a:1});var Im=class extends Hp{constructor(e){super(),yd(this,e,null,!0,!0)}};new V().i(Im,`java.lang.IllegalStateException`,{dA:1,P:1,H:1,B:1,a:1});function Lm(e,t){return yd(e,t,null,!0,!0),e}function Rm(e,t){return yd(e,`Index out of range: `+t,null,!0,!0),e}var zm=class extends Hp{};new V().i(zm,`java.lang.IndexOutOfBoundsException`,{b0:1,P:1,H:1,B:1,a:1});function Bm(){}R=Bm.prototype=new Pp,R.constructor=Bm,new V().i(Bm,`java.lang.JSConsoleBasedPrintStream$DummyOutputStream`,{dE:1,aU:1,aS:1,aW:1,aT:1});function Vm(e,t){return yd(e,t,null,!0,!0),e}function Hm(e){return yd(e,null,null,!0,!0),e}var Um=class extends Hp{};new V().i(Um,`java.lang.NullPointerException`,{dG:1,P:1,H:1,B:1,a:1});var Wm=new V().i(0,`java.lang.Short`,{dK:1,a7:1,a:1,Z:1,W:1},(e=>pa(e))),Gm=class extends Hp{constructor(e){super(),yd(this,e,null,!0,!0)}};new V().i(Gm,`java.lang.UnsupportedOperationException`,{dT:1,P:1,H:1,B:1,a:1});var Km=class extends Hp{constructor(e){super(),yd(this,e,null,!0,!0)}};new V().i(Km,`java.util.ConcurrentModificationException`,{dX:1,P:1,H:1,B:1,a:1});var qm=class extends Hp{constructor(e){super(),yd(this,e,null,!0,!0)}};new V().i(qm,`java.util.NoSuchElementException`,{dY:1,P:1,H:1,B:1,a:1});function Jm(){}R=Jm.prototype=new qp,R.constructor=Jm,R.f=(function(e){return e}),R.y=(function(){return`generalized constraint`}),new V().i(Jm,`scala.$less$colon$less$$anon$1`,{e3:1,e0:1,e1:1,f:1,a:1});function Ym(e){if(!e.iW){if(e.fg===null)var t=`null`;else{var n=ou().lu(e.fg),r=n===null?`of a JS class`:`of class `+n.a5.N;try{var t=e.fg+` (`+r+`)`}catch{var t=`an instance `+r}}e.iV=t,e.iW=!0}return e.iV}var Xm=class extends Hp{constructor(e){super(),this.fg=null,this.iV=null,this.iW=!1,this.fg=e,yd(this,null,null,!0,!0)}eX(){return Ym(this)}};new V().i(Xm,`scala.MatchError`,{eb:1,P:1,H:1,B:1,a:1});function Zm(){}R=Zm.prototype=new z,R.constructor=Zm;function Qm(){}Qm.prototype=R,R.ei=(function(){return new $m(this)}),R.d=(function(){return this===d_()}),R.r=(function(){return!this.d()|0}),R.i=(function(){return this.d()?Yf().M:new ih(this.az())});function $m(e){if(this.ep=0,this.j0=0,this.iZ=null,e===null)throw Hm(new Um);this.iZ=e,this.ep=0,this.j0=e.cx()}R=$m.prototype=new Xp,R.constructor=$m,R.j=(function(){return this.ep<this.j0}),R.h=(function(){var e=this.iZ.cy(this.ep);return this.ep=1+this.ep|0,e}),new V().i($m,`scala.Product$$anon$1`,{eh:1,s:1,b:1,c:1,t:1});function Z(e,t){this.aV=null,this.aN=null,this.aV=e,this.aN=t}R=Z.prototype=new z,R.constructor=Z,R.cx=(function(){return 2}),R.cy=(function(e){return If(this,e)}),R.y=(function(){return`(`+this.aV+`,`+this.aN+`)`}),R.cz=(function(){return`Tuple2`}),R.ei=(function(){return new zg(this)}),R.u=(function(){return q().h7(this,-116390334,!0)}),R.q=(function(e){return this===e||e instanceof Z&&G().m(this.aV,e.aV)&&G().m(this.aN,e.aN)}),new V().i(Z,`scala.Tuple2`,{b7:1,ei:1,a8:1,d:1,a:1});function eh(e){this.es=null,Lf(this,e)}R=eh.prototype=new zf,R.constructor=eh,new V().i(eh,`scala.collection.ClassTagSeqFactory$AnySeqDelegate`,{eo:1,en:1,a:1,I:1,Y:1});function th(e){return dl(e,e.bE()+`(`,`, `,`)`)}function nh(e){return!!(e&&e.$classData&&e.$classData.n.e)}function rh(){}R=rh.prototype=new Xp,R.constructor=rh,R.j=(function(){return!1}),R.n5=(function(){throw new qm(`next on empty iterator`)}),R.r=(function(){return 0}),R.h=(function(){this.n5()}),R.f3=(function(e,t){return this}),new V().i(rh,`scala.collection.Iterator$$anon$19`,{et:1,s:1,b:1,c:1,t:1});function ih(e){this.j2=null,this.et=!1,this.j2=e,this.et=!1}R=ih.prototype=new Xp,R.constructor=ih,R.j=(function(){return!this.et}),R.h=(function(){return this.et?Yf().M.h():(this.et=!0,this.j2)}),R.f3=(function(e,t){return this.et||e>0||t===0?Yf().M:this}),new V().i(ih,`scala.collection.Iterator$$anon$20`,{eu:1,s:1,b:1,c:1,t:1});function ah(e,t){if(this.j3=null,this.j5=null,this.fj=!1,this.j4=null,this.gg=null,this.j3=e,t===null)throw Hm(new Um);this.gg=t,this.j5=Tb(new jb),this.fj=!1}R=ah.prototype=new Xp,R.constructor=ah,R.j=(function(){for(;;)if(this.fj)return!0;else if(this.gg.j()){var e=this.gg.h();if(!this.j5.fz(this.j3.f(e)))continue;return this.j4=e,this.fj=!0,!0}else return!1}),R.h=(function(){return this.j()?(this.fj=!1,this.j4):Yf().M.h()}),new V().i(ah,`scala.collection.Iterator$$anon$8`,{ew:1,s:1,b:1,c:1,t:1});function oh(e,t){if(this.j6=null,this.fk=null,this.j6=e,t===null)throw Hm(new Um);this.fk=t}R=oh.prototype=new Xp,R.constructor=oh,R.r=(function(){return this.fk.r()}),R.j=(function(){return this.fk.j()}),R.h=(function(){return this.j6.f(this.fk.h())}),new V().i(oh,`scala.collection.Iterator$$anon$9`,{ex:1,s:1,b:1,c:1,t:1});function sh(e){for(;;)if(e.ba instanceof lh){var t=e.ba;if(e.ba=t.ba,e.cE=t.cE,t.bu!==null){e.bt===null&&(e.bt=t.bt);var n=t.bt;n===null&&ru().bU(),n.eu=e.bu,e.bu=t.bu}}else return}function ch(e){for(;;)if(e.bu===null)return e.ba=null,e.bt=null,!1;else{if(e.ba=e.bu.mH(),e.bt===e.bu){var t=e.bt;t===null&&ru().bU(),e.bt=t.eu}if(e.bu=e.bu.eu,sh(e),e.cE)return!0;if(!(e.ba!==null&&e.ba.j()))continue;return e.cE=!0,!0}}function lh(e){this.ba=null,this.bu=null,this.bt=null,this.cE=!1,this.ba=e,this.bu=null,this.bt=null,this.cE=!1}R=lh.prototype=new Xp,R.constructor=lh,R.j=(function(){return this.cE?!0:this.ba===null?!1:this.ba.j()?(this.cE=!0,!0):ch(this)}),R.h=(function(){if(this.j()){this.cE=!1;var e=this.ba;return e===null&&ru().bU(),e.h()}return Yf().M.h()}),R.gG=(function(e){var t=new ml(e,null);if(this.bu===null)this.bu=t,this.bt=t;else{var n=this.bt;n===null&&ru().bU(),n.eu=t,this.bt=t}return this.ba===null&&(this.ba=Yf().M),this}),new V().i(lh,`scala.collection.Iterator$ConcatIterator`,{bd:1,s:1,b:1,c:1,t:1});function uh(e){for(;e.cc>0;)e.cF.j()?(e.cF.h(),e.cc=e.cc-1|0):e.cc=0}function dh(e,t){if(e.bm<0)return-1;var n=e.bm-t|0;return n<0?0:n}function fh(e,t,n){this.cF=null,this.bm=0,this.cc=0,this.cF=e,this.bm=n,this.cc=t}R=fh.prototype=new Xp,R.constructor=fh,R.r=(function(){var e=this.cF.r();if(e<0)return-1;var t=e-this.cc|0,n=t<0?0:t;if(this.bm<0)return n;var r=this.bm;return r<n?r:n}),R.j=(function(){return uh(this),this.bm!==0&&this.cF.j()}),R.h=(function(){return uh(this),this.bm>0?(this.bm=this.bm-1|0,this.cF.h()):this.bm<0?this.cF.h():Yf().M.h()}),R.f3=(function(e,t){var n=e>0?e:0;if(t<0)var r=dh(this,n);else if(t<=n)var r=0;else if(this.bm<0)var r=t-n|0;else var i=dh(this,n),a=t-n|0,r=i<a?i:a;var o=this.cc+n|0;return r===0?Yf().M:o<0?(this.cc=2147483647,this.bm=0,Wf(this,new mp((()=>new fh(this.cF,o-2147483647|0,r))))):(this.cc=o,this.bm=r,this)}),new V().i(fh,`scala.collection.Iterator$SliceIterator`,{ez:1,s:1,b:1,c:1,t:1});function ph(e){for(var t=e,n=0;!t.d();)n=1+n|0,t=t.n();return n}function mh(e,t){return t<0?1:_h(e,t,0,e)}function hh(e,t){if(t<0)throw Lm(new zm,``+t);var n=e.k7(t);if(n.d())throw Lm(new zm,``+t);return n.s()}function gh(e,t){return Py(t)?vh(e,e,t):om(e,t)}function _h(e,t,n,r){for(var i=r,a=n;;)if(a===t)return!i.d()|0;else{if(!i.d()){var o=1+a|0,s=i.n();a=o,i=s;continue}return-1}}function vh(e,t,n){for(var r=n,i=t;;)if(i===r)return!0;else{if(!i.d()&&!r.d()&&G().m(i.s(),r.s())){var a=i.n(),o=r.n();i=a,r=o;continue}return i.d()&&r.d()}}function yh(e){if(this.ev=null,e===null)throw Hm(new Um);this.ev=e}R=yh.prototype=new Xp,R.constructor=yh,R.j=(function(){return!this.ev.d()}),R.h=(function(){var e=this.ev.s();return this.ev=this.ev.n(),e}),new V().i(yh,`scala.collection.StrictOptimizedLinearSeqOps$$anon$1`,{eD:1,s:1,b:1,c:1,t:1});function bh(e){return e.bn=0,e.ew=0,e.bc=-1,e}function xh(e){e.ce===null&&(e.ce=new Oa(Rl().eC<<1),e.ex=new(Fl.r()).C(Rl().eC))}function Sh(e,t){return bh(e),t.gW()&&wh(e,t),t.fG()&&Ch(e,t),e}function Ch(e,t){e.ds=t,e.bn=0,e.ew=t.h5()}function wh(e,t){xh(e),e.bc=1+e.bc|0;var n=e.bc<<1,r=1+(e.bc<<1)|0;e.ex.a[e.bc]=t,e.ce.a[n]=0,e.ce.a[r]=t.h3()}function Th(e){e.bc=e.bc-1|0}function Eh(e){for(;e.bc>=0;){var t=e.bc<<1,n=1+(e.bc<<1)|0,r=e.ce.a[t];if(r<e.ce.a[n]){var i=e.ce;i.a[t]=1+i.a[t]|0;var a=e.ex.a[e.bc].gS(r);if(a.gW()&&wh(e,a),a.fG())return Ch(e,a),!0}else Th(e)}return!1}function Dh(){this.bn=0,this.ew=0,this.ds=null,this.bc=0,this.ce=null,this.ex=null}R=Dh.prototype=new Xp,R.constructor=Dh;function Oh(){}Oh.prototype=R,R.j=(function(){return this.bn<this.ew||Eh(this)});function kh(e){return e.cN=-1,e.bo=-1,e.ey=new Oa(1+Rl().eC|0),e.ez=new(Fl.r()).C(1+Rl().eC|0),e}function Ah(e,t){return kh(e),Mh(e,t),Ph(e),e}function jh(e,t){e.fm=t,e.cN=t.h5()-1|0}function Mh(e,t){e.bo=1+e.bo|0,e.ez.a[e.bo]=t,e.ey.a[e.bo]=t.h3()-1|0}function Nh(e){e.bo=e.bo-1|0}function Ph(e){for(;e.bo>=0;){var t=e.ey.a[e.bo];if(e.ey.a[e.bo]=t-1|0,t>=0)Mh(e,e.ez.a[e.bo].gS(t));else{var n=e.ez.a[e.bo];if(Nh(e),n.fG())return jh(e,n),!0}}return!1}function Fh(){this.cN=0,this.fm=null,this.bo=0,this.ey=null,this.ez=null}R=Fh.prototype=new Xp,R.constructor=Fh;function Ih(){}Ih.prototype=R,R.j=(function(){return this.cN>=0||Ph(this)});function Lh(e){return e.e2!==null}function Rh(e,t,n,r){if(n<0||n>t.a.length)throw Yg(new Xg);var i=new Oa(1+t.a.length|0);t.o(0,i,0,n),i.a[n]=r;var a=1+n|0,o=t.a.length-n|0;return t.o(n,i,a,o),i}function zh(e,t,n,r,i,a,o){var s=t.eT(n),c=s<<1,l=t.aa,u=new B(2+l.a.length|0);l.o(0,u,0,c),u.a[c]=r,u.a[1+c|0]=o;var d=2+c|0,f=l.a.length-c|0;l.o(c,u,d,f);var p=Rh(e,t.bb,s,i);t.N|=n,t.aa=u,t.bb=p,t.aC=1+t.aC|0,t.b1=t.b1+a|0}function Bh(e){Lh(e)&&Vh(e),e.e2=null}function Vh(e){e.bY=e.bY.k3()}function Hh(){this.e2=null,this.bY=null,this.bY=new np(0,0,Wc().iT,Wc().ge,0,0)}R=Hh.prototype=new z,R.constructor=Hh,R.aT=(function(e){}),R.ek=(function(e,t,n,r,i,a){if(e instanceof np){var o=Rl().dE(i,a),s=Rl().db(o);if((e.N&s)!==0){var c=Rl().c5(e.N,o,s),l=e.de(c),u=e.eW(c);if(u===r&&G().m(l,t)){e.aa.a[1+(c<<1)|0]=n;return}var d=e.cv(c),f=ol().bR(u),p=e.h1(l,d,u,f,t,n,r,i,5+a|0);e.n1(s,f,p);return}if((e.a6&s)!==0){var m=Rl().c5(e.a6,o,s),h=e.cu(m),g=h.aB(),_=h.dc();this.ek(h,t,n,r,i,5+a|0),e.aC=e.aC+(h.aB()-g|0)|0,e.b1=e.b1+(h.dc()-_|0)|0;return}zh(this,e,s,t,r,i,n)}else if(e instanceof rp){var v=e.ef(t);if(v<0){e.a7=e.a7.d8(new Z(t,n));return}e.a7=e.a7.dh(v,new Z(t,n))}else throw new Xm(e)}),R.h9=(function(){return this.bY.aC===0?op().fn:(this.e2===null&&(this.e2=new pb(this.bY)),this.e2)}),R.jS=(function(e){Bh(this);var t=K().F(e.aV),n=ol().bR(t);return this.ek(this.bY,e.aV,e.aN,t,n,0),this}),R.dz=(function(e,t){Bh(this);var n=K().F(e);return this.ek(this.bY,e,t,n,ol().bR(n),0),this}),R.gC=(function(e){if(Bh(this),e instanceof pb)new k_(e,this);else if(Vy(e))e.dD(new hp(((e,t)=>this.dz(e,t))));else for(var t=e.i();t.j();)this.jS(t.h());return this}),R.aS=(function(){return this.h9()}),R.aK=(function(e){return this.jS(e)}),R.aR=(function(e){return this.gC(e)}),new V().i(Hh,`scala.collection.immutable.HashMapBuilder`,{eO:1,D:1,F:1,K:1,a5:1});function Uh(){this.e3=null,this.ji=null,this.lG()}R=Uh.prototype=new z,R.constructor=Uh,R.aT=(function(e){}),R.lG=(function(){var e=new Dl;this.ji=(X(),mb(new xb,new mp((()=>e.gK())))),this.e3=e}),R.np=(function(){return this.e3.gZ(new mp((()=>X().I))),this.ji}),R.ln=(function(e){var t=new Dl;return this.e3.gZ(new mp((()=>(X(),hb(new xb,e,(X(),mb(new xb,new mp((()=>t.gK()))))))))),this.e3=t,this}),R.lf=(function(e){if(e.r()!==0){var t=new Dl;this.e3.gZ(new mp((()=>X().kC(e.i(),new mp((()=>t.gK())))))),this.e3=t}return this}),R.aS=(function(){return this.np()}),R.aK=(function(e){return this.ln(e)}),R.aR=(function(e){return this.lf(e)}),new V().i(Uh,`scala.collection.immutable.LazyList$LazyBuilder`,{eV:1,D:1,F:1,K:1,a5:1});function Wh(e){this.e4=null,this.e4=e}R=Wh.prototype=new Xp,R.constructor=Wh,R.j=(function(){return _b(this.e4)!==X().I}),R.h=(function(){if(_b(this.e4)===X().I)return Yf().M.h();var e=this.e4.s();return this.e4=this.e4.aU(),e}),new V().i(Wh,`scala.collection.immutable.LazyList$LazyIterator`,{eX:1,s:1,b:1,c:1,t:1});function Gh(){Kh=this,$(),$()}R=Gh.prototype=new z,R.constructor=Gh,R.ct=(function(e){return $().h6(e)}),R.aM=(function(){return new jx}),R.ao=(function(e){return $().h6(e)}),new V().i(Gh,`scala.collection.immutable.List$`,{f2:1,a:1,I:1,Y:1,af:1});var Kh;function qh(){return Kh||=new Gh,Kh}function Jh(e,t){if(t===null)throw Hm(new Um);return e.e5=t,e.cR=0,e}function Yh(){this.cR=0,this.e5=null}R=Yh.prototype=new Xp,R.constructor=Yh;function Xh(){}Xh.prototype=R,R.j=(function(){return this.cR<2}),R.h=(function(){matchResult5$1:{var e,t=this.cR;if(t===0){var e=new Z(this.e5.bJ,this.e5.cP);break matchResult5$1}if(t===1){var e=new Z(this.e5.bK,this.e5.cQ);break matchResult5$1}var e=Yf().M.h()}return this.cR=1+this.cR|0,e}),R.dd=(function(e){return this.cR=this.cR+e|0,this});function Zh(e,t){if(t===null)throw Hm(new Um);return e.cS=t,e.cT=0,e}function Qh(){this.cT=0,this.cS=null}R=Qh.prototype=new Xp,R.constructor=Qh;function $h(){}$h.prototype=R,R.j=(function(){return this.cT<3}),R.h=(function(){var e;switch(this.cT){case 0:var e=new Z(this.cS.bv,this.cS.cf);break;case 1:var e=new Z(this.cS.bw,this.cS.cg);break;case 2:var e=new Z(this.cS.bx,this.cS.ch);break;default:var e=Yf().M.h()}return this.cT=1+this.cT|0,e}),R.dd=(function(e){return this.cT=this.cT+e|0,this});function eg(e,t){if(t===null)throw Hm(new Um);return e.c0=t,e.cU=0,e}function tg(){this.cU=0,this.c0=null}R=tg.prototype=new Xp,R.constructor=tg;function ng(){}ng.prototype=R,R.j=(function(){return this.cU<4}),R.h=(function(){var e;switch(this.cU){case 0:var e=new Z(this.c0.bd,this.c0.bL);break;case 1:var e=new Z(this.c0.be,this.c0.bM);break;case 2:var e=new Z(this.c0.bf,this.c0.bN);break;case 3:var e=new Z(this.c0.bg,this.c0.bO);break;default:var e=Yf().M.h()}return this.cU=1+this.cU|0,e}),R.dd=(function(e){return this.cU=this.cU+e|0,this});function rg(){this.ci=null,this.eA=!1,this.du=null,this.ci=ob(),this.eA=!1}R=rg.prototype=new z,R.constructor=rg,R.aT=(function(e){}),R.ky=(function(){return this.eA?this.du.h9():this.ci}),R.ll=(function(e,t){return this.eA?this.du.dz(e,t):this.ci.aB()<4||this.ci.bQ(e)?this.ci=this.ci.di(e,t):(this.eA=!0,this.du===null&&(this.du=new Hh),this.ci.lF(this.du),this.du.dz(e,t)),this}),R.jN=(function(e){return this.eA?(this.du.gC(e),this):Nd(this,e)}),R.aS=(function(){return this.ky()}),R.aK=(function(e){return this.ll(e.aV,e.aN)}),R.aR=(function(e){return this.jN(e)}),new V().i(rg,`scala.collection.immutable.MapBuilderImpl`,{fc:1,D:1,F:1,K:1,a5:1});function ig(){this.jm=0,this.jn=null,ag=this;try{_l();var e=ud().kq(mc().gU(`scala.collection.immutable.Vector.defaultApplyPreferredMaxLength`,`250`),10,214748364)}catch(t){if(0)var e;else{var e;throw t}}this.jm=e,this.jn=new B_(bx(),0,0)}R=ig.prototype=new z,R.constructor=ig,R.ct=(function(e){return this.gQ(e)}),R.gQ=(function(e){if(e instanceof Fb)return e;var t=e.r();if(t===0)return bx();if((t-1|0)>>>0<=31){matchResult3:{var n;if(e instanceof Kb){var r=e.a4().aA();if(r!==null&&r===H.l()){var n=e.bX;break matchResult3}}if(A_(e)){var i=new B(t);e.bq(i,0,2147483647);var n=i;break matchResult3}var a=new B(t);e.i().bq(a,0,2147483647);var n=a}return new mx(n)}return new mg().jO(e).kz()}),R.ao=(function(e){return this.gQ(e)}),R.aM=(function(){return new mg}),new V().i(ig,`scala.collection.immutable.Vector$`,{fp:1,a:1,I:1,Y:1,af:1});var ag;function og(){return ag||=new ig,ag}function sg(e){var t=null,n=null;if(e.C>=6){t=e.as;var r=e.z>>>25|0;if(r>0){var i=t,a=t,o=64-r|0;i.o(r,a,0,o)}var s=e.z,c=s>>24>>>7|0,l=(33554431&(s+c|0))-c|0;e.t=e.t-(e.z-l|0)|0,e.z=l,e.t>>>25|0||(e.C=5),n=t,t=t.a[0]}if(e.C>=5){t===null&&(t=e.J);var u=31&(e.z>>>20|0);if(e.C===5){if(u>0){var d=t,f=t,p=32-u|0;d.o(u,f,0,p)}e.J=t;var m=e.z,h=m>>19>>>12|0,g=(1048575&(m+h|0))-h|0;e.t=e.t-(e.z-g|0)|0,e.z=g,e.t>>>20|0||(e.C=4)}else u>0&&(t=U().U(t,u,32)),n.a[0]=t;n=t,t=t.a[0]}if(e.C>=4){t===null&&(t=e.E);var _=31&(e.z>>>15|0);if(e.C===4){if(_>0){var v=t,y=t,b=32-_|0;v.o(_,y,0,b)}e.E=t;var x=e.z,S=x>>14>>>17|0,C=(32767&(x+S|0))-S|0;e.t=e.t-(e.z-C|0)|0,e.z=C,e.t>>>15|0||(e.C=3)}else _>0&&(t=U().U(t,_,32)),n.a[0]=t;n=t,t=t.a[0]}if(e.C>=3){t===null&&(t=e.A);var w=31&(e.z>>>10|0);if(e.C===3){if(w>0){var T=t,E=t,ee=32-w|0;T.o(w,E,0,ee)}e.A=t;var te=e.z,D=te>>9>>>22|0,O=(1023&(te+D|0))-D|0;e.t=e.t-(e.z-O|0)|0,e.z=O,e.t>>>10|0||(e.C=2)}else w>0&&(t=U().U(t,w,32)),n.a[0]=t;n=t,t=t.a[0]}if(e.C>=2){t===null&&(t=e.x);var ne=31&(e.z>>>5|0);if(e.C===2){if(ne>0){var re=t,ie=t,ae=32-ne|0;re.o(ne,ie,0,ae)}e.x=t;var k=e.z,oe=k>>4>>>27|0,A=(31&(k+oe|0))-oe|0;e.t=e.t-(e.z-A|0)|0,e.z=A,e.t>>>5|0||(e.C=1)}else ne>0&&(t=U().U(t,ne,32)),n.a[0]=t;n=t,t=t.a[0]}if(e.C>=1){t===null&&(t=e.H);var se=31&e.z;if(e.C===1){if(se>0){var ce=t,le=t,ue=32-se|0;ce.o(se,le,0,ue)}e.H=t,e.B=e.B-e.z|0,e.z=0}else se>0&&(t=U().U(t,se,32)),n.a[0]=t}e.fo=!1}function cg(e,t){var n=t.a.length;if(n>0){e.B===32&&dg(e);var r=32-e.B|0,i=r<n?r:n,a=n-i|0,o=e.H,s=e.B;if(t.o(0,o,s,i),e.B=e.B+i|0,a>0){dg(e);var c=e.H;t.o(i,c,0,a),e.B=e.B+a|0}}}function lg(e,t,n){if(t.a.length!==0){e.B===32&&dg(e);var r=t.a.length;switch(n){case 2:var i=31&((1024-e.t|0)>>>5|0),a=i<r?i:r,o=r-a|0,s=31&(e.t>>>5|0),c=e.x;if(t.o(0,c,s,a),fg(e,a<<5),o>0){var l=e.x;t.o(a,l,0,o),fg(e,o<<5)}break;case 3:var u=e.t,d=u>>9>>>22|0;if((1023&(u+d|0))-d|0){var f=(t=>{lg(e,t,2)}),p=t.a.length,m=0;if(t!==null)for(;m<p;){var h=t.a[m];f(h),m=1+m|0}else if(t instanceof Oa)for(;m<p;){var g=t.a[m];f(g),m=1+m|0}else if(t instanceof ja)for(;m<p;){var _=t.a[m];f(_),m=1+m|0}else if(t instanceof ka)for(;m<p;){var v=t.a,y=m<<1,b=v[y],x=v[y+1|0];f(_a(b,x)),m=1+m|0}else if(t instanceof Aa)for(;m<p;){var S=t.a[m];f(S),m=1+m|0}else if(t instanceof Ta)for(;m<p;){var C=t.a[m];f(ga(C)),m=1+m|0}else if(t instanceof Ea)for(;m<p;){var w=t.a[m];f(w),m=1+m|0}else if(t instanceof Da)for(;m<p;){var T=t.a[m];f(T),m=1+m|0}else if(t instanceof wa)for(;m<p;){var E=t.a[m];f(E),m=1+m|0}else throw new Xm(t);return}var ee=31&((32768-e.t|0)>>>10|0),te=ee<r?ee:r,D=r-te|0,O=31&(e.t>>>10|0),ne=e.A;if(t.o(0,ne,O,te),fg(e,te<<10),D>0){var re=e.A;t.o(te,re,0,D),fg(e,D<<10)}break;case 4:var ie=e.t,ae=ie>>14>>>17|0;if((32767&(ie+ae|0))-ae|0){var k=(t=>{lg(e,t,3)}),oe=t.a.length,A=0;if(t!==null)for(;A<oe;){var se=t.a[A];k(se),A=1+A|0}else if(t instanceof Oa)for(;A<oe;){var ce=t.a[A];k(ce),A=1+A|0}else if(t instanceof ja)for(;A<oe;){var le=t.a[A];k(le),A=1+A|0}else if(t instanceof ka)for(;A<oe;){var ue=t.a,de=A<<1,fe=ue[de],pe=ue[de+1|0];k(_a(fe,pe)),A=1+A|0}else if(t instanceof Aa)for(;A<oe;){var me=t.a[A];k(me),A=1+A|0}else if(t instanceof Ta)for(;A<oe;){var he=t.a[A];k(ga(he)),A=1+A|0}else if(t instanceof Ea)for(;A<oe;){var ge=t.a[A];k(ge),A=1+A|0}else if(t instanceof Da)for(;A<oe;){var _e=t.a[A];k(_e),A=1+A|0}else if(t instanceof wa)for(;A<oe;){var ve=t.a[A];k(ve),A=1+A|0}else throw new Xm(t);return}var ye=31&((1048576-e.t|0)>>>15|0),be=ye<r?ye:r,xe=r-be|0,Se=31&(e.t>>>15|0),Ce=e.E;if(t.o(0,Ce,Se,be),fg(e,be<<15),xe>0){var we=e.E;t.o(be,we,0,xe),fg(e,xe<<15)}break;case 5:var Te=e.t,Ee=Te>>19>>>12|0;if((1048575&(Te+Ee|0))-Ee|0){var j=(t=>{lg(e,t,4)}),M=t.a.length,N=0;if(t!==null)for(;N<M;){var De=t.a[N];j(De),N=1+N|0}else if(t instanceof Oa)for(;N<M;){var Oe=t.a[N];j(Oe),N=1+N|0}else if(t instanceof ja)for(;N<M;){var ke=t.a[N];j(ke),N=1+N|0}else if(t instanceof ka)for(;N<M;){var Ae=t.a,je=N<<1,Me=Ae[je],Ne=Ae[je+1|0];j(_a(Me,Ne)),N=1+N|0}else if(t instanceof Aa)for(;N<M;){var Pe=t.a[N];j(Pe),N=1+N|0}else if(t instanceof Ta)for(;N<M;){var Fe=t.a[N];j(ga(Fe)),N=1+N|0}else if(t instanceof Ea)for(;N<M;){var Ie=t.a[N];j(Ie),N=1+N|0}else if(t instanceof Da)for(;N<M;){var Le=t.a[N];j(Le),N=1+N|0}else if(t instanceof wa)for(;N<M;){var Re=t.a[N];j(Re),N=1+N|0}else throw new Xm(t);return}var ze=31&((33554432-e.t|0)>>>20|0),Be=ze<r?ze:r,Ve=r-Be|0,He=31&(e.t>>>20|0),Ue=e.J;if(t.o(0,Ue,He,Be),fg(e,Be<<20),Ve>0){var We=e.J;t.o(Be,We,0,Ve),fg(e,Ve<<20)}break;case 6:var Ge=e.t,Ke=Ge>>24>>>7|0;if((33554431&(Ge+Ke|0))-Ke|0){var qe=(t=>{lg(e,t,5)}),P=t.a.length,F=0;if(t!==null)for(;F<P;){var Je=t.a[F];qe(Je),F=1+F|0}else if(t instanceof Oa)for(;F<P;){var Ye=t.a[F];qe(Ye),F=1+F|0}else if(t instanceof ja)for(;F<P;){var Xe=t.a[F];qe(Xe),F=1+F|0}else if(t instanceof ka)for(;F<P;){var Ze=t.a,Qe=F<<1,$e=Ze[Qe],et=Ze[Qe+1|0];qe(_a($e,et)),F=1+F|0}else if(t instanceof Aa)for(;F<P;){var tt=t.a[F];qe(tt),F=1+F|0}else if(t instanceof Ta)for(;F<P;){var nt=t.a[F];qe(ga(nt)),F=1+F|0}else if(t instanceof Ea)for(;F<P;){var rt=t.a[F];qe(rt),F=1+F|0}else if(t instanceof Da)for(;F<P;){var it=t.a[F];qe(it),F=1+F|0}else if(t instanceof wa)for(;F<P;){var at=t.a[F];qe(at),F=1+F|0}else throw new Xm(t);return}var ot=e.t>>>25|0;if((ot+r|0)>64)throw Nm(new Fm,`exceeding 2^31 elements`);var st=e.as;t.o(0,st,ot,r),fg(e,r<<25);break;default:throw new Xm(n)}}}function ug(e,t){for(var n=t.c8(),r=0;r<n;){var i=t.c7(r);matchResult26:{var a=r,o=(n+(n>>>31|0)|0)>>1,s=a-o|0,c=s>>31,l=(1+o|0)-((s^c)-c|0)|0;if(l===1){cg(e,i);break matchResult26}if(e.B===32||e.B===0){lg(e,i,l);break matchResult26}W().gM(l-2|0,i,new J((t=>{cg(e,t)})))}r=1+r|0}return e}function dg(e){var t=32+e.t|0,n=t^e.t;e.t=t,e.B=0,pg(e,t,n)}function fg(e,t){if(t>0){var n=e.t+t|0,r=n^e.t;e.t=n,e.B=0,pg(e,n,r)}}function pg(e,t,n){if(n<=0)throw Nm(new Fm,`advance1(`+t+`, `+n+`): a1=`+e.H+`, a2=`+e.x+`, a3=`+e.A+`, a4=`+e.E+`, a5=`+e.J+`, a6=`+e.as+`, depth=`+e.C);n<1024?(e.C<=1&&(e.x=new(H.r().r()).C(32),e.x.a[0]=e.H,e.C=2),e.H=new B(32),e.x.a[31&(t>>>5|0)]=e.H):n<32768?(e.C<=2&&(e.A=new(H.r().r().r()).C(32),e.A.a[0]=e.x,e.C=3),e.H=new B(32),e.x=new(H.r().r()).C(32),e.x.a[31&(t>>>5|0)]=e.H,e.A.a[31&(t>>>10|0)]=e.x):n<1048576?(e.C<=3&&(e.E=new(H.r().r().r().r()).C(32),e.E.a[0]=e.A,e.C=4),e.H=new B(32),e.x=new(H.r().r()).C(32),e.A=new(H.r().r().r()).C(32),e.x.a[31&(t>>>5|0)]=e.H,e.A.a[31&(t>>>10|0)]=e.x,e.E.a[31&(t>>>15|0)]=e.A):n<33554432?(e.C<=4&&(e.J=new(H.r().r().r().r().r()).C(32),e.J.a[0]=e.E,e.C=5),e.H=new B(32),e.x=new(H.r().r()).C(32),e.A=new(H.r().r().r()).C(32),e.E=new(H.r().r().r().r()).C(32),e.x.a[31&(t>>>5|0)]=e.H,e.A.a[31&(t>>>10|0)]=e.x,e.E.a[31&(t>>>15|0)]=e.A,e.J.a[31&(t>>>20|0)]=e.E):(e.C<=5&&(e.as=new(H.r().r().r().r().r().r()).C(64),e.as.a[0]=e.J,e.C=6),e.H=new B(32),e.x=new(H.r().r()).C(32),e.A=new(H.r().r().r()).C(32),e.E=new(H.r().r().r().r()).C(32),e.J=new(H.r().r().r().r().r()).C(32),e.x.a[31&(t>>>5|0)]=e.H,e.A.a[31&(t>>>10|0)]=e.x,e.E.a[31&(t>>>15|0)]=e.A,e.J.a[31&(t>>>20|0)]=e.E,e.as.a[t>>>25|0]=e.J)}function mg(){this.as=null,this.J=null,this.E=null,this.A=null,this.x=null,this.H=null,this.B=0,this.t=0,this.z=0,this.fo=!1,this.C=0,this.H=new B(32),this.B=0,this.t=0,this.z=0,this.fo=!1,this.C=1}R=mg.prototype=new z,R.constructor=mg,R.aT=(function(e){}),R.mM=(function(e){var t=e.c8();switch(t){case 0:break;case 1:this.C=1;var n=e.b.a.length;this.B=31&n,this.t=n-this.B|0;var r=e.b;this.H=r.a.length===32?r:U().U(r,0,32);break;case 3:var i=e.b0,a=e.e;this.H=a.a.length===32?a:U().U(a,0,32),this.C=2,this.z=32-e.bi|0;var o=e.g+this.z|0;this.B=31&o,this.t=o-this.B|0,this.x=new(H.r().r()).C(32),this.x.a[0]=e.b;var s=this.x,c=i.a.length;i.o(0,s,1,c),this.x.a[1+i.a.length|0]=this.H;break;case 5:var l=e.aF,u=e.aG,d=e.e;this.H=d.a.length===32?d:U().U(d,0,32),this.C=3,this.z=1024-e.aY|0;var f=e.g+this.z|0;this.B=31&f,this.t=f-this.B|0,this.A=new(H.r().r().r()).C(32),this.A.a[0]=W().c3(e.b,e.b4);var p=this.A,m=l.a.length;l.o(0,p,1,m),this.x=U().L(u,32),this.A.a[1+l.a.length|0]=this.x,this.x.a[u.a.length]=this.H;break;case 7:var h=e.al,g=e.an,_=e.am,v=e.e;this.H=v.a.length===32?v:U().U(v,0,32),this.C=4,this.z=32768-e.aw|0;var y=e.g+this.z|0;this.B=31&y,this.t=y-this.B|0,this.E=new(H.r().r().r().r()).C(32),this.E.a[0]=W().c3(W().c3(e.b,e.aO),e.aP);var b=this.E,x=h.a.length;h.o(0,b,1,x),this.A=U().L(g,32),this.x=U().L(_,32),this.E.a[1+h.a.length|0]=this.A,this.A.a[g.a.length]=this.x,this.x.a[_.a.length]=this.H;break;case 9:var S=e.V,C=e.Y,w=e.X,T=e.W,E=e.e;this.H=E.a.length===32?E:U().U(E,0,32),this.C=5,this.z=1048576-e.ae|0;var ee=e.g+this.z|0;this.B=31&ee,this.t=ee-this.B|0,this.J=new(H.r().r().r().r().r()).C(32),this.J.a[0]=W().c3(W().c3(W().c3(e.b,e.ap),e.aq),e.ar);var te=this.J,D=S.a.length;S.o(0,te,1,D),this.E=U().L(C,32),this.A=U().L(w,32),this.x=U().L(T,32),this.J.a[1+S.a.length|0]=this.E,this.E.a[C.a.length]=this.A,this.A.a[w.a.length]=this.x,this.x.a[T.a.length]=this.H;break;case 11:var O=e.O,ne=e.S,re=e.R,ie=e.Q,ae=e.P,k=e.e;this.H=k.a.length===32?k:U().U(k,0,32),this.C=6,this.z=33554432-e.a8|0;var oe=e.g+this.z|0;this.B=31&oe,this.t=oe-this.B|0,this.as=new(H.r().r().r().r().r().r()).C(64),this.as.a[0]=W().c3(W().c3(W().c3(W().c3(e.b,e.af),e.ag),e.ah),e.ai);var A=this.as,se=O.a.length;O.o(0,A,1,se),this.J=U().L(ne,32),this.E=U().L(re,32),this.A=U().L(ie,32),this.x=U().L(ae,32),this.as.a[1+O.a.length|0]=this.J,this.J.a[ne.a.length]=this.E,this.E.a[re.a.length]=this.A,this.A.a[ie.a.length]=this.x,this.x.a[ae.a.length]=this.H;break;default:throw new Xm(t)}return this.B===0&&this.t>0&&(this.B=32,this.t=this.t-32|0),this}),R.lo=(function(e){return this.B===32&&dg(this),this.H.a[this.B]=e,this.B=1+this.B|0,this}),R.jO=(function(e){return e instanceof Fb?this.B===0&&this.t===0&&!this.fo?this.mM(e):ug(this,e):Nd(this,e)}),R.kz=(function(){this.fo&&sg(this);var e=this.B+this.t|0,t=e-this.z|0;if(t===0)return og(),bx();if(e<0)throw Lm(new zm,`Vector cannot have negative size `+e);if(e<=32){var n=this.H;return new mx(n.a.length===t?n:U().L(n,t))}if(e<=1024){var r=31&(e-1|0),i=(e-1|0)>>>5|0,a=U().U(this.x,1,i),o=this.x.a[0],s=this.x.a[i],c=1+r|0,l=s.a.length===c?s:U().L(s,c);return new xx(o,32-this.z|0,a,l,t)}if(e<=32768){var u=31&(e-1|0),d=31&((e-1|0)>>>5|0),f=(e-1|0)>>>10|0,p=U().U(this.A,1,f),m=this.A.a[0],h=U().U(m,1,m.a.length),g=this.A.a[0].a[0],_=U().L(this.A.a[f],d),v=this.A.a[f].a[d],y=1+u|0,b=v.a.length===y?v:U().L(v,y),x=g.a.length;return new Sx(g,x,h,x+(h.a.length<<5)|0,p,_,b,t)}if(e<=1048576){var S=31&(e-1|0),C=31&((e-1|0)>>>5|0),w=31&((e-1|0)>>>10|0),T=(e-1|0)>>>15|0,E=U().U(this.E,1,T),ee=this.E.a[0],te=U().U(ee,1,ee.a.length),D=this.E.a[0].a[0],O=U().U(D,1,D.a.length),ne=this.E.a[0].a[0].a[0],re=U().L(this.E.a[T],w),ie=U().L(this.E.a[T].a[w],C),ae=this.E.a[T].a[w].a[C],k=1+S|0,oe=ae.a.length===k?ae:U().L(ae,k),A=ne.a.length,se=A+(O.a.length<<5)|0;return new Cx(ne,A,O,se,te,se+(te.a.length<<10)|0,E,re,ie,oe,t)}if(e<=33554432){var ce=31&(e-1|0),le=31&((e-1|0)>>>5|0),ue=31&((e-1|0)>>>10|0),de=31&((e-1|0)>>>15|0),fe=(e-1|0)>>>20|0,pe=U().U(this.J,1,fe),me=this.J.a[0],he=U().U(me,1,me.a.length),ge=this.J.a[0].a[0],_e=U().U(ge,1,ge.a.length),ve=this.J.a[0].a[0].a[0],ye=U().U(ve,1,ve.a.length),be=this.J.a[0].a[0].a[0].a[0],xe=U().L(this.J.a[fe],de),Se=U().L(this.J.a[fe].a[de],ue),Ce=U().L(this.J.a[fe].a[de].a[ue],le),we=this.J.a[fe].a[de].a[ue].a[le],Te=1+ce|0,Ee=we.a.length===Te?we:U().L(we,Te),j=be.a.length,M=j+(ye.a.length<<5)|0,N=M+(_e.a.length<<10)|0;return new wx(be,j,ye,M,_e,N,he,N+(he.a.length<<15)|0,pe,xe,Se,Ce,Ee,t)}var De=31&(e-1|0),Oe=31&((e-1|0)>>>5|0),ke=31&((e-1|0)>>>10|0),Ae=31&((e-1|0)>>>15|0),je=31&((e-1|0)>>>20|0),Me=(e-1|0)>>>25|0,Ne=U().U(this.as,1,Me),Pe=this.as.a[0],Fe=U().U(Pe,1,Pe.a.length),Ie=this.as.a[0].a[0],Le=U().U(Ie,1,Ie.a.length),Re=this.as.a[0].a[0].a[0],ze=U().U(Re,1,Re.a.length),Be=this.as.a[0].a[0].a[0].a[0],Ve=U().U(Be,1,Be.a.length),He=this.as.a[0].a[0].a[0].a[0].a[0],Ue=U().L(this.as.a[Me],je),We=U().L(this.as.a[Me].a[je],Ae),Ge=U().L(this.as.a[Me].a[je].a[Ae],ke),Ke=U().L(this.as.a[Me].a[je].a[Ae].a[ke],Oe),qe=this.as.a[Me].a[je].a[Ae].a[ke].a[Oe],P=1+De|0,F=qe.a.length===P?qe:U().L(qe,P),Je=He.a.length,Ye=Je+(Ve.a.length<<5)|0,Xe=Ye+(ze.a.length<<10)|0,Ze=Xe+(Le.a.length<<15)|0;return new Tx(He,Je,Ve,Ye,ze,Xe,Le,Ze,Fe,Ze+(Fe.a.length<<20)|0,Ne,Ue,We,Ge,Ke,F,t)}),R.y=(function(){return`VectorBuilder(len1=`+this.B+`, lenRest=`+this.t+`, offset=`+this.z+`, depth=`+this.C+`)`}),R.aK=(function(e){return this.lo(e)}),R.aR=(function(e){return this.jO(e)}),R.aS=(function(){return this.kz()}),new V().i(mg,`scala.collection.immutable.VectorBuilder`,{fx:1,D:1,F:1,K:1,a5:1});function hg(){this.jp=null,gg=this,this.jp=new B(0)}R=hg.prototype=new z,R.constructor=hg,R.ct=(function(e){return this.kj(e)}),R.kj=(function(e){var t=e.r();if(t>=0){var n=this.kD(this.jp,0,t),r=nh(e)?e.bq(n,0,2147483647):e.i().bq(n,0,2147483647);if(r!==t)throw new Im(`Copied `+r+` of `+t);return Mx(new Px,n,t)}return Nx(new Px).jP(e)}),R.aM=(function(){return new vg}),R.no=(function(e,t){if(t<0)throw Vp(new Hp,`Overflow while resizing array of array-backed collection. Requested length: `+t+`; current length: `+e+`; increase: `+(t-e|0));if(t<=e)return-1;if(t>2147483639)throw Vp(new Hp,`Array of array-backed collection exceeds VM length limit of 2147483639. Requested length: `+t+`; current length: `+e);if(e>1073741819)return 2147483639;var n=e<<1,r=n>16?n:16;return t>r?t:r}),R.kD=(function(e,t,n){var r=this.no(e.a.length,n);if(r<0)return e;var i=new B(r);return e.o(0,i,0,t),i}),R.ao=(function(e){return this.kj(e)}),new V().i(hg,`scala.collection.mutable.ArrayBuffer$`,{fC:1,a:1,I:1,Y:1,af:1});var gg;function _g(){return gg||=new hg,gg}function vg(){this.d2=null,mm(this,(_g(),Nx(new Px)))}R=vg.prototype=new gm,R.constructor=vg,R.aT=(function(e){this.d2.aT(e)}),new V().i(vg,`scala.collection.mutable.ArrayBuffer$$anon$1`,{fD:1,aI:1,D:1,F:1,K:1});function yg(){this.e1=null,em(this,Hg())}R=yg.prototype=new nm,R.constructor=yg,new V().i(yg,`scala.collection.mutable.Buffer$`,{fJ:1,be:1,a:1,I:1,Y:1});var bg;function xg(){return bg||=new yg,bg}function Sg(e,t){this.d2=null,mm(this,wb(new jb,e,t))}R=Sg.prototype=new gm,R.constructor=Sg,R.aT=(function(e){this.d2.aT(e)}),new V().i(Sg,`scala.collection.mutable.HashSet$$anon$4`,{fR:1,aI:1,D:1,F:1,K:1});function Cg(e,t){if(t===null)throw Hm(new Um);return e.eE=t,e.d4=0,e.cn=null,e.eF=t.aH.a.length,e}function wg(){this.d4=0,this.cn=null,this.eF=0,this.eE=null}R=wg.prototype=new Xp,R.constructor=wg;function Tg(){}Tg.prototype=R,R.j=(function(){if(this.cn!==null)return!0;for(;this.d4<this.eF;){var e=this.eE.aH.a[this.d4];if(this.d4=1+this.d4|0,e!==null)return this.cn=e,!0}return!1}),R.h=(function(){if(this.j()){var e=this.cn;e===null&&ru().bU();var t=this.gL(e),n=this.cn;return n===null&&ru().bU(),this.cn=n.aI,t}return Yf().M.h()});function Eg(e,t){return e.eG=t,e}function Dg(){this.eG=null}R=Dg.prototype=new z,R.constructor=Dg;function Og(){}Og.prototype=R,R.aR=(function(e){return Nd(this,e)}),R.aT=(function(e){}),R.aS=(function(){return this.eG});function kg(){this.e1=null,em(this,_g())}R=kg.prototype=new nm,R.constructor=kg,new V().i(kg,`scala.collection.mutable.IndexedSeq$`,{fU:1,be:1,a:1,I:1,Y:1});var Ag;function jg(){return Ag||=new kg,Ag}function Mg(){}R=Mg.prototype=new z,R.constructor=Mg,R.ct=(function(e){return new jx().fM(e)}),R.aM=(function(){return mm(new hm,new jx)}),R.ao=(function(e){return new jx().fM(e)}),new V().i(Mg,`scala.collection.mutable.ListBuffer$`,{fX:1,a:1,I:1,Y:1,af:1});var Ng;function Pg(){return Ng||=new Mg,Ng}function Fg(e,t){this.gy=null,this.jz=null,this.jy=0,this.gy=e,this.jz=t,this.jy=t.a3()|0}R=Fg.prototype=new Xp,R.constructor=Fg,R.j=(function(){return Jl().k0(this.jy,this.jz.a3()|0,`mutation occurred during iteration`),this.gy.j()}),R.h=(function(){return this.gy.h()}),new V().i(Fg,`scala.collection.mutable.MutationTracker$CheckedIterator`,{fZ:1,s:1,b:1,c:1,t:1});function Ig(e,t){if(Rg(t)){var n=e.aA(),r=t.aA();return n===null?r===null:n===r}return!1}function Lg(e,t){return t.a5.Z?`Array[`+Lg(e,t.a5.Q())+`]`:t.a5.N}function Rg(e){return!!(e&&e.$classData&&e.$classData.n.C)}function zg(e){this.jE=null,this.eI=0,this.jD=0,this.jE=e,this.eI=0,this.jD=e.cx()}R=zg.prototype=new Xp,R.constructor=zg,R.j=(function(){return this.eI<this.jD}),R.h=(function(){var e=this.jE.cy(this.eI);return this.eI=1+this.eI|0,e}),new V().i(zg,`scala.runtime.ScalaRunTime$$anon$1`,{gG:1,s:1,b:1,c:1,t:1});function Bg(){}R=Bg.prototype=new z,R.constructor=Bg,R.ct=(function(e){return this.kk(e)}),R.aM=(function(){return Ix(new Lx)}),R.kk=(function(e){return Nd(Ix(new Lx),e).aS()}),R.ao=(function(e){return this.kk(e)}),new V().i(Bg,`scala.scalajs.js.WrappedArray$`,{gM:1,af:1,a:1,I:1,Y:1});var Vg;function Hg(){return Vg||=new Bg,Vg}function Ug(){}R=Ug.prototype=new z,R.constructor=Ug,R.ct=(function(e){return this.gR(e)}),R.gR=(function(e){return this.aM().aR(e).aS()}),R.aM=(function(){return new pm(new J((e=>new Q(e.d5))),Fx(new Lx,[]))}),R.ao=(function(e){return this.gR(e)}),new V().i(Ug,`scala.scalajs.runtime.WrappedVarArgs$`,{gX:1,af:1,a:1,I:1,Y:1});var Wg;function Gg(){return Wg||=new Ug,Wg}var Kg=class e extends Jd{constructor(e,t){super(),this.dJ=null,this.dI=0,this.dJ=e,this.dI=t,yd(this,`Transaction depth exceeded maxDepth = `+t+`: Execution of `+e+" aborted. See `Transaction.maxDepth`.",null,!0,!0)}ei(){return new $m(this)}u(){var e=-889275714;return e=K().v(e,o_(`TransactionDepthExceeded`)),e=K().v(e,K().F(this.dJ)),e=K().v(e,this.dI),K().ay(e,2)}q(t){if(this===t)return!0;if(t instanceof e){if(this.dI===t.dI){var n=this.dJ,r=t.dJ;return n===null?r===null:n===r}return!1}return!1}cx(){return 2}cz(){return`TransactionDepthExceeded`}cy(e){if(e===0)return this.dJ;if(e===1)return this.dI;throw Lm(new zm,``+e)}y(){return`TransactionDepthExceeded: `+this.dJ+`; maxDepth: `+this.dI}};new V().i(Kg,`com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded`,{aK:1,bW:1,B:1,a:1,d:1,a8:1});function qg(e,t){this.fe=null,this.dP=null,this.g1=null,this.em=null,this.i3=null,this.c9=null,this.i3=e,this.c9=t,this.fe=d_(),Vu(this),Sm(this)}R=qg.prototype=new z,R.constructor=qg,R.c2=(function(e){Cs().fA(e,this,void 0)}),R.fE=(function(){return this.dP}),R.k2=(function(e){this.dP=e}),R.kO=(function(e){wm(this,e)}),R.kG=(function(e){Tm(this,e)}),R.y=(function(){return`ReactiveHtmlElement(`+(this.c9===null?`tag=`+this.i3.h2():this.c9.outerHTML)+`)`}),R.dF=(function(){return this.c9}),new V().i(qg,`com.raquo.laminar.nodes.ReactiveHtmlElement`,{d7:1,at:1,a1:1,aP:1,aQ:1,d6:1});function Jg(e,t){return yd(e,t,null,!0,!0),e}function Yg(e){return yd(e,null,null,!0,!0),e}var Xg=class extends zm{};new V().i(Xg,`java.lang.ArrayIndexOutOfBoundsException`,{ds:1,b0:1,P:1,H:1,B:1,a:1});function Zg(e,t){return Object.is(e,t)}function Qg(e){var t=e|0;if(t===e&&1/e!=-1/0)return t;if(e!==e)return 2146959360;var n=sa;return n.setFloat64(0,e,!0),(n.getInt32(0,!0)|0)^(n.getInt32(4,!0)|0)}var $g=new V().i(0,`java.lang.Double`,{aY:1,a7:1,a:1,Z:1,W:1,aj:1},(e=>typeof e==`number`)),e_=new V().i(0,`java.lang.Float`,{dz:1,a7:1,a:1,Z:1,W:1,aj:1},(e=>ha(e))),t_=new V().i(0,`java.lang.Integer`,{dB:1,a7:1,a:1,Z:1,W:1,aj:1},(e=>ma(e)));function n_(e,t,n){if(n instanceof Qi){var r=n,i=r.l,a=r.h;return(e^i|t^a)===0}return!1}function r_(e,t){return e^t}var i_=new V().i(0,`java.lang.Long`,{b1:1,a7:1,a:1,Z:1,W:1,aj:1},(e=>e instanceof Qi)),a_=class extends Fm{constructor(e){super(),yd(this,e,null,!0,!0)}};new V().i(a_,`java.lang.NumberFormatException`,{dH:1,aZ:1,P:1,H:1,B:1,a:1});function o_(e){for(var t=e.length,n=0,r=0;r!==t;)n=((n<<5)-n|0)+e.charCodeAt(r)|0,r=1+r|0;return n}function s_(e,t){return e===t}var c_=new V().i(0,`java.lang.String`,{dN:1,a:1,Z:1,av:1,W:1,aj:1},(e=>typeof e==`string`));function l_(){}R=l_.prototype=new Qm,R.constructor=l_,R.u=(function(){return 2433880}),R.y=(function(){return`None`}),R.cx=(function(){return 0}),R.cz=(function(){return`None`}),R.cy=(function(e){throw Rm(new zm,e)}),R.my=(function(){throw new qm(`None.get`)}),R.az=(function(){this.my()}),new V().i(l_,`scala.None$`,{ec:1,b5:1,b:1,d:1,a8:1,a:1});var u_;function d_(){return u_||=new l_,u_}function f_(e){this.eq=null,this.eq=e}R=f_.prototype=new Qm,R.constructor=f_,R.u=(function(){return q().h7(this,1323286827,!0)}),R.q=(function(e){return this===e||e instanceof f_&&G().m(this.eq,e.eq)}),R.y=(function(){return ou().ld(this)}),R.cx=(function(){return 1}),R.cz=(function(){return`Some`}),R.cy=(function(e){if(e===0)return this.eq;throw Rm(new zm,e)}),R.az=(function(){return this.eq}),new V().i(f_,`scala.Some`,{b6:1,b5:1,b:1,d:1,a8:1,a:1});function p_(){}R=p_.prototype=new z,R.constructor=p_;function m_(){}m_.prototype=R,R.r=(function(){return-1}),R.bF=(function(e){sl(this,e)}),R.ee=(function(e){return cl(this,e)}),R.d=(function(){return ll(this)}),R.bq=(function(e,t,n){return ul(this,e,t,n)}),R.d7=(function(e,t,n,r){return fl(this,e,t,n,r)}),R.eV=(function(e){return this.b6().ao(e)}),R.eY=(function(){return this.b6().aM()}),R.bE=(function(){return this.b8()}),R.eU=(function(e){return this.eV(e)});function h_(e){this.fh=null,this.ca=0,this.er=0,this.fh=e,this.ca=0,this.er=Oc().br(this.fh)}R=h_.prototype=new Xp,R.constructor=h_,R.r=(function(){return this.er-this.ca|0}),R.j=(function(){return this.ca<this.er}),R.h=(function(){this.ca>=Oc().br(this.fh)&&Yf().M.h();var e=ou().dB(this.fh,this.ca);return this.ca=1+this.ca|0,e}),R.dd=(function(e){if(e>0){var t=this.ca+e|0;if(t<0)var n=this.er;else var r=this.er,n=r<t?r:t;this.ca=n}return this}),new V().i(h_,`scala.collection.ArrayOps$ArrayIterator`,{em:1,s:1,b:1,c:1,t:1,a:1});function g_(e,t){return e.gf=t,e.cb=0,e.aZ=t.k(),e}function __(e,t){return t<0?0:t>e.aZ?e.aZ:t}function v_(){this.gf=null,this.cb=0,this.aZ=0}R=v_.prototype=new Xp,R.constructor=v_;function y_(){}y_.prototype=R,R.r=(function(){return this.aZ}),R.j=(function(){return this.aZ>0}),R.h=(function(){if(this.aZ>0){var e=this.gf.p(this.cb);return this.cb=1+this.cb|0,this.aZ=this.aZ-1|0,e}return Yf().M.h()}),R.dd=(function(e){if(e>0){this.cb=this.cb+e|0;var t=this.aZ-e|0;this.aZ=t<0?0:t}return this}),R.f3=(function(e,t){var n=__(this,e),r=__(this,t)-n|0;return this.aZ=r<0?0:r,this.cb=this.cb+n|0,this}),new V().i(v_,`scala.collection.IndexedSeqView$IndexedSeqViewIterator`,{bc:1,s:1,b:1,c:1,t:1,a:1});function b_(){this.eG=null,Eg(this,Yf().M)}R=b_.prototype=new Og,R.constructor=b_,R.lm=(function(e){return this.eG=this.eG.gG(new mp((()=>new ih(e)))),this}),R.aK=(function(e){return this.lm(e)}),new V().i(b_,`scala.collection.Iterator$$anon$21`,{ev:1,fT:1,D:1,F:1,K:1,a5:1});function x_(e,t){for(var n=e.i();n.j();){var r=n.h();t.cr(r.aV,r.aN)}}function S_(e,t,n,r,i){return fl(new oh(new J((e=>{var t=e.aV,n=e.aN;return t+` -> `+n})),e.i()),t,n,r,i)}function C_(e,t){for(var n=e.eY(),r=Tb(new jb),i=e.i();i.j();){var a=i.h();r.fz(t.f(a))&&n.aK(a)}return n.aS()}function w_(e,t){var n=e.dg().aM();return n.aR(e),n.aR(t),n.aS()}function T_(e){return e.je||=(e.jd=new Kb(new(gp.r()).C(0)),!0),e.jd}function E_(){this.gj=null,this.jd=null,this.je=!1,D_=this,this.gj=new eh(this)}R=E_.prototype=new z,R.constructor=E_,R.gO=(function(e,t){return e instanceof Mb?e:this.hb(Vc().kg(e,t))}),R.fI=(function(e){return new pm(new J((t=>this.hb(pl(t,e)))),(_g(),new vg))}),R.hb=(function(e){if(e===null)return null;if(e instanceof B)return new Kb(e);if(e instanceof Oa)return new Wb(e);if(e instanceof ja)return new Hb(e);if(e instanceof ka)return new Gb(e);if(e instanceof Aa)return new Ub(e);if(e instanceof Ta)return new Vb(e);if(e instanceof Ea)return new Bb(e);if(e instanceof Da)return new qb(e);if(e instanceof wa)return new zb(e);if(Cc(e,1))return new Jb(e);throw new Xm(e)}),R.gN=(function(e,t){return this.gO(e,t)}),new V().i(E_,`scala.collection.immutable.ArraySeq$`,{eL:1,a:1,ba:1,b8:1,b9:1,bg:1});var D_;function O_(){return D_||=new E_,D_}function k_(e,t){if(this.bn=0,this.ew=0,this.ds=null,this.bc=0,this.ce=null,this.ex=null,t===null)throw Hm(new Um);for(Sh(this,e.b2);this.j();){var n=this.ds.eW(this.bn);t.ek(t.bY,this.ds.de(this.bn),this.ds.cv(this.bn),n,ol().bR(n),0),this.bn=1+this.bn|0}}R=k_.prototype=new Oh,R.constructor=k_,R.h=(function(){return Yf().M.h()}),new V().i(k_,`scala.collection.immutable.HashMapBuilder$$anon$1`,{eP:1,bt:1,s:1,b:1,c:1,t:1});function A_(e){return!!(e&&e.$classData&&e.$classData.n.r)}function j_(e){if(this.cR=0,this.e5=null,e===null)throw Hm(new Um);Jh(this,e)}R=j_.prototype=new Xh,R.constructor=j_,new V().i(j_,`scala.collection.immutable.Map$Map2$$anon$1`,{f6:1,f7:1,s:1,b:1,c:1,t:1});function M_(e){if(this.cT=0,this.cS=null,e===null)throw Hm(new Um);Zh(this,e)}R=M_.prototype=new $h,R.constructor=M_,new V().i(M_,`scala.collection.immutable.Map$Map3$$anon$4`,{f8:1,f9:1,s:1,b:1,c:1,t:1});function N_(e){if(this.cU=0,this.c0=null,e===null)throw Hm(new Um);eg(this,e)}R=N_.prototype=new ng,R.constructor=N_,new V().i(N_,`scala.collection.immutable.Map$Map4$$anon$7`,{fa:1,fb:1,s:1,b:1,c:1,t:1});function P_(e){this.cN=0,this.fm=null,this.bo=0,this.ey=null,this.ez=null,this.gm=0,this.jj=null,Ah(this,e),this.gm=0}R=P_.prototype=new Ih,R.constructor=P_,R.u=(function(){return q().kL(this.gm,K().F(this.jj),-889275714)}),R.n7=(function(){return this.j()||Yf().M.h(),this.gm=this.fm.eW(this.cN),this.jj=this.fm.cv(this.cN),this.cN=this.cN-1|0,this}),R.h=(function(){return this.n7()}),new V().i(P_,`scala.collection.immutable.MapKeyValueTupleHashIterator`,{fd:1,eM:1,s:1,b:1,c:1,t:1});function F_(e){this.bn=0,this.ew=0,this.ds=null,this.bc=0,this.ce=null,this.ex=null,Sh(this,e)}R=F_.prototype=new Oh,R.constructor=F_,R.n6=(function(){this.j()||Yf().M.h();var e=this.ds.kn(this.bn);return this.bn=1+this.bn|0,e}),R.h=(function(){return this.n6()}),new V().i(F_,`scala.collection.immutable.MapKeyValueTupleIterator`,{fe:1,bt:1,s:1,b:1,c:1,t:1});function I_(e){e.bh<=e.ak&&Yf().M.h(),e.cW=1+e.cW|0;for(var t=e.go.c7(e.cW);t.a.length===0;)e.cW=1+e.cW|0,t=e.go.c7(e.cW);e.eB=e.dw;var n=e.jl,r=e.cW,i=(n+(n>>>31|0)|0)>>1,a=r-i|0,o=a>>31;e.cV=(1+i|0)-((a^o)-o|0)|0;var s=e.cV;switch(s){case 1:e.aD=t;break;case 2:e.aE=t;break;case 3:e.b3=t;break;case 4:e.bP=t;break;case 5:e.dv=t;break;case 6:e.gn=t;break;default:throw new Xm(s)}e.dw=e.eB+Math.imul(t.a.length,1<<Math.imul(5,e.cV-1|0))|0,e.dw>e.ck&&(e.dw=e.ck),e.cV>1&&(e.e6=(1<<Math.imul(5,e.cV))-1|0)}function L_(e){var t=(e.ak-e.bh|0)+e.ck|0;if(t===e.dw&&I_(e),e.cV>1){var n=t-e.eB|0;R_(e,n,e.e6^n),e.e6=n}e.bh=e.bh-e.ak|0;var r=e.aD.a.length,i=e.bh;e.cj=r<i?r:i,e.ak=0}function R_(e,t,n){n<1024?e.aD=e.aE.a[31&(t>>>5|0)]:n<32768?(e.aE=e.b3.a[31&(t>>>10|0)],e.aD=e.aE.a[0]):n<1048576?(e.b3=e.bP.a[31&(t>>>15|0)],e.aE=e.b3.a[0],e.aD=e.aE.a[0]):n<33554432?(e.bP=e.dv.a[31&(t>>>20|0)],e.b3=e.bP.a[0],e.aE=e.b3.a[0],e.aD=e.aE.a[0]):(e.dv=e.gn.a[t>>>25|0],e.bP=e.dv.a[0],e.b3=e.bP.a[0],e.aE=e.b3.a[0],e.aD=e.aE.a[0])}function z_(e,t,n){n<1024?e.aD=e.aE.a[31&(t>>>5|0)]:n<32768?(e.aE=e.b3.a[31&(t>>>10|0)],e.aD=e.aE.a[31&(t>>>5|0)]):n<1048576?(e.b3=e.bP.a[31&(t>>>15|0)],e.aE=e.b3.a[31&(t>>>10|0)],e.aD=e.aE.a[31&(t>>>5|0)]):n<33554432?(e.bP=e.dv.a[31&(t>>>20|0)],e.b3=e.bP.a[31&(t>>>15|0)],e.aE=e.b3.a[31&(t>>>10|0)],e.aD=e.aE.a[31&(t>>>5|0)]):(e.dv=e.gn.a[t>>>25|0],e.bP=e.dv.a[31&(t>>>20|0)],e.b3=e.bP.a[31&(t>>>15|0)],e.aE=e.b3.a[31&(t>>>10|0)],e.aD=e.aE.a[31&(t>>>5|0)])}function B_(e,t,n){this.go=null,this.ck=0,this.jl=0,this.aD=null,this.aE=null,this.b3=null,this.bP=null,this.dv=null,this.gn=null,this.cj=0,this.ak=0,this.e6=0,this.bh=0,this.cW=0,this.cV=0,this.eB=0,this.dw=0,this.go=e,this.ck=t,this.jl=n,this.aD=e.b,this.cj=this.aD.a.length,this.ak=0,this.e6=0,this.bh=this.ck,this.cW=0,this.cV=1,this.eB=0,this.dw=this.cj}R=B_.prototype=new Xp,R.constructor=B_,R.r=(function(){return this.bh-this.ak|0}),R.j=(function(){return this.bh>this.ak}),R.h=(function(){this.ak===this.cj&&L_(this);var e=this.aD.a[this.ak];return this.ak=1+this.ak|0,e}),R.dd=(function(e){if(e>0){var t=((this.ak-this.bh|0)+this.ck|0)+e|0,n=this.ck,r=t<n?t:n;if(r===this.ck)this.ak=0,this.bh=0,this.cj=0;else{for(;r>=this.dw;)I_(this);var i=r-this.eB|0;this.cV>1&&(z_(this,i,this.e6^i),this.e6=i),this.cj=this.aD.a.length,this.ak=31&i,this.bh=this.ak+(this.ck-r|0)|0,this.cj>this.bh&&(this.cj=this.bh)}}return this}),R.bq=(function(e,t,n){for(var r=Oc().br(e),i=this.bh-this.ak|0,a=n<i?n:i,o=t<0?r:r-t|0,s=o<a?o:a,c=s<0?0:s,l=0,u=e instanceof B;l<c;){this.ak===this.cj&&L_(this);var d=c-l|0,f=this.aD.a.length-this.ak|0,p=d<f?d:f;if(u){var m=this.aD,h=this.ak,g=t+l|0;m.o(h,e,g,p)}else Vc().eS(this.aD,this.ak,e,t+l|0,p);this.ak=this.ak+p|0,l=l+p|0}return c}),new V().i(B_,`scala.collection.immutable.NewVectorIterator`,{fg:1,s:1,b:1,c:1,t:1,z:1});function V_(e){return e.gs=0,e.jr=0,e}function H_(){this.gs=0,this.jr=0}R=H_.prototype=new z,R.constructor=H_;function U_(){}U_.prototype=R,R.aT=(function(e){this.gs<e&&this.nn(e)});function W_(){this.gu=null,this.jt=null,G_=this,this.gu=new eh(this),this.jt=new cx(new B(0))}R=W_.prototype=new z,R.constructor=W_,R.mr=(function(e,t){return this.h0(Vc().kg(e,t))}),R.fI=(function(e){return new pm(new J((e=>this.h0(e))),new tv(e.aA()))}),R.h0=(function(e){if(e===null)return null;if(e instanceof B)return new cx(e);if(e instanceof Oa)return new ox(e);if(e instanceof ja)return new ix(e);if(e instanceof ka)return new sx(e);if(e instanceof Aa)return new ax(e);if(e instanceof Ta)return new rx(e);if(e instanceof Ea)return new nx(e);if(e instanceof Da)return new lx(e);if(e instanceof wa)return new tx(e);if(Cc(e,1))return new ux(e);throw new Xm(e)}),R.gN=(function(e,t){return this.mr(e,t)}),new V().i(W_,`scala.collection.mutable.ArraySeq$`,{fI:1,a:1,ba:1,b8:1,b9:1,bg:1});var G_;function K_(){return G_||=new W_,G_}function q_(e){if(this.d4=0,this.cn=null,this.eF=0,this.eE=null,e===null)throw Hm(new Um);Cg(this,e)}R=q_.prototype=new Tg,R.constructor=q_,R.gL=(function(e){return e.ea}),new V().i(q_,`scala.collection.mutable.HashSet$$anon$1`,{fO:1,aJ:1,s:1,b:1,c:1,t:1});function J_(e){if(this.d4=0,this.cn=null,this.eF=0,this.eE=null,e===null)throw Hm(new Um);Cg(this,e)}R=J_.prototype=new Tg,R.constructor=J_,R.gL=(function(e){return e}),new V().i(J_,`scala.collection.mutable.HashSet$$anon$2`,{fP:1,aJ:1,s:1,b:1,c:1,t:1});function Y_(e){if(this.d4=0,this.cn=null,this.eF=0,this.eE=null,this.gx=0,this.jx=null,e===null)throw Hm(new Um);this.jx=e,Cg(this,e),this.gx=0}R=Y_.prototype=new Tg,R.constructor=Y_,R.u=(function(){return this.gx}),R.gL=(function(e){return this.gx=Eb(this.jx,e.co),this}),new V().i(Y_,`scala.collection.mutable.HashSet$$anon$3`,{fQ:1,aJ:1,s:1,b:1,c:1,t:1});function X_(e){this.eH=null,this.eH=e}R=X_.prototype=new z,R.constructor=X_,R.q=(function(e){return Ig(this,e)}),R.u=(function(){return K().F(this.eH)}),R.y=(function(){return Lg(this,this.eH)}),R.aA=(function(){return this.eH}),R.b7=(function(e){return this.eH.a5.U(e)}),new V().i(X_,`scala.reflect.ClassTag$GenericClassTag`,{g7:1,a:1,O:1,N:1,d:1,C:1});function Z_(){}R=Z_.prototype=new Am,R.constructor=Z_;function Q_(){}Q_.prototype=R;function $_(e){return e.bE()+`(<not computed>)`}function ev(e){return!!(e&&e.$classData&&e.$classData.n.a9)}function tv(e){this.gs=0,this.jr=0,this.e9=null,this.js=!1,this.gt=null,this.e9=e,V_(this),this.js=e===Pa.l(),this.gt=[]}R=tv.prototype=new U_,R.constructor=tv,R.jR=(function(e){var t=this.js?ya(e):e===null?Ul().fL(this.e9):e;return this.gt.push(t),this}),R.lg=(function(e){for(var t=e.i();t.j();)this.jR(t.h());return this}),R.nn=(function(e){}),R.aS=(function(){return Ul().fK(this.e9===Ma.l()?wc.l():this.e9===eu.l()||this.e9===gp.l()?H.l():this.e9,this.gt)}),R.y=(function(){return`ArrayBuilder.generic`}),R.aK=(function(e){return this.jR(e)}),R.aR=(function(e){return this.lg(e)}),new V().i(tv,`scala.collection.mutable.ArrayBuilder$generic`,{fH:1,fF:1,D:1,F:1,K:1,a5:1,a:1});function nv(e,t){this.gf=null,this.cb=0,this.aZ=0,this.jw=null,this.jv=0,this.jw=t,g_(this,e),this.jv=t.a3()|0}R=nv.prototype=new y_,R.constructor=nv,R.j=(function(){return Jl().k0(this.jv,this.jw.a3()|0,`mutation occurred during iteration`),this.aZ>0}),new V().i(nv,`scala.collection.mutable.CheckedIndexedSeqView$CheckedIterator`,{fL:1,bc:1,s:1,b:1,c:1,t:1,a:1});function rv(){this.K=null}R=rv.prototype=new z,R.constructor=rv;function iv(){}iv.prototype=R,R.y=(function(){return this.K}),R.q=(function(e){return this===e}),R.u=(function(){return da(this)});function av(){}R=av.prototype=new z,R.constructor=av;function ov(){}ov.prototype=R;var sv=class e extends Hp{constructor(e){super(),this.bC=null,this.bC=e,yd(this,null,null,!0,!0)}eX(){return ra(this.bC)}cz(){return`JavaScriptException`}cx(){return 1}cy(e){return e===0?this.bC:K().mO(e)}ei(){return new zg(this)}u(){return q().h7(this,1744042595,!0)}q(t){return this===t||t instanceof e&&G().m(this.bC,t.bC)}};new V().i(sv,`scala.scalajs.js.JavaScriptException`,{bU:1,P:1,H:1,B:1,a:1,a8:1,d:1});function cv(e,t){typeof console<`u`&&(e.iM&&console.error?console.error(t):console.log(t))}function lv(e){this.iM=!1,this.en=null,this.iM=e,new Bm,this.en=``}R=lv.prototype=new Q_,R.constructor=lv,R.mR=(function(e){for(var t=e;t!==``;){var n=t.indexOf(`
`)|0;if(n<0)this.en=``+this.en+t,t=``;else{var r=this.en,i=t;cv(this,``+r+i.substring(0,n)),this.en=``;var a=t,o=1+n|0;t=a.substring(o)}}}),new V().i(lv,`java.lang.JSConsoleBasedPrintStream`,{dD:1,dq:1,dp:1,aU:1,aS:1,aW:1,aT:1,aV:1});function uv(e,t,n){for(var r=n,i=t;;)if(i<=0||r.d())return r;else{var a=i-1|0,o=r.n();i=a,r=o}}function dv(e,t){if(e.bj(1)<=0)return e;for(var n=e.eY(),r=Tb(new jb),i=e.i(),a=!1;i.j();){var o=i.h();r.fz(t.f(o))?n.aK(o):a=!0}return a?n.aS():e}function fv(){this.K=null}R=fv.prototype=new iv,R.constructor=fv;function pv(){}pv.prototype=R,R.aA=(function(){return Na.l()}),R.b7=(function(e){return new wa(e)});function mv(){this.K=null}R=mv.prototype=new iv,R.constructor=mv;function hv(){}hv.prototype=R,R.aA=(function(){return Fa.l()}),R.b7=(function(e){return new Ea(e)});function gv(){this.K=null}R=gv.prototype=new iv,R.constructor=gv;function _v(){}_v.prototype=R,R.aA=(function(){return Pa.l()}),R.b7=(function(e){return new Ta(e)});function vv(){this.K=null}R=vv.prototype=new iv,R.constructor=vv;function yv(){}yv.prototype=R,R.aA=(function(){return Ba.l()}),R.b7=(function(e){return new ja(e)});function bv(){this.K=null}R=bv.prototype=new iv,R.constructor=bv;function xv(){}xv.prototype=R,R.aA=(function(){return za.l()}),R.b7=(function(e){return new Aa(e)});function Sv(){this.K=null}R=Sv.prototype=new iv,R.constructor=Sv;function Cv(){}Cv.prototype=R,R.aA=(function(){return La.l()}),R.b7=(function(e){return new Oa(e)});function wv(){this.K=null}R=wv.prototype=new iv,R.constructor=wv;function Tv(){}Tv.prototype=R,R.aA=(function(){return Ra.l()}),R.b7=(function(e){return new ka(e)});function Ev(){this.cq=null}R=Ev.prototype=new ov,R.constructor=Ev;function Dv(){}Dv.prototype=R,R.y=(function(){return this.cq}),R.q=(function(e){return this===e}),R.u=(function(){return da(this)});function Ov(){this.K=null}R=Ov.prototype=new iv,R.constructor=Ov;function kv(){}kv.prototype=R,R.aA=(function(){return Ia.l()}),R.b7=(function(e){return new Da(e)});function Av(){this.K=null}R=Av.prototype=new iv,R.constructor=Av;function jv(){}jv.prototype=R,R.aA=(function(){return Ma.l()}),R.b7=(function(e){return new(wc.r()).C(e)});function Mv(){}R=Mv.prototype=new m_,R.constructor=Mv;function Nv(){}Nv.prototype=R,R.b6=(function(){return tp()}),R.y=(function(){return $_(this)}),R.b8=(function(){return`View`});function Pv(e,t){if(e===t)return!0;if(Fv(t)){if(e.aB()===t.aB())try{return e.nC(t)}catch(e){throw e}return!1}return!1}function Fv(e){return!!(e&&e.$classData&&e.$classData.n.aB)}function Iv(){this.cq=null,this.cq=`Any`,$()}R=Iv.prototype=new Dv,R.constructor=Iv,R.aA=(function(){return H.l()}),R.b7=(function(e){return new B(e)}),new V().i(Iv,`scala.reflect.ManifestFactory$AnyManifest$`,{g8:1,as:1,ar:1,a:1,O:1,N:1,d:1,C:1,S:1});var Lv;function Rv(){return Lv||=new Iv,Lv}function zv(){this.K=null,this.K=`Boolean`}R=zv.prototype=new pv,R.constructor=zv,new V().i(zv,`scala.reflect.ManifestFactory$BooleanManifest$`,{ga:1,g9:1,a0:1,a:1,O:1,N:1,d:1,C:1,S:1});var Bv;function Vv(){return Bv||=new zv,Bv}function Hv(){this.K=null,this.K=`Byte`}R=Hv.prototype=new hv,R.constructor=Hv,new V().i(Hv,`scala.reflect.ManifestFactory$ByteManifest$`,{gc:1,gb:1,a0:1,a:1,O:1,N:1,d:1,C:1,S:1});var Uv;function Wv(){return Uv||=new Hv,Uv}function Gv(){this.K=null,this.K=`Char`}R=Gv.prototype=new _v,R.constructor=Gv,new V().i(Gv,`scala.reflect.ManifestFactory$CharManifest$`,{ge:1,gd:1,a0:1,a:1,O:1,N:1,d:1,C:1,S:1});var Kv;function qv(){return Kv||=new Gv,Kv}function Jv(){this.K=null,this.K=`Double`}R=Jv.prototype=new yv,R.constructor=Jv,new V().i(Jv,`scala.reflect.ManifestFactory$DoubleManifest$`,{gg:1,gf:1,a0:1,a:1,O:1,N:1,d:1,C:1,S:1});var Yv;function Xv(){return Yv||=new Jv,Yv}function Zv(){this.K=null,this.K=`Float`}R=Zv.prototype=new xv,R.constructor=Zv,new V().i(Zv,`scala.reflect.ManifestFactory$FloatManifest$`,{gi:1,gh:1,a0:1,a:1,O:1,N:1,d:1,C:1,S:1});var Qv;function $v(){return Qv||=new Zv,Qv}function ey(){this.K=null,this.K=`Int`}R=ey.prototype=new Cv,R.constructor=ey,new V().i(ey,`scala.reflect.ManifestFactory$IntManifest$`,{gk:1,gj:1,a0:1,a:1,O:1,N:1,d:1,C:1,S:1});var ty;function ny(){return ty||=new ey,ty}function ry(){this.K=null,this.K=`Long`}R=ry.prototype=new Tv,R.constructor=ry,new V().i(ry,`scala.reflect.ManifestFactory$LongManifest$`,{gm:1,gl:1,a0:1,a:1,O:1,N:1,d:1,C:1,S:1});var iy;function ay(){return iy||=new ry,iy}function oy(){this.cq=null,this.cq=`Nothing`,$()}R=oy.prototype=new Dv,R.constructor=oy,R.aA=(function(){return gp.l()}),R.b7=(function(e){return new(gp.r()).C(e)}),new V().i(oy,`scala.reflect.ManifestFactory$NothingManifest$`,{gn:1,as:1,ar:1,a:1,O:1,N:1,d:1,C:1,S:1});var sy;function cy(){return sy||=new oy,sy}function ly(){this.cq=null,this.cq=`Null`,$()}R=ly.prototype=new Dv,R.constructor=ly,R.aA=(function(){return eu.l()}),R.b7=(function(e){return new(eu.r()).C(e)}),new V().i(ly,`scala.reflect.ManifestFactory$NullManifest$`,{go:1,as:1,ar:1,a:1,O:1,N:1,d:1,C:1,S:1});var uy;function dy(){return uy||=new ly,uy}function fy(){this.cq=null,this.cq=`Object`,$()}R=fy.prototype=new Dv,R.constructor=fy,R.aA=(function(){return H.l()}),R.b7=(function(e){return new B(e)}),new V().i(fy,`scala.reflect.ManifestFactory$ObjectManifest$`,{gp:1,as:1,ar:1,a:1,O:1,N:1,d:1,C:1,S:1});var py;function my(){return py||=new fy,py}function hy(){this.K=null,this.K=`Short`}R=hy.prototype=new kv,R.constructor=hy,new V().i(hy,`scala.reflect.ManifestFactory$ShortManifest$`,{gr:1,gq:1,a0:1,a:1,O:1,N:1,d:1,C:1,S:1});var gy;function _y(){return gy||=new hy,gy}function vy(){this.K=null,this.K=`Unit`}R=vy.prototype=new jv,R.constructor=vy,new V().i(vy,`scala.reflect.ManifestFactory$UnitManifest$`,{gt:1,gs:1,a0:1,a:1,O:1,N:1,d:1,C:1,S:1});var yy;function by(){return yy||=new vy,yy}function xy(e,t){return e===t?!0:Sy(t)&&t.fD(e)?e.ej(t):!1}function Sy(e){return!!(e&&e.$classData&&e.$classData.n.m)}function Cy(e){this.jb=null,this.jb=e}R=Cy.prototype=new Nv,R.constructor=Cy,R.i=(function(){return this.jb.a3()}),new V().i(Cy,`scala.collection.View$$anon$1`,{eH:1,ak:1,i:1,b:1,c:1,h:1,g:1,e:1,a:1,a9:1});function wy(e,t){this.fl=null,this.jc=null,this.fl=e,this.jc=t}R=wy.prototype=new Nv,R.constructor=wy,R.i=(function(){var e=this.fl.i();return new ah(this.jc,e)}),R.r=(function(){return this.fl.r()===0?0:-1}),R.d=(function(){return this.fl.d()}),new V().i(wy,`scala.collection.View$DistinctBy`,{eI:1,ak:1,i:1,b:1,c:1,h:1,g:1,e:1,a:1,a9:1});function Ty(){}R=Ty.prototype=new m_,R.constructor=Ty;function Ey(){}Ey.prototype=R,R.nC=(function(e){return this.ee(e)}),R.q=(function(e){return Pv(this,e)}),R.b8=(function(){return`Set`}),R.y=(function(){return th(this)}),R.f=(function(e){return this.bQ(e)});function Dy(e,t){if(e===t)return!0;if(Oy(t)){if(e.aB()===t.aB())try{return e.ee(new J((e=>(t=>G().m(e.df(t.aV,new mp((()=>$p().j9.a3()))),t.aN)))(t)))}catch(e){throw e}return!1}return!1}function Oy(e){return!!(e&&e.$classData&&e.$classData.n.a2)}function ky(){}R=ky.prototype=new m_,R.constructor=ky;function Ay(){}Ay.prototype=R,R.c4=(function(e){return im(this,e)}),R.bj=(function(e){return Uf(this,e)}),R.d=(function(){return am(this)}),R.ej=(function(e){return om(this,e)}),R.fD=(function(e){return!0}),R.q=(function(e){return xy(this,e)}),R.u=(function(){return q().kE(this)}),R.y=(function(){return th(this)});function jy(){}R=jy.prototype=new Nv,R.constructor=jy;function My(){}My.prototype=R,R.c4=(function(e){return im(this,e)}),R.bj=(function(e){return Uf(this,e)}),R.d=(function(){return am(this)}),R.b8=(function(){return`SeqView`});function Ny(e){return!!(e&&e.$classData&&e.$classData.n.o)}function Py(e){return!!(e&&e.$classData&&e.$classData.n.al)}function Fy(){}R=Fy.prototype=new m_,R.constructor=Fy;function Iy(){}Iy.prototype=R,R.dD=(function(e){x_(this,e)}),R.d7=(function(e,t,n,r){return S_(this,e,t,n,r)}),R.eV=(function(e){return this.ks().ao(e)}),R.q=(function(e){return Dy(this,e)}),R.u=(function(){return q().n0(this)}),R.b8=(function(){return`Map`}),R.y=(function(){return th(this)});function Ly(e,t){return e.dq=t,e}function Ry(){this.dq=null}R=Ry.prototype=new My,R.constructor=Ry;function zy(){}zy.prototype=R,R.p=(function(e){return this.dq.p(e)}),R.k=(function(){return this.dq.k()}),R.i=(function(){return this.dq.i()}),R.r=(function(){return this.dq.r()}),R.d=(function(){return this.dq.d()}),new V().i(Ry,`scala.collection.SeqView$Id`,{bf:1,ax:1,ak:1,i:1,b:1,c:1,h:1,g:1,e:1,a:1,a9:1,l:1,aA:1});function By(){this.hv=null,this.hw=!1,this.hG=null,this.hH=!1,this.hx=null,this.hy=!1,this.hA=null,this.hB=!1,this.hC=null,this.hD=!1,this.hM=null,this.hN=!1,this.hE=null,this.hF=!1,this.fU=null,this.hz=null,this.hI=null,this.hJ=!1,this.kQ=null,this.ht=null,this.hu=!1,this.hK=null,this.hL=!1,Jo(this),Uo(this),Vo(this),Ho(this)}R=By.prototype=new z,R.constructor=By,R.le=(function(){return this.hw||=(this.hv=Hu(new Uu,`a`,!1),!0),this.hv}),R.kH=(function(){return this.hH||=(this.hG=Hu(new Uu,`span`,!1),!0),this.hG}),R.gF=(function(){return this.hy||=(this.hx=Hu(new Uu,`br`,!0),!0),this.hx}),R.lY=(function(){return this.hB||=(this.hA=Hu(new Uu,`div`,!1),!0),this.hA}),R.mI=(function(){return this.hD||=(this.hC=ku(new Au,`href`,qo().b9),!0),this.hC}),R.nQ=(function(){return this.hN||=(this.hM=new Mu(`value`,qo().b9),!0),this.hM}),R.gX=(function(){return this.hF||=(this.hE=new Mu(`id`,qo().b9),!0),this.hE}),R.nA=(function(){return this.hJ||=(this.hI=ku(new Au,`style`,qo().b9),!0),this.hI}),R.lc=(function(){return this.hu||=(this.ht=new Ou(this),!0),this.ht}),R.nE=(function(){return this.hL||=(this.hK=new kp(this),!0),this.hK}),new V().i(By,`com.raquo.laminar.api.package$$anon$1`,{cp:1,cB:1,cu:1,cz:1,cy:1,cA:1,cw:1,cn:1,cj:1,cm:1,aM:1,aN:1,aL:1,ck:1});function Vy(e){return!!(e&&e.$classData&&e.$classData.n.a3)}function Hy(){}R=Hy.prototype=new My,R.constructor=Hy;function Uy(){}Uy.prototype=R,R.bj=(function(e){var t=this.k();return t===e?0:t<e?-1:1}),R.r=(function(){return this.k()}),R.b8=(function(){return`IndexedSeqView`});function Wy(e){this.dq=null,Ly(this,e)}R=Wy.prototype=new zy,R.constructor=Wy,R.bj=(function(e){var t=this.k();return t===e?0:t<e?-1:1}),R.r=(function(){return this.k()}),R.i=(function(){return g_(new v_,this)}),R.b8=(function(){return`IndexedSeqView`}),new V().i(Wy,`scala.collection.IndexedSeqView$Id`,{eq:1,bf:1,ax:1,ak:1,i:1,b:1,c:1,h:1,g:1,e:1,a:1,a9:1,l:1,aA:1,p:1,bb:1});function Gy(){}R=Gy.prototype=new Ay,R.constructor=Gy;function Ky(){}Ky.prototype=R;function qy(e,t){this.gr=null,this.jq=null,this.gr=e,this.jq=t}R=qy.prototype=new Uy,R.constructor=qy,R.p=(function(e){return this.gr.p(e)}),R.k=(function(){return this.gr.aQ}),R.bE=(function(){return`ArrayBufferView`}),R.i=(function(){return new nv(this,this.jq)}),new V().i(qy,`scala.collection.mutable.ArrayBufferView`,{fE:1,ej:1,ax:1,ak:1,i:1,b:1,c:1,h:1,g:1,e:1,a:1,a9:1,l:1,aA:1,p:1,bb:1});function Jy(){}R=Jy.prototype=new Iy,R.constructor=Jy;function Yy(){}Yy.prototype=R,R.b6=(function(){return um()}),R.ks=(function(){return lp()});function Xy(e,t){return!Qy(t)||e.k()===t.k()}function Zy(e,t){if(Qy(t)){if(e===t)return!0;var n=e.k(),r=n===t.k();if(r){var i=0,a=e.fB(),o=t.fB(),s=a<o?a:o,c=n>>31,l=s>>31,u=s<<1,d=s>>>31|0|l<<1;if(c===d?n>>>0>u>>>0:c>d)var f=s;else var f=n;for(;i<f&&r;)r=G().m(e.p(i),t.p(i)),i=1+i|0;if(i<n&&r)for(var p=e.i().dd(i),m=t.i().dd(i);r&&p.j();)r=G().m(p.h(),m.h())}return r}return om(e,t)}function Qy(e){return!!(e&&e.$classData&&e.$classData.n.x)}function $y(e,t){return e.bI=t,e}function eb(){this.bI=null}R=eb.prototype=new Ky,R.constructor=eb;function tb(){}tb.prototype=R;function nb(){}R=nb.prototype=new Ay,R.constructor=nb;function rb(){}rb.prototype=R;function ib(){}R=ib.prototype=new Yy,R.constructor=ib,R.aB=(function(){return 0}),R.r=(function(){return 0}),R.d=(function(){return!0}),R.gE=(function(e){throw new qm(`key not found: `+e)}),R.bQ=(function(e){return!1}),R.df=(function(e,t){return t.a3()}),R.i=(function(){return Yf().M}),R.f=(function(e){this.gE(e)}),R.di=(function(e,t){return new sb(e,t)}),new V().i(ib,`scala.collection.immutable.Map$EmptyMap$`,{f5:1,ag:1,ac:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,ae:1,ad:1,d:1,a2:1,r:1,ah:1,a3:1,a:1});var ab;function ob(){return ab||=new ib,ab}function sb(e,t){this.bZ=null,this.dt=null,this.bZ=e,this.dt=t}R=sb.prototype=new Yy,R.constructor=sb,R.aB=(function(){return 1}),R.r=(function(){return 1}),R.d=(function(){return!1}),R.f=(function(e){if(G().m(e,this.bZ))return this.dt;throw new qm(`key not found: `+e)}),R.bQ=(function(e){return G().m(e,this.bZ)}),R.df=(function(e,t){return G().m(e,this.bZ)?this.dt:t.a3()}),R.i=(function(){return new ih(new Z(this.bZ,this.dt))}),R.dG=(function(e,t){return G().m(e,this.bZ)?new sb(this.bZ,t):new cb(this.bZ,this.dt,e,t)}),R.ee=(function(e){return!!e.f(new Z(this.bZ,this.dt))}),R.u=(function(){var e=0,t=0,n=1,r=q().bW(this.bZ,this.dt);return e=e+r|0,t^=r,n=Math.imul(n,1|r),r=q().d6,r=q().v(r,e),r=q().v(r,t),r=q().cw(r,n),q().ay(r,1)}),R.di=(function(e,t){return this.dG(e,t)}),new V().i(sb,`scala.collection.immutable.Map$Map1`,{bx:1,ag:1,ac:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,ae:1,ad:1,d:1,a2:1,r:1,ah:1,a3:1,k:1,a:1});function cb(e,t,n,r){this.bJ=null,this.cP=null,this.bK=null,this.cQ=null,this.bJ=e,this.cP=t,this.bK=n,this.cQ=r}R=cb.prototype=new Yy,R.constructor=cb,R.aB=(function(){return 2}),R.r=(function(){return 2}),R.d=(function(){return!1}),R.f=(function(e){if(G().m(e,this.bJ))return this.cP;if(G().m(e,this.bK))return this.cQ;throw new qm(`key not found: `+e)}),R.bQ=(function(e){return G().m(e,this.bJ)||G().m(e,this.bK)}),R.df=(function(e,t){return G().m(e,this.bJ)?this.cP:G().m(e,this.bK)?this.cQ:t.a3()}),R.i=(function(){return new j_(this)}),R.dG=(function(e,t){return G().m(e,this.bJ)?new cb(this.bJ,t,this.bK,this.cQ):G().m(e,this.bK)?new cb(this.bJ,this.cP,this.bK,t):new lb(this.bJ,this.cP,this.bK,this.cQ,e,t)}),R.ee=(function(e){return!!e.f(new Z(this.bJ,this.cP))&&!!e.f(new Z(this.bK,this.cQ))}),R.u=(function(){var e=0,t=0,n=1,r=q().bW(this.bJ,this.cP);return e=e+r|0,t^=r,n=Math.imul(n,1|r),r=q().bW(this.bK,this.cQ),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=q().d6,r=q().v(r,e),r=q().v(r,t),r=q().cw(r,n),q().ay(r,2)}),R.di=(function(e,t){return this.dG(e,t)}),new V().i(cb,`scala.collection.immutable.Map$Map2`,{by:1,ag:1,ac:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,ae:1,ad:1,d:1,a2:1,r:1,ah:1,a3:1,k:1,a:1});function lb(e,t,n,r,i,a){this.bv=null,this.cf=null,this.bw=null,this.cg=null,this.bx=null,this.ch=null,this.bv=e,this.cf=t,this.bw=n,this.cg=r,this.bx=i,this.ch=a}R=lb.prototype=new Yy,R.constructor=lb,R.aB=(function(){return 3}),R.r=(function(){return 3}),R.d=(function(){return!1}),R.f=(function(e){if(G().m(e,this.bv))return this.cf;if(G().m(e,this.bw))return this.cg;if(G().m(e,this.bx))return this.ch;throw new qm(`key not found: `+e)}),R.bQ=(function(e){return G().m(e,this.bv)||G().m(e,this.bw)||G().m(e,this.bx)}),R.df=(function(e,t){return G().m(e,this.bv)?this.cf:G().m(e,this.bw)?this.cg:G().m(e,this.bx)?this.ch:t.a3()}),R.i=(function(){return new M_(this)}),R.dG=(function(e,t){return G().m(e,this.bv)?new lb(this.bv,t,this.bw,this.cg,this.bx,this.ch):G().m(e,this.bw)?new lb(this.bv,this.cf,this.bw,t,this.bx,this.ch):G().m(e,this.bx)?new lb(this.bv,this.cf,this.bw,this.cg,this.bx,t):new ub(this.bv,this.cf,this.bw,this.cg,this.bx,this.ch,e,t)}),R.ee=(function(e){return!!e.f(new Z(this.bv,this.cf))&&!!e.f(new Z(this.bw,this.cg))&&!!e.f(new Z(this.bx,this.ch))}),R.u=(function(){var e=0,t=0,n=1,r=q().bW(this.bv,this.cf);return e=e+r|0,t^=r,n=Math.imul(n,1|r),r=q().bW(this.bw,this.cg),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=q().bW(this.bx,this.ch),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=q().d6,r=q().v(r,e),r=q().v(r,t),r=q().cw(r,n),q().ay(r,3)}),R.di=(function(e,t){return this.dG(e,t)}),new V().i(lb,`scala.collection.immutable.Map$Map3`,{bz:1,ag:1,ac:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,ae:1,ad:1,d:1,a2:1,r:1,ah:1,a3:1,k:1,a:1});function ub(e,t,n,r,i,a,o,s){this.bd=null,this.bL=null,this.be=null,this.bM=null,this.bf=null,this.bN=null,this.bg=null,this.bO=null,this.bd=e,this.bL=t,this.be=n,this.bM=r,this.bf=i,this.bN=a,this.bg=o,this.bO=s}R=ub.prototype=new Yy,R.constructor=ub,R.aB=(function(){return 4}),R.r=(function(){return 4}),R.d=(function(){return!1}),R.f=(function(e){if(G().m(e,this.bd))return this.bL;if(G().m(e,this.be))return this.bM;if(G().m(e,this.bf))return this.bN;if(G().m(e,this.bg))return this.bO;throw new qm(`key not found: `+e)}),R.bQ=(function(e){return G().m(e,this.bd)||G().m(e,this.be)||G().m(e,this.bf)||G().m(e,this.bg)}),R.df=(function(e,t){return G().m(e,this.bd)?this.bL:G().m(e,this.be)?this.bM:G().m(e,this.bf)?this.bN:G().m(e,this.bg)?this.bO:t.a3()}),R.i=(function(){return new N_(this)}),R.dG=(function(e,t){return G().m(e,this.bd)?new ub(this.bd,t,this.be,this.bM,this.bf,this.bN,this.bg,this.bO):G().m(e,this.be)?new ub(this.bd,this.bL,this.be,t,this.bf,this.bN,this.bg,this.bO):G().m(e,this.bf)?new ub(this.bd,this.bL,this.be,this.bM,this.bf,t,this.bg,this.bO):G().m(e,this.bg)?new ub(this.bd,this.bL,this.be,this.bM,this.bf,this.bN,this.bg,t):op().fn.el(this.bd,this.bL).el(this.be,this.bM).el(this.bf,this.bN).el(this.bg,this.bO).el(e,t)}),R.ee=(function(e){return!!e.f(new Z(this.bd,this.bL))&&!!e.f(new Z(this.be,this.bM))&&!!e.f(new Z(this.bf,this.bN))&&!!e.f(new Z(this.bg,this.bO))}),R.lF=(function(e){return e.dz(this.bd,this.bL).dz(this.be,this.bM).dz(this.bf,this.bN).dz(this.bg,this.bO)}),R.u=(function(){var e=0,t=0,n=1,r=q().bW(this.bd,this.bL);return e=e+r|0,t^=r,n=Math.imul(n,1|r),r=q().bW(this.be,this.bM),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=q().bW(this.bf,this.bN),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=q().bW(this.bg,this.bO),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=q().d6,r=q().v(r,e),r=q().v(r,t),r=q().cw(r,n),q().ay(r,4)}),R.di=(function(e,t){return this.dG(e,t)}),new V().i(ub,`scala.collection.immutable.Map$Map4`,{bA:1,ag:1,ac:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,ae:1,ad:1,d:1,a2:1,r:1,ah:1,a3:1,k:1,a:1});function db(){}R=db.prototype=new Ey,R.constructor=db;function fb(){}fb.prototype=R,R.aS=(function(){return this});function Q(e){this.ft=null,this.ft=e}R=Q.prototype=new z,R.constructor=Q,R.c4=(function(e){return dv(this,e)}),R.bS=(function(e){return sm(this,e)}),R.fD=(function(e){return Xy(this,e)}),R.ej=(function(e){return Zy(this,e)}),R.fB=(function(){return Cl().jf}),R.i=(function(){return g_(new v_,new Wy(this))}),R.bj=(function(e){var t=this.k();return t===e?0:t<e?-1:1}),R.r=(function(){return this.k()}),R.q=(function(e){return xy(this,e)}),R.u=(function(){return q().kE(this)}),R.y=(function(){return th(this)}),R.d=(function(){return am(this)}),R.eY=(function(){return Gg().aM()}),R.bF=(function(e){sl(this,e)}),R.bq=(function(e,t,n){return ul(this,e,t,n)}),R.d7=(function(e,t,n,r){return fl(this,e,t,n,r)}),R.dg=(function(){return Gg()}),R.k=(function(){return this.ft.length|0}),R.p=(function(e){return this.ft[e]}),R.bE=(function(){return`WrappedVarArgs`}),R.eU=(function(e){return Gg().gR(e)}),R.f=(function(e){return this.p(e|0)}),R.b6=(function(){return Gg()}),new V().i(Q,`scala.scalajs.runtime.WrappedVarArgs`,{bV:1,x:1,b:1,c:1,h:1,g:1,e:1,r:1,f:1,j:1,l:1,d:1,m:1,v:1,u:1,p:1,o:1,A:1,y:1,k:1,q:1,a:1});function pb(e){this.b2=null,this.b2=e}R=pb.prototype=new Yy,R.constructor=pb,R.ks=(function(){return op()}),R.r=(function(){return this.b2.aC}),R.aB=(function(){return this.b2.aC}),R.d=(function(){return this.b2.aC===0}),R.i=(function(){return this.d()?Yf().M:new F_(this.b2)}),R.bQ=(function(e){var t=K().F(e),n=ol().bR(t);return this.b2.gH(e,t,n,0)}),R.f=(function(e){var t=K().F(e),n=ol().bR(t);return this.b2.gD(e,t,n,0)}),R.df=(function(e,t){var n=K().F(e),r=ol().bR(n);return this.b2.gT(e,n,r,0,t)}),R.el=(function(e,t){var n=K().F(e),r=this.b2.kM(e,t,n,ol().bR(n),0,!0);return r===this.b2?this:new pb(r)}),R.dD=(function(e){this.b2.dD(e)}),R.q=(function(e){if(e instanceof pb){if(this===e)return!0;var t=this.b2,n=e.b2;return t===null?n===null:t.q(n)}return Dy(this,e)}),R.u=(function(){if(this.d())return q().gA;var e=new P_(this.b2);return q().ha(e,q().d6)}),R.bE=(function(){return`HashMap`}),R.di=(function(e,t){return this.el(e,t)}),new V().i(pb,`scala.collection.immutable.HashMap`,{bv:1,ag:1,ac:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,ae:1,ad:1,d:1,a2:1,r:1,ah:1,a3:1,k:1,eE:1,fn:1,a:1,T:1});function mb(e,t){return $y(e,t===El()?null:t),e.aW=t===El()?null:Ad(),e}function hb(e,t,n){return mb(e,El()),e.aW=t,e.bI=n,e}function gb(e){for(;e.aW===Ad();){var t=e.bI;if(t instanceof vd&&bb(e),Gc(t)){X().kA();var n=_c().iP;if(e.bI===t){e.bI=n;var r=!0}else var r=!1;if(r){var i=null;try{var a=_b(t.a3())}catch(e){i=e instanceof bd?e:new sv(e);var a=null}if(i===null){a===null&&ru().bU();var o=a.bI}else var o=t;if(X().kA(),e.bI,e.bI=o,i===null&&(a===null&&ru().bU(),e.aW=a.aW),i!==null){var s=i;s===null&&ru().bU();var c=s;throw c instanceof sv?c.bC:c}continue}}}}function _b(e){for(;;)if(e.aW!==Ad())return e.bI===null?X().I:e;else gb(e)}function vb(e,t){return X(),mb(new xb,new mp((()=>_b(e)===X().I?X().I:(X(),hb(new xb,t.f(e.s()),vb(e.aU(),t))))))}function yb(e,t,n,r,i){if(t.l=``+t.l+n,e.aW===Ad())t.l+=`<not computed>`;else if(_b(e)!==X().I){var a=e.s();t.l=``+t.l+a;var o=e,s=e.aU();if(o!==s){o=s;var c=s;if(c.aW!==Ad()&&_b(c)!==X().I)for(s=s.aU();;){if(o!==s)var l=s,u=l.aW!==Ad()&&_b(l)!==X().I;else var u=!1;if(u){var d=o;t.l=``+t.l+r;var f=d.s();t.l=``+t.l+f,o=o.aU(),s=s.aU();var p=s;p.aW!==Ad()&&_b(p)!==X().I&&(s=s.aU())}else break}}var m=s;if(m.aW===Ad()||_b(m)===X().I){for(;o!==s;){var h=o;t.l=``+t.l+r;var g=h.s();t.l=``+t.l+g,o=o.aU()}o.aW===Ad()&&(t.l=``+t.l+r,t.l+=`<not computed>`)}else{if(o!==e){for(var _=e;_!==s;)_=_.aU(),s=s.aU();for(;;){var v=o.aU();if(v!==s){var y=o;t.l=``+t.l+r;var b=y.s();t.l=``+t.l+b}if(o=v,o===s)break}}t.l=``+t.l+r,t.l+=`<cycle>`}}return t.l=``+t.l+i,t}function bb(e){throw Vp(new Hp,`LazyList evaluation depends on its own result (self-reference); see docs for more info`)}function xb(){this.bI=null,this.aW=null}R=xb.prototype=new tb,R.constructor=xb,R.k=(function(){return ph(this)}),R.bj=(function(e){return mh(this,e)}),R.p=(function(e){return hh(this,e)}),R.ej=(function(e){return gh(this,e)}),R.b8=(function(){return`LinearSeq`}),R.d=(function(){return _b(this)===X().I}),R.r=(function(){return this.aW!==Ad()&&_b(this)===X().I?0:-1}),R.s=(function(){if(_b(this)===X().I)throw new qm(`head of empty lazy list`);return this.aW}),R.aU=(function(){if(_b(this)===X().I)throw new Gm(`tail of empty lazy list`);return this.bI}),R.mp=(function(){var e=this,t=this;for(_b(e)!==X().I&&(e=e.aU());t!==e;){if(_b(e)===X().I||(e=e.aU(),_b(e)===X().I)||(e=e.aU(),e===t))return this;t=t.aU()}return this}),R.i=(function(){return this.aW!==Ad()&&_b(this)===X().I?Yf().M:new Wh(this)}),R.bF=(function(e){for(var t=this;;)if(_b(t)!==X().I)e.f(t.s()),t=t.aU();else return}),R.bE=(function(){return`LazyList`}),R.mW=(function(e){return this.aW!==Ad()&&_b(this)===X().I?X().I:vb(this,e)}),R.m3=(function(e){return e<=0?this:this.aW!==Ad()&&_b(this)===X().I?X().I:X().nq(this,e)}),R.d7=(function(e,t,n,r){return this.mp(),yb(this,e.aJ,t,n,r),e}),R.y=(function(){return yb(this,Wp(new Gp,`LazyList`),`(`,`, `,`)`).l}),R.b6=(function(){return X()}),R.n=(function(){return this.aU()}),R.bS=(function(e){return this.mW(e)}),R.k7=(function(e){return this.m3(e)}),R.f=(function(e){return hh(this,e|0)}),new V().i(xb,`scala.collection.immutable.LazyList`,{bw:1,eZ:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,a:1,ay:1,al:1,aD:1,aC:1});function Sb(){}R=Sb.prototype=new rb,R.constructor=Sb;function Cb(){}Cb.prototype=R,R.aR=(function(e){return Nd(this,e)});function wb(e,t,n){return e.gv=n,e.aH=new(Gl.r()).C(kb(e,t)),e.gw=Ab(e,e.aH.a.length),e.d3=0,e}function Tb(e){return wb(e,16,.75),e}function Eb(e,t){return t^(t>>>16|0)}function Db(e,t,n){var r=n&(e.aH.a.length-1|0);matchResult4:{var i=e.aH.a[r];if(i===null){e.aH.a[r]=new Wl(t,n,null);break matchResult4}for(var a=null,o=i;o!==null&&o.co<=n;){if(o.co===n&&G().m(t,o.ea))return!1;a=o,o=o.aI}if(a===null)e.aH.a[r]=new Wl(t,n,i);else{var s=a;s.aI=new Wl(t,n,a.aI)}}return e.d3=1+e.d3|0,!0}function Ob(e,t){var n=e.aH.a.length;if(e.gw=Ab(e,t),e.d3===0)e.aH=new(Gl.r()).C(t);else{e.aH=U().L(e.aH,t);for(var r=new Wl(null,0,null),i=new Wl(null,0,null);n<t;){for(var a=0;a<n;){var o=e.aH.a[a];if(o!==null){r.aI=null,i.aI=null;for(var s=r,c=i,l=o;l!==null;){var u=l.aI;if((l.co&n)===0){var d=s;d.aI=l,s=l}else{var f=c;f.aI=l,c=l}l=u}var p=s;if(p.aI=null,o!==r.aI&&(e.aH.a[a]=r.aI),i.aI!==null){e.aH.a[a+n|0]=i.aI;var m=c;m.aI=null}}a=1+a|0}n<<=1}}}function kb(e,t){var n=t-1|0,r=n>4?n:4,i=(-2147483648>>Math.clz32(r)&r)<<1;return i<1073741824?i:1073741824}function Ab(e,t){return aa(t*e.gv)}function jb(){this.gv=0,this.aH=null,this.gw=0,this.d3=0}R=jb.prototype=new fb,R.constructor=jb,R.aB=(function(){return this.d3}),R.bQ=(function(e){var t=Eb(this,K().F(e));matchResult1:{var n,r=this.aH.a[t&(this.aH.a.length-1|0)];if(r===null){var n=null;break matchResult1}var n=r.mn(e,t)}return n!==null}),R.aT=(function(e){var t=kb(this,aa((1+e|0)/this.gv));t>this.aH.a.length&&Ob(this,t)}),R.fz=(function(e){return(1+this.d3|0)>=this.gw&&Ob(this,this.aH.a.length<<1),Db(this,e,Eb(this,K().F(e)))}),R.jQ=(function(e){if(up(this,e,0),e instanceof jb){for(var t=new J_(e);t.j();){var n=t.h();Db(this,n.ea,n.co)}return this}return Nd(this,e)}),R.i=(function(){return new q_(this)}),R.b6=(function(){return pp()}),R.r=(function(){return this.d3}),R.d=(function(){return this.d3===0}),R.bE=(function(){return`HashSet`}),R.u=(function(){var e=new q_(this),t=e.j()?new Y_(this):e;return q().ha(t,q().jJ)}),R.aR=(function(e){return this.jQ(e)}),R.aK=(function(e){return this.fz(e),this}),new V().i(jb,`scala.collection.mutable.HashSet`,{bN:1,fB:1,ek:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,eC:1,d:1,aB:1,G:1,z:1,E:1,D:1,F:1,K:1,aq:1,g1:1,g0:1,k:1,a:1});function Mb(){}R=Mb.prototype=new Ky,R.constructor=Mb;function Nb(){}Nb.prototype=R,R.bj=(function(e){var t=this.k();return t===e?0:t<e?-1:1}),R.r=(function(){return this.k()}),R.b8=(function(){return`IndexedSeq`}),R.fD=(function(e){return Xy(this,e)}),R.ej=(function(e){return Zy(this,e)}),R.c4=(function(e){return dv(this,e)}),R.eV=(function(e){return O_().gO(e,this.a4())}),R.eY=(function(){return O_().fI(this.a4())}),R.dg=(function(){return O_().gj}),R.mV=(function(e){for(var t=new B(this.k()),n=0;n<t.a.length;)t.a[n]=e.f(this.p(n)),n=1+n|0;return O_().hb(t)}),R.bE=(function(){return`ArraySeq`}),R.bq=(function(e,t,n){var r=this.k(),i=Oc().br(e),a=n<r?n:r,o=t<0?i:i-t|0,s=o<a?o:a,c=s<0?0:s;return c>0&&Vc().eS(this.c6(),0,e,t,c),c}),R.fB=(function(){return 2147483647}),R.b6=(function(){return O_().gj}),R.bS=(function(e){return this.mV(e)}),R.eU=(function(e){return O_().gO(e,this.a4())});function Pb(e,t){return e.b=t,e}function Fb(){this.b=null}R=Fb.prototype=new Ky,R.constructor=Fb;function Ib(){}Ib.prototype=R,R.bj=(function(e){var t=this.k();return t===e?0:t<e?-1:1}),R.r=(function(){return this.k()}),R.b8=(function(){return`IndexedSeq`}),R.fD=(function(e){return Xy(this,e)}),R.ej=(function(e){return Zy(this,e)}),R.c4=(function(e){return dv(this,e)}),R.dg=(function(){return og()}),R.k=(function(){return this instanceof fx?this.g:this.b.a.length}),R.i=(function(){return this===bx()?og().jn:new B_(this,this.k(),this.c8())}),R.bE=(function(){return`Vector`}),R.bq=(function(e,t,n){return this.i().bq(e,t,n)}),R.fB=(function(){return og().jm}),R.at=(function(e){return bl().gY(e,this.k()-1|0)}),R.bF=(function(e){for(var t=this.c8(),n=0;n<t;){var r=W(),i=n,a=(t+(t>>>31|0)|0)>>1,o=i-a|0,s=o>>31;r.gM(((1+a|0)-((o^s)-s|0)|0)-1|0,this.c7(n),e),n=1+n|0}}),R.b6=(function(){return og()});function Lb(){}R=Lb.prototype=new rb,R.constructor=Lb;function Rb(){}Rb.prototype=R,R.bj=(function(e){var t=this.k();return t===e?0:t<e?-1:1}),R.r=(function(){return this.k()}),R.b8=(function(){return`IndexedSeq`}),R.c4=(function(e){return C_(this,e)}),R.dg=(function(){return K_().gu}),R.km=(function(e){var t=this.a4(),n=null,r=t.aA(),i=r===Pa.l();n=[],e.r();for(var a=e.i();a.j();){var o=a.h(),s=i?ya(o):o===null?Ul().fL(r):o;n.push(s)}return K_().h0(Ul().fK(r===Ma.l()?wc.l():r===eu.l()||r===gp.l()?H.l():r,n))}),R.eY=(function(){return K_().fI(this.a4())}),R.bE=(function(){return`ArraySeq`}),R.bq=(function(e,t,n){var r=this.k(),i=Oc().br(e),a=n<r?n:r,o=t<0?i:i-t|0,s=o<a?o:a,c=s<0?0:s;return c>0&&Vc().eS(this.bD(),0,e,t,c),c}),R.q=(function(e){return e instanceof Lb&&Oc().br(this.bD())!==Oc().br(e.bD())?!1:xy(this,e)}),R.b6=(function(){return K_().gu}),R.eV=(function(e){return this.km(e)}),R.eU=(function(e){return this.km(e)});function zb(e){this.cG=null,this.cG=e}R=zb.prototype=new Nb,R.constructor=zb,R.k=(function(){return this.cG.a.length}),R.eR=(function(e){return this.cG.a[e]}),R.u=(function(){var e=q();return e.ax(this.cG,e.a9)}),R.q=(function(e){return e instanceof zb?U().kd(this.cG,e.cG):xy(this,e)}),R.i=(function(){return new h_(this.cG)}),R.c6=(function(){return this.cG}),R.a4=(function(){return Vv()}),R.p=(function(e){return this.eR(e)}),R.f=(function(e){return this.eR(e|0)}),new V().i(zb,`scala.collection.immutable.ArraySeq$ofBoolean`,{bi:1,U:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,A:1,x:1,k:1,q:1,y:1,X:1,a:1});function Bb(e){this.cH=null,this.cH=e}R=Bb.prototype=new Nb,R.constructor=Bb,R.k=(function(){return this.cH.a.length}),R.eJ=(function(e){return this.cH.a[e]}),R.u=(function(){var e=q();return e.ax(this.cH,e.a9)}),R.q=(function(e){return e instanceof Bb?U().k9(this.cH,e.cH):xy(this,e)}),R.i=(function(){return new h_(this.cH)}),R.c6=(function(){return this.cH}),R.a4=(function(){return Wv()}),R.p=(function(e){return this.eJ(e)}),R.f=(function(e){return this.eJ(e|0)}),new V().i(Bb,`scala.collection.immutable.ArraySeq$ofByte`,{bj:1,U:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,A:1,x:1,k:1,q:1,y:1,X:1,a:1});function Vb(e){this.cd=null,this.cd=e}R=Vb.prototype=new Nb,R.constructor=Vb,R.k=(function(){return this.cd.a.length}),R.eK=(function(e){return this.cd.a[e]}),R.u=(function(){var e=q();return e.ax(this.cd,e.a9)}),R.q=(function(e){return e instanceof Vb?U().ka(this.cd,e.cd):xy(this,e)}),R.i=(function(){return new h_(this.cd)}),R.d7=(function(e,t,n,r){return new rx(this.cd).d7(e,t,n,r)}),R.c6=(function(){return this.cd}),R.a4=(function(){return qv()}),R.p=(function(e){return ga(this.eK(e))}),R.f=(function(e){return ga(this.eK(e|0))}),new V().i(Vb,`scala.collection.immutable.ArraySeq$ofChar`,{bk:1,U:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,A:1,x:1,k:1,q:1,y:1,X:1,a:1});function Hb(e){this.cI=null,this.cI=e}R=Hb.prototype=new Nb,R.constructor=Hb,R.k=(function(){return this.cI.a.length}),R.eL=(function(e){return this.cI.a[e]}),R.u=(function(){var e=q();return e.ax(this.cI,e.a9)}),R.q=(function(e){if(e instanceof Hb){var t=this.cI,n=e.cI;if(t===n)return!0;if(t.a.length===n.a.length){for(var r=0;r<t.a.length&&t.a[r]===n.a[r];)r=1+r|0;return r>=t.a.length}return!1}return xy(this,e)}),R.i=(function(){return new h_(this.cI)}),R.c6=(function(){return this.cI}),R.a4=(function(){return Xv()}),R.p=(function(e){return this.eL(e)}),R.f=(function(e){return this.eL(e|0)}),new V().i(Hb,`scala.collection.immutable.ArraySeq$ofDouble`,{bl:1,U:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,A:1,x:1,k:1,q:1,y:1,X:1,a:1});function Ub(e){this.cJ=null,this.cJ=e}R=Ub.prototype=new Nb,R.constructor=Ub,R.k=(function(){return this.cJ.a.length}),R.eM=(function(e){return this.cJ.a[e]}),R.u=(function(){var e=q();return e.ax(this.cJ,e.a9)}),R.q=(function(e){if(e instanceof Ub){var t=this.cJ,n=e.cJ;if(t===n)return!0;if(t.a.length===n.a.length){for(var r=0;r<t.a.length&&t.a[r]===n.a[r];)r=1+r|0;return r>=t.a.length}return!1}return xy(this,e)}),R.i=(function(){return new h_(this.cJ)}),R.c6=(function(){return this.cJ}),R.a4=(function(){return $v()}),R.p=(function(e){return this.eM(e)}),R.f=(function(e){return this.eM(e|0)}),new V().i(Ub,`scala.collection.immutable.ArraySeq$ofFloat`,{bm:1,U:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,A:1,x:1,k:1,q:1,y:1,X:1,a:1});function Wb(e){this.cK=null,this.cK=e}R=Wb.prototype=new Nb,R.constructor=Wb,R.k=(function(){return this.cK.a.length}),R.eN=(function(e){return this.cK.a[e]}),R.u=(function(){var e=q();return e.ax(this.cK,e.a9)}),R.q=(function(e){return e instanceof Wb?U().gJ(this.cK,e.cK):xy(this,e)}),R.i=(function(){return new h_(this.cK)}),R.c6=(function(){return this.cK}),R.a4=(function(){return ny()}),R.p=(function(e){return this.eN(e)}),R.f=(function(e){return this.eN(e|0)}),new V().i(Wb,`scala.collection.immutable.ArraySeq$ofInt`,{bn:1,U:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,A:1,x:1,k:1,q:1,y:1,X:1,a:1});function Gb(e){this.cL=null,this.cL=e}R=Gb.prototype=new Nb,R.constructor=Gb,R.k=(function(){return this.cL.a.length>>>1|0}),R.eO=(function(e){var t=this.cL.a,n=e<<1;return _a(t[n],t[n+1|0])}),R.u=(function(){var e=q();return e.ax(this.cL,e.a9)}),R.q=(function(e){return e instanceof Gb?U().kb(this.cL,e.cL):xy(this,e)}),R.i=(function(){return new h_(this.cL)}),R.c6=(function(){return this.cL}),R.a4=(function(){return ay()}),R.p=(function(e){return this.eO(e)}),R.f=(function(e){return this.eO(e|0)}),new V().i(Gb,`scala.collection.immutable.ArraySeq$ofLong`,{bo:1,U:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,A:1,x:1,k:1,q:1,y:1,X:1,a:1});function Kb(e){this.bX=null,this.bX=e}R=Kb.prototype=new Nb,R.constructor=Kb,R.a4=(function(){return Zl().jX($i(this.bX).a5.Q())}),R.k=(function(){return this.bX.a.length}),R.p=(function(e){return this.bX.a[e]}),R.u=(function(){var e=q();return e.ax(this.bX,e.a9)}),R.q=(function(e){return e instanceof Kb?Vc().ke(this.bX,e.bX):xy(this,e)}),R.i=(function(){return new h_(this.bX)}),R.c6=(function(){return this.bX}),R.f=(function(e){return this.p(e|0)}),new V().i(Kb,`scala.collection.immutable.ArraySeq$ofRef`,{bp:1,U:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,A:1,x:1,k:1,q:1,y:1,X:1,a:1});function qb(e){this.cM=null,this.cM=e}R=qb.prototype=new Nb,R.constructor=qb,R.k=(function(){return this.cM.a.length}),R.eP=(function(e){return this.cM.a[e]}),R.u=(function(){var e=q();return e.ax(this.cM,e.a9)}),R.q=(function(e){return e instanceof qb?U().kc(this.cM,e.cM):xy(this,e)}),R.i=(function(){return new h_(this.cM)}),R.c6=(function(){return this.cM}),R.a4=(function(){return _y()}),R.p=(function(e){return this.eP(e)}),R.f=(function(e){return this.eP(e|0)}),new V().i(qb,`scala.collection.immutable.ArraySeq$ofShort`,{bq:1,U:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,A:1,x:1,k:1,q:1,y:1,X:1,a:1});function Jb(e){this.dr=null,this.dr=e}R=Jb.prototype=new Nb,R.constructor=Jb,R.k=(function(){return this.dr.a.length}),R.eQ=(function(e){}),R.u=(function(){var e=q();return e.ax(this.dr,e.a9)}),R.q=(function(e){return e instanceof Jb?this.dr.a.length===e.dr.a.length:xy(this,e)}),R.i=(function(){return new h_(this.dr)}),R.c6=(function(){return this.dr}),R.a4=(function(){return by()}),R.p=(function(e){this.eQ(e)}),R.f=(function(e){this.eQ(e|0)}),new V().i(Jb,`scala.collection.immutable.ArraySeq$ofUnit`,{br:1,U:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,A:1,x:1,k:1,q:1,y:1,X:1,a:1});function Yb(e,t,n,r){for(var i=r,a=n;;)if(a===t)return!i.d()|0;else{if(!i.d()){var o=1+a|0,s=i.n();a=o,i=s;continue}return-1}}function Xb(e,t,n){for(var r=n,i=t;;)if(i===r)return!0;else{var a=i.d(),o=r.d();if(!(a||o)&&G().m(i.s(),r.s())){var s=i.n(),c=r.n();i=s,r=c;continue}return a&&o}}function Zb(){}R=Zb.prototype=new Ky,R.constructor=Zb;function Qb(){}Qb.prototype=R,R.p=(function(e){return hh(this,e)}),R.ej=(function(e){return gh(this,e)}),R.b8=(function(){return`LinearSeq`}),R.i=(function(){return new yh(this)}),R.c4=(function(e){return dv(this,e)}),R.dg=(function(){return qh()}),R.jK=(function(e){if(this.d())return e;if(e.d())return this;for(var t=new hx(e.s(),this),n=t,r=e.n();!r.d();){var i=new hx(r.s(),this);n.aj=i,n=i,r=r.n()}return t}),R.d=(function(){return this===$()}),R.h6=(function(e){if(e instanceof Zb)return this.jK(e);if(e.r()===0)return this;if(e instanceof jx&&this.d())return e.kJ();var t=e.i();if(t.j()){for(var n=new hx(t.h(),this),r=n;t.j();){var i=new hx(t.h(),this);r.aj=i,r=i}return n}return this}),R.jV=(function(e){return e instanceof Zb?e.jK(this):w_(this,e)}),R.mX=(function(e){if(this===$())var t=$();else{for(var n=new hx(e.f(this.s()),$()),r=n,i=this.n();i!==$();){var a=new hx(e.f(i.s()),$());r.aj=a,r=a,i=i.n()}var t=n}return t}),R.bF=(function(e){for(var t=this;!t.d();)e.f(t.s()),t=t.n()}),R.k=(function(){for(var e=this,t=0;!e.d();)t=1+t|0,e=e.n();return t}),R.bj=(function(e){return e<0?1:Yb(this,e,0,this)}),R.bQ=(function(e){for(var t=this;!t.d();){if(G().m(t.s(),e))return!0;t=t.n()}return!1}),R.bE=(function(){return`List`}),R.q=(function(e){return e instanceof Zb?Xb(this,this,e):xy(this,e)}),R.b6=(function(){return qh()}),R.bS=(function(e){return this.mX(e)}),R.k7=(function(e){return uv(this,e,this)}),R.f=(function(e){return hh(this,e|0)});function $b(){this.b=null}R=$b.prototype=new Ib,R.constructor=$b;function ex(){}ex.prototype=R;function tx(e){this.cX=null,this.cX=e}R=tx.prototype=new Rb,R.constructor=tx,R.k=(function(){return this.cX.a.length}),R.eR=(function(e){return this.cX.a[e]}),R.u=(function(){var e=q();return e.ax(this.cX,e.a9)}),R.q=(function(e){return e instanceof tx?U().kd(this.cX,e.cX):Lb.prototype.q.call(this,e)}),R.i=(function(){return new h_(this.cX)}),R.bD=(function(){return this.cX}),R.a4=(function(){return Vv()}),R.p=(function(e){return this.eR(e)}),R.f=(function(e){return this.eR(e|0)}),new V().i(tx,`scala.collection.mutable.ArraySeq$ofBoolean`,{bD:1,V:1,J:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,G:1,z:1,E:1,M:1,L:1,p:1,o:1,R:1,Q:1,k:1,q:1,a:1});function nx(e){this.cY=null,this.cY=e}R=nx.prototype=new Rb,R.constructor=nx,R.k=(function(){return this.cY.a.length}),R.eJ=(function(e){return this.cY.a[e]}),R.u=(function(){var e=q();return e.ax(this.cY,e.a9)}),R.q=(function(e){return e instanceof nx?U().k9(this.cY,e.cY):Lb.prototype.q.call(this,e)}),R.i=(function(){return new h_(this.cY)}),R.bD=(function(){return this.cY}),R.a4=(function(){return Wv()}),R.p=(function(e){return this.eJ(e)}),R.f=(function(e){return this.eJ(e|0)}),new V().i(nx,`scala.collection.mutable.ArraySeq$ofByte`,{bE:1,V:1,J:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,G:1,z:1,E:1,M:1,L:1,p:1,o:1,R:1,Q:1,k:1,q:1,a:1});function rx(e){this.bp=null,this.bp=e}R=rx.prototype=new Rb,R.constructor=rx,R.k=(function(){return this.bp.a.length}),R.eK=(function(e){return this.bp.a[e]}),R.u=(function(){var e=q();return e.ax(this.bp,e.a9)}),R.q=(function(e){return e instanceof rx?U().ka(this.bp,e.bp):Lb.prototype.q.call(this,e)}),R.i=(function(){return new h_(this.bp)}),R.d7=(function(e,t,n,r){var i=e.aJ;t.length!==0&&(i.l=``+i.l+t);var a=this.bp.a.length;if(a!==0){if(n===``)i.jT(this.bp);else{i.k();var o=this.bp.a[0],s=``+oa(o);i.l+=s;for(var c=1;c<a;){i.l=``+i.l+n;var l=this.bp.a[c],u=``+oa(l);i.l+=u,c=1+c|0}}}return r.length!==0&&(i.l=``+i.l+r),e}),R.bD=(function(){return this.bp}),R.a4=(function(){return qv()}),R.p=(function(e){return ga(this.eK(e))}),R.f=(function(e){return ga(this.eK(e|0))}),new V().i(rx,`scala.collection.mutable.ArraySeq$ofChar`,{bF:1,V:1,J:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,G:1,z:1,E:1,M:1,L:1,p:1,o:1,R:1,Q:1,k:1,q:1,a:1});function ix(e){this.by=null,this.by=e}R=ix.prototype=new Rb,R.constructor=ix,R.k=(function(){return this.by.a.length}),R.eL=(function(e){return this.by.a[e]}),R.u=(function(){var e=q();return e.ax(this.by,e.a9)}),R.q=(function(e){if(e instanceof ix){var t=e.by;if(this.by===t)return!0;if(this.by.a.length===t.a.length){for(var n=0;n<this.by.a.length&&this.by.a[n]===t.a[n];)n=1+n|0;return n>=this.by.a.length}return!1}return Lb.prototype.q.call(this,e)}),R.i=(function(){return new h_(this.by)}),R.bD=(function(){return this.by}),R.a4=(function(){return Xv()}),R.p=(function(e){return this.eL(e)}),R.f=(function(e){return this.eL(e|0)}),new V().i(ix,`scala.collection.mutable.ArraySeq$ofDouble`,{bG:1,V:1,J:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,G:1,z:1,E:1,M:1,L:1,p:1,o:1,R:1,Q:1,k:1,q:1,a:1});function ax(e){this.bz=null,this.bz=e}R=ax.prototype=new Rb,R.constructor=ax,R.k=(function(){return this.bz.a.length}),R.eM=(function(e){return this.bz.a[e]}),R.u=(function(){var e=q();return e.ax(this.bz,e.a9)}),R.q=(function(e){if(e instanceof ax){var t=e.bz;if(this.bz===t)return!0;if(this.bz.a.length===t.a.length){for(var n=0;n<this.bz.a.length&&this.bz.a[n]===t.a[n];)n=1+n|0;return n>=this.bz.a.length}return!1}return Lb.prototype.q.call(this,e)}),R.i=(function(){return new h_(this.bz)}),R.bD=(function(){return this.bz}),R.a4=(function(){return $v()}),R.p=(function(e){return this.eM(e)}),R.f=(function(e){return this.eM(e|0)}),new V().i(ax,`scala.collection.mutable.ArraySeq$ofFloat`,{bH:1,V:1,J:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,G:1,z:1,E:1,M:1,L:1,p:1,o:1,R:1,Q:1,k:1,q:1,a:1});function ox(e){this.cZ=null,this.cZ=e}R=ox.prototype=new Rb,R.constructor=ox,R.k=(function(){return this.cZ.a.length}),R.eN=(function(e){return this.cZ.a[e]}),R.u=(function(){var e=q();return e.ax(this.cZ,e.a9)}),R.q=(function(e){return e instanceof ox?U().gJ(this.cZ,e.cZ):Lb.prototype.q.call(this,e)}),R.i=(function(){return new h_(this.cZ)}),R.bD=(function(){return this.cZ}),R.a4=(function(){return ny()}),R.p=(function(e){return this.eN(e)}),R.f=(function(e){return this.eN(e|0)}),new V().i(ox,`scala.collection.mutable.ArraySeq$ofInt`,{bI:1,V:1,J:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,G:1,z:1,E:1,M:1,L:1,p:1,o:1,R:1,Q:1,k:1,q:1,a:1});function sx(e){this.d0=null,this.d0=e}R=sx.prototype=new Rb,R.constructor=sx,R.k=(function(){return this.d0.a.length>>>1|0}),R.eO=(function(e){var t=this.d0.a,n=e<<1;return _a(t[n],t[n+1|0])}),R.u=(function(){var e=q();return e.ax(this.d0,e.a9)}),R.q=(function(e){return e instanceof sx?U().kb(this.d0,e.d0):Lb.prototype.q.call(this,e)}),R.i=(function(){return new h_(this.d0)}),R.bD=(function(){return this.d0}),R.a4=(function(){return ay()}),R.p=(function(e){return this.eO(e)}),R.f=(function(e){return this.eO(e|0)}),new V().i(sx,`scala.collection.mutable.ArraySeq$ofLong`,{bJ:1,V:1,J:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,G:1,z:1,E:1,M:1,L:1,p:1,o:1,R:1,Q:1,k:1,q:1,a:1});function cx(e){this.cm=null,this.cm=e}R=cx.prototype=new Rb,R.constructor=cx,R.a4=(function(){return Zl().jX($i(this.cm).a5.Q())}),R.k=(function(){return this.cm.a.length}),R.p=(function(e){return this.cm.a[e]}),R.u=(function(){var e=q();return e.ax(this.cm,e.a9)}),R.q=(function(e){return e instanceof cx?Vc().ke(this.cm,e.cm):Lb.prototype.q.call(this,e)}),R.i=(function(){return new h_(this.cm)}),R.bD=(function(){return this.cm}),R.f=(function(e){return this.p(e|0)}),new V().i(cx,`scala.collection.mutable.ArraySeq$ofRef`,{bK:1,V:1,J:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,G:1,z:1,E:1,M:1,L:1,p:1,o:1,R:1,Q:1,k:1,q:1,a:1});function lx(e){this.d1=null,this.d1=e}R=lx.prototype=new Rb,R.constructor=lx,R.k=(function(){return this.d1.a.length}),R.eP=(function(e){return this.d1.a[e]}),R.u=(function(){var e=q();return e.ax(this.d1,e.a9)}),R.q=(function(e){return e instanceof lx?U().kc(this.d1,e.d1):Lb.prototype.q.call(this,e)}),R.i=(function(){return new h_(this.d1)}),R.bD=(function(){return this.d1}),R.a4=(function(){return _y()}),R.p=(function(e){return this.eP(e)}),R.f=(function(e){return this.eP(e|0)}),new V().i(lx,`scala.collection.mutable.ArraySeq$ofShort`,{bL:1,V:1,J:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,G:1,z:1,E:1,M:1,L:1,p:1,o:1,R:1,Q:1,k:1,q:1,a:1});function ux(e){this.dx=null,this.dx=e}R=ux.prototype=new Rb,R.constructor=ux,R.k=(function(){return this.dx.a.length}),R.eQ=(function(e){}),R.u=(function(){var e=q();return e.ax(this.dx,e.a9)}),R.q=(function(e){return e instanceof ux?this.dx.a.length===e.dx.a.length:Lb.prototype.q.call(this,e)}),R.i=(function(){return new h_(this.dx)}),R.bD=(function(){return this.dx}),R.a4=(function(){return by()}),R.p=(function(e){this.eQ(e)}),R.f=(function(e){this.eQ(e|0)}),new V().i(ux,`scala.collection.mutable.ArraySeq$ofUnit`,{bM:1,V:1,J:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,G:1,z:1,E:1,M:1,L:1,p:1,o:1,R:1,Q:1,k:1,q:1,a:1});function dx(e,t,n,r){return e.e=n,e.g=r,Pb(e,t),e}function fx(){this.b=null,this.e=null,this.g=0}R=fx.prototype=new ex,R.constructor=fx;function px(){}px.prototype=R;function mx(e){this.b=null,Pb(this,e)}R=mx.prototype=new ex,R.constructor=mx,R.p=(function(e){if(e>=0&&e<this.b.a.length)return this.b.a[e];throw this.at(e)}),R.dh=(function(e,t){if(e>=0&&e<this.b.a.length){var n=this.b.c();return n.a[e]=t,new mx(n)}throw this.at(e)}),R.d8=(function(e){if(this.b.a.length<32)return new mx(W().ec(this.b,e));var t=this.b,n=W().b5,r=new B(1);return r.a[0]=e,new xx(t,32,n,r,33)}),R.bT=(function(e){return new mx(W().bG(this.b,e))}),R.c8=(function(){return 1}),R.c7=(function(e){return this.b}),R.f=(function(e){var t=e|0;if(t>=0&&t<this.b.a.length)return this.b.a[t];throw this.at(t)}),R.bS=(function(e){return this.bT(e)}),new V().i(mx,`scala.collection.immutable.Vector1`,{fr:1,ab:1,a4:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,A:1,x:1,k:1,q:1,y:1,a:1,T:1});function hx(e,t){this.gi=null,this.aj=null,this.gi=e,this.aj=t}R=hx.prototype=new Qb,R.constructor=hx,R.ei=(function(){return new $m(this)}),R.cx=(function(){return 2}),R.cz=(function(){return`::`}),R.cy=(function(e){if(e===0)return this.gi;if(e===1)return this.aj;throw Rm(new zm,e)}),R.s=(function(){return this.gi}),R.n=(function(){return this.aj}),new V().i(hx,`scala.collection.immutable.$colon$colon`,{eK:1,aE:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,ay:1,al:1,aD:1,aC:1,k:1,q:1,bh:1,y:1,a:1,T:1,a8:1});function gx(){_x=this,$(),$()}R=gx.prototype=new Qb,R.constructor=gx,R.ei=(function(){return new $m(this)}),R.cx=(function(){return 0}),R.cz=(function(){return`Nil`}),R.cy=(function(e){throw Rm(new zm,e)}),R.mG=(function(){throw new qm(`head of empty list`)}),R.nH=(function(){throw new Gm(`tail of empty list`)}),R.r=(function(){return 0}),R.i=(function(){return Yf().M}),R.s=(function(){this.mG()}),R.n=(function(){this.nH()}),new V().i(gx,`scala.collection.immutable.Nil$`,{fh:1,aE:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,ay:1,al:1,aD:1,aC:1,k:1,q:1,bh:1,y:1,a:1,T:1,a8:1});var _x;function $(){return _x||=new gx,_x}function vx(){this.b=null,this.e=null,this.g=0,dx(this,W().gp,W().gp,0)}R=vx.prototype=new px,R.constructor=vx,R.jW=(function(e){throw this.at(e)}),R.dh=(function(e,t){throw this.at(e)}),R.d8=(function(e){var t=new B(1);return t.a[0]=e,new mx(t)}),R.c8=(function(){return 0}),R.c7=(function(e){return null}),R.q=(function(e){return this===e||(e instanceof Fb?!1:xy(this,e))}),R.at=(function(e){return Lm(new zm,e+` is out of bounds (empty vector)`)}),R.p=(function(e){this.jW(e)}),R.f=(function(e){this.jW(e|0)}),R.bS=(function(e){return this}),new V().i(vx,`scala.collection.immutable.Vector0$`,{fq:1,aa:1,ab:1,a4:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,A:1,x:1,k:1,q:1,y:1,a:1,T:1});var yx;function bx(){return yx||=new vx,yx}function xx(e,t,n,r,i){this.b=null,this.e=null,this.g=0,this.bi=0,this.b0=null,this.bi=t,this.b0=n,dx(this,e,r,i)}R=xx.prototype=new px,R.constructor=xx,R.p=(function(e){if(e>=0&&e<this.g){var t=e-this.bi|0;if(t>=0){var n=t>>>5|0,r=31&t;return n<this.b0.a.length?this.b0.a[n].a[r]:this.e.a[31&t]}return this.b.a[e]}throw this.at(e)}),R.dh=(function(e,t){if(e>=0&&e<this.g){if(e>=this.bi){var n=e-this.bi|0,r=n>>>5|0,i=31&n;if(r<this.b0.a.length){var a=this.b0.c(),o=a.a[r].c();return o.a[i]=t,a.a[r]=o,new xx(this.b,this.bi,a,this.e,this.g)}var s=this.e.c();return s.a[i]=t,new xx(this.b,this.bi,this.b0,s,this.g)}var c=this.b.c();return c.a[e]=t,new xx(c,this.bi,this.b0,this.e,this.g)}throw this.at(e)}),R.d8=(function(e){if(this.e.a.length<32){var t=W().ec(this.e,e),n=1+this.g|0;return new xx(this.b,this.bi,this.b0,t,n)}if(this.b0.a.length<30){var r=W().w(this.b0,this.e),i=new B(1);i.a[0]=e;var a=1+this.g|0;return new xx(this.b,this.bi,r,i,a)}var o=this.b,s=this.bi,c=this.b0,l=this.bi,u=W().c1,d=this.e,f=new(H.r().r()).C(1);f.a[0]=d;var p=new B(1);return p.a[0]=e,new Sx(o,s,c,960+l|0,u,f,p,1+this.g|0)}),R.bT=(function(e){var t=W().bG(this.b,e),n=W().T(2,this.b0,e),r=W().bG(this.e,e);return new xx(t,this.bi,n,r,this.g)}),R.c8=(function(){return 3}),R.c7=(function(e){switch(e){case 0:return this.b;case 1:return this.b0;case 2:return this.e;default:throw new Xm(e)}}),R.f=(function(e){var t=e|0;if(t>=0&&t<this.g){var n=t-this.bi|0;if(n>=0){var r=n>>>5|0,i=31&n;return r<this.b0.a.length?this.b0.a[r].a[i]:this.e.a[31&n]}return this.b.a[t]}throw this.at(t)}),R.bS=(function(e){return this.bT(e)}),new V().i(xx,`scala.collection.immutable.Vector2`,{fs:1,aa:1,ab:1,a4:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,A:1,x:1,k:1,q:1,y:1,a:1,T:1});function Sx(e,t,n,r,i,a,o,s){this.b=null,this.e=null,this.g=0,this.aX=0,this.b4=null,this.aY=0,this.aF=null,this.aG=null,this.aX=t,this.b4=n,this.aY=r,this.aF=i,this.aG=a,dx(this,e,o,s)}R=Sx.prototype=new px,R.constructor=Sx,R.p=(function(e){if(e>=0&&e<this.g){var t=e-this.aY|0;if(t>=0){var n=t>>>10|0,r=31&(t>>>5|0),i=31&t;return n<this.aF.a.length?this.aF.a[n].a[r].a[i]:r<this.aG.a.length?this.aG.a[r].a[i]:this.e.a[i]}if(e>=this.aX){var a=e-this.aX|0;return this.b4.a[a>>>5|0].a[31&a]}return this.b.a[e]}throw this.at(e)}),R.dh=(function(e,t){if(e>=0&&e<this.g){if(e>=this.aY){var n=e-this.aY|0,r=n>>>10|0,i=31&(n>>>5|0),a=31&n;if(r<this.aF.a.length){var o=this.aF.c(),s=o.a[r].c(),c=s.a[i].c();return c.a[a]=t,s.a[i]=c,o.a[r]=s,new Sx(this.b,this.aX,this.b4,this.aY,o,this.aG,this.e,this.g)}if(i<this.aG.a.length){var l=this.aG.c(),u=l.a[i].c();return u.a[a]=t,l.a[i]=u,new Sx(this.b,this.aX,this.b4,this.aY,this.aF,l,this.e,this.g)}var d=this.e.c();return d.a[a]=t,new Sx(this.b,this.aX,this.b4,this.aY,this.aF,this.aG,d,this.g)}if(e>=this.aX){var f=e-this.aX|0,p=this.b4,m=f>>>5|0,h=31&f,g=p.c(),_=g.a[m].c();return _.a[h]=t,g.a[m]=_,new Sx(this.b,this.aX,g,this.aY,this.aF,this.aG,this.e,this.g)}var v=this.b.c();return v.a[e]=t,new Sx(v,this.aX,this.b4,this.aY,this.aF,this.aG,this.e,this.g)}throw this.at(e)}),R.d8=(function(e){if(this.e.a.length<32){var t=W().ec(this.e,e),n=1+this.g|0;return new Sx(this.b,this.aX,this.b4,this.aY,this.aF,this.aG,t,n)}if(this.aG.a.length<31){var r=W().w(this.aG,this.e),i=new B(1);i.a[0]=e;var a=1+this.g|0;return new Sx(this.b,this.aX,this.b4,this.aY,this.aF,r,i,a)}if(this.aF.a.length<30){var o=W().w(this.aF,W().w(this.aG,this.e)),s=new B(1);s.a[0]=e;var c=1+this.g|0;return new Sx(this.b,this.aX,this.b4,this.aY,o,W().b5,s,c)}var l=this.b,u=this.aX,d=this.b4,f=this.aY,p=this.aF,m=this.aY,h=W().e7,g=W().w(this.aG,this.e),_=new(H.r().r().r()).C(1);_.a[0]=g;var v=W().b5,y=new B(1);return y.a[0]=e,new Cx(l,u,d,f,p,30720+m|0,h,_,v,y,1+this.g|0)}),R.bT=(function(e){var t=W().bG(this.b,e),n=W().T(2,this.b4,e),r=W().T(3,this.aF,e),i=W().T(2,this.aG,e),a=W().bG(this.e,e);return new Sx(t,this.aX,n,this.aY,r,i,a,this.g)}),R.c8=(function(){return 5}),R.c7=(function(e){switch(e){case 0:return this.b;case 1:return this.b4;case 2:return this.aF;case 3:return this.aG;case 4:return this.e;default:throw new Xm(e)}}),R.f=(function(e){var t=e|0;if(t>=0&&t<this.g){var n=t-this.aY|0;if(n>=0){var r=n>>>10|0,i=31&(n>>>5|0),a=31&n;return r<this.aF.a.length?this.aF.a[r].a[i].a[a]:i<this.aG.a.length?this.aG.a[i].a[a]:this.e.a[a]}if(t>=this.aX){var o=t-this.aX|0;return this.b4.a[o>>>5|0].a[31&o]}return this.b.a[t]}throw this.at(t)}),R.bS=(function(e){return this.bT(e)}),new V().i(Sx,`scala.collection.immutable.Vector3`,{ft:1,aa:1,ab:1,a4:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,A:1,x:1,k:1,q:1,y:1,a:1,T:1});function Cx(e,t,n,r,i,a,o,s,c,l,u){this.b=null,this.e=null,this.g=0,this.au=0,this.aO=null,this.av=0,this.aP=null,this.aw=0,this.al=null,this.an=null,this.am=null,this.au=t,this.aO=n,this.av=r,this.aP=i,this.aw=a,this.al=o,this.an=s,this.am=c,dx(this,e,l,u)}R=Cx.prototype=new px,R.constructor=Cx,R.p=(function(e){if(e>=0&&e<this.g){var t=e-this.aw|0;if(t>=0){var n=t>>>15|0,r=31&(t>>>10|0),i=31&(t>>>5|0),a=31&t;return n<this.al.a.length?this.al.a[n].a[r].a[i].a[a]:r<this.an.a.length?this.an.a[r].a[i].a[a]:i<this.am.a.length?this.am.a[i].a[a]:this.e.a[a]}if(e>=this.av){var o=e-this.av|0;return this.aP.a[o>>>10|0].a[31&(o>>>5|0)].a[31&o]}if(e>=this.au){var s=e-this.au|0;return this.aO.a[s>>>5|0].a[31&s]}return this.b.a[e]}throw this.at(e)}),R.dh=(function(e,t){if(e>=0&&e<this.g){if(e>=this.aw){var n=e-this.aw|0,r=n>>>15|0,i=31&(n>>>10|0),a=31&(n>>>5|0),o=31&n;if(r<this.al.a.length){var s=this.al.c(),c=s.a[r].c(),l=c.a[i].c(),u=l.a[a].c();return u.a[o]=t,l.a[a]=u,c.a[i]=l,s.a[r]=c,new Cx(this.b,this.au,this.aO,this.av,this.aP,this.aw,s,this.an,this.am,this.e,this.g)}if(i<this.an.a.length){var d=this.an.c(),f=d.a[i].c(),p=f.a[a].c();return p.a[o]=t,f.a[a]=p,d.a[i]=f,new Cx(this.b,this.au,this.aO,this.av,this.aP,this.aw,this.al,d,this.am,this.e,this.g)}if(a<this.am.a.length){var m=this.am.c(),h=m.a[a].c();return h.a[o]=t,m.a[a]=h,new Cx(this.b,this.au,this.aO,this.av,this.aP,this.aw,this.al,this.an,m,this.e,this.g)}var g=this.e.c();return g.a[o]=t,new Cx(this.b,this.au,this.aO,this.av,this.aP,this.aw,this.al,this.an,this.am,g,this.g)}if(e>=this.av){var _=e-this.av|0,v=this.aP,y=_>>>10|0,b=31&(_>>>5|0),x=31&_,S=v.c(),C=S.a[y].c(),w=C.a[b].c();return w.a[x]=t,C.a[b]=w,S.a[y]=C,new Cx(this.b,this.au,this.aO,this.av,S,this.aw,this.al,this.an,this.am,this.e,this.g)}if(e>=this.au){var T=e-this.au|0,E=this.aO,ee=T>>>5|0,te=31&T,D=E.c(),O=D.a[ee].c();return O.a[te]=t,D.a[ee]=O,new Cx(this.b,this.au,D,this.av,this.aP,this.aw,this.al,this.an,this.am,this.e,this.g)}var ne=this.b.c();return ne.a[e]=t,new Cx(ne,this.au,this.aO,this.av,this.aP,this.aw,this.al,this.an,this.am,this.e,this.g)}throw this.at(e)}),R.d8=(function(e){if(this.e.a.length<32){var t=W().ec(this.e,e),n=1+this.g|0;return new Cx(this.b,this.au,this.aO,this.av,this.aP,this.aw,this.al,this.an,this.am,t,n)}if(this.am.a.length<31){var r=W().w(this.am,this.e),i=new B(1);i.a[0]=e;var a=1+this.g|0;return new Cx(this.b,this.au,this.aO,this.av,this.aP,this.aw,this.al,this.an,r,i,a)}if(this.an.a.length<31){var o=W().w(this.an,W().w(this.am,this.e)),s=new B(1);s.a[0]=e;var c=1+this.g|0;return new Cx(this.b,this.au,this.aO,this.av,this.aP,this.aw,this.al,o,W().b5,s,c)}if(this.al.a.length<30){var l=W().w(this.al,W().w(this.an,W().w(this.am,this.e))),u=new B(1);u.a[0]=e;var d=1+this.g|0;return new Cx(this.b,this.au,this.aO,this.av,this.aP,this.aw,l,W().c1,W().b5,u,d)}var f=this.b,p=this.au,m=this.aO,h=this.av,g=this.aP,_=this.aw,v=this.al,y=this.aw,b=W().gq,x=W().w(this.an,W().w(this.am,this.e)),S=new(H.r().r().r().r()).C(1);S.a[0]=x;var C=W().c1,w=W().b5,T=new B(1);return T.a[0]=e,new wx(f,p,m,h,g,_,v,983040+y|0,b,S,C,w,T,1+this.g|0)}),R.bT=(function(e){var t=W().bG(this.b,e),n=W().T(2,this.aO,e),r=W().T(3,this.aP,e),i=W().T(4,this.al,e),a=W().T(3,this.an,e),o=W().T(2,this.am,e),s=W().bG(this.e,e);return new Cx(t,this.au,n,this.av,r,this.aw,i,a,o,s,this.g)}),R.c8=(function(){return 7}),R.c7=(function(e){switch(e){case 0:return this.b;case 1:return this.aO;case 2:return this.aP;case 3:return this.al;case 4:return this.an;case 5:return this.am;case 6:return this.e;default:throw new Xm(e)}}),R.f=(function(e){var t=e|0;if(t>=0&&t<this.g){var n=t-this.aw|0;if(n>=0){var r=n>>>15|0,i=31&(n>>>10|0),a=31&(n>>>5|0),o=31&n;return r<this.al.a.length?this.al.a[r].a[i].a[a].a[o]:i<this.an.a.length?this.an.a[i].a[a].a[o]:a<this.am.a.length?this.am.a[a].a[o]:this.e.a[o]}if(t>=this.av){var s=t-this.av|0;return this.aP.a[s>>>10|0].a[31&(s>>>5|0)].a[31&s]}if(t>=this.au){var c=t-this.au|0;return this.aO.a[c>>>5|0].a[31&c]}return this.b.a[t]}throw this.at(t)}),R.bS=(function(e){return this.bT(e)}),new V().i(Cx,`scala.collection.immutable.Vector4`,{fu:1,aa:1,ab:1,a4:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,A:1,x:1,k:1,q:1,y:1,a:1,T:1});function wx(e,t,n,r,i,a,o,s,c,l,u,d,f,p){this.b=null,this.e=null,this.g=0,this.ab=0,this.ap=null,this.ac=0,this.aq=null,this.ad=0,this.ar=null,this.ae=0,this.V=null,this.Y=null,this.X=null,this.W=null,this.ab=t,this.ap=n,this.ac=r,this.aq=i,this.ad=a,this.ar=o,this.ae=s,this.V=c,this.Y=l,this.X=u,this.W=d,dx(this,e,f,p)}R=wx.prototype=new px,R.constructor=wx,R.p=(function(e){if(e>=0&&e<this.g){var t=e-this.ae|0;if(t>=0){var n=t>>>20|0,r=31&(t>>>15|0),i=31&(t>>>10|0),a=31&(t>>>5|0),o=31&t;return n<this.V.a.length?this.V.a[n].a[r].a[i].a[a].a[o]:r<this.Y.a.length?this.Y.a[r].a[i].a[a].a[o]:i<this.X.a.length?this.X.a[i].a[a].a[o]:a<this.W.a.length?this.W.a[a].a[o]:this.e.a[o]}if(e>=this.ad){var s=e-this.ad|0;return this.ar.a[s>>>15|0].a[31&(s>>>10|0)].a[31&(s>>>5|0)].a[31&s]}if(e>=this.ac){var c=e-this.ac|0;return this.aq.a[c>>>10|0].a[31&(c>>>5|0)].a[31&c]}if(e>=this.ab){var l=e-this.ab|0;return this.ap.a[l>>>5|0].a[31&l]}return this.b.a[e]}throw this.at(e)}),R.dh=(function(e,t){if(e>=0&&e<this.g){if(e>=this.ae){var n=e-this.ae|0,r=n>>>20|0,i=31&(n>>>15|0),a=31&(n>>>10|0),o=31&(n>>>5|0),s=31&n;if(r<this.V.a.length){var c=this.V.c(),l=c.a[r].c(),u=l.a[i].c(),d=u.a[a].c(),f=d.a[o].c();return f.a[s]=t,d.a[o]=f,u.a[a]=d,l.a[i]=u,c.a[r]=l,new wx(this.b,this.ab,this.ap,this.ac,this.aq,this.ad,this.ar,this.ae,c,this.Y,this.X,this.W,this.e,this.g)}if(i<this.Y.a.length){var p=this.Y.c(),m=p.a[i].c(),h=m.a[a].c(),g=h.a[o].c();return g.a[s]=t,h.a[o]=g,m.a[a]=h,p.a[i]=m,new wx(this.b,this.ab,this.ap,this.ac,this.aq,this.ad,this.ar,this.ae,this.V,p,this.X,this.W,this.e,this.g)}if(a<this.X.a.length){var _=this.X.c(),v=_.a[a].c(),y=v.a[o].c();return y.a[s]=t,v.a[o]=y,_.a[a]=v,new wx(this.b,this.ab,this.ap,this.ac,this.aq,this.ad,this.ar,this.ae,this.V,this.Y,_,this.W,this.e,this.g)}if(o<this.W.a.length){var b=this.W.c(),x=b.a[o].c();return x.a[s]=t,b.a[o]=x,new wx(this.b,this.ab,this.ap,this.ac,this.aq,this.ad,this.ar,this.ae,this.V,this.Y,this.X,b,this.e,this.g)}var S=this.e.c();return S.a[s]=t,new wx(this.b,this.ab,this.ap,this.ac,this.aq,this.ad,this.ar,this.ae,this.V,this.Y,this.X,this.W,S,this.g)}if(e>=this.ad){var C=e-this.ad|0,w=this.ar,T=C>>>15|0,E=31&(C>>>10|0),ee=31&(C>>>5|0),te=31&C,D=w.c(),O=D.a[T].c(),ne=O.a[E].c(),re=ne.a[ee].c();return re.a[te]=t,ne.a[ee]=re,O.a[E]=ne,D.a[T]=O,new wx(this.b,this.ab,this.ap,this.ac,this.aq,this.ad,D,this.ae,this.V,this.Y,this.X,this.W,this.e,this.g)}if(e>=this.ac){var ie=e-this.ac|0,ae=this.aq,k=ie>>>10|0,oe=31&(ie>>>5|0),A=31&ie,se=ae.c(),ce=se.a[k].c(),le=ce.a[oe].c();return le.a[A]=t,ce.a[oe]=le,se.a[k]=ce,new wx(this.b,this.ab,this.ap,this.ac,se,this.ad,this.ar,this.ae,this.V,this.Y,this.X,this.W,this.e,this.g)}if(e>=this.ab){var ue=e-this.ab|0,de=this.ap,fe=ue>>>5|0,pe=31&ue,me=de.c(),he=me.a[fe].c();return he.a[pe]=t,me.a[fe]=he,new wx(this.b,this.ab,me,this.ac,this.aq,this.ad,this.ar,this.ae,this.V,this.Y,this.X,this.W,this.e,this.g)}var ge=this.b.c();return ge.a[e]=t,new wx(ge,this.ab,this.ap,this.ac,this.aq,this.ad,this.ar,this.ae,this.V,this.Y,this.X,this.W,this.e,this.g)}throw this.at(e)}),R.d8=(function(e){if(this.e.a.length<32){var t=W().ec(this.e,e),n=1+this.g|0;return new wx(this.b,this.ab,this.ap,this.ac,this.aq,this.ad,this.ar,this.ae,this.V,this.Y,this.X,this.W,t,n)}if(this.W.a.length<31){var r=W().w(this.W,this.e),i=new B(1);i.a[0]=e;var a=1+this.g|0;return new wx(this.b,this.ab,this.ap,this.ac,this.aq,this.ad,this.ar,this.ae,this.V,this.Y,this.X,r,i,a)}if(this.X.a.length<31){var o=W().w(this.X,W().w(this.W,this.e)),s=new B(1);s.a[0]=e;var c=1+this.g|0;return new wx(this.b,this.ab,this.ap,this.ac,this.aq,this.ad,this.ar,this.ae,this.V,this.Y,o,W().b5,s,c)}if(this.Y.a.length<31){var l=W().w(this.Y,W().w(this.X,W().w(this.W,this.e))),u=new B(1);u.a[0]=e;var d=1+this.g|0;return new wx(this.b,this.ab,this.ap,this.ac,this.aq,this.ad,this.ar,this.ae,this.V,l,W().c1,W().b5,u,d)}if(this.V.a.length<30){var f=W().w(this.V,W().w(this.Y,W().w(this.X,W().w(this.W,this.e)))),p=new B(1);p.a[0]=e;var m=1+this.g|0;return new wx(this.b,this.ab,this.ap,this.ac,this.aq,this.ad,this.ar,this.ae,f,W().e7,W().c1,W().b5,p,m)}var h=this.b,g=this.ab,_=this.ap,v=this.ac,y=this.aq,b=this.ad,x=this.ar,S=this.ae,C=this.V,w=this.ae,T=W().jo,E=W().w(this.Y,W().w(this.X,W().w(this.W,this.e))),ee=new(H.r().r().r().r().r()).C(1);ee.a[0]=E;var te=W().e7,D=W().c1,O=W().b5,ne=new B(1);return ne.a[0]=e,new Tx(h,g,_,v,y,b,x,S,C,31457280+w|0,T,ee,te,D,O,ne,1+this.g|0)}),R.bT=(function(e){var t=W().bG(this.b,e),n=W().T(2,this.ap,e),r=W().T(3,this.aq,e),i=W().T(4,this.ar,e),a=W().T(5,this.V,e),o=W().T(4,this.Y,e),s=W().T(3,this.X,e),c=W().T(2,this.W,e),l=W().bG(this.e,e);return new wx(t,this.ab,n,this.ac,r,this.ad,i,this.ae,a,o,s,c,l,this.g)}),R.c8=(function(){return 9}),R.c7=(function(e){switch(e){case 0:return this.b;case 1:return this.ap;case 2:return this.aq;case 3:return this.ar;case 4:return this.V;case 5:return this.Y;case 6:return this.X;case 7:return this.W;case 8:return this.e;default:throw new Xm(e)}}),R.f=(function(e){var t=e|0;if(t>=0&&t<this.g){var n=t-this.ae|0;if(n>=0){var r=n>>>20|0,i=31&(n>>>15|0),a=31&(n>>>10|0),o=31&(n>>>5|0),s=31&n;return r<this.V.a.length?this.V.a[r].a[i].a[a].a[o].a[s]:i<this.Y.a.length?this.Y.a[i].a[a].a[o].a[s]:a<this.X.a.length?this.X.a[a].a[o].a[s]:o<this.W.a.length?this.W.a[o].a[s]:this.e.a[s]}if(t>=this.ad){var c=t-this.ad|0;return this.ar.a[c>>>15|0].a[31&(c>>>10|0)].a[31&(c>>>5|0)].a[31&c]}if(t>=this.ac){var l=t-this.ac|0;return this.aq.a[l>>>10|0].a[31&(l>>>5|0)].a[31&l]}if(t>=this.ab){var u=t-this.ab|0;return this.ap.a[u>>>5|0].a[31&u]}return this.b.a[t]}throw this.at(t)}),R.bS=(function(e){return this.bT(e)}),new V().i(wx,`scala.collection.immutable.Vector5`,{fv:1,aa:1,ab:1,a4:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,A:1,x:1,k:1,q:1,y:1,a:1,T:1});function Tx(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){this.b=null,this.e=null,this.g=0,this.Z=0,this.af=null,this.a0=0,this.ag=null,this.a1=0,this.ah=null,this.a2=0,this.ai=null,this.a8=0,this.O=null,this.S=null,this.R=null,this.Q=null,this.P=null,this.Z=t,this.af=n,this.a0=r,this.ag=i,this.a1=a,this.ah=o,this.a2=s,this.ai=c,this.a8=l,this.O=u,this.S=d,this.R=f,this.Q=p,this.P=m,dx(this,e,h,g)}R=Tx.prototype=new px,R.constructor=Tx,R.p=(function(e){if(e>=0&&e<this.g){var t=e-this.a8|0;if(t>=0){var n=t>>>25|0,r=31&(t>>>20|0),i=31&(t>>>15|0),a=31&(t>>>10|0),o=31&(t>>>5|0),s=31&t;return n<this.O.a.length?this.O.a[n].a[r].a[i].a[a].a[o].a[s]:r<this.S.a.length?this.S.a[r].a[i].a[a].a[o].a[s]:i<this.R.a.length?this.R.a[i].a[a].a[o].a[s]:a<this.Q.a.length?this.Q.a[a].a[o].a[s]:o<this.P.a.length?this.P.a[o].a[s]:this.e.a[s]}if(e>=this.a2){var c=e-this.a2|0;return this.ai.a[c>>>20|0].a[31&(c>>>15|0)].a[31&(c>>>10|0)].a[31&(c>>>5|0)].a[31&c]}if(e>=this.a1){var l=e-this.a1|0;return this.ah.a[l>>>15|0].a[31&(l>>>10|0)].a[31&(l>>>5|0)].a[31&l]}if(e>=this.a0){var u=e-this.a0|0;return this.ag.a[u>>>10|0].a[31&(u>>>5|0)].a[31&u]}if(e>=this.Z){var d=e-this.Z|0;return this.af.a[d>>>5|0].a[31&d]}return this.b.a[e]}throw this.at(e)}),R.dh=(function(e,t){if(e>=0&&e<this.g){if(e>=this.a8){var n=e-this.a8|0,r=n>>>25|0,i=31&(n>>>20|0),a=31&(n>>>15|0),o=31&(n>>>10|0),s=31&(n>>>5|0),c=31&n;if(r<this.O.a.length){var l=this.O.c(),u=l.a[r].c(),d=u.a[i].c(),f=d.a[a].c(),p=f.a[o].c(),m=p.a[s].c();return m.a[c]=t,p.a[s]=m,f.a[o]=p,d.a[a]=f,u.a[i]=d,l.a[r]=u,new Tx(this.b,this.Z,this.af,this.a0,this.ag,this.a1,this.ah,this.a2,this.ai,this.a8,l,this.S,this.R,this.Q,this.P,this.e,this.g)}if(i<this.S.a.length){var h=this.S.c(),g=h.a[i].c(),_=g.a[a].c(),v=_.a[o].c(),y=v.a[s].c();return y.a[c]=t,v.a[s]=y,_.a[o]=v,g.a[a]=_,h.a[i]=g,new Tx(this.b,this.Z,this.af,this.a0,this.ag,this.a1,this.ah,this.a2,this.ai,this.a8,this.O,h,this.R,this.Q,this.P,this.e,this.g)}if(a<this.R.a.length){var b=this.R.c(),x=b.a[a].c(),S=x.a[o].c(),C=S.a[s].c();return C.a[c]=t,S.a[s]=C,x.a[o]=S,b.a[a]=x,new Tx(this.b,this.Z,this.af,this.a0,this.ag,this.a1,this.ah,this.a2,this.ai,this.a8,this.O,this.S,b,this.Q,this.P,this.e,this.g)}if(o<this.Q.a.length){var w=this.Q.c(),T=w.a[o].c(),E=T.a[s].c();return E.a[c]=t,T.a[s]=E,w.a[o]=T,new Tx(this.b,this.Z,this.af,this.a0,this.ag,this.a1,this.ah,this.a2,this.ai,this.a8,this.O,this.S,this.R,w,this.P,this.e,this.g)}if(s<this.P.a.length){var ee=this.P.c(),te=ee.a[s].c();return te.a[c]=t,ee.a[s]=te,new Tx(this.b,this.Z,this.af,this.a0,this.ag,this.a1,this.ah,this.a2,this.ai,this.a8,this.O,this.S,this.R,this.Q,ee,this.e,this.g)}var D=this.e.c();return D.a[c]=t,new Tx(this.b,this.Z,this.af,this.a0,this.ag,this.a1,this.ah,this.a2,this.ai,this.a8,this.O,this.S,this.R,this.Q,this.P,D,this.g)}if(e>=this.a2){var O=e-this.a2|0,ne=this.ai,re=O>>>20|0,ie=31&(O>>>15|0),ae=31&(O>>>10|0),k=31&(O>>>5|0),oe=31&O,A=ne.c(),se=A.a[re].c(),ce=se.a[ie].c(),le=ce.a[ae].c(),ue=le.a[k].c();return ue.a[oe]=t,le.a[k]=ue,ce.a[ae]=le,se.a[ie]=ce,A.a[re]=se,new Tx(this.b,this.Z,this.af,this.a0,this.ag,this.a1,this.ah,this.a2,A,this.a8,this.O,this.S,this.R,this.Q,this.P,this.e,this.g)}if(e>=this.a1){var de=e-this.a1|0,fe=this.ah,pe=de>>>15|0,me=31&(de>>>10|0),he=31&(de>>>5|0),ge=31&de,_e=fe.c(),ve=_e.a[pe].c(),ye=ve.a[me].c(),be=ye.a[he].c();return be.a[ge]=t,ye.a[he]=be,ve.a[me]=ye,_e.a[pe]=ve,new Tx(this.b,this.Z,this.af,this.a0,this.ag,this.a1,_e,this.a2,this.ai,this.a8,this.O,this.S,this.R,this.Q,this.P,this.e,this.g)}if(e>=this.a0){var xe=e-this.a0|0,Se=this.ag,Ce=xe>>>10|0,we=31&(xe>>>5|0),Te=31&xe,Ee=Se.c(),j=Ee.a[Ce].c(),M=j.a[we].c();return M.a[Te]=t,j.a[we]=M,Ee.a[Ce]=j,new Tx(this.b,this.Z,this.af,this.a0,Ee,this.a1,this.ah,this.a2,this.ai,this.a8,this.O,this.S,this.R,this.Q,this.P,this.e,this.g)}if(e>=this.Z){var N=e-this.Z|0,De=this.af,Oe=N>>>5|0,ke=31&N,Ae=De.c(),je=Ae.a[Oe].c();return je.a[ke]=t,Ae.a[Oe]=je,new Tx(this.b,this.Z,Ae,this.a0,this.ag,this.a1,this.ah,this.a2,this.ai,this.a8,this.O,this.S,this.R,this.Q,this.P,this.e,this.g)}var Me=this.b.c();return Me.a[e]=t,new Tx(Me,this.Z,this.af,this.a0,this.ag,this.a1,this.ah,this.a2,this.ai,this.a8,this.O,this.S,this.R,this.Q,this.P,this.e,this.g)}throw this.at(e)}),R.d8=(function(e){if(this.e.a.length<32){var t=W().ec(this.e,e),n=1+this.g|0;return new Tx(this.b,this.Z,this.af,this.a0,this.ag,this.a1,this.ah,this.a2,this.ai,this.a8,this.O,this.S,this.R,this.Q,this.P,t,n)}if(this.P.a.length<31){var r=W().w(this.P,this.e),i=new B(1);i.a[0]=e;var a=1+this.g|0;return new Tx(this.b,this.Z,this.af,this.a0,this.ag,this.a1,this.ah,this.a2,this.ai,this.a8,this.O,this.S,this.R,this.Q,r,i,a)}if(this.Q.a.length<31){var o=W().w(this.Q,W().w(this.P,this.e)),s=new B(1);s.a[0]=e;var c=1+this.g|0;return new Tx(this.b,this.Z,this.af,this.a0,this.ag,this.a1,this.ah,this.a2,this.ai,this.a8,this.O,this.S,this.R,o,W().b5,s,c)}if(this.R.a.length<31){var l=W().w(this.R,W().w(this.Q,W().w(this.P,this.e))),u=new B(1);u.a[0]=e;var d=1+this.g|0;return new Tx(this.b,this.Z,this.af,this.a0,this.ag,this.a1,this.ah,this.a2,this.ai,this.a8,this.O,this.S,l,W().c1,W().b5,u,d)}if(this.S.a.length<31){var f=W().w(this.S,W().w(this.R,W().w(this.Q,W().w(this.P,this.e)))),p=new B(1);p.a[0]=e;var m=1+this.g|0;return new Tx(this.b,this.Z,this.af,this.a0,this.ag,this.a1,this.ah,this.a2,this.ai,this.a8,this.O,f,W().e7,W().c1,W().b5,p,m)}if(this.O.a.length<62){var h=W().w(this.O,W().w(this.S,W().w(this.R,W().w(this.Q,W().w(this.P,this.e))))),g=new B(1);g.a[0]=e;var _=1+this.g|0;return new Tx(this.b,this.Z,this.af,this.a0,this.ag,this.a1,this.ah,this.a2,this.ai,this.a8,h,W().gq,W().e7,W().c1,W().b5,g,_)}throw Pm(new Fm)}),R.bT=(function(e){var t=W().bG(this.b,e),n=W().T(2,this.af,e),r=W().T(3,this.ag,e),i=W().T(4,this.ah,e),a=W().T(5,this.ai,e),o=W().T(6,this.O,e),s=W().T(5,this.S,e),c=W().T(4,this.R,e),l=W().T(3,this.Q,e),u=W().T(2,this.P,e),d=W().bG(this.e,e);return new Tx(t,this.Z,n,this.a0,r,this.a1,i,this.a2,a,this.a8,o,s,c,l,u,d,this.g)}),R.c8=(function(){return 11}),R.c7=(function(e){switch(e){case 0:return this.b;case 1:return this.af;case 2:return this.ag;case 3:return this.ah;case 4:return this.ai;case 5:return this.O;case 6:return this.S;case 7:return this.R;case 8:return this.Q;case 9:return this.P;case 10:return this.e;default:throw new Xm(e)}}),R.f=(function(e){var t=e|0;if(t>=0&&t<this.g){var n=t-this.a8|0;if(n>=0){var r=n>>>25|0,i=31&(n>>>20|0),a=31&(n>>>15|0),o=31&(n>>>10|0),s=31&(n>>>5|0),c=31&n;return r<this.O.a.length?this.O.a[r].a[i].a[a].a[o].a[s].a[c]:i<this.S.a.length?this.S.a[i].a[a].a[o].a[s].a[c]:a<this.R.a.length?this.R.a[a].a[o].a[s].a[c]:o<this.Q.a.length?this.Q.a[o].a[s].a[c]:s<this.P.a.length?this.P.a[s].a[c]:this.e.a[c]}if(t>=this.a2){var l=t-this.a2|0;return this.ai.a[l>>>20|0].a[31&(l>>>15|0)].a[31&(l>>>10|0)].a[31&(l>>>5|0)].a[31&l]}if(t>=this.a1){var u=t-this.a1|0;return this.ah.a[u>>>15|0].a[31&(u>>>10|0)].a[31&(u>>>5|0)].a[31&u]}if(t>=this.a0){var d=t-this.a0|0;return this.ag.a[d>>>10|0].a[31&(d>>>5|0)].a[31&d]}if(t>=this.Z){var f=t-this.Z|0;return this.af.a[f>>>5|0].a[31&f]}return this.b.a[t]}throw this.at(t)}),R.bS=(function(e){return this.bT(e)}),new V().i(Tx,`scala.collection.immutable.Vector6`,{fw:1,aa:1,ab:1,a4:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,A:1,x:1,k:1,q:1,y:1,a:1,T:1});function Ex(e,t){return e.aJ=t,e}function Dx(e){return Ex(e,Up(new Gp)),e}function Ox(){this.aJ=null}R=Ox.prototype=new rb,R.constructor=Ox,R.aR=(function(e){return Nd(this,e)}),R.aT=(function(e){}),R.i=(function(){return g_(new v_,new Wy(this))}),R.bj=(function(e){var t=this.aJ.k();return t===e?0:t<e?-1:1}),R.b8=(function(){return`IndexedSeq`}),R.k=(function(){return this.aJ.k()}),R.r=(function(){return this.aJ.k()}),R.lk=(function(e){var t=this.aJ,n=``+oa(e);return t.l+=n,this}),R.y=(function(){return this.aJ.l}),R.jU=(function(e){if(e instanceof rx)this.aJ.jT(e.bp);else if(e instanceof Ox){var t=this.aJ,n=e.aJ;t.l=``+t.l+n}else{var r=e.r();if(r!==0){var i=this.aJ;r>0&&i.k();for(var a=e.i();a.j();){var o=``+oa(ya(a.h()));i.l+=o}}}return this}),R.d=(function(){return this.aJ.k()===0}),R.p=(function(e){return ga(this.aJ.jZ(e))}),R.f=(function(e){var t=e|0;return ga(this.aJ.jZ(t))}),R.eV=(function(e){return Dx(new Ox).jU(e)}),R.eU=(function(e){return Dx(new Ox).jU(e)}),R.aK=(function(e){return this.lk(ya(e))}),R.aS=(function(){return this.aJ.l}),R.b6=(function(){return jg()}),new V().i(Ox,`scala.collection.mutable.StringBuilder`,{bQ:1,J:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,G:1,z:1,E:1,M:1,L:1,D:1,F:1,K:1,a5:1,p:1,o:1,R:1,Q:1,av:1,a:1});function kx(e){var t=new jx().fM(e);e.bA=t.bA,e.cp=t.cp,e.fp=!1}function Ax(e){e.fq=1+e.fq|0,e.fp&&kx(e)}function jx(){this.fq=0,this.bA=null,this.cp=null,this.fp=!1,this.bB=0,this.fq=0,this.bA=$(),this.cp=null,this.fp=!1,this.bB=0}R=jx.prototype=new Cb,R.constructor=jx,R.c4=(function(e){return C_(this,e)}),R.aT=(function(e){}),R.i=(function(){return new Fg(this.bA.i(),new mp((()=>this.fq)))}),R.dg=(function(){return Pg()}),R.p=(function(e){return hh(this.bA,e)}),R.k=(function(){return this.bB}),R.r=(function(){return this.bB}),R.d=(function(){return this.bB===0}),R.kJ=(function(){return this.fp=!this.d(),this.bA}),R.ls=(function(e){Ax(this);var t=new hx(e,$());if(this.bB===0)this.bA=t;else{var n=this.cp;n===null&&ru().bU(),n.aj=t}return this.cp=t,this.bB=1+this.bB|0,this}),R.fM=(function(e){var t=e.i();if(t.j()){var n=1,r=new hx(t.h(),$());for(this.bA=r;t.j();){var i=new hx(t.h(),$());r.aj=i,r=i,n=1+n|0}this.bB=n,this.cp=r}return this}),R.lj=(function(e){var t=e.i();if(t.j()){var n=new jx().fM(t);if(Ax(this),this.bB===0)this.bA=n.bA;else{var r=this.cp;r===null&&ru().bU(),r.aj=n.bA}this.cp=n.cp,this.bB=this.bB+n.bB|0}return this}),R.b8=(function(){return`ListBuffer`}),R.b6=(function(){return Pg()}),R.f=(function(e){var t=e|0;return hh(this.bA,t)}),R.aS=(function(){return this.kJ()}),R.aK=(function(e){return this.ls(e)}),R.aR=(function(e){return this.lj(e)}),new V().i(jx,`scala.collection.mutable.ListBuffer`,{bP:1,aG:1,J:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,G:1,z:1,E:1,M:1,L:1,D:1,F:1,aq:1,aH:1,k:1,q:1,K:1,a5:1,a:1,T:1});function Mx(e,t,n){return e.e8=0,e.cl=t,e.aQ=n,e}function Nx(e){return Mx(e,new B(16),0),e}function Px(){this.e8=0,this.cl=null,this.aQ=0}R=Px.prototype=new Cb,R.constructor=Px,R.i=(function(){return this.nS().i()}),R.bj=(function(e){var t=this.aQ;return t===e?0:t<e?-1:1}),R.c4=(function(e){return C_(this,e)}),R.r=(function(){return this.aQ}),R.gI=(function(e){this.cl=_g().kD(this.cl,this.aQ,e)}),R.aT=(function(e){e>this.aQ&&e>=1&&this.gI(e)}),R.p=(function(e){var t=1+e|0;if(e<0)throw bl().gY(e,this.aQ-1|0);if(t>this.aQ)throw bl().gY(t-1|0,this.aQ-1|0);return this.cl.a[e]}),R.k=(function(){return this.aQ}),R.nS=(function(){return new qy(this,new mp((()=>this.e8)))}),R.dg=(function(){return _g()}),R.lp=(function(e){this.e8=1+this.e8|0;var t=1+this.aQ|0;return this.cl.a.length<=(t-1|0)&&this.gI(t),this.aQ=t,this.cl.a[t-1|0]=e,this}),R.jP=(function(e){if(e instanceof Px){var t=e.aQ;t>0&&(this.e8=1+this.e8|0,this.gI(this.aQ+t|0),Vc().eS(e.cl,0,this.cl,this.aQ,t),this.aQ=this.aQ+t|0)}else Nd(this,e);return this}),R.b8=(function(){return`ArrayBuffer`}),R.bq=(function(e,t,n){var r=this.aQ,i=Oc().br(e),a=n<r?n:r,o=t<0?i:i-t|0,s=o<a?o:a,c=s<0?0:s;return c>0&&Vc().eS(this.cl,0,e,t,c),c}),R.f=(function(e){return this.p(e|0)}),R.b6=(function(){return _g()}),R.aK=(function(e){return this.lp(e)}),R.aR=(function(e){return this.jP(e)}),new V().i(Px,`scala.collection.mutable.ArrayBuffer`,{bC:1,aG:1,J:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,G:1,z:1,E:1,M:1,L:1,D:1,F:1,aq:1,aH:1,p:1,o:1,R:1,Q:1,bO:1,k:1,q:1,a:1,T:1});function Fx(e,t){return e.d5=t,e}function Ix(e){return Fx(e,[]),e}function Lx(){this.d5=null}R=Lx.prototype=new Cb,R.constructor=Lx,R.aT=(function(e){}),R.b8=(function(){return`IndexedSeq`}),R.i=(function(){return g_(new v_,new Wy(this))}),R.bj=(function(e){var t=this.d5.length|0;return t===e?0:t<e?-1:1}),R.c4=(function(e){return C_(this,e)}),R.dg=(function(){return Hg()}),R.p=(function(e){return this.d5[e]}),R.k=(function(){return this.d5.length|0}),R.r=(function(){return this.d5.length|0}),R.bE=(function(){return`WrappedArray`}),R.aS=(function(){return this}),R.aK=(function(e){return this.d5.push(e),this}),R.f=(function(e){var t=e|0;return this.d5[t]}),R.b6=(function(){return Hg()}),new V().i(Lx,`scala.scalajs.js.WrappedArray`,{gL:1,aG:1,J:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,G:1,z:1,E:1,M:1,L:1,D:1,F:1,aq:1,aH:1,q:1,k:1,Q:1,p:1,o:1,R:1,bO:1,K:1,a:1}),Os(new(c_.r()).C([]));