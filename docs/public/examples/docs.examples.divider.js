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
const f=globalThis,p=f.ShadowRoot&&(f.ShadyCSS===void 0||f.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,m=Symbol(),h=/* @__PURE__ */ new WeakMap;var g=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==m)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(p&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=h.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&h.set(t,e))}return e}toString(){return this.cssText}};const _=e=>new g(typeof e==`string`?e:e+``,void 0,m),v=(e,...t)=>new g(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,m),y=(e,t)=>{if(p)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=f.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},b=p?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return _(t)})(e):e,{is:x,defineProperty:ee,getOwnPropertyDescriptor:S,getOwnPropertyNames:te,getOwnPropertySymbols:ne,getPrototypeOf:re}=Object,ie=globalThis,ae=ie.trustedTypes,oe=ae?ae.emptyScript:``,se=ie.reactiveElementPolyfillSupport,ce=(e,t)=>e,le={toAttribute(e,t){
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
switch(t){case Boolean:e=e?oe:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},ue=(e,t)=>!x(e,t),de={attribute:!0,type:String,converter:le,reflect:!1,useDefault:!1,hasChanged:ue};Symbol.metadata??=Symbol(`metadata`),ie.litPropertyMetadata??=/* @__PURE__ */ new WeakMap;var fe=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=de){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&ee(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=S(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??de}static _$Ei(){if(this.hasOwnProperty(ce(`elementProperties`)))return;let e=re(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ce(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ce(`properties`))){let e=this.properties,t=[...te(e),...ne(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=/* @__PURE__ */ new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(b(e))}else e!==void 0&&t.push(b(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=/* @__PURE__ */ new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=/* @__PURE__ */ new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=/* @__PURE__ */ new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return y(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?le:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?le:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??ue)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=/* @__PURE__ */ new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=/* @__PURE__ */ new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=/* @__PURE__ */ new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};fe.elementStyles=[],fe.shadowRootOptions={mode:`open`},fe[ce(`elementProperties`)]=/* @__PURE__ */ new Map,fe[ce(`finalized`)]=/* @__PURE__ */ new Map,se?.({ReactiveElement:fe}),(ie.reactiveElementVersions??=[]).push(`2.1.2`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const pe=globalThis,me=e=>e,he=pe.trustedTypes,ge=he?he.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,_e=`$lit$`,ve=`lit$${Math.random().toFixed(9).slice(2)}$`,ye=`?`+ve,be=`<${ye}>`,xe=document,Se=()=>xe.createComment(``),Ce=e=>e===null||typeof e!=`object`&&typeof e!=`function`,we=Array.isArray,Te=e=>we(e)||typeof e?.[Symbol.iterator]==`function`,Ee=`[ 	
\f\r]`,De=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Oe=/-->/g,ke=/>/g,Ae=RegExp(`>|${Ee}(?:([^\\s"'>=/]+)(${Ee}*=${Ee}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),je=/'/g,Me=/"/g,Ne=/^(?:script|style|textarea|title)$/i,Pe=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),Fe=Symbol.for(`lit-noChange`),C=Symbol.for(`lit-nothing`),Ie=/* @__PURE__ */ new WeakMap,Le=xe.createTreeWalker(xe,129);function Re(e,t){if(!we(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return ge===void 0?t:ge.createHTML(t)}const ze=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=De;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===De?c[1]===`!--`?o=Oe:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=Ae):(Ne.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=Ae):o=ke:o===Ae?c[0]===`>`?(o=i??De,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?Ae:c[3]===`"`?Me:je):o===Me||o===je?o=Ae:o===Oe||o===ke?o=De:(o=Ae,i=void 0);let d=o===Ae&&e[t+1].startsWith(`/>`)?` `:``;a+=o===De?n+be:l>=0?(r.push(s),n.slice(0,l)+_e+n.slice(l)+ve+d):n+ve+(l===-2?t:d)}return[Re(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]};var Be=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=ze(t,n);if(this.el=e.createElement(l,r),Le.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=Le.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(_e)){let t=u[o++],n=i.getAttribute(e).split(ve),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Ge:r[1]===`?`?Ke:r[1]===`@`?qe:We}),i.removeAttribute(e)}else e.startsWith(ve)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Ne.test(i.tagName)){let e=i.textContent.split(ve),t=e.length-1;if(t>0){i.textContent=he?he.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],Se()),Le.nextNode(),c.push({type:2,index:++a});i.append(e[t],Se())}}}else if(i.nodeType===8){if(i.data===ye)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(ve,e+1))!==-1;)c.push({type:7,index:a}),e+=ve.length-1}}a++}}static createElement(e,t){let n=xe.createElement(`template`);return n.innerHTML=e,n}};function Ve(e,t,n=e,r){if(t===Fe)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=Ce(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=Ve(e,i._$AS(e,t.values),i,r)),t}var He=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??xe).importNode(t,!0);Le.currentNode=r;let i=Le.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Ue(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Je(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=Le.nextNode(),a++)}return Le.currentNode=xe,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Ue=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=C,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ve(this,e,t),Ce(e)?e===C||e==null||e===``?(this._$AH!==C&&this._$AR(),this._$AH=C):e!==this._$AH&&e!==Fe&&this._(e):e._$litType$===void 0?e.nodeType===void 0?Te(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==C&&Ce(this._$AH)?this._$AA.nextSibling.data=e:this.T(xe.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Be.createElement(Re(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new He(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Ie.get(e.strings);return t===void 0&&Ie.set(e.strings,t=new Be(e)),t}k(t){we(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(Se()),this.O(Se()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=me(e).nextSibling;me(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},We=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=C,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(/* @__PURE__ */ new String),this.strings=n):this._$AH=C}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=Ve(this,e,t,0),a=!Ce(e)||e!==this._$AH&&e!==Fe,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=Ve(this,r[n+o],t,o),s===Fe&&(s=this._$AH[o]),a||=!Ce(s)||s!==this._$AH[o],s===C?e=C:e!==C&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===C?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Ge=class extends We{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===C?void 0:e}},Ke=class extends We{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==C)}},qe=class extends We{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=Ve(this,e,t,0)??C)===Fe)return;let n=this._$AH,r=e===C&&n!==C||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==C&&(n===C||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Je=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Ve(this,e)}};const Ye={M:_e,P:ve,A:ye,C:1,L:ze,R:He,D:Te,V:Ve,I:Ue,H:We,N:Ke,U:qe,B:Ge,F:Je},Xe=pe.litHtmlPolyfillSupport;Xe?.(Be,Ue),(pe.litHtmlVersions??=[]).push(`3.3.3`);const Ze=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Ue(t.insertBefore(Se(),e),e,void 0,n??{})}return i._$AI(e),i},Qe=globalThis
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
;var $e=class extends fe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ze(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Fe}};$e._$litElement$=!0,$e.finalized=!0,Qe.litElementHydrateSupport?.({LitElement:$e});const et=Qe.litElementPolyfillSupport;et?.({LitElement:$e}),(Qe.litElementVersions??=[]).push(`4.2.2`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const tt=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},nt={attribute:!0,type:String,converter:le,reflect:!1,hasChanged:ue},rt=(e=nt,t,n)=>{
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=/* @__PURE__ */ new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function w(e){return(t,n)=>typeof n==`object`?rt(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function it(e){return w({...e,state:!0,attribute:!1})}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const at=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function ot(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return at(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return at(n,r,{get(){return a(this)}})}}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var st=v`
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
`,ct=/;\s+$/;function lt(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function ut(e){let{property:t,value:n,element:r}=e;if(n){let e=r.getAttribute(`style`)||``;e&&(e.match(ct)||(e+=`;`),e+=` `);let i=`${t}: ${n}`;return e.includes(i)?void 0:`${e}${i};`}return null}var dt,ft=class extends $e{constructor(){super(),u(this,dt,!1),this.initialReflectedProperties=/* @__PURE__ */ new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,t)=>{if(this.internals?.states)try{t?this.internals.states.add(e):this.internals.states.delete(e)}catch(e){if(String(e).includes(`must start with '--'`))console.error(`Your browser implements an outdated version of CustomStateSet. Consider using a polyfill`);else throw e}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error(`Element internals are not supported in your browser. Consider using a polyfill`)}this.customStates.set(`wa-defined`,!0);let e=this.constructor;for(let[t,n]of e.elementProperties)n.default===`inherit`&&n.initial!==void 0&&typeof t==`string`&&this.customStates.set(`initial-${t}-${n.initial}`,!0)}static get styles(){return[st,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `)),this.didSSR&&this.updateComplete.then(()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `))})}attributeChangedCallback(e,t,n){l(this,dt)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),d(this,dt,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll(`slot`).forEach(e=>{e.dispatchEvent(new Event(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(e){if(this.didSSR&&!this.hasUpdated){let t=new Event(`lit-hydration-error`,{bubbles:!0,composed:!0,cancelable:!1});t.error=e,this.dispatchEvent(t)}throw e}}setStyle(e,t){if(this.style)this.style[e]=t;else{let n=ut({property:lt(e),value:t,element:this});n&&this.setAttribute(`style`,n)}}setStyleProperty(e,t){if(this.style)this.style.setProperty(e,t);else{let n=ut({property:e,value:t,element:this});n&&this.setAttribute(`style`,n)}}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};dt=/* @__PURE__ */ new WeakMap,s([w()],ft.prototype,`dir`,2),s([w()],ft.prototype,`lang`,2),s([w({type:Boolean,reflect:!0,attribute:`did-ssr`})],ft.prototype,`didSSR`,2);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var pt=()=>({observedAttributes:[`custom-error`],checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=[`customError`]),t}}),mt=class extends ft{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=[`input`],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new r))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},`addEventListener`in this&&this.addEventListener(`invalid`,this.emitInvalid)}static get validators(){return[pt()]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let n of t.observedAttributes)e.add(n);return[...e]}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.updateValidity()}):this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener?.(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has(`customError`)&&(this.customError||=null,this.setCustomValidity(this.customError||``)),e.has(`value`)||e.has(`disabled`)||e.has(`defaultValue`)){let e=this.value;this.updateFormValue(e)}e.has(`disabled`)&&(this.customStates.set(`disabled`,this.disabled),(this.hasAttribute(`disabled`)||!this.matches(`:disabled`))&&this.toggleAttribute(`disabled`,this.disabled)),super.willUpdate(e),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>this.updateValidity()):this.updateValidity()}updateFormValue(e){if(Array.isArray(e)){if(this.name){let t=new FormData;for(let n of e)t.append(this.name,n);this.setValue(t,t)}}else this.setValue(e,e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(e){e?this.setAttribute(`form`,e):this.removeAttribute(`form`)}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],n=e[1],r=e[2];r||=this.validationTarget,this.internals.setValidity(t,n,r||void 0),this.requestUpdate(`validity`),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set(`required`,e),this.customStates.set(`optional`,!e),this.customStates.set(`invalid`,!t),this.customStates.set(`valid`,t),this.customStates.set(`user-invalid`,!t&&n),this.customStates.set(`user-valid`,t&&n)}setCustomValidity(e){e?(this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)):(this.customError=null,this.setValidity({}))}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity()}):(this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity())}setValue(...e){let[t,n]=e;this.internals.setFormValue(t,n)}get allValidators(){let e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(``),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute(`disabled`)||!this.willValidate){this.resetValidity();return}let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},n=this.validationTarget||this.input||void 0,r=``;for(let n of e){let{isValid:e,message:i,invalidKeys:a}=n.checkValidity(this);e||(r||=i,a?.length>=0&&a.forEach(e=>t[e]=!0))}r||=this.validationMessage,this.setValidity(t,r,n)}};mt.formAssociated=!0,s([w({reflect:!0})],mt.prototype,`name`,2),s([w({type:Boolean})],mt.prototype,`disabled`,2),s([w({state:!0,attribute:!1})],mt.prototype,`valueHasChanged`,2),s([w({state:!0,attribute:!1})],mt.prototype,`hasInteracted`,2),s([w({attribute:`custom-error`,reflect:!0})],mt.prototype,`customError`,2),s([w({attribute:!1,state:!0,type:Object})],mt.prototype,`validity`,1);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var ht={small:`s`,medium:`m`,large:`l`},gt=/* @__PURE__ */ new Set;function _t(e,t){t in ht&&!gt.has(`${e}:${t}`)&&(gt.add(`${e}:${t}`),console.warn(`[${e}] size="${t}" is deprecated. Use size="${ht[t]}" instead. The long-form value will be removed in the next major version.`))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var vt=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return this.host.childNodes?[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===Node.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`wa-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1}):!1}hasNamedSlot(e){return this.host.querySelector?.(`:scope > [slot="${e}"]`)!==null}test(e,t){return t&&this.host.didSSR&&!this.host.hasUpdated?!!this.host[t]:e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){let e=this.host.shadowRoot;e&&`addEventListener`in e&&e.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){let e=this.host.shadowRoot;e&&`removeEventListener`in e&&e.removeEventListener(`slotchange`,this.handleSlotChange)}},yt=v`
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
`,bt=v`
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
`,xt=v`
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
function St(e,t){let n={waitUntilFirstUpdate:!1,...t};return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}const Ct=/* @__PURE__ */ new Set,wt=/* @__PURE__ */ new Map;let Tt,Et=`ltr`,Dt=`en`;const Ot=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(Ot){let e=new MutationObserver(At);Et=document.documentElement.dir||`ltr`,Dt=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function kt(...e){e.map(e=>{let t=e.$code.toLowerCase();wt.has(t)?wt.set(t,Object.assign(Object.assign({},wt.get(t)),e)):wt.set(t,e),Tt||=e}),At()}function At(){Ot&&(Et=document.documentElement.dir||`ltr`,Dt=document.documentElement.lang||navigator.language),[...Ct.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var jt=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Ct.add(this.host)}hostDisconnected(){Ct.delete(this.host)}dir(){return`${this.host.dir||Et}`.toLowerCase()}lang(){let e=`${this.host.lang||Dt}`.toLowerCase().replace(/_/g,`-`);try{return new Intl.Locale(e),e}catch{return Tt?Tt.$code.toLowerCase():`en`}}getTranslationData(e){let t;try{t=new Intl.Locale(e.replace(/_/g,`-`))}catch{return{locale:void 0,language:``,region:``,primary:void 0,secondary:void 0}}let n=t.language.toLowerCase(),r=t.region?.toLowerCase()??``,i=wt.get(`${n}-${r}`),a=wt.get(n);return{locale:t,language:n,region:r,primary:i,secondary:a}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&Tt&&Tt[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(Tt&&Tt[e])i=Tt[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},Mt={$code:`en`,$name:`English`,$dir:`ltr`,allTagsRemoved:`All tags removed`,am:`AM`,autosizeColumn:`Autosize column`,captions:`Captions`,carousel:`Carousel`,chooseDate:`Choose date`,chooseDecade:`Choose decade`,chooseMonth:`Choose month`,chooseTime:`Choose time`,chooseYear:`Choose year`,clearEntry:`Clear entry`,clearFilter:`Clear filter`,clearSort:`Clear sort`,close:`Close`,closeCalendar:`Close calendar`,closeTimeInput:`Close time picker`,collapseRow:`Collapse row`,columnMenu:`Column options`,columnMovedToPosition:(e,t,n)=>`${e} moved to position ${t} of ${n}`,columns:`Columns`,compactPageXOfY:(e,t)=>`${e} of ${t}`,completed:`Completed`,copied:`Copied`,copy:`Copy`,createOption:e=>`Create "${e}"`,currentlyPlaying:`currently playing`,currentValue:`Current value`,date:`Date`,datePickerKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the calendar.`,day:`Day`,dayPeriod:`AM/PM`,decrement:`Decrement`,deselectAllRows:`Deselect all rows`,disabled:`Disabled`,dropFileHere:`Drop file here or click to browse`,dropFilesHere:`Drop files here or click to browse`,empty:`Empty`,endDate:`End date`,enterFullscreen:`Enter fullscreen`,error:`Error`,exitFullscreen:`Exit fullscreen`,expandRow:`Expand row`,filterByColumn:e=>`Filter by ${e}`,filterFrom:`From`,filterMax:`Max`,filterMin:`Min`,filterTo:`To`,firstPage:`First page`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hideColumn:`Hide column`,hidePassword:`Hide password`,hour:`Hour`,incompleteDate:`Enter a valid date.`,increment:`Increment`,jumpBackwardX:e=>`Jump back ${e} pages`,jumpForwardX:e=>`Jump forward ${e} pages`,lastPage:`Last page`,loading:`Loading`,locked:`Locked`,minute:`Minute`,month:`Month`,moreOptions:`More Options`,mute:`Mute`,nextDecade:`Next decade`,nextMonth:`Next month`,nextPage:`Next page`,nextSlide:`Next slide`,nextVideo:`Next Video`,nextYear:`Next year`,noData:`No data`,noOptions:`No options`,noResults:`No matching results`,notCompleted:`Not completed`,now:`Now`,numCharacters:e=>e===1?`1 character`:`${e} characters`,numCharactersRemaining:e=>e===1?`1 character remaining`:`${e} characters remaining`,numOptionsAvailable:e=>e===0?`No options available`:e===1?`1 option available`:`${e} options available`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,numRowsCopied:e=>e===1?`1 row copied`:`${e} rows copied`,numRowsSelected:e=>e===1?`1 row selected`:`${e} rows selected`,optionPosition:(e,t,n)=>`${e}, ${t} of ${n}`,optionsLoadError:`Options could not be loaded`,pageXOfY:(e,t)=>`Page ${e} of ${t}`,pagination:`Pagination`,pause:`Pause`,pauseAnimation:`Pause animation`,pictureInPicture:`Picture in picture`,pinLeft:`Pin left`,pinRight:`Pin right`,play:`Play`,playAnimation:`Play animation`,playbackSpeed:`Playback speed`,playlist:`Playlist`,pm:`PM`,previousDecade:`Previous decade`,previousMonth:`Previous month`,previousPage:`Previous page`,previousSlide:`Previous slide`,previousVideo:`Previous video`,previousYear:`Previous year`,progress:`Progress`,rangeTooLong:e=>e===1?`Select a range no longer than 1 day`:`Select a range no longer than ${e} days`,rangeTooShort:e=>e===1?`Select a range at least 1 day long`:`Select a range at least ${e} days long`,readonly:`Read-only`,remove:`Remove`,resetColumns:`Reset columns`,resize:`Resize`,resizeColumn:`Resize column`,rowsPerPage:`Rows per page`,scrollableRegion:`Scrollable region`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,search:`Search`,second:`Second`,seek:`Seek`,seekProgress:(e,t)=>`${e} of ${t}`,selectAColorFromTheScreen:`Select a color from the screen`,selectAllRows:`Select all rows`,selected:`Selected`,selectedDateLabel:e=>`Selected: ${e}`,selectedRangeLabel:e=>`Selected range: ${e}`,selectGroup:`Select group`,selectionCleared:`Selection cleared`,selectRow:`Select row`,showingNofMRows:(e,t)=>`Showing ${e} of ${t} rows`,showingXtoYofZ:(e,t,n)=>`${e}\u2013${t} of ${n}`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,sortAscending:`Sort ascending`,sortColumn:`Sort column`,sortDescending:`Sort descending`,startDate:`Start date`,steps:`Steps`,stepXOfY:(e,t)=>`Step ${e} of ${t}`,tagAdded:e=>`${e} added`,tagAlreadyAdded:e=>`${e} is already added`,tagInputKeyboardHelp:`Press Backspace or Delete to remove this tag.`,tagRemoved:e=>`${e} removed`,time:`Time`,timeInputKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the time picker.`,today:`Today`,toggleColorFormat:`Toggle color format`,tooFewTags:e=>e===1?`Add at least 1 tag`:`Add at least ${e} tags`,tooManyTags:e=>e===1?`Add no more than 1 tag`:`Add no more than ${e} tags`,unmute:`Unmute`,unpin:`Unpin`,unpinColumn:`Unpin column`,videoPlayer:`Video player`,volume:`Volume`,year:`Year`,zoomIn:`Zoom in`,zoomOut:`Zoom out`}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;kt(Mt);var Nt=Mt,Pt=class extends jt{lang(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||`en`:super.lang()}};kt(Nt);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const Ft={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},It=e=>(...t)=>({_$litDirective$:e,values:t});var Lt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Rt=It(class extends Lt{constructor(e){if(super(e),e.type!==Ft.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=/* @__PURE__ */ new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return Fe}}),zt=e=>e??C,Bt=Symbol.for(``),Vt=e=>{
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
if(e?.r===Bt)return e?._$litStatic$},Ht=(e,...t)=>({_$litStatic$:t.reduce((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1],e[0]),r:Bt}),Ut=/* @__PURE__ */ new Map,Wt=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],(i=Vt(a))!==void 0);)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=Ut.get(e))===void 0&&(o.raw=o,Ut.set(e,t=o)),n=s}return e(t,...n)})(Pe);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var T=class extends mt{constructor(){super(...arguments),this.assumeInteractionOn=[`click`],this.hasSlotController=new vt(this,`[default]`,`start`,`end`),this.localize=new Pt(this),this.invalid=!1,this.isIconButton=!1,this.title=``,this.variant=`neutral`,this.appearance=`accent`,this.size=`m`,this.withCaret=!1,this.withStart=!1,this.withEnd=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type=`button`}static get validators(){return[...super.validators,n()]}handleSizeChange(){_t(this.localName,this.size)}constructLightDOMButton(){let e=document.createElement(`button`);for(let t of this.attributes)t.name!==`style`&&e.setAttribute(t.name,t.value);return e.type=this.type,e.style.position=`absolute !important`,e.style.width=`0 !important`,e.style.height=`0 !important`,e.style.clipPath=`inset(50%) !important`,e.style.overflow=`hidden !important`,e.style.whiteSpace=`nowrap !important`,this.name&&(e.name=this.name),e.value=this.value||``,e}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopImmediatePropagation();return}if(this.type!==`submit`&&this.type!==`reset`||!this.getForm())return;let t=this.constructLightDOMButton();this.parentElement?.append(t),t.click(),t.remove()}handleInvalid(){this.dispatchEvent(new r)}handleLabelSlotChange(){let e=this.labelSlot.assignedNodes({flatten:!0}),t=!1,n=!1,r=!1,i=!1;[...e].forEach(e=>{if(e.nodeType===Node.ELEMENT_NODE){let r=e;r.localName===`wa-icon`?(n=!0,t||=r.label!==void 0):i=!0}else e.nodeType===Node.TEXT_NODE&&(e.textContent?.trim()||``).length>0&&(r=!0)}),this.isIconButton=n&&!r&&!i,this.customStates.set(`icon-button`,this.isIconButton),this.isIconButton&&!t&&console.warn(`Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.`,this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.customStates.set(`disabled`,this.disabled),this.updateValidity()}handleHrefChange(){this.customStates.set(`link`,this.isLink())}handleLoadingChange(){this.customStates.set(`loading`,this.loading)}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=this.isLink(),t=e?Ht`a`:Ht`button`;return Wt`
      <${t}
        part="base button"
        class=${Rt({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()===`rtl`,"has-label":this.hasSlotController.test(`[default]`),"has-start":this.hasSlotController.test(`start`,`withStart`),"has-end":this.hasSlotController.test(`end`,`withEnd`),"is-icon-button":this.isIconButton})}
        ?disabled=${zt(e?void 0:this.disabled)}
        type=${zt(e?void 0:this.type)}
        title=${this.title}
        name=${zt(e?void 0:this.name)}
        value=${zt(e?void 0:this.value)}
        href=${zt(e?this.href:void 0)}
        target=${zt(e?this.target:void 0)}
        download=${zt(e?this.download:void 0)}
        rel=${zt(e&&this.rel?this.rel:void 0)}
        role=${zt(e?void 0:`button`)}
        aria-disabled=${zt(e&&this.disabled?`true`:void 0)}
        aria-busy=${this.loading?`true`:`false`}
        tabindex=${this.disabled?`-1`:`0`}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?Wt`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:``}
        ${this.loading?Wt`<wa-spinner part="spinner"></wa-spinner>`:``}
      </${t}>
    `}};T.shadowRootOptions={...mt.shadowRootOptions,delegatesFocus:!0},T.css=[bt,xt,yt],s([ot(`.button`)],T.prototype,`button`,2),s([ot(`slot:not([name])`)],T.prototype,`labelSlot`,2),s([it()],T.prototype,`invalid`,2),s([it()],T.prototype,`isIconButton`,2),s([w()],T.prototype,`title`,2),s([w({reflect:!0})],T.prototype,`variant`,2),s([w({reflect:!0})],T.prototype,`appearance`,2),s([w({reflect:!0})],T.prototype,`size`,2),s([St(`size`)],T.prototype,`handleSizeChange`,1),s([w({attribute:`with-caret`,type:Boolean,reflect:!0})],T.prototype,`withCaret`,2),s([w({attribute:`with-start`,type:Boolean})],T.prototype,`withStart`,2),s([w({attribute:`with-end`,type:Boolean})],T.prototype,`withEnd`,2),s([w({type:Boolean})],T.prototype,`disabled`,2),s([w({type:Boolean,reflect:!0})],T.prototype,`loading`,2),s([w({type:Boolean,reflect:!0})],T.prototype,`pill`,2),s([w()],T.prototype,`type`,2),s([w({reflect:!0})],T.prototype,`name`,2),s([w({reflect:!0})],T.prototype,`value`,2),s([w({reflect:!0})],T.prototype,`href`,2),s([w()],T.prototype,`target`,2),s([w()],T.prototype,`rel`,2),s([w()],T.prototype,`download`,2),s([w({attribute:`formaction`})],T.prototype,`formAction`,2),s([w({attribute:`formenctype`})],T.prototype,`formEnctype`,2),s([w({attribute:`formmethod`})],T.prototype,`formMethod`,2),s([w({attribute:`formnovalidate`,type:Boolean})],T.prototype,`formNoValidate`,2),s([w({attribute:`formtarget`})],T.prototype,`formTarget`,2),s([St(`disabled`,{waitUntilFirstUpdate:!0})],T.prototype,`handleDisabledChange`,1),s([St(`href`)],T.prototype,`handleHrefChange`,1),s([St(`loading`,{waitUntilFirstUpdate:!0})],T.prototype,`handleLoadingChange`,1),T=s([tt(`wa-button`)],T),T.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Gt=v`
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
`,Kt=class extends ft{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(...arguments),this.localize=new Pt(this)}render(){return Pe`
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
    `}};Kt.css=Gt,Kt=s([tt(`wa-spinner`)],Kt);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var qt=class extends Event{constructor(){super(`wa-error`,{bubbles:!0,cancelable:!1,composed:!0})}},Jt=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-load`,{bubbles:!0,cancelable:!1,composed:!0})}},Yt=v`
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
`,Xt=``,Zt=``
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;function Qt(){return Xt.replace(/\/$/,``)}function $t(e){Zt=e}function en(){if(!Zt){let e=document.querySelector(`[data-fa-kit-code]`);e&&$t(e.getAttribute(`data-fa-kit-code`)||``)}return Zt}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var tn=`7.3.0`;function nn(e,t,n){let r=`solid`;return t===`chisel`&&(r=`chisel-regular`),t===`etch`&&(r=`etch-solid`),t===`graphite`&&(r=`graphite-thin`),t===`jelly`&&(r=`jelly-regular`,n===`duo-regular`&&(r=`jelly-duo-regular`),n===`fill-regular`&&(r=`jelly-fill-regular`)),t===`jelly-duo`&&(r=`jelly-duo-regular`),t===`jelly-fill`&&(r=`jelly-fill-regular`),t===`notdog`&&(n===`solid`&&(r=`notdog-solid`),n===`duo-solid`&&(r=`notdog-duo-solid`)),t===`notdog-duo`&&(r=`notdog-duo-solid`),t===`slab`&&((n===`solid`||n===`regular`)&&(r=`slab-regular`),n===`press-regular`&&(r=`slab-press-regular`)),t===`slab-press`&&(r=`slab-press-regular`),t===`slab-duo`&&(r=`slab-duo-regular`),t===`slab-press-duo`&&(r=`slab-press-duo-regular`),t===`thumbprint`&&(r=`thumbprint-light`),t===`utility`&&(r=`utility-semibold`),t===`utility-duo`&&(r=`utility-duo-semibold`),t===`utility-fill`&&(r=`utility-fill-semibold`),t===`whiteboard`&&(r=`whiteboard-semibold`),t===`mosaic`&&(r=`mosaic-solid`),t===`pixel`&&(r=`pixel-regular`),t===`vellum`&&(r=`vellum-solid`),t===`classic`&&(n===`thin`&&(r=`thin`),n===`light`&&(r=`light`),n===`regular`&&(r=`regular`),n===`solid`&&(r=`solid`)),t===`duotone`&&(n===`thin`&&(r=`duotone-thin`),n===`light`&&(r=`duotone-light`),n===`regular`&&(r=`duotone-regular`),n===`solid`&&(r=`duotone`)),t===`sharp`&&(n===`thin`&&(r=`sharp-thin`),n===`light`&&(r=`sharp-light`),n===`regular`&&(r=`sharp-regular`),n===`solid`&&(r=`sharp-solid`)),t===`sharp-duotone`&&(n===`thin`&&(r=`sharp-duotone-thin`),n===`light`&&(r=`sharp-duotone-light`),n===`regular`&&(r=`sharp-duotone-regular`),n===`solid`&&(r=`sharp-duotone-solid`)),t===`brands`&&(r=`brands`),r}function rn(e,t,n){let r=nn(e,t,n),i=Qt();if(i)return`${i}/${r}/${e}.svg`;let a=en();return a.length>0?`https://ka-p.fontawesome.com/releases/v${tn}/svgs/${r}/${e}.svg?token=${encodeURIComponent(a)}`:`https://ka-f.fontawesome.com/releases/v${tn}/svgs/${r}/${e}.svg`}var an={name:`default`,resolver:(e,t=`classic`,n=`solid`)=>rn(e,t,n),mutator:(e,t)=>{if(e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`),t?.family&&!e.hasAttribute(`data-duotone-initialized`)){let{family:n,variant:r}=t;if(n===`duotone`||n===`sharp-duotone`||n===`notdog-duo`||n===`notdog`&&r===`duo-solid`||n===`jelly-duo`||n===`jelly`&&r===`duo-regular`||n===`utility-duo`||n===`slab-duo`||n===`slab-press-duo`||n===`thumbprint`){let n=[...e.querySelectorAll(`path`)],r=n.find(e=>!e.hasAttribute(`opacity`)),i=n.find(e=>e.hasAttribute(`opacity`));if(!r||!i)return;if(r.setAttribute(`data-duotone-primary`,``),i.setAttribute(`data-duotone-secondary`,``),t.swapOpacity&&r&&i){let e=i.getAttribute(`opacity`)||`0.4`;r.style.setProperty(`--path-opacity`,e),i.style.setProperty(`--path-opacity`,`1`)}e.setAttribute(`data-duotone-initialized`,``)}}}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function on(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var sn={solid:{"arrow-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`,"arrow-up":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>`,backward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M236.3 107.1C247.9 96 265 92.9 279.7 99.2C294.4 105.5 304 120 304 136L304 272.3L476.3 107.2C487.9 96 505 92.9 519.7 99.2C534.4 105.5 544 120 544 136L544 504C544 520 534.4 534.5 519.7 540.8C505 547.1 487.9 544 476.3 532.9L304 367.7L304 504C304 520 294.4 534.5 279.7 540.8C265 547.1 247.9 544 236.3 532.9L44.3 348.9C36.5 341.3 32 330.9 32 320C32 309.1 36.5 298.7 44.3 291.1L236.3 107.1z"/></svg>`,"backward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M491 100.8C478.1 93.8 462.3 94.5 450 102.6L192 272.1L192 128C192 110.3 177.7 96 160 96C142.3 96 128 110.3 128 128L128 512C128 529.7 142.3 544 160 544C177.7 544 192 529.7 192 512L192 367.9L450 537.5C462.3 545.6 478 546.3 491 539.3C504 532.3 512 518.8 512 504.1L512 136.1C512 121.4 503.9 107.9 491 100.9z"/></svg>`,bars:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>`,"angles-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M77.3 256 214.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256zm192 0L406.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L269.3 256z"/></svg>`,"angles-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.7 256 297.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 256zm-192 0L105.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256z"/></svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>`,"chevron-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`,"chevron-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>`,"chevron-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>`,circle:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>`,"closed-captioning":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M64 192C64 156.7 92.7 128 128 128L512 128C547.3 128 576 156.7 576 192L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 192zM216 272L248 272C252.4 272 256 275.6 256 280C256 293.3 266.7 304 280 304C293.3 304 304 293.3 304 280C304 249.1 278.9 224 248 224L216 224C185.1 224 160 249.1 160 280L160 360C160 390.9 185.1 416 216 416L248 416C278.9 416 304 390.9 304 360C304 346.7 293.3 336 280 336C266.7 336 256 346.7 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 280C208 275.6 211.6 272 216 272zM384 280C384 275.6 387.6 272 392 272L424 272C428.4 272 432 275.6 432 280C432 293.3 442.7 304 456 304C469.3 304 480 293.3 480 280C480 249.1 454.9 224 424 224L392 224C361.1 224 336 249.1 336 280L336 360C336 390.9 361.1 416 392 416L424 416C454.9 416 480 390.9 480 360C480 346.7 469.3 336 456 336C442.7 336 432 346.7 432 360C432 364.4 428.4 368 424 368L392 368C387.6 368 384 364.4 384 360L384 280z"/></svg>`,"closed-captioning-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M39 39.1C48.4 29.7 63.6 29.7 72.9 39.1L161.8 128L512 128C547.3 128 576 156.7 576 192L576 448C576 473.5 561.1 495.4 539.6 505.8L601 567.1C610.4 576.5 610.4 591.7 601 601C591.6 610.3 576.4 610.4 567.1 601L39 73.1C29.7 63.7 29.7 48.5 39 39.1zM384 350.1L384 279.9C384 275.5 387.6 271.9 392 271.9L424 271.9C428.4 271.9 432 275.5 432 279.9C432 293.2 442.7 303.9 456 303.9C469.3 303.9 480 293.2 480 279.9C480 249 454.9 223.9 424 223.9L392 223.9C361.1 223.9 336 249 336 279.9L336 302.1L384 350.1zM445.5 411.6C465.7 403.2 480 383.2 480 359.9C480 346.6 469.3 335.9 456 335.9C442.7 335.9 432 346.6 432 359.9C432 364.3 428.4 367.9 424 367.9L401.8 367.9L445.5 411.6zM162.3 264.1C160.8 269.1 160 274.5 160 280L160 360C160 390.9 185.1 416 216 416L248 416C266.1 416 282.1 407.5 292.4 394.2L410.2 512L128 512C92.7 512 64 483.3 64 448L64 192C64 184.2 65.4 176.7 68 169.8L162.3 264.1zM256.1 357.9C256 358.6 256 359.3 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 309.8L256.1 357.9z"/></svg>`,compress:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>`,ellipsis:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M96 320C96 289.1 121.1 264 152 264C182.9 264 208 289.1 208 320C208 350.9 182.9 376 152 376C121.1 376 96 350.9 96 320zM264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320zM488 264C518.9 264 544 289.1 544 320C544 350.9 518.9 376 488 376C457.1 376 432 350.9 432 320C432 289.1 457.1 264 488 264z"/></svg>`,"ellipsis-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/></svg>`,expand:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 96C110.3 96 96 110.3 96 128L96 224C96 241.7 110.3 256 128 256C145.7 256 160 241.7 160 224L160 160L224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L128 96zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 512C96 529.7 110.3 544 128 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480L160 416zM416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160L480 224C480 241.7 494.3 256 512 256C529.7 256 544 241.7 544 224L544 128C544 110.3 529.7 96 512 96L416 96zM544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L512 544C529.7 544 544 529.7 544 512L544 416z"/></svg>`,eyedropper:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>`,filter:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 64C19.1 64 7.4 71.8 2.4 83.8S.2 109.5 9.4 118.6L192 301.3 192 416c0 8.5 3.4 16.6 9.4 22.6l64 64c9.2 9.2 22.9 11.9 34.9 6.9S320 492.9 320 480l0-178.7 182.6-182.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 64 480 64L32 64z"/></svg>`,forward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M403.7 107.1C392.1 96 375 92.9 360.3 99.2C345.6 105.5 336 120 336 136L336 272.3L163.7 107.2C152.1 96 135 92.9 120.3 99.2C105.6 105.5 96 120 96 136L96 504C96 520 105.6 534.5 120.3 540.8C135 547.1 152.1 544 163.7 532.9L336 367.7L336 504C336 520 345.6 534.5 360.3 540.8C375 547.1 392.1 544 403.7 532.9L595.7 348.9C603.6 341.4 608 330.9 608 320C608 309.1 603.5 298.7 595.7 291.1L403.7 107.1z"/></svg>`,file:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>`,"file-audio":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>`,"file-code":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>`,"file-excel":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>`,"file-image":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>`,"file-pdf":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>`,"file-powerpoint":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>`,"file-video":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>`,"file-word":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>`,"file-zipper":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>`,"forward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M21 36.8c12.9-7 28.7-6.3 41 1.8L320 208.1 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-144.1-258 169.6c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440L0 72C0 57.3 8.1 43.8 21 36.8z"/></svg>`,gauge:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,gear:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>`,"grip-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>`,indeterminate:`<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>`,"magnifying-glass":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>`,minus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>`,pause:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>`,"picture-in-picture":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M448 32c35.3 0 64 28.7 64 64l0 112-64 0 0-112-384 0 0 320 144 0 0 64-144 0-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416 0 96C0 62.9 25.2 35.6 57.5 32.3L64 32 448 32zm16 224c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48l160 0z"/></svg>`,play:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>`,"play-circle":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>`,plus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>`,"table-columns":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 64l0 256 128 0 0-256-128 0zm320 0l-128 0 0 256 128 0 0-256z"/></svg>`,thumbtack:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 10.3 134.1c37.1 21.2 65.8 56.4 78.2 99.7l3.8 13.4c2.8 9.7 .8 20-5.2 28.1S362 352 352 352L32 352c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1L5 297.8c12.4-43.3 41-78.5 78.2-99.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 400l64 0 0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-112z"/></svg>`,"up-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M406.6 502.6l96-96c9.2-9.2 11.9-22.9 6.9-34.9S492.9 352 480 352l-64 0 0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 320-64 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l96 96c12.5 12.5 32.8 12.5 45.3 0zM150.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-9.2 9.2-11.9 22.9-6.9 34.9S19.1 160 32 160l64 0 0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320 64 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-96-96z"/></svg>`,upload:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>`,user:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>`,volume:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM441.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C443.3 170.7 464 210.9 464 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-low":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,xmark:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>`},regular:{calendar:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z"/></svg>`,"circle-question":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`,"circle-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,clock:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>`,copy:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>`,eye:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>`,"eye-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>`}},cn={name:`system`,resolver:(e,t=`classic`,n=`solid`)=>{let r=sn[n][e]??sn.regular[e]??sn.regular[`circle-question`];return r?on(r):``},mutator:e=>{e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`)}},ln=`classic`,un=[an,cn],dn=/* @__PURE__ */ new Set
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;function fn(e){dn.add(e)}function pn(e){dn.delete(e)}function mn(e){return un.find(t=>t.name===e)}function hn(){return ln}
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const{I:gn}=Ye,_n=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var vn=Symbol(),yn=Symbol(),bn,xn=/* @__PURE__ */ new Map,E=class extends ft{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label=``,this.library=`default`,this.rotate=0,this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=Pe`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let n=this.shadowRoot.querySelector(`[part='svg']`);return typeof t.mutator==`function`&&t.mutator(n,this),this.svg}try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?vn:yn}catch{return yn}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return vn;bn||=new DOMParser;let r=bn.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):vn}catch{return vn}}}connectedCallback(){super.connectedCallback(),fn(this)}firstUpdated(e){super.firstUpdated(e),this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),pn(this)}async getIconSource(){let e=mn(this.library),t=this.family||hn();if(this.name&&e){let n=this.canvas===`auto`||this.autoWidth,r;try{r=await e.resolver(this.name,t,this.variant,n)}catch{r=void 0}return{url:r,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=await this.getIconSource(),n=t?mn(this.library):void 0;if(!e){this.svg=null;return}let r=xn.get(e);r||(r=this.resolveIcon(e,n),xn.set(e,r));let i=await r;if(i===yn&&xn.delete(e),e===(await this.getIconSource()).url){if(_n(i))this.svg=i;else switch(i){case yn:case vn:this.svg=null,this.dispatchEvent(new qt);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new Jt)}}}willUpdate(e){return this.style||this.setStyleProperty(`--rotate-angle`,`${this.rotate}deg`),super.willUpdate(e)}updated(e){super.updated(e);let t=mn(this.library);this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`);let n=this.shadowRoot?.querySelector(`svg`);n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:Pe`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};E.css=Yt,s([it()],E.prototype,`svg`,2),s([w({reflect:!0})],E.prototype,`name`,2),s([w({reflect:!0})],E.prototype,`family`,2),s([w({reflect:!0})],E.prototype,`variant`,2),s([w({reflect:!0})],E.prototype,`canvas`,2),s([w({attribute:`auto-width`,type:Boolean,reflect:!0})],E.prototype,`autoWidth`,2),s([w({attribute:`swap-opacity`,type:Boolean,reflect:!0})],E.prototype,`swapOpacity`,2),s([w()],E.prototype,`src`,2),s([w()],E.prototype,`label`,2),s([w({reflect:!0})],E.prototype,`library`,2),s([w({type:Number,reflect:!0})],E.prototype,`rotate`,2),s([w({type:String,reflect:!0})],E.prototype,`flip`,2),s([w({type:String,reflect:!0})],E.prototype,`animation`,2),s([St(`label`)],E.prototype,`handleLabelChange`,1),s([St([`family`,`name`,`library`,`variant`,`src`,`autoWidth`,`canvas`,`swapOpacity`],{waitUntilFirstUpdate:!0})],E.prototype,`setIcon`,1),E=s([tt(`wa-icon`)],E);var Sn=/* @__PURE__ */ t({default:()=>T}),Cn=v`
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
`,wn=class extends ft{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(...arguments),this.hasSlotController=new vt(this,`[default]`),this.orientation=`horizontal`,this.withLabel=!1,this.labelPlacement=`center`}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`separator`)}willUpdate(e){this.withLabel=this.hasSlotController.test(`[default]`,`withLabel`),super.willUpdate(e)}handleVerticalChange(){this.setAttribute(`aria-orientation`,this.orientation)}handleSlotChange(){this.internals&&(this.internals.ariaLabel=this.textContent?.trim()||null)}render(){return Pe`
      <div part="label" class="label">
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};wn.css=Cn,s([w({reflect:!0})],wn.prototype,`orientation`,2),s([w({attribute:`with-label`,type:Boolean,reflect:!0})],wn.prototype,`withLabel`,2),s([w({attribute:`label-placement`,reflect:!0})],wn.prototype,`labelPlacement`,2),s([St(`orientation`)],wn.prototype,`handleVerticalChange`,1),wn=s([tt(`wa-divider`)],wn);var Tn=/* @__PURE__ */ t({default:()=>wn}),En=v`
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
function Dn(e,t){return new Promise(n=>{let r=new AbortController,{signal:i}=r;if(e.classList.contains(t))return;e.classList.add(t);let a=!1,o=()=>{a||(a=!0,e.classList.remove(t),n(),r.abort())};e.addEventListener(`animationend`,o,{once:!0,signal:i}),e.addEventListener(`animationcancel`,o,{once:!0,signal:i}),requestAnimationFrame(()=>{!a&&e.getAnimations().length===0&&o()})})}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var D=class extends ft{constructor(){super(...arguments),this.hasSlotController=new vt(this,`[default]`,`start`,`end`),this.active=!1,this.variant=`default`,this.size=`m`,this.checkboxAdjacent=!1,this.submenuAdjacent=!1,this.type=`normal`,this.checked=!1,this.disabled=!1,this.submenuOpen=!1,this.hasSubmenu=!1,this.handleSlotChange=()=>{this.hasSubmenu=this.hasSlotController.test(`submenu`),this.updateHasSubmenuState(),this.hasSubmenu?(this.setAttribute(`aria-haspopup`,`menu`),this.setAttribute(`aria-expanded`,this.submenuOpen?`true`:`false`)):(this.removeAttribute(`aria-haspopup`),this.removeAttribute(`aria-expanded`))},this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handlePointerEnter=e=>{e.pointerType===`mouse`&&this.hasSubmenu&&!this.disabled&&(this.notifyParentOfOpening(),this.submenuOpen=!0)}}handleSizeChange(){_t(this.localName,this.size)}connectedCallback(){super.connectedCallback(),this.addEventListener?.(`click`,this.handleHostClick),this.addEventListener?.(`pointerenter`,this.handlePointerEnter),this.shadowRoot?.addEventListener?.(`click`,this.handleClick,{capture:!0}),this.shadowRoot?.addEventListener?.(`slotchange`,this.handleSlotChange)}disconnectedCallback(){super.disconnectedCallback(),this.closeSubmenu(),this.removeEventListener?.(`click`,this.handleHostClick),this.removeEventListener?.(`pointerenter`,this.handlePointerEnter),this.shadowRoot?.removeEventListener?.(`click`,this.handleClick,{capture:!0}),this.shadowRoot?.removeEventListener?.(`slotchange`,this.handleSlotChange)}firstUpdated(e){super.firstUpdated(e),this.setAttribute(`tabindex`,`-1`),this.hasSubmenu=this.hasSlotController.test(`submenu`),this.updateHasSubmenuState()}updated(e){e.has(`active`)&&(this.setAttribute(`tabindex`,this.active?`0`:`-1`),this.customStates.set(`active`,this.active)),e.has(`checked`)&&(this.type===`checkbox`?this.setAttribute(`aria-checked`,this.checked?`true`:`false`):this.removeAttribute(`aria-checked`),this.customStates.set(`checked`,this.checked)),e.has(`disabled`)&&(this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`),this.customStates.set(`disabled`,this.disabled)),e.has(`type`)&&(this.type===`checkbox`?(this.setAttribute(`role`,`menuitemcheckbox`),this.setAttribute(`aria-checked`,this.checked?`true`:`false`)):(this.setAttribute(`role`,`menuitem`),this.removeAttribute(`aria-checked`))),(e.has(`href`)||e.has(`hasSubmenu`))&&this.customStates.set(`link`,this.isLink()),e.has(`submenuOpen`)&&(this.customStates.set(`submenu-open`,this.submenuOpen),this.submenuOpen?this.openSubmenu():this.closeSubmenu())}updateHasSubmenuState(){this.customStates.set(`has-submenu`,this.hasSubmenu)}async openSubmenu(){let e=this.submenuElement;this.hasSubmenu&&e&&this.isConnected&&(this.notifyParentOfOpening(),e.showPopover?.(),e.hidden=!1,e.setAttribute(`data-visible`,``),this.submenuOpen=!0,this.setAttribute(`aria-expanded`,`true`),await Dn(e,`show`),setTimeout(()=>{let e=this.getSubmenuItems();e.length>0&&(e.forEach((e,t)=>e.active=t===0),e[0].focus({preventScroll:!0}))},0))}notifyParentOfOpening(){let e=new CustomEvent(`submenu-opening`,{bubbles:!0,composed:!0,detail:{item:this}});this.dispatchEvent(e);let t=this.parentElement;t&&[...t.children].filter(e=>e!==this&&e.localName===`wa-dropdown-item`&&e.getAttribute(`slot`)===this.getAttribute(`slot`)&&e.submenuOpen).forEach(e=>{e.submenuOpen=!1})}async closeSubmenu(){let e=this.submenuElement;this.hasSubmenu&&e&&(this.submenuOpen=!1,this.setAttribute(`aria-expanded`,`false`),e.hidden||(await Dn(e,`hide`),e?.isConnected&&(e.hidden=!0,e.removeAttribute(`data-visible`),e.hidePopover?.())))}isLink(){return!!this.href&&!this.hasSubmenu}navigate(e){let t=this.linkElement;this.isLink()&&!this.disabled&&t&&t.dispatchEvent(new MouseEvent(`click`,{bubbles:!1,cancelable:!0,composed:!1,altKey:e?.altKey??!1,ctrlKey:e?.ctrlKey??!1,metaKey:e?.metaKey??!1,shiftKey:e?.shiftKey??!1}))}getSubmenuItems(){return[...this.children].filter(e=>e.localName===`wa-dropdown-item`&&e.getAttribute(`slot`)===`submenu`&&!e.hasAttribute(`disabled`))}render(){return Pe`
      ${this.href?Pe`
            <a
              id="link"
              href=${this.href}
              target=${zt(this.target)}
              rel=${zt(this.rel)}
              download=${zt(this.download)}
              tabindex="-1"
              aria-hidden="true"
            ></a>
          `:``}
      ${this.type===`checkbox`?Pe`
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

      ${this.hasSubmenu?Pe`
            <wa-icon
              id="submenu-indicator"
              part="submenu-icon"
              exportparts="svg:submenu-icon__svg"
              library="system"
              name="chevron-right"
            ></wa-icon>
          `:``}
      ${this.hasSubmenu?Pe`
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
    `}};D.css=En,s([ot(`#submenu`)],D.prototype,`submenuElement`,2),s([ot(`#link`)],D.prototype,`linkElement`,2),s([w({type:Boolean})],D.prototype,`active`,2),s([w({reflect:!0})],D.prototype,`variant`,2),s([w({reflect:!0})],D.prototype,`size`,2),s([St(`size`)],D.prototype,`handleSizeChange`,1),s([w({attribute:`checkbox-adjacent`,type:Boolean,reflect:!0})],D.prototype,`checkboxAdjacent`,2),s([w({attribute:`submenu-adjacent`,type:Boolean,reflect:!0})],D.prototype,`submenuAdjacent`,2),s([w()],D.prototype,`value`,2),s([w({reflect:!0})],D.prototype,`type`,2),s([w({type:Boolean})],D.prototype,`checked`,2),s([w({type:Boolean,reflect:!0})],D.prototype,`disabled`,2),s([w({type:Boolean,reflect:!0})],D.prototype,`submenuOpen`,2),s([w({reflect:!0})],D.prototype,`href`,2),s([w()],D.prototype,`target`,2),s([w()],D.prototype,`rel`,2),s([w()],D.prototype,`download`,2),s([it()],D.prototype,`hasSubmenu`,2),D=s([tt(`wa-dropdown-item`)],D);var On=/* @__PURE__ */ t({default:()=>D}),kn=class extends Event{constructor(e){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-select`,{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function*An(e=document.activeElement){e!=null&&(yield e,`shadowRoot`in e&&e.shadowRoot&&e.shadowRoot.mode!==`closed`&&(yield*An(e.shadowRoot.activeElement)))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var jn=v`
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
`,Mn=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-show`,{bubbles:!0,cancelable:!0,composed:!0})}},Nn=class extends Event{constructor(e){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-hide`,{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}},Pn=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-after-hide`,{bubbles:!0,cancelable:!1,composed:!0})}},Fn=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-after-show`,{bubbles:!0,cancelable:!1,composed:!0})}},In=[]
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;function Ln(e){Rn(e),In.push(e)}function Rn(e){for(let t=In.length-1;t>=0;t--)if(In[t]===e){In.splice(t,1);break}}function zn(e){return In.length>0&&In[In.length-1]===e}let Bn=(e=21)=>{let t=``,n=crypto.getRandomValues(new Uint8Array(e|=0));for(;e--;)t+=`useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict`[n[e]&63];return t};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Vn(e=``){return`${e}${Bn()}`}const Hn=Math.min,Un=Math.max,Wn=Math.round,Gn=Math.floor,Kn=e=>({x:e,y:e}),qn={left:`right`,right:`left`,bottom:`top`,top:`bottom`};function Jn(e,t,n){return Un(e,Hn(t,n))}function Yn(e,t){return typeof e==`function`?e(t):e}function Xn(e){return e.split(`-`)[0]}function Zn(e){return e.split(`-`)[1]}function Qn(e){return e===`x`?`y`:`x`}function $n(e){return e===`y`?`height`:`width`}function er(e){let t=e[0];return t===`t`||t===`b`?`y`:`x`}function tr(e){return Qn(er(e))}function nr(e,t,n){n===void 0&&(n=!1);let r=Zn(e),i=tr(e),a=$n(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=dr(o)),[o,dr(o)]}function rr(e){let t=dr(e);return[ir(e),t,ir(t)]}function ir(e){return e.includes(`start`)?e.replace(`start`,`end`):e.replace(`end`,`start`)}const ar=[`left`,`right`],or=[`right`,`left`],sr=[`top`,`bottom`],cr=[`bottom`,`top`];function lr(e,t,n){switch(e){case`top`:case`bottom`:return n?t?or:ar:t?ar:or;case`left`:case`right`:return t?sr:cr;default:return[]}}function ur(e,t,n,r){let i=Zn(e),a=lr(Xn(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(ir)))),a}function dr(e){let t=Xn(e);return qn[t]+e.slice(t.length)}function fr(e){return{top:e.top??0,right:e.right??0,bottom:e.bottom??0,left:e.left??0}}function pr(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:fr(e)}function mr(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function hr(e,t,n){let{reference:r,floating:i}=e,a=er(t),o=tr(t),s=$n(o),c=Xn(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}let m=Zn(t);return m&&(p[o]+=f*(m===`end`?1:-1)*(n&&l?-1:1)),p}async function gr(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=Yn(t,e),p=pr(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=mr(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=mr(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}const _r=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=o.detectOverflow?o:{...o,detectOverflow:gr},c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=hr(l,r,c),f=r,p=0,m={};for(let n=0;n<a.length;n++){let h=a[n];if(!h)continue;let{name:g,fn:_}=h,{x:v,y,data:b,reset:x}=await _({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:m,rects:l,platform:s,elements:{reference:e,floating:t}});u=v??u,d=y??d,m[g]={...m[g],...b},x&&p<50&&(p++,typeof x==`object`&&(x.placement&&(f=x.placement),x.rects&&(l=x.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):x.rects),{x:u,y:d}=hr(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:m}},vr=e=>({name:`arrow`,options:e,async fn(t){let{x:n,y:r,placement:i,rects:a,platform:o,elements:s,middlewareData:c}=t,{element:l,padding:u=0}=Yn(e,t)||{};if(l==null)return{};let d=pr(u),f={x:n,y:r},p=tr(i),m=$n(p),h=await o.getDimensions(l),g=p===`y`,_=g?`top`:`left`,v=g?`bottom`:`right`,y=g?`clientHeight`:`clientWidth`,b=a.reference[m]+a.reference[p]-f[p]-a.floating[m],x=f[p]-a.reference[p],ee=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l)),S=ee?ee[y]:0;(!S||!await(o.isElement==null?void 0:o.isElement(ee)))&&(S=s.floating[y]||a.floating[m]);let te=b/2-x/2,ne=S/2-h[m]/2-1,re=Hn(d[_],ne),ie=Hn(d[v],ne),ae=S-h[m]-ie,oe=S/2-h[m]/2+te,se=Jn(re,oe,ae),ce=!c.arrow&&Zn(i)!=null&&oe!==se&&a.reference[m]/2-(oe<re?re:ie)-h[m]/2<0,le=ce?oe<re?oe-re:oe-ae:0;return{[p]:f[p]+le,data:{[p]:se,centerOffset:oe-se-le,...ce&&{alignmentOffset:le}},reset:ce}}}),yr=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=Yn(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=Xn(r),_=er(o),v=Xn(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),b=d||(v||!m?[dr(o)]:rr(o)),x=p!==`none`;!d&&x&&b.push(...ur(o,m,p,y));let ee=[o,...b],S=await s.detectOverflow(t,h),te=[],ne=i.flip?.overflows||[];if(l&&te.push(S[g]),u){let e=nr(r,a,y);te.push(S[e[0]],S[e[1]])}if(ne=[...ne,{placement:r,overflows:te}],!te.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=ee[e];if(t&&(u!==`alignment`||_===er(t)||ne.every(e=>er(e.placement)!==_||e.overflows[0]>0)))return{data:{index:e,overflows:ne},reset:{placement:t}};let n=ne.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=ne.filter(e=>{if(x){let t=er(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o}if(r!==n)return{reset:{placement:n}}}return{}}}},br=/*#__PURE__*/ new Set([`left`,`top`]);async function xr(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=Xn(n),s=Zn(n),c=er(n)===`y`,l=br.has(o)?-1:1,u=a&&c?-1:1,d=Yn(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}const Sr=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await xr(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},Cr=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i,platform:a}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=Yn(e,t),u={x:n,y:r},d=await a.detectOverflow(t,l),f=er(i),p=Qn(f),m=u[p],h=u[f],g=(e,t)=>Jn(t+d[e===`y`?`top`:`left`],t,t-d[e===`y`?`bottom`:`right`]);o&&(m=g(p,m)),s&&(h=g(f,h));let _=c.fn({...t,[p]:m,[f]:h});return{..._,data:{x:_.x-n,y:_.y-r,enabled:{[p]:o,[f]:s}}}}}},wr=function(e){return e===void 0&&(e={}),{name:`size`,options:e,async fn(t){let{placement:n,rects:r,platform:i,elements:a}=t,{apply:o=()=>{},...s}=Yn(e,t),c=await i.detectOverflow(t,s),l=Xn(n),u=Zn(n),d=er(n)===`y`,{width:f,height:p}=r.floating,m,h;l===`top`||l===`bottom`?(m=l,h=u===(await(i.isRTL==null?void 0:i.isRTL(a.floating))?`start`:`end`)?`left`:`right`):(h=l,m=u===`end`?`top`:`bottom`);let g=p-c.top-c.bottom,_=f-c.left-c.right,v=Hn(p-c[m],g),y=Hn(f-c[h],_),b=t.middlewareData.shift,x=!b,ee=v,S=y;b!=null&&b.enabled.x&&(S=_),b!=null&&b.enabled.y&&(ee=g),x&&!u&&(d?S=f-2*Un(c.left,c.right):ee=p-2*Un(c.top,c.bottom)),await o({...t,availableWidth:S,availableHeight:ee});let te=await i.getDimensions(a.floating);return f!==te.width||p!==te.height?{reset:{rects:!0}}:{}}}};function Tr(){return typeof window<`u`}function Er(e){return Or(e)?(e.nodeName||``).toLowerCase():`#document`}function O(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Dr(e){return((Or(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function Or(e){return Tr()?e instanceof Node||e instanceof O(e).Node:!1}function kr(e){return Tr()?e instanceof Element||e instanceof O(e).Element:!1}function Ar(e){return Tr()?e instanceof HTMLElement||e instanceof O(e).HTMLElement:!1}function jr(e){return!Tr()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof O(e).ShadowRoot}function Mr(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=Ur(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!==`inline`&&i!==`contents`}function Nr(e){return/^(table|td|th)$/.test(Er(e))}function Pr(e){try{if(e.matches(`:popover-open`))return!0}catch{}try{return e.matches(`:modal`)}catch{return!1}}const Fr=/transform|translate|scale|rotate|perspective|filter/,Ir=/paint|layout|strict|content/,Lr=e=>!!e&&e!==`none`;let Rr;function zr(e){let t=kr(e)?Ur(e):e;return Lr(t.transform)||Lr(t.translate)||Lr(t.scale)||Lr(t.rotate)||Lr(t.perspective)||!Vr()&&(Lr(t.backdropFilter)||Lr(t.filter))||Fr.test(t.willChange||``)||Ir.test(t.contain||``)}function Br(e){let t=Gr(e);for(;Ar(t)&&!Hr(t);){if(zr(t))return t;if(Pr(t))return null;t=Gr(t)}return null}function Vr(){return Rr??=typeof CSS<`u`&&CSS.supports&&CSS.supports(`-webkit-backdrop-filter`,`none`),Rr}function Hr(e){return/^(html|body|#document)$/.test(Er(e))}function Ur(e){return O(e).getComputedStyle(e)}function Wr(e){return kr(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Gr(e){if(Er(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||jr(e)&&e.host||Dr(e);return jr(t)?t.host:t}function Kr(e){let t=Gr(e);return Hr(t)?(e.ownerDocument||e).body:Ar(t)&&Mr(t)?t:Kr(t)}function qr(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=Kr(e),i=r===e.ownerDocument?.body,a=O(r);if(i){let e=Jr(a);return t.concat(a,a.visualViewport||[],Mr(r)?r:[],e&&n?qr(e):[])}return t.concat(r,qr(r,[],n))}function Jr(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Yr(e){let t=Ur(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=Ar(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=Wn(n)!==a||Wn(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function Xr(e){return kr(e)?e:e.contextElement}function Zr(e){let t=Xr(e);if(!Ar(t))return Kn(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=Yr(t),o=(a?Wn(n.width):n.width)/r,s=(a?Wn(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}const Qr=/*#__PURE__*/ Kn(0);function $r(e){let t=O(e);return!Vr()||!t.visualViewport?Qr:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function ei(e,t,n){return t===void 0&&(t=!1),!!n&&t&&n===O(e)}function ti(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=Xr(e),o=Kn(1);t&&(r?kr(r)&&(o=Zr(r)):o=Zr(e));let s=ei(a,n,r)?$r(a):Kn(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a&&r){let e=O(a),t=kr(r)?O(r):r,n=e,i=Jr(n);for(;i&&t!==n;){let e=Zr(i),t=i.getBoundingClientRect(),r=Ur(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=O(i),i=Jr(n)}}return mr({width:u,height:d,x:c,y:l})}function ni(e,t){let n=Wr(e).scrollLeft;return t?t.left+n:ti(Dr(e)).left+n}function ri(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-ni(e,n),y:n.top+t.scrollTop}}function ii(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=Dr(r),s=t?Pr(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=Kn(1),u=Kn(0),d=Ar(r);if((d||!a)&&((Er(r)!==`body`||Mr(o))&&(c=Wr(r)),d)){let e=ti(r);l=Zr(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?ri(o,c):Kn(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function ai(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function oi(e){let t=Wr(e),n=e.ownerDocument.body,r=Un(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),i=Un(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight),a=-t.scrollLeft+ni(e),o=-t.scrollTop;return Ur(n).direction===`rtl`&&(a+=Un(e.clientWidth,n.clientWidth)-r),{width:r,height:i,x:a,y:o}}function si(e,t,n){n===void 0&&(n=`viewport`);let r=n===`layoutViewport`,i=O(e),a=Dr(e),o=i.visualViewport,s=a.clientWidth,c=a.clientHeight,l=0,u=0;if(o){let e=!Vr()||t===`fixed`;r?e||(l=-o.offsetLeft,u=-o.offsetTop):(s=o.width,c=o.height,e&&(l=o.offsetLeft,u=o.offsetTop))}if(ni(a)<=0){let e=a.ownerDocument,t=e.body,n=getComputedStyle(t),r=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,i=Math.abs(a.clientWidth-t.clientWidth-r),o=getComputedStyle(a).scrollbarGutter===`stable both-edges`?i/2:i;o<=25&&(s-=o)}return{width:s,height:c,x:l,y:u}}function ci(e,t){let n=ti(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=Zr(e);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function li(e,t,n){let r;if(t===`viewport`||t===`layoutViewport`)r=si(e,n,t);else if(t===`document`)r=oi(Dr(e));else if(kr(t))r=ci(t,n);else{let n=$r(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return mr(r)}function ui(e,t){let n=t.get(e);if(n)return n;let r=qr(e,[],!1).filter(e=>kr(e)&&Er(e)!==`body`),i=null,a=Ur(e).position===`fixed`,o=a?Gr(e):e;for(;kr(o)&&!Hr(o);){let e=Ur(o),t=zr(o),n=i?i.position:a?`fixed`:``;!t&&(n===`fixed`||n===`absolute`&&e.position===`static`)?r=r.filter(e=>e!==o):i=e,o=Gr(o)}return t.set(e,r),r}function di(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?Pr(t)?[]:ui(t,this._c):[].concat(n),r],o=li(t,a[0],i),s=o.top,c=o.right,l=o.bottom,u=o.left;for(let e=1;e<a.length;e++){let n=li(t,a[e],i);s=Un(n.top,s),c=Hn(n.right,c),l=Hn(n.bottom,l),u=Un(n.left,u)}return{width:c-u,height:l-s,x:u,y:s}}function fi(e){let{width:t,height:n}=Yr(e);return{width:t,height:n}}function pi(e,t,n){let r=Ar(t),i=Dr(t),a=n===`fixed`,o=ti(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=Kn(0);if((r||!a)&&((Er(t)!==`body`||Mr(i))&&(s=Wr(t)),r)){let e=ti(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}!r&&i&&(c.x=ni(i));let l=i&&!r&&!a?ri(i,s):Kn(0);return{x:o.left+s.scrollLeft-c.x-l.x,y:o.top+s.scrollTop-c.y-l.y,width:o.width,height:o.height}}function mi(e){return Ur(e).position===`static`}function hi(e,t){if(!Ar(e)||Ur(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return Dr(e)===n&&(n=n.ownerDocument.body),n}function gi(e,t){let n=O(e);if(Pr(e))return n;if(!Ar(e)){let t=Gr(e);for(;t&&!Hr(t);){if(kr(t)&&!mi(t))return t;t=Gr(t)}return n}let r=hi(e,t);for(;r&&Nr(r)&&mi(r);)r=hi(r,t);return r&&Hr(r)&&mi(r)&&!zr(r)?n:r||Br(e)||n}const _i=async function(e){let t=this.getOffsetParent||gi,n=this.getDimensions,r=await n(e.floating);return{reference:pi(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function vi(e){return Ur(e).direction===`rtl`}const yi={convertOffsetParentRelativeRectToViewportRelativeRect:ii,getDocumentElement:Dr,getClippingRect:di,getOffsetParent:gi,getElementRects:_i,getClientRects:ai,getDimensions:fi,getScale:Zr,isElement:kr,isRTL:vi};function bi(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function xi(e,t,n){let r=null,i,a=Dr(e);function o(){var e;clearTimeout(i),(e=r)==null||e.disconnect(),r=null}function s(n,c){n===void 0&&(n=!1),c===void 0&&(c=1),o();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(n||t(),!f||!p)return;let m=Gn(d),h=Gn(a.clientWidth-(u+f)),g=Gn(a.clientHeight-(d+p)),_=Gn(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:Un(0,Hn(1,c))||1},y=!0;function b(t){let n=t[0].intersectionRatio;if(!bi(l,e.getBoundingClientRect()))return s();if(n!==c){if(!y)return s();n?s(!1,n):i=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{r=new IntersectionObserver(b,{...v,root:a.ownerDocument})}catch{r=new IntersectionObserver(b,v)}r.observe(e)}let c=O(e),l=()=>s(n);return c.addEventListener(`resize`,l),s(!0),()=>{c.removeEventListener(`resize`,l),o()}}function Si(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=Xr(e),u=i||a?[...l?qr(l):[],...t?qr(t):[]]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n),a&&e.addEventListener(`resize`,n)});let d=l&&s?xi(l,n,a):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&t&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),t&&p.observe(t));let m,h=c?ti(e):null;c&&g();function g(){let t=ti(e);h&&!bi(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}const Ci=Sr,wi=Cr,Ti=yr,Ei=wr,Di=vr,Oi=(e,t,n)=>{let r=/* @__PURE__ */ new Map,i=n??{},a={...yi,...i.platform,_c:r};return _r(e,t,{...i,platform:a})};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var ki=/* @__PURE__ */ new Set,k=class extends ft{constructor(){super(...arguments),this.submenuCleanups=/* @__PURE__ */ new Map,this.localize=new Pt(this),this.userTypedQuery=``,this.openSubmenuStack=[],this.open=!1,this.size=`m`,this.placement=`bottom-start`,this.distance=0,this.skidding=0,this.handleDocumentKeyDown=async e=>{let t=this.localize.dir()===`rtl`;if(e.key===`Escape`&&this.open&&zn(this)){let t=this.getTrigger();e.preventDefault(),e.stopPropagation(),this.open=!1,t?.focus({preventScroll:!0});return}let n=[...An()].find(e=>e.localName===`wa-dropdown-item`),r=n?.localName===`wa-dropdown-item`,i=this.getCurrentSubmenuItem(),a=!!i,o,s,c;a?(o=this.getSubmenuItems(i),s=o.find(e=>e.active||e===n),c=s?o.indexOf(s):-1):(o=this.getItems(),s=o.find(e=>e.active||e===n),c=s?o.indexOf(s):-1);let l;if(e.key===`ArrowUp`&&(e.preventDefault(),e.stopPropagation(),l=c>0?o[c-1]:o[o.length-1]),e.key===`ArrowDown`&&(e.preventDefault(),e.stopPropagation(),l=c!==-1&&c<o.length-1?o[c+1]:o[0]),e.key===(t?`ArrowLeft`:`ArrowRight`)&&r&&s&&s.hasSubmenu)e.preventDefault(),e.stopPropagation(),s.submenuOpen=!0,this.addToSubmenuStack(s),setTimeout(()=>{let e=this.getSubmenuItems(s);e.length>0&&(e.forEach((e,t)=>e.active=t===0),e[0].focus({preventScroll:!0}))},0);else if(e.key===(t?`ArrowRight`:`ArrowLeft`)&&a){e.preventDefault(),e.stopPropagation();let t=this.removeFromSubmenuStack();t&&(t.submenuOpen=!1,setTimeout(()=>{t.focus({preventScroll:!0}),t.active=!0,(t.slot===`submenu`?this.getSubmenuItems(t.parentElement):this.getItems()).forEach(e=>{e!==t&&(e.active=!1)})},0))}else(e.key===`Home`||e.key===`End`)&&(e.preventDefault(),e.stopPropagation(),l=e.key===`Home`?o[0]:o[o.length-1]),e.key===`Tab`&&await this.hideMenu(),e.key.length===1&&!(e.metaKey||e.ctrlKey||e.altKey)&&(e.key!==` `||this.userTypedQuery!==``)&&(clearTimeout(this.userTypedTimeout),this.userTypedTimeout=setTimeout(()=>{this.userTypedQuery=``},1e3),this.userTypedQuery+=e.key,o.some(e=>{let t=(e.textContent||``).trim().toLowerCase(),n=this.userTypedQuery.trim().toLowerCase();return t.startsWith(n)?(l=e,!0):!1})),l?(e.preventDefault(),e.stopPropagation(),o.forEach(e=>e.active=e===l),l.focus({preventScroll:!0}),l.scrollIntoView({block:`nearest`})):(e.key===`Enter`||e.key===` `&&this.userTypedQuery===``)&&r&&s&&(e.preventDefault(),e.stopPropagation(),s.hasSubmenu?(s.submenuOpen=!0,this.addToSubmenuStack(s),setTimeout(()=>{let e=this.getSubmenuItems(s);e.length>0&&(e.forEach((e,t)=>e.active=t===0),e[0].focus({preventScroll:!0}))},0)):this.makeSelection(s,e))},this.handleDocumentPointerDown=e=>{e.composedPath().some(e=>e instanceof HTMLElement?e===this||e.closest(`wa-dropdown, [part="submenu"]`):!1)||(this.open=!1)},this.handleGlobalMouseMove=e=>{let t=this.getCurrentSubmenuItem();if(!t?.submenuOpen||!t.submenuElement)return;let n=t.submenuElement.getBoundingClientRect(),r=this.localize.dir()===`rtl`,i=r?n.right:n.left,a=r?Math.max(e.clientX,i):Math.min(e.clientX,i),o=Math.max(n.top,Math.min(e.clientY,n.bottom));t.submenuElement.style.setProperty(`--safe-triangle-cursor-x`,`${a}px`),t.submenuElement.style.setProperty(`--safe-triangle-cursor-y`,`${o}px`);let s=e.composedPath(),c=t.matches(`:hover`),l=!!t.submenuElement?.matches(`:hover`),u=c||!!s.find(e=>e===t),d=l||!!s.find(e=>e instanceof HTMLElement&&e.closest(`[part="submenu"]`)===t.submenuElement);!u&&!d&&setTimeout(()=>{!c&&!l&&(t.submenuOpen=!1)},100)}}handleSizeChange(){_t(this.localName,this.size)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.userTypedTimeout),this.closeAllSubmenus(),this.submenuCleanups.forEach(e=>e()),this.submenuCleanups.clear(),document.removeEventListener(`mousemove`,this.handleGlobalMouseMove),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`pointerdown`,this.handleDocumentPointerDown),Rn(this)}firstUpdated(e){super.firstUpdated(e),this.syncAriaAttributes()}async updated(e){if(e.has(`open`)){let t=e.get(`open`);if(t===this.open||t===void 0&&this.open===!1)return;this.customStates.set(`open`,this.open),this.open?await this.showMenu():(this.closeAllSubmenus(),await this.hideMenu())}e.has(`size`)&&this.syncItemSizes()}getItems(e=!1){let t=(this.defaultSlot?.assignedElements({flatten:!0})??[]).filter(e=>e.localName===`wa-dropdown-item`);return e?t:t.filter(e=>!e.disabled)}getSubmenuItems(e,t=!1){let n=e.shadowRoot?.querySelector(`slot[name="submenu"]`)||e.querySelector(`slot[name="submenu"]`);if(!n)return[];let r=n.assignedElements({flatten:!0}).filter(e=>e.localName===`wa-dropdown-item`);return t?r:r.filter(e=>!e.disabled)}syncItemSizes(){(this.defaultSlot?.assignedElements({flatten:!0})??[]).filter(e=>e.localName===`wa-dropdown-item`).forEach(e=>e.size=this.size)}addToSubmenuStack(e){let t=this.openSubmenuStack.indexOf(e);t===-1?this.openSubmenuStack.push(e):this.openSubmenuStack=this.openSubmenuStack.slice(0,t+1)}removeFromSubmenuStack(){return this.openSubmenuStack.pop()}getCurrentSubmenuItem(){return this.openSubmenuStack.length>0?this.openSubmenuStack[this.openSubmenuStack.length-1]:void 0}closeAllSubmenus(){this.getItems(!0).forEach(e=>{e.submenuOpen=!1}),this.openSubmenuStack=[]}closeSiblingSubmenus(e){let t=e.closest(`wa-dropdown-item:not([slot="submenu"])`),n;n=t?this.getSubmenuItems(t,!0):this.getItems(!0),n.forEach(t=>{t!==e&&t.submenuOpen&&(t.submenuOpen=!1)}),this.openSubmenuStack.includes(e)||this.openSubmenuStack.push(e)}getTrigger(){return this.querySelector(`[slot="trigger"]`)}async showMenu(){if(!this.getTrigger()||!this.popup||!this.menu)return;let e=new Mn;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}if(this.popup.active)return;ki.forEach(e=>e.open=!1),this.popup.active=!0,this.open=!0,ki.add(this),Ln(this),this.syncAriaAttributes(),document.addEventListener(`keydown`,this.handleDocumentKeyDown),document.addEventListener(`pointerdown`,this.handleDocumentPointerDown),document.addEventListener(`mousemove`,this.handleGlobalMouseMove),this.menu.classList.remove(`hide`),await Dn(this.menu,`show`);let t=this.getItems();t.length>0&&(t.forEach((e,t)=>e.active=t===0),t[0].focus({preventScroll:!0})),this.dispatchEvent(new Fn)}async hideMenu(){if(!this.popup||!this.menu)return;let e=new Nn({source:this});this.dispatchEvent(e),e.defaultPrevented?this.open=!0:(this.open=!1,ki.delete(this),Rn(this),this.syncAriaAttributes(),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`pointerdown`,this.handleDocumentPointerDown),document.removeEventListener(`mousemove`,this.handleGlobalMouseMove),this.menu.classList.remove(`show`),await Dn(this.menu,`hide`),this.popup.active=this.open,this.dispatchEvent(new Pn))}handleMenuClick(e){let t=e.target.closest(`wa-dropdown-item`);t&&!t.disabled&&(t.hasSubmenu?(t.submenuOpen||=(this.closeSiblingSubmenus(t),this.addToSubmenuStack(t),!0),e.stopPropagation()):this.makeSelection(t,e))}async handleMenuSlotChange(){let e=this.getItems(!0);await Promise.all(e.map(e=>e.updateComplete)),this.syncItemSizes();let t=e.some(e=>e.type===`checkbox`),n=e.some(e=>e.hasSubmenu);e.forEach((r,i)=>{r.setAttribute(`aria-posinset`,String(i+1)),r.setAttribute(`aria-setsize`,String(e.length)),r.active=i===0,r.checkboxAdjacent=t,r.submenuAdjacent=n})}handleTriggerClick(){this.open=!this.open}handleSubmenuOpening(e){let t=e.detail.item;this.closeSiblingSubmenus(t),this.addToSubmenuStack(t),this.setupSubmenuPosition(t),this.processSubmenuItems(t)}setupSubmenuPosition(e){if(!e.submenuElement)return;this.cleanupSubmenuPosition(e);let t=Si(e,e.submenuElement,()=>{this.positionSubmenu(e),this.updateSafeTriangleCoordinates(e)});this.submenuCleanups.set(e,t);let n=e.submenuElement.querySelector(`slot[name="submenu"]`);n&&(n.removeEventListener(`slotchange`,k.handleSubmenuSlotChange),n.addEventListener(`slotchange`,k.handleSubmenuSlotChange),k.handleSubmenuSlotChange({target:n}))}static handleSubmenuSlotChange(e){let t=e.target;if(!t)return;let n=t.assignedElements().filter(e=>e.localName===`wa-dropdown-item`);if(n.length===0)return;let r=n.some(e=>e.hasSubmenu),i=n.some(e=>e.type===`checkbox`);n.forEach(e=>{e.submenuAdjacent=r,e.checkboxAdjacent=i})}processSubmenuItems(e){if(!e.submenuElement)return;let t=this.getSubmenuItems(e,!0),n=t.some(e=>e.hasSubmenu);t.forEach(e=>{e.submenuAdjacent=n})}cleanupSubmenuPosition(e){let t=this.submenuCleanups.get(e);t&&(t(),this.submenuCleanups.delete(e))}positionSubmenu(e){if(!e.submenuElement)return;let t=this.localize.dir()===`rtl`?`left-start`:`right-start`;Oi(e,e.submenuElement,{placement:t,middleware:[Ci({mainAxis:0,crossAxis:-5}),Ti({fallbackStrategy:`bestFit`}),wi({padding:8,crossAxis:!0})]}).then(({x:t,y:n,placement:r})=>{e.submenuElement.setAttribute(`data-placement`,r),Object.assign(e.submenuElement.style,{left:`${t}px`,top:`${n}px`})})}updateSafeTriangleCoordinates(e){if(!e.submenuElement||!e.submenuOpen)return;if(document.activeElement?.matches(`:focus-visible`)){e.submenuElement.style.setProperty(`--safe-triangle-visible`,`none`);return}e.submenuElement.style.setProperty(`--safe-triangle-visible`,`block`);let t=e.submenuElement.getBoundingClientRect(),n=this.localize.dir()===`rtl`;e.submenuElement.style.setProperty(`--safe-triangle-submenu-start-x`,`${n?t.right:t.left}px`),e.submenuElement.style.setProperty(`--safe-triangle-submenu-start-y`,`${t.top}px`),e.submenuElement.style.setProperty(`--safe-triangle-submenu-end-x`,`${n?t.right:t.left}px`),e.submenuElement.style.setProperty(`--safe-triangle-submenu-end-y`,`${t.bottom}px`)}makeSelection(e,t){let n=this.getTrigger();if(e.disabled)return;e.type===`checkbox`&&(e.checked=!e.checked);let r=new kn({item:e});this.dispatchEvent(r),r.defaultPrevented||(e.navigate(t),this.open=!1,n?.focus({preventScroll:!0}))}async syncAriaAttributes(){let e=this.getTrigger(),t;e&&(e.localName===`wa-button`?(await customElements.whenDefined(`wa-button`),await e.updateComplete,t=e.shadowRoot.querySelector(`[part~="base"]`)):t=e,t.hasAttribute(`id`)||t.setAttribute(`id`,Vn(`wa-dropdown-trigger-`)),t.setAttribute(`aria-haspopup`,`menu`),t.setAttribute(`aria-expanded`,this.open?`true`:`false`),this.menu?.setAttribute(`aria-expanded`,`false`))}render(){let e=this.didSSR&&!this.hasUpdated?this.open:this.popup?.active;return Pe`
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
    `}};k.css=[yt,jn],s([ot(`slot:not([name])`)],k.prototype,`defaultSlot`,2),s([ot(`#menu`)],k.prototype,`menu`,2),s([ot(`wa-popup`)],k.prototype,`popup`,2),s([w({type:Boolean,reflect:!0})],k.prototype,`open`,2),s([w({reflect:!0})],k.prototype,`size`,2),s([St(`size`)],k.prototype,`handleSizeChange`,1),s([w({reflect:!0})],k.prototype,`placement`,2),s([w({type:Number})],k.prototype,`distance`,2),s([w({type:Number})],k.prototype,`skidding`,2),k=s([tt(`wa-dropdown`)],k);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ai=class extends Event{constructor(){super(`wa-reposition`,{bubbles:!0,cancelable:!1,composed:!0})}},ji=v`
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
;function Mi(e){return Pi(e)}function Ni(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Pi(e){for(let t=e;t;t=Ni(t))if(t instanceof Element&&getComputedStyle(t).display===`none`)return null;for(let t=Ni(e);t;t=Ni(t)){if(!(t instanceof Element))continue;let e=getComputedStyle(t);if(e.display!==`contents`&&(e.position!==`static`||zr(e)||t.tagName===`BODY`))return t}return null}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Fi(e){return typeof e==`object`&&!!e&&`getBoundingClientRect`in e&&(`contextElement`in e?e instanceof Element:!0)}var Ii=!!globalThis?.HTMLElement?.prototype.hasOwnProperty(`popover`),A=class extends ft{constructor(){super(...arguments),this.localize=new Pt(this),this.SUPPORTS_POPOVER=!1,this.active=!1,this.placement=`top`,this.boundary=`viewport`,this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement=`anchor`,this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements=``,this.flipFallbackStrategy=`best-fit`,this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl&&this.popup){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),n=this.placement.includes(`top`)||this.placement.includes(`bottom`),r=0,i=0,a=0,o=0,s=0,c=0,l=0,u=0;n?e.top<t.top?(r=e.left,i=e.bottom,a=e.right,o=e.bottom,s=t.left,c=t.top,l=t.right,u=t.top):(r=t.left,i=t.bottom,a=t.right,o=t.bottom,s=e.left,c=e.top,l=e.right,u=e.top):e.left<t.left?(r=e.right,i=e.top,a=t.left,o=t.top,s=e.right,c=e.bottom,l=t.left,u=t.bottom):(r=t.right,i=t.top,a=e.left,o=e.top,s=t.right,c=t.bottom,l=e.left,u=e.bottom),this.style.setProperty(`--hover-bridge-top-left-x`,`${r}px`),this.style.setProperty(`--hover-bridge-top-left-y`,`${i}px`),this.style.setProperty(`--hover-bridge-top-right-x`,`${a}px`),this.style.setProperty(`--hover-bridge-top-right-y`,`${o}px`),this.style.setProperty(`--hover-bridge-bottom-left-x`,`${s}px`),this.style.setProperty(`--hover-bridge-bottom-left-y`,`${c}px`),this.style.setProperty(`--hover-bridge-bottom-right-x`,`${l}px`),this.style.setProperty(`--hover-bridge-bottom-right-y`,`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.SUPPORTS_POPOVER=Ii,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has(`active`)&&(this.active?this.start():this.stop()),e.has(`anchor`)&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor==`string`){let e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchorEl=this.anchor instanceof Element||Fi(this.anchor)?this.anchor:this.querySelector(`[slot="anchor"]`);this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&this.active&&this.isConnected&&(this.popup?.showPopover?.(),this.cleanup=Si(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.popup?.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute(`data-current-placement`),this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl||!this.popup)return;let e=[Ci({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Ei({apply:({rects:e})=>{let t=this.sync===`width`||this.sync===`both`,n=this.sync===`height`||this.sync===`both`;this.popup.style.width=t?`${e.reference.width}px`:``,this.popup.style.height=n?`${e.reference.height}px`:``}})):(this.popup.style.width=``,this.popup.style.height=``);let t;this.SUPPORTS_POPOVER&&!Fi(this.anchor)&&this.boundary===`scroll`&&(t=qr(this.anchorEl).filter(e=>e instanceof Element)),this.flip&&e.push(Ti({boundary:this.flipBoundary||t,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy===`best-fit`?`bestFit`:`initialPlacement`,padding:this.flipPadding})),this.shift&&e.push(wi({boundary:this.shiftBoundary||t,padding:this.shiftPadding})),this.autoSize?e.push(Ei({boundary:this.autoSizeBoundary||t,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{this.autoSize===`vertical`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-height`,`${t}px`):this.style.removeProperty(`--auto-size-available-height`),this.autoSize===`horizontal`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-width`,`${e}px`):this.style.removeProperty(`--auto-size-available-width`)}})):(this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`)),this.arrow&&e.push(Di({element:this.arrowEl,padding:this.arrowPadding}));let n=this.SUPPORTS_POPOVER?e=>yi.getOffsetParent(e,Mi):yi.getOffsetParent;Oi(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.SUPPORTS_POPOVER?`absolute`:`fixed`,platform:{...yi,getOffsetParent:n}}).then(({x:e,y:t,middlewareData:n,placement:r})=>{let i=this.localize.dir()===`rtl`,a={top:`bottom`,right:`left`,bottom:`top`,left:`right`}[r.split(`-`)[0]];if(this.setAttribute(`data-current-placement`,r),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=n.arrow.x,t=n.arrow.y,r=``,o=``,s=``,c=``;if(this.arrowPlacement===`start`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;r=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``,o=i?n:``,c=i?``:n}else if(this.arrowPlacement===`end`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;o=i?``:n,c=i?n:``,s=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``}else this.arrowPlacement===`center`?(c=typeof e==`number`?`calc(50% - var(--arrow-size-diagonal))`:``,r=typeof t==`number`?`calc(50% - var(--arrow-size-diagonal))`:``):(c=typeof e==`number`?`${e}px`:``,r=typeof t==`number`?`${t}px`:``);Object.assign(this.arrowEl.style,{top:r,right:o,bottom:s,left:c,[a]:`calc(var(--arrow-base-offset) - var(--arrow-size-diagonal))`})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new Ai)}render(){return Pe`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${Rt({"popup-hover-bridge":!0,"popup-hover-bridge-visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${Rt({popup:!0,"popup-active":this.active,"popup-fixed":!this.SUPPORTS_POPOVER,"popup-has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?Pe`<div part="arrow" class="arrow" role="presentation"></div>`:``}
      </div>
    `}};A.css=ji,s([ot(`.popup`)],A.prototype,`popup`,2),s([ot(`.arrow`)],A.prototype,`arrowEl`,2),s([w({attribute:!1,type:Boolean})],A.prototype,`SUPPORTS_POPOVER`,2),s([w()],A.prototype,`anchor`,2),s([w({type:Boolean,reflect:!0})],A.prototype,`active`,2),s([w({reflect:!0})],A.prototype,`placement`,2),s([w()],A.prototype,`boundary`,2),s([w({type:Number})],A.prototype,`distance`,2),s([w({type:Number})],A.prototype,`skidding`,2),s([w({type:Boolean})],A.prototype,`arrow`,2),s([w({attribute:`arrow-placement`})],A.prototype,`arrowPlacement`,2),s([w({attribute:`arrow-padding`,type:Number})],A.prototype,`arrowPadding`,2),s([w({type:Boolean})],A.prototype,`flip`,2),s([w({attribute:`flip-fallback-placements`,converter:{fromAttribute:e=>e.split(` `).map(e=>e.trim()).filter(e=>e!==``),toAttribute:e=>e.join(` `)}})],A.prototype,`flipFallbackPlacements`,2),s([w({attribute:`flip-fallback-strategy`})],A.prototype,`flipFallbackStrategy`,2),s([w({type:Object})],A.prototype,`flipBoundary`,2),s([w({attribute:`flip-padding`,type:Number})],A.prototype,`flipPadding`,2),s([w({type:Boolean})],A.prototype,`shift`,2),s([w({type:Object})],A.prototype,`shiftBoundary`,2),s([w({attribute:`shift-padding`,type:Number})],A.prototype,`shiftPadding`,2),s([w({attribute:`auto-size`})],A.prototype,`autoSize`,2),s([w()],A.prototype,`sync`,2),s([w({type:Object})],A.prototype,`autoSizeBoundary`,2),s([w({attribute:`auto-size-padding`,type:Number})],A.prototype,`autoSizePadding`,2),s([w({attribute:`hover-bridge`,type:Boolean})],A.prototype,`hoverBridge`,2),A=s([tt(`wa-popup`)],A);var Li=/* @__PURE__ */ t({default:()=>k}),j
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;Object.getOwnPropertyDescriptors||(()=>{var e;if(typeof Reflect<`u`&&Reflect.ownKeys)e=Reflect.ownKeys;else{var t=Object.getOwnPropertySymbols||(e=>[]);e=(e=>Object.getOwnPropertyNames(e).concat(t(e)))}return(t=>{for(var n=e(t),r={},i=n.length|0,a=0;a!==i;){var o=n[a];Object.defineProperty(r,o,{configurable:!0,enumerable:!0,writable:!0,value:Object.getOwnPropertyDescriptor(t,o)}),a=a+1|0}return r})})();function Ri(e){this.c=e}j=Ri.prototype,j.toString=(function(){return String.fromCharCode(this.c)});function M(e,t){this.l=e,this.h=t}j=M.prototype,j.toString=(function(){return ac(this.l,this.h)});function zi(e){switch(typeof e){case`string`:return Hp.l();case`number`:return ea(e)?e<<24>>24===e?xf.l():e<<16>>16===e?Nf.l():Fp.l():ta(e)?Pp.l():Np.l();case`boolean`:return Rd.l();case`undefined`:return Zs.l();default:return e instanceof M?Rp.l():e instanceof Ri?Vd.l():e&&e.$classData?e.$classData.l():null}}function Bi(e){switch(typeof e){case`string`:return`java.lang.String`;case`number`:return ea(e)?e<<24>>24===e?`java.lang.Byte`:e<<16>>16===e?`java.lang.Short`:`java.lang.Integer`:ta(e)?`java.lang.Float`:`java.lang.Double`;case`boolean`:return`java.lang.Boolean`;case`undefined`:return`java.lang.Void`;default:return e instanceof M?`java.lang.Long`:e instanceof Ri?`java.lang.Character`:e&&e.$classData?e.$classData.N:null.hH()}}function Vi(e,t){switch(typeof e){case`string`:return Vp(e,t);case`number`:return jp(e,t);case`boolean`:return Id(e,t);case`undefined`:return Js(e,t);default:return e&&e.$classData||e===null?e.f(t):e instanceof M?Ip(e.l,e.h,t):e instanceof Ri?Bd(e.c,t):oa.prototype.f.call(e,t)}}function Hi(e){switch(typeof e){case`string`:return Bp(e);case`number`:return Mp(e);case`boolean`:return Ld(e);case`undefined`:return Ys(e);default:return e&&e.$classData||e===null?e.j():e instanceof M?Lp(e.l,e.h):e instanceof Ri?zd(e.c):oa.prototype.j.call(e)}}function Ui(e){return e===void 0?`undefined`:e.toString()}function Wi(e){if(e===0)throw new bf(`/ by zero`);return e}function Gi(e){return e>2147483647?2147483647:e<-2147483648?-2147483648:e|0}function Ki(e){return String.fromCharCode(e)}var qi=/* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(8));function Ji(e,t,n,r,i){if(e!==n||r-t>>>0>i>>>0)for(var a=0;a<i;a=a+1|0)n[r+a|0]=e[t+a|0];else for(var a=i-1|0;a>=0;a=a-1|0)n[r+a|0]=e[t+a|0]}var Yi=0,Xi=/* @__PURE__ */ new WeakMap;function Zi(e){switch(typeof e){case`string`:return Bp(e);case`number`:return Mp(e);case`bigint`:var t=0;for(e<BigInt(0)&&(e=~e);e!==BigInt(0);)t^=Number(BigInt.asIntN(32,e)),e>>=BigInt(32);return t;case`boolean`:return e?1231:1237;case`undefined`:return 0;case`symbol`:var n=e.description;return n===void 0?0:Bp(n);default:if(e===null)return 0;var r=Xi.get(e);return r===void 0&&(r=Yi+1|0,Yi=r,Xi.set(e,r)),r}}function Qi(e){return typeof e==`number`&&e<<24>>24===e&&1/e!=-1/0}function $i(e){return typeof e==`number`&&e<<16>>16===e&&1/e!=-1/0}function ea(e){return typeof e==`number`&&(e|0)===e&&1/e!=-1/0}function ta(e){return typeof e==`number`&&(e!==e||Math.fround(e)===e)}function na(e){return new Ri(e)}na(0);function N(e,t){return new M(e,t)}var ra=N(0,0);function ia(e){return e===null?0:e.c}function aa(e){return e===null?ra:e}function oa(){}j=oa.prototype,j.constructor=oa;function P(){}P.prototype=j,j.j=(function(){return Zi(this)}),j.f=(function(e){return this===e}),j.n=(function(){var e=this.j();return Bi(this)+`@`+(e>>>0).toString(16)}),j.toString=(function(){return this.n()});function F(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}j=F.prototype=new P,j.constructor=F,j.a0=(function(e,t,n,r){Ji(this.a,e,t.a,n,r)}),j.a2=(function(){return new F(this.a.slice())});function sa(){}sa.prototype=j;function ca(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=!1}else this.a=e}j=ca.prototype=new P,j.constructor=ca,j.a0=(function(e,t,n,r){Ji(this.a,e,t.a,n,r)}),j.a2=(function(){return new ca(this.a.slice())});function la(e){this.a=typeof e==`number`?new Uint16Array(e):e}j=la.prototype=new P,j.constructor=la,j.a0=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),j.a2=(function(){return new la(this.a.slice())});function ua(e){this.a=typeof e==`number`?new Int8Array(e):e}j=ua.prototype=new P,j.constructor=ua,j.a0=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),j.a2=(function(){return new ua(this.a.slice())});function da(e){this.a=typeof e==`number`?new Int16Array(e):e}j=da.prototype=new P,j.constructor=da,j.a0=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),j.a2=(function(){return new da(this.a.slice())});function fa(e){this.a=typeof e==`number`?new Int32Array(e):e}j=fa.prototype=new P,j.constructor=fa,j.a0=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),j.a2=(function(){return new fa(this.a.slice())});function pa(e){typeof e==`number`?(e<<=1,this.a=new Int32Array(e)):this.a=e}j=pa.prototype=new P,j.constructor=pa,j.a0=(function(e,t,n,r){t.a.set(this.a.subarray(e<<1,(e+r|0)<<1),n<<1)}),j.a2=(function(){return new pa(this.a.slice())});function ma(e){this.a=typeof e==`number`?new Float32Array(e):e}j=ma.prototype=new P,j.constructor=ma,j.a0=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),j.a2=(function(){return new ma(this.a.slice())});function ha(e){this.a=typeof e==`number`?new Float64Array(e):e}j=ha.prototype=new P,j.constructor=ha,j.a0=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),j.a2=(function(){return new ha(this.a.slice())});function I(){this.C=void 0,this.n=null,this.O=null,this.B=null,this.D=0,this.z=null,this.E=``,this.L=void 0,this.A=void 0,this.F=void 0,this.w=void 0,this.J=!1,this.N=``,this.X=!1,this.Y=!1,this.Z=!1,this.I=void 0}j=I.prototype,j.p=(function(e,t,n,r,i){this.n={},this.z=e,this.E=t;var a=this;return this.F=(e=>e===a),this.N=n,this.X=!0,this.I=(e=>!1),r!==void 0&&(this.A=new I().y(this,r,i,t===`J`)),this}),j.i=(function(e,t,n,r){var i=Object.getOwnPropertyNames(n)[0];return this.n=n,this.E=`L`+t+`;`,this.F=(e=>!!e.n[i]),this.J=e===2,this.N=t,this.Y=e===1,this.I=r||(e=>!!(e&&e.$classData&&e.$classData.n[i])),typeof e!=`number`&&(e.prototype.$classData=this),this}),j.y=(function(e,t,n,r,i){t.prototype.$classData=this;var a=`[`+e.E;this.C=t,this.n={r:1,a:1},this.O=e,this.B=e,this.D=1,this.E=a,this.N=a,this.Z=!0;var o=this;return this.F=i||(e=>o===e),this.w=r?(e=>{for(var n=e.length|0,r=new t(n),i=r.a,a=0;a<n;a=a+1|0){var o=e[a];i[a<<1]=o.l,i[(a<<1)+1|0]=o.h}return r}):n?(e=>new t(new n(e))):(e=>new t(e)),this.I=(e=>e instanceof t),this}),j.a=(function(e){function t(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}var n=t.prototype=new sa;n.constructor=t,n.a0=(function(e,t,n,r){Ji(this.a,e,t.a,n,r)}),n.a2=(function(){return new t(this.a.slice())}),n.$classData=this;var r=e.B||e,i=e.D+1,a=`[`+e.E;this.C=t,this.n={r:1,a:1},this.O=e,this.B=r,this.D=i,this.E=a,this.N=a,this.Z=!0;var o=(e=>{var t=e.D;return t===i?r.F(e.B):t>i&&r===L});this.F=o,this.w=(e=>new t(e));var s=this;return this.I=(e=>{var t=e&&e.$classData;return!!t&&(t===s||o(t))}),this}),j.r=(function(){return this.A||=new I().a(this),this.A}),j.l=(function(){return this.L||=new qu(this),this.L}),j.R=(function(e){return this===e||this.F(e)}),j.S=(function(){return this.P?this.P.l():null}),j.Q=(function(){return this.O?this.O.l():null}),j.U=(function(e){if(this===ga)throw Cf(new wf);return new(this.r()).C(e)});var L=new I;L.n={},L.E=`Ljava.lang.Object;`,L.F=(e=>!e.X),L.N=`java.lang.Object`,L.I=(e=>e!==null),L.A=new I().y(L,F,void 0,!1,(e=>{var t=e.D;return t===1?!e.B.X:t>1})),oa.prototype.$classData=L;var ga=new I().p(void 0,`V`,`void`,void 0,void 0),_a=new I().p(!1,`Z`,`boolean`,ca,void 0),va=new I().p(0,`C`,`char`,la,Uint16Array),ya=new I().p(0,`B`,`byte`,ua,Int8Array),ba=new I().p(0,`S`,`short`,da,Int16Array),xa=new I().p(0,`I`,`int`,fa,Int32Array),Sa=new I().p(ra,`J`,`long`,pa,Int32Array),Ca=new I().p(0,`F`,`float`,ma,Float32Array),wa=new I().p(0,`D`,`double`,ha,Float64Array);new Int8Array(new Int32Array([1]).buffer)[0];function Ta(e,t,n){for(var r=new Int32Array(e),i=t.length|0,a=0,o=0,s=0,c=0;o!==i;){var l=t.charCodeAt(o);l<80?c=(c|l-48)<<5:(c|=l-93,a=(a&n)+c|0,r[s]=a,s=s+1|0,c=0),o=o+1|0}return r}function Ea(e,t){return new fa(Ta(e,t,-1))}function Da(e){return zi(e).cU()+`@`+Zi(e)}function Oa(e){var t=e.d4;return t===void 0?Da(e):t}function ka(){Aa=this,ja().hE(new Y((e=>void 0)),wc().eg,!0)}j=ka.prototype=new P,j.constructor=ka,j.hE=(function(e,t,n){return new Ed(e,n,t,this)}),new I().i(ka,`com.raquo.airstream.core.Observer$`,{bu:1});var Aa;function ja(){return Aa||=new ka,Aa}function Ma(e){this.cm=null,this.d5=null,this.cn=0,this.cm=e,this.d5=void 0;var t=Ja().bI();this.cn=t===void 0?1:1+t.cn|0,Ia().bN===-1||this.cn>Ia().bN?Cu().bL(new Op(this,Ia().bN)):Ba().T?Ba().aG.push(this)|0:Ja().cM(this)}j=Ma.prototype=new P,j.constructor=Ma;var Na=new I().i(Ma,`com.raquo.airstream.core.Transaction`,{bx:1});function Pa(){this.bN=0,this.d6=null,Fa=this,this.bN=1e3,this.d6=new Y((e=>{throw Ju(new K,`Attempted to run Transaction `+e+` after it was already executed.`)}))}j=Pa.prototype=new P,j.constructor=Pa,j.eT=(function(e){try{e.cm.c(e);var t=e.d5;if(t!==void 0)for(;t.hJ();)t.hG().hK(e)}catch(e){var n=e instanceof tu?e:new vm(e);Cu().bL(n)}}),new I().i(Pa,`com.raquo.airstream.core.Transaction$`,{by:1});var Fa;function Ia(){return Fa||=new Pa,Fa}function La(e){e.bO.length|0?new Ma(new Y((t=>{for(;(e.bO.length|0)>0;){var n=e.bO.shift();try{n.c(t)}catch(e){var r=e instanceof tu?e:new vm(e);Cu().bL(r)}}for(;(e.aG.length|0)>0;){var i=e.aG.shift();Ja().cM(i)}}))):(e.aG.length|0)>0&&new Ma(new Y((t=>{for(;(e.aG.length|0)>0;)Ja().cM(e.aG.shift())})))}function Ra(){this.T=!1,this.bO=null,this.aG=null,za=this,this.T=!1,this.bO=mo().aN(B().aF(new(gc.r()).C([]))),this.aG=mo().aN(B().aF(new(Na.r()).C([])))}j=Ra.prototype=new P,j.constructor=Ra,new I().i(Ra,`com.raquo.airstream.core.Transaction$onStart$`,{bz:1});var za;function Ba(){return za||=new Ra,za}function Va(e,t){return e.aH.get(t)}function Ha(e,t){e.bP.unshift(t)}function Ua(e){return e.bP.shift()}function Wa(e,t,n){var r=Va(e,t),i=r===void 0,a=r===void 0?mo().aN(B().aF(new(Na.r()).C([]))):r;a.push(n),i&&e.aH.set(t,a)}function Ga(e,t){var n=Va(e,t),r=n===void 0||(n.length|0)>0?n:void 0;if(r!==void 0){var i=r.shift();return r.length|0||e.aH.delete(t),i}}function Ka(){this.bP=null,this.aH=null,qa=this,this.bP=mo().aN(B().aF(new(Na.r()).C([]))),this.aH=/* @__PURE__ */ new Map}j=Ka.prototype=new P,j.constructor=Ka,j.cM=(function(e){var t=this.bI();t===void 0?(Ha(this,e),Ia().eT(e),this.gi(e)):Wa(this,t,e)}),j.gi=(function(e){for(var t=e;;){var n=this.bI(),r=t;if(!(n!==void 0&&Zc().H(r,n)))throw Ju(new K,`Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.`);this.h8(t),t.cm=Ia().d6;var i=this.bI();if(Zc().H(i,void 0)){if((this.aH.size|0)>0){var a=new _u(0);throw this.aH.forEach((e=>((t,n)=>{e.bv=e.bv+(t.length|0)|0}))(a)),Ju(new K,`Transaction queue error: Stack cleared, but a total of `+a.bv+` children for `+(this.aH.size|0)+` transactions remain. This is a bug in Airstream.`)}return}Ia().eT(i),t=i}}),j.h8=(function(e){for(var t=e;;){var n=Ga(this,t);if(Zc().H(n,void 0)){Ua(this);var r=this.bI();if(!Zc().H(r,void 0))t=r;else return}else{Ha(this,n);return}}}),j.bI=(function(){return this.bP[0]}),new I().i(Ka,`com.raquo.airstream.core.Transaction$pendingTransactions$`,{bA:1});var qa;function Ja(){return qa||=new Ka,qa}function Ya(e,t){var n=e.ah.indexOf(t)|0;if(n!==-1)e.ah.splice(n,1),e.C.b()||t.fg();else throw Ju(new K,`Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?`)}function Xa(e){for(;(e.bQ.length|0)>0;)Ya(e,e.bQ.shift())}function Za(e){this.d7=null,this.ah=null,this.aV=!1,this.bQ=null,this.C=null,this.aW=0,this.d7=e,this.ah=mo().aN(B().aF(new($a.r()).C([]))),this.aV=!0,this.bQ=mo().aN(B().aF(new($a.r()).C([]))),this.C=X(),this.aW=0}j=Za.prototype=new P,j.constructor=Za,j.eN=(function(){if(this.C.b()){var e=Ba(),t=(()=>{var e=new vl(this.d7);this.C=new Gp(e),this.aV=!1,this.aW=0;for(var t=0,n=this.ah.length|0;t<n;){var r=t+this.aW|0;this.ah[r].ff(e),t=1+t|0}Xa(this),this.aV=!0,this.aW=0});if(Ba(),e.T)t();else{e.T=!0;try{t()}finally{e.T=!1,La(e)}}}else throw Ju(new K,`Can not activate `+this+`: it is already active`)}),j.ga=(function(){if(this.C.b())throw Ju(new K,`Can not deactivate DynamicOwner: it is not active`);this.aV=!1;for(var e=this.ah,t=0,n=e.length|0;t<n;)e[t].fg(),t=1+t|0;Xa(this);var r=this.C;r.b()||r.s().gV(),Xa(this),this.aV=!0,this.C=X()}),j.fR=(function(e,t){t?(this.aW=1+this.aW|0,this.ah.unshift(e)):this.ah.push(e);var n=this.C;if(!n.b()){var r=n.s();e.ff(r)}}),j.he=(function(e){this.aV?Ya(this,e):this.bQ.push(e)}),new I().i(Za,`com.raquo.airstream.ownership.DynamicOwner`,{bB:1});function Qa(e,t,n){this.bR=null,this.d8=null,this.bS=null,this.bR=e,this.d8=t,this.bS=X(),e.fR(this,n)}j=Qa.prototype=new P,j.constructor=Qa,j.cf=(function(){this.bR.he(this)}),j.ff=(function(e){var t=Ba(),n=(()=>{this.bS=this.d8.c(e)});if(Ba(),t.T)n();else{t.T=!0;try{n()}finally{t.T=!1,La(t)}}}),j.fg=(function(){var e=this.bS;e.b()||(e.s().cf(),this.bS=X())});var $a=new I().i(Qa,`com.raquo.airstream.ownership.DynamicSubscription`,{bC:1});function eo(){}j=eo.prototype=new P,j.constructor=eo,j.hA=(function(e,t,n){return new Qa(e,new Y((e=>new Gp(t.c(e)))),n)}),j.hq=(function(e,t,n){return new Qa(e,new Y((e=>(t.c(e),X()))),n)}),new I().i(eo,`com.raquo.airstream.ownership.DynamicSubscription$`,{bD:1});var to;function no(){return to||=new eo,to}function ro(e){e.aX=mo().aN(B().aF(new(lo.r()).C([])))}function io(e){for(var t=e.aX,n=0,r=t.length|0;n<r;)so(t[n]),n=1+n|0;e.aX.length=0}function ao(e,t){var n=e.aX.indexOf(t)|0;if(n!==-1)e.aX.splice(n,1);else throw Ju(new K,`Can not remove Subscription from Owner: subscription not found.`)}function oo(e,t){e.aX.push(t)}function so(e){if(!e.cp)e.da.W(),e.cp=!0;else throw Ju(new K,`Can not kill Subscription: it was already killed.`)}function co(e,t){this.db=null,this.da=null,this.cp=!1,this.db=e,this.da=t,this.cp=!1,e.h7(this)}j=co.prototype=new P,j.constructor=co,j.cf=(function(){so(this),ao(this.db,this)});var lo=new I().i(co,`com.raquo.airstream.ownership.Subscription`,{bG:1});function uo(e,t){this.dc=null,this.dd=null,this.ai=null,this.aI=!1,this.dc=e,this.dd=t,this.ai=X(),this.aI=!1}j=uo.prototype=new P,j.constructor=uo,j.gR=(function(){var e=this.ai;return!e.b()&&!e.s().bR.C.b()}),j.hj=(function(e){if(this.aI)throw Ju(new K,`Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var t=this.ai;if(t.b())var n=!1;else var r=t.s().bR,n=e===null?r===null:e===r;if(!n){this.gR()&&!e.C.b()&&(this.aI=!0);var i=this.ai;i.b()||(i.s().cf(),this.ai=X());var a=no().hA(e,new Y((e=>(this.aI||this.dc.W(),new co(e,new sf((()=>{this.aI||this.dd.W()})))))),!1);this.ai=new Gp(a),this.aI=!1}}),j.g5=(function(){if(this.aI)throw Ju(new K,`Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var e=this.ai;e.b()||e.s().cf(),this.ai=X()}),new I().i(uo,`com.raquo.airstream.ownership.TransferableSubscription`,{bH:1});function fo(){}j=fo.prototype=new P,j.constructor=fo,j.aN=(function(e){return[...dl().hx(e)]}),new I().i(fo,`com.raquo.ew.JsArray$`,{bI:1});var po;function mo(){return po||=new fo,po}function ho(){}j=ho.prototype=new P,j.constructor=ho,j.gA=(function(e,t){for(var n=0,r=e.length|0;n<r;)t(e[n]),n=1+n|0}),new I().i(ho,`com.raquo.ew.JsArray$RichJsArray$`,{bJ:1});var go;function _o(){return go||=new ho,go}function vo(){this.de=null,yo=this,document.createElement(`template`),this.g8(J().o.hr().hs()),this.de=/* @__PURE__ */ RegExp(` `,`g`)}j=vo.prototype=new P,j.constructor=vo,j.fW=(function(e,t){try{return e.appendChild(t),!0}catch(e){var n=e instanceof tu?e:new vm(e);if(n instanceof vm&&n.U instanceof DOMException)return!1;throw n instanceof vm?n.U:n}}),j.gS=(function(e,t){for(var n=e;;){if(n.parentNode!==null)var r=n.parentNode;else var i=n.host,r=i===void 0?null:i;if(r===null)return!1;if(Zc().H(t,r))return!0;n=r}}),j.g7=(function(e){return document.createElement(e.cW())}),j.gH=(function(e,t){var n=this.gI(e,t);return n===void 0?void 0:t.be.cb(n)}),j.gI=(function(e,t){var n=e.a7.getAttributeNS(null,t.aJ);return n===null?void 0:n}),j.fn=(function(e,t,n){this.hh(e,t,t.be.ce(n))}),j.hh=(function(e,t,n){n===null?this.hd(e,t):e.a7.setAttribute(t.aJ,n)}),j.hd=(function(e,t){e.a7.removeAttribute(t.aJ)}),j.hi=(function(e,t,n){var r=e.a7,i=t.bf,a=t.bg,o=n===null?null:n;o===null?(a.X(new Y((e=>r.style.removeProperty(``+e+i)))),r.style.removeProperty(i)):(a.X(new Y((e=>{r.style.setProperty(``+e+i,o)}))),r.style.setProperty(i,o))}),j.g8=(function(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e.dP)}),j.gL=(function(e,t){var n=this.gM(e,t);return n===void 0?void 0:t.ct.cb(n)}),j.gM=(function(e,t){var n=e.cY(),r=t.bW,i=n.getAttributeNS(r.b()?null:r.s(),t.cu);return i===null?void 0:i}),j.hk=(function(e,t,n){this.hl(e,t,t.ct.ce(n))}),j.hl=(function(e,t,n){if(n===null)this.hf(e,t);else{var r=t.bW;if(r.b())e.cY().setAttribute(t.bV,n);else{var i=r.s();e.cY().setAttributeNS(i,t.bV,n)}}}),j.hf=(function(e,t){var n=e.cY(),r=t.bW;n.removeAttributeNS(r.b()?null:r.s(),t.cu)}),j.g9=(function(e){return document.createTextNode(e)}),j.gc=(function(e,t){for(var n=t,r=e;;){if(r===null)return n;var i=r.parentNode,a=new jh(this.gb(r),n);r=i,n=a}}),j.gb=(function(e){if(e instanceof HTMLElement){var t=e.id;if(Ic(),t!==``)var n=`#`+t;else var r=e.className,n=(Ic(),r===``?``:`.`+r.replace(this.de,`.`));return e.tagName.toLowerCase()+n}return e.nodeName}),new I().i(vo,`com.raquo.laminar.DomApi$`,{bK:1});var yo;function bo(){return yo||=new vo,yo}function xo(e,t,n){this.cr=null,this.df=null,this.cq=null,this.cr=e,this.df=t,this.cq=n}j=xo.prototype=new P,j.constructor=xo,j.X=(function(e){this.cr===null?this.cq===null?Dc().gB(this.df,e):_o().gA(this.cq,_d().gE(e)):this.cr.X(e)}),new I().i(xo,`com.raquo.laminar.Seq`,{bL:1});function So(){Co=this,$()}j=So.prototype=new P,j.constructor=So,new I().i(So,`com.raquo.laminar.Seq$`,{bM:1});var Co;function wo(){return Co||=new So,Co}function To(e){ja(),Cu()}function Eo(e){e.fu=Yo()}function Do(e){Oo(e,new Y((e=>{e.dC.a7.focus()})))}function Oo(e,t){return new Dl(new Y((e=>{var n=new gu(!e.aY.C.b()),r=new Y((e=>{n.c4?n.c4=!1:t.c(e)}));no().hq(e.aY,new Y((e=>(t=>{r.c(new Go(e,t))}))(e)),!1)})),Yo())}function ko(){this.bd=null,this.dv=null,Ao=this,this.bd=new bl(jo()),new bl(jo()),new bl(jo()),this.dv=new yl}j=ko.prototype=new P,j.constructor=ko,new I().i(ko,`com.raquo.laminar.codecs.package$`,{bU:1});var Ao;function jo(){return Ao||=new ko,Ao}function Mo(e){e.fv=No(e,`class`,` `)}function No(e,t,n){var r=Sl(new Cl,t,jo().bd);return new xl(r.aJ,new Y((e=>{var t=bo().gH(e,r);return t===void 0?``:t})),new cf(((e,t)=>{bo().fn(e,r,t)})),n)}function Po(e){e.ft=Fo(e,`class`,` `)}function Fo(e,t,n){var r=new Tl(t,jo().bd,X());return new xl(r.bV,new Y((e=>{var t=bo().gL(e,r);return t===void 0?``:t})),new cf(((e,t)=>{bo().hk(e,r,t)})),n)}function Io(e){this.bT=null,this.bT=e}j=Io.prototype=new P,j.constructor=Io,j.fh=(function(e,t){try{this.bT.cN(e,t)}catch(e){var n=e instanceof tu?e:new vm(e);Cu().bL(n)}}),j.g6=(function(e){return new Io(new cf(((t,n)=>{this.bT.cN(t,n),e.bT.cN(t,n)})))}),j.fX=(function(e){return e===void 0?this:e.g6(this)}),new I().i(Io,`com.raquo.laminar.inserters.InserterHooks`,{cg:1});function Lo(){}j=Lo.prototype=new P,j.constructor=Lo,j.h4=(function(e,t){return new uf(e,void 0)}),new I().i(Lo,`com.raquo.laminar.inserters.StaticChildInserter$`,{ci:1});var Ro;function zo(){return Ro||=new Lo,Ro}function Bo(){}j=Bo.prototype=new P,j.constructor=Bo;function Vo(){}Vo.prototype=j;function Ho(){this.fw=null,this.fx=null,this.fy=null,this.fz=null,this.fw=`http://www.w3.org/2000/svg`,this.fx=`http://www.w3.org/1999/xlink`,this.fy=`http://www.w3.org/XML/1998/namespace`,this.fz=`http://www.w3.org/2000/xmlns/`}j=Ho.prototype=new P,j.constructor=Ho,j.h1=(function(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`xlink`:return`http://www.w3.org/1999/xlink`;case`xml`:return`http://www.w3.org/XML/1998/namespace`;case`xmlns`:return`http://www.w3.org/2000/xmlns/`;default:throw new zf(e)}}),new I().i(Ho,`com.raquo.laminar.keys.SvgAttr$`,{cm:1});var Uo;function Wo(){return Uo||=new Ho,Uo}function Go(e,t){this.dC=null,this.dC=e}j=Go.prototype=new P,j.constructor=Go,new I().i(Go,`com.raquo.laminar.lifecycle.MountContext`,{cn:1});var Ko=new I().i(1,`com.raquo.laminar.modifiers.Modifier`,{V:1});function qo(){this.fA=null,Jo=this,this.fA=new El}j=qo.prototype=new P,j.constructor=qo,new I().i(qo,`com.raquo.laminar.modifiers.Modifier$`,{cp:1});var Jo;function Yo(){return Jo||=new qo,Jo}function Xo(){this.dH=null,Zo=this,this.dH=new Ol}j=Xo.prototype=new P,j.constructor=Xo,new I().i(Xo,`com.raquo.laminar.modifiers.RenderableNode$`,{ct:1});var Zo;function Qo(){return Zo||=new Xo,Zo}function $o(){this.x=null,es=this,this.x=new Ml(new Y((e=>e)),R()),new Ml(new Y((e=>``+(e|0))),R()),new Ml(new Y((e=>``+ +e)),R()),new Ml(new Y((e=>``+!!e)),R()),new Ml(new Y((e=>e.hv())),R())}j=$o.prototype=new P,j.constructor=$o,new I().i($o,`com.raquo.laminar.modifiers.RenderableText$`,{cy:1});var es;function R(){return es||=new $o,es}function ts(){}j=ts.prototype=new P,j.constructor=ts,j.c7=(function(e,t,n){var r=new Gp(e);t.fs(r),n!==void 0&&n.fh(e,t);var i=bo().fW(e.aS(),t.aS());return i&&t.fo(r),i}),new I().i(ts,`com.raquo.laminar.nodes.ParentNode$`,{cB:1});var ns;function rs(){return ns||=new ts,ns}function is(e){this.dM=null,this.dM=new Io(new cf(((t,n)=>{matchResult1:{var r=n.aS();if(r instanceof Element){r.setAttribute(`slot`,e);break matchResult1}if(r instanceof Text){var i=Cu(),a=r.textContent,o=t.aS().tagName;i.bL(Ju(new K,"Error: You tried to insert a raw text node `"+a+"` into the `"+e+"` slot of <"+o.toLowerCase()+`>.
 - Cause: This is not possible: named slots only accept elements. Your node was inserted into the default slot instead.
 - Suggestion: Wrap your text node into \`span()\``));break matchResult1}}})))}j=is.prototype=new P,j.constructor=is,j.g0=(function(e){return e.cV(new Y((e=>e.hD(this.dM))))}),new I().i(is,`com.raquo.laminar.nodes.Slot`,{cF:1});function as(){}j=as.prototype=new P,j.constructor=as,j.fU=(function(){ss().gq(),ss().gr(),ss().gs(),ss().gt(),ss().gu(),ss().gv(),ss().gw()}),j.gq=(function(){var e=document.querySelector(`#example1`);xc().aM(e).b()||(J(),new Eu(e,zu().v(new Q([]),new Q([]))))}),j.gr=(function(){var e=document.querySelector(`#example2`);xc().aM(e).b()||(J(),new Eu(e,J().o.cS().c8(new Q([zu().v(new Q([new q((e=>e.fc().ho()))]),new Q([G(J().o,`Start`,R().x)])),zu().v(new Q([]),new Q([G(J().o,`Or continue with`,R().x)])),zu().v(new Q([new q((e=>e.fc().gm()))]),new Q([G(J().o,`End`,R().x)]))]))))}),j.gs=(function(){var e=document.querySelector(`#example3`);xc().aM(e).b()||(J(),new Eu(e,zu().v(new Q([new q((e=>e.ck().u(`--width: 4px;`)))]),new Q([]))))}),j.gt=(function(){var e=document.querySelector(`#example4`);xc().aM(e).b()||(J(),new Eu(e,zu().v(new Q([new q((e=>e.ck().u(`--color: tomato;`)))]),new Q([]))))}),j.gu=(function(){var e=document.querySelector(`#example5`);xc().aM(e).b()||(J(),new Eu(e,J().o.cS().c8(new Q([J().o.hw().cQ(),G(J().o,`Above`,R().x),zu().v(new Q([new q((e=>e.ck().u(`--spacing: 2rem;`)))]),new Q([])),G(J().o,`Below`,R().x)]))))}),j.gv=(function(){var e=document.querySelector(`#example6`);xc().aM(e).b()||(J(),new Eu(e,J().o.cS().c8(new Q([J().o.gf().gz(),J().o.fS().cQ(),G(J().o,`First`,R().x),zu().v(new Q([new q((e=>e.fi().fr()))]),new Q([])),G(J().o,`Middle`,R().x),zu().v(new Q([new q((e=>e.fi().fr()))]),new Q([])),G(J().o,`Last`,R().x)]))))}),j.gw=(function(){var e=document.querySelector(`#example7`);xc().aM(e).b()||(J(),new Eu(e,Hu().v(new Q(H().t(new(gc.r()).C([new q((e=>wu(J().o,ds().hy().g0(new Q(H().t(new(df.r()).C([(J(),zo().h4(Au().v(new Q(H().t(new(gc.r()).C([new q((e=>e.hC().u(!0)))]))),new Q(H().t(new(Ko.r()).C([G(J().o,`Menu`,R().x)])))),Qo().dH))])))),dc().ec,jl()))),new q((e=>e.ck().u(`max-width: 200px;`)))]))),new Q(H().t(new(Ko.r()).C([Gu().v(new Q(H().t(new(gc.r()).C([new q((e=>e.bc().u(`1`)))]))),new Q(H().t(new(Ko.r()).C([G(J().o,`Option 1`,R().x)])))),Gu().v(new Q(H().t(new(gc.r()).C([new q((e=>e.bc().u(`2`)))]))),new Q(H().t(new(Ko.r()).C([G(J().o,`Option 2`,R().x)])))),Gu().v(new Q(H().t(new(gc.r()).C([new q((e=>e.bc().u(`3`)))]))),new Q(H().t(new(Ko.r()).C([G(J().o,`Option 3`,R().x)])))),zu().v(new Q(H().t(new(gc.r()).C([]))),new Q(H().t(new(Ko.r()).C([])))),Gu().v(new Q(H().t(new(gc.r()).C([new q((e=>e.bc().u(`4`)))]))),new Q(H().t(new(Ko.r()).C([G(J().o,`Option 4`,R().x)])))),Gu().v(new Q(H().t(new(gc.r()).C([new q((e=>e.bc().u(`5`)))]))),new Q(H().t(new(Ko.r()).C([G(J().o,`Option 5`,R().x)])))),Gu().v(new Q(H().t(new(gc.r()).C([new q((e=>e.bc().u(`6`)))]))),new Q(H().t(new(Ko.r()).C([G(J().o,`Option 6`,R().x)]))))]))))))}),new I().i(as,`examples.divider.Main$package$`,{cJ:1});var os;function ss(){return os||=new as,os}function cs(e){try{ss().fU()}catch(e){throw e}}function ls(){this.e2=null,this.e3=!1}j=ls.prototype=new P,j.constructor=ls,j.hy=(function(){return this.e3||=(this.e2=new is(`trigger`),!0),this.e2}),new I().i(ls,`io.github.nguyenyou.webawesome.laminar.Dropdown$slots$`,{cP:1});var us;function ds(){return us||=new ls,us}function fs(e,t){for(var n=z().Z(`^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$`),r=[],i=0;i<(t.length|0);){var a=t[i];if(a!==``){var o=n.exec(a);if(o!==null){var s=ps(e,o[1]),c=s[0],l=s[1],u=o[2],d=o[3],f=parseInt(d),p=o[4];r.push(new Xl(c,l,u,f|0,p===void 0?-1:parseInt(p)|0))}else r.push(new Xl(`<jscode>`,a,null,-1,-1))|0}i=1+i|0}var m=r.length|0,h=new(Zl.r()).C(m);for(i=0;i<m;)h.a[i]=r[i],i=1+i|0;return h}function ps(e,t){var n=z().Z(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$`),r=z().Z(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$`),i=z().Z(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$`),a=z().Z(`^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$`),o=z().Z(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$`),s=n.exec(t),c=s===null?r.exec(t):s;if(c!==null)return[ms(e,c[1]),xs(e,c[2])];var l=i.exec(t),u=l===null?a.exec(t):l;if(u!==null)return[ms(e,u[1]),`<init>`];var d=o.exec(t);return d===null?[`<jscode>`,t]:[ms(e,d[1]),`<clinit>`]}function ms(e,t){var n=gs(e);if(qs().cF.call(n,t))var r=gs(e)[t];else var r=Ms(e,0,t);return r.split(`_`).join(`.`).split(`＿`).join(`_`)}function hs(e){if(!((1&e.J)<<24>>24)){var t={};t.O=`java_lang_Object`,t.T=`java_lang_String`;for(var n=0;n<=22;){if(n>=2){var r=`T`+n;t[r]=`scala_Tuple`+n}var i=`F`+n;t[i]=`scala_Function`+n,n=1+n|0}e.cC=t,e.J=(1|e.J)<<24>>24}return e.cC}function gs(e){return(1&e.J)<<24>>24?e.cC:hs(e)}function _s(e){if(!((2&e.J)<<24>>24)){var t={};t.sjsr_=`scala_scalajs_runtime_`,t.sjs_=`scala_scalajs_`,t.sci_=`scala_collection_immutable_`,t.scm_=`scala_collection_mutable_`,t.scg_=`scala_collection_generic_`,t.sc_=`scala_collection_`,t.sr_=`scala_runtime_`,t.s_=`scala_`,t.jl_=`java_lang_`,t.ju_=`java_util_`,e.cD=t,e.J=(2|e.J)<<24>>24}return e.cD}function vs(e){return(2&e.J)<<24>>24?e.cD:_s(e)}function ys(e){return(4&e.J)<<24>>24||(e.cB=Object.keys(vs(e)),e.J=(4|e.J)<<24>>24),e.cB}function bs(e){return(4&e.J)<<24>>24?e.cB:ys(e)}function xs(e,t){if(t.startsWith(`init___`))return`<init>`;var n=t.indexOf(`__`)|0;return n<0?t:t.substring(0,n)}function Ss(e,t){return t?t.arguments&&t.stack?Cs(e,t):t.stack&&t.sourceURL?Es(e,t):t.stack&&t.number?Ts(e,t):t.stack&&t.fileName?ws(e,t):t.message&&t[`opera#sourceloc`]?t.stacktrace?t.message.indexOf(`
`)>-1&&t.message.split(`
`).length>t.stacktrace.split(`
`).length?Ds(e,t):Os(e,t):Ds(e,t):t.message&&t.stack&&t.stacktrace?t.stacktrace.indexOf(`called from line`)<0?ks(e,t):As(e,t):t.stack&&!t.fileName?Cs(e,t):js(e,t):[]}function Cs(e,t){return(t.stack+`
`).replace(z().Z(`^[\\s\\S]+?\\s+at\\s+`),` at `).replace(z().B(`^\\s+(at eval )?at\\s+`,`gm`),``).replace(z().B(`^([^\\(]+?)([\\n])`,`gm`),`{anonymous}() ($1)$2`).replace(z().B(`^Object.<anonymous>\\s*\\(([^\\)]+)\\)`,`gm`),`{anonymous}() ($1)`).replace(z().B(`^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(0,-1)}function ws(e,t){return t.stack.replace(z().B(`(?:\\n@:0)?\\s+$`,`m`),``).replace(z().B(`^(?:\\((\\S*)\\))?@`,`gm`),`{anonymous}($1)@`).split(`
`)}function Ts(e,t){return t.stack.replace(z().B(`^\\s*at\\s+(.*)$`,`gm`),`$1`).replace(z().B(`^Anonymous function\\s+`,`gm`),`{anonymous}() `).replace(z().B(`^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(1)}function Es(e,t){return t.stack.replace(z().B(`\\[native code\\]\\n`,`m`),``).replace(z().B(`^(?=\\w+Error\\:).*$\\n`,`m`),``).replace(z().B(`^@`,`gm`),`{anonymous}()@`).split(`
`)}function Ds(e,t){for(var n=z().B(`Line (\\d+).*script (?:in )?(\\S+)`,`i`),r=t.message.split(`
`),i=[],a=2,o=r.length|0;a<o;){var s=n.exec(r[a]);s!==null&&i.push(`{anonymous}()@`+s[2]+`:`+s[1])|0,a=2+a|0}return i}function Os(e,t){for(var n=z().B(`Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$`,`i`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[3],l=c===void 0?`{anonymous}`:c;i.push(l+`()@`+s[2]+`:`+s[1])|0}a=2+a|0}return i}function ks(e,t){for(var n=z().Z(`^(.*)@(.+):(\\d+)$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[1],l=c===void 0?`global code`:c+`()`;i.push(l+`@`+s[2]+`:`+s[3])|0}a=1+a|0}return i}function As(e,t){for(var n=z().Z(`^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[4]+`:`+s[1]+`:`+s[2],l=s[2],u=(l===void 0?`global code`:l).replace(z().Z(`<anonymous function: (\\S+)>`),`$1`).replace(z().Z(`<anonymous function>`),`{anonymous}`);i.push(u+`@`+c)|0}a=2+a|0}return i}function js(e,t){return[]}function Ms(e,t,n){for(;;)if(t<(bs(e).length|0)){var r=bs(e)[t];if(n.startsWith(r))return``+vs(e)[r]+n.substring(r.length);t=1+t|0}else return n.startsWith(`L`)?n.substring(1):n}function Ns(){this.cC=null,this.cD=null,this.cB=null,this.J=0}j=Ns.prototype=new P,j.constructor=Ns,j.gx=(function(e){return fs(this,Ss(this,e))}),new I().i(Ns,`java.lang.StackTrace$`,{da:1});var Ps;function Fs(){return Ps||=new Ns,Ps}function Is(){}j=Is.prototype=new P,j.constructor=Is,j.Z=(function(e){return new RegExp(e)}),j.B=(function(e,t){return new RegExp(e,t)}),new I().i(Is,`java.lang.StackTrace$StringRE$`,{db:1});var Ls;function z(){return Ls||=new Is,Ls}function Rs(){this.e7=null,this.fB=null,zs=this,this.e7=new bm(!1),this.fB=new bm(!0)}j=Rs.prototype=new P,j.constructor=Rs,new I().i(Rs,`java.lang.System$Streams$`,{df:1});var zs;function Bs(){return zs||=new Rs,zs}function Vs(e){var t={};return t[`java.version`]=`1.8`,t[`java.vm.specification.version`]=`1.8`,t[`java.vm.specification.vendor`]=`Oracle Corporation`,t[`java.vm.specification.name`]=`Java Virtual Machine Specification`,t[`java.vm.name`]=`Scala.js`,t[`java.vm.version`]=`1.22.0`,t[`java.specification.version`]=`1.8`,t[`java.specification.vendor`]=`Oracle Corporation`,t[`java.specification.name`]=`Java Platform API Specification`,t[`file.separator`]=`/`,t[`path.separator`]=`:`,t[`line.separator`]=`
`,t}function Hs(){this.cE=null,this.e8=null,Us=this,this.cE=Vs(this),this.e8=null}j=Hs.prototype=new P,j.constructor=Hs,j.f9=(function(e,t){if(this.cE!==null){var n=this.cE;return qs().cF.call(n,e)?n[e]:t}return this.e8.f9(e,t)}),new I().i(Hs,`java.lang.System$SystemProperties$`,{dg:1});var Us;function Ws(){return Us||=new Hs,Us}function Gs(){this.cF=null,Ks=this,this.cF=Object.prototype.hasOwnProperty}j=Gs.prototype=new P,j.constructor=Gs,new I().i(Gs,`java.lang.Utils$Cache$`,{di:1});var Ks;function qs(){return Ks||=new Gs,Ks}function Js(e,t){return e===t}function Ys(e){return 0}function Xs(e,t){return!!(e&&e.$classData&&e.$classData.D===t&&e.$classData.B.n.az)}var Zs=new I().i(0,`java.lang.Void`,{az:1},(e=>e===void 0));function Qs(e,t){throw Sf(new wf,`argument type mismatch`)}function $s(){}j=$s.prototype=new P,j.constructor=$s,j.Y=(function(e){return e instanceof F||e instanceof ca||e instanceof la||e instanceof ua||e instanceof da||e instanceof fa?e.a.length:e instanceof pa?e.a.length>>>1|0:(e instanceof ma||e instanceof ha||Qs(this,e),e.a.length)}),new I().i($s,`java.lang.reflect.Array$`,{dj:1});var ec;function tc(){return ec||=new $s,ec}function nc(){}j=nc.prototype=new P,j.constructor=nc,j.g3=(function(e,t){for(var n=0,r=e.a.length;;)if(n===r)return~n;else{var i=(n+r|0)>>>1|0,a=e.a[i],o=t===a?0:t<a?-1:1;if(o<0){r=i;continue}if(o!==0){n=1+i|0;continue}return i}}),j.eZ=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length>>>1|0;if((t.a.length>>>1|0)!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a,o=i<<1,s=a[o],c=a[o+1|0],l=r,u=t.a,d=l<<1,f=u[d],p=u[d+1|0];if((s^f|c^p)!==0)return!1;r=1+r|0}return!0}),j.eY=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),j.f0=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),j.eX=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),j.eW=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),j.f1=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),new I().i(nc,`java.util.Arrays$`,{dk:1});var rc;function ic(){return rc||=new nc,rc}function ac(e,t){return cc().fq(e,t)}function oc(){}j=oc.prototype=new P,j.constructor=oc,j.fq=(function(e,t){if(t===e>>31)return``+e;if(-2097152&(t^t>>10)){var n=t>>31,r=e^n,i=r-n|0,a=4294967296*(((t^n)+(i>>>0<r>>>0|0)|0)>>>0)+(i>>>0),o=+Math.floor(1.0000000000000265e-9*a),s=i-Math.imul(1e9,o|0)|0;s<0&&(--o,s=1e9+s|0);var c=``+s,l=o,u=c.length,d=``+l+`000000000`.substring(u)+c;return t<0?`-`+d:d}return``+(4294967296*t+(e>>>0))}),j.f8=(function(e){if(e<-0x8000000000000000)return N(0,-2147483648);if(e>=0x8000000000000000)return N(-1,2147483647);var t=e|0,n=23283064365386963e-26*e|0;return N(t,e<0&&t!==0?n-1|0:n)}),j.gg=(function(e,t,n,r){var i=t>>31,a=e^i,o=a-i|0,s=(t^i)+(o>>>0<a>>>0|0)|0,c=r>>31,l=n^c,u=l-c|0,d=(r^c)+(u>>>0<l>>>0|0)|0;if(d|-2097152&u){var f=(4294967296*(s>>>0)+(o>>>0))/(4294967296*(d>>>0)+(u>>>0))+.00390625,p=f|0,m=23283064365386963e-26*f|0,h=65535&u,g=u>>>16|0,_=65535&p,v=p>>>16|0,y=Math.imul(h,_),b=Math.imul(g,_),x=Math.imul(h,v),ee=y+((b+x|0)<<16)|0,S=(y>>>16|0)+x|0;if(((s-((((Math.imul(u,m)+Math.imul(d,p)|0)+Math.imul(g,v)|0)+(S>>>16|0)|0)+(((65535&S)+b|0)>>>16|0)|0)|0)-((o-ee|0)>>>0>o>>>0|0)|0)<0)var te=p-1|0,ne=(m-1|0)+(te!==-1|0)|0,re=te,ie=ne;else var re=p,ie=m}else var ae=(s>>>0)/(Wi(u)>>>0)|0,re=(4294967296*(s-Math.imul(u,ae)|0)+(o>>>0))/u|0,ie=ae;if((t^r)>=0)return N(re,ie);var oe=-re|0;return N(oe,(-ie|0)-(oe!==0|0)|0)}),j.gh=(function(e,t,n,r){if(!(r|-2097152&n)){var i=(t>>>0)/(Wi(n)>>>0)|0;return N((4294967296*(t-Math.imul(n,i)|0)+(e>>>0))/n|0,i)}if(r>=0){var a=(4294967296*(t>>>0)+(e>>>0))/(4294967296*(r>>>0)+(n>>>0))+.00390625,o=a|0,s=23283064365386963e-26*a|0,c=65535&n,l=n>>>16|0,u=65535&o,d=o>>>16|0,f=Math.imul(c,u),p=Math.imul(l,u),m=Math.imul(c,d),h=f+((p+m|0)<<16)|0,g=(f>>>16|0)+m|0;if(((t-((((Math.imul(n,s)+Math.imul(r,o)|0)+Math.imul(l,d)|0)+(g>>>16|0)|0)+(((65535&g)+p|0)>>>16|0)|0)|0)-((e-h|0)>>>0>e>>>0|0)|0)<0){var _=o-1|0;return N(_,(s-1|0)+(_!==-1|0)|0)}return N(o,s)}return(t===r?e>>>0<n>>>0:t>>>0<r>>>0)?N(0,0):N(1,0)}),j.hb=(function(e,t,n,r){var i=t>>31,a=e^i,o=a-i|0,s=(t^i)+(o>>>0<a>>>0|0)|0,c=r>>31,l=n^c,u=l-c|0,d=(r^c)+(u>>>0<l>>>0|0)|0;if(d|-2097152&u){var f=(4294967296*(s>>>0)+(o>>>0))/(4294967296*(d>>>0)+(u>>>0))+.00390625,p=f|0,m=23283064365386963e-26*f|0,h=65535&u,g=u>>>16|0,_=65535&p,v=p>>>16|0,y=Math.imul(h,_),b=Math.imul(g,_),x=Math.imul(h,v),ee=y+((b+x|0)<<16)|0,S=(y>>>16|0)+x|0,te=(((Math.imul(u,m)+Math.imul(d,p)|0)+Math.imul(g,v)|0)+(S>>>16|0)|0)+(((65535&S)+b|0)>>>16|0)|0,ne=o-ee|0,re=(s-te|0)-(ne>>>0>o>>>0|0)|0;if(re<0)var ie=ne+u|0,ae=(re+d|0)+(ie>>>0<ne>>>0|0)|0,oe=ie,se=ae;else var oe=ne,se=re}else var ce=(4294967296*((s>>>0)%(Wi(u)>>>0)|0)+(o>>>0))/u|0,oe=o-Math.imul(u,ce)|0,se=0;if(t<0){var le=-oe|0;return N(le,(-se|0)-(le!==0|0)|0)}return N(oe,se)}),j.hc=(function(e,t,n,r){if(!(r|-2097152&n)){var i=(4294967296*((t>>>0)%(Wi(n)>>>0)|0)+(e>>>0))/n|0;return N(e-Math.imul(n,i)|0,0)}if(r>=0){var a=(4294967296*(t>>>0)+(e>>>0))/(4294967296*(r>>>0)+(n>>>0))+.00390625,o=a|0,s=23283064365386963e-26*a|0,c=65535&n,l=n>>>16|0,u=65535&o,d=o>>>16|0,f=Math.imul(c,u),p=Math.imul(l,u),m=Math.imul(c,d),h=f+((p+m|0)<<16)|0,g=(f>>>16|0)+m|0,_=(((Math.imul(n,s)+Math.imul(r,o)|0)+Math.imul(l,d)|0)+(g>>>16|0)|0)+(((65535&g)+p|0)>>>16|0)|0,v=e-h|0,y=(t-_|0)-(v>>>0>e>>>0|0)|0;if(y<0){var b=v+n|0;return N(b,(y+r|0)+(b>>>0<v>>>0|0)|0)}return N(v,y)}if(t===r?e>>>0<n>>>0:t>>>0<r>>>0)return N(e,t);var x=e-n|0;return N(x,(t-r|0)-(x>>>0>e>>>0|0)|0)}),new I().i(oc,`org.scalajs.linker.runtime.RuntimeLong$`,{dn:1});var sc;function cc(){return sc||=new oc,sc}function lc(){this.ec=null,uc=this,this.ec=new Lf}j=lc.prototype=new P,j.constructor=lc,new I().i(lc,`scala.$less$colon$less$`,{dr:1});var uc;function dc(){return uc||=new lc,uc}function fc(e,t,n,r,i,a){for(var o=n,s=i,c=n+a|0;o<c;)B().c9(r,s,B().aP(t,o)),o=1+o|0,s=1+s|0}function pc(){}j=pc.prototype=new P,j.constructor=pc,j.f3=(function(e,t){var n=e.m();if(n>-1){for(var r=t.cX(n),i=e.d(),a=0;a<n;)B().c9(r,a,i.g()),a=1+a|0;return r}var o=null,s=t.ch(),c=s===va.l();o=[];for(var l=e.d();l.i();){var u=l.g(),d=c?ia(u):u===null?Gc().d0(s):u;o.push(d)}return Gc().cZ(s===ga.l()?Zs.l():s===Qc.l()||s===md.l()?L.l():s,o)}),j.ca=(function(e,t,n,r,i){var a=zi(e);a.a1.Z&&zi(n).a1.R(a.a1)?e.a0(t,n,r,i):fc(this,e,t,n,r,i)}),j.f2=(function(e,t){if(e===t)return!0;if(e.a.length!==t.a.length)return!1;for(var n=e.a.length,r=0;r<n;){if(!Zc().H(e.a[r],t.a[r]))return!1;r=1+r|0}return!0}),new I().i(pc,`scala.Array$`,{dt:1});var mc;function hc(){return mc||=new pc,mc}var gc=new I().i(1,`scala.Function1`,{e:1});function _c(){}j=_c.prototype=new P,j.constructor=_c;function vc(){}vc.prototype=j;function yc(){}j=yc.prototype=new P,j.constructor=yc,j.aM=(function(e){return e===null?X():new Gp(e)}),new I().i(yc,`scala.Option$`,{dB:1});var bc;function xc(){return bc||=new yc,bc}function Sc(){this.eh=null,this.eg=null,Cc=this,this.eh=new q((e=>this.eh)),this.eg=new qd}j=Sc.prototype=new P,j.constructor=Sc,new I().i(Sc,`scala.PartialFunction$`,{dC:1});var Cc;function wc(){return Cc||=new Sc,Cc}function Tc(){this.ek=null,Ec=this,this.ek=new q((e=>Dc().ek))}j=Tc.prototype=new P,j.constructor=Tc,j.gB=(function(e,t){var n=tc().Y(e),r=0;if(e instanceof F)for(;r<n;)t.c(e.a[r]),r=1+r|0;else if(e instanceof fa)for(;r<n;)t.c(e.a[r]),r=1+r|0;else if(e instanceof ha)for(;r<n;)t.c(e.a[r]),r=1+r|0;else if(e instanceof pa)for(;r<n;){var i=e.a,a=r<<1,o=i[a],s=i[a+1|0];t.c(N(o,s)),r=1+r|0}else if(e instanceof ma)for(;r<n;)t.c(e.a[r]),r=1+r|0;else if(e instanceof la)for(;r<n;)t.c(na(e.a[r])),r=1+r|0;else if(e instanceof ua)for(;r<n;)t.c(e.a[r]),r=1+r|0;else if(e instanceof da)for(;r<n;)t.c(e.a[r]),r=1+r|0;else if(e instanceof ca)for(;r<n;)t.c(e.a[r]),r=1+r|0;else throw new zf(e)}),new I().i(Tc,`scala.collection.ArrayOps$`,{dH:1});var Ec;function Dc(){return Ec||=new Tc,Ec}function Oc(e,t){for(var n=e.d();n.i();)t.c(n.g())}function kc(e,t,n,r){var i=e.d(),a=n;matchResult18:{var o,s=e.m();if(s===-1){var o=tc().Y(t);break matchResult18}var o=s}for(var c=tc().Y(t),l=r<o?r:o,u=n<0?c:c-n|0,d=u<l?u:l,f=n+(d<0?0:d)|0;a<f&&i.i();)B().c9(t,a,i.g()),a=1+a|0;return a-n|0}function Ac(e,t,n,r){return e.m()===0?``+t+r:e.ba(Fh(new Ih),t,n,r).G.l}function jc(e,t,n,r,i){var a=t.G;n.length!==0&&(a.l=``+a.l+n);var o=e.d();if(o.i()){var s=o.g();for(a.l=``+a.l+s;o.i();){r.length!==0&&(a.l=``+a.l+r);var c=o.g();a.l=``+a.l+c}}return i.length!==0&&(a.l=``+a.l+i),t}function Mc(e,t){if(e.m()>=0){var n=e.m(),r=t.cX(n);return e.aB(r,0,2147483647),r}var i=null,a=t.ch(),o=a===va.l();i=[];for(var s=e.d();s.i();){var c=s.g(),l=o?ia(c):c===null?Gc().d0(a):c;i.push(l)}return Gc().cZ(a===ga.l()?Zs.l():a===Qc.l()||a===md.l()?L.l():a,i)}function Nc(e,t){this.em=null,this.bo=null,this.em=e,this.bo=t}j=Nc.prototype=new P,j.constructor=Nc,j.gO=(function(){return this.em.W().d()}),new I().i(Nc,`scala.collection.Iterator$ConcatIteratorCell`,{dQ:1});function Pc(){this.en=null,Fc=this,this.en=new q((e=>this.en))}j=Pc.prototype=new P,j.constructor=Pc,new I().i(Pc,`scala.collection.StringOps$`,{dW:1});var Fc;function Ic(){return Fc||=new Pc,Fc}function Lc(){}j=Lc.prototype=new P,j.constructor=Lc,j.fb=(function(e,t){return Ef(new Of,e+` is out of bounds (min 0, max `+t+`)`)}),new I().i(Lc,`scala.collection.generic.CommonErrors$`,{dX:1});var Rc;function zc(){return Rc||=new Lc,Rc}function Bc(){this.er=0,Vc=this;try{Ic();var e=ql().gT(Ws().f9(`scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength`,`64`),10,214748364)}catch(t){if(0)var e;else{var e;throw t}}this.er=e}j=Bc.prototype=new P,j.constructor=Bc,new I().i(Bc,`scala.collection.immutable.IndexedSeqDefaults$`,{e0:1});var Vc;function Hc(){return Vc||=new Bc,Vc}function Uc(){}j=Uc.prototype=new P,j.constructor=Uc,j.d0=(function(e){return e===ya.l()||e===ba.l()||e===va.l()||e===xa.l()?0:e===Sa.l()?N(0,0):e===Ca.l()||e===wa.l()?0:e===_a.l()?!1:e===ga.l()?void 0:null}),j.cZ=(function(e,t){var n=t.length|0;if(e===va.l()){for(var r=new la(n),i=0;i!==n;)r.a[i]=65535&(t[i]|0),i=1+i|0;return r}for(var a=e.a1.U(n),o=0;o!==n;)B().c9(a,o,t[o]),o=1+o|0;return a}),new I().i(Uc,`scala.collection.mutable.ArrayBuilder$`,{e8:1});var Wc;function Gc(){return Wc||=new Uc,Wc}function Kc(){}j=Kc.prototype=new P,j.constructor=Kc,j.eS=(function(e,t,n){if(t!==e)throw new Ff(n)}),new I().i(Kc,`scala.collection.mutable.MutationTracker$`,{eg:1});var qc;function Jc(){return qc||=new Kc,qc}function Yc(){}j=Yc.prototype=new P,j.constructor=Yc,j.H=(function(e,t){return e===t||(Yl(e)?this.gp(e,t):e instanceof Ri?this.gn(e,t):e===null?t===null:Vi(e,t))}),j.gp=(function(e,t){if(Yl(t))return this.go(e,t);if(t instanceof Ri){if(typeof e==`number`)return+e===t.c;if(e instanceof M){var n=aa(e),r=n.l,i=n.h,a=t.c,o=a>>31;return(r^a|i^o)===0}return e===null?t===null:Vi(e,t)}return e===null?t===null:Vi(e,t)}),j.go=(function(e,t){if(typeof e==`number`){var n=+e;if(typeof t==`number`)return n===+t;if(t instanceof M){var r=aa(t),i=r.l;return n===4294967296*r.h+(i>>>0)}return!1}if(e instanceof M){var a=aa(e),o=a.l,s=a.h;if(t instanceof M){var c=aa(t),l=c.l,u=c.h;return(o^l|s^u)===0}if(typeof t==`number`){var d=+t;return 4294967296*s+(o>>>0)===d}return!1}return e===null?t===null:Vi(e,t)}),j.gn=(function(e,t){if(t instanceof Ri)return e.c===t.c;if(Yl(t)){if(typeof t==`number`)return+t===e.c;if(t instanceof M){var n=aa(t),r=n.l,i=n.h,a=e.c,o=a>>31;return(r^a|i^o)===0}return t===null?e===null:Vi(t,e)}return e===null&&t===null}),new I().i(Yc,`scala.runtime.BoxesRunTime$`,{eu:1});var Xc;function Zc(){return Xc||=new Yc,Xc}var Qc=new I().i(0,`scala.runtime.Null$`,{ex:1});function $c(){}j=$c.prototype=new P,j.constructor=$c,j.bb=(function(){throw Af(new Mf,`tried to cast away nullability, but value is null`)}),new I().i($c,`scala.runtime.Scala3RunTime$`,{ey:1});var el;function tl(){return el||=new $c,el}function nl(){}j=nl.prototype=new P,j.constructor=nl,j.fT=(function(e){return e===null?Qc.l():zi(e)}),j.aP=(function(e,t){if(e instanceof F||e instanceof fa||e instanceof ha)return e.a[t];if(e instanceof pa){var n=e.a,r=t<<1;return N(n[r],n[r+1|0])}if(e instanceof ma)return e.a[t];if(e instanceof la)return na(e.a[t]);if(e instanceof ua||e instanceof da||e instanceof ca)return e.a[t];throw e===null?jf(new Mf):new zf(e)}),j.c9=(function(e,t,n){if(e instanceof F)e.a[t]=n;else if(e instanceof fa)e.a[t]=n|0;else if(e instanceof ha)e.a[t]=+n;else if(e instanceof pa){var r=aa(n),i=e.a,a=t<<1;i[a]=r.l,i[a+1|0]=r.h}else if(e instanceof ma)e.a[t]=Math.fround(n);else if(e instanceof la)e.a[t]=ia(n);else if(e instanceof ua)e.a[t]=n|0;else if(e instanceof da)e.a[t]=n|0;else if(e instanceof ca)e.a[t]=!!n;else throw e===null?jf(new Mf):new zf(e)}),j.fG=(function(e){return Ac(e.bJ(),e.aE()+`(`,`,`,`)`)}),j.aF=(function(e){if(e===null)return null;if(e.a.length===0){var t=nm();return jm(),$p(t)}return new mh(e)}),new I().i(nl,`scala.runtime.ScalaRunTime$`,{ez:1});var rl;function B(){return rl||=new nl,rl}function il(){}j=il.prototype=new P,j.constructor=il,j.k=(function(e,t){var n=this.cg(e,t),r=n;return n=r<<13|r>>>19,Math.imul(5,n)-430675100|0}),j.cg=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|r>>>17,n=Math.imul(461845907,n),e^n}),j.A=(function(e,t){return this.g2(e^t)}),j.g2=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),j.gX=(function(e,t){return t===e>>31?e:e^t}),j.gj=(function(e){var t=Gi(e);if(t===e)return t;var n=cc().f8(e),r=n.l,i=n.h;if(4294967296*i+(r>>>0)===e)return r^i;var a=e|0;if(a===e&&1/e!=-1/0)return a;if(e!==e)return 2146959360;var o=qi;return o.setFloat64(0,e,!0),(o.getInt32(0,!0)|0)^(o.getInt32(4,!0)|0)}),j.r=(function(e){if(e===null)return 0;if(typeof e==`number`)return this.gj(+e);if(e instanceof M){var t=aa(e);return this.gX(t.l,t.h)}return Hi(e)}),j.gQ=(function(e){throw Ef(new Of,``+e)}),new I().i(il,`scala.runtime.Statics$`,{eB:1});var al;function V(){return al||=new il,al}function ol(){}j=ol.prototype=new P,j.constructor=ol,j.hm=(function(e,t){return setTimeout((()=>{t.W()}),e)}),new I().i(ol,`scala.scalajs.js.timers.package$`,{eH:1});var sl;function cl(){return sl||=new ol,sl}function ll(){}j=ll.prototype=new P,j.constructor=ll,j.hx=(function(e){if(e instanceof Q)return e.c5;var t=[];return e.X(new q((e=>t.push(e)|0))),t}),new I().i(ll,`scala.scalajs.runtime.Compat$`,{eQ:1});var ul;function dl(){return ul||=new ll,ul}function fl(){}j=fl.prototype=new P,j.constructor=fl,j.t=(function(e){for(var t=e.a.length,n=[],r=0;r!==t;){var i=r;n.push(e.a[i]),r=1+r|0}return n}),new I().i(fl,`scala.scalajs.runtime.package$`,{eS:1});var pl;function H(){return pl||=new fl,pl}function ml(){}j=ml.prototype=new P,j.constructor=ml,j.hn=(function(e){var t=`Illegal command line`+(e.fa()===0?``:e.fa()===1?` after first argument`:` after `+e.fa()+` arguments`)+`: `+e.hI();iu().h6().gU(t+`
`)}),new I().i(ml,`scala.util.CommandLineParser$`,{eT:1});function hl(e){this.cL=null,this.cL=e}j=hl.prototype=new P,j.constructor=hl,j.n=(function(){return`DynamicVariable(`+this.cL+`)`}),new I().i(hl,`scala.util.DynamicVariable`,{eV:1});function gl(){}j=gl.prototype=new P,j.constructor=gl;function _l(){}_l.prototype=j,j.k=(function(e,t){var n=this.cg(e,t),r=n;return n=r<<13|r>>>19,Math.imul(5,n)-430675100|0}),j.cg=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|r>>>17,n=Math.imul(461845907,n),e^n}),j.A=(function(e,t){return this.bK(e^t)}),j.bK=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),j.fk=(function(e,t,n){var r=e.aC();if(r===0)return n?t:Bp(e.aE());var i=t;n||(i=this.k(i,Bp(e.aE())));for(var a=0;a<r;)i=this.k(i,V().r(e.aD(a))),a=1+a|0;return this.A(i,r)}),j.hz=(function(e,t){for(var n=0,r=0,i=0,a=1,o=e.d();o.i();){var s=o.g(),c=V().r(s);n=n+c|0,r^=c,a=Math.imul(a,1|c),i=1+i|0}var l=t;return l=this.k(l,n),l=this.k(l,r),l=this.cg(l,a),this.A(l,i)}),j.h5=(function(e,t){var n=e.d(),r=t;if(!n.i())return this.A(r,0);var i=n.g();if(!n.i())return this.A(this.k(r,V().r(i)),1);var a=n.g(),o=V().r(i);r=this.k(r,o);for(var s=r,c=V().r(a),l=c-o|0,u=2;n.i();){r=this.k(r,c);var d=V().r(n.g());if(l!==(d-c|0)||l===0){for(r=this.k(r,d),u=1+u|0;n.i();)r=this.k(r,V().r(n.g())),u=1+u|0;return this.A(r,u)}c=d,u=1+u|0}return this.bK(this.k(this.k(s,l),c))}),j.q=(function(e,t){var n=t,r=tc().Y(e);switch(r){case 0:return this.A(n,0);case 1:return this.A(this.k(n,V().r(B().aP(e,0))),1);default:var i=V().r(B().aP(e,0));n=this.k(n,i);for(var a=n,o=V().r(B().aP(e,1)),s=o-i|0,c=2;c<r;){n=this.k(n,o);var l=V().r(B().aP(e,c));if(s!==(l-o|0)||s===0){for(n=this.k(n,l),c=1+c|0;c<r;)n=this.k(n,V().r(B().aP(e,c))),c=1+c|0;return this.A(n,r)}o=l,c=1+c|0}return this.bK(this.k(this.k(a,s),o))}}),j.h9=(function(e,t,n,r){return this.bK(this.k(this.k(this.k(r,e),t),n))}),j.gP=(function(e,t){var n=t,r=e.e();switch(r){case 0:return this.A(n,0);case 1:return this.A(this.k(n,V().r(e.h(0))),1);default:var i=V().r(e.h(0));n=this.k(n,i);for(var a=n,o=V().r(e.h(1)),s=o-i|0,c=2;c<r;){n=this.k(n,o);var l=V().r(e.h(c));if(s!==(l-o|0)||s===0){for(n=this.k(n,l),c=1+c|0;c<r;)n=this.k(n,V().r(e.h(c))),c=1+c|0;return this.A(n,r)}o=l,c=1+c|0}return this.bK(this.k(this.k(a,s),o))}}),j.gW=(function(e,t){for(var n=0,r=t,i=0,a=0,o=0,s=0,c=e;!c.b();){var l=c.I(),u=c.y(),d=V().r(l);switch(r=this.k(r,d),i){case 0:s=d,i=1;break;case 1:a=d-o|0,i=2;break;case 2:(a!==(d-o|0)||a===0)&&(i=3)}o=d,n=1+n|0,c=u}return i===2?this.h9(s,a,o,t):this.A(r,n)});function vl(e){this.aX=null,this.d9=null,this.co=!1,this.d9=e,ro(this),this.co=!1}j=vl.prototype=new P,j.constructor=vl,j.h7=(function(e){this.co?(so(e),this.d9.W()):oo(this,e)}),j.gV=(function(){io(this),this.co=!0}),new I().i(vl,`com.raquo.airstream.ownership.OneTimeOwner`,{bE:1,bF:1});function yl(){}j=yl.prototype=new P,j.constructor=yl,j.gd=(function(e){return e!==null}),j.gl=(function(e){return e?``:null}),j.cb=(function(e){return this.gd(e)}),j.ce=(function(e){return this.gl(!!e)}),new I().i(yl,`com.raquo.laminar.codecs.package$$anon$1`,{bV:1,a6:1});function bl(e){if(e===null)throw jf(new Mf)}j=bl.prototype=new P,j.constructor=bl,j.ce=(function(e){return e}),j.cb=(function(e){return e}),new I().i(bl,`com.raquo.laminar.codecs.package$$anon$2`,{bW:1,a6:1});function xl(e,t,n,r){}j=xl.prototype=new Vo,j.constructor=xl,new I().i(xl,`com.raquo.laminar.keys.CompositeKey`,{ck:1,S:1});function Sl(e,t,n){return e.aJ=t,e.be=n,e}function Cl(){this.aJ=null,this.be=null}j=Cl.prototype=new Vo,j.constructor=Cl;function wl(){}wl.prototype=j,j.u=(function(e){return new Tu(this,e,new lf(((e,t,n)=>{bo().fn(e,t,n)})))}),new I().i(Cl,`com.raquo.laminar.keys.HtmlAttr`,{a9:1,S:1});function Tl(e,t,n){this.cu=null,this.ct=null,this.bV=null,this.bW=null,this.cu=e,this.ct=t;var r=n.b()?X():new Gp(n.s()+`:`+e);this.bV=r.b()?e:r.s(),this.bW=n.b()?X():new Gp(Wo().h1(n.s()))}j=Tl.prototype=new Vo,j.constructor=Tl,new I().i(Tl,`com.raquo.laminar.keys.SvgAttr`,{cl:1,S:1});function El(){}j=El.prototype=new P,j.constructor=El,j.af=(function(e){}),new I().i(El,`com.raquo.laminar.modifiers.Modifier$$anon$1`,{cq:1,V:1});function Dl(e,t){if(this.dG=null,this.dG=e,t===null)throw jf(new Mf)}j=Dl.prototype=new P,j.constructor=Dl,j.af=(function(e){var t=Ba(),n=(()=>{this.dG.c(e)});if(Ba(),t.T)n();else{t.T=!0;try{n()}finally{t.T=!1,La(t)}}}),new I().i(Dl,`com.raquo.laminar.modifiers.Modifier$$anon$2`,{cr:1,V:1});function Ol(){}j=Ol.prototype=new P,j.constructor=Ol,new I().i(Ol,`com.raquo.laminar.modifiers.RenderableNode$$anon$1`,{cu:1,cs:1});function kl(){}j=kl.prototype=new P,j.constructor=kl,new I().i(kl,`com.raquo.laminar.modifiers.RenderableSeq$collectionSeqRenderable$`,{cw:1,cv:1});var Al;function jl(){return Al||=new kl,Al}function Ml(e,t){if(this.dI=null,this.dI=e,t===null)throw jf(new Mf)}j=Ml.prototype=new P,j.constructor=Ml,j.g1=(function(e){return this.dI.c(e)}),new I().i(Ml,`com.raquo.laminar.modifiers.RenderableText$$anon$1`,{cz:1,cx:1});function Nl(e){e.eU(new Za(new sf((()=>{throw Ju(new K,`Attempting to use owner of unmounted element: `+Ac(bo().gc(e.aS(),(bo(),$())),``,` > `,``))}))))}function Pl(e,t,n){return e.cy=t,e}function Fl(){this.cy=null}j=Fl.prototype=new P,j.constructor=Fl;function Il(){}Il.prototype=j,j.cW=(function(){return this.cy}),j.c8=(function(e){var t=this.g4();return e.X(new Y((e=>{e.af(t)}))),t}),j.g4=(function(){return new Ap(this,bo().g7(this))}),new I().i(Fl,`com.raquo.laminar.tags.HtmlTag`,{ao:1,ac:1});function Ll(e,t){this.dP=null,this.dP=e}j=Ll.prototype=new P,j.constructor=Ll,new I().i(Ll,`com.raquo.laminar.tags.SvgTag`,{cI:1,ac:1});function Rl(){}j=Rl.prototype=new P,j.constructor=Rl,j.ce=(function(e){return e}),j.cb=(function(e){return e}),new I().i(Rl,`io.github.nguyenyou.webawesome.laminar.UnionAsStringCodec$$anon$1`,{cR:1,a6:1});function zl(e,t){return e.b2=t,e.c6(),e}function Bl(){this.b2=null,this.aZ=null,this.b0=!1,this.b1=null,this.b3=!1}j=Bl.prototype=new P,j.constructor=Bl;function Vl(){}Vl.prototype=j,j.ck=(function(){return this.b0||=(this.aZ=J().o.hp(),!0),this.aZ}),j.ht=(function(){return this.b3||=(this.b1=new Du(this.b2,new q((e=>void 0)),void 0),!0),this.b1}),j.v=(function(e,t){var n=this.ht().c8(new Q([]));return e.X(new q((e=>{e.c(this).af(n)}))),t.X(new q((e=>{e.af(n)}))),n});function Hl(){this.cz=null,Ul=this,this.cz=Ea(67,`1C]4m6m=c4]4]4]4]4]4]4]4]4]3g4]2m9]2m1Jm1m9s4g5mm6]3]4mm12>mEm1m6m1]3]=]DI]1<m24mIs4g2c4w9];]4]<]3m3m=m3mH]8]2m=mBHm3]4mK3{gggg2:g=m@]13]4E]`)}j=Hl.prototype=new P,j.constructor=Hl,j.ge=(function(e,t){if(e<256)var n=(e-48|0)>>>0<=9?e-48|0:(e-65|0)>>>0<=25?e-55|0:(e-97|0)>>>0<=25?e-87|0:-1;else if((e-65313|0)>>>0<=25)var n=e-65303|0;else if((e-65345|0)>>>0<=25)var n=e-65335|0;else{var r=ic().g3(this.cz,e),i=r<0?-2-r|0:r;if(i<0)var n=-1;else var a=e-this.cz.a[i]|0,n=a>9?-1:a}return n<t?n:-1}),new I().i(Hl,`java.lang.Character$`,{cX:1,a:1});var Ul;function Wl(){return Ul||=new Hl,Ul}function Gl(){}j=Gl.prototype=new P,j.constructor=Gl,j.bH=(function(e){throw new zp(`For input string: "`+e+`"`)}),j.gT=(function(e,t,n){e===null&&ql().bH(e);var r=e.length;r===0&&ql().bH(e);var i=Wl(),a=e.charCodeAt(0),o=a===45,s=o?-1:0,c=(o||a===43)|0;c>=r&&ql().bH(e);var l=0;for(l=0;c!==r;){var u=i.ge(e.charCodeAt(c),t);(u<0||l>>>0>n>>>0)&&ql().bH(e),l=Math.imul(l,t)+u|0,c=1+c|0}return l>>>0>(2147483647-s|0)>>>0&&ql().bH(e),(l^s)-s|0}),new I().i(Gl,`java.lang.Integer$`,{d3:1,a:1});var Kl;function ql(){return Kl||=new Gl,Kl}function Jl(){}j=Jl.prototype=new P,j.constructor=Jl;function Yl(e){return e instanceof Jl||typeof e==`number`||e instanceof M}function Xl(e,t,n,r,i){this.b5=null,this.bi=null,this.b6=null,this.b7=0,this.b4=0,this.b5=e,this.bi=t,this.b6=n,this.b7=r,this.b4=i}j=Xl.prototype=new P,j.constructor=Xl,j.f=(function(e){return e instanceof Xl&&this.b6===e.b6&&this.b7===e.b7&&this.b4===e.b4&&this.b5===e.b5&&this.bi===e.bi}),j.n=(function(){var e=``;return this.b5!==`<jscode>`&&(e=``+e+this.b5+`.`),e=``+e+this.bi,this.b6===null?e+=`(Unknown Source)`:(e=e+`(`+this.b6,this.b7>=0&&(e=e+`:`+this.b7,this.b4>=0&&(e=e+`:`+this.b4)),e+=`)`),e}),j.j=(function(){return Bp(this.b5)^Bp(this.bi)^Bp(this.b6)^this.b7^this.b4});var Zl=new I().i(Xl,`java.lang.StackTraceElement`,{ay:1,a:1});function Ql(){}j=Ql.prototype=new P,j.constructor=Ql,j.h2=(function(e,t,n){for(var r=t+n|0,i=``,a=t;a!==r;)i+=``+Ki(e.a[a]),a=1+a|0;return i}),new I().i(Ql,`java.lang.String$`,{dd:1,a:1});var $l;function eu(){return $l||=new Ql,$l}function U(e,t,n,r,i){return e.ea=t,e.eb=i,i&&e.gy(),e}var tu=class extends Error{constructor(){super(),this.ea=null,this.eb=!1,this.e9=null,this.bY=null}bG(){return this.ea}gy(){var e=this instanceof vm?this.U:this;return this.e9=Object.prototype.toString.call(e)===`[object Error]`?e:Error.captureStackTrace===void 0||Object.isSealed(this)?/* @__PURE__ */ Error():(Error.captureStackTrace(this),this),this}gK(){return this.bY===null&&(this.bY=this.eb?Fs().gx(this.e9):new(Zl.r()).C(0)),this.bY}n(){var e=Bi(this),t=this.bG();return t===null?e:e+`: `+t}j(){return oa.prototype.j.call(this)}f(e){return oa.prototype.f.call(this,e)}get message(){var e=this.bG();return e===null?``:e}get name(){return Bi(this)}toString(){return this.n()}};function nu(){this.ed=null,ru=this,this.ed=new hl(Bs().e7)}j=nu.prototype=new P,j.constructor=nu,j.h6=(function(){return this.ed.cL}),new I().i(nu,`scala.Console$`,{du:1,el:1});var ru;function iu(){return ru||=new nu,ru}function au(){}j=au.prototype=new vc,j.constructor=au;function ou(){}ou.prototype=j,j.hF=(function(e){if(e===null)return null;if(e.a.length===0){var t=cm();return jm(),t.ex}return new Oh(e)});function su(e,t){if(t===e)e.V(pp().f4(t));else for(var n=t.d();n.i();)e.R(n.g());return e}function cu(){}j=cu.prototype=new P,j.constructor=cu;function lu(){}lu.prototype=j,j.n=(function(){return`<function0>`});function uu(){}j=uu.prototype=new P,j.constructor=uu;function du(){}du.prototype=j,j.n=(function(){return`<function1>`});function fu(){}j=fu.prototype=new P,j.constructor=fu;function pu(){}pu.prototype=j,j.n=(function(){return`<function2>`});function mu(){}j=mu.prototype=new P,j.constructor=mu;function hu(){}hu.prototype=j,j.n=(function(){return`<function3>`});function gu(e){this.c4=!1,this.c4=e}j=gu.prototype=new P,j.constructor=gu,j.n=(function(){return``+this.c4}),new I().i(gu,`scala.runtime.BooleanRef`,{et:1,a:1});function _u(e){this.bv=0,this.bv=e}j=_u.prototype=new P,j.constructor=_u,j.n=(function(){return``+this.bv}),new I().i(_u,`scala.runtime.IntRef`,{ev:1,a:1});function vu(){this.p=0,this.eM=0,this.fE=0,this.fD=0,yu=this,this.p=Bp(`Seq`),this.eM=Bp(`Map`),this.fE=Bp(`Set`),this.fD=this.hz($(),this.eM)}j=vu.prototype=new _l,j.constructor=vu,j.fm=(function(e){return Rm(e)?this.gP(e,this.p):e instanceof yh?this.gW(e,this.p):this.h5(e,this.p)}),new I().i(vu,`scala.util.hashing.MurmurHash3$`,{eX:1,eW:1});var yu;function W(){return yu||=new vu,yu}var bu=class extends tu{};function xu(){this.cl=null,this.d2=null,this.d3=null,Su=this,this.cl=pp().eQ(B().aF(new(gc.r()).C([]))),this.d2=new Y((e=>{try{console.error(this.gG(e)+`
`+this.gJ(e,`
`))}catch(e){var t=e instanceof tu?e:new vm(e);console.error(`Error in AirstreamError.consoleErrorCallback:`),console.error(t)}})),this.d3=new Y((e=>{console.warn(`Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.`);var t=e;throw t instanceof vm?t.U:t})),this.ha(this.d2)}j=xu.prototype=new P,j.constructor=xu,j.gG=(function(e){try{var t=e.bG()}catch{var t=`(Unable to get the message for this error - exception occurred in its getMessage)`}return zi(e).cU()+`: `+t}),j.gJ=(function(e,t){try{return Ac($u().hF(e.gK()),``,t,``)}catch{return`(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)`}}),j.ha=(function(e){this.cl.R(e)}),j.bL=(function(e){for(var t=this.cl.d();t.i();){var n=t.g();try{n.c(e)}catch(e){var r=e instanceof tu?e:new vm(e),i=this.d3;if(n===null?i===null:n.f(i))throw r instanceof vm?r.U:r;console.warn(`Error processing an unhandled error callback:`),cl().hm(0,new sf((e=>(()=>{throw e instanceof vm?e.U:e}))(r)))}}}),new I().i(xu,`com.raquo.airstream.core.AirstreamError$`,{br:1,ej:1,ek:1});var Su;function Cu(){return Su||=new xu,Su}function G(e,t,n){return new Nd(n.g1(t))}function wu(e,t,n,r){return new Dl(new Y((e=>{(wo(),new xo(t,null,null)).X(new Y((e=>(t=>{n.c(t).af(e)}))(e)))})),Yo())}function Tu(e,t,n){this.dE=null,this.dF=null,this.dD=null,this.dE=e,this.dF=t,this.dD=n}j=Tu.prototype=new P,j.constructor=Tu,j.af=(function(e){this.dD.fY(e,this.dE,this.dF)}),new I().i(Tu,`com.raquo.laminar.modifiers.KeySetter`,{co:1,V:1,cA:1});function Eu(e,t){if(this.cw=null,this.dK=null,this.dL=null,this.dK=t,Nl(this),e===null)throw Ju(new K,`Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load`);if(!bo().gS(e,document))throw Ju(new K,`Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering`);this.dL=e,this.h0()}j=Eu.prototype=new P,j.constructor=Eu,j.cd=(function(){return this.cw}),j.eU=(function(e){this.cw=e}),j.h0=(function(){return this.cw.eN(),rs().c7(this,this.dK,void 0)}),j.aS=(function(){return this.dL}),new I().i(Eu,`com.raquo.laminar.nodes.RootNode`,{cE:1,ab:1,an:1});function Du(e,t,n){this.cy=null,this.dO=null,this.dO=e,Pl(this,e,!1)}j=Du.prototype=new Il,j.constructor=Du,j.cW=(function(){return this.dO}),new I().i(Du,`com.raquo.laminar.tags.CustomHtmlTag`,{cH:1,ao:1,ac:1});function Ou(){this.b2=null,this.aZ=null,this.b0=!1,this.b1=null,this.b3=!1,this.dQ=null,this.dR=!1,zl(this,`wa-button`)}j=Ou.prototype=new Vl,j.constructor=Ou,j.hC=(function(){return this.dR||=(this.dQ=(J(),Sl(new Cl,`with-caret`,jo().dv)),!0),this.dQ}),j.c6=(function(){return Sn}),new I().i(Ou,`io.github.nguyenyou.webawesome.laminar.Button$`,{cK:1,a2:1,a1:1});var ku;function Au(){return ku||=new Ou,ku}function ju(){this.aJ=null,this.be=null,this.dS=null,this.dT=!1,this.dU=null,this.dV=!1,Sl(this,`label-placement`,new Rl)}j=ju.prototype=new wl,j.constructor=ju,j.gm=(function(){return this.dT||=(this.dS=Nu().u(`end`),!0),this.dS}),j.ho=(function(){return this.dV||=(this.dU=Nu().u(`start`),!0),this.dU}),new I().i(ju,`io.github.nguyenyou.webawesome.laminar.CommonKeys$DividerLabelPlacement$`,{cL:1,a9:1,S:1});var Mu;function Nu(){return Mu||=new ju,Mu}function Pu(){this.aJ=null,this.be=null,this.dW=null,this.dX=!1,Sl(this,`orientation`,new Rl)}j=Pu.prototype=new wl,j.constructor=Pu,j.fr=(function(){return this.dX||=(this.dW=Iu().u(`vertical`),!0),this.dW}),new I().i(Pu,`io.github.nguyenyou.webawesome.laminar.CommonKeys$Orientation$`,{cM:1,a9:1,S:1});var Fu;function Iu(){return Fu||=new Pu,Fu}function Lu(){this.b2=null,this.aZ=null,this.b0=!1,this.b1=null,this.b3=!1,this.e0=null,this.e1=!1,this.dY=null,this.dZ=!1,zl(this,`wa-divider`)}j=Lu.prototype=new Vl,j.constructor=Lu,j.fi=(function(){return this.e1||=(this.e0=Iu(),!0),this.e0}),j.fc=(function(){return this.dZ||=(this.dY=Nu(),!0),this.dY}),j.c6=(function(){return Tn}),new I().i(Lu,`io.github.nguyenyou.webawesome.laminar.Divider$`,{cN:1,a2:1,a1:1});var Ru;function zu(){return Ru||=new Lu,Ru}function Bu(){this.b2=null,this.aZ=null,this.b0=!1,this.b1=null,this.b3=!1,zl(this,`wa-dropdown`)}j=Bu.prototype=new Vl,j.constructor=Bu,j.c6=(function(){return Li}),new I().i(Bu,`io.github.nguyenyou.webawesome.laminar.Dropdown$`,{cO:1,a2:1,a1:1});var Vu;function Hu(){return Vu||=new Bu,Vu}function Uu(){this.b2=null,this.aZ=null,this.b0=!1,this.b1=null,this.b3=!1,this.e4=null,this.e5=!1,zl(this,`wa-dropdown-item`)}j=Uu.prototype=new Vl,j.constructor=Uu,j.bc=(function(){return this.e5||=(this.e4=(J(),Sl(new Cl,`value`,jo().bd)),!0),this.e4}),j.c6=(function(){return On}),new I().i(Uu,`io.github.nguyenyou.webawesome.laminar.DropdownItem$`,{cQ:1,a2:1,a1:1});var Wu;function Gu(){return Wu||=new Uu,Wu}function Ku(e){if(e.a1.Z)return e.a1.Q().cU()+`[]`;for(var t=e.a1.N,n=t.length-1|0;n>=0&&t.charCodeAt(n)===36;)n=n-1|0;if(n>=0&&(t.charCodeAt(n)-48|0)>>>0<=9){for(n=n-1|0;n>=0&&(t.charCodeAt(n)-48|0)>>>0<=9;)n=n-1|0;for(;n>=0&&t.charCodeAt(n)===36;)n=n-1|0}for(;;){if(n>=0)var r=n,i=t.charCodeAt(r),a=i!==36&&i!==46;else var a=!1;if(a)n=n-1|0;else break}var o=1+n|0;return t.substring(o)}function qu(e){this.cA=null,this.a1=e}j=qu.prototype=new P,j.constructor=qu,j.n=(function(){return(this.a1.Y?`interface `:this.a1.X?``:`class `)+this.a1.N}),j.cU=(function(){return this.cA===null&&(this.cA=Ku(this)),this.cA}),new I().i(qu,`java.lang.Class`,{cY:1,a:1,N:1});function Ju(e,t){return U(e,t,null,!0,!0),e}var K=class extends tu{};new I().i(K,`java.lang.Exception`,{y:1,s:1,a:1});function Yu(){}j=Yu.prototype=new P,j.constructor=Yu;function Xu(){}Xu.prototype=j;function Zu(){this.fC=null,Qu=this,op(),this.fC=fd()}j=Zu.prototype=new ou,j.constructor=Zu,new I().i(Zu,`scala.Predef$`,{dE:1,dx:1,dy:1});var Qu;function $u(){return Qu||=new Zu,Qu}function ed(e,t){return e.bm=t,e}function td(){this.bm=null}j=td.prototype=new P,j.constructor=td;function nd(){}nd.prototype=j,j.aQ=(function(e){return this.bm.cT(e,Om())}),j.a4=(function(){return this.bm.fe(Om())}),j.aO=(function(e){return this.bm.cT(e,Om())});function rd(e,t){if(t<0)return 1;var n=e.m();if(n>=0)return n===t?0:n<t?-1:1;for(var r=0,i=e.d();i.i();){if(r===t)return 1;i.g(),r=1+r|0}return r-t|0}function id(e,t){return new Xf(e).cR(t)}function ad(e,t,n){var r=t>0?t:0,i=n<0?-1:n<=r?0:n-r|0;return i===0?ld().E:new $f(e,r,i)}function od(e,t){for(var n=t.d();e.i();)if(!n.i()||!Zc().H(e.g(),n.g()))return!1;return!n.i()}function sd(){this.E=null,cd=this,this.E=new Kf}j=sd.prototype=new P,j.constructor=sd,j.a4=(function(){return new Qp}),new I().i(sd,`scala.collection.Iterator$`,{dM:1,a:1,T:1});var cd;function ld(){return cd||=new sd,cd}function ud(){}j=ud.prototype=new P,j.constructor=ud,new I().i(ud,`scala.collection.immutable.Map$`,{e2:1,a:1,dS:1});var dd;function fd(){return dd||=new ud,dd}function pd(e){this.eE=null,this.eE=e}j=pd.prototype=new lu,j.constructor=pd,j.W=(function(){return(0,this.eE)()}),new I().i(pd,`scala.runtime.AbstractFunction0.$$Lambda$07eded5776954a9c145e92c329afd52873ad179c`,{ep:1,bm:1,aA:1});function q(e){this.eF=null,this.eF=e}j=q.prototype=new du,j.constructor=q,j.c=(function(e){return(0,this.eF)(e)}),new I().i(q,`scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919`,{eq:1,bn:1,e:1});var md=new I().i(0,`scala.runtime.Nothing$`,{ew:1,s:1,a:1});function hd(){}j=hd.prototype=new P,j.constructor=hd,j.gE=(function(e){return(t=>e.c(t))}),new I().i(hd,`scala.scalajs.js.Any$`,{eC:1,eD:1,eE:1});var gd;function _d(){return gd||=new hd,gd}function vd(){}j=vd.prototype=new lu,j.constructor=vd;function yd(){}yd.prototype=j;function bd(){}j=bd.prototype=new du,j.constructor=bd;function xd(){}xd.prototype=j;function Sd(){}j=Sd.prototype=new pu,j.constructor=Sd;function Cd(){}Cd.prototype=j;function wd(){}j=wd.prototype=new hu,j.constructor=wd;function Td(){}Td.prototype=j;function Ed(e,t,n,r){if(this.d4=null,r===null)throw jf(new Mf);this.d4=void 0}j=Ed.prototype=new P,j.constructor=Ed,j.n=(function(){return Oa(this)}),new I().i(Ed,`com.raquo.airstream.core.Observer$$anon$8`,{bv:1,bw:1,bs:1,bt:1});function Dd(e){if(this.dg=null,this.dh=!1,this.ft=null,e===null)throw jf(new Mf);Po(this)}j=Dd.prototype=new P,j.constructor=Dd,j.hs=(function(){return this.dh||=(this.dg=new Ll(`svg`,!1),!0),this.dg}),new I().i(Dd,`com.raquo.laminar.api.Laminar$svg$`,{bP:1,cd:1,bY:1,c0:1});function Od(){this.o=null,kd=this,this.o=new Um}j=Od.prototype=new P,j.constructor=Od,new I().i(Od,`com.raquo.laminar.api.package$`,{bS:1,ak:1,al:1,aj:1});var kd;function J(){return kd||=new Od,kd}function Ad(e,t,n){return e.bf=t,e.bg=n,e}function jd(){this.bf=null,this.bg=null}j=jd.prototype=new Vo,j.constructor=jd;function Md(){}Md.prototype=j,j.u=(function(e){return new Tu(this,Ui(e),new lf(((e,t,n)=>{bo().hi(e,t,n)})))});function Nd(e){this.dN=null,this.cx=null,this.dN=X(),this.cx=bo().g9(e)}j=Nd.prototype=new P,j.constructor=Nd,j.fo=(function(e){this.dN=e}),j.fs=(function(e){}),j.af=(function(e){rs().c7(e,this,void 0)}),j.hv=(function(){return this.cx.data}),j.aS=(function(){return this.cx}),new I().i(Nd,`com.raquo.laminar.nodes.TextNode`,{cG:1,ab:1,V:1,am:1});function Pd(){}j=Pd.prototype=new P,j.constructor=Pd;function Fd(){}Fd.prototype=j;function Id(e,t){return e===t}function Ld(e){return e?1231:1237}var Rd=new I().i(0,`java.lang.Boolean`,{cV:1,a:1,P:1,N:1},(e=>typeof e==`boolean`));function zd(e){return e}function Bd(e,t){return t instanceof Ri&&e===t.c}var Vd=new I().i(0,`java.lang.Character`,{au:1,a:1,P:1,N:1},(e=>e instanceof Ri));function Hd(e,t){return U(e,t,null,!0,!0),e}var Ud=class extends K{};new I().i(Ud,`java.lang.RuntimeException`,{G:1,y:1,s:1,a:1});function Wd(){this.l=null,this.l=``}j=Wd.prototype=new P,j.constructor=Wd,j.fV=(function(e){var t=eu().h2(e,0,e.a.length);return this.l=``+this.l+t,this}),j.n=(function(){return this.l}),j.e=(function(){return this.l.length}),j.eR=(function(e){return this.l.charCodeAt(e)}),new I().i(Wd,`java.lang.StringBuilder`,{de:1,ad:1,as:1,a:1});function Gd(){}j=Gd.prototype=new Xu,j.constructor=Gd;function Kd(){}Kd.prototype=j;function qd(){}j=qd.prototype=new P,j.constructor=qd,j.n=(function(){return`<function1>`}),j.fZ=(function(e){throw new zf(e)}),j.c=(function(e){this.fZ(e)}),new I().i(qd,`scala.PartialFunction$$anon$1`,{dD:1,e:1,k:1,a:1});function Jd(){}j=Jd.prototype=new P,j.constructor=Jd;function Yd(){}Yd.prototype=j,j.m=(function(){return-1}),j.aB=(function(e,t,n){return kc(this,e,t,n)}),j.ba=(function(e,t,n,r){return jc(this,e,t,n,r)}),j.d=(function(){return this}),j.cR=(function(e){return id(this,e)}),j.cc=(function(e){return this.bM(e,-1)}),j.bM=(function(e,t){return ad(this,e,t)}),j.n=(function(){return`<iterator>`});function Xd(e,t){return e.bp=t,e}function Zd(){this.bp=null}j=Zd.prototype=new P,j.constructor=Zd;function Qd(){}Qd.prototype=j,j.eQ=(function(e){return this.bp.aO(e)}),j.f4=(function(e){return this.bp.aQ(e)}),j.a4=(function(){return this.bp.a4()}),j.aO=(function(e){return this.eQ(e)}),j.aQ=(function(e){return this.f4(e)});function $d(e){return e.a3(0)===0}function ef(e,t){var n=e.m();if(n!==-1){var r=t.m();if(r!==-1){if(n!==r)return!1;if(n===0)return!0}}return od(e.d(),t)}function tf(e,t){for(var n=e.aR().a4(),r=e.d();r.i();)n.R(t.c(r.g()));return n.a5()}function nf(e,t){if(this.ez=null,this.c1=null,this.ez=e,t===null)throw jf(new Mf);this.c1=t}j=nf.prototype=new P,j.constructor=nf,j.fO=(function(e){return this.c1.R(e),this}),j.fI=(function(e){return this.c1.V(e),this}),j.a5=(function(){return this.ez.c(this.c1.a5())}),j.R=(function(e){return this.fO(e)}),j.V=(function(e){return this.fI(e)}),new I().i(nf,`scala.collection.mutable.Builder$$anon$1`,{ec:1,Q:1,R:1,U:1});function rf(e,t){return e.bs=t,e}function af(){this.bs=null}j=af.prototype=new P,j.constructor=af;function of(){}of.prototype=j,j.fP=(function(e){return this.bs.R(e),this}),j.fJ=(function(e){return this.bs.V(e),this}),j.a5=(function(){return this.bs}),j.R=(function(e){return this.fP(e)}),j.V=(function(e){return this.fJ(e)}),new I().i(af,`scala.collection.mutable.GrowableBuilder`,{bd:1,Q:1,R:1,U:1});function sf(e){this.eI=null,this.eI=e}j=sf.prototype=new yd,j.constructor=sf,j.W=(function(){return(0,this.eI)()}),new I().i(sf,`scala.scalajs.runtime.AnonFunction0.$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d`,{eJ:1,eI:1,bm:1,aA:1});function Y(e){this.eJ=null,this.eJ=e}j=Y.prototype=new xd,j.constructor=Y,j.c=(function(e){return(0,this.eJ)(e)}),new I().i(Y,`scala.scalajs.runtime.AnonFunction1.$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1`,{eL:1,eK:1,bn:1,e:1});function cf(e){this.eK=null,this.eK=e}j=cf.prototype=new Cd,j.constructor=cf,j.cN=(function(e,t){return(0,this.eK)(e,t)}),new I().i(cf,`scala.scalajs.runtime.AnonFunction2.$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7`,{eN:1,eM:1,er:1,dv:1});function lf(e){this.eL=null,this.eL=e}j=lf.prototype=new Td,j.constructor=lf,j.fY=(function(e,t,n){return(0,this.eL)(e,t,n)}),new I().i(lf,`scala.scalajs.runtime.AnonFunction3.$$Lambda$73f37e31ba038fe839c174212837da323f140c96`,{eP:1,eO:1,es:1,dw:1});function uf(e,t){this.bU=null,this.cs=null,this.bU=e,this.cs=t}j=uf.prototype=new P,j.constructor=uf,j.af=(function(e){var t=this.cs;t!==void 0&&t.fh(e,this.bU),rs().c7(e,this.bU,void 0)}),j.hD=(function(e){return new uf(this.bU,e.fX(this.cs))});var df=new I().i(uf,`com.raquo.laminar.inserters.StaticChildInserter`,{ch:1,V:1,cf:1,cj:1,ce:1});function ff(e){e.cv=new uo(new sf((()=>{e.aY.eN()})),new sf((()=>{e.aY.ga()})))}function pf(e,t){hf(e,e.bX,t)&&gf(e,t)}function mf(e,t){var n=e.bX;e.bX=t,hf(e,n,t)||gf(e,t)}function hf(e,t,n){var r=!t.b()&&!t.s().cd().C.b(),i=!n.b()&&!n.s().cd().C.b();return r&&!i}function gf(e,t){_f(e,t.b()?X():new Gp(t.s().cd()))}function _f(e,t){if(t.b())e.cv.g5();else{var n=t.s();e.cv.hj(n)}}function vf(){}j=vf.prototype=new Fd,j.constructor=vf;function yf(){}yf.prototype=j;var bf=class extends Ud{constructor(e){super(),U(this,e,null,!0,!0)}};new I().i(bf,`java.lang.ArithmeticException`,{cU:1,G:1,y:1,s:1,a:1});var xf=new I().i(0,`java.lang.Byte`,{cW:1,W:1,a:1,P:1,N:1},(e=>Qi(e)));function Sf(e,t){return U(e,t,null,!0,!0),e}function Cf(e){return U(e,null,null,!0,!0),e}var wf=class extends Ud{};new I().i(wf,`java.lang.IllegalArgumentException`,{aw:1,G:1,y:1,s:1,a:1});var Tf=class extends Ud{constructor(e){super(),U(this,e,null,!0,!0)}};new I().i(Tf,`java.lang.IllegalStateException`,{d0:1,G:1,y:1,s:1,a:1});function Ef(e,t){return U(e,t,null,!0,!0),e}function Df(e,t){return U(e,`Index out of range: `+t,null,!0,!0),e}var Of=class extends Ud{};new I().i(Of,`java.lang.IndexOutOfBoundsException`,{d1:1,G:1,y:1,s:1,a:1});function kf(){}j=kf.prototype=new Fd,j.constructor=kf,new I().i(kf,`java.lang.JSConsoleBasedPrintStream$DummyOutputStream`,{d5:1,ar:1,ap:1,at:1,aq:1});function Af(e,t){return U(e,t,null,!0,!0),e}function jf(e){return U(e,null,null,!0,!0),e}var Mf=class extends Ud{};new I().i(Mf,`java.lang.NullPointerException`,{d6:1,G:1,y:1,s:1,a:1});var Nf=new I().i(0,`java.lang.Short`,{d9:1,W:1,a:1,P:1,N:1},(e=>$i(e))),Pf=class extends Ud{constructor(e){super(),U(this,e,null,!0,!0)}};new I().i(Pf,`java.lang.UnsupportedOperationException`,{dh:1,G:1,y:1,s:1,a:1});var Ff=class extends Ud{constructor(e){super(),U(this,e,null,!0,!0)}};new I().i(Ff,`java.util.ConcurrentModificationException`,{dl:1,G:1,y:1,s:1,a:1});var If=class extends Ud{constructor(e){super(),U(this,e,null,!0,!0)}};new I().i(If,`java.util.NoSuchElementException`,{dm:1,G:1,y:1,s:1,a:1});function Lf(){}j=Lf.prototype=new Kd,j.constructor=Lf,j.c=(function(e){return e}),j.n=(function(){return`generalized constraint`}),new I().i(Lf,`scala.$less$colon$less$$anon$1`,{ds:1,dp:1,dq:1,e:1,a:1});function Rf(e){if(!e.ef){if(e.bZ===null)var t=`null`;else{var n=B().fT(e.bZ),r=n===null?`of a JS class`:`of class `+n.a1.N;try{var t=e.bZ+` (`+r+`)`}catch{var t=`an instance `+r}}e.ee=t,e.ef=!0}return e.ee}var zf=class extends Ud{constructor(e){super(),this.bZ=null,this.ee=null,this.ef=!1,this.bZ=e,U(this,null,null,!0,!0)}bG(){return Rf(this)}};new I().i(zf,`scala.MatchError`,{dz:1,G:1,y:1,s:1,a:1});function Bf(){}j=Bf.prototype=new P,j.constructor=Bf;function Vf(){}Vf.prototype=j,j.bJ=(function(){return new Hf(this)}),j.b=(function(){return this===X()}),j.m=(function(){return!this.b()|0}),j.d=(function(){return this.b()?ld().E:new qf(this.s())});function Hf(e){if(this.bj=0,this.ej=0,this.ei=null,e===null)throw jf(new Mf);this.ei=e,this.bj=0,this.ej=e.aC()}j=Hf.prototype=new Yd,j.constructor=Hf,j.i=(function(){return this.bj<this.ej}),j.g=(function(){var e=this.ei.aD(this.bj);return this.bj=1+this.bj|0,e}),new I().i(Hf,`scala.Product$$anon$1`,{dF:1,I:1,b:1,c:1,J:1});function Uf(e){this.bm=null,ed(this,e)}j=Uf.prototype=new nd,j.constructor=Uf,new I().i(Uf,`scala.collection.ClassTagSeqFactory$AnySeqDelegate`,{dK:1,dJ:1,a:1,T:1,X:1});function Wf(e){return Ac(e,e.aA()+`(`,`, `,`)`)}function Gf(e){return!!(e&&e.$classData&&e.$classData.n.f)}function Kf(){}j=Kf.prototype=new Yd,j.constructor=Kf,j.i=(function(){return!1}),j.h3=(function(){throw new If(`next on empty iterator`)}),j.m=(function(){return 0}),j.g=(function(){this.h3()}),j.bM=(function(e,t){return this}),new I().i(Kf,`scala.collection.Iterator$$anon$19`,{dN:1,I:1,b:1,c:1,J:1});function qf(e){this.el=null,this.bn=!1,this.el=e,this.bn=!1}j=qf.prototype=new Yd,j.constructor=qf,j.i=(function(){return!this.bn}),j.g=(function(){return this.bn?ld().E.g():(this.bn=!0,this.el)}),j.bM=(function(e,t){return this.bn||e>0||t===0?ld().E:this}),new I().i(qf,`scala.collection.Iterator$$anon$20`,{dO:1,I:1,b:1,c:1,J:1});function Jf(e){for(;;)if(e.z instanceof Xf){var t=e.z;if(e.z=t.z,e.aj=t.aj,t.L!==null){e.K===null&&(e.K=t.K);var n=t.K;n===null&&tl().bb(),n.bo=e.L,e.L=t.L}}else return}function Yf(e){for(;;)if(e.L===null)return e.z=null,e.K=null,!1;else{if(e.z=e.L.gO(),e.K===e.L){var t=e.K;t===null&&tl().bb(),e.K=t.bo}if(e.L=e.L.bo,Jf(e),e.aj)return!0;if(!(e.z!==null&&e.z.i()))continue;return e.aj=!0,!0}}function Xf(e){this.z=null,this.L=null,this.K=null,this.aj=!1,this.z=e,this.L=null,this.K=null,this.aj=!1}j=Xf.prototype=new Yd,j.constructor=Xf,j.i=(function(){return this.aj?!0:this.z===null?!1:this.z.i()?(this.aj=!0,!0):Yf(this)}),j.g=(function(){if(this.i()){this.aj=!1;var e=this.z;return e===null&&tl().bb(),e.g()}return ld().E.g()}),j.cR=(function(e){var t=new Nc(e,null);if(this.L===null)this.L=t,this.K=t;else{var n=this.K;n===null&&tl().bb(),n.bo=t,this.K=t}return this.z===null&&(this.z=ld().E),this}),new I().i(Xf,`scala.collection.Iterator$ConcatIterator`,{aK:1,I:1,b:1,c:1,J:1});function Zf(e){for(;e.aa>0;)e.ak.i()?(e.ak.g(),e.aa=e.aa-1|0):e.aa=0}function Qf(e,t){if(e.F<0)return-1;var n=e.F-t|0;return n<0?0:n}function $f(e,t,n){this.ak=null,this.F=0,this.aa=0,this.ak=e,this.F=n,this.aa=t}j=$f.prototype=new Yd,j.constructor=$f,j.m=(function(){var e=this.ak.m();if(e<0)return-1;var t=e-this.aa|0,n=t<0?0:t;if(this.F<0)return n;var r=this.F;return r<n?r:n}),j.i=(function(){return Zf(this),this.F!==0&&this.ak.i()}),j.g=(function(){return Zf(this),this.F>0?(this.F=this.F-1|0,this.ak.g()):this.F<0?this.ak.g():ld().E.g()}),j.bM=(function(e,t){var n=e>0?e:0;if(t<0)var r=Qf(this,n);else if(t<=n)var r=0;else if(this.F<0)var r=t-n|0;else var i=Qf(this,n),a=t-n|0,r=i<a?i:a;var o=this.aa+n|0;return r===0?ld().E:o<0?(this.aa=2147483647,this.F=0,id(this,new pd((()=>new $f(this.ak,o-2147483647|0,r))))):(this.aa=o,this.F=r,this)}),new I().i($f,`scala.collection.Iterator$SliceIterator`,{dR:1,I:1,b:1,c:1,J:1});function ep(e,t){if(t<0)throw Ef(new Of,``+t);var n=e.gk(t);if(n.b())throw Ef(new Of,``+t);return n.I()}function tp(e,t){return zm(t)?np(e,e,t):ef(e,t)}function np(e,t,n){for(var r=n,i=t;;)if(i===r)return!0;else{if(!i.b()&&!r.b()&&Zc().H(i.I(),r.I())){var a=i.y(),o=r.y();i=a,r=o;continue}return i.b()&&r.b()}}function rp(e){if(this.br=null,e===null)throw jf(new Mf);this.br=e}j=rp.prototype=new Yd,j.constructor=rp,j.i=(function(){return!this.br.b()}),j.g=(function(){var e=this.br.I();return this.br=this.br.y(),e}),new I().i(rp,`scala.collection.StrictOptimizedLinearSeqOps$$anon$1`,{dV:1,I:1,b:1,c:1,J:1});function ip(){ap=this,$(),$()}j=ip.prototype=new P,j.constructor=ip,j.aO=(function(e){return $().fj(e)}),j.a4=(function(){return new zh}),j.aQ=(function(e){return $().fj(e)}),new I().i(ip,`scala.collection.immutable.List$`,{e1:1,a:1,T:1,X:1,a0:1});var ap;function op(){return ap||=new ip,ap}function sp(){this.es=null,cp=this,this.es=new F(0)}j=sp.prototype=new P,j.constructor=sp,j.aO=(function(e){return this.f5(e)}),j.f5=(function(e){var t=e.m();if(t>=0){var n=this.fl(this.es,0,t),r=Gf(e)?e.aB(n,0,2147483647):e.d().aB(n,0,2147483647);if(r!==t)throw new Tf(`Copied `+r+` of `+t);return Bh(new Hh,n,t)}return Vh(new Hh).eO(e)}),j.a4=(function(){return new up}),j.hg=(function(e,t){if(t<0)throw Hd(new Ud,`Overflow while resizing array of array-backed collection. Requested length: `+t+`; current length: `+e+`; increase: `+(t-e|0));if(t<=e)return-1;if(t>2147483639)throw Hd(new Ud,`Array of array-backed collection exceeds VM length limit of 2147483639. Requested length: `+t+`; current length: `+e);if(e>1073741819)return 2147483639;var n=e<<1,r=n>16?n:16;return t>r?t:r}),j.fl=(function(e,t,n){var r=this.hg(e.a.length,n);if(r<0)return e;var i=new F(r);return e.a0(0,i,0,t),i}),j.aQ=(function(e){return this.f5(e)}),new I().i(sp,`scala.collection.mutable.ArrayBuffer$`,{e4:1,a:1,T:1,X:1,a0:1});var cp;function lp(){return cp||=new sp,cp}function up(){this.bs=null,rf(this,(lp(),Vh(new Hh)))}j=up.prototype=new of,j.constructor=up,new I().i(up,`scala.collection.mutable.ArrayBuffer$$anon$1`,{e5:1,bd:1,Q:1,R:1,U:1});function dp(){this.bp=null,Xd(this,wp())}j=dp.prototype=new Qd,j.constructor=dp,new I().i(dp,`scala.collection.mutable.Buffer$`,{eb:1,dT:1,a:1,T:1,X:1});var fp;function pp(){return fp||=new dp,fp}function mp(e,t){return e.bt=t,e}function hp(){this.bt=null}j=hp.prototype=new P,j.constructor=hp;function gp(){}gp.prototype=j,j.V=(function(e){return su(this,e)}),j.a5=(function(){return this.bt});function _p(){}j=_p.prototype=new P,j.constructor=_p,j.aO=(function(e){return new zh().cj(e)}),j.a4=(function(){return rf(new af,new zh)}),j.aQ=(function(e){return new zh().cj(e)}),new I().i(_p,`scala.collection.mutable.ListBuffer$`,{ef:1,a:1,T:1,X:1,a0:1});var vp;function yp(){return vp||=new _p,vp}function bp(e,t){this.cK=null,this.eD=null,this.eC=0,this.cK=e,this.eD=t,this.eC=t.W()|0}j=bp.prototype=new Yd,j.constructor=bp,j.i=(function(){return Jc().eS(this.eC,this.eD.W()|0,`mutation occurred during iteration`),this.cK.i()}),j.g=(function(){return this.cK.g()}),new I().i(bp,`scala.collection.mutable.MutationTracker$CheckedIterator`,{eh:1,I:1,b:1,c:1,J:1});function xp(e){this.eH=null,this.bw=0,this.eG=0,this.eH=e,this.bw=0,this.eG=e.aC()}j=xp.prototype=new Yd,j.constructor=xp,j.i=(function(){return this.bw<this.eG}),j.g=(function(){var e=this.eH.aD(this.bw);return this.bw=1+this.bw|0,e}),new I().i(xp,`scala.runtime.ScalaRunTime$$anon$1`,{eA:1,I:1,b:1,c:1,J:1});function Sp(){}j=Sp.prototype=new P,j.constructor=Sp,j.aO=(function(e){return this.f6(e)}),j.a4=(function(){return Wh(new Gh)}),j.f6=(function(e){return su(Wh(new Gh),e).a5()}),j.aQ=(function(e){return this.f6(e)}),new I().i(Sp,`scala.scalajs.js.WrappedArray$`,{eG:1,a0:1,a:1,T:1,X:1});var Cp;function wp(){return Cp||=new Sp,Cp}function Tp(){}j=Tp.prototype=new P,j.constructor=Tp,j.aO=(function(e){return this.f7(e)}),j.f7=(function(e){return this.a4().V(e).a5()}),j.a4=(function(){return new nf(new q((e=>new Q(e.az))),Uh(new Gh,[]))}),j.aQ=(function(e){return this.f7(e)}),new I().i(Tp,`scala.scalajs.runtime.WrappedVarArgs$`,{eR:1,a0:1,a:1,T:1,X:1});var Ep;function Dp(){return Ep||=new Tp,Ep}var Op=class e extends bu{constructor(e,t){super(),this.aU=null,this.aT=0,this.aU=e,this.aT=t,U(this,`Transaction depth exceeded maxDepth = `+t+`: Execution of `+e+" aborted. See `Transaction.maxDepth`.",null,!0,!0)}bJ(){return new Hf(this)}j(){var e=-889275714;return e=V().k(e,Bp(`TransactionDepthExceeded`)),e=V().k(e,V().r(this.aU)),e=V().k(e,this.aT),V().A(e,2)}f(t){if(this===t)return!0;if(t instanceof e){if(this.aT===t.aT){var n=this.aU,r=t.aU;return n===null?r===null:n===r}return!1}return!1}aC(){return 2}aE(){return`TransactionDepthExceeded`}aD(e){if(e===0)return this.aU;if(e===1)return this.aT;throw Ef(new Of,``+e)}n(){return`TransactionDepthExceeded: `+this.aU+`; maxDepth: `+this.aT}};new I().i(Op,`com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded`,{ai:1,bq:1,s:1,a:1,d:1,Y:1});function kp(e){this.bf=null,this.bg=null,this.dw=null,this.dx=!1,Ad(this,e,$())}j=kp.prototype=new Md,j.constructor=kp,j.cQ=(function(){return this.dx||=(this.dw=this.u(`center`),!0),this.dw}),new I().i(kp,`com.raquo.laminar.defs.styles.StyleProps$$anon$14`,{c4:1,aa:1,S:1,a7:1,a8:1,cb:1});function Ap(e,t){this.bX=null,this.aY=null,this.cv=null,this.dJ=null,this.a7=null,this.dJ=e,this.a7=t,this.bX=X(),Nl(this),ff(this)}j=Ap.prototype=new P,j.constructor=Ap,j.af=(function(e){rs().c7(e,this,void 0)}),j.cd=(function(){return this.aY}),j.eU=(function(e){this.aY=e}),j.fs=(function(e){pf(this,e)}),j.fo=(function(e){mf(this,e)}),j.n=(function(){return`ReactiveHtmlElement(`+(this.a7===null?`tag=`+this.dJ.cW():this.a7.outerHTML)+`)`}),j.aS=(function(){return this.a7}),new I().i(Ap,`com.raquo.laminar.nodes.ReactiveHtmlElement`,{cD:1,ab:1,V:1,am:1,an:1,cC:1});function jp(e,t){return Object.is(e,t)}function Mp(e){var t=e|0;if(t===e&&1/e!=-1/0)return t;if(e!==e)return 2146959360;var n=qi;return n.setFloat64(0,e,!0),(n.getInt32(0,!0)|0)^(n.getInt32(4,!0)|0)}var Np=new I().i(0,`java.lang.Double`,{av:1,W:1,a:1,P:1,N:1,Z:1},(e=>typeof e==`number`)),Pp=new I().i(0,`java.lang.Float`,{cZ:1,W:1,a:1,P:1,N:1,Z:1},(e=>ta(e))),Fp=new I().i(0,`java.lang.Integer`,{d2:1,W:1,a:1,P:1,N:1,Z:1},(e=>ea(e)));function Ip(e,t,n){if(n instanceof M){var r=n,i=r.l,a=r.h;return(e^i|t^a)===0}return!1}function Lp(e,t){return e^t}var Rp=new I().i(0,`java.lang.Long`,{ax:1,W:1,a:1,P:1,N:1,Z:1},(e=>e instanceof M)),zp=class extends wf{constructor(e){super(),U(this,e,null,!0,!0)}};new I().i(zp,`java.lang.NumberFormatException`,{d7:1,aw:1,G:1,y:1,s:1,a:1});function Bp(e){for(var t=e.length,n=0,r=0;r!==t;)n=((n<<5)-n|0)+e.charCodeAt(r)|0,r=1+r|0;return n}function Vp(e,t){return e===t}var Hp=new I().i(0,`java.lang.String`,{dc:1,a:1,P:1,ad:1,N:1,Z:1},(e=>typeof e==`string`));function Up(){}j=Up.prototype=new Vf,j.constructor=Up,j.j=(function(){return 2433880}),j.n=(function(){return`None`}),j.aC=(function(){return 0}),j.aE=(function(){return`None`}),j.aD=(function(e){throw Df(new Of,e)}),j.gF=(function(){throw new If(`None.get`)}),j.s=(function(){this.gF()}),new I().i(Up,`scala.None$`,{dA:1,aB:1,b:1,d:1,Y:1,a:1});var Wp;function X(){return Wp||=new Up,Wp}function Gp(e){this.bk=null,this.bk=e}j=Gp.prototype=new Vf,j.constructor=Gp,j.j=(function(){return W().fk(this,1323286827,!0)}),j.f=(function(e){return this===e||e instanceof Gp&&Zc().H(this.bk,e.bk)}),j.n=(function(){return B().fG(this)}),j.aC=(function(){return 1}),j.aE=(function(){return`Some`}),j.aD=(function(e){if(e===0)return this.bk;throw Df(new Of,e)}),j.s=(function(){return this.bk}),new I().i(Gp,`scala.Some`,{aC:1,aB:1,b:1,d:1,Y:1,a:1});function Kp(){}j=Kp.prototype=new P,j.constructor=Kp;function qp(){}qp.prototype=j,j.m=(function(){return-1}),j.X=(function(e){Oc(this,e)}),j.aB=(function(e,t,n){return kc(this,e,t,n)}),j.ba=(function(e,t,n,r){return jc(this,e,t,n,r)}),j.aA=(function(){return this.ag()});function Z(e){this.c0=null,this.a8=0,this.bl=0,this.c0=e,this.a8=0,this.bl=tc().Y(this.c0)}j=Z.prototype=new Yd,j.constructor=Z,j.m=(function(){return this.bl-this.a8|0}),j.i=(function(){return this.a8<this.bl}),j.g=(function(){this.a8>=tc().Y(this.c0)&&ld().E.g();var e=B().aP(this.c0,this.a8);return this.a8=1+this.a8|0,e}),j.cc=(function(e){if(e>0){var t=this.a8+e|0;if(t<0)var n=this.bl;else var r=this.bl,n=r<t?r:t;this.a8=n}return this}),new I().i(Z,`scala.collection.ArrayOps$ArrayIterator`,{dI:1,I:1,b:1,c:1,J:1,a:1});function Jp(e,t){return e.cG=t,e.a9=0,e.D=t.e(),e}function Yp(e,t){return t<0?0:t>e.D?e.D:t}function Xp(){this.cG=null,this.a9=0,this.D=0}j=Xp.prototype=new Yd,j.constructor=Xp;function Zp(){}Zp.prototype=j,j.m=(function(){return this.D}),j.i=(function(){return this.D>0}),j.g=(function(){if(this.D>0){var e=this.cG.h(this.a9);return this.a9=1+this.a9|0,this.D=this.D-1|0,e}return ld().E.g()}),j.cc=(function(e){if(e>0){this.a9=this.a9+e|0;var t=this.D-e|0;this.D=t<0?0:t}return this}),j.bM=(function(e,t){var n=Yp(this,e),r=Yp(this,t)-n|0;return this.D=r<0?0:r,this.a9=this.a9+n|0,this}),new I().i(Xp,`scala.collection.IndexedSeqView$IndexedSeqViewIterator`,{aJ:1,I:1,b:1,c:1,J:1,a:1});function Qp(){this.bt=null,mp(this,ld().E)}j=Qp.prototype=new gp,j.constructor=Qp,j.fM=(function(e){return this.bt=this.bt.cR(new pd((()=>new qf(e)))),this}),j.R=(function(e){return this.fM(e)}),new I().i(Qp,`scala.collection.Iterator$$anon$21`,{dP:1,ee:1,Q:1,R:1,U:1,a5:1});function $p(e){return e.ep||=(e.eo=new mh(new(md.r()).C(0)),!0),e.eo}function em(){this.eq=null,this.eo=null,this.ep=!1,tm=this,this.eq=new Uf(this)}j=em.prototype=new P,j.constructor=em,j.gC=(function(e,t){return e instanceof rh?e:this.d1(hc().f3(e,t))}),j.fe=(function(e){return new nf(new q((t=>this.d1(Mc(t,e)))),(lp(),new up))}),j.d1=(function(e){if(e===null)return null;if(e instanceof F)return new mh(e);if(e instanceof fa)return new fh(e);if(e instanceof ha)return new uh(e);if(e instanceof pa)return new ph(e);if(e instanceof ma)return new dh(e);if(e instanceof la)return new lh(e);if(e instanceof ua)return new ch(e);if(e instanceof da)return new hh(e);if(e instanceof ca)return new sh(e);if(Xs(e,1))return new gh(e);throw new zf(e)}),j.cT=(function(e,t){return this.gC(e,t)}),new I().i(em,`scala.collection.immutable.ArraySeq$`,{dZ:1,a:1,aH:1,aF:1,aG:1,aN:1});var tm;function nm(){return tm||=new em,tm}function rm(e){return e.eu=0,e.ev=0,e}function im(){this.eu=0,this.ev=0}j=im.prototype=new P,j.constructor=im;function am(){}am.prototype=j;function om(){this.ey=null,this.ex=null,sm=this,this.ey=new Uf(this),this.ex=new Oh(new F(0))}j=om.prototype=new P,j.constructor=om,j.gD=(function(e,t){return this.fd(hc().f3(e,t))}),j.fe=(function(e){return new nf(new q((e=>this.fd(e))),new mm(e.ch()))}),j.fd=(function(e){if(e===null)return null;if(e instanceof F)return new Oh(e);if(e instanceof fa)return new Eh(e);if(e instanceof ha)return new wh(e);if(e instanceof pa)return new Dh(e);if(e instanceof ma)return new Th(e);if(e instanceof la)return new Ch(e);if(e instanceof ua)return new Sh(e);if(e instanceof da)return new kh(e);if(e instanceof ca)return new xh(e);if(Xs(e,1))return new Ah(e);throw new zf(e)}),j.cT=(function(e,t){return this.gD(e,t)}),new I().i(om,`scala.collection.mutable.ArraySeq$`,{ea:1,a:1,aH:1,aF:1,aG:1,aN:1});var sm;function cm(){return sm||=new om,sm}function lm(e){this.bf=null,this.bg=null,this.dy=null,this.dz=!1,Ad(this,e,$())}j=lm.prototype=new Md,j.constructor=lm,j.gz=(function(){return this.dz||=(this.dy=this.u(`flex`),!0),this.dy}),new I().i(lm,`com.raquo.laminar.defs.styles.StyleProps$$anon$28`,{c5:1,aa:1,S:1,a7:1,a8:1,c9:1,c7:1});function um(e){this.bf=null,this.bg=null,this.dA=null,this.dB=!1,Ad(this,e,$())}j=um.prototype=new Md,j.constructor=um,j.cQ=(function(){return this.dB||=(this.dA=this.u(`center`),!0),this.dA}),new I().i(um,`com.raquo.laminar.defs.styles.StyleProps$$anon$3`,{c6:1,aa:1,S:1,a7:1,a8:1,ca:1,c8:1});function dm(){}j=dm.prototype=new yf,j.constructor=dm;function fm(){}fm.prototype=j;function pm(e){return e.aA()+`(<not computed>)`}function mm(e){this.eu=0,this.ev=0,this.b9=null,this.ew=!1,this.cJ=null,this.b9=e,rm(this),this.ew=e===va.l(),this.cJ=[]}j=mm.prototype=new am,j.constructor=mm,j.eP=(function(e){var t=this.ew?ia(e):e===null?Gc().d0(this.b9):e;return this.cJ.push(t),this}),j.fH=(function(e){for(var t=e.d();t.i();)this.eP(t.g());return this}),j.a5=(function(){return Gc().cZ(this.b9===ga.l()?Zs.l():this.b9===Qc.l()||this.b9===md.l()?L.l():this.b9,this.cJ)}),j.n=(function(){return`ArrayBuilder.generic`}),j.R=(function(e){return this.eP(e)}),j.V=(function(e){return this.fH(e)}),new I().i(mm,`scala.collection.mutable.ArrayBuilder$generic`,{e9:1,e7:1,Q:1,R:1,U:1,a5:1,a:1});function hm(e,t){this.cG=null,this.a9=0,this.D=0,this.eB=null,this.eA=0,this.eB=t,Jp(this,e),this.eA=t.W()|0}j=hm.prototype=new Zp,j.constructor=hm,j.i=(function(){return Jc().eS(this.eA,this.eB.W()|0,`mutation occurred during iteration`),this.D>0}),new I().i(hm,`scala.collection.mutable.CheckedIndexedSeqView$CheckedIterator`,{ed:1,aJ:1,I:1,b:1,c:1,J:1,a:1});function gm(){}j=gm.prototype=new P,j.constructor=gm;function _m(){}_m.prototype=j;var vm=class e extends Ud{constructor(e){super(),this.U=null,this.U=e,U(this,null,null,!0,!0)}bG(){return Ui(this.U)}aE(){return`JavaScriptException`}aC(){return 1}aD(e){return e===0?this.U:V().gQ(e)}bJ(){return new xp(this)}j(){return W().fk(this,1744042595,!0)}f(t){return this===t||t instanceof e&&Zc().H(this.U,t.U)}};new I().i(vm,`scala.scalajs.js.JavaScriptException`,{bo:1,G:1,y:1,s:1,a:1,Y:1,d:1});function ym(e,t){typeof console<`u`&&(e.e6&&console.error?console.error(t):console.log(t))}function bm(e){this.e6=!1,this.bh=null,this.e6=e,new kf,this.bh=``}j=bm.prototype=new fm,j.constructor=bm,j.gU=(function(e){for(var t=e;t!==``;){var n=t.indexOf(`
`)|0;if(n<0)this.bh=``+this.bh+t,t=``;else{var r=this.bh,i=t;ym(this,``+r+i.substring(0,n)),this.bh=``;var a=t,o=1+n|0;t=a.substring(o)}}}),new I().i(bm,`java.lang.JSConsoleBasedPrintStream`,{d4:1,cT:1,cS:1,ar:1,ap:1,at:1,aq:1,as:1});function xm(e,t,n){for(var r=n,i=t;;)if(i<=0||r.b())return r;else{var a=i-1|0,o=r.y();i=a,r=o}}function Sm(){this.bu=null}j=Sm.prototype=new _m,j.constructor=Sm;function Cm(){}Cm.prototype=j,j.n=(function(){return this.bu}),j.f=(function(e){return this===e}),j.j=(function(){return Zi(this)});function wm(){}j=wm.prototype=new qp,j.constructor=wm;function Tm(){}Tm.prototype=j,j.n=(function(){return pm(this)});function Em(){this.bu=null,this.bu=`Any`,$()}j=Em.prototype=new Cm,j.constructor=Em,j.ch=(function(){return L.l()}),j.cX=(function(e){return new F(e)}),new I().i(Em,`scala.reflect.ManifestFactory$AnyManifest$`,{en:1,bk:1,bj:1,a:1,bl:1,bg:1,d:1,bh:1,bi:1});var Dm;function Om(){return Dm||=new Em,Dm}function km(){this.bu=null,this.bu=`Object`,$()}j=km.prototype=new Cm,j.constructor=km,j.ch=(function(){return L.l()}),j.cX=(function(e){return new F(e)}),new I().i(km,`scala.reflect.ManifestFactory$ObjectManifest$`,{eo:1,bk:1,bj:1,a:1,bl:1,bg:1,d:1,bh:1,bi:1});var Am;function jm(){return Am||=new km,Am}function Mm(e,t){return e===t?!0:Nm(t)&&t.cP(e)?e.ci(t):!1}function Nm(e){return!!(e&&e.$classData&&e.$classData.n.i)}function Pm(){}j=Pm.prototype=new qp,j.constructor=Pm;function Fm(){}Fm.prototype=j,j.a3=(function(e){return rd(this,e)}),j.b=(function(){return $d(this)}),j.ci=(function(e){return ef(this,e)}),j.cP=(function(e){return!0}),j.f=(function(e){return Mm(this,e)}),j.j=(function(){return W().fm(this)}),j.n=(function(){return Wf(this)});function Im(){}j=Im.prototype=new Tm,j.constructor=Im;function Lm(){}Lm.prototype=j,j.b=(function(){return $d(this)});function Rm(e){return!!(e&&e.$classData&&e.$classData.n.n)}function zm(e){return!!(e&&e.$classData&&e.$classData.n.a3)}function Bm(e,t){return e.bq=t,e}function Vm(){this.bq=null}j=Vm.prototype=new Lm,j.constructor=Vm;function Hm(){}Hm.prototype=j,j.h=(function(e){return this.bq.h(e)}),j.e=(function(){return this.bq.e()}),j.b=(function(){return this.bq.b()});function Um(){this.dm=null,this.dn=!1,this.di=null,this.dj=!1,this.dk=null,this.dl=!1,this.dt=null,this.du=!1,this.fv=null,this.dp=null,this.dq=!1,this.fu=null,this.dr=null,this.ds=!1,Mo(this),Do(this),To(this),Eo(this)}j=Um.prototype=new P,j.constructor=Um,j.cS=(function(){return this.dn||=(this.dm=Pl(new Fl,`div`,!1),!0),this.dm}),j.fS=(function(){return this.dj||=(this.di=new um(`align-items`),!0),this.di}),j.gf=(function(){return this.dl||=(this.dk=new lm(`display`),!0),this.dk}),j.hw=(function(){return this.du||=(this.dt=new kp(`text-align`),!0),this.dt}),j.hp=(function(){return this.dq||=(this.dp=Sl(new Cl,`style`,jo().bd),!0),this.dp}),j.hr=(function(){return this.ds||=(this.dr=new Dd(this),!0),this.dr}),new I().i(Um,`com.raquo.laminar.api.package$$anon$1`,{bT:1,cc:1,bX:1,c2:1,c1:1,c3:1,bZ:1,bR:1,bN:1,bQ:1,ak:1,al:1,aj:1,bO:1});function Wm(){}j=Wm.prototype=new Lm,j.constructor=Wm;function Gm(){}Gm.prototype=j,j.a3=(function(e){var t=this.e();return t===e?0:t<e?-1:1}),j.m=(function(){return this.e()}),j.ag=(function(){return`IndexedSeqView`});function Km(e){this.bq=null,Bm(this,e)}j=Km.prototype=new Hm,j.constructor=Km,j.a3=(function(e){var t=this.e();return t===e?0:t<e?-1:1}),j.m=(function(){return this.e()}),j.d=(function(){return Jp(new Xp,this)}),j.ag=(function(){return`IndexedSeqView`}),new I().i(Km,`scala.collection.IndexedSeqView$Id`,{dL:1,dU:1,aD:1,aE:1,l:1,b:1,c:1,h:1,g:1,f:1,a:1,aP:1,j:1,aM:1,o:1,aI:1});function qm(){}j=qm.prototype=new Fm,j.constructor=qm;function Jm(){}Jm.prototype=j;function Ym(e,t){this.cI=null,this.et=null,this.cI=e,this.et=t}j=Ym.prototype=new Gm,j.constructor=Ym,j.h=(function(e){return this.cI.h(e)}),j.e=(function(){return this.cI.w}),j.aA=(function(){return`ArrayBufferView`}),j.d=(function(){return new hm(this,this.et)}),new I().i(Ym,`scala.collection.mutable.ArrayBufferView`,{e6:1,dG:1,aD:1,aE:1,l:1,b:1,c:1,h:1,g:1,f:1,a:1,aP:1,j:1,aM:1,o:1,aI:1});function Xm(e,t){return!Qm(t)||e.e()===t.e()}function Zm(e,t){if(Qm(t)){if(e===t)return!0;var n=e.e(),r=n===t.e();if(r){var i=0,a=e.cO(),o=t.cO(),s=a<o?a:o,c=n>>31,l=s>>31,u=s<<1,d=s>>>31|0|l<<1;if(c===d?n>>>0>u>>>0:c>d)var f=s;else var f=n;for(;i<f&&r;)r=Zc().H(e.h(i),t.h(i)),i=1+i|0;if(i<n&&r)for(var p=e.d().cc(i),m=t.d().cc(i);r&&p.i();)r=Zc().H(p.g(),m.g())}return r}return ef(e,t)}function Qm(e){return!!(e&&e.$classData&&e.$classData.n.z)}function $m(){}j=$m.prototype=new Fm,j.constructor=$m;function eh(){}eh.prototype=j;function Q(e){this.c5=null,this.c5=e}j=Q.prototype=new P,j.constructor=Q,j.cV=(function(e){return tf(this,e)}),j.cP=(function(e){return Xm(this,e)}),j.ci=(function(e){return Zm(this,e)}),j.cO=(function(){return Hc().er}),j.d=(function(){return Jp(new Xp,new Km(this))}),j.a3=(function(e){var t=this.e();return t===e?0:t<e?-1:1}),j.m=(function(){return this.e()}),j.f=(function(e){return Mm(this,e)}),j.j=(function(){return W().fm(this)}),j.n=(function(){return Wf(this)}),j.b=(function(){return $d(this)}),j.X=(function(e){Oc(this,e)}),j.aB=(function(e,t,n){return kc(this,e,t,n)}),j.ba=(function(e,t,n,r){return jc(this,e,t,n,r)}),j.e=(function(){return this.c5.length|0}),j.h=(function(e){return this.c5[e]}),j.aA=(function(){return`WrappedVarArgs`}),j.c=(function(e){return this.h(e|0)}),j.aR=(function(){return Dp()}),new I().i(Q,`scala.scalajs.runtime.WrappedVarArgs`,{bp:1,z:1,b:1,c:1,h:1,g:1,f:1,A:1,e:1,k:1,j:1,d:1,i:1,C:1,B:1,o:1,n:1,L:1,D:1,p:1,q:1,a:1});function th(){}j=th.prototype=new eh,j.constructor=th;function nh(){}nh.prototype=j,j.V=(function(e){return su(this,e)});function rh(){}j=rh.prototype=new Jm,j.constructor=rh;function ih(){}ih.prototype=j,j.a3=(function(e){var t=this.e();return t===e?0:t<e?-1:1}),j.m=(function(){return this.e()}),j.ag=(function(){return`IndexedSeq`}),j.cP=(function(e){return Xm(this,e)}),j.ci=(function(e){return Zm(this,e)}),j.gY=(function(e){for(var t=new F(this.e()),n=0;n<t.a.length;)t.a[n]=e.c(this.h(n)),n=1+n|0;return nm().d1(t)}),j.aA=(function(){return`ArraySeq`}),j.aB=(function(e,t,n){var r=this.e(),i=tc().Y(e),a=n<r?n:r,o=t<0?i:i-t|0,s=o<a?o:a,c=s<0?0:s;return c>0&&hc().ca(this.a6(),0,e,t,c),c}),j.cO=(function(){return 2147483647}),j.aR=(function(){return nm().eq}),j.cV=(function(e){return this.gY(e)});function ah(){}j=ah.prototype=new eh,j.constructor=ah;function oh(){}oh.prototype=j,j.a3=(function(e){var t=this.e();return t===e?0:t<e?-1:1}),j.m=(function(){return this.e()}),j.ag=(function(){return`IndexedSeq`}),j.aA=(function(){return`ArraySeq`}),j.aB=(function(e,t,n){var r=this.e(),i=tc().Y(e),a=n<r?n:r,o=t<0?i:i-t|0,s=o<a?o:a,c=s<0?0:s;return c>0&&hc().ca(this.S(),0,e,t,c),c}),j.f=(function(e){return e instanceof ah&&tc().Y(this.S())!==tc().Y(e.S())?!1:Mm(this,e)}),j.aR=(function(){return cm().ey});function sh(e){this.al=null,this.al=e}j=sh.prototype=new ih,j.constructor=sh,j.e=(function(){return this.al.a.length}),j.bF=(function(e){return this.al.a[e]}),j.j=(function(){var e=W();return e.q(this.al,e.p)}),j.f=(function(e){return e instanceof sh?ic().f1(this.al,e.al):Mm(this,e)}),j.d=(function(){return new Z(this.al)}),j.a6=(function(){return this.al}),j.h=(function(e){return this.bF(e)}),j.c=(function(e){return this.bF(e|0)}),new I().i(sh,`scala.collection.immutable.ArraySeq$ofBoolean`,{aQ:1,K:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,o:1,n:1,L:1,z:1,p:1,q:1,D:1,O:1,a:1});function ch(e){this.am=null,this.am=e}j=ch.prototype=new ih,j.constructor=ch,j.e=(function(){return this.am.a.length}),j.bx=(function(e){return this.am.a[e]}),j.j=(function(){var e=W();return e.q(this.am,e.p)}),j.f=(function(e){return e instanceof ch?ic().eW(this.am,e.am):Mm(this,e)}),j.d=(function(){return new Z(this.am)}),j.a6=(function(){return this.am}),j.h=(function(e){return this.bx(e)}),j.c=(function(e){return this.bx(e|0)}),new I().i(ch,`scala.collection.immutable.ArraySeq$ofByte`,{aR:1,K:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,o:1,n:1,L:1,z:1,p:1,q:1,D:1,O:1,a:1});function lh(e){this.ac=null,this.ac=e}j=lh.prototype=new ih,j.constructor=lh,j.e=(function(){return this.ac.a.length}),j.by=(function(e){return this.ac.a[e]}),j.j=(function(){var e=W();return e.q(this.ac,e.p)}),j.f=(function(e){return e instanceof lh?ic().eX(this.ac,e.ac):Mm(this,e)}),j.d=(function(){return new Z(this.ac)}),j.ba=(function(e,t,n,r){return new Ch(this.ac).ba(e,t,n,r)}),j.a6=(function(){return this.ac}),j.h=(function(e){return na(this.by(e))}),j.c=(function(e){return na(this.by(e|0))}),new I().i(lh,`scala.collection.immutable.ArraySeq$ofChar`,{aS:1,K:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,o:1,n:1,L:1,z:1,p:1,q:1,D:1,O:1,a:1});function uh(e){this.an=null,this.an=e}j=uh.prototype=new ih,j.constructor=uh,j.e=(function(){return this.an.a.length}),j.bz=(function(e){return this.an.a[e]}),j.j=(function(){var e=W();return e.q(this.an,e.p)}),j.f=(function(e){if(e instanceof uh){var t=this.an,n=e.an;if(t===n)return!0;if(t.a.length===n.a.length){for(var r=0;r<t.a.length&&t.a[r]===n.a[r];)r=1+r|0;return r>=t.a.length}return!1}return Mm(this,e)}),j.d=(function(){return new Z(this.an)}),j.a6=(function(){return this.an}),j.h=(function(e){return this.bz(e)}),j.c=(function(e){return this.bz(e|0)}),new I().i(uh,`scala.collection.immutable.ArraySeq$ofDouble`,{aT:1,K:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,o:1,n:1,L:1,z:1,p:1,q:1,D:1,O:1,a:1});function dh(e){this.ao=null,this.ao=e}j=dh.prototype=new ih,j.constructor=dh,j.e=(function(){return this.ao.a.length}),j.bA=(function(e){return this.ao.a[e]}),j.j=(function(){var e=W();return e.q(this.ao,e.p)}),j.f=(function(e){if(e instanceof dh){var t=this.ao,n=e.ao;if(t===n)return!0;if(t.a.length===n.a.length){for(var r=0;r<t.a.length&&t.a[r]===n.a[r];)r=1+r|0;return r>=t.a.length}return!1}return Mm(this,e)}),j.d=(function(){return new Z(this.ao)}),j.a6=(function(){return this.ao}),j.h=(function(e){return this.bA(e)}),j.c=(function(e){return this.bA(e|0)}),new I().i(dh,`scala.collection.immutable.ArraySeq$ofFloat`,{aU:1,K:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,o:1,n:1,L:1,z:1,p:1,q:1,D:1,O:1,a:1});function fh(e){this.ap=null,this.ap=e}j=fh.prototype=new ih,j.constructor=fh,j.e=(function(){return this.ap.a.length}),j.bB=(function(e){return this.ap.a[e]}),j.j=(function(){var e=W();return e.q(this.ap,e.p)}),j.f=(function(e){return e instanceof fh?ic().eY(this.ap,e.ap):Mm(this,e)}),j.d=(function(){return new Z(this.ap)}),j.a6=(function(){return this.ap}),j.h=(function(e){return this.bB(e)}),j.c=(function(e){return this.bB(e|0)}),new I().i(fh,`scala.collection.immutable.ArraySeq$ofInt`,{aV:1,K:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,o:1,n:1,L:1,z:1,p:1,q:1,D:1,O:1,a:1});function ph(e){this.aq=null,this.aq=e}j=ph.prototype=new ih,j.constructor=ph,j.e=(function(){return this.aq.a.length>>>1|0}),j.bC=(function(e){var t=this.aq.a,n=e<<1;return N(t[n],t[n+1|0])}),j.j=(function(){var e=W();return e.q(this.aq,e.p)}),j.f=(function(e){return e instanceof ph?ic().eZ(this.aq,e.aq):Mm(this,e)}),j.d=(function(){return new Z(this.aq)}),j.a6=(function(){return this.aq}),j.h=(function(e){return this.bC(e)}),j.c=(function(e){return this.bC(e|0)}),new I().i(ph,`scala.collection.immutable.ArraySeq$ofLong`,{aW:1,K:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,o:1,n:1,L:1,z:1,p:1,q:1,D:1,O:1,a:1});function mh(e){this.ar=null,this.ar=e}j=mh.prototype=new ih,j.constructor=mh,j.e=(function(){return this.ar.a.length}),j.h=(function(e){return this.ar.a[e]}),j.j=(function(){var e=W();return e.q(this.ar,e.p)}),j.f=(function(e){return e instanceof mh?hc().f2(this.ar,e.ar):Mm(this,e)}),j.d=(function(){return new Z(this.ar)}),j.a6=(function(){return this.ar}),j.c=(function(e){return this.h(e|0)}),new I().i(mh,`scala.collection.immutable.ArraySeq$ofRef`,{aX:1,K:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,o:1,n:1,L:1,z:1,p:1,q:1,D:1,O:1,a:1});function hh(e){this.as=null,this.as=e}j=hh.prototype=new ih,j.constructor=hh,j.e=(function(){return this.as.a.length}),j.bD=(function(e){return this.as.a[e]}),j.j=(function(){var e=W();return e.q(this.as,e.p)}),j.f=(function(e){return e instanceof hh?ic().f0(this.as,e.as):Mm(this,e)}),j.d=(function(){return new Z(this.as)}),j.a6=(function(){return this.as}),j.h=(function(e){return this.bD(e)}),j.c=(function(e){return this.bD(e|0)}),new I().i(hh,`scala.collection.immutable.ArraySeq$ofShort`,{aY:1,K:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,o:1,n:1,L:1,z:1,p:1,q:1,D:1,O:1,a:1});function gh(e){this.aK=null,this.aK=e}j=gh.prototype=new ih,j.constructor=gh,j.e=(function(){return this.aK.a.length}),j.bE=(function(e){}),j.j=(function(){var e=W();return e.q(this.aK,e.p)}),j.f=(function(e){return e instanceof gh?this.aK.a.length===e.aK.a.length:Mm(this,e)}),j.d=(function(){return new Z(this.aK)}),j.a6=(function(){return this.aK}),j.h=(function(e){this.bE(e)}),j.c=(function(e){this.bE(e|0)}),new I().i(gh,`scala.collection.immutable.ArraySeq$ofUnit`,{aZ:1,K:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,o:1,n:1,L:1,z:1,p:1,q:1,D:1,O:1,a:1});function _h(e,t,n,r){for(var i=r,a=n;;)if(a===t)return!i.b()|0;else{if(!i.b()){var o=1+a|0,s=i.y();a=o,i=s;continue}return-1}}function vh(e,t,n){for(var r=n,i=t;;)if(i===r)return!0;else{var a=i.b(),o=r.b();if(!(a||o)&&Zc().H(i.I(),r.I())){var s=i.y(),c=r.y();i=s,r=c;continue}return a&&o}}function yh(){}j=yh.prototype=new Jm,j.constructor=yh;function bh(){}bh.prototype=j,j.h=(function(e){return ep(this,e)}),j.ci=(function(e){return tp(this,e)}),j.ag=(function(){return`LinearSeq`}),j.d=(function(){return new rp(this)}),j.fF=(function(e){if(this.b())return e;if(e.b())return this;for(var t=new jh(e.I(),this),n=t,r=e.y();!r.b();){var i=new jh(r.I(),this);n.ab=i,n=i,r=r.y()}return t}),j.b=(function(){return this===$()}),j.fj=(function(e){if(e instanceof yh)return this.fF(e);if(e.m()===0)return this;if(e instanceof zh&&this.b())return e.fp();var t=e.d();if(t.i()){for(var n=new jh(t.g(),this),r=n;t.i();){var i=new jh(t.g(),this);r.ab=i,r=i}return n}return this}),j.gZ=(function(e){if(this===$())var t=$();else{for(var n=new jh(e.c(this.I()),$()),r=n,i=this.y();i!==$();){var a=new jh(e.c(i.I()),$());r.ab=a,r=a,i=i.y()}var t=n}return t}),j.X=(function(e){for(var t=this;!t.b();)e.c(t.I()),t=t.y()}),j.e=(function(){for(var e=this,t=0;!e.b();)t=1+t|0,e=e.y();return t}),j.a3=(function(e){return e<0?1:_h(this,e,0,this)}),j.aA=(function(){return`List`}),j.f=(function(e){return e instanceof yh?vh(this,this,e):Mm(this,e)}),j.aR=(function(){return op()}),j.cV=(function(e){return this.gZ(e)}),j.gk=(function(e){return xm(this,e,this)}),j.c=(function(e){return ep(this,e|0)});function xh(e){this.at=null,this.at=e}j=xh.prototype=new oh,j.constructor=xh,j.e=(function(){return this.at.a.length}),j.bF=(function(e){return this.at.a[e]}),j.j=(function(){var e=W();return e.q(this.at,e.p)}),j.f=(function(e){return e instanceof xh?ic().f1(this.at,e.at):ah.prototype.f.call(this,e)}),j.d=(function(){return new Z(this.at)}),j.S=(function(){return this.at}),j.h=(function(e){return this.bF(e)}),j.c=(function(e){return this.bF(e|0)}),new I().i(xh,`scala.collection.mutable.ArraySeq$ofBoolean`,{b3:1,M:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,r:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function Sh(e){this.au=null,this.au=e}j=Sh.prototype=new oh,j.constructor=Sh,j.e=(function(){return this.au.a.length}),j.bx=(function(e){return this.au.a[e]}),j.j=(function(){var e=W();return e.q(this.au,e.p)}),j.f=(function(e){return e instanceof Sh?ic().eW(this.au,e.au):ah.prototype.f.call(this,e)}),j.d=(function(){return new Z(this.au)}),j.S=(function(){return this.au}),j.h=(function(e){return this.bx(e)}),j.c=(function(e){return this.bx(e|0)}),new I().i(Sh,`scala.collection.mutable.ArraySeq$ofByte`,{b4:1,M:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,r:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function Ch(e){this.M=null,this.M=e}j=Ch.prototype=new oh,j.constructor=Ch,j.e=(function(){return this.M.a.length}),j.by=(function(e){return this.M.a[e]}),j.j=(function(){var e=W();return e.q(this.M,e.p)}),j.f=(function(e){return e instanceof Ch?ic().eX(this.M,e.M):ah.prototype.f.call(this,e)}),j.d=(function(){return new Z(this.M)}),j.ba=(function(e,t,n,r){var i=e.G;t.length!==0&&(i.l=``+i.l+t);var a=this.M.a.length;if(a!==0){if(n===``)i.fV(this.M);else{i.e();var o=this.M.a[0],s=``+Ki(o);i.l+=s;for(var c=1;c<a;){i.l=``+i.l+n;var l=this.M.a[c],u=``+Ki(l);i.l+=u,c=1+c|0}}}return r.length!==0&&(i.l=``+i.l+r),e}),j.S=(function(){return this.M}),j.h=(function(e){return na(this.by(e))}),j.c=(function(e){return na(this.by(e|0))}),new I().i(Ch,`scala.collection.mutable.ArraySeq$ofChar`,{b5:1,M:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,r:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function wh(e){this.N=null,this.N=e}j=wh.prototype=new oh,j.constructor=wh,j.e=(function(){return this.N.a.length}),j.bz=(function(e){return this.N.a[e]}),j.j=(function(){var e=W();return e.q(this.N,e.p)}),j.f=(function(e){if(e instanceof wh){var t=e.N;if(this.N===t)return!0;if(this.N.a.length===t.a.length){for(var n=0;n<this.N.a.length&&this.N.a[n]===t.a[n];)n=1+n|0;return n>=this.N.a.length}return!1}return ah.prototype.f.call(this,e)}),j.d=(function(){return new Z(this.N)}),j.S=(function(){return this.N}),j.h=(function(e){return this.bz(e)}),j.c=(function(e){return this.bz(e|0)}),new I().i(wh,`scala.collection.mutable.ArraySeq$ofDouble`,{b6:1,M:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,r:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function Th(e){this.O=null,this.O=e}j=Th.prototype=new oh,j.constructor=Th,j.e=(function(){return this.O.a.length}),j.bA=(function(e){return this.O.a[e]}),j.j=(function(){var e=W();return e.q(this.O,e.p)}),j.f=(function(e){if(e instanceof Th){var t=e.O;if(this.O===t)return!0;if(this.O.a.length===t.a.length){for(var n=0;n<this.O.a.length&&this.O.a[n]===t.a[n];)n=1+n|0;return n>=this.O.a.length}return!1}return ah.prototype.f.call(this,e)}),j.d=(function(){return new Z(this.O)}),j.S=(function(){return this.O}),j.h=(function(e){return this.bA(e)}),j.c=(function(e){return this.bA(e|0)}),new I().i(Th,`scala.collection.mutable.ArraySeq$ofFloat`,{b7:1,M:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,r:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function Eh(e){this.av=null,this.av=e}j=Eh.prototype=new oh,j.constructor=Eh,j.e=(function(){return this.av.a.length}),j.bB=(function(e){return this.av.a[e]}),j.j=(function(){var e=W();return e.q(this.av,e.p)}),j.f=(function(e){return e instanceof Eh?ic().eY(this.av,e.av):ah.prototype.f.call(this,e)}),j.d=(function(){return new Z(this.av)}),j.S=(function(){return this.av}),j.h=(function(e){return this.bB(e)}),j.c=(function(e){return this.bB(e|0)}),new I().i(Eh,`scala.collection.mutable.ArraySeq$ofInt`,{b8:1,M:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,r:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function Dh(e){this.aw=null,this.aw=e}j=Dh.prototype=new oh,j.constructor=Dh,j.e=(function(){return this.aw.a.length>>>1|0}),j.bC=(function(e){var t=this.aw.a,n=e<<1;return N(t[n],t[n+1|0])}),j.j=(function(){var e=W();return e.q(this.aw,e.p)}),j.f=(function(e){return e instanceof Dh?ic().eZ(this.aw,e.aw):ah.prototype.f.call(this,e)}),j.d=(function(){return new Z(this.aw)}),j.S=(function(){return this.aw}),j.h=(function(e){return this.bC(e)}),j.c=(function(e){return this.bC(e|0)}),new I().i(Dh,`scala.collection.mutable.ArraySeq$ofLong`,{b9:1,M:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,r:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function Oh(e){this.ax=null,this.ax=e}j=Oh.prototype=new oh,j.constructor=Oh,j.e=(function(){return this.ax.a.length}),j.h=(function(e){return this.ax.a[e]}),j.j=(function(){var e=W();return e.q(this.ax,e.p)}),j.f=(function(e){return e instanceof Oh?hc().f2(this.ax,e.ax):ah.prototype.f.call(this,e)}),j.d=(function(){return new Z(this.ax)}),j.S=(function(){return this.ax}),j.c=(function(e){return this.h(e|0)}),new I().i(Oh,`scala.collection.mutable.ArraySeq$ofRef`,{ba:1,M:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,r:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function kh(e){this.ay=null,this.ay=e}j=kh.prototype=new oh,j.constructor=kh,j.e=(function(){return this.ay.a.length}),j.bD=(function(e){return this.ay.a[e]}),j.j=(function(){var e=W();return e.q(this.ay,e.p)}),j.f=(function(e){return e instanceof kh?ic().f0(this.ay,e.ay):ah.prototype.f.call(this,e)}),j.d=(function(){return new Z(this.ay)}),j.S=(function(){return this.ay}),j.h=(function(e){return this.bD(e)}),j.c=(function(e){return this.bD(e|0)}),new I().i(kh,`scala.collection.mutable.ArraySeq$ofShort`,{bb:1,M:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,r:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function Ah(e){this.aL=null,this.aL=e}j=Ah.prototype=new oh,j.constructor=Ah,j.e=(function(){return this.aL.a.length}),j.bE=(function(e){}),j.j=(function(){var e=W();return e.q(this.aL,e.p)}),j.f=(function(e){return e instanceof Ah?this.aL.a.length===e.aL.a.length:ah.prototype.f.call(this,e)}),j.d=(function(){return new Z(this.aL)}),j.S=(function(){return this.aL}),j.h=(function(e){this.bE(e)}),j.c=(function(e){this.bE(e|0)}),new I().i(Ah,`scala.collection.mutable.ArraySeq$ofUnit`,{bc:1,M:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,r:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function jh(e,t){this.cH=null,this.ab=null,this.cH=e,this.ab=t}j=jh.prototype=new bh,j.constructor=jh,j.bJ=(function(){return new Hf(this)}),j.aC=(function(){return 2}),j.aE=(function(){return`::`}),j.aD=(function(e){if(e===0)return this.cH;if(e===1)return this.ab;throw Df(new Of,e)}),j.I=(function(){return this.cH}),j.y=(function(){return this.ab}),new I().i(jh,`scala.collection.immutable.$colon$colon`,{dY:1,ae:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,aL:1,a3:1,b1:1,b0:1,p:1,q:1,aO:1,D:1,a:1,a4:1,Y:1});function Mh(){Nh=this,$(),$()}j=Mh.prototype=new bh,j.constructor=Mh,j.bJ=(function(){return new Hf(this)}),j.aC=(function(){return 0}),j.aE=(function(){return`Nil`}),j.aD=(function(e){throw Df(new Of,e)}),j.gN=(function(){throw new If(`head of empty list`)}),j.hu=(function(){throw new Pf(`tail of empty list`)}),j.m=(function(){return 0}),j.d=(function(){return ld().E}),j.I=(function(){this.gN()}),j.y=(function(){this.hu()}),new I().i(Mh,`scala.collection.immutable.Nil$`,{e3:1,ae:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,aL:1,a3:1,b1:1,b0:1,p:1,q:1,aO:1,D:1,a:1,a4:1,Y:1});var Nh;function $(){return Nh||=new Mh,Nh}function Ph(e,t){return e.G=t,e}function Fh(e){return Ph(e,new Wd),e}function Ih(){this.G=null}j=Ih.prototype=new eh,j.constructor=Ih,j.V=(function(e){return su(this,e)}),j.d=(function(){return Jp(new Xp,new Km(this))}),j.a3=(function(e){var t=this.G.e();return t===e?0:t<e?-1:1}),j.ag=(function(){return`IndexedSeq`}),j.e=(function(){return this.G.e()}),j.m=(function(){return this.G.e()}),j.fL=(function(e){var t=this.G,n=``+Ki(e);return t.l+=n,this}),j.n=(function(){return this.G.l}),j.b=(function(){return this.G.e()===0}),j.h=(function(e){return na(this.G.eR(e))}),j.c=(function(e){var t=e|0;return na(this.G.eR(t))}),j.R=(function(e){return this.fL(ia(e))}),j.a5=(function(){return this.G.l}),new I().i(Ih,`scala.collection.mutable.StringBuilder`,{ei:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,r:1,u:1,x:1,w:1,Q:1,R:1,U:1,a5:1,o:1,n:1,F:1,E:1,ad:1,a:1});function Lh(e){var t=new zh().cj(e);e.P=t.P,e.ae=t.ae,e.c2=!1}function Rh(e){e.c3=1+e.c3|0,e.c2&&Lh(e)}function zh(){this.c3=0,this.P=null,this.ae=null,this.c2=!1,this.Q=0,this.c3=0,this.P=$(),this.ae=null,this.c2=!1,this.Q=0}j=zh.prototype=new nh,j.constructor=zh,j.d=(function(){return new bp(this.P.d(),new pd((()=>this.c3)))}),j.h=(function(e){return ep(this.P,e)}),j.e=(function(){return this.Q}),j.m=(function(){return this.Q}),j.b=(function(){return this.Q===0}),j.fp=(function(){return this.c2=!this.b(),this.P}),j.fQ=(function(e){Rh(this);var t=new jh(e,$());if(this.Q===0)this.P=t;else{var n=this.ae;n===null&&tl().bb(),n.ab=t}return this.ae=t,this.Q=1+this.Q|0,this}),j.cj=(function(e){var t=e.d();if(t.i()){var n=1,r=new jh(t.g(),$());for(this.P=r;t.i();){var i=new jh(t.g(),$());r.ab=i,r=i,n=1+n|0}this.Q=n,this.ae=r}return this}),j.fK=(function(e){var t=e.d();if(t.i()){var n=new zh().cj(t);if(Rh(this),this.Q===0)this.P=n.P;else{var r=this.ae;r===null&&tl().bb(),r.ab=n.P}this.ae=n.ae,this.Q=this.Q+n.Q|0}return this}),j.ag=(function(){return`ListBuffer`}),j.aR=(function(){return yp()}),j.c=(function(e){var t=e|0;return ep(this.P,t)}),j.a5=(function(){return this.fp()}),j.R=(function(e){return this.fQ(e)}),j.V=(function(e){return this.fK(e)}),new I().i(zh,`scala.collection.mutable.ListBuffer`,{bf:1,af:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,r:1,u:1,x:1,w:1,Q:1,R:1,ah:1,ag:1,p:1,q:1,U:1,a5:1,a:1,a4:1});function Bh(e,t,n){return e.b8=0,e.ad=t,e.w=n,e}function Vh(e){return Bh(e,new F(16),0),e}function Hh(){this.b8=0,this.ad=null,this.w=0}j=Hh.prototype=new nh,j.constructor=Hh,j.d=(function(){return this.hB().d()}),j.a3=(function(e){var t=this.w;return t===e?0:t<e?-1:1}),j.m=(function(){return this.w}),j.eV=(function(e){this.ad=lp().fl(this.ad,this.w,e)}),j.h=(function(e){var t=1+e|0;if(e<0)throw zc().fb(e,this.w-1|0);if(t>this.w)throw zc().fb(t-1|0,this.w-1|0);return this.ad.a[e]}),j.e=(function(){return this.w}),j.hB=(function(){return new Ym(this,new pd((()=>this.b8)))}),j.fN=(function(e){this.b8=1+this.b8|0;var t=1+this.w|0;return this.ad.a.length<=(t-1|0)&&this.eV(t),this.w=t,this.ad.a[t-1|0]=e,this}),j.eO=(function(e){if(e instanceof Hh){var t=e.w;t>0&&(this.b8=1+this.b8|0,this.eV(this.w+t|0),hc().ca(e.ad,0,this.ad,this.w,t),this.w=this.w+t|0)}else su(this,e);return this}),j.ag=(function(){return`ArrayBuffer`}),j.aB=(function(e,t,n){var r=this.w,i=tc().Y(e),a=n<r?n:r,o=t<0?i:i-t|0,s=o<a?o:a,c=s<0?0:s;return c>0&&hc().ca(this.ad,0,e,t,c),c}),j.c=(function(e){return this.h(e|0)}),j.aR=(function(){return lp()}),j.R=(function(e){return this.fN(e)}),j.V=(function(e){return this.eO(e)}),new I().i(Hh,`scala.collection.mutable.ArrayBuffer`,{b2:1,af:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,r:1,u:1,x:1,w:1,Q:1,R:1,ah:1,ag:1,o:1,n:1,F:1,E:1,be:1,p:1,q:1,a:1,a4:1});function Uh(e,t){return e.az=t,e}function Wh(e){return Uh(e,[]),e}function Gh(){this.az=null}j=Gh.prototype=new nh,j.constructor=Gh,j.ag=(function(){return`IndexedSeq`}),j.d=(function(){return Jp(new Xp,new Km(this))}),j.a3=(function(e){var t=this.az.length|0;return t===e?0:t<e?-1:1}),j.h=(function(e){return this.az[e]}),j.e=(function(){return this.az.length|0}),j.m=(function(){return this.az.length|0}),j.aA=(function(){return`WrappedArray`}),j.a5=(function(){return this}),j.R=(function(e){return this.az.push(e),this}),j.c=(function(e){var t=e|0;return this.az[t]}),j.aR=(function(){return wp()}),new I().i(Gh,`scala.scalajs.js.WrappedArray`,{eF:1,af:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,r:1,u:1,x:1,w:1,Q:1,R:1,ah:1,ag:1,q:1,p:1,E:1,o:1,n:1,F:1,be:1,U:1,a:1}),cs(new(Hp.r()).C([]));