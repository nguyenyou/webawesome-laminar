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
const f=globalThis,p=f.ShadowRoot&&(f.ShadyCSS===void 0||f.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,m=Symbol(),h=/* @__PURE__ */ new WeakMap;var g=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==m)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(p&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=h.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&h.set(t,e))}return e}toString(){return this.cssText}};const _=e=>new g(typeof e==`string`?e:e+``,void 0,m),v=(e,...t)=>new g(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,m),y=(e,t)=>{if(p)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=f.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},ee=p?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return _(t)})(e):e,{is:b,defineProperty:te,getOwnPropertyDescriptor:ne,getOwnPropertyNames:re,getOwnPropertySymbols:ie,getPrototypeOf:ae}=Object,oe=globalThis,se=oe.trustedTypes,ce=se?se.emptyScript:``,le=oe.reactiveElementPolyfillSupport,ue=(e,t)=>e,de={toAttribute(e,t){
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
switch(t){case Boolean:e=e?ce:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},fe=(e,t)=>!b(e,t),pe={attribute:!0,type:String,converter:de,reflect:!1,useDefault:!1,hasChanged:fe};Symbol.metadata??=Symbol(`metadata`),oe.litPropertyMetadata??=/* @__PURE__ */ new WeakMap;var me=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=pe){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&te(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=ne(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??pe}static _$Ei(){if(this.hasOwnProperty(ue(`elementProperties`)))return;let e=ae(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ue(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ue(`properties`))){let e=this.properties,t=[...re(e),...ie(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=/* @__PURE__ */ new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(ee(e))}else e!==void 0&&t.push(ee(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=/* @__PURE__ */ new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=/* @__PURE__ */ new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=/* @__PURE__ */ new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return y(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?de:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?de:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??fe)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=/* @__PURE__ */ new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=/* @__PURE__ */ new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=/* @__PURE__ */ new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};me.elementStyles=[],me.shadowRootOptions={mode:`open`},me[ue(`elementProperties`)]=/* @__PURE__ */ new Map,me[ue(`finalized`)]=/* @__PURE__ */ new Map,le?.({ReactiveElement:me}),(oe.reactiveElementVersions??=[]).push(`2.1.2`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const he=globalThis,ge=e=>e,_e=he.trustedTypes,ve=_e?_e.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,ye=`$lit$`,be=`lit$${Math.random().toFixed(9).slice(2)}$`,xe=`?`+be,Se=`<${xe}>`,Ce=document,we=()=>Ce.createComment(``),Te=e=>e===null||typeof e!=`object`&&typeof e!=`function`,Ee=Array.isArray,De=e=>Ee(e)||typeof e?.[Symbol.iterator]==`function`,Oe=`[ 	
\f\r]`,ke=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ae=/-->/g,je=/>/g,Me=RegExp(`>|${Oe}(?:([^\\s"'>=/]+)(${Oe}*=${Oe}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Ne=/'/g,Pe=/"/g,Fe=/^(?:script|style|textarea|title)$/i,Ie=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),Le=Symbol.for(`lit-noChange`),Re=Symbol.for(`lit-nothing`),ze=/* @__PURE__ */ new WeakMap,Be=Ce.createTreeWalker(Ce,129);function Ve(e,t){if(!Ee(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return ve===void 0?t:ve.createHTML(t)}const He=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=ke;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===ke?c[1]===`!--`?o=Ae:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=Me):(Fe.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=Me):o=je:o===Me?c[0]===`>`?(o=i??ke,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?Me:c[3]===`"`?Pe:Ne):o===Pe||o===Ne?o=Me:o===Ae||o===je?o=ke:(o=Me,i=void 0);let d=o===Me&&e[t+1].startsWith(`/>`)?` `:``;a+=o===ke?n+Se:l>=0?(r.push(s),n.slice(0,l)+ye+n.slice(l)+be+d):n+be+(l===-2?t:d)}return[Ve(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]};var Ue=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=He(t,n);if(this.el=e.createElement(l,r),Be.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=Be.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(ye)){let t=u[o++],n=i.getAttribute(e).split(be),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Je:r[1]===`?`?Ye:r[1]===`@`?Xe:qe}),i.removeAttribute(e)}else e.startsWith(be)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Fe.test(i.tagName)){let e=i.textContent.split(be),t=e.length-1;if(t>0){i.textContent=_e?_e.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],we()),Be.nextNode(),c.push({type:2,index:++a});i.append(e[t],we())}}}else if(i.nodeType===8){if(i.data===xe)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(be,e+1))!==-1;)c.push({type:7,index:a}),e+=be.length-1}}a++}}static createElement(e,t){let n=Ce.createElement(`template`);return n.innerHTML=e,n}};function We(e,t,n=e,r){if(t===Le)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=Te(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=We(e,i._$AS(e,t.values),i,r)),t}var Ge=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??Ce).importNode(t,!0);Be.currentNode=r;let i=Be.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Ke(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Ze(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=Be.nextNode(),a++)}return Be.currentNode=Ce,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Ke=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=Re,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=We(this,e,t),Te(e)?e===Re||e==null||e===``?(this._$AH!==Re&&this._$AR(),this._$AH=Re):e!==this._$AH&&e!==Le&&this._(e):e._$litType$===void 0?e.nodeType===void 0?De(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Re&&Te(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ce.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Ue.createElement(Ve(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Ge(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=ze.get(e.strings);return t===void 0&&ze.set(e.strings,t=new Ue(e)),t}k(t){Ee(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(we()),this.O(we()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=ge(e).nextSibling;ge(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},qe=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=Re,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(/* @__PURE__ */ new String),this.strings=n):this._$AH=Re}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=We(this,e,t,0),a=!Te(e)||e!==this._$AH&&e!==Le,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=We(this,r[n+o],t,o),s===Le&&(s=this._$AH[o]),a||=!Te(s)||s!==this._$AH[o],s===Re?e=Re:e!==Re&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===Re?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Je=class extends qe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Re?void 0:e}},Ye=class extends qe{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Re)}},Xe=class extends qe{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=We(this,e,t,0)??Re)===Le)return;let n=this._$AH,r=e===Re&&n!==Re||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==Re&&(n===Re||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ze=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){We(this,e)}};const Qe={M:ye,P:be,A:xe,C:1,L:He,R:Ge,D:De,V:We,I:Ke,H:qe,N:Ye,U:Xe,B:Je,F:Ze},$e=he.litHtmlPolyfillSupport;$e?.(Ue,Ke),(he.litHtmlVersions??=[]).push(`3.3.3`);const et=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Ke(t.insertBefore(we(),e),e,void 0,n??{})}return i._$AI(e),i},tt=globalThis
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
;var nt=class extends me{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=et(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Le}};nt._$litElement$=!0,nt.finalized=!0,tt.litElementHydrateSupport?.({LitElement:nt});const rt=tt.litElementPolyfillSupport;rt?.({LitElement:nt}),(tt.litElementVersions??=[]).push(`4.2.2`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const it=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},at={attribute:!0,type:String,converter:de,reflect:!1,hasChanged:fe},ot=(e=at,t,n)=>{
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
var ut=v`
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
`,dt=/;\s+$/;function ft(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function pt(e){let{property:t,value:n,element:r}=e;if(n){let e=r.getAttribute(`style`)||``;e&&(e.match(dt)||(e+=`;`),e+=` `);let i=`${t}: ${n}`;return e.includes(i)?void 0:`${e}${i};`}return null}var mt,ht=class extends nt{constructor(){super(),u(this,mt,!1),this.initialReflectedProperties=/* @__PURE__ */ new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,t)=>{if(this.internals?.states)try{t?this.internals.states.add(e):this.internals.states.delete(e)}catch(e){if(String(e).includes(`must start with '--'`))console.error(`Your browser implements an outdated version of CustomStateSet. Consider using a polyfill`);else throw e}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error(`Element internals are not supported in your browser. Consider using a polyfill`)}this.customStates.set(`wa-defined`,!0);let e=this.constructor;for(let[t,n]of e.elementProperties)n.default===`inherit`&&n.initial!==void 0&&typeof t==`string`&&this.customStates.set(`initial-${t}-${n.initial}`,!0)}static get styles(){return[ut,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `)),this.didSSR&&this.updateComplete.then(()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `))})}attributeChangedCallback(e,t,n){l(this,mt)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),d(this,mt,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll(`slot`).forEach(e=>{e.dispatchEvent(new Event(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(e){if(this.didSSR&&!this.hasUpdated){let t=new Event(`lit-hydration-error`,{bubbles:!0,composed:!0,cancelable:!1});t.error=e,this.dispatchEvent(t)}throw e}}setStyle(e,t){if(this.style)this.style[e]=t;else{let n=pt({property:ft(e),value:t,element:this});n&&this.setAttribute(`style`,n)}}setStyleProperty(e,t){if(this.style)this.style.setProperty(e,t);else{let n=pt({property:e,value:t,element:this});n&&this.setAttribute(`style`,n)}}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};mt=/* @__PURE__ */ new WeakMap,s([x()],ht.prototype,`dir`,2),s([x()],ht.prototype,`lang`,2),s([x({type:Boolean,reflect:!0,attribute:`did-ssr`})],ht.prototype,`didSSR`,2);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var gt=()=>({observedAttributes:[`custom-error`],checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=[`customError`]),t}}),_t=class extends ht{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=[`input`],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new r))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},`addEventListener`in this&&this.addEventListener(`invalid`,this.emitInvalid)}static get validators(){return[gt()]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let n of t.observedAttributes)e.add(n);return[...e]}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.updateValidity()}):this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener?.(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has(`customError`)&&(this.customError||=null,this.setCustomValidity(this.customError||``)),e.has(`value`)||e.has(`disabled`)||e.has(`defaultValue`)){let e=this.value;this.updateFormValue(e)}e.has(`disabled`)&&(this.customStates.set(`disabled`,this.disabled),(this.hasAttribute(`disabled`)||!this.matches(`:disabled`))&&this.toggleAttribute(`disabled`,this.disabled)),super.willUpdate(e),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>this.updateValidity()):this.updateValidity()}updateFormValue(e){if(Array.isArray(e)){if(this.name){let t=new FormData;for(let n of e)t.append(this.name,n);this.setValue(t,t)}}else this.setValue(e,e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(e){e?this.setAttribute(`form`,e):this.removeAttribute(`form`)}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],n=e[1],r=e[2];r||=this.validationTarget,this.internals.setValidity(t,n,r||void 0),this.requestUpdate(`validity`),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set(`required`,e),this.customStates.set(`optional`,!e),this.customStates.set(`invalid`,!t),this.customStates.set(`valid`,t),this.customStates.set(`user-invalid`,!t&&n),this.customStates.set(`user-valid`,t&&n)}setCustomValidity(e){e?(this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)):(this.customError=null,this.setValidity({}))}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity()}):(this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity())}setValue(...e){let[t,n]=e;this.internals.setFormValue(t,n)}get allValidators(){let e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(``),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute(`disabled`)||!this.willValidate){this.resetValidity();return}let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},n=this.validationTarget||this.input||void 0,r=``;for(let n of e){let{isValid:e,message:i,invalidKeys:a}=n.checkValidity(this);e||(r||=i,a?.length>=0&&a.forEach(e=>t[e]=!0))}r||=this.validationMessage,this.setValidity(t,r,n)}};_t.formAssociated=!0,s([x({reflect:!0})],_t.prototype,`name`,2),s([x({type:Boolean})],_t.prototype,`disabled`,2),s([x({state:!0,attribute:!1})],_t.prototype,`valueHasChanged`,2),s([x({state:!0,attribute:!1})],_t.prototype,`hasInteracted`,2),s([x({attribute:`custom-error`,reflect:!0})],_t.prototype,`customError`,2),s([x({attribute:!1,state:!0,type:Object})],_t.prototype,`validity`,1);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var vt={small:`s`,medium:`m`,large:`l`},yt=/* @__PURE__ */ new Set;function bt(e,t){t in vt&&!yt.has(`${e}:${t}`)&&(yt.add(`${e}:${t}`),console.warn(`[${e}] size="${t}" is deprecated. Use size="${vt[t]}" instead. The long-form value will be removed in the next major version.`))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var xt=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return this.host.childNodes?[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===Node.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`wa-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1}):!1}hasNamedSlot(e){return this.host.querySelector?.(`:scope > [slot="${e}"]`)!==null}test(e,t){return t&&this.host.didSSR&&!this.host.hasUpdated?!!this.host[t]:e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){let e=this.host.shadowRoot;e&&`addEventListener`in e&&e.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){let e=this.host.shadowRoot;e&&`removeEventListener`in e&&e.removeEventListener(`slotchange`,this.handleSlotChange)}},St=v`
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
`,Ct=v`
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
`,wt=v`
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
function Tt(e,t){let n={waitUntilFirstUpdate:!1,...t};return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}const Et=/* @__PURE__ */ new Set,Dt=/* @__PURE__ */ new Map;let Ot,kt=`ltr`,At=`en`;const jt=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(jt){let e=new MutationObserver(Nt);kt=document.documentElement.dir||`ltr`,At=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function Mt(...e){e.map(e=>{let t=e.$code.toLowerCase();Dt.has(t)?Dt.set(t,Object.assign(Object.assign({},Dt.get(t)),e)):Dt.set(t,e),Ot||=e}),Nt()}function Nt(){jt&&(kt=document.documentElement.dir||`ltr`,At=document.documentElement.lang||navigator.language),[...Et.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var Pt=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Et.add(this.host)}hostDisconnected(){Et.delete(this.host)}dir(){return`${this.host.dir||kt}`.toLowerCase()}lang(){let e=`${this.host.lang||At}`.toLowerCase().replace(/_/g,`-`);try{return new Intl.Locale(e),e}catch{return Ot?Ot.$code.toLowerCase():`en`}}getTranslationData(e){let t;try{t=new Intl.Locale(e.replace(/_/g,`-`))}catch{return{locale:void 0,language:``,region:``,primary:void 0,secondary:void 0}}let n=t.language.toLowerCase(),r=t.region?.toLowerCase()??``,i=Dt.get(`${n}-${r}`),a=Dt.get(n);return{locale:t,language:n,region:r,primary:i,secondary:a}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&Ot&&Ot[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(Ot&&Ot[e])i=Ot[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},Ft={$code:`en`,$name:`English`,$dir:`ltr`,allTagsRemoved:`All tags removed`,am:`AM`,autosizeColumn:`Autosize column`,captions:`Captions`,carousel:`Carousel`,chooseDate:`Choose date`,chooseDecade:`Choose decade`,chooseMonth:`Choose month`,chooseTime:`Choose time`,chooseYear:`Choose year`,clearEntry:`Clear entry`,clearFilter:`Clear filter`,clearSort:`Clear sort`,close:`Close`,closeCalendar:`Close calendar`,closeTimeInput:`Close time picker`,collapseRow:`Collapse row`,columnMenu:`Column options`,columnMovedToPosition:(e,t,n)=>`${e} moved to position ${t} of ${n}`,columns:`Columns`,compactPageXOfY:(e,t)=>`${e} of ${t}`,completed:`Completed`,copied:`Copied`,copy:`Copy`,createOption:e=>`Create "${e}"`,currentlyPlaying:`currently playing`,currentValue:`Current value`,date:`Date`,datePickerKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the calendar.`,day:`Day`,dayPeriod:`AM/PM`,decrement:`Decrement`,deselectAllRows:`Deselect all rows`,disabled:`Disabled`,dropFileHere:`Drop file here or click to browse`,dropFilesHere:`Drop files here or click to browse`,empty:`Empty`,endDate:`End date`,enterFullscreen:`Enter fullscreen`,error:`Error`,exitFullscreen:`Exit fullscreen`,expandRow:`Expand row`,filterByColumn:e=>`Filter by ${e}`,filterFrom:`From`,filterMax:`Max`,filterMin:`Min`,filterTo:`To`,firstPage:`First page`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hideColumn:`Hide column`,hidePassword:`Hide password`,hour:`Hour`,incompleteDate:`Enter a valid date.`,increment:`Increment`,jumpBackwardX:e=>`Jump back ${e} pages`,jumpForwardX:e=>`Jump forward ${e} pages`,lastPage:`Last page`,loading:`Loading`,locked:`Locked`,minute:`Minute`,month:`Month`,moreOptions:`More Options`,mute:`Mute`,nextDecade:`Next decade`,nextMonth:`Next month`,nextPage:`Next page`,nextSlide:`Next slide`,nextVideo:`Next Video`,nextYear:`Next year`,noData:`No data`,noOptions:`No options`,noResults:`No matching results`,notCompleted:`Not completed`,now:`Now`,numCharacters:e=>e===1?`1 character`:`${e} characters`,numCharactersRemaining:e=>e===1?`1 character remaining`:`${e} characters remaining`,numOptionsAvailable:e=>e===0?`No options available`:e===1?`1 option available`:`${e} options available`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,numRowsCopied:e=>e===1?`1 row copied`:`${e} rows copied`,numRowsSelected:e=>e===1?`1 row selected`:`${e} rows selected`,optionPosition:(e,t,n)=>`${e}, ${t} of ${n}`,optionsLoadError:`Options could not be loaded`,pageXOfY:(e,t)=>`Page ${e} of ${t}`,pagination:`Pagination`,pause:`Pause`,pauseAnimation:`Pause animation`,pictureInPicture:`Picture in picture`,pinLeft:`Pin left`,pinRight:`Pin right`,play:`Play`,playAnimation:`Play animation`,playbackSpeed:`Playback speed`,playlist:`Playlist`,pm:`PM`,previousDecade:`Previous decade`,previousMonth:`Previous month`,previousPage:`Previous page`,previousSlide:`Previous slide`,previousVideo:`Previous video`,previousYear:`Previous year`,progress:`Progress`,rangeTooLong:e=>e===1?`Select a range no longer than 1 day`:`Select a range no longer than ${e} days`,rangeTooShort:e=>e===1?`Select a range at least 1 day long`:`Select a range at least ${e} days long`,readonly:`Read-only`,remove:`Remove`,resetColumns:`Reset columns`,resize:`Resize`,resizeColumn:`Resize column`,rowsPerPage:`Rows per page`,scrollableRegion:`Scrollable region`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,search:`Search`,second:`Second`,seek:`Seek`,seekProgress:(e,t)=>`${e} of ${t}`,selectAColorFromTheScreen:`Select a color from the screen`,selectAllRows:`Select all rows`,selected:`Selected`,selectedDateLabel:e=>`Selected: ${e}`,selectedRangeLabel:e=>`Selected range: ${e}`,selectGroup:`Select group`,selectionCleared:`Selection cleared`,selectRow:`Select row`,showingNofMRows:(e,t)=>`Showing ${e} of ${t} rows`,showingXtoYofZ:(e,t,n)=>`${e}\u2013${t} of ${n}`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,sortAscending:`Sort ascending`,sortColumn:`Sort column`,sortDescending:`Sort descending`,startDate:`Start date`,steps:`Steps`,stepXOfY:(e,t)=>`Step ${e} of ${t}`,tagAdded:e=>`${e} added`,tagAlreadyAdded:e=>`${e} is already added`,tagInputKeyboardHelp:`Press Backspace or Delete to remove this tag.`,tagRemoved:e=>`${e} removed`,time:`Time`,timeInputKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the time picker.`,today:`Today`,toggleColorFormat:`Toggle color format`,tooFewTags:e=>e===1?`Add at least 1 tag`:`Add at least ${e} tags`,tooManyTags:e=>e===1?`Add no more than 1 tag`:`Add no more than ${e} tags`,unmute:`Unmute`,unpin:`Unpin`,unpinColumn:`Unpin column`,videoPlayer:`Video player`,volume:`Volume`,year:`Year`,zoomIn:`Zoom in`,zoomOut:`Zoom out`}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;Mt(Ft);var It=Ft,Lt=class extends Pt{lang(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||`en`:super.lang()}};Mt(It);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const Rt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},zt=e=>(...t)=>({_$litDirective$:e,values:t});var Bt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Vt=zt(class extends Bt{constructor(e){if(super(e),e.type!==Rt.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=/* @__PURE__ */ new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return Le}}),Ht=e=>e??Re,Ut=Symbol.for(``),Wt=e=>{
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
if(e?.r===Ut)return e?._$litStatic$},Gt=(e,...t)=>({_$litStatic$:t.reduce((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1],e[0]),r:Ut}),Kt=/* @__PURE__ */ new Map,qt=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],(i=Wt(a))!==void 0);)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=Kt.get(e))===void 0&&(o.raw=o,Kt.set(e,t=o)),n=s}return e(t,...n)})(Ie);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var S=class extends _t{constructor(){super(...arguments),this.assumeInteractionOn=[`click`],this.hasSlotController=new xt(this,`[default]`,`start`,`end`),this.localize=new Lt(this),this.invalid=!1,this.isIconButton=!1,this.title=``,this.variant=`neutral`,this.appearance=`accent`,this.size=`m`,this.withCaret=!1,this.withStart=!1,this.withEnd=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type=`button`}static get validators(){return[...super.validators,n()]}handleSizeChange(){bt(this.localName,this.size)}constructLightDOMButton(){let e=document.createElement(`button`);for(let t of this.attributes)t.name!==`style`&&e.setAttribute(t.name,t.value);return e.type=this.type,e.style.position=`absolute !important`,e.style.width=`0 !important`,e.style.height=`0 !important`,e.style.clipPath=`inset(50%) !important`,e.style.overflow=`hidden !important`,e.style.whiteSpace=`nowrap !important`,this.name&&(e.name=this.name),e.value=this.value||``,e}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopImmediatePropagation();return}if(this.type!==`submit`&&this.type!==`reset`||!this.getForm())return;let t=this.constructLightDOMButton();this.parentElement?.append(t),t.click(),t.remove()}handleInvalid(){this.dispatchEvent(new r)}handleLabelSlotChange(){let e=this.labelSlot.assignedNodes({flatten:!0}),t=!1,n=!1,r=!1,i=!1;[...e].forEach(e=>{if(e.nodeType===Node.ELEMENT_NODE){let r=e;r.localName===`wa-icon`?(n=!0,t||=r.label!==void 0):i=!0}else e.nodeType===Node.TEXT_NODE&&(e.textContent?.trim()||``).length>0&&(r=!0)}),this.isIconButton=n&&!r&&!i,this.customStates.set(`icon-button`,this.isIconButton),this.isIconButton&&!t&&console.warn(`Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.`,this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.customStates.set(`disabled`,this.disabled),this.updateValidity()}handleHrefChange(){this.customStates.set(`link`,this.isLink())}handleLoadingChange(){this.customStates.set(`loading`,this.loading)}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=this.isLink(),t=e?Gt`a`:Gt`button`;return qt`
      <${t}
        part="base button"
        class=${Vt({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()===`rtl`,"has-label":this.hasSlotController.test(`[default]`),"has-start":this.hasSlotController.test(`start`,`withStart`),"has-end":this.hasSlotController.test(`end`,`withEnd`),"is-icon-button":this.isIconButton})}
        ?disabled=${Ht(e?void 0:this.disabled)}
        type=${Ht(e?void 0:this.type)}
        title=${this.title}
        name=${Ht(e?void 0:this.name)}
        value=${Ht(e?void 0:this.value)}
        href=${Ht(e?this.href:void 0)}
        target=${Ht(e?this.target:void 0)}
        download=${Ht(e?this.download:void 0)}
        rel=${Ht(e&&this.rel?this.rel:void 0)}
        role=${Ht(e?void 0:`button`)}
        aria-disabled=${Ht(e&&this.disabled?`true`:void 0)}
        aria-busy=${this.loading?`true`:`false`}
        tabindex=${this.disabled?`-1`:`0`}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?qt`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:``}
        ${this.loading?qt`<wa-spinner part="spinner"></wa-spinner>`:``}
      </${t}>
    `}};S.shadowRootOptions={..._t.shadowRootOptions,delegatesFocus:!0},S.css=[Ct,wt,St],s([lt(`.button`)],S.prototype,`button`,2),s([lt(`slot:not([name])`)],S.prototype,`labelSlot`,2),s([st()],S.prototype,`invalid`,2),s([st()],S.prototype,`isIconButton`,2),s([x()],S.prototype,`title`,2),s([x({reflect:!0})],S.prototype,`variant`,2),s([x({reflect:!0})],S.prototype,`appearance`,2),s([x({reflect:!0})],S.prototype,`size`,2),s([Tt(`size`)],S.prototype,`handleSizeChange`,1),s([x({attribute:`with-caret`,type:Boolean,reflect:!0})],S.prototype,`withCaret`,2),s([x({attribute:`with-start`,type:Boolean})],S.prototype,`withStart`,2),s([x({attribute:`with-end`,type:Boolean})],S.prototype,`withEnd`,2),s([x({type:Boolean})],S.prototype,`disabled`,2),s([x({type:Boolean,reflect:!0})],S.prototype,`loading`,2),s([x({type:Boolean,reflect:!0})],S.prototype,`pill`,2),s([x()],S.prototype,`type`,2),s([x({reflect:!0})],S.prototype,`name`,2),s([x({reflect:!0})],S.prototype,`value`,2),s([x({reflect:!0})],S.prototype,`href`,2),s([x()],S.prototype,`target`,2),s([x()],S.prototype,`rel`,2),s([x()],S.prototype,`download`,2),s([x({attribute:`formaction`})],S.prototype,`formAction`,2),s([x({attribute:`formenctype`})],S.prototype,`formEnctype`,2),s([x({attribute:`formmethod`})],S.prototype,`formMethod`,2),s([x({attribute:`formnovalidate`,type:Boolean})],S.prototype,`formNoValidate`,2),s([x({attribute:`formtarget`})],S.prototype,`formTarget`,2),s([Tt(`disabled`,{waitUntilFirstUpdate:!0})],S.prototype,`handleDisabledChange`,1),s([Tt(`href`)],S.prototype,`handleHrefChange`,1),s([Tt(`loading`,{waitUntilFirstUpdate:!0})],S.prototype,`handleLoadingChange`,1),S=s([it(`wa-button`)],S),S.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Jt=v`
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
`,Yt=class extends ht{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(...arguments),this.localize=new Lt(this)}render(){return Ie`
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
    `}};Yt.css=Jt,Yt=s([it(`wa-spinner`)],Yt);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Xt=class extends Event{constructor(){super(`wa-error`,{bubbles:!0,cancelable:!1,composed:!0})}},Zt=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-load`,{bubbles:!0,cancelable:!1,composed:!0})}},Qt=v`
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
`,$t=``,en=``
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;function tn(){return $t.replace(/\/$/,``)}function nn(e){en=e}function rn(){if(!en){let e=document.querySelector(`[data-fa-kit-code]`);e&&nn(e.getAttribute(`data-fa-kit-code`)||``)}return en}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var an=`7.3.0`;function on(e,t,n){let r=`solid`;return t===`chisel`&&(r=`chisel-regular`),t===`etch`&&(r=`etch-solid`),t===`graphite`&&(r=`graphite-thin`),t===`jelly`&&(r=`jelly-regular`,n===`duo-regular`&&(r=`jelly-duo-regular`),n===`fill-regular`&&(r=`jelly-fill-regular`)),t===`jelly-duo`&&(r=`jelly-duo-regular`),t===`jelly-fill`&&(r=`jelly-fill-regular`),t===`notdog`&&(n===`solid`&&(r=`notdog-solid`),n===`duo-solid`&&(r=`notdog-duo-solid`)),t===`notdog-duo`&&(r=`notdog-duo-solid`),t===`slab`&&((n===`solid`||n===`regular`)&&(r=`slab-regular`),n===`press-regular`&&(r=`slab-press-regular`)),t===`slab-press`&&(r=`slab-press-regular`),t===`slab-duo`&&(r=`slab-duo-regular`),t===`slab-press-duo`&&(r=`slab-press-duo-regular`),t===`thumbprint`&&(r=`thumbprint-light`),t===`utility`&&(r=`utility-semibold`),t===`utility-duo`&&(r=`utility-duo-semibold`),t===`utility-fill`&&(r=`utility-fill-semibold`),t===`whiteboard`&&(r=`whiteboard-semibold`),t===`mosaic`&&(r=`mosaic-solid`),t===`pixel`&&(r=`pixel-regular`),t===`vellum`&&(r=`vellum-solid`),t===`classic`&&(n===`thin`&&(r=`thin`),n===`light`&&(r=`light`),n===`regular`&&(r=`regular`),n===`solid`&&(r=`solid`)),t===`duotone`&&(n===`thin`&&(r=`duotone-thin`),n===`light`&&(r=`duotone-light`),n===`regular`&&(r=`duotone-regular`),n===`solid`&&(r=`duotone`)),t===`sharp`&&(n===`thin`&&(r=`sharp-thin`),n===`light`&&(r=`sharp-light`),n===`regular`&&(r=`sharp-regular`),n===`solid`&&(r=`sharp-solid`)),t===`sharp-duotone`&&(n===`thin`&&(r=`sharp-duotone-thin`),n===`light`&&(r=`sharp-duotone-light`),n===`regular`&&(r=`sharp-duotone-regular`),n===`solid`&&(r=`sharp-duotone-solid`)),t===`brands`&&(r=`brands`),r}function sn(e,t,n){let r=on(e,t,n),i=tn();if(i)return`${i}/${r}/${e}.svg`;let a=rn();return a.length>0?`https://ka-p.fontawesome.com/releases/v${an}/svgs/${r}/${e}.svg?token=${encodeURIComponent(a)}`:`https://ka-f.fontawesome.com/releases/v${an}/svgs/${r}/${e}.svg`}var cn={name:`default`,resolver:(e,t=`classic`,n=`solid`)=>sn(e,t,n),mutator:(e,t)=>{if(e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`),t?.family&&!e.hasAttribute(`data-duotone-initialized`)){let{family:n,variant:r}=t;if(n===`duotone`||n===`sharp-duotone`||n===`notdog-duo`||n===`notdog`&&r===`duo-solid`||n===`jelly-duo`||n===`jelly`&&r===`duo-regular`||n===`utility-duo`||n===`slab-duo`||n===`slab-press-duo`||n===`thumbprint`){let n=[...e.querySelectorAll(`path`)],r=n.find(e=>!e.hasAttribute(`opacity`)),i=n.find(e=>e.hasAttribute(`opacity`));if(!r||!i)return;if(r.setAttribute(`data-duotone-primary`,``),i.setAttribute(`data-duotone-secondary`,``),t.swapOpacity&&r&&i){let e=i.getAttribute(`opacity`)||`0.4`;r.style.setProperty(`--path-opacity`,e),i.style.setProperty(`--path-opacity`,`1`)}e.setAttribute(`data-duotone-initialized`,``)}}}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function ln(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var un={solid:{"arrow-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`,"arrow-up":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>`,backward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M236.3 107.1C247.9 96 265 92.9 279.7 99.2C294.4 105.5 304 120 304 136L304 272.3L476.3 107.2C487.9 96 505 92.9 519.7 99.2C534.4 105.5 544 120 544 136L544 504C544 520 534.4 534.5 519.7 540.8C505 547.1 487.9 544 476.3 532.9L304 367.7L304 504C304 520 294.4 534.5 279.7 540.8C265 547.1 247.9 544 236.3 532.9L44.3 348.9C36.5 341.3 32 330.9 32 320C32 309.1 36.5 298.7 44.3 291.1L236.3 107.1z"/></svg>`,"backward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M491 100.8C478.1 93.8 462.3 94.5 450 102.6L192 272.1L192 128C192 110.3 177.7 96 160 96C142.3 96 128 110.3 128 128L128 512C128 529.7 142.3 544 160 544C177.7 544 192 529.7 192 512L192 367.9L450 537.5C462.3 545.6 478 546.3 491 539.3C504 532.3 512 518.8 512 504.1L512 136.1C512 121.4 503.9 107.9 491 100.9z"/></svg>`,bars:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>`,"angles-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M77.3 256 214.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256zm192 0L406.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L269.3 256z"/></svg>`,"angles-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.7 256 297.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 256zm-192 0L105.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256z"/></svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>`,"chevron-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`,"chevron-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>`,"chevron-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>`,circle:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>`,"closed-captioning":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M64 192C64 156.7 92.7 128 128 128L512 128C547.3 128 576 156.7 576 192L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 192zM216 272L248 272C252.4 272 256 275.6 256 280C256 293.3 266.7 304 280 304C293.3 304 304 293.3 304 280C304 249.1 278.9 224 248 224L216 224C185.1 224 160 249.1 160 280L160 360C160 390.9 185.1 416 216 416L248 416C278.9 416 304 390.9 304 360C304 346.7 293.3 336 280 336C266.7 336 256 346.7 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 280C208 275.6 211.6 272 216 272zM384 280C384 275.6 387.6 272 392 272L424 272C428.4 272 432 275.6 432 280C432 293.3 442.7 304 456 304C469.3 304 480 293.3 480 280C480 249.1 454.9 224 424 224L392 224C361.1 224 336 249.1 336 280L336 360C336 390.9 361.1 416 392 416L424 416C454.9 416 480 390.9 480 360C480 346.7 469.3 336 456 336C442.7 336 432 346.7 432 360C432 364.4 428.4 368 424 368L392 368C387.6 368 384 364.4 384 360L384 280z"/></svg>`,"closed-captioning-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M39 39.1C48.4 29.7 63.6 29.7 72.9 39.1L161.8 128L512 128C547.3 128 576 156.7 576 192L576 448C576 473.5 561.1 495.4 539.6 505.8L601 567.1C610.4 576.5 610.4 591.7 601 601C591.6 610.3 576.4 610.4 567.1 601L39 73.1C29.7 63.7 29.7 48.5 39 39.1zM384 350.1L384 279.9C384 275.5 387.6 271.9 392 271.9L424 271.9C428.4 271.9 432 275.5 432 279.9C432 293.2 442.7 303.9 456 303.9C469.3 303.9 480 293.2 480 279.9C480 249 454.9 223.9 424 223.9L392 223.9C361.1 223.9 336 249 336 279.9L336 302.1L384 350.1zM445.5 411.6C465.7 403.2 480 383.2 480 359.9C480 346.6 469.3 335.9 456 335.9C442.7 335.9 432 346.6 432 359.9C432 364.3 428.4 367.9 424 367.9L401.8 367.9L445.5 411.6zM162.3 264.1C160.8 269.1 160 274.5 160 280L160 360C160 390.9 185.1 416 216 416L248 416C266.1 416 282.1 407.5 292.4 394.2L410.2 512L128 512C92.7 512 64 483.3 64 448L64 192C64 184.2 65.4 176.7 68 169.8L162.3 264.1zM256.1 357.9C256 358.6 256 359.3 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 309.8L256.1 357.9z"/></svg>`,compress:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>`,ellipsis:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M96 320C96 289.1 121.1 264 152 264C182.9 264 208 289.1 208 320C208 350.9 182.9 376 152 376C121.1 376 96 350.9 96 320zM264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320zM488 264C518.9 264 544 289.1 544 320C544 350.9 518.9 376 488 376C457.1 376 432 350.9 432 320C432 289.1 457.1 264 488 264z"/></svg>`,"ellipsis-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/></svg>`,expand:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 96C110.3 96 96 110.3 96 128L96 224C96 241.7 110.3 256 128 256C145.7 256 160 241.7 160 224L160 160L224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L128 96zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 512C96 529.7 110.3 544 128 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480L160 416zM416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160L480 224C480 241.7 494.3 256 512 256C529.7 256 544 241.7 544 224L544 128C544 110.3 529.7 96 512 96L416 96zM544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L512 544C529.7 544 544 529.7 544 512L544 416z"/></svg>`,eyedropper:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>`,filter:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 64C19.1 64 7.4 71.8 2.4 83.8S.2 109.5 9.4 118.6L192 301.3 192 416c0 8.5 3.4 16.6 9.4 22.6l64 64c9.2 9.2 22.9 11.9 34.9 6.9S320 492.9 320 480l0-178.7 182.6-182.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 64 480 64L32 64z"/></svg>`,forward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M403.7 107.1C392.1 96 375 92.9 360.3 99.2C345.6 105.5 336 120 336 136L336 272.3L163.7 107.2C152.1 96 135 92.9 120.3 99.2C105.6 105.5 96 120 96 136L96 504C96 520 105.6 534.5 120.3 540.8C135 547.1 152.1 544 163.7 532.9L336 367.7L336 504C336 520 345.6 534.5 360.3 540.8C375 547.1 392.1 544 403.7 532.9L595.7 348.9C603.6 341.4 608 330.9 608 320C608 309.1 603.5 298.7 595.7 291.1L403.7 107.1z"/></svg>`,file:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>`,"file-audio":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>`,"file-code":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>`,"file-excel":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>`,"file-image":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>`,"file-pdf":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>`,"file-powerpoint":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>`,"file-video":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>`,"file-word":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>`,"file-zipper":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>`,"forward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M21 36.8c12.9-7 28.7-6.3 41 1.8L320 208.1 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-144.1-258 169.6c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440L0 72C0 57.3 8.1 43.8 21 36.8z"/></svg>`,gauge:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,gear:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>`,"grip-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>`,indeterminate:`<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>`,"magnifying-glass":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>`,minus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>`,pause:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>`,"picture-in-picture":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M448 32c35.3 0 64 28.7 64 64l0 112-64 0 0-112-384 0 0 320 144 0 0 64-144 0-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416 0 96C0 62.9 25.2 35.6 57.5 32.3L64 32 448 32zm16 224c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48l160 0z"/></svg>`,play:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>`,"play-circle":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>`,plus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>`,"table-columns":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 64l0 256 128 0 0-256-128 0zm320 0l-128 0 0 256 128 0 0-256z"/></svg>`,thumbtack:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 10.3 134.1c37.1 21.2 65.8 56.4 78.2 99.7l3.8 13.4c2.8 9.7 .8 20-5.2 28.1S362 352 352 352L32 352c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1L5 297.8c12.4-43.3 41-78.5 78.2-99.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 400l64 0 0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-112z"/></svg>`,"up-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M406.6 502.6l96-96c9.2-9.2 11.9-22.9 6.9-34.9S492.9 352 480 352l-64 0 0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 320-64 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l96 96c12.5 12.5 32.8 12.5 45.3 0zM150.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-9.2 9.2-11.9 22.9-6.9 34.9S19.1 160 32 160l64 0 0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320 64 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-96-96z"/></svg>`,upload:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>`,user:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>`,volume:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM441.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C443.3 170.7 464 210.9 464 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-low":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,xmark:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>`},regular:{calendar:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z"/></svg>`,"circle-question":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`,"circle-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,clock:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>`,copy:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>`,eye:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>`,"eye-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>`}},dn={name:`system`,resolver:(e,t=`classic`,n=`solid`)=>{let r=un[n][e]??un.regular[e]??un.regular[`circle-question`];return r?ln(r):``},mutator:e=>{e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`)}},fn=`classic`,pn=[cn,dn],mn=/* @__PURE__ */ new Set
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;function hn(e){mn.add(e)}function gn(e){mn.delete(e)}function _n(e){return pn.find(t=>t.name===e)}function vn(){return fn}
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const{I:yn}=Qe,bn=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var xn=Symbol(),Sn=Symbol(),Cn,wn=/* @__PURE__ */ new Map,Tn=class extends ht{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label=``,this.library=`default`,this.rotate=0,this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=Ie`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let n=this.shadowRoot.querySelector(`[part='svg']`);return typeof t.mutator==`function`&&t.mutator(n,this),this.svg}try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?xn:Sn}catch{return Sn}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return xn;Cn||=new DOMParser;let r=Cn.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):xn}catch{return xn}}}connectedCallback(){super.connectedCallback(),hn(this)}firstUpdated(e){super.firstUpdated(e),this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),gn(this)}async getIconSource(){let e=_n(this.library),t=this.family||vn();if(this.name&&e){let n=this.canvas===`auto`||this.autoWidth,r;try{r=await e.resolver(this.name,t,this.variant,n)}catch{r=void 0}return{url:r,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=await this.getIconSource(),n=t?_n(this.library):void 0;if(!e){this.svg=null;return}let r=wn.get(e);r||(r=this.resolveIcon(e,n),wn.set(e,r));let i=await r;if(i===Sn&&wn.delete(e),e===(await this.getIconSource()).url){if(bn(i))this.svg=i;else switch(i){case Sn:case xn:this.svg=null,this.dispatchEvent(new Xt);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new Zt)}}}willUpdate(e){return this.style||this.setStyleProperty(`--rotate-angle`,`${this.rotate}deg`),super.willUpdate(e)}updated(e){super.updated(e);let t=_n(this.library);this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`);let n=this.shadowRoot?.querySelector(`svg`);n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:Ie`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};Tn.css=Qt,s([st()],Tn.prototype,`svg`,2),s([x({reflect:!0})],Tn.prototype,`name`,2),s([x({reflect:!0})],Tn.prototype,`family`,2),s([x({reflect:!0})],Tn.prototype,`variant`,2),s([x({reflect:!0})],Tn.prototype,`canvas`,2),s([x({attribute:`auto-width`,type:Boolean,reflect:!0})],Tn.prototype,`autoWidth`,2),s([x({attribute:`swap-opacity`,type:Boolean,reflect:!0})],Tn.prototype,`swapOpacity`,2),s([x()],Tn.prototype,`src`,2),s([x()],Tn.prototype,`label`,2),s([x({reflect:!0})],Tn.prototype,`library`,2),s([x({type:Number,reflect:!0})],Tn.prototype,`rotate`,2),s([x({type:String,reflect:!0})],Tn.prototype,`flip`,2),s([x({type:String,reflect:!0})],Tn.prototype,`animation`,2),s([Tt(`label`)],Tn.prototype,`handleLabelChange`,1),s([Tt([`family`,`name`,`library`,`variant`,`src`,`autoWidth`,`canvas`,`swapOpacity`],{waitUntilFirstUpdate:!0})],Tn.prototype,`setIcon`,1),Tn=s([it(`wa-icon`)],Tn);var En=/* @__PURE__ */ t({default:()=>S}),Dn=v`
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
`,On=class extends ht{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(...arguments),this.hasSlotController=new xt(this,`[default]`),this.orientation=`horizontal`,this.withLabel=!1,this.labelPlacement=`center`}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`separator`)}willUpdate(e){this.withLabel=this.hasSlotController.test(`[default]`,`withLabel`),super.willUpdate(e)}handleVerticalChange(){this.setAttribute(`aria-orientation`,this.orientation)}handleSlotChange(){this.internals&&(this.internals.ariaLabel=this.textContent?.trim()||null)}render(){return Ie`
      <div part="label" class="label">
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};On.css=Dn,s([x({reflect:!0})],On.prototype,`orientation`,2),s([x({attribute:`with-label`,type:Boolean,reflect:!0})],On.prototype,`withLabel`,2),s([x({attribute:`label-placement`,reflect:!0})],On.prototype,`labelPlacement`,2),s([Tt(`orientation`)],On.prototype,`handleVerticalChange`,1),On=s([it(`wa-divider`)],On);var kn=/* @__PURE__ */ t({default:()=>On}),An=v`
  :host {
    display: flex;
    position: relative;
    align-items: center;
    padding: 0.5em 1em;
    border-radius: var(--wa-border-radius-s);
    isolation: isolate;
    color: var(--wa-color-text-normal);
    line-height: var(--wa-line-height-condensed);
    cursor: pointer;
    transition:
      var(--wa-transition-fast) background-color var(--wa-transition-easing),
      var(--wa-transition-fast) color var(--wa-transition-easing);
  }

  @media (hover: hover) {
    :host(:hover:not(:state(disabled))) {
      background-color: var(--wa-color-neutral-fill-normal);
    }
  }

  :host(:state(submenu-open)) {
    background-color: var(--wa-color-neutral-fill-normal);
  }

  :host(:focus-visible) {
    z-index: 1;
    outline: var(--wa-focus-ring);
    background-color: var(--wa-color-neutral-fill-normal);
  }

  :host(:state(disabled)),
  :host([disabled]) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Danger variant */
  :host([variant='danger']),
  :host([variant='danger']) #details {
    color: var(--wa-color-danger-on-quiet);
  }

  @media (hover: hover) {
    :host([variant='danger']:hover) {
      background-color: var(--wa-color-danger-fill-normal);
      color: var(--wa-color-danger-on-normal);
    }
  }

  :host([variant='danger']:state(submenu-open)),
  :host([variant='danger']:focus-visible) {
    background-color: var(--wa-color-danger-fill-normal);
    color: var(--wa-color-danger-on-normal);
  }

  :host([checkbox-adjacent]) {
    padding-inline-start: 2em;
  }

  /* Only add padding when item actually has a submenu */
  :host([submenu-adjacent]:not(:state(has-submenu))) #details {
    padding-inline-end: 0;
  }

  :host(:state(has-submenu)[submenu-adjacent]) #details {
    padding-inline-end: 1.75em;
  }

  /* The link only exists to be clicked programmatically. */
  #link {
    display: none;
  }

  #check {
    visibility: hidden;
    margin-inline-start: -1.5em;
    margin-inline-end: 0.5em;
    font-size: var(--wa-font-size-smaller);
  }

  :host(:state(checked)) #check {
    visibility: visible;
  }

  #icon ::slotted(*) {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    margin-inline-end: 0.75em !important;
    font-size: var(--wa-font-size-smaller);
  }

  #label {
    flex: 1 1 auto;
    min-width: 0;
  }

  #details {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: end;
    color: var(--wa-color-text-quiet);
    font-size: var(--wa-font-size-smaller) !important;
  }

  #details ::slotted(*) {
    margin-inline-start: 2em !important;
  }

  /* Submenu indicator icon */
  #submenu-indicator {
    position: absolute;
    inset-inline-end: 1em;
    color: var(--wa-color-neutral-on-quiet);
    font-size: var(--wa-font-size-smaller);
  }

  /* Flip chevron icon when RTL */
  :host(:dir(rtl)) #submenu-indicator {
    transform: scaleX(-1);
  }

  /* Submenu styles */
  #submenu {
    display: flex;
    z-index: 10;
    position: absolute;
    top: 0;
    left: 0;
    flex-direction: column;
    width: max-content;
    margin: 0;
    padding: 0.25em;
    border: var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-surface-border);
    border-radius: var(--wa-border-radius-m);
    background-color: var(--wa-color-surface-raised);
    box-shadow: var(--wa-shadow-m);
    color: var(--wa-color-text-normal);
    text-align: start;
    user-select: none;

    /* Override default popover styles */
    &[popover] {
      margin: 0;
      inset: auto;
      padding: 0.25em;
      overflow: visible;
      border-radius: var(--wa-border-radius-m);
    }

    &.show {
      animation: submenu-show var(--show-duration, var(--wa-transition-fast)) ease;
    }

    &.hide {
      animation: submenu-show var(--show-duration, var(--wa-transition-fast)) ease reverse;
    }

    /* Submenu placement transform origins */
    &[data-placement^='top'] {
      transform-origin: bottom;
    }

    &[data-placement^='bottom'] {
      transform-origin: top;
    }

    &[data-placement^='left'] {
      transform-origin: right;
    }

    &[data-placement^='right'] {
      transform-origin: left;
    }

    &[data-placement='left-start'] {
      transform-origin: right top;
    }

    &[data-placement='left-end'] {
      transform-origin: right bottom;
    }

    &[data-placement='right-start'] {
      transform-origin: left top;
    }

    &[data-placement='right-end'] {
      transform-origin: left bottom;
    }

    /* Safe triangle styling */
    &::before {
      display: none;
      z-index: 9;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: transparent;
      content: '';
      clip-path: polygon(
        var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
        var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
        var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
      );
      pointer-events: auto; /* Enable mouse events on the triangle */
    }

    &[data-visible]::before {
      display: block;
    }
  }

  ::slotted(wa-dropdown-item) {
    font-size: inherit;
  }

  ::slotted(wa-divider) {
    --spacing: 0.25em;
  }

  @keyframes submenu-show {
    from {
      scale: 0.9;
      opacity: 0;
    }
    to {
      scale: 1;
      opacity: 1;
    }
  }
`
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function jn(e,t){return new Promise(n=>{let r=new AbortController,{signal:i}=r;if(e.classList.contains(t))return;e.classList.add(t);let a=!1,o=()=>{a||(a=!0,e.classList.remove(t),n(),r.abort())};e.addEventListener(`animationend`,o,{once:!0,signal:i}),e.addEventListener(`animationcancel`,o,{once:!0,signal:i}),requestAnimationFrame(()=>{!a&&e.getAnimations().length===0&&o()})})}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var C=class extends ht{constructor(){super(...arguments),this.hasSlotController=new xt(this,`[default]`,`start`,`end`),this.active=!1,this.variant=`default`,this.size=`m`,this.checkboxAdjacent=!1,this.submenuAdjacent=!1,this.type=`normal`,this.checked=!1,this.disabled=!1,this.submenuOpen=!1,this.hasSubmenu=!1,this.handleSlotChange=()=>{this.hasSubmenu=this.hasSlotController.test(`submenu`),this.updateHasSubmenuState(),this.hasSubmenu?(this.setAttribute(`aria-haspopup`,`menu`),this.setAttribute(`aria-expanded`,this.submenuOpen?`true`:`false`)):(this.removeAttribute(`aria-haspopup`),this.removeAttribute(`aria-expanded`))},this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handlePointerEnter=e=>{e.pointerType===`mouse`&&this.hasSubmenu&&!this.disabled&&(this.notifyParentOfOpening(),this.submenuOpen=!0)}}handleSizeChange(){bt(this.localName,this.size)}connectedCallback(){super.connectedCallback(),this.addEventListener?.(`click`,this.handleHostClick),this.addEventListener?.(`pointerenter`,this.handlePointerEnter),this.shadowRoot?.addEventListener?.(`click`,this.handleClick,{capture:!0}),this.shadowRoot?.addEventListener?.(`slotchange`,this.handleSlotChange)}disconnectedCallback(){super.disconnectedCallback(),this.closeSubmenu(),this.removeEventListener?.(`click`,this.handleHostClick),this.removeEventListener?.(`pointerenter`,this.handlePointerEnter),this.shadowRoot?.removeEventListener?.(`click`,this.handleClick,{capture:!0}),this.shadowRoot?.removeEventListener?.(`slotchange`,this.handleSlotChange)}firstUpdated(e){super.firstUpdated(e),this.setAttribute(`tabindex`,`-1`),this.hasSubmenu=this.hasSlotController.test(`submenu`),this.updateHasSubmenuState()}updated(e){e.has(`active`)&&(this.setAttribute(`tabindex`,this.active?`0`:`-1`),this.customStates.set(`active`,this.active)),e.has(`checked`)&&(this.type===`checkbox`?this.setAttribute(`aria-checked`,this.checked?`true`:`false`):this.removeAttribute(`aria-checked`),this.customStates.set(`checked`,this.checked)),e.has(`disabled`)&&(this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`),this.customStates.set(`disabled`,this.disabled)),e.has(`type`)&&(this.type===`checkbox`?(this.setAttribute(`role`,`menuitemcheckbox`),this.setAttribute(`aria-checked`,this.checked?`true`:`false`)):(this.setAttribute(`role`,`menuitem`),this.removeAttribute(`aria-checked`))),(e.has(`href`)||e.has(`hasSubmenu`))&&this.customStates.set(`link`,this.isLink()),e.has(`submenuOpen`)&&(this.customStates.set(`submenu-open`,this.submenuOpen),this.submenuOpen?this.openSubmenu():this.closeSubmenu())}updateHasSubmenuState(){this.customStates.set(`has-submenu`,this.hasSubmenu)}async openSubmenu(){let e=this.submenuElement;this.hasSubmenu&&e&&this.isConnected&&(this.notifyParentOfOpening(),e.showPopover?.(),e.hidden=!1,e.setAttribute(`data-visible`,``),this.submenuOpen=!0,this.setAttribute(`aria-expanded`,`true`),await jn(e,`show`),setTimeout(()=>{let e=this.getSubmenuItems();e.length>0&&(e.forEach((e,t)=>e.active=t===0),e[0].focus({preventScroll:!0}))},0))}notifyParentOfOpening(){let e=new CustomEvent(`submenu-opening`,{bubbles:!0,composed:!0,detail:{item:this}});this.dispatchEvent(e);let t=this.parentElement;t&&[...t.children].filter(e=>e!==this&&e.localName===`wa-dropdown-item`&&e.getAttribute(`slot`)===this.getAttribute(`slot`)&&e.submenuOpen).forEach(e=>{e.submenuOpen=!1})}async closeSubmenu(){let e=this.submenuElement;this.hasSubmenu&&e&&(this.submenuOpen=!1,this.setAttribute(`aria-expanded`,`false`),e.hidden||(await jn(e,`hide`),e?.isConnected&&(e.hidden=!0,e.removeAttribute(`data-visible`),e.hidePopover?.())))}isLink(){return!!this.href&&!this.hasSubmenu}navigate(e){let t=this.linkElement;this.isLink()&&!this.disabled&&t&&t.dispatchEvent(new MouseEvent(`click`,{bubbles:!1,cancelable:!0,composed:!1,altKey:e?.altKey??!1,ctrlKey:e?.ctrlKey??!1,metaKey:e?.metaKey??!1,shiftKey:e?.shiftKey??!1}))}getSubmenuItems(){return[...this.children].filter(e=>e.localName===`wa-dropdown-item`&&e.getAttribute(`slot`)===`submenu`&&!e.hasAttribute(`disabled`))}render(){return Ie`
      ${this.href?Ie`
            <a
              id="link"
              href=${this.href}
              target=${Ht(this.target)}
              rel=${Ht(this.rel)}
              download=${Ht(this.download)}
              tabindex="-1"
              aria-hidden="true"
            ></a>
          `:``}
      ${this.type===`checkbox`?Ie`
            <wa-icon
              id="check"
              part="checkmark"
              exportparts="svg:checkmark__svg"
              library="system"
              name="check"
            ></wa-icon>
          `:``}

      <span id="icon" part="icon">
        <slot name="icon"></slot>
      </span>

      <span id="label" part="label">
        <slot></slot>
      </span>

      <span id="details" part="details">
        <slot name="details"></slot>
      </span>

      ${this.hasSubmenu?Ie`
            <wa-icon
              id="submenu-indicator"
              part="submenu-icon"
              exportparts="svg:submenu-icon__svg"
              library="system"
              name="chevron-right"
            ></wa-icon>
          `:``}
      ${this.hasSubmenu?Ie`
            <div
              id="submenu"
              part="submenu"
              popover="manual"
              role="menu"
              tabindex="-1"
              aria-orientation="vertical"
              hidden
            >
              <slot name="submenu"></slot>
            </div>
          `:``}
    `}};C.css=An,s([lt(`#submenu`)],C.prototype,`submenuElement`,2),s([lt(`#link`)],C.prototype,`linkElement`,2),s([x({type:Boolean})],C.prototype,`active`,2),s([x({reflect:!0})],C.prototype,`variant`,2),s([x({reflect:!0})],C.prototype,`size`,2),s([Tt(`size`)],C.prototype,`handleSizeChange`,1),s([x({attribute:`checkbox-adjacent`,type:Boolean,reflect:!0})],C.prototype,`checkboxAdjacent`,2),s([x({attribute:`submenu-adjacent`,type:Boolean,reflect:!0})],C.prototype,`submenuAdjacent`,2),s([x()],C.prototype,`value`,2),s([x({reflect:!0})],C.prototype,`type`,2),s([x({type:Boolean})],C.prototype,`checked`,2),s([x({type:Boolean,reflect:!0})],C.prototype,`disabled`,2),s([x({type:Boolean,reflect:!0})],C.prototype,`submenuOpen`,2),s([x({reflect:!0})],C.prototype,`href`,2),s([x()],C.prototype,`target`,2),s([x()],C.prototype,`rel`,2),s([x()],C.prototype,`download`,2),s([st()],C.prototype,`hasSubmenu`,2),C=s([it(`wa-dropdown-item`)],C);var Mn=/* @__PURE__ */ t({default:()=>C}),Nn=class extends Event{constructor(e){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-select`,{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function*Pn(e=document.activeElement){e!=null&&(yield e,`shadowRoot`in e&&e.shadowRoot&&e.shadowRoot.mode!==`closed`&&(yield*Pn(e.shadowRoot.activeElement)))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Fn=v`
  :host {
    --show-duration: var(--wa-transition-fast);
    --hide-duration: var(--wa-transition-fast);
    display: contents;
  }

  #menu {
    display: flex;
    flex-direction: column;
    width: max-content;
    margin: 0;
    padding: 0.25em;
    border: var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-surface-border);
    border-radius: var(--wa-border-radius-m);
    background-color: var(--wa-color-surface-raised);
    box-shadow: var(--wa-shadow-m);
    color: var(--wa-color-text-normal);
    text-align: start;
    user-select: none;
    overflow: auto;
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;

    &.show {
      animation: show var(--show-duration) ease;
    }

    &.hide {
      animation: show var(--hide-duration) ease reverse;
    }

    ::slotted(h1),
    ::slotted(h2),
    ::slotted(h3),
    ::slotted(h4),
    ::slotted(h5),
    ::slotted(h6) {
      display: block !important;
      margin: 0.25em 0 !important;
      padding: 0.25em 0.75em !important;
      color: var(--wa-color-text-quiet);
      font-family: var(--wa-font-family-body) !important;
      font-weight: var(--wa-font-weight-semibold) !important;
      font-size: var(--wa-font-size-smaller) !important;
    }

    ::slotted(wa-divider) {
      --spacing: 0.25em; /* Component-specific, left as-is */
    }
  }

  wa-popup[data-current-placement^='top'] #menu {
    transform-origin: bottom;
  }

  wa-popup[data-current-placement^='bottom'] #menu {
    transform-origin: top;
  }

  wa-popup[data-current-placement^='left'] #menu {
    transform-origin: right;
  }

  wa-popup[data-current-placement^='right'] #menu {
    transform-origin: left;
  }

  wa-popup[data-current-placement='left-start'] #menu {
    transform-origin: right top;
  }

  wa-popup[data-current-placement='left-end'] #menu {
    transform-origin: right bottom;
  }

  wa-popup[data-current-placement='right-start'] #menu {
    transform-origin: left top;
  }

  wa-popup[data-current-placement='right-end'] #menu {
    transform-origin: left bottom;
  }

  @keyframes show {
    from {
      scale: 0.9;
      opacity: 0;
    }
    to {
      scale: 1;
      opacity: 1;
    }
  }
`,In=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-show`,{bubbles:!0,cancelable:!0,composed:!0})}},Ln=class extends Event{constructor(e){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-hide`,{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}},Rn=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-after-hide`,{bubbles:!0,cancelable:!1,composed:!0})}},zn=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-after-show`,{bubbles:!0,cancelable:!1,composed:!0})}},Bn=[]
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;function Vn(e){Hn(e),Bn.push(e)}function Hn(e){for(let t=Bn.length-1;t>=0;t--)if(Bn[t]===e){Bn.splice(t,1);break}}function Un(e){return Bn.length>0&&Bn[Bn.length-1]===e}let Wn=(e=21)=>{let t=``,n=crypto.getRandomValues(new Uint8Array(e|=0));for(;e--;)t+=`useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict`[n[e]&63];return t};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Gn(e=``){return`${e}${Wn()}`}const Kn=Math.min,qn=Math.max,Jn=Math.round,Yn=Math.floor,Xn=e=>({x:e,y:e}),Zn={left:`right`,right:`left`,bottom:`top`,top:`bottom`};function Qn(e,t,n){return qn(e,Kn(t,n))}function $n(e,t){return typeof e==`function`?e(t):e}function er(e){return e.split(`-`)[0]}function tr(e){return e.split(`-`)[1]}function nr(e){return e===`x`?`y`:`x`}function rr(e){return e===`y`?`height`:`width`}function ir(e){let t=e[0];return t===`t`||t===`b`?`y`:`x`}function ar(e){return nr(ir(e))}function or(e,t,n){n===void 0&&(n=!1);let r=tr(e),i=ar(e),a=rr(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=hr(o)),[o,hr(o)]}function sr(e){let t=hr(e);return[cr(e),t,cr(t)]}function cr(e){return e.includes(`start`)?e.replace(`start`,`end`):e.replace(`end`,`start`)}const lr=[`left`,`right`],ur=[`right`,`left`],dr=[`top`,`bottom`],fr=[`bottom`,`top`];function pr(e,t,n){switch(e){case`top`:case`bottom`:return n?t?ur:lr:t?lr:ur;case`left`:case`right`:return t?dr:fr;default:return[]}}function mr(e,t,n,r){let i=tr(e),a=pr(er(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(cr)))),a}function hr(e){let t=er(e);return Zn[t]+e.slice(t.length)}function gr(e){return{top:e.top??0,right:e.right??0,bottom:e.bottom??0,left:e.left??0}}function _r(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:gr(e)}function vr(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function yr(e,t,n){let{reference:r,floating:i}=e,a=ir(t),o=ar(t),s=rr(o),c=er(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}let m=tr(t);return m&&(p[o]+=f*(m===`end`?1:-1)*(n&&l?-1:1)),p}async function br(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=$n(t,e),p=_r(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=vr(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=vr(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}const xr=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=o.detectOverflow?o:{...o,detectOverflow:br},c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=yr(l,r,c),f=r,p=0,m={};for(let n=0;n<a.length;n++){let h=a[n];if(!h)continue;let{name:g,fn:_}=h,{x:v,y,data:ee,reset:b}=await _({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:m,rects:l,platform:s,elements:{reference:e,floating:t}});u=v??u,d=y??d,m[g]={...m[g],...ee},b&&p<50&&(p++,typeof b==`object`&&(b.placement&&(f=b.placement),b.rects&&(l=b.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):b.rects),{x:u,y:d}=yr(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:m}},Sr=e=>({name:`arrow`,options:e,async fn(t){let{x:n,y:r,placement:i,rects:a,platform:o,elements:s,middlewareData:c}=t,{element:l,padding:u=0}=$n(e,t)||{};if(l==null)return{};let d=_r(u),f={x:n,y:r},p=ar(i),m=rr(p),h=await o.getDimensions(l),g=p===`y`,_=g?`top`:`left`,v=g?`bottom`:`right`,y=g?`clientHeight`:`clientWidth`,ee=a.reference[m]+a.reference[p]-f[p]-a.floating[m],b=f[p]-a.reference[p],te=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l)),ne=te?te[y]:0;(!ne||!await(o.isElement==null?void 0:o.isElement(te)))&&(ne=s.floating[y]||a.floating[m]);let re=ee/2-b/2,ie=ne/2-h[m]/2-1,ae=Kn(d[_],ie),oe=Kn(d[v],ie),se=ne-h[m]-oe,ce=ne/2-h[m]/2+re,le=Qn(ae,ce,se),ue=!c.arrow&&tr(i)!=null&&ce!==le&&a.reference[m]/2-(ce<ae?ae:oe)-h[m]/2<0,de=ue?ce<ae?ce-ae:ce-se:0;return{[p]:f[p]+de,data:{[p]:le,centerOffset:ce-le-de,...ue&&{alignmentOffset:de}},reset:ue}}}),Cr=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=$n(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=er(r),_=ir(o),v=er(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),ee=d||(v||!m?[hr(o)]:sr(o)),b=p!==`none`;!d&&b&&ee.push(...mr(o,m,p,y));let te=[o,...ee],ne=await s.detectOverflow(t,h),re=[],ie=i.flip?.overflows||[];if(l&&re.push(ne[g]),u){let e=or(r,a,y);re.push(ne[e[0]],ne[e[1]])}if(ie=[...ie,{placement:r,overflows:re}],!re.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=te[e];if(t&&(u!==`alignment`||_===ir(t)||ie.every(e=>ir(e.placement)!==_||e.overflows[0]>0)))return{data:{index:e,overflows:ie},reset:{placement:t}};let n=ie.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=ie.filter(e=>{if(b){let t=ir(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o}if(r!==n)return{reset:{placement:n}}}return{}}}},wr=/*#__PURE__*/ new Set([`left`,`top`]);async function Tr(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=er(n),s=tr(n),c=ir(n)===`y`,l=wr.has(o)?-1:1,u=a&&c?-1:1,d=$n(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}const Er=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await Tr(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},Dr=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i,platform:a}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=$n(e,t),u={x:n,y:r},d=await a.detectOverflow(t,l),f=ir(i),p=nr(f),m=u[p],h=u[f],g=(e,t)=>Qn(t+d[e===`y`?`top`:`left`],t,t-d[e===`y`?`bottom`:`right`]);o&&(m=g(p,m)),s&&(h=g(f,h));let _=c.fn({...t,[p]:m,[f]:h});return{..._,data:{x:_.x-n,y:_.y-r,enabled:{[p]:o,[f]:s}}}}}},Or=function(e){return e===void 0&&(e={}),{name:`size`,options:e,async fn(t){let{placement:n,rects:r,platform:i,elements:a}=t,{apply:o=()=>{},...s}=$n(e,t),c=await i.detectOverflow(t,s),l=er(n),u=tr(n),d=ir(n)===`y`,{width:f,height:p}=r.floating,m,h;l===`top`||l===`bottom`?(m=l,h=u===(await(i.isRTL==null?void 0:i.isRTL(a.floating))?`start`:`end`)?`left`:`right`):(h=l,m=u===`end`?`top`:`bottom`);let g=p-c.top-c.bottom,_=f-c.left-c.right,v=Kn(p-c[m],g),y=Kn(f-c[h],_),ee=t.middlewareData.shift,b=!ee,te=v,ne=y;ee!=null&&ee.enabled.x&&(ne=_),ee!=null&&ee.enabled.y&&(te=g),b&&!u&&(d?ne=f-2*qn(c.left,c.right):te=p-2*qn(c.top,c.bottom)),await o({...t,availableWidth:ne,availableHeight:te});let re=await i.getDimensions(a.floating);return f!==re.width||p!==re.height?{reset:{rects:!0}}:{}}}};function kr(){return typeof window<`u`}function Ar(e){return Nr(e)?(e.nodeName||``).toLowerCase():`#document`}function jr(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Mr(e){return((Nr(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function Nr(e){return kr()?e instanceof Node||e instanceof jr(e).Node:!1}function Pr(e){return kr()?e instanceof Element||e instanceof jr(e).Element:!1}function Fr(e){return kr()?e instanceof HTMLElement||e instanceof jr(e).HTMLElement:!1}function Ir(e){return!kr()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof jr(e).ShadowRoot}function Lr(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=Jr(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!==`inline`&&i!==`contents`}function Rr(e){return/^(table|td|th)$/.test(Ar(e))}function zr(e){try{if(e.matches(`:popover-open`))return!0}catch{}try{return e.matches(`:modal`)}catch{return!1}}const Br=/transform|translate|scale|rotate|perspective|filter/,Vr=/paint|layout|strict|content/,Hr=e=>!!e&&e!==`none`;let Ur;function Wr(e){let t=Pr(e)?Jr(e):e;return Hr(t.transform)||Hr(t.translate)||Hr(t.scale)||Hr(t.rotate)||Hr(t.perspective)||!Kr()&&(Hr(t.backdropFilter)||Hr(t.filter))||Br.test(t.willChange||``)||Vr.test(t.contain||``)}function Gr(e){let t=Xr(e);for(;Fr(t)&&!qr(t);){if(Wr(t))return t;if(zr(t))return null;t=Xr(t)}return null}function Kr(){return Ur??=typeof CSS<`u`&&CSS.supports&&CSS.supports(`-webkit-backdrop-filter`,`none`),Ur}function qr(e){return/^(html|body|#document)$/.test(Ar(e))}function Jr(e){return jr(e).getComputedStyle(e)}function Yr(e){return Pr(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Xr(e){if(Ar(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||Ir(e)&&e.host||Mr(e);return Ir(t)?t.host:t}function Zr(e){let t=Xr(e);return qr(t)?(e.ownerDocument||e).body:Fr(t)&&Lr(t)?t:Zr(t)}function Qr(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=Zr(e),i=r===e.ownerDocument?.body,a=jr(r);if(i){let e=$r(a);return t.concat(a,a.visualViewport||[],Lr(r)?r:[],e&&n?Qr(e):[])}return t.concat(r,Qr(r,[],n))}function $r(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function ei(e){let t=Jr(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=Fr(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=Jn(n)!==a||Jn(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function ti(e){return Pr(e)?e:e.contextElement}function ni(e){let t=ti(e);if(!Fr(t))return Xn(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=ei(t),o=(a?Jn(n.width):n.width)/r,s=(a?Jn(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}const ri=/*#__PURE__*/ Xn(0);function ii(e){let t=jr(e);return!Kr()||!t.visualViewport?ri:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function ai(e,t,n){return t===void 0&&(t=!1),!!n&&t&&n===jr(e)}function oi(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=ti(e),o=Xn(1);t&&(r?Pr(r)&&(o=ni(r)):o=ni(e));let s=ai(a,n,r)?ii(a):Xn(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a&&r){let e=jr(a),t=Pr(r)?jr(r):r,n=e,i=$r(n);for(;i&&t!==n;){let e=ni(i),t=i.getBoundingClientRect(),r=Jr(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=jr(i),i=$r(n)}}return vr({width:u,height:d,x:c,y:l})}function si(e,t){let n=Yr(e).scrollLeft;return t?t.left+n:oi(Mr(e)).left+n}function ci(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-si(e,n),y:n.top+t.scrollTop}}function li(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=Mr(r),s=t?zr(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=Xn(1),u=Xn(0),d=Fr(r);if((d||!a)&&((Ar(r)!==`body`||Lr(o))&&(c=Yr(r)),d)){let e=oi(r);l=ni(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?ci(o,c):Xn(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function ui(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function di(e){let t=Yr(e),n=e.ownerDocument.body,r=qn(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),i=qn(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight),a=-t.scrollLeft+si(e),o=-t.scrollTop;return Jr(n).direction===`rtl`&&(a+=qn(e.clientWidth,n.clientWidth)-r),{width:r,height:i,x:a,y:o}}function fi(e,t,n){n===void 0&&(n=`viewport`);let r=n===`layoutViewport`,i=jr(e),a=Mr(e),o=i.visualViewport,s=a.clientWidth,c=a.clientHeight,l=0,u=0;if(o){let e=!Kr()||t===`fixed`;r?e||(l=-o.offsetLeft,u=-o.offsetTop):(s=o.width,c=o.height,e&&(l=o.offsetLeft,u=o.offsetTop))}if(si(a)<=0){let e=a.ownerDocument,t=e.body,n=getComputedStyle(t),r=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,i=Math.abs(a.clientWidth-t.clientWidth-r),o=getComputedStyle(a).scrollbarGutter===`stable both-edges`?i/2:i;o<=25&&(s-=o)}return{width:s,height:c,x:l,y:u}}function pi(e,t){let n=oi(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=ni(e);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function mi(e,t,n){let r;if(t===`viewport`||t===`layoutViewport`)r=fi(e,n,t);else if(t===`document`)r=di(Mr(e));else if(Pr(t))r=pi(t,n);else{let n=ii(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return vr(r)}function hi(e,t){let n=t.get(e);if(n)return n;let r=Qr(e,[],!1).filter(e=>Pr(e)&&Ar(e)!==`body`),i=null,a=Jr(e).position===`fixed`,o=a?Xr(e):e;for(;Pr(o)&&!qr(o);){let e=Jr(o),t=Wr(o),n=i?i.position:a?`fixed`:``;!t&&(n===`fixed`||n===`absolute`&&e.position===`static`)?r=r.filter(e=>e!==o):i=e,o=Xr(o)}return t.set(e,r),r}function gi(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?zr(t)?[]:hi(t,this._c):[].concat(n),r],o=mi(t,a[0],i),s=o.top,c=o.right,l=o.bottom,u=o.left;for(let e=1;e<a.length;e++){let n=mi(t,a[e],i);s=qn(n.top,s),c=Kn(n.right,c),l=Kn(n.bottom,l),u=qn(n.left,u)}return{width:c-u,height:l-s,x:u,y:s}}function _i(e){let{width:t,height:n}=ei(e);return{width:t,height:n}}function vi(e,t,n){let r=Fr(t),i=Mr(t),a=n===`fixed`,o=oi(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=Xn(0);if((r||!a)&&((Ar(t)!==`body`||Lr(i))&&(s=Yr(t)),r)){let e=oi(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}!r&&i&&(c.x=si(i));let l=i&&!r&&!a?ci(i,s):Xn(0);return{x:o.left+s.scrollLeft-c.x-l.x,y:o.top+s.scrollTop-c.y-l.y,width:o.width,height:o.height}}function yi(e){return Jr(e).position===`static`}function bi(e,t){if(!Fr(e)||Jr(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return Mr(e)===n&&(n=n.ownerDocument.body),n}function xi(e,t){let n=jr(e);if(zr(e))return n;if(!Fr(e)){let t=Xr(e);for(;t&&!qr(t);){if(Pr(t)&&!yi(t))return t;t=Xr(t)}return n}let r=bi(e,t);for(;r&&Rr(r)&&yi(r);)r=bi(r,t);return r&&qr(r)&&yi(r)&&!Wr(r)?n:r||Gr(e)||n}const Si=async function(e){let t=this.getOffsetParent||xi,n=this.getDimensions,r=await n(e.floating);return{reference:vi(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function Ci(e){return Jr(e).direction===`rtl`}const wi={convertOffsetParentRelativeRectToViewportRelativeRect:li,getDocumentElement:Mr,getClippingRect:gi,getOffsetParent:xi,getElementRects:Si,getClientRects:ui,getDimensions:_i,getScale:ni,isElement:Pr,isRTL:Ci};function Ti(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Ei(e,t,n){let r=null,i,a=Mr(e);function o(){var e;clearTimeout(i),(e=r)==null||e.disconnect(),r=null}function s(n,c){n===void 0&&(n=!1),c===void 0&&(c=1),o();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(n||t(),!f||!p)return;let m=Yn(d),h=Yn(a.clientWidth-(u+f)),g=Yn(a.clientHeight-(d+p)),_=Yn(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:qn(0,Kn(1,c))||1},y=!0;function ee(t){let n=t[0].intersectionRatio;if(!Ti(l,e.getBoundingClientRect()))return s();if(n!==c){if(!y)return s();n?s(!1,n):i=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{r=new IntersectionObserver(ee,{...v,root:a.ownerDocument})}catch{r=new IntersectionObserver(ee,v)}r.observe(e)}let c=jr(e),l=()=>s(n);return c.addEventListener(`resize`,l),s(!0),()=>{c.removeEventListener(`resize`,l),o()}}function Di(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=ti(e),u=i||a?[...l?Qr(l):[],...t?Qr(t):[]]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n),a&&e.addEventListener(`resize`,n)});let d=l&&s?Ei(l,n,a):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&t&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),t&&p.observe(t));let m,h=c?oi(e):null;c&&g();function g(){let t=oi(e);h&&!Ti(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}const Oi=Er,ki=Dr,Ai=Cr,ji=Or,Mi=Sr,Ni=(e,t,n)=>{let r=/* @__PURE__ */ new Map,i=n??{},a={...wi,...i.platform,_c:r};return xr(e,t,{...i,platform:a})};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Pi=/* @__PURE__ */ new Set,Fi=class extends ht{constructor(){super(...arguments),this.submenuCleanups=/* @__PURE__ */ new Map,this.localize=new Lt(this),this.userTypedQuery=``,this.openSubmenuStack=[],this.open=!1,this.size=`m`,this.placement=`bottom-start`,this.distance=0,this.skidding=0,this.handleDocumentKeyDown=async e=>{let t=this.localize.dir()===`rtl`;if(e.key===`Escape`&&this.open&&Un(this)){let t=this.getTrigger();e.preventDefault(),e.stopPropagation(),this.open=!1,t?.focus({preventScroll:!0});return}let n=[...Pn()].find(e=>e.localName===`wa-dropdown-item`),r=n?.localName===`wa-dropdown-item`,i=this.getCurrentSubmenuItem(),a=!!i,o,s,c;a?(o=this.getSubmenuItems(i),s=o.find(e=>e.active||e===n),c=s?o.indexOf(s):-1):(o=this.getItems(),s=o.find(e=>e.active||e===n),c=s?o.indexOf(s):-1);let l;if(e.key===`ArrowUp`&&(e.preventDefault(),e.stopPropagation(),l=c>0?o[c-1]:o[o.length-1]),e.key===`ArrowDown`&&(e.preventDefault(),e.stopPropagation(),l=c!==-1&&c<o.length-1?o[c+1]:o[0]),e.key===(t?`ArrowLeft`:`ArrowRight`)&&r&&s&&s.hasSubmenu)e.preventDefault(),e.stopPropagation(),s.submenuOpen=!0,this.addToSubmenuStack(s),setTimeout(()=>{let e=this.getSubmenuItems(s);e.length>0&&(e.forEach((e,t)=>e.active=t===0),e[0].focus({preventScroll:!0}))},0);else if(e.key===(t?`ArrowRight`:`ArrowLeft`)&&a){e.preventDefault(),e.stopPropagation();let t=this.removeFromSubmenuStack();t&&(t.submenuOpen=!1,setTimeout(()=>{t.focus({preventScroll:!0}),t.active=!0,(t.slot===`submenu`?this.getSubmenuItems(t.parentElement):this.getItems()).forEach(e=>{e!==t&&(e.active=!1)})},0))}else(e.key===`Home`||e.key===`End`)&&(e.preventDefault(),e.stopPropagation(),l=e.key===`Home`?o[0]:o[o.length-1]),e.key===`Tab`&&await this.hideMenu(),e.key.length===1&&!(e.metaKey||e.ctrlKey||e.altKey)&&(e.key!==` `||this.userTypedQuery!==``)&&(clearTimeout(this.userTypedTimeout),this.userTypedTimeout=setTimeout(()=>{this.userTypedQuery=``},1e3),this.userTypedQuery+=e.key,o.some(e=>{let t=(e.textContent||``).trim().toLowerCase(),n=this.userTypedQuery.trim().toLowerCase();return t.startsWith(n)?(l=e,!0):!1})),l?(e.preventDefault(),e.stopPropagation(),o.forEach(e=>e.active=e===l),l.focus({preventScroll:!0}),l.scrollIntoView({block:`nearest`})):(e.key===`Enter`||e.key===` `&&this.userTypedQuery===``)&&r&&s&&(e.preventDefault(),e.stopPropagation(),s.hasSubmenu?(s.submenuOpen=!0,this.addToSubmenuStack(s),setTimeout(()=>{let e=this.getSubmenuItems(s);e.length>0&&(e.forEach((e,t)=>e.active=t===0),e[0].focus({preventScroll:!0}))},0)):this.makeSelection(s,e))},this.handleDocumentPointerDown=e=>{e.composedPath().some(e=>e instanceof HTMLElement?e===this||e.closest(`wa-dropdown, [part="submenu"]`):!1)||(this.open=!1)},this.handleGlobalMouseMove=e=>{let t=this.getCurrentSubmenuItem();if(!t?.submenuOpen||!t.submenuElement)return;let n=t.submenuElement.getBoundingClientRect(),r=this.localize.dir()===`rtl`,i=r?n.right:n.left,a=r?Math.max(e.clientX,i):Math.min(e.clientX,i),o=Math.max(n.top,Math.min(e.clientY,n.bottom));t.submenuElement.style.setProperty(`--safe-triangle-cursor-x`,`${a}px`),t.submenuElement.style.setProperty(`--safe-triangle-cursor-y`,`${o}px`);let s=e.composedPath(),c=t.matches(`:hover`),l=!!t.submenuElement?.matches(`:hover`),u=c||!!s.find(e=>e===t),d=l||!!s.find(e=>e instanceof HTMLElement&&e.closest(`[part="submenu"]`)===t.submenuElement);!u&&!d&&setTimeout(()=>{!c&&!l&&(t.submenuOpen=!1)},100)}}handleSizeChange(){bt(this.localName,this.size)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.userTypedTimeout),this.closeAllSubmenus(),this.submenuCleanups.forEach(e=>e()),this.submenuCleanups.clear(),document.removeEventListener(`mousemove`,this.handleGlobalMouseMove),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`pointerdown`,this.handleDocumentPointerDown),Hn(this)}firstUpdated(e){super.firstUpdated(e),this.syncAriaAttributes()}async updated(e){if(e.has(`open`)){let t=e.get(`open`);if(t===this.open||t===void 0&&this.open===!1)return;this.customStates.set(`open`,this.open),this.open?await this.showMenu():(this.closeAllSubmenus(),await this.hideMenu())}e.has(`size`)&&this.syncItemSizes()}getItems(e=!1){let t=(this.defaultSlot?.assignedElements({flatten:!0})??[]).filter(e=>e.localName===`wa-dropdown-item`);return e?t:t.filter(e=>!e.disabled)}getSubmenuItems(e,t=!1){let n=e.shadowRoot?.querySelector(`slot[name="submenu"]`)||e.querySelector(`slot[name="submenu"]`);if(!n)return[];let r=n.assignedElements({flatten:!0}).filter(e=>e.localName===`wa-dropdown-item`);return t?r:r.filter(e=>!e.disabled)}syncItemSizes(){(this.defaultSlot?.assignedElements({flatten:!0})??[]).filter(e=>e.localName===`wa-dropdown-item`).forEach(e=>e.size=this.size)}addToSubmenuStack(e){let t=this.openSubmenuStack.indexOf(e);t===-1?this.openSubmenuStack.push(e):this.openSubmenuStack=this.openSubmenuStack.slice(0,t+1)}removeFromSubmenuStack(){return this.openSubmenuStack.pop()}getCurrentSubmenuItem(){return this.openSubmenuStack.length>0?this.openSubmenuStack[this.openSubmenuStack.length-1]:void 0}closeAllSubmenus(){this.getItems(!0).forEach(e=>{e.submenuOpen=!1}),this.openSubmenuStack=[]}closeSiblingSubmenus(e){let t=e.closest(`wa-dropdown-item:not([slot="submenu"])`),n;n=t?this.getSubmenuItems(t,!0):this.getItems(!0),n.forEach(t=>{t!==e&&t.submenuOpen&&(t.submenuOpen=!1)}),this.openSubmenuStack.includes(e)||this.openSubmenuStack.push(e)}getTrigger(){return this.querySelector(`[slot="trigger"]`)}async showMenu(){if(!this.getTrigger()||!this.popup||!this.menu)return;let e=new In;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}if(this.popup.active)return;Pi.forEach(e=>e.open=!1),this.popup.active=!0,this.open=!0,Pi.add(this),Vn(this),this.syncAriaAttributes(),document.addEventListener(`keydown`,this.handleDocumentKeyDown),document.addEventListener(`pointerdown`,this.handleDocumentPointerDown),document.addEventListener(`mousemove`,this.handleGlobalMouseMove),this.menu.classList.remove(`hide`),await jn(this.menu,`show`);let t=this.getItems();t.length>0&&(t.forEach((e,t)=>e.active=t===0),t[0].focus({preventScroll:!0})),this.dispatchEvent(new zn)}async hideMenu(){if(!this.popup||!this.menu)return;let e=new Ln({source:this});this.dispatchEvent(e),e.defaultPrevented?this.open=!0:(this.open=!1,Pi.delete(this),Hn(this),this.syncAriaAttributes(),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`pointerdown`,this.handleDocumentPointerDown),document.removeEventListener(`mousemove`,this.handleGlobalMouseMove),this.menu.classList.remove(`show`),await jn(this.menu,`hide`),this.popup.active=this.open,this.dispatchEvent(new Rn))}handleMenuClick(e){let t=e.target.closest(`wa-dropdown-item`);t&&!t.disabled&&(t.hasSubmenu?(t.submenuOpen||=(this.closeSiblingSubmenus(t),this.addToSubmenuStack(t),!0),e.stopPropagation()):this.makeSelection(t,e))}async handleMenuSlotChange(){let e=this.getItems(!0);await Promise.all(e.map(e=>e.updateComplete)),this.syncItemSizes();let t=e.some(e=>e.type===`checkbox`),n=e.some(e=>e.hasSubmenu);e.forEach((r,i)=>{r.setAttribute(`aria-posinset`,String(i+1)),r.setAttribute(`aria-setsize`,String(e.length)),r.active=i===0,r.checkboxAdjacent=t,r.submenuAdjacent=n})}handleTriggerClick(){this.open=!this.open}handleSubmenuOpening(e){let t=e.detail.item;this.closeSiblingSubmenus(t),this.addToSubmenuStack(t),this.setupSubmenuPosition(t),this.processSubmenuItems(t)}setupSubmenuPosition(e){if(!e.submenuElement)return;this.cleanupSubmenuPosition(e);let t=Di(e,e.submenuElement,()=>{this.positionSubmenu(e),this.updateSafeTriangleCoordinates(e)});this.submenuCleanups.set(e,t);let n=e.submenuElement.querySelector(`slot[name="submenu"]`);n&&(n.removeEventListener(`slotchange`,Fi.handleSubmenuSlotChange),n.addEventListener(`slotchange`,Fi.handleSubmenuSlotChange),Fi.handleSubmenuSlotChange({target:n}))}static handleSubmenuSlotChange(e){let t=e.target;if(!t)return;let n=t.assignedElements().filter(e=>e.localName===`wa-dropdown-item`);if(n.length===0)return;let r=n.some(e=>e.hasSubmenu),i=n.some(e=>e.type===`checkbox`);n.forEach(e=>{e.submenuAdjacent=r,e.checkboxAdjacent=i})}processSubmenuItems(e){if(!e.submenuElement)return;let t=this.getSubmenuItems(e,!0),n=t.some(e=>e.hasSubmenu);t.forEach(e=>{e.submenuAdjacent=n})}cleanupSubmenuPosition(e){let t=this.submenuCleanups.get(e);t&&(t(),this.submenuCleanups.delete(e))}positionSubmenu(e){if(!e.submenuElement)return;let t=this.localize.dir()===`rtl`?`left-start`:`right-start`;Ni(e,e.submenuElement,{placement:t,middleware:[Oi({mainAxis:0,crossAxis:-5}),Ai({fallbackStrategy:`bestFit`}),ki({padding:8,crossAxis:!0})]}).then(({x:t,y:n,placement:r})=>{e.submenuElement.setAttribute(`data-placement`,r),Object.assign(e.submenuElement.style,{left:`${t}px`,top:`${n}px`})})}updateSafeTriangleCoordinates(e){if(!e.submenuElement||!e.submenuOpen)return;if(document.activeElement?.matches(`:focus-visible`)){e.submenuElement.style.setProperty(`--safe-triangle-visible`,`none`);return}e.submenuElement.style.setProperty(`--safe-triangle-visible`,`block`);let t=e.submenuElement.getBoundingClientRect(),n=this.localize.dir()===`rtl`;e.submenuElement.style.setProperty(`--safe-triangle-submenu-start-x`,`${n?t.right:t.left}px`),e.submenuElement.style.setProperty(`--safe-triangle-submenu-start-y`,`${t.top}px`),e.submenuElement.style.setProperty(`--safe-triangle-submenu-end-x`,`${n?t.right:t.left}px`),e.submenuElement.style.setProperty(`--safe-triangle-submenu-end-y`,`${t.bottom}px`)}makeSelection(e,t){let n=this.getTrigger();if(e.disabled)return;e.type===`checkbox`&&(e.checked=!e.checked);let r=new Nn({item:e});this.dispatchEvent(r),r.defaultPrevented||(e.navigate(t),this.open=!1,n?.focus({preventScroll:!0}))}async syncAriaAttributes(){let e=this.getTrigger(),t;e&&(e.localName===`wa-button`?(await customElements.whenDefined(`wa-button`),await e.updateComplete,t=e.shadowRoot.querySelector(`[part~="base"]`)):t=e,t.hasAttribute(`id`)||t.setAttribute(`id`,Gn(`wa-dropdown-trigger-`)),t.setAttribute(`aria-haspopup`,`menu`),t.setAttribute(`aria-expanded`,this.open?`true`:`false`),this.menu?.setAttribute(`aria-expanded`,`false`))}render(){let e=this.didSSR&&!this.hasUpdated?this.open:this.popup?.active;return Ie`
      <wa-popup
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        ?active=${e}
        flip
        flip-fallback-strategy="best-fit"
        shift
        shift-padding="10"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot
          name="trigger"
          slot="anchor"
          @click=${this.handleTriggerClick}
          @slotchange=${this.syncAriaAttributes}
        ></slot>
        <div
          id="menu"
          part="menu"
          role="menu"
          tabindex="-1"
          aria-orientation="vertical"
          @click=${this.handleMenuClick}
          @submenu-opening=${this.handleSubmenuOpening}
        >
          <slot @slotchange=${this.handleMenuSlotChange}></slot>
        </div>
      </wa-popup>
    `}};Fi.css=[St,Fn],s([lt(`slot:not([name])`)],Fi.prototype,`defaultSlot`,2),s([lt(`#menu`)],Fi.prototype,`menu`,2),s([lt(`wa-popup`)],Fi.prototype,`popup`,2),s([x({type:Boolean,reflect:!0})],Fi.prototype,`open`,2),s([x({reflect:!0})],Fi.prototype,`size`,2),s([Tt(`size`)],Fi.prototype,`handleSizeChange`,1),s([x({reflect:!0})],Fi.prototype,`placement`,2),s([x({type:Number})],Fi.prototype,`distance`,2),s([x({type:Number})],Fi.prototype,`skidding`,2),Fi=s([it(`wa-dropdown`)],Fi);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ii=class extends Event{constructor(){super(`wa-reposition`,{bubbles:!0,cancelable:!1,composed:!0})}},Li=v`
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
;function Ri(e){return Bi(e)}function zi(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Bi(e){for(let t=e;t;t=zi(t))if(t instanceof Element&&getComputedStyle(t).display===`none`)return null;for(let t=zi(e);t;t=zi(t)){if(!(t instanceof Element))continue;let e=getComputedStyle(t);if(e.display!==`contents`&&(e.position!==`static`||Wr(e)||t.tagName===`BODY`))return t}return null}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Vi(e){return typeof e==`object`&&!!e&&`getBoundingClientRect`in e&&(`contextElement`in e?e instanceof Element:!0)}var Hi=!!globalThis?.HTMLElement?.prototype.hasOwnProperty(`popover`),w=class extends ht{constructor(){super(...arguments),this.localize=new Lt(this),this.SUPPORTS_POPOVER=!1,this.active=!1,this.placement=`top`,this.boundary=`viewport`,this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement=`anchor`,this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements=``,this.flipFallbackStrategy=`best-fit`,this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl&&this.popup){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),n=this.placement.includes(`top`)||this.placement.includes(`bottom`),r=0,i=0,a=0,o=0,s=0,c=0,l=0,u=0;n?e.top<t.top?(r=e.left,i=e.bottom,a=e.right,o=e.bottom,s=t.left,c=t.top,l=t.right,u=t.top):(r=t.left,i=t.bottom,a=t.right,o=t.bottom,s=e.left,c=e.top,l=e.right,u=e.top):e.left<t.left?(r=e.right,i=e.top,a=t.left,o=t.top,s=e.right,c=e.bottom,l=t.left,u=t.bottom):(r=t.right,i=t.top,a=e.left,o=e.top,s=t.right,c=t.bottom,l=e.left,u=e.bottom),this.style.setProperty(`--hover-bridge-top-left-x`,`${r}px`),this.style.setProperty(`--hover-bridge-top-left-y`,`${i}px`),this.style.setProperty(`--hover-bridge-top-right-x`,`${a}px`),this.style.setProperty(`--hover-bridge-top-right-y`,`${o}px`),this.style.setProperty(`--hover-bridge-bottom-left-x`,`${s}px`),this.style.setProperty(`--hover-bridge-bottom-left-y`,`${c}px`),this.style.setProperty(`--hover-bridge-bottom-right-x`,`${l}px`),this.style.setProperty(`--hover-bridge-bottom-right-y`,`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.SUPPORTS_POPOVER=Hi,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has(`active`)&&(this.active?this.start():this.stop()),e.has(`anchor`)&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor==`string`){let e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchorEl=this.anchor instanceof Element||Vi(this.anchor)?this.anchor:this.querySelector(`[slot="anchor"]`);this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&this.active&&this.isConnected&&(this.popup?.showPopover?.(),this.cleanup=Di(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.popup?.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute(`data-current-placement`),this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl||!this.popup)return;let e=[Oi({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(ji({apply:({rects:e})=>{let t=this.sync===`width`||this.sync===`both`,n=this.sync===`height`||this.sync===`both`;this.popup.style.width=t?`${e.reference.width}px`:``,this.popup.style.height=n?`${e.reference.height}px`:``}})):(this.popup.style.width=``,this.popup.style.height=``);let t;this.SUPPORTS_POPOVER&&!Vi(this.anchor)&&this.boundary===`scroll`&&(t=Qr(this.anchorEl).filter(e=>e instanceof Element)),this.flip&&e.push(Ai({boundary:this.flipBoundary||t,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy===`best-fit`?`bestFit`:`initialPlacement`,padding:this.flipPadding})),this.shift&&e.push(ki({boundary:this.shiftBoundary||t,padding:this.shiftPadding})),this.autoSize?e.push(ji({boundary:this.autoSizeBoundary||t,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{this.autoSize===`vertical`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-height`,`${t}px`):this.style.removeProperty(`--auto-size-available-height`),this.autoSize===`horizontal`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-width`,`${e}px`):this.style.removeProperty(`--auto-size-available-width`)}})):(this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`)),this.arrow&&e.push(Mi({element:this.arrowEl,padding:this.arrowPadding}));let n=this.SUPPORTS_POPOVER?e=>wi.getOffsetParent(e,Ri):wi.getOffsetParent;Ni(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.SUPPORTS_POPOVER?`absolute`:`fixed`,platform:{...wi,getOffsetParent:n}}).then(({x:e,y:t,middlewareData:n,placement:r})=>{let i=this.localize.dir()===`rtl`,a={top:`bottom`,right:`left`,bottom:`top`,left:`right`}[r.split(`-`)[0]];if(this.setAttribute(`data-current-placement`,r),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=n.arrow.x,t=n.arrow.y,r=``,o=``,s=``,c=``;if(this.arrowPlacement===`start`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;r=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``,o=i?n:``,c=i?``:n}else if(this.arrowPlacement===`end`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;o=i?``:n,c=i?n:``,s=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``}else this.arrowPlacement===`center`?(c=typeof e==`number`?`calc(50% - var(--arrow-size-diagonal))`:``,r=typeof t==`number`?`calc(50% - var(--arrow-size-diagonal))`:``):(c=typeof e==`number`?`${e}px`:``,r=typeof t==`number`?`${t}px`:``);Object.assign(this.arrowEl.style,{top:r,right:o,bottom:s,left:c,[a]:`calc(var(--arrow-base-offset) - var(--arrow-size-diagonal))`})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new Ii)}render(){return Ie`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${Vt({"popup-hover-bridge":!0,"popup-hover-bridge-visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${Vt({popup:!0,"popup-active":this.active,"popup-fixed":!this.SUPPORTS_POPOVER,"popup-has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?Ie`<div part="arrow" class="arrow" role="presentation"></div>`:``}
      </div>
    `}};w.css=Li,s([lt(`.popup`)],w.prototype,`popup`,2),s([lt(`.arrow`)],w.prototype,`arrowEl`,2),s([x({attribute:!1,type:Boolean})],w.prototype,`SUPPORTS_POPOVER`,2),s([x()],w.prototype,`anchor`,2),s([x({type:Boolean,reflect:!0})],w.prototype,`active`,2),s([x({reflect:!0})],w.prototype,`placement`,2),s([x()],w.prototype,`boundary`,2),s([x({type:Number})],w.prototype,`distance`,2),s([x({type:Number})],w.prototype,`skidding`,2),s([x({type:Boolean})],w.prototype,`arrow`,2),s([x({attribute:`arrow-placement`})],w.prototype,`arrowPlacement`,2),s([x({attribute:`arrow-padding`,type:Number})],w.prototype,`arrowPadding`,2),s([x({type:Boolean})],w.prototype,`flip`,2),s([x({attribute:`flip-fallback-placements`,converter:{fromAttribute:e=>e.split(` `).map(e=>e.trim()).filter(e=>e!==``),toAttribute:e=>e.join(` `)}})],w.prototype,`flipFallbackPlacements`,2),s([x({attribute:`flip-fallback-strategy`})],w.prototype,`flipFallbackStrategy`,2),s([x({type:Object})],w.prototype,`flipBoundary`,2),s([x({attribute:`flip-padding`,type:Number})],w.prototype,`flipPadding`,2),s([x({type:Boolean})],w.prototype,`shift`,2),s([x({type:Object})],w.prototype,`shiftBoundary`,2),s([x({attribute:`shift-padding`,type:Number})],w.prototype,`shiftPadding`,2),s([x({attribute:`auto-size`})],w.prototype,`autoSize`,2),s([x()],w.prototype,`sync`,2),s([x({type:Object})],w.prototype,`autoSizeBoundary`,2),s([x({attribute:`auto-size-padding`,type:Number})],w.prototype,`autoSizePadding`,2),s([x({attribute:`hover-bridge`,type:Boolean})],w.prototype,`hoverBridge`,2),w=s([it(`wa-popup`)],w);var Ui=/* @__PURE__ */ t({default:()=>Fi}),Wi=/* @__PURE__ */ t({default:()=>Tn}),T
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;Object.getOwnPropertyDescriptors||(()=>{var e;if(typeof Reflect<`u`&&Reflect.ownKeys)e=Reflect.ownKeys;else{var t=Object.getOwnPropertySymbols||(e=>[]);e=(e=>Object.getOwnPropertyNames(e).concat(t(e)))}return(t=>{for(var n=e(t),r={},i=n.length|0,a=0;a!==i;){var o=n[a];Object.defineProperty(r,o,{configurable:!0,enumerable:!0,writable:!0,value:Object.getOwnPropertyDescriptor(t,o)}),a=a+1|0}return r})})();function Gi(e){this.c=e}T=Gi.prototype,T.toString=(function(){return String.fromCharCode(this.c)});function Ki(e,t){this.l=e,this.h=t}T=Ki.prototype,T.toString=(function(){return Dc(this.l,this.h)});function qi(e){switch(typeof e){case`string`:return Om.l();case`number`:return ca(e)?e<<24>>24===e?ap.l():e<<16>>16===e?_p.l():xm.l():la(e)?bm.l():ym.l();case`boolean`:return bf.l();case`undefined`:return yc.l();default:return e instanceof Ki?wm.l():e instanceof Gi?Cf.l():e&&e.$classData?e.$classData.l():null}}function Ji(e){switch(typeof e){case`string`:return`java.lang.String`;case`number`:return ca(e)?e<<24>>24===e?`java.lang.Byte`:e<<16>>16===e?`java.lang.Short`:`java.lang.Integer`:la(e)?`java.lang.Float`:`java.lang.Double`;case`boolean`:return`java.lang.Boolean`;case`undefined`:return`java.lang.Void`;default:return e instanceof Ki?`java.lang.Long`:e instanceof Gi?`java.lang.Character`:e&&e.$classData?e.$classData.N:null.iJ()}}function Yi(e,t){switch(typeof e){case`string`:return Dm(e,t);case`number`:return _m(e,t);case`boolean`:return vf(e,t);case`undefined`:return gc(e,t);default:return e&&e.$classData||e===null?e.k(t):e instanceof Ki?Sm(e.l,e.h,t):e instanceof Gi?Sf(e.c,t):ma.prototype.k.call(e,t)}}function Xi(e){switch(typeof e){case`string`:return Em(e);case`number`:return vm(e);case`boolean`:return yf(e);case`undefined`:return _c(e);default:return e&&e.$classData||e===null?e.t():e instanceof Ki?Cm(e.l,e.h):e instanceof Gi?xf(e.c):ma.prototype.t.call(e)}}function Zi(e){return e===void 0?`undefined`:e.toString()}function Qi(e){if(e===0)throw new ip(`/ by zero`);return e}function $i(e){return e>2147483647?2147483647:e<-2147483648?-2147483648:e|0}function ea(e){return String.fromCharCode(e)}var ta=/* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(8));function na(e,t,n,r,i){if(e!==n||r-t>>>0>i>>>0)for(var a=0;a<i;a=a+1|0)n[r+a|0]=e[t+a|0];else for(var a=i-1|0;a>=0;a=a-1|0)n[r+a|0]=e[t+a|0]}var ra=0,ia=/* @__PURE__ */ new WeakMap;function aa(e){switch(typeof e){case`string`:return Em(e);case`number`:return vm(e);case`bigint`:var t=0;for(e<BigInt(0)&&(e=~e);e!==BigInt(0);)t^=Number(BigInt.asIntN(32,e)),e>>=BigInt(32);return t;case`boolean`:return e?1231:1237;case`undefined`:return 0;case`symbol`:var n=e.description;return n===void 0?0:Em(n);default:if(e===null)return 0;var r=ia.get(e);return r===void 0&&(r=ra+1|0,ra=r,ia.set(e,r)),r}}function oa(e){return typeof e==`number`&&e<<24>>24===e&&1/e!=-1/0}function sa(e){return typeof e==`number`&&e<<16>>16===e&&1/e!=-1/0}function ca(e){return typeof e==`number`&&(e|0)===e&&1/e!=-1/0}function la(e){return typeof e==`number`&&(e!==e||Math.fround(e)===e)}function ua(e){return new Gi(e)}ua(0);function E(e,t){return new Ki(e,t)}var da=E(0,0);function fa(e){return e===null?0:e.c}function pa(e){return e===null?da:e}function ma(){}T=ma.prototype,T.constructor=ma;function D(){}D.prototype=T,T.t=(function(){return aa(this)}),T.k=(function(e){return this===e}),T.w=(function(){var e=this.t();return Ji(this)+`@`+(e>>>0).toString(16)}),T.toString=(function(){return this.w()});function ha(e){if(typeof e==`number`){this.b=Array(e);for(var t=0;t<e;t++)this.b[t]=null}else this.b=e}T=ha.prototype=new D,T.constructor=ha,T.ae=(function(e,t,n,r){na(this.b,e,t.b,n,r)}),T.ai=(function(){return new ha(this.b.slice())});function ga(){}ga.prototype=T;function _a(e){if(typeof e==`number`){this.b=Array(e);for(var t=0;t<e;t++)this.b[t]=!1}else this.b=e}T=_a.prototype=new D,T.constructor=_a,T.ae=(function(e,t,n,r){na(this.b,e,t.b,n,r)}),T.ai=(function(){return new _a(this.b.slice())});function va(e){this.b=typeof e==`number`?new Uint16Array(e):e}T=va.prototype=new D,T.constructor=va,T.ae=(function(e,t,n,r){t.b.set(this.b.subarray(e,e+r|0),n)}),T.ai=(function(){return new va(this.b.slice())});function ya(e){this.b=typeof e==`number`?new Int8Array(e):e}T=ya.prototype=new D,T.constructor=ya,T.ae=(function(e,t,n,r){t.b.set(this.b.subarray(e,e+r|0),n)}),T.ai=(function(){return new ya(this.b.slice())});function ba(e){this.b=typeof e==`number`?new Int16Array(e):e}T=ba.prototype=new D,T.constructor=ba,T.ae=(function(e,t,n,r){t.b.set(this.b.subarray(e,e+r|0),n)}),T.ai=(function(){return new ba(this.b.slice())});function xa(e){this.b=typeof e==`number`?new Int32Array(e):e}T=xa.prototype=new D,T.constructor=xa,T.ae=(function(e,t,n,r){t.b.set(this.b.subarray(e,e+r|0),n)}),T.ai=(function(){return new xa(this.b.slice())});function Sa(e){typeof e==`number`?(e<<=1,this.b=new Int32Array(e)):this.b=e}T=Sa.prototype=new D,T.constructor=Sa,T.ae=(function(e,t,n,r){t.b.set(this.b.subarray(e<<1,(e+r|0)<<1),n<<1)}),T.ai=(function(){return new Sa(this.b.slice())});function Ca(e){this.b=typeof e==`number`?new Float32Array(e):e}T=Ca.prototype=new D,T.constructor=Ca,T.ae=(function(e,t,n,r){t.b.set(this.b.subarray(e,e+r|0),n)}),T.ai=(function(){return new Ca(this.b.slice())});function wa(e){this.b=typeof e==`number`?new Float64Array(e):e}T=wa.prototype=new D,T.constructor=wa,T.ae=(function(e,t,n,r){t.b.set(this.b.subarray(e,e+r|0),n)}),T.ai=(function(){return new wa(this.b.slice())});function O(){this.C=void 0,this.n=null,this.O=null,this.B=null,this.D=0,this.z=null,this.E=``,this.L=void 0,this.A=void 0,this.F=void 0,this.w=void 0,this.J=!1,this.N=``,this.X=!1,this.Y=!1,this.Z=!1,this.I=void 0}T=O.prototype,T.p=(function(e,t,n,r,i){this.n={},this.z=e,this.E=t;var a=this;return this.F=(e=>e===a),this.N=n,this.X=!0,this.I=(e=>!1),r!==void 0&&(this.A=new O().y(this,r,i,t===`J`)),this}),T.i=(function(e,t,n,r){var i=Object.getOwnPropertyNames(n)[0];return this.n=n,this.E=`L`+t+`;`,this.F=(e=>!!e.n[i]),this.J=e===2,this.N=t,this.Y=e===1,this.I=r||(e=>!!(e&&e.$classData&&e.$classData.n[i])),typeof e!=`number`&&(e.prototype.$classData=this),this}),T.y=(function(e,t,n,r,i){t.prototype.$classData=this;var a=`[`+e.E;this.C=t,this.n={s:1,a:1},this.O=e,this.B=e,this.D=1,this.E=a,this.N=a,this.Z=!0;var o=this;return this.F=i||(e=>o===e),this.w=r?(e=>{for(var n=e.length|0,r=new t(n),i=r.b,a=0;a<n;a=a+1|0){var o=e[a];i[a<<1]=o.l,i[(a<<1)+1|0]=o.h}return r}):n?(e=>new t(new n(e))):(e=>new t(e)),this.I=(e=>e instanceof t),this}),T.a=(function(e){function t(e){if(typeof e==`number`){this.b=Array(e);for(var t=0;t<e;t++)this.b[t]=null}else this.b=e}var n=t.prototype=new ga;n.constructor=t,n.ae=(function(e,t,n,r){na(this.b,e,t.b,n,r)}),n.ai=(function(){return new t(this.b.slice())}),n.$classData=this;var r=e.B||e,i=e.D+1,a=`[`+e.E;this.C=t,this.n={s:1,a:1},this.O=e,this.B=r,this.D=i,this.E=a,this.N=a,this.Z=!0;var o=(e=>{var t=e.D;return t===i?r.F(e.B):t>i&&r===Ta});this.F=o,this.w=(e=>new t(e));var s=this;return this.I=(e=>{var t=e&&e.$classData;return!!t&&(t===s||o(t))}),this}),T.r=(function(){return this.A||=new O().a(this),this.A}),T.l=(function(){return this.L||=new Ad(this),this.L}),T.R=(function(e){return this===e||this.F(e)}),T.S=(function(){return this.P?this.P.l():null}),T.Q=(function(){return this.O?this.O.l():null}),T.U=(function(e){if(this===Ea)throw sp(new cp);return new(this.r()).C(e)});var Ta=new O;Ta.n={},Ta.E=`Ljava.lang.Object;`,Ta.F=(e=>!e.X),Ta.N=`java.lang.Object`,Ta.I=(e=>e!==null),Ta.A=new O().y(Ta,ha,void 0,!1,(e=>{var t=e.D;return t===1?!e.B.X:t>1})),ma.prototype.$classData=Ta;var Ea=new O().p(void 0,`V`,`void`,void 0,void 0),Da=new O().p(!1,`Z`,`boolean`,_a,void 0),Oa=new O().p(0,`C`,`char`,va,Uint16Array),ka=new O().p(0,`B`,`byte`,ya,Int8Array),Aa=new O().p(0,`S`,`short`,ba,Int16Array),ja=new O().p(0,`I`,`int`,xa,Int32Array),Ma=new O().p(da,`J`,`long`,Sa,Int32Array),Na=new O().p(0,`F`,`float`,Ca,Float32Array),Pa=new O().p(0,`D`,`double`,wa,Float64Array);new Int8Array(new Int32Array([1]).buffer)[0];function Fa(e,t,n){for(var r=new Int32Array(e),i=t.length|0,a=0,o=0,s=0,c=0;o!==i;){var l=t.charCodeAt(o);l<80?c=(c|l-48)<<5:(c|=l-93,a=(a&n)+c|0,r[s]=a,s=s+1|0,c=0),o=o+1|0}return r}function Ia(e,t){return new xa(Fa(e,t,-1))}function La(e){return qi(e).dp()+`@`+aa(e)}function Ra(e){var t=e.dC;return t===void 0?La(e):t}function za(){this.dA=null,Ba=this,this.dA=Va().gm(new q((e=>void 0)),Wc().db,!0)}T=za.prototype=new D,T.constructor=za,T.gm=(function(e,t,n){return new df(e,n,t,this)}),new O().i(za,`com.raquo.airstream.core.Observer$`,{bt:1});var Ba;function Va(){return Ba||=new za,Ba}function Ha(e){this.cJ=null,this.dE=null,this.cK=0,this.cJ=e,this.dE=void 0;var t=io().c6();this.cK=t===void 0?1:1+t.cK|0,Ka().ca===-1||this.cK>Ka().ca?ed().aX(new hm(this,Ka().ca)):Xa().a5?Xa().aZ.push(this)|0:io().di(this)}T=Ha.prototype=new D,T.constructor=Ha;var Ua=new O().i(Ha,`com.raquo.airstream.core.Transaction`,{bw:1});function Wa(){this.ca=0,this.dF=null,Ga=this,this.ca=1e3,this.dF=new q((e=>{throw jd(new Md,`Attempted to run Transaction `+e+` after it was already executed.`)}))}T=Wa.prototype=new D,T.constructor=Wa,T.fG=(function(e){try{e.cJ.h(e);var t=e.dE;if(t!==void 0)for(;t.iL();)t.iI().iM(e)}catch(e){var n=e instanceof Mu?e:new th(e);ed().aX(n)}}),new O().i(Wa,`com.raquo.airstream.core.Transaction$`,{bx:1});var Ga;function Ka(){return Ga||=new Wa,Ga}function qa(e){e.cb.length|0?new Ha(new q((t=>{for(;(e.cb.length|0)>0;){var n=e.cb.shift();try{n.h(t)}catch(e){var r=e instanceof Mu?e:new th(e);ed().aX(r)}}for(;(e.aZ.length|0)>0;){var i=e.aZ.shift();io().di(i)}}))):(e.aZ.length|0)>0&&new Ha(new q((t=>{for(;(e.aZ.length|0)>0;)io().di(e.aZ.shift())})))}function Ja(){this.a5=!1,this.cb=null,this.aZ=null,Ya=this,this.a5=!1,this.cb=wo().aS(L().aw(new(I.r()).C([]))),this.aZ=wo().aS(L().aw(new(Ua.r()).C([])))}T=Ja.prototype=new D,T.constructor=Ja,new O().i(Ja,`com.raquo.airstream.core.Transaction$onStart$`,{by:1});var Ya;function Xa(){return Ya||=new Ja,Ya}function Za(e,t){return e.b0.get(t)}function Qa(e,t){e.cc.unshift(t)}function $a(e){return e.cc.shift()}function eo(e,t,n){var r=Za(e,t),i=r===void 0,a=r===void 0?wo().aS(L().aw(new(Ua.r()).C([]))):r;a.push(n),i&&e.b0.set(t,a)}function to(e,t){var n=Za(e,t),r=n===void 0||(n.length|0)>0?n:void 0;if(r!==void 0){var i=r.shift();return r.length|0||e.b0.delete(t),i}}function no(){this.cc=null,this.b0=null,ro=this,this.cc=wo().aS(L().aw(new(Ua.r()).C([]))),this.b0=/* @__PURE__ */ new Map}T=no.prototype=new D,T.constructor=no,T.di=(function(e){var t=this.c6();t===void 0?(Qa(this,e),Ka().fG(e),this.hg(e)):eo(this,t,e)}),T.hg=(function(e){for(var t=e;;){var n=this.c6(),r=t;if(!(n!==void 0&&_l().O(r,n)))throw jd(new Md,`Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.`);this.ib(t),t.cJ=Ka().dF;var i=this.c6();if(_l().O(i,void 0)){if((this.b0.size|0)>0){var a=new Ju(0);throw this.b0.forEach((e=>((t,n)=>{e.bM=e.bM+(t.length|0)|0}))(a)),jd(new Md,`Transaction queue error: Stack cleared, but a total of `+a.bM+` children for `+(this.b0.size|0)+` transactions remain. This is a bug in Airstream.`)}return}Ka().fG(i),t=i}}),T.ib=(function(e){for(var t=e;;){var n=to(this,t);if(_l().O(n,void 0)){$a(this);var r=this.c6();if(!_l().O(r,void 0))t=r;else return}else{Qa(this,n);return}}}),T.c6=(function(){return this.cc[0]}),new O().i(no,`com.raquo.airstream.core.Transaction$pendingTransactions$`,{bz:1});var ro;function io(){return ro||=new no,ro}function ao(e,t){var n=e.ax.indexOf(t)|0;if(n!==-1)e.ax.splice(n,1),e.I.g()||t.g7();else throw jd(new Md,`Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?`)}function oo(e){for(;(e.cd.length|0)>0;)ao(e,e.cd.shift())}function so(e){this.dG=null,this.ax=null,this.bh=!1,this.cd=null,this.I=null,this.bi=0,this.dG=e,this.ax=wo().aS(L().aw(new(lo.r()).C([]))),this.bh=!0,this.cd=wo().aS(L().aw(new(lo.r()).C([]))),this.I=Y(),this.bi=0}T=so.prototype=new D,T.constructor=so,T.fz=(function(){if(this.I.g()){var e=Xa(),t=(()=>{var e=new Rl(this.dG);this.I=new X(e),this.bh=!1,this.bi=0;for(var t=0,n=this.ax.length|0;t<n;){var r=t+this.bi|0;this.ax[r].g6(e),t=1+t|0}oo(this),this.bh=!0,this.bi=0});if(Xa(),e.a5)t();else{e.a5=!0;try{t()}finally{e.a5=!1,qa(e)}}}else throw jd(new Md,`Can not activate `+this+`: it is already active`)}),T.h6=(function(){if(this.I.g())throw jd(new Md,`Can not deactivate DynamicOwner: it is not active`);this.bh=!1;for(var e=this.ax,t=0,n=e.length|0;t<n;)e[t].g7(),t=1+t|0;oo(this);var r=this.I;r.g()||r.z().hX(),oo(this),this.bh=!0,this.I=Y()}),T.gM=(function(e,t){t?(this.bi=1+this.bi|0,this.ax.unshift(e)):this.ax.push(e);var n=this.I;if(!n.g()){var r=n.z();e.g6(r)}}),T.ik=(function(e){this.bh?ao(this,e):this.cd.push(e)}),new O().i(so,`com.raquo.airstream.ownership.DynamicOwner`,{bA:1});function co(e,t,n){this.ce=null,this.dH=null,this.cf=null,this.ce=e,this.dH=t,this.cf=Y(),e.gM(this,n)}T=co.prototype=new D,T.constructor=co,T.cC=(function(){this.ce.ik(this)}),T.g6=(function(e){var t=Xa(),n=(()=>{this.cf=this.dH.h(e)});if(Xa(),t.a5)n();else{t.a5=!0;try{n()}finally{t.a5=!1,qa(t)}}}),T.g7=(function(){var e=this.cf;e.g()||(e.z().cC(),this.cf=Y())});var lo=new O().i(co,`com.raquo.airstream.ownership.DynamicSubscription`,{bB:1});function uo(){}T=uo.prototype=new D,T.constructor=uo,T.dw=(function(e,t,n){return new co(e,new q((e=>new X(t.h(e)))),n)}),T.gh=(function(e,t,n){return new co(e,new q((e=>(t.h(e),Y()))),n)}),new O().i(uo,`com.raquo.airstream.ownership.DynamicSubscription$`,{bC:1});var fo;function po(){return fo||=new uo,fo}function mo(e){e.bj=wo().aS(L().aw(new(bo.r()).C([])))}function ho(e){for(var t=e.bj,n=0,r=t.length|0;n<r;)vo(t[n]),n=1+n|0;e.bj.length=0}function go(e,t){var n=e.bj.indexOf(t)|0;if(n!==-1)e.bj.splice(n,1);else throw jd(new Md,`Can not remove Subscription from Owner: subscription not found.`)}function _o(e,t){e.bj.push(t)}function vo(e){if(!e.cM)e.dJ.a8(),e.cM=!0;else throw jd(new Md,`Can not kill Subscription: it was already killed.`)}function yo(e,t){this.dK=null,this.dJ=null,this.cM=!1,this.dK=e,this.dJ=t,this.cM=!1,e.i8(this)}T=yo.prototype=new D,T.constructor=yo,T.cC=(function(){vo(this),go(this.dK,this)});var bo=new O().i(yo,`com.raquo.airstream.ownership.Subscription`,{bF:1});function xo(e,t){this.dL=null,this.dM=null,this.ay=null,this.b1=!1,this.dL=e,this.dM=t,this.ay=Y(),this.b1=!1}T=xo.prototype=new D,T.constructor=xo,T.hU=(function(){var e=this.ay;return!e.g()&&!e.z().ce.I.g()}),T.iq=(function(e){if(this.b1)throw jd(new Md,`Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var t=this.ay;if(t.g())var n=!1;else var r=t.z().ce,n=e===null?r===null:e===r;if(!n){this.hU()&&!e.I.g()&&(this.b1=!0);var i=this.ay;i.g()||(i.z().cC(),this.ay=Y());var a=po().dw(e,new q((e=>(this.b1||this.dL.a8(),new yo(e,new Uf((()=>{this.b1||this.dM.a8()})))))),!1);this.ay=new X(a),this.b1=!1}}),T.h0=(function(){if(this.b1)throw jd(new Md,`Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var e=this.ay;e.g()||e.z().cC(),this.ay=Y()}),new O().i(xo,`com.raquo.airstream.ownership.TransferableSubscription`,{bG:1});function So(){}T=So.prototype=new D,T.constructor=So,T.aS=(function(e){return[...jl().iC(e)]}),new O().i(So,`com.raquo.ew.JsArray$`,{bH:1});var Co;function wo(){return Co||=new So,Co}function To(){}T=To.prototype=new D,T.constructor=To,T.hD=(function(e,t){for(var n=0,r=e.length|0;n<r;)t(e[n]),n=1+n|0}),new O().i(To,`com.raquo.ew.JsArray$RichJsArray$`,{bI:1});var Eo;function Do(){return Eo||=new To,Eo}function Oo(){this.dN=null,ko=this,document.createElement(`template`),this.h3(K().c.iw().ix()),this.dN=/* @__PURE__ */ RegExp(` `,`g`)}T=Oo.prototype=new D,T.constructor=Oo,T.gQ=(function(e,t){try{return e.appendChild(t),!0}catch(e){var n=e instanceof Mu?e:new th(e);if(n instanceof th&&n.a6 instanceof DOMException)return!1;throw n instanceof th?n.a6:n}}),T.hV=(function(e,t){for(var n=e;;){if(n.parentNode!==null)var r=n.parentNode;else var i=n.host,r=i===void 0?null:i;if(r===null)return!1;if(_l().O(t,r))return!0;n=r}}),T.gF=(function(e,t){e.addEventListener(t.bl.by.cj,t.cW,t.cX)}),T.ii=(function(e,t){e.removeEventListener(t.bl.by.cj,t.cW,t.cX)}),T.h2=(function(e){return document.createElement(e.dr())}),T.hJ=(function(e,t){var n=this.hK(e,t);return n===void 0?void 0:t.bk.bZ(n)}),T.hK=(function(e,t){var n=e.ag.getAttributeNS(null,t.az);return n===null?void 0:n}),T.gf=(function(e,t,n){this.ip(e,t,t.bk.c1(n))}),T.ip=(function(e,t,n){n===null?this.ij(e,t):e.ag.setAttribute(t.az,n)}),T.ij=(function(e,t){e.ag.removeAttribute(t.az)}),T.h3=(function(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e.ec)}),T.hN=(function(e,t){var n=this.hO(e,t);return n===void 0?void 0:t.cU.bZ(n)}),T.hO=(function(e,t){var n=e.dt(),r=t.cl,i=n.getAttributeNS(r.g()?null:r.z(),t.cV);return i===null?void 0:i}),T.ir=(function(e,t,n){this.is(e,t,t.cU.c1(n))}),T.is=(function(e,t,n){if(n===null)this.il(e,t);else{var r=t.cl;if(r.g())e.dt().setAttribute(t.ck,n);else{var i=r.z();e.dt().setAttributeNS(i,t.ck,n)}}}),T.il=(function(e,t){var n=e.dt(),r=t.cl;n.removeAttributeNS(r.g()?null:r.z(),t.cV)}),T.h4=(function(e){return document.createTextNode(e)}),T.h8=(function(e,t){for(var n=t,r=e;;){if(r===null)return n;var i=r.parentNode,a=new mg(this.h7(r),n);r=i,n=a}}),T.h7=(function(e){if(e instanceof HTMLElement){var t=e.id;if(nl(),t!==``)var n=`#`+t;else var r=e.className,n=(nl(),r===``?``:`.`+r.replace(this.dN,`.`));return e.tagName.toLowerCase()+n}return e.nodeName}),new O().i(Oo,`com.raquo.laminar.DomApi$`,{bJ:1});var ko;function Ao(){return ko||=new Oo,ko}function jo(e,t,n){this.cO=null,this.dO=null,this.cN=null,this.cO=e,this.dO=t,this.cN=n}T=jo.prototype=new D,T.constructor=jo,T.au=(function(e){this.cO===null?this.cN===null?qc().hE(this.dO,e):Do().hD(this.cN,tf().hH(e)):this.cO.au(e)}),new O().i(jo,`com.raquo.laminar.Seq`,{bK:1});function Mo(){No=this,$()}T=Mo.prototype=new D,T.constructor=Mo,new O().i(Mo,`com.raquo.laminar.Seq$`,{bL:1});var No;function Po(){return No||=new Mo,No}function Fo(e){e.cP=Va(),ed()}function Io(e){e.go=ss()}function Lo(e){Ro(e,new q((e=>{e.e0.ag.focus()})))}function Ro(e,t){return new Yl(new q((e=>{var n=new qu(!e.am.I.g()),r=new q((e=>{n.ct?n.ct=!1:t.h(e)}));po().gh(e.am,new q((e=>(t=>{r.h(new is(e,t))}))(e)),!1)})),ss())}function zo(){this.b2=null,this.dX=null,this.dY=!1,this.cg=null,Bo=this,this.b2=new Bl(Vo()),new Bl(Vo()),new Bl(Vo()),this.cg=new zl}T=zo.prototype=new D,T.constructor=zo,T.fy=(function(){return this.dY||=(this.dX=new Vl(this),!0),this.dX}),new O().i(zo,`com.raquo.laminar.codecs.package$`,{bT:1});var Bo;function Vo(){return Bo||=new zo,Bo}function Ho(e){e.gp=Uo(e,`class`,` `)}function Uo(e,t,n){var r=Wl(new Gl,t,Vo().b2);return new Hl(r.az,new q((e=>{var t=Ao().hJ(e,r);return t===void 0?``:t})),new Wf(((e,t)=>{Ao().gf(e,r,t)})),n)}function Wo(e){e.gn=Go(e,`class`,` `)}function Go(e,t,n){var r=new ql(t,Vo().b2,Y());return new Hl(r.ck,new q((e=>{var t=Ao().hN(e,r);return t===void 0?``:t})),new Wf(((e,t)=>{Ao().ir(e,r,t)})),n)}function Ko(e){this.ch=null,this.ch=e}T=Ko.prototype=new D,T.constructor=Ko,T.ga=(function(e,t){try{this.ch.dj(e,t)}catch(e){var n=e instanceof Mu?e:new th(e);ed().aX(n)}}),T.h1=(function(e){return new Ko(new Wf(((t,n)=>{this.ch.dj(t,n),e.ch.dj(t,n)})))}),T.gR=(function(e){return e===void 0?this:e.h1(this)}),new O().i(Ko,`com.raquo.laminar.inserters.InserterHooks`,{c8:1});function qo(){}T=qo.prototype=new D,T.constructor=qo,T.p=(function(e,t){return new Kf(e,void 0)}),new O().i(qo,`com.raquo.laminar.inserters.StaticChildInserter$`,{ca:1});var Jo;function k(){return Jo||=new qo,Jo}function Yo(e,t,n,r){this.by=null,this.cT=!1,this.cS=!1,this.cR=null,this.by=e,this.cT=t,this.cS=n,this.cR=r}T=Yo.prototype=new D,T.constructor=Yo,T.g4=(function(e){var t=new q((t=>{var n=this.cR.h(t);return n.g()?Y():new X(e.h(n.z()))}));return new Yo(this.by,this.cT,this.cS,t)}),new O().i(Yo,`com.raquo.laminar.keys.EventProcessor`,{cd:1});function Xo(){}T=Xo.prototype=new D,T.constructor=Xo,T.fI=(function(e,t,n){return new Yo(e,t,n,new q((e=>new X(e))))}),new O().i(Xo,`com.raquo.laminar.keys.EventProcessor$`,{ce:1});var Zo;function Qo(){return Zo||=new Xo,Zo}function $o(){}T=$o.prototype=new D,T.constructor=$o;function es(){}es.prototype=T;function ts(){this.gq=null,this.gr=null,this.gs=null,this.gt=null,this.gq=`http://www.w3.org/2000/svg`,this.gr=`http://www.w3.org/1999/xlink`,this.gs=`http://www.w3.org/XML/1998/namespace`,this.gt=`http://www.w3.org/2000/xmlns/`}T=ts.prototype=new D,T.constructor=ts,T.i3=(function(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`xlink`:return`http://www.w3.org/1999/xlink`;case`xml`:return`http://www.w3.org/XML/1998/namespace`;case`xmlns`:return`http://www.w3.org/2000/xmlns/`;default:throw new Cp(e)}}),new O().i(ts,`com.raquo.laminar.keys.SvgAttr$`,{ch:1});var ns;function rs(){return ns||=new ts,ns}function is(e,t){this.e0=null,this.dZ=null,this.e0=e,this.dZ=t}T=is.prototype=new D,T.constructor=is,new O().i(is,`com.raquo.laminar.lifecycle.MountContext`,{ci:1});var A=new O().i(1,`com.raquo.laminar.modifiers.Modifier`,{S:1});function as(){this.gu=null,os=this,this.gu=new Jl}T=as.prototype=new D,T.constructor=as,new O().i(as,`com.raquo.laminar.modifiers.Modifier$`,{cm:1});var os;function ss(){return os||=new as,os}function cs(){this.m=null,ls=this,this.m=new Xl}T=cs.prototype=new D,T.constructor=cs,new O().i(cs,`com.raquo.laminar.modifiers.RenderableNode$`,{cq:1});var ls;function j(){return ls||=new cs,ls}function us(){this.e=null,ds=this,this.e=new $l(new q((e=>e)),M()),new $l(new q((e=>``+(e|0))),M()),new $l(new q((e=>``+ +e)),M()),new $l(new q((e=>``+!!e)),M()),new $l(new q((e=>e.iB())),M())}T=us.prototype=new D,T.constructor=us,new O().i(us,`com.raquo.laminar.modifiers.RenderableText$`,{cv:1});var ds;function M(){return ds||=new us,ds}function fs(){}T=fs.prototype=new D,T.constructor=fs,T.cv=(function(e,t,n){var r=new X(e);t.gl(r),n!==void 0&&n.ga(e,t);var i=Ao().gQ(e.be(),t.be());return i&&t.gg(r),i}),new O().i(fs,`com.raquo.laminar.nodes.ParentNode$`,{cy:1});var ps;function ms(){return ps||=new fs,ps}function hs(){}T=hs.prototype=new D,T.constructor=hs,T.iE=(function(e,t){return po().dw(e.am,new q((n=>t.h(new is(e,n)))),!0)}),new O().i(hs,`com.raquo.laminar.nodes.ReactiveElement$`,{cA:1});var gs;function _s(){return gs||=new hs,gs}function vs(e){this.e9=null,this.e9=new Ko(new Wf(((t,n)=>{matchResult1:{var r=n.be();if(r instanceof Element){r.setAttribute(`slot`,e);break matchResult1}if(r instanceof Text){var i=ed(),a=r.textContent,o=t.be().tagName;i.aX(jd(new Md,"Error: You tried to insert a raw text node `"+a+"` into the `"+e+"` slot of <"+o.toLowerCase()+`>.
 - Cause: This is not possible: named slots only accept elements. Your node was inserted into the default slot instead.
 - Suggestion: Wrap your text node into \`span()\``));break matchResult1}}})))}T=vs.prototype=new D,T.constructor=vs,T.o=(function(e){return e.dq(new q((e=>e.iG(this.e9))))}),new O().i(vs,`com.raquo.laminar.nodes.Slot`,{cD:1});function ys(){}T=ys.prototype=new D,T.constructor=ys,T.gO=(function(){xs().ho(),xs().ht(),xs().hu(),xs().hv(),xs().hw(),xs().hx(),xs().hy(),xs().hz(),xs().hA(),xs().hp(),xs().hq(),xs().hr(),xs().hs()}),T.ho=(function(){var e=document.querySelector(`#example1`);Vc().N(e).g()||(K(),new id(e,Cd().d(new Q(z().a(new(I.r()).C([new G((e=>U(K().c,Os().R().o(new Q(z().a(new(J.r()).C([(K(),k().p(cd().d(new Q(z().a(new(I.r()).C([new G((e=>e.S().f(!0)))]))),new Q(z().a(new(A.r()).C([H(K().c,`View`,M().e)])))),j().m))])))),F().n,B())))]))),new Q(z().a(new(A.r()).C([W().d(new Q(z().a(new(I.r()).C([new G((e=>U(K().c,N().a3().o(new Q(z().a(new(J.r()).C([(K(),k().p(Od().d(new Q(z().a(new(I.r()).C([new G((e=>e.Q().f(`scissors`)))]))),new Q(z().a(new(A.r()).C([])))),j().m))])))),F().n,B())))]))),new Q(z().a(new(A.r()).C([H(K().c,`Cut`,M().e)])))),W().d(new Q(z().a(new(I.r()).C([new G((e=>U(K().c,N().a3().o(new Q(z().a(new(J.r()).C([(K(),k().p(Od().d(new Q(z().a(new(I.r()).C([new G((e=>e.Q().f(`copy`)))]))),new Q(z().a(new(A.r()).C([])))),j().m))])))),F().n,B())))]))),new Q(z().a(new(A.r()).C([H(K().c,`Copy`,M().e)])))),W().d(new Q(z().a(new(I.r()).C([new G((e=>U(K().c,N().a3().o(new Q(z().a(new(J.r()).C([(K(),k().p(Od().d(new Q(z().a(new(I.r()).C([new G((e=>e.Q().f(`paste`)))]))),new Q(z().a(new(A.r()).C([])))),j().m))])))),F().n,B())))]))),new Q(z().a(new(A.r()).C([H(K().c,`Paste`,M().e)])))),bd().d(new Q(z().a(new(I.r()).C([]))),new Q(z().a(new(A.r()).C([])))),W().d(new Q(z().a(new(I.r()).C([new G((e=>U(K().c,N().D().o(new Q(z().a(new(J.r()).C([(K(),k().p(W().d(new Q(z().a(new(I.r()).C([new G((e=>e.l().f(`show-all-images`)))]))),new Q(z().a(new(A.r()).C([H(K().c,`Show All Images`,M().e)])))),j().m))])))),F().n,B()))),new G((e=>U(K().c,N().D().o(new Q(z().a(new(J.r()).C([(K(),k().p(W().d(new Q(z().a(new(I.r()).C([new G((e=>e.l().f(`show-thumbnails`)))]))),new Q(z().a(new(A.r()).C([H(K().c,`Show Thumbnails`,M().e)])))),j().m))])))),F().n,B())))]))),new Q(z().a(new(A.r()).C([H(K().c,`Show images`,M().e)])))),bd().d(new Q(z().a(new(I.r()).C([]))),new Q(z().a(new(A.r()).C([])))),W().d(new Q(z().a(new(I.r()).C([new G((e=>e.aY().aU())),new G((e=>e.bY().f(!0)))]))),new Q(z().a(new(A.r()).C([H(K().c,`Emoji Shortcuts`,M().e)])))),W().d(new Q(z().a(new(I.r()).C([new G((e=>e.aY().aU())),new G((e=>e.bY().f(!0)))]))),new Q(z().a(new(A.r()).C([H(K().c,`Word Wrap`,M().e)])))),bd().d(new Q(z().a(new(I.r()).C([]))),new Q(z().a(new(A.r()).C([])))),W().d(new Q(z().a(new(I.r()).C([new G((e=>e.gk().h5())),new G((e=>U(K().c,N().a3().o(new Q(z().a(new(J.r()).C([(K(),k().p(Od().d(new Q(z().a(new(I.r()).C([new G((e=>e.Q().f(`trash`)))]))),new Q(z().a(new(A.r()).C([])))),j().m))])))),F().n,B())))]))),new Q(z().a(new(A.r()).C([H(K().c,`Delete`,M().e)]))))]))))))}),T.ht=(function(){var e=document.querySelector(`#example2`);Vc().N(e).g()||(K(),new id(e,Cd().d(new Q(z().a(new(I.r()).C([new G((e=>U(K().c,Os().R().o(new Q(z().a(new(J.r()).C([(K(),k().p(cd().d(new Q(z().a(new(I.r()).C([new G((e=>e.S().f(!0)))]))),new Q(z().a(new(A.r()).C([H(K().c,`Resources`,M().e)])))),j().m))])))),F().n,B())))]))),new Q(z().a(new(A.r()).C([W().d(new Q(z().a(new(I.r()).C([new G((e=>e.fZ().f(`https://webawesome.com/docs`)))]))),new Q(z().a(new(A.r()).C([H(K().c,`Web Awesome docs`,M().e)])))),W().d(new Q(z().a(new(I.r()).C([new G((e=>e.fZ().f(`https://webawesome.com/`))),new G((e=>e.iA().gY())),new G((e=>e.ie().f(`noopener noreferrer`)))]))),new Q(z().a(new(A.r()).C([H(K().c,`Open Web Awesome in a new tab`,M().e)]))))]))))))}),T.hu=(function(){var e=document.querySelector(`#example3`);Vc().N(e).g()||(K(),new id(e,Cd().d(new Q(z().a(new(I.r()).C([new G((e=>new td((K(),Qo().fI(e.g9(),!1,!1)).g4(new G((e=>{var t=e.detail.item.value;return t===void 0?Y():new X(t)}))),new q((e=>(t=>{e.g8(t)}))(K().c.cP.gm(new G((e=>{Fu().c4().c3(e+`
`)})),Wc().db,!0)))))),new G((e=>U(K().c,Os().R().o(new Q(z().a(new(J.r()).C([(K(),k().p(cd().d(new Q(z().a(new(I.r()).C([new G((e=>e.S().f(!0)))]))),new Q(z().a(new(A.r()).C([H(K().c,`View`,M().e)])))),j().m))])))),F().n,B())))]))),new Q(z().a(new(A.r()).C([W().d(new Q(z().a(new(I.r()).C([new G((e=>e.l().f(`full-screen`)))]))),new Q(z().a(new(A.r()).C([H(K().c,`Enter full screen`,M().e)])))),W().d(new Q(z().a(new(I.r()).C([new G((e=>e.l().f(`actual`)))]))),new Q(z().a(new(A.r()).C([H(K().c,`Actual size`,M().e)])))),W().d(new Q(z().a(new(I.r()).C([new G((e=>e.l().f(`zoom-in`)))]))),new Q(z().a(new(A.r()).C([H(K().c,`Zoom in`,M().e)])))),W().d(new Q(z().a(new(I.r()).C([new G((e=>e.l().f(`zoom-out`)))]))),new Q(z().a(new(A.r()).C([H(K().c,`Zoom out`,M().e)]))))]))))))}),T.hv=(function(){var e=document.querySelector(`#example4`);Vc().N(e).g()||(K(),new id(e,Cd().d(new Q(z().a(new(I.r()).C([new G((e=>U(K().c,Os().R().o(new Q(z().a(new(J.r()).C([(K(),k().p(cd().d(new Q(z().a(new(I.r()).C([new G((e=>e.S().f(!0)))]))),new Q(z().a(new(A.r()).C([H(K().c,`Edit`,M().e)])))),j().m))])))),F().n,B())))]))),new Q(z().a(new(A.r()).C([W().d(new Q(z().a(new(I.r()).C([new G((e=>e.l().f(`cut`))),new G((e=>U(K().c,N().a3().o(new Q(z().a(new(J.r()).C([(K(),k().p(Od().d(new Q(z().a(new(I.r()).C([new G((e=>e.Q().f(`scissors`)))]))),new Q(z().a(new(A.r()).C([])))),j().m))])))),F().n,B())))]))),new Q(z().a(new(A.r()).C([H(K().c,`Cut`,M().e)])))),W().d(new Q(z().a(new(I.r()).C([new G((e=>e.l().f(`copy`))),new G((e=>U(K().c,N().a3().o(new Q(z().a(new(J.r()).C([(K(),k().p(Od().d(new Q(z().a(new(I.r()).C([new G((e=>e.Q().f(`copy`)))]))),new Q(z().a(new(A.r()).C([])))),j().m))])))),F().n,B())))]))),new Q(z().a(new(A.r()).C([H(K().c,`Copy`,M().e)])))),W().d(new Q(z().a(new(I.r()).C([new G((e=>e.l().f(`paste`))),new G((e=>U(K().c,N().a3().o(new Q(z().a(new(J.r()).C([(K(),k().p(Od().d(new Q(z().a(new(I.r()).C([new G((e=>e.Q().f(`paste`)))]))),new Q(z().a(new(A.r()).C([])))),j().m))])))),F().n,B())))]))),new Q(z().a(new(A.r()).C([H(K().c,`Paste`,M().e)])))),W().d(new Q(z().a(new(I.r()).C([new G((e=>e.l().f(`delete`))),new G((e=>U(K().c,N().a3().o(new Q(z().a(new(J.r()).C([(K(),k().p(Od().d(new Q(z().a(new(I.r()).C([new G((e=>e.Q().f(`trash`)))]))),new Q(z().a(new(A.r()).C([])))),j().m))])))),F().n,B())))]))),new Q(z().a(new(A.r()).C([H(K().c,`Delete`,M().e)]))))]))))))}),T.hw=(function(){var e=document.querySelector(`#example5`);Vc().N(e).g()||(K(),new id(e,Cd().d(new Q(z().a(new(I.r()).C([new G((e=>U(K().c,Os().R().o(new Q(z().a(new(J.r()).C([(K(),k().p(cd().d(new Q(z().a(new(I.r()).C([new G((e=>e.S().f(!0)))]))),new Q(z().a(new(A.r()).C([H(K().c,`Device`,M().e)])))),j().m))])))),F().n,B())))]))),new Q(z().a(new(A.r()).C([K().c.fY().aT(new Q(z().a(new(A.r()).C([H(K().c,`Type`,M().e)])))),W().d(new Q(z().a(new(I.r()).C([new G((e=>e.l().f(`phone`)))]))),new Q(z().a(new(A.r()).C([H(K().c,`Phone`,M().e)])))),W().d(new Q(z().a(new(I.r()).C([new G((e=>e.l().f(`tablet`)))]))),new Q(z().a(new(A.r()).C([H(K().c,`Tablet`,M().e)])))),W().d(new Q(z().a(new(I.r()).C([new G((e=>e.l().f(`desktop`)))]))),new Q(z().a(new(A.r()).C([H(K().c,`Desktop`,M().e)])))),bd().d(new Q(z().a(new(I.r()).C([]))),new Q(z().a(new(A.r()).C([])))),W().d(new Q(z().a(new(I.r()).C([new G((e=>e.l().f(`more`)))]))),new Q(z().a(new(A.r()).C([H(K().c,`More options...`,M().e)]))))]))))))}),T.hx=(function(){var e=document.querySelector(`#example6`);Vc().N(e).g()||(K(),new id(e,Cd().d(new Q(z().a(new(I.r()).C([new G((e=>U(K().c,Os().R().o(new Q(z().a(new(J.r()).C([(K(),k().p(cd().d(new Q(z().a(new(I.r()).C([new G((e=>e.S().f(!0)))]))),new Q(z().a(new(A.r()).C([H(K().c,`Message`,M().e)])))),j().m))])))),F().n,B())))]))),new Q(z().a(new(A.r()).C([W().d(new Q(z().a(new(I.r()).C([new G((e=>e.l().f(`reply`))),new G((e=>U(K().c,N().c0().o(new Q(z().a(new(J.r()).C([(K(),k().p(K().c.c9().aT(new Q(z().a(new(A.r()).C([H(K().c,`⌘R`,M().e)])))),j().m))])))),F().n,B())))]))),new Q(z().a(new(A.r()).C([H(K().c,`Reply`,M().e)])))),W().d(new Q(z().a(new(I.r()).C([new G((e=>e.l().f(`forward`))),new G((e=>U(K().c,N().c0().o(new Q(z().a(new(J.r()).C([(K(),k().p(K().c.c9().aT(new Q(z().a(new(A.r()).C([H(K().c,`⌘F`,M().e)])))),j().m))])))),F().n,B())))]))),new Q(z().a(new(A.r()).C([H(K().c,`Forward`,M().e)])))),W().d(new Q(z().a(new(I.r()).C([new G((e=>e.l().f(`move`))),new G((e=>U(K().c,N().c0().o(new Q(z().a(new(J.r()).C([(K(),k().p(K().c.c9().aT(new Q(z().a(new(A.r()).C([H(K().c,`⌘M`,M().e)])))),j().m))])))),F().n,B())))]))),new Q(z().a(new(A.r()).C([H(K().c,`Move`,M().e)])))),bd().d(new Q(z().a(new(I.r()).C([]))),new Q(z().a(new(A.r()).C([])))),W().d(new Q(z().a(new(I.r()).C([new G((e=>e.l().f(`archive`))),new G((e=>U(K().c,N().c0().o(new Q(z().a(new(J.r()).C([(K(),k().p(K().c.c9().aT(new Q(z().a(new(A.r()).C([H(K().c,`⌘A`,M().e)])))),j().m))])))),F().n,B())))]))),new Q(z().a(new(A.r()).C([H(K().c,`Archive`,M().e)])))),W().d(new Q(z().a(new(I.r()).C([new G((e=>e.l().f(`delete`))),new G((e=>U(K().c,N().c0().o(new Q(z().a(new(J.r()).C([(K(),k().p(K().c.c9().aT(new Q(z().a(new(A.r()).C([H(K().c,`Del`,M().e)])))),j().m))])))),F().n,B())))]))),new Q(z().a(new(A.r()).C([H(K().c,`Delete`,M().e)]))))]))))))}),T.hy=(function(){var e=document.querySelector(`#example7`);Vc().N(e).g()||(K(),new id(e,Cd().d(new Q(z().a(new(I.r()).C([new G((e=>new td((K(),Qo().fI(e.g9(),!1,!1)).g4(new G((e=>{matchResult1:{var t=e.detail.item.type,n=t===void 0?Y():new X(t);if(n instanceof X&&n.bq===`checkbox`){var r=e.detail.item.value,i=r===void 0?Y():new X(r);Fu().c4().c3(i+`
`);var a=e.detail.item.checked,o=a===void 0?Y():new X(a);Fu().c4().c3(o+`
`);break matchResult1}var s=e.detail.item.value,c=s===void 0?Y():new X(s);Fu().c4().c3(c+`
`)}}))),new q((e=>(t=>{e.g8(t)}))(K().c.cP.dA))))),new G((e=>U(K().c,Os().R().o(new Q(z().a(new(J.r()).C([(K(),k().p(cd().d(new Q(z().a(new(I.r()).C([new G((e=>e.S().f(!0)))]))),new Q(z().a(new(A.r()).C([H(K().c,`View`,M().e)])))),j().m))])))),F().n,B())))]))),new Q(z().a(new(A.r()).C([W().d(new Q(z().a(new(I.r()).C([new G((e=>e.aY().aU())),new G((e=>e.l().f(`canvas`))),new G((e=>e.bY().f(!0)))]))),new Q(z().a(new(A.r()).C([H(K().c,`Show canvas`,M().e)])))),W().d(new Q(z().a(new(I.r()).C([new G((e=>e.aY().aU())),new G((e=>e.l().f(`grid`))),new G((e=>e.bY().f(!0)))]))),new Q(z().a(new(A.r()).C([H(K().c,`Show grid`,M().e)])))),W().d(new Q(z().a(new(I.r()).C([new G((e=>e.aY().aU())),new G((e=>e.l().f(`source`)))]))),new Q(z().a(new(A.r()).C([H(K().c,`Show source`,M().e)])))),bd().d(new Q(z().a(new(I.r()).C([]))),new Q(z().a(new(A.r()).C([])))),W().d(new Q(z().a(new(I.r()).C([new G((e=>e.l().f(`preferences`)))]))),new Q(z().a(new(A.r()).C([H(K().c,`Preferences…`,M().e)]))))]))))))}),T.hz=(function(){var e=document.querySelector(`#example8`);Vc().N(e).g()||(K(),new id(e,Cd().d(new Q(z().a(new(I.r()).C([new G((e=>U(K().c,Os().R().o(new Q(z().a(new(J.r()).C([(K(),k().p(cd().d(new Q(z().a(new(I.r()).C([new G((e=>e.S().f(!0)))]))),new Q(z().a(new(A.r()).C([H(K().c,`Project`,M().e)])))),j().m))])))),F().n,B())))]))),new Q(z().a(new(A.r()).C([W().d(new Q(z().a(new(I.r()).C([new G((e=>e.l().f(`share`))),new G((e=>U(K().c,N().a3().o(new Q(z().a(new(J.r()).C([(K(),k().p(Od().d(new Q(z().a(new(I.r()).C([new G((e=>e.Q().f(`share`)))]))),new Q(z().a(new(A.r()).C([])))),j().m))])))),F().n,B())))]))),new Q(z().a(new(A.r()).C([H(K().c,`Share`,M().e)])))),W().d(new Q(z().a(new(I.r()).C([new G((e=>e.l().f(`preferences`))),new G((e=>U(K().c,N().a3().o(new Q(z().a(new(J.r()).C([(K(),k().p(Od().d(new Q(z().a(new(I.r()).C([new G((e=>e.Q().f(`gear`)))]))),new Q(z().a(new(A.r()).C([])))),j().m))])))),F().n,B())))]))),new Q(z().a(new(A.r()).C([H(K().c,`Preferences`,M().e)])))),bd().d(new Q(z().a(new(I.r()).C([]))),new Q(z().a(new(A.r()).C([])))),K().c.fY().aT(new Q(z().a(new(A.r()).C([H(K().c,`Danger zone`,M().e)])))),W().d(new Q(z().a(new(I.r()).C([new G((e=>e.l().f(`archive`))),new G((e=>U(K().c,N().a3().o(new Q(z().a(new(J.r()).C([(K(),k().p(Od().d(new Q(z().a(new(I.r()).C([new G((e=>e.Q().f(`archive`)))]))),new Q(z().a(new(A.r()).C([])))),j().m))])))),F().n,B())))]))),new Q(z().a(new(A.r()).C([H(K().c,`Archive`,M().e)])))),W().d(new Q(z().a(new(I.r()).C([new G((e=>e.l().f(`delete`))),new G((e=>e.gk().f(`danger`))),new G((e=>U(K().c,N().a3().o(new Q(z().a(new(J.r()).C([(K(),k().p(Od().d(new Q(z().a(new(I.r()).C([new G((e=>e.Q().f(`trash`)))]))),new Q(z().a(new(A.r()).C([])))),j().m))])))),F().n,B())))]))),new Q(z().a(new(A.r()).C([H(K().c,`Delete`,M().e)]))))]))))))}),T.hA=(function(){var e=document.querySelector(`#example9`);Vc().N(e).g()||(K(),new id(e,Cd().d(new Q(z().a(new(I.r()).C([new G((e=>U(K().c,Os().R().o(new Q(z().a(new(J.r()).C([(K(),k().p(cd().d(new Q(z().a(new(I.r()).C([new G((e=>e.S().f(!0))),new G((e=>U(K().c,Ts().hk().o(new Q(z().a(new(J.r()).C([(K(),k().p(Od().d(new Q(z().a(new(I.r()).C([new G((e=>e.Q().f(`chevron-right`)))]))),new Q(z().a(new(A.r()).C([])))),j().m))])))),F().n,B())))]))),new Q(z().a(new(A.r()).C([H(K().c,`File formats`,M().e)])))),j().m))])))),F().n,B())))]))),new Q(z().a(new(A.r()).C([W().d(new Q(z().a(new(I.r()).C([new G((e=>e.l().f(`pdf`)))]))),new Q(z().a(new(A.r()).C([H(K().c,`PDF Document`,M().e)])))),W().d(new Q(z().a(new(I.r()).C([new G((e=>e.l().f(`docx`)))]))),new Q(z().a(new(A.r()).C([H(K().c,`Word Document`,M().e)])))),W().d(new Q(z().a(new(I.r()).C([new G((e=>e.l().f(`xlsx`)))]))),new Q(z().a(new(A.r()).C([H(K().c,`Excel Spreadsheet`,M().e)])))),W().d(new Q(z().a(new(I.r()).C([new G((e=>e.l().f(`pptx`)))]))),new Q(z().a(new(A.r()).C([H(K().c,`PowerPoint Presentation`,M().e)])))),W().d(new Q(z().a(new(I.r()).C([new G((e=>e.l().f(`txt`)))]))),new Q(z().a(new(A.r()).C([H(K().c,`Plain Text`,M().e)])))),W().d(new Q(z().a(new(I.r()).C([new G((e=>e.l().f(`json`)))]))),new Q(z().a(new(A.r()).C([H(K().c,`JSON File`,M().e)]))))]))))))}),T.hp=(function(){var e=document.querySelector(`#example10`);Vc().N(e).g()||(K(),new id(e,Cd().d(new Q(z().a(new(I.r()).C([new G((e=>e.hd().f(30))),new G((e=>U(K().c,Os().R().o(new Q(z().a(new(J.r()).C([(K(),k().p(cd().d(new Q(z().a(new(I.r()).C([new G((e=>e.S().f(!0)))]))),new Q(z().a(new(A.r()).C([H(K().c,`Edit`,M().e)])))),j().m))])))),F().n,B())))]))),new Q(z().a(new(A.r()).C([W().d(new Q(z().a(new(I.r()).C([]))),new Q(z().a(new(A.r()).C([H(K().c,`Cut`,M().e)])))),W().d(new Q(z().a(new(I.r()).C([]))),new Q(z().a(new(A.r()).C([H(K().c,`Copy`,M().e)])))),W().d(new Q(z().a(new(I.r()).C([]))),new Q(z().a(new(A.r()).C([H(K().c,`Paste`,M().e)])))),bd().d(new Q(z().a(new(I.r()).C([]))),new Q(z().a(new(A.r()).C([])))),W().d(new Q(z().a(new(I.r()).C([]))),new Q(z().a(new(A.r()).C([H(K().c,`Find`,M().e)])))),W().d(new Q(z().a(new(I.r()).C([]))),new Q(z().a(new(A.r()).C([H(K().c,`Replace`,M().e)]))))]))))))}),T.hq=(function(){var e=document.querySelector(`#example11`);Vc().N(e).g()||(K(),new id(e,Cd().d(new Q(z().a(new(I.r()).C([new G((e=>e.iv().f(30))),new G((e=>U(K().c,Os().R().o(new Q(z().a(new(J.r()).C([(K(),k().p(cd().d(new Q(z().a(new(I.r()).C([new G((e=>e.S().f(!0)))]))),new Q(z().a(new(A.r()).C([H(K().c,`Edit`,M().e)])))),j().m))])))),F().n,B())))]))),new Q(z().a(new(A.r()).C([W().d(new Q(z().a(new(I.r()).C([]))),new Q(z().a(new(A.r()).C([H(K().c,`Cut`,M().e)])))),W().d(new Q(z().a(new(I.r()).C([]))),new Q(z().a(new(A.r()).C([H(K().c,`Copy`,M().e)])))),W().d(new Q(z().a(new(I.r()).C([]))),new Q(z().a(new(A.r()).C([H(K().c,`Paste`,M().e)])))),bd().d(new Q(z().a(new(I.r()).C([]))),new Q(z().a(new(A.r()).C([])))),W().d(new Q(z().a(new(I.r()).C([]))),new Q(z().a(new(A.r()).C([H(K().c,`Find`,M().e)])))),W().d(new Q(z().a(new(I.r()).C([]))),new Q(z().a(new(A.r()).C([H(K().c,`Replace`,M().e)]))))]))))))}),T.hr=(function(){var e=document.querySelector(`#example12`);Vc().N(e).g()||(K(),new id(e,Cd().d(new Q(z().a(new(I.r()).C([new G((e=>U(K().c,Os().R().o(new Q(z().a(new(J.r()).C([(K(),k().p(cd().d(new Q(z().a(new(I.r()).C([new G((e=>e.S().f(!0)))]))),new Q(z().a(new(A.r()).C([H(K().c,`Export`,M().e)])))),j().m))])))),F().n,B())))]))),new Q(z().a(new(A.r()).C([W().d(new Q(z().a(new(I.r()).C([new G((e=>U(K().c,N().D().o(new Q(z().a(new(J.r()).C([(K(),k().p(W().d(new Q(z().a(new(I.r()).C([new G((e=>e.l().f(`pdf`)))]))),new Q(z().a(new(A.r()).C([H(K().c,`PDF`,M().e)])))),j().m))])))),F().n,B()))),new G((e=>U(K().c,N().D().o(new Q(z().a(new(J.r()).C([(K(),k().p(W().d(new Q(z().a(new(I.r()).C([new G((e=>e.l().f(`docx`)))]))),new Q(z().a(new(A.r()).C([H(K().c,`Word Document`,M().e)])))),j().m))])))),F().n,B())))]))),new Q(z().a(new(A.r()).C([H(K().c,`Documents`,M().e)])))),W().d(new Q(z().a(new(I.r()).C([new G((e=>U(K().c,N().D().o(new Q(z().a(new(J.r()).C([(K(),k().p(W().d(new Q(z().a(new(I.r()).C([new G((e=>U(K().c,N().D().o(new Q(z().a(new(J.r()).C([(K(),k().p(W().d(new Q(z().a(new(I.r()).C([new G((e=>e.l().f(`xlsx`)))]))),new Q(z().a(new(A.r()).C([H(K().c,`Excel (.xlsx)`,M().e)])))),j().m))])))),F().n,B()))),new G((e=>U(K().c,N().D().o(new Q(z().a(new(J.r()).C([(K(),k().p(W().d(new Q(z().a(new(I.r()).C([new G((e=>e.l().f(`xls`)))]))),new Q(z().a(new(A.r()).C([H(K().c,`Excel 97-2003 (.xls)`,M().e)])))),j().m))])))),F().n,B()))),new G((e=>U(K().c,N().D().o(new Q(z().a(new(J.r()).C([(K(),k().p(W().d(new Q(z().a(new(I.r()).C([new G((e=>e.l().f(`csv`)))]))),new Q(z().a(new(A.r()).C([H(K().c,`CSV (.csv)`,M().e)])))),j().m))])))),F().n,B())))]))),new Q(z().a(new(A.r()).C([H(K().c,`Excel Formats`,M().e)])))),j().m))])))),F().n,B()))),new G((e=>U(K().c,N().D().o(new Q(z().a(new(J.r()).C([(K(),k().p(W().d(new Q(z().a(new(I.r()).C([new G((e=>U(K().c,N().D().o(new Q(z().a(new(J.r()).C([(K(),k().p(W().d(new Q(z().a(new(I.r()).C([new G((e=>e.l().f(`ods`)))]))),new Q(z().a(new(A.r()).C([H(K().c,`OpenDocument (.ods)`,M().e)])))),j().m))])))),F().n,B()))),new G((e=>U(K().c,N().D().o(new Q(z().a(new(J.r()).C([(K(),k().p(W().d(new Q(z().a(new(I.r()).C([new G((e=>e.l().f(`tsv`)))]))),new Q(z().a(new(A.r()).C([H(K().c,`Tab-separated (.tsv)`,M().e)])))),j().m))])))),F().n,B()))),new G((e=>U(K().c,N().D().o(new Q(z().a(new(J.r()).C([(K(),k().p(W().d(new Q(z().a(new(I.r()).C([new G((e=>e.l().f(`json`)))]))),new Q(z().a(new(A.r()).C([H(K().c,`JSON (.json)`,M().e)])))),j().m))])))),F().n,B())))]))),new Q(z().a(new(A.r()).C([H(K().c,`Other Formats`,M().e)])))),j().m))])))),F().n,B()))),new G((e=>U(K().c,N().D().o(new Q(z().a(new(J.r()).C([(K(),k().p(W().d(new Q(z().a(new(I.r()).C([new G((e=>e.l().f(`numbers`)))]))),new Q(z().a(new(A.r()).C([H(K().c,`Apple Numbers`,M().e)])))),j().m))])))),F().n,B())))]))),new Q(z().a(new(A.r()).C([H(K().c,`Spreadsheets`,M().e)])))),bd().d(new Q(z().a(new(I.r()).C([]))),new Q(z().a(new(A.r()).C([])))),W().d(new Q(z().a(new(I.r()).C([new G((e=>U(K().c,N().D().o(new Q(z().a(new(J.r()).C([(K(),k().p(W().d(new Q(z().a(new(I.r()).C([new G((e=>e.aY().aU())),new G((e=>e.l().f(`compress`)))]))),new Q(z().a(new(A.r()).C([H(K().c,`Compress files`,M().e)])))),j().m))])))),F().n,B()))),new G((e=>U(K().c,N().D().o(new Q(z().a(new(J.r()).C([(K(),k().p(W().d(new Q(z().a(new(I.r()).C([new G((e=>e.aY().aU())),new G((e=>e.bY().f(!0))),new G((e=>e.l().f(`metadata`)))]))),new Q(z().a(new(A.r()).C([H(K().c,`Include metadata`,M().e)])))),j().m))])))),F().n,B()))),new G((e=>U(K().c,N().D().o(new Q(z().a(new(J.r()).C([(K(),k().p(W().d(new Q(z().a(new(I.r()).C([new G((e=>e.aY().aU())),new G((e=>e.l().f(`password`)))]))),new Q(z().a(new(A.r()).C([H(K().c,`Password protect`,M().e)])))),j().m))])))),F().n,B())))]))),new Q(z().a(new(A.r()).C([H(K().c,`Options`,M().e)]))))]))))))}),T.hs=(function(){var e=document.querySelector(`#example13`);Vc().N(e).g()||(K(),new id(e,Cd().d(new Q(z().a(new(I.r()).C([new G((e=>U(K().c,Os().R().o(new Q(z().a(new(J.r()).C([(K(),k().p(cd().d(new Q(z().a(new(I.r()).C([new G((e=>e.S().f(!0)))]))),new Q(z().a(new(A.r()).C([H(K().c,`Payment method`,M().e)])))),j().m))])))),F().n,B())))]))),new Q(z().a(new(A.r()).C([W().d(new Q(z().a(new(I.r()).C([new G((e=>e.l().f(`cash`)))]))),new Q(z().a(new(A.r()).C([H(K().c,`Cash`,M().e)])))),W().d(new Q(z().a(new(I.r()).C([new G((e=>e.l().f(`check`))),new G((e=>e.hc().f(!0)))]))),new Q(z().a(new(A.r()).C([H(K().c,`Personal check`,M().e)])))),W().d(new Q(z().a(new(I.r()).C([new G((e=>e.l().f(`credit`)))]))),new Q(z().a(new(A.r()).C([H(K().c,`Credit card`,M().e)])))),W().d(new Q(z().a(new(I.r()).C([new G((e=>e.l().f(`gift-card`)))]))),new Q(z().a(new(A.r()).C([H(K().c,`Gift card`,M().e)]))))]))))))}),new O().i(ys,`examples.dropdown.Main$package$`,{cH:1});var bs;function xs(){return bs||=new ys,bs}function Ss(e){try{xs().gO()}catch(e){throw e}}function Cs(){this.ef=null,this.eg=!1}T=Cs.prototype=new D,T.constructor=Cs,T.hk=(function(){return this.eg||=(this.ef=new vs(`end`),!0),this.ef}),new O().i(Cs,`io.github.nguyenyou.webawesome.laminar.Button$slots$`,{cJ:1});var ws;function Ts(){return ws||=new Cs,ws}function Es(){this.et=null,this.eu=!1}T=Es.prototype=new D,T.constructor=Es,T.R=(function(){return this.eu||=(this.et=new vs(`trigger`),!0),this.et}),new O().i(Es,`io.github.nguyenyou.webawesome.laminar.Dropdown$slots$`,{cP:1});var Ds;function Os(){return Ds||=new Es,Ds}function ks(){this.eN=null,this.eO=!1,this.eL=null,this.eM=!1,this.eP=null,this.eQ=!1}T=ks.prototype=new D,T.constructor=ks,T.a3=(function(){return this.eO||=(this.eN=new vs(`icon`),!0),this.eN}),T.c0=(function(){return this.eM||=(this.eL=new vs(`details`),!0),this.eL}),T.D=(function(){return this.eQ||=(this.eP=new vs(`submenu`),!0),this.eP}),new O().i(ks,`io.github.nguyenyou.webawesome.laminar.DropdownItem$slots$`,{cR:1});var As;function N(){return As||=new ks,As}function js(){}T=js.prototype=new D,T.constructor=js,T.io=(function(e,t){var n=ta;n.setFloat64(0,e,!0);var r=n.getInt32(0,!0)|0,i=n.getInt32(4,!0)|0,a=2047&(i>>>20|0),o=a+t|0,s=-2146435073&i,c=0,l=0;if(c=r,l=s,!((a-1|0)>>>0<=2045)){var u=2147483647&i;if((r|u)===0||u>=2146435072)return e;var d=1048575&i,f=d===0?32+Math.clz32(r)|0:Math.clz32(d);o=o-(f-12|0)|0;var p=-2147483648&i,m=f-11|0,h=32&m?0:r<<m,g=p|1048575&(32&m?r<<m:(r>>>1|0)>>>~m|0|i<<m);c=h,l=g}if((o-1|0)>>>0<=2045){var _=o,v=c,y=l,ee=_<<20|y,b=ta;return b.setInt32(0,v,!0),b.setInt32(4,ee,!0),+b.getFloat64(0,!0)}if((53+o|0)>>>0<=53){var te=54+o|0,ne=c,re=l,ie=te<<20|re,ae=ta;return ae.setInt32(0,ne,!0),ae.setInt32(4,ie,!0),5551115123125783e-32*ae.getFloat64(0,!0)}var oe=2047&~(t>>31),se=-2147483648&i,ce=oe<<20|se,le=ta;return le.setInt32(0,0,!0),le.setInt32(4,ce,!0),+le.getFloat64(0,!0)}),new O().i(js,`java.lang.Math$`,{d9:1});var Ms;function Ns(){return Ms||=new js,Ms}function Ps(e,t){for(var n=P().ad(`^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$`),r=[],i=0;i<(t.length|0);){var a=t[i];if(a!==``){var o=n.exec(a);if(o!==null){var s=Fs(e,o[1]),c=s[0],l=s[1],u=o[2],d=o[3],f=parseInt(d),p=o[4];r.push(new Eu(c,l,u,f|0,p===void 0?-1:parseInt(p)|0))}else r.push(new Eu(`<jscode>`,a,null,-1,-1))|0}i=1+i|0}var m=r.length|0,h=new(Du.r()).C(m);for(i=0;i<m;)h.b[i]=r[i],i=1+i|0;return h}function Fs(e,t){var n=P().ad(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$`),r=P().ad(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$`),i=P().ad(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$`),a=P().ad(`^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$`),o=P().ad(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$`),s=n.exec(t),c=s===null?r.exec(t):s;if(c!==null)return[Is(e,c[1]),Us(e,c[2])];var l=i.exec(t),u=l===null?a.exec(t):l;if(u!==null)return[Is(e,u[1]),`<init>`];var d=o.exec(t);return d===null?[`<jscode>`,t]:[Is(e,d[1]),`<clinit>`]}function Is(e,t){var n=Rs(e);if(hc().da.call(n,t))var r=Rs(e)[t];else var r=ec(e,0,t);return r.split(`_`).join(`.`).split(`＿`).join(`_`)}function Ls(e){if(!((1&e.T)<<24>>24)){var t={};t.O=`java_lang_Object`,t.T=`java_lang_String`;for(var n=0;n<=22;){if(n>=2){var r=`T`+n;t[r]=`scala_Tuple`+n}var i=`F`+n;t[i]=`scala_Function`+n,n=1+n|0}e.d7=t,e.T=(1|e.T)<<24>>24}return e.d7}function Rs(e){return(1&e.T)<<24>>24?e.d7:Ls(e)}function zs(e){if(!((2&e.T)<<24>>24)){var t={};t.sjsr_=`scala_scalajs_runtime_`,t.sjs_=`scala_scalajs_`,t.sci_=`scala_collection_immutable_`,t.scm_=`scala_collection_mutable_`,t.scg_=`scala_collection_generic_`,t.sc_=`scala_collection_`,t.sr_=`scala_runtime_`,t.s_=`scala_`,t.jl_=`java_lang_`,t.ju_=`java_util_`,e.d8=t,e.T=(2|e.T)<<24>>24}return e.d8}function Bs(e){return(2&e.T)<<24>>24?e.d8:zs(e)}function Vs(e){return(4&e.T)<<24>>24||(e.d6=Object.keys(Bs(e)),e.T=(4|e.T)<<24>>24),e.d6}function Hs(e){return(4&e.T)<<24>>24?e.d6:Vs(e)}function Us(e,t){if(t.startsWith(`init___`))return`<init>`;var n=t.indexOf(`__`)|0;return n<0?t:t.substring(0,n)}function Ws(e,t){return t?t.arguments&&t.stack?Gs(e,t):t.stack&&t.sourceURL?Js(e,t):t.stack&&t.number?qs(e,t):t.stack&&t.fileName?Ks(e,t):t.message&&t[`opera#sourceloc`]?t.stacktrace?t.message.indexOf(`
`)>-1&&t.message.split(`
`).length>t.stacktrace.split(`
`).length?Ys(e,t):Xs(e,t):Ys(e,t):t.message&&t.stack&&t.stacktrace?t.stacktrace.indexOf(`called from line`)<0?Zs(e,t):Qs(e,t):t.stack&&!t.fileName?Gs(e,t):$s(e,t):[]}function Gs(e,t){return(t.stack+`
`).replace(P().ad(`^[\\s\\S]+?\\s+at\\s+`),` at `).replace(P().H(`^\\s+(at eval )?at\\s+`,`gm`),``).replace(P().H(`^([^\\(]+?)([\\n])`,`gm`),`{anonymous}() ($1)$2`).replace(P().H(`^Object.<anonymous>\\s*\\(([^\\)]+)\\)`,`gm`),`{anonymous}() ($1)`).replace(P().H(`^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(0,-1)}function Ks(e,t){return t.stack.replace(P().H(`(?:\\n@:0)?\\s+$`,`m`),``).replace(P().H(`^(?:\\((\\S*)\\))?@`,`gm`),`{anonymous}($1)@`).split(`
`)}function qs(e,t){return t.stack.replace(P().H(`^\\s*at\\s+(.*)$`,`gm`),`$1`).replace(P().H(`^Anonymous function\\s+`,`gm`),`{anonymous}() `).replace(P().H(`^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(1)}function Js(e,t){return t.stack.replace(P().H(`\\[native code\\]\\n`,`m`),``).replace(P().H(`^(?=\\w+Error\\:).*$\\n`,`m`),``).replace(P().H(`^@`,`gm`),`{anonymous}()@`).split(`
`)}function Ys(e,t){for(var n=P().H(`Line (\\d+).*script (?:in )?(\\S+)`,`i`),r=t.message.split(`
`),i=[],a=2,o=r.length|0;a<o;){var s=n.exec(r[a]);s!==null&&i.push(`{anonymous}()@`+s[2]+`:`+s[1])|0,a=2+a|0}return i}function Xs(e,t){for(var n=P().H(`Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$`,`i`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[3],l=c===void 0?`{anonymous}`:c;i.push(l+`()@`+s[2]+`:`+s[1])|0}a=2+a|0}return i}function Zs(e,t){for(var n=P().ad(`^(.*)@(.+):(\\d+)$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[1],l=c===void 0?`global code`:c+`()`;i.push(l+`@`+s[2]+`:`+s[3])|0}a=1+a|0}return i}function Qs(e,t){for(var n=P().ad(`^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[4]+`:`+s[1]+`:`+s[2],l=s[2],u=(l===void 0?`global code`:l).replace(P().ad(`<anonymous function: (\\S+)>`),`$1`).replace(P().ad(`<anonymous function>`),`{anonymous}`);i.push(u+`@`+c)|0}a=2+a|0}return i}function $s(e,t){return[]}function ec(e,t,n){for(;;)if(t<(Hs(e).length|0)){var r=Hs(e)[t];if(n.startsWith(r))return``+Bs(e)[r]+n.substring(r.length);t=1+t|0}else return n.startsWith(`L`)?n.substring(1):n}function tc(){this.d7=null,this.d8=null,this.d6=null,this.T=0}T=tc.prototype=new D,T.constructor=tc,T.hB=(function(e){return Ps(this,Ws(this,e))}),new O().i(tc,`java.lang.StackTrace$`,{de:1});var nc;function rc(){return nc||=new tc,nc}function ic(){}T=ic.prototype=new D,T.constructor=ic,T.ad=(function(e){return new RegExp(e)}),T.H=(function(e,t){return new RegExp(e,t)}),new O().i(ic,`java.lang.StackTrace$StringRE$`,{df:1});var ac;function P(){return ac||=new ic,ac}function oc(){this.eU=null,this.gv=null,sc=this,this.eU=new rh(!1),this.gv=new rh(!0)}T=oc.prototype=new D,T.constructor=oc,new O().i(oc,`java.lang.System$Streams$`,{dj:1});var sc;function cc(){return sc||=new oc,sc}function lc(e){var t={};return t[`java.version`]=`1.8`,t[`java.vm.specification.version`]=`1.8`,t[`java.vm.specification.vendor`]=`Oracle Corporation`,t[`java.vm.specification.name`]=`Java Virtual Machine Specification`,t[`java.vm.name`]=`Scala.js`,t[`java.vm.version`]=`1.22.0`,t[`java.specification.version`]=`1.8`,t[`java.specification.vendor`]=`Oracle Corporation`,t[`java.specification.name`]=`Java Platform API Specification`,t[`file.separator`]=`/`,t[`path.separator`]=`:`,t[`line.separator`]=`
`,t}function uc(){this.d9=null,this.eV=null,dc=this,this.d9=lc(this),this.eV=null}T=uc.prototype=new D,T.constructor=uc,T.fX=(function(e,t){if(this.d9!==null){var n=this.d9;return hc().da.call(n,e)?n[e]:t}return this.eV.fX(e,t)}),new O().i(uc,`java.lang.System$SystemProperties$`,{dk:1});var dc;function fc(){return dc||=new uc,dc}function pc(){this.da=null,mc=this,this.da=Object.prototype.hasOwnProperty}T=pc.prototype=new D,T.constructor=pc,new O().i(pc,`java.lang.Utils$Cache$`,{dm:1});var mc;function hc(){return mc||=new pc,mc}function gc(e,t){return e===t}function _c(e){return 0}function vc(e,t){return!!(e&&e.$classData&&e.$classData.D===t&&e.$classData.B.n.az)}var yc=new O().i(0,`java.lang.Void`,{az:1},(e=>e===void 0));function bc(e,t){throw op(new cp,`argument type mismatch`)}function xc(){}T=xc.prototype=new D,T.constructor=xc,T.a9=(function(e){return e instanceof ha||e instanceof _a||e instanceof va||e instanceof ya||e instanceof ba||e instanceof xa?e.b.length:e instanceof Sa?e.b.length>>>1|0:(e instanceof Ca||e instanceof wa||bc(this,e),e.b.length)}),new O().i(xc,`java.lang.reflect.Array$`,{dn:1});var Sc;function Cc(){return Sc||=new xc,Sc}function wc(){}T=wc.prototype=new D,T.constructor=wc,T.gW=(function(e,t){for(var n=0,r=e.b.length;;)if(n===r)return~n;else{var i=(n+r|0)>>>1|0,a=e.b[i],o=t===a?0:t<a?-1:1;if(o<0){r=i;continue}if(o!==0){n=1+i|0;continue}return i}}),T.fN=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.b.length>>>1|0;if((t.b.length>>>1|0)!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.b,o=i<<1,s=a[o],c=a[o+1|0],l=r,u=t.b,d=l<<1,f=u[d],p=u[d+1|0];if((s^f|c^p)!==0)return!1;r=1+r|0}return!0}),T.fM=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.b.length;if(t.b.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.b[i],o=r;if(a!==t.b[o])return!1;r=1+r|0}return!0}),T.fO=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.b.length;if(t.b.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.b[i],o=r;if(a!==t.b[o])return!1;r=1+r|0}return!0}),T.fL=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.b.length;if(t.b.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.b[i],o=r;if(a!==t.b[o])return!1;r=1+r|0}return!0}),T.fK=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.b.length;if(t.b.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.b[i],o=r;if(a!==t.b[o])return!1;r=1+r|0}return!0}),T.fP=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.b.length;if(t.b.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.b[i],o=r;if(a!==t.b[o])return!1;r=1+r|0}return!0}),new O().i(wc,`java.util.Arrays$`,{dp:1});var Tc;function Ec(){return Tc||=new wc,Tc}function Dc(e,t){return Ac().gj(e,t)}function Oc(){}T=Oc.prototype=new D,T.constructor=Oc,T.gj=(function(e,t){if(t===e>>31)return``+e;if(-2097152&(t^t>>10)){var n=t>>31,r=e^n,i=r-n|0,a=4294967296*(((t^n)+(i>>>0<r>>>0|0)|0)>>>0)+(i>>>0),o=+Math.floor(1.0000000000000265e-9*a),s=i-Math.imul(1e9,o|0)|0;s<0&&(--o,s=1e9+s|0);var c=``+s,l=o,u=c.length,d=``+l+`000000000`.substring(u)+c;return t<0?`-`+d:d}return``+(4294967296*t+(e>>>0))}),T.fW=(function(e){if(e<-0x8000000000000000)return E(0,-2147483648);if(e>=0x8000000000000000)return E(-1,2147483647);var t=e|0,n=23283064365386963e-26*e|0;return E(t,e<0&&t!==0?n-1|0:n)}),T.he=(function(e,t,n,r){var i=t>>31,a=e^i,o=a-i|0,s=(t^i)+(o>>>0<a>>>0|0)|0,c=r>>31,l=n^c,u=l-c|0,d=(r^c)+(u>>>0<l>>>0|0)|0;if(d|-2097152&u){var f=(4294967296*(s>>>0)+(o>>>0))/(4294967296*(d>>>0)+(u>>>0))+.00390625,p=f|0,m=23283064365386963e-26*f|0,h=65535&u,g=u>>>16|0,_=65535&p,v=p>>>16|0,y=Math.imul(h,_),ee=Math.imul(g,_),b=Math.imul(h,v),te=y+((ee+b|0)<<16)|0,ne=(y>>>16|0)+b|0;if(((s-((((Math.imul(u,m)+Math.imul(d,p)|0)+Math.imul(g,v)|0)+(ne>>>16|0)|0)+(((65535&ne)+ee|0)>>>16|0)|0)|0)-((o-te|0)>>>0>o>>>0|0)|0)<0)var re=p-1|0,ie=(m-1|0)+(re!==-1|0)|0,ae=re,oe=ie;else var ae=p,oe=m}else var se=(s>>>0)/(Qi(u)>>>0)|0,ae=(4294967296*(s-Math.imul(u,se)|0)+(o>>>0))/u|0,oe=se;if((t^r)>=0)return E(ae,oe);var ce=-ae|0;return E(ce,(-oe|0)-(ce!==0|0)|0)}),T.hf=(function(e,t,n,r){if(!(r|-2097152&n)){var i=(t>>>0)/(Qi(n)>>>0)|0;return E((4294967296*(t-Math.imul(n,i)|0)+(e>>>0))/n|0,i)}if(r>=0){var a=(4294967296*(t>>>0)+(e>>>0))/(4294967296*(r>>>0)+(n>>>0))+.00390625,o=a|0,s=23283064365386963e-26*a|0,c=65535&n,l=n>>>16|0,u=65535&o,d=o>>>16|0,f=Math.imul(c,u),p=Math.imul(l,u),m=Math.imul(c,d),h=f+((p+m|0)<<16)|0,g=(f>>>16|0)+m|0;if(((t-((((Math.imul(n,s)+Math.imul(r,o)|0)+Math.imul(l,d)|0)+(g>>>16|0)|0)+(((65535&g)+p|0)>>>16|0)|0)|0)-((e-h|0)>>>0>e>>>0|0)|0)<0){var _=o-1|0;return E(_,(s-1|0)+(_!==-1|0)|0)}return E(o,s)}return(t===r?e>>>0<n>>>0:t>>>0<r>>>0)?E(0,0):E(1,0)}),T.ig=(function(e,t,n,r){var i=t>>31,a=e^i,o=a-i|0,s=(t^i)+(o>>>0<a>>>0|0)|0,c=r>>31,l=n^c,u=l-c|0,d=(r^c)+(u>>>0<l>>>0|0)|0;if(d|-2097152&u){var f=(4294967296*(s>>>0)+(o>>>0))/(4294967296*(d>>>0)+(u>>>0))+.00390625,p=f|0,m=23283064365386963e-26*f|0,h=65535&u,g=u>>>16|0,_=65535&p,v=p>>>16|0,y=Math.imul(h,_),ee=Math.imul(g,_),b=Math.imul(h,v),te=y+((ee+b|0)<<16)|0,ne=(y>>>16|0)+b|0,re=(((Math.imul(u,m)+Math.imul(d,p)|0)+Math.imul(g,v)|0)+(ne>>>16|0)|0)+(((65535&ne)+ee|0)>>>16|0)|0,ie=o-te|0,ae=(s-re|0)-(ie>>>0>o>>>0|0)|0;if(ae<0)var oe=ie+u|0,se=(ae+d|0)+(oe>>>0<ie>>>0|0)|0,ce=oe,le=se;else var ce=ie,le=ae}else var ue=(4294967296*((s>>>0)%(Qi(u)>>>0)|0)+(o>>>0))/u|0,ce=o-Math.imul(u,ue)|0,le=0;if(t<0){var de=-ce|0;return E(de,(-le|0)-(de!==0|0)|0)}return E(ce,le)}),T.ih=(function(e,t,n,r){if(!(r|-2097152&n)){var i=(4294967296*((t>>>0)%(Qi(n)>>>0)|0)+(e>>>0))/n|0;return E(e-Math.imul(n,i)|0,0)}if(r>=0){var a=(4294967296*(t>>>0)+(e>>>0))/(4294967296*(r>>>0)+(n>>>0))+.00390625,o=a|0,s=23283064365386963e-26*a|0,c=65535&n,l=n>>>16|0,u=65535&o,d=o>>>16|0,f=Math.imul(c,u),p=Math.imul(l,u),m=Math.imul(c,d),h=f+((p+m|0)<<16)|0,g=(f>>>16|0)+m|0,_=(((Math.imul(n,s)+Math.imul(r,o)|0)+Math.imul(l,d)|0)+(g>>>16|0)|0)+(((65535&g)+p|0)>>>16|0)|0,v=e-h|0,y=(t-_|0)-(v>>>0>e>>>0|0)|0;if(y<0){var ee=v+n|0;return E(ee,(y+r|0)+(ee>>>0<v>>>0|0)|0)}return E(v,y)}if(t===r?e>>>0<n>>>0:t>>>0<r>>>0)return E(e,t);var b=e-n|0;return E(b,(t-r|0)-(b>>>0>e>>>0|0)|0)}),new O().i(Oc,`org.scalajs.linker.runtime.RuntimeLong$`,{ds:1});var kc;function Ac(){return kc||=new Oc,kc}function jc(){this.n=null,Mc=this,this.n=new xp}T=jc.prototype=new D,T.constructor=jc,new O().i(jc,`scala.$less$colon$less$`,{dv:1});var Mc;function F(){return Mc||=new jc,Mc}function Nc(e,t,n,r,i,a){for(var o=n,s=i,c=n+a|0;o<c;)L().cw(r,s,L().ba(t,o)),o=1+o|0,s=1+s|0}function Pc(){}T=Pc.prototype=new D,T.constructor=Pc,T.fR=(function(e,t){var n=e.x();if(n>-1){for(var r=t.ds(n),i=e.i(),a=0;a<n;)L().cw(r,a,i.q()),a=1+a|0;return r}var o=null,s=t.cE(),c=s===Oa.l();o=[];for(var l=e.i();l.s();){var u=l.q(),d=c?fa(u):u===null?dl().dv(s):u;o.push(d)}return dl().du(s===Ea.l()?yc.l():s===vl.l()||s===Qd.l()?Ta.l():s,o)}),T.cx=(function(e,t,n,r,i){var a=qi(e);a.af.Z&&qi(n).af.R(a.af)?e.ae(t,n,r,i):Nc(this,e,t,n,r,i)}),T.fQ=(function(e,t){if(e===t)return!0;if(e.b.length!==t.b.length)return!1;for(var n=e.b.length,r=0;r<n;){if(!_l().O(e.b[r],t.b[r]))return!1;r=1+r|0}return!0}),new O().i(Pc,`scala.Array$`,{dx:1});var Fc;function Ic(){return Fc||=new Pc,Fc}var I=new O().i(1,`scala.Function1`,{e:1});function Lc(){}T=Lc.prototype=new D,T.constructor=Lc;function Rc(){}Rc.prototype=T;function zc(){}T=zc.prototype=new D,T.constructor=zc,T.N=(function(e){return e===null?Y():new X(e)}),new O().i(zc,`scala.Option$`,{dF:1});var Bc;function Vc(){return Bc||=new zc,Bc}function Hc(){this.f2=null,this.db=null,Uc=this,this.f2=new G((e=>this.f2)),this.db=new kf}T=Hc.prototype=new D,T.constructor=Hc,new O().i(Hc,`scala.PartialFunction$`,{dG:1});var Uc;function Wc(){return Uc||=new Hc,Uc}function Gc(){this.f5=null,Kc=this,this.f5=new G((e=>qc().f5))}T=Gc.prototype=new D,T.constructor=Gc,T.hE=(function(e,t){var n=Cc().a9(e),r=0;if(e instanceof ha)for(;r<n;)t.h(e.b[r]),r=1+r|0;else if(e instanceof xa)for(;r<n;)t.h(e.b[r]),r=1+r|0;else if(e instanceof wa)for(;r<n;)t.h(e.b[r]),r=1+r|0;else if(e instanceof Sa)for(;r<n;){var i=e.b,a=r<<1,o=i[a],s=i[a+1|0];t.h(E(o,s)),r=1+r|0}else if(e instanceof Ca)for(;r<n;)t.h(e.b[r]),r=1+r|0;else if(e instanceof va)for(;r<n;)t.h(ua(e.b[r])),r=1+r|0;else if(e instanceof ya)for(;r<n;)t.h(e.b[r]),r=1+r|0;else if(e instanceof ba)for(;r<n;)t.h(e.b[r]),r=1+r|0;else if(e instanceof _a)for(;r<n;)t.h(e.b[r]),r=1+r|0;else throw new Cp(e)}),new O().i(Gc,`scala.collection.ArrayOps$`,{dL:1});var Kc;function qc(){return Kc||=new Gc,Kc}function Jc(e,t){for(var n=e.i();n.s();)t.h(n.q())}function Yc(e,t,n,r){var i=e.i(),a=n;matchResult18:{var o,s=e.x();if(s===-1){var o=Cc().a9(t);break matchResult18}var o=s}for(var c=Cc().a9(t),l=r<o?r:o,u=n<0?c:c-n|0,d=u<l?u:l,f=n+(d<0?0:d)|0;a<f&&i.s();)L().cw(t,a,i.q()),a=1+a|0;return a-n|0}function Xc(e,t,n,r){return e.x()===0?``+t+r:e.bt(vg(new yg),t,n,r).M.v}function Zc(e,t,n,r,i){var a=t.M;n.length!==0&&(a.v=``+a.v+n);var o=e.i();if(o.s()){var s=o.q();for(a.v=``+a.v+s;o.s();){r.length!==0&&(a.v=``+a.v+r);var c=o.q();a.v=``+a.v+c}}return i.length!==0&&(a.v=``+a.v+i),t}function Qc(e,t){if(e.x()>=0){var n=e.x(),r=t.ds(n);return e.aW(r,0,2147483647),r}var i=null,a=t.cE(),o=a===Oa.l();i=[];for(var s=e.i();s.s();){var c=s.q(),l=o?fa(c):c===null?dl().dv(a):c;i.push(l)}return dl().du(a===Ea.l()?yc.l():a===vl.l()||a===Qd.l()?Ta.l():a,i)}function $c(e,t){this.f7=null,this.bF=null,this.f7=e,this.bF=t}T=$c.prototype=new D,T.constructor=$c,T.hQ=(function(){return this.f7.a8().i()}),new O().i($c,`scala.collection.Iterator$ConcatIteratorCell`,{dU:1});function el(){this.f8=null,tl=this,this.f8=new G((e=>this.f8))}T=el.prototype=new D,T.constructor=el,new O().i(el,`scala.collection.StringOps$`,{e0:1});var tl;function nl(){return tl||=new el,tl}function rl(){}T=rl.prototype=new D,T.constructor=rl,T.g1=(function(e,t){return up(new fp,e+` is out of bounds (min 0, max `+t+`)`)}),new O().i(rl,`scala.collection.generic.CommonErrors$`,{e1:1});var il;function al(){return il||=new rl,il}function ol(){this.fc=0,sl=this;try{nl();var e=Cu().hW(fc().fX(`scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength`,`64`),10,214748364)}catch(t){if(0)var e;else{var e;throw t}}this.fc=e}T=ol.prototype=new D,T.constructor=ol,new O().i(ol,`scala.collection.immutable.IndexedSeqDefaults$`,{e4:1});var sl;function cl(){return sl||=new ol,sl}function ll(){}T=ll.prototype=new D,T.constructor=ll,T.dv=(function(e){return e===ka.l()||e===Aa.l()||e===Oa.l()||e===ja.l()?0:e===Ma.l()?E(0,0):e===Na.l()||e===Pa.l()?0:e===Da.l()?!1:e===Ea.l()?void 0:null}),T.du=(function(e,t){var n=t.length|0;if(e===Oa.l()){for(var r=new va(n),i=0;i!==n;)r.b[i]=65535&(t[i]|0),i=1+i|0;return r}for(var a=e.af.U(n),o=0;o!==n;)L().cw(a,o,t[o]),o=1+o|0;return a}),new O().i(ll,`scala.collection.mutable.ArrayBuilder$`,{ec:1});var ul;function dl(){return ul||=new ll,ul}function fl(){}T=fl.prototype=new D,T.constructor=fl,T.fF=(function(e,t,n){if(t!==e)throw new yp(n)}),new O().i(fl,`scala.collection.mutable.MutationTracker$`,{ek:1});var pl;function ml(){return pl||=new fl,pl}function hl(){}T=hl.prototype=new D,T.constructor=hl,T.O=(function(e,t){return e===t||(Tu(e)?this.hn(e,t):e instanceof Gi?this.hl(e,t):e===null?t===null:Yi(e,t))}),T.hn=(function(e,t){if(Tu(t))return this.hm(e,t);if(t instanceof Gi){if(typeof e==`number`)return+e===t.c;if(e instanceof Ki){var n=pa(e),r=n.l,i=n.h,a=t.c,o=a>>31;return(r^a|i^o)===0}return e===null?t===null:Yi(e,t)}return e===null?t===null:Yi(e,t)}),T.hm=(function(e,t){if(typeof e==`number`){var n=+e;if(typeof t==`number`)return n===+t;if(t instanceof Ki){var r=pa(t),i=r.l;return n===4294967296*r.h+(i>>>0)}return!1}if(e instanceof Ki){var a=pa(e),o=a.l,s=a.h;if(t instanceof Ki){var c=pa(t),l=c.l,u=c.h;return(o^l|s^u)===0}if(typeof t==`number`){var d=+t;return 4294967296*s+(o>>>0)===d}return!1}return e===null?t===null:Yi(e,t)}),T.hl=(function(e,t){if(t instanceof Gi)return e.c===t.c;if(Tu(t)){if(typeof t==`number`)return+t===e.c;if(t instanceof Ki){var n=pa(t),r=n.l,i=n.h,a=e.c,o=a>>31;return(r^a|i^o)===0}return t===null?e===null:Yi(t,e)}return e===null&&t===null}),new O().i(hl,`scala.runtime.BoxesRunTime$`,{ey:1});var gl;function _l(){return gl||=new hl,gl}var vl=new O().i(0,`scala.runtime.Null$`,{eB:1});function yl(){}T=yl.prototype=new D,T.constructor=yl,T.bu=(function(){throw mp(new gp,`tried to cast away nullability, but value is null`)}),new O().i(yl,`scala.runtime.Scala3RunTime$`,{eC:1});var bl;function xl(){return bl||=new yl,bl}function Sl(){}T=Sl.prototype=new D,T.constructor=Sl,T.gN=(function(e){return e===null?vl.l():qi(e)}),T.ba=(function(e,t){if(e instanceof ha||e instanceof xa||e instanceof wa)return e.b[t];if(e instanceof Sa){var n=e.b,r=t<<1;return E(n[r],n[r+1|0])}if(e instanceof Ca)return e.b[t];if(e instanceof va)return ua(e.b[t]);if(e instanceof ya||e instanceof ba||e instanceof _a)return e.b[t];throw e===null?hp(new gp):new Cp(e)}),T.cw=(function(e,t,n){if(e instanceof ha)e.b[t]=n;else if(e instanceof xa)e.b[t]=n|0;else if(e instanceof wa)e.b[t]=+n;else if(e instanceof Sa){var r=pa(n),i=e.b,a=t<<1;i[a]=r.l,i[a+1|0]=r.h}else if(e instanceof Ca)e.b[t]=Math.fround(n);else if(e instanceof va)e.b[t]=fa(n);else if(e instanceof ya)e.b[t]=n|0;else if(e instanceof ba)e.b[t]=n|0;else if(e instanceof _a)e.b[t]=!!n;else throw e===null?hp(new gp):new Cp(e)}),T.gA=(function(e){return Xc(e.bd(),e.ac()+`(`,`,`,`)`)}),T.aw=(function(e){if(e===null)return null;if(e.b.length===0){var t=Vm();return mh(),Rm(t)}return new Zh(e)}),new O().i(Sl,`scala.runtime.ScalaRunTime$`,{eD:1});var Cl;function L(){return Cl||=new Sl,Cl}function wl(){}T=wl.prototype=new D,T.constructor=wl,T.u=(function(e,t){var n=this.cD(e,t),r=n;return n=r<<13|r>>>19,Math.imul(5,n)-430675100|0}),T.cD=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|r>>>17,n=Math.imul(461845907,n),e^n}),T.E=(function(e,t){return this.gV(e^t)}),T.gV=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),T.hZ=(function(e,t){return t===e>>31?e:e^t}),T.hh=(function(e){var t=$i(e);if(t===e)return t;var n=Ac().fW(e),r=n.l,i=n.h;if(4294967296*i+(r>>>0)===e)return r^i;var a=e|0;if(a===e&&1/e!=-1/0)return a;if(e!==e)return 2146959360;var o=ta;return o.setFloat64(0,e,!0),(o.getInt32(0,!0)|0)^(o.getInt32(4,!0)|0)}),T.A=(function(e){if(e===null)return 0;if(typeof e==`number`)return this.hh(+e);if(e instanceof Ki){var t=pa(e);return this.hZ(t.l,t.h)}return Xi(e)}),T.hT=(function(e){throw up(new fp,``+e)}),new O().i(wl,`scala.runtime.Statics$`,{eF:1});var Tl;function R(){return Tl||=new wl,Tl}function El(){}T=El.prototype=new D,T.constructor=El,T.it=(function(e,t){return setTimeout((()=>{t.a8()}),e)}),new O().i(El,`scala.scalajs.js.timers.package$`,{eL:1});var Dl;function Ol(){return Dl||=new El,Dl}function kl(){}T=kl.prototype=new D,T.constructor=kl,T.iC=(function(e){if(e instanceof Q)return e.cu;var t=[];return e.au(new G((e=>t.push(e)|0))),t}),new O().i(kl,`scala.scalajs.runtime.Compat$`,{eU:1});var Al;function jl(){return Al||=new kl,Al}function Ml(){}T=Ml.prototype=new D,T.constructor=Ml,T.a=(function(e){for(var t=e.b.length,n=[],r=0;r!==t;){var i=r;n.push(e.b[i]),r=1+r|0}return n}),new O().i(Ml,`scala.scalajs.runtime.package$`,{eW:1});var Nl;function z(){return Nl||=new Ml,Nl}function Pl(){}T=Pl.prototype=new D,T.constructor=Pl,T.iu=(function(e){var t=`Illegal command line`+(e.g0()===0?``:e.g0()===1?` after first argument`:` after `+e.g0()+` arguments`)+`: `+e.iK();Fu().c4().c3(t+`
`)}),new O().i(Pl,`scala.util.CommandLineParser$`,{eX:1});function Fl(e){this.dh=null,this.dh=e}T=Fl.prototype=new D,T.constructor=Fl,T.w=(function(){return`DynamicVariable(`+this.dh+`)`}),new O().i(Fl,`scala.util.DynamicVariable`,{eZ:1});function Il(){}T=Il.prototype=new D,T.constructor=Il;function Ll(){}Ll.prototype=T,T.u=(function(e,t){var n=this.cD(e,t),r=n;return n=r<<13|r>>>19,Math.imul(5,n)-430675100|0}),T.cD=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|r>>>17,n=Math.imul(461845907,n),e^n}),T.E=(function(e,t){return this.c7(e^t)}),T.c7=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),T.gc=(function(e,t,n){var r=e.aa();if(r===0)return n?t:Em(e.ac());var i=t;n||(i=this.u(i,Em(e.ac())));for(var a=0;a<r;)i=this.u(i,R().A(e.ab(a))),a=1+a|0;return this.E(i,r)}),T.fD=(function(e,t,n){var r=e.aa(),i=Em(n===null?e.ac():n);if(r===0)return i;var a=t;a=this.u(a,i);for(var o=0;o<r;)a=this.u(a,R().A(e.ab(o))),o=1+o|0;return this.E(a,r)}),T.iD=(function(e,t){for(var n=0,r=0,i=0,a=1,o=e.i();o.s();){var s=o.q(),c=R().A(s);n=n+c|0,r^=c,a=Math.imul(a,1|c),i=1+i|0}var l=t;return l=this.u(l,n),l=this.u(l,r),l=this.cD(l,a),this.E(l,i)}),T.i7=(function(e,t){var n=e.i(),r=t;if(!n.s())return this.E(r,0);var i=n.q();if(!n.s())return this.E(this.u(r,R().A(i)),1);var a=n.q(),o=R().A(i);r=this.u(r,o);for(var s=r,c=R().A(a),l=c-o|0,u=2;n.s();){r=this.u(r,c);var d=R().A(n.q());if(l!==(d-c|0)||l===0){for(r=this.u(r,d),u=1+u|0;n.s();)r=this.u(r,R().A(n.q())),u=1+u|0;return this.E(r,u)}c=d,u=1+u|0}return this.c7(this.u(this.u(s,l),c))}),T.B=(function(e,t){var n=t,r=Cc().a9(e);switch(r){case 0:return this.E(n,0);case 1:return this.E(this.u(n,R().A(L().ba(e,0))),1);default:var i=R().A(L().ba(e,0));n=this.u(n,i);for(var a=n,o=R().A(L().ba(e,1)),s=o-i|0,c=2;c<r;){n=this.u(n,o);var l=R().A(L().ba(e,c));if(s!==(l-o|0)||s===0){for(n=this.u(n,l),c=1+c|0;c<r;)n=this.u(n,R().A(L().ba(e,c))),c=1+c|0;return this.E(n,r)}o=l,c=1+c|0}return this.c7(this.u(this.u(a,s),o))}}),T.ic=(function(e,t,n,r){return this.c7(this.u(this.u(this.u(r,e),t),n))}),T.hR=(function(e,t){var n=t,r=e.j();switch(r){case 0:return this.E(n,0);case 1:return this.E(this.u(n,R().A(e.r(0))),1);default:var i=R().A(e.r(0));n=this.u(n,i);for(var a=n,o=R().A(e.r(1)),s=o-i|0,c=2;c<r;){n=this.u(n,o);var l=R().A(e.r(c));if(s!==(l-o|0)||s===0){for(n=this.u(n,l),c=1+c|0;c<r;)n=this.u(n,R().A(e.r(c))),c=1+c|0;return this.E(n,r)}o=l,c=1+c|0}return this.c7(this.u(this.u(a,s),o))}}),T.hY=(function(e,t){for(var n=0,r=t,i=0,a=0,o=0,s=0,c=e;!c.g();){var l=c.P(),u=c.F(),d=R().A(l);switch(r=this.u(r,d),i){case 0:s=d,i=1;break;case 1:a=d-o|0,i=2;break;case 2:(a!==(d-o|0)||a===0)&&(i=3)}o=d,n=1+n|0,c=u}return i===2?this.ic(s,a,o,t):this.E(r,n)});function Rl(e){this.bj=null,this.dI=null,this.cL=!1,this.dI=e,mo(this),this.cL=!1}T=Rl.prototype=new D,T.constructor=Rl,T.i8=(function(e){this.cL?(vo(e),this.dI.a8()):_o(this,e)}),T.hX=(function(){ho(this),this.cL=!0}),new O().i(Rl,`com.raquo.airstream.ownership.OneTimeOwner`,{bD:1,bE:1});function zl(){}T=zl.prototype=new D,T.constructor=zl,T.ha=(function(e){return e!==null}),T.hj=(function(e){return e?``:null}),T.bZ=(function(e){return this.ha(e)}),T.c1=(function(e){return this.hj(!!e)}),new O().i(zl,`com.raquo.laminar.codecs.package$$anon$1`,{bU:1,a3:1});function Bl(e){if(e===null)throw hp(new gp)}T=Bl.prototype=new D,T.constructor=Bl,T.c1=(function(e){return e}),T.bZ=(function(e){return e}),new O().i(Bl,`com.raquo.laminar.codecs.package$$anon$2`,{bV:1,a3:1});function Vl(e){if(e===null)throw hp(new gp)}T=Vl.prototype=new D,T.constructor=Vl,T.h9=(function(e){return nl(),bu().i9(e)}),T.bZ=(function(e){return this.h9(e)}),T.c1=(function(e){return``+ +e}),new O().i(Vl,`com.raquo.laminar.codecs.package$$anon$4`,{bW:1,a3:1});function Hl(e,t,n,r){}T=Hl.prototype=new es,T.constructor=Hl,new O().i(Hl,`com.raquo.laminar.keys.CompositeKey`,{cc:1,W:1});function Ul(e){this.cj=null,this.cj=e}T=Ul.prototype=new es,T.constructor=Ul,new O().i(Ul,`com.raquo.laminar.keys.EventProp`,{cf:1,W:1});function Wl(e,t,n){return e.az=t,e.bk=n,e}function Gl(){this.az=null,this.bk=null}T=Gl.prototype=new es,T.constructor=Gl;function Kl(){}Kl.prototype=T,T.f=(function(e){return new rd(this,e,new Gf(((e,t,n)=>{Ao().gf(e,t,n)})))}),new O().i(Gl,`com.raquo.laminar.keys.HtmlAttr`,{a4:1,W:1});function ql(e,t,n){this.cV=null,this.cU=null,this.ck=null,this.cl=null,this.cV=e,this.cU=t;var r=n.g()?Y():new X(n.z()+`:`+e);this.ck=r.g()?e:r.z(),this.cl=n.g()?Y():new X(rs().i3(n.z()))}T=ql.prototype=new es,T.constructor=ql,new O().i(ql,`com.raquo.laminar.keys.SvgAttr`,{cg:1,W:1});function Jl(){}T=Jl.prototype=new D,T.constructor=Jl,T.ah=(function(e){}),new O().i(Jl,`com.raquo.laminar.modifiers.Modifier$$anon$1`,{cn:1,S:1});function Yl(e,t){if(this.e4=null,this.e4=e,t===null)throw hp(new gp)}T=Yl.prototype=new D,T.constructor=Yl,T.ah=(function(e){var t=Xa(),n=(()=>{this.e4.h(e)});if(Xa(),t.a5)n();else{t.a5=!0;try{n()}finally{t.a5=!1,qa(t)}}}),new O().i(Yl,`com.raquo.laminar.modifiers.Modifier$$anon$2`,{co:1,S:1});function Xl(){}T=Xl.prototype=new D,T.constructor=Xl,new O().i(Xl,`com.raquo.laminar.modifiers.RenderableNode$$anon$1`,{cr:1,cp:1});function Zl(){}T=Zl.prototype=new D,T.constructor=Zl,new O().i(Zl,`com.raquo.laminar.modifiers.RenderableSeq$collectionSeqRenderable$`,{ct:1,cs:1});var Ql;function B(){return Ql||=new Zl,Ql}function $l(e,t){if(this.e5=null,this.e5=e,t===null)throw hp(new gp)}T=$l.prototype=new D,T.constructor=$l,T.gU=(function(e){return this.e5.h(e)}),new O().i($l,`com.raquo.laminar.modifiers.RenderableText$$anon$1`,{cw:1,cu:1});function eu(e){e.fH(new so(new Uf((()=>{throw jd(new Md,`Attempting to use owner of unmounted element: `+Xc(Ao().h8(e.be(),(Ao(),$())),``,` > `,``))}))))}function tu(e,t,n){return e.d1=t,e}function nu(){this.d1=null}T=nu.prototype=new D,T.constructor=nu;function ru(){}ru.prototype=T,T.dr=(function(){return this.d1}),T.aT=(function(e){var t=this.gZ();return e.au(new q((e=>{e.ah(t)}))),t}),T.gZ=(function(){return new gm(this,Ao().h2(this))}),new O().i(nu,`com.raquo.laminar.tags.HtmlTag`,{ao:1,aa:1});function iu(e,t){this.ec=null,this.ec=e}T=iu.prototype=new D,T.constructor=iu,new O().i(iu,`com.raquo.laminar.tags.SvgTag`,{cG:1,aa:1});function au(){}T=au.prototype=new D,T.constructor=au,T.c1=(function(e){return e}),T.bZ=(function(e){return e}),new O().i(au,`io.github.nguyenyou.webawesome.laminar.UnionAsStringCodec$$anon$1`,{cT:1,a3:1});function ou(e,t){return e.b5=t,e.bO(),e}function su(){this.b5=null,this.b4=null,this.b6=!1}T=su.prototype=new D,T.constructor=su;function cu(){}cu.prototype=T,T.iy=(function(){return this.b6||=(this.b4=new ad(this.b5,new G((e=>void 0)),void 0),!0),this.b4}),T.d=(function(e,t){var n=this.iy().aT(new Q([]));return e.au(new G((e=>{e.h(this).ah(n)}))),t.au(new G((e=>{e.ah(n)}))),n});function lu(){this.d2=null,uu=this,this.d2=Ia(67,`1C]4m6m=c4]4]4]4]4]4]4]4]4]3g4]2m9]2m1Jm1m9s4g5mm6]3]4mm12>mEm1m6m1]3]=]DI]1<m24mIs4g2c4w9];]4]<]3m3m=m3mH]8]2m=mBHm3]4mK3{gggg2:g=m@]13]4E]`)}T=lu.prototype=new D,T.constructor=lu,T.hb=(function(e,t){if(e<256)var n=(e-48|0)>>>0<=9?e-48|0:(e-65|0)>>>0<=25?e-55|0:(e-97|0)>>>0<=25?e-87|0:-1;else if((e-65313|0)>>>0<=25)var n=e-65303|0;else if((e-65345|0)>>>0<=25)var n=e-65335|0;else{var r=Ec().gW(this.d2,e),i=r<0?-2-r|0:r;if(i<0)var n=-1;else var a=e-this.d2.b[i]|0,n=a>9?-1:a}return n<t?n:-1}),new O().i(lu,`java.lang.Character$`,{cZ:1,a:1});var uu;function du(){return uu||=new lu,uu}function fu(e){return(1&e.aA)<<24>>24||(e.d5=/* @__PURE__ */ RegExp(`^[\\x00-\\x20]*([+-]?(?:NaN|Infinity|(?:\\d+\\.?\\d*|\\.\\d+)(?:[eE][+-]?\\d+)?)[fFdD]?)[\\x00-\\x20]*$`),e.aA=(1|e.aA)<<24>>24),e.d5}function pu(e){return(1&e.aA)<<24>>24?e.d5:fu(e)}function mu(e){return(2&e.aA)<<24>>24||(e.d4=/* @__PURE__ */ RegExp(`^[\\x00-\\x20]*([+-]?)0[xX]([0-9A-Fa-f]*)\\.?([0-9A-Fa-f]*)[pP]([+-]?\\d+)[fFdD]?[\\x00-\\x20]*$`),e.aA=(2|e.aA)<<24>>24),e.d4}function hu(e){return(2&e.aA)<<24>>24?e.d4:mu(e)}function gu(e,t){var n=hu(e).exec(t);n===null&&_u(t);var r=n[1],i=n[2],a=n[3],o=n[4];i===``&&a===``&&_u(t);var s=e.ia(i,a,o,15);return r===`-`?-s:s}function _u(e){throw new Tm(`For input string: "`+e+`"`)}function vu(){this.d5=null,this.d4=null,this.aA=0}T=vu.prototype=new D,T.constructor=vu,T.i9=(function(e){var t=pu(this).exec(e);return t===null?gu(this,e):+parseFloat(t[1])}),T.ia=(function(e,t,n,r){for(var i=``+e+t,a=-(t.length<<2)|0,o=i.length-1|0,s=0;s!==o&&i.charCodeAt(s)===48;)s=1+s|0;var c=s,l=i.substring(c),u=l.length,d=u>r;if(d){for(var f=!1,p=r;!f&&p!==u;)l.charCodeAt(p)!==48&&(f=!0),p=1+p|0;var m=f?`1`:`0`,h=l.substring(0,r)+m}else var h=l;var g=a+(d?(l.length-(1+r|0)|0)<<2:0)|0;return Ns().io(+parseInt(h,16),$i(+parseInt(n,10))+g|0)}),new O().i(vu,`java.lang.Double$`,{d1:1,a:1});var yu;function bu(){return yu||=new vu,yu}function xu(){}T=xu.prototype=new D,T.constructor=xu,T.c5=(function(e){throw new Tm(`For input string: "`+e+`"`)}),T.hW=(function(e,t,n){e===null&&Cu().c5(e);var r=e.length;r===0&&Cu().c5(e);var i=du(),a=e.charCodeAt(0),o=a===45,s=o?-1:0,c=(o||a===43)|0;c>=r&&Cu().c5(e);var l=0;for(l=0;c!==r;){var u=i.hb(e.charCodeAt(c),t);(u<0||l>>>0>n>>>0)&&Cu().c5(e),l=Math.imul(l,t)+u|0,c=1+c|0}return l>>>0>(2147483647-s|0)>>>0&&Cu().c5(e),(l^s)-s|0}),new O().i(xu,`java.lang.Integer$`,{d6:1,a:1});var Su;function Cu(){return Su||=new xu,Su}function wu(){}T=wu.prototype=new D,T.constructor=wu;function Tu(e){return e instanceof wu||typeof e==`number`||e instanceof Ki}function Eu(e,t,n,r,i){this.bn=null,this.bA=null,this.bo=null,this.bp=0,this.bm=0,this.bn=e,this.bA=t,this.bo=n,this.bp=r,this.bm=i}T=Eu.prototype=new D,T.constructor=Eu,T.k=(function(e){return e instanceof Eu&&this.bo===e.bo&&this.bp===e.bp&&this.bm===e.bm&&this.bn===e.bn&&this.bA===e.bA}),T.w=(function(){var e=``;return this.bn!==`<jscode>`&&(e=``+e+this.bn+`.`),e=``+e+this.bA,this.bo===null?e+=`(Unknown Source)`:(e=e+`(`+this.bo,this.bp>=0&&(e=e+`:`+this.bp,this.bm>=0&&(e=e+`:`+this.bm)),e+=`)`),e}),T.t=(function(){return Em(this.bn)^Em(this.bA)^Em(this.bo)^this.bp^this.bm});var Du=new O().i(Eu,`java.lang.StackTraceElement`,{ay:1,a:1});function Ou(){}T=Ou.prototype=new D,T.constructor=Ou,T.i4=(function(e,t,n){for(var r=t+n|0,i=``,a=t;a!==r;)i+=``+ea(e.b[a]),a=1+a|0;return i}),new O().i(Ou,`java.lang.String$`,{dh:1,a:1});var ku;function Au(){return ku||=new Ou,ku}function ju(e,t,n,r,i){return e.eX=t,e.eY=i,i&&e.hC(),e}var Mu=class extends Error{constructor(){super(),this.eX=null,this.eY=!1,this.eW=null,this.cn=null}hS(e){return this}c2(){return this.eX}hC(){var e=this instanceof th?this.a6:this;return this.eW=Object.prototype.toString.call(e)===`[object Error]`?e:Error.captureStackTrace===void 0||Object.isSealed(this)?/* @__PURE__ */ Error():(Error.captureStackTrace(this),this),this}hM(){return this.cn===null&&(this.cn=this.eY?rc().hB(this.eW):new(Du.r()).C(0)),this.cn}w(){var e=Ji(this),t=this.c2();return t===null?e:e+`: `+t}t(){return ma.prototype.t.call(this)}k(e){return ma.prototype.k.call(this,e)}get message(){var e=this.c2();return e===null?``:e}get name(){return Ji(this)}toString(){return this.w()}};function Nu(){this.eZ=null,Pu=this,this.eZ=new Fl(cc().eU)}T=Nu.prototype=new D,T.constructor=Nu,T.c4=(function(){return this.eZ.dh}),new O().i(Nu,`scala.Console$`,{dy:1,ep:1});var Pu;function Fu(){return Pu||=new Nu,Pu}function Iu(){}T=Iu.prototype=new Rc,T.constructor=Iu;function Lu(){}Lu.prototype=T,T.iH=(function(e){if(e===null)return null;if(e.b.length===0){var t=qm();return mh(),t.fi}return new dg(e)});function Ru(e,t){if(t===e)e.a7(Qp().fS(t));else for(var n=t.i();n.s();)e.a1(n.q());return e}function zu(){}T=zu.prototype=new D,T.constructor=zu;function Bu(){}Bu.prototype=T,T.w=(function(){return`<function0>`});function Vu(){}T=Vu.prototype=new D,T.constructor=Vu;function Hu(){}Hu.prototype=T,T.w=(function(){return`<function1>`});function Uu(){}T=Uu.prototype=new D,T.constructor=Uu;function Wu(){}Wu.prototype=T,T.w=(function(){return`<function2>`});function Gu(){}T=Gu.prototype=new D,T.constructor=Gu;function Ku(){}Ku.prototype=T,T.w=(function(){return`<function3>`});function qu(e){this.ct=!1,this.ct=e}T=qu.prototype=new D,T.constructor=qu,T.w=(function(){return``+this.ct}),new O().i(qu,`scala.runtime.BooleanRef`,{ex:1,a:1});function Ju(e){this.bM=0,this.bM=e}T=Ju.prototype=new D,T.constructor=Ju,T.w=(function(){return``+this.bM}),new O().i(Ju,`scala.runtime.IntRef`,{ez:1,a:1});function Yu(){this.y=0,this.fx=0,this.gy=0,this.gx=0,Xu=this,this.y=Em(`Seq`),this.fx=Em(`Map`),this.gy=Em(`Set`),this.gx=this.iD($(),this.fx)}T=Yu.prototype=new Ll,T.constructor=Yu,T.ge=(function(e){return xh(e)?this.hR(e,this.y):e instanceof ng?this.hY(e,this.y):this.i7(e,this.y)}),new O().i(Yu,`scala.util.hashing.MurmurHash3$`,{f1:1,f0:1});var Xu;function V(){return Xu||=new Yu,Xu}var Zu=class extends Mu{};function Qu(){this.cH=null,this.dy=null,this.dz=null,$u=this,this.cH=Qp().fC(L().aw(new(I.r()).C([]))),this.dy=new q((e=>{try{console.error(this.cA(e)+`
`+this.hL(e,`
`))}catch(e){var t=e instanceof Mu?e:new th(e);console.error(`Error in AirstreamError.consoleErrorCallback:`),console.error(t)}})),this.dz=new q((e=>{console.warn(`Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.`);var t=e;throw t instanceof th?t.a6:t})),this.id(this.dy)}T=Qu.prototype=new D,T.constructor=Qu,T.cA=(function(e){try{var t=e.c2()}catch{var t=`(Unable to get the message for this error - exception occurred in its getMessage)`}return qi(e).dp()+`: `+t}),T.hL=(function(e,t){try{return Xc(Ld().iH(e.hM()),``,t,``)}catch{return`(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)`}}),T.id=(function(e){this.cH.a1(e)}),T.aX=(function(e){for(var t=this.cH.i();t.s();){var n=t.q();try{n.h(e)}catch(e){var r=e instanceof Mu?e:new th(e),i=this.dz;if(n===null?i===null:n.k(i))throw r instanceof th?r.a6:r;console.warn(`Error processing an unhandled error callback:`),Ol().it(0,new Uf((e=>(()=>{throw e instanceof th?e.a6:e}))(r)))}}}),new O().i(Qu,`com.raquo.airstream.core.AirstreamError$`,{bq:1,en:1,eo:1});var $u;function ed(){return $u||=new Qu,$u}function H(e,t,n){return new hf(n.gU(t))}function U(e,t,n,r){return new Yl(new q((e=>{(Po(),new jo(t,null,null)).au(new q((e=>(t=>{n.h(t).ah(e)}))(e)))})),ss())}function td(e,t){this.bl=null,this.cW=null,this.cX=null,this.bl=e,this.cW=(n=>{var r=e.cR.h(n);r.g()||t.h(r.z())}),this.cX=(()=>{var e=null;e=this;var t={};if(e===null)throw hp(new gp);return t.capture=e.bl.cT,t.passive=e.bl.cS,t})()}T=td.prototype=new D,T.constructor=td,T.ah=(function(e){this.gX(e,!1)}),T.gX=(function(e,t){if(Xf(e,this)===-1){var n=new q((t=>(Ao().gF(e.ag,this),new yo(t.dZ,new Uf((()=>{var t=Xf(e,this);t!==-1&&(Yf(e,t),Ao().ii(e.ag,this))})))))),r=t?_s().iE(e,n):po().dw(e.am,new q((t=>n.h(new is(e,t)))),!1);return Jf(e,this,t),r}var i=new q((e=>void 0));return po().gh(e.am,new q((t=>{i.h(new is(e,t))})),!1)}),T.w=(function(){return`EventListener(`+this.bl.by.cj+`)`});var nd=new O().i(td,`com.raquo.laminar.modifiers.EventListener`,{ck:1,S:1,cj:1});function rd(e,t,n){this.e2=null,this.e3=null,this.e1=null,this.e2=e,this.e3=t,this.e1=n}T=rd.prototype=new D,T.constructor=rd,T.ah=(function(e){this.e1.gS(e,this.e2,this.e3)}),new O().i(rd,`com.raquo.laminar.modifiers.KeySetter`,{cl:1,S:1,cx:1});function id(e,t){if(this.cZ=null,this.e7=null,this.e8=null,this.e7=t,eu(this),e===null)throw jd(new Md,`Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load`);if(!Ao().hV(e,document))throw jd(new Md,`Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering`);this.e8=e,this.i2()}T=id.prototype=new D,T.constructor=id,T.cz=(function(){return this.cZ}),T.fH=(function(e){this.cZ=e}),T.i2=(function(){return this.cZ.fz(),ms().cv(this,this.e7,void 0)}),T.be=(function(){return this.e8}),new O().i(id,`com.raquo.laminar.nodes.RootNode`,{cC:1,a9:1,an:1});function ad(e,t,n){this.d1=null,this.eb=null,this.eb=e,tu(this,e,!1)}T=ad.prototype=new ru,T.constructor=ad,T.dr=(function(){return this.eb}),new O().i(ad,`com.raquo.laminar.tags.CustomHtmlTag`,{cF:1,ao:1,aa:1});function od(){this.b5=null,this.b4=null,this.b6=!1,this.ed=null,this.ee=!1,ou(this,`wa-button`)}T=od.prototype=new cu,T.constructor=od,T.S=(function(){return this.ee||=(this.ed=(K(),Wl(new Gl,`with-caret`,Vo().cg)),!0),this.ed}),T.bO=(function(){return En}),new O().i(od,`io.github.nguyenyou.webawesome.laminar.Button$`,{cI:1,a0:1,Z:1});var sd;function cd(){return sd||=new od,sd}function ld(){this.az=null,this.bk=null,this.eh=null,this.ei=!1,Wl(this,`type`,new au)}T=ld.prototype=new Kl,T.constructor=ld,T.aU=(function(){return this.ei||=(this.eh=dd().f(`checkbox`),!0),this.eh}),new O().i(ld,`io.github.nguyenyou.webawesome.laminar.CommonKeys$DropdownItemElementType$`,{cK:1,a4:1,W:1});var ud;function dd(){return ud||=new ld,ud}function fd(){this.az=null,this.bk=null,this.ej=null,this.ek=!1,Wl(this,`variant`,new au)}T=fd.prototype=new Kl,T.constructor=fd,T.h5=(function(){return this.ek||=(this.ej=md().f(`danger`),!0),this.ej}),new O().i(fd,`io.github.nguyenyou.webawesome.laminar.CommonKeys$DropdownItemVariant$`,{cL:1,a4:1,W:1});var pd;function md(){return pd||=new fd,pd}function hd(){this.az=null,this.bk=null,this.el=null,this.em=!1,Wl(this,`target`,new au)}T=hd.prototype=new Kl,T.constructor=hd,T.gY=(function(){return this.em||=(this.el=_d().f(`_blank`),!0),this.el}),new O().i(hd,`io.github.nguyenyou.webawesome.laminar.CommonKeys$LinkTarget$`,{cM:1,a4:1,W:1});var gd;function _d(){return gd||=new hd,gd}function vd(){this.b5=null,this.b4=null,this.b6=!1,ou(this,`wa-divider`)}T=vd.prototype=new cu,T.constructor=vd,T.bO=(function(){return kn}),new O().i(vd,`io.github.nguyenyou.webawesome.laminar.Divider$`,{cN:1,a0:1,Z:1});var yd;function bd(){return yd||=new vd,yd}function xd(){this.b5=null,this.b4=null,this.b6=!1,this.ep=null,this.eq=!1,this.en=null,this.eo=!1,this.er=null,this.es=!1,ou(this,`wa-dropdown`)}T=xd.prototype=new cu,T.constructor=xd,T.g9=(function(){return this.eq||=(this.ep=(K(),new Ul(`wa-select`)),!0),this.ep}),T.hd=(function(){return this.eo||=(this.en=(K(),Wl(new Gl,`distance`,Vo().fy())),!0),this.en}),T.iv=(function(){return this.es||=(this.er=(K(),Wl(new Gl,`skidding`,Vo().fy())),!0),this.er}),T.bO=(function(){return Ui}),new O().i(xd,`io.github.nguyenyou.webawesome.laminar.Dropdown$`,{cO:1,a0:1,Z:1});var Sd;function Cd(){return Sd||=new xd,Sd}function wd(){this.b5=null,this.b4=null,this.b6=!1,this.eJ=null,this.eK=!1,this.eH=null,this.eI=!1,this.eF=null,this.eG=!1,this.ev=null,this.ew=!1,this.ex=null,this.ey=!1,this.ez=null,this.eA=!1,this.eD=null,this.eE=!1,this.eB=null,this.eC=!1,ou(this,`wa-dropdown-item`)}T=wd.prototype=new cu,T.constructor=wd,T.gk=(function(){return this.eK||=(this.eJ=md(),!0),this.eJ}),T.l=(function(){return this.eI||=(this.eH=(K(),Wl(new Gl,`value`,Vo().b2)),!0),this.eH}),T.aY=(function(){return this.eG||=(this.eF=dd(),!0),this.eF}),T.bY=(function(){return this.ew||=(this.ev=(K(),Wl(new Gl,`checked`,Vo().cg)),!0),this.ev}),T.hc=(function(){return this.ey||=(this.ex=(K(),Wl(new Gl,`disabled`,Vo().cg)),!0),this.ex}),T.fZ=(function(){return this.eA||=(this.ez=(K(),Wl(new Gl,`href`,Vo().b2)),!0),this.ez}),T.iA=(function(){return this.eE||=(this.eD=_d(),!0),this.eD}),T.ie=(function(){return this.eC||=(this.eB=(K(),Wl(new Gl,`rel`,Vo().b2)),!0),this.eB}),T.bO=(function(){return Mn}),new O().i(wd,`io.github.nguyenyou.webawesome.laminar.DropdownItem$`,{cQ:1,a0:1,Z:1});var Td;function W(){return Td||=new wd,Td}function Ed(){this.b5=null,this.b4=null,this.b6=!1,this.eR=null,this.eS=!1,ou(this,`wa-icon`)}T=Ed.prototype=new cu,T.constructor=Ed,T.Q=(function(){return this.eS||=(this.eR=(K(),Wl(new Gl,`name`,Vo().b2)),!0),this.eR}),T.bO=(function(){return Wi}),new O().i(Ed,`io.github.nguyenyou.webawesome.laminar.Icon$`,{cS:1,a0:1,Z:1});var Dd;function Od(){return Dd||=new Ed,Dd}function kd(e){if(e.af.Z)return e.af.Q().dp()+`[]`;for(var t=e.af.N,n=t.length-1|0;n>=0&&t.charCodeAt(n)===36;)n=n-1|0;if(n>=0&&(t.charCodeAt(n)-48|0)>>>0<=9){for(n=n-1|0;n>=0&&(t.charCodeAt(n)-48|0)>>>0<=9;)n=n-1|0;for(;n>=0&&t.charCodeAt(n)===36;)n=n-1|0}for(;;){if(n>=0)var r=n,i=t.charCodeAt(r),a=i!==36&&i!==46;else var a=!1;if(a)n=n-1|0;else break}var o=1+n|0;return t.substring(o)}function Ad(e){this.d3=null,this.af=e}T=Ad.prototype=new D,T.constructor=Ad,T.w=(function(){return(this.af.Y?`interface `:this.af.X?``:`class `)+this.af.N}),T.dp=(function(){return this.d3===null&&(this.d3=kd(this)),this.d3}),new O().i(Ad,`java.lang.Class`,{d0:1,a:1,N:1});function jd(e,t){return ju(e,t,null,!0,!0),e}var Md=class extends Mu{};new O().i(Md,`java.lang.Exception`,{y:1,r:1,a:1});function Nd(){}T=Nd.prototype=new D,T.constructor=Nd;function Pd(){}Pd.prototype=T;function Fd(){this.gw=null,Id=this,Gp(),this.gw=Xd()}T=Fd.prototype=new Lu,T.constructor=Fd,new O().i(Fd,`scala.Predef$`,{dI:1,dB:1,dC:1});var Id;function Ld(){return Id||=new Fd,Id}function Rd(e,t){return e.bD=t,e}function zd(){this.bD=null}T=zd.prototype=new D,T.constructor=zd;function Bd(){}Bd.prototype=T,T.bb=(function(e){return this.bD.dn(e,dh())}),T.aj=(function(){return this.bD.g5(dh())}),T.b9=(function(e){return this.bD.dn(e,dh())});function Vd(e,t){if(t<0)return 1;var n=e.x();if(n>=0)return n===t?0:n<t?-1:1;for(var r=0,i=e.i();i.s();){if(r===t)return 1;i.q(),r=1+r|0}return r-t|0}function Hd(e,t){return new Pp(e).dm(t)}function Ud(e,t,n){var r=t>0?t:0,i=n<0?-1:n<=r?0:n-r|0;return i===0?qd().K:new Lp(e,r,i)}function Wd(e,t){for(var n=t.i();e.s();)if(!n.s()||!_l().O(e.q(),n.q()))return!1;return!n.s()}function Gd(){this.K=null,Kd=this,this.K=new Ap}T=Gd.prototype=new D,T.constructor=Gd,T.aj=(function(){return new Lm}),new O().i(Gd,`scala.collection.Iterator$`,{dQ:1,a:1,U:1});var Kd;function qd(){return Kd||=new Gd,Kd}function Jd(){}T=Jd.prototype=new D,T.constructor=Jd,new O().i(Jd,`scala.collection.immutable.Map$`,{e6:1,a:1,dW:1});var Yd;function Xd(){return Yd||=new Jd,Yd}function Zd(e){this.fp=null,this.fp=e}T=Zd.prototype=new Bu,T.constructor=Zd,T.a8=(function(){return(0,this.fp)()}),new O().i(Zd,`scala.runtime.AbstractFunction0.$$Lambda$07eded5776954a9c145e92c329afd52873ad179c`,{et:1,bm:1,aA:1});function G(e){this.fq=null,this.fq=e}T=G.prototype=new Hu,T.constructor=G,T.h=(function(e){return(0,this.fq)(e)}),new O().i(G,`scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919`,{eu:1,bn:1,e:1});var Qd=new O().i(0,`scala.runtime.Nothing$`,{eA:1,r:1,a:1});function $d(){}T=$d.prototype=new D,T.constructor=$d,T.hH=(function(e){return(t=>e.h(t))}),new O().i($d,`scala.scalajs.js.Any$`,{eG:1,eH:1,eI:1});var ef;function tf(){return ef||=new $d,ef}function nf(){}T=nf.prototype=new Bu,T.constructor=nf;function rf(){}rf.prototype=T;function af(){}T=af.prototype=new Hu,T.constructor=af;function of(){}of.prototype=T;function sf(){}T=sf.prototype=new Wu,T.constructor=sf;function cf(){}cf.prototype=T;function lf(){}T=lf.prototype=new Ku,T.constructor=lf;function uf(){}uf.prototype=T;function df(e,t,n,r){if(this.dD=null,this.dB=!1,this.cI=null,this.dC=null,this.dD=e,this.dB=t,this.cI=n,r===null)throw hp(new gp);this.dC=void 0}T=df.prototype=new D,T.constructor=df,T.w=(function(){return Ra(this)}),T.g8=(function(e){try{this.dD.h(e)}catch(e){var t=e instanceof Mu?e:new th(e);this.dB?this.i6(new pm(t)):ed().aX(new pm(t))}}),T.i6=(function(e){try{this.cI.cB(e)?this.cI.h(e):ed().aX(e)}catch(n){var t=n instanceof Mu?n:new th(n);ed().aX(new mm(t,e))}}),new O().i(df,`com.raquo.airstream.core.Observer$$anon$8`,{bu:1,bv:1,br:1,bs:1});function ff(e){if(this.dP=null,this.dQ=!1,this.gn=null,e===null)throw hp(new gp);Wo(this)}T=ff.prototype=new D,T.constructor=ff,T.ix=(function(){return this.dQ||=(this.dP=new iu(`svg`,!1),!0),this.dP}),new O().i(ff,`com.raquo.laminar.api.Laminar$svg$`,{bO:1,c5:1,bY:1,c0:1});function pf(){this.c=null,mf=this,this.c=new Eh}T=pf.prototype=new D,T.constructor=pf,new O().i(pf,`com.raquo.laminar.api.package$`,{bR:1,ak:1,al:1,aj:1});var mf;function K(){return mf||=new pf,mf}function hf(e){this.ea=null,this.d0=null,this.ea=Y(),this.d0=Ao().h4(e)}T=hf.prototype=new D,T.constructor=hf,T.gg=(function(e){this.ea=e}),T.gl=(function(e){}),T.ah=(function(e){ms().cv(e,this,void 0)}),T.iB=(function(){return this.d0.data}),T.be=(function(){return this.d0}),new O().i(hf,`com.raquo.laminar.nodes.TextNode`,{cE:1,a9:1,S:1,am:1});function gf(){}T=gf.prototype=new D,T.constructor=gf;function _f(){}_f.prototype=T;function vf(e,t){return e===t}function yf(e){return e?1231:1237}var bf=new O().i(0,`java.lang.Boolean`,{cX:1,a:1,P:1,N:1},(e=>typeof e==`boolean`));function xf(e){return e}function Sf(e,t){return t instanceof Gi&&e===t.c}var Cf=new O().i(0,`java.lang.Character`,{au:1,a:1,P:1,N:1},(e=>e instanceof Gi));function wf(e,t){return ju(e,t,null,!0,!0),e}var Tf=class extends Md{};new O().i(Tf,`java.lang.RuntimeException`,{G:1,y:1,r:1,a:1});function Ef(){this.v=null,this.v=``}T=Ef.prototype=new D,T.constructor=Ef,T.gP=(function(e){var t=Au().i4(e,0,e.b.length);return this.v=``+this.v+t,this}),T.w=(function(){return this.v}),T.j=(function(){return this.v.length}),T.fE=(function(e){return this.v.charCodeAt(e)}),new O().i(Ef,`java.lang.StringBuilder`,{di:1,ab:1,as:1,a:1});function Df(){}T=Df.prototype=new Pd,T.constructor=Df;function Of(){}Of.prototype=T;function kf(){}T=kf.prototype=new D,T.constructor=kf,T.w=(function(){return`<function1>`}),T.cB=(function(e){return!1}),T.gT=(function(e){throw new Cp(e)}),T.h=(function(e){this.gT(e)}),new O().i(kf,`scala.PartialFunction$$anon$1`,{dH:1,e:1,k:1,a:1});function Af(){}T=Af.prototype=new D,T.constructor=Af;function jf(){}jf.prototype=T,T.x=(function(){return-1}),T.aW=(function(e,t,n){return Yc(this,e,t,n)}),T.bt=(function(e,t,n,r){return Zc(this,e,t,n,r)}),T.i=(function(){return this}),T.dm=(function(e){return Hd(this,e)}),T.cy=(function(e){return this.c8(e,-1)}),T.c8=(function(e,t){return Ud(this,e,t)}),T.w=(function(){return`<iterator>`});function Mf(e,t){return e.bG=t,e}function Nf(){this.bG=null}T=Nf.prototype=new D,T.constructor=Nf;function Pf(){}Pf.prototype=T,T.fC=(function(e){return this.bG.b9(e)}),T.fS=(function(e){return this.bG.bb(e)}),T.aj=(function(){return this.bG.aj()}),T.b9=(function(e){return this.fC(e)}),T.bb=(function(e){return this.fS(e)});function Ff(e,t){return t>=0&&e.a4(t)>0}function If(e){return e.a4(0)===0}function Lf(e,t){var n=e.x();if(n!==-1){var r=t.x();if(r!==-1){if(n!==r)return!1;if(n===0)return!0}}return Wd(e.i(),t)}function Rf(e,t){for(var n=e.bc().aj(),r=e.i();r.s();)n.a1(t.h(r.q()));return n.ak()}function zf(e,t){if(this.fk=null,this.cq=null,this.fk=e,t===null)throw hp(new gp);this.cq=t}T=zf.prototype=new D,T.constructor=zf,T.gJ=(function(e){return this.cq.a1(e),this}),T.gC=(function(e){return this.cq.a7(e),this}),T.ak=(function(){return this.fk.h(this.cq.ak())}),T.a1=(function(e){return this.gJ(e)}),T.a7=(function(e){return this.gC(e)}),new O().i(zf,`scala.collection.mutable.Builder$$anon$1`,{eg:1,Q:1,R:1,V:1});function Bf(e,t){return e.bJ=t,e}function Vf(){this.bJ=null}T=Vf.prototype=new D,T.constructor=Vf;function Hf(){}Hf.prototype=T,T.gK=(function(e){return this.bJ.a1(e),this}),T.gD=(function(e){return this.bJ.a7(e),this}),T.ak=(function(){return this.bJ}),T.a1=(function(e){return this.gK(e)}),T.a7=(function(e){return this.gD(e)}),new O().i(Vf,`scala.collection.mutable.GrowableBuilder`,{bd:1,Q:1,R:1,V:1});function Uf(e){this.ft=null,this.ft=e}T=Uf.prototype=new rf,T.constructor=Uf,T.a8=(function(){return(0,this.ft)()}),new O().i(Uf,`scala.scalajs.runtime.AnonFunction0.$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d`,{eN:1,eM:1,bm:1,aA:1});function q(e){this.fu=null,this.fu=e}T=q.prototype=new of,T.constructor=q,T.h=(function(e){return(0,this.fu)(e)}),new O().i(q,`scala.scalajs.runtime.AnonFunction1.$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1`,{eP:1,eO:1,bn:1,e:1});function Wf(e){this.fv=null,this.fv=e}T=Wf.prototype=new cf,T.constructor=Wf,T.dj=(function(e,t){return(0,this.fv)(e,t)}),new O().i(Wf,`scala.scalajs.runtime.AnonFunction2.$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7`,{eR:1,eQ:1,ev:1,dz:1});function Gf(e){this.fw=null,this.fw=e}T=Gf.prototype=new uf,T.constructor=Gf,T.gS=(function(e,t,n){return(0,this.fw)(e,t,n)}),new O().i(Gf,`scala.scalajs.runtime.AnonFunction3.$$Lambda$73f37e31ba038fe839c174212837da323f140c96`,{eT:1,eS:1,ew:1,dA:1});function Kf(e,t){this.ci=null,this.cQ=null,this.ci=e,this.cQ=t}T=Kf.prototype=new D,T.constructor=Kf,T.ah=(function(e){var t=this.cQ;t!==void 0&&t.ga(e,this.ci),ms().cv(e,this.ci,void 0)}),T.iG=(function(e){return new Kf(this.ci,e.gR(this.cQ))});var J=new O().i(Kf,`com.raquo.laminar.inserters.StaticChildInserter`,{c9:1,S:1,c7:1,cb:1,c6:1});function qf(e){e.cY=new xo(new Uf((()=>{e.am.fz()})),new Uf((()=>{e.am.h6()}))),e.b3=void 0}function Jf(e,t,n){if(e.b3===void 0)e.b3=wo().aS(L().aw(new(nd.r()).C([t])));else if(n){var r=e.b3;if(r===void 0)throw new bp(`undefined.get`);r.unshift(t)}else{var i=e.b3;if(i===void 0)throw new bp(`undefined.get`);i.push(t)}}function Yf(e,t){var n=e.b3;n!==void 0&&n.splice(t,1)}function Xf(e,t){var n=e.b3;if(n===void 0)return-1;for(var r=!1,i=0;!r&&i<(n.length|0);){var a=n[i];(a===null?t===null:Yi(a,t))?r=!0:i=1+i|0}return r?i:-1}function Zf(e,t){$f(e,e.cm,t)&&ep(e,t)}function Qf(e,t){var n=e.cm;e.cm=t,$f(e,n,t)||ep(e,t)}function $f(e,t,n){var r=!t.g()&&!t.z().cz().I.g(),i=!n.g()&&!n.z().cz().I.g();return r&&!i}function ep(e,t){tp(e,t.g()?Y():new X(t.z().cz()))}function tp(e,t){if(t.g())e.cY.h0();else{var n=t.z();e.cY.iq(n)}}function np(){}T=np.prototype=new _f,T.constructor=np;function rp(){}rp.prototype=T;var ip=class extends Tf{constructor(e){super(),ju(this,e,null,!0,!0)}};new O().i(ip,`java.lang.ArithmeticException`,{cW:1,G:1,y:1,r:1,a:1});var ap=new O().i(0,`java.lang.Byte`,{cY:1,X:1,a:1,P:1,N:1},(e=>oa(e)));function op(e,t){return ju(e,t,null,!0,!0),e}function sp(e){return ju(e,null,null,!0,!0),e}var cp=class extends Tf{};new O().i(cp,`java.lang.IllegalArgumentException`,{aw:1,G:1,y:1,r:1,a:1});var lp=class extends Tf{constructor(e){super(),ju(this,e,null,!0,!0)}};new O().i(lp,`java.lang.IllegalStateException`,{d3:1,G:1,y:1,r:1,a:1});function up(e,t){return ju(e,t,null,!0,!0),e}function dp(e,t){return ju(e,`Index out of range: `+t,null,!0,!0),e}var fp=class extends Tf{};new O().i(fp,`java.lang.IndexOutOfBoundsException`,{d4:1,G:1,y:1,r:1,a:1});function pp(){}T=pp.prototype=new _f,T.constructor=pp,new O().i(pp,`java.lang.JSConsoleBasedPrintStream$DummyOutputStream`,{d8:1,ar:1,ap:1,at:1,aq:1});function mp(e,t){return ju(e,t,null,!0,!0),e}function hp(e){return ju(e,null,null,!0,!0),e}var gp=class extends Tf{};new O().i(gp,`java.lang.NullPointerException`,{da:1,G:1,y:1,r:1,a:1});var _p=new O().i(0,`java.lang.Short`,{dd:1,X:1,a:1,P:1,N:1},(e=>sa(e))),vp=class extends Tf{constructor(e){super(),ju(this,e,null,!0,!0)}};new O().i(vp,`java.lang.UnsupportedOperationException`,{dl:1,G:1,y:1,r:1,a:1});var yp=class extends Tf{constructor(e){super(),ju(this,e,null,!0,!0)}};new O().i(yp,`java.util.ConcurrentModificationException`,{dq:1,G:1,y:1,r:1,a:1});var bp=class extends Tf{constructor(e){super(),ju(this,e,null,!0,!0)}};new O().i(bp,`java.util.NoSuchElementException`,{dr:1,G:1,y:1,r:1,a:1});function xp(){}T=xp.prototype=new Of,T.constructor=xp,T.h=(function(e){return e}),T.w=(function(){return`generalized constraint`}),new O().i(xp,`scala.$less$colon$less$$anon$1`,{dw:1,dt:1,du:1,e:1,a:1});function Sp(e){if(!e.f1){if(e.co===null)var t=`null`;else{var n=L().gN(e.co),r=n===null?`of a JS class`:`of class `+n.af.N;try{var t=e.co+` (`+r+`)`}catch{var t=`an instance `+r}}e.f0=t,e.f1=!0}return e.f0}var Cp=class extends Tf{constructor(e){super(),this.co=null,this.f0=null,this.f1=!1,this.co=e,ju(this,null,null,!0,!0)}c2(){return Sp(this)}};new O().i(Cp,`scala.MatchError`,{dD:1,G:1,y:1,r:1,a:1});function wp(){}T=wp.prototype=new D,T.constructor=wp;function Tp(){}Tp.prototype=T,T.bd=(function(){return new Ep(this)}),T.g=(function(){return this===Y()}),T.x=(function(){return!this.g()|0}),T.i=(function(){return this.g()?qd().K:new jp(this.z())});function Ep(e){if(this.bB=0,this.f4=0,this.f3=null,e===null)throw hp(new gp);this.f3=e,this.bB=0,this.f4=e.aa()}T=Ep.prototype=new jf,T.constructor=Ep,T.s=(function(){return this.bB<this.f4}),T.q=(function(){var e=this.f3.ab(this.bB);return this.bB=1+this.bB|0,e}),new O().i(Ep,`scala.Product$$anon$1`,{dJ:1,I:1,b:1,c:1,J:1});function Dp(e){this.bD=null,Rd(this,e)}T=Dp.prototype=new Bd,T.constructor=Dp,new O().i(Dp,`scala.collection.ClassTagSeqFactory$AnySeqDelegate`,{dO:1,dN:1,a:1,U:1,Y:1});function Op(e){return Xc(e,e.aV()+`(`,`, `,`)`)}function kp(e){return!!(e&&e.$classData&&e.$classData.n.f)}function Ap(){}T=Ap.prototype=new jf,T.constructor=Ap,T.s=(function(){return!1}),T.i5=(function(){throw new bp(`next on empty iterator`)}),T.x=(function(){return 0}),T.q=(function(){this.i5()}),T.c8=(function(e,t){return this}),new O().i(Ap,`scala.collection.Iterator$$anon$19`,{dR:1,I:1,b:1,c:1,J:1});function jp(e){this.f6=null,this.bE=!1,this.f6=e,this.bE=!1}T=jp.prototype=new jf,T.constructor=jp,T.s=(function(){return!this.bE}),T.q=(function(){return this.bE?qd().K.q():(this.bE=!0,this.f6)}),T.c8=(function(e,t){return this.bE||e>0||t===0?qd().K:this}),new O().i(jp,`scala.collection.Iterator$$anon$20`,{dS:1,I:1,b:1,c:1,J:1});function Mp(e){for(;;)if(e.G instanceof Pp){var t=e.G;if(e.G=t.G,e.aB=t.aB,t.V!==null){e.U===null&&(e.U=t.U);var n=t.U;n===null&&xl().bu(),n.bF=e.V,e.V=t.V}}else return}function Np(e){for(;;)if(e.V===null)return e.G=null,e.U=null,!1;else{if(e.G=e.V.hQ(),e.U===e.V){var t=e.U;t===null&&xl().bu(),e.U=t.bF}if(e.V=e.V.bF,Mp(e),e.aB)return!0;if(!(e.G!==null&&e.G.s()))continue;return e.aB=!0,!0}}function Pp(e){this.G=null,this.V=null,this.U=null,this.aB=!1,this.G=e,this.V=null,this.U=null,this.aB=!1}T=Pp.prototype=new jf,T.constructor=Pp,T.s=(function(){return this.aB?!0:this.G===null?!1:this.G.s()?(this.aB=!0,!0):Np(this)}),T.q=(function(){if(this.s()){this.aB=!1;var e=this.G;return e===null&&xl().bu(),e.q()}return qd().K.q()}),T.dm=(function(e){var t=new $c(e,null);if(this.V===null)this.V=t,this.U=t;else{var n=this.U;n===null&&xl().bu(),n.bF=t,this.U=t}return this.G===null&&(this.G=qd().K),this}),new O().i(Pp,`scala.collection.Iterator$ConcatIterator`,{aK:1,I:1,b:1,c:1,J:1});function Fp(e){for(;e.ap>0;)e.aC.s()?(e.aC.q(),e.ap=e.ap-1|0):e.ap=0}function Ip(e,t){if(e.L<0)return-1;var n=e.L-t|0;return n<0?0:n}function Lp(e,t,n){this.aC=null,this.L=0,this.ap=0,this.aC=e,this.L=n,this.ap=t}T=Lp.prototype=new jf,T.constructor=Lp,T.x=(function(){var e=this.aC.x();if(e<0)return-1;var t=e-this.ap|0,n=t<0?0:t;if(this.L<0)return n;var r=this.L;return r<n?r:n}),T.s=(function(){return Fp(this),this.L!==0&&this.aC.s()}),T.q=(function(){return Fp(this),this.L>0?(this.L=this.L-1|0,this.aC.q()):this.L<0?this.aC.q():qd().K.q()}),T.c8=(function(e,t){var n=e>0?e:0;if(t<0)var r=Ip(this,n);else if(t<=n)var r=0;else if(this.L<0)var r=t-n|0;else var i=Ip(this,n),a=t-n|0,r=i<a?i:a;var o=this.ap+n|0;return r===0?qd().K:o<0?(this.ap=2147483647,this.L=0,Hd(this,new Zd((()=>new Lp(this.aC,o-2147483647|0,r))))):(this.ap=o,this.L=r,this)}),new O().i(Lp,`scala.collection.Iterator$SliceIterator`,{dV:1,I:1,b:1,c:1,J:1});function Rp(e,t){return t>=0&&e.a4(t)>0}function zp(e,t){if(t<0)throw up(new fp,``+t);var n=e.hi(t);if(n.g())throw up(new fp,``+t);return n.P()}function Bp(e,t){return Sh(t)?Vp(e,e,t):Lf(e,t)}function Vp(e,t,n){for(var r=n,i=t;;)if(i===r)return!0;else{if(!i.g()&&!r.g()&&_l().O(i.P(),r.P())){var a=i.F(),o=r.F();i=a,r=o;continue}return i.g()&&r.g()}}function Hp(e){if(this.bI=null,e===null)throw hp(new gp);this.bI=e}T=Hp.prototype=new jf,T.constructor=Hp,T.s=(function(){return!this.bI.g()}),T.q=(function(){var e=this.bI.P();return this.bI=this.bI.F(),e}),new O().i(Hp,`scala.collection.StrictOptimizedLinearSeqOps$$anon$1`,{dZ:1,I:1,b:1,c:1,J:1});function Up(){Wp=this,$(),$()}T=Up.prototype=new D,T.constructor=Up,T.b9=(function(e){return $().gb(e)}),T.aj=(function(){return new Sg}),T.bb=(function(e){return $().gb(e)}),new O().i(Up,`scala.collection.immutable.List$`,{e5:1,a:1,U:1,Y:1,a2:1});var Wp;function Gp(){return Wp||=new Up,Wp}function Kp(){this.fd=null,qp=this,this.fd=new ha(0)}T=Kp.prototype=new D,T.constructor=Kp,T.b9=(function(e){return this.fT(e)}),T.fT=(function(e){var t=e.x();if(t>=0){var n=this.gd(this.fd,0,t),r=kp(e)?e.aW(n,0,2147483647):e.i().aW(n,0,2147483647);if(r!==t)throw new lp(`Copied `+r+` of `+t);return Cg(new Tg,n,t)}return wg(new Tg).fA(e)}),T.aj=(function(){return new Yp}),T.im=(function(e,t){if(t<0)throw wf(new Tf,`Overflow while resizing array of array-backed collection. Requested length: `+t+`; current length: `+e+`; increase: `+(t-e|0));if(t<=e)return-1;if(t>2147483639)throw wf(new Tf,`Array of array-backed collection exceeds VM length limit of 2147483639. Requested length: `+t+`; current length: `+e);if(e>1073741819)return 2147483639;var n=e<<1,r=n>16?n:16;return t>r?t:r}),T.gd=(function(e,t,n){var r=this.im(e.b.length,n);if(r<0)return e;var i=new ha(r);return e.ae(0,i,0,t),i}),T.bb=(function(e){return this.fT(e)}),new O().i(Kp,`scala.collection.mutable.ArrayBuffer$`,{e8:1,a:1,U:1,Y:1,a2:1});var qp;function Jp(){return qp||=new Kp,qp}function Yp(){this.bJ=null,Bf(this,(Jp(),wg(new Tg)))}T=Yp.prototype=new Hf,T.constructor=Yp,new O().i(Yp,`scala.collection.mutable.ArrayBuffer$$anon$1`,{e9:1,bd:1,Q:1,R:1,V:1});function Xp(){this.bG=null,Mf(this,lm())}T=Xp.prototype=new Pf,T.constructor=Xp,new O().i(Xp,`scala.collection.mutable.Buffer$`,{ef:1,dX:1,a:1,U:1,Y:1});var Zp;function Qp(){return Zp||=new Xp,Zp}function $p(e,t){return e.bK=t,e}function em(){this.bK=null}T=em.prototype=new D,T.constructor=em;function tm(){}tm.prototype=T,T.a7=(function(e){return Ru(this,e)}),T.ak=(function(){return this.bK});function nm(){}T=nm.prototype=new D,T.constructor=nm,T.b9=(function(e){return new Sg().cG(e)}),T.aj=(function(){return Bf(new Vf,new Sg)}),T.bb=(function(e){return new Sg().cG(e)}),new O().i(nm,`scala.collection.mutable.ListBuffer$`,{ej:1,a:1,U:1,Y:1,a2:1});var rm;function im(){return rm||=new nm,rm}function am(e,t){this.dg=null,this.fo=null,this.fn=0,this.dg=e,this.fo=t,this.fn=t.a8()|0}T=am.prototype=new jf,T.constructor=am,T.s=(function(){return ml().fF(this.fn,this.fo.a8()|0,`mutation occurred during iteration`),this.dg.s()}),T.q=(function(){return this.dg.q()}),new O().i(am,`scala.collection.mutable.MutationTracker$CheckedIterator`,{el:1,I:1,b:1,c:1,J:1});function om(e){this.fs=null,this.bN=0,this.fr=0,this.fs=e,this.bN=0,this.fr=e.aa()}T=om.prototype=new jf,T.constructor=om,T.s=(function(){return this.bN<this.fr}),T.q=(function(){var e=this.fs.ab(this.bN);return this.bN=1+this.bN|0,e}),new O().i(om,`scala.runtime.ScalaRunTime$$anon$1`,{eE:1,I:1,b:1,c:1,J:1});function sm(){}T=sm.prototype=new D,T.constructor=sm,T.b9=(function(e){return this.fU(e)}),T.aj=(function(){return Dg(new Og)}),T.fU=(function(e){return Ru(Dg(new Og),e).ak()}),T.bb=(function(e){return this.fU(e)}),new O().i(sm,`scala.scalajs.js.WrappedArray$`,{eK:1,a2:1,a:1,U:1,Y:1});var cm;function lm(){return cm||=new sm,cm}function um(){}T=um.prototype=new D,T.constructor=um,T.b9=(function(e){return this.fV(e)}),T.fV=(function(e){return this.aj().a7(e).ak()}),T.aj=(function(){return new zf(new G((e=>new Q(e.aR))),Eg(new Og,[]))}),T.bb=(function(e){return this.fV(e)}),new O().i(um,`scala.scalajs.runtime.WrappedVarArgs$`,{eV:1,a2:1,a:1,U:1,Y:1});var dm;function fm(){return dm||=new um,dm}var pm=class e extends Zu{constructor(e){super(),this.bv=null,this.bv=e,ju(this,`ObserverError: `+ed().cA(e),null,!0,!0)}bd(){return new Ep(this)}t(){return V().fD(this,-889275714,null)}k(t){if(this===t)return!0;if(t instanceof e){var n=this.bv,r=t.bv;return n===null?r===null:n.k(r)}return!1}aa(){return 1}ac(){return`ObserverError`}ab(e){if(e===0)return this.bv;throw up(new fp,``+e)}w(){return`ObserverError: `+this.bv}};new O().i(pm,`com.raquo.airstream.core.AirstreamError$ObserverError`,{ag:1,a8:1,r:1,a:1,d:1,T:1});var mm=class e extends Zu{constructor(e,t){super(),this.bx=null,this.bw=null,this.bx=e,this.bw=t,ju(this,`ObserverErrorHandlingError: `+ed().cA(e)+`; cause: `+ed().cA(t),null,!0,!0),this.hS(t)}bd(){return new Ep(this)}t(){return V().fD(this,-889275714,null)}k(t){if(this===t)return!0;if(t instanceof e){var n=this.bx,r=t.bx;if(n===null?r===null:n.k(r)){var i=this.bw,a=t.bw;return i===null?a===null:i.k(a)}return!1}return!1}aa(){return 2}ac(){return`ObserverErrorHandlingError`}ab(e){if(e===0)return this.bx;if(e===1)return this.bw;throw up(new fp,``+e)}w(){return`ObserverErrorHandlingError: `+this.bx+`; cause: `+this.bw}};new O().i(mm,`com.raquo.airstream.core.AirstreamError$ObserverErrorHandlingError`,{ah:1,a8:1,r:1,a:1,d:1,T:1});var hm=class e extends Zu{constructor(e,t){super(),this.bg=null,this.bf=0,this.bg=e,this.bf=t,ju(this,`Transaction depth exceeded maxDepth = `+t+`: Execution of `+e+" aborted. See `Transaction.maxDepth`.",null,!0,!0)}bd(){return new Ep(this)}t(){var e=-889275714;return e=R().u(e,Em(`TransactionDepthExceeded`)),e=R().u(e,R().A(this.bg)),e=R().u(e,this.bf),R().E(e,2)}k(t){if(this===t)return!0;if(t instanceof e){if(this.bf===t.bf){var n=this.bg,r=t.bg;return n===null?r===null:n===r}return!1}return!1}aa(){return 2}ac(){return`TransactionDepthExceeded`}ab(e){if(e===0)return this.bg;if(e===1)return this.bf;throw up(new fp,``+e)}w(){return`TransactionDepthExceeded: `+this.bg+`; maxDepth: `+this.bf}};new O().i(hm,`com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded`,{ai:1,a8:1,r:1,a:1,d:1,T:1});function gm(e,t){this.cm=null,this.am=null,this.cY=null,this.b3=null,this.e6=null,this.ag=null,this.e6=e,this.ag=t,this.cm=Y(),eu(this),qf(this)}T=gm.prototype=new D,T.constructor=gm,T.ah=(function(e){ms().cv(e,this,void 0)}),T.cz=(function(){return this.am}),T.fH=(function(e){this.am=e}),T.gl=(function(e){Zf(this,e)}),T.gg=(function(e){Qf(this,e)}),T.w=(function(){return`ReactiveHtmlElement(`+(this.ag===null?`tag=`+this.e6.dr():this.ag.outerHTML)+`)`}),T.be=(function(){return this.ag}),new O().i(gm,`com.raquo.laminar.nodes.ReactiveHtmlElement`,{cB:1,a9:1,S:1,am:1,an:1,cz:1});function _m(e,t){return Object.is(e,t)}function vm(e){var t=e|0;if(t===e&&1/e!=-1/0)return t;if(e!==e)return 2146959360;var n=ta;return n.setFloat64(0,e,!0),(n.getInt32(0,!0)|0)^(n.getInt32(4,!0)|0)}var ym=new O().i(0,`java.lang.Double`,{av:1,X:1,a:1,P:1,N:1,a1:1},(e=>typeof e==`number`)),bm=new O().i(0,`java.lang.Float`,{d2:1,X:1,a:1,P:1,N:1,a1:1},(e=>la(e))),xm=new O().i(0,`java.lang.Integer`,{d5:1,X:1,a:1,P:1,N:1,a1:1},(e=>ca(e)));function Sm(e,t,n){if(n instanceof Ki){var r=n,i=r.l,a=r.h;return(e^i|t^a)===0}return!1}function Cm(e,t){return e^t}var wm=new O().i(0,`java.lang.Long`,{ax:1,X:1,a:1,P:1,N:1,a1:1},(e=>e instanceof Ki)),Tm=class extends cp{constructor(e){super(),ju(this,e,null,!0,!0)}};new O().i(Tm,`java.lang.NumberFormatException`,{db:1,aw:1,G:1,y:1,r:1,a:1});function Em(e){for(var t=e.length,n=0,r=0;r!==t;)n=((n<<5)-n|0)+e.charCodeAt(r)|0,r=1+r|0;return n}function Dm(e,t){return e===t}var Om=new O().i(0,`java.lang.String`,{dg:1,a:1,P:1,ab:1,N:1,a1:1},(e=>typeof e==`string`));function km(){}T=km.prototype=new Tp,T.constructor=km,T.t=(function(){return 2433880}),T.w=(function(){return`None`}),T.aa=(function(){return 0}),T.ac=(function(){return`None`}),T.ab=(function(e){throw dp(new fp,e)}),T.hI=(function(){throw new bp(`None.get`)}),T.z=(function(){this.hI()}),new O().i(km,`scala.None$`,{dE:1,aB:1,b:1,d:1,T:1,a:1});var Am;function Y(){return Am||=new km,Am}function X(e){this.bq=null,this.bq=e}T=X.prototype=new Tp,T.constructor=X,T.t=(function(){return V().gc(this,1323286827,!0)}),T.k=(function(e){return this===e||e instanceof X&&_l().O(this.bq,e.bq)}),T.w=(function(){return L().gA(this)}),T.aa=(function(){return 1}),T.ac=(function(){return`Some`}),T.ab=(function(e){if(e===0)return this.bq;throw dp(new fp,e)}),T.z=(function(){return this.bq}),new O().i(X,`scala.Some`,{aC:1,aB:1,b:1,d:1,T:1,a:1});function jm(){}T=jm.prototype=new D,T.constructor=jm;function Mm(){}Mm.prototype=T,T.x=(function(){return-1}),T.au=(function(e){Jc(this,e)}),T.aW=(function(e,t,n){return Yc(this,e,t,n)}),T.bt=(function(e,t,n,r){return Zc(this,e,t,n,r)}),T.aV=(function(){return this.av()});function Z(e){this.cp=null,this.an=0,this.bC=0,this.cp=e,this.an=0,this.bC=Cc().a9(this.cp)}T=Z.prototype=new jf,T.constructor=Z,T.x=(function(){return this.bC-this.an|0}),T.s=(function(){return this.an<this.bC}),T.q=(function(){this.an>=Cc().a9(this.cp)&&qd().K.q();var e=L().ba(this.cp,this.an);return this.an=1+this.an|0,e}),T.cy=(function(e){if(e>0){var t=this.an+e|0;if(t<0)var n=this.bC;else var r=this.bC,n=r<t?r:t;this.an=n}return this}),new O().i(Z,`scala.collection.ArrayOps$ArrayIterator`,{dM:1,I:1,b:1,c:1,J:1,a:1});function Nm(e,t){return e.dc=t,e.ao=0,e.J=t.j(),e}function Pm(e,t){return t<0?0:t>e.J?e.J:t}function Fm(){this.dc=null,this.ao=0,this.J=0}T=Fm.prototype=new jf,T.constructor=Fm;function Im(){}Im.prototype=T,T.x=(function(){return this.J}),T.s=(function(){return this.J>0}),T.q=(function(){if(this.J>0){var e=this.dc.r(this.ao);return this.ao=1+this.ao|0,this.J=this.J-1|0,e}return qd().K.q()}),T.cy=(function(e){if(e>0){this.ao=this.ao+e|0;var t=this.J-e|0;this.J=t<0?0:t}return this}),T.c8=(function(e,t){var n=Pm(this,e),r=Pm(this,t)-n|0;return this.J=r<0?0:r,this.ao=this.ao+n|0,this}),new O().i(Fm,`scala.collection.IndexedSeqView$IndexedSeqViewIterator`,{aJ:1,I:1,b:1,c:1,J:1,a:1});function Lm(){this.bK=null,$p(this,qd().K)}T=Lm.prototype=new tm,T.constructor=Lm,T.gH=(function(e){return this.bK=this.bK.dm(new Zd((()=>new jp(e)))),this}),T.a1=(function(e){return this.gH(e)}),new O().i(Lm,`scala.collection.Iterator$$anon$21`,{dT:1,ei:1,Q:1,R:1,V:1,a7:1});function Rm(e){return e.fa||=(e.f9=new Zh(new(Qd.r()).C(0)),!0),e.f9}function zm(){this.fb=null,this.f9=null,this.fa=!1,Bm=this,this.fb=new Dp(this)}T=zm.prototype=new D,T.constructor=zm,T.hF=(function(e,t){return e instanceof Bh?e:this.dx(Ic().fR(e,t))}),T.g5=(function(e){return new zf(new G((t=>this.dx(Qc(t,e)))),(Jp(),new Yp))}),T.dx=(function(e){if(e===null)return null;if(e instanceof ha)return new Zh(e);if(e instanceof xa)return new Yh(e);if(e instanceof wa)return new qh(e);if(e instanceof Sa)return new Xh(e);if(e instanceof Ca)return new Jh(e);if(e instanceof va)return new Kh(e);if(e instanceof ya)return new Gh(e);if(e instanceof ba)return new Qh(e);if(e instanceof _a)return new Wh(e);if(vc(e,1))return new $h(e);throw new Cp(e)}),T.dn=(function(e,t){return this.hF(e,t)}),new O().i(zm,`scala.collection.immutable.ArraySeq$`,{e3:1,a:1,aH:1,aF:1,aG:1,aN:1});var Bm;function Vm(){return Bm||=new zm,Bm}function Hm(e){return e.ff=0,e.fg=0,e}function Um(){this.ff=0,this.fg=0}T=Um.prototype=new D,T.constructor=Um;function Wm(){}Wm.prototype=T;function Gm(){this.fj=null,this.fi=null,Km=this,this.fj=new Dp(this),this.fi=new dg(new ha(0))}T=Gm.prototype=new D,T.constructor=Gm,T.hG=(function(e,t){return this.g3(Ic().fR(e,t))}),T.g5=(function(e){return new zf(new G((e=>this.g3(e))),new Zm(e.cE()))}),T.g3=(function(e){if(e===null)return null;if(e instanceof ha)return new dg(e);if(e instanceof xa)return new lg(e);if(e instanceof wa)return new sg(e);if(e instanceof Sa)return new ug(e);if(e instanceof Ca)return new cg(e);if(e instanceof va)return new og(e);if(e instanceof ya)return new ag(e);if(e instanceof ba)return new fg(e);if(e instanceof _a)return new ig(e);if(vc(e,1))return new pg(e);throw new Cp(e)}),T.dn=(function(e,t){return this.hG(e,t)}),new O().i(Gm,`scala.collection.mutable.ArraySeq$`,{ee:1,a:1,aH:1,aF:1,aG:1,aN:1});var Km;function qm(){return Km||=new Gm,Km}function Jm(){}T=Jm.prototype=new rp,T.constructor=Jm;function Ym(){}Ym.prototype=T;function Xm(e){return e.aV()+`(<not computed>)`}function Zm(e){this.ff=0,this.fg=0,this.bs=null,this.fh=!1,this.df=null,this.bs=e,Hm(this),this.fh=e===Oa.l(),this.df=[]}T=Zm.prototype=new Wm,T.constructor=Zm,T.fB=(function(e){var t=this.fh?fa(e):e===null?dl().dv(this.bs):e;return this.df.push(t),this}),T.gB=(function(e){for(var t=e.i();t.s();)this.fB(t.q());return this}),T.ak=(function(){return dl().du(this.bs===Ea.l()?yc.l():this.bs===vl.l()||this.bs===Qd.l()?Ta.l():this.bs,this.df)}),T.w=(function(){return`ArrayBuilder.generic`}),T.a1=(function(e){return this.fB(e)}),T.a7=(function(e){return this.gB(e)}),new O().i(Zm,`scala.collection.mutable.ArrayBuilder$generic`,{ed:1,eb:1,Q:1,R:1,V:1,a7:1,a:1});function Qm(e,t){this.dc=null,this.ao=0,this.J=0,this.fm=null,this.fl=0,this.fm=t,Nm(this,e),this.fl=t.a8()|0}T=Qm.prototype=new Im,T.constructor=Qm,T.s=(function(){return ml().fF(this.fl,this.fm.a8()|0,`mutation occurred during iteration`),this.J>0}),new O().i(Qm,`scala.collection.mutable.CheckedIndexedSeqView$CheckedIterator`,{eh:1,aJ:1,I:1,b:1,c:1,J:1,a:1});function $m(){}T=$m.prototype=new D,T.constructor=$m;function eh(){}eh.prototype=T;var th=class e extends Tf{constructor(e){super(),this.a6=null,this.a6=e,ju(this,null,null,!0,!0)}c2(){return Zi(this.a6)}ac(){return`JavaScriptException`}aa(){return 1}ab(e){return e===0?this.a6:R().hT(e)}bd(){return new om(this)}t(){return V().gc(this,1744042595,!0)}k(t){return this===t||t instanceof e&&_l().O(this.a6,t.a6)}};new O().i(th,`scala.scalajs.js.JavaScriptException`,{bo:1,G:1,y:1,r:1,a:1,T:1,d:1});function nh(e,t){typeof console<`u`&&(e.eT&&console.error?console.error(t):console.log(t))}function rh(e){this.eT=!1,this.bz=null,this.eT=e,new pp,this.bz=``}T=rh.prototype=new Ym,T.constructor=rh,T.c3=(function(e){for(var t=e;t!==``;){var n=t.indexOf(`
`)|0;if(n<0)this.bz=``+this.bz+t,t=``;else{var r=this.bz,i=t;nh(this,``+r+i.substring(0,n)),this.bz=``;var a=t,o=1+n|0;t=a.substring(o)}}}),new O().i(rh,`java.lang.JSConsoleBasedPrintStream`,{d7:1,cV:1,cU:1,ar:1,ap:1,at:1,aq:1,as:1});function ih(e,t,n){for(var r=n,i=t;;)if(i<=0||r.g())return r;else{var a=i-1|0,o=r.F();i=a,r=o}}function ah(){this.bL=null}T=ah.prototype=new eh,T.constructor=ah;function oh(){}oh.prototype=T,T.w=(function(){return this.bL}),T.k=(function(e){return this===e}),T.t=(function(){return aa(this)});function sh(){}T=sh.prototype=new Mm,T.constructor=sh;function ch(){}ch.prototype=T,T.w=(function(){return Xm(this)});function lh(){this.bL=null,this.bL=`Any`,$()}T=lh.prototype=new oh,T.constructor=lh,T.cE=(function(){return Ta.l()}),T.ds=(function(e){return new ha(e)}),new O().i(lh,`scala.reflect.ManifestFactory$AnyManifest$`,{er:1,bk:1,bj:1,a:1,bl:1,bg:1,d:1,bh:1,bi:1});var uh;function dh(){return uh||=new lh,uh}function fh(){this.bL=null,this.bL=`Object`,$()}T=fh.prototype=new oh,T.constructor=fh,T.cE=(function(){return Ta.l()}),T.ds=(function(e){return new ha(e)}),new O().i(fh,`scala.reflect.ManifestFactory$ObjectManifest$`,{es:1,bk:1,bj:1,a:1,bl:1,bg:1,d:1,bh:1,bi:1});var ph;function mh(){return ph||=new fh,ph}function hh(e,t){return e===t?!0:gh(t)&&t.dl(e)?e.cF(t):!1}function gh(e){return!!(e&&e.$classData&&e.$classData.n.i)}function _h(){}T=_h.prototype=new Mm,T.constructor=_h;function vh(){}vh.prototype=T,T.g2=(function(e){return Ff(this,e)}),T.a4=(function(e){return Vd(this,e)}),T.g=(function(){return If(this)}),T.cF=(function(e){return Lf(this,e)}),T.dl=(function(e){return!0}),T.k=(function(e){return hh(this,e)}),T.t=(function(){return V().ge(this)}),T.w=(function(){return Op(this)}),T.cB=(function(e){return this.g2(e|0)});function yh(){}T=yh.prototype=new ch,T.constructor=yh;function bh(){}bh.prototype=T,T.g=(function(){return If(this)});function xh(e){return!!(e&&e.$classData&&e.$classData.n.n)}function Sh(e){return!!(e&&e.$classData&&e.$classData.n.a5)}function Ch(e,t){return e.bH=t,e}function wh(){this.bH=null}T=wh.prototype=new bh,T.constructor=wh;function Th(){}Th.prototype=T,T.r=(function(e){return this.bH.r(e)}),T.j=(function(){return this.bH.j()}),T.g=(function(){return this.bH.g()});function Eh(){this.dR=null,this.dS=!1,this.dT=null,this.dU=!1,this.gp=null,this.cP=null,this.go=null,this.dV=null,this.dW=!1,Ho(this),Lo(this),Fo(this),Io(this)}T=Eh.prototype=new D,T.constructor=Eh,T.fY=(function(){return this.dS||=(this.dR=tu(new nu,`h3`,!1),!0),this.dR}),T.c9=(function(){return this.dU||=(this.dT=tu(new nu,`span`,!1),!0),this.dT}),T.iw=(function(){return this.dW||=(this.dV=new ff(this),!0),this.dV}),new O().i(Eh,`com.raquo.laminar.api.package$$anon$1`,{bS:1,c4:1,bX:1,c2:1,c1:1,c3:1,bZ:1,bQ:1,bM:1,bP:1,ak:1,al:1,aj:1,bN:1});function Dh(){}T=Dh.prototype=new bh,T.constructor=Dh;function Oh(){}Oh.prototype=T,T.a4=(function(e){var t=this.j();return t===e?0:t<e?-1:1}),T.x=(function(){return this.j()}),T.av=(function(){return`IndexedSeqView`});function kh(e){this.bH=null,Ch(this,e)}T=kh.prototype=new Th,T.constructor=kh,T.a4=(function(e){var t=this.j();return t===e?0:t<e?-1:1}),T.x=(function(){return this.j()}),T.i=(function(){return Nm(new Fm,this)}),T.av=(function(){return`IndexedSeqView`}),new O().i(kh,`scala.collection.IndexedSeqView$Id`,{dP:1,dY:1,aD:1,aE:1,l:1,b:1,c:1,h:1,g:1,f:1,a:1,aP:1,j:1,aM:1,o:1,aI:1});function Ah(){}T=Ah.prototype=new vh,T.constructor=Ah;function jh(){}jh.prototype=T;function Mh(e,t){this.de=null,this.fe=null,this.de=e,this.fe=t}T=Mh.prototype=new Oh,T.constructor=Mh,T.r=(function(e){return this.de.r(e)}),T.j=(function(){return this.de.C}),T.aV=(function(){return`ArrayBufferView`}),T.i=(function(){return new Qm(this,this.fe)}),new O().i(Mh,`scala.collection.mutable.ArrayBufferView`,{ea:1,dK:1,aD:1,aE:1,l:1,b:1,c:1,h:1,g:1,f:1,a:1,aP:1,j:1,aM:1,o:1,aI:1});function Nh(e,t){return!Fh(t)||e.j()===t.j()}function Ph(e,t){if(Fh(t)){if(e===t)return!0;var n=e.j(),r=n===t.j();if(r){var i=0,a=e.dk(),o=t.dk(),s=a<o?a:o,c=n>>31,l=s>>31,u=s<<1,d=s>>>31|0|l<<1;if(c===d?n>>>0>u>>>0:c>d)var f=s;else var f=n;for(;i<f&&r;)r=_l().O(e.r(i),t.r(i)),i=1+i|0;if(i<n&&r)for(var p=e.i().cy(i),m=t.i().cy(i);r&&p.s();)r=_l().O(p.q(),m.q())}return r}return Lf(e,t)}function Fh(e){return!!(e&&e.$classData&&e.$classData.n.z)}function Ih(){}T=Ih.prototype=new vh,T.constructor=Ih;function Lh(){}Lh.prototype=T;function Q(e){this.cu=null,this.cu=e}T=Q.prototype=new D,T.constructor=Q,T.dq=(function(e){return Rf(this,e)}),T.dl=(function(e){return Nh(this,e)}),T.cF=(function(e){return Ph(this,e)}),T.dk=(function(){return cl().fc}),T.i=(function(){return Nm(new Fm,new kh(this))}),T.a4=(function(e){var t=this.j();return t===e?0:t<e?-1:1}),T.x=(function(){return this.j()}),T.k=(function(e){return hh(this,e)}),T.t=(function(){return V().ge(this)}),T.w=(function(){return Op(this)}),T.g=(function(){return If(this)}),T.au=(function(e){Jc(this,e)}),T.aW=(function(e,t,n){return Yc(this,e,t,n)}),T.bt=(function(e,t,n,r){return Zc(this,e,t,n,r)}),T.j=(function(){return this.cu.length|0}),T.r=(function(e){return this.cu[e]}),T.aV=(function(){return`WrappedVarArgs`}),T.cB=(function(e){return Ff(this,e|0)}),T.h=(function(e){return this.r(e|0)}),T.bc=(function(){return fm()}),new O().i(Q,`scala.scalajs.runtime.WrappedVarArgs`,{bp:1,z:1,b:1,c:1,h:1,g:1,f:1,A:1,e:1,k:1,j:1,d:1,i:1,C:1,B:1,o:1,n:1,L:1,D:1,p:1,q:1,a:1});function Rh(){}T=Rh.prototype=new Lh,T.constructor=Rh;function zh(){}zh.prototype=T,T.a7=(function(e){return Ru(this,e)});function Bh(){}T=Bh.prototype=new jh,T.constructor=Bh;function Vh(){}Vh.prototype=T,T.a4=(function(e){var t=this.j();return t===e?0:t<e?-1:1}),T.x=(function(){return this.j()}),T.av=(function(){return`IndexedSeq`}),T.dl=(function(e){return Nh(this,e)}),T.cF=(function(e){return Ph(this,e)}),T.i0=(function(e){for(var t=new ha(this.j()),n=0;n<t.b.length;)t.b[n]=e.h(this.r(n)),n=1+n|0;return Vm().dx(t)}),T.aV=(function(){return`ArraySeq`}),T.aW=(function(e,t,n){var r=this.j(),i=Cc().a9(e),a=n<r?n:r,o=t<0?i:i-t|0,s=o<a?o:a,c=s<0?0:s;return c>0&&Ic().cx(this.al(),0,e,t,c),c}),T.dk=(function(){return 2147483647}),T.bc=(function(){return Vm().fb}),T.dq=(function(e){return this.i0(e)});function Hh(){}T=Hh.prototype=new Lh,T.constructor=Hh;function Uh(){}Uh.prototype=T,T.a4=(function(e){var t=this.j();return t===e?0:t<e?-1:1}),T.x=(function(){return this.j()}),T.av=(function(){return`IndexedSeq`}),T.aV=(function(){return`ArraySeq`}),T.aW=(function(e,t,n){var r=this.j(),i=Cc().a9(e),a=n<r?n:r,o=t<0?i:i-t|0,s=o<a?o:a,c=s<0?0:s;return c>0&&Ic().cx(this.a2(),0,e,t,c),c}),T.k=(function(e){return e instanceof Hh&&Cc().a9(this.a2())!==Cc().a9(e.a2())?!1:hh(this,e)}),T.bc=(function(){return qm().fj});function Wh(e){this.aD=null,this.aD=e}T=Wh.prototype=new Vh,T.constructor=Wh,T.j=(function(){return this.aD.b.length}),T.bX=(function(e){return this.aD.b[e]}),T.t=(function(){var e=V();return e.B(this.aD,e.y)}),T.k=(function(e){return e instanceof Wh?Ec().fP(this.aD,e.aD):hh(this,e)}),T.i=(function(){return new Z(this.aD)}),T.al=(function(){return this.aD}),T.r=(function(e){return this.bX(e)}),T.h=(function(e){return this.bX(e|0)}),new O().i(Wh,`scala.collection.immutable.ArraySeq$ofBoolean`,{aQ:1,K:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,o:1,n:1,L:1,z:1,p:1,q:1,D:1,O:1,a:1});function Gh(e){this.aE=null,this.aE=e}T=Gh.prototype=new Vh,T.constructor=Gh,T.j=(function(){return this.aE.b.length}),T.bP=(function(e){return this.aE.b[e]}),T.t=(function(){var e=V();return e.B(this.aE,e.y)}),T.k=(function(e){return e instanceof Gh?Ec().fK(this.aE,e.aE):hh(this,e)}),T.i=(function(){return new Z(this.aE)}),T.al=(function(){return this.aE}),T.r=(function(e){return this.bP(e)}),T.h=(function(e){return this.bP(e|0)}),new O().i(Gh,`scala.collection.immutable.ArraySeq$ofByte`,{aR:1,K:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,o:1,n:1,L:1,z:1,p:1,q:1,D:1,O:1,a:1});function Kh(e){this.ar=null,this.ar=e}T=Kh.prototype=new Vh,T.constructor=Kh,T.j=(function(){return this.ar.b.length}),T.bQ=(function(e){return this.ar.b[e]}),T.t=(function(){var e=V();return e.B(this.ar,e.y)}),T.k=(function(e){return e instanceof Kh?Ec().fL(this.ar,e.ar):hh(this,e)}),T.i=(function(){return new Z(this.ar)}),T.bt=(function(e,t,n,r){return new og(this.ar).bt(e,t,n,r)}),T.al=(function(){return this.ar}),T.r=(function(e){return ua(this.bQ(e))}),T.h=(function(e){return ua(this.bQ(e|0))}),new O().i(Kh,`scala.collection.immutable.ArraySeq$ofChar`,{aS:1,K:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,o:1,n:1,L:1,z:1,p:1,q:1,D:1,O:1,a:1});function qh(e){this.aF=null,this.aF=e}T=qh.prototype=new Vh,T.constructor=qh,T.j=(function(){return this.aF.b.length}),T.bR=(function(e){return this.aF.b[e]}),T.t=(function(){var e=V();return e.B(this.aF,e.y)}),T.k=(function(e){if(e instanceof qh){var t=this.aF,n=e.aF;if(t===n)return!0;if(t.b.length===n.b.length){for(var r=0;r<t.b.length&&t.b[r]===n.b[r];)r=1+r|0;return r>=t.b.length}return!1}return hh(this,e)}),T.i=(function(){return new Z(this.aF)}),T.al=(function(){return this.aF}),T.r=(function(e){return this.bR(e)}),T.h=(function(e){return this.bR(e|0)}),new O().i(qh,`scala.collection.immutable.ArraySeq$ofDouble`,{aT:1,K:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,o:1,n:1,L:1,z:1,p:1,q:1,D:1,O:1,a:1});function Jh(e){this.aG=null,this.aG=e}T=Jh.prototype=new Vh,T.constructor=Jh,T.j=(function(){return this.aG.b.length}),T.bS=(function(e){return this.aG.b[e]}),T.t=(function(){var e=V();return e.B(this.aG,e.y)}),T.k=(function(e){if(e instanceof Jh){var t=this.aG,n=e.aG;if(t===n)return!0;if(t.b.length===n.b.length){for(var r=0;r<t.b.length&&t.b[r]===n.b[r];)r=1+r|0;return r>=t.b.length}return!1}return hh(this,e)}),T.i=(function(){return new Z(this.aG)}),T.al=(function(){return this.aG}),T.r=(function(e){return this.bS(e)}),T.h=(function(e){return this.bS(e|0)}),new O().i(Jh,`scala.collection.immutable.ArraySeq$ofFloat`,{aU:1,K:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,o:1,n:1,L:1,z:1,p:1,q:1,D:1,O:1,a:1});function Yh(e){this.aH=null,this.aH=e}T=Yh.prototype=new Vh,T.constructor=Yh,T.j=(function(){return this.aH.b.length}),T.bT=(function(e){return this.aH.b[e]}),T.t=(function(){var e=V();return e.B(this.aH,e.y)}),T.k=(function(e){return e instanceof Yh?Ec().fM(this.aH,e.aH):hh(this,e)}),T.i=(function(){return new Z(this.aH)}),T.al=(function(){return this.aH}),T.r=(function(e){return this.bT(e)}),T.h=(function(e){return this.bT(e|0)}),new O().i(Yh,`scala.collection.immutable.ArraySeq$ofInt`,{aV:1,K:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,o:1,n:1,L:1,z:1,p:1,q:1,D:1,O:1,a:1});function Xh(e){this.aI=null,this.aI=e}T=Xh.prototype=new Vh,T.constructor=Xh,T.j=(function(){return this.aI.b.length>>>1|0}),T.bU=(function(e){var t=this.aI.b,n=e<<1;return E(t[n],t[n+1|0])}),T.t=(function(){var e=V();return e.B(this.aI,e.y)}),T.k=(function(e){return e instanceof Xh?Ec().fN(this.aI,e.aI):hh(this,e)}),T.i=(function(){return new Z(this.aI)}),T.al=(function(){return this.aI}),T.r=(function(e){return this.bU(e)}),T.h=(function(e){return this.bU(e|0)}),new O().i(Xh,`scala.collection.immutable.ArraySeq$ofLong`,{aW:1,K:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,o:1,n:1,L:1,z:1,p:1,q:1,D:1,O:1,a:1});function Zh(e){this.aJ=null,this.aJ=e}T=Zh.prototype=new Vh,T.constructor=Zh,T.j=(function(){return this.aJ.b.length}),T.r=(function(e){return this.aJ.b[e]}),T.t=(function(){var e=V();return e.B(this.aJ,e.y)}),T.k=(function(e){return e instanceof Zh?Ic().fQ(this.aJ,e.aJ):hh(this,e)}),T.i=(function(){return new Z(this.aJ)}),T.al=(function(){return this.aJ}),T.h=(function(e){return this.r(e|0)}),new O().i(Zh,`scala.collection.immutable.ArraySeq$ofRef`,{aX:1,K:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,o:1,n:1,L:1,z:1,p:1,q:1,D:1,O:1,a:1});function Qh(e){this.aK=null,this.aK=e}T=Qh.prototype=new Vh,T.constructor=Qh,T.j=(function(){return this.aK.b.length}),T.bV=(function(e){return this.aK.b[e]}),T.t=(function(){var e=V();return e.B(this.aK,e.y)}),T.k=(function(e){return e instanceof Qh?Ec().fO(this.aK,e.aK):hh(this,e)}),T.i=(function(){return new Z(this.aK)}),T.al=(function(){return this.aK}),T.r=(function(e){return this.bV(e)}),T.h=(function(e){return this.bV(e|0)}),new O().i(Qh,`scala.collection.immutable.ArraySeq$ofShort`,{aY:1,K:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,o:1,n:1,L:1,z:1,p:1,q:1,D:1,O:1,a:1});function $h(e){this.b7=null,this.b7=e}T=$h.prototype=new Vh,T.constructor=$h,T.j=(function(){return this.b7.b.length}),T.bW=(function(e){}),T.t=(function(){var e=V();return e.B(this.b7,e.y)}),T.k=(function(e){return e instanceof $h?this.b7.b.length===e.b7.b.length:hh(this,e)}),T.i=(function(){return new Z(this.b7)}),T.al=(function(){return this.b7}),T.r=(function(e){this.bW(e)}),T.h=(function(e){this.bW(e|0)}),new O().i($h,`scala.collection.immutable.ArraySeq$ofUnit`,{aZ:1,K:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,o:1,n:1,L:1,z:1,p:1,q:1,D:1,O:1,a:1});function eg(e,t,n,r){for(var i=r,a=n;;)if(a===t)return!i.g()|0;else{if(!i.g()){var o=1+a|0,s=i.F();a=o,i=s;continue}return-1}}function tg(e,t,n){for(var r=n,i=t;;)if(i===r)return!0;else{var a=i.g(),o=r.g();if(!(a||o)&&_l().O(i.P(),r.P())){var s=i.F(),c=r.F();i=s,r=c;continue}return a&&o}}function ng(){}T=ng.prototype=new jh,T.constructor=ng;function rg(){}rg.prototype=T,T.g2=(function(e){return Rp(this,e)}),T.r=(function(e){return zp(this,e)}),T.cF=(function(e){return Bp(this,e)}),T.av=(function(){return`LinearSeq`}),T.i=(function(){return new Hp(this)}),T.gz=(function(e){if(this.g())return e;if(e.g())return this;for(var t=new mg(e.P(),this),n=t,r=e.F();!r.g();){var i=new mg(r.P(),this);n.aq=i,n=i,r=r.F()}return t}),T.g=(function(){return this===$()}),T.gb=(function(e){if(e instanceof ng)return this.gz(e);if(e.x()===0)return this;if(e instanceof Sg&&this.g())return e.gi();var t=e.i();if(t.s()){for(var n=new mg(t.q(),this),r=n;t.s();){var i=new mg(t.q(),this);r.aq=i,r=i}return n}return this}),T.i1=(function(e){if(this===$())var t=$();else{for(var n=new mg(e.h(this.P()),$()),r=n,i=this.F();i!==$();){var a=new mg(e.h(i.P()),$());r.aq=a,r=a,i=i.F()}var t=n}return t}),T.au=(function(e){for(var t=this;!t.g();)e.h(t.P()),t=t.F()}),T.j=(function(){for(var e=this,t=0;!e.g();)t=1+t|0,e=e.F();return t}),T.a4=(function(e){return e<0?1:eg(this,e,0,this)}),T.aV=(function(){return`List`}),T.k=(function(e){return e instanceof ng?tg(this,this,e):hh(this,e)}),T.bc=(function(){return Gp()}),T.dq=(function(e){return this.i1(e)}),T.hi=(function(e){return ih(this,e,this)}),T.cB=(function(e){return Rp(this,e|0)}),T.h=(function(e){return zp(this,e|0)});function ig(e){this.aL=null,this.aL=e}T=ig.prototype=new Uh,T.constructor=ig,T.j=(function(){return this.aL.b.length}),T.bX=(function(e){return this.aL.b[e]}),T.t=(function(){var e=V();return e.B(this.aL,e.y)}),T.k=(function(e){return e instanceof ig?Ec().fP(this.aL,e.aL):Hh.prototype.k.call(this,e)}),T.i=(function(){return new Z(this.aL)}),T.a2=(function(){return this.aL}),T.r=(function(e){return this.bX(e)}),T.h=(function(e){return this.bX(e|0)}),new O().i(ig,`scala.collection.mutable.ArraySeq$ofBoolean`,{b3:1,M:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,s:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function ag(e){this.aM=null,this.aM=e}T=ag.prototype=new Uh,T.constructor=ag,T.j=(function(){return this.aM.b.length}),T.bP=(function(e){return this.aM.b[e]}),T.t=(function(){var e=V();return e.B(this.aM,e.y)}),T.k=(function(e){return e instanceof ag?Ec().fK(this.aM,e.aM):Hh.prototype.k.call(this,e)}),T.i=(function(){return new Z(this.aM)}),T.a2=(function(){return this.aM}),T.r=(function(e){return this.bP(e)}),T.h=(function(e){return this.bP(e|0)}),new O().i(ag,`scala.collection.mutable.ArraySeq$ofByte`,{b4:1,M:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,s:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function og(e){this.W=null,this.W=e}T=og.prototype=new Uh,T.constructor=og,T.j=(function(){return this.W.b.length}),T.bQ=(function(e){return this.W.b[e]}),T.t=(function(){var e=V();return e.B(this.W,e.y)}),T.k=(function(e){return e instanceof og?Ec().fL(this.W,e.W):Hh.prototype.k.call(this,e)}),T.i=(function(){return new Z(this.W)}),T.bt=(function(e,t,n,r){var i=e.M;t.length!==0&&(i.v=``+i.v+t);var a=this.W.b.length;if(a!==0){if(n===``)i.gP(this.W);else{i.j();var o=this.W.b[0],s=``+ea(o);i.v+=s;for(var c=1;c<a;){i.v=``+i.v+n;var l=this.W.b[c],u=``+ea(l);i.v+=u,c=1+c|0}}}return r.length!==0&&(i.v=``+i.v+r),e}),T.a2=(function(){return this.W}),T.r=(function(e){return ua(this.bQ(e))}),T.h=(function(e){return ua(this.bQ(e|0))}),new O().i(og,`scala.collection.mutable.ArraySeq$ofChar`,{b5:1,M:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,s:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function sg(e){this.X=null,this.X=e}T=sg.prototype=new Uh,T.constructor=sg,T.j=(function(){return this.X.b.length}),T.bR=(function(e){return this.X.b[e]}),T.t=(function(){var e=V();return e.B(this.X,e.y)}),T.k=(function(e){if(e instanceof sg){var t=e.X;if(this.X===t)return!0;if(this.X.b.length===t.b.length){for(var n=0;n<this.X.b.length&&this.X.b[n]===t.b[n];)n=1+n|0;return n>=this.X.b.length}return!1}return Hh.prototype.k.call(this,e)}),T.i=(function(){return new Z(this.X)}),T.a2=(function(){return this.X}),T.r=(function(e){return this.bR(e)}),T.h=(function(e){return this.bR(e|0)}),new O().i(sg,`scala.collection.mutable.ArraySeq$ofDouble`,{b6:1,M:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,s:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function cg(e){this.Y=null,this.Y=e}T=cg.prototype=new Uh,T.constructor=cg,T.j=(function(){return this.Y.b.length}),T.bS=(function(e){return this.Y.b[e]}),T.t=(function(){var e=V();return e.B(this.Y,e.y)}),T.k=(function(e){if(e instanceof cg){var t=e.Y;if(this.Y===t)return!0;if(this.Y.b.length===t.b.length){for(var n=0;n<this.Y.b.length&&this.Y.b[n]===t.b[n];)n=1+n|0;return n>=this.Y.b.length}return!1}return Hh.prototype.k.call(this,e)}),T.i=(function(){return new Z(this.Y)}),T.a2=(function(){return this.Y}),T.r=(function(e){return this.bS(e)}),T.h=(function(e){return this.bS(e|0)}),new O().i(cg,`scala.collection.mutable.ArraySeq$ofFloat`,{b7:1,M:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,s:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function lg(e){this.aN=null,this.aN=e}T=lg.prototype=new Uh,T.constructor=lg,T.j=(function(){return this.aN.b.length}),T.bT=(function(e){return this.aN.b[e]}),T.t=(function(){var e=V();return e.B(this.aN,e.y)}),T.k=(function(e){return e instanceof lg?Ec().fM(this.aN,e.aN):Hh.prototype.k.call(this,e)}),T.i=(function(){return new Z(this.aN)}),T.a2=(function(){return this.aN}),T.r=(function(e){return this.bT(e)}),T.h=(function(e){return this.bT(e|0)}),new O().i(lg,`scala.collection.mutable.ArraySeq$ofInt`,{b8:1,M:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,s:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function ug(e){this.aO=null,this.aO=e}T=ug.prototype=new Uh,T.constructor=ug,T.j=(function(){return this.aO.b.length>>>1|0}),T.bU=(function(e){var t=this.aO.b,n=e<<1;return E(t[n],t[n+1|0])}),T.t=(function(){var e=V();return e.B(this.aO,e.y)}),T.k=(function(e){return e instanceof ug?Ec().fN(this.aO,e.aO):Hh.prototype.k.call(this,e)}),T.i=(function(){return new Z(this.aO)}),T.a2=(function(){return this.aO}),T.r=(function(e){return this.bU(e)}),T.h=(function(e){return this.bU(e|0)}),new O().i(ug,`scala.collection.mutable.ArraySeq$ofLong`,{b9:1,M:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,s:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function dg(e){this.aP=null,this.aP=e}T=dg.prototype=new Uh,T.constructor=dg,T.j=(function(){return this.aP.b.length}),T.r=(function(e){return this.aP.b[e]}),T.t=(function(){var e=V();return e.B(this.aP,e.y)}),T.k=(function(e){return e instanceof dg?Ic().fQ(this.aP,e.aP):Hh.prototype.k.call(this,e)}),T.i=(function(){return new Z(this.aP)}),T.a2=(function(){return this.aP}),T.h=(function(e){return this.r(e|0)}),new O().i(dg,`scala.collection.mutable.ArraySeq$ofRef`,{ba:1,M:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,s:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function fg(e){this.aQ=null,this.aQ=e}T=fg.prototype=new Uh,T.constructor=fg,T.j=(function(){return this.aQ.b.length}),T.bV=(function(e){return this.aQ.b[e]}),T.t=(function(){var e=V();return e.B(this.aQ,e.y)}),T.k=(function(e){return e instanceof fg?Ec().fO(this.aQ,e.aQ):Hh.prototype.k.call(this,e)}),T.i=(function(){return new Z(this.aQ)}),T.a2=(function(){return this.aQ}),T.r=(function(e){return this.bV(e)}),T.h=(function(e){return this.bV(e|0)}),new O().i(fg,`scala.collection.mutable.ArraySeq$ofShort`,{bb:1,M:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,s:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function pg(e){this.b8=null,this.b8=e}T=pg.prototype=new Uh,T.constructor=pg,T.j=(function(){return this.b8.b.length}),T.bW=(function(e){}),T.t=(function(){var e=V();return e.B(this.b8,e.y)}),T.k=(function(e){return e instanceof pg?this.b8.b.length===e.b8.b.length:Hh.prototype.k.call(this,e)}),T.i=(function(){return new Z(this.b8)}),T.a2=(function(){return this.b8}),T.r=(function(e){this.bW(e)}),T.h=(function(e){this.bW(e|0)}),new O().i(pg,`scala.collection.mutable.ArraySeq$ofUnit`,{bc:1,M:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,s:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function mg(e,t){this.dd=null,this.aq=null,this.dd=e,this.aq=t}T=mg.prototype=new rg,T.constructor=mg,T.bd=(function(){return new Ep(this)}),T.aa=(function(){return 2}),T.ac=(function(){return`::`}),T.ab=(function(e){if(e===0)return this.dd;if(e===1)return this.aq;throw dp(new fp,e)}),T.P=(function(){return this.dd}),T.F=(function(){return this.aq}),new O().i(mg,`scala.collection.immutable.$colon$colon`,{e2:1,ac:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,aL:1,a5:1,b1:1,b0:1,p:1,q:1,aO:1,D:1,a:1,a6:1,T:1});function hg(){gg=this,$(),$()}T=hg.prototype=new rg,T.constructor=hg,T.bd=(function(){return new Ep(this)}),T.aa=(function(){return 0}),T.ac=(function(){return`Nil`}),T.ab=(function(e){throw dp(new fp,e)}),T.hP=(function(){throw new bp(`head of empty list`)}),T.iz=(function(){throw new vp(`tail of empty list`)}),T.x=(function(){return 0}),T.i=(function(){return qd().K}),T.P=(function(){this.hP()}),T.F=(function(){this.iz()}),new O().i(hg,`scala.collection.immutable.Nil$`,{e7:1,ac:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,aL:1,a5:1,b1:1,b0:1,p:1,q:1,aO:1,D:1,a:1,a6:1,T:1});var gg;function $(){return gg||=new hg,gg}function _g(e,t){return e.M=t,e}function vg(e){return _g(e,new Ef),e}function yg(){this.M=null}T=yg.prototype=new Lh,T.constructor=yg,T.a7=(function(e){return Ru(this,e)}),T.i=(function(){return Nm(new Fm,new kh(this))}),T.a4=(function(e){var t=this.M.j();return t===e?0:t<e?-1:1}),T.av=(function(){return`IndexedSeq`}),T.j=(function(){return this.M.j()}),T.x=(function(){return this.M.j()}),T.gG=(function(e){var t=this.M,n=``+ea(e);return t.v+=n,this}),T.w=(function(){return this.M.v}),T.g=(function(){return this.M.j()===0}),T.r=(function(e){return ua(this.M.fE(e))}),T.h=(function(e){var t=e|0;return ua(this.M.fE(t))}),T.a1=(function(e){return this.gG(fa(e))}),T.ak=(function(){return this.M.v}),new O().i(yg,`scala.collection.mutable.StringBuilder`,{em:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,s:1,u:1,x:1,w:1,Q:1,R:1,V:1,a7:1,o:1,n:1,F:1,E:1,ab:1,a:1});function bg(e){var t=new Sg().cG(e);e.Z=t.Z,e.at=t.at,e.cr=!1}function xg(e){e.cs=1+e.cs|0,e.cr&&bg(e)}function Sg(){this.cs=0,this.Z=null,this.at=null,this.cr=!1,this.a0=0,this.cs=0,this.Z=$(),this.at=null,this.cr=!1,this.a0=0}T=Sg.prototype=new zh,T.constructor=Sg,T.i=(function(){return new am(this.Z.i(),new Zd((()=>this.cs)))}),T.r=(function(e){return zp(this.Z,e)}),T.j=(function(){return this.a0}),T.x=(function(){return this.a0}),T.g=(function(){return this.a0===0}),T.gi=(function(){return this.cr=!this.g(),this.Z}),T.gL=(function(e){xg(this);var t=new mg(e,$());if(this.a0===0)this.Z=t;else{var n=this.at;n===null&&xl().bu(),n.aq=t}return this.at=t,this.a0=1+this.a0|0,this}),T.cG=(function(e){var t=e.i();if(t.s()){var n=1,r=new mg(t.q(),$());for(this.Z=r;t.s();){var i=new mg(t.q(),$());r.aq=i,r=i,n=1+n|0}this.a0=n,this.at=r}return this}),T.gE=(function(e){var t=e.i();if(t.s()){var n=new Sg().cG(t);if(xg(this),this.a0===0)this.Z=n.Z;else{var r=this.at;r===null&&xl().bu(),r.aq=n.Z}this.at=n.at,this.a0=this.a0+n.a0|0}return this}),T.av=(function(){return`ListBuffer`}),T.bc=(function(){return im()}),T.h=(function(e){var t=e|0;return zp(this.Z,t)}),T.ak=(function(){return this.gi()}),T.a1=(function(e){return this.gL(e)}),T.a7=(function(e){return this.gE(e)}),new O().i(Sg,`scala.collection.mutable.ListBuffer`,{bf:1,ad:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,s:1,u:1,x:1,w:1,Q:1,R:1,af:1,ae:1,p:1,q:1,V:1,a7:1,a:1,a6:1});function Cg(e,t,n){return e.br=0,e.as=t,e.C=n,e}function wg(e){return Cg(e,new ha(16),0),e}function Tg(){this.br=0,this.as=null,this.C=0}T=Tg.prototype=new zh,T.constructor=Tg,T.i=(function(){return this.iF().i()}),T.a4=(function(e){var t=this.C;return t===e?0:t<e?-1:1}),T.x=(function(){return this.C}),T.fJ=(function(e){this.as=Jp().gd(this.as,this.C,e)}),T.r=(function(e){var t=1+e|0;if(e<0)throw al().g1(e,this.C-1|0);if(t>this.C)throw al().g1(t-1|0,this.C-1|0);return this.as.b[e]}),T.j=(function(){return this.C}),T.iF=(function(){return new Mh(this,new Zd((()=>this.br)))}),T.gI=(function(e){this.br=1+this.br|0;var t=1+this.C|0;return this.as.b.length<=(t-1|0)&&this.fJ(t),this.C=t,this.as.b[t-1|0]=e,this}),T.fA=(function(e){if(e instanceof Tg){var t=e.C;t>0&&(this.br=1+this.br|0,this.fJ(this.C+t|0),Ic().cx(e.as,0,this.as,this.C,t),this.C=this.C+t|0)}else Ru(this,e);return this}),T.av=(function(){return`ArrayBuffer`}),T.aW=(function(e,t,n){var r=this.C,i=Cc().a9(e),a=n<r?n:r,o=t<0?i:i-t|0,s=o<a?o:a,c=s<0?0:s;return c>0&&Ic().cx(this.as,0,e,t,c),c}),T.h=(function(e){return this.r(e|0)}),T.bc=(function(){return Jp()}),T.a1=(function(e){return this.gI(e)}),T.a7=(function(e){return this.fA(e)}),new O().i(Tg,`scala.collection.mutable.ArrayBuffer`,{b2:1,ad:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,s:1,u:1,x:1,w:1,Q:1,R:1,af:1,ae:1,o:1,n:1,F:1,E:1,be:1,p:1,q:1,a:1,a6:1});function Eg(e,t){return e.aR=t,e}function Dg(e){return Eg(e,[]),e}function Og(){this.aR=null}T=Og.prototype=new zh,T.constructor=Og,T.av=(function(){return`IndexedSeq`}),T.i=(function(){return Nm(new Fm,new kh(this))}),T.a4=(function(e){var t=this.aR.length|0;return t===e?0:t<e?-1:1}),T.r=(function(e){return this.aR[e]}),T.j=(function(){return this.aR.length|0}),T.x=(function(){return this.aR.length|0}),T.aV=(function(){return`WrappedArray`}),T.ak=(function(){return this}),T.a1=(function(e){return this.aR.push(e),this}),T.h=(function(e){var t=e|0;return this.aR[t]}),T.bc=(function(){return lm()}),new O().i(Og,`scala.scalajs.js.WrappedArray`,{eJ:1,ad:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,s:1,u:1,x:1,w:1,Q:1,R:1,af:1,ae:1,q:1,p:1,E:1,o:1,n:1,F:1,be:1,V:1,a:1}),Ss(new(Om.r()).C([]));