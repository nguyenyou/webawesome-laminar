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
const f=globalThis,p=f.ShadowRoot&&(f.ShadyCSS===void 0||f.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,ee=Symbol(),te=/* @__PURE__ */ new WeakMap;var ne=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==ee)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(p&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=te.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&te.set(t,e))}return e}toString(){return this.cssText}};const re=e=>new ne(typeof e==`string`?e:e+``,void 0,ee),m=(e,...t)=>new ne(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,ee),ie=(e,t)=>{if(p)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=f.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},ae=p?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return re(t)})(e):e,{is:oe,defineProperty:se,getOwnPropertyDescriptor:ce,getOwnPropertyNames:le,getOwnPropertySymbols:ue,getPrototypeOf:de}=Object,fe=globalThis,pe=fe.trustedTypes,me=pe?pe.emptyScript:``,he=fe.reactiveElementPolyfillSupport,ge=(e,t)=>e,_e={toAttribute(e,t){
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
switch(t){case Boolean:e=e?me:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},ve=(e,t)=>!oe(e,t),ye={attribute:!0,type:String,converter:_e,reflect:!1,useDefault:!1,hasChanged:ve};Symbol.metadata??=Symbol(`metadata`),fe.litPropertyMetadata??=/* @__PURE__ */ new WeakMap;var be=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ye){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&se(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=ce(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ye}static _$Ei(){if(this.hasOwnProperty(ge(`elementProperties`)))return;let e=de(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ge(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ge(`properties`))){let e=this.properties,t=[...le(e),...ue(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=/* @__PURE__ */ new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(ae(e))}else e!==void 0&&t.push(ae(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=/* @__PURE__ */ new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=/* @__PURE__ */ new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=/* @__PURE__ */ new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ie(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?_e:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?_e:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??ve)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=/* @__PURE__ */ new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=/* @__PURE__ */ new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=/* @__PURE__ */ new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};be.elementStyles=[],be.shadowRootOptions={mode:`open`},be[ge(`elementProperties`)]=/* @__PURE__ */ new Map,be[ge(`finalized`)]=/* @__PURE__ */ new Map,he?.({ReactiveElement:be}),(fe.reactiveElementVersions??=[]).push(`2.1.2`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const xe=globalThis,Se=e=>e,Ce=xe.trustedTypes,we=Ce?Ce.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,Te=`$lit$`,Ee=`lit$${Math.random().toFixed(9).slice(2)}$`,De=`?`+Ee,Oe=`<${De}>`,ke=document,Ae=()=>ke.createComment(``),je=e=>e===null||typeof e!=`object`&&typeof e!=`function`,Me=Array.isArray,Ne=e=>Me(e)||typeof e?.[Symbol.iterator]==`function`,Pe=`[ 	
\f\r]`,Fe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ie=/-->/g,Le=/>/g,Re=RegExp(`>|${Pe}(?:([^\\s"'>=/]+)(${Pe}*=${Pe}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),ze=/'/g,Be=/"/g,Ve=/^(?:script|style|textarea|title)$/i,h=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),He=Symbol.for(`lit-noChange`),g=Symbol.for(`lit-nothing`),Ue=/* @__PURE__ */ new WeakMap,We=ke.createTreeWalker(ke,129);function Ge(e,t){if(!Me(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return we===void 0?t:we.createHTML(t)}const Ke=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=Fe;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===Fe?c[1]===`!--`?o=Ie:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=Re):(Ve.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=Re):o=Le:o===Re?c[0]===`>`?(o=i??Fe,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?Re:c[3]===`"`?Be:ze):o===Be||o===ze?o=Re:o===Ie||o===Le?o=Fe:(o=Re,i=void 0);let d=o===Re&&e[t+1].startsWith(`/>`)?` `:``;a+=o===Fe?n+Oe:l>=0?(r.push(s),n.slice(0,l)+Te+n.slice(l)+Ee+d):n+Ee+(l===-2?t:d)}return[Ge(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]};var qe=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Ke(t,n);if(this.el=e.createElement(l,r),We.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=We.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(Te)){let t=u[o++],n=i.getAttribute(e).split(Ee),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Qe:r[1]===`?`?$e:r[1]===`@`?et:Ze}),i.removeAttribute(e)}else e.startsWith(Ee)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Ve.test(i.tagName)){let e=i.textContent.split(Ee),t=e.length-1;if(t>0){i.textContent=Ce?Ce.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],Ae()),We.nextNode(),c.push({type:2,index:++a});i.append(e[t],Ae())}}}else if(i.nodeType===8){if(i.data===De)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(Ee,e+1))!==-1;)c.push({type:7,index:a}),e+=Ee.length-1}}a++}}static createElement(e,t){let n=ke.createElement(`template`);return n.innerHTML=e,n}};function Je(e,t,n=e,r){if(t===He)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=je(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=Je(e,i._$AS(e,t.values),i,r)),t}var Ye=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??ke).importNode(t,!0);We.currentNode=r;let i=We.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Xe(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new tt(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=We.nextNode(),a++)}return We.currentNode=ke,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Xe=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Je(this,e,t),je(e)?e===g||e==null||e===``?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==He&&this._(e):e._$litType$===void 0?e.nodeType===void 0?Ne(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==g&&je(this._$AH)?this._$AA.nextSibling.data=e:this.T(ke.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=qe.createElement(Ge(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Ye(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Ue.get(e.strings);return t===void 0&&Ue.set(e.strings,t=new qe(e)),t}k(t){Me(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(Ae()),this.O(Ae()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=Se(e).nextSibling;Se(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Ze=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(/* @__PURE__ */ new String),this.strings=n):this._$AH=g}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=Je(this,e,t,0),a=!je(e)||e!==this._$AH&&e!==He,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=Je(this,r[n+o],t,o),s===He&&(s=this._$AH[o]),a||=!je(s)||s!==this._$AH[o],s===g?e=g:e!==g&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Qe=class extends Ze{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}},$e=class extends Ze{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==g)}},et=class extends Ze{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=Je(this,e,t,0)??g)===He)return;let n=this._$AH,r=e===g&&n!==g||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==g&&(n===g||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},tt=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Je(this,e)}};const nt={M:Te,P:Ee,A:De,C:1,L:Ke,R:Ye,D:Ne,V:Je,I:Xe,H:Ze,N:$e,U:et,B:Qe,F:tt},rt=xe.litHtmlPolyfillSupport;rt?.(qe,Xe),(xe.litHtmlVersions??=[]).push(`3.3.3`);const it=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Xe(t.insertBefore(Ae(),e),e,void 0,n??{})}return i._$AI(e),i},at=globalThis
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
;var ot=class extends be{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=it(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return He}};ot._$litElement$=!0,ot.finalized=!0,at.litElementHydrateSupport?.({LitElement:ot});const st=at.litElementPolyfillSupport;st?.({LitElement:ot}),(at.litElementVersions??=[]).push(`4.2.2`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const ct=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},lt={attribute:!0,type:String,converter:_e,reflect:!1,hasChanged:ve},ut=(e=lt,t,n)=>{
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=/* @__PURE__ */ new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function _(e){return(t,n)=>typeof n==`object`?ut(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function dt(e){return _({...e,state:!0,attribute:!1})}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const ft=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function pt(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return ft(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return ft(n,r,{get(){return a(this)}})}}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var mt=m`
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
`,ht=/;\s+$/;function gt(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function _t(e){let{property:t,value:n,element:r}=e;if(n){let e=r.getAttribute(`style`)||``;e&&(e.match(ht)||(e+=`;`),e+=` `);let i=`${t}: ${n}`;return e.includes(i)?void 0:`${e}${i};`}return null}var vt,yt=class extends ot{constructor(){super(),u(this,vt,!1),this.initialReflectedProperties=/* @__PURE__ */ new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,t)=>{if(this.internals?.states)try{t?this.internals.states.add(e):this.internals.states.delete(e)}catch(e){if(String(e).includes(`must start with '--'`))console.error(`Your browser implements an outdated version of CustomStateSet. Consider using a polyfill`);else throw e}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error(`Element internals are not supported in your browser. Consider using a polyfill`)}this.customStates.set(`wa-defined`,!0);let e=this.constructor;for(let[t,n]of e.elementProperties)n.default===`inherit`&&n.initial!==void 0&&typeof t==`string`&&this.customStates.set(`initial-${t}-${n.initial}`,!0)}static get styles(){return[mt,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `)),this.didSSR&&this.updateComplete.then(()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `))})}attributeChangedCallback(e,t,n){l(this,vt)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),d(this,vt,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll(`slot`).forEach(e=>{e.dispatchEvent(new Event(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(e){if(this.didSSR&&!this.hasUpdated){let t=new Event(`lit-hydration-error`,{bubbles:!0,composed:!0,cancelable:!1});t.error=e,this.dispatchEvent(t)}throw e}}setStyle(e,t){if(this.style)this.style[e]=t;else{let n=_t({property:gt(e),value:t,element:this});n&&this.setAttribute(`style`,n)}}setStyleProperty(e,t){if(this.style)this.style.setProperty(e,t);else{let n=_t({property:e,value:t,element:this});n&&this.setAttribute(`style`,n)}}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};vt=/* @__PURE__ */ new WeakMap,s([_()],yt.prototype,`dir`,2),s([_()],yt.prototype,`lang`,2),s([_({type:Boolean,reflect:!0,attribute:`did-ssr`})],yt.prototype,`didSSR`,2);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var bt=()=>({observedAttributes:[`custom-error`],checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=[`customError`]),t}}),xt=class extends yt{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=[`input`],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new r))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},`addEventListener`in this&&this.addEventListener(`invalid`,this.emitInvalid)}static get validators(){return[bt()]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let n of t.observedAttributes)e.add(n);return[...e]}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.updateValidity()}):this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener?.(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has(`customError`)&&(this.customError||=null,this.setCustomValidity(this.customError||``)),e.has(`value`)||e.has(`disabled`)||e.has(`defaultValue`)){let e=this.value;this.updateFormValue(e)}e.has(`disabled`)&&(this.customStates.set(`disabled`,this.disabled),(this.hasAttribute(`disabled`)||!this.matches(`:disabled`))&&this.toggleAttribute(`disabled`,this.disabled)),super.willUpdate(e),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>this.updateValidity()):this.updateValidity()}updateFormValue(e){if(Array.isArray(e)){if(this.name){let t=new FormData;for(let n of e)t.append(this.name,n);this.setValue(t,t)}}else this.setValue(e,e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(e){e?this.setAttribute(`form`,e):this.removeAttribute(`form`)}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],n=e[1],r=e[2];r||=this.validationTarget,this.internals.setValidity(t,n,r||void 0),this.requestUpdate(`validity`),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set(`required`,e),this.customStates.set(`optional`,!e),this.customStates.set(`invalid`,!t),this.customStates.set(`valid`,t),this.customStates.set(`user-invalid`,!t&&n),this.customStates.set(`user-valid`,t&&n)}setCustomValidity(e){e?(this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)):(this.customError=null,this.setValidity({}))}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity()}):(this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity())}setValue(...e){let[t,n]=e;this.internals.setFormValue(t,n)}get allValidators(){let e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(``),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute(`disabled`)||!this.willValidate){this.resetValidity();return}let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},n=this.validationTarget||this.input||void 0,r=``;for(let n of e){let{isValid:e,message:i,invalidKeys:a}=n.checkValidity(this);e||(r||=i,a?.length>=0&&a.forEach(e=>t[e]=!0))}r||=this.validationMessage,this.setValidity(t,r,n)}};xt.formAssociated=!0,s([_({reflect:!0})],xt.prototype,`name`,2),s([_({type:Boolean})],xt.prototype,`disabled`,2),s([_({state:!0,attribute:!1})],xt.prototype,`valueHasChanged`,2),s([_({state:!0,attribute:!1})],xt.prototype,`hasInteracted`,2),s([_({attribute:`custom-error`,reflect:!0})],xt.prototype,`customError`,2),s([_({attribute:!1,state:!0,type:Object})],xt.prototype,`validity`,1);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var St={small:`s`,medium:`m`,large:`l`},Ct=/* @__PURE__ */ new Set;function wt(e,t){t in St&&!Ct.has(`${e}:${t}`)&&(Ct.add(`${e}:${t}`),console.warn(`[${e}] size="${t}" is deprecated. Use size="${St[t]}" instead. The long-form value will be removed in the next major version.`))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Tt=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return this.host.childNodes?[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===Node.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`wa-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1}):!1}hasNamedSlot(e){return this.host.querySelector?.(`:scope > [slot="${e}"]`)!==null}test(e,t){return t&&this.host.didSSR&&!this.host.hasUpdated?!!this.host[t]:e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){let e=this.host.shadowRoot;e&&`addEventListener`in e&&e.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){let e=this.host.shadowRoot;e&&`removeEventListener`in e&&e.removeEventListener(`slotchange`,this.handleSlotChange)}},Et=m`
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
`,Dt=m`
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
`,Ot=m`
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
function kt(e,t){let n={waitUntilFirstUpdate:!1,...t};return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}const At=/* @__PURE__ */ new Set,jt=/* @__PURE__ */ new Map;let Mt,Nt=`ltr`,Pt=`en`;const Ft=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(Ft){let e=new MutationObserver(Lt);Nt=document.documentElement.dir||`ltr`,Pt=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function It(...e){e.map(e=>{let t=e.$code.toLowerCase();jt.has(t)?jt.set(t,Object.assign(Object.assign({},jt.get(t)),e)):jt.set(t,e),Mt||=e}),Lt()}function Lt(){Ft&&(Nt=document.documentElement.dir||`ltr`,Pt=document.documentElement.lang||navigator.language),[...At.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var Rt=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){At.add(this.host)}hostDisconnected(){At.delete(this.host)}dir(){return`${this.host.dir||Nt}`.toLowerCase()}lang(){let e=`${this.host.lang||Pt}`.toLowerCase().replace(/_/g,`-`);try{return new Intl.Locale(e),e}catch{return Mt?Mt.$code.toLowerCase():`en`}}getTranslationData(e){let t;try{t=new Intl.Locale(e.replace(/_/g,`-`))}catch{return{locale:void 0,language:``,region:``,primary:void 0,secondary:void 0}}let n=t.language.toLowerCase(),r=t.region?.toLowerCase()??``,i=jt.get(`${n}-${r}`),a=jt.get(n);return{locale:t,language:n,region:r,primary:i,secondary:a}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&Mt&&Mt[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(Mt&&Mt[e])i=Mt[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},zt={$code:`en`,$name:`English`,$dir:`ltr`,allTagsRemoved:`All tags removed`,am:`AM`,autosizeColumn:`Autosize column`,captions:`Captions`,carousel:`Carousel`,chooseDate:`Choose date`,chooseDecade:`Choose decade`,chooseMonth:`Choose month`,chooseTime:`Choose time`,chooseYear:`Choose year`,clearEntry:`Clear entry`,clearFilter:`Clear filter`,clearSort:`Clear sort`,close:`Close`,closeCalendar:`Close calendar`,closeTimeInput:`Close time picker`,collapseRow:`Collapse row`,columnMenu:`Column options`,columnMovedToPosition:(e,t,n)=>`${e} moved to position ${t} of ${n}`,columns:`Columns`,compactPageXOfY:(e,t)=>`${e} of ${t}`,completed:`Completed`,copied:`Copied`,copy:`Copy`,createOption:e=>`Create "${e}"`,currentlyPlaying:`currently playing`,currentValue:`Current value`,date:`Date`,datePickerKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the calendar.`,day:`Day`,dayPeriod:`AM/PM`,decrement:`Decrement`,deselectAllRows:`Deselect all rows`,disabled:`Disabled`,dropFileHere:`Drop file here or click to browse`,dropFilesHere:`Drop files here or click to browse`,empty:`Empty`,endDate:`End date`,enterFullscreen:`Enter fullscreen`,error:`Error`,exitFullscreen:`Exit fullscreen`,expandRow:`Expand row`,filterByColumn:e=>`Filter by ${e}`,filterFrom:`From`,filterMax:`Max`,filterMin:`Min`,filterTo:`To`,firstPage:`First page`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hideColumn:`Hide column`,hidePassword:`Hide password`,hour:`Hour`,incompleteDate:`Enter a valid date.`,increment:`Increment`,jumpBackwardX:e=>`Jump back ${e} pages`,jumpForwardX:e=>`Jump forward ${e} pages`,lastPage:`Last page`,loading:`Loading`,locked:`Locked`,minute:`Minute`,month:`Month`,moreOptions:`More Options`,mute:`Mute`,nextDecade:`Next decade`,nextMonth:`Next month`,nextPage:`Next page`,nextSlide:`Next slide`,nextVideo:`Next Video`,nextYear:`Next year`,noData:`No data`,noOptions:`No options`,noResults:`No matching results`,notCompleted:`Not completed`,now:`Now`,numCharacters:e=>e===1?`1 character`:`${e} characters`,numCharactersRemaining:e=>e===1?`1 character remaining`:`${e} characters remaining`,numOptionsAvailable:e=>e===0?`No options available`:e===1?`1 option available`:`${e} options available`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,numRowsCopied:e=>e===1?`1 row copied`:`${e} rows copied`,numRowsSelected:e=>e===1?`1 row selected`:`${e} rows selected`,optionPosition:(e,t,n)=>`${e}, ${t} of ${n}`,optionsLoadError:`Options could not be loaded`,pageXOfY:(e,t)=>`Page ${e} of ${t}`,pagination:`Pagination`,pause:`Pause`,pauseAnimation:`Pause animation`,pictureInPicture:`Picture in picture`,pinLeft:`Pin left`,pinRight:`Pin right`,play:`Play`,playAnimation:`Play animation`,playbackSpeed:`Playback speed`,playlist:`Playlist`,pm:`PM`,previousDecade:`Previous decade`,previousMonth:`Previous month`,previousPage:`Previous page`,previousSlide:`Previous slide`,previousVideo:`Previous video`,previousYear:`Previous year`,progress:`Progress`,rangeTooLong:e=>e===1?`Select a range no longer than 1 day`:`Select a range no longer than ${e} days`,rangeTooShort:e=>e===1?`Select a range at least 1 day long`:`Select a range at least ${e} days long`,readonly:`Read-only`,remove:`Remove`,resetColumns:`Reset columns`,resize:`Resize`,resizeColumn:`Resize column`,rowsPerPage:`Rows per page`,scrollableRegion:`Scrollable region`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,search:`Search`,second:`Second`,seek:`Seek`,seekProgress:(e,t)=>`${e} of ${t}`,selectAColorFromTheScreen:`Select a color from the screen`,selectAllRows:`Select all rows`,selected:`Selected`,selectedDateLabel:e=>`Selected: ${e}`,selectedRangeLabel:e=>`Selected range: ${e}`,selectGroup:`Select group`,selectionCleared:`Selection cleared`,selectRow:`Select row`,showingNofMRows:(e,t)=>`Showing ${e} of ${t} rows`,showingXtoYofZ:(e,t,n)=>`${e}\u2013${t} of ${n}`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,sortAscending:`Sort ascending`,sortColumn:`Sort column`,sortDescending:`Sort descending`,startDate:`Start date`,steps:`Steps`,stepXOfY:(e,t)=>`Step ${e} of ${t}`,tagAdded:e=>`${e} added`,tagAlreadyAdded:e=>`${e} is already added`,tagInputKeyboardHelp:`Press Backspace or Delete to remove this tag.`,tagRemoved:e=>`${e} removed`,time:`Time`,timeInputKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the time picker.`,today:`Today`,toggleColorFormat:`Toggle color format`,tooFewTags:e=>e===1?`Add at least 1 tag`:`Add at least ${e} tags`,tooManyTags:e=>e===1?`Add no more than 1 tag`:`Add no more than ${e} tags`,unmute:`Unmute`,unpin:`Unpin`,unpinColumn:`Unpin column`,videoPlayer:`Video player`,volume:`Volume`,year:`Year`,zoomIn:`Zoom in`,zoomOut:`Zoom out`}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;It(zt);var Bt=zt,Vt=class extends Rt{lang(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||`en`:super.lang()}};It(Bt);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const Ht={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ut=e=>(...t)=>({_$litDirective$:e,values:t});var Wt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Gt=Ut(class extends Wt{constructor(e){if(super(e),e.type!==Ht.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=/* @__PURE__ */ new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return He}}),Kt=e=>e??g,qt=Symbol.for(``),Jt=e=>{
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
if(e?.r===qt)return e?._$litStatic$},Yt=(e,...t)=>({_$litStatic$:t.reduce((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1],e[0]),r:qt}),Xt=/* @__PURE__ */ new Map,Zt=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],(i=Jt(a))!==void 0);)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=Xt.get(e))===void 0&&(o.raw=o,Xt.set(e,t=o)),n=s}return e(t,...n)})(h);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var v=class extends xt{constructor(){super(...arguments),this.assumeInteractionOn=[`click`],this.hasSlotController=new Tt(this,`[default]`,`start`,`end`),this.localize=new Vt(this),this.invalid=!1,this.isIconButton=!1,this.title=``,this.variant=`neutral`,this.appearance=`accent`,this.size=`m`,this.withCaret=!1,this.withStart=!1,this.withEnd=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type=`button`}static get validators(){return[...super.validators,n()]}handleSizeChange(){wt(this.localName,this.size)}constructLightDOMButton(){let e=document.createElement(`button`);for(let t of this.attributes)t.name!==`style`&&e.setAttribute(t.name,t.value);return e.type=this.type,e.style.position=`absolute !important`,e.style.width=`0 !important`,e.style.height=`0 !important`,e.style.clipPath=`inset(50%) !important`,e.style.overflow=`hidden !important`,e.style.whiteSpace=`nowrap !important`,this.name&&(e.name=this.name),e.value=this.value||``,e}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopImmediatePropagation();return}if(this.type!==`submit`&&this.type!==`reset`||!this.getForm())return;let t=this.constructLightDOMButton();this.parentElement?.append(t),t.click(),t.remove()}handleInvalid(){this.dispatchEvent(new r)}handleLabelSlotChange(){let e=this.labelSlot.assignedNodes({flatten:!0}),t=!1,n=!1,r=!1,i=!1;[...e].forEach(e=>{if(e.nodeType===Node.ELEMENT_NODE){let r=e;r.localName===`wa-icon`?(n=!0,t||=r.label!==void 0):i=!0}else e.nodeType===Node.TEXT_NODE&&(e.textContent?.trim()||``).length>0&&(r=!0)}),this.isIconButton=n&&!r&&!i,this.customStates.set(`icon-button`,this.isIconButton),this.isIconButton&&!t&&console.warn(`Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.`,this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.customStates.set(`disabled`,this.disabled),this.updateValidity()}handleHrefChange(){this.customStates.set(`link`,this.isLink())}handleLoadingChange(){this.customStates.set(`loading`,this.loading)}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=this.isLink(),t=e?Yt`a`:Yt`button`;return Zt`
      <${t}
        part="base button"
        class=${Gt({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()===`rtl`,"has-label":this.hasSlotController.test(`[default]`),"has-start":this.hasSlotController.test(`start`,`withStart`),"has-end":this.hasSlotController.test(`end`,`withEnd`),"is-icon-button":this.isIconButton})}
        ?disabled=${Kt(e?void 0:this.disabled)}
        type=${Kt(e?void 0:this.type)}
        title=${this.title}
        name=${Kt(e?void 0:this.name)}
        value=${Kt(e?void 0:this.value)}
        href=${Kt(e?this.href:void 0)}
        target=${Kt(e?this.target:void 0)}
        download=${Kt(e?this.download:void 0)}
        rel=${Kt(e&&this.rel?this.rel:void 0)}
        role=${Kt(e?void 0:`button`)}
        aria-disabled=${Kt(e&&this.disabled?`true`:void 0)}
        aria-busy=${this.loading?`true`:`false`}
        tabindex=${this.disabled?`-1`:`0`}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?Zt`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:``}
        ${this.loading?Zt`<wa-spinner part="spinner"></wa-spinner>`:``}
      </${t}>
    `}};v.shadowRootOptions={...xt.shadowRootOptions,delegatesFocus:!0},v.css=[Dt,Ot,Et],s([pt(`.button`)],v.prototype,`button`,2),s([pt(`slot:not([name])`)],v.prototype,`labelSlot`,2),s([dt()],v.prototype,`invalid`,2),s([dt()],v.prototype,`isIconButton`,2),s([_()],v.prototype,`title`,2),s([_({reflect:!0})],v.prototype,`variant`,2),s([_({reflect:!0})],v.prototype,`appearance`,2),s([_({reflect:!0})],v.prototype,`size`,2),s([kt(`size`)],v.prototype,`handleSizeChange`,1),s([_({attribute:`with-caret`,type:Boolean,reflect:!0})],v.prototype,`withCaret`,2),s([_({attribute:`with-start`,type:Boolean})],v.prototype,`withStart`,2),s([_({attribute:`with-end`,type:Boolean})],v.prototype,`withEnd`,2),s([_({type:Boolean})],v.prototype,`disabled`,2),s([_({type:Boolean,reflect:!0})],v.prototype,`loading`,2),s([_({type:Boolean,reflect:!0})],v.prototype,`pill`,2),s([_()],v.prototype,`type`,2),s([_({reflect:!0})],v.prototype,`name`,2),s([_({reflect:!0})],v.prototype,`value`,2),s([_({reflect:!0})],v.prototype,`href`,2),s([_()],v.prototype,`target`,2),s([_()],v.prototype,`rel`,2),s([_()],v.prototype,`download`,2),s([_({attribute:`formaction`})],v.prototype,`formAction`,2),s([_({attribute:`formenctype`})],v.prototype,`formEnctype`,2),s([_({attribute:`formmethod`})],v.prototype,`formMethod`,2),s([_({attribute:`formnovalidate`,type:Boolean})],v.prototype,`formNoValidate`,2),s([_({attribute:`formtarget`})],v.prototype,`formTarget`,2),s([kt(`disabled`,{waitUntilFirstUpdate:!0})],v.prototype,`handleDisabledChange`,1),s([kt(`href`)],v.prototype,`handleHrefChange`,1),s([kt(`loading`,{waitUntilFirstUpdate:!0})],v.prototype,`handleLoadingChange`,1),v=s([ct(`wa-button`)],v),v.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Qt=m`
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
`,$t=class extends yt{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(...arguments),this.localize=new Vt(this)}render(){return h`
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
    `}};$t.css=Qt,$t=s([ct(`wa-spinner`)],$t);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var en=class extends Event{constructor(){super(`wa-error`,{bubbles:!0,cancelable:!1,composed:!0})}},tn=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-load`,{bubbles:!0,cancelable:!1,composed:!0})}},nn=m`
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
`,rn=``,an=``
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;function on(){return rn.replace(/\/$/,``)}function sn(e){an=e}function cn(){if(!an){let e=document.querySelector(`[data-fa-kit-code]`);e&&sn(e.getAttribute(`data-fa-kit-code`)||``)}return an}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var ln=`7.3.0`;function un(e,t,n){let r=`solid`;return t===`chisel`&&(r=`chisel-regular`),t===`etch`&&(r=`etch-solid`),t===`graphite`&&(r=`graphite-thin`),t===`jelly`&&(r=`jelly-regular`,n===`duo-regular`&&(r=`jelly-duo-regular`),n===`fill-regular`&&(r=`jelly-fill-regular`)),t===`jelly-duo`&&(r=`jelly-duo-regular`),t===`jelly-fill`&&(r=`jelly-fill-regular`),t===`notdog`&&(n===`solid`&&(r=`notdog-solid`),n===`duo-solid`&&(r=`notdog-duo-solid`)),t===`notdog-duo`&&(r=`notdog-duo-solid`),t===`slab`&&((n===`solid`||n===`regular`)&&(r=`slab-regular`),n===`press-regular`&&(r=`slab-press-regular`)),t===`slab-press`&&(r=`slab-press-regular`),t===`slab-duo`&&(r=`slab-duo-regular`),t===`slab-press-duo`&&(r=`slab-press-duo-regular`),t===`thumbprint`&&(r=`thumbprint-light`),t===`utility`&&(r=`utility-semibold`),t===`utility-duo`&&(r=`utility-duo-semibold`),t===`utility-fill`&&(r=`utility-fill-semibold`),t===`whiteboard`&&(r=`whiteboard-semibold`),t===`mosaic`&&(r=`mosaic-solid`),t===`pixel`&&(r=`pixel-regular`),t===`vellum`&&(r=`vellum-solid`),t===`classic`&&(n===`thin`&&(r=`thin`),n===`light`&&(r=`light`),n===`regular`&&(r=`regular`),n===`solid`&&(r=`solid`)),t===`duotone`&&(n===`thin`&&(r=`duotone-thin`),n===`light`&&(r=`duotone-light`),n===`regular`&&(r=`duotone-regular`),n===`solid`&&(r=`duotone`)),t===`sharp`&&(n===`thin`&&(r=`sharp-thin`),n===`light`&&(r=`sharp-light`),n===`regular`&&(r=`sharp-regular`),n===`solid`&&(r=`sharp-solid`)),t===`sharp-duotone`&&(n===`thin`&&(r=`sharp-duotone-thin`),n===`light`&&(r=`sharp-duotone-light`),n===`regular`&&(r=`sharp-duotone-regular`),n===`solid`&&(r=`sharp-duotone-solid`)),t===`brands`&&(r=`brands`),r}function dn(e,t,n){let r=un(e,t,n),i=on();if(i)return`${i}/${r}/${e}.svg`;let a=cn();return a.length>0?`https://ka-p.fontawesome.com/releases/v${ln}/svgs/${r}/${e}.svg?token=${encodeURIComponent(a)}`:`https://ka-f.fontawesome.com/releases/v${ln}/svgs/${r}/${e}.svg`}var fn={name:`default`,resolver:(e,t=`classic`,n=`solid`)=>dn(e,t,n),mutator:(e,t)=>{if(e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`),t?.family&&!e.hasAttribute(`data-duotone-initialized`)){let{family:n,variant:r}=t;if(n===`duotone`||n===`sharp-duotone`||n===`notdog-duo`||n===`notdog`&&r===`duo-solid`||n===`jelly-duo`||n===`jelly`&&r===`duo-regular`||n===`utility-duo`||n===`slab-duo`||n===`slab-press-duo`||n===`thumbprint`){let n=[...e.querySelectorAll(`path`)],r=n.find(e=>!e.hasAttribute(`opacity`)),i=n.find(e=>e.hasAttribute(`opacity`));if(!r||!i)return;if(r.setAttribute(`data-duotone-primary`,``),i.setAttribute(`data-duotone-secondary`,``),t.swapOpacity&&r&&i){let e=i.getAttribute(`opacity`)||`0.4`;r.style.setProperty(`--path-opacity`,e),i.style.setProperty(`--path-opacity`,`1`)}e.setAttribute(`data-duotone-initialized`,``)}}}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function pn(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var mn={solid:{"arrow-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`,"arrow-up":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>`,backward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M236.3 107.1C247.9 96 265 92.9 279.7 99.2C294.4 105.5 304 120 304 136L304 272.3L476.3 107.2C487.9 96 505 92.9 519.7 99.2C534.4 105.5 544 120 544 136L544 504C544 520 534.4 534.5 519.7 540.8C505 547.1 487.9 544 476.3 532.9L304 367.7L304 504C304 520 294.4 534.5 279.7 540.8C265 547.1 247.9 544 236.3 532.9L44.3 348.9C36.5 341.3 32 330.9 32 320C32 309.1 36.5 298.7 44.3 291.1L236.3 107.1z"/></svg>`,"backward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M491 100.8C478.1 93.8 462.3 94.5 450 102.6L192 272.1L192 128C192 110.3 177.7 96 160 96C142.3 96 128 110.3 128 128L128 512C128 529.7 142.3 544 160 544C177.7 544 192 529.7 192 512L192 367.9L450 537.5C462.3 545.6 478 546.3 491 539.3C504 532.3 512 518.8 512 504.1L512 136.1C512 121.4 503.9 107.9 491 100.9z"/></svg>`,bars:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>`,"angles-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M77.3 256 214.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256zm192 0L406.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L269.3 256z"/></svg>`,"angles-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.7 256 297.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 256zm-192 0L105.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256z"/></svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>`,"chevron-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`,"chevron-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>`,"chevron-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>`,circle:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>`,"closed-captioning":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M64 192C64 156.7 92.7 128 128 128L512 128C547.3 128 576 156.7 576 192L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 192zM216 272L248 272C252.4 272 256 275.6 256 280C256 293.3 266.7 304 280 304C293.3 304 304 293.3 304 280C304 249.1 278.9 224 248 224L216 224C185.1 224 160 249.1 160 280L160 360C160 390.9 185.1 416 216 416L248 416C278.9 416 304 390.9 304 360C304 346.7 293.3 336 280 336C266.7 336 256 346.7 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 280C208 275.6 211.6 272 216 272zM384 280C384 275.6 387.6 272 392 272L424 272C428.4 272 432 275.6 432 280C432 293.3 442.7 304 456 304C469.3 304 480 293.3 480 280C480 249.1 454.9 224 424 224L392 224C361.1 224 336 249.1 336 280L336 360C336 390.9 361.1 416 392 416L424 416C454.9 416 480 390.9 480 360C480 346.7 469.3 336 456 336C442.7 336 432 346.7 432 360C432 364.4 428.4 368 424 368L392 368C387.6 368 384 364.4 384 360L384 280z"/></svg>`,"closed-captioning-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M39 39.1C48.4 29.7 63.6 29.7 72.9 39.1L161.8 128L512 128C547.3 128 576 156.7 576 192L576 448C576 473.5 561.1 495.4 539.6 505.8L601 567.1C610.4 576.5 610.4 591.7 601 601C591.6 610.3 576.4 610.4 567.1 601L39 73.1C29.7 63.7 29.7 48.5 39 39.1zM384 350.1L384 279.9C384 275.5 387.6 271.9 392 271.9L424 271.9C428.4 271.9 432 275.5 432 279.9C432 293.2 442.7 303.9 456 303.9C469.3 303.9 480 293.2 480 279.9C480 249 454.9 223.9 424 223.9L392 223.9C361.1 223.9 336 249 336 279.9L336 302.1L384 350.1zM445.5 411.6C465.7 403.2 480 383.2 480 359.9C480 346.6 469.3 335.9 456 335.9C442.7 335.9 432 346.6 432 359.9C432 364.3 428.4 367.9 424 367.9L401.8 367.9L445.5 411.6zM162.3 264.1C160.8 269.1 160 274.5 160 280L160 360C160 390.9 185.1 416 216 416L248 416C266.1 416 282.1 407.5 292.4 394.2L410.2 512L128 512C92.7 512 64 483.3 64 448L64 192C64 184.2 65.4 176.7 68 169.8L162.3 264.1zM256.1 357.9C256 358.6 256 359.3 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 309.8L256.1 357.9z"/></svg>`,compress:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>`,ellipsis:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M96 320C96 289.1 121.1 264 152 264C182.9 264 208 289.1 208 320C208 350.9 182.9 376 152 376C121.1 376 96 350.9 96 320zM264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320zM488 264C518.9 264 544 289.1 544 320C544 350.9 518.9 376 488 376C457.1 376 432 350.9 432 320C432 289.1 457.1 264 488 264z"/></svg>`,"ellipsis-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/></svg>`,expand:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 96C110.3 96 96 110.3 96 128L96 224C96 241.7 110.3 256 128 256C145.7 256 160 241.7 160 224L160 160L224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L128 96zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 512C96 529.7 110.3 544 128 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480L160 416zM416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160L480 224C480 241.7 494.3 256 512 256C529.7 256 544 241.7 544 224L544 128C544 110.3 529.7 96 512 96L416 96zM544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L512 544C529.7 544 544 529.7 544 512L544 416z"/></svg>`,eyedropper:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>`,filter:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 64C19.1 64 7.4 71.8 2.4 83.8S.2 109.5 9.4 118.6L192 301.3 192 416c0 8.5 3.4 16.6 9.4 22.6l64 64c9.2 9.2 22.9 11.9 34.9 6.9S320 492.9 320 480l0-178.7 182.6-182.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 64 480 64L32 64z"/></svg>`,forward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M403.7 107.1C392.1 96 375 92.9 360.3 99.2C345.6 105.5 336 120 336 136L336 272.3L163.7 107.2C152.1 96 135 92.9 120.3 99.2C105.6 105.5 96 120 96 136L96 504C96 520 105.6 534.5 120.3 540.8C135 547.1 152.1 544 163.7 532.9L336 367.7L336 504C336 520 345.6 534.5 360.3 540.8C375 547.1 392.1 544 403.7 532.9L595.7 348.9C603.6 341.4 608 330.9 608 320C608 309.1 603.5 298.7 595.7 291.1L403.7 107.1z"/></svg>`,file:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>`,"file-audio":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>`,"file-code":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>`,"file-excel":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>`,"file-image":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>`,"file-pdf":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>`,"file-powerpoint":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>`,"file-video":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>`,"file-word":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>`,"file-zipper":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>`,"forward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M21 36.8c12.9-7 28.7-6.3 41 1.8L320 208.1 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-144.1-258 169.6c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440L0 72C0 57.3 8.1 43.8 21 36.8z"/></svg>`,gauge:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,gear:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>`,"grip-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>`,indeterminate:`<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>`,"magnifying-glass":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>`,minus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>`,pause:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>`,"picture-in-picture":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M448 32c35.3 0 64 28.7 64 64l0 112-64 0 0-112-384 0 0 320 144 0 0 64-144 0-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416 0 96C0 62.9 25.2 35.6 57.5 32.3L64 32 448 32zm16 224c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48l160 0z"/></svg>`,play:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>`,"play-circle":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>`,plus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>`,"table-columns":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 64l0 256 128 0 0-256-128 0zm320 0l-128 0 0 256 128 0 0-256z"/></svg>`,thumbtack:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 10.3 134.1c37.1 21.2 65.8 56.4 78.2 99.7l3.8 13.4c2.8 9.7 .8 20-5.2 28.1S362 352 352 352L32 352c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1L5 297.8c12.4-43.3 41-78.5 78.2-99.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 400l64 0 0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-112z"/></svg>`,"up-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M406.6 502.6l96-96c9.2-9.2 11.9-22.9 6.9-34.9S492.9 352 480 352l-64 0 0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 320-64 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l96 96c12.5 12.5 32.8 12.5 45.3 0zM150.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-9.2 9.2-11.9 22.9-6.9 34.9S19.1 160 32 160l64 0 0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320 64 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-96-96z"/></svg>`,upload:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>`,user:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>`,volume:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM441.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C443.3 170.7 464 210.9 464 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-low":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,xmark:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>`},regular:{calendar:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z"/></svg>`,"circle-question":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`,"circle-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,clock:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>`,copy:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>`,eye:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>`,"eye-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>`}},hn={name:`system`,resolver:(e,t=`classic`,n=`solid`)=>{let r=mn[n][e]??mn.regular[e]??mn.regular[`circle-question`];return r?pn(r):``},mutator:e=>{e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`)}},gn=`classic`,_n=[fn,hn],vn=/* @__PURE__ */ new Set
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;function yn(e){vn.add(e)}function bn(e){vn.delete(e)}function xn(e){return _n.find(t=>t.name===e)}function Sn(){return gn}
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const{I:Cn}=nt,wn=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Tn=Symbol(),En=Symbol(),Dn,On=/* @__PURE__ */ new Map,y=class extends yt{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label=``,this.library=`default`,this.rotate=0,this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=h`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let n=this.shadowRoot.querySelector(`[part='svg']`);return typeof t.mutator==`function`&&t.mutator(n,this),this.svg}try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?Tn:En}catch{return En}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return Tn;Dn||=new DOMParser;let r=Dn.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):Tn}catch{return Tn}}}connectedCallback(){super.connectedCallback(),yn(this)}firstUpdated(e){super.firstUpdated(e),this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),bn(this)}async getIconSource(){let e=xn(this.library),t=this.family||Sn();if(this.name&&e){let n=this.canvas===`auto`||this.autoWidth,r;try{r=await e.resolver(this.name,t,this.variant,n)}catch{r=void 0}return{url:r,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=await this.getIconSource(),n=t?xn(this.library):void 0;if(!e){this.svg=null;return}let r=On.get(e);r||(r=this.resolveIcon(e,n),On.set(e,r));let i=await r;if(i===En&&On.delete(e),e===(await this.getIconSource()).url){if(wn(i))this.svg=i;else switch(i){case En:case Tn:this.svg=null,this.dispatchEvent(new en);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new tn)}}}willUpdate(e){return this.style||this.setStyleProperty(`--rotate-angle`,`${this.rotate}deg`),super.willUpdate(e)}updated(e){super.updated(e);let t=xn(this.library);this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`);let n=this.shadowRoot?.querySelector(`svg`);n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:h`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};y.css=nn,s([dt()],y.prototype,`svg`,2),s([_({reflect:!0})],y.prototype,`name`,2),s([_({reflect:!0})],y.prototype,`family`,2),s([_({reflect:!0})],y.prototype,`variant`,2),s([_({reflect:!0})],y.prototype,`canvas`,2),s([_({attribute:`auto-width`,type:Boolean,reflect:!0})],y.prototype,`autoWidth`,2),s([_({attribute:`swap-opacity`,type:Boolean,reflect:!0})],y.prototype,`swapOpacity`,2),s([_()],y.prototype,`src`,2),s([_()],y.prototype,`label`,2),s([_({reflect:!0})],y.prototype,`library`,2),s([_({type:Number,reflect:!0})],y.prototype,`rotate`,2),s([_({type:String,reflect:!0})],y.prototype,`flip`,2),s([_({type:String,reflect:!0})],y.prototype,`animation`,2),s([kt(`label`)],y.prototype,`handleLabelChange`,1),s([kt([`family`,`name`,`library`,`variant`,`src`,`autoWidth`,`canvas`,`swapOpacity`],{waitUntilFirstUpdate:!0})],y.prototype,`setIcon`,1),y=s([ct(`wa-icon`)],y);var kn=/* @__PURE__ */ t({default:()=>v}),An=m`
  @layer wa-component {
    :host {
      --_accent: var(--wa-color-fill-loud);
      --_accent-on: var(--wa-color-on-loud);
      --_filled: var(--wa-color-fill-normal);
      --_filled-on: var(--wa-color-on-normal);
      --_marker-background: transparent;
      --_marker-border-color: var(--wa-color-border-normal);
      --_marker-border-style: solid;
      --_marker-border-width: var(--wa-form-control-border-width);
      --_marker-color: var(--wa-color-on-quiet);
      --pulse-color: var(--_accent);

      display: flex;
      flex: 2 1 0%;
    }

    /* Horizontal steps span the full width. */
    :host(:not([data-wa-step-vertical]):first-child),
    :host(:not([data-wa-step-vertical]):last-child) {
      flex-grow: 1;
    }

    /* Upcoming brand steps keep a neutral outline so a default stepper reads quietly. */
    :host([variant='brand']) {
      --_marker-border-color: var(--wa-color-neutral-border-normal);
      --_marker-color: var(--wa-color-text-quiet);
    }

    :host([completed]) {
      --_marker-background: var(--_filled);
      --_marker-border-color: transparent;
      --_marker-color: var(--_filled-on);
    }

    :host([active]) {
      --_marker-background: var(--_accent);
      --_marker-border-color: transparent;
      --_marker-color: var(--_accent-on);
    }

    :host(:state(locked)) {
      --_marker-background: transparent;
      --_marker-border-color: var(--wa-color-neutral-border-normal);
      --_marker-border-style: dashed;
      --_marker-color: var(--wa-color-text-quiet);
    }

    :host([data-wa-step-vertical]) {
      flex: 0 0 auto;
    }

    .step {
      position: relative;
      display: flex;
      flex: 1 1 auto;
      min-width: 0;
    }

    .body {
      display: flex;
      flex: 1 1 auto;
      flex-direction: column;
      align-items: center;
      gap: 0.5em;
      min-width: 0;
      margin: 0;
      padding: 0;
      border: 0;
      background: none;
      font: inherit;
      color: var(--wa-color-text-normal);
      text-align: center;
      cursor: default;
    }

    :host(:not([data-wa-step-vertical]):first-child) .body {
      align-items: flex-start;
      text-align: start;
    }

    :host(:not([data-wa-step-vertical]):last-child) .body {
      align-items: flex-end;
      text-align: end;
    }

    button.body {
      cursor: pointer;
    }

    button.body:disabled {
      cursor: not-allowed;
    }

    button.body:focus-visible {
      outline: none;
    }

    button.body:focus-visible .marker {
      outline: var(--wa-focus-ring);
      outline-offset: var(--wa-focus-ring-offset);
    }

    :host([disabled]) .body {
      opacity: 0.5;
    }

    .content {
      display: flex;
      flex-direction: column;
      gap: 0.5em;
    }

    :host([data-wa-step-vertical]) .body {
      flex-direction: row;
      align-items: flex-start;
      text-align: start;
      gap: 1em;
    }

    :host([data-wa-step-vertical]) .content {
      justify-content: center;
      min-height: var(--marker-size);
    }

    /* Connector. Each step draws two halves that meet in the middle of the gap. */
    .connector-start,
    .connector-end {
      position: absolute;
      z-index: 0;
      background-color: var(--connector-color);
    }

    :host(:first-child) .connector-start,
    :host([data-wa-step-vertical]) .connector-start,
    :host(:last-child) .connector-end {
      display: none;
    }

    :host(:not([data-wa-step-vertical])) .connector-start,
    :host(:not([data-wa-step-vertical])) .connector-end {
      top: calc(var(--marker-size) / 2);
      height: var(--connector-width);
      translate: 0 -50%;
    }

    :host(:not([data-wa-step-vertical])) .connector-start {
      inset-inline-start: calc(-1 * var(--gap) / 2);
      inset-inline-end: calc(50% + var(--marker-size) / 2 + var(--connector-gap));
    }

    :host(:not([data-wa-step-vertical])) .connector-end {
      inset-inline-start: calc(50% + var(--marker-size) / 2 + var(--connector-gap));
      inset-inline-end: calc(-1 * var(--gap) / 2);
    }

    :host(:not([data-wa-step-vertical]):first-child) .connector-end {
      inset-inline-start: calc(var(--marker-size) + var(--connector-gap));
    }

    :host(:not([data-wa-step-vertical]):last-child) .connector-start {
      inset-inline-end: calc(var(--marker-size) + var(--connector-gap));
    }

    /* Vertical steps only draw the end half, stretched to reach the next step's marker. */
    :host([data-wa-step-vertical]) .connector-end {
      inset-inline-start: calc(var(--marker-size) / 2);
      inset-block-start: calc(var(--marker-size) + var(--connector-gap));
      inset-block-end: calc(-1 * var(--gap) + var(--connector-gap));
      width: var(--connector-width);
      translate: -50% 0;
    }

    :host([completed]) .connector-end {
      background-color: var(--connector-color-active, var(--_filled));
    }

    /* The leading half takes the completed previous step's fill via the .wa-{variant} class the stepper hands down. */
    .connector-start[data-completed] {
      background-color: var(--connector-color-active, var(--wa-color-fill-normal));
    }

    /* Marker */
    .marker {
      position: relative;
      z-index: 1;
      display: inline-flex;
      flex-shrink: 0;
      align-items: center;
      justify-content: center;
      width: var(--marker-size);
      height: var(--marker-size);
      font-weight: var(--wa-font-weight-action);
      line-height: 1;
      color: var(--_marker-color);
      background-color: var(--_marker-background);
      border: var(--_marker-border-style) var(--_marker-border-width) var(--_marker-border-color);
      border-radius: var(--wa-border-radius-circle);
      transition:
        background-color var(--wa-transition-fast) var(--wa-transition-easing),
        border-color var(--wa-transition-fast) var(--wa-transition-easing),
        color var(--wa-transition-fast) var(--wa-transition-easing);
    }

    @media (hover: hover) {
      button.body:enabled:hover .marker {
        background-color: color-mix(in oklab, var(--_marker-background), var(--wa-color-mix-hover));
      }
    }

    /* Attention, mirroring <wa-badge> */
    :host([attention='pulse']) .marker {
      animation: pulse 1.5s infinite;
    }

    @keyframes pulse {
      0% {
        box-shadow: 0 0 0 0 var(--pulse-color);
      }
      70% {
        box-shadow: 0 0 0 0.5rem transparent;
      }
      100% {
        box-shadow: 0 0 0 0 transparent;
      }
    }

    :host([attention='bounce']) .marker {
      animation: bounce 1s cubic-bezier(0.28, 0.84, 0.42, 1) infinite;
    }

    @keyframes bounce {
      0%,
      20%,
      50%,
      80%,
      100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-5px);
      }
      60% {
        transform: translateY(-2px);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .marker {
        transition: none;
        animation: none;
      }
    }

    /* Same content-to-circle ratio as <wa-avatar>, for digits, icons, and the spinner alike. */
    .marker slot {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: calc(var(--marker-size) * 0.4);
    }

    .marker wa-spinner {
      color: var(--_accent);
    }

    /* Label & description */
    .label {
      font-weight: var(--wa-font-weight-action);
      line-height: var(--wa-line-height-condensed);
    }

    :host(:not([active], [completed])) .label {
      color: var(--wa-color-text-quiet);
    }

    .description {
      font-size: var(--wa-font-size-smaller);
      line-height: var(--wa-line-height-condensed);
      color: var(--wa-color-text-quiet);
    }

    .description[hidden] {
      display: none;
    }

    /* Forced colors flatten backgrounds to Canvas, so anything that's fill-only needs a system-color edge. */
    @media (forced-colors: active) {
      .connector-start,
      .connector-end {
        background-color: CanvasText;
      }

      :host([completed]) .marker,
      :host([active]) .marker {
        border-color: CanvasText;
      }

      :host([active]) .marker {
        outline: dashed 1px SelectedItem;
      }
    }
  }
`,jn=m`
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
`,b=class extends yt{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(...arguments),this.localize=new Vt(this),this.hasSlotController=new Tt(this,`description`),this.name=``,this.completed=!1,this.loading=!1,this.disabled=!1,this.variant=`brand`,this.attention=`none`,this.withDescription=!1,this.position=0,this.active=!1,this.clickable=!1,this.locked=!1,this.role=`listitem`}handleCompletedChange(){this.customStates.set(`completed`,this.completed)}handleLoadingChange(){this.customStates.set(`loading`,this.loading),this.setAttribute(`aria-busy`,this.loading?`true`:`false`)}handleDisabledChange(){this.customStates.set(`disabled`,this.disabled)}handleActiveChange(){this.customStates.set(`active`,this.active),this.syncAriaCurrent()}handleLockedChange(){this.customStates.set(`locked`,this.locked)}syncAriaCurrent(){this.active&&!this.clickable?this.setAttribute(`aria-current`,`step`):this.removeAttribute(`aria-current`)}getStatusText(){return this.completed?this.localize.term(`completed`):this.disabled?this.localize.term(`disabled`):this.locked?this.localize.term(`locked`):this.active?``:this.localize.term(`notCompleted`)}handleClickableChange(){this.customStates.set(`clickable`,this.clickable),this.syncAriaCurrent()}renderIcon(){return this.loading?h`<wa-spinner part="spinner"></wa-spinner>`:this.completed?h`<wa-icon name="check" library="system" variant="solid"></wa-icon>`:this.position>0?this.localize.number(this.position):g}render(){let e=this.hasSlotController.test(`description`,`withDescription`),t=h`
      <span part="marker" class="marker">
        <slot name="icon">${this.renderIcon()}</slot>
      </span>
      <span part="content" class="content">
        <span part="label" class="label">
          <slot></slot>
        </span>
        <span part="status" class="wa-visually-hidden">${this.getStatusText()}</span>
        <span part="description" class="description" ?hidden=${!e}>
          <slot name="description"></slot>
        </span>
      </span>
    `;return h`
      <div part="step" class="step">
        <span
          part="connector"
          class=${Gt({"connector-start":!0,[`wa-${this.connectorStartVariant}`]:!!this.connectorStartVariant})}
          ?data-completed=${!!this.connectorStartVariant}
        ></span>
        <span part="connector" class="connector-end"></span>
        ${this.clickable?h`
              <button
                part="button"
                class="body"
                type="button"
                ?disabled=${this.disabled||this.locked}
                aria-current=${this.active?`step`:g}
              >
                ${t}
              </button>
            `:h`<div class="body">${t}</div>`}
      </div>
    `}};b.css=[Ot,jn,An],s([_({reflect:!0})],b.prototype,`name`,2),s([_({type:Boolean,reflect:!0})],b.prototype,`completed`,2),s([_({type:Boolean,reflect:!0})],b.prototype,`loading`,2),s([_({type:Boolean,reflect:!0})],b.prototype,`disabled`,2),s([_({reflect:!0})],b.prototype,`variant`,2),s([_({reflect:!0})],b.prototype,`attention`,2),s([_({type:Boolean,attribute:`with-description`})],b.prototype,`withDescription`,2),s([dt()],b.prototype,`position`,2),s([_({type:Boolean,reflect:!0})],b.prototype,`active`,2),s([dt()],b.prototype,`clickable`,2),s([dt()],b.prototype,`locked`,2),s([dt()],b.prototype,`connectorStartVariant`,2),s([_({reflect:!0})],b.prototype,`role`,2),s([kt(`completed`)],b.prototype,`handleCompletedChange`,1),s([kt(`loading`)],b.prototype,`handleLoadingChange`,1),s([kt(`disabled`)],b.prototype,`handleDisabledChange`,1),s([kt(`active`)],b.prototype,`handleActiveChange`,1),s([kt(`locked`)],b.prototype,`handleLockedChange`,1),s([kt(`clickable`)],b.prototype,`handleClickableChange`,1),b=s([ct(`wa-step`)],b),b.disableWarning?.(`change-in-update`);var Mn=/* @__PURE__ */ t({default:()=>b}),Nn=class extends Event{constructor(e){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-step-change`,{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}},Pn=class extends Event{constructor(e){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-before-step-change`,{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}},Fn=m`
  @layer wa-component {
    :host {
      --gap: var(--wa-space-l);
      --marker-size: 2em;
      --connector-color: var(--wa-color-neutral-fill-normal);
      --connector-width: var(--wa-border-width-m);
      --connector-gap: 0.35em;
      display: block;
    }

    .stepper {
      display: block;
    }

    .steps {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      gap: var(--gap);
      margin: 0;
      padding: 0;
      list-style: none;
    }

    :host([orientation='vertical']) .steps,
    :host(:state(stacked)) .steps {
      flex-direction: column;
      align-items: stretch;
    }
  }
`,In=null,Ln=null,Rn=7e3
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;function zn(e){let t=document.createElement(`div`);return t.setAttribute(`role`,`log`),t.setAttribute(`aria-live`,e),t.setAttribute(`aria-relevant`,`additions`),Object.assign(t.style,{position:`absolute`,width:`1px`,height:`1px`,margin:`-1px`,padding:`0`,border:`0`,overflow:`hidden`,clip:`rect(0 0 0 0)`,clipPath:`inset(50%)`,whiteSpace:`nowrap`}),t}function Bn(e){return e===`assertive`?(Ln??=document.body.appendChild(zn(`assertive`)),Ln):(In??=document.body.appendChild(zn(`polite`)),In)}function Vn(e,t=`polite`){if(!e)return;let n=Bn(t),r=document.createElement(`div`);r.textContent=e,n.appendChild(r),setTimeout(()=>r.remove(),Rn)}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Hn(e){return e.split(` `).map(e=>e.trim()).filter(e=>e!==``)}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var x=class extends yt{constructor(){super(),this.localize=new Vt(this),this.isStacked=!1,this.activeIndex=0,this.stepCount=0,this.active=``,this.orientation=`horizontal`,this.linear=!1,this.clickable=!1,this.label=``,this.addEventListener(`click`,this.handleClick)}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this.handleSlotChange(),this.mutationObserver=new MutationObserver(e=>{e.some(e=>e.target.closest?.(`wa-stepper`)===this)&&this.syncSteps()}),this.mutationObserver.observe(this,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[`name`,`completed`,`loading`,`disabled`,`variant`]})}),this.resizeObserver=new ResizeObserver(e=>{requestAnimationFrame(()=>{for(let t of e)this.updateStacking(t.borderBoxSize[0].inlineSize)})}),this.resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect(),this.resizeObserver?.disconnect()}handleSlotChange(){if(this.didSSR){let e=this.getAllSteps().filter(e=>e.didSSR&&!e.hasUpdated).map(e=>e.updateComplete);if(e.length>0){Promise.allSettled(e).then(()=>this.handleSlotChange());return}}this.syncSteps()}getAllSteps(){return this.defaultSlot?this.defaultSlot.assignedElements().filter(e=>e.localName===`wa-step`):[]}getLinearBoundaryIndex(e){let t=e.findIndex(e=>!e.completed);return t===-1?e.length-1:t}isReachable(e,t=this.getAllSteps()){return e.disabled?!1:!this.linear||t.indexOf(e)<=this.getLinearBoundaryIndex(t)}syncSteps(){let e=this.getAllSteps();if(e.length===0)return;let t=e.find(e=>e.name===this.active);t||=(this.active&&console.warn(`A step named "${this.active}" could not be found. Falling back to the first step.`,this),e[0]);let n=this.getLinearBoundaryIndex(e);this.activeIndex=e.indexOf(t),this.stepCount=e.length,this.updateStacking(this.getBoundingClientRect().width);let r=this.orientation===`vertical`||this.isStacked;e.forEach((i,a)=>{i.position=a+1,i.active=i===t,i.locked=this.linear&&a>n,i.clickable=this.clickable;let o=e[a-1];i.connectorStartVariant=o?.completed?o.variant:void 0,i.toggleAttribute(`data-wa-step-vertical`,r)}),this.customStates.set(`completed`,e.every(e=>e.completed)),this.customStates.set(`loading`,e.some(e=>e.loading)),this.customStates.set(`stacked`,r)}handleStateChange(){this.syncSteps()}updateStacking(e){if(this.orientation!==`auto`||!this.stepsEl){this.isStacked=!1;return}let t=this.getAllSteps().length,n=parseFloat(getComputedStyle(this).fontSize),r=parseFloat(getComputedStyle(this.stepsEl).columnGap)||0,i=t*n*6+Math.max(0,t-1)*r;this.isStacked=e<i}goTo(e){let t=this.getAllSteps(),n=t.find(t=>t.name===e);if(!n||!this.isReachable(n,t))return;let r=t.find(e=>e.active)??null;if(n===r)return;let i={name:n.name,previousName:r?.name??null,step:n,previousStep:r},a=new Pn(i);this.dispatchEvent(a),!a.defaultPrevented&&(this.active=n.name,this.updateComplete.then(()=>{this.dispatchEvent(new Nn(i)),this.announceActiveStep()}))}announceActiveStep(){Vn(this.localize.term(`stepXOfY`,this.activeIndex+1,this.stepCount),`polite`)}next(){let e=this.getAllSteps(),t=e[e.findIndex(e=>e.active)+1];t&&this.goTo(t.name)}previous(){let e=this.getAllSteps(),t=e.findIndex(e=>e.active),n=t>0?e[t-1]:void 0;n&&this.goTo(n.name)}handleClick(e){if(!this.clickable)return;let t=e.target.closest(`wa-step`);t&&t.closest(`wa-stepper`)===this&&!t.disabled&&this.goTo(t.name)}render(){let e=this.label||this.localize.term(`steps`),t=h`
      ${this.stepCount>0?h`
            <span part="summary" class="wa-visually-hidden">
              ${this.localize.term(`stepXOfY`,this.activeIndex+1,this.stepCount)}
            </span>
          `:``}
      <ol part="steps" class="steps" role="list">
        <slot @slotchange=${this.handleSlotChange}></slot>
      </ol>
    `;return this.clickable?h`<nav part="stepper" class="stepper" aria-label=${e}>${t}</nav>`:h`<div part="stepper" class="stepper" role="group" aria-label=${e}>${t}</div>`}};x.css=[jn,Fn],s([pt(`.steps`)],x.prototype,`stepsEl`,2),s([pt(`slot`)],x.prototype,`defaultSlot`,2),s([dt()],x.prototype,`isStacked`,2),s([dt()],x.prototype,`activeIndex`,2),s([dt()],x.prototype,`stepCount`,2),s([_({reflect:!0})],x.prototype,`active`,2),s([_({reflect:!0})],x.prototype,`orientation`,2),s([_({type:Boolean,reflect:!0})],x.prototype,`linear`,2),s([_({type:Boolean,reflect:!0})],x.prototype,`clickable`,2),s([_()],x.prototype,`label`,2),s([kt([`active`,`linear`,`clickable`,`orientation`,`isStacked`],{waitUntilFirstUpdate:!0})],x.prototype,`handleStateChange`,1),x=s([ct(`wa-stepper`)],x),document.addEventListener(`click`,e=>{let t=e.target.closest(`[data-stepper]`);if(!(t instanceof Element))return;let[n,r,...i]=Hn(t.getAttribute(`data-stepper`)||``);if(!r)return;let a=t.getRootNode().getElementById(r);a?.localName===`wa-stepper`?n===`next`?a.next():n===`previous`?a.previous():n===`goto`&&i.length>0&&a.goTo(i.join(` `)):console.warn(`A stepper with an ID of "${r}" could not be found in this document.`)});var Un=/* @__PURE__ */ t({default:()=>x}),S
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;Object.getOwnPropertyDescriptors||(()=>{var e;if(typeof Reflect<`u`&&Reflect.ownKeys)e=Reflect.ownKeys;else{var t=Object.getOwnPropertySymbols||(e=>[]);e=(e=>Object.getOwnPropertyNames(e).concat(t(e)))}return(t=>{for(var n=e(t),r={},i=n.length|0,a=0;a!==i;){var o=n[a];Object.defineProperty(r,o,{configurable:!0,enumerable:!0,writable:!0,value:Object.getOwnPropertyDescriptor(t,o)}),a=a+1|0}return r})})();function Wn(e){this.c=e}S=Wn.prototype,S.toString=(function(){return String.fromCharCode(this.c)});function C(e,t){this.l=e,this.h=t}S=C.prototype,S.toString=(function(){return Vo(this.l,this.h)});function Gn(e){switch(typeof e){case`string`:return rp.l();case`number`:return or(e)?e<<24>>24===e?Od.l():e<<16>>16===e?zd.l():Xf.l():sr(e)?Yf.l():Jf.l();case`boolean`:return Au.l();case`undefined`:return No.l();default:return e instanceof C?$f.l():e instanceof Wn?Nu.l():e&&e.$classData?e.$classData.l():null}}function Kn(e){switch(typeof e){case`string`:return`java.lang.String`;case`number`:return or(e)?e<<24>>24===e?`java.lang.Byte`:e<<16>>16===e?`java.lang.Short`:`java.lang.Integer`:sr(e)?`java.lang.Float`:`java.lang.Double`;case`boolean`:return`java.lang.Boolean`;case`undefined`:return`java.lang.Void`;default:return e instanceof C?`java.lang.Long`:e instanceof Wn?`java.lang.Character`:e&&e.$classData?e.$classData.N:null.jx()}}function qn(e,t){switch(typeof e){case`string`:return np(e,t);case`number`:return Kf(e,t);case`boolean`:return Ou(e,t);case`undefined`:return Ao(e,t);default:return e&&e.$classData||e===null?e.d(t):e instanceof C?Zf(e.l,e.h,t):e instanceof Wn?Mu(e.c,t):fr.prototype.d.call(e,t)}}function Jn(e){switch(typeof e){case`string`:return tp(e);case`number`:return qf(e);case`boolean`:return ku(e);case`undefined`:return jo(e);default:return e&&e.$classData||e===null?e.l():e instanceof C?Qf(e.l,e.h):e instanceof Wn?ju(e.c):fr.prototype.l.call(e)}}function Yn(e){return e===void 0?`undefined`:e.toString()}function Xn(e){if(e===0)throw new Dd(`/ by zero`);return e}function Zn(e){return e>2147483647?2147483647:e<-2147483648?-2147483648:e|0}function Qn(e){return String.fromCharCode(e)}var $n=/* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(8));function er(e,t,n,r,i){if(e!==n||r-t>>>0>i>>>0)for(var a=0;a<i;a=a+1|0)n[r+a|0]=e[t+a|0];else for(var a=i-1|0;a>=0;a=a-1|0)n[r+a|0]=e[t+a|0]}var tr=0,nr=/* @__PURE__ */ new WeakMap;function rr(e){switch(typeof e){case`string`:return tp(e);case`number`:return qf(e);case`bigint`:var t=0;for(e<BigInt(0)&&(e=~e);e!==BigInt(0);)t^=Number(BigInt.asIntN(32,e)),e>>=BigInt(32);return t;case`boolean`:return e?1231:1237;case`undefined`:return 0;case`symbol`:var n=e.description;return n===void 0?0:tp(n);default:if(e===null)return 0;var r=nr.get(e);return r===void 0&&(r=tr+1|0,tr=r,nr.set(e,r)),r}}function ir(e){return typeof e==`number`&&e<<24>>24===e&&1/e!=-1/0}function ar(e){return typeof e==`number`&&e<<16>>16===e&&1/e!=-1/0}function or(e){return typeof e==`number`&&(e|0)===e&&1/e!=-1/0}function sr(e){return typeof e==`number`&&(e!==e||Math.fround(e)===e)}function cr(e){return new Wn(e)}cr(0);function w(e,t){return new C(e,t)}var lr=w(0,0);function ur(e){return e===null?0:e.c}function dr(e){return e===null?lr:e}function fr(){}S=fr.prototype,S.constructor=fr;function T(){}T.prototype=S,S.l=(function(){return rr(this)}),S.d=(function(e){return this===e}),S.m=(function(){var e=this.l();return Kn(this)+`@`+(e>>>0).toString(16)}),S.toString=(function(){return this.m()});function E(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}S=E.prototype=new T,S.constructor=E,S.ab=(function(e,t,n,r){er(this.a,e,t.a,n,r)}),S.ae=(function(){return new E(this.a.slice())});function pr(){}pr.prototype=S;function mr(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=!1}else this.a=e}S=mr.prototype=new T,S.constructor=mr,S.ab=(function(e,t,n,r){er(this.a,e,t.a,n,r)}),S.ae=(function(){return new mr(this.a.slice())});function hr(e){this.a=typeof e==`number`?new Uint16Array(e):e}S=hr.prototype=new T,S.constructor=hr,S.ab=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),S.ae=(function(){return new hr(this.a.slice())});function gr(e){this.a=typeof e==`number`?new Int8Array(e):e}S=gr.prototype=new T,S.constructor=gr,S.ab=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),S.ae=(function(){return new gr(this.a.slice())});function _r(e){this.a=typeof e==`number`?new Int16Array(e):e}S=_r.prototype=new T,S.constructor=_r,S.ab=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),S.ae=(function(){return new _r(this.a.slice())});function vr(e){this.a=typeof e==`number`?new Int32Array(e):e}S=vr.prototype=new T,S.constructor=vr,S.ab=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),S.ae=(function(){return new vr(this.a.slice())});function yr(e){typeof e==`number`?(e<<=1,this.a=new Int32Array(e)):this.a=e}S=yr.prototype=new T,S.constructor=yr,S.ab=(function(e,t,n,r){t.a.set(this.a.subarray(e<<1,(e+r|0)<<1),n<<1)}),S.ae=(function(){return new yr(this.a.slice())});function br(e){this.a=typeof e==`number`?new Float32Array(e):e}S=br.prototype=new T,S.constructor=br,S.ab=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),S.ae=(function(){return new br(this.a.slice())});function xr(e){this.a=typeof e==`number`?new Float64Array(e):e}S=xr.prototype=new T,S.constructor=xr,S.ab=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),S.ae=(function(){return new xr(this.a.slice())});function D(){this.C=void 0,this.n=null,this.O=null,this.B=null,this.D=0,this.z=null,this.E=``,this.L=void 0,this.A=void 0,this.F=void 0,this.w=void 0,this.J=!1,this.N=``,this.X=!1,this.Y=!1,this.Z=!1,this.I=void 0}S=D.prototype,S.p=(function(e,t,n,r,i){this.n={},this.z=e,this.E=t;var a=this;return this.F=(e=>e===a),this.N=n,this.X=!0,this.I=(e=>!1),r!==void 0&&(this.A=new D().y(this,r,i,t===`J`)),this}),S.i=(function(e,t,n,r){var i=Object.getOwnPropertyNames(n)[0];return this.n=n,this.E=`L`+t+`;`,this.F=(e=>!!e.n[i]),this.J=e===2,this.N=t,this.Y=e===1,this.I=r||(e=>!!(e&&e.$classData&&e.$classData.n[i])),typeof e!=`number`&&(e.prototype.$classData=this),this}),S.y=(function(e,t,n,r,i){t.prototype.$classData=this;var a=`[`+e.E;this.C=t,this.n={s:1,a:1},this.O=e,this.B=e,this.D=1,this.E=a,this.N=a,this.Z=!0;var o=this;return this.F=i||(e=>o===e),this.w=r?(e=>{for(var n=e.length|0,r=new t(n),i=r.a,a=0;a<n;a=a+1|0){var o=e[a];i[a<<1]=o.l,i[(a<<1)+1|0]=o.h}return r}):n?(e=>new t(new n(e))):(e=>new t(e)),this.I=(e=>e instanceof t),this}),S.a=(function(e){function t(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}var n=t.prototype=new pr;n.constructor=t,n.ab=(function(e,t,n,r){er(this.a,e,t.a,n,r)}),n.ae=(function(){return new t(this.a.slice())}),n.$classData=this;var r=e.B||e,i=e.D+1,a=`[`+e.E;this.C=t,this.n={s:1,a:1},this.O=e,this.B=r,this.D=i,this.E=a,this.N=a,this.Z=!0;var o=(e=>{var t=e.D;return t===i?r.F(e.B):t>i&&r===Sr});this.F=o,this.w=(e=>new t(e));var s=this;return this.I=(e=>{var t=e&&e.$classData;return!!t&&(t===s||o(t))}),this}),S.r=(function(){return this.A||=new D().a(this),this.A}),S.l=(function(){return this.L||=new Fl(this),this.L}),S.R=(function(e){return this===e||this.F(e)}),S.S=(function(){return this.P?this.P.l():null}),S.Q=(function(){return this.O?this.O.l():null}),S.U=(function(e){if(this===Cr)throw Ad(new jd);return new(this.r()).C(e)});var Sr=new D;Sr.n={},Sr.E=`Ljava.lang.Object;`,Sr.F=(e=>!e.X),Sr.N=`java.lang.Object`,Sr.I=(e=>e!==null),Sr.A=new D().y(Sr,E,void 0,!1,(e=>{var t=e.D;return t===1?!e.B.X:t>1})),fr.prototype.$classData=Sr;var Cr=new D().p(void 0,`V`,`void`,void 0,void 0),wr=new D().p(!1,`Z`,`boolean`,mr,void 0),Tr=new D().p(0,`C`,`char`,hr,Uint16Array),Er=new D().p(0,`B`,`byte`,gr,Int8Array),Dr=new D().p(0,`S`,`short`,_r,Int16Array),Or=new D().p(0,`I`,`int`,vr,Int32Array),kr=new D().p(lr,`J`,`long`,yr,Int32Array),Ar=new D().p(0,`F`,`float`,br,Float32Array),jr=new D().p(0,`D`,`double`,xr,Float64Array);new Int8Array(new Int32Array([1]).buffer)[0];function Mr(e,t,n){for(var r=new Int32Array(e),i=t.length|0,a=0,o=0,s=0,c=0;o!==i;){var l=t.charCodeAt(o);l<80?c=(c|l-48)<<5:(c|=l-93,a=(a&n)+c|0,r[s]=a,s=s+1|0,c=0),o=o+1|0}return r}function Nr(e,t){return new vr(Mr(e,t,-1))}var Pr=new D().i(1,`com.raquo.airstream.core.InternalObserver`,{bF:1});function Fr(e){return Gn(e).dP()+`@`+e.l()}function Ir(e){var t=e.cH();return t===void 0?e.cB():t}function Lr(){Rr=this,zr().gU(new K((e=>void 0)),os().cq,!0)}S=Lr.prototype=new T,S.constructor=Lr,S.gU=(function(e,t,n){return new hu(e,n,t,this)}),S.id=(function(e,t){return new gu(e,t,this)}),new D().i(Lr,`com.raquo.airstream.core.Observer$`,{bH:1});var Rr;function zr(){return Rr||=new Lr,Rr}function Br(){}S=Br.prototype=new T,S.constructor=Br,S.j0=(function(e,t){var n=e.indexOf(t)|0,r=n!==-1;return r&&e.splice(n,1),r}),new D().i(Br,`com.raquo.airstream.core.ObserverList$`,{bK:1});var Vr;function Hr(){return Vr||=new Br,Vr}function Ur(){this.b0=0,this.b0=0}S=Ur.prototype=new T,S.constructor=Ur,S.gH=(function(){return this.b0=this.b0===2147483647?1:1+this.b0|0,this.b0}),new D().i(Ur,`com.raquo.airstream.core.Signal$`,{bM:1});var Wr;function Gr(){return Wr||=new Ur,Wr}function Kr(e){this.cS=null,this.e8=null,this.cT=0,this.cS=e,this.e8=void 0;var t=ci().c1();this.cT=t===void 0?1:1+t.cT|0,Xr().c4===-1||this.cT>Xr().c4?z().a5(new Bf(this,Xr().c4)):ei().E?ei().aM.push(this)|0:ci().dD(this)}S=Kr.prototype=new T,S.constructor=Kr;var qr=new D().i(Kr,`com.raquo.airstream.core.Transaction`,{bN:1});function Jr(){this.c4=0,this.e9=null,Yr=this,this.c4=1e3,this.e9=new K((e=>{throw H(new U,`Attempted to run Transaction `+e+` after it was already executed.`)}))}S=Jr.prototype=new T,S.constructor=Jr,S.gi=(function(e){try{e.cS.b(e);var t=e.e8;if(t!==void 0)for(;t.jz();)t.jw().jA(e)}catch(e){var n=e instanceof Vc?e:new Z(e);z().a5(n)}}),new D().i(Jr,`com.raquo.airstream.core.Transaction$`,{bO:1});var Yr;function Xr(){return Yr||=new Jr,Yr}function Zr(e){e.c5.length|0?new Kr(new K((t=>{for(;(e.c5.length|0)>0;){var n=e.c5.shift();try{n.b(t)}catch(e){var r=e instanceof Vc?e:new Z(e);z().a5(r)}}for(;(e.aM.length|0)>0;){var i=e.aM.shift();ci().dD(i)}}))):(e.aM.length|0)>0&&new Kr(new K((t=>{for(;(e.aM.length|0)>0;)ci().dD(e.aM.shift())})))}function Qr(){this.E=!1,this.c5=null,this.aM=null,$r=this,this.E=!1,this.c5=Ai().a8(P().a6(new(M.r()).C([]))),this.aM=Ai().a8(P().a6(new(qr.r()).C([])))}S=Qr.prototype=new T,S.constructor=Qr,new D().i(Qr,`com.raquo.airstream.core.Transaction$onStart$`,{bP:1});var $r;function ei(){return $r||=new Qr,$r}function ti(e,t){return e.aN.get(t)}function ni(e,t){e.c6.unshift(t)}function ri(e){return e.c6.shift()}function ii(e,t,n){var r=ti(e,t),i=r===void 0,a=r===void 0?Ai().a8(P().a6(new(qr.r()).C([]))):r;a.push(n),i&&e.aN.set(t,a)}function ai(e,t){var n=ti(e,t),r=n===void 0||(n.length|0)>0?n:void 0;if(r!==void 0){var i=r.shift();return r.length|0||e.aN.delete(t),i}}function oi(){this.c6=null,this.aN=null,si=this,this.c6=Ai().a8(P().a6(new(qr.r()).C([]))),this.aN=/* @__PURE__ */ new Map}S=oi.prototype=new T,S.constructor=oi,S.dD=(function(e){var t=this.c1();t===void 0?(ni(this,e),Xr().gi(e),this.hS(e)):ii(this,t,e)}),S.hS=(function(e){for(var t=e;;){var n=this.c1(),r=t;if(!(n!==void 0&&N().z(r,n)))throw H(new U,`Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.`);this.iQ(t),t.cS=Xr().e9;var i=this.c1();if(N().z(i,void 0)){if((this.aN.size|0)>0){var a=new rl(0);throw this.aN.forEach((e=>((t,n)=>{e.bI=e.bI+(t.length|0)|0}))(a)),H(new U,`Transaction queue error: Stack cleared, but a total of `+a.bI+` children for `+(this.aN.size|0)+` transactions remain. This is a bug in Airstream.`)}return}Xr().gi(i),t=i}}),S.iQ=(function(e){for(var t=e;;){var n=ai(this,t);if(N().z(n,void 0)){ri(this);var r=this.c1();if(!N().z(r,void 0))t=r;else return}else{ni(this,n);return}}}),S.c1=(function(){return this.c6[0]}),new D().i(oi,`com.raquo.airstream.core.Transaction$pendingTransactions$`,{bQ:1});var si;function ci(){return si||=new oi,si}function li(e,t){var n=e.aq.indexOf(t)|0;if(n!==-1)e.aq.splice(n,1),e.H.c()||t.gK();else throw H(new U,`Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?`)}function ui(e){for(;(e.c7.length|0)>0;)li(e,e.c7.shift())}function di(e){this.ea=null,this.aq=null,this.b1=!1,this.c7=null,this.H=null,this.b2=0,this.ea=e,this.aq=Ai().a8(P().a6(new(pi.r()).C([]))),this.b1=!0,this.c7=Ai().a8(P().a6(new(pi.r()).C([]))),this.H=J(),this.b2=0}S=di.prototype=new T,S.constructor=di,S.g8=(function(){if(this.H.c()){var e=ei(),t=(()=>{var e=new nc(this.ea);this.H=new Y(e),this.b1=!1,this.b2=0;for(var t=0,n=this.aq.length|0;t<n;){var r=t+this.b2|0;this.aq[r].gI(e),t=1+t|0}ui(this),this.b1=!0,this.b2=0});if(ei(),e.E)t();else{e.E=!0;try{t()}finally{e.E=!1,Zr(e)}}}else throw H(new U,`Can not activate `+this+`: it is already active`)}),S.hJ=(function(){if(this.H.c())throw H(new U,`Can not deactivate DynamicOwner: it is not active`);this.b1=!1;for(var e=this.aq,t=0,n=e.length|0;t<n;)e[t].gK(),t=1+t|0;ui(this);var r=this.H;r.c()||r.s().iy(),ui(this),this.b1=!0,this.H=J()}),S.hl=(function(e,t){t?(this.b2=1+this.b2|0,this.aq.unshift(e)):this.aq.push(e);var n=this.H;if(!n.c()){var r=n.s();e.gI(r)}}),S.j2=(function(e){this.b1?li(this,e):this.c7.push(e)}),new D().i(di,`com.raquo.airstream.ownership.DynamicOwner`,{bT:1});function fi(e,t,n){this.c8=null,this.eb=null,this.c9=null,this.c8=e,this.eb=t,this.c9=J(),e.hl(this,n)}S=fi.prototype=new T,S.constructor=fi,S.cG=(function(){this.c8.j2(this)}),S.gI=(function(e){var t=ei(),n=(()=>{this.c9=this.eb.b(e)});if(ei(),t.E)n();else{t.E=!0;try{n()}finally{t.E=!1,Zr(t)}}}),S.gK=(function(){var e=this.c9;e.c()||(e.s().cG(),this.c9=J())});var pi=new D().i(fi,`com.raquo.airstream.ownership.DynamicSubscription`,{bU:1});function mi(){}S=mi.prototype=new T,S.constructor=mi,S.cO=(function(e,t,n){return new fi(e,new K((e=>new Y(t.b(e)))),n)}),S.gQ=(function(e,t,n){return new fi(e,new K((e=>(t.b(e),J()))),n)}),new D().i(mi,`com.raquo.airstream.ownership.DynamicSubscription$`,{bV:1});var hi;function gi(){return hi||=new mi,hi}function _i(e){e.b3=Ai().a8(P().a6(new(Ci.r()).C([])))}function vi(e){for(var t=e.b3,n=0,r=t.length|0;n<r;)xi(t[n]),n=1+n|0;e.b3.length=0}function yi(e,t){var n=e.b3.indexOf(t)|0;if(n!==-1)e.b3.splice(n,1);else throw H(new U,`Can not remove Subscription from Owner: subscription not found.`)}function bi(e,t){e.b3.push(t)}function xi(e){if(!e.cV)e.ed.N(),e.cV=!0;else throw H(new U,`Can not kill Subscription: it was already killed.`)}function Si(e,t){this.ee=null,this.ed=null,this.cV=!1,this.ee=e,this.ed=t,this.cV=!1,e.iO(this)}S=Si.prototype=new T,S.constructor=Si,S.cG=(function(){xi(this),yi(this.ee,this)});var Ci=new D().i(Si,`com.raquo.airstream.ownership.Subscription`,{bY:1});function wi(e,t){this.ef=null,this.eg=null,this.ar=null,this.aO=!1,this.ef=e,this.eg=t,this.ar=J(),this.aO=!1}S=wi.prototype=new T,S.constructor=wi,S.it=(function(){var e=this.ar;return!e.c()&&!e.s().c8.H.c()}),S.ja=(function(e){if(this.aO)throw H(new U,`Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var t=this.ar;if(t.c())var n=!1;else var r=t.s().c8,n=e===null?r===null:e===r;if(!n){this.it()&&!e.H.c()&&(this.aO=!0);var i=this.ar;i.c()||(i.s().cG(),this.ar=J());var a=gi().cO(e,new K((e=>(this.aO||this.ef.N(),new Si(e,new $u((()=>{this.aO||this.eg.N()})))))),!1);this.ar=new Y(a),this.aO=!1}}),S.hC=(function(){if(this.aO)throw H(new U,`Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var e=this.ar;e.c()||e.s().cG(),this.ar=J()}),new D().i(wi,`com.raquo.airstream.ownership.TransferableSubscription`,{bZ:1});function Ti(){}S=Ti.prototype=new T,S.constructor=Ti,S.ht=(function(e){return new Hf(new Lf(e))}),new D().i(Ti,`com.raquo.airstream.state.Var$`,{c3:1});var Ei;function Di(){return Ei||=new Ti,Ei}function Oi(){}S=Oi.prototype=new T,S.constructor=Oi,S.a8=(function(e){return[...Ks().jl(e)]}),new D().i(Oi,`com.raquo.ew.JsArray$`,{c6:1});var ki;function Ai(){return ki||=new Oi,ki}function ji(){}S=ji.prototype=new T,S.constructor=ji,S.i8=(function(e,t){for(var n=0,r=e.length|0;n<r;)t(e[n]),n=1+n|0}),new D().i(ji,`com.raquo.ew.JsArray$RichJsArray$`,{c7:1});var Mi;function Ni(){return Mi||=new ji,Mi}function Pi(){this.en=null,Fi=this,document.createElement(`template`),this.hH(G().k.jf().jg()),this.en=/* @__PURE__ */ RegExp(` `,`g`)}S=Pi.prototype=new T,S.constructor=Pi,S.hq=(function(e,t){try{return e.appendChild(t),!0}catch(e){var n=e instanceof Vc?e:new Z(e);if(n instanceof Z&&n.y instanceof DOMException)return!1;throw n instanceof Z?n.y:n}}),S.iX=(function(e,t){try{return e.removeChild(t),!0}catch(e){var n=e instanceof Vc?e:new Z(e);if(n instanceof Z&&n.y instanceof DOMException)return!1;throw n instanceof Z?n.y:n}}),S.j5=(function(e,t,n){try{return e.replaceChild(t,n),!0}catch(e){var r=e instanceof Vc?e:new Z(e);if(r instanceof Z&&r.y instanceof DOMException)return!1;throw r instanceof Z?r.y:r}}),S.iv=(function(e,t){for(var n=e;;){if(n.parentNode!==null)var r=n.parentNode;else var i=n.host,r=i===void 0?null:i;if(r===null)return!1;if(N().z(t,r))return!0;n=r}}),S.he=(function(e,t){e.addEventListener(t.b8.bp.ch,t.dg,t.dh)}),S.iY=(function(e,t){e.removeEventListener(t.b8.bp.ch,t.dg,t.dh)}),S.hG=(function(e){return document.createElement(e.dR())}),S.ih=(function(e,t){var n=this.ii(e,t);return n===void 0?void 0:t.ci.cA(n)}),S.ii=(function(e,t){var n=e.I.getAttributeNS(null,t.b5);return n===null?void 0:n}),S.gO=(function(e,t,n){this.j9(e,t,t.ci.cE(n))}),S.j9=(function(e,t,n){n===null?this.iZ(e,t):e.I.setAttribute(t.b5,n)}),S.iZ=(function(e,t){e.I.removeAttribute(t.b5)}),S.gP=(function(e,t,n){var r=e.I,i=t.b6,a=t.b7,o=n===null?null:n;o===null?(a.a3(new K((e=>r.style.removeProperty(``+e+i)))),r.style.removeProperty(i)):(a.a3(new K((e=>{r.style.setProperty(``+e+i,o)}))),r.style.setProperty(i,o))}),S.hH=(function(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e.f6)}),S.il=(function(e,t){var n=this.im(e,t);return n===void 0?void 0:t.dd.cA(n)}),S.im=(function(e,t){var n=e.dW(),r=t.ck,i=n.getAttributeNS(r.c()?null:r.s(),t.de);return i===null?void 0:i}),S.jb=(function(e,t,n){this.jc(e,t,t.dd.cE(n))}),S.jc=(function(e,t,n){if(n===null)this.j3(e,t);else{var r=t.ck;if(r.c())e.dW().setAttribute(t.cj,n);else{var i=r.s();e.dW().setAttributeNS(i,t.cj,n)}}}),S.j3=(function(e,t){var n=e.dW(),r=t.ck;n.removeAttributeNS(r.c()?null:r.s(),t.de)}),S.hF=(function(e){return document.createComment(e)}),S.hI=(function(e){return document.createTextNode(e)}),S.hL=(function(e,t){for(var n=t,r=e;;){if(r===null)return n;var i=r.parentNode,a=new Xm(this.hK(r),n);r=i,n=a}}),S.hK=(function(e){if(e instanceof HTMLElement){var t=e.id;if(vs(),t!==``)var n=`#`+t;else var r=e.className,n=(vs(),r===``?``:`.`+r.replace(this.en,`.`));return e.tagName.toLowerCase()+n}return e.nodeName}),new D().i(Pi,`com.raquo.laminar.DomApi$`,{c8:1});var Fi;function O(){return Fi||=new Pi,Fi}function Ii(e,t,n){this.d0=null,this.eo=null,this.cZ=null,this.d0=e,this.eo=t,this.cZ=n}S=Ii.prototype=new T,S.constructor=Ii,S.a3=(function(e){this.d0===null?this.cZ===null?ls().i9(this.eo,e):Ni().i8(this.cZ,ou().ic(e)):this.d0.a3(e)}),new D().i(Ii,`com.raquo.laminar.Seq`,{c9:1});function Li(){Ri=this,$()}S=Li.prototype=new T,S.constructor=Li,new D().i(Li,`com.raquo.laminar.Seq$`,{ca:1});var Ri;function zi(){return Ri||=new Li,Ri}function Bi(e){zr(),z(),e.er=Di()}function Vi(e){e.gW=xa()}function Hi(e){Ui(e,new K((e=>{e.eU.I.focus()})))}function Ui(e,t){return new pc(new K((e=>{var n=new nl(!e.ad.H.c()),r=new K((e=>{n.cv?n.cv=!1:t.b(e)}));gi().gQ(e.ad,new K((e=>(t=>{r.b(new va(e,t))}))(e)),!1)})),xa())}function Wi(){this.b4=null,this.bo=null,Gi=this,this.b4=new ic(Ki()),new ic(Ki()),new ic(Ki()),this.bo=new rc}S=Wi.prototype=new T,S.constructor=Wi,new D().i(Wi,`com.raquo.laminar.codecs.package$`,{ci:1});var Gi;function Ki(){return Gi||=new Wi,Gi}function qi(e){e.gX=Ji(e,`class`,` `)}function Ji(e,t,n){var r=cc(new lc,t,Ki().b4);return new oc(r.b5,new K((e=>{var t=O().ih(e,r);return t===void 0?``:t})),new ed(((e,t)=>{O().gO(e,r,t)})),n)}function Yi(e){e.gV=Xi(e,`class`,` `)}function Xi(e,t,n){var r=new dc(t,Ki().b4,J());return new oc(r.cj,new K((e=>{var t=O().il(e,r);return t===void 0?``:t})),new ed(((e,t)=>{O().jb(e,r,t)})),n)}function Zi(){}S=Zi.prototype=new T,S.constructor=Zi,S.hr=(function(e,t){return new bu(J(),!1,new td(((n,r,i)=>dl(e,new K(((e,n)=>(r=>{var i=n.cw;if(i===void 0){var a=new Tu(t.dH(r));this.jh(a,e);var o=a;n.cw=o,o=null}else i.cm.textContent=t.dH(r)}))(n,new il(void 0))),r))),void 0)}),S.jh=(function(e,t){ka().j4(t.d6,t.d7,e,void 0),t.d7=e,t.d8&&(t.d8=!1,t.j1(e),t.d5.clear(),t.d4=0)}),new D().i(Zi,`com.raquo.laminar.inserters.ChildTextInserter$`,{cF:1});var Qi;function $i(){return Qi||=new Zi,Qi}function ea(e,t,n,r,i){this.d6=null,this.d7=null,this.d8=!1,this.d4=0,this.d5=null,this.d6=e,this.d7=t,this.d8=n,this.d4=r,this.d5=i}S=ea.prototype=new T,S.constructor=ea,S.j1=(function(e){var t=this.d4,n=0;for(n=t;n>0;){var r=e.A().nextSibling;if(r===null)n=0;else{var i=this.d5.get(r);i===void 0?n=0:i!==void 0&&(ka().iW(this.d6,i),n=n-1|0)}}}),new D().i(ea,`com.raquo.laminar.inserters.InsertContext`,{cH:1});function ta(){}S=ta.prototype=new T,S.constructor=ta,S.j6=(function(e,t,n){var r=new wu(``);return ka().aS(e,r,n),this.jp(e,r,t)}),S.jp=(function(e,t,n){return new ea(e,t,n,0,n?/* @__PURE__ */ new Map:null)}),new D().i(ta,`com.raquo.laminar.inserters.InsertContext$`,{cI:1});var na;function ra(){return na||=new ta,na}function ia(e){this.cf=null,this.cf=e}S=ia.prototype=new T,S.constructor=ia,S.dV=(function(e,t){try{this.cf.dE(e,t)}catch(e){var n=e instanceof Vc?e:new Z(e);z().a5(n)}}),S.hD=(function(e){return new ia(new ed(((t,n)=>{this.cf.dE(t,n),e.cf.dE(t,n)})))}),S.gb=(function(e){return e===void 0?this:e.hD(this)}),new D().i(ia,`com.raquo.laminar.inserters.InserterHooks`,{cJ:1});function aa(){}S=aa.prototype=new T,S.constructor=aa,S.dT=(function(e,t){return new md(e,void 0)}),new D().i(aa,`com.raquo.laminar.inserters.StaticChildInserter$`,{cL:1});var oa;function sa(){return oa||=new aa,oa}function ca(e,t){this.eT=null,this.eS=null,this.eT=e,this.eS=t}S=ca.prototype=new T,S.constructor=ca,S.n=(function(e){return new bl(this.eT,this.eS.b(e),new td(((e,t,n)=>{O().gP(e,t,n)})))}),new D().i(ca,`com.raquo.laminar.keys.DerivedStyleProp`,{cO:1});function la(e,t,n,r){this.bp=null,this.dc=!1,this.db=!1,this.da=null,this.bp=e,this.dc=t,this.db=n,this.da=r}S=la.prototype=new T,S.constructor=la,S.iD=(function(e){var t=new K((t=>{var n=this.da.b(t);return n.c()?J():new Y(e.b(n.s()))}));return new la(this.bp,this.dc,this.db,t)}),new D().i(la,`com.raquo.laminar.keys.EventProcessor`,{cP:1});function ua(){}S=ua.prototype=new T,S.constructor=ua,S.dN=(function(e,t,n){return new la(e,t,n,new K((e=>new Y(e))))}),new D().i(ua,`com.raquo.laminar.keys.EventProcessor$`,{cQ:1});var da;function fa(){return da||=new ua,da}function pa(){}S=pa.prototype=new T,S.constructor=pa;function ma(){}ma.prototype=S;function ha(){this.gZ=null,this.h0=null,this.h1=null,this.h2=null,this.gZ=`http://www.w3.org/2000/svg`,this.h0=`http://www.w3.org/1999/xlink`,this.h1=`http://www.w3.org/XML/1998/namespace`,this.h2=`http://www.w3.org/2000/xmlns/`}S=ha.prototype=new T,S.constructor=ha,S.iH=(function(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`xlink`:return`http://www.w3.org/1999/xlink`;case`xml`:return`http://www.w3.org/XML/1998/namespace`;case`xmlns`:return`http://www.w3.org/2000/xmlns/`;default:throw new Gd(e)}}),new D().i(ha,`com.raquo.laminar.keys.SvgAttr$`,{cT:1});var ga;function _a(){return ga||=new ha,ga}function va(e,t){this.eU=null,this.df=null,this.eU=e,this.df=t}S=va.prototype=new T,S.constructor=va,new D().i(va,`com.raquo.laminar.lifecycle.MountContext`,{cU:1});var k=new D().i(1,`com.raquo.laminar.modifiers.Modifier`,{N:1});function ya(){this.h3=null,ba=this,this.h3=new fc}S=ya.prototype=new T,S.constructor=ya,new D().i(ya,`com.raquo.laminar.modifiers.Modifier$`,{cY:1});var ba;function xa(){return ba||=new ya,ba}function Sa(){this.cl=null,Ca=this,this.cl=new mc}S=Sa.prototype=new T,S.constructor=Sa,new D().i(Sa,`com.raquo.laminar.modifiers.RenderableNode$`,{d2:1});var Ca;function wa(){return Ca||=new Sa,Ca}function Ta(){this.t=null,Ea=this,this.t=new vc(new K((e=>e)),A()),new vc(new K((e=>``+(e|0))),A()),new vc(new K((e=>``+ +e)),A()),new vc(new K((e=>``+!!e)),A()),new vc(new K((e=>e.jk())),A())}S=Ta.prototype=new T,S.constructor=Ta,new D().i(Ta,`com.raquo.laminar.modifiers.RenderableText$`,{d7:1});var Ea;function A(){return Ea||=new Ta,Ea}function Da(){}S=Da.prototype=new T,S.constructor=Da,S.aS=(function(e,t,n){var r=new Y(e);t.bj(r),n!==void 0&&n.dV(e,t);var i=O().hq(e.A(),t.A());return i&&t.bi(r),i}),S.iW=(function(e,t){var n=!1;return N().z(t.A().parentNode,e.A())&&(t.bj(J()),n=O().iX(e.A(),t.A()),t.bi(J())),n}),S.j4=(function(e,t,n,r){var i=!1;if(t!==n&&t.dJ().hE(e)){var a=new Y(e);t.bj(J()),n.bj(a),r!==void 0&&r.dV(e,n),i=O().j5(e.A(),n.A(),t.A()),i&&(t.bi(J()),n.bi(a))}return i}),new D().i(Da,`com.raquo.laminar.nodes.ParentNode$`,{db:1});var Oa;function ka(){return Oa||=new Da,Oa}function Aa(){}S=Aa.prototype=new T,S.constructor=Aa,S.jo=(function(e,t){return gi().cO(e.ad,new K((n=>t.b(new va(e,n)))),!0)}),new D().i(Aa,`com.raquo.laminar.nodes.ReactiveElement$`,{dd:1});var ja;function Ma(){return ja||=new Aa,ja}function Na(e){this.f4=null,this.f4=new ia(new ed(((t,n)=>{matchResult1:{var r=n.A();if(r instanceof Element){r.setAttribute(`slot`,e);break matchResult1}if(r instanceof Text){var i=z(),a=r.textContent,o=t.A().tagName;i.a5(H(new U,"Error: You tried to insert a raw text node `"+a+"` into the `"+e+"` slot of <"+o.toLowerCase()+`>.
 - Cause: This is not possible: named slots only accept elements. Your node was inserted into the default slot instead.
 - Suggestion: Wrap your text node into \`span()\``));break matchResult1}}})))}S=Na.prototype=new T,S.constructor=Na,S.dF=(function(e){return e.dQ(new K((e=>e.gT(this.f4))))}),new D().i(Na,`com.raquo.laminar.nodes.Slot`,{dg:1});function Pa(){}S=Pa.prototype=new T,S.constructor=Pa,new D().i(Pa,`com.raquo.laminar.receivers.ChildTextReceiver$`,{di:1});var Fa;function Ia(){return Fa||=new Pa,Fa}function La(){}S=La.prototype=new T,S.constructor=La,S.h9=(function(e){return G().k.gk().aT(new Q([G().k.hP().i6(),G().k.i7().ju(),G().k.hm().hB(),G().k.ie().iR().n(16),_l(G().k,e,_c())]))}),new D().i(La,`doc.Examples$package$`,{dl:1});var Ra;function za(){return Ra||=new La,Ra}function Ba(){}S=Ba.prototype=new T,S.constructor=Ba,S.ho=(function(){Ha().hZ(),Ha().i0(),Ha().i1(),Ha().i2(),Ha().i3()}),S.hZ=(function(){var e=document.querySelector(`#example1`);rs().bW(e).c()||(G(),new xl(e,Nl().u(new Q(I().g(new(M.r()).C([new W((e=>e.bM().n(`shipping`))),new W((e=>e.iz().n(`Checkout progress`)))]))),new Q(I().g(new(k.r()).C([V().u(new Q(I().g(new(M.r()).C([new W((e=>e.C().n(`cart`))),new W((e=>e.dK().n(!0)))]))),new Q(I().g(new(k.r()).C([B(G().k,`Cart`,A().t)])))),V().u(new Q(I().g(new(M.r()).C([new W((e=>e.C().n(`shipping`)))]))),new Q(I().g(new(k.r()).C([B(G().k,`Shipping`,A().t)])))),V().u(new Q(I().g(new(M.r()).C([new W((e=>e.C().n(`payment`)))]))),new Q(I().g(new(k.r()).C([B(G().k,`Payment`,A().t)]))))]))))))}),S.i0=(function(){var e=document.querySelector(`#example2`);rs().bW(e).c()||(G(),new xl(e,Nl().u(new Q(I().g(new(M.r()).C([new W((e=>e.bM().n(`profile`))),new W((e=>e.gh().n(!0)))]))),new Q(I().g(new(k.r()).C([V().u(new Q(I().g(new(M.r()).C([new W((e=>e.C().n(`profile`)))]))),new Q(I().g(new(k.r()).C([B(G().k,`Profile`,A().t)])))),V().u(new Q(I().g(new(M.r()).C([new W((e=>e.C().n(`preferences`)))]))),new Q(I().g(new(k.r()).C([B(G().k,`Preferences`,A().t)])))),V().u(new Q(I().g(new(M.r()).C([new W((e=>e.C().n(`review`))),new W((e=>e.hO().n(!0)))]))),new Q(I().g(new(k.r()).C([B(G().k,`Review`,A().t)]))))]))))))}),S.i1=(function(){var e=document.querySelector(`#example3`);rs().bW(e).c()||(G(),new xl(e,Nl().u(new Q(I().g(new(M.r()).C([new W((e=>e.bM().n(`details`))),new W((e=>e.iA().n(!0))),new W((e=>e.gh().n(!0)))]))),new Q(I().g(new(k.r()).C([V().u(new Q(I().g(new(M.r()).C([new W((e=>e.C().n(`account`))),new W((e=>e.dK().n(!0)))]))),new Q(I().g(new(k.r()).C([B(G().k,`Account`,A().t)])))),V().u(new Q(I().g(new(M.r()).C([new W((e=>e.C().n(`details`)))]))),new Q(I().g(new(k.r()).C([B(G().k,`Details`,A().t)])))),V().u(new Q(I().g(new(M.r()).C([new W((e=>e.C().n(`confirm`)))]))),new Q(I().g(new(k.r()).C([B(G().k,`Confirm`,A().t)]))))]))))))}),S.i2=(function(){var e=document.querySelector(`#example4`);rs().bW(e).c()||(G(),new xl(e,Nl().u(new Q(I().g(new(M.r()).C([new W((e=>e.bM().n(`review`))),new W((e=>e.iM().jq()))]))),new Q(I().g(new(k.r()).C([V().u(new Q(I().g(new(M.r()).C([new W((e=>e.C().n(`draft`))),new W((e=>e.dK().n(!0))),new W((e=>gl(G().k,Ka().dM().dF(new Q(I().g(new(hd.r()).C([(G(),sa().dT(G().k.dZ().aT(new Q(I().g(new(k.r()).C([B(G().k,`Write your first draft.`,A().t)])))),wa().cl))])))),qo().co,_c())))]))),new Q(I().g(new(k.r()).C([B(G().k,`Draft`,A().t)])))),V().u(new Q(I().g(new(M.r()).C([new W((e=>e.C().n(`review`))),new W((e=>gl(G().k,Ka().dM().dF(new Q(I().g(new(hd.r()).C([(G(),sa().dT(G().k.dZ().aT(new Q(I().g(new(k.r()).C([B(G().k,`Check the details.`,A().t)])))),wa().cl))])))),qo().co,_c())))]))),new Q(I().g(new(k.r()).C([B(G().k,`Review`,A().t)])))),V().u(new Q(I().g(new(M.r()).C([new W((e=>e.C().n(`publish`))),new W((e=>gl(G().k,Ka().dM().dF(new Q(I().g(new(hd.r()).C([(G(),sa().dT(G().k.dZ().aT(new Q(I().g(new(k.r()).C([B(G().k,`Share the finished work.`,A().t)])))),wa().cl))])))),qo().co,_c())))]))),new Q(I().g(new(k.r()).C([B(G().k,`Publish`,A().t)]))))]))))))}),S.i3=(function(){var e=document.querySelector(`#example5`);if(!rs().bW(e).c()){G();var t=G().k.er.ht(`cart`),n=Nl().u(new Q(I().g(new(M.r()).C([new W((e=>e.bM().n(`cart`))),new W((e=>new vl((G(),fa().dN(e.iK(),!1,!1)).iD(new W((e=>e.detail.name))),new K((e=>{t.ej.dU(e)})))))]))),new Q(I().g(new(k.r()).C([V().u(new Q(I().g(new(M.r()).C([new W((e=>e.C().n(`cart`)))]))),new Q(I().g(new(k.r()).C([B(G().k,`Cart`,A().t)])))),V().u(new Q(I().g(new(M.r()).C([new W((e=>e.C().n(`shipping`)))]))),new Q(I().g(new(k.r()).C([B(G().k,`Shipping`,A().t)])))),V().u(new Q(I().g(new(M.r()).C([new W((e=>e.C().n(`payment`)))]))),new Q(I().g(new(k.r()).C([B(G().k,`Payment`,A().t)]))))]))));new xl(e,G().k.gk().aT(new Q(I().g(new(k.r()).C([n,G().k.iP().aT(new Q(I().g(new(k.r()).C([B(G().k,`Current step: `,A().t),(G(),$i().hr(t.ei,A().t))])))),za().h9(new Q(I().g(new(Gf.r()).C([Tl().u(new Q(I().g(new(M.r()).C([]))),new Q(I().g(new(k.r()).C([B(G().k,`Back`,A().t),new vl((G(),fa().dN(G().k.gJ(),!1,!1)),new W((e=>{n.I.previous()})))])))),Tl().u(new Q(I().g(new(M.r()).C([]))),new Q(I().g(new(k.r()).C([B(G().k,`Next`,A().t),new vl((G(),fa().dN(G().k.gJ(),!1,!1)),new W((e=>{n.I.next()})))]))))]))))])))))}}),new D().i(Ba,`examples.stepper.Main$package$`,{dm:1});var Va;function Ha(){return Va||=new Ba,Va}function Ua(e){try{Ha().ho()}catch(e){throw e}}function Wa(){this.ff=null,this.fg=!1}S=Wa.prototype=new T,S.constructor=Wa,S.dM=(function(){return this.fg||=(this.ff=new Na(`description`),!0),this.ff}),new D().i(Wa,`io.github.nguyenyou.webawesome.laminar.Step$slots$`,{dr:1});var Ga;function Ka(){return Ga||=new Wa,Ga}function qa(e,t){for(var n=j().aa(`^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$`),r=[],i=0;i<(t.length|0);){var a=t[i];if(a!==``){var o=n.exec(a);if(o!==null){var s=Ja(e,o[1]),c=s[0],l=s[1],u=o[2],d=o[3],f=parseInt(d),p=o[4];r.push(new Ic(c,l,u,f|0,p===void 0?-1:parseInt(p)|0))}else r.push(new Ic(`<jscode>`,a,null,-1,-1))|0}i=1+i|0}var ee=r.length|0,te=new(Lc.r()).C(ee);for(i=0;i<ee;)te.a[i]=r[i],i=1+i|0;return te}function Ja(e,t){var n=j().aa(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$`),r=j().aa(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$`),i=j().aa(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$`),a=j().aa(`^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$`),o=j().aa(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$`),s=n.exec(t),c=s===null?r.exec(t):s;if(c!==null)return[Ya(e,c[1]),no(e,c[2])];var l=i.exec(t),u=l===null?a.exec(t):l;if(u!==null)return[Ya(e,u[1]),`<init>`];var d=o.exec(t);return d===null?[`<jscode>`,t]:[Ya(e,d[1]),`<clinit>`]}function Ya(e,t){var n=Za(e);if(ko().du.call(n,t))var r=Za(e)[t];else var r=mo(e,0,t);return r.split(`_`).join(`.`).split(`＿`).join(`_`)}function Xa(e){if(!((1&e.S)<<24>>24)){var t={};t.O=`java_lang_Object`,t.T=`java_lang_String`;for(var n=0;n<=22;){if(n>=2){var r=`T`+n;t[r]=`scala_Tuple`+n}var i=`F`+n;t[i]=`scala_Function`+n,n=1+n|0}e.dr=t,e.S=(1|e.S)<<24>>24}return e.dr}function Za(e){return(1&e.S)<<24>>24?e.dr:Xa(e)}function Qa(e){if(!((2&e.S)<<24>>24)){var t={};t.sjsr_=`scala_scalajs_runtime_`,t.sjs_=`scala_scalajs_`,t.sci_=`scala_collection_immutable_`,t.scm_=`scala_collection_mutable_`,t.scg_=`scala_collection_generic_`,t.sc_=`scala_collection_`,t.sr_=`scala_runtime_`,t.s_=`scala_`,t.jl_=`java_lang_`,t.ju_=`java_util_`,e.ds=t,e.S=(2|e.S)<<24>>24}return e.ds}function $a(e){return(2&e.S)<<24>>24?e.ds:Qa(e)}function eo(e){return(4&e.S)<<24>>24||(e.dq=Object.keys($a(e)),e.S=(4|e.S)<<24>>24),e.dq}function to(e){return(4&e.S)<<24>>24?e.dq:eo(e)}function no(e,t){if(t.startsWith(`init___`))return`<init>`;var n=t.indexOf(`__`)|0;return n<0?t:t.substring(0,n)}function ro(e,t){return t?t.arguments&&t.stack?io(e,t):t.stack&&t.sourceURL?so(e,t):t.stack&&t.number?oo(e,t):t.stack&&t.fileName?ao(e,t):t.message&&t[`opera#sourceloc`]?t.stacktrace?t.message.indexOf(`
`)>-1&&t.message.split(`
`).length>t.stacktrace.split(`
`).length?co(e,t):lo(e,t):co(e,t):t.message&&t.stack&&t.stacktrace?t.stacktrace.indexOf(`called from line`)<0?uo(e,t):fo(e,t):t.stack&&!t.fileName?io(e,t):po(e,t):[]}function io(e,t){return(t.stack+`
`).replace(j().aa(`^[\\s\\S]+?\\s+at\\s+`),` at `).replace(j().G(`^\\s+(at eval )?at\\s+`,`gm`),``).replace(j().G(`^([^\\(]+?)([\\n])`,`gm`),`{anonymous}() ($1)$2`).replace(j().G(`^Object.<anonymous>\\s*\\(([^\\)]+)\\)`,`gm`),`{anonymous}() ($1)`).replace(j().G(`^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(0,-1)}function ao(e,t){return t.stack.replace(j().G(`(?:\\n@:0)?\\s+$`,`m`),``).replace(j().G(`^(?:\\((\\S*)\\))?@`,`gm`),`{anonymous}($1)@`).split(`
`)}function oo(e,t){return t.stack.replace(j().G(`^\\s*at\\s+(.*)$`,`gm`),`$1`).replace(j().G(`^Anonymous function\\s+`,`gm`),`{anonymous}() `).replace(j().G(`^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(1)}function so(e,t){return t.stack.replace(j().G(`\\[native code\\]\\n`,`m`),``).replace(j().G(`^(?=\\w+Error\\:).*$\\n`,`m`),``).replace(j().G(`^@`,`gm`),`{anonymous}()@`).split(`
`)}function co(e,t){for(var n=j().G(`Line (\\d+).*script (?:in )?(\\S+)`,`i`),r=t.message.split(`
`),i=[],a=2,o=r.length|0;a<o;){var s=n.exec(r[a]);s!==null&&i.push(`{anonymous}()@`+s[2]+`:`+s[1])|0,a=2+a|0}return i}function lo(e,t){for(var n=j().G(`Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$`,`i`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[3],l=c===void 0?`{anonymous}`:c;i.push(l+`()@`+s[2]+`:`+s[1])|0}a=2+a|0}return i}function uo(e,t){for(var n=j().aa(`^(.*)@(.+):(\\d+)$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[1],l=c===void 0?`global code`:c+`()`;i.push(l+`@`+s[2]+`:`+s[3])|0}a=1+a|0}return i}function fo(e,t){for(var n=j().aa(`^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[4]+`:`+s[1]+`:`+s[2],l=s[2],u=(l===void 0?`global code`:l).replace(j().aa(`<anonymous function: (\\S+)>`),`$1`).replace(j().aa(`<anonymous function>`),`{anonymous}`);i.push(u+`@`+c)|0}a=2+a|0}return i}function po(e,t){return[]}function mo(e,t,n){for(;;)if(t<(to(e).length|0)){var r=to(e)[t];if(n.startsWith(r))return``+$a(e)[r]+n.substring(r.length);t=1+t|0}else return n.startsWith(`L`)?n.substring(1):n}function ho(){this.dr=null,this.ds=null,this.dq=null,this.S=0}S=ho.prototype=new T,S.constructor=ho,S.i4=(function(e){return qa(this,ro(this,e))}),new D().i(ho,`java.lang.StackTrace$`,{dO:1});var go;function _o(){return go||=new ho,go}function vo(){}S=vo.prototype=new T,S.constructor=vo,S.aa=(function(e){return new RegExp(e)}),S.G=(function(e,t){return new RegExp(e,t)}),new D().i(vo,`java.lang.StackTrace$StringRE$`,{dP:1});var yo;function j(){return yo||=new vo,yo}function bo(){this.fu=null,this.h4=null,xo=this,this.fu=new Lp(!1),this.h4=new Lp(!0)}S=bo.prototype=new T,S.constructor=bo,new D().i(bo,`java.lang.System$Streams$`,{dT:1});var xo;function So(){return xo||=new bo,xo}function Co(e){var t={};return t[`java.version`]=`1.8`,t[`java.vm.specification.version`]=`1.8`,t[`java.vm.specification.vendor`]=`Oracle Corporation`,t[`java.vm.specification.name`]=`Java Virtual Machine Specification`,t[`java.vm.name`]=`Scala.js`,t[`java.vm.version`]=`1.22.0`,t[`java.specification.version`]=`1.8`,t[`java.specification.vendor`]=`Oracle Corporation`,t[`java.specification.name`]=`Java Platform API Specification`,t[`file.separator`]=`/`,t[`path.separator`]=`:`,t[`line.separator`]=`
`,t}function wo(){this.dt=null,this.fv=null,To=this,this.dt=Co(this),this.fv=null}S=wo.prototype=new T,S.constructor=wo,S.gz=(function(e,t){if(this.dt!==null){var n=this.dt;return ko().du.call(n,e)?n[e]:t}return this.fv.gz(e,t)}),new D().i(wo,`java.lang.System$SystemProperties$`,{dU:1});var To;function Eo(){return To||=new wo,To}function Do(){this.du=null,Oo=this,this.du=Object.prototype.hasOwnProperty}S=Do.prototype=new T,S.constructor=Do,new D().i(Do,`java.lang.Utils$Cache$`,{dX:1});var Oo;function ko(){return Oo||=new Do,Oo}function Ao(e,t){return e===t}function jo(e){return 0}function Mo(e,t){return!!(e&&e.$classData&&e.$classData.D===t&&e.$classData.B.n.aK)}var No=new D().i(0,`java.lang.Void`,{aK:1},(e=>e===void 0));function Po(e,t){throw kd(new jd,`argument type mismatch`)}function Fo(){}S=Fo.prototype=new T,S.constructor=Fo,S.a9=(function(e){return e instanceof E||e instanceof mr||e instanceof hr||e instanceof gr||e instanceof _r||e instanceof vr?e.a.length:e instanceof yr?e.a.length>>>1|0:(e instanceof br||e instanceof xr||Po(this,e),e.a.length)}),new D().i(Fo,`java.lang.reflect.Array$`,{dZ:1});var Io;function Lo(){return Io||=new Fo,Io}function Ro(){}S=Ro.prototype=new T,S.constructor=Ro,S.hx=(function(e,t){for(var n=0,r=e.a.length;;)if(n===r)return~n;else{var i=(n+r|0)>>>1|0,a=e.a[i],o=t===a?0:t<a?-1:1;if(o<0){r=i;continue}if(o!==0){n=1+i|0;continue}return i}}),S.gp=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length>>>1|0;if((t.a.length>>>1|0)!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a,o=i<<1,s=a[o],c=a[o+1|0],l=r,u=t.a,d=l<<1,f=u[d],p=u[d+1|0];if((s^f|c^p)!==0)return!1;r=1+r|0}return!0}),S.go=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),S.gq=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),S.gn=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),S.gm=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),S.gr=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),new D().i(Ro,`java.util.Arrays$`,{e0:1});var zo;function Bo(){return zo||=new Ro,zo}function Vo(e,t){return Wo().gS(e,t)}function Ho(){}S=Ho.prototype=new T,S.constructor=Ho,S.gS=(function(e,t){if(t===e>>31)return``+e;if(-2097152&(t^t>>10)){var n=t>>31,r=e^n,i=r-n|0,a=4294967296*(((t^n)+(i>>>0<r>>>0|0)|0)>>>0)+(i>>>0),o=+Math.floor(1.0000000000000265e-9*a),s=i-Math.imul(1e9,o|0)|0;s<0&&(--o,s=1e9+s|0);var c=``+s,l=o,u=c.length,d=``+l+`000000000`.substring(u)+c;return t<0?`-`+d:d}return``+(4294967296*t+(e>>>0))}),S.gy=(function(e){if(e<-0x8000000000000000)return w(0,-2147483648);if(e>=0x8000000000000000)return w(-1,2147483647);var t=e|0,n=23283064365386963e-26*e|0;return w(t,e<0&&t!==0?n-1|0:n)}),S.hQ=(function(e,t,n,r){var i=t>>31,a=e^i,o=a-i|0,s=(t^i)+(o>>>0<a>>>0|0)|0,c=r>>31,l=n^c,u=l-c|0,d=(r^c)+(u>>>0<l>>>0|0)|0;if(d|-2097152&u){var f=(4294967296*(s>>>0)+(o>>>0))/(4294967296*(d>>>0)+(u>>>0))+.00390625,p=f|0,ee=23283064365386963e-26*f|0,te=65535&u,ne=u>>>16|0,re=65535&p,m=p>>>16|0,ie=Math.imul(te,re),ae=Math.imul(ne,re),oe=Math.imul(te,m),se=ie+((ae+oe|0)<<16)|0,ce=(ie>>>16|0)+oe|0;if(((s-((((Math.imul(u,ee)+Math.imul(d,p)|0)+Math.imul(ne,m)|0)+(ce>>>16|0)|0)+(((65535&ce)+ae|0)>>>16|0)|0)|0)-((o-se|0)>>>0>o>>>0|0)|0)<0)var le=p-1|0,ue=(ee-1|0)+(le!==-1|0)|0,de=le,fe=ue;else var de=p,fe=ee}else var pe=(s>>>0)/(Xn(u)>>>0)|0,de=(4294967296*(s-Math.imul(u,pe)|0)+(o>>>0))/u|0,fe=pe;if((t^r)>=0)return w(de,fe);var me=-de|0;return w(me,(-fe|0)-(me!==0|0)|0)}),S.hR=(function(e,t,n,r){if(!(r|-2097152&n)){var i=(t>>>0)/(Xn(n)>>>0)|0;return w((4294967296*(t-Math.imul(n,i)|0)+(e>>>0))/n|0,i)}if(r>=0){var a=(4294967296*(t>>>0)+(e>>>0))/(4294967296*(r>>>0)+(n>>>0))+.00390625,o=a|0,s=23283064365386963e-26*a|0,c=65535&n,l=n>>>16|0,u=65535&o,d=o>>>16|0,f=Math.imul(c,u),p=Math.imul(l,u),ee=Math.imul(c,d),te=f+((p+ee|0)<<16)|0,ne=(f>>>16|0)+ee|0;if(((t-((((Math.imul(n,s)+Math.imul(r,o)|0)+Math.imul(l,d)|0)+(ne>>>16|0)|0)+(((65535&ne)+p|0)>>>16|0)|0)|0)-((e-te|0)>>>0>e>>>0|0)|0)<0){var re=o-1|0;return w(re,(s-1|0)+(re!==-1|0)|0)}return w(o,s)}return(t===r?e>>>0<n>>>0:t>>>0<r>>>0)?w(0,0):w(1,0)}),S.iU=(function(e,t,n,r){var i=t>>31,a=e^i,o=a-i|0,s=(t^i)+(o>>>0<a>>>0|0)|0,c=r>>31,l=n^c,u=l-c|0,d=(r^c)+(u>>>0<l>>>0|0)|0;if(d|-2097152&u){var f=(4294967296*(s>>>0)+(o>>>0))/(4294967296*(d>>>0)+(u>>>0))+.00390625,p=f|0,ee=23283064365386963e-26*f|0,te=65535&u,ne=u>>>16|0,re=65535&p,m=p>>>16|0,ie=Math.imul(te,re),ae=Math.imul(ne,re),oe=Math.imul(te,m),se=ie+((ae+oe|0)<<16)|0,ce=(ie>>>16|0)+oe|0,le=(((Math.imul(u,ee)+Math.imul(d,p)|0)+Math.imul(ne,m)|0)+(ce>>>16|0)|0)+(((65535&ce)+ae|0)>>>16|0)|0,ue=o-se|0,de=(s-le|0)-(ue>>>0>o>>>0|0)|0;if(de<0)var fe=ue+u|0,pe=(de+d|0)+(fe>>>0<ue>>>0|0)|0,me=fe,he=pe;else var me=ue,he=de}else var ge=(4294967296*((s>>>0)%(Xn(u)>>>0)|0)+(o>>>0))/u|0,me=o-Math.imul(u,ge)|0,he=0;if(t<0){var _e=-me|0;return w(_e,(-he|0)-(_e!==0|0)|0)}return w(me,he)}),S.iV=(function(e,t,n,r){if(!(r|-2097152&n)){var i=(4294967296*((t>>>0)%(Xn(n)>>>0)|0)+(e>>>0))/n|0;return w(e-Math.imul(n,i)|0,0)}if(r>=0){var a=(4294967296*(t>>>0)+(e>>>0))/(4294967296*(r>>>0)+(n>>>0))+.00390625,o=a|0,s=23283064365386963e-26*a|0,c=65535&n,l=n>>>16|0,u=65535&o,d=o>>>16|0,f=Math.imul(c,u),p=Math.imul(l,u),ee=Math.imul(c,d),te=f+((p+ee|0)<<16)|0,ne=(f>>>16|0)+ee|0,re=(((Math.imul(n,s)+Math.imul(r,o)|0)+Math.imul(l,d)|0)+(ne>>>16|0)|0)+(((65535&ne)+p|0)>>>16|0)|0,m=e-te|0,ie=(t-re|0)-(m>>>0>e>>>0|0)|0;if(ie<0){var ae=m+n|0;return w(ae,(ie+r|0)+(ae>>>0<m>>>0|0)|0)}return w(m,ie)}if(t===r?e>>>0<n>>>0:t>>>0<r>>>0)return w(e,t);var oe=e-n|0;return w(oe,(t-r|0)-(oe>>>0>e>>>0|0)|0)}),new D().i(Ho,`org.scalajs.linker.runtime.RuntimeLong$`,{e3:1});var Uo;function Wo(){return Uo||=new Ho,Uo}function Go(){this.co=null,Ko=this,this.co=new Ud}S=Go.prototype=new T,S.constructor=Go,new D().i(Go,`scala.$less$colon$less$`,{e6:1});var Ko;function qo(){return Ko||=new Go,Ko}function Jo(e,t,n,r,i,a){for(var o=n,s=i,c=n+a|0;o<c;)P().cy(r,s,P().aV(t,o)),o=1+o|0,s=1+s|0}function Yo(){}S=Yo.prototype=new T,S.constructor=Yo,S.gt=(function(e,t){var n=e.q();if(n>-1){for(var r=t.dS(n),i=e.e(),a=0;a<n;)P().cy(r,a,i.h()),a=1+a|0;return r}var o=null,s=t.cL(),c=s===Tr.l();o=[];for(var l=e.e();l.j();){var u=l.h(),d=c?ur(u):u===null?Ds().dY(s):u;o.push(d)}return Ds().dX(s===Cr.l()?No.l():s===Ns.l()||s===ru.l()?Sr.l():s,o)}),S.cz=(function(e,t,n,r,i){var a=Gn(e);a.ac.Z&&Gn(n).ac.R(a.ac)?e.ab(t,n,r,i):Jo(this,e,t,n,r,i)}),S.gs=(function(e,t){if(e===t)return!0;if(e.a.length!==t.a.length)return!1;for(var n=e.a.length,r=0;r<n;){if(!N().z(e.a[r],t.a[r]))return!1;r=1+r|0}return!0}),new D().i(Yo,`scala.Array$`,{e8:1});var Xo;function Zo(){return Xo||=new Yo,Xo}var Qo=new D().i(1,`scala.Function0`,{ai:1}),M=new D().i(1,`scala.Function1`,{e:1});function $o(){}S=$o.prototype=new T,S.constructor=$o;function es(){}es.prototype=S;function ts(){}S=ts.prototype=new T,S.constructor=ts,S.bW=(function(e){return e===null?J():new Y(e)}),new D().i(ts,`scala.Option$`,{eg:1});var ns;function rs(){return ns||=new ts,ns}function is(){this.fC=null,this.cq=null,as=this,this.fC=new W((e=>this.fC)),this.cq=new zu}S=is.prototype=new T,S.constructor=is,new D().i(is,`scala.PartialFunction$`,{eh:1});var as;function os(){return as||=new is,as}function ss(){this.fF=null,cs=this,this.fF=new W((e=>ls().fF))}S=ss.prototype=new T,S.constructor=ss,S.i9=(function(e,t){var n=Lo().a9(e),r=0;if(e instanceof E)for(;r<n;)t.b(e.a[r]),r=1+r|0;else if(e instanceof vr)for(;r<n;)t.b(e.a[r]),r=1+r|0;else if(e instanceof xr)for(;r<n;)t.b(e.a[r]),r=1+r|0;else if(e instanceof yr)for(;r<n;){var i=e.a,a=r<<1,o=i[a],s=i[a+1|0];t.b(w(o,s)),r=1+r|0}else if(e instanceof br)for(;r<n;)t.b(e.a[r]),r=1+r|0;else if(e instanceof hr)for(;r<n;)t.b(cr(e.a[r])),r=1+r|0;else if(e instanceof gr)for(;r<n;)t.b(e.a[r]),r=1+r|0;else if(e instanceof _r)for(;r<n;)t.b(e.a[r]),r=1+r|0;else if(e instanceof mr)for(;r<n;)t.b(e.a[r]),r=1+r|0;else throw new Gd(e)}),new D().i(ss,`scala.collection.ArrayOps$`,{em:1});var cs;function ls(){return cs||=new ss,cs}function us(e,t){for(var n=e.e();n.j();)t.b(n.h())}function ds(e,t,n,r){var i=e.e(),a=n;matchResult18:{var o,s=e.q();if(s===-1){var o=Lo().a9(t);break matchResult18}var o=s}for(var c=Lo().a9(t),l=r<o?r:o,u=n<0?c:c-n|0,d=u<l?u:l,f=n+(d<0?0:d)|0;a<f&&i.j();)P().cy(t,a,i.h()),a=1+a|0;return a-n|0}function fs(e,t,n,r){return e.q()===0?``+t+r:e.bf(eh(new th),t,n,r).M.p}function ps(e,t,n,r,i){var a=t.M;n.length!==0&&(a.p=``+a.p+n);var o=e.e();if(o.j()){var s=o.h();for(a.p=``+a.p+s;o.j();){r.length!==0&&(a.p=``+a.p+r);var c=o.h();a.p=``+a.p+c}}return i.length!==0&&(a.p=``+a.p+i),t}function ms(e,t){if(e.q()>=0){var n=e.q(),r=t.dS(n);return e.aK(r,0,2147483647),r}var i=null,a=t.cL(),o=a===Tr.l();i=[];for(var s=e.e();s.j();){var c=s.h(),l=o?ur(c):c===null?Ds().dY(a):c;i.push(l)}return Ds().dX(a===Cr.l()?No.l():a===Ns.l()||a===ru.l()?Sr.l():a,i)}function hs(e,t){this.fH=null,this.bB=null,this.fH=e,this.bB=t}S=hs.prototype=new T,S.constructor=hs,S.ip=(function(){return this.fH.N().e()}),new D().i(hs,`scala.collection.Iterator$ConcatIteratorCell`,{ev:1});function gs(){this.fI=null,_s=this,this.fI=new W((e=>this.fI))}S=gs.prototype=new T,S.constructor=gs,new D().i(gs,`scala.collection.StringOps$`,{eB:1});var _s;function vs(){return _s||=new gs,_s}function ys(){}S=ys.prototype=new T,S.constructor=ys,S.gB=(function(e,t){return Nd(new Fd,e+` is out of bounds (min 0, max `+t+`)`)}),new D().i(ys,`scala.collection.generic.CommonErrors$`,{eC:1});var bs;function xs(){return bs||=new ys,bs}function Ss(){this.fM=0,Cs=this;try{vs();var e=Nc().iw(Eo().gz(`scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength`,`64`),10,214748364)}catch(t){if(0)var e;else{var e;throw t}}this.fM=e}S=Ss.prototype=new T,S.constructor=Ss,new D().i(Ss,`scala.collection.immutable.IndexedSeqDefaults$`,{eF:1});var Cs;function ws(){return Cs||=new Ss,Cs}function Ts(){}S=Ts.prototype=new T,S.constructor=Ts,S.dY=(function(e){return e===Er.l()||e===Dr.l()||e===Tr.l()||e===Or.l()?0:e===kr.l()?w(0,0):e===Ar.l()||e===jr.l()?0:e===wr.l()?!1:e===Cr.l()?void 0:null}),S.dX=(function(e,t){var n=t.length|0;if(e===Tr.l()){for(var r=new hr(n),i=0;i!==n;)r.a[i]=65535&(t[i]|0),i=1+i|0;return r}for(var a=e.ac.U(n),o=0;o!==n;)P().cy(a,o,t[o]),o=1+o|0;return a}),new D().i(Ts,`scala.collection.mutable.ArrayBuilder$`,{eN:1});var Es;function Ds(){return Es||=new Ts,Es}function Os(){}S=Os.prototype=new T,S.constructor=Os,S.gg=(function(e,t,n){if(t!==e)throw new Vd(n)}),new D().i(Os,`scala.collection.mutable.MutationTracker$`,{eV:1});var ks;function As(){return ks||=new Os,ks}function js(){}S=js.prototype=new T,S.constructor=js,S.z=(function(e,t){return e===t||(Fc(e)?this.hY(e,t):e instanceof Wn?this.hW(e,t):e===null?t===null:qn(e,t))}),S.hY=(function(e,t){if(Fc(t))return this.hX(e,t);if(t instanceof Wn){if(typeof e==`number`)return+e===t.c;if(e instanceof C){var n=dr(e),r=n.l,i=n.h,a=t.c,o=a>>31;return(r^a|i^o)===0}return e===null?t===null:qn(e,t)}return e===null?t===null:qn(e,t)}),S.hX=(function(e,t){if(typeof e==`number`){var n=+e;if(typeof t==`number`)return n===+t;if(t instanceof C){var r=dr(t),i=r.l;return n===4294967296*r.h+(i>>>0)}return!1}if(e instanceof C){var a=dr(e),o=a.l,s=a.h;if(t instanceof C){var c=dr(t),l=c.l,u=c.h;return(o^l|s^u)===0}if(typeof t==`number`){var d=+t;return 4294967296*s+(o>>>0)===d}return!1}return e===null?t===null:qn(e,t)}),S.hW=(function(e,t){if(t instanceof Wn)return e.c===t.c;if(Fc(t)){if(typeof t==`number`)return+t===e.c;if(t instanceof C){var n=dr(t),r=n.l,i=n.h,a=e.c,o=a>>31;return(r^a|i^o)===0}return t===null?e===null:qn(t,e)}return e===null&&t===null}),new D().i(js,`scala.runtime.BoxesRunTime$`,{fa:1});var Ms;function N(){return Ms||=new js,Ms}var Ns=new D().i(0,`scala.runtime.Null$`,{fd:1});function Ps(){}S=Ps.prototype=new T,S.constructor=Ps,S.bh=(function(){throw Ld(new q,`tried to cast away nullability, but value is null`)}),new D().i(Ps,`scala.runtime.Scala3RunTime$`,{ff:1});var Fs;function Is(){return Fs||=new Ps,Fs}function Ls(){}S=Ls.prototype=new T,S.constructor=Ls,S.hn=(function(e){return e===null?Ns.l():Gn(e)}),S.aV=(function(e,t){if(e instanceof E||e instanceof vr||e instanceof xr)return e.a[t];if(e instanceof yr){var n=e.a,r=t<<1;return w(n[r],n[r+1|0])}if(e instanceof br)return e.a[t];if(e instanceof hr)return cr(e.a[t]);if(e instanceof gr||e instanceof _r||e instanceof mr)return e.a[t];throw e===null?Rd(new q):new Gd(e)}),S.cy=(function(e,t,n){if(e instanceof E)e.a[t]=n;else if(e instanceof vr)e.a[t]=n|0;else if(e instanceof xr)e.a[t]=+n;else if(e instanceof yr){var r=dr(n),i=e.a,a=t<<1;i[a]=r.l,i[a+1|0]=r.h}else if(e instanceof br)e.a[t]=Math.fround(n);else if(e instanceof hr)e.a[t]=ur(n);else if(e instanceof gr)e.a[t]=n|0;else if(e instanceof _r)e.a[t]=n|0;else if(e instanceof mr)e.a[t]=!!n;else throw e===null?Rd(new q):new Gd(e)}),S.dC=(function(e){return fs(e.aL(),e.R()+`(`,`,`,`)`)}),S.a6=(function(e){if(e===null)return null;if(e.a.length===0){var t=gp();return Jp(),pp(t)}return new Nm(e)}),new D().i(Ls,`scala.runtime.ScalaRunTime$`,{fg:1});var Rs;function P(){return Rs||=new Ls,Rs}function zs(){}S=zs.prototype=new T,S.constructor=zs,S.o=(function(e,t){var n=this.cI(e,t),r=n;return n=r<<13|r>>>19,Math.imul(5,n)-430675100|0}),S.cI=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|r>>>17,n=Math.imul(461845907,n),e^n}),S.B=(function(e,t){return this.hw(e^t)}),S.hw=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),S.iC=(function(e,t){return t===e>>31?e:e^t}),S.hT=(function(e){var t=Zn(e);if(t===e)return t;var n=Wo().gy(e),r=n.l,i=n.h;if(4294967296*i+(r>>>0)===e)return r^i;var a=e|0;if(a===e&&1/e!=-1/0)return a;if(e!==e)return 2146959360;var o=$n;return o.setFloat64(0,e,!0),(o.getInt32(0,!0)|0)^(o.getInt32(4,!0)|0)}),S.v=(function(e){if(e===null)return 0;if(typeof e==`number`)return this.hT(+e);if(e instanceof C){var t=dr(e);return this.iC(t.l,t.h)}return Jn(e)}),S.is=(function(e){throw Nd(new Fd,``+e)}),new D().i(zs,`scala.runtime.Statics$`,{fi:1});var Bs;function F(){return Bs||=new zs,Bs}function Vs(){}S=Vs.prototype=new T,S.constructor=Vs,S.jd=(function(e,t){return setTimeout((()=>{t.N()}),e)}),new D().i(Vs,`scala.scalajs.js.timers.package$`,{fo:1});var Hs;function Us(){return Hs||=new Vs,Hs}function Ws(){}S=Ws.prototype=new T,S.constructor=Ws,S.jl=(function(e){if(e instanceof Q)return e.cx;var t=[];return e.a3(new W((e=>t.push(e)|0))),t}),new D().i(Ws,`scala.scalajs.runtime.Compat$`,{fx:1});var Gs;function Ks(){return Gs||=new Ws,Gs}function qs(){}S=qs.prototype=new T,S.constructor=qs,S.g=(function(e){for(var t=e.a.length,n=[],r=0;r!==t;){var i=r;n.push(e.a[i]),r=1+r|0}return n}),new D().i(qs,`scala.scalajs.runtime.package$`,{fz:1});var Js;function I(){return Js||=new qs,Js}function Ys(){}S=Ys.prototype=new T,S.constructor=Ys,S.je=(function(e){var t=`Illegal command line`+(e.gA()===0?``:e.gA()===1?` after first argument`:` after `+e.gA()+` arguments`)+`: `+e.jy();Wc().iN().ix(t+`
`)}),new D().i(Ys,`scala.util.CommandLineParser$`,{fA:1});function Xs(e){this.dA=null,this.dA=e}S=Xs.prototype=new T,S.constructor=Xs,S.m=(function(){return`DynamicVariable(`+this.dA+`)`}),new D().i(Xs,`scala.util.DynamicVariable`,{fC:1});function Zs(){}S=Zs.prototype=new T,S.constructor=Zs,S.hu=(function(e){matchAlts1:{matchAlts2:break matchAlts1;return!1}return!0}),S.jm=(function(e){return this.hu(e)?new Y(e):J()}),new D().i(Zs,`scala.util.control.NonFatal$`,{fE:1});var Qs;function $s(){return Qs||=new Zs,Qs}function ec(){}S=ec.prototype=new T,S.constructor=ec;function tc(){}tc.prototype=S,S.o=(function(e,t){var n=this.cI(e,t),r=n;return n=r<<13|r>>>19,Math.imul(5,n)-430675100|0}),S.cI=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|r>>>17,n=Math.imul(461845907,n),e^n}),S.B=(function(e,t){return this.c2(e^t)}),S.c2=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),S.cK=(function(e,t,n){var r=e.P();if(r===0)return n?t:tp(e.R());var i=t;n||(i=this.o(i,tp(e.R())));for(var a=0;a<r;)i=this.o(i,F().v(e.Q(a))),a=1+a|0;return this.B(i,r)}),S.ge=(function(e,t,n){var r=e.P(),i=tp(n===null?e.R():n);if(r===0)return i;var a=t;a=this.o(a,i);for(var o=0;o<r;)a=this.o(a,F().v(e.Q(o))),o=1+o|0;return this.B(a,r)}),S.jn=(function(e,t){for(var n=0,r=0,i=0,a=1,o=e.e();o.j();){var s=o.h(),c=F().v(s);n=n+c|0,r^=c,a=Math.imul(a,1|c),i=1+i|0}var l=t;return l=this.o(l,n),l=this.o(l,r),l=this.cI(l,a),this.B(l,i)}),S.iL=(function(e,t){var n=e.e(),r=t;if(!n.j())return this.B(r,0);var i=n.h();if(!n.j())return this.B(this.o(r,F().v(i)),1);var a=n.h(),o=F().v(i);r=this.o(r,o);for(var s=r,c=F().v(a),l=c-o|0,u=2;n.j();){r=this.o(r,c);var d=F().v(n.h());if(l!==(d-c|0)||l===0){for(r=this.o(r,d),u=1+u|0;n.j();)r=this.o(r,F().v(n.h())),u=1+u|0;return this.B(r,u)}c=d,u=1+u|0}return this.c2(this.o(this.o(s,l),c))}),S.w=(function(e,t){var n=t,r=Lo().a9(e);switch(r){case 0:return this.B(n,0);case 1:return this.B(this.o(n,F().v(P().aV(e,0))),1);default:var i=F().v(P().aV(e,0));n=this.o(n,i);for(var a=n,o=F().v(P().aV(e,1)),s=o-i|0,c=2;c<r;){n=this.o(n,o);var l=F().v(P().aV(e,c));if(s!==(l-o|0)||s===0){for(n=this.o(n,l),c=1+c|0;c<r;)n=this.o(n,F().v(P().aV(e,c))),c=1+c|0;return this.B(n,r)}o=l,c=1+c|0}return this.c2(this.o(this.o(a,s),o))}}),S.iS=(function(e,t,n,r){return this.c2(this.o(this.o(this.o(r,e),t),n))}),S.iq=(function(e,t){var n=t,r=e.f();switch(r){case 0:return this.B(n,0);case 1:return this.B(this.o(n,F().v(e.i(0))),1);default:var i=F().v(e.i(0));n=this.o(n,i);for(var a=n,o=F().v(e.i(1)),s=o-i|0,c=2;c<r;){n=this.o(n,o);var l=F().v(e.i(c));if(s!==(l-o|0)||s===0){for(n=this.o(n,l),c=1+c|0;c<r;)n=this.o(n,F().v(e.i(c))),c=1+c|0;return this.B(n,r)}o=l,c=1+c|0}return this.c2(this.o(this.o(a,s),o))}}),S.iB=(function(e,t){for(var n=0,r=t,i=0,a=0,o=0,s=0,c=e;!c.c();){var l=c.O(),u=c.D(),d=F().v(l);switch(r=this.o(r,d),i){case 0:s=d,i=1;break;case 1:a=d-o|0,i=2;break;case 2:(a!==(d-o|0)||a===0)&&(i=3)}o=d,n=1+n|0,c=u}return i===2?this.iS(s,a,o,t):this.B(r,n)});function nc(e){this.b3=null,this.ec=null,this.cU=!1,this.ec=e,_i(this),this.cU=!1}S=nc.prototype=new T,S.constructor=nc,S.iO=(function(e){this.cU?(xi(e),this.ec.N()):bi(this,e)}),S.iy=(function(){vi(this),this.cU=!0}),new D().i(nc,`com.raquo.airstream.ownership.OneTimeOwner`,{bW:1,bX:1});function rc(){}S=rc.prototype=new T,S.constructor=rc,S.hM=(function(e){return e!==null}),S.hV=(function(e){return e?``:null}),S.cA=(function(e){return this.hM(e)}),S.cE=(function(e){return this.hV(!!e)}),new D().i(rc,`com.raquo.laminar.codecs.package$$anon$1`,{cj:1,ac:1});function ic(e){if(e===null)throw Rd(new q)}S=ic.prototype=new T,S.constructor=ic,S.cE=(function(e){return e}),S.cA=(function(e){return e}),new D().i(ic,`com.raquo.laminar.codecs.package$$anon$2`,{ck:1,ac:1});function ac(e){return new ca(e,new K((e=>e+`px`)))}function oc(e,t,n,r){}S=oc.prototype=new ma,S.constructor=oc,new D().i(oc,`com.raquo.laminar.keys.CompositeKey`,{cN:1,R:1});function sc(e){this.ch=null,this.ch=e}S=sc.prototype=new ma,S.constructor=sc,new D().i(sc,`com.raquo.laminar.keys.EventProp`,{cR:1,R:1});function cc(e,t,n){return e.b5=t,e.ci=n,e}function lc(){this.b5=null,this.ci=null}S=lc.prototype=new ma,S.constructor=lc;function uc(){}uc.prototype=S,S.n=(function(e){return new bl(this,e,new td(((e,t,n)=>{O().gO(e,t,n)})))}),new D().i(lc,`com.raquo.laminar.keys.HtmlAttr`,{ax:1,R:1});function dc(e,t,n){this.de=null,this.dd=null,this.cj=null,this.ck=null,this.de=e,this.dd=t;var r=n.c()?J():new Y(n.s()+`:`+e);this.cj=r.c()?e:r.s(),this.ck=n.c()?J():new Y(_a().iH(n.s()))}S=dc.prototype=new ma,S.constructor=dc,new D().i(dc,`com.raquo.laminar.keys.SvgAttr`,{cS:1,R:1});function fc(){}S=fc.prototype=new T,S.constructor=fc,S.a1=(function(e){}),new D().i(fc,`com.raquo.laminar.modifiers.Modifier$$anon$1`,{cZ:1,N:1});function pc(e,t){if(this.eY=null,this.eY=e,t===null)throw Rd(new q)}S=pc.prototype=new T,S.constructor=pc,S.a1=(function(e){var t=ei(),n=(()=>{this.eY.b(e)});if(ei(),t.E)n();else{t.E=!0;try{n()}finally{t.E=!1,Zr(t)}}}),new D().i(pc,`com.raquo.laminar.modifiers.Modifier$$anon$2`,{d0:1,N:1});function mc(){}S=mc.prototype=new T,S.constructor=mc,new D().i(mc,`com.raquo.laminar.modifiers.RenderableNode$$anon$1`,{d3:1,d1:1});function hc(){}S=hc.prototype=new T,S.constructor=hc,new D().i(hc,`com.raquo.laminar.modifiers.RenderableSeq$collectionSeqRenderable$`,{d5:1,d4:1});var gc;function _c(){return gc||=new hc,gc}function vc(e,t){if(this.eZ=null,this.eZ=e,t===null)throw Rd(new q)}S=vc.prototype=new T,S.constructor=vc,S.dH=(function(e){return this.eZ.b(e)}),new D().i(vc,`com.raquo.laminar.modifiers.RenderableText$$anon$1`,{d8:1,d6:1});function yc(e){e.gj(new di(new $u((()=>{throw H(new U,`Attempting to use owner of unmounted element: `+fs(O().hL(e.A(),(O(),$())),``,` > `,``))}))))}function bc(e,t,n){return e.dm=t,e}function xc(){this.dm=null}S=xc.prototype=new T,S.constructor=xc;function Sc(){}Sc.prototype=S,S.dR=(function(){return this.dm}),S.aT=(function(e){var t=this.hA();return e.a3(new K((e=>{e.a1(t)}))),t}),S.hA=(function(){return new Wf(this,O().hG(this))}),new D().i(xc,`com.raquo.laminar.tags.HtmlTag`,{az:1,ae:1});function Cc(e,t){this.f6=null,this.f6=e}S=Cc.prototype=new T,S.constructor=Cc,new D().i(Cc,`com.raquo.laminar.tags.SvgTag`,{dk:1,ae:1});function wc(){}S=wc.prototype=new T,S.constructor=wc,S.cE=(function(e){return e}),S.cA=(function(e){return e}),new D().i(wc,`io.github.nguyenyou.webawesome.laminar.UnionAsStringCodec$$anon$1`,{dt:1,ac:1});function Tc(e,t){return e.bs=t,e.dB(),e}function Ec(){this.bs=null,this.br=null,this.bt=!1}S=Ec.prototype=new T,S.constructor=Ec;function Dc(){}Dc.prototype=S,S.ji=(function(){return this.bt||=(this.br=new Sl(this.bs,new W((e=>void 0)),void 0),!0),this.br}),S.u=(function(e,t){var n=this.ji().aT(new Q([]));return e.a3(new W((e=>{e.b(this).a1(n)}))),t.a3(new W((e=>{e.a1(n)}))),n});function Oc(){this.dn=null,kc=this,this.dn=Nr(67,`1C]4m6m=c4]4]4]4]4]4]4]4]4]3g4]2m9]2m1Jm1m9s4g5mm6]3]4mm12>mEm1m6m1]3]=]DI]1<m24mIs4g2c4w9];]4]<]3m3m=m3mH]8]2m=mBHm3]4mK3{gggg2:g=m@]13]4E]`)}S=Oc.prototype=new T,S.constructor=Oc,S.hN=(function(e,t){if(e<256)var n=(e-48|0)>>>0<=9?e-48|0:(e-65|0)>>>0<=25?e-55|0:(e-97|0)>>>0<=25?e-87|0:-1;else if((e-65313|0)>>>0<=25)var n=e-65303|0;else if((e-65345|0)>>>0<=25)var n=e-65335|0;else{var r=Bo().hx(this.dn,e),i=r<0?-2-r|0:r;if(i<0)var n=-1;else var a=e-this.dn.a[i]|0,n=a>9?-1:a}return n<t?n:-1}),new D().i(Oc,`java.lang.Character$`,{dz:1,a:1});var kc;function Ac(){return kc||=new Oc,kc}function jc(){}S=jc.prototype=new T,S.constructor=jc,S.c0=(function(e){throw new ep(`For input string: "`+e+`"`)}),S.iw=(function(e,t,n){e===null&&Nc().c0(e);var r=e.length;r===0&&Nc().c0(e);var i=Ac(),a=e.charCodeAt(0),o=a===45,s=o?-1:0,c=(o||a===43)|0;c>=r&&Nc().c0(e);var l=0;for(l=0;c!==r;){var u=i.hN(e.charCodeAt(c),t);(u<0||l>>>0>n>>>0)&&Nc().c0(e),l=Math.imul(l,t)+u|0,c=1+c|0}return l>>>0>(2147483647-s|0)>>>0&&Nc().c0(e),(l^s)-s|0}),new D().i(jc,`java.lang.Integer$`,{dF:1,a:1});var Mc;function Nc(){return Mc||=new jc,Mc}function Pc(){}S=Pc.prototype=new T,S.constructor=Pc;function Fc(e){return e instanceof Pc||typeof e==`number`||e instanceof C}function Ic(e,t,n,r,i){this.ba=null,this.bv=null,this.bb=null,this.bc=0,this.b9=0,this.ba=e,this.bv=t,this.bb=n,this.bc=r,this.b9=i}S=Ic.prototype=new T,S.constructor=Ic,S.d=(function(e){return e instanceof Ic&&this.bb===e.bb&&this.bc===e.bc&&this.b9===e.b9&&this.ba===e.ba&&this.bv===e.bv}),S.m=(function(){var e=``;return this.ba!==`<jscode>`&&(e=``+e+this.ba+`.`),e=``+e+this.bv,this.bb===null?e+=`(Unknown Source)`:(e=e+`(`+this.bb,this.bc>=0&&(e=e+`:`+this.bc,this.b9>=0&&(e=e+`:`+this.b9)),e+=`)`),e}),S.l=(function(){return tp(this.ba)^tp(this.bv)^tp(this.bb)^this.bc^this.b9});var Lc=new D().i(Ic,`java.lang.StackTraceElement`,{aJ:1,a:1});function Rc(){}S=Rc.prototype=new T,S.constructor=Rc,S.iI=(function(e,t,n){for(var r=t+n|0,i=``,a=t;a!==r;)i+=``+Qn(e.a[a]),a=1+a|0;return i}),new D().i(Rc,`java.lang.String$`,{dR:1,a:1});var zc;function Bc(){return zc||=new Rc,zc}function L(e,t,n,r,i){return e.fx=t,e.fy=i,i&&e.i5(),e}var Vc=class extends Error{constructor(){super(),this.fx=null,this.fy=!1,this.fw=null,this.cn=null}ir(e){return this}bY(){return this.fx}i5(){var e=this instanceof Z?this.y:this;return this.fw=Object.prototype.toString.call(e)===`[object Error]`?e:Error.captureStackTrace===void 0||Object.isSealed(this)?/* @__PURE__ */ Error():(Error.captureStackTrace(this),this),this}ik(){return this.cn===null&&(this.cn=this.fy?_o().i4(this.fw):new(Lc.r()).C(0)),this.cn}m(){var e=Kn(this),t=this.bY();return t===null?e:e+`: `+t}l(){return fr.prototype.l.call(this)}d(e){return fr.prototype.d.call(this,e)}get message(){var e=this.bY();return e===null?``:e}get name(){return Kn(this)}toString(){return this.m()}};function Hc(){this.fz=null,Uc=this,this.fz=new Xs(So().fu)}S=Hc.prototype=new T,S.constructor=Hc,S.iN=(function(){return this.fz.dA}),new D().i(Hc,`scala.Console$`,{e9:1,f0:1});var Uc;function Wc(){return Uc||=new Hc,Uc}function Gc(){}S=Gc.prototype=new es,S.constructor=Gc;function Kc(){}Kc.prototype=S,S.jv=(function(e){if(e===null)return null;if(e.a.length===0){var t=Sp();return Jp(),t.fS}return new qm(e)});function qc(e,t){if(t===e)e.a7(xf().gu(t));else for(var n=t.e();n.j();)e.a0(n.h());return e}function Jc(){}S=Jc.prototype=new T,S.constructor=Jc;function Yc(){}Yc.prototype=S,S.m=(function(){return`<function0>`});function Xc(){}S=Xc.prototype=new T,S.constructor=Xc;function Zc(){}Zc.prototype=S,S.m=(function(){return`<function1>`});function Qc(){}S=Qc.prototype=new T,S.constructor=Qc;function $c(){}$c.prototype=S,S.m=(function(){return`<function2>`});function el(){}S=el.prototype=new T,S.constructor=el;function tl(){}tl.prototype=S,S.m=(function(){return`<function3>`});function nl(e){this.cv=!1,this.cv=e}S=nl.prototype=new T,S.constructor=nl,S.m=(function(){return``+this.cv}),new D().i(nl,`scala.runtime.BooleanRef`,{f9:1,a:1});function rl(e){this.bI=0,this.bI=e}S=rl.prototype=new T,S.constructor=rl,S.m=(function(){return``+this.bI}),new D().i(rl,`scala.runtime.IntRef`,{fb:1,a:1});function il(e){this.cw=null,this.cw=e}S=il.prototype=new T,S.constructor=il,S.m=(function(){return``+this.cw}),new D().i(il,`scala.runtime.ObjectRef`,{fe:1,a:1});function al(){this.r=0,this.g7=0,this.h7=0,this.h6=0,ol=this,this.r=tp(`Seq`),this.g7=tp(`Map`),this.h7=tp(`Set`),this.h6=this.jn($(),this.g7)}S=al.prototype=new tc,S.constructor=al,S.gN=(function(e){return nm(e)?this.iq(e,this.r):e instanceof Rm?this.iB(e,this.r):this.iL(e,this.r)}),new D().i(al,`scala.util.hashing.MurmurHash3$`,{fG:1,fF:1});var ol;function R(){return ol||=new al,ol}var sl=class extends Vc{};function cl(){this.cP=null,this.e1=null,this.e2=null,ll=this,this.cP=xf().gd(P().a6(new(M.r()).C([]))),this.e1=new K((e=>{try{console.error(this.cF(e)+`
`+this.ij(e,`
`))}catch(e){var t=e instanceof Vc?e:new Z(e);console.error(`Error in AirstreamError.consoleErrorCallback:`),console.error(t)}})),this.e2=new K((e=>{console.warn(`Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.`);var t=e;throw t instanceof Z?t.y:t})),this.iT(this.e1)}S=cl.prototype=new T,S.constructor=cl,S.cF=(function(e){try{var t=e.bY()}catch{var t=`(Unable to get the message for this error - exception occurred in its getMessage)`}return Gn(e).dP()+`: `+t}),S.ij=(function(e,t){try{return fs(Bl().jv(e.ik()),``,t,``)}catch{return`(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)`}}),S.iT=(function(e){this.cP.a0(e)}),S.a5=(function(e){for(var t=this.cP.e();t.j();){var n=t.h();try{n.b(e)}catch(e){var r=e instanceof Vc?e:new Z(e),i=this.e2;if(n===null?i===null:n.d(i))throw r instanceof Z?r.y:r;console.warn(`Error processing an unhandled error callback:`),Us().jd(0,new $u((e=>(()=>{throw e instanceof Z?e.y:e}))(r)))}}}),new D().i(cl,`com.raquo.airstream.core.AirstreamError$`,{bD:1,eY:1,eZ:1});var ll;function z(){return ll||=new cl,ll}function ul(e){e.ca=!0,e.cc=void 0}function dl(e,t,n){return ad(e,zr().gU(t,os().cq,!0),n)}function fl(e,t){e.ca?sd(e,t):ml(e).push(new $u((()=>{sd(e,t)})))}function pl(e){return dd(e)>0}function ml(e){var t=e.cc;if(t===void 0){var n=Ai().a8(P().a6(new(Qo.r()).C([])));return e.cc=n,n}return t}var hl=new D().i(1,`com.raquo.airstream.core.Observer`,{ab:1,a2:1,Z:1});function B(e,t,n){return new Tu(n.dH(t))}function gl(e,t,n,r){return new pc(new K((e=>{(zi(),new Ii(t,null,null)).a3(new K((e=>(t=>{n.b(t).a1(e)}))(e)))})),xa())}function _l(e,t,n){return new pc(new K((e=>{(zi(),new Ii(t,null,null)).a3(new K((e=>(t=>{ka().aS(e,t,void 0)}))(e)))})),xa())}function vl(e,t){this.b8=null,this.dg=null,this.dh=null,this.b8=e,this.dg=(n=>{var r=e.da.b(n);r.c()||t.b(r.s())}),this.dh=(()=>{var e=null;e=this;var t={};if(e===null)throw Rd(new q);return t.capture=e.b8.dc,t.passive=e.b8.db,t})()}S=vl.prototype=new T,S.constructor=vl,S.a1=(function(e){this.hy(e,!1)}),S.hy=(function(e,t){if(yd(e,this)===-1){var n=new K((t=>(O().he(e.I,this),new Si(t.df,new $u((()=>{var t=yd(e,this);t!==-1&&(vd(e,t),O().iY(e.I,this))})))))),r=t?Ma().jo(e,n):gi().cO(e.ad,new K((t=>n.b(new va(e,t)))),!1);return _d(e,this,t),r}var i=new K((e=>void 0));return gi().gQ(e.ad,new K((t=>{i.b(new va(e,t))})),!1)}),S.m=(function(){return`EventListener(`+this.b8.bp.ch+`)`});var yl=new D().i(vl,`com.raquo.laminar.modifiers.EventListener`,{cW:1,N:1,cV:1});function bl(e,t,n){this.eW=null,this.eX=null,this.eV=null,this.eW=e,this.eX=t,this.eV=n}S=bl.prototype=new T,S.constructor=bl,S.a1=(function(e){this.eV.gc(e,this.eW,this.eX)}),new D().i(bl,`com.raquo.laminar.modifiers.KeySetter`,{cX:1,N:1,d9:1});function xl(e,t){if(this.dk=null,this.f2=null,this.f3=null,this.f2=t,yc(this),e===null)throw H(new U,`Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load`);if(!O().iv(e,document))throw H(new U,`Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering`);this.f3=e,this.iG()}S=xl.prototype=new T,S.constructor=xl,S.cD=(function(){return this.dk}),S.gj=(function(e){this.dk=e}),S.iG=(function(){return this.dk.g8(),ka().aS(this,this.f2,void 0)}),S.A=(function(){return this.f3}),new D().i(xl,`com.raquo.laminar.nodes.RootNode`,{df:1,a6:1,ay:1});function Sl(e,t,n){this.dm=null,this.f5=null,this.f5=e,bc(this,e,!1)}S=Sl.prototype=new Sc,S.constructor=Sl,S.dR=(function(){return this.f5}),new D().i(Sl,`com.raquo.laminar.tags.CustomHtmlTag`,{dj:1,az:1,ae:1});function Cl(){this.bs=null,this.br=null,this.bt=!1,Tc(this,`wa-button`)}S=Cl.prototype=new Dc,S.constructor=Cl,S.dB=(function(){return kn}),new D().i(Cl,`io.github.nguyenyou.webawesome.laminar.Button$`,{dn:1,ag:1,af:1});var wl;function Tl(){return wl||=new Cl,wl}function El(){this.b5=null,this.ci=null,this.f7=null,this.f8=!1,cc(this,`orientation`,new wc)}S=El.prototype=new uc,S.constructor=El,S.jq=(function(){return this.f8||=(this.f7=Ol().n(`vertical`),!0),this.f7}),new D().i(El,`io.github.nguyenyou.webawesome.laminar.CommonKeys$StepperOrientation$`,{dp:1,ax:1,R:1});var Dl;function Ol(){return Dl||=new El,Dl}function kl(){this.bs=null,this.br=null,this.bt=!1,this.fd=null,this.fe=!1,this.f9=null,this.fa=!1,this.fb=null,this.fc=!1,Tc(this,`wa-step`)}S=kl.prototype=new Dc,S.constructor=kl,S.C=(function(){return this.fe||=(this.fd=(G(),cc(new lc,`name`,Ki().b4)),!0),this.fd}),S.dK=(function(){return this.fa||=(this.f9=(G(),cc(new lc,`completed`,Ki().bo)),!0),this.f9}),S.hO=(function(){return this.fc||=(this.fb=(G(),cc(new lc,`disabled`,Ki().bo)),!0),this.fb}),S.dB=(function(){return Mn}),new D().i(kl,`io.github.nguyenyou.webawesome.laminar.Step$`,{dq:1,ag:1,af:1});var Al;function V(){return Al||=new kl,Al}function jl(){this.bs=null,this.br=null,this.bt=!1,this.fp=null,this.fq=!1,this.fh=null,this.fi=!1,this.fr=null,this.fs=!1,this.fn=null,this.fo=!1,this.fj=null,this.fk=!1,this.fl=null,this.fm=!1,Tc(this,`wa-stepper`)}S=jl.prototype=new Dc,S.constructor=jl,S.iK=(function(){return this.fq||=(this.fp=(G(),new sc(`wa-step-change`)),!0),this.fp}),S.bM=(function(){return this.fi||=(this.fh=(G(),cc(new lc,`active`,Ki().b4)),!0),this.fh}),S.iM=(function(){return this.fs||=(this.fr=Ol(),!0),this.fr}),S.iA=(function(){return this.fo||=(this.fn=(G(),cc(new lc,`linear`,Ki().bo)),!0),this.fn}),S.gh=(function(){return this.fk||=(this.fj=(G(),cc(new lc,`clickable`,Ki().bo)),!0),this.fj}),S.iz=(function(){return this.fm||=(this.fl=(G(),cc(new lc,`label`,Ki().b4)),!0),this.fl}),S.dB=(function(){return Un}),new D().i(jl,`io.github.nguyenyou.webawesome.laminar.Stepper$`,{ds:1,ag:1,af:1});var Ml;function Nl(){return Ml||=new jl,Ml}function Pl(e){if(e.ac.Z)return e.ac.Q().dP()+`[]`;for(var t=e.ac.N,n=t.length-1|0;n>=0&&t.charCodeAt(n)===36;)n=n-1|0;if(n>=0&&(t.charCodeAt(n)-48|0)>>>0<=9){for(n=n-1|0;n>=0&&(t.charCodeAt(n)-48|0)>>>0<=9;)n=n-1|0;for(;n>=0&&t.charCodeAt(n)===36;)n=n-1|0}for(;;){if(n>=0)var r=n,i=t.charCodeAt(r),a=i!==36&&i!==46;else var a=!1;if(a)n=n-1|0;else break}var o=1+n|0;return t.substring(o)}function Fl(e){this.dp=null,this.ac=e}S=Fl.prototype=new T,S.constructor=Fl,S.m=(function(){return(this.ac.Y?`interface `:this.ac.X?``:`class `)+this.ac.N}),S.dP=(function(){return this.dp===null&&(this.dp=Pl(this)),this.dp}),new D().i(Fl,`java.lang.Class`,{dA:1,a:1,O:1});function H(e,t){return L(e,t,null,!0,!0),e}var U=class extends Vc{};new D().i(U,`java.lang.Exception`,{y:1,r:1,a:1});function Il(){}S=Il.prototype=new T,S.constructor=Il;function Ll(){}Ll.prototype=S;function Rl(){this.h5=null,zl=this,mf(),this.h5=$l()}S=Rl.prototype=new Kc,S.constructor=Rl,new D().i(Rl,`scala.Predef$`,{ej:1,ec:1,ed:1});var zl;function Bl(){return zl||=new Rl,zl}function Vl(e,t){return e.bz=t,e}function Hl(){this.bz=null}S=Hl.prototype=new T,S.constructor=Hl;function Ul(){}Ul.prototype=S,S.aW=(function(e){return this.bz.dO(e,Gp())}),S.af=(function(){return this.bz.gG(Gp())}),S.aU=(function(e){return this.bz.dO(e,Gp())});function Wl(e,t){if(t<0)return 1;var n=e.q();if(n>=0)return n===t?0:n<t?-1:1;for(var r=0,i=e.e();i.j();){if(r===t)return 1;i.h(),r=1+r|0}return r-t|0}function Gl(e,t){return new nf(e).dL(t)}function Kl(e,t,n){var r=t>0?t:0,i=n<0?-1:n<=r?0:n-r|0;return i===0?Xl().K:new of(e,r,i)}function ql(e,t){for(var n=t.e();e.j();)if(!n.j()||!N().z(e.h(),n.h()))return!1;return!n.j()}function Jl(){this.K=null,Yl=this,this.K=new Qd}S=Jl.prototype=new T,S.constructor=Jl,S.af=(function(){return new fp}),new D().i(Jl,`scala.collection.Iterator$`,{er:1,a:1,V:1});var Yl;function Xl(){return Yl||=new Jl,Yl}function Zl(){}S=Zl.prototype=new T,S.constructor=Zl,new D().i(Zl,`scala.collection.immutable.Map$`,{eH:1,a:1,ex:1});var Ql;function $l(){return Ql||=new Zl,Ql}function eu(e){this.fZ=null,this.fZ=e}S=eu.prototype=new Yc,S.constructor=eu,S.N=(function(){return(0,this.fZ)()}),new D().i(eu,`scala.runtime.AbstractFunction0.$$Lambda$07eded5776954a9c145e92c329afd52873ad179c`,{f4:1,bw:1,ai:1});function W(e){this.g0=null,this.g0=e}S=W.prototype=new Zc,S.constructor=W,S.b=(function(e){return(0,this.g0)(e)}),new D().i(W,`scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919`,{f5:1,bx:1,e:1});function tu(){}S=tu.prototype=new T,S.constructor=tu;function nu(){}nu.prototype=S,S.m=(function(){return`<function1>`}),S.b=(function(e){return this.hv(e,os().cq)});var ru=new D().i(0,`scala.runtime.Nothing$`,{fc:1,r:1,a:1});function iu(){}S=iu.prototype=new T,S.constructor=iu,S.ic=(function(e){return(t=>e.b(t))}),new D().i(iu,`scala.scalajs.js.Any$`,{fj:1,fk:1,fl:1});var au;function ou(){return au||=new iu,au}function su(){}S=su.prototype=new Yc,S.constructor=su;function cu(){}cu.prototype=S;function lu(){}S=lu.prototype=new Zc,S.constructor=lu;function uu(){}uu.prototype=S;function du(){}S=du.prototype=new $c,S.constructor=du;function fu(){}fu.prototype=S;function pu(){}S=pu.prototype=new tl,S.constructor=pu;function mu(){}mu.prototype=S;function hu(e,t,n,r){if(this.e5=null,this.e3=!1,this.cQ=null,this.e4=null,this.e5=e,this.e3=t,this.cQ=n,r===null)throw Rd(new q);this.e4=void 0}S=hu.prototype=new T,S.constructor=hu,S.cH=(function(){return this.e4}),S.cB=(function(){return Fr(this)}),S.m=(function(){return Ir(this)}),S.dU=(function(e){try{this.e5.b(e)}catch(e){var t=e instanceof Vc?e:new Z(e);this.e3?this.cJ(new Rf(t)):z().a5(new Rf(t))}}),S.cJ=(function(e){try{this.cQ.bg(e)?this.cQ.b(e):z().a5(e)}catch(n){var t=n instanceof Vc?n:new Z(n);z().a5(new zf(t,e))}}),S.bZ=(function(e){e.bX(new K((e=>{this.cJ(e)})),new K((e=>{this.dU(e)})))}),new D().i(hu,`com.raquo.airstream.core.Observer$$anon$8`,{bI:1,a2:1,Z:1,ab:1});function gu(e,t,n){if(this.cR=null,this.e6=!1,this.e7=null,this.cR=e,this.e6=t,n===null)throw Rd(new q);this.e7=void 0}S=gu.prototype=new T,S.constructor=gu,S.cH=(function(){return this.e7}),S.cB=(function(){return Fr(this)}),S.m=(function(){return Ir(this)}),S.dU=(function(e){this.bZ(new Lf(e))}),S.cJ=(function(e){this.bZ(new If(e))}),S.bZ=(function(e){try{this.cR.bg(e)?this.cR.b(e):e.bX(new K((e=>{z().a5(e)})),new K((e=>void 0)))}catch(n){var t=n instanceof Vc?n:new Z(n);this.e6&&e.gE()?this.cJ(new Rf(t)):e.bX(new K((e=>{z().a5(new zf(t,e))})),new K((e=>{z().a5(new Rf(t))})))}}),new D().i(gu,`com.raquo.airstream.core.Observer$$anon$9`,{bJ:1,a2:1,Z:1,ab:1});function _u(e){if(this.ep=null,this.eq=!1,this.gV=null,e===null)throw Rd(new q);Yi(this)}S=_u.prototype=new T,S.constructor=_u,S.jg=(function(){return this.eq||=(this.ep=new Cc(`svg`,!1),!0),this.ep}),new D().i(_u,`com.raquo.laminar.api.Laminar$svg$`,{cd:1,cE:1,cm:1,co:1});function vu(){this.k=null,yu=this,this.k=new cm}S=vu.prototype=new T,S.constructor=vu,new D().i(vu,`com.raquo.laminar.api.package$`,{cg:1,at:1,aw:1,as:1});var yu;function G(){return yu||=new vu,yu}function bu(e,t,n,r){this.d1=null,this.d3=!1,this.d2=null,this.ce=null,this.d1=e,this.d3=t,this.d2=n,this.ce=r}S=bu.prototype=new T,S.constructor=bu,S.hz=(function(e){var t=this.d1,n=t.c()?ra().j6(e,this.d3,this.ce):t.s(),r=new K((e=>this.d2.gc(n,e.df,this.ce)));return gi().cO(e.ad,new K((t=>r.b(new va(e,t)))),!1)}),S.a1=(function(e){this.hz(e)}),S.js=(function(e){var t=e.gb(this.ce);return new bu(this.d1,this.d3,this.d2,t)}),S.gT=(function(e){return this.js(e)}),new D().i(bu,`com.raquo.laminar.inserters.DynamicInserter`,{cG:1,N:1,av:1,au:1});function xu(e,t,n){return e.b6=t,e.b7=n,e}function Su(){this.b6=null,this.b7=null}S=Su.prototype=new ma,S.constructor=Su;function Cu(){}Cu.prototype=S,S.n=(function(e){return new bl(this,Yn(e),new td(((e,t,n)=>{O().gP(e,t,n)})))});function wu(e){this.di=null,this.f0=null,this.di=J(),this.f0=O().hF(e)}S=wu.prototype=new T,S.constructor=wu,S.dJ=(function(){return this.di}),S.bi=(function(e){this.di=e}),S.bj=(function(e){}),S.a1=(function(e){ka().aS(e,this,void 0)}),S.A=(function(){return this.f0}),new D().i(wu,`com.raquo.laminar.nodes.CommentNode`,{da:1,a6:1,N:1,ad:1});function Tu(e){this.dl=null,this.cm=null,this.dl=J(),this.cm=O().hI(e)}S=Tu.prototype=new T,S.constructor=Tu,S.dJ=(function(){return this.dl}),S.bi=(function(e){this.dl=e}),S.bj=(function(e){}),S.a1=(function(e){ka().aS(e,this,void 0)}),S.jk=(function(){return this.cm.data}),S.A=(function(){return this.cm}),new D().i(Tu,`com.raquo.laminar.nodes.TextNode`,{dh:1,a6:1,N:1,ad:1});function Eu(){}S=Eu.prototype=new T,S.constructor=Eu;function Du(){}Du.prototype=S;function Ou(e,t){return e===t}function ku(e){return e?1231:1237}var Au=new D().i(0,`java.lang.Boolean`,{dx:1,a:1,S:1,O:1},(e=>typeof e==`boolean`));function ju(e){return e}function Mu(e,t){return t instanceof Wn&&e===t.c}var Nu=new D().i(0,`java.lang.Character`,{aF:1,a:1,S:1,O:1},(e=>e instanceof Wn));function Pu(e,t){return L(e,t,null,!0,!0),e}var Fu=class extends U{};new D().i(Fu,`java.lang.RuntimeException`,{G:1,y:1,r:1,a:1});function Iu(){this.p=null,this.p=``}S=Iu.prototype=new T,S.constructor=Iu,S.hp=(function(e){var t=Bc().iI(e,0,e.a.length);return this.p=``+this.p+t,this}),S.m=(function(){return this.p}),S.f=(function(){return this.p.length}),S.gf=(function(e){return this.p.charCodeAt(e)}),new D().i(Iu,`java.lang.StringBuilder`,{dS:1,ah:1,aD:1,a:1});function Lu(){}S=Lu.prototype=new Ll,S.constructor=Lu;function Ru(){}Ru.prototype=S;function zu(){}S=zu.prototype=new T,S.constructor=zu,S.m=(function(){return`<function1>`}),S.bg=(function(e){return!1}),S.hs=(function(e){throw new Gd(e)}),S.b=(function(e){this.hs(e)}),new D().i(zu,`scala.PartialFunction$$anon$1`,{ei:1,e:1,g:1,a:1});function Bu(){}S=Bu.prototype=new T,S.constructor=Bu;function Vu(){}Vu.prototype=S,S.q=(function(){return-1}),S.aK=(function(e,t,n){return ds(this,e,t,n)}),S.bf=(function(e,t,n,r){return ps(this,e,t,n,r)}),S.e=(function(){return this}),S.dL=(function(e){return Gl(this,e)}),S.cC=(function(e){return this.c3(e,-1)}),S.c3=(function(e,t){return Kl(this,e,t)}),S.m=(function(){return`<iterator>`});function Hu(e,t){return e.bC=t,e}function Uu(){this.bC=null}S=Uu.prototype=new T,S.constructor=Uu;function Wu(){}Wu.prototype=S,S.gd=(function(e){return this.bC.aU(e)}),S.gu=(function(e){return this.bC.aW(e)}),S.af=(function(){return this.bC.af()}),S.aU=(function(e){return this.gd(e)}),S.aW=(function(e){return this.gu(e)});function Gu(e,t){return t>=0&&e.a4(t)>0}function Ku(e){return e.a4(0)===0}function qu(e,t){var n=e.q();if(n!==-1){var r=t.q();if(r!==-1){if(n!==r)return!1;if(n===0)return!0}}return ql(e.e(),t)}function Ju(e,t){for(var n=e.aX().af(),r=e.e();r.j();)n.a0(t.b(r.h()));return n.ag()}function Yu(e,t){if(this.fU=null,this.cs=null,this.fU=e,t===null)throw Rd(new q);this.cs=t}S=Yu.prototype=new T,S.constructor=Yu,S.hi=(function(e){return this.cs.a0(e),this}),S.hb=(function(e){return this.cs.a7(e),this}),S.ag=(function(){return this.fU.b(this.cs.ag())}),S.a0=(function(e){return this.hi(e)}),S.a7=(function(e){return this.hb(e)}),new D().i(Yu,`scala.collection.mutable.Builder$$anon$1`,{eR:1,T:1,U:1,W:1});function Xu(e,t){return e.bF=t,e}function Zu(){this.bF=null}S=Zu.prototype=new T,S.constructor=Zu;function Qu(){}Qu.prototype=S,S.hj=(function(e){return this.bF.a0(e),this}),S.hc=(function(e){return this.bF.a7(e),this}),S.ag=(function(){return this.bF}),S.a0=(function(e){return this.hj(e)}),S.a7=(function(e){return this.hc(e)}),new D().i(Zu,`scala.collection.mutable.GrowableBuilder`,{bn:1,T:1,U:1,W:1});function $u(e){this.g3=null,this.g3=e}S=$u.prototype=new cu,S.constructor=$u,S.N=(function(){return(0,this.g3)()}),new D().i($u,`scala.scalajs.runtime.AnonFunction0.$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d`,{fq:1,fp:1,bw:1,ai:1});function K(e){this.g4=null,this.g4=e}S=K.prototype=new uu,S.constructor=K,S.b=(function(e){return(0,this.g4)(e)}),new D().i(K,`scala.scalajs.runtime.AnonFunction1.$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1`,{fs:1,fr:1,bx:1,e:1});function ed(e){this.g5=null,this.g5=e}S=ed.prototype=new fu,S.constructor=ed,S.dE=(function(e,t){return(0,this.g5)(e,t)}),new D().i(ed,`scala.scalajs.runtime.AnonFunction2.$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7`,{fu:1,ft:1,f6:1,ea:1});function td(e){this.g6=null,this.g6=e}S=td.prototype=new mu,S.constructor=td,S.gc=(function(e,t,n){return(0,this.g6)(e,t,n)}),new D().i(td,`scala.scalajs.runtime.AnonFunction3.$$Lambda$73f37e31ba038fe839c174212837da323f140c96`,{fw:1,fv:1,f7:1,eb:1});function nd(){}S=nd.prototype=new T,S.constructor=nd;function rd(){}rd.prototype=S,S.aL=(function(){return new Jd(this)});function id(e){e.bn=Ai().a8(P().a6(new(hl.r()).C([]))),e.cY=Ai().a8(P().a6(new(Pr.r()).C([]))),e.cd=!1}function ad(e,t,n){var r=ei(),i=(()=>{cd(e);var r=od(e,t,n);return t.bZ(Pp(e)),ld(e),r}),a=!pl(e);if(r.E||!a)var o=i();else{r.E=!0;try{var o=i()}finally{r.E=!1,Zr(r)}}return o}function od(e,t,n){var r=new Si(n,new $u((()=>{fl(e,t)})));return e.bn.push(t),r}function sd(e,t){Hr().j0(e.bn,t)&&ud(e)}function cd(e){e.cd||=!0}function ld(e){dd(e)===1&&Vf(e)}function ud(e){pl(e)||(e.cd=!1)}function dd(e){var t=e.bn.length,n=e.cY;return(t|0)+(n.length|0)|0}function fd(e){e.ej=zr().id(new pd(e),(zr(),!0))}function pd(e){if(this.ek=null,e===null)throw Rd(new q);this.ek=e}S=pd.prototype=new nu,S.constructor=pd,S.iu=(function(e){return!0}),S.hv=(function(e,t){new Kr(new K((t=>{this.ek.j8(e,t)})))}),S.bg=(function(e){return this.iu(e)}),new D().i(pd,`com.raquo.airstream.state.Var$$anon$1`,{c4:1,f8:1,e:1,g:1,a:1});function md(e,t){this.cg=null,this.d9=null,this.cg=e,this.d9=t}S=md.prototype=new T,S.constructor=md,S.a1=(function(e){var t=this.d9;t!==void 0&&t.dV(e,this.cg),ka().aS(e,this.cg,void 0)}),S.jt=(function(e){return new md(this.cg,e.gb(this.d9))}),S.gT=(function(e){return this.jt(e)});var hd=new D().i(md,`com.raquo.laminar.inserters.StaticChildInserter`,{cK:1,N:1,av:1,cM:1,au:1});function gd(e){e.dj=new wi(new $u((()=>{e.ad.g8()})),new $u((()=>{e.ad.hJ()}))),e.aP=void 0}function _d(e,t,n){if(e.aP===void 0)e.aP=Ai().a8(P().a6(new(yl.r()).C([t])));else if(n){var r=e.aP;if(r===void 0)throw new Hd(`undefined.get`);r.unshift(t)}else{var i=e.aP;if(i===void 0)throw new Hd(`undefined.get`);i.push(t)}}function vd(e,t){var n=e.aP;n!==void 0&&n.splice(t,1)}function yd(e,t){var n=e.aP;if(n===void 0)return-1;for(var r=!1,i=0;!r&&i<(n.length|0);){var a=n[i];(a===null?t===null:qn(a,t))?r=!0:i=1+i|0}return r?i:-1}function bd(e,t){Sd(e,e.bq,t)&&Cd(e,t)}function xd(e,t){var n=e.bq;e.bq=t,Sd(e,n,t)||Cd(e,t)}function Sd(e,t,n){var r=!t.c()&&!t.s().cD().H.c(),i=!n.c()&&!n.s().cD().H.c();return r&&!i}function Cd(e,t){wd(e,t.c()?J():new Y(t.s().cD()))}function wd(e,t){if(t.c())e.dj.hC();else{var n=t.s();e.dj.ja(n)}}function Td(){}S=Td.prototype=new Du,S.constructor=Td;function Ed(){}Ed.prototype=S;var Dd=class extends Fu{constructor(e){super(),L(this,e,null,!0,!0)}};new D().i(Dd,`java.lang.ArithmeticException`,{dw:1,G:1,y:1,r:1,a:1});var Od=new D().i(0,`java.lang.Byte`,{dy:1,X:1,a:1,S:1,O:1},(e=>ir(e)));function kd(e,t){return L(e,t,null,!0,!0),e}function Ad(e){return L(e,null,null,!0,!0),e}var jd=class extends Fu{};new D().i(jd,`java.lang.IllegalArgumentException`,{aH:1,G:1,y:1,r:1,a:1});var Md=class extends Fu{constructor(e){super(),L(this,e,null,!0,!0)}};new D().i(Md,`java.lang.IllegalStateException`,{dC:1,G:1,y:1,r:1,a:1});function Nd(e,t){return L(e,t,null,!0,!0),e}function Pd(e,t){return L(e,`Index out of range: `+t,null,!0,!0),e}var Fd=class extends Fu{};new D().i(Fd,`java.lang.IndexOutOfBoundsException`,{dD:1,G:1,y:1,r:1,a:1});function Id(){}S=Id.prototype=new Du,S.constructor=Id,new D().i(Id,`java.lang.JSConsoleBasedPrintStream$DummyOutputStream`,{dI:1,aC:1,aA:1,aE:1,aB:1});function Ld(e,t){return L(e,t,null,!0,!0),e}function Rd(e){return L(e,null,null,!0,!0),e}var q=class extends Fu{};new D().i(q,`java.lang.NullPointerException`,{dK:1,G:1,y:1,r:1,a:1});var zd=new D().i(0,`java.lang.Short`,{dN:1,X:1,a:1,S:1,O:1},(e=>ar(e))),Bd=class extends Fu{constructor(e){super(),L(this,e,null,!0,!0)}};new D().i(Bd,`java.lang.UnsupportedOperationException`,{dW:1,G:1,y:1,r:1,a:1});var Vd=class extends Fu{constructor(e){super(),L(this,e,null,!0,!0)}};new D().i(Vd,`java.util.ConcurrentModificationException`,{e1:1,G:1,y:1,r:1,a:1});var Hd=class extends Fu{constructor(e){super(),L(this,e,null,!0,!0)}};new D().i(Hd,`java.util.NoSuchElementException`,{e2:1,G:1,y:1,r:1,a:1});function Ud(){}S=Ud.prototype=new Ru,S.constructor=Ud,S.b=(function(e){return e}),S.m=(function(){return`generalized constraint`}),new D().i(Ud,`scala.$less$colon$less$$anon$1`,{e7:1,e4:1,e5:1,e:1,a:1});function Wd(e){if(!e.fB){if(e.cp===null)var t=`null`;else{var n=P().hn(e.cp),r=n===null?`of a JS class`:`of class `+n.ac.N;try{var t=e.cp+` (`+r+`)`}catch{var t=`an instance `+r}}e.fA=t,e.fB=!0}return e.fA}var Gd=class extends Fu{constructor(e){super(),this.cp=null,this.fA=null,this.fB=!1,this.cp=e,L(this,null,null,!0,!0)}bY(){return Wd(this)}};new D().i(Gd,`scala.MatchError`,{ee:1,G:1,y:1,r:1,a:1});function Kd(){}S=Kd.prototype=new T,S.constructor=Kd;function qd(){}qd.prototype=S,S.aL=(function(){return new Jd(this)}),S.c=(function(){return this===J()}),S.q=(function(){return!this.c()|0}),S.hE=(function(e){return!this.c()&&N().z(this.s(),e)}),S.e=(function(){return this.c()?Xl().K:new $d(this.s())});function Jd(e){if(this.bw=0,this.fE=0,this.fD=null,e===null)throw Rd(new q);this.fD=e,this.bw=0,this.fE=e.P()}S=Jd.prototype=new Vu,S.constructor=Jd,S.j=(function(){return this.bw<this.fE}),S.h=(function(){var e=this.fD.Q(this.bw);return this.bw=1+this.bw|0,e}),new D().i(Jd,`scala.Product$$anon$1`,{ek:1,I:1,b:1,c:1,J:1});function Yd(e){this.bz=null,Vl(this,e)}S=Yd.prototype=new Ul,S.constructor=Yd,new D().i(Yd,`scala.collection.ClassTagSeqFactory$AnySeqDelegate`,{ep:1,eo:1,a:1,V:1,Y:1});function Xd(e){return fs(e,e.aJ()+`(`,`, `,`)`)}function Zd(e){return!!(e&&e.$classData&&e.$classData.n.f)}function Qd(){}S=Qd.prototype=new Vu,S.constructor=Qd,S.j=(function(){return!1}),S.iJ=(function(){throw new Hd(`next on empty iterator`)}),S.q=(function(){return 0}),S.h=(function(){this.iJ()}),S.c3=(function(e,t){return this}),new D().i(Qd,`scala.collection.Iterator$$anon$19`,{es:1,I:1,b:1,c:1,J:1});function $d(e){this.fG=null,this.bA=!1,this.fG=e,this.bA=!1}S=$d.prototype=new Vu,S.constructor=$d,S.j=(function(){return!this.bA}),S.h=(function(){return this.bA?Xl().K.h():(this.bA=!0,this.fG)}),S.c3=(function(e,t){return this.bA||e>0||t===0?Xl().K:this}),new D().i($d,`scala.collection.Iterator$$anon$20`,{et:1,I:1,b:1,c:1,J:1});function ef(e){for(;;)if(e.F instanceof nf){var t=e.F;if(e.F=t.F,e.as=t.as,t.U!==null){e.T===null&&(e.T=t.T);var n=t.T;n===null&&Is().bh(),n.bB=e.U,e.U=t.U}}else return}function tf(e){for(;;)if(e.U===null)return e.F=null,e.T=null,!1;else{if(e.F=e.U.ip(),e.T===e.U){var t=e.T;t===null&&Is().bh(),e.T=t.bB}if(e.U=e.U.bB,ef(e),e.as)return!0;if(!(e.F!==null&&e.F.j()))continue;return e.as=!0,!0}}function nf(e){this.F=null,this.U=null,this.T=null,this.as=!1,this.F=e,this.U=null,this.T=null,this.as=!1}S=nf.prototype=new Vu,S.constructor=nf,S.j=(function(){return this.as?!0:this.F===null?!1:this.F.j()?(this.as=!0,!0):tf(this)}),S.h=(function(){if(this.j()){this.as=!1;var e=this.F;return e===null&&Is().bh(),e.h()}return Xl().K.h()}),S.dL=(function(e){var t=new hs(e,null);if(this.U===null)this.U=t,this.T=t;else{var n=this.T;n===null&&Is().bh(),n.bB=t,this.T=t}return this.F===null&&(this.F=Xl().K),this}),new D().i(nf,`scala.collection.Iterator$ConcatIterator`,{aU:1,I:1,b:1,c:1,J:1});function rf(e){for(;e.ak>0;)e.at.j()?(e.at.h(),e.ak=e.ak-1|0):e.ak=0}function af(e,t){if(e.L<0)return-1;var n=e.L-t|0;return n<0?0:n}function of(e,t,n){this.at=null,this.L=0,this.ak=0,this.at=e,this.L=n,this.ak=t}S=of.prototype=new Vu,S.constructor=of,S.q=(function(){var e=this.at.q();if(e<0)return-1;var t=e-this.ak|0,n=t<0?0:t;if(this.L<0)return n;var r=this.L;return r<n?r:n}),S.j=(function(){return rf(this),this.L!==0&&this.at.j()}),S.h=(function(){return rf(this),this.L>0?(this.L=this.L-1|0,this.at.h()):this.L<0?this.at.h():Xl().K.h()}),S.c3=(function(e,t){var n=e>0?e:0;if(t<0)var r=af(this,n);else if(t<=n)var r=0;else if(this.L<0)var r=t-n|0;else var i=af(this,n),a=t-n|0,r=i<a?i:a;var o=this.ak+n|0;return r===0?Xl().K:o<0?(this.ak=2147483647,this.L=0,Gl(this,new eu((()=>new of(this.at,o-2147483647|0,r))))):(this.ak=o,this.L=r,this)}),new D().i(of,`scala.collection.Iterator$SliceIterator`,{ew:1,I:1,b:1,c:1,J:1});function sf(e,t){return t>=0&&e.a4(t)>0}function cf(e,t){if(t<0)throw Nd(new Fd,``+t);var n=e.hU(t);if(n.c())throw Nd(new Fd,``+t);return n.O()}function lf(e,t){return rm(t)?uf(e,e,t):qu(e,t)}function uf(e,t,n){for(var r=n,i=t;;)if(i===r)return!0;else{if(!i.c()&&!r.c()&&N().z(i.O(),r.O())){var a=i.D(),o=r.D();i=a,r=o;continue}return i.c()&&r.c()}}function df(e){if(this.bE=null,e===null)throw Rd(new q);this.bE=e}S=df.prototype=new Vu,S.constructor=df,S.j=(function(){return!this.bE.c()}),S.h=(function(){var e=this.bE.O();return this.bE=this.bE.D(),e}),new D().i(df,`scala.collection.StrictOptimizedLinearSeqOps$$anon$1`,{eA:1,I:1,b:1,c:1,J:1});function ff(){pf=this,$(),$()}S=ff.prototype=new T,S.constructor=ff,S.aU=(function(e){return $().gL(e)}),S.af=(function(){return new ih}),S.aW=(function(e){return $().gL(e)}),new D().i(ff,`scala.collection.immutable.List$`,{eG:1,a:1,V:1,Y:1,a1:1});var pf;function mf(){return pf||=new ff,pf}function hf(){this.fN=null,gf=this,this.fN=new E(0)}S=hf.prototype=new T,S.constructor=hf,S.aU=(function(e){return this.gv(e)}),S.gv=(function(e){var t=e.q();if(t>=0){var n=this.gM(this.fN,0,t),r=Zd(e)?e.aK(n,0,2147483647):e.e().aK(n,0,2147483647);if(r!==t)throw new Md(`Copied `+r+` of `+t);return ah(new sh,n,t)}return oh(new sh).g9(e)}),S.af=(function(){return new vf}),S.j7=(function(e,t){if(t<0)throw Pu(new Fu,`Overflow while resizing array of array-backed collection. Requested length: `+t+`; current length: `+e+`; increase: `+(t-e|0));if(t<=e)return-1;if(t>2147483639)throw Pu(new Fu,`Array of array-backed collection exceeds VM length limit of 2147483639. Requested length: `+t+`; current length: `+e);if(e>1073741819)return 2147483639;var n=e<<1,r=n>16?n:16;return t>r?t:r}),S.gM=(function(e,t,n){var r=this.j7(e.a.length,n);if(r<0)return e;var i=new E(r);return e.ab(0,i,0,t),i}),S.aW=(function(e){return this.gv(e)}),new D().i(hf,`scala.collection.mutable.ArrayBuffer$`,{eJ:1,a:1,V:1,Y:1,a1:1});var gf;function _f(){return gf||=new hf,gf}function vf(){this.bF=null,Xu(this,(_f(),oh(new sh)))}S=vf.prototype=new Qu,S.constructor=vf,new D().i(vf,`scala.collection.mutable.ArrayBuffer$$anon$1`,{eK:1,bn:1,T:1,U:1,W:1});function yf(){this.bC=null,Hu(this,Mf())}S=yf.prototype=new Wu,S.constructor=yf,new D().i(yf,`scala.collection.mutable.Buffer$`,{eQ:1,ey:1,a:1,V:1,Y:1});var bf;function xf(){return bf||=new yf,bf}function Sf(e,t){return e.bG=t,e}function Cf(){this.bG=null}S=Cf.prototype=new T,S.constructor=Cf;function wf(){}wf.prototype=S,S.a7=(function(e){return qc(this,e)}),S.ag=(function(){return this.bG});function Tf(){}S=Tf.prototype=new T,S.constructor=Tf,S.aU=(function(e){return new ih().cN(e)}),S.af=(function(){return Xu(new Zu,new ih)}),S.aW=(function(e){return new ih().cN(e)}),new D().i(Tf,`scala.collection.mutable.ListBuffer$`,{eU:1,a:1,V:1,Y:1,a1:1});var Ef;function Df(){return Ef||=new Tf,Ef}function Of(e,t){this.dz=null,this.fY=null,this.fX=0,this.dz=e,this.fY=t,this.fX=t.N()|0}S=Of.prototype=new Vu,S.constructor=Of,S.j=(function(){return As().gg(this.fX,this.fY.N()|0,`mutation occurred during iteration`),this.dz.j()}),S.h=(function(){return this.dz.h()}),new D().i(Of,`scala.collection.mutable.MutationTracker$CheckedIterator`,{eW:1,I:1,b:1,c:1,J:1});function kf(e){this.g2=null,this.bJ=0,this.g1=0,this.g2=e,this.bJ=0,this.g1=e.P()}S=kf.prototype=new Vu,S.constructor=kf,S.j=(function(){return this.bJ<this.g1}),S.h=(function(){var e=this.g2.Q(this.bJ);return this.bJ=1+this.bJ|0,e}),new D().i(kf,`scala.runtime.ScalaRunTime$$anon$1`,{fh:1,I:1,b:1,c:1,J:1});function Af(){}S=Af.prototype=new T,S.constructor=Af,S.aU=(function(e){return this.gw(e)}),S.af=(function(){return lh(new uh)}),S.gw=(function(e){return qc(lh(new uh),e).ag()}),S.aW=(function(e){return this.gw(e)}),new D().i(Af,`scala.scalajs.js.WrappedArray$`,{fn:1,a1:1,a:1,V:1,Y:1});var jf;function Mf(){return jf||=new Af,jf}function Nf(){}S=Nf.prototype=new T,S.constructor=Nf,S.aU=(function(e){return this.gx(e)}),S.gx=(function(e){return this.af().a7(e).ag()}),S.af=(function(){return new Yu(new W((e=>new Q(e.aI))),ch(new uh,[]))}),S.aW=(function(e){return this.gx(e)}),new D().i(Nf,`scala.scalajs.runtime.WrappedVarArgs$`,{fy:1,a1:1,a:1,V:1,Y:1});var Pf;function Ff(){return Pf||=new Nf,Pf}function If(e){this.bK=null,this.bK=e}S=If.prototype=new rd,S.constructor=If,S.l=(function(){return R().cK(this,-1408943127,!0)}),S.d=(function(e){if(this===e)return!0;if(e instanceof If){var t=this.bK,n=e.bK;return t===null?n===null:t.d(n)}return!1}),S.m=(function(){return P().dC(this)}),S.P=(function(){return 1}),S.R=(function(){return`Failure`}),S.Q=(function(e){if(e===0)return this.bK;throw Pd(new Fd,e)}),S.gD=(function(){return!0}),S.gE=(function(){return!1}),S.bX=(function(e,t){return e.b(this.bK)}),new D().i(If,`scala.util.Failure`,{bA:1,bC:1,d:1,P:1,a:1});function Lf(e){this.bL=null,this.bL=e}S=Lf.prototype=new rd,S.constructor=Lf,S.l=(function(){return R().cK(this,-1750213842,!0)}),S.d=(function(e){return this===e||e instanceof Lf&&N().z(this.bL,e.bL)}),S.m=(function(){return P().dC(this)}),S.P=(function(){return 1}),S.R=(function(){return`Success`}),S.Q=(function(e){if(e===0)return this.bL;throw Pd(new Fd,e)}),S.gD=(function(){return!1}),S.gE=(function(){return!0}),S.bX=(function(e,t){try{return t.b(this.bL)}catch(t){var n=t instanceof Vc?t:new Z(t),r=$s().jm(n);if(!r.c()){var i=r.s();return e.b(i)}throw n instanceof Z?n.y:n}}),new D().i(Lf,`scala.util.Success`,{bB:1,bC:1,d:1,P:1,a:1});var Rf=class e extends sl{constructor(e){super(),this.bk=null,this.bk=e,L(this,`ObserverError: `+z().cF(e),null,!0,!0)}aL(){return new Jd(this)}l(){return R().ge(this,-889275714,null)}d(t){if(this===t)return!0;if(t instanceof e){var n=this.bk,r=t.bk;return n===null?r===null:n.d(r)}return!1}P(){return 1}R(){return`ObserverError`}Q(e){if(e===0)return this.bk;throw Nd(new Fd,``+e)}m(){return`ObserverError: `+this.bk}};new D().i(Rf,`com.raquo.airstream.core.AirstreamError$ObserverError`,{an:1,aa:1,r:1,a:1,d:1,P:1});var zf=class e extends sl{constructor(e,t){super(),this.bm=null,this.bl=null,this.bm=e,this.bl=t,L(this,`ObserverErrorHandlingError: `+z().cF(e)+`; cause: `+z().cF(t),null,!0,!0),this.ir(t)}aL(){return new Jd(this)}l(){return R().ge(this,-889275714,null)}d(t){if(this===t)return!0;if(t instanceof e){var n=this.bm,r=t.bm;if(n===null?r===null:n.d(r)){var i=this.bl,a=t.bl;return i===null?a===null:i.d(a)}return!1}return!1}P(){return 2}R(){return`ObserverErrorHandlingError`}Q(e){if(e===0)return this.bm;if(e===1)return this.bl;throw Nd(new Fd,``+e)}m(){return`ObserverErrorHandlingError: `+this.bm+`; cause: `+this.bl}};new D().i(zf,`com.raquo.airstream.core.AirstreamError$ObserverErrorHandlingError`,{ao:1,aa:1,r:1,a:1,d:1,P:1});var Bf=class e extends sl{constructor(e,t){super(),this.aZ=null,this.aY=0,this.aZ=e,this.aY=t,L(this,`Transaction depth exceeded maxDepth = `+t+`: Execution of `+e+" aborted. See `Transaction.maxDepth`.",null,!0,!0)}aL(){return new Jd(this)}l(){var e=-889275714;return e=F().o(e,tp(`TransactionDepthExceeded`)),e=F().o(e,F().v(this.aZ)),e=F().o(e,this.aY),F().B(e,2)}d(t){if(this===t)return!0;if(t instanceof e){if(this.aY===t.aY){var n=this.aZ,r=t.aZ;return n===null?r===null:n===r}return!1}return!1}P(){return 2}R(){return`TransactionDepthExceeded`}Q(e){if(e===0)return this.aZ;if(e===1)return this.aY;throw Nd(new Fd,``+e)}m(){return`TransactionDepthExceeded: `+this.aZ+`; maxDepth: `+this.aY}};new D().i(Bf,`com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded`,{ap:1,aa:1,r:1,a:1,d:1,P:1});function Vf(e){Pp(e)}function Hf(e){this.eh=null,this.ej=null,this.cX=null,this.cW=null,this.ei=null,this.eh=void 0,fd(this),this.cX=e,this.cW=new Yp(this.cX,new $u((()=>Ir(this)))),this.ei=this.cW}S=Hf.prototype=new T,S.constructor=Hf,S.cH=(function(){return this.eh}),S.cB=(function(){return Fr(this)}),S.m=(function(){return Ir(this)}),S.j8=(function(e,t){this.cX=e,Fp(this.cW,e,t)}),new D().i(Hf,`com.raquo.airstream.state.SourceVar`,{c0:1,aq:1,ar:1,a2:1,Z:1,c2:1});function Uf(e){this.b6=null,this.b7=null,this.eO=null,this.eP=!1,xu(this,e,$())}S=Uf.prototype=new Cu,S.constructor=Uf,S.ju=(function(){return this.eP||=(this.eO=this.n(`wrap`),!0),this.eO}),new D().i(Uf,`com.raquo.laminar.defs.styles.StyleProps$$anon$31`,{cu:1,a5:1,R:1,a3:1,a4:1,cy:1});function Wf(e,t){this.bq=null,this.ad=null,this.dj=null,this.aP=null,this.f1=null,this.I=null,this.f1=e,this.I=t,this.bq=J(),yc(this),gd(this)}S=Wf.prototype=new T,S.constructor=Wf,S.dJ=(function(){return this.bq}),S.a1=(function(e){ka().aS(e,this,void 0)}),S.cD=(function(){return this.ad}),S.gj=(function(e){this.ad=e}),S.bj=(function(e){bd(this,e)}),S.bi=(function(e){xd(this,e)}),S.m=(function(){return`ReactiveHtmlElement(`+(this.I===null?`tag=`+this.f1.dR():this.I.outerHTML)+`)`}),S.A=(function(){return this.I});var Gf=new D().i(Wf,`com.raquo.laminar.nodes.ReactiveHtmlElement`,{de:1,a6:1,N:1,ad:1,ay:1,dc:1});function Kf(e,t){return Object.is(e,t)}function qf(e){var t=e|0;if(t===e&&1/e!=-1/0)return t;if(e!==e)return 2146959360;var n=$n;return n.setFloat64(0,e,!0),(n.getInt32(0,!0)|0)^(n.getInt32(4,!0)|0)}var Jf=new D().i(0,`java.lang.Double`,{aG:1,X:1,a:1,S:1,O:1,a0:1},(e=>typeof e==`number`)),Yf=new D().i(0,`java.lang.Float`,{dB:1,X:1,a:1,S:1,O:1,a0:1},(e=>sr(e))),Xf=new D().i(0,`java.lang.Integer`,{dE:1,X:1,a:1,S:1,O:1,a0:1},(e=>or(e)));function Zf(e,t,n){if(n instanceof C){var r=n,i=r.l,a=r.h;return(e^i|t^a)===0}return!1}function Qf(e,t){return e^t}var $f=new D().i(0,`java.lang.Long`,{aI:1,X:1,a:1,S:1,O:1,a0:1},(e=>e instanceof C)),ep=class extends jd{constructor(e){super(),L(this,e,null,!0,!0)}};new D().i(ep,`java.lang.NumberFormatException`,{dL:1,aH:1,G:1,y:1,r:1,a:1});function tp(e){for(var t=e.length,n=0,r=0;r!==t;)n=((n<<5)-n|0)+e.charCodeAt(r)|0,r=1+r|0;return n}function np(e,t){return e===t}var rp=new D().i(0,`java.lang.String`,{dQ:1,a:1,S:1,ah:1,O:1,a0:1},(e=>typeof e==`string`));function ip(){}S=ip.prototype=new qd,S.constructor=ip,S.l=(function(){return 2433880}),S.m=(function(){return`None`}),S.P=(function(){return 0}),S.R=(function(){return`None`}),S.Q=(function(e){throw Pd(new Fd,e)}),S.ig=(function(){throw new Hd(`None.get`)}),S.s=(function(){this.ig()}),new D().i(ip,`scala.None$`,{ef:1,aL:1,b:1,d:1,P:1,a:1});var ap;function J(){return ap||=new ip,ap}function Y(e){this.bx=null,this.bx=e}S=Y.prototype=new qd,S.constructor=Y,S.l=(function(){return R().cK(this,1323286827,!0)}),S.d=(function(e){return this===e||e instanceof Y&&N().z(this.bx,e.bx)}),S.m=(function(){return P().dC(this)}),S.P=(function(){return 1}),S.R=(function(){return`Some`}),S.Q=(function(e){if(e===0)return this.bx;throw Pd(new Fd,e)}),S.s=(function(){return this.bx}),new D().i(Y,`scala.Some`,{aM:1,aL:1,b:1,d:1,P:1,a:1});function op(){}S=op.prototype=new T,S.constructor=op;function sp(){}sp.prototype=S,S.q=(function(){return-1}),S.a3=(function(e){us(this,e)}),S.aK=(function(e,t,n){return ds(this,e,t,n)}),S.bf=(function(e,t,n,r){return ps(this,e,t,n,r)}),S.aJ=(function(){return this.ap()});function X(e){this.cr=null,this.ai=0,this.by=0,this.cr=e,this.ai=0,this.by=Lo().a9(this.cr)}S=X.prototype=new Vu,S.constructor=X,S.q=(function(){return this.by-this.ai|0}),S.j=(function(){return this.ai<this.by}),S.h=(function(){this.ai>=Lo().a9(this.cr)&&Xl().K.h();var e=P().aV(this.cr,this.ai);return this.ai=1+this.ai|0,e}),S.cC=(function(e){if(e>0){var t=this.ai+e|0;if(t<0)var n=this.by;else var r=this.by,n=r<t?r:t;this.ai=n}return this}),new D().i(X,`scala.collection.ArrayOps$ArrayIterator`,{en:1,I:1,b:1,c:1,J:1,a:1});function cp(e,t){return e.dv=t,e.aj=0,e.J=t.f(),e}function lp(e,t){return t<0?0:t>e.J?e.J:t}function up(){this.dv=null,this.aj=0,this.J=0}S=up.prototype=new Vu,S.constructor=up;function dp(){}dp.prototype=S,S.q=(function(){return this.J}),S.j=(function(){return this.J>0}),S.h=(function(){if(this.J>0){var e=this.dv.i(this.aj);return this.aj=1+this.aj|0,this.J=this.J-1|0,e}return Xl().K.h()}),S.cC=(function(e){if(e>0){this.aj=this.aj+e|0;var t=this.J-e|0;this.J=t<0?0:t}return this}),S.c3=(function(e,t){var n=lp(this,e),r=lp(this,t)-n|0;return this.J=r<0?0:r,this.aj=this.aj+n|0,this}),new D().i(up,`scala.collection.IndexedSeqView$IndexedSeqViewIterator`,{aT:1,I:1,b:1,c:1,J:1,a:1});function fp(){this.bG=null,Sf(this,Xl().K)}S=fp.prototype=new wf,S.constructor=fp,S.hg=(function(e){return this.bG=this.bG.dL(new eu((()=>new $d(e)))),this}),S.a0=(function(e){return this.hg(e)}),new D().i(fp,`scala.collection.Iterator$$anon$21`,{eu:1,eT:1,T:1,U:1,W:1,a9:1});function pp(e){return e.fK||=(e.fJ=new Nm(new(ru.r()).C(0)),!0),e.fJ}function mp(){this.fL=null,this.fJ=null,this.fK=!1,hp=this,this.fL=new Yd(this)}S=mp.prototype=new T,S.constructor=mp,S.ia=(function(e,t){return e instanceof Sm?e:this.e0(Zo().gt(e,t))}),S.gG=(function(e){return new Yu(new W((t=>this.e0(ms(t,e)))),(_f(),new vf))}),S.e0=(function(e){if(e===null)return null;if(e instanceof E)return new Nm(e);if(e instanceof vr)return new jm(e);if(e instanceof xr)return new km(e);if(e instanceof yr)return new Mm(e);if(e instanceof br)return new Am(e);if(e instanceof hr)return new Om(e);if(e instanceof gr)return new Dm(e);if(e instanceof _r)return new Pm(e);if(e instanceof mr)return new Em(e);if(Mo(e,1))return new Fm(e);throw new Gd(e)}),S.dO=(function(e,t){return this.ia(e,t)}),new D().i(mp,`scala.collection.immutable.ArraySeq$`,{eE:1,a:1,aR:1,aP:1,aQ:1,aX:1});var hp;function gp(){return hp||=new mp,hp}function _p(e){return e.fP=0,e.fQ=0,e}function vp(){this.fP=0,this.fQ=0}S=vp.prototype=new T,S.constructor=vp;function yp(){}yp.prototype=S;function bp(){this.fT=null,this.fS=null,xp=this,this.fT=new Yd(this),this.fS=new qm(new E(0))}S=bp.prototype=new T,S.constructor=bp,S.ib=(function(e,t){return this.gF(Zo().gt(e,t))}),S.gG=(function(e){return new Yu(new W((e=>this.gF(e))),new kp(e.cL()))}),S.gF=(function(e){if(e===null)return null;if(e instanceof E)return new qm(e);if(e instanceof vr)return new Gm(e);if(e instanceof xr)return new Um(e);if(e instanceof yr)return new Km(e);if(e instanceof br)return new Wm(e);if(e instanceof hr)return new Hm(e);if(e instanceof gr)return new Vm(e);if(e instanceof _r)return new Jm(e);if(e instanceof mr)return new Bm(e);if(Mo(e,1))return new Ym(e);throw new Gd(e)}),S.dO=(function(e,t){return this.ib(e,t)}),new D().i(bp,`scala.collection.mutable.ArraySeq$`,{eP:1,a:1,aR:1,aP:1,aQ:1,aX:1});var xp;function Sp(){return xp||=new bp,xp}function Cp(e){this.b6=null,this.b7=null,this.eK=null,this.eL=!1,xu(this,e,$())}S=Cp.prototype=new Cu,S.constructor=Cp,S.i6=(function(){return this.eL||=(this.eK=this.n(`flex`),!0),this.eK}),new D().i(Cp,`com.raquo.laminar.defs.styles.StyleProps$$anon$28`,{cs:1,a5:1,R:1,a3:1,a4:1,cz:1,cw:1});function wp(e){this.b6=null,this.b7=null,this.eM=null,this.eN=!1,xu(this,e,$())}S=wp.prototype=new Cu,S.constructor=wp,S.hB=(function(){return this.eN||=(this.eM=this.n(`center`),!0),this.eM}),new D().i(wp,`com.raquo.laminar.defs.styles.StyleProps$$anon$3`,{ct:1,a5:1,R:1,a3:1,a4:1,cA:1,cx:1});function Tp(e){this.b6=null,this.b7=null,this.eQ=null,this.eR=!1,xu(this,e,$())}S=Tp.prototype=new Cu,S.constructor=Tp,S.iR=(function(){return this.eR||=(this.eQ=ac(this),!0),this.eQ}),new D().i(Tp,`com.raquo.laminar.defs.styles.StyleProps$$anon$5`,{cv:1,a5:1,R:1,a3:1,a4:1,cB:1,cC:1});function Ep(){}S=Ep.prototype=new Ed,S.constructor=Ep;function Dp(){}Dp.prototype=S;function Op(e){return e.aJ()+`(<not computed>)`}function kp(e){this.fP=0,this.fQ=0,this.be=null,this.fR=!1,this.dy=null,this.be=e,_p(this),this.fR=e===Tr.l(),this.dy=[]}S=kp.prototype=new yp,S.constructor=kp,S.ga=(function(e){var t=this.fR?ur(e):e===null?Ds().dY(this.be):e;return this.dy.push(t),this}),S.ha=(function(e){for(var t=e.e();t.j();)this.ga(t.h());return this}),S.ag=(function(){return Ds().dX(this.be===Cr.l()?No.l():this.be===Ns.l()||this.be===ru.l()?Sr.l():this.be,this.dy)}),S.m=(function(){return`ArrayBuilder.generic`}),S.a0=(function(e){return this.ga(e)}),S.a7=(function(e){return this.ha(e)}),new D().i(kp,`scala.collection.mutable.ArrayBuilder$generic`,{eO:1,eM:1,T:1,U:1,W:1,a9:1,a:1});function Ap(e,t){this.dv=null,this.aj=0,this.J=0,this.fW=null,this.fV=0,this.fW=t,cp(this,e),this.fV=t.N()|0}S=Ap.prototype=new dp,S.constructor=Ap,S.j=(function(){return As().gg(this.fV,this.fW.N()|0,`mutation occurred during iteration`),this.J>0}),new D().i(Ap,`scala.collection.mutable.CheckedIndexedSeqView$CheckedIterator`,{eS:1,aT:1,I:1,b:1,c:1,J:1,a:1});function jp(){}S=jp.prototype=new T,S.constructor=jp;function Mp(){}Mp.prototype=S;var Z=class e extends Fu{constructor(e){super(),this.y=null,this.y=e,L(this,null,null,!0,!0)}bY(){return Yn(this.y)}R(){return`JavaScriptException`}P(){return 1}Q(e){return e===0?this.y:F().is(e)}aL(){return new kf(this)}l(){return R().cK(this,1744042595,!0)}d(t){return this===t||t instanceof e&&N().z(this.y,t.y)}};new D().i(Z,`scala.scalajs.js.JavaScriptException`,{by:1,G:1,y:1,r:1,a:1,P:1,d:1});function Np(e,t){e.cb!==void 0&&Gr().gH(),e.cb=t}function Pp(e){var t=e.cb;if(t===void 0){Gr().gH();var n=Pp(e);Np(e,n);var r=n}else var r=t;return r}function Fp(e,t,n){Np(e,t);var r=t.gD(),i=!1;i=!1,e.ca=!1;for(var a=e.bn,o=0;o<(a.length|0);){var s=a[o];o=1+o|0,s.bZ(t),r&&!i&&(i=!0)}for(var c=e.cY,l=0;l<(c.length|0);)c[l],l=1+l|0,r&&!i&&(i=!0);e.ca=!0;var u=e.cc;if(u!==void 0){for(var d=0,f=u.length|0;d<f;)u[d].N(),d=1+d|0;u.length=0}r&&!i&&t.bX(new K((e=>{z().a5(e)})),new K((e=>void 0)))}function Ip(e,t){typeof console<`u`&&(e.ft&&console.error?console.error(t):console.log(t))}function Lp(e){this.ft=!1,this.bu=null,this.ft=e,new Id,this.bu=``}S=Lp.prototype=new Dp,S.constructor=Lp,S.ix=(function(e){for(var t=e;t!==``;){var n=t.indexOf(`
`)|0;if(n<0)this.bu=``+this.bu+t,t=``;else{var r=this.bu,i=t;Ip(this,``+r+i.substring(0,n)),this.bu=``;var a=t,o=1+n|0;t=a.substring(o)}}}),new D().i(Lp,`java.lang.JSConsoleBasedPrintStream`,{dH:1,dv:1,du:1,aC:1,aA:1,aE:1,aB:1,aD:1});function Rp(e,t,n){for(var r=n,i=t;;)if(i<=0||r.c())return r;else{var a=i-1|0,o=r.D();i=a,r=o}}function zp(){this.bH=null}S=zp.prototype=new Mp,S.constructor=zp;function Bp(){}Bp.prototype=S,S.m=(function(){return this.bH}),S.d=(function(e){return this===e}),S.l=(function(){return rr(this)});function Vp(){}S=Vp.prototype=new sp,S.constructor=Vp;function Hp(){}Hp.prototype=S,S.m=(function(){return Op(this)});function Up(){this.bH=null,this.bH=`Any`,$()}S=Up.prototype=new Bp,S.constructor=Up,S.cL=(function(){return Sr.l()}),S.dS=(function(e){return new E(e)}),new D().i(Up,`scala.reflect.ManifestFactory$AnyManifest$`,{f2:1,bu:1,bt:1,a:1,bv:1,bq:1,d:1,br:1,bs:1});var Wp;function Gp(){return Wp||=new Up,Wp}function Kp(){this.bH=null,this.bH=`Object`,$()}S=Kp.prototype=new Bp,S.constructor=Kp,S.cL=(function(){return Sr.l()}),S.dS=(function(e){return new E(e)}),new D().i(Kp,`scala.reflect.ManifestFactory$ObjectManifest$`,{f3:1,bu:1,bt:1,a:1,bv:1,bq:1,d:1,br:1,bs:1});var qp;function Jp(){return qp||=new Kp,qp}function Yp(e,t){this.el=null,this.ca=!1,this.cc=null,this.bn=null,this.cY=null,this.cd=!1,this.cb=null,this.em=null,this.em=t,this.el=void 0,ul(this),id(this),this.cb=void 0,Np(this,e)}S=Yp.prototype=new T,S.constructor=Yp,S.cH=(function(){return this.el}),S.m=(function(){return Ir(this)}),S.d=(function(e){return this===e}),S.l=(function(){return rr(this)}),S.cB=(function(){return this.em.N()+`.signal`}),new D().i(Yp,`com.raquo.airstream.state.VarSignal`,{c5:1,aq:1,Z:1,bE:1,bG:1,ar:1,bL:1,bR:1,bS:1,c1:1});function Xp(e,t){return e===t?!0:Zp(t)&&t.dI(e)?e.cM(t):!1}function Zp(e){return!!(e&&e.$classData&&e.$classData.n.j)}function Qp(){}S=Qp.prototype=new sp,S.constructor=Qp;function $p(){}$p.prototype=S,S.gC=(function(e){return Gu(this,e)}),S.a4=(function(e){return Wl(this,e)}),S.c=(function(){return Ku(this)}),S.cM=(function(e){return qu(this,e)}),S.dI=(function(e){return!0}),S.d=(function(e){return Xp(this,e)}),S.l=(function(){return R().gN(this)}),S.m=(function(){return Xd(this)}),S.bg=(function(e){return this.gC(e|0)});function em(){}S=em.prototype=new Hp,S.constructor=em;function tm(){}tm.prototype=S,S.c=(function(){return Ku(this)});function nm(e){return!!(e&&e.$classData&&e.$classData.n.n)}function rm(e){return!!(e&&e.$classData&&e.$classData.n.a7)}function im(e){e.gY=Ia()}function am(e,t){return e.bD=t,e}function om(){this.bD=null}S=om.prototype=new tm,S.constructor=om;function sm(){}sm.prototype=S,S.i=(function(e){return this.bD.i(e)}),S.f=(function(){return this.bD.f()}),S.c=(function(){return this.bD.c()});function cm(){this.eG=null,this.eH=!1,this.eE=null,this.eF=!1,this.ew=null,this.ex=!1,this.eC=null,this.eD=!1,this.es=null,this.et=!1,this.eu=null,this.ev=!1,this.ey=null,this.ez=!1,this.eA=null,this.eB=!1,this.gX=null,this.er=null,this.gW=null,this.eI=null,this.eJ=!1,this.gY=null,qi(this),Hi(this),Bi(this),Vi(this),im(this)}S=cm.prototype=new T,S.constructor=cm,S.dZ=(function(){return this.eH||=(this.eG=bc(new xc,`span`,!1),!0),this.eG}),S.iP=(function(){return this.eF||=(this.eE=bc(new xc,`p`,!1),!0),this.eE}),S.gk=(function(){return this.ex||=(this.ew=bc(new xc,`div`,!1),!0),this.ew}),S.gJ=(function(){return this.eD||=(this.eC=new sc(`click`),!0),this.eC}),S.hm=(function(){return this.et||=(this.es=new wp(`align-items`),!0),this.es}),S.hP=(function(){return this.ev||=(this.eu=new Cp(`display`),!0),this.eu}),S.i7=(function(){return this.ez||=(this.ey=new Uf(`flex-wrap`),!0),this.ey}),S.ie=(function(){return this.eB||=(this.eA=new Tp(`gap`),!0),this.eA}),S.jf=(function(){return this.eJ||=(this.eI=new _u(this),!0),this.eI}),new D().i(cm,`com.raquo.laminar.api.package$$anon$1`,{ch:1,cD:1,cl:1,cq:1,cp:1,cr:1,cn:1,cf:1,cb:1,ce:1,at:1,aw:1,as:1,cc:1});function lm(){}S=lm.prototype=new tm,S.constructor=lm;function um(){}um.prototype=S,S.a4=(function(e){var t=this.f();return t===e?0:t<e?-1:1}),S.q=(function(){return this.f()}),S.ap=(function(){return`IndexedSeqView`});function dm(e){this.bD=null,am(this,e)}S=dm.prototype=new sm,S.constructor=dm,S.a4=(function(e){var t=this.f();return t===e?0:t<e?-1:1}),S.q=(function(){return this.f()}),S.e=(function(){return cp(new up,this)}),S.ap=(function(){return`IndexedSeqView`}),new D().i(dm,`scala.collection.IndexedSeqView$Id`,{eq:1,ez:1,aN:1,aO:1,l:1,b:1,c:1,i:1,h:1,f:1,a:1,aZ:1,k:1,aW:1,o:1,aS:1});function fm(){}S=fm.prototype=new $p,S.constructor=fm;function pm(){}pm.prototype=S;function mm(e,t){this.dx=null,this.fO=null,this.dx=e,this.fO=t}S=mm.prototype=new um,S.constructor=mm,S.i=(function(e){return this.dx.i(e)}),S.f=(function(){return this.dx.x}),S.aJ=(function(){return`ArrayBufferView`}),S.e=(function(){return new Ap(this,this.fO)}),new D().i(mm,`scala.collection.mutable.ArrayBufferView`,{eL:1,el:1,aN:1,aO:1,l:1,b:1,c:1,i:1,h:1,f:1,a:1,aZ:1,k:1,aW:1,o:1,aS:1});function hm(e,t){return!_m(t)||e.f()===t.f()}function gm(e,t){if(_m(t)){if(e===t)return!0;var n=e.f(),r=n===t.f();if(r){var i=0,a=e.dG(),o=t.dG(),s=a<o?a:o,c=n>>31,l=s>>31,u=s<<1,d=s>>>31|0|l<<1;if(c===d?n>>>0>u>>>0:c>d)var f=s;else var f=n;for(;i<f&&r;)r=N().z(e.i(i),t.i(i)),i=1+i|0;if(i<n&&r)for(var p=e.e().cC(i),ee=t.e().cC(i);r&&p.j();)r=N().z(p.h(),ee.h())}return r}return qu(e,t)}function _m(e){return!!(e&&e.$classData&&e.$classData.n.z)}function vm(){}S=vm.prototype=new $p,S.constructor=vm;function ym(){}ym.prototype=S;function Q(e){this.cx=null,this.cx=e}S=Q.prototype=new T,S.constructor=Q,S.dQ=(function(e){return Ju(this,e)}),S.dI=(function(e){return hm(this,e)}),S.cM=(function(e){return gm(this,e)}),S.dG=(function(){return ws().fM}),S.e=(function(){return cp(new up,new dm(this))}),S.a4=(function(e){var t=this.f();return t===e?0:t<e?-1:1}),S.q=(function(){return this.f()}),S.d=(function(e){return Xp(this,e)}),S.l=(function(){return R().gN(this)}),S.m=(function(){return Xd(this)}),S.c=(function(){return Ku(this)}),S.a3=(function(e){us(this,e)}),S.aK=(function(e,t,n){return ds(this,e,t,n)}),S.bf=(function(e,t,n,r){return ps(this,e,t,n,r)}),S.f=(function(){return this.cx.length|0}),S.i=(function(e){return this.cx[e]}),S.aJ=(function(){return`WrappedVarArgs`}),S.bg=(function(e){return Gu(this,e|0)}),S.b=(function(e){return this.i(e|0)}),S.aX=(function(){return Ff()}),new D().i(Q,`scala.scalajs.runtime.WrappedVarArgs`,{bz:1,z:1,b:1,c:1,i:1,h:1,f:1,A:1,e:1,g:1,k:1,d:1,j:1,C:1,B:1,o:1,n:1,L:1,D:1,p:1,q:1,a:1});function bm(){}S=bm.prototype=new ym,S.constructor=bm;function xm(){}xm.prototype=S,S.a7=(function(e){return qc(this,e)});function Sm(){}S=Sm.prototype=new pm,S.constructor=Sm;function Cm(){}Cm.prototype=S,S.a4=(function(e){var t=this.f();return t===e?0:t<e?-1:1}),S.q=(function(){return this.f()}),S.ap=(function(){return`IndexedSeq`}),S.dI=(function(e){return hm(this,e)}),S.cM=(function(e){return gm(this,e)}),S.iE=(function(e){for(var t=new E(this.f()),n=0;n<t.a.length;)t.a[n]=e.b(this.i(n)),n=1+n|0;return gp().e0(t)}),S.aJ=(function(){return`ArraySeq`}),S.aK=(function(e,t,n){var r=this.f(),i=Lo().a9(e),a=n<r?n:r,o=t<0?i:i-t|0,s=o<a?o:a,c=s<0?0:s;return c>0&&Zo().cz(this.ah(),0,e,t,c),c}),S.dG=(function(){return 2147483647}),S.aX=(function(){return gp().fL}),S.dQ=(function(e){return this.iE(e)});function wm(){}S=wm.prototype=new ym,S.constructor=wm;function Tm(){}Tm.prototype=S,S.a4=(function(e){var t=this.f();return t===e?0:t<e?-1:1}),S.q=(function(){return this.f()}),S.ap=(function(){return`IndexedSeq`}),S.aJ=(function(){return`ArraySeq`}),S.aK=(function(e,t,n){var r=this.f(),i=Lo().a9(e),a=n<r?n:r,o=t<0?i:i-t|0,s=o<a?o:a,c=s<0?0:s;return c>0&&Zo().cz(this.a2(),0,e,t,c),c}),S.d=(function(e){return e instanceof wm&&Lo().a9(this.a2())!==Lo().a9(e.a2())?!1:Xp(this,e)}),S.aX=(function(){return Sp().fT});function Em(e){this.au=null,this.au=e}S=Em.prototype=new Cm,S.constructor=Em,S.f=(function(){return this.au.a.length}),S.bV=(function(e){return this.au.a[e]}),S.l=(function(){var e=R();return e.w(this.au,e.r)}),S.d=(function(e){return e instanceof Em?Bo().gr(this.au,e.au):Xp(this,e)}),S.e=(function(){return new X(this.au)}),S.ah=(function(){return this.au}),S.i=(function(e){return this.bV(e)}),S.b=(function(e){return this.bV(e|0)}),new D().i(Em,`scala.collection.immutable.ArraySeq$ofBoolean`,{b0:1,K:1,H:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,A:1,C:1,B:1,o:1,n:1,L:1,z:1,p:1,q:1,D:1,Q:1,a:1});function Dm(e){this.av=null,this.av=e}S=Dm.prototype=new Cm,S.constructor=Dm,S.f=(function(){return this.av.a.length}),S.bN=(function(e){return this.av.a[e]}),S.l=(function(){var e=R();return e.w(this.av,e.r)}),S.d=(function(e){return e instanceof Dm?Bo().gm(this.av,e.av):Xp(this,e)}),S.e=(function(){return new X(this.av)}),S.ah=(function(){return this.av}),S.i=(function(e){return this.bN(e)}),S.b=(function(e){return this.bN(e|0)}),new D().i(Dm,`scala.collection.immutable.ArraySeq$ofByte`,{b1:1,K:1,H:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,A:1,C:1,B:1,o:1,n:1,L:1,z:1,p:1,q:1,D:1,Q:1,a:1});function Om(e){this.am=null,this.am=e}S=Om.prototype=new Cm,S.constructor=Om,S.f=(function(){return this.am.a.length}),S.bO=(function(e){return this.am.a[e]}),S.l=(function(){var e=R();return e.w(this.am,e.r)}),S.d=(function(e){return e instanceof Om?Bo().gn(this.am,e.am):Xp(this,e)}),S.e=(function(){return new X(this.am)}),S.bf=(function(e,t,n,r){return new Hm(this.am).bf(e,t,n,r)}),S.ah=(function(){return this.am}),S.i=(function(e){return cr(this.bO(e))}),S.b=(function(e){return cr(this.bO(e|0))}),new D().i(Om,`scala.collection.immutable.ArraySeq$ofChar`,{b2:1,K:1,H:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,A:1,C:1,B:1,o:1,n:1,L:1,z:1,p:1,q:1,D:1,Q:1,a:1});function km(e){this.aw=null,this.aw=e}S=km.prototype=new Cm,S.constructor=km,S.f=(function(){return this.aw.a.length}),S.bP=(function(e){return this.aw.a[e]}),S.l=(function(){var e=R();return e.w(this.aw,e.r)}),S.d=(function(e){if(e instanceof km){var t=this.aw,n=e.aw;if(t===n)return!0;if(t.a.length===n.a.length){for(var r=0;r<t.a.length&&t.a[r]===n.a[r];)r=1+r|0;return r>=t.a.length}return!1}return Xp(this,e)}),S.e=(function(){return new X(this.aw)}),S.ah=(function(){return this.aw}),S.i=(function(e){return this.bP(e)}),S.b=(function(e){return this.bP(e|0)}),new D().i(km,`scala.collection.immutable.ArraySeq$ofDouble`,{b3:1,K:1,H:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,A:1,C:1,B:1,o:1,n:1,L:1,z:1,p:1,q:1,D:1,Q:1,a:1});function Am(e){this.ax=null,this.ax=e}S=Am.prototype=new Cm,S.constructor=Am,S.f=(function(){return this.ax.a.length}),S.bQ=(function(e){return this.ax.a[e]}),S.l=(function(){var e=R();return e.w(this.ax,e.r)}),S.d=(function(e){if(e instanceof Am){var t=this.ax,n=e.ax;if(t===n)return!0;if(t.a.length===n.a.length){for(var r=0;r<t.a.length&&t.a[r]===n.a[r];)r=1+r|0;return r>=t.a.length}return!1}return Xp(this,e)}),S.e=(function(){return new X(this.ax)}),S.ah=(function(){return this.ax}),S.i=(function(e){return this.bQ(e)}),S.b=(function(e){return this.bQ(e|0)}),new D().i(Am,`scala.collection.immutable.ArraySeq$ofFloat`,{b4:1,K:1,H:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,A:1,C:1,B:1,o:1,n:1,L:1,z:1,p:1,q:1,D:1,Q:1,a:1});function jm(e){this.ay=null,this.ay=e}S=jm.prototype=new Cm,S.constructor=jm,S.f=(function(){return this.ay.a.length}),S.bR=(function(e){return this.ay.a[e]}),S.l=(function(){var e=R();return e.w(this.ay,e.r)}),S.d=(function(e){return e instanceof jm?Bo().go(this.ay,e.ay):Xp(this,e)}),S.e=(function(){return new X(this.ay)}),S.ah=(function(){return this.ay}),S.i=(function(e){return this.bR(e)}),S.b=(function(e){return this.bR(e|0)}),new D().i(jm,`scala.collection.immutable.ArraySeq$ofInt`,{b5:1,K:1,H:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,A:1,C:1,B:1,o:1,n:1,L:1,z:1,p:1,q:1,D:1,Q:1,a:1});function Mm(e){this.az=null,this.az=e}S=Mm.prototype=new Cm,S.constructor=Mm,S.f=(function(){return this.az.a.length>>>1|0}),S.bS=(function(e){var t=this.az.a,n=e<<1;return w(t[n],t[n+1|0])}),S.l=(function(){var e=R();return e.w(this.az,e.r)}),S.d=(function(e){return e instanceof Mm?Bo().gp(this.az,e.az):Xp(this,e)}),S.e=(function(){return new X(this.az)}),S.ah=(function(){return this.az}),S.i=(function(e){return this.bS(e)}),S.b=(function(e){return this.bS(e|0)}),new D().i(Mm,`scala.collection.immutable.ArraySeq$ofLong`,{b6:1,K:1,H:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,A:1,C:1,B:1,o:1,n:1,L:1,z:1,p:1,q:1,D:1,Q:1,a:1});function Nm(e){this.aA=null,this.aA=e}S=Nm.prototype=new Cm,S.constructor=Nm,S.f=(function(){return this.aA.a.length}),S.i=(function(e){return this.aA.a[e]}),S.l=(function(){var e=R();return e.w(this.aA,e.r)}),S.d=(function(e){return e instanceof Nm?Zo().gs(this.aA,e.aA):Xp(this,e)}),S.e=(function(){return new X(this.aA)}),S.ah=(function(){return this.aA}),S.b=(function(e){return this.i(e|0)}),new D().i(Nm,`scala.collection.immutable.ArraySeq$ofRef`,{b7:1,K:1,H:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,A:1,C:1,B:1,o:1,n:1,L:1,z:1,p:1,q:1,D:1,Q:1,a:1});function Pm(e){this.aB=null,this.aB=e}S=Pm.prototype=new Cm,S.constructor=Pm,S.f=(function(){return this.aB.a.length}),S.bT=(function(e){return this.aB.a[e]}),S.l=(function(){var e=R();return e.w(this.aB,e.r)}),S.d=(function(e){return e instanceof Pm?Bo().gq(this.aB,e.aB):Xp(this,e)}),S.e=(function(){return new X(this.aB)}),S.ah=(function(){return this.aB}),S.i=(function(e){return this.bT(e)}),S.b=(function(e){return this.bT(e|0)}),new D().i(Pm,`scala.collection.immutable.ArraySeq$ofShort`,{b8:1,K:1,H:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,A:1,C:1,B:1,o:1,n:1,L:1,z:1,p:1,q:1,D:1,Q:1,a:1});function Fm(e){this.aQ=null,this.aQ=e}S=Fm.prototype=new Cm,S.constructor=Fm,S.f=(function(){return this.aQ.a.length}),S.bU=(function(e){}),S.l=(function(){var e=R();return e.w(this.aQ,e.r)}),S.d=(function(e){return e instanceof Fm?this.aQ.a.length===e.aQ.a.length:Xp(this,e)}),S.e=(function(){return new X(this.aQ)}),S.ah=(function(){return this.aQ}),S.i=(function(e){this.bU(e)}),S.b=(function(e){this.bU(e|0)}),new D().i(Fm,`scala.collection.immutable.ArraySeq$ofUnit`,{b9:1,K:1,H:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,A:1,C:1,B:1,o:1,n:1,L:1,z:1,p:1,q:1,D:1,Q:1,a:1});function Im(e,t,n,r){for(var i=r,a=n;;)if(a===t)return!i.c()|0;else{if(!i.c()){var o=1+a|0,s=i.D();a=o,i=s;continue}return-1}}function Lm(e,t,n){for(var r=n,i=t;;)if(i===r)return!0;else{var a=i.c(),o=r.c();if(!(a||o)&&N().z(i.O(),r.O())){var s=i.D(),c=r.D();i=s,r=c;continue}return a&&o}}function Rm(){}S=Rm.prototype=new pm,S.constructor=Rm;function zm(){}zm.prototype=S,S.gC=(function(e){return sf(this,e)}),S.i=(function(e){return cf(this,e)}),S.cM=(function(e){return lf(this,e)}),S.ap=(function(){return`LinearSeq`}),S.e=(function(){return new df(this)}),S.h8=(function(e){if(this.c())return e;if(e.c())return this;for(var t=new Xm(e.O(),this),n=t,r=e.D();!r.c();){var i=new Xm(r.O(),this);n.al=i,n=i,r=r.D()}return t}),S.c=(function(){return this===$()}),S.gL=(function(e){if(e instanceof Rm)return this.h8(e);if(e.q()===0)return this;if(e instanceof ih&&this.c())return e.gR();var t=e.e();if(t.j()){for(var n=new Xm(t.h(),this),r=n;t.j();){var i=new Xm(t.h(),this);r.al=i,r=i}return n}return this}),S.iF=(function(e){if(this===$())var t=$();else{for(var n=new Xm(e.b(this.O()),$()),r=n,i=this.D();i!==$();){var a=new Xm(e.b(i.O()),$());r.al=a,r=a,i=i.D()}var t=n}return t}),S.a3=(function(e){for(var t=this;!t.c();)e.b(t.O()),t=t.D()}),S.f=(function(){for(var e=this,t=0;!e.c();)t=1+t|0,e=e.D();return t}),S.a4=(function(e){return e<0?1:Im(this,e,0,this)}),S.aJ=(function(){return`List`}),S.d=(function(e){return e instanceof Rm?Lm(this,this,e):Xp(this,e)}),S.aX=(function(){return mf()}),S.dQ=(function(e){return this.iF(e)}),S.hU=(function(e){return Rp(this,e,this)}),S.bg=(function(e){return sf(this,e|0)}),S.b=(function(e){return cf(this,e|0)});function Bm(e){this.aC=null,this.aC=e}S=Bm.prototype=new Tm,S.constructor=Bm,S.f=(function(){return this.aC.a.length}),S.bV=(function(e){return this.aC.a[e]}),S.l=(function(){var e=R();return e.w(this.aC,e.r)}),S.d=(function(e){return e instanceof Bm?Bo().gr(this.aC,e.aC):wm.prototype.d.call(this,e)}),S.e=(function(){return new X(this.aC)}),S.a2=(function(){return this.aC}),S.i=(function(e){return this.bV(e)}),S.b=(function(e){return this.bV(e|0)}),new D().i(Bm,`scala.collection.mutable.ArraySeq$ofBoolean`,{bd:1,M:1,t:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,v:1,s:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function Vm(e){this.aD=null,this.aD=e}S=Vm.prototype=new Tm,S.constructor=Vm,S.f=(function(){return this.aD.a.length}),S.bN=(function(e){return this.aD.a[e]}),S.l=(function(){var e=R();return e.w(this.aD,e.r)}),S.d=(function(e){return e instanceof Vm?Bo().gm(this.aD,e.aD):wm.prototype.d.call(this,e)}),S.e=(function(){return new X(this.aD)}),S.a2=(function(){return this.aD}),S.i=(function(e){return this.bN(e)}),S.b=(function(e){return this.bN(e|0)}),new D().i(Vm,`scala.collection.mutable.ArraySeq$ofByte`,{be:1,M:1,t:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,v:1,s:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function Hm(e){this.V=null,this.V=e}S=Hm.prototype=new Tm,S.constructor=Hm,S.f=(function(){return this.V.a.length}),S.bO=(function(e){return this.V.a[e]}),S.l=(function(){var e=R();return e.w(this.V,e.r)}),S.d=(function(e){return e instanceof Hm?Bo().gn(this.V,e.V):wm.prototype.d.call(this,e)}),S.e=(function(){return new X(this.V)}),S.bf=(function(e,t,n,r){var i=e.M;t.length!==0&&(i.p=``+i.p+t);var a=this.V.a.length;if(a!==0){if(n===``)i.hp(this.V);else{i.f();var o=this.V.a[0],s=``+Qn(o);i.p+=s;for(var c=1;c<a;){i.p=``+i.p+n;var l=this.V.a[c],u=``+Qn(l);i.p+=u,c=1+c|0}}}return r.length!==0&&(i.p=``+i.p+r),e}),S.a2=(function(){return this.V}),S.i=(function(e){return cr(this.bO(e))}),S.b=(function(e){return cr(this.bO(e|0))}),new D().i(Hm,`scala.collection.mutable.ArraySeq$ofChar`,{bf:1,M:1,t:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,v:1,s:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function Um(e){this.W=null,this.W=e}S=Um.prototype=new Tm,S.constructor=Um,S.f=(function(){return this.W.a.length}),S.bP=(function(e){return this.W.a[e]}),S.l=(function(){var e=R();return e.w(this.W,e.r)}),S.d=(function(e){if(e instanceof Um){var t=e.W;if(this.W===t)return!0;if(this.W.a.length===t.a.length){for(var n=0;n<this.W.a.length&&this.W.a[n]===t.a[n];)n=1+n|0;return n>=this.W.a.length}return!1}return wm.prototype.d.call(this,e)}),S.e=(function(){return new X(this.W)}),S.a2=(function(){return this.W}),S.i=(function(e){return this.bP(e)}),S.b=(function(e){return this.bP(e|0)}),new D().i(Um,`scala.collection.mutable.ArraySeq$ofDouble`,{bg:1,M:1,t:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,v:1,s:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function Wm(e){this.X=null,this.X=e}S=Wm.prototype=new Tm,S.constructor=Wm,S.f=(function(){return this.X.a.length}),S.bQ=(function(e){return this.X.a[e]}),S.l=(function(){var e=R();return e.w(this.X,e.r)}),S.d=(function(e){if(e instanceof Wm){var t=e.X;if(this.X===t)return!0;if(this.X.a.length===t.a.length){for(var n=0;n<this.X.a.length&&this.X.a[n]===t.a[n];)n=1+n|0;return n>=this.X.a.length}return!1}return wm.prototype.d.call(this,e)}),S.e=(function(){return new X(this.X)}),S.a2=(function(){return this.X}),S.i=(function(e){return this.bQ(e)}),S.b=(function(e){return this.bQ(e|0)}),new D().i(Wm,`scala.collection.mutable.ArraySeq$ofFloat`,{bh:1,M:1,t:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,v:1,s:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function Gm(e){this.aE=null,this.aE=e}S=Gm.prototype=new Tm,S.constructor=Gm,S.f=(function(){return this.aE.a.length}),S.bR=(function(e){return this.aE.a[e]}),S.l=(function(){var e=R();return e.w(this.aE,e.r)}),S.d=(function(e){return e instanceof Gm?Bo().go(this.aE,e.aE):wm.prototype.d.call(this,e)}),S.e=(function(){return new X(this.aE)}),S.a2=(function(){return this.aE}),S.i=(function(e){return this.bR(e)}),S.b=(function(e){return this.bR(e|0)}),new D().i(Gm,`scala.collection.mutable.ArraySeq$ofInt`,{bi:1,M:1,t:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,v:1,s:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function Km(e){this.aF=null,this.aF=e}S=Km.prototype=new Tm,S.constructor=Km,S.f=(function(){return this.aF.a.length>>>1|0}),S.bS=(function(e){var t=this.aF.a,n=e<<1;return w(t[n],t[n+1|0])}),S.l=(function(){var e=R();return e.w(this.aF,e.r)}),S.d=(function(e){return e instanceof Km?Bo().gp(this.aF,e.aF):wm.prototype.d.call(this,e)}),S.e=(function(){return new X(this.aF)}),S.a2=(function(){return this.aF}),S.i=(function(e){return this.bS(e)}),S.b=(function(e){return this.bS(e|0)}),new D().i(Km,`scala.collection.mutable.ArraySeq$ofLong`,{bj:1,M:1,t:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,v:1,s:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function qm(e){this.aG=null,this.aG=e}S=qm.prototype=new Tm,S.constructor=qm,S.f=(function(){return this.aG.a.length}),S.i=(function(e){return this.aG.a[e]}),S.l=(function(){var e=R();return e.w(this.aG,e.r)}),S.d=(function(e){return e instanceof qm?Zo().gs(this.aG,e.aG):wm.prototype.d.call(this,e)}),S.e=(function(){return new X(this.aG)}),S.a2=(function(){return this.aG}),S.b=(function(e){return this.i(e|0)}),new D().i(qm,`scala.collection.mutable.ArraySeq$ofRef`,{bk:1,M:1,t:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,v:1,s:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function Jm(e){this.aH=null,this.aH=e}S=Jm.prototype=new Tm,S.constructor=Jm,S.f=(function(){return this.aH.a.length}),S.bT=(function(e){return this.aH.a[e]}),S.l=(function(){var e=R();return e.w(this.aH,e.r)}),S.d=(function(e){return e instanceof Jm?Bo().gq(this.aH,e.aH):wm.prototype.d.call(this,e)}),S.e=(function(){return new X(this.aH)}),S.a2=(function(){return this.aH}),S.i=(function(e){return this.bT(e)}),S.b=(function(e){return this.bT(e|0)}),new D().i(Jm,`scala.collection.mutable.ArraySeq$ofShort`,{bl:1,M:1,t:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,v:1,s:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function Ym(e){this.aR=null,this.aR=e}S=Ym.prototype=new Tm,S.constructor=Ym,S.f=(function(){return this.aR.a.length}),S.bU=(function(e){}),S.l=(function(){var e=R();return e.w(this.aR,e.r)}),S.d=(function(e){return e instanceof Ym?this.aR.a.length===e.aR.a.length:wm.prototype.d.call(this,e)}),S.e=(function(){return new X(this.aR)}),S.a2=(function(){return this.aR}),S.i=(function(e){this.bU(e)}),S.b=(function(e){this.bU(e|0)}),new D().i(Ym,`scala.collection.mutable.ArraySeq$ofUnit`,{bm:1,M:1,t:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,v:1,s:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function Xm(e,t){this.dw=null,this.al=null,this.dw=e,this.al=t}S=Xm.prototype=new zm,S.constructor=Xm,S.aL=(function(){return new Jd(this)}),S.P=(function(){return 2}),S.R=(function(){return`::`}),S.Q=(function(e){if(e===0)return this.dw;if(e===1)return this.al;throw Pd(new Fd,e)}),S.O=(function(){return this.dw}),S.D=(function(){return this.al}),new D().i(Xm,`scala.collection.immutable.$colon$colon`,{eD:1,aj:1,H:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,A:1,C:1,B:1,aV:1,a7:1,bb:1,ba:1,p:1,q:1,aY:1,D:1,a:1,a8:1,P:1});function Zm(){Qm=this,$(),$()}S=Zm.prototype=new zm,S.constructor=Zm,S.aL=(function(){return new Jd(this)}),S.P=(function(){return 0}),S.R=(function(){return`Nil`}),S.Q=(function(e){throw Pd(new Fd,e)}),S.io=(function(){throw new Hd(`head of empty list`)}),S.jj=(function(){throw new Bd(`tail of empty list`)}),S.q=(function(){return 0}),S.e=(function(){return Xl().K}),S.O=(function(){this.io()}),S.D=(function(){this.jj()}),new D().i(Zm,`scala.collection.immutable.Nil$`,{eI:1,aj:1,H:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,A:1,C:1,B:1,aV:1,a7:1,bb:1,ba:1,p:1,q:1,aY:1,D:1,a:1,a8:1,P:1});var Qm;function $(){return Qm||=new Zm,Qm}function $m(e,t){return e.M=t,e}function eh(e){return $m(e,new Iu),e}function th(){this.M=null}S=th.prototype=new ym,S.constructor=th,S.a7=(function(e){return qc(this,e)}),S.e=(function(){return cp(new up,new dm(this))}),S.a4=(function(e){var t=this.M.f();return t===e?0:t<e?-1:1}),S.ap=(function(){return`IndexedSeq`}),S.f=(function(){return this.M.f()}),S.q=(function(){return this.M.f()}),S.hf=(function(e){var t=this.M,n=``+Qn(e);return t.p+=n,this}),S.m=(function(){return this.M.p}),S.c=(function(){return this.M.f()===0}),S.i=(function(e){return cr(this.M.gf(e))}),S.b=(function(e){var t=e|0;return cr(this.M.gf(t))}),S.a0=(function(e){return this.hf(ur(e))}),S.ag=(function(){return this.M.p}),new D().i(th,`scala.collection.mutable.StringBuilder`,{eX:1,t:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,v:1,s:1,u:1,x:1,w:1,T:1,U:1,W:1,a9:1,o:1,n:1,F:1,E:1,ah:1,a:1});function nh(e){var t=new ih().cN(e);e.Y=t.Y,e.ao=t.ao,e.ct=!1}function rh(e){e.cu=1+e.cu|0,e.ct&&nh(e)}function ih(){this.cu=0,this.Y=null,this.ao=null,this.ct=!1,this.Z=0,this.cu=0,this.Y=$(),this.ao=null,this.ct=!1,this.Z=0}S=ih.prototype=new xm,S.constructor=ih,S.e=(function(){return new Of(this.Y.e(),new eu((()=>this.cu)))}),S.i=(function(e){return cf(this.Y,e)}),S.f=(function(){return this.Z}),S.q=(function(){return this.Z}),S.c=(function(){return this.Z===0}),S.gR=(function(){return this.ct=!this.c(),this.Y}),S.hk=(function(e){rh(this);var t=new Xm(e,$());if(this.Z===0)this.Y=t;else{var n=this.ao;n===null&&Is().bh(),n.al=t}return this.ao=t,this.Z=1+this.Z|0,this}),S.cN=(function(e){var t=e.e();if(t.j()){var n=1,r=new Xm(t.h(),$());for(this.Y=r;t.j();){var i=new Xm(t.h(),$());r.al=i,r=i,n=1+n|0}this.Z=n,this.ao=r}return this}),S.hd=(function(e){var t=e.e();if(t.j()){var n=new ih().cN(t);if(rh(this),this.Z===0)this.Y=n.Y;else{var r=this.ao;r===null&&Is().bh(),r.al=n.Y}this.ao=n.ao,this.Z=this.Z+n.Z|0}return this}),S.ap=(function(){return`ListBuffer`}),S.aX=(function(){return Df()}),S.b=(function(e){var t=e|0;return cf(this.Y,t)}),S.ag=(function(){return this.gR()}),S.a0=(function(e){return this.hk(e)}),S.a7=(function(e){return this.hd(e)}),new D().i(ih,`scala.collection.mutable.ListBuffer`,{bp:1,ak:1,t:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,v:1,s:1,u:1,x:1,w:1,T:1,U:1,am:1,al:1,p:1,q:1,W:1,a9:1,a:1,a8:1});function ah(e,t,n){return e.bd=0,e.an=t,e.x=n,e}function oh(e){return ah(e,new E(16),0),e}function sh(){this.bd=0,this.an=null,this.x=0}S=sh.prototype=new xm,S.constructor=sh,S.e=(function(){return this.jr().e()}),S.a4=(function(e){var t=this.x;return t===e?0:t<e?-1:1}),S.q=(function(){return this.x}),S.gl=(function(e){this.an=_f().gM(this.an,this.x,e)}),S.i=(function(e){var t=1+e|0;if(e<0)throw xs().gB(e,this.x-1|0);if(t>this.x)throw xs().gB(t-1|0,this.x-1|0);return this.an.a[e]}),S.f=(function(){return this.x}),S.jr=(function(){return new mm(this,new eu((()=>this.bd)))}),S.hh=(function(e){this.bd=1+this.bd|0;var t=1+this.x|0;return this.an.a.length<=(t-1|0)&&this.gl(t),this.x=t,this.an.a[t-1|0]=e,this}),S.g9=(function(e){if(e instanceof sh){var t=e.x;t>0&&(this.bd=1+this.bd|0,this.gl(this.x+t|0),Zo().cz(e.an,0,this.an,this.x,t),this.x=this.x+t|0)}else qc(this,e);return this}),S.ap=(function(){return`ArrayBuffer`}),S.aK=(function(e,t,n){var r=this.x,i=Lo().a9(e),a=n<r?n:r,o=t<0?i:i-t|0,s=o<a?o:a,c=s<0?0:s;return c>0&&Zo().cz(this.an,0,e,t,c),c}),S.b=(function(e){return this.i(e|0)}),S.aX=(function(){return _f()}),S.a0=(function(e){return this.hh(e)}),S.a7=(function(e){return this.g9(e)}),new D().i(sh,`scala.collection.mutable.ArrayBuffer`,{bc:1,ak:1,t:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,v:1,s:1,u:1,x:1,w:1,T:1,U:1,am:1,al:1,o:1,n:1,F:1,E:1,bo:1,p:1,q:1,a:1,a8:1});function ch(e,t){return e.aI=t,e}function lh(e){return ch(e,[]),e}function uh(){this.aI=null}S=uh.prototype=new xm,S.constructor=uh,S.ap=(function(){return`IndexedSeq`}),S.e=(function(){return cp(new up,new dm(this))}),S.a4=(function(e){var t=this.aI.length|0;return t===e?0:t<e?-1:1}),S.i=(function(e){return this.aI[e]}),S.f=(function(){return this.aI.length|0}),S.q=(function(){return this.aI.length|0}),S.aJ=(function(){return`WrappedArray`}),S.ag=(function(){return this}),S.a0=(function(e){return this.aI.push(e),this}),S.b=(function(e){var t=e|0;return this.aI[t]}),S.aX=(function(){return Mf()}),new D().i(uh,`scala.scalajs.js.WrappedArray`,{fm:1,ak:1,t:1,m:1,l:1,b:1,c:1,i:1,h:1,f:1,e:1,g:1,k:1,d:1,j:1,v:1,s:1,u:1,x:1,w:1,T:1,U:1,am:1,al:1,q:1,p:1,E:1,o:1,n:1,F:1,bo:1,W:1,a:1}),Ua(new(rp.r()).C([]));